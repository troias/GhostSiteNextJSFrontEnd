self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./components/investigations.js":
/*!**************************************!*\
  !*** ./components/investigations.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/investigations.js",
    _this = undefined;



var Investigations = function Investigations(_ref) {
  var investigations = _ref.investigations;
  // const leftArticlesCount = Math.ceil(articles.length / 5)
  // const leftArticles = articles.slice(0, leftArticlesCount)
  // const rightArticles = articles.slice(leftArticlesCount, articles.length)
  console.log("investigations", investigations);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "article-section pt-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "text-4xl pb-8 ",
      children: "Investigations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-child-width-1-2@s",
        "data-uk-grid": "true",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-child-width-1-2@m uk-grid-match",
            "data-uk-grid": true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Investigations;
/* harmony default export */ __webpack_exports__["default"] = (Investigations);

var _c;

$RefreshReg$(_c, "Investigations");

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


/***/ }),

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
  console.log("category details", category);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    categories: categories.data,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: category.attributes.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), articles.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_1__.default, {
          articles: category.attributes.articles.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 36
        }, _this), _components_investigations__WEBPACK_IMPORTED_MODULE_4__.default.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Investigation, {
          investigations: category.attributes.investigations.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 43
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnZlc3RpZ2F0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkludmVzdGlnYXRpb25zIiwiaW52ZXN0aWdhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJzZW8iLCJtZXRhVGl0bGUiLCJhdHRyaWJ1dGVzIiwibmFtZSIsIm1ldGFEZXNjcmlwdGlvbiIsImFydGljbGVzIiwiZGF0YSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXNCO0FBQUEsTUFBcEJDLGNBQW9CLFFBQXBCQSxjQUFvQjtBQUUxQztBQUNBO0FBQ0E7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLGNBQTlCO0FBQ0Ysc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSw0QkFDQTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUE7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBc0Msd0JBQWEsTUFBbkQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0U7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsb0NBQWY7QUFBb0Q7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBdENBOztLQUFNRCxjO0FBd0NQLCtEQUFlQSxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM3QyxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFSCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBRHJCO0FBRVZDLG1CQUFlLGdCQUFTTixRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBQTdCO0FBRkwsR0FBWjtBQUtBLE1BQU1FLFFBQVEsR0FBR1AsUUFBUSxDQUFDSSxVQUFULENBQW9CRyxRQUFwQixDQUE2QkMsSUFBOUM7QUFFRVgsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NFLFFBQWhDO0FBQ0Ysc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVDLFVBQVUsQ0FBQ08sSUFBL0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0YsUUFBUSxDQUFDSSxVQUFULENBQW9CQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUlFLFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQixDQUFsQixpQkFBdUIsOERBQUMseURBQUQ7QUFBVSxrQkFBUSxFQUFFVCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JHLFFBQXBCLENBQTZCQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUYzQixFQUdLYixzRUFBQSxHQUF3QixDQUF4QixpQkFBNkIsOERBQUMsYUFBRDtBQUFlLHdCQUFjLEVBQUVLLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQlIsY0FBcEIsQ0FBbUNZO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBckJEOztLQUFNVCxROztBQTJETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uODc0YzU3ZThlM2VhMjU0MzhiNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuIGNvbnN0IEludmVzdGlnYXRpb25zID0gKHtpbnZlc3RpZ2F0aW9uc30pID0+IHtcblxuICAgIC8vIGNvbnN0IGxlZnRBcnRpY2xlc0NvdW50ID0gTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIDUpXG4gICAgLy8gY29uc3QgbGVmdEFydGljbGVzID0gYXJ0aWNsZXMuc2xpY2UoMCwgbGVmdEFydGljbGVzQ291bnQpXG4gICAgLy8gY29uc3QgcmlnaHRBcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKGxlZnRBcnRpY2xlc0NvdW50LCBhcnRpY2xlcy5sZW5ndGgpXG5cbiAgICBjb25zb2xlLmxvZyhcImludmVzdGlnYXRpb25zXCIsIGludmVzdGlnYXRpb25zKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIHB0LThcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgcGItOCBcIj5JbnZlc3RpZ2F0aW9uczwvaDI+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY2hpbGQtd2lkdGgtMS0yQHNcIiBkYXRhLXVrLWdyaWQ9XCJ0cnVlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIHtsZWZ0QXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZV9fbGVmdF9fJHthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jaGlsZC13aWR0aC0xLTJAbSB1ay1ncmlkLW1hdGNoXCIgZGF0YS11ay1ncmlkPlxuICAgICAgICAgICAgey8qIHtyaWdodEFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZV9fbGVmdF9fJHthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RpZ2F0aW9uc1xuIiwiaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FydGljbGVzXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IEludmVzdGlnYXRpb25zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW52ZXN0aWdhdGlvbnMnXG5cbmNvbnN0IENhdGVnb3J5ID0gKHsgY2F0ZWdvcnksIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBgQWxsICR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfSBhcnRpY2xlc2AsXG4gIH1cblxuICBjb25zdCBhcnRpY2xlcyA9IGNhdGVnb3J5LmF0dHJpYnV0ZXMuYXJ0aWNsZXMuZGF0YVxuXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yeSBkZXRhaWxzXCIsIGNhdGVnb3J5KVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgICAgPGgxPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9oMT5cbiAgICAgICAgICB7IGFydGljbGVzLmxlbmd0aCA+IDAgJiYgPEFydGljbGVzIGFydGljbGVzPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLmFydGljbGVzLmRhdGF9IC8+fVxuICAgICAgICAgICB7IEludmVzdGlnYXRpb25zLmxlbmd0aCA+IDAgJiYgPEludmVzdGlnYXRpb24gaW52ZXN0aWdhdGlvbnM9e2NhdGVnb3J5LmF0dHJpYnV0ZXMuaW52ZXN0aWdhdGlvbnMuZGF0YX0gLz59IFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBjYXRlZ29yaWVzUmVzLmRhdGEubWFwKChjYXRlZ29yeSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgbWF0Y2hpbmdDYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7XG4gICAgZmlsdGVyczogeyBzbHVnOiBwYXJhbXMuc2x1ZyB9LFxuICAgIHBvcHVsYXRlOiB7XG4gICAgICBhcnRpY2xlczoge1xuICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICB9LFxuICAgICAgaW52ZXN0aWdhdGlvbnM6IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3J5OiBtYXRjaGluZ0NhdGVnb3JpZXMuZGF0YVswXSxcbiAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5XG4iXSwic291cmNlUm9vdCI6IiJ9