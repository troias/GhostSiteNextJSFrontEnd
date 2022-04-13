self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();




var Modal = function Modal(_ref) {
  _s();

  var show = _ref.show,
      onClose = _ref.onClose,
      children = _ref.children,
      title = _ref.title;
  console.log("showModalComp", show);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsBrowser(true);
  }, []);

  var handleCloseClick = function handleCloseClick(e) {
    e.preventDefault();
    onClose(false);
  }; // const modalContent = show ? (<>
  //   <div id="overlay" className=" absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
  //     <div id="styledmodal" className="bg-white w-[500px] h-[500px] rounded-3xl p-4">
  //       <h2 className="">Title</h2>
  //       <div className="">
  //         <p>Lorem ipsum</p>
  //         </div>
  //       <button onClick={handleCloseClick} className="text-black" type="button">close</button>
  //     </div>
  //   </div>
  // </>) : null;
  // const modalContent = show ? (<>
  //   <div id="modal-example" uk-modal>
  //     <div class="uk-modal-dialog uk-modal-body">
  //       <h2 class="uk-modal-title">Headline</h2>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  //       <p class="uk-text-right">
  //         <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
  //         <button class="uk-button uk-button-primary" type="button">Save</button>
  //       </p>
  //     </div>
  //   </div>
  // </>) : null;


  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(modalContent, document.getElementById("myportal"));
  } else {
    return null;
  }
};

_s(Modal, "pnrCiumIYbqf1FD6ZsJEw+RYujA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImlzQnJvd3NlciIsInNldElzQnJvd3NlciIsInVzZUVmZmVjdCIsImhhbmRsZUNsb3NlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJSZWFjdERPTSIsIm1vZGFsQ29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxJQUFxQyxRQUFyQ0EsSUFBcUM7QUFBQSxNQUEvQkMsT0FBK0IsUUFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUVwREMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkwsSUFBN0I7O0FBRm9ELGtCQUlsQk0sK0NBQVEsQ0FBQyxLQUFELENBSlU7QUFBQSxNQUk3Q0MsU0FKNkM7QUFBQSxNQUlsQ0MsWUFKa0M7O0FBTXBEQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVgsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBSEQsQ0FWb0QsQ0FnQnBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUlNLFNBQUosRUFBZTtBQUNiLHdCQUFPTSw2REFBQSxDQUFzQkMsWUFBdEIsRUFFTEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBRkssQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FqREQ7O0dBQU1qQixLOztLQUFBQSxLO0FBbUROLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjNWIwY2ZiNGM2YmY0YjVkNjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5cbmNvbnN0IE1vZGFsID0gKHsgc2hvdywgb25DbG9zZSwgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcblxuICBjb25zb2xlLmxvZyhcInNob3dNb2RhbENvbXBcIiwgc2hvdyk7XG5cbiAgY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQnJvd3Nlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG9uQ2xvc2UoZmFsc2UpO1xuICB9O1xuXG5cbiAgLy8gY29uc3QgbW9kYWxDb250ZW50ID0gc2hvdyA/ICg8PlxuICAvLyAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgY2xhc3NOYW1lPVwiIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgXCI+XG4gIC8vICAgICA8ZGl2IGlkPVwic3R5bGVkbW9kYWxcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LVs1MDBweF0gaC1bNTAwcHhdIHJvdW5kZWQtM3hsIHAtNFwiPlxuICAvLyAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+VGl0bGU8L2gyPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAvLyAgICAgICAgIDxwPkxvcmVtIGlwc3VtPC9wPlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQ2xpY2t9IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiB0eXBlPVwiYnV0dG9uXCI+Y2xvc2U8L2J1dHRvbj5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgIDwvZGl2PlxuICAvLyA8Lz4pIDogbnVsbDtcblxuICAvLyBjb25zdCBtb2RhbENvbnRlbnQgPSBzaG93ID8gKDw+XG4gIC8vICAgPGRpdiBpZD1cIm1vZGFsLWV4YW1wbGVcIiB1ay1tb2RhbD5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJ1ay1tb2RhbC1kaWFsb2cgdWstbW9kYWwtYm9keVwiPlxuICAvLyAgICAgICA8aDIgY2xhc3M9XCJ1ay1tb2RhbC10aXRsZVwiPkhlYWRsaW5lPC9oMj5cbiAgLy8gICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLjwvcD5cbiAgLy8gICAgICAgPHAgY2xhc3M9XCJ1ay10ZXh0LXJpZ2h0XCI+XG4gIC8vICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCB1ay1tb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgLy8gICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlNhdmU8L2J1dHRvbj5cbiAgLy8gICAgICAgPC9wPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvPikgOiBudWxsO1xuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKG1vZGFsQ29udGVudFxuICAgICAgLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteXBvcnRhbFwiKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=