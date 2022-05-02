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

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  console.log("routerPath", router.asPath);

  var contactLink = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/contact-us",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "text-white text-lg font-bold hover:text-gray-900",
      children: "Contact Us"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);

  console.log("ctxUser", authCtx.user);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {// console.log("navAboutRef", ctx.aboutRef);
  }

  console.log("contactRef", ctx.contactRef);
  console.log("aboutRef", ctx.aboutRef);

  if (!ctx.aboutRef && !ctx.contactRef) {
    return;
  }

  var scrollToRef = function scrollToRef(ref) {
    return ref.current && window.scrollTo(0, ref.current.offsetTop);
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
              lineNumber: 64,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "TheNobodies"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 17
                }, _this)
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
            lineNumber: 63,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-navbar-right  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav hidden sm:flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "smoothscroll",
              onClick: ctx.aboutRef.current && handleAboutClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: router.asPath === '/' ? '#About' : '/#About',
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "smoothscroll",
              onClick: ctx.contactRef.current && handleContactClick,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: router.asPath === '/' ? '#Contact' : '/#Contact',
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "uk-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Categories"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
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
                          lineNumber: 99,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, _this)
                    }, category.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
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
                lineNumber: 110,
                columnNumber: 31
              }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.logOutUser();
                },
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 30
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInNob3dNb2RhbCIsImN0eCIsInVzZUNvbnRleHQiLCJTY3JvbGxDb250ZXh0IiwiYXV0aEN0eCIsIkF1dGhDb250ZXh0IiwidXNlU3RhdGUiLCJpc0Jyb3dzZXIiLCJzZXRJc0Jyb3dzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwiY29udGFjdExpbmsiLCJ1c2VyIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsImFib3V0UmVmIiwic2Nyb2xsVG9SZWYiLCJyZWYiLCJjdXJyZW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJoYW5kbGVBYm91dENsaWNrIiwiaGFuZGxlQ29udGFjdENsaWNrIiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIm5hbWUiLCJpZCIsInNldE1vZGFsT3BlbiIsImxvZ091dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFFekMsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyxpRUFBRCxDQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsaURBQVUsQ0FBQ0csNkRBQUQsQ0FBMUI7O0FBSHlDLGtCQUtQQywrQ0FBUSxDQUFDLEtBQUQsQ0FMRDtBQUFBLE1BS2xDQyxTQUxrQztBQUFBLE1BS3ZCQyxZQUx1Qjs7QUFNekMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZ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QjtBQUFRLHlCQUFNLG1EQUFkO0FBQ2pCLHVCQUFPLEVBQUU7QUFBQSx5QkFBTVgsT0FBTyxDQUFDOEIsVUFBUixFQUFOO0FBQUEsaUJBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBeUVELENBekhEOztHQUFNcEMsRztVQU1XWSxrRDs7O0tBTlhaLEc7QUEySE4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjA4ZjdhNzY3YzA0NTE3ZjczN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Njcm9sbENvbnRleHRcIlxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIHNob3dNb2RhbCB9KSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnNvbGUubG9nKFwicm91dGVyUGF0aFwiLCByb3V0ZXIuYXNQYXRoKVxuXG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gKFxuICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgIENvbnRhY3QgVXNcbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG5cblxuIGNvbnNvbGUubG9nKFwiY3R4VXNlclwiLCBhdXRoQ3R4LnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNCcm93c2VyKHRydWUpO1xuXG4gICBcbiAgfSwgW10pXG5cbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwibmF2QWJvdXRSZWZcIiwgY3R4LmFib3V0UmVmKTtcbiAgXG5cblxuICB9IFxuICBjb25zb2xlLmxvZyhcImNvbnRhY3RSZWZcIiwgY3R4LmNvbnRhY3RSZWYpXG4gIGNvbnNvbGUubG9nKFwiYWJvdXRSZWZcIiwgY3R4LmFib3V0UmVmKVxuXG4gIFxuICBpZiAgKCFjdHguYWJvdXRSZWYgJiYgIWN0eC5jb250YWN0UmVmKSB7XG5cbiAgICByZXR1cm4gXG4gIH1cblxuICBjb25zdCBzY3JvbGxUb1JlZiA9IChyZWYpID0+IHJlZi5jdXJyZW50ICYmIHdpbmRvdy5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3ApXG4gIGNvbnN0IGhhbmRsZUFib3V0Q2xpY2sgPSAoKSA9PiBzY3JvbGxUb1JlZihjdHguYWJvdXRSZWYpXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5jb250YWN0UmVmKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciBmbGV4IHBsLTEwIHByLTRcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdiB1ay1uYXZiYXItZHJvcGRvd24tbmF2XCI+PC91bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIiA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+VGhlTm9ib2RpZXM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLXJpZ2h0ICBcIj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IGhpZGRlbiBzbTpmbGV4XCI+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtjdHguYWJvdXRSZWYuY3VycmVudCAmJiBoYW5kbGVBYm91dENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aCA9PT0gJy8nID8gJyNBYm91dCcgOiAnLyNBYm91dCd9PlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtjdHguY29udGFjdFJlZi5jdXJyZW50ICAmJiBoYW5kbGVDb250YWN0Q2xpY2t9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXIuYXNQYXRoID09PSAnLycgPyAnI0NvbnRhY3QnIDogJy8jQ29udGFjdCd9PlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXYgdWstbmF2YmFyLWRyb3Bkb3duLW5hdlwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJwbC0yIHByLTJcIiA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHshYXV0aEN0eC51c2VyICYmIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGF1dGhDdHguc2V0TW9kYWxPcGVuKHRydWUpIH0+TG9naW48L2J1dHRvbj59XG5cblxuICAgICAgICAgIHsgYXV0aEN0eC51c2VyICYmICA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhdXRoQ3R4LmxvZ091dFVzZXIoKX0+TG9nb3V0PC9idXR0b24+fVxuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uYXY+XG4gICBcbiAgICA8L2Rpdj5cblxuICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=