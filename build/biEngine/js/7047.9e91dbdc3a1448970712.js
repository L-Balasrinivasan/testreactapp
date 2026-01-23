"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7047,9428],{

/***/ 67047
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ D),
/* harmony export */   FloatingLabel: () => (/* binding */ v),
/* harmony export */   Hint: () => (/* binding */ T),
/* harmony export */   Label: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52132);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";




const c = "labels.optional", O = {
  [c]: "(Optional)"
}, N = {
  name: "@progress/kendo-react-labels",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613337,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, x = (l) => {
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(N);
  const { id: t, editorId: s, editorRef: a, editorDisabled: d, children: r, editorValid: g, style: y, className: p, optional: E } = l, m = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_3__.useLocalization)(), b = E ? m.toLanguageString(c, O[c]) : "", C = b && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-label-optional" }, b), u = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (f) => {
      if (a && a.current && !d) {
        a.current.focus && (f.preventDefault(), a.current.focus());
        const i = a.current.actionElement;
        i && (f.preventDefault(), i.click());
      }
    },
    [a]
  ), h = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    {
      "k-label": !0,
      "k-label-empty": !r,
      "k-text-error": g === !1,
      "k-text-disabled": d === !0
    },
    p
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "label",
    {
      id: t,
      htmlFor: s,
      onClick: u,
      style: y,
      className: h
    },
    r,
    C
  );
};
x.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorId: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorRef: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({ current: prop_types__WEBPACK_IMPORTED_MODULE_1__.any })
  ]),
  editorValid: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  editorDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optional: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
x.displayName = "KendoReactLabel";
const D = (l) => {
  const t = {
    direction: "start",
    ...l
  };
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(N);
  const s = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    {
      "k-form-error": !0,
      "k-text-start": t.direction === "start",
      "k-text-end": t.direction === "end"
    },
    t.className
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      id: t.id,
      role: "alert",
      style: t.style,
      className: s
    },
    t.children
  );
};
D.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "end"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.node
  ]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
D.displayName = "KendoReactError";
const T = (l) => {
  const t = {
    direction: "start",
    ...l
  };
  (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(N);
  const s = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
    {
      "k-form-hint": !0,
      "k-text-start": t.direction === "start",
      "k-text-end": t.direction === "end",
      "k-text-disabled": t.editorDisabled === !0
    },
    t.className
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      id: t.id,
      style: t.style,
      className: s
    },
    t.children
  );
};
T.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["start", "end"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.node
  ]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
T.displayName = "KendoReactHint";
class v extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this.state = {
      focused: !1
    }, this.handleFocus = (s) => {
      this.setState({ focused: !0 });
    }, this.handleBlur = (s) => {
      this.setState({ focused: !1 });
    }, (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(N);
  }
  /**
   * @hidden
   */
  render() {
    const { label: t, editorId: s, className: a, labelClassName: d, editorValue: r, editorPlaceholder: g, editorValid: y, editorDisabled: p, style: E, id: m, optional: b } = this.props, C = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_3__.provideLocalizationService)(this), u = b ? C.toLanguageString(c, O[c]) : "", h = u && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-label-optional" }, u), f = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      {
        "k-floating-label-container": !0,
        "k-focus": this.state.focused,
        "k-empty": !g && !r && r !== 0,
        "k-text-disabled": p,
        "k-rtl": this.props.dir === "rtl"
      },
      a
    ), i = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      {
        "k-label": !0,
        "k-text-error": y === !1,
        "k-text-disabled": p
      },
      d
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        id: this.props.id,
        className: f,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        style: E,
        dir: this.props.dir
      },
      this.props.children,
      t ? s ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { id: m, htmlFor: s, className: i }, t, h) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: m, className: i }, t, h) : null
    );
  }
}
v.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorId: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
  editorPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editorValid: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  editorDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  optional: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_3__.registerForLocalization)(v);



/***/ }

}]);