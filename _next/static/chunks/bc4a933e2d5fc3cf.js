(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
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
        () => T,
        "OpenChestButton_treasureFragment",
        () => w,
      ],
      731049
    );
    var n = e.i(528198);
    e.s(
      [
        "OpenTreasureChestModalFragment",
        () => y,
        "OpenTreasureChestModal_treasureFragment",
        () => v,
      ],
      731950
    ),
      e.s(["ItemRewardCardFragment", () => d], 589534);
    var r = e.i(682576),
      t = e.i(201578),
      a = e.i(959105);
    e.i(661049);
    var s = e.i(190519),
      i = e.i(846428),
      o = e.i(57465);
    e.s(["GrandPrizeModalFragment", () => l], 845139);
    let l = (0, n.graphql)(
        "\n    fragment GrandPrizeModal on UserReward {\n      id\n      treasureChestId\n      item {\n        id\n        name\n        collection {\n          ...CollectionLockup\n          ...CollectionPreviewTooltip\n          name\n          imageUrl\n        }\n      }\n    }\n  ",
        [r.CollectionLockupFragment, t.CollectionPreviewTooltipFragment]
      ),
      d = (0, n.graphql)(
        "\n    fragment ItemRewardCard on UserReward {\n      id\n      address\n      claimedAt\n      orderId\n      isGrandPrize\n      ...ItemRewardMedia\n      ...GrandPrizeModal\n      item {\n        id\n        name\n        imageUrl\n        ...ItemLink\n        collection {\n          ...CollectionLockup\n          ...CollectionLink\n          ...CollectionPreviewTooltip\n          name\n          imageUrl\n        }\n        ...useBuyItems\n      }\n    }\n  ",
        [
          r.CollectionLockupFragment,
          i.useBuyItemsFragment,
          s.ItemLinkFragment,
          a.CollectionLinkFragment,
          t.CollectionPreviewTooltipFragment,
          o.ItemRewardMediaFragment,
          l,
        ]
      );
    var u = e.i(234761);
    e.s(["TokenRewardCardFragment", () => h], 320464);
    var c = e.i(767502),
      m = e.i(332238),
      g = e.i(279155);
    let h = (0, n.graphql)(
      "\n    fragment TokenRewardCard on UserTokenReward {\n      id\n      address\n      treasureChestId\n      claimedAt\n      airdrop\n      ...TokenRewardMedia\n      claimActions {\n        actions {\n          ...ActionTimeline\n        }\n      }\n      balance {\n        usdValue\n        quantity\n        currency {\n          name\n          symbol\n          ...ContextCurrency\n        }\n      }\n    }\n  ",
      [
        m.ActionTimelineFragment,
        c.ContextCurrencyFragment,
        g.TokenRewardMediaFragment,
      ]
    );
    e.s(["TreasureRewardCardFragment", () => p], 295165);
    var C = e.i(186869);
    let p = (0, n.graphql)(
        "\n    fragment TreasureRewardCard on Badge {\n      id\n      name\n      description\n      ...TreasureRewardMedia\n    }\n  ",
        [C.TreasureRewardMediaFragment]
      ),
      v = (0, n.graphql)(
        "\n    fragment OpenTreasureChestModal_treasure on Badge {\n      __typename\n      id\n      name\n      ...TreasureRewardCard\n    }\n  ",
        [p]
      ),
      y = (0, n.graphql)(
        "\n    fragment OpenTreasureChestModal on TreasureChest {\n      id\n      waveName\n      openEnd\n      chestLevels {\n        level\n        pointsRequired\n      }\n      userProgress {\n        totalPoints\n        hasExceededLevelCap\n        currentLevel\n        currentTier\n        levelProgressPercent\n        minimumVoyageChestLevel {\n          level\n          name\n        }\n      }\n      userRewards {\n        __typename\n        id\n        treasureChestId\n        claimedAt\n        address\n        ...ItemRewardCard\n        ...SortRewardsByValue_item\n      }\n      userTokenRewards {\n        __typename\n        id\n        treasureChestId\n        claimedAt\n        address\n        ...TokenRewardCard\n        ...SortRewardsByValue_token\n      }\n      userTreasures {\n        ...OpenTreasureChestModal_treasure\n      }\n    }\n  ",
        [
          d,
          u.SortRewardsByValue_itemFragment,
          h,
          u.SortRewardsByValue_tokenFragment,
          v,
        ]
      ),
      w = (0, n.graphql)(
        "\n    fragment OpenChestButton_treasure on Badge {\n      name\n      ...OpenTreasureChestModal_treasure\n    }\n  ",
        [v]
      ),
      T = (0, n.graphql)(
        "\n    fragment OpenChestButton on TreasureChest {\n      ...OpenTreasureChestModal\n      userProgress {\n        totalPoints\n      }\n      userRewards {\n        id\n        claimedAt\n      }\n      userTokenRewards {\n        id\n        claimedAt\n      }\n      userTreasures {\n        ...OpenChestButton_treasure\n      }\n    }\n  ",
        [y, w]
      );
    e.s(["TreasureChestWaveFragment", () => A], 553919);
    let A = (0, n.graphql)(
      "\n  fragment TreasureChestWave on TreasureChest {\n    id\n    name\n    waveName\n  }\n"
    );
  },
  598777,
  (e) => {
    "use strict";
    e.s(["useAuthenticatedQuery", () => i]);
    var n = e.i(590268),
      r = e.i(333799);
    e.i(500598);
    var t = e.i(207225),
      a = e.i(71105);
    let s = { requestPolicy: "cache-and-network" };
    function i(e, i) {
      let o,
        l,
        d,
        u,
        c,
        m,
        g,
        h,
        C,
        p,
        v = (0, n.c)(27);
      v[0] !== i
        ? ((o = void 0 === i ? {} : i), (v[0] = i), (v[1] = o))
        : (o = v[1]);
      let { throwOnError: y } = o,
        w = void 0 === y || y,
        T = (0, t.useAddress)(),
        A = (0, a.useAuthenticated)(),
        f = A && T ? "authenticated:".concat(T) : void 0;
      v[2] !== e
        ? (({ variables: c, pause: d, context: l, ...u } = e),
          (v[2] = e),
          (v[3] = l),
          (v[4] = d),
          (v[5] = u),
          (v[6] = c))
        : ((l = v[3]), (d = v[4]), (u = v[5]), (c = v[6]));
      let k = !!d || !(A && T);
      v[7] !== f
        ? ((m = f && { _authKey: f }), (v[7] = f), (v[8] = m))
        : (m = v[8]),
        v[9] !== m || v[10] !== c
          ? ((g = { ...c, ...m }), (v[9] = m), (v[10] = c), (v[11] = g))
          : (g = v[11]);
      let F = g,
        M = null != l ? l : s;
      v[12] !== u || v[13] !== k || v[14] !== F || v[15] !== M
        ? ((h = { ...u, variables: F, pause: k, context: M }),
          (v[12] = u),
          (v[13] = k),
          (v[14] = F),
          (v[15] = M),
          (v[16] = h))
        : (h = v[16]),
        v[17] !== w
          ? ((C = { throwOnError: w }), (v[17] = w), (v[18] = C))
          : (C = v[18]);
      let [L, x] = (0, r.useQuery)(h, C);
      if (!(A && T)) {
        let e, n;
        return (
          v[19] !== L
            ? ((e = { ...L, data: void 0 }), (v[19] = L), (v[20] = e))
            : (e = v[20]),
          v[21] !== x || v[22] !== e
            ? ((n = [e, x]), (v[21] = x), (v[22] = e), (v[23] = n))
            : (n = v[23]),
          n
        );
      }
      return (
        v[24] !== x || v[25] !== L
          ? ((p = [L, x]), (v[24] = x), (v[25] = L), (v[26] = p))
          : (p = v[26]),
        p
      );
    }
  },
  57465,
  (e) => {
    "use strict";
    e.s(["ItemRewardMediaFragment", () => t]);
    var n = e.i(528198),
      r = e.i(600028);
    let t = (0, n.graphql)(
      "\n    fragment ItemRewardMedia on UserReward {\n      id\n      isGrandPrize\n      item {\n        ...ItemMedia\n        chain {\n          identifier\n        }\n      }\n    }\n  ",
      [r.ItemMediaFragment]
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
      () => o,
    ]);
    var n = e.i(528198),
      r = e.i(635341),
      t = e.i(465172);
    let a = (0, n.graphql)(
        "\n  fragment SortRewardsByValue_item on UserReward {\n    __typename\n    id\n    item {\n      bestOffer {\n        pricePerItem {\n          usd\n        }\n      }\n    }\n  }\n"
      ),
      s = (0, n.graphql)(
        "\n  fragment SortRewardsByValue_token on UserTokenReward {\n    __typename\n    id\n    balance {\n      usdValue\n    }\n  }\n"
      );
    function i(e) {
      var n, i, o, l, d, u;
      if ("UserTokenReward" === e.__typename) {
        let n = (0, r.readFragment)(s, e);
        return (0, t.bn)(
          null != (d = null == (l = n.balance) ? void 0 : l.usdValue) ? d : 0
        ).toNumber();
      }
      let c = (0, r.readFragment)(a, e);
      return (0, t.bn)(
        null !=
          (u =
            null == (o = c.item) ||
            null == (i = o.bestOffer) ||
            null == (n = i.pricePerItem)
              ? void 0
              : n.usd)
          ? u
          : 0
      ).toNumber();
    }
    function o(e, n) {
      return [
        ...e.map((e) => ({ original: e, sortData: (0, r.readFragment)(a, e) })),
        ...n.map((e) => ({ original: e, sortData: (0, r.readFragment)(s, e) })),
      ]
        .sort((e, n) => i(e.sortData) - i(n.sortData))
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
      r = e.i(528198),
      t = e.i(111908);
    let a = (0, r.graphql)(
      "\n    fragment TokenRewardMedia on UserTokenReward {\n      id\n      balance {\n        usdValue\n        currency {\n          imageUrl\n          ...CurrencyLockup\n          metadata {\n            ...useCurrencyBannerMedia\n            ...useCurrencyBannerMediaFallback\n          }\n        }\n      }\n    }\n  ",
      [
        n.CurrencyLockupFragment,
        t.useCurrencyBannerMediaFragment,
        t.useCurrencyBannerMediaFallbackFragment,
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
    e.s(["useActiveTreasureChests", () => g], 287342);
    var n = e.i(528198),
      r = e.i(635341),
      t = e.i(969498),
      a = e.i(731950);
    e.s(["TreasureChestContentFragment", () => o], 293108);
    var s = e.i(731049),
      i = e.i(553919);
    let o = (0, n.graphql)(
      "\n    fragment TreasureChestContent on TreasureChest {\n      id\n      ...TreasureChestWave\n      ...OpenChestButton\n      chestLevels {\n        level\n        pointsRequired\n      }\n    }\n  ",
      [i.TreasureChestWaveFragment, s.OpenChestButtonFragment]
    );
    e.i(402819);
    var l = e.i(916744),
      d = e.i(207225),
      u = e.i(598777);
    let c = (0, n.graphql)(
        "\n    query useActiveTreasureChestsQuery {\n      activeTreasureChests {\n        items {\n          id\n          endDate\n          ...TreasureChestContent\n          ...TreasureChestWave\n          ...OpenTreasureChestModal\n          waveName\n        }\n      }\n    }\n  ",
        [o, i.TreasureChestWaveFragment, a.OpenTreasureChestModalFragment]
      ),
      m = (0, n.graphql)(
        "\n    subscription UseActiveTreasureChestsProgress($address: Address!) {\n      treasureChestProgress(address: $address) {\n        totalPoints\n      }\n    }\n  "
      );
    function g() {
      var e, n;
      let s = (0, d.useAddress)(),
        [i, o] = (0, u.useAuthenticatedQuery)(
          { query: c },
          { throwOnError: !1 }
        ),
        { data: g, ...h } = i,
        C =
          null !=
          (n =
            null == g || null == (e = g.activeTreasureChests)
              ? void 0
              : e.items)
            ? n
            : [],
        p = C.at(0),
        v = (0, t.useMemo)(() => {
          if (!p) return;
          let e = (0, r.readFragment)(a.OpenTreasureChestModalFragment, p);
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
        (0, l.useSubscription)(
          {
            query: m,
            variables: { address: null != s ? s : "" },
            pause: !s,
            pauseOnInactivity: !1,
          },
          () => {
            o({ requestPolicy: "network-only" });
          }
        ),
        {
          activeTreasureChests: C,
          activeTreasureChest: p,
          userProgress: v,
          ...h,
          refetch: o,
          refetchProgress: () => {
            s && o({ requestPolicy: "network-only" });
          },
        }
      );
    }
  },
  347352,
  (e) => {
    "use strict";
    e.s(["useLinkedAccounts", () => t]);
    var n = e.i(297421),
      r = e.i(223458);
    function t() {
      let { linkedAccounts: e } = (0, n.useSnapshot)(r.AccountState);
      return e;
    }
  },
  919389,
  40485,
  392877,
  (e) => {
    "use strict";
    e.s(["LinkWalletChangeDetectedModalContent", () => V], 919389);
    var n = e.i(705378),
      r = e.i(590268),
      t = e.i(155757),
      a = e.i(194153),
      s = e.i(39771),
      i = e.i(838820),
      o = e.i(972483),
      l = e.i(950293),
      d = e.i(683269),
      u = e.i(838996),
      c = e.i(654469),
      m = e.i(922345);
    e.s(["useExternalAccount", () => y], 40485);
    var g = e.i(861316),
      h = e.i(297421),
      C = e.i(206849),
      p = e.i(901562),
      v = e.i(223458);
    let y = () => {
      let e,
        n,
        t = (0, r.c)(8),
        { externalAccount: a } = (0, h.useSnapshot)(v.AccountState),
        { connect: s, isConnecting: i } = (0, C.useConnect)(),
        o = (0, p.useConnections)();
      t[0] !== s || t[1] !== o || t[2] !== a
        ? ((e = async () => {
            if (!a) return;
            let e = o.find((e) =>
              e.addresses.some((e) => (0, g.isAddressEqual)(e, a.address))
            );
            e &&
              (v.AccountActions.setAccount(a),
              await s(e.connector, { address: a.address, switchOnConnect: !0 }),
              v.AccountActions.setExternalAccount(void 0));
          }),
          (t[0] = s),
          (t[1] = o),
          (t[2] = a),
          (t[3] = e))
        : (e = t[3]);
      let l = e;
      return (
        t[4] !== l || t[5] !== a || t[6] !== i
          ? ((n = { account: a, connect: l, isConnecting: i }),
            (t[4] = l),
            (t[5] = a),
            (t[6] = i),
            (t[7] = n))
          : (n = t[7]),
        n
      );
    };
    var w = e.i(81311),
      T = e.i(811917),
      A = e.i(940704),
      f = e.i(969498),
      k = e.i(389852),
      F = e.i(727325),
      M = e.i(46486),
      L = e.i(821303);
    e.i(176633);
    var x = e.i(752443),
      R = e.i(514870),
      P = e.i(146281),
      B = e.i(977839),
      b = e.i(287342),
      _ = e.i(751712),
      S = e.i(925252);
    let j = (e) => {
        let { address: n, onLinked: t, onAlreadyLinked: a } = e,
          s = (0, A.useTranslations)("useLinkWallet"),
          { showErrorMessage: i, showSuccessMessage: o } = (0, d.useToasts)(),
          l = (() => {
            let e,
              n = (0, r.c)(3),
              t = (0, P.useEvmSignFunction)(),
              a = (0, B.useSvmSignFunction)();
            return (
              n[0] !== t || n[1] !== a
                ? ((e = async (e) => {
                    let { connector: n, message: r, address: s } = e;
                    switch (
                      (!n.baseConnector.connected &&
                        (await n.baseConnector.connect()),
                      n.chainArch)
                    ) {
                      case "EVM":
                        return t({ connector: n, message: r, address: s });
                      case "SVM":
                        return a({ connector: n, message: r, address: s });
                    }
                  }),
                  (n[0] = t),
                  (n[1] = a),
                  (n[2] = e))
                : (e = n[2]),
              e
            );
          })(),
          [u, c] = (0, f.useState)(!1),
          m = (0, p.useConnections)(),
          { refetchProgress: h } = (0, b.useActiveTreasureChests)();
        return {
          linkWallet: (0, _.useAuthenticatedCallback)(async function () {
            let { force: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            c(!0);
            try {
              let d,
                u = m.find((e) =>
                  e.addresses.some((e) => (0, g.isAddressEqual)(e, n))
                );
              if (!u) return void i(s("couldNotFindConnection"));
              if (u.connector.id === R.EMBEDDED_WALLET_CONNECTOR_ID) {
                let n = await (0, x.getUser)();
                d = await S.accountsAdapter.linkPrivyWallet({
                  token: n.accessToken,
                  force: e,
                });
              } else {
                let r = await S.accountsAdapter.createSIWXMessage(n, u),
                  t = await l({
                    connector: u.connector,
                    address: n,
                    message: r,
                  });
                d = await S.accountsAdapter.linkWallet({
                  connection: u,
                  signature: t,
                  message: r,
                  force: e,
                });
              }
              if (d.success)
                o(s("walletLinkedSuccessfully"), { duration: 1e4 }), h(), t();
              else {
                var r;
                if (a && "ALREADY_LINKED" === d.code) return void a();
                i(null != (r = d.message) ? r : s("failedToLinkWallet"), {
                  duration: 1e4,
                });
              }
            } catch (e) {
              i((0, T.isError)(e) ? e.message : s("failedToLinkWallet"), {
                duration: 1e4,
              });
            } finally {
              c(!1);
            }
          }),
          isLinking: u,
        };
      },
      q = (e) => {
        let t,
          a,
          s,
          l,
          d,
          u,
          c,
          m,
          g,
          h,
          C,
          p,
          v = (0, r.c)(32),
          { address: y, goBack: w, onLinked: T } = e,
          f = (0, A.useTranslations)("MoveLinkedWalletModalContent");
        v[0] !== y || v[1] !== T
          ? ((t = { address: y, onLinked: T }),
            (v[0] = y),
            (v[1] = T),
            (v[2] = t))
          : (t = v[2]);
        let { linkWallet: k, isLinking: F } = j(t);
        return (
          v[3] !== f ? ((a = f("title")), (v[3] = f), (v[4] = a)) : (a = v[4]),
          v[5] !== a
            ? ((s = (0, n.jsx)(o.ModalHeader, {
                className: "text-center",
                children: (0, n.jsx)(o.ModalHeaderTitle, {
                  className: "text-center",
                  children: a,
                }),
              })),
              (v[5] = a),
              (v[6] = s))
            : (s = v[6]),
          v[7] !== y || v[8] !== f
            ? ((l = f("description", { address: (0, i.formatAddress)(y) })),
              (v[7] = y),
              (v[8] = f),
              (v[9] = l))
            : (l = v[9]),
          v[10] !== l
            ? ((d = (0, n.jsx)(o.ModalBody, {
                className: "flex flex-col gap-6",
                children: l,
              })),
              (v[10] = l),
              (v[11] = d))
            : (d = v[11]),
          v[12] !== f ? ((u = f("no")), (v[12] = f), (v[13] = u)) : (u = v[13]),
          v[14] !== w || v[15] !== u
            ? ((c = (0, n.jsx)(o.ModalFooterButton, {
                onClick: w,
                variant: "secondary",
                children: u,
              })),
              (v[14] = w),
              (v[15] = u),
              (v[16] = c))
            : (c = v[16]),
          v[17] !== k
            ? ((m = () => {
                k({ force: !0 });
              }),
              (v[17] = k),
              (v[18] = m))
            : (m = v[18]),
          v[19] !== f
            ? ((g = f("yesMoveWallet")), (v[19] = f), (v[20] = g))
            : (g = v[20]),
          v[21] !== F || v[22] !== m || v[23] !== g
            ? ((h = (0, n.jsx)(o.ModalFooterButton, {
                autoFocus: !0,
                disabled: F,
                isLoading: F,
                onClick: m,
                variant: "primary",
                children: g,
              })),
              (v[21] = F),
              (v[22] = m),
              (v[23] = g),
              (v[24] = h))
            : (h = v[24]),
          v[25] !== h || v[26] !== c
            ? ((C = (0, n.jsxs)(o.ModalFooter, { children: [c, h] })),
              (v[25] = h),
              (v[26] = c),
              (v[27] = C))
            : (C = v[27]),
          v[28] !== C || v[29] !== s || v[30] !== d
            ? ((p = (0, n.jsxs)(n.Fragment, { children: [s, d, C] })),
              (v[28] = C),
              (v[29] = s),
              (v[30] = d),
              (v[31] = p))
            : (p = v[31]),
          p
        );
      };
    e.s(["useConnectedAccountProfile", () => N], 392877);
    var I = e.i(528198),
      O = e.i(333799);
    let E = (0, I.graphql)(
      "\n  query ConnectedAccountProfileQuery($address: Address!) {\n    profileByAddress(address: $address) {\n      __typename\n      ... on Profile {\n        address\n        username\n        displayName\n        imageUrl\n        portfolioSummary {\n          estimatedTokenValue {\n            usd\n          }\n        }\n      }\n    }\n  }\n"
    );
    function N(e) {
      var n;
      let t,
        a,
        s,
        i,
        o = (0, r.c)(9),
        l = null != e ? e : "";
      o[0] !== l ? ((t = { address: l }), (o[0] = l), (o[1] = t)) : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { suspense: !1 }), (o[2] = a))
          : (a = o[2]);
      let d = !e;
      o[3] !== t || o[4] !== d
        ? ((s = { query: E, variables: t, context: a, pause: d }),
          (o[3] = t),
          (o[4] = d),
          (o[5] = s))
        : (s = o[5]);
      let [u] = (0, O.useQuery)(s),
        { data: c, fetching: m } = u,
        g =
          (null == c || null == (n = c.profileByAddress)
            ? void 0
            : n.__typename) === "Profile"
            ? c.profileByAddress
            : null;
      return (
        o[6] !== m || o[7] !== g
          ? ((i = { profile: g, fetching: m }),
            (o[6] = m),
            (o[7] = g),
            (o[8] = i))
          : (i = o[8]),
        i
      );
    }
    let U = (e) => {
        let t,
          a,
          s,
          i = (0, r.c)(10),
          { address: l, onLinked: d, onAlreadyLinked: u } = e,
          c = (0, A.useTranslations)("LinkWalletChangeDetectedModalContent");
        i[0] !== l || i[1] !== u || i[2] !== d
          ? ((t = { address: l, onLinked: d, onAlreadyLinked: u }),
            (i[0] = l),
            (i[1] = u),
            (i[2] = d),
            (i[3] = t))
          : (t = i[3]);
        let { linkWallet: m, isLinking: g } = j(t);
        return (
          i[4] !== c
            ? ((a = c("linkWalletToAccount")), (i[4] = c), (i[5] = a))
            : (a = i[5]),
          i[6] !== g || i[7] !== m || i[8] !== a
            ? ((s = (0, n.jsx)(o.ModalFooterButton, {
                autoFocus: !0,
                disabled: g,
                isLoading: g,
                onClick: m,
                variant: "primary",
                children: a,
              })),
              (i[6] = g),
              (i[7] = m),
              (i[8] = a),
              (i[9] = s))
            : (s = i[9]),
          s
        );
      },
      V = (0, k.withSuspense)(
        (e) => {
          var r, g, h;
          let {
              address: C,
              connector: p,
              isSwitchingAccounts: v,
              onAccountSwitch: k,
              onLinked: x,
              onResetConnector: R,
              setIsSwitchingAccounts: P,
            } = e,
            B = (0, A.useTranslations)("LinkWalletChangeDetectedModalContent"),
            [b, _] = (0, f.useState)(!1),
            { showErrorMessage: S } = (0, d.useToasts)(),
            { connect: j } = y(),
            { disconnect: I } = (0, m.useDisconnect)(),
            O = (0, L.useRenderUsdBalance)(),
            { logout: E } = (0, w.useLogout)(),
            V = (0, c.useAuthenticateFlow)(),
            { profile: W } = N(C);
          return b
            ? (0, n.jsx)(q, { address: C, goBack: () => _(!1), onLinked: x })
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(o.ModalHeader, {
                    className: "flex justify-center pt-7 pb-1",
                    children: (0, n.jsxs)(a.CenterAligned, {
                      className: "gap-6",
                      children: [
                        (0, n.jsx)(s.FlexCenter, {
                          className: "gap-4",
                          children:
                            "embedded" === p.type
                              ? (0, n.jsx)(F.AnimatedLogo, { size: 60 })
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(a.CenterAligned, {
                                      className:
                                        "h-16 w-16 rounded-full bg-white",
                                      children:
                                        p.icon &&
                                        (0, n.jsx)(t.Avatar, {
                                          size: 48,
                                          src: p.icon,
                                        }),
                                    }),
                                    (0, n.jsx)(u.SwapHoriz, { size: 24 }),
                                    (0, n.jsx)(F.AnimatedLogo, { size: 60 }),
                                  ],
                                }),
                        }),
                        (0, n.jsx)(o.ModalHeaderTitle, {
                          children: B("title"),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)(o.ModalBody, {
                    className: "flex flex-col gap-6",
                    children: [
                      (0, n.jsx)(l.TextBody, {
                        className: "text-center",
                        color: "text-secondary",
                        children: B("description1", {
                          address: (0, i.formatAddress)(C),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "rounded-lg border border-border-1 bg-bg-primary",
                        children: (0, n.jsx)(M.LinkedAccountSwitcherItem, {
                          address: C,
                          avatarSize: 32,
                          description: O(
                            null !=
                              (h =
                                null == W ||
                                null == (g = W.portfolioSummary) ||
                                null == (r = g.estimatedTokenValue)
                                  ? void 0
                                  : r.usd)
                              ? h
                              : void 0
                          ),
                          imageUrl: (null == W ? void 0 : W.imageUrl) || void 0,
                          isLink: !1,
                          onClick: void 0,
                          showActions: !1,
                          showCheck: !1,
                          showNotLinked: !0,
                          username: null == W ? void 0 : W.username,
                          variant: "full",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(o.ModalFooter, {
                    children: [
                      (0, n.jsx)(o.ModalFooterButton, {
                        disabled: v,
                        isLoading: v,
                        onClick: async () => {
                          try {
                            if (
                              (P(!0), await E(), "embedded" === p.type && R)
                            ) {
                              await I(p, { endSession: !1 }), R();
                              return;
                            }
                            await j(),
                              V({ autoPromptSiwe: !0, onAuthenticated: k });
                          } catch (e) {
                            S(
                              (0, T.isError)(e) ? e.message : "Failed to log in"
                            );
                          } finally {
                            P(!1);
                          }
                        },
                        variant: "secondary",
                        children: B("switchAccounts"),
                      }),
                      (0, n.jsx)(U, {
                        address: C,
                        onAlreadyLinked: () => _(!0),
                        onLinked: x,
                      }),
                    ],
                  }),
                ],
              });
        },
        { fallback: null }
      );
  },
  533400,
  (e) => {
    "use strict";
    e.s(["AccountSwitchDetectedFlow", () => T], 533400);
    var n = e.i(705378),
      r = e.i(590268),
      t = e.i(971823),
      a = e.i(972483),
      s = e.i(35720),
      i = e.i(437464),
      o = e.i(861316),
      l = e.i(248452),
      d = e.i(174258),
      u = e.i(330047),
      c = e.i(347352),
      m = e.i(223458),
      g = e.i(258401),
      h = e.i(969498),
      C = e.i(180909);
    e.i(500598);
    var p = e.i(207225),
      v = e.i(71105),
      y = e.i(864102),
      w = e.i(919389);
    let T = () => {
      let e,
        T,
        A,
        f,
        k,
        F,
        M,
        L,
        x,
        R = (0, r.c)(30),
        P = (0, t.usePathname)(),
        B = (0, p.useAddress)(),
        b = (0, u.useIsReady)() && !!B,
        _ = (0, v.useAuthenticated)(),
        { syncAuth: S } = (0, g.useSyncAuth)(),
        { hasAcceptedTerms: j } = (0, l.useAccount)(),
        { activeConnector: q } = (0, d.useConnectors)();
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = { source: "AccountSwitchDetectedFlow" }), (R[0] = e))
        : (e = R[0]);
      let I = (0, C.useDisconnect)(e),
        O = (0, i.useVisibilityChange)(),
        E = () => {
          m.AccountActions.refreshLinkedAccounts();
        },
        N = (0, c.useLinkedAccounts)(),
        [U, V] = (0, h.useState)(!1),
        W = P.includes(y.TopLevelPath.careers);
      R[1] !== B ||
      R[2] !== _ ||
      R[3] !== b ||
      R[4] !== j ||
      R[5] !== W ||
      R[6] !== U ||
      R[7] !== N
        ? ((T =
            !W &&
            ((b && !0 === _) || U) &&
            !0 === j &&
            !!B &&
            void 0 !== N &&
            !N.some((e) => (0, o.isAddressEqual)(e.address, B))),
          (R[1] = B),
          (R[2] = _),
          (R[3] = b),
          (R[4] = j),
          (R[5] = W),
          (R[6] = U),
          (R[7] = N),
          (R[8] = T))
        : (T = R[8]);
      let D = T;
      R[9] !== E || R[10] !== S
        ? ((A = () => {
            S(), E();
          }),
          (R[9] = E),
          (R[10] = S),
          (R[11] = A))
        : (A = R[11]);
      let z = A;
      return (
        R[12] !== z
          ? ((f = () => {
              z();
            }),
            (R[12] = z),
            (R[13] = f))
          : (f = R[13]),
        (0, s.useOnChange)(B, f),
        R[14] !== O || R[15] !== D || R[16] !== z
          ? ((k = () => {
              if (D && O) {
                let e = setInterval(() => {
                  z();
                }, 2e3);
                return () => {
                  clearInterval(e);
                };
              }
            }),
            (F = [D, O, z]),
            (R[14] = O),
            (R[15] = D),
            (R[16] = z),
            (R[17] = k),
            (R[18] = F))
          : ((k = R[17]), (F = R[18])),
        (0, h.useEffect)(k, F),
        R[19] !== q || R[20] !== B || R[21] !== U || R[22] !== E
          ? ((M =
              B && q
                ? (0, n.jsx)(w.LinkWalletChangeDetectedModalContent, {
                    address: B,
                    connector: q,
                    isSwitchingAccounts: U,
                    onAccountSwitch: () => {
                      E();
                    },
                    onLinked: () => {
                      E();
                    },
                    setIsSwitchingAccounts: V,
                  })
                : null),
            (R[19] = q),
            (R[20] = B),
            (R[21] = U),
            (R[22] = E),
            (R[23] = M))
          : (M = R[23]),
        R[24] !== I
          ? ((L = (e) => {
              e || I();
            }),
            (R[24] = I),
            (R[25] = L))
          : (L = R[25]),
        R[26] !== D || R[27] !== M || R[28] !== L
          ? ((x = (0, n.jsx)(a.Modal, {
              className: "md:rounded-xl",
              content: M,
              onOpenChange: L,
              open: D,
              withCloseIcon: !1,
            })),
            (R[26] = D),
            (R[27] = M),
            (R[28] = L),
            (R[29] = x))
          : (x = R[29]),
        x
      );
    };
  },
  527732,
  (e) => {
    e.n(e.i(533400));
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
      (e._sentryDebugIds[n] = "fa6f8e6f-5515-5985-a829-6e8ce9cbcdb1"));
  } catch (e) {}
})();
//# debugId=fa6f8e6f-5515-5985-a829-6e8ce9cbcdb1
