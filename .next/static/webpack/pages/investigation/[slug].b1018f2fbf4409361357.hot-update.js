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
    _this = undefined;





var Image = function Image(_ref) {
  var image = _ref.image,
      style = _ref.style,
      nav = _ref.nav;
  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  console.log("innerImagedata", image.data.attributes);
  var layout = "responsive";

  if (!width && !height) {
    layout = "fill";
  }

  var w = width;
  var h = height;

  if (nav) {
    width = ((0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("width"), 150);
    height = ((0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("height"), 150);
  }

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
    loader: loader,
    layout: layout,
    width: width || w,
    height: height || h,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_2__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJuYXYiLCJkYXRhIiwiYXR0cmlidXRlcyIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImxheW91dCIsInciLCJoIiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMkI7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVhDLEdBQVcsUUFBWEEsR0FBVztBQUFBLDhCQUNTRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsVUFEcEI7QUFBQSxNQUMvQkMsR0FEK0IseUJBQy9CQSxHQUQrQjtBQUFBLE1BQzFCQyxlQUQwQix5QkFDMUJBLGVBRDBCO0FBQUEsTUFDVEMsS0FEUyx5QkFDVEEsS0FEUztBQUFBLE1BQ0ZDLE1BREUseUJBQ0ZBLE1BREU7QUFFdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCVixLQUFLLENBQUNHLElBQU4sQ0FBV0MsVUFBekM7QUFFQSxNQUFJTyxNQUFNLEdBQUcsWUFBYjs7QUFDQSxNQUFJLENBQUNKLEtBQUQsSUFBVSxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCRyxVQUFNLFNBQU47QUFDRDs7QUFFRCxNQUFJQyxDQUFDLEdBQUdMLEtBQVI7QUFDQSxNQUFJTSxDQUFDLEdBQUdMLE1BQVI7O0FBQ0EsTUFBSU4sR0FBSixFQUFTO0FBQ1BLLFNBQUssbUtBQUcsR0FBSCxDQUFMO0FBQ0FDLFVBQU0sb0tBQUcsR0FBSCxDQUFOO0FBQ0Q7O0FBSUQsTUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQywwREFBYyxDQUFDZixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFLQSxzQkFFRSw4REFBQyxtREFBRDtBQUNFLFVBQU0sRUFBRWMsTUFEVjtBQUVFLFVBQU0sRUFBRUgsTUFGVjtBQUdFLFNBQUssRUFBR0osS0FBSyxJQUFJSyxDQUhuQjtBQUlFLFVBQU0sRUFBR0osTUFBTSxJQUFJSyxDQUpyQjtBQUtFLGFBQVMsRUFBQyxTQUxaO0FBTUUsT0FBRyxFQUFFRSwwREFBYyxDQUFDZixLQUFELENBTnJCO0FBT0UsT0FBRyxFQUFFTSxlQUFlLElBQUk7QUFQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGO0FBWUQsQ0FuQ0Q7O0tBQU1QLEs7QUFxQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52ZXN0aWdhdGlvbi9bc2x1Z10uYjEwMThmMmZiZjQ0MDkzNjEzNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIHN0eWxlLG5hdiAgfSkgPT4ge1xuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5kYXRhLmF0dHJpYnV0ZXNcbiAgY29uc29sZS5sb2coXCJpbm5lckltYWdlZGF0YVwiLCBpbWFnZS5kYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIGxldCBsYXlvdXQgPSBcInJlc3BvbnNpdmVcIlxuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpIHtcbiAgICBsYXlvdXQgPSBgZmlsbGBcbiAgfVxuXG4gIGxldCB3ID0gd2lkdGhcbiAgbGV0IGggPSBoZWlnaHRcbiAgaWYgKG5hdikge1xuICAgIHdpZHRoID0gMTUwXG4gICAgaGVpZ2h0ID0gMTUwXG4gIH1cblxuXG5cbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShpbWFnZSlcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuXG4gICAgPE5leHRJbWFnZVxuICAgICAgbG9hZGVyPXtsb2FkZXJ9XG4gICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgIHdpZHRoPXsgd2lkdGggfHwgd31cbiAgICAgIGhlaWdodD17IGhlaWdodCB8fCBofSAgXG4gICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEoaW1hZ2UpfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9