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
        var data, i, request, response;
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

                for (i = 0; i < values.meda; i++) {
                  data.append('files', values.media[i]);
                } // data.forEach((value, key) => {
                //   console.log("value", value)
                //   console.log("key", key)
                //   Object.assign(
                //     key,
                //     {
                //     })
                // })


                data.forEach(function (value, key) {
                  console.log("formDataLoop", key, value);
                });
                _context.next = 6;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  body: data
                });

              case 6:
                request = _context.sent;
                _context.next = 9;
                return request.json();

              case 9:
                response = _context.sent;
                console.log("data", data);

                if (!response.error) {
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
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
                lineNumber: 119,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
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
                  lineNumber: 137,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
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
                lineNumber: 144,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
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
                          lineNumber: 192,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
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
                  lineNumber: 206,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWxlQXJyIiwic2V0RmlsZUFyciIsImZpbGVSZWYiLCJ1c2VSZWYiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lc3NhZ2UiLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiZGF0YSIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsImkiLCJtZWRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsInZhbHVlIiwia2V5IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVxdWVzdCIsImpzb24iLCJyZXNwb25zZSIsImVycm9yIiwiYWxlcnQiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVHQywrQ0FBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRXBCQyxPQUZvQjtBQUFBLE1BRVhDLFVBRlc7O0FBSTNCLE1BQU1DLE9BQU8sR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXRC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QUFBQTtBQUFBLG1CQURGLGVBdUdFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxvUEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBJRCxDQTVPRDs7R0FBTUosUztVQU1XUSw2Qzs7O0tBTlhSLFM7QUE4T04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2JlZTUxYmMxNDA0YjU5OGJmOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbZmlsZUFyciwgc2V0RmlsZUFycl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgbmFtZTogJycsXG4gICAgICByZWFzb246ICcnLFxuICAgICAgbWVzc2FnZTogJycsIFxuICAgICAgbWVkaWE6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImNvbnRhY3RGb3JtVmFsdWVzXCIsIHZhbHVlcyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuXG4gICAgICBjb25zb2xlLmxvZyhcIm1lZGlhXCIsIG1lZGlhKVxuXG4gICAgICAvLyBkYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAvLyAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgIC8vICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICAvLyB9KSlcblxuICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdmFsdWVzLm1lZGEgOyBpKyspIHtcblxuICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZXMnLCB2YWx1ZXMubWVkaWFbaV0pO1xuICAgICAgfVxuICAgICAgLy8gZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdmFsdWUpXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwia2V5XCIsIGtleSlcbiAgICAgIC8vICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIC8vICAgICBrZXksXG4gICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgLy8gICAgIH0pXG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICAgIFxuXG5cbiAgICBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm9ybURhdGFMb29wXCIsIGtleSwgdmFsdWUpXG4gICAgfSlcblxuXG5cblxuICAgXG5cbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICBcbiAgICAgICAgYm9keTogZGF0YVxuICBcblxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgXG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdtZWRpYScsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIGNvbnN0IGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgICAgc2V0RmlsZUFycihmaWxlQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpcnN0RmlsZVwiLCBmaWxlQXJyYXkpO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI2NvbnRhY3RcIiA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgXCI+XG4gICAgICAgICAgY29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3VibWl0IHlvdXIgc2NhcnkgcGhvdG8gb3IgY29udGFjdCB1cyBzbyB3ZSBjYW4gaW52ZXN0aWdhdGUgYW5kIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInVrLWZpZWxkc2V0IHB0LThcIj5cblxuICAgICAgICAgICAgICB7LyogPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5MZWdlbmQ8L2xlZ2VuZD4gKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBuYW1lPVwicmVhc29uXCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5yZWFzb259ICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICBcbiAgICAgICAgICAgICAgeyAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1pay52YWx1ZXMuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICBbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdOiBlLmN1cnJlbnRUYXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfSBtdWx0aXBsZSAvPiAqL31cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwibWVkaWFcIiAgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gIHJlZj17ZmlsZVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBwdC00IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgeyAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiICB1ay1ib3JkZXItcm91bmRlZCBmbGV4IGp1c3RpZnktYXJvdW5kICBmbGV4LXdyYXAgXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctWzE1MHB4XSBoLVsxNTBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgIH0gfSA+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==