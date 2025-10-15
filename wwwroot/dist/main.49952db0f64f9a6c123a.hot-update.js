"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./wwwroot/source/components/MovieCard.jsx":
/*!*************************************************!*\
  !*** ./wwwroot/source/components/MovieCard.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function MovieCard(_ref) {
  var posterUrl = _ref.posterUrl,
    title = _ref.title,
    description = _ref.description,
    trailerUrl = _ref.trailerUrl,
    mediaId = _ref.mediaId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hovered = _useState2[0],
    setHovered = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    muted = _useState4[0],
    setMuted = _useState4[1];
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  // Toggle mute on video click
  var handleMuteClick = function handleMuteClick(e) {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  // Navigate to media details using URL param
  var handleViewDetailsClick = function handleViewDetailsClick(e) {
    e.stopPropagation();
    navigate("/user/media/".concat(mediaId));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      display: "inline-block",
      m: 2,
      position: "relative"
    },
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      width: 200,
      height: 350,
      cursor: "pointer",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      transform: hovered ? "scale(1.05)" : "scale(1)",
      zIndex: hovered ? 5 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "img",
    height: "100%",
    image: posterUrl,
    alt: title,
    sx: {
      objectFit: "contain"
    }
  })), hovered && trailerUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      position: "absolute",
      top: "50%",
      left: "105%",
      transform: "translateY(-50%)",
      width: 400,
      maxWidth: "90vw",
      bgcolor: "rgba(0,0,0,0.95)",
      color: "#fff",
      borderRadius: 2,
      p: 3,
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    textAlign: "center",
    gutterBottom: true
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    textAlign: "center",
    gutterBottom: true,
    sx: {
      maxHeight: 120,
      overflowY: "auto"
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      mt: 2,
      width: "100%",
      position: "relative",
      height: 220,
      overflow: "hidden",
      borderRadius: 2,
      cursor: "pointer"
    },
    onClick: handleMuteClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    ref: videoRef,
    src: trailerUrl,
    autoPlay: true,
    muted: muted,
    loop: true,
    playsInline: true,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), muted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      position: "absolute",
      bottom: 10,
      right: 10,
      bgcolor: "rgba(0,0,0,0.6)",
      color: "#fff",
      px: 1,
      py: 0.5,
      borderRadius: 1,
      fontSize: 12,
      zIndex: 5
    }
  }, "Click for sound")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "contained",
    color: "primary",
    sx: {
      mt: 2
    },
    onClick: handleViewDetailsClick
  }, "Watch")));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("520eadb24aaf816f4a71")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.49952db0f64f9a6c123a.hot-update.js.map