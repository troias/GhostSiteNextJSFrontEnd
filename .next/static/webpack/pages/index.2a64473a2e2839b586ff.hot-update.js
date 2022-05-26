self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/about-us.js":
/*!********************************!*\
  !*** ./components/about-us.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_scrollContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/scrollContext */ "./context/scrollContext.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/about-us.js",
    _this = undefined,
    _s = $RefreshSig$();










var AboutUs = function AboutUs(_ref) {
  _s();

  var aboutData = _ref.aboutData;
  var about = aboutData.attributes.about;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_2__.ScrollContext);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  console.log("social", about.social_links);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (ctx.aboutRef.current) {
      if (router.asPath === "/#About") {
        ctx.aboutRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "#About",
    ref: ctx.aboutRef,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default  border-t-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl pt-8 ",
        children: about.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8 md:flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: about.info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:visible md:w-1/2 md:pl-8 md:flex md:justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-text-center  w-full flex justify-around md:w-2/3 p-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[0].url,
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsInstagram, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[1].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineFacebook, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[2].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_6__.TiSocialTwitterCircular, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[3].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineYoutube, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[4].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.RiMessengerLine, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(AboutUs, "NOpl0krgOKKJ6lEHRfQnYjcJtYA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = AboutUs;
/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

var _c;

$RefreshReg$(_c, "AboutUs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC11cy5qcyJdLCJuYW1lcyI6WyJBYm91dFVzIiwiYWJvdXREYXRhIiwiYWJvdXQiLCJhdHRyaWJ1dGVzIiwiY3R4IiwidXNlQ29udGV4dCIsIlNjcm9sbENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic29jaWFsX2xpbmtzIiwidXNlRWZmZWN0IiwiYWJvdXRSZWYiLCJjdXJyZW50IiwiYXNQYXRoIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwidGl0bGUiLCJpbmZvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUFBLE1BQ3hCQyxLQUR3QixHQUNmRCxTQUFTLENBQUNFLFVBREssQ0FDeEJELEtBRHdCO0FBRS9CLE1BQU1FLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FBdEI7QUFFQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBR0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JSLEtBQUssQ0FBQ1MsWUFBNUI7QUFFREMsa0RBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBSVIsR0FBRyxDQUFDUyxRQUFKLENBQWFDLE9BQWpCLEVBQTBCO0FBQ3hCLFVBQUlQLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQixTQUF0QixFQUFpQztBQUUvQlgsV0FBRyxDQUFDUyxRQUFKLENBQWFDLE9BQWIsQ0FBcUJFLGNBQXJCLENBQW9DO0FBQ3BDQyxrQkFBUSxFQUFFLFFBRDBCO0FBRXBDQyxlQUFLLEVBQUU7QUFGNkIsU0FBcEM7QUFJSDtBQUVBO0FBS0YsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQW1CQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLE9BQUcsRUFBRWQsR0FBRyxDQUFDUyxRQUE5QjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLGdCQUFkO0FBQUEsa0JBQ0dYLEtBQUssQ0FBQ2lCO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBSUE7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FHQTtBQUFBLHNCQUNBakIsS0FBSyxDQUFDa0I7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyx3REFBZjtBQUFBLGlDQUVBO0FBQUsscUJBQVMsRUFBQyx5REFBZjtBQUFBLG9DQUdJO0FBQUcsa0JBQUksRUFBRWxCLEtBQUssQ0FBQ1MsWUFBTixDQUFtQixDQUFuQixFQUFzQlUsR0FBL0I7QUFBcUMsaUJBQUcsRUFBQyxxQkFBekM7QUFBQSxxQ0FDSSw4REFBQyx1REFBRDtBQUFhLG9CQUFJLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFNUTtBQUFHLGtCQUFJLEVBQUVuQixLQUFLLENBQUNTLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JVLEdBQS9CO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBQSxxQ0FDQSw4REFBQyw2REFBRDtBQUFtQixvQkFBSSxFQUFFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5SLGVBU1M7QUFBRyxrQkFBSSxFQUFFbkIsS0FBSyxDQUFDUyxZQUFOLENBQW1CLENBQW5CLEVBQXNCVSxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0QsOERBQUMsbUVBQUQ7QUFBeUIsb0JBQUksRUFBRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUVCxlQVlTO0FBQUcsa0JBQUksRUFBRW5CLEtBQUssQ0FBQ1MsWUFBTixDQUFtQixDQUFuQixFQUFzQlUsR0FBL0I7QUFBb0Msb0JBQU0sRUFBQyxRQUEzQztBQUFvRCxpQkFBRyxFQUFDLHFCQUF4RDtBQUFBLHFDQUNELDhEQUFDLDREQUFEO0FBQWtCLG9CQUFJLEVBQUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWlQsZUFlUztBQUFHLGtCQUFJLEVBQUVuQixLQUFLLENBQUNTLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JVLEdBQS9CO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBQSxxQ0FDRCw4REFBQywyREFBRDtBQUFpQixvQkFBSSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBdEVBOztHQUFNckIsTztVQUlZUSxrRDs7O0tBSlpSLE87QUF3RVAsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE2NDQ3M2EyZTI4MzliNTg2ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcm9sbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3Njcm9sbENvbnRleHQnXG5pbXBvcnQge0JzSW5zdGFncmFtfSAgZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQge0FpT3V0bGluZUZhY2Vib29rfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXJ9IGZyb20gJ3JlYWN0LWljb25zL3RpJ1xuaW1wb3J0IHtBaU91dGxpbmVZb3V0dWJlfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7UmlNZXNzZW5nZXJMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4gY29uc3QgQWJvdXRVcyA9ICh7YWJvdXREYXRhfSkgPT4ge1xuICAgY29uc3Qge2Fib3V0fSA9IGFib3V0RGF0YS5hdHRyaWJ1dGVzXG4gICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG5cbiAgIGNvbnNvbGUubG9nKFwic29jaWFsXCIsIGFib3V0LnNvY2lhbF9saW5rcyk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBcbiAgICBpZiAoY3R4LmFib3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSBcIi8jQWJvdXRcIikge1xuICBcbiAgICAgICAgY3R4LmFib3V0UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwic3RhcnRcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgfVxuXG4gICBcblxuXG4gIH0sIFtdKTtcbiBcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI0Fib3V0XCIgcmVmPXtjdHguYWJvdXRSZWZ9ID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdCAgYm9yZGVyLXQtMiBcIj5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgcHQtOCBcIj5cbiAgICAgIHthYm91dC50aXRsZX1cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04IG1kOmZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XG5cbiAgICBcbiAgICAgIDxwPlxuICAgICB7YWJvdXQuaW5mb31cbiAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dmlzaWJsZSBtZDp3LTEvMiBtZDpwbC04IG1kOmZsZXggbWQ6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRleHQtY2VudGVyICB3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBtZDp3LTIvMyBwLThcIj5cbiAgICAgICBcblxuICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1swXS51cmx9ICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxCc0luc3RhZ3JhbSBzaXplPXs1MH0vPlxuICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YWJvdXQuc29jaWFsX2xpbmtzWzFdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1syXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPFRpU29jaWFsVHdpdHRlckNpcmN1bGFyIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbM10udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVZb3V0dWJlIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbNF0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxSaU1lc3NlbmdlckxpbmUgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzXG4iXSwic291cmNlUm9vdCI6IiJ9