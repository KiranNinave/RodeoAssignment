webpackHotUpdate("static/development/pages/detail.js",{

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
      if (this.state.loading || !this.state.movie) {
        return __jsx("div", {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {
          animation: "border",
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, __jsx("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Loading...")));
      }

      var _this$state$movie = this.state.movie,
          backdrop_path = _this$state$movie.backdrop_path,
          original_title = _this$state$movie.original_title,
          original_language = _this$state$movie.original_language,
          release_date = _this$state$movie.release_date,
          overview = _this$state$movie.overview,
          vote_count = _this$state$movie.vote_count,
          vote_average = _this$state$movie.vote_average,
          popularity = _this$state$movie.popularity,
          adult = _this$state$movie.adult,
          status = _this$state$movie.status,
          imdb_id = _this$state$movie.imdb_id;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_layouts_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        search: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        style: {
          marginTop: 70
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: 12,
        md: 4,
        lg: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("img", {
        src: "https://image.tmdb.org/t/p/w500".concat(backdrop_path),
        alt: original_title + " image",
        "class": "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        sm: 12,
        md: 8,
        lg: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"], {
        title: original_title,
        bordered: false,
        layout: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, original_title), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Release date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, release_date), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Language",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, original_language), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Vote count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, vote_count), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Vote average",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, vote_average, " /10"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, popularity), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Adult",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, adult ? "YES" : "NO"), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, status), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "IMDB ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, imdb_id), __jsx(antd__WEBPACK_IMPORTED_MODULE_14__["Descriptions"].Item, {
        label: "Overview",
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, overview)))))));
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
//# sourceMappingURL=detail.js.9a65a7729b9eae24abfa.hot-update.js.map