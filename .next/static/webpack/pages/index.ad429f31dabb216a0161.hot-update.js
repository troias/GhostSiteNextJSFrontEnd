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
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _lostPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lostPassword */ "./components/lostPassword.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/loginForm.js",
    _this = undefined,
    _s = $RefreshSig$();







var LoginForm = function LoginForm() {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default); // console.log("isRegistering", ctx.registering)

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__.object({
      username: yup__WEBPACK_IMPORTED_MODULE_6__.string(),
      email: yup__WEBPACK_IMPORTED_MODULE_6__.string().email('Invalid email address').required('Required'),
      password: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // alert(JSON.stringify(values, null, 2));
                console.log("clicked");

                if (!ctx.registering) {
                  console.log("logging in");
                  ctx.loginUser(values.email, values.password);
                }

                if (ctx.registering) {
                  console.log("registering");
                  ctx.registerUser(values.email, values.password);
                }

                if (ctx.isLostPassword) {
                  console.log("Testing lost password");
                  console.log("isLostPassword", ctx.isLostPassword);
                  ctx.lostPassword(values.email);
                }

              case 4:
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

  var lostPasswordHandler = function lostPasswordHandler() {
    ctx.setIsLostPassword(true);
  };

  var loginButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);

  var lostPasswordButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Submit to recover password "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
      lineNumber: 87,
      columnNumber: 13
    }, _this), ctx.registering && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlfor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
        lineNumber: 91,
        columnNumber: 17
      }, _this), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
        lineNumber: 107,
        columnNumber: 17
      }, _this), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this), !ctx.isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
        lineNumber: 122,
        columnNumber: 17
      }, _this), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
        lineNumber: 137,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, _this), ctx.isLostPassword ? lostPasswordButton : ctx.registering ? registerButton : loginButton, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: [!ctx.registering ? "Not registered" : "Already registered?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: ctx.toggleRegister,
        children: [!ctx.registering ? "Create account" : "Log in", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 9
  }, _this);
};

_s(LoginForm, "2dYZHyAlb9EOJTE5PGEyUUgP75M=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_5__.useFormik];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmluZyIsImxvZ2luVXNlciIsInJlZ2lzdGVyVXNlciIsImlzTG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkSGFuZGxlciIsInNldElzTG9zdFBhc3N3b3JkIiwibG9naW5CdXR0b24iLCJyZWdpc3RlckJ1dHRvbiIsImxvc3RQYXNzd29yZEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidG9nZ2xlUmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQixNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNDLHlEQUFELENBQXRCLENBRm9CLENBSXBCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0MsaURBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNYQyxjQUFRLEVBQUUsRUFEQztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxjQUFRLEVBQUU7QUFIQyxLQURNO0FBT3JCQyxvQkFBZ0IsRUFBRUMsdUNBQUEsQ0FBVztBQUN6QkosY0FBUSxFQUFFSSx1Q0FBQSxFQURlO0FBR3pCSCxXQUFLLEVBQUVHLHVDQUFBLEdB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QUFBQTtBQUFBO0FBQUEsZUFEbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUVILENBL0lEOztHQUFNbkIsUztVQU1hSyw2Qzs7O0tBTmJMLFM7QUFpSk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWQ0MjlmMzFkYWJiMjE2YTAxNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgbG9zdFBhc3N3b3JkIGZyb20gJy4vbG9zdFBhc3N3b3JkJztcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImlzUmVnaXN0ZXJpbmdcIiwgY3R4LnJlZ2lzdGVyaW5nKVxuXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG5cbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpLFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgLmVtYWlsKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKVxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcblxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTm8gcGFzc3dvcmQgcHJvdmlkZWQuJylcbiAgICAgICAgICAgICAgICAubWluKDgsICdQYXNzd29yZCBpcyB0b28gc2hvcnQgLSBzaG91bGQgYmUgOCBjaGFycyBtaW5pbXVtLicpXG4gICAgICAgICAgICAgICAgLm1hdGNoZXMoLyg/PS4qWzAtOV0pLywgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhIG51bWJlci4nKSxcbiAgICAgICAgfSksXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgICAgICAgICAgIGlmICghY3R4LnJlZ2lzdGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnaW5nIGluXCIpO1xuICAgICAgICAgICAgICAgIGN0eC5sb2dpblVzZXIodmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN0eC5yZWdpc3RlcmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJpbmdcIik7XG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyVXNlcih2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmlzTG9zdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGxvc3QgcGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0xvc3RQYXNzd29yZFwiLCBjdHguaXNMb3N0UGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGN0eC5sb3N0UGFzc3dvcmQodmFsdWVzLmVtYWlsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIFxuXG4gICAgY29uc3QgbG9zdFBhc3N3b3JkSGFuZGxlciA9ICgpID0+IHtcbiAgICBcbiAgICAgICAgY3R4LnNldElzTG9zdFBhc3N3b3JkKHRydWUpO1xuICAgICAgICBcbiAgICAgICBcbiAgICB9XG5cblxuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgIExvZ2luIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICA8L2J1dHRvbj4pXG5cblxuXG4gICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyICB0byB5b3VyIGFjY291bnQgPC9idXR0b24+XG4gICAgKVxuXG4gICAgY29uc3QgbG9zdFBhc3N3b3JkQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uICB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICBTdWJtaXQgdG8gcmVjb3ZlciBwYXNzd29yZCA8L2J1dHRvbj5cbiAgICApXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cblxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPntjdHguaXNMb3N0UGFzc3dvcmQgPyBcIlBsZWFzZSBzdWJtaXQgaWYgeW91IGZvcmdvdCBwYXNzd29yZFwiIDogKCFjdHgucmVnaXN0ZXJpbmcgPyBcIkxvZ2luIHRvIG91ciBwbGF0Zm9ybVwiOiBcIlJlZ2lzdGVyIHRvIG91dCBwbGF0Zm9ybVwiKX08L2gzPlxuXG4gICAgICAgICAgICB7Y3R4LnJlZ2lzdGVyaW5nICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxmb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHJvaWFzMDA3bnpcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlcm5hbWV9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLnVzZXJuYW1lICYmIGZvcm1pay5lcnJvcnMudXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMudXNlcm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgeyAgICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9e2xvc3RQYXNzd29yZEhhbmRsZXJ9Pkxvc3QgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7Y3R4LmlzTG9zdFBhc3N3b3JkICYmICBsb3N0UGFzc3dvcmRCdXR0b259ICovfVxuICAgICAgICAgICAgICAgICAgICB7Y3R4LmlzTG9zdFBhc3N3b3JkID8gIGxvc3RQYXNzd29yZEJ1dHRvbiA6IChjdHgucmVnaXN0ZXJpbmc/IHJlZ2lzdGVyQnV0dG9uIDogbG9naW5CdXR0b24pfVxuICAgICAgICAgICAgICAgICAgICB7LyogeyFjdHgucmVnaXN0ZXJpbmcgJiYgIWN0eC5pc0xvc3RQYXNzd29yZCAmJiBsb2dpbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiByZWdpc3RlckJ1dHRvbn0gKi99XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIHshY3R4LnJlZ2lzdGVyaW5nID8gXCJOb3QgcmVnaXN0ZXJlZFwiIDogXCJBbHJlYWR5IHJlZ2lzdGVyZWQ/XCJ9IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9e2N0eC50b2dnbGVSZWdpc3Rlcn0+eyFjdHgucmVnaXN0ZXJpbmc/IFwiQ3JlYXRlIGFjY291bnRcIiA6IFwiTG9nIGluXCJ9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=