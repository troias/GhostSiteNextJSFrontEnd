self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/footer.js",
    _this = undefined,
    _s = $RefreshSig$();








var Footer = function Footer(_ref) {
  _s();

  var footer = _ref.footer;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var isHome = router.pathname === '/';
  console.log("footerData", footer);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "uk-container border-t-2 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-text-center pb-8 pt-8 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-xl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex justify-center mt-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-text-center pb-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-sm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Footer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);
var getStaticProps = /*#__PURE__*/function () {
  var _ref2 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var footerRes;
    return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchAPI("/global", {
              populate: {
                footer: {
                  populate: "*"
                }
              }
            });

          case 2:
            footerRes = _context.sent;
            console.log("footerRes", footerRes);
            return _context.abrupt("return", {
              props: {
                footer: footerRes.data
              },
              revalidate: 1
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStaticProps() {
    return _ref2.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNIb21lIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaEFQSSIsInBvcHVsYXRlIiwiZm9vdGVyUmVzIiwicHJvcHMiLCJkYXRhIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQzVCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixHQUFuQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTixNQUExQjtBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUF1Qkk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDQTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXhDQTs7R0FBTUQsTTtVQUNVRyxrRDs7O0tBRFZILE07QUEwQ1AsK0RBQWVBLE1BQWY7QUFFTyxJQUFNUSxjQUFjO0FBQUEsOFRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSkMsUUFBUSxDQUFDLFNBQUQsRUFBWTtBQUMxQ0Msc0JBQVEsRUFBRTtBQUNSVCxzQkFBTSxFQUFFO0FBQ05TLDBCQUFRLEVBQUU7QUFESjtBQURBO0FBRGdDLGFBQVosQ0FESjs7QUFBQTtBQUN0QkMscUJBRHNCO0FBUzVCTCxtQkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkksU0FBekI7QUFUNEIsNkNBV3JCO0FBQ0xDLG1CQUFLLEVBQUU7QUFDSlgsc0JBQU0sRUFBRVUsU0FBUyxDQUFDRTtBQURkLGVBREY7QUFJTEMsd0JBQVUsRUFBRTtBQUpQLGFBWHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWROLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZS9bc2x1Z10uZmU4MDI4NzQwMTAwNmZmYTIwNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnNJbnN0YWdyYW19ICBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7QWlPdXRsaW5lRmFjZWJvb2t9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHtUaVNvY2lhbFR3aXR0ZXJDaXJjdWxhcn0gZnJvbSAncmVhY3QtaWNvbnMvdGknXG5pbXBvcnQge0FpT3V0bGluZVlvdXR1YmV9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbiBjb25zdCBGb290ZXIgPSAoe2Zvb3Rlcn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgaXNIb21lID0gcm91dGVyLnBhdGhuYW1lID09PSAnLydcbiAgY29uc29sZS5sb2coXCJmb290ZXJEYXRhXCIsIGZvb3Rlcik7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIGJvcmRlci10LTIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGV4dC1jZW50ZXIgcGItOCBwdC04IFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgey8qIHtkYXRhLm1lc3NhZ2V9ICovfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxuXG4gICAgICAgICAgICB7LyogPGEgaHJlZj17ZGF0YS5mb290ZXJfc29jaWFsX2xpbmtzWzBdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9vayBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXItNFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmZvb3Rlcl9zb2NpYWxfbGlua3NbMF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEFpT3V0bGluZVlvdXR1YmUgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXItNFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmZvb3Rlcl9zb2NpYWxfbGlua3NbMF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEJzSW5zdGFncmFtIGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTRcIiAvPlxuICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRleHQtY2VudGVyIHBiLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgIHsvKiB7ZGF0YS5jb3B5cmlnaHRfdGV4dH0gKi99XG4gICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZm9vdGVyUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZyhcImZvb3RlclJlc1wiLCBmb290ZXJSZXMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgICBmb290ZXI6IGZvb3RlclJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==