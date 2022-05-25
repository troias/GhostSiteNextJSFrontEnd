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

              if (!data.user) {
                _context.next = 16;
                break;
              }

              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              setLoggedIn(true);
              setLoading(false);
              setModalOpen(false);
              setSuccess(true); // console.log("login", data)

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
              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              _timeout = setTimeout(function () {
                setLoading(false);
                setSuccess(false);
                clearTimeout(_timeout);
              }, 3000);
              setError("error" + _context.t0);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
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
    lineNumber: 264,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsIm1lc3NhZ2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0s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YUxJLGlCQUFXLEVBQVhBLFdBYks7QUFjTEMsb0JBQWMsRUFBZEEsY0FkSztBQWVMRyxvQkFBYyxFQUFkQSxjQWZLO0FBZ0JMRCx1QkFBaUIsRUFBakJBLGlCQWhCSztBQWlCTEQsb0JBQWMsRUFBZEEsY0FqQks7QUFrQkwrQixrQkFBWSxFQUFaQTtBQWxCSyxLQURUO0FBQUEsY0FzQkduRCxLQUFLLENBQUNxRDtBQXRCVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0ExUk07O0dBQU10RCxZO1VBRUlHLGtEOzs7S0FGSkgsWTtBQTRSYiwrREFBZUYsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhiNjdiM2NjYzAwNGEzYjZmN2M0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dnaW5nSW4sIHNldExvZ2dpbmdJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWdpc3RlcmluZywgc2V0UmVnaXN0ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb3N0UGFzc3dvcmQsIHNldElzTG9zdFBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJMb2dpblwiLCB1c2VyKVxuXG4gIGNvbnN0IHRvZ2dsZVJlZ2lzdGVyID0gKGUpID0+IHtcbiAgICAgIFxuICAgIHNldFJlZ2lzdGVyaW5nKCFyZWdpc3RlcmluZyk7XG4gICAgc2V0TG9nZ2luZ0luKGZhbHNlKTtcbiAgICBpc0xvc3RQYXNzd29yZCAmJiBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSk7XG59O1xuXG5cblxuXG4gIGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgfTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyVXNlckRhdGFcIiwgZGF0YSk7XG4gICAgICBcbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICBzZXRVc2VyKGRhdGEpO1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcblxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICBcbiAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyRXJyb3JcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgICBzZXRFcnJvcihcImVycm9yXCIgKyBlcnJvcilcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5kYXRhY2hlY2tcIiwgaWRlbnRpZmllciwgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbmRhdGFcIiwgZGF0YSlcblxuICAgICAgaWYgKGRhdGEudXNlcikge1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyKGRhdGEpO1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG5cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgXG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb3N0UGFzc3dvcmQgPSBhc3luYyAoZW1haWwpID0+IHtcbiAgICAvLyAgY29uc29sZS5sb2coXCJsb3N0UGFzc29yZFwiLCBlbWFpbCk7XG4gICBcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgIFxuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvc3RQYXNzd29yZElubmVyRGF0YUVycm9yXCIsIGRhdGEuZXJyb3IpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgIFxuXG4gICAgICBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSlcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIFxuICAgICAgfSwgMTUwMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfSwgMTUwMCk7XG5cbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGVycm9yKTtcblxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuICBcbiAgfTtcblxuXG4gIGNvbnN0IGNoZWNrSXNMb2dnZWRJbiA9ICgpID0+IHtcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghaXNMb2dnZWRJbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNoZWNrSXNMb2dnZWRJbigpXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICB9XG5cbiAgLy8gfSwgW3VzZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB1c2VyLFxuICAgICAgICBzZXRVc2VyLFxuICAgICAgICBzZXRFcnJvcixcbiAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZ2luVXNlcixcbiAgICAgICAgbG9nT3V0VXNlcixcbiAgICAgICAgY2hlY2tJc0xvZ2dlZEluLFxuICAgICAgICByZWdpc3RlclVzZXIsXG4gICAgICAgIHNldE1vZGFsT3BlbixcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBtb2RhbE9wZW4sXG4gICAgICAgIHJlZ2lzdGVyaW5nLFxuICAgICAgICBzZXRSZWdpc3RlcmluZyxcbiAgICAgICAgdG9nZ2xlUmVnaXN0ZXIsIFxuICAgICAgICBzZXRJc0xvc3RQYXNzd29yZCxcbiAgICAgICAgaXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGxvc3RQYXNzd29yZFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==