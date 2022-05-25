self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/authNotificationModal.js":
/*!*********************************************!*\
  !*** ./components/authNotificationModal.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/authNotificationModal.js",
    _this = undefined,
    _s = $RefreshSig$();





var AuthNotificationModal = function AuthNotificationModal() {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.default);
  var isLoading = ctx.isLoading; // console.log("isLoading", isLoading);

  var error = ctx.error;
  var success = ctx.success;
  var isLostPassword = ctx.isLostPassword;
  console.log("AuthNotificationModalError", error);
  console.log("AuthNotificationModalSuccess", success);
  console.log("isLostPassword", isLostPassword);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: "Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center",
      children: isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        role: "status",
        className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 32
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center",
      children: [success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheckCircle, {
            size: 50,
            className: "text-green-500 flex justify-center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-sm text-gray-900 dark:text-gray-500",
            children: isLostPassword ? "Password reset link sent to your email" : "Success"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 32
      }, _this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheckCircle, {
            size: 50,
            className: "text-red-500 mb-6 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-sm text-gray-900 dark:text-gray-500",
            children: error.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 28
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this), isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-sm text-gray-900 dark:text-gray-500",
          children: "Please check your email for a link to reset your password."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "link",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        children: !error && " Go back to site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(AuthNotificationModal, "/dMy7t63NXD4eYACoT93CePwGrg=");

_c = AuthNotificationModal;
/* harmony default export */ __webpack_exports__["default"] = (AuthNotificationModal);

var _c;

$RefreshReg$(_c, "AuthNotificationModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoTm90aWZpY2F0aW9uTW9kYWwuanMiXSwibmFtZXMiOlsiQXV0aE5vdGlmaWNhdGlvbk1vZGFsIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiaXNMb3N0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBRWhDLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFFQSxNQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0csU0FBdEIsQ0FKZ0MsQ0FNaEM7O0FBRUEsTUFBTUMsS0FBSyxHQUFHSixHQUFHLENBQUNJLEtBQWxCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHTCxHQUFHLENBQUNLLE9BQXBCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHTixHQUFHLENBQUNNLGNBQTNCO0FBRUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaLEVBQTBDSixLQUExQztBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q0gsT0FBNUM7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLGNBQTlCO0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQSw0QkFHSTtBQUFJLGVBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBTUk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSxnQkFFS0gsU0FBUyxpQkFBSztBQUFLLFlBQUksRUFBQyxRQUFWO0FBQW1CLGlCQUFTLEVBQUMsaUZBQTdCO0FBQStHLGVBQU8sRUFBQyxhQUF2SDtBQUFxSSxZQUFJLEVBQUMsTUFBMUk7QUFBaUosYUFBSyxFQUFDLDRCQUF2SjtBQUFBLGdDQUNYO0FBQU0sV0FBQyxFQUFDLDhXQUFSO0FBQXVYLGNBQUksRUFBQztBQUE1WDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBRVg7QUFBTSxXQUFDLEVBQUMsK2tCQUFSO0FBQXdsQixjQUFJLEVBQUM7QUFBN2xCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQWdCSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLGlCQUNLRSxPQUFPLGlCQUFPO0FBQUEsZ0NBQ1g7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZ0IsZ0JBQUksRUFBRSxFQUF0QjtBQUEwQixxQkFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBSVg7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUMsMENBQWI7QUFBQSxzQkFDS0MsY0FBYyxHQUFHLHdDQUFILEdBQTZDO0FBRGhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQixFQWFLRixLQUFLLGlCQUFLO0FBQUEsZ0NBQ1A7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZSxnQkFBSSxFQUFFLEVBQXJCO0FBQXlCLHFCQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE8sZUFJUDtBQUFBLGlDQUNBO0FBQUcscUJBQVMsRUFBQywwQ0FBYjtBQUFBLHNCQUF5REEsS0FBSyxDQUFDSztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkosRUF3Q0tILGNBQWMsaUJBQUs7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDaEI7QUFBQSwrQkFDQTtBQUFHLG1CQUFTLEVBQUMsMENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Q3hCLGVBa0RJO0FBQUEsNkJBQ0k7QUFBUSxZQUFJLEVBQUMsTUFBYjtBQUFvQixpQkFBUyxFQUFDLDBEQUE5QjtBQUFBLGtCQUNLLENBQUNGLEtBQUQsSUFBVTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0RILENBL0VEOztHQUFNTCxxQjs7S0FBQUEscUI7QUFpRk4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjkwMmEzMzA4NDMyNzI5ZjlmMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCdcbmltcG9ydCB7IEJzQ2hlY2tDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuXG5jb25zdCBBdXRoTm90aWZpY2F0aW9uTW9kYWwgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICAgIGNvbnN0IGlzTG9hZGluZyA9IGN0eC5pc0xvYWRpbmc7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImlzTG9hZGluZ1wiLCBpc0xvYWRpbmcpO1xuXG4gICAgY29uc3QgZXJyb3IgPSBjdHguZXJyb3I7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGN0eC5zdWNjZXNzO1xuICAgIGNvbnN0IGlzTG9zdFBhc3N3b3JkID0gY3R4LmlzTG9zdFBhc3N3b3JkO1xuXG4gICAgIGNvbnNvbGUubG9nKFwiQXV0aE5vdGlmaWNhdGlvbk1vZGFsRXJyb3JcIiwgZXJyb3IpXG4gICAgIGNvbnNvbGUubG9nKFwiQXV0aE5vdGlmaWNhdGlvbk1vZGFsU3VjY2Vzc1wiLCBzdWNjZXNzICApXG4gICAgIGNvbnNvbGUubG9nKFwiaXNMb3N0UGFzc3dvcmRcIiwgaXNMb3N0UGFzc3dvcmQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcGItNCBzcGFjZS15LTYgbGc6cHgtOCBzbTpwYi02IHhsOnBiLThcIiA+XG5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5TdGF0dXM8L2gzPlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoPHN2ZyByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwiaW5saW5lIG1yLTIgdy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC1ibHVlLTYwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiIGZpbGw9XCJjdXJyZW50RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+KX1cblxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgICYmICAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZSAgc2l6ZT17NTB9IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIGZsZXgganVzdGlmeS1jZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9zdFBhc3N3b3JkID8gXCJQYXNzd29yZCByZXNldCBsaW5rIHNlbnQgdG8geW91ciBlbWFpbFwiOiBcIlN1Y2Nlc3NcIn1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlIHNpemU9ezUwfSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNiBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPntlcnJvci5tZXNzYWdlIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzTG9zdFBhc3N3b3JkICYmICg8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+KX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFlcnJvciAmJiBcIiBHbyBiYWNrIHRvIHNpdGVcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoTm90aWZpY2F0aW9uTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=