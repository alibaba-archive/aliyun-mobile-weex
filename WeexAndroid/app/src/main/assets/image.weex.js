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

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
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
	__vue_options__.__file = "/Users/liyazhou/Desktop/weex/weexdemo/src/image.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ece6e4bc"
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
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "marginTop": 50,
	    "marginRight": 50,
	    "marginBottom": 50,
	    "marginLeft": 50
	  },
	  "background-text": {
	    "position": "absolute",
	    "top": 50,
	    "left": 50,
	    "color": "#008000"
	  },
	  "cover": {
	    "width": 600,
	    "height": 100,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#ff0000"
	  },
	  "contain": {
	    "width": 600,
	    "height": 100,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#ff0000"
	  },
	  "stretch": {
	    "width": 600,
	    "height": 100,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#ff0000"
	  }
	}

/***/ }),
/* 2 */
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

	var modal = weex.requireModule('modal');
	exports.default = {
	    methods: {
	        // image load事件监听：当图片加载完成时触发。目前在 Android、iOS 上支持，H5 暂不支持
	        imageloaded: function imageloaded(event) {
	            modal.toast({
	                message: 'success: ' + event.success + ', naturalWidth:' + event.size.naturalWidth + ', naturalHeight:' + event.size.naturalHeight
	            });
	        },
	        // 保存图片到相册
	        saveimage: function saveimage(event) {
	            var image = this.$refs['imageref'].save(function (result) {
	                modal.toast({ message: "Img sava " + result.success + ", " + result.errorDesc });
	            });
	            // modal.toast({
	            //     message: JSON.stringify(image)
	            // })
	            // image.save(function(result) {
	            //     modal.toast({
	            //         message: JSON.stringify(result)
	            //     })
	            // })
	        }

	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', [_vm._v("save image")]), _c('image', {
	    ref: "imageref",
	    staticClass: ["stretch"],
	    attrs: {
	      "resize": "stretch",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
	    },
	    on: {
	      "load": _vm.imageloaded,
	      "click": _vm.saveimage
	    }
	  })]), _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', [_vm._v("save image")]), _c('image', {
	    ref: "imageref",
	    staticClass: ["stretch"],
	    attrs: {
	      "resize": "stretch",
	      "src": "local:///test"
	    }
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', [_vm._v("cover")]), _c('image', {
	    staticClass: ["cover"],
	    attrs: {
	      "resize": "cover",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', [_vm._v("contain")]), _c('image', {
	    staticClass: ["contain"],
	    attrs: {
	      "resize": "contain",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', [_vm._v("stretch")]), _c('image', {
	    staticClass: ["stretch"],
	    attrs: {
	      "resize": "stretch",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('image', {
	    staticClass: ["stretch"],
	    attrs: {
	      "resize": "stretch",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
	    }
	  }), _c('text', {
	    staticClass: ["background-text"]
	  }, [_vm._v("background text")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);