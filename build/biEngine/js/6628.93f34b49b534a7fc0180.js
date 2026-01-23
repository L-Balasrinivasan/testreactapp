"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[6628],{

/***/ 16628
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ lt),
/* harmony export */   DialogActionsBar: () => (/* binding */ v),
/* harmony export */   DialogPropsContext: () => (/* binding */ ht),
/* harmony export */   Window: () => (/* binding */ wt),
/* harmony export */   WindowActionsBar: () => (/* binding */ U),
/* harmony export */   WindowPropsContext: () => (/* binding */ ft)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14129);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14800);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13209);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52132);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";







const at = ({ children: r, onCloseButtonClick: i, id: t, closeIcon: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: t }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-window-title k-dialog-title" }, r), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, e && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__.Button,
  {
    role: "button",
    "aria-label": "Close",
    onClick: i,
    icon: "x",
    svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon,
    fillMode: "flat",
    className: "k-window-titlebar-action k-dialog-titlebar-action"
  }
))), v = (r) => {
  const i = {
    layout: "stretched",
    ...r
  }, { layout: t, children: e } = i, n = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.classNames)(
    "k-actions",
    "k-actions-horizontal",
    "k-window-actions k-dialog-actions",
    {
      [`k-actions-${t}`]: t
    }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: n }, e);
};
v.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["start", "center", "end", "stretched"])
};
const y = {
  name: "@progress/kendo-react-dialogs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613351,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, O = "data-windowid", N = 10002, S = 2, rt = ".k-window:not(.k-dialog), .k-dialog-wrapper", z = (r, i, t) => {
  let e = r;
  if (i && i.defaultView) {
    let n = i.querySelectorAll(rt), l = !1;
    return n.forEach((d) => {
      let h = i.defaultView.getComputedStyle(d, null);
      if (d.getAttribute(O) !== t && h.zIndex !== null) {
        let c = parseInt(h.zIndex, 10);
        c >= e && (e = c, l = !0);
      }
    }), l ? e + S : e;
  }
  return e;
};
class b extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.context = 0, this.titleId = this.generateTitleId(), this.contentId = this.generateContentId(), this.showLicenseWatermark = !1, this.onCloseDialog = (t) => {
      t.preventDefault(), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onClose, t, this, void 0);
    }, this.onKeyDown = (t) => {
      t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.esc && this.props.onClose && (t.preventDefault(), this.onCloseDialog(t));
      const e = this.element;
      if (e && t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.tab) {
        const n = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', l = e.querySelectorAll(n), d = l[0], h = l[l.length - 1], g = this.getDocument(), c = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.getActiveElement)(g);
        t.shiftKey ? (g && c === d || g && c === this.element) && (h.focus(), t.preventDefault()) : g && c === h && (d.focus(), t.preventDefault());
      }
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : N : this.state.zIndex > (this.context ? this.context + S : 0) ? this.state.zIndex : this.context + S, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.validatePackage)(y), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.shouldShowValidationUI)(y);
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.element && (this.props.autoFocus && this.element.focus(), this.setState({
      zIndex: z(this.getCurrentZIndex(), this.getDocument(), this._id)
    }));
  }
  /**
   * @hidden
   */
  render() {
    const i = this.props.id !== void 0 ? this.props.id : this.titleId, { title: t, width: e, height: n, children: l, minWidth: d, dir: h, style: g, contentStyle: c } = this.props, f = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(l), C = this.getContent(f), E = this.getActionBar(f), I = t ? {
      "aria-labelledby": i
    } : null, u = this.props.closeIcon !== void 0 ? this.props.closeIcon : !0, Z = this.getCurrentZIndex(), P = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.ZIndexContext.Provider, { value: Z }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        [O]: this._id,
        className: "k-dialog-wrapper" + (this.props.className ? " " + this.props.className : ""),
        onKeyDown: this.onKeyDown,
        tabIndex: 0,
        dir: h,
        style: {
          zIndex: Z,
          ...g
        },
        ref: (tt) => this.element = tt
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-overlay" }),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ...I,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.classNames)(
            "k-window k-dialog",
            {
              [`k-window-${this.props.themeColor}`]: this.props.themeColor
            }
          ),
          role: "dialog",
          "aria-labelledby": i,
          "aria-modal": !0,
          "aria-describedby": this.contentId,
          style: { width: e, height: n, minWidth: d }
        },
        this.props.title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          at,
          {
            closeIcon: u,
            onCloseButtonClick: this.onCloseDialog,
            id: i
          },
          t
        ),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-window-content k-dialog-content", style: c, id: this.contentId }, C),
        E,
        this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.WatermarkOverlay, null)
      )
    ));
    return _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.canUseDOM ? this.props.appendTo !== null ? react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(P, this.props.appendTo || document.body) : P : null;
  }
  getActionBar(i) {
    return i.filter((t) => t && t.type === v);
  }
  getContent(i) {
    return i.filter((t) => t && t.type !== v);
  }
  generateTitleId() {
    return "dialog-title-" + this._id;
  }
  generateContentId() {
    return "dialog-content-" + this._id;
  }
}
b.displayName = "Dialog";
b.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  dir: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.number, prop_types__WEBPACK_IMPORTED_MODULE_2__.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.number, prop_types__WEBPACK_IMPORTED_MODULE_2__.string]),
  minWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.number, prop_types__WEBPACK_IMPORTED_MODULE_2__.string]),
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
};
b.defaultProps = {
  autoFocus: !1
};
b.contextType = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.ZIndexContext;
const ht = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.createPropsContext)(), lt = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.withPropsContext)(ht, b));
lt.displayName = "KendoReactDialog";
var a = /* @__PURE__ */ ((r) => (r.DEFAULT = "DEFAULT", r.FULLSCREEN = "FULLSCREEN", r.MINIMIZED = "MINIMIZED", r))(a || {});
const M = "dialogs.windowMaximizeButton", A = "dialogs.windowMinimizeButton", R = "dialogs.windowRestoreButton", F = "dialogs.windowCloseButton", T = {
  [M]: "maximize",
  [A]: "minimize",
  [R]: "restore",
  [F]: "close"
}, dt = (r) => {
  const {
    children: i,
    onCloseButtonClick: t,
    onMinimizeButtonClick: e,
    onFullScreenButtonClick: n,
    onRestoreButtonClick: l,
    onDoubleClick: d,
    stage: h,
    forwardedRef: g,
    id: c
  } = r, f = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_6__.useLocalization)(), C = r.minimizeButton ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r.minimizeButton, { onClick: e, stage: h }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      fillMode: "flat",
      icon: "window-minimize",
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.windowMinimizeIcon,
      className: "k-window-titlebar-action",
      onClick: e,
      "aria-label": f.toLanguageString(A, T[A])
    }
  ), E = r.maximizeButton ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r.maximizeButton, { onClick: n, stage: h }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      fillMode: "flat",
      icon: "window-maximize",
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.windowIcon,
      className: "k-window-titlebar-action",
      onClick: n,
      "aria-label": f.toLanguageString(M, T[M])
    }
  ), I = r.restoreButton ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r.restoreButton, { onClick: l, stage: h }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      fillMode: "flat",
      icon: "window-restore",
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.windowRestoreIcon,
      className: "k-window-titlebar-action",
      onClick: l,
      "aria-label": f.toLanguageString(R, T[R])
    }
  ), u = r.closeButton ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r.closeButton, { onClick: t, stage: h }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      fillMode: "flat",
      icon: "x",
      svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xIcon,
      className: "k-window-titlebar-action",
      onClick: t,
      "aria-label": f.toLanguageString(F, T[F])
    }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: "k-window-titlebar",
      style: { touchAction: "none" },
      ref: g,
      onDoubleClick: d
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-window-title", id: c }, i || ""),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-window-titlebar-actions" }, h === a.DEFAULT && C, h === a.DEFAULT && E, h !== a.DEFAULT && I, u)
  );
}, ct = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((r, i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
  dt,
  {
    ...r,
    forwardedRef: i
  }
)), pt = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
class gt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-resize-handles-wrapper" }, " ", pt.map((i, t) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Draggable,
      {
        key: t,
        onDrag: (e) => {
          const { event: n } = e;
          n.originalEvent.preventDefault(), this.props.onResize(n, { end: !1, direction: i });
        },
        onRelease: (e) => {
          const { event: n } = e;
          n.originalEvent.preventDefault(), this.props.onResize(n, { end: !0, direction: i });
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: "k-resize-handle k-resize-" + i,
          style: { display: "block", touchAction: "none" }
        }
      )
    )));
  }
}
class ut extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(i) {
    return i.shouldUpdateOnDrag || !i.isDragging;
  }
  render() {
    return this.props.children;
  }
}
const U = (r) => {
  const i = {
    layout: "end",
    ...r
  }, { layout: t, children: e } = i, n = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.classNames)(
    "k-actions",
    "k-window-actions",
    "k-actions-horizontal",
    "k-hstack",
    {
      "k-justify-content-start": t === "start",
      "k-justify-content-center": t === "center",
      "k-justify-content-end": t === "end",
      "k-justify-content-stretch": t === "stretched"
    }
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: n }, e);
};
U.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,
  layout: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["start", "center", "end", "stretched"])
};
const W = 300, B = 300, H = 120, _ = 100, w = 5;
class k extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(i) {
    super(i), this.context = 0, this.draggable = null, this.offSetCoordinates = { x: 0, y: 0 }, this.titleId = this.generateTitleId(), this.mounted = !1, this.showLicenseWatermark = !1, this.onKeyDown = (t) => {
      if (t.target !== t.currentTarget)
        return;
      const e = this.props.minWidth || H, n = this.props.minHeight || _;
      if (t.ctrlKey && this.props.resizable) {
        switch (t.keyCode) {
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.up:
            t.preventDefault(), n <= this.height - w && this.setState({ height: this.height - w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.down:
            t.preventDefault(), this.setState({ height: this.height + w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.left:
            e <= this.width - w && this.setState({ width: this.width - w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.right:
            this.setState({ width: this.width + w });
            break;
          default:
            return;
        }
        this.dispatchMoveEvent(this.props.onResize, t, !1, void 0);
        return;
      }
      if (t.altKey) {
        switch (t.keyCode) {
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.up:
            this.windowStage === a.MINIMIZED ? (this.handleRestore(t), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.DEFAULT })) : this.windowStage === a.DEFAULT && (this.handleFullscreen(t), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.FULLSCREEN }));
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.down:
            this.windowStage === a.FULLSCREEN ? (this.handleRestore(t), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.DEFAULT })) : this.windowStage === a.DEFAULT && (this.handleMinimize(t), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.MINIMIZED }));
            break;
        }
        return;
      }
      if (!t.ctrlKey)
        switch (t.keyCode) {
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.esc:
            this.props.onClose && this.handleCloseWindow(t);
            return;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.up:
            this.setState({ top: this.state.top - w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.down:
            this.setState({ top: this.state.top + w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.left:
            this.setState({ left: this.state.left - w });
            break;
          case _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Keys.right:
            this.setState({ left: this.state.left + w });
            break;
          default:
            return;
        }
      this.dispatchMoveEvent(this.props.onMove, t, !1, void 0);
    }, this.onPress = (t) => {
      const e = t.event;
      this.windowCoordinatesState.differenceLeft = e.pageX - this.left, this.windowCoordinatesState.differenceTop = e.pageY - this.top;
    }, this.onDrag = (t) => {
      const e = t.event;
      e.originalEvent.preventDefault(), this.windowStage !== a.FULLSCREEN && this.props.draggable && (this.setState({
        top: Math.max(e.pageY - this.windowCoordinatesState.differenceTop, 0),
        left: e.pageX - this.windowCoordinatesState.differenceLeft,
        isDragging: !0
      }), this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e, !0, !1));
    }, this.onRelease = (t) => {
      const e = t.event;
      this.windowStage !== a.FULLSCREEN && this.props.draggable && this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e, !0, !0), this.setState({
        isDragging: !1
      });
    }, this.onFocus = () => {
      this._blurTimeout ? (clearTimeout(this._blurTimeout), this._blurTimeout = void 0) : this.setState({
        focused: !0,
        zIndex: z(this.getCurrentZIndex(), this.getDocument(), this._id)
      });
    }, this.onBlur = () => {
      clearTimeout(this._blurTimeout);
      const t = this.getWindow();
      t && (this._blurTimeout = t.setTimeout(() => {
        this.mounted && this.setState({ focused: !1 }), this._blurTimeout = void 0;
      }));
    }, this.getInitialTop = () => {
      if (this.props.top !== void 0)
        return this.props.top;
      if (this.props.initialTop !== void 0)
        return this.props.initialTop;
      let t = B;
      if (this.props.height !== void 0 ? t = this.props.height : this.props.initialHeight !== void 0 && (t = this.props.initialHeight), this.props.appendTo)
        return this.props.appendTo.offsetHeight / 2 - t / 2;
      const e = this.getWindow();
      return e ? e.innerHeight / 2 - t / 2 : 0;
    }, this.getInitialLeft = () => {
      if (this.props.left !== void 0)
        return this.props.left;
      if (this.props.initialLeft !== void 0)
        return this.props.initialLeft;
      let t = W;
      if (this.props.width !== void 0 ? t = this.props.width : this.props.initialWidth !== void 0 && (t = this.props.initialWidth), this.props.appendTo)
        return this.props.appendTo.offsetWidth / 2 - t / 2;
      const e = this.getWindow();
      return e ? e.innerWidth / 2 - t / 2 : 0;
    }, this.getInitialWidth = () => {
      let t = W;
      return this.props.width !== void 0 ? t = this.props.width : this.props.initialWidth !== void 0 && (t = this.props.initialWidth), t;
    }, this.getInitialHeight = () => {
      let t = B;
      return this.props.height !== void 0 ? t = this.props.height : this.props.initialHeight !== void 0 && (t = this.props.initialHeight), t;
    }, this.handleMinimize = (t) => {
      t.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height, this.setState({
        stage: a.MINIMIZED,
        height: 0
      }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.MINIMIZED });
    }, this.handleFullscreen = (t) => {
      t.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height;
      const e = this.getWindow(), n = e ? e.innerWidth : 0, l = e ? e.innerHeight : 0;
      this.setState({
        left: 0,
        top: 0,
        width: this.props.appendTo ? this.props.appendTo.offsetWidth : n,
        height: this.props.appendTo ? this.props.appendTo.offsetHeight : l,
        stage: a.FULLSCREEN
      }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.FULLSCREEN });
    }, this.handleRestore = (t) => {
      t.preventDefault(), this.windowStage === a.FULLSCREEN ? this.setState({
        stage: a.DEFAULT,
        left: this.windowCoordinatesState.leftBeforeAction,
        top: this.windowCoordinatesState.topBeforeAction,
        width: this.windowCoordinatesState.widthBeforeAction,
        height: this.windowCoordinatesState.heightBeforeAction
      }) : this.windowStage === a.MINIMIZED && this.setState({
        stage: a.DEFAULT,
        height: this.windowCoordinatesState.heightBeforeAction
      }), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onStageChange, t, this, { state: a.DEFAULT });
    }, this.handleCloseWindow = (t) => {
      t.preventDefault(), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(this.props.onClose, t, this, { state: void 0 });
    }, this.handleDoubleClick = (t) => {
      this.windowStage === a.FULLSCREEN || this.windowStage === a.MINIMIZED ? this.handleRestore(t) : this.handleFullscreen(t);
    }, this.handleResize = (t, e) => {
      const n = this.props.appendTo ? t.pageX - this.offSetCoordinates.x : t.pageX, l = this.props.appendTo ? t.pageY - this.offSetCoordinates.y : t.pageY, d = this.width, h = this.height, g = this.props.minWidth || H, c = this.props.minHeight || _, f = this.top - l, C = this.left - n;
      let E = n - this.left, I = l - this.top;
      const u = Object.assign({}, this.state, { isDragging: !e.end });
      e.direction.indexOf("n") >= 0 && c - (h + f) < 0 && (this.top > 0 && (u.height = h + f), u.top = l), e.direction.indexOf("s") >= 0 && c - I < 0 && (u.height = I), e.direction.indexOf("w") >= 0 && g - (d + C) < 0 && (this.left > 0 && (u.width = d + C), u.left = n), e.direction.indexOf("e") >= 0 && g - E < 0 && (u.width = E), this.setState(u), this.dispatchMoveEvent(this.props.onResize, t, !0, e.end);
    }, this.dispatchMoveEvent = (t, e, n, l) => {
      t && t.call(void 0, {
        nativeEvent: e.nativeEvent ? e.nativeEvent : e.originalEvent,
        drag: n,
        end: l,
        target: this,
        left: this.state.left,
        top: this.state.top,
        width: this.state.width,
        hight: this.state.height,
        height: this.state.height
      });
    }, this.handleBrowserWindowResize = () => {
      if (this.windowStage === a.FULLSCREEN) {
        const t = this.getWindow(), e = t ? t.innerWidth : 0, n = t ? t.innerHeight : 0;
        this.setState({
          width: this.props.appendTo ? this.props.appendTo.offsetWidth : e,
          height: this.props.appendTo ? this.props.appendTo.offsetHeight : n
        });
      }
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : N : this.state.zIndex > (this.context ? this.context + S : 0) ? this.state.zIndex : this.context + S, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, this.getWindow = () => {
      const t = this.getDocument();
      return t && t.defaultView;
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.validatePackage)(y), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.shouldShowValidationUI)(y), this.state = {
      stage: this.props.stage || a.DEFAULT,
      isDragging: !1,
      top: 0,
      left: 0,
      width: W,
      height: B,
      focused: !0,
      zIndex: N
    };
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    const i = this.getWindow();
    i && i.addEventListener("resize", this.handleBrowserWindowResize), this.setState({
      stage: this.props.stage || a.DEFAULT,
      isDragging: !1,
      top: this.getInitialTop(),
      left: this.getInitialLeft(),
      width: this.getInitialWidth(),
      height: this.getInitialHeight(),
      focused: !0,
      zIndex: z(this.getCurrentZIndex(), this.getDocument(), this._id)
    }), this.windowCoordinatesState = {
      leftBeforeAction: this.getInitialLeft(),
      topBeforeAction: this.getInitialTop(),
      widthBeforeAction: this.getInitialWidth(),
      heightBeforeAction: this.getInitialHeight()
    };
    const t = this.getDocument();
    if (this.props.appendTo && t) {
      let e = this.props.appendTo.getBoundingClientRect(), n = t.body.getBoundingClientRect();
      this.offSetCoordinates.x = e.left - n.left, this.offSetCoordinates.y = e.top - n.top;
    }
    this.mounted = !0;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    const i = this.getWindow();
    i && i.removeEventListener("resize", this.handleBrowserWindowResize), this.mounted = !1;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const i = this.getDocument();
    if (this.props.appendTo && i) {
      let t = this.props.appendTo.getBoundingClientRect(), e = i.body.getBoundingClientRect();
      this.offSetCoordinates.x = t.left - e.left, this.offSetCoordinates.y = t.top - e.top;
    }
    this.mounted = !0;
  }
  /**
   * @hidden
   */
  render() {
    const i = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children), t = this.getContent(i), e = this.getActionBar(i), n = this.getCurrentZIndex(), l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.classNames)(
      "k-window",
      this.props.className,
      {
        [`k-window-${this.props.themeColor}`]: this.props.themeColor,
        "k-window-minimized": this.state.stage === "MINIMIZED",
        "k-window-focused": this.state.focused
      }
    ), d = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.ZIndexContext.Provider, { value: n }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.modal && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "k-overlay",
        style: {
          zIndex: n,
          ...this.props.overlayStyle
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        [O]: this._id,
        tabIndex: 0,
        role: "dialog",
        "aria-labelledby": this.titleId,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: (h) => {
          this.windowElement = h, this.element = h;
        },
        className: l,
        style: {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height || "",
          zIndex: n,
          ...this.props.style
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        ut,
        {
          shouldUpdateOnDrag: this.props.shouldUpdateOnDrag || !1,
          isDragging: this.state.isDragging
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.Draggable,
          {
            onPress: this.onPress,
            onDrag: this.onDrag,
            onRelease: this.onRelease,
            ref: (h) => this.draggable = h
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            ct,
            {
              stage: this.windowStage,
              onDoubleClick: this.props.doubleClickStageChange ? this.handleDoubleClick : void 0,
              onMinimizeButtonClick: this.handleMinimize,
              onFullScreenButtonClick: this.handleFullscreen,
              onRestoreButtonClick: this.handleRestore,
              onCloseButtonClick: this.handleCloseWindow,
              closeButton: this.props.closeButton,
              minimizeButton: this.props.minimizeButton,
              maximizeButton: this.props.maximizeButton,
              restoreButton: this.props.restoreButton,
              id: this.titleId
            },
            this.props.title
          )
        ),
        this.windowStage !== a.MINIMIZED ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-window-content" }, t), e) : null,
        this.windowStage === a.DEFAULT && this.props.resizable ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(gt, { onResize: this.handleResize }) : null
      ),
      this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.WatermarkOverlay, null)
    )));
    return _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.canUseDOM ? this.props.appendTo !== null ? react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(d, this.props.appendTo || document.body) : d : null;
  }
  // Getters
  get top() {
    return this.windowStage !== a.FULLSCREEN ? Math.max(this.props.top || this.state.top, 0) : 0;
  }
  get left() {
    return this.windowStage !== a.FULLSCREEN ? Math.max(this.props.left || this.state.left, 0) : 0;
  }
  get width() {
    let i = this.props.width || this.state.width;
    if (this.windowStage === a.FULLSCREEN) {
      if (this.props.appendTo)
        return i = this.props.appendTo.offsetWidth, i;
      const t = this.getWindow();
      i = t ? t.innerWidth : 0;
    }
    return i;
  }
  get height() {
    let i = this.props.height || this.state.height;
    if (this.windowStage === a.FULLSCREEN) {
      if (this.props.appendTo)
        return i = this.props.appendTo.offsetHeight, i;
      const t = this.getWindow();
      i = t ? t.innerHeight : 0;
    } else
      this.windowStage === a.MINIMIZED && (i = 0);
    return i;
  }
  get windowStage() {
    return this.props.stage || this.state.stage;
  }
  getActionBar(i) {
    return i.filter((t) => t && t.type === U);
  }
  getContent(i) {
    return i.filter((t) => t && t.type !== U);
  }
  generateTitleId() {
    return "window-title-" + this._id;
  }
}
k.displayName = "Window";
k.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  initialWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  initialHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  initialLeft: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  initialTop: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  minWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  minHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,
  shouldUpdateOnDrag: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  stage: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["DEFAULT", "MINIMIZED", "FULLSCREEN"]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_2__.object
};
k.defaultProps = {
  minWidth: H,
  minHeight: _,
  resizable: !0,
  draggable: !0,
  modal: !1,
  doubleClickStageChange: !0
};
k.contextType = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.ZIndexContext;
const ft = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.createPropsContext)(), wt = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.withIdHOC)((0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_5__.withPropsContext)(ft, k));
wt.displayName = "KendoReactWindow";



/***/ }

}]);