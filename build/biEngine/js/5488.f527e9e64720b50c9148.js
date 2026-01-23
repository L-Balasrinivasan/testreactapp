"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5488],{

/***/ 45488
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GS: () => (/* binding */ De),
/* harmony export */   _H: () => (/* binding */ _e),
/* harmony export */   d3: () => (/* binding */ Fe),
/* harmony export */   o$: () => (/* binding */ Me)
/* harmony export */ });
/* unused harmony exports TreeViewClassComponent, TreeViewItemPropsContext, getItemIdUponKeyboardNavigation, handleTreeViewCheckChange, processTreeViewItems */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13209);
/* harmony import */ var _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91911);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";






function ce(n, e, t, i, s) {
  switch (i) {
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
      return r();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
      return o();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
      return d();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
      return u();
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
      return _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.ZERO_LEVEL_ZERO_NODE_ID;
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
      return I();
    default:
      return e;
  }
  function r() {
    return _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.isIdZeroLevel(e) || s.expanded(n) && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isEnabledAndAllParentsEnabled)(e, t, s) ? e : _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getDirectParentId(e);
  }
  function o() {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isItemExpandedAndWithChildren)(n, s) ? _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getFirstChildId(e) : e;
  }
  function d() {
    const m = Number(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getShortId(e)), l = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getDirectParentId(e);
    return m ? L(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.createId(m - 1, l), t, s) : _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.isIdZeroLevel(e) ? e : l;
  }
  function u() {
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isItemExpandedAndWithChildren)(n, s) ? _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getFirstChildId(e) : A(e, t, s) || e;
  }
  function I() {
    let m = (t.length - 1).toString(), l = t[t.length - 1], c;
    for (; (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isItemExpandedAndWithChildren)(l, s); )
      c = l[s.getChildrenField()], m = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.createId(c.length - 1, m), l = c[c.length - 1];
    return m;
  }
}
function A(n, e, t) {
  const i = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getDirectParentId(n), s = i ? _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getItemById(i, e, t.getChildrenField()) : void 0, r = s ? s[t.getChildrenField()] : e, o = Number(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getShortId(n));
  return o < r.length - 1 ? _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.createId(o + 1, i) : s ? A(i, e, t) : void 0;
}
function L(n, e, t) {
  const i = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getItemById(n, e, t.getChildrenField());
  return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isItemExpandedAndWithChildren)(i, t) ? L(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.createId(i[t.getChildrenField()].length - 1, n), e, t) : n;
}
const U = "expanded", pe = "text", ue = "disabled", E = "items", me = "hasChildren", K = "selected", y = "checked", B = "checkIndeterminate", k = "_kendoItemId", z = "_kendoTreeViewGuid", { sizeMap: Ie } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps, fe = react__WEBPACK_IMPORTED_MODULE_0__.createContext((n) => n);
class G extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onCheckChange = (e) => {
      this.props.onCheckChange(e, this.item, this.itemId);
    }, this.onExpandChange = (e) => {
      this.props.onExpandChange(e, this.item, this.itemId);
    }, this.onItemClick = (e) => {
      this.props.onItemClick(e, this.item, this.itemId);
    }, this.onPress = (e) => {
      this.props.onPress(e.event, this.item, this.itemId);
    }, this.onDrag = (e) => {
      this.props.onDrag(e.event, this.item, this.itemId);
    }, this.onRelease = (e) => {
      this.props.onRelease(e.event, this.item, this.itemId);
    }, this.onContextMenu = (e) => {
      this.props.onContextMenu(e, this.item, this.itemId);
    }, this.assignDraggableMeta = (e) => {
      e && (e[k] = this.props.itemId, e[z] = this.props.treeGuid);
    };
  }
  render() {
    const e = this.renderSubitemsIfApplicable(), t = this.renderItemInPart();
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "li",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-treeview-item"),
        tabIndex: this.tabIndex,
        role: "treeitem",
        "aria-expanded": this.ariaExpanded,
        "aria-selected": this.ariaSelected,
        "aria-checked": this.ariaChecked,
        "aria-disabled": this.disabled ? !0 : void 0,
        ref: (i) => this.itemElement = i
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `k-treeview-${this.props.position}`, ref: this.assignDraggableMeta }, this.renderExpandIcon(), this.renderCheckbox(), this.props.draggable ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease }, t) : t),
      this.props.animate ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_4__/* .Reveal */ .gN,
        {
          transitionEnterDuration: 200,
          transitionExitDuration: 200,
          style: { display: "block" },
          children: e
        }
      ) : e
    );
  }
  componentDidMount() {
    const e = this.props.focusedItemId, t = this.itemId;
    e && e === t && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement && (this.checkboxElement.indeterminate = this.fieldsSvc.checkIndeterminate(this.item));
  }
  componentDidUpdate(e) {
    const t = this.props.focusedItemId;
    if (t && t !== e.focusedItemId && t === this.itemId && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement) {
      const i = this.fieldsSvc.checkIndeterminate(this.item);
      i !== e.fieldsService.checkIndeterminate(e.item) && (this.checkboxElement.indeterminate = i);
    }
  }
  renderCheckbox() {
    if (this.props.checkboxes) {
      const e = this.props.size;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-checkbox-wrap") }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "input",
        {
          type: "checkbox",
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-checkbox k-rounded-md",
            {
              [`k-checkbox-${Ie[e] || e}`]: e,
              "k-disabled": this.disabled
            }
          ),
          "aria-label": this.item.text,
          checked: !!this.fieldsSvc.checked(this.item),
          id: this.props.id,
          tabIndex: -1,
          onChange: this.onCheckChange,
          ref: (t) => this.checkboxElement = t
        }
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "k-checkbox-label", htmlFor: this.props.id }));
    } else
      return;
  }
  renderExpandIcon() {
    return this.props.expandIcons && // If it is explicitly said that the item has children (even not loaded yet)
    // or if the item actually has children, then render the icon.
    (this.fieldsSvc.hasChildren(this.item) || (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.hasChildren)(this.item, this.fieldsSvc.getChildrenField())) && // Allowing the toggle-button even with `disabled=true` might be a valid case!
    // Re-evaluate the classes bellow if such scenario occurs
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-treeview-toggle", { "k-disabled": this.disabled }), onClick: this.onExpandChange }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { ...this.getIconProps() }));
  }
  renderSubitemsIfApplicable() {
    const e = this.fieldsSvc.children(this.item);
    return (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isItemExpandedAndWithChildren)(this.item, this.fieldsSvc) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "k-treeview-group", role: "group" }, e.map((t, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      S,
      {
        item: t,
        position: i === 0 ? "top" : i === e.length - 1 ? "bot" : "mid",
        itemId: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.createId(i, this.itemId),
        treeGuid: this.props.treeGuid,
        animate: this.props.animate,
        focusedItemId: this.props.focusedItemId,
        tabbableItemId: this.props.tabbableItemId,
        fieldsService: this.props.fieldsService,
        itemUI: this.props.itemUI,
        checkboxes: this.props.checkboxes,
        ariaMultiSelectable: this.props.ariaMultiSelectable,
        onItemClick: this.props.onItemClick,
        onFocusDomElNeeded: this.props.onFocusDomElNeeded,
        draggable: this.props.draggable,
        onPress: this.props.onPress,
        onDrag: this.props.onDrag,
        onRelease: this.props.onRelease,
        expandIcons: this.props.expandIcons,
        onExpandChange: this.props.onExpandChange,
        onCheckChange: this.props.onCheckChange,
        onContextMenu: this.props.onContextMenu,
        key: i,
        size: this.props.size,
        disabled: this.disabled,
        isRtl: this.props.isRtl
      }
    ))) : void 0;
  }
  renderItemInPart() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-treeview-leaf",
          {
            "k-focus": this.props.focusedItemId === this.itemId,
            "k-selected": this.fieldsSvc.selected(this.item),
            "k-disabled": this.disabled
          }
        ),
        style: { touchAction: "none" },
        onClick: this.onItemClick,
        onContextMenu: this.onContextMenu
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-treeview-leaf-text" }, this.props.itemUI ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.itemUI, { item: this.item, itemHierarchicalIndex: this.itemId }) : this.fieldsSvc.text(this.item))
    );
  }
  get fieldsSvc() {
    return this.props.fieldsService;
  }
  get itemId() {
    return this.props.itemId;
  }
  get item() {
    return this.props.item;
  }
  get tabIndex() {
    return (this.props.focusedItemId || this.props.tabbableItemId) === this.itemId ? 0 : -1;
  }
  get ariaExpanded() {
    return this.fieldsSvc.hasChildren(this.item) || (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.hasChildren)(this.item, this.fieldsSvc.getChildrenField()) ? !!this.fieldsSvc.expanded(this.item) : void 0;
  }
  get disabled() {
    return this.props.disabled || this.fieldsSvc.disabled(this.item);
  }
  get ariaChecked() {
    if (this.props.checkboxes)
      return this.fieldsSvc.checked(this.item) ? "true" : this.fieldsSvc.checkIndeterminate(this.item) ? "mixed" : "false";
  }
  get ariaSelected() {
    return this.fieldsSvc.selected(this.item) ? !0 : this.props.ariaMultiSelectable ? this.disabled ? void 0 : !1 : void 0;
  }
  getIconProps() {
    const e = this.fieldsSvc.expanded(this.item);
    return e && !(0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.hasChildren)(this.item, this.fieldsSvc.getChildrenField()) ? { name: "loading" } : e ? { name: "caret-alt-down", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltDownIcon } : { name: this.props.isRtl ? "caret-alt-left" : "caret-alt-right", icon: this.props.isRtl ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.caretAltRightIcon };
  }
}
G.defaultProps = {
  position: "top"
};
const S = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((n, e) => {
  const i = react__WEBPACK_IMPORTED_MODULE_0__.useContext(fe).call(void 0, n);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    G,
    {
      ref: e,
      ...i
    }
  );
}));
S.displayName = "TreeViewItem";
const ge = {
  name: "@progress/kendo-react-treeview",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613387,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, { sizeMap: be } = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps;
let N = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(e) {
    super(e), this.state = { focusedItemId: void 0, focusedItemPublicId: void 0, tabbableItemId: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.ZERO_LEVEL_ZERO_NODE_ID }, this.fieldsSvc = null, this.allowExplicitFocus = !1, this._element = null, this.onFocusDomElNeeded = (t) => {
      this.allowExplicitFocus && this.focusDomItem(t);
    }, this.onCheckChange = (t, i, s) => {
      this.setFocus(s), this.dispatchCheckChange(t, i, s);
    }, this.onExpandChange = (t, i, s) => {
      this.setFocus(s), this.dispatchExpandChange(t, i, s);
    }, this.onPress = (t, i, s) => {
      this.props.onItemDragStart && this.props.onItemDragStart.call(
        void 0,
        { target: this, item: i, itemHierarchicalIndex: s }
      );
    }, this.onDrag = (t, i, s) => {
      const { pageX: r, pageY: o, clientX: d, clientY: u } = t;
      this.props.onItemDragOver && this.props.onItemDragOver.call(
        void 0,
        {
          target: this,
          item: i,
          itemHierarchicalIndex: s,
          pageX: r,
          pageY: o,
          clientX: d,
          clientY: u
        }
      );
    }, this.onRelease = (t, i, s) => {
      const { pageX: r, pageY: o, clientX: d, clientY: u } = t;
      this.props.onItemDragEnd && this.props.onItemDragEnd.call(
        void 0,
        {
          target: this,
          item: i,
          itemHierarchicalIndex: s,
          pageX: r,
          pageY: o,
          clientX: d,
          clientY: u
        }
      );
    }, this.onItemClick = (t, i, s) => {
      this.setFocus(s), this.dispatchItemClick(t, i, s);
    }, this.onFocus = () => {
      clearTimeout(this.blurRequest), this.state.focusedItemId === void 0 && this.data.length && this.setFocus(this.state.tabbableItemId);
    }, this.onBlur = () => {
      clearTimeout(this.blurRequest), this.blurRequest = window.setTimeout(() => this.setFocus(void 0), 0);
    }, this.onKeyDown = (t) => {
      const i = this.getFocusedItem();
      if (i && this.fieldsSvc) {
        const s = ce(i, this.state.focusedItemId, this.data, t.keyCode, this.fieldsSvc);
        s !== this.state.focusedItemId && (t.preventDefault(), this.allowExplicitFocus = !0, this.setFocus(s)), this.dispatchEventsOnKeyDown(t, i);
      }
    }, this.onContextMenu = (t, i, s) => {
      if (this.props.onContextMenu) {
        const r = {
          target: this,
          syntheticEvent: t,
          nativeEvent: t.nativeEvent,
          item: i,
          itemID: s
        };
        this.props.onContextMenu.call(void 0, r);
      }
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(ge);
  }
  get treeGuid() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  render() {
    this.fieldsSvc = new _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.TreeFieldsService(this.props);
    const { size: e, className: t } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        style: this.props.style ? this.props.style : void 0,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-treeview",
          {
            [`k-treeview-${be[e] || e}`]: e,
            ["k-user-select-none"]: this.props.draggable,
            ["k-rtl"]: this.props.dir === "rtl"
          },
          t
        ),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        role: "tree",
        "aria-multiselectable": this.ariaMultiSelectable ? !0 : void 0,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        ref: (i) => this._element = i,
        tabIndex: this.props.tabIndex
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "k-treeview-lines k-treeview-group", role: "group" }, this.data.map((i, s) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        S,
        {
          id: this.props.id + "-item-" + s,
          item: i,
          position: s === 0 ? "top" : s === this.data.length - 1 ? "bot" : "mid",
          itemId: s.toString(),
          treeGuid: this.treeGuid,
          animate: this.props.animate,
          focusedItemId: this.state.focusedItemId,
          tabbableItemId: this.state.tabbableItemId,
          fieldsService: this.fieldsSvc,
          itemUI: this.props.item,
          checkboxes: this.props.checkboxes,
          ariaMultiSelectable: this.ariaMultiSelectable,
          onItemClick: this.onItemClick,
          onFocusDomElNeeded: this.onFocusDomElNeeded,
          draggable: this.props.draggable,
          onPress: this.onPress,
          onDrag: this.onDrag,
          onRelease: this.onRelease,
          expandIcons: this.props.expandIcons,
          onExpandChange: this.onExpandChange,
          onCheckChange: this.onCheckChange,
          onContextMenu: this.onContextMenu,
          key: s,
          size: e,
          isRtl: this.props.dir === "rtl"
        }
      )))
    );
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.allowExplicitFocus = !1, this.refocusDueToFocusIdField();
  }
  dispatchEventsOnKeyDown(e, t) {
    if (this.fieldsSvc === null)
      return;
    const i = () => this.fieldsSvc && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.isEnabledAndAllParentsEnabled)(this.state.focusedItemId, this.data, this.fieldsSvc);
    e.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left && this.fieldsSvc.expanded(t) && i() ? this.dispatchExpandChange(e, t, this.state.focusedItemId) : e.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right && !this.fieldsSvc.expanded(t) && (this.fieldsSvc.hasChildren(t) || (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.hasChildren)(t, this.props.childrenField)) && i() ? this.dispatchExpandChange(e, t, this.state.focusedItemId) : e.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter && i() ? this.dispatchItemClick(e, t, this.state.focusedItemId) : e.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space && i() && (e.preventDefault(), this.dispatchCheckChange(e, t, this.state.focusedItemId));
  }
  setFocus(e) {
    if (e && this.fieldsSvc)
      if (this.fieldsSvc.focusIdField) {
        const t = this.getItemById(e);
        this.setState({ focusedItemId: e, focusedItemPublicId: this.fieldsSvc.focusId(t) });
      } else
        this.setState({ focusedItemId: e });
    else
      this.setState((t) => ({
        focusedItemId: void 0,
        focusedItemPublicId: void 0,
        tabbableItemId: t.focusedItemId
      }));
  }
  getFocusedItem() {
    return this.state.focusedItemId ? this.getItemById(this.state.focusedItemId) : void 0;
  }
  getItemById(e) {
    return _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getItemById(e, this.data, this.props.childrenField || E);
  }
  dispatchCheckChange(e, t, i) {
    (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onCheckChange, e, this, { item: t, itemHierarchicalIndex: i });
  }
  dispatchExpandChange(e, t, i) {
    (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onExpandChange, e, this, { item: t, itemHierarchicalIndex: i });
  }
  dispatchItemClick(e, t, i) {
    (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onItemClick, e, this, { item: t, itemHierarchicalIndex: i });
  }
  refocusDueToFocusIdField() {
    if (this.fieldsSvc && this.fieldsSvc.focusIdField) {
      const e = this.state.focusedItemPublicId;
      if (e) {
        const t = this.props.getFocusHierarchicalIndex ? this.props.getFocusHierarchicalIndex(e) : (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.resolveItemId)(e, this.fieldsSvc.focusIdField, this.data, this.props.childrenField);
        t !== this.state.focusedItemId && (this.allowExplicitFocus = !0, this.setState({ focusedItemId: t }));
      }
    }
  }
  get ariaMultiSelectable() {
    return this.props["aria-multiselectable"] === !0 || this.props["aria-multiselectable"] === "true";
  }
  get data() {
    return this.props.data || [];
  }
  focusDomItem(e) {
    e.focus();
  }
  /**
   * Returns the `guid` which is associated with the TreeView.
   */
  get guid() {
    return this.treeGuid;
  }
};
N.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  animate: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  focusIdField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  getHierarchicalIndexById: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onExpandChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  expandField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  selectField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  childrenField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  hasChildrenField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disableField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  "aria-multiselectable": (n, e, t) => n[e] !== void 0 && n[e] !== !0 && n[e] !== !1 && n[e] !== "true" && n[e] !== "false" ? new Error(
    "Invalid prop `" + e + "` supplied to `" + t + "`. Validation failed."
  ) : null,
  "aria-label": prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  "aria-labelledby": prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
N.defaultProps = {
  animate: !0,
  expandField: U,
  selectField: K,
  hasChildrenField: me,
  childrenField: E,
  textField: pe,
  disableField: ue,
  checkField: y,
  checkIndeterminateField: B,
  size: "medium"
};
function Pe(n, e) {
  if (!n || !n.length)
    return [];
  let t = n;
  const i = e.cloneField || "cloned", s = e.expandField || U, r = e.selectField || K, o = e.checkField || y, d = e.childrenField || E;
  return t = D(t, s, e.expand, i, d), t = D(t, r, e.select, i, d), t = D(t, o, e.check, i, d), Ee(t, d, e.check), t;
}
function D(n, e, t, i, s) {
  if (t) {
    let { ids: r, field: o } = H(t, e), d = !C(t) && t.idField ? q(r, t.idField, n, s) : r;
    return Ce(n, d, o, i, s);
  } else
    return n;
}
function H(n, e) {
  let t, i;
  return C(n) ? (t = n, i = e) : (t = n.ids || [], i = n.operationField || e), { ids: t, field: i };
}
function Ce(n, e, t, i, s) {
  let r = n;
  return e.forEach((o) => {
    r = j(r, o, (d) => $(t, d), i, s);
  }), r;
}
function $(n, e) {
  const t = (n || "").split(".");
  let i = e;
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (s === t.length - 1)
      i[r] = !0;
    else if (i[r] !== void 0)
      i[r] = { ...i[r] }, i = i[r];
    else
      return;
  }
}
function Ee(n, e, t) {
  if (t && !C(t) && t.applyCheckIndeterminate) {
    const { field: i } = H(t, y), s = t.checkIndeterminateField || B;
    for (let r = 0; r < n.length; r++) {
      const o = n[r], d = o[e];
      d && w(
        d,
        v(i, o) ? [] : [o],
        e,
        i,
        s
      );
    }
  }
}
function w(n, e, t, i, s) {
  let r = !1;
  for (let o = 0; o < n.length; o++) {
    const d = n[o];
    if (v(i, d)) {
      if (!r)
        for (let u = 0; u < e.length; u++)
          $(s, e[u]);
      r = !0, d[t] && w(d[t], [], t, i, s);
    } else
      d[t] && w(
        d[t],
        r ? [d] : e.concat([d]),
        t,
        i,
        s
      );
  }
}
function _e(n, e, t, i, s, r) {
  const o = r || E;
  if (!m())
    return u();
  const d = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getItemById(n, e, o);
  if (!d)
    return u();
  if (!s || s === e) {
    if (!I())
      return u();
    const l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.removeItem)(n, o, e), c = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.addItem)(
      d,
      t,
      o,
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getDecrementedItemIdAfterRemoval(n, i),
      l
    );
    return s ? { sourceData: c, targetData: c } : c;
  } else {
    const l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.removeItem)(n, o, e), c = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.addItem)(d, t, o, i, s);
    return { sourceData: l, targetData: c };
  }
  function u() {
    return s ? { sourceData: e, targetData: s } : e;
  }
  function I() {
    return !`${i}_`.startsWith(`${n}_`);
  }
  function m() {
    if (!e || !e.length || !n || !i || s && !s.length)
      return !1;
    const l = !s || s === e ? e : s;
    return !!_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.treeIdUtils.getItemById(i, l, o);
  }
}
function Re(n, e, t, i = {}, s) {
  if (!t || !t.length)
    return [];
  const { ids: r, idField: o } = xe(e), d = o ? v(o, n.item) : n.itemHierarchicalIndex, u = r.indexOf(d), I = u === -1, m = s || E;
  let l;
  return i.singleMode ? l = I ? [d] : [] : (l = r.slice(), I ? l.push(d) : l.splice(u, 1), i.checkChildren && ke(n.item, n.itemHierarchicalIndex, I, o, m, l), i.checkParents && ve(n.itemHierarchicalIndex, I, o, m, l, t)), C(e) ? l : Object.assign({}, e, { ids: l });
}
function xe(n) {
  let e, t;
  return C(n) ? e = n : (e = n.ids || [], t = n.idField), { ids: e, idField: t };
}
function ke(n, e, t, i, s, r) {
  Q(n, e, s, i).forEach((o) => {
    t && r.indexOf(o) === -1 ? r.push(o) : !t && r.indexOf(o) > -1 && r.splice(r.indexOf(o), 1);
  });
}
function ve(n, e, t, i, s, r) {
  const o = m();
  let d = o.next();
  e ? u() : I();
  function u() {
    for (; !d.done; ) {
      const { id: l, item: c } = d.value;
      if (s.indexOf(l) === -1 && J(c, l, t, i, s))
        s.push(l), d = o.next();
      else
        break;
    }
  }
  function I() {
    for (; !d.done; ) {
      const { id: l } = d.value, c = s.indexOf(l);
      if (c > -1)
        s.splice(c, 1), d = o.next();
      else
        break;
    }
  }
  function* m() {
    if (t) {
      const l = ee(n, i, r);
      for (let c = l.length - 1; c > -1; c--)
        yield { id: v(t, l[c]), item: e ? l[c] : void 0 };
    } else {
      let l = h.getDirectParentId(n);
      for (; l; )
        yield { id: l, item: e ? h.getItemById(l, r, i) : void 0 }, l = h.getDirectParentId(l);
    }
  }
}
class Fe extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      visible: !1,
      top: 0,
      left: 0,
      text: "",
      operationClassName: "cancel"
    };
  }
  /**
   * @hidden
   */
  render() {
    const e = { top: this.state.top + "px", left: this.state.left + "px" };
    return this.state.visible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-header k-drag-clue", style: { ...this.props.style, ...e } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-drag-status"),
        name: this.state.operationClassName && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(this.state.operationClassName),
        icon: this.state.operationClassName === "k-i-plus" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.plusIcon : this.state.operationClassName === "k-i-insert-up" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.insertTopIcon : this.state.operationClassName === "k-i-insert-down" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.insertBottomIcon : this.state.operationClassName === "k-i-insert-middle" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.insertMiddleIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.cancelIcon
      }
    ), this.state.text);
  }
  /**
   * Displays the TreeViewDragClue component.
   *
   * @param top - The `top` CSS position of the component.
   * @param left - The `left` CSS position of the component.
   * @param text - The text of the component.
   * @param operationClassName - The CSS class name which is related to the specific drop operation.
   */
  show(e, t, i, s) {
    this.setState({ visible: !0, top: e, left: t, text: i, operationClassName: s });
  }
  /**
   * Hides the TreeViewDragClue component.
   */
  hide() {
    this.setState({ visible: !1 });
  }
}
Fe.defaultProps = { style: { display: "block", position: "absolute", zIndex: 2e4, padding: "4px 6px" } };
const _ = 6;
class Me {
  /**
   * @param event - The event that will be analyzed.
   */
  constructor(e) {
    this.event = e, this.initialized = !1, this.destItemId = "", this.destTreeViewGuid = "", this.itemId = e.itemHierarchicalIndex, this.treeViewGuid = e.target.guid;
  }
  /**
   * The method which initializes the analyzer.
   * Invoke the method before you call any other methods.
   *
   * @returns - The analyzer object of the `drag` event.
   */
  init() {
    return this.initialized || (this.setDestimationMeta(document.elementFromPoint(this.event.clientX, this.event.clientY)), this.initialized = !0), this;
  }
  /**
   * Returns `true` if dropping is allowed. Otherwise, returns `false`.
   */
  get isDropAllowed() {
    return this.initialized && this.destItemId && this.destTreeViewGuid ? !`${this.destTreeViewGuid}_${this.destItemId}_`.startsWith(`${this.treeViewGuid}_${this.itemId}_`) : !1;
  }
  /**
   * Returns an object which contains:
   * * The `itemHierarchicalIndex` of the destination item (the item below the dragged item) and
   * * The `guid` of the destination TreeView (the TreeView which renders the destination item).
   */
  get destinationMeta() {
    return { itemHierarchicalIndex: this.destItemId, treeViewGuid: this.destTreeViewGuid };
  }
  /**
   * Returns the specific drop operation.
   *
   * @returns - The following values are returned:
   * * `before`&mdash;Indicates that the dragged item is positioned at the beginning of the destination item.
   * * `after`&mdash;Indicates that the dragged item is positioned at the end of the destination item.
   * * `child`&mdash;Indicates that the dragged item is positioned in the middle of the destination item.
   * * `undefined`&mdash;Indicates that dropping is not allowed.
   */
  getDropOperation() {
    if (this.initialized && this.isDropAllowed) {
      const { top: e, height: t } = this.destDomNodeWithMeta.getBoundingClientRect();
      return e + t - this.event.clientY < _ ? "after" : this.event.clientY - e < _ ? "before" : "child";
    } else
      return;
  }
  setDestimationMeta(e) {
    let t = e;
    for (; t && !t[k]; )
      t = t.parentNode;
    t && t[k] && (this.destDomNodeWithMeta = t, this.destItemId = t[k], this.destTreeViewGuid = t[z]);
  }
}
const De = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(N);
De.displayName = "KendoReactTreeView";



/***/ }

}]);