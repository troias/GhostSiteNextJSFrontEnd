self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/footer.js",
    _this = undefined,
    _s = $RefreshSig$();








var Footer = function Footer(_ref) {
  _s();

  var footer = _ref.footer;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var isHome = router.pathname === '/';
  console.log("footerData", footer);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "uk-container border-t-2 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-text-center pb-8 pt-8 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-xl",
        children: data.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex justify-center mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: data.footer_social_links[0].url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineFacebook, {
            className: "text-2xl mr-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: data.footer_social_links[0].url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_6__.TiSocialTwitterCircular, {
            className: "text-2xl mr-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: data.footer_social_links[0].url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineYoutube, {
            className: "text-2xl mr-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: data.footer_social_links[0].url,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsInstagram, {
            className: "text-2xl mr-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "uk-text-center pb-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        className: "text-sm",
        children: data.copyright_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Footer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);
var getStaticProps = /*#__PURE__*/function () {
  var _ref2 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var footerRes;
    return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchAPI("/global", {
              populate: {
                footer: {
                  populate: "*"
                }
              }
            });

          case 2:
            footerRes = _context.sent;
            return _context.abrupt("return", {
              props: {
                footer: footerRes.data
              },
              revalidate: 1
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStaticProps() {
    return _ref2.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNIb21lIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJmb290ZXJfc29jaWFsX2xpbmtzIiwidXJsIiwiY29weXJpZ2h0X3RleHQiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoQVBJIiwicG9wdWxhdGUiLCJmb290ZXJSZXMiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUM1QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLFFBQVAsS0FBb0IsR0FBbkM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQk4sTUFBMUI7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLFNBQWI7QUFBQSxrQkFDRU8sSUFBSSxDQUFDQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBLGdDQUVFO0FBQUcsY0FBSSxFQUFFRCxJQUFJLENBQUNFLG1CQUFMLENBQXlCLENBQXpCLEVBQTRCQyxHQUFyQztBQUEwQyxnQkFBTSxFQUFDLFFBQWpEO0FBQTBELGFBQUcsRUFBQyxxQkFBOUQ7QUFBQSxpQ0FDRiw4REFBQyw2REFBRDtBQUFtQixxQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0U7QUFBRyxjQUFJLEVBQUVILElBQUksQ0FBQ0UsbUJBQUwsQ0FBeUIsQ0FBekIsRUFBNEJDLEdBQXJDO0FBQTBDLGdCQUFNLEVBQUMsUUFBakQ7QUFBMEQsYUFBRyxFQUFDLHFCQUE5RDtBQUFBLGlDQUNGLDhEQUFDLG1FQUFEO0FBQXlCLHFCQUFTLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFRRTtBQUFHLGNBQUksRUFBRUgsSUFBSSxDQUFDRSxtQkFBTCxDQUF5QixDQUF6QixFQUE0QkMsR0FBckM7QUFBMEMsZ0JBQU0sRUFBQyxRQUFqRDtBQUEwRCxhQUFHLEVBQUMscUJBQTlEO0FBQUEsaUNBQ0YsOERBQUMsNERBQUQ7QUFBa0IscUJBQVMsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVdFO0FBQUcsY0FBSSxFQUFFSCxJQUFJLENBQUNFLG1CQUFMLENBQXlCLENBQXpCLEVBQTRCQyxHQUFyQztBQUEwQyxnQkFBTSxFQUFDLFFBQWpEO0FBQTBELGFBQUcsRUFBQyxxQkFBOUQ7QUFBQSxpQ0FDRiw4REFBQyx1REFBRDtBQUFhLHFCQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUF1Qkk7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDQTtBQUFHLGlCQUFTLEVBQUMsU0FBYjtBQUFBLGtCQUNBSCxJQUFJLENBQUNJO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0F4Q0E7O0dBQU1aLE07VUFDVUcsa0Q7OztLQURWSCxNO0FBMENQLCtEQUFlQSxNQUFmO0FBRU8sSUFBTWEsY0FBYztBQUFBLDhUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0pDLFFBQVEsQ0FBQyxTQUFELEVBQVk7QUFDMUNDLHNCQUFRLEVBQUU7QUFDUmQsc0JBQU0sRUFBRTtBQUNOYywwQkFBUSxFQUFFO0FBREo7QUFEQTtBQURnQyxhQUFaLENBREo7O0FBQUE7QUFDdEJDLHFCQURzQjtBQUFBLDZDQVNyQjtBQUNMQyxtQkFBSyxFQUFFO0FBQ0xoQixzQkFBTSxFQUFFZSxTQUFTLENBQUNSO0FBRGIsZUFERjtBQUlMVSx3QkFBVSxFQUFFO0FBSlAsYUFUcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEwsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tzbHVnXS42NTI3MmVmYjRhNzQ1MzQ4MjMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCc0luc3RhZ3JhbX0gIGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHtBaU91dGxpbmVGYWNlYm9va30gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQge1RpU29jaWFsVHdpdHRlckNpcmN1bGFyfSBmcm9tICdyZWFjdC1pY29ucy90aSdcbmltcG9ydCB7QWlPdXRsaW5lWW91dHViZX0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuIGNvbnN0IEZvb3RlciA9ICh7Zm9vdGVyfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBpc0hvbWUgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvJ1xuICBjb25zb2xlLmxvZyhcImZvb3RlckRhdGFcIiwgZm9vdGVyKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgYm9yZGVyLXQtMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciBwYi04IHB0LTggXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICB7ZGF0YS5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxuXG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLmZvb3Rlcl9zb2NpYWxfbGlua3NbMF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIGNsYXNzTmFtZT1cInRleHQtMnhsIG1yLTRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5mb290ZXJfc29jaWFsX2xpbmtzWzBdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxUaVNvY2lhbFR3aXR0ZXJDaXJjdWxhciBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8QWlPdXRsaW5lWW91dHViZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtci00XCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuZm9vdGVyX3NvY2lhbF9saW5rc1swXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8QnNJbnN0YWdyYW0gY2xhc3NOYW1lPVwidGV4dC0yeGwgbXItNFwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciBwYi00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICB7ZGF0YS5jb3B5cmlnaHRfdGV4dH1cbiAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmb290ZXJSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgIHBvcHVsYXRlOiB7XG4gICAgICBmb290ZXI6IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZm9vdGVyOiBmb290ZXJSZXMuZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=