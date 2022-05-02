self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articles */ "./components/articles.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _components_about_us__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about-us */ "./components/about-us.js");
/* harmony import */ var _components_contact_us__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact-us */ "./components/contact-us.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var _components_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/portal */ "./components/portal.js");
/* harmony import */ var _components_investigations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/investigations */ "./components/investigations.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/pages/index.js",
    _this = undefined,
    _s = $RefreshSig$();













var Home = function Home(_ref) {
  _s();

  var articles = _ref.articles,
      categories = _ref.categories,
      homepage = _ref.homepage,
      investigations = _ref.investigations,
      global = _ref.global;
  console.log("globalData", global);
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.default); // console.log("homePageProps", homepage);
  // console.log("user", ctx.user);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!ctx.user && localStorage.getItem("user")) {
      ctx.setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showModal = _useState[0],
      setShowModal = _useState[1]; // console.log("showModal", showModal) 


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    showModal: setShowModal,
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pl-8 pr-8 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-section pt-8  ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__.default, {
            herodata: homepage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_9__.default, {
            show: showModal,
            onClose: setShowModal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_3__.default, {
            articles: articles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_investigations__WEBPACK_IMPORTED_MODULE_11__.default, {
            investigations: investigations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_us__WEBPACK_IMPORTED_MODULE_7__.default, {
            aboutData: homepage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_us__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(Home, "cUWmF5vssWZWgn/qW+OJMqaYsGQ=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiaW52ZXN0aWdhdGlvbnMiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRVc2VyIiwiSlNPTiIsInBhcnNlIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJhdHRyaWJ1dGVzIiwic2VvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnRTtBQUFBOztBQUFBLE1BQTdEQyxRQUE2RCxRQUE3REEsUUFBNkQ7QUFBQSxNQUFuREMsVUFBbUQsUUFBbkRBLFVBQW1EO0FBQUEsTUFBdkNDLFFBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxjQUE2QixRQUE3QkEsY0FBNkI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFFM0VDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLE1BQTFCO0FBRUEsTUFBTUcsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUoyRSxDQUszRTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsRUFBK0M7QUFDN0NOLFNBQUcsQ0FBQ08sT0FBSixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWjtBQUVEO0FBRUYsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFSMkUsa0JBaUJ6Q0ksK0NBQVEsQ0FBQyxLQUFELENBakJpQztBQUFBLE1BaUJwRUMsU0FqQm9FO0FBQUEsTUFpQnpEQyxZQWpCeUQsaUJBbUIzRTs7O0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxhQUFTLEVBQUVBLFlBQW5CO0FBQWlDLGNBQVUsRUFBRWxCLFVBQTdDO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVDLFFBQVEsQ0FBQ2tCLFVBQVQsQ0FBb0JDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLEdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNJLDhEQUFDLHFEQUFEO0FBQU0sb0JBQVEsRUFBRW5CO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFUSw4REFBQyxzREFBRDtBQUFPLGdCQUFJLEVBQUVnQixTQUFiO0FBQXdCLG1CQUFPLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlIsZUFHSSw4REFBQyx5REFBRDtBQUFVLG9CQUFRLEVBQUVuQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUksOERBQUMsZ0VBQUQ7QUFBZ0IsMEJBQWMsRUFBRUc7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLHlEQUFEO0FBQVMscUJBQVMsRUFBRUQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXpDRDs7R0FBTUgsSTs7S0FBQUEsSTs7QUFxRk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQzNTY1M2VlNzRlYjY4Y2Q0NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0LXVzXCJcbmltcG9ydCBDb250YWN0VXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdC11c1wiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0YWxcIlxuaW1wb3J0IEludmVzdGlnYXRpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL2ludmVzdGlnYXRpb25zXCI7XG5cbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuXG5cblxuXG5cblxuXG5jb25zdCBIb21lID0gKHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBpbnZlc3RpZ2F0aW9ucywgZ2xvYmFsIH0pID0+IHtcblxuICBjb25zb2xlLmxvZyhcImdsb2JhbERhdGFcIiwgZ2xvYmFsKTtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgLy8gY29uc29sZS5sb2coXCJob21lUGFnZVByb3BzXCIsIGhvbWVwYWdlKTtcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyXCIsIGN0eC51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY3R4LnVzZXIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgICBjdHguc2V0VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xuICAgICBcbiAgICB9XG5cbiAgfSwgW10pXG5cblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwic2hvd01vZGFsXCIsIHNob3dNb2RhbCkgXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHNob3dNb2RhbD17c2V0U2hvd01vZGFsfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTggcHItOCBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtc2VjdGlvbiBwdC04ICBcIj5cbiAgICAgICAgICAgICAgPEhlcm8gaGVyb2RhdGE9e2hvbWVwYWdlfSAvPiBcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG9uQ2xvc2U9e3NldFNob3dNb2RhbH0vPlxuICAgICAgICAgICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgICAgICAgICAgICA8SW52ZXN0aWdhdGlvbnMgaW52ZXN0aWdhdGlvbnM9e2ludmVzdGlnYXRpb25zfS8+XG4gICAgICAgICAgICAgIDxBYm91dFVzIGFib3V0RGF0YT17aG9tZXBhZ2V9Lz4gXG4gICAgICAgICAgICAgIDxDb250YWN0VXMgLz5cbiAgICAgICAgXG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiBcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW2FydGljbGVzUmVzLCBjYXRlZ29yaWVzUmVzLCBob21lcGFnZVJlcywgaW52ZXN0aWdhdGlvbnNSZXMsIGdsb2JhbFJlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gIFxuICAgIGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gXG4gICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiwge1xuICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgaGVybzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgYWJvdXQ6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgXG5cbiAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuXG4gICAgICB9LFxuICAgICAgXG4gICAgfSksXG4gICAgZmV0Y2hBUEkoXCIvaW52ZXN0aWdhdGlvbnNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiBhcnRpY2xlc1Jlcy5kYXRhLFxuICAgICAgaW52ZXN0aWdhdGlvbnM6IGludmVzdGlnYXRpb25zUmVzLmRhdGEsXG4gICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzLmRhdGEsXG4gICAgICBob21lcGFnZTogaG9tZXBhZ2VSZXMuZGF0YSxcbiAgICAgIGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEsXG5cbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==