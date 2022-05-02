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
      showModal = _ref.showModal;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_3__.ScrollContext);
  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isBrowser = _useState[0],
      setIsBrowser = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  var contactLink = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/contact-us",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "text-white text-lg font-bold hover:text-gray-900",
      children: "Contact Us"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);

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
              lineNumber: 56,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "m-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: "TheNobodies"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 17
                }, _this)
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
              onClick: ctx.aboutRef && handleAboutClick,
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
              onClick: ctx.contactRef && handleContactClick,
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
                          className: "uk-link-reset",
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
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.setModalOpen(true);
                },
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 31
              }, _this), authCtx.user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                "class": "uk-button uk-button-default uk-margin-small-right",
                onClick: function onClick() {
                  return authCtx.logOutUser();
                },
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInNob3dNb2RhbCIsImN0eCIsInVzZUNvbnRleHQiLCJTY3JvbGxDb250ZXh0IiwiYXV0aEN0eCIsIkF1dGhDb250ZXh0IiwidXNlU3RhdGUiLCJpc0Jyb3dzZXIiLCJzZXRJc0Jyb3dzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb250YWN0TGluayIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInNjcm9sbFRvUmVmIiwicmVmIiwid2luZG93Iiwic2Nyb2xsVG8iLCJjdXJyZW50Iiwib2Zmc2V0VG9wIiwiaGFuZGxlQWJvdXRDbGljayIsImFib3V0UmVmIiwiaGFuZGxlQ29udGFjdENsaWNrIiwiYXNQYXRoIiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIm5hbWUiLCJpZCIsInNldE1vZGFsT3BlbiIsImxvZ091dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFFekMsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyxpRUFBRCxDQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsaURBQVUsQ0FBQ0csNkRBQUQsQ0FBMUI7O0FBSHlDLGtCQUlQQywrQ0FBUSxDQUFDLEtBQUQsQ0FKRDtBQUFBLE1BSWxDQyxTQUprQztBQUFBLE1BSXZCQyxZQUp1Qjs7QUFLekMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxXQUFXLGdCQUNmLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBQyxrREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjs7QUFTREMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlQsT0FBTyxDQUFDVSxJQUEvQjtBQUVDQyxrREFBUyxDQUFDLFlBQU07QUFDZFAsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQUlELFNBQUosRUFBZSxDQUNiO0FBSUQ7O0FBQ0RLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJaLEdBQUcsQ0FBQ2UsVUFBOUI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRDtBQUFBLFdBQVNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQkYsR0FBRyxDQUFDRyxPQUFKLENBQVlDLFNBQS9CLENBQVQ7QUFBQSxHQUFwQjs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBTU4sV0FBVyxDQUFDaEIsR0FBRyxDQUFDdUIsUUFBTCxDQUFqQjtBQUFBLEdBQXpCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUFNUixXQUFXLENBQUNoQixHQUFHLENBQUNlLFVBQUwsQ0FBakI7QUFBQSxHQUEzQjs7QUFJQSxzQkFDRTtBQUFBLDJCQUNBO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFDQUFmO0FBQXFELDhCQUFyRDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBQyxnQkFBZDtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUMsS0FBZDtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxHQUFYO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBRUU7QUFBSSxxQkFBUyxFQUFDLDhCQUFkO0FBQUEsb0NBRUU7QUFBSSx1QkFBUyxFQUFDLGNBQWQ7QUFBNkIscUJBQU8sRUFBRWYsR0FBRyxDQUFDdUIsUUFBSixJQUFnQkQsZ0JBQXREO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFFZCxNQUFNLENBQUNpQixNQUFQLEtBQWtCLEdBQWxCLEdBQXdCLFFBQXhCLEdBQW1DLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQU9FO0FBQUksdUJBQVMsRUFBQyxjQUFkO0FBQTZCLHFCQUFPLEVBQUV6QixHQUFHLENBQUNlLFVBQUosSUFBa0JTLGtCQUF4RDtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBRWhCLE1BQU0sQ0FBQ2lCLE1BQVAsS0FBa0IsR0FBbEIsR0FBd0IsVUFBeEIsR0FBcUMsV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQWdCRTtBQUFJLHFCQUFTLEVBQUMsZUFBZDtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUMsb0JBQWY7QUFBQSx1Q0FDRTtBQUFJLDJCQUFTLEVBQUMsK0JBQWQ7QUFBQSw0QkFDRzNCLFVBQVUsQ0FBQzRCLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDNUIsd0NBQ0U7QUFBc0IsK0JBQVMsRUFBQyxXQUFoQztBQUFBLDZDQUdFLDhEQUFDLGtEQUFEO0FBQU0sNEJBQUksc0JBQWVBLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsSUFBbkMsQ0FBVjtBQUFBLCtDQUNFO0FBQUcsbUNBQVMsRUFBQyxlQUFiO0FBQUEsb0NBQThCRixRQUFRLENBQUNDLFVBQVQsQ0FBb0JFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsdUJBQVNILFFBQVEsQ0FBQ0ksRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERjtBQVVELG1CQVhBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBcUJFO0FBQUksdUJBQVMsRUFBQyxtQkFBZDtBQUFBLHlCQUNDLENBQUM1QixPQUFPLENBQUNVLElBQVQsaUJBQWlCO0FBQVEseUJBQU0sbURBQWQ7QUFDbEIsdUJBQU8sRUFBRTtBQUFBLHlCQUFNVixPQUFPLENBQUM2QixZQUFSLENBQXFCLElBQXJCLENBQU47QUFBQSxpQkFEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEbEIsRUFLQTdCLE9BQU8sQ0FBQ1UsSUFBUixpQkFBaUI7QUFBUSx5QkFBTSxtREFBZDtBQUNqQix1QkFBTyxFQUFFO0FBQUEseUJBQU1WLE9BQU8sQ0FBQzhCLFVBQVIsRUFBTjtBQUFBLGlCQURRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQXlFRCxDQWpIRDs7R0FBTXBDLEc7VUFLV1ksa0Q7OztLQUxYWixHO0FBbUhOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTNlYjZlOTAyMmE5MDU3YzVlZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Njcm9sbENvbnRleHRcIlxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbWFnZVwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIHNob3dNb2RhbCB9KSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBbaXNCcm93c2VyLCBzZXRJc0Jyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjb250YWN0TGluayA9IChcbiAgICA8TGluayBocmVmPVwiL2NvbnRhY3QtdXNcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGQgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICBDb250YWN0IFVzXG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xuXG5cbiBjb25zb2xlLmxvZyhcImN0eFVzZXJcIiwgYXV0aEN0eC51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQnJvd3Nlcih0cnVlKTtcblxuICAgXG4gIH0sIFtdKVxuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hdkFib3V0UmVmXCIsIGN0eC5hYm91dFJlZik7XG4gIFxuXG5cbiAgfSBcbiAgY29uc29sZS5sb2coXCJjb250YWN0UmVmXCIsIGN0eC5jb250YWN0UmVmKVxuXG4gIFxuXG4gIGNvbnN0IHNjcm9sbFRvUmVmID0gKHJlZikgPT4gd2luZG93LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcClcbiAgY29uc3QgaGFuZGxlQWJvdXRDbGljayA9ICgpID0+IHNjcm9sbFRvUmVmKGN0eC5hYm91dFJlZilcbiAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4gc2Nyb2xsVG9SZWYoY3R4LmNvbnRhY3RSZWYpXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyIGZsZXggcGwtMTAgcHItNFwiIGRhdGEtdWstbmF2YmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2IHVrLW5hdmJhci1kcm9wZG93bi1uYXZcIj48L3VsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMFwiID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5UaGVOb2JvZGllczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgIFwiPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXYgaGlkZGVuIHNtOmZsZXhcIj5cblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtb290aHNjcm9sbFwiIG9uQ2xpY2s9e2N0eC5hYm91dFJlZiAmJiBoYW5kbGVBYm91dENsaWNrfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyLmFzUGF0aCA9PT0gJy8nID8gJyNBYm91dCcgOiAnLyNBYm91dCd9PlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbW9vdGhzY3JvbGxcIiBvbkNsaWNrPXtjdHguY29udGFjdFJlZiAmJiBoYW5kbGVDb250YWN0Q2xpY2t9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZXIuYXNQYXRoID09PSAnLycgPyAnI0NvbnRhY3QnIDogJy8jQ29udGFjdCd9PlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXYgdWstbmF2YmFyLWRyb3Bkb3duLW5hdlwiPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9XCJwbC0yIHByLTJcIiA+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHshYXV0aEN0eC51c2VyICYmIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGF1dGhDdHguc2V0TW9kYWxPcGVuKHRydWUpIH0+TG9naW48L2J1dHRvbj59XG5cblxuICAgICAgICAgIHsgYXV0aEN0eC51c2VyICYmICA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhdXRoQ3R4LmxvZ091dFVzZXIoKX0+TG9nb3V0PC9idXR0b24+fVxuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uYXY+XG4gICBcbiAgICA8L2Rpdj5cblxuICAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=