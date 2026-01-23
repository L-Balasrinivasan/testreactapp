"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5555,7936],{

/***/ 7936
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: () => (/* binding */ d),
/* harmony export */   ListViewFooter: () => (/* binding */ h),
/* harmony export */   ListViewHeader: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15748);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";


const n = {
  name: "@progress/kendo-react-listview",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613850,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};
class d extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(l) {
    super(l), this.onScroll = (s) => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.dispatchEvent)(this.props.onScroll, s, this, void 0), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.validatePackage)(n);
  }
  /**
   * @hidden
   */
  render() {
    const { data: l = [], item: s } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.classNames)("k-listview k-d-flex", this.props.className),
        style: this.props.style
      },
      this.props.header ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.header, null) : null,
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "list", className: "k-listview-content", onScroll: this.onScroll }, s && l.map((o, a) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, { dataItem: o, index: a, key: a }))),
      this.props.footer ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.footer, null) : null
    );
  }
}
const p = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.classNames)("k-listview-header", e.className), style: e.style }, e.children), h = (e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_1__.classNames)("k-listview-footer", e.className), style: e.style }, e.children);



/***/ }

}]);