"use strict";
self["webpackHotUpdatemediaserver"]("main",{

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Accordion/Accordion.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandMore.js");
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../axiosConfig */ "./wwwroot/source/axiosConfig.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../UserContext */ "./wwwroot/source/UserContext.js");
/* harmony import */ var _components_MovieCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/MovieCard */ "./wwwroot/source/components/MovieCard.jsx");
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_19__.UserContext),
    userId = _useContext.userId,
    role = _useContext.role; // Assume role indicates "Admin"
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (role !== "Admin") {
      setError("Unauthorized access. Admin role required.");
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
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].get("/Admin/GetMedia");
            case 2:
              response = _context.v;
              setMediaItems(response.data);

              // Fetch details for series
              _series = response.data.filter(function (item) {
                var _item$type;
                return ((_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.toLowerCase()) === "series";
              });
              detailsPromises = _series.map(function (item) {
                return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].get("/Admin/GetMediaDetails", {
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
  }, [role]);
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
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].post("/Admin/DeleteMedia", {
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
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].post("/Admin/DeleteSeason", {
              seasonId: seasonId
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
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].post("/Admin/DeleteEpisode/".concat(id));
          case 5:
            _context2.n = 6;
            return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].get("/User/GetMedia");
          case 6:
            response = _context2.v;
            setMediaItems(response.data);
            _series2 = response.data.filter(function (item) {
              var _item$type2;
              return ((_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.toLowerCase()) === "series";
            });
            detailsPromises = _series2.map(function (item) {
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_18__["default"].get("/User/GetMediaDetails", {
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
      mb: 3,
      letterSpacing: "-0.025em"
    }
  }, "Movies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: {
      xs: 2,
      sm: 3
    }
  }, movies.length > 0 ? movies.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      key: item.mediaId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sx: {
        position: "relative"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MovieCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: item.title || "No title",
      description: item.description || "-",
      posterUrl: item.thumbnailPath ? "/".concat(item.thumbnailPath) : "",
      trailerUrl: item.trailerPath ? "/".concat(item.trailerPath) : "",
      mediaId: item.mediaId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        position: "absolute",
        top: 8,
        right: 8,
        bgcolor: "rgba(0,0,0,0.6)",
        color: "error.main",
        "&:hover": {
          bgcolor: "rgba(0,0,0,0.8)"
        }
      },
      onClick: function onClick() {
        return openDeleteDialog("media", item.mediaId, item.title);
      },
      "aria-label": "Delete ".concat(item.title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1",
    sx: {
      color: "text.secondary",
      ml: 2
    }
  }, "No movies found."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 3,
      letterSpacing: "-0.025em"
    }
  }, "Series"), series.length > 0 ? series.map(function (item) {
    var _seriesDetails$item$m;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.mediaId,
      sx: {
        mb: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sx: {
        position: "relative",
        mb: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      spacing: {
        xs: 2,
        sm: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MovieCard__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: item.title || "No title",
      description: item.description || "-",
      posterUrl: item.thumbnailPath ? "/".concat(item.thumbnailPath) : "",
      trailerUrl: item.trailerPath ? "/".concat(item.trailerPath) : "",
      mediaId: item.mediaId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        position: "absolute",
        top: 8,
        right: 8,
        bgcolor: "rgba(0,0,0,0.6)",
        color: "error.main",
        "&:hover": {
          bgcolor: "rgba(0,0,0,0.8)"
        }
      },
      onClick: function onClick() {
        return openDeleteDialog("media", item.mediaId, item.title);
      },
      "aria-label": "Delete ".concat(item.title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null))))), ((_seriesDetails$item$m = seriesDetails[item.mediaId]) === null || _seriesDetails$item$m === void 0 || (_seriesDetails$item$m = _seriesDetails$item$m.seasons) === null || _seriesDetails$item$m === void 0 ? void 0 : _seriesDetails$item$m.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        bgcolor: "background.paper",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        sx: {
          color: "text.primary"
        }
      }),
      "aria-controls": "panel-".concat(item.mediaId, "-content"),
      id: "panel-".concat(item.mediaId, "-header")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h6",
      sx: {
        color: "text.primary",
        fontWeight: 600
      }
    }, "Seasons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, seriesDetails[item.mediaId].seasons.map(function (season) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: season.seasonId,
        sx: {
          mb: 3
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          display: "flex",
          alignItems: "center",
          mb: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        sx: {
          color: "text.primary",
          flexGrow: 1
        }
      }, season.title || "Season ".concat(season.seasonNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sx: {
          color: "error.main",
          "&:hover": {
            bgcolor: "rgba(255, 75, 75, 0.1)"
          }
        },
        onClick: function onClick() {
          return openDeleteDialog("season", season.seasonId, season.title || "Season ".concat(season.seasonNumber));
        },
        "aria-label": "Delete ".concat(season.title || "Season ".concat(season.seasonNumber))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        container: true,
        spacing: 1.5
      }, season.episodes.map(function (episode) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true,
          xs: 12,
          sm: 6,
          md: 4,
          lg: 3,
          key: episode.episodeId
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
          sx: {
            display: "flex",
            alignItems: "center",
            bgcolor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 2,
            p: 1
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
          variant: "body2",
          sx: {
            color: "text.primary",
            flexGrow: 1,
            overflow: "hidden",
            textOverflow: "ellipsis"
          }
        }, episode.title || "Episode ".concat(episode.episodeNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          sx: {
            color: "error.main",
            "&:hover": {
              bgcolor: "rgba(255, 75, 75, 0.1)"
            }
          },
          onClick: function onClick() {
            return openDeleteDialog("episode", episode.episodeId, episode.title || "Episode ".concat(episode.episodeNumber));
          },
          "aria-label": "Delete ".concat(episode.title || "Episode ".concat(episode.episodeNumber))
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
      })));
    }))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1",
    sx: {
      color: "text.secondary",
      ml: 2
    }
  }, "No series found.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: deleteDialog.open,
    onClose: closeDeleteDialog,
    "aria-labelledby": "delete-dialog-title",
    "aria-describedby": "delete-dialog-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "delete-dialog-title"
  }, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "delete-dialog-description"
  }, "Are you sure you want to delete \"", deleteDialog.title, "\"? This action cannot be undone.", deleteDialog.type === "media" && " This will also delete all associated seasons and episodes.", deleteDialog.type === "season" && " This will also delete all episodes in this season.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    onClick: closeDeleteDialog,
    color: "primary"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
/******/ 	__webpack_require__.h = () => ("9c2891da2d45ea117435")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f8e603792b8212b10738.hot-update.js.map