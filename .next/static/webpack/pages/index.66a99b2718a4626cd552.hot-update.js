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
  };

  var logOutUser = function logOutUser() {
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
    router.push("/");
  };

  var registerUser = /*#__PURE__*/function () {
    var _ref = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, email, password) {
      var response, data;
      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
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

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              data = _context.sent;

              if (!data.user) {
                _context.next = 14;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              setLoggedIn(true);
              setIsLoading(false); // console.log("login", data)

              return _context.abrupt("return", data);

            case 14:
              if (!data.error.message) {
                _context.next = 17;
                break;
              }

              setError(data.error.message); // console.log("returned", data.error.message);

              return _context.abrupt("return", data.error);

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              setError("error" + _context.t0);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19]]);
    }));

    return function registerUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginUser = /*#__PURE__*/function () {
    var _ref2 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(identifier, password) {
      var response, data;
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
                _context2.next = 20;
                break;
              }

              setError(data.error.message); // console.log("returned", data.error.message);

              return _context2.abrupt("return", data.error);

            case 20:
              // console.log("login", data)
              setLoading(false);
              _context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](0);
              // console.log("error", error);
              setError("something went wrong" + _context2.t0);
              return _context2.abrupt("return", _context2.t0);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 23]]);
    }));

    return function loginUser(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var lostPassword = /*#__PURE__*/function () {
    var _ref3 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(email) {
      var response, data;
      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setLoading(true);
              _context3.prev = 1;
              _context3.next = 4;
              return fetch("".concat("http://localhost:1337", "/api/auth/local/forgot-password"), {
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

              if (!data.error.message) {
                _context3.next = 11;
                break;
              }

              setError(data.error.message); // console.log("returned", data.error.message);

              return _context3.abrupt("return", data.error);

            case 11:
              // console.log("login", data)
              setSuccess(true);
              setModalOpen(false);
              setLoading(false);
              console.log("lostPassData", data);
              return _context3.abrupt("return", data);

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](1);
              // console.log("error", error);
              setError("something went wrong" + _context3.t0);
              return _context3.abrupt("return", _context3.t0);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 18]]);
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
    lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwiY29uc29sZSIsImxvZyIsImxvc3RQYXNzd29yZCIsImNoZWNrSXNMb2dnZWRJbiIsInVzZUVmZmVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFT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RUFBakJBLGlCQWhCSztBQWlCTEQsb0JBQWMsRUFBZEEsY0FqQks7QUFrQkw2QixrQkFBWSxFQUFaQTtBQWxCSyxLQURUO0FBQUEsY0FzQkdqRCxLQUFLLENBQUNvRDtBQXRCVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FuTk07O0dBQU1yRCxZO1VBRUlHLGtEOzs7S0FGSkgsWTtBQXFOYiwrREFBZUYsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmE5OWIyNzE4YTQ2MjZjZDU1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9nZ2luZ0luLCBzZXRMb2dnaW5nSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVnaXN0ZXJpbmcsIHNldFJlZ2lzdGVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9zdFBhc3N3b3JkLCBzZXRJc0xvc3RQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyTG9naW5cIiwgdXNlcilcblxuICBjb25zdCB0b2dnbGVSZWdpc3RlciA9IChlKSA9PiB7XG4gICAgICBcbiAgICBzZXRSZWdpc3RlcmluZyghcmVnaXN0ZXJpbmcpO1xuICAgIHNldExvZ2dpbmdJbihmYWxzZSk7XG59O1xuXG5cblxuXG4gIGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgfTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihcImVycm9yXCIgKyBlcnJvcilcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5kYXRhY2hlY2tcIiwgaWRlbnRpZmllciwgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbmRhdGFcIiwgZGF0YSlcblxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb3N0UGFzc3dvcmQgPSBhc3luYyAoZW1haWwpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbC9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc3dvcmRcIiwgZGF0YSlcbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cblxuICBjb25zdCBjaGVja0lzTG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lzTG9nZ2VkSW4oKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfVxuXG4gIH0sIFt1c2VyXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgIGxvZ091dFVzZXIsXG4gICAgICAgIGNoZWNrSXNMb2dnZWRJbixcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICBzZXRNb2RhbE9wZW4sXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbW9kYWxPcGVuLFxuICAgICAgICByZWdpc3RlcmluZyxcbiAgICAgICAgc2V0UmVnaXN0ZXJpbmcsXG4gICAgICAgIHRvZ2dsZVJlZ2lzdGVyLCBcbiAgICAgICAgc2V0SXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGlzTG9zdFBhc3N3b3JkLFxuICAgICAgICBsb3N0UGFzc3dvcmRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=