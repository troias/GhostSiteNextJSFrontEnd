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
          ctx.isLostPassword(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmluZyIsImxvZ2luVXNlciIsInJlZ2lzdGVyVXNlciIsImlzTG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkIiwibG9naW5CdXR0b24iLCJyZWdpc3RlckJ1dHRvbiIsImxvc3RQYXNzd29yZEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXBCLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ0MseURBQUQsQ0FBdEIsQ0FGb0IsQ0FJcEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxpREFBUyxDQUFDO0FBQ3JCQyxpQkFBYSxFQUFFO0FBQ1hDLGNBQVEsRUFBRSxFQURDO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLGNBQVEsRUFBRTtBQUhDLEtBRE07QUFPckJDLG9CQUFnQixFQUFFQyx1Q0FBQSxDQUFXO0FBQ3pCSixjQUFRLEVBQUVJLHVDQUFBLEVBRGU7QUFHekJILFdBQUssRUFBRUcsdUNBQUEsR0FDRkgsS0FERSxDQUNJLHVCQURKLEVB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QUFtQixnQkFBbkIsR0FBc0MsUUFKb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVFSCxDQTlJRDs7R0FBTW5CLFM7VUFNYUssNkM7OztLQU5iTCxTO0FBZ0pOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwZTU4MTBhYTM4NTY2Y2IxNGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IGxvc3RQYXNzd29yZCBmcm9tICcuL2xvc3RQYXNzd29yZCc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJpc1JlZ2lzdGVyaW5nXCIsIGN0eC5yZWdpc3RlcmluZylcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKSxcblxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJylcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXG5cbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ05vIHBhc3N3b3JkIHByb3ZpZGVkLicpXG4gICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgaXMgdG9vIHNob3J0IC0gc2hvdWxkIGJlIDggY2hhcnMgbWluaW11bS4nKVxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC8oPz0uKlswLTldKS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYSBudW1iZXIuJyksXG4gICAgICAgIH0pLFxuICAgICAgICBvblN1Ym1pdDogYXN5bmMgdmFsdWVzID0+IHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXG4gICAgICAgICAgICBpZiAoIWN0eC5yZWdpc3RlcmluZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgICAgICAgICBjdHgubG9naW5Vc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdHgucmVnaXN0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyaW5nXCIpO1xuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3RlclVzZXIodmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN0eC5pc0xvc3RQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyBsb3N0IHBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNMb3N0UGFzc3dvcmRcIiwgY3R4LmlzTG9zdFBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBjdHgubG9zdFBhc3N3b3JkKHZhbHVlcy5lbWFpbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICB9KTtcblxuXG5cblxuXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgIExvZ2luIHRvIHlvdXIgYWNjb3VudFxuICAgICAgICA8L2J1dHRvbj4pXG5cblxuXG4gICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXIgIHRvIHlvdXIgYWNjb3VudCA8L2J1dHRvbj5cbiAgICApXG5cbiAgICBjb25zdCBsb3N0UGFzc3dvcmRCdXR0b24gPSAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgU3VibWl0IHRvIHJlY292ZXIgcGFzc3dvcmQgPC9idXR0b24+XG4gICAgKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB4LTYgcGItNCBzcGFjZS15LTYgbGc6cHgtOCBzbTpwYi02IHhsOnBiLThcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj57Y3R4LmlzTG9zdFBhc3N3b3JkID8gXCJQbGVhc2Ugc3VibWl0IGlmIHlvdSBmb3Jnb3QgcGFzc3dvcmRcIiA6ICghY3R4LnJlZ2lzdGVyaW5nID8gXCJMb2dpbiB0byBvdXIgcGxhdGZvcm1cIiA6IFwiUmVnaXN0ZXIgdG8gb3V0IHBsYXRmb3JtXCIpfTwvaDM+XG5cbiAgICAgICAgICAgIHtjdHgucmVnaXN0ZXJpbmcgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbGZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0cm9pYXMwMDduelwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VybmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudXNlcm5hbWUgJiYgZm9ybWlrLmVycm9ycy51c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy51c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+WW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS02MDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGNvbXBhbnkuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IWN0eC5pc0xvc3RQYXNzd29yZCAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Zb3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5wYXNzd29yZH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cblxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtYmx1ZS01MDBcIiBvbkNsaWNrPXsoKSA9PiBjdHguc2V0SXNMb3N0UGFzc3dvcmQodHJ1ZSl9PntjdHguaXNMb3N0UGFzc3dvcmQgJiYgXCJMb3N0IFBhc3N3b3JkP1wifTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIHtjdHguaXNMb3N0UGFzc3dvcmQgJiYgIGxvc3RQYXNzd29yZEJ1dHRvbn0gKi99XG4gICAgICAgICAgICB7Y3R4LmlzTG9zdFBhc3N3b3JkID8gbG9zdFBhc3N3b3JkQnV0dG9uIDogKGN0eC5yZWdpc3RlcmluZyA/IHJlZ2lzdGVyQnV0dG9uIDogbG9naW5CdXR0b24pfVxuICAgICAgICAgICAgey8qIHshY3R4LnJlZ2lzdGVyaW5nICYmICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgbG9naW5CdXR0b259XG4gICAgICAgICAgICAgICAgICAgIHtjdHgucmVnaXN0ZXJpbmcgJiYgcmVnaXN0ZXJCdXR0b259ICovfVxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIHshY3R4LnJlZ2lzdGVyaW5nID8gXCJOb3QgcmVnaXN0ZXJlZFwiIDogXCJBbHJlYWR5IHJlZ2lzdGVyZWQ/XCJ9IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjdHgudG9nZ2xlUmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmlzTG9zdFBhc3N3b3JkKGZhbHNlKVxuICAgICAgICAgICAgICAgIH19PnshY3R4LnJlZ2lzdGVyaW5nID8gXCJDcmVhdGUgYWNjb3VudFwiIDogXCJMb2cgaW5cIn0gPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==