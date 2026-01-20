"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7839],{

/***/ 57839
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionSheet: () => (/* reexport */ ActionSheet_b),
  ActionSheetContent: () => (/* reexport */ ActionSheetContent_e),
  ActionSheetFooter: () => (/* reexport */ ActionSheetFooter_e),
  ActionSheetHeader: () => (/* reexport */ ActionSheetHeader_e),
  ActionSheetItem: () => (/* reexport */ ActionSheetItem_s),
  AppBar: () => (/* reexport */ AppBar_l),
  AppBarSection: () => (/* reexport */ AppBarSection_r),
  AppBarSpacer: () => (/* reexport */ AppBarSpacer_l),
  Avatar: () => (/* reexport */ Avatar_n),
  BottomNavigation: () => (/* reexport */ BottomNavigation_b),
  BottomNavigationItem: () => (/* reexport */ BottomNavigationItem_i),
  Breadcrumb: () => (/* reexport */ Breadcrumb_f),
  BreadcrumbDelimiter: () => (/* reexport */ BreadcrumbDelimiter_m),
  BreadcrumbLink: () => (/* reexport */ BreadcrumbLink_r),
  BreadcrumbListItem: () => (/* reexport */ BreadcrumbListItem_c),
  BreadcrumbOrderedList: () => (/* reexport */ BreadcrumbOrderedList_c),
  Card: () => (/* reexport */ Card_a),
  CardActions: () => (/* reexport */ CardActions_s),
  CardBody: () => (/* reexport */ CardBody_t),
  CardFooter: () => (/* reexport */ CardFooter_a),
  CardHeader: () => (/* reexport */ CardHeader_t),
  CardImage: () => (/* reexport */ CardImage_c),
  CardSubtitle: () => (/* reexport */ CardSubtitle_a),
  CardTitle: () => (/* reexport */ CardTitle_a),
  ContextMenu: () => (/* reexport */ ContextMenu_r),
  Drawer: () => (/* reexport */ Drawer_s),
  DrawerContent: () => (/* reexport */ DrawerContent_s),
  DrawerItem: () => (/* reexport */ DrawerItem_d),
  DrawerNavigation: () => (/* reexport */ DrawerNavigation_h),
  ExpansionPanel: () => (/* reexport */ ExpansionPanel_I),
  ExpansionPanelContent: () => (/* reexport */ ExpansionPanelContent_r),
  GridLayout: () => (/* reexport */ GridLayout_r),
  GridLayoutItem: () => (/* reexport */ GridLayoutItem_s),
  Menu: () => (/* binding */ kendo_react_layout_e),
  MenuClassComponent: () => (/* reexport */ I),
  MenuItem: () => (/* reexport */ MenuItem_s),
  MenuItemArrow: () => (/* reexport */ MenuItemArrow_o),
  MenuItemInternalsList: () => (/* reexport */ MenuItemInternal_g),
  MenuItemLink: () => (/* reexport */ MenuItemLink_p),
  PanelBar: () => (/* reexport */ PanelBar_f),
  PanelBarItem: () => (/* reexport */ PanelBarItem_b),
  PanelBarUtils: () => (/* reexport */ util_x),
  Splitter: () => (/* reexport */ Splitter_y),
  SplitterBar: () => (/* reexport */ k),
  SplitterPane: () => (/* reexport */ SplitterPane_f),
  StackLayout: () => (/* reexport */ StackLayout_c),
  Step: () => (/* reexport */ Step_g),
  Stepper: () => (/* reexport */ Stepper_E),
  TabStrip: () => (/* binding */ kendo_react_layout_i),
  TabStripClassComponent: () => (/* reexport */ TabStrip_p),
  TabStripContent: () => (/* reexport */ TabStripContent_h),
  TabStripNavigation: () => (/* reexport */ N),
  TabStripNavigationItem: () => (/* reexport */ TabStripNavigationItem_r),
  TabStripTab: () => (/* reexport */ TabStripTab_t),
  TileLayout: () => (/* reexport */ TileLayout_w),
  Timeline: () => (/* reexport */ Timeline_T),
  addYearsFlags: () => (/* reexport */ utils_d),
  contentDisplayName: () => (/* reexport */ ActionSheetContent_a),
  downArrowName: () => (/* reexport */ MenuItemArrow_l),
  flatChildren: () => (/* reexport */ v),
  flatVisibleChildren: () => (/* reexport */ y),
  flatVisibleItems: () => (/* reexport */ util_I),
  footerDisplayName: () => (/* reexport */ ActionSheetFooter_a),
  getFirstId: () => (/* reexport */ q),
  getInitialState: () => (/* reexport */ util_b),
  headerDisplayName: () => (/* reexport */ ActionSheetHeader_c),
  isArrayEqual: () => (/* reexport */ $),
  isPresent: () => (/* reexport */ F),
  leftArrowName: () => (/* reexport */ d),
  renderChildren: () => (/* reexport */ C),
  rightArrowName: () => (/* reexport */ MenuItemArrow_p),
  sortEventList: () => (/* reexport */ utils_a)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(29166);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/itemsIdsUtils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const u = "", c = "0", t = "_";
function itemsIdsUtils_s(n, r) {
  if (i(n))
    return r[Number(n)];
  {
    const e = r[Number(f(n))];
    return e.items ? itemsIdsUtils_s(g(n), e.items) : void 0;
  }
}
function f(n) {
  return o(n) ? n : n.split(t)[0];
}
function g(n) {
  if (o(n))
    return n;
  {
    const r = n.indexOf(t);
    return n.substring(r + 1);
  }
}
function b(n) {
  return itemsIdsUtils_l("0", n);
}
function x(n, r) {
  return r.indexOf(n) === 0 ? r.length === n.length || r.charAt(n.length) === t : !1;
}
function itemsIdsUtils_l(n, r) {
  return r ? r + t + n : n;
}
function O(n) {
  const r = n.lastIndexOf(t);
  return r < 0 ? u : n.substring(0, r);
}
function o(n) {
  return n === u || n.indexOf(t) < 0;
}
function i(n) {
  return n !== u && n.indexOf(t) < 0;
}
function itemsIdsUtils_E(n) {
  return S(n) === 1;
}
function p(n) {
  return itemsIdsUtils_a(n) === c;
}
function itemsIdsUtils_a(n) {
  const r = n.lastIndexOf(t);
  return r < 0 ? n : n.substring(r + 1);
}
function itemsIdsUtils_L(n, r, e) {
  return i(r) ? n ? Number(r) < e - 1 ? (Number(r) + 1).toString() : "0" : Number(r) > 0 ? (Number(r) - 1).toString() : (e - 1).toString() : r;
}
function S(n) {
  return n.split(t).length - 1;
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/components/MenuItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const r = class r extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
r.propTypes = {
  text: prop_types_index_js_.string,
  url: prop_types_index_js_.string,
  icon: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  cssClass: prop_types_index_js_.string,
  cssStyle: prop_types_index_js_.object,
  render: prop_types_index_js_.any,
  linkRender: prop_types_index_js_.any,
  contentRender: prop_types_index_js_.any,
  data: prop_types_index_js_.any
};
let MenuItem_s = r;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/prepareInputItemsForInternalWork.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



function prepareInputItemsForInternalWork_b(t, n) {
  if (t && t.length > 0)
    return {
      items: prepareInputItemsForInternalWork_c(t),
      inputItems: t
    };
  if (prepareInputItemsForInternalWork_s(n).length > 0) {
    const e = h(prepareInputItemsForInternalWork_s(n));
    return { items: prepareInputItemsForInternalWork_c(e), inputItems: e };
  } else
    return { items: [], inputItems: [] };
}
function prepareInputItemsForInternalWork_g(t, n) {
  let e = {};
  const { text: i, url: o, icon: r, svgIcon: d, disabled: l, cssClass: u, cssStyle: f, render: m, linkRender: p, contentRender: I, data: a } = t || n.props;
  return i !== void 0 && (e.text = i), o !== void 0 && (e.url = o), r !== void 0 && (e.icon = r), d !== void 0 && (e.svgIcon = d), l !== void 0 && (e.disabled = l), u !== void 0 && (e.cssClass = u), f !== void 0 && (e.cssStyle = f), m !== void 0 && (e.render = m), p !== void 0 && (e.linkRender = p), I !== void 0 && (e.contentRender = I), a !== void 0 && (e.data = a), e;
}
function prepareInputItemsForInternalWork_s(t) {
  return index_js_.Children.toArray(t).filter((n) => n && n.type === MenuItem_s);
}
function h(t) {
  const n = [];
  for (let e = 0; e < t.length; e++) {
    const i = t[e], o = prepareInputItemsForInternalWork_g(void 0, i), r = h(prepareInputItemsForInternalWork_s(i.props.children));
    r.length > 0 && (o.items = r), n.push(o);
  }
  return n;
}
function prepareInputItemsForInternalWork_c(t, n) {
  const e = [];
  for (let i = 0; i < t.length; i++) {
    const o = t[i], r = prepareInputItemsForInternalWork_g(o);
    r.id = itemsIdsUtils_l(i.toString(), n), r.isLastFromSiblings = i === t.length - 1, r.items = prepareInputItemsForInternalWork_x(o, r), e.push(r);
  }
  return e;
}
function prepareInputItemsForInternalWork_x(t, n) {
  return t.contentRender ? [{
    contentParentItemId: n.id,
    id: itemsIdsUtils_l(c, n.id),
    isLastFromSiblings: !0,
    contentRender: t.contentRender,
    items: []
  }] : t.items ? prepareInputItemsForInternalWork_c(t.items, n.id) : [];
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/getNewItemIdUponKeyboardNavigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const Q = /\S/;
function V(a, n, G, S, g, s) {
  const H = l();
  switch (G) {
    case index_mjs_.Keys.left:
      return x();
    case index_mjs_.Keys.right:
      return B();
    case index_mjs_.Keys.up:
      return A();
    case index_mjs_.Keys.down:
      return z();
    case index_mjs_.Keys.enter:
    case index_mjs_.Keys.space:
      return R();
    case index_mjs_.Keys.home:
      return W();
    case index_mjs_.Keys.end:
      return Z();
    case index_mjs_.Keys.esc:
      return _();
    default:
      return X() ? M() : n;
  }
  function x() {
    return g ? s ? F() : U() : s ? C() : K();
  }
  function B() {
    return g ? s ? U() : F() : s ? K() : C();
  }
  function z() {
    return g ? u() : i(n) ? c() : u();
  }
  function A() {
    return g ? h() : i(n) ? E() : h();
  }
  function R() {
    return H.disabled ? n : d() ? b(n) : f(n);
  }
  function W() {
    return y()[0].id;
  }
  function Z() {
    const e = y();
    return e[e.length - 1].id;
  }
  function _() {
    return i(n) ? n : O(n);
  }
  function M() {
    const e = S.toLowerCase(), t = y(), o = Number(itemsIdsUtils_a(n)), p = t.slice(o + 1).concat(t.slice(0, o + 1)).find((j) => (j.text || "").toLowerCase().startsWith(e));
    return p ? p.id : n;
  }
  function K() {
    return i(n) ? h() : itemsIdsUtils_E(n) ? c(h(f(n))) : O(n);
  }
  function U() {
    return i(n) ? E() : O(n);
  }
  function C() {
    return i(n) ? u() : c(
      d() ? n : u(f(n))
    );
  }
  function F() {
    return c(
      i(n) || d() ? n : u(f(n))
    );
  }
  function c(e) {
    return v(!0, e);
  }
  function E(e) {
    return v(!1, e);
  }
  function X() {
    return S.length === 1 && Q.test(S);
  }
  function l(e, t) {
    return e === void 0 && (e = n), t === void 0 && (t = a), itemsIdsUtils_s(e, t);
  }
  function d(e) {
    return l(e).items.length > 0;
  }
  function h(e) {
    return L(!1, e);
  }
  function u(e) {
    return L(!0, e);
  }
  function $(e) {
    const t = l(e).items;
    return t[t.length - 1].id;
  }
  function y() {
    return i(n) ? a : l(O(n), a).items;
  }
  function v(e, t) {
    t === void 0 && (t = n);
    const o = l(t);
    return d(t) && !o.disabled ? e ? b(t) : $(t) : t;
  }
  function L(e, t) {
    if (t === void 0 && (t = n), i(t))
      return itemsIdsUtils_L(e, t, a.length);
    {
      const o = O(t), w = itemsIdsUtils_a(t), p = l(o).items.length;
      return itemsIdsUtils_l(itemsIdsUtils_L(e, w, p), o);
    }
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/hoverDelay.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
function n(e) {
  return e.hoverOpenDelay !== void 0 ? e.hoverOpenDelay : e.openOnClick ? 0 : 100;
}
function l(e) {
  return e.hoverCloseDelay !== void 0 ? e.hoverCloseDelay : 100;
}


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/index.mjs)
var kendo_react_popup_index_mjs_ = __webpack_require__(55491);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/consts.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const consts_o = {
  vertical: "top",
  horizontal: "left"
}, consts_t = {
  vertical: "top",
  horizontal: "right"
}, consts_i = {
  vertical: "flip",
  horizontal: "fit"
}, consts_l = {
  vertical: "fit",
  horizontal: "flip"
}, consts_n = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "right"
    },
    popupAlign: consts_t,
    collision: consts_i
  },
  leftward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "left"
    },
    popupAlign: consts_t,
    collision: consts_l
  }
}, consts_r = {
  downward: {
    anchorAlign: {
      vertical: "bottom",
      horizontal: "left"
    },
    popupAlign: consts_o,
    collision: consts_i
  },
  rightward: {
    anchorAlign: {
      vertical: "top",
      horizontal: "right"
    },
    popupAlign: consts_o,
    collision: consts_l
  }
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/misc.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


function a(r, n, t) {
  const e = w(r, n, t);
  return t ? e === "downward" ? consts_n.downward : consts_n.leftward : e === "downward" ? consts_r.downward : consts_r.rightward;
}
function w(r, n, t) {
  return i(r) ? n ? t ? "leftward" : "rightward" : "downward" : t ? "leftward" : "rightward";
}
function misc_f(r) {
  return r ? "rtl" : "ltr";
}
function P(r, n) {
  return `${r}_${n}`;
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/components/MenuItemLink.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const MenuItemLink_s = class s extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    return this.props.url ? /* @__PURE__ */ index_js_.createElement(
      "a",
      {
        className: this.getMenuItemClassName(),
        role: "presentation",
        href: this.props.url,
        tabIndex: -1
      },
      this.props.children
    ) : /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        id: this.props.id,
        className: (0,index_mjs_.classNames)(this.getMenuItemClassName(), this.props.className),
        style: this.props.style,
        role: "presentation"
      },
      this.props.children
    );
  }
  getMenuItemClassName() {
    return (0,index_mjs_.classNames)(
      "k-link",
      "k-menu-link",
      {
        "k-active": this.props.opened
      }
    );
  }
};
MenuItemLink_s.propTypes = {
  opened: prop_types_index_js_.bool,
  url: prop_types_index_js_.string
};
let MenuItemLink_p = MenuItemLink_s;


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(72111);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/components/MenuItemArrow.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const MenuItemArrow_l = "caret-alt-down", MenuItemArrow_p = "caret-alt-right", d = "caret-alt-left", MenuItemArrow_r = class r extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { "aria-hidden": !0, ...this.getIcon() });
  }
  getIcon() {
    switch (w(
      this.props.itemId,
      this.props.verticalMenu === !0,
      this.props.dir === "rtl"
    )) {
      case "downward":
        return { name: MenuItemArrow_l, icon: index_es_js_.caretAltDownIcon };
      case "rightward":
        return { name: MenuItemArrow_p, icon: index_es_js_.caretAltRightIcon };
      case "leftward":
        return { name: d, icon: index_es_js_.caretAltLeftIcon };
      default:
        return {};
    }
  }
};
MenuItemArrow_r.propTypes = {
  itemId: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  verticalMenu: prop_types_index_js_.bool
};
let MenuItemArrow_o = MenuItemArrow_r;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/components/MenuItemInternal.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







class MenuItemInternal_g extends index_js_.Component {
  constructor() {
    super(...arguments), this.onMouseOver = (e) => {
      this.props.onMouseOver(this.props.parentItemId), e.stopPropagation();
    }, this.onMouseLeave = (e) => {
      this.props.onMouseLeave(this.props.parentItemId), e.stopPropagation();
    };
  }
  render() {
    const e = this.props.parentItemId;
    return /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        className: this.props.className,
        role: this.props.role ? this.props.role : e !== void 0 ? "menu" : "menubar",
        id: e !== void 0 ? P(this.props.menuGuid, e) : void 0,
        onMouseOver: e !== void 0 ? this.onMouseOver : void 0,
        onMouseLeave: e !== void 0 ? this.onMouseLeave : void 0,
        "aria-orientation": this.props["aria-orientation"]
      },
      this.renderChildItems()
    );
  }
  renderChildItems() {
    return this.props.items.length > 0 ? this.props.items.map((e, t) => /* @__PURE__ */ index_js_.createElement(
      MenuItemInternal_f,
      {
        item: e,
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
        key: t
      }
    )) : null;
  }
}
class MenuItemInternal_f extends index_js_.Component {
  constructor(e) {
    super(e), this.isFirstRender = !0, this.onMouseOver = (t) => {
      this.props.onMouseOver(this.props.item.id), t.stopPropagation();
    }, this.onMouseLeave = (t) => {
      this.props.onMouseLeave(this.props.item.id), t.stopPropagation();
    }, this.state = { opened: !1 };
  }
  componentDidMount() {
    const e = this.props.focusedItemId, t = this.props.item.id;
    e && e === t && this.itemElement.focus(), this.isFirstRender = !1;
  }
  componentDidUpdate(e) {
    const t = this.props.focusedItemId, o = this.props.item.id;
    if (t) {
      const i = (0,index_mjs_.getActiveElement)(document);
      e.focusedItemId !== t && t === o && !this.itemElement.contains(i) && this.itemElement.focus();
    }
  }
  render() {
    const e = this.props.item, t = e.id, o = P(this.props.menuGuid, t);
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
      "li",
      {
        id: P(this.props.menuGuid, t),
        className: this.getMenuItemClassName(e),
        style: e.cssStyle,
        tabIndex: t === this.props.tabbableItemId ? 0 : -1,
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: (i) => this.props.onMouseDown(i),
        onBlur: (i) => this.props.onBlur(t, i),
        onFocus: () => this.props.onFocus(t),
        onClick: (i) => this.props.onClick(i, t),
        role: "menuitem",
        "aria-disabled": e.disabled ? !0 : void 0,
        "aria-haspopup": e.items.length > 0 ? !0 : void 0,
        "aria-expanded": e.items.length > 0 ? this.Opened : void 0,
        "aria-label": e.text,
        "aria-owns": this.Opened ? o : void 0,
        ref: (i) => this.itemElement = i,
        key: "0"
      },
      this.contentRender ? this.renderContent() : this.renderMenuItemLink()
    ), this.renderPopupIfOpened());
  }
  renderContent() {
    const e = this.props.item.contentParentItemId;
    return /* @__PURE__ */ index_js_.createElement("div", { className: "k-content", role: "presentation" }, /* @__PURE__ */ index_js_.createElement(this.contentRender, { item: this.props.onOriginalItemNeeded(e), itemId: e }));
  }
  renderMenuItemLink() {
    const e = this.props.item;
    if (this.linkRender)
      return /* @__PURE__ */ index_js_.createElement(
        this.linkRender,
        {
          item: this.props.onOriginalItemNeeded(e.id),
          itemId: e.id,
          opened: this.Opened,
          dir: misc_f(this.props.isDirectionRightToLeft)
        }
      );
    {
      const t = this.itemRender ? /* @__PURE__ */ index_js_.createElement(this.itemRender, { item: this.props.onOriginalItemNeeded(e.id), itemId: e.id, key: "1" }) : /* @__PURE__ */ index_js_.createElement("span", { className: "k-menu-link-text" }, e.text);
      return /* @__PURE__ */ index_js_.createElement(MenuItemLink_p, { url: e.url, opened: this.Opened }, this.renderMenuIconIfApplicable(), t, this.renderArrowIfApplicable());
    }
  }
  renderPopupIfOpened() {
    if (this.Opened) {
      const e = this.props.item.id, { anchorAlign: t, popupAlign: o, collision: i } = a(e, this.props.isMenuVertical, this.props.isDirectionRightToLeft);
      return /* @__PURE__ */ index_js_.createElement(
        kendo_react_popup_index_mjs_.Popup,
        {
          anchor: this.itemElement,
          show: !0,
          popupClass: this.getPopupClassName(),
          anchorAlign: t,
          popupAlign: o,
          collision: i,
          animate: !1,
          key: "1"
        },
        /* @__PURE__ */ index_js_.createElement(
          MenuItemInternal_g,
          {
            parentItemId: e,
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
    const { icon: e, svgIcon: t } = this.props.item;
    return e || t ? /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { name: e, icon: t, key: "0" }) : null;
  }
  renderArrowIfApplicable() {
    return this.props.item.items.length > 0 ? /* @__PURE__ */ index_js_.createElement("span", { className: "k-menu-expand-arrow", "aria-hidden": !0 }, /* @__PURE__ */ index_js_.createElement(
      MenuItemArrow_o,
      {
        itemId: this.props.item.id,
        verticalMenu: this.props.isMenuVertical,
        dir: misc_f(this.props.isDirectionRightToLeft),
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
    const e = this.props;
    return e.item.items.length > 0 && x(e.item.id, e.lastItemIdToBeOpened) && // HACK: Wait for the second render because otherwise the scenario of
    // popup inside popup throws an error (for example, hover of item with id '0_0').
    !this.isFirstRender;
  }
  getPopupClassName() {
    return (0,index_mjs_.classNames)("k-menu-popup", { "k-rtl": this.props.isDirectionRightToLeft });
  }
  getMenuItemClassName(e) {
    return (0,index_mjs_.classNames)(
      "k-item",
      "k-menu-item",
      {
        "k-first": p(e.id),
        "k-last": e.isLastFromSiblings,
        "k-disabled": e.disabled
      },
      e.cssClass
    );
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/DirectionHolder.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class e {
  constructor() {
    this.phase = "Initialized";
  }
  getIsDirectionRightToLeft() {
    return this.isDirectionRightToLeft;
  }
  setIsDirectionRightToLeft(i) {
    this.phase = this.phase === "NotInitialized" ? "Initialized" : "NewValueReceived", this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft, this.isDirectionRightToLeft = i;
  }
  hasDirectionChanged() {
    return this.phase === "NewValueReceived" ? this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : !1;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/utils/MouseOverHandler.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class MouseOverHandler_n {
  constructor(e, s, i) {
    this.openOnClick = e, this.resetMenu = s, this.openItem = i, this.mouseDown = !1, this.openOnClick = e, this.isMouseOverEnabled = !e;
  }
  set OpenOnClick(e) {
    !!e != !!this.openOnClick && (this.mouseDown = !1, this.isMouseOverEnabled = !e), this.openOnClick = e;
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
  handleItemClick(e, s) {
    this.openOnClick && (this.isMouseOverEnabled ? s && (this.isMouseOverEnabled = !1, this.resetMenu()) : (this.isMouseOverEnabled = !0, this.openItem(e)));
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const package_metadata_e = {
  name: "@progress/kendo-react-layout",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846563,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/menu/components/Menu.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";











const Menu_h = {
  focusedItemId: u,
  hoveredItemId: u,
  tabbableItemId: c
}, Menu_a = class a extends index_js_.Component {
  constructor(t) {
    super(t), this.menuWrapperEl = null, this.directionHolder = new e(), this.inputItems = [], this.items = [], this.reset = () => {
      this.clearItemHoverAndLeaveRequestsIfApplicable(), this.setState(Menu_h);
    }, this.onKeyDown = (e) => {
      if (this.state.focusedItemId !== u) {
        const s = itemsIdsUtils_s(this.state.focusedItemId, this.items), o = V(
          this.items,
          s.id,
          e.keyCode,
          e.key,
          this.props.vertical,
          this.directionHolder.getIsDirectionRightToLeft()
        );
        s.id !== o && (e.preventDefault(), this.setFocusedItemId(o)), (e.keyCode === index_mjs_.Keys.enter || e.keyCode === index_mjs_.Keys.space) && !s.disabled && (this.mouseOverHandler.handleItemSelectedViaKeyboard(), this.dispatchSelectEventIfWired(e, s.id), !e.isDefaultPrevented() && s.items.length === 0 && s.url && window.location.assign(s.url));
      }
      e.keyCode === index_mjs_.Keys.esc && this.props.onClose && this.props.onClose.call(void 0, e);
    }, this.onItemMouseOver = (e) => {
      this.mouseOverHandler.IsMouseOverEnabled && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemHoverRequest = window.setTimeout(
        () => {
          this.setHoveredItemId(e), this.itemHoverRequest = null;
        },
        n(this.props)
      ));
    }, this.onItemMouseLeave = (e) => {
      this.mouseOverHandler.IsMouseOverEnabled && this.isItemWithDefaultClose(e) && (this.clearItemHoverAndLeaveRequestsIfApplicable(), this.itemLeaveRequest = window.setTimeout(
        () => {
          this.setHoveredItemId(u), this.itemLeaveRequest = null;
        },
        l(this.props)
      ));
    }, this.onItemMouseDown = () => {
      this.mouseOverHandler.handleItemMouseDown();
    }, this.onItemFocus = (e) => {
      this.setFocusedItemId(e), this.mouseOverHandler.handleItemFocus();
    }, this.onItemClick = (e, s) => {
      const o = itemsIdsUtils_s(s, this.items);
      o.disabled || (this.setFocusedItemId(s), this.mouseOverHandler.handleItemClick(s, this.isItemWithDefaultClose(s)), this.dispatchSelectEventIfWired(e, s), !e.isDefaultPrevented() && o.url && window.location.assign(o.url));
    }, this.onItemBlur = (e, s) => {
      if (this.isItemWithDefaultClose(e) && this.setFocusedItemId(u), s.relatedTarget && s.relatedTarget.nodeName === "LI") {
        const o = s.relatedTarget.getAttribute("id");
        if (o && o.includes(this.menuItemId))
          return;
      }
      this.props.onClose && this.props.onClose.call(void 0, s);
    }, this.getInputItem = (e) => itemsIdsUtils_s(e, this.inputItems), (0,index_mjs_.validatePackage)(package_metadata_e), this.mouseOverHandler = new MouseOverHandler_n(this.props.openOnClick, this.reset, this.onItemMouseOver), this.state = Object.assign({}, Menu_h, { isFirstRender: !0 });
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
    let t = this.state.hoveredItemId ? this.state.hoveredItemId : this.state.focusedItemId ? O(this.state.focusedItemId) : u;
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        onKeyDown: this.onKeyDown,
        style: this.props.style,
        className: this.directionHolder.getIsDirectionRightToLeft() ? "k-rtl" : void 0,
        ref: (e) => this.menuWrapperEl = e
      },
      /* @__PURE__ */ index_js_.createElement(
        MenuItemInternal_g,
        {
          className: this.getMenuClassName(),
          "aria-orientation": this.props.vertical ? "vertical" : void 0,
          items: this.items,
          isMenuVertical: this.props.vertical,
          isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(),
          focusedItemId: this.state.focusedItemId,
          lastItemIdToBeOpened: t,
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
  componentDidUpdate(t) {
    (!!t.vertical != !!this.props.vertical || this.directionHolder.hasDirectionChanged()) && this.reset(), this.mouseOverHandler.OpenOnClick = this.props.openOnClick;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.clearItemHoverAndLeaveRequestsIfApplicable();
  }
  setFocusedItemId(t) {
    this.setState((e) => {
      const s = t === u ? e.tabbableItemId : f(t);
      return { hoveredItemId: t === u || o(e.hoveredItemId) && o(t) ? e.hoveredItemId : u, focusedItemId: t, tabbableItemId: s };
    });
  }
  setHoveredItemId(t) {
    this.setState((e) => o(t) && o(e.focusedItemId) ? {
      hoveredItemId: t,
      focusedItemId: e.focusedItemId,
      tabbableItemId: e.tabbableItemId
    } : { hoveredItemId: t, focusedItemId: u, tabbableItemId: c });
  }
  getMenuClassName() {
    return (0,index_mjs_.classNames)(
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
  isItemWithDefaultClose(t) {
    return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(t) === -1;
  }
  checkIsDirectionRightToLeft() {
    return !!(this.props.dir !== void 0 ? this.props.dir === "rtl" : this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === "rtl");
  }
  prepareItems() {
    const { items: t, inputItems: e } = prepareInputItemsForInternalWork_b(this.props.items, this.props.children);
    this.items = t, this.inputItems = e;
  }
  dispatchSelectEventIfWired(t, e) {
    (0,index_mjs_.dispatchEvent)(this.props.onSelect, t, this, { item: this.getInputItem(e), itemId: e });
  }
};
Menu_a.propTypes = {
  vertical: prop_types_index_js_.bool,
  items: prop_types_index_js_.arrayOf(prop_types_index_js_.object),
  style: prop_types_index_js_.object,
  dir: prop_types_index_js_.string,
  hoverOpenDelay: prop_types_index_js_.number,
  hoverCloseDelay: prop_types_index_js_.number,
  openOnClick: prop_types_index_js_.bool,
  itemRender: prop_types_index_js_.any,
  linkRender: prop_types_index_js_.any,
  customCloseItemIds: prop_types_index_js_.arrayOf(prop_types_index_js_.string),
  onSelect: prop_types_index_js_.func,
  role: prop_types_index_js_.string
}, Menu_a.defaultProps = { vertical: !1 };
let I = Menu_a;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tabstrip/TabStripNavigationItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const TabStripNavigationItem_o = class o extends index_js_.Component {
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
    const { id: c, active: t, disabled: i, title: a = "Untitled", index: n, renderAllContent: m } = this.props, l = m ? `${this.props.contentPanelId}-${n.toString()}` : this.props.contentPanelId, d = {
      id: `${c}-${n.toString()}`,
      "aria-selected": t,
      "aria-controls": t ? l : void 0,
      "aria-disabled": i,
      role: "tab",
      onClick: i ? void 0 : this.onClick
    }, p = (0,index_mjs_.classNames)("k-item", "k-tabstrip-item", {
      "k-disabled": i,
      "k-active": t
    });
    return /* @__PURE__ */ index_js_.createElement("li", { ...d, className: p, ref: (f) => this.itemRef = f, onBlur: this.blur, "aria-controls": l }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-link" }, a));
  }
};
TabStripNavigationItem_o.propTypes = {
  active: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  index: prop_types_index_js_.number,
  onSelect: prop_types_index_js_.func,
  title: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.element
  ]),
  first: prop_types_index_js_.bool,
  last: prop_types_index_js_.bool
};
let TabStripNavigationItem_r = TabStripNavigationItem_o;


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var main_js_ = __webpack_require__(85601);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tabstrip/TabStripNavigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const E = (w) => Array.apply(null, Array(w)), L = (w) => w.preventDefault(), TabStripNavigation_b = "smooth", TabStripNavigation_d = "prev", TabStripNavigation_u = "next", T = class T extends index_js_.Component {
  constructor(l) {
    super(l), this.itemsNavRef = index_js_.createRef(), this.isRtl = () => this.props.dir === "rtl", this.onWheel = (t) => {
      t.stopPropagation();
      const s = t.deltaY < 0 ? TabStripNavigation_d : TabStripNavigation_u;
      this.setNewScrollPosition(s, t);
    }, this.arrowClickPrev = (t) => {
      this.handleArrowClick(TabStripNavigation_d, t);
    }, this.arrowClickNext = (t) => {
      this.handleArrowClick(TabStripNavigation_u, t);
    }, this.handleArrowClick = (t, s) => {
      this.setNewScrollPosition(t, s);
    }, this.setNewScrollPosition = (t, s) => {
      const e = this.itemsNavRef.current;
      if (!e)
        return;
      const n = this.horizontalScroll(), c = n ? e.scrollWidth - e.offsetWidth : e.scrollHeight - e.offsetHeight, r = (s.type === "click" ? this.props.buttonScrollSpeed : this.props.mouseScrollSpeed) || 0;
      let o = n ? e.scrollLeft : e.scrollTop, i = n ? e.scrollWidth - e.scrollLeft : e.scrollHeight - e.scrollTop, f = e.scrollWidth - e.scrollLeft * -1;
      this.isRtl() && this.horizontalScroll() ? (t === TabStripNavigation_d && o < 0 && (o += r, f += r), t === TabStripNavigation_u && o < c && (o -= r, f -= r), o = Math.min(0, Math.min(c, o))) : (t === TabStripNavigation_d && o > 0 && (o -= r, i += r), t === TabStripNavigation_u && o < c && (o += r, i -= r), o = Math.max(0, Math.min(c, o)));
      const m = o === 0, v = s.type === "click" ? TabStripNavigation_b : void 0;
      if (n) {
        const S = this.isRtl() ? Math.round(f) <= e.clientWidth || Math.floor(f) <= e.clientWidth : Math.round(i) <= e.clientWidth || Math.floor(i) <= e.clientWidth;
        this.setState({
          disabledPrev: m,
          disabledNext: S
        }), e.scrollTo({ left: o, behavior: v });
      } else
        this.setState({
          disabledPrev: m,
          disabledNext: Math.round(i) <= e.clientHeight || Math.floor(i) <= e.clientHeight
        }), e.scrollTo({ top: o, behavior: v });
    }, this.renderArrow = (t, s) => {
      const e = this.horizontalScroll(), n = {
        prev: {
          arrowTab: "k-tabstrip-prev",
          fontIcon: e ? this.isRtl() ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up",
          svgIcon: e ? this.isRtl() ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon : index_es_js_.caretAltUpIcon
        },
        next: {
          arrowTab: "k-tabstrip-next",
          fontIcon: e ? this.isRtl() ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down",
          svgIcon: e ? this.isRtl() ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon : index_es_js_.caretAltDownIcon
        }
      }, c = (t === TabStripNavigation_d ? this.props.prevButton : this.props.nextButton) || main_js_.Button, r = t === TabStripNavigation_d ? this.arrowClickPrev : this.arrowClickNext;
      return /* @__PURE__ */ index_js_.createElement(
        c,
        {
          disabled: s,
          className: `${n[t].arrowTab}`,
          onClick: r,
          icon: n[t].fontIcon,
          svgIcon: n[t].svgIcon,
          onMouseDown: L,
          tabIndex: -1,
          fillMode: "flat"
        }
      );
    }, this.state = {
      disabledPrev: this.props.selected === 0,
      disabledNext: this.props.selected === index_js_.Children.count(this.props.children) - 1
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
  componentDidUpdate(l) {
    const { scrollable: t, selected: s } = this.props;
    t && l.selected !== s && (this.scrollToSelected(), this.setState({
      disabledPrev: s === 0,
      disabledNext: s === index_js_.Children.count(this.props.children) - 1
    }));
  }
  /**
   * @hidden
   */
  render() {
    const { selected: l, tabPosition: t, children: s, onSelect: e, onKeyDown: n, navItemId: c, contentPanelId: r, renderAllContent: o } = this.props, i = index_js_.Children.count(s), f = index_js_.Children.toArray(s);
    let m;
    s && (m = E(i).map((W, p, C) => {
      const R = {
        active: l === p,
        disabled: f[p].props.disabled,
        index: p,
        title: f[p].props.title,
        first: p === 0,
        last: p === C.length - 1,
        contentPanelId: r,
        renderAllContent: o,
        id: c,
        onSelect: e
      };
      return /* @__PURE__ */ index_js_.createElement(TabStripNavigationItem_r, { key: p, ...R });
    }));
    const v = (0,index_mjs_.classNames)("k-tabstrip-items-wrapper", {
      "k-hstack": t === "top" || t === "bottom",
      "k-vstack": t === "left" || t === "right"
    }), S = (0,index_mjs_.classNames)("k-tabstrip-items", "k-reset");
    return /* @__PURE__ */ index_js_.createElement("div", { className: v }, this.props.scrollable ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, this.renderArrow(TabStripNavigation_d, this.state.disabledPrev), /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        ref: this.itemsNavRef,
        className: S,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: n,
        onWheel: this.onWheel,
        "aria-orientation": t === "left" || t === "right" ? "vertical" : void 0
      },
      m
    ), this.renderArrow(TabStripNavigation_u, this.state.disabledNext)) : /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        className: S,
        role: "tablist",
        tabIndex: this.props.tabIndex,
        onKeyDown: n
      },
      m
    ));
  }
  scrollToSelected() {
    const l = this.itemsNavRef.current, t = l && l.children[this.props.selected || 0];
    if (t instanceof HTMLElement && l instanceof HTMLElement) {
      const s = this.horizontalScroll(), e = s ? l.offsetWidth : l.offsetHeight, n = s ? t.offsetWidth : t.offsetHeight, c = s ? "left" : "top";
      let r = s ? l.scrollLeft : l.scrollTop, o = 0;
      if (this.isRtl()) {
        const i = t.offsetLeft;
        r = r * -1, i < 0 ? (o = i - n + l.offsetLeft, l.scrollTo({ [c]: o, behavior: TabStripNavigation_b })) : i + n > e - r && (o = r + i - n, l.scrollTo({ [c]: o, behavior: TabStripNavigation_b }));
      } else {
        const i = s ? t.offsetLeft - l.offsetLeft : t.offsetTop - l.offsetTop;
        r + e < i + n ? (o = i + n - e, l.scrollTo({ [c]: o, behavior: TabStripNavigation_b })) : r > i && (o = i, l.scrollTo({ [c]: o, behavior: TabStripNavigation_b }));
      }
    }
  }
  horizontalScroll() {
    return /top|bottom/.test(this.props.tabPosition || "top");
  }
};
T.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.element,
    prop_types_index_js_.arrayOf(prop_types_index_js_.element)
  ]),
  onSelect: prop_types_index_js_.func,
  onKeyDown: prop_types_index_js_.func,
  selected: prop_types_index_js_.number,
  tabIndex: prop_types_index_js_.number
};
let N = T;


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Fade.js
var Fade = __webpack_require__(84602);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tabstrip/TabStripContent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const TabStripContent_l = class l extends index_js_.Component {
  constructor() {
    super(...arguments), this.contentId = this.props.contentPanelId, this.childFactory = (e) => index_js_.cloneElement(e, {
      ...e.props,
      in: e.props.children.props.id === String(this.contentId + this.props.selected)
    });
  }
  /**
   * @hidden
   */
  render() {
    const { children: e, selected: t, contentPanelId: r, keepTabsMounted: s, navItemId: o, renderAllContent: p } = this.props, a = e && typeof t == "number" && index_js_.Children.toArray(e)[t], m = (0,index_mjs_.classNames)(
      "k-tabstrip-content",
      "k-active",
      a && a.props.contentClassName
    );
    return p ? this.renderAllContent(e) : /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: m,
        style: this.props.style,
        id: r,
        role: "tabpanel",
        "aria-hidden": s,
        "aria-labelledby": `${o}-${(t == null ? void 0 : t.toString()) || ""}`
      },
      this.renderContent(e)
    );
  }
  renderContent(e) {
    return this.props.keepTabsMounted ? index_js_.Children.map(this.props.children, (t, r) => this.renderChild(t, r)) : this.renderChild(
      index_js_.Children.toArray(e)[this.props.selected],
      this.props.selected
    );
  }
  renderAllContent(e) {
    return index_js_.Children.map(e, (t, r) => {
      const s = t, o = r === this.props.selected, p = (0,index_mjs_.classNames)(
        "k-tabstrip-content",
        { "k-active": o },
        s.props.contentClassName
      );
      return /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          className: p,
          style: this.props.style,
          id: `${this.props.contentPanelId}-${r}`,
          role: "tabpanel",
          "aria-hidden": !o,
          hidden: !o,
          "aria-labelledby": `${this.props.navItemId}-${r}`
        },
        this.props.animation ? /* @__PURE__ */ index_js_.createElement(
          Fade/* Fade */.z,
          {
            key: `${r}-${o}`,
            appear: !0,
            enter: !0,
            exit: !1
          },
          s.props.children
        ) : s.props.children
      );
    });
  }
  renderChild(e, t) {
    const r = t === this.props.selected, s = {
      style: {
        display: r ? void 0 : "none"
      }
    }, o = {
      position: "initial",
      display: r ? void 0 : "none"
    };
    return e.props.disabled ? null : this.props.animation ? /* @__PURE__ */ index_js_.createElement(
      Fade/* Fade */.z,
      {
        appear: !0,
        exit: this.props.keepTabsMounted,
        style: o,
        childFactory: this.props.keepTabsMounted ? this.childFactory : void 0
      },
      /* @__PURE__ */ index_js_.createElement("div", { ...s, id: String(this.contentId + t), key: t }, e.props.children)
    ) : /* @__PURE__ */ index_js_.createElement("div", { ...s, key: t }, e.props.children);
  }
};
TabStripContent_l.propTypes = {
  animation: prop_types_index_js_.bool,
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.element,
    prop_types_index_js_.arrayOf(prop_types_index_js_.element)
  ]),
  selected: prop_types_index_js_.number,
  style: prop_types_index_js_.object
};
let TabStripContent_h = TabStripContent_l;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tabstrip/TabStrip.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const TabStrip_h = class h extends index_js_.Component {
  constructor(o) {
    super(o), this._element = null, this.showLicenseWatermark = !1, this.keyBinding = {
      [index_mjs_.Keys.left]: () => this.prevNavigatableTab(),
      [index_mjs_.Keys.right]: () => this.nextNavigatableTab(),
      [index_mjs_.Keys.down]: () => this.nextNavigatableTab(),
      [index_mjs_.Keys.up]: () => this.prevNavigatableTab(),
      [index_mjs_.Keys.home]: () => 0,
      [index_mjs_.Keys.end]: () => index_js_.Children.count(this.props.children) - 1
    }, this.onSelect = (t) => {
      this.props.selected !== t && this.props.onSelect && this.props.onSelect({
        selected: t
      });
    }, this.onKeyDown = (t) => {
      let e;
      switch (t.keyCode) {
        case index_mjs_.Keys.left:
          e = this.keyBinding[this.invertKeys(index_mjs_.Keys.left, index_mjs_.Keys.right)];
          break;
        case index_mjs_.Keys.right:
          e = this.keyBinding[this.invertKeys(index_mjs_.Keys.right, index_mjs_.Keys.left)];
          break;
        case index_mjs_.Keys.up:
          e = this.keyBinding[index_mjs_.Keys.up];
          break;
        case index_mjs_.Keys.down:
          e = this.keyBinding[index_mjs_.Keys.down];
          break;
        case index_mjs_.Keys.home:
          e = this.keyBinding[index_mjs_.Keys.home];
          break;
        case index_mjs_.Keys.end:
          e = this.keyBinding[index_mjs_.Keys.end];
          break;
      }
      e && (t.preventDefault(), this.onSelect(e()));
    }, this.renderContent = (t) => {
      const { selected: e, children: i, tabContentStyle: s } = t, l = index_js_.Children.count(i);
      return e < l && e > -1 ? /* @__PURE__ */ index_js_.createElement(TabStripContent_h, { index: e, ...t, style: s }) : null;
    }, this.firstNavigatableTab = () => {
      const t = this.children(), e = index_js_.Children.count(t);
      if (t) {
        for (let i = 0; i < e; i++)
          if (!t[i].props.disabled)
            return i;
      }
    }, this.lastNavigatableTab = () => {
      const t = this.children(), e = index_js_.Children.count(t);
      if (t) {
        for (let i = e - 1; i > 0; i--)
          if (!t[i].props.disabled)
            return i;
      }
    }, this.prevNavigatableTab = () => {
      const t = this.children(), { selected: e } = this.props, i = e ? e - 1 : -1;
      if (i < 0)
        return this.lastNavigatableTab();
      if (t)
        for (let s = i; s > -1; s--) {
          if (!t[s].props.disabled)
            return s;
          if (s === 0)
            return this.lastNavigatableTab();
        }
    }, this.nextNavigatableTab = () => {
      const t = this.children(), { selected: e } = this.props, i = e ? e + 1 : 1, s = index_js_.Children.count(t);
      if (i >= s)
        return this.firstNavigatableTab();
      if (t)
        for (let l = i; l < s; l++) {
          if (!t[l].props.disabled)
            return l;
          if (l + 1 === s)
            return this.firstNavigatableTab();
        }
    }, (0,index_mjs_.validatePackage)(package_metadata_e), this.showLicenseWatermark = (0,index_mjs_.shouldShowValidationUI)(package_metadata_e);
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
    const o = {
      ...this.props,
      children: this.children(),
      contentPanelId: this.contentPanelId,
      renderAllContent: this.props.renderAllContent,
      navItemId: this.navItemId,
      onKeyDown: this.onKeyDown,
      onSelect: this.onSelect
    }, { tabPosition: t, tabIndex: e = 0 } = o, i = t === "bottom", s = (0,index_mjs_.classNames)(
      "k-tabstrip k-pos-relative",
      {
        "k-tabstrip-left": t === "left",
        "k-tabstrip-right": t === "right",
        "k-tabstrip-bottom": t === "bottom",
        "k-tabstrip-top": t === "top",
        "k-tabstrip-scrollable": this.props.scrollable
      },
      this.props.className
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        ref: (l) => this._element = l,
        dir: this.props.dir,
        className: s,
        style: this.props.style
      },
      !i && /* @__PURE__ */ index_js_.createElement(N, { ...o, tabIndex: e }),
      this.renderContent(o),
      i && /* @__PURE__ */ index_js_.createElement(N, { ...o, tabIndex: e }),
      this.showLicenseWatermark && /* @__PURE__ */ index_js_.createElement(index_mjs_.WatermarkOverlay, null)
    );
  }
  invertKeys(o, t) {
    return this._element && getComputedStyle(this._element).direction === "rtl" || !1 ? t : o;
  }
  children() {
    return index_js_.Children.toArray(this.props.children).filter((o) => o);
  }
};
TabStrip_h.propTypes = {
  animation: prop_types_index_js_.bool,
  children: prop_types_index_js_.node,
  onSelect: prop_types_index_js_.func,
  selected: prop_types_index_js_.number,
  style: prop_types_index_js_.object,
  tabContentStyle: prop_types_index_js_.object,
  tabPosition: prop_types_index_js_.string,
  tabIndex: prop_types_index_js_.number,
  className: prop_types_index_js_.string,
  dir: prop_types_index_js_.string
}, TabStrip_h.defaultProps = {
  animation: !0,
  tabPosition: "top",
  keepTabsMounted: !1,
  buttonScrollSpeed: 100,
  mouseScrollSpeed: 10,
  renderAllContent: !1
};
let TabStrip_p = TabStrip_h;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/splitter/SplitterBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



class k extends index_js_.Component {
  constructor(o) {
    super(o), this.draggable = null, this.onDrag = (t, e, l) => {
      const { event: s } = t, { onDrag: i, index: r } = this.props, p = this.draggable && this.draggable.element;
      p && !this.isStatic && this.isDraggable && i(s, p, r, e, l);
    }, this.onFocus = () => {
      this.setState({
        focused: !0
      });
    }, this.onBlur = () => {
      this.setState({
        focused: !1
      });
    }, this.onToggle = (t) => {
      const { onToggle: e, index: l, prev: s, next: i } = this.props;
      (s.collapsible || i.collapsible) && e(s.collapsible ? l : l + 1, t);
    }, this.onPrevToggle = (t) => {
      const { onToggle: e, index: l, prev: s } = this.props;
      s.collapsible && e(l, t);
    }, this.onNextToggle = (t) => {
      const { onToggle: e, index: l, next: s } = this.props;
      s.collapsible && e(l + 1, t);
    }, this.onKeyDown = (t) => {
      const e = t && t.keyCode, l = this.isHorizontal, { index: s } = this.props, i = this.draggable && this.draggable.element, r = (p, f, u) => {
        t.preventDefault(), this.props.onKeyboardResize(p, f, u, t);
      };
      i && (e === index_mjs_.Keys.enter ? (t.preventDefault(), this.onToggle(t)) : this.isDraggable && (l && e === index_mjs_.Keys.left ? r(i, s, -10) : l && e === index_mjs_.Keys.right ? r(i, s, 10) : !l && e === index_mjs_.Keys.up ? r(i, s, -10) : !l && e === index_mjs_.Keys.down && r(i, s, 10)));
    }, this.state = {
      focused: !1
    };
  }
  get isStatic() {
    const { prev: o, next: t } = this.props, e = o.resizable && t.resizable, l = o.collapsible || t.collapsible;
    return !e && !l;
  }
  get isDraggable() {
    const { prev: o, next: t } = this.props, e = o.resizable && t.resizable, l = o.collapsed || t.collapsed;
    return !!e && !l;
  }
  get isHorizontal() {
    return this.props.orientation === "horizontal";
  }
  render() {
    const o = this.isDraggable, t = this.isStatic, e = this.isHorizontal, l = (0,index_mjs_.classNames)(
      "k-splitbar",
      {
        "k-focus": this.state.focused,
        "k-splitbar-horizontal": e,
        "k-splitbar-vertical": !e,
        "k-splitbar-draggable-horizontal": e && o,
        "k-splitbar-draggable-vertical": !e && o,
        "k-splitbar-static-horizontal": e && t,
        "k-splitbar-static-vertical": !e && t
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      index_mjs_.Draggable,
      {
        onPress: (s) => this.onDrag(s, !0, !1),
        onDrag: (s) => this.onDrag(s, !1, !1),
        onRelease: (s) => this.onDrag(s, !1, !0),
        ref: (s) => {
          this.draggable = s;
        }
      },
      /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          tabIndex: t ? -1 : 0,
          role: "separator",
          "aria-valuenow": 0,
          "aria-label": this.props.ariaLabel,
          "aria-orientation": e ? "vertical" : void 0,
          className: l,
          style: { touchAction: "none" },
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onDoubleClick: this.onToggle,
          onKeyDown: this.onKeyDown
        },
        this.props.prev.collapsible && /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            className: "k-collapse-prev",
            onClick: this.onPrevToggle
          },
          /* @__PURE__ */ index_js_.createElement(
            index_mjs_.IconWrap,
            {
              name: this.props.prev.collapsible ? e ? this.props.prev.collapsed ? this.props.isRtl ? "caret-alt-left" : "caret-alt-right" : this.props.isRtl ? "caret-alt-right" : "caret-alt-left" : this.props.prev.collapsed ? "caret-alt-down" : "caret-alt-up" : void 0,
              icon: this.props.prev.collapsible ? e ? this.props.prev.collapsed ? this.props.isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon : this.props.isRtl ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon : this.props.prev.collapsed ? index_es_js_.caretAltDownIcon : index_es_js_.caretAltUpIcon : void 0,
              size: "xsmall"
            }
          )
        ),
        /* @__PURE__ */ index_js_.createElement("div", { className: "k-resize-handle" }),
        this.props.next.collapsible && /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            className: "k-collapse-next",
            onClick: this.onNextToggle
          },
          /* @__PURE__ */ index_js_.createElement(
            index_mjs_.IconWrap,
            {
              name: this.props.next.collapsible ? e ? this.props.next.collapsed ? this.props.isRtl ? "caret-alt-right" : "caret-alt-left" : this.props.isRtl ? "caret-alt-left" : "caret-alt-right" : this.props.next.collapsed ? "caret-alt-up" : "caret-alt-down" : void 0,
              icon: this.props.next.collapsible ? e ? this.props.next.collapsed ? this.props.isRtl ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon : this.props.isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon : this.props.next.collapsed ? index_es_js_.caretAltUpIcon : index_es_js_.caretAltDownIcon : void 0,
              size: "xsmall"
            }
          )
        )
      )
    );
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tabstrip/TabStripTab.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const TabStripTab_n = class n extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
};
TabStripTab_n.propTypes = {
  disabled: prop_types_index_js_.bool,
  contentClassName: prop_types_index_js_.string,
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.element,
    prop_types_index_js_.node
  ]),
  title: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.element,
    prop_types_index_js_.node
  ])
};
let TabStripTab_t = TabStripTab_n;


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Reveal.js
var Reveal = __webpack_require__(22893);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/panelbar/PanelBarItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





function D({ imageUrl: d, icon: o, svgIcon: t, iconClass: r }) {
  return d ? /* @__PURE__ */ index_js_.createElement("img", { role: "presentation", className: "k-panelbar-item-icon k-image", src: d }) : o || t ? /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { className: "k-panelbar-item-icon", name: o, icon: t }) : r ? /* @__PURE__ */ index_js_.createElement("span", { role: "presentation", className: "k-panelbar-item-icon " + r }) : null;
}
const PanelBarItem_l = class l extends index_js_.PureComponent {
  constructor(o) {
    super(o), this.handleItemClick = () => {
      const { onSelect: t, disabled: r, id: c } = this.props;
      t && !r && t.call(void 0, {
        uniquePrivateKey: this.props.uniquePrivateKey,
        id: c,
        target: this
      });
    }, this.childFactory = (t) => this.props.keepItemsMounted ? index_js_.cloneElement(t, {
      ...t.props,
      in: this.props.expanded
    }) : t, this.state = {
      show: o.expanded || !1
    };
  }
  /**
   * @hidden
   */
  render() {
    const {
      id: o,
      children: t,
      title: r,
      uniquePrivateKey: c,
      disabled: a,
      selected: m,
      focused: y,
      expanded: s,
      className: E,
      level: u,
      headerClassName: g,
      animation: h,
      keepItemsMounted: i
    } = this.props, v = {
      role: "treeitem",
      "aria-disabled": a,
      "aria-hidden": !a && !s,
      "aria-selected": !a && m,
      "aria-expanded": !a && s && !!t
    }, x = (0,index_mjs_.classNames)(
      "k-panelbar-item",
      {
        "k-panelbar-header": u === 0,
        "k-expanded": s && !!t,
        "k-disabled": a
      },
      `k-level-${u}`,
      E
    ), N = (0,index_mjs_.classNames)(
      "k-link",
      {
        "k-selected": !a && m,
        "k-focus": !a && y
      },
      g
    ), I = { display: "block" }, w = D(this.props), C = !a && t ? /* @__PURE__ */ index_js_.createElement(
      index_mjs_.IconWrap,
      {
        name: s ? "chevron-up" : "chevron-down",
        icon: s ? index_es_js_.chevronUpIcon : index_es_js_.chevronDownIcon,
        className: (0,index_mjs_.classNames)(
          "k-panelbar-toggle",
          s ? "k-panelbar-collapse" : "k-panelbar-expand"
        )
      }
    ) : null, k = !a && s || i ? /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        role: "group",
        "aria-expanded": s,
        "aria-hidden": !s,
        className: "k-panelbar-group k-panel k-group",
        style: { display: i ? this.state.show ? "block" : "none" : "block" }
      },
      t
    ) : null, S = (h === void 0 || h) && !a && t ? /* @__PURE__ */ index_js_.createElement(
      Reveal/* Reveal */.g,
      {
        transitionEnterDuration: 200,
        transitionExitDuration: 200,
        key: c + "_animation",
        style: I,
        children: k,
        childFactory: i && this.childFactory,
        unmountOnExit: !i,
        onBeforeEnter: () => i && this.setState({ show: !0 }),
        onAfterExited: () => i && this.setState({ show: !1 })
      }
    ) : k;
    return /* @__PURE__ */ index_js_.createElement(
      "li",
      {
        id: o,
        className: x,
        ...v
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: N, onClick: this.handleItemClick }, w, /* @__PURE__ */ index_js_.createElement("span", { className: "k-panelbar-item-text" }, r), C),
      S
    );
  }
};
PanelBarItem_l.propTypes = {
  animation: prop_types_index_js_.bool,
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  icon: prop_types_index_js_.string,
  iconClass: prop_types_index_js_.string,
  imageUrl: prop_types_index_js_.string,
  svgIcon: index_mjs_.svgIconPropType,
  expanded: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  onSelect: prop_types_index_js_.func,
  selected: prop_types_index_js_.bool,
  level: prop_types_index_js_.number,
  title: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.element
  ]),
  id: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.number
  ]),
  focused: prop_types_index_js_.bool,
  keepItemsMounted: prop_types_index_js_.bool
}, PanelBarItem_l.defaultProps = {
  title: "Untitled"
};
let PanelBarItem_b = PanelBarItem_l;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/panelbar/util.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const C = ({
  animation: n = !0,
  keepItemsMounted: r = !1,
  state: e,
  expanded: o,
  handleSelect: f,
  children: p,
  parentExpanded: i = !0,
  level: t = 0,
  parentPrivateKey: u = []
}) => index_js_.Children.map(p, (s, E) => {
  if (s && s.type === PanelBarItem_b) {
    let m;
    const d = util_l(s, u, E);
    if (s.props.children) {
      const g = {
        animation: n,
        keepItemsMounted: r,
        state: e,
        expanded: o,
        handleSelect: f,
        children: s.props.children,
        parentExpanded: (o || []).indexOf(d) > -1,
        level: t + 1,
        parentPrivateKey: [...u, d]
      };
      m = C(g);
    }
    return index_js_.cloneElement(
      s,
      {
        ...s.props,
        animation: s.props.animation !== void 0 ? s.props.animation : n,
        keepItemsMounted: r,
        id: s.props.id || `k-panelbar-item-default-${d}`,
        uniquePrivateKey: d,
        parentUniquePrivateKey: u,
        parentExpanded: i,
        level: t,
        expanded: (o || []).indexOf(d) > -1,
        focused: e.focused === d && e.wrapperFocused,
        selected: e.selected === d,
        children: m,
        onSelect: f
      }
    );
  } else
    return /* @__PURE__ */ index_js_.createElement("div", { className: "k-panelbar-content k-content" }, s);
}), q = (n) => {
  const r = index_js_.Children.toArray(n.children)[0];
  return r ? util_l(r, [], 0) : "";
}, util_b = (n, r, e = {
  expanded: n.expanded || [],
  selected: n.selected || "",
  focused: n.focused || "",
  wrapperFocused: !1
}, o = !0, f = []) => (index_js_.Children.map(n.children, (p, i) => {
  if (p && p.type === PanelBarItem_b) {
    const t = util_l(p, f, i);
    !p.props.disabled && o && (p.props.selected && (e.selected = t), p.props.focused && (e.focused = t), p.props.expanded && (r === "multiple" ? e.expanded.push(t) : r === "single" && (e.expanded = [t])), p.props.children && (e = util_b(
      p.props,
      r,
      e,
      !!p.props.expanded,
      [...f, t]
    )));
  }
}), e), util_l = (n, r, e) => n && n.props && n.props.id ? n.props.id : r.length ? r[r.length - 1] + `.${e}` : `.${e}`;
function util_I(n, r = []) {
  return (n || []).forEach((e) => {
    e.disabled || (r.push(e), e.expanded && e.children && util_I(e.children, r));
  }), r;
}
function v(n, r = []) {
  return index_js_.Children.forEach(n, (e) => {
    e && e.props && !e.props.disabled && (r.push(e), e.props.children && v(e.props.children, r));
  }), r;
}
function y(n, r = []) {
  return index_js_.Children.forEach(n, (e) => {
    e && e.props && !e.props.disabled && (e.props.expanded || e.props.parentExpanded) && (r.push(e), e.props.children && y(e.props.children, r));
  }), r;
}
const F = (n) => n != null;
var util_x;
((n) => {
  function r(e) {
    return e.map((o, f) => {
      let p;
      return o.content && (p = o.content), o.children && (p = r(o.children)), /* @__PURE__ */ index_js_.createElement(
        PanelBarItem_b,
        {
          ...o,
          children: p,
          key: o.id || f
        }
      );
    });
  }
  n.mapItemsToComponents = r;
})(util_x || (util_x = {}));
const $ = (n, r) => n.length !== r.length ? !1 : n.every((e, o) => e === r[o]);


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/panelbar/interfaces/NavigationAction.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
var NavigationAction_r = /* @__PURE__ */ ((e) => (e[e.Toggle = 0] = "Toggle", e[e.Next = 1] = "Next", e[e.Previous = 2] = "Previous", e))(NavigationAction_r || {});


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/panelbar/PanelBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







const PanelBar_c = class c extends index_js_.Component {
  constructor(i) {
    super(i), this._element = null, this.showLicenseWatermark = !1, this.handleSelect = (t) => {
      this.onSelect(t), this.onFocus(t);
    }, this.onSelect = (t) => {
      const r = v(index_js_.Children.toArray(this.children));
      let s, e;
      switch (r.forEach((l) => {
        l.props.uniquePrivateKey === (t.uniquePrivateKey || this.state.focused) && (s = l);
      }), this.expandMode) {
        case "single":
          e = [...s.props.parentUniquePrivateKey, s.props.uniquePrivateKey], $(this.expandedItems, e) && (s.props.parentUniquePrivateKey ? e = [...s.props.parentUniquePrivateKey] : e = []);
          break;
        case "multiple": {
          e = this.expandedItems.slice();
          const l = e.indexOf(s.props.uniquePrivateKey);
          l === -1 ? e.push(s.props.uniquePrivateKey) : e.splice(l, 1);
          break;
        }
        default:
          e = this.expandedItems.slice();
          break;
      }
      this.setState({ selected: s.props.uniquePrivateKey, expanded: e }), this.props.onSelect && this.props.onSelect.call(void 0, {
        target: s,
        expandedItems: e
      });
    }, this.onFocus = (t, r = 0) => {
      const s = y(index_js_.Children.toArray(this.children));
      let e;
      s.forEach((l, h) => {
        if (l.props.uniquePrivateKey === (t.uniquePrivateKey || this.state.focused)) {
          const y = h + r < 0 ? 0 : h + r > s.length ? s.length - 1 : h + r;
          e = s[y];
        }
      }), e && (this.activeDescendant = e.props.id, this.setState({ focused: e.props.uniquePrivateKey }));
    }, this.onNavigate = (t, r) => {
      let s;
      switch (r) {
        case NavigationAction_r.Previous:
          s = -1, this.onFocus(t, s);
          break;
        case NavigationAction_r.Next:
          s = 1, this.onFocus(t, s);
          break;
        case NavigationAction_r.Toggle:
          this.onSelect(t);
          break;
      }
    }, this.handleWrapperFocus = () => {
      clearTimeout(this.nextTickId), this.state.wrapperFocused || this.setState({ wrapperFocused: !0 });
    }, this.handleWrapperBlur = () => {
      this.nextTick(() => {
        this.setState({ wrapperFocused: !1 });
      });
    }, this.handleKeyDown = (t) => {
      const r = this._element && getComputedStyle(this._element).direction === "rtl" || !1;
      if (t.target === t.currentTarget) {
        const s = t.keyCode;
        let e;
        switch (s) {
          case index_mjs_.Keys.left:
            e = r ? NavigationAction_r.Next : NavigationAction_r.Previous;
            break;
          case index_mjs_.Keys.up:
            e = NavigationAction_r.Previous;
            break;
          case index_mjs_.Keys.right:
            e = r ? NavigationAction_r.Previous : NavigationAction_r.Next;
            break;
          case index_mjs_.Keys.down:
            e = NavigationAction_r.Next;
            break;
          case index_mjs_.Keys.space:
          case index_mjs_.Keys.enter:
            e = NavigationAction_r.Toggle;
            break;
          default:
            e = null;
            break;
        }
        e !== null && (t.preventDefault(), this.onNavigate(t, e));
      }
    }, (0,index_mjs_.validatePackage)(package_metadata_e), this.showLicenseWatermark = (0,index_mjs_.shouldShowValidationUI)(package_metadata_e);
    const o = util_b(i, this.expandMode);
    o.focused || (o.focused = q(i)), this.state = o;
  }
  get expandMode() {
    return this.props.expandMode || "multiple";
  }
  get selectedItem() {
    const { selected: i = this.state.selected } = this.props;
    return i;
  }
  get expandedItems() {
    return this.props.isControlled ? this.props.expanded || [] : this.state.expanded;
  }
  get children() {
    const i = { ...this.state, selected: this.selectedItem }, o = {
      animation: this.props.animation,
      keepItemsMounted: this.props.keepItemsMounted,
      state: i,
      expanded: this.expandedItems,
      handleSelect: this.handleSelect,
      children: this.props.children
    };
    return C(o);
  }
  /**
   * @hidden
   */
  render() {
    const i = {
      "aria-activedescendant": this.activeDescendant
    }, o = (0,index_mjs_.classNames)(
      "k-panelbar",
      "k-pos-relative",
      this.props.className
    );
    return /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        ref: (t) => {
          this._element = t;
        },
        dir: this.props.dir,
        role: "tree",
        tabIndex: 0,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleWrapperFocus,
        onBlur: this.handleWrapperBlur,
        className: o,
        style: this.props.style,
        ...i
      },
      this.children,
      this.showLicenseWatermark && /* @__PURE__ */ index_js_.createElement(index_mjs_.WatermarkOverlay, null)
    );
  }
  nextTick(i) {
    this.nextTickId = window.setTimeout(() => i());
  }
};
PanelBar_c.propTypes = {
  animation: prop_types_index_js_.bool,
  children: function(i, o) {
    const t = i[o];
    if (t) {
      if (Array.isArray(t)) {
        for (const r of t)
          if (!r.type || r.type !== PanelBarItem_b)
            return new Error(
              "PanelBar children should be either PanelBarItem or Array of PanelBarItem."
            );
      } else if (t.type !== PanelBarItem_b)
        return new Error(
          "PanelBar child should be either PanelBarItem or Array of PanelBarItem."
        );
      return null;
    }
    return null;
  },
  dir: prop_types_index_js_.string,
  selected: prop_types_index_js_.string,
  expanded: prop_types_index_js_.arrayOf(prop_types_index_js_.string),
  focused: prop_types_index_js_.string,
  expandMode: prop_types_index_js_.oneOf(["single", "multiple"]),
  className: prop_types_index_js_.string,
  keepItemsMounted: prop_types_index_js_.bool,
  onSelect: prop_types_index_js_.func,
  style: prop_types_index_js_.object
}, PanelBar_c.defaultProps = {
  expandMode: "multiple",
  animation: !0,
  keepItemsMounted: !1
};
let PanelBar_f = PanelBar_c;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/splitter/SplitterPane.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


class SplitterPane_f extends index_js_.Component {
  render() {
    const {
      id: t,
      size: e,
      collapsed: s,
      overlay: a,
      containsSplitter: o,
      collapsible: r,
      resizable: i,
      scrollable: n,
      keepMounted: c
    } = this.props, p = e && e.length > 0, d = {
      flexBasis: e
    }, m = (0,index_mjs_.classNames)(
      "k-pane",
      {
        "k-hidden": s,
        hidden: s,
        "k-pane-flex": o,
        "k-pane-static": !i && !r || p,
        "k-scrollable": n
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: t,
        role: "group",
        style: d,
        className: m
      },
      !s || c ? this.props.children : void 0,
      a ? /* @__PURE__ */ index_js_.createElement("div", { className: "k-splitter-overlay k-overlay" }) : void 0
    );
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/splitter/messages/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const messages_s = "splitBarLabel", messages_e = {
  [messages_s]: "split bar"
};


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.2.1_@progress+kendo-licensing@1_f4601061072e7c3278720aa16dc3d5d5/node_modules/@progress/kendo-react-intl/index.mjs)
var kendo_react_intl_index_mjs_ = __webpack_require__(31650);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/splitter/Splitter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







const Splitter_k = {
  collapsible: !1,
  collapsed: !1,
  resizable: !0,
  scrollable: !0
}, K = 150, Splitter_D = class D extends index_js_.Component {
  /**
   * @hidden
   */
  constructor(s) {
    super(s), this._container = null, this.validatePanes = (t) => {
      if (!t.filter((i) => i.size === void 0).length)
        throw new Error("The Splitter should have at least one pane without a set size.");
    }, this.mapPaneOptions = (t, e) => {
      const i = this.orientation, { dragIndex: r, isDragging: a } = this.state, l = [];
      for (let n = 0; n < e.length; n++) {
        let o = !1;
        const p = e[n];
        index_js_.isValidElement(p) && (o = p.type.displayName === "Splitter");
        let h = !1;
        a && r !== void 0 && (h = r === n || r + 1 === n), l.push({
          ...Splitter_k,
          orientation: i,
          containsSplitter: o,
          overlay: h,
          ...(t || [])[n]
        });
      }
      return l;
    }, this.mapSplitterPanes = (t, e) => {
      const i = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_s, messages_e[messages_s]);
      return t.map((r, a) => {
        let l;
        const n = a * 2, o = n + 1;
        if (a + 1 < t.length) {
          const h = t[a + 1];
          l = /* @__PURE__ */ index_js_.createElement(
            k,
            {
              key: o,
              index: a,
              orientation: r.orientation,
              prev: r,
              next: h,
              ariaLabel: i,
              onDrag: this.onBarDragResize,
              onToggle: this.onBarToggle,
              onKeyboardResize: this.onBarKeyboardResize,
              isRtl: this.isRtl
            }
          );
        }
        return [/* @__PURE__ */ index_js_.createElement(
          SplitterPane_f,
          {
            key: n,
            ...r
          },
          e[a]
        ), l];
      });
    }, this.onBarToggle = (t, e) => {
      const r = this.panesOptions(this.panesContent).map((a, l) => {
        const n = this.getPaneProps(a);
        return l === t ? {
          ...n,
          collapsed: !a.collapsed
        } : {
          ...n
        };
      });
      this.props.onChange && this.props.onChange({
        newState: r,
        isLast: !0,
        nativeEvent: e
      });
    }, this.onBarDragResize = (t, e, i, r, a) => {
      const l = (/* @__PURE__ */ new Date()).getTime(), { pageX: n, pageY: o } = t, { prevElement: p, nextElement: h } = this.surroudingPanes(e);
      if (!p || !h)
        return;
      if (r) {
        this.setState({
          isDragging: !0,
          dragIndex: i,
          startTime: l,
          originalX: n,
          originalY: o,
          originalPrevSize: this.elementSize(p),
          originalNextSize: this.elementSize(h)
        });
        return;
      }
      const { originalPrevSize: d, originalNextSize: g, startTime: P, originalX: f, originalY: u } = this.state;
      if (!r && l - P < K) {
        a && this.resetDragState();
        return;
      }
      let c;
      this.orientation === "vertical" ? c = o - u : this.isRtl ? c = f - n : c = n - f, this.resize(i, i + 1, d, g, c, a, t), a && this.resetDragState();
    }, this.onBarKeyboardResize = (t, e, i, r) => {
      const { prevElement: a, nextElement: l } = this.surroudingPanes(t), n = this.elementSize(a), o = this.elementSize(l);
      this.resize(e, e + 1, n, o, i, !0, r);
    }, this.containerSize = () => this._container ? this.elementSize(this._container, !0) : 0, this.panesOptions = (t) => this.mapPaneOptions(this.panes, t), this.elementSize = (t, e) => {
      const i = e ? "client" : "offset";
      return this.orientation === "vertical" ? t[`${i}Height`] : t[`${i}Width`];
    }, this.clamp = (t, e, i) => Math.min(e, Math.max(t, i)), this.fixedSize = (t) => t && t.length > 0, (0,index_mjs_.validatePackage)(package_metadata_e), this.state = {
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
    return index_js_.Children.toArray(this.props.children).filter((s) => s);
  }
  /**
   * @hidden
   */
  render() {
    const s = this.panesContent, t = this.panesOptions(s), e = (0,index_mjs_.classNames)(
      "k-widget",
      "k-splitter",
      "k-splitter-flex",
      `k-splitter-${this.orientation}`,
      this.props.className
    );
    return this.validatePanes(t), /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        style: this.props.style,
        ref: (i) => this._container = i,
        className: e
      },
      this.mapSplitterPanes(t, s)
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
  toPixels(s, t) {
    let e = parseInt(s, 10);
    return this.isPercent(s) && (e = t * e / 100), e;
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
  resize(s, t, e, i, r, a, l) {
    const n = this.panesOptions(this.panesContent), o = n[s], p = n[t], h = e + i, d = this.containerSize(), g = (m) => this.toPixels(m, d), P = {
      index: s,
      initialSize: e,
      min: g(o.min) || h - g(p.max) || 0,
      max: g(o.max) || h - g(p.min) || h
    }, f = {
      index: t,
      initialSize: i,
      min: g(p.min) || h - g(o.max) || 0,
      max: g(p.max) || h - g(o.min) || h
    }, u = (m, v) => {
      const z = n[m.index], E = this.clamp(m.min, m.max, m.initialSize + v);
      return this.isPercent(z.size || "") ? 100 * E / d + "%" : E + "px";
    };
    let c, x;
    this.fixedSize(o.size) && this.fixedSize(p.size) ? (c = u(P, r), x = u(f, -r)) : p.collapsible || this.fixedSize(p.size) ? x = u(f, -r) : c = u(P, r);
    const C = n.map((m, v) => {
      const z = this.getPaneProps(m);
      return v === s ? {
        ...z,
        size: c
      } : v === t ? {
        ...z,
        size: x
      } : {
        ...z
      };
    });
    this.panesDuringOnChange = C, this.isControlledState || this.setState({
      panes: C
    }), this.props.onChange && this.props.onChange({
      newState: C,
      isLast: a,
      nativeEvent: l
    }), this.panesDuringOnChange = void 0;
  }
  getPaneProps(s) {
    const { orientation: t, overlay: e, containsSplitter: i, ...r } = s;
    return r;
  }
};
Splitter_D.displayName = "Splitter";
let Splitter_y = Splitter_D;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/interfaces/Enums.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
var Enums_E = /* @__PURE__ */ ((r) => (r.TEXT = "text", r.IMAGE = "image", r.ICON = "icon", r))(Enums_E || {}), Enums_e = /* @__PURE__ */ ((r) => (r.HORIZONTAL = "horizontal", r.VERTICAL = "vertical", r))(Enums_e || {}), R = /* @__PURE__ */ ((r) => (r.DEFAULT = "default", r.primary = "primary", r.INFO = "info", r.SUCCESS = "success", r.WARNING = "warning", r.ERROR = "error", r))(R || {}), Enums_n = /* @__PURE__ */ ((r) => (r.START = "start", r.CENTER = "center", r.END = "end", r.STRETCHED = "stretched", r))(Enums_n || {});


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/Card.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const Card_a = index_js_.forwardRef((t, l) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const { children: d, dir: m, style: p, className: f, type: o, orientation: u, ...y } = t, n = index_js_.useRef(null), i = index_js_.useRef(null);
  return index_js_.useImperativeHandle(n, () => ({
    element: i.current,
    props: t
  })), index_js_.useImperativeHandle(l, () => n.current), /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      dir: m,
      style: p,
      ref: i,
      className: (0,index_mjs_.classNames)(
        "k-card",
        f,
        { [`k-card-${o}`]: o !== R.DEFAULT },
        u !== Enums_e.HORIZONTAL ? "k-card-vertical" : "k-card-horizontal"
      ),
      ...y
    },
    d
  );
});
Card_a.displayName = "KendoReactCard";
Card_a.propTypes = {
  children: prop_types_index_js_.node,
  className: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  orientation: prop_types_index_js_.oneOf(["horizontal", "vertical"]),
  style: prop_types_index_js_.object,
  type: prop_types_index_js_.oneOf(["default", "primary", "info", "success", "warning", "error"])
};
Card_a.defaultProps = {
  type: R.DEFAULT,
  orientation: Enums_e.VERTICAL
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardHeader.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardHeader_t = (e) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    style: e.style,
    className: (0,index_mjs_.classNames)(
      "k-card-header",
      e.className
    )
  },
  e.children
);
CardHeader_t.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardTitle.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardTitle_a = (e) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    style: e.style,
    className: (0,index_mjs_.classNames)(
      "k-card-title",
      e.className
    )
  },
  e.children
);
CardTitle_a.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardBody.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardBody_t = (e) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    style: e.style,
    className: (0,index_mjs_.classNames)(
      "k-card-body",
      e.className
    )
  },
  e.children
);
CardBody_t.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardActions.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const CardActions_s = (e) => {
  const t = {
    layout: Enums_n.START,
    orientation: Enums_e.HORIZONTAL,
    ...e
  };
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      style: t.style,
      className: (0,index_mjs_.classNames)(
        "k-card-actions",
        "k-actions",
        t.className,
        `k-actions-${t.layout}`,
        t.orientation !== Enums_e.VERTICAL ? "k-actions-horizontal" : "k-actions-vertical"
      )
    },
    t.children
  );
};
CardActions_s.propTypes = {
  layout: prop_types_index_js_.oneOf(["stretched", "start", "center", "end"]),
  orientation: prop_types_index_js_.oneOf(["horizontal", "vertical"])
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardImage.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardImage_c = (e) => {
  const s = {
    src: "",
    ...e
  };
  return /* @__PURE__ */ index_js_.createElement(
    "img",
    {
      style: s.style,
      className: (0,index_mjs_.classNames)(
        "k-card-media",
        s.className
      ),
      src: s.src,
      alt: s.alt
    }
  );
};
CardImage_c.propTypes = {
  className: prop_types_index_js_.string,
  src: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardSubtitle.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardSubtitle_a = (e) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    style: e.style,
    className: (0,index_mjs_.classNames)(
      "k-card-subtitle",
      e.className
    )
  },
  e.children
);
CardSubtitle_a.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/CardFooter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const CardFooter_a = (e) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    style: e.style,
    className: (0,index_mjs_.classNames)(
      "k-card-footer",
      e.className
    )
  },
  e.children
);
CardFooter_a.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/card/Avatar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const Avatar_n = (l) => {
  const e = {
    type: Enums_E.TEXT,
    size: "medium",
    rounded: "full",
    fillMode: "solid",
    themeColor: "primary",
    ...l
  };
  return (0,index_mjs_.validatePackage)(package_metadata_e), /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      style: e.style,
      className: (0,index_mjs_.classNames)(
        "k-avatar",
        {
          "k-avatar-bordered": e.border,
          [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[e.rounded] || e.rounded}`]: e.rounded,
          [`k-avatar-${index_mjs_.kendoThemeMaps.sizeMap[e.size] || e.size}`]: e.size,
          [`k-avatar-${e.fillMode}`]: e.fillMode,
          [`k-avatar-${e.fillMode}-${e.themeColor}`]: !!(e.fillMode && e.themeColor)
        },
        e.className
      )
    },
    /* @__PURE__ */ index_js_.createElement("span", { className: `k-avatar-${e.type}` }, e.children)
  );
};
Avatar_n.propTypes = {
  className: prop_types_index_js_.string,
  type: prop_types_index_js_.oneOf(["text", "image", "icon"]),
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "outline"]),
  /* eslint-disable max-len */
  themeColor: prop_types_index_js_.oneOf([null, "base", "dark", "error", "info", "inverse", "inverse", "light", "primary", "secondary", "success", "tertiary", "warning"])
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/drawer/context/DrawerContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const DrawerContext_e = {
  animation: !0,
  expanded: !1,
  mode: "overlay",
  position: "start",
  mini: !1,
  dir: "ltr",
  width: 240,
  miniWidth: 50
}, DrawerContext_i = index_js_.createContext(DrawerContext_e);


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/drawer/DrawerItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const DrawerItem_d = index_js_.forwardRef((s, u) => {
  const {
    className: p,
    style: f,
    text: o,
    icon: n,
    svgIcon: c,
    separator: b,
    disabled: a,
    selected: I,
    onSelect: l,
    index: m,
    tabIndex: x,
    children: k,
    ...g
  } = s, { expanded: N, mini: w, item: C } = index_js_.useContext(DrawerContext_i), r = index_js_.useRef(null), i = index_js_.useCallback(
    () => {
      r.current && r.current.focus();
    },
    []
  );
  index_js_.useImperativeHandle(u, () => ({
    element: r.current,
    focus: i,
    props: s
  }));
  const y = (0,index_mjs_.classNames)(
    "k-drawer-item",
    {
      "k-selected": I,
      "k-disabled": a
    },
    p
  ), E = index_js_.useCallback(
    (v) => {
      if (l && !a) {
        const R = {
          element: r.current,
          focus: i,
          props: s
        };
        l(R, m, v);
      }
    },
    [l, m, a]
  ), h = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, (n || c) && /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { name: n && (0,index_mjs_.toIconName)(n), icon: c }), !N && w ? null : /* @__PURE__ */ index_js_.createElement("span", { className: "k-item-text" }, o));
  return b ? /* @__PURE__ */ index_js_.createElement("li", { className: "k-drawer-item k-drawer-separator", role: "separator" }) : /* @__PURE__ */ index_js_.createElement(
    "li",
    {
      ref: r,
      className: y,
      style: f,
      role: "menuitem",
      "aria-label": o,
      "aria-disabled": a,
      onClick: E,
      tabIndex: (0,index_mjs_.getTabIndex)(x, a),
      ...g
    },
    C ? k : h
  );
});
DrawerItem_d.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  text: prop_types_index_js_.string,
  icon: prop_types_index_js_.string,
  svgIcon: index_mjs_.svgIconPropType,
  separator: prop_types_index_js_.bool,
  selected: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  targetItem: prop_types_index_js_.any
};
DrawerItem_d.displayName = "KendoDrawerItem";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/drawer/DrawerNavigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const z = 240, G = 50, J = { type: "slide", duration: 200 }, DrawerNavigation_Q = { type: "slide", duration: 0 }, DrawerNavigation_h = index_js_.forwardRef((I, T) => {
  const { children: b, className: D, style: m } = I;
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const E = (0,index_mjs_.shouldShowValidationUI)(package_metadata_e), {
    animation: l,
    expanded: s,
    mode: o,
    position: e,
    onOverlayClick: W,
    mini: r,
    dir: c,
    width: d,
    miniWidth: u,
    items: p,
    item: g,
    onSelect: x
  } = index_js_.useContext(DrawerContext_i), i = index_js_.useRef(null), A = index_js_.useCallback(
    () => {
      i.current && i.current.focus();
    },
    []
  ), t = typeof l != "boolean" ? l : l === !1 ? DrawerNavigation_Q : J, y = d || z, f = u || G;
  index_js_.useImperativeHandle(T, () => ({
    element: i.current,
    focus: A
  }));
  const O = index_js_.useMemo(
    () => "k-widget k-drawer " + (0,index_mjs_.classNames)(
      {
        "k-drawer-start": e === "start",
        "k-drawer-end": e === "end"
      },
      D
    ),
    [e]
  ), C = {
    opacity: 1,
    flexBasis: y,
    WebkitTransition: "all " + (t && t.duration) + "ms",
    /* Safari */
    transition: "all " + (t && t.duration) + "ms"
  }, M = {
    opacity: 1,
    transform: "translateX(0px)",
    WebkitTransition: "all " + (t && t.duration) + "ms",
    /* Safari */
    transition: "all " + (t && t.duration) + "ms"
  }, P = {
    opacity: r ? 1 : 0,
    flexBasis: r ? f : 0,
    WebkitTransition: "all " + (t && t.duration) + "ms",
    /* Safari */
    transition: "all " + (t && t.duration) + "ms"
  }, _ = {
    opacity: 0,
    transform: "translateX(-100%)",
    WebkitTransition: "all " + (t && t.duration) + "ms",
    /* Safari */
    transition: "all " + (t && t.duration) + "ms"
  }, R = {
    opacity: 0,
    transform: "translateX(100%)",
    WebkitTransition: "all " + (t && t.duration) + "ms",
    /* Safari */
    transition: "all " + (t && t.duration) + "ms"
  }, w = {
    transform: "translateX(0%)",
    WebkitTransitionDuration: (t && t.duration) + "ms",
    /* Safari */
    transitionDuration: (t && t.duration) + "ms"
  }, X = s ? o === "push" ? C : M : o === "push" ? P : c === "ltr" && e === "start" || c === "rtl" && e === "end" ? r ? w : _ : r ? w : R, F = p && /* @__PURE__ */ index_js_.createElement(
    "ul",
    {
      className: "k-drawer-items",
      role: "menubar",
      "aria-label": "drawer-list",
      "aria-expanded": s
    },
    p.map(
      (L, v) => {
        const U = {
          index: v,
          ...L,
          onSelect: x
        }, H = g || DrawerItem_d;
        return /* @__PURE__ */ index_js_.createElement(H, { key: v, ...U });
      }
    )
  ), k = /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      style: t ? { ...X, ...m } : m,
      className: O,
      ref: i
    },
    /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-drawer-wrapper",
        style: !s && r && o === "overlay" ? { width: f } : { width: y }
      },
      F || b
    ),
    E && /* @__PURE__ */ index_js_.createElement(index_mjs_.WatermarkOverlay, null)
  );
  return o === "overlay" ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, s && /* @__PURE__ */ index_js_.createElement("div", { className: "k-overlay", onClick: W }), k) : k;
});
DrawerNavigation_h.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  item: prop_types_index_js_.any,
  tabIndex: prop_types_index_js_.number
};
DrawerNavigation_h.displayName = "KendoDrawerNavigation";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/drawer/Drawer.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const Drawer_s = index_js_.forwardRef((l, u) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const {
    expanded: d,
    mode: n,
    position: p,
    className: f,
    children: v,
    style: w,
    animation: y,
    mini: m,
    width: h,
    miniWidth: b,
    items: a,
    item: k,
    tabIndex: g,
    onOverlayClick: x,
    onSelect: i
  } = l, r = index_js_.useRef(null), E = index_js_.useCallback(
    () => {
      r.current && r.current.focus();
    },
    []
  );
  index_js_.useImperativeHandle(u, () => ({
    element: r.current,
    focus: E
  }));
  const N = index_js_.useCallback(
    (D, P, o) => {
      if (a && i) {
        const R = {
          itemTarget: D,
          itemIndex: P,
          syntheticEvent: o,
          nativeEvent: o && o.nativeEvent,
          target: void 0
        };
        i.call(void 0, R);
      }
    },
    [a, i]
  ), c = (0,index_mjs_.useDir)(r, l.dir), C = (0,index_mjs_.classNames)(
    {
      "k-drawer-container": !0,
      "k-drawer-expanded": d,
      "k-drawer-overlay": n === "overlay",
      "k-drawer-push": n === "push",
      "k-drawer-mini": m
    },
    f
  );
  return /* @__PURE__ */ index_js_.createElement(
    DrawerContext_i.Provider,
    {
      value: {
        animation: y,
        expanded: d,
        mode: n,
        position: p,
        mini: m,
        dir: c,
        items: a,
        item: k,
        width: h,
        miniWidth: b,
        onOverlayClick: x,
        onSelect: N
      }
    },
    /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: C,
        ref: r,
        dir: c,
        style: w,
        tabIndex: g
      },
      a && /* @__PURE__ */ index_js_.createElement(DrawerNavigation_h, null),
      v
    )
  );
});
Drawer_s.propTypes = {
  animation: prop_types_index_js_.any,
  expanded: prop_types_index_js_.bool,
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  mode: prop_types_index_js_.string,
  position: prop_types_index_js_.string,
  mini: prop_types_index_js_.bool,
  style: prop_types_index_js_.object,
  tabIndex: prop_types_index_js_.number,
  width: prop_types_index_js_.number,
  miniWidth: prop_types_index_js_.number,
  selected: prop_types_index_js_.number,
  onSelect: prop_types_index_js_.func,
  onOverlayClick: prop_types_index_js_.func
};
const H = {
  animation: !0,
  expanded: !1,
  mode: "overlay",
  position: "start",
  mini: !1,
  dir: "ltr",
  width: 240,
  miniWidth: 50
};
Drawer_s.defaultProps = H;
Drawer_s.displayName = "KendoDrawer";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/drawer/DrawerContent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const DrawerContent_s = index_js_.forwardRef((n, a) => {
  const { children: o, className: c, style: l } = n, r = index_js_.useRef(null);
  index_js_.useImperativeHandle(a, () => ({
    element: r.current
  }));
  const m = (0,index_mjs_.classNames)(
    {
      "k-drawer-content": !0
    },
    c
  );
  return /* @__PURE__ */ index_js_.createElement("div", { className: m, style: l, ref: r }, o);
});
DrawerContent_s.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object
};
DrawerContent_s.displayName = "KendoDrawerContent";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stepper/context/StepperContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const StepperContext_t = {
  linear: !1,
  mode: "steps",
  value: 0
}, StepperContext_o = index_js_.createContext(StepperContext_t);


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stepper/contants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const contants_A = 400, contants_N = 0;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stepper/messages/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const stepper_messages_e = "stepper.optionalText", messages_o = "stepper.progBarAriaLabel", messages_r = {
  [stepper_messages_e]: "(Optional)",
  [messages_o]: "progressbar"
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stepper/Step.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";








const Step_g = index_js_.forwardRef((R, V) => {
  const {
    // content
    children: z,
    className: E,
    current: p,
    disabled: n,
    focused: d,
    icon: i,
    svgIcon: h,
    index: s,
    isValid: t,
    label: r,
    optional: u,
    style: C,
    tabIndex: y,
    text: S,
    ...D
  } = R, {
    animationDuration: k,
    isVertical: b,
    item: H,
    linear: P,
    mode: F,
    numOfSteps: o,
    value: c,
    onChange: f,
    onFocus: I,
    successIcon: _,
    errorIcon: w,
    successSVGIcon: B,
    errorSVGIcon: G
  } = index_js_.useContext(StepperContext_o), m = index_js_.useRef(null), A = index_js_.useCallback(
    () => {
      m.current && (0,index_mjs_.focusFirstFocusableChild)(m.current);
    },
    []
  ), v = index_js_.useCallback(
    () => ({
      element: m.current,
      focus: A
    }),
    [A]
  );
  index_js_.useImperativeHandle(V, v);
  const N = !P || s === c - 1 || s === c || s === c + 1, M = F === "labels" || !!i && !!r, U = (0,kendo_react_intl_index_mjs_.useLocalization)(), W = ((l) => U.toLanguageString(l, messages_r[l]))(stepper_messages_e), $ = typeof k == "number" ? k : k !== !1 ? contants_A : contants_N, j = index_js_.useCallback(
    (l) => {
      f && !n && (0,index_mjs_.dispatchEvent)(
        f,
        l,
        v(),
        { value: s }
      );
    },
    [f, c, n]
  ), K = index_js_.useCallback(
    (l) => {
      I && !n && (0,index_mjs_.dispatchEvent)(
        I,
        l,
        v(),
        void 0
      );
    },
    [I, n]
  ), q = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-step",
      {
        "k-step-first": s === 0,
        "k-step-last": o && s === o - 1,
        "k-step-done": s < c,
        "k-step-current": p,
        "k-step-optional": u,
        "k-step-error": t !== void 0 && !t,
        "k-step-success": t
      },
      {
        "k-disabled": n,
        "k-focus": d
      },
      E
    ),
    [s, o, c, p, u, n, d, t, E]
  ), J = index_js_.useMemo(
    () => ({
      maxWidth: b ? void 0 : `calc(100% / ${o})`,
      maxHeight: b ? `calc(100% / ${o})` : void 0,
      pointerEvents: N ? void 0 : "none",
      ...C
    }),
    [b, o, C, N]
  ), T = t ? _ : w, x = T ? /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      className: "k-step-indicator-icon " + T,
      "aria-hidden": "true"
    }
  ) : /* @__PURE__ */ index_js_.createElement(
    index_mjs_.IconWrap,
    {
      className: "k-step-indicator-icon",
      name: t ? "check-circle" : "exclamation-circle",
      icon: t ? B || index_es_js_.checkOutlineIcon : G || index_es_js_.exclamationCircleIcon
    }
  ), Q = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, F !== "labels" ? /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      className: "k-step-indicator",
      "aria-hidden": !0,
      style: { transitionDuration: $ + "ms" }
    },
    i || h ? !M && t !== void 0 ? x : /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { className: "k-step-indicator-icon", name: i && (0,index_mjs_.toIconName)(i), icon: h }) : t !== void 0 ? x : /* @__PURE__ */ index_js_.createElement("span", { className: "k-step-indicator-text" }, S || s + 1)
  ) : null), X = /* @__PURE__ */ index_js_.createElement("span", { className: "k-step-label" }, r && /* @__PURE__ */ index_js_.createElement("span", { className: "k-step-text" }, r), M && t !== void 0 && x, u && /* @__PURE__ */ index_js_.createElement("span", { className: "k-step-label-optional" }, W)), Y = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, Q, X);
  return /* @__PURE__ */ index_js_.createElement(
    "li",
    {
      ref: m,
      className: q,
      style: J,
      ...D
    },
    /* @__PURE__ */ index_js_.createElement(
      "a",
      {
        className: "k-step-link",
        title: r || void 0,
        onClick: j,
        onFocus: K,
        tabIndex: y || (d ? 0 : -1),
        "aria-current": p,
        "aria-disabled": n || !N || void 0,
        "aria-invalid": t !== void 0 && !t || void 0
      },
      H ? z : Y
    )
  );
});
Step_g.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  // content: PropTypes.any,
  current: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  icon: prop_types_index_js_.string,
  index: prop_types_index_js_.number,
  isValid: prop_types_index_js_.bool,
  label: prop_types_index_js_.string,
  optional: prop_types_index_js_.bool,
  style: prop_types_index_js_.object,
  tabIndex: prop_types_index_js_.number,
  text: prop_types_index_js_.string
};
const me = {
  tabIndex: 0
};
Step_g.defaultProps = me;
Step_g.displayName = "KendoStep";


;// ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/hooks/useAnimation.js

/** @hidden */
var useAnimation = function (config, deps) {
    var offset = index_js_.useRef(0);
    var mount = index_js_.useRef(false);
    var animationFrame = index_js_.useRef();
    var animate = function (transition) {
        var duration = transition.duration;
        var start;
        var progress;
        var skip = offset.current && 1 - offset.current;
        if (transition.onStart) {
            transition.onStart();
        }
        var frame = function (timestamp) {
            if (!start) {
                start = timestamp;
            }
            progress = timestamp - start + 1;
            var rate = progress / duration + skip;
            if (rate <= 1) {
                if (transition.onUpdate) {
                    transition.onUpdate(rate);
                }
                animationFrame.current = window.requestAnimationFrame(frame);
                offset.current = rate;
            }
            else {
                if (transition.onEnd) {
                    transition.onEnd(1);
                }
                offset.current = 0;
            }
        };
        animationFrame.current = window.requestAnimationFrame(frame);
    };
    index_js_.useEffect(function () {
        animate(config);
        return function () {
            if (animationFrame.current) {
                window.cancelAnimationFrame(animationFrame.current);
            }
        };
    }, deps);
    index_js_.useEffect(function () {
        mount.current = true;
    }, []);
};

;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kend_c5a21dadd33613b39f092fff696e4f06/node_modules/@progress/kendo-react-progressbars/common/constants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const A = 1e-5, constants_I = 3, constants_N = 400, constants_t = 0;


;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kend_c5a21dadd33613b39f092fff696e4f06/node_modules/@progress/kendo-react-progressbars/common/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const utils_h = (e) => {
  const t = e.toString().split(".");
  return t.length === 1 ? `${t[0]}` : `${t[0]}.${t[1].substr(0, constants_I)}`;
}, utils_l = (e, t, r) => {
  const n = Math.abs((t - e) / 100);
  return Math.abs((r - e) / n);
}, utils_$ = (e, t, r, n) => {
  const c = Math.max(r, 0.01), u = 100 / c * 100;
  e.current && t.current && (e.current.style.width = n ? "100%" : `${c}%`, t.current.style.width = n ? "100%" : `${u}%`, e.current.style.height = n ? `${c}%` : "100%", t.current.style.height = n ? `${u}%` : "100%");
}, utils_g = (e, t, r) => Math.max((r - e) / (t - e), s);


;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kend_c5a21dadd33613b39f092fff696e4f06/node_modules/@progress/kendo-react-progressbars/progressbar/hooks/usePrevious.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const usePrevious_s = (t) => {
  const e = index_js_.useRef();
  return index_js_.useEffect(() => {
    e.current = t;
  }), e.current;
};


;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kend_c5a21dadd33613b39f092fff696e4f06/node_modules/@progress/kendo-react-progressbars/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const kendo_react_progressbars_package_metadata_e = {
  name: "@progress/kendo-react-progressbars",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846517,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};


;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kend_c5a21dadd33613b39f092fff696e4f06/node_modules/@progress/kendo-react-progressbars/progressbar/ProgressBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";








const ProgressBar_k = index_js_.forwardRef((t, S) => {
  (0,index_mjs_.validatePackage)(kendo_react_progressbars_package_metadata_e);
  const {
    animation: b,
    disabled: g,
    reverse: C = ProgressBar_p.reverse,
    orientation: A,
    labelVisible: T,
    labelPlacement: d,
    max: l = ProgressBar_p.max,
    min: n = ProgressBar_p.min,
    tabIndex: L,
    className: O,
    style: V,
    emptyStyle: h,
    emptyClassName: N,
    progressStyle: w,
    progressClassName: y
  } = t, o = index_js_.useRef(null), i = index_js_.useRef(null), c = index_js_.useRef(null), U = index_js_.useCallback(
    () => {
      o.current && o.current.focus();
    },
    []
  );
  index_js_.useImperativeHandle(
    S,
    () => ({
      element: o.current,
      progressStatusElement: i.current,
      progressStatusWrapElement: c.current,
      focus: U
    })
  );
  const r = t.value || ProgressBar_p.value, m = usePrevious_s(r), P = t.value === null, D = (0,index_mjs_.useRtl)(o, t.dir), s = A === "vertical", M = utils_h(r), _ = {
    value: r
  }, E = T ? t.label ? /* @__PURE__ */ index_js_.createElement("span", { className: "k-progress-status" }, /* @__PURE__ */ index_js_.createElement(t.label, { ..._ })) : /* @__PURE__ */ index_js_.createElement("span", { className: "k-progress-status" }, M) : void 0, j = {
    className: (0,index_mjs_.classNames)(
      "k-progressbar",
      {
        "k-progressbar-horizontal": !s,
        "k-progressbar-vertical": s,
        "k-progressbar-reverse": C,
        "k-progressbar-indeterminate": P,
        "k-disabled": g
      },
      O
    ),
    ref: o,
    dir: D,
    tabIndex: (0,index_mjs_.getTabIndex)(L, g),
    role: "progressbar",
    "aria-label": t.ariaLabel,
    "aria-valuemin": n,
    "aria-valuemax": l,
    "aria-valuenow": P ? void 0 : r,
    "aria-disabled": g,
    style: V
  }, x = (0,index_mjs_.classNames)("k-progress-status-wrap", {
    "k-progress-start": d === "start",
    "k-progress-center": d === "center",
    "k-progress-end": d === "end" || d === void 0
  }), I = typeof b != "boolean" && b !== void 0 ? b.duration : b ? constants_N : constants_t, B = index_js_.useCallback(
    () => {
      const u = utils_l(n, l, m);
      utils_$(i, c, u, s);
    },
    [s, l, n, m]
  ), W = index_js_.useCallback(
    (u) => {
      const F = utils_l(n, l, m + (r - m) * u);
      utils_$(i, c, F, s);
    },
    [n, l, m, r, s]
  ), z = index_js_.useCallback(
    () => {
      const u = utils_l(n, l, r);
      utils_$(i, c, u, s);
    },
    [s, l, n, r]
  );
  return useAnimation(
    {
      duration: I,
      onStart: B,
      onUpdate: W,
      onEnd: z
    },
    [r, I]
  ), /* @__PURE__ */ index_js_.createElement("div", { ...j }, /* @__PURE__ */ index_js_.createElement("span", { className: x + (N ? " " + N : ""), style: h }, E), /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      className: "k-progressbar-value k-selected",
      style: w,
      ref: i
    },
    /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        className: x + (y ? " " + y : ""),
        ref: c
      },
      E
    )
  ));
});
ProgressBar_k.propTypes = {
  animation: prop_types_index_js_.any,
  ariaLabel: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  reverse: prop_types_index_js_.bool,
  label: prop_types_index_js_.any,
  labelVisible: prop_types_index_js_.bool,
  labelPlacement: prop_types_index_js_.oneOf(["start", "center", "end"]),
  max: prop_types_index_js_.number,
  min: prop_types_index_js_.number,
  value: prop_types_index_js_.number,
  tabIndex: prop_types_index_js_.number,
  emptyStyle: prop_types_index_js_.object,
  emptyClassName: prop_types_index_js_.string,
  progressStyle: prop_types_index_js_.object,
  progressClassName: prop_types_index_js_.string
};
const ProgressBar_p = {
  animation: !1,
  min: 0,
  max: 100,
  value: 0,
  disabled: !1,
  reverse: !1,
  labelVisible: !0
};
ProgressBar_k.defaultProps = ProgressBar_p;
ProgressBar_k.displayName = "KendoProgressBar";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stepper/Stepper.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";










const Stepper_E = index_js_.forwardRef((k, V) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const {
    animationDuration: b,
    children: L,
    className: D,
    disabled: p,
    errorIcon: z,
    errorSVGIcon: G,
    item: N,
    items: d,
    linear: m,
    mode: K,
    orientation: y,
    style: R,
    successIcon: _,
    successSVGIcon: B,
    onChange: h,
    onFocus: C
  } = k, H = (0,kendo_react_intl_index_mjs_.useLocalization)().toLanguageString(messages_o, messages_r[messages_o]), g = index_js_.useRef(null), w = index_js_.useCallback(
    () => {
      g.current && (0,index_mjs_.focusFirstFocusableChild)(g.current);
    },
    []
  ), I = index_js_.useCallback(
    () => ({
      element: g.current,
      focus: w
    }),
    [w]
  );
  index_js_.useImperativeHandle(V, I);
  const i = k.value || Stepper_P.value, [f, n] = index_js_.useState(i), c = d ? d.length : 0, a = y === "vertical", S = (0,index_mjs_.useRtl)(g, k.dir), U = typeof b == "number" ? b : b !== !1 ? contants_A : contants_N;
  index_js_.useEffect(() => {
    n(i);
  }, [i]);
  const v = index_js_.useCallback(
    (t, s) => {
      const e = s === i - 1, l = s === i, $ = s === i + 1;
      i !== s && h && !p && (!m || e || l || $) && ((0,index_mjs_.dispatchEvent)(
        h,
        t,
        I(),
        { value: s }
      ), n(s));
    },
    [i, m, h, p, n]
  ), j = index_js_.useCallback(
    (t) => {
      let s = t.value, e = t.syntheticEvent;
      v(e, s);
    },
    [v]
  ), q = index_js_.useCallback(
    (t) => {
      C && !p && (0,index_mjs_.dispatchEvent)(
        C,
        t.syntheticEvent,
        I(),
        void 0
      );
    },
    [C, p]
  ), x = index_js_.useCallback(
    (t) => {
      v(t, f);
    },
    [v, f]
  ), J = index_js_.useCallback(
    (t) => {
      const s = S === "rtl", e = f, l = d.length - 1;
      switch (t.keyCode) {
        case index_mjs_.Keys.left:
          t.preventDefault(), !s && e > 0 && n(e - 1), s && e < l && n(e + 1);
          break;
        case index_mjs_.Keys.right:
          t.preventDefault(), !s && e < l && n(e + 1), s && e > 0 && n(e - 1);
          break;
        case index_mjs_.Keys.up:
          t.preventDefault(), !s && e > 0 && n(e - 1), s && e > 0 && n(e - 1);
          break;
        case index_mjs_.Keys.down:
          t.preventDefault(), !s && e < l && n(e + 1), s && e < l && n(e + 1);
          break;
        case index_mjs_.Keys.home:
          t.preventDefault(), n(0);
          break;
        case index_mjs_.Keys.end:
          t.preventDefault(), n(l);
          break;
        case index_mjs_.Keys.space:
          t.preventDefault();
          break;
        case index_mjs_.Keys.enter:
          t.preventDefault(), d[e].disabled || x(t);
          break;
      }
    },
    [d, n, f, S, x]
  ), Q = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-stepper",
      {
        "k-stepper-linear": m
      },
      D
    ),
    [m, D]
  ), W = index_js_.useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: a ? void 0 : "repeat(" + c * 2 + ", 1fr)",
      gridTemplateRows: a ? "repeat(" + c + ", 1fr)" : void 0,
      ...R
    }),
    [a, c, R]
  ), X = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-step-list",
      {
        "k-step-list-horizontal": !a,
        "k-step-list-vertical": a
      }
    ),
    [a]
  ), Y = index_js_.useMemo(
    () => ({
      gridColumnStart: a ? void 0 : 1,
      gridColumnEnd: a ? void 0 : -1,
      gridRowStart: a ? 1 : void 0,
      gridRowEnd: a ? -1 : void 0
    }),
    [a]
  ), Z = index_js_.useMemo(
    () => ({
      gridColumnStart: a ? void 0 : 2,
      gridColumnEnd: a ? void 0 : c * 2,
      gridRowStart: a ? 1 : void 0,
      gridRowEnd: a ? c : void 0,
      top: a ? 17 : void 0
    }),
    [a, c]
  ), T = d && d.map((t, s) => {
    const e = {
      index: s,
      disabled: p || t.disabled,
      focused: s === f,
      current: s === i,
      ...t
    }, l = N || Step_g;
    return /* @__PURE__ */ index_js_.createElement(l, { key: s, ...e });
  });
  return /* @__PURE__ */ index_js_.createElement(
    StepperContext_o.Provider,
    {
      value: {
        animationDuration: b,
        isVertical: a,
        item: N,
        linear: m,
        mode: K,
        numOfSteps: c,
        value: i,
        successIcon: _,
        successSVGIcon: B,
        errorIcon: z,
        errorSVGIcon: G,
        onChange: j,
        onFocus: q
      }
    },
    /* @__PURE__ */ index_js_.createElement(
      "nav",
      {
        className: Q,
        style: W,
        dir: S,
        onKeyDown: J
      },
      /* @__PURE__ */ index_js_.createElement(
        "ol",
        {
          className: X,
          style: Y
        },
        T || L
      ),
      /* @__PURE__ */ index_js_.createElement(
        ProgressBar_k,
        {
          style: Z,
          animation: { duration: U },
          ariaLabel: H,
          "aria-hidden": !0,
          max: c - 1,
          labelVisible: !1,
          orientation: y,
          reverse: y === "vertical",
          value: i,
          disabled: p,
          tabIndex: -1
        }
      )
    )
  );
});
Stepper_E.propTypes = {
  animationDuration: prop_types_index_js_.oneOfType([prop_types_index_js_.bool, prop_types_index_js_.number]),
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  errorIcon: prop_types_index_js_.string,
  errorSVGIcon: index_mjs_.svgIconPropType,
  item: prop_types_index_js_.any,
  items: prop_types_index_js_.any,
  linear: prop_types_index_js_.bool,
  mode: prop_types_index_js_.oneOf(["steps", "labels"]),
  orientation: prop_types_index_js_.oneOf(["horizontal", "vertical"]),
  style: prop_types_index_js_.object,
  successIcon: prop_types_index_js_.string,
  successSVGIcon: index_mjs_.svgIconPropType,
  value: prop_types_index_js_.number.isRequired,
  onChange: prop_types_index_js_.func,
  onFocus: prop_types_index_js_.func
};
const Stepper_P = {
  value: 0
};
Stepper_E.defaultProps = Stepper_P;
Stepper_E.displayName = "KendoStepper";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/appbar/AppBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const AppBar_l = index_js_.forwardRef((o, m) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const {
    children: d,
    className: r,
    style: u,
    id: f
  } = o, a = index_js_.useRef(null), p = index_js_.useCallback(
    () => {
      a.current && (0,index_mjs_.focusFirstFocusableChild)(a.current);
    },
    []
  ), b = index_js_.useCallback(
    () => ({
      element: a.current,
      focus: p
    }),
    [p]
  );
  index_js_.useImperativeHandle(m, b);
  const k = (0,index_mjs_.useId)(), i = index_js_.useMemo(
    () => o.themeColor || AppBar_c.themeColor,
    [o.themeColor]
  ), n = index_js_.useMemo(
    () => o.position || AppBar_c.position,
    [o.position]
  ), s = index_js_.useMemo(
    () => o.positionMode || AppBar_c.positionMode,
    [o.positionMode]
  ), M = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-appbar",
      {
        "k-appbar-top": n === "top",
        "k-appbar-bottom": n === "bottom",
        "k-appbar-static": s === "static",
        "k-appbar-sticky": s === "sticky",
        "k-appbar-fixed": s === "fixed",
        [`k-appbar-${i}`]: !!i
      },
      r
    ),
    [n, s, i, r]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      className: M,
      style: u,
      id: f || k
    },
    d
  );
});
AppBar_l.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  id: prop_types_index_js_.string,
  themeColor: prop_types_index_js_.string,
  position: prop_types_index_js_.oneOf(["top", "bottom"]),
  positionMode: prop_types_index_js_.oneOf(["static", "sticky", "fixed"])
};
const AppBar_c = {
  themeColor: "light",
  position: "top",
  positionMode: "static"
};
AppBar_l.displayName = "KendoAppBar";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/appbar/AppBarSection.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const AppBarSection_r = index_js_.forwardRef((n, o) => {
  const {
    children: l,
    className: a,
    style: i
  } = n, s = index_js_.useRef(null), c = index_js_.useCallback(
    () => {
      s.current && (0,index_mjs_.focusFirstFocusableChild)(s.current);
    },
    []
  ), m = index_js_.useCallback(
    () => ({
      element: s.current,
      focus: c
    }),
    [c]
  );
  index_js_.useImperativeHandle(o, m);
  const p = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-appbar-section",
      a
    ),
    [a]
  );
  return /* @__PURE__ */ index_js_.createElement("div", { className: p, style: i }, l);
});
AppBarSection_r.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object
};
AppBarSection_r.displayName = "KendoAppBarSection";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/appbar/AppBarSpacer.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const AppBarSpacer_l = index_js_.forwardRef((n, p) => {
  const {
    children: o,
    className: t,
    style: e
  } = n, a = index_js_.useRef(null), c = index_js_.useCallback(
    () => {
      a.current && (0,index_mjs_.focusFirstFocusableChild)(a.current);
    },
    []
  ), i = index_js_.useCallback(
    () => ({
      element: a.current,
      focus: c
    }),
    [c]
  );
  index_js_.useImperativeHandle(p, i);
  const m = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-appbar-spacer",
      {
        "k-appbar-spacer-sized": e && e.width && e.width !== null
      },
      t
    ),
    [t, e]
  ), u = index_js_.useMemo(
    () => ({
      flexBasis: e && e.width ? e.width : void 0
    }),
    [e]
  );
  return /* @__PURE__ */ index_js_.createElement("span", { className: m, style: u }, o);
});
AppBarSpacer_l.propTypes = {
  children: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object
};
AppBarSpacer_l.displayName = "KendoAppBarSpacer";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tilelayout/ResizeHandlers.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const ResizeHandlers_r = (t) => /* @__PURE__ */ index_js_.createElement(
  index_mjs_.Draggable,
  {
    onPress: t.onPress,
    onDrag: (e) => {
      t.onResize(e.event, !1, t.d);
    },
    onRelease: (e) => {
      t.onResize(e.event, !0, t.d);
    }
  },
  /* @__PURE__ */ index_js_.createElement("div", { className: "k-resize-handle k-cursor-" + t.d + "-resize", style: { bottom: 0, right: 0, ...t.style } })
);
class ResizeHandlers_h extends index_js_.Component {
  constructor() {
    super(...arguments), this.handleResize = (e, s, i) => {
      e.originalEvent.preventDefault(), this.props.onResize(e, { end: s, direction: i });
    };
  }
  render() {
    const { resizable: e, onPress: s, rtl: i } = this.props;
    return e ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, e !== "vertical" && /* @__PURE__ */ index_js_.createElement(
      ResizeHandlers_r,
      {
        onPress: s,
        onResize: this.handleResize,
        d: "ew",
        style: i ? { top: 0, width: 9, left: 0, right: "" } : { top: 0, width: 9, right: 0, left: "" }
      }
    ), e !== "horizontal" && /* @__PURE__ */ index_js_.createElement(ResizeHandlers_r, { onPress: s, onResize: this.handleResize, d: "ns", style: { left: 0, height: 9 } }), e === !0 && /* @__PURE__ */ index_js_.createElement(
      ResizeHandlers_r,
      {
        onPress: s,
        onResize: this.handleResize,
        d: i ? "nesw" : "nwse",
        style: i ? { width: 9, height: 9, right: "", left: 0 } : { width: 9, height: 9, right: 0, left: "" }
      }
    )) : null;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tilelayout/InternalTile.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const m = 200, InternalTile_h = class h extends index_js_.Component {
  constructor() {
    super(...arguments), this.state = {
      rtl: !1
    }, this.oldSize = {}, this.draggable = null, this.dragging = !1, this.resizing = !1, this.element = null, this.hintElement = null, this.ignoreDrag = !1, this.pressOffset = { x: 0, y: 0 }, this.pressXY = { x: 0, y: 0 }, this.currentTranslate = { x: 0, y: 0 }, this.preventDataOps = void 0, this.handleResize = (t, e) => {
      if (e.end) {
        this.handleRelease();
        return;
      }
      if (!this.element || !this.hintElement)
        return;
      const i = t.clientX, n = t.clientY;
      this.resizing = !0;
      const a = (e.direction !== "ns" ? i - this.pressXY.x : 0) * (this.state.rtl ? -1 : 1), s = e.direction !== "ew" ? n - this.pressXY.y : 0;
      if (this.dragElement && (this.state.rtl ? this.dragElement.style.marginLeft = -a + "px" : this.dragElement.style.marginRight = -a + "px", this.dragElement.style.height = `calc(100% + ${s}px)`), this.hintElement.classList.add("k-layout-item-hint-resize"), this.preventDataOps)
        return;
      let r = 0, o = 0;
      const d = this.element.getBoundingClientRect();
      a > d.width / this.props.defaultPosition.colSpan / 3 && (r = 1), a < -d.width / this.props.defaultPosition.colSpan / 1.25 && (r = -1), s > d.height / this.props.defaultPosition.rowSpan / 3 && (o = 1), s < -d.height / this.props.defaultPosition.rowSpan / 1.25 && (o = -1), (r !== 0 || o !== 0) && this.props.update(this.props.index, 0, 0, o, r);
    }, this.handlePress = (t) => {
      if (!this.dragElement)
        return;
      if (this.pressXY = {
        x: t.event.clientX,
        y: t.event.clientY
      }, this.ignoreDrag = !1, this.props.ignoreDrag && this.props.ignoreDrag(t.event.originalEvent)) {
        this.ignoreDrag = !0;
        return;
      }
      this.element && this.hintElement && (this.element.style.zIndex = "10", this.hintElement.style.display = "block"), this.dragElement.classList.remove("k-cursor-grab"), this.dragElement.classList.add("k-cursor-grabbing");
      const e = this.dragElement.getBoundingClientRect();
      this.pressOffset = {
        x: t.event.clientX - e.x,
        y: t.event.clientY - e.y
      };
    }, this.handleDrag = (t) => {
      if (this.ignoreDrag)
        return;
      const e = this.dragElement;
      if (t.event.originalEvent.defaultPrevented || !e)
        return;
      this.dragging = !0, t.event.originalEvent.preventDefault();
      const i = e.getBoundingClientRect();
      if (this.currentTranslate = {
        x: t.event.clientX - i.x - this.pressOffset.x + this.currentTranslate.x,
        y: t.event.clientY - i.y - this.pressOffset.y + this.currentTranslate.y
      }, e.style.transform = `translate(${this.currentTranslate.x}px, ${this.currentTranslate.y}px)`, e.style.transition = "transform 0s", this.preventDataOps)
        return;
      let n = 0, a = 0;
      this.currentTranslate.y > 0.7 * i.height / this.props.defaultPosition.rowSpan && (a = 1), this.currentTranslate.y < 0.7 * -i.height / this.props.defaultPosition.rowSpan && (a = -1), this.currentTranslate.x > 0.7 * i.width / this.props.defaultPosition.colSpan && (n = 1), this.currentTranslate.x < 0.7 * -i.width / this.props.defaultPosition.colSpan && (n = -1), this.props.update(this.props.index, a, this.state.rtl ? -n : n, 0, 0);
    }, this.handleRelease = () => {
      this.dragging = this.resizing = !1, this.currentTranslate = { x: 0, y: 0 }, this.element && this.hintElement && (this.element.style.zIndex = "1", this.hintElement.classList.remove("k-layout-item-hint-resize"), this.hintElement.style.display = "none");
      const t = this.dragElement;
      t && (t.style.transform = "translate(0px, 0px)", t.style.transition = `transform ${m}ms cubic-bezier(0.2, 0, 0, 1) 0s`, t.style.marginRight = "0px", t.style.marginLeft = "0px", t.style.height = "100%", t.classList.remove("k-cursor-grabbing"), t.classList.add("k-cursor-grab"));
    };
  }
  get reorderable() {
    return this.props.reorderable !== void 0 ? this.props.reorderable : h.defaultProps.reorderable;
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
    index_mjs_.canUseDOM && clearTimeout && typeof clearTimeout == "function" && (clearTimeout(this.preventDataOps), this.preventDataOps = window.setTimeout(() => {
      this.preventDataOps = void 0;
    }, 200));
    const t = this.props.defaultPosition, e = this.props.resizable !== void 0 ? this.props.resizable : h.defaultProps.resizable, i = {
      gridColumnStart: t.col,
      gridColumnEnd: `span ${t.colSpan}`,
      gridRowStart: t.row,
      gridRowEnd: `span ${t.rowSpan}`,
      outline: "none",
      order: t.order,
      display: "none",
      ...this.props.hintStyle
    }, n = {
      gridColumnStart: t.col,
      gridColumnEnd: `span ${t.colSpan}`,
      gridRowStart: t.row,
      gridRowEnd: `span ${t.rowSpan}`,
      order: t.order
    }, a = /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (s) => {
          this.draggable = s ? { element: s } : null;
        },
        className: (0,index_mjs_.classNames)("k-tilelayout-item k-card", { "k-cursor-grab": this.reorderable }, this.props.className),
        style: { height: "100%", ...n, ...this.props.style }
      },
      this.props.children,
      /* @__PURE__ */ index_js_.createElement(
        ResizeHandlers_h,
        {
          onPress: this.handlePress,
          onResize: this.handleResize,
          resizable: e,
          rtl: this.state.rtl
        }
      )
    );
    return /* @__PURE__ */ index_js_.createElement("div", { ref: (s) => {
      this.element = s;
    }, style: n }, /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (s) => {
          this.hintElement = s;
        },
        style: { position: "absolute", ...i },
        className: (0,index_mjs_.classNames)("k-layout-item-hint", this.props.hintClassName)
      }
    ), /* @__PURE__ */ index_js_.createElement(
      index_mjs_.Draggable,
      {
        ref: (s) => {
          this.draggable = s;
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
  getSnapshotBeforeUpdate(t) {
    return this.oldSize = {}, this.dragElement && (this.oldSize = this.dragElement.getBoundingClientRect()), null;
  }
  /**
   * @hidden
   */
  componentDidUpdate(t) {
    const e = this.dragElement;
    if (!e)
      return;
    const i = e.getBoundingClientRect(), n = this.oldSize;
    if (this.resizing) {
      const r = i.width - n.width;
      if (this.state.rtl) {
        const c = parseFloat(e.style.marginLeft || "0");
        e.style.marginLeft = c - r + "px";
      } else {
        const c = parseFloat(e.style.marginRight || "0");
        e.style.marginRight = c + r + "px";
      }
      this.pressXY.x += this.state.rtl ? -r : r;
      const o = i.height - n.height, d = parseFloat(e.style.height.substring(12));
      e.style.height = `calc(100% + ${d + o}px)`, this.pressXY.y += o;
    }
    const a = n.left - i.left, s = n.top - i.top;
    if (!(a === 0 && s === 0)) {
      if (this.dragging) {
        (t.defaultPosition.order !== this.props.defaultPosition.order || t.defaultPosition.col !== this.props.defaultPosition.col) && (this.currentTranslate.x = 0, this.currentTranslate.y = 0, e.style.transform = "");
        return;
      }
      Math.abs(s) < 15 && Math.abs(a) < 15 || requestAnimationFrame(() => {
        const r = this.element;
        r && (r.style.transform = `translate(${a}px, ${s}px)`, r.style.transition = "transform 0s", requestAnimationFrame(() => {
          r.style.transform = "", r.style.transition = `transform ${m}ms cubic-bezier(0.2, 0, 0, 1) 0s`;
        }));
      });
    }
  }
};
InternalTile_h.propTypes = {
  defaultPosition: prop_types_index_js_.object.isRequired,
  style: prop_types_index_js_.object,
  className: prop_types_index_js_.string,
  hintStyle: prop_types_index_js_.object,
  hintClassName: prop_types_index_js_.string,
  header: prop_types_index_js_.any,
  body: prop_types_index_js_.any,
  item: prop_types_index_js_.any,
  resizable: prop_types_index_js_.oneOf(["horizontal", "vertical", !0, !1]),
  reorderable: prop_types_index_js_.bool
}, InternalTile_h.displayName = "KendoTileLayoutItem", InternalTile_h.defaultProps = {
  resizable: !0,
  reorderable: !0
};
let InternalTile_f = InternalTile_h;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/tilelayout/TileLayout.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const TileLayout_O = {
  column: "k-grid-flow-col",
  row: "k-grid-flow-row",
  "column dense": "k-grid-flow-col-dense",
  "row dense": "k-grid-flow-row-dense",
  unset: "k-grid-flow-unset"
}, TileLayout_h = class h extends index_js_.Component {
  constructor(a) {
    super(a), this._element = null, this.state = { positions: (this.props.items || []).map((i, o) => Object.assign({ order: o, rowSpan: 1, colSpan: 1 }, i.defaultPosition)) }, this.showLicenseWatermark = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.update = (i, o, s, l = 0, u = 0) => {
      if (o === 0 && s === 0 && !u && !l)
        return;
      let m = !1;
      const c = this.state.positions.map((f) => Object.assign({}, f)), r = c[i], d = c.find((f) => f.order === r.order + o);
      d && d !== r && (r.order += o, d.order += -o, m = !0);
      const e = r.col + s;
      s !== 0 && e >= 1 && e + r.colSpan <= (this.props.columns || 3) + 1 && (r.col = e, m = !0);
      const p = r.colSpan + u;
      u && p >= 1 && p + r.col <= (this.props.columns || 3) + 1 && (r.colSpan = p, m = !0);
      const g = r.rowSpan + l;
      l && g >= 1 && (r.rowSpan = g, m = !0), m && (this.setState({ positions: c }), (0,index_mjs_.dispatchEvent)(this.props.onReposition, {}, this, { value: c }));
    }, (0,index_mjs_.validatePackage)(package_metadata_e), this.showLicenseWatermark = (0,index_mjs_.shouldShowValidationUI)(package_metadata_e);
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
  static getDerivedStateFromProps(a, i) {
    return a.positions ? {
      positions: a.positions.map((o, s) => Object.assign({ order: s, rowSpan: 1, colSpan: 1 }, o))
    } : a.items && (!i.positions || a.items.length !== i.positions.length) ? {
      positions: a.items.map((o, s) => Object.assign({ order: s, rowSpan: 1, colSpan: 1 }, o.defaultPosition))
    } : null;
  }
  render() {
    const {
      className: a,
      columns: i = 3,
      columnWidth: o = "1fr",
      gap: s,
      rowHeight: l = "1fr",
      style: u,
      autoFlow: m = "column",
      items: c = []
    } = this.props, r = s ? `${typeof s.rows == "number" ? s.rows + "px" : s.rows} ${typeof s.columns == "number" ? s.columns + "px" : s.columns}` : 16, d = {
      gridTemplateColumns: `repeat(${i}, minmax(0px, ${typeof o == "number" ? o + "px" : o}))`,
      gridAutoRows: `minmax(0px, ${typeof l == "number" ? l + "px" : l})`,
      gap: r,
      padding: r,
      ...u
    };
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (e) => {
          this._element = e;
        },
        dir: this.props.dir,
        className: (0,index_mjs_.classNames)("k-tilelayout k-pos-relative", TileLayout_O[m], a),
        style: d,
        id: this.props.id,
        children: c.map(
          (e, p) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, { key: this.props.dataItemKey ? (0,index_mjs_.getter)(this.props.dataItemKey)(e) : p }, /* @__PURE__ */ index_js_.createElement(
            InternalTile_f,
            {
              update: this.update,
              defaultPosition: this.state.positions[p],
              index: p,
              resizable: e.resizable,
              reorderable: e.reorderable,
              style: e.style,
              className: e.className,
              hintClassName: e.hintClassName,
              hintStyle: e.hintStyle,
              ignoreDrag: this.props.ignoreDrag
            },
            e.item ? e.item : /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-tilelayout-item-header k-card-header" }, index_js_.isValidElement(e.header) ? e.header : /* @__PURE__ */ index_js_.createElement("h5", { className: "k-card-title" }, e.header)), /* @__PURE__ */ index_js_.createElement("div", { className: "k-tilelayout-item-body k-card-body" }, e.body))
          ), this.showLicenseWatermark && /* @__PURE__ */ index_js_.createElement(index_mjs_.WatermarkOverlay, null))
        )
      }
    );
  }
};
TileLayout_h.propTypes = {
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  className: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  gap: prop_types_index_js_.object,
  columns: prop_types_index_js_.number,
  columnWidth: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
  rowHeight: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
  dataItemKey: prop_types_index_js_.string,
  items: prop_types_index_js_.array,
  positions: prop_types_index_js_.array,
  autoFlow: prop_types_index_js_.oneOf(["column", "row", "column dense", "row dense", "unset"]),
  onReposition: prop_types_index_js_.func,
  ignoreDrag: prop_types_index_js_.func
}, TileLayout_h.displayName = "KendoTileLayout";
let TileLayout_w = TileLayout_h;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/bottomnavigation/models/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const utils_t = {
  vertical: "k-bottom-nav-item-flow-vertical",
  horizontal: "k-bottom-nav-item-flow-horizontal"
}, utils_o = {
  fixed: "k-pos-fixed",
  sticky: "k-pos-sticky"
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/bottomnavigation/BottomNavigationItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const BottomNavigationItem_i = index_js_.forwardRef((m, g) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const r = index_js_.useRef(null);
  index_js_.useImperativeHandle(
    g,
    () => ({
      element: r.current
    })
  );
  const {
    className: d,
    style: k,
    selected: n,
    disabled: a,
    item: x,
    render: y,
    dataItem: N,
    icon: p,
    svgIcon: b,
    text: u,
    id: C,
    onSelect: s,
    onKeyDown: l,
    index: o,
    tabIndex: E
  } = m, P = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-bottom-nav-item",
      {
        "k-selected": n,
        "k-disabled": a
      },
      d
    ),
    [n, a, d]
  ), R = index_js_.useCallback(
    (c) => {
      s && o !== void 0 && !a && s(c, o);
    },
    [s, o, a]
  ), w = index_js_.useCallback(
    (c) => {
      l && o !== void 0 && !a && l(c, o);
    },
    [l, o, a]
  ), v = y, I = x, f = /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      ref: r,
      className: P,
      style: k,
      role: "link",
      id: C,
      tabIndex: E,
      onClick: R,
      onKeyDown: w,
      "aria-current": n,
      "aria-disabled": a
    },
    I ? /* @__PURE__ */ index_js_.createElement(I, { itemIndex: o, item: N }) : /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, (p || b) && /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { className: "k-bottom-nav-item-icon", name: p, icon: b, size: "xlarge" }), u && /* @__PURE__ */ index_js_.createElement("span", { className: "k-bottom-nav-item-text", style: { userSelect: "none" } }, u))
  );
  return v !== void 0 ? v.call(void 0, f, m) : f;
}), M = {
  tabIndex: 0
};
BottomNavigationItem_i.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  id: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  selected: prop_types_index_js_.bool,
  icon: prop_types_index_js_.string,
  svgIcon: index_mjs_.svgIconPropType,
  text: prop_types_index_js_.string,
  tabIndex: prop_types_index_js_.number
};
BottomNavigationItem_i.defaultProps = M;
BottomNavigationItem_i.displayName = "KendoReactBottomNavigationItem";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/bottomnavigation/BottomNavigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const BottomNavigation_b = index_js_.forwardRef((a, I) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const s = index_js_.useRef(null), v = index_js_.useCallback(
    () => {
      s.current && (0,index_mjs_.focusFirstFocusableChild)(s.current);
    },
    []
  ), c = index_js_.useCallback(
    () => ({
      element: s.current,
      focus: v
    }),
    [v]
  );
  index_js_.useImperativeHandle(I, c);
  const {
    positionMode: k = BottomNavigation_i.positionMode,
    itemFlow: C = BottomNavigation_i.itemFlow,
    border: M = BottomNavigation_i.border,
    className: y,
    items: r,
    item: E,
    itemRender: N,
    disabled: m,
    style: O,
    id: h,
    onSelect: f,
    onKeyDown: g
  } = a, S = (0,index_mjs_.useId)(), F = (0,index_mjs_.useDir)(s, a.dir), n = index_js_.useMemo(
    () => a.fillMode === null || a.fill === null ? null : a.fill || a.fillMode || BottomNavigation_i.fillMode,
    [a.fillMode, a.fill]
  ), u = index_js_.useMemo(
    () => a.themeColor || BottomNavigation_i.themeColor,
    [a.themeColor]
  ), D = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-bottom-nav",
      utils_o[k],
      utils_t[C],
      {
        [`k-bottom-nav-${n}`]: n,
        [`k-bottom-nav-${n}-${u}`]: !!(n && u),
        "k-bottom-nav-border": M,
        "k-disabled": m
      },
      y
    ),
    [k, u, n, C, M, m, y]
  ), d = index_js_.useCallback(
    (e, l) => {
      r && !r[l].disabled && f && (0,index_mjs_.dispatchEvent)(
        f,
        e,
        c(),
        {
          itemTarget: r[l],
          itemIndex: l
        }
      );
    },
    [r, f]
  ), R = index_js_.useCallback(
    (e, l) => {
      d(e, l);
    },
    [d]
  ), K = index_js_.useCallback(
    (e, l) => {
      switch (e.keyCode) {
        case index_mjs_.Keys.enter:
        case index_mjs_.Keys.space:
          d(e, l), e.preventDefault();
          break;
      }
      (0,index_mjs_.dispatchEvent)(
        g,
        e,
        c(),
        void 0
      );
    },
    [d, g]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "nav",
    {
      ref: s,
      className: D,
      style: O,
      id: h || S,
      dir: F
    },
    r && r.map((e, l) => /* @__PURE__ */ index_js_.createElement(
      BottomNavigationItem_i,
      {
        ...e,
        key: l,
        index: l,
        id: `${h || S}-${l}`,
        disabled: m || e.disabled,
        selected: e.selected,
        dataItem: e,
        item: E,
        render: N,
        onSelect: R,
        onKeyDown: K
      }
    ))
  );
}), BottomNavigation_i = {
  themeColor: "primary",
  fillMode: "flat",
  itemFlow: "vertical",
  positionMode: "fixed",
  border: !0
};
BottomNavigation_b.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  id: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  themeColor: prop_types_index_js_.oneOf([
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
  fill: prop_types_index_js_.oneOf(["solid", "flat"]),
  fillMode: prop_types_index_js_.oneOf(["solid", "flat"]),
  itemFlow: prop_types_index_js_.oneOf(["vertical", "horizontal"]),
  border: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  selected: prop_types_index_js_.number,
  onSelect: prop_types_index_js_.func
};
BottomNavigation_b.defaultProps = BottomNavigation_i;
BottomNavigation_b.displayName = "KendoReactBottomNavigation";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/stacklayout/StackLayout.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const StackLayout_c = index_js_.forwardRef((e, g) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const r = index_js_.useRef(null), d = index_js_.useCallback(
    () => ({
      element: r.current
    }),
    []
  );
  index_js_.useImperativeHandle(g, d);
  const { className: m, style: u, id: h, children: k } = e, f = (0,index_mjs_.useId)(), s = index_js_.useMemo(
    () => e.orientation || StackLayout_l.orientation,
    [e.orientation]
  ), t = s === "horizontal", a = index_js_.useMemo(
    () => e.align && e.align.horizontal ? e.align.horizontal : StackLayout_l.hAlign,
    [e.align]
  ), i = index_js_.useMemo(
    () => e.align && e.align.vertical ? e.align.vertical : StackLayout_l.vAlign,
    [e.align]
  ), y = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-stack-layout",
      {
        "k-hstack": s === "horizontal",
        "k-vstack": s === "vertical",
        "k-justify-content-start": t && a === "start" || !t && i === "top",
        "k-justify-content-center": t && a === "center" || !t && i === "middle",
        "k-justify-content-end": t && a === "end" || !t && i === "bottom",
        "k-justify-content-stretch": t && a === "stretch" || !t && i === "stretch",
        "k-align-items-start": !t && a === "start" || t && i === "top",
        "k-align-items-center": !t && a === "center" || t && i === "middle",
        "k-align-items-end": !t && a === "end" || t && i === "bottom",
        "k-align-items-stretch": !t && a === "stretch" || t && i === "stretch"
      },
      m
    ),
    [s, t, a, i, m]
  ), v = {
    gap: `${typeof e.gap == "number" ? e.gap + "px" : e.gap}`,
    ...u
  };
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: r,
      className: y,
      style: v,
      id: h || f
    },
    k
  );
}), StackLayout_l = {
  orientation: "horizontal",
  hAlign: "stretch",
  vAlign: "stretch"
};
StackLayout_c.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  children: prop_types_index_js_.any,
  id: prop_types_index_js_.string,
  orientation: prop_types_index_js_.oneOf(["horizontal", "vertical"]),
  gap: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number]),
  align: prop_types_index_js_.shape({
    vertical: prop_types_index_js_.oneOf(["top", "middle", "bottom", "stretch"]),
    horizontal: prop_types_index_js_.oneOf(["start", "center", "end", "stretch"])
  })
};
StackLayout_c.defaultProps = StackLayout_l;
StackLayout_c.displayName = "KendoReactStackLayout";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/gridlayout/GridLayout.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const GridLayout_r = index_js_.forwardRef((t, g) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const m = index_js_.useRef(null), d = index_js_.useCallback(
    () => ({
      element: m.current
    }),
    []
  );
  index_js_.useImperativeHandle(g, d);
  const { className: c, style: u, id: h, children: y, gap: s } = t, f = (0,index_mjs_.useId)(), n = index_js_.useMemo(
    () => t.align && t.align.horizontal ? t.align.horizontal : GridLayout_o.hAlign,
    [t.align]
  ), l = index_js_.useMemo(
    () => t.align && t.align.vertical ? t.align.vertical : GridLayout_o.vAlign,
    [t.align]
  ), p = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(
      "k-grid-layout",
      {
        "k-justify-items-start": n === "start",
        "k-justify-items-center": n === "center",
        "k-justify-items-end": n === "end",
        "k-justify-items-stretch": n === "stretch",
        "k-align-items-start": l === "top",
        "k-align-items-center": l === "middle",
        "k-align-items-end": l === "bottom",
        "k-align-items-stretch": l === "stretch"
      },
      c
    ),
    [n, l, c]
  ), k = s ? `${typeof s.rows == "number" ? s.rows + "px" : s.rows} ${typeof s.cols == "number" ? s.cols + "px" : s.cols}` : void 0, v = t.rows && t.rows.map((a) => `${typeof a.height == "number" ? a.height + "px" : a.height}`).join(" "), b = t.cols && t.cols.map((a) => `${typeof a.width == "number" ? a.width + "px" : a.width}`).join(" "), w = {
    gap: k,
    gridTemplateColumns: b,
    gridTemplateRows: v,
    ...u
  };
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: m,
      className: p,
      style: w,
      id: h || f
    },
    y
  );
}), GridLayout_o = {
  hAlign: "stretch",
  vAlign: "stretch",
  gap: void 0
};
GridLayout_r.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  children: prop_types_index_js_.any,
  id: prop_types_index_js_.string,
  gap: prop_types_index_js_.shape({
    rows: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number]),
    columns: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number])
  }),
  align: prop_types_index_js_.shape({
    vertical: prop_types_index_js_.oneOf(["top", "middle", "bottom", "stretch"]),
    horizontal: prop_types_index_js_.oneOf(["start", "center", "end", "stretch"])
  })
};
GridLayout_r.defaultProps = GridLayout_o;
GridLayout_r.displayName = "KendoReactGridLayout";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/gridlayout/GridLayoutItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const GridLayoutItem_s = index_js_.forwardRef((n, i) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const a = index_js_.useRef(null), l = index_js_.useCallback(
    () => ({
      element: a.current
    }),
    []
  );
  index_js_.useImperativeHandle(i, l);
  const { className: c, style: m, id: d, children: p, row: u, col: y, rowSpan: r, colSpan: o } = n, f = (0,index_mjs_.useId)(), g = {
    gridArea: `${u || "auto"} / ${y || "auto"} / ${r ? "span " + r : "auto"} / ${o ? "span " + o : "auto"}`,
    ...m
  };
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: a,
      className: c,
      style: g,
      id: d || f
    },
    p
  );
});
GridLayoutItem_s.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  children: prop_types_index_js_.any,
  id: prop_types_index_js_.string
};
GridLayoutItem_s.displayName = "KendoReactGridLayoutItem";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/breadcrumb/BreadcrumbListItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const BreadcrumbListItem_c = index_js_.forwardRef((e, m) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const s = index_js_.useRef(null), r = index_js_.useRef(null), i = index_js_.useCallback(
    () => {
      r.current && r.current.focus();
    },
    [r]
  );
  return index_js_.useImperativeHandle(s, () => ({
    element: r.current,
    focus: i,
    props: e
  })), index_js_.useImperativeHandle(m, () => s.current), /* @__PURE__ */ index_js_.createElement(
    "li",
    {
      ref: r,
      id: e.id,
      style: e.style,
      className: (0,index_mjs_.classNames)(
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
}), BreadcrumbListItem_d = {
  id: prop_types_index_js_.string,
  className: prop_types_index_js_.string,
  children: prop_types_index_js_.any,
  style: prop_types_index_js_.object
};
BreadcrumbListItem_c.displayName = "KendoReactBreadcrumbListItem";
BreadcrumbListItem_c.propTypes = BreadcrumbListItem_d;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/breadcrumb/BreadcrumbDelimiter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const BreadcrumbDelimiter_m = index_js_.forwardRef((e, c) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const a = index_js_.useRef(null), n = index_js_.useRef(null);
  return index_js_.useImperativeHandle(a, () => {
    var i;
    return {
      element: ((i = n.current) == null ? void 0 : i.element) || null,
      props: e
    };
  }), index_js_.useImperativeHandle(c, () => a.current), /* @__PURE__ */ index_js_.createElement(
    index_mjs_.IconWrap,
    {
      ref: n,
      id: e.id,
      "aria-hidden": !0,
      tabIndex: e.tabIndex,
      style: e.style,
      name: e.dir === "rtl" ? "chevron-left" : "chevron-right",
      icon: e.dir === "rtl" ? index_es_js_.chevronLeftIcon : index_es_js_.chevronRightIcon,
      className: "k-breadcrumb-delimiter-icon",
      size: "xsmall"
    }
  );
}), BreadcrumbDelimiter_f = {
  id: prop_types_index_js_.string,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  tabIndex: prop_types_index_js_.number,
  dir: prop_types_index_js_.string
};
BreadcrumbDelimiter_m.displayName = "KendoReactBreadcrumbDelimiter";
BreadcrumbDelimiter_m.propTypes = BreadcrumbDelimiter_f;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/breadcrumb/BreadcrumbLink.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const BreadcrumbLink_r = index_js_.forwardRef((e, s) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const c = index_js_.useRef(null), n = index_js_.useRef(null), m = index_js_.useCallback(
    () => {
      n.current && n.current.focus();
    },
    [n]
  );
  index_js_.useImperativeHandle(c, () => ({
    element: n.current,
    focus: m,
    props: e
  })), index_js_.useImperativeHandle(s, () => c.current);
  const u = index_js_.useCallback(
    (i) => {
      e.id && (0,index_mjs_.dispatchEvent)(e.onItemSelect, i, i.target, { id: e.id });
    },
    [e.onItemSelect]
  ), b = index_js_.useCallback(
    (i) => {
      e.id && (0,index_mjs_.dispatchEvent)(e.onKeyDown, i, i.target, { id: e.id });
    },
    [e.onKeyDown]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      "aria-current": e.ariaCurrent ? e.ariaCurrent : e.isLast,
      role: "link",
      id: e.id,
      ref: n,
      style: e.style,
      dir: (0,index_mjs_.useDir)(n, e.dir),
      tabIndex: (0,index_mjs_.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,index_mjs_.classNames)(
        {
          "k-breadcrumb-root-link": e.isFirst,
          "k-breadcrumb-link": !e.isFirst,
          "k-breadcrumb-icontext-link": e.iconClass !== void 0 && e.text,
          "k-breadcrumb-icon-link": e.iconClass !== void 0 && !e.text,
          "k-disabled": e.disabled
        }
      ),
      onClick: u,
      onKeyDown: b
    },
    e.iconClass ? /* @__PURE__ */ index_js_.createElement("span", { className: (0,index_mjs_.classNames)(
      "k-icon",
      e.iconClass
    ) }) : e.icon ? e.icon : "",
    e.text && /* @__PURE__ */ index_js_.createElement("span", { className: "k-breadcrumb-item-text" }, e.text)
  );
}), BreadcrumbLink_x = {
  id: prop_types_index_js_.string,
  className: prop_types_index_js_.string,
  tabIndex: prop_types_index_js_.number,
  style: prop_types_index_js_.object,
  dir: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  text: prop_types_index_js_.string,
  icon: prop_types_index_js_.node,
  iconClass: prop_types_index_js_.string,
  onClick: prop_types_index_js_.func,
  ariaCurrent: prop_types_index_js_.bool
};
BreadcrumbLink_r.displayName = "KendoReactBreadcrumbLink";
BreadcrumbLink_r.propTypes = BreadcrumbLink_x;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/breadcrumb/BreadcrumbOrderedList.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const BreadcrumbOrderedList_c = index_js_.forwardRef((e, m) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const r = index_js_.useRef(null), d = index_js_.useRef(null);
  return index_js_.useImperativeHandle(r, () => ({
    element: d.current,
    props: e
  })), index_js_.useImperativeHandle(m, () => r.current), /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, e.rootItem ? /* @__PURE__ */ index_js_.createElement(
    "ol",
    {
      id: e.id,
      ref: d,
      style: e.style,
      dir: (0,index_mjs_.useDir)(d, e.dir),
      tabIndex: (0,index_mjs_.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,index_mjs_.classNames)(
        "k-breadcrumb-root-item-container",
        {
          "k-disabled": e.disabled
        },
        e.className
      )
    },
    e.children
  ) : /* @__PURE__ */ index_js_.createElement(
    "ol",
    {
      id: e.id,
      ref: d,
      style: e.style,
      dir: (0,index_mjs_.useDir)(d, e.dir),
      tabIndex: (0,index_mjs_.getTabIndex)(e.tabIndex, e.disabled),
      className: (0,index_mjs_.classNames)(
        "k-breadcrumb-container !k-flex-wrap",
        {
          "k-disabled": e.disabled
        },
        e.className
      )
    },
    e.children
  ));
}), BreadcrumbOrderedList_u = {
  id: prop_types_index_js_.string,
  className: prop_types_index_js_.string,
  children: prop_types_index_js_.element,
  tabIndex: prop_types_index_js_.number,
  style: prop_types_index_js_.object,
  dir: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool
};
BreadcrumbOrderedList_c.displayName = "KendoReactBreadcrumbOrderedList";
BreadcrumbOrderedList_c.propTypes = BreadcrumbOrderedList_u;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/breadcrumb/Breadcrumb.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";








const Breadcrumb_f = index_js_.forwardRef((e, E) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const c = index_js_.useRef(null), n = index_js_.useRef(null), g = index_js_.useMemo(
    () => e.breadcrumbOrderedList || BreadcrumbOrderedList_c,
    [e.breadcrumbOrderedList]
  ), F = index_js_.useMemo(
    () => e.breadcrumbListItem || BreadcrumbListItem_c,
    [e.breadcrumbListItem]
  ), S = index_js_.useMemo(
    () => e.breadcrumbDelimiter || BreadcrumbDelimiter_m,
    [e.breadcrumbDelimiter]
  ), L = index_js_.useMemo(
    () => e.breadcrumbLink || BreadcrumbLink_r,
    [e.breadcrumbLink]
  ), D = index_js_.useCallback(
    () => {
      n.current && n.current.focus();
    },
    [n]
  ), h = index_js_.useMemo(
    () => e.disabled || !1,
    [e.disabled]
  );
  index_js_.useImperativeHandle(c, () => ({
    element: n.current,
    focus: D,
    props: e
  })), index_js_.useImperativeHandle(E, () => c.current);
  const u = (0,index_mjs_.useDir)(n, e.dir), y = (t) => {
    c.current && (0,index_mjs_.dispatchEvent)(e.onItemSelect, t, t.target, { id: t.target.id });
  }, I = (t) => {
    c.current && (0,index_mjs_.dispatchEvent)(e.onKeyDown, t, t.target, { id: t.target.id });
  }, k = e.valueField || Breadcrumb_s.valueField, C = e.iconField || Breadcrumb_s.iconField, m = e.iconClassField || Breadcrumb_s.iconClassField, o = e.textField || Breadcrumb_s.textField, b = e.size || "medium";
  return /* @__PURE__ */ index_js_.createElement(
    "nav",
    {
      "aria-label": e.ariaLabel,
      id: e.id,
      style: e.style,
      ref: n,
      dir: u,
      className: (0,index_mjs_.classNames)(
        "k-breadcrumb k-breadcrumb-wrap",
        {
          "k-rtl": u === "rtl",
          "k-disabled": h,
          "k-breadcrumb-md": !e.size,
          [`k-breadcrumb-${index_mjs_.kendoThemeMaps.sizeMap[b] || b}`]: b
        },
        e.className
      )
    },
    /* @__PURE__ */ index_js_.createElement(g, { rootItem: !0 }, /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, e.data.map((t, a, l) => {
      const d = t[k];
      if (a === 0)
        return /* @__PURE__ */ index_js_.createElement(
          F,
          {
            key: d,
            isFirstItem: !0,
            isLastItem: l.length - 1 === a
          },
          /* @__PURE__ */ index_js_.createElement(
            L,
            {
              isLast: l.length - 1 === a,
              isFirst: !0,
              id: String(d),
              icon: t[C] || void 0,
              iconClass: t[m] ? String(t[m]) : void 0,
              text: t[o] ? String(t[o]) : void 0,
              disabled: t.disabled || !1,
              onItemSelect: y,
              onKeyDown: I,
              ...e
            }
          )
        );
    }))),
    /* @__PURE__ */ index_js_.createElement(g, { rootItem: !1 }, /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, e.data.map((t, a, l) => {
      const d = t[k];
      if (a !== 0)
        return /* @__PURE__ */ index_js_.createElement(
          F,
          {
            key: d,
            isFirstItem: !1,
            isLastItem: l.length - 1 === a
          },
          /* @__PURE__ */ index_js_.createElement(S, { dir: u }),
          /* @__PURE__ */ index_js_.createElement(
            L,
            {
              isLast: l.length - 1 === a,
              isFirst: !1,
              id: String(d),
              icon: t[C] || void 0,
              iconClass: t[m] ? String(t[m]) : void 0,
              text: t[o] ? String(t[o]) : void 0,
              disabled: t.disabled || !1,
              onItemSelect: y,
              onKeyDown: I,
              ...e
            }
          )
        );
    })))
  );
}), Breadcrumb_z = {
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  className: prop_types_index_js_.string,
  breadcrumbOrderedList: prop_types_index_js_.elementType,
  breadcrumbListItem: prop_types_index_js_.elementType,
  breadcrumbDelimiter: prop_types_index_js_.elementType,
  breadcrumbLink: prop_types_index_js_.elementType,
  data: prop_types_index_js_.arrayOf(prop_types_index_js_.shape({
    id: prop_types_index_js_.string,
    text: prop_types_index_js_.string,
    icon: prop_types_index_js_.any,
    iconClass: prop_types_index_js_.string
  })),
  dir: prop_types_index_js_.oneOf(["ltr", "rtl"]),
  disabled: prop_types_index_js_.bool,
  valueField: prop_types_index_js_.string,
  textField: prop_types_index_js_.string,
  iconField: prop_types_index_js_.string,
  iconClassField: prop_types_index_js_.string,
  onItemSelect: prop_types_index_js_.func,
  ariaLabel: prop_types_index_js_.string
}, Breadcrumb_s = {
  valueField: "id",
  textField: "text",
  iconField: "icon",
  iconClassField: "iconClass"
};
Breadcrumb_f.displayName = "KendoReactBreadcrumb";
Breadcrumb_f.propTypes = Breadcrumb_z;
Breadcrumb_f.defaultProps = Breadcrumb_s;


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Animation.js + 2 modules
var Animation = __webpack_require__(41100);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/actionsheet/ActionSheetItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const ActionSheetItem_s = (e) => {
  const a = index_js_.useRef(null), c = index_js_.useCallback((n) => {
    e.onClick && e.onClick.call(void 0, {
      syntheticEvent: n,
      item: e.item,
      title: e.title
    });
  }, [e.item, e.title, e.onClick]);
  return index_js_.useEffect(() => {
    a.current && e.focused && a.current.focus();
  }, [e.focused]), /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      style: e.style,
      tabIndex: e.tabIndex,
      className: (0,index_mjs_.classNames)(
        "k-actionsheet-item",
        "k-cursor-pointer",
        e.disabled && "k-disabled",
        e.className
      ),
      ref: a,
      role: "button",
      "aria-disabled": e.disabled,
      onClick: c
    },
    /* @__PURE__ */ index_js_.createElement("span", { className: "k-actionsheet-action" }, e.icon && /* @__PURE__ */ index_js_.createElement("span", { className: "k-icon-wrap" }, e.icon), (e.title || e.description) && /* @__PURE__ */ index_js_.createElement("span", { className: "k-actionsheet-item-text" }, e.title && /* @__PURE__ */ index_js_.createElement("span", { className: "k-actionsheet-item-title" }, e.title), e.description && /* @__PURE__ */ index_js_.createElement("span", { className: "k-actionsheet-item-description" }, e.description)))
  );
};
ActionSheetItem_s.propTypes = {
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  description: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  group: prop_types_index_js_.oneOf(["top", "bottom"]),
  icon: prop_types_index_js_.element,
  title: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/actionsheet/ActionSheetHeader.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const ActionSheetHeader_c = "ActionSheetHeader", ActionSheetHeader_e = (a) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    className: (0,index_mjs_.classNames)(
      "k-actionsheet-titlebar",
      a.className
    )
  },
  a.children
);
ActionSheetHeader_e.propTypes = {
  className: prop_types_index_js_.string
};
ActionSheetHeader_e.displayName = ActionSheetHeader_c;
ActionSheetHeader_e.propTypes = {
  children: prop_types_index_js_.any
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/actionsheet/ActionSheetFooter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const ActionSheetFooter_a = "ActionSheetFooter", ActionSheetFooter_e = (o) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    className: (0,index_mjs_.classNames)(
      "k-actionsheet-footer",
      o.className
    )
  },
  o.children
);
ActionSheetFooter_e.propTypes = {
  className: prop_types_index_js_.string
};
ActionSheetFooter_e.displayName = ActionSheetFooter_a;
ActionSheetFooter_e.propTypes = {
  children: prop_types_index_js_.any
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/actionsheet/ActionSheetContent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const ActionSheetContent_a = "ActionSheetContent", ActionSheetContent_e = (t) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    className: (0,index_mjs_.classNames)(
      "k-actionsheet-content",
      t.className
    )
  },
  t.children
);
ActionSheetContent_e.propTypes = {
  className: prop_types_index_js_.string
};
ActionSheetContent_e.displayName = ActionSheetContent_a;
ActionSheetContent_e.propTypes = {
  children: prop_types_index_js_.any
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/actionsheet/ActionSheet.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";









const ActionSheet_m = class m extends index_js_.Component {
  /** @hidden */
  constructor(o) {
    super(o), this.actionSheetRef = index_js_.createRef(), this.actionSheetTitleClass = "k-actionsheet-title", this.ariaLabeledBy = this.actionSheetTitleClass + 1, this.animationDuration = 300, this.bottomPosition = { bottom: "0", width: "100%" }, this.handleKeyDown = (t) => {
      this.props.navigatable && this.navigation.triggerKeyboardEvent(t);
    }, this.onTab = (t, a, i) => {
      i.preventDefault(), i.shiftKey ? a.focusPrevious(t) : a.focusNext(t);
    }, this.handleOverlayClick = (t) => {
      this.props.onOverlayClick && this.props.onOverlayClick.call(void 0, t), this.props.onClose && this.props.onClose.call(void 0, t), this.props.animation || this.hideActionSheet();
    }, this.handleItemClick = (t) => {
      this.props.onItemClick && this.props.onItemClick.call(void 0, t), this.props.onItemSelect && this.props.onItemSelect.call(void 0, t), this.props.animation || this.hideActionSheet();
    }, this.onEnter = (t, a, i) => {
      if (t.ariaDisabled)
        return;
      const h = t.className && t.className.indexOf ? t.className.indexOf("k-actionsheet-item") !== -1 : !1, l = a.elements.filter((s) => s.className.indexOf("k-actionsheet-item") !== -1);
      if (h && this.props.onItemClick) {
        i.preventDefault();
        const s = this.props.items[l.indexOf(t)];
        this.props.onItemClick.call(void 0, {
          syntheticEvent: i,
          item: s,
          title: s && s.title
        });
      }
      if (h && this.props.onItemSelect) {
        i.preventDefault();
        const s = this.props.items[l.indexOf(t)];
        this.props.onItemSelect.call(void 0, {
          syntheticEvent: i,
          item: s,
          title: s && s.title
        });
      }
      this.props.animation || this.hideActionSheet();
    }, this.onEscape = (t, a, i) => {
      this.props.onOverlayClick && (i.preventDefault(), this.props.onOverlayClick.call(void 0, i)), this.props.onClose && (i.preventDefault(), this.props.onClose.call(void 0, i)), this.props.animation || this.hideActionSheet();
    }, this.hideActionSheet = () => {
      this.setState({ show: !1 });
    }, this.children = (t) => {
      const a = {};
      return index_js_.Children.forEach(t, (i) => {
        i && (a[i.type.displayName] = i);
      }), a;
    }, this.state = {
      show: !1,
      slide: !1
    }, (0,index_mjs_.validatePackage)(package_metadata_e);
  }
  /** @hidden */
  componentDidMount() {
    this.props.expand && !this.state.show && this.setState({ show: !0 });
  }
  /** @hidden */
  componentDidUpdate(o, t) {
    const a = this.actionSheetRef.current;
    if (this.props.expand && !this.state.show && this.setState({ show: !0 }), this.props.expand && this.state.show && !this.state.slide && this.setState({ slide: !0 }), !this.props.expand && this.state.show && this.state.slide && this.setState({ slide: !1 }), t !== this.state && this.state.slide && a && !this.props.className && (a.style.setProperty("--kendo-actionsheet-height", "auto"), a.style.setProperty("--kendo-actionsheet-max-height", "none")), a && this.props.navigatable) {
      const h = [
        ".k-actionsheet-item",
        ...[
          ".k-actionsheet-footer",
          ".k-actionsheet-content",
          ".k-actionsheet-titlebar"
        ].map((l) => index_mjs_.FOCUSABLE_ELEMENTS.concat(this.props.navigatableElements).map(
          (s) => `${l} ${s}`
        )).flat()
      ];
      this.navigation = new index_mjs_.Navigation({
        tabIndex: this.props.tabIndex || 0,
        root: this.actionSheetRef,
        rovingTabIndex: !1,
        selectors: h,
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
      title: o,
      subTitle: t,
      animationStyles: a,
      animation: i,
      expand: h,
      tabIndex: l,
      items: s
    } = this.props, r = s == null ? void 0 : s.filter((n) => !n.group || n.group === "top"), d = s == null ? void 0 : s.filter((n) => n.group === "bottom"), y = r && r.length > 0 && d && d.length > 0, f = this.children(this.props.children), u = this.props.animationDuration || this.animationDuration, k = this.state.slide && /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: (0,index_mjs_.classNames)("k-actionsheet", this.props.className, {
          "k-actionsheet-bottom": !this.props.className
        }),
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !1,
        "aria-labelledby": this.ariaLabeledBy,
        ref: this.actionSheetRef,
        onKeyDown: this.handleKeyDown
      },
      f[ActionSheetHeader_c] && !o && !t && f[ActionSheetHeader_c],
      (o || t) && /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar k-text-center" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ index_js_.createElement("div", { className: this.actionSheetTitleClass, id: this.ariaLabeledBy }, o && /* @__PURE__ */ index_js_.createElement("div", null, o), t && /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-subtitle" }, t)))),
      f[ActionSheetContent_a] || /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-content" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-list-ul", role: "group" }, r && r.map((n, c) => /* @__PURE__ */ index_js_.createElement(
        ActionSheetItem_s,
        {
          ...n,
          id: c,
          key: c,
          item: n,
          tabIndex: l || 0,
          onClick: this.handleItemClick
        }
      ))), y && /* @__PURE__ */ index_js_.createElement("hr", { className: "k-hr" }), /* @__PURE__ */ index_js_.createElement("div", { className: "k-list-ul", role: "group" }, d && d.map((n, c) => /* @__PURE__ */ index_js_.createElement(
        ActionSheetItem_s,
        {
          ...n,
          id: c + ((r == null ? void 0 : r.length) || 0),
          key: c,
          item: n,
          tabIndex: l || 0,
          onClick: this.handleItemClick
        }
      )))),
      f[ActionSheetFooter_a]
    );
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, h || this.state.show ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-container" }, /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-overlay",
        onClick: this.handleOverlayClick
      }
    ), i ? /* @__PURE__ */ index_js_.createElement(
      Animation/* Animation */.X,
      {
        transitionName: this.state.slide ? "slide-up" : "slide-down",
        onExited: this.hideActionSheet,
        transitionEnterDuration: u,
        transitionExitDuration: u,
        animationEnteringStyle: a || this.bottomPosition,
        animationEnteredStyle: a || this.bottomPosition,
        animationExitingStyle: a || this.bottomPosition,
        exit: !0,
        enter: !0,
        appear: !1
      },
      k
    ) : k)) : null);
  }
};
ActionSheet_m.displayName = "KendoReactActionSheet", ActionSheet_m.propTypes = {
  items: prop_types_index_js_.array,
  subTitle: prop_types_index_js_.string,
  title: prop_types_index_js_.string,
  navigatable: prop_types_index_js_.bool,
  navigatableElements: prop_types_index_js_.array
}, ActionSheet_m.defaultProps = {
  navigatable: !0,
  navigatableElements: []
};
let ActionSheet_b = ActionSheet_m;


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/timeline/TimelineCard.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";












const TimelineCard_x = (e) => {
  const { title: k, subtitle: l, actions: i, images: o, description: E } = e.eventData, [c, v] = index_js_.useState(e.eventData.opened || !1), [r, m] = index_js_.useState(e.eventData.opened || !!e.collapsible), f = (a) => {
    if (v(!c), e.onChange) {
      const n = {
        syntheticEvent: a,
        nativeEvent: a.nativeEvent,
        eventData: e.eventData
      };
      e.onChange.call(void 0, n);
    }
  }, b = (a) => {
    if (e.onActionClick) {
      const n = {
        syntheticEvent: a,
        nativeEvent: a.nativeEvent,
        eventData: e.eventData
      };
      e.onActionClick.call(void 0, n);
    }
  }, d = () => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(CardBody_t, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-card-description" }, /* @__PURE__ */ index_js_.createElement("p", null, E), o && o.map((a, n) => /* @__PURE__ */ index_js_.createElement(CardImage_c, { key: n, src: a.src })))), /* @__PURE__ */ index_js_.createElement(CardActions_s, null, i && i.map((a, n) => /* @__PURE__ */ index_js_.createElement(
    "a",
    {
      key: n,
      href: a.url,
      className: "k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary",
      onClick: b
    },
    a.text
  ))));
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      "data-testid": "k-timeline-card",
      className: (0,index_mjs_.classNames)(
        "k-timeline-card",
        { "k-collapsed": e.collapsible && r }
      )
    },
    /* @__PURE__ */ index_js_.createElement(
      Card_a,
      {
        "aria-live": "polite",
        "aria-describedby": e.id,
        "aria-atomic": "true",
        tabIndex: e.tabindex,
        role: e.horizontal ? "tabpanel" : "button",
        "aria-expanded": e.collapsible && r,
        className: "k-card-with-callout",
        onClick: (a) => f(a)
      },
      /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          style: e.calloutStyle,
          className: (0,index_mjs_.classNames)(
            "k-timeline-card-callout",
            "k-card-callout",
            { "k-callout-n": e.horizontal },
            { "k-callout-e": e.alternated && !e.horizontal },
            { "k-callout-w": !e.alternated && !e.horizontal }
          )
        }
      ),
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-card-inner" }, /* @__PURE__ */ index_js_.createElement(CardHeader_t, null, /* @__PURE__ */ index_js_.createElement(CardTitle_a, null, /* @__PURE__ */ index_js_.createElement("span", { className: "k-event-title" }, k), e.collapsible && /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          className: "k-event-collapse k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"
        },
        /* @__PURE__ */ index_js_.createElement(index_mjs_.SvgIcon, { icon: index_es_js_.chevronRightIcon })
      )), l && /* @__PURE__ */ index_js_.createElement(CardSubtitle_a, null, l)), e.collapsible ? /* @__PURE__ */ index_js_.createElement(
        Reveal/* Reveal */.g,
        {
          transitionEnterDuration: e.transitionDuration || 400,
          transitionExitDuration: e.transitionDuration || 400,
          onBeforeEnter: () => m(!1),
          onAfterExited: () => m(!0)
        },
        c ? d() : null
      ) : d())
    )
  );
};
TimelineCard_x.propTypes = {
  onChange: prop_types_index_js_.func,
  onActionClick: prop_types_index_js_.func
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/timeline/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const utils_a = (r) => r.sort((u, e) => u.date.getTime() - e.date.getTime()), utils_d = (r) => {
  let t;
  return r.reduce((e, s) => (t !== s.date.getFullYear() ? (t = s.date.getFullYear(), e.push({ yearFlag: t }, s)) : e.push(s), e), []);
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/timeline/TimelineHorizontal.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







const vt = (v) => {
  const M = (0,kendo_react_intl_index_mjs_.useInternationalization)(), [y, j] = index_js_.useState(!1), [R, K] = index_js_.useState(!0), [X, Y] = index_js_.useState(), [f, S] = index_js_.useState(0), [g, q] = index_js_.useState(), [l, B] = index_js_.useState(0), [d, G] = index_js_.useState(0), [a, O] = index_js_.useState(1), [u, w] = index_js_.useState(), [c, J] = index_js_.useState(), [N, L] = index_js_.useState([0, 0, 0]), [I, W] = index_js_.useState(0), [Q, Z] = index_js_.useState(1), m = index_js_.useRef(null), i = index_js_.useRef(null), D = index_js_.useRef(null), { eventsData: tt, dateFormat: et, navigatable: nt, onActionClick: st } = v, U = g ? `${g}%` : "150px", k = index_js_.useRef(new index_mjs_.Navigation({
    tabIndex: 0,
    root: m,
    selectors: [".k-timeline-scrollable-wrap"]
  }));
  index_js_.useEffect(() => {
    m.current && v.navigatable && (setTimeout(() => {
      const t = k.current.first;
      t && t.setAttribute("tabindex", String(0));
    }, 0), k.current.keyboardEvents = {
      keydown: {
        ArrowRight: at,
        ArrowLeft: ot,
        End: ct,
        Home: it
      }
    });
  }, [v.navigatable, a, l]), index_js_.useEffect(() => {
    k.current.update();
  });
  const rt = (t) => {
    nt && k.current && k.current.triggerKeyboardEvent(t);
  };
  index_js_.useEffect(() => {
    var r;
    const t = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(p), e = i.current, s = ((r = m == null ? void 0 : m.current) == null ? void 0 : r.offsetWidth) || 0;
    return t && e && t.observe(e), x(), p(), L([s, 0, -s]), () => {
      t && t.disconnect();
    };
  }, []), index_js_.useEffect(() => {
    const t = i.current, e = t && t.children[a];
    if (e) {
      const s = e.offsetWidth, r = !(f >= 0);
      if (j(r), c) {
        const o = c.length * s > l * s * ((f * -1 + 100) / 100);
        K(o);
      }
      (t == null ? void 0 : t.offsetWidth) * -f / 100 >= t.children.length * s && (x(), p(), S((e.offsetLeft - e.offsetWidth) / (l * e.offsetWidth) * 100 * -1)), V(e);
    }
  }, [l, g, a]);
  const at = (t, e, s) => {
    if (i.current) {
      const r = i.current.children[a + 1], o = r && r.classList.contains("k-timeline-flag-wrap") ? a + 2 : a + 1;
      if (c && c.length <= o)
        return;
      l + d <= o && P(), E(o, s);
    }
  }, ot = (t, e, s) => {
    if (i.current) {
      const r = i.current && i.current.children[a - 1], o = r && r.classList.contains("k-timeline-flag-wrap") ? a - 2 : a - 1;
      if (o <= 0)
        return;
      o < d && F(), E(o, s);
    }
  }, it = (t, e, s) => {
    if (i.current) {
      if (a <= 1)
        return;
      const r = 1;
      h(!0, r, 0, 0), E(r, s);
    }
  }, ct = (t, e, s) => {
    if (i.current) {
      const r = i.current && i.current.children.length - 1;
      if (r <= a)
        return;
      const o = Math.floor(r / l), T = o * -100, C = o * l;
      h(!0, r, C, T), E(r, s);
    }
  }, x = () => {
    const t = utils_d(tt);
    J(t), w([t[a - 1], t[a], t[a + 1]]);
  }, F = () => {
    var e;
    if (i.current && c) {
      const s = d - l, r = d - 1, o = c[r] && ((e = c[r]) != null && e.yearFlag) ? r - 1 : r, T = f + 100 > 0 ? 0 : f + 100;
      h(!1, o, s, T);
    }
  }, P = () => {
    if (i.current && c) {
      const e = d + l, s = c[e] && c[e].yearFlag ? e + 1 : e, r = f - 100;
      h(!0, s, e, r);
    }
  }, h = (t, e, s, r) => {
    A(t, e), p(), G(s), S(r), O(e);
  }, A = (t, e) => {
    if (u && c) {
      const s = b(t, Q), r = Object.assign([], u, { [s]: c[e] });
      w(r), Z(s), W(t ? -100 : 100), setTimeout(() => {
        var H;
        const o = (H = m.current) == null ? void 0 : H.offsetWidth, T = Object.assign([], N, {
          [s]: 0,
          [b(!0, s)]: o,
          [b(!1, s)]: o && -o
        }), C = Object.assign([], r, {
          [b(!0, s)]: {},
          [b(!1, s)]: {}
        });
        w(C), L(T), W(0);
      }, v.transitionDuration || 300);
    }
  }, b = (t, e) => {
    const s = t ? e + 1 : e - 1;
    return u ? s < 0 ? u.length - 1 : s % u.length : 0;
  }, V = (t) => {
    var s;
    const e = (a - d) * t.offsetWidth + t.offsetWidth / 2 + (((s = D.current) == null ? void 0 : s.offsetWidth) || 0);
    Y(e);
  }, E = (t, e) => {
    e.preventDefault(), t > a ? A(!0, t) : t < a && A(!1, t), O(t);
  }, p = index_js_.useCallback(() => {
    const t = i.current, e = t && t.children[a];
    if (t instanceof HTMLElement && e) {
      const s = Math.round(t.offsetWidth / 150);
      V(e), q(100 / s), B(s);
    }
  }, []), lt = () => ({
    transitionDuration: "300ms"
  }), $ = (t) => ({
    transform: `translateX(${t}%)`,
    transformOrigin: "left top"
  });
  return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-timeline-track-wrap", ref: m, onKeyDown: rt }, /* @__PURE__ */ index_js_.createElement(
    "button",
    {
      ref: D,
      "aria-hidden": "true",
      onClick: () => y && F(),
      className: (0,index_mjs_.classNames)(
        "k-timeline-arrow",
        "k-timeline-arrow-left",
        "k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button",
        { "k-disabled": !y }
      )
    },
    /* @__PURE__ */ index_js_.createElement(index_mjs_.SvgIcon, { icon: index_es_js_.caretAltLeftIcon })
  ), /* @__PURE__ */ index_js_.createElement(
    "button",
    {
      "aria-hidden": "true",
      onClick: () => R && P(),
      className: (0,index_mjs_.classNames)(
        "k-timeline-arrow",
        "k-timeline-arrow-right",
        "k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button",
        { "k-disabled": !R }
      )
    },
    /* @__PURE__ */ index_js_.createElement(index_mjs_.SvgIcon, { icon: index_es_js_.caretAltRightIcon })
  ), /* @__PURE__ */ index_js_.createElement("div", { className: "k-timeline-track" }, /* @__PURE__ */ index_js_.createElement(
    "ul",
    {
      ref: i,
      className: "k-timeline-scrollable-wrap",
      role: "tablist",
      tabIndex: 0,
      style: { transform: `translateX(${f}%)` }
    },
    c && c.map((t, e) => t.yearFlag ? /* @__PURE__ */ index_js_.createElement(
      "li",
      {
        role: "none",
        className: "k-timeline-track-item k-timeline-flag-wrap",
        style: { flex: `1 0 ${U}` },
        key: e
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-timeline-flag" }, t.yearFlag)
    ) : /* @__PURE__ */ index_js_.createElement(
      "li",
      {
        role: "tab",
        className: (0,index_mjs_.classNames)(
          "k-timeline-track-item",
          { "k-focus": e === a }
        ),
        "aria-selected": e === a,
        style: { flex: `1 0 ${U}` },
        key: e
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-timeline-date-wrap" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-timeline-date" }, M.formatDate(t.date, et))),
      /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          onClick: (s) => E(e, s),
          className: "k-timeline-circle"
        }
      )
    ))
  ))), /* @__PURE__ */ index_js_.createElement("div", { className: "k-timeline-events-list" }, /* @__PURE__ */ index_js_.createElement(
    "ul",
    {
      className: "k-timeline-scrollable-wrap",
      style: I === 0 ? { ...$(I) } : { ...$(I), ...lt() }
    },
    u && u.map(
      (t, e) => /* @__PURE__ */ index_js_.createElement(
        "li",
        {
          key: e,
          className: "k-timeline-event",
          style: { transform: `translate3d(${N[e]}px, 0px, 0px)` }
        },
        t && /* @__PURE__ */ index_js_.createElement(
          TimelineCard_x,
          {
            tabindex: N[e] === 0 ? 0 : -1,
            eventData: t,
            onActionClick: st,
            horizontal: !0,
            collapsible: !1,
            calloutStyle: { left: `${X}px` }
          }
        )
      )
    )
  )));
};
vt.propTypes = {
  onActionClick: prop_types_index_js_.func
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/timeline/TimelineVertical.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const TimelineVertical_S = (l) => {
  const u = (0,kendo_react_intl_index_mjs_.useInternationalization)(), [c, p] = index_js_.useState(), {
    collapsibleEvents: v,
    transitionDuration: E,
    eventsData: g,
    dateFormat: k,
    alterMode: o,
    navigatable: m,
    onChange: y,
    onActionClick: b
  } = l, s = index_js_.useRef(null), a = index_js_.useRef(new index_mjs_.Navigation({
    tabIndex: 0,
    root: s,
    selectors: [".k-card-vertical"]
  }));
  index_js_.useEffect(() => {
    s.current && l.navigatable && (setTimeout(() => {
      const t = a.current.first;
      t && t.setAttribute("tabindex", String(0));
    }, 0), a.current.keyboardEvents = {
      keydown: {
        Space: d,
        Enter: d
      }
    });
  }, [l.navigatable]), index_js_.useEffect(() => {
    p(utils_d(g));
  }, []), index_js_.useEffect(() => {
    a.current.update();
  });
  const N = (t) => {
    m && a.current && a.current.triggerKeyboardEvent(t);
  }, d = (t, r, i) => {
    i.preventDefault();
    const n = t.querySelector(".k-card-title .k-event-collapse");
    n && n.click();
  };
  let f = 0;
  const C = (0,index_mjs_.useId)();
  return /* @__PURE__ */ index_js_.createElement("ul", { ref: s, onKeyDown: N }, c && c.map((t, r) => {
    const i = (r + f) % 2 === 0;
    t.yearFlag && (f += 1);
    const n = C + "-" + r, D = o ? { "k-reverse": i } : void 0;
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, { key: r }, t.yearFlag ? /* @__PURE__ */ index_js_.createElement("li", { className: "k-timeline-flag-wrap" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-timeline-flag" }, t.yearFlag)) : /* @__PURE__ */ index_js_.createElement("li", { className: (0,index_mjs_.classNames)("k-timeline-event", D) }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-timeline-date-wrap" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-timeline-date", id: n }, u.formatDate(t.date, k))), /* @__PURE__ */ index_js_.createElement("span", { className: "k-timeline-circle" }), /* @__PURE__ */ index_js_.createElement(
      TimelineCard_x,
      {
        id: n,
        tabindex: m ? 0 : -1,
        eventData: t,
        alternated: o && i,
        collapsible: v,
        transitionDuration: E,
        onChange: y,
        onActionClick: b
      }
    )));
  }));
};
TimelineVertical_S.propTypes = {
  onActionClick: prop_types_index_js_.func
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/timeline/Timeline.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const Timeline_T = (m) => {
  const p = {
    alterMode: !1,
    collapsibleEvents: !1,
    dateFormat: "MMM dd, yyyy",
    ...m
  }, {
    collapsibleEvents: a,
    transitionDuration: n,
    className: f,
    alterMode: r,
    navigatable: l,
    horizontal: t,
    events: o,
    dateFormat: s,
    onChange: d,
    onActionClick: c
  } = p, [k, u] = index_js_.useState(), i = index_js_.useRef(null);
  return index_js_.useEffect(() => {
    i.current && u(i.current.offsetWidth);
  }, []), /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: i,
      className: (0,index_mjs_.classNames)(
        "k-timeline",
        {
          "k-timeline-collapsible": a,
          "k-timeline-vertical": !t,
          "k-timeline-alternating": r,
          "k-timeline-horizontal": t
        },
        f
      ),
      style: { width: `${k}px` }
    },
    t ? /* @__PURE__ */ index_js_.createElement(
      vt,
      {
        navigatable: l,
        eventsData: o,
        dateFormat: s,
        transitionDuration: n,
        onActionClick: c
      }
    ) : /* @__PURE__ */ index_js_.createElement(
      TimelineVertical_S,
      {
        navigatable: l,
        eventsData: o,
        dateFormat: s,
        alterMode: r,
        collapsibleEvents: a,
        transitionDuration: n,
        onChange: d,
        onActionClick: c
      }
    )
  );
};
Timeline_T.propTypes = {
  className: prop_types_index_js_.string
};


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/contextmenu/ContextMenu.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const ContextMenu_r = (e) => {
  const o = index_js_.useRef(null);
  return index_js_.useEffect(() => {
    e.show && setTimeout(() => {
      const m = o.current && o.current.element, t = m && m.querySelector(".k-menu-item"), c = (0,index_mjs_.getActiveElement)(t && t.ownerDocument);
      t && t !== c && t.focus();
    });
  }, [e.show]), /* @__PURE__ */ index_js_.createElement(
    kendo_react_popup_index_mjs_.Popup,
    {
      show: e.show,
      offset: e.offset,
      popupClass: "k-menu-popup",
      animate: !1
    },
    /* @__PURE__ */ index_js_.createElement(
      I,
      {
        vertical: !0,
        ...e,
        ref: o,
        className: (0,index_mjs_.classNames)(
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
ContextMenu_r.displayName = "KendoReactContextMenu";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/expansionpanel/ExpansionPanel.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const ExpansionPanel_I = index_js_.forwardRef((n, y) => {
  (0,index_mjs_.validatePackage)(package_metadata_e);
  const i = index_js_.useRef(null), [g, u] = index_js_.useState(!1), r = index_js_.useCallback(
    () => ({ element: i.current }),
    []
  );
  index_js_.useImperativeHandle(y, r);
  const {
    expanded: t = !1,
    disabled: o,
    title: m,
    subtitle: b,
    onAction: s,
    expandIcon: c,
    collapseIcon: d,
    expandSVGIcon: f,
    collapseSVGIcon: k
  } = n, N = index_js_.useCallback(
    (l) => {
      (0,index_mjs_.dispatchEvent)(s, l, r(), { expanded: t });
    },
    [s, t]
  ), h = index_js_.useCallback(
    (l) => {
      (l.keyCode === index_mjs_.Keys.enter || l.keyCode === index_mjs_.Keys.space) && (l.preventDefault(), (0,index_mjs_.dispatchEvent)(s, l, r(), { expanded: t }));
    },
    [s, t]
  ), C = index_js_.useCallback(() => {
    n.disabled || u(!0);
  }, [n.disabled]), E = index_js_.useCallback(() => {
    n.disabled || u(!1);
  }, [n.disabled]), { onFocus: B, onBlur: R } = (0,index_mjs_.useAsyncFocusBlur)({ onFocus: C, onBlur: E });
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: i,
      className: (0,index_mjs_.classNames)(
        "k-expander",
        n.className,
        {
          "k-expanded": t,
          "k-focus": g && !o,
          "k-disabled": o
        }
      ),
      onFocus: B,
      onBlur: R,
      style: n.style,
      id: n.id,
      dir: (0,index_mjs_.useRtl)(i, n.dir),
      onKeyDown: o ? void 0 : h
    },
    /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        role: "button",
        "aria-controls": n.ariaControls,
        "aria-expanded": t,
        "aria-disabled": o,
        tabIndex: (0,index_mjs_.getTabIndex)(n.tabIndex, o),
        className: "k-expander-header",
        onClick: o ? void 0 : N
      },
      m !== void 0 ? /* @__PURE__ */ index_js_.createElement("div", { className: "k-expander-title" }, m) : void 0,
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-spacer" }),
      b !== void 0 ? /* @__PURE__ */ index_js_.createElement("div", { className: "k-expander-sub-title" }, b) : void 0,
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-expander-indicator" }, /* @__PURE__ */ index_js_.createElement(
        index_mjs_.IconWrap,
        {
          name: t ? d ? void 0 : "chevron-up" : c ? void 0 : "chevron-down",
          icon: t ? !k && !d ? index_es_js_.chevronUpIcon : k : !f && !c ? index_es_js_.chevronDownIcon : f,
          className: (0,index_mjs_.classNames)(
            t ? {
              [String(d)]: !!d
            } : {
              [String(c)]: !!c
            }
          )
        }
      ))
    ),
    n.children
  );
});
ExpansionPanel_I.propTypes = {
  children: prop_types_index_js_.node,
  className: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  dir: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  tabIndex: prop_types_index_js_.number,
  title: prop_types_index_js_.node,
  subtitle: prop_types_index_js_.node,
  expandIcon: prop_types_index_js_.string,
  collapseIcon: prop_types_index_js_.string,
  expanded: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  onAction: prop_types_index_js_.func
};
ExpansionPanel_I.displayName = "KendoReactExpansionPanel";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/expansionpanel/ExpansionPanelContent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const ExpansionPanelContent_r = index_js_.forwardRef((e, n) => /* @__PURE__ */ index_js_.createElement(
  "div",
  {
    ref: n,
    ...e,
    className: (0,index_mjs_.classNames)("k-expander-content-wrapper", e.className)
  },
  /* @__PURE__ */ index_js_.createElement("div", { className: "k-expander-content" }, e.children)
));
ExpansionPanelContent_r.displayName = "KendoReactExpansionPanelContent";


;// ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_b7683285117881d1fc94837fe33730f1/node_modules/@progress/kendo-react-layout/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
























































const kendo_react_layout_e = (0,index_mjs_.withIdHOC)(I);
kendo_react_layout_e.displayName = "KendoReactMenu";
const kendo_react_layout_i = (0,index_mjs_.withIdHOC)(TabStrip_p);
kendo_react_layout_e.displayName = "KendoReactMenu";



/***/ }

}]);