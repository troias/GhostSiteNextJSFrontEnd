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
  console.log("globalData", global.attributes.footer);
  var footerData = global.attributes.footer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiaW52ZXN0aWdhdGlvbnMiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsImZvb3RlciIsImZvb3RlckRhdGEiLCJjdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFVzZXIiLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0U7QUFBQTs7QUFBQSxNQUE3REMsUUFBNkQsUUFBN0RBLFFBQTZEO0FBQUEsTUFBbkRDLFVBQW1ELFFBQW5EQSxVQUFtRDtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsY0FBNkIsUUFBN0JBLGNBQTZCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRTNFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQTVDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQXJDO0FBQ0EsTUFBTUUsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUoyRSxDQUszRTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsRUFBK0M7QUFDN0NOLFNBQUcsQ0FBQ08sT0FBSixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWjtBQUVEO0FBRUYsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFSMkUsa0JBaUJ6Q0ksK0NBQVEsQ0FBQyxLQUFELENBakJpQztBQUFBLE1BaUJwRUMsU0FqQm9FO0FBQUEsTUFpQnpEQyxZQWpCeUQsaUJBbUIzRTs7O0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxhQUFTLEVBQUVBLFlBQW5CO0FBQWlDLGNBQVUsRUFBRXJCLFVBQTdDO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVDLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQmdCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLEdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNJLDhEQUFDLHFEQUFEO0FBQU0sb0JBQVEsRUFBRXJCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFUSw4REFBQyxzREFBRDtBQUFPLGdCQUFJLEVBQUVtQixTQUFiO0FBQXdCLG1CQUFPLEVBQUVDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlIsZUFHSSw4REFBQyx5REFBRDtBQUFVLG9CQUFRLEVBQUV0QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUksOERBQUMsZ0VBQUQ7QUFBZ0IsMEJBQWMsRUFBRUc7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLHlEQUFEO0FBQVMscUJBQVMsRUFBRUQ7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXpDRDs7R0FBTUgsSTs7S0FBQUEsSTs7QUFxRk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmNlNmYwOGMzZDkxY2FmOWIwMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0LXVzXCJcbmltcG9ydCBDb250YWN0VXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdC11c1wiXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3J0YWxcIlxuaW1wb3J0IEludmVzdGlnYXRpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL2ludmVzdGlnYXRpb25zXCI7XG5cbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuXG5cblxuXG5cblxuXG5jb25zdCBIb21lID0gKHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBpbnZlc3RpZ2F0aW9ucywgZ2xvYmFsIH0pID0+IHtcblxuICBjb25zb2xlLmxvZyhcImdsb2JhbERhdGFcIiwgZ2xvYmFsLmF0dHJpYnV0ZXMuZm9vdGVyKTtcbiAgY29uc3QgZm9vdGVyRGF0YSA9IGdsb2JhbC5hdHRyaWJ1dGVzLmZvb3RlcjtcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiaG9tZVBhZ2VQcm9wc1wiLCBob21lcGFnZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidXNlclwiLCBjdHgudXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWN0eC51c2VyICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xuICAgICAgY3R4LnNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcbiAgICAgXG4gICAgfVxuXG4gIH0sIFtdKVxuXG5cbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zb2xlLmxvZyhcInNob3dNb2RhbFwiLCBzaG93TW9kYWwpIFxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBzaG93TW9kYWw9e3NldFNob3dNb2RhbH0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gPlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLmF0dHJpYnV0ZXMuc2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtOCBwci04IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIHB0LTggIFwiPlxuICAgICAgICAgICAgICA8SGVybyBoZXJvZGF0YT17aG9tZXBhZ2V9IC8+IFxuICAgICAgICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25DbG9zZT17c2V0U2hvd01vZGFsfS8+XG4gICAgICAgICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgIDxJbnZlc3RpZ2F0aW9ucyBpbnZlc3RpZ2F0aW9ucz17aW52ZXN0aWdhdGlvbnN9Lz5cbiAgICAgICAgICAgICAgPEFib3V0VXMgYWJvdXREYXRhPXtob21lcGFnZX0vPiBcbiAgICAgICAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICBcblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuIFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbYXJ0aWNsZXNSZXMsIGNhdGVnb3JpZXNSZXMsIGhvbWVwYWdlUmVzLCBpbnZlc3RpZ2F0aW9uc1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gIFxuICAgIGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gXG4gICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiwge1xuICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgaGVybzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgYWJvdXQ6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgXG5cbiAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuXG4gICAgICB9LFxuICAgICAgXG4gICAgfSksXG4gICAgZmV0Y2hBUEkoXCIvaW52ZXN0aWdhdGlvbnNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgIGZhdmljb246IFwiKlwiLFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBwb3B1bGF0ZTogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzOiBhcnRpY2xlc1Jlcy5kYXRhLFxuICAgICAgaW52ZXN0aWdhdGlvbnM6IGludmVzdGlnYXRpb25zUmVzLmRhdGEsXG4gICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzLmRhdGEsXG4gICAgICBob21lcGFnZTogaG9tZXBhZ2VSZXMuZGF0YSxcbiAgICAgIGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEsXG5cbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==