self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/contact-us.js":
/*!**********************************!*\
  !*** ./components/contact-us.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();





var ContactUs = function ContactUs(props) {
  _s();

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      name: '',
      reason: '',
      message: '',
      file: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        var formData, response, data;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("contactFormValues", values);
                formData = new FormData();
                formData.append('name', values.name);
                formData.append('reason', values.reason);
                formData.append('info', values.message);
                formData.append('media', values.file); // console.log("formData", formData);
                // formData.forEach((value, key) => {
                //   console.log("key", key);
                //   console.log("value", value);
                // }
                // )

                _context.next = 8;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  body: {
                    data: {
                      name: values.name,
                      reason: values.reason,
                      info: values.message
                    }
                  }
                });

              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.json();

              case 11:
                data = _context.sent;
                console.log("data", data);

                if (data.success) {
                  alert("Your message has been sent successfully");
                } else {
                  alert("Something went wrong");
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "#contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: formik.handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
            className: "uk-fieldset pt-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-margin",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                className: "uk-input",
                type: "text",
                placeholder: "Name",
                name: "name",
                id: "name",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-margin",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                className: "uk-select",
                name: "reason",
                id: "reason",
                value: formik.values.reason,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: "",
                  children: "Select a reason"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-margin",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                className: "uk-textarea",
                rows: "5",
                id: "message",
                placeholder: "Message",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    ref: fileRef,
                    id: "file",
                    type: "file",
                    onChange: function onChange(e) {
                      return formik.setFieldValue('file', e.target.files[0]);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  id: "remove",
                  className: "btn fileupload-exists",
                  "data-dismiss": "fileupload",
                  onClick: function onClick(e) {
                    return document.getElementById('file').value = null;
                  },
                  children: "Remove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "UfULErMI1ISvtctWwbQTk6Hg5Cg=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_4__.useFormik];
});

_c = ContactUs;
/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

var _c;

$RefreshReg$(_c, "ContactUs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiZmlsZVJlZiIsInVzZVJlZiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwicmVhc29uIiwibWVzc2FnZSIsImZpbGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImluZm8iLCJyZXNwb25zZSIsImpzb24iLCJzdWNjZXNzIiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyIsImUiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUYyQixDQUczQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDdkJDLGlCQUFhLEVBQUU7QUFDYkMsVUFBSSxFQUFFLEVBRE87QUFFYkMsWUFBTSxFQUFFLEVBRks7QUFHYkMsYUFBTyxFQUFFLEVBSEk7QUFJYkMsVUFBSSxFQUFFO0FBSk8sS0FEUTtBQU92QkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDM0JMLFVBQUksRUFBRUssdUNBQUEsR0FDSEMsUUFERyxDQUNNLFVBRE4sQ0FEcUI7QUFHM0I7QUFDQTtBQUNBSixhQUFPLEVBQUVHLHVDQUFBLEdBQ05DLFFBRE0sQ0FDRyxVQURIO0FBTGtCLEtBQVgsQ0FQSztBQWV2QkMsWUFBUTtBQUFBLHNVQUFFLGlCQUFNQyxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLE1BQWpDO0FBRU1HLHdCQUhFLEdBR1MsSUFBSUMsUUFBSixFQUhUO0FBSVJELHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JMLE1BQU0sQ0FBQ1IsSUFBL0I7QUFDQVcsd0JBQVEsQ0FBQ0UsTUFBVCxDQUFnQixRQUFoQixFQUEwQkwsTUFBTSxDQUFDUCxNQUFqQztBQUNBVSx3QkFBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCTCxNQUFNLENBQUNOLE9BQS9CO0FBQ0FTLHdCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJMLE1BQU0sQ0FBQ0wsSUFBaEMsRUFQUSxDQVFSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFiUTtBQUFBLHVCQWdCZVcsS0FBSyxDQUFDLGlEQUFELEVBQW9EO0FBQzlFQyx3QkFBTSxFQUFFLE1BRHNFO0FBRzlFQyxzQkFBSSxFQUFFO0FBQ0pDLHdCQUFJLEVBQUU7QUFDSmpCLDBCQUFJLEVBQUVRLE1BQU0sQ0FBQ1IsSUFEVDtBQUVKQyw0QkFBTSxFQUFFTyxNQUFNLENBQUNQLE1BRlg7QUFHSmlCLDBCQUFJLEVBQUVWLE1BQU0sQ0FBQ047QUFIVDtBQURGO0FBSHdFLGlCQUFwRCxDQWhCcEI7O0FBQUE7QUFnQkZpQix3QkFoQkU7QUFBQTtBQUFBLHVCQStCV0EsUUFBUSxDQUFDQyxJQUFULEVBL0JYOztBQUFBO0FBK0JGSCxvQkEvQkU7QUFnQ1JSLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CTyxJQUFwQjs7QUFFQSxvQkFBSUEsSUFBSSxDQUFDSSxPQUFULEVBQWtCO0FBQ2hCQyx1QkFBSyxDQUFDLHlDQUFELENBQUw7QUFDRCxpQkFGRCxNQUdLO0FBQ0hBLHVCQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUNEOztBQXZDTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZmUsR0FBRCxDQUF4QjtBQTREQSxzQkFDRTtBQUFTLE1BQUUsRUFBQyxVQUFaO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLGtCQUFRLEVBQUV6QixNQUFNLENBQUMwQixZQUF2QjtBQUFBLGtDQUNFO0FBQVUscUJBQVMsRUFBQyxrQkFBcEI7QUFBQSxvQ0FJRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBQyxVQURaO0FBRUUsb0JBQUksRUFBQyxNQUZQO0FBR0UsMkJBQVcsRUFBQyxNQUhkO0FBSUUsb0JBQUksRUFBQyxNQUpQO0FBS0Usa0JBQUUsRUFBQyxNQUxMO0FBTUUsd0JBQVEsRUFBRTFCLE1BQU0sQ0FBQzJCLFlBTm5CO0FBT0Usc0JBQU0sRUFBRTNCLE1BQU0sQ0FBQzRCLFVBUGpCO0FBUUUscUJBQUssRUFBRTVCLE1BQU0sQ0FBQ1csTUFBUCxDQUFjUjtBQVJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBVUdILE1BQU0sQ0FBQzZCLE9BQVAsQ0FBZTFCLElBQWYsSUFBdUJILE1BQU0sQ0FBQzhCLE1BQVAsQ0FBYzNCLElBQXJDLGdCQUNDO0FBQUEsMEJBQU1ILE1BQU0sQ0FBQzhCLE1BQVAsQ0FBYzNCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsR0FFRyxJQVpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQW1CRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNFO0FBQVEseUJBQVMsRUFBQyxXQUFsQjtBQUE4QixvQkFBSSxFQUFDLFFBQW5DO0FBQTRDLGtCQUFFLEVBQUMsUUFBL0M7QUFBd0QscUJBQUssRUFBRUgsTUFBTSxDQUFDVyxNQUFQLENBQWNQLE1BQTdFO0FBQXVGLHdCQUFRLEVBQUVKLE1BQU0sQ0FBQzJCLFlBQXhHO0FBQ0Usc0JBQU0sRUFBRTNCLE1BQU0sQ0FBQzRCLFVBRGpCO0FBQUEsd0NBR0U7QUFBUSx1QkFBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJGLGVBNkJFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLGFBRFo7QUFFRSxvQkFBSSxFQUFDLEdBRlA7QUFHRSxrQkFBRSxFQUFDLFNBSEw7QUFJRSwyQkFBVyxFQUFDLFNBSmQ7QUFLRSx3QkFBUSxFQUFFNUIsTUFBTSxDQUFDMkIsWUFMbkI7QUFNRSxzQkFBTSxFQUFFM0IsTUFBTSxDQUFDNEIsVUFOakI7QUFPRSxxQkFBSyxFQUFFNUIsTUFBTSxDQUFDVyxNQUFQLENBQWNOO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFXR0wsTUFBTSxDQUFDNkIsT0FBUCxDQUFleEIsT0FBZixJQUEwQkwsTUFBTSxDQUFDOEIsTUFBUCxDQUFjekIsT0FBeEMsZ0JBQ0M7QUFBQSwwQkFBTUwsTUFBTSxDQUFDOEIsTUFBUCxDQUFjekI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxHQUVHLElBYk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdCRixlQTZDRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBc0MsK0JBQWMsWUFBcEQ7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSx3Q0FDRTtBQUFNLDJCQUFTLEVBQUMsMEJBQWhCO0FBQUEsMENBQ0U7QUFBTSw2QkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQU8sdUJBQUcsRUFBRVAsT0FBWjtBQUFxQixzQkFBRSxFQUFDLE1BQXhCO0FBQStCLHdCQUFJLEVBQUMsTUFBcEM7QUFBMkMsNEJBQVEsRUFBRSxrQkFBQ2lDLENBQUQ7QUFBQSw2QkFBUS9CLE1BQU0sQ0FBQ2dDLGFBQVAsQ0FBcUIsTUFBckIsRUFBNkJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUE3QixDQUFSO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFRR3BDLE9BQU8sQ0FBQ3FDLE9BQVIsS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsZ0JBQWtDO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQVksb0JBQUUsRUFBQyxRQUFmO0FBQXdCLDJCQUFTLEVBQUMsdUJBQWxDO0FBQTBELGtDQUFhLFlBQXZFO0FBQW9GLHlCQUFPLEVBQUUsaUJBQUNKLENBQUQ7QUFBQSwyQkFBT0ssUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxHQUF3QyxJQUEvQztBQUFBLG1CQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBNkRFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxvUEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdHRCxDQWhLRDs7R0FBTTFDLFM7VUFJV0ssNkM7OztLQUpYTCxTO0FBa0tOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5MGMyYzMxMWY2NDQ3NjAxZWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZilcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJlYXNvbjogJycsXG4gICAgICBtZXNzYWdlOiAnJywgXG4gICAgICBmaWxlOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbnRhY3RGb3JtVmFsdWVzXCIsIHZhbHVlcyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB2YWx1ZXMubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlYXNvbicsIHZhbHVlcy5yZWFzb24pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbmZvJywgdmFsdWVzLm1lc3NhZ2UpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYScsIHZhbHVlcy5maWxlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybURhdGFcIiwgZm9ybURhdGEpO1xuICAgICAgLy8gZm9ybURhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImtleVwiLCBrZXkpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIClcbiAgICAgIFxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2xlYWQtZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICAgICBcblxuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBhbGVydChcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTdWJtaXQgeW91ciBzY2FyeSBwaG90byBvciBjb250YWN0IHVzIHNvIHdlIGNhbiBpbnZlc3RpZ2F0ZSBhbmQgZ2V0IGJhY2sgdG8geW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidWstZmllbGRzZXQgcHQtOFwiPlxuXG4gICAgICAgICAgICAgIHsvKiA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPkxlZ2VuZDwvbGVnZW5kPiAqL31cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInVrLXNlbGVjdFwiIG5hbWU9XCJyZWFzb25cIiBpZD1cInJlYXNvblwiIHZhbHVlPXtmb3JtaWsudmFsdWVzLnJlYXNvbn0gICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmVhc29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkludmVzdGlnYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay10ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1lc3NhZ2V9XG5cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubWVzc2FnZSAmJiBmb3JtaWsuZXJyb3JzLm1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZCBwYi00IHB0LTRcIiBkYXRhLXByb3ZpZGVzPVwiZmlsZXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1wcmV2aWV3IHVrLXRodW1ibmFpbCB1ay1ib3JkZXItcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1uZXcgcHItNFwiID5TZWxlY3QgZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZmlsZVJlZn0gaWQ9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+ICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnZmlsZScsIGUudGFyZ2V0LmZpbGVzWzBdKX0gLz5cblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiIG9uQ2xpY2s9eyhlKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCB9PlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=