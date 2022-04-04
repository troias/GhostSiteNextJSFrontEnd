self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/nav.js",
    _this = undefined;




var Nav = function Nav(_ref) {
  var categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "uk-navbar-container",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-navbar-left",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: "Scary Site"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-navbar-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: categories.map(function (category) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/category/".concat(category.attributes.slug),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "uk-link-reset",
                  children: category.attributes.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this)
            }, category.id, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQW9CO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUM5QixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQXFDLDRCQUFyQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLGVBQWQ7QUFBQSxvQkFDR0EsVUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFjO0FBQzVCLGdDQUNFO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxzQkFBZUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxJQUFuQyxDQUFWO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLGVBQWI7QUFBQSw0QkFBOEJGLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFTSCxRQUFRLENBQUNJLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFPRCxXQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0E3QkQ7O0tBQU1QLEc7QUErQk4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzcwZTQ3N2Y1YjM1YjljY2FkOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1jb250YWluZXJcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+U2NhcnkgU2l0ZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==