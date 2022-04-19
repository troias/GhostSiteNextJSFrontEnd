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
      media: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        var data, i;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  console.log("contactFormValues", values);
                data = new FormData();
                console.log("media", media); // data.append('data', JSON.stringify({
                //   name: values.name,
                //   reason: values.reason,
                //   info: values.message,
                // }))

                for (i = 0; i < values.media.length; i++) {
                  console.log("working");
                  data.append('mediaInner', values.media[i]);
                  data.append('data', JSON.stringify({
                    media: values.media[i]
                  }));
                } // data.forEach((value, key) => {
                //   console.log("value", value)
                //   console.log("key", key)
                //   Object.assign(ssda
                //     key,
                //     {
                //     })
                // })


                data.forEach(function (value, key) {
                  console.log("formDataLoop", key, value);
                }); //   const request = await fetch('http://localhost:1337/api/lead-form-submissions', {
                //     method: 'POST',
                //     body: data
                //   });
                //   const response = await request.json();
                //   console.log("data", data);
                //   if (!response.error) {
                //     alert("Your message has been sent successfully");
                //   }
                //   else {
                //     alert("Something went wrong");
                //   }

              case 4:
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

  var onFileChange = function onFileChange(e) {
    // console.log("e", e.target.files);
    formik.setFieldValue('media', e.target.files);
    var fileList = e.target.files;
    var fileArray = [];

    for (var i = 0; i < fileList.length; i++) {
      fileArray.push(fileList[i]);
    }

    setFileArr(fileArray); // console.log("firstFile", fileArray);
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
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
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
                lineNumber: 123,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
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
                  lineNumber: 141,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
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
                lineNumber: 148,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "w-full flex justify-around pt-4 flex-wrap ",
                    children: fileArr.map(function (file, index) {
                      // console.log("file", file);
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "  uk-border-rounded flex justify-around  flex-wrap ",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                          src: URL.createObjectURL(file),
                          alt: "preview",
                          className: "w-[150px] h-[150px]"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, _this), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  id: "remove",
                  className: "btn fileupload-exists",
                  "data-dismiss": "fileupload",
                  onClick: function onClick(e) {
                    e.preventDefault();
                    document.getElementById('file').value = null;
                    fileRef.current = null;
                    setFileArr([]);
                  },
                  children: "Remove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWxlQXJyIiwic2V0RmlsZUFyciIsImZpbGVSZWYiLCJ1c2VSZWYiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lc3NhZ2UiLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiZGF0YSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsInZhbHVlIiwia2V5Iiwib25GaWxlQ2hhbmdlIiwiZSIsInNldEZpZWxkVmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGVMaXN0IiwiZmlsZUFycmF5IiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiZmlsZSIsImluZGV4IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3VycmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFR0MsK0NBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVwQkMsT0FGb0I7QUFBQSxNQUVYQyxVQUZXOztBQUkzQixNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQUoyQixDQUszQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDdkJDLGlC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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBJRCxDQWhQRDs7R0FBTUosUztVQU1XUSw2Qzs7O0tBTlhSLFM7QUFrUE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTRiYWIxMDA3NDBjYzI0NmVjZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmlsZUFyciwgc2V0RmlsZUFycl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgbmFtZTogJycsXG4gICAgICByZWFzb246ICcnLFxuICAgICAgbWVzc2FnZTogJycsIFxuICAgICAgbWVkaWE6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImNvbnRhY3RGb3JtVmFsdWVzXCIsIHZhbHVlcyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuXG4gICAgICBjb25zb2xlLmxvZyhcIm1lZGlhXCIsIG1lZGlhKVxuXG4gICAgICAvLyBkYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAvLyAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgIC8vICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICAvLyB9KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdmFsdWVzLm1lZGlhLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgZGF0YS5hcHBlbmQoJ21lZGlhSW5uZXInLCB2YWx1ZXMubWVkaWFbaV0pXG4gICAgICBcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbWVkaWE6IHZhbHVlcy5tZWRpYVtpXVxuICAgICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHZhbHVlKVxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImtleVwiLCBrZXkpXG4gICAgICAvLyAgIE9iamVjdC5hc3NpZ24oc3NkYVxuICAgICAgLy8gICAgIGtleSxcbiAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAvLyAgICAgfSlcbiAgICAgICAgXG4gICAgICAvLyB9KVxuICAgICAgXG5cblxuICAgIGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJmb3JtRGF0YUxvb3BcIiwga2V5LCB2YWx1ZSlcbiAgICB9KVxuXG5cblxuXG4gICBcblxuICAgIC8vICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2xlYWQtZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgIFxuICAgIC8vICAgICBib2R5OiBkYXRhXG4gIFxuXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG5cbiAgICAvLyAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAvLyAgICAgYWxlcnQoXCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHlcIik7XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIHtcbiAgICAvLyAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAvLyAgIH1cbiAgICB9LFxuICB9KTtcblxuICBcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ21lZGlhJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTdWJtaXQgeW91ciBzY2FyeSBwaG90byBvciBjb250YWN0IHVzIHNvIHdlIGNhbiBpbnZlc3RpZ2F0ZSBhbmQgZ2V0IGJhY2sgdG8geW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidWstZmllbGRzZXQgcHQtOFwiPlxuXG4gICAgICAgICAgICAgIHsvKiA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPkxlZ2VuZDwvbGVnZW5kPiAqL31cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInVrLXNlbGVjdFwiIG5hbWU9XCJyZWFzb25cIiBpZD1cInJlYXNvblwiIHZhbHVlPXtmb3JtaWsudmFsdWVzLnJlYXNvbn0gICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmVhc29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkludmVzdGlnYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay10ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1lc3NhZ2V9XG5cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubWVzc2FnZSAmJiBmb3JtaWsuZXJyb3JzLm1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZCBwYi00IHB0LTRcIiBkYXRhLXByb3ZpZGVzPVwiZmlsZXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1wcmV2aWV3IHVrLXRodW1ibmFpbCB1ay1ib3JkZXItcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1uZXcgcHItNFwiID5TZWxlY3QgZmlsZTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0ICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gIFxuICAgICAgICAgICAgICB7ICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ2ZpbGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uZm9ybWlrLnZhbHVlcy5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgIFtlLmN1cnJlbnRUYXJnZXQubmFtZV06IGUuY3VycmVudFRhcmdldC5maWxlc1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmlsZUNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB9IG11bHRpcGxlIC8+ICovfVxuXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJtZWRpYVwiICBtdWx0aXBsZSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAgcmVmPXtmaWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIHB0LTQgZmxleC13cmFwIFwiPlxuICAgICAgICAgICAgICB7ICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmaWxlQXJyLm1hcCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgIHVrLWJvcmRlci1yb3VuZGVkIGZsZXgganVzdGlmeS1hcm91bmQgIGZsZXgtd3JhcCBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSBhbHQ9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidy1bMTUwcHhdIGgtWzE1MHB4XVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIHsgZmlsZVJlZi5jdXJyZW50ID09PSBudWxsID8gbnVsbCA6IDxhIGhyZWY9XCIjXCIgaWQ9XCJyZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gZmlsZXVwbG9hZC1leGlzdHNcIiBkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCIgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS52YWx1ZSA9IG51bGwgXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgICAgICAgICAgICAgICAgfSB9ID5SZW1vdmU8L2E+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYmx1ZS04MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy00XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLWJsdWUtMzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweS0yLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6YmctYmx1ZS02MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6aG92ZXI6YmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgPlxuICAgICAgICAgICAgICBTdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzXG4iXSwic291cmNlUm9vdCI6IiJ9