self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/image.js",
    _this = undefined,
    _s = $RefreshSig$();





var Image = function Image(_ref) {
  _s();

  var image = _ref.image,
      style = _ref.style,
      w = _ref.w,
      h = _ref.h;
  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  var layout = "responsive";
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!width || !height) {
      layout = "fill";
    }
  }, []);
  console.log("immg inner", w, h);

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    loader: loader,
    layout: layout,
    width: w || width,
    height: h || height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(Image, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Image;
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJ3IiwiaCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE2QjtBQUFBOztBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsQ0FBWSxRQUFaQSxDQUFZO0FBQUEsTUFBVEMsQ0FBUyxRQUFUQSxDQUFTO0FBQUEsOEJBQ09ILEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxVQURsQjtBQUFBLE1BQ2pDQyxHQURpQyx5QkFDakNBLEdBRGlDO0FBQUEsTUFDNUJDLGVBRDRCLHlCQUM1QkEsZUFENEI7QUFBQSxNQUNYQyxLQURXLHlCQUNYQSxLQURXO0FBQUEsTUFDSkMsTUFESSx5QkFDSkEsTUFESTtBQUd6QyxNQUFJQyxNQUFNLEdBQUcsWUFBYjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILEtBQUQsSUFBVSxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCQyxZQUFNLEdBQUcsTUFBVDtBQUlEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNERSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCWCxDQUExQixFQUE0QkMsQ0FBNUI7O0FBQ0MsTUFBTVcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQywwREFBYyxDQUFDZixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFLQSxzQkFFRSw4REFBQyxtREFBRDtBQUNFLFVBQU0sRUFBRWMsTUFEVjtBQUVFLFVBQU0sRUFBRUosTUFGVjtBQUdFLFNBQUssRUFBRVIsQ0FBQyxJQUFJTSxLQUhkO0FBSUUsVUFBTSxFQUFFTCxDQUFDLElBQUlNLE1BSmY7QUFLRSxhQUFTLEVBQUMsU0FMWjtBQU1FLE9BQUcsRUFBRU0sMERBQWMsQ0FBQ2YsS0FBRCxDQU5yQjtBQU9FLE9BQUcsRUFBRU8sZUFBZSxJQUFJO0FBUDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQVlELENBL0JEOztHQUFNUixLOztLQUFBQSxLO0FBaUNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWY2M2EwZDc2ODlkYTMyM2I1M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIHN0eWxlLCB3LCBoICB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlc1xuXG4gIGxldCBsYXlvdXQgPSBcInJlc3BvbnNpdmVcIlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgbGF5b3V0ID0gXCJmaWxsXCJcbiAgICBcblxuICAgICBcbiAgICB9XG4gIH0sIFtdKVxuXG4gY29uc29sZS5sb2coXCJpbW1nIGlubmVyXCIsIHcsaClcbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShpbWFnZSlcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuXG4gICAgPE5leHRJbWFnZVxuICAgICAgbG9hZGVyPXtsb2FkZXJ9XG4gICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgIHdpZHRoPXt3IHx8IHdpZHRofVxuICAgICAgaGVpZ2h0PXtoIHx8IGhlaWdodH0gIFxuICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICBzcmM9e2dldFN0cmFwaU1lZGlhKGltYWdlKX1cbiAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==