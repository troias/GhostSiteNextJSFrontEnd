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
/* harmony import */ var _investigation_slug___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../investigation/[slug] */ "./pages/investigation/[slug].js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwic2VvIiwibWV0YVRpdGxlIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJtZXRhRGVzY3JpcHRpb24iLCJhcnRpY2xlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM3QyxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFSCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBRHJCO0FBRVZDLG1CQUFlLGdCQUFTTixRQUFRLENBQUNJLFVBQVQsQ0FBb0JDLElBQTdCO0FBRkwsR0FBWjtBQUtBLE1BQU1FLFFBQVEsR0FBR1AsUUFBUSxDQUFDSSxVQUFULENBQW9CRyxRQUFwQixDQUE2QkMsSUFBOUM7QUFFRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NWLFFBQWhDO0FBQ0Ysc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVDLFVBQVUsQ0FBQ08sSUFBL0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRU47QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0YsUUFBUSxDQUFDSSxVQUFULENBQW9CQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUlFLFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQixDQUFsQixpQkFBdUIsOERBQUMseURBQUQ7QUFBVSxrQkFBUSxFQUFFWCxRQUFRLENBQUNJLFVBQVQsQ0FBb0JHLFFBQXBCLENBQTZCQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXJCRDs7S0FBTVQsUTs7QUF3RE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLjdmNGVkMTU4NWJkZjNmZDc4Y2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXJ0aWNsZXNcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgSW52ZXN0aWdhdGlvbiBmcm9tIFwiLi4vaW52ZXN0aWdhdGlvbi9bc2x1Z11cIlxuXG5jb25zdCBDYXRlZ29yeSA9ICh7IGNhdGVnb3J5LCBjYXRlZ29yaWVzIH0pID0+IHtcbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogY2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogYEFsbCAke2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX0gYXJ0aWNsZXNgLFxuICB9XG5cbiAgY29uc3QgYXJ0aWNsZXMgPSBjYXRlZ29yeS5hdHRyaWJ1dGVzLmFydGljbGVzLmRhdGFcblxuICAgIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnkgZGV0YWlsc1wiLCBjYXRlZ29yeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuZGF0YX0+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxoMT57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvaDE+XG4gICAgICAgICAgeyBhcnRpY2xlcy5sZW5ndGggPiAwICYmIDxBcnRpY2xlcyBhcnRpY2xlcz17Y2F0ZWdvcnkuYXR0cmlidXRlcy5hcnRpY2xlcy5kYXRhfSAvPn1cbiAgICAgICAgICB7LyogeyBJbnZlc3RpZ2F0aW9ucy5sZW5ndGggPiAwICYmIDxJbnZlc3RpZ2F0aW9uIGludmVzdGlnYXRpb25zPXtjYXRlZ29yeS5hdHRyaWJ1dGVzLmludmVzdGlnYXRpb25zLmRhdGF9IC8+fSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogY2F0ZWdvcmllc1Jlcy5kYXRhLm1hcCgoY2F0ZWdvcnkpID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogY2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IG1hdGNoaW5nQ2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwge1xuICAgIGZpbHRlcnM6IHsgc2x1ZzogcGFyYW1zLnNsdWcgfSxcbiAgICBwb3B1bGF0ZToge1xuICAgICAgYXJ0aWNsZXM6IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBjb25zdCBhbGxDYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3J5OiBtYXRjaGluZ0NhdGVnb3JpZXMuZGF0YVswXSxcbiAgICAgIGNhdGVnb3JpZXM6IGFsbENhdGVnb3JpZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5XG4iXSwic291cmNlUm9vdCI6IiJ9