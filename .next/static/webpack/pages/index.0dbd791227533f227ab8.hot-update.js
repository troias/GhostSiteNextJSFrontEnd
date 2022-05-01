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
    setIsLostPassword(false);
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
              setLoading(false); // console.log("login", data)

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
    lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwiY29uc29sZSIsImxvZyIsImxvc3RQYXNzd29yZCIsImNoZWNrSXNMb2dnZWRJbiIsInVzZUVmZmVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUZxQyxr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QUFnQkxELHVCQUFpQixFQUFqQkEsaUJBaEJLO0FBaUJMRCxvQkFBYyxFQUFkQSxjQWpCSztBQWtCTDRCLGtCQUFZLEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR2hELEtBQUssQ0FBQ21EO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXBOTTs7R0FBTXBELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBc05iLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkYmQ3OTEyMjc1MzNmMjI3YWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dnaW5nSW4sIHNldExvZ2dpbmdJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWdpc3RlcmluZywgc2V0UmVnaXN0ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb3N0UGFzc3dvcmQsIHNldElzTG9zdFBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJMb2dpblwiLCB1c2VyKVxuXG4gIGNvbnN0IHRvZ2dsZVJlZ2lzdGVyID0gKGUpID0+IHtcbiAgICAgIFxuICAgIHNldFJlZ2lzdGVyaW5nKCFyZWdpc3RlcmluZyk7XG4gICAgc2V0TG9nZ2luZ0luKGZhbHNlKTtcbiAgICBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSk7XG59O1xuXG5cblxuXG4gIGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgfTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmVkXCIsIGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoXCJlcnJvclwiICsgZXJyb3IpXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luZGF0YWNoZWNrXCIsIGlkZW50aWZpZXIsIHBhc3N3b3JkKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWxgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTG9naW5kYXRhXCIsIGRhdGEpXG5cbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuXG5cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9zdFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWwvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3N3b3JkXCIsIGRhdGEpXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICB9O1xuXG5cbiAgY29uc3QgY2hlY2tJc0xvZ2dlZEluID0gKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tJc0xvZ2dlZEluKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgIH1cblxuICB9LCBbdXNlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHNldEVycm9yLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICBsb2dPdXRVc2VyLFxuICAgICAgICBjaGVja0lzTG9nZ2VkSW4sXG4gICAgICAgIHJlZ2lzdGVyVXNlcixcbiAgICAgICAgc2V0TW9kYWxPcGVuLFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIG1vZGFsT3BlbixcbiAgICAgICAgcmVnaXN0ZXJpbmcsXG4gICAgICAgIHNldFJlZ2lzdGVyaW5nLFxuICAgICAgICB0b2dnbGVSZWdpc3RlciwgXG4gICAgICAgIHNldElzTG9zdFBhc3N3b3JkLFxuICAgICAgICBpc0xvc3RQYXNzd29yZCxcbiAgICAgICAgbG9zdFBhc3N3b3JkXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9