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
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/about-us.js",
    _this = undefined,
    _s = $RefreshSig$();








var AboutUs = function AboutUs(_ref) {
  _s();

  var aboutData = _ref.aboutData;
  var about = aboutData.attributes.about;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_2__.ScrollContext);
  console.log("social", about.social_links[0].url);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (scrollCtx.aboutRef.current) {
      if (router.asPath === "/#About") {
        scrollCtx.contactRef.current.scrollIntoView({
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsInstagram, {
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineFacebook, {
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiSocialTwitterCircular, {
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineYoutube, {
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

_s(AboutUs, "tJQtUCnOfpeQOsuC4fjNnBqBIQE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC11cy5qcyJdLCJuYW1lcyI6WyJBYm91dFVzIiwiYWJvdXREYXRhIiwiYWJvdXQiLCJhdHRyaWJ1dGVzIiwiY3R4IiwidXNlQ29udGV4dCIsIlNjcm9sbENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29jaWFsX2xpbmtzIiwidXJsIiwidXNlRWZmZWN0Iiwic2Nyb2xsQ3R4IiwiYWJvdXRSZWYiLCJjdXJyZW50Iiwicm91dGVyIiwiYXNQYXRoIiwiY29udGFjdFJlZiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpdGxlIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUFBLE1BQ3hCQyxLQUR3QixHQUNmRCxTQUFTLENBQUNFLFVBREssQ0FDeEJELEtBRHdCO0FBRS9CLE1BQU1FLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FBdEI7QUFLREMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQk4sS0FBSyxDQUFDTyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUE1QztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFFZCxRQUFJQyxTQUFTLENBQUNDLFFBQVYsQ0FBbUJDLE9BQXZCLEVBQWdDO0FBQzlCLFVBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixTQUF0QixFQUFpQztBQUVqQ0osaUJBQVMsQ0FBQ0ssVUFBVixDQUFxQkgsT0FBckIsQ0FBNkJJLGNBQTdCLENBQTRDO0FBQzFDQyxrQkFBUSxFQUFFLFFBRGdDO0FBRTFDQyxlQUFLLEVBQUU7QUFGbUMsU0FBNUM7QUFJRDtBQUVBO0FBS0YsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQW1CQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLE9BQUcsRUFBRWhCLEdBQUcsQ0FBQ1MsUUFBOUI7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBLGtCQUNHWCxLQUFLLENBQUNtQjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBR0E7QUFBQSxzQkFDQW5CLEtBQUssQ0FBQ29CO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUMsd0RBQWY7QUFBQSxpQ0FFQTtBQUFLLHFCQUFTLEVBQUMseURBQWY7QUFBQSxvQ0FHSTtBQUFHLGtCQUFJLEVBQUVwQixLQUFLLENBQUNPLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQS9CO0FBQXFDLGlCQUFHLEVBQUMscUJBQXpDO0FBQUEscUNBQ0ksOERBQUMsdURBQUQ7QUFBYSxvQkFBSSxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBTVE7QUFBRyxrQkFBSSxFQUFFUixLQUFLLENBQUNPLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQS9CO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBQSxxQ0FDQSw4REFBQyw2REFBRDtBQUFtQixvQkFBSSxFQUFFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5SLGVBU1M7QUFBRyxrQkFBSSxFQUFFUixLQUFLLENBQUNPLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQS9CO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBQSxxQ0FDRCw4REFBQyxtRUFBRDtBQUF5QixvQkFBSSxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRULGVBWVM7QUFBRyxrQkFBSSxFQUFFUixLQUFLLENBQUNPLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQS9CO0FBQW9DLG9CQUFNLEVBQUMsUUFBM0M7QUFBb0QsaUJBQUcsRUFBQyxxQkFBeEQ7QUFBQSxxQ0FDRCw4REFBQyw0REFBRDtBQUFrQixvQkFBSSxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBbkVBOztHQUFNVixPOztLQUFBQSxPO0FBcUVQLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlYjE4MDZjZDMyMmI5YTRmMTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JvbGxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zY3JvbGxDb250ZXh0J1xuaW1wb3J0IHtCc0luc3RhZ3JhbX0gIGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHtBaU91dGxpbmVGYWNlYm9va30gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQge1RpU29jaWFsVHdpdHRlckNpcmN1bGFyfSBmcm9tICdyZWFjdC1pY29ucy90aSdcbmltcG9ydCB7QWlPdXRsaW5lWW91dHViZX0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5cblxuIGNvbnN0IEFib3V0VXMgPSAoe2Fib3V0RGF0YX0pID0+IHtcbiAgIGNvbnN0IHthYm91dH0gPSBhYm91dERhdGEuYXR0cmlidXRlc1xuICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgXG5cbiAgXG5cbiAgY29uc29sZS5sb2coXCJzb2NpYWxcIiwgYWJvdXQuc29jaWFsX2xpbmtzWzBdLnVybCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBcbiAgICBpZiAoc2Nyb2xsQ3R4LmFib3V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSBcIi8jQWJvdXRcIikge1xuICBcbiAgICAgIHNjcm9sbEN0eC5jb250YWN0UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwic3RhcnRcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgfVxuXG4gICBcblxuXG4gIH0sIFtdKTtcbiBcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI0Fib3V0XCIgcmVmPXtjdHguYWJvdXRSZWZ9ID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdCAgYm9yZGVyLXQtMiBcIj5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgcHQtOCBcIj5cbiAgICAgIHthYm91dC50aXRsZX1cbiAgICA8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04IG1kOmZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XG5cbiAgICBcbiAgICAgIDxwPlxuICAgICB7YWJvdXQuaW5mb31cbiAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dmlzaWJsZSBtZDp3LTEvMiBtZDpwbC04IG1kOmZsZXggbWQ6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRleHQtY2VudGVyICB3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBtZDp3LTIvMyBwLThcIj5cbiAgICAgICBcblxuICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1swXS51cmx9ICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxCc0luc3RhZ3JhbSBzaXplPXs1MH0vPlxuICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YWJvdXQuc29jaWFsX2xpbmtzWzFdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1syXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPFRpU29jaWFsVHdpdHRlckNpcmN1bGFyIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbM10udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVZb3V0dWJlIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==