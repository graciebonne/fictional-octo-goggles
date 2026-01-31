(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  489761,
  (e) => {
    "use strict";
    function r(e) {
      return t(e.query);
    }
    function t(e) {
      var r;
      return "string" == typeof e
        ? e
        : (null == (r = e.definitions[0].name) ? void 0 : r.value) || "Unknown";
    }
    function n(e) {
      var r;
      return ""
        .concat(t(e.query), "-")
        .concat(JSON.stringify(null != (r = e.variables) ? r : {}));
    }
    e.s(["getOperationName", () => r, "getSubscriptionId", () => n]);
  },
  301520,
  (e) => {
    "use strict";
    e.s(["registerUrql", () => t]);
    var r = e.i(969498);
    function t(e) {
      return { getClient: r.cache(e) };
    }
  },
  269730,
  329143,
  469712,
  (e) => {
    "use strict";
    e.s(["apqExchange", () => c], 269730), e.i(832701);
    var r,
      t = e.i(892927),
      n = e.i(974728),
      o = e.i(968032),
      o = o,
      a =
        "undefined" != typeof window
          ? window.crypto
          : "undefined" != typeof self
          ? self.crypto
          : null,
      i = async (t) =>
        a && a.subtle
          ? new Uint8Array(
              await a.subtle.digest(
                { name: "SHA-256" },
                new TextEncoder().encode(t)
              )
            ).reduce((e, r) => e + r.toString(16).padStart(2, "0"), "")
          : (await (async () => {
              if (!r)
                try {
                  r = Function("require", 'return require("crypto")')(e.z);
                } catch (e) {
                  try {
                    r = Function('return import("crypto")')();
                  } catch (e) {}
                }
              return r;
            })())
          ? (await r).createHash("sha256").update(t).digest("hex")
          : "";
    let s = (function (e) {
        let r = {},
          t = Object.keys(e);
        for (let n = 0; n < t.length; n++) {
          let o = t[n];
          r[e[o]] = o;
        }
        return r;
      })(e.i(943709).default),
      l = async (e) => s[e],
      c = ((e) => (r) => {
        let { forward: a } = r;
        e || (e = {});
        var s =
            null != e.preferGetForPersistedQueries
              ? e.preferGetForPersistedQueries
              : "within-url-limit",
          l = !!e.enforcePersistedQueries,
          c = e.generateHash || i,
          u = !!e.enableForMutation,
          d = !!e.enableForSubscriptions,
          p = !0,
          h = (e) =>
            p &&
            !e.context.persistAttempt &&
            ((u && "mutation" === e.kind) ||
              (d && "subscription" === e.kind) ||
              "query" === e.kind);
        return (e) => {
          var r = (0, t.makeSubject)(),
            i = (0, t.filter)((e) => !h(e))(e),
            u = (0, t.mergeMap)((r) => {
              var a = (async (e) => {
                var r = (0, n.makeOperation)(e.kind, e, {
                    ...e.context,
                    persistAttempt: !0,
                  }),
                  t = await c((0, o.s)(e.query), e.query);
                return (
                  t &&
                    ((r.extensions = {
                      ...r.extensions,
                      persistedQuery: { version: 1, sha256Hash: t },
                    }),
                    "query" === r.kind && (r.context.preferGetMethod = s)),
                  r
                );
              })(r);
              return (0, t.takeUntil)(
                (0, t.filter)((e) => "teardown" === e.kind && e.key === r.key)(
                  e
                )
              )((0, t.fromPromise)(a));
            })((0, t.filter)(h)(e));
          return (0, t.filter)((e) => !!e)(
            (0, t.map)((e) => {
              if (
                !l &&
                e.operation.extensions &&
                e.operation.extensions.persistedQuery
              ) {
                if (
                  e.error &&
                  e.error.graphQLErrors.some(
                    (e) => "PersistedQueryNotSupported" === e.message
                  )
                ) {
                  p = !1;
                  var t = (0, n.makeOperation)(e.operation.kind, e.operation);
                  return (
                    t.extensions && delete t.extensions.persistedQuery,
                    r.next(t),
                    null
                  );
                } else if (
                  e.error &&
                  e.error.graphQLErrors.some(
                    (e) => "PersistedQueryNotFound" === e.message
                  )
                ) {
                  if (e.operation.extensions.persistedQuery.miss) return e;
                  var o = (0, n.makeOperation)(e.operation.kind, e.operation);
                  return (
                    (o.extensions = {
                      ...o.extensions,
                      persistedQuery: {
                        ...(o.extensions || {}).persistedQuery,
                        miss: !0,
                      },
                    }),
                    r.next(o),
                    null
                  );
                }
              }
              return e;
            })(a((0, t.merge)([u, i, r.source])))
          );
        };
      })({ generateHash: (e) => l(e), preferGetForPersistedQueries: !1 });
    e.s(["errorExchange", () => d], 329143);
    var u = e.i(489761);
    let d = (e) =>
      (0, n.mapExchange)({
        onError: (r, t) => {
          var n;
          let o = (0, u.getOperationName)(t);
          e(r, {
            operationName: o,
            query:
              (null == (n = t.query.loc) ? void 0 : n.source.body) ||
              "Error parsing query",
            variables: t.variables || {},
            kind: t.kind,
          });
        },
      });
    e.s(["operationTypeExchange", () => h], 469712);
    let p = "x-graphql-operation-type",
      h = () => (e) => {
        let { forward: r } = e;
        return (e) =>
          r(
            (0, t.pipe)(
              e,
              (0, t.map)((e) => {
                if ("teardown" === e.kind) return e;
                let r = e.context.fetchOptions,
                  t =
                    "function" == typeof r
                      ? () => {
                          let t = r();
                          return {
                            ...t,
                            headers: {
                              ...(null == t ? void 0 : t.headers),
                              [p]: e.kind,
                            },
                          };
                        }
                      : {
                          ...r,
                          headers: {
                            ...(null == r ? void 0 : r.headers),
                            [p]: e.kind,
                          },
                        };
                return { ...e, context: { ...e.context, fetchOptions: t } };
              })
            )
          );
      };
  },
  425149,
  (e) => {
    "use strict";
    e.s([
      "GRAPHQL_API_URL",
      () => n,
      "GRAPHQL_HEADERS",
      () => l,
      "GRAPHQL_WS_URL",
      () => o,
    ]);
    var r = e.i(832701),
      t = e.i(506291);
    let n = t.GRAPHQL_API_URL.toString(),
      o = "".concat(t.GRAPHQL_WS_BASE_URL, "/subscriptions"),
      a = r.default.env.GRAPHQL_API_KEY,
      i = r.default.env.GRAPHQL_CF_ACCESS_ID,
      s = r.default.env.GRAPHQL_CF_ACCESS_SECRET,
      l = {
        "x-app-id": "os2-web",
        ...(a ? { "x-api-key": a } : {}),
        ...(i ? { "CF-Access-Client-Id": i } : {}),
        ...(s ? { "CF-Access-Client-Secret": s } : {}),
      };
  },
  431876,
  (e) => {
    "use strict";
    e.s(
      [
        "apolloErrorHandler",
        () => k,
        "errorHandler",
        () => g,
        "extractGraphQlErrorMessage",
        () => E,
        "extractPath",
        () => p,
        "extractTraceId",
        () => d,
        "getDatadogTraceLink",
        () => P,
      ],
      431876
    );
    var r = e.i(868275),
      t = e.i(974728),
      n = e.i(301520);
    e.i(528198);
    var o = e.i(269730),
      a = e.i(329143),
      i = e.i(469712),
      s = e.i(425149),
      l = e.i(358256),
      c = e.i(397879),
      u = e.i(586066);
    let d = (e) => {
        var r, t;
        let n = h(e);
        return null == n ||
          null == (t = n.debugInfo) ||
          null == (r = t.additionalInformation)
          ? void 0
          : r["x-trace-id"];
      },
      p = (e) => JSON.stringify(f(e)),
      h = (e) => {
        var r;
        if (m(e))
          return null == (r = e.graphQLErrors[0]) ? void 0 : r.extensions;
      },
      f = (e) => {
        var r;
        if (m(e)) return null == (r = e.graphQLErrors[0]) ? void 0 : r.path;
      },
      m = (e) => "CombinedError" === e.name,
      g = (e, r) => {
        (0, u.trackError)(e);
        let t = e.response,
          n = null == t ? void 0 : t.headers.get("x-trace-id");
        (0, c.withScope)((t) => {
          let { operationName: o, query: a, variables: i, kind: s } = r;
          if (
            (t.setTags({
              "error.type": "graphql.error",
              "graphql.operation.name": o,
              "graphql.operation.kind": s,
            }),
            t.setExtras({
              "graphql.query": a,
              "graphql.variables": i,
              "x-trace-id": n,
              "x-trace-link": n ? P(n) : void 0,
            }),
            "subscription" === s)
          ) {
            let [r, t] = (function (e) {
              var r;
              let t = e.networkError;
              if (
                !((r = e).graphQLErrors && r.graphQLErrors.length > 0
                  ? w(r)
                  : !r.networkError || b(r.networkError))
              )
                return ["[Filtered]", null != t ? t : e];
              if (t) {
                let r = new x(
                  y(t)
                    ? t.reason || t.message || e.message
                    : t.message || e.message,
                  { cause: t }
                );
                return y(t)
                  ? [
                      (0, l.captureException)(r, {
                        tags: {
                          "graphql.subscription.close.wasClean": t.wasClean,
                          "graphql.subscription.close.code": t.code,
                        },
                      }),
                      t,
                    ]
                  : [(0, l.captureException)(r), t];
              }
              let n = new x(e.message, { cause: e });
              return [(0, l.captureException)(n), e];
            })(e);
            console.error(
              "".concat(o, " Error ID: ").concat(r),
              JSON.stringify(t, Object.getOwnPropertyNames(t))
            );
          } else {
            let r = !(function (e) {
              return e.graphQLErrors && e.graphQLErrors.length > 0
                ? w(e)
                : !e.networkError || v(e.networkError);
            })(e)
              ? "[Filtered]"
              : (0, l.captureException)(e);
            console.error(
              ""
                .concat(o, " Error ID: ")
                .concat(r, ".")
                .concat(n ? " Trace ID: ".concat(n, ".") : "")
                .concat(" href: ".concat(window.location.href, ".")),
              JSON.stringify(
                e.networkError || e,
                Object.getOwnPropertyNames(e.networkError || e)
              )
            );
          }
        });
      };
    class x extends Error {
      constructor(...e) {
        super(...e), (0, r._)(this, "name", "GraphQLSubscriptionError");
      }
    }
    function y(e) {
      return "close" === e.type && "reason" in e;
    }
    function w(e) {
      return (
        !!e.graphQLErrors &&
        e.graphQLErrors.length > 0 &&
        e.graphQLErrors.some((e) => "Something went wrong" !== e.message)
      );
    }
    function v(e) {
      let r = e.message;
      if (!r || "undefined" === r || "" === r.trim()) return !1;
      let t = r.toLowerCase();
      return ![
        "network error",
        "offline",
        "no internet",
        "load failed",
        "failed to fetch",
        "NetworkError when attempting to fetch resource.",
      ].some((e) => t.includes(e));
    }
    function b(e) {
      return y(e) ? ![1e3, 1001, 1005].includes(e.code) : v(e);
    }
    let E = (e) => {
        var r, t;
        if (((e) => "object" == typeof e && null !== e && "message" in e)(e))
          return (
            (m(e) &&
              ((null == (r = e.networkError) ? void 0 : r.message) ||
                (null == (t = e.graphQLErrors[0]) ? void 0 : t.message))) ||
            e.message
          );
      },
      k = (e, r) => {
        var t;
        let n = null != (t = e.networkError) ? t : Error(e.message);
        (0, u.trackError)(n),
          (0, c.withScope)((t) => {
            let { operationName: o, query: a, variables: i, kind: s } = r;
            t.setTags({
              "error.type": "graphql.error",
              "graphql.operation.name": o,
              "graphql.operation.kind": s,
            }),
              t.setExtras({ "graphql.query": a, "graphql.variables": i });
            let c = (function (e, r) {
              return e.graphQLErrors && e.graphQLErrors.length > 0
                ? e.graphQLErrors.some(
                    (e) => "Something went wrong" !== e.message
                  )
                : !e.networkError ||
                    ("subscription" === r
                      ? b(e.networkError)
                      : v(e.networkError));
            })(e, s);
            if ("subscription" === s) {
              let r = c ? (0, l.captureException)(n) : "[Filtered]";
              console.error(
                "".concat(o, " Error ID: ").concat(r),
                JSON.stringify(e, Object.getOwnPropertyNames(e))
              );
            } else {
              let r = c ? (0, l.captureException)(n) : "[Filtered]";
              console.error(
                ""
                  .concat(o, " Error ID: ")
                  .concat(r, ".")
                  .concat(" href: ".concat(window.location.href, ".")),
                JSON.stringify(
                  e.networkError || e,
                  Object.getOwnPropertyNames(e.networkError || e)
                )
              );
            }
          });
      },
      { getClient: S } = ((e) =>
        (0, n.registerUrql)(() =>
          (0, t.createClient)({
            suspense: !0,
            url: s.GRAPHQL_API_URL,
            preferGetMethod: !1,
            exchanges: [
              (0, a.errorExchange)(e),
              t.cacheExchange,
              o.apqExchange,
              (0, i.operationTypeExchange)(),
              t.fetchExchange,
            ],
            fetchOptions: { headers: s.GRAPHQL_HEADERS },
          })
        ))(g),
      P = (e) => "https://app.datadoghq.com/apm/traces?traceID=".concat(e);
  },
  151955,
  620363,
  (e) => {
    "use strict";
    e.s(["default", () => b], 151955);
    var r = e.i(705378),
      t = e.i(590268),
      n = e.i(502732),
      o = e.i(254842),
      a = e.i(965523),
      i = e.i(999258),
      s = e.i(950293);
    e.s(["default", () => h], 620363);
    var l = e.i(969498);
    let c = "os2_offline_best_score";
    function u(e, r, t) {
      return Math.max(e, Math.min(r, t));
    }
    function d() {
      return Date.now();
    }
    function p(e, r) {
      return (
        e.x < r.x + r.w && e.x + e.w > r.x && e.y < r.y + r.h && e.y + e.h > r.y
      );
    }
    let h = function (e) {
      let { message: t } = e,
        i = (0, l.useRef)(null),
        s = (0, l.useRef)(null),
        h = (0, l.useRef)(d()),
        [f, m] = (0, l.useState)("running"),
        [g, x] = (0, l.useState)(0),
        [y, w] = (0, l.useState)(0),
        v = (0, l.useRef)(0),
        {
          groundY: b,
          gravity: E,
          jumpVelocity: k,
          startSpeed: S,
          maxSpeed: P,
        } = (0, l.useMemo)(
          () => ({
            groundY: 308,
            gravity: 0.8,
            jumpVelocity: -12,
            startSpeed: 6,
            maxSpeed: 14,
          }),
          []
        ),
        j = (0, l.useRef)(S),
        R = (0, l.useRef)({
          x: 60,
          y: b - 28,
          w: 46,
          h: 28,
          vy: 0,
          onGround: !0,
          blinkAt: d() + 1500 + 2e3 * Math.random(),
          bobToggleAt: d() + 150,
          bobUp: !1,
        }),
        T = (0, l.useRef)([]),
        A = (0, l.useRef)([]),
        L = (0, l.useRef)(d() + 1200),
        N = (0, l.useRef)(d() + 1700);
      (0, l.useEffect)(() => {
        try {
          let e = localStorage.getItem(c);
          e && w(Number(e) || 0);
        } catch (e) {}
      }, []);
      let Q = (0, l.useCallback)(() => {
          x(0),
            (v.current = 0),
            (j.current = S),
            m("running"),
            (R.current = {
              x: 60,
              y: b - 28,
              w: 46,
              h: 28,
              vy: 0,
              onGround: !0,
              blinkAt: d() + 1500 + 2e3 * Math.random(),
              bobToggleAt: d() + 150,
              bobUp: !1,
            }),
            (T.current = []),
            (A.current = []),
            (L.current = d() + 1200),
            (N.current = d() + 1700);
        }, [b, S]),
        q = (0, l.useCallback)(() => {
          if ("running" !== f) return;
          let e = R.current;
          e.onGround && ((e.vy = k), (e.onGround = !1));
        }, [k, f]);
      (0, l.useEffect)(() => {
        let e = (e) => {
          "Space" === e.code || "ArrowUp" === e.code
            ? (e.preventDefault(), q())
            : "r" === e.key.toLowerCase() && (e.preventDefault(), Q());
        };
        window.addEventListener("keydown", e, { passive: !1 });
        let r = i.current,
          t = () => q();
        return (
          null == r || r.addEventListener("pointerdown", t),
          () => {
            window.removeEventListener("keydown", e),
              null == r || r.removeEventListener("pointerdown", t);
          }
        );
      }, [q, Q]),
        (0, l.useEffect)(() => {
          let e = i.current;
          if (!e) return;
          let r = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
          (e.width = Math.floor(960 * r)),
            (e.height = Math.floor(360 * r)),
            (e.style.width = "".concat(960, "px")),
            (e.style.height = "".concat(360, "px")),
            e.getContext("2d").setTransform(r, 0, 0, r, 0, 0);
        }, []);
      let M = (0, l.useCallback)((e) => {
          m("gameover"),
            w((r) => {
              let t = Math.max(r, e);
              try {
                localStorage.setItem(c, String(t));
              } catch (e) {}
              return t;
            });
        }, []),
        C = (e, r) => {
          (e.fillStyle = "#000000"),
            "barrel" === r.type
              ? e.fillRect(r.x, r.y, r.w, r.h)
              : "wave" === r.type || "large-wave" === r.type
              ? (e.beginPath(),
                e.moveTo(r.x, r.y + r.h),
                e.lineTo(r.x + r.w / 2, r.y),
                e.lineTo(r.x + r.w, r.y + r.h),
                e.closePath(),
                e.fill())
              : "monster" === r.type
              ? (e.beginPath(),
                e.arc(r.x + r.w / 2, r.y + r.h, r.w / 2, Math.PI, 0),
                e.fill())
              : "squid" === r.type &&
                (e.fillRect(r.x + r.w / 2 - 2, r.y, 4, r.h),
                e.beginPath(),
                e.arc(r.x + r.w / 2, r.y, 6, 0, Math.PI, !0),
                e.fill());
        },
        I = (e, r) => {
          (e.fillStyle = "#000000"),
            "pearl" === r.type
              ? (e.beginPath(),
                e.arc(
                  r.x + r.w / 2,
                  r.y + r.h / 2,
                  Math.min(r.w, r.h) / 2,
                  0,
                  2 * Math.PI
                ),
                e.fill())
              : "shell" === r.type
              ? (e.beginPath(),
                e.moveTo(r.x, r.y + r.h),
                e.lineTo(r.x + r.w, r.y + r.h),
                e.lineTo(r.x + r.w / 2, r.y),
                e.closePath(),
                e.fill())
              : "chest" === r.type
              ? e.fillRect(r.x, r.y + r.h / 4, r.w, (3 * r.h) / 4)
              : "bottle" === r.type &&
                (e.fillRect(r.x + r.w / 2 - 2, r.y, 4, r.h - 6),
                e.fillRect(r.x + 3, r.y + r.h - 6, r.w - 6, 6));
        };
      return (
        (0, l.useEffect)(() => {
          let e = i.current;
          if (!e) return;
          let r = e.getContext("2d"),
            t = () => {
              let e = d(),
                n = e - h.current;
              for (let t of ((h.current = e),
              "running" === f &&
                ((e) => {
                  let r = R.current,
                    t = j.current,
                    n = e / 16.6667;
                  if (
                    ((j.current = u(S, t + 9e-4 * e, P)),
                    (r.vy += E * n),
                    (r.y += r.vy),
                    r.y + r.h >= b
                      ? ((r.y = b - r.h), (r.vy = 0), (r.onGround = !0))
                      : (r.onGround = !1),
                    d() > r.blinkAt + 180 &&
                      (r.blinkAt = d() + 1800 + 2600 * Math.random()),
                    r.onGround &&
                      d() > r.bobToggleAt &&
                      ((r.bobToggleAt = d() + 150), (r.bobUp = !r.bobUp)),
                    d() > L.current)
                  ) {
                    let e = Math.random(),
                      r = g > 500,
                      n =
                        e < 0.35
                          ? "barrel"
                          : e < 0.6
                          ? "wave"
                          : e < 0.8
                          ? "monster"
                          : r && e > 0.9
                          ? "large-wave"
                          : "squid",
                      o =
                        "barrel" === n
                          ? 22
                          : "wave" === n
                          ? 34
                          : "monster" === n
                          ? 40
                          : "large-wave" === n
                          ? 60
                          : 46;
                    T.current.push({
                      type: n,
                      x: 970,
                      y: b - o,
                      w:
                        "barrel" === n
                          ? 18
                          : "wave" === n
                          ? 26
                          : "large-wave" === n
                          ? 38
                          : 22,
                      h: o,
                      speed: t + (1.5 * Math.random() - 0.5),
                    });
                    let a = u(350, 1200 - 30 * t + 300 * Math.random(), 1200);
                    L.current = d() + u(550, a, 1200);
                  }
                  if (d() > N.current) {
                    let e = ["pearl", "shell", "chest", "bottle"][
                        Math.floor(4 * Math.random())
                      ],
                      r = b - 60 - 60 * Math.random();
                    A.current.push({
                      type: e,
                      x: 970,
                      y: r,
                      w: 16,
                      h: 16,
                      speed: t - 0.5,
                    }),
                      (N.current = d() + 2200 + 1800 * Math.random());
                  }
                  (T.current = T.current
                    .map((e) => ({ ...e, x: e.x - e.speed }))
                    .filter((e) => e.x + e.w > -40)),
                    (A.current = A.current
                      .map((e) => ({ ...e, x: e.x - e.speed }))
                      .filter((e) => e.x + e.w > -40));
                  let o = 0;
                  A.current = A.current.filter(
                    (e) => !p(R.current, e) || ((o += 25), !1)
                  );
                  let a = Math.floor(1 + n * (0.2 + 0.02 * t)) + o;
                  for (let e of ((v.current += a), x(v.current), T.current))
                    if (p(R.current, e)) {
                      M(v.current);
                      break;
                    }
                })(n),
              (r.fillStyle = "#ffffff"),
              r.fillRect(0, 0, 960, 360),
              (r.fillStyle = "#f2f6ff"),
              r.fillRect(0, b + 20, 960, 360 - (b + 20)),
              (r.strokeStyle = "#000000"),
              (r.lineWidth = 3),
              r.beginPath(),
              r.moveTo(0, b),
              r.lineTo(960, b),
              r.stroke(),
              ((e, r) => {
                let t = r.x,
                  n = r.y,
                  o = r.w,
                  a = r.h;
                (e.fillStyle = "#000000"),
                  e.beginPath(),
                  e.moveTo(t, n + a - 2),
                  e.lineTo(t + o, n + a - 2),
                  e.lineTo(t + o - 8, n + a - 10),
                  e.lineTo(t + 8, n + a - 10),
                  e.closePath(),
                  e.fill(),
                  e.fillRect(t + o / 2 - 1, n + 4, 2, a - 12);
                let i = r.onGround && r.bobUp ? -2 : 0;
                (e.fillStyle = "#000000"),
                  e.beginPath(),
                  e.moveTo(t + o / 2, n + 6 + i),
                  e.lineTo(t + o / 2, n + a - 12 + i),
                  e.lineTo(t + o - 6, n + a - 12 + i),
                  e.closePath(),
                  e.fill(),
                  (e.fillStyle =
                    R.current.onGround && d() < R.current.blinkAt + 120
                      ? "#000000"
                      : "#ffffff"),
                  e.fillRect(t + 10, n + a - 16, 3, 3),
                  e.fillRect(t + 15, n + a - 16, 3, 3);
              })(r, R.current),
              T.current))
                C(r, t);
              for (let e of A.current) I(r, e);
              (r.fillStyle = "#000000"),
                (r.font =
                  "16px ui-monospace, SFMono-Regular, Menlo, monospace"),
                r.fillText("Score: ".concat(g), 16, 28),
                r.fillText("Best: ".concat(y), 840, 28),
                (s.current = window.requestAnimationFrame(t));
            };
          return (
            (s.current = window.requestAnimationFrame(t)),
            () => {
              null !== s.current && window.cancelAnimationFrame(s.current);
            }
          );
        }, [y, g, f]),
        (0, r.jsxs)(a.FlexColumn, {
          className: "w-full",
          children: [
            (0, r.jsxs)("div", {
              className: "mb-3 text-center",
              children: [
                (0, r.jsx)("h2", {
                  className: "font-bold text-2xl",
                  children: "OpenSea is offline",
                }),
                t
                  ? (0, r.jsx)("p", {
                      className: "mt-1 text-base",
                      children: t,
                    })
                  : (0, r.jsx)("p", {
                      className: "mt-1 text-sm",
                      children:
                        "Mono Runner — avoid obstacles, rack up points. Refresh anytime to try loading OpenSea.",
                    }),
              ],
            }),
            (0, r.jsxs)("div", {
              className:
                "mx-auto max-w-[960px] rounded-xl border border-black/80 p-2",
              children: [
                (0, r.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, r.jsx)("canvas", {
                      "aria-label": "Endless runner mini-game canvas",
                      className:
                        "block w-full cursor-pointer touch-none select-none bg-white",
                      ref: i,
                    }),
                    "gameover" === f &&
                      (0, r.jsx)("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center bg-white/80",
                        children: (0, r.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, r.jsx)("div", {
                              className: "mb-2 font-semibold text-lg",
                              children: "Game over",
                            }),
                            (0, r.jsxs)("div", {
                              className: "mb-4 text-sm",
                              children: ["Score ", g, " • Best ", y],
                            }),
                            (0, r.jsxs)(o.Flex, {
                              className: "items-center justify-center gap-3",
                              children: [
                                (0, r.jsx)(n.Button, {
                                  onClick: Q,
                                  variant: "secondary",
                                  children: "Play again (R)",
                                }),
                                (0, r.jsx)(n.Button, {
                                  onClick: () => window.location.reload(),
                                  variant: "primary",
                                  children: "Reload OpenSea",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mt-2 text-center text-xs",
                  children: "Space/↑ to jump · Tap/click to jump",
                }),
              ],
            }),
          ],
        })
      );
    };
    var f = e.i(597585),
      m = e.i(302502),
      g = e.i(150127),
      x = e.i(358256),
      y = e.i(530730),
      w = e.i(431876);
    let v = "prod-mainnet" !== f.ENVIRONMENT;
    function b(e) {
      let c,
        u,
        d,
        p,
        f,
        b = (0, t.c)(9),
        { error: E } = e;
      b[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { "error.severity": "oops" }), (b[0] = c))
        : (c = b[0]),
        b[1] !== E
          ? ((u = {
              error: E,
              tags: c,
              amplitudeEventName: "Error Page Impression",
            }),
            (b[1] = E),
            (b[2] = u))
          : (u = b[2]);
      let { errorId: k, traceId: S } = ((e) => {
        let r,
          n,
          o,
          a,
          i,
          s = (0, t.c)(15),
          { error: c, tags: u, amplitudeEventName: d } = e,
          [p, h] = (0, l.useState)(null);
        s[0] !== c
          ? ((r = (0, w.extractTraceId)(c)), (s[0] = c), (s[1] = r))
          : (r = s[1]);
        let f = r;
        s[2] !== c
          ? ((n = (0, w.extractPath)(c)), (s[2] = c), (s[3] = n))
          : (n = s[3]),
          s[4] !== n || s[5] !== f
            ? ((o = { "x-trace-id": f, "graphql.path": n }),
              (s[4] = n),
              (s[5] = f),
              (s[6] = o))
            : (o = s[6]);
        let v = o;
        return (
          s[7] !== d || s[8] !== c || s[9] !== v || s[10] !== u
            ? ((a = () => {
                console.error(c),
                  d && (0, m.track)(d, { error: c.message, ...v });
                let e = (0, y.readEventId)(c);
                if (e) return void h(e);
                let r = setTimeout(() => {
                  h(
                    (0, y.readEventId)(c) ||
                      (0, x.captureException)(c, { tags: { ...v, ...u } })
                  );
                }, 1e3);
                return () => {
                  clearTimeout(r);
                };
              }),
              (s[7] = d),
              (s[8] = c),
              (s[9] = v),
              (s[10] = u),
              (s[11] = a))
            : (a = s[11]),
          (0, g.useMountEffect)(a),
          s[12] !== p || s[13] !== f
            ? ((i = { errorId: p, traceId: f }),
              (s[12] = p),
              (s[13] = f),
              (s[14] = i))
            : (i = s[14]),
          i
        );
      })(u);
      return (
        b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsxs)(a.FlexColumn, {
              className: "min-h-screen items-center justify-center gap-4 py-4",
              children: [(0, r.jsx)(h, {}), (0, r.jsx)(i.Separator, {})],
            })),
            (b[3] = d))
          : (d = b[3]),
        b[4] !== k || b[5] !== S
          ? ((p =
              (k || S) &&
              (0, r.jsxs)("div", {
                className: "fixed right-4 bottom-4 space-y-2",
                children: [
                  k &&
                    (0, r.jsxs)(o.Flex, {
                      className: "items-center gap-2",
                      children: [
                        (0, r.jsxs)(s.TextBody, {
                          color: "warning",
                          size: "sm",
                          children: ["Error ID: ", k],
                        }),
                        v &&
                          (0, r.jsx)(n.Button, {
                            href: (0, y.getSentryIssueLink)(k),
                            size: "sm",
                            variant: "secondary",
                            children: "Sentry",
                          }),
                      ],
                    }),
                  S &&
                    (0, r.jsxs)(o.Flex, {
                      className: "items-center gap-2",
                      children: [
                        (0, r.jsxs)(s.TextBody, {
                          color: "warning",
                          size: "sm",
                          children: ["Trace ID: ", S],
                        }),
                        v &&
                          (0, r.jsx)(n.Button, {
                            href: (0, w.getDatadogTraceLink)(S),
                            size: "sm",
                            variant: "secondary",
                            children: "Datadog",
                          }),
                      ],
                    }),
                ],
              })),
            (b[4] = k),
            (b[5] = S),
            (b[6] = p))
          : (p = b[6]),
        b[7] !== p
          ? ((f = (0, r.jsxs)("main", {
              className: "relative min-h-screen select-text",
              children: [d, p],
            })),
            (b[7] = p),
            (b[8] = f))
          : (f = b[8]),
        f
      );
    }
  },
  566083,
  (e) => {
    "use strict";
    e.s(["default", () => o]);
    var r = e.i(705378),
      t = e.i(590268),
      n = e.i(151955);
    function o(e) {
      let o,
        a = (0, t.c)(2),
        { error: i } = e;
      return (
        a[0] !== i
          ? ((o = (0, r.jsx)("html", {
              lang: "en",
              children: (0, r.jsx)("body", {
                children: (0, r.jsx)(n.default, { error: i }),
              }),
            })),
            (a[0] = i),
            (a[1] = o))
          : (o = a[1]),
        o
      );
    }
    e.i(620363);
  },
  825247,
  (e) => {
    e.v((r) =>
      Promise.all(
        [
          "static/chunks/82ecf8fe65f6ff20.js",
          "static/chunks/f0847d669427dc6f.js",
        ].map((r) => e.l(r))
      ).then(() => r(770407))
    );
  },
  734911,
  (e) => {
    e.v((r) =>
      Promise.all(
        [
          "static/chunks/b237f8b8b538d317.js",
          "static/chunks/ae91aed0b298bf8a.js",
        ].map((r) => e.l(r))
      ).then(() => r(178568))
    );
  },
]);
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "38c9c2b3-fd2a-5ef3-a93d-bc85133d4e61"));
  } catch (e) {}
})();
//# debugId=38c9c2b3-fd2a-5ef3-a93d-bc85133d4e61
