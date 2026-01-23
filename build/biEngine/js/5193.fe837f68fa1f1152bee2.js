"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5193],{

/***/ 35193
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ ne),
/* harmony export */   ButtonGroup: () => (/* binding */ bt),
/* harmony export */   Chip: () => (/* binding */ Z),
/* harmony export */   ChipList: () => (/* binding */ Ne),
/* harmony export */   DropDownButton: () => (/* binding */ Ot),
/* harmony export */   DropDownButtonClassComponent: () => (/* binding */ Se),
/* harmony export */   DropDownButtonItem: () => (/* binding */ Ue),
/* harmony export */   FloatingActionButton: () => (/* binding */ Ve),
/* harmony export */   FloatingActionButtonItem: () => (/* binding */ Be),
/* harmony export */   SplitButton: () => (/* binding */ Kt),
/* harmony export */   SplitButtonClassComponent: () => (/* binding */ Ee),
/* harmony export */   SplitButtonItem: () => (/* binding */ Te),
/* harmony export */   Toolbar: () => (/* binding */ We),
/* harmony export */   ToolbarItem: () => (/* binding */ gt),
/* harmony export */   ToolbarSeparator: () => (/* binding */ Wt),
/* harmony export */   ToolbarSpacer: () => (/* binding */ je),
/* harmony export */   toolbarButtons: () => (/* binding */ mt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31212);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13209);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";






const O = {
  name: "@progress/kendo-react-buttons",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613314,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};
function ht({ imageUrl: e, name: n, iconClass: t, svgIcon: i, imageAlt: a }) {
  return e ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { role: "presentation", className: "k-button-icon", alt: a, src: e }) : n || i ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-button-icon", name: n, icon: i }) : t ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "presentation", className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-button-icon", t) }) : null;
}
const te = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(e) {
    super(e), this._element = null, this.handleClick = (n) => {
      this.toggleIfApplicable(), this.props.onClick && this.props.onClick.call(void 0, n);
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O), this.state = { selected: this.props.togglable === !0 && this.props.selected === !0 };
  }
  /**
   * Gets the DOM element of the Button component.
   */
  get element() {
    return this._element;
  }
  /**
   * Returns `true` when the component is togglable and selected ([see example]({% slug toggleable_button %})).
   * Otherwise, returns `false`.
   */
  get selected() {
    return this._selectedTemp !== void 0 ? this._selectedTemp : this.state.selected;
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(e, n) {
    return e.togglable && e.selected !== void 0 && e.selected !== n.selected ? { selected: e.selected } : null;
  }
  /**
   * @hidden
   */
  render() {
    const {
      children: e,
      togglable: n,
      icon: t,
      iconClass: i,
      svgIcon: a,
      imageUrl: l,
      imageAlt: u,
      className: c,
      onClick: g,
      size: C = te.defaultProps.size,
      rounded: h = te.defaultProps.rounded,
      fillMode: D = te.defaultProps.fillMode,
      themeColor: S = te.defaultProps.themeColor,
      ...w
    } = this.props, N = a !== void 0 || t !== void 0 || i !== void 0 || l !== void 0, B = e !== void 0, x = ht({
      name: t,
      svgIcon: a,
      iconClass: i,
      imageUrl: l,
      imageAlt: u
    });
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "button",
      {
        ref: (E) => this._element = E,
        "aria-pressed": n ? this.state.selected : void 0,
        ...w,
        onClick: this.handleClick,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-button",
          {
            [`k-button-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[C] || C}`]: C,
            [`k-button-${D}`]: D,
            [`k-button-${D}-${S}`]: !!(D && S),
            [`k-rounded-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.roundedMap[h] || h}`]: h,
            "k-icon-button": !B && N,
            "k-disabled": this.props.disabled,
            "k-selected": this.state.selected,
            "k-rtl": this.props.dir === "rtl"
          },
          this.props.className
        )
      },
      x,
      e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-button-text" }, e)
    );
  }
  toggleIfApplicable() {
    if (this.props.togglable && this.props.selected === void 0) {
      const e = !this.state.selected;
      this._selectedTemp = e, this.setState({ selected: e }, () => this._selectedTemp = void 0);
    }
  }
};
let ne = te;
ne.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  togglable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageAlt: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "flat", "link", "outline", "solid"]),
  // eslint-disable-next-line max-len
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"])
};
ne.defaultProps = {
  togglable: !1,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
const pt = {
  button: "k-button",
  flat: "k-flat",
  outline: "k-outline",
  clear: "k-button-clear",
  primary: "k-primary",
  "state-selected": "k-selected",
  "button-icon": "k-button-icon",
  "button-icontext": "k-button-icontext",
  "state-disabled": "k-disabled",
  "group-start": "k-group-start",
  "group-end": "k-group-end",
  "button-group": "k-button-group",
  "button-group-stretched": "k-button-group-stretched",
  ltr: "k-ltr",
  rtl: "k-rtl"
}, Oe = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-split-button .k-split-button-arrow)", mt = [
  "button" + Oe,
  ".k-button-group > button" + Oe,
  ".k-colorpicker",
  ".k-dropdownlist"
], ft = {
  styles: pt
}, ue = ft.styles;
class bt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(n) {
    super(n), this._element = null, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  }
  /**
   * @hidden
   */
  render() {
    const n = this.mapButtons(this.props.children), t = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      [ue["button-group"]],
      {
        ["k-disabled"]: this.props.disabled,
        [ue["button-group-stretched"]]: !!this.props.width
      },
      this.props.className
    ), i = {
      className: t,
      style: { width: `${this.props.width}` },
      dir: this.props.dir,
      // Accessibility properties
      role: "group",
      "aria-disabled": this.props.disabled
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: (a) => {
          this._element = a;
        },
        ...i,
        className: t
      },
      n
    );
  }
  mapButtons(n) {
    const t = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(n), i = this.props.dir !== void 0 ? this.props.dir === "rtl" : this._element && getComputedStyle(this._element).direction === "rtl" || !1;
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(n, (a, l) => react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(a) ? this.renderButton(a, l, l === t - 1, i) : a);
  }
  renderButton(n, t, i, a) {
    const l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(n.props.className, {
      [ue["group-start"]]: a ? i : t === 0,
      [ue["group-end"]]: a ? t === 0 : i
    }), u = { ...this.props.width ? { width: this.props.width } : {}, ...n.props.style || {} }, c = this.props.disabled || n.props.disabled, g = {
      ...n.props,
      ...l ? { className: l } : {},
      ...Object.keys(u).length ? { style: u } : {},
      ...c !== void 0 ? { disabled: c } : {}
    };
    return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(n.props.children) > 0 ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(n, g, n.props.children) : react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(n, g);
  }
}
bt.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.element), prop_types__WEBPACK_IMPORTED_MODULE_1__.element]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const we = (e) => {
  const n = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (l) => {
      e.onClick(l, e.index);
    },
    [e]
  ), t = e.dataItem.render || e.item || (e.item === void 0 ? e.render : null), i = e.dataItem.text !== void 0 ? e.dataItem.text : e.textField ? e.dataItem[e.textField] : e.dataItem, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      id: e.id,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-item",
        e.className,
        { "k-focus": e.focused }
      ),
      tabIndex: -1,
      onClick: n,
      onMouseDown: e.onDown,
      onPointerDown: e.onDown,
      role: "menuitem",
      "aria-disabled": e.dataItem.disabled || void 0
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        tabIndex: -1,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-link k-menu-link",
          {
            "k-selected": e.dataItem.selected,
            "k-disabled": e.dataItem.disabled
          }
        ),
        key: "icon"
      },
      t ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(t, { item: e.dataItem, itemIndex: e.index }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (e.dataItem.icon || e.dataItem.iconClass || e.dataItem.svgIcon) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: e.dataItem.iconClass, name: e.dataItem.icon, icon: e.dataItem.svgIcon }), e.dataItem.imageUrl && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "img",
        {
          role: "presentation",
          alt: "",
          src: e.dataItem.imageUrl,
          className: "k-icon"
        }
      ), i && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-menu-link-text" }, i))
    )
  );
  return e.item !== void 0 && /* to be removed in 5.0.0 */
  e.render !== void 0 ? e.render.call(void 0, a, e) : a;
};
we.displayName = "KendoReactButtonItem";
class Te extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
}
Te.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
const Le = (e, n, t, i) => {
  if (t)
    return e;
  const a = Math.min(i - 1, Math.max(0, e));
  switch (n) {
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc:
      return -1;
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
      return a - 1 < 0 ? i - 1 : a - 1;
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
      return a + 1 >= i ? 0 : a + 1;
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
      return 0;
    case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
      return i - 1;
    default:
      return e;
  }
};
function _e(e) {
  let n = { horizontal: "left", vertical: "bottom" };
  return e && (n.horizontal = "right"), n;
}
function He(e) {
  let n = { horizontal: "left", vertical: "top" };
  return e && (n.horizontal = "right"), n;
}
let Ee = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(n) {
    super(n), this.state = {
      focused: !1,
      focusedIndex: -1,
      opened: !1
    }, this.wrapper = null, this.mainButton = null, this.list = null, this.skipFocus = !1, this.buttonsData = [], this.onKeyDown = (t) => {
      const { focusedIndex: i } = this.state;
      if (t.altKey) {
        !this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down ? (t.preventDefault(), this.setState({ focusedIndex: 0 }), this.setOpen(!0, t)) : this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && (t.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, t));
        return;
      }
      let a;
      if (t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space) {
        if (t.preventDefault(), this.dispatchClickEvent(t, i), i >= 0) {
          a = {
            focusedIndex: this.opened ? -1 : 0
          };
          const l = !this.opened;
          this.setOpen(l, t);
        }
      } else if (this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, t);
        return;
      }
      if (this.opened) {
        const l = Le(
          i,
          t.keyCode,
          t.altKey,
          this.buttonsData.length
        );
        l !== i && (a = a || {}, a.focusedIndex = l);
        const u = t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right;
        !t.altKey && (u || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end) && t.preventDefault();
      }
      a && this.setState(a);
    }, this.switchFocus = (t) => {
      this.skipFocus = !0, t(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.onFocus = (t) => {
      this.skipFocus || ((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onFocus, t, this, void 0), this.setState({ focused: !0 }));
    }, this.setOpen = (t, i) => {
      this.opened !== t && (this.openedDuringOnChange = t, this.setState({ opened: t }), i ? this.dispatchPopupEvent(i, t) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (t, i) => {
      this.opened && this.setState({ focusedIndex: 0 }), this.dispatchClickEvent(t, i), this.setOpen(!1, t);
    }, this.onBlur = (t) => {
      this.skipFocus || (this.setState({
        focused: !1,
        focusedIndex: -1
      }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onBlur, t, this, void 0), setTimeout(() => {
        this.setOpen(!1, t);
      }, 0));
    }, this.onPopupClose = (t) => {
      var a;
      const i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
      this.element && this.element.removeAttribute("tabindex"), (i === this.list || (a = this.list) != null && a.contains(i)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, t);
    }, this.listRef = (t) => {
      this.list = t, t && this.state.focused && this.switchFocus(() => {
        t.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onSplitPartClick = (t) => {
      if (this.buttonsData.length) {
        const i = !this.opened;
        this.setState({
          focusedIndex: i ? 0 : -1,
          focused: !0
        }), this.setOpen(i, t);
      }
    }, this.onDownSplitPart = (t) => {
      t.preventDefault();
      const i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onItemDown = (t) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document) === this.list && t.preventDefault();
    }, this.dispatchPopupEvent = (t, i) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(i ? this.props.onOpen : this.props.onClose, t, this, void 0), this.openedDuringOnChange = void 0;
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  }
  get guid() {
    return this.props.id ? this.props.id + "-accessibility-id" : this.props.id;
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    this.buttonsData = this.props.items || react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children).filter((c) => c && c.type === Te).map((c) => c.props);
    const n = this.isRtl(), t = n ? "rtl" : void 0, { id: i, style: a, tabIndex: l, disabled: u } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: i,
        style: a,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-split-button",
          "k-button-group",
          {
            "k-focus": this.state.focused
          },
          `k-rounded-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.roundedMap[this.props.rounded || "medium"]}`,
          this.props.className
        ),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        dir: t,
        ref: (c) => this.wrapper = c
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        ne,
        {
          ref: (c) => this.mainButton = c && c.element,
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          onClick: (c) => this.onItemClick(c, -1),
          disabled: u || void 0,
          tabIndex: l,
          accessKey: this.props.accessKey,
          className: this.props.buttonClass,
          icon: this.props.icon,
          svgIcon: this.props.svgIcon,
          iconClass: this.props.iconClass,
          imageUrl: this.props.imageUrl,
          dir: t,
          "aria-disabled": u,
          "aria-haspopup": !0,
          "aria-expanded": this.opened || void 0,
          "aria-label": this.props.ariaLabel,
          "aria-controls": this.opened ? this.guid : void 0,
          id: "button-" + this.guid,
          title: this.props.title
        },
        this.props.text
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        ne,
        {
          type: "button",
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode,
          themeColor: this.props.themeColor,
          icon: "caret-alt-down",
          svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.caretAltDownIcon,
          className: "k-split-button-arrow",
          disabled: u || void 0,
          tabIndex: -1,
          onClick: this.onSplitPartClick,
          onMouseDown: this.onDownSplitPart,
          onPointerDown: this.onDownSplitPart,
          dir: t,
          "aria-label": "menu toggling button"
        }
      ),
      this.renderPopup(n)
    );
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(n, t) {
    this.isItemDisabled(t) || (t === -1 ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onButtonClick, n, this, void 0) : (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
      this.props.onItemClick,
      n,
      this,
      {
        item: this.buttonsData[t],
        itemIndex: t
      }
    ));
  }
  renderPopup(n) {
    const { popupSettings: t = {} } = this.props, { focusedIndex: i } = this.state;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__.Popup,
      {
        anchor: this.wrapper,
        show: this.opened,
        animate: t.animate,
        popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-menu-popup", t.popupClass),
        anchorAlign: t.anchorAlign || _e(n),
        popupAlign: t.popupAlign || He(n),
        style: n ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "ul",
        {
          role: "menu",
          id: this.guid,
          "aria-labelledby": "button-" + this.guid,
          tabIndex: -1,
          ref: this.listRef,
          "aria-activedescendant": i >= 0 ? `${this.guid}-${i}` : void 0,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-menu-group", {
            [`k-menu-group-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          })
        },
        this.renderChildItems()
      )
    );
  }
  renderChildItems() {
    const { item: n, itemRender: t, textField: i } = this.props;
    return this.buttonsData.length > 0 ? this.buttonsData.map((a, l) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      we,
      {
        className: "k-menu-item",
        dataItem: a,
        textField: i,
        focused: this.state.focusedIndex === l,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: t,
        item: n,
        key: l,
        index: l,
        id: `${this.guid}-${l}`
      }
    )) : null;
  }
  isItemDisabled(n) {
    return this.buttonsData[n] ? this.buttonsData[n].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.wrapper && getComputedStyle(this.wrapper).direction === "rtl";
  }
};
Ee.propTypes = {
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onButtonClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  popupSettings: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  buttonClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
Ee.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
class Ue extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
}
Ue.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
let Se = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(n) {
    super(n), this.state = {
      opened: !1,
      focused: !1,
      focusedIndex: -1
    }, this.mainButton = null, this.list = null, this.skipFocus = !1, this.buttonsData = [], this.onKeyDown = (t) => {
      const { focusedIndex: i } = this.state;
      if (t.altKey) {
        !this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down ? (t.preventDefault(), this.setOpen(!0, t), this.setState({ focusedIndex: 0 })) : this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && (t.preventDefault(), this.setState({ focusedIndex: -1 }), this.setOpen(!1, t));
        return;
      }
      const a = { ...this.state };
      if (t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space) {
        t.preventDefault(), i >= 0 && this.dispatchClickEvent(t, i);
        const l = !this.opened;
        this.setState({
          focused: !0,
          focusedIndex: l ? 0 : -1
        }), this.setOpen(l, t);
        return;
      }
      if (this.opened && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc) {
        this.setState({ focusedIndex: -1 }), this.setOpen(!1, t);
        return;
      }
      if (this.opened) {
        const l = Le(
          i,
          t.keyCode,
          t.altKey,
          this.buttonsData.length
        );
        a.focusedIndex = l;
        const u = t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right;
        !t.altKey && (u || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end) && t.preventDefault();
      }
      this.setState(a);
    }, this.switchFocus = (t) => {
      this.skipFocus = !0, t(), window.setTimeout(() => this.skipFocus = !1, 0);
    }, this.handleFocus = (t) => {
      this.skipFocus || (this.setState({ focused: !0, focusedIndex: this.opened ? 0 : -1 }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onFocus, t, this, void 0));
    }, this.handleButtonBlur = (t) => {
      this.opened || (this.setState({ focused: !1 }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onBlur, t, this, void 0));
    }, this.handleMenuBlur = (t) => {
      this.skipFocus || (this.setState({ focused: !1, focusedIndex: -1 }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onBlur, t, this, void 0), setTimeout(() => {
        this.setOpen(!1, t);
      }, 0));
    }, this.setOpen = (t, i) => {
      this.opened !== t && (this.openedDuringOnChange = t, this.setState({ opened: t }), i ? this.dispatchPopupEvent(i, t) : this.openedDuringOnChange = void 0);
    }, this.onItemClick = (t, i) => {
      this.setState({ focusedIndex: -1 }), this.dispatchClickEvent(t, i), this.setOpen(!1, t);
    }, this.onItemDown = (t) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document) === this.list && t.preventDefault();
    }, this.mouseDown = (t) => {
      t.preventDefault();
      const i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
      this.element && i !== this.element && i !== this.list && this.element.focus();
    }, this.onPopupClose = (t) => {
      var a;
      const i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document);
      this.element && this.element.removeAttribute("tabindex"), (i === this.list || (a = this.list) != null && a.contains(i)) && this.switchFocus(() => {
        this.element && this.element.focus({ preventScroll: !0 });
      }), this.props.popupSettings && this.props.popupSettings.onClose && this.props.popupSettings.onClose.call(void 0, t);
    }, this.listRef = (t) => {
      this.list = t, t && this.state.focused && this.switchFocus(() => {
        t.focus({ preventScroll: !0 }), this.element && (this.element.tabIndex = -1);
      });
    }, this.onClickMainButton = (t) => {
      if (!this.buttonsData.length)
        return;
      const i = !this.opened;
      this.setState({
        focused: !0,
        focusedIndex: i ? 0 : -1
      }), this.setOpen(i, t);
    }, this.dispatchPopupEvent = (t, i) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(i ? this.props.onOpen : this.props.onClose, t, this, void 0), this.openedDuringOnChange = void 0;
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  }
  get guid() {
    return this.props.id + "-accessibility-id";
  }
  get opened() {
    return this.openedDuringOnChange !== void 0 ? this.openedDuringOnChange : this.props.opened === void 0 ? this.state.opened : this.props.opened;
  }
  /**
   * @hidden
   */
  render() {
    const n = this.isRtl(), t = n ? "rtl" : void 0, { id: i, style: a, tabIndex: l, disabled: u } = this.props;
    return this.buttonsData = this.props.items || react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children).filter((c) => c && c.type === Ue).map((c) => c.props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ne,
      {
        id: i,
        size: this.props.size,
        style: a,
        rounded: this.props.rounded,
        fillMode: this.props.fillMode,
        themeColor: this.props.themeColor,
        onClick: this.onClickMainButton,
        onMouseDown: this.mouseDown,
        onKeyDown: this.onKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleButtonBlur,
        "aria-disabled": u ? "true" : void 0,
        tabIndex: l,
        accessKey: this.props.accessKey,
        icon: this.props.icon,
        svgIcon: this.props.svgIcon,
        iconClass: this.props.iconClass,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          this.props.buttonClass,
          this.props.className,
          "k-menu-button",
          // Used for a11y testing.
          { "k-focus": this.state.focused },
          { "k-disabled": u }
        ),
        imageUrl: this.props.imageUrl,
        dir: t,
        ref: (c) => this.mainButton = c && c.element,
        type: "button",
        "aria-haspopup": "menu",
        "aria-expanded": this.opened ? "true" : "false",
        "aria-label": this.props.ariaLabel,
        "aria-controls": this.opened ? this.guid : void 0,
        title: this.props.title
      },
      this.props.text
    ), this.renderPopup(n));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    (this.props.dir === void 0 && this.isRtl() || this.opened) && this.forceUpdate();
  }
  /**
   * The DOM element of main button.
   */
  get element() {
    return this.mainButton;
  }
  dispatchClickEvent(n, t) {
    this.isItemDisabled(t) || (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
      this.props.onItemClick,
      n,
      this,
      {
        item: this.buttonsData[t],
        itemIndex: t
      }
    );
  }
  renderPopup(n) {
    const { popupSettings: t = {}, id: i } = this.props, { focusedIndex: a } = this.state;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__.Popup,
      {
        anchor: this.mainButton,
        show: this.opened,
        animate: t.animate,
        popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-menu-popup", t.popupClass),
        anchorAlign: t.anchorAlign || _e(n),
        popupAlign: t.popupAlign || He(n),
        style: n ? { direction: "rtl" } : void 0,
        onClose: this.onPopupClose
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "ul",
        {
          role: "menu",
          id: this.guid,
          "aria-labelledby": i,
          tabIndex: -1,
          "aria-activedescendant": a >= 0 ? `${this.guid}-${a}` : void 0,
          ref: this.listRef,
          onKeyDown: this.onKeyDown,
          onBlur: this.handleMenuBlur,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-menu-group", {
            [`k-menu-group-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          })
        },
        this.renderChildItems()
      )
    );
  }
  renderChildItems() {
    const { item: n, itemRender: t, textField: i } = this.props;
    return this.buttonsData.length > 0 ? this.buttonsData.map((a, l) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      we,
      {
        className: "k-menu-item",
        dataItem: a,
        textField: i,
        focused: this.state.focusedIndex === l,
        onClick: this.onItemClick,
        onDown: this.onItemDown,
        render: t,
        item: n,
        index: l,
        key: l,
        id: `${this.guid}-${l}`
      }
    )) : null;
  }
  isItemDisabled(n) {
    return this.buttonsData[n] ? this.buttonsData[n].disabled : this.props.disabled;
  }
  isRtl() {
    return this.props.dir !== void 0 ? this.props.dir === "rtl" : !!this.mainButton && getComputedStyle(this.mainButton).direction === "rtl";
  }
};
Se.propTypes = {
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  popupSettings: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  buttonClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
Se.defaultProps = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
const ve = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(e) {
    super(e), this._element = null, this.offsetHeight = 0, this.offsetWidth = 0, this.buttons = [], this.focusedSelector = this.selectors.map((n) => n + ":focus").join(","), this.setTabIndex = (n) => {
      const { tabIndex: t = ve.defaultProps.tabIndex } = this.props;
      this.buttons.forEach((i, a) => {
        i.tabIndex = a === n ? t : -1;
      });
    }, this.onKeyDown = (n) => {
      const t = n.target;
      if (!(n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left || n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right || n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home || n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end) || n.defaultPrevented || this.buttons.findIndex((l) => l === t) === -1)
        return;
      const a = this.focusedIndex;
      n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left ? this.focusButton(a, a === 0 ? this.buttons.length - 1 : a - 1) : this.focusButton(a, a === this.buttons.length - 1 ? 0 : a + 1), n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home && this.focusButton(a, 0), n.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end && this.focusButton(a, this.buttons.length - 1);
    }, this.onWindowResize = (n) => {
      const t = this.element;
      if (!t)
        return;
      const i = t.offsetWidth, a = t.offsetHeight;
      if (this.offsetWidth !== i || this.offsetHeight !== a) {
        this.offsetWidth = i, this.offsetHeight = a;
        const l = { offsetWidth: this.offsetWidth, offsetHeight: this.offsetHeight };
        this.props.onResize && this.props.onResize.call(void 0, { target: this, ...l, nativeEvent: n });
      }
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  }
  get selectors() {
    return this.props.buttons || mt;
  }
  get focusedIndex() {
    const e = this.element && this.element.querySelector(this.focusedSelector);
    return Math.max(0, this.buttons.findIndex((n) => n === e));
  }
  /**
   * Returns the HTML element of the Toolbar component.
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    const e = this.element;
    e && (this.offsetWidth = e.offsetWidth, this.offsetHeight = e.offsetHeight, this.props.keyboardNavigation !== !1 && (this.buttons = Array.from(e.querySelectorAll(this.selectors.join(","))), this.setTabIndex(0)));
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const e = this.element;
    !e || this.props.keyboardNavigation === !1 || (this.buttons = Array.from(e.querySelectorAll(this.selectors.join(","))), this.setTabIndex(this.focusedIndex));
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize), this.buttons.length = 0;
  }
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        "aria-label": this.props.ariaLabel,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-toolbar",
          {
            [`k-toolbar-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          },
          this.props.className
        ),
        style: this.props.style,
        role: this.props.role !== void 0 ? this.props.role || void 0 : "toolbar",
        dir: this.props.dir,
        ref: (e) => this._element = e,
        onKeyDown: this.props.keyboardNavigation !== !1 ? this.onKeyDown : void 0
      },
      this.props.children
    );
  }
  focusButton(e, n) {
    const { tabIndex: t = ve.defaultProps.tabIndex } = this.props, i = this.buttons[n];
    if (i) {
      i.tabIndex = t, i.focus();
      const a = this.buttons[e];
      a && (a.tabIndex = -1);
    }
  }
};
let We = ve;
We.propTypes = {
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  keyboardNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onResize: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"])
};
We.defaultProps = {
  tabIndex: 0,
  size: "medium"
};
class gt extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments), this._element = null;
  }
  /**
   * Returns the HTML element of the ToolbarItem component.
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-toolbar-item", this.props.className),
        style: this.props.style,
        ref: (n) => this._element = n
      },
      this.props.children
    );
  }
}
gt.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
class Wt extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-separator", this.props.className) });
  }
}
const je = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
  const t = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(i, () => ({ element: t.current })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => ({ element: t.current }));
  const a = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-spacer",
      e.className
    ),
    [e.className]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "span",
    {
      ref: t,
      className: a
    }
  );
});
je.displayName = "KendoReactToolbarSpacer";
je.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
const Ze = react__WEBPACK_IMPORTED_MODULE_0__.createContext([null, (e) => {
}]), qe = react__WEBPACK_IMPORTED_MODULE_0__.createContext([null, (e) => {
}]), Ge = react__WEBPACK_IMPORTED_MODULE_0__.createContext([null, (e) => {
}]);
var se = /* @__PURE__ */ ((e) => (e.next = "next", e.prev = "prev", e.current = "current", e.reset = "reset", e))(se || {});
const yt = (e, n) => {
  const t = n.items.findIndex((i) => i === e);
  switch (n.type) {
    case "next":
      return t === n.items.length - 1 ? e : n.items[t + 1];
    case "prev":
      return t === 0 ? e : n.items[t - 1];
    case "current":
      return n.payload;
    case "reset":
      return null;
    default:
      return e;
  }
};
var Xe = /* @__PURE__ */ ((e) => (e.remove = "remove", e.add = "add", e.reorder = "reorder", e))(Xe || {});
const kt = (e, n) => {
  switch (n.type) {
    case "add":
      break;
    case "remove":
      return e.filter((t) => t[n.valueField] !== n.payload);
    case "reorder":
      break;
    default:
      return e;
  }
};
var pe = /* @__PURE__ */ ((e) => (e.toggle = "toggle", e.remove = "remove", e))(pe || {});
const Ct = (e, n) => {
  switch (n.selection) {
    case "single":
      switch (n.type) {
        case "toggle": {
          if (!Array.isArray(e) || e === null)
            return n.payload === e ? null : n.payload;
          throw new Error("State cannot be an array in single selection");
        }
        case "remove":
          return n.payload === e ? null : e;
        default:
          return e;
      }
    case "multiple":
      switch (n.type) {
        case "toggle": {
          if (Array.isArray(e))
            return e.some((t) => t === n.payload) ? e.filter((t) => t !== n.payload) : [...e, n.payload];
          if (e === null)
            return [n.payload];
          throw new Error("State cannot be non-array in multiple selection");
        }
        case "remove":
          return Array.isArray(e) ? e.some((t) => t === n.payload) ? e.filter((t) => t !== n.payload) : [...e, n.payload] : e;
        default:
          return e;
      }
    case "none":
      return null;
    default:
      return e;
  }
}, Z = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  const t = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => ({
    element: i.current,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => t.current);
  const [l, u] = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Ze), [c, g] = react__WEBPACK_IMPORTED_MODULE_0__.useContext(qe), [, C] = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Ge), h = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.selected || (Array.isArray(l) ? l.some((p) => p === e.value) : l === e.value),
    [e.selected, e.value, l]
  ), D = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => c === e.value,
    [e.value, c]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      D && i.current && i.current.focus();
    },
    [D]
  );
  const S = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (p) => {
      u({ type: pe.toggle, payload: e.value, event: p });
    },
    [u, e.value]
  ), w = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (p) => {
      e.removable && (C({ type: Xe.remove, payload: e.value, event: p }), g({ type: se.reset, payload: e.value, event: p }), u({ type: pe.remove, payload: e.value, event: p }), e.onRemove && e.onRemove.call(
        void 0,
        {
          target: t.current,
          syntheticEvent: p
        }
      ));
    },
    [e.onRemove, e.value, e.removable, C, g, u]
  ), N = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (p) => {
      switch (p.keyCode) {
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
          g({ type: se.prev, payload: e.value, event: p });
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
          g({ type: se.next, payload: e.value, event: p });
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
          u({ type: pe.toggle, payload: e.value, event: p });
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.delete:
          w(p);
          break;
      }
      e.onKeyDown && e.onKeyDown.call(
        void 0,
        {
          target: t.current,
          syntheticEvent: p
        }
      );
    },
    [e.onKeyDown, e.value, g, u, w]
  ), B = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (p) => {
      g({ payload: e.value, type: se.current, event: p }), e.onFocus && e.onFocus.call(
        void 0,
        {
          target: t.current,
          syntheticEvent: p
        }
      );
    },
    [e.onFocus, e.value, g]
  ), x = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (p) => {
      e.onBlur && e.onBlur.call(
        void 0,
        {
          target: t.current,
          syntheticEvent: p
        }
      );
    },
    [e.onBlur]
  ), E = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useMouse)(e, t, { onClick: S });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ...E,
      role: e.role || "button",
      id: e.value,
      style: e.style,
      ref: i,
      dir: a,
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(e.tabIndex, e.disabled, void 0),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-chip",
        {
          "k-rtl": a === "rtl",
          "k-disabled": e.disabled,
          "k-selected": h,
          "k-focus": D,
          [`k-chip-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[e.size] || e.size}`]: e.size,
          [`k-rounded-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.roundedMap[e.rounded] || e.rounded}`]: e.rounded,
          [`k-chip-${e.fillMode}`]: e.fillMode,
          [`k-chip-${e.fillMode}-${e.themeColor}`]: !!(e.fillMode && e.themeColor)
        },
        e.className
      ),
      "aria-pressed": e.role ? void 0 : h,
      "aria-disabled": e.disabled,
      "aria-describedby": e.ariaDescribedBy,
      "aria-keyshortcuts": e.removable ? "Enter Delete" : void 0,
      onFocus: B,
      onBlur: x,
      onKeyDown: N
    },
    h && (e.selectedIcon || e.selectedSvgIcon) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
      {
        className: "k-chip-icon",
        name: e.selectedIcon ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(e.selectedIcon) : void 0,
        icon: e.selectedSvgIcon,
        size: "small"
      }
    ),
    (e.icon || e.svgIcon) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
      {
        className: "k-chip-icon",
        name: e.icon ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(e.icon) : void 0,
        icon: e.svgIcon,
        size: "small"
      }
    ),
    e.avatar && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: `k-chip-avatar k-avatar k-rounded-${e.avatar.rounded} k-avatar-md k-avatar-solid k-avatar-solid-primary`,
        style: e.avatar.style
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-avatar-image" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "img",
        {
          src: e.avatar.image,
          alt: e.avatar.imageAlt
        }
      ))
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-chip-content" }, e.children !== void 0 ? e.children : e.text && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        "aria-label": e.ariaLabel || e.text,
        className: "k-chip-label"
      },
      e.text
    )),
    e.removable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-chip-actions" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-chip-action", "k-chip-remove-action"), onClick: w }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
      {
        name: e.removeIcon ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(e.removeIcon) : void 0,
        icon: e.removeSvgIcon || _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xCircleIcon,
        size: "small"
      }
    )))
  );
}), vt = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["ltr", "rtl"]),
  removable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  removeIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  removeIconSvg: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  selectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  selectedIconSvg: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  dataItem: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "outline", "solid"]),
  // eslint-disable-next-line max-len
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "base", "info", "success", "warning", "error"])
}, It = {
  disabled: !1,
  removable: !1,
  removeIcon: "k-i-x-circle",
  dir: "ltr",
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  themeColor: "base"
};
Z.displayName = "KendoReactChip";
Z.propTypes = vt;
Z.defaultProps = It;
const xt = (e, n, t) => {
  n.selection === "multiple" ? Array.isArray(e) || (e = e ? [e] : null) : n.selection === "single" && Array.isArray(e) && (e = e ? e.join("") : null);
  const [i, a] = react__WEBPACK_IMPORTED_MODULE_0__.useState(e);
  return [i, (u) => {
    const c = Ct(n.state || i, { ...u, ...n });
    t && t(c, u.event), n.selection !== "none" && a(c);
  }];
}, Dt = (e) => {
  const [n, t] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  return [n, (a) => {
    const l = yt(a.payload, { ...a, ...e });
    t(l);
  }];
}, wt = (e, n, t) => {
  const [i, a] = react__WEBPACK_IMPORTED_MODULE_0__.useState(e);
  return [i, (u) => {
    const c = kt(n.state || i, { ...u, ...n });
    t && t(c, u.event), a(c);
  }];
}, Ne = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  const t = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), a = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(i, e.dir), {
    chip: l,
    id: u,
    style: c,
    tabIndex: g,
    disabled: C,
    size: h,
    className: D,
    ariaDescribedBy: S,
    ariaLabelledBy: w,
    ariaLabel: N,
    selection: B = j.selection,
    value: x = j.defaultValue,
    defaultData: E = j.defaultData,
    valueField: p = j.valueField,
    textField: L = j.textField,
    onChange: K,
    onDataChange: z
  } = e, _ = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => l || Z,
    [l, Z]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => ({
    element: i.current,
    props: e
  })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => t.current);
  const A = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (m, y) => {
      K && t.current && K.call(void 0, {
        value: m,
        target: t.current,
        syntheticEvent: y
      });
    },
    [K]
  ), [q, G] = xt(
    x || e.defaultValue,
    {
      selection: B,
      state: x
    },
    A
  ), oe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (m, y) => {
      z && t.current && z.call(void 0, {
        value: m,
        target: t.current,
        syntheticEvent: y
      });
    },
    [z]
  ), [X, ie] = wt(
    e.data || E,
    {
      state: e.data,
      valueField: p
    },
    oe
  ), V = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (m, y) => (m.push(y[p]), m),
    [p]
  ), H = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => e.data || X,
    [e.data, X]
  ), ae = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => x || q,
    [x, q]
  ), le = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => H.reduce(V, []),
    [H, V]
  ), J = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (m) => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(p)(m),
    [p]
  ), k = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (m) => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(L)(m),
    [L]
  ), [fe, be] = Dt({ items: le }), re = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useMouse)(e, t);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ze.Provider, { value: [ae, G] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(qe.Provider, { value: [fe, be] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ge.Provider, { value: [H, ie] }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: i,
      ...re,
      role: C ? void 0 : "listbox",
      id: u,
      dir: a,
      style: c,
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(g, C, void 0),
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        "k-chip-list",
        {
          "k-rtl": a === "rtl",
          "k-disabled": C,
          [`k-chip-list-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[h] || h}`]: h
        },
        D
      ),
      "aria-label": N,
      "aria-labelledby": w,
      "aria-describedby": S,
      "aria-orientation": "horizontal",
      "aria-multiselectable": B === "multiple"
    },
    H.map((m, y) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _,
      {
        role: "option",
        dataItem: m,
        size: h,
        key: [J(m), y].join("-"),
        text: k(m),
        value: J(m),
        ariaLabel: m.ariaLabel,
        svgIcon: m.svgIcon || void 0
      }
    ))
  ))));
}), Et = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any),
  onDataChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.any, prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any)]),
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.any, prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.any)]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  selection: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["single", "none", "multiple"]),
  textField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  valueField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["ltr", "rtl"]),
  ariaLabelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  ariaDescribedBy: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"])
}, j = {
  chip: Z,
  size: "medium",
  disabled: !1,
  defaultValue: null,
  defaultData: [],
  dir: "ltr",
  selection: "none",
  textField: "text",
  valueField: "value",
  removable: "removable"
};
Ne.displayName = "KendoReactChipList";
Ne.propTypes = Et;
Ne.defaultProps = j;
const Be = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
  const {
    className: t,
    disabled: i,
    text: a,
    icon: l,
    style: u,
    id: c,
    focused: g,
    tabIndex: C,
    index: h,
    dataItem: D,
    item: S,
    svgIcon: w,
    onDown: N,
    onClick: B,
    ...x
  } = e, E = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), p = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      E.current && E.current.focus();
    },
    []
  ), L = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: E.current,
      focus: p
    }),
    [p]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, L);
  const K = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (A) => {
      B && h !== void 0 && !i && B(A, h);
    },
    [B, h]
  ), z = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-fab-item",
      {
        "k-focus": g,
        "k-disabled": i
      },
      t
    ),
    [t, i, g]
  ), _ = S;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "li",
    {
      ref: E,
      id: c,
      className: z,
      style: u,
      role: "menuitem",
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(C, i),
      "aria-disabled": i,
      "aria-label": `${a || ""} floatingactionbutton item`,
      onClick: K,
      onMouseDown: N,
      onPointerDown: N,
      ...x
    },
    _ ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_, { itemIndex: h, item: D }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-fab-item-text" }, a), l || w ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-fab-item-icon", name: l, icon: w }) : null)
  );
});
Be.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  focused: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  customProp: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
Be.displayName = "KendoFloatingActionButtonItem";
const Ke = "16px", he = (e) => typeof e == "number" ? e + "px" : e, St = (e, n) => {
  const t = { horizontal: n ? "right" : "left", vertical: "bottom" };
  return e.horizontal === "end" && (t.horizontal = n ? "left" : "right"), t;
}, Nt = (e, n) => {
  const t = { horizontal: n ? "right" : "left", vertical: "top" };
  return e.horizontal === "end" && (t.horizontal = n ? "left" : "right"), t;
}, Bt = (e, n) => {
  const t = n === "end" ? "end" : "start";
  return {
    rtl: { end: "k-text-left", start: "k-text-right" },
    ltr: { start: "k-text-left", end: "k-text-right" }
  }[e][t];
}, Ft = (e, n, t, i) => {
  const a = n.horizontal, l = n.vertical;
  if (e.current) {
    const u = t && t.x !== void 0 ? he(t.x) : Ke, c = t && t.x !== void 0 ? `calc(50% + ${he(t.x)})` : "50%", g = t && t.y !== void 0 ? he(t.y) : Ke, C = t && t.y !== void 0 ? `calc(50% + ${he(t.y)})` : "50%";
    e.current.style.setProperty(zt(n, i), a === "center" ? c : u), e.current.style.setProperty(Pt(n), l === "middle" ? C : g), i && ((l === "top" || l === "bottom") && a === "start" && e.current.style.setProperty("left", "unset"), l === "middle" && a === "end" && e.current.style.setProperty("right", "unset"), l === "middle" && a === "start" && e.current.style.setProperty("left", "unset"));
  }
}, zt = (e, n) => {
  const { horizontal: t } = e;
  return {
    end: n ? "left" : "right",
    center: "left",
    start: n ? "right" : "left"
  }[t || "end"];
}, Pt = (e) => ({
  top: "top",
  middle: "top",
  bottom: "bottom"
})[e.vertical || "bottom"], Mt = 2, Rt = 100, Ve = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((e, n) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(O);
  const {
    align: t = ee.align,
    alignOffset: i,
    className: a,
    disabled: l,
    icon: u,
    svgIcon: c,
    iconClass: g,
    id: C,
    items: h,
    item: D,
    text: S,
    positionMode: w = ee.positionMode,
    size: N = ee.size,
    style: B,
    rounded: x = ee.rounded,
    themeColor: E = ee.themeColor,
    overlayStyle: p,
    tabIndex: L,
    accessKey: K,
    popupSettings: z = {},
    modal: _,
    onClick: A,
    onItemClick: q,
    onFocus: G,
    onBlur: oe,
    onKeyDown: X,
    onOpen: ie,
    onClose: V,
    ...H
  } = e, ae = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useZIndexContext)(), le = ae ? ae + Mt : Rt, J = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), k = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), fe = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), be = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), re = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      k.current && k.current.focus();
    },
    []
  ), m = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => ({
      element: k.current,
      focus: re
    }),
    [re]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(J, m), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(n, () => J.current);
  const [y, F] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [ce, U] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), [Q, v] = react__WEBPACK_IMPORTED_MODULE_0__.useState(-1), Je = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)() + "-button-id", ge = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useDir)(k, e.dir), Y = ge === "rtl", de = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)() + "-list-id";
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      Ft(k, t, i, Y);
    },
    [k, t, i, Y]
  ), react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
    () => {
      ce && k && k.current && k.current.focus();
    },
    [ce, k]
  );
  const W = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d, b) => {
      h && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        b ? ie : V,
        d,
        m(),
        void 0
      );
    },
    [ie, V, h]
  ), Fe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      !d.target || l || (!h && A ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        A,
        d,
        m(),
        void 0
      ) : (F(!y), U(!0), v(y ? -1 : 0), W(d, !y)));
    },
    [
      F,
      U,
      v,
      A,
      W,
      y,
      h,
      l
    ]
  ), Qe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      U(!0), v(y ? 0 : -1), G && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        G,
        d,
        m(),
        void 0
      );
    },
    [G, U, v]
  ), Ye = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      U(!1), F(!1), v(-1), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        oe,
        d,
        m(),
        void 0
      ), y && W(d, !1);
    },
    [oe, U, F, v, W]
  ), et = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      d.preventDefault();
    },
    []
  ), ye = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d, b) => {
      h && (h[b].disabled || (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        q,
        d,
        m(),
        {
          itemProps: h[b],
          itemIndex: b
        }
      ));
    },
    [q]
  ), tt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d, b) => {
      !d.target || !h || (v(b), F(!1), ye(d, b), W(d, !1));
    },
    [v, F, ye, W]
  ), st = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(document) === k.current && d.preventDefault();
    },
    [k]
  ), nt = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      const b = Q, ke = h ? h.length : -1;
      if (d.altKey) {
        !y && d.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down && (d.preventDefault(), F(!0), v(0)), y && d.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up && (d.preventDefault(), F(!1), v(-1));
        return;
      }
      switch (d.keyCode) {
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter:
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.space:
          b >= 0 && ye(d, b), h || Fe(d), d.preventDefault(), F(!y), v(y ? -1 : 0);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.esc:
          d.preventDefault(), F(!1), v(-1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.home:
          d.preventDefault(), v(0);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.end:
          d.preventDefault(), v(ke - 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.down:
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.right:
          d.preventDefault(), v(b + 1 >= ke ? 0 : b + 1);
          break;
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.up:
        case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.left:
          d.preventDefault(), v(b - 1 < 0 ? ke - 1 : b - 1);
          break;
      }
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(
        X,
        d,
        m(),
        void 0
      );
    },
    [X, Q, v, Y, F]
  ), ot = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-fab k-fab-solid",
      {
        "k-fab-sm": N === "small",
        "k-fab-md": N === "medium",
        "k-fab-lg": N === "large",
        "k-disabled": l,
        "k-pos-absolute": w === "absolute",
        "k-pos-fixed": w === "fixed",
        "k-focus": ce,
        [`k-rounded-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.roundedMap[x] || x}`]: x,
        [`k-fab-solid-${E}`]: E
      },
      `k-${t.vertical}-${t.horizontal}`,
      a
    ),
    [E, N, x, l, w, t, ce, a]
  ), it = h && h.map((d, b) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Be,
    {
      ...d,
      key: b,
      index: b,
      id: `${de}-${b}`,
      disabled: l || d.disabled,
      focused: Q === b,
      dataItem: d,
      item: D,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
        d.className,
        Bt(ge || "ltr", t.horizontal)
      ),
      onClick: tt,
      onDown: st
    }
  )), ze = !!((u || c) && !S), at = k.current ? k.current.offsetWidth : 0, lt = 32, Pe = at / 2 - lt / 2;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.ZIndexContext.Provider, { value: le }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "button",
    {
      ref: k,
      id: C || Je,
      role: "button",
      type: "button",
      "aria-disabled": l,
      "aria-expanded": h ? y : void 0,
      "aria-haspopup": !!h,
      "aria-label": `${S || ""} floatingactionbutton`,
      "aria-owns": h ? de : void 0,
      "aria-activedescendant": Q >= 0 && h ? `${de}-${Q}` : void 0,
      tabIndex: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getTabIndex)(L, l),
      accessKey: K,
      dir: ge,
      disabled: l,
      className: ot,
      style: B,
      onClick: Fe,
      onMouseDown: et,
      onFocus: Qe,
      onBlur: Ye,
      onKeyDown: nt,
      ...H
    },
    u || c ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-fab-icon", name: u, icon: c }) : g ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "presentation", className: g }) : null,
    S && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-fab-text" }, S)
  ), _ && y && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: "k-overlay",
      style: {
        zIndex: le,
        ...p
      }
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_3__.Popup,
    {
      ref: be,
      anchor: k.current,
      show: y,
      animate: z.animate,
      popupClass: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-popup-transparent k-fab-popup", z.popupClass),
      anchorAlign: z.anchorAlign || St(t, Y),
      popupAlign: z.popupAlign || Nt(t, Y),
      style: { boxShadow: "none" }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "ul",
      {
        ref: fe,
        role: "menu",
        "aria-labelledby": C,
        id: de,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-fab-items", {
          "k-fab-items-bottom": t.vertical !== "bottom",
          "k-fab-items-top": t.vertical === "bottom"
        }),
        style: {
          paddingLeft: ze ? Pe : void 0,
          paddingRight: ze ? Pe : void 0
        }
      },
      it
    )
  )));
});
Ve.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  accessKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  svgIcon: _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.svgIconPropType,
  iconClass: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  alignOffset: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.number, prop_types__WEBPACK_IMPORTED_MODULE_1__.string]),
    y: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.number, prop_types__WEBPACK_IMPORTED_MODULE_1__.string])
  }),
  align: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["top", "middle", "bottom"]),
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "center", "end"])
  }),
  positionMode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["absolute", "fixed"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([null, "small", "medium", "large", "full"]),
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf([
    null,
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
  modal: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};
const ee = {
  align: { vertical: "bottom", horizontal: "end" },
  size: "medium",
  rounded: "full",
  themeColor: "primary",
  positionMode: "fixed"
};
Ve.displayName = "KendoFloatingActionButton";
const Ot = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(Se);
Ot.displayName = "KendoReactDropDownButton";
const Kt = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(Ee);
Kt.displayName = "KendoReactSplitButton";



/***/ }

}]);