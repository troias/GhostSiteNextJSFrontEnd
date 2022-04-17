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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fileArr = _useState[0],
      setFileArr = _useState[1];

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
        var formData, i, response, data;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("contactFormValues", values);
                formData = new FormData();
                formData.append('name', values.name);
                formData.append('reason', values.reason);
                formData.append('info', values.message);

                for (i = 0; i < values.file.length; i++) {
                  formData.append('media', values.file[i]);
                } // console.log("formData", formData);
                // formData.forEach((value, key) => {
                //   console.log("key", key);
                //   console.log("value", value);
                // }
                // )


                _context.next = 8;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    data: formData
                  })
                });

              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.json();

              case 11:
                data = _context.sent;
                console.log("data", data);

                if (!data.error) {
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

  var handleFileChange = function handleFileChange(e) {
    console.log("e", e.target.files); // formik.setFieldValue('file', e.target.files);

    var fileList = e.target.files;
    var fileArray = [];

    for (var i = 0; i < fileList.length; i++) {
      fileArray.push(fileList[i]);
    }

    setFileArr(fileArray);
    console.log("firstFile", fileArray);
  };

  var onFileChange = function onFileChange(e) {
    console.log("e", e.target.files); // formik.setFieldValue('file', e.target.files);

    var fileList = e.target.files;
    var fileArray = [];

    for (var i = 0; i < fileList.length; i++) {
      fileArray.push(fileList[i]);
    }

    setFileArr(fileArray);
    console.log("firstFile", fileArray);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "#contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
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
                lineNumber: 110,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
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
                  lineNumber: 128,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
                lineNumber: 135,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    multiple: true,
                    onChange: onFileChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 17
                  }, _this), fileArr.map(function (file, index) {
                    console.log("file", file);
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "fileupload-preview uk-thumbnail uk-border-rounded",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                          src: URL.createObjectURL(file),
                          alt: "preview",
                          className: "w-[150px] h-[150px]"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 31
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 29
                      }, _this)
                    }, index, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 27
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, _this), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  id: "remove",
                  className: "btn fileupload-exists",
                  "data-dismiss": "fileupload",
                  onClick: function onClick(e) {
                    e.preventDefault();
                    document.getElementById('file').value = null;
                    setFileArr([]);
                  },
                  children: "Remove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "SR1cS9KorH4EXdboEFS6CJJgjjg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWxlQXJyIiwic2V0RmlsZUFyciIsImZpbGVSZWYiLCJ1c2VSZWYiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lc3NhZ2UiLCJmaWxlIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImkiLCJsZW5ndGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImFsZXJ0IiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGVMaXN0IiwiZmlsZUFycmF5IiwicHVzaCIsIm9uRmlsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUdDLCtDQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFcEJDLE9BRm9CO0FBQUEsTUFFWEMsVUFGVzs7QUFJM0IsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FB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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFBVXNDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERjtBQU1FLG1CQVJKLENBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQXlDRzlDLE9BQU8sQ0FBQ2lELE9BQVIsS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsZ0JBQWtDO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQVksb0JBQUUsRUFBQyxRQUFmO0FBQXdCLDJCQUFTLEVBQUMsdUJBQWxDO0FBQTBELGtDQUFhLFlBQXZFO0FBQXNGLHlCQUFPLEVBQUUsaUJBQUNoQixDQUFELEVBQU87QUFDdklBLHFCQUFDLENBQUNpQixjQUFGO0FBQ0VDLDRCQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLEdBQXdDLElBQXhDO0FBQ0F0RCw4QkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNGLG1CQUppQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF6Q3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWtHRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsb1BBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxSUQsQ0E5TkQ7O0dBQU1KLFM7VUFNV1EsNkM7OztLQU5YUixTO0FBZ09OLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4ZjJhNTk2NjU5YTkyN2Y0MmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2ZpbGVBcnIsIHNldEZpbGVBcnJdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIGZpbGU6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29udGFjdEZvcm1WYWx1ZXNcIiwgdmFsdWVzKTtcbiAgICAgIFxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHZhbHVlcy5uYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVhc29uJywgdmFsdWVzLnJlYXNvbik7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2luZm8nLCB2YWx1ZXMubWVzc2FnZSk7XG4gICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5maWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbWVkaWEnLCB2YWx1ZXMuZmlsZVtpXSk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm1EYXRhXCIsIGZvcm1EYXRhKTtcbiAgICAgIC8vIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJrZXlcIiwga2V5KTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyApXG4gICAgICBcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZGF0YTogZm9ybURhdGFcbiAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICBpZiAoIWRhdGEuZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIC8vIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgY29uc29sZS5sb2coXCJmaXJzdEZpbGVcIiwgZmlsZUFycmF5KTtcblxuXG4gICAgfVxuICBcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIC8vIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG4gICAgfVxuICAgIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI2NvbnRhY3RcIiA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgXCI+XG4gICAgICAgICAgY29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3VibWl0IHlvdXIgc2NhcnkgcGhvdG8gb3IgY29udGFjdCB1cyBzbyB3ZSBjYW4gaW52ZXN0aWdhdGUgYW5kIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInVrLWZpZWxkc2V0IHB0LThcIj5cblxuICAgICAgICAgICAgICB7LyogPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5MZWdlbmQ8L2xlZ2VuZD4gKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBuYW1lPVwicmVhc29uXCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5yZWFzb259ICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCAgXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn0gXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICBcbiAgICAgICAgICAgICAgeyAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1pay52YWx1ZXMuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICBbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdOiBlLmN1cnJlbnRUYXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfSBtdWx0aXBsZSAvPiAqL31cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIG9uQ2hhbmdlPXsgb25GaWxlQ2hhbmdlfS8+XG5cbiAgICAgICAgICAgICAgeyAgICAgICBmaWxlQXJyLm1hcCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1wcmV2aWV3IHVrLXRodW1ibmFpbCB1ay1ib3JkZXItcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSl9IGFsdD1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgICAgICAgICAgICAgICAgfSB9ID5SZW1vdmU8L2E+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYmx1ZS04MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy00XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLWJsdWUtMzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweS0yLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6YmctYmx1ZS02MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6aG92ZXI6YmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgPlxuICAgICAgICAgICAgICBTdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzXG4iXSwic291cmNlUm9vdCI6IiJ9