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
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/notification */ "./components/notification.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();







var ContactUs = function ContactUs(props) {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default);
  console.log("isLoggedIn", ctx.user);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      submitting = _useState2[0],
      setSubmitting = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      message = _useState3[0],
      setMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fileArr = _useState5[0],
      setFileArr = _useState5[1];

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
    initialValues: {
      name: '',
      reason: '',
      message: '',
      media: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        var innerValbj, data, i, userObj, token, request, response;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  console.log("contactFormValues", values);
                innerValbj = {
                  name: values.name,
                  reason: values.reason,
                  info: values.message
                };
                data = new FormData();

                for (i = 0; i < values.media.length; i++) {
                  data.append('files.media', values.media[i]);
                }

                data.append('data', JSON.stringify(innerValbj));

                if (!ctx.user) {
                  _context.next = 19;
                  break;
                }

                setMessage("pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                userObj = localStorage.getItem("user");
                token = JSON.parse(userObj).jwt;
                _context.next = 13;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  authorization: "Bearer ".concat(token, "}"),
                  body: data
                });

              case 13:
                request = _context.sent;
                _context.next = 16;
                return request.json();

              case 16:
                response = _context.sent;

                // console.log("data", data);
                if (!response.error) {
                  setTitle("Submitted investigation");
                  setMessage("success");
                  setStatus('success');

                  if (status === "success") {
                    setTimeout(function () {
                      setMessage("");
                      setTitle("");
                      setSubmitting(false);
                      setStatus("");
                    }, 3000);
                  }
                } else {
                  alert("Something went wrong");
                  setTitle("Error submitting investigation");
                  setMessage("error");
                  setStatus('error');
                }

                formik.resetForm();

              case 19:
                if (!ctx.user) {
                  ctx.setModalOpen(true);
                }

              case 20:
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
    children: [status && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_notification__WEBPACK_IMPORTED_MODULE_7__.default, {
      message: message,
      title: title,
      submitting: submitting,
      status: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
                lineNumber: 159,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
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
                  lineNumber: 177,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                lineNumber: 184,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
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
                          lineNumber: 215,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
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
                  lineNumber: 224,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "WDVwc1N/M4NCvmQIVF8TIN70wRo=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__.useFormik];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInN1Ym1pdHRpbmciLCJzZXRTdWJtaXR0aW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ0aXRsZSIsInNldFRpdGxlIiwiZmlsZUFyciIsInNldEZpbGVBcnIiLCJmaWxlUmVmIiwidXNlUmVmIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiaW5uZXJWYWxiaiIsImluZm8iLCJkYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJPYmoiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJwYXJzZSIsImp3dCIsImZldGNoIiwibWV0aG9kIiwiYXV0aG9yaXphdGlvbiIsImJvZHkiLCJyZXF1ZXN0IiwianNvbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJyZXNldEZvcm0iLCJzZXRNb2RhbE9wZW4iLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJyZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVu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YWY3MWYxM2RhNGNjN2EwNmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc29sZS5sb2coXCJpc0xvZ2dlZEluXCIsIGN0eC51c2VyKTtcblxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuXG5cblxuXG4gIGNvbnN0IFtmaWxlQXJyLCBzZXRGaWxlQXJyXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZilcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJlYXNvbjogJycsXG4gICAgICBtZXNzYWdlOiAnJywgXG4gICAgICBtZWRpYTogbnVsbFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgLy8gcmVhc29uOiBZdXAuc3RyaW5nKClcbiAgICAgIC8vICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgbWVzc2FnZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgIH0pLFxuICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiY29udGFjdEZvcm1WYWx1ZXNcIiwgdmFsdWVzKTtcblxuXG5cbiAgICAgIGNvbnN0IGlubmVyVmFsYmogPSB7XG4gICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICByZWFzb246IHZhbHVlcy5yZWFzb24sXG4gICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubWVkaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGVzLm1lZGlhJywgdmFsdWVzLm1lZGlhW2ldKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShpbm5lclZhbGJqKSk7XG5cblxuXG5cbiAgICAgIGlmKGN0eC51c2VyKSB7XG4gICAgICAgIHNldE1lc3NhZ2UoXCJwZW5kaW5nXCIpXG4gICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFN0YXR1cygncGVuZGluZycpXG5cbiAgICAgICAgY29uc3QgdXNlck9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKVxuICAgICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodXNlck9iaikuand0XG5cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn19YCxcbiAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICAgIFxuICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgICAgICBcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcInN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoJ3N1Y2Nlc3MnKSAgIFxuICAgICAgICAgXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgICAgICAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRTdGF0dXMoXCJcIilcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgc2V0VGl0bGUoXCJFcnJvciBzdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiZXJyb3JcIilcbiAgICAgICAgICBzZXRTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgfVxuXG4gICAgXG4gICAgICAgIGZvcm1pay5yZXNldEZvcm0oKTtcbiAgICAgICAgXG4gICAgICAgIFxuXG5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjdHgudXNlcikge1xuICAgICAgICBjdHguc2V0TW9kYWxPcGVuKHRydWUpXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG5cbiAgICB9LFxuICB9KTtcblxuICBcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ21lZGlhJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiID5cbiAgICAgIHtzdGF0dXMgJiYgPE5vdGlmaWNhdGlvbiBtZXNzYWdlPXttZXNzYWdlfSB0aXRsZT17dGl0bGV9IHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9IHN0YXR1cz17c3RhdHVzfSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBTdWJtaXQgeW91ciBzY2FyeSBwaG90byBvciBjb250YWN0IHVzIHNvIHdlIGNhbiBpbnZlc3RpZ2F0ZSBhbmQgZ2V0IGJhY2sgdG8geW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidWstZmllbGRzZXQgcHQtOFwiPlxuXG4gICAgICAgICAgICAgIHsvKiA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPkxlZ2VuZDwvbGVnZW5kPiAqL31cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInVrLXNlbGVjdFwiIG5hbWU9XCJyZWFzb25cIiBpZD1cInJlYXNvblwiIHZhbHVlPXtmb3JtaWsudmFsdWVzLnJlYXNvbn0gICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmVhc29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkludmVzdGlnYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay10ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1lc3NhZ2V9XG5cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubWVzc2FnZSAmJiBmb3JtaWsuZXJyb3JzLm1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZCBwYi00IHB0LTRcIiBkYXRhLXByb3ZpZGVzPVwiZmlsZXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1wcmV2aWV3IHVrLXRodW1ibmFpbCB1ay1ib3JkZXItcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1uZXcgcHItNFwiID5TZWxlY3QgZmlsZTwvc3Bhbj5cblxuICBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cIm1lZGlhXCIgIG11bHRpcGxlIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9ICByZWY9e2ZpbGVSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1hcm91bmQgcHQtNCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICAgIHsgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGZpbGVBcnIubWFwKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiAgdWstYm9yZGVyLXJvdW5kZWQgZmxleCBqdXN0aWZ5LWFyb3VuZCAgZmxleC13cmFwIFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSl9IGFsdD1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICl9KVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIHsgZmlsZVJlZi5jdXJyZW50ID09PSBudWxsID8gbnVsbCA6IDxhIGhyZWY9XCIjXCIgaWQ9XCJyZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gZmlsZXVwbG9hZC1leGlzdHNcIiBkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCIgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS52YWx1ZSA9IG51bGwgXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgICAgICAgICAgICAgICAgfSB9ID5SZW1vdmU8L2E+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctYmx1ZS04MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy00XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLWJsdWUtMzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtbGcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweS0yLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6YmctYmx1ZS02MDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6aG92ZXI6YmctYmx1ZS03MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgPlxuICAgICAgICAgICAgICBTdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzXG4iXSwic291cmNlUm9vdCI6IiJ9