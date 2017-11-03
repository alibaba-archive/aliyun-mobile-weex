package com.alibaba.weex.android.utils.fileutils;

import java.io.BufferedInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;
import android.util.Log;

/**
 * 文件下载类
 *
 * @author yangxiaolong
 * @2014-5-6
 */
public class FileDownloadRunnable implements Runnable {

    private static final String TAG = FileDownloadRunnable.class.getSimpleName();

    /** 当前下载是否完成 */
    private boolean isCompleted = false;
    /** 当前下载文件长度 */
    private int downloadLength = 0;
    /** 文件下载路径 */
    private URL downloadUrl;

    private FileOutputStream outputStream;

    private FileDownloadInterface callback;

    /**
     *
     * @param downloadUrl:文件下载地址
     */
    public FileDownloadRunnable(URL downloadUrl, FileOutputStream fileOutputStream, FileDownloadInterface callback) {
        this.downloadUrl = downloadUrl;
        this.outputStream = fileOutputStream;
        this.callback = callback;
    }

    @Override
    public void run() {
        boolean success = true;
        BufferedInputStream bis = null;

        try {
            URLConnection conn = downloadUrl.openConnection();

            byte[] buffer = new byte[1024];
            bis = new BufferedInputStream(conn.getInputStream());

            int len;
            while ((len = bis.read(buffer, 0, 1024)) != -1) {
                outputStream.write(buffer, 0, len);
                downloadLength += len;
            }
            isCompleted = true;
            Log.d(TAG, "current thread task has finished,all size:"
                    + downloadLength);

        } catch (IOException e) {
            e.printStackTrace();
            success = false;
            if (this.callback != null) {
                this.callback.onFileDownloadFailed(e);
            }
        } finally {
            if (bis != null) {
                try {
                    bis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (outputStream != null) {
                try {
                    outputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        if (success && this.callback != null) {
            this.callback.onFileDownloadSuccess();
        }

    }

}
