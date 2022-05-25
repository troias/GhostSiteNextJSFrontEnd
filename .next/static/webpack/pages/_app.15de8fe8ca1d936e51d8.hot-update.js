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
  var isLostPassword = ctx.isLostPassword; //  console.log("AuthNotificationModalError", error)
  //  console.log("AuthNotificationModalSuccess", success  )
  //  console.log("isLostPassword", isLostPassword)

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
            children: error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoTm90aWZpY2F0aW9uTW9kYWwuanMiXSwibmFtZXMiOlsiQXV0aE5vdGlmaWNhdGlvbk1vZGFsIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiaXNMb3N0UGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUVoQyxNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBRUEsTUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNHLFNBQXRCLENBSmdDLENBTWhDOztBQUVBLE1BQU1DLEtBQUssR0FBR0osR0FBRyxDQUFDSSxLQUFsQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0wsR0FBRyxDQUFDSyxPQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBR04sR0FBRyxDQUFDTSxjQUEzQixDQVZnQyxDQVloQztBQUNBO0FBQ0E7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQSw0QkFHSTtBQUFJLGVBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBTUk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSxnQkFFS0gsU0FBUyxpQkFBSztBQUFLLFlBQUksRUFBQyxRQUFWO0FBQW1CLGlCQUFTLEVBQUMsaUZBQTdCO0FBQStHLGVBQU8sRUFBQyxhQUF2SDtBQUFxSSxZQUFJLEVBQUMsTUFBMUk7QUFBaUosYUFBSyxFQUFDLDRCQUF2SjtBQUFBLGdDQUNYO0FBQU0sV0FBQyxFQUFDLDhXQUFSO0FBQXVYLGNBQUksRUFBQztBQUE1WDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBRVg7QUFBTSxXQUFDLEVBQUMsK2tCQUFSO0FBQXdsQixjQUFJLEVBQUM7QUFBN2xCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQWdCSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLGlCQUNLRSxPQUFPLGlCQUFPO0FBQUEsZ0NBQ1g7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZ0IsZ0JBQUksRUFBRSxFQUF0QjtBQUEwQixxQkFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBSVg7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUMsMENBQWI7QUFBQSxzQkFDS0MsY0FBYyxHQUFHLHdDQUFILEdBQTZDO0FBRGhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQixFQWFLRixLQUFLLGlCQUFLO0FBQUEsZ0NBQ1A7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZSxnQkFBSSxFQUFFLEVBQXJCO0FBQXlCLHFCQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE8sZUFJUDtBQUFBLGlDQUNBO0FBQUcscUJBQVMsRUFBQywwQ0FBYjtBQUFBLHNCQUF5REE7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKLEVBd0NLRSxjQUFjLGlCQUFLO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsNkJBQ2hCO0FBQUEsK0JBQ0E7QUFBRyxtQkFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEN4QixlQWtESTtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQVMsRUFBQywwREFBOUI7QUFBQSxrQkFDSyxDQUFDRixLQUFELElBQVU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStESCxDQS9FRDs7R0FBTUwscUI7O0tBQUFBLHFCO0FBaUZOLCtEQUFlQSxxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1ZGU4ZmU4Y2ExZDkzNmU1MWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cblxuY29uc3QgQXV0aE5vdGlmaWNhdGlvbk1vZGFsID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmcgPSBjdHguaXNMb2FkaW5nO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJpc0xvYWRpbmdcIiwgaXNMb2FkaW5nKTtcblxuICAgIGNvbnN0IGVycm9yID0gY3R4LmVycm9yO1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjdHguc3VjY2VzcztcbiAgICBjb25zdCBpc0xvc3RQYXNzd29yZCA9IGN0eC5pc0xvc3RQYXNzd29yZDtcblxuICAgIC8vICBjb25zb2xlLmxvZyhcIkF1dGhOb3RpZmljYXRpb25Nb2RhbEVycm9yXCIsIGVycm9yKVxuICAgIC8vICBjb25zb2xlLmxvZyhcIkF1dGhOb3RpZmljYXRpb25Nb2RhbFN1Y2Nlc3NcIiwgc3VjY2VzcyAgKVxuICAgIC8vICBjb25zb2xlLmxvZyhcImlzTG9zdFBhc3N3b3JkXCIsIGlzTG9zdFBhc3N3b3JkKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHBiLTQgc3BhY2UteS02IGxnOnB4LTggc206cGItNiB4bDpwYi04XCIgPlxuXG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+U3RhdHVzPC9oMz5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKDxzdmcgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cImlubGluZSBtci0yIHctOCBoLTggdGV4dC1ncmF5LTIwMCBhbmltYXRlLXNwaW4gZGFyazp0ZXh0LWdyYXktNjAwIGZpbGwtYmx1ZS02MDBcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDAgNTAuNTkwOEMxMDAgNzguMjA1MSA3Ny42MTQyIDEwMC41OTEgNTAgMTAwLjU5MUMyMi4zODU4IDEwMC41OTEgMCA3OC4yMDUxIDAgNTAuNTkwOEMwIDIyLjk3NjYgMjIuMzg1OCAwLjU5MDgyIDUwIDAuNTkwODJDNzcuNjE0MiAwLjU5MDgyIDEwMCAyMi45NzY2IDEwMCA1MC41OTA4Wk05LjA4MTQ0IDUwLjU5MDhDOS4wODE0NCA3My4xODk1IDI3LjQwMTMgOTEuNTA5NCA1MCA5MS41MDk0QzcyLjU5ODcgOTEuNTA5NCA5MC45MTg2IDczLjE4OTUgOTAuOTE4NiA1MC41OTA4QzkwLjkxODYgMjcuOTkyMSA3Mi41OTg3IDkuNjcyMjYgNTAgOS42NzIyNkMyNy40MDEzIDkuNjcyMjYgOS4wODE0NCAyNy45OTIxIDkuMDgxNDQgNTAuNTkwOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIiBmaWxsPVwiY3VycmVudEZpbGxcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPil9XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICAmJiAgKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGUgIHNpemU9ezUwfSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBmbGV4IGp1c3RpZnktY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvc3RQYXNzd29yZCA/IFwiUGFzc3dvcmQgcmVzZXQgbGluayBzZW50IHRvIHlvdXIgZW1haWxcIjogXCJTdWNjZXNzXCJ9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAge2Vycm9yICYmICg8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZSBzaXplPXs1MH0gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTYgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS01MDBcIj57ZXJyb3IgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNMb3N0UGFzc3dvcmQgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj4pfVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7IWVycm9yICYmIFwiIEdvIGJhY2sgdG8gc2l0ZVwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhOb3RpZmljYXRpb25Nb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==