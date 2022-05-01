self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/loginForm.js":
/*!*********************************!*\
  !*** ./components/loginForm.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _lostPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lostPassword */ "./components/lostPassword.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/loginForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var LoginForm = function LoginForm() {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.default); // console.log("isRegistering", ctx.registering)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__.object({
      username: yup__WEBPACK_IMPORTED_MODULE_4__.string(),
      email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email('Invalid email address').required('Required'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.')
    }),
    onSubmit: function onSubmit(values) {
      // alert(JSON.stringify(values, null, 2));
      console.log("clicked");

      if (!ctx.registering) {
        console.log("logging in");
        ctx.loginUser(values.email, values.password);
      }

      if (ctx.registering) {
        ctx.registerUser(values.email, values.password);
      }

      if (ctx.isLostPassword) {
        console.log("Testing lost password");
        console.log("isLostPassword", ctx.isLostPassword);
        ctx.lostPassword(values.email);
      }
    }
  });

  var lostPasswordHandler = function lostPasswordHandler() {
    ctx.setIsLostPassword(!ctx.isLostPassword);
  };

  var loginButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);

  var lostPasswordButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onSubmit: formik.handleSubmit,
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Submit to recover password "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: ctx.isLostPassword ? "Please submit if you forgot password" : !ctx.registering ? "Login to our platform" : "Register to out platform"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this), ctx.registering && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlfor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "username",
        name: "username",
        id: "username",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        placeholder: "troias007nz",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "email",
        name: "email",
        id: "email",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        placeholder: "email@company.com",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this), !ctx.isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        name: "password",
        id: "password",
        placeholder: "current-password",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 32
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        onClick: lostPasswordHandler,
        children: "Lost Password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, _this), ctx.isLostPassword && lostPasswordButton, !ctx.registering && !ctx.isLostPassword && loginButton, ctx.registering && registerButton, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: [!ctx.registering ? "Not registered" : "Already registered?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: ctx.toggleRegister,
        children: [!ctx.registering ? "Create account" : "Log in", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, _this);
};

_s(LoginForm, "2dYZHyAlb9EOJTE5PGEyUUgP75M=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_3__.useFormik];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmluZyIsImxvZ2luVXNlciIsInJlZ2lzdGVyVXNlciIsImlzTG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkSGFuZGxlciIsInNldElzTG9zdFBhc3N3b3JkIiwibG9naW5CdXR0b24iLCJyZWdpc3RlckJ1dHRvbiIsImxvc3RQYXNzd29yZEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidG9nZ2xlUmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEIsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUZvQixDQUlwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEVBREM7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsY0FBUSxFQUFFO0FBSEMsS0FETTtBQU9yQkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDekJKLGNBQVEsRUFBRUksdUNBQUEsRUFEZTtBQUd6QkgsV0FBSyxFQUFFRyx1Q0FBQSxHQUNGSCxL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QUFBLGVBRGxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtFSCxDQTdJRDs7R0FBTW5CLFM7VUFNYUssNkM7OztLQU5iTCxTO0FBK0lOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5MWM2MmVjYTFkZTIwNmIxZGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IGxvc3RQYXNzd29yZCBmcm9tICcuL2xvc3RQYXNzd29yZCc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJpc1JlZ2lzdGVyaW5nXCIsIGN0eC5yZWdpc3RlcmluZylcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKSxcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJylcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXG5cbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ05vIHBhc3N3b3JkIHByb3ZpZGVkLicpXG4gICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgaXMgdG9vIHNob3J0IC0gc2hvdWxkIGJlIDggY2hhcnMgbWluaW11bS4nKVxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC8oPz0uKlswLTldKS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYSBudW1iZXIuJyksXG4gICAgICAgIH0pLFxuICAgICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXG4gICAgICAgICAgICBpZiAoIWN0eC5yZWdpc3RlcmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgICAgICAgICBjdHgubG9naW5Vc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdHgucmVnaXN0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjdHgucmVnaXN0ZXJVc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdHguaXNMb3N0UGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgbG9zdCBwYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzTG9zdFBhc3N3b3JkXCIsIGN0eC5pc0xvc3RQYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgY3R4Lmxvc3RQYXNzd29yZCh2YWx1ZXMuZW1haWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgXG5cbiAgICBjb25zdCBsb3N0UGFzc3dvcmRIYW5kbGVyID0gKCkgPT4ge1xuICAgIFxuICAgICAgICBjdHguc2V0SXNMb3N0UGFzc3dvcmQoIWN0eC5pc0xvc3RQYXNzd29yZCk7XG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgTG9naW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgIDwvYnV0dG9uPilcblxuXG5cbiAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXIgIHRvIHlvdXIgYWNjb3VudCA8L2J1dHRvbj5cbiAgICApXG5cbiAgICBjb25zdCBsb3N0UGFzc3dvcmRCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICBTdWJtaXQgdG8gcmVjb3ZlciBwYXNzd29yZCA8L2J1dHRvbj5cbiAgICApXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cblxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPntjdHguaXNMb3N0UGFzc3dvcmQgPyBcIlBsZWFzZSBzdWJtaXQgaWYgeW91IGZvcmdvdCBwYXNzd29yZFwiIDogKCFjdHgucmVnaXN0ZXJpbmcgPyBcIkxvZ2luIHRvIG91ciBwbGF0Zm9ybVwiOiBcIlJlZ2lzdGVyIHRvIG91dCBwbGF0Zm9ybVwiKX08L2gzPlxuXG4gICAgICAgICAgICB7Y3R4LnJlZ2lzdGVyaW5nICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxmb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHJvaWFzMDA3bnpcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlcm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnVzZXJuYW1lICYmIGZvcm1pay5lcnJvcnMudXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgeyAgICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9e2xvc3RQYXNzd29yZEhhbmRsZXJ9Pkxvc3QgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjdHguaXNMb3N0UGFzc3dvcmQgJiYgIGxvc3RQYXNzd29yZEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgeyFjdHgucmVnaXN0ZXJpbmcgJiYgIWN0eC5pc0xvc3RQYXNzd29yZCAmJiBsb2dpbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiByZWdpc3RlckJ1dHRvbn1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgeyFjdHgucmVnaXN0ZXJpbmcgPyBcIk5vdCByZWdpc3RlcmVkXCIgOiBcIkFscmVhZHkgcmVnaXN0ZXJlZD9cIn0gPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWJsdWUtNTAwXCIgb25DbGljaz17Y3R4LnRvZ2dsZVJlZ2lzdGVyfT57IWN0eC5yZWdpc3RlcmluZz8gXCJDcmVhdGUgYWNjb3VudFwiIDogXCJMb2cgaW5cIn0gPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==