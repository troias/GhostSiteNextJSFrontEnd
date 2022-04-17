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
                formData.append('name', values.name); // formData.append('reason', values.reason);

                formData.append('info', values.message); // formData.append('media', values.file);
                // console.log("formData", formData);
                // formData.forEach((value, key) => {
                //   console.log("key", key);
                //   console.log("value", value);
                // }
                // )

                _context.next = 6;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  },
                  body: formData
                });

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json();

              case 9:
                data = _context.sent;
                console.log("data", data);

                if (data.success) {
                  alert("Your message has been sent successfully");
                } else {
                  alert("Something went wrong");
                }

              case 12:
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
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
                lineNumber: 76,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
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
                  lineNumber: 94,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                lineNumber: 101,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
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
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
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
                  lineNumber: 126,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiZmlsZVJlZiIsInVzZVJlZiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwicmVhc29uIiwibWVzc2FnZSIsImZpbGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyIsImUiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJjdXJyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUYyQixDQUczQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDdkJDLGlCQUFhLEVBQUU7QUFDYkMsVUFBSSxFQUFFLEVBRE87QUFFYkMsWUFBTSxFQUFFLEVBRks7QUFHYkMsYUFBTyxFQUFFLEVBSEk7QUFJYkMsVUFBSSxFQUFFO0FBSk8sS0FEUTtBQU92QkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDM0JMLFVBQUksRUFBRUssdUNBQUEsR0FDSEMsUUFERyxDQUNNLFVBRE4sQ0FE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K0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGRhYmVkNGI1MTYxODdhZjhmYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5cbmNvbnN0IENvbnRhY3RVcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIGZpbGU6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29udGFjdEZvcm1WYWx1ZXNcIiwgdmFsdWVzKTtcbiAgICAgIFxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHZhbHVlcy5uYW1lKTtcbiAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgncmVhc29uJywgdmFsdWVzLnJlYXNvbik7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2luZm8nLCB2YWx1ZXMubWVzc2FnZSk7XG4gICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhJywgdmFsdWVzLmZpbGUpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtRGF0YVwiLCBmb3JtRGF0YSk7XG4gICAgICAvLyBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwia2V5XCIsIGtleSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgLy8gfVxuICAgICAgLy8gKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBmb3JtRGF0YSBcblxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNjb250YWN0XCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPlxuICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLThcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFN1Ym1pdCB5b3VyIHNjYXJ5IHBob3RvIG9yIGNvbnRhY3QgdXMgc28gd2UgY2FuIGludmVzdGlnYXRlIGFuZCBnZXQgYmFjayB0byB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSByZWFzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW52ZXN0aWdhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWVzc2FnZX1cblxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5tZXNzYWdlICYmIGZvcm1pay5lcnJvcnMubWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkIHBiLTQgcHQtNFwiIGRhdGEtcHJvdmlkZXM9XCJmaWxldXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLXByZXZpZXcgdWstdGh1bWJuYWlsIHVrLWJvcmRlci1yb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLW5ldyBwci00XCIgPlNlbGVjdCBmaWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtmaWxlUmVmfSBpZD1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywgZS50YXJnZXQuZmlsZXNbMF0pfSAvPlxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIHsgZmlsZVJlZi5jdXJyZW50ID09PSBudWxsID8gbnVsbCA6IDxhIGhyZWY9XCIjXCIgaWQ9XCJyZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gZmlsZXVwbG9hZC1leGlzdHNcIiBkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCIgb25DbGljaz17KGUpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIH0+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==