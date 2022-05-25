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
                _context.next = 15;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              setLoggedIn(true);
              setLoading(false);
              setModalOpen(false); // console.log("login", data)

              return _context.abrupt("return", data);

            case 15:
              if (!data.error.message) {
                _context.next = 19;
                break;
              }

              setError(data.error.message);
              timeout = setTimeout(function () {
                clearTimeout(timeout);
              }, 3000); // console.log("returned", data.error.message);

              return _context.abrupt("return", data.error);

            case 19:
              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              _timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout);
              }, 3000);
              setError("error" + _context.t0);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 21]]);
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
              return fetch("".concat("http://localhost:1337", "/api/auth/forgot-password"), {
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
                _context3.next = 13;
                break;
              }

              setError(data.error);
              _timeout3 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout3);
              }, 1500);
              console.log("lostPasswordInnerDataError", data.error);
              return _context3.abrupt("return", data.error);

            case 13:
              // console.log("login", data)
              setIsLostPassword(false);
              setSuccess(true);
              setModalOpen(false);
              timeout = setTimeout(function () {
                setLoading(false);
                clearTimeout(timeout);
              }, 1500); // console.log("lostPassData", data);

              return _context3.abrupt("return", data);

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](0);
              // console.log("error", error);
              _timeout4 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout4);
              }, 1500);
              setError("something went wrong" + _context3.t0); // console.log("lostPassData", error);

              return _context3.abrupt("return", _context3.t0);

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 20]]);
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
    lineNumber: 262,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsIm1lc3NhZ2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImxvZ2luVXNlciIsImlkZW50aWZpZXIiLCJsb3N0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0s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LEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR2pELEtBQUssQ0FBQ3FEO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXhSTTs7R0FBTXRELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBMFJiLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2I3NTQyMDFhNGRkY2YwYjIxYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2dpbmdJbiwgc2V0TG9nZ2luZ0luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlZ2lzdGVyaW5nLCBzZXRSZWdpc3RlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvc3RQYXNzd29yZCwgc2V0SXNMb3N0UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlckxvZ2luXCIsIHVzZXIpXG5cbiAgY29uc3QgdG9nZ2xlUmVnaXN0ZXIgPSAoZSkgPT4ge1xuICAgICAgXG4gICAgc2V0UmVnaXN0ZXJpbmcoIXJlZ2lzdGVyaW5nKTtcbiAgICBzZXRMb2dnaW5nSW4oZmFsc2UpO1xuICAgIGlzTG9zdFBhc3N3b3JkICYmIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKTtcbn07XG5cblxuXG5cbiAgY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIHNldExvZ2dlZEluKGZhbHNlKVxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcblxuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyVXNlckRhdGFcIiwgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCk7XG4gICBcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICAgc2V0RXJyb3IoXCJlcnJvclwiICsgZXJyb3IpXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luZGF0YWNoZWNrXCIsIGlkZW50aWZpZXIsIHBhc3N3b3JkKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWxgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTG9naW5kYXRhXCIsIGRhdGEpXG5cbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmVkXCIsIGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgIFxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9zdFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwibG9zdFBhc3NvcmRcIiwgZW1haWwpO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICBcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAxNTAwKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9zdFBhc3N3b3JkSW5uZXJEYXRhRXJyb3JcIiwgZGF0YS5lcnJvcik7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuXG4gICAgICBcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgXG5cbiAgICAgIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKVxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9LCAxNTAwKTtcblxuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc0RhdGFcIiwgZXJyb3IpO1xuXG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG4gIFxuICB9O1xuXG5cbiAgY29uc3QgY2hlY2tJc0xvZ2dlZEluID0gKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY2hlY2tJc0xvZ2dlZEluKClcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgIH1cblxuICAvLyB9LCBbdXNlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHNldEVycm9yLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICBsb2dPdXRVc2VyLFxuICAgICAgICBjaGVja0lzTG9nZ2VkSW4sXG4gICAgICAgIHJlZ2lzdGVyVXNlcixcbiAgICAgICAgc2V0TW9kYWxPcGVuLFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIG1vZGFsT3BlbixcbiAgICAgICAgcmVnaXN0ZXJpbmcsXG4gICAgICAgIHNldFJlZ2lzdGVyaW5nLFxuICAgICAgICB0b2dnbGVSZWdpc3RlciwgXG4gICAgICAgIHNldElzTG9zdFBhc3N3b3JkLFxuICAgICAgICBpc0xvc3RQYXNzd29yZCxcbiAgICAgICAgbG9zdFBhc3N3b3JkXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9