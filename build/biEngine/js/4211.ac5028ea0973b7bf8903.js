"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[4211,6592],{

/***/ 4211
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ l),
/* harmony export */   NotificationGroup: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13209);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";




const k = {
  name: "@progress/kendo-react-notification",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613831,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, N = "Close", h = {
  success: "check-outline",
  error: "x-outline",
  info: "info-circle",
  warning: "exclamation-circle"
}, E = {
  success: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.checkOutlineIcon,
  error: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.xOutlineIcon,
  info: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.infoCircleIcon,
  warning: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.exclamationCircleIcon
}, i = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(n) {
    super(n), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(k);
  }
  /**
   * @hidden
   */
  render() {
    const {
      onClose: n,
      className: c,
      closable: o = i.defaultProps.closable,
      type: s = i.defaultProps.type
    } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        dir: this.props.dir,
        className: "k-notification" + (c ? ` ${c}` : "") + (s.style === "none" ? "" : ` k-notification-${s.style}`) + (o ? " k-notification-closable" : ""),
        style: this.props.style
      },
      s.icon && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
        {
          className: "k-notification-status",
          name: h[s.style],
          icon: E[s.style]
        }
      ),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-notification-content" }, this.props.children),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-notification-actions" }, o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "span",
        {
          className: "k-notification-action k-notification-close-action",
          title: N,
          onClick: (a) => {
            n && n.call(void 0, {
              target: this,
              syntheticEvent: a,
              nativeEvent: a.nativeEvent
            });
          },
          ...typeof o != "boolean" ? o : {}
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "x", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_3__.xIcon })
      ))
    );
  }
};
let l = i;
l.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  closable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.bool, prop_types__WEBPACK_IMPORTED_MODULE_1__.object]),
  dir: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["none", "success", "error", "warning", "info"]),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
  }),
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
l.defaultProps = {
  closable: !1,
  type: {
    style: "none",
    icon: !0
  }
};
class g extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    const { style: c = {}, className: o } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "k-notification-group" + (o ? ` ${o}` : ""),
        style: {
          alignItems: "center",
          flexWrap: "wrap",
          ...c
        }
      },
      this.props.children
    );
  }
}
g.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object
};



/***/ }

}]);