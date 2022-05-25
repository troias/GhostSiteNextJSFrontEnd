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
                _context.next = 21;
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
                _context2.next = 19;
                break;
              }

              timeout = setTimeout(function () {
                setLoading(false);
                setError(data.error.message);
                setSuccess(false);
                clearTimeout(timeout);
              }, 3000); // console.log("returned", data.error.message);

              return _context2.abrupt("return", data.error);

            case 19:
              // console.log("login", data)
              setLoading(false);
              _context2.next = 27;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](0);
              // console.log("error", error);
              setError("something went wrong" + _context2.t0);
              _timeout2 = setTimeout(function () {
                setLoading(false);
                clearTimeout(_timeout2);
              }, 3000);
              return _context2.abrupt("return", _context2.t0);

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 22]]);
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
    lineNumber: 268,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJtZXNzYWdlIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwibG9zdFBhc3N3b3JkIiwiY2hlY2tJc0xvZ2dlZEluIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRnFDLGtCQUliQywrQ0FBUSxFQUpLO0FBQUEsTUFJOUJDLElBSjhCO0FBQUEsTUFJeEJDLE9BSndCOztBQUFBLG1CQUtQRiwrQ0FBUSxDQUFDLEtBQUQsQ0FMRDtBQUFBLE1BSzlCRyxPQUw4QjtBQUFBLE1BS3JCQyxVQUxxQjs7QUFBQSxtQkFNWEosK0NBQVEsQ0FBQyxFQUFELENBTkc7QUFBQSxNQU05QkssS0FOOEI7QUFBQSxNQU12QkMsUUFOdUI7O0FBQUEsbUJBT0hOLCtDQUFRLENBQUMsS0FBRCxDQVBMO0FBQUEsTUFPOUJPLFVBUDhCO0FBQUEsTUFPbEJDLFdBUGtCOztBQUFBLG1CQVFMUiwrQ0FBUSxDQUFDLEtBQUQsQ0FSSDtBQUFBLE1BUTlCUyxTQVI4QjtBQUFBLE1BUW5CQyxVQVJtQjs7QUFBQSxtQkFTSFYsK0NBQVEsQ0FBQyxLQUFELENBVEw7QUFBQSxNQVM5QlcsU0FUOEI7QUFBQSxNQVNuQkMsWUFUbUI7O0FBQUEsbUJBVUhaLCtDQUFRLENBQUMsS0FBRCxDQVZMO0FBQUEsTUFVOUJhLFNBVjhCO0FBQUEsTUFVbkJDLFlBVm1COztBQUFBLG1CQVdDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FYVDtBQUFBLE1BVzlCZSxXQVg4QjtBQUFBLE1BV2pCQyxjQVhpQjs7QUFBQSxtQkFZT2hCLCtDQUFRLENBQUMsS0FBRCxDQVpmO0FBQUEsTUFZOUJpQixjQVo4QjtBQUFBLE1BWWRDLGlCQVpjLGtCQWVyQzs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFFNUJKLGtCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0FELGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FHLGtCQUFjLElBQUlDLGlCQUFpQixDQUFDLEtBQUQsQ0FBbkM7QUFDSCxHQUxDOztBQVVBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFFdkJDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsTUFBeEI7QUFDQXJCLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQU0sZUFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBVixVQUFNLENBQUMwQixJQUFQLENBQVksR0FBWjtBQUVELEdBUEQ7O0FBU0EsTUFBTUMsWUFBWTtBQUFBLCtUQUFHLGlCQUFPQyxRQUFQLEVBQWlCQyxLQUFqQixFQUF3QkMsUUFBeEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2pCbEIsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFMaUI7QUFBQSxxQkFNTW1CLEtBQUssV0FBSUMsc0NBQUosK0JBQXNFO0FBQ2hHQyxzQkFBTSxFQUFFLE1BRHdGO0FBRWhHQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRnVGO0FBS2hHQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlQsMEJBQVEsRUFBUkEsUUFEbUI7QUFFbkJDLHVCQUFLLEVBQUxBLEtBRm1CO0FBR25CQywwQkFBUSxFQUFSQTtBQUhtQixpQkFBZjtBQUwwRixlQUF0RSxDQU5YOztBQUFBO0FBTVhRLHNCQU5XO0FBQUE7QUFBQSxxQkFrQkVBLFFBQVEsQ0FBQ0MsSUFBVCxFQWxCRjs7QUFBQTtBQWtCWEMsa0JBbEJXO0FBbUJoQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDRixJQUFoQzs7QUFuQmdCLG1CQXFCYkEsSUFBSSxDQUFDckMsSUFyQlE7QUFBQTtBQUFBO0FBQUE7O0FBc0JmcUIsMEJBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJQLElBQUksQ0FBQ0MsU0FBTCxDQUFlRyxJQUFmLENBQTdCO0FBRUFwQyxxQkFBTyxDQUFDb0MsSUFBRCxDQUFQO0FBQ0E5Qix5QkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRSx3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSwwQkFBWSxDQUFDLEtBQUQsQ0FBWixDQTNCZSxDQTZCZjs7QUE3QmUsK0NBOEJSMEIsSUE5QlE7O0FBQUE7QUFBQSxtQkFvQ2JBLElBQUksQ0FBQ2pDLEtBQUwsQ0FBV3FDLE9BcENFO0FBQUE7QUFBQTtBQUFBOztBQXFDZnBDLHNCQUFRLENBQUNnQyxJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQUFaLENBQVI7QUFFTUMscUJBdkNTLEdBdUNDQyxVQUFVLENBQUMsWUFBTTtBQUMvQnRDLHdCQUFRLENBQUNnQyxJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQUFaLENBQVI7QUFDQXRDLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FNLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FtQyw0QkFBWSxDQUFDRixPQUFELENBQVo7QUFDRCxlQUx5QixFQUt2QixJQUx1QixDQXZDWDtBQThDaEJKLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQUF4QztBQTlDZ0IsK0NBK0NSSixJQUFJLENBQUNqQyxLQS9DRzs7QUFBQTtBQWtEakJELHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBbERpQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXNEWHVDLHNCQXREVyxHQXNEREMsVUFBVSxDQUFDLFlBQU07QUFDL0JsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBTiwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUVBeUMsNEJBQVksQ0FBQ0YsUUFBRCxDQUFaO0FBQ0QsZUFMeUIsRUFLdkIsSUFMdUIsQ0F0RFQ7QUE2RGpCckMsc0JBQVEsQ0FBQyxxQkFBRCxDQUFSOztBQTdEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWm1CLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBa0VBLE1BQU1xQixTQUFTO0FBQUEsZ1VBQUcsa0JBQU9DLFVBQVAsRUFBbUJuQixRQUFuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJZGxCLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBSmM7QUFBQSxxQkFNU21CLEtBQUssV0FBSUMsc0NBQUosc0JBQTZEO0FBQ3ZGQyxzQkFBTSxFQUFFLE1BRCtFO0FBRXZGQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRjhFO0FBS3ZGQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlksNEJBQVUsRUFBVkEsVUFEbUI7QUFFbkJuQiwwQkFBUSxFQUFSQTtBQUZtQixpQkFBZjtBQUxpRixlQUE3RCxDQU5kOztBQUFBO0FBTVJRLHNCQU5RO0FBQUE7QUFBQSxxQkFpQktBLFFBQVEsQ0FBQ0MsSUFBVCxFQWpCTDs7QUFBQTtBQWlCUkMsa0JBakJROztBQUFBLG1CQXFCVkEsSUFBSSxDQUFDckMsSUFyQks7QUFBQTtBQUFBO0FBQUE7O0FBdUJacUIsMEJBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJQLElBQUksQ0FBQ0MsU0FBTCxDQUFlRyxJQUFmLENBQTdCO0FBQ0E1Qix3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBUixxQkFBTyxDQUFDb0MsSUFBRCxDQUFQO0FBQ0E5Qix5QkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBSix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBUSwwQkFBWSxDQUFDLEtBQUQsQ0FBWixDQTVCWSxDQThCWjs7QUE5QlksZ0RBK0JMMEIsSUEvQks7O0FBQUE7QUFBQSxtQkFxQ1ZBLElBQUksQ0FBQ2pDLEtBQUwsQ0FBV3FDLE9BckNEO0FBQUE7QUFBQTtBQUFBOztBQXlDTkMscUJBekNNLEdBeUNJQyxVQUFVLENBQUMsWUFBTTtBQUMvQmxDLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FKLHdCQUFRLENBQUNnQyxJQUFJLENBQUNqQyxLQUFMLENBQVdxQyxPQUFaLENBQVI7QUFDQXRDLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0F5Qyw0QkFBWSxDQUFDRixPQUFELENBQVo7QUFDRCxlQUx5QixFQUt2QixJQUx1QixDQXpDZCxFQWlEWjs7QUFqRFksZ0RBa0RMTCxJQUFJLENBQUNqQyxLQWxEQTs7QUFBQTtBQW9EZDtBQUVBSyx3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQXREYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTREZDtBQUNBSixzQkFBUSxDQUFDLHFDQUFELENBQVI7QUFDTXFDLHVCQTlEUSxHQThERUMsVUFBVSxDQUFDLFlBQU07QUFDL0JsQywwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUVBbUMsNEJBQVksQ0FBQ0YsU0FBRCxDQUFaO0FBQ0QsZUFKeUIsRUFJdkIsSUFKdUIsQ0E5RFo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBMEVBLE1BQU1FLFlBQVk7QUFBQSxnVUFBRyxrQkFBT3JCLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWpCakIsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFKaUI7QUFBQSxxQkFNTW1CLEtBQUssV0FBSUMsc0NBQUosZ0NBQXVFO0FBQ2pHQyxzQkFBTSxFQUFFLE1BRHlGO0FBRWpHQyx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRndGO0FBS2pHQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlIsdUJBQUssRUFBTEE7QUFEbUIsaUJBQWY7QUFMMkYsZUFBdkUsQ0FOWDs7QUFBQTtBQU1YUyxzQkFOVztBQUFBO0FBQUEscUJBa0JFQSxRQUFRLENBQUNDLElBQVQsRUFsQkY7O0FBQUE7QUFrQlhDLGtCQWxCVzs7QUFBQSxtQkFvQmJBLElBQUksQ0FBQ2pDLEtBcEJRO0FBQUE7QUFBQTtBQUFBOztBQXNCZkMsc0JBQVEsQ0FBQ2dDLElBQUksQ0FBQ2pDLEtBQUwsQ0FBV3FDLE9BQVosQ0FBUjtBQUNNQyx1QkF2QlMsR0F1QkNDLFVBQVUsQ0FBQyxZQUFNO0FBRWpDbEMsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQW1DLDRCQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNDLGVBSnlCLEVBSXZCLElBSnVCLENBdkJYLEVBNkJiOztBQTdCYSxnREE4QlJMLElBQUksQ0FBQ2pDLEtBOUJHOztBQUFBO0FBbUNqQjtBQUdBYSwrQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FkLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FRLDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBRU0rQixxQkExQ1csR0EwQ0RDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CbEMsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQW1DLDRCQUFZLENBQUNGLE9BQUQsQ0FBWjtBQUVELGVBSnlCLEVBSXZCLElBSnVCLENBMUNULEVBK0NqQjs7QUEvQ2lCLGdEQWlEVkwsSUFqRFU7O0FBQUE7QUFBQTtBQUFBO0FBcURqQjtBQUNNSyx1QkF0RFcsR0FzRERDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CbEMsMEJBQVUsQ0FBQyxLQUFELENBQVY7QUFDQW1DLDRCQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNELGVBSHlCLEVBR3ZCLElBSHVCLENBdERUO0FBMkRqQnJDLHNCQUFRLENBQUMscUNBQUQsQ0FBUixDQTNEaUIsQ0E0RGpCOztBQTVEaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWjBDLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBb0VBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJMUMsVUFBSixFQUFnQjtBQUNkLGFBQU8sSUFBUDtBQUNEOztBQUNELFFBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FQRCxDQXBQcUMsQ0E2UHJDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLFVBQUksRUFBSkEsSUFESztBQUVMQyxhQUFPLEVBQVBBLE9BRks7QUFHTEksY0FBUSxFQUFSQSxRQUhLO0FBSUxILGFBQU8sRUFBUEEsT0FKSztBQUtMRSxXQUFLLEVBQUxBLEtBTEs7QUFNTHlDLGVBQVMsRUFBVEEsU0FOSztBQU9MekIsZ0JBQVUsRUFBVkEsVUFQSztBQVFMNEIscUJBQWUsRUFBZkEsZUFSSztBQVNMeEIsa0JBQVksRUFBWkEsWUFUSztBQVVMYixrQkFBWSxFQUFaQSxZQVZLO0FBV0xILGVBQVMsRUFBVEEsU0FYSztBQVlMRSxlQUFTLEVBQVRBLFNBWks7QUFhTEksaUJBQVcsRUFBWEEsV0FiSztBQWNMQyxvQkFBYyxFQUFkQSxjQWRLO0FBZUxHLG9CQUFjLEVBQWRBLGNBZks7QUFnQkxELHVCQUFpQixFQUFqQkEsaUJBaEJLO0FBaUJMRCxvQkFBYyxFQUFkQSxjQWpCSztBQWtCTCtCLGtCQUFZLEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR25ELEtBQUssQ0FBQ3FEO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTlSTTs7R0FBTXRELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBZ1NiLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIzNjkyMDA2ZWNmOWJiMzQ1ZTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dnaW5nSW4sIHNldExvZ2dpbmdJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZWdpc3RlcmluZywgc2V0UmVnaXN0ZXJpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb3N0UGFzc3dvcmQsIHNldElzTG9zdFBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuICAvLyBjb25zb2xlLmxvZyhcInVzZXJMb2dpblwiLCB1c2VyKVxuXG4gIGNvbnN0IHRvZ2dsZVJlZ2lzdGVyID0gKGUpID0+IHtcbiAgICAgIFxuICAgIHNldFJlZ2lzdGVyaW5nKCFyZWdpc3RlcmluZyk7XG4gICAgc2V0TG9nZ2luZ0luKGZhbHNlKTtcbiAgICBpc0xvc3RQYXNzd29yZCAmJiBzZXRJc0xvc3RQYXNzd29yZChmYWxzZSk7XG59O1xuXG5cblxuXG4gIGNvbnN0IGxvZ091dFVzZXIgPSAoKSA9PiB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgfTtcblxuICBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIGRhdGEpO1xuICAgICAgXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcblxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgIFxuICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJFcnJvclwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cblxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIHNldEVycm9yKFwiZXJyb3JcIiArIGVycm9yKVxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChpZGVudGlmaWVyLCBwYXNzd29yZCkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJsb2dpbmRhdGFjaGVja1wiLCBpZGVudGlmaWVyLCBwYXNzd29yZCk7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2xvY2FsYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkxvZ2luZGF0YVwiLCBkYXRhKVxuXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVzZXIoZGF0YSk7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJldHVybmVkXCIsIGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBkYXRhLmVycm9yO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJsb2dpblwiLCBkYXRhKVxuXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKFwic29tZXRoaW5nIHdlbnQgd3JvbmdcIiArIGVycm9yKTtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH0sIDMwMDApO1xuXG4gICAgIFxuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3QgbG9zdFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgLy8gIGNvbnNvbGUubG9nKFwibG9zdFBhc3NvcmRcIiwgZW1haWwpO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkx9L2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICBcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH0sIDE1MDApO1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc3dvcmRJbm5lckRhdGFFcnJvclwiLCBkYXRhLmVycm9yKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICBcblxuICAgICAgc2V0SXNMb3N0UGFzc3dvcmQoZmFsc2UpXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgIFxuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICBcbiAgICAgIH0sIDE1MDApO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc0RhdGFcIiwgZGF0YSk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH0sIDE1MDApO1xuXG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImxvc3RQYXNzRGF0YVwiLCBlcnJvcik7XG5cbiAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbiAgXG4gIH07XG5cblxuICBjb25zdCBjaGVja0lzTG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjaGVja0lzTG9nZ2VkSW4oKVxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgfVxuXG4gIC8vIH0sIFt1c2VyXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgIGxvZ091dFVzZXIsXG4gICAgICAgIGNoZWNrSXNMb2dnZWRJbixcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICBzZXRNb2RhbE9wZW4sXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbW9kYWxPcGVuLFxuICAgICAgICByZWdpc3RlcmluZyxcbiAgICAgICAgc2V0UmVnaXN0ZXJpbmcsXG4gICAgICAgIHRvZ2dsZVJlZ2lzdGVyLCBcbiAgICAgICAgc2V0SXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGlzTG9zdFBhc3N3b3JkLFxuICAgICAgICBsb3N0UGFzc3dvcmRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=