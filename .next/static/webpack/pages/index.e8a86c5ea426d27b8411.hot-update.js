self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/nav.js",
    _this = undefined,
    _s = $RefreshSig$();





var Nav = function Nav(_ref) {
  _s();

  var categories = _ref.categories;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var toggleModal = function toggleModal() {
    setModal(!modal);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "uk-navbar-container flex pl-10 pr-4",
        "data-uk-navbar": true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-navbar-left",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "uk-nav uk-navbar-dropdown-nav"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "TheNobodies"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-navbar-right  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav hidden sm:flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/about",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "Contact"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "uk-navbar-dropdown",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "uk-nav uk-navbar-dropdown-nav",
                  children: categories.map(function (category) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      className: "pl-2 pr-2",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/category/".concat(category.attributes.slug),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "uk-link-reset",
                          children: category.attributes.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, _this)
                    }, category.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "flex items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "uk-toggle": "target: #my-id",
                type: "button",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "my-id",
      "uk-modal": true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "uk-modal-dialog uk-modal-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          "class": "uk-modal-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 10
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "class": "uk-modal-close",
          type: "button",
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 10
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 8
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }, _this)]
  }, void 0, true);
};

_s(Nav, "FxRBWQPa/dKnwvdbY5qed8chvVc=");

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZU1vZGFsIiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsa0JBRUpDLCtDQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFdkJDLEtBRnVCO0FBQUEsTUFFaEJDLFFBRmdCOztBQUk5QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRCxZQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNBO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQXFELDhCQUFyRDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxnQkFBZDtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUMsS0FBZDtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxHQUFYO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBRUU7QUFBSSxxQkFBUyxFQUFDLDhCQUFkO0FBQUEsb0NBRUU7QUFBSSx1QkFBUyxFQUFDLEVBQWQ7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsUUFBWDtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFPRTtBQUFJLHVCQUFTLEVBQUMsRUFBZDtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxVQUFYO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFnQkU7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsdUNBQ0U7QUFBSSwyQkFBUyxFQUFDLCtCQUFkO0FBQUEsNEJBQ0dGLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUM1Qix3Q0FDRTtBQUFzQiwrQkFBUyxFQUFDLFdBQWhDO0FBQUEsNkNBR0UsOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxzQkFBZUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxJQUFuQyxDQUFWO0FBQUEsK0NBQ0U7QUFBRyxtQ0FBUyxFQUFDLGVBQWI7QUFBQSxvQ0FBOEJGLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRix1QkFBU0gsUUFBUSxDQUFDSSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBVUQsbUJBWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFxQkU7QUFBSSx1QkFBUyxFQUFDLG1CQUFkO0FBQUEscUNBRUk7QUFBUSw2QkFBVSxnQkFBbEI7QUFBbUMsb0JBQUksRUFBQyxRQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQWdFRztBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQWdCLHNCQUFoQjtBQUFBLDZCQUNBO0FBQUssaUJBQU0sK0JBQVg7QUFBQSxnQ0FDRTtBQUFJLG1CQUFNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQVEsbUJBQU0sZ0JBQWQ7QUFBK0IsY0FBSSxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoRUg7QUFBQSxrQkFERjtBQXlFRCxDQWpGRDs7R0FBTVgsRzs7S0FBQUEsRztBQW1GTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOGE4NmM1ZWE0MjZkMjdiODQxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoIW1vZGFsKVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciBmbGV4IHBsLTEwIHByLTRcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdiB1ay1uYXZiYXItZHJvcGRvd24tbmF2XCI+PC91bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5UaGVOb2JvZGllczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgIFwiPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgaGlkZGVuIHNtOmZsZXhcIj5cblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwicGwtMiBwci0yXCIgPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHVrLXRvZ2dsZT1cInRhcmdldDogI215LWlkXCIgdHlwZT1cImJ1dHRvblwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uYXY+XG4gICBcbiAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGlkPVwibXktaWRcIiB1ay1tb2RhbD5cbiAgICAgICA8ZGl2IGNsYXNzPVwidWstbW9kYWwtZGlhbG9nIHVrLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgIDxoMiBjbGFzcz1cInVrLW1vZGFsLXRpdGxlXCI+PC9oMj5cbiAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1ay1tb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9