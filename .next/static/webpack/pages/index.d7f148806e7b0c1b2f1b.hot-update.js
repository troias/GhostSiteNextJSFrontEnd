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
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/notification */ "./components/notification.js");
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

  if (ctx.user) {
    var userObj = localStorage.getItem("user");
    var _token = JSON.parse(userObj).jwt;
    console.log("getJwt", _token);
  }

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fileArr = _useState2[0],
      setFileArr = _useState2[1];

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
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
        var innerValbj, data, i, request, response;
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
                  _context.next = 13;
                  break;
                }

                setStatus('pending');
                _context.next = 8;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  authorization: "Bearer ".concat(token),
                  body: data
                });

              case 8:
                request = _context.sent;
                _context.next = 11;
                return request.json();

              case 11:
                response = _context.sent;

                // console.log("data", data);
                if (!response.error) {
                  alert("Your message has been sent successfully");
                  setStatus('success');
                } else {
                  alert("Something went wrong");
                  setStatus('error');
                }

              case 13:
                if (!ctx.user) {
                  ctx.setModalOpen(true);
                }

              case 14:
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
        lineNumber: 119,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
                lineNumber: 132,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
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
                  lineNumber: 150,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
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
                lineNumber: 157,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
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
                          lineNumber: 188,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
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
                  lineNumber: 197,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "OFKYfV3FxeNrbR666uCkRM8hn24=", false, function () {
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


/***/ }),

/***/ "./components/notification.js":
/*!************************************!*\
  !*** ./components/notification.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.module.css */ "./components/notification.module.css");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/notification.js",
    _s = $RefreshSig$();






function Notification(props) {
  _s();

  var title = props.title,
      message = props.message,
      status = props.status,
      submitting = props.submitting;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _document = _useState[0],
      set_document = _useState[1]; // const clickHandler = (e) => {
  //   if (e.target.className === classes.notification) {
  //     set_document(null)
  //   }
  // }


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return set_document(document);
  }, []);
  console.log("Notification(props)", props);
  var statusClasses = '';

  if (status === 'pending') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().pending);
  }

  if (status === 'success') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().success);
  }

  if (status === 'error') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().error);
  }

  if (submitting === false) {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().hidden);
  }

  var cssClasses = "".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_4___default().notification), " ").concat(statusClasses);
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: cssClasses,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 62
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 78
    }, this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 34
  }, this), document.getElementById("myportal"));
}

_s(Notification, "HNGMAY6ON/XoM3AjeyN6TJ3VzvM=");

_c = Notification;
/* harmony default export */ __webpack_exports__["default"] = (Notification);

var _c;

$RefreshReg$(_c, "Notification");

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


/***/ }),

/***/ "./components/notification.module.css":
/*!********************************************!*\
  !*** ./components/notification.module.css ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/notification.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/notification.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./notification.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/notification.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/notification.module.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/notification.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".notification_notification__2nkbv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: black;\n    /* background-color: var(--color-grey-800); */\n    background-color: black;\n    padding: 2rem;\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);\n    position: fixed;\n    height: 5rem;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n  }\n  \n  .notification_notification__2nkbv h2 {\n    font-size: 1.5rem;\n    margin: 0;\n  }\n  \n  .notification_notification__2nkbv p {\n    margin: 0;\n  }\n  \n  .notification_success__1-trt {\n    background-color: #12bd4b;\n    color: black;\n  }\n  \n  .notification_pending__17nXv {\n    background-color: #732392;\n    color: #fff;\n  }\n  \n  .notification_hidden__JuX1v {\n    display: none;\n  }\n  .notification_error__1otBo {\n    background-color:red;\n  }\n  \n  @media (min-width: 768px) {\n    .notification_notification__2nkbv {\n      width: 40rem;\n      left: calc(50% - 20rem);\n      border-top-right-radius: 6px;\n      border-top-left-radius: 6px;\n    }\n  }", "",{"version":3,"sources":["webpack://components/notification.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,6CAA6C;IAC7C,uBAAuB;IACvB,aAAa;IACb,wCAAwC;IACxC,eAAe;IACf,YAAY;IACZ,SAAS;IACT,WAAW;IACX,OAAO;IACP,0BAA0B;IAC1B,yBAAyB;EAC3B;;EAEA;IACE,iBAAiB;IACjB,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,WAAW;EACb;;EAEA;IACE,aAAa;EACf;EACA;IACE,oBAAoB;EACtB;;EAEA;IACE;MACE,YAAY;MACZ,uBAAuB;MACvB,4BAA4B;MAC5B,2BAA2B;IAC7B;EACF","sourcesContent":[".notification {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: black;\n    /* background-color: var(--color-grey-800); */\n    background-color: black;\n    padding: 2rem;\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);\n    position: fixed;\n    height: 5rem;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n  }\n  \n  .notification h2 {\n    font-size: 1.5rem;\n    margin: 0;\n  }\n  \n  .notification p {\n    margin: 0;\n  }\n  \n  .success {\n    background-color: #12bd4b;\n    color: black;\n  }\n  \n  .pending {\n    background-color: #732392;\n    color: #fff;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  .error {\n    background-color:red;\n  }\n  \n  @media (min-width: 768px) {\n    .notification {\n      width: 40rem;\n      left: calc(50% - 20rem);\n      border-top-right-radius: 6px;\n      border-top-left-radius: 6px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"notification": "notification_notification__2nkbv",
	"success": "notification_success__1-trt",
	"pending": "notification_pending__17nXv",
	"hidden": "notification_hidden__JuX1v",
	"error": "notification_error__1otBo"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RpZmljYXRpb24ubW9kdWxlLmNzcz9iOTQ2Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZXJPYmoiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJqd3QiLCJmaWxlQXJyIiwic2V0RmlsZUFyciIsImZpbGVSZWYiLCJ1c2VSZWYiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lc3NhZ2UiLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiaW5uZXJWYWxiaiIsImluZm8iLCJkYXRhIiwiRm9ybURhdGEiLCJpIiwibGVuZ3RoIiwiYXBwZW5kIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsInJlcXVlc3QiLCJqc29uIiwicmVzcG9uc2UiLCJlcnJvciIsImFsZXJ0Iiwic2V0TW9kYWxPcGVuIiwib25GaWxlQ2hhbmdlIiwiZSIsInNldEZpZWxkVmFsdWUiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGVMaXN0IiwiZmlsZUFycmF5IiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibWFwIiwiZmlsZSIsImluZGV4IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3VycmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiTm90aWZpY2F0aW9uIiwidGl0bGUiLCJzdWJtaXR0aW5nIiwiX2RvY3VtZW50Iiwic2V0X2RvY3VtZW50IiwidXNlRWZmZWN0Iiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJjc3NDbGFzc2VzIiwiUmVhY3RET00iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRTNCLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkosR0FBRyxDQUFDSyxJQUE5Qjs7QUFKMkIsa0JBS0NDLCtDQUFRLENBQUMsRUFBRCxDQUxUO0FBQUEsTUFLcEJDLE1BTG9CO0FBQUEsTUFLWkMsU0FMWTs7QUFPM0IsTUFBSVIsR0FBRyxDQUFDSyxJQUFSLEVBQWM7QUFDWixRQUFNSSxPQUFPLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFoQjtBQUNBLFFBQU1DLE1BQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE9BQVgsRUFBb0JNLEdBQWxDO0FBRUFaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JRLE1BQXRCO0FBQ0Q7O0FBWjBCLG1CQWdCR04sK0NBQVEsQ0FBQyxFQUFELENBaEJYO0FBQUEsTUFnQnBCVSxPQWhCb0I7QUFBQSxNQWdCWEMsVUFoQlc7O0FBa0IzQixNQUFNQyxPQUFPLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF0QixDQWxCMkIsQ0FtQjNCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsaURBQVMsQ0FBQztB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QUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSx3Q0FBd0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLGlEQUFpRCxpQ0FBaUMsb0JBQW9CLCtDQUErQyxzQkFBc0IsbUJBQW1CLGdCQUFnQixrQkFBa0IsY0FBYyxpQ0FBaUMsZ0NBQWdDLEtBQUssMEJBQTBCLHdCQUF3QixnQkFBZ0IsS0FBSyx5QkFBeUIsZ0JBQWdCLEtBQUssa0JBQWtCLGdDQUFnQyxtQkFBbUIsS0FBSyxrQkFBa0IsZ0NBQWdDLGtCQUFrQixLQUFLLGlCQUFpQixvQkFBb0IsS0FBSyxZQUFZLDJCQUEyQixLQUFLLG1DQUFtQyxxQkFBcUIscUJBQXFCLGdDQUFnQyxxQ0FBcUMsb0NBQW9DLE9BQU8sS0FBSyxtQkFBbUI7QUFDMW9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kN2YxNDg4MDZlN2IwYzFiMmYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc29sZS5sb2coXCJpc0xvZ2dlZEluXCIsIGN0eC51c2VyKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGlmIChjdHgudXNlcikge1xuICAgIGNvbnN0IHVzZXJPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIilcbiAgICBjb25zdCB0b2tlbiA9IEpTT04ucGFyc2UodXNlck9iaikuand0XG4gIFxuICAgIGNvbnNvbGUubG9nKFwiZ2V0Snd0XCIsIHRva2VuICk7XG4gIH1cblxuXG5cbiAgY29uc3QgW2ZpbGVBcnIsIHNldEZpbGVBcnJdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIG1lZGlhOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJjb250YWN0Rm9ybVZhbHVlc1wiLCB2YWx1ZXMpO1xuXG5cblxuICAgICAgY29uc3QgaW5uZXJWYWxiaiA9IHtcbiAgICAgICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgICAgIHJlYXNvbjogdmFsdWVzLnJlYXNvbixcbiAgICAgICAgaW5mbzogdmFsdWVzLm1lc3NhZ2UsXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gIFxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5tZWRpYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZXMubWVkaWEnLCB2YWx1ZXMubWVkaWFbaV0pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGlubmVyVmFsYmopKTtcblxuXG5cblxuICAgICAgaWYoY3R4LnVzZXIpIHtcbiAgICAgICAgc2V0U3RhdHVzKCdwZW5kaW5nJylcblxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9sZWFkLWZvcm0tc3VibWlzc2lvbnMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9KTtcbiAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgICAgICBcbiAgXG4gICAgICAgIGlmICghcmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICBhbGVydChcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICBzZXRTdGF0dXMoJ3N1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgc2V0U3RhdHVzKCdlcnJvcicpXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZiAoIWN0eC51c2VyKSB7XG4gICAgICAgIGN0eC5zZXRNb2RhbE9wZW4odHJ1ZSlcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcblxuICAgIH0sXG4gIH0pO1xuXG4gIFxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnbWVkaWEnLCBlLnRhcmdldC5maWxlcyk7XG4gICAgICBjb25zdCBmaWxlTGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGVMaXN0W2ldKTtcbiAgICAgIH1cbiAgICAgIHNldEZpbGVBcnIoZmlsZUFycmF5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaXJzdEZpbGVcIiwgZmlsZUFycmF5KTtcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNjb250YWN0XCIgPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgXCI+XG4gICAgICAgICAgY29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3VibWl0IHlvdXIgc2NhcnkgcGhvdG8gb3IgY29udGFjdCB1cyBzbyB3ZSBjYW4gaW52ZXN0aWdhdGUgYW5kIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInVrLWZpZWxkc2V0IHB0LThcIj5cblxuICAgICAgICAgICAgICB7LyogPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5MZWdlbmQ8L2xlZ2VuZD4gKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBuYW1lPVwicmVhc29uXCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5yZWFzb259ICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cbiAgXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJtZWRpYVwiICBtdWx0aXBsZSBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAgcmVmPXtmaWxlUmVmfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYXJvdW5kIHB0LTQgZmxleC13cmFwIFwiPlxuICAgICAgICAgICAgICB7ICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBmaWxlQXJyLm1hcCgoZmlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgIHVrLWJvcmRlci1yb3VuZGVkIGZsZXgganVzdGlmeS1hcm91bmQgIGZsZXgtd3JhcCBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfSBhbHQ9XCJwcmV2aWV3XCIgY2xhc3NOYW1lPVwidy1bMTUwcHhdIGgtWzE1MHB4XVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgIH0gfSA+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cywgc3VibWl0dGluZyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW19kb2N1bWVudCwgc2V0X2RvY3VtZW50XSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgLy8gICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBjbGFzc2VzLm5vdGlmaWNhdGlvbikge1xuICAvLyAgICAgc2V0X2RvY3VtZW50KG51bGwpXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldF9kb2N1bWVudChkb2N1bWVudCksIFtdKVxuXG4gIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uKHByb3BzKVwiLCBwcm9wcylcblxuICBsZXQgc3RhdHVzQ2xhc3NlcyA9ICcnO1xuXG4gIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnBlbmRpbmc7XG4gIH1cblxuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xuICB9XG5cbiAgaWYgKHN1Ym1pdHRpbmcgPT09IGZhbHNlKSB7XG4gICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuaGlkZGVuO1xuICB9XG5cbiAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKCggPGRpdiBjbGFzc05hbWU9e2Nzc0NsYXNzZXN9PjxoMj57dGl0bGV9PC9oMj48cD57bWVzc2FnZX08L3A+IDwvZGl2PiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlwb3J0YWxcIikgKVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubm90aWZpY2F0aW9uX25vdGlmaWNhdGlvbl9fMm5rYnYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleS04MDApOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgfVxcbiAgXFxuICAubm90aWZpY2F0aW9uX25vdGlmaWNhdGlvbl9fMm5rYnYgaDIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgXFxuICAubm90aWZpY2F0aW9uX25vdGlmaWNhdGlvbl9fMm5rYnYgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLm5vdGlmaWNhdGlvbl9zdWNjZXNzX18xLXRydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMmJkNGI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIFxcbiAgLm5vdGlmaWNhdGlvbl9wZW5kaW5nX18xN25YdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzIzOTI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgXFxuICAubm90aWZpY2F0aW9uX2hpZGRlbl9fSnVYMXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm5vdGlmaWNhdGlvbl9lcnJvcl9fMW90Qm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcXG4gIH1cXG4gIFxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5ub3RpZmljYXRpb25fbm90aWZpY2F0aW9uX18ybmtidiB7XFxuICAgICAgd2lkdGg6IDQwcmVtO1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjByZW0pO1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICB9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsMEJBQTBCO0lBQzFCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0U7TUFDRSxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLDRCQUE0QjtNQUM1QiwyQkFBMkI7SUFDN0I7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubm90aWZpY2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXktODAwKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIH1cXG4gIFxcbiAgLm5vdGlmaWNhdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC5ub3RpZmljYXRpb24gcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIFxcbiAgLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJiZDRiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICBcXG4gIC5wZW5kaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczMjM5MjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICBcXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XFxuICB9XFxuICBcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAubm90aWZpY2F0aW9uIHtcXG4gICAgICB3aWR0aDogNDByZW07XFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHJlbSk7XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJub3RpZmljYXRpb25cIjogXCJub3RpZmljYXRpb25fbm90aWZpY2F0aW9uX18ybmtidlwiLFxuXHRcInN1Y2Nlc3NcIjogXCJub3RpZmljYXRpb25fc3VjY2Vzc19fMS10cnRcIixcblx0XCJwZW5kaW5nXCI6IFwibm90aWZpY2F0aW9uX3BlbmRpbmdfXzE3blh2XCIsXG5cdFwiaGlkZGVuXCI6IFwibm90aWZpY2F0aW9uX2hpZGRlbl9fSnVYMXZcIixcblx0XCJlcnJvclwiOiBcIm5vdGlmaWNhdGlvbl9lcnJvcl9fMW90Qm9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9