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
      if ((next_router__WEBPACK_IMPORTED_MODULE_9___default().asPath) === "/#Contact") {
        scrollCtx.contactRef.current = document.getElementById("contact");
        scrollCtx.contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
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
      lineNumber: 161,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
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
                  lineNumber: 171,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "text-black mr-2 ml-2",
              children: "or"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
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
                  lineNumber: 185,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-blue-500",
                children: "Signup"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, _this)]
          }, void 0, true), " to submit your scary photo or contact us so we can investigate and get back to you."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
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
                lineNumber: 199,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                  lineNumber: 217,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
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
                lineNumber: 224,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
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
                          lineNumber: 255,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 254,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
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
                  lineNumber: 264,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2Nyb2xsQ3R4IiwiU2Nyb2xsQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInNldFRpbWVvdXQiLCJmb3JtaWsiLCJyZXNldEZvcm0iLCJmaWxlUmVmIiwiY3VycmVudCIsInZhbHVlIiwic2V0RmlsZUFyciIsImNsZWFyVGltZW91dCIsImZpbGVBcnIiLCJ1c2VSZWYiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lZGlhIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJpbm5lclZhbGJqIiwiaW5mbyIsImlkIiwiZGF0YSIsIkZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyT2JqIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwicGFyc2UiLCJqd3QiLCJmZXRjaCIsIm1ldGhvZCIsImF1dGhvcml6YXRpb24iLCJib2R5IiwicmVxdWVzdCIsImpzb24iLCJyZXNwb25zZSIsImVycm9yIiwiYWxlcnQiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwidXNlRWZmZWN0IiwiY29udGFjdFJlZiIsInJvdXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJhYm91dFJlZiIsInNldFJlZ2lzdGVyaW5nIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJmaWxlIiwiaW5kZXgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUUzQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixpREFBVSxDQUFDRyxpRUFBRCxDQUE1QjtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTixHQUFHLENBQUNPLElBQS9CLEVBTjJCLENBUzNCO0FBQ0E7QUFDQTtBQUNBOztBQVoyQixrQkFjQ0MsK0NBQVEsQ0FBQyxFQUFELENBZFQ7QUFBQSxNQWNwQkMsTUFkb0I7QUFBQSxNQWNaQyxTQWRZOztBQUFBLG1CQWVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FmakI7QUFBQSxNQWVwQkcsVUFmb0I7QUFBQSxNQWVSQyxhQWZROztBQUFBLG1CQWdCR0osK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCSyxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBQUEsbUJBaUJETiwrQ0FBUSxDQUFDLEVBQUQsQ0FqQlA7QUFBQSxNQWlCcEJPLEtBakJvQjtBQUFBLE1BaUJiQyxRQWpCYTs7QUFxQjNCLE1BQUlQLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0FRLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLGNBQVEsQ0FBQyxFQUFELENBQVI7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QUE7QUFBQSwyQkFMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUF1QkdyRSxPQUFPLENBQUNDLE9BQVIsS0FBb0IsSUFBcEIsR0FBMkIsSUFBM0IsZ0JBQWtDO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQVksb0JBQUUsRUFBQyxRQUFmO0FBQXdCLDJCQUFTLEVBQUMsdUJBQWxDO0FBQTBELGtDQUFhLFlBQXZFO0FBQXNGLHlCQUFPLEVBQUUsaUJBQUM0QyxDQUFELEVBQU87QUFDdklBLHFCQUFDLENBQUMyQixjQUFGO0FBQ0VqQiw0QkFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDdEQsS0FBaEMsR0FBd0MsSUFBeEM7QUFDQUYsMkJBQU8sQ0FBQ0MsT0FBUixHQUFrQixJQUFsQjtBQUNBRSw4QkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNGLG1CQUxpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlGRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsb1BBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0SUQsQ0FsU0Q7O0dBQU16QixTO1VBdUNXNkIsNkM7OztLQXZDWDdCLFM7QUFvU04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJmYjcwODgzYzJlOWQ4ZTliODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCB7U2Nyb2xsQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvc2Nyb2xsQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3Qgc2Nyb2xsQ3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcblxuIFxuICBjb25zb2xlLmxvZyhcIkNvbnRhY3RVc2VyXCIsIGN0eC51c2VyKVxuXG5cbiAgLy8gY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UoY3R4LnVzZXIpO1xuICAvLyBjb25zdCB1c2VySWQgPSBwYXJzZWREYXRhLnVzZXIuaWRcbiAgLy8gY29uc29sZS5sb2coXCJjdHhzdXNlclwiLCBjdHgudXNlci51c2VyLmlkKVxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJJRFwiLCB1c2VySWQpO1xuXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImluc2lkZSBzdWNjZXNzXCIpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpXG4gICAgICBzZXRUaXRsZShcIlwiKVxuICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICBzZXRTdGF0dXMoXCJcIilcbiAgICAgIGZvcm1pay5yZXNldEZvcm0oKTtcbiAgICAgIGZpbGVSZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICBzZXRGaWxlQXJyKFtdKVxuICAgIH0sIDEwMDApO1xuXG4gICAgY2xlYXJUaW1lb3V0KCk7XG59XG5cbiAgY29uc3QgW2ZpbGVBcnIsIHNldEZpbGVBcnJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZilcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJlYXNvbjogJycsXG4gICAgICBtZXNzYWdlOiAnJywgXG4gICAgICBtZWRpYTogbnVsbFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICBuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgLy8gcmVhc29uOiBZdXAuc3RyaW5nKClcbiAgICAgIC8vICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgbWVzc2FnZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgIH0pLFxuICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiLCBjdHgubW9kYWxPcGVuKTtcbiAgICAgICAgIWN0eC51c2VyICYmIGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSlcblxuICAgICAgY29uc3QgaW5uZXJWYWxiaiA9IHtcbiAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsICBcbiAgICAgICAgdXNlcjogY3R4LnVzZXIudXNlci5pZCxcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5tZWRpYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZXMubWVkaWEnLCB2YWx1ZXMubWVkaWFbaV0pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGlubmVyVmFsYmopKTtcbiAgICAgXG4gICBcblxuICAgICAgaWYoY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0TWVzc2FnZShcInBlbmRpbmdcIilcbiAgICAgICAgc2V0VGl0bGUoXCJTdWJtaXR0aW5nIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuICAgICAgICBjb25zdCB1c2VyT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpXG4gICAgICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZSh1c2VyT2JqKS5qd3RcblxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufX1gLFxuICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG5cbiAgICAgICAgXG4gIFxuICAgICAgICBpZiAoIXJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgIFxuICAgICAgICAgIHNldFRpdGxlKFwiU3VibWl0dGVkIGludmVzdGlnYXRpb25cIilcbiAgICAgICAgICBzZXRNZXNzYWdlKFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHNldFN0YXR1cyhcInN1Y2Nlc3NcIikgICBcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgIHNldFRpdGxlKFwiRXJyb3Igc3VibWl0dGluZyBpbnZlc3RpZ2F0aW9uXCIpXG4gICAgICAgICAgc2V0TWVzc2FnZShcImVycm9yXCIpXG4gICAgICAgICAgc2V0U3RhdHVzKCdlcnJvcicpXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICBcbiAgICAgIFxuICAgIH0sXG4gIH0pO1xuXG4gIFxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnbWVkaWEnLCBlLnRhcmdldC5maWxlcyk7XG4gICAgICBjb25zdCBmaWxlTGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGVMaXN0W2ldKTtcbiAgICAgIH1cbiAgICAgIHNldEZpbGVBcnIoZmlsZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaXJzdEZpbGVcIiwgZmlsZUFycmF5KTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBcbiAgICAgIGlmICghc2Nyb2xsQ3R4LmNvbnRhY3RSZWYuY3VycmVudCkge1xuICAgICAgICBpZiAocm91dGVyLmFzUGF0aCA9PT0gXCIvI0NvbnRhY3RcIikge1xuICAgICAgICBzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuICAgICAgICBzY3JvbGxDdHguY29udGFjdFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB9XG4gXG4gICAgIFxuIFxuICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxDdHhcIiwgc2Nyb2xsQ3R4LmNvbnRhY3RSZWYpO1xuICAgICAgY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBzY3JvbGxDdHguYWJvdXRSZWYpO1xuXG4gICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCIjY29udGFjdFwiIHJlZj17c2Nyb2xsQ3R4LmNvbnRhY3RSZWZ9ID5cbiAgICAgIHtzdGF0dXMgJiYgPE5vdGlmaWNhdGlvbiBtZXNzYWdlPXttZXNzYWdlfSB0aXRsZT17dGl0bGV9IHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9IHN0YXR1cz17c3RhdHVzfSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstdGlsZS1kZWZhdWx0XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBcIj5cbiAgICAgICAgICBjb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHByLTggcHQtOCBwYi04XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y3R4LnVzZXIgPyBcIlwiIDogKDw+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1yLTIgbWwtMlwiPlxuICAgICAgICAgICAgICBvclxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7IFxuICAgICAgICAgICAgICBjdHguc2V0TW9kYWxPcGVuKHRydWUpO1xuICAgICAgICAgICAgICBjdHguc2V0UmVnaXN0ZXJpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvPil9IHRvIHN1Ym1pdCB5b3VyIHNjYXJ5IHBob3RvIG9yIGNvbnRhY3QgdXMgc28gd2UgY2FuIGludmVzdGlnYXRlIGFuZCBnZXQgYmFjayB0byB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSByZWFzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW52ZXN0aWdhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWVzc2FnZX1cblxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5tZXNzYWdlICYmIGZvcm1pay5lcnJvcnMubWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkIHBiLTQgcHQtNFwiIGRhdGEtcHJvdmlkZXM9XCJmaWxldXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLXByZXZpZXcgdWstdGh1bWJuYWlsIHVrLWJvcmRlci1yb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLW5ldyBwci00XCIgPlNlbGVjdCBmaWxlPC9zcGFuPlxuXG4gIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwibWVkaWFcIiAgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gIHJlZj17ZmlsZVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBwdC00IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgeyAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiICB1ay1ib3JkZXItcm91bmRlZCBmbGV4IGp1c3RpZnktYXJvdW5kICBmbGV4LXdyYXAgXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctWzE1MHB4XSBoLVsxNTBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgeyBmaWxlUmVmLmN1cnJlbnQgPT09IG51bGwgPyBudWxsIDogPGEgaHJlZj1cIiNcIiBpZD1cInJlbW92ZVwiIGNsYXNzTmFtZT1cImJ0biBmaWxldXBsb2FkLWV4aXN0c1wiIGRhdGEtZGlzbWlzcz1cImZpbGV1cGxvYWRcIiAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLnZhbHVlID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsZUFycihbXSlcbiAgICAgICAgICAgICAgICAgICB9IH0gPlJlbW92ZTwvYT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1ibHVlLTgwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctYmx1ZS0zMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICBweC01XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB5LTIuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ibHVlLTYwMFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiA+XG4gICAgICAgICAgICAgIFN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXNcbiJdLCJzb3VyY2VSb290IjoiIn0=