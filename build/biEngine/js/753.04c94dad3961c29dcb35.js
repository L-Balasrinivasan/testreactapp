"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[753],{

/***/ 9422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tk: () => (/* binding */ ifElse),
/* harmony export */   Zz: () => (/* binding */ compose),
/* harmony export */   dY: () => (/* binding */ constant)
/* harmony export */ });
/* unused harmony export identity */
/**
 * @hidden
 */
var ifElse = function (predicate, right, left) { return function (value) { return predicate(value) ? right(value) : left(value); }; };
/**
 * @hidden
 * Performs the right-to-left function composition. Functions should have a unary.
 */
var compose = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (data) { return args.reduceRight(function (acc, curr) { return curr(acc); }, data); };
};
/**
 * @hidden
 */
var constant = function (x) { return function () { return x; }; };
/**
 * @hidden
 */
var identity = function (x) { return x; };


/***/ },

/***/ 9891
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ normalizeFilters)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90148);
/* harmony import */ var _filter_descriptor_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78365);


var operatorMap = function (key) { return ({
    "!=": "neq",
    "<": "lt",
    "<=": "lte",
    "==": "eq",
    ">": "gt",
    ">=": "gte",
    equal: "eq",
    equals: "eq",
    equalto: "eq",
    ge: "gte",
    greater: "gt",
    greaterthan: "gt",
    greaterthanequal: "gte",
    isempty: "isempty",
    isequalto: "eq",
    isgreaterthan: "gt",
    isgreaterthanorequalto: "gte",
    islessthan: "lt",
    islessthanorequalto: "lte",
    isnotempty: "isnotempty",
    isnotequalto: "neq",
    isnull: "isnull",
    le: "lte",
    less: "lt",
    lessthan: "lt",
    lessthanequal: "lte",
    ne: "neq",
    notequal: "neq",
    notequals: "neq",
    notequalto: "neq",
    notsubstringof: "doesnotcontain"
}[key.toLowerCase()] || key); };
var normalizeOperator = function (descriptor) {
    if (descriptor.filters) {
        descriptor.filters = descriptor.filters.map(function (filter) {
            var result = Object.assign({}, filter);
            if (!(0,_filter_descriptor_interface__WEBPACK_IMPORTED_MODULE_1__/* .isCompositeFilterDescriptor */ .H)(filter) && (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .Kg)(filter.operator)) {
                result.operator = operatorMap(filter.operator);
            }
            if ((0,_filter_descriptor_interface__WEBPACK_IMPORTED_MODULE_1__/* .isCompositeFilterDescriptor */ .H)(filter)) {
                normalizeOperator(result);
            }
            return result;
        });
    }
};
var normalizeDescriptor = function (descriptor) {
    if (!(0,_filter_descriptor_interface__WEBPACK_IMPORTED_MODULE_1__/* .isCompositeFilterDescriptor */ .H)(descriptor)) {
        return {
            filters: (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(descriptor) ? descriptor : [descriptor],
            logic: "and"
        };
    }
    return Object.assign({}, descriptor);
};
// tslint:disable:max-line-length
/**
 * Converts a [FilterDescriptor]({% slug api_kendo-data-query_filterdescriptor %}) into a [CompositeFilterDescriptor]({% slug api_kendo-data-query_compositefilterdescriptor %}). If a `CompositeFilterDescriptor` is passed, no modifications will be made.
 *
 * @param {CompositeFilterDescriptor | FilterDescriptor} descriptor - The descriptor that will be normalized.
 * @returns {CompositeFilterDescriptor} - The normalized descriptor.
 */
// tslint:enable:max-line-length
var normalizeFilters = function (descriptor) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isPresent */ .Wo)(descriptor)) {
        descriptor = normalizeDescriptor(descriptor);
        normalizeOperator(descriptor);
    }
    return descriptor;
};


/***/ },

/***/ 55334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aN: () => (/* binding */ __spreadArrays)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ },

/***/ 78365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ isCompositeFilterDescriptor)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90148);

// tslint:enable:max-line-length
/**
 * @hidden
 * Type guard for `CompositeFilterDescriptor`.
 */
var isCompositeFilterDescriptor = function (source) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isPresent */ .Wo)(source.filters);
};


/***/ },

/***/ 80753
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WP: () => (/* reexport */ filterBy),
  HG: () => (/* reexport */ filter_descriptor_interface/* isCompositeFilterDescriptor */.H),
  My: () => (/* reexport */ orderBy),
  eh: () => (/* reexport */ process)
});

// UNUSED EXPORTS: FilterOperator, aggregateBy, compileFilter, composeSortDescriptors, distinct, getter, groupBy, normalizeFilters, normalizeGroups, toDataSourceRequest, toDataSourceRequestString, toODataString, translateAggregateResults, translateDataSourceResultGroups

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filtering/filter-descriptor.interface.js
var filter_descriptor_interface = __webpack_require__(78365);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/funcs.js
var funcs = __webpack_require__(9422);
;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/odata.operators.js




var serializeSort = function (orderby) {
    var str = orderby
        .filter(function (sort) { return isPresent(sort.dir); })
        .map(function (sort) {
        var order = sort.field.replace(/\./g, "/");
        return sort.dir === "desc" ? order + " desc" : order;
    }).join(",");
    return str ? "$orderby=" + str : str;
};
var emptyString = (0,funcs/* constant */.dY)('');
var concat = function (a) { return function (b) { return a + b; }; };
var serializeKey = function (strings, val) { return ifElse(isPresent, concat(strings[0]), emptyString)(val); };
var rules = function (settings, state) { return function (key) { return ({
    "filter": serializeFilter(state.filter || {}, settings),
    "skip": serializeKey(templateObject_1 || (templateObject_1 = __makeTemplateObject(["$skip=", ""], ["$skip=", ""])), state.skip),
    "sort": serializeSort(state.sort || []),
    "take": serializeKey(templateObject_2 || (templateObject_2 = __makeTemplateObject(["$top=", ""], ["$top=", ""])), state.take)
}[key]); }; };
// tslint:enable:max-line-length
/**
 * Converts a [State]({% slug api_kendo-data-query_state %}) into an OData v4 compatible string.
 *
 * @param {State} state - The state that will be serialized.
 * @param {ODataSettings} settings - The settings that are used during the serialization.
 * @returns {string} - The serialized state.
 */
var toODataString = function (state, settings) {
    if (settings === void 0) { settings = {}; }
    return (Object.keys(state)
        .map(rules(settings, state))
        .filter(isNotNullOrEmptyString)
        .join('&'));
};
var templateObject_1, templateObject_2;

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/utils.js
var utils = __webpack_require__(90148);
;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/accessor.js

var getterCache = {};
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
// tslint:disable-next-line:no-string-literal
getterCache['undefined'] = function (obj) { return obj; };
/**
 * @hidden
 */
var accessor_getter = function (field, safe) {
    var key = field + safe;
    if (getterCache[key]) {
        return getterCache[key];
    }
    var fields = [];
    field.replace(FIELD_REGEX, function (_, index, indexAccessor, field) {
        fields.push((0,utils/* isPresent */.Wo)(index) ? index : (indexAccessor || field));
        return undefined;
    });
    getterCache[key] = function (obj) {
        var result = obj;
        for (var idx = 0; idx < fields.length; idx++) {
            result = result[fields[idx]];
            if (!(0,utils/* isPresent */.Wo)(result) && safe) {
                return result;
            }
        }
        return result;
    };
    return getterCache[key];
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filter-serialization.common.js


/**
 * @hidden
 * Creates a single arity function which wraps the value based on the provided predicate.
 * @example
 * ```
 * wrapIf(() => ignoreCase) `tolower(${field})`
 * //ignoreCase=true -> tolower(${field})`
 * //ignoreCase=false -> ${field}`
 * ```
 */
var wrapIf = function (predicate) { return function (str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return predicate() ? "" + str[0] + args[0] + str[1] : args[0];
}; };
/**
 * @hidden
 */
var toUTC = function (date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};
/**
 * @hidden
 */
var filter_serialization_common_quote = function (_a) {
    var field = _a.field, value = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
    return ({
        value: "'" + value.replace(/'/g, "''") + "'",
        field: field,
        ignoreCase: ignoreCase,
        operator: operator
    });
};
/**
 * @hidden
 */
var filter_serialization_common_encodeValue = function (_a) {
    var field = _a.field, value = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
    return ({
        value: "" + encodeURIComponent(value),
        field: field,
        ignoreCase: ignoreCase,
        operator: operator
    });
};
/**
 * @hidden
 */
var toLower = function (_a) {
    var field = _a.field, value = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
    return ({
        field: wrapIf(function () { return ignoreCase; })(filter_serialization_common_templateObject_1 || (filter_serialization_common_templateObject_1 = __makeTemplateObject(["tolower(", ")"], ["tolower(", ")"])), field),
        value: value,
        ignoreCase: ignoreCase,
        operator: operator
    });
};
/**
 * @hidden
 */
var normalizeField = function (_a) {
    var field = _a.field, value = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
    return ({
        value: value,
        field: field.replace(/\./g, "/"),
        ignoreCase: ignoreCase,
        operator: operator
    });
};
/**
 * @hidden
 */
var filter_serialization_common_isStringValue = function (x) { return isString(x.value); };
/**
 * @hidden
 */
var isDateValue = function (x) { return (0,utils/* isDate */.$P)(x.value); };
/**
 * @hidden
 */
var filter_serialization_common_serializeFilters = function (map, join) { return function (filter) {
    var brackets = wrapIf(function () { return filter.filters.length > 1; });
    return brackets(filter_serialization_common_templateObject_2 || (filter_serialization_common_templateObject_2 = __makeTemplateObject(["(", ")"], ["(",
        ")"])), filter.filters
        .map(map)
        .join(join(filter)));
}; };
var filter_serialization_common_templateObject_1, filter_serialization_common_templateObject_2;

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/mvc/operators.js






var toQueryString = function (values) { return values.reduce(function (acc, _a) {
    var key = _a[0], value = _a[1];
    return __spreadArrays(acc, [key + "=" + value]);
}, []); };
var toObject = function (values) { return values.reduce(function (acc, _a) {
    var _b;
    var key = _a[0], value = _a[1];
    return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
}, {}); };
var pairwise = function (key) { return function (value) { return [key, value]; }; };
var empty = function () { return null; };
var isNotEmptyArray = function (value) { return (0,utils/* isPresent */.Wo)(value) && (0,utils/* isArray */.cy)(value) && value.length > 0; };
var has = function (accessor) { return function (value) { return (0,utils/* isPresent */.Wo)(accessor(value)); }; };
var isNotEmpty = function (accessor) { return function (value) { return isNotEmptyArray(accessor(value)); }; };
var runOrEmpty = function (predicate, fn) { return (0,funcs/* ifElse */.Tk)(predicate, fn, empty); };
var calcPage = function (_a) {
    var skip = _a.skip, take = _a.take;
    return Math.floor((skip || 0) / take) + 1;
};
var formatDescriptors = function (accessor, formatter) { return function (state) { return (accessor(state).map(formatter).join("~")); }; };
var removeAfter = function (what) { return function (str) { return str.slice(0, str.indexOf(what)); }; };
var replace = function (patterns) {
    return funcs/* compose */.Zz.apply(void 0, patterns.map(function (_a) {
        var left = _a[0], right = _a[1];
        return function (s) { return s.replace(new RegExp(left, "g"), right); };
    }));
};
var sanitizeDateLiterals = replace([["\"", ""], [":", "-"]]);
var removeAfterDot = removeAfter(".");
var directionFormatter = function (_a) {
    var field = _a.field, _b = _a.dir, dir = _b === void 0 ? "asc" : _b;
    return field + "-" + dir;
};
var aggregateFormatter = function (_a) {
    var field = _a.field, aggregate = _a.aggregate;
    return field + "-" + aggregate;
};
var take = accessor_getter("take");
var aggregates = accessor_getter("aggregates");
var skip = accessor_getter("skip");
var group = accessor_getter("group");
var sort = accessor_getter("sort", true);
var formatSort = formatDescriptors(sort, directionFormatter);
var formatGroup = formatDescriptors(group, directionFormatter);
var formatAggregates = formatDescriptors(aggregates, aggregateFormatter);
var prefixDateValue = function (value) { return "datetime'" + value + "'"; };
var formatDateValue = (0,funcs/* compose */.Zz)(prefixDateValue, removeAfterDot, sanitizeDateLiterals, JSON.stringify, toUTC);
var formatDate = function (_a) {
    var field = _a.field, value = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
    return ({
        value: formatDateValue(value),
        field: field,
        ignoreCase: ignoreCase,
        operator: operator
    });
};
var normalizeSort = function (state) { return Object.assign({}, state, {
    sort: (sort(state) || []).filter(function (_a) {
        var dir = _a.dir;
        return (0,utils/* isNotNullOrEmptyString */.yj)(dir);
    })
}); };
var transformSkip = (0,funcs/* compose */.Zz)(pairwise('page'), calcPage);
var transformTake = (0,funcs/* compose */.Zz)(pairwise('pageSize'), take);
var transformGroup = (0,funcs/* compose */.Zz)(pairwise('group'), formatGroup);
var transformSort = (0,funcs/* compose */.Zz)(pairwise('sort'), formatSort);
var transformAggregates = (0,funcs/* compose */.Zz)(pairwise('aggregate'), formatAggregates);
var serializePage = runOrEmpty(has(skip), transformSkip);
var serializePageSize = runOrEmpty(has(take), transformTake);
var serializeGroup = runOrEmpty(isNotEmpty(group), transformGroup);
var serializeAggregates = runOrEmpty(has(aggregates), transformAggregates);
var operators_serializeSort = (0,funcs/* compose */.Zz)(runOrEmpty(isNotEmpty(sort), transformSort), normalizeSort);
var hasField = function (_a) {
    var field = _a.field;
    return isNotNullOrEmptyString(field);
};
var filterFormatter = function (_a) {
    var field = _a.field, operator = _a.operator, value = _a.value;
    return field + "~" + operator + "~" + value;
};
var dateFormatter = (0,funcs/* ifElse */.Tk)(isDateValue, (0,funcs/* compose */.Zz)(filterFormatter, formatDate), filterFormatter);
var typedFormatter = function (encode) { return runOrEmpty(hasField, ifElse(isStringValue, compose(filterFormatter, quote, encode ? encodeValue : identity), dateFormatter)); };
var join = function (_a) {
    var logic = _a.logic;
    return "~" + logic + "~";
};
var serialize = function (encode) { return serializeFilters(function (filter) { return ifElse(isCompositeFilterDescriptor, serialize(encode), typedFormatter(encode))(filter); }, join); };
var operators_serializeFilter = function (_a, encode) {
    var filter = _a.filter;
    if (filter && filter.filters) {
        var filters = serialize(encode)(filter);
        if (filters.length) {
            return ['filter', filters];
        }
    }
    return null;
};
var operators_rules = function (state, encode) {
    if (encode === void 0) { encode = true; }
    return function (key) { return ({
        "aggregates": serializeAggregates(state),
        "filter": operators_serializeFilter(state, encode),
        "group": serializeGroup(state),
        "skip": serializePage(state),
        "sort": operators_serializeSort(state),
        "take": serializePageSize(state)
    }[key]); };
};
/**
 * Converts a [DataSourceRequestState]({% slug api_kendo-data-query_datasourcerequeststate %}) into a string
 * that is comparable with the `DataSourceRequest` format in UI for ASP.NET MVC.
 *
 * @param {DataRequestState} state - The state that will be serialized.
 * @returns {string} - The serialized state.
 *
 * @example
 * {% platform_content angular %}
 * ```ts
 *  import {
 *      toDataSourceRequestString,
 *      translateDataSourceResultGroups,
 *      translateAggregateResults
 * } from '@progress/kendo-data-query';
 *
 * export class Service {
 *  private BASE_URL: string = '...';
 *
 *  constructor(private http: Http) { }
 *
 *  // Omitted for brevity...
 *
 *  private fetch(state: DataSourceRequestState): Observable<DataResult> {
 *   const queryStr = `${toDataSourceRequestString(state)}`; //serialize the state
 *   const hasGroups = state.group && state.group.length;
 *
 *   return this.http
 *       .get(`${this.BASE_URL}?${queryStr}`) //send the state to the server
 *       .map(response => response.json())
 *       .map(({Data, Total, AggregateResults}) => // process the response
 *           (<GridDataResult>{
 *               //if there are groups convert them to compatible format
 *               data: hasGroups ? translateDataSourceResultGroups(Data) : Data,
 *               total: Total,
 *               // convert the aggregates if such exists
 *               aggregateResult: translateAggregateResults(AggregateResults)
 *           })
 *       );
 *  }
 * }
 * ```
 * {% endplatform_content %}
 *
 * {% platform_content react %}
 * ```jsx
 * import React from 'react';
 * import { toDataSourceRequestString, translateDataSourceResultGroups } from '@progress/kendo-data-query';
 *
 * export function withState(WrappedGrid) {
 *     return class StatefullGrid extends React.Component {
 *         constructor(props) {
 *             super(props);
 *             this.state = { dataState: { skip: 0, take: 20 } };
 *         }
 *
 *         render() {
 *             return (
 *                 <WrappedGrid
 *                     filterable={true}
 *                     sortable={true}
 *                     pageable={{ pageSizes: true }}
 *                     {...this.props}
 *                     total={this.state.total}
 *                     data={this.state.data}
 *                     skip={this.state.dataState.skip}
 *                     pageSize={this.state.dataState.take}
 *                     filter={this.state.dataState.filter}
 *                     sort={this.state.dataState.sort}
 *                     dataStateChange={this.dataStateChange}
 *                 />
 *             );
 *         }
 *
 *         componentDidMount() {
 *             this.fetchData(this.state.dataState);
 *         }
 *
 *         dataStateChange = (changeEvent) => {
 *             this.setState({ dataState: changeEvent.data });
 *             this.fetchData(changeEvent.data);
 *         }
 *
 *         fetchData(dataState) {
 *             const queryStr = `${toDataSourceRequestString(dataState)}`; // Serialize the state
 *             const hasGroups = dataState.group && dataState.group.length;
 *
 *             const base_url = 'api/Products';
 *             const init = { method: 'GET', accept: 'application/json', headers: {} };
 *
 *             fetch(`${base_url}?${queryStr}`, init)
 *                 .then(response => response.json())
 *                 .then(({ data, total }) => {
 *                     this.setState({
 *                         data: hasGroups ? translateDataSourceResultGroups(data) : data,
 *                         total,
 *                         dataState
 *                     });
 *                 });
 *         }
 *     }
 * }
 * ```
 * {% endplatform_content %}
 */
var toDataSourceRequestString = function (state) { return (toQueryString(Object.keys(state)
    .map(operators_rules(state))
    .filter(isPresent)).join('&')); };
/**
 * Converts a [DataSourceRequestState]({% slug api_kendo-data-query_datasourcerequeststate %}) into an object
 * that is compatible with the `DataSourceRequest` format in UI for ASP.NET MVC.
 *
 * @param {DataRequestState} state - The state that will be serialized.
 * @returns {any} - The serialized state.
 */
var toDataSourceRequest = function (state) { return (toObject(Object.keys(state)
    .map(operators_rules(state, false))
    .filter(isPresent))); };

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/mvc/deserialization.js


// tslint:enable:max-line-length
var set = function (field, target, value) {
    target[field] = value;
    return target;
};
var toCamelCase = function (str) { return str.replace(/(^[A-Z])/g, function (_, g1) { return g1.toLowerCase(); }); };
var prop = function (fieldName) { return function (obj) {
    var value = obj[fieldName];
    if ((0,utils/* isPresent */.Wo)(value)) {
        return value;
    }
    return obj[toCamelCase(fieldName)];
}; };
var member = prop("Member");
var aggregateMethodName = prop("AggregateMethodName");
var value = prop("Value");
var convert = function (mapper) { return function (values) { return Object.keys(values).reduce(mapper.bind(null, values), {}); }; };
var translateAggregate = convert(function (source, acc, field) { return set(field.toLowerCase(), acc, source[field]); });
var translateAggregates = convert(function (source, acc, field) { return set(field, acc, translateAggregate(source[field])); });
var valueOrDefault = function (value, defaultValue) { return (0,utils/* isPresent */.Wo)(value) ? value : defaultValue; };
var normalizeGroup = function (group) { return ({
    aggregates: group.Aggregates || group.aggregates,
    field: group.Member || group.member || group.field,
    hasSubgroups: group.HasSubgroups || group.hasSubgroups || false,
    items: group.Items || group.items,
    value: valueOrDefault(group.Key, valueOrDefault(group.key, group.value))
}); };
var translateGroup = (0,funcs/* compose */.Zz)(function (_a) {
    var field = _a.field, hasSubgroups = _a.hasSubgroups, value = _a.value, aggregates = _a.aggregates, items = _a.items;
    return ({
        aggregates: translateAggregates(aggregates),
        field: field,
        items: hasSubgroups ? items.map(translateGroup) : items,
        value: value
    });
}, normalizeGroup);
// tslint:disable:max-line-length
/**
 * Converts the grouped result, which is returned into the `Data` field of the UI for ASP.NET MVC `ToDataSourceResult` method, to a comparable format.
 * @param data - The value of the `Data` field of the response.
 * @returns {GroupResult[]} - The converted result.
 */
var translateDataSourceResultGroups = function (data) { return data.map(translateGroup); };
/**
 * Converts the `AggregateResults` field content, which is returned by the UI for ASP.NET MVC `ToDataSourceResult` method, to a comparable format.
 * @param data - The value of the `AggregateResults` field of the response.
 * @returns {AggregateResult} - The converted result.
 */
// tslint:enable:max-line-length
var translateAggregateResults = function (data) { return ((data || []).reduce(function (acc, x) { return set(member(x), acc, set(aggregateMethodName(x).toLowerCase(), acc[member(x)] || {}, value(x))); }, {})); };

// EXTERNAL MODULE: ../node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js
if (8792 == __webpack_require__.j) {
var tslib_es6 = __webpack_require__(55334);
}
;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/sorting/sort-array.operator.js


var compare = function (a, b) {
    if ((0,utils/* isBlank */.z3)(a)) {
        return a === b ? 0 : -1;
    }
    if ((0,utils/* isBlank */.z3)(b)) {
        return 1;
    }
    if (a.localeCompare) {
        return a.localeCompare(b);
    }
    return a > b ? 1 : (a < b ? -1 : 0);
};
var compareDesc = function (a, b) { return compare(b, a); };
var descriptorAsFunc = function (descriptor) {
    if (typeof descriptor.compare === 'function') {
        return descriptor.compare;
    }
    var prop = accessor_getter(descriptor.field, true);
    return function (a, b) { return (descriptor.dir === 'asc' ? compare : compareDesc)(prop(a), prop(b)); };
};
var initial = function (_a, _b) { return 0; };
// tslint:disable:max-line-length
/**
 * Converts the `SortDescriptors` into a [Comparer]({% slug api_kendo-data-query_comparer %}) function that can be used through `Array.sort`. If multiple descriptors are provided, sorting is applied in a right-to-left order.
 * @param {SortDescriptor[]} descriptors - The descriptors which will be converted.
 * @returns {Comparer} - The produced function.
 *
 * @example
 * ```ts
 * import { composeSortDescriptors } from '@progress/kendo-data-query';
 *
 * const data = [{ name: "Pork" }, { name: "Pepper" }, { name: "Beef" } ];
 * const comparer = composeSortDescriptors([{ field: "name", dir: "asc" }]);
 * const result = data.sort(comparer);
 * // output: [{ name: "Beef" }, { name: "Pepper" }, { name: "Pork" }];
 * ```
 */
// tslint:enable:max-line-length
var composeSortDescriptors = function (descriptors) { return (descriptors
    .filter(function (x) { return (0,utils/* isPresent */.Wo)(x.dir) || (0,utils/* isPresent */.Wo)(x.compare); })
    .map(function (descriptor) { return descriptorAsFunc(descriptor); })
    .reduce(function (acc, curr) { return function (a, b) { return acc(a, b) || curr(a, b); }; }, initial)); };

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/transducers.js


var valueToString = function (value) {
    value = (0,utils/* isPresent */.Wo)(value) && value.getTime ? value.getTime() : value;
    return value + "";
};
/**
 * @hidden
 */
var groupCombinator = function (field) {
    var prop = accessor_getter(field, true);
    var position = 0;
    return function (agg, value) {
        agg[field] = agg[field] || {};
        var groupValue = prop(value);
        var key = valueToString(groupValue);
        var values = agg[field][key] || { __position: position++, aggregates: {}, items: [], value: groupValue };
        values.items.push(value);
        agg[field][key] = values;
        return agg;
    };
};
/**
 * @hidden
 */
var expandAggregates = function (result) {
    if (result === void 0) { result = {}; }
    Object.keys(result).forEach(function (field) {
        var aggregates = result[field];
        Object.keys(aggregates).forEach(function (aggregate) {
            aggregates[aggregate] = aggregates[aggregate].result();
        });
    });
    return result;
};
var aggregatesFuncs = function (name) { return ({
    average: function () {
        var value = 0;
        var count = 0;
        return {
            calc: function (curr) {
                if ((0,utils/* isNumeric */.kf)(curr)) {
                    value += curr;
                    count++;
                }
                else {
                    value = curr;
                }
            },
            result: function () { return (0,utils/* isNumeric */.kf)(value) ? value / count : value; }
        };
    },
    count: function () {
        var state = 0;
        return {
            calc: function () { return state++; },
            result: function () { return state; }
        };
    },
    max: function () {
        var state = Number.NEGATIVE_INFINITY;
        return {
            calc: function (value) {
                state = (0,utils/* isNumeric */.kf)(state) || (0,utils/* isDate */.$P)(state) ? state : value;
                if (state < value && ((0,utils/* isNumeric */.kf)(value) || (0,utils/* isDate */.$P)(value))) {
                    state = value;
                }
            },
            result: function () { return state; }
        };
    },
    min: function () {
        var state = Number.POSITIVE_INFINITY;
        return {
            calc: function (value) {
                state = (0,utils/* isNumeric */.kf)(state) || (0,utils/* isDate */.$P)(state) ? state : value;
                if (state > value && ((0,utils/* isNumeric */.kf)(value) || (0,utils/* isDate */.$P)(value))) {
                    state = value;
                }
            },
            result: function () { return state; }
        };
    },
    sum: function () {
        var state = 0;
        return {
            calc: function (value) {
                value = (0,utils/* isPresent */.Wo)(value) ? value : 0;
                state += value;
            },
            result: function () { return state; }
        };
    }
}[name]()); };
/**
 * @hidden
 */
var aggregatesCombinator = function (descriptors) {
    var functions = descriptors.map(function (descriptor) {
        var fieldAccessor = accessor_getter(descriptor.field, true);
        var aggregateName = (descriptor.aggregate || "").toLowerCase();
        var aggregateAccessor = accessor_getter(aggregateName, true);
        return function (state, value) {
            var fieldAggregates = state[descriptor.field] || {};
            var aggregateFunction = aggregateAccessor(fieldAggregates)
                || aggregatesFuncs(aggregateName);
            aggregateFunction.calc(fieldAccessor(value));
            fieldAggregates[descriptor.aggregate] = aggregateFunction;
            state[descriptor.field] = fieldAggregates;
            return state;
        };
    });
    return function (state, value) { return functions.reduce(function (agg, calc) { return calc(agg, value); }, state); };
};
/**
 * @hidden
 * Adds the value to the `arr` and produces a new array.
 *
 * > The original array will be modified.
 */
var transducers_concat = function (arr, value) {
    arr.push(value);
    return arr;
};
/**
 * @hidden
 * Returns a reducer that will apply the specified transformation to the value.
 */
var map = function (transform) { return (function (reduce) { return (function (acc, curr, index) { return reduce(acc, transform(curr, index)); }); }); };
/**
 * @hidden
 * Returns a reducer that will filter out items which do not match the `Predicate`.
 */
var filter = function (predicate) { return (function (reduce) { return (function (acc, curr) { return predicate(curr) ? reduce(acc, curr) : acc; }); }); };
/**
 * @hidden
 */
var isTransformerResult = function (source) {
    return (0,utils/* isPresent */.Wo)(source.__value);
};
var reduced = function (x) {
    if (isTransformerResult(x)) {
        return x;
    }
    return {
        __value: x,
        reduced: true
    };
};
/**
 * @hidden
 * Returns a reducer that will take the specified number of items.
 */
var transducers_take = function (count) { return (function (reduce) { return (function (acc, curr) { return count-- > 0 ? reduce(acc, curr) : reduced(acc); }); }); };
/**
 * @hidden
 * Returns a reducer that will take the specified number of items.
 */
var takeWhile = function (predicate) { return (function (reduce) { return (function (acc, curr) { return predicate(curr) ? reduce(acc, curr) : reduced(acc); }); }); };
/**
 * @hidden
 * Returns a reducer that will skip the specified number of items.
 */
var transducers_skip = function (count) { return (function (reduce) { return (function (acc, curr) { return count-- <= 0 ? reduce(acc, curr) : acc; }); }); };
/**
 * @hidden
 * Transforms the data by applying the supplied transformer.
 */
var exec = function (transform, initialValue, data) {
    var result = initialValue;
    for (var idx = 0, length_1 = data.length; idx < length_1; idx++) {
        result = transform(result, data[idx], idx);
        if (isTransformerResult(result)) {
            result = result.__value;
            break;
        }
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/grouping/aggregate.operators.js

var aggregate_operators_identity = map(function (x) { return x; });
// tslint:disable:max-line-length
/**
 * Applies the specified [AggregateDescriptors]({% slug api_kendo-data-query_aggregatedescriptor %}) to the data. Returns an [AggregateResult]({% slug api_kendo-data-query_aggregateresult %}) instance.
 *
 * @example
 * ```ts
 * const data = [
 *    { unitPrice: 23, unitsInStock: 21 },
 *    { unitPrice: 10, unitsInStock: 12 },
 *    { unitPrice: 20, unitsInStock: 33 }
 * ];
 *
 * const result = aggregateBy(data, [
 *   { aggregate: "sum", field: "unitPrice" },
 *   { aggregate: "sum", field: "unitsInStock" }
 * ]);
 *
 * //output:
 * // {
 * //     "unitPrice": { "sum": 53 },
 * //     "unitsInStock": { "sum": 66 }
 * // }
 * ```
 * @param {T[]} data - The data on which the calculation will be executed.
 * @param {AggregateDescriptor[]} descriptors - The aggregate operations that will be executed.
 * @param {any} transformers - For internal use.
 * @returns {AggregateResult} - The aggregated result.
 * For more information, refer to the [aggregateresult](slug:api_kendo-data-query_aggregateresult) configuration.
 */
// tslint:enable:max-line-length
var aggregateBy = function (data, descriptors, transformers) {
    if (descriptors === void 0) { descriptors = []; }
    if (transformers === void 0) { transformers = aggregate_operators_identity; }
    var initialValue = {};
    if (!descriptors.length) {
        return initialValue;
    }
    var result = exec(transformers(aggregatesCombinator(descriptors)), initialValue, data);
    return expandAggregates(result);
};

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filtering/filter.operators.js
var filter_operators = __webpack_require__(9891);
;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filtering/filter-no-eval.js



var logic = {
    "or": {
        concat: function (acc, fn) { return function (a) { return acc(a) || fn(a); }; },
        identity: function () { return false; }
    },
    "and": {
        concat: function (acc, fn) { return function (a) { return acc(a) && fn(a); }; },
        identity: function () { return true; }
    }
};
var operatorsMap = {
    contains: function (a, b) { return (a || "").indexOf(b) >= 0; },
    doesnotcontain: function (a, b) { return (a || "").indexOf(b) === -1; },
    doesnotendwith: function (a, b) { return (a || "").indexOf(b, (a || "").length - (b || "").length) < 0; },
    doesnotstartwith: function (a, b) { return (a || "").lastIndexOf(b, 0) === -1; },
    endswith: function (a, b) { return (a || "").indexOf(b, (a || "").length - (b || "").length) >= 0; },
    eq: function (a, b) { return a === b; },
    gt: function (a, b) { return a > b; },
    gte: function (a, b) { return a >= b; },
    isempty: function (a) { return a === ''; },
    isnotempty: function (a) { return a !== ''; },
    isnotnull: function (a) { return (0,utils/* isPresent */.Wo)(a); },
    isnull: function (a) { return (0,utils/* isBlank */.z3)(a); },
    lt: function (a, b) { return a < b; },
    lte: function (a, b) { return a <= b; },
    neq: function (a, b) { return a != b; },
    startswith: function (a, b) { return (a || "").lastIndexOf(b, 0) === 0; }
};
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var convertValue = function (value, ignoreCase) {
    if (value != null && (0,utils/* isString */.Kg)(value)) {
        var date = dateRegExp.exec(value);
        if (date) {
            return new Date(+date[1]).getTime();
        }
        else if (ignoreCase) {
            return value.toLowerCase();
        }
    }
    else if (value != null && (0,utils/* isDate */.$P)(value)) {
        return value.getTime();
    }
    return value;
};
var typedGetter = function (prop, value, ignoreCase) {
    if (!(0,utils/* isPresent */.Wo)(value)) {
        return prop;
    }
    var acc = prop;
    if ((0,utils/* isString */.Kg)(value)) {
        var date = dateRegExp.exec(value);
        if (date) {
            value = new Date(+date[1]);
        }
        else {
            acc = function (a) {
                var x = prop(a);
                if (typeof x === 'string' && ignoreCase) {
                    return x.toLowerCase();
                }
                else {
                    return (0,utils/* isNumeric */.kf)(x) ? x + "" : x;
                }
            };
        }
    }
    if ((0,utils/* isDate */.$P)(value)) {
        return function (a) {
            var x = acc(a);
            return (0,utils/* isDate */.$P)(x) ? x.getTime() : x;
        };
    }
    return acc;
};
var transformFilter = function (_a) {
    var field = _a.field, ignoreCase = _a.ignoreCase, value = _a.value, operator = _a.operator;
    field = !(0,utils/* isPresent */.Wo)(field) ? function (a) { return a; } : field;
    ignoreCase = (0,utils/* isPresent */.Wo)(ignoreCase) ? ignoreCase : true;
    var itemProp = typedGetter((0,utils/* isFunction */.Tn)(field) ? field : accessor_getter(field, true), value, ignoreCase);
    value = convertValue(value, ignoreCase);
    var op = (0,utils/* isFunction */.Tn)(operator) ? operator : operatorsMap[operator];
    return function (a) { return op(itemProp(a), value, ignoreCase); };
};
/**
 * @hidden
 */
var transformCompositeFilter = function (filter) {
    var combiner = logic[filter.logic];
    return filter.filters
        .filter(utils/* isPresent */.Wo)
        .map(function (x) { return (0,filter_descriptor_interface/* isCompositeFilterDescriptor */.H)(x) ? transformCompositeFilter(x) : transformFilter(x); })
        .reduce(combiner.concat, combiner.identity);
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filtering/filter-expression.factory.js




// tslint:disable:max-line-length
/**
 * Creates a [Predicate]({% slug api_kendo-data-query_predicate %}) function for the specified [CompositeFilterDescriptor]({% slug api_kendo-data-query_compositefilterdescriptor %}).
 *
 * @param {CompositeFilterDescriptor} descriptor - The descriptor for which the predicate is created.
 * @returns {Predicate} - The created function instance.
 *
 * @example
 * ```ts
 * import { compileFilter } from '@progress/kendo-data-query';
 *
 * const data = [{ name: "Pork" }, { name: "Pepper" }, { name: "Beef" } ];
 * const predicate = compileFilter({ logic: "and", filters: [{ field: "name", operator: "startswith", value: "P" }] });
 * const result = data.filter(predicate);
 *
 * ```
 */
// tslint:enable:max-line-length
var compileFilter = function (descriptor) {
    if (!descriptor || descriptor.filters.length === 0) {
        return function () { return true; };
    }
    return transformCompositeFilter(descriptor);
};
// tslint:disable:max-line-length
/**
 * Filters the provided array according to the specified [CompositeFilterDescriptor]({% slug api_kendo-data-query_compositefilterdescriptor %}).
 *
 * @param {T[]} data - The data that will be filtered.
 * @param {(CompositeFilterDescriptor | FilterDescriptor)} descriptor - The filter criteria that will be applied.
 * @returns {T[]} - The filtered data.
 *
 * @example
 * ```ts
 * import { filterBy } from '@progress/kendo-data-query';
 *
 * const data = [
 *  { name: "Pork", category: "Food", subcategory: "Meat" },
 *  { name: "Pepper", category: "Food", subcategory: "Vegetables" },
 *  { name: "Beef", category: "Food", subcategory: "Meat" }
 * ];
 *
 * const result = filterBy(data, {
 *     logic: 'and',
 *     filters: [
 *           { field: "name", operator: "startswith", value: "p", ignoreCase: true },
 *           { field: "subcategory", operator: "eq", value: "Meat" },
 *     ]
 * });
 *
 * // output:
 * // [{ "name": "Pork", "category": "Food", "subcategory": "Meat" }]
 * ```
 */
// tslint:enable:max-line-length
var filterBy = function (data, descriptor) {
    if (!(0,utils/* isPresent */.Wo)(descriptor) || ((0,filter_descriptor_interface/* isCompositeFilterDescriptor */.H)(descriptor) && descriptor.filters.length === 0)) {
        return data;
    }
    return data.filter(compileFilter((0,filter_operators/* normalizeFilters */.h)(descriptor)));
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/grouping/group.operators.js




/**
 * @hidden
 */
var normalizeGroups = function (descriptors) {
    descriptors = (0,utils/* isArray */.cy)(descriptors) ? descriptors : [descriptors];
    return descriptors.map(function (x) { return Object.assign({ dir: "asc" }, x); });
};
var group_operators_identity = map(function (x) { return x; });
/**
 * Groups the provided data according to the specified descriptors.
 *
 * @param {Array} data - The data that will be grouped.
 * @param {GroupDescriptor[]} descriptors - The descriptors.
 * @param {any} transformers - For internal use.
 * @param {Array} originalData - For internal use.
 * @returns {(Array<GroupResult<T>> | T[])} - The grouped data.
 *
 * @example
 * ```ts
 *
 * import { groupBy } from '@progress/kendo-data-query';
 *
 * const data = [
 *     { name: "Pork", category: "Food", subcategory: "Meat" },
 *     { name: "Pepper", category: "Food", subcategory: "Vegetables" },
 *     { name: "Beef", category: "Food", subcategory: "Meat" }
 * ];
 *
 * const result = groupBy(data, [{ field: "subcategory" }]);
 * ```
 */
var groupBy = function (data, descriptors, transformers, originalData) {
    if (descriptors === void 0) { descriptors = []; }
    if (transformers === void 0) { transformers = group_operators_identity; }
    if (originalData === void 0) { originalData = data; }
    descriptors = normalizeGroups(descriptors);
    if (!descriptors.length) {
        return data;
    }
    var descriptor = descriptors[0];
    var initialValue = {};
    var view = exec(transformers(groupCombinator(descriptor.field)), initialValue, data);
    var result = [];
    Object.keys(view).forEach(function (field) {
        Object.keys(view[field]).forEach(function (value) {
            var group = view[field][value];
            var aggregateResult = {};
            var filteredData = originalData;
            if ((0,utils/* isPresent */.Wo)(descriptor.aggregates)) {
                filteredData = filterBy(originalData, {
                    field: descriptor.field,
                    ignoreCase: false,
                    operator: 'eq',
                    value: group.value
                });
                aggregateResult = aggregateBy(filteredData, descriptor.aggregates);
            }
            result[group.__position] = {
                aggregates: aggregateResult,
                field: field,
                items: descriptors.length > 1 ?
                    groupBy(group.items, descriptors.slice(1), group_operators_identity, filteredData)
                    : group.items,
                value: group.value
            };
        });
    });
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/array.operators.js









/**
 * Orders the specified array according to the provided sort descriptors.
 *
 * @param {T[]} data - The data to be sorted.
 * @param {SortDescriptor[]} descriptors - The descriptors by which the data will be sorted.
 * @returns {T[]} - The sorted data.
 *
 * @example
 * ```ts
 * import { orderBy } from '@progress/kendo-data-query';
 *
 * const data = [
 *     { name: "Pork", category: "Food", subcategory: "Meat" },
 *     { name: "Pepper", category: "Food", subcategory: "Vegetables" },
 *     { name: "Beef", category: "Food", subcategory: "Meat" }
 * ];
 *
 * const result = orderBy(data, [{ field: "name", dir: "asc" }]);
 * ```
 */
var orderBy = function (data, descriptors) {
    if (descriptors.some(function (x) { return (0,utils/* isPresent */.Wo)(x.dir) || (0,utils/* isPresent */.Wo)(x.compare); })) {
        data = data.slice(0);
        var comparer = composeSortDescriptors(descriptors);
        data.sort(comparer);
    }
    return data;
};
var defaultComparer = function (a, b) { return a === b; };
var normalizeComparer = function (comparer) {
    if (isString(comparer)) {
        var accessor_1 = getter(comparer);
        comparer = function (a, b) { return accessor_1(a) === accessor_1(b); };
    }
    return comparer;
};
var _distinct = function (data, comparer) {
    return data.filter(function (x, idx, xs) { return xs.findIndex(comparer.bind(null, x)) === idx; });
};
/**
 * Reduces the provided array so it contains only unique values.
 *
 * @param {T[]} data - The array that will be reduced.
 * @param {(Comparer | string)} comparer - An optional custom comparer function or the field name that will be used for comparison.
 * @returns {T[]} - The reduced data.
 *
 * @example
 * ```ts
 * import { distinct } from '@progress/kendo-data-query';
 *
 * const data = [
 *     { name: "Pork", category: "Food", subcategory: "Meat" },
 *     { name: "Pepper", category: "Food", subcategory: "Vegetables" },
 *     { name: "Beef", category: "Food", subcategory: "Meat" }
 * ];
 *
 * const result = distinct(data, "subcategory");
 *
 * // output:
 * // result => [
 * //     { name: "Pork", category: "Food", subcategory: "Meat" },
 * //     { name: "Pepper", category: "Food", subcategory: "Vegetables" }
 * // ];
 * ```
 */
var distinct = function (data, comparer) {
    if (comparer === void 0) { comparer = defaultComparer; }
    return _distinct(data, normalizeComparer(comparer));
};
/**
 * @hidden
 */
var count = function (data, predicate) {
    var counter = 0;
    for (var idx = 0, length_1 = data.length; idx < length_1; idx++) {
        if (predicate(data[idx])) {
            counter++;
        }
    }
    return counter;
};
/**
 * @hidden
 */
var limit = function (data, predicate) {
    if (predicate) {
        return data.filter(predicate);
    }
    return data;
};
/**
 * Applies the specified operation descriptors to the data.
 *
 * @param {T[]} data - The data to be processed.
 * @param {State} state - The operation descriptors that will be applied to the data.
 * @returns {DataResult} - The processed data.
 *
 * @example
 * ```ts
 *
 * const result = process(data, {
 *     skip: 10,
 *     take: 20,
 *     group: [{
 *       field: 'category.categoryName',
 *             aggregates: [
 *                   { aggregate: "sum", field: "unitPrice" },
 *                   { aggregate: "sum", field: "unitsInStock" }
 *             ]
 *       }],
 *     sort: [{ field: 'productName', dir: 'desc' }],
 *     filter: {
 *         logic: "or",
 *         filters: [
 *           { field: "discontinued", operator: "eq", value: true },
 *           { field: "unitPrice", operator: "lt", value: 22 }
 *         ]
 *     }
 * });
 *
 * ```
 */
var process = function (data, state) {
    var skipCount = state.skip, takeCount = state.take, filterDescriptor = state.filter, sort = state.sort, group = state.group;
    var sortDescriptors = (0,tslib_es6/* __spreadArrays */.aN)(normalizeGroups(group || []), sort || []);
    if (sortDescriptors.length) {
        data = orderBy(data, sortDescriptors);
    }
    var hasFilters = (0,utils/* isPresent */.Wo)(filterDescriptor) && filter.length;
    var hasGroups = (0,utils/* isPresent */.Wo)(group) && group.length;
    if (!hasFilters && !hasGroups) {
        return {
            data: takeCount ? data.slice(skipCount, skipCount + takeCount) : data,
            total: data.length
        };
    }
    var total;
    var transformers = [];
    var predicate;
    if (hasFilters) {
        predicate = compileFilter((0,filter_operators/* normalizeFilters */.h)(filterDescriptor));
        total = count(data, predicate);
        transformers.push(filter(predicate));
    }
    else {
        total = data.length;
    }
    if ((0,utils/* isPresent */.Wo)(skipCount) && (0,utils/* isPresent */.Wo)(takeCount)) {
        transformers.push(transducers_skip(skipCount));
        transformers.push(transducers_take(takeCount));
    }
    if (transformers.length) {
        var transform = funcs/* compose */.Zz.apply(void 0, transformers);
        var result = hasGroups ?
            groupBy(data, group, transform, limit(data, predicate)) :
            exec(transform(transducers_concat), [], data);
        return { data: result, total: total };
    }
    return {
        data: hasGroups ? groupBy(data, group) : data,
        total: total
    };
};

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/filtering/operators.enum.js
/**
 * Represents the list of supported [`FilterDescriptor`]({% slug api_kendo-data-query_filterdescriptor %}) operators.
 * Allows restricting `FilterDescriptor.operator` definition to available values only.
 */
var FilterOperator;
(function (FilterOperator) {
    /**
     * The `contains` operator.
     */
    FilterOperator["Contains"] = "contains";
    /**
     * The `doesnotcontain` operator.
     */
    FilterOperator["DoesNotContain"] = "doesnotcontain";
    /**
     * The `doesnotendwith` operator.
     */
    FilterOperator["DoesNotEndWith"] = "doesnotendwith";
    /**
     * The `doesnotstartwith` operator.
     */
    FilterOperator["DoesNotStartWith"] = "doesnotstartwith";
    /**
     * The `endswith` operator.
     */
    FilterOperator["EndsWith"] = "endswith";
    /**
     * The `eq` operator.
     */
    FilterOperator["EqualTo"] = "eq";
    /**
     * The `gt` operator.
     */
    FilterOperator["GreaterThan"] = "gt";
    /**
     * The `gte` operator.
     */
    FilterOperator["GreaterThanOrEqual"] = "gte";
    /**
     * The `isempty` operator.
     */
    FilterOperator["IsEmpty"] = "isempty";
    /**
     * The `isnotempty` operator.
     */
    FilterOperator["IsNotEmpty"] = "isnotempty";
    /**
     * The `isnotnull` operator.
     */
    FilterOperator["IsNotNull"] = "isnotnull";
    /**
     * The `isnull` operator.
     */
    FilterOperator["IsNull"] = "isnull";
    /**
     * The `lt` operator.
     */
    FilterOperator["LessThan"] = "lt";
    /**
     * The `lte` operator.
     */
    FilterOperator["LessThanOrEqual"] = "lte";
    /**
     * The `neq` operator.
     */
    FilterOperator["NotEqualTo"] = "neq";
    /**
     * The `startswith` operator.
     */
    FilterOperator["StartsWith"] = "startswith";
})(FilterOperator || (FilterOperator = {}));

;// ../node_modules/.pnpm/@progress+kendo-data-query@1.7.0/node_modules/@progress/kendo-data-query/dist/es/main.js















/***/ },

/***/ 90148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ isDate),
/* harmony export */   Kg: () => (/* binding */ isString),
/* harmony export */   Tn: () => (/* binding */ isFunction),
/* harmony export */   Wo: () => (/* binding */ isPresent),
/* harmony export */   cy: () => (/* binding */ isArray),
/* harmony export */   kf: () => (/* binding */ isNumeric),
/* harmony export */   yj: () => (/* binding */ isNotNullOrEmptyString),
/* harmony export */   z3: () => (/* binding */ isBlank)
/* harmony export */ });
/* unused harmony exports isTruthy, isNullOrEmptyString */
/**
 * @hidden
 */
var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
var isBlank = function (value) { return value === null || value === undefined; };
/**
 * @hidden
 */
var isArray = function (value) { return Array.isArray(value); };
/**
 * @hidden
 */
var isFunction = function (value) { return typeof value === 'function'; };
/**
 * @hidden
 */
var isString = function (value) { return typeof value === 'string'; };
/**
 * @hidden
 */
var isTruthy = function (value) { return !!value; };
/**
 * @hidden
 */
var isNullOrEmptyString = function (value) { return isBlank(value) || value.trim().length === 0; };
/**
 * @hidden
 */
var isNotNullOrEmptyString = function (value) { return !isNullOrEmptyString(value); };
/**
 * @hidden
 */
var isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
/**
 * @hidden
 */
var isDate = function (value) { return value && value.getTime; };


/***/ }

}]);