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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hdXRoQ29udGV4dC5qcyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibG9nZ2luZ0luIiwic2V0TG9nZ2luZ0luIiwicmVnaXN0ZXJpbmciLCJzZXRSZWdpc3RlcmluZyIsImlzTG9zdFBhc3N3b3JkIiwic2V0SXNMb3N0UGFzc3dvcmQiLCJ0b2dnbGVSZWdpc3RlciIsImUiLCJsb2dPdXRVc2VyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0SXRlbSIsIm1lc3NhZ2UiLCJsb2dpblVzZXIiLCJpZGVudGlmaWVyIiwiY29uc29sZSIsImxvZyIsImxvc3RQYXNzd29yZCIsImNoZWNrSXNMb2dnZWRJbiIsInVzZUVmZmVjdCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUVyQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUZxQyxr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LEVBQWRBLGNBZks7QUFnQkxELHVCQUFpQixFQUFqQkEsaUJBaEJLO0FBaUJMRCxvQkFBYyxFQUFkQSxjQWpCSztBQWtCTDRCLGtCQUFZLEVBQVpBO0FBbEJLLEtBRFQ7QUFBQSxjQXNCR2hELEtBQUssQ0FBQ21EO0FBdEJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXBOTTs7R0FBTXBELFk7VUFFSUcsa0Q7OztLQUZKSCxZO0FBc05iLCtEQUFlRixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzhiN2I1MWMzMzQ3Y2I4ZTIyOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2dpbmdJbiwgc2V0TG9nZ2luZ0luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlZ2lzdGVyaW5nLCBzZXRSZWdpc3RlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvc3RQYXNzd29yZCwgc2V0SXNMb3N0UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuIFxuXG4gIC8vIGNvbnNvbGUubG9nKFwidXNlckxvZ2luXCIsIHVzZXIpXG5cbiAgY29uc3QgdG9nZ2xlUmVnaXN0ZXIgPSAoZSkgPT4ge1xuICAgICAgXG4gICAgc2V0UmVnaXN0ZXJpbmcoIXJlZ2lzdGVyaW5nKTtcbiAgICBzZXRMb2dnaW5nSW4oZmFsc2UpO1xuICAgIGlzTG9zdFBhc3N3b3JkICYmIHNldElzTG9zdFBhc3N3b3JkKGZhbHNlKTtcbn07XG5cblxuXG5cbiAgY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIHNldExvZ2dlZEluKGZhbHNlKVxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcblxuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vYXBpL2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclVzZXJEYXRhXCIsIGRhdGEpO1xuICAgICAgXG4gICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luXCIsIGRhdGEpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAoZGF0YS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmV0dXJuZWRcIiwgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZXJyb3I7XG4gICAgICB9XG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihcImVycm9yXCIgKyBlcnJvcilcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoaWRlbnRpZmllciwgcGFzc3dvcmQpID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5kYXRhY2hlY2tcIiwgaWRlbnRpZmllciwgcGFzc3dvcmQpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJMb2dpbmRhdGFcIiwgZGF0YSlcblxuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VXNlcihkYXRhKTtcbiAgICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cblxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICBzZXRFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyBlcnJvcik7XG4gICAgICByZXR1cm4gZXJyb3JcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdCBsb3N0UGFzc3dvcmQgPSBhc3luYyAoZW1haWwpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMfS9hcGkvYXV0aC9sb2NhbC9mb3Jnb3QtcGFzc3dvcmRgLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICB9LFxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJsb3N0UGFzc3dvcmRcIiwgZGF0YSlcbiAgICAgIGlmIChkYXRhLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZFwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9naW5cIiwgZGF0YSlcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGNvbnNvbGUubG9nKFwibG9zdFBhc3NEYXRhXCIsIGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgZXJyb3IpO1xuICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gIH07XG5cblxuICBjb25zdCBjaGVja0lzTG9nZ2VkSW4gPSAoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lzTG9nZ2VkSW4oKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfVxuXG4gIH0sIFt1c2VyXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgc2V0RXJyb3IsXG4gICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpblVzZXIsXG4gICAgICAgIGxvZ091dFVzZXIsXG4gICAgICAgIGNoZWNrSXNMb2dnZWRJbixcbiAgICAgICAgcmVnaXN0ZXJVc2VyLFxuICAgICAgICBzZXRNb2RhbE9wZW4sXG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgbW9kYWxPcGVuLFxuICAgICAgICByZWdpc3RlcmluZyxcbiAgICAgICAgc2V0UmVnaXN0ZXJpbmcsXG4gICAgICAgIHRvZ2dsZVJlZ2lzdGVyLCBcbiAgICAgICAgc2V0SXNMb3N0UGFzc3dvcmQsXG4gICAgICAgIGlzTG9zdFBhc3N3b3JkLFxuICAgICAgICBsb3N0UGFzc3dvcmRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=