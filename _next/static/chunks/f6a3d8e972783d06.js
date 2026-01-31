(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  320163,
  (e) => {
    "use strict";
    e.s(["ProgressChip", () => i]);
    var n = e.i(705378),
      t = e.i(590268),
      r = e.i(567089),
      a = e.i(437153),
      s = e.i(2795);
    let l = (0, e.i(471966).tv)({
      base: "flex h-6 items-center gap-2",
      variants: {
        variant: {
          default: "bg-rare-transparent-1 text-rare",
          success: "bg-success-1-transparent-1 text-success-1",
          error: "bg-error-1-transparent-1 text-error-1",
          warning: "bg-warning-transparent-1 text-warning",
        },
      },
    });
    function i(e) {
      let i,
        o,
        d,
        c = (0, t.c)(10),
        { className: u, variant: m, children: h, isLoading: g, icon: v } = e,
        p = void 0 === m ? "default" : m;
      return (
        c[0] !== u || c[1] !== p
          ? ((i = (0, a.classNames)(l({ variant: p }), u)),
            (c[0] = u),
            (c[1] = p),
            (c[2] = i))
          : (i = c[2]),
        c[3] !== g
          ? ((o = g ? (0, n.jsx)(s.Spinner, { size: "2xs" }) : null),
            (c[3] = g),
            (c[4] = o))
          : (o = c[4]),
        c[5] !== h || c[6] !== v || c[7] !== i || c[8] !== o
          ? ((d = (0, n.jsxs)(r.Chip, { className: i, children: [o, v, h] })),
            (c[5] = h),
            (c[6] = v),
            (c[7] = i),
            (c[8] = o),
            (c[9] = d))
          : (d = c[9]),
        d
      );
    }
  },
  731049,
  845139,
  589534,
  320464,
  295165,
  731950,
  553919,
  (e) => {
    "use strict";
    e.s(
      [
        "OpenChestButtonFragment",
        () => y,
        "OpenChestButton_treasureFragment",
        () => C,
      ],
      731049
    );
    var n = e.i(528198);
    e.s(
      [
        "OpenTreasureChestModalFragment",
        () => f,
        "OpenTreasureChestModal_treasureFragment",
        () => x,
      ],
      731950
    ),
      e.s(["ItemRewardCardFragment", () => d], 589534);
    var t = e.i(682576),
      r = e.i(201578),
      a = e.i(959105);
    e.i(661049);
    var s = e.i(190519),
      l = e.i(846428),
      i = e.i(57465);
    e.s(["GrandPrizeModalFragment", () => o], 845139);
    let o = (0, n.graphql)(
        "\n    fragment GrandPrizeModal on UserReward {\n      id\n      treasureChestId\n      item {\n        id\n        name\n        collection {\n          ...CollectionLockup\n          ...CollectionPreviewTooltip\n          name\n          imageUrl\n        }\n      }\n    }\n  ",
        [t.CollectionLockupFragment, r.CollectionPreviewTooltipFragment]
      ),
      d = (0, n.graphql)(
        "\n    fragment ItemRewardCard on UserReward {\n      id\n      address\n      claimedAt\n      orderId\n      isGrandPrize\n      ...ItemRewardMedia\n      ...GrandPrizeModal\n      item {\n        id\n        name\n        imageUrl\n        ...ItemLink\n        collection {\n          ...CollectionLockup\n          ...CollectionLink\n          ...CollectionPreviewTooltip\n          name\n          imageUrl\n        }\n        ...useBuyItems\n      }\n    }\n  ",
        [
          t.CollectionLockupFragment,
          l.useBuyItemsFragment,
          s.ItemLinkFragment,
          a.CollectionLinkFragment,
          r.CollectionPreviewTooltipFragment,
          i.ItemRewardMediaFragment,
          o,
        ]
      );
    var c = e.i(234761);
    e.s(["TokenRewardCardFragment", () => g], 320464);
    var u = e.i(767502),
      m = e.i(332238),
      h = e.i(279155);
    let g = (0, n.graphql)(
      "\n    fragment TokenRewardCard on UserTokenReward {\n      id\n      address\n      treasureChestId\n      claimedAt\n      airdrop\n      ...TokenRewardMedia\n      claimActions {\n        actions {\n          ...ActionTimeline\n        }\n      }\n      balance {\n        usdValue\n        quantity\n        currency {\n          name\n          symbol\n          ...ContextCurrency\n        }\n      }\n    }\n  ",
      [
        m.ActionTimelineFragment,
        u.ContextCurrencyFragment,
        h.TokenRewardMediaFragment,
      ]
    );
    e.s(["TreasureRewardCardFragment", () => p], 295165);
    var v = e.i(186869);
    let p = (0, n.graphql)(
        "\n    fragment TreasureRewardCard on Badge {\n      id\n      name\n      description\n      ...TreasureRewardMedia\n    }\n  ",
        [v.TreasureRewardMediaFragment]
      ),
      x = (0, n.graphql)(
        "\n    fragment OpenTreasureChestModal_treasure on Badge {\n      __typename\n      id\n      name\n      ...TreasureRewardCard\n    }\n  ",
        [p]
      ),
      f = (0, n.graphql)(
        "\n    fragment OpenTreasureChestModal on TreasureChest {\n      id\n      waveName\n      openEnd\n      chestLevels {\n        level\n        pointsRequired\n      }\n      userProgress {\n        totalPoints\n        hasExceededLevelCap\n        currentLevel\n        currentTier\n        levelProgressPercent\n        minimumVoyageChestLevel {\n          level\n          name\n        }\n      }\n      userRewards {\n        __typename\n        id\n        treasureChestId\n        claimedAt\n        address\n        ...ItemRewardCard\n        ...SortRewardsByValue_item\n      }\n      userTokenRewards {\n        __typename\n        id\n        treasureChestId\n        claimedAt\n        address\n        ...TokenRewardCard\n        ...SortRewardsByValue_token\n      }\n      userTreasures {\n        ...OpenTreasureChestModal_treasure\n      }\n    }\n  ",
        [
          d,
          c.SortRewardsByValue_itemFragment,
          g,
          c.SortRewardsByValue_tokenFragment,
          x,
        ]
      ),
      C = (0, n.graphql)(
        "\n    fragment OpenChestButton_treasure on Badge {\n      name\n      ...OpenTreasureChestModal_treasure\n    }\n  ",
        [x]
      ),
      y = (0, n.graphql)(
        "\n    fragment OpenChestButton on TreasureChest {\n      ...OpenTreasureChestModal\n      userProgress {\n        totalPoints\n      }\n      userRewards {\n        id\n        claimedAt\n      }\n      userTokenRewards {\n        id\n        claimedAt\n      }\n      userTreasures {\n        ...OpenChestButton_treasure\n      }\n    }\n  ",
        [f, C]
      );
    e.s(["TreasureChestWaveFragment", () => w], 553919);
    let w = (0, n.graphql)(
      "\n  fragment TreasureChestWave on TreasureChest {\n    id\n    name\n    waveName\n  }\n"
    );
  },
  598777,
  (e) => {
    "use strict";
    e.s(["useAuthenticatedQuery", () => l]);
    var n = e.i(590268),
      t = e.i(333799);
    e.i(500598);
    var r = e.i(207225),
      a = e.i(71105);
    let s = { requestPolicy: "cache-and-network" };
    function l(e, l) {
      let i,
        o,
        d,
        c,
        u,
        m,
        h,
        g,
        v,
        p,
        x = (0, n.c)(27);
      x[0] !== l
        ? ((i = void 0 === l ? {} : l), (x[0] = l), (x[1] = i))
        : (i = x[1]);
      let { throwOnError: f } = i,
        C = void 0 === f || f,
        y = (0, r.useAddress)(),
        w = (0, a.useAuthenticated)(),
        A = w && y ? "authenticated:".concat(y) : void 0;
      x[2] !== e
        ? (({ variables: u, pause: d, context: o, ...c } = e),
          (x[2] = e),
          (x[3] = o),
          (x[4] = d),
          (x[5] = c),
          (x[6] = u))
        : ((o = x[3]), (d = x[4]), (c = x[5]), (u = x[6]));
      let k = !!d || !(w && y);
      x[7] !== A
        ? ((m = A && { _authKey: A }), (x[7] = A), (x[8] = m))
        : (m = x[8]),
        x[9] !== m || x[10] !== u
          ? ((h = { ...u, ...m }), (x[9] = m), (x[10] = u), (x[11] = h))
          : (h = x[11]);
      let T = h,
        j = null != o ? o : s;
      x[12] !== c || x[13] !== k || x[14] !== T || x[15] !== j
        ? ((g = { ...c, variables: T, pause: k, context: j }),
          (x[12] = c),
          (x[13] = k),
          (x[14] = T),
          (x[15] = j),
          (x[16] = g))
        : (g = x[16]),
        x[17] !== C
          ? ((v = { throwOnError: C }), (x[17] = C), (x[18] = v))
          : (v = x[18]);
      let [M, b] = (0, t.useQuery)(g, v);
      if (!(w && y)) {
        let e, n;
        return (
          x[19] !== M
            ? ((e = { ...M, data: void 0 }), (x[19] = M), (x[20] = e))
            : (e = x[20]),
          x[21] !== b || x[22] !== e
            ? ((n = [e, b]), (x[21] = b), (x[22] = e), (x[23] = n))
            : (n = x[23]),
          n
        );
      }
      return (
        x[24] !== b || x[25] !== M
          ? ((p = [M, b]), (x[24] = b), (x[25] = M), (x[26] = p))
          : (p = x[26]),
        p
      );
    }
  },
  57465,
  (e) => {
    "use strict";
    e.s(["ItemRewardMediaFragment", () => r]);
    var n = e.i(528198),
      t = e.i(600028);
    let r = (0, n.graphql)(
      "\n    fragment ItemRewardMedia on UserReward {\n      id\n      isGrandPrize\n      item {\n        ...ItemMedia\n        chain {\n          identifier\n        }\n      }\n    }\n  ",
      [t.ItemMediaFragment]
    );
  },
  234761,
  (e) => {
    "use strict";
    e.s([
      "SortRewardsByValue_itemFragment",
      () => a,
      "SortRewardsByValue_tokenFragment",
      () => s,
      "sortRewardsByValue",
      () => i,
    ]);
    var n = e.i(528198),
      t = e.i(635341),
      r = e.i(465172);
    let a = (0, n.graphql)(
        "\n  fragment SortRewardsByValue_item on UserReward {\n    __typename\n    id\n    item {\n      bestOffer {\n        pricePerItem {\n          usd\n        }\n      }\n    }\n  }\n"
      ),
      s = (0, n.graphql)(
        "\n  fragment SortRewardsByValue_token on UserTokenReward {\n    __typename\n    id\n    balance {\n      usdValue\n    }\n  }\n"
      );
    function l(e) {
      var n, l, i, o, d, c;
      if ("UserTokenReward" === e.__typename) {
        let n = (0, t.readFragment)(s, e);
        return (0, r.bn)(
          null != (d = null == (o = n.balance) ? void 0 : o.usdValue) ? d : 0
        ).toNumber();
      }
      let u = (0, t.readFragment)(a, e);
      return (0, r.bn)(
        null !=
          (c =
            null == (i = u.item) ||
            null == (l = i.bestOffer) ||
            null == (n = l.pricePerItem)
              ? void 0
              : n.usd)
          ? c
          : 0
      ).toNumber();
    }
    function i(e, n) {
      return [
        ...e.map((e) => ({ original: e, sortData: (0, t.readFragment)(a, e) })),
        ...n.map((e) => ({ original: e, sortData: (0, t.readFragment)(s, e) })),
      ]
        .sort((e, n) => l(e.sortData) - l(n.sortData))
        .map((e) => {
          let { original: n } = e;
          return n;
        });
    }
  },
  279155,
  (e) => {
    "use strict";
    e.s(["TokenRewardMediaFragment", () => a]);
    var n = e.i(81810),
      t = e.i(528198),
      r = e.i(111908);
    let a = (0, t.graphql)(
      "\n    fragment TokenRewardMedia on UserTokenReward {\n      id\n      balance {\n        usdValue\n        currency {\n          imageUrl\n          ...CurrencyLockup\n          metadata {\n            ...useCurrencyBannerMedia\n            ...useCurrencyBannerMediaFallback\n          }\n        }\n      }\n    }\n  ",
      [
        n.CurrencyLockupFragment,
        r.useCurrencyBannerMediaFragment,
        r.useCurrencyBannerMediaFallbackFragment,
      ]
    );
  },
  186869,
  (e) => {
    "use strict";
    e.s(["TreasureRewardMediaFragment", () => n]);
    let n = (0, e.i(528198).graphql)(
      "\n  fragment TreasureRewardMedia on Badge {\n    id\n    name\n    imageUrl\n    animationUrl\n  }\n"
    );
  },
  287342,
  293108,
  (e) => {
    "use strict";
    e.s(["useActiveTreasureChests", () => h], 287342);
    var n = e.i(528198),
      t = e.i(635341),
      r = e.i(969498),
      a = e.i(731950);
    e.s(["TreasureChestContentFragment", () => i], 293108);
    var s = e.i(731049),
      l = e.i(553919);
    let i = (0, n.graphql)(
      "\n    fragment TreasureChestContent on TreasureChest {\n      id\n      ...TreasureChestWave\n      ...OpenChestButton\n      chestLevels {\n        level\n        pointsRequired\n      }\n    }\n  ",
      [l.TreasureChestWaveFragment, s.OpenChestButtonFragment]
    );
    e.i(402819);
    var o = e.i(916744),
      d = e.i(207225),
      c = e.i(598777);
    let u = (0, n.graphql)(
        "\n    query useActiveTreasureChestsQuery {\n      activeTreasureChests {\n        items {\n          id\n          endDate\n          ...TreasureChestContent\n          ...TreasureChestWave\n          ...OpenTreasureChestModal\n          waveName\n        }\n      }\n    }\n  ",
        [i, l.TreasureChestWaveFragment, a.OpenTreasureChestModalFragment]
      ),
      m = (0, n.graphql)(
        "\n    subscription UseActiveTreasureChestsProgress($address: Address!) {\n      treasureChestProgress(address: $address) {\n        totalPoints\n      }\n    }\n  "
      );
    function h() {
      var e, n;
      let s = (0, d.useAddress)(),
        [l, i] = (0, c.useAuthenticatedQuery)(
          { query: u },
          { throwOnError: !1 }
        ),
        { data: h, ...g } = l,
        v =
          null !=
          (n =
            null == h || null == (e = h.activeTreasureChests)
              ? void 0
              : e.items)
            ? n
            : [],
        p = v.at(0),
        x = (0, r.useMemo)(() => {
          if (!p) return;
          let e = (0, t.readFragment)(a.OpenTreasureChestModalFragment, p);
          if (e.userProgress)
            return {
              totalPoints: e.userProgress.totalPoints,
              hasExceededLevelCap: e.userProgress.hasExceededLevelCap,
              currentLevel: e.userProgress.currentLevel,
              currentTier: e.userProgress.currentTier,
              levelProgressPercent: e.userProgress.levelProgressPercent,
              minimumVoyageChestLevel: e.userProgress.minimumVoyageChestLevel,
            };
        }, [p]);
      return (
        (0, o.useSubscription)(
          {
            query: m,
            variables: { address: null != s ? s : "" },
            pause: !s,
            pauseOnInactivity: !1,
          },
          () => {
            i({ requestPolicy: "network-only" });
          }
        ),
        {
          activeTreasureChests: v,
          activeTreasureChest: p,
          userProgress: x,
          ...g,
          refetch: i,
          refetchProgress: () => {
            s && i({ requestPolicy: "network-only" });
          },
        }
      );
    }
  },
  49878,
  (e) => {
    "use strict";
    e.s(["LinkedWalletsSkeletons", () => l]);
    var n = e.i(705378),
      t = e.i(590268),
      r = e.i(695698),
      a = e.i(999258),
      s = e.i(584502);
    function l(e) {
      let l,
        i,
        o = (0, t.c)(6),
        { count: d, showList: c } = e,
        u = void 0 === d ? 3 : d;
      o[0] !== u
        ? ((l = Array.from({ length: u }, (e, t) =>
            (0, n.jsxs)(
              "div",
              {
                children: [
                  (0, n.jsx)(s.AccountSwitcherAccountItemsSkeleton, {}),
                  t < u - 1 && (0, n.jsx)(a.Separator, {}),
                ],
              },
              t
            )
          )),
          (o[0] = u),
          (o[1] = l))
        : (l = o[1]);
      let m = l;
      if (!(void 0 === c || c)) {
        let e;
        return (
          o[2] !== m
            ? ((e = (0, n.jsx)(n.Fragment, { children: m })),
              (o[2] = m),
              (o[3] = e))
            : (e = o[3]),
          e
        );
      }
      return (
        o[4] !== m
          ? ((i = (0, n.jsx)(r.List, {
              className: "rounded-lg border border-border-1 bg-bg-primary",
              showBorder: !1,
              children: m,
            })),
            (o[4] = m),
            (o[5] = i))
          : (i = o[5]),
        i
      );
    }
  },
  49212,
  (e) => {
    "use strict";
    e.s(["AccountBalanceWallet", () => s]);
    var n = e.i(705378),
      t = e.i(590268),
      r = e.i(790621),
      a = e.i(437153);
    function s(e) {
      let s,
        l,
        i,
        o,
        d,
        c,
        u,
        m,
        h = (0, t.c)(15);
      h[0] !== e
        ? (({ size: i, fill: o, fillAttribute: d, className: s, ...l } = e),
          (h[0] = e),
          (h[1] = s),
          (h[2] = l),
          (h[3] = i),
          (h[4] = o),
          (h[5] = d))
        : ((s = h[1]), (l = h[2]), (i = h[3]), (o = h[4]), (d = h[5]));
      let g = void 0 === i ? 24 : i,
        v = void 0 === o ? "current" : o,
        p = void 0 === d ? "currentColor" : d;
      return (
        h[6] !== s || h[7] !== v
          ? ((c = (0, a.classNames)((0, r.fillVariants)({ fill: v }), s)),
            (h[6] = s),
            (h[7] = v),
            (h[8] = c))
          : (c = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)("path", {
              d: "M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z",
            })),
            (h[9] = u))
          : (u = h[9]),
        h[10] !== p || h[11] !== l || h[12] !== g || h[13] !== c
          ? ((m = (0, n.jsx)("svg", {
              "aria-label": "Account Balance Wallet",
              className: c,
              fill: p,
              height: g,
              role: "img",
              viewBox: "0 -960 960 960",
              width: g,
              xmlns: "http://www.w3.org/2000/svg",
              ...l,
              children: u,
            })),
            (h[10] = p),
            (h[11] = l),
            (h[12] = g),
            (h[13] = c),
            (h[14] = m))
          : (m = h[14]),
        m
      );
    }
  },
  919389,
  40485,
  392877,
  (e) => {
    "use strict";
    e.s(["LinkWalletChangeDetectedModalContent", () => z], 919389);
    var n = e.i(705378),
      t = e.i(590268),
      r = e.i(155757),
      a = e.i(194153),
      s = e.i(39771),
      l = e.i(838820),
      i = e.i(972483),
      o = e.i(950293),
      d = e.i(683269),
      c = e.i(838996),
      u = e.i(654469),
      m = e.i(922345);
    e.s(["useExternalAccount", () => f], 40485);
    var h = e.i(861316),
      g = e.i(297421),
      v = e.i(206849),
      p = e.i(901562),
      x = e.i(223458);
    let f = () => {
      let e,
        n,
        r = (0, t.c)(8),
        { externalAccount: a } = (0, g.useSnapshot)(x.AccountState),
        { connect: s, isConnecting: l } = (0, v.useConnect)(),
        i = (0, p.useConnections)();
      r[0] !== s || r[1] !== i || r[2] !== a
        ? ((e = async () => {
            if (!a) return;
            let e = i.find((e) =>
              e.addresses.some((e) => (0, h.isAddressEqual)(e, a.address))
            );
            e &&
              (x.AccountActions.setAccount(a),
              await s(e.connector, { address: a.address, switchOnConnect: !0 }),
              x.AccountActions.setExternalAccount(void 0));
          }),
          (r[0] = s),
          (r[1] = i),
          (r[2] = a),
          (r[3] = e))
        : (e = r[3]);
      let o = e;
      return (
        r[4] !== o || r[5] !== a || r[6] !== l
          ? ((n = { account: a, connect: o, isConnecting: l }),
            (r[4] = o),
            (r[5] = a),
            (r[6] = l),
            (r[7] = n))
          : (n = r[7]),
        n
      );
    };
    var C = e.i(81311),
      y = e.i(811917),
      w = e.i(940704),
      A = e.i(969498),
      k = e.i(389852),
      T = e.i(727325),
      j = e.i(46486),
      M = e.i(821303);
    e.i(176633);
    var b = e.i(752443),
      S = e.i(514870),
      F = e.i(146281),
      L = e.i(977839),
      B = e.i(287342),
      N = e.i(751712),
      P = e.i(925252);
    let W = (e) => {
        let { address: n, onLinked: r, onAlreadyLinked: a } = e,
          s = (0, w.useTranslations)("useLinkWallet"),
          { showErrorMessage: l, showSuccessMessage: i } = (0, d.useToasts)(),
          o = (() => {
            let e,
              n = (0, t.c)(3),
              r = (0, F.useEvmSignFunction)(),
              a = (0, L.useSvmSignFunction)();
            return (
              n[0] !== r || n[1] !== a
                ? ((e = async (e) => {
                    let { connector: n, message: t, address: s } = e;
                    switch (
                      (!n.baseConnector.connected &&
                        (await n.baseConnector.connect()),
                      n.chainArch)
                    ) {
                      case "EVM":
                        return r({ connector: n, message: t, address: s });
                      case "SVM":
                        return a({ connector: n, message: t, address: s });
                    }
                  }),
                  (n[0] = r),
                  (n[1] = a),
                  (n[2] = e))
                : (e = n[2]),
              e
            );
          })(),
          [c, u] = (0, A.useState)(!1),
          m = (0, p.useConnections)(),
          { refetchProgress: g } = (0, B.useActiveTreasureChests)();
        return {
          linkWallet: (0, N.useAuthenticatedCallback)(async function () {
            let { force: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            u(!0);
            try {
              let d,
                c = m.find((e) =>
                  e.addresses.some((e) => (0, h.isAddressEqual)(e, n))
                );
              if (!c) return void l(s("couldNotFindConnection"));
              if (c.connector.id === S.EMBEDDED_WALLET_CONNECTOR_ID) {
                let n = await (0, b.getUser)();
                d = await P.accountsAdapter.linkPrivyWallet({
                  token: n.accessToken,
                  force: e,
                });
              } else {
                let t = await P.accountsAdapter.createSIWXMessage(n, c),
                  r = await o({
                    connector: c.connector,
                    address: n,
                    message: t,
                  });
                d = await P.accountsAdapter.linkWallet({
                  connection: c,
                  signature: r,
                  message: t,
                  force: e,
                });
              }
              if (d.success)
                i(s("walletLinkedSuccessfully"), { duration: 1e4 }), g(), r();
              else {
                var t;
                if (a && "ALREADY_LINKED" === d.code) return void a();
                l(null != (t = d.message) ? t : s("failedToLinkWallet"), {
                  duration: 1e4,
                });
              }
            } catch (e) {
              l((0, y.isError)(e) ? e.message : s("failedToLinkWallet"), {
                duration: 1e4,
              });
            } finally {
              u(!1);
            }
          }),
          isLinking: c,
        };
      },
      _ = (e) => {
        let r,
          a,
          s,
          o,
          d,
          c,
          u,
          m,
          h,
          g,
          v,
          p,
          x = (0, t.c)(32),
          { address: f, goBack: C, onLinked: y } = e,
          A = (0, w.useTranslations)("MoveLinkedWalletModalContent");
        x[0] !== f || x[1] !== y
          ? ((r = { address: f, onLinked: y }),
            (x[0] = f),
            (x[1] = y),
            (x[2] = r))
          : (r = x[2]);
        let { linkWallet: k, isLinking: T } = W(r);
        return (
          x[3] !== A ? ((a = A("title")), (x[3] = A), (x[4] = a)) : (a = x[4]),
          x[5] !== a
            ? ((s = (0, n.jsx)(i.ModalHeader, {
                className: "text-center",
                children: (0, n.jsx)(i.ModalHeaderTitle, {
                  className: "text-center",
                  children: a,
                }),
              })),
              (x[5] = a),
              (x[6] = s))
            : (s = x[6]),
          x[7] !== f || x[8] !== A
            ? ((o = A("description", { address: (0, l.formatAddress)(f) })),
              (x[7] = f),
              (x[8] = A),
              (x[9] = o))
            : (o = x[9]),
          x[10] !== o
            ? ((d = (0, n.jsx)(i.ModalBody, {
                className: "flex flex-col gap-6",
                children: o,
              })),
              (x[10] = o),
              (x[11] = d))
            : (d = x[11]),
          x[12] !== A ? ((c = A("no")), (x[12] = A), (x[13] = c)) : (c = x[13]),
          x[14] !== C || x[15] !== c
            ? ((u = (0, n.jsx)(i.ModalFooterButton, {
                onClick: C,
                variant: "secondary",
                children: c,
              })),
              (x[14] = C),
              (x[15] = c),
              (x[16] = u))
            : (u = x[16]),
          x[17] !== k
            ? ((m = () => {
                k({ force: !0 });
              }),
              (x[17] = k),
              (x[18] = m))
            : (m = x[18]),
          x[19] !== A
            ? ((h = A("yesMoveWallet")), (x[19] = A), (x[20] = h))
            : (h = x[20]),
          x[21] !== T || x[22] !== m || x[23] !== h
            ? ((g = (0, n.jsx)(i.ModalFooterButton, {
                autoFocus: !0,
                disabled: T,
                isLoading: T,
                onClick: m,
                variant: "primary",
                children: h,
              })),
              (x[21] = T),
              (x[22] = m),
              (x[23] = h),
              (x[24] = g))
            : (g = x[24]),
          x[25] !== g || x[26] !== u
            ? ((v = (0, n.jsxs)(i.ModalFooter, { children: [u, g] })),
              (x[25] = g),
              (x[26] = u),
              (x[27] = v))
            : (v = x[27]),
          x[28] !== v || x[29] !== s || x[30] !== d
            ? ((p = (0, n.jsxs)(n.Fragment, { children: [s, d, v] })),
              (x[28] = v),
              (x[29] = s),
              (x[30] = d),
              (x[31] = p))
            : (p = x[31]),
          p
        );
      };
    e.s(["useConnectedAccountProfile", () => E], 392877);
    var q = e.i(528198),
      R = e.i(333799);
    let I = (0, q.graphql)(
      "\n  query ConnectedAccountProfileQuery($address: Address!) {\n    profileByAddress(address: $address) {\n      __typename\n      ... on Profile {\n        address\n        username\n        displayName\n        imageUrl\n        portfolioSummary {\n          estimatedTokenValue {\n            usd\n          }\n        }\n      }\n    }\n  }\n"
    );
    function E(e) {
      var n;
      let r,
        a,
        s,
        l,
        i = (0, t.c)(9),
        o = null != e ? e : "";
      i[0] !== o ? ((r = { address: o }), (i[0] = o), (i[1] = r)) : (r = i[1]),
        i[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { suspense: !1 }), (i[2] = a))
          : (a = i[2]);
      let d = !e;
      i[3] !== r || i[4] !== d
        ? ((s = { query: I, variables: r, context: a, pause: d }),
          (i[3] = r),
          (i[4] = d),
          (i[5] = s))
        : (s = i[5]);
      let [c] = (0, R.useQuery)(s),
        { data: u, fetching: m } = c,
        h =
          (null == u || null == (n = u.profileByAddress)
            ? void 0
            : n.__typename) === "Profile"
            ? u.profileByAddress
            : null;
      return (
        i[6] !== m || i[7] !== h
          ? ((l = { profile: h, fetching: m }),
            (i[6] = m),
            (i[7] = h),
            (i[8] = l))
          : (l = i[8]),
        l
      );
    }
    let O = (e) => {
        let r,
          a,
          s,
          l = (0, t.c)(10),
          { address: o, onLinked: d, onAlreadyLinked: c } = e,
          u = (0, w.useTranslations)("LinkWalletChangeDetectedModalContent");
        l[0] !== o || l[1] !== c || l[2] !== d
          ? ((r = { address: o, onLinked: d, onAlreadyLinked: c }),
            (l[0] = o),
            (l[1] = c),
            (l[2] = d),
            (l[3] = r))
          : (r = l[3]);
        let { linkWallet: m, isLinking: h } = W(r);
        return (
          l[4] !== u
            ? ((a = u("linkWalletToAccount")), (l[4] = u), (l[5] = a))
            : (a = l[5]),
          l[6] !== h || l[7] !== m || l[8] !== a
            ? ((s = (0, n.jsx)(i.ModalFooterButton, {
                autoFocus: !0,
                disabled: h,
                isLoading: h,
                onClick: m,
                variant: "primary",
                children: a,
              })),
              (l[6] = h),
              (l[7] = m),
              (l[8] = a),
              (l[9] = s))
            : (s = l[9]),
          s
        );
      },
      z = (0, k.withSuspense)(
        (e) => {
          var t, h, g;
          let {
              address: v,
              connector: p,
              isSwitchingAccounts: x,
              onAccountSwitch: k,
              onLinked: b,
              onResetConnector: S,
              setIsSwitchingAccounts: F,
            } = e,
            L = (0, w.useTranslations)("LinkWalletChangeDetectedModalContent"),
            [B, N] = (0, A.useState)(!1),
            { showErrorMessage: P } = (0, d.useToasts)(),
            { connect: W } = f(),
            { disconnect: q } = (0, m.useDisconnect)(),
            R = (0, M.useRenderUsdBalance)(),
            { logout: I } = (0, C.useLogout)(),
            z = (0, u.useAuthenticateFlow)(),
            { profile: U } = E(v);
          return B
            ? (0, n.jsx)(_, { address: v, goBack: () => N(!1), onLinked: b })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(i.ModalHeader, {
                    className: "flex justify-center pt-7 pb-1",
                    children: (0, n.jsxs)(a.CenterAligned, {
                      className: "gap-6",
                      children: [
                        (0, n.jsx)(s.FlexCenter, {
                          className: "gap-4",
                          children:
                            "embedded" === p.type
                              ? (0, n.jsx)(T.AnimatedLogo, { size: 60 })
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(a.CenterAligned, {
                                      className:
                                        "h-16 w-16 rounded-full bg-white",
                                      children:
                                        p.icon &&
                                        (0, n.jsx)(r.Avatar, {
                                          size: 48,
                                          src: p.icon,
                                        }),
                                    }),
                                    (0, n.jsx)(c.SwapHoriz, { size: 24 }),
                                    (0, n.jsx)(T.AnimatedLogo, { size: 60 }),
                                  ],
                                }),
                        }),
                        (0, n.jsx)(i.ModalHeaderTitle, {
                          children: L("title"),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(i.ModalBody, {
                    className: "flex flex-col gap-6",
                    children: [
                      (0, n.jsx)(o.TextBody, {
                        className: "text-center",
                        color: "text-secondary",
                        children: L("description1", {
                          address: (0, l.formatAddress)(v),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "rounded-lg border border-border-1 bg-bg-primary",
                        children: (0, n.jsx)(j.LinkedAccountSwitcherItem, {
                          address: v,
                          avatarSize: 32,
                          description: R(
                            null !=
                              (g =
                                null == U ||
                                null == (h = U.portfolioSummary) ||
                                null == (t = h.estimatedTokenValue)
                                  ? void 0
                                  : t.usd)
                              ? g
                              : void 0
                          ),
                          imageUrl: (null == U ? void 0 : U.imageUrl) || void 0,
                          isLink: !1,
                          onClick: void 0,
                          showActions: !1,
                          showCheck: !1,
                          showNotLinked: !0,
                          username: null == U ? void 0 : U.username,
                          variant: "full",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(i.ModalFooter, {
                    children: [
                      (0, n.jsx)(i.ModalFooterButton, {
                        disabled: x,
                        isLoading: x,
                        onClick: async () => {
                          try {
                            if (
                              (F(!0), await I(), "embedded" === p.type && S)
                            ) {
                              await q(p, { endSession: !1 }), S();
                              return;
                            }
                            await W(),
                              z({ autoPromptSiwe: !0, onAuthenticated: k });
                          } catch (e) {
                            P(
                              (0, y.isError)(e) ? e.message : "Failed to log in"
                            );
                          } finally {
                            F(!1);
                          }
                        },
                        variant: "secondary",
                        children: L("switchAccounts"),
                      }),
                      (0, n.jsx)(O, {
                        address: v,
                        onAlreadyLinked: () => N(!0),
                        onLinked: b,
                      }),
                    ],
                  }),
                ],
              });
        },
        { fallback: null }
      );
  },
  638183,
  (e) => {
    "use strict";
    e.s(["LinkedWalletModal", () => eu], 638183);
    var n = e.i(705378),
      t = e.i(590268),
      r = e.i(528198),
      a = e.i(635341),
      s = e.i(333799),
      l = e.i(491150),
      i = e.i(149431),
      o = e.i(194153),
      d = e.i(437153),
      c = e.i(965523),
      u = e.i(718813),
      m = e.i(695698),
      h = e.i(972483),
      g = e.i(950293),
      v = e.i(165102),
      p = e.i(49212),
      x = e.i(861316),
      f = e.i(471317),
      C = e.i(150127),
      y = e.i(223458);
    function w() {
      y.AccountActions.setShouldSyncAccountState(!0);
    }
    function A() {
      return y.AccountActions.setShouldSyncAccountState(!1), w;
    }
    var k = e.i(41808),
      T = e.i(80839),
      j = e.i(940704),
      M = e.i(969498),
      b = e.i(136419),
      S = e.i(436609),
      F = e.i(238642),
      L = e.i(545460),
      B = e.i(389852),
      N = e.i(180909),
      P = e.i(806056);
    e.i(500598);
    var W = e.i(207225),
      _ = e.i(71105),
      q = e.i(84438);
    e.i(904520);
    var R = e.i(765778);
    e.i(754689);
    var I = e.i(313479),
      E = e.i(46486),
      O = e.i(39771),
      z = e.i(967593),
      U = e.i(217961);
    let V = (0, r.graphql)(
        "\n  query MaxWalletsLinkedQuery {\n    maxWalletsLinked\n  }\n"
      ),
      D = (0, B.withSuspense)(
        (e) => {
          var r;
          let a,
            l,
            i,
            o,
            d,
            c,
            u,
            m,
            g,
            p,
            x,
            f,
            C,
            y,
            w,
            A,
            k,
            T,
            M,
            b = (0, t.c)(48),
            { linkedWalletsCount: S, fetching: F } = e,
            L = void 0 !== F && F,
            B = (0, j.useTranslations)("LinkedWalletModal"),
            { setIsLinkedWalletModalOpen: N, setIsAddingNewWallet: P } = (0,
            q.useLinkedWalletModalStore)();
          b[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = { query: V }),
              (l = { throwOnError: !1 }),
              (b[0] = a),
              (b[1] = l))
            : ((a = b[0]), (l = b[1]));
          let [W] = (0, s.useQuery)(a, l),
            { data: _ } = W,
            R = null != (r = null == _ ? void 0 : _.maxWalletsLinked) ? r : 10,
            I = S >= R;
          b[2] !== N
            ? ((i = () => {
                N(!1);
              }),
              (b[2] = N),
              (b[3] = i))
            : (i = b[3]),
            b[4] !== B ? ((o = B("back")), (b[4] = B), (b[5] = o)) : (o = b[5]),
            b[6] !== i || b[7] !== o
              ? ((d = (0, n.jsx)(h.ModalFooterButton, {
                  className: "w-full",
                  onClick: i,
                  variant: "secondary",
                  children: o,
                })),
                (b[6] = i),
                (b[7] = o),
                (b[8] = d))
              : (d = b[8]),
            b[9] !== R || b[10] !== B
              ? ((c = B("atMostWalletLinked", { count: R })),
                (b[9] = R),
                (b[10] = B),
                (b[11] = c))
              : (c = b[11]);
          let E = L || !I,
            D = L || I;
          b[12] !== P
            ? ((u = () => {
                P(!0);
              }),
              (b[12] = P),
              (b[13] = u))
            : (u = b[13]),
            b[14] !== B
              ? ((m = B("addWallet")), (b[14] = B), (b[15] = m))
              : (m = b[15]),
            b[16] !== D || b[17] !== u || b[18] !== m
              ? ((g = (0, n.jsx)("span", {
                  className: "w-full",
                  children: (0, n.jsx)(h.ModalFooterButton, {
                    disabled: D,
                    onClick: u,
                    variant: "primary",
                    children: m,
                  }),
                })),
                (b[16] = D),
                (b[17] = u),
                (b[18] = m),
                (b[19] = g))
              : (g = b[19]),
            b[20] !== g || b[21] !== c || b[22] !== E
              ? ((p = (0, n.jsx)(z.Tooltip, {
                  className: "max-w-[400px]",
                  content: c,
                  disabled: E,
                  children: g,
                })),
                (b[20] = g),
                (b[21] = c),
                (b[22] = E),
                (b[23] = p))
              : (p = b[23]),
            b[24] !== p || b[25] !== d
              ? ((x = (0, n.jsx)(v.Media, {
                  greaterThanOrEqual: "md",
                  children: (0, n.jsxs)(h.ModalFooter, {
                    className: "gap-3",
                    children: [d, p],
                  }),
                })),
                (b[24] = p),
                (b[25] = d),
                (b[26] = x))
              : (x = b[26]),
            b[27] !== R || b[28] !== B
              ? ((f = B("atMostWalletLinked", { count: R })),
                (b[27] = R),
                (b[28] = B),
                (b[29] = f))
              : (f = b[29]);
          let H = L || !I,
            Q = L || I;
          return (
            b[30] !== P
              ? ((C = () => {
                  P(!0);
                }),
                (b[30] = P),
                (b[31] = C))
              : (C = b[31]),
            b[32] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, n.jsx)(U.Add, { size: 20 })), (b[32] = y))
              : (y = b[32]),
            b[33] !== B
              ? ((w = B("addWallet")), (b[33] = B), (b[34] = w))
              : (w = b[34]),
            b[35] !== w
              ? ((A = (0, n.jsxs)(O.FlexCenter, {
                  className: "gap-2",
                  children: [y, w],
                })),
                (b[35] = w),
                (b[36] = A))
              : (A = b[36]),
            b[37] !== Q || b[38] !== C || b[39] !== A
              ? ((k = (0, n.jsx)("span", {
                  className: "w-full",
                  children: (0, n.jsx)(h.ModalFooterButton, {
                    disabled: Q,
                    onClick: C,
                    variant: "secondary",
                    children: A,
                  }),
                })),
                (b[37] = Q),
                (b[38] = C),
                (b[39] = A),
                (b[40] = k))
              : (k = b[40]),
            b[41] !== f || b[42] !== H || b[43] !== k
              ? ((T = (0, n.jsx)(v.Media, {
                  lessThan: "md",
                  children: (0, n.jsx)(h.ModalFooter, {
                    className: "gap-3",
                    children: (0, n.jsx)(z.Tooltip, {
                      className: "max-w-[400px]",
                      content: f,
                      disabled: H,
                      children: k,
                    }),
                  }),
                })),
                (b[41] = f),
                (b[42] = H),
                (b[43] = k),
                (b[44] = T))
              : (T = b[44]),
            b[45] !== x || b[46] !== T
              ? ((M = (0, n.jsxs)(n.Fragment, { children: [x, T] })),
                (b[45] = x),
                (b[46] = T),
                (b[47] = M))
              : (M = b[47]),
            M
          );
        },
        {
          fallback: (0, n.jsx)(function () {
            let e,
              r,
              a,
              s,
              l,
              i,
              o,
              d,
              c,
              u = (0, t.c)(19),
              m = (0, j.useTranslations)("LinkedWalletModal");
            return (
              u[0] !== m
                ? ((e = m("back")), (u[0] = m), (u[1] = e))
                : (e = u[1]),
              u[2] !== e
                ? ((r = (0, n.jsx)(h.ModalFooterButton, {
                    className: "w-full",
                    variant: "secondary",
                    children: e,
                  })),
                  (u[2] = e),
                  (u[3] = r))
                : (r = u[3]),
              u[4] !== m
                ? ((a = m("addWallet")), (u[4] = m), (u[5] = a))
                : (a = u[5]),
              u[6] !== a
                ? ((s = (0, n.jsx)(h.ModalFooterButton, {
                    variant: "primary",
                    children: a,
                  })),
                  (u[6] = a),
                  (u[7] = s))
                : (s = u[7]),
              u[8] !== r || u[9] !== s
                ? ((l = (0, n.jsx)(v.Media, {
                    greaterThanOrEqual: "md",
                    children: (0, n.jsxs)(h.ModalFooter, {
                      className: "gap-3",
                      children: [r, s],
                    }),
                  })),
                  (u[8] = r),
                  (u[9] = s),
                  (u[10] = l))
                : (l = u[10]),
              u[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, n.jsx)(U.Add, { size: 20 })), (u[11] = i))
                : (i = u[11]),
              u[12] !== m
                ? ((o = m("addWallet")), (u[12] = m), (u[13] = o))
                : (o = u[13]),
              u[14] !== o
                ? ((d = (0, n.jsx)(v.Media, {
                    lessThan: "md",
                    children: (0, n.jsx)(h.ModalFooter, {
                      className: "gap-3",
                      children: (0, n.jsx)(h.ModalFooterButton, {
                        variant: "secondary",
                        children: (0, n.jsxs)(O.FlexCenter, {
                          className: "gap-2",
                          children: [i, o],
                        }),
                      }),
                    }),
                  })),
                  (u[14] = o),
                  (u[15] = d))
                : (d = u[15]),
              u[16] !== l || u[17] !== d
                ? ((c = (0, n.jsxs)(n.Fragment, { children: [l, d] })),
                  (u[16] = l),
                  (u[17] = d),
                  (u[18] = c))
                : (c = u[18]),
              c
            );
          }, {}),
        }
      );
    var H = e.i(49878),
      Q = e.i(414122),
      $ = e.i(40485),
      G = e.i(922013),
      Z = e.i(919389),
      K = e.i(155757),
      X = e.i(46897),
      Y = e.i(683269),
      J = e.i(838996),
      ee = e.i(206849),
      en = e.i(922345),
      et = e.i(358256),
      er = e.i(584502),
      ea = e.i(727325),
      es = e.i(320163),
      el = e.i(821303),
      ei = e.i(392877);
    function eo(e) {
      var t, r, a;
      let { fromConnector: s, address: l } = e,
        i = (0, j.useTranslations)("SwitchWalletsModalContent"),
        d = s.supportsAutoSwitching,
        { showErrorMessage: u } = (0, Y.useToasts)(),
        { disconnect: m } = (0, en.useDisconnect)(),
        { connect: v } = (0, ee.useConnect)({ isLinking: !0 }),
        [p, f] = (0, M.useState)(!1),
        C = async () => {
          try {
            await m(s, { endSession: !1 });
          } finally {
            f(!0);
          }
        };
      (0, M.useEffect)(() => {
        let e = async function () {
          let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          try {
            let e = await v(s, { switchOnConnect: !1 });
            if ((0, x.isAddressEqual)(e, l))
              return void u(
                (0, n.jsxs)(c.FlexColumn, {
                  children: [
                    (0, n.jsx)(X.ToastTitle, {
                      children: i("addressDidNotChange"),
                    }),
                    (0, n.jsx)(X.ToastDescription, {
                      size: "xs",
                      children: i("switchInExtension", {
                        connectorName: s.name,
                      }),
                    }),
                  ],
                }),
                {}
              );
          } catch (n) {
            if (t) {
              await m(s, { endSession: !1 }), await e(!1);
              return;
            }
            u(i("failedToSwitchWallet"), { duration: 1e4 }),
              (0, et.captureException)(n, {
                extra: { connector: s },
                tags: { source: "SwitchWalletsModalContent" },
              });
          } finally {
            f(!1);
          }
        };
        p && e();
      }, [v, p]);
      let { profile: y } = (0, ei.useConnectedAccountProfile)(l),
        w = (0, el.useRenderUsdBalance)();
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(h.ModalHeader, {
            className: "flex justify-center pt-7 pb-1",
            children: (0, n.jsx)(o.CenterAligned, {
              className: "gap-4",
              children: (0, n.jsxs)(o.CenterAligned, {
                className: "gap-6",
                children: [
                  (0, n.jsxs)(O.FlexCenter, {
                    className: "gap-4",
                    children: [
                      (0, n.jsx)(o.CenterAligned, {
                        className: "h-16 w-16 rounded-full bg-white",
                        children:
                          s.icon &&
                          (0, n.jsx)(K.Avatar, { size: 48, src: s.icon }),
                      }),
                      (0, n.jsx)(J.SwapHoriz, { size: 24 }),
                      (0, n.jsx)(ea.AnimatedLogo, { size: 60 }),
                    ],
                  }),
                  (0, n.jsx)(h.ModalHeaderTitle, {
                    children: i("title", { connectorName: s.name }),
                  }),
                ],
              }),
            }),
          }),
          (0, n.jsx)(h.ModalBody, {
            className: "text-center",
            children: (0, n.jsxs)(o.CenterAligned, {
              className: "gap-6",
              children: [
                (0, n.jsx)(g.TextBody, {
                  className: "text-center",
                  color: "text-secondary",
                  children: d
                    ? i("description", { connectorName: s.name })
                    : i("descriptionNoAutoSwitch", { connectorName: s.name }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "w-full rounded-lg border border-border-1 bg-bg-primary",
                  children: y
                    ? (0, n.jsx)(E.LinkedAccountSwitcherItem, {
                        address: y.address,
                        alreadyLinked: !0,
                        avatarSize: 32,
                        connected: !!l,
                        description: w(
                          null !=
                            (a =
                              null == y ||
                              null == (r = y.portfolioSummary) ||
                              null == (t = r.estimatedTokenValue)
                                ? void 0
                                : t.usd)
                            ? a
                            : void 0
                        ),
                        imageUrl: (null == y ? void 0 : y.imageUrl) || void 0,
                        isLink: !1,
                        onClick: void 0,
                        showActions: !1,
                        showCheck: !1,
                        username: null == y ? void 0 : y.username,
                        variant: "full",
                      })
                    : (0, n.jsx)(er.AccountSwitcherAccountItemsSkeleton, {}),
                }),
                d &&
                  (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(es.ProgressChip, {
                      isLoading: !0,
                      variant: "default",
                      children: (0, n.jsx)(g.TextBody, {
                        className: "font-mono",
                        children: i("switchInProgress"),
                      }),
                    }),
                  }),
              ],
            }),
          }),
          (0, n.jsx)(h.ModalFooter, {
            children: (0, n.jsx)(h.ModalFooterButton, {
              disabled: p,
              isLoading: p,
              onClick: C,
              variant: d && l ? "secondary" : "primary",
              children: d ? (l ? i("reset") : i("reconnect")) : i("confirm"),
            }),
          }),
        ],
      });
    }
    let ed = (e) => {
        let r,
          a = (0, t.c)(21),
          {
            connector: s,
            setConnector: l,
            linkedWallets: i,
            onLinked: o,
            onAccountSwitch: d,
            onStartEmailLogin: c,
            onConnected: u,
          } = e,
          { account: m } = (0, $.useExternalAccount)(),
          h = (0, j.useTranslations)("LinkNewWalletModalContent"),
          [g, v] = (0, M.useState)(!1);
        if (!s) {
          let e, t, r;
          return (
            a[0] !== u || a[1] !== l
              ? ((e = (e, n, t) => {
                  u(), l(t), G.ConnectModalActions.reset();
                }),
                (a[0] = u),
                (a[1] = l),
                (a[2] = e))
              : (e = a[2]),
            a[3] !== h
              ? ((t = h("linkNewWallet")), (a[3] = h), (a[4] = t))
              : (t = a[4]),
            a[5] !== c || a[6] !== e || a[7] !== t
              ? ((r = (0, n.jsx)(Q.ConnectFlowModalContent, {
                  isLinking: !0,
                  onConnected: e,
                  onStartEmailLogin: c,
                  switchOnConnect: !1,
                  title: t,
                })),
                (a[5] = c),
                (a[6] = e),
                (a[7] = t),
                (a[8] = r))
              : (r = a[8]),
            r
          );
        }
        if (
          (null == m ? void 0 : m.address) &&
          !i.some((e) => (0, x.isAddressEqual)(e, m.address))
        ) {
          let e, t;
          return (
            a[9] !== l
              ? ((e = () => l(void 0)), (a[9] = l), (a[10] = e))
              : (e = a[10]),
            a[11] !== m.address ||
            a[12] !== s ||
            a[13] !== g ||
            a[14] !== d ||
            a[15] !== o ||
            a[16] !== e
              ? ((t = (0, n.jsx)(Z.LinkWalletChangeDetectedModalContent, {
                  address: m.address,
                  connector: s,
                  isSwitchingAccounts: g,
                  onAccountSwitch: d,
                  onLinked: o,
                  onResetConnector: e,
                  setIsSwitchingAccounts: v,
                })),
                (a[11] = m.address),
                (a[12] = s),
                (a[13] = g),
                (a[14] = d),
                (a[15] = o),
                (a[16] = e),
                (a[17] = t))
              : (t = a[17]),
            t
          );
        }
        let p = null == m ? void 0 : m.address;
        return (
          a[18] !== s || a[19] !== p
            ? ((r = (0, n.jsx)(eo, { address: p, fromConnector: s })),
              (a[18] = s),
              (a[19] = p),
              (a[20] = r))
            : (r = a[20]),
          r
        );
      },
      ec = (0, r.graphql)(
        "\n    query LinkedWalletModalQuery($address: Address!) {\n      profilesByAccount(address: $address) {\n        profiles {\n          ... on Profile {\n            ...AccountSwitcherAccountItems\n          }\n        }\n        account {\n          ... on Profile {\n            ...AccountSwitcherAccountItems\n          }\n        }\n      }\n      walletsByAccount {\n        items {\n          address\n          isPrivate\n          label\n          lastSeenConnectorId\n        }\n      }\n    }\n  ",
        [S.AccountSwitcherAccountItemsFragment]
      ),
      eu = (0, B.withSuspense)(
        () => {
          let e = (0, W.useAddress)(),
            {
              isLinkedWalletModalOpen: t,
              setIsLinkedWalletModalOpen: r,
              setIsAddingNewWallet: a,
              isAddingNewWallet: s,
            } = (0, q.useLinkedWalletModalStore)(),
            [l, i] = (0, M.useState)(),
            [o, c] = (0, M.useState)(!1),
            u = (0, N.useDisconnect)({ source: "LinkedWalletModal" });
          return e
            ? (0, n.jsx)(h.Modal, {
                className: (0, d.classNames)({
                  "max-w-[420px]": s && void 0 === l,
                }),
                content: (0, n.jsx)(eh, {
                  address: e,
                  connector: l,
                  setConnector: i,
                  setEmailLoginActive: c,
                }),
                disableWidthTransition: !0,
                onBack:
                  s && void 0 !== l
                    ? () => {
                        i(void 0);
                      }
                    : void 0,
                onInteractOutside: (e) => {
                  s && void 0 !== l && e.preventDefault();
                },
                onOpenChange: async (e) => {
                  r(e), e || (o && (await u()), a(!1), i(void 0), c(!1));
                },
                open: t,
                withCloseIcon: !0,
              })
            : null;
        },
        { fallback: !1, ssr: !1 }
      ),
      em = { suspense: !1, ttl: f.TTL["15s"] };
    function eh(e) {
      var r, l, d, f, y, w, B, N, W;
      let O,
        z,
        U,
        V,
        Q,
        $,
        G,
        Z,
        K,
        X,
        Y,
        J,
        ee,
        en,
        et,
        er,
        ea,
        es,
        el,
        ei = (0, t.c)(65),
        {
          address: eo,
          connector: eu,
          setConnector: eh,
          setEmailLoginActive: eA,
        } = e,
        ek = (0, j.useTranslations)("LinkedWalletModal"),
        eT = (0, v.useIsLessThanMd)(),
        ej = (0, P.useIsAccountProfileMigrationEnabled)();
      ei[0] !== eo
        ? ((O = { query: ec, variables: { address: eo }, context: em }),
          (ei[0] = eo),
          (ei[1] = O))
        : (O = ei[1]),
        ei[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = { throwOnError: !1 }), (ei[2] = z))
          : (z = ei[2]);
      let [eM, eb] = (0, s.useQuery)(O, z),
        { data: eS, fetching: eF } = eM;
      (0, C.useMountEffect)(A);
      let eL = (0, k.usePreviouslyConnectedAccounts)(),
        eB = (0, T.keyBy)(eL, ew),
        {
          isAddingNewWallet: eN,
          setIsAddingNewWallet: eP,
          setIsLinkedWalletModalOpen: eW,
        } = (0, q.useLinkedWalletModalStore)(),
        e_ = (0, _.useAuthenticated)();
      ei[3] !== e_ || ei[4] !== eW
        ? ((U = () => {
            e_ || eW(!1);
          }),
          (ei[3] = e_),
          (ei[4] = eW),
          (ei[5] = U))
        : (U = ei[5]),
        ei[6] !== e_ ? ((V = [e_]), (ei[6] = e_), (ei[7] = V)) : (V = ei[7]),
        (0, M.useEffect)(U, V);
      let eq = (0, b.useContextSelector)(L.ProfileSettingsContext, ey);
      ei[8] !== eq
        ? ((Q = function (e) {
            return eq
              ? (0, n.jsx)(F.AsteriskText, {})
              : (0, n.jsx)(i.AnimatedNumber, { display: "usd", value: e });
          }),
          (ei[8] = eq),
          (ei[9] = Q))
        : (Q = ei[9]);
      let eR = Q;
      ei[10] !==
      (null == eS || null == (r = eS.walletsByAccount) ? void 0 : r.items)
        ? (($ =
            null !=
            (w =
              null == eS || null == (f = eS.walletsByAccount)
                ? void 0
                : f.items)
              ? w
              : []),
          (ei[10] =
            null == eS || null == (y = eS.walletsByAccount) ? void 0 : y.items),
          (ei[11] = $))
        : ($ = ei[11]);
      let eI = (0, T.keyBy)($, eC);
      ei[12] !==
      (null == eS || null == (l = eS.profilesByAccount) ? void 0 : l.profiles)
        ? ((G =
            null !=
            (W =
              null == eS || null == (B = eS.profilesByAccount)
                ? void 0
                : B.profiles)
              ? W
              : []),
          (ei[12] =
            null == eS || null == (N = eS.profilesByAccount)
              ? void 0
              : N.profiles),
          (ei[13] = G))
        : (G = ei[13]);
      let eE = G.filter(ef)
          .map(ex)
          .filter((e) => {
            var n;
            return !(0, R.isSolanaEmbeddedWallet)(
              e.address,
              null == (n = eI[(0, x.normalizeAddress)(e.address)])
                ? void 0
                : n.lastSeenConnectorId
            );
          })
          .sort((e, n) => {
            var t, r, a, s, l, i, o, d;
            if (ej) {
              let t = eI[(0, x.normalizeAddress)(e.address)],
                r = eI[(0, x.normalizeAddress)(n.address)],
                a = null != (l = null == t ? void 0 : t.isPrivate) && l;
              if (a !== (null != (i = null == r ? void 0 : r.isPrivate) && i))
                return a ? 1 : -1;
            }
            let c =
              null !=
              (o =
                null == (r = e.portfolioSummary) ||
                null == (t = r.estimatedTokenValue)
                  ? void 0
                  : t.usd)
                ? o
                : -1;
            return (
              (null !=
              (d =
                null == (s = n.portfolioSummary) ||
                null == (a = s.estimatedTokenValue)
                  ? void 0
                  : a.usd)
                ? d
                : -1) - c
            );
          }),
        eO =
          null == eS || null == (d = eS.profilesByAccount) ? void 0 : d.account;
      if (eO && "Profile" === eO.__typename) {
        let e;
        ei[14] !== eO
          ? ((e = (0, a.readFragment)(
              S.AccountSwitcherAccountItemsFragment,
              eO
            )),
            (ei[14] = eO),
            (ei[15] = e))
          : (e = ei[15]),
          (Z = e);
      }
      let ez = eE.map(ep);
      if (eN) {
        let e, t, r, a, s;
        return (
          ei[16] !== eA || ei[17] !== eW
            ? ((e = () => {
                eA(!1), eW(!1);
              }),
              (ei[16] = eA),
              (ei[17] = eW),
              (ei[18] = e))
            : (e = ei[18]),
          ei[19] !== eA
            ? ((t = () => {
                eA(!1);
              }),
              (ei[19] = eA),
              (ei[20] = t))
            : (t = ei[20]),
          ei[21] !== eb || ei[22] !== eh || ei[23] !== eA || ei[24] !== eP
            ? ((r = () => {
                eb({ requestPolicy: "network-only" }),
                  eP(!1),
                  eh(void 0),
                  eA(!1);
              }),
              (ei[21] = eb),
              (ei[22] = eh),
              (ei[23] = eA),
              (ei[24] = eP),
              (ei[25] = r))
            : (r = ei[25]),
          ei[26] !== eA
            ? ((a = () => {
                eA(!0);
              }),
              (ei[26] = eA),
              (ei[27] = a))
            : (a = ei[27]),
          ei[28] !== eu ||
          ei[29] !== ez ||
          ei[30] !== eh ||
          ei[31] !== t ||
          ei[32] !== r ||
          ei[33] !== a ||
          ei[34] !== e
            ? ((s = (0, n.jsx)(ed, {
                connector: eu,
                linkedWallets: ez,
                onAccountSwitch: e,
                onConnected: t,
                onLinked: r,
                onStartEmailLogin: a,
                setConnector: eh,
              })),
              (ei[28] = eu),
              (ei[29] = ez),
              (ei[30] = eh),
              (ei[31] = t),
              (ei[32] = r),
              (ei[33] = a),
              (ei[34] = e),
              (ei[35] = s))
            : (s = ei[35]),
          s
        );
      }
      ei[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = (0, n.jsx)(u.IconCallout, {
            className: "rounded-full",
            icon: p.AccountBalanceWallet,
            size: 36,
            variant: "outlined",
          })),
          (ei[36] = K))
        : (K = ei[36]),
        ei[37] !== ek
          ? ((X = ek("title")), (ei[37] = ek), (ei[38] = X))
          : (X = ei[38]),
        ei[39] !== X
          ? ((Y = (0, n.jsx)(h.ModalHeader, {
              className: "justify-center",
              children: (0, n.jsxs)(o.CenterAligned, {
                className: "gap-4",
                children: [K, (0, n.jsx)(h.ModalHeaderTitle, { children: X })],
              }),
            })),
            (ei[39] = X),
            (ei[40] = Y))
          : (Y = ei[40]);
      let eU = h.ModalBody;
      ei[41] !== ek
        ? ((J = ek.rich("description", { learnMore: ev })),
          (ei[41] = ek),
          (ei[42] = J))
        : (J = ei[42]),
        ei[43] !== J
          ? ((ee = (0, n.jsx)(c.FlexColumn, {
              className: "shrink-0 gap-2",
              children: (0, n.jsx)(g.TextBody, {
                color: "text-secondary",
                children: J,
              }),
            })),
            (ei[43] = J),
            (ei[44] = ee))
          : (ee = ei[44]);
      let eV = c.FlexColumn,
        eD = Z
          ? (0, n.jsx)("div", {
              className: "mb-2 rounded-lg border border-border-1 bg-bg-primary",
              children: (0, n.jsx)(I.AccountSwitcherTopAccount, {
                account: Z,
                isLink: !1,
                usdTotalValue: eE.reduce(eg, 0),
                variant: "full",
                walletCount: eE.length,
              }),
            })
          : null;
      ei[45] !== ek
        ? ((en = ek("yourLinkedWallets")), (ei[45] = ek), (ei[46] = en))
        : (en = ei[46]),
        ei[47] !== en
          ? ((et = (0, n.jsx)(g.TextBody, {
              className: "text-left",
              size: "sm",
              weight: "semibold",
              children: en,
            })),
            (ei[47] = en),
            (ei[48] = et))
          : (et = ei[48]);
      let eH = eF
        ? (0, n.jsx)(H.LinkedWalletsSkeletons, {})
        : eE.length > 0
        ? (0, n.jsx)(m.List, {
            className: "rounded-lg border border-border-1 bg-bg-primary",
            "data-testid": "linked-wallets-list",
            showBorder: !1,
            children: eE.map((e) => {
              var t, r, a;
              let s = (0, x.normalizeAddress)(e.address),
                l = eI[s],
                i = null == l ? void 0 : l.lastSeenConnectorId,
                o = null == l ? void 0 : l.isPrivate,
                d = eB[s],
                c =
                  (0, R.normalizeConnectorId)(i) ||
                  (0, R.normalizeConnectorId)(
                    null == d ? void 0 : d.connectorId
                  );
              return (0, n.jsx)(
                E.LinkedAccountSwitcherItem,
                {
                  address: e.address,
                  avatarSize: 20,
                  className: "h-16 px-4 md:h-12",
                  connectorId: c,
                  description: eR(
                    null !=
                      (a =
                        null == (r = e.portfolioSummary) ||
                        null == (t = r.estimatedTokenValue)
                          ? void 0
                          : t.usd)
                      ? a
                      : void 0
                  ),
                  imageUrl: e.imageUrl,
                  isLink: !1,
                  isPrivate: o,
                  label: null == l ? void 0 : l.label,
                  linkedWalletsCount: eE.length,
                  onClick: void 0,
                  onRefresh: () => {
                    eb({ requestPolicy: "network-only" });
                  },
                  showActions: !0,
                  showCheck: !1,
                  showUnlinkOnly: !0,
                  username: e.username,
                  variant: eT ? "compact" : "full",
                },
                e.address
              );
            }),
          })
        : (0, n.jsx)(g.TextBody, {
            color: "text-secondary",
            size: "sm",
            children: ek("noWalletsLinked"),
          });
      return (
        ei[49] !== eV || ei[50] !== eD || ei[51] !== et || ei[52] !== eH
          ? ((er = (0, n.jsxs)(eV, {
              className: "min-h-0 flex-1 gap-2 overflow-y-auto",
              children: [eD, et, eH],
            })),
            (ei[49] = eV),
            (ei[50] = eD),
            (ei[51] = et),
            (ei[52] = eH),
            (ei[53] = er))
          : (er = ei[53]),
        ei[54] !== eU || ei[55] !== ee || ei[56] !== er
          ? ((ea = (0, n.jsxs)(eU, {
              className:
                "flex flex-1 flex-col gap-6 overflow-hidden text-center",
              children: [ee, er],
            })),
            (ei[54] = eU),
            (ei[55] = ee),
            (ei[56] = er),
            (ei[57] = ea))
          : (ea = ei[57]),
        ei[58] !== eF || ei[59] !== ez.length
          ? ((es = (0, n.jsx)(D, {
              fetching: eF,
              linkedWalletsCount: ez.length,
            })),
            (ei[58] = eF),
            (ei[59] = ez.length),
            (ei[60] = es))
          : (es = ei[60]),
        ei[61] !== Y || ei[62] !== ea || ei[63] !== es
          ? ((el = (0, n.jsxs)(n.Fragment, { children: [Y, ea, es] })),
            (ei[61] = Y),
            (ei[62] = ea),
            (ei[63] = es),
            (ei[64] = el))
          : (el = ei[64]),
        el
      );
    }
    function eg(e, n) {
      var t, r, a;
      return (
        e +
        (null !=
        (a =
          null == (r = n.portfolioSummary) ||
          null == (t = r.estimatedTokenValue)
            ? void 0
            : t.usd)
          ? a
          : 0)
      );
    }
    function ev(e) {
      return (0, n.jsx)(l.Link, {
        href: "https://support.opensea.io/articles/12270237-how-can-i-link-multiple-wallets-to-one-opensea-account",
        rel: "noopener noreferrer",
        target: "_blank",
        children: e,
      });
    }
    function ep(e) {
      return e.address;
    }
    function ex(e) {
      return (0, a.readFragment)(S.AccountSwitcherAccountItemsFragment, e);
    }
    function ef(e) {
      return (null == e ? void 0 : e.__typename) === "Profile";
    }
    function eC(e) {
      return (0, x.normalizeAddress)(e.address);
    }
    function ey(e) {
      return e.hideWalletWorth;
    }
    function ew(e) {
      return (0, x.normalizeAddress)(e.address);
    }
  },
  400729,
  (e) => {
    e.n(e.i(638183));
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
      (e._sentryDebugIds[n] = "413084b0-0029-57b4-b83c-6c7a950c6e04"));
  } catch (e) {}
})();
//# debugId=413084b0-0029-57b4-b83c-6c7a950c6e04
