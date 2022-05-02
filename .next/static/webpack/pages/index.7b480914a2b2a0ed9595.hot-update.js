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
/* harmony import */ var _context_scrollContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/scrollContext */ "./context/scrollContext.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/notification */ "./components/notification.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();








var ContactUs = function ContactUs(props) {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default);
  var scrollCtx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_5__.ScrollContext);
  console.log("ContactUser", ctx.user); // const parsedData = JSON.parse(ctx.user);
  // const userId = parsedData.user.id
  // console.log("ctxsuser", ctx.user.user.id)
  // console.log("userID", userId);

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

  if (status === "success") {
    // console.log("inside success")
    setTimeout(function () {
      setMessage("");
      setTitle("");
      setSubmitting(false);
      setStatus("");
      formik.resetForm();
      fileRef.current.value = null;
      setFileArr([]);
    }, 1000);
    clearTimeout();
  }

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fileArr = _useState5[0],
      setFileArr = _useState5[1];

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
    initialValues: {
      name: '',
      reason: '',
      message: '',
      media: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        var innerValbj, data, i, userObj, token, request, response;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("clicked", ctx.modalOpen);
                !ctx.user && ctx.setModalOpen(true);
                innerValbj = {
                  name: values.name,
                  reason: values.reason,
                  info: values.message,
                  user: ctx.user.user.id
                };
                data = new FormData();

                for (i = 0; i < values.media.length; i++) {
                  data.append('files.media', values.media[i]);
                }

                data.append('data', JSON.stringify(innerValbj));

                if (!ctx.user) {
                  _context.next = 20;
                  break;
                }

                setMessage("pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                userObj = localStorage.getItem("user");
                token = JSON.parse(userObj).jwt;
                _context.next = 15;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  authorization: "Bearer ".concat(token, "}"),
                  body: data
                });

              case 15:
                request = _context.sent;
                _context.next = 18;
                return request.json();

              case 18:
                response = _context.sent;

                // console.log("data", data);
                if (!response.error) {
                  setTitle("Submitted investigation");
                  setMessage("Success");
                  setStatus("success");
                } else {
                  alert("Something went wrong");
                  setTitle("Error submitting investigation");
                  setMessage("error");
                  setStatus('error');
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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!scrollCtx.contactRef.current) {
      scrollCtx.contactRef(scrollCtx.contactRef);
      scrollCtx.contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (!scrollCtx.aboutRef.current) {
      scrollCtx.accountRef(scrollCtx.aboutRef);
      scrollCtx.aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    console.log("scrollCtx", scrollCtx.contactRef);
    console.log("aboutRef", scrollCtx.aboutRef);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "#contact",
    ref: scrollCtx.contactRef,
    children: [status && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_notification__WEBPACK_IMPORTED_MODULE_8__.default, {
      message: message,
      title: title,
      submitting: submitting,
      status: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [ctx.user ? "" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: function onClick() {
                return ctx.setModalOpen(true);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-user-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-black mr-2 ml-2",
              children: "or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: function onClick() {
                ctx.setModalOpen(true);
                ctx.setRegistering(true);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-user-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 13
            }, _this)]
          }, void 0, true), " to submit your scary photo or contact us so we can investigate and get back to you."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
                lineNumber: 202,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                  lineNumber: 220,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
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
                lineNumber: 227,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
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
                          lineNumber: 258,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 257,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
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
                  lineNumber: 267,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "mSnLLN0J4ImE0xQ3CKuOTfssfns=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_6__.useFormik];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInNldFRpbWVvdXQiLCJmb3JtaWsiLCJyZXNldEZvcm0iLCJmaWxlUmVmIiwiY3VycmVudCIsInZhbHVlIiwic2V0RmlsZUFyciIsImNsZWFyVGltZW91dCIsImZpbGVBcnIiLCJ1c2VSZWYiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lZGlhIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJpbm5lclZhbGJqIiwiaW5mbyIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyT2JqIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwicGFyc2UiLCJqd3QiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJib2R5IiwicmVxdWVzdCIsImpzb24iLCJyZXNwb25zZSIsImVycm9yIiwiYWxlcnQiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImFib3V0UmVmIiwiYWNjb3VudFJlZiIsInNldFJlZ2lzdGVyaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QjtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTixHQUFHLENBQUNPLElBQS9CLEVBTjJCLENBUzNCO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFD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QXZDWDdCLFM7QUF3U04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2I0ODA5MTRhMmIyYTBlZDk1OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCB7U2Nyb2xsQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IHNjcm9sbEN0eCA9IHVzZUNvbnRleHQoU2Nyb2xsQ29udGV4dCk7XG5cbiBcbiAgY29uc29sZS5sb2coXCJDb250YWN0VXNlclwiLCBjdHgudXNlcilcblxuXG4gIC8vIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKGN0eC51c2VyKTtcbiAgLy8gY29uc3QgdXNlcklkID0gcGFyc2VkRGF0YS51c2VyLmlkXG4gIC8vIGNvbnNvbGUubG9nKFwiY3R4c3VzZXJcIiwgY3R4LnVzZXIudXNlci5pZClcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VySURcIiwgdXNlcklkKTtcblxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuXG4gIGlmIChzdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJpbnNpZGUgc3VjY2Vzc1wiKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZShcIlwiKVxuICAgICAgc2V0VGl0bGUoXCJcIilcbiAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgc2V0U3RhdHVzKFwiXCIpXG4gICAgICBmb3JtaWsucmVzZXRGb3JtKCk7XG4gICAgICBmaWxlUmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgc2V0RmlsZUFycihbXSlcbiAgICB9LCAxMDAwKTtcblxuICAgIGNsZWFyVGltZW91dCgpO1xufVxuXG4gIGNvbnN0IFtmaWxlQXJyLCBzZXRGaWxlQXJyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgbmFtZTogJycsXG4gICAgICByZWFzb246ICcnLFxuICAgICAgbWVzc2FnZTogJycsIFxuICAgICAgbWVkaWE6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiwgY3R4Lm1vZGFsT3Blbik7XG4gICAgICAgICFjdHgudXNlciAmJiBjdHguc2V0TW9kYWxPcGVuKHRydWUpXG5cbiAgICAgIGNvbnN0IGlubmVyVmFsYmogPSB7XG4gICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICByZWFzb246IHZhbHVlcy5yZWFzb24sXG4gICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLCAgXG4gICAgICAgIHVzZXI6IGN0eC51c2VyLnVzZXIuaWQsXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubWVkaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGVzLm1lZGlhJywgdmFsdWVzLm1lZGlhW2ldKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShpbm5lclZhbGJqKSk7XG4gICAgIFxuICAgXG5cbiAgICAgIGlmKGN0eC51c2VyKSB7XG4gICAgICAgIHNldE1lc3NhZ2UoXCJwZW5kaW5nXCIpXG4gICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFN0YXR1cygncGVuZGluZycpXG5cbiAgICAgICAgY29uc3QgdXNlck9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKVxuICAgICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodXNlck9iaikuand0XG5cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn19YCxcbiAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICAgIFxuICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgICAgICBcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgXG4gICAgICBcbiAgICB9LFxuICB9KTtcblxuICBcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ21lZGlhJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgXG4gICAgICBpZiAoIXNjcm9sbEN0eC5jb250YWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYoc2Nyb2xsQ3R4LmNvbnRhY3RSZWYpO1xuICAgICAgICBzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gXG4gICAgICBpZiAoIXNjcm9sbEN0eC5hYm91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNjcm9sbEN0eC5hY2NvdW50UmVmKHNjcm9sbEN0eC5hYm91dFJlZik7XG4gICAgICAgIHNjcm9sbEN0eC5hYm91dFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuIFxuICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxDdHhcIiwgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYpO1xuICAgICAgY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBzY3JvbGxDdHguYWJvdXRSZWYpO1xuXG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiIHJlZj17c2Nyb2xsQ3R4LmNvbnRhY3RSZWZ9ID5cbiAgICAgIHtzdGF0dXMgJiYgPE5vdGlmaWNhdGlvbiBtZXNzYWdlPXttZXNzYWdlfSB0aXRsZT17dGl0bGV9IHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9IHN0YXR1cz17c3RhdHVzfSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y3R4LnVzZXIgPyBcIlwiIDogKDw+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1yLTIgbWwtMlwiPlxuICAgICAgICAgICAgICBvclxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7IFxuICAgICAgICAgICAgICBjdHguc2V0TW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgICBjdHguc2V0UmVnaXN0ZXJpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPil9IHRvIHN1Ym1pdCB5b3VyIHNjYXJ5IHBob3RvIG9yIGNvbnRhY3QgdXMgc28gd2UgY2FuIGludmVzdGlnYXRlIGFuZCBnZXQgYmFjayB0byB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSByZWFzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW52ZXN0aWdhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWVzc2FnZX1cblxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5tZXNzYWdlICYmIGZvcm1pay5lcnJvcnMubWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkIHBiLTQgcHQtNFwiIGRhdGEtcHJvdmlkZXM9XCJmaWxldXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLXByZXZpZXcgdWstdGh1bWJuYWlsIHVrLWJvcmRlci1yb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLW5ldyBwci00XCIgPlNlbGVjdCBmaWxlPC9zcGFuPlxuXG4gIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwibWVkaWFcIiAgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gIHJlZj17ZmlsZVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBwdC00IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgeyAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiICB1ay1ib3JkZXItcm91bmRlZCBmbGV4IGp1c3RpZnktYXJvdW5kICBmbGV4LXdyYXAgXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctWzE1MHB4XSBoLVsxNTBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgeyBmaWxlUmVmLmN1cnJlbnQgPT09IG51bGwgPyBudWxsIDogPGEgaHJlZj1cIiNcIiBpZD1cInJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBmaWxldXBsb2FkLWV4aXN0c1wiIGRhdGEtZGlzbWlzcz1cImZpbGV1cGxvYWRcIiAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUFycihbXSlcbiAgICAgICAgICAgICAgICAgICB9IH0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=