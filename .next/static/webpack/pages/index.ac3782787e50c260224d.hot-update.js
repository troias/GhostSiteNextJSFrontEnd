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
  console.log("social", about.social_links[0].url);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (ctx.aboutRef.current) {
      if (router.asPath === "/#About") {
        ctx.contactRef.current.scrollIntoView({
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
        lineNumber: 40,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8 md:flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: about.info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
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
                lineNumber: 57,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[1].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineFacebook, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[2].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_6__.TiSocialTwitterCircular, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[3].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineYoutube, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC11cy5qcyJdLCJuYW1lcyI6WyJBYm91dFVzIiwiYWJvdXREYXRhIiwiYWJvdXQiLCJhdHRyaWJ1dGVzIiwiY3R4IiwidXNlQ29udGV4dCIsIlNjcm9sbENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic29jaWFsX2xpbmtzIiwidXJsIiwidXNlRWZmZWN0IiwiYWJvdXRSZWYiLCJjdXJyZW50IiwiYXNQYXRoIiwiY29udGFjdFJlZiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpdGxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQTs7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFBQSxNQUN4QkMsS0FEd0IsR0FDZkQsU0FBUyxDQUFDRSxVQURLLENBQ3hCRCxLQUR3QjtBQUUvQixNQUFNRSxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLGlFQUFELENBQXRCO0FBRUMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUdGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUixLQUFLLENBQUNTLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQTVDO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlULEdBQUcsQ0FBQ1UsUUFBSixDQUFhQyxPQUFqQixFQUEwQjtBQUN4QixVQUFJUixNQUFNLENBQUNTLE1BQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFFL0JaLFdBQUcsQ0FBQ2EsVUFBSixDQUFlRixPQUFmLENBQXVCRyxjQUF2QixDQUFzQztBQUN0Q0Msa0JBQVEsRUFBRSxRQUQ0QjtBQUV0Q0MsZUFBSyxFQUFFO0FBRitCLFNBQXRDO0FBSUg7QUFFQTtBQUtGLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFtQkEsc0JBQ0U7QUFBUyxNQUFFLEVBQUMsUUFBWjtBQUFxQixPQUFHLEVBQUVoQixHQUFHLENBQUNVLFFBQTlCO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw4QkFDQTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFDR1osS0FBSyxDQUFDbUI7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFJQTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUdBO0FBQUEsc0JBQ0FuQixLQUFLLENBQUNvQjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLHdEQUFmO0FBQUEsaUNBRUE7QUFBSyxxQkFBUyxFQUFDLHlEQUFmO0FBQUEsb0NBR0k7QUFBRyxrQkFBSSxFQUFFcEIsS0FBSyxDQUFDUyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFxQyxpQkFBRyxFQUFDLHFCQUF6QztBQUFBLHFDQUNJLDhEQUFDLHVEQUFEO0FBQWEsb0JBQUksRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQU1RO0FBQUcsa0JBQUksRUFBRVYsS0FBSyxDQUFDUyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0EsOERBQUMsNkRBQUQ7QUFBbUIsb0JBQUksRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOUixlQVNTO0FBQUcsa0JBQUksRUFBRVYsS0FBSyxDQUFDUyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0QsOERBQUMsbUVBQUQ7QUFBeUIsb0JBQUksRUFBRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUVCxlQVlTO0FBQUcsa0JBQUksRUFBRVYsS0FBSyxDQUFDUyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0QsOERBQUMsNERBQUQ7QUFBa0Isb0JBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQW5FQTs7R0FBTVosTztVQUlZUSxrRDs7O0tBSlpSLE87QUFxRVAsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWMzNzgyNzg3ZTUwYzI2MDIyNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNjcm9sbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3Njcm9sbENvbnRleHQnXG5pbXBvcnQge0JzSW5zdGFncmFtfSAgZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5pbXBvcnQge0FpT3V0bGluZUZhY2Vib29rfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXJ9IGZyb20gJ3JlYWN0LWljb25zL3RpJ1xuaW1wb3J0IHtBaU91dGxpbmVZb3V0dWJlfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4gY29uc3QgQWJvdXRVcyA9ICh7YWJvdXREYXRhfSkgPT4ge1xuICAgY29uc3Qge2Fib3V0fSA9IGFib3V0RGF0YS5hdHRyaWJ1dGVzXG4gICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG5cbiAgY29uc29sZS5sb2coXCJzb2NpYWxcIiwgYWJvdXQuc29jaWFsX2xpbmtzWzBdLnVybCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBcbiAgICBpZiAoY3R4LmFib3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSBcIi8jQWJvdXRcIikge1xuICBcbiAgICAgICAgY3R4LmNvbnRhY3RSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB9XG5cbiAgIFxuXG5cbiAgfSwgW10pO1xuIFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjQWJvdXRcIiByZWY9e2N0eC5hYm91dFJlZn0gPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0ICBib3JkZXItdC0yIFwiPlxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBwdC04IFwiPlxuICAgICAge2Fib3V0LnRpdGxlfVxuICAgIDwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLTggbWQ6ZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cblxuICAgIFxuICAgICAgPHA+XG4gICAgIHthYm91dC5pbmZvfVxuICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp2aXNpYmxlIG1kOnctMS8yIG1kOnBsLTggbWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGV4dC1jZW50ZXIgIHctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIG1kOnctMi8zIHAtOFwiPlxuICAgICAgIFxuXG4gICAgICAgICAgPGEgaHJlZj17YWJvdXQuc29jaWFsX2xpbmtzWzBdLnVybH0gIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPEJzSW5zdGFncmFtIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbMV0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9vayBzaXplPXs1MH0vPlxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgPGEgaHJlZj17YWJvdXQuc29jaWFsX2xpbmtzWzJdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXIgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1szXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVlvdXR1YmUgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzXG4iXSwic291cmNlUm9vdCI6IiJ9