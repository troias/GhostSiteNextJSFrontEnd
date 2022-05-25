self["webpackHotUpdate_N_E"]("pages/_app",{

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
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/loginForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var LoginForm = function LoginForm() {
  _s();

  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_4__.default); // console.log("isLostPassword", ctx.isLostPassword);

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__.object({
      username: yup__WEBPACK_IMPORTED_MODULE_6__.string(),
      email: yup__WEBPACK_IMPORTED_MODULE_6__.string().email('Invalid email address').required('Required'),
      password: yup__WEBPACK_IMPORTED_MODULE_6__.string().min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.')
    }),
    onSubmit: function () {
      var _onSubmit = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(values) {
        return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ctx.registering && !ctx.isLostPassword) {
                  ctx.loginUser(values.email, values.password);
                }

                if (ctx.registering && !ctx.isLostPassword) {
                  ctx.registerUser(values.username, values.email, values.password);
                }

                if (ctx.isLostPassword) {
                  //  console.log("isLostPassword", ctx.isLostPassword);
                  ctx.lostPassword(values.email);
                }

              case 3:
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
    lineNumber: 55,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, _this);

  var lostPasswordButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Submit "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
      lineNumber: 79,
      columnNumber: 13
    }, _this), ctx.registering && !ctx.isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
        lineNumber: 83,
        columnNumber: 17
      }, _this), formik.touched.username && formik.errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 56
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
        lineNumber: 99,
        columnNumber: 17
      }, _this), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: formik.errors.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), !ctx.isLostPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        name: "password",
        id: "password",
        placeholder: "password",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, _this), formik.touched.password && formik.errors.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-3",
        children: formik.errors.password
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        onClick: function onClick() {
          return ctx.setIsLostPassword(true);
        },
        children: !ctx.isLostPassword && "Lost Password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, _this), ctx.isLostPassword ? lostPasswordButton : ctx.registering ? registerButton : loginButton, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: [!ctx.registering ? "Not registered" : "Already registered?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: ctx.toggleRegister,
        children: [!ctx.registering ? "Create account" : "Log in", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 79
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsInJlZ2lzdGVyaW5nIiwiaXNMb3N0UGFzc3dvcmQiLCJsb2dpblVzZXIiLCJyZWdpc3RlclVzZXIiLCJsb3N0UGFzc3dvcmQiLCJsb2dpbkJ1dHRvbiIsInJlZ2lzdGVyQnV0dG9uIiwibG9zdFBhc3N3b3JkQnV0dG9uIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInRvdWNoZWQiLCJlcnJvcnMiLCJzZXRJc0xvc3RQYXNzd29yZCIsInRvZ2dsZVJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEIsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUZvQixDQUlwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEVBREM7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsY0FBUSxFQUFFO0FBSEMsS0FETTtBQU9yQkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDekJKLGNBQVEsRUFBRUksdUNBQUEsRUFEZTtBQUd6QkgsV0FBSyxFQUFFRyx1Q0FBQSxHQUNGSCxLQURFLENBQ0ksdUJBREosRUFFRkksUUFGRSxDQUVPLFVBRlAsQ0FI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LFM7QUEwSU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MjZiYmNiMWU1ZGU2ZWEzYjQwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGhDb250ZXh0JztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcblxuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXNMb3N0UGFzc3dvcmRcIiwgY3R4LmlzTG9zdFBhc3N3b3JkKTtcblxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKSxcblxuICAgICAgICAgICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJylcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJyksXG4gICAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgICAgICAgLm1pbig4LCAnUGFzc3dvcmQgaXMgdG9vIHNob3J0IC0gc2hvdWxkIGJlIDggY2hhcnMgbWluaW11bS4nKVxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC8oPz0uKlswLTldKS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYSBudW1iZXIuJyksXG5cbiAgICAgICAgfSksXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFjdHgucmVnaXN0ZXJpbmcgJiYgIWN0eC5pc0xvc3RQYXNzd29yZCkge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdHgubG9naW5Vc2VyKHZhbHVlcy5lbWFpbCwgdmFsdWVzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdHgucmVnaXN0ZXJpbmcgJiYgIWN0eC5pc0xvc3RQYXNzd29yZCkge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN0eC5yZWdpc3RlclVzZXIodmFsdWVzLnVzZXJuYW1lLCB2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmlzTG9zdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImlzTG9zdFBhc3N3b3JkXCIsIGN0eC5pc0xvc3RQYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgY3R4Lmxvc3RQYXNzd29yZCh2YWx1ZXMuZW1haWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cblxuXG5cblxuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgTG9naW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgIDwvYnV0dG9uPilcblxuXG5cbiAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICBSZWdpc3RlciAgdG8geW91ciBhY2NvdW50IDwvYnV0dG9uPlxuICAgIClcblxuICAgIGNvbnN0IGxvc3RQYXNzd29yZEJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgU3VibWl0IDwvYnV0dG9uPlxuICAgIClcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJweC02IHBiLTQgc3BhY2UteS02IGxnOnB4LTggc206cGItNiB4bDpwYi04XCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuXG5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e2N0eC5pc0xvc3RQYXNzd29yZCA/IFwiUGxlYXNlIHN1Ym1pdCBpZiB5b3UgZm9yZ290IHBhc3N3b3JkXCIgOiAoIWN0eC5yZWdpc3RlcmluZyA/IFwiTG9naW4gdG8gb3VyIHBsYXRmb3JtXCIgOiBcIlJlZ2lzdGVyIHRvIG91dCBwbGF0Zm9ybVwiKX08L2gzPlxuXG4gICAgICAgICAgICB7Y3R4LnJlZ2lzdGVyaW5nICYmICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0cm9pYXMwMDduelwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy51c2VybmFtZX0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQudXNlcm5hbWUgJiYgZm9ybWlrLmVycm9ycy51c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy51c2VybmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2Pn1cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNjAwIGRhcms6Ym9yZGVyLWdyYXktNTAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyFjdHguaXNMb3N0UGFzc3dvcmQgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+e2Zvcm1pay5lcnJvcnMucGFzc3dvcmR9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWJsdWUtNTAwXCIgb25DbGljaz17KCkgPT4gY3R4LnNldElzTG9zdFBhc3N3b3JkKHRydWUpfT57IWN0eC5pc0xvc3RQYXNzd29yZCAmJiBcIkxvc3QgUGFzc3dvcmQ/XCJ9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgeyhjdHguaXNMb3N0UGFzc3dvcmQpID8gKGxvc3RQYXNzd29yZEJ1dHRvbikgOiAoY3R4LnJlZ2lzdGVyaW5nID8gKHJlZ2lzdGVyQnV0dG9uICkgOiBsb2dpbkJ1dHRvbil9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgey8qIHshY3R4LnJlZ2lzdGVyaW5nICYmICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgbG9naW5CdXR0b259XG4gICAgICAgICAgICAgICAgICAgIHtjdHgucmVnaXN0ZXJpbmcgJiYgcmVnaXN0ZXJCdXR0b259ICovfVxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIHshY3R4LnJlZ2lzdGVyaW5nID8gXCJOb3QgcmVnaXN0ZXJlZFwiIDogXCJBbHJlYWR5IHJlZ2lzdGVyZWQ/XCJ9IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9eyBjdHgudG9nZ2xlUmVnaXN0ZXIgfT57IWN0eC5yZWdpc3RlcmluZyA/IFwiQ3JlYXRlIGFjY291bnRcIiA6IFwiTG9nIGluXCJ9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=