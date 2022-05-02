self["webpackHotUpdate_N_E"]("pages/investigation/[slug]",{

/***/ "./pages/investigation/[slug].js":
/*!***************************************!*\
  !*** ./pages/investigation/[slug].js ***!
  \***************************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/pages/investigation/[slug].js",
    _this = undefined;









var Investigation = function Investigation(_ref) {
  var investigation = _ref.investigation,
      categories = _ref.categories;
  var seo = {
    metaTitle: investigation.attributes.title,
    metaDescription: investigation.attributes.description,
    shareImage: investigation.attributes.image,
    investigation: true
  };
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_7__.getStrapiMedia)(investigation.attributes.image); // console.log("investigation", investigation);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "banner",
      className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
      "data-src": imageUrl,
      "data-srcset": imageUrl,
      "data-uk-img": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
        seo: seo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 8
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: investigation.attributes.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-container uk-container-small",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {
          source: investigation.attributes.info,
          escapeHtml: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "uk-divider-small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-grid-small uk-flex-left",
          "data-uk-grid": "true",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-expand",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "uk-margin-remove-bottom",
              children: "By TheNobodies"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "uk-text-meta uk-margin-remove-top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), {
                format: "MMM Do YYYY",
                children: investigation.attributes.published_at
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = Investigation;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Investigation);

var _c;

$RefreshReg$(_c, "Investigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW52ZXN0aWdhdGlvbi9bc2x1Z10uanMiXSwibmFtZXMiOlsiSW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRpb24iLCJjYXRlZ29yaWVzIiwic2VvIiwibWV0YVRpdGxlIiwiYXR0cmlidXRlcyIsInRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwiaW1hZ2UiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiaW5mbyIsInB1Ymxpc2hlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlDO0FBQUEsTUFBL0JDLGFBQStCLFFBQS9CQSxhQUErQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFFdEQsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLGFBQVMsRUFBRUgsYUFBYSxDQUFDSSxVQUFkLENBQXlCQyxLQUQxQjtBQUVWQyxtQkFBZSxFQUFFTixhQUFhLENBQUNJLFVBQWQsQ0FBeUJHLFdBRmhDO0FBR1ZDLGNBQVUsRUFBRVIsYUFBYSxDQUFDSSxVQUFkLENBQXlCSyxLQUgzQjtBQUlWVCxpQkFBYSxFQUFFO0FBSkwsR0FBWjtBQU1BLE1BQU1VLFFBQVEsR0FBR0MsMERBQWMsQ0FBQ1gsYUFBYSxDQUFDSSxVQUFkLENBQXlCSyxLQUExQixDQUEvQixDQVJzRCxDQVV0RDs7QUFDQSxzQkFFRTtBQUFBLDRCQUNBO0FBQ0UsUUFBRSxFQUFDLFFBREw7QUFFRSxlQUFTLEVBQUMsMEdBRlo7QUFHRSxrQkFBVUMsUUFIWjtBQUlFLHFCQUFhQSxRQUpmO0FBS0UseUJBTEY7QUFBQSw4QkFPRyw4REFBQyxvREFBRDtBQUFLLFdBQUcsRUFBRVI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEgsZUFRRTtBQUFBLGtCQUFLRixhQUFhLENBQUNJLFVBQWQsQ0FBeUJDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVdBO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUNFLGdCQUFNLEVBQUVMLGFBQWEsQ0FBQ0ksVUFBZCxDQUF5QlEsSUFEbkM7QUFFRSxvQkFBVSxFQUFFO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBNEMsMEJBQWEsTUFBekQ7QUFBQSxpQ0FFRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDRTtBQUFHLHVCQUFTLEVBQUMseUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLHVCQUFTLEVBQUMsbUNBQWI7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFRLHNCQUFNLEVBQUMsYUFBZjtBQUFBLDBCQUNHWixhQUFhLENBQUNJLFVBQWQsQ0FBeUJTO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhBO0FBQUEsa0JBRkY7QUFzQ0QsQ0FqREE7O0tBQU1kLGE7O0FBbURQLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludmVzdGlnYXRpb24vW3NsdWddLjdkNTBjNGIzYzRjNmQxZDI0ZDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50J1xuaW1wb3J0IE5leHRJbWFnZSAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZSdcbmltcG9ydCBTZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZW8nXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gJy4uLy4uL2xpYi9tZWRpYSdcblxuIGNvbnN0IEludmVzdGlnYXRpb24gPSAoe2ludmVzdGlnYXRpb24sIGNhdGVnb3JpZXN9KSA9PiB7XG5cbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogaW52ZXN0aWdhdGlvbi5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogaW52ZXN0aWdhdGlvbi5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uLFxuICAgIHNoYXJlSW1hZ2U6IGludmVzdGlnYXRpb24uYXR0cmlidXRlcy5pbWFnZSxcbiAgICBpbnZlc3RpZ2F0aW9uOiB0cnVlLFxuICB9XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoaW52ZXN0aWdhdGlvbi5hdHRyaWJ1dGVzLmltYWdlKVxuXG4gIC8vIGNvbnNvbGUubG9nKFwiaW52ZXN0aWdhdGlvblwiLCBpbnZlc3RpZ2F0aW9uKTtcbiAgcmV0dXJuIChcbiAgIFxuICAgIDw+IFxuICAgIDxkaXZcbiAgICAgIGlkPVwiYmFubmVyXCJcbiAgICAgIGNsYXNzTmFtZT1cInVrLWhlaWdodC1tZWRpdW0gdWstZmxleCB1ay1mbGV4LWNlbnRlciB1ay1mbGV4LW1pZGRsZSB1ay1iYWNrZ3JvdW5kLWNvdmVyIHVrLWxpZ2h0IHVrLXBhZGRpbmcgdWstbWFyZ2luXCJcbiAgICAgIGRhdGEtc3JjPXtpbWFnZVVybH1cbiAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cbiAgICAgIGRhdGEtdWstaW1nXG4gICAgPlxuICAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8aDE+e2ludmVzdGlnYXRpb24uYXR0cmlidXRlcy50aXRsZX08L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsXCI+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgc291cmNlPXtpbnZlc3RpZ2F0aW9uLmF0dHJpYnV0ZXMuaW5mb31cbiAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWRpdmlkZXItc21hbGxcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC1leHBhbmRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXCI+XG4gICAgICAgICAgICAgIEJ5IFRoZU5vYm9kaWVzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cbiAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPlxuICAgICAgICAgICAgICAgIHtpbnZlc3RpZ2F0aW9uLmF0dHJpYnV0ZXMucHVibGlzaGVkX2F0fVxuICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0aWdhdGlvblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGludmVzdGlnYXRpb25SZXMgPSBhd2FpdCBmZXRjaEFQSSgnL2ludmVzdGlnYXRpb25zJywge1xuICAgIGZpZWxkczogWydzbHVnJ11cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogaW52ZXN0aWdhdGlvblJlcy5kYXRhLm1hcChpbnZlc3RpZ2F0aW9uID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogaW52ZXN0aWdhdGlvbi5hdHRyaWJ1dGVzLnNsdWdcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAvLyBjb25zdCBpbnZlc3RpZ2F0aW9uID0gYXdhaXQgZmV0Y2hBUEkoYC9pbnZlc3RpZ2F0aW9ucy8ke3BhcmFtcy5zbHVnfWApXG4gIC8vIHJldHVybiB7IHByb3BzOiB7IGludmVzdGlnYXRpb24gfSB9XG4gIGNvbnN0IGludmVzdGlnYXRpb25SZXMgPSBhd2FpdCBmZXRjaEFQSSgnL2ludmVzdGlnYXRpb25zJywge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnXG4gICAgfSxcbiAgICBwb3B1bGF0ZTogJyonXG4gIH0pXG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSSgnL2NhdGVnb3JpZXMnKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbnZlc3RpZ2F0aW9uOiBpbnZlc3RpZ2F0aW9uUmVzLmRhdGFbMF0sXG4gICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH1cblxuXG5cbiAgXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9