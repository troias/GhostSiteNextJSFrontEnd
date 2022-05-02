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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pl-8 pr-8 ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "article-section pt-8  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__.default, {
          herodata: homepage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_9__.default, {
          show: showModal,
          onClose: setShowModal
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_3__.default, {
          articles: articles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_investigations__WEBPACK_IMPORTED_MODULE_11__.default, {
          investigations: investigations
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_us__WEBPACK_IMPORTED_MODULE_7__.default, {
          aboutData: homepage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_us__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiaW52ZXN0aWdhdGlvbnMiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsImZvb3RlciIsImZvb3RlckRhdGEiLCJjdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFVzZXIiLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0U7QUFBQTs7QUFBQSxNQUE3REMsUUFBNkQsUUFBN0RBLFFBQTZEO0FBQUEsTUFBbkRDLFVBQW1ELFFBQW5EQSxVQUFtRDtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsY0FBNkIsUUFBN0JBLGNBQTZCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRTNFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQTVDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQXJDO0FBQ0EsTUFBTUUsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUoyRSxDQUszRTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsRUFBK0M7QUFDN0NOLFNBQUcsQ0FBQ08sT0FBSixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWjtBQUVEO0FBRUYsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFSMkUsa0JBaUJ6Q0ksK0NBQVEsQ0FBQyxLQUFELENBakJpQztBQUFBLE1BaUJwRUMsU0FqQm9FO0FBQUEsTUFpQnpEQyxZQWpCeUQsaUJBbUIzRTs7O0FBRUEsc0JBR0k7QUFBSyxhQUFTLEVBQUMsR0FBZjtBQUFBLDRCQUNLLDhEQUFDLG9EQUFEO0FBQUssU0FBRyxFQUFFcEIsUUFBUSxDQUFDSyxVQUFULENBQW9CZ0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURMLGVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNJLDhEQUFDLHFEQUFEO0FBQU0sa0JBQVEsRUFBRXJCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFUSw4REFBQyxzREFBRDtBQUFPLGNBQUksRUFBRW1CLFNBQWI7QUFBd0IsaUJBQU8sRUFBRUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUixlQUdJLDhEQUFDLHlEQUFEO0FBQVUsa0JBQVEsRUFBRXRCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSw4REFBQyxnRUFBRDtBQUFnQix3QkFBYyxFQUFFRztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0ksOERBQUMseURBQUQ7QUFBUyxtQkFBUyxFQUFFRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEo7QUFxQkQsQ0ExQ0Q7O0dBQU1ILEk7O0tBQUFBLEk7O0FBK0VOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhNzMxOGE1OTYwZDBlYjdiZWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2F1dGhDb250ZXh0XCI7XG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJ0aWNsZXNcIlxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVyb1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hYm91dC11c1wiXG5pbXBvcnQgQ29udGFjdFVzIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3QtdXNcIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGFsXCJcbmltcG9ydCBJbnZlc3RpZ2F0aW9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnZlc3RpZ2F0aW9uc1wiO1xuXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcblxuXG5cblxuXG5cblxuY29uc3QgSG9tZSA9ICh7IGFydGljbGVzLCBjYXRlZ29yaWVzLCBob21lcGFnZSwgaW52ZXN0aWdhdGlvbnMsIGdsb2JhbCB9KSA9PiB7XG5cbiAgY29uc29sZS5sb2coXCJnbG9iYWxEYXRhXCIsIGdsb2JhbC5hdHRyaWJ1dGVzLmZvb3Rlcik7XG4gIGNvbnN0IGZvb3RlckRhdGEgPSBnbG9iYWwuYXR0cmlidXRlcy5mb290ZXI7XG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICAvLyBjb25zb2xlLmxvZyhcImhvbWVQYWdlUHJvcHNcIiwgaG9tZXBhZ2UpO1xuICAvLyBjb25zb2xlLmxvZyhcInVzZXJcIiwgY3R4LnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjdHgudXNlciAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcbiAgICAgIGN0eC5zZXRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XG4gICAgIFxuICAgIH1cblxuICB9LCBbXSlcblxuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJzaG93TW9kYWxcIiwgc2hvd01vZGFsKSBcblxuICByZXR1cm4gKFxuICBcbiAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC04IHByLTggXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gcHQtOCAgXCI+XG4gICAgICAgICAgICAgIDxIZXJvIGhlcm9kYXRhPXtob21lcGFnZX0gLz4gXG4gICAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBvbkNsb3NlPXtzZXRTaG93TW9kYWx9Lz5cbiAgICAgICAgICAgICAgPEFydGljbGVzIGFydGljbGVzPXthcnRpY2xlc30gLz5cbiAgICAgICAgICAgICAgPEludmVzdGlnYXRpb25zIGludmVzdGlnYXRpb25zPXtpbnZlc3RpZ2F0aW9uc30vPlxuICAgICAgICAgICAgICA8QWJvdXRVcyBhYm91dERhdGE9e2hvbWVwYWdlfS8+IFxuICAgICAgICAgICAgICA8Q29udGFjdFVzIC8+XG4gICAgICAgIFxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiBcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW2FydGljbGVzUmVzLCBjYXRlZ29yaWVzUmVzLCBob21lcGFnZVJlcywgaW52ZXN0aWdhdGlvbnNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBcbiAgICBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuIFxuICAgIGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsIHtcbiAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgIGhlcm86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgIGFib3V0OiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgIFxuXG4gICAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcblxuICAgICAgfSxcbiAgICAgIFxuICAgIH0pLFxuICAgIGZldGNoQVBJKFwiL2ludmVzdGlnYXRpb25zXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IGFydGljbGVzUmVzLmRhdGEsXG4gICAgICBpbnZlc3RpZ2F0aW9uczogaW52ZXN0aWdhdGlvbnNSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICBcblxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9