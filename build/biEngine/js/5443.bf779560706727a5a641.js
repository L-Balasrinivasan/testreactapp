"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5443,7824],{

/***/ 15443
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ w),
/* harmony export */   PopoverActionsBar: () => (/* binding */ d),
/* harmony export */   Tooltip: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14129);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31212);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";





const p = 10, u = 10, ot = (o, t, e, i, r) => {
  switch (r) {
    case "bottom":
      return i === "pointer" ? o - t / 2 : e.left - t / 2 + e.width / 2;
    case "left":
      return i === "pointer" ? o - t - p : e.left - t - p;
    case "right":
      return i === "pointer" ? o + p : e.right + p;
    case "top":
      return i === "pointer" ? o - t / 2 : e.left - t / 2 + e.width / 2;
    default:
      return i === "pointer" ? o < window.screen.availWidth / 2 ? o - p : o - t + p : o < window.screen.availWidth / 2 ? e.left : e.right - t;
  }
}, nt = (o, t, e, i, r) => {
  switch (r) {
    case "bottom":
      return i === "pointer" ? o + u : t.bottom + u;
    case "left":
      return i === "pointer" ? o - e / 2 : t.top - e / 2 + t.height / 2;
    case "right":
      return i === "pointer" ? o - e / 2 : t.top - e / 2 + t.height / 2;
    case "top":
      return i === "pointer" ? o - e - u : t.top - e - u;
    default:
      return i === "pointer" ? o < window.innerHeight / 2 ? o + p : o - e - p : o < window.innerHeight / 2 ? t.bottom + u : t.top - e - u;
  }
}, it = (o) => o !== null ? o.getBoundingClientRect() : document.body.getBoundingClientRect(), st = [
  "k-tooltip-content",
  "k-animation-container",
  "k-tooltip",
  "k-tooltip-title",
  "k-tooltip k-tooltip-closable",
  "k-icon k-i-close"
], N = (o) => {
  if (o === null)
    return !1;
  let t = o;
  for (; t; ) {
    if (t !== null && t.classList && t.classList.contains("k-tooltip"))
      return !0;
    t.parentNode !== null ? t = t.parentNode : t = !1;
  }
  return st.filter((e) => e === o.className).length > 0;
}, R = {
  name: "@progress/kendo-react-tooltip",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613852,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, rt = 100, A = class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(o) {
    super(o), this.context = 0, this.state = {
      targetElement: null,
      open: !1,
      title: ""
    }, this.top = 0, this.left = 0, this.willOpen = !1, this.handleMouseOut = (t) => {
      const { targetElement: e } = this.state, i = e ? e.ownerDocument : document;
      let r = i && i.elementFromPoint(t.clientX, t.clientY);
      N(r) || this.props.open || (clearInterval(this.updateIntervalId), this.willOpen = !1, this.onClose(t));
    }, this.handleMouseOver = (t) => {
      const e = t.target;
      !this.isVisible(e) || N(e) || e === this.state.targetElement || this.showToolTip(t);
    }, this.handleBodyMousemove = (t) => {
      this.top = t.clientY, this.left = t.clientX;
    }, this.onClose = (t) => {
      (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(this.props.onClose, t, this, void 0), this.setState({ targetElement: null, open: !1, title: "" });
    }, this.setUpdateInterval = () => {
      this.props.updateInterval && (this.updateIntervalId = setInterval(
        this.onIntervalUpdate,
        this.props.updateInterval
      ));
    }, this.onIntervalUpdate = () => {
      const t = this.state.targetElement;
      t && (t.parentElement === null ? this.onClose({ target: t }) : this.showToolTip({ target: t }));
    }, this.position = (t) => {
      let e = it(this.state.targetElement);
      const i = ot(
        this.left,
        t.offsetWidth,
        e,
        this.props.anchorElement,
        this.props.position
      ), r = nt(
        this.top,
        e,
        t.offsetHeight,
        this.props.anchorElement,
        this.props.position
      );
      return { left: i, top: r };
    }, this.getTitle = (t) => {
      for (; t; ) {
        if (t.getAttribute("title") !== null || t.titleExpando)
          return { title: t.getAttribute("title") || t.titleExpando, element: t };
        t = this.props.parentTitle && t.parentElement || null;
      }
      return { title: "", element: t };
    }, this.calloutClassName = () => {
      switch (this.props.position) {
        case "bottom":
          return "k-callout k-callout-n";
        case "left":
          return "k-callout k-callout-e";
        case "right":
          return "k-callout k-callout-w";
        case "top":
          return "k-callout k-callout-s";
        default:
          return this.top < window.innerHeight / 2 ? "k-callout k-callout-n" : "k-callout k-callout-s";
      }
    }, this.getCurrentZIndex = () => this.context ? this.context : rt, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.validatePackage)(R);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    document && document.body.addEventListener("mousemove", this.handleBodyMousemove);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.openTimeoutId), clearInterval(this.updateIntervalId), document && document.body.removeEventListener("mousemove", this.handleBodyMousemove);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.props.open && this.props.targetElement && this.showToolTip({ target: this.props.targetElement });
  }
  /**
   * @hidden
   */
  render() {
    if (this.props.children) {
      const { children: e, ...i } = this.props;
      let r = null;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          onMouseOver: (a) => {
            r && r.handleMouseOver(a);
          },
          onMouseOut: (a) => {
            r && r.handleMouseOut(a);
          }
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(A, { ref: (a) => r = a, ...i }),
        e
      );
    }
    if (this.props.open === !1)
      return null;
    const { targetElement: o } = this.state, t = this.getCurrentZIndex();
    return o && this.state.title && o.ownerDocument && react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ref: (e) => {
            if (!e)
              return;
            let i;
            if (this.props.onPosition) {
              const r = {
                element: e,
                targetElement: this.state.targetElement,
                mouseTop: this.top,
                mouseLeft: this.left,
                anchorElement: this.props.anchorElement,
                position: this.props.position,
                target: this,
                syntheticEvent: null,
                nativeEvent: null
              };
              i = this.props.onPosition.call(void 0, r);
            } else
              i = this.position(e);
            e.style.left = i.left + "px", e.style.top = i.top + "px";
          },
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.classNames)(
            "k-animation-container",
            "k-animation-container-fixed",
            "k-animation-container-shown",
            this.props.className
          ),
          style: {
            zIndex: t,
            ...this.props.style
          },
          tabIndex: 0
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-child-animation-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            id: this.props.id,
            role: "tooltip",
            className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.classNames)(
              "k-tooltip",
              this.props.tooltipClassName
            ),
            style: { position: "relative", ...this.props.tooltipStyle }
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-tooltip-content" }, this.props.content && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.content, { title: this.state.title, target: this.state.targetElement }) || this.state.title),
          this.props.showCallout && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "div",
            {
              ref: (e) => {
                e && (e.className = this.calloutClassName(), this.props.position === "auto" && (this.left < window.screen.availWidth / 2 ? e.style.left = this.props.setCalloutOnPositionAuto || "25%" : e.style.left = this.props.setCalloutOnPositionAuto || "75%"));
              }
            }
          )
        ))
      ),
      this.props.appendTo ? this.props.appendTo : o.ownerDocument.body
    );
  }
  showToolTip(o) {
    clearTimeout(this.openTimeoutId), clearInterval(this.updateIntervalId), o.target.hasChildNodes() && o.target.childNodes.forEach((i) => {
      i.nodeName === "title" && (o.target.titleExpando = i.innerHTML, i.remove());
    });
    const t = this.props.targetElement || o.target;
    let e = this.getTitle(t);
    if (!e.title) {
      this.state.open && this.onClose(o);
      return;
    }
    e.element && (e.element.titleExpando = e.title, e.element.title = ""), this.willOpen = !0, this.props.openDelay ? this.openTimeoutId = window.setTimeout(
      () => {
        this.willOpen && this.setState({ targetElement: t, open: !0, title: e.title }, this.setUpdateInterval);
      },
      this.props.openDelay
    ) : this.setState({ targetElement: t, open: !0, title: e.title }, this.setUpdateInterval), this.state.title !== e.title && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(this.props.onOpen, o, this, void 0);
  }
  isVisible(o) {
    return !this.props.filter || this.props.filter(o);
  }
};
let T = A;
T.propTypes = {
  anchorElement: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["pointer", "target"]),
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  openDelay: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["right", "left", "top", "bottom", "auto"]),
  updateInterval: prop_types__WEBPACK_IMPORTED_MODULE_2__.number
};
T.defaultProps = {
  anchorElement: "pointer",
  openDelay: 400,
  position: "auto",
  showCallout: !0,
  parentTitle: !1
};
T.contextType = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.ZIndexContext;
const d = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((o, t) => {
  const e = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null), i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(i, () => ({ props: o, element: e.current })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => i.current), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      ref: e,
      className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.classNames)(
        "k-popover-actions",
        "k-actions",
        {
          [`k-actions-${o.alignment}`]: o.alignment,
          [`k-actions-${o.orientation}`]: o.orientation
        }
      )
    },
    o.children
  );
}), lt = {
  alignment: "stretched",
  orientation: "horizontal"
};
d.propTypes = {
  alignment: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["start", "center", "end", "stretched"]),
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["horizontal", "vertical"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_2__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_2__.node
  ])
};
d.defaultProps = lt;
d.displayName = "KendoReactPopoverActionsBar";
const at = 12e3, pt = 2e3, x = 15, ct = {
  top: "k-callout-s",
  left: "k-callout-e",
  bottom: "k-callout-n",
  right: "k-callout-w"
}, ut = {
  top: "k-callout-n",
  left: "k-callout-w",
  bottom: "k-callout-s",
  right: "k-callout-e"
}, ht = {
  top: { vertical: "bottom", horizontal: "center" },
  left: { vertical: "center", horizontal: "right" },
  bottom: { vertical: "top", horizontal: "center" },
  right: { vertical: "center", horizontal: "left" }
}, dt = {
  top: { vertical: "top", horizontal: "center" },
  left: { vertical: "center", horizontal: "left" },
  bottom: { vertical: "bottom", horizontal: "center" },
  right: { vertical: "center", horizontal: "right" }
}, ft = (o) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(o).filter((t) => t && t.type === d), mt = (o) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(o).filter((t) => t && t.type !== d), w = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((o, t) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.validatePackage)(R);
  const {
    callout: e,
    position: i,
    title: r,
    children: a,
    show: M,
    anchor: z,
    appendTo: L,
    offset: U,
    animate: B,
    positionMode: S,
    scale: Z,
    popoverClass: c,
    className: _,
    id: F,
    style: K,
    collision: V,
    contentStyle: b,
    onPosition: v,
    onClose: g,
    onOpen: y
  } = o, [j, E] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1), I = i === "top" || i === "bottom", X = o.margin || {
    vertical: e && I ? x : 0,
    horizontal: e && !I ? x : 0
  }, H = ht[i], $ = dt[i], O = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.ZIndexContext), Y = O ? O + pt : at, h = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(h, () => ({ props: o })), react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(t, () => h.current);
  const q = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (l) => {
      if (setTimeout(() => E(l.flipped)), v) {
        const W = { target: h.current, flipped: l.flipped, fitted: l.fitted };
        v.call(void 0, W);
      }
    },
    [v, E]
  ), G = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      if (y) {
        const l = { target: h.current };
        y.call(void 0, l);
      }
    },
    [y]
  ), J = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    () => {
      if (g) {
        const l = { target: h.current };
        g.call(void 0, l);
      }
    },
    [g]
  ), f = { "k-popover": !0 };
  Array.isArray(c) ? c.forEach((l) => f[l] = !0) : typeof c == "object" ? Object.keys(c).forEach((l) => {
    f[l] = c[l];
  }) : c && (f[c] = !0);
  const Q = j ? ut[i] : ct[i], C = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, r && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-popover-header" }, r), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-popover-body", style: b }, mt(a)), ft(a)),
    [a, b, r]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.ZIndexContext.Provider, { value: Y }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_4__.Popup,
    {
      id: F,
      role: "tooltip",
      animate: B,
      collision: V,
      anchor: z,
      offset: U,
      margin: X,
      popupAlign: H,
      anchorAlign: $,
      appendTo: L,
      show: M,
      scale: Z,
      positionMode: S,
      style: K,
      className: _,
      popupClass: f,
      onOpen: G,
      onClose: J,
      onPosition: q
    },
    e && i ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_3__.classNames)("k-popover-callout", Q) }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-popover-inner" }, C)) : C
  ));
}), vt = {
  callout: !0,
  position: "top",
  collision: {
    horizontal: "none",
    vertical: "none"
  }
};
w.propTypes = {
  callout: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf(["top", "left", "bottom", "right"]),
  show: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  animate: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
    prop_types__WEBPACK_IMPORTED_MODULE_2__.shape({
      openDuration: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
      closeDuration: prop_types__WEBPACK_IMPORTED_MODULE_2__.number
    })
  ]),
  anchor: function(o) {
    const t = o.anchor;
    return t && typeof t.nodeType != "number" ? new Error(
      "Invalid prop `anchor` supplied to `Kendo React Popover`. Validation failed."
    ) : null;
  },
  appendTo: function(o) {
    const t = o.appendTo;
    return t && typeof t.nodeType != "number" ? new Error(
      "Invalid prop `appendTo` supplied to `Kendo React Popover`. Validation failed."
    ) : null;
  },
  positionMode: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOf([
    "fixed",
    "absolute"
  ]),
  scale: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2__.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_2__.number,
    top: prop_types__WEBPACK_IMPORTED_MODULE_2__.number
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_2__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_2__.node
  ]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.string),
    prop_types__WEBPACK_IMPORTED_MODULE_2__.object
  ]),
  id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  popoverClass: prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.string),
    prop_types__WEBPACK_IMPORTED_MODULE_2__.object
  ]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  onPosition: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};
w.defaultProps = vt;
w.displayName = "KendoReactPopover";



/***/ }

}]);