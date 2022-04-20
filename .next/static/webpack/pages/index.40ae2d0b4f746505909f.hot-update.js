self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/notification.js":
/*!************************************!*\
  !*** ./components/notification.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.module.css */ "./components/notification.module.css");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/notification.js",
    _s = $RefreshSig$();






function Notification(props) {
  _s();

  var title = props.title,
      message = props.message,
      status = props.status,
      submitting = props.submitting;
  console.log("notification status", props);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _document = _useState[0],
      set_document = _useState[1]; // const clickHandler = (e) => {
  //   if (e.target.className === classes.notification) {
  //     set_document(null)
  //   }
  // }


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return set_document(document);
  }, []);
  console.log("Notification(props)", props);
  var statusClasses = '';

  if (status === 'pending') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().pending);
  }

  if (status === 'success') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().success);
  }

  if (status === 'error') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().error);
  }

  if (submitting === false) {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().hidden);
  }

  var cssClasses = "".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().notification), " ").concat(statusClasses);
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: cssClasses,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 62
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 78
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 34
  }, this), document.getElementById("myportal"));
}

_s(Notification, "HNGMAY6ON/XoM3AjeyN6TJ3VzvM=");

_c = Notification;
/* harmony default export */ __webpack_exports__["default"] = (Notification);

var _c;

$RefreshReg$(_c, "Notification");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24uanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9uIiwicHJvcHMiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzdWJtaXR0aW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiX2RvY3VtZW50Iiwic2V0X2RvY3VtZW50IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJzdGF0dXNDbGFzc2VzIiwiY2xhc3NlcyIsImNzc0NsYXNzZXMiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUEsTUFDbkJDLEtBRG1CLEdBQ29CRCxLQURwQixDQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxPQURZLEdBQ29CRixLQURwQixDQUNaRSxPQURZO0FBQUEsTUFDSEMsTUFERyxHQUNvQkgsS0FEcEIsQ0FDSEcsTUFERztBQUFBLE1BQ0tDLFVBREwsR0FDb0JKLEtBRHBCLENBQ0tJLFVBREw7QUFHM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DTixLQUFuQzs7QUFIMkIsa0JBS09PLCtDQUFRLENBQUMsSUFBRCxDQUxmO0FBQUEsTUFLcEJDLFNBTG9CO0FBQUEsTUFLVEMsWUFMUyxpQkFPM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLGtEQUFTLENBQUM7QUFBQSxXQUFNRCxZQUFZLENBQUNFLFFBQUQsQ0FBbEI7QUFBQSxHQUFELEVBQStCLEVBQS9CLENBQVQ7QUFFQU4sU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNOLEtBQW5DO0FBRUEsTUFBSVksYUFBYSxHQUFHLEVBQXBCOztBQUVBLE1BQUlULE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCUyxpQkFBYSxHQUFHQyx5RUFBaEI7QUFDRDs7QUFFRCxNQUFJVixNQUFNLEtBQUssU0FBZixFQUEwQjtBQUN4QlMsaUJBQWEsR0FBR0MseUVBQWhCO0FBQ0Q7O0FBRUQsTUFBSVYsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEJTLGlCQUFhLEdBQUdDLHVFQUFoQjtBQUNEOztBQUVELE1BQUlULFVBQVUsS0FBSyxLQUFuQixFQUEwQjtBQUN4QlEsaUJBQWEsR0FBR0Msd0VBQWhCO0FBQ0Q7O0FBRUQsTUFBTUMsVUFBVSxhQUFNRCw4RUFBTixjQUE4QkQsYUFBOUIsQ0FBaEI7QUFFQSxzQkFBT0csNkRBQUEsZUFBd0I7QUFBSyxhQUFTLEVBQUVELFVBQWhCO0FBQUEsNEJBQTRCO0FBQUEsZ0JBQUtiO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE1QixlQUE0QztBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXhCLEVBQThGUyxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBOUYsQ0FBUDtBQUlEOztHQXpDUWpCLFk7O0tBQUFBLFk7QUEyQ1QsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBhZTJkMGI0Zjc0NjUwNTkwOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbihwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMsIHN1Ym1pdHRpbmcgfSA9IHByb3BzO1xuXG4gIGNvbnNvbGUubG9nKFwibm90aWZpY2F0aW9uIHN0YXR1c1wiLCBwcm9wcyk7XG5cbiAgY29uc3QgW19kb2N1bWVudCwgc2V0X2RvY3VtZW50XSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgLy8gICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBjbGFzc2VzLm5vdGlmaWNhdGlvbikge1xuICAvLyAgICAgc2V0X2RvY3VtZW50KG51bGwpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldF9kb2N1bWVudChkb2N1bWVudCksIFtdKVxuXG4gIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uKHByb3BzKVwiLCBwcm9wcylcblxuICBsZXQgc3RhdHVzQ2xhc3NlcyA9ICcnO1xuXG4gIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnBlbmRpbmc7XG4gIH1cblxuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xuICB9XG5cbiAgaWYgKHN1Ym1pdHRpbmcgPT09IGZhbHNlKSB7XG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuaGlkZGVuO1xuICB9XG5cbiAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKCggPGRpdiBjbGFzc05hbWU9e2Nzc0NsYXNzZXN9PjxoMj57dGl0bGV9PC9oMj48cD57bWVzc2FnZX08L3A+IDwvZGl2PiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlwb3J0YWxcIikgKVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==