"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[6542],{

/***/ 16542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GRID_COL_INDEX_ATTRIBUTE: () => (/* reexport */ GRID_COL_INDEX_ATTRIBUTE),
  GRID_ROW_INDEX_ATTRIBUTE: () => (/* reexport */ GRID_ROW_INDEX_ATTRIBUTE),
  Grid: () => (/* reexport */ Grid),
  GridCell: () => (/* reexport */ GridCell),
  GridColumn: () => (/* reexport */ GridColumn),
  GridColumnMenuCheckboxFilter: () => (/* reexport */ GridColumnMenuCheckboxFilter),
  GridColumnMenuColumnsList: () => (/* reexport */ GridColumnMenuColumnsList),
  GridColumnMenuFilter: () => (/* reexport */ GridColumnMenuFilter),
  GridColumnMenuFilterCell: () => (/* reexport */ GridColumnMenuFilterCell),
  GridColumnMenuFilterUI: () => (/* reexport */ GridColumnMenuFilterUI),
  GridColumnMenuGroup: () => (/* reexport */ GridColumnMenuGroup),
  GridColumnMenuItem: () => (/* reexport */ GridColumnMenuItem),
  GridColumnMenuItemContent: () => (/* reexport */ GridColumnMenuItemContent),
  GridColumnMenuItemGroup: () => (/* reexport */ GridColumnMenuItemGroup),
  GridColumnMenuSort: () => (/* reexport */ GridColumnMenuSort),
  GridColumnMenuWrapper: () => (/* reexport */ GridColumnMenuWrapper),
  GridCommonDragLogic: () => (/* reexport */ CommonDragLogic),
  GridDetailRow: () => (/* reexport */ GridDetailRow),
  GridEditCell: () => (/* reexport */ GridEditCell),
  GridFilterCell: () => (/* reexport */ GridFilterCell),
  GridGroupCell: () => (/* reexport */ GridGroupCell),
  GridHeaderCell: () => (/* reexport */ GridHeaderCell),
  GridHierarchyCell: () => (/* reexport */ GridHierarchyCell),
  GridNoRecords: () => (/* reexport */ GridNoRecords),
  GridRow: () => (/* reexport */ GridRow),
  GridSelectionCell: () => (/* reexport */ GridSelectionCell),
  GridToolbar: () => (/* reexport */ GridToolbar),
  StatusBar: () => (/* reexport */ StatusBar),
  booleanFilterValues: () => (/* reexport */ booleanFilterValues),
  filterGroupByField: () => (/* reexport */ filterGroupByField),
  getSelectedState: () => (/* reexport */ index_mjs_.getSelectedState),
  getSelectedStateFromKeyDown: () => (/* reexport */ index_mjs_.getSelectedStateFromKeyDown),
  getStatusData: () => (/* reexport */ getStatusData),
  gridMessages: () => (/* reexport */ messages),
  leafColumns: () => (/* reexport */ leafColumns),
  operators: () => (/* reexport */ operators),
  pagerFirstPage: () => (/* reexport */ pagerFirstPage),
  pagerInfo: () => (/* reexport */ pagerInfo),
  pagerItemPerPage: () => (/* reexport */ pagerItemPerPage),
  pagerLastPage: () => (/* reexport */ pagerLastPage),
  pagerNextPage: () => (/* reexport */ pagerNextPage),
  pagerPreviousPage: () => (/* reexport */ pagerPreviousPage),
  rootFilterOrDefault: () => (/* reexport */ rootFilterOrDefault),
  setSelectedState: () => (/* reexport */ index_mjs_.setSelectedState)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(76034);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-data-tools@^5.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-data-tools@7.4.0_cc99e4824b79f4bbc9428309d51ff100/node_modules/@progress/kendo-react-data-tools/index.mjs)
var index_mjs_ = __webpack_require__(52101);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/GridColumn.js

/**
 * @hidden
 */
var GridColumn = function (_) { return null; };
/**
 * @hidden
 */
GridColumn.displayName = 'KendoReactGridColumn';
/**
 * @hidden
 */
GridColumn.defaultProps = {
    filterable: true,
    editable: true,
    sortable: true,
    resizable: true,
    reorderable: true,
    groupable: true
};
/**
 * @hidden
 */
GridColumn.propTypes = {
    field: prop_types_index_js_.string,
    title: prop_types_index_js_.string,
    editable: prop_types_index_js_.bool,
    sortable: prop_types_index_js_.oneOfType([
        prop_types_index_js_.bool,
        prop_types_index_js_.shape({
            allowUnsort: prop_types_index_js_.bool.isRequired
        })
    ]),
    cell: prop_types_index_js_.any,
    filterCell: prop_types_index_js_.any,
    filterTitle: prop_types_index_js_.string,
    filterable: prop_types_index_js_.bool,
    filter: prop_types_index_js_.oneOf(['text', 'numeric', 'boolean', 'date']),
    editor: prop_types_index_js_.oneOf(['text', 'numeric', 'boolean', 'date']),
    width: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number]),
    minResizableWidth: prop_types_index_js_.number,
    headerCell: prop_types_index_js_.any,
    footerCell: prop_types_index_js_.any,
    headerSelectionValue: prop_types_index_js_.bool,
    format: prop_types_index_js_.string,
    headerClassName: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    reorderable: prop_types_index_js_.bool,
    resizable: prop_types_index_js_.bool,
    orderIndex: prop_types_index_js_.number,
    groupable: prop_types_index_js_.bool,
    columnMenu: prop_types_index_js_.any,
    locked: prop_types_index_js_.bool
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/utils/index.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * @hidden
 */
function getNestedValue(fieldName, dataItem) {
    var path = (fieldName || '').split('.');
    var data = dataItem;
    path.forEach(function (p) {
        data = data ? data[p] : undefined;
    });
    return data;
}
/**
 * @hidden
 */
function flatData(output, input, footer, dataIndex, groupDefined, field, level) {
    if (level === void 0) { level = 0; }
    var maxLevel = level;
    for (var i = 0; i < input.length; i++) {
        if (!groupDefined || input[i].value === undefined || input[i].items === undefined) {
            output[output.length] = {
                dataIndex: dataIndex.index,
                dataItem: input[i],
                rowType: 'data',
                level: level,
                expanded: field === undefined || getNestedValue(field, input[i])
            };
            dataIndex.index++;
            continue;
        }
        maxLevel = Math.max(maxLevel, level + 1);
        var expanded = field === undefined ||
            getNestedValue(field, input[i]) === undefined ||
            getNestedValue(field, input[i]);
        // header
        output[output.length] = {
            dataIndex: -1,
            dataItem: input[i],
            level: level,
            rowType: 'groupHeader',
            expanded: expanded
        };
        // children
        if (expanded) {
            maxLevel = Math.max(flatData(output, input[i].items, footer, dataIndex, groupDefined, field, level + 1), maxLevel);
        }
        // footer
        if (footer === 'always' || (expanded && footer === 'visible')) {
            output[output.length] = {
                dataIndex: -1,
                dataItem: input[i],
                rowType: 'groupFooter',
                level: level,
                expanded: expanded
            };
        }
    }
    return maxLevel;
}
var eventKeys = (/* unused pure expression or super */ null && ([
    'sortChange',
    'filterChange',
    'groupChange',
    'pageChange',
    'expandChange',
    'selectionChange',
    'headerSelectionChange',
    'rowClick',
    'itemChange',
    'dataStateChange',
    'columnResize',
    'columnReorder'
]));
var deprecatedHandlerMessage = function (oldKey, newKey) { return ("The ".concat(oldKey, " event handler property is deprecated, ") +
    "use https://www.telerik.com/kendo-react-ui/components/grid/api/GridProps/#toc-".concat(newKey, " instead")); };
/**
 * @hidden
 */
function checkPropCompatibility(props) {
    for (var index = 0; index < eventKeys.length; index++) {
        var eventKey = eventKeys[index];
        if (props[eventKey] !== undefined) {
            var newKey = 'on' + eventKey.charAt(0).toUpperCase() + eventKey.slice(1);
            console.warn(deprecatedHandlerMessage(eventKey, newKey));
        }
    }
}


/**
 * @hidden
 */
function readColumns(elements, oldColumns, idInfo, depth) {
    if (depth === void 0) { depth = 0; }
    var columns = [];
    if (!elements) {
        return [];
    }
    if (elements && elements.length === undefined) {
        elements = [elements];
    }
    elements.forEach(function (columnProps, index) {
        columnProps = columnProps.props ? columnProps.props : columnProps;
        var oldColumn = oldColumns[index] || null;
        var children = readColumns(columnProps.children, oldColumn && oldColumn.children || [], idInfo, depth + 1);
        columns.push(Object.assign({ depth: depth }, GridColumn.defaultProps, (children.length) ? { cell: function () { return null; }, filterCell: function () { return null; } } : {}, oldColumn ? { width: oldColumn.width, orderIndex: oldColumn.orderIndex } : {}, columnProps, {
            id: columnProps.id ? columnProps.id : index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(idInfo.prevId++), idInfo.idPrefix, 'column'),
            declarationIndex: columns.length,
            children: children,
            rowSpan: 0,
            colSpan: 0,
            isAccessible: true,
            left: oldColumn && Math.floor(oldColumn.left),
            right: oldColumn && Math.floor(oldColumn.right)
        }));
    });
    var comparator = function (a, b) {
        return a.orderIndex === b.orderIndex ?
            a.declarationIndex - b.declarationIndex :
            ((a.orderIndex || 0) - (b.orderIndex || 0));
    };
    columns.sort(comparator);
    if (depth === 0) {
        var ret_1 = [];
        var flat_1 = function (cols, pIndex) {
            return cols.forEach(function (c) {
                c.parentIndex = pIndex;
                flat_1(c.children, ret_1.push(c) - 1);
            });
        };
        flat_1(columns, -1);
        return ret_1;
    }
    return columns;
}
/**
 * @hidden
 */
function autoGenerateColumns(data, group, expandField, idInfo) {
    var propData = [];
    if (Array.isArray(data)) {
        propData = data;
    }
    else if (data) {
        propData = data.data;
    }
    var columns = [];
    if (propData.length > 0) {
        var itemForColumnsGen = propData[0];
        if (group) {
            for (var i = 0; i < group.length; i++) {
                itemForColumnsGen = itemForColumnsGen.items && itemForColumnsGen.items[0];
            }
        }
        var fields = Object.getOwnPropertyNames(itemForColumnsGen);
        fields.forEach(function (field) {
            if (field !== expandField) {
                columns.push(Object.assign({
                    id: index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(idInfo.prevId++), idInfo.idPrefix, 'column'),
                    declarationIndex: -1,
                    parentIndex: -1,
                    depth: 0,
                    colSpan: 0,
                    rowSpan: 0,
                    index: 0,
                    left: 0,
                    right: 0,
                    rightBorder: false,
                    children: [],
                    ariaColumnIndex: 0,
                    isAccessible: true
                }, GridColumn.defaultProps, { field: field }));
            }
        });
    }
    return columns;
}
var hasParentFooterCell = function (columns, column) {
    var parent = columns[column.parentIndex];
    while (parent) {
        if (parent.footerCell) {
            return true;
        }
        parent = columns[parent.parentIndex];
    }
    return false;
};
/**
 * @hidden
 */
var footerColumns = function (columns) {
    return columns.filter(function (column) {
        if (hasParentFooterCell(columns, column)) {
            return false;
        }
        return Boolean(column.footerCell) || !(column.children && column.children.length > 0);
    });
};
/**
 * @hidden
 */
var getColumnWidth = function (column) {
    return column.width !== undefined
        ? Math.floor(parseFloat(column.width.toString())) + 'px'
        : undefined;
};
/**
 * @hidden
 */
var sanitizeColumns = function (columns) {
    columns.sort(function (a, b) {
        return a.declarationIndex - b.declarationIndex;
    });
    return columns.map(function (column) {
        var declarationIndex = column.declarationIndex, parentIndex = column.parentIndex, depth = column.depth, colSpan = column.colSpan, rowSpan = column.rowSpan, index = column.index, kFirst = column.kFirst, children = column.children, props = __rest(column, ["declarationIndex", "parentIndex", "depth", "colSpan", "rowSpan", "index", "kFirst", "children"]);
        return children.length ? __assign({ children: sanitizeColumns(children) }, props) : props;
    });
};
/**
 * @hidden
 */
var firefox = typeof window !== 'undefined' &&
    /Firefox/.test(window.navigator.userAgent);
/**
 * @hidden
 */
var firefoxMaxHeight = 17895697;
/**
 * @hidden
 */
var resolveCells = function (gridCells, columnCells) {
    if (!gridCells && !columnCells) {
        return undefined;
    }
    if (!columnCells) {
        return gridCells;
    }
    if (!gridCells) {
        return columnCells;
    }
    return __assign(__assign(__assign({}, gridCells), columnCells), { select: __assign(__assign({}, (gridCells.select || {})), (columnCells.select || {})), hierarchy: __assign(__assign({}, (gridCells.hierarchy || {})), (columnCells.hierarchy || {})), group: __assign(__assign({}, (gridCells.group || {})), (columnCells.group || {})), edit: __assign(__assign({}, (gridCells.edit || {})), (columnCells.edit || {})) });
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridSelectionCell.js
var GridSelectionCell_assign = (undefined && undefined.__assign) || function () {
    GridSelectionCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridSelectionCell_assign.apply(this, arguments);
};




/**
 * @hidden
 */
var GridSelectionCell = function (props) {
    var _a;
    var handleOnChange = index_js_.useCallback(function (syntheticEvent) {
        if (props.selectionChange) {
            props.selectionChange({ syntheticEvent: syntheticEvent });
        }
    }, [props.selectionChange]);
    var inputId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var selectedValue = getNestedValue(props.field, props.dataItem);
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    var tdProps = GridSelectionCell_assign((_a = { colSpan: props.colSpan, style: props.style, className: props.className }, _a['aria-colindex'] = props.ariaColumnIndex, _a.role = 'gridcell', _a), navigationAttributes);
    var content = [
        (index_js_.createElement("input", { key: "1", checked: typeof selectedValue === 'boolean' && selectedValue, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange })),
        (index_js_.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: "2" }))
    ];
    var defaultRendering = props.rowType !== 'groupHeader' ? (index_js_.createElement("td", GridSelectionCell_assign({}, tdProps), content)) : null;
    var rowTypeSetting = props.rowType || 'data';
    var customCells = props.cells;
    if (customCells && customCells.select && customCells.select[rowTypeSetting]) {
        var CustomCell = customCells.select[rowTypeSetting];
        return (index_js_.createElement(CustomCell, GridSelectionCell_assign({}, props, { tdProps: tdProps }), content));
    }
    return props.render ?
        props.render.call(undefined, defaultRendering, props) :
        defaultRendering;
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.1.2_@progress+kendo-licensing@1_1b012f1cb4379e2d747b0d582d7a8ac9/node_modules/@progress/kendo-react-intl/index.mjs)
var kendo_react_intl_index_mjs_ = __webpack_require__(39932);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/messages/index.js
var _a;
/**
 * @hidden
 */
var noRecords = 'grid.noRecords';
/**
 * @hidden
 */
var pagerInfo = 'grid.pagerInfo';
/**
 * @hidden
 */
var pagerFirstPage = 'grid.pagerFirstPage';
/**
 * @hidden
 */
var pagerPreviousPage = 'grid.pagerPreviousPage';
/**
 * @hidden
 */
var pagerNextPage = 'grid.pagerNextPage';
/**
 * @hidden
 */
var pagerLastPage = 'grid.pagerLastPage';
/**
 * @hidden
 */
var pagerItemPerPage = 'grid.pagerItemsPerPage';
/**
 * @hidden
 */
var pagerPage = 'grid.pagerPage';
/**
 * @hidden
 */
var pagerPageSizeAriaLabel = 'grid.pagerPageSizeAriaLabel';
/**
 * @hidden
 */
var pagerOf = 'grid.pagerOf';
/**
 * @hidden
 */
var pagerTotalPages = 'grid.pagerTotalPages';
/**
 * @hidden
 */
var groupPanelEmpty = 'grid.groupPanelEmpty';
/**
 * @hidden
 */
var groupColumn = 'grid.groupColumn';
/**
 * @hidden
 */
var ungroupColumn = 'grid.ungroupColumn';
/**
 * @hidden
 */
var columnMenu = 'grid.columnMenu';
/**
 * @hidden
 */
var filterClearButton = 'grid.filterClearButton';
/**
 * @hidden
 */
var filterSubmitButton = 'grid.filterSubmitButton';
/**
 * @hidden
 */
var filterTitle = 'grid.filterTitle';
/**
 * @hidden
 */
var sortAscending = 'grid.sortAscending';
/**
 * @hidden
 */
var sortDescending = 'grid.sortDescending';
/**
 * @hidden
 */
var searchPlaceholder = 'grid.searchPlaceholder';
/**
 * @hidden
 */
var filterCheckAll = 'grid.filterCheckAll';
/**
 * @hidden
 */
var filterChooseOperator = 'grid.filterChooseOperator';
/**
 * @hidden
 */
var filterSelectedItems = 'grid.filterSelectedItems';
/**
 * @hidden
 */
var sortAriaLabel = 'grid.sortAriaLabel';
/**
 * @hidden
 */
var filterAriaLabel = 'grid.filterAriaLabel';
/**
 * @hidden
 */
var groupPanelAriaLabel = 'grid.groupPanelAriaLabel';
/**
 * @hidden
 */
var groupExpand = 'grid.groupExpand';
/**
 * @hidden
 */
var groupCollapse = 'grid.groupCollapse';
/**
 * @hidden
 */
var detailExpand = 'grid.detailExpand';
/**
 * @hidden
 */
var detailCollapse = 'grid.detailCollapse';
/**
 * @hidden
 */
var messages = (_a = {},
    _a[detailExpand] = 'Expand detail row',
    _a[detailCollapse] = 'Collapse detail row',
    _a[groupExpand] = 'Expand group',
    _a[groupCollapse] = 'Collapse Group',
    _a[noRecords] = 'No records available',
    _a[groupPanelEmpty] = 'Drag a column header and drop it here to group by that column',
    _a[filterClearButton] = 'Clear',
    _a[filterSubmitButton] = 'Filter',
    _a[filterTitle] = 'Filter',
    _a[sortAscending] = 'Sort Ascending',
    _a[sortDescending] = 'Sort Descending',
    _a[sortAriaLabel] = 'Sortable',
    _a[groupColumn] = 'Group Column',
    _a[ungroupColumn] = 'Ungroup Column',
    _a[columnMenu] = 'Column menu',
    _a[pagerItemPerPage] = 'items per page',
    _a[pagerInfo] = '{0} - {1} of {2} items',
    _a[pagerFirstPage] = 'Go to the first page',
    _a[pagerPreviousPage] = 'Go to the previous page',
    _a[pagerNextPage] = 'Go to the next page',
    _a[pagerLastPage] = 'Go to the last page',
    _a[pagerPage] = 'Page',
    _a[pagerPageSizeAriaLabel] = 'Page size',
    _a[pagerOf] = 'of',
    _a[pagerTotalPages] = '{0}',
    _a[searchPlaceholder] = 'Search',
    _a[filterCheckAll] = 'Check All',
    _a[filterChooseOperator] = 'Choose Operator',
    _a[filterSelectedItems] = 'selected items',
    _a[filterAriaLabel] = 'Filter',
    _a[groupPanelAriaLabel] = 'Group panel',
    _a['grid.filterEqOperator'] = 'Is equal to',
    _a['grid.filterNotEqOperator'] = 'Is not equal to',
    _a['grid.filterIsNullOperator'] = 'Is null',
    _a['grid.filterIsNotNullOperator'] = 'Is not null',
    _a['grid.filterIsEmptyOperator'] = 'Is empty',
    _a['grid.filterIsNotEmptyOperator'] = 'Is not empty',
    _a['grid.filterStartsWithOperator'] = 'Starts with',
    _a['grid.filterContainsOperator'] = 'Contains',
    _a['grid.filterNotContainsOperator'] = 'Does not contain',
    _a['grid.filterEndsWithOperator'] = 'Ends with',
    _a['grid.filterGteOperator'] = 'Is greater than or equal to',
    _a['grid.filterGtOperator'] = 'Is greater than',
    _a['grid.filterLteOperator'] = 'Is less than or equal to',
    _a['grid.filterLtOperator'] = 'Is less than',
    _a['grid.filterIsTrue'] = 'Is true',
    _a['grid.filterIsFalse'] = 'Is false',
    _a['grid.filterBooleanAll'] = '(All)',
    _a['grid.filterAfterOrEqualOperator'] = 'Is after or equal to',
    _a['grid.filterAfterOperator'] = 'Is after',
    _a['grid.filterBeforeOperator'] = 'Is before',
    _a['grid.filterBeforeOrEqualOperator'] = 'Is before or equal to',
    _a['grid.filterAndLogic'] = 'And',
    _a['grid.filterOrLogic'] = 'Or',
    _a);
/**
 * @hidden
 */
function pagerMessagesMap(pagerMessageKey) {
    var messageKey = pagerMessageKey.replace(/^pager\.([a-z])/, function (_match, group) { return 'grid.pager' + group.toUpperCase(); });
    return ({ messageKey: messageKey, defaultMessage: messages[messageKey] });
}

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridHierarchyCell.js
var GridHierarchyCell_assign = (undefined && undefined.__assign) || function () {
    GridHierarchyCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridHierarchyCell_assign.apply(this, arguments);
};







/**
 * @hidden
 */
var GridHierarchyCell = function (props) {
    var defaultRendering = null;
    var tdProps = null;
    var content = null;
    var expanded = getNestedValue(props.field, props.dataItem);
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    var localization = (0,kendo_react_intl_index_mjs_.useLocalization)();
    var onKeyDownHandler = index_js_.useCallback(function (event) {
        if (event.isDefaultPrevented()) {
            return;
        }
        if (event.keyCode === main_js_.Keys.enter && props.onChange) {
            event.preventDefault();
            props.onChange({
                dataItem: props.dataItem,
                dataIndex: props.dataIndex,
                syntheticEvent: event,
                field: props.field,
                value: !expanded
            });
        }
    }, [props.dataItem, props.dataIndex, props.field, props.onChange, expanded]);
    if (props.rowType === 'groupFooter') {
        tdProps = GridHierarchyCell_assign({ className: 'k-table-td k-hierarchy-cell', role: 'gridcell' }, navigationAttributes);
        defaultRendering =
            index_js_.createElement("td", GridHierarchyCell_assign({}, tdProps));
    }
    else if (props.rowType !== 'groupHeader') {
        var baseMessage = expanded ? detailCollapse : detailExpand;
        var message = localization.toLanguageString(baseMessage, messages[baseMessage]);
        tdProps = GridHierarchyCell_assign({ className: 'k-table-td k-hierarchy-cell', onKeyDown: onKeyDownHandler, 'aria-expanded': expanded ? true : false, role: 'gridcell', 'aria-colindex': props.ariaColumnIndex }, navigationAttributes);
        content = (index_js_.createElement("a", { onClick: function (e) {
                e.preventDefault();
                if (props.onChange) {
                    props.onChange({
                        dataItem: props.dataItem,
                        dataIndex: props.dataIndex,
                        syntheticEvent: e,
                        field: props.field,
                        value: !expanded
                    });
                }
            }, "aria-label": message, href: "#", tabIndex: -1 },
            index_js_.createElement(main_js_.IconWrap, { name: expanded ? 'minus' : 'plus', icon: expanded ? index_es_js_.minusIcon : index_es_js_.plusIcon })));
        defaultRendering = (index_js_.createElement("td", GridHierarchyCell_assign({}, tdProps), content));
    }
    var rowTypeSetting = props.rowType || 'data';
    var customCells = props.cells;
    if (customCells && customCells.hierarchy && customCells.hierarchy[rowTypeSetting]) {
        var CustomCell = customCells.hierarchy[rowTypeSetting];
        return (index_js_.createElement(CustomCell, GridHierarchyCell_assign({}, props, { tdProps: tdProps }), content));
    }
    return props.render ?
        props.render.call(undefined, defaultRendering, props) :
        defaultRendering;
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-inputs@^5.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_0603fab43f3cb0e658904851471809eb/node_modules/@progress/kendo-react-inputs/dist/es/main.js)
var es_main_js_ = __webpack_require__(5517);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-dateinputs@^5.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_2ca1bd787142b77475acd05e51f50e30/node_modules/@progress/kendo-react-dateinputs/dist/es/main.js)
var dist_es_main_js_ = __webpack_require__(17323);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/constants/index.js

/** The attribute required by the Grid selection on Grid `tr` elements. */
var GRID_ROW_INDEX_ATTRIBUTE = index_mjs_.TABLE_ROW_INDEX_ATTRIBUTE;
/** The attribute required by the Grid selection on Grid `td` elements. */
var GRID_COL_INDEX_ATTRIBUTE = index_mjs_.TABLE_COL_INDEX_ATTRIBUTE;
/** Attribute which disable selection start from this element. */
var GRID_PREVENT_SELECTION_ELEMENT = (/* unused pure expression or super */ null && (TABLE_PREVENT_SELECTION_ELEMENT));

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridEditCell.js
var GridEditCell_assign = (undefined && undefined.__assign) || function () {
    GridEditCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridEditCell_assign.apply(this, arguments);
};







/**
 * @hidden
 */
var GridEditCell = function (props) {
    var _a, _b, _c, _d, _e;
    var data = getNestedValue(props.field, props.dataItem);
    var defaultRendering = null;
    var editCellClasses = (0,main_js_.classNames)('k-table-td', 'k-grid-edit-cell', (_a = {},
        _a['k-selected'] = props.isSelected,
        _a), props.className);
    var inputId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    var tdProps = null;
    var content = null;
    var handleOnChange = index_js_.useCallback(function (syntheticEvent) {
        if (props.onChange) {
            var value = syntheticEvent.target.type === 'checkbox' ?
                syntheticEvent.target.checked :
                syntheticEvent.target.value;
            props.onChange({
                dataItem: props.dataItem,
                dataIndex: props.dataIndex,
                field: props.field,
                syntheticEvent: syntheticEvent,
                value: value
            });
        }
    }, [props.onChange, props.dataItem, props.dataIndex, props.field]);
    var onContextMenu = index_js_.useCallback(function (event) {
        if (props.onContextMenu) {
            props.onContextMenu.call(undefined, event, props.dataItem, props.field);
        }
    }, [props.onContextMenu, props.dataItem, props.field]);
    var inputChange = index_js_.useCallback(function (e) {
        if (props.onChange) {
            props.onChange({
                dataItem: props.dataItem,
                dataIndex: props.dataIndex,
                field: props.field,
                syntheticEvent: e.syntheticEvent,
                value: e.value
            });
        }
    }, [props.onChange, props.dataItem, props.dataIndex, props.field]);
    switch (props.editor) {
        case 'numeric':
            tdProps = GridEditCell_assign((_b = { onContextMenu: onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _b['aria-colindex'] = props.ariaColumnIndex, _b['aria-selected'] = props.isSelected, _b[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _b.role = 'gridcell', _b), navigationAttributes);
            content = (index_js_.createElement(es_main_js_.NumericTextBox, { width: "100%", value: (data === undefined) ? null : data, onChange: inputChange }));
            defaultRendering = (index_js_.createElement("td", GridEditCell_assign({}, tdProps), content));
            break;
        case 'date':
            tdProps = GridEditCell_assign((_c = { onContextMenu: onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _c['aria-colindex'] = props.ariaColumnIndex, _c['aria-selected'] = props.isSelected, _c[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _c.role = 'gridcell', _c), navigationAttributes);
            content = (index_js_.createElement(dist_es_main_js_.DatePicker, { width: "100%", value: data, onChange: inputChange }));
            defaultRendering = (index_js_.createElement("td", GridEditCell_assign({}, tdProps), content));
            break;
        case 'boolean':
            tdProps = GridEditCell_assign((_d = { onContextMenu: onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _d['aria-colindex'] = props.ariaColumnIndex, _d['aria-selected'] = props.isSelected, _d[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _d.role = 'gridcell', _d), navigationAttributes);
            content = ([
                index_js_.createElement("input", { checked: data || false, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange, key: 1 }),
                index_js_.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: 2 })
            ]);
            defaultRendering = (index_js_.createElement("td", GridEditCell_assign({}, tdProps), content));
            break;
        default:
            tdProps = GridEditCell_assign((_e = { onContextMenu: onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _e['aria-colindex'] = props.ariaColumnIndex, _e['aria-selected'] = props.isSelected, _e[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _e.role = 'gridcell', _e), navigationAttributes);
            content = (index_js_.createElement("input", { style: { width: '100%' }, className: "k-input", value: data || '', onChange: handleOnChange }));
            defaultRendering = (index_js_.createElement("td", GridEditCell_assign({}, tdProps), content));
    }
    var editorSetting = props.editor || 'text';
    var customCells = props.cells;
    if (customCells && customCells.edit && customCells.edit[editorSetting]) {
        var CustomCell = customCells.edit[editorSetting];
        return (index_js_.createElement(CustomCell, GridEditCell_assign({}, props, { tdProps: tdProps }), content));
    }
    return props.render ?
        props.render.call(undefined, defaultRendering, props) :
        defaultRendering;
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/Header.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Header_assign = (undefined && undefined.__assign) || function () {
    Header_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Header_assign.apply(this, arguments);
};



/**
 * @hidden
 */
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerWrap = null;
        _this.table = null;
        _this.syncScroll = false;
        _this.scrollbarWidth = (0,main_js_.getScrollbarWidth)();
        _this.onScroll = function (_event) {
            if (_this.syncScroll) {
                _this.syncScroll = false;
                return;
            }
            if (!_this.headerWrap) {
                return;
            }
            var scrollLeft = _this.headerWrap.scrollLeft;
            var scrollableDataElement = _this.props.scrollableDataElement();
            if (scrollableDataElement && scrollableDataElement.scrollLeft !== scrollLeft) {
                scrollableDataElement.scrollLeft = scrollLeft;
            }
        };
        return _this;
    }
    Object.defineProperty(Header.prototype, "element", {
        get: function () {
            return this.props.elemRef.current;
        },
        enumerable: false,
        configurable: true
    });
    Header.prototype.componentDidMount = function () {
        var rtl = (0,index_mjs_.isRtl)(this.element);
        if (this.props.columnResize) {
            this.props.columnResize.setIsRtl(rtl);
        }
        this.forceUpdate();
    };
    /**
     *
     * @param scrollLeft - Scrolls to the left (in pixels).
     */
    Header.prototype.setScrollLeft = function (scrollLeft) {
        if (this.headerWrap && this.headerWrap.scrollLeft !== scrollLeft) {
            this.syncScroll = true;
            this.headerWrap.scrollLeft = scrollLeft;
        }
    };
    /**
     *
     * @param width - Scrolls the width (in pixels).
     */
    Header.prototype.setWidth = function (width) {
        if (this.table) {
            this.table.style.width = width + 'px';
        }
    };
    Header.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.props.staticHeaders) {
            return (index_js_.createElement("thead", Header_assign({ role: "presentation", className: (0,main_js_.classNames)('k-table-thead', { 'k-grid-draggable-header': this.props.draggable }) }, index_mjs_.tableKeyboardNavigationHeaderAttributes),
                this.props.headerRow,
                this.props.filterRow));
        }
        return (index_js_.createElement("div", { ref: this.props.elemRef, className: (0,main_js_.classNames)('k-grid-header', { 'k-grid-draggable-header': this.props.draggable }), role: "presentation" },
            index_js_.createElement("div", { ref: function (div) { _this.headerWrap = div; }, className: "k-grid-header-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, onScroll: this.onScroll, role: "presentation" },
                index_js_.createElement("table", { ref: function (table) { _this.table = table; }, className: (0,main_js_.classNames)('k-table k-grid-header-table', (_a = {
                            'k-table-md': !this.props.size
                        },
                        _a["k-table-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                        _a), this.props.className), role: "presentation" },
                    index_js_.createElement("colgroup", { ref: function (e) { _this.props.columnResize.colGroupHeader = e; } }, this.props.cols),
                    index_js_.createElement("thead", Header_assign({ className: 'k-table-thead', role: "rowgroup" }, index_mjs_.tableKeyboardNavigationHeaderAttributes),
                        this.props.headerRow,
                        this.props.filterRow)))));
    };
    return Header;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/interfaces/GridSortSettings.js
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @hidden
 */
var normalize = function () {
    var settings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        settings[_i] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArray([{ allowUnsort: true, mode: 'single' }], settings, false));
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/drag/ColumnDraggable.js
var ColumnDraggable_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @hidden
 */
var ColumnDraggable = /** @class */ (function (_super) {
    ColumnDraggable_extends(ColumnDraggable, _super);
    function ColumnDraggable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.draggable = null;
        /**
         * @hidden
         */
        _this.onPress = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.pressHandler) {
                _this.props.pressHandler(data.event, element);
            }
        };
        /**
         * @hidden
         */
        _this.onDrag = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.dragHandler) {
                _this.props.dragHandler(data.event, element);
            }
        };
        /**
         * @hidden
         */
        _this.onRelease = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.releaseHandler) {
                _this.props.releaseHandler(data.event);
            }
        };
        return _this;
    }
    ColumnDraggable.prototype.render = function () {
        var _this = this;
        return (index_js_.createElement(main_js_.Draggable, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, hint: this.props.dragClue, autoScroll: { boundaryElementRef: this.props.headerRef, direction: { horizontal: true, vertical: false } }, scrollContainer: this.props.containerRef || undefined, ref: function (component) { _this.draggable = component; } },
            index_js_.createElement("tr", { className: 'k-table-row', style: { touchAction: 'none' }, role: "row", "aria-rowindex": this.props.ariaRowIndex }, this.props.children)));
    };
    return ColumnDraggable;
}(index_js_.PureComponent));


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@^5.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var kendo_react_popup_dist_es_main_js_ = __webpack_require__(91314);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuWrapper.js
var GridColumnMenuWrapper_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridColumnMenuWrapper_assign = (undefined && undefined.__assign) || function () {
    GridColumnMenuWrapper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridColumnMenuWrapper_assign.apply(this, arguments);
};
var GridColumnMenuWrapper_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






/**
 * The GridColumnMenuWrapper component.
 */
var GridColumnMenuWrapper = /** @class */ (function (_super) {
    GridColumnMenuWrapper_extends(GridColumnMenuWrapper, _super);
    function GridColumnMenuWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** @hidden */
        _this.state = {
            show: false
        };
        /** @hidden */
        _this._anchor = null;
        /** @hidden */
        _this._content = null;
        /** @hidden */
        _this.blurTimeout = undefined;
        /** @hidden */
        _this.willBlur = false;
        /** @hidden */
        _this.blur = function () {
            if (_this.willBlur) {
                _this.willBlur = false;
                return;
            }
            clearTimeout(_this.blurTimeout);
            _this.blurTimeout = window.setTimeout(function () { _this.closeMenu(); });
        };
        /** @hidden */
        _this.focus = function () {
            clearTimeout(_this.blurTimeout);
        };
        /** @hidden */
        _this.anchorClick = function (event) {
            event.preventDefault();
            _this.setState({
                show: !_this.state.show
            }, function () { return _this.state.show && _this._content && _this._content.focus(); });
        };
        /** @hidden */
        _this.closeMenu = function () {
            _this.setState({ show: false });
        };
        /** @hidden */
        _this.onAnchorMouseDown = function (event) {
            _this.willBlur = _this.state.show && event.currentTarget === _this._anchor;
        };
        /** @hidden */
        _this.onAnchorFocus = function (event) {
            var _a;
            var elementToFocus = event.target;
            var parentScroll = elementToFocus && ((_a = elementToFocus.closest('.k-grid')) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('k-grid-content')[0]);
            var hasHorizontalScrollbar = parentScroll && (parentScroll.scrollWidth > parentScroll.clientWidth);
            if (hasHorizontalScrollbar) {
                elementToFocus.scrollIntoView({ inline: 'center' });
            }
        };
        return _this;
    }
    GridColumnMenuWrapper.prototype.render = function () {
        var _this = this;
        var _a = this.props, ColumnMenu = _a.columnMenu, others = GridColumnMenuWrapper_rest(_a, ["columnMenu"]);
        var column = this.props.column;
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var fieldMessage = column.title || column.field;
        var field = fieldMessage ? "".concat(fieldMessage, " ") : '';
        return (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement("a", { className: 'k-grid-header-menu k-grid-column-menu', ref: function (e) { return _this._anchor = e; }, onClick: this.anchorClick, onMouseDown: this.onAnchorMouseDown, onFocus: this.onAnchorFocus, href: "#", "aria-label": "".concat(field).concat(localizationService.toLanguageString(columnMenu, messages[columnMenu])) },
                index_js_.createElement(main_js_.IconWrap, { name: 'more-vertical', icon: index_es_js_.moreVerticalIcon })),
            index_js_.createElement(kendo_react_popup_dist_es_main_js_.Popup, { anchor: this._anchor, show: this.state.show },
                index_js_.createElement("div", { ref: function (e) { return _this._content = e; }, className: 'k-grid-columnmenu-popup', tabIndex: 0, onBlur: this.blur, onFocus: this.focus, style: { outline: 'none' } }, ColumnMenu && (index_js_.createElement(ColumnMenu, GridColumnMenuWrapper_assign({}, others, { onCloseMenu: this.closeMenu })))))));
    };
    return GridColumnMenuWrapper;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderCell.js
var GridHeaderCell_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridHeaderCell_assign = (undefined && undefined.__assign) || function () {
    GridHeaderCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridHeaderCell_assign.apply(this, arguments);
};



/**
 * @example
 * ```jsx
 * class App extends React.PureComponent {
 *    state = {
 *        details: false,
 *        data: [
 *               { foo: 'A1', bar: 'B1', b1: 1, b2:2 },
 *               { foo: 'A2', bar: 'B2', b1: 3, b2:4 },
 *               { foo: 'A3', bar: 'B2', b1: 5, b2:6 }
 *           ]
 *    };
 *
 *    CustomHeaderCell = (props) =>
 *        <span>
 *            {props.title || props.field + ' '}
 *            <button onClick={() => this.setState({ barDetails: !this.state.barDetails })}>
 *                {this.state.barDetails ? 'collapse' : 'expand'}
 *            </button>
 *            {props.children}
 *        </span>
 *
 *    render() {
 *        return (
 *            <Grid
 *                style={{ height: '420px' }}
 *                data={this.state.data}
 *                reorderable={true}
 *            >
 *                <GridColumn field="foo" />
 *                <GridColumn field="bar" headerCell={this.CustomHeaderCell}>
 *                    {this.state.barDetails && [
 *                        <GridColumn field="b1" />,
 *                        <GridColumn field="b2" />
 *                    ]}
 *                </GridColumn>
 *            </Grid>
 *        );
 *    }
 * }
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridHeaderCell = /** @class */ (function (_super) {
    GridHeaderCell_extends(GridHeaderCell, _super);
    function GridHeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridHeaderCell.prototype.render = function () {
        var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
        var clickProps = this.props.onClick ? {
            onClick: this.props.onClick
        } : {};
        var defaultRendering = (index_js_.createElement("span", { className: 'k-cell-inner' },
            index_js_.createElement("span", GridHeaderCell_assign({ className: (0,main_js_.classNames)('k-link', {
                    '!k-cursor-default': !this.props.columnMenuWrapperProps.sortable
                }) }, clickProps),
                index_js_.createElement("span", { className: 'k-column-title' }, this.props.title || this.props.field || '\u00A0'),
                this.props.children),
            columnMenuWrapperProps.columnMenu && index_js_.createElement(GridColumnMenuWrapper, GridHeaderCell_assign({}, columnMenuWrapperProps))));
        if (this.props.render) {
            return this.props.render.call(undefined, defaultRendering, this.props);
        }
        return defaultRendering;
    };
    return GridHeaderCell;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/HeaderRow.js
var HeaderRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HeaderRow_assign = (undefined && undefined.__assign) || function () {
    HeaderRow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return HeaderRow_assign.apply(this, arguments);
};










/**
 * @hidden
 */
var sortSeqMap = {
    true: { 'asc': 'desc', 'desc': '', '': 'asc' },
    false: { 'asc': 'desc', 'desc': 'asc', '': 'asc' }
};
/**
 * @hidden
 */
var ariaSortMap = {
    'none': 'none',
    'asc': 'ascending',
    'desc': 'descending'
};
/**
 * @hidden
 */
var HeaderRow = /** @class */ (function (_super) {
    HeaderRow_extends(HeaderRow, _super);
    function HeaderRow(props) {
        var _this = _super.call(this, props) || this;
        _this.serviceIndex = 0;
        _this.index = -1;
        _this.cellKeyDown = function (event, column) {
            if (event.isDefaultPrevented()) {
                return;
            }
            if (event.keyCode === main_js_.Keys.enter) {
                _this.cellClick(event, column);
            }
        };
        _this.cells = function (rowIndexes) { return rowIndexes.map(function (columnIndex) {
            var column = _this.props.columns[columnIndex];
            var sortable = _this.props.sortable && column.sortable;
            var sortIndex = _this.props.sort ? _this.props.sort.findIndex(function (s) { return s.field === column.field; }) : -1;
            var sortDir = sortIndex >= 0 ? ((_this.props.sort)[sortIndex].dir || 'none') : 'none';
            var columnMenu = (column.columnMenu === null) ? null : (column.columnMenu || _this.props.columnMenu);
            var className = (0,main_js_.classNames)({
                'k-first': column.kFirst,
                'k-filterable': Boolean(columnMenu),
                'k-table-th': true,
                'k-header': true,
                'k-grid-header-sticky': column.locked,
                'k-sorted': _this.props.sort && _this.props.sort.some(function (descriptor) { return descriptor.field === column.field; })
            }, column.headerClassName);
            var style = column.left !== undefined
                ? !_this.props.isRtl
                    ? { left: column.left, right: column.right }
                    : { left: column.right, right: column.left }
                : {};
            var sortLabel = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(_this).toLanguageString(sortAriaLabel, messages[sortAriaLabel]);
            var ariaAttrs = column.isAccessible ? {
                ariaSort: ariaSortMap[sortDir],
                role: 'columnheader',
                ariaColumnIndex: column.ariaColumnIndex,
                ariaSelected: false,
                ariaDescription: sortable ? sortLabel : ''
            } : {
                'role': 'presentation'
            };
            var key = (column.declarationIndex >= 0) ? ++_this.index : --_this.serviceIndex;
            var HeaderCell = column.headerCell ? column.headerCell : GridHeaderCell;
            var headerCell = (index_js_.createElement(HeaderCell, { key: 1, field: column.field, onClick: sortable && (function (e) { return _this.cellClick(e, column); }) || undefined, selectionChange: _this.props.selectionChange, title: column.title, selectionValue: column.headerSelectionValue, render: _this.props.cellRender, children: _this.sortIcon(sortIndex), columnMenuWrapperProps: {
                    column: {
                        field: column.field,
                        title: column.title,
                        locked: column.locked,
                        filter: column.filter
                    },
                    sortable: sortable && _this.props.sortable,
                    sort: _this.props.sort,
                    onSortChange: _this.props.sortChange,
                    filter: _this.props.filter,
                    filterable: _this.props.filterable && column.filterable,
                    filterOperators: _this.props.filterOperators,
                    onFilterChange: _this.props.filterChange,
                    group: _this.props.group,
                    groupable: _this.props.groupable,
                    onGroupChange: _this.props.groupChange,
                    columnMenu: columnMenu
                } }));
            var thProps = HeaderRow_assign(HeaderRow_assign({}, ariaAttrs), { key: key, colSpan: column.colSpan, rowSpan: column.rowSpan, className: className, style: style, columnId: column.id, navigatable: column.navigatable, onKeyDown: sortable && (function (e) { return _this.cellKeyDown(e, column); }) || undefined, role: 'columnheader' });
            var content = [
                headerCell,
                (_this.props.columnResize && _this.props.columnResize.resizable && column.resizable
                    && index_js_.createElement(index_mjs_.ColumnResizer, { key: 2, resize: function (e, element, end) {
                            return _this.props.columnResize &&
                                _this.props.columnResize.dragHandler(e, column, element, end);
                        }, autofit: function (e) {
                            return _this.props.columnResize &&
                                _this.props.columnResize.dblClickHandler(e, [column.id]);
                        } }))
            ];
            var customCells = resolveCells(_this.props.cells, column.cells);
            if (customCells && customCells.headerCell) {
                var CustomCell = customCells.headerCell;
                return (index_js_.createElement(CustomCell, { key: key, thProps: thProps, index: columnIndex }, content));
            }
            return (index_js_.createElement(index_mjs_.HeaderThElement, HeaderRow_assign({}, thProps, { key: key }), content));
        }); };
        _this.cellClick = _this.cellClick.bind(_this);
        return _this;
    }
    HeaderRow.prototype.cellClick = function (e, column) {
        e.preventDefault();
        if (!this.props.sortChange) {
            return;
        }
        var _a = normalize(this.props.sortable || false, column.sortable || false), allowUnsort = _a.allowUnsort, mode = _a.mode;
        var oldDescriptor = (this.props.sort || []).filter(function (d) { return d.field === column.field; })[0];
        var dir = sortSeqMap[allowUnsort][oldDescriptor && oldDescriptor.dir || ''];
        var newDescriptor = (mode === 'single') ?
            [] : (this.props.sort || []).filter(function (d) { return d.field !== column.field; });
        if (dir !== '' && column.field) {
            newDescriptor.push({ field: column.field, dir: dir });
        }
        this.props.sortChange(newDescriptor, e);
    };
    HeaderRow.prototype.sortIcon = function (sortIndex) {
        if (!this.props.sort) {
            return null;
        }
        return sortIndex >= 0 && [
            index_js_.createElement("span", { key: 1, className: 'k-sort-icon' },
                index_js_.createElement(main_js_.IconWrap, { name: 'sort-' + this.props.sort[sortIndex].dir + '-small', icon: this.props.sort[sortIndex].dir === 'asc' ? index_es_js_.sortAscSmallIcon : index_es_js_.sortDescSmallIcon })),
            this.props.sort.length > 1 &&
                index_js_.createElement("span", { key: 2, className: 'k-sort-icon' },
                    index_js_.createElement("span", { className: "k-sort-order" }, sortIndex + 1))
        ];
    };
    HeaderRow.prototype.render = function () {
        var _this = this;
        this.serviceIndex = 0;
        this.index = -1;
        return this.props.columnsMap.map(function (rowIndexes, i) {
            return _this.props.pressHandler && (index_js_.createElement(ColumnDraggable, { key: i, pressHandler: _this.props.pressHandler, dragHandler: _this.props.dragHandler, releaseHandler: _this.props.releaseHandler, ariaRowIndex: i + 1, dragClue: _this.props.dragClue, headerRef: _this.props.headerRef, containerRef: _this.props.containerRef }, _this.cells(rowIndexes))) || index_js_.createElement("tr", { className: 'k-table-row', role: "row", "aria-rowindex": i + 1 }, _this.cells(rowIndexes));
        });
    };
    return HeaderRow;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(HeaderRow);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var kendo_react_buttons_dist_es_main_js_ = __webpack_require__(85601);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-dropdowns@^5.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-dropdowns@7.4.0_10db8e7120224d41f618278612e08336/node_modules/@progress/kendo-react-dropdowns/index.mjs)
var kendo_react_dropdowns_index_mjs_ = __webpack_require__(89776);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/filterCommon.js

/**
 * @hidden
 */
var filterLogicList = [
    { text: 'grid.filterAndLogic', operator: 'and' },
    { text: 'grid.filterOrLogic', operator: 'or' }
];
/**
 * @hidden
 */
var operators = {
    'text': [
        { text: 'grid.filterContainsOperator', operator: 'contains' },
        { text: 'grid.filterNotContainsOperator', operator: 'doesnotcontain' },
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterStartsWithOperator', operator: 'startswith' },
        { text: 'grid.filterEndsWithOperator', operator: 'endswith' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' },
        { text: 'grid.filterIsEmptyOperator', operator: 'isempty' },
        { text: 'grid.filterIsNotEmptyOperator', operator: 'isnotempty' }
    ],
    'numeric': [
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterGteOperator', operator: 'gte' },
        { text: 'grid.filterGtOperator', operator: 'gt' },
        { text: 'grid.filterLteOperator', operator: 'lte' },
        { text: 'grid.filterLtOperator', operator: 'lt' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' }
    ],
    'date': [
        { text: 'grid.filterEqOperator', operator: 'eq' },
        { text: 'grid.filterNotEqOperator', operator: 'neq' },
        { text: 'grid.filterAfterOrEqualOperator', operator: 'gte' },
        { text: 'grid.filterAfterOperator', operator: 'gt' },
        { text: 'grid.filterBeforeOperator', operator: 'lt' },
        { text: 'grid.filterBeforeOrEqualOperator', operator: 'lte' },
        { text: 'grid.filterIsNullOperator', operator: 'isnull' },
        { text: 'grid.filterIsNotNullOperator', operator: 'isnotnull' }
    ],
    'boolean': [
        { text: 'grid.filterEqOperator', operator: 'eq' }
    ]
};
/**
 * @hidden
 */
var IsUnaryFilter = function (operator) {
    return operator === 'isnull' || operator === 'isnotnull' || operator === 'isempty' || operator === 'isnotempty';
};
/**
 * @hidden
 */
var operatorMap = function (iterable, service) { return iterable.map(function (operator) { return ({
    text: service.toLanguageString(operator.text, messages[operator.text]),
    operator: operator.operator
}); }); };
/**
 * @hidden
 */
var defaultBooleanOperator = 'eq';
/**
 * @hidden
 */
var booleanFilterValues = [
    { text: 'grid.filterBooleanAll', operator: '' },
    { text: 'grid.filterIsTrue', operator: true },
    { text: 'grid.filterIsFalse', operator: false }
];
/**
 * @hidden
 */
var defaultHideSecondFilter = {
    text: false,
    numeric: false,
    date: false,
    boolean: true
};
/**
 * @hidden
 */
var cellInputChange = function (value, e, props) {
    var defaultOperator = getDefaultOperator(props.operators);
    var operator = props.operator;
    switch (props.filterType) {
        case 'numeric':
            if (!operator || IsUnaryFilter(operator)) {
                // change the operator to default
                operator = defaultOperator;
            }
            if (value === null && operator === defaultOperator) {
                // clear only the default operator
                operator = '';
            }
            break;
        case 'date':
            if (!operator || IsUnaryFilter(operator)) {
                operator = defaultOperator;
            }
            if (value === null && operator === defaultOperator) {
                operator = '';
            }
            break;
        case 'text':
            if (!operator || IsUnaryFilter(operator)) {
                operator = defaultOperator;
            }
            if (!value && operator === defaultOperator) {
                operator = '';
            }
            break;
        default: return;
    }
    props.onChange({ value: value, operator: operator, syntheticEvent: e });
};
/**
 * @hidden
 */
var getDefaultOperator = function (filterOperators, filterType) {
    if (filterType) {
        return filterOperators[filterType][0].operator;
    }
    else {
        return filterOperators[0].operator;
    }
};
/**
 * @hidden
 */
var getFilterType = function (filterType) {
    return filterType || 'text';
};
/**
 * @hidden
 */
var cellBoolDropdownChange = function (event, onChange) {
    var item = event.target.value;
    onChange({
        value: item.operator,
        operator: item.operator === '' ? '' : defaultBooleanOperator,
        syntheticEvent: event.syntheticEvent
    });
};
/**
 * @hidden
 */
var cellOperatorChange = function (event, currentValue, onChange) {
    var value = currentValue;
    var item = event.target.value;
    if (!event.target.state.opened) {
        return;
    }
    if (IsUnaryFilter(item.operator)) {
        // clear the value to avoid confusion on what is filtered
        value = null;
    }
    if (currentValue === null && !IsUnaryFilter(item.operator)) {
        value = undefined;
    }
    onChange({ value: value, operator: item.operator, syntheticEvent: event.syntheticEvent });
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridFilterCell.js
var GridFilterCell_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var GridFilterCell = /** @class */ (function (_super) {
    GridFilterCell_extends(GridFilterCell, _super);
    function GridFilterCell(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOperatorEditor = function (localization) {
            if (_this.props.filterType === 'boolean') {
                return;
            }
            var value = _this.props.operators.find(function (item) { return item.operator === _this.props.operator; }) || null;
            return (index_js_.createElement(kendo_react_dropdowns_index_mjs_.DropDownList, { size: _this.props.size, value: value, onChange: _this.operatorChange, className: "k-dropdown-operator", iconClassName: "k-i-filter k-icon", svgIcon: index_es_js_.filterIcon, data: _this.props.operators, textField: "text", title: localization.toLanguageString(filterChooseOperator, messages[filterChooseOperator]), popupSettings: {
                    width: ''
                } }));
        };
        _this.inputChange = _this.inputChange.bind(_this);
        _this.clear = _this.clear.bind(_this);
        _this.operatorChange = _this.operatorChange.bind(_this);
        _this.boolDropdownChange = _this.boolDropdownChange.bind(_this);
        return _this;
    }
    /**
     * @hidden
     */
    GridFilterCell.prototype.render = function () {
        var _a;
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var defaultRendering = (index_js_.createElement("div", { className: "k-filtercell" },
            index_js_.createElement("div", { className: "k-filtercell-wrapper" },
                this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues),
                index_js_.createElement("div", { className: "k-filtercell-operator" },
                    this.renderOperatorEditor(localizationService),
                    "\u00A0",
                    index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { size: this.props.size, icon: 'filter-clear', svgIcon: index_es_js_.filterClearIcon, className: (0,main_js_.classNames)((_a = {},
                            _a['k-clear-button-visible'] = Boolean(!(this.props.value === null || this.props.value === '') || this.props.operator),
                            _a)), title: localizationService.toLanguageString(filterClearButton, messages[filterClearButton]), type: "button", onClick: this.clear, disabled: !(!(this.props.value === null || this.props.value === '') || this.props.operator) })))));
        if (this.props.render) {
            return this.props.render.call(undefined, defaultRendering, this.props);
        }
        return defaultRendering;
    };
    GridFilterCell.prototype.inputChange = function (value, e) {
        cellInputChange(value, e, this.props);
    };
    GridFilterCell.prototype.operatorChange = function (event) {
        cellOperatorChange(event, this.props.value, this.props.onChange);
    };
    GridFilterCell.prototype.boolDropdownChange = function (event) {
        cellBoolDropdownChange(event, this.props.onChange);
    };
    GridFilterCell.prototype.clear = function (e) {
        e.preventDefault();
        this.props.onChange({ value: '', operator: '', syntheticEvent: e });
    };
    GridFilterCell.prototype.filterComponent = function (filterType, value, booleanValues) {
        var _this = this;
        switch (filterType) {
            case 'numeric':
                return (index_js_.createElement(es_main_js_.NumericTextBox, { size: this.props.size, value: value, onChange: function (e) { _this.inputChange(e.value, e.syntheticEvent); }, title: this.props.title, ariaLabel: this.props.ariaLabel }));
            case 'date':
                return (index_js_.createElement(dist_es_main_js_.DatePicker, { size: this.props.size, value: value, onChange: function (e) { _this.inputChange(e.value, e.syntheticEvent); }, title: this.props.title, ariaLabel: this.props.ariaLabel }));
            case 'boolean':
                var noFilterSet_1 = function (filter) { return filter === null || filter === undefined; };
                return (index_js_.createElement(kendo_react_dropdowns_index_mjs_.DropDownList, { size: this.props.size, onChange: this.boolDropdownChange, value: booleanValues.find(function (item) { return item.operator === (noFilterSet_1(value) ? '' : value); }), data: booleanValues, textField: "text", title: this.props.title, ariaLabel: this.props.ariaLabel }));
            default: return (index_js_.createElement(es_main_js_.TextBox, { size: this.props.size, value: value || '', onChange: function (e) { _this.inputChange(e.target.value, e.syntheticEvent); }, title: this.props.title, "aria-label": this.props.ariaLabel }));
        }
    };
    return GridFilterCell;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridFilterCell);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/FilterRow.js
var FilterRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FilterRow_assign = (undefined && undefined.__assign) || function () {
    FilterRow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return FilterRow_assign.apply(this, arguments);
};








/**
 * @hidden
 */
var FILTER_ROW_CLASS = 'k-table-row k-filter-row';
/**
 *
 * @hidden
 */
var FilterRow = /** @class */ (function (_super) {
    FilterRow_extends(FilterRow, _super);
    function FilterRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterRow.prototype.headerCellClassName = function (field, locked) {
        var result = "".concat(locked ? 'k-grid-header-sticky' : '');
        if (this.props.sort &&
            this.props.sort.filter(function (descriptor) { return descriptor.field === field; }).length > 0) {
            result += ' k-sorted';
        }
        return result;
    };
    FilterRow.prototype.setFilter = function (value, operator, field, e) {
        if (!this.props.filterChange) {
            return;
        }
        var filters = [];
        if (value !== '' && value !== null || operator !== '') {
            filters.push({
                field: field,
                operator: operator,
                value: value
            });
        }
        if (this.props.filter && this.props.filter.filters) {
            var oldFilters = this.props.filter.filters || [];
            oldFilters.forEach(function (filter) {
                var descriptor = filter;
                if (descriptor && descriptor.field !== field) {
                    filters.push(descriptor);
                }
            });
        }
        var logic = this.props.filter && this.props.filter.logic ? this.props.filter.logic : 'and';
        this.props.filterChange(filters.length > 0 ? { logic: logic, filters: filters } : null, e);
    };
    FilterRow.prototype.render = function () {
        var _this = this;
        var intl = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var oldFilters = this.props.filter && this.props.filter.filters || [];
        var activeFilter = function (field) {
            if (field === undefined) {
                return;
            }
            var currentFilters = oldFilters.filter(function (filter) { return filter.field === field; });
            return currentFilters.length ? currentFilters[0] : undefined;
        };
        var serviceIndex = 0, index = -1;
        var filterCells = this.props.columns.filter(function (c) { return c.children.length === 0; })
            .map(function (column) {
            var filterType = getFilterType(column.filter);
            var currentActiveFilter = activeFilter(column.field);
            var ariaLabel = column.filterable ? intl.toLanguageString(filterAriaLabel, messages[filterAriaLabel]) : undefined;
            var value = currentActiveFilter && currentActiveFilter.value;
            if (value === undefined) {
                value = filterType === 'text' ? '' : null;
            }
            var filterCellProps = column.filterable && {
                render: _this.props.cellRender,
                field: column.field,
                title: column.filterTitle,
                value: value,
                operator: currentActiveFilter && currentActiveFilter.operator,
                operators: operatorMap(_this.props.filterOperators[filterType] || [], intl),
                booleanValues: operatorMap(booleanFilterValues, intl),
                filterType: filterType,
                ariaLabel: ariaLabel,
                onChange: function (e) { _this.setFilter(e.value, e.operator, column.field, e.syntheticEvent); }
            };
            var key = (column.declarationIndex >= 0) ? ++index : --serviceIndex;
            var ariaAttrs = {
                ariaLabel: ariaLabel,
                ariaColumnIndex: column.ariaColumnIndex
            };
            var style = column.left !== undefined
                ? !_this.props.isRtl
                    ? { left: column.left, right: column.right }
                    : { left: column.right, right: column.left }
                : {};
            var thProps = FilterRow_assign({ columnId: index_mjs_.tableKeyboardNavigationTools.getFilterColumnId(column.id), navigatable: column.navigatable, style: style, className: (0,main_js_.classNames)('k-table-th', _this.headerCellClassName(column.field, column.locked) || undefined), role: 'columnheader' }, ariaAttrs);
            var content = (filterCellProps && (column.filterCell ?
                index_js_.createElement(column.filterCell, FilterRow_assign({}, filterCellProps)) :
                index_js_.createElement(GridFilterCell, FilterRow_assign({ size: _this.props.size }, filterCellProps))));
            var customCells = resolveCells(_this.props.cells, column.cells);
            if (customCells && customCells.filterCell) {
                var CustomCell = customCells.filterCell;
                return (index_js_.createElement(CustomCell, FilterRow_assign({ key: key }, filterCellProps, { thProps: thProps, index: index }), content));
            }
            return (index_js_.createElement(index_mjs_.HeaderThElement, FilterRow_assign({ key: key }, thProps), content));
        });
        return index_js_.createElement("tr", { className: FILTER_ROW_CLASS, "aria-rowindex": this.props.ariaRowIndex, role: "row" }, filterCells);
    };
    return FilterRow;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(FilterRow);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/drag/GroupingIndicator.js
var GroupingIndicator_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * @hidden
 */
var GroupingIndicator = /** @class */ (function (_super) {
    GroupingIndicator_extends(GroupingIndicator, _super);
    function GroupingIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.draggable = null;
        /**
         * @hidden
         */
        _this.onPress = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.onPress) {
                _this.props.onPress(data.event, element);
            }
        };
        /**
         * @hidden
         */
        _this.onDrag = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.onDrag) {
                _this.props.onDrag(data.event, element);
            }
        };
        /**
         * @hidden
         */
        _this.onRelease = function (data) {
            var element = _this.draggable && _this.draggable.element;
            if (element && _this.props.onRelease) {
                _this.props.onRelease(data.event);
            }
        };
        _this.sortChange = function (event) {
            event.preventDefault();
            if (_this.props.onSortChange) {
                var sort = (_this.props.dir === 'asc') ? 'desc' : 'asc';
                _this.props.onSortChange(event, sort);
            }
        };
        _this.groupRemove = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (_this.props.onRemove) {
                _this.props.onRemove(event);
            }
        };
        return _this;
    }
    GroupingIndicator.prototype.render = function () {
        var _this = this;
        var dir = this.props.dir;
        return (index_js_.createElement(main_js_.Draggable, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, ref: function (component) { _this.draggable = component; } },
            index_js_.createElement("div", { className: "k-chip k-chip-md k-chip-solid k-chip-solid-base k-rounded-md", onClick: this.sortChange, role: "button", style: { touchAction: 'none' } },
                index_js_.createElement("span", null,
                    index_js_.createElement(main_js_.IconWrap, { name: 'sort-' + dir + '-small', icon: dir === 'asc' ? index_es_js_.sortAscSmallIcon : index_es_js_.sortDescSmallIcon, size: 'small' })),
                index_js_.createElement("span", { className: 'k-chip-content' }, this.props.title),
                index_js_.createElement("span", { className: "k-chip-actions" },
                    index_js_.createElement("span", { className: "k-chip-action k-chip-remove-action", onClick: this.groupRemove },
                        index_js_.createElement(main_js_.IconWrap, { name: 'x-circle', icon: index_es_js_.xCircleIcon, size: 'small' }))))));
    };
    return GroupingIndicator;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GroupingIndicator);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/GroupPanel.js
var GroupPanel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * @hidden
 */
var GroupPanel = /** @class */ (function (_super) {
    GroupPanel_extends(GroupPanel, _super);
    function GroupPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onGroupRemove = function (event, index) {
            var newGroups = _this.props.group.slice();
            newGroups.splice(index, 1);
            _this.props.groupChange(newGroups, event);
        };
        _this.onGroupSortChange = function (event, index, groupDesc, dir) {
            var group = Object.assign({}, groupDesc, { dir: dir });
            var newGroups = _this.props.group.slice();
            newGroups.splice(index, 1, group);
            _this.props.groupChange(newGroups, event);
        };
        return _this;
    }
    GroupPanel.prototype.render = function () {
        var _this = this;
        var groupsProp = this.props.group || [];
        var groups = groupsProp.map(function (groupDesc, index) { return (index_js_.createElement(GroupingIndicator, { key: index, dir: groupDesc.dir || 'asc', title: _this.props.resolveTitle(groupDesc.field), onRemove: function (event) {
                _this.onGroupRemove(event, index);
            }, onSortChange: function (event, dir) {
                _this.onGroupSortChange(event, index, groupDesc, dir);
            }, onPress: _this.props.pressHandler, onDrag: _this.props.dragHandler, onRelease: _this.props.releaseHandler })); });
        return (index_js_.createElement("div", { ref: this.props.refCallback, className: "k-grouping-header", role: "toolbar", "aria-label": (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(groupPanelAriaLabel, messages[groupPanelAriaLabel]), "aria-controls": this.props.ariaControls || '' },
            index_js_.createElement("div", { className: "k-chip-list k-chip-list-md", role: "none" }, groups),
            index_js_.createElement("div", { className: "k-grouping-drop-container" },
                !groups.length && (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(groupPanelEmpty, messages[groupPanelEmpty]),
                "\u00A0")));
    };
    return GroupPanel;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GroupPanel);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/footer/Footer.js
var Footer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * @hidden
 */
var Footer = /** @class */ (function (_super) {
    Footer_extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.footerWrap = null;
        _this.table = null;
        _this.scrollbarWidth = (0,main_js_.getScrollbarWidth)();
        return _this;
    }
    Footer.prototype.componentDidMount = function () {
        this.setState({});
    };
    /**
     *
     * @param scrollLeft - Scrolls to the left (in pixels).
     */
    Footer.prototype.setScrollLeft = function (scrollLeft) {
        if (this.footerWrap) {
            this.footerWrap.scrollLeft = scrollLeft;
        }
    };
    /**
     *
     * @param width - Scrolls the width (in pixels).
     */
    Footer.prototype.setWidth = function (width) {
        if (this.table) {
            this.table.style.width = width + 'px';
        }
    };
    Footer.prototype.render = function () {
        var _a;
        var _this = this;
        if (!this.props.staticHeaders) {
            return (index_js_.createElement("tfoot", { className: "k-table-tfoot" }, this.props.row));
        }
        return (index_js_.createElement("div", { className: "k-grid-footer", role: "presentation" },
            index_js_.createElement("div", { ref: function (div) { _this.footerWrap = div; }, className: "k-grid-footer-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, role: "presentation" },
                index_js_.createElement("table", { ref: function (table) { _this.table = table; }, className: (0,main_js_.classNames)('k-table k-grid-footer-table', (_a = {
                            'k-table-md': !this.props.size
                        },
                        _a["k-table-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                        _a), this.props.className), role: "presentation" },
                    index_js_.createElement("colgroup", { ref: function (e) { _this.props.columnResize.colGroupFooter = e; }, role: "presentation" }, this.props.cols),
                    index_js_.createElement("tfoot", { className: "k-table-tfoot", role: "presentation" }, this.props.row)))));
    };
    return Footer;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/VirtualScroll.js

/**
 * @hidden
 */
var VirtualScroll = /** @class */ (function () {
    function VirtualScroll(cached) {
        var _this = this;
        this.table = null;
        this.containerHeight = 0;
        this.topCacheCount = 0; // 4;
        this.attendedSkip = 0; // -4;
        this.propsSkip = 0;
        this.total = 0;
        this.scrollableVirtual = false;
        this.realSkip = 0;
        this.pageSize = 0;
        this.PageChange = null;
        this.tableBodyRef = index_js_.createRef();
        this.fixedScroll = false;
        this.askedSkip = undefined;
        this.containerRef = index_js_.createRef();
        this.tableTransform = '';
        this.prevScrollPos = 0;
        this.tableTranslate = 0;
        this.scrollSyncing = false;
        this.reactVersion = Number.parseFloat(index_js_.version);
        this.topItems = function (heights, skipTopBuffer) {
            if (!_this.container || skipTopBuffer) {
                return { topItemsCount: 0, topItemsHeight: 0 };
            }
            var screenHeight = _this.container.clientHeight;
            var itemsOnScreen = Math.ceil(screenHeight / heights[0].line);
            var topItemsCount = Math.ceil((heights.length - itemsOnScreen) / 2);
            var topItemsHeight = 0;
            for (var i = 0; i < topItemsCount; i++) {
                topItemsHeight += heights[i].line + heights[i].acc;
            }
            return {
                topItemsCount: topItemsCount,
                topItemsHeight: topItemsHeight,
                itemsNeededOnScreen: itemsOnScreen + itemsOnScreen / 2
            };
        };
        this.horizontalScrollbarHeight = function () {
            if (!_this.container) {
                return 0;
            }
            return _this.container.offsetHeight - _this.container.clientHeight;
        };
        if (cached) {
            this.topCacheCount = 4;
            this.attendedSkip = -this.topCacheCount;
        }
        this.scrollHandler = this.scrollHandler.bind(this);
    }
    Object.defineProperty(VirtualScroll.prototype, "container", {
        get: function () {
            return this.containerRef.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VirtualScroll.prototype, "rowHeights", {
        /**
         * @return - The row heights in an array.
         */
        get: function () {
            var result = [];
            var allRows = this.tableBodyRef.current && this.tableBodyRef.current.children || [];
            var accumulate = 0;
            for (var i = 0; i < allRows.length; i++) {
                if (allRows[i].className.indexOf('k-grouping-row') > -1) {
                    accumulate += allRows[i].scrollHeight;
                    continue;
                }
                if (allRows[i].className.indexOf('k-detail-row') > -1) {
                    result[result.length - 1].line += allRows[i].scrollHeight;
                }
                else {
                    result.push({
                        line: allRows[i].scrollHeight,
                        acc: accumulate
                    });
                    accumulate = 0;
                }
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    VirtualScroll.prototype.changePage = function (skip, e) {
        this.attendedSkip = skip - this.topCacheCount;
        if (this.PageChange) {
            this.PageChange({
                skip: Math.max(0, skip - this.topCacheCount),
                take: this.pageSize
            }, e);
        }
    };
    VirtualScroll.prototype.translate = function (dY, forceSet) {
        this.tableTranslate = dY;
        if (this.scrollableVirtual && this.table) {
            if (this.reactVersion <= 17 || forceSet) {
                this.table.style.transform = 'translateY(' + dY + 'px)';
            }
            else {
                this.tableTransform = 'translateY(' + dY + 'px)';
            }
        }
    };
    VirtualScroll.prototype.reset = function () {
        this.scrollSyncing = true;
        if (this.fixedScroll) {
            return;
        }
        if (this.container) {
            this.container.scrollTop = 0;
        }
        this.translate(0, true);
    };
    VirtualScroll.prototype.localScrollUp = function (e) {
        if (!this.container) {
            return;
        }
        var heights = this.rowHeights;
        var scrollTop = this.container.scrollTop;
        var targetTranslate = this.tableTranslate;
        var rowsCount = 0;
        var _a = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a.topItemsCount, topItemsHeight = _a.topItemsHeight, itemsNeededOnScreen = _a.itemsNeededOnScreen;
        var additionalOnTop = scrollTop - targetTranslate;
        if ((additionalOnTop > topItemsHeight) || heights.length <= itemsNeededOnScreen) {
            return;
        }
        while ((rowsCount < this.topCacheCount + this.attendedSkip - this.realSkip + topItemsCount)
            && this.propsSkip - rowsCount > 0 &&
            !(targetTranslate + (heights[heights.length - 1 - rowsCount].line + heights[heights.length - 1 - rowsCount].acc) + additionalOnTop <= scrollTop)) {
            targetTranslate -= heights[heights.length - 1 - rowsCount].line +
                heights[heights.length - 1 - rowsCount].acc;
            rowsCount++;
        }
        if (rowsCount === 0 && this.topCacheCount === 0 && this.attendedSkip > 0) {
            // allows local scrolling up, when top caching is disabled
            // for variable heights 'topCacheCount' should be atleast 1 to avoid flickering
            targetTranslate = Math.max(targetTranslate - heights[0].line, 0);
            rowsCount = 1;
        }
        if (this.propsSkip - rowsCount <= 0 && targetTranslate > scrollTop) {
            this.translate(0);
            this.changePage(0, e);
            this.container.scrollTop = 0;
            return;
        }
        if (targetTranslate > scrollTop) {
            targetTranslate = scrollTop;
            // need to handle these cases
            // if the item height is not available:
            //    floor the translate to beginning of the item in absolute value
        }
        if (targetTranslate !== this.tableTranslate) {
            this.translate(Math.max(0, targetTranslate - topItemsHeight));
            var nextSkip = Math.max(0, this.propsSkip - rowsCount - topItemsCount);
            this.changePage(nextSkip, e);
        }
    };
    VirtualScroll.prototype.localScrollDown = function (e) {
        if (!this.container) {
            return;
        }
        var heights = this.rowHeights;
        var scrollTop = this.container.scrollTop;
        var targetTranslate = this.tableTranslate;
        var rowsCount = 0;
        var _a = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a.topItemsCount, topItemsHeight = _a.topItemsHeight, itemsNeededOnScreen = _a.itemsNeededOnScreen;
        while (rowsCount < heights.length - this.topCacheCount &&
            !(targetTranslate + heights[rowsCount].line + heights[rowsCount].acc > scrollTop)) {
            targetTranslate += heights[rowsCount].line + heights[rowsCount].acc;
            rowsCount++;
        }
        if ((topItemsCount > this.propsSkip + rowsCount) || heights.length <= itemsNeededOnScreen) {
            return;
        }
        if (rowsCount >= heights.length - this.topCacheCount && this.propsSkip + rowsCount >= this.total) {
            this.translate(targetTranslate - topItemsHeight);
            this.changePage(this.total - 1 - topItemsCount, e);
        }
        else if (targetTranslate !== this.tableTranslate && this.propsSkip + rowsCount - topItemsCount !== this.propsSkip) {
            this.translate(targetTranslate - topItemsHeight);
            this.changePage(this.propsSkip + rowsCount - topItemsCount, e);
        }
    };
    VirtualScroll.prototype.scrollNonStrict = function (e) {
        var floatRowIndex = this.total * this.prevScrollPos / (this.containerHeight);
        var rowIndex = Math.floor(floatRowIndex);
        if (rowIndex >= this.total) {
            rowIndex = this.total - 1;
        }
        var rowpercentage = Math.min(floatRowIndex - rowIndex, 1);
        var microAdjust = 0;
        var rowIndexOffset = rowIndex - this.propsSkip;
        var heights = this.rowHeights;
        if (rowIndexOffset >= 0 && rowIndexOffset <= 1) {
            microAdjust = -((heights[0].line + heights[0].acc) * rowpercentage);
        }
        else if (rowIndexOffset === -1) {
            microAdjust = -((heights[heights.length - 1].line + heights[heights.length - 1].acc) * rowpercentage);
        }
        var _a = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a.topItemsCount, topItemsHeight = _a.topItemsHeight;
        this.translate(Math.max(0, microAdjust - topItemsHeight - this.horizontalScrollbarHeight() + this.containerHeight * floatRowIndex / this.total));
        this.changePage(rowIndex - topItemsCount, e);
    };
    VirtualScroll.prototype.scrollHandler = function (e) {
        if (!this.scrollableVirtual) {
            return;
        }
        if (this.scrollSyncing || !this.container || !this.table) {
            this.scrollSyncing = false;
            return;
        }
        var scrollTop = this.container.scrollTop;
        var prev = this.prevScrollPos;
        this.prevScrollPos = scrollTop;
        if (this.askedSkip !== undefined) {
            this.translate(this.containerHeight * this.askedSkip / this.total);
            this.changePage(this.askedSkip, e);
            this.prevScrollPos = scrollTop;
            this.askedSkip = undefined;
            return;
        }
        if (scrollTop - prev < 0 && scrollTop > this.tableTranslate - this.table.scrollHeight / 10) {
            this.localScrollUp(e);
        }
        else if (scrollTop - prev > 0 && scrollTop < this.tableTranslate + this.table.scrollHeight * 2 / 3) {
            this.localScrollDown(e);
        }
        else {
            this.scrollNonStrict(e);
        }
        this.prevScrollPos = scrollTop;
    };
    return VirtualScroll;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/VirtualScrollFixed.js

/**
 * @hidden
 */
var RowHeightService = /** @class */ (function () {
    function RowHeightService(total, rowHeight, detailRowHeight, data) {
        if (total === void 0) { total = 0; }
        this.total = total;
        this.offsets = [];
        this.heights = [];
        var agg = 0;
        for (var idx = 0; idx < total; idx++) {
            this.offsets.push(agg);
            var currHeight = (data && data[idx].expanded && data[idx].rowType === 'data') ? detailRowHeight : rowHeight;
            agg += currHeight;
            this.heights.push(currHeight);
        }
    }
    RowHeightService.prototype.height = function (rowIndex) {
        return this.heights[rowIndex];
    };
    RowHeightService.prototype.index = function (position) {
        if (position < 0) {
            return undefined;
        }
        var result = this.offsets.reduce(function (prev, current, idx) {
            if (prev !== undefined) {
                return prev;
            }
            else if (current === position) {
                return idx;
            }
            else if (current > position) {
                return idx - 1;
            }
            return undefined;
        }, undefined);
        return result === undefined ? this.total - 1 : result;
    };
    RowHeightService.prototype.offset = function (rowIndex) {
        return this.offsets[rowIndex];
    };
    RowHeightService.prototype.totalHeight = function () {
        var lastOffset = this.offsets[this.offsets.length - 1];
        var lastHeight = this.heights[this.heights.length - 1];
        return lastOffset + lastHeight;
        // return this.heights.reduce((prev, curr) => prev + curr, 0);
    };
    return RowHeightService;
}());

/**
 * @hidden
 */
var VirtualScrollFixed = /** @class */ (function () {
    function VirtualScrollFixed(_cached) {
        this.table = null;
        this.containerHeight = 0;
        this.topCacheCount = 0;
        this.attendedSkip = 0;
        this.propsSkip = 0;
        this.total = 0;
        this.scrollableVirtual = false;
        this.realSkip = 0;
        this.pageSize = 0;
        this.PageChange = null;
        this.tableBodyRef = index_js_.createRef();
        this.fixedScroll = false;
        this.askedSkip = undefined;
        this.containerRef = index_js_.createRef();
        this.tableTransform = '';
        this.scrollSyncing = false;
        this.lastLoaded = 0;
        this.firstLoaded = 0;
        this.lastScrollTop = 0;
        this.reactVersion = Number.parseFloat(index_js_.version);
        this.firstLoaded = this.pageSize;
        this.lastLoaded = this.realSkip + this.pageSize;
        this.scrollHandler = this.scrollHandler.bind(this);
    }
    Object.defineProperty(VirtualScrollFixed.prototype, "container", {
        get: function () {
            return this.containerRef.current;
        },
        enumerable: false,
        configurable: true
    });
    VirtualScrollFixed.prototype.translate = function (dY, forceSet) {
        if (this.scrollableVirtual && this.table) {
            if (this.reactVersion <= 17 || forceSet) {
                this.table.style.transform = 'translateY(' + dY + 'px)';
            }
            else {
                this.tableTransform = 'translateY(' + dY + 'px)';
            }
        }
    };
    VirtualScrollFixed.prototype.changePage = function (skip, e) {
        if (this.PageChange) {
            this.PageChange({ skip: Math.max(0, skip), take: this.pageSize }, e);
        }
    };
    VirtualScrollFixed.prototype.reset = function () {
        this.scrollSyncing = true;
        if (this.fixedScroll) {
            return;
        }
        if (this.container) {
            this.container.scrollTop = 0;
        }
        this.translate(0, true);
    };
    VirtualScrollFixed.prototype.scrollHandler = function (e) {
        if (!this.scrollableVirtual || !this.container || !this.table ||
            !this.rowHeightService || !this.containerRef.current) {
            return;
        }
        if (this.scrollSyncing) {
            this.scrollSyncing = false;
            return;
        }
        var scrollTop = this.container.scrollTop;
        var up = this.lastScrollTop >= scrollTop;
        var down = !up;
        this.lastScrollTop = scrollTop;
        var firstItemIndex = this.rowHeightService.index(scrollTop);
        var firstItemOffset = this.rowHeightService.offset(firstItemIndex);
        var offsetHeight = this.containerRef.current.offsetHeight;
        var lastItemIndex = this.rowHeightService.index(scrollTop + offsetHeight);
        if (down && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
            var overflow = (firstItemIndex + this.pageSize) - this.total;
            if (overflow > 0) {
                firstItemIndex = firstItemIndex - overflow;
                firstItemOffset = this.rowHeightService.offset(firstItemIndex);
            }
            this.firstLoaded = firstItemIndex;
            this.translate(firstItemOffset);
            var nextTake = this.firstLoaded + this.pageSize;
            this.lastLoaded = Math.min(nextTake, this.total);
            this.changePage(this.firstLoaded, e);
        }
        else if (up && firstItemIndex < this.firstLoaded) {
            var nonVisibleBuffer = Math.floor(this.pageSize * 0.3);
            this.firstLoaded = Math.max(firstItemIndex - nonVisibleBuffer, 0);
            this.translate(this.rowHeightService.offset(this.firstLoaded));
            this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total);
            this.changePage(this.firstLoaded, e);
        }
    };
    return VirtualScrollFixed;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/drag/ColumnResize.js
// offsetWidth() is slowly transition to reporting double instead of integet in all browsers
// during this process (which is a bit back-and-forth) we need to make sure we are working across all browsers and versions
var OFFSET_ROUND = 1;
var LOCK_COLUMN_BUFFER = 20;
/**
 * @hidden
 */
var ColumnResize = /** @class */ (function () {
    function ColumnResize(triggerResize) {
        var _this = this;
        // Typings. `col` and `colgroup` do not differ, both represent a `HTMLTableColElement`.
        // Implemented as `any`.
        this.columns = [];
        /**
         * The settings for resizing the Grid.
         */
        this.resizable = false;
        this.isRtl = false;
        this.setIsRtl = function (isRtl) {
            _this.isRtl = isRtl;
        };
        this.dragHandler = function (event, column, dragCue, end) {
            var e = event.originalEvent;
            if (!end) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            var thElement = dragCue.closest('th');
            if (!thElement || !thElement) {
                return;
            }
            var oldWidth = thElement.clientWidth;
            var newWidth = oldWidth;
            if (_this.isRtl) {
                newWidth += (dragCue.getBoundingClientRect().right - (dragCue.offsetWidth / 2)) - event.clientX;
            }
            else {
                newWidth += event.clientX - dragCue.getBoundingClientRect().left - (dragCue.offsetWidth / 2);
            }
            if (!end && Math.abs(newWidth - oldWidth) < 1) {
                return;
            }
            _this.fixateInitialWidths(thElement.parentElement.clientWidth);
            _this.setWidths(column, Math.floor(newWidth) / oldWidth);
            var index = _this.columns.filter(function (c) { return !c.children.length; }).findIndex(function (c) { return c.id === column.id; });
            _this.onResize(index, oldWidth, newWidth, e, end, column.id);
        };
        this.dblClickHandler = function (event, columnIds) {
            var columns = _this.columns.filter(function (c) { return columnIds.indexOf(c.id) > -1; });
            if (!_this.colGroupMain || !columns.length) {
                return;
            }
            var leafsForAdjust = {};
            var stack = columns;
            while (stack.length > 0) {
                var currentCol = stack.pop();
                if (!currentCol) {
                    break;
                }
                if (currentCol.children.length) {
                    stack.push.apply(stack, currentCol.children);
                }
                else {
                    leafsForAdjust[currentCol.id] = currentCol;
                }
            }
            var leafs = _this.columns.filter(function (c) { return !c.children.length; });
            var indexesForAdjust = [];
            leafs.forEach(function (currentColumn, index) {
                if (leafsForAdjust[currentColumn.id]) {
                    indexesForAdjust.push(index);
                }
            });
            var tables = [_this.colGroupMain.parentElement];
            var colgroups = [_this.colGroupMain];
            if (_this.colGroupHeader) {
                tables.push(_this.colGroupHeader.parentElement);
                colgroups.push(_this.colGroupHeader);
            }
            if (_this.colGroupFooter) {
                tables.push(_this.colGroupFooter.parentElement);
                colgroups.push(_this.colGroupFooter);
            }
            tables.forEach(function (table) { return table.classList.add('k-autofitting'); });
            var maxWidths = [];
            colgroups.forEach(function (colgroup) {
                indexesForAdjust.forEach(function (columnIndex) {
                    if (colgroup.children[columnIndex]) {
                        colgroup.children[columnIndex].width = '';
                        maxWidths[columnIndex] = Math.max(maxWidths[columnIndex] || 0, colgroup.children[columnIndex].offsetWidth + OFFSET_ROUND);
                    }
                });
            });
            colgroups.forEach(function (colgroup) {
                indexesForAdjust.forEach(function (columnIndex) {
                    if (colgroup.children[columnIndex]) {
                        colgroup.children[columnIndex].width = maxWidths[columnIndex] + 'px';
                        leafs[columnIndex].width = maxWidths[columnIndex];
                    }
                });
            });
            tables.forEach(function (table) { return table.classList.remove('k-autofitting'); });
            _this.onResize(indexesForAdjust[0], 0, 0, event, true, columnIds[0]);
        };
        this.updateColElements = function (affectedColumns) {
            var leafColumns = _this.columns.filter(function (c) { return !c.children.length; });
            var difference = 1e-10;
            var _loop_1 = function (i) {
                var currentColumn = affectedColumns[i];
                var colIndex = leafColumns.findIndex(function (c) { return c.id === currentColumn.id; });
                var currentColumnFloatWidth = parseFloat((currentColumn.width || 0).toString());
                var currentColumnFloorWidth = Math.floor(currentColumnFloatWidth);
                difference += currentColumnFloatWidth - currentColumnFloorWidth;
                var currentWidth = currentColumnFloorWidth + Math.floor(difference);
                difference -= Math.floor(difference);
                if (_this.colGroupMain && _this.colGroupMain.children[colIndex]) {
                    var mainWidth = parseInt(_this.colGroupMain.children[colIndex].width, 10);
                    _this.colGroupMain.children[colIndex].width = currentWidth + 'px';
                    _this.updateNextLockedCol(_this.colGroupMain.parentElement, currentColumn, mainWidth - currentWidth);
                }
                if (_this.colGroupHeader && _this.colGroupHeader.children[colIndex]) {
                    var headerWidth = parseInt(_this.colGroupHeader.children[colIndex].width, 10);
                    // static headers
                    _this.colGroupHeader.children[colIndex].width = currentWidth + 'px';
                    _this.updateNextLockedCol(_this.colGroupHeader.parentElement, currentColumn, headerWidth - currentWidth);
                }
                if (_this.colGroupFooter && _this.colGroupFooter.children[colIndex]) {
                    var footerWidth = parseInt(_this.colGroupFooter.children[colIndex].width, 10);
                    // static footers
                    _this.colGroupFooter.children[colIndex].width = currentWidth + 'px';
                    _this.updateNextLockedCol(_this.colGroupFooter.parentElement, currentColumn, footerWidth - currentWidth);
                }
            };
            for (var i = 0; i < affectedColumns.length; i++) {
                _loop_1(i);
            }
        };
        this.onResize = triggerResize;
    }
    ColumnResize.prototype.fixateInitialWidths = function (width) {
        var columns = this.columns.filter(function (c) { return !c.children.length; });
        var remainingCount = 0;
        var cols = this.colGroupMain ? this.colGroupMain.children : [];
        for (var i = 0; i < cols.length; i++) {
            if (cols[i].width) {
                width -= parseFloat(cols[i].width);
            }
            else {
                remainingCount++;
            }
        }
        if (remainingCount === 0) {
            return;
        }
        var perCol = Math.floor(width / remainingCount);
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            if (!col.width) {
                col.width = perCol;
                columns[i].width = perCol.toString();
                if (this.colGroupHeader) {
                    this.colGroupHeader.children[i].width = perCol;
                }
                if (this.colGroupFooter) {
                    this.colGroupFooter.children[i].width = perCol;
                }
            }
        }
    };
    ColumnResize.prototype.setWidths = function (column, coef) {
        var indexInOriginal = this.columns.findIndex(function (c) { return c.id === column.id; });
        var toAdjust = [];
        var more = column.children.length;
        for (var i = indexInOriginal + 1; more > 0 && i < this.columns.length; i++, more--) {
            var cc = this.columns[i];
            if (!cc.children.length) {
                toAdjust.push(cc);
            }
            else {
                more += cc.children.length;
            }
        }
        if (toAdjust.length === 0) {
            toAdjust.push(column);
        }
        toAdjust.forEach(function (colToAdjust) {
            var targetWidth = colToAdjust.width ? parseFloat(colToAdjust.width.toString()) * coef : 0;
            var min = colToAdjust.minResizableWidth === undefined ? 10 : colToAdjust.minResizableWidth;
            if (targetWidth < min) {
                targetWidth = min;
            }
            colToAdjust.width = targetWidth;
        });
        this.updateColElements(toAdjust);
        return toAdjust;
    };
    ColumnResize.prototype.updateNextLockedCol = function (element, current, deltaWidth) {
        var _this = this;
        var currentIndex = current.index;
        var gridWrapperEl = this.colGroupMain.parentElement.closest('.k-grid');
        var maxWidth = gridWrapperEl === null || gridWrapperEl === void 0 ? void 0 : gridWrapperEl.clientWidth;
        var widthOfLocked = this.columns.filter(function (c) { return c.locked; }).map(function (e) { return parseInt(e.width + '', 10); }).reduce(function (a, b) { return a + b; }, 0);
        if (!current.locked || maxWidth <= widthOfLocked + LOCK_COLUMN_BUFFER) {
            return;
        }
        this.columns.forEach(function (nColumn) {
            if ((nColumn === null || nColumn === void 0 ? void 0 : nColumn.locked) && deltaWidth) {
                var allColumnEls = element === null || element === void 0 ? void 0 : element.querySelectorAll('[aria-colindex="' + nColumn.ariaColumnIndex + '"]');
                allColumnEls === null || allColumnEls === void 0 ? void 0 : allColumnEls.forEach(function (el) {
                    var currentStyle = el.style;
                    if (_this.isRtl) {
                        if (nColumn.index > currentIndex && currentStyle && currentStyle.right) {
                            currentStyle.right = parseInt(currentStyle.right, 10) - deltaWidth + 'px';
                        }
                        if (nColumn.index < currentIndex && currentStyle && currentStyle.left) {
                            currentStyle.left = parseInt(currentStyle.left, 10) - deltaWidth + 'px';
                        }
                    }
                    else {
                        if (nColumn.index > currentIndex && currentStyle && currentStyle.left) {
                            currentStyle.left = parseInt(currentStyle.left, 10) - deltaWidth + 'px';
                        }
                        if (nColumn.index < currentIndex && currentStyle && currentStyle.right) {
                            currentStyle.right = parseInt(currentStyle.right, 10) - deltaWidth + 'px';
                        }
                    }
                });
            }
        });
    };
    return ColumnResize;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/drag/CommonDragLogic.js


/**
 * @hidden
 */
var CommonDragLogic = /** @class */ (function () {
    function CommonDragLogic(columnReorder, groupReorder, columnToGroup) {
        var _this = this;
        this.refDragElementClue = index_js_.createRef();
        this.refDropElementClue = index_js_.createRef();
        this.columns = [];
        this.reorderable = false;
        this.groupable = false;
        this.startColumn = -1;
        this.startGroup = -1;
        this.currentColumn = -1;
        this.currentGroup = -1;
        this.groupPanelDivElement = null;
        this.refGroupPanelDiv = function (e) {
            _this.groupPanelDivElement = (e && e.children) ? e.children[0] : e;
        };
        this.pressHandler = function (event, element) {
            var startColumn = _this.getColumnIndex(event, element);
            _this.startGroup = _this.getGroupIndex(event);
            if (startColumn >= 0) {
                var col = _this.columns[startColumn];
                if (col.reorderable && _this.reorderable || col.groupable && _this.groupable) {
                    _this.startColumn = startColumn;
                }
            }
        };
        this.dragHandler = function (event, element) {
            if (!event.isTouch) {
                event.originalEvent.preventDefault();
            }
            event.originalEvent.stopPropagation();
            if (_this.startColumn === -1 && _this.startGroup === -1) {
                return;
            }
            _this.currentColumn = _this.getColumnIndex(event, element);
            var groupPanelChildren = _this.groupPanelDivElement && _this.groupPanelDivElement.children;
            _this.currentGroup = _this.isTargetGroupingContainer(event)
                ? groupPanelChildren && groupPanelChildren.length
                    ? groupPanelChildren.length
                    : 0
                : _this.getGroupIndex(event);
            var invalidIndex = !_this.isValid();
            if (invalidIndex) {
                _this.currentColumn = -1;
                _this.currentGroup = -1;
            }
            var targetElement = (_this.currentColumn >= 0) ?
                element.children[_this.columns[_this.currentColumn].index] :
                _this.isTargetGroupingContainer(event)
                    ? event.originalEvent.target
                    : _this.groupPanelDivElement && _this.groupPanelDivElement.children[_this.currentGroup];
            _this.updateDragElementClue(event, element, targetElement, invalidIndex);
            _this.updateDropElementClue(event, element, targetElement, invalidIndex);
        };
        this.releaseHandler = function (event) {
            var prevColumnIndex = _this.startColumn;
            var nextColumnIndex = _this.currentColumn;
            var prevGroupIndex = _this.startGroup;
            var nextGroupIndex = _this.currentGroup;
            event.originalEvent.preventDefault();
            if (_this.dropElementClue) {
                _this.dropElementClue.setState({ visible: false });
            }
            if (_this.dragElementClue) {
                _this.dragElementClue.setState({ visible: false });
            }
            var isValid = _this.isValid();
            _this.startColumn = _this.startGroup = _this.currentColumn = _this.currentGroup = -1;
            if (!isValid) {
                return;
            }
            if (prevColumnIndex >= 0 && nextColumnIndex >= 0) {
                _this.columnReorder(prevColumnIndex, nextColumnIndex, event.originalEvent);
            }
            else if (prevGroupIndex >= 0 && nextGroupIndex >= 0) {
                _this.groupReorder(prevGroupIndex, nextGroupIndex, event.originalEvent);
            }
            else if (prevColumnIndex >= 0 && nextGroupIndex >= 0) {
                _this.columnToGroup(prevColumnIndex, nextGroupIndex, event.originalEvent);
            }
        };
        this.columnReorder = columnReorder;
        this.groupReorder = groupReorder;
        this.columnToGroup = columnToGroup;
    }
    Object.defineProperty(CommonDragLogic.prototype, "dragClueRef", {
        get: function () {
            return this.refDragElementClue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonDragLogic.prototype, "dropClueRef", {
        get: function () {
            return this.refDropElementClue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonDragLogic.prototype, "dragElementClue", {
        get: function () {
            return this.refDragElementClue.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonDragLogic.prototype, "dropElementClue", {
        get: function () {
            return this.refDropElementClue.current;
        },
        enumerable: false,
        configurable: true
    });
    CommonDragLogic.prototype.getColumnIndex = function (event, parent) {
        if (!parent || (parent.parentElement === this.groupPanelDivElement)) {
            return -1;
        }
        var index = (0,index_mjs_.getIndex)(event, parent);
        if (index === -1) {
            return -1;
        }
        var _loop_1 = function (i) {
            if (parent.parentNode.children[i] === parent) {
                return { value: this_1.columns.findIndex(function (c) { return ((c.index === index) && (c.depth === i)); }) };
            }
        };
        var this_1 = this;
        for (var i = 0; i < parent.parentNode.children.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return -1;
    };
    CommonDragLogic.prototype.isTargetGroupingContainer = function (event) {
        var target = event.originalEvent.target;
        return target.className.indexOf
            ? target.className.indexOf('k-grouping-drop-container') !== -1
            : false;
    };
    CommonDragLogic.prototype.getGroupIndex = function (event) {
        return (0,index_mjs_.getIndex)(event, this.groupPanelDivElement);
    };
    CommonDragLogic.prototype.isValid = function () {
        if (this.startGroup >= 0) {
            // group can be moved into group only
            return this.currentGroup >= 0 && this.currentGroup !== this.startGroup;
        }
        if (this.startColumn === -1) {
            return false;
        }
        if (this.currentGroup >= 0) {
            // column to group is possible
            return this.columns[this.startColumn].groupable === true && this.groupable === true;
        }
        // reorder is possible
        return this.reorderable === true &&
            this.currentColumn >= 0 &&
            this.currentColumn !== this.startColumn &&
            this.columns[this.startColumn].reorderable === true &&
            this.columns[this.currentColumn].parentIndex === this.columns[this.startColumn].parentIndex;
    };
    CommonDragLogic.prototype.updateDragElementClue = function (event, element, targetElement, invalidIndex) {
        if (!this.dragElementClue) {
            return;
        }
        var innerText = this.startColumn >= 0 ?
            element.children[this.columns[this.startColumn].index].innerText :
            element.innerText;
        this.dragElementClue.setState({
            visible: true,
            top: (event.pageY + 10),
            left: event.pageX,
            innerText: innerText,
            status: (invalidIndex || !targetElement) ? 'k-i-cancel' : 'k-i-plus'
        });
    };
    CommonDragLogic.prototype.updateDropElementClue = function (event, element, targetElement, invalidIndex) {
        if (!this.dropElementClue) {
            return;
        }
        if (invalidIndex || !targetElement) {
            this.dropElementClue.setState({ visible: false });
            return;
        }
        var rect = targetElement.getBoundingClientRect();
        var groupElement = targetElement.closest('.k-grouping-header');
        var rectParent = (groupElement || targetElement).getBoundingClientRect();
        var left = rect.left + event.pageX - event.clientX - 6;
        if (!this.isTargetGroupingContainer(event) && (this.currentColumn > this.startColumn
            || this.currentGroup > this.startGroup && this.startGroup !== -1)) {
            left += rect.width;
        }
        var top = rectParent.top + event.pageY - event.clientY;
        this.dropElementClue.setState({
            visible: true,
            top: top,
            left: left,
            height: (this.currentColumn >= 0) ? element.clientHeight : rectParent.height
        });
    };
    return CommonDragLogic;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridCell.js
var GridCell_assign = (undefined && undefined.__assign) || function () {
    GridCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridCell_assign.apply(this, arguments);
};






var GridCell = function (props) {
    var _a;
    var defaultRendering = null;
    var intl = (0,kendo_react_intl_index_mjs_.useInternationalization)();
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    var onContextMenu = index_js_.useCallback(function (event) {
        if (props.onContextMenu) {
            props.onContextMenu.call(undefined, event, props.dataItem, props.field);
        }
    }, [props.onContextMenu, props.dataItem, props.field]);
    var tdProps = null;
    var content = null;
    if (props.rowType === 'groupFooter') {
        tdProps = {
            onContextMenu: onContextMenu,
            className: props.className
        };
        defaultRendering = index_js_.createElement("td", GridCell_assign({}, tdProps));
    }
    else if (props.rowType !== 'groupHeader') {
        if (props.field !== undefined) {
            var data = getNestedValue(props.field, props.dataItem);
            if (data !== undefined && data !== null) {
                content = props.format ?
                    intl.format(props.format, data) :
                    data.toString();
            }
        }
        var className = (0,main_js_.classNames)('k-table-td', props.className, { 'k-selected': props.isSelected });
        tdProps = GridCell_assign((_a = { onContextMenu: onContextMenu, colSpan: props.colSpan, style: props.style, className: className, role: 'gridcell', 'aria-colindex': props.ariaColumnIndex, 'aria-selected': props.isSelected }, _a[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _a), navigationAttributes);
        defaultRendering = (index_js_.createElement("td", GridCell_assign({}, tdProps), content));
    }
    var rowTypeSetting = props.rowType || 'data';
    var customCells = props.cells;
    if (customCells && customCells[rowTypeSetting]) {
        var CustomCell = customCells[rowTypeSetting];
        return (index_js_.createElement(CustomCell, GridCell_assign({}, props, { tdProps: tdProps }), content));
    }
    return props.render ?
        props.render.call(undefined, defaultRendering, props) :
        defaultRendering;
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridGroupCell.js
var GridGroupCell_assign = (undefined && undefined.__assign) || function () {
    GridGroupCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridGroupCell_assign.apply(this, arguments);
};






/**
 * @hidden
 */
var GridGroupCell = function (props) {
    var defaultRendering = null;
    var columnIndex = props.columnIndex, level = props.level, columnsCount = props.columnsCount, rowType = props.rowType, dataItem = props.dataItem, field = props.field, onChange = props.onChange, expanded = props.expanded, render = props.render, dataIndex = props.dataIndex, ariaColumnIndex = props.ariaColumnIndex, isRtl = props.isRtl;
    var definedField = field || '';
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    var localization = (0,kendo_react_intl_index_mjs_.useLocalization)();
    var tdProps = null;
    var td2Props = null;
    var content = null;
    var onKeyDownHandler = index_js_.useCallback(function (event) {
        if (event.isDefaultPrevented()) {
            return;
        }
        if (event.keyCode === main_js_.Keys.enter && onChange) {
            event.preventDefault();
            onChange({
                dataItem: dataItem,
                dataIndex: dataIndex,
                syntheticEvent: event,
                field: undefined,
                value: !expanded
            });
        }
    }, [expanded, onChange, dataItem, dataIndex]);
    var onContextMenu = index_js_.useCallback(function (event) {
        if (props.onContextMenu) {
            props.onContextMenu.call(undefined, event, props.dataItem, props.field);
        }
    }, [props.onContextMenu, props.dataItem, props.field]);
    var renderCellCollapse = function (colspan, styles) {
        var _a;
        var baseMessage = expanded ? groupCollapse : groupExpand;
        var message = localization.toLanguageString(baseMessage, messages[baseMessage]);
        tdProps = GridGroupCell_assign((_a = { className: 'k-table-td', style: GridGroupCell_assign(GridGroupCell_assign({}, props.style), styles), colSpan: colspan, key: 'g-colspan', role: 'gridcell' }, _a['aria-selected'] = false, _a['aria-expanded'] = expanded, _a['aria-colindex'] = ariaColumnIndex, _a.onKeyDown = onKeyDownHandler, _a.onContextMenu = onContextMenu, _a), navigationAttributes);
        content = (index_js_.createElement("p", { className: "k-reset" },
            index_js_.createElement("a", { onClick: function (e) {
                    e.preventDefault();
                    if (onChange) {
                        onChange({
                            dataItem: dataItem,
                            dataIndex: dataIndex,
                            syntheticEvent: e,
                            field: undefined,
                            value: !expanded
                        });
                    }
                }, href: "#", tabIndex: -1, "aria-label": message },
                index_js_.createElement(main_js_.IconWrap, { name: expanded ?
                        'caret-alt-down'
                        : isRtl ? 'caret-alt-left' : 'caret-alt-right', icon: expanded ?
                        index_es_js_.caretAltDownIcon
                        : isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon })),
            ((dataItem[definedField] instanceof Date) && dataItem[definedField].toString) ?
                dataItem[definedField].toString() :
                dataItem[definedField]));
        return (index_js_.createElement("td", GridGroupCell_assign({}, tdProps), content));
    };
    if (columnIndex === undefined || level === undefined || columnIndex < level ||
        columnsCount === undefined || rowType !== 'groupHeader' || dataItem[definedField] === undefined) {
        tdProps = {
            style: props.style,
            key: 'g' + columnIndex,
            className: (0,main_js_.classNames)('k-table-td', 'k-group-cell', { 'k-grid-content-sticky': props.locked }),
            role: 'gridcell',
            onContextMenu: onContextMenu
        };
        defaultRendering = (index_js_.createElement("td", GridGroupCell_assign({}, tdProps)));
    }
    else if (columnIndex <= level && !props.locked) {
        defaultRendering = renderCellCollapse(columnsCount - columnIndex, {});
    }
    else if (columnIndex <= level && props.locked) {
        td2Props = {
            className: 'k-table-td',
            role: 'gridcell',
            colSpan: (columnsCount - columnIndex),
            style: { borderLeftWidth: 0, borderRightWidth: 0 },
            onContextMenu: onContextMenu
        };
        defaultRendering = (index_js_.createElement(index_js_.Fragment, null,
            renderCellCollapse(0, { position: 'sticky', zIndex: 2 }),
            index_js_.createElement("td", GridGroupCell_assign({}, td2Props))));
    }
    var rowTypeSetting = props.rowType || 'data';
    var customCells = props.cells;
    if (customCells && customCells.group
        && customCells.group[rowTypeSetting]) {
        var CustomCell = customCells.group[rowTypeSetting];
        return (index_js_.createElement(CustomCell, GridGroupCell_assign({}, props, { tdProps: tdProps, td2Props: td2Props }), content));
    }
    return render ?
        render.call(undefined, defaultRendering, props) :
        defaultRendering;
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/rows/GridRow.js
var GridRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridRow_assign = (undefined && undefined.__assign) || function () {
    GridRow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridRow_assign.apply(this, arguments);
};



/**
 * The component for each of the items in the `data` property which the Grid renders.
 */
var GridRow = /** @class */ (function (_super) {
    GridRow_extends(GridRow, _super);
    function GridRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridRow.prototype.render = function () {
        var _a;
        var className = (0,main_js_.classNames)('k-table-row', {
            'k-grouping-row': this.props.rowType === 'groupHeader',
            'k-group-footer': this.props.rowType === 'groupFooter',
            'k-master-row': this.props.rowType !== 'groupHeader' &&
                this.props.rowType !== 'groupFooter',
            'k-table-alt-row k-alt': this.props.rowType !== 'groupHeader' &&
                this.props.rowType !== 'groupFooter' &&
                this.props.isAltRow,
            'k-selected': this.props.isSelected,
            'k-grid-edit-row': this.props.isInEdit
        });
        var defaultRendering = (index_js_.createElement("tr", GridRow_assign({ id: this.props.id, onClick: this.props.onClick, onDoubleClick: this.props.onDoubleClick, className: className, style: {
                height: this.props.rowHeight ? this.props.rowHeight + 'px' : '',
                visibility: this.props.isHidden ? 'hidden' : ''
            }, role: "row", "aria-rowindex": this.props.ariaRowIndex, "absolute-row-index": this.props.absoluteRowIndex }, (_a = {}, _a[GRID_ROW_INDEX_ATTRIBUTE] = this.props.rowType === 'data' ? this.props.dataIndex : undefined, _a)), this.props.children));
        return this.props.render ?
            this.props.render.call(undefined, defaultRendering, this.props) :
            defaultRendering;
    };
    return GridRow;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderSelectionCell.js
var GridHeaderSelectionCell_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridHeaderSelectionCell_assign = (undefined && undefined.__assign) || function () {
    GridHeaderSelectionCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridHeaderSelectionCell_assign.apply(this, arguments);
};



/**
 * @hidden
 */
var GridHeaderSelectionCell = /** @class */ (function (_super) {
    GridHeaderSelectionCell_extends(GridHeaderSelectionCell, _super);
    function GridHeaderSelectionCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inputId = (0,main_js_.guid)();
        return _this;
    }
    GridHeaderSelectionCell.prototype.render = function () {
        var _this = this;
        var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
        var defaultRendering = [
            (index_js_.createElement("input", { key: 0, checked: this.props.selectionValue, id: this._inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: function (e) {
                    return _this.props.selectionChange({
                        field: _this.props.field,
                        syntheticEvent: e
                    });
                } })),
            (index_js_.createElement("label", { key: 1, className: "k-checkbox-label", htmlFor: this._inputId })),
            columnMenuWrapperProps.columnMenu && index_js_.createElement(GridColumnMenuWrapper, GridHeaderSelectionCell_assign({}, columnMenuWrapperProps))
        ];
        return this.props.render ?
            this.props.render.call(undefined, defaultRendering, this.props) :
            defaultRendering;
    };
    return GridHeaderSelectionCell;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/GridNoRecords.js
var GridNoRecords_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/* eslint-disable max-len */
/**
 * Represents the GridNoRecords component. The component is rendered when the `data` property of the Grid is empty or `null`.
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return (
 *             <Grid data={[]}>
 *                 <GridNoRecords>
 *                     There is no data available
 *                 </GridNoRecords>
 *                 <GridColumn field="id" />
 *                 <GridColumn field="name" />
 *             </Grid>
 *         );
 *     }
 * }
 * ReactDOM.render(
 *     <App />,
 *     document.querySelector('my-app')
 * );
 * ```
 */
// tslint:enable:max-line-length
var GridNoRecords = /** @class */ (function (_super) {
    GridNoRecords_extends(GridNoRecords, _super);
    function GridNoRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridNoRecords.prototype.render = function () {
        return this.props.children || (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(noRecords, messages[noRecords]);
    };
    /**
     * @hidden
     */
    GridNoRecords.displayName = 'KendoReactGridNoRecords';
    return GridNoRecords;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridNoRecords);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/footer/FooterRow.js
var FooterRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FooterRow_assign = (undefined && undefined.__assign) || function () {
    FooterRow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return FooterRow_assign.apply(this, arguments);
};



/**
 * @hidden
 */
var FooterRow = /** @class */ (function (_super) {
    FooterRow_extends(FooterRow, _super);
    function FooterRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._element = null;
        _this.renderCell = function (column, index) {
            var _a;
            var tdProps = (_a = {
                    colSpan: column.colSpan !== 1 ? column.colSpan : undefined,
                    style: column.left !== undefined
                        ? !_this.props.isRtl
                            ? { left: column.left, right: column.right }
                            : { left: column.right, right: column.left }
                        : {},
                    className: (0,main_js_.classNames)('k-table-td', column.locked && column.left !== undefined ? 'k-grid-footer-sticky' : ''),
                    key: index,
                    role: 'gridcell'
                },
                _a['aria-colindex'] = column.ariaColumnIndex,
                _a);
            var cellProps = FooterRow_assign({ field: column.field, ariaColumnIndex: column.ariaColumnIndex }, tdProps);
            var customCells = resolveCells(_this.props.cells, column.cells);
            if (customCells && customCells.footerCell) {
                var CustomCell = customCells.footerCell;
                return index_js_.createElement(CustomCell, FooterRow_assign({}, cellProps, { tdProps: tdProps, index: index }));
            }
            return (column.footerCell && index_js_.createElement(column.footerCell, FooterRow_assign({}, cellProps, { key: index }))) || (index_js_.createElement("td", FooterRow_assign({}, tdProps)));
        };
        return _this;
    }
    Object.defineProperty(FooterRow.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    FooterRow.prototype.render = function () {
        return index_js_.createElement("tr", { className: 'k-table-row', role: "row", "aria-rowindex": this.props.ariaRowIndex }, footerColumns(this.props.columns).map(this.renderCell));
    };
    return FooterRow;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/paging/GridPagerSettings.js
/**
 * @hidden
 */
var normalizeSettings = function (_a) {
    var _b = _a.buttonCount, buttonCount = _b === void 0 ? 10 : _b, _c = _a.info, info = _c === void 0 ? true : _c, _d = _a.type, type = _d === void 0 ? 'numeric' : _d, _e = _a.pageSizes, pageSizes = _e === void 0 ? undefined : _e, _f = _a.previousNext, previousNext = _f === void 0 ? true : _f, _g = _a.responsive, responsive = _g === void 0 ? undefined : _g, _h = _a.pageSizeValue, pageSizeValue = _h === void 0 ? undefined : _h;
    return ({
        buttonCount: buttonCount,
        info: info,
        pageSizes: pageSizes === true ? [5, 10, 20] : (pageSizes || undefined),
        previousNext: previousNext,
        responsive: responsive === false ? false : true,
        type: type,
        pageSizeValue: pageSizeValue
    });
};
/**
 * @hidden
 */
var GridPagerSettings_normalize = function (settings) {
    return normalizeSettings(settings === true ? {} : settings);
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-grid',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695802233,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailCell.js
var GridDetailCell_assign = (undefined && undefined.__assign) || function () {
    GridDetailCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridDetailCell_assign.apply(this, arguments);
};


/** @hidden */
var GridDetailCell = function (props) {
    var colSpan = props.colSpan, ariaColIndex = props.ariaColIndex, dataItem = props.dataItem, dataIndex = props.dataIndex, id = props.id;
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(id);
    var onContextMenu = index_js_.useCallback(function (event) {
        if (props.onContextMenu) {
            props.onContextMenu.call(undefined, event, props.dataItem);
        }
    }, [props.onContextMenu, props.dataItem]);
    return (index_js_.createElement("td", GridDetailCell_assign({ onContextMenu: onContextMenu, className: "k-table-td k-detail-cell", colSpan: colSpan, "aria-colindex": ariaColIndex, role: 'gridcell' }, navigationAttributes),
        index_js_.createElement(props.detail, { dataItem: dataItem, dataIndex: dataIndex })));
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailHierarchyCell.js
var GridDetailHierarchyCell_assign = (undefined && undefined.__assign) || function () {
    GridDetailHierarchyCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridDetailHierarchyCell_assign.apply(this, arguments);
};


/** @hidden */
var GridDetailHierarchyCell = function (props) {
    var navigationAttributes = (0,index_mjs_.useTableKeyboardNavigation)(props.id);
    return (index_js_.createElement("td", GridDetailHierarchyCell_assign({ className: "k-table-td k-hierarchy-cell" }, navigationAttributes, { role: 'gridcell' })));
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/Grid.js
var Grid_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Grid_assign = (undefined && undefined.__assign) || function () {
    Grid_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Grid_assign.apply(this, arguments);
};
var Grid_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};






























/**
 * Represents the [KendoReact Grid component]({% slug overview_grid %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    constructor(props) {
 *        super(props);
 *        this.state = {
 *            data: [
 *                { 'foo': 'A1', 'bar': 'B1' },
 *                { 'foo': 'A2', 'bar': 'B2' },
 *                { 'foo': 'A3', 'bar': 'B2' }
 *            ]
 *        };
 *    }
 *    render() {
 *        return (
 *            <Grid
 *                data={this.state.data}
 *                reorderable={true}
 *            >
 *                <GridColumn field="foo" />
 *                <GridColumn field="bar" />
 *            </Grid>
 *        );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Grid = /** @class */ (function (_super) {
    Grid_extends(Grid, _super);
    function Grid(props) {
        var _this = _super.call(this, props) || this;
        _this._columns = [];
        _this._columnsMap = [[]];
        _this._columnsMutations = 0;
        _this._resized = false;
        _this._shouldUpdateLeftRight = true;
        _this.contextStateRef = { current: undefined };
        _this.navigationStateRef = { current: undefined };
        _this._data = [];
        _this._slicedData = undefined;
        _this.wrapperScrollTop = 0;
        _this.showLicenseWatermark = false;
        _this.headerRef = index_js_.createRef();
        _this.headerElementRef = index_js_.createRef();
        _this._element = null;
        _this.tableElement = null;
        _this.containerRef = index_js_.createRef();
        _this.tableBodyRef = index_js_.createRef();
        _this._footer = null;
        _this.forceUpdateTimeout = undefined;
        _this.isRtl = false;
        _this._gridId = (0,main_js_.guid)();
        _this._gridRoleElementId = (0,main_js_.guid)(); // Needed for aria-control accessibility attribute
        _this.observer = null;
        _this.handleIntersection = function (entries) {
            var options = { rowIndex: _this.rowIndex };
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    _this.setCurrentOnTop(options);
                }
            });
        };
        _this.setCurrentOnTop = function (options) {
            if (!_this.vs.container || _this.props.scrollable === 'none') {
                return;
            }
            if (_this.observer) {
                _this.observer.disconnect();
            }
            var rowIndex = options.rowIndex;
            if (_this.props.scrollable === 'virtual') {
                _this.vs.askedSkip = rowIndex;
                _this.vs.container.scroll(0, Math.round(_this.vs.askedSkip / _this.vs.total * _this.vs.container.scrollHeight));
            }
            else if (_this.element) {
                var selectedRow = rowIndex < 1
                    ? _this.element.querySelector("tbody > tr:nth-child(".concat(1, ")"))
                    : _this.element.querySelector("tbody > tr:nth-child(".concat(rowIndex + 1, ")"));
                if (selectedRow && _this.containerRef.current) {
                    _this.containerRef.current.scrollTop = selectedRow.offsetTop;
                }
            }
        };
        /**
         * Method to allow the scroll to be set to a specific row index when the Grid is scrollable. It is zero based.
         *
         * @param options - Object, containing the rowIndex to which is going to be scrolled.
         */
        _this.scrollIntoView = function (options) {
            if (!_this.vs.container || _this.props.scrollable === 'none') {
                return;
            }
            _this.rowIndex = options.rowIndex;
            var rowIndex = options.rowIndex;
            var element = _this.element;
            if (_this.observer && element) {
                _this.observer.disconnect();
                var target = element.querySelector("[absolute-row-index=\"".concat(rowIndex, "\"]"));
                if (target) {
                    _this.observer.observe(target);
                }
                else {
                    _this.setCurrentOnTop(options);
                }
            }
        };
        /**
         * Method to fit columns according to their content.
         *
         * @param columnIds - Array of column ids to be fitted.
         */
        _this.fitColumns = function (columnIds) {
            _this.columnResize.dblClickHandler(null, columnIds);
        };
        _this.onContextMenu = function (event, dataItem, field) {
            if (_this.props.onContextMenu) {
                var ev = {
                    target: _this,
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    dataItem: dataItem,
                    field: field
                };
                _this.props.onContextMenu.call(undefined, ev);
            }
        };
        _this.getVirtualScroll = function (props) {
            var rowHeight = props.rowHeight, detailRowHeight = props.detailRowHeight, detail = props.detail, expandField = props.expandField, groupable = props.groupable;
            var hasAllData = _this.isAllData();
            var hasRowHeight = rowHeight !== undefined && rowHeight > 0;
            var hasDetailRowHeight = detailRowHeight !== undefined && detailRowHeight > 0;
            var isGroupable = groupable === true || (typeof groupable === 'object' && groupable.enabled !== false);
            var hasDetails = Boolean(detail && expandField);
            if (!hasRowHeight ||
                (isGroupable && !hasAllData) ||
                (hasDetails && (!hasDetailRowHeight || !hasAllData))) {
                return VirtualScroll;
            }
            return VirtualScrollFixed;
        };
        _this.isAllData = function () {
            var _a = _this.props, data = _a.data, total = _a.total;
            if (Array.isArray(data)) {
                return data.length === total;
            }
            else if (data) {
                return total === data.total;
            }
            return false;
        };
        _this.initializeVirtualization = function (total, groupable) {
            _this.reInitVirtualization(_this.props.scrollable === 'virtual', _this.props.total, _this.props.filter, _this.props.group, _this.props.sort, groupable || _this.props.rowHeight === undefined || _this.props.rowHeight === 0);
            _this.vs.fixedScroll = _this.props.fixedScroll || false;
            _this.vs.PageChange = _this.pageChange;
            _this.vs.realSkip = _this.props.skip || 0;
            _this.vs.pageSize = (_this.props.take !== undefined ? _this.props.take : _this.props.pageSize) || 0;
            _this.vs.scrollableVirtual = (_this.props.scrollable === 'virtual');
            _this.vs.total = total;
            _this.vs.propsSkip = (_this.props.skip || 0) + (_this.props.scrollable === 'virtual' ?
                _this.vs.topCacheCount + (_this.vs.attendedSkip - (_this.props.skip || 0)) : 0);
            if (_this.props.rowHeight !== undefined && _this.props.rowHeight > 0 && !groupable) {
                var containerHeight = _this.props.rowHeight * total;
                _this.vs.containerHeight = firefox ? Math.min(firefoxMaxHeight, containerHeight) : containerHeight;
            }
            else {
                _this.vs.containerHeight = 1533915;
            }
            _this.vs.containerRef = _this.containerRef;
            _this.vs.tableBodyRef = _this.tableBodyRef;
            _this.vs.table = _this.tableElement;
            _this._slicedData = undefined;
            if (_this.vs instanceof VirtualScrollFixed) {
                var _a = _this.props, _b = _a.rowHeight, rowHeight = _b === void 0 ? 0 : _b, detail = _a.detail, expandField = _a.expandField;
                var _c = _this.props.detailRowHeight, detailRowHeight = _c === void 0 ? 0 : _c;
                detailRowHeight = Boolean(detail && expandField) ? detailRowHeight : rowHeight;
                if (_this.isAllData()) {
                    _this.vs.total = _this._data.length;
                    _this._slicedData = _this._data.slice(_this.vs.realSkip, _this.vs.realSkip + _this.vs.pageSize);
                    _this.vs.rowHeightService = _this.rowHeightService(_this.vs, _this._data.length, rowHeight, detailRowHeight, _this._data);
                }
                else {
                    _this.vs.rowHeightService = new RowHeightService(total, rowHeight, detailRowHeight);
                }
                var containerHeight = _this.vs.rowHeightService.totalHeight();
                _this.vs.containerHeight = firefox ? Math.min(firefoxMaxHeight, containerHeight) : containerHeight;
            }
        };
        _this.scrollHandler = function (event) {
            if (event.target !== event.currentTarget) {
                return;
            }
            clearTimeout(_this.forceUpdateTimeout);
            _this.vs.table = _this.tableElement;
            var scrollLeft = event.currentTarget.scrollLeft;
            var scrollTop = event.currentTarget.scrollTop;
            if (_this.props.columnVirtualization && (!_this.vs.scrollableVirtual || scrollTop === _this.wrapperScrollTop)) {
                _this.forceUpdateTimeout = window.setTimeout(function () { _this.forceUpdate(); }, 0);
            }
            if (_this._header) {
                _this._header.setScrollLeft(scrollLeft);
            }
            if (_this._footer) {
                _this._footer.setScrollLeft(scrollLeft);
            }
            if (_this.vs && scrollTop !== _this.wrapperScrollTop) {
                _this.vs.scrollHandler(event);
            }
            (0,main_js_.dispatchEvent)(_this.props.onScroll, event, _this, undefined);
            _this.wrapperScrollTop = scrollTop;
        };
        _this.onKeyDown = function (event) {
            index_mjs_.tableKeyboardNavigation.onKeyDown(event, {
                contextStateRef: _this.contextStateRef,
                navigationStateRef: _this.navigationStateRef,
                onNavigationAction: _this.onNavigationAction
            });
            if (_this.props.onKeyDown) {
                var _a = (0,index_mjs_.getSelectionOptions)(_this.props.selectable), mode = _a.mode, cell = _a.cell;
                var ev = Grid_assign({ dataItems: _this.getLeafDataItems(), mode: mode, cell: cell, componentId: _this._gridId, selectedField: _this.props.selectedField }, _this.getArguments(event));
                _this.props.onKeyDown.call(undefined, ev);
            }
        };
        _this.onFocus = function (event) {
            index_mjs_.tableKeyboardNavigation.onFocus(event, {
                contextStateRef: _this.contextStateRef
            });
        };
        _this.onNavigationAction = function (options) {
            if (_this.props.onNavigationAction) {
                var ev = Grid_assign({ focusElement: options.focusElement }, _this.getArguments(options.event));
                _this.props.onNavigationAction.call(undefined, ev);
            }
        };
        _this.rowClick = function (e, item) {
            if (_this.props.onRowClick && e.target.nodeName === 'TD') {
                _this.props.onRowClick.call(undefined, Grid_assign({ dataItem: item.dataItem }, _this.getArguments(e)));
            }
        };
        _this.rowDblClick = function (e, item) {
            if (_this.props.onRowDoubleClick && e.target.nodeName === 'TD') {
                _this.props.onRowDoubleClick.call(undefined, Grid_assign({ dataItem: item.dataItem }, _this.getArguments(e)));
            }
        };
        _this.itemChange = function (event) {
            var itemChange = _this.props.onItemChange;
            if (event.field === _this.props.expandField || _this.props.group && event.field === undefined) {
                var expandChange = _this.props.onExpandChange;
                if (expandChange) {
                    expandChange.call(undefined, Grid_assign(Grid_assign({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, dataIndex: event.dataIndex, value: event.value }));
                }
                return;
            }
            if (itemChange) {
                itemChange.call(undefined, Grid_assign(Grid_assign({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, field: event.field, value: event.value }));
            }
        };
        _this.onHeaderSelectionChange = function (event) {
            if (_this.props.onHeaderSelectionChange) {
                _this.props.onHeaderSelectionChange.call(undefined, {
                    field: event.field,
                    nativeEvent: event.syntheticEvent && event.syntheticEvent.nativeEvent,
                    syntheticEvent: event.syntheticEvent,
                    target: _this,
                    dataItems: _this.getLeafDataItems(),
                    selectedField: _this.props.selectedField
                });
            }
        };
        _this.selectionRelease = function (event) {
            if (_this.props.onSelectionChange) {
                var selectionEvent = Grid_assign({ syntheticEvent: undefined, target: _this, selectedField: _this.props.selectedField || '', componentId: _this._gridId, dataItems: _this.getLeafDataItems(), dataItem: null }, event);
                _this.props.onSelectionChange.call(undefined, selectionEvent);
            }
        };
        _this.pageChange = function (page, syntheticEvent, targetEvent) {
            _this.raiseDataEvent(_this.props.onPageChange, { page: page }, { skip: page.skip, take: page.take }, syntheticEvent, targetEvent);
        };
        _this.pagerPageChange = function (event) {
            _this.pageChange({ skip: event.skip, take: event.take }, event.syntheticEvent, event.targetEvent);
        };
        _this.sortChange = function (sort, syntheticEvent) {
            _this.raiseDataEvent(_this.props.onSortChange, { sort: sort }, Grid_assign({ sort: sort }, (_this.props.scrollable === 'virtual' ? { skip: 0 } : {})), syntheticEvent);
        };
        _this.filterChange = function (filter, syntheticEvent) {
            _this.raiseDataEvent(_this.props.onFilterChange, { filter: filter }, { filter: filter || undefined, skip: 0 }, syntheticEvent);
        };
        _this.groupChange = function (groups, event) {
            var syntheticEvent = event.nativeEvent ?
                event : { nativeEvent: event.nativeEvent || event.originalEvent };
            _this.raiseDataEvent(_this.props.onGroupChange, { group: groups }, { group: groups, skip: 0 }, syntheticEvent);
        };
        _this.onResize = function (index, newWidth, oldWidth, nativeEvent, end, targetId) {
            _this.resetTableWidth();
            _this._shouldUpdateLeftRight = true;
            _this._resized = true;
            _this._columnsMutations++;
            if (_this.props.onColumnResize) {
                _this.props.onColumnResize.call(undefined, {
                    columns: _this.columns,
                    nativeEvent: nativeEvent,
                    targetColumnId: targetId,
                    index: index,
                    newWidth: newWidth,
                    oldWidth: oldWidth,
                    end: end,
                    target: _this
                });
            }
        };
        _this.reInitVirtualization = (0,main_js_.memoizeOne)(function (_vScrolling, _total, _filter, _group, _sort, useCached) {
            _this.vs.reset();
            var VS = _this.getVirtualScroll(_this.props);
            _this.vs = new VS(useCached);
        });
        _this.flatData = (0,main_js_.memoizeOne)(function (propsData, groupingFooter, skip, group, expandField, _filter, _sort) {
            var flattedData = [];
            var resolvedGroupsCount = flatData(flattedData, propsData, groupingFooter, { index: skip }, group !== undefined, expandField);
            return { flattedData: flattedData, resolvedGroupsCount: resolvedGroupsCount };
        });
        _this.rowHeightService = (0,main_js_.memoizeOne)(function (_vs, total, rowHeight, detailRowHeight, data) {
            return new RowHeightService(total, rowHeight, detailRowHeight, data);
        });
        _this.childrenToArray = (0,main_js_.memoizeOne)(function (children) {
            return index_js_.Children.toArray(children);
        });
        _this.readColumns = (0,main_js_.memoizeOne)(function (children, idPrefix, _mutationsCount) {
            var columnElements = children.filter(function (child) { return child && child.type && child.type.displayName === 'KendoReactGridColumn'; });
            return readColumns(columnElements, _this.columns, { prevId: 0, idPrefix: idPrefix });
        });
        _this.mapColumns = (0,main_js_.memoizeOne)(function (columns) {
            return (0,index_mjs_.mapColumns)(columns);
        });
        _this.configureColumns = (0,main_js_.memoizeOne)(function (columns, groupCount, idPrefix) {
            if (_this.props.selectedField) {
                columns.filter(function (c) { return c.field === _this.props.selectedField; }).forEach(function (c) {
                    c.width = c.width || '50px';
                    c.cell = c.cell || GridSelectionCell;
                    c.headerCell = c.headerCell || GridHeaderSelectionCell;
                });
            }
            var defaultServiceProps = {
                id: '',
                resizable: true,
                width: '32px',
                title: ' ',
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
                rightBorder: false,
                ariaColumnIndex: 0,
                isAccessible: true
            };
            var columnIndexOffset = 0;
            if (_this.props.expandField && (_this.props.onExpandChange) && _this.props.detail) {
                columns.unshift(Grid_assign(Grid_assign({}, defaultServiceProps), { cell: GridHierarchyCell, field: _this.props.expandField, headerClassName: 'k-hierarchy-cell k-header', id: index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(_this._columns.length), idPrefix, 'column') }));
                columnIndexOffset++;
            }
            for (var i = 0; i < groupCount; i++) {
                columns.unshift(Grid_assign(Grid_assign({}, defaultServiceProps), { isAccessible: false, cell: GridGroupCell, field: 'value', locked: _this.props.lockGroups }));
                columnIndexOffset++;
            }
            columns.slice(columnIndexOffset).forEach(function (c) { return c.parentIndex >= 0 && (c.parentIndex += columnIndexOffset); });
        });
        _this.getHeaderRow = (0,main_js_.memoizeOne)(function (sort, sortable, group, groupable, filter, filterable, filterOperators, headerCellRender, columnMenu, columns, columnsMap, isHeaderRtl) {
            return (index_js_.createElement(HeaderRow, { cells: _this.props.cells, sort: sort, sortable: sortable, sortChange: _this.sortChange, group: group || [], groupable: groupable, groupChange: _this.groupChange, filter: filter, filterable: filterable, filterOperators: filterOperators, filterChange: _this.filterChange, columnMenu: columnMenu, selectionChange: _this.onHeaderSelectionChange, columns: columns, columnResize: _this.columnResize, pressHandler: _this.dragLogic.pressHandler, dragHandler: _this.dragLogic.dragHandler, releaseHandler: _this.dragLogic.releaseHandler, columnsMap: columnsMap, cellRender: headerCellRender, isRtl: isHeaderRtl, dragClue: _this.dragLogic.dragClueRef, headerRef: _this.headerElementRef, containerRef: _this.containerRef }));
        });
        _this.resolveTitle = function (field) {
            var column = _this._columns.find(function (c) { return c.field === field; });
            var title = column && (column.title || column.field);
            return title === undefined ? field : title;
        };
        _this.getLeafDataItems = function () {
            return _this._data.filter(function (item) { return item.rowType === 'data'; }).map(function (item) { return item.dataItem; });
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,main_js_.shouldShowValidationUI)(packageMetadata);
        var groupable = _this.props.groupable === true ||
            (typeof _this.props.groupable === 'object') && _this.props.groupable.enabled !== false;
        var VS = _this.getVirtualScroll(props);
        _this.vs = new VS(groupable || props.rowHeight === undefined || props.rowHeight === 0);
        _this.dragLogic = new CommonDragLogic(_this.columnReorder.bind(_this), _this.groupReorder.bind(_this), _this.columnToGroup.bind(_this));
        _this.columnResize = new ColumnResize(_this.onResize);
        index_mjs_.tableKeyboardNavigation.onConstructor({
            navigatable: Boolean(props.navigatable),
            contextStateRef: _this.contextStateRef,
            navigationStateRef: _this.navigationStateRef,
            idPrefix: _this._gridId
        });
        return _this;
    }
    Object.defineProperty(Grid.prototype, "columns", {
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
        get: function () {
            var shuffledColumns = this._columns.filter(function (q) { return q.declarationIndex >= 0 && q.parentIndex === -1; });
            return sanitizeColumns(shuffledColumns);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "element", {
        /**
         * Returns the HTML element of the Grid component.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "document", {
        get: function () {
            if (!main_js_.canUseDOM) {
                return;
            }
            // useful only for user actions
            return (this.element && this.element.ownerDocument) || document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "_header", {
        get: function () {
            return this.headerRef.current;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    Grid.prototype.componentDidMount = function () {
        this.resetTableWidth();
        (0,main_js_.setScrollbarWidth)();
        var rtl = (0,index_mjs_.isRtl)(this.element);
        this.isRtl = rtl;
        index_mjs_.tableKeyboardNavigation.onComponentDidMount({
            scope: this.element || undefined,
            contextStateRef: this.contextStateRef,
            navigationStateRef: this.navigationStateRef
        });
        if (this.isRtl) {
            this.forceUpdate();
        }
        var observerOptions = {
            rootMargin: '0px',
            threshold: 0.9
        };
        this.observer = (main_js_.canUseDOM && window.IntersectionObserver &&
            new window.IntersectionObserver(this.handleIntersection, observerOptions) || null);
    };
    /**
     * @hidden
     */
    Grid.prototype.getSnapshotBeforeUpdate = function () {
        index_mjs_.tableKeyboardNavigation.onGetSnapshotBeforeUpdate({
            document: this.document,
            contextStateRef: this.contextStateRef,
            navigationStateRef: this.navigationStateRef
        });
        return null;
    };
    /**
     * @hidden
     */
    Grid.prototype.componentDidUpdate = function () {
        this.resetTableWidth();
        (0,main_js_.setScrollbarWidth)();
        if (this.vs.tableTransform && this.vs.table) {
            this.vs.table.style.transform = this.vs.tableTransform;
            this.vs.tableTransform = '';
        }
        index_mjs_.tableKeyboardNavigation.onComponentDidUpdate({
            scope: this.element || undefined,
            contextStateRef: this.contextStateRef,
            navigationStateRef: this.navigationStateRef
        });
    };
    /**
     * @hidden
     */
    Grid.prototype.componentWillUnmount = function () {
        clearTimeout(this.forceUpdateTimeout);
    };
    /**
     * @hidden
     */
    Grid.prototype.render = function () {
        var _a, _b, _c, _d;
        var _this = this;
        var _e;
        var total = this.props.total || 0;
        var idPrefix = index_mjs_.tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
        var propsData = [];
        if (Array.isArray(this.props.data)) {
            propsData = this.props.data;
            total = total || this.props.data.length;
        }
        else if (this.props.data) {
            propsData = this.props.data.data;
            total = total || this.props.data.total;
        }
        var groupingFooter = (typeof this.props.groupable === 'object') && this.props.groupable.footer || 'none';
        var _f = this.flatData(propsData, groupingFooter, this.props.skip || 0, this.props.group, this.props.expandField, this.props.filter, this.props.sort), resolvedGroupsCount = _f.resolvedGroupsCount, flattedData = _f.flattedData;
        this._data = flattedData;
        var groupable = this.props.groupable === true ||
            (typeof this.props.groupable === 'object') && this.props.groupable.enabled !== false;
        this.columnResize.resizable = this.props.resizable || false;
        this.dragLogic.reorderable = this.props.reorderable || false;
        this.dragLogic.groupable = groupable;
        var tableUserSelect = this.props.selectable && this.props.selectable.drag ? 'none' : undefined;
        this.initializeVirtualization(total, groupable);
        var children = this.childrenToArray(this.props.children);
        this.initColumns(children, resolvedGroupsCount);
        var toolbar = children.map(function (child) {
            if (child && child.type && child.type.displayName === 'KendoReactGridToolbar') {
                return index_js_.cloneElement(child, Grid_assign(Grid_assign({}, child.props), { ariaControls: _this._gridRoleElementId }));
            }
            return null;
        });
        var noRecords = children.filter(function (child) { return child && child.type &&
            child.type.displayName === 'KendoReactGridNoRecords'; });
        var statusBar = children.filter(function (child) { return child && child.type &&
            child.type.displayName === 'KendoReactGridStatusBar'; });
        var leafColumns = this._columns.filter(function (c) { return c.children.length === 0; });
        var groupingPanel = groupable && (index_js_.createElement(GroupPanel, { group: this.props.group || [], groupChange: this.groupChange, pressHandler: this.dragLogic.pressHandler, dragHandler: this.dragLogic.dragHandler, releaseHandler: this.dragLogic.releaseHandler, refCallback: this.dragLogic.refGroupPanelDiv, resolveTitle: this.resolveTitle, ariaControls: this._gridRoleElementId }));
        var _g = this.props, sort = _g.sort, sortable = _g.sortable, group = _g.group, filter = _g.filter, filterable = _g.filterable, _h = _g.filterOperators, filterOperators = _h === void 0 ? operators : _h, headerCellRender = _g.headerCellRender, columnMenu = _g.columnMenu;
        var header = (index_js_.createElement(Header, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== 'none', scrollableDataElement: function () { return _this.vs.container; }, draggable: this.props.reorderable || groupable, ref: this.headerRef, elemRef: this.headerElementRef, headerRow: this.getHeaderRow(sort, sortable, group, groupable, filter, filterable, filterOperators, headerCellRender, columnMenu, this._columns, this._columnsMap, this.isRtl), filterRow: this.props.filterable && index_js_.createElement(FilterRow, { cells: this.props.cells, size: this.props.size, columns: this._columns, filter: this.props.filter, filterOperators: this.props.filterOperators || operators, filterChange: this.filterChange, sort: this.props.sort, cellRender: this.props.filterCellRender, isRtl: this.isRtl, ariaRowIndex: this._columnsMap.length + 1 }) || undefined, cols: leafColumns.map(function (column, index) { return (index_js_.createElement("col", { key: index.toString(), width: getColumnWidth(column) })); }) }));
        var scrollLeft = this.vs && this.vs.container && this.vs.container.scrollLeft || 0;
        var tableWidth = parseFloat(((this.props.style || {}).width || '').toString());
        var _j = (0,index_mjs_.tableColumnsVirtualization)({
            enabled: this.props.columnVirtualization,
            columns: leafColumns,
            tableViewPortWidth: tableWidth,
            scrollLeft: scrollLeft
        }), colSpans = _j.colSpans, isColHidden = _j.hiddenColumns;
        var dataRow = function (item, rowId, rowDataIndex) {
            var isInEdit = false;
            var selectedValue = _this.props.selectedField ? getNestedValue(_this.props.selectedField, item.dataItem) : undefined;
            return {
                row: leafColumns.map(function (column, columnIndex) {
                    if (isColHidden[columnIndex]) {
                        return null;
                    }
                    var columnKey = column.id ? column.id : columnIndex;
                    var className = "".concat(column.className ? column.className + ' ' : '')
                        + "".concat(column.locked ? 'k-grid-content-sticky' : '');
                    var style = column.left !== undefined
                        ? !_this.isRtl
                            ? { left: column.left, right: column.right }
                            : { left: column.right, right: column.left }
                        : {};
                    var currentColumnIsInEdit = false;
                    if (column.editable && _this.props.editField) {
                        var inEdit = getNestedValue(_this.props.editField, item.dataItem);
                        if (inEdit === true || inEdit === column.field) {
                            isInEdit = true;
                            currentColumnIsInEdit = true;
                        }
                    }
                    var Cell = column.cell || (currentColumnIsInEdit && GridEditCell) || GridCell;
                    return (index_js_.createElement(Cell, { onContextMenu: _this.onContextMenu, key: columnKey, locked: _this.props.lockGroups, id: index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(rowId, "-").concat(String(columnIndex)), idPrefix), colSpan: colSpans[columnIndex], dataItem: item.dataItem, field: column.field, editor: column.editor, format: column.format, className: className, render: _this.props.cellRender, cells: resolveCells(_this.props.cells, column.cells), onChange: _this.itemChange, selectionChange: (_this.props.onSelectionChange) ?
                            (function (e) { _this.selectionChange({ event: e, dataItem: item.dataItem, dataIndex: rowDataIndex, columnIndex: columnIndex }); }) :
                            undefined, columnIndex: columnIndex, columnsCount: leafColumns.length, rowType: item.rowType, level: item.level, expanded: item.expanded, dataIndex: item.dataIndex, style: style, ariaColumnIndex: column.ariaColumnIndex, isSelected: Array.isArray(selectedValue) && selectedValue.indexOf(columnIndex) > -1 }));
                }),
                isInEdit: isInEdit,
                isSelected: typeof selectedValue === 'boolean' && selectedValue
            };
        };
        var hiddenRows = 0;
        if (this.props.scrollable === 'virtual') {
            for (var i = 0; i < this.vs.topCacheCount + this.vs.attendedSkip - (this.props.skip || 0); i++) {
                var item = this._data.shift();
                if (item) {
                    this._data.push(item);
                    hiddenRows++;
                    if (item.rowType === 'groupHeader') {
                        i--;
                    }
                }
                else {
                    break;
                }
            }
        }
        var hidden = function (index) {
            return (index >= _this._data.length - hiddenRows);
        };
        var absoluteDataIndex = this.vs.realSkip || 0;
        var body = [];
        var rowIndexStart = this._columnsMap.length + (this.props.filterable ? 1 : 0) + 1;
        var currentAriaRowIndex = 0;
        if (this._data.length) {
            var dataIndex_1 = -1;
            var detailRowCount_1 = 0;
            (this._slicedData || this._data).forEach(function (item, rowIndex) {
                if (item.rowType === 'data') {
                    absoluteDataIndex++;
                    dataIndex_1++;
                }
                var isAlt = absoluteDataIndex % 2 === 0;
                var dataItemKey = _this.props.dataItemKey && (0,main_js_.getter)(_this.props.dataItemKey)(item.dataItem);
                var absoluteIndex = rowIndex + (_this.vs.realSkip || 0);
                var rowId = dataItemKey ? dataItemKey : 'ai' + absoluteIndex;
                var detailRowId = rowId + '_1';
                var gridRow = dataRow(item, rowId, dataIndex_1);
                currentAriaRowIndex = absoluteIndex + rowIndexStart + detailRowCount_1;
                body.push((index_js_.createElement(GridRow, { key: rowId, dataItem: item.dataItem, isAltRow: isAlt, isInEdit: gridRow.isInEdit, rowType: item.rowType, isHidden: hidden(rowIndex), onClick: function (e) { return _this.rowClick(e, item); }, onDoubleClick: function (e) { return _this.rowDblClick(e, item); }, selectedField: _this.props.selectedField, rowHeight: _this.props.rowHeight, render: _this.props.rowRender, ariaRowIndex: currentAriaRowIndex, absoluteRowIndex: absoluteIndex, dataIndex: dataIndex_1, isSelected: gridRow.isSelected }, gridRow.row)));
                if (_this.props.detail && item.rowType === 'data' && item.expanded) {
                    var detailColspan = (leafColumns.length
                        - (_this.props.expandField ? 1 : 0)
                        - (_this.props.group ? _this.props.group.length : 0)) || 1;
                    detailRowCount_1++;
                    currentAriaRowIndex = absoluteIndex + rowIndexStart + detailRowCount_1;
                    body.push((index_js_.createElement("tr", { key: detailRowId, className: (0,main_js_.classNames)('k-table-row', isAlt ? 'k-detail-row k-table-alt-row k-alt' : 'k-detail-row'), style: { visibility: hidden(rowIndex) ? 'hidden' : '', height: _this.props.detailRowHeight }, role: "row", "aria-rowindex": currentAriaRowIndex },
                        _this.props.group && _this.props.group.map(function (gr, idx) {
                            var _a;
                            var columnStyle = (_a = gridRow === null || gridRow === void 0 ? void 0 : gridRow.row[idx]) === null || _a === void 0 ? void 0 : _a.props.style;
                            var style = columnStyle
                                ? !_this.isRtl
                                    ? { left: columnStyle.left, right: columnStyle.right }
                                    : { left: columnStyle.right, right: columnStyle.left }
                                : {};
                            return (index_js_.createElement(GridGroupCell, { id: '', dataIndex: item.dataIndex, field: gr.field, dataItem: item.dataItem, key: idx, style: style, ariaColumnIndex: 1 + idx, isSelected: false, locked: _this.props.lockGroups, isRtl: _this.isRtl, cells: _this.props.cells }));
                        }),
                        _this.props.expandField &&
                            index_js_.createElement(GridDetailHierarchyCell, { id: index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dhcell"), idPrefix) }),
                        index_js_.createElement(GridDetailCell, { onContextMenu: _this.onContextMenu, dataItem: item.dataItem, dataIndex: item.dataIndex, colSpan: detailColspan, ariaColIndex: 2 + (_this.props.group ? _this.props.group.length : 0), detail: _this.props.detail, id: index_mjs_.tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dcell"), idPrefix) }))));
                }
            });
        }
        else {
            body.push((index_js_.createElement("tr", { key: "no-records", className: "k-table-row k-grid-norecords", role: 'row', "aria-rowindex": rowIndexStart },
                index_js_.createElement("td", { className: 'k-table-td', colSpan: leafColumns.length, role: 'gridcell' }, noRecords.length ? noRecords : index_js_.createElement(GridNoRecords, null)))));
        }
        var pagerProps = Grid_assign({ size: this.props.size, onPageChange: this.pagerPageChange, total: total, dir: this.isRtl ? 'rtl' : undefined, skip: this.vs.propsSkip || 0, take: (this.props.take !== undefined ? this.props.take : this.props.pageSize) || 10, messagesMap: pagerMessagesMap }, (GridPagerSettings_normalize(this.props.pageable || {})));
        var pager = this.props.pager ? index_js_.createElement(this.props.pager, Grid_assign({}, pagerProps)) : index_js_.createElement(index_mjs_.Pager, Grid_assign({ className: "k-grid-pager" }, pagerProps));
        var sorted = function (field) {
            return _this.props.sort && _this.props.sort.filter(function (descriptor) { return descriptor.field === field; }).length > 0;
        };
        var footerCols = function (column, index) {
            return (index_js_.createElement("col", { key: index.toString(), width: getColumnWidth(column) }));
        };
        var footer = (Boolean((_e = this.props.cells) === null || _e === void 0 ? void 0 : _e.footerCell)
            || this._columns.some(function (c) { var _a; return Boolean(c.footerCell || Boolean((_a = c.cells) === null || _a === void 0 ? void 0 : _a.footerCell)); }))
            ? (index_js_.createElement(Footer, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== 'none', ref: function (f) { return _this._footer = f; }, row: index_js_.createElement(FooterRow, { cells: this.props.cells, columns: this._columns, isRtl: this.isRtl, ariaRowIndex: currentAriaRowIndex + 1 }), cols: leafColumns.map(footerCols) })) : null;
        var colGroups = (index_js_.createElement("colgroup", { ref: function (c) {
                _this.columnResize.colGroupMain = c;
            } }, leafColumns.map(function (column, index) { return (index_js_.createElement("col", { key: index.toString(), className: sorted(column.field) ? 'k-sorted' : undefined, width: getColumnWidth(column) })); })));
        var enableDragClues = this.dragLogic.reorderable || this.dragLogic.groupable;
        var tableDisplay = this.props.columnVirtualization ? 'block' : 'table';
        if (this.props.scrollable === 'none') {
            return (index_js_.createElement(index_mjs_.TableKeyboardNavigationContext.Provider, { value: this.contextStateRef.current },
                index_js_.createElement("div", Grid_assign({ id: this.props.id, style: this.props.style, className: (0,main_js_.classNames)('k-grid', (_a = {
                            'k-grid-md': !this.props.size
                        },
                        _a["k-grid-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                        _a), this.props.className), ref: function (el) { _this._element = el; }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, index_mjs_.tableKeyboardNavigationScopeAttributes),
                    toolbar,
                    groupingPanel,
                    index_js_.createElement(index_mjs_.TableSelection, { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function (table) { _this.tableElement = table; } },
                        index_js_.createElement("table", { className: (0,main_js_.classNames)('k-table k-grid-table', (_b = {}, _b["k-table-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _b)), style: { userSelect: tableUserSelect, display: tableDisplay } },
                            colGroups,
                            header,
                            index_js_.createElement("tbody", Grid_assign({ role: 'rowgroup', className: 'k-table-tbody' }, index_mjs_.tableKeyboardNavigationBodyAttributes), body),
                            footer)),
                    enableDragClues && (index_js_.createElement(index_js_.Fragment, null,
                        index_js_.createElement(index_mjs_.DropClue, { ref: this.dragLogic.refDropElementClue }),
                        index_js_.createElement(index_mjs_.DragClue, { ref: this.dragLogic.refDragElementClue })))),
                statusBar,
                this.props.pageable && pager));
        }
        var wrapperStyle = this.props.style || {};
        if (this.props.scrollable === 'virtual') {
            // Set the default height for vs if not existing.
            if (!wrapperStyle.height) {
                wrapperStyle = Object.assign({}, wrapperStyle, { height: '450px' });
            }
        }
        return (index_js_.createElement(index_mjs_.TableKeyboardNavigationContext.Provider, { value: this.contextStateRef.current },
            index_js_.createElement("div", Grid_assign({ id: this.props.id, style: wrapperStyle, className: (0,main_js_.classNames)('k-grid', (_c = {
                        'k-grid-md': !this.props.size
                    },
                    _c["k-grid-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                    _c['k-grid-virtual'] = this.props.scrollable === 'virtual',
                    _c), this.props.className), ref: function (el) {
                    _this._element = el;
                }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, index_mjs_.tableKeyboardNavigationScopeAttributes),
                toolbar,
                groupingPanel,
                index_js_.createElement("div", { className: 'k-grid-aria-root', role: "grid", "aria-colcount": leafColumns.length, "aria-rowcount": total, id: this._gridRoleElementId },
                    header,
                    index_js_.createElement("div", { className: "k-grid-container", role: "presentation" },
                        index_js_.createElement("div", { ref: this.containerRef, className: "k-grid-content k-virtual-content", onScroll: this.scrollHandler, role: "presentation" },
                            index_js_.createElement("div", { className: 'k-grid-table-wrap', role: "presentation" },
                                index_js_.createElement(index_mjs_.TableSelection, { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function (table) {
                                        _this.tableElement = table;
                                    } },
                                    index_js_.createElement("table", { className: (0,main_js_.classNames)('k-table k-grid-table', (_d = {
                                                'k-table-md': !this.props.size
                                            },
                                            _d["k-table-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                                            _d)), role: "presentation", style: { userSelect: tableUserSelect, display: tableDisplay } },
                                        colGroups,
                                        index_js_.createElement("tbody", Grid_assign({ className: 'k-table-tbody', ref: this.tableBodyRef, role: 'rowgroup' }, index_mjs_.tableKeyboardNavigationBodyAttributes), body)))),
                            index_js_.createElement("div", { className: "k-height-container", role: "presentation" },
                                index_js_.createElement("div", { style: this.props.scrollable === 'virtual' ?
                                        { 'height': (this.vs.containerHeight) + 'px' } : {} })))),
                    footer,
                    enableDragClues && (index_js_.createElement(index_js_.Fragment, null,
                        index_js_.createElement(index_mjs_.DropClue, { ref: this.dragLogic.refDropElementClue }),
                        index_js_.createElement(index_mjs_.DragClue, { ref: this.dragLogic.refDragElementClue }))),
                    this.showLicenseWatermark && index_js_.createElement(main_js_.WatermarkOverlay, null)),
                statusBar,
                this.props.pageable && pager)));
    };
    Grid.prototype.selectionChange = function (options) {
        if (this.props.onSelectionChange) {
            var event_1 = options.event, dataItem = options.dataItem, dataIndex = options.dataIndex, columnIndex = options.columnIndex;
            var _a = (0,index_mjs_.getSelectionOptions)(this.props.selectable), mode = _a.mode, cell = _a.cell;
            var selectionEvent = Grid_assign(Grid_assign({}, this.getArguments(event_1.syntheticEvent)), { dataItem: dataItem, startColIndex: columnIndex, endColIndex: columnIndex, startRowIndex: dataIndex, endRowIndex: dataIndex, dataItems: this.getLeafDataItems(), altKey: false, ctrlKey: false, shiftKey: false, metaKey: false, mode: mode, cell: cell, isDrag: false, componentId: this._gridId, selectedField: this.props.selectedField || '' });
            this.props.onSelectionChange.call(undefined, selectionEvent);
        }
    };
    Grid.prototype.raiseDataEvent = function (handler, data, moreData, syntheticEvent, targetEvent) {
        var dataStateChange = this.props.onDataStateChange;
        if (handler) {
            var ev = Grid_assign(Grid_assign(Grid_assign({}, this.getArguments(syntheticEvent)), data), { targetEvent: targetEvent });
            handler.call(undefined, ev);
        }
        else if (dataStateChange) {
            dataStateChange.call(undefined, Grid_assign(Grid_assign({}, this.getArguments(syntheticEvent)), { targetEvent: targetEvent || {}, dataState: Grid_assign(Grid_assign({}, this.getDataState()), moreData) }));
        }
    };
    Grid.prototype.columnReorder = function (prev, next, nativeEvent) {
        var _a;
        var _this = this;
        var column = this._columns[prev];
        var depth = column.depth;
        var end = function (index) {
            do {
                index++;
            } while (index < _this._columns.length && _this._columns[index].depth > depth);
            return index;
        };
        var spliced = this._columns.splice(prev, end(prev) - prev);
        (_a = this._columns).splice.apply(_a, Grid_spreadArray([prev < next ? end(next - spliced.length) : next, 0], spliced, false));
        this._columns.filter(function (q) { return q.declarationIndex >= 0; }).forEach(function (c, i) { return c.orderIndex = i; });
        this._columnsMutations++;
        var shouldUpdateRL = this._columns[prev].locked && this._columns[next].locked;
        (0,index_mjs_.updateLeft)(this._columnsMap, this._columns, shouldUpdateRL || this._shouldUpdateLeftRight);
        (0,index_mjs_.updateRight)(this._columnsMap, this._columns, shouldUpdateRL || this._shouldUpdateLeftRight);
        if (this._resized) {
            this._shouldUpdateLeftRight = false;
            this._resized = false;
        }
        var eventColumnProps = this.columns;
        this.forceUpdate();
        if (this.props.onColumnReorder) {
            var reorderEvent = {
                target: this,
                columns: eventColumnProps,
                columnId: column.id,
                nativeEvent: nativeEvent
            };
            this.props.onColumnReorder.call(undefined, reorderEvent);
        }
    };
    Grid.prototype.groupReorder = function (prevIndex, nextIndex, nativeEvent) {
        if (this.props.group === undefined) {
            return;
        }
        var group = this.props.group.slice();
        group.splice.apply(group, Grid_spreadArray([nextIndex, 0], group.splice(prevIndex, 1), false));
        this.groupChange(group, nativeEvent);
    };
    Grid.prototype.columnToGroup = function (columnIndex, groupIndex, nativeEvent) {
        var field = this._columns[columnIndex].field;
        if (!field) {
            return;
        }
        var group = (this.props.group || []).slice();
        group.splice(groupIndex, 0, { field: field });
        this.groupChange(group, nativeEvent);
    };
    Grid.prototype.resetTableWidth = function () {
        var totalWidth = 0;
        if (!this.columnResize.colGroupMain) {
            return;
        }
        var colElements = this.columnResize.colGroupMain.children;
        for (var i = 0; i < colElements.length; i++) {
            var width = colElements[i].width;
            if (!width) {
                return;
            }
            totalWidth += parseFloat(width.toString());
        }
        totalWidth = Math.round(totalWidth);
        if (this._header) {
            this._header.setWidth(totalWidth);
        }
        if (this._footer) {
            this._footer.setWidth(totalWidth);
        }
        if (this.tableElement) {
            this.tableElement.style.width = totalWidth + 'px';
        }
    };
    Grid.prototype.initColumns = function (children, groupCount) {
        var idPrefix = index_mjs_.tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
        this._columns = this.readColumns(children, idPrefix, this._columnsMutations);
        if (this._columns.length === 0) {
            this._columns = autoGenerateColumns(this.props.data, this.props.group, this.props.expandField, { prevId: 0, idPrefix: idPrefix });
        }
        this.configureColumns(this._columns, groupCount, idPrefix);
        this._columnsMap = this.mapColumns(this._columns);
        this.columnResize.columns = this._columns;
        this.dragLogic.columns = this._columns;
    };
    Grid.prototype.getDataState = function () {
        return {
            filter: this.props.filter,
            sort: this.props.sort,
            skip: this.props.skip,
            take: (this.props.take !== undefined ? this.props.take : this.props.pageSize),
            group: this.props.group
        };
    };
    Grid.prototype.getArguments = function (syntheticEvent) {
        return {
            nativeEvent: syntheticEvent && syntheticEvent.nativeEvent,
            syntheticEvent: syntheticEvent,
            target: this
        };
    };
    /**
     * @hidden
     */
    Grid.displayName = 'KendoReactGrid';
    /**
     * @hidden
     */
    Grid.defaultProps = {
    // never use this
    };
    /**
     * @hidden
     */
    Grid.propTypes = {
        data: prop_types_index_js_.oneOfType([
            prop_types_index_js_.array,
            prop_types_index_js_.shape({
                data: prop_types_index_js_.array,
                total: prop_types_index_js_.number
            })
        ]),
        sortable: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool,
            prop_types_index_js_.shape({
                mode: prop_types_index_js_.oneOf(['single', 'multiple']),
                allowUnsort: prop_types_index_js_.bool
            })
        ]),
        onSortChange: prop_types_index_js_.func,
        sort: prop_types_index_js_.array,
        filterable: prop_types_index_js_.bool,
        filter: prop_types_index_js_.any,
        onFilterChange: prop_types_index_js_.func,
        pageable: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool,
            prop_types_index_js_.shape({
                buttonCount: prop_types_index_js_.number,
                info: prop_types_index_js_.bool,
                type: prop_types_index_js_.oneOf(['numeric', 'input']),
                pageSizes: prop_types_index_js_.oneOfType([
                    prop_types_index_js_.bool,
                    prop_types_index_js_.arrayOf(prop_types_index_js_.oneOfType([
                        prop_types_index_js_.string,
                        prop_types_index_js_.number
                    ]))
                ]),
                previousNext: prop_types_index_js_.bool
            })
        ]),
        pageSize: prop_types_index_js_.number,
        onPageChange: prop_types_index_js_.func,
        total: prop_types_index_js_.number,
        skip: prop_types_index_js_.number,
        take: prop_types_index_js_.number,
        fixedScroll: prop_types_index_js_.bool,
        onExpandChange: prop_types_index_js_.func,
        expandField: prop_types_index_js_.string,
        selectedField: prop_types_index_js_.string,
        onSelectionChange: prop_types_index_js_.func,
        onHeaderSelectionChange: prop_types_index_js_.func,
        resizable: prop_types_index_js_.bool,
        reorderable: prop_types_index_js_.bool,
        group: prop_types_index_js_.any,
        groupable: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool,
            prop_types_index_js_.shape({
                enabled: prop_types_index_js_.bool,
                footer: prop_types_index_js_.oneOf(['always', 'visible', 'none'])
            })
        ]),
        onGroupChange: prop_types_index_js_.func,
        onRowClick: prop_types_index_js_.func,
        onRowDoubleClick: prop_types_index_js_.func,
        onItemChange: prop_types_index_js_.func,
        editField: prop_types_index_js_.string,
        scrollable: prop_types_index_js_.oneOf(['none', 'scrollable', 'virtual']),
        rowHeight: prop_types_index_js_.number,
        detailRowHeight: prop_types_index_js_.number,
        detail: prop_types_index_js_.any,
        style: prop_types_index_js_.object,
        onDataStateChange: prop_types_index_js_.func,
        onColumnResize: prop_types_index_js_.func,
        onColumnReorder: prop_types_index_js_.func,
        dataItemKey: prop_types_index_js_.string,
        navigatable: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf(['small', 'medium'])
    };
    /** @hidden */
    Grid.contextType = index_mjs_.TableKeyboardNavigationContext;
    return Grid;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuItemGroup.js
var GridColumnMenuItemGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The GridColumnMenuItemGroup that will be used inside the Grid ColumnMenu.
 */
var GridColumnMenuItemGroup = /** @class */ (function (_super) {
    GridColumnMenuItemGroup_extends(GridColumnMenuItemGroup, _super);
    function GridColumnMenuItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridColumnMenuItemGroup.prototype.render = function () {
        var children = this.props.children;
        return (index_js_.createElement("div", { id: this.props.id, className: (0,main_js_.classNames)('k-columnmenu-item-wrapper', this.props.className), style: this.props.style }, children));
    };
    return GridColumnMenuItemGroup;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuItem.js
var GridColumnMenuItem_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The GridColumnMenuItem component that is used inside the Grid ColumnMenu.
 */
var GridColumnMenuItem = /** @class */ (function (_super) {
    GridColumnMenuItem_extends(GridColumnMenuItem, _super);
    function GridColumnMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridColumnMenuItem.prototype.render = function () {
        var _a = this.props, title = _a.title, iconClass = _a.iconClass, svgIcon = _a.svgIcon, selected = _a.selected;
        return (index_js_.createElement("div", { onClick: this.props.onClick, className: "k-columnmenu-item ".concat(selected ? 'k-selected' : '') },
            (iconClass || svgIcon) && index_js_.createElement(main_js_.IconWrap, { name: iconClass ? (0,main_js_.toIconName)(iconClass) : iconClass, icon: svgIcon }),
            title));
    };
    return GridColumnMenuItem;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuGroup.js
var GridColumnMenuGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






/**
 * @example
 * ```jsx-no-run
 * class TextColumnMenu extends React.Component {
 *     render() {
 *         return (
 *         <div>
 *             <GridColumnMenuSort {...this.props} />
 *             <GridColumnMenuGroup {...this.props} />
 *         </div>);
 *     }
 * }
 *
 * class App extends React.PureComponent {
 *     constructor(props) {
 *         super(props);
 *
 *         this.state = this.createAppState({
 *             take: 10,
 *             skip: 0
 *         });
 *     }
 *
 *     createAppState(dataState) {
 *         return {
 *             result: process(products.slice(0), dataState),
 *             dataState: dataState
 *         };
 *     }
 *
 *     dataStateChange = (event) => {
 *         this.setState(this.createAppState(event.dataState));
 *     }
 *
 *     render() {
 *         return (
 *             <div>
 *                 <Grid
 *                     data={this.state.result}
 *                     {...this.state.dataState}
 *                     onDataStateChange={this.dataStateChange}
 *                     sortable={true}
 *                     pageable={true}
 *                 >
 *                     <Column field="ProductID" title="Product ID" />
 *                     <Column field="ProductName" columnMenu={TextColumnMenu} />
 *                 </Grid>
 *                 <br />
 *             </div>
 *         );
 *     }
 * }
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridColumnMenuGroup = /** @class */ (function (_super) {
    GridColumnMenuGroup_extends(GridColumnMenuGroup, _super);
    function GridColumnMenuGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.onGroupClick = function (event) {
            event.preventDefault();
            if (_this.props.onGroupChange) {
                var column_1 = _this.props.column;
                if (!column_1.field) {
                    return;
                }
                var newGroup = (_this.props.group || []).slice();
                var groupIndex = newGroup.findIndex(function (group) { return group.field === column_1.field; });
                if (groupIndex > -1) {
                    newGroup.splice(groupIndex, 1);
                }
                else {
                    newGroup.push({
                        field: column_1.field
                    });
                }
                _this.props.onGroupChange(newGroup, event);
            }
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        return _this;
    }
    /**
     * @hidden
     */
    GridColumnMenuGroup.prototype.render = function () {
        var _a = this.props, group = _a.group, column = _a.column;
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var isGrouped = Boolean(group && column.field && group.find(function (currentGroup) { return currentGroup.field === column.field; }));
        var message = !isGrouped ? groupColumn : ungroupColumn;
        return (index_js_.createElement(GridColumnMenuItemGroup, null,
            index_js_.createElement(GridColumnMenuItem, { title: localizationService.toLanguageString(message, messages[message]), iconClass: !isGrouped ? 'k-i-group' : 'k-i-ungroup', svgIcon: !isGrouped ? index_es_js_.groupIcon : index_es_js_.ungroupIcon, onClick: this.onGroupClick })));
    };
    return GridColumnMenuGroup;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForIntl)(GridColumnMenuGroup);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridColumnMenuGroup);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuSort.js
var GridColumnMenuSort_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







/**
 * @hidden
 */
var ASC_DIR = 'asc';
/**
 * @hidden
 */
var DESC_DIR = 'desc';
/**
 * @hidden
 */
var GridColumnMenuSort_sortSeqMap = {
    true: {
        'asc': { 'asc': '', 'desc': 'desc' },
        'desc': { 'asc': 'asc', 'desc': '' },
        '': { 'asc': 'asc', 'desc': 'desc' }
    },
    false: {
        'asc': { 'asc': 'asc', 'desc': 'desc' },
        'desc': { 'asc': 'asc', 'desc': 'desc' },
        '': { 'asc': 'asc', 'desc': 'desc' }
    }
};
/**
 * @hidden
 */
var sortIndex = function (field, sort) {
    if (!sort) {
        return -1;
    }
    return sort.findIndex(function (s) { return s.field === field; });
};
/**
 * @hidden
 */
var sortedAsc = function (sortedIndex, sort) {
    return !!(sort && sortedIndex > -1 && sort[sortedIndex].dir === ASC_DIR);
};
/**
 * @hidden
 */
var sortedDesc = function (sortedIndex, sort) {
    return !!(sort && sortedIndex > -1 && sort[sortedIndex].dir === DESC_DIR);
};
/**
 * @example
 * ```jsx-no-run
 * class ColumnMenu extends React.Component {
 *     render() {
 *         return (
 *         <div>
 *             <GridColumnMenuSort {...this.props} />
 *         </div>);
 *     }
 * }
 *
 * class App extends React.PureComponent {
 *     constructor(props) {
 *         super(props);
 *
 *         this.state = this.createAppState({
 *             take: 10,
 *             skip: 0
 *         });
 *     }
 *
 *     createAppState(dataState) {
 *         return {
 *             result: process(products.slice(0), dataState),
 *             dataState: dataState
 *         };
 *     }
 *
 *     dataStateChange = (event) => {
 *         this.setState(this.createAppState(event.dataState));
 *     }
 *
 *     render() {
 *         return (
 *             <div>
 *                 <Grid
 *                     data={this.state.result}
 *                     {...this.state.dataState}
 *                     onDataStateChange={this.dataStateChange}
 *                     sortable={true}
 *                     pageable={true}
 *                 >
 *                     <Column field="ProductID" title="Product ID" columnMenu={ColumnMenu}/>
 *                     <Column field="ProductName" />
 *                 </Grid>
 *                 <br />
 *             </div>
 *         );
 *     }
 * }
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridColumnMenuSort = /** @class */ (function (_super) {
    GridColumnMenuSort_extends(GridColumnMenuSort, _super);
    function GridColumnMenuSort() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.onAscClick = function (event) {
            _this.onSort(event, ASC_DIR);
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        /**
         * @hidden
         */
        _this.onDescClick = function (event) {
            _this.onSort(event, DESC_DIR);
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        /**
         * @hidden
         */
        _this.onSort = function (event, selectedDir) {
            event.preventDefault();
            if (!_this.props.onSortChange) {
                return;
            }
            var _a = _this.props, column = _a.column, sortable = _a.sortable, sort = _a.sort;
            var _b = normalize(sortable || false, false), allowUnsort = _b.allowUnsort, mode = _b.mode;
            var oldDescriptor = (sort || []).filter(function (d) { return d.field === column.field; })[0];
            var dir = GridColumnMenuSort_sortSeqMap[allowUnsort][oldDescriptor && oldDescriptor.dir || ''][selectedDir];
            var newDescriptor = (mode === 'single') ?
                [] : (_this.props.sort || []).filter(function (d) { return d.field !== column.field; });
            if (dir !== '' && column.field) {
                newDescriptor.push({ field: column.field, dir: dir });
            }
            _this.props.onSortChange(newDescriptor, event);
        };
        return _this;
    }
    /**
     * @hidden
     */
    GridColumnMenuSort.prototype.render = function () {
        var _a = this.props, sort = _a.sort, column = _a.column;
        var currentSortIndex = sortIndex(column.field, sort);
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        return (index_js_.createElement(GridColumnMenuItemGroup, null,
            index_js_.createElement(GridColumnMenuItem, { title: localizationService.toLanguageString(sortAscending, messages[sortAscending]), iconClass: 'k-i-sort-asc-sm', svgIcon: index_es_js_.sortAscSmallIcon, selected: sortedAsc(currentSortIndex, sort), onClick: this.onAscClick }),
            index_js_.createElement(GridColumnMenuItem, { title: localizationService.toLanguageString(sortDescending, messages[sortDescending]), iconClass: 'k-i-sort-desc-sm', svgIcon: index_es_js_.sortDescSmallIcon, selected: sortedDesc(currentSortIndex, sort), onClick: this.onDescClick })));
    };
    /* eslint-disable max-len */
    /**
     * Can be used to check if sorting is applied to a specific field ([see example]({% slug column_menu_grid %}#toc-styling-the-column-menu-icon)). Useful for creating active sort indicators.
     */
    // tslint:enable:max-line-length
    GridColumnMenuSort.active = function (field, sort) {
        var currentSortIndex = sortIndex(field, sort);
        return sortedDesc(currentSortIndex, sort) || sortedAsc(currentSortIndex, sort);
    };
    return GridColumnMenuSort;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForIntl)(GridColumnMenuSort);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridColumnMenuSort);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-data-query@1.7.1/node_modules/@progress/kendo-data-query/dist/es/main.js + 13 modules
var main = __webpack_require__(35550);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kendo-s_bfdbf2fb0f4ae089ac0cb07b6b69ec9f/node_modules/@progress/kendo-react-animation/dist/es/Reveal.js
var Reveal = __webpack_require__(44484);
;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuItemContent.js
var GridColumnMenuItemContent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * The GridColumnMenuItemContent that will be used inside the Grid ColumnMenu.
 */
var GridColumnMenuItemContent = /** @class */ (function (_super) {
    GridColumnMenuItemContent_extends(GridColumnMenuItemContent, _super);
    function GridColumnMenuItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridColumnMenuItemContent.prototype.render = function () {
        return (index_js_.createElement("div", { id: this.props.id, className: (0,main_js_.classNames)('k-columnmenu-item-content', this.props.className), style: this.props.style },
            index_js_.createElement(Reveal/* Reveal */.g, { style: { position: 'relative', display: 'block' } }, this.props.show ? this.props.children : null)));
    };
    return GridColumnMenuItemContent;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuFilterCell.js
var GridColumnMenuFilterCell_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





/**
 * @hidden
 */
var GridColumnMenuFilterCell = /** @class */ (function (_super) {
    GridColumnMenuFilterCell_extends(GridColumnMenuFilterCell, _super);
    function GridColumnMenuFilterCell(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOperatorEditor = function () {
            if (_this.props.filterType === 'boolean') {
                return;
            }
            var value = _this.props.operators.find(function (item) { return item.operator === _this.props.operator; }) || null;
            return (index_js_.createElement(kendo_react_dropdowns_index_mjs_.DropDownList, { value: value, onChange: _this.operatorChange, data: _this.props.operators, textField: "text" }));
        };
        _this.inputChange = _this.inputChange.bind(_this);
        _this.operatorChange = _this.operatorChange.bind(_this);
        _this.boolDropdownChange = _this.boolDropdownChange.bind(_this);
        return _this;
    }
    /**
     * @hidden
     */
    GridColumnMenuFilterCell.prototype.render = function () {
        return (index_js_.createElement(index_js_.Fragment, null,
            this.renderOperatorEditor(),
            this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues)));
    };
    GridColumnMenuFilterCell.prototype.inputChange = function (value, e) {
        cellInputChange(value, e, this.props);
    };
    GridColumnMenuFilterCell.prototype.operatorChange = function (event) {
        cellOperatorChange(event, this.props.value, this.props.onChange);
    };
    GridColumnMenuFilterCell.prototype.boolDropdownChange = function (event) {
        cellBoolDropdownChange(event, this.props.onChange);
    };
    GridColumnMenuFilterCell.prototype.filterComponent = function (filterType, value, booleanValues) {
        var _this = this;
        switch (filterType) {
            case 'numeric':
                return (index_js_.createElement(es_main_js_.NumericTextBox, { value: value, onChange: function (e) { _this.inputChange(e.value, e.syntheticEvent); }, rangeOnEnter: false }));
            case 'date':
                return (index_js_.createElement(dist_es_main_js_.DatePicker, { value: value, onChange: function (e) { _this.inputChange(e.value, e.syntheticEvent); } }));
            case 'boolean':
                var noFilterSet_1 = function (filter) { return filter === null || filter === undefined; };
                return (index_js_.createElement(kendo_react_dropdowns_index_mjs_.DropDownList, { onChange: this.boolDropdownChange, value: booleanValues.find(function (item) { return item.operator === (noFilterSet_1(value) ? '' : value); }), data: booleanValues, textField: "text" }));
            default: return (index_js_.createElement(es_main_js_.Input, { value: value || '', onChange: function (e) { _this.inputChange(e.target.value, e.syntheticEvent); } }));
        }
    };
    return GridColumnMenuFilterCell;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuFilterUI.js
var GridColumnMenuFilterUI_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridColumnMenuFilterUI_assign = (undefined && undefined.__assign) || function () {
    GridColumnMenuFilterUI_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridColumnMenuFilterUI_assign.apply(this, arguments);
};



/**
 * @hidden
 */
var GridColumnMenuFilterUI = /** @class */ (function (_super) {
    GridColumnMenuFilterUI_extends(GridColumnMenuFilterUI, _super);
    function GridColumnMenuFilterUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridColumnMenuFilterUI.prototype.render = function () {
        var _a = this.props, firstFilterProps = _a.firstFilterProps, hideSecondFilter = _a.hideSecondFilter, secondFilterProps = _a.secondFilterProps, logicData = _a.logicData, logicValue = _a.logicValue, onLogicChange = _a.onLogicChange;
        return (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement(GridColumnMenuFilterCell, GridColumnMenuFilterUI_assign({}, firstFilterProps)),
            !hideSecondFilter && (index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement(kendo_react_dropdowns_index_mjs_.DropDownList, { data: logicData, value: logicValue, onChange: onLogicChange, className: 'k-filter-and', textField: "text" }),
                index_js_.createElement(GridColumnMenuFilterCell, GridColumnMenuFilterUI_assign({}, secondFilterProps))))));
    };
    return GridColumnMenuFilterUI;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuFilter.js
var GridColumnMenuFilter_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridColumnMenuFilter_assign = (undefined && undefined.__assign) || function () {
    GridColumnMenuFilter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridColumnMenuFilter_assign.apply(this, arguments);
};
var GridColumnMenuFilter_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};











/**
 * @hidden
 */
var rootFilterOrDefault = function (rootFilter) {
    return (rootFilter || { filters: [], logic: 'and' });
};
/**
 * @hidden
 */
var filterGroupByField = function (field, filter) {
    var rootFilter = rootFilterOrDefault(filter);
    var compositeFilters = rootFilter.filters
        .filter(function (f) {
        if ((0,main/* isCompositeFilterDescriptor */.HG)(f)) {
            return f.filters &&
                f.filters.length &&
                f.filters.length <= 2 &&
                !f.filters.find(function (nf) { return (0,main/* isCompositeFilterDescriptor */.HG)(nf) || nf.field !== field; });
        }
        return false;
    });
    return compositeFilters[0] || null;
};
/**
 * @example
 * ```jsx-no-run
 * class TextColumnMenu extends React.Component {
 *     render() {
 *         return (
 *         <div>
 *             <GridColumnMenuSort {...this.props} />
 *             <GridColumnMenuFilter {...this.props} />
 *         </div>);
 *     }
 * }
 *
 * class App extends React.PureComponent {
 *     constructor(props) {
 *         super(props);
 *
 *         this.state = this.createAppState({
 *             take: 10,
 *             skip: 0
 *         });
 *     }
 *
 *     createAppState(dataState) {
 *         return {
 *             result: process(products.slice(0), dataState),
 *             dataState: dataState
 *         };
 *     }
 *
 *     dataStateChange = (event) => {
 *         this.setState(this.createAppState(event.dataState));
 *     }
 *
 *     render() {
 *         return (
 *             <div>
 *                 <Grid
 *                     data={this.state.result}
 *                     {...this.state.dataState}
 *                     onDataStateChange={this.dataStateChange}
 *                     sortable={true}
 *                     pageable={true}
 *                 >
 *                     <Column field="ProductID" title="Product ID" />
 *                     <Column field="ProductName" columnMenu={TextColumnMenu} />
 *                 </Grid>
 *                 <br />
 *             </div>
 *         );
 *     }
 * }
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridColumnMenuFilter = /** @class */ (function (_super) {
    GridColumnMenuFilter_extends(GridColumnMenuFilter, _super);
    function GridColumnMenuFilter(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.removeGroup = function (group, rootFilter) {
            var filters = GridColumnMenuFilter_spreadArray([], rootFilter.filters, true);
            var groupIndex = filters
                .findIndex(function (f) { return f === group; });
            if (groupIndex > -1) {
                filters.splice(groupIndex, 1);
            }
            return GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: filters });
        };
        /**
         * @hidden
         */
        _this.insertGroup = function (group, rootFilter) {
            return GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: GridColumnMenuFilter_spreadArray([
                    group
                ], rootFilter.filters, true) });
        };
        /**
         * @hidden
         */
        _this.isControlled = function () { return _this.props.expanded !== undefined; };
        /**
         * @hidden
         */
        _this.onFilterExpand = function () {
            var isControlled = _this.isControlled();
            var nextValue = !(isControlled ? _this.props.expanded : _this.state.expanded);
            if (_this.props.onExpandChange) {
                _this.props.onExpandChange(nextValue);
            }
            if (!isControlled) {
                _this.setState({
                    expanded: nextValue
                });
            }
        };
        /**
         * @hidden
         */
        _this.firstFilterChange = function (event) {
            _this.filterChange(0, event);
        };
        /**
         * @hidden
         */
        _this.secondFilterChange = function (event) {
            _this.filterChange(1, event);
        };
        /**
         * @hidden
         */
        _this.filterChange = function (filterIndex, e) {
            var filters = _this.state.filterGroup.filters.map(function (f, i) {
                if (i === filterIndex) {
                    return GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, f), { value: e.value, operator: e.operator });
                }
                return f;
            });
            _this.setState({
                filterGroup: GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, _this.state.filterGroup), { filters: filters })
            });
        };
        /**
         * @hidden
         */
        _this.logicChange = function (event) {
            _this.setState({
                filterGroup: GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, _this.state.filterGroup), { logic: event.target.value.operator })
            });
        };
        /**
         * @hidden
         */
        _this.clear = function (event) {
            event.preventDefault();
            if (!_this.props.onFilterChange) {
                return;
            }
            var field = _this.props.column.field;
            var rootFilter = rootFilterOrDefault(_this.props.filter);
            var filterGroup = filterGroupByField(field, _this.props.filter);
            var rootFilters = rootFilter.filters.filter(function (f) { return f !== filterGroup; });
            if (!rootFilters.length) {
                _this.props.onFilterChange(null, event);
            }
            else {
                _this.props.onFilterChange(GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: rootFilters }), event);
            }
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        /**
         * @hidden
         */
        _this.currentFilterGroup = function () {
            return GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, _this.state.filterGroup), { filters: _this.state
                    .filterGroup
                    .filters
                    .filter(function (nf) {
                    return (nf.value !== undefined && nf.value !== null && nf.value !== '') ||
                        (nf.value === null && nf.operator);
                }) });
        };
        /**
         * @hidden
         */
        _this.submit = function (event) {
            event.preventDefault();
            if (!_this.props.onFilterChange) {
                return;
            }
            var field = _this.props.column.field;
            var rootFilter = rootFilterOrDefault(_this.props.filter);
            var filterGroup = filterGroupByField(field, _this.props.filter);
            var currentFilterGroup = _this.currentFilterGroup();
            var updatedFilter = null;
            if (filterGroup && currentFilterGroup.filters.length > 0) {
                var rootFilters = rootFilter.filters.map(function (f) {
                    if (f === filterGroup) {
                        return currentFilterGroup;
                    }
                    return f;
                });
                updatedFilter = GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: rootFilters });
            }
            else if (currentFilterGroup.filters.length === 0) {
                var rootFilters = rootFilter
                    .filters
                    .filter(function (f) { return f !== filterGroup; });
                if (rootFilters.length) {
                    updatedFilter = GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: rootFilters });
                }
            }
            else {
                updatedFilter = GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, rootFilter), { filters: GridColumnMenuFilter_spreadArray(GridColumnMenuFilter_spreadArray([], rootFilter.filters, true), [currentFilterGroup], false) });
            }
            _this.props.onFilterChange(updatedFilter, event);
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        var filterGroup;
        if (props.column && props.column.field) {
            var filterType = getFilterType(props.column.filter);
            var defaultOperator = getDefaultOperator(props.filterOperators, filterType);
            filterGroup = filterGroupByField(props.column.field, props.filter);
            filterGroup = filterGroup ? GridColumnMenuFilter_assign(GridColumnMenuFilter_assign({}, filterGroup), { filters: filterGroup.filters.map(function (f) {
                    return GridColumnMenuFilter_assign({}, f);
                }) }) : {
                logic: 'and',
                filters: [
                    { field: props.column.field, operator: defaultOperator, value: IsUnaryFilter(defaultOperator) ? null : undefined },
                    { field: props.column.field, operator: defaultOperator, value: IsUnaryFilter(defaultOperator) ? null : undefined }
                ]
            };
            if (filterGroup.filters.filter(function (x) { return x.field === props.column.field; }).length === 1) {
                filterGroup.filters.splice(1, 0, { field: props.column.field, operator: defaultOperator });
            }
        }
        _this.state = {
            expanded: props.expanded || false,
            filterGroup: filterGroup
        };
        return _this;
    }
    /**
     * @hidden
     */
    GridColumnMenuFilter.prototype.render = function () {
        var _a = this.props, column = _a.column, filterUI = _a.filterUI, hideSecondFilter = _a.hideSecondFilter, filterOperators = _a.filterOperators;
        if (!column || !column.field) {
            return index_js_.createElement("div", null);
        }
        var filterType = getFilterType(column.filter);
        var currentHideSecondFilter = hideSecondFilter !== undefined ?
            hideSecondFilter : defaultHideSecondFilter[filterType];
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var filters = this.state.filterGroup.filters;
        var currentOperators = operatorMap(filterOperators[filterType], localizationService);
        var booleanValues = operatorMap(booleanFilterValues, localizationService);
        var firstFilterCellProps = {
            field: column.field,
            value: filters[0].value,
            operator: filters[0].operator,
            operators: currentOperators,
            booleanValues: booleanValues,
            onChange: this.firstFilterChange,
            filterType: filterType
        };
        var secondFilterCellProps = {
            field: column.field,
            value: filters[1].value,
            operator: filters[1].operator,
            operators: currentOperators,
            booleanValues: booleanValues,
            onChange: this.secondFilterChange,
            filterType: filterType
        };
        var filterLogic = this.state.filterGroup.logic;
        var logicData = operatorMap(filterLogicList, localizationService);
        var logicProps = {
            value: logicData.find(function (item) { return item.operator === (filterLogic === null ? '' : filterLogic); }),
            onChange: this.logicChange,
            data: logicData
        };
        var FilterUI = filterUI;
        var filterUIProps = {
            firstFilterProps: firstFilterCellProps,
            secondFilterProps: secondFilterCellProps,
            logicData: logicProps.data,
            logicValue: logicProps.value,
            onLogicChange: logicProps.onChange,
            hideSecondFilter: currentHideSecondFilter
        };
        var isFilterValid = this.currentFilterGroup().filters.length !== 0 ||
            IsUnaryFilter(filters[0].operator) ||
            IsUnaryFilter(filters[1].operator);
        var expandState = this.isControlled() ? this.props.expanded : this.state.expanded;
        var alwaysExpand = this.props.alwaysExpand;
        return (index_js_.createElement(GridColumnMenuItemGroup, null,
            !alwaysExpand && index_js_.createElement(GridColumnMenuItem, { title: localizationService.toLanguageString(filterTitle, messages[filterTitle]), iconClass: 'k-i-filter', svgIcon: index_es_js_.filterIcon, onClick: this.onFilterExpand }),
            index_js_.createElement(GridColumnMenuItemContent, { show: alwaysExpand || !!expandState },
                index_js_.createElement("div", { className: 'kendo-grid-filter-menu-container' },
                    index_js_.createElement("form", { className: 'k-filter-menu k-group k-reset k-state-border-up', onSubmit: this.submit, onReset: this.clear, onKeyDown: function (e) { return e.stopPropagation(); } },
                        index_js_.createElement("div", { className: 'k-filter-menu-container' },
                            FilterUI ?
                                index_js_.createElement(FilterUI, GridColumnMenuFilter_assign({}, filterUIProps)) :
                                index_js_.createElement(GridColumnMenuFilterUI, GridColumnMenuFilter_assign({}, filterUIProps)),
                            index_js_.createElement("div", { className: 'k-actions k-actions-stretched' },
                                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { themeColor: "primary", disabled: !isFilterValid }, localizationService.toLanguageString(filterSubmitButton, messages[filterSubmitButton])),
                                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { type: 'reset' }, localizationService.toLanguageString(filterClearButton, messages[filterClearButton])))))))));
    };
    /* eslint-disable max-len */
    /**
     * Can be used to check if filtering is applied to a specific field ([see example]({% slug column_menu_grid %}#toc-styling-the-column-menu-icon)). Useful for creating active filter indicators.
     */
    // tslint:enable:max-line-length
    GridColumnMenuFilter.active = function (field, filter) {
        return !!filterGroupByField(field, filter);
    };
    return GridColumnMenuFilter;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridColumnMenuFilter);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuCheckboxFilter.js
var GridColumnMenuCheckboxFilter_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridColumnMenuCheckboxFilter_assign = (undefined && undefined.__assign) || function () {
    GridColumnMenuCheckboxFilter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridColumnMenuCheckboxFilter_assign.apply(this, arguments);
};
var GridColumnMenuCheckboxFilter_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};












/**
 * @hidden
 */
var isArrayEqual = function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    return firstArray.every(function (ex, i) { return ex === secondArray[i]; });
};
var GridColumnMenuCheckboxFilter = /** @class */ (function (_super) {
    GridColumnMenuCheckboxFilter_extends(GridColumnMenuCheckboxFilter, _super);
    function GridColumnMenuCheckboxFilter(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.defaultFilter = function () {
            if (_this.props.filter) {
                return (0,main_js_.clone)(_this.props.filter);
            }
            return { filters: [], logic: 'and' };
        };
        /**
         * @hidden
         */
        _this.isControlled = function () { return _this.props.expanded !== undefined; };
        /**
         * @hidden
         */
        _this.parseData = function (originalData, isUnique) {
            var field = _this.props.column.field || '';
            var data = originalData.map(function (item) { return getNestedValue(field, item); });
            if (isUnique) {
                return data.filter(function (item, index) { return data.indexOf(item) === index; });
            }
            return data;
        };
        /**
         * @hidden
         */
        _this.getFilterIndex = function () {
            var field = _this.props.column.field;
            var currentFilter = _this.defaultFilter();
            var compositeFilterIndex = currentFilter.filters.findIndex(function (filter) {
                return filter.filters && filter.filters.length > 0 && filter.filters[0].field === field;
            });
            return compositeFilterIndex;
        };
        /**
         * @hidden
         */
        _this.onFilterExpand = function () {
            var isControlled = _this.isControlled();
            var nextValue = !(isControlled ? _this.props.expanded : _this.state.expanded);
            if (_this.props.onExpandChange) {
                _this.props.onExpandChange(nextValue);
            }
            if (!isControlled) {
                _this.setState({
                    expanded: nextValue
                });
            }
        };
        /**
         * @hidden
         */
        _this.handleSearchChange = function (e) {
            var filterOperator = _this.props.searchBoxFilterOperator ? _this.props.searchBoxFilterOperator : 'startswith';
            var filterExpression = {
                logic: 'and',
                filters: [
                    { field: _this.props.column.field, operator: filterOperator, value: e.target.value, ignoreCase: true }
                ]
            };
            _this.setState({
                value: e.target.value,
                data: _this.parseData((0,main/* filterBy */.WP)(_this.props.data || [], filterExpression), _this.props.uniqueData)
            });
        };
        /**
         * @hidden
         */
        _this.handleClear = function () {
            var filterOperator = _this.props.searchBoxFilterOperator ? _this.props.searchBoxFilterOperator : 'startswith';
            var filterExpression = {
                logic: 'and',
                filters: [
                    { field: _this.props.column.field, operator: filterOperator, value: '', ignoreCase: true }
                ]
            };
            _this.setState({
                value: '',
                data: _this.parseData((0,main/* filterBy */.WP)(_this.props.data || [], filterExpression), _this.props.uniqueData)
            });
        };
        /**
         * @hidden
         */
        _this.clear = function (e) {
            e.preventDefault();
            if (!_this.props.onFilterChange) {
                return;
            }
            var updatedFilter = _this.state.currentFilter || null;
            if (updatedFilter !== null && updatedFilter.filters.length > 0) {
                if (_this.compositeFilterIndex >= 0) {
                    updatedFilter.filters.splice(_this.compositeFilterIndex, 1);
                }
                _this.props.onFilterChange(updatedFilter, e);
            }
            else {
                _this.props.onFilterChange(null, e);
            }
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        /**
         * @hidden
         */
        _this.submit = function (e) {
            e.preventDefault();
            if (!_this.props.onFilterChange) {
                return;
            }
            var updatedFilter = _this.state.currentFilter || null;
            _this.props.onFilterChange(updatedFilter, e);
            if (_this.props.onCloseMenu) {
                _this.props.onCloseMenu();
            }
        };
        /**
         * @hidden
         */
        _this.handleCheckBoxChange = function (e, value) {
            var field = _this.props.column.field || '';
            var newFilter = GridColumnMenuCheckboxFilter_assign({}, _this.state.currentFilter);
            var filters = GridColumnMenuCheckboxFilter_spreadArray([], _this.state.currentFilter.filters, true) || [];
            var fieldFilters = [];
            if (_this.compositeFilterIndex !== -1 && newFilter.filters[_this.compositeFilterIndex].filters && value !== 'all') {
                fieldFilters = newFilter.filters[_this.compositeFilterIndex].filters;
            }
            if (e.value && value === 'all') {
                _this.state.data.forEach(function (item) {
                    fieldFilters.push({ field: field, operator: 'eq', value: item });
                });
            }
            else if (e.value) {
                fieldFilters.push({ field: field, operator: 'eq', value: value });
            }
            else if (_this.state.currentFilter) {
                var index = fieldFilters.findIndex(function (filter) { return filter.value === value; });
                fieldFilters.splice(index, 1);
            }
            newFilter.logic = 'and';
            if (_this.compositeFilterIndex !== -1) {
                filters[_this.compositeFilterIndex] = {
                    logic: 'or',
                    filters: fieldFilters
                };
            }
            else {
                filters.push({
                    logic: 'or',
                    filters: fieldFilters
                });
            }
            if (!e.value && value === 'all' || fieldFilters.length === 0) {
                filters.splice(_this.compositeFilterIndex, 1);
            }
            newFilter.filters = filters;
            _this.setState({ currentFilter: newFilter });
        };
        /**
         * @hidden
         */
        _this.isAllSelected = function () {
            var isAllChecked = false;
            if (_this.state.currentFilter) {
                var filters_1 = GridColumnMenuCheckboxFilter_spreadArray([], _this.state.currentFilter.filters, true);
                if (_this.compositeFilterIndex === -1) {
                    return false;
                }
                isAllChecked = _this.state.data.every(function (item) {
                    if (_this.compositeFilterIndex !== -1 && filters_1[_this.compositeFilterIndex].filters) {
                        var index = filters_1[_this.compositeFilterIndex].filters.findIndex(function (filter) { return filter.value === item; });
                        return index >= 0;
                    }
                    return false;
                });
                return isAllChecked;
            }
            return isAllChecked;
        };
        _this.compositeFilterIndex = _this.getFilterIndex();
        _this.state = {
            expanded: props.expanded || false,
            value: '',
            data: _this.parseData(_this.props.data, _this.props.uniqueData) || [],
            dataFromProps: _this.parseData(_this.props.data, false) || [],
            currentFilter: _this.defaultFilter()
        };
        return _this;
    }
    /**
     * @hidden
     */
    GridColumnMenuCheckboxFilter.prototype.componentDidUpdate = function () {
        var field = this.props.column.field || '';
        var data = this.props.data.map(function (item) { return getNestedValue(field, item); });
        if (!isArrayEqual(data, this.state.dataFromProps)) {
            this.setState({
                data: data,
                dataFromProps: data
            });
        }
    };
    /**
     * @hidden
     */
    GridColumnMenuCheckboxFilter.prototype.render = function () {
        var _this = this;
        var column = this.props.column;
        if (!column || !column.field) {
            return index_js_.createElement("div", null);
        }
        var localizationService = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
        var expandState = this.isControlled() ? this.props.expanded : this.state.expanded;
        var filterValues = [];
        if (this.state.currentFilter) {
            var currentFilter = GridColumnMenuCheckboxFilter_spreadArray([], this.state.currentFilter.filters, true);
            this.compositeFilterIndex = currentFilter.findIndex(function (filter) {
                if (filter.filters && filter.filters.length > 0) {
                    return filter.filters[0].field === column.field;
                }
                return false;
            });
            if (this.compositeFilterIndex !== -1 && currentFilter[this.compositeFilterIndex].filters.length > 0) {
                currentFilter[this.compositeFilterIndex].filters.forEach(function (filterItem) {
                    if (filterItem.field === _this.props.column.field) {
                        filterValues.push(filterItem.value);
                    }
                });
            }
        }
        var searchBox = this.props.searchBox ?
            index_js_.createElement(this.props.searchBox, { value: this.state.value, onChange: this.handleSearchChange }) :
            (index_js_.createElement("div", { className: "k-searchbox k-textbox k-input k-input-md k-input-solid" },
                index_js_.createElement(main_js_.IconWrap, { className: "k-input-icon", name: 'search', icon: index_es_js_.searchIcon }),
                index_js_.createElement(es_main_js_.Input, { className: "k-input-inner", type: "text", placeholder: localizationService.toLanguageString(searchPlaceholder, messages[searchPlaceholder]), value: this.state.value, onChange: function (e) { return _this.handleSearchChange(e.nativeEvent); } }),
                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { type: "button", rounded: null, className: "k-input-button", onClick: this.handleClear, icon: "x", svgIcon: index_es_js_.xIcon })));
        var uniqueFilterValues = filterValues.filter(function (item, index) { return filterValues.indexOf(item) === index; });
        return (index_js_.createElement(GridColumnMenuItemGroup, null,
            index_js_.createElement(GridColumnMenuItem, { title: localizationService.toLanguageString(filterTitle, messages[filterTitle]), iconClass: "k-i-filter", svgIcon: index_es_js_.filterIcon, onClick: this.onFilterExpand }),
            index_js_.createElement(GridColumnMenuItemContent, { show: !!expandState },
                index_js_.createElement("div", { className: "kendo-grid-filter-menu-container" },
                    index_js_.createElement("form", { className: "k-filter-menu k-group k-reset k-state-border-up", onSubmit: this.submit, onReset: this.clear },
                        index_js_.createElement("div", { className: "k-filter-menu-container" },
                            searchBox,
                            index_js_.createElement("ul", { className: "k-reset k-multicheck-wrap" },
                                index_js_.createElement("li", { className: "k-item k-check-all-wrap" },
                                    index_js_.createElement(es_main_js_.Checkbox, { label: localizationService.toLanguageString(filterCheckAll, messages[filterCheckAll]), onChange: function (e) { return _this.handleCheckBoxChange(e, 'all'); }, checked: this.isAllSelected() })),
                                this.state.data.map(function (item, index) {
                                    return (index_js_.createElement("li", { className: "k-item", key: index },
                                        index_js_.createElement(es_main_js_.Checkbox, { label: String(item), onChange: function (e) { return _this.handleCheckBoxChange(e, item); }, checked: uniqueFilterValues.includes(item) })));
                                })),
                            index_js_.createElement("div", { className: "k-filter-selected-items" }, uniqueFilterValues.length + ' ' + localizationService.toLanguageString(filterSelectedItems, messages[filterSelectedItems])),
                            index_js_.createElement("div", { className: "k-actions k-hstack k-justify-content-stretch" },
                                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { themeColor: "primary", type: 'submit' }, localizationService.toLanguageString(filterSubmitButton, messages[filterSubmitButton])),
                                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { className: "k-button", type: 'reset' }, localizationService.toLanguageString(filterClearButton, messages[filterClearButton])))))))));
    };
    /**
     * @hidden
     */
    GridColumnMenuCheckboxFilter.defaultProps = {
        uniqueData: true
    };
    return GridColumnMenuCheckboxFilter;
}(index_js_.Component));

(0,kendo_react_intl_index_mjs_.registerForLocalization)(GridColumnMenuCheckboxFilter);

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuColumnsList.js





/**
 * Represents the KendoReact GridColumnMenuColumnsList component.
 */
var GridColumnMenuColumnsList = function (props) {
    var _a = index_js_.useState(''), filter = _a[0], setFilter = _a[1];
    var selectedColumnsIds = index_js_.useMemo(function () { return new Set(props.columnsState.map(function (c) { return c.id; })); }, [props.columnsState]);
    var filtered = index_js_.useMemo(function () {
        return props.columns.filter(function (c) { var _a; return (_a = (c.title || c.field)) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filter.toLowerCase()); });
    }, [props.columns, filter]);
    var state = props.columns.map(function (c) { return index_js_.useState(selectedColumnsIds.has(c.id)); });
    var onApply = index_js_.useCallback(function () {
        var nextColumns = props.columns.filter(function (_c, i) { return state[i][0]; });
        props.onColumnsChange.call(undefined, nextColumns);
        props.onCloseMenu.call(undefined);
    }, [state, props.columns, props.onColumnsChange, props.onCloseMenu]);
    var onReset = index_js_.useCallback(function () {
        props.columns.forEach(function (c, i) {
            state[i][1](selectedColumnsIds.has(c.id));
        });
    }, [state, selectedColumnsIds, props.columns]);
    var checkedCount = state.filter(function (st) { return st[0]; }).length;
    var allSelected = checkedCount === state.length;
    var onSelectAll = index_js_.useCallback(function () {
        state.forEach(function (st, i) {
            if (allSelected && i === 0) {
                st[1](true);
            }
            else {
                st[1](!allSelected);
            }
        });
    }, [state, allSelected]);
    return (index_js_.createElement("form", { className: "k-filter-menu k-group k-reset" },
        index_js_.createElement("div", { className: "k-filter-menu-container" },
            index_js_.createElement(es_main_js_.TextBox, { className: 'k-searchbox', value: filter, onChange: function (e) { return setFilter(String(e.target.value)); }, prefix: function () { return (index_js_.createElement(index_js_.Fragment, null,
                    index_js_.createElement(es_main_js_.InputPrefix, null,
                        index_js_.createElement(main_js_.IconWrap, { name: "search", icon: index_es_js_.searchIcon })))); } }),
            index_js_.createElement("ul", { className: "k-reset k-multicheck-wrap" },
                !filter && index_js_.createElement("li", { className: "k-item k-check-all-wrap" },
                    index_js_.createElement(es_main_js_.Checkbox, { checked: allSelected, onChange: onSelectAll, label: '(Select all)' })),
                filtered.map(function (c, i) {
                    return (index_js_.createElement("li", { key: c.id, className: "k-item" },
                        index_js_.createElement(es_main_js_.Checkbox, { disabled: state[i][0] && checkedCount === 1, checked: state[i][0], onChange: function (e) { var _a; return state[i][1](Boolean((_a = e.target.element) === null || _a === void 0 ? void 0 : _a.checked)); }, label: c.title || c.field })));
                })),
            index_js_.createElement("div", { className: "k-filter-selected-items" },
                checkedCount,
                " selected items"),
            index_js_.createElement("div", { className: "k-actions k-actions-start k-actions-horizontal" },
                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { type: "button", themeColor: 'primary', onClick: onApply }, "Apply"),
                index_js_.createElement(kendo_react_buttons_dist_es_main_js_.Button, { type: "button", onClick: onReset }, "Reset")))));
};
GridColumnMenuColumnsList.displayName = 'GridColumnMenuColumnsList';

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/rows/GridDetailRow.js
var GridDetailRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* eslint-disable max-len */
/**
 * Represents the detail row class of the KendoReact Grid. Used to define custom details for each row. Can be applied for building the hierarchy. If `expandField` is set, the details for each row will be visible or hidden depending on the current data item and its `expandField` value.
 *
 * @example
 * ```jsx
 * class CustomGridDetailRow extends GridDetailRow {
 *     render() {
 *         const detailData = this.props.dataItem.MasterField2;
 *         return (
 *             <div>
 *               This is detail template with another grid inside it
 *               <Grid scrollable="none" data={detailData} />
 *             </div>
 *         );
 *     }
 * }
 *
 * class App extends React.Component {
 *     constructor(props) {
 *         super(props);
 *         this.state = {
 *             data: [{MasterField1:'A1', MasterField2: [{DetailField1: 1, DetailField2: 2}]},
 *                   {MasterField1:'B1', MasterField2: [{DetailField1: 3, DetailField2: 4}]},
 *                   {MasterField1:'C1', MasterField2: [{DetailField1: 5, DetailField2: 6}]}]
 *         };
 *     }
 *     render() {
 *         return (
 *             <Grid
 *                  data={this.state.data}
 *                  detail={CustomGridDetailRow}
 *              >
 *              <GridColumn field="MasterField1" />
 *             </Grid>
 *         );
 *     }
 * }
 * ReactDOM.render(
 *     <App />,
 *     document.querySelector('my-app')
 * );
 * ```
 */
// tslint:enable:max-line-length
var GridDetailRow = /** @class */ (function (_super) {
    GridDetailRow_extends(GridDetailRow, _super);
    function GridDetailRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridDetailRow.prototype.render = function () {
        return null;
    };
    return GridDetailRow;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/GridToolbar.js
var GridToolbar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Represents the GridToolbar component.
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    state = {
 *       data: [
 *            {'Column1':'A1', 'Column2':'A2'},
 *            {'Column1':'B1', 'Column2':'B2'},
 *            {'Column1':'C1', 'Column2':'C2'}
 *        ]
 *    }
 *
 *    customClick = () => {
 *        alert("Custom handler in custom toolbar");
 *    }
 *    render() {
 *        return (
 *           <Grid data={this.state.data}>
 *                <GridToolbar>
 *                    <button
 *                        title="Click"
 *                        className="k-button k-primary"
 *                        onClick={this.customClick}
 *                    >Click
 *                    </button>
 *                </GridToolbar>
 *            </Grid>
 *        );
 *    }
 * }
 * ReactDOM.render(
 *    <App />,
 *    document.querySelector('my-app')
 * );
 * ```
 */
var GridToolbar = /** @class */ (function (_super) {
    GridToolbar_extends(GridToolbar, _super);
    function GridToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    GridToolbar.prototype.render = function () {
        var _a;
        return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-toolbar k-grid-toolbar', (_a = {
                    'k-toolbar-md': !this.props.size
                },
                _a["k-toolbar-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                _a), this.props.className), "aria-label": this.props.ariaLabel, "aria-controls": this.props.ariaControls, role: "toolbar" }, this.props.children));
    };
    /**
     * @hidden
     */
    GridToolbar.displayName = 'KendoReactGridToolbar';
    return GridToolbar;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/StatusBar.js
var StatusBar_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


/**
 * Represents the KendoReact Grid's StatusBar component.
 */
var StatusBar = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a;
    return (index_js_.createElement("div", { className: "k-selection-aggregates k-grid-selection-aggregates" }, data.map(function (item, index) { return (index_js_.createElement("div", { key: index },
        index_js_.createElement("span", { className: "k-selection-aggregates-item-text" },
            item.type,
            ": "),
        index_js_.createElement("span", { className: "k-selection-aggregates-item-value" }, item.formattedValue))); })));
};
StatusBar.displayName = 'KendoReactGridStatusBar';
;
;
/**
 * @hidden
 */
var leafColumns = function (columns) {
    var _a;
    var result = columns.slice();
    for (var i = 0; i < result.length; i++) {
        while (result[i] && ((_a = result[i].children) === null || _a === void 0 ? void 0 : _a.length)) {
            result.splice.apply(result, StatusBar_spreadArray([i, 1], result[i].children, false));
        }
    }
    return result;
};
;
/**
 * Calculates the status data.
 *
 * @param args StatusDataArgs
 * @returns StatusItem[]
 */
var getStatusData = function (args) {
    var dataItems = args.dataItems, target = args.target, startColIndex = args.startColIndex, endColIndex = args.endColIndex, startRowIndex = args.startRowIndex, endRowIndex = args.endRowIndex;
    var columns = leafColumns(target.columns);
    if (args.cell) {
        columns = columns.slice(startColIndex, endColIndex + 1);
    }
    var getters = columns.map(function (c) { return c.field; }).filter(function (f) { return f && typeof f === 'string'; }).map(function (f) { return (0,main_js_.getter)(f); });
    var data = dataItems.slice(startRowIndex, endRowIndex + 1);
    var grouped = { dates: [], numbers: [], booleans: [], others: [] };
    var add = function (value) {
        if (typeof value === 'number') {
            grouped.numbers.push(value);
        }
        else if (typeof value === 'boolean') {
            grouped.booleans.push(value);
        }
        else if (value instanceof Date) {
            grouped.dates.push(value);
        }
        else if (value) {
            grouped.others.push(value);
        }
    };
    data.forEach(function (item) {
        getters.forEach(function (fieldGetter) {
            add(fieldGetter(item));
        });
    });
    var datesAsNumbers = grouped.dates.map(function (d) { return d.getTime(); });
    var isTrueCount = grouped.booleans.filter(function (bool) { return bool; }).length;
    var isFalseCount = grouped.booleans.filter(function (bool) { return !bool; }).length;
    var sum = grouped.numbers.length ? grouped.numbers.reduce(function (acc, curr) { return acc += curr; }, 0) : undefined;
    var aggregates = {
        sum: sum,
        average: typeof sum === 'number' ? sum / grouped.numbers.length : undefined,
        min: grouped.numbers.length ? Math.min.apply(Math, grouped.numbers) : undefined,
        max: grouped.numbers.length ? Math.max.apply(Math, grouped.numbers) : undefined,
        count: grouped.numbers.length + grouped.booleans.length + grouped.dates.length + grouped.others.length,
        isTrue: isTrueCount > 0 ? isTrueCount : undefined,
        isFalse: isFalseCount > 0 ? isFalseCount : undefined,
        earliest: grouped.dates.length ? new Date(Math.min.apply(Math, datesAsNumbers)) : undefined,
        latest: grouped.dates.length ? new Date(Math.max.apply(Math, datesAsNumbers)) : undefined
    };
    var format = function (value, key) {
        if ((key === 'sum' || key === 'average') && typeof value === 'number') {
            return value.toFixed(2);
        }
        else if ((key === 'earliest' || key === 'latest') && value instanceof Date) {
            return value.toLocaleDateString();
        }
        else {
            return String(value);
        }
    };
    var result = [];
    Object.keys(aggregates).forEach(function (a) {
        var type = a;
        var value = aggregates[type];
        if (value !== undefined) {
            result.push({ type: type, value: value, formattedValue: format(value, type) });
        }
    });
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-react-grid@5.19.0_ff08aa489800737c283b98b285d0fe51/node_modules/@progress/kendo-react-grid/dist/es/main.js



































/***/ })

}]);