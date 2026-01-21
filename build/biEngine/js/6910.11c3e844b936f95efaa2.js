"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[6910],{

/***/ 37843:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iv: () => (/* binding */ c),
/* harmony export */   W8: () => (/* binding */ _),
/* harmony export */   ax: () => (/* binding */ E),
/* harmony export */   cg: () => (/* binding */ s),
/* harmony export */   eu: () => (/* binding */ n),
/* harmony export */   iD: () => (/* binding */ t),
/* harmony export */   iG: () => (/* binding */ L),
/* harmony export */   rr: () => (/* binding */ e),
/* harmony export */   vj: () => (/* binding */ I),
/* harmony export */   wS: () => (/* binding */ D)
/* harmony export */ });
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const E = "expanded", e = "text", D = "disabled", I = "items", _ = "hasChildren", t = "selected", n = "checked", c = "checkIndeterminate", s = "_kendoItemId", L = "_kendoTreeViewGuid";



/***/ }),

/***/ 96910:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GS: () => (/* binding */ o)
});

// UNUSED EXPORTS: FieldsService, TreeViewClassComponent, TreeViewDragAnalyzer, TreeViewDragClue, TreeViewItemPropsContext, getItemIdUponKeyboardNavigation, handleTreeViewCheckChange, moveTreeViewItem, processTreeViewItems

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(29166);
;// ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/utils/getItemIdUponKeyboardNavigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

function F(o, e, t, g, r) {
  switch (g) {
    case index_mjs_.Keys.left:
      return I();
    case index_mjs_.Keys.right:
      return l();
    case index_mjs_.Keys.up:
      return s();
    case index_mjs_.Keys.down:
      return y();
    case index_mjs_.Keys.home:
      return index_mjs_.treeIdUtils.ZERO_LEVEL_ZERO_NODE_ID;
    case index_mjs_.Keys.end:
      return C();
    default:
      return e;
  }
  function I() {
    return index_mjs_.treeIdUtils.isIdZeroLevel(e) || r.expanded(o) && (0,index_mjs_.isEnabledAndAllParentsEnabled)(e, t, r) ? e : index_mjs_.treeIdUtils.getDirectParentId(e);
  }
  function l() {
    return (0,index_mjs_.isItemExpandedAndWithChildren)(o, r) ? index_mjs_.treeIdUtils.getFirstChildId(e) : e;
  }
  function s() {
    const d = Number(index_mjs_.treeIdUtils.getShortId(e)), u = index_mjs_.treeIdUtils.getDirectParentId(e);
    return d ? i(index_mjs_.treeIdUtils.createId(d - 1, u), t, r) : index_mjs_.treeIdUtils.isIdZeroLevel(e) ? e : u;
  }
  function y() {
    return (0,index_mjs_.isItemExpandedAndWithChildren)(o, r) ? index_mjs_.treeIdUtils.getFirstChildId(e) : p(e, t, r) || e;
  }
  function C() {
    let d = (t.length - 1).toString(), u = t[t.length - 1], h;
    for (; (0,index_mjs_.isItemExpandedAndWithChildren)(u, r); )
      h = u[r.getChildrenField()], d = index_mjs_.treeIdUtils.createId(h.length - 1, d), u = h[h.length - 1];
    return d;
  }
}
function p(o, e, t) {
  const g = index_mjs_.treeIdUtils.getDirectParentId(o), r = g ? index_mjs_.treeIdUtils.getItemById(g, e, t.getChildrenField()) : void 0, I = r ? r[t.getChildrenField()] : e, l = Number(index_mjs_.treeIdUtils.getShortId(o));
  return l < I.length - 1 ? index_mjs_.treeIdUtils.createId(l + 1, g) : r ? p(g, e, t) : void 0;
}
function i(o, e, t) {
  const g = index_mjs_.treeIdUtils.getItemById(o, e, t.getChildrenField());
  return (0,index_mjs_.isItemExpandedAndWithChildren)(g, t) ? i(index_mjs_.treeIdUtils.createId(g[t.getChildrenField()].length - 1, o), e, t) : o;
}


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(72111);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kendo-s_bfdbf2fb0f4ae089ac0cb07b6b69ec9f/node_modules/@progress/kendo-react-animation/dist/es/Reveal.js
var Reveal = __webpack_require__(44484);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/utils/consts.mjs
var consts = __webpack_require__(37843);
;// ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/TreeViewItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const { sizeMap: C } = index_mjs_.kendoThemeMaps, v = index_js_.createContext((n) => n), h = class h extends index_js_.Component {
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
      e && (e[consts/* DOM_KENDO_ITEM_ID_FIELD */.cg] = this.props.itemId, e[consts/* DOM_KENDO_TREEVIEW_GUID_FIELD */.iG] = this.props.treeGuid);
    };
  }
  render() {
    const e = this.renderSubitemsIfApplicable(), i = this.renderItemInPart();
    return /* @__PURE__ */ index_js_.createElement(
      "li",
      {
        className: (0,index_mjs_.classNames)("k-treeview-item"),
        tabIndex: this.tabIndex,
        role: "treeitem",
        "aria-expanded": this.ariaExpanded,
        "aria-selected": this.ariaSelected,
        "aria-checked": this.ariaChecked,
        "aria-disabled": this.disabled ? !0 : void 0,
        ref: (s) => this.itemElement = s
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: `k-treeview-${this.props.position}`, ref: this.assignDraggableMeta }, this.renderExpandIcon(), this.renderCheckbox(), this.props.draggable ? /* @__PURE__ */ index_js_.createElement(index_mjs_.Draggable, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease }, i) : i),
      this.props.animate ? /* @__PURE__ */ index_js_.createElement(
        Reveal/* Reveal */.g,
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
    const e = this.props.focusedItemId, i = this.itemId;
    e && e === i && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement && (this.checkboxElement.indeterminate = this.fieldsSvc.checkIndeterminate(this.item));
  }
  componentDidUpdate(e) {
    const i = this.props.focusedItemId;
    if (i && i !== e.focusedItemId && i === this.itemId && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement) {
      const s = this.fieldsSvc.checkIndeterminate(this.item);
      s !== e.fieldsService.checkIndeterminate(e.item) && (this.checkboxElement.indeterminate = s);
    }
  }
  renderCheckbox() {
    if (this.props.checkboxes) {
      const e = this.props.size;
      return /* @__PURE__ */ index_js_.createElement("div", { className: (0,index_mjs_.classNames)("k-checkbox-wrap") }, /* @__PURE__ */ index_js_.createElement(
        "input",
        {
          type: "checkbox",
          className: (0,index_mjs_.classNames)(
            "k-checkbox k-rounded-md",
            {
              [`k-checkbox-${C[e] || e}`]: e,
              "k-disabled": this.disabled
            }
          ),
          "aria-label": this.item.text,
          checked: !!this.fieldsSvc.checked(this.item),
          id: this.props.id,
          tabIndex: -1,
          onChange: this.onCheckChange,
          ref: (i) => this.checkboxElement = i
        }
      ), /* @__PURE__ */ index_js_.createElement("label", { className: "k-checkbox-label", htmlFor: this.props.id }));
    } else
      return;
  }
  renderExpandIcon() {
    return this.props.expandIcons && // If it is explicitly said that the item has children (even not loaded yet)
    // or if the item actually has children, then render the icon.
    (this.fieldsSvc.hasChildren(this.item) || (0,index_mjs_.hasChildren)(this.item, this.fieldsSvc.getChildrenField())) && // Allowing the toggle-button even with `disabled=true` might be a valid case!
    // Re-evaluate the classes bellow if such scenario occurs
    /* @__PURE__ */ index_js_.createElement("span", { className: (0,index_mjs_.classNames)("k-treeview-toggle", { "k-disabled": this.disabled }), onClick: this.onExpandChange }, /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { ...this.getIconProps() }));
  }
  renderSubitemsIfApplicable() {
    const e = this.fieldsSvc.children(this.item);
    return (0,index_mjs_.isItemExpandedAndWithChildren)(this.item, this.fieldsSvc) ? /* @__PURE__ */ index_js_.createElement("ul", { className: "k-treeview-group", role: "group" }, e.map((i, s) => /* @__PURE__ */ index_js_.createElement(
      d,
      {
        item: i,
        position: s === 0 ? "top" : s === e.length - 1 ? "bot" : "mid",
        itemId: index_mjs_.treeIdUtils.createId(s, this.itemId),
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
        key: s,
        size: this.props.size,
        disabled: this.disabled,
        isRtl: this.props.isRtl
      }
    ))) : void 0;
  }
  renderItemInPart() {
    return /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        className: (0,index_mjs_.classNames)(
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
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-treeview-leaf-text" }, this.props.itemUI ? /* @__PURE__ */ index_js_.createElement(this.props.itemUI, { item: this.item, itemHierarchicalIndex: this.itemId }) : this.fieldsSvc.text(this.item))
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
    return this.fieldsSvc.hasChildren(this.item) || (0,index_mjs_.hasChildren)(this.item, this.fieldsSvc.getChildrenField()) ? !!this.fieldsSvc.expanded(this.item) : void 0;
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
    return e && !(0,index_mjs_.hasChildren)(this.item, this.fieldsSvc.getChildrenField()) ? { name: "loading" } : e ? { name: "caret-alt-down", icon: index_es_js_.caretAltDownIcon } : { name: this.props.isRtl ? "caret-alt-left" : "caret-alt-right", icon: this.props.isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon };
  }
};
h.defaultProps = {
  position: "top"
};
let a = h;
const d = (0,index_mjs_.withIdHOC)(index_js_.forwardRef((n, e) => {
  const s = index_js_.useContext(v).call(void 0, n);
  return /* @__PURE__ */ index_js_.createElement(
    a,
    {
      ref: e,
      ...s
    }
  );
}));
d.displayName = "TreeViewItem";


;// ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const e = {
  name: "@progress/kendo-react-treeview",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846602,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};


;// ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/TreeView.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







const { sizeMap: P } = index_mjs_.kendoThemeMaps, TreeView_h = class h extends index_js_.Component {
  constructor(t) {
    super(t), this.state = { focusedItemId: void 0, focusedItemPublicId: void 0, tabbableItemId: index_mjs_.treeIdUtils.ZERO_LEVEL_ZERO_NODE_ID }, this.fieldsSvc = null, this.allowExplicitFocus = !1, this._element = null, this.onFocusDomElNeeded = (e) => {
      this.allowExplicitFocus && this.focusDomItem(e);
    }, this.onCheckChange = (e, i, s) => {
      this.setFocus(s), this.dispatchCheckChange(e, i, s);
    }, this.onExpandChange = (e, i, s) => {
      this.setFocus(s), this.dispatchExpandChange(e, i, s);
    }, this.onPress = (e, i, s) => {
      this.props.onItemDragStart && this.props.onItemDragStart.call(
        void 0,
        { target: this, item: i, itemHierarchicalIndex: s }
      );
    }, this.onDrag = (e, i, s) => {
      const { pageX: l, pageY: r, clientX: n, clientY: c } = e;
      this.props.onItemDragOver && this.props.onItemDragOver.call(
        void 0,
        {
          target: this,
          item: i,
          itemHierarchicalIndex: s,
          pageX: l,
          pageY: r,
          clientX: n,
          clientY: c
        }
      );
    }, this.onRelease = (e, i, s) => {
      const { pageX: l, pageY: r, clientX: n, clientY: c } = e;
      this.props.onItemDragEnd && this.props.onItemDragEnd.call(
        void 0,
        {
          target: this,
          item: i,
          itemHierarchicalIndex: s,
          pageX: l,
          pageY: r,
          clientX: n,
          clientY: c
        }
      );
    }, this.onItemClick = (e, i, s) => {
      this.setFocus(s), this.dispatchItemClick(e, i, s);
    }, this.onFocus = () => {
      clearTimeout(this.blurRequest), this.state.focusedItemId === void 0 && this.data.length && this.setFocus(this.state.tabbableItemId);
    }, this.onBlur = () => {
      clearTimeout(this.blurRequest), this.blurRequest = window.setTimeout(() => this.setFocus(void 0), 0);
    }, this.onKeyDown = (e) => {
      const i = this.getFocusedItem();
      if (i && this.fieldsSvc) {
        const s = F(i, this.state.focusedItemId, this.data, e.keyCode, this.fieldsSvc);
        s !== this.state.focusedItemId && (e.preventDefault(), this.allowExplicitFocus = !0, this.setFocus(s)), this.dispatchEventsOnKeyDown(e, i);
      }
    }, this.onContextMenu = (e, i, s) => {
      if (this.props.onContextMenu) {
        const l = {
          target: this,
          syntheticEvent: e,
          nativeEvent: e.nativeEvent,
          item: i,
          itemID: s
        };
        this.props.onContextMenu.call(void 0, l);
      }
    }, (0,index_mjs_.validatePackage)(e);
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
    this.fieldsSvc = new index_mjs_.TreeFieldsService(this.props);
    const { size: t, className: e } = this.props;
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        style: this.props.style ? this.props.style : void 0,
        className: (0,index_mjs_.classNames)(
          "k-treeview",
          {
            [`k-treeview-${P[t] || t}`]: t,
            "k-user-select-none": this.props.draggable,
            "k-rtl": this.props.dir === "rtl"
          },
          e
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
      /* @__PURE__ */ index_js_.createElement("ul", { className: "k-treeview-lines k-treeview-group", role: "group" }, this.data.map((i, s) => /* @__PURE__ */ index_js_.createElement(
        d,
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
          size: t,
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
  dispatchEventsOnKeyDown(t, e) {
    if (this.fieldsSvc === null)
      return;
    const i = () => this.fieldsSvc && (0,index_mjs_.isEnabledAndAllParentsEnabled)(this.state.focusedItemId, this.data, this.fieldsSvc);
    t.keyCode === index_mjs_.Keys.left && this.fieldsSvc.expanded(e) && i() ? this.dispatchExpandChange(t, e, this.state.focusedItemId) : t.keyCode === index_mjs_.Keys.right && !this.fieldsSvc.expanded(e) && (this.fieldsSvc.hasChildren(e) || (0,index_mjs_.hasChildren)(e, this.props.childrenField)) && i() ? this.dispatchExpandChange(t, e, this.state.focusedItemId) : t.keyCode === index_mjs_.Keys.enter && i() ? this.dispatchItemClick(t, e, this.state.focusedItemId) : t.keyCode === index_mjs_.Keys.space && i() && (t.preventDefault(), this.dispatchCheckChange(t, e, this.state.focusedItemId));
  }
  setFocus(t) {
    if (t && this.fieldsSvc)
      if (this.fieldsSvc.focusIdField) {
        const e = this.getItemById(t);
        this.setState({ focusedItemId: t, focusedItemPublicId: this.fieldsSvc.focusId(e) });
      } else
        this.setState({ focusedItemId: t });
    else
      this.setState((e) => ({
        focusedItemId: void 0,
        focusedItemPublicId: void 0,
        tabbableItemId: e.focusedItemId
      }));
  }
  getFocusedItem() {
    return this.state.focusedItemId ? this.getItemById(this.state.focusedItemId) : void 0;
  }
  getItemById(t) {
    return index_mjs_.treeIdUtils.getItemById(t, this.data, this.props.childrenField || consts/* CHILDREN_FIELD */.vj);
  }
  dispatchCheckChange(t, e, i) {
    (0,index_mjs_.dispatchEvent)(this.props.onCheckChange, t, this, { item: e, itemHierarchicalIndex: i });
  }
  dispatchExpandChange(t, e, i) {
    (0,index_mjs_.dispatchEvent)(this.props.onExpandChange, t, this, { item: e, itemHierarchicalIndex: i });
  }
  dispatchItemClick(t, e, i) {
    (0,index_mjs_.dispatchEvent)(this.props.onItemClick, t, this, { item: e, itemHierarchicalIndex: i });
  }
  refocusDueToFocusIdField() {
    if (this.fieldsSvc && this.fieldsSvc.focusIdField) {
      const t = this.state.focusedItemPublicId;
      if (t) {
        const e = this.props.getFocusHierarchicalIndex ? this.props.getFocusHierarchicalIndex(t) : (0,index_mjs_.resolveItemId)(t, this.fieldsSvc.focusIdField, this.data, this.props.childrenField);
        e !== this.state.focusedItemId && (this.allowExplicitFocus = !0, this.setState({ focusedItemId: e }));
      }
    }
  }
  get ariaMultiSelectable() {
    return this.props["aria-multiselectable"] === !0 || this.props["aria-multiselectable"] === "true";
  }
  get data() {
    return this.props.data || [];
  }
  focusDomItem(t) {
    t.focus();
  }
  /**
   * Returns the `guid` which is associated with the TreeView.
   */
  get guid() {
    return this.treeGuid;
  }
};
TreeView_h.propTypes = {
  data: prop_types_index_js_.arrayOf(prop_types_index_js_.any),
  animate: prop_types_index_js_.bool,
  tabIndex: prop_types_index_js_.number,
  focusIdField: prop_types_index_js_.string,
  getHierarchicalIndexById: prop_types_index_js_.func,
  onExpandChange: prop_types_index_js_.func,
  onItemClick: prop_types_index_js_.func,
  expandField: prop_types_index_js_.string,
  selectField: prop_types_index_js_.string,
  childrenField: prop_types_index_js_.string,
  hasChildrenField: prop_types_index_js_.string,
  textField: prop_types_index_js_.string,
  disableField: prop_types_index_js_.string,
  item: prop_types_index_js_.any,
  "aria-multiselectable": (t, e, i) => t[e] !== void 0 && t[e] !== !0 && t[e] !== !1 && t[e] !== "true" && t[e] !== "false" ? new Error(
    "Invalid prop `" + e + "` supplied to `" + i + "`. Validation failed."
  ) : null,
  "aria-label": prop_types_index_js_.string,
  "aria-labelledby": prop_types_index_js_.string,
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  dir: prop_types_index_js_.string
}, TreeView_h.defaultProps = {
  animate: !0,
  expandField: consts/* EXPAND_FIELD */.ax,
  selectField: consts/* SELECT_FIELD */.iD,
  hasChildrenField: consts/* HAS_CHILDREN_FIELD */.W8,
  childrenField: consts/* CHILDREN_FIELD */.vj,
  textField: consts/* TEXT_FIELD */.rr,
  disableField: consts/* DISABLED_FIELD */.wS,
  checkField: consts/* CHECK_FIELD */.eu,
  checkIndeterminateField: consts/* CHECK_INDETERMINATE_FIELD */.Iv,
  size: "medium"
};
let m = TreeView_h;


;// ../node_modules/.pnpm/@progress+kendo-react-treeview@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_46da20f5d522730422c4ede43f292bbb/node_modules/@progress/kendo-react-treeview/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";










const o = (0,index_mjs_.withIdHOC)(m);
o.displayName = "KendoReactTreeView";



/***/ })

}]);