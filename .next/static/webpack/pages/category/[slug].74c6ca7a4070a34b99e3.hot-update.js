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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiY29uc29sZSIsImxvZyIsIm1vZGFsT3BlbiIsInVzZUVmZmVjdCIsIm1vZGFsQ29udGVudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxPQUErQixRQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRXBEO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0Qjs7QUFKb0Qsa0JBS2xCQywrQ0FBUSxDQUFDLEtBQUQsQ0FMVTtBQUFBLE1BSzdDQyxTQUw2QztBQUFBLE1BS2xDQyxZQUxrQzs7QUFPbkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJQLEdBQUcsQ0FBQ1EsU0FBN0I7QUFHREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQU9BLE1BQU1LLFlBQVksR0FBR1YsR0FBRyxDQUFDUSxTQUFKLGdCQUFnQiw4REFBQyxrREFBRDtBQUFjLFdBQU8sRUFBRVg7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFoQixHQUFvRCxJQUF6RTs7QUFFQSxNQUFJTyxTQUFKLEVBQWU7QUFDYix3QkFBT08sNkRBQUEsQ0FBc0JELFlBQXRCLEVBRUxFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUZLLENBQVA7QUFJRCxHQUxELE1BS087QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBM0JEOztHQUFNbEIsSzs7S0FBQUEsSztBQTZCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uNzRjNmNhN2E0MDcwYTM0Yjk5ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgTW9kYWxDb250ZW50IGZyb20gJy4vbW9kYWxDb250ZW50JztcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGhDb250ZXh0JztcblxuXG5cbmNvbnN0IE1vZGFsID0gKHsgc2hvdywgb25DbG9zZSwgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcblxuICAvLyBjb25zb2xlLmxvZyhcInNob3dNb2RhbENvbXBcIiwgc2hvdyk7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnNvbGUubG9nKFwibW9kYWxPcGVuXCIsIGN0eC5tb2RhbE9wZW4pXG4gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuXG5cblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBjdHgubW9kYWxPcGVuID8gPE1vZGFsQ29udGVudCBvbkNsb3NlPXtvbkNsb3NlfS8+IDogbnVsbDtcblxuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChtb2RhbENvbnRlbnRcbiAgICAgICxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlwb3J0YWxcIilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9