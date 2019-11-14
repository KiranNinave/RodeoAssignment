webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _functions_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/requests */ "./apis/functions/requests.js");
/* harmony import */ var _functions_responses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/responses */ "./apis/functions/responses.js");




var getSearchMoviesApi =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var data,
        url,
        response,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
              query: "marvel",
              page: 1
            };
            _context.prev = 1;
            url = "https://api.themoviedb.org/3/search/movie?query=".concat(data.query, "&api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=").concat(data.page);
            _context.next = 5;
            return Object(_functions_requests__WEBPACK_IMPORTED_MODULE_2__["sendJsonRequest"])(url, _functions_requests__WEBPACK_IMPORTED_MODULE_2__["httpMethods"].GET);

          case 5:
            response = _context.sent;
            _context.next = 8;
            return Object(_functions_responses__WEBPACK_IMPORTED_MODULE_3__["sendResponse"])(response);

          case 8:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            throw new Error(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function getSearchMoviesApi() {
    return _ref.apply(this, arguments);
  };
}();
var getPopularMoviesApi =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var data,
        url,
        response,
        _args2 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
              page: 1
            };
            _context2.prev = 1;
            url = "https://api.themoviedb.org/3/movie/popular?api_key=b3ecc1e3006dbf3261279644491be766&language=en-US&page=".concat(data.page);
            _context2.next = 5;
            return Object(_functions_requests__WEBPACK_IMPORTED_MODULE_2__["sendJsonRequest"])(url, _functions_requests__WEBPACK_IMPORTED_MODULE_2__["httpMethods"].GET);

          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return Object(_functions_responses__WEBPACK_IMPORTED_MODULE_3__["sendResponse"])(response);

          case 8:
            return _context2.abrupt("return", _context2.sent);

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            throw new Error(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function getPopularMoviesApi() {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.3f2d4a5c55a8aca5ca4d.hot-update.js.map