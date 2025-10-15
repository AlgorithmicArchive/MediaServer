"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./wwwroot/source/screens/home/Auth.jsx":
/*!**********************************************!*\
  !*** ./wwwroot/source/screens/home/Auth.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/styles/ThemeProvider.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Email.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Lock.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Visibility.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/VisibilityOff.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../UserContext */ "./wwwroot/source/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







// ... (theme and other imports remain unchanged)

var Auth = function Auth() {
  var _loginErrors$email, _loginErrors$password, _signupErrors$usernam, _signupErrors$email, _signupErrors$passwor, _signupErrors$confirm;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabValue = _useState2[0],
    setTabValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLoginPassword = _useState4[0],
    setShowLoginPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showRegisterPassword = _useState6[0],
    setShowRegisterPassword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      message: "",
      severity: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alert = _useState8[0],
    setAlert = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    rememberMe = _useState0[0],
    setRememberMe = _useState0[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_24__.UserContext),
    setUserType = _useContext.setUserType,
    setToken = _useContext.setToken,
    setUsername = _useContext.setUsername,
    setUserId = _useContext.setUserId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useNavigate)();
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_23__.useForm)(),
    registerLogin = _useForm.register,
    handleLoginSubmit = _useForm.handleSubmit,
    loginErrors = _useForm.formState.errors,
    resetLogin = _useForm.reset;
  var _useForm2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_23__.useForm)(),
    registerSignup = _useForm2.register,
    handleSignupSubmit = _useForm2.handleSubmit,
    signupErrors = _useForm2.formState.errors,
    resetSignup = _useForm2.reset,
    setError = _useForm2.setError;
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
    setAlert({
      message: "",
      severity: ""
    });
    resetLogin();
    resetSignup();
    setShowLoginPassword(false);
    setShowRegisterPassword(false);
  };

  // ... (backend validation and submission handlers remain unchanged)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    theme: darkTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      py: 4,
      position: "relative",
      overflow: "hidden",
      "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
        zIndex: 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "main",
    maxWidth: "sm",
    sx: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": true,
    timeout: 600
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    sx: {
      p: {
        xs: 3,
        sm: 4
      },
      transition: "all 0.4s ease"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      pb: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: "flex",
      justifyContent: "center",
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: tabValue,
    onChange: handleTabChange,
    centered: true,
    variant: "fullWidth",
    sx: {
      maxWidth: "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Sign In"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Sign Up"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      my: 2,
      backgroundColor: "divider"
    }
  }), alert.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": !!alert.message,
    timeout: 300
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    severity: alert.severity,
    sx: {
      mt: 1,
      mb: 3,
      transition: "all 0.3s ease"
    },
    onClose: function onClose() {
      return setAlert({
        message: "",
        severity: ""
      });
    }
  }, alert.message)), tabValue === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": tabValue === 0,
    timeout: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "form",
    onSubmit: handleLoginSubmit(onLoginSubmit),
    sx: {
      mt: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      textAlign: "center",
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h5"
  }, "Welcome Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "Enter your credentials")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    label: "Email Address",
    autoComplete: "email"
  }, registerLogin("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address"
    }
  }), {
    error: !!loginErrors.email,
    helperText: (_loginErrors$email = loginErrors.email) === null || _loginErrors$email === void 0 ? void 0 : _loginErrors$email.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
        sx: {
          color: "text.secondary"
        }
      }))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    type: showLoginPassword ? "text" : "password",
    label: "Password",
    autoComplete: "current-password"
  }, registerLogin("password", {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters"
    }
  }), {
    error: !!loginErrors.password,
    helperText: (_loginErrors$password = loginErrors.password) === null || _loginErrors$password === void 0 ? void 0 : _loginErrors$password.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
        sx: {
          color: "text.secondary"
        }
      })),
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: function onClick() {
          return setShowLoginPassword(!showLoginPassword);
        },
        edge: "end",
        sx: {
          color: "text.secondary"
        }
      }, showLoginPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], null)))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      checked: rememberMe,
      onChange: function onChange(e) {
        return setRememberMe(e.target.checked);
      }
    }),
    label: "Remember me"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    type: "submit",
    variant: "contained",
    size: "large",
    sx: {
      background: "linear-gradient(135deg, primary.main 0%, secondary.main 100%)",
      boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
      "&:hover": {
        background: "linear-gradient(135deg, primary.light 0%, secondary.main 100%)",
        boxShadow: "0 8px 25px 0 rgba(99, 102, 241, 0.5)"
      }
    }
  }, "Sign In"))), tabValue === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": tabValue === 1,
    timeout: 400
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: "form",
    onSubmit: handleSignupSubmit(onRegisterSubmit),
    sx: {
      mt: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      textAlign: "center",
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h5"
  }, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6"
  }, "Join us today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    label: "Username",
    autoComplete: "username"
  }, registerSignup("username", {
    required: "Username is required",
    minLength: {
      value: 2,
      message: "Username must be at least 2 characters"
    }
  }), {
    error: !!signupErrors.username,
    helperText: (_signupErrors$usernam = signupErrors.username) === null || _signupErrors$usernam === void 0 ? void 0 : _signupErrors$usernam.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
        sx: {
          color: "text.secondary"
        }
      }))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    label: "Email Address",
    autoComplete: "email"
  }, registerSignup("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address"
    }
  }), {
    error: !!signupErrors.email,
    helperText: (_signupErrors$email = signupErrors.email) === null || _signupErrors$email === void 0 ? void 0 : _signupErrors$email.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
        sx: {
          color: "text.secondary"
        }
      }))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    type: showRegisterPassword ? "text" : "password",
    label: "Password",
    autoComplete: "new-password"
  }, registerSignup("password", {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters"
    }
  }), {
    error: !!signupErrors.password,
    helperText: (_signupErrors$passwor = signupErrors.password) === null || _signupErrors$passwor === void 0 ? void 0 : _signupErrors$passwor.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
        sx: {
          color: "text.secondary"
        }
      })),
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: function onClick() {
          return setShowRegisterPassword(!showRegisterPassword);
        },
        edge: "end",
        sx: {
          color: "text.secondary"
        }
      }, showRegisterPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], null)))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    fullWidth: true,
    type: showRegisterPassword ? "text" : "password",
    label: "Confirm Password",
    autoComplete: "new-password"
  }, registerSignup("confirmPassword", {
    required: "Confirm password is required",
    validate: function validate(value, formValues) {
      return value === formValues.password || "Passwords do not match";
    }
  }), {
    error: !!signupErrors.confirmPassword,
    helperText: (_signupErrors$confirm = signupErrors.confirmPassword) === null || _signupErrors$confirm === void 0 ? void 0 : _signupErrors$confirm.message,
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        position: "start"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
        sx: {
          color: "text.secondary"
        }
      }))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true,
    type: "submit",
    variant: "contained",
    size: "large",
    sx: {
      background: "linear-gradient(135deg, primary.main 0%, secondary.main 100%)",
      boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
      "&:hover": {
        background: "linear-gradient(135deg, primary.light 0%, secondary.main 100%)",
        boxShadow: "0 8px 25px 0 rgba(99, 102, 241, 0.5)"
      }
    }
  }, "Sign Up")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("beab8b1fad1ddb6500f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a72d8229f67370297340.hot-update.js.map