self["webpackHotUpdate_N_E"]("pages/investigation/[slug]",{

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/image.js",
    _this = undefined,
    _s = $RefreshSig$();





var Image = function Image(_ref) {
  _s();

  var image = _ref.image,
      style = _ref.style,
      nav = _ref.nav;
  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  var layout = "responsive";
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!width || !height && nav) {
      width = ((0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("width"), "100%");
      height = ((0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("height"), "auto");
    }
  }, []);

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
    loader: loader,
    layout: layout,
    width: w || width,
    height: h || height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJuYXYiLCJkYXRhIiwiYXR0cmlidXRlcyIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5b3V0IiwidXNlRWZmZWN0IiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiLCJ3IiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsS0FBeUIsUUFBekJBLEtBQXlCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLEdBQVcsUUFBWEEsR0FBVztBQUFBLDhCQUNRRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsVUFEbkI7QUFBQSxNQUNoQ0MsR0FEZ0MseUJBQ2hDQSxHQURnQztBQUFBLE1BQzNCQyxlQUQyQix5QkFDM0JBLGVBRDJCO0FBQUEsTUFDVkMsS0FEVSx5QkFDVkEsS0FEVTtBQUFBLE1BQ0hDLE1BREcseUJBQ0hBLE1BREc7QUFHeEMsTUFBSUMsTUFBTSxHQUFHLFlBQWI7QUFDQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDSCxLQUFELElBQVUsQ0FBQ0MsTUFBRCxJQUFXTixHQUF6QixFQUE4QjtBQUM1QkssV0FBSyxtS0FBRyxNQUFILENBQUw7QUFFQUMsWUFBTSxvS0FBRyxNQUFILENBQU47QUFJRDtBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7O0FBYUEsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQywwREFBYyxDQUFDWixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFLQSxzQkFFRSw4REFBQyxtREFBRDtBQUNFLFVBQU0sRUFBRVcsTUFEVjtBQUVFLFVBQU0sRUFBRUYsTUFGVjtBQUdFLFNBQUssRUFBRUksQ0FBQyxJQUFJTixLQUhkO0FBSUUsVUFBTSxFQUFFTyxDQUFDLElBQUlOLE1BSmY7QUFLRSxhQUFTLEVBQUMsU0FMWjtBQU1FLE9BQUcsRUFBRUksMERBQWMsQ0FBQ1osS0FBRCxDQU5yQjtBQU9FLE9BQUcsRUFBRU0sZUFBZSxJQUFJO0FBUDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQVlELENBbENEOztHQUFNUCxLOztLQUFBQSxLO0FBb0NOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludmVzdGlnYXRpb24vW3NsdWddLjRlMjFhYTYyNmUwYWQxNzQ2MmEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlLCBzdHlsZSwgbmF2ICB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlc1xuXG4gIGxldCBsYXlvdXQgPSBcInJlc3BvbnNpdmVcIlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2lkdGggfHwgIWhlaWdodCAmJiBuYXYpIHtcbiAgICAgIHdpZHRoID0gXCIxMDAlXCJcblxuICAgICAgaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICBcblxuICAgICBcbiAgICB9XG4gIH0sIFtdKVxuXG5cblxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG5cbiAgICA8TmV4dEltYWdlXG4gICAgICBsb2FkZXI9e2xvYWRlcn1cbiAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgd2lkdGg9e3cgfHwgd2lkdGh9XG4gICAgICBoZWlnaHQ9e2ggfHwgaGVpZ2h0fSAgXG4gICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEoaW1hZ2UpfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9