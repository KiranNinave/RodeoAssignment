webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MovieCard.js":
/*!*********************************!*\
  !*** ./components/MovieCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/kiran/Desktop/next/RodeoAssignment/components/MovieCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Meta = antd__WEBPACK_IMPORTED_MODULE_6__["Card"].Meta;

var MovieCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MovieCard, _Component);

  function MovieCard(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MovieCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieCard).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MovieCard, [{
    key: "render",
    value: function render() {
      var _this$props$movie = this.props.movie,
          backdrop_path = _this$props$movie.backdrop_path,
          title = _this$props$movie.title,
          release_date = _this$props$movie.release_date,
          vote_average = _this$props$movie.vote_average,
          original_language = _this$props$movie.original_language,
          vote_count = _this$props$movie.vote_count;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          marginTop: 20,
          marginBottom: 20
        },
        cover: __jsx("img", {
          alt: "example",
          src: "https://image.tmdb.org/t/p/w500".concat(backdrop_path),
          style: {
            width: 300,
            height: "auto"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(Meta, {
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("p", {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Date of Release:"), " ", release_date), __jsx("p", {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Language:"), " ", original_language), __jsx("p", {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Total reviews:"), " ", vote_count)), __jsx(react_star_ratings__WEBPACK_IMPORTED_MODULE_7___default.a, {
        rating: vote_average,
        starRatedColor: "#F5E400",
        starDimension: "15px",
        starSpacing: "0.5px",
        numberOfStars: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })));
    }
  }]);

  return MovieCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.cfbf6d95807cdae3a34f.hot-update.js.map