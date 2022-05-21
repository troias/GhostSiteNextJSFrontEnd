self["webpackHotUpdate_N_E"]("pages/index",{

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
              console.log("registerUserData", username, email, password);
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return fetch("".concat("http://localhost:1337", "/api/auth/local/register"), {
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

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;

              if (!data.user) {
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
                _context.next = 20;
                break;
              }

              setError(data.error.message);
              timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(timeout);
              }, 3000); // console.log("returned", data.error.message);

              return _context.abrupt("return", data.error);

            case 20:
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](1);
              _timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout);
              }, 3000);
              setError("error" + _context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 22]]);
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
              return fetch("".concat("http://localhost:1337", "/api/auth/local"), {
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
                _context2.next = 17;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setLoading(false);
              setUser(data);
              setLoggedIn(true);
              setSuccess(true);
              setModalOpen(false);
              console.log("login", data);
              return _context2.abrupt("return", data);

            case 17:
              if (!data.error.message) {
                _context2.next = 21;
                break;
              }

              setError(data.error.message);
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
      var response, data, timeout, _timeout3;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("lostPassord", email);
              _context3.prev = 1;
              setLoading(true);
              _context3.next = 5;
              return fetch("".concat("http://localhost:1337", "/api/auth/forgot-password"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  email: email
                })
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              data = _context3.sent;

              if (!data.error) {
                _context3.next = 14;
                break;
              }

              setError(data.error);
              timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(timeout);
              }, 1500);
              console.log("lostPasswordInnerDataError", data.error);
              return _context3.abrupt("return", data.error);

            case 14:
              // console.log("login", data)
              setSuccess(true);
              setModalOpen(false);
              setLoading(false);
              console.log("lostPassData", data);
              return _context3.abrupt("return", data);

            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](1);
              // console.log("error", error);
              _timeout3 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout3);
              }, 1500);
              setError("something went wrong" + _context3.t0);
              console.log("lostPassData", _context3.t0);
              return _context3.abrupt("return", _context3.t0);

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 21]]);
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
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkIsLoggedIn();
    return function () {};
  }, [user]);
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
    lineNumber: 245,
    columnNumber: 5
  }, _this);
};

_s(AuthProvider, "GRMWZDzMZpuAff+XieVePQCgnZs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNldEl0ZW0iLCJtZXNzYWdlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJD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LFNBWEs7QUFZTEUsZUFBUyxFQUFUQSxTQVpLO0FBYUxJLGlCQUFXLEVBQVhBLFdBYks7QUFjTEMsb0JBQWMsRUFBZEEsY0FkSztBQWVMRyxvQkFBYyxFQUFkQSxjQWZLO0FBZ0JMRCx1QkFBaUIsRUFBakJBLGlCQWhCSztBQWlCTEQsb0JBQWMsRUFBZEEsY0FqQks7QUFrQkwrQixrQkFBWSxFQUFaQTtBQWxCSyxLQURUO0FBQUEsY0FzQkduRCxLQUFLLENBQUNzRDtBQXRCVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F2UU07O0dBQU12RCxZO1VBRUlHLGtEOzs7S0FGSkgsWTtBQXlRYiwrREFBZUYsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YTIzOTI2NTViMzFkZjIzMmJhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2luZ0luLCBzZXRMb2dnaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVnaXN0ZXJpbmcsIHNldFJlZ2lzdGVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9zdFBhc3N3b3JkLCBzZXRJc0xvc3RQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyTG9naW5cIiwgdXNlcilcblxuICBjb25zdCB0b2dnbGVSZWdpc3RlciA9IChlKSA9PiB7XG4gICAgICBcbiAgICBzZXRSZWdpc3RlcmluZyghcmVnaXN0ZXJpbmcpO1xuICAgIHNldExvZ2dpbmdJbihmYWxzZSk7XG4gICAgaXNMb3N0UGFzc3dvcmQgJiYgc2V0SXNMb3N0UGFzc3dvcmQoZmFsc2UpO1xufTtcblxuXG5cblxuICBjb25zdCBsb2dPdXRVc2VyID0gKCkgPT4ge1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKTtcbiAgIFxuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIGRhdGEpO1xuICAgICAgXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICBzZXRFcnJvcihcImVycm9yXCIgKyBlcnJvcilcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5kYXRhY2hlY2tcIiwgaWRlbnRpZmllciwgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbmRhdGFcIiwgZGF0YSlcblxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICBcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvc3RQYXNzd29yZCA9IGFzeW5jIChlbWFpbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibG9zdFBhc3NvcmRcIiwgZW1haWwpO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIFxuXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgXG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgIGNvbnNvbGUubG9nKFwibG9zdFBhc3N3b3JkSW5uZXJEYXRhRXJyb3JcIiwgZGF0YS5lcnJvcik7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH0sIDE1MDApO1xuXG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBlcnJvcik7XG5cbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgXG4gIH07XG5cblxuICBjb25zdCBjaGVja0lzTG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lzTG9nZ2VkSW4oKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfVxuXG4gIH0sIFt1c2VyXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgIGxvZ091dFVzZXIsXG4gICAgICAgIGNoZWNrSXNMb2dnZWRJbixcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICBzZXRNb2RhbE9wZW4sXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbW9kYWxPcGVuLFxuICAgICAgICByZWdpc3RlcmluZyxcbiAgICAgICAgc2V0UmVnaXN0ZXJpbmcsXG4gICAgICAgIHRvZ2dsZVJlZ2lzdGVyLCBcbiAgICAgICAgc2V0SXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGlzTG9zdFBhc3N3b3JkLFxuICAgICAgICBsb3N0UGFzc3dvcmRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=