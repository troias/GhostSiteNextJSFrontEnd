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
  console.log("showModalComp", show);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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


  var modalContent = show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "my-id",
      "uk-modal": true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "uk-modal-dialog uk-modal-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          "class": "uk-modal-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "class": "uk-modal-close",
          type: "button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this)
  }, void 0, false) : null;

  if (isBrowser) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById("myportal"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImlzQnJvd3NlciIsInNldElzQnJvd3NlciIsInVzZUVmZmVjdCIsImhhbmRsZUNsb3NlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbENvbnRlbnQiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0M7QUFBQTs7QUFBQSxNQUFyQ0MsSUFBcUMsUUFBckNBLElBQXFDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFcERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJMLElBQTdCOztBQUZvRCxrQkFJbEJNLCtDQUFRLENBQUMsS0FBRCxDQUpVO0FBQUEsTUFJN0NDLFNBSjZDO0FBQUEsTUFJbENDLFlBSmtDOztBQU1wREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FYLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUhELENBVm9ELENBZ0JwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNWSxZQUFZLEdBQUdiLElBQUksZ0JBQUk7QUFBQSwyQkFDM0I7QUFBSyxRQUFFLEVBQUMsT0FBUjtBQUFnQixzQkFBaEI7QUFBQSw2QkFDQTtBQUFLLGlCQUFNLCtCQUFYO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFRLG1CQUFNLGdCQUFkO0FBQStCLGNBQUksRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMkIsbUJBQUosR0FPcEIsSUFQTDs7QUFTQSxNQUFJTyxTQUFKLEVBQWU7QUFDYix3QkFBT08sNkRBQUEsQ0FBc0JELFlBQXRCLEVBRUxFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUZLLENBQVA7QUFJRCxHQUxELE1BS087QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBN0NEOztHQUFNakIsSzs7S0FBQUEsSztBQStDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjIwN2Y0NjljZWVlYjE3NjcyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuXG5jb25zdCBNb2RhbCA9ICh7IHNob3csIG9uQ2xvc2UsIGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG5cbiAgY29uc29sZS5sb2coXCJzaG93TW9kYWxDb21wXCIsIHNob3cpO1xuXG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBvbkNsb3NlKGZhbHNlKTtcbiAgfTtcblxuXG4gIC8vIGNvbnN0IG1vZGFsQ29udGVudCA9IHNob3cgPyAoPD5cbiAgLy8gICA8ZGl2IGlkPVwib3ZlcmxheVwiIGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIFwiPlxuICAvLyAgICAgPGRpdiBpZD1cInN0eWxlZG1vZGFsXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1bNTAwcHhdIGgtWzUwMHB4XSByb3VuZGVkLTN4bCBwLTRcIj5cbiAgLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPlRpdGxlPC9oMj5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgLy8gICAgICAgICA8cD5Mb3JlbSBpcHN1bTwvcD5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUNsaWNrfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdHlwZT1cImJ1dHRvblwiPmNsb3NlPC9idXR0b24+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gPC8+KSA6IG51bGw7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gc2hvdyA/ICg8PlxuICAgIDxkaXYgaWQ9XCJteS1pZFwiIHVrLW1vZGFsPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay1tb2RhbC1kaWFsb2cgdWstbW9kYWwtYm9keVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJ1ay1tb2RhbC10aXRsZVwiPjwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ1ay1tb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC8+KSA6IG51bGw7XG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwobW9kYWxDb250ZW50XG4gICAgICAsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15cG9ydGFsXCIpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==