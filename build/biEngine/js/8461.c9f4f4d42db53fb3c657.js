"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[8461],{

/***/ 32914
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ z)
/* harmony export */ });
/* unused harmony export ChunkProgressBar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91911);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";




const X = 1e-5, Y = 3, Z = 400, ee = 0, se = (s) => {
  const t = s.toString().split(".");
  return t.length === 1 ? `${t[0]}` : `${t[0]}.${t[1].substr(0, Y)}`;
}, K = (s, t, a) => {
  const n = Math.abs((t - s) / 100);
  return Math.abs((a - s) / n);
}, _ = (s, t, a, n) => {
  const u = Math.max(a, 0.01), h = 100 / u * 100;
  s.current && t.current && (s.current.style.width = n ? "100%" : `${u}%`, t.current.style.width = n ? "100%" : `${h}%`, s.current.style.height = n ? `${u}%` : "100%", t.current.style.height = n ? `${h}%` : "100%");
}, re = (s, t, a) => Math.max((a - s) / (t - s), X), G = {
  name: "@progress/kendo-react-progressbars",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613314,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, j = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((s, t) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(G);
  const {
    chunkCount: a = y.chunkCount,
    className: n,
    disabled: u,
    orientation: h,
    min: S = y.min,
    max: g = y.max,
    reverse: i = y.reverse,
    style: m,
    tabIndex: M,
    emptyStyle: T,
    emptyClassName: O,
    progressStyle: D,
    progressClassName: I
  } = s, k = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      k.current && k.current.focus();
    },
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => ({
    element: k.current,
    focus: R
  }));
  const d = s.value || y.value, b = s.value === null, v = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(k, s.dir), N = h === "vertical", o = {
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-progressbar k-chunk-progressbar",
      {
        "k-progressbar-horizontal": !N,
        "k-progressbar-vertical": N,
        "k-progressbar-reverse": i,
        "k-progressbar-indeterminate": b,
        "k-disabled": u
      },
      n
    ),
    ref: k,
    dir: v,
    tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(M, u),
    role: "progressbar",
    "aria-label": s.ariaLabel,
    "aria-valuemin": S,
    "aria-valuemax": g,
    "aria-valuenow": b ? void 0 : d,
    "aria-disabled": u,
    style: m
  }, f = ({ count: p }) => {
    let w = [];
    const c = 100 / p + "%", $ = re(S, g, d), U = Math.floor($ * p), E = Array(p).fill(!1);
    for (let l = 0; l < U; l++)
      E[l] = !0;
    for (let l = 0; l < p; ++l) {
      const C = E[l], A = C ? I : O, B = { ...{
        width: N ? void 0 : c,
        height: N ? c : void 0
      }, ...C ? D : T };
      w.push(
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "li",
          {
            key: l,
            className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
              "k-progressbar-chunk",
              {
                "k-first": l === 0,
                "k-last": l === p - 1,
                "k-selected": C
              },
              A
            ),
            style: B
          }
        )
      );
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, w);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ...o }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "k-progressbar-chunks k-reset" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(f, { count: a || y.chunkCount })));
});
j.propTypes = {
  chunkCount: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  emptyStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  emptyClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const y = {
  chunkCount: 5,
  min: 0,
  max: 100,
  value: 0,
  disabled: !1,
  reverse: !1
};
j.defaultProps = y;
j.displayName = "KendoChunkProgressBar";
const te = (s) => {
  const t = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    t.current = s;
  }), t.current;
}, z = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((s, t) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(G);
  const {
    animation: a,
    disabled: n,
    reverse: u = x.reverse,
    orientation: h,
    labelVisible: S,
    labelPlacement: g,
    max: i = x.max,
    min: m = x.min,
    tabIndex: M,
    className: T,
    style: O,
    emptyStyle: D,
    emptyClassName: I,
    progressStyle: k,
    progressClassName: R
  } = s, d = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), b = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), v = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), N = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      d.current && d.current.focus();
    },
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(
    t,
    () => ({
      element: d.current,
      progressStatusElement: b.current,
      progressStatusWrapElement: v.current,
      focus: N
    })
  );
  const o = s.value || x.value, f = te(o), p = s.value === null, w = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(d, s.dir), c = h === "vertical", $ = se(o), U = {
    value: o
  }, E = S ? s.label ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-progress-status" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s.label, { ...U })) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-progress-status" }, $) : void 0, l = {
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-progressbar",
      {
        "k-progressbar-horizontal": !c,
        "k-progressbar-vertical": c,
        "k-progressbar-reverse": u,
        "k-progressbar-indeterminate": p,
        "k-disabled": n
      },
      T
    ),
    ref: d,
    dir: w,
    tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(M, n),
    role: "progressbar",
    "aria-label": s.ariaLabel,
    "aria-valuemin": m,
    "aria-valuemax": i,
    "aria-valuenow": p ? void 0 : o,
    "aria-disabled": n,
    style: O
  }, C = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-progress-status-wrap", {
    "k-progress-start": g === "start",
    "k-progress-center": g === "center",
    "k-progress-end": g === "end" || g === void 0
  }), A = typeof a != "boolean" && a !== void 0 ? a.duration : a ? Z : ee, V = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      const P = K(m, i, f);
      _(b, v, P, c);
    },
    [c, i, m, f]
  ), F = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (P) => {
      const J = K(m, i, f + (o - f) * P);
      _(b, v, J, c);
    },
    [m, i, f, o, c]
  ), B = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      const P = K(m, i, o);
      _(b, v, P, c);
    },
    [c, i, m, o]
  );
  return (0,_progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_3__/* .useAnimation */ .sM)(
    {
      duration: A,
      onStart: V,
      onUpdate: F,
      onEnd: B
    },
    [o, A]
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ...l }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: C + (I ? " " + I : ""), style: D }, E), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: "k-progressbar-value k-selected",
      style: k,
      ref: b
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: C + (R ? " " + R : ""),
        ref: v
      },
      E
    )
  ));
});
z.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  labelVisible: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  labelPlacement: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "center", "end"]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  emptyStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  emptyClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  progressStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  progressClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const x = {
  animation: !1,
  min: 0,
  max: 100,
  value: 0,
  disabled: !1,
  reverse: !1,
  labelVisible: !0
};
z.defaultProps = x;
z.displayName = "KendoProgressBar";



/***/ },

/***/ 48461
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionSheet: () => (/* binding */ Rt),
/* harmony export */   ActionSheetContent: () => (/* binding */ Tt),
/* harmony export */   ActionSheetFooter: () => (/* binding */ xt),
/* harmony export */   ActionSheetHeader: () => (/* binding */ St),
/* harmony export */   ActionSheetItem: () => (/* binding */ at),
/* harmony export */   AppBar: () => (/* binding */ Ln),
/* harmony export */   AppBarSection: () => (/* binding */ An),
/* harmony export */   AppBarSpacer: () => (/* binding */ zn),
/* harmony export */   Avatar: () => (/* binding */ zs),
/* harmony export */   BottomNavigation: () => (/* binding */ vt),
/* harmony export */   BottomNavigationItem: () => (/* binding */ Ue),
/* harmony export */   Breadcrumb: () => (/* binding */ wt),
/* harmony export */   BreadcrumbDelimiter: () => (/* binding */ Et),
/* harmony export */   BreadcrumbLink: () => (/* binding */ Ct),
/* harmony export */   BreadcrumbListItem: () => (/* binding */ It),
/* harmony export */   BreadcrumbOrderedList: () => (/* binding */ Nt),
/* harmony export */   Card: () => (/* binding */ _e),
/* harmony export */   CardActions: () => (/* binding */ Nn),
/* harmony export */   CardBody: () => (/* binding */ Cn),
/* harmony export */   CardFooter: () => (/* binding */ As),
/* harmony export */   CardHeader: () => (/* binding */ In),
/* harmony export */   CardImage: () => (/* binding */ wn),
/* harmony export */   CardSubtitle: () => (/* binding */ Sn),
/* harmony export */   CardTitle: () => (/* binding */ En),
/* harmony export */   ContextMenu: () => (/* binding */ ni),
/* harmony export */   Drawer: () => (/* binding */ gt),
/* harmony export */   DrawerContent: () => (/* binding */ xn),
/* harmony export */   DrawerItem: () => (/* binding */ pt),
/* harmony export */   DrawerNavigation: () => (/* binding */ ft),
/* harmony export */   ExpansionPanel: () => (/* binding */ Un),
/* harmony export */   ExpansionPanelContent: () => (/* binding */ si),
/* harmony export */   GridLayout: () => (/* binding */ yt),
/* harmony export */   GridLayoutItem: () => (/* binding */ Bn),
/* harmony export */   Menu: () => (/* binding */ jn),
/* harmony export */   MenuClassComponent: () => (/* binding */ He),
/* harmony export */   MenuItem: () => (/* binding */ nn),
/* harmony export */   MenuItemArrow: () => (/* binding */ dn),
/* harmony export */   MenuItemInternalsList: () => (/* binding */ un),
/* harmony export */   MenuItemLink: () => (/* binding */ cn),
/* harmony export */   PanelBar: () => (/* binding */ vn),
/* harmony export */   PanelBarItem: () => (/* binding */ ce),
/* harmony export */   PanelBarUtils: () => (/* binding */ Wt),
/* harmony export */   Splitter: () => (/* binding */ Ls),
/* harmony export */   SplitterBar: () => (/* binding */ Ns),
/* harmony export */   SplitterPane: () => (/* binding */ Ds),
/* harmony export */   StackLayout: () => (/* binding */ kt),
/* harmony export */   Step: () => (/* binding */ We),
/* harmony export */   Stepper: () => (/* binding */ bt),
/* harmony export */   TabStrip: () => (/* binding */ gi),
/* harmony export */   TabStripClassComponent: () => (/* binding */ dt),
/* harmony export */   TabStripContent: () => (/* binding */ hn),
/* harmony export */   TabStripNavigation: () => (/* binding */ tt),
/* harmony export */   TabStripNavigationItem: () => (/* binding */ mn),
/* harmony export */   TabStripTab: () => (/* binding */ ws),
/* harmony export */   TileLayout: () => (/* binding */ Fn),
/* harmony export */   Timeline: () => (/* binding */ ti),
/* harmony export */   addYearsFlags: () => (/* binding */ _n),
/* harmony export */   contentDisplayName: () => (/* binding */ Hn),
/* harmony export */   downArrowName: () => (/* binding */ gs),
/* harmony export */   flatChildren: () => (/* binding */ gn),
/* harmony export */   flatVisibleChildren: () => (/* binding */ bn),
/* harmony export */   flatVisibleItems: () => (/* binding */ Ts),
/* harmony export */   footerDisplayName: () => (/* binding */ Kn),
/* harmony export */   getFirstId: () => (/* binding */ xs),
/* harmony export */   getInitialState: () => (/* binding */ fn),
/* harmony export */   headerDisplayName: () => (/* binding */ ot),
/* harmony export */   isArrayEqual: () => (/* binding */ Rs),
/* harmony export */   isPresent: () => (/* binding */ pi),
/* harmony export */   leftArrowName: () => (/* binding */ vs),
/* harmony export */   renderChildren: () => (/* binding */ pn),
/* harmony export */   rightArrowName: () => (/* binding */ bs),
/* harmony export */   sortEventList: () => (/* binding */ fi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31212);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13209);
/* harmony import */ var _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14800);
/* harmony import */ var _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91911);
/* harmony import */ var _progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52132);
/* harmony import */ var _progress_kendo_react_progressbars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32914);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";









const X = "", Be = "0", ie = "_";
function Re(e, s) {
  if (J(e))
    return s[Number(e)];
  {
    const n = s[Number(ge(e))];
    return n.items ? Re(is(e), n.items) : void 0;
  }
}
function ge(e) {
  return be(e) ? e : e.split(ie)[0];
}
function is(e) {
  if (be(e))
    return e;
  {
    const s = e.indexOf(ie);
    return e.substring(s + 1);
  }
}
function Lt(e) {
  return Ke("0", e);
}
function rs(e, s) {
  return s.indexOf(e) === 0 ? s.length === e.length || s.charAt(e.length) === ie : !1;
}
function Ke(e, s) {
  return s ? s + ie + e : e;
}
function pe(e) {
  const s = e.lastIndexOf(ie);
  return s < 0 ? X : e.substring(0, s);
}
function be(e) {
  return e === X || e.indexOf(ie) < 0;
}
function J(e) {
  return e !== X && e.indexOf(ie) < 0;
}
function as(e) {
  return ls(e) === 1;
}
function os(e) {
  return Ze(e) === Be;
}
function Ze(e) {
  const s = e.lastIndexOf(ie);
  return s < 0 ? e : e.substring(s + 1);
}
function At(e, s, n) {
  return J(s) ? e ? Number(s) < n - 1 ? (Number(s) + 1).toString() : "0" : Number(s) > 0 ? (Number(s) - 1).toString() : (n - 1).toString() : s;
}
function ls(e) {
  return e.split(ie).length - 1;
}
class nn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
}
nn.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  cssClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  cssStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  linkRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  contentRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
function cs(e, s) {
  if (e && e.length > 0)
    return {
      items: Qe(e),
      inputItems: e
    };
  if (Je(s).length > 0) {
    const n = rn(Je(s));
    return { items: Qe(n), inputItems: n };
  } else
    return { items: [], inputItems: [] };
}
function sn(e, s) {
  let n = {};
  const { text: i, url: a, icon: o, svgIcon: l, disabled: c, cssClass: d, cssStyle: u, render: m, linkRender: h, contentRender: p, data: v } = e || s.props;
  return i !== void 0 && (n.text = i), a !== void 0 && (n.url = a), o !== void 0 && (n.icon = o), l !== void 0 && (n.svgIcon = l), c !== void 0 && (n.disabled = c), d !== void 0 && (n.cssClass = d), u !== void 0 && (n.cssStyle = u), m !== void 0 && (n.render = m), h !== void 0 && (n.linkRender = h), p !== void 0 && (n.contentRender = p), v !== void 0 && (n.data = v), n;
}
function Je(e) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(e).filter((s) => s && s.type === nn);
}
function rn(e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n], a = sn(void 0, i), o = rn(Je(i.props.children));
    o.length > 0 && (a.items = o), s.push(a);
  }
  return s;
}
function Qe(e, s) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const a = e[i], o = sn(a);
    o.id = Ke(i.toString(), s), o.isLastFromSiblings = i === e.length - 1, o.items = ds(a, o), n.push(o);
  }
  return n;
}
function ds(e, s) {
  return e.contentRender ? [{
    contentParentItemId: s.id,
    id: Ke(Be, s.id),
    isLastFromSiblings: !0,
    contentRender: e.contentRender,
    items: []
  }] : e.items ? Qe(e.items, s.id) : [];
}
const us = /\S/;
function ms(e, s, n, i, a, o) {
  const l = O();
  switch (n) {
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
      return c();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
      return d();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
      return m();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
      return u();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
      return h();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
      return p();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
      return v();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc:
      return g();
    default:
      return w() ? y() : s;
  }
  function c() {
    return a ? o ? R() : N() : o ? f() : I();
  }
  function d() {
    return a ? o ? N() : R() : o ? I() : f();
  }
  function u() {
    return a ? L() : J(s) ? b() : L();
  }
  function m() {
    return a ? D() : J(s) ? S() : D();
  }
  function h() {
    return l.disabled ? s : A() ? Lt(s) : ge(s);
  }
  function p() {
    return G()[0].id;
  }
  function v() {
    const x = G();
    return x[x.length - 1].id;
  }
  function g() {
    return J(s) ? s : pe(s);
  }
  function y() {
    const x = i.toLowerCase(), M = G(), j = Number(Ze(s)), Z = M.slice(j + 1).concat(M.slice(0, j + 1)).find((re) => (re.text || "").toLowerCase().startsWith(x));
    return Z ? Z.id : s;
  }
  function I() {
    return J(s) ? D() : as(s) ? b(D(ge(s))) : pe(s);
  }
  function N() {
    return J(s) ? S() : pe(s);
  }
  function f() {
    return J(s) ? L() : b(
      A() ? s : L(ge(s))
    );
  }
  function R() {
    return b(
      J(s) || A() ? s : L(ge(s))
    );
  }
  function b(x) {
    return ee(!0, x);
  }
  function S(x) {
    return ee(!1, x);
  }
  function w() {
    return i.length === 1 && us.test(i);
  }
  function O(x, M) {
    return x === void 0 && (x = s), M === void 0 && (M = e), Re(x, M);
  }
  function A(x) {
    return O(x).items.length > 0;
  }
  function D(x) {
    return $(!1, x);
  }
  function L(x) {
    return $(!0, x);
  }
  function B(x) {
    const M = O(x).items;
    return M[M.length - 1].id;
  }
  function G() {
    return J(s) ? e : O(pe(s), e).items;
  }
  function ee(x, M) {
    M === void 0 && (M = s);
    const j = O(M);
    return A(M) && !j.disabled ? x ? Lt(M) : B(M) : M;
  }
  function $(x, M) {
    if (M === void 0 && (M = s), J(M))
      return At(x, M, e.length);
    {
      const j = pe(M), Y = Ze(M), Z = O(j).items.length;
      return Ke(At(x, Y, Z), j);
    }
  }
}
function hs(e) {
  return e.hoverOpenDelay !== void 0 ? e.hoverOpenDelay : e.openOnClick ? 0 : 100;
}
function ps(e) {
  return e.hoverCloseDelay !== void 0 ? e.hoverCloseDelay : 100;
}
const zt = {
  vertical: "top",
  horizontal: "left"
}, Ft = {
  vertical: "top",
  horizontal: "right"
}, an = {
  vertical: "flip",
  horizontal: "fit"
}, on = {
  vertical: "fit",
  horizontal: "flip"
}, Bt = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "right"
    },
    popupAlign: Ft,
    collision: an
  },
  leftward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "left"
    },
    popupAlign: Ft,
    collision: on
  }
}, Kt = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "left"
    },
    popupAlign: zt,
    collision: an
  },
  rightward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "right"
    },
    popupAlign: zt,
    collision: on
  }
};
function fs(e, s, n) {
  const i = ln(e, s, n);
  return n ? i === "downward" ? Bt.downward : Bt.leftward : i === "downward" ? Kt.downward : Kt.rightward;
}
function ln(e, s, n) {
  return J(e) ? s ? n ? "leftward" : "rightward" : "downward" : n ? "leftward" : "rightward";
}
function Ht(e) {
  return e ? "rtl" : "ltr";
}
function et(e, s) {
  return `${e}_${s}`;
}
class cn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return this.props.url ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "a",
      {
        className: this.getMenuItemClassName(),
        role: "presentation",
        href: this.props.url,
        tabIndex: -1
      },
      this.props.children
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        id: this.props.id,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(this.getMenuItemClassName(), this.props.className),
        style: this.props.style,
        role: "presentation"
      },
      this.props.children
    );
  }
  getMenuItemClassName() {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-link",
      "k-menu-link",
      {
        "k-active": this.props.opened
      }
    );
  }
}
cn.propTypes = {
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const gs = "caret-alt-down", bs = "caret-alt-right", vs = "caret-alt-left";
class dn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { "aria-hidden": !0, ...this.getIcon() });
  }
  getIcon() {
    switch (ln(
      this.props.itemId,
      this.props.verticalMenu === !0,
      this.props.dir === "rtl"
    )) {
      case "downward":
        return { name: gs, icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon };
      case "rightward":
        return { name: bs, icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon };
      case "leftward":
        return { name: vs, icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon };
      default:
        return {};
    }
  }
}
dn.propTypes = {
  itemId: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  verticalMenu: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
class un extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onMouseOver = (s) => {
      this.props.onMouseOver(this.props.parentItemId), s.stopPropagation();
    }, this.onMouseLeave = (s) => {
      this.props.onMouseLeave(this.props.parentItemId), s.stopPropagation();
    };
  }
  render() {
    const s = this.props.parentItemId;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        className: this.props.className,
        role: this.props.role ? this.props.role : s !== void 0 ? "menu" : "menubar",
        id: s !== void 0 ? et(this.props.menuGuid, s) : void 0,
        onMouseOver: s !== void 0 ? this.onMouseOver : void 0,
        onMouseLeave: s !== void 0 ? this.onMouseLeave : void 0,
        "aria-orientation": this.props["aria-orientation"]
      },
      this.renderChildItems()
    );
  }
  renderChildItems() {
    return this.props.items.length > 0 ? this.props.items.map((s, n) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ks,
      {
        item: s,
        isMenuVertical: this.props.isMenuVertical,
        isDirectionRightToLeft: this.props.isDirectionRightToLeft,
        focusedItemId: this.props.focusedItemId,
        lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
        tabbableItemId: this.props.tabbableItemId,
        itemRender: this.props.itemRender,
        linkRender: this.props.linkRender,
        menuGuid: this.props.menuGuid,
        onMouseOver: this.props.onMouseOver,
        onMouseLeave: this.props.onMouseLeave,
        onMouseDown: this.props.onMouseDown,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        onClick: this.props.onClick,
        onOriginalItemNeeded: this.props.onOriginalItemNeeded,
        key: n
      }
    )) : null;
  }
}
class ks extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this.isFirstRender = !0, this.onMouseOver = (n) => {
      this.props.onMouseOver(this.props.item.id), n.stopPropagation();
    }, this.onMouseLeave = (n) => {
      this.props.onMouseLeave(this.props.item.id), n.stopPropagation();
    }, this.state = { opened: !1 };
  }
  componentDidMount() {
    const s = this.props.focusedItemId, n = this.props.item.id;
    s && s === n && this.itemElement.focus(), this.isFirstRender = !1;
  }
  componentDidUpdate(s) {
    const n = this.props.focusedItemId, i = this.props.item.id;
    if (n) {
      const a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
      s.focusedItemId !== n && n === i && !this.itemElement.contains(a) && this.itemElement.focus();
    }
  }
  render() {
    const s = this.props.item, n = s.id, i = et(this.props.menuGuid, n);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        id: et(this.props.menuGuid, n),
        className: this.getMenuItemClassName(s),
        style: s.cssStyle,
        tabIndex: n === this.props.tabbableItemId ? 0 : -1,
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: (a) => this.props.onMouseDown(a),
        onBlur: (a) => this.props.onBlur(n, a),
        onFocus: () => this.props.onFocus(n),
        onClick: (a) => this.props.onClick(a, n),
        role: "menuitem",
        "aria-disabled": s.disabled ? !0 : void 0,
        "aria-haspopup": s.items.length > 0 ? !0 : void 0,
        "aria-expanded": s.items.length > 0 ? this.Opened : void 0,
        "aria-label": s.text,
        "aria-owns": this.Opened ? i : void 0,
        ref: (a) => this.itemElement = a,
        key: "0"
      },
      this.contentRender ? this.renderContent() : this.renderMenuItemLink()
    ), this.renderPopupIfOpened());
  }
  renderContent() {
    const s = this.props.item.contentParentItemId;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-content", role: "presentation" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.contentRender, { item: this.props.onOriginalItemNeeded(s), itemId: s }));
  }
  renderMenuItemLink() {
    const s = this.props.item;
    if (this.linkRender)
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        this.linkRender,
        {
          item: this.props.onOriginalItemNeeded(s.id),
          itemId: s.id,
          opened: this.Opened,
          dir: Ht(this.props.isDirectionRightToLeft)
        }
      );
    {
      const n = this.itemRender ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.itemRender, { item: this.props.onOriginalItemNeeded(s.id), itemId: s.id, key: "1" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-menu-link-text" }, s.text);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(cn, { url: s.url, opened: this.Opened }, this.renderMenuIconIfApplicable(), n, this.renderArrowIfApplicable());
    }
  }
  renderPopupIfOpened() {
    if (this.Opened) {
      const s = this.props.item.id, { anchorAlign: n, popupAlign: i, collision: a } = fs(s, this.props.isMenuVertical, this.props.isDirectionRightToLeft);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__.Popup,
        {
          anchor: this.itemElement,
          show: !0,
          popupClass: this.getPopupClassName(),
          anchorAlign: n,
          popupAlign: i,
          collision: a,
          animate: !1,
          key: "1"
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          un,
          {
            parentItemId: s,
            items: this.props.item.items,
            menuGuid: this.props.menuGuid,
            focusedItemId: this.props.focusedItemId,
            lastItemIdToBeOpened: this.props.lastItemIdToBeOpened,
            tabbableItemId: this.props.tabbableItemId,
            itemRender: this.props.itemRender,
            linkRender: this.props.linkRender,
            isMenuVertical: this.props.isMenuVertical,
            isDirectionRightToLeft: this.props.isDirectionRightToLeft,
            className: "k-group k-menu-group k-reset k-menu-group-md",
            onMouseOver: this.props.onMouseOver,
            onMouseLeave: this.props.onMouseLeave,
            onMouseDown: this.props.onMouseDown,
            onBlur: this.props.onBlur,
            onFocus: this.props.onFocus,
            onClick: this.props.onClick,
            onOriginalItemNeeded: this.props.onOriginalItemNeeded
          }
        )
      );
    } else
      return null;
  }
  renderMenuIconIfApplicable() {
    const { icon: s, svgIcon: n } = this.props.item;
    return s || n ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: s, icon: n, key: "0" }) : null;
  }
  renderArrowIfApplicable() {
    return this.props.item.items.length > 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-menu-expand-arrow", "aria-hidden": !0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      dn,
      {
        itemId: this.props.item.id,
        verticalMenu: this.props.isMenuVertical,
        dir: Ht(this.props.isDirectionRightToLeft),
        key: "2"
      }
    )) : null;
  }
  get itemRender() {
    return this.props.item.render || this.props.itemRender;
  }
  get linkRender() {
    return this.props.item.linkRender || this.props.linkRender;
  }
  get contentRender() {
    return this.props.item.contentParentItemId ? this.props.item.contentRender : null;
  }
  get Opened() {
    const s = this.props;
    return s.item.items.length > 0 && rs(s.item.id, s.lastItemIdToBeOpened) && // HACK: Wait for the second render because otherwise the scenario of
    // popup inside popup throws an error (for example, hover of item with id '0_0').
    !this.isFirstRender;
  }
  getPopupClassName() {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-menu-popup", { "k-rtl": this.props.isDirectionRightToLeft });
  }
  getMenuItemClassName(s) {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-item",
      "k-menu-item",
      {
        "k-first": os(s.id),
        "k-last": s.isLastFromSiblings,
        "k-disabled": s.disabled
      },
      s.cssClass
    );
  }
}
class ys {
  constructor() {
    this.phase = "Initialized";
  }
  getIsDirectionRightToLeft() {
    return this.isDirectionRightToLeft;
  }
  setIsDirectionRightToLeft(s) {
    this.phase = this.phase === "NotInitialized" ? "Initialized" : "NewValueReceived", this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft, this.isDirectionRightToLeft = s;
  }
  hasDirectionChanged() {
    return this.phase === "NewValueReceived" ? this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : !1;
  }
}
class Is {
  constructor(s, n, i) {
    this.openOnClick = s, this.resetMenu = n, this.openItem = i, this.mouseDown = !1, this.openOnClick = s, this.isMouseOverEnabled = !s;
  }
  set OpenOnClick(s) {
    !!s != !!this.openOnClick && (this.mouseDown = !1, this.isMouseOverEnabled = !s), this.openOnClick = s;
  }
  handleItemSelectedViaKeyboard() {
    this.openOnClick && (this.isMouseOverEnabled = !1, this.resetMenu());
  }
  get IsMouseOverEnabled() {
    return this.isMouseOverEnabled;
  }
  handleItemMouseDown() {
    this.mouseDown = !0;
  }
  handleItemFocus() {
    this.openOnClick && !this.mouseDown && (this.isMouseOverEnabled = !0), this.mouseDown = !1;
  }
  handleItemClick(s, n) {
    this.openOnClick && (this.isMouseOverEnabled ? n && (this.isMouseOverEnabled = !1, this.resetMenu()) : (this.isMouseOverEnabled = !0, this.openItem(s)));
  }
}
const K = {
  name: "@progress/kendo-react-layout",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613351,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, _t = {
  focusedItemId: X,
  hoveredItemId: X,
  tabbableItemId: Be
};
let He = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this.menuWrapperEl = null, this.directionHolder = new ys(), this.inputItems = [], this.items = [], this.reset = () => {
      this.clearItemHoverAndLeaveRequestsIfApplicable(), this.setState(_t);
    }, this.onKeyDown = (n) => {
      if (this.state.focusedItemId !== X) {
        const i = Re(this.state.focusedItemId, this.items), a = ms(
          this.items,
          i.id,
          n.keyCode,
          n.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        );
        i.id !== a && (n.preventDefault(), this.setFocusedItemId(a)), (n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space) && !i.disabled && (this.mouseOverHandler.handleItemSelectedViaKeyboard(), this.dispatchSelectEventIfWired(n, i.id), !n.isDefaultPrevented() && i.items.length === 0 && i.url && window.location.assign(i.url));
      }
      n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc && this.props.onClose && this.props.onClose.call(void 0, n);
    }, this.onItemMouseOver = (n) => {
      this.mouseOverHandler.IsMouseOverEnabled && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemHoverRequest = window.setTimeout(
        () => {
          this.setHoveredItemId(n), this.itemHoverRequest = null;
        },
        hs(this.props)
      ));
    }, this.onItemMouseLeave = (n) => {
      this.mouseOverHandler.IsMouseOverEnabled && this.isItemWithDefaultClose(n) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemLeaveRequest = window.setTimeout(
        () => {
          this.setHoveredItemId(X), this.itemLeaveRequest = null;
        },
        ps(this.props)
      ));
    }, this.onItemMouseDown = () => {
      this.mouseOverHandler.handleItemMouseDown();
    }, this.onItemFocus = (n) => {
      this.setFocusedItemId(n), this.mouseOverHandler.handleItemFocus();
    }, this.onItemClick = (n, i) => {
      const a = Re(i, this.items);
      a.disabled || (this.setFocusedItemId(i), this.mouseOverHandler.handleItemClick(i, this.isItemWithDefaultClose(i)), this.dispatchSelectEventIfWired(n, i), !n.isDefaultPrevented() && a.url && window.location.assign(a.url));
    }, this.onItemBlur = (n, i) => {
      if (this.isItemWithDefaultClose(n) && this.setFocusedItemId(X), i.relatedTarget && i.relatedTarget.nodeName === "LI") {
        const a = i.relatedTarget.getAttribute("id");
        if (a && a.includes(this.menuItemId))
          return;
      }
      this.props.onClose && this.props.onClose.call(void 0, i);
    }, this.getInputItem = (n) => Re(n, this.inputItems), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), this.mouseOverHandler = new Is(this.props.openOnClick, this.reset, this.onItemMouseOver), this.state = Object.assign({}, _t, { isFirstRender: !0 });
  }
  get menuItemId() {
    return this.props.id;
  }
  get element() {
    return this.menuWrapperEl;
  }
  /**
   * @hidden
   */
  render() {
    this.prepareItems(), this.state.isFirstRender || this.directionHolder.setIsDirectionRightToLeft(this.checkIsDirectionRightToLeft());
    let s = this.state.hoveredItemId ? this.state.hoveredItemId : this.state.focusedItemId ? pe(this.state.focusedItemId) : X;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        onKeyDown: this.onKeyDown,
        style: this.props.style,
        className: this.directionHolder.getIsDirectionRightToLeft() ? "k-rtl" : void 0,
        ref: (n) => this.menuWrapperEl = n
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        un,
        {
          className: this.getMenuClassName(),
          "aria-orientation": this.props.vertical ? "vertical" : void 0,
          items: this.items,
          isMenuVertical: this.props.vertical,
          isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(),
          focusedItemId: this.state.focusedItemId,
          lastItemIdToBeOpened: s,
          tabbableItemId: this.state.tabbableItemId,
          itemRender: this.props.itemRender,
          linkRender: this.props.linkRender,
          menuGuid: this.menuItemId,
          onMouseLeave: this.onItemMouseLeave,
          onMouseOver: this.onItemMouseOver,
          onMouseDown: this.onItemMouseDown,
          onFocus: this.onItemFocus,
          onClick: this.onItemClick,
          onBlur: this.onItemBlur,
          onOriginalItemNeeded: this.getInputItem,
          role: this.props.role
        }
      )
    );
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setState({ isFirstRender: !1 });
  }
  /**
   * @hidden
   */
  componentDidUpdate(s) {
    (!!s.vertical != !!this.props.vertical || this.directionHolder.hasDirectionChanged()) && this.reset(), this.mouseOverHandler.OpenOnClick = this.props.openOnClick;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.clearItemHoverAndLeaveRequestsIfApplicable();
  }
  setFocusedItemId(s) {
    this.setState((n) => {
      const i = s === X ? n.tabbableItemId : ge(s);
      return { hoveredItemId: s === X || be(n.hoveredItemId) && be(s) ? n.hoveredItemId : X, focusedItemId: s, tabbableItemId: i };
    });
  }
  setHoveredItemId(s) {
    this.setState((n) => be(s) && be(n.focusedItemId) ? {
      hoveredItemId: s,
      focusedItemId: n.focusedItemId,
      tabbableItemId: n.tabbableItemId
    } : { hoveredItemId: s, focusedItemId: X, tabbableItemId: Be });
  }
  getMenuClassName() {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-reset",
      "k-header",
      "k-menu",
      { "k-menu-horizontal": !this.props.vertical },
      { "k-menu-vertical": this.props.vertical },
      this.props.className
    );
  }
  clearItemHoverAndLeaveRequestsIfApplicable() {
    this.itemHoverRequest && (clearTimeout(this.itemHoverRequest), this.itemHoverRequest = null), this.itemLeaveRequest && (clearTimeout(this.itemLeaveRequest), this.itemLeaveRequest = null);
  }
  isItemWithDefaultClose(s) {
    return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(s) === -1;
  }
  checkIsDirectionRightToLeft() {
    return !!(this.props.dir !== void 0 ? this.props.dir === "rtl" : this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === "rtl");
  }
  prepareItems() {
    const { items: s, inputItems: n } = cs(this.props.items, this.props.children);
    this.items = s, this.inputItems = n;
  }
  dispatchSelectEventIfWired(s, n) {
    (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onSelect, s, this, { item: this.getInputItem(n), itemId: n });
  }
};
He.propTypes = {
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.object),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  hoverOpenDelay: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  hoverCloseDelay: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  openOnClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  linkRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  customCloseItemIds: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.string),
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
He.defaultProps = { vertical: !1 };
class mn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.itemRef = null, this.focus = () => {
      this.itemRef && (this.itemRef.tabIndex = 0, this.itemRef.focus());
    }, this.blur = () => {
      this.itemRef && (this.itemRef.tabIndex = -1, this.itemRef.blur());
    }, this.onClick = () => {
      this.props.onSelect && this.props.onSelect(this.props.index), this.itemRef && (this.itemRef.tabIndex = 0, this.itemRef.focus());
    };
  }
  /**
   * @hidden
   */
  render() {
    const { id: s, active: n, disabled: i, title: a = "Untitled", contentPanelId: o, index: l } = this.props, c = {
      id: `${s}-${l.toString()}`,
      "aria-selected": n,
      "aria-controls": n ? o : void 0,
      "aria-disabled": i,
      role: "tab",
      onClick: i ? void 0 : this.onClick
    }, d = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-item", "k-tabstrip-item", {
      "k-disabled": i,
      "k-active": n
    });
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { ...c, className: d, ref: (u) => this.itemRef = u, onBlur: this.blur, "aria-controls": o }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-link" }, a));
  }
}
mn.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element
  ]),
  first: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  last: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
const Es = (e) => Array.apply(null, Array(e)), Cs = (e) => e.preventDefault(), Se = "smooth", le = "prev", xe = "next";
class tt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this.itemsNavRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.isRtl = () => this.props.dir === "rtl", this.onWheel = (n) => {
      n.stopPropagation();
      const i = n.deltaY < 0 ? le : xe;
      this.setNewScrollPosition(i, n);
    }, this.arrowClickPrev = (n) => {
      this.handleArrowClick(le, n);
    }, this.arrowClickNext = (n) => {
      this.handleArrowClick(xe, n);
    }, this.handleArrowClick = (n, i) => {
      this.setNewScrollPosition(n, i);
    }, this.setNewScrollPosition = (n, i) => {
      const a = this.itemsNavRef.current;
      if (!a)
        return;
      const o = this.horizontalScroll(), l = o ? a.scrollWidth - a.offsetWidth : a.scrollHeight - a.offsetHeight, c = (i.type === "click" ? this.props.buttonScrollSpeed : this.props.mouseScrollSpeed) || 0;
      let d = o ? a.scrollLeft : a.scrollTop, u = o ? a.scrollWidth - a.scrollLeft : a.scrollHeight - a.scrollTop, m = a.scrollWidth - a.scrollLeft * -1;
      this.isRtl() && this.horizontalScroll() ? (n === le && d < 0 && (d += c, m += c), n === xe && d < l && (d -= c, m -= c), d = Math.min(0, Math.min(l, d))) : (n === le && d > 0 && (d -= c, u += c), n === xe && d < l && (d += c, u -= c), d = Math.max(0, Math.min(l, d)));
      const h = d === 0, p = i.type === "click" ? Se : void 0;
      if (o) {
        const v = this.isRtl() ? Math.round(m) <= a.clientWidth || Math.floor(m) <= a.clientWidth : Math.round(u) <= a.clientWidth || Math.floor(u) <= a.clientWidth;
        this.setState({
          disabledPrev: h,
          disabledNext: v
        }), a.scrollTo({ left: d, behavior: p });
      } else
        this.setState({
          disabledPrev: h,
          disabledNext: Math.round(u) <= a.clientHeight || Math.floor(u) <= a.clientHeight
        }), a.scrollTo({ top: d, behavior: p });
    }, this.renderArrow = (n, i) => {
      const a = this.horizontalScroll(), o = {
        prev: {
          arrowTab: "k-tabstrip-prev",
          fontIcon: a ? this.isRtl() ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up",
          svgIcon: a ? this.isRtl() ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltUpIcon
        },
        next: {
          arrowTab: "k-tabstrip-next",
          fontIcon: a ? this.isRtl() ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down",
          svgIcon: a ? this.isRtl() ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon
        }
      }, l = (n === le ? this.props.prevButton : this.props.nextButton) || _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_5__.Button, c = n === le ? this.arrowClickPrev : this.arrowClickNext;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        l,
        {
          disabled: i,
          className: `${o[n].arrowTab}`,
          onClick: c,
          icon: o[n].fontIcon,
          svgIcon: o[n].svgIcon,
          onMouseDown: Cs,
          tabIndex: -1,
          fillMode: "flat"
        }
      );
    }, this.state = {
      disabledPrev: this.props.selected === 0,
      disabledNext: this.props.selected === react__WEBPACK_IMPORTED_MODULE_0__.Children.count(this.props.children) - 1
    };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.props.scrollable && this.scrollToSelected();
  }
  /**
   * @hidden
   */
  componentDidUpdate(s) {
    const { scrollable: n, selected: i } = this.props;
    n && s.selected !== i && (this.scrollToSelected(), this.setState({
      disabledPrev: i === 0,
      disabledNext: i === react__WEBPACK_IMPORTED_MODULE_0__.Children.count(this.props.children) - 1
    }));
  }
  /**
   * @hidden
   */
  render() {
    const { selected: s, tabPosition: n, children: i, onSelect: a, onKeyDown: o, navItemId: l, contentPanelId: c } = this.props, d = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(i), u = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(i);
    let m;
    i && (m = Es(d).map((v, g, y) => {
      const I = {
        active: s === g,
        disabled: u[g].props.disabled,
        index: g,
        title: u[g].props.title,
        first: g === 0,
        last: g === y.length - 1,
        contentPanelId: c,
        id: l,
        onSelect: a
      };
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(mn, { key: g, ...I });
    }));
    const h = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-tabstrip-items-wrapper", {
      "k-hstack": n === "top" || n === "bottom",
      "k-vstack": n === "left" || n === "right"
    }), p = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-tabstrip-items", "k-reset");
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: h }, this.props.scrollable ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderArrow(le, this.state.disabledPrev), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        ref: this.itemsNavRef,
        className: p,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: o,
        onWheel: this.onWheel,
        "aria-orientation": n === "left" || n === "right" ? "vertical" : void 0
      },
      m
    ), this.renderArrow(xe, this.state.disabledNext)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        className: p,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: o
      },
      m
    ));
  }
  scrollToSelected() {
    const s = this.itemsNavRef.current, n = s && s.children[this.props.selected || 0];
    if (n instanceof HTMLElement && s instanceof HTMLElement) {
      const i = this.horizontalScroll(), a = i ? s.offsetWidth : s.offsetHeight, o = i ? n.offsetWidth : n.offsetHeight, l = i ? "left" : "top";
      let c = i ? s.scrollLeft : s.scrollTop, d = 0;
      if (this.isRtl()) {
        const u = n.offsetLeft;
        c = c * -1, u < 0 ? (d = u - o + s.offsetLeft, s.scrollTo({ [l]: d, behavior: Se })) : u + o > a - c && (d = c + u - o, s.scrollTo({ [l]: d, behavior: Se }));
      } else {
        const u = i ? n.offsetLeft - s.offsetLeft : n.offsetTop - s.offsetTop;
        c + a < u + o ? (d = u + o - a, s.scrollTo({ [l]: d, behavior: Se })) : c > u && (d = u, s.scrollTo({ [l]: d, behavior: Se }));
      }
    }
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
}
tt.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.element)
  ]),
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
};
class hn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.contentId = this.props.contentPanelId, this.childFactory = (s) => react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(s, {
      ...s.props,
      in: s.props.children.props.id === String(this.contentId + this.props.selected)
    });
  }
  /**
   * @hidden
   */
  render() {
    const { children: s, selected: n, contentPanelId: i, keepTabsMounted: a, navItemId: o } = this.props, l = s && typeof n == "number" && react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(s)[n], c = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-tabstrip-content",
      "k-active",
      l && l.props.contentClassName
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: c,
        style: this.props.style,
        id: i,
        role: "tabpanel",
        "aria-hidden": a,
        "aria-labelledby": `${o}-${(n == null ? void 0 : n.toString()) || ""}`
      },
      this.renderContent(s)
    );
  }
  renderContent(s) {
    return this.props.keepTabsMounted ? react__WEBPACK_IMPORTED_MODULE_0__.Children.map(this.props.children, (n, i) => this.renderChild(n, i)) : this.renderChild(
      react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(s)[this.props.selected],
      this.props.selected
    );
  }
  renderChild(s, n) {
    const i = n === this.props.selected, a = {
      style: {
        display: i ? void 0 : "none"
      }
    }, o = {
      position: "initial",
      display: i ? void 0 : "none"
    };
    return s.props.disabled ? null : this.props.animation ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_6__/* .Fade */ .zW,
      {
        appear: !0,
        exit: this.props.keepTabsMounted,
        style: o,
        childFactory: this.props.keepTabsMounted ? this.childFactory : void 0
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ...a, id: String(this.contentId + n), key: n }, s.props.children)
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ...a, key: n }, s.props.children);
  }
}
hn.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.element)
  ]),
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
let dt = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this._element = null, this.showLicenseWatermark = !1, this.keyBinding = {
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left]: () => this.prevNavigatableTab(),
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right]: () => this.nextNavigatableTab(),
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down]: () => this.nextNavigatableTab(),
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up]: () => this.prevNavigatableTab(),
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home]: () => 0,
      [_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end]: () => react__WEBPACK_IMPORTED_MODULE_0__.Children.count(this.props.children) - 1
    }, this.onSelect = (n) => {
      this.props.selected !== n && this.props.onSelect && this.props.onSelect({
        selected: n
      });
    }, this.onKeyDown = (n) => {
      let i;
      switch (n.keyCode) {
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
          i = this.keyBinding[this.invertKeys(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left, _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)];
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
          i = this.keyBinding[this.invertKeys(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right, _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left)];
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
          i = this.keyBinding[_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up];
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
          i = this.keyBinding[_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down];
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
          i = this.keyBinding[_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home];
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
          i = this.keyBinding[_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end];
          break;
      }
      i && (n.preventDefault(), this.onSelect(i()));
    }, this.renderContent = (n) => {
      const { selected: i, children: a, tabContentStyle: o } = n, l = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(a);
      return i < l && i > -1 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(hn, { index: i, ...n, style: o }) : null;
    }, this.firstNavigatableTab = () => {
      const n = this.children(), i = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(n);
      if (n) {
        for (let a = 0; a < i; a++)
          if (!n[a].props.disabled)
            return a;
      }
    }, this.lastNavigatableTab = () => {
      const n = this.children(), i = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(n);
      if (n) {
        for (let a = i - 1; a > 0; a--)
          if (!n[a].props.disabled)
            return a;
      }
    }, this.prevNavigatableTab = () => {
      const n = this.children(), { selected: i } = this.props, a = i ? i - 1 : -1;
      if (a < 0)
        return this.lastNavigatableTab();
      if (n)
        for (let o = a; o > -1; o--) {
          if (!n[o].props.disabled)
            return o;
          if (o === 0)
            return this.lastNavigatableTab();
        }
    }, this.nextNavigatableTab = () => {
      const n = this.children(), { selected: i } = this.props, a = i ? i + 1 : 1, o = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(n);
      if (a >= o)
        return this.firstNavigatableTab();
      if (n)
        for (let l = a; l < o; l++) {
          if (!n[l].props.disabled)
            return l;
          if (l + 1 === o)
            return this.firstNavigatableTab();
        }
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.shouldShowValidationUI)(K);
  }
  get contentPanelId() {
    return this.props.id + "-content-panel-id";
  }
  get navItemId() {
    return this.props.id + "-nav-item-id";
  }
  /**
   * @hidden
   */
  render() {
    const s = {
      ...this.props,
      children: this.children(),
      contentPanelId: this.contentPanelId,
      navItemId: this.navItemId,
      onKeyDown: this.onKeyDown,
      onSelect: this.onSelect
    }, { tabPosition: n, tabIndex: i = 0 } = s, a = n === "bottom", o = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-tabstrip k-pos-relative",
      {
        "k-tabstrip-left": n === "left",
        "k-tabstrip-right": n === "right",
        "k-tabstrip-bottom": n === "bottom",
        "k-tabstrip-top": n === "top",
        "k-tabstrip-scrollable": this.props.scrollable
      },
      this.props.className
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        ref: (l) => this._element = l,
        dir: this.props.dir,
        className: o,
        style: this.props.style
      },
      !a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(tt, { ...s, tabIndex: i }),
      this.renderContent(s),
      a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(tt, { ...s, tabIndex: i }),
      this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.WatermarkOverlay, null)
    );
  }
  invertKeys(s, n) {
    return this._element && getComputedStyle(this._element).direction === "rtl" || !1 ? n : s;
  }
  children() {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children).filter((s) => s);
  }
};
dt.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  tabContentStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  tabPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
dt.defaultProps = {
  animation: !0,
  tabPosition: "top",
  keepTabsMounted: !1,
  buttonScrollSpeed: 100,
  mouseScrollSpeed: 10
};
class Ns extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this.draggable = null, this.onDrag = (n, i, a) => {
      const { event: o } = n, { onDrag: l, index: c } = this.props, d = this.draggable && this.draggable.element;
      d && !this.isStatic && this.isDraggable && l(o, d, c, i, a);
    }, this.onFocus = () => {
      this.setState({
        focused: !0
      });
    }, this.onBlur = () => {
      this.setState({
        focused: !1
      });
    }, this.onToggle = (n) => {
      const { onToggle: i, index: a, prev: o, next: l } = this.props;
      (o.collapsible || l.collapsible) && i(o.collapsible ? a : a + 1, n);
    }, this.onPrevToggle = (n) => {
      const { onToggle: i, index: a, prev: o } = this.props;
      o.collapsible && i(a, n);
    }, this.onNextToggle = (n) => {
      const { onToggle: i, index: a, next: o } = this.props;
      o.collapsible && i(a + 1, n);
    }, this.onKeyDown = (n) => {
      const i = n && n.keyCode, a = this.isHorizontal, { index: o } = this.props, l = this.draggable && this.draggable.element, c = (d, u, m) => {
        n.preventDefault(), this.props.onKeyboardResize(d, u, m, n);
      };
      l && (i === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter ? (n.preventDefault(), this.onToggle(n)) : this.isDraggable && (a && i === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left ? c(l, o, -10) : a && i === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right ? c(l, o, 10) : !a && i === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up ? c(l, o, -10) : !a && i === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && c(l, o, 10)));
    }, this.state = {
      focused: !1
    };
  }
  get isStatic() {
    const { prev: s, next: n } = this.props, i = s.resizable && n.resizable, a = s.collapsible || n.collapsible;
    return !i && !a;
  }
  get isDraggable() {
    const { prev: s, next: n } = this.props, i = s.resizable && n.resizable, a = s.collapsed || n.collapsed;
    return !!i && !a;
  }
  get isHorizontal() {
    return this.props.orientation === "horizontal";
  }
  render() {
    const s = this.isDraggable, n = this.isStatic, i = this.isHorizontal, a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-splitbar",
      {
        ["k-focus"]: this.state.focused,
        ["k-splitbar-horizontal"]: i,
        ["k-splitbar-vertical"]: !i,
        ["k-splitbar-draggable-horizontal"]: i && s,
        ["k-splitbar-draggable-vertical"]: !i && s,
        ["k-splitbar-static-horizontal"]: i && n,
        ["k-splitbar-static-vertical"]: !i && n
      }
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable,
      {
        onPress: (o) => this.onDrag(o, !0, !1),
        onDrag: (o) => this.onDrag(o, !1, !1),
        onRelease: (o) => this.onDrag(o, !1, !0),
        ref: (o) => {
          this.draggable = o;
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          tabIndex: n ? -1 : 0,
          role: "separator",
          "aria-valuenow": 0,
          "aria-label": this.props.ariaLabel,
          "aria-orientation": i ? "vertical" : void 0,
          className: a,
          style: { touchAction: "none" },
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onDoubleClick: this.onToggle,
          onKeyDown: this.onKeyDown
        },
        this.props.prev.collapsible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "k-collapse-prev",
            onClick: this.onPrevToggle
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
            {
              name: this.props.prev.collapsible ? i ? this.props.prev.collapsed ? this.props.isRtl ? "caret-alt-left" : "caret-alt-right" : this.props.isRtl ? "caret-alt-right" : "caret-alt-left" : this.props.prev.collapsed ? "caret-alt-down" : "caret-alt-up" : void 0,
              icon: this.props.prev.collapsible ? i ? this.props.prev.collapsed ? this.props.isRtl ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : this.props.isRtl ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : this.props.prev.collapsed ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltUpIcon : void 0,
              size: "xsmall"
            }
          )
        ),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-resize-handle" }),
        this.props.next.collapsible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: "k-collapse-next",
            onClick: this.onNextToggle
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
            {
              name: this.props.next.collapsible ? i ? this.props.next.collapsed ? this.props.isRtl ? "caret-alt-right" : "caret-alt-left" : this.props.isRtl ? "caret-alt-left" : "caret-alt-right" : this.props.next.collapsed ? "caret-alt-up" : "caret-alt-down" : void 0,
              icon: this.props.next.collapsible ? i ? this.props.next.collapsed ? this.props.isRtl ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : this.props.isRtl ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon : this.props.next.collapsed ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltUpIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon : void 0,
              size: "xsmall"
            }
          )
        )
      )
    );
  }
}
class ws extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
}
ws.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.node
  ]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.node
  ])
};
function Ss({ imageUrl: e, icon: s, svgIcon: n, iconClass: i }) {
  return e ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { role: "presentation", className: "k-panelbar-item-icon k-image", src: e }) : s || n ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-panelbar-item-icon", name: s, icon: n }) : i ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "presentation", className: "k-panelbar-item-icon " + i }) : null;
}
class ce extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(s) {
    super(s), this.handleItemClick = () => {
      const { onSelect: n, disabled: i, id: a } = this.props;
      n && !i && n.call(void 0, {
        uniquePrivateKey: this.props.uniquePrivateKey,
        id: a,
        target: this
      });
    }, this.childFactory = (n) => this.props.keepItemsMounted ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(n, {
      ...n.props,
      in: this.props.expanded
    }) : n, this.state = {
      show: s.expanded || !1
    };
  }
  /**
   * @hidden
   */
  render() {
    const {
      id: s,
      children: n,
      title: i,
      uniquePrivateKey: a,
      disabled: o,
      selected: l,
      focused: c,
      expanded: d,
      className: u,
      level: m,
      headerClassName: h,
      animation: p,
      keepItemsMounted: v
    } = this.props, g = {
      role: "treeitem",
      "aria-disabled": o,
      "aria-hidden": !o && !d,
      "aria-selected": !o && l,
      "aria-expanded": !o && d && !!n
    }, y = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-panelbar-item",
      {
        "k-panelbar-header": m === 0,
        "k-expanded": d && !!n,
        "k-disabled": o
      },
      `k-level-${m}`,
      u
    ), I = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-link",
      {
        "k-selected": !o && l,
        "k-focus": !o && c
      },
      h
    ), N = { display: "block" }, f = Ss(this.props), R = !o && n ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
      {
        name: d ? "chevron-up" : "chevron-down",
        icon: d ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronUpIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronDownIcon,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-panelbar-toggle",
          d ? "k-panelbar-collapse" : "k-panelbar-expand"
        )
      }
    ) : null, S = !o && d || v ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        role: "group",
        "aria-expanded": d,
        "aria-hidden": !d,
        className: "k-panelbar-group k-panel k-group",
        style: { display: v ? this.state.show ? "block" : "none" : "block" }
      },
      n
    ) : null, w = (p === void 0 || p) && !o && n ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_6__/* .Reveal */ .gN,
      {
        transitionEnterDuration: 200,
        transitionExitDuration: 200,
        key: a + "_animation",
        style: N,
        children: S,
        childFactory: v && this.childFactory,
        unmountOnExit: !v,
        onBeforeEnter: () => v && this.setState({ show: !0 }),
        onAfterExited: () => v && this.setState({ show: !1 })
      }
    ) : S;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        id: s,
        className: y,
        ...g
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: I, onClick: this.handleItemClick }, f, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-panelbar-item-text" }, i), R),
      w
    );
  }
}
ce.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  level: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element
  ]),
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.number
  ]),
  focused: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  keepItemsMounted: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
ce.defaultProps = {
  title: "Untitled"
};
const pn = ({
  animation: e = !0,
  keepItemsMounted: s = !1,
  state: n,
  expanded: i,
  handleSelect: a,
  children: o,
  parentExpanded: l = !0,
  level: c = 0,
  parentPrivateKey: d = []
}) => react__WEBPACK_IMPORTED_MODULE_0__.Children.map(o, (u, m) => {
  if (u && u.type === ce) {
    let h, p = ut(u, d, m);
    if (u.props.children) {
      const v = {
        animation: e,
        keepItemsMounted: s,
        state: n,
        expanded: i,
        handleSelect: a,
        children: u.props.children,
        parentExpanded: (i || []).indexOf(p) > -1,
        level: c + 1,
        parentPrivateKey: [...d, p]
      };
      h = pn(v);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
      u,
      {
        ...u.props,
        animation: u.props.animation !== void 0 ? u.props.animation : e,
        keepItemsMounted: s,
        id: u.props.id || `k-panelbar-item-default-${p}`,
        uniquePrivateKey: p,
        parentUniquePrivateKey: d,
        parentExpanded: l,
        level: c,
        expanded: (i || []).indexOf(p) > -1,
        focused: n.focused === p && n.wrapperFocused,
        selected: n.selected === p,
        children: h,
        onSelect: a
      }
    );
  } else
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-panelbar-content k-content" }, u);
}), xs = (e) => {
  const s = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(e.children)[0];
  return s ? ut(s, [], 0) : "";
}, fn = (e, s, n = {
  expanded: e.expanded || [],
  selected: e.selected || "",
  focused: e.focused || "",
  wrapperFocused: !1
}, i = !0, a = []) => (react__WEBPACK_IMPORTED_MODULE_0__.Children.map(e.children, (o, l) => {
  if (o && o.type === ce) {
    let c = ut(o, a, l);
    !o.props.disabled && i && (o.props.selected && (n.selected = c), o.props.focused && (n.focused = c), o.props.expanded && (s === "multiple" ? n.expanded.push(c) : s === "single" && (n.expanded = [c])), o.props.children && (n = fn(
      o.props,
      s,
      n,
      !!o.props.expanded,
      [...a, c]
    )));
  }
}), n), ut = (e, s, n) => e && e.props && e.props.id ? e.props.id : s.length ? s[s.length - 1] + `.${n}` : `.${n}`;
function Ts(e, s = []) {
  return (e || []).forEach((n) => {
    n.disabled || (s.push(n), n.expanded && n.children && Ts(n.children, s));
  }), s;
}
function gn(e, s = []) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e, (n) => {
    n && n.props && !n.props.disabled && (s.push(n), n.props.children && gn(n.props.children, s));
  }), s;
}
function bn(e, s = []) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e, (n) => {
    n && n.props && !n.props.disabled && (n.props.expanded || n.props.parentExpanded) && (s.push(n), n.props.children && bn(n.props.children, s));
  }), s;
}
const pi = (e) => e != null;
var Wt;
((e) => {
  function s(n) {
    return n.map((i, a) => {
      let o;
      return i.content && (o = i.content), i.children && (o = s(i.children)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        ce,
        {
          ...i,
          children: o,
          key: i.id || a
        }
      );
    });
  }
  e.mapItemsToComponents = s;
})(Wt || (Wt = {}));
const Rs = (e, s) => e.length !== s.length ? !1 : e.every((n, i) => n === s[i]);
var te = /* @__PURE__ */ ((e) => (e[e.Toggle = 0] = "Toggle", e[e.Next = 1] = "Next", e[e.Previous = 2] = "Previous", e))(te || {});
class vn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this._element = null, this.showLicenseWatermark = !1, this.handleSelect = (i) => {
      this.onSelect(i), this.onFocus(i);
    }, this.onSelect = (i) => {
      const a = gn(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.children));
      let o, l;
      switch (a.forEach((c) => {
        c.props.uniquePrivateKey === (i.uniquePrivateKey || this.state.focused) && (o = c);
      }), this.expandMode) {
        case "single":
          l = [...o.props.parentUniquePrivateKey, o.props.uniquePrivateKey], Rs(this.expandedItems, l) && (o.props.parentUniquePrivateKey ? l = [...o.props.parentUniquePrivateKey] : l = []);
          break;
        case "multiple": {
          l = this.expandedItems.slice();
          let c = l.indexOf(o.props.uniquePrivateKey);
          c === -1 ? l.push(o.props.uniquePrivateKey) : l.splice(c, 1);
          break;
        }
        default:
          l = this.expandedItems.slice();
          break;
      }
      this.setState({ selected: o.props.uniquePrivateKey, expanded: l }), this.props.onSelect && this.props.onSelect.call(void 0, {
        target: o,
        expandedItems: l
      });
    }, this.onFocus = (i, a = 0) => {
      const o = bn(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.children));
      let l;
      o.forEach((c, d) => {
        if (c.props.uniquePrivateKey === (i.uniquePrivateKey || this.state.focused)) {
          let u = d + a < 0 ? 0 : d + a > o.length ? o.length - 1 : d + a;
          l = o[u];
        }
      }), l && (this.activeDescendant = l.props.id, this.setState({ focused: l.props.uniquePrivateKey }));
    }, this.onNavigate = (i, a) => {
      let o;
      switch (a) {
        case te.Previous:
          o = -1, this.onFocus(i, o);
          break;
        case te.Next:
          o = 1, this.onFocus(i, o);
          break;
        case te.Toggle:
          this.onSelect(i);
          break;
      }
    }, this.handleWrapperFocus = () => {
      clearTimeout(this.nextTickId), this.state.wrapperFocused || this.setState({ wrapperFocused: !0 });
    }, this.handleWrapperBlur = () => {
      this.nextTick(() => {
        this.setState({ wrapperFocused: !1 });
      });
    }, this.handleKeyDown = (i) => {
      const a = this._element && getComputedStyle(this._element).direction === "rtl" || !1;
      if (i.target === i.currentTarget) {
        const o = i.keyCode;
        let l;
        switch (o) {
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
            l = a ? te.Next : te.Previous;
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
            l = te.Previous;
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
            l = a ? te.Previous : te.Next;
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
            l = te.Next;
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
            l = te.Toggle;
            break;
          default:
            l = null;
            break;
        }
        l !== null && (i.preventDefault(), this.onNavigate(i, l));
      }
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.shouldShowValidationUI)(K);
    const n = fn(s, this.expandMode);
    n.focused || (n.focused = xs(s)), this.state = n;
  }
  get expandMode() {
    return this.props.expandMode || "multiple";
  }
  get selectedItem() {
    const { selected: s = this.state.selected } = this.props;
    return s;
  }
  get expandedItems() {
    return this.props.isControlled ? this.props.expanded || [] : this.state.expanded;
  }
  get children() {
    const s = { ...this.state, selected: this.selectedItem }, n = {
      animation: this.props.animation,
      keepItemsMounted: this.props.keepItemsMounted,
      state: s,
      expanded: this.expandedItems,
      handleSelect: this.handleSelect,
      children: this.props.children
    };
    return pn(n);
  }
  /**
   * @hidden
   */
  render() {
    const s = {
      "aria-activedescendant": this.activeDescendant
    }, n = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-panelbar",
      "k-pos-relative",
      this.props.className
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        ref: (i) => {
          this._element = i;
        },
        dir: this.props.dir,
        role: "tree",
        tabIndex: 0,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleWrapperFocus,
        onBlur: this.handleWrapperBlur,
        className: n,
        style: this.props.style,
        ...s
      },
      this.children,
      this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.WatermarkOverlay, null)
    );
  }
  nextTick(s) {
    this.nextTickId = window.setTimeout(() => s());
  }
}
vn.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: function(e, s) {
    const n = e[s];
    if (n) {
      if (Array.isArray(n)) {
        for (let i of n)
          if (!i.type || i.type !== ce)
            return new Error(
              "PanelBar children should be either PanelBarItem or Array of PanelBarItem."
            );
      } else if (n.type !== ce)
        return new Error(
          "PanelBar child should be either PanelBarItem or Array of PanelBarItem."
        );
      return null;
    }
    return null;
  },
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.string),
  focused: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  expandMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["single", "multiple"]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  keepItemsMounted: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
vn.defaultProps = {
  expandMode: "multiple",
  animation: !0,
  keepItemsMounted: !1
};
class Ds extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      id: s,
      size: n,
      collapsed: i,
      overlay: a,
      containsSplitter: o,
      collapsible: l,
      resizable: c,
      scrollable: d,
      keepMounted: u
    } = this.props, m = n && n.length > 0, h = {
      flexBasis: n
    }, p = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-pane",
      {
        ["k-hidden"]: i,
        hidden: i,
        ["k-pane-flex"]: o,
        ["k-pane-static"]: !c && !l || m,
        ["k-scrollable"]: d
      }
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: s,
        role: "group",
        style: h,
        className: p
      },
      !i || u ? this.props.children : void 0,
      a ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-splitter-overlay k-overlay" }) : void 0
    );
  }
}
const nt = "splitBarLabel", Os = {
  [nt]: "split bar"
}, Ps = {
  collapsible: !1,
  collapsed: !1,
  resizable: !0,
  scrollable: !0
}, Ms = 150;
class Ls extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  constructor(s) {
    super(s), this._container = null, this.validatePanes = (n) => {
      if (!n.filter((a) => a.size === void 0).length)
        throw new Error("The Splitter should have at least one pane without a set size.");
    }, this.mapPaneOptions = (n, i) => {
      const a = this.orientation, { dragIndex: o, isDragging: l } = this.state, c = [];
      for (let d = 0; d < i.length; d++) {
        let u = !1;
        const m = i[d];
        react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(m) && (u = m.type.displayName === "Splitter");
        let h = !1;
        l && o !== void 0 && (h = o === d || o + 1 === d), c.push({
          ...Ps,
          orientation: a,
          containsSplitter: u,
          overlay: h,
          ...(n || [])[d]
        });
      }
      return c;
    }, this.mapSplitterPanes = (n, i) => {
      const a = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this).toLanguageString(nt, Os[nt]);
      return n.map((o, l) => {
        let c;
        const d = l * 2, u = d + 1;
        if (l + 1 < n.length) {
          const h = n[l + 1];
          c = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            Ns,
            {
              key: u,
              index: l,
              orientation: o.orientation,
              prev: o,
              next: h,
              ariaLabel: a,
              onDrag: this.onBarDragResize,
              onToggle: this.onBarToggle,
              onKeyboardResize: this.onBarKeyboardResize,
              isRtl: this.isRtl
            }
          );
        }
        return [/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Ds,
          {
            key: d,
            ...o
          },
          i[l]
        ), c];
      });
    }, this.onBarToggle = (n, i) => {
      const o = this.panesOptions(this.panesContent).map((l, c) => {
        const d = this.getPaneProps(l);
        return c === n ? {
          ...d,
          collapsed: !l.collapsed
        } : {
          ...d
        };
      });
      this.props.onChange && this.props.onChange({
        newState: o,
        isLast: !0,
        nativeEvent: i
      });
    }, this.onBarDragResize = (n, i, a, o, l) => {
      const c = (/* @__PURE__ */ new Date()).getTime(), { pageX: d, pageY: u } = n, { prevElement: m, nextElement: h } = this.surroudingPanes(i);
      if (!m || !h)
        return;
      if (o) {
        this.setState({
          isDragging: !0,
          dragIndex: a,
          startTime: c,
          originalX: d,
          originalY: u,
          originalPrevSize: this.elementSize(m),
          originalNextSize: this.elementSize(h)
        });
        return;
      }
      const { originalPrevSize: p, originalNextSize: v, startTime: g, originalX: y, originalY: I } = this.state;
      if (!o && c - g < Ms) {
        l && this.resetDragState();
        return;
      }
      let N;
      this.orientation === "vertical" ? N = u - I : this.isRtl ? N = y - d : N = d - y, this.resize(a, a + 1, p, v, N, l, n), l && this.resetDragState();
    }, this.onBarKeyboardResize = (n, i, a, o) => {
      const { prevElement: l, nextElement: c } = this.surroudingPanes(n), d = this.elementSize(l), u = this.elementSize(c);
      this.resize(i, i + 1, d, u, a, !0, o);
    }, this.containerSize = () => this._container ? this.elementSize(this._container, !0) : 0, this.panesOptions = (n) => this.mapPaneOptions(this.panes, n), this.elementSize = (n, i) => {
      const a = i ? "client" : "offset";
      return this.orientation === "vertical" ? n[`${a}Height`] : n[`${a}Width`];
    }, this.clamp = (n, i, a) => Math.min(i, Math.max(n, a)), this.fixedSize = (n) => n && n.length > 0, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), this.state = {
      isDragging: !1,
      dragIndex: void 0,
      startTime: 0,
      originalX: 0,
      originalY: 0,
      originalPrevSize: 0,
      originalNextSize: 0,
      panes: s.defaultPanes || []
    };
  }
  get isControlledState() {
    return this.props.panes !== void 0;
  }
  get panes() {
    return this.panesDuringOnChange !== void 0 ? this.panesDuringOnChange : this.isControlledState ? this.props.panes : this.state.panes;
  }
  get orientation() {
    return this.props.orientation || "horizontal";
  }
  get isRtl() {
    return this._container && getComputedStyle(this._container).direction === "rtl" || !1;
  }
  get panesContent() {
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children).filter((s) => s);
  }
  /**
   * @hidden
   */
  render() {
    const s = this.panesContent, n = this.panesOptions(s), i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-widget",
      "k-splitter",
      "k-splitter-flex",
      `k-splitter-${this.orientation}`,
      this.props.className
    );
    return this.validatePanes(n), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        style: this.props.style,
        ref: (a) => this._container = a,
        className: i
      },
      this.mapSplitterPanes(n, s)
    );
  }
  surroudingPanes(s) {
    return {
      prevElement: s.previousElementSibling,
      nextElement: s.nextElementSibling
    };
  }
  isPercent(s) {
    return /%$/.test(s);
  }
  toPixels(s, n) {
    let i = parseInt(s, 10);
    return this.isPercent(s) && (i = n * i / 100), i;
  }
  resetDragState() {
    this.setState({
      isDragging: !1,
      dragIndex: void 0,
      startTime: 0,
      originalX: 0,
      originalY: 0,
      originalPrevSize: 0,
      originalNextSize: 0
    });
  }
  resize(s, n, i, a, o, l, c) {
    const d = this.panesOptions(this.panesContent), u = d[s], m = d[n], h = i + a, p = this.containerSize(), v = (b) => this.toPixels(b, p), g = {
      index: s,
      initialSize: i,
      min: v(u.min) || h - v(m.max) || 0,
      max: v(u.max) || h - v(m.min) || h
    }, y = {
      index: n,
      initialSize: a,
      min: v(m.min) || h - v(u.max) || 0,
      max: v(m.max) || h - v(u.min) || h
    }, I = (b, S) => {
      const w = d[b.index], O = this.clamp(b.min, b.max, b.initialSize + S);
      return this.isPercent(w.size || "") ? 100 * O / p + "%" : O + "px";
    };
    let N, f;
    this.fixedSize(u.size) && this.fixedSize(m.size) ? (N = I(g, o), f = I(y, -o)) : m.collapsible || this.fixedSize(m.size) ? f = I(y, -o) : N = I(g, o);
    const R = d.map((b, S) => {
      const w = this.getPaneProps(b);
      return S === s ? {
        ...w,
        size: N
      } : S === n ? {
        ...w,
        size: f
      } : {
        ...w
      };
    });
    this.panesDuringOnChange = R, this.isControlledState || this.setState({
      panes: R
    }), this.props.onChange && this.props.onChange({
      newState: R,
      isLast: l,
      nativeEvent: c
    }), this.panesDuringOnChange = void 0;
  }
  getPaneProps(s) {
    const { orientation: n, overlay: i, containsSplitter: a, ...o } = s;
    return o;
  }
}
Ls.displayName = "Splitter";
var kn = /* @__PURE__ */ ((e) => (e.TEXT = "text", e.IMAGE = "image", e.ICON = "icon", e))(kn || {}), Pe = /* @__PURE__ */ ((e) => (e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical", e))(Pe || {}), mt = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.primary = "primary", e.INFO = "info", e.SUCCESS = "success", e.WARNING = "warning", e.ERROR = "error", e))(mt || {}), yn = /* @__PURE__ */ ((e) => (e.START = "start", e.CENTER = "center", e.END = "end", e.STRETCHED = "stretched", e))(yn || {});
const _e = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const { children: n, dir: i, style: a, className: o, type: l, orientation: c, ...d } = e, u = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), m = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(u, () => ({
    element: m.current,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => u.current), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      dir: i,
      style: a,
      ref: m,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-card",
        o,
        { [`k-card-${l}`]: l !== mt.DEFAULT },
        c !== Pe.HORIZONTAL ? "k-card-vertical" : "k-card-horizontal"
      ),
      ...d
    },
    n
  );
});
_e.displayName = "KendoReactCard";
_e.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["horizontal", "vertical"]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["default", "primary", "info", "success", "warning", "error"])
};
_e.defaultProps = {
  type: mt.DEFAULT,
  orientation: Pe.VERTICAL
};
const In = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    style: e.style,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-card-header",
      e.className
    )
  },
  e.children
);
In.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const En = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    style: e.style,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-card-title",
      e.className
    )
  },
  e.children
);
En.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const Cn = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    style: e.style,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-card-body",
      e.className
    )
  },
  e.children
);
Cn.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const Nn = (e) => {
  const s = {
    layout: yn.START,
    orientation: Pe.HORIZONTAL,
    ...e
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      style: s.style,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-card-actions",
        "k-actions",
        s.className,
        `k-actions-${s.layout}`,
        s.orientation !== Pe.VERTICAL ? "k-actions-horizontal" : "k-actions-vertical"
      )
    },
    s.children
  );
};
Nn.propTypes = {
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["stretched", "start", "center", "end"]),
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["horizontal", "vertical"])
};
const wn = (e) => {
  const s = {
    src: "",
    ...e
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "img",
    {
      style: s.style,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-card-media",
        s.className
      ),
      src: s.src,
      alt: s.alt
    }
  );
};
wn.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  src: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const Sn = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    style: e.style,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-card-subtitle",
      e.className
    )
  },
  e.children
);
Sn.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const As = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    style: e.style,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-card-footer",
      e.className
    )
  },
  e.children
);
As.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const zs = (e) => {
  const s = {
    type: kn.TEXT,
    size: "medium",
    rounded: "full",
    fillMode: "solid",
    themeColor: "primary",
    ...e
  };
  return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      style: s.style,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-avatar",
        {
          ["k-avatar-bordered"]: s.border,
          [`k-rounded-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.roundedMap[s.rounded] || s.rounded}`]: s.rounded,
          [`k-avatar-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[s.size] || s.size}`]: s.size,
          [`k-avatar-${s.fillMode}`]: s.fillMode,
          [`k-avatar-${s.fillMode}-${s.themeColor}`]: !!(s.fillMode && s.themeColor)
        },
        s.className
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: `k-avatar-${s.type}` }, s.children)
  );
};
zs.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["text", "image", "icon"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "solid", "outline"]),
  /* eslint-disable max-len */
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "base", "dark", "error", "info", "inverse", "inverse", "light", "primary", "secondary", "success", "tertiary", "warning"])
};
const Fs = {
  animation: !0,
  expanded: !1,
  mode: "overlay",
  position: "start",
  mini: !1,
  dir: "ltr",
  width: 240,
  miniWidth: 50
}, ht = react__WEBPACK_IMPORTED_MODULE_0__.createContext(Fs), pt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const {
    className: n,
    style: i,
    text: a,
    icon: o,
    svgIcon: l,
    separator: c,
    disabled: d,
    selected: u,
    onSelect: m,
    index: h,
    tabIndex: p,
    children: v,
    ...g
  } = e, { expanded: y, mini: I, item: N } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ht), f = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      f.current && f.current.focus();
    },
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => ({
    element: f.current,
    focus: R,
    props: e
  }));
  const b = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    "k-drawer-item",
    {
      "k-selected": u,
      "k-disabled": d
    },
    n
  ), S = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (O) => {
      if (m && !d) {
        const A = {
          element: f.current,
          focus: R,
          props: e
        };
        m(A, h, O);
      }
    },
    [m, h, d]
  ), w = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (o || l) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: o && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(o), icon: l }), !y && I ? null : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-item-text" }, a));
  return c ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "k-drawer-item k-drawer-separator", role: "separator" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      ref: f,
      className: b,
      style: i,
      role: "menuitem",
      "aria-label": a,
      "aria-disabled": d,
      onClick: S,
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(p, d),
      ...g
    },
    N ? v : w
  );
});
pt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  separator: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  targetItem: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
pt.displayName = "KendoDrawerItem";
const Bs = 240, Ks = 50, Hs = { type: "slide", duration: 200 }, _s = { type: "slide", duration: 0 }, ft = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const { children: n, className: i, style: a } = e;
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const o = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.shouldShowValidationUI)(K), {
    animation: l,
    expanded: c,
    mode: d,
    position: u,
    onOverlayClick: m,
    mini: h,
    dir: p,
    width: v,
    miniWidth: g,
    items: y,
    item: I,
    onSelect: N
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ht), f = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      f.current && f.current.focus();
    },
    []
  ), b = typeof l != "boolean" ? l : l === !1 ? _s : Hs, S = v || Bs, w = g || Ks;
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => ({
    element: f.current,
    focus: R
  }));
  const O = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => "k-widget k-drawer " + (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      {
        "k-drawer-start": u === "start",
        "k-drawer-end": u === "end"
      },
      i
    ),
    [u]
  ), A = {
    opacity: 1,
    flexBasis: S,
    WebkitTransition: "all " + (b && b.duration) + "ms",
    /* Safari */
    transition: "all " + (b && b.duration) + "ms"
  }, D = {
    opacity: 1,
    transform: "translateX(0px)",
    WebkitTransition: "all " + (b && b.duration) + "ms",
    /* Safari */
    transition: "all " + (b && b.duration) + "ms"
  }, L = {
    opacity: h ? 1 : 0,
    flexBasis: h ? w : 0,
    WebkitTransition: "all " + (b && b.duration) + "ms",
    /* Safari */
    transition: "all " + (b && b.duration) + "ms"
  }, B = {
    opacity: 0,
    transform: "translateX(-100%)",
    WebkitTransition: "all " + (b && b.duration) + "ms",
    /* Safari */
    transition: "all " + (b && b.duration) + "ms"
  }, G = {
    opacity: 0,
    transform: "translateX(100%)",
    WebkitTransition: "all " + (b && b.duration) + "ms",
    /* Safari */
    transition: "all " + (b && b.duration) + "ms"
  }, ee = {
    transform: "translateX(0%)",
    WebkitTransitionDuration: (b && b.duration) + "ms",
    /* Safari */
    transitionDuration: (b && b.duration) + "ms"
  }, $ = c ? d === "push" ? A : D : d === "push" ? L : p === "ltr" && u === "start" || p === "rtl" && u === "end" ? h ? ee : B : h ? ee : G, x = y && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "ul",
    {
      className: "k-drawer-items",
      role: "menubar",
      "aria-label": "drawer-list",
      "aria-expanded": c
    },
    y.map(
      (j, Y) => {
        const Z = {
          index: Y,
          ...j,
          onSelect: N
        }, re = I || pt;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(re, { key: Y, ...Z });
      }
    )
  ), M = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      style: b ? { ...$, ...a } : a,
      className: O,
      ref: f
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "k-drawer-wrapper",
        style: !c && h && d === "overlay" ? { width: w } : { width: S }
      },
      x || n
    ),
    o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.WatermarkOverlay, null)
  );
  return d === "overlay" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, c && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-overlay", onClick: m }), M) : M;
});
ft.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
};
ft.displayName = "KendoDrawerNavigation";
const gt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const {
    expanded: n,
    mode: i,
    position: a,
    className: o,
    children: l,
    style: c,
    animation: d,
    mini: u,
    width: m,
    miniWidth: h,
    items: p,
    item: v,
    tabIndex: g,
    onOverlayClick: y,
    onSelect: I
  } = e, N = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), f = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      N.current && N.current.focus();
    },
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => ({
    element: N.current,
    focus: f
  }));
  const R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (w, O, A) => {
      if (p && I) {
        const D = {
          itemTarget: w,
          itemIndex: O,
          syntheticEvent: A,
          nativeEvent: A && A.nativeEvent,
          target: void 0
        };
        I.call(void 0, D);
      }
    },
    [p, I]
  ), b = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(N, e.dir), S = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    {
      "k-drawer-container": !0,
      "k-drawer-expanded": n,
      "k-drawer-overlay": i === "overlay",
      "k-drawer-push": i === "push",
      "k-drawer-mini": u
    },
    o
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    ht.Provider,
    {
      value: {
        animation: d,
        expanded: n,
        mode: i,
        position: a,
        mini: u,
        dir: b,
        items: p,
        item: v,
        width: m,
        miniWidth: h,
        onOverlayClick: y,
        onSelect: R
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: S,
        ref: N,
        dir: b,
        style: c,
        tabIndex: g
      },
      p && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ft, null),
      l
    )
  );
});
gt.propTypes = {
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  mini: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  miniWidth: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onOverlayClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
const Ws = {
  animation: !0,
  expanded: !1,
  mode: "overlay",
  position: "start",
  mini: !1,
  dir: "ltr",
  width: 240,
  miniWidth: 50
};
gt.defaultProps = Ws;
gt.displayName = "KendoDrawer";
const xn = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const { children: n, className: i, style: a } = e, o = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => ({
    element: o.current
  }));
  const l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    {
      "k-drawer-content": !0
    },
    i
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: l, style: a, ref: o }, n);
});
xn.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
xn.displayName = "KendoDrawerContent";
const $s = {
  linear: !1,
  mode: "steps",
  value: 0
}, Tn = react__WEBPACK_IMPORTED_MODULE_0__.createContext($s), Rn = 400, Dn = 0, On = "stepper.optionalText", st = "stepper.progBarAriaLabel", Pn = {
  [On]: "(Optional)",
  [st]: "progressbar"
}, We = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const {
    // content
    children: n,
    className: i,
    current: a,
    disabled: o,
    focused: l,
    icon: c,
    svgIcon: d,
    index: u,
    isValid: m,
    label: h,
    optional: p,
    style: v,
    tabIndex: g,
    text: y,
    ...I
  } = e, {
    animationDuration: N,
    isVertical: f,
    item: R,
    linear: b,
    mode: S,
    numOfSteps: w,
    value: O,
    onChange: A,
    onFocus: D,
    successIcon: L,
    errorIcon: B,
    successSVGIcon: G,
    errorSVGIcon: ee
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Tn), $ = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), x = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      $.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)($.current);
    },
    []
  ), M = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: $.current,
      focus: x
    }),
    [x]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, M);
  const j = !b || u === O - 1 || u === O || u === O + 1, Y = S === "labels" || !!c && !!h, Z = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useLocalization)(), de = ((ne) => Z.toLanguageString(ne, Pn[ne]))(On), se = typeof N == "number" ? N : N !== !1 ? Rn : Dn, Ie = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (ne) => {
      A && !o && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        A,
        ne,
        M(),
        { value: u }
      );
    },
    [A, O, o]
  ), ue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (ne) => {
      D && !o && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        D,
        ne,
        M(),
        void 0
      );
    },
    [D, o]
  ), H = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-step",
      {
        "k-step-first": u === 0,
        "k-step-last": w && u === w - 1,
        "k-step-done": u < O,
        "k-step-current": a,
        "k-step-optional": p,
        "k-step-error": m !== void 0 && !m,
        "k-step-success": m
      },
      {
        "k-disabled": o,
        "k-focus": l
      },
      i
    ),
    [u, w, O, a, p, o, l, m, i]
  ), _ = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      maxWidth: f ? void 0 : `calc(100% / ${w})`,
      maxHeight: f ? `calc(100% / ${w})` : void 0,
      pointerEvents: j ? void 0 : "none",
      ...v
    }),
    [f, w, v, j]
  ), F = m ? L : B, V = F ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      className: "k-step-indicator-icon " + F,
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
    {
      className: "k-step-indicator-icon",
      name: m ? "check-circle" : "exclamation-circle",
      icon: m ? G || _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.checkOutlineIcon : ee || _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.exclamationCircleIcon
    }
  ), me = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, S !== "labels" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      className: "k-step-indicator",
      "aria-hidden": !0,
      style: { transitionDuration: se + "ms" }
    },
    c || d ? !Y && m !== void 0 ? V : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-step-indicator-icon", name: c && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(c), icon: d }) : m !== void 0 ? V : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-step-indicator-text" }, y || u + 1)
  ) : null), Ee = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-step-label" }, h && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-step-text" }, h), Y && m !== void 0 && V, p && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-step-label-optional" }, de)), he = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, me, Ee);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      ref: $,
      className: H,
      style: _,
      ...I
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "a",
      {
        className: "k-step-link",
        title: h || void 0,
        onClick: Ie,
        onFocus: ue,
        tabIndex: g || (l ? 0 : -1),
        "aria-current": a,
        "aria-disabled": o || !j || void 0,
        "aria-invalid": m !== void 0 && !m || void 0
      },
      R ? n : he
    )
  );
});
We.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  // content: PropTypes.any,
  current: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  isValid: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optional: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const Us = {
  tabIndex: 0
};
We.defaultProps = Us;
We.displayName = "KendoStep";
const bt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const {
    animationDuration: n,
    children: i,
    className: a,
    disabled: o,
    errorIcon: l,
    errorSVGIcon: c,
    item: d,
    items: u,
    linear: m,
    mode: h,
    orientation: p,
    style: v,
    successIcon: g,
    successSVGIcon: y,
    onChange: I,
    onFocus: N
  } = e, R = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useLocalization)().toLanguageString(st, Pn[st]), b = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), S = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      b.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)(b.current);
    },
    []
  ), w = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: b.current,
      focus: S
    }),
    [S]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, w);
  const O = e.value || Mn.value, [A, D] = react__WEBPACK_IMPORTED_MODULE_0__.useState(O), L = u ? u.length : 0, B = p === "vertical", G = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(b, e.dir), ee = typeof n == "number" ? n : n !== !1 ? Rn : Dn;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    D(O);
  }, [O]);
  const $ = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (H, _) => {
      const F = _ === O - 1, V = _ === O, me = _ === O + 1;
      O !== _ && I && !o && (!m || F || V || me) && ((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        I,
        H,
        w(),
        { value: _ }
      ), D(_));
    },
    [O, m, I, o, D]
  ), x = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (H) => {
      let _ = H.value, F = H.syntheticEvent;
      $(F, _);
    },
    [$]
  ), M = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (H) => {
      N && !o && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        N,
        H.syntheticEvent,
        w(),
        void 0
      );
    },
    [N, o]
  ), j = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (H) => {
      $(H, A);
    },
    [$, A]
  ), Y = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (H) => {
      const _ = G === "rtl", F = A, V = u.length - 1;
      switch (H.keyCode) {
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
          H.preventDefault(), !_ && F > 0 && D(F - 1), _ && F < V && D(F + 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
          H.preventDefault(), !_ && F < V && D(F + 1), _ && F > 0 && D(F - 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
          H.preventDefault(), !_ && F > 0 && D(F - 1), _ && F > 0 && D(F - 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
          H.preventDefault(), !_ && F < V && D(F + 1), _ && F < V && D(F + 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
          H.preventDefault(), D(0);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
          H.preventDefault(), D(V);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
          H.preventDefault();
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
          H.preventDefault(), u[F].disabled || j(H);
          break;
      }
    },
    [u, D, A, G, j]
  ), Z = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-stepper",
      {
        "k-stepper-linear": m
      },
      a
    ),
    [m, a]
  ), re = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: B ? void 0 : "repeat(" + L * 2 + ", 1fr)",
      gridTemplateRows: B ? "repeat(" + L + ", 1fr)" : void 0,
      ...v
    }),
    [B, L, v]
  ), de = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-step-list",
      {
        "k-step-list-horizontal": !B,
        "k-step-list-vertical": B
      }
    ),
    [B]
  ), se = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      gridColumnStart: B ? void 0 : 1,
      gridColumnEnd: B ? void 0 : -1,
      gridRowStart: B ? 1 : void 0,
      gridRowEnd: B ? -1 : void 0
    }),
    [B]
  ), Ie = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      gridColumnStart: B ? void 0 : 2,
      gridColumnEnd: B ? void 0 : L * 2,
      gridRowStart: B ? 1 : void 0,
      gridRowEnd: B ? L : void 0,
      top: B ? 17 : void 0
    }),
    [B, L]
  ), ue = u && u.map((H, _) => {
    const F = {
      index: _,
      disabled: o || H.disabled,
      focused: _ === A,
      current: _ === O,
      ...H
    }, V = d || We;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(V, { key: _, ...F });
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Tn.Provider,
    {
      value: {
        animationDuration: n,
        isVertical: B,
        item: d,
        linear: m,
        mode: h,
        numOfSteps: L,
        value: O,
        successIcon: g,
        successSVGIcon: y,
        errorIcon: l,
        errorSVGIcon: c,
        onChange: x,
        onFocus: M
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "nav",
      {
        className: Z,
        style: re,
        dir: G,
        onKeyDown: Y
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "ol",
        {
          className: de,
          style: se
        },
        ue || i
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_progressbars__WEBPACK_IMPORTED_MODULE_8__/* .ProgressBar */ .z,
        {
          style: Ie,
          animation: { duration: ee },
          ariaLabel: R,
          "aria-hidden": !0,
          max: L - 1,
          labelVisible: !1,
          orientation: p,
          reverse: p === "vertical",
          value: O,
          disabled: o,
          tabIndex: -1
        }
      )
    )
  );
});
bt.propTypes = {
  animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  errorIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  errorSVGIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  linear: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["steps", "labels"]),
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["horizontal", "vertical"]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  successIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  successSVGIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.number.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
const Mn = {
  value: 0
};
bt.defaultProps = Mn;
bt.displayName = "KendoStepper";
const Ln = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const {
    children: n,
    className: i,
    style: a,
    id: o
  } = e, l = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), c = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      l.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)(l.current);
    },
    []
  ), d = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: l.current,
      focus: c
    }),
    [c]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, d);
  const u = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), m = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.themeColor || Ve.themeColor,
    [e.themeColor]
  ), h = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.position || Ve.position,
    [e.position]
  ), p = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.positionMode || Ve.positionMode,
    [e.positionMode]
  ), v = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-appbar",
      {
        "k-appbar-top": h === "top",
        "k-appbar-bottom": h === "bottom",
        "k-appbar-static": p === "static",
        "k-appbar-sticky": p === "sticky",
        "k-appbar-fixed": p === "fixed",
        "k-appbar-light": m === "light",
        "k-appbar-dark": m === "dark",
        "k-appbar-inherit": m === "inherit"
      },
      i
    ),
    [h, p, m, i]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: v,
      style: a,
      id: o || u
    },
    n
  );
});
Ln.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["top", "bottom"]),
  positionMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["static", "sticky", "fixed"])
};
const Ve = {
  themeColor: "light",
  position: "top",
  positionMode: "static"
};
Ln.displayName = "KendoAppBar";
const An = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const {
    children: n,
    className: i,
    style: a
  } = e, o = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), l = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      o.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)(o.current);
    },
    []
  ), c = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: o.current,
      focus: l
    }),
    [l]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, c);
  const d = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-appbar-section",
      i
    ),
    [i]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: d, style: a }, n);
});
An.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
An.displayName = "KendoAppBarSection";
const zn = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  const {
    children: n,
    className: i,
    style: a
  } = e, o = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), l = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      o.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)(o.current);
    },
    []
  ), c = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: o.current,
      focus: l
    }),
    [l]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, c);
  const d = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-appbar-spacer",
      {
        "k-appbar-spacer-sized": a && a.width && a.width !== null
      },
      i
    ),
    [i, a]
  ), u = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      flexBasis: a && a.width ? a.width : void 0
    }),
    [a]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: d, style: u }, n);
});
zn.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
zn.displayName = "KendoAppBarSpacer";
const qe = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable,
  {
    onPress: e.onPress,
    onDrag: (s) => {
      e.onResize(s.event, !1, e.d);
    },
    onRelease: (s) => {
      e.onResize(s.event, !0, e.d);
    }
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-resize-handle k-cursor-" + e.d + "-resize", style: { bottom: 0, right: 0, ...e.style } })
);
class js extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.handleResize = (s, n, i) => {
      s.originalEvent.preventDefault(), this.props.onResize(s, { end: n, direction: i });
    };
  }
  render() {
    const { resizable: s, onPress: n, rtl: i } = this.props;
    return s ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, s !== "vertical" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      qe,
      {
        onPress: n,
        onResize: this.handleResize,
        d: "ew",
        style: i ? { top: 0, width: 9, left: 0, right: "" } : { top: 0, width: 9, right: 0, left: "" }
      }
    ), s !== "horizontal" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { onPress: n, onResize: this.handleResize, d: "ns", style: { left: 0, height: 9 } }), s === !0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      qe,
      {
        onPress: n,
        onResize: this.handleResize,
        d: i ? "nesw" : "nwse",
        style: i ? { width: 9, height: 9, right: "", left: 0 } : { width: 9, height: 9, right: 0, left: "" }
      }
    )) : null;
  }
}
const $t = 200, it = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.state = {
      rtl: !1
    }, this.oldSize = {}, this.draggable = null, this.dragging = !1, this.resizing = !1, this.element = null, this.hintElement = null, this.ignoreDrag = !1, this.pressOffset = { x: 0, y: 0 }, this.pressXY = { x: 0, y: 0 }, this.currentTranslate = { x: 0, y: 0 }, this.preventDataOps = void 0, this.handleResize = (e, s) => {
      if (s.end) {
        this.handleRelease();
        return;
      }
      if (!this.element || !this.hintElement)
        return;
      const n = e.clientX, i = e.clientY;
      this.resizing = !0;
      const a = (s.direction !== "ns" ? n - this.pressXY.x : 0) * (this.state.rtl ? -1 : 1), o = s.direction !== "ew" ? i - this.pressXY.y : 0;
      if (this.dragElement && (this.state.rtl ? this.dragElement.style.marginLeft = -a + "px" : this.dragElement.style.marginRight = -a + "px", this.dragElement.style.height = `calc(100% + ${o}px)`), this.hintElement.classList.add("k-layout-item-hint-resize"), this.preventDataOps)
        return;
      let l = 0, c = 0;
      const d = this.element.getBoundingClientRect();
      a > d.width / this.props.defaultPosition.colSpan / 3 && (l = 1), a < -d.width / this.props.defaultPosition.colSpan / 1.25 && (l = -1), o > d.height / this.props.defaultPosition.rowSpan / 3 && (c = 1), o < -d.height / this.props.defaultPosition.rowSpan / 1.25 && (c = -1), (l !== 0 || c !== 0) && this.props.update(this.props.index, 0, 0, c, l);
    }, this.handlePress = (e) => {
      if (!this.dragElement)
        return;
      if (this.pressXY = {
        x: e.event.clientX,
        y: e.event.clientY
      }, this.ignoreDrag = !1, this.props.ignoreDrag && this.props.ignoreDrag(e.event.originalEvent)) {
        this.ignoreDrag = !0;
        return;
      }
      this.element && this.hintElement && (this.element.style.zIndex = "10", this.hintElement.style.display = "block"), this.dragElement.classList.remove("k-cursor-grab"), this.dragElement.classList.add("k-cursor-grabbing");
      const s = this.dragElement.getBoundingClientRect();
      this.pressOffset = {
        x: e.event.clientX - s.x,
        y: e.event.clientY - s.y
      };
    }, this.handleDrag = (e) => {
      if (this.ignoreDrag)
        return;
      const s = this.dragElement;
      if (e.event.originalEvent.defaultPrevented || !s)
        return;
      this.dragging = !0, e.event.originalEvent.preventDefault();
      const n = s.getBoundingClientRect();
      if (this.currentTranslate = {
        x: e.event.clientX - n.x - this.pressOffset.x + this.currentTranslate.x,
        y: e.event.clientY - n.y - this.pressOffset.y + this.currentTranslate.y
      }, s.style.transform = `translate(${this.currentTranslate.x}px, ${this.currentTranslate.y}px)`, s.style.transition = "transform 0s", this.preventDataOps)
        return;
      let i = 0, a = 0;
      this.currentTranslate.y > 0.7 * n.height / this.props.defaultPosition.rowSpan && (a = 1), this.currentTranslate.y < 0.7 * -n.height / this.props.defaultPosition.rowSpan && (a = -1), this.currentTranslate.x > 0.7 * n.width / this.props.defaultPosition.colSpan && (i = 1), this.currentTranslate.x < 0.7 * -n.width / this.props.defaultPosition.colSpan && (i = -1), this.props.update(this.props.index, a, this.state.rtl ? -i : i, 0, 0);
    }, this.handleRelease = () => {
      this.dragging = this.resizing = !1, this.currentTranslate = { x: 0, y: 0 }, this.element && this.hintElement && (this.element.style.zIndex = "1", this.hintElement.classList.remove("k-layout-item-hint-resize"), this.hintElement.style.display = "none");
      const e = this.dragElement;
      e && (e.style.transform = "translate(0px, 0px)", e.style.transition = `transform ${$t}ms cubic-bezier(0.2, 0, 0, 1) 0s`, e.style.marginRight = "0px", e.style.marginLeft = "0px", e.style.height = "100%", e.classList.remove("k-cursor-grabbing"), e.classList.add("k-cursor-grab"));
    };
  }
  get reorderable() {
    return this.props.reorderable !== void 0 ? this.props.reorderable : it.defaultProps.reorderable;
  }
  get dragElement() {
    return this.draggable ? this.draggable.element : void 0;
  }
  componentDidMount() {
    this.element && (getComputedStyle(this.element).direction === "rtl" && this.setState({
      rtl: !0
    }), this.hintElement && (this.hintElement.style.height = this.element.offsetHeight + "px", this.hintElement.style.width = this.element.offsetWidth + "px"));
  }
  render() {
    _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && clearTimeout && typeof clearTimeout == "function" && (clearTimeout(this.preventDataOps), this.preventDataOps = window.setTimeout(() => {
      this.preventDataOps = void 0;
    }, 200));
    const e = this.props.defaultPosition, s = this.props.resizable !== void 0 ? this.props.resizable : it.defaultProps.resizable, n = {
      gridColumnStart: e.col,
      gridColumnEnd: `span ${e.colSpan}`,
      gridRowStart: e.row,
      gridRowEnd: `span ${e.rowSpan}`,
      outline: "none",
      order: e.order,
      display: "none",
      ...this.props.hintStyle
    }, i = {
      gridColumnStart: e.col,
      gridColumnEnd: `span ${e.colSpan}`,
      gridRowStart: e.row,
      gridRowEnd: `span ${e.rowSpan}`,
      order: e.order
    }, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: (o) => {
          this.draggable = o ? { element: o } : null;
        },
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-tilelayout-item k-card", { "k-cursor-grab": this.reorderable }, this.props.className),
        style: { height: "100%", ...i, ...this.props.style }
      },
      this.props.children,
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        js,
        {
          onPress: this.handlePress,
          onResize: this.handleResize,
          resizable: s,
          rtl: this.state.rtl
        }
      )
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: (o) => {
      this.element = o;
    }, style: i }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: (o) => {
          this.hintElement = o;
        },
        style: { position: "absolute", ...n },
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-layout-item-hint", this.props.hintClassName)
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable,
      {
        ref: (o) => {
          this.draggable = o;
        },
        onDrag: this.props.reorderable ? this.handleDrag : void 0,
        onRelease: this.props.reorderable ? this.handleRelease : void 0,
        onPress: this.props.reorderable ? this.handlePress : void 0
      },
      a
    ));
  }
  /**
   * @hidden
   */
  getSnapshotBeforeUpdate(e) {
    return this.oldSize = {}, this.dragElement && (this.oldSize = this.dragElement.getBoundingClientRect()), null;
  }
  /**
   * @hidden
   */
  componentDidUpdate(e) {
    const s = this.dragElement;
    if (!s)
      return;
    const n = s.getBoundingClientRect(), i = this.oldSize;
    if (this.resizing) {
      const l = n.width - i.width;
      if (this.state.rtl) {
        const u = parseFloat(s.style.marginLeft || "0");
        s.style.marginLeft = u - l + "px";
      } else {
        const u = parseFloat(s.style.marginRight || "0");
        s.style.marginRight = u + l + "px";
      }
      this.pressXY.x += this.state.rtl ? -l : l;
      const c = n.height - i.height, d = parseFloat(s.style.height.substring(12));
      s.style.height = `calc(100% + ${d + c}px)`, this.pressXY.y += c;
    }
    const a = i.left - n.left, o = i.top - n.top;
    if (!(a === 0 && o === 0)) {
      if (this.dragging) {
        (e.defaultPosition.order !== this.props.defaultPosition.order || e.defaultPosition.col !== this.props.defaultPosition.col) && (this.currentTranslate.x = 0, this.currentTranslate.y = 0, s.style.transform = "");
        return;
      }
      Math.abs(o) < 15 && Math.abs(a) < 15 || requestAnimationFrame(() => {
        const l = this.element;
        l && (l.style.transform = `translate(${a}px, ${o}px)`, l.style.transition = "transform 0s", requestAnimationFrame(() => {
          l.style.transform = "", l.style.transition = `transform ${$t}ms cubic-bezier(0.2, 0, 0, 1) 0s`;
        }));
      });
    }
  }
};
let $e = it;
$e.propTypes = {
  defaultPosition: prop_types__WEBPACK_IMPORTED_MODULE_1__.object.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  hintStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  hintClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["horizontal", "vertical", !0, !1]),
  reorderable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
$e.displayName = "KendoTileLayoutItem";
$e.defaultProps = {
  resizable: !0,
  reorderable: !0
};
const Vs = {
  column: "k-grid-flow-col",
  row: "k-grid-flow-row",
  "column dense": "k-grid-flow-col-dense",
  "row dense": "k-grid-flow-row-dense",
  unset: "k-grid-flow-unset"
};
class Fn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(s) {
    super(s), this._element = null, this.state = { positions: (this.props.items || []).map((n, i) => Object.assign({ order: i, rowSpan: 1, colSpan: 1 }, n.defaultPosition)) }, this.showLicenseWatermark = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.update = (n, i, a, o = 0, l = 0) => {
      if (i === 0 && a === 0 && !l && !o)
        return;
      let c = !1;
      const d = this.state.positions.map((g) => Object.assign({}, g)), u = d[n], m = d.find((g) => g.order === u.order + i);
      m && m !== u && (u.order += i, m.order += -i, c = !0);
      const h = u.col + a;
      a !== 0 && h >= 1 && h + u.colSpan <= (this.props.columns || 3) + 1 && (u.col = h, c = !0);
      const p = u.colSpan + l;
      l && p >= 1 && p + u.col <= (this.props.columns || 3) + 1 && (u.colSpan = p, c = !0);
      const v = u.rowSpan + o;
      o && v >= 1 && (u.rowSpan = v, c = !0), c && (this.setState({ positions: d }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onReposition, {}, this, { value: d }));
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.shouldShowValidationUI)(K);
  }
  /**
   * Gets the HTML element of the TileLayout component.
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(s, n) {
    return s.positions ? {
      positions: s.positions.map((i, a) => Object.assign({ order: a, rowSpan: 1, colSpan: 1 }, i))
    } : s.items && (!n.positions || s.items.length !== n.positions.length) ? {
      positions: s.items.map((i, a) => Object.assign({ order: a, rowSpan: 1, colSpan: 1 }, i.defaultPosition))
    } : null;
  }
  render() {
    const {
      className: s,
      columns: n = 3,
      columnWidth: i = "1fr",
      gap: a,
      rowHeight: o = "1fr",
      style: l,
      autoFlow: c = "column",
      items: d = []
    } = this.props, u = a ? `${typeof a.rows == "number" ? a.rows + "px" : a.rows} ${typeof a.columns == "number" ? a.columns + "px" : a.columns}` : 16, m = {
      gridTemplateColumns: `repeat(${n}, minmax(0px, ${typeof i == "number" ? i + "px" : i}))`,
      gridAutoRows: `minmax(0px, ${typeof o == "number" ? o + "px" : o})`,
      gap: u,
      padding: u,
      ...l
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: (h) => {
          this._element = h;
        },
        dir: this.props.dir,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-tilelayout k-pos-relative", Vs[c], s),
        style: m,
        id: this.props.id,
        children: d.map(
          (h, p) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: this.props.dataItemKey ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(this.props.dataItemKey)(h) : p }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            $e,
            {
              update: this.update,
              defaultPosition: this.state.positions[p],
              index: p,
              resizable: h.resizable,
              reorderable: h.reorderable,
              style: h.style,
              className: h.className,
              hintClassName: h.hintClassName,
              hintStyle: h.hintStyle,
              ignoreDrag: this.props.ignoreDrag
            },
            h.item ? h.item : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-tilelayout-item-header k-card-header" }, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(h.header) ? h.header : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "k-card-title" }, h.header)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-tilelayout-item-body k-card-body" }, h.body))
          ), this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.WatermarkOverlay, null))
        )
      }
    );
  }
}
Fn.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  gap: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  columnWidth: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.number, prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.number, prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  positions: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  autoFlow: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["column", "row", "column dense", "row dense", "unset"]),
  onReposition: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  ignoreDrag: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
Fn.displayName = "KendoTileLayout";
const qs = {
  vertical: "k-bottom-nav-item-flow-vertical",
  horizontal: "k-bottom-nav-item-flow-horizontal"
}, Gs = {
  fixed: "k-pos-fixed",
  sticky: "k-pos-sticky"
}, Ue = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(
    s,
    () => ({
      element: n.current
    })
  );
  const {
    className: i,
    style: a,
    selected: o,
    disabled: l,
    item: c,
    render: d,
    dataItem: u,
    icon: m,
    svgIcon: h,
    text: p,
    id: v,
    onSelect: g,
    onKeyDown: y,
    index: I,
    tabIndex: N
  } = e, f = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-bottom-nav-item",
      {
        "k-selected": o,
        "k-disabled": l
      },
      i
    ),
    [o, l, i]
  ), R = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (A) => {
      g && I !== void 0 && !l && g(A, I);
    },
    [g, I, l]
  ), b = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (A) => {
      y && I !== void 0 && !l && y(A, I);
    },
    [y, I, l]
  ), S = d, w = c, O = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      ref: n,
      className: f,
      style: a,
      role: "link",
      id: v,
      tabIndex: N,
      onClick: R,
      onKeyDown: b,
      "aria-current": o,
      "aria-disabled": l
    },
    w ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(w, { itemIndex: I, item: u }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (m || h) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-bottom-nav-item-icon", name: m, icon: h, size: "xlarge" }), p && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-bottom-nav-item-text", style: { userSelect: "none" } }, p))
  );
  return S !== void 0 ? S.call(void 0, O, e) : O;
}), Xs = {
  tabIndex: 0
};
Ue.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
};
Ue.defaultProps = Xs;
Ue.displayName = "KendoReactBottomNavigationItem";
const vt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      n.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.focusFirstFocusableChild)(n.current);
    },
    []
  ), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: n.current,
      focus: i
    }),
    [i]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, a);
  const {
    positionMode: o = fe.positionMode,
    itemFlow: l = fe.itemFlow,
    border: c = fe.border,
    className: d,
    items: u,
    item: m,
    itemRender: h,
    disabled: p,
    style: v,
    id: g,
    onSelect: y,
    onKeyDown: I
  } = e, N = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), f = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(n, e.dir), R = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.fillMode === null || e.fill === null ? null : e.fill || e.fillMode || fe.fillMode,
    [e.fillMode, e.fill]
  ), b = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.themeColor || fe.themeColor,
    [e.themeColor]
  ), S = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-bottom-nav",
      Gs[o],
      qs[l],
      {
        [`k-bottom-nav-${R}`]: R,
        [`k-bottom-nav-${R}-${b}`]: !!(R && b),
        "k-bottom-nav-border": c,
        "k-disabled": p
      },
      d
    ),
    [o, b, R, l, c, p, d]
  ), w = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (D, L) => {
      u && !u[L].disabled && y && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        y,
        D,
        a(),
        {
          itemTarget: u[L],
          itemIndex: L
        }
      );
    },
    [u, y]
  ), O = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (D, L) => {
      w(D, L);
    },
    [w]
  ), A = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (D, L) => {
      switch (D.keyCode) {
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
          w(D, L), D.preventDefault();
          break;
      }
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        I,
        D,
        a(),
        void 0
      );
    },
    [w, I]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "nav",
    {
      ref: n,
      className: S,
      style: v,
      id: g || N,
      dir: f
    },
    u && u.map((D, L) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Ue,
      {
        ...D,
        key: L,
        index: L,
        id: `${g || N}-${L}`,
        disabled: p || D.disabled,
        selected: D.selected,
        dataItem: D,
        item: m,
        render: h,
        onSelect: O,
        onKeyDown: A
      }
    ))
  );
}), fe = {
  themeColor: "primary",
  fillMode: "flat",
  itemFlow: "vertical",
  positionMode: "fixed",
  border: !0
};
vt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "inverse"
  ]),
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["solid", "flat"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["solid", "flat"]),
  itemFlow: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["vertical", "horizontal"]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
vt.defaultProps = fe;
vt.displayName = "KendoReactBottomNavigation";
const kt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: n.current
    }),
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, i);
  const { className: a, style: o, id: l, children: c } = e, d = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), u = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.orientation || Le.orientation,
    [e.orientation]
  ), m = u === "horizontal", h = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.align && e.align.horizontal ? e.align.horizontal : Le.hAlign,
    [e.align]
  ), p = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.align && e.align.vertical ? e.align.vertical : Le.vAlign,
    [e.align]
  ), v = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-stack-layout",
      {
        "k-hstack": u === "horizontal",
        "k-vstack": u === "vertical",
        "k-justify-content-start": m && h === "start" || !m && p === "top",
        "k-justify-content-center": m && h === "center" || !m && p === "middle",
        "k-justify-content-end": m && h === "end" || !m && p === "bottom",
        "k-justify-content-stretch": m && h === "stretch" || !m && p === "stretch",
        "k-align-items-start": !m && h === "start" || m && p === "top",
        "k-align-items-center": !m && h === "center" || m && p === "middle",
        "k-align-items-end": !m && h === "end" || m && p === "bottom",
        "k-align-items-stretch": !m && h === "stretch" || m && p === "stretch"
      },
      a
    ),
    [u, m, h, p, a]
  ), g = {
    gap: `${typeof e.gap == "number" ? e.gap + "px" : e.gap}`,
    ...o
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: n,
      className: v,
      style: g,
      id: l || d
    },
    c
  );
}), Le = {
  orientation: "horizontal",
  hAlign: "stretch",
  vAlign: "stretch"
};
kt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["horizontal", "vertical"]),
  gap: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
  align: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["top", "middle", "bottom", "stretch"]),
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "center", "end", "stretch"])
  })
};
kt.defaultProps = Le;
kt.displayName = "KendoReactStackLayout";
const yt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: n.current
    }),
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, i);
  const { className: a, style: o, id: l, children: c, gap: d } = e, u = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), m = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.align && e.align.horizontal ? e.align.horizontal : rt.hAlign,
    [e.align]
  ), h = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.align && e.align.vertical ? e.align.vertical : rt.vAlign,
    [e.align]
  ), p = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-grid-layout",
      {
        "k-justify-items-start": m === "start",
        "k-justify-items-center": m === "center",
        "k-justify-items-end": m === "end",
        "k-justify-items-stretch": m === "stretch",
        "k-align-items-start": h === "top",
        "k-align-items-center": h === "middle",
        "k-align-items-end": h === "bottom",
        "k-align-items-stretch": h === "stretch"
      },
      a
    ),
    [m, h, a]
  ), v = d ? `${typeof d.rows == "number" ? d.rows + "px" : d.rows} ${typeof d.cols == "number" ? d.cols + "px" : d.cols}` : void 0, g = e.rows && e.rows.map((N) => `${typeof N.height == "number" ? N.height + "px" : N.height}`).join(" "), y = e.cols && e.cols.map((N) => `${typeof N.width == "number" ? N.width + "px" : N.width}`).join(" "), I = {
    gap: v,
    gridTemplateColumns: y,
    gridTemplateRows: g,
    ...o
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: n,
      className: p,
      style: I,
      id: l || u
    },
    c
  );
}), rt = {
  hAlign: "stretch",
  vAlign: "stretch",
  gap: void 0
};
yt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  gap: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    rows: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
    columns: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number])
  }),
  align: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["top", "middle", "bottom", "stretch"]),
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "center", "end", "stretch"])
  })
};
yt.defaultProps = rt;
yt.displayName = "KendoReactGridLayout";
const Bn = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: n.current
    }),
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, i);
  const { className: a, style: o, id: l, children: c, row: d, col: u, rowSpan: m, colSpan: h } = e, p = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), v = {
    gridArea: `${d || "auto"} / ${u || "auto"} / ${m ? "span " + m : "auto"} / ${h ? "span " + h : "auto"}`,
    ...o
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: n,
      className: a,
      style: v,
      id: l || p
    },
    c
  );
});
Bn.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
Bn.displayName = "KendoReactGridLayoutItem";
const It = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      i.current && i.current.focus();
    },
    [i]
  );
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => ({
    element: i.current,
    focus: a,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => n.current), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      ref: i,
      id: e.id,
      style: e.style,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-breadcrumb-item",
        {
          "k-breadcrumb-root-item": e.isFirstItem,
          "k-breadcrumb-last-item": e.isLastItem
        },
        e.className
      )
    },
    e.children
  );
}), Ys = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
It.displayName = "KendoReactBreadcrumbListItem";
It.propTypes = Ys;
const Et = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => {
    var a;
    return {
      element: ((a = i.current) == null ? void 0 : a.element) || null,
      props: e
    };
  }), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => n.current), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
    {
      ref: i,
      id: e.id,
      "aria-hidden": !0,
      tabIndex: e.tabIndex,
      style: e.style,
      name: e.dir === "rtl" ? "chevron-left" : "chevron-right",
      icon: e.dir === "rtl" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronRightIcon,
      className: "k-breadcrumb-delimiter-icon",
      size: "xsmall"
    }
  );
}), Zs = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
Et.displayName = "KendoReactBreadcrumbDelimiter";
Et.propTypes = Zs;
const Ct = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      i.current && i.current.focus();
    },
    [i]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => ({
    element: i.current,
    focus: a,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => n.current);
  const o = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (c) => {
      e.id && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(e.onItemSelect, c, c.target, { id: e.id });
    },
    [e.onItemSelect]
  ), l = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (c) => {
      e.id && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(e.onKeyDown, c, c.target, { id: e.id });
    },
    [e.onKeyDown]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      "aria-current": e.ariaCurrent ? e.ariaCurrent : e.isLast,
      role: "link",
      id: e.id,
      ref: i,
      style: e.style,
      dir: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir),
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        {
          "k-breadcrumb-root-link": e.isFirst,
          "k-breadcrumb-link": !e.isFirst,
          "k-breadcrumb-icontext-link": e.iconClass !== void 0 && e.text,
          "k-breadcrumb-icon-link": e.iconClass !== void 0 && !e.text,
          "k-disabled": e.disabled
        }
      ),
      onClick: o,
      onKeyDown: l
    },
    e.iconClass ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-icon",
      e.iconClass
    ) }) : e.icon ? e.icon : "",
    e.text && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-breadcrumb-item-text" }, e.text)
  );
}), Js = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  ariaCurrent: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
Ct.displayName = "KendoReactBreadcrumbLink";
Ct.propTypes = Js;
const Nt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => ({
    element: i.current,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => n.current), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.rootItem ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "ol",
    {
      id: e.id,
      ref: i,
      style: e.style,
      dir: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir),
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-breadcrumb-root-item-container",
        {
          "k-disabled": e.disabled
        },
        e.className
      )
    },
    e.children
  ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "ol",
    {
      id: e.id,
      ref: i,
      style: e.style,
      dir: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir),
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-breadcrumb-container !k-flex-wrap",
        {
          "k-disabled": e.disabled
        },
        e.className
      )
    },
    e.children
  ));
}), Qs = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
Nt.displayName = "KendoReactBreadcrumbOrderedList";
Nt.propTypes = Qs;
const wt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.breadcrumbOrderedList || Nt,
    [e.breadcrumbOrderedList]
  ), o = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.breadcrumbListItem || It,
    [e.breadcrumbListItem]
  ), l = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.breadcrumbDelimiter || Et,
    [e.breadcrumbDelimiter]
  ), c = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.breadcrumbLink || Ct,
    [e.breadcrumbLink]
  ), d = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      i.current && i.current.focus();
    },
    [i]
  ), u = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.disabled || !1,
    [e.disabled]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => ({
    element: i.current,
    focus: d,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => n.current);
  const m = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir), h = (f) => {
    n.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(e.onItemSelect, f, f.target, { id: f.target.id });
  }, p = (f) => {
    n.current && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(e.onKeyDown, f, f.target, { id: f.target.id });
  }, v = e.valueField || Te.valueField, g = e.iconField || Te.iconField, y = e.iconClassField || Te.iconClassField, I = e.textField || Te.textField, N = e.size || "medium";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "nav",
    {
      "aria-label": e.ariaLabel,
      id: e.id,
      style: e.style,
      ref: i,
      dir: m,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-breadcrumb k-breadcrumb-wrap",
        {
          "k-rtl": m === "rtl",
          "k-disabled": u,
          "k-breadcrumb-md": !e.size,
          [`k-breadcrumb-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[N] || N}`]: N
        },
        e.className
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(a, { rootItem: !0 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.data.map((f, R, b) => {
      const S = f[v];
      if (R === 0)
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          o,
          {
            key: S,
            isFirstItem: !0,
            isLastItem: b.length - 1 === R
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            c,
            {
              isLast: b.length - 1 === R,
              isFirst: !0,
              id: String(S),
              icon: f[g] || void 0,
              iconClass: f[y] ? String(f[y]) : void 0,
              text: f[I] ? String(f[I]) : void 0,
              disabled: f.disabled || !1,
              onItemSelect: h,
              onKeyDown: p,
              ...e
            }
          )
        );
    }))),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(a, { rootItem: !1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.data.map((f, R, b) => {
      const S = f[v];
      if (R !== 0)
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          o,
          {
            key: S,
            isFirstItem: !1,
            isLastItem: b.length - 1 === R
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, { dir: m }),
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            c,
            {
              isLast: b.length - 1 === R,
              isFirst: !1,
              id: String(S),
              icon: f[g] || void 0,
              iconClass: f[y] ? String(f[y]) : void 0,
              text: f[I] ? String(f[I]) : void 0,
              disabled: f.disabled || !1,
              onItemSelect: h,
              onKeyDown: p,
              ...e
            }
          )
        );
    })))
  );
}), ei = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  breadcrumbOrderedList: prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,
  breadcrumbListItem: prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,
  breadcrumbDelimiter: prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,
  breadcrumbLink: prop_types__WEBPACK_IMPORTED_MODULE_1__.elementType,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
    iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
  })),
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["ltr", "rtl"]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  valueField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  iconField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  iconClassField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onItemSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
}, Te = {
  valueField: "id",
  textField: "text",
  iconField: "icon",
  iconClassField: "iconClass"
};
wt.displayName = "KendoReactBreadcrumb";
wt.propTypes = ei;
wt.defaultProps = Te;
const at = (e) => {
  const s = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), n = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((i) => {
    e.onClick && e.onClick.call(void 0, {
      syntheticEvent: i,
      item: e.item,
      title: e.title
    });
  }, [e.item, e.title, e.onClick]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    s.current && e.focused && s.current.focus();
  }, [e.focused]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      style: e.style,
      tabIndex: e.tabIndex,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-actionsheet-item",
        "k-cursor-pointer",
        e.disabled && "k-disabled",
        e.className
      ),
      ref: s,
      role: "button",
      "aria-disabled": e.disabled,
      onClick: n
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-actionsheet-action" }, e.icon && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-icon-wrap" }, e.icon), (e.title || e.description) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-actionsheet-item-text" }, e.title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-actionsheet-item-title" }, e.title), e.description && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-actionsheet-item-description" }, e.description)))
  );
};
at.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["top", "bottom"]),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const ot = "ActionSheetHeader", St = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-actionsheet-titlebar",
      e.className
    )
  },
  e.children
);
St.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
St.displayName = ot;
St.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
const Kn = "ActionSheetFooter", xt = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-actionsheet-footer",
      e.className
    )
  },
  e.children
);
xt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
xt.displayName = Kn;
xt.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
const Hn = "ActionSheetContent", Tt = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-actionsheet-content",
      e.className
    )
  },
  e.children
);
Tt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
Tt.displayName = Hn;
Tt.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
class Rt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /** @hidden */
  constructor(s) {
    super(s), this.actionSheetRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.actionSheetTitleClass = "k-actionsheet-title", this.ariaLabeledBy = this.actionSheetTitleClass + 1, this.animationDuration = 300, this.bottomPosition = { bottom: "0", width: "100%" }, this.handleKeyDown = (n) => {
      this.props.navigatable && this.navigation.triggerKeyboardEvent(n);
    }, this.onTab = (n, i, a) => {
      a.preventDefault(), a.shiftKey ? i.focusPrevious(n) : i.focusNext(n);
    }, this.handleOverlayClick = (n) => {
      this.props.onOverlayClick && this.props.onOverlayClick.call(void 0, n), this.props.onClose && this.props.onClose.call(void 0, n), this.props.animation || this.hideActionSheet();
    }, this.handleItemClick = (n) => {
      this.props.onItemClick && this.props.onItemClick.call(void 0, n), this.props.onItemSelect && this.props.onItemSelect.call(void 0, n), this.props.animation || this.hideActionSheet();
    }, this.onEnter = (n, i, a) => {
      if (n.ariaDisabled)
        return;
      const o = n.className && n.className.indexOf ? n.className.indexOf("k-actionsheet-item") !== -1 : !1, l = i.elements.filter((c) => c.className.indexOf("k-actionsheet-item") !== -1);
      if (o && this.props.onItemClick) {
        a.preventDefault();
        const c = this.props.items[l.indexOf(n)];
        this.props.onItemClick.call(void 0, {
          syntheticEvent: a,
          item: c,
          title: c && c.title
        });
      }
      if (o && this.props.onItemSelect) {
        a.preventDefault();
        const c = this.props.items[l.indexOf(n)];
        this.props.onItemSelect.call(void 0, {
          syntheticEvent: a,
          item: c,
          title: c && c.title
        });
      }
      this.props.animation || this.hideActionSheet();
    }, this.onEscape = (n, i, a) => {
      this.props.onOverlayClick && (a.preventDefault(), this.props.onOverlayClick.call(void 0, a)), this.props.onClose && (a.preventDefault(), this.props.onClose.call(void 0, a)), this.props.animation || this.hideActionSheet();
    }, this.hideActionSheet = () => {
      this.setState({ show: !1 });
    }, this.children = (n) => {
      const i = {};
      return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(n, (a) => {
        a && (i[a.type.displayName] = a);
      }), i;
    }, this.state = {
      show: !1,
      slide: !1
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  }
  /** @hidden */
  componentDidMount() {
    this.props.expand && !this.state.show && this.setState({ show: !0 });
  }
  /** @hidden */
  componentDidUpdate(s, n) {
    const i = this.actionSheetRef.current;
    if (this.props.expand && !this.state.show && this.setState({ show: !0 }), this.props.expand && this.state.show && !this.state.slide && this.setState({ slide: !0 }), !this.props.expand && this.state.show && this.state.slide && this.setState({ slide: !1 }), n !== this.state && this.state.slide && i && !this.props.className && (i.style.setProperty("--kendo-actionsheet-height", "auto"), i.style.setProperty("--kendo-actionsheet-max-height", "none")), i && this.props.navigatable) {
      const o = [
        ".k-actionsheet-item",
        ...[
          ".k-actionsheet-footer",
          ".k-actionsheet-content",
          ".k-actionsheet-titlebar"
        ].map((l) => _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.FOCUSABLE_ELEMENTS.concat(this.props.navigatableElements).map(
          (c) => `${l} ${c}`
        )).flat()
      ];
      this.navigation = new _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Navigation({
        tabIndex: this.props.tabIndex || 0,
        root: this.actionSheetRef,
        rovingTabIndex: !1,
        selectors: o,
        keyboardEvents: {
          keydown: {
            Tab: this.onTab,
            Enter: this.onEnter,
            Escape: this.onEscape
          }
        }
      }), this.navigation.focusElement(this.navigation.first, null);
    }
  }
  /** @hidden */
  render() {
    const {
      title: s,
      subTitle: n,
      animationStyles: i,
      animation: a,
      expand: o,
      tabIndex: l,
      items: c
    } = this.props, d = c == null ? void 0 : c.filter((g) => !g.group || g.group === "top"), u = c == null ? void 0 : c.filter((g) => g.group === "bottom"), m = d && d.length > 0 && u && u.length > 0, h = this.children(this.props.children), p = this.props.animationDuration || this.animationDuration, v = this.state.slide && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-actionsheet", this.props.className, {
          "k-actionsheet-bottom": !this.props.className
        }),
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !1,
        "aria-labelledby": this.ariaLabeledBy,
        ref: this.actionSheetRef,
        onKeyDown: this.handleKeyDown
      },
      h[ot] && !s && !n && h[ot],
      (s || n) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar k-text-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.actionSheetTitleClass, id: this.ariaLabeledBy }, s && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, s), n && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-subtitle" }, n)))),
      h[Hn] || /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-content" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-ul", role: "group" }, d && d.map((g, y) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        at,
        {
          ...g,
          id: y,
          key: y,
          item: g,
          tabIndex: l || 0,
          onClick: this.handleItemClick
        }
      ))), m && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: "k-hr" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-ul", role: "group" }, u && u.map((g, y) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        at,
        {
          ...g,
          id: y + ((d == null ? void 0 : d.length) || 0),
          key: y,
          item: g,
          tabIndex: l || 0,
          onClick: this.handleItemClick
        }
      )))),
      h[Kn]
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, o || this.state.show ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "k-overlay",
        onClick: this.handleOverlayClick
      }
    ), a ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_6__/* .Animation */ .X5,
      {
        transitionName: this.state.slide ? "slide-up" : "slide-down",
        onExited: this.hideActionSheet,
        transitionEnterDuration: p,
        transitionExitDuration: p,
        animationEnteringStyle: i || this.bottomPosition,
        animationEnteredStyle: i || this.bottomPosition,
        animationExitingStyle: i || this.bottomPosition,
        exit: !0,
        enter: !0,
        appear: !1
      },
      v
    ) : v)) : null);
  }
}
Rt.displayName = "KendoReactActionSheet";
Rt.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  subTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  navigatable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  navigatableElements: prop_types__WEBPACK_IMPORTED_MODULE_1__.array
};
Rt.defaultProps = {
  navigatable: !0,
  navigatableElements: []
};
const Dt = (e) => {
  const { title: n, subtitle: i, actions: a, images: o, description: l } = e.eventData, [c, d] = react__WEBPACK_IMPORTED_MODULE_0__.useState(e.eventData.opened || !1), [u, m] = react__WEBPACK_IMPORTED_MODULE_0__.useState(e.eventData.opened || !!e.collapsible), h = (g) => {
    if (d(!c), e.onChange) {
      const y = {
        syntheticEvent: g,
        nativeEvent: g.nativeEvent,
        eventData: e.eventData
      };
      e.onChange.call(void 0, y);
    }
  }, p = (g) => {
    if (e.onActionClick) {
      const y = {
        syntheticEvent: g,
        nativeEvent: g.nativeEvent,
        eventData: e.eventData
      };
      e.onActionClick.call(void 0, y);
    }
  }, v = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Cn, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-card-description" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, l), o && o.map((g, y) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(wn, { key: y, src: g.src })))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nn, null, a && a.map((g, y) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "a",
    {
      key: y,
      href: g.url,
      className: "k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary",
      onClick: p
    },
    g.text
  ))));
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      "data-testid": "k-timeline-card",
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-timeline-card",
        { "k-collapsed": e.collapsible && u }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _e,
      {
        "aria-live": "polite",
        "aria-describedby": e.id,
        "aria-atomic": "true",
        tabIndex: e.tabindex,
        role: e.horizontal ? "tabpanel" : "button",
        "aria-expanded": e.collapsible && u,
        className: "k-card-with-callout",
        onClick: (g) => h(g)
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "span",
        {
          style: e.calloutStyle,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-timeline-card-callout",
            "k-card-callout",
            { "k-callout-n": e.horizontal },
            { "k-callout-e": e.alternated && !e.horizontal },
            { "k-callout-w": !e.alternated && !e.horizontal }
          )
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-card-inner" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(In, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(En, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-event-title" }, n), e.collapsible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "span",
        {
          className: "k-event-collapse k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronRightIcon })
      )), i && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sn, null, i)), e.collapsible ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_6__/* .Reveal */ .gN,
        {
          transitionEnterDuration: e.transitionDuration || 400,
          transitionExitDuration: e.transitionDuration || 400,
          onBeforeEnter: () => m(!1),
          onAfterExited: () => m(!0)
        },
        c ? v() : null
      ) : v())
    )
  );
};
Dt.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onActionClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
const fi = (e) => e.sort((n, i) => n.date.getTime() - i.date.getTime()), _n = (e) => {
  let s;
  return e.reduce((i, a) => (s !== a.date.getFullYear() ? (s = a.date.getFullYear(), i.push({ yearFlag: s }, a)) : i.push(a), i), []);
}, Wn = (e) => {
  const i = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useInternationalization)(), [a, o] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [l, c] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!0), [d, u] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [m, h] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), [p, v] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [g, y] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), [I, N] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), [f, R] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1), [b, S] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [w, O] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [A, D] = react__WEBPACK_IMPORTED_MODULE_0__.useState([0, 0, 0]), [L, B] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), [G, ee] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1), $ = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), x = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), M = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), { eventsData: j, dateFormat: Y, navigatable: Z, onActionClick: re } = e, de = p ? `${p}%` : "150px", se = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Navigation({
    tabIndex: 0,
    root: $,
    selectors: [".k-timeline-scrollable-wrap"]
  }));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    $.current && e.navigatable && (setTimeout(() => {
      const E = se.current.first;
      E && E.setAttribute("tabindex", String(0));
    }, 0), se.current.keyboardEvents = {
      keydown: {
        ArrowRight: ue,
        ArrowLeft: H,
        End: F,
        Home: _
      }
    });
  }, [e.navigatable, f, g]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    se.current.update();
  });
  const Ie = (E) => {
    Z && se.current && se.current.triggerKeyboardEvent(E);
  };
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var z;
    const E = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(Me), T = x.current, P = ((z = $ == null ? void 0 : $.current) == null ? void 0 : z.offsetWidth) || 0;
    return E && T && E.observe(T), V(), Me(), D([P, 0, -P]), () => {
      E && E.disconnect();
    };
  }, []), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const E = x.current, T = E && E.children[f];
    if (T) {
      const P = T.offsetWidth, z = !(m >= 0);
      if (o(z), w) {
        const U = w.length * P > g * P * ((m * -1 + 100) / 100);
        c(U);
      }
      (E == null ? void 0 : E.offsetWidth) * -m / 100 >= E.children.length * P && (V(), Me(), h((T.offsetLeft - T.offsetWidth) / (g * T.offsetWidth) * 100 * -1)), Ot(T);
    }
  }, [g, p, f]);
  const ue = (E, T, P) => {
    if (x.current) {
      const z = x.current.children[f + 1], U = z && z.classList.contains("k-timeline-flag-wrap") ? f + 2 : f + 1;
      if (w && w.length <= U)
        return;
      g + I <= U && Ee(), Ne(U, P);
    }
  }, H = (E, T, P) => {
    if (x.current) {
      const z = x.current && x.current.children[f - 1], U = z && z.classList.contains("k-timeline-flag-wrap") ? f - 2 : f - 1;
      if (U <= 0)
        return;
      U < I && me(), Ne(U, P);
    }
  }, _ = (E, T, P) => {
    if (x.current) {
      if (f <= 1)
        return;
      const z = 1;
      he(!0, z, 0, 0), Ne(z, P);
    }
  }, F = (E, T, P) => {
    if (x.current) {
      const z = x.current && x.current.children.length - 1;
      if (z <= f)
        return;
      const U = Math.floor(z / g), we = U * -100, je = U * g;
      he(!0, z, je, we), Ne(z, P);
    }
  }, V = () => {
    const E = _n(j);
    O(E), S([E[f - 1], E[f], E[f + 1]]);
  }, me = () => {
    var T;
    if (x.current && w) {
      const P = I - g, z = I - 1, U = w[z] && ((T = w[z]) != null && T.yearFlag) ? z - 1 : z, we = m + 100 > 0 ? 0 : m + 100;
      he(!1, U, P, we);
    }
  }, Ee = () => {
    if (x.current && w) {
      const T = I + g, P = w[T] && w[T].yearFlag ? T + 1 : T, z = m - 100;
      he(!0, P, T, z);
    }
  }, he = (E, T, P, z) => {
    ne(E, T), Me(), N(P), h(z), R(T);
  }, ne = (E, T) => {
    if (b && w) {
      const P = Ce(E, G), z = Object.assign([], b, { [P]: w[T] });
      S(z), ee(P), B(E ? -100 : 100), setTimeout(() => {
        var Mt;
        const U = (Mt = $.current) == null ? void 0 : Mt.offsetWidth, we = Object.assign([], A, {
          [P]: 0,
          [Ce(!0, P)]: U,
          [Ce(!1, P)]: U && -U
        }), je = Object.assign([], z, {
          [Ce(!0, P)]: {},
          [Ce(!1, P)]: {}
        });
        S(je), D(we), B(0);
      }, e.transitionDuration || 300);
    }
  }, Ce = (E, T) => {
    const P = E ? T + 1 : T - 1;
    return b ? P < 0 ? b.length - 1 : P % b.length : 0;
  }, Ot = (E) => {
    var P;
    const T = (f - I) * E.offsetWidth + E.offsetWidth / 2 + (((P = M.current) == null ? void 0 : P.offsetWidth) || 0);
    u(T);
  }, Ne = (E, T) => {
    T.preventDefault(), E > f ? ne(!0, E) : E < f && ne(!1, E), R(E);
  }, Me = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const E = x.current, T = E && E.children[f];
    if (E instanceof HTMLElement && T) {
      const P = Math.round(E.offsetWidth / 150);
      Ot(T), v(100 / P), y(P);
    }
  }, []), Vn = () => ({
    transitionDuration: "300ms"
  }), Pt = (E) => ({
    transform: `translateX(${E}%)`,
    transformOrigin: "left top"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-timeline-track-wrap", ref: $, onKeyDown: Ie }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      ref: M,
      "aria-hidden": "true",
      onClick: () => a && me(),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-timeline-arrow",
        "k-timeline-arrow-left",
        "k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button",
        { "k-disabled": !a }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltLeftIcon })
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      "aria-hidden": "true",
      onClick: () => l && Ee(),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-timeline-arrow",
        "k-timeline-arrow-right",
        "k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button",
        { "k-disabled": !l }
      )
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltRightIcon })
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-timeline-track" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "ul",
    {
      ref: x,
      className: "k-timeline-scrollable-wrap",
      role: "tablist",
      tabIndex: 0,
      style: { transform: `translateX(${m}%)` }
    },
    w && w.map((E, T) => E.yearFlag ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        role: "none",
        className: "k-timeline-track-item k-timeline-flag-wrap",
        style: { flex: `1 0 ${de}` },
        key: T
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-timeline-flag" }, E.yearFlag)
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        role: "tab",
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-timeline-track-item",
          { "k-focus": T === f }
        ),
        "aria-selected": T === f,
        style: { flex: `1 0 ${de}` },
        key: T
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-timeline-date-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-timeline-date" }, i.formatDate(E.date, Y))),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "span",
        {
          onClick: (P) => Ne(T, P),
          className: "k-timeline-circle"
        }
      )
    ))
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-timeline-events-list" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "ul",
    {
      className: "k-timeline-scrollable-wrap",
      style: L === 0 ? { ...Pt(L) } : { ...Pt(L), ...Vn() }
    },
    b && b.map(
      (E, T) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "li",
        {
          key: T,
          className: "k-timeline-event",
          style: { transform: `translate3d(${A[T]}px, 0px, 0px)` }
        },
        E && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Dt,
          {
            tabindex: A[T] === 0 ? 0 : -1,
            eventData: E,
            onActionClick: re,
            horizontal: !0,
            collapsible: !1,
            calloutStyle: { left: `${d}px` }
          }
        )
      )
    )
  )));
};
Wn.propTypes = {
  onActionClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
const $n = (e) => {
  const s = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useInternationalization)(), [n, i] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), {
    collapsibleEvents: a,
    transitionDuration: o,
    eventsData: l,
    dateFormat: c,
    alterMode: d,
    navigatable: u,
    onChange: m,
    onActionClick: h
  } = e, p = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), v = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Navigation({
    tabIndex: 0,
    root: p,
    selectors: [".k-card-vertical"]
  }));
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    p.current && e.navigatable && (setTimeout(() => {
      const f = v.current.first;
      f && f.setAttribute("tabindex", String(0));
    }, 0), v.current.keyboardEvents = {
      keydown: {
        Space: y,
        Enter: y
      }
    });
  }, [e.navigatable]), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    i(_n(l));
  }, []), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    v.current.update();
  });
  const g = (f) => {
    u && v.current && v.current.triggerKeyboardEvent(f);
  }, y = (f, R, b) => {
    b.preventDefault();
    const S = f.querySelector(".k-card-title .k-event-collapse");
    S && S.click();
  };
  let I = 0;
  const N = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { ref: p, onKeyDown: g }, n && n.map((f, R) => {
    const b = (R + I) % 2 === 0;
    f.yearFlag && (I += 1);
    const S = N + "-" + R, w = d ? { "k-reverse": b } : void 0;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: R }, f.yearFlag ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "k-timeline-flag-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-timeline-flag" }, f.yearFlag)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-timeline-event", w) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-timeline-date-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-timeline-date", id: S }, s.formatDate(f.date, c))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-timeline-circle" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Dt,
      {
        id: S,
        tabindex: u ? 0 : -1,
        eventData: f,
        alternated: d && b,
        collapsible: a,
        transitionDuration: o,
        onChange: m,
        onActionClick: h
      }
    )));
  }));
};
$n.propTypes = {
  onActionClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
const ti = (e) => {
  const s = {
    alterMode: !1,
    collapsibleEvents: !1,
    dateFormat: "MMM dd, yyyy",
    ...e
  }, {
    collapsibleEvents: n,
    transitionDuration: i,
    className: a,
    alterMode: o,
    navigatable: l,
    horizontal: c,
    events: d,
    dateFormat: u,
    onChange: m,
    onActionClick: h
  } = s, [p, v] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), g = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    g.current && v(g.current.offsetWidth);
  }, []), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: g,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-timeline",
        {
          "k-timeline-collapsible": n,
          "k-timeline-vertical": !c,
          "k-timeline-alternating": o,
          "k-timeline-horizontal": c
        },
        a
      ),
      style: { width: `${p}px` }
    },
    c ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Wn,
      {
        navigatable: l,
        eventsData: d,
        dateFormat: u,
        transitionDuration: i,
        onActionClick: h
      }
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      $n,
      {
        navigatable: l,
        eventsData: d,
        dateFormat: u,
        alterMode: o,
        collapsibleEvents: n,
        transitionDuration: i,
        onChange: m,
        onActionClick: h
      }
    )
  );
};
ti.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const ni = (e) => {
  const s = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    e.show && setTimeout(() => {
      const n = s.current && s.current.element, i = n && n.querySelector(".k-menu-item"), a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(i && i.ownerDocument);
      i && i !== a && i.focus();
    });
  }, [e.show]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__.Popup,
    {
      show: e.show,
      offset: e.offset,
      popupClass: "k-menu-popup",
      animate: !1
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      He,
      {
        vertical: !0,
        ...e,
        ref: s,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-context-menu",
          e.className
        ),
        onClose: e.onClose,
        role: "menu"
      },
      e.children
    )
  );
};
ni.displayName = "KendoReactContextMenu";
const Un = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(K);
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), [i, a] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), o = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({ element: n.current }),
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, o);
  const {
    expanded: l = !1,
    disabled: c,
    title: d,
    subtitle: u,
    onAction: m,
    expandIcon: h,
    collapseIcon: p,
    expandSVGIcon: v,
    collapseSVGIcon: g
  } = e, y = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (S) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(m, S, o(), { expanded: l });
    },
    [m, l]
  ), I = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (S) => {
      (S.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || S.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space) && (S.preventDefault(), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(m, S, o(), { expanded: l }));
    },
    [m, l]
  ), N = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    e.disabled || a(!0);
  }, [e.disabled]), f = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    e.disabled || a(!1);
  }, [e.disabled]), { onFocus: R, onBlur: b } = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useAsyncFocusBlur)({ onFocus: N, onBlur: f });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: n,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-expander",
        e.className,
        {
          "k-expanded": l,
          "k-focus": i && !c,
          "k-disabled": c
        }
      ),
      onFocus: R,
      onBlur: b,
      style: e.style,
      id: e.id,
      dir: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(n, e.dir),
      onKeyDown: c ? void 0 : I
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        role: "button",
        "aria-controls": e.ariaControls,
        "aria-expanded": l,
        "aria-disabled": c,
        tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, c),
        className: "k-expander-header",
        onClick: c ? void 0 : y
      },
      d !== void 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-expander-title" }, d) : void 0,
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-spacer" }),
      u !== void 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-expander-sub-title" }, u) : void 0,
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-expander-indicator" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
        {
          name: l ? p ? void 0 : "chevron-up" : h ? void 0 : "chevron-down",
          icon: l ? !g && !p ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronUpIcon : g : !v && !h ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.chevronDownIcon : v,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            l ? {
              [String(p)]: !!p
            } : {
              [String(h)]: !!h
            }
          )
        }
      ))
    ),
    e.children
  );
});
Un.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  collapseIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  onAction: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
Un.displayName = "KendoReactExpansionPanel";
const si = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, s) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  "div",
  {
    ref: s,
    ...e,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-expander-content-wrapper", e.className)
  },
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-expander-content" }, e.children)
));
si.displayName = "KendoReactExpansionPanelContent";
const jn = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(He);
jn.displayName = "KendoReactMenu";
const gi = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(dt);
jn.displayName = "KendoReactMenu";



/***/ }

}]);