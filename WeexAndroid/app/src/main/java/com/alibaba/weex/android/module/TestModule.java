package com.alibaba.weex.android.module;

import android.util.Log;
import android.widget.Toast;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by liyazhou on 2017/9/24.
 */

public class TestModule extends WXModule {
    private static final String TAG = "TestModule";

    @JSMethod
    public void performClick(String str) {
        Toast.makeText(mWXSDKInstance.getContext(), str, Toast.LENGTH_SHORT).show();
    }


    public void syncTest() {
        Log.e(TAG, "current thread:" + Thread.currentThread().getName());
    }

    /**
     * a test for invoke module function in async thread
     */
    @JSMethod(uiThread = false)
    public void asyncTest() {
        Log.e(TAG, "current thread:" + Thread.currentThread().getName());
    }

    /**
     * an example of native pass int to js
     * method must be called in async thread
     * @return
     */
    @JSMethod(uiThread = false)
    public int getInteger() {
        return 1;
    }

    /**
     * an example of native pass string to js
     * method must be called in async thread
     * @return
     */
    @JSMethod(uiThread = false)
    public String getStr() {
        return "str";
    }

    /**
     * JSON NOT allow KeyValue  as  non-string value
     * @return
     */
    @JSMethod(uiThread = false)
    public Object getObject(){
        ArrayList list = new ArrayList();
        list.add("222");
        list.add("test");
        Map map = new HashMap();
        map.put(11,"test11");
        map.put("22","test22");
        list.add(map);
        return list;
    }

    @JSMethod(uiThread = false)
    public ArrayList getArray(){
        ArrayList list = new ArrayList();
        list.add("ArrayList test 1");
        list.add("ArrayList test 2");
        return list;
    }


}
