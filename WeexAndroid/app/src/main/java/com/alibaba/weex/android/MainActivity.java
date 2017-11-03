package com.alibaba.weex.android;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "MainActivity";
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 0x0002;
    WXSDKInstance mWXSDKInstance;
    Uri mUri;

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main_scan, menu);
        return true;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_backup);

        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(new RenderListener());
        WXSDKEngine.setActivityNavBarSetter(new NavigatorAdapter());
        this.loadJs();
        }



    /**
     * 加载JS文件函数
     */
    private void loadJs() {
        mUri = getIntent().getData();

        if (mUri == null) {
            // mWXSDKInstance.renderByUrl(getPackageName(), "http://10.100.33.186:8081/navigator.weex.js", null, null, WXRenderStrategy.APPEND_ASYNC);
             mWXSDKInstance.render(getPackageName(), WXFileUtils.loadAsset("image.weex.js", getApplicationContext()), null, null, WXRenderStrategy.APPEND_ASYNC);
        } else {
            Log.e(TAG, mUri.toString());
            mWXSDKInstance.renderByUrl(getPackageName(), mUri.toString(), null, null, WXRenderStrategy.APPEND_ASYNC);
        }
    }

    private void handleScanCodeResult(String result) {
        Uri mUri = Uri.parse(result);
        if (mUri == null) {
            Log.e(TAG, "scan result null, return");
        } else {
            if (mUri.getQueryParameterNames().contains("_wx_devtool")) {
                WXEnvironment.sRemoteDebugMode = true;
                WXEnvironment.sRemoteDebugProxyUrl = mUri.getQueryParameter("_wx_devtool");
                WXSDKEngine.reload();
            } else {
                Intent activityIntent = new Intent(MainActivity.this, MainActivity.class);
                activityIntent.setData(mUri);
                activityIntent.setAction("com.taobao.android.intent.action.WEEX");
                startActivity(activityIntent);
            }
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityResume();
        }
    }
    @Override
    protected void onPause() {
        super.onPause();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityPause();
        }
    }
    @Override
    protected void onStop() {
        super.onStop();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityStop();
        }
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance!=null){
            mWXSDKInstance.onActivityDestroy();
        }
    }

    private void initDebugEnvironment(boolean enable, String host) {
        WXEnvironment.sRemoteDebugMode = enable;
        WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_scan:
                Log.e(TAG, "scan");
                if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                    Log.e(TAG, "no permission");
                    if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.CAMERA)) {
                        Toast.makeText(this, "please give me the permission", Toast.LENGTH_SHORT).show();
                    } else {
                        ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
                    }
                } else {
                    Log.e(TAG, "got permission");
                    //startActivity(new Intent(this, CaptureActivity.class));
                    IntentIntegrator integrator = new IntentIntegrator(this);
                    integrator.setPrompt("请扫描"); //底部的提示文字，设为""可以置空
                    integrator.setCameraId(0); //前置或者后置摄像头
                    integrator.setBeepEnabled(false); //扫描成功的「哔哔」声，默认开启
                    integrator.setCaptureActivity(ScanActivity.class);
                    integrator.initiateScan();
                }
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }

    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, intent);
        if(result != null) {
            if(result.getContents() == null) {
                Log.d(TAG, "Cancelled");
                Toast.makeText(this, "Cancelled", Toast.LENGTH_LONG).show();
            } else {
                // 获取到扫码结果后跳转
                Log.d(TAG, "Scanned: " + result.getContents());
                Toast.makeText(this, "Scanned: " + result.getContents(), Toast.LENGTH_LONG).show();
                handleScanCodeResult(result.getContents());
            }
        }
    }

    private static class NavigatorAdapter implements IActivityNavBarSetter {

        @Override
        public boolean push(String param) {
            Log.e(TAG, "push:" + param);
            return false;
        }

        @Override
        public boolean pop(String param) {
            Log.e(TAG, "pop:" + param);
            return false;
        }

        @Override
        public boolean setNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarTitle(String param) {
            return false;
        }
    }

    private  class RenderListener implements IWXRenderListener {

        @Override
        public void onViewCreated(WXSDKInstance instance, View view) {
            setContentView(view);
        }

        @Override
        public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        }

        @Override
        public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

        }

        @Override
        public void onException(WXSDKInstance instance, String errCode, String msg) {

        }
    }
}


