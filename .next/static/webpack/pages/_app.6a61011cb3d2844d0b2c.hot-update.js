self["webpackHotUpdate_N_E"]("pages/_app",{

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
      logo = _ref.logo;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_3__.ScrollContext);
  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext); // const [isBrowser, setIsBrowser] = useState(false);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)(); // console.log("routerPath", router.asPath)
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
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "m-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "smoothscroll",
            onClick: ctx.contactRef.current && handleContactClick,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: router.asPath === '/' ? '#Contact' : '/#Contact',
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Categories"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
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
                        children: category.attributes.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 25
                    }, _this)
                  }, category.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 23
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
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
              lineNumber: 102,
              columnNumber: 31
            }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "uk-button uk-button-default uk-margin-small-right",
              onClick: function onClick() {
                return authCtx.logOutUser();
              },
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 30
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_s(Nav, "9LTTDF5yScK+JCLtrq9AxBUBEgE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsImxvZ28iLCJjdHgiLCJ1c2VDb250ZXh0IiwiU2Nyb2xsQ29udGV4dCIsImF1dGhDdHgiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInNjcm9sbFRvUmVmIiwicmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImhhbmRsZUFib3V0Q2xpY2siLCJhYm91dFJlZiIsImhhbmRsZUNvbnRhY3RDbGljayIsImNvbnRhY3RSZWYiLCJhc1BhdGgiLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzbHVnIiwibmFtZSIsImlkIiwidXNlciIsInNldE1vZGFsT3BlbiIsImxvZ091dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRXBDLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLGlEQUFVLENBQUNHLDZEQUFELENBQTFCLENBSG9DLENBS3BDOztBQUNBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FOb0MsQ0FRcEM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdGO0FBRUU7QUFDQTtBQUdBO0FBR0E7QUFDQTs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxPQUFKLElBQWVELEdBQUcsQ0FBQ0MsT0FBSixDQUFZ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QkFBZDtBQUFBLHVCQUNDLENBQUNwQixPQUFPLENBQUNxQixJQUFULGlCQUFpQjtBQUFRLHVCQUFTLEVBQUMsbURBQWxCO0FBQ2xCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXJCLE9BQU8sQ0FBQ3NCLFlBQVIsQ0FBcUIsSUFBckIsQ0FBTjtBQUFBLGVBRFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxCLEVBTUF0QixPQUFPLENBQUNxQixJQUFSLGlCQUFpQjtBQUFRLHVCQUFTLEVBQUMsbURBQWxCO0FBQ2pCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXJCLE9BQU8sQ0FBQ3VCLFVBQVIsRUFBTjtBQUFBLGVBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUEwRUQsQ0FsSEQ7O0dBQU03QixHO1VBTVdTLGtEOzs7S0FOWFQsRztBQW9ITiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZhNjEwMTFjYjNkMjg0NGQwYjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IFNjcm9sbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9zY3JvbGxDb250ZXh0XCJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0YWxcIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzLCBsb2dvIH0pID0+IHtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgLy8gY29uc3QgW2lzQnJvd3Nlciwgc2V0SXNCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJyb3V0ZXJQYXRoXCIsIHJvdXRlci5hc1BhdGgpXG5cbiAgLy8gY29uc3QgY29udGFjdExpbmsgPSAoXG4gIC8vICAgPExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+XG4gIC8vICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIGhvdmVyOnRleHQtZ3JheS05MDBcIj5cbiAgLy8gICAgICAgQ29udGFjdCBVc1xuICAvLyAgICAgPC9hPlxuICAvLyAgIDwvTGluaz5cbiAgLy8gKTtcblxuXG4vLyAgY29uc29sZS5sb2coXCJjdHhVc2VyXCIsIGF1dGhDdHgudXNlcik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0Jyb3dzZXIodHJ1ZSk7XG5cbiAgIFxuICAvLyB9LCBbXSlcblxuXG4gIC8vIGNvbnNvbGUubG9nKFwiY29udGFjdFJlZlwiLCBjdHguY29udGFjdFJlZilcbiAgLy8gY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBjdHguYWJvdXRSZWYpXG5cbiAgXG5cblxuICBjb25zdCBzY3JvbGxUb1JlZiA9IChyZWYpID0+IHJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gIGNvbnN0IGhhbmRsZUFib3V0Q2xpY2sgPSAoKSA9PiBzY3JvbGxUb1JlZihjdHguYWJvdXRSZWYpXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5jb250YWN0UmVmKVxuXG5cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciBmbGV4IHBsLTEwIHByLTRcIiBkYXRhLXVrLW5hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2IFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdiB1ay1uYXZiYXItZHJvcGRvd24tbmF2XCI+PC91bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtLTBcIiA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgey8qIDxOZXh0SW1hZ2UgaW1hZ2U9e2xvZ299IC8+ICovfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCAgXCI+XG5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdiBoaWRkZW4gc206ZmxleFwiPlxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21vb3Roc2Nyb2xsXCIgb25DbGljaz17Y3R4LmFib3V0UmVmLmN1cnJlbnQgJiYgaGFuZGxlQWJvdXRDbGlja30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlci5hc1BhdGggPT09ICcvJyA/ICcjQWJvdXQnIDogJy8jQWJvdXQnfT5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic21vb3Roc2Nyb2xsXCIgb25DbGljaz17Y3R4LmNvbnRhY3RSZWYuY3VycmVudCAgJiYgaGFuZGxlQ29udGFjdENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aCA9PT0gJy8nID8gJyNDb250YWN0JyA6ICcvI0NvbnRhY3QnfT5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0gY2xhc3NOYW1lPVwicGwtMiBwci0yXCIgPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhID57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7IWF1dGhDdHgudXNlciAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXV0aEN0eC5zZXRNb2RhbE9wZW4odHJ1ZSkgfT5Mb2dpbjwvYnV0dG9uPn1cbiAgICAgICAgIFxuXG5cbiAgICAgICAgICB7IGF1dGhDdHgudXNlciAmJiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGF1dGhDdHgubG9nT3V0VXNlcigpfT5Mb2dvdXQ8L2J1dHRvbj59XG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcblxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L25hdj5cbiAgIFxuICAgIDwvZGl2PlxuXG4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==