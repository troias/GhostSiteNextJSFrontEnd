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
    _this = undefined;





var Image = function Image(_ref) {
  var image = _ref.image,
      style = _ref.style,
      customDimensions = _ref.customDimensions;
  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;
  console.log("innerImagedata", image.data.attributes);
  var layout;

  if (!width || !height) {
    layout = "fill";
  } else {
    layout = "responsive";
  }

  console.log("layout", layout);

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    loader: loader,
    layout: layout,
    width: width || customDimensions.width,
    height: height || customDimensions.height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJjdXN0b21EaW1lbnNpb25zIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJ1cmwiLCJhbHRlcm5hdGl2ZVRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJsYXlvdXQiLCJsb2FkZXIiLCJnZXRTdHJhcGlNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0M7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxnQkFBdUIsUUFBdkJBLGdCQUF1QjtBQUFBLDhCQUNKRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsVUFEUDtBQUFBLE1BQzVDQyxHQUQ0Qyx5QkFDNUNBLEdBRDRDO0FBQUEsTUFDdkNDLGVBRHVDLHlCQUN2Q0EsZUFEdUM7QUFBQSxNQUN0QkMsS0FEc0IseUJBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLE1BRGUseUJBQ2ZBLE1BRGU7QUFFcERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCVixLQUFLLENBQUNHLElBQU4sQ0FBV0MsVUFBekM7QUFFQSxNQUFJTyxNQUFKOztBQUNBLE1BQUksQ0FBQ0osS0FBRCxJQUFVLENBQUNDLE1BQWYsRUFBdUI7QUFDckJHLFVBQU0sU0FBTjtBQUVELEdBSEQsTUFHTztBQUNMQSxVQUFNLGVBQU47QUFDRDs7QUFFREYsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkMsTUFBdEI7O0FBSUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPQywwREFBYyxDQUFDYixLQUFELENBQXJCO0FBQ0QsR0FGRDs7QUFLQSxzQkFFRSw4REFBQyxtREFBRDtBQUNFLFVBQU0sRUFBRVksTUFEVjtBQUVFLFVBQU0sRUFBRUQsTUFGVjtBQUdFLFNBQUssRUFBR0osS0FBSyxJQUFJTCxnQkFBZ0IsQ0FBQ0ssS0FIcEM7QUFJRSxVQUFNLEVBQUdDLE1BQU0sSUFBSU4sZ0JBQWdCLENBQUNNLE1BSnRDO0FBS0UsYUFBUyxFQUFDLFNBTFo7QUFNRSxPQUFHLEVBQUVLLDBEQUFjLENBQUNiLEtBQUQsQ0FOckI7QUFPRSxPQUFHLEVBQUVNLGVBQWUsSUFBSTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFZRCxDQWpDRDs7S0FBTVAsSztBQW1DTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM1YzVmMmViMjRkMGRiNDMxNzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlLCBzdHlsZSwgY3VzdG9tRGltZW5zaW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlc1xuICBjb25zb2xlLmxvZyhcImlubmVySW1hZ2VkYXRhXCIsIGltYWdlLmRhdGEuYXR0cmlidXRlcyk7XG5cbiAgbGV0IGxheW91dCBcbiAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgbGF5b3V0ID0gYGZpbGxgXG5cbiAgfSBlbHNlIHtcbiAgICBsYXlvdXQgPSBgcmVzcG9uc2l2ZWBcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwibGF5b3V0XCIsIGxheW91dCk7XG5cblxuXG4gIGNvbnN0IGxvYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0U3RyYXBpTWVkaWEoaW1hZ2UpXG4gIH1cblxuICBcbiAgcmV0dXJuIChcblxuICAgIDxOZXh0SW1hZ2VcbiAgICAgIGxvYWRlcj17bG9hZGVyfVxuICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICB3aWR0aD17IHdpZHRoIHx8IGN1c3RvbURpbWVuc2lvbnMud2lkdGh9XG4gICAgICBoZWlnaHQ9eyBoZWlnaHQgfHwgY3VzdG9tRGltZW5zaW9ucy5oZWlnaHR9ICBcbiAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgc3JjPXtnZXRTdHJhcGlNZWRpYShpbWFnZSl9XG4gICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCBcIlwifVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=