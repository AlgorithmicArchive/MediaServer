"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./node_modules/@mui/material/esm/Divider/Divider.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/material/esm/Divider/Divider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/memoTheme.js */ "./node_modules/@mui/material/esm/utils/memoTheme.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _dividerClasses_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dividerClasses.js */ "./node_modules/@mui/material/esm/Divider/dividerClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';










const useUtilityClasses = ownerState => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _dividerClasses_js__WEBPACK_IMPORTED_MODULE_7__.getDividerUtilityClass, classes);
};
const DividerRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('div', {
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
  }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__["default"])(({
  theme
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: 'thin',
  variants: [{
    props: {
      absolute: true
    },
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  }, {
    props: {
      light: true
    },
    style: {
      borderColor: theme.alpha((theme.vars || theme).palette.divider, 0.08)
    }
  }, {
    props: {
      variant: 'inset'
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'horizontal'
    },
    style: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'vertical'
    },
    style: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }, {
    props: {
      orientation: 'vertical'
    },
    style: {
      height: '100%',
      borderBottomWidth: 0,
      borderRightWidth: 'thin'
    }
  }, {
    props: {
      flexItem: true
    },
    style: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.children,
    style: {
      display: 'flex',
      textAlign: 'center',
      border: 0,
      borderTopStyle: 'solid',
      borderLeftStyle: 'solid',
      '&::before, &::after': {
        content: '""',
        alignSelf: 'center'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.children && ownerState.orientation !== 'vertical',
    style: {
      '&::before, &::after': {
        width: '100%',
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderTopStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.orientation === 'vertical' && ownerState.children,
    style: {
      flexDirection: 'column',
      '&::before, &::after': {
        height: '100%',
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderLeftStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '90%'
      },
      '&::after': {
        width: '10%'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '10%'
      },
      '&::after': {
        width: '90%'
      }
    }
  }]
})));
const DividerWrapper = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('span', {
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
  }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_5__["default"])(({
  theme
}) => ({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  whiteSpace: 'nowrap',
  variants: [{
    props: {
      orientation: 'vertical'
    },
    style: {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }
  }]
})));
const Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Divider(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.useDefaultProps)({
    props: inProps,
    name: 'MuiDivider'
  });
  const {
    absolute = false,
    children,
    className,
    orientation = 'horizontal',
    component = children || orientation === 'vertical' ? 'div' : 'hr',
    flexItem = false,
    light = false,
    role = component !== 'hr' ? 'separator' : undefined,
    textAlign = 'center',
    variant = 'fullWidth',
    ...other
  } = props;
  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(DividerRoot, {
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    role: role,
    ref: ref,
    ownerState: ownerState,
    "aria-orientation": role === 'separator' && (component !== 'hr' || orientation === 'vertical') ? orientation : undefined,
    ...other,
    children: children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(DividerWrapper, {
      className: classes.wrapper,
      ownerState: ownerState,
      children: children
    }) : null
  });
});

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
if (Divider) {
  Divider.muiSkipListHighlight = true;
}
 true ? Divider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['horizontal', 'vertical']),
  /**
   * @ignore
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['center', 'left', 'right']),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['fullWidth', 'inset', 'middle']), prop_types__WEBPACK_IMPORTED_MODULE_1__.string])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/styles/ThemeProvider.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Email.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Lock.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Visibility.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/VisibilityOff.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../UserContext */ "./wwwroot/source/UserContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







// Enhanced dark theme with modern gradients and refined spacing
var darkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"])({
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_25__.UserContext),
    setUserType = _useContext.setUserType,
    setToken = _useContext.setToken,
    setUsername = _useContext.setUsername,
    setUserId = _useContext.setUserId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_24__.useForm)(),
    registerLogin = _useForm.register,
    handleLoginSubmit = _useForm.handleSubmit,
    loginErrors = _useForm.formState.errors,
    resetLogin = _useForm.reset;
  var _useForm2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_24__.useForm)(),
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

  // Backend validation helpers
  var checkUsername = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(username) {
      var res, data;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (username) {
              _context.n = 1;
              break;
            }
            return _context.a(2, false);
          case 1:
            _context.n = 2;
            return fetch("/Home/CheckUsername?username=".concat(username));
          case 2:
            res = _context.v;
            _context.n = 3;
            return res.json();
          case 3:
            data = _context.v;
            return _context.a(2, data.status);
        }
      }, _callee);
    }));
    return function checkUsername(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var checkEmail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email) {
      var res, data;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (email) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, false);
          case 1:
            _context2.n = 2;
            return fetch("/Home/CheckEmail?email=".concat(email));
          case 2:
            res = _context2.v;
            _context2.n = 3;
            return res.json();
          case 3:
            data = _context2.v;
            return _context2.a(2, data.status);
        }
      }, _callee2);
    }));
    return function checkEmail(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Login submission
  var onLoginSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(data) {
      var formData, res, err, result, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            _context3.n = 1;
            return fetch("/Home/Login", {
              method: "POST",
              body: formData
            });
          case 1:
            res = _context3.v;
            if (res.ok) {
              _context3.n = 3;
              break;
            }
            _context3.n = 2;
            return res.text();
          case 2:
            err = _context3.v;
            console.error("Server error:", err);
            setAlert({
              message: "Invalid credentials. Please try again.",
              severity: "error"
            });
            return _context3.a(2);
          case 3:
            _context3.n = 4;
            return res.json();
          case 4:
            result = _context3.v;
            if (result.status) {
              setUserType(result.userType);
              setToken(result.token);
              setUsername(result.username);
              setUserId(result.userId);
              navigate(result.userType === "Admin" ? "/admin/home" : "/user/home");
            } else {
              setAlert({
                message: "Login failed. Please try again.",
                severity: "error"
              });
            }
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t = _context3.v;
            console.error("Network or fetch error:", _t);
            setAlert({
              message: "Network error. Please try again.",
              severity: "error"
            });
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 5]]);
    }));
    return function onLoginSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  // Registration submission
  var onRegisterSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(data) {
      var usernameOk, emailOk, formData, res, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.n = 1;
            return checkUsername(data.username);
          case 1:
            usernameOk = _context4.v;
            _context4.n = 2;
            return checkEmail(data.email);
          case 2:
            emailOk = _context4.v;
            if (usernameOk) {
              _context4.n = 3;
              break;
            }
            setError("username", {
              type: "manual",
              message: "Username already exists"
            });
            return _context4.a(2);
          case 3:
            if (emailOk) {
              _context4.n = 4;
              break;
            }
            setError("email", {
              type: "manual",
              message: "Email already exists"
            });
            return _context4.a(2);
          case 4:
            _context4.p = 4;
            formData = new FormData();
            formData.append("username", data.username);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("confirmPassword", data.confirmPassword);
            _context4.n = 5;
            return fetch("/Home/Register", {
              method: "POST",
              body: formData
            });
          case 5:
            res = _context4.v;
            if (res.ok) {
              setAlert({
                message: "Registration successful! Please log in.",
                severity: "success"
              });
              setTabValue(0);
              resetSignup();
            } else {
              setAlert({
                message: "Registration failed. Please try again.",
                severity: "error"
              });
            }
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t2 = _context4.v;
            setAlert({
              message: "Network error. Please try again.",
              severity: "error"
            });
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[4, 6]]);
    }));
    return function onRegisterSubmit(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "in": true,
    timeout: 300
  }, alert.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
      }, showLoginPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], null)))
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
      }, showRegisterPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], null)))
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
/******/ 	__webpack_require__.h = () => ("a72d8229f67370297340")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e84a320a747f12ec3d44.hot-update.js.map