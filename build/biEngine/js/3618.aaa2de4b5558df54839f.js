"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3618],{

/***/ 33618
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Action: () => (/* reexport */ Action),
  BusViewService: () => (/* reexport */ BusViewService),
  Calendar: () => (/* reexport */ Calendar),
  CalendarCell: () => (/* reexport */ CalendarCell),
  CalendarHeaderTitle: () => (/* reexport */ CalendarHeaderTitle),
  CalendarNavigationItem: () => (/* reexport */ CalendarNavigationItem),
  CalendarPropsContext: () => (/* reexport */ CalendarPropsContext),
  CalendarViewEnum: () => (/* reexport */ CalendarViewEnum),
  CalendarWeekCell: () => (/* reexport */ CalendarWeekCell),
  CalendarWithoutContext: () => (/* reexport */ CalendarWithoutContext),
  CenturyViewService: () => (/* reexport */ CenturyViewService),
  DOMService: () => (/* reexport */ DOMService),
  DateInput: () => (/* reexport */ DateInput),
  DateInputPropsContext: () => (/* reexport */ DateInputPropsContext),
  DateInputWithoutContext: () => (/* reexport */ DateInputWithoutContext),
  DatePicker: () => (/* reexport */ DatePicker),
  DatePickerPropsContext: () => (/* reexport */ DatePickerPropsContext),
  DatePickerWithoutContext: () => (/* reexport */ DatePickerWithoutContext),
  DateRangePicker: () => (/* reexport */ DateRangePicker),
  DateRangePickerPropsContext: () => (/* reexport */ DateRangePickerPropsContext),
  DateRangePickerWithoutContext: () => (/* reexport */ DateRangePickerWithoutContext),
  DateTimePicker: () => (/* reexport */ DateTimePicker),
  DateTimePickerPropsContext: () => (/* reexport */ DateTimePickerPropsContext),
  DateTimePickerWithoutContext: () => (/* reexport */ DateTimePickerWithoutContext),
  DayPeriodService: () => (/* reexport */ DayPeriodService),
  DecadeViewService: () => (/* reexport */ DecadeViewService),
  EMPTY_SELECTIONRANGE: () => (/* reexport */ SelectionRange_EMPTY_SELECTIONRANGE),
  Header: () => (/* reexport */ Header),
  HorizontalViewList: () => (/* reexport */ HorizontalViewList),
  HoursService: () => (/* reexport */ HoursService),
  MAX_DATE: () => (/* reexport */ MAX_DATE),
  MAX_TIME: () => (/* reexport */ MAX_TIME),
  MIN_DATE: () => (/* reexport */ MIN_DATE),
  MIN_TIME: () => (/* reexport */ MIN_TIME),
  MinutesService: () => (/* reexport */ MinutesService),
  MonthViewService: () => (/* reexport */ MonthViewService),
  MultiViewCalendar: () => (/* reexport */ MultiViewCalendar),
  MultiViewCalendarPropsContext: () => (/* reexport */ MultiViewCalendarPropsContext),
  MultiViewCalendarWithoutContext: () => (/* reexport */ MultiViewCalendarWithoutContext),
  NavigationService: () => (/* reexport */ NavigationService),
  PickerWrap: () => (/* reexport */ PickerWrap),
  ScrollSyncService: () => (/* reexport */ ScrollSyncService),
  SecondsService: () => (/* reexport */ SecondsService),
  TimeList: () => (/* reexport */ TimeList),
  TimePart: () => (/* reexport */ TimePart),
  TimePicker: () => (/* reexport */ TimePicker),
  TimePickerPropsContext: () => (/* reexport */ TimePickerPropsContext),
  TimePickerWithoutContext: () => (/* reexport */ TimePickerWithoutContext),
  TimeSelector: () => (/* reexport */ TimeSelector),
  TodayCommand: () => (/* reexport */ TodayCommand),
  ToggleButton: () => (/* reexport */ ToggleButton),
  ViewList: () => (/* reexport */ ViewList),
  Virtualization: () => (/* reexport */ Virtualization),
  WeekNamesService: () => (/* reexport */ WeekNamesService),
  YearViewService: () => (/* reexport */ YearViewService),
  dateInputsMessages: () => (/* reexport */ messages),
  decreaseValue: () => (/* reexport */ decreaseValue),
  end: () => (/* reexport */ end),
  getNow: () => (/* reexport */ getNow),
  getToday: () => (/* reexport */ getToday),
  increaseValue: () => (/* reexport */ increaseValue),
  separator: () => (/* reexport */ separator),
  start: () => (/* reexport */ start),
  swapStartEnd: () => (/* reexport */ swapStartEnd),
  today: () => (/* reexport */ today),
  toggleCalendar: () => (/* reexport */ toggleCalendar),
  toggleDateTimeSelector: () => (/* reexport */ toggleDateTimeSelector)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_d88e16230e1f90237543f8b39b6abcad/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(41856);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/get-date.js
var get_date = __webpack_require__(10716);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/clone-date.js
var clone_date = __webpack_require__(5995);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js
var is_equal_date = __webpack_require__(79291);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.2.1_@progress+kendo-licensing@1_f4601061072e7c3278720aa16dc3d5d5/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(31650);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-dateinputs',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1700063843,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/services/RowHeightService.js
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
var update = function (arr, idx, value) { return (__spreadArray(__spreadArray([], arr.slice(0, idx + 1), true), (arr.slice(idx + 1).map(function (x) { return x + value; })), true)); };
/**
 * @hidden
 */
var RowHeightService = /** @class */ (function () {
    function RowHeightService(total, rowHeight, detailRowHeight) {
        if (total === void 0) { total = 0; }
        this.total = total;
        this.rowHeight = rowHeight;
        this.detailRowHeight = detailRowHeight;
        this.offsets = [];
        this.heights = [];
        var agg = 0;
        for (var idx = 0; idx < total; idx++) {
            this.offsets.push(agg);
            agg += rowHeight;
            this.heights.push(rowHeight);
        }
    }
    RowHeightService.prototype.height = function (rowIndex) {
        return this.heights[rowIndex];
    };
    RowHeightService.prototype.expandDetail = function (rowIndex) {
        if (this.height(rowIndex) === this.rowHeight) {
            this.updateRowHeight(rowIndex, this.detailRowHeight);
        }
    };
    RowHeightService.prototype.collapseDetail = function (rowIndex) {
        if (this.height(rowIndex) > this.rowHeight) {
            this.updateRowHeight(rowIndex, this.detailRowHeight * -1);
        }
    };
    RowHeightService.prototype.index = function (position) {
        for (var i = 0; i < this.offsets.length; i++) {
            if (position === this.offsets[i]) {
                return i;
            }
            if (position < this.offsets[i]) {
                return i - 1;
            }
        }
        return this.total - 1;
    };
    RowHeightService.prototype.offset = function (rowIndex) {
        return this.offsets[rowIndex];
    };
    RowHeightService.prototype.totalHeight = function () {
        return this.heights.reduce(function (prev, curr) { return prev + curr; }, 0);
    };
    RowHeightService.prototype.updateRowHeight = function (rowIndex, value) {
        this.heights[rowIndex] += value;
        this.offsets = update(this.offsets, rowIndex, value);
    };
    return RowHeightService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/services/ScrollerService.js
var normalize = function (x) { return Math.max(x, 0); };
/**
 * @hidden
 */
var ScrollAction = /** @class */ (function () {
    function ScrollAction(offset) {
        this.offset = offset;
    }
    return ScrollAction;
}());

/**
 * @hidden
 */
var PageAction = /** @class */ (function () {
    function PageAction(skip) {
        this.skip = skip;
    }
    return PageAction;
}());

/**
 * @hidden
 */
var ScrollerService = /** @class */ (function () {
    function ScrollerService(onScrollAction, onPageAction) {
        this.onScrollAction = onScrollAction;
        this.onPageAction = onPageAction;
        this.direction = 'vertical';
        this.firstLoaded = 0;
        this.lastLoaded = 0;
        this.lastScrollTop = 0;
        this.take = 0;
        this.total = 0;
        this.rowHeightService = null;
        this.bottomOffset = 0;
        this.topOffset = 0;
    }
    ScrollerService.prototype.create = function (rowHeightService, skip, take, total, topOffset, bottomOffset, direction) {
        if (topOffset === void 0) { topOffset = 0; }
        if (bottomOffset === void 0) { bottomOffset = 0; }
        if (direction === void 0) { direction = 'vertical'; }
        this.rowHeightService = rowHeightService;
        this.firstLoaded = skip;
        this.lastLoaded = skip + take;
        this.take = take;
        this.total = total;
        this.lastScrollTop = 0;
        this.topOffset = topOffset;
        this.bottomOffset = bottomOffset;
        this.direction = direction;
        var offsetBufferRows = this.rowsForHeight(topOffset);
        var skipWithOffset = normalize(skip - offsetBufferRows);
        this.onScrollAction(new ScrollAction(this.rowOffset(skipWithOffset)));
        this.onPageAction(new PageAction(skipWithOffset));
    };
    ScrollerService.prototype.onScroll = function (_a) {
        var scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
        var scrollPosition = this.direction === 'vertical' ? scrollTop : scrollLeft;
        var offsetSize = this.direction === 'vertical' ? offsetHeight : offsetWidth;
        if (this.lastScrollTop === scrollPosition || !this.rowHeightService) {
            return;
        }
        var up = this.lastScrollTop >= scrollPosition;
        this.lastScrollTop = scrollPosition;
        var firstItemIndex = this.rowHeightService.index(normalize(scrollPosition - this.topOffset));
        var lastItemIndex = this.rowHeightService.index(normalize(scrollPosition + offsetSize - this.bottomOffset));
        if (!up && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
            this.firstLoaded = firstItemIndex;
            this.onScrollAction(new ScrollAction(this.rowOffset(firstItemIndex)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            this.onPageAction(new PageAction(this.firstLoaded));
        }
        if (up && firstItemIndex <= this.firstLoaded) {
            var nonVisibleBuffer = Math.floor(this.take * 0.3);
            this.firstLoaded = normalize(firstItemIndex - nonVisibleBuffer);
            this.onScrollAction(new ScrollAction(this.rowOffset(this.firstLoaded)));
            this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
            this.onPageAction(new PageAction(this.firstLoaded));
        }
    };
    ScrollerService.prototype.rowOffset = function (index) {
        return this.rowHeightService ? this.rowHeightService.offset(index) + this.topOffset : 0;
    };
    ScrollerService.prototype.rowsForHeight = function (height) {
        return this.rowHeightService ? Math.ceil(height / this.rowHeightService.height(0)) : 0;
    };
    return ScrollerService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/Virtualization.js
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
var _a, _b, _c;




/**
 * @hidden
 */
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Backward"] = 0] = "Backward";
    ScrollDirection[ScrollDirection["Forward"] = 1] = "Forward";
})(ScrollDirection || (ScrollDirection = {}));
var differenceToScroll = function (scrollTop, staticOffset, maxScrollDifference) {
    return Math.min(Math.abs(staticOffset - scrollTop), maxScrollDifference);
};
var FRAME_DURATION = 17;
var MIN_SCROLL_STEP = 10;
var scrollModifiers = (_a = {},
    _a[ScrollDirection.Forward] = function (step) { return function (value) { return value + step; }; },
    _a[ScrollDirection.Backward] = function (step) { return function (value) { return value - step; }; },
    _a);
var scrollNormalizers = (_b = {},
    _b[ScrollDirection.Forward] = function (end) { return function (value) { return Math.min(value, end); }; },
    _b[ScrollDirection.Backward] = function (end) { return function (value) { return Math.max(value, end); }; },
    _b);
var scrollValidators = (_c = {},
    _c[ScrollDirection.Forward] = function (end) { return function (start) { return start < end; }; },
    _c[ScrollDirection.Backward] = function (end) { return function (start) { return start > end; }; },
    _c);
/**
 * @hidden
 */
var Virtualization = /** @class */ (function (_super) {
    __extends(Virtualization, _super);
    function Virtualization(props) {
        var _this = _super.call(this, props) || this;
        _this.rowHeightService = null;
        _this.scrollContainer = null;
        _this.lastDirection = null;
        _this.lastTotal = 0;
        _this.lastTake = 0;
        _this.animationInProgress = false;
        _this.restrictScroll = false;
        _this.scrollTo = function (value) {
            var scrollProperty = _this.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
            if (!_this.scrollContainer) {
                return;
            }
            var current = _this.scrollContainer[scrollProperty];
            if (_this.restrictScroll && scrollProperty === 'scrollTop' &&
                (!Number.isInteger(current) || !Number.isInteger(value)) && Math.abs(current - value) < MIN_SCROLL_STEP) {
                return;
            }
            _this.scrollContainer[scrollProperty] = value;
        };
        _this.scrollToIndex = function (index) {
            _this.animationInProgress = false;
            if (_this.rowHeightService) {
                _this.scrollTo(_this.rowHeightService.offset(index));
            }
        };
        _this.animateToIndex = function (index) {
            if (!_this.rowHeightService || !window) {
                return;
            }
            window.cancelAnimationFrame(_this.cancelAnimation);
            var indexOffset = _this.rowHeightService.offset(index);
            var direction = _this.getContainerScrollDirection(indexOffset);
            var _a = _this.scrollRange(indexOffset, direction), start = _a.start, end = _a.end;
            if (start === end) {
                return;
            }
            var step = _this.scrollStep(start, end);
            var modifyScroll = scrollModifiers[direction](step);
            var normalizeScroll = scrollNormalizers[direction](end);
            var isScrollValid = scrollValidators[direction](modifyScroll(end));
            var animate = function (progress) {
                _this.animationInProgress = true;
                var next = modifyScroll(progress);
                _this.scrollTo(normalizeScroll(next));
                isScrollValid(next)
                    ? _this.cancelAnimation = window.requestAnimationFrame(function () { animate(next); })
                    : _this.animationInProgress = false;
            };
            _this.cancelAnimation = window.requestAnimationFrame(function () { animate(start); });
        };
        _this.scrollToBottom = function () {
            if (!_this.rowHeightService) {
                return;
            }
            _this.scrollTo(_this.rowHeightService.totalHeight() + _this.props.bottomOffset);
        };
        _this.scrollStep = function (start, end) {
            var duration = _this.props.scrollDuration || Virtualization.defaultProps.scrollDuration;
            return Math.abs(end - start) / (duration / FRAME_DURATION);
        };
        _this.scrollRange = function (indexOffset, direction) {
            var containerScroll = _this.containerScrollPosition;
            if (parseInt("".concat(indexOffset), 10) === parseInt("".concat(containerScroll), 10)) {
                return { start: indexOffset, end: indexOffset };
            }
            var maxScroll = _this.containerMaxScroll();
            var sign = direction === ScrollDirection.Backward ? 1 : -1;
            var difference = differenceToScroll(containerScroll, indexOffset, _this.props.maxScrollDifference || 0);
            var end = Math.min(indexOffset, maxScroll);
            var start = Math.min(Math.max(end + (sign * difference), 0), maxScroll);
            return { start: start, end: end };
        };
        _this.containerMaxScroll = function () {
            return _this.containerScrollSize - _this.containerOffsetSize;
        };
        _this.getContainerScrollDirection = function (indexOffset) {
            return indexOffset < _this.containerScrollPosition ? ScrollDirection.Backward : ScrollDirection.Forward;
        };
        _this.initServices = function (props) {
            if (props === void 0) { props = _this.props; }
            var dimension = _this.direction === 'vertical' ? props.itemHeight : props.itemWidth;
            if (dimension === undefined) {
                return;
            }
            _this.rowHeightService = new RowHeightService(props.total, dimension, 0);
            _this.scrollerService.create(_this.rowHeightService, props.skip, props.take, props.total, props.topOffset, _this.scrollOffsetSize, _this.direction);
        };
        _this.getContainerProperty = function (propertyName) {
            if (!_this.scrollContainer) {
                return 0;
            }
            return _this.scrollContainer[propertyName];
        };
        _this.handleScroll = function (event) {
            if (!_this.scrollContainer || !_this.rowHeightService) {
                return;
            }
            var target = event.target;
            _this.scrollerService.onScroll({
                scrollLeft: target.scrollLeft,
                scrollTop: target.scrollTop,
                offsetHeight: target.offsetHeight,
                offsetWidth: target.offsetWidth
            });
            var index = _this.rowHeightService.index(_this.containerScrollPosition - _this.props.topOffset);
            var onScrollAction = _this.props.onScrollAction;
            var args = {
                index: index,
                target: target,
                scrollAction: _this.scrollAction,
                pageAction: _this.pageAction,
                animationInProgress: _this.animationInProgress
            };
            if (_this.props.onScroll) {
                _this.props.onScroll.call(undefined, event);
            }
            if (onScrollAction) {
                onScrollAction.call(undefined, args);
            }
            _this.scrollAction = undefined;
            _this.pageAction = undefined;
        };
        _this.handleScrollAction = function (action) {
            _this.scrollAction = action;
        };
        _this.handlePageAction = function (action) {
            _this.pageAction = action;
        };
        _this.scrollerService = new ScrollerService(_this.handleScrollAction, _this.handlePageAction);
        _this.restrictScroll = Number.parseFloat(index_js_.version) > 17;
        return _this;
    }
    Object.defineProperty(Virtualization.prototype, "element", {
        get: function () {
            return this.scrollContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Virtualization.prototype, "containerOffsetSize", {
        get: function () {
            return this.getContainerProperty(this.direction === 'vertical' ? 'offsetHeight' : 'offsetWidth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Virtualization.prototype, "containerScrollSize", {
        get: function () {
            return this.getContainerProperty(this.direction === 'vertical' ? 'scrollHeight' : 'scrollWidth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Virtualization.prototype, "containerScrollPosition", {
        get: function () {
            return this.getContainerProperty(this.direction === 'vertical' ? 'scrollTop' : 'scrollLeft');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Virtualization.prototype, "direction", {
        get: function () {
            return this.props.direction !== undefined ? this.props.direction : Virtualization.defaultProps.direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Virtualization.prototype, "scrollOffsetSize", {
        get: function () {
            return this.props.scrollOffsetSize !== undefined
                ? this.props.scrollOffsetSize : Virtualization.defaultProps.scrollOffsetSize;
        },
        enumerable: false,
        configurable: true
    });
    Virtualization.prototype.activeIndex = function () {
        return this.itemIndex(Math.ceil(this.containerScrollPosition));
    };
    Virtualization.prototype.itemIndex = function (offset) {
        if (!this.rowHeightService) {
            return 0;
        }
        return this.rowHeightService.index(offset);
    };
    Virtualization.prototype.itemOffset = function (index) {
        if (!this.rowHeightService) {
            return 0;
        }
        return this.rowHeightService.offset(index);
    };
    Virtualization.prototype.isIndexVisible = function (index) {
        if (!this.rowHeightService) {
            return false;
        }
        var containerTop = this.containerScrollPosition;
        var containerBottom = containerTop + this.containerOffsetSize;
        var top = this.rowHeightService.offset(index);
        var bottom = top + this.rowHeightService.height(index);
        return top >= containerTop && bottom <= containerBottom;
    };
    Virtualization.prototype.isListScrolled = function (index) {
        if (!this.rowHeightService) {
            return false;
        }
        return this.containerScrollPosition !== this.rowHeightService.offset(index);
    };
    Virtualization.prototype.componentDidMount = function () {
        var onMount = this.props.onMount;
        if (onMount) {
            onMount.call(undefined, this);
        }
    };
    Virtualization.prototype.render = function () {
        var _this = this;
        if (this.lastTotal !== this.props.total
            || this.lastDirection !== this.direction
            || this.lastTake !== this.props.take) {
            this.initServices();
            this.lastTotal = this.props.total;
            this.lastDirection = this.direction;
            this.lastTake = this.props.take;
        }
        var vertexLength = "".concat((this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + this.props.bottomOffset);
        var placeholderStyle = this.direction === 'vertical'
            ? { height: "".concat(vertexLength, "px") }
            : { width: "".concat(vertexLength, "px") };
        var rootClassNames = (0,main_js_.classNames)('k-content k-scrollable', {
            'k-scrollable-horizontal': this.direction === 'horizontal'
        }, this.props.className);
        var scrollableClassNames = (0,main_js_.classNames)('k-scrollable-placeholder', {
            'k-scrollable-horizontal-placeholder': this.direction === 'horizontal'
        });
        return (index_js_.createElement("div", { ref: function (el) { _this.scrollContainer = el; }, onScroll: this.handleScroll, className: rootClassNames, tabIndex: this.props.tabIndex, role: this.props.role },
            this.props.children,
            index_js_.createElement("div", { style: placeholderStyle, className: scrollableClassNames })));
    };
    Virtualization.propTypes = {
        bottomOffset: prop_types_index_js_.number.isRequired,
        className: prop_types_index_js_.string,
        direction: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
        forceScroll: prop_types_index_js_.bool,
        itemHeight: prop_types_index_js_.number,
        itemWidth: prop_types_index_js_.number,
        maxScrollDifference: prop_types_index_js_.number,
        onScroll: prop_types_index_js_.func,
        onScrollAction: prop_types_index_js_.func,
        scrollDuration: prop_types_index_js_.number,
        scrollOffsetSize: prop_types_index_js_.number,
        skip: prop_types_index_js_.number.isRequired,
        tabIndex: prop_types_index_js_.number,
        take: prop_types_index_js_.number.isRequired,
        topOffset: prop_types_index_js_.number.isRequired,
        total: prop_types_index_js_.number.isRequired,
        role: prop_types_index_js_.string
    };
    Virtualization.defaultProps = {
        direction: 'vertical',
        forceScroll: false,
        scrollOffsetSize: 0,
        maxScrollDifference: 100,
        scrollDuration: 100
    };
    return Virtualization;
}(index_js_.Component));


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/week-in-year.js + 3 modules
var week_in_year = __webpack_require__(45602);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarCell.js
var CalendarCell_extends = (undefined && undefined.__extends) || (function () {
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
var compareProps = function (x, y) {
    var xProps = Object.getOwnPropertyNames(x);
    var yProps = Object.getOwnPropertyNames(y);
    if (xProps.length !== yProps.length) {
        return false;
    }
    for (var i = 0; i < xProps.length; i++) {
        var propName = xProps[i];
        if (x[propName] !== y[propName]) {
            return false;
        }
    }
    return true;
};
/**
 * The `CalendarCell` component is internally used for rendering the items in the current view. Also be used as a custom `cell` of the [Calendar]({% slug api_dateinputs_calendarprops %}#toc-cell) and the [MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %}#toc-cell).
 *
 * * [Customizing the cells inside the Calendar view]({% slug custom_rendering_calendar %}#toc-cells-inside-the-view)
 * * [Customizing the cells inside the MultiViewCalendar view]({% slug custom_rendering_multiviewcalendar %}#toc-cells-inside-the-view)
 */
var CalendarCell = /** @class */ (function (_super) {
    CalendarCell_extends(CalendarCell, _super);
    function CalendarCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:enable:max-line-length
        _this.handleClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, value = _a.value;
            if (onClick) {
                onClick.call(undefined, value, event);
            }
        };
        _this.handleMouseEnter = function () {
            var _a = _this.props, onMouseEnter = _a.onMouseEnter, value = _a.value;
            if (onMouseEnter) {
                onMouseEnter.call(undefined, value);
            }
        };
        _this.handleMouseLeave = function () {
            var _a = _this.props, onMouseLeave = _a.onMouseLeave, value = _a.value;
            if (onMouseLeave) {
                onMouseLeave.call(undefined, value);
            }
        };
        return _this;
    }
    // Manually checking if the component needs an update
    // due to date object being compared by instance
    // and new Date object is created
    // every time and fails the shallow compare of the React.PureComponent.
    /**
     * @hidden
     */
    CalendarCell.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, value = _a.value, props = __rest(_a, ["value"]);
        var newValue = nextProps.value, newProps = __rest(nextProps, ["value"]);
        var valueEqual = !(value && newValue) || value.getTime() === newValue.getTime();
        return !(valueEqual && compareProps(props, newProps));
    };
    /* eslint-disable max-len */
    /**
     * @return
     * Returns a `<td />` element with a `<span className="k-link" />` inside to apply the styles. The text inside is the [`formattedValue`]({% slug api_dateinputs_calendarcellprops %}#toc-formattedvalue) of the `cell`.
     */
    CalendarCell.prototype.render = function () {
        var _a = this.props, className = _a.className, formattedValue = _a.formattedValue, isWeekend = _a.isWeekend, isFocused = _a.isFocused, isInRange = _a.isInRange, isSelected = _a.isSelected, isRangeStart = _a.isRangeStart, isRangeMid = _a.isRangeMid, isRangeEnd = _a.isRangeEnd, isRangeSplitStart = _a.isRangeSplitStart, isRangeSplitEnd = _a.isRangeSplitEnd, isToday = _a.isToday, isDisabled = _a.isDisabled, view = _a.view, value = _a.value, other = __rest(_a, ["className", "formattedValue", "isWeekend", "isFocused", "isInRange", "isSelected", "isRangeStart", "isRangeMid", "isRangeEnd", "isRangeSplitStart", "isRangeSplitEnd", "isToday", "isDisabled", "view", "value"]);
        var isEndActive = this.props.activeRangeEnd === 'end' && isRangeEnd;
        var isStartActive = this.props.activeRangeEnd === 'start' && isRangeStart;
        var rootClassName = (0,main_js_.classNames)('k-calendar-td', {
            'k-range-end': isRangeEnd,
            'k-range-mid': isRangeMid,
            'k-range-split-end': isRangeSplitEnd,
            'k-range-split-start': isRangeSplitStart,
            'k-range-start': isRangeStart,
            'k-active': isStartActive || isEndActive,
            'k-state-pending-focus': isFocused,
            'k-selected': isSelected || isRangeStart || isRangeEnd,
            'k-today': isToday,
            'k-weekend': isWeekend,
            'k-disabled': isDisabled
        }, className);
        return (index_js_.createElement("td", __assign({}, other, { className: rootClassName, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }),
            index_js_.createElement("span", { className: "k-link" }, this.props.children)));
    };
    return CalendarCell;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarWeekCell.js
var CalendarWeekCell_extends = (undefined && undefined.__extends) || (function () {
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
var CalendarWeekCell_assign = (undefined && undefined.__assign) || function () {
    CalendarWeekCell_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CalendarWeekCell_assign.apply(this, arguments);
};
var CalendarWeekCell_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * The `CalendarWeekCell` component is internally used for rendering the week cells inside the `month` view of the Calendar. Also used as a [custom week cell for the Calendar]({% slug api_dateinputs_calendarprops %}#toc-weekcell) and the [MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %}#toc-weekcell) components.
 *
 * * [Customizing week-column cells in the Calendar]({% slug custom_rendering_calendar %}#toc-cells-inside-the-week-column)
 * * [Customizing week-column cells in the MultiViewCalendar]({% slug custom_rendering_multiviewcalendar %}#toc-cells-inside-the-week-column)
 */
var CalendarWeekCell = /** @class */ (function (_super) {
    CalendarWeekCell_extends(CalendarWeekCell, _super);
    function CalendarWeekCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return
     * Returns a `<td />` element with the [`value`]({% slug api_dateinputs_calendarweekcellprops %}#toc-value) as a child.
     */
    CalendarWeekCell.prototype.render = function () {
        var _a = this.props, className = _a.className, firstDate = _a.firstDate, other = CalendarWeekCell_rest(_a, ["className", "firstDate"]);
        return (index_js_.createElement("td", CalendarWeekCell_assign({ className: (0,main_js_.classNames)('k-calendar-td', className) }, other), this.props.children));
    };
    return CalendarWeekCell;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/CalendarViewEnum.js
/**
 * The Enum which defines all possible Calendar view types.
 */
var CalendarViewEnum;
(function (CalendarViewEnum) {
    CalendarViewEnum[CalendarViewEnum["month"] = 0] = "month";
    CalendarViewEnum[CalendarViewEnum["year"] = 1] = "year";
    CalendarViewEnum[CalendarViewEnum["decade"] = 2] = "decade";
    CalendarViewEnum[CalendarViewEnum["century"] = 3] = "century";
})(CalendarViewEnum || (CalendarViewEnum = {}));

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/SelectionRange.js
/**
 * @hidden
 */
var SelectionRange_EMPTY_SELECTIONRANGE = { start: null, end: null };

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/utils.js
var utils_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
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
var isEqualRange = function (initial, updated) {
    var _a = initial || EMPTY_SELECTIONRANGE, initialStart = _a.start, initialEnd = _a.end;
    var _b = updated || EMPTY_SELECTIONRANGE, updatedStart = _b.start, updatedEnd = _b.end;
    if (initialStart === null || initialEnd === null || updatedStart === null || updatedEnd === null) {
        return false;
    }
    return isEqual(initialStart, updatedStart) && isEqual(initialEnd, updatedEnd);
};
// Polyfill for PropTypes.null
/**
 * @hidden
 */
function nullable(subRequirement) {
    var check = function (required, props, key) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
        if (props[key] === null) {
            return null;
        }
        var sub = required ? subRequirement.isRequired : subRequirement;
        return sub.apply(void 0, utils_spreadArray([props, key], rest, false));
    };
    var fn = check.bind(null, false);
    fn.isRequired = check.bind(null, true);
    return fn;
}
/**
 * @hidden
 */
var viewInRange = function (candidate, min, max) {
    if (min === undefined || max === undefined) {
        return candidate;
    }
    return min <= candidate && candidate <= max
        ? candidate
        : candidate < min
            ? min
            : max;
};
/**
 * @hidden
 */
var MIDNIGHT_DATE = new Date(1980, 0, 1);
/**
 * @hidden
 */
var MIN_DATE = new Date(1900, 0, 1);
/**
 * @hidden
 */
var MAX_DATE = new Date(2099, 11, 31);
/**
 * @hidden
 */
var MIN_TIME = new Date(1980, 0, 1);
/**
 * @hidden
 */
var MAX_TIME = new Date(1980, 0, 1, 23, 59, 59);
var isSet = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 */
var isValidRange = function (min, max) { return (!isSet(min) || !isSet(max) || min <= max); };
/**
 * @hidden
 */
var setTime = function (origin, candidate) {
    var date = (0,clone_date/* cloneDate */.a)(origin);
    date.setHours(candidate.getHours(), candidate.getMinutes(), candidate.getSeconds(), candidate.getMilliseconds());
    return date;
};
/**
 * @hidden
 */
var getToday = function () { return (0,get_date/* getDate */.p)(new Date()); };
/**
 * @hidden
 */
var isInRange = function (candidate, min, max) { return (!candidate || !((min && min > candidate) || (max && max < candidate))); };
/**
 * @hidden
 */
var isInDateRange = function (candidate, min, max) { return (candidate === null
    || !((min && (0,get_date/* getDate */.p)(min) > (0,get_date/* getDate */.p)(candidate))
        || (max && (0,get_date/* getDate */.p)(max) < (0,get_date/* getDate */.p)(candidate)))); };
/**
 * @hidden
 */
var isInSelectionRange = function (value, selectionRange) {
    var _a = selectionRange || SelectionRange_EMPTY_SELECTIONRANGE, start = _a.start, end = _a.end;
    if (!start || !end) {
        return false;
    }
    return start < value && value < end;
};
/**
 * @hidden
 */
var range = function (start, end, step) {
    if (step === void 0) { step = 1; }
    var result = [];
    for (var i = start; i < end; i = i + step) {
        result.push(i);
    }
    return result;
};
/**
 * @hidden
 */
var intersects = function (date, min, max) {
    return min.getTime() <= date.getTime() && date.getTime() <= max.getTime();
};
/**
 * @hidden
 */
var shiftWeekNames = function (names, offset) { return (names.slice(offset).concat(names.slice(0, offset))); };
/**
 * @hidden
 */
var dateInRange = function (candidate, min, max) {
    if (!candidate) {
        return candidate;
    }
    if (min && candidate < min) {
        return (0,clone_date/* cloneDate */.a)(min);
    }
    if (max && candidate > max) {
        return (0,clone_date/* cloneDate */.a)(max);
    }
    return candidate;
};
/**
 * @hidden
 */
var domContainerFactory = function (type) { return function (children, classes, styles) {
    if (classes === void 0) { classes = ''; }
    if (styles === void 0) { styles = {}; }
    var container = document.createElement(type);
    container.className = classes;
    Object.keys(styles).map(function (key) { return container.style[key] = styles[key]; });
    if (typeof children === 'string') {
        container.innerHTML = children || '';
    }
    else {
        (children || []).forEach(function (child) { return child && container.appendChild(child); });
    }
    return container;
}; };
/**
 * @hidden
 */
function debounce(func, wait, options) {
    if (options === void 0) { options = {}; }
    var lastArgs;
    var lastThis;
    var maxWait = options.maxWait;
    var result;
    var timerId;
    var lastCallTime;
    var root = window;
    var lastInvokeTime = 0;
    var leading = false;
    var maxing = false;
    var trailing = true;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    var useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function');
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    wait = +wait || 0;
    function invokeFunc(time) {
        var args = lastArgs;
        var thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function startTimer(pendingFunc, tmr) {
        if (useRAF) {
            root.cancelAnimationFrame(timerId);
            return root.requestAnimationFrame(pendingFunc);
        }
        return setTimeout(pendingFunc, tmr);
    }
    function cancelTimer(id) {
        if (useRAF) {
            return root.cancelAnimationFrame(id);
        }
        clearTimeout(id);
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime;
        var timeSinceLastInvoke = time - lastInvokeTime;
        var timeWaiting = wait - timeSinceLastCall;
        return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime;
        var timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }
    function timerExpired() {
        var time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = startTimer(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            cancelTimer(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now());
    }
    function pending() {
        return timerId !== undefined;
    }
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var time = Date.now();
        var isInvoking = shouldInvoke(time);
        lastArgs = args;
        /* @ts-ignore */
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = startTimer(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    return debounced;
}
/**
 * @hidden
 */
function throttle(func, wait) {
    return debounce(func, wait, {
        leading: true,
        trailing: true,
        'maxWait': wait
    });
}

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/WeekNamesService.js

/**
 * @hidden
 */
var WeekNamesService = /** @class */ (function () {
    function WeekNamesService(intl) {
        this.intl = intl;
    }
    WeekNamesService.prototype.getWeekNames = function (includeWeekNumber) {
        if (includeWeekNumber === void 0) { includeWeekNumber = false; }
        var weekNames = shiftWeekNames(this.intl.dateFormatNames({ nameType: 'short', type: 'days' }), this.intl.firstDay());
        return includeWeekNumber ? [''].concat(weekNames) : weekNames;
    };
    return WeekNamesService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/View.js
var View_extends = (undefined && undefined.__extends) || (function () {
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
var View_assign = (undefined && undefined.__assign) || function () {
    View_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return View_assign.apply(this, arguments);
};









// In case we decide to render content for the next month in the empty cells,
// add k-other-month class to all cells and k-weekend for weekend cells.
// tslint:disable-next-line jsx-use-translation-function
var emptyCell = function (idx) { return (index_js_.createElement("td", { key: idx, className: 'k-calendar-td' }, "\u00A0")); };
/**
 * @hidden
 */
var View = /** @class */ (function (_super) {
    View_extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.intl = null;
        _this.weekService = null;
        _this.buildWeekNumber = function (row, idx) {
            var firstDayOfWeek = _this.firstDate(row);
            if (!firstDayOfWeek) {
                return emptyCell("week-cell-".concat(idx));
            }
            var firstDate = _this.firstDate(row);
            var weekCellValue = _this.getWeekNumber(firstDate);
            var uniqueID = "kendo-react-calendar-week-cell-".concat(weekCellValue);
            var cellProps = {
                className: 'k-alt',
                value: weekCellValue,
                firstDate: firstDate
            };
            return _this.props.weekCell
                ? index_js_.createElement(_this.props.weekCell, View_assign({}, cellProps, { key: uniqueID }), weekCellValue)
                : index_js_.createElement(CalendarWeekCell, View_assign({}, cellProps, { key: uniqueID }), weekCellValue);
        };
        _this.buildRow = function (row) {
            return row.map(function (cell, idx) {
                if (!cell) {
                    return emptyCell(idx);
                }
                var aria = { 'aria-selected': cell.isSelected };
                var uniqueID = "kendo-react-calendar-cell-".concat(cell.value.getTime());
                var cellProps = View_assign(View_assign(View_assign({}, aria), cell), { isDisabled: !cell.isInRange, view: _this.props.activeView, onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave });
                return _this.props.cell
                    ? (index_js_.createElement(_this.props.cell, View_assign({}, cellProps, { key: uniqueID }), cell.formattedValue))
                    : (index_js_.createElement(CalendarCell, View_assign({}, cellProps, { key: uniqueID }), cell.formattedValue));
            });
        };
        _this.firstDate = function (row) {
            var cell = _this.firstWeekDateContext(row);
            return cell ? cell.value : null;
        };
        _this.firstWeekDateContext = function (rowCtx) {
            if (!_this.weekNumber) {
                return null;
            }
            var idx = 0;
            var ctx = rowCtx[idx];
            while (!ctx && idx < rowCtx.length) {
                ctx = rowCtx[++idx];
            }
            return ctx;
        };
        _this.handleClick = function (value, event) {
            var onChange = _this.props.onChange;
            if (onChange && event) {
                var args = {
                    value: (0,clone_date/* cloneDate */.a)(value),
                    target: _this,
                    nativeEvent: event && event.nativeEvent,
                    syntheticEvent: event
                };
                onChange.call(undefined, args);
            }
        };
        _this.handleMouseEnter = function (value) {
            var onCellEnter = _this.props.onCellEnter;
            if (onCellEnter) {
                onCellEnter.call(undefined, (0,clone_date/* cloneDate */.a)(value));
            }
        };
        _this.handleMouseLeave = function (value) {
            var onCellLeave = _this.props.onCellLeave;
            if (onCellLeave) {
                onCellLeave.call(undefined, (0,clone_date/* cloneDate */.a)(value));
            }
        };
        return _this;
    }
    Object.defineProperty(View.prototype, "min", {
        get: function () {
            return this.props.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "max", {
        get: function () {
            return this.props.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isHorizontal", {
        get: function () {
            return this.props.direction === 'horizontal';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isMonthView", {
        get: function () {
            return this.props.activeView === CalendarViewEnum.month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "weekNumber", {
        get: function () {
            return Boolean(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum.month);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "selectedDate", {
        get: function () {
            return this.props.selectedDate !== undefined ? this.props.selectedDate : View.defaultProps.selectedDate;
        },
        enumerable: false,
        configurable: true
    });
    View.prototype.render = function () {
        var _this = this;
        this.intl = (0,index_mjs_.provideIntlService)(this);
        this.weekService = new WeekNamesService(this.intl);
        var weekNames = this.weekService.getWeekNames(this.weekNumber);
        var colSpan = this.props.service.rowLength(this.weekNumber);
        var title = this.props.service.title(this.props.viewDate);
        var time = getToday();
        var viewDate = setTime(this.props.viewDate, time);
        var data = this.props.service.data({
            cellUID: this.props.cellUID,
            min: this.min,
            max: this.max,
            focusedDate: this.props.focusedDate,
            isActiveView: !this.props.bus.canMoveDown(this.props.activeView),
            selectedDate: this.selectedDate,
            selectionRange: this.props.selectionRange,
            viewDate: viewDate
        });
        return (index_js_.createElement(index_js_.Fragment, null,
            (this.isMonthView && this.isHorizontal) && (index_js_.createElement("thead", { role: "rowgroup", className: "k-calendar-thead" },
                index_js_.createElement("tr", { role: "row", className: "k-calendar-tr" }, weekNames.map(function (name, idx) { return (index_js_.createElement("th", { key: idx, className: "k-calendar-th" }, name)); })))),
            index_js_.createElement("tbody", { role: "rowgroup", className: "k-calendar-tbody" },
                !this.isHorizontal && (index_js_.createElement("tr", { role: "presentation", className: "k-calendar-tr" },
                    index_js_.createElement("th", { scope: "col", colSpan: colSpan, className: "k-calendar-caption" }, title))),
                data.map(function (row, idx) {
                    return (index_js_.createElement("tr", { role: "row", className: "k-calendar-tr", key: idx },
                        _this.weekNumber && _this.buildWeekNumber(row, idx),
                        _this.buildRow(row)));
                }))));
    };
    View.prototype.getWeekNumber = function (date) {
        if (!this.weekNumber || !this.intl) {
            return null;
        }
        return (0,week_in_year/* weekInYear */.H)(date, this.intl.firstDay());
    };
    View.propTypes = {
        activeRangeEnd: prop_types_index_js_.oneOf(['start', 'end', null]),
        activeView: prop_types_index_js_.number.isRequired,
        cellUID: prop_types_index_js_.string.isRequired,
        direction: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
        focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
        max: prop_types_index_js_.instanceOf(Date).isRequired,
        min: prop_types_index_js_.instanceOf(Date).isRequired,
        onChange: prop_types_index_js_.func,
        selectedDate: prop_types_index_js_.oneOfType([prop_types_index_js_.instanceOf(Date), prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date))]),
        showWeekNumbers: prop_types_index_js_.bool,
        viewDate: prop_types_index_js_.instanceOf(Date).isRequired
    };
    View.defaultProps = {
        direction: 'vertical',
        selectedDate: getToday(),
        showWeekNumbers: false
    };
    return View;
}(index_js_.Component));

(0,index_mjs_.registerForIntl)(View);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_9e3f1fbb7c6c2ad79369972ea3f3986b/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var es_main_js_ = __webpack_require__(43213);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarHeaderTitle.js
var CalendarHeaderTitle_extends = (undefined && undefined.__extends) || (function () {
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
var CalendarHeaderTitle_assign = (undefined && undefined.__assign) || function () {
    CalendarHeaderTitle_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CalendarHeaderTitle_assign.apply(this, arguments);
};
var CalendarHeaderTitle_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * The `CalendarHeaderTitle` component is internally used for rendering the title of the current calendar view. Also used as a custom `headerTitle` for the [Calendar]({% slug api_dateinputs_calendarprops %}#toc-headertitle) and the [MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %}#toc-headertitle) components.
 *
 * * [Customizing the title for the current Calendar view]({% slug custom_rendering_calendar %}#toc-cells-inside-the-view)
 * * [Customizing the title for the current MultiViewCalendar view]({% slug custom_rendering_multiviewcalendar %}#toc-cells-inside-the-view)
 */
var CalendarHeaderTitle = /** @class */ (function (_super) {
    CalendarHeaderTitle_extends(CalendarHeaderTitle, _super);
    function CalendarHeaderTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return
     * Returns a `<span />` element with the [`value`]({% slug api_dateinputs_calendarheadertitleprops %}#toc-value) of the title as a child.
     */
    CalendarHeaderTitle.prototype.render = function () {
        var _a = this.props, view = _a.view, props = CalendarHeaderTitle_rest(_a, ["view"]);
        return (index_js_.createElement(es_main_js_.Button, CalendarHeaderTitle_assign({ type: "button", fillMode: "flat" }, props), this.props.children));
    };
    return CalendarHeaderTitle;
}(index_js_.PureComponent));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Header.js
var Header_extends = (undefined && undefined.__extends) || (function () {
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
    Header_extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTitle = function () {
            if (!_this.props.currentDate) {
                return '';
            }
            var take = _this.rangeLength - 1;
            var title = _this.props.service.title(_this.props.currentDate);
            var nextDate = _this.props.service.addToDate(_this.props.currentDate, take);
            if (take < 1 || !_this.props.service.isInRange(nextDate, _this.min, _this.max)) {
                return title;
            }
            return "".concat(title, " - ").concat(_this.props.service.title(nextDate));
        };
        _this.handleTitleClick = function (event) {
            if (!_this.canMoveUp) {
                return;
            }
            _this.props.bus.moveUp(_this.props.activeView, event);
        };
        return _this;
    }
    Object.defineProperty(Header.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : Header.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Header.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : Header.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Header.prototype, "rangeLength", {
        get: function () {
            return this.props.rangeLength !== undefined ? this.props.rangeLength : Header.defaultProps.rangeLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Header.prototype, "canMoveUp", {
        get: function () {
            return this.props.bus.canMoveUp(this.props.activeView);
        },
        enumerable: false,
        configurable: true
    });
    Header.prototype.render = function () {
        var title = this.getTitle();
        var titleClassNames = (0,main_js_.classNames)('k-calendar-title');
        var headerTitleProps = {
            children: title,
            value: title,
            view: this.props.activeView,
            className: titleClassNames,
            onClick: this.handleTitleClick,
            disabled: !this.canMoveUp
        };
        var headerTitle = this.props.headerTitle
            ? index_js_.createElement(this.props.headerTitle, Header_assign({}, headerTitleProps), title)
            : index_js_.createElement(CalendarHeaderTitle, Header_assign({}, headerTitleProps), title);
        return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-calendar-header', {
                'k-vstack': this.props.verticalView,
                'k-hstack': !this.props.verticalView
            }) },
            headerTitle,
            index_js_.createElement("span", { className: "k-spacer" }),
            index_js_.createElement("span", { className: "k-calendar-nav k-hstack" }, this.props.commands)));
    };
    Header.propTypes = {
        activeView: prop_types_index_js_.number.isRequired,
        currentDate: prop_types_index_js_.instanceOf(Date).isRequired,
        max: prop_types_index_js_.instanceOf(Date).isRequired,
        min: prop_types_index_js_.instanceOf(Date).isRequired,
        rangeLength: prop_types_index_js_.number
    };
    Header.defaultProps = {
        rangeLength: 1,
        min: MIN_DATE,
        max: MAX_DATE
    };
    return Header;
}(index_js_.Component));

(0,index_mjs_.registerForLocalization)(Header);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/messages/index.js
var messages_a;
/**
 * @hidden
 */
var prevView = 'multiviewcalendar.prevView';
/**
 * @hidden
 */
var nextView = 'multiviewcalendar.nextView';
/**
 * @hidden
 */
var increaseValue = 'dateinput.increment';
/**
 * @hidden
 */
var decreaseValue = 'dateinput.decrement';
/**
 * @hidden
 */
var today = 'calendar.today';
/**
 * @hidden
 */
var toggleCalendar = 'datepicker.toggleCalendar';
/**
 * @hidden
 */
var swapStartEnd = 'daterangepicker.swapStartEnd';
/**
 * @hidden
 */
var start = 'daterangepicker.start';
/**
 * @hidden
 */
var end = 'daterangepicker.end';
/**
 * @hidden
 */
var separator = 'daterangepicker.separator';
/**
 * @hidden
 */
var toggleDateTimeSelector = 'datetimepicker.toggleDateTimeSelector';
/**
 * @hidden
 */
var now = 'timepicker.now';
/**
 * @hidden
 */
var selectNow = 'timepicker.selectNow';
/**
 * @hidden
 */
var timePickerCancel = 'timepicker.cancel';
/**
 * @hidden
 */
var timePickerSet = 'timepicker.set';
/**
 * @hidden
 */
var toggleTimeSelector = 'timepicker.toggleTimeSelector';
/**
 * @hidden
 */
var toggleClock = 'timepicker.toggleClock';
/**
 * @hidden
 */
var date = 'datetimepicker.date';
/**
 * @hidden
 */
var time = 'datetimepicker.time';
/**
 * @hidden
 */
var dateTimePickerCancel = 'datetimepicker.cancel';
/**
 * @hidden
 */
var dateTimePickerSet = 'datetimepicker.set';
/**
 * @hidden
 */
var dateRangePickerCancel = 'daterangepicker.cancel';
/**
 * @hidden
 */
var dateRangePickerSet = 'daterangepicker.set';
/**
 * @hidden
 */
var messages = (messages_a = {},
    messages_a[today] = 'TODAY',
    messages_a[now] = 'NOW',
    messages_a[timePickerSet] = 'Set',
    messages_a[timePickerCancel] = 'Cancel',
    messages_a[date] = 'Date',
    messages_a[time] = 'Time',
    messages_a[dateTimePickerCancel] = 'Cancel',
    messages_a[dateTimePickerSet] = 'Set',
    messages_a[dateRangePickerCancel] = 'Cancel',
    messages_a[dateRangePickerSet] = 'Set',
    messages_a[start] = 'Start',
    messages_a[end] = 'End',
    messages_a[separator] = ' ',
    messages_a[selectNow] = 'Select Now',
    messages_a[toggleTimeSelector] = 'Toggle TimeSelector',
    messages_a[toggleClock] = 'Toggle Clock',
    messages_a[increaseValue] = 'Increase value',
    messages_a[decreaseValue] = 'Decrease value',
    messages_a[toggleCalendar] = 'Toggle calendar',
    messages_a[prevView] = 'Navigate to previous view',
    messages_a[nextView] = 'Navigate to next view',
    messages_a[swapStartEnd] = 'Swap start and end values',
    messages_a[toggleDateTimeSelector] = 'Toggle date-time selector',
    messages_a);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/TodayCommand.js
var TodayCommand_extends = (undefined && undefined.__extends) || (function () {
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









var TodayCommand = /** @class */ (function (_super) {
    TodayCommand_extends(TodayCommand, _super);
    function TodayCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localization = null;
        _this.handleClick = function (syntheticEvent) {
            if (!_this.todayIsInRange) {
                return;
            }
            if (_this.props.onClick) {
                var event_1 = {
                    syntheticEvent: syntheticEvent,
                    nativeEvent: syntheticEvent.nativeEvent,
                    value: dateInRange(getToday(), _this.min, _this.max),
                    target: _this,
                    isTodayClick: true
                };
                _this.props.onClick.call(undefined, event_1);
            }
        };
        return _this;
    }
    Object.defineProperty(TodayCommand.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : TodayCommand.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodayCommand.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : TodayCommand.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TodayCommand.prototype, "todayIsInRange", {
        get: function () {
            return isInRange(getToday(), (0,get_date/* getDate */.p)(this.min), (0,get_date/* getDate */.p)(this.max));
        },
        enumerable: false,
        configurable: true
    });
    TodayCommand.prototype.render = function () {
        this.localization = (0,index_mjs_.provideLocalizationService)(this);
        var todayMessage = this.localization.toLanguageString(today, messages[today]);
        var todayClassNames = (0,main_js_.classNames)('k-calendar-nav-today', {
            'k-disabled': this.props.disabled
        });
        return (index_js_.createElement(es_main_js_.Button, { className: todayClassNames, onClick: this.handleClick, tabIndex: this.props.tabIndex, fillMode: 'flat' }, todayMessage));
    };
    TodayCommand.propTypes = {
        max: prop_types_index_js_.instanceOf(Date).isRequired,
        min: prop_types_index_js_.instanceOf(Date).isRequired,
        onClick: prop_types_index_js_.func,
        disabled: prop_types_index_js_.bool
    };
    TodayCommand.defaultProps = {
        min: MIN_DATE,
        max: MAX_DATE
    };
    return TodayCommand;
}(index_js_.Component));

(0,index_mjs_.registerForLocalization)(TodayCommand);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/ViewList.js
var ViewList_extends = (undefined && undefined.__extends) || (function () {
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











var VIEWS_COUNT = 5;
/**
 * @hidden
 */
var ViewList = /** @class */ (function (_super) {
    ViewList_extends(ViewList, _super);
    function ViewList(props) {
        var _this = _super.call(this, props) || this;
        _this.virtualization = null;
        _this.calendarView = null;
        _this.table = null;
        _this.intl = null;
        _this.bottomOffset = 0;
        _this.viewOffset = 0;
        _this.viewHeight = 0;
        _this._element = null;
        _this.isActive = false;
        _this.animateToIndex = true;
        _this.shouldScroll = false;
        _this.focusActiveDate = function () {
            if (!_this._element) {
                return;
            }
            var focusedCell = _this._element.querySelector('td.k-focus');
            var nextActiveCell = _this._element.querySelector('.k-state-pending-focus');
            if (focusedCell && focusedCell[0]) {
                focusedCell[0].classList.remove('k-focus');
            }
            if (nextActiveCell) {
                nextActiveCell.classList.add('k-focus');
            }
            _this.isActive = true;
        };
        _this.blurActiveDate = function () {
            if (!_this._element) {
                return;
            }
            var focusedCell = _this._element.querySelector('td.k-focus');
            if (focusedCell) {
                focusedCell.classList.remove('k-focus');
            }
            _this.isActive = false;
        };
        _this.handleVirtualizationMount = function (virtualization) {
            _this.virtualization = virtualization;
            if (_this.virtualization && _this.table) {
                _this.table.style.transform = "translateY(".concat(_this.viewOffset, "px)");
                var viewDate = dateInRange(_this.props.focusedDate, _this.props.min, _this.props.max);
                var indexToScroll = _this.props.service.skip(viewDate, _this.props.min);
                _this.virtualization.scrollToIndex(indexToScroll);
            }
        };
        _this.buildMonthView = function (cols, weekNames) {
            return (index_js_.createElement("table", { key: "calendar-view-list-weekdays", className: "k-calendar-table k-calendar-weekdays", role: "grid", tabIndex: _this.props.tabIndex },
                index_js_.createElement("colgroup", null, cols.map(function (_, idx) { return (index_js_.createElement("col", { key: idx })); })),
                index_js_.createElement("thead", { className: "k-calendar-thead" },
                    index_js_.createElement("tr", { className: "k-calendar-tr" }, weekNames.map(function (name, idx) { return (index_js_.createElement("th", { key: idx, className: "k-calendar-th" }, name)); })))));
        };
        _this.buildDates = function (cols, dates) {
            var cellUID = _this.props.cellUID;
            return (index_js_.createElement("table", { className: "k-calendar-table", ref: function (table) { return _this.table = table; }, role: "grid", tabIndex: _this.props.tabIndex, "aria-activedescendant": cellUID + _this.props.focusedDate.getTime() },
                index_js_.createElement("colgroup", null, cols.map(function (_, idx) { return (index_js_.createElement("col", { key: idx })); })),
                dates.map(function (date) { return (index_js_.createElement(View, { ref: function (el) { if (!_this.calendarView) {
                        _this.calendarView = el;
                    } }, key: date.getTime(), activeView: _this.props.activeView, viewDate: date, min: _this.props.min, max: _this.props.max, cellUID: cellUID, focusedDate: _this.props.focusedDate, cell: _this.props.cell, selectedDate: _this.props.value, showWeekNumbers: _this.weekNumber, onChange: _this.handleDateChange, bus: _this.props.bus, service: _this.props.service, weekCell: _this.props.weekCell })); })));
        };
        _this.calculateHeights = function () {
            if (!_this.props.dom) {
                return;
            }
            var scrollableHeight = _this.props.activeView === CalendarViewEnum.month ?
                _this.props.dom.scrollableContentHeight :
                _this.props.dom.scrollableYearContentHeight;
            _this.bottomOffset = scrollableHeight - _this.props.dom.viewHeight(_this.props.activeView);
            _this.viewOffset = -1 * _this.props.dom.headerHeight;
            _this.viewHeight = _this.props.dom.viewHeight(_this.props.activeView) || 1;
        };
        _this.getTake = function (skip, total) {
            return Math.min(total - skip, _this.take);
        };
        _this.handleScrollAction = function (_a) {
            var index = _a.index, scrollAction = _a.scrollAction, pageAction = _a.pageAction;
            var skip = pageAction ? pageAction.skip : _this.state.skip;
            if (_this.state.index !== index || _this.state.skip !== skip) {
                _this.setState({ index: index, skip: skip });
            }
            if (_this.table && scrollAction) {
                var translate = "translateY(".concat(scrollAction.offset, "px)");
                _this.table.style.transform = translate;
            }
        };
        _this.handleTodayClick = function (event) {
            _this.shouldScroll = true;
            _this.handleDateChange.call(undefined, event, true);
        };
        _this.handleDateChange = function (event, isTodayClick) {
            if (isTodayClick === void 0) { isTodayClick = false; }
            var onChange = _this.props.onChange;
            if (onChange) {
                var args = {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: (0,clone_date/* cloneDate */.a)(event.value),
                    target: _this,
                    isTodayClick: isTodayClick
                };
                onChange.call(undefined, args);
            }
        };
        _this.lastView = _this.props.activeView;
        _this.lastFocus = _this.props.focusedDate;
        _this.state = {
            skip: _this.props.service.skip(_this.props.focusedDate, _this.props.min),
            index: _this.props.service.skip(_this.props.focusedDate, _this.props.min)
        };
        return _this;
    }
    Object.defineProperty(ViewList.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewList.prototype, "weekNames", {
        get: function () {
            this.intl = (0,index_mjs_.provideIntlService)(this);
            var weekNames = shiftWeekNames(this.intl.dateFormatNames({ nameType: 'short', type: 'days' }), this.intl.firstDay());
            return this.weekNumber ? [''].concat(weekNames) : weekNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewList.prototype, "weekNumber", {
        get: function () {
            return Boolean(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum.month);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewList.prototype, "take", {
        get: function () {
            return this.props.take !== undefined ? this.props.take : ViewList.defaultProps.take;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewList.prototype, "animate", {
        get: function () {
            return Boolean(this.props.smoothScroll && this.animateToIndex);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewList.prototype, "todayIsInRange", {
        get: function () {
            return isInRange(getToday(), (0,get_date/* getDate */.p)(this.props.min), (0,get_date/* getDate */.p)(this.props.max));
        },
        enumerable: false,
        configurable: true
    });
    ViewList.prototype.componentDidUpdate = function (_prevProps, _prevState) {
        this.shouldScroll = false;
        if (this.indexToScroll !== undefined && this.virtualization) {
            this.virtualization[this.animate ? 'animateToIndex' : 'scrollToIndex'](this.indexToScroll);
        }
        if (this.isActive) {
            this.focusActiveDate();
        }
        this.lastView = this.props.activeView;
        // this.lastFocus = this.props.focusedDate;
        this.indexToScroll = undefined;
    };
    ViewList.prototype.render = function () {
        var _this = this;
        this.calculateHeights();
        var didViewChange = this.lastView !== this.props.activeView;
        var focusedDate = dateInRange(this.props.focusedDate, this.props.min, this.props.max);
        var skip = !didViewChange ? this.state.skip : this.props.service.skip(focusedDate, this.props.min);
        var total = this.props.service.total(this.props.min, this.props.max);
        var take = this.getTake(skip, total);
        var viewDate = this.props.service.addToDate(this.props.min, skip);
        var activeDate = this.props.service.addToDate(this.props.min, this.state.index);
        var cols = new Array(this.props.service.rowLength(this.weekNumber)).fill('');
        var didViewChanged = this.props.activeView !== this.lastView;
        this.animateToIndex = !didViewChanged;
        if (didViewChanged
            || !(0,is_equal_date/* isEqualDate */.$)(this.lastFocus, focusedDate)
            || this.shouldScroll
            || (!this.props.shouldScroll || this.props.shouldScroll())) {
            this.indexToScroll = this.props.service.skip(focusedDate, this.props.min);
        }
        this.lastFocus = focusedDate;
        var rootClassNames = (0,main_js_.classNames)('k-calendar-view k-vstack', {
            'k-calendar-monthview': this.props.activeView === CalendarViewEnum.month,
            'k-calendar-yearview': this.props.activeView === CalendarViewEnum.year,
            'k-calendar-decadeview': this.props.activeView === CalendarViewEnum.decade,
            'k-calendar-centuryview': this.props.activeView === CalendarViewEnum.century
        });
        var dates = this.buildDates(cols, this.props.service.datesList(viewDate, take));
        var viewListBody = (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement(Header, { key: "calendar-view-list-header", currentDate: activeDate, min: this.props.min, max: this.props.max, activeView: this.props.activeView, bus: this.props.bus, service: this.props.service, headerTitle: this.props.headerTitle, commands: (index_js_.createElement(index_js_.Fragment, null,
                    index_js_.createElement(TodayCommand, { min: this.props.min, max: this.props.max, onClick: this.handleTodayClick, disabled: !this.todayIsInRange, tabIndex: this.props.tabIndex }))) }),
            this.props.activeView === CalendarViewEnum.month && this.buildMonthView(cols, this.weekNames),
            index_js_.createElement(Virtualization, { key: "calendar-view-list-content", skip: skip, take: this.take, total: total, itemHeight: this.viewHeight, topOffset: this.viewOffset, bottomOffset: this.bottomOffset, scrollOffsetSize: this.viewOffset, maxScrollDifference: this.viewHeight, onScroll: this.props.onScroll, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, children: dates, tabIndex: this.props.tabIndex })));
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, className: rootClassNames }, this.props.dom.didCalculate ? viewListBody : null));
    };
    ViewList.propTypes = {
        activeView: prop_types_index_js_.number.isRequired,
        bottomOffset: prop_types_index_js_.number,
        cellUID: prop_types_index_js_.string.isRequired,
        focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
        max: prop_types_index_js_.instanceOf(Date).isRequired,
        min: prop_types_index_js_.instanceOf(Date).isRequired,
        onChange: prop_types_index_js_.func,
        showWeekNumbers: prop_types_index_js_.bool,
        smoothScroll: prop_types_index_js_.bool,
        take: prop_types_index_js_.number,
        value: prop_types_index_js_.instanceOf(Date),
        viewHeight: prop_types_index_js_.number,
        viewOffset: prop_types_index_js_.number,
        tabIndex: prop_types_index_js_.number
    };
    ViewList.defaultProps = {
        take: VIEWS_COUNT,
        showWeekNumbers: false,
        smoothScroll: true
    };
    return ViewList;
}(index_js_.Component));

(0,index_mjs_.registerForIntl)(ViewList);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal.js
var is_equal = __webpack_require__(43462);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarNavigationItem.js
var CalendarNavigationItem_extends = (undefined && undefined.__extends) || (function () {
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
var CalendarNavigationItem_assign = (undefined && undefined.__assign) || function () {
    CalendarNavigationItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CalendarNavigationItem_assign.apply(this, arguments);
};
var CalendarNavigationItem_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * The `CalendarNavigationItem` component is internally used for rendering the items in the side navigation of the Calendar. Also used as a custom navigation item for the [Calendar]({% slug api_dateinputs_calendarprops %}#toc-navigationitem) ([see example]({% slug custom_rendering_calendar %}#toc-items-in-the-side-navigation)).
 */
var CalendarNavigationItem = /** @class */ (function (_super) {
    CalendarNavigationItem_extends(CalendarNavigationItem, _super);
    function CalendarNavigationItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, value = _a.value;
            if (onClick) {
                onClick.call(undefined, value, event);
            }
        };
        return _this;
    }
    /**
     * @return
     * Returns a `<li />` element with a `<span />` inside. The text inside represents the [`value`]({% slug api_dateinputs_calendarnavigationitemprops %}#toc-value) of the `navigationItem`.
     */
    CalendarNavigationItem.prototype.render = function () {
        var _a = this.props, isRangeStart = _a.isRangeStart, value = _a.value, text = _a.text, other = CalendarNavigationItem_rest(_a, ["isRangeStart", "value", "text"]);
        return (index_js_.createElement("li", CalendarNavigationItem_assign({}, other, { onClick: this.handleClick }),
            index_js_.createElement("span", { className: (0,main_js_.classNames)({ 'k-calendar-navigation-marker': isRangeStart }) }, this.props.children)));
    };
    return CalendarNavigationItem;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Navigation.js
var Navigation_extends = (undefined && undefined.__extends) || (function () {
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
var Navigation_assign = (undefined && undefined.__assign) || function () {
    Navigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Navigation_assign.apply(this, arguments);
};






var ITEMS_COUNT = 30;
/**
 * @hidden
 */
var Navigation = /** @class */ (function (_super) {
    Navigation_extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.virtualization = null;
        _this.list = null;
        _this.itemHeight = 0;
        _this.topOffset = 0;
        _this.maxViewHeight = 0;
        _this.bottomOffset = 0;
        _this.handleVirtualizationMount = function (virtualization) {
            _this.virtualization = virtualization;
            if (_this.virtualization && _this.list) {
                _this.list.style.transform = "translateY(".concat(_this.topOffset, "px)");
                var viewDate = dateInRange(_this.props.focusedDate, _this.props.min, _this.props.max);
                var indexToScroll = _this.props.service.skip(viewDate, _this.props.min);
                _this.virtualization.scrollToIndex(indexToScroll);
            }
        };
        _this.buildNavigationItem = function (date) {
            var text = _this.props.service.navigationTitle(date);
            var isRangeStart = _this.props.service.isRangeStart(date);
            var uniqueID = "kendo-react-calendar-nav-item-".concat(date.getTime());
            var navigationItemProps = {
                text: text,
                value: date,
                isRangeStart: isRangeStart,
                view: _this.props.activeView,
                onClick: _this.handleDateChange
            };
            return _this.props.navigationItem
                ? (index_js_.createElement(_this.props.navigationItem, Navigation_assign({}, navigationItemProps, { key: uniqueID }), text))
                : (index_js_.createElement(CalendarNavigationItem, Navigation_assign({}, navigationItemProps, { key: uniqueID }), text));
        };
        _this.calculateHeights = function () {
            var calendarHeight = _this.props.dom.calendarHeight;
            _this.itemHeight = _this.props.dom.navigationItemHeight || 1;
            _this.maxViewHeight = _this.props.dom.monthViewHeight;
            _this.topOffset = (calendarHeight - _this.itemHeight) / 2;
            _this.bottomOffset = calendarHeight - _this.itemHeight;
        };
        _this.handleDateChange = function (value, event) {
            var onChange = _this.props.onChange;
            if (onChange && event) {
                var args = {
                    value: (0,clone_date/* cloneDate */.a)(value),
                    target: _this,
                    nativeEvent: event && event.nativeEvent,
                    syntheticEvent: event
                };
                onChange.call(undefined, args);
            }
        };
        _this.handleScrollAction = function (_a) {
            var scrollAction = _a.scrollAction, pageAction = _a.pageAction;
            var skip = pageAction ? pageAction.skip : _this.state.skip;
            if (_this.state.skip !== skip) {
                _this.setState({ skip: skip });
            }
            if (_this.list && scrollAction) {
                var translate = "translateY(".concat(scrollAction.offset, "px)");
                _this.list.style.transform = translate;
            }
        };
        _this.lastView = _this.props.activeView;
        _this.lastFocus = _this.props.focusedDate;
        var skip = _this.props.service.skip(_this.props.focusedDate, _this.props.min);
        var total = _this.props.service.total(_this.props.min, _this.props.max);
        _this.state = {
            skip: (skip - _this.getTake(skip, total) > 0) ? skip : 0
        };
        return _this;
    }
    Object.defineProperty(Navigation.prototype, "take", {
        get: function () {
            return this.props.take !== undefined
                ? this.props.take
                : Navigation.defaultProps.take;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    Navigation.prototype.componentDidUpdate = function (_prevProps, _prevState) {
        if (this.indexToScroll !== undefined && this.virtualization) {
            this.virtualization.scrollToIndex(this.indexToScroll);
        }
        this.lastView = this.props.activeView;
        this.lastFocus = this.props.focusedDate;
        this.indexToScroll = undefined;
    };
    Navigation.prototype.render = function () {
        var _this = this;
        this.calculateHeights();
        var didViewChange = this.lastView !== this.props.activeView;
        var focusedDate = dateInRange(this.props.focusedDate, this.props.min, this.props.max);
        var skip = !didViewChange ? this.state.skip : this.props.service.skip(focusedDate, this.props.min);
        var total = this.props.service.total(this.props.min, this.props.max);
        var take = this.getTake(skip, total);
        var viewDate = this.props.service.addToDate(this.props.min, skip);
        var dates = this.props.service.datesList(viewDate, take);
        if (this.props.activeView !== this.lastView
            || !(0,is_equal/* isEqual */.n)(focusedDate, this.lastFocus)) {
            this.indexToScroll = this.props.service.skip(focusedDate, this.props.min);
        }
        var navigationBody = (index_js_.createElement(Virtualization, { skip: skip, take: this.take, total: total, itemHeight: this.itemHeight, topOffset: this.topOffset, bottomOffset: this.bottomOffset, onScroll: this.props.onScroll, maxScrollDifference: this.maxViewHeight, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, tabIndex: this.props.tabIndex },
            index_js_.createElement("ul", { ref: function (el) { _this.list = el; }, className: "k-reset" }, dates.map(function (date) { return (_this.buildNavigationItem(date)); }))));
        return (index_js_.createElement("div", { className: "k-calendar-navigation" },
            index_js_.createElement("span", { className: "k-calendar-navigation-highlight" }),
            this.props.dom.didCalculate ? navigationBody : null));
    };
    Navigation.prototype.getTake = function (skip, total) {
        return Math.min(total - skip, this.take);
    };
    Navigation.propTypes = {
        activeView: prop_types_index_js_.number.isRequired,
        focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
        max: prop_types_index_js_.instanceOf(Date).isRequired,
        min: prop_types_index_js_.instanceOf(Date).isRequired,
        onChange: prop_types_index_js_.func,
        take: prop_types_index_js_.number,
        tabIndex: prop_types_index_js_.number
    };
    Navigation.defaultProps = {
        take: ITEMS_COUNT
    };
    return Navigation;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/DOMService.js



/**
 * @hidden
 */
var DOMService = /** @class */ (function () {
    function DOMService() {
        // heights
        this.calendarHeight = 0;
        this.headerHeight = 0;
        this.monthViewHeight = 0;
        this.yearViewHeight = 0;
        this.decadeViewHeight = 0;
        this.centuryViewHeight = 0;
        this.navigationItemHeight = 0;
        this.scrollableContentHeight = 0;
        this.scrollableYearContentHeight = 0;
        // widths
        this.calendarWidth = 0;
        this.monthViewWidth = 0;
        this.yearViewWidth = 0;
        this.decadeViewWidth = 0;
        this.centuryViewWidth = 0;
        this.scrollableContentWidth = 0;
        this.didCalculate = false;
        this.hostContainer = null;
    }
    DOMService.prototype.ensureHeights = function () {
        if (this.calendarHeight !== undefined) {
            return;
        }
        this.calculateHeights();
    };
    DOMService.prototype.calculateHeights = function (container) {
        var _this = this;
        if (!main_js_.canUseDOM) {
            return;
        }
        var div = domContainerFactory('div');
        var ul = domContainerFactory('ul');
        var li = domContainerFactory('li');
        var td = domContainerFactory('td');
        var th = domContainerFactory('th');
        var tr = domContainerFactory('tr');
        var tbody = domContainerFactory('tbody');
        var thead = domContainerFactory('thead');
        var table = domContainerFactory('table');
        var monthHeader = function () { return (div("\n            <span class=\"k-button k-button-md k-button-rectangle k-button-solid k-button-solid-base k-button-flat k-calendar-title\">\n                <span className=\"k-button-text\">March 2017</span>\n            </span>\n            <span class=\"k-spacer\"></span>\n            <span class=\"k-calendar-nav k-hstack\"><button class=\"k-calendar-nav-today\">TODAY</button></span>\n        ", 'k-calendar-header k-hstack')); };
        var monthWeekHeader = function () { return (table([
            thead([
                tr([th('MO', 'k-calendar-th')], 'k-calendar-tr')
            ], 'k-calendar-thead')
        ], 'k-calendar-table k-calendar-weekdays')); };
        var repeat = function (count, mapper) { return new Array(count).fill('1').map(mapper); };
        var content = function (rows, cells) {
            if (cells === void 0) { cells = 1; }
            return (table([
                tbody([tr([td('1', 'k-calendar-td k-alt')])].concat(repeat(rows, function () { return tr(repeat(cells, function (c) { return td("<span class=\"k-link\">".concat(c, "</span>"), 'k-calendar-td'); }), 'k-calendar-tr'); })), 'k-calendar-tbody')
            ], 'k-calendar-table'));
        };
        var scrollable = function (children) { return div(children, 'k-content k-scrollable'); };
        var view = function (contentElement, className, renderWeekHeader) { return (div(renderWeekHeader
            ? [
                monthHeader(),
                monthWeekHeader(),
                scrollable([contentElement, contentElement])
            ]
            : [
                monthHeader(),
                scrollable([contentElement, contentElement])
            ], className, { left: '-10000px', position: 'absolute' })); };
        var navigationList = (function () {
            var navElement;
            return function () {
                if (!main_js_.canUseDOM) {
                    return null;
                }
                if (!navElement) {
                    navElement = div([scrollable([ul([li('<span>FEB</span>')])])], 'k-calendar-navigation', { left: '0px', position: 'absolute' });
                }
                return navElement;
            };
        })();
        var viewFactory = function (_a, className, renderWeekHeader) {
            var cells = _a.cells, rows = _a.rows;
            var viewElement;
            return function () {
                if (!main_js_.canUseDOM) {
                    return null;
                }
                if (!viewElement) {
                    viewElement = view(content(rows, cells), className, renderWeekHeader);
                }
                return viewElement;
            };
        };
        var getScrollable = function (element) { return element.querySelector('.k-scrollable'); };
        var horizontal = function (element) {
            var scrollableElement = getScrollable(element);
            scrollableElement.className = "".concat(scrollableElement.className, " k-scrollable-horizontal");
            return element;
        };
        var monthView = viewFactory({ cells: 7, rows: 6 }, 'k-calendar-view k-calendar-monthview k-vstack', true);
        var yearView = viewFactory({ cells: 5, rows: 3 }, 'k-calendar-view k-calendar-yearview', false);
        var decadeView = viewFactory({ cells: 5, rows: 2 }, 'k-calendar-view k-calendar-decadeview', false);
        var horzMonthView = function () { return horizontal(monthView()); };
        var horzYearView = function () { return horizontal(yearView()); };
        var horzDecadeView = function () { return horizontal(decadeView()); };
        var height = function (element) { return (parseFloat(window.getComputedStyle(element).height) || element.offsetHeight); };
        var width = function (element) {
            var styles = window.getComputedStyle(element);
            var computed = parseFloat(styles.width)
                + parseFloat(styles.paddingLeft)
                + parseFloat(styles.paddingRight);
            return computed || element.offsetWidth;
        };
        var getBody = function (element) { return element.querySelector('tbody'); };
        this.didCalculate = true;
        if (container) {
            this.hostContainer = container;
        }
        this.batch(monthView(), function (contentElement) {
            var viewElement = getBody(contentElement);
            _this.calendarHeight = height(contentElement);
            _this.monthViewHeight = height(viewElement);
            _this.headerHeight = height(viewElement.children[0]);
            _this.scrollableContentHeight = height(getScrollable(contentElement));
        });
        this.batch(horzMonthView(), function (contentElement) {
            var viewElement = getBody(contentElement);
            _this.calendarWidth = width(contentElement);
            _this.monthViewWidth = width(viewElement);
            _this.scrollableContentWidth = width(getScrollable(contentElement));
        });
        this.batch(yearView(), function (contentElement) {
            _this.yearViewHeight = height(getBody(contentElement));
            _this.scrollableYearContentHeight = height(getScrollable(contentElement));
        });
        this.batch(horzYearView(), function (contentElement) {
            _this.yearViewWidth = width(getBody(contentElement));
        });
        this.batch(decadeView(), function (contentElement) {
            _this.decadeViewHeight = height(getBody(contentElement));
            _this.centuryViewHeight = _this.decadeViewHeight;
        });
        this.batch(horzDecadeView(), function (contentElement) {
            _this.decadeViewWidth = width(getBody(contentElement));
            _this.centuryViewWidth = _this.decadeViewWidth;
        });
        this.batch(navigationList(), function (contentElement) {
            _this.navigationItemHeight = height(contentElement.querySelector('li'));
        });
    };
    DOMService.prototype.viewHeight = function (viewType) {
        return this.viewDimension(viewType, 'height');
    };
    DOMService.prototype.viewWidth = function (viewType) {
        return this.viewDimension(viewType, 'width');
    };
    DOMService.prototype.viewDimension = function (viewType, dimension) {
        var viewProp = dimension === 'height' ? 'ViewHeight' : 'ViewWidth';
        switch (viewType) {
            case CalendarViewEnum.month:
                return this["month".concat(viewProp)];
            case CalendarViewEnum.year:
                return this["year".concat(viewProp)];
            case CalendarViewEnum.decade:
                return this["decade".concat(viewProp)];
            case CalendarViewEnum.century:
                return this["century".concat(viewProp)];
            default:
                return 1;
        }
    };
    DOMService.prototype.batch = function (contentElement, action) {
        var hostContainer = this.hostContainer || document.body;
        var appendedContent = hostContainer.appendChild(contentElement);
        action(appendedContent);
        hostContainer.removeChild(appendedContent);
    };
    return DOMService;
}());


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-decades.js
var add_decades = __webpack_require__(89236);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-centuries.js
var add_centuries = __webpack_require__(30701);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-decade-of-century.js
var first_decade_of_century = __webpack_require__(39027);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-decade-of-century.js
var last_decade_of_century = __webpack_require__(60857);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-year-of-decade.js
var first_year_of_decade = __webpack_require__(92922);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-centuries.js
var duration_in_centuries = __webpack_require__(37290);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/NavigationAction.js
/**
 * @hidden
 */
var Action;
(function (Action) {
    Action[Action["Left"] = 0] = "Left";
    Action[Action["Right"] = 1] = "Right";
    Action[Action["Up"] = 2] = "Up";
    Action[Action["Down"] = 3] = "Down";
    Action[Action["PrevView"] = 4] = "PrevView";
    Action[Action["NextView"] = 5] = "NextView";
    Action[Action["FirstInView"] = 6] = "FirstInView";
    Action[Action["LastInView"] = 7] = "LastInView";
    Action[Action["LowerView"] = 8] = "LowerView";
    Action[Action["UpperView"] = 9] = "UpperView";
})(Action || (Action = {}));

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/CenturyViewService.js
var CenturyViewService_a;
/* tslint:disable:object-literal-sort-keys */



var EMPTY_DATA = [[]];
var CELLS_LENGTH = 4;
var ROWS_LENGTH = 3;
var ACTIONS = (CenturyViewService_a = {},
    CenturyViewService_a[Action.Left] = function (date) { return (0,add_decades/* addDecades */.B)(date, -1); },
    CenturyViewService_a[Action.Up] = function (date) { return (0,add_decades/* addDecades */.B)(date, -5); },
    CenturyViewService_a[Action.Right] = function (date) { return (0,add_decades/* addDecades */.B)(date, 1); },
    CenturyViewService_a[Action.Down] = function (date) { return (0,add_decades/* addDecades */.B)(date, 5); },
    CenturyViewService_a[Action.PrevView] = function (date) { return (0,add_centuries/* addCenturies */.U)(date, -1); },
    CenturyViewService_a[Action.NextView] = function (date) { return (0,add_centuries/* addCenturies */.U)(date, 1); },
    CenturyViewService_a[Action.FirstInView] = function (date) { return (0,first_decade_of_century/* firstDecadeOfCentury */.K)(date); },
    CenturyViewService_a[Action.LastInView] = function (date) { return (0,last_decade_of_century/* lastDecadeOfCentury */.a)(date); },
    CenturyViewService_a);
/**
 * @hidden
 */
var CenturyViewService = /** @class */ (function () {
    function CenturyViewService() {
    }
    CenturyViewService.prototype.addToDate = function (min, skip) {
        return (0,add_centuries/* addCenturies */.U)(min, skip);
    };
    CenturyViewService.prototype.datesList = function (start, count) {
        return range(0, count).map(function (i) { return (0,add_centuries/* addCenturies */.U)(start, i); });
    };
    CenturyViewService.prototype.data = function (options) {
        var _this = this;
        var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a = options.selectionRange, selectionRange = _a === void 0 ? SelectionRange_EMPTY_SELECTIONRANGE : _a, viewDate = options.viewDate;
        if (!viewDate) {
            return EMPTY_DATA;
        }
        var cells = range(0, CELLS_LENGTH);
        var firstDate = (0,first_decade_of_century/* firstDecadeOfCentury */.K)(viewDate);
        var lastDate = (0,last_decade_of_century/* lastDecadeOfCentury */.a)(viewDate);
        var today = getToday();
        return range(0, ROWS_LENGTH).map(function (rowOffset) {
            var baseDate = (0,add_decades/* addDecades */.B)(firstDate, rowOffset * CELLS_LENGTH);
            return cells.map(function (cellOffset) {
                var cellDate = _this.normalize((0,add_decades/* addDecades */.B)(baseDate, cellOffset), min, max);
                var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
                var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
                var isInMiddle = !isRangeStart && !isRangeEnd;
                var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
                var isSelected = isActiveView && (!Array.isArray(selectedDate)
                    ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate)
                    : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
                return intersects(cellDate, firstDate, lastDate) ? ({
                    formattedValue: _this.value(cellDate),
                    id: "".concat(cellUID).concat(cellDate.getTime()),
                    isFocused: _this.isEqual(cellDate, focusedDate),
                    isSelected: isSelected,
                    isWeekend: false,
                    isInRange: isInRange(cellDate, min, max),
                    isRangeStart: isRangeStart,
                    isRangeMid: isRangeMid,
                    isRangeEnd: isRangeEnd,
                    isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
                    isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
                    isToday: _this.isEqual(cellDate, today),
                    title: _this.cellTitle(cellDate),
                    value: cellDate
                }) : null;
            });
        });
    };
    CenturyViewService.prototype.isSelectedFromArray = function (candidate, dates, min, max) {
        var _this = this;
        var result = false;
        dates.forEach(function (date) {
            if (isInRange(candidate, min, max) && _this.isEqual(candidate, date)) {
                result = true;
            }
        });
        return result;
    };
    CenturyViewService.prototype.isEqual = function (candidate, expected) {
        if (!candidate || !expected) {
            return false;
        }
        // TODO: double-check this!
        return (0,first_year_of_decade/* firstYearOfDecade */.p)(candidate).getFullYear() === (0,first_year_of_decade/* firstYearOfDecade */.p)(expected).getFullYear();
    };
    CenturyViewService.prototype.isInArray = function (date, dates) {
        if (!dates.length) {
            return false;
        }
        var year = date.getFullYear();
        return dates[0].getFullYear() <= year && year <= (dates[dates.length - 1].getFullYear() + 99);
    };
    CenturyViewService.prototype.isInRange = function (candidate, min, max) {
        var year = (0,first_year_of_decade/* firstYearOfDecade */.p)(candidate).getFullYear();
        var aboveMin = !min || (0,first_year_of_decade/* firstYearOfDecade */.p)(min).getFullYear() <= year;
        var belowMax = !max || year <= (0,first_year_of_decade/* firstYearOfDecade */.p)(max).getFullYear();
        return aboveMin && belowMax;
    };
    CenturyViewService.prototype.isInSameView = function (candidate, value) {
        return (0,duration_in_centuries/* durationInCenturies */.q)(candidate, value) === 0;
    };
    CenturyViewService.prototype.isRangeStart = function (value) {
        return value.getFullYear() % 1000 === 0;
    };
    CenturyViewService.prototype.move = function (value, action) {
        var modifier = ACTIONS[action];
        if (!modifier) {
            return value;
        }
        return modifier(value);
    };
    CenturyViewService.prototype.cellTitle = function (value) {
        return (0,first_year_of_decade/* firstYearOfDecade */.p)(value).getFullYear().toString();
    };
    CenturyViewService.prototype.navigationTitle = function (value) {
        return value ? (0,first_decade_of_century/* firstDecadeOfCentury */.K)(value).getFullYear().toString() : '';
    };
    CenturyViewService.prototype.title = function (value) {
        if (!value) {
            return '';
        }
        return "".concat((0,first_decade_of_century/* firstDecadeOfCentury */.K)(value).getFullYear(), " - ").concat((0,last_decade_of_century/* lastDecadeOfCentury */.a)(value).getFullYear());
    };
    CenturyViewService.prototype.rowLength = function (_) {
        return CELLS_LENGTH;
    };
    CenturyViewService.prototype.skip = function (value, min) {
        return (0,duration_in_centuries/* durationInCenturies */.q)(min, value);
    };
    CenturyViewService.prototype.total = function (min, max) {
        return (0,duration_in_centuries/* durationInCenturies */.q)(min, max) + 1;
    };
    CenturyViewService.prototype.value = function (current) {
        return current ? (0,first_year_of_decade/* firstYearOfDecade */.p)(current).getFullYear().toString() : '';
    };
    CenturyViewService.prototype.viewDate = function (date, max, border) {
        if (border === void 0) { border = 1; }
        var renderTwoViews = (0,duration_in_centuries/* durationInCenturies */.q)(date, max) < border;
        return renderTwoViews ? (0,add_centuries/* addCenturies */.U)(date, -1) : date;
    };
    CenturyViewService.prototype.normalize = function (cellDate, min, max) {
        if (cellDate < min && this.isEqual(cellDate, min)) {
            return (0,clone_date/* cloneDate */.a)(min);
        }
        if (cellDate > max && this.isEqual(cellDate, max)) {
            return (0,clone_date/* cloneDate */.a)(max);
        }
        return cellDate;
    };
    return CenturyViewService;
}());


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-years.js
var add_years = __webpack_require__(51899);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js
var last_year_of_decade = __webpack_require__(72604);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js
var duration_in_decades = __webpack_require__(39047);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/DecadeViewService.js
var DecadeViewService_a;




var DecadeViewService_EMPTY_DATA = [[]];
var DecadeViewService_CELLS_LENGTH = 4;
var DecadeViewService_ROWS_LENGTH = 3;
var DecadeViewService_ACTIONS = (DecadeViewService_a = {},
    DecadeViewService_a[Action.Left] = function (date) { return (0,add_years/* addYears */.e)(date, -1); },
    DecadeViewService_a[Action.Up] = function (date) { return (0,add_years/* addYears */.e)(date, -5); },
    DecadeViewService_a[Action.Right] = function (date) { return (0,add_years/* addYears */.e)(date, 1); },
    DecadeViewService_a[Action.Down] = function (date) { return (0,add_years/* addYears */.e)(date, 5); },
    DecadeViewService_a[Action.PrevView] = function (date) { return (0,add_decades/* addDecades */.B)(date, -1); },
    DecadeViewService_a[Action.NextView] = function (date) { return (0,add_decades/* addDecades */.B)(date, 1); },
    DecadeViewService_a[Action.FirstInView] = function (date) { return (0,first_year_of_decade/* firstYearOfDecade */.p)(date); },
    DecadeViewService_a[Action.LastInView] = function (date) { return (0,last_year_of_decade/* lastYearOfDecade */.$)(date); },
    DecadeViewService_a);
/**
 * @hidden
 */
var DecadeViewService = /** @class */ (function () {
    function DecadeViewService() {
    }
    DecadeViewService.prototype.addToDate = function (min, skip) {
        return (0,add_decades/* addDecades */.B)(min, skip);
    };
    DecadeViewService.prototype.datesList = function (start, count) {
        return range(0, count).map(function (i) { return (0,add_decades/* addDecades */.B)(start, i); });
    };
    DecadeViewService.prototype.data = function (options) {
        var _this = this;
        var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a = options.selectionRange, selectionRange = _a === void 0 ? SelectionRange_EMPTY_SELECTIONRANGE : _a, viewDate = options.viewDate;
        if (!viewDate) {
            return DecadeViewService_EMPTY_DATA;
        }
        var cells = range(0, DecadeViewService_CELLS_LENGTH);
        var firstDate = (0,first_year_of_decade/* firstYearOfDecade */.p)(viewDate);
        var lastDate = (0,last_year_of_decade/* lastYearOfDecade */.$)(viewDate);
        var today = getToday();
        return range(0, DecadeViewService_ROWS_LENGTH).map(function (rowOffset) {
            var baseDate = (0,add_years/* addYears */.e)(firstDate, rowOffset * DecadeViewService_CELLS_LENGTH);
            return cells.map(function (cellOffset) {
                var cellDate = _this.normalize((0,add_years/* addYears */.e)(baseDate, cellOffset), min, max);
                var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
                var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
                var isInMiddle = !isRangeStart && !isRangeEnd;
                var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
                var isSelected = isActiveView && (!Array.isArray(selectedDate)
                    ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate)
                    : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
                return intersects(cellDate, firstDate, lastDate) ? ({
                    formattedValue: _this.value(cellDate),
                    id: "".concat(cellUID).concat(cellDate.getTime()),
                    isFocused: _this.isEqual(cellDate, focusedDate),
                    isSelected: isSelected,
                    isWeekend: false,
                    isInRange: isInRange(cellDate, min, max),
                    isRangeStart: isRangeStart,
                    isRangeMid: isRangeMid,
                    isRangeEnd: isRangeEnd,
                    isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
                    isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
                    isToday: _this.isEqual(cellDate, today),
                    title: _this.cellTitle(cellDate),
                    value: cellDate
                }) : null;
            });
        });
    };
    DecadeViewService.prototype.isSelectedFromArray = function (candidate, dates, min, max) {
        var _this = this;
        var result = false;
        dates.forEach(function (date) {
            if (isInRange(candidate, min, max) && _this.isEqual(candidate, date)) {
                result = true;
            }
        });
        return result;
    };
    DecadeViewService.prototype.isEqual = function (candidate, expected) {
        if (!candidate || !expected) {
            return false;
        }
        return candidate.getFullYear() === expected.getFullYear();
    };
    DecadeViewService.prototype.isInArray = function (date, dates) {
        if (!dates.length) {
            return false;
        }
        var year = date.getFullYear();
        return dates[0].getFullYear() <= year && year <= (dates[dates.length - 1].getFullYear() + 9);
    };
    DecadeViewService.prototype.isInRange = function (candidate, min, max) {
        var year = candidate.getFullYear();
        var aboveMin = !min || min.getFullYear() <= year;
        var belowMax = !max || year <= max.getFullYear();
        return aboveMin && belowMax;
    };
    DecadeViewService.prototype.isRangeStart = function (value) {
        return value.getFullYear() % 100 === 0;
    };
    DecadeViewService.prototype.isInSameView = function (candidate, value) {
        return (0,duration_in_decades/* durationInDecades */.p)(candidate, value) === 0;
    };
    DecadeViewService.prototype.move = function (value, action) {
        var modifier = DecadeViewService_ACTIONS[action];
        if (!modifier) {
            return value;
        }
        return modifier(value);
    };
    DecadeViewService.prototype.cellTitle = function (value) {
        return value.getFullYear().toString();
    };
    DecadeViewService.prototype.navigationTitle = function (value) {
        return value ? (0,first_year_of_decade/* firstYearOfDecade */.p)(value).getFullYear().toString() : '';
    };
    DecadeViewService.prototype.title = function (value) {
        if (!value) {
            return '';
        }
        return "".concat((0,first_year_of_decade/* firstYearOfDecade */.p)(value).getFullYear(), " - ").concat((0,last_year_of_decade/* lastYearOfDecade */.$)(value).getFullYear());
    };
    DecadeViewService.prototype.rowLength = function (_) {
        return DecadeViewService_CELLS_LENGTH;
    };
    DecadeViewService.prototype.skip = function (value, min) {
        return (0,duration_in_decades/* durationInDecades */.p)(min, value);
    };
    DecadeViewService.prototype.total = function (min, max) {
        return (0,duration_in_decades/* durationInDecades */.p)(min, max) + 1;
    };
    DecadeViewService.prototype.value = function (current) {
        return current ? current.getFullYear().toString() : '';
    };
    DecadeViewService.prototype.viewDate = function (date, max, border) {
        if (border === void 0) { border = 1; }
        var renderTwoViews = (0,duration_in_decades/* durationInDecades */.p)(date, max) < border;
        return renderTwoViews ? (0,add_decades/* addDecades */.B)(date, -1) : date;
    };
    DecadeViewService.prototype.normalize = function (cellDate, min, max) {
        if (cellDate < min && this.isEqual(cellDate, min)) {
            return (0,clone_date/* cloneDate */.a)(min);
        }
        if (cellDate > max && this.isEqual(cellDate, max)) {
            return (0,clone_date/* cloneDate */.a)(max);
        }
        return cellDate;
    };
    return DecadeViewService;
}());


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-days.js
var add_days = __webpack_require__(53402);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-weeks.js
var add_weeks = __webpack_require__(4772);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-months.js
var add_months = __webpack_require__(49526);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-day-of-month.js
var first_day_of_month = __webpack_require__(90401);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-day-of-month.js
var last_day_of_month = __webpack_require__(25843);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/day-of-week.js
var day_of_week = __webpack_require__(50876);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-months.js
var duration_in_months = __webpack_require__(37699);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/MonthViewService.js
var MonthViewService_a;




var MonthViewService_EMPTY_DATA = [[]];
var MonthViewService_CELLS_LENGTH = 7;
var MonthViewService_ROWS_LENGTH = 6;
var SATURDAY = 6;
var SUNDAY = 0;
var MonthViewService_ACTIONS = (MonthViewService_a = {},
    MonthViewService_a[Action.Left] = function (date) { return (0,add_days/* addDays */.f)(date, -1); },
    MonthViewService_a[Action.Up] = function (date) { return (0,add_weeks/* addWeeks */.J)(date, -1); },
    MonthViewService_a[Action.Right] = function (date) { return (0,add_days/* addDays */.f)(date, 1); },
    MonthViewService_a[Action.Down] = function (date) { return (0,add_weeks/* addWeeks */.J)(date, 1); },
    MonthViewService_a[Action.PrevView] = function (date) { return (0,add_months/* addMonths */.P)(date, -1); },
    MonthViewService_a[Action.NextView] = function (date) { return (0,add_months/* addMonths */.P)(date, 1); },
    MonthViewService_a[Action.FirstInView] = function (date) { return (0,first_day_of_month/* firstDayOfMonth */.G)(date); },
    MonthViewService_a[Action.LastInView] = function (date) { return (0,last_day_of_month/* lastDayOfMonth */.W)(date); },
    MonthViewService_a);
/**
 * @hidden
 */
var MonthViewService = /** @class */ (function () {
    function MonthViewService(intl) {
        this.intl = intl;
    }
    MonthViewService.prototype.addToDate = function (min, skip) {
        return (0,add_months/* addMonths */.P)(min, skip);
    };
    MonthViewService.prototype.datesList = function (start, count) {
        return range(0, count).map(function (i) { return (0,add_months/* addMonths */.P)(start, i); });
    };
    MonthViewService.prototype.data = function (options) {
        var _this = this;
        var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a = options.selectionRange, selectionRange = _a === void 0 ? SelectionRange_EMPTY_SELECTIONRANGE : _a, viewDate = options.viewDate;
        if (!viewDate) {
            return MonthViewService_EMPTY_DATA;
        }
        var firstMonthDate = (0,first_day_of_month/* firstDayOfMonth */.G)(viewDate);
        var lastMonthDate = (0,last_day_of_month/* lastDayOfMonth */.W)(viewDate);
        var backward = -1;
        var date = (0,day_of_week/* dayOfWeek */.m)(firstMonthDate, this.intl.firstDay(), backward);
        var cells = range(0, MonthViewService_CELLS_LENGTH);
        var today = getToday();
        return range(0, MonthViewService_ROWS_LENGTH).map(function (rowOffset) {
            var baseDate = (0,add_days/* addDays */.f)(date, rowOffset * MonthViewService_CELLS_LENGTH);
            return cells.map(function (cellOffset) {
                var cellDate = _this.normalize((0,add_days/* addDays */.f)(baseDate, cellOffset), min, max);
                var otherMonth = cellDate < firstMonthDate || cellDate > lastMonthDate;
                if (otherMonth) {
                    return null;
                }
                var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
                var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
                var isInMiddle = !isRangeStart && !isRangeEnd;
                var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
                var isSelected = isActiveView && (!Array.isArray(selectedDate)
                    ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate)
                    : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
                var cell = {
                    formattedValue: _this.value(cellDate),
                    id: "".concat(cellUID).concat(cellDate.getTime()),
                    isFocused: _this.isEqual(cellDate, focusedDate),
                    isSelected: isSelected,
                    isInRange: isInRange(cellDate, min, max),
                    isWeekend: _this.isWeekend(cellDate),
                    isRangeStart: isRangeStart,
                    isRangeMid: isRangeMid,
                    isRangeEnd: isRangeEnd,
                    isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstMonthDate),
                    isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastMonthDate),
                    isToday: _this.isEqual(cellDate, today),
                    title: _this.cellTitle(cellDate),
                    value: cellDate
                };
                return cell;
            });
        });
    };
    MonthViewService.prototype.isEqual = function (candidate, expected) {
        if (!candidate || !expected) {
            return false;
        }
        return (0,get_date/* getDate */.p)(candidate).getTime() === (0,get_date/* getDate */.p)(expected).getTime();
    };
    MonthViewService.prototype.isSelectedFromArray = function (candidate, dates, min, max) {
        var _this = this;
        var result = false;
        dates.forEach(function (date) {
            if (isInRange(candidate, min, max) && _this.isEqual(candidate, date)) {
                result = true;
            }
        });
        return result;
    };
    MonthViewService.prototype.isInArray = function (date, dates) {
        return !!dates.length && (0,first_day_of_month/* firstDayOfMonth */.G)(dates[0]) <= date && date <= (0,last_day_of_month/* lastDayOfMonth */.W)(dates[dates.length - 1]);
    };
    MonthViewService.prototype.isInRange = function (candidate, min, max) {
        var value = (0,get_date/* getDate */.p)(candidate);
        var aboveMin = !min || (0,get_date/* getDate */.p)(min) <= value;
        var belowMax = !max || value <= (0,get_date/* getDate */.p)(max);
        return aboveMin && belowMax;
    };
    MonthViewService.prototype.isInSameView = function (candidate, value) {
        return (0,duration_in_months/* durationInMonths */.d)(candidate, value) === 0;
    };
    MonthViewService.prototype.isRangeStart = function (value) {
        return !value.getMonth();
    };
    MonthViewService.prototype.move = function (value, action) {
        var modifier = MonthViewService_ACTIONS[action];
        if (!modifier) {
            return value;
        }
        return modifier(value);
    };
    MonthViewService.prototype.cellTitle = function (value) {
        return this.intl.formatDate(value, 'D');
    };
    MonthViewService.prototype.navigationTitle = function (value) {
        if (!value) {
            return '';
        }
        return this.isRangeStart(value) ? value.getFullYear().toString() : this.abbrMonthNames()[value.getMonth()];
    };
    MonthViewService.prototype.title = function (current) {
        return "".concat(this.wideMonthNames()[current.getMonth()], " ").concat(current.getFullYear());
    };
    MonthViewService.prototype.rowLength = function (prependCell) {
        return MonthViewService_CELLS_LENGTH + (prependCell ? 1 : 0);
    };
    MonthViewService.prototype.skip = function (value, min) {
        return (0,duration_in_months/* durationInMonths */.d)(min, value);
    };
    MonthViewService.prototype.total = function (min, max) {
        return (0,duration_in_months/* durationInMonths */.d)(min, max) + 1;
    };
    MonthViewService.prototype.value = function (current) {
        return current ? current.getDate().toString() : '';
    };
    MonthViewService.prototype.viewDate = function (date, max, border) {
        if (border === void 0) { border = 1; }
        var renderTwoViews = (0,duration_in_months/* durationInMonths */.d)(date, max) < border;
        return renderTwoViews ? (0,add_months/* addMonths */.P)(date, -1) : date;
    };
    MonthViewService.prototype.isWeekend = function (date) {
        var day = date.getDay();
        return day === SATURDAY || day === SUNDAY;
    };
    MonthViewService.prototype.abbrMonthNames = function () {
        return this.intl.dateFormatNames({ nameType: 'abbreviated', type: 'months' });
    };
    MonthViewService.prototype.normalize = function (cellDate, min, max) {
        if (cellDate < min && this.isEqual(cellDate, min)) {
            return (0,get_date/* getDate */.p)(min);
        }
        if (cellDate > max && this.isEqual(cellDate, max)) {
            return (0,get_date/* getDate */.p)(max);
        }
        return cellDate;
    };
    MonthViewService.prototype.wideMonthNames = function () {
        return this.intl.dateFormatNames({ nameType: 'wide', type: 'months', standAlone: true });
    };
    return MonthViewService;
}());


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js
var first_month_of_year = __webpack_require__(9106);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js
var last_month_of_year = __webpack_require__(57452);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/create-date.js
var create_date = __webpack_require__(78524);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
var duration_in_years = __webpack_require__(90268);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/YearViewService.js
var YearViewService_a;





var YearViewService_EMPTY_DATA = [[]];
var YearViewService_CELLS_LENGTH = 4;
var YearViewService_ROWS_LENGTH = 3;
var upStep = function (month) {
    if (month > 4) {
        return -5;
    }
    if (month < 2) {
        return -2;
    }
    return -7;
};
var downStep = function (month) {
    if (month < 7) {
        return 5;
    }
    if (month < 10) {
        return 7;
    }
    return 2;
};
var YearViewService_ACTIONS = (YearViewService_a = {},
    YearViewService_a[Action.Left] = function (date) { return (0,add_months/* addMonths */.P)(date, -1); },
    YearViewService_a[Action.Up] = function (date) { return (0,add_months/* addMonths */.P)(date, upStep(date.getMonth())); },
    YearViewService_a[Action.Right] = function (date) { return (0,add_months/* addMonths */.P)(date, 1); },
    YearViewService_a[Action.Down] = function (date) { return (0,add_months/* addMonths */.P)(date, downStep(date.getMonth())); },
    YearViewService_a[Action.PrevView] = function (date) { return (0,add_years/* addYears */.e)(date, -1); },
    YearViewService_a[Action.NextView] = function (date) { return (0,add_years/* addYears */.e)(date, 1); },
    YearViewService_a[Action.FirstInView] = function (date) { return (0,first_month_of_year/* firstMonthOfYear */.N)(date); },
    YearViewService_a[Action.LastInView] = function (date) { return (0,last_month_of_year/* lastMonthOfYear */.b)(date); },
    YearViewService_a);
/**
 * @hidden
 */
var YearViewService = /** @class */ (function () {
    function YearViewService(intl) {
        this._intl = intl;
    }
    YearViewService.prototype.addToDate = function (min, skip) {
        return (0,add_years/* addYears */.e)(min, skip);
    };
    YearViewService.prototype.datesList = function (start, count) {
        return range(0, count).map(function (i) { return (0,add_years/* addYears */.e)(start, i); });
    };
    YearViewService.prototype.data = function (options) {
        var _this = this;
        var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a = options.selectionRange, selectionRange = _a === void 0 ? SelectionRange_EMPTY_SELECTIONRANGE : _a, viewDate = options.viewDate;
        if (!viewDate) {
            return YearViewService_EMPTY_DATA;
        }
        var months = this.abbrMonthNames();
        var firstDate = (0,first_month_of_year/* firstMonthOfYear */.N)(viewDate);
        var lastDate = (0,last_month_of_year/* lastMonthOfYear */.b)(viewDate);
        var currentYear = firstDate.getFullYear();
        var cells = range(0, YearViewService_CELLS_LENGTH);
        var today = getToday();
        return range(0, YearViewService_ROWS_LENGTH).map(function (rowOffset) {
            var baseDate = (0,add_months/* addMonths */.P)(firstDate, rowOffset * YearViewService_CELLS_LENGTH);
            return cells.map(function (cellOffset) {
                var cellDate = _this.normalize((0,add_months/* addMonths */.P)(baseDate, cellOffset), min, max);
                var changedYear = currentYear < cellDate.getFullYear();
                if (changedYear) {
                    return null;
                }
                var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
                var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
                var isInMiddle = !isRangeStart && !isRangeEnd;
                var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
                var isSelected = isActiveView && (!Array.isArray(selectedDate)
                    ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate)
                    : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
                return {
                    formattedValue: months[cellDate.getMonth()],
                    id: "".concat(cellUID).concat(cellDate.getTime()),
                    isFocused: _this.isEqual(cellDate, focusedDate),
                    isSelected: isSelected,
                    isInRange: isInRange(cellDate, min, max),
                    isWeekend: false,
                    isRangeStart: isRangeStart,
                    isRangeMid: isRangeMid,
                    isRangeEnd: isRangeEnd,
                    isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
                    isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
                    isToday: _this.isEqual(cellDate, today),
                    title: _this.cellTitle(cellDate),
                    value: cellDate
                };
            });
        });
    };
    YearViewService.prototype.isSelectedFromArray = function (candidate, dates, min, max) {
        var _this = this;
        var result = false;
        dates.forEach(function (date) {
            if (isInRange(candidate, min, max) && _this.isEqual(candidate, date)) {
                result = true;
            }
        });
        return result;
    };
    YearViewService.prototype.isEqual = function (candidate, expected) {
        if (!candidate || !expected) {
            return false;
        }
        return candidate.getFullYear() === expected.getFullYear() &&
            candidate.getMonth() === expected.getMonth();
    };
    YearViewService.prototype.isInArray = function (date, dates) {
        if (!dates.length) {
            return false;
        }
        var year = date.getFullYear();
        return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear();
    };
    YearViewService.prototype.isInRange = function (candidate, min, max) {
        var candidateValue = (0,create_date/* createDate */.J)(candidate.getFullYear(), candidate.getMonth(), 1);
        var aboveMin = !min || (0,create_date/* createDate */.J)(min.getFullYear(), min.getMonth(), 1) <= candidateValue;
        var belowMax = !max || candidateValue <= (0,create_date/* createDate */.J)(max.getFullYear(), max.getMonth(), 1);
        return aboveMin && belowMax;
    };
    YearViewService.prototype.isInSameView = function (candidate, value) {
        return (0,duration_in_years/* durationInYears */.i)(candidate, value) === 0;
    };
    YearViewService.prototype.isRangeStart = function (value) {
        return value.getFullYear() % 10 === 0;
    };
    YearViewService.prototype.move = function (value, action) {
        var modifier = YearViewService_ACTIONS[action];
        if (!modifier) {
            return value;
        }
        return modifier(value);
    };
    YearViewService.prototype.cellTitle = function (value) {
        return "".concat(value.getFullYear(), " ").concat(this.value(value));
    };
    YearViewService.prototype.navigationTitle = function (value) {
        return this.title(value);
    };
    YearViewService.prototype.title = function (current) {
        return current ? current.getFullYear().toString() : '';
    };
    YearViewService.prototype.rowLength = function (_) {
        return YearViewService_CELLS_LENGTH;
    };
    YearViewService.prototype.skip = function (value, min) {
        return (0,duration_in_years/* durationInYears */.i)(min, value);
    };
    YearViewService.prototype.total = function (min, max) {
        return (0,duration_in_years/* durationInYears */.i)(min, max) + 1;
    };
    YearViewService.prototype.value = function (current) {
        return current ? this.abbrMonthNames()[current.getMonth()] : '';
    };
    YearViewService.prototype.viewDate = function (date, max, border) {
        if (border === void 0) { border = 1; }
        var renderTwoViews = (0,duration_in_years/* durationInYears */.i)(date, max) < border;
        return renderTwoViews ? (0,add_years/* addYears */.e)(date, -1) : date;
    };
    YearViewService.prototype.abbrMonthNames = function () {
        return this._intl.dateFormatNames({ nameType: 'abbreviated', type: 'months' });
    };
    YearViewService.prototype.normalize = function (cellDate, min, max) {
        if (cellDate < min && this.isEqual(cellDate, min)) {
            return (0,clone_date/* cloneDate */.a)(min);
        }
        if (cellDate > max && this.isEqual(cellDate, max)) {
            return (0,clone_date/* cloneDate */.a)(max);
        }
        return cellDate;
    };
    return YearViewService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/BusViewService.js
var BusViewService_a;





var services = (BusViewService_a = {},
    BusViewService_a[CalendarViewEnum.month] = MonthViewService,
    BusViewService_a[CalendarViewEnum.year] = YearViewService,
    BusViewService_a[CalendarViewEnum.decade] = DecadeViewService,
    BusViewService_a[CalendarViewEnum.century] = CenturyViewService,
    BusViewService_a);
var viewOffset = function (view, offset) {
    var candidate = CalendarViewEnum[CalendarViewEnum[view + offset]];
    return candidate !== undefined ? candidate : view;
};
/**
 * @hidden
 */
var BusViewService = /** @class */ (function () {
    function BusViewService(onViewChanged) {
        this.bottom = CalendarViewEnum.month;
        this.top = CalendarViewEnum.century;
        this.onViewChanged = onViewChanged;
    }
    BusViewService.prototype.configure = function (bottom, top) {
        this.bottom = bottom;
        this.top = top;
    };
    BusViewService.prototype.service = function (view, intl) {
        return new services["".concat(view)](intl);
    };
    BusViewService.prototype.moveDown = function (view, event) {
        this.move(view, -1, event);
    };
    BusViewService.prototype.moveUp = function (view, event) {
        this.move(view, 1, event);
    };
    BusViewService.prototype.moveToBottom = function (activeView) {
        if (activeView === this.bottom) {
            return;
        }
        this.onViewChanged({ view: this.bottom });
    };
    BusViewService.prototype.canMoveDown = function (view) {
        return this.bottom < view;
    };
    BusViewService.prototype.canMoveUp = function (view) {
        return view < this.top;
    };
    BusViewService.prototype.clamp = function (view) {
        if (view < this.bottom) {
            return this.bottom;
        }
        if (view > this.top) {
            return this.top;
        }
        return view;
    };
    BusViewService.prototype.move = function (view, offset, event) {
        var candidate = this.clamp(viewOffset(view, offset));
        if (candidate === view) {
            return;
        }
        this.onViewChanged({ view: candidate }, event);
    };
    return BusViewService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/NavigationService.js

var KEY_TO_ACTION = {
    '33': Action.PrevView,
    '34': Action.NextView,
    '35': Action.LastInView,
    '36': Action.FirstInView,
    '37': Action.Left,
    '38': Action.Up,
    '39': Action.Right,
    '40': Action.Down,
    'meta+38': Action.UpperView,
    'meta+40': Action.LowerView
};
/**
 * @hidden
 */
var NavigationService = /** @class */ (function () {
    function NavigationService(bus) {
        this.bus = bus;
    }
    NavigationService.prototype.action = function (event) {
        var action = "".concat(event.ctrlKey || event.metaKey ? 'meta+' : '').concat(event.keyCode);
        return KEY_TO_ACTION[action];
    };
    NavigationService.prototype.move = function (value, action, activeView, service, event) {
        if (!service) {
            return value;
        }
        if (action === Action.UpperView && this.bus.canMoveUp(activeView)) {
            this.bus.moveUp(activeView, event);
            return value;
        }
        if (action === Action.LowerView && this.bus.canMoveDown(activeView)) {
            this.bus.moveDown(activeView, event);
            return value;
        }
        return service.move(value, action);
    };
    return NavigationService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/ScrollSyncService.js
var divideByMagnitude = function (magnitude) { return function (x) { return Math.floor(x / magnitude); }; };
var powerByMagnitude = function (magnitude) { return function (x) { return x * magnitude; }; };
/**
 * @hidden
 */
var ScrollSyncService = /** @class */ (function () {
    function ScrollSyncService(dom) {
        this.dom = dom;
        this.divideByMagnitude = null;
        this.powerByMagnitude = null;
        this.navigator = null;
        this.view = null;
        this.monthScrolled = false;
        this.navScrolled = false;
    }
    ScrollSyncService.prototype.configure = function (activeView) {
        var magnitude = Math.max(this.dom.viewHeight(activeView) / this.dom.navigationItemHeight, 1);
        this.divideByMagnitude = divideByMagnitude(magnitude);
        this.powerByMagnitude = powerByMagnitude(magnitude);
    };
    ScrollSyncService.prototype.sync = function (navigator, view, e) {
        if (!navigator || !view) {
            return;
        }
        this.navigator = navigator;
        this.view = view;
        if (e.target === this.navigator.element) {
            if (this.monthScrolled) {
                this.monthScrolled = false;
                return;
            }
            this.navScrolled = true;
            this.scrollSiblingOf(this.navigator.element);
        }
        if (e.target === this.view.element) {
            if (this.navScrolled) {
                this.navScrolled = false;
                return;
            }
            this.monthScrolled = true;
            this.scrollSiblingOf(this.view.element);
        }
    };
    ScrollSyncService.prototype.scrollSiblingOf = function (scrolledElement) {
        var component = this.siblingComponent(scrolledElement);
        var scrollTop = this.calculateScroll(component, scrolledElement.scrollTop);
        component.scrollTo(scrollTop);
    };
    ScrollSyncService.prototype.siblingComponent = function (scrollableElement) {
        return this.navigator.element === scrollableElement ? this.view : this.navigator;
    };
    ScrollSyncService.prototype.calculateScroll = function (component, scrollTop) {
        var modifier = component === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
        return modifier ? modifier(scrollTop) : 0;
    };
    return ScrollSyncService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar.js
var Calendar_extends = (undefined && undefined.__extends) || (function () {
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











var virtualizationProp = function (x) { return x ? x.virtualization : null; };
var calculateValue = function (min, max, stateValue, propValue) {
    if (min === void 0) { min = CalendarWithoutContext.defaultProps.min; }
    if (max === void 0) { max = CalendarWithoutContext.defaultProps.max; }
    return propValue !== undefined
        ? propValue !== null && isInRange((0,get_date/* getDate */.p)(propValue), min, max)
            ? propValue
            : null
        : stateValue !== null && isInRange((0,get_date/* getDate */.p)(stateValue), min, max)
            ? stateValue
            : null;
};
/** @hidden */
var CalendarWithoutContext = /** @class */ (function (_super) {
    Calendar_extends(CalendarWithoutContext, _super);
    function CalendarWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this.scrollSyncService = null;
        _this.focusedDate = null;
        _this.cellUID = (0,main_js_.guid)();
        _this.id = (0,main_js_.guid)();
        _this.Navigation = null;
        _this.calendarViewList = null;
        _this._element = null;
        _this.intl = null;
        _this.service = null;
        _this.isActive = false;
        _this.didNavigationChange = false;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._element) {
                _this._element.focus();
            }
        };
        _this.shouldScroll = function () { return _this.didNavigationChange; };
        _this.handleScroll = function (event) {
            if (!_this.scrollSyncService) {
                return;
            }
            _this.scrollSyncService.sync(virtualizationProp(_this.Navigation), virtualizationProp(_this.calendarViewList), event);
        };
        _this.handleNavigationChange = function (event) {
            if (_this.props.disabled) {
                return;
            }
            _this.didNavigationChange = true;
            var focusedDate = (0,clone_date/* cloneDate */.a)(event.value);
            _this.setState({ focusedDate: focusedDate });
        };
        _this.handleViewChange = function (_a) {
            var view = _a.view;
            if (_this.scrollSyncService) {
                _this.scrollSyncService.configure(view);
            }
            _this.setState({ activeView: view });
        };
        _this.handleDateChange = function (event) {
            var value = (0,clone_date/* cloneDate */.a)(event.value);
            var focusedDate = (0,clone_date/* cloneDate */.a)(event.value);
            var canNavigateDown = _this.bus.canMoveDown(_this.state.activeView);
            if (_this.props.disabled) {
                return;
            }
            if (canNavigateDown) {
                if (event.isTodayClick) {
                    _this.bus.moveToBottom(_this.state.activeView);
                }
                else {
                    _this.bus.moveDown(_this.state.activeView, event.syntheticEvent);
                    _this.setState({ focusedDate: focusedDate });
                    return;
                }
            }
            _this.setState({ value: value, focusedDate: focusedDate });
            _this.valueDuringOnChange = value;
            var onChange = _this.props.onChange;
            if (onChange) {
                var args = {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: value,
                    target: _this
                };
                onChange.call(undefined, args);
            }
            _this.valueDuringOnChange = undefined;
        };
        _this.handleFocus = function (event) {
            _this.isActive = true;
            if (!_this.calendarViewList) {
                return;
            }
            _this.calendarViewList.focusActiveDate();
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus.call(undefined, event);
            }
        };
        _this.handleBlur = function (event) {
            _this.isActive = false;
            if (!_this.calendarViewList) {
                return;
            }
            _this.calendarViewList.blurActiveDate();
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur.call(undefined, event);
            }
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode;
            if (!_this.focusedDate || !_this.service) {
                return;
            }
            if (keyCode === main_js_.Keys.enter) {
                if (_this.value !== null
                    && (0,is_equal_date/* isEqualDate */.$)(_this.focusedDate, _this.value)) {
                    var viewDate = dateInRange(_this.focusedDate, _this.min, _this.max);
                    virtualizationProp(_this.calendarViewList).scrollToIndex(_this.service.skip(viewDate, _this.min));
                }
                var args = {
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    value: _this.focusedDate,
                    target: _this
                };
                _this.handleDateChange(args);
            }
            else {
                var candidate = dateInRange(_this.navigation.move(_this.focusedDate, _this.navigation.action(event), _this.state.activeView, _this.service, event), _this.min, _this.max);
                if ((0,is_equal_date/* isEqualDate */.$)(_this.focusedDate, candidate)) {
                    return;
                }
                _this.setState({ focusedDate: candidate });
            }
            event.preventDefault();
        };
        _this.handleMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleClick = function (_) {
            if (_this._element) {
                _this._element.focus({ preventScroll: true });
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        var value = calculateValue(_this.min, _this.max, _this.props.defaultValue || CalendarWithoutContext.defaultProps.defaultValue, _this.props.value);
        _this.state = {
            value: value,
            activeView: viewInRange(CalendarViewEnum[props.defaultActiveView], _this.bottomView, _this.topView),
            focusedDate: dateInRange(props.focusedDate
                || value
                || getToday(), _this.min, _this.max)
        };
        _this.dom = new DOMService();
        _this.bus = new BusViewService(_this.handleViewChange);
        _this.navigation = new NavigationService(_this.bus);
        _this.oldValue = value;
        return _this;
    }
    Object.defineProperty(CalendarWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the Calendar.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWithoutContext.prototype, "value", {
        /**
         * Gets the value of the Calendar.
         */
        get: function () {
            return this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWithoutContext.prototype, "min", {
        get: function () {
            return (0,get_date/* getDate */.p)(this.props.min !== undefined
                ? this.props.min
                : CalendarWithoutContext.defaultProps.min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWithoutContext.prototype, "max", {
        get: function () {
            return (0,get_date/* getDate */.p)(this.props.max !== undefined
                ? this.props.max
                : CalendarWithoutContext.defaultProps.max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWithoutContext.prototype, "bottomView", {
        get: function () {
            return CalendarViewEnum[this.props.bottomView !== undefined
                ? this.props.bottomView
                : CalendarWithoutContext.defaultProps.bottomView];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarWithoutContext.prototype, "topView", {
        get: function () {
            return CalendarViewEnum[this.props.topView !== undefined
                ? this.props.topView
                : CalendarWithoutContext.defaultProps.topView];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    CalendarWithoutContext.prototype.componentDidMount = function () {
        var _this = this;
        // Async calculation of height to avoid animation cancellation
        Promise.resolve().then(function () {
            (0,main_js_.setScrollbarWidth)();
            if (!_this._element) {
                return;
            }
            _this.dom.calculateHeights(_this._element);
            _this.scrollSyncService = new ScrollSyncService(_this.dom);
            _this.scrollSyncService.configure(_this.state.activeView);
            _this.forceUpdate();
        });
    };
    /**
     * @hidden
     */
    CalendarWithoutContext.prototype.componentDidUpdate = function (_, prevState) {
        (0,main_js_.setScrollbarWidth)();
        if (prevState.activeView !== this.state.activeView && this.scrollSyncService) {
            this.scrollSyncService.configure(this.state.activeView);
        }
        if (this.calendarViewList) {
            (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
        }
        this.didNavigationChange = false;
        this.oldValue = this.value;
    };
    /**
     * @hidden
     */
    CalendarWithoutContext.prototype.render = function () {
        var _this = this;
        if (this.props._ref) {
            this.props._ref(this);
        }
        var didValueChange = this.value !== null && this.oldValue !== null
            ? !(0,is_equal_date/* isEqualDate */.$)(this.value, this.oldValue)
            : this.value !== this.oldValue;
        var activeView = viewInRange(this.state.activeView, CalendarViewEnum[this.props.bottomView !== undefined
            ? this.props.bottomView
            : CalendarWithoutContext.defaultProps.bottomView], CalendarViewEnum[this.props.topView !== undefined
            ? this.props.topView
            : CalendarWithoutContext.defaultProps.topView]);
        var value = calculateValue(this.min, this.max, this.value, this.value);
        var sanitizedValue = value ? (0,get_date/* getDate */.p)(value) : null;
        this.focusedDate = (0,get_date/* getDate */.p)(dateInRange(didValueChange && value !== null
            ? value
            : this.state.focusedDate, this.min, this.max));
        this.intl = (0,index_mjs_.provideIntlService)(this);
        this.bus.configure(this.bottomView, this.topView);
        this.service = this.bus.service(activeView, this.intl);
        var _a = this.props.smoothScroll, smoothScroll = _a === void 0 ? Number.parseFloat(index_js_.version) < 18 : _a;
        var rootClassNames = (0,main_js_.classNames)('k-widget k-calendar k-calendar-infinite', {
            'k-disabled': this.props.disabled,
            'k-week-number': this.props.weekNumber,
            'k-calendar-lg': this.props.mobileMode
        }, this.props.className);
        var calendarBody = [this.props.navigation && (index_js_.createElement(Navigation, { key: 0, ref: function (el) { _this.Navigation = el; }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, onScroll: this.handleScroll, onChange: this.handleNavigationChange, service: this.service, dom: this.dom, navigationItem: this.props.navigationItem, tabIndex: this.props.tabIndex })), (index_js_.createElement(ViewList, { key: 1, ref: function (el) { _this.calendarViewList = el; }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, bus: this.bus, shouldScroll: this.shouldScroll, onScroll: this.handleScroll, service: this.service, cell: this.props.cell, weekCell: this.props.weekCell, dom: this.dom, smoothScroll: smoothScroll, showWeekNumbers: this.props.weekNumber, onChange: this.handleDateChange, value: sanitizedValue, cellUID: this.cellUID, headerTitle: this.props.headerTitle, tabIndex: this.props.tabIndex }))];
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, className: rootClassNames, id: this.props.id || this.id, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, "aria-disabled": this.props.disabled, tabIndex: !this.props.disabled ? this.props.tabIndex || 0 : undefined, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onClick: this.handleClick }, calendarBody));
    };
    /**
     * @hidden
     */
    CalendarWithoutContext.displayName = 'Calendar';
    /**
     * @hidden
     */
    CalendarWithoutContext.propTypes = {
        className: prop_types_index_js_.string,
        defaultActiveView: prop_types_index_js_.oneOf(['month', 'year', 'decade', 'century']),
        defaultValue: prop_types_index_js_.instanceOf(Date),
        disabled: prop_types_index_js_.bool,
        focusedDate: prop_types_index_js_.instanceOf(Date),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        navigation: prop_types_index_js_.bool,
        smoothScroll: prop_types_index_js_.bool,
        onBlur: prop_types_index_js_.func,
        onChange: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        tabIndex: prop_types_index_js_.number,
        value: prop_types_index_js_.instanceOf(Date),
        weekNumber: prop_types_index_js_.bool,
        topView: function (props, propName, componentName) {
            var prop = props[propName];
            var bottomView = props.bottomView;
            if (prop && bottomView && CalendarViewEnum[prop] < CalendarViewEnum[bottomView]) {
                return new Error("Invalid prop + ".concat(propName, " suplied to ").concat(componentName, ".\n                    ").concat(propName, " can not be smaller than bottomView.\n                    "));
            }
            return null;
        },
        bottomView: function (props, propName, componentName) {
            var prop = props[propName];
            var topView = props.topView;
            if (prop && topView && CalendarViewEnum[prop] > CalendarViewEnum[topView]) {
                return new Error("Invalid prop + ".concat(propName, " suplied to ").concat(componentName, ".\n                    ").concat(propName, " can not be bigger than topView.\n                    "));
            }
            return null;
        }
    };
    /**
     * @hidden
     */
    CalendarWithoutContext.defaultProps = {
        disabled: false,
        min: MIN_DATE,
        max: MAX_DATE,
        navigation: true,
        defaultActiveView: 'month',
        defaultValue: null,
        topView: 'century',
        bottomView: 'month'
    };
    return CalendarWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `Calendar` component.
 * Used for global configuration of all `Calendar` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var CalendarPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the KendoReact Calendar Component.
 *
 * Accepts properties of type [CalendarProps]({% slug api_dateinputs_calendarprops %}).
 * Obtaining the `ref` returns an object of type [CalendarHandle]({% slug api_dateinputs_calendarhandle %}).
 */
var Calendar = (0,main_js_.withPropsContext)(CalendarPropsContext, CalendarWithoutContext);
Calendar.displayName = 'KendoReactCalendar';
(0,index_mjs_.registerForIntl)(CalendarWithoutContext);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/models/mask.js
/**
 * @hidden
 */
var Mask = /** @class */ (function () {
    function Mask() {
        this.symbols = '';
        this.partMap = [];
    }
    return Mask;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/utils.js
/**
 * @hidden
 */
var defaultFormat = 'd';
/**
 * @hidden
 */
var defaultFormatPlaceholder = 'wide';
/**
 * @hidden
 */
var padZero = function (length) { return new Array(Math.max(length, 0)).fill('0').join(''); };
/**
 * @hidden
 */
var approximateStringMatching = function (oldTextOrigin, oldFormat, newTextOrigin, selectionStart) {
    /*
      Remove the right part of the cursor.
      oldFormat = oldFormat.substring(0, caret + oldText.length - newText.length);
    */
    var oldTextSeparator = oldTextOrigin[selectionStart + oldTextOrigin.length - newTextOrigin.length];
    var oldText = oldTextOrigin.substring(0, selectionStart + oldTextOrigin.length - newTextOrigin.length);
    var newText = newTextOrigin.substring(0, selectionStart);
    var diff = [];
    /* Handle the typing of a single character over the same selection. */
    if (oldText === newText && selectionStart > 0) {
        diff.push([oldFormat[selectionStart - 1], newText[selectionStart - 1]]);
        return diff;
    }
    if (oldText.indexOf(newText) === 0 &&
        (newText.length === 0 || oldFormat[newText.length - 1] !== oldFormat[newText.length])) {
        /* Handle Delete/Backspace. */
        var deletedSymbol = '';
        /*
            The whole text is replaced by the same character.
            A nasty patch is required to keep the selection in the first segment.
        */
        if (newText.length === 1) {
            diff.push([oldFormat[0], newText[0]]);
        }
        for (var i = newText.length; i < oldText.length; i++) {
            if (oldFormat[i] !== deletedSymbol && oldFormat[i] !== '_') {
                deletedSymbol = oldFormat[i];
                diff.push([deletedSymbol, '']);
            }
        }
        return diff;
    }
    /*
        Handle the insertion of the text (the new text is longer than the previous one).
        Handle the typing over a literal as well.
    */
    if (newText.indexOf(oldText) === 0 || oldFormat[selectionStart - 1] === '_') {
        var symbol = oldFormat[0];
        for (var i = Math.max(0, oldText.length - 1); i < oldFormat.length; i++) {
            if (oldFormat[i] !== '_') {
                symbol = oldFormat[i];
                break;
            }
        }
        return [[symbol, newText[selectionStart - 1]]];
    }
    /* Handle the entering of a space or a separator for navigating to the next item. */
    if (newText[newText.length - 1] === ' ' || newText[newText.length - 1] === oldTextSeparator) {
        return [[oldFormat[selectionStart - 1], '_']];
    }
    /* Handle typing over a correctly selected part. */
    return [[oldFormat[selectionStart - 1], newText[selectionStart - 1]]];
};
/**
 * @hidden
 */
var dateSymbolMap = function (map, part) { map[part.pattern[0]] = part.type; return map; };
/**
 * @hidden
 */
var utils_isInRange = function (candidate, min, max) { return (candidate === null || !((min && min > candidate) || (max && max < candidate))); };
/**
 * @hidden
 */
var invalidClasses = (/* unused pure expression or super */ null && (['k-invalid']));
/** @hidden */
var wrapperClasses = ['k-widget', 'k-dateinput'];

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/models/kendo-date.js



/**
 * @hidden
 */
var KendoDate = /** @class */ (function () {
    function KendoDate(intlProvider, formatPlaceholder, format) {
        this.year = true;
        this.month = true;
        this.date = true;
        this.hours = true;
        this.minutes = true;
        this.seconds = true;
        this.milliseconds = true;
        this.leadingZero = null;
        this.typedMonthPart = '';
        this.knownParts = 'adHhmMsEy';
        this.symbols = {
            'E': 'E',
            'H': 'H',
            'M': 'M',
            'a': 'a',
            'd': 'd',
            'h': 'h',
            'm': 'm',
            's': 's',
            'y': 'y'
        };
        this._value = (0,get_date/* getDate */.p)(new Date());
        this.intlProvider = intlProvider;
        this.formatPlaceholder = formatPlaceholder;
        this.format = format;
        this.monthNames = this.allFormatedMonths();
    }
    Object.defineProperty(KendoDate.prototype, "intl", {
        get: function () {
            return this.intlProvider();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KendoDate.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    KendoDate.prototype.setValue = function (value) {
        if (!value) {
            this._value = (0,get_date/* getDate */.p)(new Date());
            this.modifyExisting(false);
        }
        else if (!(0,is_equal/* isEqual */.n)(value, this._value)) {
            this._value = (0,clone_date/* cloneDate */.a)(value);
            this.modifyExisting(true);
        }
    };
    KendoDate.prototype.hasValue = function () {
        var _this = this;
        var pred = function (a, p) { return a || p.type !== 'literal' && p.type !== 'dayperiod' && _this.getExisting(p.pattern[0]); };
        return this.intl.splitDateFormat(this.format).reduce(pred, false);
    };
    KendoDate.prototype.getDateObject = function () {
        for (var i = 0; i < this.knownParts.length; i++) {
            if (!this.getExisting(this.knownParts[i])) {
                return null;
            }
        }
        return (0,clone_date/* cloneDate */.a)(this.value);
    };
    KendoDate.prototype.getTextAndFormat = function () {
        return this.merge(this.intl.formatDate(this.value, this.format), this.dateFormatString(this.value, this.format));
    };
    KendoDate.prototype.modifyExisting = function (value) {
        var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
        for (var i = 0; i < sampleFormat.length; i++) {
            this.setExisting(sampleFormat[i], value);
        }
    };
    KendoDate.prototype.getExisting = function (symbol) {
        switch (symbol) {
            case 'y': return this.year;
            case 'M':
            case 'L': return this.month;
            case 'd': return this.date;
            case 'E': return this.date && this.month && this.year;
            case 'h':
            case 'H': return this.hours;
            case 'm': return this.minutes;
            case 's': return this.seconds;
            default: return true;
        }
    };
    KendoDate.prototype.setExisting = function (symbol, value) {
        switch (symbol) {
            case 'y':
                // allow 2/29 dates
                this.year = value;
                if (value === false) {
                    this._value.setFullYear(2000);
                }
                break;
            case 'M':
                // make sure you can type 31 in the day part
                this.month = value;
                if (value === false) {
                    this._value.setMonth(0);
                }
                break;
            case 'd':
                this.date = value;
                break;
            case 'h':
            case 'H':
                this.hours = value;
                break;
            case 'm':
                this.minutes = value;
                break;
            case 's':
                this.seconds = value;
                break;
            default: return;
        }
    };
    KendoDate.prototype.modifyPart = function (symbol, offset) {
        var newValue = (0,clone_date/* cloneDate */.a)(this.value);
        switch (symbol) {
            case 'y':
                newValue.setFullYear(newValue.getFullYear() + offset);
                break;
            case 'M':
                newValue = (0,add_months/* addMonths */.P)(this.value, offset);
                break;
            case 'd':
            case 'E':
                newValue.setDate(newValue.getDate() + offset);
                break;
            case 'h':
            case 'H':
                newValue.setHours(newValue.getHours() + offset);
                break;
            case 'm':
                newValue.setMinutes(newValue.getMinutes() + offset);
                break;
            case 's':
                newValue.setSeconds(newValue.getSeconds() + offset);
                break;
            case 'a':
                newValue.setHours(newValue.getHours() + (12 * offset));
                break;
            default: break;
        }
        this.setExisting(symbol, true);
        this._value = newValue;
    };
    KendoDate.prototype.parsePart = function (symbol, currentChar) {
        var _a;
        this.resetLeadingZero();
        if (!currentChar) {
            this.setExisting(symbol, false);
            return { value: null };
        }
        var baseDate = this.intl.formatDate(this.value, this.format);
        var dateParts = this.dateFormatString(this.value, this.format);
        var baseFormat = dateParts.symbols;
        var replaced = false;
        var prefix = '';
        var current = '';
        var suffix = '';
        for (var i = 0; i < baseDate.length; i++) {
            if (baseFormat[i] === symbol) {
                current += this.getExisting(symbol) ? baseDate[i] : '0';
                replaced = true;
            }
            else if (!replaced) {
                prefix += baseDate[i];
            }
            else {
                suffix += baseDate[i];
            }
        }
        var parsedDate = null;
        var month = this.matchMonth(currentChar);
        while (current.length > 0 && current.charAt(0) === '0') {
            current = current.slice(1);
        }
        if (current.length >= 4) {
            current = '';
        }
        for (var i = 0; i < 2; i++) {
            var middle = current + currentChar;
            var middleNumber = parseInt(middle, 10);
            parsedDate = this.intl.parseDate(prefix + middle + suffix, this.format);
            if (!parsedDate && !isNaN(middleNumber) && !isNaN(parseInt(currentChar, 10))) {
                if (symbol === 'M' && !month) {
                    var monthNumber = middleNumber - 1;
                    if (monthNumber > -1 && monthNumber < 12) {
                        parsedDate = (0,clone_date/* cloneDate */.a)(this.value);
                        parsedDate.setMonth(monthNumber);
                        if (parsedDate.getMonth() !== monthNumber) {
                            parsedDate = (0,last_day_of_month/* lastDayOfMonth */.W)((0,add_months/* addMonths */.P)(parsedDate, -1));
                        }
                    }
                }
                if (symbol === 'y') {
                    parsedDate = (0,create_date/* createDate */.J)(parseInt(middle, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0);
                    if (this.date && parsedDate.getDate() !== this.value.getDate()) {
                        parsedDate = (0,last_day_of_month/* lastDayOfMonth */.W)((0,add_months/* addMonths */.P)(parsedDate, -1));
                    }
                }
            }
            if (parsedDate) {
                this._value = parsedDate;
                this.setExisting(symbol, true);
                return { value: this.value };
            }
            current = '';
        }
        if (month) {
            parsedDate = this.intl.parseDate(prefix + month + suffix, this.format);
            if (parsedDate) {
                this._value = parsedDate;
                this.setExisting(symbol, true);
                return { value: this.value };
            }
        }
        if (currentChar === '0') {
            this.leadingZero = !this.isAbbrMonth(dateParts.partMap, symbol) ? (_a = {}, _a[symbol] = true, _a) : null;
            this.setExisting(symbol, false);
        }
        return { value: null };
    };
    KendoDate.prototype.symbolMap = function (symbol) {
        return this.intl.splitDateFormat(this.format).reduce(dateSymbolMap, {})[symbol];
    };
    KendoDate.prototype.resetLeadingZero = function () {
        var hasLeadingZero = this.leadingZero !== null;
        this.leadingZero = null;
        return hasLeadingZero;
    };
    KendoDate.prototype.isAbbrMonth = function (parts, symbol) {
        var pattern = this.partPattern(parts, symbol);
        return pattern.type === 'month' && pattern.names;
    };
    KendoDate.prototype.partPattern = function (parts, symbol) {
        return parts.filter(function (part) { return part.pattern.indexOf(symbol) !== -1; })[0];
    };
    KendoDate.prototype.matchMonth = function (typedChar) {
        this.typedMonthPart += typedChar.toLowerCase();
        if (this.monthNames.length === 0) {
            return '';
        }
        while (this.typedMonthPart.length > 0) {
            for (var i = 0; i < this.monthNames.length; i++) {
                if (this.monthNames[i].toLowerCase().indexOf(this.typedMonthPart) === 0) {
                    return this.monthNames[i];
                }
            }
            var monthAsNum = parseInt(this.typedMonthPart, 10);
            /* ensure they exact match */
            if (monthAsNum >= 1 && monthAsNum <= 12 && monthAsNum.toString() === this.typedMonthPart) {
                return this.monthNames[monthAsNum - 1];
            }
            this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
        }
        return '';
    };
    KendoDate.prototype.allFormatedMonths = function () {
        var dateFormatParts = this.intl.splitDateFormat(this.format);
        for (var i = 0; i < dateFormatParts.length; i++) {
            if (dateFormatParts[i].type === 'month' && dateFormatParts[i].names) {
                return this.intl.dateFormatNames(dateFormatParts[i].names);
            }
        }
        return [];
    };
    KendoDate.prototype.dateFormatString = function (date, format) {
        var dateFormatParts = this.intl.splitDateFormat(format);
        var parts = [];
        var partMap = [];
        for (var i = 0; i < dateFormatParts.length; i++) {
            var partLength = this.intl.formatDate(date, { pattern: dateFormatParts[i].pattern }).length;
            while (partLength > 0) {
                parts.push(this.symbols[dateFormatParts[i].pattern[0]] || '_');
                partMap.push(dateFormatParts[i]);
                partLength--;
            }
        }
        var returnValue = new Mask();
        returnValue.symbols = parts.join('');
        returnValue.partMap = partMap;
        return returnValue;
    };
    KendoDate.prototype.merge = function (text, mask) {
        // Important: right to left.
        var resultText = '';
        var resultFormat = '';
        var format = mask.symbols;
        for (var r = format.length - 1; r >= 0; r--) {
            if (this.knownParts.indexOf(format[r]) === -1 || this.getExisting(format[r])) {
                resultText = text[r] + resultText;
                resultFormat = format[r] + resultFormat;
            }
            else {
                var currentSymbol = format[r];
                while (r >= 0 && currentSymbol === format[r]) {
                    r--;
                }
                r++;
                if (this.leadingZero && this.leadingZero[currentSymbol]) {
                    resultText = '0' + resultText;
                }
                else {
                    resultText = this.dateFieldName(mask.partMap[r]) + resultText;
                }
                while (resultFormat.length < resultText.length) {
                    resultFormat = format[r] + resultFormat;
                }
            }
        }
        return { text: resultText, format: resultFormat };
    };
    KendoDate.prototype.dateFieldName = function (part) {
        var formatPlaceholder = (this.formatPlaceholder || 'wide');
        if (formatPlaceholder[part.type]) {
            return formatPlaceholder[part.type];
        }
        if (formatPlaceholder === 'formatPattern') {
            return part.pattern;
        }
        return this.intl.dateFieldName(Object.assign(part, { nameType: formatPlaceholder }));
    };
    return KendoDate;
}());


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-labels@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-labels@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_15955855411b7ea208bcb1bf9e2c8b11/node_modules/@progress/kendo-react-labels/dist/es/main.js)
var dist_es_main_js_ = __webpack_require__(98792);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/models/TimePart.js
/**
 * @hidden
 */
var TIME_PART = {
    dayperiod: 'dayperiod',
    hour: 'hour',
    millisecond: 'millisecond',
    minute: 'minute',
    second: 'second'
};

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/utils.js



var setter = function (method) { return function (date, value) {
    var clone = (0,clone_date/* cloneDate */.a)(date);
    clone[method](value);
    return clone;
}; };
var defaultGetters = [
    { type: TIME_PART.hour, getter: function (value) { return value.getHours(); } },
    { type: TIME_PART.minute, getter: function (value) { return value.getMinutes(); } },
    { type: TIME_PART.second, getter: function (value) { return value.getSeconds(); } },
    { type: TIME_PART.millisecond, getter: function (value) { return value.getMilliseconds(); } }
];
var left = function (getter) { return function (origin, _) { return getter(origin); }; };
var right = function (getter) { return function (_, candidate) { return getter(candidate); }; };
var convertToObject = function (parts) { return parts.reduce(function (obj, p) { obj[p.type] = p.type; return obj; }, {}); };
var getterByPart = function (parts) { return function (g) { return parts[g.type] ? right(g.getter) : left(g.getter); }; };
var gettersFactory = function (getters) { return function (parts) { return (getters.map(getterByPart(convertToObject(parts)))); }; };
var snapValue = function (getter, step, min, type) { return function (date) {
    var value = getter(date);
    var minValue = getter(min);
    if (type === 'hour') {
        return value - ((value - minValue) % step);
    }
    if (date.getTime() <= min.getTime()
        && value !== 0
        && value <= minValue) {
        return (Math.ceil(value / step)) * step;
    }
    return value - (value % step);
}; };
var snappersFactory = function (getters) { return function (steps, min) { return (getters.map(function (g) {
    var step = Math.floor(steps[g.type]);
    return step ? snapValue(g.getter, step, min, g.type) : g.getter;
})); }; };
/**
 * @hidden
 */
var generateGetters = gettersFactory(defaultGetters);
/**
 * @hidden
 */
var generateSnappers = snappersFactory(defaultGetters);
/**
 * @hidden
 */
var valueMerger = function (getters) { return function (origin, candidate) {
    origin.setHours.apply(origin, getters.map(function (g) { return g(origin, candidate); }));
    return origin;
}; };
/**
 * @hidden
 */
var snapTime = function (snappers) { return function (candidate) {
    var date = (0,clone_date/* cloneDate */.a)(candidate);
    date.setHours.apply(date, snappers.map(function (s) { return s(date); }));
    return date;
}; };
/**
 * @hidden
 */
var setHours = setter('setHours');
/**
 * @hidden
 */
var setMinutes = setter('setMinutes');
/**
 * @hidden
 */
var setSeconds = setter('setSeconds');
/**
 * @hidden
 */
var getNow = function () { return new Date(); };
/**
 * @hidden
 */
var utils_range = function (start, end, step) {
    if (step === void 0) { step = 1; }
    var result = [];
    for (var i = start; i < end; i = i + step) {
        result.push(i);
    }
    return result;
};
var normalizeTimes = function (candidate, min, max) { return ({
    candidateValue: setTime(MIDNIGHT_DATE, candidate),
    maxValue: (0,add_days/* addDays */.f)(setTime(MIDNIGHT_DATE, max), min.getHours() < max.getHours() ? 0 : 1),
    minValue: setTime(MIDNIGHT_DATE, min)
}); };
/**
 * @hidden
 */
var timeInRange = function (candidate, min, max) {
    if (!candidate || !min || !max) {
        return candidate;
    }
    var _a = normalizeTimes(candidate, min, max), candidateValue = _a.candidateValue, minValue = _a.minValue, maxValue = _a.maxValue;
    if (candidateValue < minValue) {
        return setTime(candidate, min);
    }
    if (candidateValue > maxValue) {
        return setTime(candidate, max);
    }
    return candidate;
};
/**
 * @hidden
 */
var isInTimeRange = function (candidate, min, max) {
    if (!candidate || !min || !max) {
        return true;
    }
    var _a = normalizeTimes(candidate, min, max), candidateValue = _a.candidateValue, minValue = _a.minValue, maxValue = _a.maxValue;
    return minValue <= candidateValue && candidateValue <= maxValue;
};
/**
 * @hidden
 */
var timepicker_utils_isInRange = function (candidate, min, max) {
    if (candidate === null) {
        return true;
    }
    var _a = normalizeTimes(candidate, min, max), candidateValue = _a.candidateValue, minValue = _a.minValue, maxValue = _a.maxValue;
    return minValue <= candidateValue && candidateValue <= maxValue;
};
/**
 * @hidden
 */
var isSmallerThanMin = function (val, min) {
    if (val === null || min === null) {
        return false;
    }
    var normalizedValue = setTime(MIDNIGHT_DATE, val);
    var normalizedMin = setTime(MIDNIGHT_DATE, min);
    return normalizedValue.getTime() < normalizedMin.getHours();
};
/**
 * @hidden
 */
var isBiggerThanMax = function (val, max) {
    if (val === null || max === null) {
        return false;
    }
    var normalizedValue = setTime(MIDNIGHT_DATE, val);
    var normalizedMax = setTime(MIDNIGHT_DATE, max);
    return normalizedMax.getTime() < normalizedValue.getHours();
};

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/DateInput.js
var DateInput_extends = (undefined && undefined.__extends) || (function () {
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
var DateInput_assign = (undefined && undefined.__assign) || function () {
    DateInput_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DateInput_assign.apply(this, arguments);
};
var DateInput_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
















var VALIDATION_MESSAGE = 'Please enter a valid value!';
// tslint:enable:max-line-length
/** @hidden */
var DateInputWithoutContext = /** @class */ (function (_super) {
    DateInput_extends(DateInputWithoutContext, _super);
    function DateInputWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this.kendoDate = null;
        _this.currentFormat = '';
        _this.paste = false;
        _this._element = null;
        _this._wrapper = null;
        _this._inputId = (0,main_js_.guid)();
        _this._lastSelectedSymbol = '';
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._element) {
                _this._element.focus();
            }
        };
        /**
         * @hidden
         */
        _this.setValidity = function () {
            if (_this.element && _this.element.setCustomValidity) {
                _this.element.setCustomValidity(_this.validity.valid
                    ? ''
                    : _this.props.validationMessage || DateInputWithoutContext.defaultProps.validationMessage);
            }
        };
        _this.updateOnPaste = function (event) {
            if (!_this.element || !_this.kendoDate) {
                return;
            }
            var value = (0,index_mjs_.provideIntlService)(_this).parseDate(_this.element.value, _this.props.format) || _this.value;
            var oldValue = _this.value;
            _this.kendoDate.setValue(value);
            _this.triggerChange(event, oldValue);
        };
        /* Handlers */
        _this.spinnersMouseDown = function (event) {
            /* do not steal focus from input when changing value with spinners */
            event.preventDefault();
            var activeElement = (0,main_js_.getActiveElement)(document);
            /* manually focus the input in case the user clicks the spinners first */
            if (_this.element && activeElement !== _this.element) {
                _this.element.focus({ preventScroll: true });
            }
        };
        _this.handlePaste = function () {
            _this.paste = true;
        };
        _this.elementChange = function (event) {
            if (!_this.element || !_this.kendoDate) {
                return;
            }
            if (_this.paste) {
                _this.updateOnPaste(event);
                _this.paste = false;
                return;
            }
            var _a = _this.kendoDate.getTextAndFormat(), text = _a.text, currentFormat = _a.format;
            _this.currentFormat = currentFormat;
            var dateBeforeChange = _this.value;
            var diff = approximateStringMatching(text, _this.currentFormat, _this.element.value, _this.selection.start);
            var navigationOnly = (diff.length === 1 && diff[0][1] === '_');
            if (!navigationOnly) {
                for (var i = 0; i < diff.length; i++) {
                    _this.kendoDate.parsePart(diff[i][0], diff[i][1]);
                }
            }
            if (diff.length && diff[0][0] !== '_') {
                _this.setSelection(_this.selectionBySymbol(diff[0][0]));
            }
            if (navigationOnly) {
                _this.switchDateSegment(1);
            }
            _this.triggerChange(event, dateBeforeChange);
        };
        _this.elementClick = function (_) {
            _this.setSelection(_this.selectionByIndex(_this.selection.start));
        };
        _this.nativeWheel = function (event) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (activeElement === _this.element) {
                event.preventDefault();
            }
        };
        _this.wheel = function (event) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (activeElement !== _this.element) {
                return;
            }
            if (event.nativeEvent.deltaY < 0) {
                _this.increasePart(event);
            }
            if (event.nativeEvent.deltaY > 0) {
                _this.decreasePart(event);
            }
        };
        _this.increasePart = function (event) {
            _this.modifyDateSegmentValue(1, event);
        };
        _this.decreasePart = function (event) {
            _this.modifyDateSegmentValue(-1, event);
        };
        _this.elementKeyDown = function (event) {
            if (event.altKey) {
                return;
            }
            switch (event.keyCode) {
                case 37:
                    /*
                        * Key: `Left Arrow`
                        * Action: Switches to previous logical* segment.
                        * (*) https://www.w3.org/International/articles/inline-bidi-markup/uba-basics
                        */
                    _this.switchDateSegment(-1);
                    break;
                case (38):
                    /*
                        * Key: `Up Arrow`
                        * Action: Increases the currently selected segment value.
                        */
                    _this.modifyDateSegmentValue(1, event);
                    break;
                case 39:
                    /*
                        * Key: `Right Arrow`
                        * Action: Switches to the next logical segment.
                        */
                    _this.switchDateSegment(1);
                    break;
                case 40:
                    /*
                        * Key: `Down Arrow`
                        * Action: Decreases the currently selected segment value.
                        */
                    _this.modifyDateSegmentValue(-1, event);
                    break;
                default:
                    /*
                        * Key: any
                        * Action: Does not prevent the default behavior.
                        */
                    return;
            }
            event.preventDefault();
        };
        _this.elementOnFocus = function (_) {
            if (_this.wrapper) {
                _this.wrapper.classList.add('k-focus');
            }
            _this.setState({ focused: true });
        };
        _this.elementOnBlur = function (_) {
            if (_this.wrapper) {
                _this.wrapper.classList.remove('k-focus');
            }
            _this.setState({ focused: false });
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            focused: false
        };
        return _this;
    }
    /**
     * @hidden
     */
    DateInputWithoutContext.prototype.componentDidMount = function () {
        this.setValidity();
        if (this.wrapper) {
            this.wrapper.addEventListener('wheel', this.nativeWheel, { passive: false });
        }
    };
    /**
     * @hidden
     */
    DateInputWithoutContext.prototype.componentDidUpdate = function (_, prevState) {
        if (this._lastSelectedSymbol && prevState.focused === this.state.focused) {
            this.setSelection(this.selectionBySymbol(this._lastSelectedSymbol));
        }
        else if (this.props.placeholder !== undefined && this.selection.start === this.selection.end) {
            this.setSelection({ start: 0, end: this.currentFormat.length });
        }
        this.setValidity();
    };
    /**
     * @hidden
     */
    DateInputWithoutContext.prototype.componentWillUnmount = function () {
        if (this.wrapper) {
            this.wrapper.removeEventListener('wheel', this.nativeWheel);
        }
    };
    /**
     * @hidden
     */
    DateInputWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.size, size = _b === void 0 ? DateInputWithoutContext.defaultProps.size : _b, _c = _a.fillMode, fillMode = _c === void 0 ? DateInputWithoutContext.defaultProps.fillMode : _c, _d = _a.rounded, rounded = _d === void 0 ? DateInputWithoutContext.defaultProps.rounded : _d;
        if (this.props._ref) {
            this.props._ref.current = this;
        }
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var props = DateInput_assign(DateInput_assign({}, DateInputWithoutContext.defaultProps), this.props);
        var name = props.name, label = props.label, id = props.id;
        var currentText = this.text;
        var text = currentText === this.props.placeholder ? '' : currentText;
        var placeholder = currentText === this.props.placeholder ? currentText : undefined;
        var inputId = id || this._inputId;
        var isValid = !this.validityStyles || this.validity.valid;
        var wrapperClassesInstance = DateInput_spreadArray([], wrapperClasses, true);
        if (this.props.className) {
            wrapperClassesInstance.push(this.props.className);
        }
        var dateinput = (index_js_.createElement(main_js_.AsyncFocusBlur, { onFocus: this.elementOnFocus, onBlur: this.elementOnBlur }, function (_a) {
            var _b;
            var onFocus = _a.onFocus, onBlur = _a.onBlur;
            return (index_js_.createElement("span", { ref: function (span) { _this._wrapper = span; }, style: !label
                    ? { width: _this.props.width }
                    : undefined, dir: _this.props.dir, className: (0,main_js_.classNames)('k-dateinput', 'k-input', (_b = {},
                    _b["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                    _b["k-input-".concat(fillMode)] = fillMode,
                    _b["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                    _b['k-invalid'] = !isValid,
                    _b['k-required'] = _this.required,
                    _b['k-disabled'] = _this.props.disabled,
                    _b), _this.props.className), onFocus: onFocus, onBlur: onBlur },
                index_js_.createElement("input", { role: _this.props.ariaRole || 'textbox', readOnly: _this.props.readonly, tabIndex: _this.props.tabIndex, disabled: _this.props.disabled, title: _this.props.title !== undefined ? _this.props.title : currentText, type: "text", spellCheck: false, autoComplete: "off", autoCorrect: "off", className: "k-input-inner", id: inputId, "aria-label": _this.props.ariaLabel, "aria-labelledby": _this.props.ariaLabelledBy, "aria-describedby": _this.props.ariaDescribedBy, "aria-haspopup": _this.props.ariaHasPopup, "aria-disabled": _this.props.disabled, "aria-expanded": _this.props.ariaExpanded, "aria-controls": _this.props.ariaControls, onWheel: _this.wheel, onClick: _this.elementClick, onInput: _this.elementChange, onPaste: _this.handlePaste, onKeyDown: _this.elementKeyDown, onChange: main_js_.noop, value: text, placeholder: placeholder, name: name, ref: function (input) { return _this._element = input; } }),
                _this.props.children,
                _this.props.spinners && (index_js_.createElement("span", { className: "k-input-spinner k-spin-button", onMouseDown: _this.spinnersMouseDown },
                    index_js_.createElement(es_main_js_.Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-increase", icon: 'caret-alt-up', svgIcon: index_es_js_.caretAltUpIcon, "aria-label": localizationService.toLanguageString(increaseValue, messages[increaseValue]), title: localizationService.toLanguageString(increaseValue, messages[increaseValue]), onClick: _this.increasePart }),
                    index_js_.createElement(es_main_js_.Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-decrease", icon: 'caret-alt-down', svgIcon: index_es_js_.caretAltDownIcon, "aria-label": localizationService.toLanguageString(decreaseValue, messages[decreaseValue]), title: localizationService.toLanguageString(decreaseValue, messages[decreaseValue]), onClick: _this.decreasePart })))));
        }));
        return label
            ? (index_js_.createElement(dist_es_main_js_.FloatingLabel, { label: label, editorId: inputId, editorValue: currentText, editorValid: isValid, editorDisabled: this.props.disabled, children: dateinput, style: { width: this.props.width } }))
            : dateinput;
    };
    Object.defineProperty(DateInputWithoutContext.prototype, "value", {
        /* Public Getters */
        /**
         * Gets the value of the DateInput.
         */
        get: function () {
            if (this.valueDuringOnChange !== undefined) {
                return this.valueDuringOnChange;
            }
            return this.kendoDate && this.kendoDate.getDateObject();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the DateInput.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : DateInputWithoutContext.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : DateInputWithoutContext.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "text", {
        /**
         * @hidden
         */
        get: function () {
            var props = DateInput_assign(DateInput_assign({}, DateInput.defaultProps), this.props);
            var _a = props.formatPlaceholder, formatPlaceholder = _a === void 0 ? DateInputWithoutContext.defaultProps.formatPlaceholder : _a, _b = props.format, format = _b === void 0 ? DateInputWithoutContext.defaultProps.format : _b, value = props.value, defaultValue = props.defaultValue;
            if (this.kendoDate === null) {
                this.kendoDate = new KendoDate(this.intl.bind(this), formatPlaceholder, format);
                this.kendoDate.setValue(value || defaultValue || null);
            }
            else {
                this.kendoDate.format = format;
                this.kendoDate.formatPlaceholder = formatPlaceholder;
            }
            if (value !== undefined && this.value !== value) {
                this.kendoDate.setValue(value);
            }
            var _c = this.kendoDate.getTextAndFormat(), currentText = _c.text, currentFormat = _c.format;
            this.currentFormat = currentFormat;
            return props.placeholder !== null && props.placeholder !== undefined
                && !this.state.focused
                && !this.kendoDate.hasValue()
                ? props.placeholder
                : currentText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the DateInput is set.
         */
        get: function () {
            var inRange = utils_isInRange(this.value, this.min, this.max)
                && isInTimeRange(this.value, this.props.minTime, this.props.maxTime);
            var customError = this.props.validationMessage !== undefined;
            var isValid = (!this.required || this.value !== null) && inRange;
            var valid = this.props.valid !== undefined ? this.props.valid : isValid;
            return {
                customError: customError,
                rangeOverflow: (this.value && this.max.getTime() < this.value.getTime()) || false,
                rangeUnderflow: (this.value && this.value.getTime() < this.min.getTime()) || false,
                valid: valid,
                valueMissing: this.value === null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "element", {
        /**
         * Gets the element of the DateInput.
         *
         * @return - An `HTMLInputElement`.
         *
         * @example
         * ```jsx
         * class App extends React.Component {
         *     constructor(props) {
         *         super(props);
         *     }
         *     element = null;
         *     render() {
         *         return (
         *             <div>
         *                 <DateInput
         *                     ref={(dateInput) =>
         *                         this.element = dateInput ? dateInput.element : null}
         *                 />
         *                 <button onClick={() => console.log(this.element)}>console.log the element</button>
         *             </div>
         *         );
         *     }
         * }
         *
         * ReactDOM.render(
         *     <App />,
         *     document.getElementsByTagName('my-app')[0]
         * );
         * ```
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : DateInputWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : DateInputWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateInputWithoutContext.prototype, "wrapper", {
        /**
         * @hidden
         */
        get: function () {
            return this._wrapper;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    DateInputWithoutContext.prototype.intl = function () {
        return (0,index_mjs_.provideIntlService)(this);
    };
    Object.defineProperty(DateInputWithoutContext.prototype, "selection", {
        /*  end handlers */
        get: function () {
            var returnValue = { start: 0, end: 0 };
            if (this.element !== null && this.element.selectionStart !== undefined) {
                returnValue = { start: this.element.selectionStart, end: this.element.selectionEnd };
            }
            return returnValue;
        },
        enumerable: false,
        configurable: true
    });
    DateInputWithoutContext.prototype.setSelection = function (selection) {
        var _this = this;
        this._lastSelectedSymbol = this.currentFormat[selection.start];
        window.requestAnimationFrame(function () {
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (_this.element && activeElement === _this.element && !_this.props.disableSelection) {
                _this.element.setSelectionRange(selection.start, selection.end);
            }
        });
    };
    DateInputWithoutContext.prototype.triggerChange = function (event, oldValue) {
        this.valueDuringOnChange = this.value;
        this.forceUpdate();
        if (this.props.onChange
            && !(0,is_equal/* isEqual */.n)(oldValue, this.value)) {
            // isEqual works with null
            this.props.onChange.call(undefined, {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                value: this.value,
                target: this
                // inRange: this.props.min && this.props.max ? isInRange(value, this.props.min, this.props.max) : true
            });
        }
        this.valueDuringOnChange = undefined;
    };
    DateInputWithoutContext.prototype.selectionBySymbol = function (symbol) {
        var start = -1;
        var end = 0;
        for (var i = 0; i < this.currentFormat.length; i++) {
            if (this.currentFormat[i] === symbol) {
                end = i + 1;
                if (start === -1) {
                    start = i;
                }
            }
        }
        if (start < 0) {
            start = 0;
        }
        return { start: start, end: end };
    };
    DateInputWithoutContext.prototype.selectionByIndex = function (index) {
        // console.log(42, index);
        var selection = { start: index, end: index };
        for (var i = index, j = index - 1; i < this.currentFormat.length || j >= 0; i++, j--) {
            if (i < this.currentFormat.length && this.currentFormat[i] !== '_') {
                selection = this.selectionBySymbol(this.currentFormat[i]);
                break;
            }
            if (j >= 0 && this.currentFormat[j] !== '_') {
                selection = this.selectionBySymbol(this.currentFormat[j]);
                break;
            }
        }
        return selection;
    };
    DateInputWithoutContext.prototype.switchDateSegment = function (offset) {
        var _a = this.selection, selectionStart = _a.start, selectionEnd = _a.end;
        if (selectionStart < selectionEnd &&
            this.currentFormat[selectionStart] !== this.currentFormat[selectionEnd - 1]) {
            this.setSelection(this.selectionByIndex(offset > 0 ? selectionStart : selectionEnd - 1));
            return;
        }
        var previousFormatSymbol = this.currentFormat[selectionStart];
        var a = selectionStart + offset;
        while (a > 0 && a < this.currentFormat.length) {
            if (this.currentFormat[a] !== previousFormatSymbol &&
                this.currentFormat[a] !== '_') {
                break;
            }
            a += offset;
        }
        if (this.currentFormat[a] === '_') {
            // no known symbol is found
            return;
        }
        var b = a;
        while (b >= 0 && b < this.currentFormat.length) {
            if (this.currentFormat[b] !== this.currentFormat[a]) {
                break;
            }
            b += offset;
        }
        if (a > b && (b + 1 !== selectionStart || a + 1 !== selectionEnd)) {
            this.setSelection({ start: b + 1, end: a + 1 });
        }
        else if (a < b && (a !== selectionStart || b !== selectionEnd)) {
            this.setSelection({ start: a, end: b });
        }
    };
    DateInputWithoutContext.prototype.modifyDateSegmentValue = function (offset, event) {
        if (!this.kendoDate) {
            return;
        }
        var oldValue = this.value;
        var symbol = this.currentFormat[this.selection.start];
        var currentStepSymbol = this.kendoDate.symbolMap(symbol);
        var step = ((this.props.steps || {})[currentStepSymbol] || 1) * offset;
        this.kendoDate.modifyPart(symbol, step);
        this.triggerChange(event, oldValue);
    };
    /**
     * @hidden
     */
    DateInputWithoutContext.displayName = 'DateInput';
    /**
     * @hidden
     */
    DateInputWithoutContext.propTypes = {
        value: prop_types_index_js_.instanceOf(Date),
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        formatPlaceholder: prop_types_index_js_.oneOfType([
            prop_types_index_js_.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
            prop_types_index_js_.shape({
                year: prop_types_index_js_.string,
                month: prop_types_index_js_.string,
                day: prop_types_index_js_.string,
                hour: prop_types_index_js_.string,
                minute: prop_types_index_js_.string,
                second: prop_types_index_js_.string
            })
        ]),
        width: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.number
        ]),
        tabIndex: prop_types_index_js_.number,
        title: prop_types_index_js_.string,
        steps: prop_types_index_js_.shape({
            year: prop_types_index_js_.number,
            month: prop_types_index_js_.number,
            day: prop_types_index_js_.number,
            hour: prop_types_index_js_.number,
            minute: prop_types_index_js_.number,
            second: prop_types_index_js_.number
        }),
        min: prop_types_index_js_.instanceOf(Date),
        max: prop_types_index_js_.instanceOf(Date),
        disabled: prop_types_index_js_.bool,
        spinners: prop_types_index_js_.bool,
        name: prop_types_index_js_.string,
        dir: prop_types_index_js_.string,
        label: prop_types_index_js_.string,
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string,
        ariaRole: prop_types_index_js_.string,
        ariaHasPopup: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool,
            prop_types_index_js_.string
        ]),
        ariaExpanded: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool
        ]),
        onChange: prop_types_index_js_.func,
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        valid: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
    };
    /**
     * @hidden
     */
    DateInputWithoutContext.defaultProps = {
        format: defaultFormat,
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        formatPlaceholder: defaultFormatPlaceholder,
        // defaultValue: null as Date | null,
        spinners: false,
        disabled: false,
        max: (0,clone_date/* cloneDate */.a)(MAX_DATE),
        min: (0,clone_date/* cloneDate */.a)(MIN_DATE),
        minTime: (0,clone_date/* cloneDate */.a)(MIN_TIME),
        maxTime: (0,clone_date/* cloneDate */.a)(MAX_TIME),
        required: false,
        validityStyles: true,
        validationMessage: VALIDATION_MESSAGE,
        placeholder: null,
        // the rest of the properties are undefined by default
        ariaHasPopup: 'grid'
    };
    return DateInputWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `DateInput` component.
 * Used for global configuration of all `DateInput` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var DateInputPropsContext = (0,main_js_.createPropsContext)();
;
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the KendoReact DateInput Component.
 *
 * Accepts properties of type [DateInputProps]({% slug api_dateinputs_dateinputprops %}).
 * Obtaining the `ref` returns an object of type [DateInputHandle]({% slug api_dateinputs_dateinputhandle %}).
 */
var DateInput = (0,main_js_.withPropsContext)(DateInputPropsContext, DateInputWithoutContext);
DateInput.displayName = 'KendoReactDateInput';
(0,index_mjs_.registerForIntl)(DateInputWithoutContext);
(0,index_mjs_.registerForLocalization)(DateInputWithoutContext);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-i_8c9e28bc2eed5a1299193a533ee31e7c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var kendo_react_popup_dist_es_main_js_ = __webpack_require__(60446);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/ToggleButton.js

/**
 * Represents the default `toggleButton` component rendered by the [KendoReact Scheduler DatePicker]({% slug overview_datepicker %}).
 */
var ToggleButton = es_main_js_.Button;

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/common/PickerWrap.js


/**
 * @hidden
 * @deprecated
 */
var PickerWrap = index_js_.forwardRef(function (props, ref) {
    var _ref = props._ref;
    var element = index_js_.useRef(null);
    index_js_.useImperativeHandle(ref, function () { return element.current; });
    index_js_.useImperativeHandle(_ref, function () { return element.current; });
    var className = index_js_.useMemo(function () { return (0,main_js_.classNames)(props.className, 'k-picker-wrap'); }, [props.className]);
    return (index_js_.createElement("span", { ref: element, id: props.id, style: props.style, className: className, tabIndex: props.tabIndex }, props.children));
});

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/hooks/usePickerFloatingLabel.js
var usePickerFloatingLabel_assign = (undefined && undefined.__assign) || function () {
    usePickerFloatingLabel_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return usePickerFloatingLabel_assign.apply(this, arguments);
};


/**
 * @hidden
 */
var usePickerFloatingLabel = function (dateInput) {
    var _a = index_js_.useState(false), show = _a[0], setShow = _a[1];
    var syncText = function () {
        if (dateInput.current) {
            setShow(Boolean(dateInput.current.text));
        }
    };
    index_js_.useEffect(syncText);
    return {
        editorValue: show
    };
};
/**
 * @hidden
 */
var PickerFloatingLabel = function (props) {
    var floatingLabelProps = usePickerFloatingLabel(props.dateInput);
    return (index_js_.createElement(dist_es_main_js_.FloatingLabel, usePickerFloatingLabel_assign({}, props, floatingLabelProps)));
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-layout@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/main.js)
var kendo_react_layout_dist_es_main_js_ = __webpack_require__(13919);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/common/AdaptiveMode.js
var AdaptiveMode_assign = (undefined && undefined.__assign) || function () {
    AdaptiveMode_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return AdaptiveMode_assign.apply(this, arguments);
};




/** @hidden */
var MOBILE_SMALL_DEVISE = 500;
/** @hidden */
var AdaptiveMode = function (props) {
    var footer = props.footer, children = props.children, _a = props.windowWidth, windowWidth = _a === void 0 ? 0 : _a, navigatable = props.navigatable, navigatableElements = props.navigatableElements, expand = props.expand, animation = props.animation, onClose = props.onClose, adaptiveTitle = props.adaptiveTitle, mobileFilter = props.mobileFilter;
    var defaultProps = {
        navigatable: navigatable || false,
        navigatableElements: navigatableElements || [],
        expand: expand,
        animation: animation === false ? false : true,
        onClose: onClose,
        animationStyles: windowWidth <= MOBILE_SMALL_DEVISE ? { top: 0, width: '100%', height: '100%' } : undefined,
        className: windowWidth <= MOBILE_SMALL_DEVISE
            ? 'k-adaptive-actionsheet k-actionsheet-fullscreen'
            : 'k-adaptive-actionsheet k-actionsheet-bottom'
    };
    return (index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheet, AdaptiveMode_assign({}, defaultProps),
        index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetHeader, { className: 'k-text-center' },
            index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" },
                index_js_.createElement("div", { className: "k-actionsheet-title" },
                    index_js_.createElement("div", null, adaptiveTitle)),
                index_js_.createElement("div", { className: "k-actionsheet-actions" },
                    index_js_.createElement(es_main_js_.Button, { tabIndex: 0, "aria-label": "Cancel", "aria-disabled": "false", type: "button", fillMode: "flat", icon: 'x', svgIcon: index_es_js_.xIcon, onClick: onClose }))),
            mobileFilter &&
                index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, mobileFilter)),
        children,
        footer && index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetFooter, { className: 'k-actions k-actions-stretched' },
            index_js_.createElement(es_main_js_.Button, { size: "large", tabIndex: 0, "aria-label": footer.cancelText, "aria-disabled": "false", type: "button", onClick: footer.onCancel }, footer.cancelText),
            index_js_.createElement(es_main_js_.Button, { tabIndex: 0, themeColor: "primary", size: "large", "aria-label": footer.applyText, "aria-disabled": "false", type: "button", onClick: footer.onApply }, footer.applyText))));
};

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/common/constants.js
/** @hidden */
var constants_MOBILE_SMALL_DEVISE = 500;
/** @hidden */
var MOBILE_MEDIUM_DEVISE = 768;

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/DatePicker.js
var DatePicker_extends = (undefined && undefined.__extends) || (function () {
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
var DatePicker_assign = (undefined && undefined.__assign) || function () {
    DatePicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DatePicker_assign.apply(this, arguments);
};
var DatePicker_rest = (undefined && undefined.__rest) || function (s, e) {
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



















/** @hidden */
var DatePickerWithoutContext = /** @class */ (function (_super) {
    DatePicker_extends(DatePickerWithoutContext, _super);
    function DatePickerWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this._popupId = (0,main_js_.guid)();
        _this._element = null;
        _this._dateInput = index_js_.createRef();
        _this._calendar = null;
        _this.shouldFocusDateInput = false;
        _this.prevShow = false;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this.dateInput) {
                _this.dateInput.focus();
            }
        };
        _this.setCalendarRef = function (calendar) {
            _this._calendar = calendar;
        };
        _this.nextValue = function (nextProps, nextState) {
            return nextProps.value !== undefined
                ? nextProps.value
                : nextState.value;
        };
        _this.nextShow = function (nextProps, nextState) {
            return nextProps.show !== undefined
                ? nextProps.show
                : nextState.show;
        };
        _this.renderPopup = function () {
            var _a = _this.props, disabled = _a.disabled, min = _a.min, max = _a.max, weekNumber = _a.weekNumber, focusedDate = _a.focusedDate;
            var _b = _this.props.popupSettings, popupClass = _b.popupClass, otherPopupSettings = DatePicker_rest(_b, ["popupClass"]);
            var show = _this.show;
            var value = _this.value;
            var sanitizedValue = value && (0,get_date/* getDate */.p)(value);
            var popupClassNames = (0,main_js_.classNames)('k-calendar-container k-group k-reset', popupClass);
            var popupProps = DatePicker_assign({ popupClass: 'k-datepicker-popup', show: show, anchor: _this._element, className: popupClassNames, id: _this._popupId, anchorAlign: {
                    horizontal: 'left',
                    vertical: 'bottom'
                }, popupAlign: {
                    horizontal: 'left',
                    vertical: 'top'
                } }, otherPopupSettings);
            var calendarProps = {
                disabled: disabled,
                value: sanitizedValue,
                min: min,
                max: max,
                weekNumber: weekNumber,
                focusedDate: focusedDate,
                className: _this.mobileMode ? 'k-calendar-lg' : '',
                navigation: _this.mobileMode ? false : true,
                onChange: _this.handleCalendarValueChange
            };
            if (_this.mobileMode) {
                return index_js_.createElement(_this.calendarComp, DatePicker_assign({ _ref: _this.setCalendarRef }, calendarProps));
            }
            return (index_js_.createElement(_this.popupComp, DatePicker_assign({}, popupProps),
                index_js_.createElement(_this.calendarComp, DatePicker_assign({ _ref: _this.setCalendarRef }, calendarProps))));
        };
        _this.renderAdaptivePopup = function () {
            var _a = _this.state.windowWidth, windowWidth = _a === void 0 ? 0 : _a;
            var actionSheetProps = {
                expand: _this.show,
                onClose: _this.handleBlur,
                adaptiveTitle: _this.props.adaptiveTitle,
                windowWidth: windowWidth
            };
            return (index_js_.createElement(AdaptiveMode, DatePicker_assign({}, actionSheetProps),
                index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetContent, { className: '!k-overflow-hidden' }, _this.renderPopup())));
        };
        _this.handleInputValueChange = function (event) {
            _this.handleValueChange(event.value, event);
        };
        _this.handleCalendarValueChange = function (event) {
            var value = _this.mergeTime(event.value);
            _this.handleValueChange(value, event);
        };
        _this.handleValueChange = function (value, event) {
            _this.setState({
                value: (0,clone_date/* cloneDate */.a)(value || undefined)
            });
            _this.valueDuringOnChange = value;
            _this.showDuringOnChange = false;
            if (!_this.mobileMode) {
                _this.shouldFocusDateInput = true;
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: _this.value,
                    show: _this.show,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
            _this.showDuringOnChange = undefined;
            _this.setShow(false);
        };
        _this.handleFocus = function () {
            _this.setState({ focused: true });
        };
        _this.handleBlur = function () {
            _this.setState({ focused: false });
            _this.setShow(false);
        };
        _this.handleIconClick = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.shouldFocusDateInput = true;
            _this.setShow(!_this.show);
        };
        _this.handleIconMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleKeyDown = function (event) {
            var altKey = event.altKey, keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.esc) {
                _this.shouldFocusDateInput = true;
                _this.setShow(false);
                return;
            }
            if (altKey && (keyCode === main_js_.Keys.up || keyCode === main_js_.Keys.down)) {
                event.preventDefault();
                event.stopPropagation();
                _this.shouldFocusDateInput = keyCode === main_js_.Keys.up;
                _this.setShow(keyCode === main_js_.Keys.down);
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            value: _this.props.defaultValue || DatePickerWithoutContext.defaultProps.defaultValue,
            show: _this.props.defaultShow || DatePickerWithoutContext.defaultProps.defaultShow,
            focused: false
        };
        return _this;
    }
    Object.defineProperty(DatePickerWithoutContext.prototype, "document", {
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
    Object.defineProperty(DatePickerWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the DatePickerWithoutContext.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "mobileMode", {
        /**
         * The mobile mode of the DatePicker.
         */
        get: function () {
            var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE && this.props.adaptive;
            return !!isAdaptive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "dateInput", {
        /**
         * Gets the DateInput component inside the DatePicker component.
         */
        get: function () {
            return this._dateInput.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "calendar", {
        /**
         * Gets the Calendar component inside the DatePicker component.
         */
        get: function () {
            return this._calendar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "value", {
        /**
         * Gets the value of the DatePickerWithoutContext.
         */
        get: function () {
            var value = this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
            return (value !== null) ? (0,clone_date/* cloneDate */.a)(value) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "show", {
        /**
         * Gets the popup state of the DatePickerWithoutContext.
         */
        get: function () {
            return this.showDuringOnChange !== undefined
                ? this.showDuringOnChange
                : this.props.show !== undefined
                    ? this.props.show
                    : this.state.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the DatePickerWithoutContext.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : DatePickerWithoutContext.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : DatePickerWithoutContext.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "dateInputComp", {
        get: function () {
            return this.props.dateInput || DatePickerWithoutContext.defaultProps.dateInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "toggleButtonComp", {
        get: function () {
            return this.props.toggleButton || DatePickerWithoutContext.defaultProps.toggleButton;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "calendarComp", {
        get: function () {
            return this.props.calendar || DatePickerWithoutContext.defaultProps.calendar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "popupComp", {
        get: function () {
            return this.props.popup || DatePickerWithoutContext.defaultProps.popup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "pickerWrapComp", {
        get: function () {
            return this.props.pickerWrap || DatePickerWithoutContext.defaultProps.pickerWrap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the DatePicker is set.
         */
        get: function () {
            var inRange = isInDateRange(this.value, this.min, this.max);
            var customError = this.props.validationMessage !== undefined;
            var isValid = (!this.required || this.value !== null) && inRange;
            var valid = this.props.valid !== undefined ? this.props.valid : isValid;
            return {
                customError: customError,
                rangeOverflow: (this.value && this.max.getTime() < this.value.getTime()) || false,
                rangeUnderflow: (this.value && this.value.getTime() < this.min.getTime()) || false,
                valid: valid,
                valueMissing: this.value === null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : DatePickerWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : DatePickerWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    DatePickerWithoutContext.prototype.componentDidMount = function () {
        var _a;
        this.observerResize = main_js_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
        if (this.show) {
            // If defaultShow is true during the initial render, the popup is not aligned.
            this.forceUpdate();
        }
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.observe(this.document.body);
        }
    };
    /**
     * @hidden
     */
    DatePickerWithoutContext.prototype.componentDidUpdate = function () {
        if (this._calendar && this._calendar.element && this.show && !this.prevShow) {
            this._calendar.element.focus({ preventScroll: true });
        }
        if (this.dateInput
            && this.dateInput.element
            && !this.show
            && this.shouldFocusDateInput) {
            this.dateInput.element.focus({ preventScroll: true });
        }
        this.prevShow = this.show;
        this.shouldFocusDateInput = false;
    };
    /**
     * @hidden
     */
    DatePickerWithoutContext.prototype.componentWillUnmount = function () {
        var _a;
        clearTimeout(this.nextTickId);
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.disconnect();
        }
    };
    /**
     * @hidden
     */
    DatePickerWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.size, size = _b === void 0 ? DatePickerWithoutContext.defaultProps.size : _b, _c = _a.rounded, rounded = _c === void 0 ? DatePickerWithoutContext.defaultProps.rounded : _c, _d = _a.fillMode, fillMode = _d === void 0 ? DatePickerWithoutContext.defaultProps.fillMode : _d, disabled = _a.disabled, tabIndex = _a.tabIndex, title = _a.title, id = _a.id, format = _a.format, formatPlaceholder = _a.formatPlaceholder, min = _a.min, max = _a.max, className = _a.className, width = _a.width, name = _a.name, validationMessage = _a.validationMessage, required = _a.required, validityStyles = _a.validityStyles, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, ariaLabel = _a.ariaLabel;
        var show = this.show;
        var value = this.value;
        var isValid = !this.validityStyles || this.validity.valid;
        var dateInputProps = {
            disabled: disabled,
            format: format,
            formatPlaceholder: formatPlaceholder,
            id: id,
            ariaLabelledBy: ariaLabelledBy,
            ariaDescribedBy: ariaDescribedBy,
            ariaLabel: ariaLabel,
            max: max,
            min: min,
            name: name,
            onChange: this.handleInputValueChange,
            required: required,
            tabIndex: !show ? tabIndex : -1,
            title: title,
            valid: this.validity.valid,
            validationMessage: validationMessage,
            validityStyles: validityStyles,
            value: value,
            label: undefined,
            placeholder: !this.state.focused ? this.props.placeholder : null,
            ariaExpanded: this.show,
            size: null,
            fillMode: null,
            rounded: null
        };
        var toggleButtonTitle = (0,index_mjs_.provideLocalizationService)(this)
            .toLanguageString(toggleCalendar, messages[toggleCalendar]);
        var datepicker = (index_js_.createElement(main_js_.AsyncFocusBlur, { onFocus: this.handleFocus, onBlur: this.mobileMode ? undefined : this.handleBlur, onSyncBlur: this.props.onBlur, onSyncFocus: this.props.onFocus }, function (_a) {
            var _b;
            var onFocus = _a.onFocus, onBlur = _a.onBlur;
            return (index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement("span", { ref: function (span) { _this._element = span; }, className: (0,main_js_.classNames)('k-input', 'k-datepicker', (_b = {},
                        _b["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                        _b["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                        _b["k-input-".concat(fillMode)] = fillMode,
                        _b['k-invalid'] = !isValid,
                        _b['k-required'] = _this.required,
                        _b['k-disabled'] = _this.props.disabled,
                        _b), className), onKeyDown: _this.handleKeyDown, style: { width: width }, onFocus: onFocus, onBlur: onBlur, onClick: _this.mobileMode ? _this.handleIconClick : undefined },
                    index_js_.createElement(_this.dateInputComp, DatePicker_assign({ _ref: _this._dateInput, ariaRole: 'combobox', readonly: _this.mobileMode, ariaExpanded: _this.show, ariaControls: _this._popupId }, dateInputProps)),
                    index_js_.createElement(_this.toggleButtonComp, { type: "button", icon: "calendar", svgIcon: index_es_js_.calendarIcon, title: toggleButtonTitle, className: "k-input-button", rounded: null, onClick: _this.mobileMode ? undefined : _this.handleIconClick, "aria-label": toggleButtonTitle, onMouseDown: _this.handleIconMouseDown }),
                    !_this.mobileMode && _this.renderPopup()),
                _this.mobileMode && _this.renderAdaptivePopup()));
        }));
        return this.props.label
            ? (index_js_.createElement(PickerFloatingLabel, { dateInput: this._dateInput, label: this.props.label, editorId: id, editorValid: isValid, editorDisabled: this.props.disabled, children: datepicker, style: { width: this.props.width } }))
            : datepicker;
    };
    DatePickerWithoutContext.prototype.setShow = function (show) {
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        if (this.show === show) {
            return;
        }
        this.setState({ show: show });
        if (show && onOpen) {
            onOpen.call(undefined, {
                target: this
            });
        }
        if (!show && onClose) {
            onClose.call(undefined, {
                target: this
            });
        }
    };
    DatePickerWithoutContext.prototype.mergeTime = function (value) {
        return this.value && value ? setTime(value, this.value) : value;
    };
    DatePickerWithoutContext.prototype.nextTick = function (f) {
        // XXX: use window.setTimeout due to async focus/blur events in IE, and missing relatedTarget prop.
        // XXX: https://github.com/facebook/react/issues/3751
        // Handles multiple focus events happening at the same time.
        clearTimeout(this.nextTickId);
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    DatePickerWithoutContext.prototype.calculateMedia = function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            this.setState({ windowWidth: entry.target.clientWidth });
        }
        ;
    };
    ;
    /**
     * @hidden
     */
    DatePickerWithoutContext.displayName = 'DatePicker';
    /**
     * @hidden
     */
    DatePickerWithoutContext.propTypes = {
        className: prop_types_index_js_.string,
        defaultShow: prop_types_index_js_.bool,
        defaultValue: prop_types_index_js_.instanceOf(Date),
        disabled: prop_types_index_js_.bool,
        focusedDate: prop_types_index_js_.instanceOf(Date),
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        formatPlaceholder: prop_types_index_js_.oneOfType([
            prop_types_index_js_.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
            prop_types_index_js_.shape({
                year: prop_types_index_js_.string,
                month: prop_types_index_js_.string,
                day: prop_types_index_js_.string,
                hour: prop_types_index_js_.string,
                minute: prop_types_index_js_.string,
                second: prop_types_index_js_.string
            })
        ]),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string,
        min: prop_types_index_js_.instanceOf(Date),
        max: prop_types_index_js_.instanceOf(Date),
        name: prop_types_index_js_.string,
        popupSettings: prop_types_index_js_.shape({
            animate: prop_types_index_js_.bool,
            appendTo: prop_types_index_js_.any,
            popupClass: prop_types_index_js_.string
        }),
        show: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        title: prop_types_index_js_.string,
        value: prop_types_index_js_.instanceOf(Date),
        weekNumber: prop_types_index_js_.bool,
        width: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        valid: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline']),
        adaptive: prop_types_index_js_.bool,
        adaptiveTitle: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    DatePickerWithoutContext.defaultProps = {
        defaultShow: false,
        defaultValue: null,
        dateInput: DateInput,
        calendar: Calendar,
        toggleButton: ToggleButton,
        popup: kendo_react_popup_dist_es_main_js_.Popup,
        pickerWrap: PickerWrap,
        disabled: false,
        format: 'd',
        max: MAX_DATE,
        min: MIN_DATE,
        popupSettings: {},
        tabIndex: 0,
        weekNumber: false,
        required: false,
        validityStyles: true,
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };
    return DatePickerWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `DatePicker` component.
 * Used for global configuration of all `DatePicker` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var DatePickerPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare */
/**
 * Represents the KendoReact DatePicker Component.
 *
 * Accepts properties of type [DatePickerProps]({% slug api_dateinputs_datepickerprops %}).
 * Obtaining the `ref` returns an object of type [DatePickerHandle]({% slug api_dateinputs_datepickerhandle %}).
 */
var DatePicker = (0,main_js_.withPropsContext)(DatePickerPropsContext, DatePickerWithoutContext);
DatePicker.displayName = 'KendoReactDatePicker';
(0,index_mjs_.registerForLocalization)(DatePickerWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/services/DayPeriodService.js

var DayPeriodService_setHours = function (date, hours) {
    var clone = (0,clone_date/* cloneDate */.a)(date);
    clone.setHours(hours);
    return clone;
};
var isAM = function (value) { return value !== null && value < 12; };
var isPM = function (value) { return value !== null && (!value || value > 11); };
var inRange = function (value, min, max) { return ((!min && !max) || (value >= min && value <= max)); };
var inReverseRange = function (value, min, max) { return ((!min && !max) || value >= min || value <= max); };
/**
 * @hidden
 */
var DayPeriodService = /** @class */ (function () {
    function DayPeriodService(intl) {
        this.intl = intl;
        this.min = null;
        this.max = null;
        this.part = null;
    }
    /**
     * @hidden
     */
    DayPeriodService.prototype.apply = function (value, candidate) {
        var hour = value.getHours();
        var hourAM = isAM(hour);
        var candidateAM = isAM(candidate.getHours());
        if ((hourAM && candidateAM) || (!hourAM && !candidateAM)) {
            return value;
        }
        var _a = this.normalizedRange(), min = _a[0], _b = _a[1], max = _b === void 0 ? 24 : _b;
        var result = hour + (candidateAM ? -12 : 12);
        return DayPeriodService_setHours(value, Math.min(Math.max(min, result), (max || 24)));
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.configure = function (settings) {
        var _a = settings.min, min = _a === void 0 ? this.min : _a, _b = settings.max, max = _b === void 0 ? this.max : _b, _c = settings.part, part = _c === void 0 ? this.part : _c;
        this.min = min;
        this.max = max;
        this.part = part;
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.data = function (_) {
        var names = this.part && this.part.names;
        if (!names || !this.min) {
            return [];
        }
        var data = [];
        var _a = this.normalizedRange(), min = _a[0], max = _a[1];
        var dayPeriod = this.intl.dateFormatNames(names);
        if (isAM(min)) {
            data.push({ text: dayPeriod.am, value: DayPeriodService_setHours(this.min, min) });
        }
        if (isPM(max)) {
            data.push({ text: dayPeriod.pm, value: DayPeriodService_setHours(this.min, Math.max(12, max)) });
        }
        return this.min.getHours() !== min ? data.reverse() : data;
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.isRangeChanged = function (_, __) {
        return false;
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.limitRange = function (min, max, _) {
        return [min, max];
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.total = function () {
        var _a = this.normalizedRange(), min = _a[0], max = _a[1];
        if (!min && !max) {
            return 2;
        }
        if (min > 11 || max < 12) {
            return 1;
        }
        return 2;
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.selectedIndex = function (value) {
        if (!this.valueInList(value) || !this.min) {
            return -1;
        }
        var index = Math.floor(value.getHours() / 12);
        return this.min.getHours() === this.normalizedRange()[0] ? index : (index === 0 ? 1 : 0);
    };
    /**
     * @hidden
     */
    DayPeriodService.prototype.valueInList = function (value) {
        if (!this.min || !this.max) {
            return false;
        }
        var reverse = this.min.getHours() !== this.normalizedRange()[0];
        var isInRange = reverse ? inReverseRange : inRange;
        return isInRange(value.getHours(), this.min.getHours(), this.max.getHours());
    };
    DayPeriodService.prototype.normalizedRange = function () {
        var minHour = this.min.getHours();
        var maxHour = this.max.getHours();
        return [
            Math.min(minHour, maxHour),
            Math.max(minHour, maxHour)
        ];
    };
    return DayPeriodService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/services/HoursService.js



var HOURS_IN_DAY = 24;
var clampToRange = function (rangeValue) { return function (value) { return value % rangeValue; }; };
var clamp = clampToRange(HOURS_IN_DAY);
var stepper = function (start, step) { return function (idx) { return clamp(start + (idx * step)); }; };
var distanceFromMin = function (value, min) { return clamp(HOURS_IN_DAY + value - min); };
var limit = function (borderValue) { return function (barrier, value) {
    var useBarrier = !value || (0,get_date/* getDate */.p)(barrier).getTime() === (0,get_date/* getDate */.p)(value).getTime();
    return useBarrier ? barrier : setHours(barrier, borderValue);
}; };
var limitDown = limit(0);
var limitUp = limit(HOURS_IN_DAY - 1);
/**
 * @hidden
 */
var HoursService = /** @class */ (function () {
    function HoursService(intl) {
        this.intl = intl;
        this.boundRange = false;
        this.insertUndividedMax = false;
        this.min = null;
        this.max = null;
        this.step = 0;
        this.toListItem = null;
    }
    HoursService.prototype.apply = function (value, candidate) {
        return setHours(value, candidate.getHours());
    };
    HoursService.prototype.configure = function (settings) {
        var _this = this;
        var _a = settings.boundRange, boundRange = _a === void 0 ? this.boundRange : _a, _b = settings.insertUndividedMax, insertUndividedMax = _b === void 0 ? this.insertUndividedMax : _b, _c = settings.min, min = _c === void 0 ? this.min : _c, _d = settings.max, max = _d === void 0 ? this.max : _d, part = settings.part, _e = settings.step, step = _e === void 0 ? this.step : _e;
        this.boundRange = boundRange;
        this.insertUndividedMax = insertUndividedMax;
        this.toListItem = function (hour) {
            var date = setHours(MIDNIGHT_DATE, hour);
            return {
                text: _this.intl.formatDate(date, part.pattern),
                value: date
            };
        };
        this.min = min;
        this.max = max;
        this.step = step;
    };
    HoursService.prototype.data = function (selectedValue) {
        var _this = this;
        var min = this.range(selectedValue)[0];
        var getHour = stepper(min, this.step);
        var convertToItem = function (idx) { return (_this.toListItem && _this.toListItem(getHour(idx))); };
        var data = utils_range(0, this.countFromMin(selectedValue)).map(convertToItem);
        this.addLast(data);
        if (selectedValue) {
            this.addMissing(data, selectedValue);
        }
        return data;
    };
    HoursService.prototype.isRangeChanged = function (min, max) {
        if (!this.min || !this.max) {
            return false;
        }
        return !(0,is_equal/* isEqual */.n)(this.min, min) || !(0,is_equal/* isEqual */.n)(this.max, max);
    };
    HoursService.prototype.limitRange = function (min, max, value) {
        return this.boundRange ? [limitDown(min, value), limitUp(max, value)] : [min, max];
    };
    HoursService.prototype.total = function (value) {
        var last = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
        var missing = this.isMissing(value) ? 1 : 0;
        return this.countFromMin(value) + missing + last;
    };
    HoursService.prototype.selectedIndex = function (value) {
        return Math.ceil(this.divideByStep(value));
    };
    HoursService.prototype.valueInList = function (value) {
        if (!value) {
            return true;
        }
        var matchMax = this.insertUndividedMax && this.lastHour(value) === value.getHours();
        return matchMax || !this.isMissing(value);
    };
    HoursService.prototype.addLast = function (data, value) {
        if (this.insertUndividedMax && this.isLastMissing(value) && this.toListItem) {
            data.push(this.toListItem(this.lastHour(value)));
        }
        return data;
    };
    HoursService.prototype.addMissing = function (data, value) {
        if (this.valueInList(value)) {
            return data;
        }
        if (this.toListItem) {
            var missingItem = this.toListItem(value.getHours());
            data.splice(this.selectedIndex(value), 0, missingItem);
        }
        return data;
    };
    HoursService.prototype.countFromMin = function (value) {
        var _a = this.range(value), min = _a[0], max = _a[1];
        return Math.floor(distanceFromMin(max, min) / this.step) + 1; /* include min */
    };
    HoursService.prototype.isMissing = function (value) {
        if (!value) {
            return false;
        }
        return this.selectedIndex(value) !== this.divideByStep(value);
    };
    HoursService.prototype.isLastMissing = function (value) {
        return this.max !== null && this.isMissing(setHours(this.max, this.lastHour(value)));
    };
    HoursService.prototype.divideByStep = function (value) {
        return distanceFromMin(value.getHours(), this.min.getHours()) / this.step;
    };
    HoursService.prototype.lastHour = function (value) {
        return this.range(value)[1];
    };
    HoursService.prototype.range = function (value) {
        var _a = this.limitRange(this.min, this.max, value), min = _a[0], max = _a[1];
        return [min.getHours(), max.getHours()];
    };
    return HoursService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/services/MinutesService.js



var MINUTES_IN_HOUR = 60;
var MinutesService_clampToRange = function (rangeValue) { return function (value) { return value % rangeValue; }; };
var MinutesService_clamp = MinutesService_clampToRange(MINUTES_IN_HOUR);
var MinutesService_stepper = function (start, step) { return function (idx) { return MinutesService_clamp(start + (idx * step)); }; };
var MinutesService_distanceFromMin = function (value, min) { return MinutesService_clamp(MINUTES_IN_HOUR + value - min); };
var MinutesService_limit = function (borderValue) { return function (barrier, value) {
    var useBarrier = !value || barrier.getHours() === value.getHours();
    return useBarrier ? barrier : setMinutes(barrier, borderValue);
}; };
var MinutesService_limitDown = MinutesService_limit(0);
var MinutesService_limitUp = MinutesService_limit(MINUTES_IN_HOUR - 1);
/**
 * @hidden
 */
var MinutesService = /** @class */ (function () {
    function MinutesService(intl) {
        this.intl = intl;
        this.toListItem = null;
        this.min = null;
        this.max = null;
        this.step = 0;
        this.insertUndividedMax = false;
    }
    MinutesService.prototype.apply = function (value, candidate) {
        return setMinutes(value, candidate.getMinutes());
    };
    MinutesService.prototype.configure = function (settings) {
        var _this = this;
        var _a = settings.insertUndividedMax, insertUndividedMax = _a === void 0 ? this.insertUndividedMax : _a, _b = settings.min, min = _b === void 0 ? this.min : _b, _c = settings.max, max = _c === void 0 ? this.max : _c, part = settings.part, _d = settings.step, step = _d === void 0 ? this.step : _d;
        this.insertUndividedMax = insertUndividedMax;
        this.toListItem = function (minute) {
            var date = setMinutes(MIDNIGHT_DATE, minute);
            return {
                text: _this.intl.formatDate(date, part.pattern),
                value: date
            };
        };
        this.min = min;
        this.max = max;
        this.step = step;
    };
    MinutesService.prototype.data = function (selectedValue) {
        var _this = this;
        var min = this.range(selectedValue)[0];
        var getMinute = MinutesService_stepper(min, this.step);
        var convertToItem = function (idx) { return (_this.toListItem && _this.toListItem(getMinute(idx))); };
        var data = utils_range(0, this.countFromMin(selectedValue)).map(convertToItem);
        this.addLast(data);
        if (selectedValue) {
            this.addMissing(data, selectedValue);
        }
        return data;
    };
    MinutesService.prototype.isRangeChanged = function (min, max) {
        return (this.min !== null && this.max !== null) && (!(0,is_equal/* isEqual */.n)(this.min, min) || !(0,is_equal/* isEqual */.n)(this.max, max));
    };
    MinutesService.prototype.limitRange = function (min, max, value) {
        return [MinutesService_limitDown(min, value), MinutesService_limitUp(max, value)];
    };
    MinutesService.prototype.total = function (value) {
        var last = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
        var missing = this.isMissing(value) ? 1 : 0;
        return this.countFromMin(value) + missing + last;
    };
    MinutesService.prototype.selectedIndex = function (value) {
        return Math.ceil(this.divideByStep(value));
    };
    MinutesService.prototype.valueInList = function (value) {
        if (!value) {
            return true;
        }
        var matchMax = this.insertUndividedMax && this.lastMinute(value) === value.getMinutes();
        return matchMax || !this.isMissing(value);
    };
    MinutesService.prototype.addLast = function (data, value) {
        if (this.insertUndividedMax && this.isLastMissing(value) && this.toListItem) {
            data.push(this.toListItem(this.lastMinute(value)));
        }
        return data;
    };
    MinutesService.prototype.addMissing = function (data, value) {
        if (this.valueInList(value)) {
            return data;
        }
        if (this.toListItem) {
            var missingItem = this.toListItem(value.getMinutes());
            data.splice(this.selectedIndex(value), 0, missingItem);
        }
        return data;
    };
    MinutesService.prototype.countFromMin = function (value) {
        var _a = this.range(value), min = _a[0], max = _a[1];
        return Math.floor(MinutesService_distanceFromMin(max, min) / this.step) + 1; /* include min */
    };
    MinutesService.prototype.isMissing = function (value) {
        if (!value) {
            return false;
        }
        return this.selectedIndex(value) !== this.divideByStep(value);
    };
    MinutesService.prototype.isLastMissing = function (value) {
        return this.max !== null && this.isMissing(setMinutes(this.max, this.lastMinute(value)));
    };
    MinutesService.prototype.divideByStep = function (value) {
        return MinutesService_distanceFromMin(value.getMinutes(), this.min.getMinutes()) / this.step;
    };
    MinutesService.prototype.lastMinute = function (value) {
        return this.range(value)[1];
    };
    MinutesService.prototype.range = function (value) {
        var _a = this.limitRange(this.min, this.max, value), min = _a[0], max = _a[1];
        return [min.getMinutes(), max.getMinutes()];
    };
    return MinutesService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/services/SecondsService.js



var SECONDS_IN_HOUR = 60;
var SecondsService_clampToRange = function (rangeValue) { return function (value) { return value % rangeValue; }; };
var SecondsService_clamp = SecondsService_clampToRange(SECONDS_IN_HOUR);
var SecondsService_stepper = function (start, step) { return function (idx) { return SecondsService_clamp(start + (idx * step)); }; };
var SecondsService_distanceFromMin = function (value, min) { return SecondsService_clamp(SECONDS_IN_HOUR + value - min); };
var SecondsService_limit = function (borderValue) { return function (barrier, value) {
    var useBarrier = !value ||
        (barrier.getMinutes() === value.getMinutes() && barrier.getHours() === value.getHours());
    return useBarrier ? barrier : setSeconds(barrier, borderValue);
}; };
var SecondsService_limitDown = SecondsService_limit(0);
var SecondsService_limitUp = SecondsService_limit(SECONDS_IN_HOUR - 1);
/**
 * @hidden
 */
var SecondsService = /** @class */ (function () {
    function SecondsService(intl) {
        this.intl = intl;
        this.toListItem = null;
        this.min = null;
        this.max = null;
        this.step = 0;
        this.insertUndividedMax = false;
    }
    SecondsService.prototype.apply = function (value, candidate) {
        return setSeconds(value, candidate.getSeconds());
    };
    SecondsService.prototype.configure = function (settings) {
        var _this = this;
        var _a = settings.insertUndividedMax, insertUndividedMax = _a === void 0 ? this.insertUndividedMax : _a, _b = settings.min, min = _b === void 0 ? this.min : _b, _c = settings.max, max = _c === void 0 ? this.max : _c, part = settings.part, _d = settings.step, step = _d === void 0 ? this.step : _d;
        this.insertUndividedMax = insertUndividedMax;
        this.toListItem = function (minute) {
            var date = setSeconds(MIDNIGHT_DATE, minute);
            return {
                text: _this.intl.formatDate(date, part.pattern),
                value: date
            };
        };
        this.min = min;
        this.max = max;
        this.step = step;
    };
    SecondsService.prototype.data = function (selectedValue) {
        var _this = this;
        var min = this.range(selectedValue)[0];
        var getSecond = SecondsService_stepper(min, this.step);
        var convertToItem = function (idx) { return (_this.toListItem && _this.toListItem(getSecond(idx))); };
        var data = utils_range(0, this.countFromMin(selectedValue)).map(convertToItem);
        this.addLast(data);
        if (selectedValue) {
            this.addMissing(data, selectedValue);
        }
        return data;
    };
    SecondsService.prototype.isRangeChanged = function (min, max) {
        return this.min !== null && this.max !== null && (!(0,is_equal/* isEqual */.n)(this.min, min) || !(0,is_equal/* isEqual */.n)(this.max, max));
    };
    SecondsService.prototype.limitRange = function (min, max, value) {
        return [SecondsService_limitDown(min, value), SecondsService_limitUp(max, value)];
    };
    SecondsService.prototype.total = function (value) {
        var last = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
        var missing = this.isMissing(value) ? 1 : 0;
        return this.countFromMin(value) + missing + last;
    };
    SecondsService.prototype.selectedIndex = function (value) {
        return Math.ceil(this.divideByStep(value));
    };
    SecondsService.prototype.valueInList = function (value) {
        if (!value) {
            return true;
        }
        var matchMax = this.insertUndividedMax && this.lastSecond(value) === value.getSeconds();
        return matchMax || !this.isMissing(value);
    };
    SecondsService.prototype.divideByStep = function (value) {
        return SecondsService_distanceFromMin(value.getSeconds(), this.min.getSeconds()) / this.step;
    };
    SecondsService.prototype.addLast = function (data, value) {
        if (this.insertUndividedMax && this.isLastMissing(value) && this.toListItem) {
            data.push(this.toListItem(this.lastSecond(value)));
        }
        return data;
    };
    SecondsService.prototype.addMissing = function (data, value) {
        if (this.valueInList(value)) {
            return data;
        }
        if (this.toListItem) {
            var missingItem = this.toListItem(value.getSeconds());
            data.splice(this.selectedIndex(value), 0, missingItem);
        }
        return data;
    };
    SecondsService.prototype.countFromMin = function (value) {
        var _a = this.range(value), min = _a[0], max = _a[1];
        return Math.floor(SecondsService_distanceFromMin(max, min) / this.step) + 1; /* include min */
    };
    SecondsService.prototype.isMissing = function (value) {
        if (!value) {
            return false;
        }
        return this.selectedIndex(value) !== this.divideByStep(value);
    };
    SecondsService.prototype.isLastMissing = function (value) {
        return this.max !== null && this.isMissing(setSeconds(this.max, this.lastSecond(value)));
    };
    SecondsService.prototype.lastSecond = function (value) {
        return this.range(value)[1];
    };
    SecondsService.prototype.range = function (value) {
        var _a = this.limitRange(this.min, this.max, value), min = _a[0], max = _a[1];
        return [min.getSeconds(), max.getSeconds()];
    };
    return SecondsService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/services/DOMService.js


/**
 * @hidden
 */
var DOMService_DOMService = /** @class */ (function () {
    function DOMService() {
        this.itemHeight = 0;
        this.timeListHeight = 0;
        this.didCalculate = false;
    }
    DOMService.prototype.ensureHeights = function () {
        if (this.timeListHeight !== undefined) {
            return;
        }
        this.calculateHeights();
    };
    DOMService.prototype.calculateHeights = function (container) {
        if (!main_js_.canUseDOM) {
            return;
        }
        var div = domContainerFactory('div');
        var span = domContainerFactory('span');
        var ul = domContainerFactory('ul');
        var li = domContainerFactory('li');
        var listItem = function () { return li('<span>02</span>', 'k-item'); };
        var list = function () { return ul([listItem()], 'k-reset'); };
        var scrollable = function () { return (div([list()], 'k-content k-scrollable k-time-container')); };
        var timeListWrapper = function () {
            return div([
                span('minute', 'k-title'),
                div([scrollable()], 'k-time-list')
            ], 'k-time-list-wrapper', { left: '-10000px', position: 'absolute' });
        };
        var timeWrapper = timeListWrapper();
        var listContainer = container && container.querySelector('.k-time-container');
        var hostContainer = listContainer || document.body;
        var wrapper = hostContainer.appendChild(timeWrapper);
        this.timeListHeight = wrapper.querySelector('.k-scrollable').offsetHeight;
        this.itemHeight = wrapper.querySelector('li').offsetHeight;
        hostContainer.removeChild(wrapper);
        this.didCalculate = true;
    };
    return DOMService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/TimeList.js
var TimeList_extends = (undefined && undefined.__extends) || (function () {
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
var TimeList_a, TimeList_b;









var SCROLL_THRESHOLD = 2; // < 2px threshold
var SNAP_THRESHOLD = 0.05; // % of the item height
var SCROLL_THROTTLE = 100; // ms
var SKIP = 0;
var MOBILE_MODE_OFFSET = 9;
var getters = (TimeList_a = {},
    TimeList_a[main_js_.Keys.end] = function (data, _) { return data[data.length - 1]; },
    TimeList_a[main_js_.Keys.home] = function (data, _) { return data[0]; },
    TimeList_a[main_js_.Keys.up] = function (data, index) { return data[index - 1]; },
    TimeList_a[main_js_.Keys.down] = function (data, index) { return data[index + 1]; },
    TimeList_a);
var TimeList_services = (TimeList_b = {},
    TimeList_b[TIME_PART.dayperiod] = DayPeriodService,
    TimeList_b[TIME_PART.hour] = HoursService,
    TimeList_b[TIME_PART.minute] = MinutesService,
    TimeList_b[TIME_PART.second] = SecondsService,
    TimeList_b);
/**
 * @hidden
 */
var TimeList = /** @class */ (function (_super) {
    TimeList_extends(TimeList, _super);
    function TimeList(props) {
        var _this = _super.call(this, props) || this;
        _this.intl = null;
        _this._element = null;
        _this.service = null;
        _this.virtualization = null;
        _this.topOffset = 0;
        _this.bottomOffset = 0;
        _this.itemHeight = 0;
        _this.listHeight = 0;
        _this.topThreshold = 0;
        _this.bottomThreshold = 0;
        _this.animateToIndex = false;
        _this.focus = function (args) {
            Promise.resolve().then(function () {
                if (!_this.element) {
                    return;
                }
                _this.element.focus(args);
            });
        };
        _this.itemOffset = function (scrollTop) {
            if (!_this.virtualization || !_this.service) {
                return -1;
            }
            var valueIndex = _this.service.selectedIndex(_this.props.value);
            var activeIndex = _this.virtualization.activeIndex();
            var offset = _this.virtualization.itemOffset(activeIndex);
            var distance = Math.abs(Math.ceil(scrollTop) - offset);
            if (valueIndex === activeIndex && distance < SCROLL_THRESHOLD) {
                return offset;
            }
            var scrollUp = valueIndex > activeIndex;
            var moveToNext = scrollUp && distance >= _this.bottomThreshold || !scrollUp && distance > _this.topThreshold;
            return moveToNext ? _this.virtualization.itemOffset(activeIndex + 1) : offset;
        };
        _this.calculateHeights = function () {
            if (!_this.dom.didCalculate) {
                return;
            }
            _this.itemHeight = _this.dom.itemHeight;
            _this.listHeight = _this.dom.timeListHeight;
            _this.topOffset = (_this.listHeight - _this.itemHeight) / 2;
            _this.bottomOffset = _this.listHeight - _this.itemHeight;
            if (_this.props.mobileMode) {
                _this.topOffset += MOBILE_MODE_OFFSET;
                _this.bottomOffset += MOBILE_MODE_OFFSET * 2;
            }
            _this.topThreshold = _this.itemHeight * SNAP_THRESHOLD;
            _this.bottomThreshold = _this.itemHeight * (1 - SNAP_THRESHOLD);
        };
        _this.configureServices = function (_a) {
            var _b = _a === void 0 ? _this.props : _a, min = _b.min, max = _b.max, value = _b.value;
            if (_this.service) {
                var _c = _this.service.limitRange(min || _this.min, max || _this.max, value || _this.props.value), newMin = _c[0], newMax = _c[1];
                _this.service.configure(_this.serviceSettings({ min: newMin, max: newMax }));
            }
        };
        _this.serviceSettings = function (settings) {
            var defaults = {
                boundRange: _this.props.boundRange || TimeList.defaultProps.boundRange,
                insertUndividedMax: false,
                min: (0,clone_date/* cloneDate */.a)(_this.min),
                max: (0,clone_date/* cloneDate */.a)(_this.max),
                part: _this.props.part,
                step: _this.step
            };
            var result = Object.assign({}, defaults, settings);
            result.boundRange = result.part.type !== 'hour' || _this.props.boundRange || TimeList.defaultProps.boundRange;
            return result;
        };
        _this.handleScrollAction = function (_a) {
            var target = _a.target, animationInProgress = _a.animationInProgress;
            if (!_this.virtualization || !_this.service) {
                return;
            }
            if (target && !animationInProgress) {
                _this.animateToIndex = false;
                var index = _this.virtualization.itemIndex(_this.itemOffset(target.scrollTop));
                var dataItem = _this.service.data(_this.props.value)[index];
                _this.handleChange(dataItem);
            }
        };
        _this.handleFocus = function (event) {
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus.call(undefined, event);
            }
        };
        _this.handleBlur = function (event) {
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur.call(undefined, event);
            }
        };
        _this.handleMouseOver = function () {
            if (!_this._element) {
                return;
            }
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (document && activeElement !== _this._element && _this.props.show) {
                _this._element.focus({ preventScroll: true });
            }
        };
        _this.handleKeyDown = function (event) {
            if (!_this.service) {
                return;
            }
            var keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.down
                || keyCode === main_js_.Keys.up
                || keyCode === main_js_.Keys.end
                || keyCode === main_js_.Keys.home) {
                event.preventDefault();
            }
            var getter = getters[event.keyCode] || main_js_.noop;
            var dataItem = getter(_this.service.data(_this.props.value), _this.service.selectedIndex(_this.props.value));
            if (dataItem) {
                _this.handleChange(dataItem);
            }
        };
        _this.handleChange = debounce(function (dataItem) {
            if (!_this.service) {
                return;
            }
            var candidate = _this.service.apply(_this.props.value, dataItem.value);
            if (_this.props.value.getTime() === candidate.getTime()) {
                return;
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, candidate);
            }
        }, SCROLL_THROTTLE);
        _this.dom = new DOMService_DOMService();
        return _this;
    }
    Object.defineProperty(TimeList.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeList.prototype, "animate", {
        get: function () {
            return Boolean(this.props.smoothScroll && this.animateToIndex);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeList.prototype, "min", {
        get: function () {
            return this.props.min || TimeList.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeList.prototype, "max", {
        get: function () {
            return this.props.max || TimeList.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeList.prototype, "step", {
        get: function () {
            return this.props.step !== undefined && this.props.step !== 0
                ? Math.floor(this.props.step)
                : TimeList.defaultProps.step;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    TimeList.prototype.componentDidMount = function () {
        var _this = this;
        // Async calculation of height to avoid animation cancellation
        Promise.resolve().then(function () {
            if (!_this._element) {
                return;
            }
            _this.dom.calculateHeights(_this._element);
            _this.forceUpdate();
        });
    };
    /**
     * @hidden
     */
    TimeList.prototype.componentDidUpdate = function () {
        if (!this.virtualization || !this.service) {
            return;
        }
        var index = this.service.selectedIndex(this.props.value);
        this.virtualization[this.animate ? 'animateToIndex' : 'scrollToIndex'](index);
        this.animateToIndex = true;
    };
    /**
     * @hidden
     */
    TimeList.prototype.render = function () {
        var _this = this;
        if (!this.props.part.type || !TimeList_services[this.props.part.type]) {
            return;
        }
        this.calculateHeights();
        this.intl = (0,index_mjs_.provideIntlService)(this);
        this.service = new TimeList_services[this.props.part.type](this.intl);
        this.configureServices();
        var data = this.service.data(this.props.value);
        var transform = 'translateY(' + this.topOffset + 'px)';
        var total = this.service.total(this.props.value);
        var list = (index_js_.createElement("ul", { style: { transform: transform, msTransform: transform }, className: "k-reset" }, data.map(function (item, idx) {
            return (index_js_.createElement("li", { key: idx, className: "k-item", onClick: function () { _this.handleChange(item); } },
                index_js_.createElement("span", null, item.text)));
        })));
        return (index_js_.createElement("div", { className: "k-time-list", id: String(this.props.id || ''), tabIndex: this.props.disabled ? -1 : 0, ref: function (el) { _this._element = el; }, onKeyDown: this.handleKeyDown, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseOver: this.handleMouseOver }, this.dom.didCalculate
            ? (index_js_.createElement(Virtualization, { bottomOffset: this.bottomOffset, children: list, className: "k-time-container", itemHeight: this.itemHeight, maxScrollDifference: this.listHeight, onScrollAction: this.handleScrollAction, ref: function (el) { _this.virtualization = el; }, role: "presentation", skip: SKIP, tabIndex: -1, take: total, topOffset: this.topOffset, total: total }))
            : (index_js_.createElement("div", { className: "k-time-container" }, list))));
    };
    TimeList.propTypes = {
        id: prop_types_index_js_.number,
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        part: function (props, propName, componentName) {
            var prop = props[propName];
            if (!prop || !TimeList_services[prop.type]) {
                throw new Error("\n                    Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ".\n                    Supported part types are hour|minute|second|dayperiod.\n                "));
            }
            return null;
        },
        step: function (props, propName, componentName) {
            var prop = props[propName];
            if (prop !== undefined && prop <= 0) {
                throw new Error("\n                    Invalid prop '".concat(propName, "' supplied to ").concat(componentName, ".\n                    ").concat(propName, " cannot be less than 1.\n                "));
            }
            return null;
        },
        value: prop_types_index_js_.instanceOf(Date),
        smoothScroll: prop_types_index_js_.bool,
        show: prop_types_index_js_.bool
    };
    TimeList.defaultProps = {
        boundRange: false,
        max: MAX_TIME,
        min: MIDNIGHT_DATE,
        step: 1,
        smoothScroll: true
    };
    return TimeList;
}(index_js_.Component));

(0,index_mjs_.registerForIntl)(TimeList);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/TimePart.js
var TimePart_extends = (undefined && undefined.__extends) || (function () {
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
var TimePart_assign = (undefined && undefined.__assign) || function () {
    TimePart_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TimePart_assign.apply(this, arguments);
};











var formatRegExp = new RegExp("".concat(TIME_PART.hour, "|").concat(TIME_PART.minute, "|").concat(TIME_PART.second, "|").concat(TIME_PART.dayperiod, "|literal"));
/**
 * @hidden
 */
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
/**
 * @hidden
 */
var TimePart = /** @class */ (function (_super) {
    TimePart_extends(TimePart, _super);
    function TimePart(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this._nowButton = null;
        _this.dateFormatParts = [];
        _this.timeLists = [];
        _this.focus = function (args) {
            Promise.resolve().then(function () {
                var timeList = _this.timeLists[0];
                if ((_this.state.activeListIndex === -1) && !_this.hasActiveButton() && timeList && timeList.element) {
                    timeList.focus(args);
                }
            });
        };
        _this.timeFormatReducer = function (acc, current) { return acc + current.pattern; };
        // Filtering only the time part of the format.
        // Literal types are added if the previous part is
        // part of a time format.
        _this.timeFormatFilter = function (part, index, all) {
            var prevItem = index >= 1 && all[index - 1];
            if (!prevItem) {
                return formatRegExp.test(part.type || '');
            }
            if (prevItem && part.type === 'literal') {
                return formatRegExp.test(prevItem.type || '');
            }
            return formatRegExp.test(part.type || '');
        };
        _this.focusList = function (dir) {
            if (!_this.timeLists.length) {
                return;
            }
            _this.timeLists.reduce(_this.listReducer, ([]))
                .map(function (state) { return dir === Direction.Right ? state.next : state.prev; })
                .map(function (list) { return list && list.element && list.element.focus({ preventScroll: true }); });
        };
        _this.listReducer = function (state, list, idx, all) {
            if (state.length || list.props.id !== _this.state.activeListIndex) {
                return state;
            }
            return [{
                    next: all[idx + 1] || list,
                    prev: all[idx - 1] || list
                }];
        };
        _this.showNowButton = function () {
            return !_this.hasSteps() && _this.props.nowButton && isInTimeRange(getNow(), _this.min, _this.max);
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
                case main_js_.Keys.left:
                    event.preventDefault();
                    _this.focusList(Direction.Left);
                    return;
                case main_js_.Keys.right:
                    event.preventDefault();
                    _this.focusList(Direction.Right);
                    return;
                default:
                    return;
            }
        };
        _this.handleListBlur = function () {
            _this.nextTick(function () {
                _this.setState({ activeListIndex: -1 });
            });
        };
        _this.handleListFocus = function (idx) {
            clearTimeout(_this.nextTickId);
            _this.setState({
                activeListIndex: idx
            });
        };
        _this.handleChange = function (candidate) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, candidate);
            }
        };
        _this.snapTime = snapTime(generateSnappers(_this.props.steps, _this.props.min || TimePart.defaultProps.min));
        _this.state = {
            activeListIndex: -1
        };
        _this.hasActiveButton = _this.hasActiveButton.bind(_this);
        return _this;
    }
    Object.defineProperty(TimePart.prototype, "element", {
        /**
         * @hidden
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "value", {
        get: function () {
            return timeInRange(this.snapTime((0,clone_date/* cloneDate */.a)(this.props.value || MIDNIGHT_DATE)), this.min, this.max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "intl", {
        get: function () {
            return (0,index_mjs_.provideIntlService)(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "min", {
        get: function () {
            return this.snapTime(this.props.min || TimePart.defaultProps.min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "max", {
        get: function () {
            return this.snapTime(this.props.max || TimePart.defaultProps.max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "steps", {
        get: function () {
            return this.props.steps || TimePart.defaultProps.steps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePart.prototype, "boundRange", {
        get: function () {
            return this.props.boundRange !== undefined
                ? this.props.boundRange
                : TimePart.defaultProps.boundRange;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    TimePart.prototype.componentWillUnmount = function () {
        clearTimeout(this.nextTickId);
    };
    TimePart.prototype.componentDidMount = function () {
        var onMount = this.props.onMount;
        if (onMount) {
            onMount.call(undefined, this.value);
        }
    };
    /**
     * @hidden
     */
    TimePart.prototype.render = function () {
        var _this = this;
        var _a = this.props, format = _a.format, smoothScroll = _a.smoothScroll, onNowClick = _a.onNowClick, className = _a.className, disabled = _a.disabled, mobileMode = _a.mobileMode, show = _a.show;
        this.snapTime = snapTime(generateSnappers(this.steps, this.min));
        this.dateFormatParts = this.intl
            .splitDateFormat(format || TimePart.defaultProps.format)
            .filter(this.timeFormatFilter);
        var rootClassName = (0,main_js_.classNames)({
            'k-disabled': disabled,
            'k-time-part': mobileMode
        }, className);
        this.timeLists = [];
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var selectNowMessage = localizationService.toLanguageString(selectNow, messages[selectNow]);
        return (index_js_.createElement("div", { className: rootClassName },
            index_js_.createElement("div", { className: "k-time-header" },
                index_js_.createElement("span", { className: "k-title" }, this.intl.formatDate(this.value, this.dateFormatParts.reduce(this.timeFormatReducer, ''))),
                this.showNowButton() &&
                    index_js_.createElement(es_main_js_.Button, TimePart_assign({ type: "button", ref: function (btn) { _this._nowButton = btn; }, className: "k-time-now", fillMode: "flat", themeColor: 'primary', title: selectNowMessage }, { 'aria-label': selectNowMessage }, { onClick: onNowClick, tabIndex: disabled ? -1 : 0 }), localizationService.toLanguageString(now, messages[now]))),
            index_js_.createElement("div", { className: "k-time-list-container", onKeyDown: this.handleKeyDown },
                index_js_.createElement("span", { className: "k-time-highlight" }),
                this.dateFormatParts.map(function (part, idx) {
                    return (part.type !== 'literal'
                        ? index_js_.createElement("div", { key: idx, className: (0,main_js_.classNames)('k-time-list-wrapper', {
                                'k-focus': idx === _this.state.activeListIndex
                            }), role: "presentation", tabIndex: -1 },
                            index_js_.createElement("span", { className: "k-title", onMouseDown: function (e) { e.preventDefault(); } }, _this.intl.dateFieldName(part)),
                            index_js_.createElement(TimeList, { min: _this.min, max: _this.max, boundRange: _this.boundRange, part: part, step: part.type ? _this.steps[part.type] : 1, smoothScroll: smoothScroll, ref: function (el) { if (!el) {
                                    return;
                                } _this.timeLists.push(el); }, id: idx, onFocus: function () { _this.handleListFocus(idx); }, onBlur: _this.handleListBlur, onChange: _this.handleChange, value: _this.value, disabled: disabled, show: show, mobileMode: mobileMode }))
                        : index_js_.createElement("div", { key: idx, className: "k-time-separator" }, part.pattern));
                }))));
    };
    TimePart.prototype.nextTick = function (f) {
        // XXX: use window.setTimeout due to async focus/blur events in IE, and missing relatedTarget prop.
        // XXX: https://github.com/facebook/react/issues/3751
        clearTimeout(this.nextTickId);
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    TimePart.prototype.hasActiveButton = function () {
        var activeElement = (0,main_js_.getActiveElement)(document);
        return (this._nowButton && activeElement === this._nowButton.element);
    };
    TimePart.prototype.hasSteps = function () {
        var _this = this;
        var keys = Object.keys(this.steps);
        return keys.length !== keys.reduce(function (acc, k) { return acc + _this.steps[k]; }, 0);
    };
    TimePart.propTypes = {
        cancelButton: prop_types_index_js_.bool,
        disabled: prop_types_index_js_.bool,
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        nowButton: prop_types_index_js_.bool,
        steps: prop_types_index_js_.shape({
            hour: prop_types_index_js_.number,
            minute: prop_types_index_js_.number,
            second: prop_types_index_js_.number
        }),
        smoothScroll: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        value: prop_types_index_js_.instanceOf(Date),
        show: prop_types_index_js_.bool
    };
    TimePart.defaultProps = {
        value: null,
        disabled: false,
        nowButton: true,
        cancelButton: true,
        format: 'hh:mm a',
        min: MIN_TIME,
        max: MAX_TIME,
        steps: {},
        boundRange: false
    };
    return TimePart;
}(index_js_.Component));

(0,index_mjs_.registerForIntl)(TimePart);
(0,index_mjs_.registerForLocalization)(TimePart);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/TimeSelector.js
var TimeSelector_extends = (undefined && undefined.__extends) || (function () {
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
var TimeSelector_assign = (undefined && undefined.__assign) || function () {
    TimeSelector_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TimeSelector_assign.apply(this, arguments);
};










/**
 * @hidden
 */
var TimeSelector_Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
})(TimeSelector_Direction || (TimeSelector_Direction = {}));
/**
 * @hidden
 */
var TimeSelector = /** @class */ (function (_super) {
    TimeSelector_extends(TimeSelector, _super);
    function TimeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this._cancelButton = null;
        _this._acceptButton = null;
        _this.timePart = null;
        _this.focusActiveList = function () {
            if (!_this.timePart) {
                return;
            }
            _this.timePart.focus({ preventScroll: true });
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode;
            switch (keyCode) {
                case main_js_.Keys.enter:
                    if (!_this.hasActiveButton()) {
                        _this.handleAccept(event);
                    }
                    return;
                default:
                    return;
            }
        };
        _this.handleAccept = function (event) {
            var value = _this.mergeValue((0,clone_date/* cloneDate */.a)(_this.value || getNow()), _this.timePart ? _this.timePart.value : _this.current);
            _this.setState({ value: value });
            _this.valueDuringOnChange = value;
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, {
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    value: _this.value,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
        };
        _this.handleReject = function (event) {
            _this.setState({ current: _this.value });
            var onReject = _this.props.onReject;
            if (onReject) {
                onReject.call(undefined, event);
            }
        };
        _this.handleNowClick = function (event) {
            var now = _this.mergeValue((0,clone_date/* cloneDate */.a)(_this.value || getNow()), getNow());
            _this.setState({
                current: now,
                value: now
            });
            _this.valueDuringOnChange = now;
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, {
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    value: _this.value,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
        };
        _this.handleChange = function (candidate) {
            _this.setState({ current: candidate });
            var handleTimeChange = _this.props.handleTimeChange;
            if (handleTimeChange) {
                handleTimeChange.call(undefined, {
                    time: candidate
                });
            }
        };
        _this.dateFormatParts = _this.intl.splitDateFormat(_this.props.format || TimeSelector.defaultProps.format);
        _this.mergeValue = valueMerger(generateGetters(_this.dateFormatParts));
        _this.hasActiveButton = _this.hasActiveButton.bind(_this);
        _this.state = {
            current: _this.props.value || MIDNIGHT_DATE,
            value: _this.props.value || TimeSelector.defaultProps.value
        };
        return _this;
    }
    Object.defineProperty(TimeSelector.prototype, "element", {
        /**
         * @hidden
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSelector.prototype, "value", {
        get: function () {
            var value = this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
            return (value !== null)
                ? (0,clone_date/* cloneDate */.a)(value)
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSelector.prototype, "intl", {
        get: function () {
            return (0,index_mjs_.provideIntlService)(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSelector.prototype, "current", {
        get: function () {
            return this.state.current !== null
                ? (0,clone_date/* cloneDate */.a)(this.state.current)
                : null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    TimeSelector.prototype.componentWillUnmount = function () {
        clearTimeout(this.nextTickId);
    };
    /**
     * @hidden
     */
    TimeSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, format = _a.format, cancelButton = _a.cancelButton, disabled = _a.disabled, tabIndex = _a.tabIndex, className = _a.className, smoothScroll = _a.smoothScroll, min = _a.min, max = _a.max, boundRange = _a.boundRange, nowButton = _a.nowButton, steps = _a.steps, show = _a.show, mobileMode = _a.mobileMode;
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var cancelMessage = localizationService.toLanguageString(timePickerCancel, messages[timePickerCancel]);
        var setMessage = localizationService.toLanguageString(timePickerSet, messages[timePickerSet]);
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, tabIndex: !disabled ? tabIndex || 0 : undefined, className: (0,main_js_.classNames)('k-timeselector', className, {
                'k-disabled': disabled
            }), onKeyDown: this.handleKeyDown },
            index_js_.createElement(TimePart, { ref: function (el) { _this.timePart = el; }, value: this.current, onChange: this.handleChange, onNowClick: this.handleNowClick, format: format, smoothScroll: smoothScroll, min: min, max: max, boundRange: boundRange, disabled: disabled, nowButton: nowButton, steps: steps, show: show, mobileMode: mobileMode }),
            this.props.footer && index_js_.createElement("div", { className: "k-time-footer k-actions k-actions-stretched" },
                cancelButton &&
                    index_js_.createElement(es_main_js_.Button, TimeSelector_assign({ type: "button", ref: function (btn) { _this._cancelButton = btn; }, className: "k-time-cancel", onClick: this.handleReject, title: cancelMessage }, { 'aria-label': cancelMessage }), cancelMessage),
                index_js_.createElement(es_main_js_.Button, TimeSelector_assign({ type: "button", ref: function (btn) { _this._acceptButton = btn; }, className: "k-time-accept", themeColor: 'primary', onClick: this.handleAccept, title: setMessage }, { 'aria-label': setMessage }), setMessage))));
    };
    TimeSelector.prototype.nextTick = function (f) {
        // XXX: use window.setTimeout due to async focus/blur events in IE, and missing relatedTarget prop.
        // XXX: https://github.com/facebook/react/issues/3751
        clearTimeout(this.nextTickId);
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    TimeSelector.prototype.hasActiveButton = function () {
        if (!this._acceptButton || !this._acceptButton.element) {
            return false;
        }
        var activeElement = (0,main_js_.getActiveElement)(document);
        return (this._acceptButton && activeElement === this._acceptButton.element)
            || (this._cancelButton && activeElement === this._cancelButton.element);
    };
    TimeSelector.propTypes = {
        cancelButton: prop_types_index_js_.bool,
        className: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        nowButton: prop_types_index_js_.bool,
        steps: prop_types_index_js_.shape({
            hour: prop_types_index_js_.number,
            minute: prop_types_index_js_.number,
            second: prop_types_index_js_.number
        }),
        smoothScroll: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        value: prop_types_index_js_.instanceOf(Date),
        show: prop_types_index_js_.bool
    };
    TimeSelector.defaultProps = {
        value: null,
        disabled: false,
        cancelButton: true,
        format: 't',
        min: MIN_TIME,
        max: MAX_TIME,
        boundRange: false,
        footer: true
    };
    return TimeSelector;
}(index_js_.Component));

(0,index_mjs_.registerForIntl)(TimeSelector);
(0,index_mjs_.registerForLocalization)(TimeSelector);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/TimePicker.js
var TimePicker_extends = (undefined && undefined.__extends) || (function () {
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
var TimePicker_assign = (undefined && undefined.__assign) || function () {
    TimePicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TimePicker_assign.apply(this, arguments);
};
var TimePicker_rest = (undefined && undefined.__rest) || function (s, e) {
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



















/** @hidden */
var TimePickerWithoutContext = /** @class */ (function (_super) {
    TimePicker_extends(TimePickerWithoutContext, _super);
    function TimePickerWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this._popupId = (0,main_js_.guid)();
        _this._element = null;
        _this._dateInput = index_js_.createRef();
        _this._timeSelector = null;
        _this.shouldFocusDateInput = false;
        _this.prevShow = false;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this.dateInput) {
                _this.dateInput.focus();
            }
        };
        _this.renderTimeSelector = function () {
            var _a = _this.props, smoothScroll = _a.smoothScroll, cancelButton = _a.cancelButton, nowButton = _a.nowButton, disabled = _a.disabled, format = _a.format, steps = _a.steps;
            return (index_js_.createElement(TimeSelector, { ref: _this.setTimeSelectorRef, className: _this.mobileMode ? 'k-reset k-timeselector-lg' : '', mobileMode: _this.mobileMode, show: _this.show, cancelButton: cancelButton, disabled: disabled, nowButton: nowButton, format: format, min: _this.min, max: _this.max, steps: steps, smoothScroll: smoothScroll, value: _this.value, footer: _this.mobileMode ? false : true, handleTimeChange: _this.mobileMode && _this.handleTimeChange, onChange: _this.handleValueChange, onReject: _this.handleValueReject }));
        };
        _this.renderPopup = function () {
            var _a = _this.popupSettings, popupClass = _a.popupClass, otherPopupSettings = TimePicker_rest(_a, ["popupClass"]);
            var popupClassNames = (0,main_js_.classNames)('k-group k-reset', popupClass);
            var popupProps = TimePicker_assign({ popupClass: 'k-timepicker-popup', show: _this.show, animate: _this.element !== null, anchor: _this.element, className: popupClassNames, id: _this._popupId, anchorAlign: {
                    horizontal: 'left',
                    vertical: 'bottom'
                }, popupAlign: {
                    horizontal: 'left',
                    vertical: 'top'
                } }, otherPopupSettings);
            return (_this.props.popup
                ? index_js_.createElement(_this.props.popup, TimePicker_assign({}, popupProps), _this.renderTimeSelector())
                : index_js_.createElement(kendo_react_popup_dist_es_main_js_.Popup, TimePicker_assign({}, popupProps), _this.renderTimeSelector()));
        };
        _this.renderAdaptivePopup = function () {
            var _a = _this.state.windowWidth, windowWidth = _a === void 0 ? 0 : _a;
            var actionSheetProps = {
                expand: _this.show,
                onClose: _this.handleBlur,
                adaptiveTitle: _this.props.adaptiveTitle,
                windowWidth: windowWidth,
                footer: {
                    cancelText: _this.localizationService.toLanguageString(toggleClock, messages[timePickerCancel]),
                    onCancel: _this.handleValueReject,
                    applyText: _this.localizationService.toLanguageString(timePickerSet, messages[timePickerSet]),
                    onApply: function (event) { return _this.handleValueChange(event); }
                }
            };
            return (index_js_.createElement(AdaptiveMode, TimePicker_assign({}, actionSheetProps),
                index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetContent, { className: '!k-overflow-hidden' }, _this.renderTimeSelector())));
        };
        _this.setTimeSelectorRef = function (timeSelector) {
            _this._timeSelector = timeSelector;
        };
        _this.nextValue = function (nextProps, nextState) {
            return nextProps.value !== undefined
                ? nextProps.value
                : nextState.value;
        };
        _this.nextShow = function (nextProps, nextState) {
            return nextProps.show !== undefined
                ? nextProps.show
                : nextState.show;
        };
        _this.handleInputValueChange = function (event) {
            var value = _this.mergeTime(event.value);
            _this.handleValueChange(TimePicker_assign(TimePicker_assign({}, event), { value: value }));
        };
        _this.handleTimeChange = function (date) {
            _this.setState({ candidate: date.time });
        };
        _this.handleValueChange = function (event) {
            _this.setState({
                value: (0,clone_date/* cloneDate */.a)(event.value || _this.state.candidate)
            });
            _this.valueDuringOnChange = event.value;
            _this.showDuringOnChange = false;
            _this.shouldFocusDateInput = true;
            var onChange = _this.props.onChange;
            var value = _this.value || _this.state.candidate;
            if (onChange) {
                onChange.call(undefined, {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: value,
                    show: _this.show,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
            _this.showDuringOnChange = undefined;
            _this.setShow(false);
        };
        _this.handleFocus = function () {
            _this.setState({ focused: true });
        };
        _this.handleBlur = function () {
            _this.setState({ focused: false });
            _this.setShow(false);
        };
        _this.handleValueReject = function (_) {
            _this.setShow(false);
        };
        _this.handleIconClick = function (_) {
            if (_this.props.disabled) {
                return;
            }
            _this.shouldFocusDateInput = true;
            _this.setShow(!_this.show);
        };
        _this.handleIconMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleKeyDown = function (event) {
            var altKey = event.altKey, keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.esc) {
                _this.shouldFocusDateInput = true;
                _this.setShow(false);
                return;
            }
            if (altKey && (keyCode === main_js_.Keys.up || keyCode === main_js_.Keys.down)) {
                event.preventDefault();
                event.stopPropagation();
                _this.shouldFocusDateInput = keyCode === main_js_.Keys.up;
                _this.setShow(keyCode === main_js_.Keys.down);
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            value: _this.props.defaultValue || TimePickerWithoutContext.defaultProps.defaultValue,
            show: _this.props.defaultShow || TimePickerWithoutContext.defaultProps.defaultShow,
            focused: false,
            candidate: null
        };
        _this.normalizeTime = _this.normalizeTime.bind(_this);
        _this.setShow = _this.setShow.bind(_this);
        _this.mergeTime = _this.mergeTime.bind(_this);
        return _this;
    }
    Object.defineProperty(TimePickerWithoutContext.prototype, "document", {
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
    Object.defineProperty(TimePickerWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the TimePicker.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "dateInput", {
        /**
         * Gets the DateInput component inside the TimePicker component.
         */
        get: function () {
            return this._dateInput.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "timeSelector", {
        /**
         * Gets the TimeSelector component inside the TimePicker component.
         */
        get: function () {
            return this._timeSelector;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "value", {
        /**
         * Gets the value of the TimePicker.
         */
        get: function () {
            var value = this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
            return (value !== null) ? (0,clone_date/* cloneDate */.a)(value) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "show", {
        /**
         * Gets the popup state of the TimeSelector.
         */
        get: function () {
            return this.showDuringOnChange !== undefined
                ? this.showDuringOnChange
                : this.props.show !== undefined
                    ? this.props.show
                    : this.state.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the TimePicker.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the TimePicker is set.
         */
        get: function () {
            var value = this.value && this.normalizeTime(this.value);
            var min = this.normalizeTime(this.min);
            var max = this.normalizeTime(this.max);
            var inRange = timepicker_utils_isInRange(value, min, max);
            var customError = this.props.validationMessage !== undefined;
            var isValid = (!this.required || this.value !== null) && inRange;
            var valid = this.props.valid !== undefined ? this.props.valid : isValid;
            return {
                customError: customError,
                rangeOverflow: isBiggerThanMax(value, max),
                rangeUnderflow: isSmallerThanMin(value, min),
                valid: valid,
                valueMissing: this.value === null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "mobileMode", {
        /**
         * The mobile mode of the ComboBox.
         */
        get: function () {
            var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE && this.props.adaptive;
            return !!isAdaptive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : TimePickerWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : TimePickerWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "popupSettings", {
        get: function () {
            return this.props.popupSettings || TimePickerWithoutContext.defaultProps.popupSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "min", {
        get: function () {
            return this.props.min !== undefined ? this.props.min : TimePickerWithoutContext.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "max", {
        get: function () {
            return this.props.max !== undefined ? this.props.max : TimePickerWithoutContext.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "dateInputComp", {
        get: function () {
            return this.props.dateInput || TimePickerWithoutContext.defaultProps.dateInput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimePickerWithoutContext.prototype, "localizationService", {
        get: function () {
            return (0,index_mjs_.provideLocalizationService)(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    TimePickerWithoutContext.prototype.componentDidMount = function () {
        var _a;
        this.observerResize = main_js_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
        if (this.show) {
            // If defaultShow is true during the initial render, the popup is not aligned.
            this.forceUpdate();
        }
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.observe(this.document.body);
        }
    };
    /**
     * @hidden
     */
    TimePickerWithoutContext.prototype.componentDidUpdate = function () {
        if (this._timeSelector && this.show && !this.prevShow) {
            this._timeSelector.focusActiveList();
        }
        else if (this.dateInput
            && this.dateInput.element
            && !this.show
            && this.shouldFocusDateInput) {
            this.dateInput.element.focus({ preventScroll: true });
        }
        this.prevShow = this.show;
        this.shouldFocusDateInput = false;
    };
    /**
     * @hidden
     */
    TimePickerWithoutContext.prototype.componentWillUnmount = function () {
        var _a;
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.disconnect();
        }
    };
    ;
    /**
     * @hidden
     */
    TimePickerWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.size, size = _b === void 0 ? TimePickerWithoutContext.defaultProps.size : _b, _c = _a.rounded, rounded = _c === void 0 ? TimePickerWithoutContext.defaultProps.rounded : _c, _d = _a.fillMode, fillMode = _d === void 0 ? TimePickerWithoutContext.defaultProps.fillMode : _d, disabled = _a.disabled, tabIndex = _a.tabIndex, title = _a.title, id = _a.id, className = _a.className, format = _a.format, formatPlaceholder = _a.formatPlaceholder, width = _a.width, name = _a.name, steps = _a.steps, validationMessage = _a.validationMessage, required = _a.required, validityStyles = _a.validityStyles, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
        var isValid = !this.validityStyles || this.validity.valid;
        var dateInputProps = {
            disabled: disabled,
            format: format,
            formatPlaceholder: formatPlaceholder,
            id: id,
            ariaLabelledBy: ariaLabelledBy,
            ariaDescribedBy: ariaDescribedBy,
            max: this.normalizeTime(this.max),
            min: this.normalizeTime(this.min),
            name: name,
            onChange: this.handleInputValueChange,
            required: required,
            steps: steps,
            tabIndex: !this.show ? tabIndex : -1,
            title: title,
            valid: this.validity.valid,
            validationMessage: validationMessage,
            validityStyles: validityStyles,
            value: this.value && this.normalizeTime(this.value),
            label: undefined,
            placeholder: !this.state.focused ? this.props.placeholder : null,
            ariaHasPopup: 'dialog',
            ariaExpanded: this.show,
            size: null,
            fillMode: null,
            rounded: null,
            readonly: this.mobileMode
        };
        var toggleClockMessage = this.localizationService.toLanguageString(toggleClock, messages[toggleClock]);
        var toggleTimeMessage = this.localizationService
            .toLanguageString(toggleTimeSelector, messages[toggleTimeSelector]);
        var timepicker = (index_js_.createElement(main_js_.AsyncFocusBlur, { onFocus: this.handleFocus, onBlur: !this.mobileMode ? this.handleBlur : undefined, onSyncBlur: this.props.onBlur, onSyncFocus: this.props.onFocus }, function (_a) {
            var _b;
            var onFocus = _a.onFocus, onBlur = _a.onBlur;
            return (index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement("div", { ref: function (span) { _this._element = span; }, className: (0,main_js_.classNames)('k-input', 'k-timepicker', (_b = {},
                        _b["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                        _b["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                        _b["k-input-".concat(fillMode)] = fillMode,
                        _b['k-invalid'] = !isValid,
                        _b['k-required'] = _this.required,
                        _b['k-disabled'] = _this.props.disabled,
                        _b), className), onKeyDown: _this.handleKeyDown, style: { width: width }, onFocus: onFocus, onBlur: onBlur, onClick: _this.mobileMode ? _this.handleIconClick : undefined },
                    index_js_.createElement(_this.dateInputComp, TimePicker_assign({ _ref: _this._dateInput, ariaRole: "combobox", ariaControls: _this._popupId }, dateInputProps)),
                    index_js_.createElement(es_main_js_.Button, TimePicker_assign({ tabIndex: -1, type: "button", icon: 'clock', svgIcon: index_es_js_.clockIcon, onMouseDown: _this.handleIconMouseDown, onClick: _this.mobileMode ? undefined : _this.handleIconClick, title: toggleTimeMessage, className: "k-input-button", rounded: null }, {
                        'aria-label': toggleClockMessage
                    })),
                    !_this.mobileMode && _this.renderPopup()),
                _this.mobileMode && _this.renderAdaptivePopup()));
        }));
        return this.props.label
            ? (index_js_.createElement(PickerFloatingLabel, { dateInput: this._dateInput, label: this.props.label, editorId: id, editorValid: isValid, editorDisabled: this.props.disabled, children: timepicker, style: { width: this.props.width } }))
            : timepicker;
    };
    TimePickerWithoutContext.prototype.normalizeTime = function (date) {
        return setTime(MIDNIGHT_DATE, date);
    };
    TimePickerWithoutContext.prototype.setShow = function (show) {
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        if (this.show === show) {
            return;
        }
        this.setState({ show: show });
        if (show && onOpen) {
            onOpen.call(undefined, {
                target: this
            });
        }
        if (!show && onClose) {
            onClose.call(undefined, {
                target: this
            });
        }
    };
    TimePickerWithoutContext.prototype.mergeTime = function (value) {
        return this.value && value ? setTime(this.value, value) : value;
    };
    TimePickerWithoutContext.prototype.calculateMedia = function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            this.setState({ windowWidth: entry.target.clientWidth });
        }
        ;
    };
    ;
    /**
     * @hidden
     */
    TimePickerWithoutContext.displayName = 'TimePicker';
    /**
     * @hidden
     */
    TimePickerWithoutContext.propTypes = {
        className: prop_types_index_js_.string,
        cancelButton: prop_types_index_js_.bool,
        nowButton: prop_types_index_js_.bool,
        defaultShow: prop_types_index_js_.bool,
        defaultValue: prop_types_index_js_.instanceOf(Date),
        disabled: prop_types_index_js_.bool,
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        formatPlaceholder: prop_types_index_js_.oneOfType([
            prop_types_index_js_.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
            prop_types_index_js_.shape({
                year: prop_types_index_js_.string,
                month: prop_types_index_js_.string,
                day: prop_types_index_js_.string,
                hour: prop_types_index_js_.string,
                minute: prop_types_index_js_.string,
                second: prop_types_index_js_.string
            })
        ]),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        min: prop_types_index_js_.instanceOf(Date),
        max: prop_types_index_js_.instanceOf(Date),
        name: prop_types_index_js_.string,
        popupSettings: prop_types_index_js_.shape({
            animate: prop_types_index_js_.bool,
            appendTo: prop_types_index_js_.any,
            popupClass: prop_types_index_js_.string
        }),
        show: prop_types_index_js_.bool,
        steps: prop_types_index_js_.shape({
            hour: prop_types_index_js_.number,
            minute: prop_types_index_js_.number,
            second: prop_types_index_js_.number
        }),
        smoothScroll: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        title: prop_types_index_js_.string,
        value: prop_types_index_js_.instanceOf(Date),
        width: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        valid: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
    };
    /**
     * @hidden
     */
    TimePickerWithoutContext.defaultProps = {
        defaultShow: false,
        defaultValue: null,
        disabled: false,
        format: 't',
        max: MAX_TIME,
        min: MIN_TIME,
        popupSettings: {},
        tabIndex: 0,
        steps: {},
        required: false,
        validityStyles: true,
        dateInput: DateInput,
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };
    return TimePickerWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `TimePicker` component.
 * Used for global configuration of all `TimePicker` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var TimePickerPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare */
/**
 * Represents the KendoReact TimePicker Component.
 *
 * Accepts properties of type [TimePicker]({% slug api_dateinputs_timepickerprops %}).
 * Obtaining the `ref` returns an object of type [TimePickerHandle]({% slug api_dateinputs_timepickerhandle %}).
 */
var TimePicker = (0,main_js_.withPropsContext)(TimePickerPropsContext, TimePickerWithoutContext);
TimePicker.displayName = 'KendoReactTimePicker';
(0,index_mjs_.registerForLocalization)(TimePickerWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/HorizontalViewList.js
var HorizontalViewList_extends = (undefined && undefined.__extends) || (function () {
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






var DEFAULT_FETCH_MONTHS_COUNT = 2;
/**
 * @hidden
 */
var HorizontalViewList = /** @class */ (function (_super) {
    HorizontalViewList_extends(HorizontalViewList, _super);
    function HorizontalViewList(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this.isActive = false;
        _this.focusActiveDate = function () {
            if (!_this._element) {
                return;
            }
            var focusedCell = _this._element.querySelector('td.k-focus');
            var nextActiveCell = _this._element.querySelector('.k-state-pending-focus');
            if (focusedCell && focusedCell[0]) {
                focusedCell[0].classList.remove('k-focus');
            }
            if (nextActiveCell) {
                nextActiveCell.classList.add('k-focus');
            }
            _this.isActive = true;
        };
        _this.blurActiveDate = function () {
            if (!_this._element) {
                return;
            }
            var focusedCell = _this._element.querySelector('td.k-focus');
            if (focusedCell) {
                focusedCell.classList.remove('k-focus');
            }
            _this.isActive = false;
        };
        _this.rotateSelectionRange = function (selectionRange) {
            if (selectionRange.start === null || selectionRange.end === null) {
                return selectionRange;
            }
            var needRotate = selectionRange.end < selectionRange.start;
            return {
                start: needRotate ? selectionRange.end : selectionRange.start,
                end: needRotate ? selectionRange.start : selectionRange.end
            };
        };
        _this.handleDateChange = function (event, isTodayClick) {
            if (isTodayClick === void 0) { isTodayClick = false; }
            var onChange = _this.props.onChange;
            if (onChange) {
                var args = {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: (0,clone_date/* cloneDate */.a)(event.value),
                    target: _this,
                    isTodayClick: isTodayClick
                };
                onChange.call(undefined, args);
            }
        };
        return _this;
    }
    Object.defineProperty(HorizontalViewList.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalViewList.prototype, "weekNumber", {
        get: function () {
            return Boolean(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum.month);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalViewList.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : HorizontalViewList.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalViewList.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : HorizontalViewList.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    HorizontalViewList.prototype.componentDidUpdate = function () {
        if (this.isActive) {
            this.focusActiveDate();
        }
    };
    HorizontalViewList.prototype.render = function () {
        var _this = this;
        var selectionRange = this.props.allowReverse
            ? this.rotateSelectionRange(this.props.selectionRange)
            : this.props.selectionRange;
        var rootClassNames = (0,main_js_.classNames)('k-calendar-view k-align-items-start k-justify-content-center', {
            'k-vstack': this.props.verticalView,
            'k-hstack': !this.props.verticalView,
            'k-calendar-monthview': this.props.activeView === CalendarViewEnum.month,
            'k-calendar-yearview': this.props.activeView === CalendarViewEnum.year,
            'k-calendar-decadeview': this.props.activeView === CalendarViewEnum.decade,
            'k-calendar-centuryview': this.props.activeView === CalendarViewEnum.century
        });
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, className: rootClassNames }, this.props.dates.map(function (date) { return (index_js_.createElement("table", { className: "k-calendar-table k-content", key: date.getTime(), role: "grid" },
            index_js_.createElement(View, { bus: _this.props.bus, service: _this.props.service, key: date.getTime(), direction: "horizontal", activeView: _this.props.activeView, cellUID: _this.props.cellUID, viewDate: date, min: _this.min, max: _this.max, focusedDate: _this.props.focusedDate, selectionRange: selectionRange, selectedDate: _this.props.value, showWeekNumbers: _this.weekNumber, onChange: _this.handleDateChange, onCellEnter: _this.props.onCellEnter, cell: _this.props.cell, weekCell: _this.props.weekCell }))); })));
    };
    HorizontalViewList.defaultProps = {
        showWeekNumbers: false,
        views: DEFAULT_FETCH_MONTHS_COUNT,
        take: DEFAULT_FETCH_MONTHS_COUNT,
        allowReverse: true,
        min: MIN_DATE,
        max: MAX_DATE
    };
    return HorizontalViewList;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/MultiViewCalendar.js
var MultiViewCalendar_extends = (undefined && undefined.__extends) || (function () {
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
var MultiViewCalendar_assign = (undefined && undefined.__assign) || function () {
    MultiViewCalendar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MultiViewCalendar_assign.apply(this, arguments);
};















var extractDateFromValue = function (min, max, value) {
    if (min === void 0) { min = MultiViewCalendarWithoutContext.defaultProps.min; }
    if (max === void 0) { max = MultiViewCalendarWithoutContext.defaultProps.max; }
    return value instanceof Date && !Array.isArray(value) && isInRange((0,get_date/* getDate */.p)(value), min, max)
        ? (0,get_date/* getDate */.p)(value)
        : null;
};
var extractMultipleFromValue = function (min, max, value) {
    if (min === void 0) { min = MultiViewCalendarWithoutContext.defaultProps.min; }
    if (max === void 0) { max = MultiViewCalendarWithoutContext.defaultProps.max; }
    return Array.isArray(value)
        ? value.filter(function (date) { return isInRange(date, min, max); }).map(function (date) { return (0,get_date/* getDate */.p)(date); })
        : null;
};
var extractRangeFromValue = function (value) {
    return typeof value === 'object' && !(value instanceof Date) && value !== null && !Array.isArray(value)
        ? value
        : SelectionRange_EMPTY_SELECTIONRANGE;
};
var extractFocusedDate = function (single, multiple, range) {
    return single || (multiple && multiple[0]) || (range && range.start);
};
var extractActiveRange = function (range, single) {
    return range.start === null && single === null
        ? 'start'
        : range.end === null
            ? 'end'
            : 'start';
};
/** @hidden */
var MultiViewCalendarWithoutContext = /** @class */ (function (_super) {
    MultiViewCalendar_extends(MultiViewCalendarWithoutContext, _super);
    function MultiViewCalendarWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this.dates = [];
        _this.selectedDate = null;
        _this.selectedMultiple = null;
        _this.selectedRange = SelectionRange_EMPTY_SELECTIONRANGE;
        _this._focusedDate = new Date();
        _this.cellUID = (0,main_js_.guid)();
        _this.activeRangeEnd = 'start';
        _this._element = null;
        _this.intl = null;
        _this.localization = null;
        _this.service = null;
        _this.wrapperID = (0,main_js_.guid)();
        _this.calendarViewList = null;
        _this.isActive = false;
        _this.calculateFocusFromValue = true;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._element) {
                _this._element.focus();
            }
        };
        _this.clampRange = function (value) { return ({ start: value, end: null }); };
        _this.rangeWithFocused = function (range, focusedDate) {
            return {
                start: range.start,
                end: range.end === null && range.start !== null && _this.isActive ? focusedDate : range.end
            };
        };
        _this.generateRange = function (candidate, value) {
            var end = value.end, start = value.start;
            var shouldSwap = value.start !== null && candidate.getTime() <= value.start.getTime();
            if (!_this.props.allowReverse && shouldSwap) {
                return { start: candidate, end: _this.selectedRange.start };
            }
            return _this.activeRange !== 'end'
                ? ({ start: candidate, end: end })
                : ({ start: start || _this.selectedDate, end: candidate });
        };
        _this.canNavigate = function (action) {
            if (!_this.service) {
                return false;
            }
            var candidate = _this.service.move(_this.focusedDate, action);
            return (_this.min <= candidate && candidate <= _this.max)
                || _this.service.isInSameView(candidate, _this.min)
                || _this.service.isInSameView(candidate, _this.max);
        };
        _this.navigate = function (action, date) {
            _this.calculateFocusFromValue = false;
            var candidate = _this.move(action, date);
            _this.setState({ navigateDate: candidate, focusedDate: candidate });
        };
        _this.move = function (action, date) {
            return _this.clampDate(_this.service.move(date, action));
        };
        _this.clampDate = function (value) {
            return dateInRange(value, _this.min, _this.max);
        };
        _this.shouldAutoCorrect = function (candidate, value) {
            var end = value.end, start = value.start;
            if (_this.activeRange !== 'end') {
                return end !== null && candidate > end;
            }
            else {
                return start !== null && candidate < start;
            }
        };
        _this.handleCellEnter = function (value) {
            if (_this.props.mode === 'range') {
                _this.calculateFocusFromValue = false;
                _this.setState({
                    focusedDate: value
                });
            }
        };
        _this.handleMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleClick = function (_) {
            if (!_this._element) {
                return;
            }
            _this._element.focus({ preventScroll: true });
        };
        _this.handleFocus = function (event) {
            _this.isActive = true;
            if (!_this.calendarViewList) {
                return;
            }
            _this.calendarViewList.focusActiveDate();
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus.call(undefined, event);
            }
        };
        _this.handleBlur = function (event) {
            _this.isActive = false;
            if (!_this.calendarViewList) {
                return;
            }
            _this.calendarViewList.blurActiveDate();
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur.call(undefined, event);
            }
        };
        _this.handleTodayClick = function (event) {
            if (!_this.todayIsInRange) {
                return;
            }
            _this.handleDateChange(event);
        };
        _this.handlePrevButtonClick = function () {
            var action = Action.PrevView;
            if (_this.state.activeView > 0 && _this.focusedDate.getFullYear() > _this.dates[0].getFullYear()) {
                _this.navigate(action, _this.move(action, _this.focusedDate));
            }
            else {
                var inMonthDate = _this.isInMonth(_this.focusedDate, _this.dates[1])
                    ? _this.move(action, _this.focusedDate)
                    : _this.focusedDate;
                _this.navigate(action, inMonthDate);
            }
        };
        _this.handleNextButtonClick = function () {
            _this.navigate(Action.NextView, _this.focusedDate);
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.enter) {
                var args = {
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    value: _this.focusedDate,
                    target: _this
                };
                _this.handleDateChange(args);
            }
            else {
                var candidate = dateInRange(_this.navigation.move(_this.focusedDate, _this.navigation.action(event), _this.state.activeView, _this.service, event), _this.min, _this.max);
                if ((0,is_equal_date/* isEqualDate */.$)(_this.focusedDate, candidate)) {
                    return;
                }
                if (_this.dates && _this.service && !_this.service.isInArray(candidate, _this.dates)) {
                    _this.setState({ navigateDate: candidate });
                }
                ;
                _this.calculateFocusFromValue = false;
                _this.setState({ focusedDate: candidate });
            }
            event.preventDefault();
        };
        _this.handleViewChange = function (_a) {
            var view = _a.view;
            _this.calculateFocusFromValue = false;
            _this.setState(function (state) { return ({ activeView: view, navigateDate: state.focusedDate }); });
        };
        _this.handleDateChange = function (event) {
            var focusedDate = (0,clone_date/* cloneDate */.a)(event.value);
            var canNavigateDown = _this.bus.canMoveDown(_this.state.activeView);
            if (_this.props.disabled) {
                return;
            }
            if (canNavigateDown) {
                if (event.isTodayClick) {
                    _this.bus.moveToBottom(_this.state.activeView);
                }
                else {
                    _this.bus.moveDown(_this.state.activeView, event.syntheticEvent);
                    _this.setState({ focusedDate: focusedDate });
                    return;
                }
            }
            _this.calculateFocusFromValue = true;
            var value;
            switch (_this.props.mode) {
                case 'single':
                    value = (0,clone_date/* cloneDate */.a)(event.value);
                    break;
                case 'multiple':
                    if (Array.isArray(_this.selectedMultiple)) {
                        var result = _this.selectedMultiple.slice();
                        var index_1 = -1;
                        result.forEach(function (date, idx) {
                            if ((0,is_equal_date/* isEqualDate */.$)(date, event.value)) {
                                index_1 = idx;
                            }
                        });
                        index_1 !== -1
                            ? result.splice(index_1, 1)
                            : result.push((0,clone_date/* cloneDate */.a)(event.value));
                        value = result.slice();
                    }
                    else {
                        if (_this.selectedDate) {
                            value = [(0,clone_date/* cloneDate */.a)(_this.selectedDate), (0,clone_date/* cloneDate */.a)(event.value)];
                        }
                        else {
                            value = [(0,clone_date/* cloneDate */.a)(event.value)];
                        }
                    }
                    break;
                case 'range':
                    var hasSelection = _this.selectedRange.start !== null
                        && _this.selectedRange.end !== null
                        && _this.activeRange === 'start';
                    value = hasSelection
                        ? _this.clampRange(event.value)
                        : _this.generateRange(event.value, _this.selectedRange);
                    _this.activeRangeEnd = _this.activeRange !== 'end' ? 'end' : 'start';
                    break;
                default:
                    value = (0,clone_date/* cloneDate */.a)(event.value);
                    break;
            }
            _this.valueDuringOnChange = value;
            if (event.isTodayClick) {
                _this.setState({ navigateDate: focusedDate });
            }
            _this.setState({ value: value, focusedDate: focusedDate });
            _this.valueDuringOnChange = value;
            var onChange = _this.props.onChange;
            if (onChange) {
                var args = {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: value,
                    target: _this
                };
                onChange.call(undefined, args);
            }
            _this.valueDuringOnChange = undefined;
        };
        var value = props.value !== undefined
            ? props.value
            : props.defaultValue || MultiViewCalendarWithoutContext.defaultProps.defaultValue;
        var selectedDate = extractDateFromValue(_this.min, _this.max, value);
        var selectedMultiple = extractMultipleFromValue(_this.min, _this.max, value);
        var selectedRange = extractRangeFromValue(value);
        var calculatedFocus = extractFocusedDate(selectedDate, selectedMultiple, selectedRange);
        var activeView = viewInRange(CalendarViewEnum[props.defaultActiveView], _this.bottomView, _this.topView);
        var focusedDate = dateInRange(props.focusedDate || calculatedFocus || getToday(), _this.min, _this.max);
        _this.state = {
            value: value,
            activeView: activeView,
            focusedDate: focusedDate,
            navigateDate: focusedDate
        };
        _this.activeRangeEnd = extractActiveRange(selectedRange, selectedDate);
        _this.bus = new BusViewService(_this.handleViewChange);
        _this.navigation = new NavigationService(_this.bus);
        _this.calculateFocusFromValue = false;
        _this.lastView = activeView;
        _this.lastViewsCount = _this.props.views || HorizontalViewList.defaultProps.views;
        return _this;
    }
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "isRtl", {
        get: function () {
            return this.props.dir === 'rtl';
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the MultiViewCalendar component.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "value", {
        /**
         * Gets the value of the MultiViewCalendar.
         */
        get: function () {
            return this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "focusedDate", {
        /**
         * Gets the current focused date of the MultiViewCalendar.
         */
        get: function () {
            return (0,clone_date/* cloneDate */.a)(this._focusedDate);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "min", {
        get: function () {
            return (0,get_date/* getDate */.p)(this.props.min !== undefined
                ? this.props.min
                : MultiViewCalendarWithoutContext.defaultProps.min);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "max", {
        get: function () {
            return (0,get_date/* getDate */.p)(this.props.max !== undefined
                ? this.props.max
                : MultiViewCalendarWithoutContext.defaultProps.max);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "bottomView", {
        get: function () {
            return CalendarViewEnum[this.props.bottomView !== undefined
                ? this.props.bottomView
                : MultiViewCalendarWithoutContext.defaultProps.bottomView];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "topView", {
        get: function () {
            return CalendarViewEnum[this.props.topView !== undefined
                ? this.props.topView
                : MultiViewCalendarWithoutContext.defaultProps.topView];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "activeRange", {
        get: function () {
            return this.props.activeRangeEnd !== undefined
                ? this.props.activeRangeEnd
                : this.activeRangeEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiViewCalendarWithoutContext.prototype, "todayIsInRange", {
        get: function () {
            return isInRange(getToday(), (0,get_date/* getDate */.p)(this.min), (0,get_date/* getDate */.p)(this.max));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.prototype.componentDidMount = function () {
        this.calculateFocusFromValue = true;
    };
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.prototype.componentDidUpdate = function () {
        if (this.calendarViewList) {
            (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
        }
        var stateValue = extractDateFromValue(this.min, this.max, this.value);
        this.calculateFocusFromValue = Boolean(this.selectedDate
            && stateValue
            && (this.selectedDate.getTime() && stateValue.getTime()));
        this.lastView = this.state.activeView;
        this.lastViewsCount = this.props.views || HorizontalViewList.defaultProps.views;
    };
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.prototype.render = function () {
        var _this = this;
        if (this.props._ref) {
            this.props._ref(this);
        }
        this.intl = (0,index_mjs_.provideIntlService)(this);
        this.localization = (0,index_mjs_.provideLocalizationService)(this);
        this.bus.configure(this.bottomView, this.topView);
        var activeView = viewInRange(this.state.activeView, this.bottomView, this.topView);
        this.service = this.bus.service(activeView, this.intl);
        // console.log('this.service', this.service);
        this.selectedDate = extractDateFromValue(this.min, this.max, this.value);
        this.selectedMultiple = extractMultipleFromValue(this.min, this.max, this.value);
        this.selectedRange = extractRangeFromValue(this.value);
        var calculatedFocus = extractFocusedDate(this.selectedDate, this.selectedMultiple, this.selectedRange);
        this._focusedDate = dateInRange(this.calculateFocusFromValue && calculatedFocus !== null
            ? calculatedFocus
            : this.state.focusedDate, this.min, this.max);
        var wrapperClassName = (0,main_js_.classNames)('k-widget k-calendar k-calendar-range', {
            'k-disabled': this.props.disabled
        }, this.props.className);
        var visualizedRange = this.rangeWithFocused(this.selectedRange, this.focusedDate);
        var prevViewTitle = this.localization.toLanguageString(prevView, messages[prevView]);
        var nextViewTittle = this.localization.toLanguageString(nextView, messages[nextView]);
        var isPrevDisabled = !this.canNavigate(Action.PrevView);
        var isNextDisabled = !this.canNavigate(Action.NextView);
        var prevBtnAria = { 'aria-disabled': isPrevDisabled };
        var nextBtnAria = { 'aria-disabled': isNextDisabled };
        var didViewChange = this.lastView !== activeView;
        var isDateInMonth = this.dates && this.isInMonth(this.state.navigateDate, this.dates[0]);
        var didViewsCountChange = this.lastViewsCount !== this.props.views;
        if (!isDateInMonth || didViewChange || didViewsCountChange) {
            this.dates = this.service.datesList(this.state.navigateDate, this.props.views || HorizontalViewList.defaultProps.views);
        }
        var activeDate = (0,clone_date/* cloneDate */.a)(this.dates && this.dates[0] ? this.dates[0] : getToday());
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, className: wrapperClassName, id: this.props.id || this.wrapperID, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, tabIndex: !this.props.disabled ? this.props.tabIndex : undefined, onFocus: this.handleFocus, onBlur: this.handleBlur, onMouseDown: this.handleMouseDown, onClick: this.handleClick, onKeyDown: this.handleKeyDown, "aria-disabled": this.props.disabled, dir: this.props.dir },
            index_js_.createElement(Header, { key: ".kendo.calendar.header.".concat(activeDate.getTime()), activeView: activeView, currentDate: activeDate, min: this.min, max: this.max, rangeLength: this.props.views, bus: this.bus, service: this.service, headerTitle: this.props.headerTitle, verticalView: this.props.mobileMode, commands: (index_js_.createElement(index_js_.Fragment, null,
                    index_js_.createElement(es_main_js_.Button, MultiViewCalendar_assign({ type: "button", className: "k-calendar-nav-prev", icon: this.isRtl ? 'chevron-right' : 'chevron-left', svgIcon: this.isRtl ? index_es_js_.chevronRightIcon : index_es_js_.chevronLeftIcon, fillMode: "flat", title: prevViewTitle, disabled: isPrevDisabled, onClick: this.handlePrevButtonClick }, prevBtnAria)),
                    index_js_.createElement(TodayCommand, { min: this.min, max: this.max, onClick: this.handleTodayClick, disabled: !this.todayIsInRange }),
                    index_js_.createElement(es_main_js_.Button, MultiViewCalendar_assign({ type: "button", className: "k-calendar-nav-next", icon: this.isRtl ? 'chevron-left' : 'chevron-right', svgIcon: this.isRtl ? index_es_js_.chevronLeftIcon : index_es_js_.chevronRightIcon, fillMode: "flat", title: nextViewTittle, disabled: isNextDisabled, onClick: this.handleNextButtonClick }, nextBtnAria)))) }),
            index_js_.createElement(HorizontalViewList, { ref: function (el) { _this.calendarViewList = el; }, dates: this.dates, activeView: activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, bus: this.bus, service: this.service, selectionRange: visualizedRange, value: this.selectedMultiple || this.selectedDate, cellUID: this.cellUID, views: this.props.views, onChange: this.handleDateChange, showWeekNumbers: this.props.weekNumber, onCellEnter: this.handleCellEnter, cell: this.props.cell, weekCell: this.props.weekCell, headerTitle: this.props.headerTitle, verticalView: this.props.mobileMode })));
    };
    // protected isListInRange = (list: Date[]): boolean => {
    //     return this.min < list[0]
    //         && this.max > list[Math.max(0, (this.props.views || MultiViewCalendarWithoutContext.defaultProps.views) - 1)];
    // };
    MultiViewCalendarWithoutContext.prototype.isInMonth = function (date, month) {
        return !!month && (0,first_day_of_month/* firstDayOfMonth */.G)(month) <= date && date <= (0,last_day_of_month/* lastDayOfMonth */.W)(month);
    };
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.displayName = 'MultiViewCalendar';
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.propTypes = {
        activeRangeEnd: prop_types_index_js_.oneOf(['start', 'end']),
        allowReverse: prop_types_index_js_.bool,
        bottomView: prop_types_index_js_.oneOf(['month', 'year', 'decade', 'century']),
        className: prop_types_index_js_.string,
        defaultActiveView: prop_types_index_js_.oneOf(['month', 'year', 'decade', 'century']),
        defaultValue: prop_types_index_js_.oneOfType([
            nullable(prop_types_index_js_.instanceOf(Date)),
            prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
            prop_types_index_js_.shape({
                start: nullable(prop_types_index_js_.instanceOf(Date)),
                end: nullable(prop_types_index_js_.instanceOf(Date))
            })
        ]),
        disabled: prop_types_index_js_.bool,
        focusedDate: prop_types_index_js_.instanceOf(Date),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        mode: prop_types_index_js_.oneOf(['single', 'multiple', 'range']),
        onBlur: prop_types_index_js_.func,
        onChange: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        tabIndex: prop_types_index_js_.number,
        topView: prop_types_index_js_.oneOf(['month', 'year', 'decade', 'century']),
        value: prop_types_index_js_.oneOfType([
            nullable(prop_types_index_js_.instanceOf(Date)),
            prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
            prop_types_index_js_.shape({
                start: nullable(prop_types_index_js_.instanceOf(Date).isRequired),
                end: nullable(prop_types_index_js_.instanceOf(Date).isRequired)
            })
        ]),
        views: function (props, propName, componentName) {
            var views = props[propName];
            if (views !== undefined && views < 1) {
                return new Error("Invalid prop '".concat(propName, "' supplied to") +
                    "'".concat(componentName, "'. The '").concat(propName, "' property cannot be less than 1'"));
            }
            return null;
        },
        weekNumber: prop_types_index_js_.bool,
        dir: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    MultiViewCalendarWithoutContext.defaultProps = {
        disabled: false,
        min: MIN_DATE,
        max: MAX_DATE,
        navigation: true,
        defaultActiveView: 'month',
        defaultValue: null,
        topView: 'century',
        tabIndex: 0,
        bottomView: 'month',
        views: 2,
        allowReverse: false
    };
    return MultiViewCalendarWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `MultiViewCalendar` component.
 * Used for global configuration of all `MultiViewCalendar` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var MultiViewCalendarPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the KendoReact MultiViewCalendar Component.
 *
 * Accepts properties of type [MultiViewCalendarProps]({% slug api_dateinputs_multiviewcalendarprops %}).
 * Obtaining the `ref` returns an object of type [MultiViewCalendarHandle]({% slug api_dateinputs_multiviewcalendarhandle %}).
 */
var MultiViewCalendar = (0,main_js_.withPropsContext)(MultiViewCalendarPropsContext, MultiViewCalendarWithoutContext);
MultiViewCalendar.displayName = 'KendoReactMultiViewCalendar';
(0,index_mjs_.registerForIntl)(MultiViewCalendarWithoutContext);
(0,index_mjs_.registerForLocalization)(MultiViewCalendarWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/daterangepicker/DateRangePicker.js
var DateRangePicker_extends = (undefined && undefined.__extends) || (function () {
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
var DateRangePicker_assign = (undefined && undefined.__assign) || function () {
    DateRangePicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DateRangePicker_assign.apply(this, arguments);
};



















/** @hidden */
var DateRangePickerWithoutContext = /** @class */ (function (_super) {
    DateRangePicker_extends(DateRangePickerWithoutContext, _super);
    function DateRangePickerWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this._calendar = null;
        _this._startDateInput = index_js_.createRef();
        _this._endDateInput = index_js_.createRef();
        _this._popupId = (0,main_js_.guid)();
        _this._startInputId = (0,main_js_.guid)();
        _this._endInputId = (0,main_js_.guid)();
        _this.shouldFocusDateInput = false;
        _this.shouldFocusCalendar = false;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this.startDateInput) {
                _this.startDateInput.focus();
            }
        };
        _this.setCalendarRef = function (calendar) {
            _this._calendar = calendar;
        };
        _this.focusCalendarElement = function () {
            if (_this._calendar && _this._calendar.element) {
                _this._calendar.element.focus({ preventScroll: true });
            }
        };
        _this.calculateValue = function (props, state) {
            var value = props.value !== undefined
                ? props.value
                : state.value;
            return value || SelectionRange_EMPTY_SELECTIONRANGE;
        };
        _this.calculateShow = function (nextProps, nextState) {
            return nextProps.show !== undefined
                ? nextProps.show
                : nextState.show;
        };
        _this.renderCalendar = function () {
            var value = _this.value || SelectionRange_EMPTY_SELECTIONRANGE;
            var calendarProps = DateRangePicker_assign(DateRangePicker_assign({ min: _this.min, max: _this.max, allowReverse: _this.props.allowReverse, mode: 'range', focusedDate: _this.props.focusedDate, disabled: _this.props.disabled, className: _this.mobileMode ? 'k-calendar-lg' : '', mobileMode: _this.mobileMode }, _this.props.calendarSettings), { value: value, dir: _this.props.dir, onChange: _this.handleCalendarChange });
            return _this.props.calendar
                ? index_js_.createElement(_this.props.calendar, DateRangePicker_assign({}, calendarProps))
                : index_js_.createElement(MultiViewCalendar, DateRangePicker_assign({}, calendarProps, { ref: _this.setCalendarRef }));
        };
        _this.renderPopup = function () {
            var popupProps = DateRangePicker_assign(DateRangePicker_assign({ popupClass: 'k-daterangepicker-popup', animate: _this._element !== null, anchor: _this._element, id: _this._popupId, anchorAlign: {
                    horizontal: 'left',
                    vertical: 'bottom'
                }, popupAlign: {
                    horizontal: 'left',
                    vertical: 'top'
                } }, _this.props.popupSettings), { show: _this.show });
            return (_this.props.popup
                ? index_js_.createElement(_this.props.popup, DateRangePicker_assign({}, popupProps), _this.renderCalendar())
                : index_js_.createElement(kendo_react_popup_dist_es_main_js_.Popup, DateRangePicker_assign({}, popupProps), _this.renderCalendar()));
        };
        _this.renderAdaptivePopup = function () {
            var _a = _this.state.windowWidth, windowWidth = _a === void 0 ? 0 : _a;
            var actionSheetProps = {
                expand: _this.show,
                onClose: function (event) { return _this.handleCancel(event); },
                adaptiveTitle: _this.props.adaptiveTitle,
                windowWidth: windowWidth,
                footer: {
                    cancelText: _this.localizationService.toLanguageString(dateRangePickerCancel, messages[dateRangePickerCancel]),
                    onCancel: _this.handleCancel,
                    applyText: _this.localizationService.toLanguageString(dateRangePickerSet, messages[dateRangePickerSet]),
                    onApply: _this.handleBlur
                }
            };
            return (index_js_.createElement(AdaptiveMode, DateRangePicker_assign({}, actionSheetProps),
                index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetContent, { className: '!k-overflow-hidden' },
                    index_js_.createElement("div", { className: 'k-scrollable-wrap' }, _this.renderCalendar()))));
        };
        _this.handleReverseClick = function (event) {
            var value = {
                start: _this.value.end,
                end: _this.value.start
            };
            var args = {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent
            };
            _this.handleChange(value, args);
        };
        _this.handleReverseMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleFocus = function (event) {
            clearTimeout(_this.nextTickId);
            if (!_this.shouldFocusDateInput) {
                _this.setShow(true);
                if (_this.mobileMode) {
                    _this.setState({ currentValue: _this.value });
                }
            }
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus.call(undefined, event);
            }
        };
        _this.handleBlur = function (event) {
            _this.nextTick(function () {
                _this.setShow(false);
            });
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur.call(undefined, event);
            }
        };
        _this.handleCancel = function (event) {
            _this.nextTick(function () {
                _this.setShow(false);
                _this.setState({ currentValue: SelectionRange_EMPTY_SELECTIONRANGE });
            });
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel.call(undefined, event);
            }
        };
        _this.handleEndChange = function (event) {
            var value = {
                start: _this.value.start,
                end: (0,clone_date/* cloneDate */.a)(event.value || undefined)
            };
            _this.handleChange(value, event);
        };
        _this.handleStartChange = function (event) {
            var value = {
                start: (0,clone_date/* cloneDate */.a)(event.value || undefined),
                end: _this.value.end
            };
            _this.handleChange(value, event);
        };
        _this.extractRangeFromValue = function (event) {
            if (!Array.isArray(event.value) && !(event.value instanceof Date)) {
                return event.value || SelectionRange_EMPTY_SELECTIONRANGE;
            }
            var candidate = Array.isArray(event.value) ? event.value[0] : event.value;
            return {
                start: _this.value.end !== null ? candidate : _this.value.start,
                end: _this.value.start !== null ? candidate : _this.value.end
            };
        };
        _this.handleCalendarChange = function (event) {
            var value = _this.extractRangeFromValue(event);
            _this.handleChange(value, event);
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode, altKey = event.altKey;
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (keyCode === main_js_.Keys.esc) {
                event.preventDefault();
                _this.shouldFocusDateInput = true;
                _this.setShow(false);
            }
            else if (altKey && keyCode === main_js_.Keys.down) {
                event.preventDefault();
                _this.shouldFocusCalendar = true;
                _this.setShow(true);
            }
            else if (keyCode === main_js_.Keys.tab
                && _this.show
                && _this._calendar
                && _this._calendar.element
                && _this.endDateInput
                && _this.endDateInput.element
                && document
                && activeElement === _this.endDateInput.element) {
                event.preventDefault();
                _this.focusCalendarElement();
            }
        };
        _this.handleChange = function (value, event) {
            _this.setState({ value: value });
            _this.valueDuringOnChange = value;
            var onChange = _this.props.onChange;
            if (onChange) {
                var args = {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: _this.value,
                    show: _this.show,
                    target: _this
                };
                onChange.call(undefined, args);
            }
            _this.valueDuringOnChange = undefined;
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            show: _this.props.show || _this.props.defaultShow || DateRangePickerWithoutContext.defaultProps.defaultShow,
            value: _this.props.value || _this.props.defaultValue || DateRangePickerWithoutContext.defaultProps.defaultValue,
            currentValue: SelectionRange_EMPTY_SELECTIONRANGE
        };
        _this.nextTick = _this.nextTick.bind(_this);
        _this.setShow = _this.setShow.bind(_this);
        _this.focusCalendarElement = _this.focusCalendarElement.bind(_this);
        _this.focusDateInputElement = _this.focusDateInputElement.bind(_this);
        return _this;
    }
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the DateRangePicker.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "startDateInput", {
        /**
         * Gets the start DateInput component inside the DatePicker component.
         */
        get: function () {
            return this._startDateInput.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "endDateInput", {
        /**
         * Gets the end DateInput component inside the DatePicker component.
         */
        get: function () {
            return this._endDateInput.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "calendar", {
        /**
         * Gets the MultiVieCalendar inside the DateRangePicker.
         */
        get: function () {
            return this._calendar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "value", {
        /**
         * Gets the value of the DateRangePicker.
         */
        get: function () {
            var value = this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
            return value || SelectionRange_EMPTY_SELECTIONRANGE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "show", {
        /**
         * Gets the popup state of the DateRangePicker.
         */
        get: function () {
            return this.showDuringOnChange !== undefined
                ? this.showDuringOnChange
                : this.props.show !== undefined
                    ? this.props.show
                    : this.state.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : DateRangePickerWithoutContext.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : DateRangePickerWithoutContext.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "document", {
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
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "localizationService", {
        get: function () {
            var localization = (0,index_mjs_.provideLocalizationService)(this);
            return localization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateRangePickerWithoutContext.prototype, "mobileMode", {
        /**
         * The mobile mode of the DateRangePicker.
         */
        get: function () {
            var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE && this.props.adaptive;
            return !!isAdaptive;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.prototype.componentDidMount = function () {
        var _a;
        this.observerResize = main_js_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
        if (this.show) {
            // If defaultShow is true during the initial render, the popup is not aligned.
            this.forceUpdate();
        }
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.observe(this.document.body);
        }
    };
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.prototype.componentDidUpdate = function () {
        if (this.shouldFocusCalendar) {
            this.focusCalendarElement();
        }
        if (this.shouldFocusDateInput) {
            this.focusDateInputElement();
        }
        this.shouldFocusCalendar = false;
        this.shouldFocusDateInput = false;
    };
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.prototype.componentWillUnmount = function () {
        var _a;
        clearTimeout(this.nextTickId);
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.disconnect();
        }
    };
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.prototype.render = function () {
        var _this = this;
        var value = this.value || SelectionRange_EMPTY_SELECTIONRANGE;
        var valueToShow = (this.mobileMode && this.show) ? this.state.currentValue : value;
        var startDateInputId = (this.props.startDateInputSettings || {}).id || this._startInputId;
        var endDateInputId = (this.props.endDateInputSettings || {}).id || this._endInputId;
        var rootClassName = (0,main_js_.classNames)('k-daterangepicker', {
            'k-disabled': this.props.disabled
        }, this.props.className);
        var startMessage = this.localizationService.toLanguageString(start, messages[start]);
        var endMessage = this.localizationService.toLanguageString(end, messages[end]);
        var separatorMessage = this.localizationService.toLanguageString(separator, messages[separator]);
        var startDateInputProps = DateRangePicker_assign(DateRangePicker_assign({ disableSelection: this.mobileMode && true, label: startMessage, format: this.props.format, min: this.min, max: this.max, id: this._startInputId, disabled: this.props.disabled, valid: this.props.valid, tabIndex: this.props.tabIndex, ariaExpanded: this.show }, this.props.startDateInputSettings), { value: valueToShow.start, onChange: this.handleStartChange });
        var endDateInputProps = DateRangePicker_assign(DateRangePicker_assign({ disableSelection: this.mobileMode && true, label: endMessage, format: this.props.format, min: this.min, max: this.max, id: this._endInputId, disabled: this.props.disabled, valid: this.props.valid, tabIndex: this.props.tabIndex, ariaExpanded: this.show }, this.props.endDateInputSettings), { value: valueToShow.end, onChange: this.handleEndChange });
        var reverseButton = (index_js_.createElement(es_main_js_.Button, DateRangePicker_assign({ type: "button", className: "k-select", fillMode: "flat", title: (0,index_mjs_.provideLocalizationService)(this)
                .toLanguageString(swapStartEnd, messages[swapStartEnd]), onMouseDown: this.handleReverseMouseDown, onClick: this.handleReverseClick }, {
            'aria-controls': startDateInputId + ' ' + endDateInputId,
            'aria-label': (0,index_mjs_.provideLocalizationService)(this)
                .toLanguageString(swapStartEnd, messages[swapStartEnd])
        }),
            index_js_.createElement(main_js_.IconWrap, { style: { transform: 'rotate(90deg)' }, name: "arrows-swap", icon: index_es_js_.arrowsSwapIcon })));
        return (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement("span", { ref: function (span) {
                    _this._element = span;
                }, className: rootClassName, style: this.props.style, id: this.props.id, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, tabIndex: this.props.tabIndex, onFocus: this.handleFocus, onBlur: !this.mobileMode ? this.handleBlur : undefined, onKeyDown: this.handleKeyDown, dir: this.props.dir },
                this.props.startDateInput
                    ? index_js_.createElement(this.props.startDateInput, DateRangePicker_assign({}, startDateInputProps))
                    : index_js_.createElement(DateInput, DateRangePicker_assign({}, startDateInputProps, { ref: this._startDateInput, ariaRole: "combobox", ariaControls: this._popupId, readonly: this.mobileMode })),
                (this.props.allowReverse
                    || (this.props.calendarSettings && this.props.calendarSettings.allowReverse))
                    && this.props.swapButton
                    ? (reverseButton)
                    : (separatorMessage),
                this.props.endDateInput
                    ? index_js_.createElement(this.props.endDateInput, DateRangePicker_assign({}, endDateInputProps))
                    : index_js_.createElement(DateInput, DateRangePicker_assign({}, endDateInputProps, { ref: this._endDateInput, ariaRole: "combobox", ariaControls: this._popupId, readonly: this.mobileMode })),
                !this.mobileMode && this.renderPopup()),
            this.mobileMode && this.renderAdaptivePopup()));
    };
    DateRangePickerWithoutContext.prototype.focusDateInputElement = function () {
        if (!document || !this.startDateInput || !this.startDateInput.element
            || !this.endDateInput || !this.endDateInput.element) {
            return;
        }
        var activeElement = (0,main_js_.getActiveElement)(document);
        if ((this.value.start === null || this.value.end !== null)
            && activeElement !== this.endDateInput.element) {
            this.startDateInput.element.focus({ preventScroll: true });
        }
        else if (activeElement !== this.startDateInput.element) {
            this.endDateInput.element.focus({ preventScroll: true });
        }
    };
    DateRangePickerWithoutContext.prototype.nextTick = function (f) {
        // XXX: use window.setTimeout due to async focus/blur events in IE, and missing relatedTarget prop.
        // XXX: https://github.com/facebook/react/issues/3751
        // Handles multiple focus events happening at the same time.
        clearTimeout(this.nextTickId);
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    DateRangePickerWithoutContext.prototype.setShow = function (show) {
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        if (this.show === show) {
            return;
        }
        this.setState({ show: show });
        if (show && onOpen) {
            onOpen.call(undefined, {
                target: this
            });
        }
        if (!show && onClose) {
            onClose.call(undefined, {
                target: this
            });
        }
    };
    DateRangePickerWithoutContext.prototype.calculateMedia = function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            this.setState({ windowWidth: entry.target.clientWidth });
        }
        ;
    };
    ;
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.displayName = 'DateRangePicker';
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.propTypes = {
        allowReverse: prop_types_index_js_.bool,
        calendarSettings: prop_types_index_js_.any,
        className: prop_types_index_js_.string,
        defaultShow: prop_types_index_js_.bool,
        defaultValue: prop_types_index_js_.shape({
            start: nullable(prop_types_index_js_.instanceOf(Date).isRequired),
            end: nullable(prop_types_index_js_.instanceOf(Date).isRequired)
        }),
        disabled: prop_types_index_js_.bool,
        endDateInputSettings: prop_types_index_js_.shape(DateInputWithoutContext.propTypes),
        focusedDate: prop_types_index_js_.instanceOf(Date),
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        max: prop_types_index_js_.instanceOf(Date),
        min: prop_types_index_js_.instanceOf(Date),
        onBlur: prop_types_index_js_.func,
        onChange: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        popupSettings: prop_types_index_js_.any,
        show: prop_types_index_js_.bool,
        startDateInputSettings: prop_types_index_js_.any,
        style: prop_types_index_js_.any,
        swapButton: prop_types_index_js_.any,
        tabIndex: prop_types_index_js_.number,
        dir: prop_types_index_js_.string,
        value: prop_types_index_js_.shape({
            start: nullable(prop_types_index_js_.instanceOf(Date).isRequired),
            end: nullable(prop_types_index_js_.instanceOf(Date).isRequired)
        })
    };
    /**
     * @hidden
     */
    DateRangePickerWithoutContext.defaultProps = {
        allowReverse: false,
        defaultShow: false,
        defaultValue: SelectionRange_EMPTY_SELECTIONRANGE,
        disabled: false,
        format: 'd',
        max: MAX_DATE,
        min: MIN_DATE,
        swapButton: false
    };
    return DateRangePickerWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `DateRangePicker` component.
 * Used for global configuration of all `DateRangePicker` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var DateRangePickerPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare */
/**
 * Represents the KendoReact DateRangePicker Component.
 *
 * Accepts properties of type [DateRangePickerProps]({% slug api_dateinputs_daterangepickerprops %}).
 * Obtaining the `ref` returns an object of type [DateRangePickerHandle]({% slug api_dateinputs_daterangepickerhandle %}).
 */
var DateRangePicker = (0,main_js_.withPropsContext)(DateRangePickerPropsContext, DateRangePickerWithoutContext);
DateRangePicker.displayName = 'KendoReactDateRangePicker';
(0,index_mjs_.registerForLocalization)(DateRangePickerWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/datetimepicker/DateTimeSelector.js
var DateTimeSelector_extends = (undefined && undefined.__extends) || (function () {
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
var DateTimeSelector_assign = (undefined && undefined.__assign) || function () {
    DateTimeSelector_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DateTimeSelector_assign.apply(this, arguments);
};











/**
 * @hidden
 */
var DateTimeSelector = /** @class */ (function (_super) {
    DateTimeSelector_extends(DateTimeSelector, _super);
    function DateTimeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this._calendar = null;
        _this._timePart = null;
        _this._cancelButton = null;
        _this._acceptButton = null;
        _this._calendarWrap = null;
        _this.shouldFocusPart = false;
        _this.focus = function (args) {
            // Async to avoid stealing the focus from the DateInput on close
            Promise.resolve().then(function () {
                if (_this.state.tab === 'time' && _this._timePart) {
                    _this._timePart.focus(args);
                }
                var calendarElement = _this.calendarElement();
                if (_this.state.tab === 'date' && calendarElement) {
                    calendarElement.focus(args);
                }
            });
        };
        _this.calendarElement = function () {
            return (_this._calendar && _this._calendar.element) ||
                (_this._calendarWrap && _this._calendarWrap.querySelector('.k-widget.k-calendar'));
        };
        _this.move = function (direction) {
            if (direction === 'right' && _this.state.tab === 'time') {
                return;
            }
            if (direction === 'left' && _this.state.tab === 'date') {
                return;
            }
            var nextPart = direction === 'left' ? 'date' : 'time';
            _this.shouldFocusPart = true;
            _this.setState({ tab: nextPart });
        };
        _this.dateTimeFooter = function () {
            var cancelButton = _this.props.cancelButton;
            var cancelMessage = _this.localizationService.toLanguageString(dateTimePickerCancel, messages[dateTimePickerCancel]);
            var setMessage = _this.localizationService.toLanguageString(dateTimePickerSet, messages[dateTimePickerSet]);
            return (index_js_.createElement("div", { className: "k-datetime-footer k-actions k-actions-stretched " },
                cancelButton && index_js_.createElement(es_main_js_.Button, DateTimeSelector_assign({ type: "button", ref: function (btn) { _this._cancelButton = btn; }, className: "k-time-cancel", onClick: _this.handleReject, title: cancelMessage }, { 'aria-label': cancelMessage }), cancelMessage),
                index_js_.createElement(es_main_js_.Button, DateTimeSelector_assign({ type: "button", themeColor: "primary", ref: function (btn) { _this._acceptButton = btn; }, className: "k-time-accept", disabled: !_this.hasDateValue, onClick: _this.handleAccept, title: setMessage }, { 'aria-label': setMessage }), setMessage)));
        };
        _this.handleReject = function (event) {
            _this.setState({ dateValue: _this.props.value, timeValue: _this.props.value || MIDNIGHT_DATE });
            var value = _this.mergeDate(_this.props.value, _this.props.value || MIDNIGHT_DATE);
            if (_this.props.onReject) {
                var args = {
                    nativeEvent: event.nativeEvent,
                    syntheticEvent: event,
                    target: _this,
                    value: value
                };
                _this.props.onReject.call(undefined, args);
            }
        };
        _this.handleAccept = function (event, timeOverride) {
            if (!_this.state.dateValue || !_this.state.timeValue || !_this.hasDateValue) {
                return;
            }
            var value = _this.mergeDate(_this.state.dateValue, timeOverride || _this.state.timeValue);
            _this.props.onChange.call(undefined, {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                value: value,
                target: _this
            });
        };
        _this.handleNowClick = function (event) {
            _this.setState({ timeValue: getNow() });
            _this.handleAccept(event, getNow());
        };
        _this.handleCalendarValueChange = function (event) {
            event.syntheticEvent.stopPropagation();
            _this.setState({ dateValue: event.value, tab: 'time' });
            _this.shouldFocusPart = true;
        };
        _this.handleTimeListContainerChange = function (candidate) {
            _this.setState({ timeValue: candidate });
        };
        _this.handleDateClick = function (event) {
            event.stopPropagation();
            _this.move('left');
        };
        _this.handleTimeClick = function (event) {
            event.stopPropagation();
            _this.move('right');
        };
        _this.handleKeyDown = function (event) {
            var keyCode = event.keyCode, altKey = event.altKey;
            switch (keyCode) {
                case main_js_.Keys.enter:
                    if (!_this.hasActiveButton() && _this.hasDateValue) {
                        _this.handleAccept(event);
                    }
                    return;
                case main_js_.Keys.left:
                    if (!altKey) {
                        return;
                    }
                    _this.move('left');
                    return;
                case main_js_.Keys.right:
                    if (!altKey) {
                        return;
                    }
                    _this.move('right');
                    return;
                default:
                    return;
            }
        };
        _this.handleTimePartMount = function (value) {
            _this.setState({ timeValue: value });
        };
        _this.state = {
            tab: 'date',
            dateValue: _this.props.value,
            timeValue: _this.props.value || MIDNIGHT_DATE
        };
        return _this;
    }
    Object.defineProperty(DateTimeSelector.prototype, "calendar", {
        get: function () {
            return this._calendar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimeSelector.prototype, "timePart", {
        get: function () {
            return this._timePart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimeSelector.prototype, "hasDateValue", {
        get: function () {
            return this.state.dateValue !== null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimeSelector.prototype, "localizationService", {
        get: function () {
            return (0,index_mjs_.provideLocalizationService)(this);
        },
        enumerable: false,
        configurable: true
    });
    DateTimeSelector.prototype.componentDidUpdate = function () {
        if (this.shouldFocusPart) {
            this.focus({ preventScroll: true });
        }
        this.shouldFocusPart = false;
    };
    DateTimeSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, min = _a.min, max = _a.max, weekNumber = _a.weekNumber, focusedDate = _a.focusedDate, format = _a.format, mobileMode = _a.mobileMode, footerActions = _a.footerActions;
        var rootClassName = (0,main_js_.classNames)({
            'k-date-tab': this.state.tab === 'date',
            'k-time-tab': this.state.tab === 'time',
            'k-disabled': disabled
        }, 'k-datetime-wrap');
        var dateMessage = this.localizationService.toLanguageString(date, messages[date]);
        var timeMessage = this.localizationService.toLanguageString(time, messages[time]);
        var calendarProps = {
            min: min,
            max: max,
            weekNumber: weekNumber,
            focusedDate: focusedDate,
            disabled: disabled || this.state.tab !== 'date',
            value: this.state.dateValue,
            onChange: this.handleCalendarValueChange,
            navigation: false,
            mobileMode: mobileMode
        };
        return (index_js_.createElement("div", { onKeyDown: this.handleKeyDown, className: rootClassName, tabIndex: -1 },
            index_js_.createElement("div", { className: "k-datetime-buttongroup" },
                index_js_.createElement(es_main_js_.ButtonGroup, { width: "100%" },
                    index_js_.createElement(es_main_js_.Button, { type: "button", selected: this.state.tab === 'date', togglable: true, onClick: this.handleDateClick }, dateMessage),
                    index_js_.createElement(es_main_js_.Button, { type: "button", selected: this.state.tab === 'time', togglable: true, onClick: this.handleTimeClick }, timeMessage))),
            index_js_.createElement("div", { className: "k-datetime-selector" },
                index_js_.createElement("div", { className: "k-datetime-calendar-wrap", ref: function (e) { return _this._calendarWrap = e; } }, this.props.calendar ?
                    index_js_.createElement(this.props.calendar, DateTimeSelector_assign({}, calendarProps)) :
                    index_js_.createElement(Calendar, DateTimeSelector_assign({ ref: function (calendar) { _this._calendar = calendar; } }, calendarProps))),
                index_js_.createElement("div", { className: "k-datetime-time-wrap" },
                    index_js_.createElement("div", { className: mobileMode ? 'k-reset k-timeselector-lg k-timeselector' : '' }, index_js_.createElement(TimePart, { key: 1, onNowClick: this.handleNowClick, disabled: disabled || this.state.tab !== 'time', ref: function (timePart) { _this._timePart = timePart; }, min: this.minTime || MIN_TIME, max: this.maxTime || MAX_TIME, steps: this.props.steps, value: this.state.timeValue, format: format, onChange: this.handleTimeListContainerChange, onMount: this.handleTimePartMount, mobileMode: mobileMode })))),
            footerActions && this.dateTimeFooter()));
    };
    Object.defineProperty(DateTimeSelector.prototype, "minTime", {
        get: function () {
            return this.props.minTime !== undefined
                ? this.props.minTime
                : this.normalizeRange(this.props.min, this.state.dateValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimeSelector.prototype, "maxTime", {
        get: function () {
            return this.props.maxTime !== undefined
                ? this.props.maxTime
                : this.normalizeRange(this.props.max, this.state.dateValue);
        },
        enumerable: false,
        configurable: true
    });
    DateTimeSelector.prototype.normalizeRange = function (candidate, value) {
        return (0,is_equal_date/* isEqualDate */.$)(candidate, value || getToday())
            ? candidate
            : null;
    };
    DateTimeSelector.prototype.hasActiveButton = function () {
        if (!this._acceptButton) {
            return false;
        }
        var activeElement = (0,main_js_.getActiveElement)(document);
        return (this._acceptButton && activeElement === this._acceptButton.element)
            || (this._cancelButton && activeElement === this._cancelButton.element);
    };
    DateTimeSelector.prototype.mergeTime = function (current, candidate) {
        return current && candidate ? setTime(candidate, current) : candidate;
    };
    DateTimeSelector.prototype.mergeDate = function (candidate, value) {
        return candidate ? setTime(candidate || getToday(), value) : value;
    };
    /**
     * @hidden
     */
    DateTimeSelector.defaultProps = {
        footerActions: true
    };
    return DateTimeSelector;
}(index_js_.Component));

(0,index_mjs_.registerForLocalization)(DateTimeSelector);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/datetimepicker/DateTimePicker.js
var DateTimePicker_extends = (undefined && undefined.__extends) || (function () {
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
var DateTimePicker_assign = (undefined && undefined.__assign) || function () {
    DateTimePicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DateTimePicker_assign.apply(this, arguments);
};




















/** @hidden */
var DateTimePickerWithoutContext = /** @class */ (function (_super) {
    DateTimePicker_extends(DateTimePickerWithoutContext, _super);
    function DateTimePickerWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this._popupId = (0,main_js_.guid)();
        _this._element = null;
        _this._dateInput = index_js_.createRef();
        _this._dateTimeSelector = null;
        _this.shouldFocusDateInput = false;
        _this.prevShow = false;
        /**
         * @hidden
         */
        _this.focus = function () {
            var dateInputElement = _this.dateInputElement();
            if (dateInputElement) {
                dateInputElement.focus();
            }
        };
        _this.renderPicker = function () {
            var _a = _this.props, disabled = _a.disabled, minTime = _a.minTime, maxTime = _a.maxTime, format = _a.format, calendar = _a.calendar, cancelButton = _a.cancelButton, weekNumber = _a.weekNumber, focusedDate = _a.focusedDate;
            return (index_js_.createElement(DateTimeSelector, { ref: function (dateTimeSelector) { _this._dateTimeSelector = dateTimeSelector; }, cancelButton: cancelButton, steps: _this.props.steps, value: _this.value, onChange: _this.handleValueChange, onReject: _this.handleReject, disabled: disabled, weekNumber: weekNumber, min: _this.min, max: _this.max, minTime: minTime, maxTime: maxTime, focusedDate: focusedDate, format: format, calendar: calendar, mobileMode: _this.mobileMode, footerActions: !_this.mobileMode }));
        };
        _this.renderAdaptivePopup = function () {
            var _a = _this.state.windowWidth, windowWidth = _a === void 0 ? 0 : _a;
            var cancelText = (0,index_mjs_.provideLocalizationService)(_this)
                .toLanguageString(dateTimePickerCancel, messages[dateTimePickerCancel]);
            var applyText = (0,index_mjs_.provideLocalizationService)(_this)
                .toLanguageString(dateTimePickerSet, messages[dateTimePickerSet]);
            var actionSheetProps = {
                expand: _this.show,
                onClose: _this.handleBlur,
                adaptiveTitle: _this.props.adaptiveTitle,
                windowWidth: windowWidth,
                footer: {
                    cancelText: cancelText,
                    onCancel: function (event) { var _a; return (_a = _this._dateTimeSelector) === null || _a === void 0 ? void 0 : _a.handleReject(event); },
                    applyText: applyText,
                    onApply: function (event) { var _a; return (_a = _this._dateTimeSelector) === null || _a === void 0 ? void 0 : _a.handleAccept(event); }
                }
            };
            return (index_js_.createElement(AdaptiveMode, DateTimePicker_assign({}, actionSheetProps),
                index_js_.createElement(kendo_react_layout_dist_es_main_js_.ActionSheetContent, { className: '!k-overflow-hidden' }, _this.renderPicker())));
        };
        _this.handleReject = function () {
            _this.shouldFocusDateInput = true;
            _this.setShow(false);
        };
        _this.handleValueChange = function (event) {
            _this.setState({
                value: (0,clone_date/* cloneDate */.a)(event.value || undefined)
            });
            _this.valueDuringOnChange = event.value;
            _this.showDuringOnChange = false;
            if (!_this.mobileMode) {
                _this.shouldFocusDateInput = true;
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.call(undefined, {
                    syntheticEvent: event.syntheticEvent,
                    nativeEvent: event.nativeEvent,
                    value: _this.value,
                    show: _this.show,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
            _this.showDuringOnChange = undefined;
            _this.setShow(false);
        };
        _this.handleFocus = function () {
            _this.setState({ focused: true });
        };
        _this.handleBlur = function () {
            _this.setState({ focused: false });
            _this.setShow(false);
        };
        _this.handleDateIconClick = function () {
            if (_this.props.disabled) {
                return;
            }
            _this.shouldFocusDateInput = true;
            _this.setShow(!_this.show);
        };
        _this.handleIconMouseDown = function (event) {
            event.preventDefault();
        };
        _this.handleKeyDown = function (event) {
            var altKey = event.altKey, keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.esc) {
                _this.shouldFocusDateInput = true;
                _this.setShow(false);
                return;
            }
            if (altKey && (keyCode === main_js_.Keys.up || keyCode === main_js_.Keys.down)) {
                event.preventDefault();
                event.stopPropagation();
                _this.shouldFocusDateInput = keyCode === main_js_.Keys.up;
                _this.setShow(keyCode === main_js_.Keys.down);
            }
        };
        _this.dateInputElement = function () {
            return (_this.dateInput && _this.dateInput.element) ||
                (_this.element && _this.element.querySelector('.k-dateinput > input.k-input-inner'));
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            value: _this.props.defaultValue || DateTimePickerWithoutContext.defaultProps.defaultValue,
            show: _this.props.defaultShow || DateTimePickerWithoutContext.defaultProps.defaultShow,
            focused: false
        };
        return _this;
    }
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "document", {
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
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "element", {
        /**
         * Gets the wrapping element of the DateTimePicker.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "dateInput", {
        /**
         * Gets the DateInput component inside the DateTimePicker component.
         */
        get: function () {
            return this._dateInput.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "value", {
        /**
         * Gets the value of the DateTimePicker.
         */
        get: function () {
            var value = this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.value !== undefined
                    ? this.props.value
                    : this.state.value;
            return (value !== null) ? (0,clone_date/* cloneDate */.a)(value) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "show", {
        /**
         * Gets the popup state of the DateTimePicker.
         */
        get: function () {
            return this.showDuringOnChange !== undefined
                ? this.showDuringOnChange
                : this.props.show !== undefined
                    ? this.props.show
                    : this.state.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the DateTimePicker.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "mobileMode", {
        /**
         * The mobile mode of the ComboBox.
         */
        get: function () {
            var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE && this.props.adaptive;
            return !!isAdaptive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "min", {
        get: function () {
            return this.props.min !== undefined
                ? this.props.min
                : DateTimePickerWithoutContext.defaultProps.min;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "max", {
        get: function () {
            return this.props.max !== undefined
                ? this.props.max
                : DateTimePickerWithoutContext.defaultProps.max;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the DateTimePicker is set.
         */
        get: function () {
            var inRange = isInDateRange(this.value, this.min, this.max)
                && isInTimeRange(this.value, this.props.minTime || MIN_TIME, this.props.maxTime || MAX_TIME);
            var customError = this.props.validationMessage !== undefined;
            var isValid = (!this.required || this.value !== null) && inRange;
            var valid = this.props.valid !== undefined ? this.props.valid : isValid;
            return {
                customError: customError,
                rangeOverflow: (this.value && this.max.getTime() < this.value.getTime()) || false,
                rangeUnderflow: (this.value && this.value.getTime() < this.min.getTime()) || false,
                valid: valid,
                valueMissing: this.value === null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : DateTimePickerWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : DateTimePickerWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTimePickerWithoutContext.prototype, "dateInputComp", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.dateInput || DateTimePickerWithoutContext.defaultProps.dateInput;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.prototype.componentDidMount = function () {
        var _a;
        this.observerResize = main_js_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
        if (this.show) {
            // If defaultShow is true during the initial render, the popup is not aligned.
            this.forceUpdate();
        }
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.observe(this.document.body);
        }
    };
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.prototype.componentDidUpdate = function () {
        var dateInputElement = this.dateInputElement();
        if (this._dateTimeSelector && this.show && !this.prevShow) {
            this._dateTimeSelector.focus({ preventScroll: true });
        }
        if (dateInputElement
            && !this.show
            && this.shouldFocusDateInput) {
            dateInputElement.focus({ preventScroll: true });
        }
        this.prevShow = this.show;
        this.shouldFocusDateInput = false;
    };
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.prototype.componentWillUnmount = function () {
        var _a;
        clearTimeout(this.nextTickId);
        if (((_a = this.document) === null || _a === void 0 ? void 0 : _a.body) && this.observerResize) {
            this.observerResize.disconnect();
        }
    };
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.size, size = _b === void 0 ? DateTimePickerWithoutContext.defaultProps.size : _b, _c = _a.rounded, rounded = _c === void 0 ? DateTimePickerWithoutContext.defaultProps.rounded : _c, _d = _a.fillMode, fillMode = _d === void 0 ? DateTimePickerWithoutContext.defaultProps.fillMode : _d, disabled = _a.disabled, tabIndex = _a.tabIndex, title = _a.title, id = _a.id, format = _a.format, formatPlaceholder = _a.formatPlaceholder, min = _a.min, max = _a.max, className = _a.className, width = _a.width, name = _a.name, validationMessage = _a.validationMessage, required = _a.required, validityStyles = _a.validityStyles, minTime = _a.minTime, maxTime = _a.maxTime, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, _e = _a.popup, PopupComponent = _e === void 0 ? kendo_react_popup_dist_es_main_js_.Popup : _e;
        var isValid = !this.validityStyles || this.validity.valid;
        var dataInputProps = {
            id: id,
            ariaLabelledBy: ariaLabelledBy,
            ariaDescribedBy: ariaDescribedBy,
            format: format,
            formatPlaceholder: formatPlaceholder,
            disabled: disabled,
            title: title,
            validityStyles: validityStyles,
            validationMessage: validationMessage,
            required: required,
            min: min,
            max: max,
            minTime: minTime,
            maxTime: maxTime,
            name: name,
            tabIndex: !this.show ? tabIndex : -1,
            valid: this.validity.valid,
            value: this.value,
            onChange: this.handleValueChange,
            steps: this.props.steps,
            label: undefined,
            placeholder: !this.state.focused ? this.props.placeholder : null,
            ariaExpanded: this.show,
            size: null,
            fillMode: null,
            rounded: null
        };
        var dateTimePicker = (index_js_.createElement(main_js_.AsyncFocusBlur, { onFocus: this.handleFocus, onBlur: this.handleBlur, onSyncFocus: this.props.onFocus, onSyncBlur: this.props.onBlur }, function (_a) {
            var _b;
            var onFocus = _a.onFocus, onBlur = _a.onBlur;
            return (index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement("div", { ref: function (div) {
                        _this._element = div;
                    }, className: (0,main_js_.classNames)('k-input', 'k-datetimepicker', (_b = {},
                        _b["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                        _b["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                        _b["k-input-".concat(fillMode)] = fillMode,
                        _b['k-invalid'] = !isValid,
                        _b['k-required'] = _this.required,
                        _b['k-disabled'] = _this.props.disabled,
                        _b), className), onKeyDown: _this.handleKeyDown, style: { width: width }, onFocus: !_this.mobileMode ? onFocus : undefined, onBlur: onBlur, onClick: _this.mobileMode ? _this.handleDateIconClick : undefined },
                    index_js_.createElement(_this.dateInputComp, DateTimePicker_assign({ _ref: _this._dateInput, ariaRole: "combobox", ariaControls: _this._popupId, readonly: _this.mobileMode }, dataInputProps)),
                    index_js_.createElement(es_main_js_.Button, DateTimePicker_assign({ tabIndex: -1, type: "button", icon: 'calendar', svgIcon: index_es_js_.calendarIcon, onMouseDown: _this.handleIconMouseDown, onClick: _this.mobileMode ? undefined : _this.handleDateIconClick, title: (0,index_mjs_.provideLocalizationService)(_this)
                            .toLanguageString(toggleDateTimeSelector, messages[toggleDateTimeSelector]), className: "k-input-button", rounded: null }, {
                        'aria-label': (0,index_mjs_.provideLocalizationService)(_this)
                            .toLanguageString(toggleDateTimeSelector, messages[toggleDateTimeSelector])
                    })),
                    index_js_.createElement(PopupComponent, { show: _this.show, animate: _this.element !== null, anchor: _this.element, popupClass: "k-datetime-container k-reset", id: _this._popupId, anchorAlign: {
                            horizontal: 'left',
                            vertical: 'bottom'
                        }, popupAlign: {
                            horizontal: 'left',
                            vertical: 'top'
                        } }, !_this.mobileMode && _this.renderPicker())),
                _this.mobileMode && _this.renderAdaptivePopup()));
        }));
        return this.props.label
            ? (index_js_.createElement(PickerFloatingLabel, { dateInput: this._dateInput, label: this.props.label, editorId: id, editorValid: isValid, editorDisabled: this.props.disabled, children: dateTimePicker, style: { width: this.props.width } }))
            : dateTimePicker;
    };
    DateTimePickerWithoutContext.prototype.setShow = function (show) {
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        if (this.show === show) {
            return;
        }
        this.setState({ show: show });
        if (show && onOpen) {
            onOpen.call(undefined, {
                target: this
            });
        }
        if (!show && onClose) {
            onClose.call(undefined, {
                target: this
            });
        }
    };
    DateTimePickerWithoutContext.prototype.nextTick = function (f) {
        // XXX: use window.setTimeout due to async focus/blur events in IE, and missing relatedTarget prop.
        // XXX: https://github.com/facebook/react/issues/3751
        // Handles multiple focus events happening at the same time.
        clearTimeout(this.nextTickId);
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    DateTimePickerWithoutContext.prototype.calculateMedia = function (entries) {
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            this.setState({ windowWidth: entry.target.clientWidth });
        }
        ;
    };
    ;
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.displayName = 'DateTimePicker';
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.propTypes = {
        className: prop_types_index_js_.string,
        defaultShow: prop_types_index_js_.bool,
        defaultValue: prop_types_index_js_.instanceOf(Date),
        disabled: prop_types_index_js_.bool,
        focusedDate: prop_types_index_js_.instanceOf(Date),
        format: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.shape({
                skeleton: prop_types_index_js_.string,
                pattern: prop_types_index_js_.string,
                date: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                time: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                datetime: prop_types_index_js_.oneOf(['short', 'medium', 'long', 'full']),
                era: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                year: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                month: prop_types_index_js_.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
                day: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                weekday: prop_types_index_js_.oneOf(['narrow', 'short', 'long']),
                hour: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                hour12: prop_types_index_js_.bool,
                minute: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                second: prop_types_index_js_.oneOf(['numeric', '2-digit']),
                timeZoneName: prop_types_index_js_.oneOf(['short', 'long'])
            })
        ]),
        formatPlaceholder: prop_types_index_js_.oneOfType([
            prop_types_index_js_.oneOf(['wide', 'narrow', 'short', 'formatPattern']),
            prop_types_index_js_.shape({
                year: prop_types_index_js_.string,
                month: prop_types_index_js_.string,
                day: prop_types_index_js_.string,
                hour: prop_types_index_js_.string,
                minute: prop_types_index_js_.string,
                second: prop_types_index_js_.string
            })
        ]),
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        min: prop_types_index_js_.instanceOf(Date),
        max: prop_types_index_js_.instanceOf(Date),
        name: prop_types_index_js_.string,
        popupSettings: prop_types_index_js_.shape({
            animate: prop_types_index_js_.bool,
            appendTo: prop_types_index_js_.any,
            popupClass: prop_types_index_js_.string
        }),
        show: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        title: prop_types_index_js_.string,
        value: prop_types_index_js_.instanceOf(Date),
        weekNumber: prop_types_index_js_.bool,
        width: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        valid: prop_types_index_js_.bool,
        cancelButton: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
    };
    /**
     * @hidden
     */
    DateTimePickerWithoutContext.defaultProps = {
        defaultShow: false,
        defaultValue: null,
        disabled: false,
        format: 'g',
        max: MAX_DATE,
        min: MIN_DATE,
        popupSettings: {},
        tabIndex: 0,
        weekNumber: false,
        required: false,
        validityStyles: true,
        cancelButton: true,
        dateInput: DateInput,
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };
    return DateTimePickerWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `DateTimePicker` component.
 * Used for global configuration of all `DateTimePicker` instances.
 *
 * For more information, refer to the [DateInputs Props Context]({% slug props-context_dateinputs %}) article.
 */
var DateTimePickerPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare */
/**
 * Represents the KendoReact DateTimePicker Component.
 *
 * Accepts properties of type [DateTimePickerProps]({% slug api_dateinputs_datetimepickerprops %}).
 * Obtaining the `ref` returns an object of type [DateTimePickerHandle]({% slug api_dateinputs_datetimepickerhandle %}).
 */
var DateTimePicker = (0,main_js_.withPropsContext)(DateTimePickerPropsContext, DateTimePickerWithoutContext);
DateTimePicker.displayName = 'KendoReactDateTimePicker';
(0,index_mjs_.registerForLocalization)(DateTimePickerWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/index.js











;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/index.js





;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-_226ac2abded47bdb5c0677ff922d67fe/node_modules/@progress/kendo-react-dateinputs/dist/es/main.js































/***/ }

}]);