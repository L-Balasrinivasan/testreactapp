"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[9219],{

/***/ 59219
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoComplete: () => (/* binding */ ri),
/* harmony export */   AutoCompletePropsContext: () => (/* binding */ li),
/* harmony export */   AutoCompleteWithoutContext: () => (/* binding */ Mt),
/* harmony export */   ComboBox: () => (/* binding */ ys),
/* harmony export */   ComboBoxPropsContext: () => (/* binding */ ni),
/* harmony export */   ComboBoxWithoutContext: () => (/* binding */ dt),
/* harmony export */   DropDownList: () => (/* binding */ ei),
/* harmony export */   DropDownListClassComponent: () => (/* binding */ Tt),
/* harmony export */   DropDownListPropsContext: () => (/* binding */ Zs),
/* harmony export */   DropDownListWithoutContext: () => (/* binding */ Tt),
/* harmony export */   DropDownTree: () => (/* binding */ ks),
/* harmony export */   DropDownTreePropsContext: () => (/* binding */ wi),
/* harmony export */   List: () => (/* binding */ je),
/* harmony export */   ListContainer: () => (/* binding */ Ft),
/* harmony export */   ListFilter: () => (/* binding */ Re),
/* harmony export */   ListItem: () => (/* binding */ Gs),
/* harmony export */   MultiColumnComboBox: () => (/* binding */ ss),
/* harmony export */   MultiColumnComboBoxPropsContext: () => (/* binding */ vi),
/* harmony export */   MultiSelect: () => (/* binding */ fi),
/* harmony export */   MultiSelectPropsContext: () => (/* binding */ ui),
/* harmony export */   MultiSelectTree: () => (/* binding */ is),
/* harmony export */   MultiSelectTreePropsContext: () => (/* binding */ Ni),
/* harmony export */   MultiSelectWithoutContext: () => (/* binding */ Nt),
/* harmony export */   SearchBar: () => (/* binding */ es),
/* harmony export */   TagList: () => (/* binding */ Is),
/* harmony export */   dropdownsMessages: () => (/* binding */ ce),
/* harmony export */   findByFieldValue: () => (/* binding */ Wi),
/* harmony export */   getItemValue: () => (/* binding */ V),
/* harmony export */   getMultiSelectTreeValue: () => (/* binding */ qi),
/* harmony export */   getValueMap: () => (/* binding */ tt),
/* harmony export */   nodata: () => (/* binding */ ve),
/* harmony export */   scrollToItem: () => (/* binding */ zs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38635);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13209);
/* harmony import */ var _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31212);
/* harmony import */ var _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27002);
/* harmony import */ var _progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52132);
/* harmony import */ var _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14800);
/* harmony import */ var _progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46540);
/* harmony import */ var _progress_kendo_react_treeview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45488);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";











class Ft extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      children: t,
      width: e,
      dir: s,
      itemsCount: n,
      popupSettings: a
    } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_5__.Popup,
      {
        style: { width: e, direction: s },
        contentKey: n && n.join(),
        ...a
      },
      t
    );
  }
}
const Xt = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((i, t) => {
  const e = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(
    t,
    () => e.current
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-filter" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.TextBox,
    {
      ...i,
      ref: e,
      value: i.value || "",
      onChange: i.onChange,
      onKeyDown: i.onKeyDown,
      tabIndex: i.tabIndex,
      onClick: (s) => s.stopPropagation(),
      size: i.size,
      fillMode: i.fillMode,
      rounded: i.rounded,
      prefix: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.InputPrefix, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "search", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.searchIcon }))
    }
  ));
});
Xt.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number, prop_types__WEBPACK_IMPORTED_MODULE_1__.array]),
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "solid", "flat", "outline"])
};
Xt.displayName = "KendoReactListFilter";
const Re = Xt;
class qe extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      group: t,
      groupMode: e,
      render: s
    } = this.props, n = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-group-sticky-header" }, e === "classic" ? t : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-header-text" }, t));
    return s !== void 0 ? s.call(void 0, n, this.props) : n;
  }
}
const U = (i) => i != null, Ks = (i, t) => {
  for (let e = 0; e < i.length; e++)
    if (i.charAt(e) !== t)
      return !1;
  return !0;
}, Ls = (i, t, e) => {
  let s = i;
  return e && (s = [e].concat(s)), s.slice(t).concat(s.slice(0, t));
}, os = (i, t, e) => {
  if (!U(i))
    return !1;
  let s = String(i);
  return e && (s = s.toLowerCase()), s.indexOf(t) === 0;
}, zs = (i, t, e, s, n) => {
  const a = i.offsetHeight, p = t.children.item(e), c = p.offsetTop + (n ? s - i.scrollTop : 0), d = p.offsetHeight;
  if (n) {
    let r = 0;
    c + d > a ? r = c + d - a : c < 0 && (r = c), r !== 0 ? i.scrollTop += r : i.scrollTop === 0 && s !== 0 && (i.scrollTop = s);
  } else
    c + d > a + i.scrollTop ? i.scrollTop = c + d - a : c < i.scrollTop && (i.scrollTop -= i.scrollTop - c);
}, Ve = (i, t, e) => {
  let s = -1;
  if (t) {
    t = t.toLowerCase();
    for (let n = 0; n < i.length; n++) {
      const a = (V(i[n], e) || "") + "";
      if (a && a.toLowerCase().startsWith(t)) {
        s = n;
        break;
      }
    }
  }
  return s;
}, Lt = (i, t, e, s = !1) => {
  const n = (a) => s ? a : a.toLowerCase();
  return i.findIndex((a) => e ? n(V(a, e)) === n(t) : n(t) === n(a.toString()));
}, V = (i, t) => {
  if (t && U(i)) {
    const e = t.split(".");
    let s = i;
    return e.forEach((n) => {
      s = s ? s[n] : void 0;
    }), s;
  }
  return i;
}, Wi = (i, t, e) => {
  if (!i)
    return;
  const s = i.findIndex((n) => V(n, t) === e);
  return i[s];
}, Hs = (i = [], t = [], e) => {
  if (i === t)
    return !0;
  if (i.length !== t.length)
    return !1;
  for (let s = 0; s < i.length; s++)
    if (!R(i[s], t[s], e))
      return !1;
  return !0;
}, bt = (i, t, e) => {
  t.forEach((s) => {
    const n = i.findIndex((a) => R(a, s, e));
    n !== -1 && i.splice(n, 1);
  });
}, R = (i, t, e) => i === t || U(i) === U(t) && V(i, e) === V(t, e), as = (i, t, e) => {
  if (t) {
    const s = Lt(i, t, e, !0);
    return s !== -1 ? i[s] : i[Ve(i, t, e)];
  }
  return i[0];
}, As = (i, t = [], e) => {
  let s = "";
  if (i) {
    const n = t[Ve(t, i, e)];
    if (n) {
      const a = V(n, e);
      i.toLowerCase() !== a.toLowerCase() && (s = a.substring(i.length));
    }
  }
  return s;
}, Ws = (i) => {
  i.target.nodeName !== "INPUT" && i.preventDefault();
}, St = (i, t, e) => !!i != !!t || i.text !== t.text ? !1 : i === t || Hs(i.data, t.data, e), qs = (i) => i.preventDefault();
class $s extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      selected: t,
      defaultItem: e,
      textField: s
    } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        onClick: this.props.onClick,
        onMouseDown: qs,
        style: { position: "unset" },
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-list-optionlabel", {
          "k-selected": t
        })
      },
      V(e, s) || ""
    );
  }
}
class Gs extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.handleClick = (t) => this.props.onClick(this.props.index, t);
  }
  render() {
    const {
      selected: t,
      group: e,
      dataItem: s,
      virtual: n,
      groupMode: a,
      disabled: p,
      render: c
    } = this.props, d = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        id: this.props.id,
        role: "option",
        "aria-selected": t,
        "aria-disabled": p ? !0 : void 0,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-list-item", {
          "k-selected": t,
          "k-focus": this.props.focused,
          "k-first": !!e && a === "classic",
          "k-disabled": p
        }),
        onClick: this.handleClick,
        style: { position: n ? "relative" : "unset" }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-list-item-text" }, V(s, this.props.textField).toString()),
      e !== void 0 && a === "classic" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-item-group-label" }, e) : null
    );
    return c !== void 0 ? c.call(void 0, d, this.props) : d;
  }
}
class Us extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      group: t,
      virtual: e,
      render: s,
      isMultiColumn: n = !1
    } = this.props, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        id: this.props.id,
        role: "group",
        className: n ? "k-table-group-row" : "k-list-group-item",
        style: n ? { boxSizing: "inherit" } : { position: e ? "relative" : "unset" }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: s ? void 0 : n ? "k-table-th" : "k-list-item-text" }, t)
    );
    return s !== void 0 ? s.call(void 0, a, this.props) : a;
  }
}
const ve = "dropdowns.nodata", it = "dropdowns.clear", zt = "dropdowns.comboArrowBtnAriaLabelExpand", Ht = "dropdowns.comboArrowBtnAriaLabelCollapse", At = "dropdowns.dropDownListArrowBtnAriaLabel", nt = "dropdowns.apply", ot = "dropdowns.cancel", ce = {
  [it]: "clear",
  [ve]: "NO DATA FOUND.",
  [zt]: "expand combobox",
  [Ht]: "collapse combobox",
  [At]: "select",
  [nt]: "Apply",
  [ot]: "Cancel"
};
class je extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  renderItems() {
    const {
      textField: t,
      valueField: e,
      groupField: s,
      groupMode: n,
      isMultiColumn: a,
      optionsGuid: p,
      skip: c = 0,
      virtual: d,
      focusedIndex: r,
      highlightSelected: h = !0,
      value: u,
      data: f,
      itemRender: m,
      groupHeaderItemRender: v
    } = this.props, b = Array.isArray(u);
    let w = 0;
    return f.map((k, D) => {
      const O = c + D, N = c + D + w, _ = k.disabled ? !1 : h && (!b && R(k, u, e) || b && u.findIndex((E) => R(E, k, e)) !== -1);
      let S, F, C;
      return D > 0 && s !== void 0 && (F = V(k, s), C = V(f[D - 1], s), F && C && F !== C && (S = F)), S !== void 0 && n === "modern" && (w += 1), [
        S !== void 0 && n === "modern" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Us,
          {
            id: `option-${p}-${N}`,
            virtual: d,
            key: O + "-group-item",
            group: S,
            isMultiColumn: a,
            render: v
          }
        ),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Gs,
          {
            id: `option-${p}-${S !== void 0 && n === "modern" ? N + 1 : N}`,
            virtual: d,
            dataItem: k,
            groupMode: n,
            selected: _,
            focused: r === D,
            index: O,
            key: O,
            onClick: this.props.onClick,
            textField: t,
            group: S,
            render: m,
            disabled: k.disabled
          }
        )
      ];
    });
  }
  renderNoValueElement(t) {
    const e = this.props.noDataRender, s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-nodata" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, t.toLanguageString(ve, ce[ve])));
    return e ? e.call(void 0, s) : s;
  }
  render() {
    const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this), {
      id: e,
      show: s,
      wrapperCssClass: n,
      wrapperStyle: a,
      listStyle: p,
      listRef: c,
      wrapperRef: d,
      listClassName: r = "k-list-ul",
      ariaSetSize: h
    } = this.props, u = this.renderItems();
    return u.length ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: n,
        style: a,
        ref: d,
        onMouseDown: this.props.onMouseDown,
        onBlur: this.props.onBlur,
        onScroll: this.props.onScroll,
        unselectable: "on"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "ul",
        {
          id: e,
          role: "listbox",
          "aria-hidden": s ? void 0 : !0,
          "aria-setsize": h,
          className: r,
          ref: c,
          style: p
        },
        u
      ),
      this.props.scroller && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-height-container" }, this.props.scroller)
    ) : this.renderNoValueElement(t);
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.registerForLocalization)(je);
const js = 1533915;
class Ys {
  constructor() {
    this.container = null, this.scrollElement = null, this.list = null, this.containerHeight = 0, this.skip = 0, this.total = 0, this.enabled = !1, this.pageSize = 0, this.itemHeight = 0, this.PageChange = null, this.prevScrollPos = 0, this.listTranslate = 0, this.scrollSyncing = !1, this.scrollerRef = (t) => {
      const e = this;
      e.container = t, t && (t.setAttribute("unselectable", "on"), window.setTimeout(e.calcScrollElementHeight.bind(e), 0));
    }, this.calcScrollElementHeight = () => {
      this.scrollSyncing = !0;
      let t = !1;
      this.itemHeight = this.list ? this.list.children[0].offsetHeight : this.itemHeight, this.containerHeight = Math.min(js, this.itemHeight * this.total);
      const e = this.containerHeight;
      return this.scrollElement && (t = this.scrollElement.style.height !== e + "px", t && (this.scrollElement.style.height = e + "px")), this.scrollSyncing = !1, t;
    }, this.scrollHandler = this.scrollHandler.bind(this);
  }
  get translate() {
    return this.listTranslate;
  }
  changePage(t, e) {
    const s = Math.min(Math.max(0, t), this.total - this.pageSize);
    s !== this.skip && this.PageChange && this.PageChange({ skip: s, take: this.pageSize }, e);
  }
  translateTo(t) {
    this.listTranslate = t, this.list && (this.list.style.transform = "translateY(" + t + "px)");
  }
  reset() {
    this.container && (this.calcScrollElementHeight(), this.container.scrollTop = 0, this.translateTo(0));
  }
  scrollToEnd() {
    this.container && this.list && (this.calcScrollElementHeight(), this.container.scrollTop = this.container.scrollHeight - this.container.offsetHeight, this.translateTo(this.container.scrollHeight));
  }
  localScrollUp(t) {
    const e = this.itemHeight, s = this.container.scrollTop;
    let n = this.listTranslate, a, p = s - n;
    if (!(p > e)) {
      for (a = 0; a < this.skip && !(n + e + p <= s); a++)
        n -= e;
      if (n = this.validateTranslate(n), this.skip - a <= 0 && n >= s) {
        this.translateTo(0), this.changePage(0, t), this.container.scrollTop = 0;
        return;
      }
      n !== this.listTranslate && (this.translateTo(n), this.changePage(this.skip - a, t));
    }
  }
  localScrollDown(t) {
    const e = this.itemHeight;
    let s = this.container.scrollTop, n = this.listTranslate;
    const a = this.list.children.length;
    let p;
    for (p = 0; p < a && !(n + e >= s); p++)
      n += e;
    n = this.validateTranslate(n), p >= a && this.skip + p >= this.total ? (this.translateTo(n), this.changePage(this.total - 1, t)) : n !== this.listTranslate && (this.translateTo(n), this.changePage(this.skip + p, t));
  }
  scrollNonStrict(t) {
    const e = this.total * this.prevScrollPos / this.containerHeight, s = Math.min(Math.floor(e), this.total - 1);
    let n = this.containerHeight * e / this.total;
    n = this.validateTranslate(n), this.translateTo(n), this.changePage(s, t);
  }
  scrollHandler(t) {
    const e = this.container ? this.container.scrollTop : 0, s = this.prevScrollPos;
    this.prevScrollPos = e, !(!this.enabled || !this.list || !this.container || this.scrollSyncing) && (e - s <= 0 && e > this.listTranslate - this.list.scrollHeight / 10 ? this.localScrollUp(t) : e - s > 0 && e < this.listTranslate + this.list.scrollHeight * 2 / 3 ? this.localScrollDown(t) : this.scrollNonStrict(t));
  }
  validateTranslate(t) {
    return t = Math.max(0, t), t = Math.min(this.containerHeight, t), t;
  }
}
class Js {
  navigate(t) {
    const e = t.keyCode;
    if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left)
      return this.next({ current: t.current, min: t.min, max: t.max, step: t.skipItems ? t.skipItems : -1 });
    if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)
      return this.next({ current: t.current, min: t.min, max: t.max, step: t.skipItems ? t.skipItems : 1 });
    if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home)
      return 0;
    if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end)
      return t.max;
  }
  next(t) {
    return U(t.current) ? Math.min(t.max, Math.max(t.current + t.step, t.min)) : t.min;
  }
}
const Zt = class {
  constructor(i) {
    this.wrapper = null, this.list = null, this.vs = new Ys(), this.navigation = new Js(), this.handleItemClick = (t, e) => {
      const s = this.initState();
      s.syntheticEvent = e, e.stopPropagation(), this.component.handleItemSelect(t, s), this.togglePopup(s), this.applyState(s);
    }, this.handleFocus = (t) => {
      if (!this.component.state.focused) {
        const e = this.initState();
        e.data.focused = !0, e.events.push({ type: "onFocus" }), e.syntheticEvent = t, this.applyState(e);
      }
    }, this.filterChanged = (t, e) => {
      const { textField: s, filterable: n } = this.component.props;
      n && e.events.push({
        type: "onFilterChange",
        filter: {
          field: s,
          operator: "contains",
          ignoreCase: !0,
          value: t
        }
      });
    }, this.togglePopup = (t) => {
      const e = this.component.props, s = e.opened !== void 0 ? e.opened : this.component.state.opened;
      e.opened === void 0 && (t.data.opened = !s), s ? t.events.push({ type: "onClose" }) : (t.events.push({ type: "onOpen" }), this.calculatePopupWidth());
    }, this.pageChange = (t, e) => {
      const s = this.initState();
      s.syntheticEvent = e, this.triggerOnPageChange(s, t.skip, t.take), this.applyState(s);
    }, this.scrollToVirtualItem = (t, e) => {
      const s = this.vs;
      if (s.enabled = !1, t.skip === 0)
        s.reset();
      else if (t.skip + t.pageSize === t.total)
        s.scrollToEnd();
      else {
        let n = s.translate;
        n === 0 && (s.calcScrollElementHeight(), n = s.itemHeight * t.skip, s.translateTo(n - s.itemHeight)), s.container && (s.container.scrollTop = n), this.scrollToItem(e, !0);
      }
      window.setTimeout(() => s.enabled = !0, 10);
    }, this.scrollPopupByPageSize = (t) => {
      var p, c, d, r, h, u;
      const e = this.vs, s = (c = (p = this.list) == null ? void 0 : p.parentElement) == null ? void 0 : c.scrollTop, n = e.enabled && e.itemHeight ? e.itemHeight : this.list ? this.list.children[0].offsetHeight : 0, a = (r = (d = this.list) == null ? void 0 : d.parentElement) == null ? void 0 : r.offsetHeight;
      s !== void 0 && a !== void 0 && ((u = (h = this.list) == null ? void 0 : h.parentElement) == null || u.scroll({ top: s + t * Math.floor(a / n) * n }));
    }, this.renderScrollElement = () => {
      const t = this.vs;
      return t.enabled && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ref: (e) => t.scrollElement = e,
          key: "scrollElementKey"
        }
      );
    }, this.resetGroupStickyHeader = (t, e) => {
      t !== e.state.group && e.setState({ ...e.state, group: t });
    }, this.listBoxId = i.props.id + "list", this.guid = i.props.id, this.component = i, this.vs.PageChange = this.pageChange;
  }
  didMount() {
    const i = this.component.props, t = i.popupSettings || {}, e = i.style || {}, s = t.width;
    let n = i.opened === !0;
    s === void 0 && this.calculatePopupWidth(), i.dir === void 0 && e.direction === void 0 && (this.calculateDir(), n = !0), n && this.component.forceUpdate();
  }
  calculateDir() {
    const i = this.component.element;
    i && i.ownerDocument && i.ownerDocument.defaultView && (this.dirCalculated = i.ownerDocument.defaultView.getComputedStyle(i).direction || void 0);
  }
  calculatePopupWidth() {
    this.wrapper && (this.popupWidth = this.wrapper.offsetWidth + "px");
  }
  scrollToItem(i, t, e) {
    const s = this.list || this.vs.list;
    if (!s && !e && setTimeout(() => {
      this.scrollToItem(i, t, !0);
    }, 10), s && i >= 0) {
      const n = this.vs, a = n.container || s.parentNode, p = t !== void 0 ? t : n.enabled;
      zs(a, s, i, n.translate, p);
    }
  }
  initState() {
    return {
      data: {},
      events: [],
      syntheticEvent: void 0
    };
  }
  applyState(i) {
    Object.keys(i.data).length > 0 && this.component.setState(i.data);
    const t = {
      syntheticEvent: i.syntheticEvent,
      nativeEvent: i.syntheticEvent ? i.syntheticEvent.nativeEvent : void 0,
      target: this.component,
      value: this.component.value
    };
    i.events.forEach((e) => {
      const s = e.type;
      delete e.type;
      const n = s && this.component.props[s];
      n && n.call(void 0, {
        ...t,
        ...e
      });
    });
  }
  triggerOnPageChange(i, t, e) {
    const s = this.component.props.virtual;
    if (s) {
      const n = Math.min(Math.max(0, t), Math.max(0, s.total - e));
      n !== s.skip && i.events.push({
        type: "onPageChange",
        page: { skip: n, take: e }
      });
    }
  }
  triggerPageChangeCornerItems(i, t) {
    const e = this.component.props, { data: s = [], dataItemKey: n, virtual: a } = e, p = e.opened !== void 0 ? e.opened : this.component.state.opened;
    i && a && this.vs.enabled && (a.skip > 0 && R(i, s[0], n) ? this.triggerOnPageChange(t, a.skip - 1, a.pageSize) : !p && a.skip + a.pageSize < a.total && R(i, s[s.length - 1], n) && this.triggerOnPageChange(t, a.skip + 1, a.pageSize));
  }
  getPopupSettings() {
    return Object.assign({}, Zt.defaultProps.popupSettings, this.component.props.popupSettings);
  }
  getGroupedDataModernMode(i, t) {
    let e = [];
    return i.forEach((s, n) => {
      i[n - 1] && s[t] !== i[n - 1][t] && e.push({ [t]: s[t] }), e.push(i[n]);
    }), e;
  }
};
let oe = Zt;
oe.basicPropTypes = {
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  popupSettings: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    animate: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      openDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      closeDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
    })]),
    popupClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    appendTo: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
    width: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
    height: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number])
  }),
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  listNoDataRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  focusedItemIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  header: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1__.node
};
oe.propTypes = {
  ...Zt.basicPropTypes,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  virtual: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    pageSize: prop_types__WEBPACK_IMPORTED_MODULE_1__.number.isRequired,
    skip: prop_types__WEBPACK_IMPORTED_MODULE_1__.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1__.number.isRequired
  }),
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
oe.defaultProps = {
  popupSettings: {
    height: "200px"
  },
  required: !1,
  validityStyles: !0
};
const Ye = {
  name: "@progress/kendo-react-dropdowns",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613431,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
}, wt = 500, Ee = 768, Qs = "Please select a value from the list!", { sizeMap: Kt, roundedMap: Xs } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, Wt = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.state = {}, this._element = null, this.base = new oe(this), this.searchState = { word: "", last: "" }, this._select = null, this._skipFocusEvent = !1, this._filterInput = null, this._navigated = !1, this._lastKeypressIsFilter = !1, this.itemHeight = 0, this.focus = () => {
      this.base.wrapper && this.base.wrapper.focus();
    }, this.handleItemSelect = (t, e) => {
      const { data: s = [], virtual: n, dataItemKey: a, defaultItem: p } = this.props, c = n ? n.skip : 0, d = t === -1 && p !== void 0 ? p : s[t - c], r = !R(d, this.value, a);
      this.triggerOnChange(d, e), r && this.base.triggerPageChangeCornerItems(d, e);
    }, this.componentRef = (t) => {
      this._element = t, this.base.wrapper = t;
    }, this.dummySelect = (t) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "select",
      {
        name: this.props.name,
        ref: (e) => {
          this._select = e;
        },
        tabIndex: -1,
        "aria-hidden": !0,
        title: this.props.label,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "option",
        {
          value: this.props.valueMap ? this.props.valueMap.call(void 0, t) : t
        }
      )
    ), this.renderListContainer = () => {
      const { header: t, footer: e, dir: s, data: n = [], size: a, groupField: p, groupStickyHeaderItemRender: c, list: d } = this.props, r = this.base, h = r.getPopupSettings(), u = this.props.opened !== void 0 ? this.props.opened : this.state.opened, f = h.width !== void 0 ? h.width : r.popupWidth, m = {
        dir: s !== void 0 ? s : r.dirCalculated,
        width: f,
        popupSettings: {
          ...h,
          popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            h.popupClass,
            "k-list-container",
            "k-dropdownlist-popup"
          ),
          anchor: h.anchor || this.element,
          show: u,
          onOpen: this.onPopupOpened,
          onClose: this.onPopupClosed
        },
        itemsCount: [n.length]
      };
      let { group: v } = this.state;
      return v === void 0 && p !== void 0 && (v = V(n[0], p)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ft, { ...m }, this.renderListFilter(), t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-header" }, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-list",
            {
              [`k-list-${Kt[a] || a}`]: a,
              "k-virtual-list": this.base.vs.enabled
            }
          )
        },
        this.renderDefaultItem(),
        !d && v && n.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: v, groupMode: "modern", render: c }),
        this.renderList()
      ), e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-footer" }, e));
    }, this.renderList = () => {
      const {
        data: t = [],
        textField: e,
        dataItemKey: s,
        virtual: n = { skip: 0, total: void 0 },
        groupHeaderItemRender: a,
        listNoDataRender: p,
        itemRender: c
      } = this.props, d = this.base.vs, r = n.skip, h = this.props.opened !== void 0 ? this.props.opened : this.state.opened, u = this.base.getPopupSettings(), f = `translateY(${d.translate}px)`;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        je,
        {
          id: this._listboxId,
          show: h,
          data: t.slice(),
          focusedIndex: this.getFocusedIndex(),
          value: this.value,
          textField: e,
          valueField: s,
          optionsGuid: this._guid,
          groupField: this.props.groupField,
          groupMode: "modern",
          listRef: (m) => d.list = this.base.list = m,
          wrapperStyle: { maxHeight: u.height },
          wrapperCssClass: "k-list-content",
          listStyle: d.enabled ? { transform: f } : void 0,
          key: "listkey",
          skip: r,
          onClick: this.handleItemClick,
          itemRender: c,
          groupHeaderItemRender: a,
          noDataRender: p,
          onScroll: this.onScroll,
          wrapperRef: d.scrollerRef,
          scroller: this.base.renderScrollElement(),
          ariaSetSize: n.total
        }
      );
    }, this.onScroll = (t) => {
      const { vs: e, list: s } = this.base;
      e.scrollHandler(t);
      const { groupField: n } = this.props;
      let { data: a = [] } = this.props;
      if (!(!n || !a.length) && n) {
        const p = this.itemHeight = this.itemHeight || (e.enabled ? e.itemHeight : s ? s.children[0].offsetHeight : 0), d = t.target.scrollTop - e.skip * p;
        a = this.base.getGroupedDataModernMode(a, n);
        let r = a[0][n];
        for (let h = 1; h < a.length && !(p * h > d); h++)
          a[h] && a[h][n] && (r = a[h][n]);
        r !== this.state.group && this.setState({
          group: r
        });
      }
    }, this.renderListFilter = () => {
      const t = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      return this.props.filterable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Re,
        {
          value: t,
          ref: (e) => this._filterInput = e && e.element,
          onChange: this.handleListFilterChange,
          onKeyDown: this.handleKeyDown,
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      );
    }, this.renderDefaultItem = () => {
      const { textField: t, defaultItem: e, dataItemKey: s } = this.props;
      return e !== void 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        $s,
        {
          defaultItem: e,
          textField: t,
          selected: R(this.value, e, s),
          key: "defaultitemkey",
          onClick: this.handleDefaultItemClick
        }
      );
    }, this.search = (t) => {
      clearTimeout(this._typingTimeout), this.props.filterable || (this._typingTimeout = window.setTimeout(() => this.searchState.word = "", this.props.delay), this.selectNext(t));
    }, this.selectNext = (t) => {
      const { data: e = [], dataItemKey: s } = this.props;
      let n = e.map((k, D) => ({ item: k, itemIndex: D }));
      const a = this.searchState.word, p = this.searchState.last, c = Ks(a, p);
      let d = n.length, r = Math.max(0, e.findIndex((k) => R(k, this.value, s))), h;
      this.props.defaultItem && (h = { item: this.props.defaultItem, itemIndex: -1 }, d += 1, r += 1), r += c ? 1 : 0, n = Ls(n, r, h);
      let u, f, m, v = 0;
      const { textField: b, ignoreCase: w } = this.props;
      for (; v < d; v++)
        if (u = V(n[v].item, b), f = c && os(u, p, w), m = os(u, a, w), f || m) {
          v = n[v].itemIndex;
          break;
        }
      if (v !== d) {
        const k = this.base.initState();
        k.syntheticEvent = t, this.handleItemSelect(v, k), this.applyState(k), this._valueDuringOnChange = void 0;
      }
    }, this.handleKeyDown = (t) => {
      t && t.target instanceof Element && t.target.nodeName === "INPUT" && t.stopPropagation && t.stopPropagation();
      const {
        data: e = [],
        filterable: s,
        disabled: n,
        defaultItem: a,
        leftRightKeysNavigation: p = !0,
        virtual: c = { skip: 0, total: 0, pageSize: 0 },
        dataItemKey: d,
        groupField: r = "",
        textField: h,
        skipDisabledItems: u = !0
      } = this.props, f = this.value, m = e.findIndex((F) => R(F, f, d)), v = this.props.opened !== void 0 ? this.props.opened : this.state.opened, b = t.keyCode, w = b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end, k = b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down, D = !v && (t.altKey && b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space), O = v && (t.altKey && b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc), N = p && (b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right), _ = k || N && !s || w, S = this.base.initState();
      if (S.syntheticEvent = t, !n) {
        if (w && this.base.vs.enabled)
          b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home ? c.skip !== 0 ? (this.base.triggerOnPageChange(S, 0, c.pageSize), this._navigated = !0) : this.triggerOnChange(e[0], S) : c.skip < c.total - c.pageSize ? (this.base.triggerOnPageChange(S, c.total - c.pageSize, c.pageSize), this._navigated = !0) : this.triggerOnChange(e[e.length - 1], S);
        else if (v && b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageUp)
          this.base.scrollPopupByPageSize(-1);
        else if (v && b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageDown)
          this.base.scrollPopupByPageSize(1);
        else if (v && b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter) {
          const F = this.getFocusedIndex();
          this.haveFocusedItemAndDataNotEmpty(e, F) ? (this.triggerOnChange(null, S), this.applyState(S)) : this.handleItemSelect(F, S), this.base.togglePopup(S), t.preventDefault();
        } else if (D || O)
          O && this.resetValueIfDisabledItem(), this.base.togglePopup(S), t.preventDefault();
        else if (_) {
          if (this._lastKeypressIsFilter = !1, r !== "" && h)
            if (!u && v)
              this.onNavigate(S, b);
            else {
              let F;
              if (b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
                const C = e.slice(m + 1).find((E) => !E.disabled && E[h]);
                F = C && e.findIndex((E) => E[h] === C[h]);
              } else if (b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
                let C;
                if (m === 0 && a)
                  F = -1;
                else if (m === -1)
                  C = e, F = e.findIndex((E) => !E.disabled && E[h]);
                else {
                  C = e.slice(0, m);
                  let E = C.pop();
                  for (; E && E.disabled; )
                    E = C.pop();
                  F = E && e.findIndex((M) => M[h] === E[h]);
                }
              }
              if (F !== void 0) {
                const C = F - m;
                this.onNavigate(S, b, C);
              } else
                F === void 0 && e.findIndex((C) => C[h] === f[h]) === e.length - 1 && this.onNavigate(S, b);
            }
          else if (!u && v || w)
            this.onNavigate(S, b);
          else if (h) {
            let F;
            if (b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
              const C = e.slice(m + 1).find((E) => !E.disabled && E[h]);
              F = C && e.findIndex((E) => E[h] === C[h]);
            } else if (b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || b === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
              let C;
              if (m === 0 && a)
                F = -1;
              else if (m === -1)
                C = e, F = e.find((E) => !E.disabled && E[h]);
              else {
                C = e.slice(0, m);
                let E = C.pop();
                for (; E && E.disabled; )
                  E = C.pop();
                F = E && e.findIndex((M) => M[h] === E[h]);
              }
            }
            if (F !== void 0) {
              const C = F - m;
              this.onNavigate(S, b, C);
            } else
              F === void 0 && e.findIndex((C) => C[h] === f[h]) === e.length - 1 && this.onNavigate(S, b);
          } else
            this.onNavigate(S, b);
          t.preventDefault();
        }
        this.applyState(S);
      }
    }, this.handleItemClick = (t, e) => {
      this.base.handleItemClick(t, e), this._valueDuringOnChange = void 0;
    }, this.handleFocus = (t) => {
      this._skipFocusEvent || this.base.handleFocus(t);
    }, this.handleBlur = (t) => {
      if (this._skipFocusEvent || !this.state.focused)
        return;
      const e = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { adaptive: s } = this.props, { windowWidth: n = 0 } = this.state, a = n <= Ee && s, p = this.base.initState();
      p.syntheticEvent = t, p.data.focused = !1, p.events.push({ type: "onBlur" }), e && this.resetValueIfDisabledItem(), e && !a && this.base.togglePopup(p), this.applyState(p);
    }, this.handleDefaultItemClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, this.base.togglePopup(e), this.triggerOnChange(this.props.defaultItem, e), this.applyState(e);
    }, this.handleWrapperClick = (t) => {
      if (t.isPropagationStopped())
        return;
      const e = this.base.initState();
      e.syntheticEvent = t, this.state.focused || (e.data.focused = !0), this.resetValueIfDisabledItem(), this.base.togglePopup(e), this.applyState(e);
    }, this.handleKeyPress = (t) => {
      if (this.props.filterable || t.which === 0 || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter)
        return;
      let e = String.fromCharCode(t.charCode || t.keyCode);
      this.props.ignoreCase && (e = e.toLowerCase()), e === " " && t.preventDefault(), this.searchState = {
        word: this.searchState.word + e,
        last: this.searchState.last + e
      }, this.search(t);
    }, this.handleListFilterChange = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t.syntheticEvent, this.props.filter === void 0 && (e.data.text = t.target.value), this.base.filterChanged(t.target.value, e), this._lastKeypressIsFilter = !0, this.applyState(e), this.setState({ group: void 0 });
    }, this.onPopupOpened = () => {
      this._filterInput && this.focusElement(this._filterInput), this.props.adaptive && setTimeout(() => {
        this._filterInput && this.focusElement(this._filterInput);
      }, 300);
    }, this.onPopupClosed = () => {
      this.state.focused && window.setTimeout(
        () => {
          this.state.focused && this.base.wrapper && this.focusElement(this.base.wrapper);
        }
      );
    }, this.setValidity = () => {
      this._select && this._select.setCustomValidity && this._select.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || Qs
      );
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  }
  get _inputId() {
    return this.props.id + "-accessibility-id";
  }
  get _listboxId() {
    return this.props.id + "-listbox-id";
  }
  get _guid() {
    return this.props.id + "-guid";
  }
  get document() {
    if (_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * The value of the DropDownList.
   */
  get value() {
    let i;
    return this._valueDuringOnChange !== void 0 ? i = this._valueDuringOnChange : this.props.value !== void 0 ? i = this.props.value : this.state.value !== void 0 ? i = this.state.value : this.props.defaultValue !== void 0 && (i = this.props.defaultValue), !U(i) && this.props.defaultItem !== void 0 && (i = this.props.defaultItem), i;
  }
  /**
   * The index of the selected item.
   */
  get index() {
    const { data: i = [], dataItemKey: t } = this.props, e = this.value;
    return i.findIndex((s) => R(s, e, t));
  }
  /**
   * Gets the `name` property of the DropDownList.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the DropDownList is set.
   */
  get validity() {
    const i = this.props.validationMessage !== void 0, t = !this.required || this.value !== null && this.value !== "" && this.value !== void 0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: i,
      valid: e,
      valueMissing: this.value === null
    };
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : Wt.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : Wt.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidUpdate(i, t) {
    var u;
    const { dataItemKey: e, virtual: s, groupField: n = "", textField: a } = this.props, { data: p = [] } = this.props, c = i.virtual ? i.virtual.total : 0, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened, r = i.opened !== void 0 ? i.opened : t.opened, h = !r && d;
    if (this.base.getPopupSettings().animate || h && this.onPopupOpened(), s && s.total !== c)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      const f = this.value, m = i.value !== void 0 ? i.value : t.value;
      let v = p.findIndex((w) => R(w, f, e));
      n !== "" && f && a && (v = (u = this.base.getGroupedDataModernMode(p, n)) == null ? void 0 : u.map((w) => w[a]).indexOf(f[a]));
      const b = !R(m, f, e);
      h && s ? this.base.scrollToVirtualItem(s, v) : h && !s ? (this.onPopupOpened(), p && p.length !== 0 && this.base.resetGroupStickyHeader(p[0][n], this), this.base.scrollToItem(v)) : d && r && f && b && !this._navigated ? this.base.scrollToItem(v) : d && r && this._navigated && (this._navigated && s && s.skip === 0 ? this.base.vs.reset() : this._navigated && s && s.skip === s.total - s.pageSize && this.base.vs.scrollToEnd());
    }
    this._navigated = !1, this.setValidity();
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var i;
    this.observerResize = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (i = this.document) != null && i.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /** @hidden */
  componentWillUnmount() {
    var i;
    (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const i = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this).toLanguageString(At, ce[At]), { style: t, className: e, label: s, dir: n, virtual: a, size: p, rounded: c, fillMode: d, adaptive: r } = this.props, { windowWidth: h = 0 } = this.state, u = this.props.opened !== void 0 ? this.props.opened : this.state.opened, f = this.value, m = V(f, this.props.textField), v = !this.validityStyles || this.validity.valid, b = this.base, w = b.vs, k = h <= Ee && r;
    w.enabled = a !== void 0, a !== void 0 && (b.vs.skip = a.skip, b.vs.total = a.total, b.vs.pageSize = a.pageSize);
    const {
      dataItemKey: D,
      data: O = [],
      disabled: N,
      tabIndex: _,
      loading: S,
      iconClassName: F,
      svgIcon: C,
      valueRender: E
    } = this.props, { focused: M } = this.state, A = O.findIndex((K) => R(K, f, D)), j = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: this._inputId, className: "k-input-inner" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-input-value-text" }, m)), Y = E !== void 0 ? E.call(void 0, j, f) : j, Z = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        ref: this.componentRef,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-dropdownlist k-picker",
          e,
          {
            [`k-picker-${Kt[p] || p}`]: p,
            [`k-rounded-${Xs[c] || c}`]: c,
            [`k-picker-${d}`]: d,
            "k-focus": M,
            "k-disabled": N,
            "k-invalid": !v,
            "k-loading": S,
            "k-required": this.required
          }
        ),
        style: s ? { ...t, width: void 0 } : t,
        dir: n,
        onMouseDown: u ? (K) => {
          K.target.nodeName !== "INPUT" && (this.focusElement(this.base.wrapper), K.preventDefault());
        } : void 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(_, N),
        accessKey: this.props.accessKey,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleKeyPress,
        onClick: N ? void 0 : this.handleWrapperClick,
        role: "combobox",
        "aria-required": this.required,
        "aria-disabled": N || void 0,
        "aria-haspopup": "listbox",
        "aria-expanded": u || !1,
        "aria-owns": this._listboxId,
        "aria-activedescendant": u ? "option-" + this._guid + "-" + (A + (a ? a.skip : 0)) : void 0,
        "aria-label": this.props.ariaLabel || this.props.label,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy || this._inputId,
        id: this.props.id,
        title: this.props.title
      },
      Y,
      S && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading" }),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
        {
          tabIndex: -1,
          type: "button",
          "aria-label": i,
          "aria-hidden": !0,
          size: p,
          fillMode: d,
          iconClass: F,
          className: "k-input-button",
          rounded: null,
          themeColor: "base",
          icon: F ? void 0 : "caret-alt-down",
          svgIcon: C || _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon,
          onMouseDown: (K) => this.state.focused && K.preventDefault()
        }
      ),
      this.dummySelect(f),
      !k && this.renderListContainer()
    ), k && this.renderAdaptiveListContainer());
    return s ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
      {
        label: s,
        editorValue: m,
        editorValid: v,
        editorDisabled: this.props.disabled,
        style: { width: t ? t.width : void 0 },
        children: Z
      }
    ) : Z;
  }
  /**
   * @hidden
   */
  onNavigate(i, t, e) {
    const {
      data: s = [],
      defaultItem: n,
      dataItemKey: a,
      virtual: p = { skip: 0, total: 0, pageSize: 0 }
    } = this.props, c = this.base.vs, d = this.value, r = s.findIndex((u) => R(u, d, a)), h = this.base.navigation.navigate({
      current: p.skip + r,
      max: (c.enabled ? p.total : s.length) - 1,
      min: n !== void 0 ? -1 : 0,
      keyCode: t,
      skipItems: e || void 0
    });
    h !== void 0 && this.handleItemSelect(h, i), this.applyState(i);
  }
  renderAdaptiveListContainer() {
    const { windowWidth: i = 0 } = this.state, { header: t, footer: e, size: s, adaptiveTitle: n, groupField: a, groupStickyHeaderItemRender: p, list: c, data: d = [] } = this.props, r = this.props.opened !== void 0 ? this.props.opened : this.state.opened, h = {
      navigatable: !1,
      navigatableElements: [],
      expand: r,
      animation: !0,
      onClose: (f) => this.handleWrapperClick(f),
      animationStyles: i <= wt ? { top: 0, width: "100%", height: "100%" } : void 0,
      className: i <= wt ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
    };
    let { group: u } = this.state;
    return u === void 0 && a !== void 0 && (u = V(d[0], a)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheet, { ...h }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetHeader, { className: "k-text-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, n)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        onClick: this.handleWrapperClick,
        icon: "x",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon
      }
    ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, this.renderListFilter())), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetContent, { className: "!k-overflow-hidden" }, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-header" }, t), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-list",
          {
            [`k-list-${Kt[s] || s}`]: s,
            "k-virtual-list": this.base.vs.enabled
          }
        )
      },
      this.renderDefaultItem(),
      !c && u && d.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: u, groupMode: "modern", render: p }),
      this.renderList()
    ), e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-footer" }, e)));
  }
  getFocusedIndex() {
    const i = this.value, {
      data: t = [],
      textField: e,
      dataItemKey: s,
      virtual: n = { skip: 0 },
      focusedItemIndex: a = Ve,
      filterable: p,
      skipDisabledItems: c = !0
    } = this.props, d = this.props.filter ? this.props.filter : this.state.text;
    return c && e && !d && !i ? t.findIndex((r) => !r.disabled && r[e]) : U(i) && d === void 0 || p && d === "" ? t.findIndex((r) => R(r, i, s)) : d ? this._lastKeypressIsFilter ? a(t, d, e) : t.findIndex((r) => R(r, i, s)) : n.skip === 0 ? 0 : -1;
  }
  focusElement(i) {
    this._skipFocusEvent = !0, i.focus(), window.setTimeout(() => this._skipFocusEvent = !1, 30);
  }
  triggerOnChange(i, t) {
    R(this.value, i, this.props.dataItemKey) || (this.props.value === void 0 && (t.data.value = i), this._valueDuringOnChange = i, t.events.push({ type: "onChange" }));
  }
  applyState(i) {
    this.base.applyState(i), this._valueDuringOnChange = void 0;
  }
  calculateMedia(i) {
    for (const t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
  resetValueIfDisabledItem() {
    const { data: i = [] } = this.props, t = this.base.initState(), e = this.getFocusedIndex();
    this.haveFocusedItemAndDataNotEmpty(i, e) && (this.triggerOnChange(null, t), this.applyState(t));
  }
  haveFocusedItemAndDataNotEmpty(i, t) {
    return t !== void 0 && t !== -1 && i && i.length > 0 && i[t].disabled;
  }
};
let Tt = Wt;
Tt.displayName = "DropDownList";
Tt.propTypes = {
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  ignoreCase: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  defaultItem: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  valueRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  valueMap: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  validationMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  leftRightKeysNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  groupField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  skipDisabledItems: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  ...oe.propTypes
};
Tt.defaultProps = {
  delay: 500,
  tabIndex: 0,
  ignoreCase: !0,
  ...oe.defaultProps,
  required: !1,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  groupMode: "modern"
};
const Zs = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), ei = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withPropsContext)(
  Zs,
  Tt
));
ei.displayName = "KendoReactDropDownList";
class es extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this._input = null;
  }
  /**
   * @hidden
   */
  get input() {
    return this._input;
  }
  componentDidUpdate(t) {
    const e = t.value, s = t.suggestedText, { value: n, suggestedText: a, focused: p } = this.props, c = this.input, d = e !== n || a !== s, r = d && e.startsWith(n) && !(s && a && s.endsWith(a)), h = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
    p && c && h !== c && c.focus(), a && d && !r && c && c.setSelectionRange(n.length - a.length, n.length);
  }
  render() {
    const { expanded: t = !1, disabled: e, role: s = "listbox", render: n } = this.props, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "input",
      {
        autoComplete: "off",
        id: this.props.id,
        type: "text",
        key: "searchbar",
        size: this.props.size,
        placeholder: this.props.placeholder,
        className: "k-input-inner",
        tabIndex: this.props.tabIndex,
        accessKey: this.props.accessKey,
        role: s,
        name: this.props.name,
        value: this.props.value,
        onChange: this.props.onChange,
        ref: (p) => this._input = p,
        onKeyDown: this.props.onKeyDown,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onClick: this.props.onClick,
        "aria-disabled": e || void 0,
        disabled: e || void 0,
        readOnly: this.props.readOnly || void 0,
        title: this.props.title,
        "aria-haspopup": "listbox",
        "aria-expanded": t,
        "aria-owns": this.props.owns,
        "aria-activedescendant": t ? this.props.activedescendant : void 0,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-required": this.props.ariaRequired
      }
    );
    return n ? n.call(void 0, a) : a;
  }
}
class rt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onMouseDown = (t) => t.preventDefault();
  }
  render() {
    const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this).toLanguageString(it, ce[it]);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: "k-clear-value",
        role: "button",
        onClick: this.props.onClick,
        onMouseDown: this.onMouseDown,
        tabIndex: -1,
        title: t,
        key: "clearbutton"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "x", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon })
    );
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.registerForLocalization)(rt);
const ti = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useCustomComponent, Ne = ti, si = "Please enter a valid value!", { sizeMap: yt, roundedMap: ii } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, xt = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.state = {}, this.base = new oe(this), this._element = null, this._suggested = "", this._skipBlur = !1, this._input = null, this._adaptiveFilterInput = null, this.itemHeight = 0, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleItemSelect = (t, e) => {
      const { data: s = [], virtual: n, dataItemKey: a } = this.props, p = n ? n.skip : 0, c = s[t - p], d = !R(c, this.value, a);
      this.triggerOnChange(c, e), this.state.text !== void 0 && (e.data.text = void 0), d && this.base.triggerPageChangeCornerItems(c, e);
    }, this.onPopupOpened = () => {
      setTimeout(() => {
        this.mobileMode && this._adaptiveFilterInput && (this._skipBlur = !0, this._adaptiveFilterInput.focus(), this._skipBlur = !1);
      }, 300);
    }, this.componentRef = (t) => {
      this._element = t, this.base.wrapper = t;
    }, this.toggleBtnClick = (t) => {
      const { data: e = [], skipDisabledItems: s, textField: n } = this.props, a = this.getFocusedIndex(), p = this.getCurrentValueDisabledStatus(n, e, a), c = this.props.opened !== void 0 ? this.props.opened : this.state.opened, d = this.base.initState();
      if (d.syntheticEvent = t, !s && n && p && this.clearValueOnToggleBtnClick(t), this.base.togglePopup(d), !c && this.mobileMode) {
        const r = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
        this.base.filterChanged(r, d);
      }
      this.applyState(d);
    }, this.renderMobileListFilter = () => {
      const t = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text, e = V(this.value, this.props.textField), s = U(t) ? t : e;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Re,
        {
          value: s,
          ref: (n) => this._adaptiveFilterInput = n && n.element,
          onChange: this.handleMobileFilterChange,
          onKeyDown: this.onInputKeyDown,
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      );
    }, this.handleMobileFilterChange = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t.syntheticEvent, e.data.text = t.target.value, this.base.filterChanged(t.target.value, e), this.applyState(e);
    }, this.onScroll = (t) => {
      const { vs: e, list: s } = this.base;
      e.scrollHandler(t);
      const { groupField: n } = this.props;
      let { data: a = [] } = this.props;
      if (!n || !a.length)
        return;
      const p = this.itemHeight = this.itemHeight || (e.enabled ? e.itemHeight : s ? s.children[0].offsetHeight : 0), d = t.target.scrollTop - e.skip * p;
      this.props.groupMode === "modern" && (a = this.base.getGroupedDataModernMode(a, n));
      let r = a[0][n];
      for (let h = 1; h < a.length && !(p * h > d); h++)
        a[h] && a[h][n] && (r = a[h][n]);
      r !== this.state.group && (this.setState({
        group: r
      }), this.props.onGroupScroll && this.props.onGroupScroll.call(void 0, { group: r }));
    }, this.handleItemClick = (t, e) => {
      this.base.handleItemClick(t, e), this._valueDuringOnChange = void 0;
    }, this.handleBlur = (t) => {
      if (this.state.focused && !this._skipBlur) {
        const e = this.base.initState(), { textField: s, data: n = [] } = this.props, a = this.getFocusedIndex(), c = !(a === -1) && this.getCurrentValueDisabledStatus(s, n, a);
        e.data.focused = !1, e.events.push({ type: "onBlur" }), e.syntheticEvent = t, s && c && this.clearValueOnBlur(t), this.applyValueOnRejectSuggestions(t.currentTarget.value, e);
      }
    }, this.onInputClick = (t) => {
      const e = this.props.opened !== void 0 ? this.props.opened : this.state.opened, s = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
      if (!e && this.mobileMode) {
        const n = this.base.initState();
        n.syntheticEvent = t, this.base.togglePopup(n), this.base.filterChanged(s, n), this.applyState(n);
      }
    }, this.onInputKeyDown = (t) => {
      const { data: e = [], skipDisabledItems: s, textField: n, dataItemKey: a, groupField: p } = this.props, c = this.value, d = Math.max(0, e.findIndex((w) => R(w, c, a))), r = t.keyCode, h = this.props.opened !== void 0 ? this.props.opened : this.state.opened, u = this.base.initState();
      if (u.syntheticEvent = t, !t.altKey && (r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down)) {
        if (t.preventDefault(), p !== "" && n)
          if (!this.props.skipDisabledItems && h)
            this.onNavigate(u, r);
          else {
            let w = 0;
            if (r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
              const k = e.slice(d + 1 < e.length ? d + 1 : d).find((D) => !D.disabled && D[n]);
              w = k && e.findIndex((D) => D[n] === k[n]);
            } else if (r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
              let k;
              if (d === 0)
                k = e, w = e.findIndex((D) => !D.disabled && D[n]);
              else {
                k = e.slice(0, d);
                let D = k.pop();
                for (; D && D.disabled; )
                  D = k.pop();
                w = D && e.findIndex((O) => O[n] === D[n]);
              }
            }
            if (w !== void 0) {
              const k = w - d;
              this.onNavigate(u, r, k);
            } else
              w === void 0 && e.findIndex((k) => k[n] === c[n]) === e.length - 1 && this.onNavigate(u, r);
          }
        else if (!this.props.skipDisabledItems && h)
          this.onNavigate(u, r);
        else {
          let w = null;
          if (r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)
            w = e.slice(d + 1).find((k) => !k.disabled);
          else if (r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
            const k = e.slice(0, d);
            for (w = k.pop(); w && w.disabled; )
              w = k.pop();
          }
          if (w) {
            const k = w.id - d - 1;
            this.onNavigate(u, r, k);
          } else
            this.onNavigate(u, r);
        }
        this.applyState(u);
      }
      const f = () => {
        t.preventDefault(), this.base.togglePopup(u), this.applyState(u);
      }, m = this.getFocusedIndex(), v = m === -1, b = !v && this.getCurrentValueDisabledStatus(n, e, m);
      h ? r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageUp ? this.base.scrollPopupByPageSize(-1) : r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageDown ? this.base.scrollPopupByPageSize(1) : t.altKey && r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up ? f() : r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter ? (t.preventDefault(), (n && !v && t.currentTarget.value ? e[m][n] : void 0) ? !s && n && b ? this.clearValueOnEnterOrEsc(t) : b || this.applyValueOnEnter(t.currentTarget.value, u) : this.applyValueOnEnter(t.currentTarget.value, u)) : r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc && (!s && n && b && this.clearValueOnEnterOrEsc(t), this.applyValueOnRejectSuggestions(t.currentTarget.value, u)) : !h && r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc ? this.clearValueOnEnterOrEsc(t) : t.altKey && r === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && f();
    }, this.inputOnChange = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t;
      const s = this.props.opened !== void 0 ? this.props.opened : this.state.opened, n = t.currentTarget, a = n.value;
      if (this.props.suggest) {
        const p = n.selectionEnd === a.length;
        let c = this.props.filter !== void 0 ? this.props.filter : this.state.text;
        U(c) || (c = V(this.value, this.props.textField) || "");
        const d = c && c === a, r = c && c.length > a.length;
        d || r || !p ? this._suggested = "" : this.suggestValue(a);
      }
      this.props.filter === void 0 && (e.data.text = a), this.state.focusedItem !== void 0 && (e.data.focusedItem = void 0), s || this.base.togglePopup(e), this.base.filterChanged(a, e), this.applyState(e), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnEnterOrEsc = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnBlur = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.clearValueOnToggleBtnClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.clearValue();
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || si
      );
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= Ee && this.props.adaptive);
  }
  /**
   * The value of the ComboBox.
   */
  get value() {
    if (this._valueDuringOnChange !== void 0)
      return this._valueDuringOnChange;
    if (this.props.value !== void 0)
      return this.props.value;
    if (this.state.value !== void 0)
      return this.state.value;
    if (this.props.defaultValue !== void 0)
      return this.props.defaultValue;
  }
  /**
   * The index of the selected item.
   */
  get index() {
    const { data: i = [], dataItemKey: t } = this.props, e = this.value;
    return i.findIndex((s) => R(s, e, t));
  }
  /**
   * Gets the `name` property of the ComboBox.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the component is set.
   */
  get validity() {
    const i = this.props.validationMessage !== void 0, t = !this.required || this.value !== null && this.value !== "" && this.value !== void 0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: i,
      valid: e,
      valueMissing: this.value === null
    };
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : xt.defaultProps.validityStyles;
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : xt.defaultProps.required;
  }
  /** @hidden */
  componentDidUpdate(i, t) {
    var f;
    const { dataItemKey: e, virtual: s, groupField: n = "", data: a = [], textField: p } = this.props, c = i.virtual ? i.virtual.total : 0, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened, r = i.opened !== void 0 ? i.opened : t.opened, h = !r && d, u = this.value;
    if (this._valueOnDidUpdate = u, s && s.total !== c)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      const m = i.value !== void 0 ? i.value : t.value;
      let v = a.findIndex((w) => R(w, u, e));
      this.props.groupMode === "modern" && p && u && (v = (f = this.base.getGroupedDataModernMode(a, n)) == null ? void 0 : f.map((w) => w[p]).indexOf(u[p]));
      const b = !R(m, u, e);
      h && s ? this.base.scrollToVirtualItem(s, v) : h && !s ? (this.onPopupOpened(), a && a.length !== 0 && this.base.resetGroupStickyHeader(a[0][n], this), this.base.scrollToItem(v)) : d && r && u && b && this.base.scrollToItem(v);
    }
    h && this._input && this._input.focus(), this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var i;
    this.observerResize = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (i = this.document) != null && i.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /** @hidden */
  componentWillUnmount() {
    var i;
    (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect();
  }
  /** @hidden */
  render() {
    const i = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this).toLanguageString(zt, ce[zt]), t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this).toLanguageString(
      Ht,
      ce[Ht]
    ), {
      dir: e,
      disabled: s,
      clearButton: n = xt.defaultProps.clearButton,
      label: a,
      textField: p,
      adaptive: c,
      className: d,
      style: r,
      loading: h,
      iconClassName: u,
      virtual: f,
      size: m,
      rounded: v,
      fillMode: b,
      opened: w = this.state.opened,
      placeholder: k,
      svgIcon: D
    } = this.props, { windowWidth: O = 0 } = this.state, N = !this.validityStyles || this.validity.valid, _ = this.props.filter !== void 0 ? this.props.filter : this.state.text, S = V(this.value, p), F = U(_) ? _ : S, C = n && (!!F || U(this.value)), M = this.base.vs, A = this.props.id || this._inputId, j = O <= Ee && c;
    M.enabled = f !== void 0, f !== void 0 && (M.skip = f.skip, M.total = f.total, M.pageSize = f.pageSize);
    const [Y, Z] = Ne(this.props.prefix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), [K, be] = Ne(this.props.suffix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), X = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-combobox k-input",
          {
            [`k-input-${yt[m] || m}`]: m,
            [`k-rounded-${ii[v] || v}`]: v,
            [`k-input-${b}`]: b,
            "k-invalid": !N,
            "k-loading": h,
            "k-required": this.required,
            "k-disabled": s
          },
          d
        ),
        ref: this.componentRef,
        style: a ? { ...r, width: void 0 } : r,
        dir: e
      },
      this.props.prefix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y, { ...Z }),
      this.renderSearchBar(F || "", A, k),
      C && !h && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(rt, { onClick: this.clearButtonClick, key: "clearbutton" }),
      h && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading", key: "loading" }),
      this.props.suffix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(K, { ...be }),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
        {
          tabIndex: -1,
          type: "button",
          "aria-label": w ? t : i,
          icon: u ? void 0 : "caret-alt-down",
          svgIcon: D || _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon,
          iconClass: u,
          size: m,
          fillMode: b,
          rounded: null,
          themeColor: "base",
          className: "k-input-button",
          onClick: this.toggleBtnClick,
          onMouseDown: (Q) => Q.preventDefault()
        }
      ),
      !j && this.renderListContainer()
    ), j && this.renderAdaptiveListContainer());
    return a ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
      {
        label: a,
        editorId: A,
        editorValue: F,
        editorValid: N,
        editorDisabled: s,
        style: { width: r ? r.width : void 0 },
        children: X
      }
    ) : X;
  }
  /** @hidden */
  onNavigate(i, t, e) {
    const { data: s = [], virtual: n = { skip: 0 } } = this.props, a = this.props.filter ? this.props.filter : this.state.text, p = this.getFocusedIndex(), c = this.base.vs, d = this.value;
    if (this._suggested = "", p !== -1 && !U(d))
      this.handleItemSelect(p, i);
    else if (a === "")
      this.handleItemSelect(0, i);
    else {
      const r = n.skip + p, h = this.base.navigation.navigate({
        keyCode: t,
        current: r,
        max: (c.enabled ? c.total : s.length) - 1,
        min: 0,
        skipItems: e || void 0
      });
      h !== void 0 && this.handleItemSelect(h, i);
    }
  }
  getCurrentValueDisabledStatus(i, t, e) {
    return i && t && t[e] && t[e].disabled;
  }
  applyValueOnEnter(i, t) {
    const { data: e = [], textField: s, allowCustom: n } = this.props, a = this.props.opened !== void 0 ? this.props.opened : this.state.opened, c = V(this.value, s) === i ? this.index : Lt(e, i, s), d = c !== -1;
    let r;
    if (this._suggested = "", d)
      r = e[c];
    else if (n)
      r = s !== void 0 ? { [s]: i } : i;
    else
      return this.selectFocusedItem(i, t);
    this.triggerOnChange(r, t), a && this.base.togglePopup(t), this.props.filter === void 0 && this.state.text !== void 0 && (t.data.text = void 0), this.applyState(t);
  }
  applyValueOnRejectSuggestions(i, t) {
    const { data: e = [], textField: s, allowCustom: n } = this.props, a = this.props.opened !== void 0 ? this.props.opened : this.state.opened, p = V(this.value, s), c = this.state.windowWidth && this.state.windowWidth <= Ee;
    if (this._suggested = "", i === p || i === "" && !U(p))
      return a && !c && this.base.togglePopup(t), this.applyState(t);
    const d = Lt(e, i, s, !0), r = d !== -1;
    let h = null;
    r ? h = e[d] : n && (h = i ? s ? { [s]: i } : i : null), this.triggerOnChange(h, t), this.state.text !== void 0 && (t.data.text = void 0, this.base.filterChanged("", t)), a && !c && this.base.togglePopup(t), this.applyState(t);
  }
  selectFocusedItem(i, t) {
    const e = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { data: s = [], textField: n, virtual: a = { skip: 0 }, focusedItemIndex: p = Ve } = this.props, c = a.skip, d = i === "" && c === 0 ? 0 : p(s, i, n);
    return d !== -1 ? this.handleItemSelect(d + c, t) : (this.triggerOnChange(null, t), this.state.text !== void 0 && (t.data.text = void 0)), e && this.base.togglePopup(t), this.applyState(t);
  }
  renderAdaptiveListContainer() {
    const { windowWidth: i = 0 } = this.state, { header: t, footer: e, size: s, data: n = [], groupField: a, groupMode: p, list: c, virtual: d, adaptiveTitle: r, groupStickyHeaderItemRender: h } = this.props, u = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    let { group: f } = this.state;
    f === void 0 && a !== void 0 && (f = V(n[0], a));
    const m = {
      navigatable: !1,
      navigatableElements: [],
      expand: u,
      animation: !0,
      onClose: (v) => this.toggleBtnClick(v),
      animationStyles: i <= wt ? { top: 0, width: "100%", height: "100%" } : void 0,
      className: i <= wt ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheet, { ...m }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetHeader, { className: "k-text-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, r)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        onClick: this.toggleBtnClick,
        icon: "x",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon
      }
    ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, this.renderMobileListFilter())), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      {
        "k-list": !c,
        "k-list-lg": !0,
        "k-virtual-list": d,
        "k-data-table": c,
        [`k-table-${yt[s] || s}`]: c && s
      }
    ) }, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-table-header" }, t), !c && f && n.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: f, groupMode: p, render: h }), this.renderList(), e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-footer" }, e)))));
  }
  renderListContainer() {
    const i = this.base, { dir: t, header: e, footer: s, data: n = [], groupField: a, groupMode: p, size: c, list: d, virtual: r, groupStickyHeaderItemRender: h } = this.props, u = this.props.opened !== void 0 ? this.props.opened : this.state.opened, f = i.getPopupSettings(), m = f.width !== void 0 ? f.width : i.popupWidth;
    let { group: v } = this.state;
    return v === void 0 && a !== void 0 && (v = V(n[0], a)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Ft,
      {
        width: m,
        popupSettings: {
          ...f,
          anchor: f.anchor || this.element,
          show: u,
          popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            f.popupClass,
            "k-list-container",
            "k-combobox-popup"
          )
        },
        dir: t !== void 0 ? t : this.base.dirCalculated,
        itemsCount: [n.length]
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        {
          "k-list": !d,
          [`k-list-${yt[c] || c}`]: !d && c,
          "k-virtual-list": r,
          "k-data-table": d,
          [`k-table-${yt[c] || c}`]: d && c
        }
      ) }, e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-table-header" }, e), !d && v && n.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: v, groupMode: p, render: h }), this.renderList(), s && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        {
          "k-list-footer": !this.props.footerClassName
        },
        this.props.footerClassName
      ) }, s))
    );
  }
  renderList() {
    const i = this.base, {
      textField: t,
      dataItemKey: e,
      listNoDataRender: s,
      itemRender: n,
      groupHeaderItemRender: a,
      data: p = [],
      virtual: c = { skip: 0, total: void 0 }
    } = this.props, d = i.getPopupSettings(), r = i.vs, h = c.skip, u = this.props.opened !== void 0 ? this.props.opened : this.state.opened, f = `translateY(${r.translate}px)`, m = u ? this.getFocusedIndex() : void 0, v = this.props.filter !== void 0 ? this.props.filter : this.state.text, b = V(this.value, t), w = U(v) && v !== b ? null : this.value, k = this.props.list || je;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      k,
      {
        id: i.listBoxId,
        virtual: !!c,
        show: u,
        data: p,
        focusedIndex: m,
        value: w,
        textField: t,
        valueField: e,
        groupField: this.props.groupField,
        groupMode: this.props.groupMode,
        isMultiColumn: this.props.isMultiColumn,
        optionsGuid: i.guid,
        listRef: (D) => {
          r.list = this.base.list = D, this.itemHeight = 0;
        },
        wrapperStyle: this.state.windowWidth && this.state.windowWidth > Ee ? { maxHeight: d.height } : {},
        wrapperCssClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-list-content",
          {
            "k-list-scroller": !c
          }
        ),
        listStyle: r.enabled ? { transform: f } : void 0,
        key: "listkey",
        skip: h,
        onClick: this.handleItemClick,
        itemRender: n,
        groupHeaderItemRender: a,
        noDataRender: s,
        onMouseDown: (D) => D.preventDefault(),
        onScroll: this.onScroll,
        wrapperRef: r.scrollerRef,
        scroller: this.base.renderScrollElement(),
        ariaSetSize: c.total
      }
    );
  }
  renderSearchBar(i, t, e) {
    const {
      tabIndex: s,
      disabled: n,
      data: a = [],
      dataItemKey: p,
      virtual: c = { skip: 0 }
    } = this.props, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened, r = this.value, h = Math.max(0, a.findIndex((u) => R(u, r, p)));
    return this._suggested && !R(this._valueOnDidUpdate, r, p) && (this._suggested = ""), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      es,
      {
        id: t,
        readOnly: d && this.mobileMode,
        placeholder: e,
        tabIndex: s,
        title: this.props.title,
        accessKey: this.props.accessKey,
        value: i + this._suggested,
        suggestedText: this._suggested,
        ref: (u) => this._input = u && u.input,
        onClick: this.onInputClick,
        onKeyDown: this.onInputKeyDown,
        onChange: this.inputOnChange,
        onFocus: this.base.handleFocus,
        onBlur: this.handleBlur,
        disabled: n,
        expanded: d,
        owns: this.base.listBoxId,
        activedescendant: `option-${this.base.guid}-${h + c.skip}`,
        role: "combobox",
        ariaLabelledBy: this.props.ariaLabelledBy,
        ariaDescribedBy: this.props.ariaDescribedBy,
        ariaRequired: this.required,
        render: this.props.valueRender
      }
    );
  }
  clearValue() {
    const i = this.base.initState();
    this._suggested = "", this.base.filterChanged("", i), this.props.filter === void 0 && this.state.text !== void 0 && (i.data.text = void 0), this.triggerOnChange(null, i);
    const t = this.props.opened !== void 0 ? this.props.opened : this.state.opened, e = this.mobileMode;
    t && !e && this.base.togglePopup(i), this.applyState(i);
  }
  triggerOnChange(i, t) {
    const e = this.value;
    !U(e) && !U(i) || R(e, i, this.props.dataItemKey) || (this.props.value === void 0 && (t.data.value = i), this._valueDuringOnChange = i, t.events.push({ type: "onChange" }));
  }
  getFocusedIndex() {
    const i = this.value, { data: t = [], textField: e, dataItemKey: s, virtual: n = { skip: 0 }, focusedItemIndex: a = Ve, skipDisabledItems: p } = this.props, c = this.props.filter ? this.props.filter : this.state.text;
    return U(i) && c === void 0 ? t.findIndex((d) => R(d, i, s)) : c ? a(t, c, e) : p && e && !c && n.skip === 0 ? t.findIndex((d) => !d.disabled && d[e]) : n.skip === 0 ? 0 : -1;
  }
  suggestValue(i) {
    const { data: t, textField: e } = this.props;
    this._suggested = As(i, t, e);
  }
  applyState(i) {
    this.base.applyState(i), this._valueDuringOnChange = void 0;
  }
  calculateMedia(i) {
    for (const t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
let dt = xt;
dt.displayName = "ComboBox";
dt.propTypes = {
  ...oe.propTypes,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "solid", "flat", "outline"]),
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  groupField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  groupMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([void 0, "classic", "modern"]),
  isMultiColumn: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  suggest: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  allowCustom: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  clearButton: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  validationMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  valueRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  skipDisabledItems: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
dt.defaultProps = {
  ...oe.defaultProps,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  allowCustom: !1,
  clearButton: !0,
  required: !1,
  groupMode: "modern",
  isMultiColumn: !1,
  skipDisabledItems: !0,
  prefix: void 0,
  suffix: void 0
};
const ni = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), ys = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withPropsContext)(ni, dt));
ys.displayName = "KendoReactComboBox";
const oi = "Please enter a valid value!", { sizeMap: ls, roundedMap: ai } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, qt = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.state = {}, this.base = new oe(this), this._element = null, this._suggested = "", this._input = null, this._isScrolling = !1, this.itemHeight = 0, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleItemSelect = (t, e) => {
      const { data: s = [] } = this.props, n = V(s[t], this.props.textField);
      this.triggerOnChange(n, e);
    }, this.itemFocus = (t, e) => {
      const { data: s = [], textField: n } = this.props, a = s[t];
      R(this.state.focusedItem, a, n) || (e.data.focusedItem = a);
    }, this.togglePopup = (t) => {
      this.base.togglePopup(t);
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || oi
      );
    }, this.onScroll = (t) => {
      this._isScrolling = !0;
      const { list: e } = this.base, { groupField: s } = this.props;
      let { data: n = [] } = this.props;
      if (!s || !n.length)
        return;
      const a = this.itemHeight || (e ? e.children[0].offsetHeight : 0), c = t.target.scrollTop;
      s && (n = this.base.getGroupedDataModernMode(n, s));
      let d = n[0][s];
      for (let r = 1; r < n.length && !(a * r > c); r++)
        n[r] && n[r][s] && (d = n[r][s]);
      d !== this.state.group && this.setState({
        group: d
      });
    }, this.handleItemClick = (t, e) => {
      this.base.handleItemClick(t, e), this._valueDuringOnChange = void 0;
    }, this.onChangeHandler = (t) => {
      const s = this.base.initState(), n = t.currentTarget, a = n.value, p = n.selectionEnd === a.length;
      s.syntheticEvent = t;
      const c = this._suggested, d = this.value, r = d && d.substring(0, d.length - c.length), h = r && r === a, u = r && r.length > a.length, { suggest: f } = this.props, m = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      if (f !== void 0 && f !== !1) {
        h || u || !p ? this._suggested = "" : this.suggestValue(a);
        const v = a + this._suggested, b = { userInput: a, value: this._suggested };
        this.triggerOnChange(v, s, { suggestion: b });
      } else
        this._suggested = "", this.triggerOnChange(a, s);
      (!m && a || m && !a) && this.togglePopup(s), s.data.focusedItem = void 0, this.applyState(s), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t) => {
      const s = this.base.initState(), n = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      s.syntheticEvent = t;
      const a = "";
      this._suggested = "", this.triggerOnChange(a, s), this.state.focusedItem !== void 0 && (s.data.focusedItem = void 0), n && this.togglePopup(s), this.applyState(s);
    }, this.onInputKeyDown = (t) => {
      const { data: e = [], skipDisabledItems: s, groupField: n, textField: a } = this.props;
      this._isScrolling && (this._isScrolling = !1);
      const p = this.focusedIndex(), c = e[p], d = t.keyCode, r = t.altKey, h = this.props.opened !== void 0 ? this.props.opened : this.state.opened, u = this.base.initState();
      u.syntheticEvent = t;
      const f = () => {
        h && t.preventDefault();
      };
      if (r && d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down)
        this.setState({
          opened: !0
        });
      else if (r && d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up)
        this.setState({
          opened: !1
        });
      else if (h && d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageUp)
        this.base.scrollPopupByPageSize(-1);
      else if (h && d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageDown)
        this.base.scrollPopupByPageSize(1);
      else if (h && (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc))
        f(), s === !1 && c && c.disabled ? (h && this.togglePopup(u), this.applyState(u)) : this.applyInputValue(t.currentTarget.value, u, t.keyCode);
      else if (!h && d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc) {
        const m = "";
        this._suggested = "", this.triggerOnChange(m, u), this.state.focusedItem !== void 0 && (u.data.focusedItem = void 0), this.applyState(u);
      } else if (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down) {
        if (n !== "" && a)
          if (!this.props.skipDisabledItems && h)
            this.onNavigate(u, d);
          else {
            let m = 0;
            if (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
              const v = e.slice(p + 1).find((b) => !b.disabled && b[a]);
              m = v && e.findIndex((b) => b[a] === v[a]);
            } else if (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
              let v;
              if (p === -1)
                v = e, m = e.findIndex((b) => !b.disabled && b[a]);
              else {
                v = e.slice(0, p);
                let b = v.pop();
                for (; b && b.disabled; )
                  b = v.pop();
                m = b && e.findIndex((w) => w[a] === b[a]);
              }
            }
            if (m !== void 0) {
              const v = m - p;
              this.onNavigate(u, d, v);
            } else
              m === void 0 && e.findIndex((v) => v[a]) === e.length - 1 && this.onNavigate(u, d);
          }
        else if (!this.props.skipDisabledItems && h)
          this.onNavigate(u, d);
        else {
          let m = null;
          if (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)
            m = e.slice(p + 1).find((v) => !v.disabled);
          else if (d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || d === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
            const v = e.slice(0, p);
            for (m = v.pop(); m && m.disabled; )
              m = v.pop();
          }
          if (m) {
            const v = m.id - p - 1;
            this.onNavigate(u, d, v);
          } else
            this.onNavigate(u, d);
        }
        this.applyState(u), f();
      }
    }, this.handleBlur = (t) => {
      if (this.state.focused) {
        const e = this.base.initState();
        e.data.focused = !1, e.events.push({ type: "onBlur" }), e.syntheticEvent = t, this.applyInputValue(t.currentTarget.value, e);
      }
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  }
  get _inputId() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * The value of the AutoComplete.
   */
  get value() {
    return this._valueDuringOnChange !== void 0 ? this._valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value !== void 0 ? this.state.value : this.props.defaultValue !== void 0 ? this.props.defaultValue : "";
  }
  /**
   * Gets the `name` property of the AutoComplete.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the AutoComplete is set.
   */
  get validity() {
    const i = this.props.validationMessage !== void 0, t = !this.required || this.value !== "", e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: i,
      valid: e,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : qt.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : qt.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidUpdate(i, t) {
    var f;
    const { groupField: e = "", data: s = [] } = this.props, { data: n = [] } = i, a = this.focusedIndex(), p = s[a], c = n !== s, d = p !== void 0 && t.focusedItem !== p, r = this.props.opened !== void 0 ? this.props.opened : this.state.opened, h = i.opened !== void 0 ? i.opened : t.opened, u = !h && r;
    if (e === "")
      (r && (d || c) || u) && this.base.scrollToItem(a);
    else if (!this._isScrolling) {
      let m = (f = this.base.getGroupedDataModernMode(s, e)) == null ? void 0 : f.indexOf(p);
      u && (s && s.length !== 0 && this.base.resetGroupStickyHeader(s[0][e], this), this.base.scrollToItem(m)), r && h && d && this.base.scrollToItem(m);
    }
    this.setValidity();
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.base.didMount(), this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const { dir: i, disabled: t, label: e, className: s, style: n, loading: a, suggest: p, size: c, rounded: d, fillMode: r } = this.props, h = !this.validityStyles || this.validity.valid, u = this.base, f = this.value, m = this.props.clearButton !== !1 && !a && !!f, v = this.props.id || this._inputId;
    typeof p == "string" && (this._suggested = p);
    const [b, w] = Ne(this.props.prefix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), [k, D] = Ne(this.props.suffix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), O = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-autocomplete k-input",
          s,
          {
            [`k-input-${ls[c] || c}`]: c,
            [`k-rounded-${ai[d] || d}`]: d,
            [`k-input-${r}`]: r,
            "k-invalid": !h,
            "k-loading": a,
            "k-required": this.required,
            "k-disabled": t
          }
        ),
        ref: (N) => {
          this._element = N, u.wrapper = N;
        },
        style: e ? { ...n, width: void 0 } : n,
        dir: i
      },
      this.props.prefix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(b, { ...w }),
      this.renderSearchBar(f || "", v),
      a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading" }),
      m && !a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(rt, { onClick: this.clearButtonClick, key: "clearbutton" }),
      this.props.suffix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(k, { ...D }),
      this.renderListContainer()
    );
    return e ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
      {
        label: e,
        editorId: v,
        editorValue: f,
        editorValid: h,
        editorDisabled: t,
        style: { width: n ? n.width : void 0 },
        children: O
      }
    ) : O;
  }
  /**
   * @hidden
   */
  onNavigate(i, t, e) {
    const s = this.value, { data: n = [], textField: a, focusedItemIndex: p } = this.props, c = this.state.focusedItem !== void 0 ? n.findIndex((r) => R(r, this.state.focusedItem, a)) : p ? p(n, s, a) : n.indexOf(as(n, s, a)), d = this.base.navigation.navigate({
      keyCode: t,
      current: c,
      max: n.length - 1,
      min: 0,
      skipItems: e || void 0
    });
    d !== void 0 && this.itemFocus(d, i), this.applyState(i);
  }
  /**
   * @hidden
   */
  applyInputValue(i, t, e) {
    const s = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { data: n = [], textField: a } = this.props, p = this.focusedIndex(), c = n[p];
    if (this._suggested = "", s && e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter && c && !c.disabled) {
      const d = V(n[this.focusedIndex(i)], a);
      this.triggerOnChange(d, t);
    }
    s && this.togglePopup(t), this.applyState(t);
  }
  renderSearchBar(i, t) {
    const e = this.base, { placeholder: s, tabIndex: n, disabled: a, readonly: p } = this.props, { focused: c } = this.state, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      es,
      {
        id: t,
        placeholder: s,
        tabIndex: n,
        accessKey: this.props.accessKey,
        value: i,
        suggestedText: this._suggested,
        focused: c,
        name: this.props.name,
        ref: (r) => this._input = r && r.input,
        onKeyDown: this.onInputKeyDown,
        onChange: this.onChangeHandler,
        onFocus: e.handleFocus,
        onBlur: this.handleBlur,
        disabled: a,
        readOnly: p,
        expanded: d,
        owns: e.listBoxId,
        activedescendant: "option-" + e.guid + "-" + this.focusedIndex(),
        role: "combobox",
        ariaLabelledBy: this.props.ariaLabelledBy,
        ariaDescribedBy: this.props.ariaDescribedBy,
        ariaRequired: this.required,
        render: this.props.valueRender
      }
    );
  }
  renderListContainer() {
    const i = this.base, {
      dir: t,
      header: e,
      footer: s,
      data: n = [],
      size: a,
      groupField: p,
      list: c,
      groupStickyHeaderItemRender: d
    } = this.props, r = i.getPopupSettings(), h = this.props.opened !== void 0 ? this.props.opened : this.state.opened, u = r.width !== void 0 ? r.width : i.popupWidth;
    let { group: f } = this.state;
    return f === void 0 && p !== void 0 && (f = V(n[0], p)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Ft,
      {
        width: u,
        popupSettings: {
          ...r,
          anchor: r.anchor || this.element,
          show: h,
          popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            r.popupClass,
            "k-list-container",
            "k-autocomplete-popup"
          )
        },
        dir: t !== void 0 ? t : this.base.dirCalculated,
        itemsCount: [n.length]
      },
      e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-header" }, e),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-list",
            {
              [`k-list-${ls[a] || a}`]: a
            }
          )
        },
        !c && f && n.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: f, groupMode: "modern", render: d }),
        this.renderList()
      ),
      s && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-footer" }, s)
    );
  }
  renderList() {
    const i = this.base, t = i.getPopupSettings(), {
      textField: e,
      data: s = [],
      listNoDataRender: n,
      itemRender: a,
      groupHeaderItemRender: p
    } = this.props, c = this.value, d = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      je,
      {
        id: i.listBoxId,
        show: d,
        data: s.slice(),
        focusedIndex: this.focusedIndex(),
        value: c,
        textField: e,
        valueField: e,
        highlightSelected: !1,
        optionsGuid: i.guid,
        groupField: this.props.groupField,
        groupMode: "modern",
        listRef: (r) => i.list = r,
        wrapperStyle: { maxHeight: t.height },
        wrapperCssClass: "k-list-content",
        onClick: this.handleItemClick,
        itemRender: a,
        groupHeaderItemRender: p,
        noDataRender: n,
        onMouseDown: (r) => r.preventDefault(),
        onScroll: this.onScroll
      }
    );
  }
  triggerOnChange(i, t, e) {
    this.value === i && !e || (t.data.value = i, this._valueDuringOnChange = i, t.events.push({ type: "onChange", ...e || {} }));
  }
  applyState(i) {
    this.base.applyState(i), this._valueDuringOnChange = void 0;
  }
  suggestValue(i) {
    if (this._suggested = "", i) {
      const { data: t = [], textField: e } = this.props, s = t[Ve(t, i, e)];
      if (s) {
        const n = V(s, e);
        i.toLowerCase() !== n.toLowerCase() && (this._suggested = n.substring(i.length));
      }
    }
  }
  focusedIndex(i) {
    const { data: t = [], textField: e, focusedItemIndex: s, skipDisabledItems: n } = this.props, a = i !== void 0 ? i : this.value;
    if (this.state.focusedItem !== void 0)
      return t.findIndex((p) => R(p, this.state.focusedItem, e));
    if (s)
      return s(t, a, e);
    {
      const p = t.indexOf(as(t, a, e));
      return n && e && p === -1 ? t.findIndex((c) => !c.disabled && c[e]) : Math.max(0, p);
    }
  }
};
let Mt = qt;
Mt.displayName = "AutoComplete";
Mt.propTypes = {
  ...oe.basicPropTypes,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "solid", "flat", "outline"]),
  groupField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  suggest: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  validationMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  readonly: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  clearButton: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  valueRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  skipDisabledItems: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
Mt.defaultProps = {
  ...oe.defaultProps,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  skipDisabledItems: !0,
  prefix: void 0,
  suffix: void 0
};
const li = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), ri = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withPropsContext)(li, Mt));
ri.displayName = "KendoReactAutoComplete";
const di = (i) => i.syntheticEvent.preventDefault(), ci = (i) => i.syntheticEvent.stopPropagation();
class Is extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const { data: t, guid: e, focused: s, tagRender: n, tag: a, onTagDelete: p, size: c } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, t.map((d, r) => {
      const h = a ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        a,
        {
          key: d.text + r,
          tagData: d,
          guid: e,
          focusedTag: s,
          onTagDelete: p
        }
      ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Chip,
        {
          id: `tag-${e}-${d.text.replace(/\s+/g, "-")}`,
          "aria-selected": !0,
          role: "option",
          "aria-setsize": t.length,
          key: d.text + r,
          text: d.text,
          removable: !0,
          onRemove: (u) => p.call(void 0, d.data, u.syntheticEvent),
          onMouseDown: di,
          onClick: ci,
          className: d === s ? "k-focus" : void 0,
          size: c
        }
      );
      return n ? n(d, h) : h;
    }), this.props.children);
  }
}
var st = /* @__PURE__ */ ((i) => (i[i.PopupList = 0] = "PopupList", i[i.TagsList = 1] = "TagsList", i))(st || {});
const rs = 500, ts = (i) => {
  const {
    footer: t,
    children: e,
    windowWidth: s = 0,
    navigatable: n,
    navigatableElements: a,
    expand: p,
    animation: c,
    onClose: d,
    adaptiveTitle: r,
    mobileFilter: h
  } = i, u = {
    navigatable: n || !1,
    navigatableElements: a || [],
    expand: p,
    animation: c !== !1,
    onClose: d,
    animationStyles: s <= rs ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: s <= rs ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheet, { ...u }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetHeader, { className: "k-text-center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, r)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      icon: "x",
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon,
      onClick: d
    }
  ))), h && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, h)), e, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetFooter, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": t.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onCancel
    },
    t.cancelText
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": t.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onApply
    },
    t.applyText
  )));
}, { sizeMap: It, roundedMap: pi } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, hi = "Please enter a valid value!", ds = (i) => i.preventDefault(), cs = (i) => i === 2, $t = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.state = {
      activedescendant: st.PopupList,
      currentValue: []
    }, this._element = null, this._valueItemsDuringOnChange = null, this.base = new oe(this), this._tags = [], this._input = null, this._adaptiveInput = null, this._skipFocusEvent = !1, this._lastSelectedOrDeslectedItemIndex = null, this.itemHeight = 0, this.scrollToFocused = !1, this.localization = null, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleItemSelect = (t, e) => {
      const { data: s = [], dataItemKey: n, virtual: a } = this.props, p = a ? a.skip : 0, c = s[t - p], d = this.value.findIndex((u) => R(u, c, n));
      this._lastSelectedOrDeslectedItemIndex = s.findIndex((u) => R(u, c, n));
      let r = [];
      d !== -1 ? (r = this.value, r.splice(d, 1)) : r = [...this.value, c], (this.props.filter !== void 0 ? this.props.filter : this.state.text) && !this.mobileMode && (this.state.text && (e.data.text = ""), this.base.filterChanged("", e)), this._adaptiveInput && this._adaptiveInput.blur(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.triggerOnChange(r, e), this.base.triggerPageChangeCornerItems(c, e);
    }, this.onTagDelete = (t, e) => {
      const s = this.base.initState();
      s.syntheticEvent = e, this.opened && this.base.togglePopup(s), !this.state.focused && !this.mobileMode && (s.data.focused = !0, this.focus());
      const n = this.value;
      bt(n, t, this.props.dataItemKey), this.triggerOnChange(n, s), this.applyState(s);
    }, this.itemFocus = (t, e) => {
      const { data: s = [], allowCustom: n, virtual: a } = this.props, p = a ? a.skip : 0, c = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedIndex: d } = this.getFocusedState(), r = n && c, h = s[t - p];
      h && d !== t ? this.state.focusedIndex !== t && (e.data.focusedIndex = t, e.data.activedescendant = st.PopupList) : r && t === -1 && this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.base.triggerPageChangeCornerItems(h, e);
    }, this.componentRef = (t) => {
      this._element = t, this.base.wrapper = t;
    }, this.searchbarRef = (t) => {
      const e = this._input = t && t.input;
      e && this.state.focused && window.setTimeout(() => e.focus(), 0);
    }, this.onChangeHandler = (t) => {
      const e = this.base.initState(), s = t.target.value;
      e.syntheticEvent = t, this.props.filter === void 0 && (e.data.text = s), e.data.focusedIndex = void 0, this.opened || (this.base.togglePopup(e), this.setState({ currentValue: this.value })), this.base.filterChanged(s, e), this.applyState(e), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.value.length > 0 && this.triggerOnChange([], e), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e);
      const s = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      U(s) && s !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this._lastSelectedOrDeslectedItemIndex = null, this.applyState(e);
    }, this.onInputKeyDown = (t) => {
      const { data: e = [], textField: s, groupField: n } = this.props, a = t.keyCode, p = this.props.filter !== void 0 ? this.props.filter : this.state.text, c = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { focusedItem: d, focusedIndex: r } = this.getFocusedState(), h = this.base.initState();
      if (h.syntheticEvent = t, !p && this.value.length > 0 && (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.delete || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.backspace) && !t.shiftKey)
        return this.onTagsNavigate(t, h);
      const u = () => {
        t.preventDefault(), this.base.togglePopup(h), this.applyState(h);
      };
      if (this.opened)
        if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageUp)
          this.base.scrollPopupByPageSize(-1);
        else if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.pageDown)
          this.base.scrollPopupByPageSize(1);
        else if ((t.ctrlKey || t.metaKey) && t.code === "KeyA") {
          const m = (this.state.value && this.state.value.length) === e.length ? [] : e;
          this.updateStateOnKeyboardNavigation(m, h);
        } else if ((t.ctrlKey || t.metaKey) && t.shiftKey && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end) {
          const f = e.slice(this.getFocusedState().focusedIndex);
          this.itemFocus(e.length - 1, h), this.updateStateOnKeyboardNavigation(f, h);
        } else if ((t.ctrlKey || t.metaKey) && t.shiftKey && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home) {
          const f = e.slice(0, this.getFocusedState().focusedIndex + 1);
          this.itemFocus(0, h), this.updateStateOnKeyboardNavigation(f, h);
        } else if (t.shiftKey && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up) {
          let f;
          const m = this.getLastSelectedOrDeselectedIndex(1, r);
          m === null ? f = r !== 0 ? e.slice(r - 1, r) : [e[r]] : m === r ? f = [e[m - 1]] : r >= 0 && (f = m > r ? e.slice(r - 1, m) : e.slice(m - 1, r)), f && f.length > 0 && (r >= 1 && this.itemFocus(r - 1, h), this.updateStateOnKeyboardNavigation(f, h));
        } else if (t.shiftKey && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down) {
          let f;
          const m = this.getLastSelectedOrDeselectedIndex(0, r);
          m === null ? f = r !== e.length - 1 ? e.slice(r, r + 1) : [e[r]] : m === r ? f = e.slice(r, r + 2) : r >= 0 && (f = m > r ? e.slice(r + 1, m + 1) : e.slice(m, r + 2)), f && f.length >= 1 && (this.itemFocus(r + 1, h), this.updateStateOnKeyboardNavigation(f, h));
        } else if (t.altKey && a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up)
          u();
        else if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down) {
          if (n !== "" && s)
            if (!this.props.skipDisabledItems && c)
              this.onNavigate(h, a);
            else {
              let f = 0;
              if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right) {
                const m = e.slice(r + 1).find((v) => !v.disabled && v[s]);
                f = m && e.findIndex((v) => v[s] === m[s]);
              } else if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
                let m;
                if (r === -1)
                  m = e, f = e.findIndex((v) => !v.disabled && v[s]);
                else {
                  m = e.slice(0, r);
                  let v = m.pop();
                  for (; v && v.disabled; )
                    v = m.pop();
                  f = v && e.findIndex((b) => b[s] === v[s]);
                }
              }
              if (f) {
                const m = f - r;
                this.onNavigate(h, a, m);
              } else
                f !== void 0 && this.onNavigate(h, a);
            }
          else if (!this.props.skipDisabledItems && c)
            this.onNavigate(h, a);
          else {
            let f = null;
            if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)
              f = e.slice(r + 1).find((m) => !m.disabled);
            else if (a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left) {
              const m = e.slice(0, r);
              for (f = m.pop(); f && f.disabled; )
                f = m.pop();
            }
            if (f) {
              const m = f.id - r - 1;
              this.onNavigate(h, a, m);
            } else
              this.onNavigate(h, a);
          }
          this.applyState(h), t.preventDefault();
        } else
          a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter ? (t.preventDefault(), this.props.allowCustom && p && d === null ? this.customItemSelect(t) : d && d.disabled ? u() : this.selectFocusedItem(t)) : a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc && u();
      else
        t.altKey && a === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && u();
    }, this.listContainerContent = () => {
      const { header: t, footer: e, allowCustom: s, size: n, data: a = [], groupStickyHeaderItemRender: p, groupField: c, list: d } = this.props, r = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: h } = this.getFocusedState(), u = s && r && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-list", {
            [`k-list-${It[n] || n}`]: n
          }),
          key: "customitem",
          onClick: this.customItemSelect,
          onMouseDown: ds
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-list-item k-custom-item", { "k-focus": cs(h) }),
            style: { fontStyle: "italic" }
          },
          r,
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "plus", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.plusIcon, style: { position: "absolute", right: "0.5em" } })
        )
      );
      let { group: f } = this.state;
      return f === void 0 && c !== void 0 && (f = V(a[0], c)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-header" }, t), u, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-list",
            {
              [`k-list-${this.mobileMode ? "lg" : It[n] || n}`]: n,
              "k-virtual-list": this.base.vs.enabled
            }
          )
        },
        !d && f && a.length !== 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe, { group: f, groupMode: "modern", render: p }),
        this.renderList()
      ), e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-footer" }, e));
    }, this.renderListContainer = () => {
      const t = this.base, { dir: e, data: s = [] } = this.props, n = this.base.getPopupSettings(), a = n.width !== void 0 ? n.width : t.popupWidth, p = {
        dir: e !== void 0 ? e : t.dirCalculated,
        width: a,
        popupSettings: {
          ...n,
          popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            n.popupClass,
            "k-list-container",
            "k-multiselect-popup"
          ),
          anchor: n.anchor || this.element,
          show: this.opened,
          onOpen: this.onPopupOpened,
          onClose: this.onPopupClosed
        },
        itemsCount: [s.length, this.value.length]
      };
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ft, { ...p }, this.listContainerContent());
    }, this.renderAdaptiveListContainer = () => {
      const { adaptiveTitle: t, filterable: e, filter: s } = this.props, { windowWidth: n = 0 } = this.state, a = s !== void 0 ? s : this.state.text;
      this.localization = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.provideLocalizationService)(this);
      const p = e ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Re,
        {
          value: a,
          ref: (d) => this._adaptiveInput = d && d.element,
          onChange: this.onChangeHandler,
          onKeyDown: this.onInputKeyDown,
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      ) : null, c = {
        adaptiveTitle: t,
        expand: this.opened,
        onClose: (d) => this.onCancel(d),
        windowWidth: n,
        mobileFilter: p,
        footer: {
          cancelText: this.localization.toLanguageString(ot, ce[ot]),
          onCancel: this.onCancel,
          applyText: this.localization.toLanguageString(nt, ce[nt]),
          onApply: this.closePopup
        }
      };
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ts, { ...c }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-container" }, this.listContainerContent())));
    }, this.closePopup = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e), e.events.push({ type: "onClose" });
      const s = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      U(s) && s !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.onCancel = (t) => {
      const e = this.base.initState();
      e.syntheticEvent = t, t.stopPropagation(), this.state.focusedIndex !== void 0 && (e.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e), e.events.push({ type: "onCancel" });
      const s = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      U(s) && s !== "" && this.base.filterChanged("", e), this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.renderList = () => {
      const {
        data: t = [],
        textField: e,
        listNoDataRender: s,
        itemRender: n,
        groupHeaderItemRender: a,
        dataItemKey: p,
        virtual: c = { skip: 0, total: void 0 }
      } = this.props, d = this.base.vs, { focusedIndex: r } = this.getFocusedState(), h = this.base.getPopupSettings(), u = `translateY(${d.translate}px)`;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        je,
        {
          id: this.base.listBoxId,
          show: this.opened,
          data: t.slice(),
          focusedIndex: r - c.skip,
          value: this.value,
          textField: e,
          valueField: p,
          optionsGuid: this.base.guid,
          groupField: this.props.groupField,
          groupMode: "modern",
          listRef: (f) => {
            d.list = this.base.list = f;
          },
          wrapperStyle: this.mobileMode ? {} : { maxHeight: h.height },
          wrapperCssClass: "k-list-content",
          listStyle: d.enabled ? { transform: u } : void 0,
          key: "listKey",
          skip: c.skip,
          onClick: this.handleItemClick,
          itemRender: n,
          groupHeaderItemRender: a,
          noDataRender: s,
          onMouseDown: ds,
          onBlur: this.handleBlur,
          onScroll: this.onScroll,
          wrapperRef: d.scrollerRef,
          scroller: this.base.renderScrollElement(),
          ariaSetSize: c.total
        }
      );
    }, this.onScroll = (t) => {
      const { vs: e, list: s } = this.base;
      e.scrollHandler(t);
      const { groupField: n } = this.props;
      let { data: a = [] } = this.props;
      if (!(!n || !a.length) && n) {
        const p = this.itemHeight = this.itemHeight || (e.enabled ? e.itemHeight : s ? s.children[0].offsetHeight : 0), d = t.target.scrollTop - e.skip * p;
        a = this.base.getGroupedDataModernMode(a, n);
        let r = a[0][n];
        for (let h = 1; h < a.length && !(p * h > d); h++)
          a[h] && a[h][n] && (r = a[h][n]);
        r !== this.state.group && this.setState({
          group: r
        });
      }
    }, this.customItemSelect = (t) => {
      const e = this.props.filter !== void 0 ? this.props.filter : this.state.text, { textField: s } = this.props;
      if (!e)
        return;
      const n = this.base.initState();
      n.syntheticEvent = t;
      const a = s ? { [s]: e } : e;
      this.state.text !== void 0 && (n.data.text = ""), n.data.focusedIndex = void 0, this.base.filterChanged("", n);
      const p = [...this.value, a];
      this.triggerOnChange(p, n), this.base.togglePopup(n), this.applyState(n);
    }, this.handleWrapperClick = (t) => {
      const e = this._input;
      !this.opened && e && this.focusElement(e);
      const s = this.base.initState();
      s.syntheticEvent = t, !this.state.focused && !this.mobileMode && (s.events.push({ type: "onFocus" }), s.data.focused = !0), this.mobileMode && (this.setState({ currentValue: this.tagsToRender }), this.mobileMode && window.setTimeout(() => this._adaptiveInput && this._adaptiveInput.focus(), 300)), this.base.togglePopup(s), this.applyState(s);
    }, this.handleItemClick = (t, e) => {
      const s = this.base.initState();
      s.syntheticEvent = e, this.handleItemSelect(t, s), this.props.autoClose && !this.mobileMode && this.base.togglePopup(s), e.stopPropagation(), this.applyState(s);
    }, this.handleBlur = (t) => {
      if (!this.state.focused || this._skipFocusEvent)
        return;
      const e = this.base.initState(), { allowCustom: s, filterable: n } = this.props;
      e.syntheticEvent = t, e.data.focused = !1, e.events.push({ type: "onBlur" }), this.opened && !this.mobileMode && (this.state.opened && (e.data.opened = !1), e.events.push({ type: "onClose" })), !s && !n && this.state.text && (e.data.text = ""), this.applyState(e);
    }, this.handleFocus = (t) => {
      this._skipFocusEvent || this.base.handleFocus(t);
    }, this.onPopupOpened = () => {
      this._input && this.state.focused && !this.mobileMode && this.focusElement(this._input);
    }, this.onPopupClosed = () => {
      this.state.focused && window.setTimeout(() => {
        this.state.focused && this.focusElement(this._input);
      }, 0);
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || hi
      );
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /** @hidden */
  get opened() {
    return !!(this.props.opened !== void 0 ? this.props.opened : this.state.opened);
  }
  /** @hidden */
  get tagsToRender() {
    const { tags: i, textField: t } = this.props;
    let e = [];
    return i === void 0 ? this.value.forEach((s) => {
      e.push({ text: V(s, t), data: [s] });
    }) : e.push(...i), e;
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= Ee && this.props.adaptive);
  }
  /**
   * Represents the value of the MultiSelect.
   */
  get value() {
    const i = [];
    return this._valueItemsDuringOnChange ? i.push(...this._valueItemsDuringOnChange) : this.props.value ? i.push(...this.props.value) : this.state.value ? i.push(...this.state.value) : this.props.defaultValue && i.push(...this.props.defaultValue), i;
  }
  /**
   * Gets the `name` property of the MultiSelect.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the MultiSelect is set.
   */
  get validity() {
    const i = this.props.validationMessage !== void 0, t = !this.required || this.value !== null && this.value.length > 0 && this.value !== void 0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: i,
      valid: e,
      valueMissing: this.value === null
    };
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : $t.defaultProps.required;
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : $t.defaultProps.validityStyles;
  }
  /** @hidden */
  componentDidUpdate(i, t) {
    var u;
    const { virtual: e, groupField: s = "", data: n = [] } = this.props, a = e ? e.skip : 0, p = i.virtual ? i.virtual.total : 0, c = i.opened !== void 0 ? i.opened : t.opened, d = !c && this.opened, r = c && !this.opened;
    if (!this.base.getPopupSettings().animate && r && this.onPopupClosed(), e && e.total !== p)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      let { focusedItem: f, focusedIndex: m } = this.getFocusedState();
      s !== "" && (m = (u = this.base.getGroupedDataModernMode(n, s)) == null ? void 0 : u.indexOf(f)), d && e ? this.base.scrollToVirtualItem(e, m - a) : d && !e ? (n && n.length !== 0 && this.base.resetGroupStickyHeader(n[0][s], this), this.base.scrollToItem(m)) : this.opened && c && f && this.scrollToFocused && this.base.scrollToItem(m - a);
    }
    this.scrollToFocused = !1, this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var i;
    this.observerResize = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (i = this.document) != null && i.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /** @hidden */
  componentWillUnmount() {
    var i;
    (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect();
  }
  /** @hidden */
  onNavigate(i, t, e) {
    const { allowCustom: s, data: n = [] } = this.props, a = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: p, focusedIndex: c } = this.getFocusedState(), d = s && a, r = cs(p), h = this.base, u = h.vs;
    if (this.opened && t === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && r)
      this.state.focusedIndex !== void 0 && (i.data.focusedIndex = void 0);
    else {
      const f = h.navigation.navigate({
        keyCode: t,
        current: c,
        max: (u.enabled ? u.total : n.length) - 1,
        min: d ? -1 : 0,
        skipItems: e || void 0
      });
      f !== void 0 && (this.itemFocus(f, i), this.scrollToFocused = !0);
    }
    this.applyState(i);
  }
  /** @hidden */
  render() {
    const {
      style: i,
      className: t,
      label: e,
      dir: s,
      disabled: n,
      textField: a,
      dataItemKey: p,
      virtual: c,
      size: d,
      rounded: r,
      fillMode: h,
      loading: u,
      filter: f
    } = this.props, { text: m, focused: v, focusedTag: b, currentValue: w } = this.state, k = this.base.vs, D = this.props.id || this._inputId;
    k.enabled = c !== void 0, c !== void 0 && (k.skip = c.skip, k.total = c.total, k.pageSize = c.pageSize);
    const O = this.mobileMode && this.opened ? w : this.tagsToRender;
    this.setItems(this.tagsToRender, this._tags);
    const N = !this.validityStyles || this.validity.valid, _ = !!(f !== void 0 ? f : m) || O && O.length > 0, [S, F] = Ne(this.props.prefix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), [C, E] = Ne(this.props.suffix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment), M = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: this.componentRef,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-multiselect k-input", t, {
          [`k-input-${It[d] || d}`]: d,
          [`k-rounded-${pi[r] || r}`]: r,
          [`k-input-${h}`]: h,
          "k-focus": v && !n,
          "k-invalid": !N,
          "k-disabled": n,
          "k-loading": u,
          "k-required": this.required
        }),
        style: e ? { ...i, width: void 0 } : i,
        dir: s,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleWrapperClick,
        onMouseDown: Ws
      },
      this.props.prefix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(S, { ...F }),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-input-values") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-chip-list",
            { [`k-chip-list-${It[d] || d}`]: d }
          ),
          role: "listbox",
          id: "tagslist-" + this.base.guid
        },
        O && O.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Is,
          {
            tagRender: this.props.tagRender,
            onTagDelete: this.onTagDelete,
            data: O,
            guid: this.base.guid,
            focused: b ? O.find((A) => St(A, b, p)) : void 0,
            size: d
          }
        )
      ), this.renderSearchBar(D)),
      u && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading" }),
      this.props.suffix && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(C, { ...E }),
      _ && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(rt, { onClick: this.clearButtonClick }),
      !this.mobileMode && this.renderListContainer()
    ), this.mobileMode && this.renderAdaptiveListContainer());
    return e ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
      {
        label: e,
        editorId: D,
        editorValue: m || V(this.value[0], a),
        editorValid: N,
        editorDisabled: n,
        style: { width: i ? i.width : void 0 },
        children: M
      }
    ) : M;
  }
  renderSearchBar(i) {
    const { activedescendant: t, focusedTag: e, currentValue: s } = this.state, { disabled: n, placeholder: a, ariaDescribedBy: p } = this.props, c = !this.mobileMode && (this.props.filter !== void 0 ? this.props.filter : this.state.text) || "", { focusedIndex: d } = this.getFocusedState(), r = this.value.length === 0 && !c ? a : void 0, h = s && s.length > 0 ? void 0 : a, u = t === st.TagsList && e !== void 0 ? `tag-${this.base.guid}-${e.text.replace(/\s+/g, "-")}` : `option-${this.base.guid}-${d}`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      es,
      {
        id: i,
        size: Math.max((r || "").length, c.length, 1),
        tabIndex: this.props.tabIndex,
        accessKey: this.props.accessKey,
        placeholder: this.mobileMode && this.opened ? h : r,
        value: c,
        onChange: this.onChangeHandler,
        onKeyDown: this.onInputKeyDown,
        ref: this.searchbarRef,
        disabled: n,
        expanded: this.opened,
        owns: this.base.listBoxId,
        role: "combobox",
        activedescendant: u,
        ariaDescribedBy: `tagslist-${this.base.guid}${p ? " " + p : ""}`,
        ariaLabelledBy: this.props.ariaLabelledBy,
        ariaRequired: this.required
      }
    );
  }
  onTagsNavigate(i, t) {
    const e = i.keyCode, { focusedTag: s } = this.state, n = this._tags, a = this.props.dataItemKey;
    let p = s ? n.findIndex((r) => St(r, s, a)) : -1, c;
    const d = p !== -1;
    if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left)
      d ? p = Math.max(0, p - 1) : p = n.length - 1, c = n[p];
    else if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right)
      p === n.length - 1 ? c = void 0 : d && (p = Math.min(n.length - 1, p + 1), c = n[p]);
    else if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home && !i.shiftKey)
      c = n[0];
    else if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end && !i.shiftKey)
      c = n[n.length - 1];
    else if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.delete) {
      if (d) {
        const r = this.value;
        bt(r, n[p].data, a), this.triggerOnChange(r, t);
      }
    } else if (e === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.backspace) {
      const r = this.value;
      if (d)
        bt(r, n[p].data, a), this.triggerOnChange(r, t);
      else if (!d && n.length) {
        const h = n.pop();
        bt(r, h.data, a), this.triggerOnChange(r, t);
      }
    }
    c !== s && (t.data.focusedTag = c, t.data.activedescendant = st.TagsList), this.applyState(t);
  }
  triggerOnChange(i, t) {
    this.props.value === void 0 && (t.data.value = [...i]), this._valueItemsDuringOnChange = [], this.setItems(i, this._valueItemsDuringOnChange), t.events.push({ type: "onChange" });
  }
  selectFocusedItem(i, t) {
    const { data: e = [], virtual: s } = this.props, { focusedIndex: n } = t || this.getFocusedState(), a = s ? s.skip : 0;
    e[n - a] !== void 0 && this.handleItemClick(n, i);
  }
  setItems(i, t) {
    t.length = 0, t.push(...i);
  }
  getFocusedState() {
    const { focusedIndex: i } = this.state, t = this.props.filter !== void 0 ? this.props.filter : this.state.text, { allowCustom: e, data: s = [], dataItemKey: n, virtual: a, textField: p, focusedItemIndex: c = Ve, skipDisabledItems: d } = this.props, r = a && a.skip || 0;
    let h;
    if (i !== void 0)
      return {
        focusedIndex: i,
        focusedItem: s[i - r],
        focusedType: 1
        /* ListItem */
      };
    const u = this.value;
    if (e && t)
      return {
        focusedItem: null,
        focusedIndex: -1,
        focusedType: 2
        /* CustomItem */
      };
    if (t)
      return h = c(s, t, p), {
        focusedItem: s[h],
        focusedIndex: h + r,
        focusedType: 1
        /* ListItem */
      };
    if (u.length) {
      const f = u[u.length - 1];
      return h = s.findIndex((m) => R(m, f, n)), s[h] !== void 0 ? {
        focusedIndex: h + r,
        focusedItem: s[h],
        focusedType: 1
        /* ListItem */
      } : { focusedType: 0, focusedIndex: -1 };
    } else if (d && p && !t && r === 0) {
      const f = s.findIndex((m) => !m.disabled && m[p]);
      return {
        focusedIndex: f,
        focusedItem: s[f - r],
        focusedType: 1
        /* ListItem */
      };
    }
    return r === 0 ? {
      focusedItem: s[0],
      focusedIndex: 0,
      focusedType: 1
      /* ListItem */
    } : { focusedType: 0, focusedIndex: -1 };
  }
  focusElement(i) {
    this._skipFocusEvent = !0, i.focus(), window.setTimeout(() => this._skipFocusEvent = !1, 0);
  }
  applyState(i) {
    this.base.applyState(i), this._valueItemsDuringOnChange = null;
  }
  calculateMedia(i) {
    for (let t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
  /**
   * Updates the state of the MultiSelect when the complex keyboard navigation that
   * includes key combinations with the Ctrl/Command, Shift, Home and End keys
   *
   * @param {Array<string | Object>} dataToSet Defines the array of new values that will be applied to the MultiSelect
   * @param {MultiSelectInternalState} state The current state of the MultiSelect
   */
  updateStateOnKeyboardNavigation(i, t) {
    this.setState({ value: i }), this.triggerOnChange(i, t), this.applyState(t);
  }
  /**
   * Returns the last element that was selected or deselected. Needed for the keyboard navigation specifications
   *
   * @param {number} correction A correction is needed depending on if UP or DOWN key is pressed
   */
  getLastSelectedOrDeselectedIndex(i, t) {
    return this._lastSelectedOrDeslectedItemIndex === null && (this._lastSelectedOrDeslectedItemIndex = t), this._lastSelectedOrDeslectedItemIndex !== null ? this._lastSelectedOrDeslectedItemIndex + i : null;
  }
};
let Nt = $t;
Nt.displayName = "MultiSelect";
Nt.propTypes = {
  ...oe.propTypes,
  autoClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    data: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any)
  })),
  tagRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  groupField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  adaptive: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  adaptiveTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  skipDisabledItems: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
Nt.defaultProps = {
  ...oe.defaultProps,
  autoClose: !0,
  required: !1,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  groupMode: "modern",
  skipDisabledItems: !0,
  prefix: void 0,
  suffix: void 0
};
const ui = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), fi = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withPropsContext)(ui, Nt));
fi.displayName = "KendoReactMultiSelect";
const gi = (i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  je,
  {
    ...i,
    wrapperCssClass: "k-table-body k-table-scroller",
    listClassName: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-table k-table-list",
      {
        "k-virtual-table": i.virtual !== void 0
      }
    ),
    listStyle: { ...i.listStyle }
  }
), mi = (i, t) => i ? typeof i == "number" ? i + "px" : i : t, vi = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), ss = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((i, t) => {
  const e = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.usePropsContext)(vi, i), s = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), n = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getScrollbarWidth)(), {
    columns: p = Ae.columns,
    popupSettings: c = Ae.popupSettings,
    className: d,
    size: r,
    prefix: h = void 0,
    suffix: u = void 0,
    onOpen: f,
    onClose: m,
    onFocus: v,
    onBlur: b,
    onChange: w,
    onFilterChange: k,
    onPageChange: D,
    ...O
  } = e;
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(s, () => ({
    element: n.current && n.current.element,
    focus() {
      n.current && n.current.focus();
    },
    get value() {
      return n.current && n.current.value;
    },
    get name() {
      return n.current && n.current.name;
    },
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => s.current);
  const N = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => {
      if (e.groupField !== void 0 && e.data)
        return V(e.data[0], e.groupField);
    },
    [e.data, e.groupField]
  ), [_, S] = react__WEBPACK_IMPORTED_MODULE_0__.useState(N), [F, C] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!0), [E] = h ? Ne(e.prefix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment) : [], [M] = u ? Ne(e.suffix || react__WEBPACK_IMPORTED_MODULE_0__.Fragment) : [], A = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => {
      const P = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "k-table-th", colSpan: p.length }, _);
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.header, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-table-header-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "k-table", role: "presentation" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("colgroup", null, p.map(
        (W, ge) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "col",
          {
            key: W.uniqueKey ? W.uniqueKey : ge,
            style: { width: W.width ? W.width : Ae.width }
          }
        )
      )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: "k-table-thead" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: "k-table-row" }, p.map((W, ge) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "k-table-th", key: W.uniqueKey ? W.uniqueKey : ge }, W.header || " "))), _ && F && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: "k-table-group-row" }, e.groupStickyHeaderItemRender ? e.groupStickyHeaderItemRender.call(void 0, P, {}) : P)))));
    },
    [e.header, p, _, F]
  ), j = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (
      // These additional 4px are coming from the child elements side borders (fixes horizontal scrollbar)
      `calc(${p.map((P) => mi(P.width, Ae.width)).filter(Boolean).join(" + ")} + ${a}px + 4px)`
    ),
    [p, a]
  ), Y = e.virtual ? e.virtual.skip : 0, Z = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (P, W) => {
      const ge = p.map((ee, ct) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "span",
        {
          className: e.itemRender ? void 0 : "k-table-td",
          style: e.itemRender ? void 0 : { width: ee.width ? ee.width : Ae.width },
          key: ee.uniqueKey ? ee.uniqueKey : ct
        },
        ee.field ? String((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(ee.field)(W.dataItem)) : ""
      ));
      let z, J, ke, le, q = e.data || [];
      const re = W.index - Y;
      e.groupField !== void 0 && (le = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(e.groupField), J = le(q[re]), ke = le(q[re - 1]), J && ke && J !== ke && (z = J)), z && e.groupMode === "classic" && ge.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "group", className: "k-table-td k-table-group-td" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, z)));
      const Se = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(P, {
        ...P.props,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-table-row", {
          "k-table-alt-row": W.index % 2 !== 0,
          "k-focus": W.focused,
          "k-selected": W.selected,
          "k-first": !!z,
          "k-disabled": W.dataItem.disabled
        })
      }, ge);
      return e.itemRender ? e.itemRender.call(void 0, Se, W) : Se;
    },
    [p, e.groupField, e.itemRender, e.data, Y]
  ), K = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (P, W) => {
      P && P.call(void 0, {
        ...W,
        target: s.current
      });
    },
    []
  ), be = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => (e.virtual || S(N), K(f, P)), [K, f, e.virtual, N]), X = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => K(m, P), [m]), Q = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => K(v, P), [v]), ae = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => K(b, P), [b]), Ke = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => K(w, P), [w]), Oe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => K(D, P), [D]), Le = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => (S(N), K(k, {
    ...P,
    mobileMode: P.target.mobileMode
  })), [k]), H = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (P) => {
      S(P.group);
    },
    []
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.setScrollbarWidth)();
  }), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const P = e.data;
    S(N), P && P.length !== 0 ? C(!0) : C(!1);
  }, [e.data]);
  const ze = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((P) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(gi, { ...P }), []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_5__.PopupPropsContext.Provider,
    {
      value: (P) => ({ ...P, popupClass: `k-dropdowngrid-popup ${c.popupClass}` })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ys,
      {
        ...O,
        list: ze,
        popupSettings: {
          ...c,
          width: c.width || j,
          className: c.className
        },
        ref: n,
        header: A,
        itemRender: Z,
        groupHeaderItemRender: e.groupHeaderItemRender,
        size: e.size,
        rounded: e.rounded,
        fillMode: e.fillMode,
        groupMode: e.groupMode,
        groupField: e.groupField,
        isMultiColumn: !0,
        onOpen: be,
        onClose: X,
        onFocus: Q,
        onBlur: ae,
        onChange: Ke,
        onFilterChange: Le,
        onPageChange: Oe,
        onGroupScroll: H,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-dropdowngrid", d),
        required: e.required,
        adaptive: e.adaptive,
        adaptiveFilter: e.adaptiveFilter,
        adaptiveTitle: e.adaptiveTitle,
        footer: e.footer,
        footerClassName: "k-table-footer",
        prefix: E,
        suffix: M
      }
    )
  );
}), bi = {
  ...dt.propTypes,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1__.any.isRequired
}, Ae = {
  columns: [],
  popupSettings: {},
  width: "200px",
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
ss.displayName = "KendoMultiColumnComboBox";
ss.propTypes = bi;
ss.defaultProps = Ae;
function yi(i, t, e) {
  const [s, n] = react__WEBPACK_IMPORTED_MODULE_0__.useState(t);
  return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      s !== void 0 && i.current && n(i.current.offsetWidth);
    },
    e
  ), s;
}
function xs(i, t, e, s) {
  const n = e.width !== void 0 && e.width !== t.popupSettings.width, a = s.width !== void 0, p = n ? e.width : a ? s.width : t.popupSettings.width, c = yi(i, p);
  return n || a ? p : c && c > t.popupSettings.width ? c : t.popupSettings.width;
}
const Cs = (i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-nodata" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, i.children)), { sizeMap: Ii, roundedMap: xi } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, Ci = "Please select a value from the list!", ki = (i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-input-value-text" }, i.children), ps = (i) => i.split("_").map((t) => parseInt(t, 10)), Si = (i, t) => {
  const { validationMessage: e, valid: s, required: n } = i;
  return {
    customError: e !== void 0,
    valid: !!(s !== void 0 ? s : !n || t),
    valueMissing: !t
  };
}, hs = {
  selectField: "selected",
  subItemsField: "items",
  popupSettings: {
    animate: !0,
    width: "200px",
    height: "200px"
  },
  data: [],
  required: !1,
  style: {},
  validityStyles: !0,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
}, wi = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), ks = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((i, t) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  const e = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.usePropsContext)(wi, i), s = {
    ...hs,
    ...e
  }, n = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), a = s.id || n, {
    data: p,
    dataItemKey: c,
    popupSettings: d = {},
    style: r,
    opened: h,
    disabled: u,
    onOpen: f = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop,
    onClose: m = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop,
    placeholder: v,
    label: b,
    name: w,
    selectField: k,
    subItemsField: D,
    validationMessage: O,
    valid: N,
    required: _,
    validityStyles: S
  } = s, F = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(s.tabIndex, u), C = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), E = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), M = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), A = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), j = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), Y = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), Z = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1), [K, be] = react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0), X = s.value !== void 0, Q = X ? s.value : K !== void 0 ? K : s.defaultValue, ae = U(Q), Ke = ae ? V(Q, s.textField) : "", Oe = Si({ validationMessage: O, valid: N, required: _ }, ae), Le = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => E.current && E.current.focus(), []);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(
    C,
    () => ({
      props: s,
      element: E.current,
      focus: Le
    })
  ), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => C.current);
  const H = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(E, s.dir), P = {
    width: xs(E, hs, d, r),
    ...H !== void 0 ? { direction: H } : {}
  }, [W, ge] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), z = h !== void 0 ? h : W, [J, ke] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [le, q] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), re = !!(le && le <= Ee && s.adaptive), [Se, ee] = react__WEBPACK_IMPORTED_MODULE_0__.useState(""), ct = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      j.current && j.current.setCustomValidity && j.current.setCustomValidity(
        Oe.valid ? "" : O === void 0 ? Ci : O
      );
    },
    [O, Oe]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(ct), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const I = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(Vt.bind(void 0));
    return document != null && document.body && I && I.observe(document.body), () => {
      document != null && document.body && I && I.disconnect();
    };
  }, []);
  const pt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (!z) {
        if (f) {
          const T = { ...I };
          f.call(void 0, T);
        }
        h === void 0 && ge(!0);
      }
    },
    [z, h, f]
  ), we = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (z) {
        if (m) {
          const T = { ...I };
          m.call(void 0, T);
        }
        h === void 0 && (ge(!1), re && setTimeout(() => {
          var T;
          $((T = A.current) == null ? void 0 : T.element);
        }, 300));
      }
    },
    [z, h, m, re]
  ), Ot = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (!I.isDefaultPrevented() && C.current) {
        ke(!0);
        const T = {
          syntheticEvent: I,
          nativeEvent: I.nativeEvent,
          target: C.current
        };
        (z ? we : pt)(T);
      }
    },
    [z, h, f, m]
  ), ne = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      Z.current = !0, I(), window.setTimeout(() => Z.current = !1, 0);
    },
    []
  ), He = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      var x, L;
      const { keyCode: T, altKey: G } = I, pe = Y.current && Y.current.element;
      if (!C.current || I.isDefaultPrevented() && ((x = M.current) == null ? void 0 : x.element) === I.target)
        return;
      const y = {
        syntheticEvent: I,
        nativeEvent: I.nativeEvent,
        target: C.current
      };
      if (z)
        if (T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc || G && T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up)
          I.preventDefault(), we(y);
        else if (pe && pe.querySelector(".k-focus") && (T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end)) {
          if (T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && ((L = M.current) != null && L.element)) {
            const se = Array.from(pe.querySelectorAll(".k-treeview-item")), Ie = [...se].reverse().find((xe) => !!(xe && xe.querySelector(".k-focus")));
            if (Ie && se.indexOf(Ie) === 0)
              return ne(() => {
                var xe;
                $((xe = M.current) == null ? void 0 : xe.element);
              });
          }
          ne(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop);
        } else
          T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && ne(() => {
            var se;
            $(((se = M.current) == null ? void 0 : se.element) || pe);
          });
      else
        G && T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down ? (I.preventDefault(), pt(y)) : z || T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc && ft(I);
    },
    [z, h, f, m]
  ), Pe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      const { keyCode: T, altKey: G } = I;
      G || T !== _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && T !== _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || (I.preventDefault(), ne(
        T === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up ? () => {
          $(E.current);
        } : () => {
          $(Y.current && Y.current.element);
        }
      ));
    },
    []
  ), $ = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      I && ne(() => I.focus());
    },
    []
  ), fe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      var I;
      !J && z && !h ? we({ target: C.current }) : e.filterable ? $((I = M.current) == null ? void 0 : I.element) : $(Y.current && Y.current.element);
    },
    [m, e.filterable, J, h, z]
  ), te = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      J && $(E.current);
    },
    [J]
  ), Pt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (!J && !Z.current && (ke(!0), e.onFocus && C.current)) {
        const T = {
          syntheticEvent: I,
          nativeEvent: I.nativeEvent,
          target: C.current
        };
        e.onFocus.call(void 0, T);
      }
    },
    [J, e.onFocus]
  ), _t = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (J && !Z.current && C.current) {
        ke(!1);
        const T = {
          syntheticEvent: I,
          nativeEvent: I.nativeEvent,
          target: C.current
        };
        if (e.onBlur) {
          const G = { ...T };
          e.onBlur.call(void 0, G);
        }
        re || we(T);
      }
    },
    [J, e.onBlur, z, h, m]
  ), Rt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      J && ne(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop), re && setTimeout(() => {
        var I;
        $((I = A.current) == null ? void 0 : I.element);
      }, 300);
    },
    [J, re]
  ), ht = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I, T, G) => {
      if (e.onChange) {
        const pe = {
          value: T,
          level: G ? ps(G) : [],
          ...I
        };
        e.onChange.call(void 0, pe);
      }
      X || be(T);
    },
    [e.onChange, X]
  ), ut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (R(I.item, Q, c) || !C.current)
        return;
      const { item: T, itemHierarchicalIndex: G, nativeEvent: pe, syntheticEvent: y } = I, x = {
        syntheticEvent: y,
        nativeEvent: pe,
        target: C.current
      };
      ht(x, T, G), we(x);
    },
    [X, Q, e.onChange, c, z, h, m]
  ), ft = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (!C.current)
        return;
      const T = {
        syntheticEvent: I,
        nativeEvent: I.nativeEvent,
        target: C.current
      };
      ht(T, null), we(T), I.preventDefault();
    },
    [X, e.onChange, z, h, m]
  ), gt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (I.syntheticEvent.stopPropagation(), e.onExpandChange && C.current) {
        const { item: T, itemHierarchicalIndex: G, nativeEvent: pe, syntheticEvent: y } = I, x = {
          level: ps(G),
          item: T,
          nativeEvent: pe,
          syntheticEvent: y,
          target: C.current
        };
        e.onExpandChange.call(void 0, x);
      }
    },
    [e.onExpandChange]
  ), Je = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      if (e.onFilterChange && C.current) {
        const G = {
          filter: { field: e.textField, operator: "contains", value: I.target.value },
          syntheticEvent: I.syntheticEvent,
          nativeEvent: I.nativeEvent,
          target: C.current
        };
        e.onFilterChange.call(void 0, G), e.filter === void 0 && ee(I.target.value);
      }
    },
    [e.onFilterChange, e.filter, e.textField]
  ), Qe = () => {
    const I = s.filterable ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Re,
      {
        value: s.filter === void 0 ? Se : s.filter,
        ref: A,
        onChange: Je,
        onKeyDown: Pe,
        size: me,
        rounded: ye,
        fillMode: De
      }
    ) : null, T = {
      adaptiveTitle: s.adaptiveTitle,
      expand: z,
      onClose: (G) => we(G),
      windowWidth: le,
      mobileFilter: I
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ts, { ...T }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list k-list-lg" }, p.length > 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_treeview__WEBPACK_IMPORTED_MODULE_10__/* .TreeView */ .GS,
      {
        ref: Y,
        tabIndex: F,
        data: Xe,
        focusIdField: c,
        textField: s.textField,
        selectField: k,
        expandField: s.expandField,
        childrenField: D,
        expandIcons: !0,
        onItemClick: ut,
        onExpandChange: gt,
        size: me,
        item: s.item,
        dir: H
      }
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ze, null, et.toLanguageString(ve, ce[ve]))))));
  }, Vt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (I) => {
      for (let T of I)
        q(T.target.clientWidth);
    },
    []
  ), Xe = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => X || !ae ? p : (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.mapTree)(
      p,
      D,
      (I) => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.extendDataItem)(
        I,
        D,
        { [k]: R(I, Q, c) }
      )
    ),
    [p, Q, X, ae, k, D]
  ), Ze = s.listNoData || Cs, mt = s.valueHolder || ki, et = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useLocalization)(), vt = !S || Oe.valid, { size: me, rounded: ye, fillMode: De } = s, de = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-dropdowntree k-picker", s.className, {
        [`k-picker-${Ii[me] || me}`]: me,
        [`k-rounded-${xi[ye] || ye}`]: ye,
        [`k-picker-${De}`]: De,
        "k-focus": J,
        "k-invalid": !vt,
        "k-loading": s.loading,
        "k-required": _,
        "k-disabled": s.disabled
      }),
      tabIndex: F,
      accessKey: s.accessKey,
      id: a,
      style: b ? { ...r, width: void 0 } : r,
      dir: H,
      ref: E,
      onKeyDown: u ? void 0 : He,
      onMouseDown: Rt,
      onClick: u ? void 0 : Ot,
      onFocus: Pt,
      onBlur: _t,
      role: "combobox",
      "aria-haspopup": "tree",
      "aria-expanded": z,
      "aria-disabled": u,
      "aria-label": b,
      "aria-labelledby": s.ariaLabelledBy,
      "aria-describedby": s.ariaDescribedBy,
      "aria-required": _
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-input-inner" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(mt, { item: Q }, Ke || v)),
    s.loading && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading" }),
    ae && !u && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        onClick: ft,
        className: "k-clear-value",
        title: et.toLanguageString(it, ce[it]),
        role: "button",
        tabIndex: -1,
        onMouseDown: (I) => I.preventDefault()
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "x", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon })
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_8__.Button,
      {
        tabIndex: -1,
        type: "button",
        "aria-label": "select",
        className: "k-input-button",
        size: me,
        fillMode: De,
        themeColor: "base",
        rounded: null,
        icon: "caret-alt-down",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "select",
      {
        name: w,
        ref: j,
        tabIndex: -1,
        "aria-hidden": !0,
        title: b,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: s.valueMap ? s.valueMap.call(void 0, Q) : Q })
    ),
    !re && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_5__.Popup,
      {
        ...d,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(d.className, { "k-rtl": H === "rtl" }),
        popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(d.popupClass, "k-dropdowntree-popup"),
        style: P,
        anchor: d.anchor || E.current,
        show: z,
        onOpen: fe,
        onClose: te
      },
      s.filterable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Re,
        {
          value: s.filter === void 0 ? Se : s.filter,
          ref: M,
          onChange: Je,
          onKeyDown: Pe,
          size: me,
          rounded: ye,
          fillMode: De
        }
      ),
      p.length > 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_treeview__WEBPACK_IMPORTED_MODULE_10__/* .TreeView */ .GS,
        {
          style: { height: d.height },
          ref: Y,
          tabIndex: F,
          data: Xe,
          focusIdField: c,
          textField: s.textField,
          selectField: k,
          expandField: s.expandField,
          childrenField: D,
          expandIcons: !0,
          onItemClick: ut,
          onExpandChange: gt,
          size: me,
          item: s.item,
          dir: H
        }
      ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ze, null, et.toLanguageString(ve, ce[ve]))
    )
  ), re && Qe());
  return b ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
    {
      label: b,
      editorValue: Ke,
      editorPlaceholder: v,
      editorValid: vt,
      editorDisabled: u,
      editorId: a,
      style: { width: r ? r.width : void 0 },
      children: de,
      dir: H
    }
  ) : de;
}), Ei = {
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  valueMap: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,
  selectField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  expandField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  subItemsField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  validationMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  validityStyles: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  popupSettings: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    animate: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      openDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      closeDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
    })]),
    popupClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    appendTo: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
    width: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
    height: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number])
  }),
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onExpandChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  valueHolder: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  listNoData: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  adaptiveTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  adaptive: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
ks.displayName = "KendoReactDropDownTree";
ks.propTypes = Ei;
const Di = "Please select a value from the list!", { sizeMap: us, roundedMap: Fi } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, Ti = (i) => i.split("_").map((t) => parseInt(t, 10)), Mi = (i, t) => {
  const { validationMessage: e, valid: s, required: n } = i;
  return {
    customError: e !== void 0,
    valid: !!(s !== void 0 ? s : !n || t),
    valueMissing: !t
  };
}, _e = {
  checkField: "checkField",
  checkIndeterminateField: "checkIndeterminateField",
  subItemsField: "items",
  popupSettings: {
    animate: !0,
    width: "200px",
    height: "200px"
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  required: !1,
  validityStyles: !0
}, Ni = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.createPropsContext)(), is = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((i, t) => {
  const e = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.usePropsContext)(Ni, i);
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(Ye);
  const s = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), n = e.id || s, {
    data: a = [],
    dataItemKey: p,
    popupSettings: c = {},
    style: d = {},
    opened: r,
    disabled: h,
    onOpen: u = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop,
    onClose: f = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop,
    placeholder: m,
    label: v,
    name: b,
    checkField: w = _e.checkField,
    checkIndeterminateField: k = _e.checkIndeterminateField,
    subItemsField: D = _e.subItemsField,
    validationMessage: O,
    valid: N,
    tags: _,
    value: S,
    required: F = _e.required,
    validityStyles: C = _e.validityStyles
  } = e, E = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, h), M = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), A = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), j = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), Y = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), Z = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), K = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), be = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1), X = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]), Q = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), [ae, Ke] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [Oe, Le] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [H, ze] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [P, W] = react__WEBPACK_IMPORTED_MODULE_0__.useState(), [ge, z] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]), [J, ke] = react__WEBPACK_IMPORTED_MODULE_0__.useState(""), le = !!(P && P <= Ee && e.adaptive), q = r !== void 0 ? r : Oe, re = !!(Array.isArray(S) && S.length), Se = Mi({ validationMessage: O, valid: N, required: F }, re), ee = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useRtl)(A, e.dir), pt = {
    width: xs(A, _e, c, d),
    ...ee !== void 0 ? { direction: ee } : {}
  }, we = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => A.current && A.current.focus(), []);
  X.current = _ === void 0 ? (S || []).map((y) => ({ text: V(y, e.textField), data: [y] })) : [..._], react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(
    M,
    () => ({
      props: e,
      element: A.current,
      focus: we
    })
  ), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => M.current);
  const Ot = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      Z.current && Z.current.setCustomValidity && Z.current.setCustomValidity(
        Se.valid ? "" : O === void 0 ? Di : O
      );
    },
    [O, Se]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(Ot), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const y = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.ResizeObserver && new window.ResizeObserver(vt.bind(void 0));
    return document != null && document.body && y && y.observe(document.body), () => {
      y && y.disconnect();
    };
  }, []), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      Q.current && q && Q.current.setPosition(Q.current._popup);
    },
    [S, q]
  );
  const ne = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y, x, L) => {
      if (e.onChange) {
        const se = {
          items: x,
          operation: L,
          ...y
        };
        e.onChange.call(void 0, se);
      }
    },
    [e.onChange]
  ), He = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (R(y.item, S, p) || !M.current)
        return;
      const { item: x, nativeEvent: L, syntheticEvent: se } = y, Ie = {
        syntheticEvent: se,
        nativeEvent: L,
        target: M.current
      };
      ne(Ie, [x], "toggle");
    },
    [S, p, ne]
  ), Pe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (!q) {
        if (u) {
          const x = { ...y };
          u.call(void 0, x);
        }
        r === void 0 && (Le(!0), z(S || []), le && setTimeout(() => {
          var x;
          te((x = Y.current) == null ? void 0 : x.element);
        }, 300));
      }
    },
    [q, r, u, le, Y]
  ), $ = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (q) {
        if (f) {
          const x = { ...y };
          f.call(void 0, x);
        }
        r === void 0 && Le(!1);
      }
    },
    [q, r, f]
  ), fe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      be.current = !0, y(), window.setTimeout(() => be.current = !1, 0);
    },
    []
  ), te = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      y && fe(() => y.focus());
    },
    [fe]
  ), Pt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      var y;
      !H && q ? $({ target: M.current }) : e.filterable ? te((y = j.current) == null ? void 0 : y.element) : te(K.current && K.current.element);
    },
    [H, q, te, $, e.filterable]
  ), _t = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      H && te(A.current);
    },
    [H, te]
  ), Rt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (!H && !be.current && (ze(!0), e.onFocus && M.current)) {
        const x = {
          syntheticEvent: y,
          nativeEvent: y.nativeEvent,
          target: M.current
        };
        e.onFocus.call(void 0, x);
      }
    },
    [H, e.onFocus]
  ), ht = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (H && !be.current && M.current) {
        ze(!1);
        const x = {
          syntheticEvent: y,
          nativeEvent: y.nativeEvent,
          target: M.current
        };
        if (e.onBlur) {
          const L = { ...x };
          e.onBlur.call(void 0, L);
        }
        le || $(x);
      }
    },
    [H, e.onBlur, q, r, f]
  ), ut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      H && fe(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop);
    },
    [H, fe]
  ), ft = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (!y.isDefaultPrevented() && M.current) {
        ze(!0);
        const x = {
          syntheticEvent: y,
          nativeEvent: y.nativeEvent,
          target: M.current
        };
        q || Pe(x);
      }
    },
    [q, Pe]
  ), gt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      var xe, ns;
      const { keyCode: x, altKey: L } = y, se = K.current && K.current.element;
      if (!M.current || y.isDefaultPrevented() && ((xe = j.current) == null ? void 0 : xe.element) === y.target)
        return;
      const Ie = {
        syntheticEvent: y,
        nativeEvent: y.nativeEvent,
        target: M.current
      };
      if (S && S.length > 0 && (x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.delete)) {
        const ie = X.current;
        let he = ae ? ie.findIndex((Ss) => St(Ss, ae, p)) : -1, ue;
        const Bt = he !== -1;
        x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left ? (Bt ? he = Math.max(0, he - 1) : he = ie.length - 1, ue = ie[he]) : x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right ? he === ie.length - 1 ? ue = void 0 : Bt && (he = Math.min(ie.length - 1, he + 1), ue = ie[he]) : x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home ? ue = ie[0] : x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end ? ue = ie[ie.length - 1] : x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.delete && Bt && ne(Ie, ie[he].data, "delete"), ue !== ae && Ke(ue);
      }
      if (q)
        if (x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc || L && x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up)
          y.preventDefault(), $(Ie);
        else if (se && se.querySelector(".k-focus") && (x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end)) {
          if (x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && ((ns = j.current) != null && ns.element)) {
            const ie = Array.from(se.querySelectorAll(".k-treeview-item")), he = [...ie].reverse().find((ue) => !!(ue && ue.querySelector(".k-focus")));
            if (he && ie.indexOf(he) === 0)
              return fe(() => {
                var ue;
                te((ue = j.current) == null ? void 0 : ue.element);
              });
          }
          fe(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.noop);
        } else
          x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && fe(() => {
            var ie;
            te(((ie = j.current) == null ? void 0 : ie.element) || se);
          });
      else
        L && x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && (y.preventDefault(), Pe(Ie));
    },
    [q, $, te, fe, Pe, ae, p, S, ne]
  ), Je = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      const { keyCode: x, altKey: L } = y;
      L || x !== _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && x !== _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || (y.preventDefault(), fe(
        x === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up ? () => {
          te(A.current);
        } : () => {
          te(K.current && K.current.element);
        }
      ));
    },
    [te, fe]
  ), Qe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (!M.current)
        return;
      const x = {
        syntheticEvent: y,
        nativeEvent: y.nativeEvent,
        target: M.current
      };
      ne(x, [], "clear"), $(x), y.preventDefault();
    },
    [ne, $]
  ), Vt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y, x) => {
      var L;
      $({ target: M.current }), H || te((L = j.current) == null ? void 0 : L.element), ne({
        syntheticEvent: x,
        nativeEvent: x.nativeEvent,
        target: M.current
      }, y, "delete");
    },
    [ne, $, te, H]
  ), Xe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (e.onExpandChange && M.current) {
        const { item: x, itemHierarchicalIndex: L, nativeEvent: se, syntheticEvent: Ie } = y, xe = {
          level: Ti(L),
          item: x,
          nativeEvent: se,
          syntheticEvent: Ie,
          target: M.current
        };
        e.onExpandChange.call(void 0, xe);
      }
    },
    [e.onExpandChange]
  ), Ze = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (e.onFilterChange && M.current) {
        const L = {
          filter: { field: e.textField, operator: "contains", value: y.target.value },
          syntheticEvent: y.syntheticEvent,
          nativeEvent: y.nativeEvent,
          target: M.current
        };
        e.onFilterChange.call(void 0, L), e.filter === void 0 && ke(y.target.value);
      }
    },
    [e.onFilterChange, e.filter, e.textField]
  ), mt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      if (!M.current)
        return;
      const x = {
        syntheticEvent: y,
        nativeEvent: y.nativeEvent,
        target: M.current
      };
      e.onCancel && e.onCancel.call(void 0, x), $(x), y.preventDefault();
    },
    [e.onCancel, $]
  ), et = () => {
    const y = e.filterable ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Re,
      {
        value: e.filter === void 0 ? J : e.filter,
        ref: Y,
        onChange: Ze,
        onKeyDown: Je,
        size: de,
        rounded: I,
        fillMode: T
      }
    ) : null, x = {
      adaptiveTitle: e.adaptiveTitle,
      expand: q,
      onClose: (L) => e.onCancel ? mt(L) : Qe(L),
      windowWidth: P,
      mobileFilter: y,
      footer: {
        cancelText: ye.toLanguageString(ot, ce[ot]),
        onCancel: (L) => e.onCancel ? mt(L) : Qe(L),
        applyText: ye.toLanguageString(nt, ce[nt]),
        onApply: (L) => $(L)
      }
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ts, { ...x }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_9__.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-list k-list-lg" }, a.length > 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_treeview__WEBPACK_IMPORTED_MODULE_10__/* .TreeView */ .GS,
      {
        ref: K,
        tabIndex: E,
        data: a,
        focusIdField: p,
        textField: e.textField,
        checkField: w,
        checkIndeterminateField: k,
        expandField: e.expandField,
        childrenField: D,
        expandIcons: !0,
        onItemClick: He,
        onCheckChange: He,
        onExpandChange: Xe,
        checkboxes: !0,
        size: de,
        item: e.item,
        dir: ee
      }
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(me, null, ye.toLanguageString(ve, ce[ve]))))));
  }, vt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (y) => {
      for (let x of y)
        W(x.target.clientWidth);
    },
    []
  ), me = e.listNoData || Cs, ye = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_7__.useLocalization)(), De = !C || Se.valid, { size: de, rounded: I, fillMode: T } = e, G = le && q ? ge : X.current, pe = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-multiselecttree k-input", e.className, {
        [`k-input-${us[de] || de}`]: de,
        [`k-rounded-${Fi[I] || I}`]: I,
        [`k-input-${T}`]: T,
        "k-focus": H && !h,
        "k-invalid": !De,
        "k-disabled": h,
        "k-loading": e.loading,
        "k-required": F
      }),
      tabIndex: E,
      accessKey: e.accessKey,
      id: n,
      style: v ? { ...d, width: void 0 } : d,
      dir: ee,
      ref: A,
      onKeyDown: h ? void 0 : gt,
      onMouseDown: ut,
      onFocus: Rt,
      onBlur: ht,
      role: "combobox",
      "aria-haspopup": "tree",
      "aria-expanded": q,
      "aria-disabled": h,
      "aria-label": v,
      "aria-labelledby": e.ariaLabelledBy,
      "aria-describedby": e.ariaDescribedBy ? e.ariaDescribedBy : "tagslist-" + n,
      "aria-required": e.required,
      onClick: h ? void 0 : ft
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: "tagslist-" + n,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-input-values k-chip-list k-selection-multiple", {
          [`k-chip-list-${us[de] || de}`]: de
        })
      },
      G.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Is,
        {
          tag: e.tag,
          onTagDelete: Vt,
          data: G,
          guid: n,
          focused: ae ? X.current.find((y) => St(y, ae, p)) : void 0,
          size: de
        }
      )
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-input-inner" }, G.length === 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-input-value-text" }, m)),
    e.loading && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-loading-icon", name: "loading" }),
    re && !h && G.length > 0 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(rt, { onClick: Qe }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "select",
      {
        name: b,
        ref: Z,
        tabIndex: -1,
        "aria-hidden": !0,
        title: v,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "option",
        {
          value: e.valueMap ? e.valueMap.call(void 0, S) : S
        }
      )
    ),
    !le && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_5__.Popup,
      {
        ...c,
        popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          c.popupClass,
          "k-multiselecttree-popup"
        ),
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(c.className, { "k-rtl": ee === "rtl" }),
        style: pt,
        anchor: c.anchor || A.current,
        show: q,
        onOpen: Pt,
        onClose: _t,
        ref: Q
      },
      e.filterable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Re,
        {
          value: e.filter === void 0 ? J : e.filter,
          ref: j,
          onChange: Ze,
          onKeyDown: Je,
          tabIndex: E,
          size: de,
          rounded: I,
          fillMode: T
        }
      ),
      a.length > 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_treeview__WEBPACK_IMPORTED_MODULE_10__/* .TreeView */ .GS,
        {
          style: { height: c.height },
          ref: K,
          tabIndex: E,
          data: a,
          focusIdField: p,
          textField: e.textField,
          checkField: w,
          checkIndeterminateField: k,
          expandField: e.expandField,
          childrenField: D,
          expandIcons: !0,
          onItemClick: He,
          onCheckChange: He,
          onExpandChange: Xe,
          checkboxes: !0,
          size: de,
          item: e.item,
          dir: ee
        }
      ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(me, null, ye.toLanguageString(ve, ce[ve]))
    )
  ), le && et());
  return v ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_labels__WEBPACK_IMPORTED_MODULE_3__.FloatingLabel,
    {
      label: v,
      editorValue: re,
      editorPlaceholder: m,
      editorValid: De,
      editorDisabled: h,
      editorId: n,
      style: { width: d ? d.width : void 0 },
      children: pe,
      dir: ee
    }
  ) : pe;
}), Oi = {
  opened: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  valueMap: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string.isRequired,
  checkField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  checkIndeterminateField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  expandField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  subItemsField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  validationMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  validityStyles: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    data: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any)
  })),
  popupSettings: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    animate: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      openDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      closeDuration: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
    })]),
    popupClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
    appendTo: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
    width: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
    height: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number])
  }),
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onExpandChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  listNoData: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  adaptiveTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  adaptive: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
is.displayName = "KendoReactMultiSelectTree";
is.defaultProps = _e;
is.propTypes = Oi;
const tt = (i, t) => {
  const e = {};
  return i && i.length && i.forEach((s) => {
    e[t(s)] = !0;
  }), e;
}, qi = (i, t) => {
  const {
    items: e,
    dataItemKey: s,
    value: n,
    subItemsField: a = "items",
    operation: p
  } = t, c = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(s), d = tt(n, c);
  if (p === "clear")
    return [];
  if (p === "delete") {
    const N = tt(e, c);
    return n.filter((_) => !N[c(_)]);
  }
  const r = e[0], h = c(r), u = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(a), f = [...i], m = [];
  let v = [], b;
  for (; f.length; ) {
    const N = f.pop();
    if (h === c(N)) {
      v = m.map((_) => _.item), b = N;
      break;
    } else {
      m && m.length && m[m.length - 1].parentPosition === f.length && m.pop();
      const _ = u(N);
      _ && _.length && (m.push({ item: N, parentPosition: f.length }), f.push(..._));
    }
  }
  const w = [...u(b) || []];
  let k = [];
  for (; w.length; ) {
    const N = w.pop();
    k.push(N);
    const _ = u(N);
    _ && _.length && w.push(..._);
  }
  const D = !d[h], O = [];
  if (D) {
    O.push(...n), O.push(b), O.push(...k.filter((S) => !d[c(S)]));
    const N = v.filter((S) => !d[c(S)]), _ = tt(O, c);
    for (let S = N.length - 1; S > -1; S--) {
      const F = N[S], C = u(F);
      if (C.filter((M) => _[c(M)]).length < C.length)
        break;
      O.push(F), _[c(F)] = !0;
    }
  } else {
    const N = c(b), _ = tt(k, c), S = tt(v, c);
    O.push(
      ...n.filter((F) => {
        const C = c(F);
        return !_[C] && N !== C && !S[C];
      })
    );
  }
  return O;
};



/***/ }

}]);