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
      w = _ref.w,
      h = _ref.h;
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

  if (!width && !height) {
    w = 150;
    h = 150;
  }

  var loader = function loader() {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    loader: loader,
    layout: layout,
    width: width,
    height: height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image),
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS5qcyJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlIiwic3R5bGUiLCJ3IiwiaCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwidXJsIiwiYWx0ZXJuYXRpdmVUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwibGF5b3V0IiwibG9hZGVyIiwiZ2V0U3RyYXBpTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTZCO0FBQUEsTUFBMUJDLEtBQTBCLFFBQTFCQSxLQUEwQjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxDQUFZLFFBQVpBLENBQVk7QUFBQSxNQUFUQyxDQUFTLFFBQVRBLENBQVM7QUFBQSw4QkFDT0gsS0FBSyxDQUFDSSxJQUFOLENBQVdDLFVBRGxCO0FBQUEsTUFDakNDLEdBRGlDLHlCQUNqQ0EsR0FEaUM7QUFBQSxNQUM1QkMsZUFENEIseUJBQzVCQSxlQUQ0QjtBQUFBLE1BQ1hDLEtBRFcseUJBQ1hBLEtBRFc7QUFBQSxNQUNKQyxNQURJLHlCQUNKQSxNQURJO0FBRXpDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlgsS0FBSyxDQUFDSSxJQUFOLENBQVdDLFVBQXpDO0FBRUEsTUFBSU8sTUFBTSxHQUFHLFlBQWI7O0FBQ0EsTUFBSSxDQUFDSixLQUFELElBQVUsQ0FBQ0MsTUFBZixFQUF1QjtBQUNyQkcsVUFBTSxTQUFOO0FBQ0Q7O0FBR0QsTUFBSSxDQUFDSixLQUFELElBQVUsQ0FBQ0MsTUFBZixFQUF1QjtBQUNyQlAsS0FBQyxHQUFFLEdBQUg7QUFDQUMsS0FBQyxHQUFFLEdBQUg7QUFDRDs7QUFFRCxNQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFdBQU9DLDBEQUFjLENBQUNkLEtBQUQsQ0FBckI7QUFDRCxHQUZEOztBQUtBLHNCQUVFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBTSxFQUFFYSxNQURWO0FBRUUsVUFBTSxFQUFFRCxNQUZWO0FBR0UsU0FBSyxFQUFHSixLQUhWO0FBSUUsVUFBTSxFQUFHQyxNQUpYO0FBS0UsYUFBUyxFQUFDLFNBTFo7QUFNRSxPQUFHLEVBQUVLLDBEQUFjLENBQUNkLEtBQUQsQ0FOckI7QUFPRSxPQUFHLEVBQUVPLGVBQWUsSUFBSTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFZRCxDQWhDRDs7S0FBTVIsSztBQWtDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmViOWEwNzUyNWJjZWVlN2FlYmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuXG5jb25zdCBJbWFnZSA9ICh7IGltYWdlLCBzdHlsZSwgdywgaCAgfSkgPT4ge1xuICBjb25zdCB7IHVybCwgYWx0ZXJuYXRpdmVUZXh0LCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZS5kYXRhLmF0dHJpYnV0ZXNcbiAgY29uc29sZS5sb2coXCJpbm5lckltYWdlZGF0YVwiLCBpbWFnZS5kYXRhLmF0dHJpYnV0ZXMpO1xuXG4gIGxldCBsYXlvdXQgPSBcInJlc3BvbnNpdmVcIlxuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpIHtcbiAgICBsYXlvdXQgPSBgZmlsbGBcbiAgfVxuXG5cbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgdz0gMTUwXG4gICAgaD0gMTUwXG4gIH1cblxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKVxuICB9XG5cbiAgXG4gIHJldHVybiAoXG5cbiAgICA8TmV4dEltYWdlXG4gICAgICBsb2FkZXI9e2xvYWRlcn1cbiAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgd2lkdGg9eyB3aWR0aH1cbiAgICAgIGhlaWdodD17IGhlaWdodCB9ICBcbiAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgc3JjPXtnZXRTdHJhcGlNZWRpYShpbWFnZSl9XG4gICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCBcIlwifVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=