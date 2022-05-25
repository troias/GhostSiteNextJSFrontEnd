self["webpackHotUpdate_N_E"]("pages/investigation/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoTm90aWZpY2F0aW9uTW9kYWwuanMiXSwibmFtZXMiOlsiQXV0aE5vdGlmaWNhdGlvbk1vZGFsIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiaXNMb3N0UGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUFBOztBQUVoQyxNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBRUEsTUFBTUMsU0FBUyxHQUFHSCxHQUFHLENBQUNHLFNBQXRCLENBSmdDLENBTWhDOztBQUVBLE1BQU1DLEtBQUssR0FBR0osR0FBRyxDQUFDSSxLQUFsQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0wsR0FBRyxDQUFDSyxPQUFwQjtBQUNBLE1BQU1DLGNBQWMsR0FBR04sR0FBRyxDQUFDTSxjQUEzQixDQVZnQyxDQVloQztBQUNBO0FBQ0E7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQSw0QkFHSTtBQUFJLGVBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBTUk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSxnQkFFS0gsU0FBUyxpQkFBSztBQUFLLFlBQUksRUFBQyxRQUFWO0FBQW1CLGlCQUFTLEVBQUMsaUZBQTdCO0FBQStHLGVBQU8sRUFBQyxhQUF2SDtBQUFxSSxZQUFJLEVBQUMsTUFBMUk7QUFBaUosYUFBSyxFQUFDLDRCQUF2SjtBQUFBLGdDQUNYO0FBQU0sV0FBQyxFQUFDLDhXQUFSO0FBQXVYLGNBQUksRUFBQztBQUE1WDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBRVg7QUFBTSxXQUFDLEVBQUMsK2tCQUFSO0FBQXdsQixjQUFJLEVBQUM7QUFBN2xCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQWdCSTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLGlCQUNLRSxPQUFPLGlCQUFPO0FBQUEsZ0NBQ1g7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZ0IsZ0JBQUksRUFBRSxFQUF0QjtBQUEwQixxQkFBUyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXLGVBSVg7QUFBQSxpQ0FDQTtBQUFHLHFCQUFTLEVBQUMsMENBQWI7QUFBQSxzQkFDS0MsY0FBYyxHQUFHLHdDQUFILEdBQTZDO0FBRGhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURuQixFQWFLRixLQUFLLGlCQUFLO0FBQUEsZ0NBQ1A7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0ksOERBQUMseURBQUQ7QUFBZSxnQkFBSSxFQUFFLEVBQXJCO0FBQXlCLHFCQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE8sZUFJUDtBQUFBLGlDQUNBO0FBQUcscUJBQVMsRUFBQywwQ0FBYjtBQUFBLHNCQUF5REE7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKLEVBd0NLRSxjQUFjLGlCQUFLO0FBQUssZUFBUyxFQUFDLHFCQUFmO0FBQUEsNkJBQ2hCO0FBQUEsK0JBQ0E7QUFBRyxtQkFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEN4QixlQWtESTtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQVMsRUFBQywwREFBOUI7QUFBQSxrQkFDSyxDQUFDRixLQUFELElBQVU7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQStESCxDQS9FRDs7R0FBTUwscUI7O0tBQUFBLHFCO0FBaUZOLCtEQUFlQSxxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbnZlc3RpZ2F0aW9uL1tzbHVnXS4xNWRlOGZlOGNhMWQ5MzZlNTFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGhDb250ZXh0J1xuaW1wb3J0IHsgQnNDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG5cbmNvbnN0IEF1dGhOb3RpZmljYXRpb25Nb2RhbCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gY3R4LmlzTG9hZGluZztcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXNMb2FkaW5nXCIsIGlzTG9hZGluZyk7XG5cbiAgICBjb25zdCBlcnJvciA9IGN0eC5lcnJvcjtcbiAgICBjb25zdCBzdWNjZXNzID0gY3R4LnN1Y2Nlc3M7XG4gICAgY29uc3QgaXNMb3N0UGFzc3dvcmQgPSBjdHguaXNMb3N0UGFzc3dvcmQ7XG5cbiAgICAvLyAgY29uc29sZS5sb2coXCJBdXRoTm90aWZpY2F0aW9uTW9kYWxFcnJvclwiLCBlcnJvcilcbiAgICAvLyAgY29uc29sZS5sb2coXCJBdXRoTm90aWZpY2F0aW9uTW9kYWxTdWNjZXNzXCIsIHN1Y2Nlc3MgIClcbiAgICAvLyAgY29uc29sZS5sb2coXCJpc0xvc3RQYXNzd29yZFwiLCBpc0xvc3RQYXNzd29yZClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiID5cblxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlN0YXR1czwvaDM+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmICg8c3ZnIHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJpbmxpbmUgbXItMiB3LTggaC04IHRleHQtZ3JheS0yMDAgYW5pbWF0ZS1zcGluIGRhcms6dGV4dC1ncmF5LTYwMCBmaWxsLWJsdWUtNjAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz4pfVxuXG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAgJiYgICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlICBzaXplPXs1MH0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgZmxleCBqdXN0aWZ5LWNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNMb3N0UGFzc3dvcmQgPyBcIlBhc3N3b3JkIHJlc2V0IGxpbmsgc2VudCB0byB5b3VyIGVtYWlsXCI6IFwiU3VjY2Vzc1wifVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiAoPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGUgc2l6ZT17NTB9IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtYi02IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+e2Vycm9yIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzTG9zdFBhc3N3b3JkICYmICg8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+KX1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFlcnJvciAmJiBcIiBHbyBiYWNrIHRvIHNpdGVcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoTm90aWZpY2F0aW9uTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=