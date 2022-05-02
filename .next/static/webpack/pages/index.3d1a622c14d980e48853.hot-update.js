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
    footer: footerData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiaW52ZXN0aWdhdGlvbnMiLCJnbG9iYWwiLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsImZvb3RlciIsImZvb3RlckRhdGEiLCJjdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFVzZXIiLCJKU09OIiwicGFyc2UiLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0U7QUFBQTs7QUFBQSxNQUE3REMsUUFBNkQsUUFBN0RBLFFBQTZEO0FBQUEsTUFBbkRDLFVBQW1ELFFBQW5EQSxVQUFtRDtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsY0FBNkIsUUFBN0JBLGNBQTZCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRTNFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQTVDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHTCxNQUFNLENBQUNHLFVBQVAsQ0FBa0JDLE1BQXJDO0FBQ0EsTUFBTUUsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUoyRSxDQUszRTtBQUNBOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsRUFBK0M7QUFDN0NOLFNBQUcsQ0FBQ08sT0FBSixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWjtBQUVEO0FBRUYsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFSMkUsa0JBaUJ6Q0ksK0NBQVEsQ0FBQyxLQUFELENBakJpQztBQUFBLE1BaUJwRUMsU0FqQm9FO0FBQUEsTUFpQnpEQyxZQWpCeUQsaUJBbUIzRTs7O0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxhQUFTLEVBQUVBLFlBQW5CO0FBQWlDLGNBQVUsRUFBRXJCLFVBQTdDO0FBQXlELFVBQU0sRUFBRVEsVUFBakU7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRVAsUUFBUSxDQUFDSyxVQUFULENBQW9CZ0I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsR0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0ksOERBQUMscURBQUQ7QUFBTSxvQkFBUSxFQUFFckI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVRLDhEQUFDLHNEQUFEO0FBQU8sZ0JBQUksRUFBRW1CLFNBQWI7QUFBd0IsbUJBQU8sRUFBRUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUixlQUdJLDhEQUFDLHlEQUFEO0FBQVUsb0JBQVEsRUFBRXRCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSSw4REFBQyxnRUFBRDtBQUFnQiwwQkFBYyxFQUFFRztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0ksOERBQUMseURBQUQ7QUFBUyxxQkFBUyxFQUFFRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBekNEOztHQUFNSCxJOztLQUFBQSxJOztBQXFGTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDFhNjIyYzE0ZDk4MGU0ODg1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzXCJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL2hlcm9cIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXQtdXNcIlxuaW1wb3J0IENvbnRhY3RVcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0LXVzXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgSW52ZXN0aWdhdGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW52ZXN0aWdhdGlvbnNcIjtcblxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5cblxuXG5cblxuXG5cbmNvbnN0IEhvbWUgPSAoeyBhcnRpY2xlcywgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIGludmVzdGlnYXRpb25zLCBnbG9iYWwgfSkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKFwiZ2xvYmFsRGF0YVwiLCBnbG9iYWwuYXR0cmlidXRlcy5mb290ZXIpO1xuICBjb25zdCBmb290ZXJEYXRhID0gZ2xvYmFsLmF0dHJpYnV0ZXMuZm9vdGVyO1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgLy8gY29uc29sZS5sb2coXCJob21lUGFnZVByb3BzXCIsIGhvbWVwYWdlKTtcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyXCIsIGN0eC51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY3R4LnVzZXIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgICBjdHguc2V0VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xuICAgICBcbiAgICB9XG5cbiAgfSwgW10pXG5cblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwic2hvd01vZGFsXCIsIHNob3dNb2RhbCkgXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHNob3dNb2RhbD17c2V0U2hvd01vZGFsfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBmb290ZXI9e2Zvb3RlckRhdGF9PlxuICAgICAgPFNlbyBzZW89e2hvbWVwYWdlLmF0dHJpYnV0ZXMuc2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtOCBwci04IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIHB0LTggIFwiPlxuICAgICAgICAgICAgICA8SGVybyBoZXJvZGF0YT17aG9tZXBhZ2V9IC8+IFxuICAgICAgICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25DbG9zZT17c2V0U2hvd01vZGFsfS8+XG4gICAgICAgICAgICAgIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgIDxJbnZlc3RpZ2F0aW9ucyBpbnZlc3RpZ2F0aW9ucz17aW52ZXN0aWdhdGlvbnN9Lz5cbiAgICAgICAgICAgICAgPEFib3V0VXMgYWJvdXREYXRhPXtob21lcGFnZX0vPiBcbiAgICAgICAgICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgICBcblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuIFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbYXJ0aWNsZXNSZXMsIGNhdGVnb3JpZXNSZXMsIGhvbWVwYWdlUmVzLCBpbnZlc3RpZ2F0aW9uc1JlcywgZ2xvYmFsUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgXG4gICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiBcbiAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgICBwb3B1bGF0ZToge1xuICAgICAgICBoZXJvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICBhYm91dDogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICBcblxuICAgICAgICBzZW86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG5cbiAgICAgIH0sXG4gICAgICBcbiAgICB9KSxcbiAgICBmZXRjaEFQSShcIi9pbnZlc3RpZ2F0aW9uc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgICAgcG9wdWxhdGU6IHtcbiAgICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IGFydGljbGVzUmVzLmRhdGEsXG4gICAgICBpbnZlc3RpZ2F0aW9uczogaW52ZXN0aWdhdGlvbnNSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICAgZ2xvYmFsOiBnbG9iYWxSZXMuZGF0YSxcblxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9