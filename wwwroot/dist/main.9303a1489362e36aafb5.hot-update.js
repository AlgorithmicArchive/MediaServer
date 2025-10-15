"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./node_modules/@mui/icons-material/esm/ExpandLess.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/ExpandLess.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon.js */ "./node_modules/@mui/material/esm/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess'));

/***/ }),

/***/ "./node_modules/@mui/material/esm/Table/Table.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/esm/Table/Table.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _TableContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableContext.js */ "./node_modules/@mui/material/esm/Table/TableContext.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/memoTheme.js */ "./node_modules/@mui/material/esm/utils/memoTheme.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableClasses_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tableClasses.js */ "./node_modules/@mui/material/esm/Table/tableClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';











const useUtilityClasses = ownerState => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', stickyHeader && 'stickyHeader']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableClasses_js__WEBPACK_IMPORTED_MODULE_8__.getTableUtilityClass, classes);
};
const TableRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])('table', {
  name: 'MuiTable',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__["default"])(({
  theme
}) => ({
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& caption': {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: 'left',
    captionSide: 'bottom'
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: 'separate'
    }
  }]
})));
const defaultComponent = 'table';
const Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Table(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__.useDefaultProps)({
    props: inProps,
    name: 'MuiTable'
  });
  const {
    className,
    component = defaultComponent,
    padding = 'normal',
    size = 'medium',
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses(ownerState);
  const table = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TableContext_js__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: table,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableRoot, {
      as: component,
      role: component === defaultComponent ? null : 'table',
      ref: ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
      ownerState: ownerState,
      ...other
    })
  });
});
 true ? Table.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
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
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['medium', 'small']), prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./node_modules/@mui/material/esm/Table/TableContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/material/esm/Table/TableContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
'use client';



/**
 * @ignore - internal component.
 */
const TableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
if (true) {
  TableContext.displayName = 'TableContext';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableContext);

/***/ }),

/***/ "./node_modules/@mui/material/esm/Table/Tablelvl2Context.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mui/material/esm/Table/Tablelvl2Context.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
'use client';



/**
 * @ignore - internal component.
 */
const Tablelvl2Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
if (true) {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tablelvl2Context);

/***/ }),

/***/ "./node_modules/@mui/material/esm/Table/tableClasses.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/material/esm/Table/tableClasses.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableUtilityClass: () => (/* binding */ getTableUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTable', slot);
}
const tableClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTable', ['root', 'stickyHeader']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableBody/TableBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableBody/TableBody.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Table/Tablelvl2Context.js */ "./node_modules/@mui/material/esm/Table/Tablelvl2Context.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableBodyClasses_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tableBodyClasses.js */ "./node_modules/@mui/material/esm/TableBody/tableBodyClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableBodyClasses_js__WEBPACK_IMPORTED_MODULE_7__.getTableBodyUtilityClass, classes);
};
const TableBodyRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])('tbody', {
  name: 'MuiTableBody',
  slot: 'Root'
})({
  display: 'table-row-group'
});
const tablelvl2 = {
  variant: 'body'
};
const defaultComponent = 'tbody';
const TableBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableBody(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.useDefaultProps)({
    props: inProps,
    name: 'MuiTableBody'
  });
  const {
    className,
    component = defaultComponent,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TableBodyRoot, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
      as: component,
      ref: ref,
      role: component === defaultComponent ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
 true ? TableBody.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBody);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableBody/tableBodyClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableBody/tableBodyClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableBodyUtilityClass: () => (/* binding */ getTableBodyUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableBodyUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTableBody', slot);
}
const tableBodyClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTableBody', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableBodyClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableCell/TableCell.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableCell/TableCell.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/capitalize.js */ "./node_modules/@mui/material/esm/utils/capitalize.js");
/* harmony import */ var _Table_TableContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Table/TableContext.js */ "./node_modules/@mui/material/esm/Table/TableContext.js");
/* harmony import */ var _Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Table/Tablelvl2Context.js */ "./node_modules/@mui/material/esm/Table/Tablelvl2Context.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/memoTheme.js */ "./node_modules/@mui/material/esm/utils/memoTheme.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableCellClasses_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tableCellClasses.js */ "./node_modules/@mui/material/esm/TableCell/tableCellClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';













const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(align)}`, padding !== 'normal' && `padding${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(padding)}`, `size${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(size)}`]
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableCellClasses_js__WEBPACK_IMPORTED_MODULE_10__.getTableCellUtilityClass, classes);
};
const TableCellRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${(0,_utils_capitalize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_8__["default"])(({
  theme
}) => ({
  ...theme.typography.body2,
  display: 'table-cell',
  verticalAlign: 'inherit',
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? theme.lighten(theme.alpha(theme.palette.divider, 1), 0.88) : theme.darken(theme.alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: 'left',
  padding: 16,
  variants: [{
    props: {
      variant: 'head'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: 'body'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: 'footer'
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      padding: '6px 16px',
      [`&.${_tableCellClasses_js__WEBPACK_IMPORTED_MODULE_10__["default"].paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '& > *': {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: 'checkbox'
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px'
    }
  }, {
    props: {
      padding: 'none'
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: 'left'
    },
    style: {
      textAlign: 'left'
    }
  }, {
    props: {
      align: 'center'
    },
    style: {
      textAlign: 'center'
    }
  }, {
    props: {
      align: 'right'
    },
    style: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      align: 'justify'
    },
    style: {
      textAlign: 'justify'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */
const TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__.useDefaultProps)({
    props: inProps,
    name: 'MuiTableCell'
  });
  const {
    align = 'inherit',
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }
  let scope = scopeProp;
  // scope is not a valid attribute for <td/> elements.
  // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
  if (component === 'td') {
    scope = undefined;
  } else if (!scope && isHeadCell) {
    scope = 'col';
  }
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TableCellRoot, {
    as: component,
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState,
    ...other
  });
});
 true ? TableCell.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
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
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Set scope attribute.
   */
  scope: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['medium', 'small']), prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['asc', 'desc', false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(['body', 'footer', 'head']), prop_types__WEBPACK_IMPORTED_MODULE_1__.string])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableCell);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableCell/tableCellClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableCell/tableCellClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableCellUtilityClass: () => (/* binding */ getTableCellUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableCellUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTableCell', slot);
}
const tableCellClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableCellClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableContainer/TableContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableContainer/TableContainer.js ***!
  \*************************************************************************/
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
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableContainerClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tableContainerClasses.js */ "./node_modules/@mui/material/esm/TableContainer/tableContainerClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableContainerClasses_js__WEBPACK_IMPORTED_MODULE_6__.getTableContainerUtilityClass, classes);
};
const TableContainerRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])('div', {
  name: 'MuiTableContainer',
  slot: 'Root'
})({
  width: '100%',
  overflowX: 'auto'
});
const TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableContainer(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_5__.useDefaultProps)({
    props: inProps,
    name: 'MuiTableContainer'
  });
  const {
    className,
    component = 'div',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TableContainerRoot, {
    ref: ref,
    as: component,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    ownerState: ownerState,
    ...other
  });
});
 true ? TableContainer.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Table`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableContainer);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableContainer/tableContainerClasses.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableContainer/tableContainerClasses.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableContainerUtilityClass: () => (/* binding */ getTableContainerUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableContainerUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTableContainer', slot);
}
const tableContainerClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTableContainer', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableContainerClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableHead/TableHead.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableHead/TableHead.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Table/Tablelvl2Context.js */ "./node_modules/@mui/material/esm/Table/Tablelvl2Context.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableHeadClasses_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tableHeadClasses.js */ "./node_modules/@mui/material/esm/TableHead/tableHeadClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableHeadClasses_js__WEBPACK_IMPORTED_MODULE_7__.getTableHeadUtilityClass, classes);
};
const TableHeadRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])('thead', {
  name: 'MuiTableHead',
  slot: 'Root'
})({
  display: 'table-header-group'
});
const tablelvl2 = {
  variant: 'head'
};
const defaultComponent = 'thead';
const TableHead = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableHead(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__.useDefaultProps)({
    props: inProps,
    name: 'MuiTableHead'
  });
  const {
    className,
    component = defaultComponent,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TableHeadRoot, {
      as: component,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
      ref: ref,
      role: component === defaultComponent ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
 true ? TableHead.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHead);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableHead/tableHeadClasses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableHead/tableHeadClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableHeadUtilityClass: () => (/* binding */ getTableHeadUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableHeadUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTableHead', slot);
}
const tableHeadClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTableHead', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableHeadClasses);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableRow/TableRow.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableRow/TableRow.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils/composeClasses */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Table/Tablelvl2Context.js */ "./node_modules/@mui/material/esm/Table/Tablelvl2Context.js");
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zero-styled/index.js */ "./node_modules/@mui/material/esm/styles/styled.js");
/* harmony import */ var _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/memoTheme.js */ "./node_modules/@mui/material/esm/utils/memoTheme.js");
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DefaultPropsProvider/index.js */ "./node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js");
/* harmony import */ var _tableRowClasses_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tableRowClasses.js */ "./node_modules/@mui/material/esm/TableRow/tableRowClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client';











const useUtilityClasses = ownerState => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__["default"])(slots, _tableRowClasses_js__WEBPACK_IMPORTED_MODULE_8__.getTableRowUtilityClass, classes);
};
const TableRowRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])('tr', {
  name: 'MuiTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})((0,_utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_6__["default"])(({
  theme
}) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${_tableRowClasses_js__WEBPACK_IMPORTED_MODULE_8__["default"].hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${_tableRowClasses_js__WEBPACK_IMPORTED_MODULE_8__["default"].selected}`]: {
    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`)
    }
  }
})));
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
const TableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableRow(inProps, ref) {
  const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_7__.useDefaultProps)({
    props: inProps,
    name: 'MuiTableRow'
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl2 && tablelvl2.variant === 'head',
    footer: tablelvl2 && tablelvl2.variant === 'footer'
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TableRowRoot, {
    as: component,
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    role: component === defaultComponent ? null : 'row',
    ownerState: ownerState,
    ...other
  });
});
 true ? TableRow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Should be valid `<tr>` children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool])), prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.object])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);

/***/ }),

/***/ "./node_modules/@mui/material/esm/TableRow/tableRowClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/esm/TableRow/tableRowClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getTableRowUtilityClass: () => (/* binding */ getTableRowUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils/generateUtilityClasses */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils/generateUtilityClass */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");


function getTableRowUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTableRow', slot);
}
const tableRowClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableRowClasses);

/***/ }),

/***/ "./wwwroot/source/screens/admin/ManageMedia.jsx":
/*!******************************************************!*\
  !*** ./wwwroot/source/screens/admin/ManageMedia.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogActions/DialogActions.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandLess.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandMore.js");
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../axiosConfig */ "./wwwroot/source/axiosConfig.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../UserContext */ "./wwwroot/source/UserContext.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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





function ManageMedia() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_23__.UserContext),
    userId = _useContext.userId,
    userType = _useContext.userType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    mediaItems = _useState2[0],
    setMediaItems = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    seriesDetails = _useState4[0],
    setSeriesDetails = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      open: false,
      type: "",
      // "media", "season", "episode"
      id: null,
      title: ""
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteDialog = _useState0[0],
    setDeleteDialog = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    expandedSeries = _useState10[0],
    setExpandedSeries = _useState10[1]; // Track expanded series
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    expandedSeasons = _useState12[0],
    setExpandedSeasons = _useState12[1]; // Track expanded seasons

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userType !== "Admin") {
      setError("Unauthorized access. Admin userType required.");
      return;
    }
    var fetchMedia = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _series, detailsPromises, detailsResponses, detailsMap, _err$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              setLoading(true);
              setError("");
              _context.p = 1;
              _context.n = 2;
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].get("/Admin/GetMedia");
            case 2:
              response = _context.v;
              setMediaItems(response.data);

              // Fetch details for series
              _series = response.data.filter(function (item) {
                var _item$type;
                return ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.toLowerCase()) === "series";
              });
              detailsPromises = _series.map(function (item) {
                return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].get("/Admin/GetMediaDetails", {
                  params: {
                    mediaId: item.mediaId
                  }
                });
              });
              _context.n = 3;
              return Promise.all(detailsPromises);
            case 3:
              detailsResponses = _context.v;
              detailsMap = {};
              detailsResponses.forEach(function (res, index) {
                detailsMap[_series[index].mediaId] = res.data;
              });
              setSeriesDetails(detailsMap);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              setError(((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.error) || "Failed to fetch media");
            case 5:
              _context.p = 5;
              setLoading(false);
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 4, 5, 6]]);
      }));
      return function fetchMedia() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchMedia();
  }, [userType]);
  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var type, id, response, _series2, detailsPromises, detailsResponses, detailsMap, _err$response2, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            type = deleteDialog.type, id = deleteDialog.id;
            if (!(type === "media")) {
              _context2.n = 2;
              break;
            }
            _context2.n = 1;
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].post("/Admin/DeleteMedia", {
              mediaId: id
            });
          case 1:
            _context2.n = 5;
            break;
          case 2:
            if (!(type === "season")) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].post("/Admin/DeleteSeason", {
              seasonId: id
            });
          case 3:
            _context2.n = 5;
            break;
          case 4:
            if (!(type === "episode")) {
              _context2.n = 5;
              break;
            }
            _context2.n = 5;
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].post("/Admin/DeleteEpisode", {
              episodeId: id
            });
          case 5:
            _context2.n = 6;
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].get("/Admin/GetMedia");
          case 6:
            response = _context2.v;
            setMediaItems(response.data);
            _series2 = response.data.filter(function (item) {
              var _item$type2;
              return ((_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.toLowerCase()) === "series";
            });
            detailsPromises = _series2.map(function (item) {
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_22__["default"].get("/Admin/GetMediaDetails", {
                params: {
                  mediaId: item.mediaId
                }
              });
            });
            _context2.n = 7;
            return Promise.all(detailsPromises);
          case 7:
            detailsResponses = _context2.v;
            detailsMap = {};
            detailsResponses.forEach(function (res, index) {
              detailsMap[_series2[index].mediaId] = res.data;
            });
            setSeriesDetails(detailsMap);
            setExpandedSeries({}); // Reset expanded state
            setExpandedSeasons({});
            setDeleteDialog({
              open: false,
              type: "",
              id: null,
              title: ""
            });
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t2 = _context2.v;
            setError(((_err$response2 = _t2.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.error) || "Failed to delete item");
            setDeleteDialog({
              open: false,
              type: "",
              id: null,
              title: ""
            });
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function handleDelete() {
      return _ref2.apply(this, arguments);
    };
  }();
  var openDeleteDialog = function openDeleteDialog(type, id, title) {
    setDeleteDialog({
      open: true,
      type: type,
      id: id,
      title: title
    });
  };
  var closeDeleteDialog = function closeDeleteDialog() {
    setDeleteDialog({
      open: false,
      type: "",
      id: null,
      title: ""
    });
  };
  var toggleSeriesExpansion = function toggleSeriesExpansion(mediaId) {
    setExpandedSeries(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, mediaId, !prev[mediaId]));
    });
  };
  var toggleSeasonExpansion = function toggleSeasonExpansion(seasonId) {
    setExpandedSeasons(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, seasonId, !prev[seasonId]));
    });
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "in": loading,
      timeout: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        color: "primary.main",
        mb: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "body1",
      sx: {
        color: "text.secondary",
        fontWeight: 500
      }
    }, "Loading media...")));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "in": !!error,
      timeout: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sx: {
        bgcolor: "rgba(255, 75, 75, 0.1)",
        border: "1px solid rgba(255, 75, 75, 0.3)",
        borderRadius: 2,
        p: 2,
        m: 3,
        textAlign: "center",
        maxWidth: "600px",
        mx: "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "body1",
      sx: {
        color: "error.main",
        fontWeight: 500
      }
    }, error)));
  }
  var movies = mediaItems.filter(function (item) {
    var _item$type3;
    return ((_item$type3 = item.type) === null || _item$type3 === void 0 ? void 0 : _item$type3.toLowerCase()) === "movie";
  });
  var series = mediaItems.filter(function (item) {
    var _item$type4;
    return ((_item$type4 = item.type) === null || _item$type4 === void 0 ? void 0 : _item$type4.toLowerCase()) === "series";
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      minHeight: "100vh",
      bgcolor: "background.default",
      py: {
        xs: 3,
        sm: 4
      },
      px: {
        xs: 2,
        sm: 3,
        md: 4
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "in": true,
    timeout: 600
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 4,
      letterSpacing: "-0.025em"
    }
  }, "Admin Media Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      mb: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 2,
      letterSpacing: "-0.025em"
    }
  }, "Movies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
    sx: {
      bgcolor: "background.paper",
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "movies table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, movies.length > 0 ? movies.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: item.mediaId,
      sx: {
        "&:hover": {
          bgcolor: "rgba(99, 102, 241, 0.05)"
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.primary"
      }
    }, item.title || "No title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.secondary"
      }
    }, item.releaseYear || "N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.secondary"
      }
    }, item.rating || "N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "error",
      onClick: function onClick() {
        return openDeleteDialog("media", item.mediaId, item.title);
      },
      "aria-label": "Delete ".concat(item.title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], null))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    colSpan: 4,
    sx: {
      color: "text.secondary"
    }
  }, "No movies found.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 2,
      letterSpacing: "-0.025em"
    }
  }, "Series"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
    sx: {
      bgcolor: "background.paper",
      borderRadius: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "series table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600,
      width: "40px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      color: "text.primary",
      fontWeight: 600
    }
  }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, series.length > 0 ? series.map(function (item) {
    var _seriesDetails$item$m, _seriesDetails$item$m2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: item.mediaId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        "&:hover": {
          bgcolor: "rgba(99, 102, 241, 0.05)"
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, ((_seriesDetails$item$m = seriesDetails[item.mediaId]) === null || _seriesDetails$item$m === void 0 || (_seriesDetails$item$m = _seriesDetails$item$m.seasons) === null || _seriesDetails$item$m === void 0 ? void 0 : _seriesDetails$item$m.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        return toggleSeriesExpansion(item.mediaId);
      },
      "aria-label": expandedSeries[item.mediaId] ? "Collapse ".concat(item.title) : "Expand ".concat(item.title)
    }, expandedSeries[item.mediaId] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      sx: {
        color: "text.primary"
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      sx: {
        color: "text.primary"
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.primary"
      }
    }, item.title || "No title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.secondary"
      }
    }, item.releaseYear || "N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        color: "text.secondary"
      }
    }, item.rating || "N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "error",
      onClick: function onClick() {
        return openDeleteDialog("media", item.mediaId, item.title);
      },
      "aria-label": "Delete ".concat(item.title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      colSpan: 5,
      sx: {
        p: 0,
        borderBottom: "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "in": expandedSeries[item.mediaId],
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sx: {
        bgcolor: "rgba(255, 255, 255, 0.05)",
        p: 2
      }
    }, (_seriesDetails$item$m2 = seriesDetails[item.mediaId]) === null || _seriesDetails$item$m2 === void 0 || (_seriesDetails$item$m2 = _seriesDetails$item$m2.seasons) === null || _seriesDetails$item$m2 === void 0 ? void 0 : _seriesDetails$item$m2.map(function (season) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        key: season.seasonId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
        sx: {
          "&:hover": {
            bgcolor: "rgba(99, 102, 241, 0.1)"
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          pl: 4,
          width: "40px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: function onClick() {
          return toggleSeasonExpansion(season.seasonId);
        },
        "aria-label": expandedSeasons[season.seasonId] ? "Collapse season ".concat(season.seasonNumber) : "Expand season ".concat(season.seasonNumber)
      }, expandedSeasons[season.seasonId] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
        sx: {
          color: "text.primary"
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
        sx: {
          color: "text.primary"
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          color: "text.primary"
        }
      }, season.title || "Season ".concat(season.seasonNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "error",
        onClick: function onClick() {
          return openDeleteDialog("season", season.seasonId, season.title || "Season ".concat(season.seasonNumber));
        },
        "aria-label": "Delete ".concat(season.title || "Season ".concat(season.seasonNumber))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        colSpan: 5,
        sx: {
          p: 0,
          borderBottom: "none"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        "in": expandedSeasons[season.seasonId],
        timeout: "auto",
        unmountOnExit: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          bgcolor: "rgba(255, 255, 255, 0.02)",
          p: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "small",
        "aria-label": "episodes table for season ".concat(season.seasonNumber)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          color: "text.primary",
          fontWeight: 600,
          pl: 6
        }
      }, "Episode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          color: "text.primary",
          fontWeight: 600
        }
      }, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, season.episodes.map(function (episode) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: episode.episodeId,
          sx: {
            "&:hover": {
              bgcolor: "rgba(99, 102, 241, 0.05)"
            }
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
          sx: {
            color: "text.primary",
            pl: 6
          }
        }, episode.title || "Episode ".concat(episode.episodeNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          color: "error",
          onClick: function onClick() {
            return openDeleteDialog("episode", episode.episodeId, episode.title || "Episode ".concat(episode.episodeNumber));
          },
          "aria-label": "Delete ".concat(episode.title || "Episode ".concat(episode.episodeNumber))
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], null))));
      }))))))));
    }))))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    colSpan: 5,
    sx: {
      color: "text.secondary"
    }
  }, "No series found.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: deleteDialog.open,
    onClose: closeDeleteDialog,
    "aria-labelledby": "delete-dialog-title",
    "aria-describedby": "delete-dialog-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "delete-dialog-title"
  }, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "delete-dialog-description"
  }, "Are you sure you want to delete \"", deleteDialog.title, "\"? This action cannot be undone.", deleteDialog.type === "media" && " This will also delete all associated seasons and episodes.", deleteDialog.type === "season" && " This will also delete all episodes in this season.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {
    onClick: closeDeleteDialog,
    color: "primary"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {
    onClick: handleDelete,
    color: "error",
    variant: "contained",
    autoFocus: true
  }, "Delete"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4b7db2de50767c38175")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9303a1489362e36aafb5.hot-update.js.map