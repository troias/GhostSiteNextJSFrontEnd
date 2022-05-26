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
        var innerValbj, data, i, userObj, token, request, response, timer, req, res;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  console.log("clicked", ctx.modalOpen);
                console.log("sumit", ctx);

                if (ctx.user) {
                  innerValbj = {
                    name: values.name,
                    reason: values.reason,
                    info: values.message,
                    user: !ctx.user.user.id
                  };
                } else {
                  innerValbj = {
                    name: values.name,
                    reason: values.reason,
                    info: values.message,
                    user: null
                  };
                }

                console.log("innerValbj", innerValbj);
                data = new FormData();

                for (i = 0; i < values.media.length; i++) {
                  data.append('files.media', values.media[i]);
                }

                data.append('data', JSON.stringify(innerValbj));

                if (!ctx.user) {
                  _context.next = 22;
                  break;
                }

                setMessage("pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                userObj = localStorage.getItem("user");
                token = JSON.parse(userObj).jwt;
                _context.next = 15;
                return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/lead-form-submissions"), {
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
                console.log("Contactdata", data);

                if (!response.error) {
                  setTitle("Submitted investigation");
                  setMessage("Success");
                  setStatus("success");
                }

                if (response.error) {
                  alert("Something went wrong");
                  setTitle("Error submitting investigation");
                  setMessage("error");
                  setStatus('error');
                  timer = setTimeout(function () {
                    setSubmitting(false);
                    clearTimeout(timer);
                  }, 1000);
                }

              case 22:
                if (ctx.user) {
                  _context.next = 35;
                  break;
                }

                setMessage("Pending");
                setTitle("Submitting investigation");
                setSubmitting(true);
                setStatus('pending');
                _context.next = 29;
                return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/annon-leadform-submissions"), {
                  method: 'POST',
                  body: data
                });

              case 29:
                req = _context.sent;
                _context.next = 32;
                return req.json();

              case 32:
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

              case 35:
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
      status: status,
      onClick: function onClick(e) {
        return setSubmitting(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
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
                  lineNumber: 225,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-black mr-2 ml-2",
              children: "/"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
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
                  lineNumber: 239,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, _this)]
          }, void 0, true), " ", !ctx.user && "or", " submit an investigation anonymously ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-blue-500",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              className: "fas fa-user-circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 75
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
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
                lineNumber: 255,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
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
                  lineNumber: 273,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
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
                lineNumber: 280,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
                    columnNumber: 21
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
                          lineNumber: 311,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 310,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 298,
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
                  lineNumber: 322,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 214,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiZm9ybWlrIiwicmVzZXRGb3JtIiwiZmlsZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldEZpbGVBcnIiLCJjbGVhclRpbWVvdXQiLCJmaWxlQXJyIiwidXNlUmVmIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJpbm5lclZhbGJqIiwiaW5mbyIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyT2JqIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwicGFyc2UiLCJqd3QiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsInJlcXVlc3QiLCJqc29uIiwicmVzcG9uc2UiLCJlcnJvciIsImFsZXJ0IiwidGltZXIiLCJyZXEiLCJyZXMiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInJvdXRlciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNldE1vZGFsT3BlbiIsInNldFJlZ2lzdGVyaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QixDQUgyQixDQU0zQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBUSxZQUFNLENBQUNDLFNB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YzUwNTVlYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgU2Nyb2xsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3Njcm9sbENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnN0IHNjcm9sbEN0eCA9IHVzZUNvbnRleHQoU2Nyb2xsQ29udGV4dCk7XG5cblxuICAvLyBjb25zb2xlLmxvZyhcIkNvbnRhY3RVc2VyXCIsIGN0eC51c2VyKVxuXG5cbiAgLy8gY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UoY3R4LnVzZXIpO1xuICAvLyBjb25zdCB1c2VySWQgPSBwYXJzZWREYXRhLnVzZXIuaWRcbiAgLy8gY29uc29sZS5sb2coXCJjdHhzdXNlclwiLCBjdHgudXNlci51c2VyLmlkKVxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJJRFwiLCB1c2VySWQpO1xuXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluc2lkZSBzdWNjZXNzXCIpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICBzZXRTdGF0dXMoXCJcIilcbiAgICAgIGZvcm1pay5yZXNldEZvcm0oKTtcbiAgICAgIGZpbGVSZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICBzZXRGaWxlQXJyKFtdKVxuICAgIH0sIDEwMDApO1xuXG4gICAgY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxuICBjb25zdCBbZmlsZUFyciwgc2V0RmlsZUFycl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgbWVkaWE6IG51bGxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgbmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIC8vIHJlYXNvbjogWXVwLnN0cmluZygpXG4gICAgICAvLyAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICB9KSxcbiAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiwgY3R4Lm1vZGFsT3Blbik7XG4gICAgICBjb25zb2xlLmxvZyhcInN1bWl0XCIsIGN0eCk7XG5cbiAgICAgIGxldCBpbm5lclZhbGJqXG5cbiAgICAgIGlmIChjdHgudXNlcikge1xuICAgICAgICBpbm5lclZhbGJqID0ge1xuICAgICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgICBpbmZvOiB2YWx1ZXMubWVzc2FnZSxcbiAgICAgICAgICB1c2VyOiAhY3R4LnVzZXIudXNlci5pZFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lclZhbGJqID0ge1xuICAgICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgICBpbmZvOiB2YWx1ZXMubWVzc2FnZSxcbiAgICAgICAgICB1c2VyOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJpbm5lclZhbGJqXCIsIGlubmVyVmFsYmopO1xuXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLm1lZGlhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlcy5tZWRpYScsIHZhbHVlcy5tZWRpYVtpXSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuYXBwZW5kKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoaW5uZXJWYWxiaikpO1xuXG5cblxuICAgICAgaWYgKGN0eC51c2VyKSB7XG4gICAgICAgIHNldE1lc3NhZ2UoXCJwZW5kaW5nXCIpXG4gICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFN0YXR1cygncGVuZGluZycpXG5cbiAgICAgICAgY29uc3QgdXNlck9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKVxuICAgICAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodXNlck9iaikuand0XG5cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnNgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufX1gLFxuICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG5cblxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRhY3RkYXRhXCIsIGRhdGEpO1xuXG5cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLmVycm9yKSB7XG5cbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpXG5cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpICB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmICghY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0TWVzc2FnZShcIlBlbmRpbmdcIilcbiAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2Fubm9uLWxlYWRmb3JtLXN1Ym1pc3Npb25zYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhcmVzXCIsIHJlcyk7XG5cbiAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRlZCBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcIlN1Y2Nlc3NcIilcbiAgICAgICAgICBzZXRTdGF0dXMoXCJzdWNjZXNzXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICBzZXRUaXRsZShcIkVycm9yIHN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICAgIHNldE1lc3NhZ2UoXCJlcnJvclwiKVxuICAgICAgICAgIHNldFN0YXR1cygnZXJyb3InKVxuICAgICAgICB9XG5cblxuXG5cblxuXG4gICAgICB9XG5cblxuXG4gICAgfSxcbiAgfSk7XG5cblxuICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ21lZGlhJywgZS50YXJnZXQuZmlsZXMpO1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgIH1cbiAgICBzZXRGaWxlQXJyKGZpbGVBcnJheSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmaXJzdEZpbGVcIiwgZmlsZUFycmF5KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoc2Nyb2xsQ3R4LmNvbnRhY3RSZWYuY3VycmVudCkge1xuICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT09IFwiLyNDb250YWN0XCIpIHtcblxuICAgICAgICBzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwic2Nyb2xsQ3R4XCIsIHNjcm9sbEN0eC5jb250YWN0UmVmKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFib3V0UmVmXCIsIHNjcm9sbEN0eC5hYm91dFJlZik7XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiIHJlZj17c2Nyb2xsQ3R4LmNvbnRhY3RSZWZ9ID5cbiAgICAgIHtzdGF0dXMgJiYgPE5vdGlmaWNhdGlvbiBtZXNzYWdlPXttZXNzYWdlfSB0aXRsZT17dGl0bGV9IHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9IHN0YXR1cz17c3RhdHVzfSBvbkNsaWNrPXsoZSkgPT4gc2V0U3VibWl0dGluZyhmYWxzZSl9IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPlxuICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLThcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjdHgudXNlciA/IFwiXCIgOiAoPD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBjdHguc2V0TW9kYWxPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbXItMiBtbC0yXCI+XG4gICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LnNldFJlZ2lzdGVyaW5nKHRydWUpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC8+KX0geyFjdHgudXNlciAmJiBcIm9yXCJ9IHN1Ym1pdCBhbiBpbnZlc3RpZ2F0aW9uIGFub255bW91c2x5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPjwvc3Bhbj5cblxuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cIm1lZGlhXCIgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gcmVmPXtmaWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIHB0LTQgZmxleC13cmFwIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiAgdWstYm9yZGVyLXJvdW5kZWQgZmxleCBqdXN0aWZ5LWFyb3VuZCAgZmxleC13cmFwIFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSl9IGFsdD1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpfSAqL31cbiAgICAgICAgICAgICAgICAgIHtmaWxlUmVmLmN1cnJlbnQgPT09IG51bGwgPyBudWxsIDogPGEgaHJlZj1cIiNcIiBpZD1cInJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBmaWxldXBsb2FkLWV4aXN0c1wiIGRhdGEtZGlzbWlzcz1cImZpbGV1cGxvYWRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgfX0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=