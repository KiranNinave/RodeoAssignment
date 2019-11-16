webpackHotUpdate("static/development/pages/detail.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");


var httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH"
};
var sendJsonRequest =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url,
        method,
        header,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            method = _args.length > 1 && _args[1] !== undefined ? _args[1] : httpMethods.GET;
            header = {
              method: method,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VjYzFlMzAwNmRiZjMyNjEyNzk2NDQ0OTFiZTc2NiIsInN1YiI6IjVkY2QyYzA1Y2MyNzdjMDAxNGUyYzdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JGOmr3g3fU0eEUXIWD5sI5l-KhMecoon6tdCliwOdPQ"
              }
            };
            _context.next = 5;
            return fetch(url, header);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendJsonRequest() {
    return _ref.apply(this, arguments);
  };
}();

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");


var sendResponse =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response,
        json,
        _args = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            if (!(response.status === 401)) {
              _context.next = 3;
              break;
            }

            throw new Error("Invalid credentials please relogin");

          case 3:
            if (!(response.status === 404)) {
              _context.next = 5;
              break;
            }

            throw new Error("404 Item not found");

          case 5:
            _context.next = 7;
            return response.json();

          case 7:
            json = _context.sent;
            if (true) console.log(json);

            if (!(response.status === 400)) {
              _context.next = 11;
              break;
            }

            throw new Error(json.status_message || "Bad request");

          case 11:
            if (!(response.status === 409)) {
              _context.next = 13;
              break;
            }

            throw new Error(json.status_message || "data conflict");

          case 13:
            if (!(response.status === 200 || response.status === 201)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", json);

          case 15:
            throw new Error("Cant reach to server");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendResponse() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./apis/movieApis.js":
/*!***************************!*\
  !*** ./apis/movieApis.js ***!
  \***************************/
/*! exports provided: getSearchMoviesApi, getPopularMoviesApi, getMovieById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchMoviesApi", function() { return getSearchMoviesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularMoviesApi", function() { return getPopularMoviesApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
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
var getMovieById =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var data,
        url,
        response,
        _args3 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
              id: 1
            };
            _context3.prev = 1;
            url = "https://api.themoviedb.org/3/movie/".concat(data.id, "?api_key=b3ecc1e3006dbf3261279644491be766&language=en-US");
            console.log(url);
            _context3.next = 6;
            return Object(_functions_requests__WEBPACK_IMPORTED_MODULE_2__["sendJsonRequest"])(url, _functions_requests__WEBPACK_IMPORTED_MODULE_2__["httpMethods"].GET);

          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return Object(_functions_responses__WEBPACK_IMPORTED_MODULE_3__["sendResponse"])(response);

          case 9:
            return _context3.abrupt("return", _context3.sent);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            throw new Error(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function getMovieById() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/Header */ "./layouts/Header.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apis_movieApis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apis/movieApis */ "./apis/movieApis.js");









var _jsxFileName = "/home/kiran/Desktop/next/RodeoAssignment/pages/detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

 // style


 // styled component


 // apis



var Detail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Detail, _React$Component);

  function Detail(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Detail);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Detail).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "fetchMovie",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.setState({
                  loading: true
                });

                _context.next = 4;
                return Object(_apis_movieApis__WEBPACK_IMPORTED_MODULE_15__["getMovieById"])({
                  id: id
                });

              case 4:
                response = _context.sent;

                _this.setState({
                  movie: response
                });

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
                _context.prev = 11;
                if (_this.isComponentMounted) _this.setState({
                  loading: false
                });
                return _context.finish(11);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8, 11, 14]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      loading: false,
      movie: null
    };
    _this.isComponentMounted = true;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var movieId;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                movieId = this.props.query.id;
                _context2.next = 3;
                return this.fetchMovie(movieId);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(_layouts_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        search: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        style: {
          marginTop: 70
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"], {
        title: "User Info",
        bordered: false,
        layout: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "UserName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Zhou Maomao"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Telephone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "1810000000"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Live",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Hangzhou, Zhejiang"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Address",
        span: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Remark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "empty")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref2) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _ref2.query;
                return _context3.abrupt("return", {
                  query: query
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=detail.js.7b9fa63ed6227b199551.hot-update.js.map