self["webpackHotUpdate_N_E"]("pages/investigation/[slug]",{

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

  var updatedNavLogoData = _objectSpread(_objectSpread({}, navLogo.data), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsImxvZ28iLCJjdHgiLCJ1c2VDb250ZXh0IiwiU2Nyb2xsQ29udGV4dCIsImF1dGhDdHgiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb1JlZiIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVBYm91dENsaWNrIiwiYWJvdXRSZWYiLCJoYW5kbGVDb250YWN0Q2xpY2siLCJjb250YWN0UmVmIiwibmF2TG9nbyIsInVwZGF0ZWROYXZMb2dvRGF0YSIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFzUGF0aCIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJuYW1lIiwiaWQiLCJ1c2VyIiwic2V0TW9kYWxPcGVuIiwibG9nT3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFcEMsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyxpRUFBRCxDQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsaURBQVUsQ0FBQ0csNkRBQUQsQ0FBMUIsQ0FIb0MsQ0FLcEM7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQU5vQyxDQVFwQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0Y7QUFFRTtBQUNBO0FBR0E7QUFHQTtBQUNBOztBQUVBQyxTQUFPLENBQUNDLEdB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aUlOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludmVzdGlnYXRpb24vW3NsdWddLjQ1ODcyN2NkYTkxOTk0N2RlZDZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IFNjcm9sbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9zY3JvbGxDb250ZXh0XCJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0YWxcIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzLCBsb2dvIH0pID0+IHtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgLy8gY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJyb3V0ZXJQYXRoXCIsIHJvdXRlci5hc1BhdGgpXG5cbiAgLy8gY29uc3QgY29udGFjdExpbmsgPSAoXG4gIC8vICAgPExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgLy8gICAgICAgQ29udGFjdCBVc1xuICAvLyAgICAgPC9hPlxuICAvLyAgIDwvTGluaz5cbiAgLy8gKTtcblxuXG4vLyAgY29uc29sZS5sb2coXCJjdHhVc2VyXCIsIGF1dGhDdHgudXNlcik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG5cbiAgIFxuICAvLyB9LCBbXSlcblxuXG4gIC8vIGNvbnNvbGUubG9nKFwiY29udGFjdFJlZlwiLCBjdHguY29udGFjdFJlZilcbiAgLy8gY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBjdHguYWJvdXRSZWYpXG5cbiAgY29uc29sZS5sb2coXCJpbWFnZVwiLCBsb2dvKVxuXG5cbiAgY29uc3Qgc2Nyb2xsVG9SZWYgPSAocmVmKSA9PiByZWYuY3VycmVudCAmJiByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICBjb25zdCBoYW5kbGVBYm91dENsaWNrID0gKCkgPT4gc2Nyb2xsVG9SZWYoY3R4LmFib3V0UmVmKVxuICBjb25zdCBoYW5kbGVDb250YWN0Q2xpY2sgPSAoKSA9PiBzY3JvbGxUb1JlZihjdHguY29udGFjdFJlZilcblxuICBjb25zdCBuYXZMb2dvID0ge1xuICAgIC4uLmxvZ29cbiAgfVxuXG4gXG5cbiAgY29uc3QgdXBkYXRlZE5hdkxvZ29EYXRhID0gIHtcbiAgICAuLi5uYXZMb2dvLmRhdGEsXG4gICAgaGVpZ2h0OiBcIjE1MHB4XCIsIFxuICAgIHdpZHRoOiBcIjE1MHB4XCIgXG4gIH1cblxuICBjb25zb2xlLmxvZyhcIk5hdkxvZ29cIiwgdXBkYXRlZE5hdkxvZ29EYXRhKVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyIGZsZXggcGwtMTAgcHItNFwiIGRhdGEtdWstbmF2YmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj48L3VsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMFwiID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSAgaW1hZ2U9e3VwZGF0ZWROYXZMb2dvRGF0YX0gLz4gXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLXJpZ2h0ICBcIj5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IGhpZGRlbiBzbTpmbGV4XCI+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtjdHguYWJvdXRSZWYuY3VycmVudCAmJiBoYW5kbGVBYm91dENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aCA9PT0gJy8nID8gJyNBYm91dCcgOiAnLyNBYm91dCd9PlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtjdHguY29udGFjdFJlZi5jdXJyZW50ICAmJiBoYW5kbGVDb250YWN0Q2xpY2t9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXIuYXNQYXRoID09PSAnLycgPyAnI0NvbnRhY3QnIDogJy8jQ29udGFjdCd9PlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXYgdWstbmF2YmFyLWRyb3Bkb3duLW5hdlwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJwbC0yIHByLTJcIiA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHshYXV0aEN0eC51c2VyICYmIDxidXR0b24gY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhdXRoQ3R4LnNldE1vZGFsT3Blbih0cnVlKSB9PkxvZ2luPC9idXR0b24+fVxuICAgICAgICAgXG5cblxuICAgICAgICAgIHsgYXV0aEN0eC51c2VyICYmICA8YnV0dG9uIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXV0aEN0eC5sb2dPdXRVc2VyKCl9PkxvZ291dDwvYnV0dG9uPn1cblxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbmF2PlxuICAgXG4gICAgPC9kaXY+XG5cbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9