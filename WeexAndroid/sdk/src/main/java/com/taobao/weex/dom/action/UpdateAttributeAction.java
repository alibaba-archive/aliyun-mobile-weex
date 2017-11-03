/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.taobao.weex.dom.action;

import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.adapter.IWXUserTrackAdapter;
import com.taobao.weex.common.WXErrorCode;
import com.taobao.weex.dom.DOMAction;
import com.taobao.weex.dom.DOMActionContext;
import com.taobao.weex.dom.RenderAction;
import com.taobao.weex.dom.RenderActionContext;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;

/**
 * Created by sospartan on 28/02/2017.
 */

class UpdateAttributeAction implements DOMAction, RenderAction {
  private final String mRef;
  private final JSONObject mData;


  UpdateAttributeAction(String ref, JSONObject data) {
    mRef = ref;
    mData = data;
  }

  @Override
  public void executeDom(DOMActionContext context) {
    if (context.isDestory()) {
      return;
    }
    WXSDKInstance instance = context.getInstance();
    final WXDomObject domObject = context.getDomByRef(mRef);
    if (domObject == null) {
      if (instance != null) {
        instance.commitUTStab(IWXUserTrackAdapter.DOM_MODULE, WXErrorCode.WX_ERR_DOM_UPDATEATTRS);
      }
      return;
    }

    domObject.updateAttr(mData);
    context.postRenderTask(this);

    if (instance != null) {
      instance.commitUTStab(IWXUserTrackAdapter.DOM_MODULE, WXErrorCode.WX_SUCCESS);
    }
  }

  @Override
  public void executeRender(RenderActionContext context) {
    WXComponent comp = context.getComponent(mRef);
    if (comp == null) {
      return;
    }
    comp.updateProperties(mData);
  }
}