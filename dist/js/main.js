var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/main.css":
/*!****************************!*\
  !*** ./src/pages/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://App/./src/pages/main.css?");

/***/ }),

/***/ "./src/pages/main.jsx":
/*!****************************!*\
  !*** ./src/pages/main.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/pages/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Panel = function Panel(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"panel-title\"\n  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"panel-body\"\n  }, children));\n};\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u65B0\\u578B\\u51A0\\u72B6\\u75C5\\u6BD2 \\u80BA\\u708E\\u75AB\\u60C5\\u5B9E\\u65F6\\u52A8\\u6001\"));\n};\n\nvar Overview = function Overview(_ref2) {\n  var data = _ref2.data;\n\n  var _ref3 = data || {},\n      confirmedCount = _ref3.confirmedCount,\n      suspectedCount = _ref3.suspectedCount,\n      curedCount = _ref3.curedCount,\n      deadCount = _ref3.deadCount;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"overview\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, confirmedCount || 'N/A'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u786E\\u8BCA\\u75C5\\u4F8B\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, suspectedCount || 'N/A'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u7591\\u4F3C\\u75C5\\u4F8B\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, curedCount || 'N/A'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u6CBB\\u6108\\u4EBA\\u6570\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, deadCount || 'N/A'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u6B7B\\u4EA1\\u4EBA\\u6570\")));\n};\n\nvar Trending = function Trending() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n    title: \"\\u75AB\\u60C5\\u8D8B\\u52BF\"\n  });\n};\n\nvar AreaMap = function AreaMap(_ref4) {\n  var data = _ref4.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n    title: \"\\u75AB\\u60C5\\u5730\\u56FE\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    width: \"100%\",\n    src: data\n  }));\n};\n\nvar AreaTable = function AreaTable(_ref5) {\n  var data = _ref5.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"area-detail\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u5730\\u533A\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u7591\\u4F3C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u786E\\u8BCA\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u6CBB\\u6108\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u6B7B\\u4EA1\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, (data || []).sort(function (a, b) {\n    return b.confirmedCount - a.confirmedCount;\n  }).map(function (p) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.provinceShortName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.suspectedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.confirmedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.curedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.deadCount));\n  })));\n};\n\nvar formatResponse = function formatResponse(res) {\n  if (res.code === 'success' && res.successAndNotNull) return res.data;\n  var err = new Error(res.message);\n  err.code = res.code;\n  err.response = res;\n  throw err;\n};\n\nvar News = function News(_ref6) {\n  var _ref6$data = _ref6.data,\n      data = _ref6$data === void 0 ? [] : _ref6$data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      list = _useState2[0],\n      setData = _useState2[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return fetch(\"https://file1.dxycdn.com/2020/0127/794/3393185296027391740-115.json\");\n    }).then(function (res) {\n      return res.json();\n    }).then(formatResponse);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData().then(setData);\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n    title: \"\\u5B9E\\u65F6\\u65B0\\u95FB\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"news-list\"\n  }, (list || data).map(function (news) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, news.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, news.summary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"time\", {\n      time: news.pubDate\n    }, news.pubDateStr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: news.sourceUrl\n    }, news.infoSource)));\n  })));\n};\n\nvar Rumors = function Rumors(_ref7) {\n  var _ref7$data = _ref7.data,\n      data = _ref7$data === void 0 ? [] : _ref7$data;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      list = _useState4[0],\n      setData = _useState4[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return fetch(\"https://file1.dxycdn.com/2020/0127/797/3393185293879908067-115.json\");\n    }).then(function (res) {\n      return res.json();\n    }).then(formatResponse);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData().then(setData);\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, {\n    title: \"\\u5B98\\u65B9\\u8F9F\\u8C23\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"rumors-list\"\n  }, (list || data).map(function (rumor) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      id: \"rumor-\".concat(rumor.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, rumor.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: rumor.sourceUrl\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, rumor.mainSummary)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, rumor.body));\n  })));\n};\n\nvar Footer = function Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u6570\\u636E\\u7531 \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"\"\n  }, \"\\u4E01\\u9999\\u56ED\"), \" \\u63D0\\u4F9B\\uFF0C\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://github.com/song940/2019-ncov\"\n  }, \"\\u9879\\u76EE\\u6E90\\u4EE3\\u7801\"), \"\\u9075\\u5FAA MIT \\u534F\\u8BAE\\u53D1\\u5E03 \\xA9 \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://lsong.org\"\n  }, \"LSONG.ORG\")));\n};\n\nvar dxy_pneumonia = function dxy_pneumonia() {\n  return Promise.resolve().then(function () {\n    return fetch(\"https://dxy-pneumonia.lsong.workers.dev\");\n  }).then(function (res) {\n    return res.json();\n  });\n};\n\nvar App = function App() {\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState6 = _slicedToArray(_useState5, 2),\n      data = _useState6[0],\n      setData = _useState6[1];\n\n  var AreaStat = data.AreaStat,\n      StatisticsService = data.StatisticsService,\n      TimelineService = data.TimelineService,\n      IndexRumorList = data.IndexRumorList;\n\n  var _ref8 = StatisticsService || {},\n      imgUrl = _ref8.imgUrl;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dxy_pneumonia().then(setData);\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overview, {\n    data: StatisticsService\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaMap, {\n    data: imgUrl\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaTable, {\n    data: AreaStat\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {\n    data: TimelineService\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rumors, {\n    data: IndexRumorList\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null));\n};\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://App/./src/pages/main.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack://App/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack://App/external_%22ReactDOM%22?");

/***/ })

/******/ });