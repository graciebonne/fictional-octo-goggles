(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  276015,
  (e) => {
    "use strict";
    e.s(["ArrowDownward", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    let a = (e) => {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Arrow Downward",
              className: u,
              fill: g,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    };
  },
  199800,
  5805,
  (e) => {
    "use strict";
    e.s(
      [
        "extractMediaVariantFromDataUri",
        () => n,
        "fetchFileFromUrl",
        () => o,
        "formatAcceptedFormats",
        () => c,
        "formatFileSize",
        () => l,
        "getBytesFromMegabytes",
        () => a,
        "readFileAsDataURL",
        () => i,
        "uploadFile",
        () => s,
      ],
      199800
    ),
      e.s(["UploadProgress", () => r], 5805);
    var t = e.i(868275);
    class r {
      get percent() {
        return 0 === this.totalBytes
          ? 0
          : Math.round((this.bytesWritten / this.totalBytes) * 100);
      }
      constructor(e, r) {
        (0, t._)(this, "bytesWritten", void 0),
          (0, t._)(this, "totalBytes", void 0),
          (this.bytesWritten = e),
          (this.totalBytes = r);
      }
    }
    (0, t._)(r, "empty", new r(0, 0));
    let s = async (e, t, s, i) => {
        let a = new FormData(),
          l = JSON.parse(e.fields),
          n = t.type;
        if (!n)
          switch (t.name.split(".").pop()) {
            case "glb":
              n = "model/gltf-binary";
              break;
            case "gltf":
              n = "model/gltf+json";
          }
        for (let e of (a.append("Content-Type", n), Object.keys(l)))
          a.append(e, l[e]);
        return (
          a.append("file", t),
          new Promise((t, l) => {
            let n = new XMLHttpRequest();
            i &&
              i.signal.addEventListener("abort", () => {
                n.abort();
              }),
              s &&
                (n.upload.onprogress = (e) => {
                  e.lengthComputable && s(new r(e.loaded, e.total));
                }),
              (n.onload = () => {
                n.status >= 200 && n.status < 300
                  ? t({ token: e.token })
                  : l(Error(n.responseText || "HTTP ".concat(n.status)));
              }),
              (n.onerror = () => {
                l(Error("Network error occurred"));
              }),
              (n.onabort = () => {
                l(Error("Upload aborted"));
              }),
              n.open(e.method, e.url),
              n.send(a);
          })
        );
      },
      i = (e) =>
        new Promise((t, r) => {
          let s = new FileReader();
          (s.onload = (e) => {
            var s;
            let i = null == (s = e.target) ? void 0 : s.result;
            "string" == typeof i
              ? t(i)
              : r(Error("Failed to read file as DataURL"));
          }),
            (s.onerror = () => r(Error("Error reading file"))),
            s.readAsDataURL(e);
        }),
      a = (e) => 1048576 * e,
      l = (e) =>
        0 === e
          ? "0 B"
          : e < 1024
          ? "".concat(e, " B")
          : e < 1048576
          ? "".concat(Number.parseFloat((e / 1024).toFixed(1)), " KB")
          : e < 0x40000000
          ? "".concat(Number.parseFloat((e / 1048576).toFixed(1)), " MB")
          : "".concat(Number.parseFloat((e / 0x40000000).toFixed(1)), " GB");
    function n(e) {
      if (!e.startsWith("data:")) return;
      let t = e.split(";");
      if (t.length < 2) return;
      let [r, s] = t[0].split(":")[1].split("/");
      switch (r) {
        case "video":
          return { type: "video", format: s };
        case "audio":
          return { type: "audio", format: s };
        case "model":
          return { type: "3d", format: s };
        case "text":
          if ("html" === s) return { type: "html" };
          break;
        case "image":
          return { type: "image", format: s };
        default:
          return;
      }
    }
    let o = async (e, t) => {
        try {
          let r = await fetch(e);
          if (!r.ok)
            throw Error("Failed to fetch image: ".concat(r.statusText));
          let s = await r.blob(),
            i = t;
          if (
            !i &&
            !(i = new URL(e).pathname.split("/").pop() || "image").includes(
              "."
            ) &&
            s.type
          ) {
            let e = s.type.split("/")[1];
            e && (i += ".".concat(e));
          }
          return new File([s], i, { type: s.type });
        } catch (e) {
          throw (console.error("Error converting URL to File:", e), e);
        }
      },
      c = (e) =>
        Object.values(e)
          .flat()
          .map((e) => e.replace(".", "").toUpperCase())
          .filter(
            (e, t, r) =>
              !("JPEG" === e && r.includes("JPG")) && r.indexOf(e) === t
          )
          .sort()
          .join(", ");
  },
  354667,
  (e) => {
    "use strict";
    e.s([
      "DropStatus",
      () => i,
      "MAX_MINTABLE_MAX",
      () => s,
      "MINT_FEED_TABLE_COLUMN_CLASSNAMES",
      () => l,
      "OPEN_EDITION_SUPPLY_THRESHOLD",
      () => r,
      "SALES_FEED_TABLE_COLUMN_CLASSNAMES",
      () => a,
      "collectionLogo",
      () => c,
      "csvUpload",
      () => u,
      "dropItemMedia",
      () => n,
      "selfMintMedia",
      () => o,
    ]);
    var t = e.i(199800);
    let r = 2e8,
      s = 65535;
    var i = (function (e) {
      return (
        (e.MINTING_SOON = "MINTING_SOON"),
        (e.MINTING = "MINTING"),
        (e.MINTED_OUT = "MINTED_OUT"),
        (e.MINT_ENDED = "MINT_ENDED"),
        e
      );
    })({});
    let a = {
        image: "w-36 shrink-0 grow-0 gap-3 first:pl-0",
        price: "w-16 shrink-0 grow justify-end",
        seller: "w-16 shrink-0 grow justify-end",
        timestamp: "w-16 shrink-0 grow justify-end last:pr-0",
      },
      l = {
        item: "w-48 shrink-0 grow-0 gap-3 first:pl-0",
        price: "w-16 shrink-0 grow justify-end",
        quantity: "w-6 shrink-0 grow justify-end",
        timestamp: "w-16 shrink-0 grow justify-end last:pr-0",
      },
      n = {
        maxFileSize: (0, t.getBytesFromMegabytes)(50),
        maxFileCount: 15e3,
        accept: {
          "image/jpeg": [".jpg", ".jpeg"],
          "image/png": [".png"],
          "image/svg+xml": [".svg"],
          "image/gif": [".gif"],
          "video/mp4": [".mp4"],
          "audio/mpeg": [".mp3"],
        },
      },
      o = {
        maxFileSize: (0, t.getBytesFromMegabytes)(50),
        accept: {
          "image/jpeg": [".jpg", ".jpeg"],
          "image/png": [".png"],
          "image/svg+xml": [".svg"],
          "image/gif": [".gif"],
          "video/mp4": [".mp4"],
          "audio/mpeg": [".mp3"],
        },
      },
      c = {
        maxFileSize: (0, t.getBytesFromMegabytes)(50),
        accept: {
          "image/jpeg": [".jpg", ".jpeg"],
          "image/png": [".png"],
          "image/svg+xml": [".svg"],
          "image/gif": [".gif"],
        },
      },
      u = {
        maxFileSize: (0, t.getBytesFromMegabytes)(10),
        accept: { "text/csv": [".csv"] },
      };
  },
  903057,
  (e) => {
    "use strict";
    e.s(["RefreshFilled", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    let a = (e) => {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Refresh",
              className: u,
              fill: g,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    };
  },
  794576,
  (e) => {
    "use strict";
    e.s(["Info", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    function a(e) {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Info",
              className: u,
              fill: g,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    }
  },
  541412,
  (e) => {
    "use strict";
    e.s(["usePlaySound", () => n], 541412);
    var t = e.i(590268),
      r = e.i(230834),
      s = e.i(969498);
    function i() {
      return (i = Object.assign.bind()).apply(null, arguments);
    }
    var a = [
        "id",
        "volume",
        "playbackRate",
        "soundEnabled",
        "interrupt",
        "onload",
      ],
      l = e.i(924457);
    function n(n) {
      var o,
        c,
        u,
        d,
        m,
        p,
        f,
        v,
        g,
        h,
        w,
        b,
        N,
        x,
        y,
        _,
        A,
        S,
        T,
        E,
        L,
        M,
        I,
        R;
      let j,
        C,
        q,
        U,
        P = (0, t.c)(8),
        { volume: V } = (0, l.useVolume)();
      P[0] !== V
        ? ((j = (0, l.soundOpts)(V)), (P[0] = V), (P[1] = j))
        : (j = P[1]);
      let O = j,
        [k] =
          ((u = void 0 === (c = (o = void 0 === O ? {} : O).volume) ? 1 : c),
          (m = void 0 === (d = o.playbackRate) ? 1 : d),
          (f = void 0 === (p = o.soundEnabled) || p),
          (g = void 0 !== (v = o.interrupt) && v),
          (h = o.onload),
          (w = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var s in e)
              if ({}.hasOwnProperty.call(e, s)) {
                if (t.indexOf(s) >= 0) continue;
                r[s] = e[s];
              }
            return r;
          })(o, a)),
          (b = s.default.useRef(null)),
          (N = s.default.useRef(!1)),
          (y = (x = s.default.useState(null))[0]),
          (_ = x[1]),
          (S = (A = s.default.useState(null))[0]),
          (T = A[1]),
          (E = function () {
            "function" == typeof h && h.call(this),
              N.current && _(1e3 * this.duration()),
              T(this);
          }),
          (L = function () {
            return (
              e.A(636480).then(function (e) {
                if (!N.current) {
                  var t;
                  (b.current = null != (t = e.Howl) ? t : e.default.Howl),
                    (N.current = !0),
                    new b.current(
                      i(
                        {
                          src: Array.isArray(n) ? n : [n],
                          volume: u,
                          rate: m,
                          onload: E,
                        },
                        w
                      )
                    );
                }
              }),
              function () {
                N.current = !1;
              }
            );
          }),
          (0, s.useEffect)(L, []),
          s.default.useEffect(
            function () {
              b.current &&
                S &&
                T(
                  new b.current(
                    i(
                      { src: Array.isArray(n) ? n : [n], volume: u, onload: E },
                      w
                    )
                  )
                );
            },
            [JSON.stringify(n)]
          ),
          s.default.useEffect(
            function () {
              S && (S.volume(u), S.rate(m));
            },
            [u, m]
          ),
          (M = s.default.useCallback(
            function (e) {
              void 0 === e && (e = {}),
                S &&
                  (f || e.forceSoundEnabled) &&
                  (g && S.stop(),
                  e.playbackRate && S.rate(e.playbackRate),
                  S.play(e.id));
            },
            [S, f, g]
          )),
          (I = s.default.useCallback(
            function (e) {
              S && S.stop(e);
            },
            [S]
          )),
          (R = s.default.useCallback(
            function (e) {
              S && S.pause(e);
            },
            [S]
          )),
          [M, { sound: S, stop: I, pause: R, duration: y }]);
      P[2] !== k || P[3] !== V
        ? ((C = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return "off" === V ? Promise.resolve() : k(...t);
          }),
          (P[2] = k),
          (P[3] = V),
          (P[4] = C))
        : (C = P[4]),
        P[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = { leading: !0, trailing: !1 }), (P[5] = q))
          : (q = P[5]);
      let B = (0, r.useDebounceCallback)(C, 300, q);
      return P[6] !== B ? ((U = [B]), (P[6] = B), (P[7] = U)) : (U = P[7]), U;
    }
  },
  861690,
  (e) => {
    "use strict";
    e.s(["Close", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    let a = (e) => {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Close",
              className: u,
              fill: g,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    };
  },
  261901,
  (e) => {
    "use strict";
    e.s(["inputVariants", () => n]);
    var t = e.i(471966),
      r = e.i(437153),
      s = e.i(618469),
      i = e.i(256416),
      a = e.i(271946),
      l = e.i(10340);
    let n = (0, t.tv)({
      extend: a.buttonLayoutVariants,
      base: "w-full text-md placeholder:text-text-secondary",
      variants: {
        variant: {
          default: (0, r.classNames)(
            "bg-bg-primary hover:bg-bg-secondary",
            (0, i.borderVariants)({ border: "border-1" })
          ),
          transparent: (0, r.classNames)(
            "bg-bg-primary-transparent hover:bg-bg-secondary-transparent-hover",
            (0, i.borderVariants)({ border: "border-1", transparent: !0 })
          ),
          frosted: (0, r.classNames)(
            (0, s.backgroundVariants)({
              background: "frosted",
              interactive: !0,
            }),
            (0, i.borderVariants)({ border: "frosted" })
          ),
          ghost: "px-0",
        },
        disabled: { true: (0, l.disabledVariants)({ disabled: !0 }) },
        error: { true: "border-error-1" },
        warning: { true: "border-warning" },
      },
      defaultVariants: { variant: "default" },
      compoundVariants: [
        { variant: "ghost", class: "px-0" },
        {
          variant: "ghost",
          error: !0,
          class: "text-error-1 [&_input]:placeholder:text-error-1",
        },
        { warning: !0, error: !0, class: "border-error-1" },
        { size: "sm", class: "px-3" },
        { size: "md", class: "px-3" },
        { size: "lg", class: "px-3" },
        { size: "sm", leftIcon: !0, class: "pl-2" },
        { size: "md", leftIcon: !0, class: "pl-3" },
        { size: "lg", leftIcon: !0, class: "pl-3" },
        { size: "sm", rightIcon: !0, class: "pr-2" },
        { size: "md", rightIcon: !0, class: "pr-3" },
        { size: "lg", rightIcon: !0, class: "pr-3" },
      ],
    });
  },
  284296,
  (e) => {
    "use strict";
    e.s(["Input", () => v, "InputEnhancerSeparator", () => h]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(705035),
      i = e.i(969498),
      a = e.i(861690),
      l = e.i(261901),
      n = e.i(437153),
      o = e.i(471966),
      c = e.i(254842),
      u = e.i(39771),
      d = e.i(999258),
      m = e.i(799119),
      p = e.i(457628),
      f = e.i(299349);
    function v(e) {
      var r, o, d;
      let {
          asChild: v,
          children: g,
          startEnhancer: h,
          endEnhancer: w,
          onKeyDown: b,
          clearable: N,
          clearOnEscape: x,
          className: y,
          style: _,
          inputRef: A,
          disabled: S,
          onClick: T,
          onMouseDown: E,
          onEnter: L,
          value: M,
          error: I,
          overrides: R,
          variant: j,
          size: C,
          warning: q,
          ...U
        } = e,
        { ref: P, ...V } = U,
        O = (0, i.useRef)(null),
        k = () => {
          let e = O.current;
          if (e) {
            var t;
            let r =
              null ==
              (t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
              ))
                ? void 0
                : t.set;
            r &&
              (r.call(e, ""),
              e.dispatchEvent(
                new Event("input", { bubbles: !0, cancelable: !0 })
              ));
          }
        },
        B = (0, i.useMemo)(() => {
          let e = [];
          return A && e.push(A), P && e.push(P), [O, ...e];
        }, [A, P]),
        F = v ? m.Slot : "input",
        H = N && ((null == (r = O.current) ? void 0 : r.value) || M);
      return (0, t.jsxs)(c.Flex, {
        className: (0, n.classNames)(
          (0, l.inputVariants)({
            disabled: S,
            error: I,
            warning: q,
            variant: j,
            leftIcon: !!h,
            rightIcon: !!(w || H),
            size: C,
          }),
          y
        ),
        onClick: (e) => {
          var t;
          null == (t = O.current) || t.focus(), null == T || T(e);
        },
        onMouseDown: E,
        style: _,
        ...(null == R ? void 0 : R.Container),
        children: [
          h
            ? (0, t.jsx)(u.FlexCenter, { className: "min-w-fit", children: h })
            : null,
          (0, t.jsx)(F, {
            "aria-invalid": I
              ? "true"
              : (
                  null == R || null == (o = R.Container)
                    ? void 0
                    : o["aria-controls"]
                )
              ? void 0
              : "false",
            disabled: S,
            onKeyDown: (e) => {
              if ((null == b || b(e), "Escape" === e.key)) {
                var t;
                null == (t = O.current) || t.blur(), x && k();
              }
              "Enter" === e.key &&
                (null == L || L(null != M ? M : e.currentTarget.value));
            },
            value: M,
            ...V,
            ...(null == R ? void 0 : R.Input),
            className: (0, n.classNames)(
              "text-md md:text-sm",
              "w-full border-0 bg-transparent outline-hidden placeholder:text-text-secondary",
              "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
              null == R || null == (d = R.Input) ? void 0 : d.className
            ),
            ref: (0, s.default)(...B),
            children: g,
          }),
          H &&
            (0, t.jsx)(f.VerticalAligned, {
              children: (0, t.jsx)(p.UnstyledButton, {
                onClick: k,
                children: (0, t.jsx)(a.Close, {
                  "aria-label": "Clear",
                  fill: "interactive-primary-styles",
                  size: 20,
                }),
              }),
            }),
          w
            ? (0, t.jsx)(u.FlexCenter, { className: "min-w-fit", children: w })
            : null,
        ],
      });
    }
    let g = (0, o.tv)({
        base: "h-[38px]",
        variants: { variant: { start: "ml-2", end: "mr-2" } },
      }),
      h = (e) => {
        let s,
          i,
          a = (0, r.c)(4),
          { variant: l } = e;
        return (
          a[0] !== l
            ? ((s = g({ variant: l })), (a[0] = l), (a[1] = s))
            : (s = a[1]),
          a[2] !== s
            ? ((i = (0, t.jsx)(d.Separator, {
                className: s,
                orientation: "vertical",
              })),
              (a[2] = s),
              (a[3] = i))
            : (i = a[3]),
          i
        );
      };
  },
  625236,
  (e) => {
    "use strict";
    e.s(["TextHeading", () => c, "TextHeadingSkeleton", () => d]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(471966),
      i = e.i(516741),
      a = e.i(437153),
      l = e.i(310578),
      n = e.i(799119);
    let o = (0, s.tv)({
      base: "font-medium leading-tight",
      variants: {
        size: {
          xs: "text-heading-xs",
          sm: "text-heading-sm",
          md: "text-heading-md",
          lg: "text-heading-lg",
        },
      },
    });
    function c(e) {
      let s,
        l,
        c,
        u,
        d,
        m,
        p,
        f = (0, r.c)(14);
      f[0] !== e
        ? (({ asChild: s, className: l, color: c, size: d, ...u } = e),
          (f[0] = e),
          (f[1] = s),
          (f[2] = l),
          (f[3] = c),
          (f[4] = u),
          (f[5] = d))
        : ((s = f[1]), (l = f[2]), (c = f[3]), (u = f[4]), (d = f[5]));
      let v = s ? n.Slot : "span";
      return (
        f[6] !== l || f[7] !== c || f[8] !== d
          ? ((m = (0, a.classNames)(
              o({ size: d }),
              (0, i.textColorVariants)({ color: c }),
              l
            )),
            (f[6] = l),
            (f[7] = c),
            (f[8] = d),
            (f[9] = m))
          : (m = f[9]),
        f[10] !== v || f[11] !== u || f[12] !== m
          ? ((p = (0, t.jsx)(v, { className: m, ...u })),
            (f[10] = v),
            (f[11] = u),
            (f[12] = m),
            (f[13] = p))
          : (p = f[13]),
        p
      );
    }
    let u = (0, s.tv)({
        variants: { size: { xs: "h-[18px]", sm: "h-5", md: "h-6", lg: "h-8" } },
      }),
      d = (e) => {
        let s,
          i,
          n,
          o,
          c,
          d = (0, r.c)(10);
        return (
          d[0] !== e
            ? (({ className: s, size: n, ...i } = e),
              (d[0] = e),
              (d[1] = s),
              (d[2] = i),
              (d[3] = n))
            : ((s = d[1]), (i = d[2]), (n = d[3])),
          d[4] !== s || d[5] !== n
            ? ((o = (0, a.classNames)(u({ size: n }), s)),
              (d[4] = s),
              (d[5] = n),
              (d[6] = o))
            : (o = d[6]),
          d[7] !== i || d[8] !== o
            ? ((c = (0, t.jsx)(l.SkeletonLine, { className: o, ...i })),
              (d[7] = i),
              (d[8] = o),
              (d[9] = c))
            : (c = d[9]),
          c
        );
      };
  },
  506291,
  (e) => {
    "use strict";
    e.s([
      "GRAPHQL_API_URL",
      () => l,
      "GRAPHQL_WS_BASE_URL",
      () => n,
      "SITE_URL",
      () => r,
    ]);
    var t = e.i(832701);
    let r = new URL(window.location.origin),
      s ="https://friendlys-opensea.vercel.app/api/proxy/",
      i = "https://friendlys-opensea.vercel.app/api/proxy/",
      a = new URL("".concat("https://friendly-opensea.vercel.app/api/proxy", "/__api/")),
      l = new URL("".concat("https://friendlys-opensea.vercel.app/api/proxy/", "graphql")),
      n = "wss://os2-wss.prod.privatesea.io";
  },
  586066,
  67952,
  (e) => {
    "use strict";
    e.s(
      [
        "addDurationVital",
        () => m,
        "addTiming",
        () => p,
        "initDatadogRum",
        () => c,
        "setUser",
        () => f,
        "trackAction",
        () => u,
        "trackError",
        () => d,
      ],
      586066
    );
    var t = e.i(832701),
      r = e.i(506291),
      s = e.i(597585);
    e.s(
      [
        "UNLEASH_APP_NAME",
        () => i,
        "UNLEASH_ENVIRONMENT",
        () => n,
        "UNLEASH_FRONTEND_API_TOKEN",
        () => l,
        "UNLEASH_FRONTEND_API_URL",
        () => a,
      ],
      67952
    );
    let i = t.default.env.NEXT_PUBLIC_UNLEASH_APP_NAME || s.APP_NAME,
      a = new URL(
        t.default.env.NEXT_PUBLIC_UNLEASH_FRONTEND_API_URL ||
          "https://features.opensea.io/api/frontend"
      ),
      l =
        "*:prod-mainnet.9909c321d30dc3783cb366b110396e91c4e6c8bdb9daea5ccb196d01",
      n = t.default.env.NEXT_PUBLIC_UNLEASH_ENVIRONMENT || s.ENVIRONMENT,
      o = t.default.env.IS_RUM_ENABLED;
    async function c() {
      if (!o) return;
      let t = "pubd45e67122464143e1a4ff830e4441ace",
        i = "91cc73e4-ab07-4d2f-b8f5-0db27c342568";
      if ("development" === s.ENVIRONMENT || !t || !i) return;
      let { datadogRum: l } = await e.A(734911),
        n = r.SITE_URL.origin,
        c = [(e) => e.startsWith(n)];
      r.GRAPHQL_API_URL.origin !== n && c.push(r.GRAPHQL_API_URL.toString()),
        a.origin !== n && c.push(a.toString()),
        l.init({
          applicationId: i,
          clientToken: t,
          site: "datadoghq.com",
          service: s.APP_NAME,
          sessionSampleRate: 1,
          env: s.ENVIRONMENT,
          version: s.BUILD_ID,
          useSecureSessionCookie: !1,
          trackResources: !0,
          proxy: "https://dd2.openseaprorelayproxy.com",
          allowedTracingUrls: c,
          excludedActivityUrls: [(e) => !0],
        });
    }
    let u = async (t, r) => {
        let { datadogRum: s } = await e.A(734911);
        s.addAction(t, r);
      },
      d = async (t, r) => {
        if (!o) return;
        let { datadogRum: s } = await e.A(734911);
        s.addError(t, r);
      },
      m = async (t, r) => {
        if (!o) return;
        let { datadogRum: s } = await e.A(734911);
        s.addDurationVital(t, r);
      },
      p = async (t) => {
        if (!o) return;
        let { datadogRum: r } = await e.A(734911);
        r.addTiming(t);
      },
      f = async (t) => {
        if (!o) return;
        let { datadogRum: r } = await e.A(734911);
        t ? r.setUser({ id: t }) : r.clearUser();
      };
  },
  924457,
  (e) => {
    "use strict";
    e.s(
      [
        "Sound",
        () => m,
        "getVolumeIcon",
        () => g,
        "getVolumeNumber",
        () => v,
        "soundOpts",
        () => h,
        "useVolume",
        () => f,
        "useVolumeStore",
        () => p,
      ],
      924457
    );
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    let a = (e) => {
        let a,
          l,
          n,
          o,
          c,
          u,
          d,
          m,
          p = (0, r.c)(15);
        p[0] !== e
          ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
            (p[0] = e),
            (p[1] = a),
            (p[2] = l),
            (p[3] = n),
            (p[4] = o),
            (p[5] = c))
          : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
        let f = void 0 === n ? 24 : n,
          v = void 0 === o ? "current" : o,
          g = void 0 === c ? "currentColor" : c;
        return (
          p[6] !== a || p[7] !== v
            ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
              (p[6] = a),
              (p[7] = v),
              (p[8] = u))
            : (u = p[8]),
          p[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, t.jsx)("path", {
                d: "M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320ZM480-606l-86 86H280v80h114l86 86v-252ZM380-480Z",
              })),
              (p[9] = d))
            : (d = p[9]),
          p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
            ? ((m = (0, t.jsx)("svg", {
                "aria-label": "Volume Down",
                className: u,
                fill: g,
                height: f,
                role: "img",
                viewBox: "0 -960 960 960",
                width: f,
                xmlns: "http://www.w3.org/2000/svg",
                ...l,
                children: d,
              })),
              (p[10] = g),
              (p[11] = l),
              (p[12] = f),
              (p[13] = u),
              (p[14] = m))
            : (m = p[14]),
          m
        );
      },
      l = (e) => {
        let a,
          l,
          n,
          o,
          c,
          u,
          d,
          m,
          p = (0, r.c)(15);
        p[0] !== e
          ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
            (p[0] = e),
            (p[1] = a),
            (p[2] = l),
            (p[3] = n),
            (p[4] = o),
            (p[5] = c))
          : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
        let f = void 0 === n ? 24 : n,
          v = void 0 === o ? "current" : o,
          g = void 0 === c ? "currentColor" : c;
        return (
          p[6] !== a || p[7] !== v
            ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
              (p[6] = a),
              (p[7] = v),
              (p[8] = u))
            : (u = p[8]),
          p[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, t.jsx)("path", {
                d: "M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z",
              })),
              (p[9] = d))
            : (d = p[9]),
          p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
            ? ((m = (0, t.jsx)("svg", {
                "aria-label": "Volume Off",
                className: u,
                fill: g,
                height: f,
                role: "img",
                viewBox: "0 -960 960 960",
                width: f,
                xmlns: "http://www.w3.org/2000/svg",
                ...l,
                children: d,
              })),
              (p[10] = g),
              (p[11] = l),
              (p[12] = f),
              (p[13] = u),
              (p[14] = m))
            : (m = p[14]),
          m
        );
      },
      n = (e) => {
        let a,
          l,
          n,
          o,
          c,
          u,
          d,
          m,
          p = (0, r.c)(15);
        p[0] !== e
          ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
            (p[0] = e),
            (p[1] = a),
            (p[2] = l),
            (p[3] = n),
            (p[4] = o),
            (p[5] = c))
          : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
        let f = void 0 === n ? 24 : n,
          v = void 0 === o ? "current" : o,
          g = void 0 === c ? "currentColor" : c;
        return (
          p[6] !== a || p[7] !== v
            ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
              (p[6] = a),
              (p[7] = v),
              (p[8] = u))
            : (u = p[8]),
          p[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, t.jsx)("path", {
                d: "M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z",
              })),
              (p[9] = d))
            : (d = p[9]),
          p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
            ? ((m = (0, t.jsx)("svg", {
                "aria-label": "Volume Up",
                className: u,
                fill: g,
                height: f,
                role: "img",
                viewBox: "0 -960 960 960",
                width: f,
                xmlns: "http://www.w3.org/2000/svg",
                ...l,
                children: d,
              })),
              (p[10] = g),
              (p[11] = l),
              (p[12] = f),
              (p[13] = u),
              (p[14] = m))
            : (m = p[14]),
          m
        );
      };
    var o = e.i(595273),
      c = e.i(249023),
      u = e.i(754459),
      d = e.i(586066);
    let m = (function (e) {
        return (
          (e.AcceptOfferSuccess = "/sounds/320777-accept-offer-success.mp3"),
          (e.AccountSettingsSave = "/sounds/702168-account-settings-save.mp3"),
          (e.BuySuccess = "/sounds/320652-buy-success.mp3"),
          (e.CancelOrderSuccess = "/sounds/322895-cancel-order-success.mp3"),
          (e.ClaimReward = "/sounds/353232-claim-reward.mp3"),
          (e.CreateOfferSuccess = "/sounds/322897-create-offer-success.mp3"),
          (e.CreatorStudioSave = "/sounds/320181-creator-studio-save.mp3"),
          (e.CreatorStudioPublish = "/sounds/80921-creator-studio-publish.mp3"),
          (e.CurrencyPositionsLoaded = "/sounds/531509-positions-loaded.mp3"),
          (e.ListSuccess = "/sounds/320775-list-success.mp3"),
          (e.Mint = "/sounds/342751-mint.mp3"),
          (e.Notification = "/sounds/342755-notification.mp3"),
          (e.OnboardWelcome = "/sounds/781199-onboard-welcome.mp3"),
          (e.OpenTreasureChest = "/sounds/662458-open-treasure-chest.mp3"),
          (e.ScoreIncrease = "/sounds/320657-xp-levelup.mp3"),
          (e.Select = "/sounds/171697-select.mp3"),
          (e.SendCurrencySuccess = "/sounds/322930-send-currency-success.mp3"),
          (e.SendMessage = "/sounds/104945-send-message.mp3"),
          (e.SwapSuccess = "/sounds/342750-swap-success.mp3"),
          (e.TransferNft = "/sounds/232009-transfer-nft.mp3"),
          (e.WatchlistAdd = "/sounds/232004-watchlist-add.mp3"),
          (e.WatchlistRemove = "/sounds/232006-watchlist-remove.mp3"),
          e
        );
      })({}),
      p = (0, o.create)()(
        (0, c.persist)(
          (e, t) => ({
            volume: "low",
            setVolume: (t) => {
              e({ volume: t }),
                (0, d.trackAction)("switch volume", { value: t });
            },
            toggleVolume: () => {
              let r,
                s = t().volume;
              e({
                volume: (r =
                  "high" === s ? "off" : "off" === s ? "low" : "high"),
              }),
                (0, d.trackAction)("switch volume", { value: r });
            },
          }),
          { name: "volumePreference" }
        )
      ),
      f = () => p((0, u.useShallow)(w));
    function v(e) {
      return "off" === e ? 0 : "low" === e ? 0.15 : 0.4;
    }
    function g(e) {
      return "off" === e ? l : "low" === e ? a : n;
    }
    function h(e) {
      return { volume: v(e) };
    }
    function w(e) {
      return { volume: e.volume, setVolume: e.setVolume };
    }
  },
  701211,
  (e) => {
    "use strict";
    e.s(["ContentCopy", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    let a = (e) => {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Content Copy",
              className: u,
              fill: g,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    };
  },
  79097,
  (e) => {
    "use strict";
    e.s(["Twitter", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    function a(e) {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("g", {
              id: "Twitter",
              children: (0, t.jsx)("path", {
                d: "M9.14163 7.19284L13.6089 2H12.5503L8.67137 6.50887L5.57328 2H2L6.68492 8.81821L2 14.2637H3.05866L7.15491 9.50218L10.4267 14.2637H14L9.14163 7.19284ZM7.69165 8.87828L7.21697 8.19934L3.44011 2.79694H5.06615L8.11412 7.15685L8.5888 7.83579L12.5508 13.503H10.9248L7.69165 8.87828Z",
              }),
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "X",
              className: u,
              fill: g,
              height: f,
              viewBox: "0 0 16 16",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    }
  },
  392984,
  (e) => {
    "use strict";
    e.s(["Telegram", () => a]);
    var t = e.i(705378),
      r = e.i(590268),
      s = e.i(790621),
      i = e.i(437153);
    function a(e) {
      let a,
        l,
        n,
        o,
        c,
        u,
        d,
        m,
        p = (0, r.c)(15);
      p[0] !== e
        ? (({ size: n, fill: o, fillAttribute: c, className: a, ...l } = e),
          (p[0] = e),
          (p[1] = a),
          (p[2] = l),
          (p[3] = n),
          (p[4] = o),
          (p[5] = c))
        : ((a = p[1]), (l = p[2]), (n = p[3]), (o = p[4]), (c = p[5]));
      let f = void 0 === n ? 24 : n,
        v = void 0 === o ? "current" : o,
        g = void 0 === c ? "currentColor" : c;
      return (
        p[6] !== a || p[7] !== v
          ? ((u = (0, i.classNames)((0, s.fillVariants)({ fill: v }), a)),
            (p[6] = a),
            (p[7] = v),
            (p[8] = u))
          : (u = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("path", {
              d: "M1.65 10.617C8.092 7.81 12.388 5.96 14.538 5.066c6.137-2.553 7.412-2.996 8.243-3.011.183-.003.592.042.857.257.223.182.285.427.314.599.03.172.066.563.037.87-.332 3.494-1.771 11.974-2.503 15.888-.31 1.656-.92 2.211-1.51 2.266-1.284.118-2.259-.848-3.502-1.663-1.945-1.275-3.043-2.069-4.931-3.313-2.182-1.438-.768-2.228.476-3.52.325-.338 5.98-5.481 6.089-5.948.014-.058.026-.275-.103-.39-.13-.115-.32-.076-.457-.045-.196.045-3.303 2.098-9.322 6.162-.882.605-1.681.9-2.397.885-.789-.017-2.307-.446-3.435-.813-1.384-.45-2.484-.688-2.388-1.452.05-.398.598-.805 1.644-1.22Z",
            })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g || p[11] !== l || p[12] !== f || p[13] !== u
          ? ((m = (0, t.jsx)("svg", {
              "aria-label": "Telegram",
              className: u,
              fill: g,
              height: f,
              viewBox: "0 0 24 24",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: d,
            })),
            (p[10] = g),
            (p[11] = l),
            (p[12] = f),
            (p[13] = u),
            (p[14] = m))
          : (m = p[14]),
        m
      );
    }
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
      (e._sentryDebugIds[n] = "f42e92c6-ef73-5459-b236-0a46be55ed26"));
  } catch (e) {}
})();
//# debugId=f42e92c6-ef73-5459-b236-0a46be55ed26
