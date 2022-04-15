self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modalContent.js":
/*!************************************!*\
  !*** ./components/modalContent.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _loginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginForm */ "./components/loginForm.js");
/* harmony import */ var _authNotificationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authNotificationModal */ "./components/authNotificationModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/modalContent.js",
    _this = undefined,
    _s = $RefreshSig$();








var ModalContent = function ModalContent(_ref) {
  _s();

  var onClose = _ref.onClose;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default); // console.log("ctx", ctx.loginUser);

  var handleCloseClick = function handleCloseClick(e) {
    e.preventDefault();
    ctx.setModalOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "authentication-modal",
      "aria-hidden": "true",
      className: " flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-50 ",
      onClick: handleCloseClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-end p-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
              "data-modal-toggle": "authentication-modal",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: handleCloseClick,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 160
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this), ctx.isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authNotificationModal__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 43
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loginForm__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 70
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ModalContent, "/dMy7t63NXD4eYACoT93CePwGrg=");

_c = ModalContent;
/* harmony default export */ __webpack_exports__["default"] = (ModalContent);

var _c;

$RefreshReg$(_c, "ModalContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbENvbnRlbnQuanMiXSwibmFtZXMiOlsiTW9kYWxDb250ZW50Iiwib25DbG9zZSIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImhhbmRsZUNsb3NlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRNb2RhbE9wZW4iLCJpc0xvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUVsQyxNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCLENBRmtDLENBR2xDOztBQUdBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUwsT0FBRyxDQUFDTSxZQUFKLENBQWlCLEtBQWpCO0FBQ0gsR0FIRDs7QUFNQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssUUFBRSxFQUFDLHNCQUFSO0FBQWdDLHFCQUFZLE1BQTVDO0FBQW1ELGVBQVMsRUFBQyxpS0FBN0Q7QUFBK04sYUFBTyxFQUFFSCxnQkFBeE87QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsK0NBQWY7QUFBQSwrQkFFSTtBQUFLLG1CQUFTLEVBQUMsc0RBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQix1QkFBUyxFQUFDLDJLQUFoQztBQUE0TSxtQ0FBa0Isc0JBQTlOO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBeUIsb0JBQUksRUFBQyxjQUE5QjtBQUE2Qyx1QkFBTyxFQUFDLFdBQXJEO0FBQWlFLHFCQUFLLEVBQUMsNEJBQXZFO0FBQW9HLHVCQUFPLEVBQUVBLGdCQUE3RztBQUFBLHVDQUErSDtBQUFNLCtCQUFVLFNBQWhCO0FBQTBCLG1CQUFDLEVBQUMsb01BQTVCO0FBQWlPLCtCQUFVO0FBQTNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBTU1ILEdBQUcsQ0FBQ08sU0FBSixnQkFBZ0IsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaEIsZ0JBQTJDLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTmpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFrQkgsQ0E5QkQ7O0dBQU1ULFk7O0tBQUFBLFk7QUFnQ04sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJmMTA1M2RhNGQyMDJhNDI3YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luRm9ybSc7XG5pbXBvcnQgQXV0aE5vdGlmaWNhdGlvbk1vZGFsIGZyb20gJy4vYXV0aE5vdGlmaWNhdGlvbk1vZGFsJztcblxuY29uc3QgTW9kYWxDb250ZW50ID0gKHsgb25DbG9zZSB9KSA9PiB7XG5cbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImN0eFwiLCBjdHgubG9naW5Vc2VyKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjdHguc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBpZD1cImF1dGhlbnRpY2F0aW9uLW1vZGFsXCIgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy15LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4gZml4ZWQgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgei01MCB3LWZ1bGwgbWQ6aW5zZXQtMCBoLW1vZGFsIG1kOmgtZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC00IHctZnVsbCBtYXgtdy1tZCBoLWZ1bGwgbWQ6aC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgcm91bmRlZC1sZyB0ZXh0LXNtIHAtMS41IG1sLWF1dG8gaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGRhcms6aG92ZXI6YmctZ3JheS04MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCIgZGF0YS1tb2RhbC10b2dnbGU9XCJhdXRoZW50aWNhdGlvbi1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNsaWNrfT48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjdHguaXNMb2FkaW5nID8gPEF1dGhOb3RpZmljYXRpb25Nb2RhbC8+IDogPExvZ2luRm9ybSAvPn1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ29udGVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==