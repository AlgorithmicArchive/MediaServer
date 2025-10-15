"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./wwwroot/source/components/RoutesComponent.jsx":
/*!*******************************************************!*\
  !*** ./wwwroot/source/components/RoutesComponent.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProtectedRoute */ "./wwwroot/source/components/ProtectedRoute.jsx");
/* harmony import */ var _screens_user_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/user/Home */ "./wwwroot/source/screens/user/Home.jsx");
/* harmony import */ var _screens_home_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/home/Auth */ "./wwwroot/source/screens/home/Auth.jsx");
/* harmony import */ var _screens_user_UserLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/user/UserLayout */ "./wwwroot/source/screens/user/UserLayout.jsx");
/* harmony import */ var _screens_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/admin/AdminLayout */ "./wwwroot/source/screens/admin/AdminLayout.jsx");
/* harmony import */ var _source_screens_admin_AdminHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../source/screens/admin/AdminHome */ "./wwwroot/source/screens/admin/AdminHome.jsx");
/* harmony import */ var _screens_user_MediaDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/user/MediaDetails */ "./wwwroot/source/screens/user/MediaDetails.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../screens/user/Test'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


// import AdminPanel from "./AdminPanel";







var RoutesComponent = function RoutesComponent() {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_screens_home_Auth__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    element: /*#__PURE__*/React.createElement(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_1__["default"], {
      requiredRoles: ["User"]
    })
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/user",
    element: /*#__PURE__*/React.createElement(_screens_user_UserLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "home",
    element: /*#__PURE__*/React.createElement(_screens_user_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "media/:mediaId",
    element: /*#__PURE__*/React.createElement(_screens_user_MediaDetails__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "test",
    element: /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../screens/user/Test'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
  }))), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    element: /*#__PURE__*/React.createElement(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_1__["default"], {
      requiredRoles: ["Admin"]
    })
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/admin",
    element: /*#__PURE__*/React.createElement(_screens_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "home",
    element: /*#__PURE__*/React.createElement(_source_screens_admin_AdminHome__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }))), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {
    path: "/unauthorized",
    element: /*#__PURE__*/React.createElement("div", null, "Access Denied")
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoutesComponent);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("561c7b76e833fdf67b69")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.520eadb24aaf816f4a71.hot-update.js.map