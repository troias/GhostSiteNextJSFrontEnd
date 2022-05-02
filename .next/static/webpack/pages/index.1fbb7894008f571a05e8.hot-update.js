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
        lineNumber: 23,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8 md:flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: about.info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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
                lineNumber: 40,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[1].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineFacebook, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[2].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiSocialTwitterCircular, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: about.social_links[3].url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineYoutube, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(AboutUs, "/dMy7t63NXD4eYACoT93CePwGrg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC11cy5qcyJdLCJuYW1lcyI6WyJBYm91dFVzIiwiYWJvdXREYXRhIiwiYWJvdXQiLCJhdHRyaWJ1dGVzIiwiY3R4IiwidXNlQ29udGV4dCIsIlNjcm9sbENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29jaWFsX2xpbmtzIiwidXJsIiwiYWJvdXRSZWYiLCJ0aXRsZSIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0MsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBaUI7QUFBQTs7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFBQSxNQUN4QkMsS0FEd0IsR0FDZkQsU0FBUyxDQUFDRSxVQURLLENBQ3hCRCxLQUR3QjtBQUUvQixNQUFNRSxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLGlFQUFELENBQXRCO0FBS0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLEtBQUssQ0FBQ08sWUFBTixDQUFtQixDQUFuQixFQUFzQkMsR0FBNUM7QUFJQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxRQUFaO0FBQXFCLE9BQUcsRUFBRU4sR0FBRyxDQUFDTyxRQUE5QjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLGdCQUFkO0FBQUEsa0JBQ0dULEtBQUssQ0FBQ1U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFJQTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUdBO0FBQUEsc0JBQ0FWLEtBQUssQ0FBQ1c7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyx3REFBZjtBQUFBLGlDQUVBO0FBQUsscUJBQVMsRUFBQyx5REFBZjtBQUFBLG9DQUdJO0FBQUcsa0JBQUksRUFBRVgsS0FBSyxDQUFDTyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFxQyxpQkFBRyxFQUFDLHFCQUF6QztBQUFBLHFDQUNJLDhEQUFDLHVEQUFEO0FBQWEsb0JBQUksRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQU1RO0FBQUcsa0JBQUksRUFBRVIsS0FBSyxDQUFDTyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0EsOERBQUMsNkRBQUQ7QUFBbUIsb0JBQUksRUFBRTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOUixlQVNTO0FBQUcsa0JBQUksRUFBRVIsS0FBSyxDQUFDTyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0QsOERBQUMsbUVBQUQ7QUFBeUIsb0JBQUksRUFBRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUVCxlQVlTO0FBQUcsa0JBQUksRUFBRVIsS0FBSyxDQUFDTyxZQUFOLENBQW1CLENBQW5CLEVBQXNCQyxHQUEvQjtBQUFvQyxvQkFBTSxFQUFDLFFBQTNDO0FBQW9ELGlCQUFHLEVBQUMscUJBQXhEO0FBQUEscUNBQ0QsOERBQUMsNERBQUQ7QUFBa0Isb0JBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQWxEQTs7R0FBTVYsTzs7S0FBQUEsTztBQW9EUCwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZmJiNzg5NDAwOGY1NzFhMDVlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dCdcbmltcG9ydCB7QnNJbnN0YWdyYW19ICBmcm9tICdyZWFjdC1pY29ucy9icydcbmltcG9ydCB7QWlPdXRsaW5lRmFjZWJvb2t9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHtUaVNvY2lhbFR3aXR0ZXJDaXJjdWxhcn0gZnJvbSAncmVhY3QtaWNvbnMvdGknXG5pbXBvcnQge0FpT3V0bGluZVlvdXR1YmV9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuXG5cbiBjb25zdCBBYm91dFVzID0gKHthYm91dERhdGF9KSA9PiB7XG4gICBjb25zdCB7YWJvdXR9ID0gYWJvdXREYXRhLmF0dHJpYnV0ZXNcbiAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU2Nyb2xsQ29udGV4dCk7XG4gIFxuXG4gIFxuXG4gIGNvbnNvbGUubG9nKFwic29jaWFsXCIsIGFib3V0LnNvY2lhbF9saW5rc1swXS51cmwpO1xuXG4gXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNBYm91dFwiIHJlZj17Y3R4LmFib3V0UmVmfSA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHQgIGJvcmRlci10LTIgXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHB0LTggXCI+XG4gICAgICB7YWJvdXQudGl0bGV9XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOCBtZDpmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxuXG4gICAgXG4gICAgICA8cD5cbiAgICAge2Fib3V0LmluZm99XG4gICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnZpc2libGUgbWQ6dy0xLzIgbWQ6cGwtOCBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciAgdy1mdWxsIGZsZXgganVzdGlmeS1hcm91bmQgbWQ6dy0yLzMgcC04XCI+XG4gICAgICAgXG5cbiAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbMF0udXJsfSAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8QnNJbnN0YWdyYW0gc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Fib3V0LnNvY2lhbF9saW5rc1sxXS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICA8YSBocmVmPXthYm91dC5zb2NpYWxfbGlua3NbMl0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxUaVNvY2lhbFR3aXR0ZXJDaXJjdWxhciBzaXplPXs1MH0vPlxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgPGEgaHJlZj17YWJvdXQuc29jaWFsX2xpbmtzWzNdLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lWW91dHViZSBzaXplPXs1MH0vPlxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gIFxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=