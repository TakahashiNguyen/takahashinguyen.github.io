!(function () {
  "use strict";
  var e,
    r,
    _,
    t,
    n,
    i,
    u,
    c,
    o,
    a = {},
    f = {};
  function __webpack_require__(e) {
    var r = f[e];
    if (void 0 !== r) return r.exports;
    var _ = (f[e] = { id: e, loaded: !1, exports: {} }),
      t = !0;
    try {
      a[e].call(_.exports, _, _.exports, __webpack_require__), (t = !1);
    } finally {
      t && delete f[e];
    }
    return (_.loaded = !0), _.exports;
  }
  (__webpack_require__.m = a),
    (e = []),
    (__webpack_require__.O = function (r, _, t, n) {
      if (_) {
        n = n || 0;
        for (var i = e.length; i > 0 && e[i - 1][2] > n; i--) e[i] = e[i - 1];
        e[i] = [_, t, n];
        return;
      }
      for (var u = 1 / 0, i = 0; i < e.length; i++) {
        for (
          var _ = e[i][0], t = e[i][1], n = e[i][2], c = !0, o = 0;
          o < _.length;
          o++
        )
          u >= n &&
          Object.keys(__webpack_require__.O).every(function (e) {
            return __webpack_require__.O[e](_[o]);
          })
            ? _.splice(o--, 1)
            : ((c = !1), n < u && (u = n));
        if (c) {
          e.splice(i--, 1);
          var a = t();
        }
      }
      return a;
    }),
    (__webpack_require__.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return __webpack_require__.d(r, { a: r }), r;
    }),
    (_ = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (__webpack_require__.t = function (e, t) {
      if (
        (1 & t && (e = this(e)),
        8 & t ||
          ("object" == typeof e &&
            e &&
            ((4 & t && e.__esModule) ||
              (16 & t && "function" == typeof e.then))))
      )
        return e;
      var n = Object.create(null);
      __webpack_require__.r(n);
      var i = {};
      r = r || [null, _({}), _([]), _(_)];
      for (var u = 2 & t && e; "object" == typeof u && !~r.indexOf(u); u = _(u))
        Object.getOwnPropertyNames(u).forEach(function (r) {
          i[r] = function () {
            return e[r];
          };
        });
      return (
        (i.default = function () {
          return e;
        }),
        __webpack_require__.d(n, i),
        n
      );
    }),
    (__webpack_require__.d = function (e, r) {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, { enumerable: !0, get: r[_] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = function (e) {
      return Promise.all(
        Object.keys(__webpack_require__.f).reduce(function (r, _) {
          return __webpack_require__.f[_](e, r), r;
        }, [])
      );
    }),
    (__webpack_require__.u = function (e) {
      return (
        "static/chunks/" +
        ({ 446: "spotify_player_h", 768: "spotify_player_o" }[e] || e) +
        "." +
        {
          66: "85c463d9d3ad6236",
          256: "bed528a9d100562c",
          369: "2469e2f29ca912f2",
          446: "3bbc66007183fd5b",
          520: "b26d42f2254c3459",
          536: "905e6d5c206e107e",
          768: "2e9b5ce8bf41889e",
          862: "85762e0101c71a89",
          882: "407d120c9582a45a",
        }[e] +
        ".js"
      );
    }),
    (__webpack_require__.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          94: "3802f0f0fdd596bb",
          113: "eca7d5f16634bbc3",
          305: "41653a61a18e6a13",
          370: "41653a61a18e6a13",
          463: "364d0cc114e2dc9d",
          606: "3802f0f0fdd596bb",
          847: "3802f0f0fdd596bb",
          856: "de096cd47ec6679d",
          888: "461cd0504da4fff1",
        }[e] +
        ".css"
      );
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (__webpack_require__.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t = {}),
    (n = "_N_E:"),
    (__webpack_require__.l = function (e, r, _, i) {
      if (t[e]) {
        t[e].push(r);
        return;
      }
      if (void 0 !== _)
        for (
          var u, c, o = document.getElementsByTagName("script"), a = 0;
          a < o.length;
          a++
        ) {
          var f = o[a];
          if (
            f.getAttribute("src") == e ||
            f.getAttribute("data-webpack") == n + _
          ) {
            u = f;
            break;
          }
        }
      u ||
        ((c = !0),
        ((u = document.createElement("script")).charset = "utf-8"),
        (u.timeout = 120),
        __webpack_require__.nc &&
          u.setAttribute("nonce", __webpack_require__.nc),
        u.setAttribute("data-webpack", n + _),
        (u.src = __webpack_require__.tu(e))),
        (t[e] = [r]);
      var onScriptComplete = function (r, _) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var n = t[e];
          if (
            (delete t[e],
            u.parentNode && u.parentNode.removeChild(u),
            n &&
              n.forEach(function (e) {
                return e(_);
              }),
            r)
          )
            return r(_);
        },
        p = setTimeout(
          onScriptComplete.bind(null, void 0, { type: "timeout", target: u }),
          12e4
        );
      (u.onerror = onScriptComplete.bind(null, u.onerror)),
        (u.onload = onScriptComplete.bind(null, u.onload)),
        c && document.head.appendChild(u);
    }),
    (__webpack_require__.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (__webpack_require__.tt = function () {
      return (
        void 0 === i &&
          ((i = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (i = trustedTypes.createPolicy("nextjs#bundler", i))),
        i
      );
    }),
    (__webpack_require__.tu = function (e) {
      return __webpack_require__.tt().createScriptURL(e);
    }),
    (__webpack_require__.p = "https://embed-cdn.spotifycdn.com/_next/"),
    (u = { 272: 0 }),
    (__webpack_require__.f.j = function (e, r) {
      var _ = __webpack_require__.o(u, e) ? u[e] : void 0;
      if (0 !== _) {
        if (_) r.push(_[2]);
        else if (272 != e) {
          var t = new Promise(function (r, t) {
            _ = u[e] = [r, t];
          });
          r.push((_[2] = t));
          var n = __webpack_require__.p + __webpack_require__.u(e),
            i = Error();
          __webpack_require__.l(
            n,
            function (r) {
              if (
                __webpack_require__.o(u, e) &&
                (0 !== (_ = u[e]) && (u[e] = void 0), _)
              ) {
                var t = r && ("load" === r.type ? "missing" : r.type),
                  n = r && r.target && r.target.src;
                (i.message =
                  "Loading chunk " + e + " failed.\n(" + t + ": " + n + ")"),
                  (i.name = "ChunkLoadError"),
                  (i.type = t),
                  (i.request = n),
                  _[1](i);
              }
            },
            "chunk-" + e,
            e
          );
        } else u[e] = 0;
      }
    }),
    (__webpack_require__.O.j = function (e) {
      return 0 === u[e];
    }),
    (c = function (e, r) {
      var _,
        t,
        n = r[0],
        i = r[1],
        c = r[2],
        o = 0;
      if (
        n.some(function (e) {
          return 0 !== u[e];
        })
      ) {
        for (_ in i)
          __webpack_require__.o(i, _) && (__webpack_require__.m[_] = i[_]);
        if (c) var a = c(__webpack_require__);
      }
      for (e && e(r); o < n.length; o++)
        (t = n[o]),
          __webpack_require__.o(u, t) && u[t] && u[t][0](),
          (u[t] = 0);
      return __webpack_require__.O(a);
    }),
    (o = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      c.bind(null, 0)
    ),
    (o.push = c.bind(null, o.push.bind(o))),
    (__webpack_require__.nc = void 0);
})();
