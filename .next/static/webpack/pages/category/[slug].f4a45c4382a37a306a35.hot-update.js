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
  console.log("category details", category);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    categories: categories.data,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: category.attributes.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), articles.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_1__.default, {
          articles: category.attributes.articles.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 36
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwic2VvIiwibWV0YVRpdGxlIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM3QyxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFSCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBRHJCO0FBRVZDLG1CQUFlLGdCQUFTTixRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBQTdCO0FBRkwsR0FBWjtBQUtBLE1BQU1FLFFBQVEsR0FBR1AsUUFBUSxDQUFDSSxVQUFULENBQW9CRyxRQUFwQixDQUE2QkMsSUFBOUM7QUFFRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NWLFFBQWhDO0FBQ0Ysc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVDLFVBQVUsQ0FBQ08sSUFBL0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0YsUUFBUSxDQUFDSSxVQUFULENBQW9CQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUlFLFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQixDQUFsQixpQkFBdUIsOERBQUMseURBQUQ7QUFBVSxrQkFBUSxFQUFFWCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JHLFFBQXBCLENBQTZCQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXBCRDs7S0FBTVQsUTs7QUF1RE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmY0YTQ1YzQzODJhMzdhMzA2YTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXJ0aWNsZXNcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nlb1wiXG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgY2F0ZWdvcnksIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBgQWxsICR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfSBhcnRpY2xlc2AsXG4gIH1cblxuICBjb25zdCBhcnRpY2xlcyA9IGNhdGVnb3J5LmF0dHJpYnV0ZXMuYXJ0aWNsZXMuZGF0YVxuXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yeSBkZXRhaWxzXCIsIGNhdGVnb3J5KVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgICAgPGgxPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9oMT5cbiAgICAgICAgICB7IGFydGljbGVzLmxlbmd0aCA+IDAgJiYgPEFydGljbGVzIGFydGljbGVzPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLmFydGljbGVzLmRhdGF9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKChjYXRlZ29yeSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgbWF0Y2hpbmdDYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7XG4gICAgZmlsdGVyczogeyBzbHVnOiBwYXJhbXMuc2x1ZyB9LFxuICAgIHBvcHVsYXRlOiB7XG4gICAgICBhcnRpY2xlczoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcnk6IG1hdGNoaW5nQ2F0ZWdvcmllcy5kYXRhWzBdLFxuICAgICAgY2F0ZWdvcmllczogYWxsQ2F0ZWdvcmllcyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=