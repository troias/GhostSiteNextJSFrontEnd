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
                console.log("sumit", ctx.user);
                innerValbj = {
                  name: values.name,
                  reason: values.reason,
                  info: values.message,
                  user: ctx.user.user.id ? ctx.user.user.id : null
                };
                console.log("innerValbj", innerValbj);
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
                if (ctx.user) {
                  _context.next = 33;
                  break;
                }

                setMessage("Pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                _context.next = 27;
                return fetch('http://localhost:1337/api/annon-leadform-submissions', {
                  method: 'POST',
                  body: data
                });

              case 27:
                req = _context.sent;
                _context.next = 30;
                return req.json();

              case 30:
                res = _context.sent;
                console.log("datares", res);

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

              case 33:
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
      lineNumber: 198,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
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
                  lineNumber: 208,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-black mr-2 ml-2",
              children: "or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
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
                  lineNumber: 222,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 13
            }, _this)]
          }, void 0, true), " to submit your scary photo or contact us so we can investigate and get back to you."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
                lineNumber: 236,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 235,
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
                  lineNumber: 254,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
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
                lineNumber: 261,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
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
                          lineNumber: 292,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, _this), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
                  lineNumber: 302,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiZm9ybWlrIiwicmVzZXRGb3JtIiwiZmlsZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldEZpbGVBcnIiLCJjbGVhclRpbWVvdXQiLCJmaWxlQXJyIiwidXNlUmVmIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJpbm5lclZhbGJqIiwiaW5mbyIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyT2JqIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwicGFyc2UiLCJqd3QiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJib2R5IiwicmVxdWVzdCIsImpzb24iLCJyZXNwb25zZSIsImVycm9yIiwiYWxlcnQiLCJyZXEiLCJyZXMiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInJvdXRlciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNldE1vZGFsT3BlbiIsInNldFJlZ2lzdGVyaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QixDQUgyQixDQU0zQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBUSxZQUFNLENBQUNDLFNBQVA7QUFDQUMsYUFBTyxDQUFD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Q0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxvUEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZJRCxDQXhVRDs7R0FBTXRCLFM7VUF1Q1cwQiw2Qzs7O0tBdkNYMUIsUztBQTBVTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2VkMWJmMjRiZjJlZDNkZTkxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IHtTY3JvbGxDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dC9zY3JvbGxDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IENvbnRhY3RVcyA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBjb25zdCBzY3JvbGxDdHggPSB1c2VDb250ZXh0KFNjcm9sbENvbnRleHQpO1xuXG4gXG4gIC8vIGNvbnNvbGUubG9nKFwiQ29udGFjdFVzZXJcIiwgY3R4LnVzZXIpXG5cblxuICAvLyBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShjdHgudXNlcik7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IHBhcnNlZERhdGEudXNlci5pZFxuICAvLyBjb25zb2xlLmxvZyhcImN0eHN1c2VyXCIsIGN0eC51c2VyLnVzZXIuaWQpXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlcklEXCIsIHVzZXJJZCk7XG5cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cblxuICBpZiAoc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIHN1Y2Nlc3NcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIHNldFN0YXR1cyhcIlwiKVxuICAgICAgZm9ybWlrLnJlc2V0Rm9ybSgpO1xuICAgICAgZmlsZVJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgfSwgMTAwMCk7XG5cbiAgICBjbGVhclRpbWVvdXQoKTtcbn1cblxuICBjb25zdCBbZmlsZUFyciwgc2V0RmlsZUFycl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIG1lZGlhOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJjbGlja2VkXCIsIGN0eC5tb2RhbE9wZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1bWl0XCIsIGN0eC51c2VyKTtcblxuICAgICAgY29uc3QgaW5uZXJWYWxiaiA9IHtcbiAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsICBcbiAgICAgICAgdXNlcjogY3R4LnVzZXIudXNlci5pZCA/IGN0eC51c2VyLnVzZXIuaWQgOiBudWxsLFxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImlubmVyVmFsYmpcIiwgaW5uZXJWYWxiaik7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubWVkaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGVzLm1lZGlhJywgdmFsdWVzLm1lZGlhW2ldKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShpbm5lclZhbGJqKSk7XG4gICAgIFxuICAgXG5cbiAgICAgIGlmKGN0eC51c2VyKSB7XG4gICAgICAgIHNldE1lc3NhZ2UoXCJwZW5kaW5nXCIpXG4gICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFN0YXR1cygncGVuZGluZycpXG5cbiAgICAgICAgY29uc3QgdXNlck9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKVxuICAgICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodXNlck9iaikuand0XG5cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn19YCxcbiAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICAgIFxuICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgICAgICBcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjdHgudXNlcikge1xuICAgICAgICBzZXRNZXNzYWdlKFwiUGVuZGluZ1wiKVxuICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBzZXRTdGF0dXMoJ3BlbmRpbmcnKVxuXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2Fubm9uLWxlYWRmb3JtLXN1Ym1pc3Npb25zJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YXJlc1wiLCByZXMpO1xuXG4gICAgICAgIGlmICghcmVzLmVycm9yKSB7XG4gICAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0ZWQgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJTdWNjZXNzXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKFwic3VjY2Vzc1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgc2V0VGl0bGUoXCJFcnJvciBzdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiZXJyb3JcIilcbiAgICAgICAgICBzZXRTdGF0dXMoJ2Vycm9yJylcbiAgICAgICAgfVxuXG5cblxuXG5cblxuICAgICAgfVxuXG4gICBcbiAgICAgIFxuICAgIH0sXG4gIH0pO1xuXG4gIFxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnbWVkaWEnLCBlLnRhcmdldC5maWxlcyk7XG4gICAgICBjb25zdCBmaWxlTGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGVMaXN0W2ldKTtcbiAgICAgIH1cbiAgICAgIHNldEZpbGVBcnIoZmlsZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaXJzdEZpbGVcIiwgZmlsZUFycmF5KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBcbiAgICAgIGlmIChzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09PSBcIi8jQ29udGFjdFwiKSB7XG4gICAgXG4gICAgICAgIHNjcm9sbEN0eC5jb250YWN0UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIH1cbiBcbiAgICAgXG4gXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNjcm9sbEN0eFwiLCBzY3JvbGxDdHguY29udGFjdFJlZik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImFib3V0UmVmXCIsIHNjcm9sbEN0eC5hYm91dFJlZik7XG5cbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNjb250YWN0XCIgcmVmPXtzY3JvbGxDdHguY29udGFjdFJlZn0gPlxuICAgICAge3N0YXR1cyAmJiA8Tm90aWZpY2F0aW9uIG1lc3NhZ2U9e21lc3NhZ2V9IHRpdGxlPXt0aXRsZX0gc3VibWl0dGluZz17c3VibWl0dGluZ30gc3RhdHVzPXtzdGF0dXN9IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPlxuICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLThcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjdHgudXNlciA/IFwiXCIgOiAoPD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gY3R4LnNldE1vZGFsT3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbXItMiBtbC0yXCI+XG4gICAgICAgICAgICAgIG9yXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHsgXG4gICAgICAgICAgICAgIGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgIGN0eC5zZXRSZWdpc3RlcmluZyh0cnVlKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBTaWdudXBcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC8+KX0gdG8gc3VibWl0IHlvdXIgc2NhcnkgcGhvdG8gb3IgY29udGFjdCB1cyBzbyB3ZSBjYW4gaW52ZXN0aWdhdGUgYW5kIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInVrLWZpZWxkc2V0IHB0LThcIj5cblxuICAgICAgICAgICAgICB7LyogPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5MZWdlbmQ8L2xlZ2VuZD4gKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBuYW1lPVwicmVhc29uXCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5yZWFzb259ICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cbiAgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJtZWRpYVwiICBtdWx0aXBsZSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAgcmVmPXtmaWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIHB0LTQgZmxleC13cmFwIFwiPlxuICAgICAgICAgICAgICB7ICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmaWxlQXJyLm1hcCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgIHVrLWJvcmRlci1yb3VuZGVkIGZsZXgganVzdGlmeS1hcm91bmQgIGZsZXgtd3JhcCBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSBhbHQ9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidy1bMTUwcHhdIGgtWzE1MHB4XVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZil9ICovfVxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUFycihbXSlcbiAgICAgICAgICAgICAgICAgICB9IH0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=