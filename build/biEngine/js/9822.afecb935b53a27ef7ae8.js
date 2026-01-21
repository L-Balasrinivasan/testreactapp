"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7441,9822],{

/***/ 97441:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Popup: () => (/* reexport */ n),
  PopupPropsContext: () => (/* reexport */ c),
  PopupWithoutContext: () => (/* reexport */ T)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/animation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const f = (s) => {
  s.style.transitionDuration = "", Array.from(s.classList).forEach((i) => {
    i.startsWith("k-slide-") && s.classList.remove(i);
  });
}, w = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent), animation_v = (s, i, n, r, o) => {
  if (n === 0)
    return o();
  const a = "k-slide-" + i + "-" + r, u = a + "-active", e = (l) => {
    l.target === s && (s.removeEventListener("transitionend", e), f(s), r === "exit" ? s.style.display = "none" : s.style.display = "", o());
  };
  s.addEventListener("transitionend", e);
  const d = s.ownerDocument;
  if (!d)
    return;
  const t = d.defaultView;
  if (!t)
    return;
  const c = () => {
    f(s), s.classList.add(a), t.requestAnimationFrame(() => {
      s.style.transitionDuration = n + "ms", s.classList.add(u);
    });
  };
  w ? t.requestAnimationFrame(c) : c();
};


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(29166);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/main.js + 27 modules
var main = __webpack_require__(12954);
;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/util.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const d = 16.666666666666668, g = function(u, s, t = {}) {
  let e, n, l, r, i = 0;
  t = t || {};
  const c = function() {
    i = t.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), e = void 0, r = u.apply(n, l), e || (n = l = null);
  };
  return function() {
    const o = (/* @__PURE__ */ new Date()).getTime();
    !i && t.leading === !1 && (i = o);
    const a = s - (o - i);
    return n = void 0, l = arguments, a <= 0 || a > s ? (e && (clearTimeout(e), e = void 0), i = o, r = u.apply(n, l), e || (n = l = null)) : !e && t.trailing !== !1 && (e = window.setTimeout(c, a)), r;
  };
};


;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const e = {
  name: "@progress/kendo-react-popup",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846483,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};


;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/PopupWithoutContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";








const U = 100, H = 1;
function PopupWithoutContext_g(O, i) {
  if (O === i)
    return !0;
  if (!!O != !!i)
    return !1;
  const t = Object.getOwnPropertyNames(O), s = Object.getOwnPropertyNames(i);
  if (t.length !== s.length)
    return !1;
  for (let p = 0; p < t.length; p++) {
    let o = t[p];
    if (O[o] !== i[o])
      return !1;
  }
  return !0;
}
const S = {
  left: -1e3,
  top: 0
}, j = "k-animation-container", b = "k-animation-container-shown", k = "k-child-animation-container", F = "k-popup", v = class v extends index_js_.Component {
  constructor(i) {
    super(i), this.context = 0, this.state = { current: "hidden", previous: "hidden", props: {} }, this._popup = null, this.show = (t) => {
      this.setPosition(t), this.animate(t.firstChild, "enter", this.onOpened), this.setState({ current: "shown", previous: this.state.current });
    }, this.setPosition = (t) => {
      let { anchorAlign: s, popupAlign: p, collision: o, offset: a, anchor: l, margin: h, scale: d, positionMode: u } = this.props;
      const { width: f, height: m } = t.style;
      t.style.width = t.offsetWidth + "px", t.style.height = t.offsetHeight + "px";
      const y = (0,main/* alignElement */.Op)({
        anchor: l,
        anchorAlign: s,
        element: t,
        elementAlign: p,
        offset: a,
        margin: h,
        positionMode: u,
        scale: d
      }), r = (0,main/* positionElement */.m$)({
        anchor: l,
        anchorAlign: s,
        element: t,
        elementAlign: p,
        collisions: o,
        currentLocation: y,
        margin: this.props.margin
      });
      if (t.style.top = r.offset.top + "px", t.style.left = r.offset.left + "px", t.style.width = f, t.style.height = m, this._collisions = {
        fit: r.fit,
        fitted: r.fitted,
        flip: r.flip,
        flipped: r.flipped
      }, this.props.onPosition) {
        const A = {
          target: this,
          flipped: r.flipped,
          fitted: r.fitted
        };
        this.props.onPosition.call(void 0, A);
      }
    }, this.onOpened = () => {
      const t = this._popup;
      t && (this.props.show && t.classList.add(b), this.attachRepositionHandlers(t), this.props.onOpen && this.props.onOpen.call(void 0, { target: this }));
    }, this.animate = (t, s, p) => {
      if (!this.props.popupAlign)
        return;
      let o;
      const { horizontal: a, vertical: l } = this.props.popupAlign;
      a === "left" && l === "center" ? o = "right" : a === "right" && l === "center" ? o = "left" : l === "top" ? o = "down" : o = "up";
      const h = {
        down: "up",
        up: "down",
        left: "right",
        right: "left"
      };
      this._collisions && this._collisions.flipped && (o = h[o]), animation_v(
        t,
        o,
        this.animationDuration[s],
        s,
        p
      );
    }, this.onClosing = (t) => {
      this.props.show || t.classList.remove(b), this.detachRepositionHandlers();
    }, this.onClosed = () => {
      this.state.current === "hiding" && this.state.previous === "shown" && this.setState({ current: "hidden", previous: this.state.current }), this.props.onClose && this.props.onClose.call(void 0, { target: this });
    }, this.getCurrentZIndex = () => this.context ? this.context + H : U, (0,index_mjs_.validatePackage)(e), this.reposition = g(this.reposition.bind(this), d);
  }
  /**
   * Represents the Popup DOM element.
   */
  get element() {
    return this._popup;
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(i, t) {
    const { show: s, anchor: p, anchorAlign: o, appendTo: a, collision: l, popupAlign: h, className: d, popupClass: u, style: f, offset: m, contentKey: y } = i, r = {
      ...t,
      props: {
        show: s,
        anchor: p,
        anchorAlign: o,
        appendTo: a,
        collision: l,
        popupAlign: h,
        className: d,
        popupClass: u,
        style: f,
        offset: m,
        contentKey: y
      }
    };
    return i.show ? t.current === "hidden" || t.current === "hiding" ? { ...r, current: "showing", previous: t.current } : t.current === "showing" ? { ...r, current: "shown", previous: t.current } : t.current === "shown" && (!PopupWithoutContext_g(m, t.props.offset) || !PopupWithoutContext_g(o, t.props.anchorAlign) || !PopupWithoutContext_g(a, t.props.appendTo) || !PopupWithoutContext_g(l, t.props.collision) || !PopupWithoutContext_g(h, t.props.popupAlign) || !PopupWithoutContext_g(f, t.props.style) || p !== t.props.anchor || u !== t.props.popupClass || d !== t.props.className) ? { ...r, current: "reposition", previous: t.current } : r : t.current === "hiding" || t.current === "hidden" ? { ...r, current: "hidden", previous: t.current } : { ...r, current: "hiding", previous: t.current };
  }
  /**
   *
   * @hidden
   */
  componentDidUpdate(i) {
    this.state.current === "showing" && this._popup ? this.show(this._popup) : this.state.current === "hiding" && this._popup ? (this.onClosing(this._popup), this.animate(this._popup.firstChild, "exit", this.onClosed)) : this.state.current === "reposition" && this.state.previous === "shown" ? setTimeout(() => {
      this.setState({ current: "shown", previous: this.state.current });
    }, 0) : this.state.current === "shown" && i.contentKey !== this.props.contentKey && this._popup && this.setPosition(this._popup);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.state.current === "showing" && this._popup && this.show(this._popup);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.detachRepositionHandlers();
  }
  /**
   * @hidden
   */
  render() {
    const {
      children: i,
      className: t,
      popupClass: s,
      show: p,
      id: o,
      positionMode: a
    } = this.props, l = this.props.appendTo ? this.props.appendTo : index_mjs_.canUseDOM ? this.props.anchor && this.props.anchor.ownerDocument ? this.props.anchor.ownerDocument.body : document.body : void 0;
    this.state.current === "reposition" && this.state.previous === "shown" && this._popup && this.setPosition(this._popup);
    const h = Object.assign(
      {},
      { position: a, top: 0, left: -1e4 },
      this.props.style || {}
    ), d = this.state.current === "hiding";
    if ((p || d) && l) {
      const u = this.getCurrentZIndex(), f = /* @__PURE__ */ index_js_.createElement(index_mjs_.ZIndexContext.Provider, { value: u }, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          className: (0,index_mjs_.classNames)(j, t),
          id: o,
          ref: (m) => this._popup = m,
          style: {
            zIndex: u,
            ...h
          }
        },
        /* @__PURE__ */ index_js_.createElement("div", { className: (0,index_mjs_.classNames)(k), style: { transitionDelay: "0ms" } }, /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            role: this.props.role,
            className: (0,index_mjs_.classNames)(F, s)
          },
          i
        ))
      ));
      return this.props.appendTo !== null ? react_dom_index_js_.createPortal(f, l) : f;
    }
    return null;
  }
  get animationDuration() {
    const i = this.props.animate;
    let t = 0, s = 0;
    return i && (i === !0 ? t = s = 300 : (t = i.openDuration || 0, s = i.closeDuration || 0)), { enter: t, exit: s };
  }
  attachRepositionHandlers(i) {
    this.detachRepositionHandlers(), this._scrollableParents = main/* domUtils */.Si.scrollableParents(this.props.anchor || i), this._scrollableParents && this._scrollableParents.map((t) => t.addEventListener("scroll", this.reposition)), window.addEventListener("resize", this.reposition);
  }
  detachRepositionHandlers() {
    this._scrollableParents && (this._scrollableParents.map((i) => i.removeEventListener("scroll", this.reposition)), this._scrollableParents = void 0), window.removeEventListener("resize", this.reposition);
  }
  reposition() {
    this.setState({ current: "reposition", previous: this.state.current });
  }
};
v.propTypes = {
  anchor: function(i) {
    const t = i.anchor;
    return t && typeof t.nodeType != "number" ? new Error(
      "Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed."
    ) : null;
  },
  appendTo: function(i) {
    const t = i.appendTo;
    return t && typeof t.nodeType != "number" ? new Error(
      "Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed."
    ) : null;
  },
  className: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.arrayOf(prop_types_index_js_.string),
    prop_types_index_js_.object
  ]),
  id: prop_types_index_js_.string,
  popupClass: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.arrayOf(prop_types_index_js_.string),
    prop_types_index_js_.object
  ]),
  collision: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.oneOf([
      main/* Collision */.F1.fit,
      main/* Collision */.F1.flip,
      main/* Collision */.F1.none
    ]),
    vertical: prop_types_index_js_.oneOf([
      main/* Collision */.F1.fit,
      main/* Collision */.F1.flip,
      main/* Collision */.F1.none
    ])
  }),
  anchorAlign: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.oneOf([
      main/* AlignPoint */.aW.left,
      main/* AlignPoint */.aW.center,
      main/* AlignPoint */.aW.right
    ]),
    vertical: prop_types_index_js_.oneOf([
      main/* AlignPoint */.aW.top,
      main/* AlignPoint */.aW.center,
      main/* AlignPoint */.aW.bottom
    ])
  }),
  popupAlign: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.oneOf([
      main/* AlignPoint */.aW.left,
      main/* AlignPoint */.aW.center,
      main/* AlignPoint */.aW.right
    ]),
    vertical: prop_types_index_js_.oneOf([
      main/* AlignPoint */.aW.top,
      main/* AlignPoint */.aW.center,
      main/* AlignPoint */.aW.bottom
    ])
  }),
  offset: prop_types_index_js_.shape({
    left: prop_types_index_js_.number,
    top: prop_types_index_js_.number
  }),
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.element,
    prop_types_index_js_.node
  ]),
  show: prop_types_index_js_.bool,
  animate: prop_types_index_js_.oneOfType([
    prop_types_index_js_.bool,
    prop_types_index_js_.shape({
      openDuration: prop_types_index_js_.number,
      closeDuration: prop_types_index_js_.number
    })
  ]),
  margin: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.number,
    vertical: prop_types_index_js_.number
  }),
  positionMode: prop_types_index_js_.oneOf([
    "fixed",
    "absolute"
  ]),
  scale: prop_types_index_js_.number,
  style: prop_types_index_js_.object,
  onClose: prop_types_index_js_.func,
  onPosition: prop_types_index_js_.func,
  onOpen: prop_types_index_js_.func
}, v.defaultProps = {
  collision: {
    horizontal: main/* Collision */.F1.fit,
    vertical: main/* Collision */.F1.flip
  },
  anchorAlign: {
    horizontal: main/* AlignPoint */.aW.left,
    vertical: main/* AlignPoint */.aW.bottom
  },
  popupAlign: {
    horizontal: main/* AlignPoint */.aW.left,
    vertical: main/* AlignPoint */.aW.top
  },
  offset: S,
  animate: !0,
  show: !1,
  margin: {
    horizontal: 0,
    vertical: 0
  },
  positionMode: "absolute"
}, v.contextType = index_mjs_.ZIndexContext, v.displayName = "PopupComponent";
let T = v;


;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/Popup.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const c = index_js_.createContext((t) => t), n = index_js_.forwardRef((t, e) => {
  const p = index_js_.useContext(c).call(void 0, t);
  return /* @__PURE__ */ index_js_.createElement(
    T,
    {
      ref: e,
      ...p
    }
  );
});
n.displayName = "Popup";


;// ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/index.mjs
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