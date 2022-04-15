self["webpackHotUpdate_N_E"]("pages/index",{

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

  var show = _ref.show,
      onClose = _ref.onClose,
      children = _ref.children,
      title = _ref.title;
  // console.log("showModalComp", show);
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  console.log("modalOpen", ctx.modalOpen);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsBrowser(true);
  }, []);
  var modalContent = ctx.modalOpen ? ctx.modalOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalContent__WEBPACK_IMPORTED_MODULE_3__.default, {
    onClose: onClose
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 58
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiY29uc29sZSIsImxvZyIsIm1vZGFsT3BlbiIsInVzZUVmZmVjdCIsIm1vZGFsQ29udGVudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxPQUErQixRQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRXBEO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0Qjs7QUFKb0Qsa0JBS2xCQywrQ0FBUSxDQUFDLEtBQUQsQ0FMVTtBQUFBLE1BSzdDQyxTQUw2QztBQUFBLE1BS2xDQyxZQUxrQzs7QUFPbkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJQLEdBQUcsQ0FBQ1EsU0FBN0I7QUFHREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQU9BLE1BQU1LLFlBQVksR0FBR1YsR0FBRyxDQUFDUSxTQUFKLEdBQWlCUixHQUFHLENBQUNRLFNBQUosaUJBQWlCLDhEQUFDLGtEQUFEO0FBQWMsV0FBTyxFQUFFWDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWxDLEdBQXVFLElBQTVGOztBQUVBLE1BQUlPLFNBQUosRUFBZTtBQUNiLHdCQUFPTyw2REFBQSxDQUFzQkQsWUFBdEIsRUFFTEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBRkssQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0EzQkQ7O0dBQU1sQixLOztLQUFBQSxLO0FBNkJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlMTQ0YThkOTJhNjg2OGU1YzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IE1vZGFsQ29udGVudCBmcm9tICcuL21vZGFsQ29udGVudCc7XG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5cblxuXG5jb25zdCBNb2RhbCA9ICh7IHNob3csIG9uQ2xvc2UsIGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG5cbiAgLy8gY29uc29sZS5sb2coXCJzaG93TW9kYWxDb21wXCIsIHNob3cpO1xuXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zb2xlLmxvZyhcIm1vZGFsT3BlblwiLCBjdHgubW9kYWxPcGVuKVxuIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNCcm93c2VyKHRydWUpO1xuICB9LCBbXSk7XG5cblxuXG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gY3R4Lm1vZGFsT3BlbiA/IChjdHgubW9kYWxPcGVuICYmIDxNb2RhbENvbnRlbnQgb25DbG9zZT17b25DbG9zZX0vPikgOiBudWxsO1xuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKG1vZGFsQ29udGVudFxuICAgICAgLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteXBvcnRhbFwiKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=