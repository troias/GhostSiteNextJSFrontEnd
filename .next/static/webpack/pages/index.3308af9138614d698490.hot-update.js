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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/contact-us.js",
    _this = undefined,
    _s = $RefreshSig$();





var ContactUs = function ContactUs(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      fileArr = _useState[0],
      setFileArr = _useState[1];

  var fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // console.log("fileRef", fileRef)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      name: '',
      reason: '',
      message: '',
      media: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required'),
      // reason: Yup.string()
      //   .required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Required')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        var data, innerData, i, file, media;
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  console.log("contactFormValues", values);
                data = new FormData(); // console.log("media", media)
                // data.append('data', JSON.stringify({
                //   name: values.name,
                //   reason: values.reason,
                //   info: values.message,
                // }))

                innerData = {
                  name: values.name,
                  reason: values.reason,
                  info: values.message,
                  file: null,
                  media: null
                };

                for (i = 0; i < values.media.length; i++) {
                  file = values.media[i];
                  media = values.media[i]; // data.append(`file ${i}`, file, file.name);
                  // data.append(`media ${i}`, media, media.name);

                  innerData.file = "file ".concat(i);
                  innerData.media = "media ".concat(i);
                }

                console.log("innerdata", innerData);
                data.append('data', JSON.stringify(innerData)); // data.forEach((value, key) => {
                //   console.log("value", value)
                //   console.log("key", key)
                //   Object.assign(ssda
                //     key,
                //     {
                //     })
                // })

                console.log("formDataCLG", data.getAll('data'));
                data.forEach(function (value, key) {
                  console.log("formDataLoop", key, value);
                }); //   const request = await fetch('http://localhost:1337/api/lead-form-submissions', {
                //     method: 'POST',
                //     body: data
                //   });
                //   const response = await request.json();
                //   // console.log("data", data);
                //   if (!response.error) {
                //     alert("Your message has been sent successfully");
                //   }
                //   else {
                //     alert("Something went wrong");
                //   }

              case 7:
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
        lineNumber: 126,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Submit your scary photo or contact us so we can investigate and get back to you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
                lineNumber: 139,
                columnNumber: 17
              }, _this), formik.touched.name && formik.errors.name ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
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
                  lineNumber: 157,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Investigate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  children: "Other"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
                lineNumber: 164,
                columnNumber: 17
              }, _this), formik.touched.message && formik.errors.message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: formik.errors.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "fileupload pb-4 pt-4",
              "data-provides": "fileupload",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "fileupload-preview uk-thumbnail uk-border-rounded"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "btn btn-primary btn-file",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "fileupload-new pr-4",
                    children: "Select file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "file",
                    id: "media",
                    multiple: true,
                    onChange: onFileChange,
                    ref: fileRef
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
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
                          lineNumber: 212,
                          columnNumber: 31
                        }, _this)
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 29
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
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
                  lineNumber: 226,
                  columnNumber: 54
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            className: "uk-button uk-button-default  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, _this);
};

_s(ContactUs, "SR1cS9KorH4EXdboEFS6CJJgjjg=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_4__.useFormik];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0LXVzLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RVcyIsInByb3BzIiwidXNlU3RhdGUiLCJmaWxlQXJyIiwic2V0RmlsZUFyciIsImZpbGVSZWYiLCJ1c2VSZWYiLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsInJlYXNvbiIsIm1lc3NhZ2UiLCJtZWRpYSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiZGF0YSIsIkZvcm1EYXRhIiwiaW5uZXJEYXRhIiwiaW5mbyIsImZpbGUiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRBbGwiLCJmb3JFYWNoIiwidmFsdWUiLCJrZXkiLCJvbkZpbGVDaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZUxpc3QiLCJmaWxlQXJyYXkiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJtYXAiLCJpbmRleCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUdDLCtDQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFcEJDLE9BRm9CO0FBQUEsTUFFWEMsVUFGVzs7QUFJM0IsTUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdEIsQ0FKMkIsQ0FLM0I7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxpREFBUyxDQUFDO0FBQ3ZCQyxpQkFBYSxFQUFFO0FBQ2JDLFVBQUksRUFBRSxFQURPO0FBRWJDLFlBQU0sRUFBRSxFQUZLO0FBR2JDLGFBQU8sRUFBRSxFQUhJO0FBSWJDLFdBQUssRUFBRTtBQUpNLEtBRFE7QUFPdkJDLG9CQUFnQixFQUFFQyx1Q0FBQSxDQUFXO0FBQzNCTCxVQUFJLEVBQUVLLHVDQUFBLEdBQ0hDLFFBREcsQ0FDTSxVQUROLENBRHFCO0FBRzNCO0FBQ0E7QUFDQUosYUFBTyxFQUFFRyx1Q0FBQSxHQUNOQyxRQURNLENBQ0csVUFESDtBQUxrQixLQUFYLENBUEs7QUFldkJDLFlBQVE7QUFBQSxzVUFBRSxpQkFBTUMsTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUjtBQUVNQyxvQkFIRSxHQUdLLElBQUlDLFFBQUosRUFITCxFQU1SO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7QUFFSUMseUJBbkJJLEdBbUJRO0FBQ2RYLHNCQUFJLEVBQUVRLE1BQU0sQ0FBQ1IsSUFEQztBQUVkQyx3QkFBTSxFQUFFTyxNQUFNLENBQUNQLE1BRkQ7QUFHZFcsc0JBQUksRUFBRUosTUFBTSxDQUFDTixPQUhDO0FBSWRXLHNCQUFJLEVBQUUsSUFKUTtBQUtkVix1QkFBSyxFQUFFO0FBTE8saUJBbkJSOztBQTRCUixxQkFBU1csQ0FBVCxHQUFhLENBQWIsRUFBaUJBLENBQUMsR0FBR04sTUFBTSxDQUFDTCxLQUFQLENBQWFZLE1BQWxDLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQ3hDRCxzQkFEd0MsR0FDakNMLE1BQU0sQ0FBQ0wsS0FBUCxDQUFhVyxDQUFiLENBRGlDO0FBRXhDWCx1QkFGd0MsR0FFaENLLE1BQU0sQ0FBQ0wsS0FBUCxDQUFhVyxDQUFiLENBRmdDLEVBRzlDO0FBQ0E7O0FBQ0FILDJCQUFTLENBQUNFLElBQVYsa0JBQXlCQyxDQUF6QjtBQUNBSCwyQkFBUyxDQUFDUixLQUFWLG1CQUEyQlcsQ0FBM0I7QUFHRDs7QUFDREUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJOLFNBQXpCO0FBRUFGLG9CQUFJLENBQUNTLE1BQUwsQ0FBWSxNQUFaLEVBQW9CQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsU0FBZixDQUFwQixFQXhDUSxDQTBDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBSyx1QkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlIsSUFBSSxDQUFDWSxNQUFMLENBQVksTUFBWixDQUEzQjtBQUNGWixvQkFBSSxDQUFDYSxPQUFMLENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQzNCUix5QkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0Qk8sR0FBNUIsRUFBaUNELEtBQWpDO0FBQ0QsaUJBRkQsRUF2RFUsQ0FnRVY7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQS9FVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZmUsR0FBRCxDQUF4Qjs7QUFvR0UsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCO0FBQ0Q3QixVQUFNLENBQUM4QixhQUFQLENBQXFCLE9BQXJCLEVBQThCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdkM7QUFDQyxRQUFNQyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUExQjtBQUNBLFFBQU1FLFNBQVMsR0FBRyxFQUFsQjs7QUFDQSxTQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0IsUUFBUSxDQUFDZixNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4Q2lCLGVBQVMsQ0FBQ0MsSUFBVixDQUFlRixRQUFRLENBQUNoQixDQUFELENBQXZCO0FBQ0Q7O0FBQ0RwQixjQUFVLENBQUNxQyxTQUFELENBQVYsQ0FSMEIsQ0FTeEI7QUFDSCxHQVZEOztBQVlGLHNCQUNFO0FBQVMsTUFBRSxFQUFDLFVBQVo7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQU0sa0JBQVEsRUFBRWxDLE1BQU0sQ0FBQ29DLFlBQXZCO0FBQUEsa0NBQ0U7QUFBVSxxQkFBUyxFQUFDLGtCQUFwQjtBQUFBLG9DQUlFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLFVBRFo7QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSwyQkFBVyxFQUFDLE1BSGQ7QUFJRSxvQkFBSSxFQUFDLE1BSlA7QUFLRSxrQkFBRSxFQUFDLE1BTEw7QUFNRSx3QkFBUSxFQUFFcEMsTUFBTSxDQUFDcUMsWUFObkI7QUFPRSxzQkFBTSxFQUFFckMsTUFBTSxDQUFDc0MsVUFQakI7QUFRRSxxQkFBSyxFQUFFdEMsTUFBTSxDQUFDVyxNQUFQLENBQWNSO0FBUnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFVR0gsTUFBTSxDQUFDdUMsT0FBUCxDQUFlcEMsSUFBZixJQUF1QkgsTUFBTSxDQUFDd0MsTUFBUCxDQUFjckMsSUFBckMsZ0JBQ0M7QUFBQSwwQkFBTUgsTUFBTSxDQUFDd0MsTUFBUCxDQUFjckM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxHQUVHLElBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBbUJFO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEscUNBQ0U7QUFBUSx5QkFBUyxFQUFDLFdBQWxCO0FBQThCLG9CQUFJLEVBQUMsUUFBbkM7QUFBNEMsa0JBQUUsRUFBQyxRQUEvQztBQUF3RCxxQkFBSyxFQUFFSCxNQUFNLENBQUNXLE1BQVAsQ0FBY1AsTUFBN0U7QUFBdUYsd0JBQVEsRUFBRUosTUFBTSxDQUFDcUMsWUFBeEc7QUFDRSxzQkFBTSxFQUFFckMsTUFBTSxDQUFDc0MsVUFEakI7QUFBQSx3Q0FHRTtBQUFRLHVCQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkYsZUE2QkU7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUNFLHlCQUFTLEVBQUMsYUFEWjtBQUVFLG9CQUFJLEVBQUMsR0FGUDtBQUdFLGtCQUFFLEVBQUMsU0FITDtBQUlFLDJCQUFXLEVBQUMsU0FKZDtBQUtFLHdCQUFRLEVBQUV0QyxNQUFNLENBQUNxQyxZQUxuQjtBQU1FLHNCQUFNLEVBQUVyQyxNQUFNLENBQUNzQyxVQU5qQjtBQU9FLHFCQUFLLEVBQUV0QyxNQUFNLENBQUNXLE1BQVAsQ0FBY047QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQVdHTCxNQUFNLENBQUN1QyxPQUFQLENBQWVsQyxPQUFmLElBQTBCTCxNQUFNLENBQUN3QyxNQUFQLENBQWNuQyxPQUF4QyxnQkFDQztBQUFBLDBCQUFNTCxNQUFNLENBQUN3QyxNQUFQLENBQWNuQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELEdBRUcsSUFiTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLGVBNkNFO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFzQywrQkFBYyxZQUFwRDtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLHdDQUNFO0FBQU0sMkJBQVMsRUFBQywwQkFBaEI7QUFBQSwwQ0FDRTtBQUFNLDZCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBcUJGO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQW1CLHNCQUFFLEVBQUMsT0FBdEI7QUFBK0IsNEJBQVEsTUFBdkM7QUFBd0MsNEJBQVEsRUFBRXVCLFlBQWxEO0FBQWlFLHVCQUFHLEVBQUU5QjtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXJCRSxlQXNCRjtBQUFNLDZCQUFTLEVBQUMsNENBQWhCO0FBQUEsOEJBR0VGLE9BQU8sQ0FBQzZDLEdBQVIsQ0FBWSxVQUFDekIsSUFBRCxFQUFPMEIsS0FBUCxFQUFpQjtBQUN2QjtBQUNBLDBDQUVJO0FBQU0saUNBQVMsRUFBQyxxREFBaEI7QUFBQSwrQ0FDRTtBQUFLLDZCQUFHLEVBQUVDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjVCLElBQXBCLENBQVY7QUFBcUMsNkJBQUcsRUFBQyxTQUF6QztBQUFtRCxtQ0FBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFBMkUwQixLQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKO0FBTUUscUJBUlI7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUE2Q0c1QyxPQUFPLENBQUMrQyxPQUFSLEtBQW9CLElBQXBCLEdBQTJCLElBQTNCLGdCQUFrQztBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFZLG9CQUFFLEVBQUMsUUFBZjtBQUF3QiwyQkFBUyxFQUFDLHVCQUFsQztBQUEwRCxrQ0FBYSxZQUF2RTtBQUFzRix5QkFBTyxFQUFFLGlCQUFDaEIsQ0FBRCxFQUFPO0FBQ3ZJQSxxQkFBQyxDQUFDaUIsY0FBRjtBQUNFQyw0QkFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDdEIsS0FBaEMsR0FBd0MsSUFBeEM7QUFDQTVCLDJCQUFPLENBQUMrQyxPQUFSLEdBQWtCLElBQWxCO0FBQ0FoRCw4QkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNGLG1CQUxpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3Q3JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQXVHRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsb1BBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwSUQsQ0FoUUQ7O0dBQU1KLFM7VUFNV1EsNkM7OztLQU5YUixTO0FBa1FOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMzMDhhZjkxMzg2MTRkNjk4NDkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuY29uc3QgQ29udGFjdFVzID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgW2ZpbGVBcnIsIHNldEZpbGVBcnJdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZmlsZVJlZlwiLCBmaWxlUmVmKVxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmVhc29uOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLCBcbiAgICAgIG1lZGlhOiBudWxsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIG5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAvLyByZWFzb246IFl1cC5zdHJpbmcoKVxuICAgICAgLy8gICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICBtZXNzYWdlOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgfSksXG4gICAgb25TdWJtaXQ6IGFzeW5jIHZhbHVlcyA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coXCJjb250YWN0Rm9ybVZhbHVlc1wiLCB2YWx1ZXMpO1xuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJtZWRpYVwiLCBtZWRpYSlcblxuICAgICAgLy8gZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAvLyAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgLy8gICByZWFzb246IHZhbHVlcy5yZWFzb24sXG4gICAgICAvLyAgIGluZm86IHZhbHVlcy5tZXNzYWdlLFxuICAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIFxuICAgICAgLy8gfSkpXG5cbiAgICAgIGxldCBpbm5lckRhdGEgPSB7XG4gICAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICByZWFzb246IHZhbHVlcy5yZWFzb24sXG4gICAgICAgIGluZm86IHZhbHVlcy5tZXNzYWdlLCBcbiAgICAgICAgZmlsZTogbnVsbCxcbiAgICAgICAgbWVkaWE6IG51bGxcblxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB2YWx1ZXMubWVkaWEubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB2YWx1ZXMubWVkaWFbaV07XG4gICAgICAgIGNvbnN0IG1lZGlhID0gdmFsdWVzLm1lZGlhW2ldXG4gICAgICAgIC8vIGRhdGEuYXBwZW5kKGBmaWxlICR7aX1gLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgICAvLyBkYXRhLmFwcGVuZChgbWVkaWEgJHtpfWAsIG1lZGlhLCBtZWRpYS5uYW1lKTtcbiAgICAgICAgaW5uZXJEYXRhLmZpbGUgPSBgZmlsZSAke2l9YDtcbiAgICAgICAgaW5uZXJEYXRhLm1lZGlhID0gYG1lZGlhICR7aX1gO1xuXG5cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiaW5uZXJkYXRhXCIsIGlubmVyRGF0YSlcblxuICAgICAgZGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShpbm5lckRhdGEpKVxuICAgICAgXG4gICAgICAvLyBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJ2YWx1ZVwiLCB2YWx1ZSlcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJrZXlcIiwga2V5KVxuICAgICAgLy8gICBPYmplY3QuYXNzaWduKHNzZGFcbiAgICAgIC8vICAgICBrZXksXG4gICAgICAvLyAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgLy8gICAgIH0pXG4gICAgICAgIFxuICAgICAgLy8gfSlcbiAgICAgIFxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcImZvcm1EYXRhQ0xHXCIsIGRhdGEuZ2V0QWxsKCdkYXRhJykpXG4gICAgZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImZvcm1EYXRhTG9vcFwiLCBrZXksIHZhbHVlKVxuICAgIH0pXG5cblxuXG5cbiAgIFxuXG4gICAgLy8gICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgXG4gICAgLy8gICAgIGJvZHk6IGRhdGFcbiAgXG5cbiAgICAvLyAgIH0pO1xuICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblxuICAgIC8vICAgaWYgKCFyZXNwb25zZS5lcnJvcikge1xuICAgIC8vICAgICBhbGVydChcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgIC8vICAgfVxuXG4gICAgfSxcbiAgfSk7XG5cbiAgXG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZVwiLCBlLnRhcmdldC5maWxlcyk7XG4gICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdtZWRpYScsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIGNvbnN0IGZpbGVMaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgICAgc2V0RmlsZUFycihmaWxlQXJyYXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpcnN0RmlsZVwiLCBmaWxlQXJyYXkpO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiI2NvbnRhY3RcIiA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXRpbGUtZGVmYXVsdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgXCI+XG4gICAgICAgICAgY29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU3VibWl0IHlvdXIgc2NhcnkgcGhvdG8gb3IgY29udGFjdCB1cyBzbyB3ZSBjYW4gaW52ZXN0aWdhdGUgYW5kIGdldCBiYWNrIHRvIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInVrLWZpZWxkc2V0IHB0LThcIj5cblxuICAgICAgICAgICAgICB7LyogPGxlZ2VuZCBjbGFzc05hbWU9XCJ1ay1sZWdlbmRcIj5MZWdlbmQ8L2xlZ2VuZD4gKi99XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQubmFtZSAmJiBmb3JtaWsuZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1ay1zZWxlY3RcIiBuYW1lPVwicmVhc29uXCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5yZWFzb259ICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIHJlYXNvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbnZlc3RpZ2F0ZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PdGhlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWstdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLm1lc3NhZ2UgJiYgZm9ybWlrLmVycm9ycy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQgcGItNCBwdC00XCIgZGF0YS1wcm92aWRlcz1cImZpbGV1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtcHJldmlldyB1ay10aHVtYm5haWwgdWstYm9yZGVyLXJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGV1cGxvYWQtbmV3IHByLTRcIiA+U2VsZWN0IGZpbGU8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICBcbiAgICAgICAgICAgICAgeyAgICAgIGZvcm1pay5zZXRGaWVsZFZhbHVlKCdmaWxlJywge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvcm1pay52YWx1ZXMuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICBbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdOiBlLmN1cnJlbnRUYXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZpbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfSBtdWx0aXBsZSAvPiAqL31cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwibWVkaWFcIiAgbXVsdGlwbGUgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gIHJlZj17ZmlsZVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWFyb3VuZCBwdC00IGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICAgICAgeyAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgZmlsZUFyci5tYXAoKGZpbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiICB1ay1ib3JkZXItcm91bmRlZCBmbGV4IGp1c3RpZnktYXJvdW5kICBmbGV4LXdyYXAgXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gYWx0PVwicHJldmlld1wiIGNsYXNzTmFtZT1cInctWzE1MHB4XSBoLVsxNTBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7IGZpbGVSZWYuY3VycmVudCA9PT0gbnVsbCA/IG51bGwgOiA8YSBocmVmPVwiI1wiIGlkPVwicmVtb3ZlXCIgY2xhc3NOYW1lPVwiYnRuIGZpbGV1cGxvYWQtZXhpc3RzXCIgZGF0YS1kaXNtaXNzPVwiZmlsZXVwbG9hZFwiICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykudmFsdWUgPSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWYuY3VycmVudCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWxlQXJyKFtdKVxuICAgICAgICAgICAgICAgICAgIH0gfSA+UmVtb3ZlPC9hPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24gdWstYnV0dG9uLWRlZmF1bHQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtODAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1ibHVlLTMwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkLWxnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHktMi41XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmJnLWJsdWUtNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiID5cbiAgICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==