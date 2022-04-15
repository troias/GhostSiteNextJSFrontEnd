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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiY29uc29sZSIsImxvZyIsIm1vZGFsT3BlbiIsInVzZUVmZmVjdCIsIm1vZGFsQ29udGVudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxPQUErQixRQUEvQkEsT0FBK0I7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRXBEO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0Qjs7QUFKb0Qsa0JBS2xCQywrQ0FBUSxDQUFDLEtBQUQsQ0FMVTtBQUFBLE1BSzdDQyxTQUw2QztBQUFBLE1BS2xDQyxZQUxrQzs7QUFPbkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJQLEdBQUcsQ0FBQ1EsU0FBN0I7QUFHREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQU9BLE1BQU1LLFlBQVksR0FBR1YsR0FBRyxDQUFDUSxTQUFKLEdBQWlCUixHQUFHLENBQUNRLFNBQUosaUJBQWlCLDhEQUFDLGtEQUFEO0FBQWMsV0FBTyxFQUFFWDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWxDLEdBQXVFLElBQTVGOztBQUVBLE1BQUlPLFNBQUosRUFBZTtBQUNiLHdCQUFPTyw2REFBQSxDQUFzQkQsWUFBdEIsRUFFTEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBRkssQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0EzQkQ7O0dBQU1sQixLOztLQUFBQSxLO0FBNkJOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS4xZTE0NGE4ZDkyYTY4NjhlNWMxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBNb2RhbENvbnRlbnQgZnJvbSAnLi9tb2RhbENvbnRlbnQnO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xuXG5cblxuY29uc3QgTW9kYWwgPSAoeyBzaG93LCBvbkNsb3NlLCBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKFwic2hvd01vZGFsQ29tcFwiLCBzaG93KTtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc29sZS5sb2coXCJtb2RhbE9wZW5cIiwgY3R4Lm1vZGFsT3BlbilcbiBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQnJvd3Nlcih0cnVlKTtcbiAgfSwgW10pO1xuXG5cblxuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGN0eC5tb2RhbE9wZW4gPyAoY3R4Lm1vZGFsT3BlbiAmJiA8TW9kYWxDb250ZW50IG9uQ2xvc2U9e29uQ2xvc2V9Lz4pIDogbnVsbDtcblxuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChtb2RhbENvbnRlbnRcbiAgICAgICxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlwb3J0YWxcIilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9