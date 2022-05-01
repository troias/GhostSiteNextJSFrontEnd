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

  var loginButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);

  var lostPasswordButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Submit to recover password "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
      lineNumber: 82,
      columnNumber: 13
    }, _this), ctx.registering && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlfor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
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
        lineNumber: 86,
        columnNumber: 17
      }, _this), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
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
        lineNumber: 102,
        columnNumber: 17
      }, _this), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this), !ctx.isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
        lineNumber: 117,
        columnNumber: 17
      }, _this), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        onClick: function onClick() {
          return ctx.setIsLostPassword(true);
        },
        children: ctx.isLostPassword && "Lost Password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this), ctx.isLostPassword ? lostPasswordButton : ctx.registering ? registerButton : loginButton, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: [!ctx.registering ? "Not registered" : "Already registered?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: function onClick() {
          ctx.toggleRegister;
          ctx.isLostPassword && ctx.setIsLostPassword(false);
          console.log("ctx.registering", ctx.registering);
        },
        children: [!ctx.registering ? "Create account" : "Log in", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmluZyIsImxvZ2luVXNlciIsInJlZ2lzdGVyVXNlciIsImlzTG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkIiwibG9naW5CdXR0b24iLCJyZWdpc3RlckJ1dHRvbiIsImxvc3RQYXNzd29yZEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXBCLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEIsQ0FGb0IsQ0FJcEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxpREFBUyxDQUFDO0FBQ3JCQyxpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSxFQURDO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLGNBQVEsRUFBRTtBQUhDLEtBRE07QUFPckJDLG9CQUFnQixFQUFFQyx1Q0FBQSxDQUFXO0FBQ3pCSixjQUFRLEVBQUVJLHVDQUFBLEVBRGU7QUFHekJILFdBQUssRUFBRUcsdUNBQUEsR0FDRkgsS0FERSxDQUNJLHVCQURKLEVB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QyxHQUFSLENBQVksaUJBQVosRUFBK0JqQixHQUFHLENBQUNrQixXQUFuQztBQUVQLFNBTDZEO0FBQUEsbUJBSzFELENBQUNsQixHQUFHLENBQUNrQixXQUFMLEdBQW1CLGdCQUFuQixHQUFzQyxRQUxvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0VILENBL0lEOztHQUFNbkIsUztVQU1hSyw2Qzs7O0tBTmJMLFM7QUFpSk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZjNDQ2MGJiYzg4YWE5ZWUxMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgbG9zdFBhc3N3b3JkIGZyb20gJy4vbG9zdFBhc3N3b3JkJztcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImlzUmVnaXN0ZXJpbmdcIiwgY3R4LnJlZ2lzdGVyaW5nKVxuXG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG5cbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XG4gICAgICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpLFxuXG4gICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgLmVtYWlsKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKVxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcblxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTm8gcGFzc3dvcmQgcHJvdmlkZWQuJylcbiAgICAgICAgICAgICAgICAubWluKDgsICdQYXNzd29yZCBpcyB0b28gc2hvcnQgLSBzaG91bGQgYmUgOCBjaGFycyBtaW5pbXVtLicpXG4gICAgICAgICAgICAgICAgLm1hdGNoZXMoLyg/PS4qWzAtOV0pLywgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhIG51bWJlci4nKSxcbiAgICAgICAgfSksXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgICAgICAgICAgIGlmICghY3R4LnJlZ2lzdGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnaW5nIGluXCIpO1xuICAgICAgICAgICAgICAgIGN0eC5sb2dpblVzZXIodmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN0eC5yZWdpc3RlcmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJpbmdcIik7XG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyVXNlcih2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmlzTG9zdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGxvc3QgcGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0xvc3RQYXNzd29yZFwiLCBjdHguaXNMb3N0UGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGN0eC5sb3N0UGFzc3dvcmQodmFsdWVzLmVtYWlsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgIH0pO1xuXG5cblxuXG5cbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgTG9naW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgIDwvYnV0dG9uPilcblxuXG5cbiAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICBSZWdpc3RlciAgdG8geW91ciBhY2NvdW50IDwvYnV0dG9uPlxuICAgIClcblxuICAgIGNvbnN0IGxvc3RQYXNzd29yZEJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICBTdWJtaXQgdG8gcmVjb3ZlciBwYXNzd29yZCA8L2J1dHRvbj5cbiAgICApXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHgtNiBwYi00IHNwYWNlLXktNiBsZzpweC04IHNtOnBiLTYgeGw6cGItOFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cblxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPntjdHguaXNMb3N0UGFzc3dvcmQgPyBcIlBsZWFzZSBzdWJtaXQgaWYgeW91IGZvcmdvdCBwYXNzd29yZFwiIDogKCFjdHgucmVnaXN0ZXJpbmcgPyBcIkxvZ2luIHRvIG91ciBwbGF0Zm9ybVwiIDogXCJSZWdpc3RlciB0byBvdXQgcGxhdGZvcm1cIil9PC9oMz5cblxuICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sZm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS02MDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRyb2lhczAwN256XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC51c2VybmFtZSAmJiBmb3JtaWsuZXJyb3JzLnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAY29tcGFueS5jb21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshY3R4LmlzTG9zdFBhc3N3b3JkICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPllvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5wYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLnBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9eygpID0+IGN0eC5zZXRJc0xvc3RQYXNzd29yZCh0cnVlKX0+e2N0eC5pc0xvc3RQYXNzd29yZCAmJiBcIkxvc3QgUGFzc3dvcmQ/XCJ9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Lyoge2N0eC5pc0xvc3RQYXNzd29yZCAmJiAgbG9zdFBhc3N3b3JkQnV0dG9ufSAqL31cbiAgICAgICAgICAgIHtjdHguaXNMb3N0UGFzc3dvcmQgPyBsb3N0UGFzc3dvcmRCdXR0b24gOiAoY3R4LnJlZ2lzdGVyaW5nID8gcmVnaXN0ZXJCdXR0b24gOiBsb2dpbkJ1dHRvbil9XG4gICAgICAgICAgICB7LyogeyFjdHgucmVnaXN0ZXJpbmcgJiYgIWN0eC5pc0xvc3RQYXNzd29yZCAmJiBsb2dpbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiByZWdpc3RlckJ1dHRvbn0gKi99XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgeyFjdHgucmVnaXN0ZXJpbmcgPyBcIk5vdCByZWdpc3RlcmVkXCIgOiBcIkFscmVhZHkgcmVnaXN0ZXJlZD9cIn0gPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWJsdWUtNTAwXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRvZ2dsZVJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICAgICAgIGN0eC5pc0xvc3RQYXNzd29yZCAmJiBjdHguc2V0SXNMb3N0UGFzc3dvcmQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImN0eC5yZWdpc3RlcmluZ1wiLCBjdHgucmVnaXN0ZXJpbmcpXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19PnshY3R4LnJlZ2lzdGVyaW5nID8gXCJDcmVhdGUgYWNjb3VudFwiIDogXCJMb2cgaW5cIn0gPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==