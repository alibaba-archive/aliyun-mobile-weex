package com.alibaba.weex.android.utils.fileutils;

/**
 * Created by liyazhou on 2017/10/15.
 */

public interface FileDownloadInterface {
    void onFileDownloadSuccess();
    void onFileDownloadFailed(Exception ex);
}
