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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/loginForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var LoginForm = function LoginForm() {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.default);
  console.log("isRegistering", ctx.registering);
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__.object({
      username: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('Required'),
      email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email('Invalid email address').required('Required'),
      password: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.')
    }),
    onSubmit: function onSubmit(values) {
      alert(JSON.stringify(values, null, 2)); // if (!ctx.registering) {
      //     console.log("logging in");
      //     ctx.loginUser(values.email, values.password);
      // }
      // if (ctx.registering) {
      //     ctx.registerUser(values.email, values.password);
      // }
    }
  }); // const handleSubmit = ( values, e) => {
  //     e.preventDefault();
  //     // ctx.loginUser(formik.values);
  //     console.log("formik", values);
  // }

  var loginButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: "Sign in to our platform"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), ctx.registering && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlfor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 76,
        columnNumber: 17
      }, _this), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
        lineNumber: 92,
        columnNumber: 17
      }, _this), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
        columnNumber: 17
      }, _this), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        children: "Lost Password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, _this), !ctx.registering && loginButton, ctx.registering && registerButton, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: ["Not registered? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: ctx.toggleRegister,
        children: "Create account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyaW5nIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luQnV0dG9uIiwicmVnaXN0ZXJCdXR0b24iLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsImVycm9ycyIsInRvZ2dsZVJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXBCLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosR0FBRyxDQUFDSyxXQUFqQztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsaURBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNYQyxjQUFRLEVBQUUsRUFEQztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxjQUFRLEVBQUU7QUFIQyxLQURNO0FBT3JCQyxvQkFBZ0IsRUFBRUMsdUNBQUEsQ0FBVztBQUN6QkosY0FBUSxFQUFFSSx1Q0FBQSxHQUNMQyxRQURLLENBQ0ksVUFESixDQURlO0FBR3pCSixXQUFLLEVBQUVHLHVDQUFBLEdBQ0ZILEtBREUsQ0FDSSx1QkFESixFQUVGSSxRQUZFLENBRU8sVUFGUCxD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QUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVFSCxDQXJJRDs7R0FBTTlCLFM7VUFLYVEsNkM7OztLQUxiUixTO0FBdUlOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2MDM4NTJhMTM5NmU2ZGY1ZDY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICAgIGNvbnNvbGUubG9nKFwiaXNSZWdpc3RlcmluZ1wiLCBjdHgucmVnaXN0ZXJpbmcpXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG5cbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJylcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXG5cbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ05vIHBhc3N3b3JkIHByb3ZpZGVkLicpXG4gICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgaXMgdG9vIHNob3J0IC0gc2hvdWxkIGJlIDggY2hhcnMgbWluaW11bS4nKVxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC8oPz0uKlswLTldKS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYSBudW1iZXIuJyksXG4gICAgICAgIH0pLFxuICAgICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuXG4gICAgICAgICAgICAvLyBpZiAoIWN0eC5yZWdpc3RlcmluZykge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgICAgIC8vICAgICBjdHgubG9naW5Vc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChjdHgucmVnaXN0ZXJpbmcpIHtcbiAgICAgICAgICAgIC8vICAgICBjdHgucmVnaXN0ZXJVc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gKCB2YWx1ZXMsIGUpID0+IHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gICAgIC8vIGN0eC5sb2dpblVzZXIoZm9ybWlrLnZhbHVlcyk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZm9ybWlrXCIsIHZhbHVlcyk7XG4gICAgLy8gfVxuXG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgIExvZ2luIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICA8L2J1dHRvbj4pXG5cblxuXG4gICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXIgIHRvIHlvdXIgYWNjb3VudCA8L2J1dHRvbj5cbiAgICApXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cblxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlNpZ24gaW4gdG8gb3VyIHBsYXRmb3JtPC9oMz5cblxuICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sZm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS02MDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRyb2lhczAwN256XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC51c2VybmFtZSAmJiBmb3JtaWsuZXJyb3JzLnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAY29tcGFueS5jb21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWJsdWUtNTAwXCI+TG9zdCBQYXNzd29yZD88L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgICB7IWN0eC5yZWdpc3RlcmluZyAmJiBsb2dpbkJ1dHRvbn1cbiAgICAgICAgICAgIHtjdHgucmVnaXN0ZXJpbmcgJiYgcmVnaXN0ZXJCdXR0b259XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgTm90IHJlZ2lzdGVyZWQ/IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9e2N0eC50b2dnbGVSZWdpc3Rlcn0+Q3JlYXRlIGFjY291bnQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG4iXSwic291cmNlUm9vdCI6IiJ9