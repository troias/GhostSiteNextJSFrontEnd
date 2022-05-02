self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
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
              lineNumber: 48,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "TheNobodies"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
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
                lineNumber: 61,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "smoothscroll",
              onClick: handleContactClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "#contact",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
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
                          lineNumber: 83,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25
                      }, _this)
                    }, category.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
                lineNumber: 94,
                columnNumber: 31
              }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.logOutUser();
                },
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(Nav, "oi+KCa4PIaMuhcEHrY/6qTILdB4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInNob3dNb2RhbCIsImN0eCIsInVzZUNvbnRleHQiLCJTY3JvbGxDb250ZXh0IiwiYXV0aEN0eCIsIkF1dGhDb250ZXh0IiwidXNlU3RhdGUiLCJpc0Jyb3dzZXIiLCJzZXRJc0Jyb3dzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInVzZUVmZmVjdCIsImNvbnRhY3RSZWYiLCJzY3JvbGxUb1JlZiIsInJlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImhhbmRsZUFib3V0Q2xpY2siLCJhYm91dFJlZiIsImhhbmRsZUNvbnRhY3RDbGljayIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJuYW1lIiwiaWQiLCJzZXRNb2RhbE9wZW4iLCJsb2dPdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBRXpDLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLGlEQUFVLENBQUNHLDZEQUFELENBQTFCOztBQUh5QyxrQkFJUEMsK0NBQVEsQ0FBQyxLQUFELENBSkQ7QUFBQSxNQUlsQ0MsU0FKa0M7QUFBQSxNQUl2QkMsWUFKdUI7O0FBS3pDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFHREMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlIsT0FBTyxDQUFDUyxJ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QUFBO0FBQUEsNkJBREY7QUFVRCxtQkFYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQXFCRTtBQUFJLHVCQUFTLEVBQUMsbUJBQWQ7QUFBQSx5QkFDQyxDQUFDMUIsT0FBTyxDQUFDUyxJQUFULGlCQUFpQjtBQUFRLHlCQUFNLG1EQUFkO0FBQ2xCLHVCQUFPLEVBQUU7QUFBQSx5QkFBTVQsT0FBTyxDQUFDMkIsWUFBUixDQUFxQixJQUFyQixDQUFOO0FBQUEsaUJBRFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCLEVBS0EzQixPQUFPLENBQUNTLElBQVIsaUJBQWlCO0FBQVEseUJBQU0sbURBQWQ7QUFDakIsdUJBQU8sRUFBRTtBQUFBLHlCQUFNVCxPQUFPLENBQUM0QixVQUFSLEVBQU47QUFBQSxpQkFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUF5RUQsQ0F6R0Q7O0dBQU1sQyxHO1VBS1dZLGtEOzs7S0FMWFosRztBQTJHTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uMGYxZThkOThmMmY3M2EzODczMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Njcm9sbENvbnRleHRcIlxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIHNob3dNb2RhbCB9KSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gY29uc29sZS5sb2coXCJjdHhVc2VyXCIsIGF1dGhDdHgudXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG5cbiAgIFxuICB9LCBbXSlcblxuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJuYXZBYm91dFJlZlwiLCBjdHguYWJvdXRSZWYpO1xuICBcblxuXG4gIH0gXG4gIGNvbnNvbGUubG9nKFwiY29udGFjdFJlZlwiLCBjdHguY29udGFjdFJlZilcblxuICBcblxuICBjb25zdCBzY3JvbGxUb1JlZiA9IChyZWYpID0+IHdpbmRvdy5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3ApXG4gIGNvbnN0IGhhbmRsZUFib3V0Q2xpY2sgPSAoKSA9PiBzY3JvbGxUb1JlZihjdHguYWJvdXRSZWYpXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5jb250YWN0UmVmKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciBmbGV4IHBsLTEwIHByLTRcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdiB1ay1uYXZiYXItZHJvcGRvd24tbmF2XCI+PC91bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIiA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+VGhlTm9ib2RpZXM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLXJpZ2h0ICBcIj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IGhpZGRlbiBzbTpmbGV4XCI+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtoYW5kbGVBYm91dENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNBYm91dFwiPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtoYW5kbGVDb250YWN0Q2xpY2t9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwicGwtMiBwci0yXCIgPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7IWF1dGhDdHgudXNlciAmJiA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhdXRoQ3R4LnNldE1vZGFsT3Blbih0cnVlKSB9PkxvZ2luPC9idXR0b24+fVxuXG5cbiAgICAgICAgICB7IGF1dGhDdHgudXNlciAmJiAgPGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXV0aEN0eC5sb2dPdXRVc2VyKCl9PkxvZ291dDwvYnV0dG9uPn1cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbmF2PlxuICAgXG4gICAgPC9kaXY+XG5cbiAgICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9