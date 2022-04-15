self["webpackHotUpdate_N_E"]("pages/index",{

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
  var isLoading = ctx.isLoading;
  var error = ctx.error;
  var success = ctx.success;
  console.log("success", success);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: "Status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      role: "status",
      "class": "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 27
    }, _this) : success ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheckCircle, {
        className: "text-green-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm text-gray-900 dark:text-gray-500",
        children: "Your account has been created successfully"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 28
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheckCircle, {
        className: "text-red-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-sm text-gray-900 dark:text-gray-500",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 26
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "link",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        children: "Go back to site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoTm90aWZpY2F0aW9uTW9kYWwuanMiXSwibmFtZXMiOlsiQXV0aE5vdGlmaWNhdGlvbk1vZGFsIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQUE7O0FBRWhDLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFFQSxNQUFNQyxTQUFTLEdBQUdILEdBQUcsQ0FBQ0csU0FBdEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ksS0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLEdBQUcsQ0FBQ0ssT0FBcEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsT0FBdkI7QUFFQSxzQkFDSTtBQUFNLGFBQVMsRUFBQyw2Q0FBaEI7QUFBQSw0QkFHSTtBQUFJLGVBQVMsRUFBQyxtREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBS0tGLFNBQVMsZ0JBQUk7QUFBSyxVQUFJLEVBQUMsUUFBVjtBQUFtQixlQUFNLGlGQUF6QjtBQUEyRyxhQUFPLEVBQUMsYUFBbkg7QUFBaUksVUFBSSxFQUFDLE1BQXRJO0FBQTZJLFdBQUssRUFBQyw0QkFBbko7QUFBQSw4QkFDVjtBQUFNLFNBQUMsRUFBQyw4V0FBUjtBQUF1WCxZQUFJLEVBQUM7QUFBNVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVLGVBRVY7QUFBTSxTQUFDLEVBQUMsK2tCQUFSO0FBQXdsQixZQUFJLEVBQUM7QUFBN2xCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSixHQUlMRSxPQUFPLGdCQUFHO0FBQUEsOEJBQ1AsOERBQUMseURBQUQ7QUFBZSxpQkFBUyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxlQUVQO0FBQUcsaUJBQVMsRUFBQywwQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUdDO0FBQUEsOEJBQ0wsOERBQUMseURBQUQ7QUFBZSxpQkFBUyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxlQUVMO0FBQUcsaUJBQVMsRUFBQywwQ0FBYjtBQUFBLGtCQUF5REQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpqQixlQXNCSTtBQUFBLDZCQUlJO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsaUJBQVMsRUFBQywwREFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0NILENBaEREOztHQUFNTCxxQjs7S0FBQUEscUI7QUFrRE4sK0RBQWVBLHFCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3ODhkNmNlOTNhOTFiNzgwNTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cblxuY29uc3QgQXV0aE5vdGlmaWNhdGlvbk1vZGFsID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgICBjb25zdCBpc0xvYWRpbmcgPSBjdHguaXNMb2FkaW5nO1xuICAgIGNvbnN0IGVycm9yID0gY3R4LmVycm9yO1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBjdHguc3VjY2VzcztcblxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBzdWNjZXNzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiID5cblxuICAgICAgICAgICAgey8qIGlzIGxvYWRpbmcgdGhlbiBzcGluIHdoZW4gZG9uZSBzdWNjZXNzICovfVxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5TdGF0dXM8L2gzPlxuXG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKDxzdmcgcm9sZT1cInN0YXR1c1wiIGNsYXNzPVwiaW5saW5lIG1yLTIgdy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBkYXJrOnRleHQtZ3JheS02MDAgZmlsbC1ibHVlLTYwMFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIiBmaWxsPVwiY3VycmVudEZpbGxcIiAvPlxuICAgICAgICAgICAgPC9zdmc+KSA6XG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3MgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS01MDBcIj5Zb3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHk8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPntlcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICA8ZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBHbyBiYWNrIHRvIHNpdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aE5vdGlmaWNhdGlvbk1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9