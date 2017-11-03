package com.alibaba.weex.android.adapter.httpdns;

import android.content.Context;

import com.alibaba.sdk.android.httpdns.HttpDns;
import com.alibaba.sdk.android.httpdns.HttpDnsService;

/**
 * Created by liyazhou on 2017/10/22.
 */

public class HttpDnsManager {
    private static final String ACCOUNT_ID = "your accountid";
    private HttpDnsService httpDnsService = null;

    private static  HttpDnsManager instance = null;

    private HttpDnsManager() {}

    public static HttpDnsManager getInstance() {
        if (instance == null) {
            synchronized (HttpDnsManager.class) {
                if (instance == null) {
                    instance = new HttpDnsManager();
                }
            }
        }
        return instance;
    }


    public void init(Context context) {
        if (context != null) {
            httpDnsService = HttpDns.getService(context, ACCOUNT_ID);
        }
    }

    public HttpDnsService getHttpDnsService() {
        return this.httpDnsService;
    }


}
