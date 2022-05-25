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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();









var ContactUs = function ContactUs(props) {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default);
  var scrollCtx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_5__.ScrollContext); // console.log("ContactUser", ctx.user)
  // const parsedData = JSON.parse(ctx.user);
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
        var innerValbj, data, i, userObj, token, request, response, req, res;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  console.log("clicked", ctx.modalOpen);
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
                  _context.next = 19;
                  break;
                }

                setMessage("pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                userObj = localStorage.getItem("user");
                token = JSON.parse(userObj).jwt;
                _context.next = 14;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  authorization: "Bearer ".concat(token, "}"),
                  body: data
                });

              case 14:
                request = _context.sent;
                _context.next = 17;
                return request.json();

              case 17:
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

              case 19:
                if (ctx.user) {
                  _context.next = 31;
                  break;
                }

                setMessage("Pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                _context.next = 26;
                return fetch('http://localhost:1337/api/annon-leadform-submissions', {
                  method: 'POST',
                  body: data
                });

              case 26:
                req = _context.sent;
                _context.next = 29;
                return req.json();

              case 29:
                res = _context.sent;

                if (!res.error) {
                  setTitle("Submitted investigation");
                  setMessage("Success");
                  setStatus("success");
                } else {
                  alert("Something went wrong");
                  setTitle("Error submitting investigation");
                  setMessage("error");
                  setStatus('error');
                }

              case 31:
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
    if (scrollCtx.contactRef.current) {
      if ((next_router__WEBPACK_IMPORTED_MODULE_9___default().asPath) === "/#Contact") {
        scrollCtx.contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } // console.log("scrollCtx", scrollCtx.contactRef);
    // console.log("aboutRef", scrollCtx.aboutRef);

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
      lineNumber: 195,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
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
                  lineNumber: 205,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-black mr-2 ml-2",
              children: "or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
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
                  lineNumber: 219,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 13
            }, _this)]
          }, void 0, true), " to submit your scary photo or contact us so we can investigate and get back to you."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
                lineNumber: 233,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
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
                  lineNumber: 251,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
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
                lineNumber: 258,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
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
                          lineNumber: 289,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 19
                }, _this), console.log("fileRef", fileRef), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#",
                  id: "remove",
                  className: "btn fileupload-exists",
                  "data-dismiss": "fileupload",
                  onClick: function onClick(e) {
                    e.preventDefault(); //  document.getElementById('file').value = null 

                    fileRef.current = null;
                    setFileArr([]);
                  },
                  children: "Remove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiZm9ybWlrIiwicmVzZXRGb3JtIiwiZmlsZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldEZpbGVBcnIiLCJjbGVhclRpbWVvdXQiLCJmaWxlQXJyIiwidXNlUmVmIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwidXNlciIsInNldE1vZGFsT3BlbiIsImlubmVyVmFsYmoiLCJpbmZvIiwiaWQiLCJkYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJPYmoiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJwYXJzZSIsImp3dCIsImZldGNoIiwibWV0aG9kIiwiYXV0aG9yaXphdGlvbiIsImJvZHkiLCJyZXF1ZXN0IiwianNvbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsInJlcSIsInJlcyIsIm9uRmlsZUNoYW5nZSIsImUiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlTGlzdCIsImZpbGVBcnJheSIsInB1c2giLCJ1c2VFZmZlY3QiLCJjb250YWN0UmVmIiwicm91dGVyIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwic2V0UmVnaXN0ZXJpbmciLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsImZpbGUiLCJpbmRleCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QixDQUgyQixDQU0zQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBUSxZQUFNLENBQUNDLFNBQVA7QUFDQUMsYUFBTyxDQUFD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QUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZJRCxDQXJVRDs7R0FBTXRCLFM7VUF1Q1cwQiw2Qzs7O0tBdkNYMUIsUztBQXVVTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDBmNGYwOTE2ODViNWRmN2QwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IHtTY3JvbGxDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9zY3JvbGxDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENvbnRhY3RVcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBzY3JvbGxDdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuXG4gXG4gIC8vIGNvbnNvbGUubG9nKFwiQ29udGFjdFVzZXJcIiwgY3R4LnVzZXIpXG5cblxuICAvLyBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShjdHgudXNlcik7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IHBhcnNlZERhdGEudXNlci5pZFxuICAvLyBjb25zb2xlLmxvZyhcImN0eHN1c2VyXCIsIGN0eC51c2VyLnVzZXIuaWQpXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlcklEXCIsIHVzZXJJZCk7XG5cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cblxuICBpZiAoc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIHN1Y2Nlc3NcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIHNldFN0YXR1cyhcIlwiKVxuICAgICAgZm9ybWlrLnJlc2V0Rm9ybSgpO1xuICAgICAgZmlsZVJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgfSwgMTAwMCk7XG5cbiAgICBjbGVhclRpbWVvdXQoKTtcbn1cblxuICBjb25zdCBbZmlsZUFyciwgc2V0RmlsZUFycl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIG1lZGlhOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJjbGlja2VkXCIsIGN0eC5tb2RhbE9wZW4pO1xuICAgICAgICAhY3R4LnVzZXIgJiYgY3R4LnNldE1vZGFsT3Blbih0cnVlKVxuXG4gICAgICBjb25zdCBpbm5lclZhbGJqID0ge1xuICAgICAgICBuYW1lOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgcmVhc29uOiB2YWx1ZXMucmVhc29uLFxuICAgICAgICBpbmZvOiB2YWx1ZXMubWVzc2FnZSwgIFxuICAgICAgICB1c2VyOiBjdHgudXNlci51c2VyLmlkLFxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLm1lZGlhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlcy5tZWRpYScsIHZhbHVlcy5tZWRpYVtpXSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuYXBwZW5kKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoaW5uZXJWYWxiaikpO1xuICAgICBcbiAgIFxuXG4gICAgICBpZihjdHgudXNlcikge1xuICAgICAgICBzZXRNZXNzYWdlKFwicGVuZGluZ1wiKVxuICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBzZXRTdGF0dXMoJ3BlbmRpbmcnKVxuXG4gICAgICAgIGNvbnN0IHVzZXJPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIilcbiAgICAgICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKHVzZXJPYmopLmp3dFxuXG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2xlYWQtZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59fWAsXG4gICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgICAgICBcbiAgXG4gICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgXG4gICAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0ZWQgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJTdWNjZXNzXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKFwic3VjY2Vzc1wiKSAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgc2V0VGl0bGUoXCJFcnJvciBzdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiZXJyb3JcIilcbiAgICAgICAgICBzZXRTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmICghY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0TWVzc2FnZShcIlBlbmRpbmdcIilcbiAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hbm5vbi1sZWFkZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICB9XG5cblxuICAgICAgICBcblxuXG5cbiAgICAgIH1cblxuICAgXG4gICAgICBcbiAgICB9LFxuICB9KTtcblxuICBcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ21lZGlhJywgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgICB9XG4gICAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgXG4gICAgICBpZiAoc2Nyb2xsQ3R4LmNvbnRhY3RSZWYuY3VycmVudCkge1xuICAgICAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gXCIvI0NvbnRhY3RcIikge1xuICAgIFxuICAgICAgICBzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB9XG4gXG4gICAgIFxuIFxuICAgICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxDdHhcIiwgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBzY3JvbGxDdHguYWJvdXRSZWYpO1xuXG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiIHJlZj17c2Nyb2xsQ3R4LmNvbnRhY3RSZWZ9ID5cbiAgICAgIHtzdGF0dXMgJiYgPE5vdGlmaWNhdGlvbiBtZXNzYWdlPXttZXNzYWdlfSB0aXRsZT17dGl0bGV9IHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9IHN0YXR1cz17c3RhdHVzfSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y3R4LnVzZXIgPyBcIlwiIDogKDw+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1yLTIgbWwtMlwiPlxuICAgICAgICAgICAgICBvclxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7IFxuICAgICAgICAgICAgICBjdHguc2V0TW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgICBjdHguc2V0UmVnaXN0ZXJpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPil9IHRvIHN1Ym1pdCB5b3VyIHNjYXJ5IHBob3RvIG9yIGNvbnRhY3QgdXMgc28gd2UgY2FuIGludmVzdGlnYXRlIGFuZCBnZXQgYmFjayB0byB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSByZWFzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW52ZXN0aWdhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWVzc2FnZX1cblxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5tZXNzYWdlICYmIGZvcm1pay5lcnJvcnMubWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkIHBiLTQgcHQtNFwiIGRhdGEtcHJvdmlkZXM9XCJmaWxldXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLXByZXZpZXcgdWstdGh1bWJuYWlsIHVrLWJvcmRlci1yb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLW5ldyBwci00XCIgPlNlbGVjdCBmaWxlPC9zcGFuPlxuXG4gIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwibWVkaWFcIiAgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gIHJlZj17ZmlsZVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBwdC00IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgeyAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiICB1ay1ib3JkZXItcm91bmRlZCBmbGV4IGp1c3RpZnktYXJvdW5kICBmbGV4LXdyYXAgXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctWzE1MHB4XSBoLVsxNTBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZil9XG4gICAgICAgICAgICAgICAgIHsgZmlsZVJlZi5jdXJyZW50ID09PSBudWxsID8gbnVsbCA6IDxhIGhyZWY9XCIjXCIgaWQ9XCJyZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gZmlsZXVwbG9hZC1leGlzdHNcIiBkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCIgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgIH0gfSA+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==