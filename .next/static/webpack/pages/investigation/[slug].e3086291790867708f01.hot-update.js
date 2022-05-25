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

  var w = 150;
  var h = 150;

  if (nav) {
    w = 150;
    h = 150;
  }

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    loader: loader,
    layout: layout,
    width: width || w,
    height: height || h,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJuYXYiLCJkYXRhIiwiYXR0cmlidXRlcyIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImxheW91dCIsInciLCJoIiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTJCO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFYQyxHQUFXLFFBQVhBLEdBQVc7QUFBQSw4QkFDU0YsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFVBRHBCO0FBQUEsTUFDL0JDLEdBRCtCLHlCQUMvQkEsR0FEK0I7QUFBQSxNQUMxQkMsZUFEMEIseUJBQzFCQSxlQUQwQjtBQUFBLE1BQ1RDLEtBRFMseUJBQ1RBLEtBRFM7QUFBQSxNQUNGQyxNQURFLHlCQUNGQSxNQURFO0FBRXZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlYsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFVBQXpDO0FBRUEsTUFBSU8sTUFBTSxHQUFHLFlBQWI7O0FBQ0EsTUFBSSxDQUFDSixLQUFELElBQVUsQ0FBQ0MsTUFBZixFQUF1QjtBQUNyQkcsVUFBTSxTQUFOO0FBQ0Q7O0FBRUQsTUFBSUMsQ0FBQyxHQUFHLEdBQVI7QUFDQSxNQUFJQyxDQUFDLEdBQUcsR0FBUjs7QUFFQSxNQUFJWCxHQUFKLEVBQVM7QUFDUFUsS0FBQyxHQUFHLEdBQUo7QUFDQUMsS0FBQyxHQUFHLEdBQUo7QUFDRDs7QUFJRCxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFdBQU9DLDBEQUFjLENBQUNmLEtBQUQsQ0FBckI7QUFDRCxHQUZEOztBQUtBLHNCQUVFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBTSxFQUFFYyxNQURWO0FBRUUsVUFBTSxFQUFFSCxNQUZWO0FBR0UsU0FBSyxFQUFHSixLQUFLLElBQUlLLENBSG5CO0FBSUUsVUFBTSxFQUFHSixNQUFNLElBQUlLLENBSnJCO0FBS0UsYUFBUyxFQUFDLFNBTFo7QUFNRSxPQUFHLEVBQUVFLDBEQUFjLENBQUNmLEtBQUQsQ0FOckI7QUFPRSxPQUFHLEVBQUVNLGVBQWUsSUFBSTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFZRCxDQXBDRDs7S0FBTVAsSztBQXNDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbnZlc3RpZ2F0aW9uL1tzbHVnXS5lMzA4NjI5MTc5MDg2NzcwOGYwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuY29uc3QgSW1hZ2UgPSAoeyBpbWFnZSwgc3R5bGUsbmF2ICB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsLCBhbHRlcm5hdGl2ZVRleHQsIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlLmRhdGEuYXR0cmlidXRlc1xuICBjb25zb2xlLmxvZyhcImlubmVySW1hZ2VkYXRhXCIsIGltYWdlLmRhdGEuYXR0cmlidXRlcyk7XG5cbiAgbGV0IGxheW91dCA9IFwicmVzcG9uc2l2ZVwiXG4gIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xuICAgIGxheW91dCA9IGBmaWxsYFxuICB9XG5cbiAgbGV0IHcgPSAxNTAgXG4gIGxldCBoID0gMTUwXG5cbiAgaWYgKG5hdikge1xuICAgIHcgPSAxNTBcbiAgICBoID0gMTUwXG4gIH1cblxuXG5cbiAgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRTdHJhcGlNZWRpYShpbWFnZSlcbiAgfVxuXG4gIFxuICByZXR1cm4gKFxuXG4gICAgPE5leHRJbWFnZVxuICAgICAgbG9hZGVyPXtsb2FkZXJ9XG4gICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgIHdpZHRoPXsgd2lkdGggfHwgd31cbiAgICAgIGhlaWdodD17IGhlaWdodCB8fCBofSAgXG4gICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgIHNyYz17Z2V0U3RyYXBpTWVkaWEoaW1hZ2UpfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHQgfHwgXCJcIn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9