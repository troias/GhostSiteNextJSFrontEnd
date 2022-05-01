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
    onClick: function onClick() {
      return console.log("clicked");
    },
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, _this);

  var registerButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: function onClick() {
      return console.log("clicked");
    },
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);

  var lostPasswordButton = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: function onClick() {
      return console.log("clicked");
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiY3R4IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1hdGNoZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmluZyIsImxvZ2luVXNlciIsInJlZ2lzdGVyVXNlciIsImlzTG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkIiwibG9zdFBhc3N3b3JkSGFuZGxlciIsInNldElzTG9zdFBhc3N3b3JkIiwibG9naW5CdXR0b24iLCJyZWdpc3RlckJ1dHRvbiIsImxvc3RQYXNzd29yZEJ1dHRvbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJ0b3VjaGVkIiwiZXJyb3JzIiwidG9nZ2xlUmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEIsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QixDQUZvQixDQUlwQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLGlEQUFTLENBQUM7QUFDckJDLGlCQUFhLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEVBREM7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsY0FBUSxFQUFFO0FBSEMsS0FETTtBQU9yQkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDekJKLGNBQVEsRUFBRUksdUNBQUEsRUFEZTtBQUd6QkgsV0FBSyxFQUFFRyx1Q0FBQSxHQUNGSCxLQURFLENBQ0ksdUJBREosRUFFRkksUUFGRSxDQUVPLFVBRlAsQ0FIa0I7QUFNekJILGNBQVEsRUFBRUUsdUNBQUEsR0FFTEMsUUFGSyxDQUVJLHVCQUZKLEVBR0xDLEdBSEssQ0FHRCxDQUhDLEVBR0Usb0RBSEYsRUFJTEMsT0FKSyxDQUlHLGFBSkgsRUFJa0IsaUNBSmxCO0FBTmUsS0FBWCxDQVBHO0FBbUJyQkMsWUFBUSxFQUFFLGtCQUFBQyxNQUFNLEVBQUk7QUFDaEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjs7QUFDQSxVQUFJLENBQUNqQixHQUFHLENBQUNrQixXQUFULEVBQXNCO0FBQ2xCRixlQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FqQixXQUFHLENBQUNtQixTQUFKLENBQWNKLE1BQU0sQ0FBQ1IsS0FBckIsRUFBNEJRLE1BQU0sQ0FBQ1AsUUFBbkM7QUFDSDs7QUFDRCxVQUFJUixHQUFHLENBQUNrQixXQUFSLEVBQXFCO0FBQ2pCbEIsV0FBRyxDQUFDb0IsWUFBSixDQUFpQkwsTUFBTSxDQUFDUixLQUF4QixFQUErQlEsTUFBTSxDQUFDUCxRQUF0QztBQUNIOztBQUNELFVBQUlSLEdBQUcsQ0FBQ3FCLGNBQVIsRUFBd0I7QUFDcEJMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCakIsR0FBRyxDQUFDcUIsY0FBbEM7QUFDQXJCLFdBQUcsQ0FBQ3NCLFlBQUosQ0FBaUJQLE1BQU0sQ0FBQ1IsS0FBeEI7QUFDSDtBQUVKO0FBbkNvQixHQUFELENBQXhCOztBQXVDQSxNQUFNZ0IsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBRTlCdkIsT0FBRyxDQUFDd0IsaUJBQUosQ0FBc0IsQ0FBQ3hCLEdBQUcsQ0FBQ3FCLGNBQTNCO0FBR0gsR0FMRDs7QUFRQSxNQUFNSSxXQUFXLGdCQUNiO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxXQUFPLEVBQUU7QUFBQSxhQUFNVCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQU47QUFBQSxLQUZiO0FBR0ksYUFBUyxFQUFDLDZOQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7O0FBVUEsTUFBTVMsY0FBYyxnQkFDaEI7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQU47QUFBQSxLQUFqQjtBQUErQyxRQUFJLEVBQUMsUUFBcEQ7QUFBNkQsYUFBUyxFQUFDLDZOQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKOztBQUtBLE1BQU1VLGtCQUFrQixnQkFDcEI7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQU47QUFBQSxLQUFqQjtBQUErQyxRQUFJLEVBQUMsUUFBcEQ7QUFBNkQsYUFBUyxFQUFDLDZOQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKOztBQU9BLHNCQUNJO0FBQU0sYUFBUyxFQUFDLDZDQUFoQjtBQUE4RCxZQUFRLEVBQUVkLE1BQU0sQ0FBQ3lCLFlBQS9FO0FBQUEsNEJBR0k7QUFBSSxlQUFTLEVBQUMsbURBQWQ7QUFBQSxnQkFBbUU1QixHQUFHLENBQUNxQixjQUFKLEdBQXFCLHNDQUFyQixHQUErRCxDQUFDckIsR0FBRyxDQUFDa0IsV0FBTCxHQUFtQix1QkFBbkIsR0FBNEM7QUFBOUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLEVBS0tsQixHQUFHLENBQUNrQixXQUFKLGlCQUFtQjtBQUFBLDhCQUNoQjtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQTBCLGlCQUFTLEVBQUMsaUVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCLGVBRWhCO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxZQUFJLEVBQUMsVUFGVDtBQUdJLFVBQUUsRUFBQyxVQUhQO0FBSUksaUJBQVMsRUFBQyxpTkFKZDtBQUtJLG1CQUFXLEVBQUMsYUFMaEI7QUFNSSxnQkFBUSxFQUFFZixNQUFNLENBQUMwQixZQU5yQjtBQU9JLGNBQU0sRUFBRTFCLE1BQU0sQ0FBQzJCLFVBUG5CO0FBUUksYUFBSyxFQUFFM0IsTUFBTSxDQUFDWSxNQUFQLENBQWNUO0FBUnpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGZ0IsRUFXZkgsTUFBTSxDQUFDNEIsT0FBUCxDQUFlekIsUUFBZixJQUEyQkgsTUFBTSxDQUFDNkIsTUFBUCxDQUFjMUIsUUFBekMsZ0JBQ0c7QUFBQSxrQkFBTUgsTUFBTSxDQUFDNkIsTUFBUCxDQUFjMUI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILEdBRUcsSUFiWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMeEIsZUFxQkk7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQXVCLGlCQUFTLEVBQUMsaUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksWUFBSSxFQUFDLE9BRlQ7QUFHSSxVQUFFLEVBQUMsT0FIUDtBQUlJLGlCQUFTLEVBQUMsaU5BSmQ7QUFLSSxtQkFBVyxFQUFDLG1CQUxoQjtBQU1JLGdCQUFRLEVBQUVILE1BQU0sQ0FBQzBCLFlBTnJCO0FBT0ksY0FBTSxFQUFFMUIsTUFBTSxDQUFDMkIsVUFQbkI7QUFRSSxhQUFLLEVBQUUzQixNQUFNLENBQUNZLE1BQVAsQ0FBY1I7QUFSekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBV0tKLE1BQU0sQ0FBQzRCLE9BQVAsQ0FBZXhCLEtBQWYsSUFBd0JKLE1BQU0sQ0FBQzZCLE1BQVAsQ0FBY3pCLEtBQXRDLGdCQUNHO0FBQUEsa0JBQU1KLE1BQU0sQ0FBQzZCLE1BQVAsQ0FBY3pCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxHQUVHLElBYlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJKLEVBb0NELENBQUNQLEdBQUcsQ0FBQ3FCLGNBQUwsaUJBQXdCO0FBQUEsOEJBQ2Y7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUEwQixpQkFBUyxFQUFDLGlFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlLGVBRWY7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksVUFBRSxFQUFDLFVBSFA7QUFJSSxtQkFBVyxFQUFDLGtCQUpoQjtBQUtJLGlCQUFTLEVBQUMsaU5BTGQ7QUFNSSxnQkFBUSxFQUFFbEIsTUFBTSxDQUFDMEIsWUFOckI7QUFPSSxjQUFNLEVBQUUxQixNQUFNLENBQUMyQixVQVBuQjtBQVFJLGFBQUssRUFBRTNCLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjUDtBQVJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmUsRUFXZEwsTUFBTSxDQUFDNEIsT0FBUCxDQUFldkIsUUFBZixJQUEyQkwsTUFBTSxDQUFDNkIsTUFBUCxDQUFjeEIsUUFBekMsZ0JBQ0c7QUFBQSxrQkFBTUwsTUFBTSxDQUFDNkIsTUFBUCxDQUFjeEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILEdBRUcsSUFiVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ3ZCLGVBbURJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsNkJBRUk7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFTLEVBQUMsMERBQXRCO0FBQWlGLGVBQU8sRUFBRWUsbUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5ESixFQXVEYXZCLEdBQUcsQ0FBQ3FCLGNBQUosSUFBdUJNLGtCQXZEcEMsRUF3RGEsQ0FBQzNCLEdBQUcsQ0FBQ2tCLFdBQUwsSUFBb0IsQ0FBQ2xCLEdBQUcsQ0FBQ3FCLGNBQXpCLElBQTJDSSxXQXhEeEQsRUF5RGF6QixHQUFHLENBQUNrQixXQUFKLElBQW1CUSxjQXpEaEMsZUE0REk7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSxpQkFDSyxDQUFDMUIsR0FBRyxDQUFDa0IsV0FBTCxHQUFtQixnQkFBbkIsR0FBc0MscUJBRDNDLG9CQUNrRTtBQUFHLGlCQUFTLEVBQUMsa0RBQWI7QUFBZ0UsZUFBTyxFQUFFbEIsR0FBRyxDQUFDaUMsY0FBN0U7QUFBQSxtQkFBOEYsQ0FBQ2pDLEdBQUcsQ0FBQ2tCLFdBQUwsR0FBa0IsZ0JBQWxCLEdBQXFDLFFBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrRUgsQ0E3SUQ7O0dBQU1uQixTO1VBTWFLLDZDOzs7S0FOYkwsUztBQStJTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMWUwZTNmOWMwODljZWYzZjBiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2F1dGhDb250ZXh0JztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcbmltcG9ydCBsb3N0UGFzc3dvcmQgZnJvbSAnLi9sb3N0UGFzc3dvcmQnO1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiaXNSZWdpc3RlcmluZ1wiLCBjdHgucmVnaXN0ZXJpbmcpXG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcblxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBZdXAuc3RyaW5nKCksXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAgICAgICAuZW1haWwoJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdObyBwYXNzd29yZCBwcm92aWRlZC4nKVxuICAgICAgICAgICAgICAgIC5taW4oOCwgJ1Bhc3N3b3JkIGlzIHRvbyBzaG9ydCAtIHNob3VsZCBiZSA4IGNoYXJzIG1pbmltdW0uJylcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvKD89LipbMC05XSkvLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGEgbnVtYmVyLicpLFxuICAgICAgICB9KSxcbiAgICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKVxuICAgICAgICAgICAgaWYgKCFjdHgucmVnaXN0ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dpbmcgaW5cIik7XG4gICAgICAgICAgICAgICAgY3R4LmxvZ2luVXNlcih2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LnJlZ2lzdGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgY3R4LnJlZ2lzdGVyVXNlcih2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3R4LmlzTG9zdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGxvc3QgcGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0xvc3RQYXNzd29yZFwiLCBjdHguaXNMb3N0UGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGN0eC5sb3N0UGFzc3dvcmQodmFsdWVzLmVtYWlsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIFxuXG4gICAgY29uc3QgbG9zdFBhc3N3b3JkSGFuZGxlciA9ICgpID0+IHtcbiAgICBcbiAgICAgICAgY3R4LnNldElzTG9zdFBhc3N3b3JkKCFjdHguaXNMb3N0UGFzc3dvcmQpO1xuICAgICAgICBcbiAgICAgICBcbiAgICB9XG5cblxuICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgTG9naW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgIDwvYnV0dG9uPilcblxuXG5cbiAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrZWRcIil9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyICB0byB5b3VyIGFjY291bnQgPC9idXR0b24+XG4gICAgKVxuXG4gICAgY29uc3QgbG9zdFBhc3N3b3JkQnV0dG9uID0gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKX0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgU3VibWl0IHRvIHJlY292ZXIgcGFzc3dvcmQgPC9idXR0b24+XG4gICAgKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB4LTYgcGItNCBzcGFjZS15LTYgbGc6cHgtOCBzbTpwYi02IHhsOnBiLThcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XG5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj57Y3R4LmlzTG9zdFBhc3N3b3JkID8gXCJQbGVhc2Ugc3VibWl0IGlmIHlvdSBmb3Jnb3QgcGFzc3dvcmRcIiA6ICghY3R4LnJlZ2lzdGVyaW5nID8gXCJMb2dpbiB0byBvdXIgcGxhdGZvcm1cIjogXCJSZWdpc3RlciB0byBvdXQgcGxhdGZvcm1cIil9PC9oMz5cblxuICAgICAgICAgICAge2N0eC5yZWdpc3RlcmluZyAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sZm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS02MDAgZGFyazpib3JkZXItZ3JheS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInRyb2lhczAwN256XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC51c2VybmFtZSAmJiBmb3JtaWsuZXJyb3JzLnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtaWsuZXJyb3JzLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Zb3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAY29tcGFueS5jb21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9IC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1pay5lcnJvcnMuZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgIHsgICAhY3R4LmlzTG9zdFBhc3N3b3JkICYmICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5Zb3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTYwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5wYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWlrLmVycm9ycy5wYXNzd29yZH08L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cblxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNzAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtYmx1ZS01MDBcIiBvbkNsaWNrPXtsb3N0UGFzc3dvcmRIYW5kbGVyfT5Mb3N0IFBhc3N3b3JkPzwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y3R4LmlzTG9zdFBhc3N3b3JkICYmICBsb3N0UGFzc3dvcmRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIHshY3R4LnJlZ2lzdGVyaW5nICYmICFjdHguaXNMb3N0UGFzc3dvcmQgJiYgbG9naW5CdXR0b259XG4gICAgICAgICAgICAgICAgICAgIHtjdHgucmVnaXN0ZXJpbmcgJiYgcmVnaXN0ZXJCdXR0b259XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIHshY3R4LnJlZ2lzdGVyaW5nID8gXCJOb3QgcmVnaXN0ZXJlZFwiIDogXCJBbHJlYWR5IHJlZ2lzdGVyZWQ/XCJ9IDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ibHVlLTUwMFwiIG9uQ2xpY2s9e2N0eC50b2dnbGVSZWdpc3Rlcn0+eyFjdHgucmVnaXN0ZXJpbmc/IFwiQ3JlYXRlIGFjY291bnRcIiA6IFwiTG9nIGluXCJ9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=