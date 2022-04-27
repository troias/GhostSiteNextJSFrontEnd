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
  console.log("category details");
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
        }, _this), articles && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_1__.default, {
          articles: category.attributes.articles.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwic2VvIiwibWV0YVRpdGxlIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM3QyxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFSCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBRHJCO0FBRVZDLG1CQUFlLGdCQUFTTixRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBQTdCO0FBRkwsR0FBWjtBQUtBLE1BQU1FLFFBQVEsR0FBR1AsUUFBUSxDQUFDSSxVQUFULENBQW9CRyxRQUFwQixDQUE2QkMsSUFBOUM7QUFFRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRixzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRVQsVUFBVSxDQUFDTyxJQUEvQjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssU0FBRyxFQUFFTjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRixRQUFRLENBQUNJLFVBQVQsQ0FBb0JDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFSUUsUUFBUSxpQkFBSSw4REFBQyx5REFBRDtBQUFVLGtCQUFRLEVBQUVQLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQkcsUUFBcEIsQ0FBNkJDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBcEJEOztLQUFNVCxROztBQXVETiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uYjBjNjQwZTYxZTcxMTk0YjAyMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcblxuY29uc3QgQ2F0ZWdvcnkgPSAoeyBjYXRlZ29yeSwgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IGNhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZSxcbiAgICBtZXRhRGVzY3JpcHRpb246IGBBbGwgJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9IGFydGljbGVzYCxcbiAgfVxuXG4gIGNvbnN0IGFydGljbGVzID0gY2F0ZWdvcnkuYXR0cmlidXRlcy5hcnRpY2xlcy5kYXRhXG5cbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3J5IGRldGFpbHNcIilcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuZGF0YX0+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvaDE+XG4gICAgICAgICAgeyBhcnRpY2xlcyAmJiA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2NhdGVnb3J5LmF0dHJpYnV0ZXMuYXJ0aWNsZXMuZGF0YX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGZpZWxkczogW1wic2x1Z1wiXSB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGNhdGVnb3JpZXNSZXMuZGF0YS5tYXAoKGNhdGVnb3J5KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGNhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBtYXRjaGluZ0NhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHtcbiAgICBmaWx0ZXJzOiB7IHNsdWc6IHBhcmFtcy5zbHVnIH0sXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGFydGljbGVzOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXRlZ29yeTogbWF0Y2hpbmdDYXRlZ29yaWVzLmRhdGFbMF0sXG4gICAgICBjYXRlZ29yaWVzOiBhbGxDYXRlZ29yaWVzLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==