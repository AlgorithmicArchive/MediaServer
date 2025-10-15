"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./wwwroot/source/app.js":
/*!*******************************!*\
  !*** ./wwwroot/source/app.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/styles/ThemeProvider.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/index.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/esm/index.js");
/* harmony import */ var _components_RoutesComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/RoutesComponent */ "./wwwroot/source/components/RoutesComponent.jsx");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Navbar */ "./wwwroot/source/components/Navbar.jsx");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserContext */ "./wwwroot/source/UserContext.js");











// Custom dark theme
var darkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
      // Slightly warmer indigo for a modern feel
      light: "#A5B4FC",
      dark: "#3730A3"
    },
    secondary: {
      main: "#10B981" // Emerald green for fresh secondary accents
    },
    background: {
      "default": "#0F0F23",
      // Deeper cosmic dark
      paper: "#1A1A2E" // Subtle contrast for surfaces
    },
    text: {
      primary: "#F8FAFC",
      // Crisp white for readability
      secondary: "#CBD5E1" // Softer gray for secondary text
    },
    divider: "#334155" // Muted divider color
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(145deg, #1A1A2E 0%, #16213E 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "14px 28px",
          fontWeight: 600,
          fontSize: "1rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px) scale(1.02)",
            boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
          },
          "&:disabled": {
            opacity: 0.6,
            transform: "none"
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "48px",
          "& .MuiTabs-flexContainer": {
            gap: "24px"
          },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        },
        indicator: {
          background: "linear-gradient(90deg, #6366F1, #10B981)",
          height: "3px",
          borderRadius: "2px"
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          padding: "12px 24px",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#94A3B8",
          borderRadius: "12px",
          marginBottom: "-1px",
          transition: "all 0.3s ease",
          "&.Mui-selected": {
            color: "#F8FAFC",
            background: "rgba(99, 102, 241, 0.1)",
            boxShadow: "inset 0 -2px 0 rgba(99, 102, 241, 0.5)"
          },
          "&:hover": {
            color: "#E2E8F0",
            background: "rgba(255, 255, 255, 0.05)"
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.2)"
            },
            "&:hover fieldset": {
              borderColor: "#6366F1",
              backgroundColor: "rgba(99, 102, 241, 0.05)"
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6366F1",
              backgroundColor: "rgba(99, 102, 241, 0.08)",
              boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
            }
          },
          "& .MuiInputLabel-root": {
            color: "#94A3B8",
            fontWeight: 500
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#6366F1"
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          marginBottom: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          fontWeight: 500
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#94A3B8",
          "&.Mui-checked": {
            color: "#6366F1"
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginTop: "8px",
          "& .MuiTypography-root": {
            fontSize: "0.875rem",
            color: "#94A3B8"
          }
        }
      }
    }
  },
  typography: {
    h5: {
      fontWeight: 700,
      color: "#F8FAFC",
      letterSpacing: "-0.025em"
    },
    h6: {
      fontWeight: 500,
      color: "#CBD5E1",
      fontSize: "0.875rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    },
    body2: {
      color: "#94A3B8"
    }
  },
  shape: {
    borderRadius: 12
  }
});

// Wrapper for auto-login & token validation
var MainApp = function MainApp() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_11__.UserContext),
    token = _useContext.token,
    userType = _useContext.userType,
    setToken = _useContext.setToken,
    setUserType = _useContext.setUserType,
    setUsername = _useContext.setUsername,
    setUserId = _useContext.setUserId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Only run if we have a token
    if (!token) return;
    try {
      var decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__.jwtDecode)(token);
      var exp = decoded.exp * 1000;
      var now = Date.now();
      if (now >= exp) {
        // Token expired → log out
        setToken(null);
        setUserType(null);
        setUsername(null);
        setUserId(null);
        sessionStorage.clear();
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Session expired. Please log in again.");
        navigate("/", {
          replace: true
        });
      } else if (location.pathname === "/") {
        // Only redirect from login page if already logged in
        if (userType === "User") navigate("/user/home", {
          replace: true
        });else if (userType === "Admin") navigate("/admin/home", {
          replace: true
        });
      }
    } catch (err) {
      console.error("Token decode error:", err);
      setToken(null);
      setUserType(null);
      setUsername(null);
      setUserId(null);
      sessionStorage.clear();
      react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Invalid token. Please log in again.");
      navigate("/", {
        replace: true
      });
    }
  }, [token, userType, navigate, location.pathname, setToken, setUserType, setUsername, setUserId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RoutesComponent__WEBPACK_IMPORTED_MODULE_9__["default"], null));
};

// Root render
var AppWrapper = function AppWrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    theme: darkTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserContext__WEBPACK_IMPORTED_MODULE_11__.UserProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainApp, null))));
};
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppWrapper, null)));
if (true) {
  module.hot.accept();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59f10cebcaeaeb1d8b4e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.6a899dad9eaaa35096e8.hot-update.js.map