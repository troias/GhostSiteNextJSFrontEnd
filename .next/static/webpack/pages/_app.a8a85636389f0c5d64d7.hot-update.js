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
    setError("");
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
              // console.log("registerUserData", username, email, password);
              setError("");
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
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

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              data = _context.sent;
              console.log("registerUserData", data);

              if (!data.user) {
                _context.next = 18;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              setLoggedIn(true);
              setLoading(false);
              setSuccess(true);
              setModalOpen(false); // console.log("login", data)

              return _context.abrupt("return", data);

            case 18:
              if (!data.error.message) {
                _context.next = 23;
                break;
              }

              setError(data.error.message);
              timeout = setTimeout(function () {
                setError(data.error.message);
                setSuccess(false);
                setLoading(false);
                clearTimeout(timeout);
              }, 3000);
              console.log("registerError", data.error.message);
              return _context.abrupt("return", data.error);

            case 23:
              _context.next = 29;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](1);
              setError("error" + _context.t0);
              _timeout = setTimeout(function () {
                setLoading(false);
                setSuccess(false);
                clearTimeout(_timeout);
              }, 3000);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 25]]);
    }));

    return function registerUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var loginUser = /*#__PURE__*/function () {
    var _ref2 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(identifier, password) {
      var response, data, timeout, _timeout2, _timeout3;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setError(""); // console.log("logindatacheck", identifier, password);

              _context2.prev = 1;
              setLoading(true);
              _context2.next = 5;
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

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              data = _context2.sent;

              if (!data.user) {
                _context2.next = 14;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setSuccess(true);
              timeout = setTimeout(function () {
                setLoading(false);
                setUser(data);
                setLoggedIn(true);
                setModalOpen(false);
                clearTimeout(timeout);
              }, 1500); // console.log("login", data)

              return _context2.abrupt("return", data);

            case 14:
              if (!data.error.message) {
                _context2.next = 18;
                break;
              }

              setError(data.error.message);
              _timeout2 = setTimeout(function () {
                setLoading(false);
                setSuccess(false);
                clearTimeout(_timeout2);
              }, 1500); // console.log("returned", data.error.message);

              return _context2.abrupt("return", data.error);

            case 18:
              // console.log("login", data)
              setLoading(false);
              _context2.next = 26;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](1);
              // console.log("error", error);
              setError("something went wrong" + _context2.t0);
              _timeout3 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout3);
              }, 1500);
              return _context2.abrupt("return", _context2.t0);

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 21]]);
    }));

    return function loginUser(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();

  var lostPassword = /*#__PURE__*/function () {
    var _ref3 = (0,_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(email) {
      var response, data, _timeout4, timeout, _timeout5;

      return _home_troias_strapiecom_robWebSite_my_project_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //  console.log("lostPassord", email);
              setError("");
              _context3.prev = 1;
              setLoading(true);
              _context3.next = 5;
              return fetch("".concat("https://robsitebackend.herokuapp.com", "/api/auth/forgot-password"), {
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
                _context3.next = 13;
                break;
              }

              setError(data.error.message);
              _timeout4 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout4);
              }, 1500); // console.log("lostPasswordInnerDataError", data.error);

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
              _context3.t0 = _context3["catch"](1);
              // console.log("error", error);
              _timeout5 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout5);
              }, 1500);
              setError("something went wrong" + _context3.t0); // console.log("lostPassData", error);

              return _context3.abrupt("return", _context3.t0);

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 20]]);
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
    lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJtZXNzYWdlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0s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O0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLFVBQUksRUFBSkEsSUFESztBQUVMQyxhQUFPLEVBQVBBLE9BRks7QUFHTEksY0FBUSxFQUFSQSxRQUhLO0FBSUxILGFBQU8sRUFBUEEsT0FKSztBQUtMRSxXQUFLLEVBQUxBLEtBTEs7QUFNTHlDLGVBQVMsRUFBVEEsU0FOSztBQU9MekIsZ0JBQVUsRUFBVkEsVUFQSztBQVFMNEIscUJBQWUsRUFBZkEsZUFSSztBQVNMeEIsa0JBQVksRUFBWkEsWUFUSztBQVVMYixrQkFBWSxFQUFaQSxZQVZLO0FBV0xILGVBQVMsRUFBVEEsU0FYSztBQVlMRSxlQUFTLEVBQVRBLFNBWks7QUFhTEksaUJBQVcsRUFBWEEsV0FiSztBQWNMQyxvQkFBYyxFQUFkQSxjQWRLO0FBZUxHLG9CQUFjLEVBQWRBLGNBZks7QUFnQkxELHVCQUFpQixFQUFqQkEsaUJBaEJLO0FBaUJMRCxvQkFBYyxFQUFkQSxjQWpCSztBQWtCTCtCLGtCQUFZLEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR25ELEtBQUssQ0FBQ3FEO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXBTTTs7R0FBTXRELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBc1NiLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYThhODU2MzYzODlmMGM1ZDY0ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2dpbmdJbiwgc2V0TG9nZ2luZ0luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlZ2lzdGVyaW5nLCBzZXRSZWdpc3RlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvc3RQYXNzd29yZCwgc2V0SXNMb3N0UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlckxvZ2luXCIsIHVzZXIpXG5cbiAgY29uc3QgdG9nZ2xlUmVnaXN0ZXIgPSAoZSkgPT4ge1xuICAgICAgXG4gICAgc2V0UmVnaXN0ZXJpbmcoIXJlZ2lzdGVyaW5nKTtcbiAgICBzZXRMb2dnaW5nSW4oZmFsc2UpO1xuICAgIGlzTG9zdFBhc3N3b3JkICYmIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKTtcbn07XG5cblxuXG5cbiAgY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcbiAgICBzZXRFcnJvcihcIlwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgfTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICBcblxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgIFxuICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJFcnJvclwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihcImVycm9yXCIgKyBlcnJvcilcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICAgXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgLy8gY29uc29sZS5sb2coXCJsb2dpbmRhdGFjaGVja1wiLCBpZGVudGlmaWVyLCBwYXNzd29yZCk7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkxvZ2luZGF0YVwiLCBkYXRhKVxuXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgIFxuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICBcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgXG4gICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAxNTAwKTtcblxuICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmVkXCIsIGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH0sIDE1MDApO1xuXG4gICAgIFxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9zdFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwibG9zdFBhc3NvcmRcIiwgZW1haWwpO1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgXG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAxNTAwKTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3N3b3JkSW5uZXJEYXRhRXJyb3JcIiwgZGF0YS5lcnJvcik7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuXG4gICAgICBcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgXG5cbiAgICAgIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKVxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGRhdGEpO1xuXG4gICAgICByZXR1cm4gZGF0YTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9LCAxNTAwKTtcblxuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc0RhdGFcIiwgZXJyb3IpO1xuXG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG4gIFxuICB9O1xuXG5cbiAgY29uc3QgY2hlY2tJc0xvZ2dlZEluID0gKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgIGxvZ091dFVzZXIsXG4gICAgICAgIGNoZWNrSXNMb2dnZWRJbixcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICBzZXRNb2RhbE9wZW4sXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbW9kYWxPcGVuLFxuICAgICAgICByZWdpc3RlcmluZyxcbiAgICAgICAgc2V0UmVnaXN0ZXJpbmcsXG4gICAgICAgIHRvZ2dsZVJlZ2lzdGVyLCBcbiAgICAgICAgc2V0SXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGlzTG9zdFBhc3N3b3JkLFxuICAgICAgICBsb3N0UGFzc3dvcmRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=