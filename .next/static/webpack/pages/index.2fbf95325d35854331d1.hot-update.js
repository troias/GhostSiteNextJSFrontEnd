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
/* harmony import */ var _context_scrollContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/scrollContext */ "./context/scrollContext.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _components_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/portal */ "./components/portal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/nav.js",
    _this = undefined,
    _s = $RefreshSig$();










var Nav = function Nav(_ref) {
  _s();

  var categories = _ref.categories,
      showModal = _ref.showModal;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_3__.ScrollContext);
  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  console.log("ctxUser", authCtx.user);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {// console.log("navAboutRef", ctx.aboutRef);
  }

  console.log("contactRef", ctx.contactRef);

  var scrollToRef = function scrollToRef(ref) {
    return window.scrollTo(0, ref.current.offsetTop);
  };

  var handleAboutClick = function handleAboutClick() {
    return scrollToRef(ctx.aboutRef);
  };

  var handleContactClick = function handleContactClick() {
    return scrollToRef(ctx.contactRef);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              lineNumber: 47,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "TheNobodies"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-navbar-right  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav hidden sm:flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "smoothscroll",
              onClick: handleAboutClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "#About",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "smoothscroll",
              onClick: handleContactClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "#contact",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
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
                          lineNumber: 82,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 25
                      }, _this)
                    }, category.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "flex items-center",
              children: [!authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.setModalOpen(true);
                },
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 31
              }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.logOutUser();
                },
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Nav, "7m/gP1UydX1YdCf+mp4C5XxnhOQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInNob3dNb2RhbCIsImN0eCIsInVzZUNvbnRleHQiLCJTY3JvbGxDb250ZXh0IiwiYXV0aEN0eCIsIkF1dGhDb250ZXh0IiwidXNlU3RhdGUiLCJpc0Jyb3dzZXIiLCJzZXRJc0Jyb3dzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZUVmZmVjdCIsImNvbnRhY3RSZWYiLCJzY3JvbGxUb1JlZiIsInJlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImhhbmRsZUFib3V0Q2xpY2siLCJhYm91dFJlZiIsImhhbmRsZUNvbnRhY3RDbGljayIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJuYW1lIiwiaWQiLCJzZXRNb2RhbE9wZW4iLCJsb2dPdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBRXpDLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLGlEQUFVLENBQUNHLDZEQUFELENBQTFCOztBQUh5QyxrQkFJUEMsK0NBQVEsQ0FBQyxLQUFELENBSkQ7QUFBQSxNQUlsQ0MsU0FKa0M7QUFBQSxNQUl2QkMsWUFKdUI7O0FBTzFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTixPQUFPLENBQUNPLElBQS9CO0FBRUNDLGtEQUFTLENBQUMsWUFBTTtBQUNkSixnQkFBWSxDQUFDLElBQUQsQ0FBWjtB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBcUJFO0FBQUksdUJBQVMsRUFBQyxtQkFBZDtBQUFBLHlCQUNDLENBQUN4QixPQUFPLENBQUNPLElBQVQsaUJBQWlCO0FBQVEseUJBQU0sbURBQWQ7QUFDbEIsdUJBQU8sRUFBRTtBQUFBLHlCQUFNUCxPQUFPLENBQUN5QixZQUFSLENBQXFCLElBQXJCLENBQU47QUFBQSxpQkFEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEbEIsRUFLQXpCLE9BQU8sQ0FBQ08sSUFBUixpQkFBaUI7QUFBUSx5QkFBTSxtREFBZDtBQUNqQix1QkFBTyxFQUFFO0FBQUEseUJBQU1QLE9BQU8sQ0FBQzBCLFVBQVIsRUFBTjtBQUFBLGlCQURRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQXlFRCxDQXhHRDs7R0FBTWhDLEc7O0tBQUFBLEc7QUEwR04sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmZiZjk1MzI1ZDM1ODU0MzMxZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Njcm9sbENvbnRleHRcIlxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIHNob3dNb2RhbCB9KSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiBjb25zb2xlLmxvZyhcImN0eFVzZXJcIiwgYXV0aEN0eC51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQnJvd3Nlcih0cnVlKTtcblxuICAgXG4gIH0sIFtdKVxuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hdkFib3V0UmVmXCIsIGN0eC5hYm91dFJlZik7XG4gIFxuXG5cbiAgfSBcbiAgY29uc29sZS5sb2coXCJjb250YWN0UmVmXCIsIGN0eC5jb250YWN0UmVmKVxuXG4gIFxuXG4gIGNvbnN0IHNjcm9sbFRvUmVmID0gKHJlZikgPT4gd2luZG93LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcClcbiAgY29uc3QgaGFuZGxlQWJvdXRDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5hYm91dFJlZilcbiAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4gc2Nyb2xsVG9SZWYoY3R4LmNvbnRhY3RSZWYpXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyIGZsZXggcGwtMTAgcHItNFwiIGRhdGEtdWstbmF2YmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj48L3VsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMFwiID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5UaGVOb2JvZGllczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgIFwiPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgaGlkZGVuIHNtOmZsZXhcIj5cblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtb290aHNjcm9sbFwiIG9uQ2xpY2s9e2hhbmRsZUFib3V0Q2xpY2t9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI0Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtb290aHNjcm9sbFwiIG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RDbGlja30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXYgdWstbmF2YmFyLWRyb3Bkb3duLW5hdlwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJwbC0yIHByLTJcIiA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHshYXV0aEN0eC51c2VyICYmIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGF1dGhDdHguc2V0TW9kYWxPcGVuKHRydWUpIH0+TG9naW48L2J1dHRvbj59XG5cblxuICAgICAgICAgIHsgYXV0aEN0eC51c2VyICYmICA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhdXRoQ3R4LmxvZ091dFVzZXIoKX0+TG9nb3V0PC9idXR0b24+fVxuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uYXY+XG4gICBcbiAgICA8L2Rpdj5cblxuICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=