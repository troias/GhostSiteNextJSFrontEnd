self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectDestructuringEmpty; }
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modalContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalContent */ "./components/modalContent.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/modal.js",
    _this = undefined,
    _s = $RefreshSig$();






var Modal = function Modal(_ref) {
  _s();

  (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_5__.default);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  console.log("modalOpen", ctx.modalOpen);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setIsBrowser(true);
  }, []);
  var modalContent = ctx.modalOpen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalContent__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 40
  }, _this) : null;

  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default().createPortal(modalContent, document.getElementById("myportal"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwic2V0SXNCcm93c2VyIiwiY29uc29sZSIsImxvZyIsIm1vZGFsT3BlbiIsInVzZUVmZmVjdCIsIm1vZGFsQ29udGVudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQVU7QUFBQTs7QUFBQTs7QUFJdEIsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0Qjs7QUFKc0Isa0JBS1lDLCtDQUFRLENBQUMsS0FBRCxDQUxwQjtBQUFBLE1BS2ZDLFNBTGU7QUFBQSxNQUtKQyxZQUxJOztBQU9yQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsR0FBRyxDQUFDUSxTQUE3QjtBQUdEQyxrREFBUyxDQUFDLFlBQU07QUFDZEosZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBT0EsTUFBTUssWUFBWSxHQUFHVixHQUFHLENBQUNRLFNBQUosZ0JBQWdCLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaEIsR0FBbUMsSUFBeEQ7O0FBRUEsTUFBSUosU0FBSixFQUFlO0FBQ2Isd0JBQU9PLDZEQUFBLENBQXNCRCxZQUF0QixFQUVMRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FGSyxDQUFQO0FBSUQsR0FMRCxNQUtPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQTNCRDs7R0FBTWQsSzs7S0FBQUEsSztBQTZCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZWM5MzFkNGM0MmFiZjMzMmE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IE1vZGFsQ29udGVudCBmcm9tICcuL21vZGFsQ29udGVudCc7XG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5cblxuXG5jb25zdCBNb2RhbCA9ICh7ICB9KSA9PiB7XG5cbiAgXG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnNvbGUubG9nKFwibW9kYWxPcGVuXCIsIGN0eC5tb2RhbE9wZW4pXG4gXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuXG5cblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSBjdHgubW9kYWxPcGVuID8gPE1vZGFsQ29udGVudCAvPiA6IG51bGw7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwobW9kYWxDb250ZW50XG4gICAgICAsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15cG9ydGFsXCIpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==