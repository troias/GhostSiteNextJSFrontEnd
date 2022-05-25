self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/authContext.js":
/*!********************************!*\
  !*** ./context/authContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/context/authContext.js",
    _this = undefined,
    _s = $RefreshSig$();



var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();
var AuthProvider = function AuthProvider(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      success = _useState2[0],
      setSuccess = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isLoggedIn = _useState4[0],
      setLoggedIn = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isLoading = _useState5[0],
      setLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalOpen = _useState6[0],
      setModalOpen = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loggingIn = _useState7[0],
      setLoggingIn = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      registering = _useState8[0],
      setRegistering = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isLostPassword = _useState9[0],
      setIsLostPassword = _useState9[1]; // console.log("userLogin", user)


  var toggleRegister = function toggleRegister(e) {
    setRegistering(!registering);
    setLoggingIn(false);
    isLostPassword && setIsLostPassword(false);
  };

  var logOutUser = function logOutUser() {
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
    router.push("/");
  };

  var registerUser = /*#__PURE__*/function () {
    var _ref = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, email, password) {
      var response, data, timeout, _timeout;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/auth/local/register"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: username,
                  email: email,
                  password: password
                })
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              data = _context.sent;
              console.log("registerUserData", data);

              if (!data) {
                _context.next = 16;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              setLoggedIn(true);
              setLoading(false);
              setModalOpen(false); // console.log("login", data)

              return _context.abrupt("return", data);

            case 16:
              if (!data.error.message) {
                _context.next = 21;
                break;
              }

              setError(data.error.message);
              timeout = setTimeout(function () {
                setSuccess(false);
                setLoading(false);
                clearTimeout(timeout);
              }, 3000);
              console.log("registerError", data.error.message);
              return _context.abrupt("return", data.error);

            case 21:
              setSuccess(true);
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              _timeout = setTimeout(function () {
                setLoading(false);
                setSuccess(false);
                clearTimeout(_timeout);
              }, 3000);
              setError("error" + _context.t0);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 24]]);
    }));

    return function registerUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginUser = /*#__PURE__*/function () {
    var _ref2 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(identifier, password) {
      var response, data, timeout, _timeout2;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading(true);
              _context2.next = 4;
              return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/auth/local"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  identifier: identifier,
                  password: password
                })
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              data = _context2.sent;

              if (!data.user) {
                _context2.next = 16;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setLoading(false);
              setUser(data);
              setLoggedIn(true);
              setSuccess(true);
              setModalOpen(false); // console.log("login", data)

              return _context2.abrupt("return", data);

            case 16:
              if (!data.error.message) {
                _context2.next = 21;
                break;
              }

              setError(data.error.message);
              setSuccess(false);
              timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(timeout);
              }, 3000); // console.log("returned", data.error.message);

              return _context2.abrupt("return", data.error);

            case 21:
              // console.log("login", data)
              setLoading(false);
              _context2.next = 29;
              break;

            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](0);
              // console.log("error", error);
              setError("something went wrong" + _context2.t0);
              _timeout2 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout2);
              }, 3000);
              return _context2.abrupt("return", _context2.t0);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 24]]);
    }));

    return function loginUser(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var lostPassword = /*#__PURE__*/function () {
    var _ref3 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(email) {
      var response, data, _timeout3, timeout, _timeout4;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setLoading(true);
              _context3.next = 4;
              return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/auth/forgot-password"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: email
                })
              });

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              data = _context3.sent;

              if (!data.error) {
                _context3.next = 12;
                break;
              }

              setError(data.error.message);
              _timeout3 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout3);
              }, 1500); // console.log("lostPasswordInnerDataError", data.error);

              return _context3.abrupt("return", data.error);

            case 12:
              // console.log("login", data)
              setIsLostPassword(false);
              setSuccess(true);
              setModalOpen(false);
              timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(timeout);
              }, 1500); // console.log("lostPassData", data);

              return _context3.abrupt("return", data);

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](0);
              // console.log("error", error);
              _timeout4 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout4);
              }, 1500);
              setError("something went wrong" + _context3.t0); // console.log("lostPassData", error);

              return _context3.abrupt("return", _context3.t0);

            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 19]]);
    }));

    return function lostPassword(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  var checkIsLoggedIn = function checkIsLoggedIn() {
    if (isLoggedIn) {
      return true;
    }

    if (!isLoggedIn) {
      return false;
    }
  }; // useEffect(() => {
  //   checkIsLoggedIn()
  //   return () => {
  //   }
  // }, [user])


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: {
      user: user,
      setUser: setUser,
      setError: setError,
      success: success,
      error: error,
      loginUser: loginUser,
      logOutUser: logOutUser,
      checkIsLoggedIn: checkIsLoggedIn,
      registerUser: registerUser,
      setModalOpen: setModalOpen,
      isLoading: isLoading,
      modalOpen: modalOpen,
      registering: registering,
      setRegistering: setRegistering,
      toggleRegister: toggleRegister,
      setIsLostPassword: setIsLostPassword,
      isLostPassword: isLostPassword,
      lostPassword: lostPassword
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 266,
    columnNumber: 5
  }, _this);
};

_s(AuthProvider, "6wax7VoSvxjMMYhnty9m4tO5WkU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = AuthProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJtZXNzYWdlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0s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TEgsZUFBUyxFQUFUQSxTQVhLO0FBWUxFLGVBQVMsRUFBVEEsU0FaSztBQWFMSSxpQkFBVyxFQUFYQSxXQWJLO0FBY0xDLG9CQUFjLEVBQWRBLGNBZEs7QUFlTEcsb0JBQWMsRUFBZEEsY0FmSztBQWdCTEQsdUJBQWlCLEVBQWpCQSxpQkFoQks7QUFpQkxELG9CQUFjLEVBQWRBLGNBakJLO0FBa0JMK0Isa0JBQVksRUFBWkE7QUFsQkssS0FEVDtBQUFBLGNBc0JHbkQsS0FBSyxDQUFDcUQ7QUF0QlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBNVJNOztHQUFNdEQsWTtVQUVJRyxrRDs7O0tBRkpILFk7QUE4UmIsK0RBQWVGLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZGIwMTFhZGYyOTdjZjk1NmI2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2luZ0luLCBzZXRMb2dnaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVnaXN0ZXJpbmcsIHNldFJlZ2lzdGVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9zdFBhc3N3b3JkLCBzZXRJc0xvc3RQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyTG9naW5cIiwgdXNlcilcblxuICBjb25zdCB0b2dnbGVSZWdpc3RlciA9IChlKSA9PiB7XG4gICAgICBcbiAgICBzZXRSZWdpc3RlcmluZyghcmVnaXN0ZXJpbmcpO1xuICAgIHNldExvZ2dpbmdJbihmYWxzZSk7XG4gICAgaXNMb3N0UGFzc3dvcmQgJiYgc2V0SXNMb3N0UGFzc3dvcmQoZmFsc2UpO1xufTtcblxuXG5cblxuICBjb25zdCBsb2dPdXRVc2VyID0gKCkgPT4ge1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKTtcbiAgIFxuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICBzZXRVc2VyKGRhdGEpO1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgIFxuICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJFcnJvclwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIHNldEVycm9yKFwiZXJyb3JcIiArIGVycm9yKVxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJsb2dpbmRhdGFjaGVja1wiLCBpZGVudGlmaWVyLCBwYXNzd29yZCk7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkxvZ2luZGF0YVwiLCBkYXRhKVxuXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcblxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICBcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvc3RQYXNzd29yZCA9IGFzeW5jIChlbWFpbCkgPT4ge1xuICAgIC8vICBjb25zb2xlLmxvZyhcImxvc3RQYXNzb3JkXCIsIGVtYWlsKTtcbiAgIFxuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgXG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAxNTAwKTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3N3b3JkSW5uZXJEYXRhRXJyb3JcIiwgZGF0YS5lcnJvcik7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuXG4gICAgICBcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgXG5cbiAgICAgIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKVxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9LCAxNTAwKTtcblxuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc0RhdGFcIiwgZXJyb3IpO1xuXG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG4gIFxuICB9O1xuXG5cbiAgY29uc3QgY2hlY2tJc0xvZ2dlZEluID0gKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY2hlY2tJc0xvZ2dlZEluKClcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgIH1cblxuICAvLyB9LCBbdXNlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHNldEVycm9yLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICBsb2dPdXRVc2VyLFxuICAgICAgICBjaGVja0lzTG9nZ2VkSW4sXG4gICAgICAgIHJlZ2lzdGVyVXNlcixcbiAgICAgICAgc2V0TW9kYWxPcGVuLFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIG1vZGFsT3BlbixcbiAgICAgICAgcmVnaXN0ZXJpbmcsXG4gICAgICAgIHNldFJlZ2lzdGVyaW5nLFxuICAgICAgICB0b2dnbGVSZWdpc3RlciwgXG4gICAgICAgIHNldElzTG9zdFBhc3N3b3JkLFxuICAgICAgICBpc0xvc3RQYXNzd29yZCxcbiAgICAgICAgbG9zdFBhc3N3b3JkXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9