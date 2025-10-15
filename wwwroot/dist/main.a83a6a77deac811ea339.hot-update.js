"use strict";
self["webpackHotUpdatemediaserver"]("main",{

/***/ "./wwwroot/source/screens/user/MediaDetails.jsx":
/*!******************************************************!*\
  !*** ./wwwroot/source/screens/user/MediaDetails.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaDetailPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../axiosConfig */ "./wwwroot/source/axiosConfig.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../UserContext */ "./wwwroot/source/UserContext.js");
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





function MediaDetailPage() {
  var _media$seasons, _media$movieFiles;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    mediaId = _useParams.mediaId;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_13__.UserContext),
    userId = _useContext.userId; // Assume userId from context
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    media = _useState2[0],
    setMedia = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    currentVideo = _useState8[0],
    setCurrentVideo = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedSeason = _useState0[0],
    setSelectedSeason = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    currentEpisodeId = _useState10[0],
    setCurrentEpisodeId = _useState10[1];
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var progressTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchMedia = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _err$response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              setLoading(true);
              setError("");
              _context.n = 1;
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_12__["default"].get("/User/GetMediaDetails", {
                params: {
                  mediaId: mediaId
                }
              });
            case 1:
              response = _context.v;
              setMedia(response.data);
              _context.n = 2;
              return setInitialVideo(response.data);
            case 2:
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              setError(((_err$response = _t.response) === null || _err$response === void 0 ? void 0 : _err$response.status) === 404 ? "Media not found" : "Failed to fetch media details");
            case 4:
              _context.p = 4;
              setLoading(false);
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3, 4, 5]]);
      }));
      return function fetchMedia() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchMedia();
  }, [mediaId]);
  var setInitialVideo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
      var _data$movieFiles, _data$seasons;
      var movieFile, progress, overallProgress, seasonIndex, episode;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (data.type === "movie" && ((_data$movieFiles = data.movieFiles) === null || _data$movieFiles === void 0 ? void 0 : _data$movieFiles.length) > 0) {
              movieFile = data.movieFiles[0];
              progress = movieFile.progress;
              setCurrentVideo("/User/StreamMedia?filePath=".concat(encodeURIComponent(movieFile.streamUrl)));
              if (progress && !progress.isCompleted && videoRef.current) {
                setTimeout(function () {
                  videoRef.current.currentTime = progress.lastPosition;
                }, 500);
              }
            } else if (data.type === "series" && ((_data$seasons = data.seasons) === null || _data$seasons === void 0 ? void 0 : _data$seasons.length) > 0) {
              overallProgress = data.overallProgress;
              seasonIndex = 0;
              episode = data.seasons[0].episodes[0];
              if (overallProgress && !overallProgress.isCompleted && overallProgress.episodeId) {
                // Find episode with progress
                data.seasons.forEach(function (season, index) {
                  var ep = season.episodes.find(function (e) {
                    return e.episodeId === overallProgress.episodeId;
                  });
                  if (ep) {
                    seasonIndex = index;
                    episode = ep;
                  }
                });
              }
              setSelectedSeason(seasonIndex);
              setCurrentVideo("/User/StreamMedia?filePath=".concat(encodeURIComponent(episode.streamUrl)));
              setCurrentEpisodeId(episode.episodeId);
              if (overallProgress && !overallProgress.isCompleted && overallProgress.episodeId === episode.episodeId && videoRef.current) {
                setTimeout(function () {
                  videoRef.current.currentTime = overallProgress.lastPosition;
                }, 500);
              }
            } else {
              setError("No playable content available");
            }
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function setInitialVideo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (currentVideo) URL.revokeObjectURL(currentVideo);
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
    };
  }, [currentVideo]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var video = videoRef.current;
    if (!video || !userId || !media) return;
    var handleTimeUpdate = function handleTimeUpdate() {
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
      progressTimeoutRef.current = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var position, duration, isCompleted, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              position = Math.floor(video.currentTime);
              duration = Math.floor(video.duration || 0);
              isCompleted = position >= duration * 0.95;
              _context3.p = 1;
              _context3.n = 2;
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_12__["default"].post("/User/UpdateProgress", {
                mediaId: parseInt(mediaId),
                episodeId: media.type === "series" ? currentEpisodeId : null,
                position: position,
                duration: duration,
                isCompleted: isCompleted
              });
            case 2:
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error("Failed to update progress:", _t2);
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      })), 10000); // Update every 10 seconds
    };
    var handleEnded = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _axiosConfig__WEBPACK_IMPORTED_MODULE_12__["default"].post("/User/UpdateProgress", {
                mediaId: parseInt(mediaId),
                episodeId: media.type === "series" ? currentEpisodeId : null,
                position: Math.floor(video.duration || 0),
                duration: Math.floor(video.duration || 0),
                isCompleted: true
              });
            case 1:
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error("Failed to update progress on end:", _t3);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }));
      return function handleEnded() {
        return _ref4.apply(this, arguments);
      };
    }();
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    return function () {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (progressTimeoutRef.current) clearTimeout(progressTimeoutRef.current);
    };
  }, [currentVideo, userId, mediaId, currentEpisodeId, media]);
  var handleEpisodeClick = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(streamUrl, episodeId, progress) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            setCurrentVideo("/User/StreamMedia?filePath=".concat(encodeURIComponent(streamUrl)));
            setCurrentEpisodeId(episodeId);
            if (progress && !progress.isCompleted && videoRef.current) {
              setTimeout(function () {
                videoRef.current.currentTime = progress.lastPosition;
              }, 500);
            }
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function handleEpisodeClick(_x2, _x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleSeasonChange = function handleSeasonChange(event) {
    var _season$episodes;
    var newSeasonIndex = event.target.value;
    setSelectedSeason(newSeasonIndex);
    var season = media.seasons[newSeasonIndex];
    if (((_season$episodes = season.episodes) === null || _season$episodes === void 0 ? void 0 : _season$episodes.length) > 0) {
      var firstEp = season.episodes[0];
      var progress = firstEp.progress;
      setCurrentVideo("/User/StreamMedia?filePath=".concat(encodeURIComponent(firstEp.streamUrl)));
      setCurrentEpisodeId(firstEp.episodeId);
      if (progress && !progress.isCompleted && videoRef.current) {
        setTimeout(function () {
          videoRef.current.currentTime = progress.lastPosition;
        }, 500);
      }
    }
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "in": loading,
      timeout: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        color: "primary.main",
        mb: 2
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body1",
      sx: {
        color: "text.secondary",
        fontWeight: 500
      }
    }, "Loading media details...")));
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "in": !!error,
      timeout: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body1",
      sx: {
        color: "error.main",
        fontWeight: 500
      }
    }, error)));
  }
  if (!media) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "in": true,
      timeout: 400
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        m: 3,
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body1",
      sx: {
        color: "text.secondary"
      }
    }, "No media found.")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "in": true,
    timeout: 600
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h3",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 3,
      letterSpacing: "-0.025em"
    }
  }, media.title), currentVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      mb: 4,
      maxWidth: "100%",
      mx: "auto",
      borderRadius: 3,
      overflow: "hidden",
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    ref: videoRef,
    src: currentVideo,
    controls: true,
    autoPlay: false,
    style: {
      width: "100%",
      maxWidth: "1200px",
      display: "block"
    },
    "aria-label": "Video player for ".concat(media.title)
  }, "Your browser does not support the video tag.")), media.type === "series" && ((_media$seasons = media.seasons) === null || _media$seasons === void 0 ? void 0 : _media$seasons.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    sx: {
      fontWeight: 700,
      color: "text.primary",
      mb: 2
    }
  }, "Seasons & Episodes"), media.seasons.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      minWidth: 200,
      mb: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "season-select-label"
  }, "Select Season"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    labelId: "season-select-label",
    value: selectedSeason,
    label: "Select Season",
    onChange: handleSeasonChange,
    sx: {
      bgcolor: "background.paper",
      borderRadius: 2,
      "& .MuiSelect-select": {
        py: 1.5
      },
      "&:hover": {
        bgcolor: "rgba(99, 102, 241, 0.05)"
      }
    },
    "aria-label": "Select a season"
  }, media.seasons.map(function (season, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: season.seasonId,
      value: index,
      sx: {
        color: "text.primary"
      }
    }, season.title || "Season ".concat(season.seasonNumber));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h5",
    sx: {
      fontWeight: 600,
      color: "text.primary",
      mb: 2
    }
  }, media.seasons[selectedSeason].title || "Season ".concat(media.seasons[selectedSeason].seasonNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 1.5
  }, media.seasons[selectedSeason].episodes.map(function (ep) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      key: ep.episodeId,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "outlined",
      onClick: function onClick() {
        return handleEpisodeClick(ep.streamUrl, ep.episodeId, ep.progress);
      },
      fullWidth: true,
      sx: {
        py: 1.5,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 500,
        color: "text.primary",
        borderColor: "rgba(255, 255, 255, 0.2)",
        bgcolor: currentVideo.includes(encodeURIComponent(ep.streamUrl)) ? "rgba(99, 102, 241, 0.1)" : "transparent",
        "&:hover": {
          bgcolor: "rgba(99, 102, 241, 0.2)",
          borderColor: "primary.main",
          transform: "translateY(-2px)"
        },
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5
      },
      "aria-label": "Play ".concat(ep.title || "Episode ".concat(ep.episodeNumber))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "body2"
    }, ep.title || "Episode ".concat(ep.episodeNumber)), ep.progress && !ep.progress.isCompleted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "caption",
      sx: {
        fontSize: "0.75rem",
        color: "text.secondary"
      }
    }, "\u2022", " ", Math.floor(ep.progress.lastPosition / ep.progress.duration * 100), "% watched")));
  })))), media.type === "movie" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      mt: 3,
      maxWidth: "800px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body1",
    sx: {
      color: "text.primary",
      mb: 1
    }
  }, media.description || "No description available."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    sx: {
      color: "text.secondary",
      mb: 0.5
    }
  }, "Year: ", media.releaseYear || "N/A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    sx: {
      color: "text.secondary"
    }
  }, "Rating: ", media.rating || "N/A"), ((_media$movieFiles = media.movieFiles) === null || _media$movieFiles === void 0 || (_media$movieFiles = _media$movieFiles[0]) === null || _media$movieFiles === void 0 ? void 0 : _media$movieFiles.progress) && !media.movieFiles[0].progress.isCompleted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body2",
    sx: {
      color: "text.secondary",
      mt: 1
    }
  }, "Progress:", " ", Math.floor(media.movieFiles[0].progress.lastPosition / media.movieFiles[0].progress.duration * 100), "% watched")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6cd1968e153ef31832a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a83a6a77deac811ea339.hot-update.js.map