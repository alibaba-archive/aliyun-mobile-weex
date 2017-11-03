package com.alibaba.weex.android.adapter.httpdns;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.text.TextUtils;
import android.util.Log;
import android.widget.ImageView;

import com.alibaba.sdk.android.httpdns.HttpDnsService;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

/**
 * Created by liyazhou on 2017/10/22.
 */

public class WXHttpDnsImageAdapter implements IWXImgLoaderAdapter {
    private static final String TAG = "WXHttpDnsImageAdapter";
    private HttpDnsService mHttpDnsService = null;
    private ExecutorService mExecutorService;
    private static Map<String, String> hosts = new HashMap<>();

    static {
        hosts.put("images.apple.com", "221.230.147.75");
        hosts.put("dou.bz", "118.144.67.10");
        hosts.put("book.douban.com", "115.182.201.7");
    }
    @Override
    public void setImage(final String url, final ImageView view, WXImageQuality quality, final WXImageStrategy strategy) {
        Log.e(TAG, "img url:" + url);
        execute(new Runnable() {
            @Override
            public void run() {
                if(view==null||view.getLayoutParams()==null){
                    return;
                }
                if (TextUtils.isEmpty(url)) {
                    view.setImageBitmap(null);
                    return;
                }
                String temp = url;
                if (url.startsWith("//")) {
                    temp = "http:" + url;
                }
                if (view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
                    return;
                }

                HttpURLConnection conn = null;
                try {
                     conn = createConnection(url);
                    if (conn == null) {
                        if (strategy.getImageListener() != null) {
                            strategy.getImageListener().onImageFinish(url, view, false, null);
                        }
                    } else {
                        // 将得到的数据转化成InputStream
                        InputStream is = conn.getInputStream();
                        // 将InputStream转换成Bitmap
                        final Bitmap bitmap = BitmapFactory.decodeStream(is);
                        WXSDKManager.getInstance().postOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                view.setImageBitmap(bitmap);
                            }
                        }, 0);


                        if (strategy.getImageListener() != null) {
                            strategy.getImageListener().onImageFinish(url, view, true, null);
                        }
                    }

                } catch (IOException e) {
                    e.printStackTrace();
                    if (strategy.getImageListener() != null) {
                        strategy.getImageListener().onImageFinish(url, view, false, null);
                    }
                } finally {
                    if (conn != null) {
                        conn.disconnect();
                    }
                }

            }
        });
    }

    private void execute(Runnable runnable){
        if(mExecutorService==null){
            mExecutorService = Executors.newFixedThreadPool(3);
        }
        mExecutorService.execute(runnable);
    }

    protected HttpURLConnection createConnection(String originalUrl) throws IOException {
        mHttpDnsService = HttpDnsManager.getInstance().getHttpDnsService();
        if (mHttpDnsService == null) {
            URL url = new URL(originalUrl);
            return (HttpURLConnection) url.openConnection();
        } else {
            return httpDnsRequest(originalUrl, null);
        }
    }

    private HttpURLConnection httpDnsRequest(String path, String reffer) {
        HttpURLConnection httpDnsConn = null;
        HttpURLConnection originalConn = null;
        URL url = null;
        try {
            url = new URL(path);
            originalConn = (HttpURLConnection) url.openConnection();
            // 异步接口获取IP
            String ip = HttpDnsManager.getInstance().getHttpDnsService().getIpByHostAsync(url.getHost());
            //String ip = hosts.get("images.apple.com");
            if (ip != null) {
                // 通过HTTPDNS获取IP成功，进行URL替换和HOST头设置
                Log.d(TAG, "Get IP: " + ip + " for host: " + url.getHost() + " from HTTPDNS successfully!");
                String newUrl = path.replaceFirst(url.getHost(), ip);
                httpDnsConn = (HttpURLConnection) new URL(newUrl).openConnection();

                // 设置HTTP请求头Host域
                httpDnsConn.setRequestProperty("Host", url.getHost());

                // HTTPS场景
                if (httpDnsConn instanceof HttpsURLConnection) {
                    final HttpsURLConnection httpsURLConnection = (HttpsURLConnection)httpDnsConn;
                    WXTlsSniSocketFactory sslSocketFactory = new WXTlsSniSocketFactory((HttpsURLConnection) httpDnsConn);

                    // sni场景，创建SSLScocket解决SNI场景下的证书问题
                    httpsURLConnection.setSSLSocketFactory(sslSocketFactory);
                    // https场景，证书校验
                    httpsURLConnection.setHostnameVerifier(new HostnameVerifier() {
                        @Override
                        public boolean verify(String hostname, SSLSession session) {
                            String host = httpsURLConnection.getRequestProperty("Host");
                            if (null == host) {
                                host = httpsURLConnection.getURL().getHost();
                            }
                            return HttpsURLConnection.getDefaultHostnameVerifier().verify(host, session);
                        }
                    });
                }
            } else {
                return originalConn;
            }
            httpDnsConn.setConnectTimeout(30000);
            httpDnsConn.setReadTimeout(30000);
            httpDnsConn.setInstanceFollowRedirects(false);


            int code = httpDnsConn.getResponseCode();// Network block
            if (needRedirect(code)) {
                String location = httpDnsConn.getHeaderField("Location");
                if (location == null) {
                    location = httpDnsConn.getHeaderField("location");
                }

                if (location != null) {
                    if (!(location.startsWith("http://") || location
                            .startsWith("https://"))) {
                        //某些时候会省略host，只返回后面的path，所以需要补全url
                        URL originalUrl = new URL(path);
                        location = originalUrl.getProtocol() + "://"
                                + originalUrl.getHost() + location;
                    }
                    Log.e(TAG, "code:" + code + "; location:" + location + "; path" + path);
                    return httpDnsRequest(location, path);
                } else {
                    return originalConn;
                }
            } else {
                // redirect finish.
                Log.e(TAG, "redirect finish");
                return httpDnsConn;
            }
        }  catch (IOException e) {
            Log.w(TAG, "recursiveRequest IOException", e);
        } catch (Exception e) {
            Log.w(TAG, "unknow exception", e);
        }
        return originalConn;
    }

    private boolean needRedirect(int code) {
        return code >= 300 && code < 400;
    }
}
