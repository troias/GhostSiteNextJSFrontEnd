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
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_scrollContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/scrollContext */ "./context/scrollContext.js");
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/image */ "./components/image.js");
/* harmony import */ var _components_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/portal */ "./components/portal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/nav.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Nav = function Nav(_ref) {
  _s();

  var categories = _ref.categories,
      logo = _ref.logo;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_4__.ScrollContext);
  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_5__.AuthContext); // const [isBrowser, setIsBrowser] = useState(false);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)(); // console.log("routerPath", router.asPath)
  // const contactLink = (
  //   <Link href="/contact-us">
  //     <a className="text-white text-lg font-bold hover:text-gray-900">
  //       Contact Us
  //     </a>
  //   </Link>
  // );
  //  console.log("ctxUser", authCtx.user);
  // useEffect(() => {
  //   setIsBrowser(true);
  // }, [])
  // console.log("contactRef", ctx.contactRef)
  // console.log("aboutRef", ctx.aboutRef)

  console.log("image", logo);

  var scrollToRef = function scrollToRef(ref) {
    return ref.current && ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  var handleAboutClick = function handleAboutClick() {
    return scrollToRef(ctx.aboutRef);
  };

  var handleContactClick = function handleContactClick() {
    return scrollToRef(ctx.contactRef);
  };

  var navLogo = _objectSpread({}, logo);

  var updatedNavLogoData = navLogo.data.attributes = _objectSpread(_objectSpread({}, navLogo.data.attributes), {}, {
    height: "150px",
    width: "150px"
  });

  console.log("NavLogo", updatedNavLogoData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "m-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                image: updatedNavLogoData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 18
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-navbar-right  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav hidden sm:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "smoothscroll",
            onClick: ctx.aboutRef.current && handleAboutClick,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: router.asPath === '/' ? '#About' : '/#About',
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "smoothscroll",
            onClick: ctx.contactRef.current && handleContactClick,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: router.asPath === '/' ? '#Contact' : '/#Contact',
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-navbar-dropdown",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "uk-nav uk-navbar-dropdown-nav",
                children: categories.map(function (category) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "pl-2 pr-2",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                      href: "/category/".concat(category.attributes.slug),
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        children: category.attributes.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 25
                    }, _this)
                  }, category.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 23
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "flex items-center",
            children: [!authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "uk-button uk-button-default uk-margin-small-right",
              onClick: function onClick() {
                return authCtx.setModalOpen(true);
              },
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 31
            }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "uk-button uk-button-default uk-margin-small-right",
              onClick: function onClick() {
                return authCtx.logOutUser();
              },
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(Nav, "9LTTDF5yScK+JCLtrq9AxBUBEgE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsImxvZ28iLCJjdHgiLCJ1c2VDb250ZXh0IiwiU2Nyb2xsQ29udGV4dCIsImF1dGhDdHgiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb1JlZiIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVBYm91dENsaWNrIiwiYWJvdXRSZWYiLCJoYW5kbGVDb250YWN0Q2xpY2siLCJjb250YWN0UmVmIiwibmF2TG9nbyIsInVwZGF0ZWROYXZMb2dvRGF0YSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJhc1BhdGgiLCJtYXAiLCJjYXRlZ29yeSIsInNsdWciLCJuYW1lIiwiaWQiLCJ1c2VyIiwic2V0TW9kYWxPcGVuIiwibG9nT3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFcEMsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyxpRUFBRCxDQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsaURBQVUsQ0FBQ0csNkRBQUQsQ0FBMUIsQ0FIb0MsQ0FLcEM7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQU5vQyxDQVFwQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0Y7QUFFRTtBQUNBO0FBR0E7QUFHQTtBQUNBOztBQUVBQyxTQUFPLENBQUNDLEdB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RkY7QUEyRUQsQ0EvSEQ7O0dBQU1wQyxHO1VBTVdTLGtEOzs7S0FOWFQsRztBQWlJTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MTI2ZjNiZDcwZTBmMjExYzYzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBTY3JvbGxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dFwiXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhDb250ZXh0XCI7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGFsXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmF2ID0gKHsgY2F0ZWdvcmllcywgbG9nbyB9KSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIC8vIGNvbnN0IFtpc0Jyb3dzZXIsIHNldElzQnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwicm91dGVyUGF0aFwiLCByb3V0ZXIuYXNQYXRoKVxuXG4gIC8vIGNvbnN0IGNvbnRhY3RMaW5rID0gKFxuICAvLyAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxuICAvLyAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gIC8vICAgICAgIENvbnRhY3QgVXNcbiAgLy8gICAgIDwvYT5cbiAgLy8gICA8L0xpbms+XG4gIC8vICk7XG5cblxuLy8gIGNvbnNvbGUubG9nKFwiY3R4VXNlclwiLCBhdXRoQ3R4LnVzZXIpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0SXNCcm93c2VyKHRydWUpO1xuXG4gICBcbiAgLy8gfSwgW10pXG5cblxuICAvLyBjb25zb2xlLmxvZyhcImNvbnRhY3RSZWZcIiwgY3R4LmNvbnRhY3RSZWYpXG4gIC8vIGNvbnNvbGUubG9nKFwiYWJvdXRSZWZcIiwgY3R4LmFib3V0UmVmKVxuXG4gIGNvbnNvbGUubG9nKFwiaW1hZ2VcIiwgbG9nbylcblxuXG4gIGNvbnN0IHNjcm9sbFRvUmVmID0gKHJlZikgPT4gcmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgY29uc3QgaGFuZGxlQWJvdXRDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5hYm91dFJlZilcbiAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4gc2Nyb2xsVG9SZWYoY3R4LmNvbnRhY3RSZWYpXG5cbiAgY29uc3QgbmF2TG9nbyA9IHtcbiAgICAuLi5sb2dvXG4gIH1cblxuIFxuXG4gIGNvbnN0IHVwZGF0ZWROYXZMb2dvRGF0YSA9IG5hdkxvZ28uZGF0YS5hdHRyaWJ1dGVzID0ge1xuICAgIC4uLm5hdkxvZ28uZGF0YS5hdHRyaWJ1dGVzLFxuICAgIGhlaWdodDogXCIxNTBweFwiLCBcbiAgICB3aWR0aDogXCIxNTBweFwiIFxuICB9XG5cbiAgY29uc29sZS5sb2coXCJOYXZMb2dvXCIsIHVwZGF0ZWROYXZMb2dvRGF0YSlcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciBmbGV4IHBsLTEwIHByLTRcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdiB1ay1uYXZiYXItZHJvcGRvd24tbmF2XCI+PC91bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIiA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgIGltYWdlPXt1cGRhdGVkTmF2TG9nb0RhdGF9IC8+IFxuICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCAgXCI+XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdiBoaWRkZW4gc206ZmxleFwiPlxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21vb3Roc2Nyb2xsXCIgb25DbGljaz17Y3R4LmFib3V0UmVmLmN1cnJlbnQgJiYgaGFuZGxlQWJvdXRDbGlja30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlci5hc1BhdGggPT09ICcvJyA/ICcjQWJvdXQnIDogJy8jQWJvdXQnfT5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21vb3Roc2Nyb2xsXCIgb25DbGljaz17Y3R4LmNvbnRhY3RSZWYuY3VycmVudCAgJiYgaGFuZGxlQ29udGFjdENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aCA9PT0gJy8nID8gJyNDb250YWN0JyA6ICcvI0NvbnRhY3QnfT5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwicGwtMiBwci0yXCIgPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7IWF1dGhDdHgudXNlciAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXV0aEN0eC5zZXRNb2RhbE9wZW4odHJ1ZSkgfT5Mb2dpbjwvYnV0dG9uPn1cbiAgICAgICAgIFxuXG5cbiAgICAgICAgICB7IGF1dGhDdHgudXNlciAmJiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGF1dGhDdHgubG9nT3V0VXNlcigpfT5Mb2dvdXQ8L2J1dHRvbj59XG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L25hdj5cbiAgIFxuICAgIDwvZGl2PlxuXG4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==