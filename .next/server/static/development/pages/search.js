module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/functions/requests.js":
/*!************************************!*\
  !*** ./apis/functions/requests.js ***!
  \************************************/
/*! exports provided: httpMethods, sendJsonRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpMethods", function() { return httpMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendJsonRequest", function() { return sendJsonRequest; });
const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};
const sendJsonRequest = async (url = "", method = httpMethods.GET) => {
  const header = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VjYzFlMzAwNmRiZjMyNjEyNzk2NDQ0OTFiZTc2NiIsInN1YiI6IjVkY2QyYzA1Y2MyNzdjMDAxNGUyYzdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JGOmr3g3fU0eEUXIWD5sI5l-KhMecoon6tdCliwOdPQ"
    }
  };
  return await fetch(url, header);
};

/***/ }),

/***/ "./apis/functions/responses.js":
/*!*************************************!*\
  !*** ./apis/functions/responses.js ***!
  \*************************************/
/*! exports provided: sendResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendResponse", function() { return sendResponse; });
const sendResponse = async (response = {}) => {
  if (response.status === 401) throw new Error("Invalid credentials please relogin");
  if (response.status === 404) throw new Error("404 Item not found");
  const json = await response.json();
  if (true) console.log(json);
  if (response.status === 400) throw new Error(json.status_message || "Bad request");
  if (response.status === 409) throw new Error(json.status_message || "data conflict");
  if (response.status === 200 || response.status === 201) return json;
  throw new Error("Cant reach to server");
};

/***/ }),

/***/ "./apis/movieApis.js":
/*!***************************!*\
  !*** ./apis/movieApis.js ***!
  \***************************/
/*! exports provided: getSearchMoviesApi, getPopularMoviesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchMoviesApi", function() { return getSearchMoviesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularMoviesApi", function() { return getPopularMoviesApi; });
/* harmony import */ var _functions_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/requests */ "./apis/functions/requests.js");
/* harmony import */ var _functions_responses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/responses */ "./apis/functions/responses.js");


const getSearchMoviesApi = async (data = {
  query: "marvel",
  page: 1
}) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${data.query}&api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=${data.page}`;
    const response = await Object(_functions_requests__WEBPACK_IMPORTED_MODULE_0__["sendJsonRequest"])(url, _functions_requests__WEBPACK_IMPORTED_MODULE_0__["httpMethods"].GET);
    return await Object(_functions_responses__WEBPACK_IMPORTED_MODULE_1__["sendResponse"])(response);
  } catch (err) {
    throw new Error(err);
  }
};
const getPopularMoviesApi = async (data = {
  page: 1
}) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=${data.page}`;
    const response = await Object(_functions_requests__WEBPACK_IMPORTED_MODULE_0__["sendJsonRequest"])(url, _functions_requests__WEBPACK_IMPORTED_MODULE_0__["httpMethods"].GET);
    return await Object(_functions_responses__WEBPACK_IMPORTED_MODULE_1__["sendResponse"])(response);
  } catch (err) {
    throw new Error(err);
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_movieApis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/movieApis */ "./apis/movieApis.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/kiran/Desktop/next/RodeoAssignment/pages/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Search extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onSubmit", async e => {
      e.preventDefault();

      if (this.query != "") {
        await this.searchMovie();
      } else {
        console.log("please enter something");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchMovie", async () => {
      try {
        this.setState({
          loading: true
        });
        const {
          query,
          page
        } = this.state;
        const response = await Object(_apis_movieApis__WEBPACK_IMPORTED_MODULE_2__["getSearchMoviesApi"])({
          query,
          page
        });
        this.setState({
          movies: [...this.state.movies, ...response.results],
          hasMore: page <= response.total_pages
        });
      } catch (err) {
        console.log(err);
      } finally {
        if (this.isComponentMounted) this.setState({
          loading: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadMore", async () => {
      if (this.isComponentMounted) {
        this.setState(prevState => ({
          page: prevState.page + 1
        }), async () => await this.searchMovie());
      }
    });

    this.state = {
      hasMore: true,
      loading: false,
      movies: [],
      query: "",
      page: 1
    };
    this.isComponentMounted = true;
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "search what you like to watch"), __jsx("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "query",
      placeholder: "search",
      value: this.state.query,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "search")), __jsx(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
      dataLength: this.state.movies.length //This is important field to render the next data
      ,
      next: this.loadMore,
      hasMore: this.state.hasMore,
      loader: __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Loading..."),
      endMessage: __jsx("p", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Yay! You have seen it all")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, this.state.movies.map((movie, index) => __jsx("div", {
      key: movie.id.toString() + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, movie.title)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kiran/Desktop/next/RodeoAssignment/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map