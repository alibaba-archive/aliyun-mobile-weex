package com.alibaba.weex.android;

import android.app.Application;

import com.alibaba.weex.android.adapter.ImageAdapter;
import com.alibaba.weex.android.adapter.httpdns.HttpDnsManager;
import com.alibaba.weex.android.component.RichText;
import com.alibaba.weex.android.extend.module.WXEventModule;
import com.alibaba.weex.android.module.TestModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by liyazhou on 2017/9/5.
 */

public class WXApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        initHttpDns();
        initWeex();
    }

    private void initWeex() {
        // 自定义相关配置
        InitConfig config=new InitConfig.Builder()
                .setImgAdapter(new ImageAdapter()) // 自定义图片适配器
                //.setHttpAdapter(new WXHttpdnsAdatper()) // 自定义HTTP请求适配器
                .build();
        WXSDKEngine.initialize(this,config);

        // register module
        try {
            WXSDKEngine.registerModule("testmodule", TestModule.class); // 注册自定义模块
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerComponent("richtext", RichText.class); // 注册自定义UI组件
        } catch (WXException e) {
            e.printStackTrace();
        }
    }

    private void initHttpDns() {
        HttpDnsManager.getInstance().init(this);
    }
}

