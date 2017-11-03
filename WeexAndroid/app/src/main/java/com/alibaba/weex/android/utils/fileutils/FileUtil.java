package com.alibaba.weex.android.utils.fileutils;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.alibaba.weex.android.utils.concurrent.ThreadPoolFactory;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by liyazhou on 2017/10/15.
 */

public class FileUtil {
    private static final String TAG = "FileUtil";
    public static final String TEMP_FILE_PREFIX = "temp_";
    public static String readStreamToString(InputStream inputStream) {
        BufferedReader bufferedReader = null;
        try {
            StringBuilder builder = new StringBuilder(inputStream.available() + 10);
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            char[] data = new char[4096];
            int len = -1;
            while ((len = bufferedReader.read(data)) > 0) {
                builder.append(data, 0, len);
            }

            return builder.toString();
        } catch (IOException e) {
            e.printStackTrace();
            Log.e(TAG, "", e);
        } finally {
            try {
                if (bufferedReader != null)
                    bufferedReader.close();
            } catch (IOException e) {
                Log.e(TAG, "WXFileUtils loadAsset: ", e);
            }
            try {
                if (inputStream != null)
                    inputStream.close();
            } catch (IOException e) {
                Log.e(TAG, "WXFileUtils loadAsset: ", e);
            }
        }

        return "";
    }


    /**
     * 带有本地缓存的weex 文件加载方案
     * @param activity
     * @param wxsdkInstance
     * @param fileUrl
     * @throws MalformedURLException
     * @throws FileNotFoundException
     */
    public static void loadWeexJs(final Activity activity, final WXSDKInstance wxsdkInstance, String fileUrl) throws MalformedURLException, FileNotFoundException {
        int fileNameStartPos = fileUrl.lastIndexOf('/');
        int fileNameEndPos = fileUrl.lastIndexOf('?');
        String fileName = null;
        if (fileNameEndPos == -1) {
            fileName  = fileUrl.substring(fileNameStartPos + 1);
        } else {
            fileName = fileUrl.substring(fileNameStartPos + 1, fileNameEndPos);
        }

        final String finalFileName = fileName;
        final String tempFileName = TEMP_FILE_PREFIX + fileName;
        ThreadPoolFactory.execute(new FileDownloadRunnable(new URL(fileUrl), activity.openFileOutput(tempFileName, Context.MODE_PRIVATE), new FileDownloadInterface() {
            @Override
            public void onFileDownloadSuccess() {
                Log.e(TAG, "download file success");
                try {
                    String jsFileContent = FileUtil.readStreamToString(activity.openFileInput(tempFileName));
                    wxsdkInstance.render(activity.getPackageName(), jsFileContent, null, null, WXRenderStrategy.APPEND_ASYNC);
                    FileOutputStream fo = activity.openFileOutput(finalFileName, Context.MODE_PRIVATE);
                    fo.write(jsFileContent.getBytes());
                    fo.close();
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                    activity.finish();
                } catch (IOException e) {
                    e.printStackTrace();
                    activity.finish();
                }
            }

            @Override
            public void onFileDownloadFailed(Exception ex) {

                try {
                    Log.e(TAG, "download file failed:", ex);
                    wxsdkInstance.render(activity.getPackageName(), FileUtil.readStreamToString(activity.openFileInput(finalFileName)), null, null, WXRenderStrategy.APPEND_ASYNC);
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                    activity.finish();
                }
            }
        }));
    }
}