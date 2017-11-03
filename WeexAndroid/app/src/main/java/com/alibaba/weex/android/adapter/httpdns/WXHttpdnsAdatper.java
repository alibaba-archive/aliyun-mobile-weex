package com.alibaba.weex.android.adapter.httpdns;

import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.text.TextUtils;
import android.util.Log;

import com.alibaba.sdk.android.httpdns.HttpDnsService;
import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.common.WXRequest;
import com.taobao.weex.common.WXResponse;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

/**
 * Created by liyazhou on 2017/10/22.
 */

public class WXHttpdnsAdatper implements IWXHttpAdapter {
    private static final String TAG = "WXHttpdnsAdatper";
    private static final IEventReporterDelegate DEFAULT_DELEGATE = new WXHttpdnsAdatper.NOPEventReportDelegate();
    private static final long CONNECT_TIMEOUT = 15 * 1000;
    private static final long READ_TIMEOUT = 15 * 1000;
    private ExecutorService mExecutorService;
    private HttpDnsService mHttpDnsService = null;
    private static Map<String, String> hosts = new HashMap<>();

    static {
        hosts.put("api.github.com", "192.30.255.117");
        hosts.put("dou.bz", "118.144.67.10");
        hosts.put("book.douban.com", "115.182.201.7");
    }

    private void execute(Runnable runnable){
        if(mExecutorService==null){
            mExecutorService = Executors.newFixedThreadPool(3);
        }
        mExecutorService.execute(runnable);
    }

    @Override
    public void sendRequest(final WXRequest request, final OnHttpListener listener) {
        if (listener != null) {
            listener.onHttpStart();
        }

        Log.e(TAG, "URL:" + request.url);
        execute(new Runnable() {
            @Override
            public void run() {
                WXResponse response = new WXResponse();
                WXHttpdnsAdatper.IEventReporterDelegate reporter = getEventReporterDelegate();
                try {
                    HttpURLConnection connection = openConnection(request, listener);
                    reporter.preConnect(connection, request.body);
                    Map<String,List<String>> headers = connection.getHeaderFields();
                    int responseCode = connection.getResponseCode();
                    if(listener != null){
                        listener.onHeadersReceived(responseCode,headers);
                    }
                    reporter.postConnect();

                    response.statusCode = String.valueOf(responseCode);
                    if (responseCode >= 200 && responseCode<=299) {
                        InputStream rawStream = connection.getInputStream();
                        rawStream = reporter.interpretResponseStream(rawStream);
                        response.originalData = readInputStreamAsBytes(rawStream, listener);
                    } else {
                        response.errorMsg = readInputStream(connection.getErrorStream(), listener);
                        Log.e(TAG, "errMsg:" + response.errorMsg);
                    }
                    if (listener != null) {
                        listener.onHttpFinish(response);
                    }
                } catch (IOException |IllegalArgumentException e) {
                    e.printStackTrace();
                    response.statusCode = "-1";
                    response.errorCode="-1";
                    response.errorMsg=e.getMessage();
                    if(listener!=null){
                        listener.onHttpFinish(response);
                    }
                    if (e instanceof IOException) {
                        reporter.httpExchangeFailed((IOException) e);
                    }
                }
            }
        });
    }


    /**
     * Opens an {@link HttpURLConnection} with parameters.
     *
     * @param request
     * @param listener
     * @return an open connection
     * @throws IOException
     */
    private HttpURLConnection openConnection(WXRequest request, OnHttpListener listener) throws IOException {
        URL url = new URL(request.url);
        HttpURLConnection connection = openHttpDnsConnection(request, request.url, listener, null);
        return connection;
    }

    private byte[] readInputStreamAsBytes(InputStream inputStream,OnHttpListener listener) throws IOException{
        if(inputStream == null){
            return null;
        }
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();

        int nRead;
        int readCount = 0;
        byte[] data = new byte[2048];

        while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
            buffer.write(data, 0, nRead);
            readCount += nRead;
            if (listener != null) {
                listener.onHttpResponseProgress(readCount);
            }
        }

        buffer.flush();

        return buffer.toByteArray();
    }

    private String readInputStream(InputStream inputStream, OnHttpListener listener) throws IOException {
        if(inputStream == null){
            return null;
        }
        StringBuilder builder = new StringBuilder();
        BufferedReader localBufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        char[] data = new char[2048];
        int len;
        while ((len = localBufferedReader.read(data)) != -1) {
            builder.append(data, 0, len);
            if (listener != null) {
                listener.onHttpResponseProgress(builder.length());
            }
        }
        localBufferedReader.close();
        return builder.toString();
    }

    private HttpURLConnection openHttpDnsConnection(WXRequest request, String path, OnHttpListener listener, String reffer) {
        HttpURLConnection conn = null;
        URL url = null;
        try {
            url = new URL(path);
            conn = (HttpURLConnection) url.openConnection();

            HttpURLConnection tmpConn = httpDnsConnection(url, path);
            if (tmpConn != null) {
                conn = tmpConn;
            } else {
                Log.e(TAG, "HTTPDNS unusable, degrade to local dns");
            }

            conn.setConnectTimeout(request.timeoutMs * 10); // 默认超时时间为3s,可能不够，此处为演示设置为30S， 可自行设置
            conn.setReadTimeout(request.timeoutMs * 10);
            conn.setUseCaches(false);
            conn.setDoInput(true);

            // 加入用户自定义请求头
            if (request.paramMap != null) {
                Set<String> keySets = request.paramMap.keySet();
                for (String key : keySets) {
                    conn.addRequestProperty(key, request.paramMap.get(key));
                }
            }

            if ("POST".equals(request.method) || "PUT".equals(request.method) || "PATCH".equals(request.method)) {
                conn.setRequestMethod(request.method);
                if (request.body != null) {
                    if (listener != null) {
                        listener.onHttpUploadProgress(0);
                    }
                    conn.setDoOutput(true);
                    DataOutputStream out = new DataOutputStream(conn.getOutputStream());
                    //TODO big stream will cause OOM; Progress callback is meaningless
                    out.write(request.body.getBytes());
                    out.close();
                    if (listener != null) {
                        listener.onHttpUploadProgress(100);
                    }
                }
            } else if (!TextUtils.isEmpty(request.method)) {
                conn.setRequestMethod(request.method);
            } else {
                conn.setRequestMethod("GET");
            }


            int code = conn.getResponseCode();// Network block
            Log.e(TAG, "code:" + code);
            if (needRedirect(code)) {
                Log.e(TAG, "need redirect");
                String location = conn.getHeaderField("Location");
                if (location == null) {
                    location = conn.getHeaderField("location");
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
                    return openHttpDnsConnection(request, location, listener, path);
                } else {
                    return conn;
                }
            } else {
                // redirect finish.
                Log.e(TAG, "redirect finish");
                return conn;
            }
        }  catch (IOException e) {
            Log.w(TAG, "recursiveRequest IOException");
        } catch (Exception e) {
            Log.w(TAG, "unknow exception");
        }
        return conn;
    }

    private HttpURLConnection httpDnsConnection(URL url, String path) {
        HttpURLConnection conn = null;
        // 异步接口获取IP
        String ip = HttpDnsManager.getInstance().getHttpDnsService().getIpByHostAsync(url.getHost());
        //String ip = hosts.get(url.getHost());
        if (ip != null) {
            // 通过HTTPDNS获取IP成功，进行URL替换和HOST头设置
            Log.d(TAG, "Get IP: " + ip + " for host: " + url.getHost() + " from HTTPDNS successfully!");
            String newUrl = path.replaceFirst(url.getHost(), ip);
            Log.d(TAG, "newurl:" + newUrl);
            try {
                conn = (HttpURLConnection) new URL(newUrl).openConnection();
            } catch (IOException e) {
                return null;
            }

            // 设置HTTP请求头Host域
            conn.setRequestProperty("Host", url.getHost());

            // HTTPS场景
            if (conn instanceof HttpsURLConnection) {
                final HttpsURLConnection httpsURLConnection = (HttpsURLConnection)conn;
                WXTlsSniSocketFactory sslSocketFactory = new WXTlsSniSocketFactory((HttpsURLConnection) conn);

                // SNI场景，创建SSLScocket解决SNI场景下的证书问题
                conn.setInstanceFollowRedirects(false);
                httpsURLConnection.setSSLSocketFactory(sslSocketFactory);
                // https场景，证书校验
                httpsURLConnection.setHostnameVerifier(new HostnameVerifier() {
                    @Override
                    public boolean verify(String hostname, SSLSession session) {
                        String host = httpsURLConnection.getRequestProperty("Host");
                        Log.e(TAG, "verify host:" + host);
                        if (null == host) {
                            host = httpsURLConnection.getURL().getHost();
                        }
                        return HttpsURLConnection.getDefaultHostnameVerifier().verify(host, session);
                    }
                });
            }
        } else {
            Log.e(TAG, "no corresponding ip found, return null");
            return null;
        }

        return conn;
    }

    private boolean needRedirect(int code) {
        return code >= 300 && code < 400;
    }


    public @NonNull
    WXHttpdnsAdatper.IEventReporterDelegate getEventReporterDelegate() {
        return DEFAULT_DELEGATE;
    }

    public interface IEventReporterDelegate {
        void preConnect(HttpURLConnection connection, @Nullable String body);
        void postConnect();
        InputStream interpretResponseStream(@Nullable InputStream inputStream);
        void httpExchangeFailed(IOException e);
    }

    private static class NOPEventReportDelegate implements WXHttpdnsAdatper.IEventReporterDelegate {
        @Override
        public void preConnect(HttpURLConnection connection, @Nullable String body) {
            //do nothing
        }

        @Override
        public void postConnect() {
            //do nothing
        }

        @Override
        public InputStream interpretResponseStream(@Nullable InputStream inputStream) {
            return inputStream;
        }

        @Override
        public void httpExchangeFailed(IOException e) {
            //do nothing
        }
    }
}
