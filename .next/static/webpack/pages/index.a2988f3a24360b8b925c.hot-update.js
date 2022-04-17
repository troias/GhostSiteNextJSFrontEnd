self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/contact-us.js":
/*!**********************************!*\
  !*** ./components/contact-us.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ContactUs = function ContactUs(props) {
  _s();

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
    initialValues: {
      name: '',
      reason: '',
      message: '',
      file: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values) {
        var formData, i, response, data;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("contactFormValues", values);
                formData = new FormData();
                formData.append('name', values.name);
                formData.append('reason', values.reason);
                formData.append('info', values.message);

                for (i = 0; i < values.file.length; i++) {
                  formData.append('media', values.file[i]);
                } // console.log("formData", formData);
                // formData.forEach((value, key) => {
                //   console.log("key", key);
                //   console.log("value", value);
                // }
                // )


                _context.next = 8;
                return fetch('http://localhost:1337/api/lead-form-submissions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    data: formData
                  })
                });

              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.json();

              case 11:
                data = _context.sent;
                console.log("data", data);

                if (!data.error) {
                  alert("Your message has been sent successfully");
                } else {
                  alert("Something went wrong");
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

  var handleFileChange = function handleFileChange(e) {
    console.log("e", e.target.files); // formik.setFieldValue('file', e.target.files);

    var fileList = e.target.files;
    var fileArray = [];

    for (var i = 0; i < fileList.length; i++) {
      fileArray.push(fileList[i]);
    }

    console.log("firstFile", fileArray);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    id: "#contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "uk-tile-default",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "text-4xl ",
        children: "contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
          onSubmit: formik.handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
            className: "uk-fieldset pt-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "uk-margin",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
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
                lineNumber: 96,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "uk-margin",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
                className: "uk-select",
                name: "reason",
                id: "reason",
                value: formik.values.reason,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  value: "",
                  children: "Select a reason"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "uk-margin",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                className: "uk-textarea",
                rows: "5",
                id: "message",
                placeholder: "Message",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                    multiple: true,
                    ref: fileRef,
                    id: "file",
                    type: "file",
                    onChange: function onChange(e) {
                      formik.setFieldValue('file', _objectSpread(_objectSpread({}, formik.values.file), {}, (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.currentTarget.name, e.currentTarget.files)));
                      handleFileChange(e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this), fileRef.current === null ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  href: "#",
                  id: "remove",
                  className: "btn fileupload-exists",
                  "data-dismiss": "fileupload",
                  onClick: function onClick(e) {
                    return document.getElementById('file').value = null;
                  },
                  children: "Remove"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "UfULErMI1ISvtctWwbQTk6Hg5Cg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwiZmlsZVJlZiIsInVzZVJlZiIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJuYW1lIiwicmVhc29uIiwibWVzc2FnZSIsImZpbGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaSIsImxlbmd0aCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiYWxlcnQiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJzZXRGaWVsZFZhbHVlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRTNCLE1BQU1DLE9BQU8sR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXRCLENBRjJCLENBRzNCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsaURBQVMsQ0FBQztBQUN2QkMsaUJBQWEsRUFBRTtBQUNiQyxVQUFJLEVBQUUsRUFETztBQUViQyxZQUFNLEVBQUUsRUFGSztBQUdiQyxhQUFPLEVBQUUsRUFISTtBQUli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O0tBSlhMLFM7QUE2TE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTI5ODhmM2EyNDM2MGI4YjkyNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBDb250YWN0VXMgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBmaWxlUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbGVSZWZcIiwgZmlsZVJlZilcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJlYXNvbjogJycsXG4gICAgICBtZXNzYWdlOiAnJywgXG4gICAgICBmaWxlOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbnRhY3RGb3JtVmFsdWVzXCIsIHZhbHVlcyk7XG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB2YWx1ZXMubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlYXNvbicsIHZhbHVlcy5yZWFzb24pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbmZvJywgdmFsdWVzLm1lc3NhZ2UpO1xuICAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMuZmlsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhJywgdmFsdWVzLmZpbGVbaV0pO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtRGF0YVwiLCBmb3JtRGF0YSk7XG4gICAgICAvLyBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwia2V5XCIsIGtleSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgLy8gfVxuICAgICAgLy8gKVxuICAgICAgXG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGRhdGE6IGZvcm1EYXRhXG4gICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgICAgaWYgKCFkYXRhLmVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgICAvLyBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnZmlsZScsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIGNvbnN0IGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RGaWxlXCIsIGZpbGVBcnJheSk7XG5cblxuICAgIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNjb250YWN0XCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPlxuICAgICAgICAgIGNvbnRhY3RcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHItOCBwdC04IHBiLThcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFN1Ym1pdCB5b3VyIHNjYXJ5IHBob3RvIG9yIGNvbnRhY3QgdXMgc28gd2UgY2FuIGludmVzdGlnYXRlIGFuZCBnZXQgYmFjayB0byB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJ1ay1maWVsZHNldCBwdC04XCI+XG5cbiAgICAgICAgICAgICAgey8qIDxsZWdlbmQgY2xhc3NOYW1lPVwidWstbGVnZW5kXCI+TGVnZW5kPC9sZWdlbmQ+ICovfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidWstc2VsZWN0XCIgbmFtZT1cInJlYXNvblwiIGlkPVwicmVhc29uXCIgdmFsdWU9e2Zvcm1pay52YWx1ZXMucmVhc29ufSAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSByZWFzb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW52ZXN0aWdhdGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubWVzc2FnZX1cblxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5tZXNzYWdlICYmIGZvcm1pay5lcnJvcnMubWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkIHBiLTQgcHQtNFwiIGRhdGEtcHJvdmlkZXM9XCJmaWxldXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLXByZXZpZXcgdWstdGh1bWJuYWlsIHVrLWJvcmRlci1yb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxldXBsb2FkLW5ldyBwci00XCIgPlNlbGVjdCBmaWxlPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtdWx0aXBsZSByZWY9e2ZpbGVSZWZ9IGlkPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKSA9PiAgXG4gICAgICAgICAgICAgIHsgICAgICBmb3JtaWsuc2V0RmllbGRWYWx1ZSgnZmlsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5mb3JtaWsudmFsdWVzLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgW2UuY3VycmVudFRhcmdldC5uYW1lXTogZS5jdXJyZW50VGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICBoYW5kbGVGaWxlQ2hhbmdlKGUpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIH0gLz5cblxuXG4gICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIHsgZmlsZVJlZi5jdXJyZW50ID09PSBudWxsID8gbnVsbCA6IDxhIGhyZWY9XCIjXCIgaWQ9XCJyZW1vdmVcIiBjbGFzc05hbWU9XCJidG4gZmlsZXVwbG9hZC1leGlzdHNcIiBkYXRhLWRpc21pc3M9XCJmaWxldXBsb2FkXCIgICBvbkNsaWNrPXsoZSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS52YWx1ZSA9IG51bGwgfSA+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==