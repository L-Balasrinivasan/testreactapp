"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[1952],{

/***/ 11952
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GRID_COL_INDEX_ATTRIBUTE: () => (/* binding */ se),
/* harmony export */   GRID_PREVENT_SELECTION_ELEMENT: () => (/* binding */ ti),
/* harmony export */   GRID_ROW_INDEX_ATTRIBUTE: () => (/* binding */ hr),
/* harmony export */   Grid: () => (/* binding */ Wr),
/* harmony export */   GridCell: () => (/* binding */ Rr),
/* harmony export */   GridClassComponent: () => (/* binding */ he),
/* harmony export */   GridColumn: () => (/* binding */ ce),
/* harmony export */   GridColumnMenuCheckboxFilter: () => (/* binding */ us),
/* harmony export */   GridColumnMenuColumnsList: () => (/* binding */ _r),
/* harmony export */   GridColumnMenuFilter: () => (/* binding */ ps),
/* harmony export */   GridColumnMenuFilterCell: () => (/* binding */ wt),
/* harmony export */   GridColumnMenuFilterUI: () => (/* binding */ Lr),
/* harmony export */   GridColumnMenuGroup: () => (/* binding */ os),
/* harmony export */   GridColumnMenuItem: () => (/* binding */ ae),
/* harmony export */   GridColumnMenuItemContent: () => (/* binding */ ds),
/* harmony export */   GridColumnMenuItemGroup: () => (/* binding */ ve),
/* harmony export */   GridColumnMenuSort: () => (/* binding */ Je),
/* harmony export */   GridColumnMenuWrapper: () => (/* binding */ $t),
/* harmony export */   GridCommonDragLogic: () => (/* binding */ wr),
/* harmony export */   GridDetailRow: () => (/* binding */ ri),
/* harmony export */   GridEditCell: () => (/* binding */ dr),
/* harmony export */   GridFilterCell: () => (/* binding */ es),
/* harmony export */   GridGroupCell: () => (/* binding */ It),
/* harmony export */   GridHeaderCell: () => (/* binding */ gr),
/* harmony export */   GridHierarchyCell: () => (/* binding */ cr),
/* harmony export */   GridNoRecords: () => (/* binding */ Ye),
/* harmony export */   GridRow: () => (/* binding */ Fr),
/* harmony export */   GridSelectionCell: () => (/* binding */ ar),
/* harmony export */   GridToolbar: () => (/* binding */ Pr),
/* harmony export */   StatusBar: () => (/* binding */ Ar),
/* harmony export */   booleanFilterValues: () => (/* binding */ Xt),
/* harmony export */   cellBoolDropdownChange: () => (/* binding */ Qt),
/* harmony export */   cellInputChange: () => (/* binding */ Yt),
/* harmony export */   cellOperatorChange: () => (/* binding */ Zt),
/* harmony export */   filterGroupByField: () => (/* binding */ fe),
/* harmony export */   getSelectedState: () => (/* reexport safe */ _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getSelectedState),
/* harmony export */   getSelectedStateFromKeyDown: () => (/* reexport safe */ _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getSelectedStateFromKeyDown),
/* harmony export */   getStatusData: () => (/* binding */ ii),
/* harmony export */   gridMessages: () => (/* binding */ k),
/* harmony export */   leafColumns: () => (/* binding */ Br),
/* harmony export */   operators: () => (/* binding */ kt),
/* harmony export */   pagerFirstPage: () => (/* binding */ Qs),
/* harmony export */   pagerInfo: () => (/* binding */ Js),
/* harmony export */   pagerItemPerPage: () => (/* binding */ sr),
/* harmony export */   pagerLastPage: () => (/* binding */ tr),
/* harmony export */   pagerNextPage: () => (/* binding */ er),
/* harmony export */   pagerPreviousPage: () => (/* binding */ Zs),
/* harmony export */   rootFilterOrDefault: () => (/* binding */ Ke),
/* harmony export */   setSelectedState: () => (/* reexport safe */ _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.setSelectedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51347);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72721);
/* harmony import */ var _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15748);
/* harmony import */ var _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19999);
/* harmony import */ var _progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52132);
/* harmony import */ var _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13209);
/* harmony import */ var _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27002);
/* harmony import */ var _progress_kendo_react_dateinputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81651);
/* harmony import */ var _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31212);
/* harmony import */ var _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14800);
/* harmony import */ var _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40916);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80753);
/* harmony import */ var _progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91911);
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";














const ce = (i) => null;
ce.displayName = "KendoReactGridColumn";
ce.defaultProps = {
  filterable: !0,
  editable: !0,
  sortable: !0,
  resizable: !0,
  reorderable: !0,
  groupable: !0
};
ce.propTypes = {
  field: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  sortable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      allowUnsort: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool.isRequired
    })
  ]),
  cell: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  filterCell: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  filterTitle: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["text", "numeric", "boolean", "date"]),
  editor: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["text", "numeric", "boolean", "date"]),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
  minResizableWidth: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  headerCell: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  footerCell: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  headerSelectionValue: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  headerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  reorderable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  orderIndex: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  groupable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  columnMenu: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  locked: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
};
function M(i, t) {
  const s = (i || "").split(".");
  let o = t;
  return s.forEach((e) => {
    o = o ? o[e] : void 0;
  }), o;
}
function Ot(i, t, s, o, e, r, l = 0) {
  let a = l;
  for (let c = 0; c < t.length; c++) {
    if (!e || t[c].value === void 0 || t[c].items === void 0) {
      i[i.length] = {
        dataIndex: o.index,
        dataItem: t[c],
        rowType: "data",
        level: l,
        expanded: r === void 0 || M(r, t[c])
      }, o.index++;
      continue;
    }
    a = Math.max(a, l + 1);
    const h = r === void 0 || M(r, t[c]) === void 0 || M(r, t[c]);
    i[i.length] = {
      dataIndex: -1,
      dataItem: t[c],
      level: l,
      rowType: "groupHeader",
      expanded: h
    }, h && (a = Math.max(
      Ot(i, t[c].items, s, o, e, r, l + 1),
      a
    )), (s === "always" || h && s === "visible") && (i[i.length] = {
      dataIndex: -1,
      dataItem: t[c],
      rowType: "groupFooter",
      level: l,
      expanded: h
    });
  }
  return a;
}
function _t(i, t, s, o = 0) {
  let e = [];
  if (!i)
    return [];
  i && i.length === void 0 && (i = [i]), i.forEach((l, a) => {
    l = l.props ? l.props : l;
    const c = t[a] || null, h = _t(l.children, c && c.children || [], s, o + 1);
    e.push(
      Object.assign(
        { depth: o },
        ce.defaultProps,
        h.length ? { cell: () => null, filterCell: () => null } : {},
        c ? { width: c.width, orderIndex: c.orderIndex } : {},
        l,
        {
          id: l.id ? l.id : _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${s.prevId++}`, s.idPrefix, "column"),
          declarationIndex: e.length,
          children: h,
          rowSpan: 0,
          colSpan: 0,
          isAccessible: !0,
          left: c && Math.floor(c.left),
          right: c && Math.floor(c.right)
        }
      )
    );
  });
  const r = (l, a) => l.orderIndex === a.orderIndex ? l.declarationIndex - a.declarationIndex : (l.orderIndex || 0) - (a.orderIndex || 0);
  if (e.sort(r), o === 0) {
    let l = [];
    const a = (c, h) => c.forEach((d) => {
      d.parentIndex = h, a(d.children, l.push(d) - 1);
    });
    return a(e, -1), l;
  }
  return e;
}
function js(i, t, s, o) {
  let e = [];
  Array.isArray(i) ? e = i : i && (e = i.data);
  const r = [];
  if (e.length > 0) {
    let l = e[0];
    if (t)
      for (let c = 0; c < t.length; c++)
        l = l.items && l.items[0];
    Object.getOwnPropertyNames(l).forEach((c) => {
      c !== s && r.push(Object.assign(
        {
          id: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${o.prevId++}`, o.idPrefix, "column"),
          declarationIndex: -1,
          parentIndex: -1,
          depth: 0,
          colSpan: 0,
          rowSpan: 0,
          index: 0,
          left: 0,
          right: 0,
          rightBorder: !1,
          children: [],
          ariaColumnIndex: 0,
          isAccessible: !0
        },
        ce.defaultProps,
        { field: c }
      ));
    });
  }
  return r;
}
const Xs = (i, t) => {
  let s = i[t.parentIndex];
  for (; s; ) {
    if (s.footerCell)
      return !0;
    s = i[s.parentIndex];
  }
  return !1;
}, Ys = (i) => i.filter((t) => Xs(i, t) ? !1 : !!t.footerCell || !(t.children && t.children.length > 0)), Re = (i) => i.width !== void 0 ? Math.floor(parseFloat(i.width.toString())) + "px" : void 0, Pt = (i) => (i.sort((t, s) => t.declarationIndex - s.declarationIndex), i.map((t) => {
  const {
    declarationIndex: s,
    parentIndex: o,
    depth: e,
    colSpan: r,
    rowSpan: l,
    index: a,
    kFirst: c,
    children: h,
    ...d
  } = t;
  return h.length ? {
    children: Pt(h),
    ...d
  } : d;
})), De = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent), vt = 17895697, xe = (i, t) => {
  if (!(!i && !t))
    return t ? i ? {
      ...i,
      ...t,
      select: {
        ...i.select || {},
        ...t.select || {}
      },
      hierarchy: {
        ...i.hierarchy || {},
        ...t.hierarchy || {}
      },
      group: {
        ...i.group || {},
        ...t.group || {}
      },
      edit: {
        ...i.edit || {},
        ...t.edit || {}
      }
    } : t : i;
}, Te = "grid.noRecords", Js = "grid.pagerInfo", Qs = "grid.pagerFirstPage", Zs = "grid.pagerPreviousPage", er = "grid.pagerNextPage", tr = "grid.pagerLastPage", sr = "grid.pagerItemsPerPage", rr = "grid.pagerPage", ir = "grid.pagerPageSizeAriaLabel", or = "grid.pagerOf", nr = "grid.pagerTotalPages", Me = "grid.groupPanelEmpty", At = "grid.groupColumn", Bt = "grid.ungroupColumn", Ge = "grid.columnMenu", U = "grid.filterClearButton", oe = "grid.filterSubmitButton", ne = "grid.filterTitle", He = "grid.sortAscending", ze = "grid.sortDescending", Le = "grid.searchPlaceholder", Oe = "grid.filterCheckAll", _e = "grid.filterChooseOperator", Pe = "grid.filterSelectedItems", Ae = "grid.sortAriaLabel", Be = "grid.filterAriaLabel", We = "grid.groupPanelAriaLabel", Wt = "grid.groupExpand", Vt = "grid.groupCollapse", Kt = "grid.detailExpand", Ut = "grid.detailCollapse", le = "grid.selectRow", k = {
  [Kt]: "Expand detail row",
  [Ut]: "Collapse detail row",
  [Wt]: "Expand group",
  [Vt]: "Collapse Group",
  [Te]: "No records available",
  [Me]: "Drag a column header and drop it here to group by that column",
  [U]: "Clear",
  [oe]: "Filter",
  [ne]: "Filter",
  [He]: "Sort Ascending",
  [ze]: "Sort Descending",
  [Ae]: "Sortable",
  [At]: "Group Column",
  [Bt]: "Ungroup Column",
  [Ge]: "Column menu",
  [sr]: "items per page",
  [Js]: "{0} - {1} of {2} items",
  [Qs]: "Go to the first page",
  [Zs]: "Go to the previous page",
  [er]: "Go to the next page",
  [tr]: "Go to the last page",
  [rr]: "Page",
  [ir]: "Page size",
  [or]: "of",
  [nr]: "{0}",
  [Le]: "Search",
  [Oe]: "Check All",
  [_e]: "Choose Operator",
  [Pe]: "selected items",
  [Be]: "Filter",
  [We]: "Group panel",
  [le]: "Select Row",
  "grid.filterEqOperator": "Is equal to",
  "grid.filterNotEqOperator": "Is not equal to",
  "grid.filterIsNullOperator": "Is null",
  "grid.filterIsNotNullOperator": "Is not null",
  "grid.filterIsEmptyOperator": "Is empty",
  "grid.filterIsNotEmptyOperator": "Is not empty",
  "grid.filterStartsWithOperator": "Starts with",
  "grid.filterContainsOperator": "Contains",
  "grid.filterNotContainsOperator": "Does not contain",
  "grid.filterEndsWithOperator": "Ends with",
  "grid.filterGteOperator": "Is greater than or equal to",
  "grid.filterGtOperator": "Is greater than",
  "grid.filterLteOperator": "Is less than or equal to",
  "grid.filterLtOperator": "Is less than",
  "grid.filterIsTrue": "Is true",
  "grid.filterIsFalse": "Is false",
  "grid.filterBooleanAll": "(All)",
  "grid.filterAfterOrEqualOperator": "Is after or equal to",
  "grid.filterAfterOperator": "Is after",
  "grid.filterBeforeOperator": "Is before",
  "grid.filterBeforeOrEqualOperator": "Is before or equal to",
  "grid.filterAndLogic": "And",
  "grid.filterOrLogic": "Or"
};
function lr(i) {
  const t = i.replace(/^pager\.([a-z])/, (s, o) => "grid.pager" + o.toUpperCase());
  return { messageKey: t, defaultMessage: k[t] };
}
const ar = (i) => {
  const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.useLocalization)(), s = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (f) => {
      i.selectionChange && i.selectionChange({ syntheticEvent: f });
    },
    [i.selectionChange]
  ), o = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), e = M(i.field, i.dataItem), r = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id), l = {
    colSpan: i.colSpan,
    style: i.style,
    className: i.className,
    "aria-colindex": i.ariaColumnIndex,
    role: "gridcell",
    ...r
  }, a = typeof e == "boolean" && e, c = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 1, className: "k-checkbox-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "input",
    {
      id: o,
      type: "checkbox",
      className: "k-checkbox k-checkbox-md k-rounded-md",
      "aria-label": t.toLanguageString(le, k[le]),
      "aria-checked": a,
      checked: a,
      onChange: s
    }
  )), h = i.rowType !== "groupHeader" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "td",
    {
      ...l
    },
    c
  ) : null, d = i.rowType || "data", u = i.cells;
  if (u && u.select && u.select[d]) {
    const f = u.select[d];
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(f, { ...i, tdProps: l }, c);
  }
  return i.render ? i.render.call(void 0, h, i) : h;
}, cr = (i) => {
  let t = null, s = null, o = null;
  const e = M(i.field, i.dataItem), r = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id), l = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.useLocalization)(), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (d) => {
      d.isDefaultPrevented() || d.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter && i.onChange && (d.preventDefault(), i.onChange({
        dataItem: i.dataItem,
        dataIndex: i.dataIndex,
        syntheticEvent: d,
        field: i.field,
        value: !e
      }));
    },
    [i.dataItem, i.dataIndex, i.field, i.onChange, e]
  );
  if (i.rowType === "groupFooter")
    s = {
      className: "k-table-td k-hierarchy-cell",
      role: "gridcell",
      ...r
    }, t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "td",
      {
        ...s
      }
    );
  else if (i.rowType !== "groupHeader") {
    const d = e ? Ut : Kt, u = l.toLanguageString(d, k[d]);
    s = {
      className: "k-table-td k-hierarchy-cell",
      onKeyDown: a,
      "aria-expanded": !!e,
      role: "gridcell",
      "aria-colindex": i.ariaColumnIndex,
      ...r
    }, o = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "a",
      {
        onClick: (f) => {
          f.preventDefault(), i.onChange && i.onChange({
            dataItem: i.dataItem,
            dataIndex: i.dataIndex,
            syntheticEvent: f,
            field: i.field,
            value: !e
          });
        },
        "aria-label": u,
        href: "#",
        tabIndex: -1
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: e ? "minus" : "plus", icon: e ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.minusIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.plusIcon })
    ), t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "td",
      {
        ...s
      },
      o
    );
  }
  const c = i.rowType || "data", h = i.cells;
  if (h && h.hierarchy && h.hierarchy[c]) {
    const d = h.hierarchy[c];
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(d, { ...i, tdProps: s }, o);
  }
  return i.render ? i.render.call(void 0, t, i) : t;
}, hr = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TABLE_ROW_INDEX_ATTRIBUTE, se = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TABLE_COL_INDEX_ATTRIBUTE, ti = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TABLE_PREVENT_SELECTION_ELEMENT, dr = (i) => {
  const t = M(i.field, i.dataItem);
  let s = null;
  const o = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-table-td", "k-grid-edit-cell", {
    ["k-selected"]: i.isSelected
  }, i.className), e = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.useId)(), r = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id);
  let l = null, a = null;
  const c = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (g) => {
      if (i.onChange) {
        const b = g.target.type === "checkbox" ? g.target.checked : g.target.value;
        i.onChange({
          dataItem: i.dataItem,
          dataIndex: i.dataIndex,
          field: i.field,
          syntheticEvent: g,
          value: b
        });
      }
    },
    [i.onChange, i.dataItem, i.dataIndex, i.field]
  ), h = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((g) => {
    i.onContextMenu && i.onContextMenu.call(void 0, g, i.dataItem, i.field);
  }, [i.onContextMenu, i.dataItem, i.field]), d = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (g) => {
      i.onChange && i.onChange({
        dataItem: i.dataItem,
        dataIndex: i.dataIndex,
        field: i.field,
        syntheticEvent: g.syntheticEvent,
        value: g.value
      });
    },
    [i.onChange, i.dataItem, i.dataIndex, i.field]
  );
  switch (i.editor) {
    case "numeric": {
      l = {
        onContextMenu: h,
        colSpan: i.colSpan,
        style: i.style,
        className: o,
        ["aria-colindex"]: i.ariaColumnIndex,
        ["aria-selected"]: i.isSelected,
        [se]: i.columnIndex,
        role: "gridcell",
        ...r
      }, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.NumericTextBox,
        {
          width: "100%",
          value: t === void 0 ? null : t,
          onChange: d
        }
      ), s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "td",
        {
          ...l
        },
        a
      );
      break;
    }
    case "date":
      l = {
        onContextMenu: h,
        colSpan: i.colSpan,
        style: i.style,
        className: o,
        ["aria-colindex"]: i.ariaColumnIndex,
        ["aria-selected"]: i.isSelected,
        [se]: i.columnIndex,
        role: "gridcell",
        ...r
      }, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_dateinputs__WEBPACK_IMPORTED_MODULE_7__.DatePicker,
        {
          width: "100%",
          value: t,
          onChange: d
        }
      ), s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "td",
        {
          ...l
        },
        a
      );
      break;
    case "boolean":
      l = {
        onContextMenu: h,
        colSpan: i.colSpan,
        style: i.style,
        className: o,
        ["aria-colindex"]: i.ariaColumnIndex,
        ["aria-selected"]: i.isSelected,
        [se]: i.columnIndex,
        role: "gridcell",
        ...r
      }, a = [
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 1, className: "k-checkbox-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "input",
          {
            checked: t || !1,
            id: e,
            type: "checkbox",
            className: "k-checkbox k-checkbox-md k-rounded-md",
            onChange: c
          }
        )),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "k-checkbox-label", htmlFor: e, key: 2 })
      ], s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "td",
        {
          ...l
        },
        a
      );
      break;
    default:
      l = {
        onContextMenu: h,
        colSpan: i.colSpan,
        style: i.style,
        className: o,
        ["aria-colindex"]: i.ariaColumnIndex,
        ["aria-selected"]: i.isSelected,
        [se]: i.columnIndex,
        role: "gridcell",
        ...r
      }, a = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "input",
        {
          style: { width: "100%" },
          className: "k-input",
          value: t || "",
          onChange: c
        }
      ), s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "td",
        {
          ...l
        },
        a
      );
  }
  const u = i.editor || "text", f = i.cells;
  if (f && f.edit && f.edit[u]) {
    const g = f.edit[u];
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(g, { ...i, tdProps: l }, a);
  }
  return i.render ? i.render.call(void 0, s, i) : s;
};
class pr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.headerWrap = null, this.table = null, this.syncScroll = !1, this.scrollbarWidth = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getScrollbarWidth)(), this.onScroll = (t) => {
      if (this.syncScroll) {
        this.syncScroll = !1;
        return;
      }
      if (!this.headerWrap)
        return;
      const s = this.headerWrap.scrollLeft, o = this.props.scrollableDataElement();
      o && o.scrollLeft !== s && (o.scrollLeft = s);
    };
  }
  get element() {
    return this.props.elemRef.current;
  }
  componentDidMount() {
    const t = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.isRtl)(this.element);
    this.props.columnResize && this.props.columnResize.setIsRtl(t), this.forceUpdate();
  }
  /**
   *
   * @param scrollLeft - Scrolls to the left (in pixels).
   */
  setScrollLeft(t) {
    this.headerWrap && this.headerWrap.scrollLeft !== t && (this.syncScroll = !0, this.headerWrap.scrollLeft = t);
  }
  /**
   *
   * @param width - Scrolls the width (in pixels).
   */
  setWidth(t) {
    this.table && (this.table.style.width = t + "px");
  }
  render() {
    return this.props.staticHeaders ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: this.props.elemRef,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-grid-header",
          { "k-grid-draggable-header": this.props.draggable }
        ),
        role: "presentation"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ref: (t) => {
            this.headerWrap = t;
          },
          className: "k-grid-header-wrap",
          style: this.scrollbarWidth ? {} : { borderWidth: 0 },
          onScroll: this.onScroll,
          role: "presentation"
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "table",
          {
            ref: (t) => {
              this.table = t;
            },
            className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
              "k-table k-grid-header-table",
              {
                "k-table-md": !this.props.size,
                [`k-table-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
              },
              this.props.className
            ),
            role: "presentation"
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("colgroup", { ref: (t) => {
            this.props.columnResize.colGroupHeader = t;
          } }, this.props.cols),
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { className: "k-table-thead", role: "rowgroup", ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationHeaderAttributes }, this.props.headerRow, this.props.filterRow)
        )
      )
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "thead",
      {
        role: "presentation",
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-table-thead",
          { "k-grid-draggable-header": this.props.draggable }
        ),
        ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationHeaderAttributes
      },
      this.props.headerRow,
      this.props.filterRow
    );
  }
}
const qt = (...i) => Object.assign({ allowUnsort: !0, mode: "single" }, ...i);
class ur extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments), this.draggable = null, this.onPress = (t) => {
      const s = this.draggable && this.draggable.element;
      s && this.props.pressHandler && this.props.pressHandler(t.event, s);
    }, this.onDrag = (t) => {
      const s = this.draggable && this.draggable.element;
      s && this.props.dragHandler && this.props.dragHandler(t.event, s);
    }, this.onRelease = (t) => {
      this.draggable && this.draggable.element && this.props.releaseHandler && this.props.releaseHandler(t.event);
    };
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable,
      {
        onPress: this.onPress,
        onDrag: this.onDrag,
        onRelease: this.onRelease,
        hint: this.props.dragClue,
        autoScroll: { boundaryElementRef: this.props.headerRef, direction: { horizontal: !0, vertical: !1 } },
        scrollContainer: this.props.containerRef || void 0,
        ref: (t) => {
          this.draggable = t;
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: "k-table-row", style: { touchAction: "none" }, role: "row", "aria-rowindex": this.props.ariaRowIndex }, this.props.children)
    );
  }
}
class $t extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.state = {
      show: !1
    }, this._anchor = null, this._content = null, this.blurTimeout = void 0, this.willBlur = !1, this.blur = () => {
      if (this.willBlur) {
        this.willBlur = !1;
        return;
      }
      clearTimeout(this.blurTimeout), this.blurTimeout = window.setTimeout(() => {
        this.closeMenu();
      });
    }, this.focus = () => {
      clearTimeout(this.blurTimeout);
    }, this.anchorClick = (t) => {
      t.preventDefault(), this.state.show && this.props.onCloseMenu && this.props.onCloseMenu(), this.setState(
        {
          show: !this.state.show
        },
        () => this.state.show && this._content && this._content.focus()
      );
    }, this.closeMenu = () => {
      this.props.onCloseMenu && this.props.onCloseMenu(), this.setState({ show: !1 });
    }, this.onAnchorMouseDown = (t) => {
      this.willBlur = this.state.show && t.currentTarget === this._anchor;
    }, this.onAnchorKeyDown = (t) => {
      var s;
      if (t.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.tab) {
        const o = t.target, e = o && ((s = o.closest(".k-grid")) == null ? void 0 : s.getElementsByClassName("k-grid-content")[0]);
        e && e.scrollWidth > e.clientWidth && o.scrollIntoView({ inline: "center" });
      }
    };
  }
  render() {
    const { columnMenu: t, ...s } = this.props, { column: o } = this.props, e = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), r = o.title || o.field, l = r ? `${r} ` : "";
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "a",
      {
        className: "k-grid-header-menu k-grid-column-menu",
        ref: (a) => this._anchor = a,
        onClick: this.anchorClick,
        onMouseDown: this.onAnchorMouseDown,
        onKeyDown: this.onAnchorKeyDown,
        href: "#",
        "aria-label": `${l}${e.toLanguageString(Ge, k[Ge])}`
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "filter", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.filterIcon })
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_popup__WEBPACK_IMPORTED_MODULE_8__.Popup,
      {
        anchor: this._anchor,
        show: this.state.show,
        popupClass: "k-column-menu k-column-menu-popup k-grid-columnmenu-popup"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ref: (a) => this._content = a,
          tabIndex: 0,
          onBlur: this.blur,
          onFocus: this.focus,
          style: { outline: "none" }
        },
        t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          t,
          {
            ...s,
            onCloseMenu: this.closeMenu
          }
        )
      )
    ));
  }
}
class gr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    const { columnMenuWrapperProps: t } = this.props, s = this.props.onClick ? {
      onClick: this.props.onClick
    } : {}, o = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-cell-inner" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "span",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-link",
          {
            "!k-cursor-default": !this.props.columnMenuWrapperProps.sortable
          }
        ),
        ...s
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-column-title" }, this.props.title || this.props.field || " "),
      this.props.children
    ), t.columnMenu && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($t, { ...t }));
    return this.props.render ? this.props.render.call(void 0, o, this.props) : o;
  }
}
const fr = {
  true: { asc: "desc", desc: "", "": "asc" },
  false: { asc: "desc", desc: "asc", "": "asc" }
}, mr = {
  none: "none",
  asc: "ascending",
  desc: "descending"
};
class jt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this.serviceIndex = 0, this.index = -1, this.cellKeyDown = (s, o) => {
      s.isDefaultPrevented() || s.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter && this.cellClick(s, o);
    }, this.cells = (s) => s.map((o) => {
      const e = this.props.columns[o], r = this.props.sortable && e.sortable, l = this.props.sort ? this.props.sort.findIndex((v) => v.field === e.field) : -1, a = l >= 0 && this.props.sort[l].dir || "none", c = e.columnMenu === null ? null : e.columnMenu || this.props.columnMenu, h = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)({
        "k-first": e.kFirst,
        "k-filterable": !!c,
        "k-table-th": !0,
        "k-header": !0,
        "k-grid-header-sticky": e.locked,
        "k-sorted": this.props.sort && this.props.sort.some((v) => v.field === e.field)
      }, e.headerClassName), d = e.left !== void 0 ? this.props.isRtl ? { left: e.right, right: e.left } : { left: e.left, right: e.right } : {}, u = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this).toLanguageString(Ae, k[Ae]);
      let f = e.isAccessible ? {
        ariaSort: mr[a],
        role: "columnheader",
        ariaColumnIndex: e.ariaColumnIndex,
        ariaSelected: !1,
        ariaDescription: r ? u : ""
      } : {
        role: "presentation"
      };
      const g = e.declarationIndex >= 0 ? ++this.index : --this.serviceIndex, b = e.headerCell ? e.headerCell : gr, E = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        b,
        {
          key: 1,
          field: e.field,
          onClick: r && ((v) => this.cellClick(v, e)) || void 0,
          selectionChange: this.props.selectionChange,
          title: e.title,
          selectionValue: e.headerSelectionValue,
          render: this.props.cellRender,
          children: this.sortIcon(l),
          columnMenuWrapperProps: {
            column: {
              field: e.field,
              title: e.title,
              locked: e.locked,
              filter: e.filter,
              id: e.id
            },
            sortable: r && this.props.sortable,
            sort: this.props.sort,
            onSortChange: this.props.sortChange,
            filter: this.props.filter,
            filterable: this.props.filterable && e.filterable,
            filterOperators: this.props.filterOperators,
            onFilterChange: this.props.filterChange,
            group: this.props.group,
            groupable: this.props.groupable,
            onGroupChange: this.props.groupChange,
            columnMenu: c
          }
        }
      ), C = {
        ...f,
        key: g,
        colSpan: e.colSpan,
        rowSpan: e.rowSpan,
        className: h,
        style: d,
        columnId: e.id,
        navigatable: e.navigatable,
        onKeyDown: r && ((v) => this.cellKeyDown(v, e)) || void 0,
        role: "columnheader"
      }, x = [
        E,
        this.props.columnResize && this.props.columnResize.resizable && e.resizable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.ColumnResizer,
          {
            key: 2,
            resize: (v, _, T) => this.props.columnResize && this.props.columnResize.dragHandler(v, e, _, T),
            autofit: (v) => this.props.columnResize && this.props.columnResize.dblClickHandler(v, [e.id])
          }
        )
      ], S = xe(this.props.cells, e.cells);
      if (S && S.headerCell) {
        const v = S.headerCell;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(v, { key: g, thProps: C, index: o }, x);
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.HeaderThElement,
        {
          ...C,
          key: g
        },
        x
      );
    }), this.cellClick = this.cellClick.bind(this);
  }
  cellClick(t, s) {
    if (t.preventDefault(), !this.props.sortChange)
      return;
    const { allowUnsort: o, mode: e } = qt(this.props.sortable || !1, s.sortable || !1), r = (this.props.sort || []).filter((c) => c.field === s.field)[0], l = fr[o][r && r.dir || ""], a = e === "single" ? [] : (this.props.sort || []).filter((c) => c.field !== s.field);
    l !== "" && s.field && a.push({ field: s.field, dir: l }), this.props.sortChange(a, t);
  }
  sortIcon(t) {
    return this.props.sort ? t >= 0 && [
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 1, className: "k-sort-icon" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
        {
          name: "sort-" + this.props.sort[t].dir + "-small",
          icon: this.props.sort[t].dir === "asc" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortAscSmallIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortDescSmallIcon
        }
      )),
      this.props.sort.length > 1 && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 2, className: "k-sort-icon" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-sort-order" }, t + 1))
    ] : null;
  }
  render() {
    return this.serviceIndex = 0, this.index = -1, this.props.columnsMap.map((t, s) => this.props.pressHandler && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ur,
      {
        key: s,
        pressHandler: this.props.pressHandler,
        dragHandler: this.props.dragHandler,
        releaseHandler: this.props.releaseHandler,
        ariaRowIndex: s + 1,
        dragClue: this.props.dragClue,
        headerRef: this.props.headerRef,
        containerRef: this.props.containerRef
      },
      this.cells(t)
    ) || /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: s, className: "k-table-row", role: "row", "aria-rowindex": s + 1 }, this.cells(t)));
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(jt);
const Cr = [
  { text: "grid.filterAndLogic", operator: "and" },
  { text: "grid.filterOrLogic", operator: "or" }
], kt = {
  text: [
    { text: "grid.filterContainsOperator", operator: "contains" },
    { text: "grid.filterNotContainsOperator", operator: "doesnotcontain" },
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterStartsWithOperator", operator: "startswith" },
    { text: "grid.filterEndsWithOperator", operator: "endswith" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" },
    { text: "grid.filterIsEmptyOperator", operator: "isempty" },
    { text: "grid.filterIsNotEmptyOperator", operator: "isnotempty" }
  ],
  numeric: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterGteOperator", operator: "gte" },
    { text: "grid.filterGtOperator", operator: "gt" },
    { text: "grid.filterLteOperator", operator: "lte" },
    { text: "grid.filterLtOperator", operator: "lt" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  date: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterAfterOrEqualOperator", operator: "gte" },
    { text: "grid.filterAfterOperator", operator: "gt" },
    { text: "grid.filterBeforeOperator", operator: "lt" },
    { text: "grid.filterBeforeOrEqualOperator", operator: "lte" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  boolean: [
    { text: "grid.filterEqOperator", operator: "eq" }
  ]
}, L = (i) => i === "isnull" || i === "isnotnull" || i === "isempty" || i === "isnotempty", re = (i, t) => i.map((s) => ({
  text: t.toLanguageString(s.text, k[s.text]),
  operator: s.operator
})), br = "eq", Xt = [
  { text: "grid.filterBooleanAll", operator: "" },
  { text: "grid.filterIsTrue", operator: !0 },
  { text: "grid.filterIsFalse", operator: !1 }
], xr = {
  text: !1,
  numeric: !1,
  date: !1,
  boolean: !0
}, Yt = (i, t, s) => {
  const o = Jt(s.operators);
  let e = s.operator;
  switch (s.filterType) {
    case "numeric":
      (!e || L(e)) && (e = o), i === null && e === o && (e = "");
      break;
    case "date":
      (!e || L(e)) && (e = o), i === null && e === o && (e = "");
      break;
    case "text":
      (!e || L(e)) && (e = o), !i && e === o && (e = "");
      break;
    default:
      return;
  }
  s.onChange({ value: i, operator: e, syntheticEvent: t });
}, Jt = (i, t) => t ? i[t][0].operator : i[0].operator, Ve = (i) => i || "text", Qt = (i, t) => {
  const s = i.target.value;
  t({
    value: s.operator,
    operator: s.operator === "" ? "" : br,
    syntheticEvent: i.syntheticEvent
  });
}, Zt = (i, t, s) => {
  let o = t;
  const e = i.target.value;
  i.target.state.opened && (L(e.operator) && (o = null), t === null && !L(e.operator) && (o = void 0), s({ value: o, operator: e.operator, syntheticEvent: i.syntheticEvent }));
};
class es extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this._inputRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.renderOperatorEditor = (s) => {
      if (this.props.filterType === "boolean")
        return;
      const o = this.props.operators.find((e) => e.operator === this.props.operator) || null;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__.DropDownList,
        {
          size: this.props.size,
          value: o,
          onChange: this.operatorChange,
          className: "k-dropdown-operator",
          iconClassName: "k-i-filter k-icon",
          svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.filterIcon,
          data: this.props.operators,
          textField: "text",
          title: s.toLanguageString(_e, k[_e]),
          popupSettings: {
            width: ""
          }
        }
      );
    }, this.inputChange = this.inputChange.bind(this), this.clear = this.clear.bind(this), this.operatorChange = this.operatorChange.bind(this), this.boolDropdownChange = this.boolDropdownChange.bind(this);
  }
  /**
   * @hidden
   */
  render() {
    const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filtercell" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filtercell-wrapper" }, this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filtercell-operator" }, this.renderOperatorEditor(t), " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
      {
        size: this.props.size,
        icon: "filter-clear",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.filterClearIcon,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)({
          "k-clear-button-visible": !!(!(this.props.value === null || this.props.value === "") || this.props.operator)
        }),
        title: t.toLanguageString(U, k[U]),
        type: "button",
        onClick: this.clear,
        disabled: !(!(this.props.value === null || this.props.value === "") || this.props.operator)
      }
    ))));
    return this.props.render ? this.props.render.call(void 0, s, this.props) : s;
  }
  inputChange(t, s) {
    Yt(t, s, this.props);
  }
  operatorChange(t) {
    Zt(t, this.props.value, this.props.onChange);
  }
  boolDropdownChange(t) {
    Qt(t, this.props.onChange);
  }
  clear(t) {
    t.preventDefault(), this.props.onChange({ value: "", operator: "", syntheticEvent: t }), this._inputRef.current && (this._inputRef.current.element.value = "", setTimeout(() => {
      this._inputRef.current.element.focus();
    }, 0));
  }
  filterComponent(t, s, o) {
    switch (t) {
      case "numeric":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.NumericTextBox,
          {
            ref: this._inputRef,
            size: this.props.size,
            value: s,
            onChange: (e) => {
              this.inputChange(e.value, e.syntheticEvent);
            },
            title: this.props.title,
            ariaLabel: this.props.ariaLabel
          }
        );
      case "date":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_dateinputs__WEBPACK_IMPORTED_MODULE_7__.DatePicker,
          {
            ref: this._inputRef,
            size: this.props.size,
            value: s,
            onChange: (e) => {
              this.inputChange(e.value, e.syntheticEvent);
            },
            title: this.props.title,
            ariaLabel: this.props.ariaLabel
          }
        );
      case "boolean": {
        const e = (r) => r == null;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__.DropDownList,
          {
            ref: this._inputRef,
            size: this.props.size,
            onChange: this.boolDropdownChange,
            value: o.find((r) => r.operator === (e(s) ? "" : s)),
            data: o,
            textField: "text",
            title: this.props.title,
            ariaLabel: this.props.ariaLabel
          }
        );
      }
      default:
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.TextBox,
          {
            ref: this._inputRef,
            size: this.props.size,
            value: s || "",
            onChange: (e) => {
              this.inputChange(e.target.value, e.syntheticEvent);
            },
            title: this.props.title,
            "aria-label": this.props.ariaLabel
          }
        );
    }
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(es);
const vr = "k-table-row k-filter-row";
class ts extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  headerCellClassName(t, s) {
    let o = `${s ? "k-grid-header-sticky" : ""}`;
    return this.props.sort && this.props.sort.filter((e) => e.field === t).length > 0 && (o += " k-sorted"), o;
  }
  setFilter(t, s, o, e) {
    if (!this.props.filterChange)
      return;
    const r = [];
    (t !== "" && t !== null || s !== "") && r.push({
      field: o,
      operator: s,
      value: t
    }), this.props.filter && this.props.filter.filters && (this.props.filter.filters || []).forEach((c) => {
      const h = c;
      h && h.field !== o && r.push(h);
    });
    const l = this.props.filter && this.props.filter.logic ? this.props.filter.logic : "and";
    this.props.filterChange(r.length > 0 ? { logic: l, filters: r } : null, e);
  }
  render() {
    const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), s = this.props.filter && this.props.filter.filters || [], o = (a) => {
      if (a === void 0)
        return;
      const c = s.filter((h) => h.field === a);
      return c.length ? c[0] : void 0;
    };
    let e = 0, r = -1;
    const l = this.props.columns.filter((a) => a.children.length === 0).map(
      (a) => {
        const c = Ve(a.filter), h = o(a.field), d = a.filterable ? t.toLanguageString(Be, k[Be]) : void 0;
        let u = h && h.value;
        u === void 0 && (u = c === "text" ? "" : null);
        const f = a.filterable && {
          render: this.props.cellRender,
          field: a.field,
          title: a.filterTitle,
          value: u,
          operator: h && h.operator,
          operators: re(this.props.filterOperators[c] || [], t),
          booleanValues: re(Xt, t),
          filterType: c,
          ariaLabel: d,
          onChange: (v) => {
            this.setFilter(v.value, v.operator, a.field, v.syntheticEvent);
          }
        }, g = a.declarationIndex >= 0 ? ++r : --e, b = {
          ariaLabel: d,
          ariaColumnIndex: a.ariaColumnIndex
        }, E = a.left !== void 0 ? this.props.isRtl ? { left: a.right, right: a.left } : { left: a.left, right: a.right } : {}, C = {
          columnId: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.getFilterColumnId(a.id),
          navigatable: a.navigatable,
          style: E,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-table-th", this.headerCellClassName(a.field, a.locked) || void 0),
          role: "columnheader",
          ...b
        }, x = f && (a.filterCell ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.filterCell, { ...f }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(es, { size: this.props.size, ...f })), S = xe(this.props.cells, a.cells);
        if (S && S.filterCell) {
          const v = S.filterCell;
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(v, { key: g, ...f, thProps: C, index: r }, x);
        }
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.HeaderThElement,
          {
            key: g,
            ...C
          },
          x
        );
      }
    );
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: vr, "aria-rowindex": this.props.ariaRowIndex, role: "row" }, l);
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(ts);
class ss extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.draggable = null, this.onPress = (t) => {
      const s = this.draggable && this.draggable.element;
      s && this.props.onPress && this.props.onPress(t.event, s);
    }, this.onDrag = (t) => {
      const s = this.draggable && this.draggable.element;
      s && this.props.onDrag && this.props.onDrag(t.event, s);
    }, this.onRelease = (t) => {
      this.draggable && this.draggable.element && this.props.onRelease && this.props.onRelease(t.event);
    }, this.sortChange = (t) => {
      if (t.preventDefault(), this.props.onSortChange) {
        const s = this.props.dir === "asc" ? "desc" : "asc";
        this.props.onSortChange(t, s);
      }
    }, this.groupRemove = (t) => {
      t.preventDefault(), t.stopPropagation(), this.props.onRemove && this.props.onRemove(t);
    }, this.onContextMenu = (t) => {
      const s = {
        title: this.props.title,
        dir: this.props.dir,
        index: this.props.index
      };
      this.props.onContextMenu && this.props.onContextMenu.call(void 0, t, { dataItem: { ...s } });
    };
  }
  render() {
    const { dir: t } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Draggable,
      {
        onPress: this.onPress,
        onDrag: this.onDrag,
        onRelease: this.onRelease,
        ref: (s) => {
          this.draggable = s;
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: "k-chip k-chip-md k-chip-solid k-chip-solid-base k-rounded-md",
          onClick: this.sortChange,
          onContextMenu: this.onContextMenu,
          role: "button",
          style: { touchAction: "none" }
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
          {
            name: "sort-" + t + "-small",
            icon: t === "asc" ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortAscSmallIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortDescSmallIcon,
            size: "small"
          }
        )),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-chip-content" }, this.props.title),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-chip-actions" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "span",
          {
            className: "k-chip-action k-chip-remove-action",
            onClick: this.groupRemove
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
            {
              name: "x-circle",
              icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.xCircleIcon,
              size: "small"
            }
          )
        ))
      )
    );
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(ss);
class rs extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onGroupRemove = (t, s) => {
      const o = this.props.group.slice();
      o.splice(s, 1), this.props.groupChange(o, t);
    }, this.onGroupSortChange = (t, s, o, e) => {
      const r = Object.assign({}, o, { dir: e }), l = this.props.group.slice();
      l.splice(s, 1, r), this.props.groupChange(l, t);
    };
  }
  render() {
    const s = (this.props.group || []).map((o, e) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ss,
      {
        key: e,
        index: e,
        dir: o.dir || "asc",
        title: this.props.resolveTitle(o.field),
        onRemove: (r) => {
          this.onGroupRemove(r, e);
        },
        onSortChange: (r, l) => {
          this.onGroupSortChange(r, e, o, l);
        },
        onPress: this.props.pressHandler,
        onDrag: this.props.dragHandler,
        onRelease: this.props.releaseHandler,
        onContextMenu: this.props.onContextMenu
      }
    ));
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        ref: this.props.refCallback,
        className: "k-grouping-header",
        role: "toolbar",
        "aria-label": (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this).toLanguageString(We, k[We]),
        "aria-controls": this.props.ariaControls || ""
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-chip-list k-chip-list-md", role: "none" }, s),
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-grouping-drop-container" }, !s.length && (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this).toLanguageString(Me, k[Me]), " ")
    );
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(rs);
class kr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.footerWrap = null, this.table = null, this.scrollbarWidth = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getScrollbarWidth)();
  }
  componentDidMount() {
    this.setState({});
  }
  /**
   *
   * @param scrollLeft - Scrolls to the left (in pixels).
   */
  setScrollLeft(t) {
    this.footerWrap && (this.footerWrap.scrollLeft = t);
  }
  /**
   *
   * @param width - Scrolls the width (in pixels).
   */
  setWidth(t) {
    this.table && (this.table.style.width = t + "px");
  }
  render() {
    return this.props.staticHeaders ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "k-grid-footer",
        role: "presentation"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          ref: (t) => {
            this.footerWrap = t;
          },
          className: "k-grid-footer-wrap",
          style: this.scrollbarWidth ? {} : { borderWidth: 0 },
          role: "presentation"
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "table",
          {
            ref: (t) => {
              this.table = t;
            },
            className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
              "k-table k-grid-footer-table",
              {
                "k-table-md": !this.props.size,
                [`k-table-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
              },
              this.props.className
            ),
            role: "presentation"
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("colgroup", { ref: (t) => {
            this.props.columnResize.colGroupFooter = t;
          }, role: "presentation" }, this.props.cols),
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", { className: "k-table-tfoot", role: "presentation" }, this.props.row)
        )
      )
    ) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", { className: "k-table-tfoot" }, this.props.row);
  }
}
class Er {
  constructor(t) {
    this.table = null, this.containerHeight = 0, this.topCacheCount = 0, this.attendedSkip = 0, this.propsSkip = 0, this.total = 0, this.scrollableVirtual = !1, this.realSkip = 0, this.pageSize = 0, this.PageChange = null, this.tableBodyRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.fixedScroll = !1, this.askedSkip = void 0, this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.tableTransform = "", this.prevScrollPos = 0, this.tableTranslate = 0, this.scrollSyncing = !1, this.reactVersion = Number.parseFloat(react__WEBPACK_IMPORTED_MODULE_0__.version), this.topItems = (s, o) => {
      if (!this.container || o)
        return { topItemsCount: 0, topItemsHeight: 0 };
      const e = this.container.clientHeight, r = Math.ceil(e / s[0].line), l = Math.ceil((s.length - r) / 2);
      let a = 0;
      for (let c = 0; c < l; c++)
        a += s[c].line + s[c].acc;
      return {
        topItemsCount: l,
        topItemsHeight: a,
        itemsNeededOnScreen: r + r / 2
      };
    }, this.horizontalScrollbarHeight = () => this.container ? this.container.offsetHeight - this.container.clientHeight : 0, t && (this.topCacheCount = 4, this.attendedSkip = -this.topCacheCount), this.scrollHandler = this.scrollHandler.bind(this);
  }
  get container() {
    return this.containerRef.current;
  }
  /**
   * @return - The row heights in an array.
   */
  get rowHeights() {
    const t = [], s = this.tableBodyRef.current && this.tableBodyRef.current.children || [];
    let o = 0;
    for (let e = 0; e < s.length; e++) {
      if (s[e].className.indexOf("k-grouping-row") > -1) {
        o += s[e].scrollHeight;
        continue;
      }
      s[e].className.indexOf("k-detail-row") > -1 ? t[t.length - 1].line += s[e].scrollHeight : (t.push({
        line: s[e].scrollHeight,
        acc: o
      }), o = 0);
    }
    return t;
  }
  changePage(t, s) {
    this.attendedSkip = t - this.topCacheCount, this.PageChange && this.PageChange(
      {
        skip: Math.max(0, t - this.topCacheCount),
        take: this.pageSize
      },
      s
    );
  }
  translate(t, s) {
    this.tableTranslate = t, this.scrollableVirtual && this.table && (this.reactVersion <= 17 || s ? this.table.style.transform = "translateY(" + t + "px)" : this.tableTransform = "translateY(" + t + "px)");
  }
  reset() {
    this.scrollSyncing = !0, !this.fixedScroll && (this.container && (this.container.scrollTop = 0), this.translate(0, !0));
  }
  localScrollUp(t) {
    if (!this.container)
      return;
    const s = this.rowHeights, o = this.container.scrollTop;
    let e = this.tableTranslate, r = 0;
    const {
      topItemsCount: l,
      topItemsHeight: a,
      itemsNeededOnScreen: c
    } = this.topItems(s, !!this.topCacheCount), h = o - e;
    if (!(h > a || s.length <= c)) {
      for (; r < this.topCacheCount + this.attendedSkip - this.realSkip + l && this.propsSkip - r > 0 && !(e + (s[s.length - 1 - r].line + s[s.length - 1 - r].acc) + h <= o); )
        e -= s[s.length - 1 - r].line + s[s.length - 1 - r].acc, r++;
      if (r === 0 && this.topCacheCount === 0 && this.attendedSkip > 0 && (e = Math.max(e - s[0].line, 0), r = 1), this.propsSkip - r <= 0 && e > o) {
        this.translate(0), this.changePage(0, t), this.container.scrollTop = 0;
        return;
      }
      if (e > o && (e = o), e !== this.tableTranslate) {
        this.translate(Math.max(0, e - a));
        const d = Math.max(0, this.propsSkip - r - l);
        this.changePage(d, t);
      }
    }
  }
  localScrollDown(t) {
    if (!this.container)
      return;
    const s = this.rowHeights, o = this.container.scrollTop;
    let e = this.tableTranslate, r = 0;
    const {
      topItemsCount: l,
      topItemsHeight: a,
      itemsNeededOnScreen: c
    } = this.topItems(s, !!this.topCacheCount);
    for (; r < s.length - this.topCacheCount && !(e + s[r].line + s[r].acc > o); )
      e += s[r].line + s[r].acc, r++;
    l > this.propsSkip + r || s.length <= c || (r >= s.length - this.topCacheCount && this.propsSkip + r >= this.total ? (this.translate(e - a), this.changePage(this.total - 1 - l, t)) : e !== this.tableTranslate && this.propsSkip + r - l !== this.propsSkip && (this.translate(e - a), this.changePage(this.propsSkip + r - l, t)));
  }
  scrollNonStrict(t) {
    const s = this.total * this.prevScrollPos / this.containerHeight;
    let o = Math.floor(s);
    o >= this.total && (o = this.total - 1);
    const e = Math.min(s - o, 1);
    let r = 0;
    const l = o - this.propsSkip, a = this.rowHeights;
    l >= 0 && l <= 1 ? r = -((a[0].line + a[0].acc) * e) : l === -1 && (r = -((a[a.length - 1].line + a[a.length - 1].acc) * e));
    const { topItemsCount: c, topItemsHeight: h } = this.topItems(a, !!this.topCacheCount);
    this.translate(Math.max(0, r - h - this.horizontalScrollbarHeight() + this.containerHeight * s / this.total)), this.changePage(o - c, t);
  }
  scrollHandler(t) {
    if (!this.scrollableVirtual)
      return;
    if (this.scrollSyncing || !this.container || !this.table) {
      this.scrollSyncing = !1;
      return;
    }
    const s = this.container.scrollTop, o = this.prevScrollPos;
    if (this.prevScrollPos = s, this.askedSkip !== void 0) {
      this.translate(this.containerHeight * this.askedSkip / this.total), this.changePage(this.askedSkip, t), this.prevScrollPos = s, this.askedSkip = void 0;
      return;
    }
    s - o < 0 && s > this.tableTranslate - this.table.scrollHeight / 10 ? this.localScrollUp(t) : s - o > 0 && s < this.tableTranslate + this.table.scrollHeight * 2 / 3 ? this.localScrollDown(t) : this.scrollNonStrict(t), this.prevScrollPos = s;
  }
}
class Et {
  constructor(t = 0, s, o, e) {
    this.total = t, this.offsets = [], this.heights = [];
    let r = 0;
    for (let l = 0; l < t; l++) {
      this.offsets.push(r);
      const a = e && e[l].expanded && e[l].rowType === "data" ? o : s;
      r += a, this.heights.push(a);
    }
  }
  height(t) {
    return this.heights[t];
  }
  index(t) {
    if (t < 0)
      return;
    const s = this.offsets.reduce((o, e, r) => {
      if (o !== void 0)
        return o;
      if (e === t)
        return r;
      if (e > t)
        return r - 1;
    }, void 0);
    return s === void 0 ? this.total - 1 : s;
  }
  offset(t) {
    return this.offsets[t];
  }
  totalHeight() {
    const t = this.offsets[this.offsets.length - 1], s = this.heights[this.heights.length - 1];
    return t + s;
  }
}
class St {
  constructor(t) {
    this.table = null, this.containerHeight = 0, this.topCacheCount = 0, this.attendedSkip = 0, this.propsSkip = 0, this.total = 0, this.scrollableVirtual = !1, this.realSkip = 0, this.pageSize = 0, this.PageChange = null, this.tableBodyRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.fixedScroll = !1, this.askedSkip = void 0, this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.tableTransform = "", this.scrollSyncing = !1, this.lastLoaded = 0, this.firstLoaded = 0, this.lastScrollTop = 0, this.reactVersion = Number.parseFloat(react__WEBPACK_IMPORTED_MODULE_0__.version), this.firstLoaded = this.pageSize, this.lastLoaded = this.realSkip + this.pageSize, this.scrollHandler = this.scrollHandler.bind(this);
  }
  get container() {
    return this.containerRef.current;
  }
  translate(t, s) {
    this.scrollableVirtual && this.table && (De || this.reactVersion <= 17 || s ? this.table.style.transform = "translateY(" + t + "px)" : this.tableTransform = "translateY(" + t + "px)");
  }
  changePage(t, s) {
    this.PageChange && this.PageChange({ skip: Math.max(0, t), take: this.pageSize }, s);
  }
  reset() {
    this.scrollSyncing = !0, !this.fixedScroll && (this.container && (this.container.scrollTop = 0), this.translate(0, !0));
  }
  scrollHandler(t) {
    if (!this.scrollableVirtual || !this.container || !this.table || !this.rowHeightService || !this.containerRef.current)
      return;
    if (this.scrollSyncing) {
      this.scrollSyncing = !1;
      return;
    }
    const s = this.container.scrollTop, o = this.lastScrollTop >= s, e = !o;
    this.lastScrollTop = s;
    let r = this.rowHeightService.index(s), l = this.rowHeightService.offset(r);
    const { offsetHeight: a } = this.containerRef.current, c = this.rowHeightService.index(s + a);
    if (e && c >= this.lastLoaded && this.lastLoaded < this.total) {
      const h = r + this.pageSize - this.total;
      h > 0 && (r = r - h, l = this.rowHeightService.offset(r)), this.firstLoaded = r, this.translate(l);
      let d = this.firstLoaded + this.pageSize;
      this.lastLoaded = Math.min(d, this.total), this.changePage(this.firstLoaded, t);
    } else if (o && r < this.firstLoaded) {
      const h = Math.floor(this.pageSize * 0.3);
      this.firstLoaded = Math.max(r - h, 0), this.translate(this.rowHeightService.offset(this.firstLoaded)), this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total), this.changePage(this.firstLoaded, t);
    }
  }
}
const Sr = 1, Ir = 20;
class yr {
  constructor(t) {
    this.columns = [], this.resizable = !1, this.isRtl = !1, this.setIsRtl = (s) => {
      this.isRtl = s;
    }, this.dragHandler = (s, o, e, r) => {
      const l = s.originalEvent;
      r || (l.preventDefault(), l.stopPropagation(), l.stopImmediatePropagation());
      const a = e.closest("th");
      if (!a || !a)
        return;
      const c = a.clientWidth;
      let h = c;
      if (this.isRtl ? h += e.getBoundingClientRect().right - e.offsetWidth / 2 - s.clientX : h += s.clientX - e.getBoundingClientRect().left - e.offsetWidth / 2, !r && Math.abs(h - c) < 1)
        return;
      this.fixateInitialWidths(a.parentElement.clientWidth), this.setWidths(o, Math.floor(h) / c);
      const d = this.columns.filter((u) => !u.children.length).findIndex((u) => u.id === o.id);
      this.onResize(d, c, h, l, r, o.id);
    }, this.dblClickHandler = (s, o) => {
      const e = this.columns.filter((f) => o.indexOf(f.id) > -1);
      if (!this.colGroupMain || !e.length)
        return;
      const r = {}, l = e;
      for (; l.length > 0; ) {
        const f = l.pop();
        if (!f)
          break;
        f.children.length ? l.push(...f.children) : r[f.id] = f;
      }
      const a = this.columns.filter((f) => !f.children.length), c = [];
      a.forEach((f, g) => {
        r[f.id] && c.push(g);
      });
      const h = [this.colGroupMain.parentElement], d = [this.colGroupMain];
      this.colGroupHeader && (h.push(this.colGroupHeader.parentElement), d.push(this.colGroupHeader)), this.colGroupFooter && (h.push(this.colGroupFooter.parentElement), d.push(this.colGroupFooter)), h.forEach((f) => f.classList.add("k-autofitting"));
      let u = [];
      d.forEach((f) => {
        c.forEach((g) => {
          f.children[g] && (f.children[g].width = "", u[g] = Math.max(u[g] || 0, f.children[g].offsetWidth + Sr));
        });
      }), d.forEach((f) => {
        c.forEach((g) => {
          f.children[g] && (f.children[g].width = u[g] + "px", a[g].width = u[g]);
        });
      }), h.forEach((f) => f.classList.remove("k-autofitting")), this.onResize(c[0], 0, 0, s, !0, o[0]);
    }, this.updateColElements = (s) => {
      const o = this.columns.filter((r) => !r.children.length);
      let e = 1e-10;
      for (let r = 0; r < s.length; r++) {
        const l = s[r], a = o.findIndex((u) => u.id === l.id), c = parseFloat((l.width || 0).toString()), h = Math.floor(c);
        e += c - h;
        const d = h + Math.floor(e);
        if (e -= Math.floor(e), this.colGroupMain && this.colGroupMain.children[a]) {
          const u = parseInt(this.colGroupMain.children[a].width, 10);
          this.colGroupMain.children[a].width = d + "px", this.updateNextLockedCol(
            this.colGroupMain.parentElement,
            l,
            u - d
          );
        }
        if (this.colGroupHeader && this.colGroupHeader.children[a]) {
          const u = parseInt(this.colGroupHeader.children[a].width, 10);
          this.colGroupHeader.children[a].width = d + "px", this.updateNextLockedCol(
            this.colGroupHeader.parentElement,
            l,
            u - d
          );
        }
        if (this.colGroupFooter && this.colGroupFooter.children[a]) {
          const u = parseInt(this.colGroupFooter.children[a].width, 10);
          this.colGroupFooter.children[a].width = d + "px", this.updateNextLockedCol(
            this.colGroupFooter.parentElement,
            l,
            u - d
          );
        }
      }
    }, this.onResize = t;
  }
  fixateInitialWidths(t) {
    const s = this.columns.filter((l) => !l.children.length);
    let o = 0, e = this.colGroupMain ? this.colGroupMain.children : [];
    for (let l = 0; l < e.length; l++)
      e[l].width ? t -= parseFloat(e[l].width) : o++;
    if (o === 0)
      return;
    const r = Math.floor(t / o);
    for (let l = 0; l < e.length; l++) {
      const a = e[l];
      a.width || (a.width = r, s[l].width = r.toString(), this.colGroupHeader && (this.colGroupHeader.children[l].width = r), this.colGroupFooter && (this.colGroupFooter.children[l].width = r));
    }
  }
  setWidths(t, s) {
    const o = this.columns.findIndex((l) => l.id === t.id), e = [];
    let r = t.children.length;
    for (let l = o + 1; r > 0 && l < this.columns.length; l++, r--) {
      const a = this.columns[l];
      a.children.length ? r += a.children.length : e.push(a);
    }
    return e.length === 0 && e.push(t), e.forEach((l) => {
      let a = l.width ? parseFloat(l.width.toString()) * s : 0;
      const c = l.minResizableWidth === void 0 ? 10 : l.minResizableWidth;
      a < c && (a = c), l.width = a;
    }), this.updateColElements(e), e;
  }
  updateNextLockedCol(t, s, o) {
    const e = s.index, r = this.colGroupMain.parentElement.closest(".k-grid"), l = r == null ? void 0 : r.clientWidth, a = this.columns.filter((c) => c.locked).map((c) => parseInt(c.width + "", 10)).reduce((c, h) => c + h, 0);
    !s.locked || l <= a + Ir || this.columns.forEach((c) => {
      if (c != null && c.locked && o) {
        const h = t == null ? void 0 : t.querySelectorAll('[aria-colindex="' + c.ariaColumnIndex + '"]');
        h == null || h.forEach((d) => {
          const u = d.style;
          this.isRtl ? (c.index > e && u && u.right && (u.right = parseInt(u.right, 10) - o + "px"), c.index < e && u && u.left && (u.left = parseInt(u.left, 10) - o + "px")) : (c.index > e && u && u.left && (u.left = parseInt(u.left, 10) - o + "px"), c.index < e && u && u.right && (u.right = parseInt(u.right, 10) - o + "px"));
        });
      }
    });
  }
}
class wr {
  constructor(t, s, o) {
    this.refDragElementClue = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.refDropElementClue = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.columns = [], this.reorderable = !1, this.groupable = !1, this.startColumn = -1, this.startGroup = -1, this.currentColumn = -1, this.currentGroup = -1, this.groupPanelDivElement = null, this.refGroupPanelDiv = (e) => {
      this.groupPanelDivElement = e && e.children ? e.children[0] : e;
    }, this.pressHandler = (e, r) => {
      const l = this.getColumnIndex(e, r);
      if (this.startGroup = this.getGroupIndex(e), l >= 0) {
        const a = this.columns[l];
        (a.reorderable && this.reorderable || a.groupable && this.groupable) && (this.startColumn = l);
      }
    }, this.dragHandler = (e, r) => {
      if (e.isTouch || e.originalEvent.preventDefault(), e.originalEvent.stopPropagation(), this.startColumn === -1 && this.startGroup === -1)
        return;
      this.currentColumn = this.getColumnIndex(e, r);
      const l = this.groupPanelDivElement && this.groupPanelDivElement.children;
      this.currentGroup = this.isTargetGroupingContainer(e) ? l && l.length ? l.length : 0 : this.getGroupIndex(e);
      const a = !this.isValid();
      a && (this.currentColumn = -1, this.currentGroup = -1);
      const c = this.currentColumn >= 0 ? r.children[this.columns[this.currentColumn].index] : this.isTargetGroupingContainer(e) ? e.originalEvent.target : this.groupPanelDivElement && this.groupPanelDivElement.children[this.currentGroup];
      this.updateDragElementClue(e, r, c, a), this.updateDropElementClue(e, r, c, a);
    }, this.releaseHandler = (e) => {
      const r = this.startColumn, l = this.currentColumn, a = this.startGroup, c = this.currentGroup;
      e.originalEvent.preventDefault(), this.dropElementClue && this.dropElementClue.setState({ visible: !1 }), this.dragElementClue && this.dragElementClue.setState({ visible: !1 });
      const h = this.isValid();
      this.startColumn = this.startGroup = this.currentColumn = this.currentGroup = -1, h && (r >= 0 && l >= 0 ? this.columnReorder(r, l, e.originalEvent) : a >= 0 && c >= 0 ? this.groupReorder(a, c, e.originalEvent) : r >= 0 && c >= 0 && this.columnToGroup(r, c, e.originalEvent));
    }, this.columnReorder = t, this.groupReorder = s, this.columnToGroup = o;
  }
  get dragClueRef() {
    return this.refDragElementClue;
  }
  get dropClueRef() {
    return this.refDropElementClue;
  }
  get dragElementClue() {
    return this.refDragElementClue.current;
  }
  get dropElementClue() {
    return this.refDropElementClue.current;
  }
  getColumnIndex(t, s) {
    if (!s || s.parentElement === this.groupPanelDivElement)
      return -1;
    const o = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getIndex)(t, s);
    if (o === -1)
      return -1;
    for (let e = 0; e < s.parentNode.children.length; e++)
      if (s.parentNode.children[e] === s)
        return this.columns.findIndex((r) => r.index === o && r.depth === e);
    return -1;
  }
  isTargetGroupingContainer(t) {
    const s = t.originalEvent.target;
    return s.className.indexOf ? s.className.indexOf("k-grouping-drop-container") !== -1 : !1;
  }
  getGroupIndex(t) {
    return (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getIndex)(t, this.groupPanelDivElement);
  }
  isValid() {
    return this.startGroup >= 0 ? this.currentGroup >= 0 && this.currentGroup !== this.startGroup : this.startColumn === -1 ? !1 : this.currentGroup >= 0 ? this.columns[this.startColumn].groupable === !0 && this.groupable === !0 : this.reorderable === !0 && this.currentColumn >= 0 && this.currentColumn !== this.startColumn && this.columns[this.startColumn].reorderable === !0 && this.columns[this.currentColumn].parentIndex === this.columns[this.startColumn].parentIndex;
  }
  updateDragElementClue(t, s, o, e) {
    if (!this.dragElementClue)
      return;
    const r = this.startColumn >= 0 ? s.children[this.columns[this.startColumn].index].innerText : s.innerText;
    this.dragElementClue.setState({
      visible: !0,
      top: t.pageY + 10,
      left: t.pageX,
      innerText: r,
      status: e || !o ? "k-i-cancel" : "k-i-plus"
    });
  }
  updateDropElementClue(t, s, o, e) {
    if (!this.dropElementClue)
      return;
    if (e || !o) {
      this.dropElementClue.setState({ visible: !1 });
      return;
    }
    const r = o.getBoundingClientRect(), a = (o.closest(".k-grouping-header") || o).getBoundingClientRect();
    let c = r.left + t.pageX - t.clientX - 6;
    !this.isTargetGroupingContainer(t) && (this.currentColumn > this.startColumn || this.currentGroup > this.startGroup && this.startGroup !== -1) && (c += r.width);
    const h = a.top + t.pageY - t.clientY;
    this.dropElementClue.setState({
      visible: !0,
      top: h,
      left: c,
      height: this.currentColumn >= 0 ? s.clientHeight : a.height
    });
  }
}
const Rr = (i) => {
  let t = null;
  const s = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.useInternationalization)(), o = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id), e = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((h) => {
    i.onContextMenu && i.onContextMenu.call(void 0, h, i.dataItem, i.field);
  }, [i.onContextMenu, i.dataItem, i.field]);
  let r = null, l = null;
  if (i.rowType === "groupFooter")
    r = {
      onContextMenu: e,
      className: i.className
    }, t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { ...r });
  else if (i.rowType !== "groupHeader") {
    if (i.field !== void 0) {
      const d = M(i.field, i.dataItem);
      d != null && (l = i.format ? s.format(i.format, d) : d.toString());
    }
    const h = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-table-td",
      i.className,
      { "k-selected": i.isSelected }
    );
    r = {
      onContextMenu: e,
      colSpan: i.colSpan,
      style: i.style,
      className: h,
      role: "gridcell",
      "aria-colindex": i.ariaColumnIndex,
      "aria-selected": i.isSelected,
      [se]: i.columnIndex,
      ...o
    }, t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { ...r }, l);
  }
  const a = i.rowType || "data", c = i.cells;
  if (c && c[a]) {
    const h = c[a];
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(h, { ...i, tdProps: r }, l);
  }
  return i.render ? i.render.call(void 0, t, i) : t;
}, It = (i) => {
  let t = null;
  const { columnIndex: s, level: o, columnsCount: e, rowType: r, dataItem: l, field: a, onChange: c, expanded: h, render: d, dataIndex: u, ariaColumnIndex: f, isRtl: g } = i, b = a || "", E = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id), C = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.useLocalization)();
  let x = null, S = null, v = null;
  const _ = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (F) => {
      F.isDefaultPrevented() || F.keyCode === _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.Keys.enter && c && (F.preventDefault(), c({
        dataItem: l,
        dataIndex: u,
        syntheticEvent: F,
        field: void 0,
        value: !h
      }));
    },
    [h, c, l, u]
  ), T = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((F) => {
    i.onContextMenu && i.onContextMenu.call(void 0, F, i.dataItem, i.field);
  }, [i.onContextMenu, i.dataItem, i.field]), de = (F, ke) => {
    const pe = h ? Vt : Wt, Ee = C.toLanguageString(pe, k[pe]);
    return x = {
      className: "k-table-td",
      style: { ...i.style, ...ke },
      colSpan: F,
      key: "g-colspan",
      role: "gridcell",
      ["aria-selected"]: !1,
      ["aria-expanded"]: h,
      ["aria-colindex"]: f,
      onKeyDown: _,
      onContextMenu: T,
      ...E
    }, v = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "k-reset" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "a",
      {
        onClick: (J) => {
          J.preventDefault(), c && c({
            dataItem: l,
            dataIndex: u,
            syntheticEvent: J,
            field: void 0,
            value: !h
          });
        },
        href: "#",
        tabIndex: -1,
        "aria-label": Ee
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap,
        {
          name: h ? "caret-alt-down" : g ? "caret-alt-left" : "caret-alt-right",
          icon: h ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.caretAltDownIcon : g ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.caretAltLeftIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.caretAltRightIcon
        }
      )
    ), l[b] instanceof Date && l[b].toString ? l[b].toString() : l[b]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "td",
      {
        ...x,
        key: x.key
      },
      v
    );
  };
  s === void 0 || o === void 0 || s < o || e === void 0 || r !== "groupHeader" || l[b] === void 0 ? (x = {
    style: i.style,
    key: "g" + s,
    className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-table-td",
      "k-group-cell",
      { "k-grid-content-sticky": i.locked }
    ),
    role: "gridcell",
    onContextMenu: T
  }, t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "td",
    {
      ...x,
      key: x.key
    }
  )) : s <= o && !i.locked ? t = de(e - s, {}) : s <= o && i.locked && (S = {
    className: "k-table-td",
    role: "gridcell",
    colSpan: e - s,
    style: { borderLeftWidth: 0, borderRightWidth: 0 },
    onContextMenu: T
  }, t = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, de(0, { position: "sticky", zIndex: 2 }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "td",
    {
      ...S
    }
  )));
  const Y = i.rowType || "data", $ = i.cells;
  if ($ && $.group && $.group[Y]) {
    const F = $.group[Y];
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(F, { ...i, tdProps: x, td2Props: S }, v);
  }
  return d ? d.call(void 0, t, i) : t;
};
class Fr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    const t = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
      "k-table-row",
      {
        "k-table-group-row k-grouping-row": this.props.rowType === "groupHeader",
        "k-group-footer": this.props.rowType === "groupFooter",
        "k-master-row": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter",
        "k-table-alt-row k-alt": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter" && this.props.isAltRow,
        "k-selected": this.props.isSelected,
        "k-grid-edit-row": this.props.isInEdit
      }
    ), s = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "tr",
      {
        id: this.props.id,
        onClick: this.props.onClick,
        onDoubleClick: this.props.onDoubleClick,
        className: t,
        style: {
          height: this.props.rowHeight ? this.props.rowHeight + "px" : "",
          visibility: this.props.isHidden ? "hidden" : ""
        },
        role: "row",
        "aria-rowindex": this.props.ariaRowIndex,
        "absolute-row-index": this.props.absoluteRowIndex,
        key: this.props.absoluteRowIndex,
        [hr]: this.props.rowType === "data" ? this.props.dataIndex : void 0
      },
      this.props.children
    );
    return this.props.render ? this.props.render.call(void 0, s, this.props) : s;
  }
}
class is extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  get _inputId() {
    return this.props.id;
  }
  render() {
    const t = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), { columnMenuWrapperProps: s } = this.props, o = [
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 0, className: "k-checkbox-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "input",
        {
          id: this._inputId,
          type: "checkbox",
          className: "k-checkbox k-checkbox-md k-rounded-md",
          "aria-label": t.toLanguageString(le, k[le]),
          "aria-checked": this.props.selectionValue,
          checked: this.props.selectionValue,
          onChange: (e) => this.props.selectionChange({
            field: this.props.field,
            syntheticEvent: e
          })
        }
      )),
      s.columnMenu && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($t, { ...s })
    ];
    return this.props.render ? this.props.render.call(void 0, o, this.props) : o;
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(is);
const Nr = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(is);
class Ye extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return this.props.children || (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this).toLanguageString(Te, k[Te]);
  }
}
Ye.displayName = "KendoReactGridNoRecords";
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(Ye);
class Dr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this._element = null, this.renderCell = (t, s) => {
      const o = {
        colSpan: t.colSpan !== 1 ? t.colSpan : void 0,
        style: t.left !== void 0 ? this.props.isRtl ? { left: t.right, right: t.left } : { left: t.left, right: t.right } : {},
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-table-td",
          t.locked && t.left !== void 0 ? "k-grid-footer-sticky" : ""
        ),
        key: s,
        role: "gridcell",
        ["aria-colindex"]: t.ariaColumnIndex
      }, e = {
        field: t.field,
        ariaColumnIndex: t.ariaColumnIndex,
        ...o
      }, r = xe(this.props.cells, t.cells);
      if (r && r.footerCell) {
        const l = r.footerCell;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, { ...e, tdProps: o, index: s });
      }
      return t.footerCell && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(t.footerCell, { ...e, key: s }) || /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { ...o });
    };
  }
  get element() {
    return this._element;
  }
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: "k-table-row", role: "row", "aria-rowindex": this.props.ariaRowIndex }, Ys(this.props.columns).map(this.renderCell));
  }
}
const Tr = ({
  buttonCount: i = 10,
  info: t = !0,
  type: s = "numeric",
  pageSizes: o = void 0,
  previousNext: e = !0,
  responsive: r = void 0,
  pageSizeValue: l = void 0
}) => ({
  buttonCount: i,
  info: t,
  pageSizes: o === !0 ? [5, 10, 20] : o || void 0,
  previousNext: e,
  responsive: r !== !1,
  type: s,
  pageSizeValue: l
}), Mr = (i) => Tr(i === !0 ? {} : i), yt = {
  name: "@progress/kendo-react-grid",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613565,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, Gr = (i) => {
  const { colSpan: t, ariaColIndex: s, dataItem: o, dataIndex: e, id: r } = i, l = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(r), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((c) => {
    i.onContextMenu && i.onContextMenu.call(void 0, c, i.dataItem);
  }, [i.onContextMenu, i.dataItem]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "td",
    {
      onContextMenu: a,
      className: "k-table-td k-detail-cell",
      colSpan: t,
      "aria-colindex": s,
      role: "gridcell",
      ...l
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(i.detail, { dataItem: o, dataIndex: e })
  );
}, Hr = (i) => {
  const t = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.useTableKeyboardNavigation)(i.id);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "k-table-td k-hierarchy-cell", ...t, role: "gridcell" });
};
let he = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this._columns = [], this._columnsMap = [[]], this._columnsMutations = 0, this._resized = !1, this._shouldUpdateLeftRight = !0, this.contextStateRef = { current: void 0 }, this.navigationStateRef = { current: void 0 }, this._data = [], this._slicedData = void 0, this.wrapperScrollTop = 0, this.showLicenseWatermark = !1, this.headerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.headerElementRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this._element = null, this.tableElement = null, this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this.tableBodyRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), this._footer = null, this.forceUpdateTimeout = void 0, this.isRtl = !1, this.observer = null, this.handleIntersection = (e) => {
      const r = { rowIndex: this.rowIndex };
      e.forEach((l) => {
        l.isIntersecting || this.setCurrentOnTop(r);
      });
    }, this.setCurrentOnTop = (e) => {
      if (!this.vs.container || this.props.scrollable === "none")
        return;
      this.observer && this.observer.disconnect();
      const { rowIndex: r } = e;
      if (this.props.scrollable === "virtual")
        this.vs.askedSkip = r, this.vs.container.scroll(0, Math.round(this.vs.askedSkip / this.vs.total * this.vs.container.scrollHeight));
      else if (this.element) {
        const l = r < 1 ? this.element.querySelector("tbody > tr:nth-child(1)") : this.element.querySelector(`tbody > tr:nth-child(${r + 1})`);
        l && this.containerRef.current && (this.containerRef.current.scrollTop = l.offsetTop);
      }
    }, this.scrollIntoView = (e) => {
      if (!this.vs.container || this.props.scrollable === "none")
        return;
      this.rowIndex = e.rowIndex;
      const { rowIndex: r } = e, l = this.element;
      if (this.observer && l) {
        this.observer.disconnect();
        const a = l.querySelector(`[absolute-row-index="${r}"]`);
        a ? this.observer.observe(a) : this.setCurrentOnTop(e);
      }
    }, this.fitColumns = (e) => {
      this.columnResize.dblClickHandler(null, e);
    }, this.onContextMenu = (e, r, l) => {
      if (this.props.onContextMenu) {
        const a = {
          target: this,
          syntheticEvent: e,
          nativeEvent: e.nativeEvent,
          dataItem: r,
          field: l
        };
        this.props.onContextMenu.call(void 0, a);
      }
    }, this.getVirtualScroll = (e) => {
      const { rowHeight: r, detailRowHeight: l, detail: a, expandField: c, groupable: h } = e, d = this.isAllData(), u = r !== void 0 && r > 0, f = l !== void 0 && l > 0, g = h === !0 || typeof h == "object" && h.enabled !== !1;
      return !u || g && !d || !!(a && c) && (!f || !d) ? Er : St;
    }, this.isAllData = () => {
      const { data: e, total: r } = this.props;
      return Array.isArray(e) ? e.length === r : e ? r === e.total : !1;
    }, this.initializeVirtualization = (e, r) => {
      if (this.reInitVirtualization(
        this.props.scrollable === "virtual",
        this.props.total,
        this.props.filter,
        this.props.group,
        this.props.sort,
        r || this.props.rowHeight === void 0 || this.props.rowHeight === 0
      ), this.vs.fixedScroll = this.props.fixedScroll || !1, this.vs.PageChange = this.pageChange, this.vs.realSkip = this.props.skip || 0, this.vs.pageSize = (this.props.take !== void 0 ? this.props.take : this.props.pageSize) || 0, this.vs.scrollableVirtual = this.props.scrollable === "virtual", this.vs.total = e, this.vs.propsSkip = (this.props.skip || 0) + (this.props.scrollable === "virtual" ? this.vs.topCacheCount + (this.vs.attendedSkip - (this.props.skip || 0)) : 0), this.props.rowHeight !== void 0 && this.props.rowHeight > 0 && !r) {
        const l = this.props.rowHeight * e;
        this.vs.containerHeight = De ? Math.min(vt, l) : l;
      } else
        this.vs.containerHeight = 1533915;
      if (this.vs.containerRef = this.containerRef, this.vs.tableBodyRef = this.tableBodyRef, this.vs.table = this.tableElement, this._slicedData = void 0, this.vs instanceof St) {
        const { rowHeight: l = 0, detail: a, expandField: c } = this.props;
        let { detailRowHeight: h = 0 } = this.props;
        h = a && c ? h : l, this.isAllData() ? (this.vs.total = this._data.length, this._slicedData = this._data.slice(this.vs.realSkip, this.vs.realSkip + this.vs.pageSize), this.vs.rowHeightService = this.rowHeightService(this.vs, this._data.length, l, h, this._data)) : this.vs.rowHeightService = new Et(e, l, h);
        const d = this.vs.rowHeightService.totalHeight();
        this.vs.containerHeight = De ? Math.min(vt, d) : d;
      }
    }, this.scrollHandler = (e) => {
      if (e.target !== e.currentTarget)
        return;
      clearTimeout(this.forceUpdateTimeout), this.vs.table = this.tableElement;
      const r = e.currentTarget.scrollLeft, l = e.currentTarget.scrollTop;
      this.props.columnVirtualization && (!this.vs.scrollableVirtual || l === this.wrapperScrollTop) && (this.forceUpdateTimeout = window.setTimeout(() => {
        this.forceUpdate();
      }, 0)), this._header && this._header.setScrollLeft(r), this._footer && this._footer.setScrollLeft(r), this.vs && l !== this.wrapperScrollTop && this.vs.scrollHandler(e), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(this.props.onScroll, e, this, void 0), this.wrapperScrollTop = l;
    }, this.onKeyDown = (e) => {
      if (_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onKeyDown(e, {
        contextStateRef: this.contextStateRef,
        navigationStateRef: this.navigationStateRef,
        onNavigationAction: this.onNavigationAction
      }), this.props.onKeyDown) {
        const { mode: r, cell: l } = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getSelectionOptions)(this.props.selectable), a = {
          dataItems: this.getLeafDataItems(),
          mode: r,
          cell: l,
          componentId: this._gridId,
          selectedField: this.props.selectedField,
          ...this.getArguments(e)
        };
        this.props.onKeyDown.call(void 0, a);
      }
    }, this.onFocus = (e) => {
      _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onFocus(e, {
        contextStateRef: this.contextStateRef
      });
    }, this.onNavigationAction = (e) => {
      if (this.props.onNavigationAction) {
        const r = {
          focusElement: e.focusElement,
          ...this.getArguments(e.event)
        };
        this.props.onNavigationAction.call(void 0, r);
      }
    }, this.rowClick = (e, r) => {
      this.props.onRowClick && e.target.nodeName === "TD" && this.props.onRowClick.call(
        void 0,
        {
          dataItem: r.dataItem,
          ...this.getArguments(e)
        }
      );
    }, this.rowDblClick = (e, r) => {
      this.props.onRowDoubleClick && e.target.nodeName === "TD" && this.props.onRowDoubleClick.call(
        void 0,
        {
          dataItem: r.dataItem,
          ...this.getArguments(e)
        }
      );
    }, this.itemChange = (e) => {
      const r = this.props.onItemChange;
      if (e.field === this.props.expandField || this.props.group && e.field === void 0) {
        const l = this.props.onExpandChange;
        l && l.call(
          void 0,
          {
            ...this.getArguments(e.syntheticEvent),
            dataItem: e.dataItem,
            dataIndex: e.dataIndex,
            value: e.value
          }
        );
        return;
      }
      r && r.call(
        void 0,
        {
          ...this.getArguments(e.syntheticEvent),
          dataItem: e.dataItem,
          field: e.field,
          value: e.value
        }
      );
    }, this.onHeaderSelectionChange = (e) => {
      this.props.onHeaderSelectionChange && this.props.onHeaderSelectionChange.call(
        void 0,
        {
          field: e.field,
          nativeEvent: e.syntheticEvent && e.syntheticEvent.nativeEvent,
          syntheticEvent: e.syntheticEvent,
          target: this,
          dataItems: this.getLeafDataItems(),
          selectedField: this.props.selectedField
        }
      );
    }, this.selectionRelease = (e) => {
      if (this.props.onSelectionChange) {
        const r = {
          syntheticEvent: void 0,
          target: this,
          selectedField: this.props.selectedField || "",
          componentId: this._gridId,
          dataItems: this.getLeafDataItems(),
          dataItem: null,
          ...e
        };
        this.props.onSelectionChange.call(void 0, r);
      }
    }, this.pageChange = (e, r, l) => {
      this.raiseDataEvent(
        this.props.onPageChange,
        { page: e },
        { skip: e.skip, take: e.take },
        r,
        l
      );
    }, this.pagerPageChange = (e) => {
      this.pageChange({ skip: e.skip, take: e.take }, e.syntheticEvent, e.targetEvent);
    }, this.sortChange = (e, r) => {
      this.raiseDataEvent(
        this.props.onSortChange,
        { sort: e },
        { sort: e, ...this.props.scrollable === "virtual" ? { skip: 0 } : {} },
        r
      );
    }, this.filterChange = (e, r) => {
      this.raiseDataEvent(
        this.props.onFilterChange,
        { filter: e },
        { filter: e || void 0, skip: 0 },
        r
      );
    }, this.groupChange = (e, r) => {
      const l = r.nativeEvent ? r : { nativeEvent: r.nativeEvent || r.originalEvent };
      this.raiseDataEvent(
        this.props.onGroupChange,
        { group: e },
        { group: e, skip: 0 },
        l
      );
    }, this.onClipboard = (e, r) => {
      if (this.props.onClipboard) {
        if (!this.inActiveElement() || !e)
          return;
        this.props.onClipboard.call(
          void 0,
          {
            type: e,
            nativeEvent: r,
            columns: this._columns,
            dataItemKey: this.props.dataItemKey || "",
            ...typeof this.props.clipboard != "boolean" ? this.props.clipboard : {}
          }
        );
      }
    }, this.inActiveElement = () => {
      var c, h, d;
      if (!_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM)
        return !1;
      const e = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(this.document), r = e ? e.matches(".k-table-td") ? e : (c = this.document) == null ? void 0 : c.body : (h = this.document) == null ? void 0 : h.body, l = r.closest(".k-grid-container"), a = r && ((d = this._element) == null ? void 0 : d.contains(r));
      return !!(r && a && l);
    }, this.onResize = (e, r, l, a, c, h) => {
      this.resetTableWidth(), this._shouldUpdateLeftRight = !0, this._resized = !0, this._columnsMutations++, this.props.onColumnResize && this.props.onColumnResize.call(
        void 0,
        {
          columns: this.columns,
          nativeEvent: a,
          targetColumnId: h,
          index: e,
          newWidth: r,
          oldWidth: l,
          end: c,
          target: this
        }
      );
    }, this.reInitVirtualization = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e, r, l, a, c, h) => {
      this.vs.reset();
      const d = this.getVirtualScroll(this.props);
      this.vs = new d(h);
    }), this.flatData = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e, r, l, a, c, h, d) => {
      const u = [], f = Ot(
        u,
        e,
        r,
        { index: l },
        a !== void 0,
        c
      );
      return { flattedData: u, resolvedGroupsCount: f };
    }), this.rowHeightService = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e, r, l, a, c) => new Et(r, l, a, c)), this.childrenToArray = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(e)), this.readColumns = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)(
      (e, r, l) => {
        const a = e.filter((c) => c && c.type && c.type.displayName === "KendoReactGridColumn");
        return _t(a, this.columns, { prevId: 0, idPrefix: r });
      }
    ), this.mapColumns = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)(
      (e) => (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.mapColumns)(e)
    ), this.configureColumns = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e, r, l) => {
      this.props.selectedField && e.filter((h) => h.field === this.props.selectedField).forEach((h) => {
        h.width = h.width || "50px", h.cell = h.cell || ar, h.headerCell = h.headerCell || Nr;
      });
      const a = {
        id: "",
        resizable: !0,
        width: "32px",
        title: " ",
        declarationIndex: -1,
        orderIndex: -1,
        children: [],
        parentIndex: -1,
        depth: 0,
        colSpan: 0,
        rowSpan: 0,
        left: 0,
        right: 0,
        index: 0,
        rightBorder: !1,
        ariaColumnIndex: 0,
        isAccessible: !0
      };
      let c = 0;
      this.props.expandField && this.props.onExpandChange && this.props.detail && (e.unshift({
        ...a,
        cell: cr,
        field: this.props.expandField,
        headerClassName: "k-hierarchy-cell k-header",
        id: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${this._columns.length}`, l, "column")
      }), c++);
      for (let h = 0; h < r; h++)
        e.unshift({
          ...a,
          isAccessible: !1,
          cell: It,
          field: "value",
          locked: this.props.lockGroups
        }), c++;
      e.slice(c).forEach((h) => h.parentIndex >= 0 && (h.parentIndex += c));
    }), this.getHeaderRow = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.memoizeOne)((e, r, l, a, c, h, d, u, f, g, b, E) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      jt,
      {
        cells: this.props.cells,
        sort: e,
        sortable: r,
        sortChange: this.sortChange,
        group: l || [],
        groupable: a,
        groupChange: this.groupChange,
        filter: c,
        filterable: h,
        filterOperators: d,
        filterChange: this.filterChange,
        columnMenu: f,
        selectionChange: this.onHeaderSelectionChange,
        columns: g,
        columnResize: this.columnResize,
        pressHandler: this.dragLogic.pressHandler,
        dragHandler: this.dragLogic.dragHandler,
        releaseHandler: this.dragLogic.releaseHandler,
        columnsMap: b,
        cellRender: u,
        isRtl: E,
        dragClue: this.dragLogic.dragClueRef,
        headerRef: this.headerElementRef,
        containerRef: this.containerRef
      }
    )), this.resolveTitle = (e) => {
      const r = this._columns.find((a) => a.field === e), l = r && (r.title || r.field);
      return l === void 0 ? e : l;
    }, this.getLeafDataItems = () => this._data.filter((e) => e.rowType === "data").map((e) => e.dataItem), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.validatePackage)(yt), this.showLicenseWatermark = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.shouldShowValidationUI)(yt);
    const s = this.props.groupable === !0 || typeof this.props.groupable == "object" && this.props.groupable.enabled !== !1, o = this.getVirtualScroll(t);
    this.vs = new o(s || t.rowHeight === void 0 || t.rowHeight === 0), this.dragLogic = new wr(
      this.columnReorder.bind(this),
      this.groupReorder.bind(this),
      this.columnToGroup.bind(this)
    ), this.columnResize = new yr(this.onResize), this.props.clipboard && (this.clipboardService = new _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.ClipboardService(this.onClipboard)), _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onConstructor({
      navigatable: !!t.navigatable,
      contextStateRef: this.contextStateRef,
      navigationStateRef: this.navigationStateRef,
      idPrefix: this._gridId
    });
  }
  /* eslint-disable max-len */
  /**
   * A getter of the current columns. Gets the current column width or current columns, or any other [`GridColumnProps`]({% slug api_grid_gridcolumnprops %}) for each defined column. Can be used on each Grid instance. To obtain the instance of the rendered Grid, use the `ref` callback. The following example demonstrates how to reorder the columns by dragging their handlers and check the properties afterwards. You can check the result in the browser console.
   *
   * @example
   * ```jsx
   * class App extends React.Component {
   *     constructor(props) {
   *         super(props);
   *         this.state = {
   *             data: [
   *                 { 'foo': 'A1', 'bar': 'B1' },
   *                 { 'foo': 'A2', 'bar': 'B2' },
   *                 { 'foo': 'A3', 'bar': 'B2' }
   *             ]
   *         };
   *         this.grid = null;
   *     }
   *     render() {
   *         return (
   *             <div>
   *                 <Grid
   *                     data={this.state.data}
   *                     reorderable={true}
   *                     ref={(g) => { this.grid = g; }}
   *                 >
   *                     <GridColumn field="foo" />
   *                     <GridColumn field="bar" />
   *                 </Grid>
   *                 <button onClick={() => console.log(JSON.stringify(this.grid.columns))}>
   *                     log current properties into browser console.
   *                 </button>
   *             </div>
   *         );
   *     }
   * }
   * ReactDOM.render(<App />, document.querySelector('my-app'));
   * ```
   */
  // tslint:enable:max-line-length
  get columns() {
    const t = this._columns.filter((s) => s.declarationIndex >= 0 && s.parentIndex === -1);
    return Pt(t);
  }
  /**
   * Returns the HTML element of the Grid component.
   */
  get element() {
    return this._element;
  }
  get document() {
    if (_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  get _header() {
    return this.headerRef.current;
  }
  get _gridId() {
    return this.props.id + "-role-element-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.resetTableWidth(), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.setScrollbarWidth)();
    const t = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.isRtl)(this.element);
    this.isRtl = t, _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onComponentDidMount({
      scope: this.element || void 0,
      contextStateRef: this.contextStateRef,
      navigationStateRef: this.navigationStateRef
    }), this.isRtl && this.forceUpdate();
    const s = {
      rootMargin: "0px",
      threshold: 0.9
    };
    this.clipboardService && this.clipboardService.addEventListeners(this.document), this.observer = _progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.canUseDOM && window.IntersectionObserver && new window.IntersectionObserver(this.handleIntersection, s) || null;
  }
  /**
   * @hidden
   */
  getSnapshotBeforeUpdate() {
    return _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onGetSnapshotBeforeUpdate({
      document: this.document,
      contextStateRef: this.contextStateRef,
      navigationStateRef: this.navigationStateRef
    }), null;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.resetTableWidth(), (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.setScrollbarWidth)(), this.vs.tableTransform && this.vs.table && (this.vs.table.style.transform = this.vs.tableTransform, this.vs.tableTransform = ""), _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigation.onComponentDidUpdate({
      scope: this.element || void 0,
      contextStateRef: this.contextStateRef,
      navigationStateRef: this.navigationStateRef
    });
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.forceUpdateTimeout), this.clipboardService && this.clipboardService.removeEventListeners(this.document);
  }
  /**
   * @hidden
   */
  render() {
    var lt;
    let t = this.props.total || 0;
    const s = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
    let o = [];
    Array.isArray(this.props.data) ? (o = this.props.data, t = t || this.props.data.length) : this.props.data && (o = this.props.data.data, t = t || this.props.data.total);
    const e = typeof this.props.groupable == "object" && this.props.groupable.footer || "none", { resolvedGroupsCount: r, flattedData: l } = this.flatData(
      o,
      e,
      this.props.skip || 0,
      this.props.group,
      this.props.expandField,
      this.props.filter,
      this.props.sort
    );
    this._data = l;
    const a = this.props.groupable === !0 || typeof this.props.groupable == "object" && this.props.groupable.enabled !== !1;
    this.columnResize.resizable = this.props.resizable || !1, this.dragLogic.reorderable = this.props.reorderable || !1, this.dragLogic.groupable = a;
    const c = this.props.selectable && this.props.selectable.drag ? "none" : void 0;
    this.initializeVirtualization(t, a);
    const h = this.childrenToArray(this.props.children);
    this.initColumns(h, r);
    const d = h.map((m) => m && m.type && m.type.displayName === "KendoReactGridToolbar" ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(m, { ...m.props, ariaControls: this._gridId }) : null), u = h.filter((m) => m && m.type && m.type.displayName === "KendoReactGridNoRecords"), f = h.filter((m) => m && m.type && m.type.displayName === "KendoReactGridStatusBar"), g = this._columns.filter((m) => m.children.length === 0), b = a && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      rs,
      {
        group: this.props.group || [],
        groupChange: this.groupChange,
        pressHandler: this.dragLogic.pressHandler,
        dragHandler: this.dragLogic.dragHandler,
        releaseHandler: this.dragLogic.releaseHandler,
        refCallback: this.dragLogic.refGroupPanelDiv,
        resolveTitle: this.resolveTitle,
        ariaControls: this._gridId,
        onContextMenu: this.onContextMenu
      }
    ), { sort: E, sortable: C, group: x, filter: S, filterable: v, filterOperators: _ = kt, headerCellRender: T, columnMenu: de } = this.props, Y = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      pr,
      {
        size: this.props.size,
        columnResize: this.columnResize,
        staticHeaders: this.props.scrollable !== "none",
        scrollableDataElement: () => this.vs.container,
        draggable: this.props.reorderable || a,
        ref: this.headerRef,
        elemRef: this.headerElementRef,
        headerRow: this.getHeaderRow(
          E,
          C,
          x,
          a,
          S,
          v,
          _,
          T,
          de,
          this._columns,
          this._columnsMap,
          this.isRtl
        ),
        filterRow: this.props.filterable && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          ts,
          {
            cells: this.props.cells,
            size: this.props.size,
            columns: this._columns,
            filter: this.props.filter,
            filterOperators: this.props.filterOperators || kt,
            filterChange: this.filterChange,
            sort: this.props.sort,
            cellRender: this.props.filterCellRender,
            isRtl: this.isRtl,
            ariaRowIndex: this._columnsMap.length + 1
          }
        ) || void 0,
        cols: g.map((m, w) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "col",
          {
            key: w.toString(),
            width: Re(m)
          }
        ))
      }
    ), $ = this.vs && this.vs.container && this.vs.container.scrollLeft || 0, F = parseFloat(((this.props.style || {}).width || "").toString()), { colSpans: ke, hiddenColumns: pe } = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableColumnsVirtualization)({
      enabled: this.props.columnVirtualization,
      columns: g,
      tableViewPortWidth: F,
      scrollLeft: $
    }), Ee = (m, w, R) => {
      let j = !1;
      const V = this.props.selectedField ? M(this.props.selectedField, m.dataItem) : void 0;
      return {
        row: g.map((I, N) => {
          if (pe[N])
            return null;
          const Z = I.id ? I.id : N, ee = `${I.className ? I.className + " " : ""}${I.locked ? "k-grid-content-sticky" : ""}`, P = I.left !== void 0 ? this.isRtl ? { left: I.right, right: I.left } : { left: I.left, right: I.right } : {};
          let A = !1;
          if (I.editable && this.props.editField) {
            const H = M(this.props.editField, m.dataItem);
            H && (H === !0 || H === I.field) && (j = !0, A = !0);
          }
          const ye = I.cell || A && dr || Rr;
          return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            ye,
            {
              onContextMenu: this.onContextMenu,
              key: Z,
              locked: this.props.lockGroups,
              id: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${w}-${String(N)}`, s),
              colSpan: ke[N],
              dataItem: m.dataItem,
              field: I.field,
              editor: I.editor,
              format: I.format,
              className: ee,
              render: this.props.cellRender,
              cells: xe(this.props.cells, I.cells),
              onChange: this.itemChange,
              selectionChange: this.props.onSelectionChange ? (H) => {
                this.selectionChange({ event: H, dataItem: m.dataItem, dataIndex: R, columnIndex: N });
              } : void 0,
              columnIndex: N,
              columnsCount: g.length,
              rowType: m.rowType,
              level: m.level,
              expanded: m.expanded,
              dataIndex: m.dataIndex,
              style: P,
              ariaColumnIndex: I.ariaColumnIndex,
              isSelected: Array.isArray(V) && V.indexOf(N) > -1
            }
          );
        }),
        isInEdit: j,
        isSelected: typeof V == "boolean" && V
      };
    };
    let J = 0;
    if (this.props.scrollable === "virtual")
      for (let m = 0; m < this.vs.topCacheCount + this.vs.attendedSkip - (this.props.skip || 0); m++) {
        const w = this._data.shift();
        if (w)
          this._data.push(w), J++, w.rowType === "groupHeader" && m--;
        else
          break;
      }
    const Qe = (m) => m >= this._data.length - J;
    let Ze = this.vs.realSkip || 0;
    const ue = [];
    let Se = !1;
    const Ie = this._columnsMap.length + (this.props.filterable ? 1 : 0) + 1, et = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "no-records", className: "k-grid-norecords", "aria-rowindex": Ie }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-grid-norecords-template" }, u.length ? u : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ye, null)));
    let Q = 0;
    if (this._data.length) {
      let m = -1, w = 0;
      (this._slicedData || this._data).forEach((R, j) => {
        R.rowType === "data" && (Ze++, m++);
        const V = Ze % 2 === 0, I = this.props.dataItemKey && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(this.props.dataItemKey)(R.dataItem), N = j + (this.vs.realSkip || 0), Z = I || "ai" + N, ee = Z + "_1", P = Ee(R, Z, m);
        if (Q = N + Ie + w, ue.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Fr,
          {
            key: Z,
            dataItem: R.dataItem,
            isAltRow: V,
            isInEdit: P.isInEdit,
            rowType: R.rowType,
            isHidden: Qe(j),
            onClick: (A) => this.rowClick(A, R),
            onDoubleClick: (A) => this.rowDblClick(A, R),
            selectedField: this.props.selectedField,
            rowHeight: this.props.rowHeight,
            render: this.props.rowRender,
            ariaRowIndex: Q,
            absoluteRowIndex: N,
            dataIndex: m,
            isSelected: P.isSelected
          },
          P.row
        )), this.props.detail && R.rowType === "data" && R.expanded) {
          const A = g.length - (this.props.expandField ? 1 : 0) - (this.props.group ? this.props.group.length : 0) || 1;
          w++, Q = N + Ie + w, ue.push(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "tr",
            {
              key: ee,
              className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
                "k-table-row",
                V ? "k-detail-row k-table-alt-row k-alt" : "k-detail-row"
              ),
              style: { visibility: Qe(j) ? "hidden" : "", height: this.props.detailRowHeight },
              role: "row",
              "aria-rowindex": Q
            },
            this.props.group && this.props.group.map((ye, H) => {
              var at;
              const te = (at = P == null ? void 0 : P.row[H]) == null ? void 0 : at.props.style, ms = te ? this.isRtl ? { left: te.right, right: te.left } : { left: te.left, right: te.right } : {};
              return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                It,
                {
                  id: "",
                  dataIndex: R.dataIndex,
                  field: ye.field,
                  dataItem: R.dataItem,
                  key: H,
                  style: ms,
                  ariaColumnIndex: 1 + H,
                  isSelected: !1,
                  locked: this.props.lockGroups,
                  isRtl: this.isRtl,
                  cells: this.props.cells
                }
              );
            }),
            this.props.expandField && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              Hr,
              {
                id: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${ee}-dhcell`, s)
              }
            ),
            /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              Gr,
              {
                onContextMenu: this.onContextMenu,
                dataItem: R.dataItem,
                dataIndex: R.dataIndex,
                colSpan: A,
                ariaColIndex: 2 + (this.props.group ? this.props.group.length : 0),
                detail: this.props.detail,
                id: _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.generateNavigatableId(`${ee}-dcell`, s)
              }
            )
          ));
        }
      });
    } else
      Se = !0;
    const tt = {
      size: this.props.size,
      onPageChange: this.pagerPageChange,
      total: t,
      dir: this.isRtl ? "rtl" : void 0,
      skip: this.vs.propsSkip || 0,
      take: (this.props.take !== void 0 ? this.props.take : this.props.pageSize) || 10,
      messagesMap: lr,
      ...Mr(this.props.pageable || {})
    }, st = this.props.pager ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.pager, { ...tt }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.Pager, { className: "k-grid-pager", ...tt }), gs = (m) => this.props.sort && this.props.sort.filter((w) => w.field === m).length > 0, fs = (m, w) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "col",
      {
        key: w.toString(),
        width: Re(m)
      }
    ), rt = (lt = this.props.cells) != null && lt.footerCell || this._columns.some(
      (m) => {
        var w;
        return !!(m.footerCell || (w = m.cells) != null && w.footerCell);
      }
    ) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      kr,
      {
        size: this.props.size,
        columnResize: this.columnResize,
        staticHeaders: this.props.scrollable !== "none",
        ref: (m) => this._footer = m,
        row: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          Dr,
          {
            cells: this.props.cells,
            columns: this._columns,
            isRtl: this.isRtl,
            ariaRowIndex: Q + 1
          }
        ),
        cols: g.map(fs)
      }
    ) : null, it = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "colgroup",
      {
        ref: (m) => {
          this.columnResize.colGroupMain = m;
        }
      },
      g.map(
        (m, w) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "col",
          {
            key: w.toString(),
            className: gs(m.field) ? "k-sorted" : void 0,
            width: Re(m)
          }
        )
      )
    ), ot = this.dragLogic.reorderable || this.dragLogic.groupable, nt = this.props.columnVirtualization ? "block" : "table";
    if (this.props.scrollable === "none")
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TableKeyboardNavigationContext.Provider, { value: this.contextStateRef.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          id: this.props.id,
          style: this.props.style,
          className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
            "k-grid",
            {
              "k-grid-md": !this.props.size,
              [`k-grid-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
            },
            this.props.className
          ),
          ref: (m) => {
            this._element = m;
          },
          "aria-label": this.props.ariaLabel,
          onKeyDown: this.onKeyDown,
          onFocus: this.onFocus,
          ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationScopeAttributes
        },
        d,
        b,
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TableSelection,
          {
            selectable: this.props.selectable,
            onRelease: this.selectionRelease,
            childRef: (m) => {
              this.tableElement = m;
            }
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "table",
            {
              className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
                "k-table k-grid-table",
                { [`k-table-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size }
              ),
              style: { userSelect: c, display: nt }
            },
            it,
            Y,
            /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { role: "rowgroup", className: "k-table-tbody", ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationBodyAttributes }, ue),
            rt
          )
        ),
        Se && et,
        ot && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.DropClue, { ref: this.dragLogic.refDropElementClue }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.DragClue, { ref: this.dragLogic.refDragElementClue }))
      ), f, this.props.pageable && st);
    let ge = this.props.style || {};
    return this.props.scrollable === "virtual" && (ge.height || (ge = Object.assign({}, ge, { height: "450px" }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TableKeyboardNavigationContext.Provider, { value: this.contextStateRef.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        style: ge,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-grid",
          {
            "k-grid-md": !this.props.size,
            [`k-grid-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size,
            "k-grid-virtual": this.props.scrollable === "virtual"
          },
          this.props.className
        ),
        ref: (m) => {
          this._element = m;
        },
        "aria-label": this.props.ariaLabel,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationScopeAttributes
      },
      d,
      b,
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "div",
        {
          className: "k-grid-aria-root",
          role: "grid",
          "aria-colcount": g.length,
          "aria-rowcount": t,
          id: this._gridId
        },
        Y,
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-grid-container", role: "presentation" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "div",
          {
            ref: this.containerRef,
            className: "k-grid-content k-virtual-content",
            onScroll: this.scrollHandler,
            role: "presentation"
          },
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-grid-table-wrap", role: "presentation" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TableSelection,
            {
              selectable: this.props.selectable,
              onRelease: this.selectionRelease,
              childRef: (m) => {
                this.tableElement = m;
              }
            },
            /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              "table",
              {
                className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
                  "k-table k-grid-table",
                  {
                    "k-table-md": !this.props.size,
                    [`k-table-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
                  }
                ),
                role: "presentation",
                style: { userSelect: c, display: nt }
              },
              it,
              /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                "tbody",
                {
                  className: "k-table-tbody",
                  ref: this.tableBodyRef,
                  role: "rowgroup",
                  ..._progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationBodyAttributes
                },
                ue
              )
            )
          ), Se && et),
          /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-height-container", role: "presentation" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "div",
            {
              style: this.props.scrollable === "virtual" ? { height: this.vs.containerHeight + "px" } : {}
            }
          ))
        )),
        rt,
        ot && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.DropClue, { ref: this.dragLogic.refDropElementClue }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.DragClue, { ref: this.dragLogic.refDragElementClue })),
        this.showLicenseWatermark && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.WatermarkOverlay, null)
      ),
      f,
      this.props.pageable && st
    ));
  }
  selectionChange(t) {
    if (this.props.onSelectionChange) {
      const { event: s, dataItem: o, dataIndex: e, columnIndex: r } = t, { mode: l, cell: a } = (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.getSelectionOptions)(this.props.selectable), c = {
        ...this.getArguments(s.syntheticEvent),
        dataItem: o,
        startColIndex: r,
        endColIndex: r,
        startRowIndex: e,
        endRowIndex: e,
        dataItems: this.getLeafDataItems(),
        altKey: !1,
        ctrlKey: !1,
        shiftKey: !1,
        metaKey: !1,
        mode: l,
        cell: a,
        isDrag: !1,
        componentId: this._gridId,
        selectedField: this.props.selectedField || ""
      };
      this.props.onSelectionChange.call(void 0, c);
    }
  }
  raiseDataEvent(t, s, o, e, r) {
    const l = this.props.onDataStateChange;
    if (t) {
      const a = { ...this.getArguments(e), ...s, targetEvent: r };
      t.call(void 0, a);
    } else
      l && l.call(
        void 0,
        {
          ...this.getArguments(e),
          targetEvent: r || {},
          dataState: {
            ...this.getDataState(),
            ...o
          }
        }
      );
  }
  columnReorder(t, s, o) {
    const e = this._columns[t], r = e.depth, l = (d) => {
      do
        d++;
      while (d < this._columns.length && this._columns[d].depth > r);
      return d;
    }, a = this._columns.splice(t, l(t) - t);
    this._columns.splice(t < s ? l(s - a.length) : s, 0, ...a), this._columns.filter((d) => d.declarationIndex >= 0).forEach((d, u) => d.orderIndex = u), this._columnsMutations++;
    const c = this._columns[t].locked && this._columns[s].locked;
    (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.updateLeft)(this._columnsMap, this._columns, c || this._shouldUpdateLeftRight), (0,_progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.updateRight)(this._columnsMap, this._columns, c || this._shouldUpdateLeftRight), this._resized && (this._shouldUpdateLeftRight = !1, this._resized = !1);
    const h = this.columns;
    if (this.forceUpdate(), this.props.onColumnReorder) {
      const d = {
        target: this,
        columns: h,
        columnId: e.id,
        nativeEvent: o
      };
      this.props.onColumnReorder.call(void 0, d);
    }
  }
  groupReorder(t, s, o) {
    if (this.props.group === void 0)
      return;
    const e = this.props.group.slice();
    e.splice(s, 0, ...e.splice(t, 1)), this.groupChange(e, o);
  }
  columnToGroup(t, s, o) {
    const e = this._columns[t].field;
    if (!e)
      return;
    const r = (this.props.group || []).slice();
    r.splice(s, 0, { field: e }), this.groupChange(r, o);
  }
  resetTableWidth() {
    let t = 0;
    if (!this.columnResize.colGroupMain)
      return;
    const s = this.columnResize.colGroupMain.children;
    for (let o = 0; o < s.length; o++) {
      const e = s[o].width;
      if (!e)
        return;
      t += parseFloat(e.toString());
    }
    t = Math.round(t), this._header && this._header.setWidth(t), this._footer && this._footer.setWidth(t), this.tableElement && (this.tableElement.style.width = t + "px");
  }
  initColumns(t, s) {
    const o = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
    this._columns = this.readColumns(t, o, this._columnsMutations), this._columns.length === 0 && (this._columns = js(this.props.data, this.props.group, this.props.expandField, { prevId: 0, idPrefix: o })), this.configureColumns(this._columns, s, o), this._columnsMap = this.mapColumns(this._columns), this.columnResize.columns = this._columns, this.dragLogic.columns = this._columns;
  }
  getDataState() {
    return {
      filter: this.props.filter,
      sort: this.props.sort,
      skip: this.props.skip,
      take: this.props.take !== void 0 ? this.props.take : this.props.pageSize,
      group: this.props.group
    };
  }
  getArguments(t) {
    return {
      nativeEvent: t && t.nativeEvent,
      syntheticEvent: t,
      target: this
    };
  }
};
he.displayName = "KendoReactGrid";
he.defaultProps = {
  // never use this
};
he.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      data: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
      total: prop_types__WEBPACK_IMPORTED_MODULE_1__.number
    })
  ]),
  sortable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      mode: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["single", "multiple"]),
      allowUnsort: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
    })
  ]),
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1__.array,
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  pageable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      buttonCount: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
      responsive: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
      info: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
      type: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["numeric", "input"]),
      pageSizes: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType(
        [
          prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
          prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
            prop_types__WEBPACK_IMPORTED_MODULE_1__.number
          ]))
        ]
      ),
      previousNext: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool
    })
  ]),
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  skip: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  take: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  fixedScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  onExpandChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  expandField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  selectedField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onHeaderSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  reorderable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  groupable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType([
    prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
    prop_types__WEBPACK_IMPORTED_MODULE_1__.shape({
      enabled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
      footer: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["always", "visible", "none"])
    })
  ]),
  onGroupChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onRowDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onItemChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  editField: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  scrollable: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["none", "scrollable", "virtual"]),
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  detailRowHeight: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  detail: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  onDataStateChange: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onColumnResize: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onColumnReorder: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  dataItemKey: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  navigatable: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOf(["small", "medium"])
};
he.contextType = _progress_kendo_react_data_tools__WEBPACK_IMPORTED_MODULE_3__.TableKeyboardNavigationContext;
class ve extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    const { children: t } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-columnmenu-item-wrapper", this.props.className),
        style: this.props.style
      },
      t
    );
  }
}
class ae extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    const { title: t, iconClass: s, svgIcon: o, selected: e } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onClick: this.props.onClick, className: `k-columnmenu-item ${e ? "k-selected" : ""}` }, (s || o) && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: s && (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.toIconName)(s), icon: o }), t);
  }
}
class os extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onGroupClick = (t) => {
      if (t.preventDefault(), this.props.onGroupChange) {
        const { column: s } = this.props;
        if (!s.field)
          return;
        const o = (this.props.group || []).slice(), e = o.findIndex((r) => r.field === s.field);
        e > -1 ? o.splice(e, 1) : o.push({
          field: s.field
        }), this.props.onGroupChange(o, t);
      }
      this.props.onCloseMenu && this.props.onCloseMenu();
    };
  }
  /**
   * @hidden
   */
  render() {
    const { group: t, column: s } = this.props, o = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), e = !!(t && s.field && t.find((l) => l.field === s.field)), r = e ? Bt : At;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ve, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ae,
      {
        title: o.toLanguageString(r, k[r]),
        iconClass: e ? "k-i-ungroup" : "k-i-group",
        svgIcon: e ? _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.ungroupIcon : _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.groupIcon,
        onClick: this.onGroupClick
      }
    ));
  }
}
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForIntl)(os);
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(os);
const ns = "asc", ls = "desc", zr = {
  true: {
    asc: { asc: "", desc: "desc" },
    desc: { asc: "asc", desc: "" },
    "": { asc: "asc", desc: "desc" }
  },
  false: {
    asc: { asc: "asc", desc: "desc" },
    desc: { asc: "asc", desc: "desc" },
    "": { asc: "asc", desc: "desc" }
  }
}, as = (i, t) => t ? t.findIndex((s) => s.field === i) : -1, cs = (i, t) => !!(t && i > -1 && t[i].dir === ns), hs = (i, t) => !!(t && i > -1 && t[i].dir === ls);
class Je extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments), this.onAscClick = (t) => {
      this.onSort(t, ns), this.props.onCloseMenu && this.props.onCloseMenu();
    }, this.onDescClick = (t) => {
      this.onSort(t, ls), this.props.onCloseMenu && this.props.onCloseMenu();
    }, this.onSort = (t, s) => {
      if (t.preventDefault(), !this.props.onSortChange)
        return;
      const { column: o, sortable: e, sort: r } = this.props, { allowUnsort: l, mode: a } = qt(e || !1, !1), c = (r || []).filter((u) => u.field === o.field)[0], h = zr[l][c && c.dir || ""][s], d = a === "single" ? [] : (this.props.sort || []).filter((u) => u.field !== o.field);
      h !== "" && o.field && d.push({ field: o.field, dir: h }), this.props.onSortChange(d, t);
    };
  }
  /**
   * @hidden
   */
  render() {
    const { sort: t, column: s } = this.props, o = as(s.field, t), e = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ve, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ae,
      {
        title: e.toLanguageString(He, k[He]),
        iconClass: "k-i-sort-asc-sm",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortAscSmallIcon,
        selected: cs(o, t),
        onClick: this.onAscClick
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ae,
      {
        title: e.toLanguageString(ze, k[ze]),
        iconClass: "k-i-sort-desc-sm",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.sortDescSmallIcon,
        selected: hs(o, t),
        onClick: this.onDescClick
      }
    ));
  }
}
Je.active = (i, t) => {
  const s = as(i, t);
  return hs(s, t) || cs(s, t);
};
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForIntl)(Je);
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(Je);
class ds extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        id: this.props.id,
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)("k-columnmenu-item-content", this.props.className),
        style: this.props.style
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_animation__WEBPACK_IMPORTED_MODULE_12__/* .Reveal */ .gN, { style: { position: "relative", display: "block" } }, this.props.show ? this.props.children : null)
    );
  }
}
class wt extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this.renderOperatorEditor = () => {
      if (this.props.filterType === "boolean")
        return;
      const s = this.props.operators.find((o) => o.operator === this.props.operator) || null;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__.DropDownList,
        {
          value: s,
          onChange: this.operatorChange,
          data: this.props.operators,
          textField: "text"
        }
      );
    }, this.inputChange = this.inputChange.bind(this), this.operatorChange = this.operatorChange.bind(this), this.boolDropdownChange = this.boolDropdownChange.bind(this);
  }
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderOperatorEditor(), this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues));
  }
  inputChange(t, s) {
    Yt(t, s, this.props);
  }
  operatorChange(t) {
    Zt(t, this.props.value, this.props.onChange);
  }
  boolDropdownChange(t) {
    Qt(t, this.props.onChange);
  }
  filterComponent(t, s, o) {
    switch (t) {
      case "numeric":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.NumericTextBox,
          {
            value: s,
            onChange: (e) => {
              this.inputChange(e.value, e.syntheticEvent);
            },
            rangeOnEnter: !1
          }
        );
      case "date":
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_dateinputs__WEBPACK_IMPORTED_MODULE_7__.DatePicker,
          {
            value: s,
            onChange: (e) => {
              this.inputChange(e.value, e.syntheticEvent);
            }
          }
        );
      case "boolean": {
        const e = (r) => r == null;
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__.DropDownList,
          {
            onChange: this.boolDropdownChange,
            value: o.find((r) => r.operator === (e(s) ? "" : s)),
            data: o,
            textField: "text"
          }
        );
      }
      default:
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Input,
          {
            value: s || "",
            onChange: (e) => {
              this.inputChange(e.target.value, e.syntheticEvent);
            }
          }
        );
    }
  }
}
class Lr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      firstFilterProps: t,
      hideSecondFilter: s,
      secondFilterProps: o,
      logicData: e,
      logicValue: r,
      onLogicChange: l
    } = this.props;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(wt, { ...t }), !s && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_dropdowns__WEBPACK_IMPORTED_MODULE_10__.DropDownList,
      {
        data: e,
        value: r,
        onChange: l,
        className: "k-filter-and",
        textField: "text"
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(wt, { ...o })));
  }
}
const Ke = (i) => i || { filters: [], logic: "and" }, fe = (i, t) => Ke(t).filters.filter((e) => (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__/* .isCompositeFilterDescriptor */ .HG)(e) ? e.filters && e.filters.length && e.filters.length <= 2 && !e.filters.find((r) => (0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__/* .isCompositeFilterDescriptor */ .HG)(r) || r.field !== i) : !1)[0] || null;
class ps extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this.removeGroup = (o, e) => {
      const r = [...e.filters], l = r.findIndex((a) => a === o);
      return l > -1 && r.splice(l, 1), {
        ...e,
        filters: r
      };
    }, this.insertGroup = (o, e) => ({
      ...e,
      filters: [
        o,
        ...e.filters
      ]
    }), this.isControlled = () => this.props.expanded !== void 0, this.onFilterExpand = () => {
      const o = this.isControlled(), e = !(o ? this.props.expanded : this.state.expanded);
      this.props.onExpandChange && this.props.onExpandChange(e), o || this.setState({
        expanded: e
      });
    }, this.firstFilterChange = (o) => {
      this.filterChange(0, o);
    }, this.secondFilterChange = (o) => {
      this.filterChange(1, o);
    }, this.filterChange = (o, e) => {
      const r = this.state.filterGroup.filters.map((l, a) => a === o ? {
        ...l,
        value: e.value,
        operator: e.operator
      } : l);
      this.setState({
        filterGroup: {
          ...this.state.filterGroup,
          filters: r
        }
      });
    }, this.logicChange = (o) => {
      this.setState({
        filterGroup: {
          ...this.state.filterGroup,
          logic: o.target.value.operator
        }
      });
    }, this.clear = (o) => {
      if (o.preventDefault(), !this.props.onFilterChange)
        return;
      const e = this.props.column.field, r = Ke(this.props.filter), l = fe(e, this.props.filter), a = r.filters.filter((c) => c !== l);
      a.length ? this.props.onFilterChange({ ...r, filters: a }, o) : this.props.onFilterChange(null, o), this.props.onCloseMenu && this.props.onCloseMenu();
    }, this.currentFilterGroup = () => ({
      ...this.state.filterGroup,
      filters: this.state.filterGroup.filters.filter((o) => o.value !== void 0 && o.value !== null && o.value !== "" || o.value === null && o.operator)
    }), this.submit = (o) => {
      if (o.preventDefault(), !this.props.onFilterChange)
        return;
      const e = this.props.column.field, r = Ke(this.props.filter), l = fe(e, this.props.filter), a = this.currentFilterGroup();
      let c = null;
      if (l && a.filters.length > 0) {
        const h = r.filters.map((d) => d === l ? a : d);
        c = {
          ...r,
          filters: h
        };
      } else if (a.filters.length === 0) {
        const h = r.filters.filter((d) => d !== l);
        h.length && (c = {
          ...r,
          filters: h
        });
      } else
        c = {
          ...r,
          filters: [...r.filters, a]
        };
      this.props.onFilterChange(c, o), this.props.onCloseMenu && this.props.onCloseMenu();
    };
    let s;
    if (t.column && t.column.field) {
      const o = Ve(t.column.filter), e = Jt(t.filterOperators, o);
      s = fe(t.column.field, t.filter), s = s ? {
        ...s,
        filters: s.filters.map((r) => ({ ...r }))
      } : {
        logic: "and",
        filters: [
          { field: t.column.field, operator: e, value: L(e) ? null : void 0 },
          { field: t.column.field, operator: e, value: L(e) ? null : void 0 }
        ]
      }, s.filters.filter((r) => r.field === t.column.field).length === 1 && s.filters.splice(1, 0, { field: t.column.field, operator: e });
    }
    this.state = {
      expanded: t.expanded || !1,
      filterGroup: s
    };
  }
  /**
   * @hidden
   */
  render() {
    const { column: t, filterUI: s, hideSecondFilter: o, filterOperators: e } = this.props;
    if (!t || !t.field)
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    const r = Ve(t.filter), l = o !== void 0 ? o : xr[r], a = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), c = this.state.filterGroup.filters, h = re(e[r], a), d = re(Xt, a), u = {
      field: t.field,
      value: c[0].value,
      operator: c[0].operator,
      operators: h,
      booleanValues: d,
      onChange: this.firstFilterChange,
      filterType: r
    }, f = {
      field: t.field,
      value: c[1].value,
      operator: c[1].operator,
      operators: h,
      booleanValues: d,
      onChange: this.secondFilterChange,
      filterType: r
    }, g = this.state.filterGroup.logic, b = re(Cr, a), E = {
      value: b.find((T) => T.operator === (g === null ? "" : g)),
      onChange: this.logicChange,
      data: b
    }, C = s, x = {
      firstFilterProps: u,
      secondFilterProps: f,
      logicData: E.data,
      logicValue: E.value,
      onLogicChange: E.onChange,
      hideSecondFilter: l
    }, S = this.currentFilterGroup().filters.length !== 0 || L(c[0].operator) || L(c[1].operator), v = this.isControlled() ? this.props.expanded : this.state.expanded, _ = this.props.alwaysExpand;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ve, null, !_ && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ae,
      {
        title: a.toLanguageString(ne, k[ne]),
        iconClass: "k-i-filter",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.filterIcon,
        onClick: this.onFilterExpand
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ds, { show: _ || !!v }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "form",
      {
        className: "k-filter-menu",
        onSubmit: this.submit,
        onReset: this.clear,
        onKeyDown: (T) => T.stopPropagation()
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filter-menu-container" }, C ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(C, { ...x }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Lr, { ...x }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
        {
          themeColor: "primary",
          disabled: !S
        },
        a.toLanguageString(oe, k[oe])
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
        {
          type: "reset"
        },
        a.toLanguageString(U, k[U])
      )))
    )));
  }
}
ps.active = (i, t) => !!fe(i, t);
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(ps);
const Or = (i, t) => i.length !== t.length ? !1 : i.every((s, o) => s === t[o]);
class us extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(t) {
    super(t), this.defaultFilter = () => this.props.filter ? (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.clone)(this.props.filter) : { filters: [], logic: "and" }, this.isControlled = () => this.props.expanded !== void 0, this.parseData = (s, o) => {
      const e = this.props.column.field || "", r = s.map((l) => M(e, l));
      return o ? r.filter((l, a) => r.indexOf(l) === a) : r;
    }, this.getFilterIndex = () => {
      const s = this.props.column.field;
      return this.defaultFilter().filters.findIndex((r) => r.filters && r.filters.length > 0 && r.filters[0].field === s);
    }, this.onFilterExpand = () => {
      const s = this.isControlled(), o = !(s ? this.props.expanded : this.state.expanded);
      this.props.onExpandChange && this.props.onExpandChange(o), s || this.setState({
        expanded: o
      });
    }, this.handleSearchChange = (s) => {
      const o = this.props.searchBoxFilterOperator ? this.props.searchBoxFilterOperator : "startswith", e = {
        logic: "and",
        filters: [
          { field: this.props.column.field, operator: o, value: s.target.value, ignoreCase: !0 }
        ]
      };
      this.setState({
        value: s.target.value,
        data: this.parseData((0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__/* .filterBy */ .WP)(this.props.data || [], e), this.props.uniqueData)
      });
    }, this.handleClear = () => {
      const s = this.props.searchBoxFilterOperator ? this.props.searchBoxFilterOperator : "startswith", o = {
        logic: "and",
        filters: [
          { field: this.props.column.field, operator: s, value: "", ignoreCase: !0 }
        ]
      };
      this.setState({
        value: "",
        data: this.parseData((0,_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__/* .filterBy */ .WP)(this.props.data || [], o), this.props.uniqueData)
      });
    }, this.clear = (s) => {
      if (s.preventDefault(), !this.props.onFilterChange)
        return;
      const o = this.state.currentFilter || null;
      o !== null && o.filters.length > 0 ? (this.compositeFilterIndex >= 0 && o.filters.splice(this.compositeFilterIndex, 1), this.props.onFilterChange(o, s)) : this.props.onFilterChange(null, s), this.props.onCloseMenu && this.props.onCloseMenu();
    }, this.submit = (s) => {
      if (s.preventDefault(), !this.props.onFilterChange)
        return;
      const o = this.state.currentFilter || null;
      this.props.onFilterChange(o, s), this.props.onCloseMenu && this.props.onCloseMenu();
    }, this.handleCheckBoxChange = (s, o) => {
      const e = this.props.column.field || "", r = { ...this.state.currentFilter }, l = [...this.state.currentFilter.filters];
      let a = [];
      if (this.compositeFilterIndex !== -1 && r.filters[this.compositeFilterIndex].filters && o !== "all" && (a = r.filters[this.compositeFilterIndex].filters), s.value && o === "all")
        this.state.data.forEach((c) => {
          a.push({ field: e, operator: "eq", value: c });
        });
      else if (s.value)
        a.push({ field: e, operator: "eq", value: o });
      else if (this.state.currentFilter) {
        const c = a.findIndex((h) => h.value === o);
        a.splice(c, 1);
      }
      r.logic = "and", this.compositeFilterIndex !== -1 ? l[this.compositeFilterIndex] = {
        logic: "or",
        filters: a
      } : l.push({
        logic: "or",
        filters: a
      }), (!s.value && o === "all" || a.length === 0) && l.splice(this.compositeFilterIndex, 1), r.filters = l, this.setState({ currentFilter: r });
    }, this.isAllSelected = () => {
      let s = !1;
      if (this.state.currentFilter) {
        const o = [...this.state.currentFilter.filters];
        return this.compositeFilterIndex === -1 ? !1 : (s = this.state.data.every((e) => this.compositeFilterIndex !== -1 && o[this.compositeFilterIndex].filters ? o[this.compositeFilterIndex].filters.findIndex((l) => l.value === e) >= 0 : !1), s);
      }
      return s;
    }, this.compositeFilterIndex = this.getFilterIndex(), this.state = {
      expanded: t.expanded || !1,
      value: "",
      data: this.parseData(this.props.data, this.props.uniqueData) || [],
      dataFromProps: this.parseData(this.props.data, !1) || [],
      currentFilter: this.defaultFilter()
    };
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const t = this.props.column.field || "", s = this.props.data.map((o) => M(t, o));
    Or(s, this.state.dataFromProps) || this.setState({
      data: s,
      dataFromProps: s
    });
  }
  /**
   * @hidden
   */
  render() {
    const { column: t } = this.props;
    if (!t || !t.field)
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    const s = (0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.provideLocalizationService)(this), o = this.isControlled() ? this.props.expanded : this.state.expanded, e = [];
    if (this.state.currentFilter) {
      const a = [...this.state.currentFilter.filters];
      this.compositeFilterIndex = a.findIndex((c) => c.filters && c.filters.length > 0 ? c.filters[0].field === t.field : !1), this.compositeFilterIndex !== -1 && a[this.compositeFilterIndex].filters.length > 0 && a[this.compositeFilterIndex].filters.forEach((c) => {
        c.field === this.props.column.field && e.push(c.value);
      });
    }
    const r = this.props.searchBox ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.searchBox, { value: this.state.value, onChange: this.handleSearchChange }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-searchbox k-textbox k-input k-input-md k-input-solid" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { className: "k-input-icon", name: "search", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.searchIcon }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        className: "k-input-inner",
        type: "text",
        placeholder: s.toLanguageString(Le, k[Le]),
        value: this.state.value,
        onChange: (a) => this.handleSearchChange(a.nativeEvent)
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
      {
        type: "button",
        rounded: null,
        className: "k-input-button",
        onClick: this.handleClear,
        icon: "x",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.xIcon
      }
    )), l = e.filter((a, c) => e.indexOf(a) === c);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ve, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      ae,
      {
        title: s.toLanguageString(ne, k[ne]),
        iconClass: "k-i-filter",
        svgIcon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.filterIcon,
        onClick: this.onFilterExpand
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ds, { show: !!o }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "form",
      {
        className: "k-filter-menu",
        onSubmit: this.submit,
        onReset: this.clear
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filter-menu-container" }, r, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "k-reset k-multicheck-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "k-item k-check-all-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
        {
          label: s.toLanguageString(Oe, k[Oe]),
          onChange: (a) => this.handleCheckBoxChange(a, "all"),
          checked: this.isAllSelected()
        }
      )), this.state.data.map((a, c) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "k-item", key: c }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
        {
          label: String(a),
          onChange: (h) => this.handleCheckBoxChange(h, a),
          checked: l.includes(a)
        }
      )))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filter-selected-items" }, l.length + " " + s.toLanguageString(Pe, k[Pe])), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actions k-hstack k-justify-content-stretch" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
        {
          themeColor: "primary",
          type: "submit"
        },
        s.toLanguageString(oe, k[oe])
      ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button,
        {
          className: "k-button",
          type: "reset"
        },
        s.toLanguageString(U, k[U])
      )))
    )));
  }
}
us.defaultProps = {
  uniqueData: !0
};
(0,_progress_kendo_react_intl__WEBPACK_IMPORTED_MODULE_4__.registerForLocalization)(us);
const _r = (i) => {
  const [t, s] = react__WEBPACK_IMPORTED_MODULE_0__.useState(""), o = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => new Set(i.columnsState.map((g) => g.id)), [i.columnsState]), e = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => i.columns.filter((g) => {
    var b;
    return (b = g.title || g.field) == null ? void 0 : b.toLowerCase().includes(t.toLowerCase());
  }), [i.columns, t]), [r, l] = react__WEBPACK_IMPORTED_MODULE_0__.useState(i.columns.map((g) => o.has(g.id))), a = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    const g = i.columns.filter((b, E) => r[E]);
    i.onColumnsChange.call(void 0, g), i.onCloseMenu.call(void 0);
  }, [r, i.columns, i.onColumnsChange, i.onCloseMenu]), c = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    l(i.columns.map((g) => o.has(g.id)));
  }, [o, i.columns]), h = r.filter((g) => g).length, d = h === r.length, u = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    l(i.columns.map((g, b) => d && b === 0 ? !0 : !d));
  }, [i.columns, d]), f = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((g, b) => {
    const E = r.slice();
    E[b] = g, l(E);
  }, [r]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { className: "k-filter-menu" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filter-menu-container" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.TextBox,
    {
      className: "k-searchbox",
      value: t,
      onChange: (g) => s(String(g.target.value)),
      prefix: () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.InputPrefix, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.IconWrap, { name: "search", icon: _progress_kendo_svg_icons__WEBPACK_IMPORTED_MODULE_5__.searchIcon }))
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "k-reset k-multicheck-wrap" }, !t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "k-item k-check-all-wrap" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
    {
      checked: d,
      onChange: u,
      label: "(Select all)"
    }
  )), e.map((g, b) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: g.id, className: "k-item" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _progress_kendo_react_inputs__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
    {
      disabled: r[b] && h === 1,
      checked: r[b],
      onChange: (E) => {
        var C;
        return f(!!((C = E.target.element) != null && C.checked), b);
      },
      label: g.title || g.field
    }
  )))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-filter-selected-items" }, h, " selected items"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-actions k-actions-start k-actions-horizontal" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button, { type: "button", themeColor: "primary", onClick: a }, "Apply"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress_kendo_react_buttons__WEBPACK_IMPORTED_MODULE_9__.Button, { type: "button", onClick: c }, "Reset"))));
};
_r.displayName = "GridColumnMenuColumnsList";
class ri extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return null;
  }
}
class Pr extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  /**
   * @hidden
   */
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.classNames)(
          "k-toolbar k-grid-toolbar",
          {
            "k-toolbar-md": !this.props.size,
            [`k-toolbar-${_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.kendoThemeMaps.sizeMap[this.props.size] || this.props.size}`]: this.props.size
          },
          this.props.className
        ),
        "aria-label": this.props.ariaLabel,
        "aria-controls": this.props.ariaControls,
        role: "toolbar"
      },
      this.props.children
    );
  }
}
Pr.displayName = "KendoReactGridToolbar";
const Ar = (i) => {
  const { data: t = [] } = i;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "k-selection-aggregates k-grid-selection-aggregates" }, t.map((s, o) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: o }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-selection-aggregates-item-text" }, s.type, ": "), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "k-selection-aggregates-item-value" }, s.formattedValue))));
};
Ar.displayName = "KendoReactGridStatusBar";
const Br = (i) => {
  var s;
  const t = i.slice();
  for (let o = 0; o < t.length; o++)
    for (; t[o] && ((s = t[o].children) != null && s.length); )
      t.splice(o, 1, ...t[o].children);
  return t;
}, ii = (i) => {
  const { dataItems: t, target: s, selectedField: o } = i, r = Br(s.columns).map((C) => C.field).filter((C) => C && typeof C == "string").map((C) => (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(C)), l = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.getter)(o), a = { dates: [], numbers: [], booleans: [], others: [] }, c = (C) => {
    typeof C == "number" ? a.numbers.push(C) : typeof C == "boolean" ? a.booleans.push(C) : C instanceof Date ? a.dates.push(C) : a.others.push(C);
  };
  t.forEach((C) => {
    const x = l(C);
    x && x.forEach((S) => {
      c(r[S](C));
    });
  });
  const h = a.dates.map((C) => C.getTime()), d = a.booleans.filter((C) => C).length, u = a.booleans.filter((C) => !C).length, f = a.numbers.length ? a.numbers.reduce((C, x) => C += x, 0) : void 0, g = {
    sum: f,
    average: typeof f == "number" ? f / a.numbers.length : void 0,
    min: a.numbers.length ? Math.min(...a.numbers) : void 0,
    max: a.numbers.length ? Math.max(...a.numbers) : void 0,
    count: a.numbers.length + a.booleans.length + a.dates.length + a.others.length,
    isTrue: d > 0 ? d : void 0,
    isFalse: u > 0 ? u : void 0,
    earliest: a.dates.length ? new Date(Math.min(...h)) : void 0,
    latest: a.dates.length ? new Date(Math.max(...h)) : void 0
  }, b = (C, x) => (x === "sum" || x === "average") && typeof C == "number" ? C.toFixed(2) : (x === "earliest" || x === "latest") && C instanceof Date ? C.toLocaleDateString() : String(C), E = [];
  return Object.keys(g).forEach((C) => {
    const x = C, S = g[x];
    S !== void 0 && E.push({ type: x, value: S, formattedValue: b(S, x) });
  }), E;
}, Wr = (0,_progress_kendo_react_common__WEBPACK_IMPORTED_MODULE_2__.withIdHOC)(he);
Wr.displayName = "KendoReactGrid";



/***/ }

}]);