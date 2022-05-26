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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJtZXNzYWdlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRnFDLGtCQUliQywrQ0FBUSxFQUpLO0FBQUEsTUFJOUJDLElBSjhCO0FBQUEsTUFJeEJDLE9BSndCOztBQUFBLG1CQUtQRiwrQ0FBUSxDQUFDLEtBQUQsQ0FMRDtBQUFBLE1BSzlCRyxPQUw4QjtBQUFBLE1BS3JCQyxVQUxxQjs7QUFBQSxtQkFNWEosK0NBQVEsQ0FBQyxFQUFELENBTkc7QUFBQSxNQU05QkssS0FOOEI7QUFBQSxNQU12QkMsUUFOdUI7O0FBQUEsbUJBT0hOLCtDQUFRLENBQUMsS0FBRCxDQVBMO0FBQUEsTUFPOUJPLFVBUDhCO0FBQUEsTUFPbEJDLFdBUGtCOztBQUFBLG1CQVFMUiwrQ0FBUSxDQUFDLEtBQUQsQ0FSSDtBQUFBLE1BUTlCUyxTQVI4QjtBQUFBLE1BUW5CQyxVQVJtQjs7QUFBQSxtQkFTSFYsK0NBQVEsQ0FBQyxLQUFELENBVEw7QUFBQSxNQVM5QlcsU0FUOEI7QUFBQSxNQVNuQkMsWUFUbUI7O0FBQUEsbUJBVUhaLCtDQUFRLENBQUMsS0FBRCxDQVZMO0FBQUEsTUFVOUJhLFNBVjhCO0FBQUEsTUFVbkJDLFlBVm1COztBQUFBLG1CQVdDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FYVDtBQUFBLE1BVzlCZSxXQVg4QjtBQUFBLE1BV2pCQyxjQVhpQjs7QUFBQSxtQkFZT2hCLCtDQUFRLENBQUMsS0FBRCxDQVpmO0FBQUEsTUFZOUJpQixjQVo4QjtBQUFBLE1BWWRDLGlCQVpjLGtCQWVyQzs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFFNUJKLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0FELGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FHLGtCQUFjLElBQUlDLGlCQUFpQixDQUFDLEtBQUQsQ0FBbkM7QUFDSCxHQUxDOztBQVVBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJmLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQWdCLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsTUFBeEI7QUFDQXJCLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU0sZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBVixVQUFNLENBQUMwQixJQUFQLENBQVksR0FBWjtBQUVELEdBUEQ7O0FBU0EsTUFBTUMsWUFBWTtBQUFBLCtUQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxLQUFqQixFQUF3QkMsUUFBeEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVuQjtBQUNBdEIsc0JBQVEsQ0FBQyxFQUFELENBQVI7QUFIbUI7QUFLakJJLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBTGlCO0FBQUEscUJBTU1tQixLQUFLLFdBQUlDLHNDQUFKLCtCQUFzRTtBQUNoR0Msc0JBQU0sRUFBRSxNQUR3RjtBQUVoR0MsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZ1RjtBQUtoR0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJULDBCQUFRLEVBQVJBLFFBRG1CO0FBRW5CQyx1QkFBSyxFQUFMQSxLQUZtQjtBQUduQkMsMEJBQVEsRUFBUkE7QUFIbUIsaUJBQWY7QUFMMEYsZUFBdEUsQ0FOWDs7QUFBQTtBQU1YUSxzQkFOVztBQUFBO0FBQUEscUJBa0JFQSxRQUFRLENBQUNDLElBQVQsRUFsQkY7O0FBQUE7QUFrQlhDLGtCQWxCVztBQW1CaEJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0YsSUFBaEM7O0FBbkJnQixtQkFxQmJBLElBQUksQ0FBQ3JDLElBckJRO0FBQUE7QUFBQTtBQUFBOztBQXNCZnFCLDBCQUFZLENBQUNtQixPQUFiLENBQXFCLE1BQXJCLEVBQTZCUCxJQUFJLENBQUNDLFNBQUwsQ0FBZUcsSUFBZixDQUE3QjtBQUVBcEMscUJBQU8sQ0FBQ29DLElBQUQsQ0FBUDtBQUNBOUIseUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQU4sd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVEsMEJBQVksQ0FBQyxLQUFELENBQVosQ0E1QmUsQ0E4QmY7O0FBOUJlLCtDQStCUjBCLElBL0JROztBQUFBO0FBQUEsbUJBcUNiQSxJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQXJDRTtBQUFBO0FBQUE7QUFBQTs7QUFzQ2ZwQyxzQkFBUSxDQUFDZ0MsSUFBSSxDQUFDakMsS0FBTCxDQUFXcUMsT0FBWixDQUFSO0FBR01DLHFCQXpDUyxHQXlDQ0MsVUFBVSxDQUFDLFlBQU07QUFDL0J0Qyx3QkFBUSxDQUFDZ0MsSUFBSSxDQUFDakMsS0FBTCxDQUFXcUMsT0FBWixDQUFSO0FBQ0F0QywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBTSwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUVBbUMsNEJBQVksQ0FBQ0YsT0FBRCxDQUFaO0FBQ0QsZUFOeUIsRUFNdkIsSUFOdUIsQ0F6Q1g7QUFpRGhCSixxQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkYsSUFBSSxDQUFDakMsS0FBTCxDQUFXcUMsT0FBeEM7QUFqRGdCLCtDQWtEUkosSUFBSSxDQUFDakMsS0FsREc7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlEakJDLHNCQUFRLENBQUMscUJBQUQsQ0FBUjtBQUNNcUMsc0JBMURXLEdBMEREQyxVQUFVLENBQUMsWUFBTTtBQUMvQmxDLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FOLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBRUF5Qyw0QkFBWSxDQUFDRixRQUFELENBQVo7QUFDRCxlQUx5QixFQUt2QixJQUx1QixDQTFEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFabEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFzRUEsTUFBTXFCLFNBQVM7QUFBQSxnVUFBRyxrQkFBT0MsVUFBUCxFQUFtQm5CLFFBQW5CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJ0QixzQkFBUSxDQUFDLEVBQUQsQ0FBUixDQURnQixDQUVoQjs7QUFGZ0I7QUFJZEksd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFKYztBQUFBLHFCQU1TbUIsS0FBSyxXQUFJQyxzQ0FBSixzQkFBNkQ7QUFDdkZDLHNCQUFNLEVBQUUsTUFEK0U7QUFFdkZDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGOEU7QUFLdkZDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CWSw0QkFBVSxFQUFWQSxVQURtQjtBQUVuQm5CLDBCQUFRLEVBQVJBO0FBRm1CLGlCQUFmO0FBTGlGLGVBQTdELENBTmQ7O0FBQUE7QUFNUlEsc0JBTlE7QUFBQTtBQUFBLHFCQWlCS0EsUUFBUSxDQUFDQyxJQUFULEVBakJMOztBQUFBO0FBaUJSQyxrQkFqQlE7O0FBQUEsbUJBcUJWQSxJQUFJLENBQUNyQyxJQXJCSztBQUFBO0FBQUE7QUFBQTs7QUF1QlpxQiwwQkFBWSxDQUFDbUIsT0FBYixDQUFxQixNQUFyQixFQUE2QlAsSUFBSSxDQUFDQyxTQUFMLENBQWVHLElBQWYsQ0FBN0I7QUFFQWxDLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ011QyxxQkExQk0sR0EwQklDLFVBQVUsQ0FBQyxZQUFNO0FBRWpDbEMsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQVIsdUJBQU8sQ0FBQ29DLElBQUQsQ0FBUDtBQUNBOUIsMkJBQVcsQ0FBQyxJQUFELENBQVg7QUFFQUksNEJBQVksQ0FBQyxLQUFELENBQVo7QUFFQWlDLDRCQUFZLENBQUNGLE9BQUQsQ0FBWjtBQUNDLGVBVHlCLEVBU3ZCLElBVHVCLENBMUJkLEVBcUNaOztBQXJDWSxnREFzQ0xMLElBdENLOztBQUFBO0FBQUEsbUJBNENWQSxJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQTVDRDtBQUFBO0FBQUE7QUFBQTs7QUE4Q1pwQyxzQkFBUSxDQUFDZ0MsSUFBSSxDQUFDakMsS0FBTCxDQUFXcUMsT0FBWixDQUFSO0FBRU1DLHVCQWhETSxHQWdESUMsVUFBVSxDQUFDLFlBQU07QUFDL0JsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUVBTiwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBeUMsNEJBQVksQ0FBQ0YsU0FBRCxDQUFaO0FBQ0QsZUFMeUIsRUFLdkIsSUFMdUIsQ0FoRGQsRUF3RFo7O0FBeERZLGdEQXlETEwsSUFBSSxDQUFDakMsS0F6REE7O0FBQUE7QUEyRGQ7QUFFQUssd0JBQVUsQ0FBQyxLQUFELENBQVY7QUE3RGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtRWQ7QUFDQUosc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSO0FBQ01xQyx1QkFyRVEsR0FxRUVDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CbEMsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFFQW1DLDRCQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNELGVBSnlCLEVBSXZCLElBSnVCLENBckVaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQWlGQSxNQUFNRSxZQUFZO0FBQUEsZ1VBQUcsa0JBQU9yQixLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQXJCLHNCQUFRLENBQUMsRUFBRCxDQUFSO0FBRm1CO0FBSWpCSSx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUppQjtBQUFBLHFCQU1NbUIsS0FBSyxXQUFJQyxzQ0FBSixnQ0FBdUU7QUFDakdDLHNCQUFNLEVBQUUsTUFEeUY7QUFFakdDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGd0Y7QUFLakdDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CUix1QkFBSyxFQUFMQTtBQURtQixpQkFBZjtBQUwyRixlQUF2RSxDQU5YOztBQUFBO0FBTVhTLHNCQU5XO0FBQUE7QUFBQSxxQkFrQkVBLFFBQVEsQ0FBQ0MsSUFBVCxFQWxCRjs7QUFBQTtBQWtCWEMsa0JBbEJXOztBQUFBLG1CQW9CYkEsSUFBSSxDQUFDakMsS0FwQlE7QUFBQTtBQUFBO0FBQUE7O0FBc0JmQyxzQkFBUSxDQUFDZ0MsSUFBSSxDQUFDakMsS0FBTCxDQUFXcUMsT0FBWixDQUFSO0FBQ01DLHVCQXZCUyxHQXVCQ0MsVUFBVSxDQUFDLFlBQU07QUFFakNsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBbUMsNEJBQVksQ0FBQ0YsU0FBRCxDQUFaO0FBQ0MsZUFKeUIsRUFJdkIsSUFKdUIsQ0F2QlgsRUE2QmI7O0FBN0JhLGdEQThCUkwsSUFBSSxDQUFDakMsS0E5Qkc7O0FBQUE7QUFtQ2pCO0FBR0FhLCtCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQWQsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVEsMEJBQVksQ0FBQyxLQUFELENBQVo7QUFFTStCLHFCQTFDVyxHQTBDREMsVUFBVSxDQUFDLFlBQU07QUFDL0JsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBbUMsNEJBQVksQ0FBQ0YsT0FBRCxDQUFaO0FBRUQsZUFKeUIsRUFJdkIsSUFKdUIsQ0ExQ1QsRUErQ2pCOztBQS9DaUIsZ0RBaURWTCxJQWpEVTs7QUFBQTtBQUFBO0FBQUE7QUFxRGpCO0FBQ01LLHVCQXREVyxHQXNEREMsVUFBVSxDQUFDLFlBQU07QUFDL0JsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBbUMsNEJBQVksQ0FBQ0YsU0FBRCxDQUFaO0FBQ0QsZUFIeUIsRUFHdkIsSUFIdUIsQ0F0RFQ7QUEyRGpCckMsc0JBQVEsQ0FBQyxxQ0FBRCxDQUFSLENBM0RpQixDQTREakI7O0FBNURpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaMEMsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFvRUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUkxQyxVQUFKLEVBQWdCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2YsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVdBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLFVBQUksRUFBSkEsSUFESztBQUVMQyxhQUFPLEVBQVBBLE9BRks7QUFHTEksY0FBUSxFQUFSQSxRQUhLO0FBSUxILGFBQU8sRUFBUEEsT0FKSztBQUtMRSxXQUFLLEVBQUxBLEtBTEs7QUFNTHlDLGVBQVMsRUFBVEEsU0FOSztBQU9MekIsZ0JBQVUsRUFBVkEsVUFQSztBQVFMNEIscUJBQWUsRUFBZkEsZUFSSztBQVNMeEIsa0JBQVksRUFBWkEsWUFUSztBQVVMYixrQkFBWSxFQUFaQSxZQVZLO0FBV0xILGVBQVMsRUFBVEEsU0FYSztBQVlMRSxlQUFTLEVBQVRBLFNBWks7QUFhTEksaUJBQVcsRUFBWEEsV0FiSztBQWNMQyxvQkFBYyxFQUFkQSxjQWRLO0FBZUxHLG9CQUFjLEVBQWRBLGNBZks7QUFnQkxELHVCQUFpQixFQUFqQkEsaUJBaEJLO0FBaUJMRCxvQkFBYyxFQUFkQSxjQWpCSztBQWtCTCtCLGtCQUFZLEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR25ELEtBQUssQ0FBQ3FEO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXBTTTs7R0FBTXRELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBc1NiLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4YTg1NjM2Mzg5ZjBjNWQ2NGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dnaW5nSW4sIHNldExvZ2dpbmdJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWdpc3RlcmluZywgc2V0UmVnaXN0ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb3N0UGFzc3dvcmQsIHNldElzTG9zdFBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJMb2dpblwiLCB1c2VyKVxuXG4gIGNvbnN0IHRvZ2dsZVJlZ2lzdGVyID0gKGUpID0+IHtcbiAgICAgIFxuICAgIHNldFJlZ2lzdGVyaW5nKCFyZWdpc3RlcmluZyk7XG4gICAgc2V0TG9nZ2luZ0luKGZhbHNlKTtcbiAgICBpc0xvc3RQYXNzd29yZCAmJiBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSk7XG59O1xuXG5cblxuXG4gIGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJVc2VyRGF0YVwiLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKTtcbiAgICBzZXRFcnJvcihcIlwiKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyVXNlckRhdGFcIiwgZGF0YSk7XG4gICAgICBcbiAgICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICBzZXRVc2VyKGRhdGEpO1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuXG5cblxuICAgICAgaWYgKGRhdGEuZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgXG5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICBcbiAgICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyRXJyb3JcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIFxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoXCJlcnJvclwiICsgZXJyb3IpXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIFxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5kYXRhY2hlY2tcIiwgaWRlbnRpZmllciwgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbmRhdGFcIiwgZGF0YSlcblxuICAgICAgaWYgKGRhdGEudXNlcikge1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVc2VyKGRhdGEpO1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgICBcbiAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDE1MDApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgXG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgIFxuICAgICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgIFxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB9LCAxNTAwKTtcblxuICAgICBcbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvc3RQYXNzd29yZCA9IGFzeW5jIChlbWFpbCkgPT4ge1xuICAgIC8vICBjb25zb2xlLmxvZyhcImxvc3RQYXNzb3JkXCIsIGVtYWlsKTtcbiAgICBzZXRFcnJvcihcIlwiKTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvZm9yZ290LXBhc3N3b3JkYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgIFxuICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvc3RQYXNzd29yZElubmVyRGF0YUVycm9yXCIsIGRhdGEuZXJyb3IpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgIFxuXG4gICAgICBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSlcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIFxuICAgICAgfSwgMTUwMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfSwgMTUwMCk7XG5cbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGVycm9yKTtcblxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuICBcbiAgfTtcblxuXG4gIGNvbnN0IGNoZWNrSXNMb2dnZWRJbiA9ICgpID0+IHtcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghaXNMb2dnZWRJbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIHNldEVycm9yLFxuICAgICAgICBzdWNjZXNzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9naW5Vc2VyLFxuICAgICAgICBsb2dPdXRVc2VyLFxuICAgICAgICBjaGVja0lzTG9nZ2VkSW4sXG4gICAgICAgIHJlZ2lzdGVyVXNlcixcbiAgICAgICAgc2V0TW9kYWxPcGVuLFxuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIG1vZGFsT3BlbixcbiAgICAgICAgcmVnaXN0ZXJpbmcsXG4gICAgICAgIHNldFJlZ2lzdGVyaW5nLFxuICAgICAgICB0b2dnbGVSZWdpc3RlciwgXG4gICAgICAgIHNldElzTG9zdFBhc3N3b3JkLFxuICAgICAgICBpc0xvc3RQYXNzd29yZCxcbiAgICAgICAgbG9zdFBhc3N3b3JkXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9