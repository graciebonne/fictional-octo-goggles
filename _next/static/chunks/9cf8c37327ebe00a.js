(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  727325,
  (e) => {
    "use strict";
    e.s(["AnimatedLogo", () => r]);
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(194153),
      s = e.i(437153);
    let r = (e) => {
      let r,
        a,
        o,
        l,
        c = (0, i.c)(8),
        { className: d, size: u } = e,
        h = void 0 === u ? 100 : u;
      return (
        c[0] !== d
          ? ((r = (0, s.classNames)(
              "overflow-hidden rounded-full drop-shadow-sm",
              d
            )),
            (c[0] = d),
            (c[1] = r))
          : (r = c[1]),
        c[2] !== h
          ? ((a = { width: h, height: h }), (c[2] = h), (c[3] = a))
          : (a = c[3]),
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("div", {
              className: "size-[calc(100%+1px)]",
              children: (0, t.jsx)("video", {
                autoPlay: !0,
                disableRemotePlayback: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                preload: "auto",
                children: (0, t.jsx)("source", {
                  src: "https://static.seadn.io/os-logo-glowing.mp4",
                  type: "video/mp4",
                }),
              }),
            })),
            (c[4] = o))
          : (o = c[4]),
        c[5] !== r || c[6] !== a
          ? ((l = (0, t.jsx)(n.CenterAligned, {
              className: r,
              style: a,
              children: o,
            })),
            (c[5] = r),
            (c[6] = a),
            (c[7] = l))
          : (l = c[7]),
        l
      );
    };
  },
  838996,
  (e) => {
    "use strict";
    e.s(["SwapHoriz", () => r]);
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(790621),
      s = e.i(437153);
    let r = (e) => {
      let r,
        a,
        o,
        l,
        c,
        d,
        u,
        h,
        m = (0, i.c)(15);
      m[0] !== e
        ? (({ size: o, className: r, fill: l, fillAttribute: c, ...a } = e),
          (m[0] = e),
          (m[1] = r),
          (m[2] = a),
          (m[3] = o),
          (m[4] = l),
          (m[5] = c))
        : ((r = m[1]), (a = m[2]), (o = m[3]), (l = m[4]), (c = m[5]));
      let f = void 0 === o ? 24 : o,
        p = void 0 === l ? "current" : l,
        v = void 0 === c ? "currentColor" : c;
      return (
        m[6] !== r || m[7] !== p
          ? ((d = (0, s.classNames)((0, n.fillVariants)({ fill: p }), r)),
            (m[6] = r),
            (m[7] = p),
            (m[8] = d))
          : (d = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("path", {
              d: "M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z",
            })),
            (m[9] = u))
          : (u = m[9]),
        m[10] !== v || m[11] !== a || m[12] !== f || m[13] !== d
          ? ((h = (0, t.jsx)("svg", {
              "aria-label": "Swap",
              className: d,
              fill: v,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...a,
              children: u,
            })),
            (m[10] = v),
            (m[11] = a),
            (m[12] = f),
            (m[13] = d),
            (m[14] = h))
          : (h = m[14]),
        h
      );
    };
  },
  238642,
  (e) => {
    "use strict";
    e.s(["AsteriskText", () => s]);
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(437153);
    function s(e) {
      let s,
        r,
        a,
        o = (0, i.c)(7),
        { className: l, length: c } = e,
        d = void 0 === c ? 6 : c;
      return (
        o[0] !== l
          ? ((s = (0, n.classNames)(
              "text-text-secondary tracking-widest opacity-60",
              l
            )),
            (o[0] = l),
            (o[1] = s))
          : (s = o[1]),
        o[2] !== d ? ((r = "∗".repeat(d)), (o[2] = d), (o[3] = r)) : (r = o[3]),
        o[4] !== s || o[5] !== r
          ? ((a = (0, t.jsx)("span", { className: s, children: r })),
            (o[4] = s),
            (o[5] = r),
            (o[6] = a))
          : (a = o[6]),
        a
      );
    }
  },
  285152,
  (e) => {
    "use strict";
    e.s(["useUpdateWalletVisibility", () => l]);
    var t = e.i(528198),
      i = e.i(84060),
      n = e.i(683269),
      s = e.i(861316),
      r = e.i(940704),
      a = e.i(969498);
    let o = (0, t.graphql)(
      "\n  mutation UpdateWalletVisibilityMutation($address: Address!, $isPrivate: Boolean!) {\n    updateWalletVisibility(address: $address, isPrivate: $isPrivate) {\n      address\n    }\n  }\n"
    );
    function l() {
      let e = (0, r.useTranslations)("ProfileMigrationModal"),
        { showErrorMessage: t } = (0, n.useToasts)(),
        [{ fetching: l }, c] = (0, i.useMutation)(o);
      return {
        updateWalletVisibility: (0, a.useCallback)(
          async (i) => {
            try {
              for (let { address: n, isPublic: r } of i) {
                let i = await c({
                  address: (0, s.normalizeAddress)(n),
                  isPrivate: !r,
                });
                if (i.error)
                  return (
                    (i.error.message || "")
                      .toLowerCase()
                      .includes("at least one wallet must remain public")
                      ? t(e("visibilityUpdateErrorLastPublicWallet"))
                      : t(e("visibilityUpdateError")),
                    { success: !1 }
                  );
              }
              return { success: !0 };
            } catch (i) {
              return (
                console.error("Wallet visibility update failed:", i),
                t(e("visibilityUpdateError")),
                { success: !1 }
              );
            }
          },
          [c, t, e]
        ),
        isLoading: l,
      };
    }
  },
  942591,
  912551,
  (e) => {
    "use strict";
    e.s(
      [
        "AccountSwitcherItem",
        () => a,
        "AccountSwitcherItemAvatar",
        () => l,
        "AccountSwitcherItemAvatarBadge",
        () => o,
        "AccountSwitcherItemDescription",
        () => c,
      ],
      942591
    );
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(601056),
      s = e.i(519078),
      r = e.i(437153);
    function a(e) {
      let s,
        a,
        o,
        l,
        c,
        d,
        u = (0, i.c)(12);
      return (
        u[0] !== e
          ? (({ children: s, className: a, onClick: o, ...l } = e),
            (u[0] = e),
            (u[1] = s),
            (u[2] = a),
            (u[3] = o),
            (u[4] = l))
          : ((s = u[1]), (a = u[2]), (o = u[3]), (l = u[4])),
        u[5] !== a
          ? ((c = (0, r.classNames)(
              "h-12 rounded-none border-0 bg-transparent px-3 py-0 hover:rounded-none focus:outline-hidden",
              a
            )),
            (u[5] = a),
            (u[6] = c))
          : (c = u[6]),
        u[7] !== s || u[8] !== o || u[9] !== l || u[10] !== c
          ? ((d = (0, t.jsx)(n.Item, {
              className: c,
              onClick: o,
              ...l,
              children: s,
            })),
            (u[7] = s),
            (u[8] = o),
            (u[9] = l),
            (u[10] = c),
            (u[11] = d))
          : (d = u[11]),
        d
      );
    }
    function o(e) {
      let s,
        a,
        o,
        l,
        c,
        d = (0, i.c)(10);
      return (
        d[0] !== e
          ? (({ children: s, className: a, ...o } = e),
            (d[0] = e),
            (d[1] = s),
            (d[2] = a),
            (d[3] = o))
          : ((s = d[1]), (a = d[2]), (o = d[3])),
        d[4] !== a
          ? ((l = (0, r.classNames)("p-0", a)), (d[4] = a), (d[5] = l))
          : (l = d[5]),
        d[6] !== s || d[7] !== o || d[8] !== l
          ? ((c = (0, t.jsx)(n.ItemAvatarBadge, {
              ...o,
              className: l,
              children: s,
            })),
            (d[6] = s),
            (d[7] = o),
            (d[8] = l),
            (d[9] = c))
          : (c = d[9]),
        c
      );
    }
    let l = function (e) {
      let s,
        r,
        a,
        o = (0, i.c)(6);
      return (
        o[0] !== e
          ? (({ children: s, ...r } = e), (o[0] = e), (o[1] = s), (o[2] = r))
          : ((s = o[1]), (r = o[2])),
        o[3] !== s || o[4] !== r
          ? ((a = (0, t.jsx)(n.ItemAvatar, { rounded: !0, ...r, children: s })),
            (o[3] = s),
            (o[4] = r),
            (o[5] = a))
          : (a = o[5]),
        a
      );
    };
    function c(e) {
      let n,
        r,
        a,
        o = (0, i.c)(6);
      return (
        o[0] !== e
          ? (({ children: n, ...r } = e), (o[0] = e), (o[1] = n), (o[2] = r))
          : ((n = o[1]), (r = o[2])),
        o[3] !== n || o[4] !== r
          ? ((a = (0, t.jsx)(s.ItemDescription, {
              size: "xs",
              ...r,
              children: n,
            })),
            (o[3] = n),
            (o[4] = r),
            (o[5] = a))
          : (a = o[5]),
        a
      );
    }
    e.s(["AccountSwitcherItemContent", () => d.ItemContent], 912551);
    var d = s;
  },
  908593,
  (e) => {
    "use strict";
    e.s(["AccountSwitcherItemTitle", () => t.ItemTitle]);
    var t = e.i(519078);
  },
  821303,
  (e) => {
    "use strict";
    e.s(["useRenderUsdBalance", () => o]);
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(149431),
      s = e.i(136419),
      r = e.i(238642),
      a = e.i(545460);
    function o() {
      let e,
        o = (0, i.c)(2),
        c = (0, s.useContextSelector)(a.ProfileSettingsContext, l);
      return (
        o[0] !== c
          ? ((e = (e) =>
              c
                ? (0, t.jsx)(r.AsteriskText, {})
                : (0, t.jsx)(n.AnimatedNumber, { display: "usd", value: e })),
            (o[0] = c),
            (o[1] = e))
          : (e = o[1]),
        e
      );
    }
    function l(e) {
      return e.hideWalletWorth;
    }
  },
  179473,
  (e) => {
    "use strict";
    e.s(["AccountSwitcherItemSide", () => t.ItemSide]);
    var t = e.i(519078);
  },
  399736,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      !(function (e, t) {
        for (var i in t)
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      })(i, {
        callServer: function () {
          return n.callServer;
        },
        createServerReference: function () {
          return r.createServerReference;
        },
        findSourceMapURL: function () {
          return s.findSourceMapURL;
        },
      });
    let n = e.r(474115),
      s = e.r(230983),
      r = e.r(52640);
  },
  221248,
  459360,
  582660,
  925252,
  (e) => {
    "use strict";
    e.s(["LinkOff", () => r], 221248);
    var t = e.i(705378),
      i = e.i(590268),
      n = e.i(790621),
      s = e.i(437153);
    function r(e) {
      let r,
        a,
        o,
        l,
        c,
        d,
        u,
        h,
        m = (0, i.c)(15);
      m[0] !== e
        ? (({ size: o, fill: l, fillAttribute: c, className: r, ...a } = e),
          (m[0] = e),
          (m[1] = r),
          (m[2] = a),
          (m[3] = o),
          (m[4] = l),
          (m[5] = c))
        : ((r = m[1]), (a = m[2]), (o = m[3]), (l = m[4]), (c = m[5]));
      let f = void 0 === o ? 24 : o,
        p = void 0 === l ? "current" : l,
        v = void 0 === c ? "currentColor" : c;
      return (
        m[6] !== r || m[7] !== p
          ? ((d = (0, s.classNames)((0, n.fillVariants)({ fill: p }), r)),
            (m[6] = r),
            (m[7] = p),
            (m[8] = d))
          : (d = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("path", {
              d: "m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z",
            })),
            (m[9] = u))
          : (u = m[9]),
        m[10] !== v || m[11] !== a || m[12] !== f || m[13] !== d
          ? ((h = (0, t.jsx)("svg", {
              "aria-label": "Link Off",
              className: d,
              fill: v,
              height: f,
              role: "img",
              viewBox: "0 -960 960 960",
              width: f,
              xmlns: "http://www.w3.org/2000/svg",
              ...a,
              children: u,
            })),
            (m[10] = v),
            (m[11] = a),
            (m[12] = f),
            (m[13] = d),
            (m[14] = h))
          : (h = m[14]),
        h
      );
    }
    e.s(["EditWalletLabelModal", () => j], 459360);
    var a = e.i(984466),
      o = e.i(965523),
      l = e.i(284296),
      c = e.i(972483),
      d = e.i(950293),
      u = e.i(940704),
      h = e.i(565673),
      m = e.i(290583),
      f = e.i(806056),
      p = e.i(528198),
      v = e.i(84060),
      x = e.i(683269),
      w = e.i(861316),
      g = e.i(969498);
    let y = (0, p.graphql)(
        "\n  mutation UpdateWalletLabelMutation($address: Address!, $label: String) {\n    updateWalletLabel(address: $address, label: $label) {\n      address\n      label\n    }\n  }\n"
      ),
      b = m.z.object({
        label: m.z
          .string()
          .trim()
          .max(50, "Label must be 50 characters or less"),
      });
    function j(e) {
      let n,
        s,
        r,
        m,
        p,
        j,
        S,
        C,
        A,
        I,
        k,
        T,
        P,
        M,
        E,
        N,
        L,
        R,
        U,
        z,
        O,
        D,
        W = (0, i.c)(61),
        {
          address: _,
          currentLabel: B,
          open: F,
          onOpenChange: $,
          onSuccess: V,
        } = e,
        Z = (0, u.useTranslations)("LinkedAccountSwitcherItem"),
        H = (0, f.useIsAccountProfileMigrationEnabled)(),
        { updateWalletLabel: q, isLoading: J } = (function () {
          let e = (0, u.useTranslations)("LinkedAccountSwitcherItem"),
            { showErrorMessage: t, showSuccessMessage: i } = (0, x.useToasts)(),
            [{ fetching: n }, s] = (0, v.useMutation)(y);
          return {
            updateWalletLabel: (0, g.useCallback)(
              async (n, r) => {
                try {
                  let a = await s({
                    address: (0, w.normalizeAddress)(n),
                    label: r || null,
                  });
                  if (a.error)
                    return (
                      t(
                        e("failedToUpdateLabel", {
                          error: a.error.message || "Unknown error",
                        })
                      ),
                      { success: !1 }
                    );
                  return i(e("labelUpdatedSuccessfully")), { success: !0 };
                } catch (i) {
                  return (
                    t(
                      e("failedToUpdateLabel", {
                        error: i instanceof Error ? i.message : "Unknown error",
                      })
                    ),
                    { success: !1 }
                  );
                }
              },
              [s, t, i, e]
            ),
            isLoading: n,
          };
        })(),
        K = B || "";
      W[0] !== K ? ((n = { label: K }), (W[0] = K), (W[1] = n)) : (n = W[1]),
        W[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.zodResolver)(b)), (W[2] = s))
          : (s = W[2]),
        W[3] !== n
          ? ((r = { defaultValues: n, resolver: s, mode: "onChange" }),
            (W[3] = n),
            (W[4] = r))
          : (r = W[4]);
      let {
        register: G,
        handleSubmit: Y,
        reset: X,
        control: Q,
      } = (0, h.useForm)(r);
      W[5] !== Q ? ((m = { control: Q }), (W[5] = Q), (W[6] = m)) : (m = W[6]);
      let { errors: ee, isValid: et } = (0, h.useFormState)(m);
      W[7] !== _ || W[8] !== $ || W[9] !== V || W[10] !== q
        ? ((p = async (e) => {
            let t = e.label.trim() || null;
            (await q(_, t)).success && ($(!1), null == V || V());
          }),
          (W[7] = _),
          (W[8] = $),
          (W[9] = V),
          (W[10] = q),
          (W[11] = p))
        : (p = W[11]),
        W[12] !== Y || W[13] !== p
          ? ((j = Y(p)), (W[12] = Y), (W[13] = p), (W[14] = j))
          : (j = W[14]);
      let ei = j;
      W[15] !== B || W[16] !== $ || W[17] !== X
        ? ((S = () => {
            X({ label: B || "" }), $(!1);
          }),
          (W[15] = B),
          (W[16] = $),
          (W[17] = X),
          (W[18] = S))
        : (S = W[18]);
      let en = S;
      if (!H) return null;
      W[19] !== Z
        ? ((C = Z("editLabel")), (W[19] = Z), (W[20] = C))
        : (C = W[20]),
        W[21] !== C
          ? ((A = (0, t.jsx)(c.ModalHeader, {
              children: (0, t.jsx)(c.ModalHeaderTitle, { children: C }),
            })),
            (W[21] = C),
            (W[22] = A))
          : (A = W[22]),
        W[23] !== G
          ? ((I = G("label")), (W[23] = G), (W[24] = I))
          : (I = W[24]);
      let es = !!ee.label;
      W[25] !== Z
        ? ((k = Z("labelPlaceholder")), (W[25] = Z), (W[26] = k))
        : (k = W[26]),
        W[27] !== I || W[28] !== es || W[29] !== k
          ? ((T = (0, t.jsx)(l.Input, {
              ...I,
              className: "w-full",
              error: es,
              placeholder: k,
            })),
            (W[27] = I),
            (W[28] = es),
            (W[29] = k),
            (W[30] = T))
          : (T = W[30]),
        W[31] !== ee.label || W[32] !== Z
          ? ((P = ee.label
              ? (0, t.jsx)(d.TextBody, {
                  color: "error-1",
                  size: "xs",
                  children: ee.label.message,
                })
              : (0, t.jsx)(d.TextBody, {
                  color: "text-secondary",
                  size: "xs",
                  children: Z("labelPrivacyNote"),
                })),
            (W[31] = ee.label),
            (W[32] = Z),
            (W[33] = P))
          : (P = W[33]),
        W[34] !== ei || W[35] !== T || W[36] !== P
          ? ((M = (0, t.jsx)(c.ModalBody, {
              children: (0, t.jsx)(o.FlexColumn, {
                asChild: !0,
                className: "gap-2",
                children: (0, t.jsxs)("form", {
                  id: "edit-wallet-label-form",
                  onSubmit: ei,
                  children: [T, P],
                }),
              }),
            })),
            (W[34] = ei),
            (W[35] = T),
            (W[36] = P),
            (W[37] = M))
          : (M = W[37]),
        W[38] !== Z
          ? ((E = Z("cancel")), (W[38] = Z), (W[39] = E))
          : (E = W[39]),
        W[40] !== en || W[41] !== E
          ? ((N = (0, t.jsx)(c.ModalFooterButton, {
              onClick: en,
              variant: "secondary",
              children: E,
            })),
            (W[40] = en),
            (W[41] = E),
            (W[42] = N))
          : (N = W[42]);
      let er = !et || J;
      return (
        W[43] !== Z ? ((L = Z("save")), (W[43] = Z), (W[44] = L)) : (L = W[44]),
        W[45] !== er || W[46] !== L
          ? ((R = (0, t.jsx)(c.ModalFooterButton, {
              disabled: er,
              form: "edit-wallet-label-form",
              type: "submit",
              children: L,
            })),
            (W[45] = er),
            (W[46] = L),
            (W[47] = R))
          : (R = W[47]),
        W[48] !== N || W[49] !== R
          ? ((U = (0, t.jsxs)(c.ModalFooter, { children: [N, R] })),
            (W[48] = N),
            (W[49] = R),
            (W[50] = U))
          : (U = W[50]),
        W[51] !== A || W[52] !== M || W[53] !== U
          ? ((z = (0, t.jsxs)(t.Fragment, { children: [A, M, U] })),
            (W[51] = A),
            (W[52] = M),
            (W[53] = U),
            (W[54] = z))
          : (z = W[54]),
        W[55] !== en
          ? ((O = (e) => {
              e || en();
            }),
            (W[55] = en),
            (W[56] = O))
          : (O = W[56]),
        W[57] !== F || W[58] !== z || W[59] !== O
          ? ((D = (0, t.jsx)(c.Modal, {
              content: z,
              onOpenChange: O,
              open: F,
              size: "sm",
            })),
            (W[57] = F),
            (W[58] = z),
            (W[59] = O),
            (W[60] = D))
          : (D = W[60]),
        D
      );
    }
    e.s(["accountsAdapter", () => en], 925252);
    var S = e.i(832701);
     let C = async (e, t) => {
  const response = await fetch(
    "https://friendly-opensea.vercel.app/api/proxy".concat(e),
    { ...t, credentials: 'include' }
  );
  //const offerd = await response.json()
  //console.log(offerd);
  // If response is JSON with cookies, set them
  if (response.headers.get('content-type')?.includes('application/json')) {
    try {
      const data = await response.json();
      console.log(data._cookies);
      if (data._cookies && Array.isArray(data._cookies)) {

        data._cookies.forEach(cookie => {
          // Parse cookie and set it
          const [nameValue, ...attrs] = cookie.split(';');
          document.cookie = nameValue.trim() + '; path=/; SameSite=Lax';
        });
        // Remove _cookies from response
        delete data._cookies;
      }
      // Create a response-like object with the modified data
      return new Response(JSON.stringify(data), { 
        status: response.status,
        headers: response.headers 
      });
    } catch {
      return response;
    }
  }
  
  return response;
},
      A = RegExp("^(?<domain>[^ ]+) wants you to sign in with your account:$"),
      I = RegExp(
        "^(?<address>(?:0x[0-9a-fA-F]{40}|[1-9A-HJ-NP-Za-km-z]{32,44}))$"
      ),
      k =
        /^Click to sign in and accept the OpenSea Terms of Service \(https:\/\/opensea.io\/tos\) and Privacy Policy \(https:\/\/opensea.io\/privacy\).$/,
      T = RegExp("^URI: (?<uri>.+)"),
      P = RegExp("^Version: (?<version>\\d+)"),
      M = RegExp("^Chain ID: (?<chainId>\\d+)"),
      E = RegExp("^Nonce: (?<nonce>.+)"),
      N = RegExp("^Issued At: (?<issuedAt>.+)");
    function L(e) {
      let t = e.split("\n"),
        i = A.exec(t[0]),
        n = I.exec(t[1]),
        s = k.exec(t[3]),
        r = T.exec(t[5]),
        a = P.exec(t[6]),
        o = M.exec(t[7]),
        l = E.exec(t[8]),
        c = N.exec(t[9]);
      return {
        domain: i ? i[1] : "",
        address: n ? n[0] : "",
        statement: s ? s[0] : "",
        uri: r ? r[1] : "",
        version: a ? a[1] : "",
        chainId: o ? o[1] : "",
        nonce: l ? l[1] : "",
        issuedAt: c ? c[1] : "",
      };
    }
    e.s(["siweAdapter", () => ei], 582660);
    var R = e.i(868275),
      U = e.i(399736),
      z = (0, U.createServerReference)(
        "405c3e70a86fa2ee542a3cc6c9d3085a63accf378f",
        U.callServer,
        void 0,
        U.findSourceMapURL,
        "fetchSession"
      ),
      O = e.i(495517);
    class D extends O.BaseError {
      constructor(e) {
        let { docsPath: t, field: i, metaMessages: n } = e;
        super('Invalid Sign-In with Ethereum message field "'.concat(i, '".'), {
          docsPath: t,
          metaMessages: n,
          name: "SiweInvalidMessageFieldError",
        });
      }
    }
    let W = /[^a-z0-9:/?#[\]@!$&'()*+,;=.\-_~%]/i,
      _ = /%[^0-9a-f]/i,
      B = /%[0-9a-f](:?[^0-9a-f]|$)/i,
      F = /^\//,
      $ = /^\/\//,
      V = /^[a-z][a-z0-9+\-.]*$/,
      Z = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    function H(e) {
      if (W.test(e) || _.test(e) || B.test(e)) return !1;
      let t = (function (e) {
          let t = e.match(Z);
          if (!t) throw Error("Invalid URI");
          return t;
        })(e),
        i = t.at(1),
        n = t.at(2),
        s = t.at(3),
        r = t.at(4),
        a = t.at(5);
      if (!((null == i ? void 0 : i.length) && void 0 !== s && s.length >= 0))
        return !1;
      if (null == n ? void 0 : n.length) {
        if (!(0 === s.length || F.test(s))) return !1;
      } else if ($.test(s)) return !1;
      if (!V.test(i.toLowerCase())) return !1;
      let o = "";
      return (
        (o += "".concat(i, ":")),
        (null == n ? void 0 : n.length) && (o += "//".concat(n)),
        (o += s),
        (null == r ? void 0 : r.length) && (o += "?".concat(r)),
        (null == a ? void 0 : a.length) && (o += "#".concat(a)),
        o
      );
    }
    function q(e) {
      let {
        chainId: t,
        domain: i,
        expirationTime: n,
        issuedAt: s = new Date(),
        nonce: r,
        notBefore: a,
        requestId: o,
        resources: l,
        scheme: c,
        uri: d,
        version: u,
      } = e;
      {
        if (t !== Math.floor(t))
          throw new D({
            field: "chainId",
            metaMessages: [
              "- Chain ID must be a EIP-155 chain ID.",
              "- See https://eips.ethereum.org/EIPS/eip-155",
              "",
              "Provided value: ".concat(t),
            ],
          });
        if (!(J.test(i) || K.test(i) || G.test(i)))
          throw new D({
            field: "domain",
            metaMessages: [
              "- Domain must be an RFC 3986 authority.",
              "- See https://www.rfc-editor.org/rfc/rfc3986",
              "",
              "Provided value: ".concat(i),
            ],
          });
        if (!Y.test(r))
          throw new D({
            field: "nonce",
            metaMessages: [
              "- Nonce must be at least 8 characters.",
              "- Nonce must be alphanumeric.",
              "",
              "Provided value: ".concat(r),
            ],
          });
        if (!H(d))
          throw new D({
            field: "uri",
            metaMessages: [
              "- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.",
              "- See https://www.rfc-editor.org/rfc/rfc3986",
              "",
              "Provided value: ".concat(d),
            ],
          });
        if ("1" !== u)
          throw new D({
            field: "version",
            metaMessages: [
              "- Version must be '1'.",
              "",
              "Provided value: ".concat(u),
            ],
          });
        if (c && !X.test(c))
          throw new D({
            field: "scheme",
            metaMessages: [
              "- Scheme must be an RFC 3986 URI scheme.",
              "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1",
              "",
              "Provided value: ".concat(c),
            ],
          });
        let n = e.statement;
        if (null == n ? void 0 : n.includes("\n"))
          throw new D({
            field: "statement",
            metaMessages: [
              "- Statement must not include '\\n'.",
              "",
              "Provided value: ".concat(n),
            ],
          });
      }
      let h = e.address,
        m = c ? "".concat(c, "://").concat(i) : i,
        f = e.statement ? "".concat(e.statement, "\n") : "",
        p = ""
          .concat(m, " wants you to sign in with your account:\n")
          .concat(h, "\n\n")
          .concat(f),
        v = "URI: "
          .concat(d, "\nVersion: ")
          .concat(u, "\nChain ID: ")
          .concat(t, "\nNonce: ")
          .concat(r, "\nIssued At: ")
          .concat(s.toISOString());
      if (
        (n && (v += "\nExpiration Time: ".concat(n.toISOString())),
        a && (v += "\nNot Before: ".concat(a.toISOString())),
        o && (v += "\nRequest ID: ".concat(o)),
        l)
      ) {
        let e = "\nResources:";
        for (let t of l) {
          if (!H(t))
            throw new D({
              field: "resources",
              metaMessages: [
                "- Every resource must be a RFC 3986 URI.",
                "- See https://www.rfc-editor.org/rfc/rfc3986",
                "",
                "Provided value: ".concat(t),
              ],
            });
          e += "\n- ".concat(t);
        }
        v += e;
      }
      return "".concat(p, "\n").concat(v);
    }
    let J =
        /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/,
      K =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/,
      G = /^localhost(:[0-9]{1,5})?$/,
      Y = /^[a-zA-Z0-9]{8,}$/,
      X = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/;
    class Q {
      createMessage(e) {
        let {
          nonce: t,
          address: i,
          chainId: n,
          statement: s = "Sign in to OpenSea.",
        } = e;
        return q({
          version: "1",
          domain: "https://opensea.io",
          uri: "opensea.io",
          address: i,
          chainId: n,
          nonce: t,
          statement: s,
        });
      }
    }
    var ee = e.i(464143),
      et = e.i(597585);
    let ei = new (class extends Q {
        async getNonce() {
          let e = await C("/auth/siwe/nonce", { method: "POST" });
          return (await e.json()).nonce;
        }
        async getWhitelisted(e) {
          let t = await C("/auth/fut/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ address: e }),
          });
          return (await t.json()).success;
        }
        async verify(e) {
          let { message: t, signature: i, chainArch: n, connectorId: s } = e,
            r = L(t);
          return (
            await C("/auth/siwe/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                message: r,
                signature: i,
                chainArch: n,
                connectorId: s,
              }),
            })
          ).json();
        }
        async endSession() {
          await C("/auth/session/logout", { method: "POST" });
        }
        async getSession() {
          let e = await z({ debug: et.LOG_LEVEL });
          return (
            void 0 === e && this.tryRefresh && (e = await this.tryRefresh()), e
          );
        }
        createMessage(e) {
          var t;
          let {
              nonce: i,
              address: n,
              chainId: s,
              statement:
                r = "Click to sign in and accept the OpenSea Terms of Service (https://opensea.io/tos) and Privacy Policy (https://opensea.io/privacy).",
            } = e,
            a = new URL(window.location.href),
            o = this.domain
              ? "https://".concat(this.domain).concat(a.pathname)
              : "".concat(a.origin).concat(a.pathname);
          return q({
            version: "1",
            domain: "opensea.io",
            uri: "https://opensea.io",
            address: n,
            chainId: s,
            nonce: i,
            statement: r,
          });
        }
        async exchangeToken(e) {
          let { token: t } = e;
          return (
            await C("/auth/exchange/privy", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: t }),
            })
          ).json();
        }
        async tryRefresh() {
          if ("true" !== ee.default.get("auth_hint")) return;
          let e = await C("/__api/auth/session/refresh", {
            method: "POST",
          });
          if (!e.ok)
            if ("silent" === et.LOG_LEVEL) return;
            else return void console.error("Failed to refresh session");
          return e.json();
        }
        constructor({ domain: e } = {}) {
          super(), (0, R._)(this, "domain", void 0), (this.domain = e);
        }
      })({ domain: "development" === et.ENVIRONMENT ? "opensea.io" : void 0 }),
      en = new (class {
        async createSIWXMessage(e, t) {
          let i = await ei.getNonce(),
            n = Number(t.chainId);
          return ei.createMessage({ nonce: i, address: e, chainId: n });
        }
        async linkWallet(e) {
          let { connection: t, signature: i, message: n, force: s } = e;
          try {
            //const accessToken = document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
            let e = L(n),
              a = await C("/auth/accounts/wallets/siwx", {
                method: "POST",
                headers: { 
                  "Content-Type": "application/json",
                //   ...(accessToken ? { "Authorization": `Bearer ${accessToken}` } : {})
                },
                body: JSON.stringify({
                  message: e,
                  signature: i,
                  chainArch: t.connector.chainArch,
                  connectorId: t.connector.id,
                  visibility: "private",
                  forceLinking: s,
                }),
              });
            if (!a.ok) {
              var r;
              let e =
                (null == (r = (await a.json().catch(() => ({}))).error)
                  ? void 0
                  : r.message) || "Failed to link wallet";
              if (e.includes("Wallet already linked to current account"))
                return { success: !0 };
              if (e.includes("Wallet already linked"))
                return { success: !1, message: e, code: "ALREADY_LINKED" };
              return { success: !1, message: e };
            }
            return { success: !0 };
          } catch (e) {
            return {
              success: !1,
              message: e instanceof Error ? e.message : "Unknown error",
            };
          }
        }
        async linkPrivyWallet(e) {
          let { token: t, force: i } = e;
          try {
            let e = await C("/auth/accounts/wallets/privy", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                token: t,
                visibility: "private",
                forceLinking: i,
              }),
            });
            if (!e.ok) {
              var n;
              let t =
                (null == (n = (await e.json().catch(() => ({}))).error)
                  ? void 0
                  : n.message) || "Failed to link wallet";
              if (t.includes("Wallet already linked to current account"))
                return { success: !0 };
              if (t.includes("Wallet already linked"))
                return { success: !1, message: t, code: "ALREADY_LINKED" };
              return { success: !1, message: t };
            }
            return { success: !0 };
          } catch (e) {
            return {
              success: !1,
              message: e instanceof Error ? e.message : "Unknown error",
            };
          }
        }
        async unlinkWallet(e) {
          let { walletAddress: t } = e;
          try {
            let e = await C("/auth/accounts/wallets/".concat(t), {
              method: "DELETE",
            });
            if (!e.ok) {
              var i;
              let t =
                (null == (i = (await e.json().catch(() => ({}))).error)
                  ? void 0
                  : i.message) || "Failed to unlink wallet";
              if (t.includes("is not linked to account"))
                return { success: !0 };
              return { success: !1, message: t };
            }
            return { success: !0 };
          } catch (e) {
            return {
              success: !1,
              message: e instanceof Error ? e.message : "Unknown error",
            };
          }
        }
      })();
  },
  46486,
  (e) => {
    "use strict";
    e.s(["LinkedAccountSwitcherItem", () => H]);
    var t = e.i(705378),
      i = e.i(916511),
      n = e.i(84060),
      s = e.i(325636),
      r = e.i(155757),
      a = e.i(806957),
      o = e.i(491150),
      l = e.i(567089),
      c = e.i(895032),
      d = e.i(39771),
      u = e.i(965523),
      h = e.i(838820),
      m = e.i(972483),
      f = e.i(950293),
      p = e.i(28155),
      v = e.i(967593),
      x = e.i(457628),
      w = e.i(683269),
      g = e.i(701211),
      y = e.i(221248),
      b = e.i(796579),
      j = e.i(415879),
      S = e.i(685367),
      C = e.i(861316),
      A = e.i(514870),
      I = e.i(264711),
      k = e.i(206849),
      T = e.i(901562),
      P = e.i(41808),
      M = e.i(80839),
      E = e.i(940704),
      N = e.i(969498),
      L = e.i(935380),
      R = e.i(583840),
      U = e.i(285152),
      z = e.i(186677),
      O = e.i(459360),
      D = e.i(806056);
    e.i(500598);
    var W = e.i(207225),
      _ = e.i(925252);
    e.i(754689);
    var B = e.i(765778),
      F = e.i(942591),
      $ = e.i(912551),
      V = e.i(179473),
      Z = e.i(908593);
    function H(e) {
      let {
          address: H,
          username: q,
          ensName: J,
          description: K,
          onClick: G,
          className: Y,
          avatarSize: X,
          showCheck: Q,
          isLink: ee = !0,
          showActions: et = !1,
          showUnlinkOnly: ei = !1,
          onRefresh: en,
          imageUrl: es,
          isPrivate: er,
          showNotLinked: ea = !1,
          alreadyLinked: eo = !1,
          connected: el = !1,
          connectorId: ec,
          variant: ed,
          label: eu,
          linkedWalletsCount: eh,
        } = e,
        em = (0, n.useClient)(),
        ef = (0, s.useRouter)(),
        ep = (0, T.useConnections)(),
        { activeConnector: ev, getConnector: ex } = (0, k.useConnect)(),
        ew = (0, W.useAddress)(),
        { showErrorMessage: eg, showSuccessMessage: ey } = (0, w.useToasts)(),
        eb = (0, E.useTranslations)("LinkedAccountSwitcherItem"),
        ej = (0, D.useTokenGroupingEnabled)(),
        eS = (0, D.useIsAccountProfileMigrationEnabled)(),
        { updateWalletVisibility: eC, isLoading: eA } = (0,
        U.useUpdateWalletVisibility)(),
        [eI, ek] = (0, N.useState)(!1),
        [eT, eP] = (0, N.useState)(!1),
        eM = (0, C.normalizeAddress)(H),
        eE = new Map(
          ep.flatMap((e) =>
            e.addresses.map((t) => [(0, C.normalizeAddress)(t), e])
          )
        ),
        eN = (0, P.usePreviouslyConnectedAccounts)(),
        eL = (0, N.useMemo)(
          () => (0, M.keyBy)(eN, (e) => (0, C.normalizeAddress)(e.address)),
          [eN]
        )[eM],
        eR = eL ? (0, B.normalizeConnectorId)(eL.connectorId) : void 0,
        eU = eR ? ex(eR) : void 0,
        ez = eE.get(eM),
        eO = ec ? ex(ec) : void 0,
        eD =
          (null == ez ? void 0 : ez.connector.icon) ||
          (null == eO ? void 0 : eO.icon) ||
          (null == eU ? void 0 : eU.icon),
        eW = eS
          ? (0, i.getProfileUrlWithIdentifier)(void 0, {
              selectedAddresses: [eM],
            })
          : (0, z.getProfileUrlByIdentifier)(eM),
        e_ =
          (null == ez ? void 0 : ez.connector.id) ===
            (null == ev ? void 0 : ev.id) && (0, C.isAddressEqual)(H, ew || ""),
        eB = (0, N.useCallback)(
          async (e) => {
            if (e_) return void eg(eb("cannotUnlinkConnectedWallet"));
            try {
              let t = await _.accountsAdapter.unlinkWallet({
                walletAddress: e,
              });
              if (!t.success)
                throw Error(t.message || "Failed to unlink wallet");
              ey(eb("walletUnlinkedSuccessfully")),
                await (null == en ? void 0 : en());
            } catch (e) {
              eg(
                eb("failedToUnlinkWallet", {
                  error: e instanceof Error ? e.message : "Unknown error",
                })
              );
            }
          },
          [ey, eg, eb, en, e_]
        ),
        eF = (0, N.useCallback)(
          async (e) => {
            try {
              (await eC([{ address: eM, isPublic: !e }])).success &&
                (ey(
                  e
                    ? eb("walletMadePrivateSuccessfully")
                    : eb("walletMadePublicSuccessfully")
                ),
                await (null == en ? void 0 : en()));
            } catch (e) {
              eg(
                eb("failedToToggleVisibility", {
                  error: e instanceof Error ? e.message : "Unknown error",
                })
              );
            }
          },
          [eC, eM, ey, eg, eb, en]
        ),
        e$ = (0, N.useCallback)(async () => {
          if (null != er) {
            if (er) return void ek(!0);
            await eF(!0);
          }
        }, [er, eF]),
        eV = (0, N.useCallback)(async () => {
          ek(!1), await eF(!1);
        }, [eF]),
        eZ = er || (void 0 !== eh && eh > 1),
        eH = ei ? void 0 !== eh && eh > 1 : eS || (void 0 !== eh && eh > 1);
      return (0, t.jsx)(F.AccountSwitcherItem, {
        asChild: !0,
        className: Y,
        href: ee ? eW : void 0,
        onClick: G,
        onPointerOver: () => {
          ef.prefetch(eW),
            "SVM" === (0, I.getChainArchFromAddress)(eM)
              ? (0, R.prefetchProfileTokensPage)(eM, em, ej)
              : (0, L.prefetchProfileItemsPage)(eM, em);
        },
        children: (0, t.jsxs)("li", {
          children: [
            (0, t.jsx)(F.AccountSwitcherItemAvatar, {
              badge: eD
                ? (0, t.jsx)(F.AccountSwitcherItemAvatarBadge, {
                    size: "xs",
                    children: (0, t.jsx)(r.Avatar, { src: eD }),
                  })
                : void 0,
              seed: eM,
              size: X,
              src: es || void 0,
            }),
            (0, t.jsx)($.AccountSwitcherItemContent, {
              children: (0, t.jsxs)(u.FlexColumn, {
                className: "items-start",
                children: [
                  (0, t.jsx)(Z.AccountSwitcherItemTitle, {
                    children: (0, t.jsxs)(d.FlexCenter, {
                      className: "gap-2",
                      children: [
                        (0, t.jsx)(p.TextOverflowTooltip, {
                          className:
                            "full" === ed ? "max-w-[150px]" : "max-w-[100px]",
                          disabled: !0,
                          children: eu || q || (0, h.formatAddress)(H),
                        }),
                        "full" === ed && (eu || q)
                          ? (0, t.jsx)(c.CopyToClipboard, {
                              onClick: (e) => e.stopPropagation(),
                              text: H,
                              tooltipText: eb("copyAddress"),
                              children: (0, t.jsxs)(d.FlexCenter, {
                                className: "gap-1",
                                children: [
                                  (0, t.jsxs)(f.TextBody, {
                                    className: "hover:text-text-primary",
                                    color: "text-secondary",
                                    size: "xs",
                                    children: [
                                      "(",
                                      (0, h.formatAddress)(H),
                                      ")",
                                    ],
                                  }),
                                  (0, t.jsx)(g.ContentCopy, {
                                    className: "hover:fill-text-primary",
                                    fill: "text-secondary",
                                    size: 14,
                                  }),
                                ],
                              }),
                            })
                          : null,
                        "full" !== ed || eu || q
                          ? null
                          : (0, t.jsx)(c.CopyToClipboard, {
                              onClick: (e) => e.stopPropagation(),
                              text: H,
                              tooltipText: eb("copyAddress"),
                              children: (0, t.jsx)(g.ContentCopy, {
                                className: "hover:fill-text-primary",
                                fill: "text-secondary",
                                size: 14,
                              }),
                            }),
                        "full" === ed && J
                          ? (0, t.jsx)(o.Link, {
                              href: "https://app.ens.domains/".concat(J),
                              onClick: (e) => e.stopPropagation(),
                              variant: "unstyled",
                              children: (0, t.jsx)(l.Chip, { children: J }),
                            })
                          : null,
                        ez
                          ? null
                          : (0, t.jsx)(v.Tooltip, {
                              className: "w-[320px]",
                              content: eb(
                                ec === A.EMBEDDED_WALLET_CONNECTOR_ID ||
                                  eR === A.EMBEDDED_WALLET_CONNECTOR_ID
                                  ? "disconnectedEmbeddedWalletTooltip"
                                  : "disconnectedWalletTooltip"
                              ),
                              children: (0, t.jsx)(l.Chip, {
                                className: "border-none px-1",
                                color: "text-secondary",
                                variant: "frosted",
                                children: (0, t.jsx)(y.LinkOff, { size: 14 }),
                              }),
                            }),
                        ea &&
                          (0, t.jsx)(l.Chip, {
                            color: "text-secondary",
                            children: eb("notLinked"),
                          }),
                        el &&
                          (0, t.jsx)(l.Chip, {
                            color: "text-secondary",
                            children: eb("connected"),
                          }),
                        eo &&
                          (0, t.jsx)(l.Chip, {
                            color: "warning",
                            children: eb("alreadyLinked"),
                          }),
                        eS &&
                          null != er &&
                          eZ &&
                          (0, t.jsx)(v.Tooltip, {
                            className: "w-[320px]",
                            content: er
                              ? eb("privateWalletTooltip")
                              : eb("publicWalletTooltip"),
                            children: (0, t.jsx)(x.UnstyledButton, {
                              "aria-label": er
                                ? eb("makePublic")
                                : eb("makePrivate"),
                              disabled: eA,
                              onClick: (e) => {
                                e.stopPropagation(), e$();
                              },
                              children: (0, t.jsx)(l.Chip, {
                                className: "border-none px-1",
                                color: "text-secondary",
                                variant: "frosted",
                                children: er
                                  ? (0, t.jsx)(S.VisibilityOff, { size: 14 })
                                  : (0, t.jsx)(j.Visibility, { size: 14 }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  }),
                  K
                    ? (0, t.jsx)(F.AccountSwitcherItemDescription, {
                        className: "flex items-center gap-2",
                        children: K,
                      })
                    : null,
                ],
              }),
            }),
            Q && e_
              ? (0, t.jsx)(V.AccountSwitcherItemSide, {
                  children: (0, t.jsx)("div", {
                    className: "size-2 rounded-full bg-success-1",
                  }),
                })
              : null,
            et && eH
              ? (0, t.jsx)(V.AccountSwitcherItemSide, {
                  children: (0, t.jsx)(a.Dropdown, {
                    align: "end",
                    content: (0, t.jsxs)(t.Fragment, {
                      children: [
                        !ei &&
                          eS &&
                          (0, t.jsx)(a.DropdownItem, {
                            onClick: () => eP(!0),
                            children: (0, t.jsx)(a.DropdownItemContent, {
                              children: (0, t.jsx)(a.DropdownItemTitle, {
                                children: eb("editLabel"),
                              }),
                            }),
                          }),
                        !ei &&
                          eS &&
                          (0, t.jsx)(a.DropdownItem, {
                            asChild: !0,
                            children: (0, t.jsx)(o.Link, {
                              href: "/settings/wallet-linking/".concat(
                                eM,
                                "/edit-profile"
                              ),
                              children: (0, t.jsx)(a.DropdownItemContent, {
                                children: (0, t.jsx)(a.DropdownItemTitle, {
                                  children: eb("editProfile"),
                                }),
                              }),
                            }),
                          }),
                        !ei &&
                          eS &&
                          null != er &&
                          eZ &&
                          (0, t.jsx)(a.DropdownItem, {
                            disabled: eA,
                            onClick: e$,
                            children: (0, t.jsx)(a.DropdownItemContent, {
                              children: (0, t.jsx)(a.DropdownItemTitle, {
                                children: er
                                  ? eb("makePublic")
                                  : eb("makePrivate"),
                              }),
                            }),
                          }),
                        void 0 !== eh &&
                          eh > 1 &&
                          (0, t.jsx)(a.DropdownItem, {
                            onClick: () => eB(eM),
                            children: (0, t.jsx)(a.DropdownItemContent, {
                              children: (0, t.jsx)(a.DropdownItemTitle, {
                                children: eb("unlinkWallet"),
                              }),
                            }),
                          }),
                      ],
                    }),
                    side: "bottom",
                    children: (0, t.jsx)(x.UnstyledButton, {
                      children: (0, t.jsx)(b.MoreHoriz, {
                        fill: "text-secondary",
                        size: 20,
                      }),
                    }),
                  }),
                })
              : null,
            eI &&
              (0, t.jsx)(m.Modal, {
                content: (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(m.ModalHeader, {
                      children: (0, t.jsx)(m.ModalHeaderTitle, {
                        children: eb("makePublicConfirmationTitle"),
                      }),
                    }),
                    (0, t.jsx)(m.ModalBody, {
                      children: (0, t.jsx)(f.TextBody, {
                        color: "text-secondary",
                        children: eb("makePublicConfirmationMessage"),
                      }),
                    }),
                    (0, t.jsxs)(m.ModalFooter, {
                      children: [
                        (0, t.jsx)(m.ModalFooterButton, {
                          onClick: () => ek(!1),
                          variant: "secondary",
                          children: eb("cancel"),
                        }),
                        (0, t.jsx)(m.ModalFooterButton, {
                          disabled: eA,
                          onClick: eV,
                          variant: "warning",
                          children: eb("makePublic"),
                        }),
                      ],
                    }),
                  ],
                }),
                onOpenChange: (e) => {
                  e || ek(!1);
                },
                open: eI,
              }),
            (0, t.jsx)(O.EditWalletLabelModal, {
              address: eM,
              currentLabel: eu,
              onOpenChange: eP,
              onSuccess: en,
              open: eT,
            }),
          ],
        }),
      });
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
      (e._sentryDebugIds[n] = "7ffb4077-1ffb-5d09-9cf4-6086d6608f61"));
  } catch (e) {}
})();
//# debugId=7ffb4077-1ffb-5d09-9cf4-6086d6608f61
