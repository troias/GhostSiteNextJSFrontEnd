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
                innerValbj = {
                  name: values.name,
                  reason: values.reason,
                  info: values.message,
                  user: ctx.user.user.id ? ctx.user.user.id : null
                };
                data = new FormData();

                for (i = 0; i < values.media.length; i++) {
                  data.append('files.media', values.media[i]);
                }

                data.append('data', JSON.stringify(innerValbj));

                if (!ctx.user) {
                  _context.next = 18;
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
                  setMessage("Success");
                  setStatus("success");
                } else {
                  alert("Something went wrong");
                  setTitle("Error submitting investigation");
                  setMessage("error");
                  setStatus('error');
                }

              case 18:
                if (ctx.user) {
                  _context.next = 30;
                  break;
                }

                setMessage("Pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                _context.next = 25;
                return fetch('http://localhost:1337/api/annon-leadform-submissions', {
                  method: 'POST',
                  body: data
                });

              case 25:
                req = _context.sent;
                _context.next = 28;
                return req.json();

              case 28:
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

              case 30:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiZm9ybWlrIiwicmVzZXRGb3JtIiwiZmlsZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldEZpbGVBcnIiLCJjbGVhclRpbWVvdXQiLCJmaWxlQXJyIiwidXNlUmVmIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiaW5uZXJWYWxiaiIsImluZm8iLCJ1c2VyIiwiaWQiLCJkYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJPYmoiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJwYXJzZSIsImp3dCIsImZldGNoIiwibWV0aG9kIiwiYXV0aG9yaXphdGlvbiIsImJvZHkiLCJyZXF1ZXN0IiwianNvbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJhbGVydCIsInJlcSIsInJlcyIsIm9uRmlsZUNoYW5nZSIsImUiLCJzZXRGaWVsZFZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlTGlzdCIsImZpbGVBcnJheSIsInB1c2giLCJ1c2VFZmZlY3QiLCJjb250YWN0UmVmIiwicm91dGVyIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwic2V0TW9kYWxPcGVuIiwic2V0UmVnaXN0ZXJpbmciLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyIsIm1hcCIsImZpbGUiLCJpbmRleCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QixDQUgyQixDQU0zQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBUSxZQUFNLENBQUNDLFNBQVA7QUFDQUMsYUFBTyxDQUFD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QSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2SUQsQ0FyVUQ7O0dBQU10QixTO1VBdUNXMEIsNkM7OztLQXZDWDFCLFM7QUF1VU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q3M2M2MmY3NzkzMjdhZmE4ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCB7U2Nyb2xsQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3Qgc2Nyb2xsQ3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcblxuIFxuICAvLyBjb25zb2xlLmxvZyhcIkNvbnRhY3RVc2VyXCIsIGN0eC51c2VyKVxuXG5cbiAgLy8gY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UoY3R4LnVzZXIpO1xuICAvLyBjb25zdCB1c2VySWQgPSBwYXJzZWREYXRhLnVzZXIuaWRcbiAgLy8gY29uc29sZS5sb2coXCJjdHhzdXNlclwiLCBjdHgudXNlci51c2VyLmlkKVxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJJRFwiLCB1c2VySWQpO1xuXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluc2lkZSBzdWNjZXNzXCIpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICBzZXRTdGF0dXMoXCJcIilcbiAgICAgIGZvcm1pay5yZXNldEZvcm0oKTtcbiAgICAgIGZpbGVSZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICBzZXRGaWxlQXJyKFtdKVxuICAgIH0sIDEwMDApO1xuXG4gICAgY2xlYXJUaW1lb3V0KCk7XG59XG5cbiAgY29uc3QgW2ZpbGVBcnIsIHNldEZpbGVBcnJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZilcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJlYXNvbjogJycsXG4gICAgICBtZXNzYWdlOiAnJywgXG4gICAgICBtZWRpYTogbnVsbFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgLy8gcmVhc29uOiBZdXAuc3RyaW5nKClcbiAgICAgIC8vICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgbWVzc2FnZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgIH0pLFxuICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiLCBjdHgubW9kYWxPcGVuKTtcbiAgICAgICBcblxuICAgICAgY29uc3QgaW5uZXJWYWxiaiA9IHtcbiAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsICBcbiAgICAgICAgdXNlcjogY3R4LnVzZXIudXNlci5pZCA/IGN0eC51c2VyLnVzZXIuaWQgOiBudWxsLFxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLm1lZGlhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlcy5tZWRpYScsIHZhbHVlcy5tZWRpYVtpXSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuYXBwZW5kKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoaW5uZXJWYWxiaikpO1xuICAgICBcbiAgIFxuXG4gICAgICBpZihjdHgudXNlcikge1xuICAgICAgICBzZXRNZXNzYWdlKFwicGVuZGluZ1wiKVxuICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBzZXRTdGF0dXMoJ3BlbmRpbmcnKVxuXG4gICAgICAgIGNvbnN0IHVzZXJPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIilcbiAgICAgICAgY29uc3QgdG9rZW4gPSBKU09OLnBhcnNlKHVzZXJPYmopLmp3dFxuXG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2xlYWQtZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59fWAsXG4gICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgICAgICBcbiAgXG4gICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgXG4gICAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0ZWQgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJTdWNjZXNzXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKFwic3VjY2Vzc1wiKSAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgc2V0VGl0bGUoXCJFcnJvciBzdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiZXJyb3JcIilcbiAgICAgICAgICBzZXRTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmICghY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0TWVzc2FnZShcIlBlbmRpbmdcIilcbiAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hbm5vbi1sZWFkZm9ybS1zdWJtaXNzaW9ucycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICB9XG5cblxuXG5cblxuXG4gICAgICB9XG5cbiAgIFxuICAgICAgXG4gICAgfSxcbiAgfSk7XG5cbiAgXG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdtZWRpYScsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIGNvbnN0IGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgICAgc2V0RmlsZUFycihmaWxlQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpcnN0RmlsZVwiLCBmaWxlQXJyYXkpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIFxuICAgICAgaWYgKHNjcm9sbEN0eC5jb250YWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT09IFwiLyNDb250YWN0XCIpIHtcbiAgICBcbiAgICAgICAgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgYmxvY2s6IFwic3RhcnRcIlxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgfVxuIFxuICAgICBcbiBcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsQ3R4XCIsIHNjcm9sbEN0eC5jb250YWN0UmVmKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWJvdXRSZWZcIiwgc2Nyb2xsQ3R4LmFib3V0UmVmKTtcblxuICAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI2NvbnRhY3RcIiByZWY9e3Njcm9sbEN0eC5jb250YWN0UmVmfSA+XG4gICAgICB7c3RhdHVzICYmIDxOb3RpZmljYXRpb24gbWVzc2FnZT17bWVzc2FnZX0gdGl0bGU9e3RpdGxlfSBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfSBzdGF0dXM9e3N0YXR1c30gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgXCI+XG4gICAgICAgICAgY29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2N0eC51c2VyID8gXCJcIiA6ICg8PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBjdHguc2V0TW9kYWxPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtci0yIG1sLTJcIj5cbiAgICAgICAgICAgICAgb3JcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4geyBcbiAgICAgICAgICAgICAgY3R4LnNldE1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgY3R4LnNldFJlZ2lzdGVyaW5nKHRydWUpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Lz4pfSB0byBzdWJtaXQgeW91ciBzY2FyeSBwaG90byBvciBjb250YWN0IHVzIHNvIHdlIGNhbiBpbnZlc3RpZ2F0ZSBhbmQgZ2V0IGJhY2sgdG8geW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwidWstZmllbGRzZXQgcHQtOFwiPlxuXG4gICAgICAgICAgICAgIHsvKiA8bGVnZW5kIGNsYXNzTmFtZT1cInVrLWxlZ2VuZFwiPkxlZ2VuZDwvbGVnZW5kPiAqL31cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInVrLXNlbGVjdFwiIG5hbWU9XCJyZWFzb25cIiBpZD1cInJlYXNvblwiIHZhbHVlPXtmb3JtaWsudmFsdWVzLnJlYXNvbn0gICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmVhc29uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPkludmVzdGlnYXRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay10ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1lc3NhZ2V9XG5cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubWVzc2FnZSAmJiBmb3JtaWsuZXJyb3JzLm1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZCBwYi00IHB0LTRcIiBkYXRhLXByb3ZpZGVzPVwiZmlsZXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1wcmV2aWV3IHVrLXRodW1ibmFpbCB1ay1ib3JkZXItcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZXVwbG9hZC1uZXcgcHItNFwiID5TZWxlY3QgZmlsZTwvc3Bhbj5cblxuICBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cIm1lZGlhXCIgIG11bHRpcGxlIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9ICByZWY9e2ZpbGVSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1hcm91bmQgcHQtNCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICAgIHsgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGZpbGVBcnIubWFwKChmaWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiAgdWstYm9yZGVyLXJvdW5kZWQgZmxleCBqdXN0aWZ5LWFyb3VuZCAgZmxleC13cmFwIFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSl9IGFsdD1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICl9KVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpfVxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUFycihbXSlcbiAgICAgICAgICAgICAgICAgICB9IH0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=