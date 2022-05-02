self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./pages/category/[slug].js":
/*!**********************************!*\
  !*** ./pages/category/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/articles */ "./components/articles.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_investigations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/investigations */ "./components/investigations.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/pages/category/[slug].js",
    _this = undefined;






var Category = function Category(_ref) {
  var category = _ref.category,
      categories = _ref.categories;
  var seo = {
    metaTitle: category.attributes.name,
    metaDescription: "All ".concat(category.attributes.name, " articles")
  };
  var articles = category.attributes.articles.data;
  var investigations = category.attributes.investigations.data;
  console.log("category details", category);
  return (
    /*#__PURE__*/
    // <Layout categories={categories.data}>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-section",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
        seo: seo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: category.attributes.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), articles.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_1__.default, {
          articles: category.attributes.articles.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 36
        }, _this), investigations.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_investigations__WEBPACK_IMPORTED_MODULE_4__.default, {
          investigations: category.attributes.investigations.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 43
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this) // </Layout>

  );
};

_c = Category;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwic2VvIiwibWV0YVRpdGxlIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlcyIsImRhdGEiLCJpbnZlc3RpZ2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE4QjtBQUFBLE1BQTNCQyxRQUEyQixRQUEzQkEsUUFBMkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzdDLE1BQU1DLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUVILFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkMsSUFEckI7QUFFVkMsbUJBQWUsZ0JBQVNOLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkMsSUFBN0I7QUFGTCxHQUFaO0FBS0EsTUFBTUUsUUFBUSxHQUFHUCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JHLFFBQXBCLENBQTZCQyxJQUE5QztBQUNBLE1BQU1DLGNBQWMsR0FBR1QsUUFBUSxDQUFDSSxVQUFULENBQW9CSyxjQUFwQixDQUFtQ0QsSUFBMUQ7QUFFRUUsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NYLFFBQWhDO0FBQ0Y7QUFBQTtBQUNFO0FBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNLLDhEQUFDLG9EQUFEO0FBQUssV0FBRyxFQUFFRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETCxlQUVFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtGLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVJRSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQ0FBbEIsaUJBQXVCLDhEQUFDLHlEQUFEO0FBQVUsa0JBQVEsRUFBRVosUUFBUSxDQUFDSSxVQUFULENBQW9CRyxRQUFwQixDQUE2QkM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGM0IsRUFHS0MsY0FBYyxDQUFDRyxNQUFmLEdBQXdCLENBQXhCLGlCQUE2Qiw4REFBQywrREFBRDtBQUFnQix3QkFBYyxFQUFFWixRQUFRLENBQUNJLFVBQVQsQ0FBb0JLLGNBQXBCLENBQW1DRDtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixDQVdFOztBQVhGO0FBYUQsQ0F2QkQ7O0tBQU1ULFE7O0FBNkROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS43MDJkMDdiY2ZiYjNjOWI0ODc1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FydGljbGVzXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IEludmVzdGlnYXRpb25zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW52ZXN0aWdhdGlvbnMnXG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgY2F0ZWdvcnksIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBgQWxsICR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfSBhcnRpY2xlc2AsXG4gIH1cblxuICBjb25zdCBhcnRpY2xlcyA9IGNhdGVnb3J5LmF0dHJpYnV0ZXMuYXJ0aWNsZXMuZGF0YVxuICBjb25zdCBpbnZlc3RpZ2F0aW9ucyA9IGNhdGVnb3J5LmF0dHJpYnV0ZXMuaW52ZXN0aWdhdGlvbnMuZGF0YVxuXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yeSBkZXRhaWxzXCIsIGNhdGVnb3J5KVxuICByZXR1cm4gKFxuICAgIC8vIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvaDE+XG4gICAgICAgICAgeyBhcnRpY2xlcy5sZW5ndGggPiAwICYmIDxBcnRpY2xlcyBhcnRpY2xlcz17Y2F0ZWdvcnkuYXR0cmlidXRlcy5hcnRpY2xlcy5kYXRhfSAvPn1cbiAgICAgICAgICAgeyBpbnZlc3RpZ2F0aW9ucy5sZW5ndGggPiAwICYmIDxJbnZlc3RpZ2F0aW9ucyBpbnZlc3RpZ2F0aW9ucz17Y2F0ZWdvcnkuYXR0cmlidXRlcy5pbnZlc3RpZ2F0aW9ucy5kYXRhfSAvPn0gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgLy8gPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGZpZWxkczogW1wic2x1Z1wiXSB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNhdGVnb3JpZXNSZXMuZGF0YS5tYXAoKGNhdGVnb3J5KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGNhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBtYXRjaGluZ0NhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHtcbiAgICBmaWx0ZXJzOiB7IHNsdWc6IHBhcmFtcy5zbHVnIH0sXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGFydGljbGVzOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgICBpbnZlc3RpZ2F0aW9uczoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcnk6IG1hdGNoaW5nQ2F0ZWdvcmllcy5kYXRhWzBdLFxuICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllcyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=