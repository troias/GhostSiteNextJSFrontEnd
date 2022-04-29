exports.id = 887;
exports.ids = [887];
exports.modules = {

/***/ 5030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1422);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);




const Image = ({
  image,
  style
}) => {
  const {
    url,
    alternativeText,
    width,
    height
  } = image.data.attributes;

  const loader = () => {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiMedia */ .$)(image);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
    loader: loader,
    layout: "responsive",
    width: width,
    height: height,
    objectFit: "contain",
    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiMedia */ .$)(image),
    alt: alternativeText || ""
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Image);

/***/ }),

/***/ 7915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./context/scrollContext.js
var scrollContext = __webpack_require__(1131);
// EXTERNAL MODULE: ./context/authContext.js
var authContext = __webpack_require__(6275);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./components/portal.js
var portal = __webpack_require__(7642);
// EXTERNAL MODULE: ./components/modal.js + 3 modules
var modal = __webpack_require__(7256);
;// CONCATENATED MODULE: ./components/nav.js











const Nav = ({
  categories,
  showModal
}) => {
  const ctx = (0,external_react_.useContext)(scrollContext/* ScrollContext */.$);
  const authCtx = (0,external_react_.useContext)(authContext/* AuthContext */.Vo);
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,external_react_.useState)(false);
  console.log("ctxUser", authCtx.user);
  (0,external_react_.useEffect)(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {// console.log("navAboutRef", ctx.aboutRef);
  }

  console.log("contactRef", ctx.contactRef);

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  const handleAboutClick = () => scrollToRef(ctx.aboutRef);

  const handleContactClick = () => scrollToRef(ctx.contactRef);

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "uk-navbar-container flex pl-10 pr-4",
        "data-uk-navbar": true,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-navbar-left",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "uk-navbar-nav ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "uk-nav uk-navbar-dropdown-nav"
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "m-0",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "TheNobodies"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-navbar-right  ",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "uk-navbar-nav hidden sm:flex",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "smoothscroll",
              onClick: handleAboutClick,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#About",
                children: "About"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "smoothscroll",
              onClick: handleContactClick,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#contact",
                children: "Contact"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "uk-navbar-nav",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: "Categories"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "uk-navbar-dropdown",
                children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                  className: "uk-nav uk-navbar-dropdown-nav",
                  children: categories.map(category => {
                    return /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "pl-2 pr-2",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: `/category/${category.attributes.slug}`,
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "uk-link-reset",
                          children: category.attributes.name
                        })
                      })
                    }, category.id);
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              className: "flex items-center",
              children: [!authCtx.user && /*#__PURE__*/jsx_runtime_.jsx("button", {
                class: "uk-button uk-button-default uk-margin-small-right",
                onClick: () => authCtx.setModalOpen(true),
                children: "Login"
              }), authCtx.user && /*#__PURE__*/jsx_runtime_.jsx("button", {
                class: "uk-button uk-button-default uk-margin-small-right",
                onClick: () => authCtx.logOutUser(),
                children: "Logout"
              })]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/ti/index.esm.js
var ti_index_esm = __webpack_require__(9327);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/footer.js









const Footer = () => {
  const router = (0,router_.useRouter)();
  const isHome = router.pathname === '/';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "uk-container border-t-2 ",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-text-center pb-8 pt-8 ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xl",
        children: "Follow us on social media"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-center mt-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.facebook/the_nobodies/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineFacebook */.Wjh, {
            className: "text-2xl mr-4"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://twitter.com/the_nobodies",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(ti_index_esm/* TiSocialTwitterCircular */.BRQ, {
            className: "text-2xl mr-4"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.youtube.com/channel/UC-lQlZJWLhj4_JYXw8Zjz1w",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineYoutube */.RLq, {
            className: "text-2xl mr-4"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.instagram.com/the_nobodies/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsInstagram */.Vs6, {
            className: "text-2xl mr-4"
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-text-center pb-4",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm",
        children: "\xA9 2022 TheNobodies. All rights reserved."
      })
    })]
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layout.js






const Layout = ({
  children,
  categories,
  seo,
  showModal
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(nav, {
    categories: categories,
    showModal: showModal
  }), children, /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
});

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 7256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: ./context/authContext.js
var authContext = __webpack_require__(6275);
;// CONCATENATED MODULE: ./components/loginForm.js







const LoginForm = () => {
  const ctx = (0,external_react_.useContext)(authContext/* default */.ZP); // console.log("isRegistering", ctx.registering)

  const formik = (0,external_formik_.useFormik)({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: external_yup_.object({
      username: external_yup_.string(),
      email: external_yup_.string().email('Invalid email address').required('Required'),
      password: external_yup_.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/(?=.*[0-9])/, 'Password must contain a number.')
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      // console.log("clicked")
      if (!ctx.registering) {
        console.log("logging in");
        ctx.loginUser(values.email, values.password);
      }

      if (ctx.registering) {
        ctx.registerUser(values.email, values.password);
      }
    }
  });

  const loginButton = /*#__PURE__*/jsx_runtime_.jsx("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Login to your account"
  });

  const registerButton = /*#__PURE__*/jsx_runtime_.jsx("button", {
    type: "submit",
    className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    children: "Register  to your account "
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: !ctx.registering ? "Login to our platform" : "Register to out platform"
    }), ctx.registering && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlfor: "username",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Username"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "username",
        name: "username",
        id: "username",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        placeholder: "troias007nz",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.username
      }), formik.touched.username && formik.errors.username ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: formik.errors.username
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "email",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your email"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "email",
        name: "email",
        id: "email",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        placeholder: "email@company.com",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.email
      }), formik.touched.email && formik.errors.email ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: formik.errors.email
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "password",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
        children: "Your password"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "password",
        name: "password",
        id: "password",
        placeholder: "current-password",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values.password
      }), formik.touched.password && formik.errors.password ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: formik.errors.password
      }) : null]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-between",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        children: "Lost Password?"
      })
    }), !ctx.registering && loginButton, ctx.registering && registerButton, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm font-medium text-gray-500 dark:text-gray-300",
      children: [!ctx.registering ? "Not registered" : "Already registered?", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "text-blue-700 hover:underline dark:text-blue-500",
        onClick: ctx.toggleRegister,
        children: !ctx.registering ? "Create account" : "Log in"
      })]
    })]
  });
};

/* harmony default export */ var loginForm = (LoginForm);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(3750);
;// CONCATENATED MODULE: ./components/authNotificationModal.js






const AuthNotificationModal = () => {
  const ctx = (0,external_react_.useContext)(authContext/* default */.ZP);
  const isLoading = ctx.isLoading;
  const error = ctx.error;
  const success = ctx.success; // console.log("success", success)

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: "px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-xl font-medium text-gray-900 dark:text-white",
      children: "Status"
    }), isLoading ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      role: "status",
      class: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      })]
    }) : success ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsCheckCircle */.nRB, {
        className: "text-green-500"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm text-gray-900 dark:text-gray-500",
        children: "Your account has been created successfully"
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsCheckCircle */.nRB, {
        className: "text-red-500"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-sm text-gray-900 dark:text-gray-500",
        children: error
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "link",
        className: "text-sm text-blue-700 hover:underline dark:text-blue-500",
        children: "Go back to site"
      })
    })]
  });
};

/* harmony default export */ var authNotificationModal = (AuthNotificationModal);
;// CONCATENATED MODULE: ./components/modalContent.js










const ModalContent = ({
  onClose
}) => {
  const ctx = (0,external_react_.useContext)(authContext/* default */.ZP); // console.log("ctx", ctx.loginUser);

  const handleCloseClick = e => {
    e.preventDefault();
    ctx.setModalOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "authentication-modal",
      "aria-hidden": "true",
      className: " flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-50 ",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex justify-end p-2",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
              "data-modal-toggle": "authentication-modal",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                className: "w-5 h-5",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                onClick: handleCloseClick,
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  "fill-rule": "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                })
              })
            })
          }), ctx.isLoading ? /*#__PURE__*/jsx_runtime_.jsx(authNotificationModal, {}) : /*#__PURE__*/jsx_runtime_.jsx(loginForm, {})]
        })
      })
    })
  });
};

/* harmony default export */ var components_modalContent = (ModalContent);
;// CONCATENATED MODULE: ./components/modal.js






const Modal = ({}) => {
  const ctx = (0,external_react_.useContext)(authContext/* default */.ZP);
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,external_react_.useState)(false); //  console.log("modalOpen", ctx.modalOpen)

  (0,external_react_.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  const modalContent = ctx.modalOpen ? /*#__PURE__*/jsx_runtime_.jsx(components_modalContent, {}) : null;

  if (isBrowser) {
    return /*#__PURE__*/external_react_dom_default().createPortal(modalContent, document.getElementById("myportal"));
  } else {
    return null;
  }
};

/* harmony default export */ var modal = (Modal);

/***/ }),

/***/ 7642:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2268);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



const Portal = ({
  children
}) => {
  const {
    0: mounted,
    1: setMounted
  } = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted ? /*#__PURE__*/createPortal(children, document.querySelector("#myportal")) : null;
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Portal)));

/***/ }),

/***/ 8303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Seo);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;