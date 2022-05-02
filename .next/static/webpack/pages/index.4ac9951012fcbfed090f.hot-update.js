self["webpackHotUpdate_N_E"]("pages/index",{

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
    var globalRes;
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
            globalRes = _context.sent;
            console.log("footerRes", globalRes);
            return _context.abrupt("return", {
              props: {
                footer: globalRes.data
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNIb21lIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaEFQSSIsInBvcHVsYXRlIiwiZ2xvYmFsUmVzIiwicHJvcHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVDLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLEdBQW5DO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJOLE1BQTFCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQXVCSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNBO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBeENBOztHQUFNRCxNO1VBQ1VHLGtEOzs7S0FEVkgsTTtBQTBDUCwrREFBZUEsTUFBZjtBQUVPLElBQU1RLGNBQWM7QUFBQSw4VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVKQyxRQUFRLENBQUMsU0FBRCxFQUFZO0FBQzFDQyxzQkFBUSxFQUFFO0FBRVJULHNCQUFNLEVBQUU7QUFDTlMsMEJBQVEsRUFBRTtBQURKO0FBRkE7QUFEZ0MsYUFBWixDQUZKOztBQUFBO0FBRXRCQyxxQkFGc0I7QUFXNUJMLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSSxTQUF6QjtBQVg0Qiw2Q0FhckI7QUFDTEMsbUJBQUssRUFBRTtBQUNKWCxzQkFBTSxFQUFFVSxTQUFTLENBQUNFO0FBRGQ7QUFERixhQWJxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFkTCxjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhYzk5NTEwMTJmY2JmZWQwOTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0JzSW5zdGFncmFtfSAgZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQge0FpT3V0bGluZUZhY2Vib29rfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXJ9IGZyb20gJ3JlYWN0LWljb25zL3RpJ1xuaW1wb3J0IHtBaU91dGxpbmVZb3V0dWJlfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4gY29uc3QgRm9vdGVyID0gKHtmb290ZXJ9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGlzSG9tZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy8nXG4gIGNvbnNvbGUubG9nKFwiZm9vdGVyRGF0YVwiLCBmb290ZXIpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciBib3JkZXItdC0yIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRleHQtY2VudGVyIHBiLTggcHQtOCBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAgICAgICAgIHsvKiB7ZGF0YS5tZXNzYWdlfSAqL31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTRcIj5cblxuICAgICAgICAgICAgey8qIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXItNFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmZvb3Rlcl9zb2NpYWxfbGlua3NbMF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPFRpU29jaWFsVHdpdHRlckNpcmN1bGFyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5mb290ZXJfc29jaWFsX2xpbmtzWzBdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxBaU91dGxpbmVZb3V0dWJlIGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5mb290ZXJfc29jaWFsX2xpbmtzWzBdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxCc0luc3RhZ3JhbSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciBwYi00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICB7Lyoge2RhdGEuY29weXJpZ2h0X3RleHR9ICovfVxuICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICBcbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgIFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZyhcImZvb3RlclJlc1wiLCBnbG9iYWxSZXMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgICBmb290ZXI6IGdsb2JhbFJlcy5kYXRhLFxuICAgIH0sXG4gIFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9