// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _foo = __webpack_require__(1);

	var _foo2 = _interopRequireDefault(_foo);

	var _textarea = __webpack_require__(5);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _image = __webpack_require__(9);

	var _image2 = _interopRequireDefault(_image);

	var _list = __webpack_require__(13);

	var _list2 = _interopRequireDefault(_list);

	var _animation = __webpack_require__(17);

	var _animation2 = _interopRequireDefault(_animation);

	var _websocket = __webpack_require__(21);

	var _websocket2 = _interopRequireDefault(_websocket);

	var _dom = __webpack_require__(25);

	var _dom2 = _interopRequireDefault(_dom);

	var _storage = __webpack_require__(29);

	var _storage2 = _interopRequireDefault(_storage);

	var _stream = __webpack_require__(33);

	var _stream2 = _interopRequireDefault(_stream);

	var _fireevent = __webpack_require__(37);

	var _fireevent2 = _interopRequireDefault(_fireevent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const meta = weex.requireModule('meta')
	// meta.setViewport({
	//   width: 640
	// })
	_foo2.default.el = '#root';
	exports.default = new Vue(_foo2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/foo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-01465769"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 700,
	    "height": 700
	  },
	  "slider": {
	    "marginTop": 25,
	    "marginLeft": 25,
	    "width": 700,
	    "height": 700,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  },
	  "title": {
	    "position": "absolute",
	    "top": 20,
	    "left": 20,
	    "paddingLeft": 20,
	    "width": 200,
	    "color": "#FFFFFF",
	    "fontSize": 36,
	    "lineHeight": 60,
	    "backgroundColor": "rgba(0,0,0,0.3)"
	  },
	  "frame": {
	    "width": 700,
	    "height": 700,
	    "position": "relative"
	  },
	  "indicator": {
	    "width": 100,
	    "height": 100,
	    "itemColor": "green",
	    "itemSelectedColor": "red",
	    "itemSize": 10,
	    "position": "absolute",
	    "top": 600,
	    "left": 600
	  },
	  "switch-example": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "marginTop": 60
	  },
	  "switch-label": {
	    "fontSize": 40,
	    "lineHeight": 60,
	    "width": 350,
	    "color": "#666666",
	    "textAlign": "right",
	    "marginRight": 20
	  },
	  "switch-info": {
	    "fontSize": 30,
	    "lineHeight": 60,
	    "color": "#bbbbbb",
	    "marginLeft": 10
	  },
	  "text-example": {
	    "lines": 2,
	    "color": "#666666",
	    "fontSize": 32
	  },
	  "panel": {
	    "width": 600,
	    "marginLeft": 75,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#BBBBBB",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 15,
	    "paddingRight": 15,
	    "marginBottom": 30
	  }
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      imageList: [{ title: 'item A', src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item B', src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { title: 'item C', src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],
	      checked: false
	    };
	  },

	  methods: {
	    onSwitchChange: function onSwitchChange(e) {
	      this.checked = e.value;
	    },
	    onclick: function onclick(e) {
	      console.log('change');
	    }
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["switch-example"]
	  }, [_c('text', {
	    staticClass: ["switch-label"]
	  }, [_vm._v("switch")]), _c('switch', {
	    on: {
	      "change": _vm.onSwitchChange
	    }
	  }), _c('text', {
	    staticClass: ["switch-info"],
	    on: {
	      "click": _vm.onclick
	    }
	  }, [_vm._v(_vm._s(_vm.checked))])]), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text-example"]
	  }, [_vm._v("Weex 是一套简单易用的跨平台开发方案，能以 Web 的开发体验构建高性能、可扩展的原生应用。Vue 是一个轻量并且功能强大的渐进式前端框架。")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/textarea.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-becafeb2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "textarea": {
	    "fontSize": 50,
	    "width": 650,
	    "marginTop": 50,
	    "marginLeft": 50,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "color": "#666666",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41b883"
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');

	exports.default = {
	  methods: {
	    oninput: function oninput(event) {
	      modal.toast({
	        message: 'oniput ' + event.value,
	        duration: 0.8
	      });
	    },
	    onchange: function onchange(event) {
	      modal.toast({
	        message: 'onchange ' + event.value,
	        duration: 0.8
	      });
	    },
	    onfocus: function onfocus(event) {
	      modal.toast({
	        message: 'onfocus ' + event.value,
	        duration: 0.8
	      });
	    },
	    onblur: function onblur(event) {
	      modal.toast({
	        message: 'onblur ' + event.value,
	        duration: 0.8
	      });
	    }
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('textarea', {
	    staticClass: ["textarea"],
	    on: {
	      "input": _vm.oninput,
	      "change": _vm.onchange,
	      "focus": _vm.onfocus,
	      "blur": _vm.onblur
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/image.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-31b68abe"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = {
	  "image-example": {
	    "width": 750,
	    "height": 750
	  },
	  "image-text-example": {
	    "fontSize": 50,
	    "color": "#ff0000"
	  },
	  "title": {
	    "position": "absolute",
	    "top": 50,
	    "left": 10
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var dom = weex.requireModule('dom');
	exports.default = {
	  data: function data() {
	    return {
	      success: false,
	      event: "-"
	    };
	  },
	  created: function created() {},

	  methods: {
	    onload: function onload(e) {
	      modal.toast({
	        message: 'success: ' + e.success + '; width: ' + e.size.naturalWidth + ', height: ' + e.size.naturalHeight,
	        duration: 0.8
	      });
	    },
	    onclick: function onclick(e) {
	      weex.requireModule('mymodule').printLog("测试一下");
	      var customcomponent = this.$refs.richText[0];
	      // customcomponent.jsMethodTest()
	    }
	  }
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('image', {
	    staticClass: ["image-example"],
	    attrs: {
	      "resize": "contain",
	      "src": "../assets/logo.png"
	    },
	    on: {
	      "load": _vm.onload,
	      "click": _vm.onclick
	    }
	  }), _c('div', {
	    staticClass: ["title"]
	  }, [_c('text', {
	    staticClass: ["image-text-example"]
	  }, [_vm._v(_vm._s(_vm.event))])]), _c('richText', {
	    ref: 'richtext',
	    staticStyle: {
	      width: "200",
	      height: "100"
	    },
	    attrs: {
	      "id": "richtext",
	      "tel": "12305"
	    }
	  }, [_vm._v("12305")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(14)
	)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-63f35a8b"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "width": 600,
	    "height": 250,
	    "marginLeft": 75,
	    "marginTop": 35,
	    "marginBottom": 35,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "color": "#41B883"
	  },
	  "loading": {
	    "justifyContent": "center"
	  },
	  "indicator": {
	    "color": "#888888",
	    "fontSize": 42,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var LOADMORE_COUNT = 4;
	exports.default = {
	  data: function data() {
	    return {
	      showLoading: 'hide',
	      lists: [1, 2, 3, 4, 5]
	    };
	  },

	  methods: {
	    fetch: function fetch(event) {
	      var _this = this;

	      modal.toast({
	        message: 'loadmore',
	        duration: 1
	      });

	      setTimeout(function () {
	        var length = _this.lists.length;
	        for (var i = length; i < length + LOADMORE_COUNT; ++i) {
	          _this.lists.push(i + 1);
	        }
	      }, 800);
	    },
	    onscroll: function onscroll(event) {
	      modal.toast({
	        message: 'scroll',
	        duration: 0.5
	      });
	    },
	    oncellclick: function oncellclick(num, event) {
	      modal.toast({
	        message: 'clicked ' + num,
	        duration: 0.8
	      });
	    },
	    onloading: function onloading(event) {
	      var _this2 = this;

	      modal.toast({ message: 'loading', duration: 1 });
	      this.showLoading = 'show';
	      setTimeout(function () {
	        var length = _this2.lists.length;
	        for (var i = length; i < length + LOADMORE_COUNT; ++i) {
	          _this2.lists.push(i + 1);
	        }
	        _this2.showLoading = 'hide';
	      }, 1500);
	    }
	  }
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["list"],
	    attrs: {
	      "loadmoreoffset": "0",
	      "offsetAccuracy": "300"
	    },
	    on: {
	      "scroll": _vm.onscroll
	    }
	  }, [_vm._l((_vm.lists), function(num) {
	    return _c('cell', {
	      staticClass: ["cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.oncellclick(num, $event)
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["panel"]
	    }, [_c('text', {
	      staticClass: ["text"]
	    }, [_vm._v(_vm._s(num))])])])
	  }), _c('loading', {
	    staticClass: ["loading"],
	    attrs: {
	      "display": _vm.showLoading
	    },
	    on: {
	      "loading": _vm.onloading
	    }
	  }, [_c('text', {
	    staticClass: ["indicator"]
	  }, [_vm._v("Loading...")])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(18)
	)

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/animation.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5b76a2e7"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = {
	  "box": {
	    "width": 250,
	    "height": 250,
	    "backgroundColor": "#DDDDDD",
	    "marginTop": 20
	  }
	}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');
	var modal = weex.requireModule('modal');

	exports.default = {
	  methods: {
	    move: function move() {
	      var testEl = this.$refs.test;
	      animation.transition(testEl, {
	        styles: {
	          backgroundColor: '#FF0000',
	          transform: 'translate(250px, 100px)',
	          transformOrigin: 'center center'
	        },
	        duration: 800,
	        timingFunction: 'ease',
	        delay: 0
	      }, function () {
	        modal.toast({ message: 'animation finished.' });
	      });
	    },
	    rotate: function rotate() {
	      var testEl1 = this.$refs.testrotate;
	      animation.transition(testEl1, {
	        styles: {
	          backgroundColor: '#00FF00',
	          opacity: 0.5,
	          transform: 'rotate(100deg)'
	        },
	        duration: 1000,
	        timingFunction: 'ease-in',
	        delay: 0
	      }, function () {
	        modal.toast({ message: 'rotate finished' });
	      });
	    },
	    scale: function scale() {
	      var testEl2 = this.$refs.testscale;
	      animation.transition(testEl2, {
	        styles: {
	          backgroundColor: '#0000FF',
	          opacity: 0.2,
	          transform: 'scale(1.3, 0.8)'
	        },
	        duration: 1000,
	        timingFunction: 'ease-out',
	        delay: 0
	      }, function () {
	        modal.toast({ message: 'scale finished' });
	      });
	    }
	  }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    ref: "test",
	    staticClass: ["box"],
	    on: {
	      "click": _vm.move
	    }
	  })]), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    ref: "testrotate",
	    staticClass: ["box"],
	    on: {
	      "click": _vm.rotate
	    }
	  })]), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    ref: "testscale",
	    staticClass: ["box"],
	    on: {
	      "click": _vm.scale
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(22)
	)

	/* script */
	__vue_exports__ = __webpack_require__(23)

	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/websocket.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-68666cac"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = {
	  "input": {
	    "fontSize": 40,
	    "height": 80,
	    "width": 600
	  },
	  "button": {
	    "fontSize": 36,
	    "width": 150,
	    "color": "#41B883",
	    "textAlign": "center",
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "marginRight": 20,
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var websocket = weex.requireModule('webSocket');
	exports.default = {
	  data: function data() {
	    return {
	      connectinfo: '',
	      sendinfo: '',
	      onopeninfo: '',
	      onmessage: '',
	      oncloseinfo: '',
	      onerrorinfo: '',
	      closeinfo: '',
	      txtInput: '',
	      navBarHeight: 88,
	      title: 'Navigator',
	      dir: 'examples',
	      baseURL: '',
	      input_value: 'fjksdfsdd'
	    };
	  },

	  methods: {
	    connect: function connect() {
	      websocket.WebSocket('ws://echo.websocket.org', '');
	      var self = this;
	      self.onopeninfo = 'connecting...';
	      websocket.onopen = function (e) {
	        self.onopeninfo = 'websocket open';
	      };
	      websocket.onmessage = function (e) {
	        self.onmessage = e.data;
	      };
	      websocket.onerror = function (e) {
	        self.onerrorinfo = e.data;
	      };
	      websocket.onclose = function (e) {
	        self.onopeninfo = '';
	        self.onerrorinfo = e.code;
	      };
	    },
	    send: function send(e) {
	      var input = this.$refs.input;
	      input.blur();
	      websocket.send(this.txtInput);
	      this.sendinfo = this.txtInput;
	    },
	    oninput: function oninput(event) {
	      this.txtInput = event.value;
	    },
	    close: function close(e) {
	      websocket.close();
	    }
	  }
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('div', [_vm._m(0), _c('input', {
	    ref: "input",
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "please input message to send",
	      "autofocus": "false",
	      "value": (_vm.input_value)
	    },
	    on: {
	      "change": _vm.onchange,
	      "input": [function($event) {
	        _vm.input_value = $event.target.attr.value
	      }, _vm.oninput]
	    }
	  }), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      justifyContent: "center"
	    }
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.connect
	    }
	  }, [_vm._v("connect")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.send
	    }
	  }, [_vm._v("send")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.close
	    }
	  }, [_vm._v("close")])]), _vm._m(1), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "80px"
	    }
	  }, [_vm._v(_vm._s(_vm.sendinfo))]), _vm._m(2), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "80px"
	    }
	  }, [_vm._v(_vm._s(_vm.onopeninfo))]), _vm._m(3), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "400px"
	    }
	  }, [_vm._v(_vm._s(_vm.onmessage))]), _vm._m(4), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "80px"
	    }
	  }, [_vm._v(_vm._s(_vm.oncloseinfo))]), _vm._m(5), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "80px"
	    }
	  }, [_vm._v(_vm._s(_vm.onerrorinfo))]), _vm._m(6), _c('text', {
	    staticStyle: {
	      color: "black",
	      height: "80px"
	    }
	  }, [_vm._v(_vm._s(_vm.closeinfo))])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "#286090"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "white"
	    }
	  }, [_vm._v("websocket")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = send")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = onopen")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = onmessage")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = onclose")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = onerror")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticStyle: {
	      backgroundColor: "lightgray"
	    }
	  }, [_c('text', {
	    staticClass: ["title"],
	    staticStyle: {
	      height: "80px",
	      padding: "20px",
	      color: "black"
	    }
	  }, [_vm._v("method = close")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(26)
	)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/dom.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d1449c36"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = {
	  "scroller": {
	    "width": 700,
	    "height": 700,
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "marginLeft": 25
	  },
	  "row": {
	    "height": 100,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "paddingLeft": 30,
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#DDDDDD"
	  },
	  "text": {
	    "fontSize": 45,
	    "color": "#666666"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginTop": 60
	  },
	  "button": {
	    "width": 200,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "fontSize": 40,
	    "marginLeft": 30,
	    "marginRight": 30,
	    "textAlign": "center",
	    "color": "#41B883",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  }
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');

	exports.default = {
	  data: function data() {
	    return {
	      rows: []
	    };
	  },
	  created: function created() {
	    //do something after creating vue instance
	    for (var i = 0; i < 30; i++) {
	      this.rows.push('row' + i);
	    }
	  },

	  methods: {
	    goto10: function goto10(count) {
	      var el = this.$refs.item10[0];
	      dom.scrollToElement(el, {});
	    },
	    goto20: function goto20(count) {
	      var el = this.$refs.item20[0];
	      dom.scrollToElement(el, { offset: 50 });
	    },
	    getRef: function getRef(index, event) {
	      var el = this.$refs.item20[index];
	      console.log(index);
	      dom.getComponentRect(el, function (res) {
	        console.log('getComponentRect:', res);
	      });
	    }
	  }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, _vm._l((_vm.rows), function(name, index) {
	    return _c('div', {
	      ref: 'item' + index,
	      refInFor: true,
	      staticClass: ["row"]
	    }, [_c('text', {
	      ref: 'text' + index,
	      refInFor: true,
	      staticClass: ["text"],
	      on: {
	        "click": function($event) {
	          _vm.getRef(index, $event)
	        }
	      }
	    }, [_vm._v(_vm._s(name))])])
	  })), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.goto10
	    }
	  }, [_vm._v("Go to 10")]), _c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.goto20
	    }
	  }, [_vm._v("Go to 20")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(30)
	)

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/storage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3c36ad1e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = {
	  "panel": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "height": 100,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "backgroundColor": "rgba(162,217,192,0.2)"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 650,
	    "marginLeft": 50,
	    "marginTop": 50,
	    "marginBottom": 50,
	    "backgroundColor": "#ff0000"
	  },
	  "center": {
	    "justifyContent": "center"
	  },
	  "text": {
	    "fontSize": 50,
	    "textAlign": "center",
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "color": "#41B883"
	  },
	  "small": {
	    "fontSize": 32,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "color": "#41B883"
	  }
	}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var storage = weex.requireModule('storage');
	var modal = weex.requireModule('modal');

	exports.default = {
	  data: function data() {
	    return {
	      keys: '[]',
	      length: 0,
	      state: '___'
	    };
	  },

	  methods: {
	    setItem: function setItem() {
	      var _this = this;

	      storage.setItem('name', 'Hanks', function (event) {
	        _this.state = 'set success';
	        console.log('set success');
	      });
	    },
	    getItem: function getItem() {
	      var _this2 = this;

	      storage.getItem('name', function (event) {
	        console.log('get value:', event.data);
	        _this2.state = 'value' + event.data;
	      });
	    },
	    removeItem: function removeItem() {
	      var _this3 = this;

	      storage.removeItem('name', function (event) {
	        console.log('delelte value:', event.data);
	        _this3.state = 'deleted';
	      });
	    },
	    getAll: function getAll() {
	      storage.getAllKeys(function (event) {
	        if (event.result === 'success') {
	          modal.toast({
	            message: 'props:' + event.data.join(', ')
	          });
	        }
	      });
	    }
	  }
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["list"]
	  }, [_c('div', {
	    staticClass: ["group", "center"]
	  }, [_c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.state))])])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.setItem
	    }
	  }, [_vm._v("set")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getItem
	    }
	  }, [_vm._v("get")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.removeItem
	    }
	  }, [_vm._v("remove")])]), _c('div', {
	    staticClass: ["panel"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    on: {
	      "click": _vm.getAll
	    }
	  }, [_vm._v("all")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(34)
	)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(36)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/stream.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1683772d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "group": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "marginBottom": 40
	  },
	  "title": {
	    "fontSize": 45,
	    "color": "#888888"
	  },
	  "count": {
	    "fontSize": 45,
	    "fontWeight": "bold",
	    "marginLeft": 12,
	    "color": "#41B883"
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var stream = weex.requireModule('stream');
	exports.default = {
	  data: function data() {
	    return {
	      weexStar: 'unknown',
	      vueStar: 'unknown'
	    };
	  },

	  methods: {
	    getStarCount: function getStarCount(repo, callback) {
	      return stream.fetch({
	        method: 'GET',
	        type: 'json',
	        url: 'https://api.github.com/repos/' + repo
	      }, callback);
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.getStarCount('alibaba/weex', function (res) {
	      _this.weexStar = res.ok ? res.data.stargazers_count : '(network error)';
	    });
	    this.getStarCount('vuejs/vue', function (res) {
	      _this.vueStar = res.ok ? res.data.stargazers_count : '(network error)';
	    });
	  }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Weex Star :")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v(_vm._s(_vm.weexStar))])]), _c('div', {
	    staticClass: ["group"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v("Vue Star :")]), _c('text', {
	    staticClass: ["count"]
	  }, [_vm._v(_vm._s(_vm.vueStar))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/liyazhou/work/project/JavaScript/WEEX/awesome-project/src/fireevent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	exports.default = {
	  data: function data() {
	    return {
	      'txt': 'txt'
	    };
	  },
	  created: function created() {
	    // modal.toast({
	    //   message: 'created',
	    //   duration: 0.8
	    // })

	  },

	  methods: {
	    onclick: function onclick() {
	      var el = this.$refs.txt1;
	      for (var key in el) {
	        if (el.hasOwnProperty(key)) {
	          console.log("key:" + key);
	        }
	      }
	      console.log(el._self);
	    },
	    customEvent: function customEvent() {
	      modal.toast({
	        message: 'customEvent'
	      });
	    }
	  }
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    ref: 'txt1',
	    attrs: {
	      "oncustomevent": "customEvent"
	    },
	    on: {
	      "click": _vm.onclick
	    }
	  }, [_vm._v("haha")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);