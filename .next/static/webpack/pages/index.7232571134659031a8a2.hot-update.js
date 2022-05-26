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
      status: status
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsInVzZVN0YXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiZm9ybWlrIiwicmVzZXRGb3JtIiwiZmlsZVJlZiIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldEZpbGVBcnIiLCJjbGVhclRpbWVvdXQiLCJmaWxlQXJyIiwidXNlUmVmIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm5hbWUiLCJyZWFzb24iLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJpbm5lclZhbGJqIiwiaW5mbyIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyT2JqIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwicGFyc2UiLCJqd3QiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsInJlcXVlc3QiLCJqc29uIiwicmVzcG9uc2UiLCJlcnJvciIsImFsZXJ0IiwidGltZXIiLCJyZXEiLCJyZXMiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInJvdXRlciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNldE1vZGFsT3BlbiIsInNldFJlZ2lzdGVyaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QixDQUgyQixDQU0zQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUosbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUYsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBUSxZQUFNLENBQUNDLFNB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QUFBQTtBQUFBLCtCQUZGO0FBT0QscUJBVEQ7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQXlCR3hFLE9BQU8sQ0FBQ0MsT0FBUixLQUFvQixJQUFwQixHQUEyQixJQUEzQixnQkFBa0M7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBWSxvQkFBRSxFQUFDLFFBQWY7QUFBd0IsMkJBQVMsRUFBQyx1QkFBbEM7QUFBMEQsa0NBQWEsWUFBdkU7QUFBb0YseUJBQU8sRUFBRSxpQkFBQ2lELENBQUQsRUFBTztBQUNySUEscUJBQUMsQ0FBQ3lCLGNBQUYsR0FEcUksQ0FFckk7O0FBQ0EzRSwyQkFBTyxDQUFDQyxPQUFSLEdBQWtCLElBQWxCO0FBQ0FFLDhCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsbUJBTGtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXpCckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBbUZFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxvUEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdKRCxDQTVWRDs7R0FBTXRCLFM7VUF1Q1cwQiw2Qzs7O0tBdkNYMUIsUztBQThWTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjMyNTcxMTM0NjU5MDMxYThhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBTY3JvbGxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3Qgc2Nyb2xsQ3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcblxuXG4gIC8vIGNvbnNvbGUubG9nKFwiQ29udGFjdFVzZXJcIiwgY3R4LnVzZXIpXG5cblxuICAvLyBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShjdHgudXNlcik7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IHBhcnNlZERhdGEudXNlci5pZFxuICAvLyBjb25zb2xlLmxvZyhcImN0eHN1c2VyXCIsIGN0eC51c2VyLnVzZXIuaWQpXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlcklEXCIsIHVzZXJJZCk7XG5cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cblxuICBpZiAoc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zaWRlIHN1Y2Nlc3NcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE1lc3NhZ2UoXCJcIilcbiAgICAgIHNldFRpdGxlKFwiXCIpXG4gICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgIHNldFN0YXR1cyhcIlwiKVxuICAgICAgZm9ybWlrLnJlc2V0Rm9ybSgpO1xuICAgICAgZmlsZVJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgIHNldEZpbGVBcnIoW10pXG4gICAgfSwgMTAwMCk7XG5cbiAgICBjbGVhclRpbWVvdXQoKTtcbiAgfVxuXG4gIGNvbnN0IFtmaWxlQXJyLCBzZXRGaWxlQXJyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgLy8gY29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgbmFtZTogJycsXG4gICAgICByZWFzb246ICcnLFxuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBtZWRpYTogbnVsbFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgLy8gcmVhc29uOiBZdXAuc3RyaW5nKClcbiAgICAgIC8vICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgbWVzc2FnZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgIH0pLFxuICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgLy8gIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiLCBjdHgubW9kYWxPcGVuKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VtaXRcIiwgY3R4KTtcblxuICAgICAgbGV0IGlubmVyVmFsYmpcblxuICAgICAgaWYgKGN0eC51c2VyKSB7XG4gICAgICAgIGlubmVyVmFsYmogPSB7XG4gICAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZXMucmVhc29uLFxuICAgICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICAgIHVzZXI6ICFjdHgudXNlci51c2VyLmlkXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVyVmFsYmogPSB7XG4gICAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZXMucmVhc29uLFxuICAgICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgICAgIHVzZXI6IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImlubmVyVmFsYmpcIiwgaW5uZXJWYWxiaik7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubWVkaWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGVzLm1lZGlhJywgdmFsdWVzLm1lZGlhW2ldKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShpbm5lclZhbGJqKSk7XG5cblxuXG4gICAgICBpZiAoY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0TWVzc2FnZShcInBlbmRpbmdcIilcbiAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuICAgICAgICBjb25zdCB1c2VyT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpXG4gICAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZSh1c2VyT2JqKS5qd3RcblxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2xlYWQtZm9ybS1zdWJtaXNzaW9uc2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59fWAsXG4gICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGFjdGRhdGFcIiwgZGF0YSk7XG5cblxuXG4gICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcblxuICAgICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGVkIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHNldFN0YXR1cyhcInN1Y2Nlc3NcIilcblxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikgIHtcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgIHNldFRpdGxlKFwiRXJyb3Igc3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcImVycm9yXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKCdlcnJvcicpXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYgKCFjdHgudXNlcikge1xuICAgICAgICBzZXRNZXNzYWdlKFwiUGVuZGluZ1wiKVxuICAgICAgICBzZXRUaXRsZShcIlN1Ym1pdHRpbmcgaW52ZXN0aWdhdGlvblwiKVxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBzZXRTdGF0dXMoJ3BlbmRpbmcnKVxuXG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYW5ub24tbGVhZGZvcm0tc3VibWlzc2lvbnNgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFyZXNcIiwgcmVzKTtcblxuICAgICAgICBpZiAoIXJlcy5lcnJvcikge1xuICAgICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGVkIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHNldFN0YXR1cyhcInN1Y2Nlc3NcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgIHNldFRpdGxlKFwiRXJyb3Igc3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcImVycm9yXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKCdlcnJvcicpXG4gICAgICAgIH1cblxuXG5cblxuXG5cbiAgICAgIH1cblxuXG5cbiAgICB9LFxuICB9KTtcblxuXG4gIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJlXCIsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnbWVkaWEnLCBlLnRhcmdldC5maWxlcyk7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWxlQXJyYXkucHVzaChmaWxlTGlzdFtpXSk7XG4gICAgfVxuICAgIHNldEZpbGVBcnIoZmlsZUFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZpcnN0RmlsZVwiLCBmaWxlQXJyYXkpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmIChzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gXCIvI0NvbnRhY3RcIikge1xuXG4gICAgICAgIHNjcm9sbEN0eC5jb250YWN0UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coXCJzY3JvbGxDdHhcIiwgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYWJvdXRSZWZcIiwgc2Nyb2xsQ3R4LmFib3V0UmVmKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNjb250YWN0XCIgcmVmPXtzY3JvbGxDdHguY29udGFjdFJlZn0gPlxuICAgICAge3N0YXR1cyAmJiA8Tm90aWZpY2F0aW9uIG1lc3NhZ2U9e21lc3NhZ2V9IHRpdGxlPXt0aXRsZX0gc3VibWl0dGluZz17c3VibWl0dGluZ30gc3RhdHVzPXtzdGF0dXN9IC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPlxuICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLThcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjdHgudXNlciA/IFwiXCIgOiAoPD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBjdHguc2V0TW9kYWxPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgbXItMiBtbC0yXCI+XG4gICAgICAgICAgICAgICAgL1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgY3R4LnNldFJlZ2lzdGVyaW5nKHRydWUpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC8+KX0geyFjdHgudXNlciAmJiBcIm9yXCJ9IHN1Ym1pdCBhbiBpbnZlc3RpZ2F0aW9uIGFub255bW91c2x5IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj4gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPjwvc3Bhbj5cblxuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cIm1lZGlhXCIgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gcmVmPXtmaWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIHB0LTQgZmxleC13cmFwIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiAgdWstYm9yZGVyLXJvdW5kZWQgZmxleCBqdXN0aWZ5LWFyb3VuZCAgZmxleC13cmFwIFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSl9IGFsdD1cInByZXZpZXdcIiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coXCJmaWxlUmVmXCIsIGZpbGVSZWYpfSAqL31cbiAgICAgICAgICAgICAgICAgIHtmaWxlUmVmLmN1cnJlbnQgPT09IG51bGwgPyBudWxsIDogPGEgaHJlZj1cIiNcIiBpZD1cInJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBmaWxldXBsb2FkLWV4aXN0c1wiIGRhdGEtZGlzbWlzcz1cImZpbGV1cGxvYWRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgfX0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=