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
              props: {// footer: footerRes.data,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNIb21lIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaEFQSSIsInBvcHVsYXRlIiwiZm9vdGVyUmVzIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVDLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLEdBQW5DO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJOLE1BQTFCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXVCSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNBO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBeENBOztHQUFNRCxNO1VBQ1VHLGtEOzs7S0FEVkgsTTtBQTBDUCwrREFBZUEsTUFBZjtBQUVPLElBQU1RLGNBQWM7QUFBQSw4VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKQyxRQUFRLENBQUMsU0FBRCxFQUFZO0FBQzFDQyxzQkFBUSxFQUFFO0FBQ1JULHNCQUFNLEVBQUU7QUFDTlMsMEJBQVEsRUFBRTtBQURKO0FBREE7QUFEZ0MsYUFBWixDQURKOztBQUFBO0FBQ3RCQyxxQkFEc0I7QUFTNUJMLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSSxTQUF6QjtBQVQ0Qiw2Q0FXckI7QUFDTEMsbUJBQUssRUFBRSxDQUNMO0FBREssZUFERjtBQUlMQyx3QkFBVSxFQUFFO0FBSlAsYUFYcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEwsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tzbHVnXS43OTJhYTc0ZjgyMDViMDcwZjNkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCc0luc3RhZ3JhbX0gIGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHtBaU91dGxpbmVGYWNlYm9va30gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQge1RpU29jaWFsVHdpdHRlckNpcmN1bGFyfSBmcm9tICdyZWFjdC1pY29ucy90aSdcbmltcG9ydCB7QWlPdXRsaW5lWW91dHViZX0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuIGNvbnN0IEZvb3RlciA9ICh7Zm9vdGVyfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBpc0hvbWUgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvJ1xuICBjb25zb2xlLmxvZyhcImZvb3RlckRhdGFcIiwgZm9vdGVyKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgYm9yZGVyLXQtMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciBwYi04IHB0LTggXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICB7Lyoge2RhdGEubWVzc2FnZX0gKi99XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC00XCI+XG5cbiAgICAgICAgICAgIHsvKiA8YSBocmVmPXtkYXRhLmZvb3Rlcl9zb2NpYWxfbGlua3NbMF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5mb290ZXJfc29jaWFsX2xpbmtzWzBdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxUaVNvY2lhbFR3aXR0ZXJDaXJjdWxhciBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8QWlPdXRsaW5lWW91dHViZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8QnNJbnN0YWdyYW0gY2xhc3NOYW1lPVwidGV4dC0yeGwgbXItNFwiIC8+XG4gICAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGV4dC1jZW50ZXIgcGItNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgey8qIHtkYXRhLmNvcHlyaWdodF90ZXh0fSAqL31cbiAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmb290ZXJSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgIHBvcHVsYXRlOiB7XG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFwiZm9vdGVyUmVzXCIsIGZvb3RlclJlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLy8gZm9vdGVyOiBmb290ZXJSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=