self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modalContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalContent */ "./components/modalContent.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/modal.js",
    _this = undefined,
    _s = $RefreshSig$();






var Modal = function Modal(_ref) {
  _s();

  var onClose = _ref.onClose;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  console.log("modalOpen", ctx.modalOpen);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsBrowser(true);
  }, []);
  var modalContent = ctx.modalOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalContent__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClose: onClose
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 40
  }, _this) : null;

  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById("myportal"));
  } else {
    return null;
  }
};

_s(Modal, "2TYiff+BO5+3foCTnDB/rQWEBT0=");

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsIm9uQ2xvc2UiLCJjdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VTdGF0ZSIsImlzQnJvd3NlciIsInNldElzQnJvd3NlciIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbE9wZW4iLCJ1c2VFZmZlY3QiLCJtb2RhbENvbnRlbnQiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUk3QixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCOztBQUo2QixrQkFLS0MsK0NBQVEsQ0FBQyxLQUFELENBTGI7QUFBQSxNQUt0QkMsU0FMc0I7QUFBQSxNQUtYQyxZQUxXOztBQU81QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsR0FBRyxDQUFDUSxTQUE3QjtBQUdEQyxrREFBUyxDQUFDLFlBQU07QUFDZEosZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBT0EsTUFBTUssWUFBWSxHQUFHVixHQUFHLENBQUNRLFNBQUosZ0JBQWdCLDhEQUFDLGtEQUFEO0FBQWMsV0FBTyxFQUFFVDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWhCLEdBQW9ELElBQXpFOztBQUVBLE1BQUlLLFNBQUosRUFBZTtBQUNiLHdCQUFPTyw2REFBQSxDQUFzQkQsWUFBdEIsRUFFTEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBRkssQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0EzQkQ7O0dBQU1mLEs7O0tBQUFBLEs7QUE2Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLjYzY2IwMzVmODA1NWRmYmFlM2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IE1vZGFsQ29udGVudCBmcm9tICcuL21vZGFsQ29udGVudCc7XG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5cblxuXG5jb25zdCBNb2RhbCA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xuXG4gIFxuXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zb2xlLmxvZyhcIm1vZGFsT3BlblwiLCBjdHgubW9kYWxPcGVuKVxuIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNCcm93c2VyKHRydWUpO1xuICB9LCBbXSk7XG5cblxuXG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gY3R4Lm1vZGFsT3BlbiA/IDxNb2RhbENvbnRlbnQgb25DbG9zZT17b25DbG9zZX0vPiA6IG51bGw7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwobW9kYWxDb250ZW50XG4gICAgICAsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15cG9ydGFsXCIpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==