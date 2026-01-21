"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[2057],{

/***/ 82057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dialog: () => (/* reexport */ R),
  DialogActionsBar: () => (/* reexport */ DialogActionsBar_i),
  DialogPropsContext: () => (/* reexport */ G),
  Window: () => (/* reexport */ Y),
  WindowActionsBar: () => (/* reexport */ WindowActionsBar_i),
  WindowPropsContext: () => (/* reexport */ Window_G)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_01767e4c18f1016dd2ee822e1e7c567a/node_modules/@progress/kendo-react-buttons/index.mjs)
var index_mjs_ = __webpack_require__(14073);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(72111);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/DialogTitleBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const DialogTitleBar_s = ({ children: e, onCloseButtonClick: a, id: i, closeIcon: l }) => /* @__PURE__ */ index_js_.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: i }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-window-title k-dialog-title" }, e), /* @__PURE__ */ index_js_.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, l && /* @__PURE__ */ index_js_.createElement(
  index_mjs_.Button,
  {
    role: "button",
    "aria-label": "Close",
    onClick: a,
    icon: "x",
    svgIcon: index_es_js_.xIcon,
    fillMode: "flat",
    className: "k-window-titlebar-action k-dialog-titlebar-action"
  }
)));


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs)
var kendo_react_common_index_mjs_ = __webpack_require__(29166);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/DialogActionsBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const DialogActionsBar_i = (e) => {
  const s = {
    layout: "stretched",
    ...e
  }, { layout: o, children: a } = s, r = (0,kendo_react_common_index_mjs_.classNames)(
    "k-actions",
    "k-actions-horizontal",
    "k-window-actions k-dialog-actions",
    {
      [`k-actions-${o}`]: o
    }
  );
  return /* @__PURE__ */ index_js_.createElement("div", { className: r }, a);
};
DialogActionsBar_i.propTypes = {
  children: prop_types_index_js_.any,
  layout: prop_types_index_js_.oneOf(["start", "center", "end", "stretched"])
};


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const e = {
  name: "@progress/kendo-react-dialogs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846564,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/constants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const o = "data-windowid", D = 10002, constants_n = 2, constants_t = ".k-window:not(.k-dialog), .k-dialog-wrapper";


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const utils_o = (i, t, n) => {
  let e = i;
  if (t && t.defaultView) {
    let x = t.querySelectorAll(constants_t), l = !1;
    return x.forEach((d) => {
      let a = t.defaultView.getComputedStyle(d, null);
      if (d.getAttribute(o) !== n && a.zIndex !== null) {
        let I = parseInt(a.zIndex, 10);
        I >= e && (e = I, l = !0);
      }
    }), l ? e + constants_n : e;
  }
  return e;
};


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/Dialog.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";









const i = class i extends index_js_.Component {
  constructor(s) {
    super(s), this.context = 0, this.titleId = this.generateTitleId(), this.contentId = this.generateContentId(), this.showLicenseWatermark = !1, this.onCloseDialog = (t) => {
      t.preventDefault(), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onClose, t, this, void 0);
    }, this.onKeyDown = (t) => {
      t.keyCode === kendo_react_common_index_mjs_.Keys.esc && this.props.onClose && (t.preventDefault(), this.onCloseDialog(t)), (0,kendo_react_common_index_mjs_.keepFocusInContainer)(t, this.element);
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : D : this.state.zIndex > (this.context ? this.context + constants_n : 0) ? this.state.zIndex : this.context + constants_n, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, (0,kendo_react_common_index_mjs_.validatePackage)(e), this.showLicenseWatermark = (0,kendo_react_common_index_mjs_.shouldShowValidationUI)(e);
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.element && (this.props.autoFocus && this.element.focus(), this.setState({
      zIndex: utils_o(this.getCurrentZIndex(), this.getDocument(), this._id)
    }));
  }
  /**
   * @hidden
   */
  render() {
    const s = this.props.id !== void 0 ? this.props.id : this.titleId, { title: t, width: m, height: u, children: g, minWidth: I, dir: y, style: f, contentStyle: D } = this.props, r = index_js_.Children.toArray(g), x = this.getContent(r), C = this.getActionBar(r), w = t ? {
      "aria-labelledby": s
    } : null, k = this.props.closeIcon !== void 0 ? this.props.closeIcon : !0, a = this.getCurrentZIndex(), l = /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.ZIndexContext.Provider, { value: a }, /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        [o]: this._id,
        className: "k-dialog-wrapper" + (this.props.className ? " " + this.props.className : ""),
        onKeyDown: this.onKeyDown,
        tabIndex: 0,
        dir: y,
        style: {
          zIndex: a,
          ...f
        },
        ref: (T) => this.element = T
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-overlay" }),
      /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          ...w,
          className: (0,kendo_react_common_index_mjs_.classNames)(
            "k-window k-dialog",
            {
              [`k-window-${this.props.themeColor}`]: this.props.themeColor
            }
          ),
          role: "dialog",
          "aria-labelledby": s,
          "aria-modal": !0,
          "aria-describedby": this.contentId,
          style: { width: m, height: u, minWidth: I }
        },
        this.props.title && /* @__PURE__ */ index_js_.createElement(
          DialogTitleBar_s,
          {
            closeIcon: k,
            onCloseButtonClick: this.onCloseDialog,
            id: s
          },
          t
        ),
        /* @__PURE__ */ index_js_.createElement("div", { className: "k-window-content k-dialog-content", style: D, id: this.contentId }, x),
        C,
        this.showLicenseWatermark && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.WatermarkOverlay, null)
      )
    ));
    return kendo_react_common_index_mjs_.canUseDOM ? this.props.appendTo !== null ? react_dom_index_js_.createPortal(l, this.props.appendTo || document.body) : l : null;
  }
  getActionBar(s) {
    return s.filter((t) => t && t.type === DialogActionsBar_i);
  }
  getContent(s) {
    return s.filter((t) => t && t.type !== DialogActionsBar_i);
  }
  generateTitleId() {
    return "dialog-title-" + this._id;
  }
  generateContentId() {
    return "dialog-content-" + this._id;
  }
};
i.displayName = "Dialog", i.propTypes = {
  title: prop_types_index_js_.any,
  id: prop_types_index_js_.string,
  dir: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  closeIcon: prop_types_index_js_.bool,
  width: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
  height: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
  minWidth: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
  autoFocus: prop_types_index_js_.bool
}, i.defaultProps = {
  autoFocus: !1
}, i.contextType = kendo_react_common_index_mjs_.ZIndexContext;
let n = i;
const G = (0,kendo_react_common_index_mjs_.createPropsContext)(), R = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(G, n));
R.displayName = "KendoReactDialog";


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/StageEnum.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
var I = /* @__PURE__ */ ((E) => (E.DEFAULT = "DEFAULT", E.FULLSCREEN = "FULLSCREEN", E.MINIMIZED = "MINIMIZED", E))(I || {});


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.1.2_@progress+kendo-licensing@1_1b012f1cb4379e2d747b0d582d7a8ac9/node_modules/@progress/kendo-react-intl/index.mjs)
var kendo_react_intl_index_mjs_ = __webpack_require__(39932);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/messages/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const messages_o = "dialogs.windowMaximizeButton", messages_i = "dialogs.windowMinimizeButton", messages_t = "dialogs.windowRestoreButton", messages_n = "dialogs.windowCloseButton", messages_s = {
  [messages_o]: "maximize",
  [messages_i]: "minimize",
  [messages_t]: "restore",
  [messages_n]: "close"
};


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/WindowTitlebar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const v = (t) => {
  const {
    children: o,
    onCloseButtonClick: r,
    onMinimizeButtonClick: m,
    onFullScreenButtonClick: s,
    onRestoreButtonClick: d,
    onDoubleClick: f,
    stage: n,
    forwardedRef: k,
    id: C
  } = t, i = (0,kendo_react_intl_index_mjs_.useLocalization)(), E = t.minimizeButton ? /* @__PURE__ */ index_js_.createElement(t.minimizeButton, { onClick: m, stage: n }) : /* @__PURE__ */ index_js_.createElement(
    index_mjs_.Button,
    {
      fillMode: "flat",
      icon: "window-minimize",
      svgIcon: index_es_js_.windowMinimizeIcon,
      className: "k-window-titlebar-action",
      onClick: m,
      "aria-label": i.toLanguageString(messages_i, messages_s[messages_i])
    }
  ), z = t.maximizeButton ? /* @__PURE__ */ index_js_.createElement(t.maximizeButton, { onClick: s, stage: n }) : /* @__PURE__ */ index_js_.createElement(
    index_mjs_.Button,
    {
      fillMode: "flat",
      icon: "window-maximize",
      svgIcon: index_es_js_.windowIcon,
      className: "k-window-titlebar-action",
      onClick: s,
      "aria-label": i.toLanguageString(messages_o, messages_s[messages_o])
    }
  ), b = t.restoreButton ? /* @__PURE__ */ index_js_.createElement(t.restoreButton, { onClick: d, stage: n }) : /* @__PURE__ */ index_js_.createElement(
    index_mjs_.Button,
    {
      fillMode: "flat",
      icon: "window-restore",
      svgIcon: index_es_js_.windowRestoreIcon,
      className: "k-window-titlebar-action",
      onClick: d,
      "aria-label": i.toLanguageString(messages_t, messages_s[messages_t])
    }
  ), R = t.closeButton ? /* @__PURE__ */ index_js_.createElement(t.closeButton, { onClick: r, stage: n }) : /* @__PURE__ */ index_js_.createElement(
    index_mjs_.Button,
    {
      fillMode: "flat",
      icon: "x",
      svgIcon: index_es_js_.xIcon,
      className: "k-window-titlebar-action",
      onClick: r,
      "aria-label": i.toLanguageString(messages_n, messages_s[messages_n])
    }
  );
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      className: "k-window-titlebar",
      style: { touchAction: "none" },
      ref: k,
      onDoubleClick: f
    },
    /* @__PURE__ */ index_js_.createElement("span", { className: "k-window-title", id: C }, o || ""),
    /* @__PURE__ */ index_js_.createElement("div", { className: "k-window-titlebar-actions" }, n === I.DEFAULT && E, n === I.DEFAULT && z, n !== I.DEFAULT && b, R)
  );
}, F = index_js_.forwardRef((t, o) => /* @__PURE__ */ index_js_.createElement(
  v,
  {
    ...t,
    forwardedRef: o
  }
));


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/WindowResizeHandlers.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const WindowResizeHandlers_o = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
class WindowResizeHandlers_c extends index_js_.Component {
  render() {
    return /* @__PURE__ */ index_js_.createElement("div", { className: "k-resize-handles-wrapper" }, " ", WindowResizeHandlers_o.map((t, r) => /* @__PURE__ */ index_js_.createElement(
      kendo_react_common_index_mjs_.Draggable,
      {
        key: r,
        onDrag: (s) => {
          const { event: e } = s;
          e.originalEvent.preventDefault(), this.props.onResize(e, { end: !1, direction: t });
        },
        onRelease: (s) => {
          const { event: e } = s;
          e.originalEvent.preventDefault(), this.props.onResize(e, { end: !0, direction: t });
        }
      },
      /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          className: "k-resize-handle k-resize-" + t,
          style: { display: "block", touchAction: "none" }
        }
      )
    )));
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/MiddleLayerOptimization.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

class MiddleLayerOptimization_n extends index_js_.Component {
  shouldComponentUpdate(e) {
    return e.shouldUpdateOnDrag || !e.isDragging;
  }
  render() {
    return this.props.children;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/WindowActionsBar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const WindowActionsBar_i = (n) => {
  const s = {
    layout: "end",
    ...n
  }, { layout: t, children: o } = s, r = (0,kendo_react_common_index_mjs_.classNames)(
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
  return /* @__PURE__ */ index_js_.createElement("div", { className: r }, o);
};
WindowActionsBar_i.propTypes = {
  children: prop_types_index_js_.any,
  layout: prop_types_index_js_.oneOf(["start", "center", "end", "stretched"])
};


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/Window.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";












const w = 300, u = 300, m = 120, S = 100, a = 5, c = class c extends index_js_.Component {
  constructor(s) {
    super(s), this.context = 0, this.draggable = null, this.offSetCoordinates = { x: 0, y: 0 }, this.titleId = this.generateTitleId(), this.mounted = !1, this.showLicenseWatermark = !1, this.onKeyDown = (t) => {
      if (t.target !== t.currentTarget)
        return;
      const e = this.props.minWidth || m, n = this.props.minHeight || S;
      if (t.ctrlKey && this.props.resizable) {
        switch (t.keyCode) {
          case kendo_react_common_index_mjs_.Keys.up:
            t.preventDefault(), n <= this.height - a && this.setState({ height: this.height - a });
            break;
          case kendo_react_common_index_mjs_.Keys.down:
            t.preventDefault(), this.setState({ height: this.height + a });
            break;
          case kendo_react_common_index_mjs_.Keys.left:
            e <= this.width - a && this.setState({ width: this.width - a });
            break;
          case kendo_react_common_index_mjs_.Keys.right:
            this.setState({ width: this.width + a });
            break;
          default:
            return;
        }
        this.dispatchMoveEvent(this.props.onResize, t, !1, void 0);
        return;
      }
      if (t.altKey) {
        switch (t.keyCode) {
          case kendo_react_common_index_mjs_.Keys.up:
            this.windowStage === I.MINIMIZED ? (this.handleRestore(t), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.DEFAULT })) : this.windowStage === I.DEFAULT && (this.handleFullscreen(t), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.FULLSCREEN }));
            break;
          case kendo_react_common_index_mjs_.Keys.down:
            this.windowStage === I.FULLSCREEN ? (this.handleRestore(t), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.DEFAULT })) : this.windowStage === I.DEFAULT && (this.handleMinimize(t), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.MINIMIZED }));
            break;
        }
        return;
      }
      if (!t.ctrlKey)
        switch (t.keyCode) {
          case kendo_react_common_index_mjs_.Keys.esc:
            this.props.onClose && this.handleCloseWindow(t);
            return;
          case kendo_react_common_index_mjs_.Keys.up:
            this.setState({ top: this.state.top - a });
            break;
          case kendo_react_common_index_mjs_.Keys.down:
            this.setState({ top: this.state.top + a });
            break;
          case kendo_react_common_index_mjs_.Keys.left:
            this.setState({ left: this.state.left - a });
            break;
          case kendo_react_common_index_mjs_.Keys.right:
            this.setState({ left: this.state.left + a });
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
      e.originalEvent.preventDefault(), this.windowStage !== I.FULLSCREEN && this.props.draggable && (this.setState({
        top: Math.max(e.pageY - this.windowCoordinatesState.differenceTop, 0),
        left: e.pageX - this.windowCoordinatesState.differenceLeft,
        isDragging: !0
      }), this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e, !0, !1));
    }, this.onRelease = (t) => {
      const e = t.event;
      this.windowStage !== I.FULLSCREEN && this.props.draggable && this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e, !0, !0), this.setState({
        isDragging: !1
      });
    }, this.onFocus = () => {
      this._blurTimeout ? (clearTimeout(this._blurTimeout), this._blurTimeout = void 0) : this.setState({
        focused: !0,
        zIndex: utils_o(this.getCurrentZIndex(), this.getDocument(), this._id)
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
      let t = u;
      if (this.props.height !== void 0 ? t = this.props.height : this.props.initialHeight !== void 0 && (t = this.props.initialHeight), this.props.appendTo)
        return this.props.appendTo.offsetHeight / 2 - t / 2;
      const e = this.getWindow();
      return e ? e.innerHeight / 2 - t / 2 : 0;
    }, this.getInitialLeft = () => {
      if (this.props.left !== void 0)
        return this.props.left;
      if (this.props.initialLeft !== void 0)
        return this.props.initialLeft;
      let t = w;
      if (this.props.width !== void 0 ? t = this.props.width : this.props.initialWidth !== void 0 && (t = this.props.initialWidth), this.props.appendTo)
        return this.props.appendTo.offsetWidth / 2 - t / 2;
      const e = this.getWindow();
      return e ? e.innerWidth / 2 - t / 2 : 0;
    }, this.getInitialWidth = () => {
      let t = w;
      return this.props.width !== void 0 ? t = this.props.width : this.props.initialWidth !== void 0 && (t = this.props.initialWidth), t;
    }, this.getInitialHeight = () => {
      let t = u;
      return this.props.height !== void 0 ? t = this.props.height : this.props.initialHeight !== void 0 && (t = this.props.initialHeight), t;
    }, this.handleMinimize = (t) => {
      t.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height, this.setState({
        stage: I.MINIMIZED,
        height: 0
      }), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.MINIMIZED });
    }, this.handleFullscreen = (t) => {
      t.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height;
      const e = this.getWindow(), n = e ? e.innerWidth : 0, d = e ? e.innerHeight : 0;
      this.setState({
        left: 0,
        top: 0,
        width: this.props.appendTo ? this.props.appendTo.offsetWidth : n,
        height: this.props.appendTo ? this.props.appendTo.offsetHeight : d,
        stage: I.FULLSCREEN
      }), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.FULLSCREEN });
    }, this.handleRestore = (t) => {
      t.preventDefault(), this.windowStage === I.FULLSCREEN ? this.setState({
        stage: I.DEFAULT,
        left: this.windowCoordinatesState.leftBeforeAction,
        top: this.windowCoordinatesState.topBeforeAction,
        width: this.windowCoordinatesState.widthBeforeAction,
        height: this.windowCoordinatesState.heightBeforeAction
      }) : this.windowStage === I.MINIMIZED && this.setState({
        stage: I.DEFAULT,
        height: this.windowCoordinatesState.heightBeforeAction
      }), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onStageChange, t, this, { state: I.DEFAULT });
    }, this.handleCloseWindow = (t) => {
      t.preventDefault(), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onClose, t, this, { state: void 0 });
    }, this.handleDoubleClick = (t) => {
      this.windowStage === I.FULLSCREEN || this.windowStage === I.MINIMIZED ? this.handleRestore(t) : this.handleFullscreen(t);
    }, this.handleResize = (t, e) => {
      const n = this.props.appendTo ? t.pageX - this.offSetCoordinates.x : t.pageX, d = this.props.appendTo ? t.pageY - this.offSetCoordinates.y : t.pageY, f = this.width, l = this.height, C = this.props.minWidth || m, D = this.props.minHeight || S, I = this.top - d, T = this.left - n;
      let L = n - this.left, b = d - this.top;
      const g = Object.assign({}, this.state, { isDragging: !e.end });
      e.direction.indexOf("n") >= 0 && D - (l + I) < 0 && (this.top > 0 && (g.height = l + I), g.top = d), e.direction.indexOf("s") >= 0 && D - b < 0 && (g.height = b), e.direction.indexOf("w") >= 0 && C - (f + T) < 0 && (this.left > 0 && (g.width = f + T), g.left = n), e.direction.indexOf("e") >= 0 && C - L < 0 && (g.width = L), this.setState(g), this.dispatchMoveEvent(this.props.onResize, t, !0, e.end);
    }, this.dispatchMoveEvent = (t, e, n, d) => {
      t && t.call(void 0, {
        nativeEvent: e.nativeEvent ? e.nativeEvent : e.originalEvent,
        drag: n,
        end: d,
        target: this,
        left: this.state.left,
        top: this.state.top,
        width: this.state.width,
        hight: this.state.height,
        height: this.state.height
      });
    }, this.handleBrowserWindowResize = () => {
      if (this.windowStage === I.FULLSCREEN) {
        const t = this.getWindow(), e = t ? t.innerWidth : 0, n = t ? t.innerHeight : 0;
        this.setState({
          width: this.props.appendTo ? this.props.appendTo.offsetWidth : e,
          height: this.props.appendTo ? this.props.appendTo.offsetHeight : n
        });
      }
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : D : this.state.zIndex > (this.context ? this.context + constants_n : 0) ? this.state.zIndex : this.context + constants_n, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, this.getWindow = () => {
      const t = this.getDocument();
      return t && t.defaultView;
    }, (0,kendo_react_common_index_mjs_.validatePackage)(e), this.showLicenseWatermark = (0,kendo_react_common_index_mjs_.shouldShowValidationUI)(e), this.state = {
      stage: this.props.stage || I.DEFAULT,
      isDragging: !1,
      top: 0,
      left: 0,
      width: w,
      height: u,
      focused: !0,
      zIndex: D
    };
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    const s = this.getWindow();
    s && s.addEventListener("resize", this.handleBrowserWindowResize), this.setState({
      stage: this.props.stage || I.DEFAULT,
      isDragging: !1,
      top: this.getInitialTop(),
      left: this.getInitialLeft(),
      width: this.getInitialWidth(),
      height: this.getInitialHeight(),
      focused: !0,
      zIndex: utils_o(this.getCurrentZIndex(), this.getDocument(), this._id)
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
    const s = this.getWindow();
    s && s.removeEventListener("resize", this.handleBrowserWindowResize), this.mounted = !1;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const s = this.getDocument();
    if (this.props.appendTo && s) {
      let t = this.props.appendTo.getBoundingClientRect(), e = s.body.getBoundingClientRect();
      this.offSetCoordinates.x = t.left - e.left, this.offSetCoordinates.y = t.top - e.top;
    }
    this.mounted = !0;
  }
  /**
   * @hidden
   */
  render() {
    const s = index_js_.Children.toArray(this.props.children), t = this.getContent(s), e = this.getActionBar(s), n = this.getCurrentZIndex(), d = (0,kendo_react_common_index_mjs_.classNames)(
      "k-window",
      this.props.className,
      {
        [`k-window-${this.props.themeColor}`]: this.props.themeColor,
        "k-window-minimized": this.state.stage === "MINIMIZED",
        "k-window-focused": this.state.focused
      }
    ), f = /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.ZIndexContext.Provider, { value: n }, /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, this.props.modal && /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-overlay",
        style: {
          zIndex: n,
          ...this.props.overlayStyle
        }
      }
    ), /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        [o]: this._id,
        tabIndex: 0,
        role: "dialog",
        "aria-labelledby": this.titleId,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: (l) => {
          this.windowElement = l, this.element = l;
        },
        className: d,
        style: {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height || "",
          zIndex: n,
          ...this.props.style
        }
      },
      /* @__PURE__ */ index_js_.createElement(
        MiddleLayerOptimization_n,
        {
          shouldUpdateOnDrag: this.props.shouldUpdateOnDrag || !1,
          isDragging: this.state.isDragging
        },
        /* @__PURE__ */ index_js_.createElement(
          kendo_react_common_index_mjs_.Draggable,
          {
            onPress: this.onPress,
            onDrag: this.onDrag,
            onRelease: this.onRelease,
            ref: (l) => this.draggable = l
          },
          /* @__PURE__ */ index_js_.createElement(
            F,
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
        this.windowStage !== I.MINIMIZED ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-window-content" }, t), e) : null,
        this.windowStage === I.DEFAULT && this.props.resizable ? /* @__PURE__ */ index_js_.createElement(WindowResizeHandlers_c, { onResize: this.handleResize }) : null
      ),
      this.showLicenseWatermark && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.WatermarkOverlay, null)
    )));
    return kendo_react_common_index_mjs_.canUseDOM ? this.props.appendTo !== null ? react_dom_index_js_.createPortal(f, this.props.appendTo || document.body) : f : null;
  }
  // Getters
  get top() {
    return this.windowStage !== I.FULLSCREEN ? Math.max(this.props.top || this.state.top, 0) : 0;
  }
  get left() {
    return this.windowStage !== I.FULLSCREEN ? Math.max(this.props.left || this.state.left, 0) : 0;
  }
  get width() {
    let s = this.props.width || this.state.width;
    if (this.windowStage === I.FULLSCREEN) {
      if (this.props.appendTo)
        return s = this.props.appendTo.offsetWidth, s;
      const t = this.getWindow();
      s = t ? t.innerWidth : 0;
    }
    return s;
  }
  get height() {
    let s = this.props.height || this.state.height;
    if (this.windowStage === I.FULLSCREEN) {
      if (this.props.appendTo)
        return s = this.props.appendTo.offsetHeight, s;
      const t = this.getWindow();
      s = t ? t.innerHeight : 0;
    } else
      this.windowStage === I.MINIMIZED && (s = 0);
    return s;
  }
  get windowStage() {
    return this.props.stage || this.state.stage;
  }
  getActionBar(s) {
    return s.filter((t) => t && t.type === WindowActionsBar_i);
  }
  getContent(s) {
    return s.filter((t) => t && t.type !== WindowActionsBar_i);
  }
  generateTitleId() {
    return "window-title-" + this._id;
  }
};
c.displayName = "Window", c.propTypes = {
  width: prop_types_index_js_.number,
  height: prop_types_index_js_.number,
  left: prop_types_index_js_.number,
  top: prop_types_index_js_.number,
  initialWidth: prop_types_index_js_.number,
  initialHeight: prop_types_index_js_.number,
  initialLeft: prop_types_index_js_.number,
  initialTop: prop_types_index_js_.number,
  minWidth: prop_types_index_js_.number,
  minHeight: prop_types_index_js_.number,
  resizable: prop_types_index_js_.bool,
  draggable: prop_types_index_js_.bool,
  title: prop_types_index_js_.any,
  shouldUpdateOnDrag: prop_types_index_js_.bool,
  stage: prop_types_index_js_.oneOf(["DEFAULT", "MINIMIZED", "FULLSCREEN"]),
  className: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.object,
  overlayStyle: prop_types_index_js_.object
}, c.defaultProps = {
  minWidth: m,
  minHeight: S,
  resizable: !0,
  draggable: !0,
  modal: !1,
  doubleClickStageChange: !0
}, c.contextType = kendo_react_common_index_mjs_.ZIndexContext;
let E = c;
const Window_G = (0,kendo_react_common_index_mjs_.createPropsContext)(), Y = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(Window_G, E));
Y.displayName = "KendoReactWindow";


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_58e2dfc48fb3ca8260fa519ae48361de/node_modules/@progress/kendo-react-dialogs/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";







/***/ })

}]);