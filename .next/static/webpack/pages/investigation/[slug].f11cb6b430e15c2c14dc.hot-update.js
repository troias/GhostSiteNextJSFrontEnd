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
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/image.js",
    _this = undefined;




var Image = function Image(_ref) {
  var image = _ref.image,
      style = _ref.style,
      w = _ref.w,
      h = _ref.h;
  var _image$data$attribute = image.data.attributes,
      url = _image$data$attribute.url,
      alternativeText = _image$data$attribute.alternativeText,
      width = _image$data$attribute.width,
      height = _image$data$attribute.height;

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  console.log("image", image);
  var layout;

  if (!width || !height) {
    layout = "fill";
  } else {
    layout = "responsive";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
    loader: loader,
    layout: layout,
    width: "150px",
    height: "150px",
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJ3IiwiaCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkZXIiLCJnZXRTdHJhcGlNZWRpYSIsImNvbnNvbGUiLCJsb2ciLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNkI7QUFBQSxNQUExQkMsS0FBMEIsUUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLENBQVksUUFBWkEsQ0FBWTtBQUFBLE1BQVRDLENBQVMsUUFBVEEsQ0FBUztBQUFBLDhCQUNPSCxLQUFLLENBQUNJLElBQU4sQ0FBV0MsVUFEbEI7QUFBQSxNQUNqQ0MsR0FEaUMseUJBQ2pDQSxHQURpQztBQUFBLE1BQzVCQyxlQUQ0Qix5QkFDNUJBLGVBRDRCO0FBQUEsTUFDWEMsS0FEVyx5QkFDWEEsS0FEVztBQUFBLE1BQ0pDLE1BREkseUJBQ0pBLE1BREk7O0FBR3pDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsV0FBT0MsMERBQWMsQ0FBQ1gsS0FBRCxDQUFyQjtBQUNELEdBRkQ7O0FBR0FZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJiLEtBQXJCO0FBQ0EsTUFBSWMsTUFBSjs7QUFDQSxNQUFJLENBQUNOLEtBQUQsSUFBVSxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCSyxVQUFNLEdBQUcsTUFBVDtBQUNELEdBRkQsTUFFTztBQUNMQSxVQUFNLEdBQUcsWUFBVDtBQUNEOztBQUdELHNCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBTSxFQUFFSixNQURWO0FBRUUsVUFBTSxFQUFFSSxNQUZWO0FBR0UsU0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFNLEVBQUMsT0FKVDtBQUtFLGFBQVMsRUFBQyxTQUxaO0FBTUUsT0FBRyxFQUFFSCwwREFBYyxDQUFDWCxLQUFELENBTnJCO0FBT0UsT0FBRyxFQUFFTyxlQUFlLElBQUk7QUFQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0ExQkQ7O0tBQU1SLEs7QUE0Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW52ZXN0aWdhdGlvbi9bc2x1Z10uZjExY2I2YjQzMGUxNWMyYzE0ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUsIHcsIGggIH0pID0+IHtcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCwgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzXG5cbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShpbWFnZSlcbiAgfVxuICBjb25zb2xlLmxvZyhcImltYWdlXCIsIGltYWdlKVxuICBsZXQgbGF5b3V0XG4gIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgIGxheW91dCA9IFwiZmlsbFwiXG4gIH0gZWxzZSB7XG4gICAgbGF5b3V0ID0gXCJyZXNwb25zaXZlXCJcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxOZXh0SW1hZ2VcbiAgICAgIGxvYWRlcj17bG9hZGVyfVxuICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICB3aWR0aD1cIjE1MHB4XCJcbiAgICAgIGhlaWdodD1cIjE1MHB4XCIgIFxuICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICBzcmM9e2dldFN0cmFwaU1lZGlhKGltYWdlKX1cbiAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0IHx8IFwiXCJ9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==