(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856],
  {
    2442: function (e, r, t) {
      "use strict";
      t.d(r, {
        W: function () {
          return BackgroundColorContainer;
        },
      });
      var n = t(1318),
        a = t.n(n),
        o = t(2088),
        BackgroundColorContainer = function () {
          return (0, o.jsx)("div", { className: a().backgroundColorContainer });
        };
    },
    7117: function (e, r, t) {
      "use strict";
      t.d(r, {
        B: function () {
          return CoverArtSingle;
        },
      });
      var n = t(2674),
        a = t(1578),
        o = t(1844),
        i = t(8471),
        s = t(6742),
        c = t(2397),
        l = t(8624),
        u = t(3939),
        p = t.n(u),
        d = t(2088),
        CoverArtSingle = function (e) {
          var r = e.isPreview,
            t = e.hasPlaybackContext,
            u = e.onClick,
            _ = (0, o.useState)(!1),
            C = _[0],
            f = _[1],
            v = (0, o.useContext)(s.h),
            x = v.width,
            y = v.height,
            g = (0, o.useRef)(null),
            b = (0, o.useContext)(i.C).playbackState,
            j = null == b ? void 0 : b.isPaused;
          return (
            (0, o.useEffect)(
              function () {
                return (
                  x && y && x >= c.Zo.medium && y >= c.p4.large && !r && t
                    ? (g.current = setTimeout(function () {
                        return f(!0);
                      }, 200))
                    : f(!1),
                  function () {
                    g.current && clearTimeout(g.current);
                  }
                );
              },
              [r, j, g, x, y, t]
            ),
            (0, d.jsx)(l.D, {
              className: (0, a.cx)(
                p().coverArtSingle,
                (0, n.Z)({}, p().scaleDownCoverArt, C)
              ),
              onClick: u,
            })
          );
        };
    },
    3260: function (e, r, t) {
      "use strict";
      t.d(r, {
        G: function () {
          return OverflowMenuSingle;
        },
      });
      var n = t(6596),
        a = t(9569),
        o = t(4493),
        i = t.n(o),
        s = t(2088),
        OverflowMenuSingle = function (e) {
          var r = e.playOnSpotifyClick,
            t = (0, n.v9)(function (e) {
              return e.machineState.showOverflowMenu;
            });
          return (0, s.jsx)("div", {
            className: i().wrapper,
            children: (0, s.jsx)(a.I, { playOnSpotifyClick: r, visible: t }),
          });
        };
    },
    5763: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return M;
          },
          default: function () {
            return _id_;
          },
        });
      var n = t(2674),
        a = t(234),
        o = t(1844),
        i = t(6809),
        s = t(846),
        c = t(7387),
        l = t.n(c),
        u = t(6596),
        p = t(3344),
        d = t(8471),
        _ = t(1676),
        C = t(1745),
        f = t(2442),
        v = t(7117),
        x = t(3260),
        y = t(3403),
        g = t(3562),
        b = t(5019),
        j = t(8678),
        h = t(1539),
        k = t(759),
        w = t(6321),
        m = t.n(w),
        P = t(2088),
        PlayerControlsProgressBarOnly = function () {
          var e = (0, o.useContext)(d.C).playbackState,
            r = !!(null == e ? void 0 : e.hasContext),
            t = (0, y.M)().isCompactLegacy;
          return (0, P.jsxs)("div", {
            className: l()(
              m().playerControlsWrapper,
              (0, n.Z)({}, m().hasPlaybackContext, r)
            ),
            children: [
              (0, P.jsxs)("div", {
                className: l()(m().baselineWrapper),
                children: [
                  (0, P.jsx)("div", {
                    className: l()(
                      m().progressBarWrapper,
                      m().liftUp,
                      (0, n.Z)({}, m().hasPlaybackContext, r)
                    ),
                    dir: "ltr",
                    children: (0, P.jsx)(h.Z, {}),
                  }),
                  (0, P.jsx)(k.r, {}),
                  t && (0, P.jsx)(g.E, {}),
                  (0, P.jsx)(b.c, {}),
                ],
              }),
              (0, P.jsx)("div", {
                className: l()(m().playButtonWrapper),
                children: (0, P.jsx)(j.r, {}),
              }),
            ],
          });
        },
        S = t(6634),
        O = t(9507),
        W = t(8129),
        N = t(1946),
        A = t(5346),
        B = t(2291),
        Z = t(184),
        T = t.n(Z),
        TrackWidget = function () {
          (0, p.p)();
          var e,
            r = (0, u.v9)(function (e) {
              return e.machineState.initialized;
            }),
            t = (0, u.v9)(function (e) {
              return e.machineState.playbackMode;
            }),
            a = (0, o.useContext)(d.C).playbackState,
            i = !!(null == a ? void 0 : a.hasContext),
            s = t === _.d.PREVIEW,
            c = i && !s,
            y = (0, u.v9)(function (e) {
              var r;
              return null === (r = e.data.entity) || void 0 === r
                ? void 0
                : r.uri;
            });
          return y
            ? (0, P.jsxs)("div", {
                "data-testid": "embed-widget-container",
                className: l()("encore-dark-theme", T().widgetContainer),
                children: [
                  (0, P.jsx)(f.W, {}),
                  (0, P.jsxs)("div", {
                    "data-testid": "initialized-".concat(r),
                    className: l()(
                      T().singleGridContainer,
                      (0, n.Z)({}, T().hasPlaybackContext, c)
                    ),
                    children: [
                      (0, P.jsx)("div", {
                        className: l()(
                          T().coverArtContainer,
                          (0, n.Z)({}, T().hasPlaybackContext, c)
                        ),
                        children: (0, P.jsx)(v.B, {
                          isPreview: s,
                          hasPlaybackContext: i,
                        }),
                      }),
                      (0, P.jsx)("div", {
                        className: T().spotifyLogoContainer,
                        children: (0, P.jsx)(O.Z, {}),
                      }),
                      (0, P.jsxs)("div", {
                        className: l()(
                          T().metadataWrapper,
                          ((e = {}),
                          (0, n.Z)(e, T().hasPlaybackContext, c),
                          (0, n.Z)(e, T().preview, s),
                          e)
                        ),
                        children: [
                          (0, P.jsx)(A.D, {}),
                          (0, P.jsxs)("span", {
                            className: l()(
                              T().labelsAndSubtitle,
                              (0, n.Z)({}, T().preview, s)
                            ),
                            children: [
                              (0, P.jsx)(W.$, {}),
                              (0, P.jsx)(N.Q, {}),
                            ],
                          }),
                          (0, P.jsx)(C.w, { uri: y, mainView: !0 }),
                        ],
                      }),
                      t !== _.d.UNKNOWN &&
                        (s
                          ? (0, P.jsx)(S.H, {})
                          : (0, P.jsx)(PlayerControlsProgressBarOnly, {})),
                    ],
                  }),
                  (0, P.jsx)(x.G, {}),
                  (0, P.jsx)(B.Q, {}),
                ],
              })
            : null;
        },
        D = t(6742),
        E = t(3363),
        G = t(2397);
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var M = !0,
        _id_ = function (e) {
          var r = (0, E.v)(e) ? e.rtl : e.state.settings.rtl;
          return (o.useEffect(
            function () {
              var e;
              null === (e = document.querySelector("html")) ||
                void 0 === e ||
                e.setAttribute("dir", r ? "rtl" : "ltr");
            },
            [r]
          ),
          (0, E.v)(e))
            ? (0, P.jsxs)(P.Fragment, {
                children: [
                  (0, P.jsx)(a.xB, { styles: G.ue }),
                  (0, P.jsx)(D.b, {
                    children: (0, P.jsx)(s.Z, _objectSpread({}, e)),
                  }),
                ],
              })
            : (0, P.jsx)(
                i.g,
                _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { children: (0, P.jsx)(TrackWidget, {}) }
                )
              );
        };
    },
    9810: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/track/[id]",
        function () {
          return t(5763);
        },
      ]);
    },
    1318: function (e) {
      e.exports = {
        backgroundColorContainer:
          "BackgroundColorContainer_backgroundColorContainer__YZSQ7",
      };
    },
    3939: function (e) {
      e.exports = {
        coverArtSingle: "CoverArtSingle_coverArtSingle__KLcKa",
        scaleDownCoverArt: "CoverArtSingle_scaleDownCoverArt__xWqrS",
      };
    },
    4493: function (e) {
      e.exports = {
        wrapper: "OverflowMenuSingle_wrapper__1m1hM",
        menuItem: "OverflowMenuSingle_menuItem__BSbDk",
      };
    },
    6321: function (e) {
      e.exports = {
        playerControlsWrapper: "PlayerControls_playerControlsWrapper__eaDbG",
        hasPlaybackContext: "PlayerControls_hasPlaybackContext__jaGyB",
        baselineWrapper: "PlayerControls_baselineWrapper__rDAnZ",
        progressBarWrapper: "PlayerControls_progressBarWrapper__Twz28",
        liftUp: "PlayerControls_liftUp__OPuJC",
        playButtonWrapper: "PlayerControls_playButtonWrapper__4IRvr",
      };
    },
    184: function (e) {
      e.exports = {
        widgetContainer: "TrackWidget_widgetContainer__gADzr",
        singleGridContainer: "TrackWidget_singleGridContainer__iYPj8",
        coverArtContainer: "TrackWidget_coverArtContainer__YVwp8",
        hasPlaybackContext: "TrackWidget_hasPlaybackContext__YVVG2",
        spotifyLogoContainer: "TrackWidget_spotifyLogoContainer__9m41A",
        metadataWrapper: "TrackWidget_metadataWrapper__GzypS",
        preview: "TrackWidget_preview__8DxyA",
        labelsAndSubtitle: "TrackWidget_labelsAndSubtitle__nBrZb",
      };
    },
  },
  function (e) {
    e.O(0, [714, 594, 291, 113, 774, 888, 179], function () {
      return e((e.s = 9810));
    }),
      (_N_E = e.O());
  },
]);
