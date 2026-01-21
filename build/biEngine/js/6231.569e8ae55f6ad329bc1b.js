"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[6231],{

/***/ 56231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Action: () => (/* reexport */ NavigationAction_w),
  BusViewService: () => (/* reexport */ BusViewService_V),
  Calendar: () => (/* reexport */ Calendar_z),
  CalendarCell: () => (/* reexport */ CalendarCell_w),
  CalendarHeaderTitle: () => (/* reexport */ s),
  CalendarNavigationItem: () => (/* reexport */ CalendarNavigationItem_o),
  CalendarPropsContext: () => (/* reexport */ Y),
  CalendarViewEnum: () => (/* reexport */ CalendarViewEnum_c),
  CalendarWeekCell: () => (/* reexport */ CalendarWeekCell_o),
  CalendarWithoutContext: () => (/* reexport */ Calendar_d),
  CenturyViewService: () => (/* reexport */ CenturyViewService_W),
  DOMService: () => (/* reexport */ DOMService_P),
  DateInput: () => (/* reexport */ DateInput_F),
  DateInputPropsContext: () => (/* reexport */ re),
  DateInputWithoutContext: () => (/* reexport */ DateInput_u),
  DatePicker: () => (/* reexport */ he),
  DatePickerPropsContext: () => (/* reexport */ ue),
  DatePickerWithoutContext: () => (/* reexport */ DatePicker_p),
  DateRangePicker: () => (/* reexport */ DateRangePicker_j),
  DateRangePickerPropsContext: () => (/* reexport */ Z),
  DateRangePickerWithoutContext: () => (/* reexport */ DateRangePicker_p),
  DateTimePicker: () => (/* reexport */ DateTimePicker_ue),
  DateTimePickerPropsContext: () => (/* reexport */ DateTimePicker_he),
  DateTimePickerWithoutContext: () => (/* reexport */ DateTimePicker_c),
  DayPeriodService: () => (/* reexport */ DayPeriodService_H),
  DecadeViewService: () => (/* reexport */ DecadeViewService_U),
  EMPTY_SELECTIONRANGE: () => (/* reexport */ SelectionRange_l),
  Header: () => (/* reexport */ Header_n),
  HorizontalViewList: () => (/* reexport */ HorizontalViewList_l),
  HoursService: () => (/* reexport */ HoursService_B),
  MAX_DATE: () => (/* reexport */ L),
  MAX_TIME: () => (/* reexport */ G),
  MIN_DATE: () => (/* reexport */ utils_H),
  MIN_TIME: () => (/* reexport */ q),
  MinutesService: () => (/* reexport */ MinutesService_S),
  MonthViewService: () => (/* reexport */ MonthViewService_Q),
  MultiViewCalendar: () => (/* reexport */ MultiViewCalendar_he),
  MultiViewCalendarPropsContext: () => (/* reexport */ oe),
  MultiViewCalendarWithoutContext: () => (/* reexport */ MultiViewCalendar_p),
  NavigationService: () => (/* reexport */ NavigationService_p),
  PickerWrap: () => (/* reexport */ PickerWrap_m),
  ScrollSyncService: () => (/* reexport */ ScrollSyncService_s),
  SecondsService: () => (/* reexport */ D),
  TimeList: () => (/* reexport */ TimeList_d),
  TimePart: () => (/* reexport */ TimePart_c),
  TimePicker: () => (/* reexport */ TimePicker_ue),
  TimePickerPropsContext: () => (/* reexport */ de),
  TimePickerWithoutContext: () => (/* reexport */ TimePicker_p),
  TimeSelector: () => (/* reexport */ TimeSelector_u),
  TodayCommand: () => (/* reexport */ TodayCommand_a),
  ToggleButton: () => (/* reexport */ ToggleButton_e),
  ViewList: () => (/* reexport */ ViewList_c),
  Virtualization: () => (/* reexport */ Virtualization_g),
  WeekNamesService: () => (/* reexport */ r),
  YearViewService: () => (/* reexport */ YearViewService_K),
  dateInputsMessages: () => (/* reexport */ messages_V),
  decreaseValue: () => (/* reexport */ messages_c),
  end: () => (/* reexport */ l),
  getNow: () => (/* reexport */ utils_B),
  getToday: () => (/* reexport */ X),
  increaseValue: () => (/* reexport */ messages_a),
  separator: () => (/* reexport */ messages_s),
  start: () => (/* reexport */ messages_o),
  swapStartEnd: () => (/* reexport */ messages_r),
  today: () => (/* reexport */ n),
  toggleCalendar: () => (/* reexport */ messages_i),
  toggleDateTimeSelector: () => (/* reexport */ messages_d)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(29166);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/get-date.js
var get_date = __webpack_require__(10716);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/clone-date.js
var clone_date = __webpack_require__(5995);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js
var is_equal_date = __webpack_require__(79291);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.1.2_@progress+kendo-licensing@1_1b012f1cb4379e2d747b0d582d7a8ac9/node_modules/@progress/kendo-react-intl/index.mjs)
var kendo_react_intl_index_mjs_ = __webpack_require__(39932);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/package-metadata.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const e = {
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1712846675,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/virtualization/services/RowHeightService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const o = (i, t, s) => [
  ...i.slice(0, t + 1),
  ...i.slice(t + 1).map((e) => e + s)
];
class g {
  constructor(t = 0, s, e) {
    this.total = t, this.rowHeight = s, this.detailRowHeight = e, this.offsets = [], this.heights = [];
    let h = 0;
    for (let f = 0; f < t; f++)
      this.offsets.push(h), h += s, this.heights.push(s);
  }
  height(t) {
    return this.heights[t];
  }
  expandDetail(t) {
    this.height(t) === this.rowHeight && this.updateRowHeight(t, this.detailRowHeight);
  }
  collapseDetail(t) {
    this.height(t) > this.rowHeight && this.updateRowHeight(t, this.detailRowHeight * -1);
  }
  index(t) {
    for (let s = 0; s < this.offsets.length; s++) {
      if (t === this.offsets[s])
        return s;
      if (t < this.offsets[s])
        return s - 1;
    }
    return this.total - 1;
  }
  offset(t) {
    return this.offsets[t];
  }
  totalHeight() {
    return this.heights.reduce((t, s) => t + s, 0);
  }
  updateRowHeight(t, s) {
    this.heights[t] += s, this.offsets = o(this.offsets, t, s);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/virtualization/services/ScrollerService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const a = (e) => Math.max(e, 0);
class f {
  constructor(t) {
    this.offset = t;
  }
}
class d {
  constructor(t) {
    this.skip = t;
  }
}
class w {
  constructor(t, s) {
    this.onScrollAction = t, this.onPageAction = s, this.direction = "vertical", this.firstLoaded = 0, this.lastLoaded = 0, this.lastScrollTop = 0, this.take = 0, this.total = 0, this.rowHeightService = null, this.bottomOffset = 0, this.topOffset = 0;
  }
  create(t, s, h, l, i = 0, n = 0, r = "vertical") {
    this.rowHeightService = t, this.firstLoaded = s, this.lastLoaded = s + h, this.take = h, this.total = l, this.lastScrollTop = 0, this.topOffset = i, this.bottomOffset = n, this.direction = r;
    const o = this.rowsForHeight(i), c = a(s - o);
    this.onScrollAction(new f(this.rowOffset(c))), this.onPageAction(new d(c));
  }
  onScroll({ scrollLeft: t, scrollTop: s, offsetHeight: h, offsetWidth: l }) {
    const i = this.direction === "vertical" ? s : t, n = this.direction === "vertical" ? h : l;
    if (this.lastScrollTop === i || !this.rowHeightService)
      return;
    const r = this.lastScrollTop >= i;
    this.lastScrollTop = i;
    const o = this.rowHeightService.index(a(i - this.topOffset)), c = this.rowHeightService.index(a(i + n - this.bottomOffset));
    if (!r && c >= this.lastLoaded && this.lastLoaded < this.total && (this.firstLoaded = o, this.onScrollAction(new f(this.rowOffset(o))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new d(this.firstLoaded))), r && o <= this.firstLoaded) {
      const S = Math.floor(this.take * 0.3);
      this.firstLoaded = a(o - S), this.onScrollAction(new f(this.rowOffset(this.firstLoaded))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new d(this.firstLoaded));
    }
  }
  rowOffset(t) {
    return this.rowHeightService ? this.rowHeightService.offset(t) + this.topOffset : 0;
  }
  rowsForHeight(t) {
    return this.rowHeightService ? Math.ceil(t / this.rowHeightService.height(0)) : 0;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/virtualization/Virtualization.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const H = (s, i, t) => Math.min(Math.abs(i - s), t), P = 17, T = 10, x = {
  1: (s) => (i) => i + s,
  0: (s) => (i) => i - s
}, A = {
  1: (s) => (i) => Math.min(i, s),
  0: (s) => (i) => Math.max(i, s)
}, I = {
  1: (s) => (i) => i < s,
  0: (s) => (i) => i > s
}, c = class c extends index_js_.Component {
  constructor(i) {
    super(i), this.rowHeightService = null, this.scrollContainer = null, this.lastDirection = null, this.lastTotal = 0, this.lastTake = 0, this.animationInProgress = !1, this.restrictScroll = !1, this.scrollTo = (t) => {
      const e = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
      if (!this.scrollContainer)
        return;
      const r = this.scrollContainer[e];
      this.restrictScroll && e === "scrollTop" && (!Number.isInteger(r) || !Number.isInteger(t)) && Math.abs(r - t) < T || (this.scrollContainer[e] = t);
    }, this.scrollToIndex = (t) => {
      this.animationInProgress = !1, this.rowHeightService && this.scrollTo(this.rowHeightService.offset(t));
    }, this.animateToIndex = (t) => {
      if (!this.rowHeightService || !window)
        return;
      window.cancelAnimationFrame(this.cancelAnimation);
      const e = this.rowHeightService.offset(t), r = this.getContainerScrollDirection(e);
      let { start: n, end: l } = this.scrollRange(e, r);
      if (n === l)
        return;
      const f = this.scrollStep(n, l), h = x[r](f), p = A[r](l), u = I[r](h(l)), d = (v) => {
        this.animationInProgress = !0;
        const S = h(v);
        this.scrollTo(p(S)), u(S) ? this.cancelAnimation = window.requestAnimationFrame(() => {
          d(S);
        }) : this.animationInProgress = !1;
      };
      this.cancelAnimation = window.requestAnimationFrame(() => {
        d(n);
      });
    }, this.scrollToBottom = () => {
      this.rowHeightService && this.scrollTo(this.rowHeightService.totalHeight() + this.props.bottomOffset);
    }, this.scrollStep = (t, e) => {
      const r = this.props.scrollDuration || c.defaultProps.scrollDuration;
      return Math.abs(e - t) / (r / P);
    }, this.scrollRange = (t, e) => {
      const r = this.containerScrollPosition;
      if (parseInt(`${t}`, 10) === parseInt(`${r}`, 10))
        return { start: t, end: t };
      const n = this.containerMaxScroll(), l = e === 0 ? 1 : -1, f = H(r, t, this.props.maxScrollDifference || 0), h = Math.min(t, n);
      return { start: Math.min(Math.max(h + l * f, 0), n), end: h };
    }, this.containerMaxScroll = () => this.containerScrollSize - this.containerOffsetSize, this.getContainerScrollDirection = (t) => t < this.containerScrollPosition ? 0 : 1, this.initServices = (t = this.props) => {
      const e = this.direction === "vertical" ? t.itemHeight : t.itemWidth;
      e !== void 0 && (this.rowHeightService = new g(t.total, e, 0), this.scrollerService.create(
        this.rowHeightService,
        t.skip,
        t.take,
        t.total,
        t.topOffset,
        this.scrollOffsetSize,
        this.direction
      ));
    }, this.getContainerProperty = (t) => this.scrollContainer ? this.scrollContainer[t] : 0, this.handleScroll = (t) => {
      if (!this.scrollContainer || !this.rowHeightService)
        return;
      const e = t.target;
      this.scrollerService.onScroll({
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop,
        offsetHeight: e.offsetHeight,
        offsetWidth: e.offsetWidth
      });
      const r = this.rowHeightService.index(this.containerScrollPosition - this.props.topOffset), { onScrollAction: n } = this.props, l = {
        index: r,
        target: e,
        scrollAction: this.scrollAction,
        pageAction: this.pageAction,
        animationInProgress: this.animationInProgress
      };
      this.props.onScroll && this.props.onScroll.call(void 0, t), n && n.call(void 0, l), this.scrollAction = void 0, this.pageAction = void 0;
    }, this.handleScrollAction = (t) => {
      this.scrollAction = t;
    }, this.handlePageAction = (t) => {
      this.pageAction = t;
    }, this.scrollerService = new w(
      this.handleScrollAction,
      this.handlePageAction
    ), this.restrictScroll = Number.parseFloat(index_js_.version) > 17;
  }
  get element() {
    return this.scrollContainer;
  }
  get containerOffsetSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
  }
  get containerScrollSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
  }
  get containerScrollPosition() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
  }
  get direction() {
    return this.props.direction !== void 0 ? this.props.direction : c.defaultProps.direction;
  }
  get scrollOffsetSize() {
    return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : c.defaultProps.scrollOffsetSize;
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(i) {
    return this.rowHeightService ? this.rowHeightService.index(i) : 0;
  }
  itemOffset(i) {
    return this.rowHeightService ? this.rowHeightService.offset(i) : 0;
  }
  isIndexVisible(i) {
    if (!this.rowHeightService)
      return !1;
    const t = this.containerScrollPosition, e = t + this.containerOffsetSize, r = this.rowHeightService.offset(i), n = r + this.rowHeightService.height(i);
    return r >= t && n <= e;
  }
  isListScrolled(i) {
    return this.rowHeightService ? this.containerScrollPosition !== this.rowHeightService.offset(i) : !1;
  }
  componentDidMount() {
    const { onMount: i } = this.props;
    i && i.call(void 0, this);
  }
  render() {
    (this.lastTotal !== this.props.total || this.lastDirection !== this.direction || this.lastTake !== this.props.take) && (this.initServices(), this.lastTotal = this.props.total, this.lastDirection = this.direction, this.lastTake = this.props.take);
    const i = `${(this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + this.props.bottomOffset}`, t = this.direction === "vertical" ? { height: `${i}px` } : { width: `${i}px` }, e = (0,index_mjs_.classNames)(
      "k-content k-scrollable",
      {
        "k-scrollable-horizontal": this.direction === "horizontal"
      },
      this.props.className
    ), r = (0,index_mjs_.classNames)(
      "k-scrollable-placeholder",
      {
        "k-scrollable-horizontal-placeholder": this.direction === "horizontal"
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (n) => {
          this.scrollContainer = n;
        },
        onScroll: this.handleScroll,
        className: e,
        tabIndex: this.props.tabIndex,
        role: this.props.role
      },
      this.props.children,
      /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          style: t,
          className: r
        }
      )
    );
  }
};
c.propTypes = {
  bottomOffset: prop_types_index_js_.number.isRequired,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf(["horizontal", "vertical"]),
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
}, c.defaultProps = {
  direction: "vertical",
  forceScroll: !1,
  scrollOffsetSize: 0,
  maxScrollDifference: 100,
  scrollDuration: 100
};
let Virtualization_g = c;


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/week-in-year.js + 3 modules
var week_in_year = __webpack_require__(45602);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarCell.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const C = (o, e) => {
  const s = Object.getOwnPropertyNames(o), n = Object.getOwnPropertyNames(e);
  if (s.length !== n.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    const a = s[t];
    if (o[a] !== e[a])
      return !1;
  }
  return !0;
};
class CalendarCell_w extends index_js_.Component {
  constructor() {
    super(...arguments), this.handleClick = (e) => {
      const { onClick: s, value: n } = this.props;
      s && s.call(void 0, n, e);
    }, this.handleMouseEnter = () => {
      const { onMouseEnter: e, value: s } = this.props;
      e && e.call(void 0, s);
    }, this.handleMouseLeave = () => {
      const { onMouseLeave: e, value: s } = this.props;
      e && e.call(void 0, s);
    };
  }
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the React.PureComponent.
  /**
   * @hidden
   */
  shouldComponentUpdate(e) {
    const { value: s, ...n } = this.props, { value: t, ...a } = e;
    return !((!(s && t) || s.getTime() === t.getTime()) && C(n, a));
  }
  /* eslint-disable max-len */
  /**
   * @return
   * Returns a `<td />` element with a `<span className="k-link" />` inside to apply the styles. The text inside is the [`formattedValue`]({% slug api_dateinputs_calendarcellprops %}#toc-formattedvalue) of the `cell`.
   */
  render() {
    const {
      className: e,
      formattedValue: s,
      isWeekend: n,
      isFocused: t,
      isInRange: a,
      isSelected: c,
      isRangeStart: r,
      isRangeMid: d,
      isRangeEnd: i,
      isRangeSplitStart: p,
      isRangeSplitEnd: u,
      isToday: h,
      isDisabled: g,
      view: M,
      value: R,
      ...m
    } = this.props, v = this.props.activeRangeEnd === "end" && i, k = this.props.activeRangeEnd === "start" && r, E = (0,index_mjs_.classNames)(
      "k-calendar-td",
      {
        "k-range-end": i,
        "k-range-mid": d,
        "k-range-split-end": u,
        "k-range-split-start": p,
        "k-range-start": r,
        "k-active": k || v,
        "k-state-pending-focus": t,
        "k-selected": c || r || i,
        "k-today": h,
        "k-weekend": n,
        "k-disabled": g
      },
      e
    );
    return /* @__PURE__ */ index_js_.createElement(
      "td",
      {
        ...m,
        className: E,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-link" }, this.props.children)
    );
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarWeekCell.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


class CalendarWeekCell_o extends index_js_.Component {
  /**
   * @return
   * Returns a `<td />` element with the [`value`]({% slug api_dateinputs_calendarweekcellprops %}#toc-value) as a child.
   */
  render() {
    const { className: s, firstDate: l, ...t } = this.props;
    return /* @__PURE__ */ index_js_.createElement("td", { className: (0,index_mjs_.classNames)("k-calendar-td", s), ...t }, this.props.children);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/models/CalendarViewEnum.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
var CalendarViewEnum_c = /* @__PURE__ */ ((t) => (t[t.month = 0] = "month", t[t.year = 1] = "year", t[t.decade = 2] = "decade", t[t.century = 3] = "century", t))(CalendarViewEnum_c || {});


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/models/SelectionRange.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const SelectionRange_l = { start: null, end: null };


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


function W(t) {
  const e = (r, o, s, ...u) => o[s] === null ? null : (r ? t.isRequired : t)(o, s, ...u), n = e.bind(null, !1);
  return n.isRequired = e.bind(null, !0), n;
}
const utils_d = (t, e, n) => e === void 0 || n === void 0 || e <= t && t <= n ? t : t < e ? e : n, k = new Date(1980, 0, 1), utils_H = new Date(1900, 0, 1), L = new Date(2099, 11, 31), q = new Date(1980, 0, 1), G = new Date(1980, 0, 1, 23, 59, 59), O = (t, e) => {
  const n = (0,clone_date/* cloneDate */.a)(t);
  return n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}, X = () => (0,get_date/* getDate */.p)(/* @__PURE__ */ new Date()), j = (t, e, n) => !t || !(e && e > t || n && n < t), utils_P = (t, e, n) => t === null || !(e && (0,get_date/* getDate */.p)(e) > (0,get_date/* getDate */.p)(t) || n && (0,get_date/* getDate */.p)(n) < (0,get_date/* getDate */.p)(t)), utils_Y = (t, e) => {
  const { start: n, end: r } = e || SelectionRange_l;
  return !n || !r ? !1 : n < t && t < r;
}, z = (t, e, n = 1) => {
  const r = [];
  for (let o = t; o < e; o = o + n)
    r.push(o);
  return r;
}, B = (t, e, n) => e.getTime() <= t.getTime() && t.getTime() <= n.getTime(), J = (t, e) => t.slice(e).concat(t.slice(0, e)), K = (t, e, n) => t && (e && t < e ? (0,clone_date/* cloneDate */.a)(e) : n && t > n ? (0,clone_date/* cloneDate */.a)(n) : t), Q = (t) => (e, n = "", r = {}) => {
  const o = document.createElement(t);
  return o.className = n, Object.keys(r).map((s) => o.style[s] = r[s]), typeof e == "string" ? o.innerHTML = e || "" : (e || []).forEach((s) => s && o.appendChild(s)), o;
};
function U(t, e, n = {}) {
  let r, o;
  n.maxWait;
  let s, u, l;
  const g = window;
  let M = !1, h = !1;
  const D = !e && e !== 0 && typeof g.requestAnimationFrame == "function";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  e = +e || 0;
  function I(i) {
    const c = r, m = o;
    return r = o = void 0, s = t.apply(m, c), s;
  }
  function T(i, c) {
    return D ? (g.cancelAnimationFrame(u), g.requestAnimationFrame(i)) : setTimeout(i, c);
  }
  function R(i) {
    if (D)
      return g.cancelAnimationFrame(i);
    clearTimeout(i);
  }
  function b(i) {
    return u = T(E, e), M ? I() : s;
  }
  function N(i) {
    const c = i - l;
    return e - c;
  }
  function p(i) {
    const c = i - l;
    return l === void 0 || c >= e || c < 0 || h;
  }
  function E() {
    const i = Date.now();
    if (p(i))
      return A();
    u = T(E, N(i));
  }
  function A(i) {
    return u = void 0, r ? I() : (r = o = void 0, s);
  }
  function w() {
    u !== void 0 && R(u), r = l = o = u = void 0;
  }
  function y() {
    return u === void 0 ? s : A();
  }
  function C() {
    return u !== void 0;
  }
  function a(...i) {
    const c = Date.now(), m = p(c);
    return r = i, o = this, l = c, m && u === void 0 ? b() : (u === void 0 && (u = T(E, e)), s);
  }
  return a.cancel = w, a.flush = y, a.pending = C, a;
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/WeekNamesService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

class r {
  constructor(e) {
    this.intl = e;
  }
  getWeekNames(e = !1) {
    const t = J(
      this.intl.dateFormatNames({ nameType: "short", type: "days" }),
      this.intl.firstDay()
    );
    return e ? [""].concat(t) : t;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/View.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";









const View_k = (f) => /* @__PURE__ */ index_js_.createElement("td", { key: f, className: "k-calendar-td" }, " "), View_c = class c extends index_js_.Component {
  constructor() {
    super(...arguments), this.intl = null, this.weekService = null, this.buildWeekNumber = (t, e) => {
      if (!this.firstDate(t))
        return View_k(`week-cell-${e}`);
      const n = this.firstDate(t), a = this.getWeekNumber(n), o = `kendo-react-calendar-week-cell-${a}`, l = {
        className: "k-alt",
        value: a,
        firstDate: n
      };
      return this.props.weekCell ? /* @__PURE__ */ index_js_.createElement(this.props.weekCell, { ...l, key: o }, a) : /* @__PURE__ */ index_js_.createElement(CalendarWeekCell_o, { ...l, key: o }, a);
    }, this.buildRow = (t) => t.map((e, i) => {
      if (!e)
        return View_k(i);
      const n = { "aria-selected": e.isSelected }, a = `kendo-react-calendar-cell-${e.value.getTime()}`, o = {
        ...n,
        ...e,
        isDisabled: !e.isInRange,
        view: this.props.activeView,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      return this.props.cell ? /* @__PURE__ */ index_js_.createElement(this.props.cell, { ...o, key: a }, e.formattedValue) : /* @__PURE__ */ index_js_.createElement(CalendarCell_w, { ...o, key: a }, e.formattedValue);
    }), this.firstDate = (t) => {
      const e = this.firstWeekDateContext(t);
      return e ? e.value : null;
    }, this.firstWeekDateContext = (t) => {
      if (!this.weekNumber)
        return null;
      let e = 0, i = t[e];
      for (; !i && e < t.length; )
        i = t[++e];
      return i;
    }, this.handleClick = (t, e) => {
      const { onChange: i } = this.props;
      if (i && e) {
        const n = {
          value: (0,clone_date/* cloneDate */.a)(t),
          target: this,
          nativeEvent: e && e.nativeEvent,
          syntheticEvent: e
        };
        i.call(void 0, n);
      }
    }, this.handleMouseEnter = (t) => {
      const { onCellEnter: e } = this.props;
      e && e.call(void 0, (0,clone_date/* cloneDate */.a)(t));
    }, this.handleMouseLeave = (t) => {
      const { onCellLeave: e } = this.props;
      e && e.call(void 0, (0,clone_date/* cloneDate */.a)(t));
    };
  }
  get min() {
    return this.props.min;
  }
  get max() {
    return this.props.max;
  }
  get isHorizontal() {
    return this.props.direction === "horizontal";
  }
  get isMonthView() {
    return this.props.activeView === CalendarViewEnum_c.month;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum_c.month);
  }
  get selectedDate() {
    return this.props.selectedDate !== void 0 ? this.props.selectedDate : c.defaultProps.selectedDate;
  }
  render() {
    this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.weekService = new r(this.intl);
    const t = this.weekService.getWeekNames(this.weekNumber), e = this.props.service.rowLength(this.weekNumber), i = this.props.service.title(this.props.viewDate), n = X(), a = O(this.props.viewDate, n), o = this.props.service.data({
      cellUID: this.props.cellUID,
      min: this.min,
      max: this.max,
      focusedDate: this.props.focusedDate,
      isActiveView: !this.props.bus.canMoveDown(this.props.activeView),
      selectedDate: this.selectedDate,
      selectionRange: this.props.selectionRange,
      viewDate: a
    });
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, this.isMonthView && this.isHorizontal && /* @__PURE__ */ index_js_.createElement(
      "thead",
      {
        role: "rowgroup",
        className: "k-calendar-thead"
      },
      /* @__PURE__ */ index_js_.createElement("tr", { role: "row", className: "k-calendar-tr" }, t.map((l, h) => /* @__PURE__ */ index_js_.createElement("th", { key: h, className: "k-calendar-th" }, l)))
    ), /* @__PURE__ */ index_js_.createElement(
      "tbody",
      {
        role: "rowgroup",
        className: "k-calendar-tbody"
      },
      !this.isHorizontal && /* @__PURE__ */ index_js_.createElement("tr", { role: "presentation", className: "k-calendar-tr" }, /* @__PURE__ */ index_js_.createElement(
        "th",
        {
          scope: "col",
          colSpan: e,
          className: "k-calendar-caption"
        },
        i
      )),
      o.map((l, h) => /* @__PURE__ */ index_js_.createElement("tr", { role: "row", className: "k-calendar-tr", key: h }, this.weekNumber && this.buildWeekNumber(l, h), this.buildRow(l)))
    ));
  }
  getWeekNumber(t) {
    return !this.weekNumber || !this.intl ? null : (0,week_in_year/* weekInYear */.H)(t, this.intl.firstDay());
  }
};
View_c.propTypes = {
  activeRangeEnd: prop_types_index_js_.oneOf(["start", "end", null]),
  activeView: prop_types_index_js_.number.isRequired,
  cellUID: prop_types_index_js_.string.isRequired,
  direction: prop_types_index_js_.oneOf(["horizontal", "vertical"]),
  focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  onChange: prop_types_index_js_.func,
  selectedDate: prop_types_index_js_.oneOfType(
    [prop_types_index_js_.instanceOf(Date), prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date))]
  ),
  showWeekNumbers: prop_types_index_js_.bool,
  viewDate: prop_types_index_js_.instanceOf(Date).isRequired
}, View_c.defaultProps = {
  direction: "vertical",
  selectedDate: X(),
  showWeekNumbers: !1
};
let m = View_c;
(0,kendo_react_intl_index_mjs_.registerForIntl)(m);


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_01767e4c18f1016dd2ee822e1e7c567a/node_modules/@progress/kendo-react-buttons/index.mjs)
var kendo_react_buttons_index_mjs_ = __webpack_require__(14073);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarHeaderTitle.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


class s extends index_js_.PureComponent {
  /**
   * @return
   * Returns a `<span />` element with the [`value`]({% slug api_dateinputs_calendarheadertitleprops %}#toc-value) of the title as a child.
   */
  render() {
    const { view: n, ...t } = this.props;
    return /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.Button, { type: "button", fillMode: "flat", ...t }, this.props.children);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/Header.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const t = class t extends index_js_.Component {
  constructor() {
    super(...arguments), this.getTitle = () => {
      if (!this.props.currentDate)
        return "";
      const e = this.rangeLength - 1, a = this.props.service.title(this.props.currentDate), r = this.props.service.addToDate(this.props.currentDate, e);
      return e < 1 || !this.props.service.isInRange(r, this.min, this.max) ? a : `${a} - ${this.props.service.title(r)}`;
    }, this.handleTitleClick = (e) => {
      this.canMoveUp && this.props.bus.moveUp(this.props.activeView, e);
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : t.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : t.defaultProps.max;
  }
  get rangeLength() {
    return this.props.rangeLength !== void 0 ? this.props.rangeLength : t.defaultProps.rangeLength;
  }
  get canMoveUp() {
    return this.props.bus.canMoveUp(this.props.activeView);
  }
  render() {
    const e = this.getTitle(), a = (0,index_mjs_.classNames)(
      "k-calendar-title"
    ), r = {
      children: e,
      value: e,
      view: this.props.activeView,
      className: a,
      onClick: this.handleTitleClick,
      disabled: !this.canMoveUp
    }, o = this.props.headerTitle ? /* @__PURE__ */ index_js_.createElement(this.props.headerTitle, { ...r }, e) : /* @__PURE__ */ index_js_.createElement(s, { ...r }, e);
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: (0,index_mjs_.classNames)("k-calendar-header", {
          "k-vstack": this.props.verticalView,
          "k-hstack": !this.props.verticalView
        })
      },
      o,
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-spacer" }),
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-calendar-nav k-hstack" }, this.props.commands)
    );
  }
};
t.propTypes = {
  activeView: prop_types_index_js_.number.isRequired,
  currentDate: prop_types_index_js_.instanceOf(Date).isRequired,
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  rangeLength: prop_types_index_js_.number
}, t.defaultProps = {
  rangeLength: 1,
  min: utils_H,
  max: L
};
let Header_n = t;
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Header_n);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/messages/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const messages_e = "multiviewcalendar.prevView", messages_t = "multiviewcalendar.nextView", messages_a = "dateinput.increment", messages_c = "dateinput.decrement", n = "calendar.today", messages_i = "datepicker.toggleCalendar", messages_r = "daterangepicker.swapStartEnd", messages_o = "daterangepicker.start", l = "daterangepicker.end", messages_s = "daterangepicker.separator", messages_d = "datetimepicker.toggleDateTimeSelector", messages_g = "timepicker.now", messages_m = "timepicker.selectNow", messages_p = "timepicker.cancel", messages_k = "timepicker.set", messages_w = "timepicker.toggleTimeSelector", S = "timepicker.toggleClock", messages_T = "datetimepicker.date", v = "datetimepicker.time", u = "datetimepicker.cancel", messages_C = "datetimepicker.set", N = "daterangepicker.cancel", messages_P = "daterangepicker.set", messages_V = {
  [n]: "TODAY",
  [messages_g]: "NOW",
  [messages_k]: "Set",
  [messages_p]: "Cancel",
  [messages_T]: "Date",
  [v]: "Time",
  [u]: "Cancel",
  [messages_C]: "Set",
  [N]: "Cancel",
  [messages_P]: "Set",
  [messages_o]: "Start",
  [l]: "End",
  [messages_s]: " ",
  [messages_m]: "Select Now",
  [messages_w]: "Toggle TimeSelector",
  [S]: "Toggle Clock",
  [messages_a]: "Increase value",
  [messages_c]: "Decrease value",
  [messages_i]: "Toggle calendar",
  [messages_e]: "Navigate to previous view",
  [messages_t]: "Navigate to next view",
  [messages_r]: "Swap start and end values",
  [messages_d]: "Toggle date-time selector"
};


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/TodayCommand.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";








const TodayCommand_t = class t extends index_js_.Component {
  constructor() {
    super(...arguments), this.localization = null, this.handleClick = (i) => {
      if (this.todayIsInRange && this.props.onClick) {
        const s = {
          syntheticEvent: i,
          nativeEvent: i.nativeEvent,
          value: K(X(), this.min, this.max),
          target: this,
          isTodayClick: !0
        };
        this.props.onClick.call(void 0, s);
      }
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : t.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : t.defaultProps.max;
  }
  get todayIsInRange() {
    return j(X(), (0,get_date/* getDate */.p)(this.min), (0,get_date/* getDate */.p)(this.max));
  }
  render() {
    this.localization = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
    const i = this.localization.toLanguageString(n, messages_V[n]), s = (0,index_mjs_.classNames)(
      "k-calendar-nav-today",
      {
        "k-disabled": this.props.disabled
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        className: s,
        onClick: this.handleClick,
        tabIndex: this.props.tabIndex,
        fillMode: "flat"
      },
      i
    );
  }
};
TodayCommand_t.propTypes = {
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  onClick: prop_types_index_js_.func,
  disabled: prop_types_index_js_.bool
}, TodayCommand_t.defaultProps = {
  min: utils_H,
  max: L
};
let TodayCommand_a = TodayCommand_t;
(0,kendo_react_intl_index_mjs_.registerForLocalization)(TodayCommand_a);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/ViewList.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";











const ViewList_H = 5, h = class h extends index_js_.Component {
  constructor(r) {
    super(r), this.virtualization = null, this.calendarView = null, this.table = null, this.intl = null, this.bottomOffset = 0, this.viewOffset = 0, this.viewHeight = 0, this._element = null, this.isActive = !1, this.animateToIndex = !0, this.shouldScroll = !1, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const e = this._element.querySelector("td.k-focus"), t = this._element.querySelector(".k-state-pending-focus");
      e && e[0] && e[0].classList.remove("k-focus"), t && t.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const e = this._element.querySelector("td.k-focus");
      e && e.classList.remove("k-focus"), this.isActive = !1;
    }, this.handleVirtualizationMount = (e) => {
      if (this.virtualization = e, this.virtualization && this.table) {
        this.table.style.transform = `translateY(${this.viewOffset}px)`;
        const t = K(this.props.focusedDate, this.props.min, this.props.max), i = this.props.service.skip(t, this.props.min);
        this.virtualization.scrollToIndex(i);
      }
    }, this.buildMonthView = (e, t) => /* @__PURE__ */ index_js_.createElement(
      "table",
      {
        key: "calendar-view-list-weekdays",
        className: "k-calendar-table k-calendar-weekdays",
        role: "grid",
        tabIndex: this.props.tabIndex
      },
      /* @__PURE__ */ index_js_.createElement("colgroup", null, e.map((i, a) => /* @__PURE__ */ index_js_.createElement("col", { key: a }))),
      /* @__PURE__ */ index_js_.createElement("thead", { className: "k-calendar-thead" }, /* @__PURE__ */ index_js_.createElement("tr", { className: "k-calendar-tr" }, t.map((i, a) => /* @__PURE__ */ index_js_.createElement("th", { key: a, className: "k-calendar-th" }, i))))
    ), this.buildDates = (e, t) => {
      const i = this.props.cellUID;
      return /* @__PURE__ */ index_js_.createElement(
        "table",
        {
          className: "k-calendar-table",
          ref: (a) => this.table = a,
          role: "grid",
          tabIndex: this.props.tabIndex,
          "aria-activedescendant": i + this.props.focusedDate.getTime()
        },
        /* @__PURE__ */ index_js_.createElement("colgroup", null, e.map((a, n) => /* @__PURE__ */ index_js_.createElement("col", { key: n }))),
        t.map((a) => /* @__PURE__ */ index_js_.createElement(
          m,
          {
            ref: (n) => {
              this.calendarView || (this.calendarView = n);
            },
            key: a.getTime(),
            activeView: this.props.activeView,
            viewDate: a,
            min: this.props.min,
            max: this.props.max,
            cellUID: i,
            focusedDate: this.props.focusedDate,
            cell: this.props.cell,
            selectedDate: this.props.value,
            showWeekNumbers: this.weekNumber,
            onChange: this.handleDateChange,
            bus: this.props.bus,
            service: this.props.service,
            weekCell: this.props.weekCell
          }
        ))
      );
    }, this.calculateHeights = () => {
      if (!this.props.dom)
        return;
      const e = this.props.activeView === CalendarViewEnum_c.month ? this.props.dom.scrollableContentHeight : this.props.dom.scrollableYearContentHeight;
      this.bottomOffset = e - this.props.dom.viewHeight(this.props.activeView), this.viewOffset = -1 * this.props.dom.headerHeight, this.viewHeight = this.props.dom.viewHeight(this.props.activeView) || 1;
    }, this.getTake = (e, t) => Math.min(t - e, this.take), this.handleScrollAction = ({ index: e, scrollAction: t, pageAction: i }) => {
      const a = i ? i.skip : this.state.skip;
      if ((this.state.index !== e || this.state.skip !== a) && this.setState({ index: e, skip: a }), this.table && t) {
        const n = `translateY(${t.offset}px)`;
        this.table.style.transform = n;
      }
    }, this.handleTodayClick = (e) => {
      this.shouldScroll = !0, this.handleDateChange.call(void 0, e, !0);
    }, this.handleDateChange = (e, t = !1) => {
      const { onChange: i } = this.props;
      if (i) {
        const a = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: (0,clone_date/* cloneDate */.a)(e.value),
          target: this,
          isTodayClick: t
        };
        i.call(void 0, a);
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.state = {
      skip: this.props.service.skip(this.props.focusedDate, this.props.min),
      index: this.props.service.skip(this.props.focusedDate, this.props.min)
    };
  }
  get element() {
    return this._element;
  }
  get weekNames() {
    this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
    const r = J(
      this.intl.dateFormatNames({ nameType: "short", type: "days" }),
      this.intl.firstDay()
    );
    return this.weekNumber ? [""].concat(r) : r;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum_c.month);
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : h.defaultProps.take;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get todayIsInRange() {
    return j(X(), (0,get_date/* getDate */.p)(this.props.min), (0,get_date/* getDate */.p)(this.props.max));
  }
  componentDidUpdate(r, e) {
    this.shouldScroll = !1, this.indexToScroll !== void 0 && this.virtualization && this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll), this.isActive && this.focusActiveDate(), this.lastView = this.props.activeView, this.indexToScroll = void 0;
  }
  render() {
    this.calculateHeights();
    const r = this.lastView !== this.props.activeView, e = K(this.props.focusedDate, this.props.min, this.props.max), t = r ? this.props.service.skip(e, this.props.min) : this.state.skip, i = this.props.service.total(this.props.min, this.props.max), a = this.getTake(t, i), n = this.props.service.addToDate(this.props.min, t), f = this.props.service.addToDate(this.props.min, this.state.index), p = new Array(this.props.service.rowLength(this.weekNumber)).fill(""), m = this.props.activeView !== this.lastView;
    this.animateToIndex = !m, (m || !(0,is_equal_date/* isEqualDate */.$)(this.lastFocus, e) || this.shouldScroll || !this.props.shouldScroll || this.props.shouldScroll()) && (this.indexToScroll = this.props.service.skip(e, this.props.min)), this.lastFocus = e;
    const v = (0,index_mjs_.classNames)(
      "k-calendar-view k-vstack",
      {
        "k-calendar-monthview": this.props.activeView === CalendarViewEnum_c.month,
        "k-calendar-yearview": this.props.activeView === CalendarViewEnum_c.year,
        "k-calendar-decadeview": this.props.activeView === CalendarViewEnum_c.decade,
        "k-calendar-centuryview": this.props.activeView === CalendarViewEnum_c.century
      }
    ), w = this.buildDates(p, this.props.service.datesList(n, a)), k = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
      Header_n,
      {
        key: "calendar-view-list-header",
        currentDate: f,
        min: this.props.min,
        max: this.props.max,
        activeView: this.props.activeView,
        bus: this.props.bus,
        service: this.props.service,
        headerTitle: this.props.headerTitle,
        commands: /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
          TodayCommand_a,
          {
            min: this.props.min,
            max: this.props.max,
            onClick: this.handleTodayClick,
            disabled: !this.todayIsInRange,
            tabIndex: this.props.tabIndex
          }
        ))
      }
    ), this.props.activeView === CalendarViewEnum_c.month && this.buildMonthView(p, this.weekNames), /* @__PURE__ */ index_js_.createElement(
      Virtualization_g,
      {
        key: "calendar-view-list-content",
        skip: t,
        take: this.take,
        total: i,
        itemHeight: this.viewHeight,
        topOffset: this.viewOffset,
        bottomOffset: this.bottomOffset,
        scrollOffsetSize: this.viewOffset,
        maxScrollDifference: this.viewHeight,
        onScroll: this.props.onScroll,
        onScrollAction: this.handleScrollAction,
        onMount: this.handleVirtualizationMount,
        children: w,
        tabIndex: this.props.tabIndex
      }
    ));
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (b) => {
          this._element = b;
        },
        className: v
      },
      this.props.dom.didCalculate ? k : null
    );
  }
};
h.propTypes = {
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
}, h.defaultProps = {
  take: ViewList_H,
  showWeekNumbers: !1,
  smoothScroll: !0
};
let ViewList_c = h;
(0,kendo_react_intl_index_mjs_.registerForIntl)(ViewList_c);


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal.js
var is_equal = __webpack_require__(43462);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/CalendarNavigationItem.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


class CalendarNavigationItem_o extends index_js_.Component {
  constructor() {
    super(...arguments), this.handleClick = (e) => {
      const { onClick: t, value: r } = this.props;
      t && t.call(void 0, r, e);
    };
  }
  /**
   * @return
   * Returns a `<li />` element with a `<span />` inside. The text inside represents the [`value`]({% slug api_dateinputs_calendarnavigationitemprops %}#toc-value) of the `navigationItem`.
   */
  render() {
    const { isRangeStart: e, value: t, text: r, ...s } = this.props;
    return /* @__PURE__ */ index_js_.createElement("li", { ...s, onClick: this.handleClick }, /* @__PURE__ */ index_js_.createElement("span", { className: (0,index_mjs_.classNames)({ "k-calendar-navigation-marker": e }) }, this.props.children));
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/Navigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const Navigation_k = 30, p = class p extends index_js_.Component {
  constructor(r) {
    super(r), this.virtualization = null, this.list = null, this.itemHeight = 0, this.topOffset = 0, this.maxViewHeight = 0, this.bottomOffset = 0, this.handleVirtualizationMount = (t) => {
      if (this.virtualization = t, this.virtualization && this.list) {
        this.list.style.transform = `translateY(${this.topOffset}px)`;
        const i = K(this.props.focusedDate, this.props.min, this.props.max), s = this.props.service.skip(i, this.props.min);
        this.virtualization.scrollToIndex(s);
      }
    }, this.buildNavigationItem = (t) => {
      const i = this.props.service.navigationTitle(t), s = this.props.service.isRangeStart(t), o = `kendo-react-calendar-nav-item-${t.getTime()}`, l = {
        text: i,
        value: t,
        isRangeStart: s,
        view: this.props.activeView,
        onClick: this.handleDateChange
      };
      return this.props.navigationItem ? /* @__PURE__ */ index_js_.createElement(this.props.navigationItem, { ...l, key: o }, i) : /* @__PURE__ */ index_js_.createElement(CalendarNavigationItem_o, { ...l, key: o }, i);
    }, this.calculateHeights = () => {
      const t = this.props.dom.calendarHeight;
      this.itemHeight = this.props.dom.navigationItemHeight || 1, this.maxViewHeight = this.props.dom.monthViewHeight, this.topOffset = (t - this.itemHeight) / 2, this.bottomOffset = t - this.itemHeight;
    }, this.handleDateChange = (t, i) => {
      const { onChange: s } = this.props;
      if (s && i) {
        const o = {
          value: (0,clone_date/* cloneDate */.a)(t),
          target: this,
          nativeEvent: i && i.nativeEvent,
          syntheticEvent: i
        };
        s.call(void 0, o);
      }
    }, this.handleScrollAction = ({ scrollAction: t, pageAction: i }) => {
      const s = i ? i.skip : this.state.skip;
      if (this.state.skip !== s && this.setState({ skip: s }), this.list && t) {
        const o = `translateY(${t.offset}px)`;
        this.list.style.transform = o;
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate;
    const e = this.props.service.skip(this.props.focusedDate, this.props.min), h = this.props.service.total(this.props.min, this.props.max);
    this.state = {
      skip: e - this.getTake(e, h) > 0 ? e : 0
    };
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : p.defaultProps.take;
  }
  /**
   * @hidden
   */
  componentDidUpdate(r, e) {
    this.indexToScroll !== void 0 && this.virtualization && this.virtualization.scrollToIndex(this.indexToScroll), this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.indexToScroll = void 0;
  }
  render() {
    this.calculateHeights();
    const r = this.lastView !== this.props.activeView, e = K(this.props.focusedDate, this.props.min, this.props.max), h = r ? this.props.service.skip(e, this.props.min) : this.state.skip, t = this.props.service.total(this.props.min, this.props.max), i = this.getTake(h, t), s = this.props.service.addToDate(this.props.min, h), o = this.props.service.datesList(s, i);
    (this.props.activeView !== this.lastView || !(0,is_equal/* isEqual */.n)(e, this.lastFocus)) && (this.indexToScroll = this.props.service.skip(e, this.props.min));
    const l = /* @__PURE__ */ index_js_.createElement(
      Virtualization_g,
      {
        skip: h,
        take: this.take,
        total: t,
        itemHeight: this.itemHeight,
        topOffset: this.topOffset,
        bottomOffset: this.bottomOffset,
        onScroll: this.props.onScroll,
        maxScrollDifference: this.maxViewHeight,
        onScrollAction: this.handleScrollAction,
        onMount: this.handleVirtualizationMount,
        tabIndex: this.props.tabIndex
      },
      /* @__PURE__ */ index_js_.createElement("ul", { ref: (c) => {
        this.list = c;
      }, className: "k-reset" }, o.map((c) => this.buildNavigationItem(c)))
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-calendar-navigation"
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-calendar-navigation-highlight" }),
      this.props.dom.didCalculate ? l : null
    );
  }
  getTake(r, e) {
    return Math.min(e - r, this.take);
  }
};
p.propTypes = {
  activeView: prop_types_index_js_.number.isRequired,
  focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  onChange: prop_types_index_js_.func,
  take: prop_types_index_js_.number,
  tabIndex: prop_types_index_js_.number
}, p.defaultProps = {
  take: Navigation_k
};
let Navigation_d = p;


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
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/models/NavigationAction.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
var NavigationAction_w = /* @__PURE__ */ ((e) => (e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.Up = 2] = "Up", e[e.Down = 3] = "Down", e[e.PrevView = 4] = "PrevView", e[e.NextView = 5] = "NextView", e[e.FirstInView = 6] = "FirstInView", e[e.LastInView = 7] = "LastInView", e[e.LowerView = 8] = "LowerView", e[e.UpperView = 9] = "UpperView", e))(NavigationAction_w || {});


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/CenturyViewService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const $ = [[]], CenturyViewService_T = 4, b = 3, CenturyViewService_G = {
  [NavigationAction_w.Left]: (i) => (0,add_decades/* addDecades */.B)(i, -1),
  [NavigationAction_w.Up]: (i) => (0,add_decades/* addDecades */.B)(i, -5),
  [NavigationAction_w.Right]: (i) => (0,add_decades/* addDecades */.B)(i, 1),
  [NavigationAction_w.Down]: (i) => (0,add_decades/* addDecades */.B)(i, 5),
  [NavigationAction_w.PrevView]: (i) => (0,add_centuries/* addCenturies */.U)(i, -1),
  [NavigationAction_w.NextView]: (i) => (0,add_centuries/* addCenturies */.U)(i, 1),
  [NavigationAction_w.FirstInView]: (i) => (0,first_decade_of_century/* firstDecadeOfCentury */.K)(i),
  [NavigationAction_w.LastInView]: (i) => (0,last_decade_of_century/* lastDecadeOfCentury */.a)(i)
};
class CenturyViewService_W {
  addToDate(e, t) {
    return (0,add_centuries/* addCenturies */.U)(e, t);
  }
  datesList(e, t) {
    return z(0, t).map((r) => (0,add_centuries/* addCenturies */.U)(e, r));
  }
  data(e) {
    const {
      cellUID: t,
      focusedDate: r,
      isActiveView: u,
      max: s,
      min: a,
      selectedDate: f,
      selectionRange: h = SelectionRange_l,
      viewDate: F
    } = e;
    if (!F)
      return $;
    const q = z(0, CenturyViewService_T), S = (0,first_decade_of_century/* firstDecadeOfCentury */.K)(F), R = (0,last_decade_of_century/* lastDecadeOfCentury */.a)(F), A = X();
    return z(0, b).map((V) => {
      const L = (0,add_decades/* addDecades */.B)(S, V * CenturyViewService_T);
      return q.map((C) => {
        const n = this.normalize((0,add_decades/* addDecades */.B)(L, C), a, s), y = this.isEqual(n, h.start), D = this.isEqual(n, h.end), Y = !y && !D && utils_Y(n, h), v = u && (Array.isArray(f) ? this.isSelectedFromArray(n, f, a, s) : j(f, a, s) && this.isEqual(n, f));
        return B(n, S, R) ? {
          formattedValue: this.value(n),
          id: `${t}${n.getTime()}`,
          isFocused: this.isEqual(n, r),
          isSelected: v,
          isWeekend: !1,
          isInRange: j(n, a, s),
          isRangeStart: y,
          isRangeMid: Y,
          isRangeEnd: D,
          isRangeSplitEnd: Y && this.isEqual(n, R),
          isRangeSplitStart: Y && this.isEqual(n, S),
          isToday: this.isEqual(n, A),
          title: this.cellTitle(n),
          value: n
        } : null;
      });
    });
  }
  isSelectedFromArray(e, t, r, u) {
    let s = !1;
    return t.forEach((a) => {
      j(e, r, u) && this.isEqual(e, a) && (s = !0);
    }), s;
  }
  isEqual(e, t) {
    return !e || !t ? !1 : (0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear() === (0,first_year_of_decade/* firstYearOfDecade */.p)(t).getFullYear();
  }
  isInArray(e, t) {
    if (!t.length)
      return !1;
    const r = e.getFullYear();
    return t[0].getFullYear() <= r && r <= t[t.length - 1].getFullYear() + 99;
  }
  isInRange(e, t, r) {
    const u = (0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear(), s = !t || (0,first_year_of_decade/* firstYearOfDecade */.p)(t).getFullYear() <= u, a = !r || u <= (0,first_year_of_decade/* firstYearOfDecade */.p)(r).getFullYear();
    return s && a;
  }
  isInSameView(e, t) {
    return (0,duration_in_centuries/* durationInCenturies */.q)(e, t) === 0;
  }
  isRangeStart(e) {
    return e.getFullYear() % 1e3 === 0;
  }
  move(e, t) {
    const r = CenturyViewService_G[t];
    return r ? r(e) : e;
  }
  cellTitle(e) {
    return (0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear().toString();
  }
  navigationTitle(e) {
    return e ? (0,first_decade_of_century/* firstDecadeOfCentury */.K)(e).getFullYear().toString() : "";
  }
  title(e) {
    return e ? `${(0,first_decade_of_century/* firstDecadeOfCentury */.K)(e).getFullYear()} - ${(0,last_decade_of_century/* lastDecadeOfCentury */.a)(e).getFullYear()}` : "";
  }
  rowLength(e) {
    return CenturyViewService_T;
  }
  skip(e, t) {
    return (0,duration_in_centuries/* durationInCenturies */.q)(t, e);
  }
  total(e, t) {
    return (0,duration_in_centuries/* durationInCenturies */.q)(e, t) + 1;
  }
  value(e) {
    return e ? (0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear().toString() : "";
  }
  viewDate(e, t, r = 1) {
    return (0,duration_in_centuries/* durationInCenturies */.q)(e, t) < r ? (0,add_centuries/* addCenturies */.U)(e, -1) : e;
  }
  normalize(e, t, r) {
    return e < t && this.isEqual(e, t) ? (0,clone_date/* cloneDate */.a)(t) : e > r && this.isEqual(e, r) ? (0,clone_date/* cloneDate */.a)(r) : e;
  }
}


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-years.js
var add_years = __webpack_require__(51899);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js
var last_year_of_decade = __webpack_require__(72604);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js
var duration_in_decades = __webpack_require__(39047);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/DecadeViewService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const DecadeViewService_$ = [[]], DecadeViewService_w = 4, DecadeViewService_b = 3, DecadeViewService_C = {
  [NavigationAction_w.Left]: (i) => (0,add_years/* addYears */.e)(i, -1),
  [NavigationAction_w.Up]: (i) => (0,add_years/* addYears */.e)(i, -5),
  [NavigationAction_w.Right]: (i) => (0,add_years/* addYears */.e)(i, 1),
  [NavigationAction_w.Down]: (i) => (0,add_years/* addYears */.e)(i, 5),
  [NavigationAction_w.PrevView]: (i) => (0,add_decades/* addDecades */.B)(i, -1),
  [NavigationAction_w.NextView]: (i) => (0,add_decades/* addDecades */.B)(i, 1),
  [NavigationAction_w.FirstInView]: (i) => (0,first_year_of_decade/* firstYearOfDecade */.p)(i),
  [NavigationAction_w.LastInView]: (i) => (0,last_year_of_decade/* lastYearOfDecade */.$)(i)
};
class DecadeViewService_U {
  addToDate(e, t) {
    return (0,add_decades/* addDecades */.B)(e, t);
  }
  datesList(e, t) {
    return z(0, t).map((r) => (0,add_decades/* addDecades */.B)(e, r));
  }
  data(e) {
    const {
      cellUID: t,
      focusedDate: r,
      isActiveView: o,
      max: n,
      min: a,
      selectedDate: g,
      selectionRange: E = SelectionRange_l,
      viewDate: h
    } = e;
    if (!h)
      return DecadeViewService_$;
    const q = z(0, DecadeViewService_w), Y = (0,first_year_of_decade/* firstYearOfDecade */.p)(h), D = (0,last_year_of_decade/* lastYearOfDecade */.$)(h), A = X();
    return z(0, DecadeViewService_b).map((y) => {
      const V = (0,add_years/* addYears */.e)(Y, y * DecadeViewService_w);
      return q.map((L) => {
        const s = this.normalize((0,add_years/* addYears */.e)(V, L), a, n), I = this.isEqual(s, E.start), R = this.isEqual(s, E.end), F = !I && !R && utils_Y(s, E), v = o && (Array.isArray(g) ? this.isSelectedFromArray(s, g, a, n) : j(g, a, n) && this.isEqual(s, g));
        return B(s, Y, D) ? {
          formattedValue: this.value(s),
          id: `${t}${s.getTime()}`,
          isFocused: this.isEqual(s, r),
          isSelected: v,
          isWeekend: !1,
          isInRange: j(s, a, n),
          isRangeStart: I,
          isRangeMid: F,
          isRangeEnd: R,
          isRangeSplitEnd: F && this.isEqual(s, D),
          isRangeSplitStart: F && this.isEqual(s, Y),
          isToday: this.isEqual(s, A),
          title: this.cellTitle(s),
          value: s
        } : null;
      });
    });
  }
  isSelectedFromArray(e, t, r, o) {
    let n = !1;
    return t.forEach((a) => {
      j(e, r, o) && this.isEqual(e, a) && (n = !0);
    }), n;
  }
  isEqual(e, t) {
    return !e || !t ? !1 : e.getFullYear() === t.getFullYear();
  }
  isInArray(e, t) {
    if (!t.length)
      return !1;
    const r = e.getFullYear();
    return t[0].getFullYear() <= r && r <= t[t.length - 1].getFullYear() + 9;
  }
  isInRange(e, t, r) {
    const o = e.getFullYear(), n = !t || t.getFullYear() <= o, a = !r || o <= r.getFullYear();
    return n && a;
  }
  isRangeStart(e) {
    return e.getFullYear() % 100 === 0;
  }
  isInSameView(e, t) {
    return (0,duration_in_decades/* durationInDecades */.p)(e, t) === 0;
  }
  move(e, t) {
    const r = DecadeViewService_C[t];
    return r ? r(e) : e;
  }
  cellTitle(e) {
    return e.getFullYear().toString();
  }
  navigationTitle(e) {
    return e ? (0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear().toString() : "";
  }
  title(e) {
    return e ? `${(0,first_year_of_decade/* firstYearOfDecade */.p)(e).getFullYear()} - ${(0,last_year_of_decade/* lastYearOfDecade */.$)(e).getFullYear()}` : "";
  }
  rowLength(e) {
    return DecadeViewService_w;
  }
  skip(e, t) {
    return (0,duration_in_decades/* durationInDecades */.p)(t, e);
  }
  total(e, t) {
    return (0,duration_in_decades/* durationInDecades */.p)(e, t) + 1;
  }
  value(e) {
    return e ? e.getFullYear().toString() : "";
  }
  viewDate(e, t, r = 1) {
    return (0,duration_in_decades/* durationInDecades */.p)(e, t) < r ? (0,add_decades/* addDecades */.B)(e, -1) : e;
  }
  normalize(e, t, r) {
    return e < t && this.isEqual(e, t) ? (0,clone_date/* cloneDate */.a)(t) : e > r && this.isEqual(e, r) ? (0,clone_date/* cloneDate */.a)(r) : e;
  }
}


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
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/MonthViewService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const MonthViewService_U = [[]], MonthViewService_S = 7, _ = 6, MonthViewService_$ = 6, MonthViewService_C = 0, MonthViewService_G = {
  [NavigationAction_w.Left]: (s) => (0,add_days/* addDays */.f)(s, -1),
  [NavigationAction_w.Up]: (s) => (0,add_weeks/* addWeeks */.J)(s, -1),
  [NavigationAction_w.Right]: (s) => (0,add_days/* addDays */.f)(s, 1),
  [NavigationAction_w.Down]: (s) => (0,add_weeks/* addWeeks */.J)(s, 1),
  [NavigationAction_w.PrevView]: (s) => (0,add_months/* addMonths */.P)(s, -1),
  [NavigationAction_w.NextView]: (s) => (0,add_months/* addMonths */.P)(s, 1),
  [NavigationAction_w.FirstInView]: (s) => (0,first_day_of_month/* firstDayOfMonth */.G)(s),
  [NavigationAction_w.LastInView]: (s) => (0,last_day_of_month/* lastDayOfMonth */.W)(s)
};
class MonthViewService_Q {
  constructor(t) {
    this.intl = t;
  }
  addToDate(t, e) {
    return (0,add_months/* addMonths */.P)(t, e);
  }
  datesList(t, e) {
    return z(0, e).map((n) => (0,add_months/* addMonths */.P)(t, n));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: n,
      isActiveView: l,
      max: r,
      min: a,
      selectedDate: c,
      selectionRange: m = SelectionRange_l,
      viewDate: f
    } = t;
    if (!f)
      return MonthViewService_U;
    const M = (0,first_day_of_month/* firstDayOfMonth */.G)(f), R = (0,last_day_of_month/* lastDayOfMonth */.W)(f), N = (0,day_of_week/* dayOfWeek */.m)(M, this.intl.firstDay(), -1), b = z(0, MonthViewService_S), q = X();
    return z(0, _).map((V) => {
      const v = (0,add_days/* addDays */.f)(N, V * MonthViewService_S);
      return b.map((L) => {
        const i = this.normalize((0,add_days/* addDays */.f)(v, L), a, r);
        if (i < M || i > R)
          return null;
        const p = this.isEqual(i, m.start), A = this.isEqual(i, m.end), E = !p && !A && utils_Y(i, m), k = l && (Array.isArray(c) ? this.isSelectedFromArray(i, c, a, r) : j(c, a, r) && this.isEqual(i, c));
        return {
          formattedValue: this.value(i),
          id: `${e}${i.getTime()}`,
          isFocused: this.isEqual(i, n),
          isSelected: k,
          isInRange: j(i, a, r),
          isWeekend: this.isWeekend(i),
          isRangeStart: p,
          isRangeMid: E,
          isRangeEnd: A,
          isRangeSplitStart: E && this.isEqual(i, M),
          isRangeSplitEnd: E && this.isEqual(i, R),
          isToday: this.isEqual(i, q),
          title: this.cellTitle(i),
          value: i
        };
      });
    });
  }
  isEqual(t, e) {
    return !t || !e ? !1 : (0,get_date/* getDate */.p)(t).getTime() === (0,get_date/* getDate */.p)(e).getTime();
  }
  isSelectedFromArray(t, e, n, l) {
    let r = !1;
    return e.forEach((a) => {
      j(t, n, l) && this.isEqual(t, a) && (r = !0);
    }), r;
  }
  isInArray(t, e) {
    return !!e.length && (0,first_day_of_month/* firstDayOfMonth */.G)(e[0]) <= t && t <= (0,last_day_of_month/* lastDayOfMonth */.W)(e[e.length - 1]);
  }
  isInRange(t, e, n) {
    const l = (0,get_date/* getDate */.p)(t), r = !e || (0,get_date/* getDate */.p)(e) <= l, a = !n || l <= (0,get_date/* getDate */.p)(n);
    return r && a;
  }
  isInSameView(t, e) {
    return (0,duration_in_months/* durationInMonths */.d)(t, e) === 0;
  }
  isRangeStart(t) {
    return !t.getMonth();
  }
  move(t, e) {
    const n = MonthViewService_G[e];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return this.intl.formatDate(t, "D");
  }
  navigationTitle(t) {
    return t ? this.isRangeStart(t) ? t.getFullYear().toString() : this.abbrMonthNames()[t.getMonth()] : "";
  }
  title(t) {
    return `${this.wideMonthNames()[t.getMonth()]} ${t.getFullYear()}`;
  }
  rowLength(t) {
    return MonthViewService_S + (t ? 1 : 0);
  }
  skip(t, e) {
    return (0,duration_in_months/* durationInMonths */.d)(e, t);
  }
  total(t, e) {
    return (0,duration_in_months/* durationInMonths */.d)(t, e) + 1;
  }
  value(t) {
    return t ? t.getDate().toString() : "";
  }
  viewDate(t, e, n = 1) {
    return (0,duration_in_months/* durationInMonths */.d)(t, e) < n ? (0,add_months/* addMonths */.P)(t, -1) : t;
  }
  isWeekend(t) {
    const e = t.getDay();
    return e === MonthViewService_$ || e === MonthViewService_C;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, e, n) {
    return t < e && this.isEqual(t, e) ? (0,get_date/* getDate */.p)(e) : t > n && this.isEqual(t, n) ? (0,get_date/* getDate */.p)(n) : t;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: !0 });
  }
}


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js
var first_month_of_year = __webpack_require__(9106);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js
var last_month_of_year = __webpack_require__(57452);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/create-date.js
var create_date = __webpack_require__(78524);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
var duration_in_years = __webpack_require__(90268);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/YearViewService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const YearViewService_C = [[]], YearViewService_S = 4, YearViewService_G = 3, YearViewService_P = (r) => r > 4 ? -5 : r < 2 ? -2 : -7, YearViewService_k = (r) => r < 7 ? 5 : r < 10 ? 7 : 2, YearViewService_z = {
  [NavigationAction_w.Left]: (r) => (0,add_months/* addMonths */.P)(r, -1),
  [NavigationAction_w.Up]: (r) => (0,add_months/* addMonths */.P)(r, YearViewService_P(r.getMonth())),
  [NavigationAction_w.Right]: (r) => (0,add_months/* addMonths */.P)(r, 1),
  [NavigationAction_w.Down]: (r) => (0,add_months/* addMonths */.P)(r, YearViewService_k(r.getMonth())),
  [NavigationAction_w.PrevView]: (r) => (0,add_years/* addYears */.e)(r, -1),
  [NavigationAction_w.NextView]: (r) => (0,add_years/* addYears */.e)(r, 1),
  [NavigationAction_w.FirstInView]: (r) => (0,first_month_of_year/* firstMonthOfYear */.N)(r),
  [NavigationAction_w.LastInView]: (r) => (0,last_month_of_year/* lastMonthOfYear */.b)(r)
};
class YearViewService_K {
  constructor(t) {
    this._intl = t;
  }
  addToDate(t, e) {
    return (0,add_years/* addYears */.e)(t, e);
  }
  datesList(t, e) {
    return z(0, e).map((n) => (0,add_years/* addYears */.e)(t, n));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: n,
      isActiveView: l,
      max: i,
      min: a,
      selectedDate: c,
      selectionRange: f = SelectionRange_l,
      viewDate: Y
    } = t;
    if (!Y)
      return YearViewService_C;
    const b = this.abbrMonthNames(), d = (0,first_month_of_year/* firstMonthOfYear */.N)(Y), q = (0,last_month_of_year/* lastMonthOfYear */.b)(Y), y = d.getFullYear(), A = z(0, YearViewService_S), V = X();
    return z(0, YearViewService_G).map((v) => {
      const D = (0,add_months/* addMonths */.P)(d, v * YearViewService_S);
      return A.map((N) => {
        const s = this.normalize((0,add_months/* addMonths */.P)(D, N), a, i);
        if (y < s.getFullYear())
          return null;
        const w = this.isEqual(s, f.start), T = this.isEqual(s, f.end), E = !w && !T && utils_Y(s, f), L = l && (Array.isArray(c) ? this.isSelectedFromArray(s, c, a, i) : j(c, a, i) && this.isEqual(s, c));
        return {
          formattedValue: b[s.getMonth()],
          id: `${e}${s.getTime()}`,
          isFocused: this.isEqual(s, n),
          isSelected: L,
          isInRange: j(s, a, i),
          isWeekend: !1,
          isRangeStart: w,
          isRangeMid: E,
          isRangeEnd: T,
          isRangeSplitEnd: E && this.isEqual(s, q),
          isRangeSplitStart: E && this.isEqual(s, d),
          isToday: this.isEqual(s, V),
          title: this.cellTitle(s),
          value: s
        };
      });
    });
  }
  isSelectedFromArray(t, e, n, l) {
    let i = !1;
    return e.forEach((a) => {
      j(t, n, l) && this.isEqual(t, a) && (i = !0);
    }), i;
  }
  isEqual(t, e) {
    return !t || !e ? !1 : t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
  }
  isInArray(t, e) {
    if (!e.length)
      return !1;
    const n = t.getFullYear();
    return e[0].getFullYear() <= n && n <= e[e.length - 1].getFullYear();
  }
  isInRange(t, e, n) {
    const l = (0,create_date/* createDate */.J)(t.getFullYear(), t.getMonth(), 1), i = !e || (0,create_date/* createDate */.J)(e.getFullYear(), e.getMonth(), 1) <= l, a = !n || l <= (0,create_date/* createDate */.J)(n.getFullYear(), n.getMonth(), 1);
    return i && a;
  }
  isInSameView(t, e) {
    return (0,duration_in_years/* durationInYears */.i)(t, e) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 10 === 0;
  }
  move(t, e) {
    const n = YearViewService_z[e];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return `${t.getFullYear()} ${this.value(t)}`;
  }
  navigationTitle(t) {
    return this.title(t);
  }
  title(t) {
    return t ? t.getFullYear().toString() : "";
  }
  rowLength(t) {
    return YearViewService_S;
  }
  skip(t, e) {
    return (0,duration_in_years/* durationInYears */.i)(e, t);
  }
  total(t, e) {
    return (0,duration_in_years/* durationInYears */.i)(t, e) + 1;
  }
  value(t) {
    return t ? this.abbrMonthNames()[t.getMonth()] : "";
  }
  viewDate(t, e, n = 1) {
    return (0,duration_in_years/* durationInYears */.i)(t, e) < n ? (0,add_years/* addYears */.e)(t, -1) : t;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, e, n) {
    return t < e && this.isEqual(t, e) ? (0,clone_date/* cloneDate */.a)(e) : t > n && this.isEqual(t, n) ? (0,clone_date/* cloneDate */.a)(n) : t;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/BusViewService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





const BusViewService_a = {
  [CalendarViewEnum_c.month]: MonthViewService_Q,
  [CalendarViewEnum_c.year]: YearViewService_K,
  [CalendarViewEnum_c.decade]: DecadeViewService_U,
  [CalendarViewEnum_c.century]: CenturyViewService_W
}, BusViewService_u = (i, t) => {
  const e = CalendarViewEnum_c[CalendarViewEnum_c[i + t]];
  return e !== void 0 ? e : i;
};
class BusViewService_V {
  constructor(t) {
    this.bottom = CalendarViewEnum_c.month, this.top = CalendarViewEnum_c.century, this.onViewChanged = t;
  }
  configure(t, e) {
    this.bottom = t, this.top = e;
  }
  service(t, e) {
    return new BusViewService_a[`${t}`](e);
  }
  moveDown(t, e) {
    this.move(t, -1, e);
  }
  moveUp(t, e) {
    this.move(t, 1, e);
  }
  moveToBottom(t) {
    t !== this.bottom && this.onViewChanged({ view: this.bottom });
  }
  canMoveDown(t) {
    return this.bottom < t;
  }
  canMoveUp(t) {
    return t < this.top;
  }
  clamp(t) {
    return t < this.bottom ? this.bottom : t > this.top ? this.top : t;
  }
  move(t, e, n) {
    const r = this.clamp(BusViewService_u(t, e));
    r !== t && this.onViewChanged({ view: r }, n);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/DOMService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



class DOMService_P {
  constructor() {
    this.calendarHeight = 0, this.headerHeight = 0, this.monthViewHeight = 0, this.yearViewHeight = 0, this.decadeViewHeight = 0, this.centuryViewHeight = 0, this.navigationItemHeight = 0, this.scrollableContentHeight = 0, this.scrollableYearContentHeight = 0, this.calendarWidth = 0, this.monthViewWidth = 0, this.yearViewWidth = 0, this.decadeViewWidth = 0, this.centuryViewWidth = 0, this.scrollableContentWidth = 0, this.didCalculate = !1, this.hostContainer = null;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(i) {
    if (!index_mjs_.canUseDOM)
      return;
    const n = Q("div"), a = Q("ul"), l = Q("li"), v = Q("td"), D = Q("th"), w = Q("tr"), F = Q("tbody"), S = Q("thead"), m = Q("table"), H = () => n(
      `
            <span class="k-button k-button-md k-button-rectangle k-button-solid k-button-solid-base k-button-flat k-calendar-title">
                <span className="k-button-text">March 2017</span>
            </span>
            <span class="k-spacer"></span>
            <span class="k-calendar-nav k-hstack"><button class="k-calendar-nav-today">TODAY</button></span>
        `,
      "k-calendar-header k-hstack"
    ), $ = () => m(
      [
        S([
          w([D("MO", "k-calendar-th")], "k-calendar-tr")
        ], "k-calendar-thead")
      ],
      "k-calendar-table k-calendar-weekdays"
    ), V = (t, e) => new Array(t).fill("1").map(e), z = (t, e = 1) => m([
      F(
        [w(
          [v("1", "k-calendar-td k-alt")]
        )].concat(
          V(
            t,
            () => w(V(e, (o) => v(`<span class="k-link">${o}</span>`, "k-calendar-td")), "k-calendar-tr")
          )
        ),
        "k-calendar-tbody"
      )
    ], "k-calendar-table"), k = (t) => n(t, "k-content k-scrollable"), M = (t, e, o) => n(
      o ? [
        H(),
        $(),
        k([t, t])
      ] : [
        H(),
        k([t, t])
      ],
      e,
      { left: "-10000px", position: "absolute" }
    ), x = /* @__PURE__ */ (() => {
      let t;
      return () => index_mjs_.canUseDOM ? (t || (t = n(
        [k([a([l("<span>FEB</span>")])])],
        "k-calendar-navigation",
        { left: "0px", position: "absolute" }
      )), t) : null;
    })(), g = ({ cells: t, rows: e }, o, N) => {
      let p;
      return () => index_mjs_.canUseDOM ? (p || (p = M(z(e, t), o, N)), p) : null;
    }, d = (t) => t.querySelector(".k-scrollable"), b = (t) => {
      const e = d(t);
      return e.className = `${e.className} k-scrollable-horizontal`, t;
    }, f = g({ cells: 7, rows: 6 }, "k-calendar-view k-calendar-monthview k-vstack", !0), C = g({ cells: 5, rows: 3 }, "k-calendar-view k-calendar-yearview", !1), W = g({ cells: 5, rows: 2 }, "k-calendar-view k-calendar-decadeview", !1), O = () => b(f()), Y = () => b(C()), q = () => b(W()), h = (t) => parseFloat(window.getComputedStyle(t).height) || t.offsetHeight, c = (t) => {
      const e = window.getComputedStyle(t);
      return parseFloat(e.width) + parseFloat(e.paddingLeft) + parseFloat(e.paddingRight) || t.offsetWidth;
    }, r = (t) => t.querySelector("tbody");
    this.didCalculate = !0, i && (this.hostContainer = i), this.batch(f(), (t) => {
      const e = r(t);
      this.calendarHeight = h(t), this.monthViewHeight = h(e), this.headerHeight = h(e.children[0]), this.scrollableContentHeight = h(d(t));
    }), this.batch(O(), (t) => {
      const e = r(t);
      this.calendarWidth = c(t), this.monthViewWidth = c(e), this.scrollableContentWidth = c(d(t));
    }), this.batch(C(), (t) => {
      this.yearViewHeight = h(r(t)), this.scrollableYearContentHeight = h(d(t));
    }), this.batch(Y(), (t) => {
      this.yearViewWidth = c(r(t));
    }), this.batch(W(), (t) => {
      this.decadeViewHeight = h(r(t)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(q(), (t) => {
      this.decadeViewWidth = c(r(t)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch(x(), (t) => {
      this.navigationItemHeight = h(t.querySelector("li"));
    });
  }
  viewHeight(i) {
    return this.viewDimension(i, "height");
  }
  viewWidth(i) {
    return this.viewDimension(i, "width");
  }
  viewDimension(i, n) {
    const a = n === "height" ? "ViewHeight" : "ViewWidth";
    switch (i) {
      case CalendarViewEnum_c.month:
        return this[`month${a}`];
      case CalendarViewEnum_c.year:
        return this[`year${a}`];
      case CalendarViewEnum_c.decade:
        return this[`decade${a}`];
      case CalendarViewEnum_c.century:
        return this[`century${a}`];
      default:
        return 1;
    }
  }
  batch(i, n) {
    const a = this.hostContainer || document.body, l = a.appendChild(i);
    n(l), a.removeChild(l);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/NavigationService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const NavigationService_n = {
  33: NavigationAction_w.PrevView,
  34: NavigationAction_w.NextView,
  35: NavigationAction_w.LastInView,
  36: NavigationAction_w.FirstInView,
  37: NavigationAction_w.Left,
  38: NavigationAction_w.Up,
  39: NavigationAction_w.Right,
  40: NavigationAction_w.Down,
  "meta+38": NavigationAction_w.UpperView,
  "meta+40": NavigationAction_w.LowerView
};
class NavigationService_p {
  constructor(e) {
    this.bus = e;
  }
  action(e) {
    const r = `${e.ctrlKey || e.metaKey ? "meta+" : ""}${e.keyCode}`;
    return NavigationService_n[r];
  }
  move(e, r, o, i, s) {
    return i ? r === NavigationAction_w.UpperView && this.bus.canMoveUp(o) ? (this.bus.moveUp(o, s), e) : r === NavigationAction_w.LowerView && this.bus.canMoveDown(o) ? (this.bus.moveDown(o, s), e) : i.move(e, r) : e;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/services/ScrollSyncService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const ScrollSyncService_n = (l) => (t) => Math.floor(t / l), ScrollSyncService_o = (l) => (t) => t * l;
class ScrollSyncService_s {
  constructor(t) {
    this.dom = t, this.divideByMagnitude = null, this.powerByMagnitude = null, this.navigator = null, this.view = null, this.monthScrolled = !1, this.navScrolled = !1;
  }
  configure(t) {
    const i = Math.max(this.dom.viewHeight(t) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = ScrollSyncService_n(i), this.powerByMagnitude = ScrollSyncService_o(i);
  }
  sync(t, i, e) {
    if (!(!t || !i)) {
      if (this.navigator = t, this.view = i, e.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = !1;
          return;
        }
        this.navScrolled = !0, this.scrollSiblingOf(this.navigator.element);
      }
      if (e.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = !1;
          return;
        }
        this.monthScrolled = !0, this.scrollSiblingOf(this.view.element);
      }
    }
  }
  scrollSiblingOf(t) {
    const i = this.siblingComponent(t), e = this.calculateScroll(i, t.scrollTop);
    i.scrollTo(e);
  }
  siblingComponent(t) {
    return this.navigator.element === t ? this.view : this.navigator;
  }
  calculateScroll(t, i) {
    const e = t === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return e ? e(i) : 0;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/Calendar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";














const V = (u) => u ? u.virtualization : null, Calendar_x = (u = Calendar_d.defaultProps.min, o = Calendar_d.defaultProps.max, i, t) => t !== void 0 ? t !== null && j((0,get_date/* getDate */.p)(t), u, o) ? t : null : i !== null && j((0,get_date/* getDate */.p)(i), u, o) ? i : null, Calendar_l = class l extends index_js_.Component {
  constructor(o) {
    super(o), this.scrollSyncService = null, this.focusedDate = null, this.Navigation = null, this.calendarViewList = null, this._element = null, this.intl = null, this.service = null, this.isActive = !1, this.didNavigationChange = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.shouldScroll = () => this.didNavigationChange, this.handleScroll = (t) => {
      this.scrollSyncService && this.scrollSyncService.sync(
        V(this.Navigation),
        V(this.calendarViewList),
        t
      );
    }, this.handleNavigationChange = (t) => {
      if (this.props.disabled)
        return;
      this.didNavigationChange = !0;
      const e = (0,clone_date/* cloneDate */.a)(t.value);
      this.setState({ focusedDate: e });
    }, this.handleViewChange = ({ view: t }) => {
      this.scrollSyncService && this.scrollSyncService.configure(t), this.setState({ activeView: t });
    }, this.handleDateChange = (t) => {
      const e = (0,clone_date/* cloneDate */.a)(t.value), a = (0,clone_date/* cloneDate */.a)(t.value), p = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (p)
        if (t.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, t.syntheticEvent), this.setState({ focusedDate: a });
          return;
        }
      this.setState({ value: e, focusedDate: a }), this.valueDuringOnChange = e;
      const { onChange: h } = this.props;
      if (h) {
        const n = {
          syntheticEvent: t.syntheticEvent,
          nativeEvent: t.nativeEvent,
          value: e,
          target: this
        };
        h.call(void 0, n);
      }
      this.valueDuringOnChange = void 0;
    }, this.handleFocus = (t) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleBlur = (t) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleKeyDown = (t) => {
      const { keyCode: a, ctrlKey: p, metaKey: h } = t;
      if (!(!this.focusedDate || !this.service)) {
        if (a === 84 && this.setState({ focusedDate: X() }), (p || h) && (a === index_mjs_.Keys.left || a === index_mjs_.Keys.right)) {
          if (this.props.disabled)
            return;
          this.didNavigationChange = !0, this.focusedDate.getDate() === 31 && this.focusedDate.setDate(30);
          const n = a === index_mjs_.Keys.left ? this.focusedDate.getMonth() - 1 : this.focusedDate.getMonth() + 1, g = new Date(this.focusedDate.setMonth(n)), k = (0,clone_date/* cloneDate */.a)(g);
          this.setState({ focusedDate: k });
        }
        if (a === index_mjs_.Keys.enter) {
          if (this.value !== null && (0,is_equal_date/* isEqualDate */.$)(this.focusedDate, this.value)) {
            const g = K(this.focusedDate, this.min, this.max);
            V(this.calendarViewList).scrollToIndex(this.service.skip(g, this.min));
          }
          const n = {
            syntheticEvent: t,
            nativeEvent: t.nativeEvent,
            value: this.focusedDate,
            target: this
          };
          this.handleDateChange(n);
        } else {
          const n = K(
            this.navigation.move(
              this.focusedDate,
              this.navigation.action(t),
              this.state.activeView,
              this.service,
              t
            ),
            this.min,
            this.max
          );
          if ((0,is_equal_date/* isEqualDate */.$)(this.focusedDate, n))
            return;
          this.setState({ focusedDate: n });
        }
        t.preventDefault();
      }
    }, this.handleMouseDown = (t) => {
      t.preventDefault();
    }, this.handleClick = (t) => {
      this._element && this._element.focus({ preventScroll: !0 });
    }, (0,index_mjs_.validatePackage)(e);
    const i = Calendar_x(
      this.min,
      this.max,
      this.props.defaultValue || l.defaultProps.defaultValue,
      this.props.value
    );
    this.state = {
      value: i,
      activeView: utils_d(
        CalendarViewEnum_c[o.defaultActiveView],
        this.bottomView,
        this.topView
      ),
      focusedDate: K(
        o.focusedDate || i || X(),
        this.min,
        this.max
      )
    }, this.dom = new DOMService_P(), this.bus = new BusViewService_V(this.handleViewChange), this.navigation = new NavigationService_p(this.bus), this.oldValue = i;
  }
  get cellUID() {
    return this.props.id + "-cell-uid";
  }
  get id() {
    return this.props.id + "-id";
  }
  /**
   * Gets the wrapping element of the Calendar.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the Calendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  get min() {
    return (0,get_date/* getDate */.p)(this.props.min !== void 0 ? this.props.min : l.defaultProps.min);
  }
  get max() {
    return (0,get_date/* getDate */.p)(this.props.max !== void 0 ? this.props.max : l.defaultProps.max);
  }
  get bottomView() {
    return CalendarViewEnum_c[this.props.bottomView !== void 0 ? this.props.bottomView : l.defaultProps.bottomView];
  }
  get topView() {
    return CalendarViewEnum_c[this.props.topView !== void 0 ? this.props.topView : l.defaultProps.topView];
  }
  /**
   * @hidden
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      (0,index_mjs_.setScrollbarWidth)(), this._element && (this.dom.calculateHeights(this._element), this.scrollSyncService = new ScrollSyncService_s(this.dom), this.scrollSyncService.configure(this.state.activeView), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(o, i) {
    (0,index_mjs_.setScrollbarWidth)(), i.activeView !== this.state.activeView && this.scrollSyncService && this.scrollSyncService.configure(this.state.activeView), this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)(), this.didNavigationChange = !1, this.isActive && (this.oldValue = this.value);
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this);
    const o = this.value !== null && this.oldValue !== null ? !(0,is_equal_date/* isEqualDate */.$)(this.value, this.oldValue) : this.value !== this.oldValue, i = utils_d(
      this.state.activeView,
      CalendarViewEnum_c[this.props.bottomView !== void 0 ? this.props.bottomView : l.defaultProps.bottomView],
      CalendarViewEnum_c[this.props.topView !== void 0 ? this.props.topView : l.defaultProps.topView]
    ), t = Calendar_x(this.min, this.max, this.value, this.value), e = t ? (0,get_date/* getDate */.p)(t) : null;
    this.focusedDate = (0,get_date/* getDate */.p)(K(
      o && t !== null ? t : this.state.focusedDate,
      this.min,
      this.max
    )), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.bus.configure(this.bottomView, this.topView), this.service = this.bus.service(i, this.intl);
    const { smoothScroll: a = Number.parseFloat(index_js_.version) < 18 } = this.props, p = (0,index_mjs_.classNames)(
      "k-widget k-calendar k-calendar-infinite",
      {
        "k-disabled": this.props.disabled,
        "k-week-number": this.props.weekNumber,
        "k-calendar-lg": this.props.mobileMode
      },
      this.props.className
    ), h = [this.props.navigation && /* @__PURE__ */ index_js_.createElement(
      Navigation_d,
      {
        key: 0,
        ref: (n) => {
          this.Navigation = n;
        },
        activeView: this.state.activeView,
        focusedDate: this.focusedDate,
        min: this.min,
        max: this.max,
        onScroll: this.handleScroll,
        onChange: this.handleNavigationChange,
        service: this.service,
        dom: this.dom,
        navigationItem: this.props.navigationItem,
        tabIndex: this.props.tabIndex
      }
    ), /* @__PURE__ */ index_js_.createElement(
      ViewList_c,
      {
        key: 1,
        ref: (n) => {
          this.calendarViewList = n;
        },
        activeView: this.state.activeView,
        focusedDate: this.focusedDate,
        min: this.min,
        max: this.max,
        bus: this.bus,
        shouldScroll: this.shouldScroll,
        onScroll: this.handleScroll,
        service: this.service,
        cell: this.props.cell,
        weekCell: this.props.weekCell,
        dom: this.dom,
        smoothScroll: a,
        showWeekNumbers: this.props.weekNumber,
        onChange: this.handleDateChange,
        value: e,
        cellUID: this.cellUID,
        headerTitle: this.props.headerTitle,
        tabIndex: this.props.tabIndex
      }
    )];
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (n) => {
          this._element = n;
        },
        className: p,
        id: this.props.id || this.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-disabled": this.props.disabled,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex || 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick
      },
      h
    );
  }
};
Calendar_l.displayName = "Calendar", Calendar_l.propTypes = {
  className: prop_types_index_js_.string,
  defaultActiveView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
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
  topView: (o, i, t) => {
    const e = o[i], a = o.bottomView;
    return e && a && CalendarViewEnum_c[e] < CalendarViewEnum_c[a] ? new Error(
      `Invalid prop + ${i} suplied to ${t}.
                    ${i} can not be smaller than bottomView.
                    `
    ) : null;
  },
  bottomView: (o, i, t) => {
    const e = o[i], a = o.topView;
    return e && a && CalendarViewEnum_c[e] > CalendarViewEnum_c[a] ? new Error(
      `Invalid prop + ${i} suplied to ${t}.
                    ${i} can not be bigger than topView.
                    `
    ) : null;
  }
}, Calendar_l.defaultProps = {
  disabled: !1,
  min: utils_H,
  max: L,
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  bottomView: "month"
};
let Calendar_d = Calendar_l;
const Y = (0,index_mjs_.createPropsContext)(), Calendar_z = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(Y, Calendar_d));
Calendar_z.displayName = "KendoReactCalendar";
(0,kendo_react_intl_index_mjs_.registerForIntl)(Calendar_d);


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(72111);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/dateinput/models/mask.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class mask_t {
  constructor() {
    this.symbols = "", this.partMap = [];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/dateinput/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const utils_l = "d", y = "wide", utils_ = (h, e, g, u) => {
  const b = h[u + h.length - g.length], p = h.substring(0, u + h.length - g.length), n = g.substring(0, u), t = [];
  if (p === n && u > 0)
    return t.push([e[u - 1], n[u - 1]]), t;
  if (p.indexOf(n) === 0 && (n.length === 0 || e[n.length - 1] !== e[n.length])) {
    let s = "";
    n.length === 1 && t.push([e[0], n[0]]);
    for (let f = n.length; f < p.length; f++)
      e[f] !== s && e[f] !== "_" && (s = e[f], t.push([s, ""]));
    return t;
  }
  if (n.indexOf(p) === 0 || e[u - 1] === "_") {
    let s = e[0];
    for (let f = Math.max(0, p.length - 1); f < e.length; f++)
      if (e[f] !== "_") {
        s = e[f];
        break;
      }
    return [[s, n[u - 1]]];
  }
  return n[n.length - 1] === " " || n[n.length - 1] === b ? [[e[u - 1], "_"]] : [[e[u - 1], n[u - 1]]];
}, utils_k = (h, e) => (h[e.pattern[0]] = e.type, h), M = (h, e, g) => h === null || !(e && e > h || g && g < h), utils_w = ["k-widget", "k-dateinput"];


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/dateinput/models/kendo-date.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



class kendo_date_k {
  constructor(t, e, s) {
    this.year = !0, this.month = !0, this.date = !0, this.hours = !0, this.minutes = !0, this.seconds = !0, this.milliseconds = !0, this.leadingZero = null, this.typedMonthPart = "", this.knownParts = "adHhmMsEy", this.symbols = {
      E: "E",
      H: "H",
      M: "M",
      a: "a",
      d: "d",
      h: "h",
      m: "m",
      s: "s",
      y: "y"
    }, this._value = (0,get_date/* getDate */.p)(/* @__PURE__ */ new Date()), this.intlProvider = t, this.formatPlaceholder = e, this.format = s, this.monthNames = this.allFormatedMonths();
  }
  get intl() {
    return this.intlProvider();
  }
  get value() {
    return this._value;
  }
  setValue(t) {
    t ? (0,is_equal/* isEqual */.n)(t, this._value) || (this._value = (0,clone_date/* cloneDate */.a)(t), this.modifyExisting(!0)) : (this._value = (0,get_date/* getDate */.p)(/* @__PURE__ */ new Date()), this.modifyExisting(!1));
  }
  hasValue() {
    const t = (e, s) => e || s.type !== "literal" && s.type !== "dayperiod" && this.getExisting(s.pattern[0]);
    return this.intl.splitDateFormat(this.format).reduce(t, !1);
  }
  getDateObject() {
    for (let t = 0; t < this.knownParts.length; t++)
      if (!this.getExisting(this.knownParts[t]))
        return null;
    return (0,clone_date/* cloneDate */.a)(this.value);
  }
  getTextAndFormat() {
    return this.merge(
      this.intl.formatDate(this.value, this.format),
      this.dateFormatString(this.value, this.format)
    );
  }
  modifyExisting(t) {
    const e = this.dateFormatString(this.value, this.format).symbols;
    for (let s = 0; s < e.length; s++)
      this.setExisting(e[s], t);
  }
  getExisting(t) {
    switch (t) {
      case "y":
        return this.year;
      case "M":
      case "L":
        return this.month;
      case "d":
        return this.date;
      case "E":
        return this.date && this.month && this.year;
      case "h":
      case "H":
        return this.hours;
      case "m":
        return this.minutes;
      case "s":
        return this.seconds;
      default:
        return !0;
    }
  }
  setExisting(t, e) {
    switch (t) {
      case "y":
        this.year = e, e === !1 && this._value.setFullYear(2e3);
        break;
      case "M":
        this.month = e, e === !1 && this._value.setMonth(0);
        break;
      case "d":
        this.date = e;
        break;
      case "h":
      case "H":
        this.hours = e;
        break;
      case "m":
        this.minutes = e;
        break;
      case "s":
        this.seconds = e;
        break;
      default:
        return;
    }
  }
  modifyPart(t, e) {
    let s = (0,clone_date/* cloneDate */.a)(this.value);
    switch (t) {
      case "y":
        s.setFullYear(s.getFullYear() + e);
        break;
      case "M":
        s = (0,add_months/* addMonths */.P)(this.value, e);
        break;
      case "d":
      case "E":
        s.setDate(s.getDate() + e);
        break;
      case "h":
      case "H":
        s.setHours(s.getHours() + e);
        break;
      case "m":
        s.setMinutes(s.getMinutes() + e);
        break;
      case "s":
        s.setSeconds(s.getSeconds() + e);
        break;
      case "a":
        s.setHours(s.getHours() + 12 * e);
        break;
    }
    this.setExisting(t, !0), this._value = s;
  }
  parsePart(t, e) {
    if (this.resetLeadingZero(), !e)
      return this.setExisting(t, !1), { value: null };
    const s = this.intl.formatDate(this.value, this.format), r = this.dateFormatString(this.value, this.format), n = r.symbols;
    let i = !1, h = "", l = "", d = "";
    for (let o = 0; o < s.length; o++)
      n[o] === t ? (l += this.getExisting(t) ? s[o] : "0", i = !0) : i ? d += s[o] : h += s[o];
    let a = null;
    const g = this.matchMonth(e);
    for (; l.length > 0 && l.charAt(0) === "0"; )
      l = l.slice(1);
    l.length >= 4 && (l = "");
    for (let o = 0; o < 2; o++) {
      let c = l + e, p = parseInt(c, 10);
      if (a = this.intl.parseDate(h + c + d, this.format), !a && !isNaN(p) && !isNaN(parseInt(e, 10))) {
        if (t === "M" && !g) {
          const u = p - 1;
          u > -1 && u < 12 && (a = (0,clone_date/* cloneDate */.a)(this.value), a.setMonth(u), a.getMonth() !== u && (a = (0,last_day_of_month/* lastDayOfMonth */.W)((0,add_months/* addMonths */.P)(a, -1))));
        }
        t === "y" && (a = (0,create_date/* createDate */.J)(
          parseInt(c, 10),
          this.month ? this.value.getMonth() : 0,
          this.date ? this.value.getDate() : 1,
          this.hours ? this.value.getHours() : 0,
          this.minutes ? this.value.getMinutes() : 0,
          this.seconds ? this.value.getSeconds() : 0,
          this.milliseconds ? this.value.getMilliseconds() : 0
        ), this.date && a.getDate() !== this.value.getDate() && (a = (0,last_day_of_month/* lastDayOfMonth */.W)((0,add_months/* addMonths */.P)(a, -1))));
      }
      if (a)
        return this._value = a, this.setExisting(t, !0), { value: this.value };
      l = "";
    }
    return g && (a = this.intl.parseDate(h + g + d, this.format), a) ? (this._value = a, this.setExisting(t, !0), { value: this.value }) : (e === "0" && (this.leadingZero = this.isAbbrMonth(r.partMap, t) ? null : { [t]: !0 }, this.setExisting(t, !1)), { value: null });
  }
  symbolMap(t) {
    return this.intl.splitDateFormat(this.format).reduce(utils_k, {})[t];
  }
  resetLeadingZero() {
    const t = this.leadingZero !== null;
    return this.leadingZero = null, t;
  }
  isAbbrMonth(t, e) {
    const s = this.partPattern(t, e);
    return s.type === "month" && s.names;
  }
  partPattern(t, e) {
    return t.filter((s) => s.pattern.indexOf(e) !== -1)[0];
  }
  matchMonth(t) {
    if (this.typedMonthPart += t.toLowerCase(), this.monthNames.length === 0)
      return "";
    for (; this.typedMonthPart.length > 0; ) {
      for (let s = 0; s < this.monthNames.length; s++)
        if (this.monthNames[s].toLowerCase().indexOf(this.typedMonthPart) === 0)
          return this.monthNames[s];
      const e = parseInt(this.typedMonthPart, 10);
      if (e >= 1 && e <= 12 && e.toString() === this.typedMonthPart)
        return this.monthNames[e - 1];
      this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
    }
    return "";
  }
  allFormatedMonths() {
    const t = this.intl.splitDateFormat(this.format);
    for (let e = 0; e < t.length; e++)
      if (t[e].type === "month" && t[e].names)
        return this.intl.dateFormatNames(t[e].names);
    return [];
  }
  dateFormatString(t, e) {
    const s = this.intl.splitDateFormat(e), r = [], n = [];
    for (let h = 0; h < s.length; h++) {
      let l = this.intl.formatDate(t, { pattern: s[h].pattern }).length;
      for (; l > 0; )
        r.push(this.symbols[s[h].pattern[0]] || "_"), n.push(s[h]), l--;
    }
    const i = new mask_t();
    return i.symbols = r.join(""), i.partMap = n, i;
  }
  merge(t, e) {
    let s = "", r = "", n = e.symbols;
    for (let i = n.length - 1; i >= 0; i--)
      if (this.knownParts.indexOf(n[i]) === -1 || this.getExisting(n[i]))
        s = t[i] + s, r = n[i] + r;
      else {
        const h = n[i];
        for (; i >= 0 && h === n[i]; )
          i--;
        for (i++, this.leadingZero && this.leadingZero[h] ? s = "0" + s : s = this.dateFieldName(e.partMap[i]) + s; r.length < s.length; )
          r = n[i] + r;
      }
    return { text: s, format: r };
  }
  dateFieldName(t) {
    const e = this.formatPlaceholder || "wide";
    return e[t.type] ? e[t.type] : e === "formatPattern" ? t.pattern : this.intl.dateFieldName(Object.assign(t, { nameType: e }));
  }
}


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-labels@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-labels@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_7eaf90e514d5ecc415f24487ff68b0fb/node_modules/@progress/kendo-react-labels/index.mjs)
var kendo_react_labels_index_mjs_ = __webpack_require__(14869);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/models/TimePart.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const TimePart_e = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
};


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const utils_a = (e) => (t, r) => {
  const n = (0,clone_date/* cloneDate */.a)(t);
  return n[e](r), n;
}, utils_p = [
  { type: TimePart_e.hour, getter: (e) => e.getHours() },
  { type: TimePart_e.minute, getter: (e) => e.getMinutes() },
  { type: TimePart_e.second, getter: (e) => e.getSeconds() },
  { type: TimePart_e.millisecond, getter: (e) => e.getMilliseconds() }
], utils_V = (e) => (t, r) => e(t), utils_T = (e) => (t, r) => e(r), utils_M = (e) => e.reduce((t, r) => (t[r.type] = r.type, t), {}), utils_y = (e) => (t) => e[t.type] ? utils_T(t.getter) : utils_V(t.getter), timepicker_utils_H = (e) => (t) => e.map(utils_y(utils_M(t))), timepicker_utils_d = (e, t, r, n) => (s) => {
  const o = e(s), m = e(r);
  return n === "hour" ? o - (o - m) % t : s.getTime() <= r.getTime() && o !== 0 && o <= m ? Math.ceil(o / t) * t : o - o % t;
}, utils_h = (e) => (t, r) => e.map((n) => {
  const s = Math.floor(t[n.type]);
  return s ? timepicker_utils_d(n.getter, s, r, n.type) : n.getter;
}), utils_S = timepicker_utils_H(utils_p), R = utils_h(utils_p), timepicker_utils_ = (e) => (t, r) => (t.setHours(...e.map((n) => n(t, r))), t), utils_x = (e) => (t) => {
  const r = (0,clone_date/* cloneDate */.a)(t);
  return r.setHours(...e.map((n) => n(r))), r;
}, utils_G = utils_a("setHours"), timepicker_utils_w = utils_a("setMinutes"), utils_A = utils_a("setSeconds"), utils_B = () => /* @__PURE__ */ new Date(), E = (e, t, r = 1) => {
  const n = [];
  for (let s = e; s < t; s = s + r)
    n.push(s);
  return n;
}, i = (e, t, r) => ({
  candidateValue: O(k, e),
  maxValue: (0,add_days/* addDays */.f)(O(k, r), t.getHours() < r.getHours() ? 0 : 1),
  minValue: O(k, t)
}), F = (e, t, r) => {
  if (!e || !t || !r)
    return e;
  const {
    candidateValue: n,
    minValue: s,
    maxValue: o
  } = i(e, t, r);
  return n < s ? O(e, t) : n > o ? O(e, r) : e;
}, utils_N = (e, t, r) => {
  if (!e || !t || !r)
    return !0;
  const {
    candidateValue: n,
    minValue: s,
    maxValue: o
  } = i(e, t, r);
  return s <= n && n <= o;
}, timepicker_utils_P = (e, t, r) => {
  if (e === null)
    return !0;
  const {
    candidateValue: n,
    minValue: s,
    maxValue: o
  } = i(e, t, r);
  return s <= n && n <= o;
}, utils_v = (e, t) => {
  if (e === null || t === null)
    return !1;
  const r = O(k, e), n = O(k, t);
  return r.getTime() < n.getHours();
}, utils_O = (e, t) => {
  if (e === null || t === null)
    return !1;
  const r = O(k, e);
  return O(k, t).getTime() < r.getHours();
};


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/dateinput/DateInput.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";














const se = "Please enter a valid value!", DateInput_o = class o extends index_js_.Component {
  constructor(i) {
    super(i), this.kendoDate = null, this.currentFormat = "", this.paste = !1, this._element = null, this._wrapper = null, this._lastSelectedSymbol = "", this.focus = () => {
      this._element && this._element.focus();
    }, this.setValidity = () => {
      this.element && this.element.setCustomValidity && this.element.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || o.defaultProps.validationMessage
      );
    }, this.updateOnPaste = (t) => {
      if (!this.element || !this.kendoDate)
        return;
      const s = (0,kendo_react_intl_index_mjs_.provideIntlService)(this).parseDate(this.element.value, this.props.format) || this.value, r = this.value;
      this.kendoDate.setValue(s), this.triggerChange(t, r);
    }, this.spinnersMouseDown = (t) => {
      t.preventDefault();
      const s = (0,index_mjs_.getActiveElement)(document);
      this.element && s !== this.element && this.element.focus({ preventScroll: !0 });
    }, this.handlePaste = () => {
      this.paste = !0;
    }, this.elementChange = (t) => {
      if (!this.element || !this.kendoDate)
        return;
      if (this.paste) {
        this.updateOnPaste(t), this.paste = !1;
        return;
      }
      const { text: s, format: r } = this.kendoDate.getTextAndFormat();
      this.currentFormat = r;
      const n = this.value, a = utils_(
        s,
        this.currentFormat,
        this.element.value,
        this.selection.start
      ), l = a.length === 1 && a[0][1] === "_";
      if (!l)
        for (let d = 0; d < a.length; d++)
          this.kendoDate.parsePart(a[d][0], a[d][1]);
      a.length && a[0][0] !== "_" && this.setSelection(this.selectionBySymbol(a[0][0])), l && this.switchDateSegment(1), this.triggerChange(t, n);
    }, this.elementClick = (t) => {
      this.setSelection(this.selectionByIndex(this.selection.start));
    }, this.nativeWheel = (t) => {
      (0,index_mjs_.getActiveElement)(document) === this.element && t.preventDefault();
    }, this.wheel = (t) => {
      (0,index_mjs_.getActiveElement)(document) === this.element && (t.nativeEvent.deltaY < 0 && this.increasePart(t), t.nativeEvent.deltaY > 0 && this.decreasePart(t));
    }, this.increasePart = (t) => {
      this.modifyDateSegmentValue(1, t);
    }, this.decreasePart = (t) => {
      this.modifyDateSegmentValue(-1, t);
    }, this.elementKeyDown = (t) => {
      if (!t.altKey) {
        switch (t.keyCode) {
          case 37:
            this.switchDateSegment(-1);
            break;
          case 38:
            this.modifyDateSegmentValue(1, t);
            break;
          case 39:
            this.switchDateSegment(1);
            break;
          case 40:
            this.modifyDateSegmentValue(-1, t);
            break;
          default:
            return;
        }
        t.preventDefault();
      }
    }, this.elementOnFocus = (t) => {
      this.wrapper && this.wrapper.classList.add("k-focus"), this.setState({ focused: !0 });
    }, this.elementOnBlur = (t) => {
      this.wrapper && this.wrapper.classList.remove("k-focus"), this.setState({ focused: !1 });
    }, (0,index_mjs_.validatePackage)(e), this.state = {
      focused: !1
    };
  }
  get _inputId() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setValidity(), this.wrapper && this.wrapper.addEventListener("wheel", this.nativeWheel, { passive: !1 });
  }
  /**
   * @hidden
   */
  componentDidUpdate(i, t) {
    this._lastSelectedSymbol && t.focused === this.state.focused ? this.setSelection(this.selectionBySymbol(this._lastSelectedSymbol)) : this.props.placeholder !== void 0 && this.selection.start === this.selection.end && this.setSelection({ start: 0, end: this.currentFormat.length }), this.setValidity();
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.wrapper && this.wrapper.removeEventListener("wheel", this.nativeWheel);
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i = o.defaultProps.size,
      fillMode: t = o.defaultProps.fillMode,
      rounded: s = o.defaultProps.rounded
    } = this.props;
    this.props._ref && (this.props._ref.current = this);
    const r = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), n = { ...o.defaultProps, ...this.props }, { name: a, label: l, id: d } = n, p = this.text, O = p === this.props.placeholder ? "" : p, E = p === this.props.placeholder ? p : void 0, b = d || this._inputId, D = !this.validityStyles || this.validity.valid;
    let x = [...utils_w];
    this.props.className && x.push(this.props.className);
    const S = /* @__PURE__ */ index_js_.createElement(index_mjs_.AsyncFocusBlur, { onFocus: this.elementOnFocus, onBlur: this.elementOnBlur }, ({ onFocus: C, onBlur: I }) => /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        ref: (y) => {
          this._wrapper = y;
        },
        style: l ? void 0 : { width: this.props.width },
        dir: this.props.dir,
        className: (0,index_mjs_.classNames)(
          "k-dateinput",
          "k-input",
          {
            [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[i] || i}`]: i,
            [`k-input-${t}`]: t,
            [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[s] || s}`]: s,
            "k-invalid": !D,
            "k-required": this.required,
            "k-disabled": this.props.disabled
          },
          this.props.className
        ),
        onFocus: C,
        onBlur: I
      },
      /* @__PURE__ */ index_js_.createElement(
        "input",
        {
          role: this.props.ariaRole || "textbox",
          readOnly: this.props.readonly,
          tabIndex: this.props.tabIndex,
          disabled: this.props.disabled,
          title: this.props.title !== void 0 ? this.props.title : p,
          type: "text",
          spellCheck: !1,
          autoComplete: "off",
          autoCorrect: "off",
          className: "k-input-inner",
          id: b,
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-describedby": this.props.ariaDescribedBy,
          "aria-haspopup": this.props.ariaHasPopup,
          "aria-disabled": this.props.disabled,
          "aria-expanded": this.props.ariaExpanded,
          "aria-controls": this.props.ariaControls,
          onWheel: this.wheel,
          onClick: this.elementClick,
          onInput: this.elementChange,
          onPaste: this.handlePaste,
          onKeyDown: this.elementKeyDown,
          onChange: index_mjs_.noop,
          value: O,
          placeholder: E,
          name: a,
          ref: (y) => this._element = y
        }
      ),
      this.props.children,
      this.props.spinners && /* @__PURE__ */ index_js_.createElement("span", { className: "k-input-spinner k-spin-button", onMouseDown: this.spinnersMouseDown }, /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          tabIndex: -1,
          type: "button",
          rounded: null,
          className: "k-spinner-increase",
          icon: "caret-alt-up",
          svgIcon: index_es_js_.caretAltUpIcon,
          "aria-label": r.toLanguageString(messages_a, messages_V[messages_a]),
          title: r.toLanguageString(messages_a, messages_V[messages_a]),
          onClick: this.increasePart
        }
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          tabIndex: -1,
          type: "button",
          rounded: null,
          className: "k-spinner-decrease",
          icon: "caret-alt-down",
          svgIcon: index_es_js_.caretAltDownIcon,
          "aria-label": r.toLanguageString(messages_c, messages_V[messages_c]),
          title: r.toLanguageString(messages_c, messages_V[messages_c]),
          onClick: this.decreasePart
        }
      ))
    ));
    return l ? /* @__PURE__ */ index_js_.createElement(
      kendo_react_labels_index_mjs_.FloatingLabel,
      {
        label: l,
        editorId: b,
        editorValue: p,
        editorValid: D,
        editorDisabled: this.props.disabled,
        children: S,
        style: { width: this.props.width }
      }
    ) : S;
  }
  /* Public Getters */
  /**
   * Gets the value of the DateInput.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.kendoDate && this.kendoDate.getDateObject();
  }
  /**
   * Gets the `name` property of the DateInput.
   */
  get name() {
    return this.props.name;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o.defaultProps.max;
  }
  /**
   * @hidden
   */
  get text() {
    const i = { ...DateInput_F.defaultProps, ...this.props }, {
      formatPlaceholder: t = o.defaultProps.formatPlaceholder,
      format: s = o.defaultProps.format,
      value: r,
      defaultValue: n
    } = i;
    this.kendoDate === null ? (this.kendoDate = new kendo_date_k(this.intl.bind(this), t, s), this.kendoDate.setValue(r || n || null)) : (this.kendoDate.format = s, this.kendoDate.formatPlaceholder = t), r !== void 0 && this.value !== r && this.kendoDate.setValue(r);
    const { text: a, format: l } = this.kendoDate.getTextAndFormat();
    return this.currentFormat = l, i.placeholder !== null && i.placeholder !== void 0 && !this.state.focused && !this.kendoDate.hasValue() ? i.placeholder : a;
  }
  /**
   * Represents the validity state into which the DateInput is set.
   */
  get validity() {
    const i = M(this.value, this.min, this.max) && utils_N(this.value, this.props.minTime, this.props.maxTime), t = this.props.validationMessage !== void 0, s = (!this.required || this.value !== null) && i, r = this.props.valid !== void 0 ? this.props.valid : s;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: r,
      valueMissing: this.value === null
    };
  }
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
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : o.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : o.defaultProps.required;
  }
  /**
   * @hidden
   */
  get wrapper() {
    return this._wrapper;
  }
  /**
   * @hidden
   */
  intl() {
    return (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
  }
  /*  end handlers */
  get selection() {
    let i = { start: 0, end: 0 };
    return this.element !== null && this.element.selectionStart !== void 0 && (i = { start: this.element.selectionStart, end: this.element.selectionEnd }), i;
  }
  setSelection(i) {
    this._lastSelectedSymbol = this.currentFormat[i.start], window.requestAnimationFrame(() => {
      const t = (0,index_mjs_.getActiveElement)(document);
      this.element && t === this.element && !this.props.disableSelection && this.element.setSelectionRange(i.start, i.end);
    });
  }
  triggerChange(i, t) {
    this.valueDuringOnChange = this.value, this.forceUpdate(), this.props.onChange && !(0,is_equal/* isEqual */.n)(t, this.value) && this.props.onChange.call(void 0, {
      syntheticEvent: i,
      nativeEvent: i.nativeEvent,
      value: this.value,
      target: this
      // inRange: this.props.min && this.props.max ? isInRange(value, this.props.min, this.props.max) : true
    }), this.valueDuringOnChange = void 0;
  }
  selectionBySymbol(i) {
    let t = -1, s = 0;
    for (let r = 0; r < this.currentFormat.length; r++)
      this.currentFormat[r] === i && (s = r + 1, t === -1 && (t = r));
    return t < 0 && (t = 0), { start: t, end: s };
  }
  selectionByIndex(i) {
    let t = { start: i, end: i };
    for (let s = i, r = i - 1; s < this.currentFormat.length || r >= 0; s++, r--) {
      if (s < this.currentFormat.length && this.currentFormat[s] !== "_") {
        t = this.selectionBySymbol(this.currentFormat[s]);
        break;
      }
      if (r >= 0 && this.currentFormat[r] !== "_") {
        t = this.selectionBySymbol(this.currentFormat[r]);
        break;
      }
    }
    return t;
  }
  switchDateSegment(i) {
    const { start: t, end: s } = this.selection;
    if (t < s && this.currentFormat[t] !== this.currentFormat[s - 1]) {
      this.setSelection(this.selectionByIndex(i > 0 ? t : s - 1));
      return;
    }
    const r = this.currentFormat[t];
    let n = t + i;
    for (; n > 0 && n < this.currentFormat.length && !(this.currentFormat[n] !== r && this.currentFormat[n] !== "_"); )
      n += i;
    if (this.currentFormat[n] === "_")
      return;
    let a = n;
    for (; a >= 0 && a < this.currentFormat.length && this.currentFormat[a] === this.currentFormat[n]; )
      a += i;
    n > a && (a + 1 !== t || n + 1 !== s) ? this.setSelection({ start: a + 1, end: n + 1 }) : n < a && (n !== t || a !== s) && this.setSelection({ start: n, end: a });
  }
  modifyDateSegmentValue(i, t) {
    if (!this.kendoDate)
      return;
    const s = this.value, r = this.currentFormat[this.selection.start], n = this.kendoDate.symbolMap(r), a = ((this.props.steps || {})[n] || 1) * i;
    this.kendoDate.modifyPart(r, a), this.triggerChange(t, s);
  }
};
DateInput_o.displayName = "DateInput", DateInput_o.propTypes = {
  value: prop_types_index_js_.instanceOf(Date),
  format: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.shape({
      skeleton: prop_types_index_js_.string,
      pattern: prop_types_index_js_.string,
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: prop_types_index_js_.oneOfType([
    prop_types_index_js_.oneOf(["wide", "narrow", "short", "formatPattern"]),
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
}, DateInput_o.defaultProps = {
  format: utils_l,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  formatPlaceholder: y,
  // defaultValue: null as Date | null,
  spinners: !1,
  disabled: !1,
  max: (0,clone_date/* cloneDate */.a)(L),
  min: (0,clone_date/* cloneDate */.a)(utils_H),
  minTime: (0,clone_date/* cloneDate */.a)(q),
  maxTime: (0,clone_date/* cloneDate */.a)(G),
  required: !1,
  validityStyles: !0,
  validationMessage: se,
  placeholder: null,
  // the rest of the properties are undefined by default
  ariaHasPopup: "grid"
};
let DateInput_u = DateInput_o;
const re = (0,index_mjs_.createPropsContext)(), DateInput_F = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(re, DateInput_u));
DateInput_F.displayName = "KendoReactDateInput";
(0,kendo_react_intl_index_mjs_.registerForIntl)(DateInput_u);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(DateInput_u);


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-popup_623e555c54c6ef65cefdb5a0fe790478/node_modules/@progress/kendo-react-popup/index.mjs)
var kendo_react_popup_index_mjs_ = __webpack_require__(55491);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/datepicker/ToggleButton.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const ToggleButton_e = kendo_react_buttons_index_mjs_.Button;


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/common/PickerWrap.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const PickerWrap_m = index_js_.forwardRef((e, n) => {
  const { _ref: r } = e, t = index_js_.useRef(null);
  index_js_.useImperativeHandle(n, () => t.current), index_js_.useImperativeHandle(r, () => t.current);
  const c = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(e.className, "k-picker-wrap"),
    [e.className]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      ref: t,
      id: e.id,
      style: e.style,
      className: c,
      tabIndex: e.tabIndex
    },
    e.children
  );
});


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/hooks/usePickerFloatingLabel.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const usePickerFloatingLabel_a = (e) => {
  const [t, o] = index_js_.useState(!1), r = () => {
    e.current && o(!!e.current.text);
  };
  return index_js_.useEffect(r), {
    editorValue: t
  };
}, usePickerFloatingLabel_l = (e) => {
  const { dateInput: t, ...o } = e, r = usePickerFloatingLabel_a(t);
  return /* @__PURE__ */ index_js_.createElement(
    kendo_react_labels_index_mjs_.FloatingLabel,
    {
      ...o,
      ...r
    }
  );
};


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-layout@=7.4.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-layout@7.4.0_fcc7388b6c614d76a35e3c40dc6d9bce/node_modules/@progress/kendo-react-layout/index.mjs)
var kendo_react_layout_index_mjs_ = __webpack_require__(74625);
;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/common/AdaptiveMode.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const AdaptiveMode_o = 500, AdaptiveMode_y = (c) => {
  const {
    footer: t,
    children: s,
    windowWidth: l = 0,
    navigatable: r,
    navigatableElements: m,
    expand: d,
    animation: p,
    onClose: n,
    adaptiveTitle: b,
    mobileFilter: i
  } = c, h = {
    navigatable: r || !1,
    navigatableElements: m || [],
    expand: d,
    animation: p !== !1,
    onClose: n,
    animationStyles: l <= AdaptiveMode_o ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: l <= AdaptiveMode_o ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
  };
  return /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheet, { ...h }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetHeader, { className: "k-text-center" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ index_js_.createElement("div", null, b)), /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ index_js_.createElement(
    kendo_react_buttons_index_mjs_.Button,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      icon: "x",
      svgIcon: index_es_js_.xIcon,
      onClick: n
    }
  ))), i && /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, i)), s, t && /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetFooter, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ index_js_.createElement(
    kendo_react_buttons_index_mjs_.Button,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": t.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onCancel
    },
    t.cancelText
  ), /* @__PURE__ */ index_js_.createElement(
    kendo_react_buttons_index_mjs_.Button,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": t.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: t.onApply
    },
    t.applyText
  )));
};


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/common/constants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const constants_E = 768;


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/datepicker/DatePicker.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


















const DatePicker_o = class o extends index_js_.Component {
  constructor(i) {
    super(i), this._element = null, this._dateInput = index_js_.createRef(), this._calendar = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.setCalendarRef = (t) => {
      this._calendar = t;
    }, this.nextValue = (t, s) => t.value !== void 0 ? t.value : s.value, this.nextShow = (t, s) => t.show !== void 0 ? t.show : s.show, this.renderPopup = () => {
      const { disabled: t, min: s, max: a, weekNumber: c, focusedDate: m, popupSettings: l } = this.props, { popupClass: f, ...g } = l, v = this.show, d = this.value, w = d && (0,get_date/* getDate */.p)(d), u = (0,index_mjs_.classNames)(
        "k-calendar-container k-group k-reset",
        f
      ), b = {
        popupClass: "k-datepicker-popup",
        show: v,
        anchor: this._element,
        className: u,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...g
      }, h = {
        disabled: t,
        value: w,
        min: s,
        max: a,
        weekNumber: c,
        focusedDate: m,
        className: this.mobileMode ? "k-calendar-lg" : "",
        navigation: !this.mobileMode,
        onChange: this.handleCalendarValueChange
      };
      return this.mobileMode ? /* @__PURE__ */ index_js_.createElement(this.calendarComp, { _ref: this.setCalendarRef, ...h }) : /* @__PURE__ */ index_js_.createElement(this.popupComp, { ...b }, /* @__PURE__ */ index_js_.createElement(this.calendarComp, { _ref: this.setCalendarRef, ...h }));
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, s = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t
      };
      return /* @__PURE__ */ index_js_.createElement(AdaptiveMode_y, { ...s }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderPopup()));
    }, this.handleInputValueChange = (t) => {
      this.handleValueChange(t.value, t);
    }, this.handleCalendarValueChange = (t) => {
      const s = this.mergeTime(t.value);
      this.handleValueChange(s, t);
    }, this.handleValueChange = (t, s) => {
      this.setState({
        value: (0,clone_date/* cloneDate */.a)(t || void 0)
      }), this.valueDuringOnChange = t, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: a } = this.props;
      a && a.call(void 0, {
        syntheticEvent: s.syntheticEvent,
        nativeEvent: s.nativeEvent,
        value: this.value,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleIconClick = () => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t) => {
      t.preventDefault();
    }, this.handleKeyDown = (t) => {
      const { altKey: s, keyCode: a } = t;
      if (a === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      s && (a === index_mjs_.Keys.up || a === index_mjs_.Keys.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = a === index_mjs_.Keys.up, this.setShow(a === index_mjs_.Keys.down));
    }, (0,index_mjs_.validatePackage)(e), this.state = {
      value: this.props.defaultValue || o.defaultProps.defaultValue,
      show: this.props.defaultShow || o.defaultProps.defaultShow,
      focused: !1
    };
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (index_mjs_.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the DatePickerWithoutContext.
   */
  get element() {
    return this._element;
  }
  /**
   * The mobile mode of the DatePicker.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= constants_E && this.props.adaptive);
  }
  /**
   * Gets the DateInput component inside the DatePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the Calendar component inside the DatePicker component.
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Gets the value of the DatePickerWithoutContext.
   */
  get value() {
    const i = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i !== null ? (0,clone_date/* cloneDate */.a)(i) : null;
  }
  /**
   * Gets the popup state of the DatePickerWithoutContext.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the DatePickerWithoutContext.
   */
  get name() {
    return this.props.name;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || o.defaultProps.dateInput;
  }
  get toggleButtonComp() {
    return this.props.toggleButton || o.defaultProps.toggleButton;
  }
  get calendarComp() {
    return this.props.calendar || o.defaultProps.calendar;
  }
  get popupComp() {
    return this.props.popup || o.defaultProps.popup;
  }
  get pickerWrapComp() {
    return this.props.pickerWrap || o.defaultProps.pickerWrap;
  }
  /**
   * Represents the validity state into which the DatePicker is set.
   */
  get validity() {
    const i = utils_P(this.value, this.min, this.max), t = this.props.validationMessage !== void 0, s = (!this.required || this.value !== null) && i, a = this.props.valid !== void 0 ? this.props.valid : s;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: a,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : o.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : o.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var i;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (i = this.document) != null && i.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._calendar && this._calendar.element && this.show && !this.prevShow && this._calendar.element.focus({ preventScroll: !0 }), this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput && this.dateInput.element.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var i;
    clearTimeout(this.nextTickId), (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i = o.defaultProps.size,
      rounded: t = o.defaultProps.rounded,
      fillMode: s = o.defaultProps.fillMode,
      disabled: a,
      tabIndex: c,
      title: m,
      id: l,
      format: f,
      formatPlaceholder: g,
      min: v,
      max: d,
      className: w,
      width: u,
      name: b,
      validationMessage: h,
      required: x,
      validityStyles: B,
      ariaLabelledBy: V,
      ariaDescribedBy: z,
      ariaLabel: F,
      placeholder: N,
      label: y,
      popupSettings: pe,
      defaultValue: ce,
      defaultShow: me,
      value: fe,
      popup: ge,
      weekNumber: ve,
      dateInput: we,
      calendar: be,
      toggleButton: ye,
      onChange: Ie,
      onBlur: Ce,
      onFocus: De,
      show: ke,
      onOpen: Se,
      pickerWrap: Oe,
      ...I
    } = this.props, R = this.value, C = !this.validityStyles || this.validity.valid, A = {
      disabled: a,
      format: f,
      formatPlaceholder: g,
      id: l,
      ariaLabelledBy: V,
      ariaDescribedBy: z,
      ariaLabel: F,
      max: d,
      min: v,
      name: b,
      onChange: this.handleInputValueChange,
      required: x,
      tabIndex: this.show ? -1 : c,
      title: m,
      valid: this.validity.valid,
      validationMessage: h,
      validityStyles: B,
      value: R,
      label: void 0,
      placeholder: this.state.focused ? null : N,
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null
    }, D = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_i, messages_V[messages_i]), k = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      (S) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          ...y ? {} : I,
          ref: (q) => {
            this._element = q;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-datepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[i] || i}`]: i,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[t] || t}`]: t,
              [`k-input-${s}`]: s,
              "k-invalid": !C,
              "k-required": this.required,
              "k-disabled": a
            },
            w
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: u },
          onFocus: S.onFocus,
          onBlur: S.onBlur,
          onClick: this.mobileMode ? this.handleIconClick : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            readonly: this.mobileMode,
            ariaExpanded: this.show,
            ariaControls: this._popupId,
            ...A
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          this.toggleButtonComp,
          {
            type: "button",
            icon: "calendar",
            svgIcon: index_es_js_.calendarIcon,
            title: D,
            className: "k-input-button",
            rounded: null,
            onClick: this.mobileMode ? void 0 : this.handleIconClick,
            "aria-label": D,
            onMouseDown: this.handleIconMouseDown
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return y ? /* @__PURE__ */ index_js_.createElement(
      usePickerFloatingLabel_l,
      {
        dateInput: this._dateInput,
        label: y,
        editorId: l,
        editorValid: C,
        editorDisabled: a,
        children: k,
        style: { width: u },
        ...I
      }
    ) : k;
  }
  setShow(i) {
    const { onOpen: t, onClose: s } = this.props;
    this.show !== i && (this.setState({ show: i }), i && t && t.call(void 0, {
      target: this
    }), !i && s && s.call(void 0, {
      target: this
    }));
  }
  mergeTime(i) {
    return this.value && i ? O(i, this.value) : i;
  }
  nextTick(i) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i());
  }
  calculateMedia(i) {
    for (let t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
DatePicker_o.displayName = "DatePicker", DatePicker_o.propTypes = {
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
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: prop_types_index_js_.oneOfType([
    prop_types_index_js_.oneOf(["wide", "narrow", "short", "formatPattern"]),
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"]),
  adaptive: prop_types_index_js_.bool,
  adaptiveTitle: prop_types_index_js_.string
}, DatePicker_o.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  dateInput: DateInput_F,
  calendar: Calendar_z,
  toggleButton: ToggleButton_e,
  popup: kendo_react_popup_index_mjs_.Popup,
  pickerWrap: PickerWrap_m,
  disabled: !1,
  format: "d",
  max: L,
  min: utils_H,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  required: !1,
  validityStyles: !0,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
let DatePicker_p = DatePicker_o;
const ue = (0,index_mjs_.createPropsContext)(), he = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(ue, DatePicker_p));
he.displayName = "KendoReactDatePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(DatePicker_p);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/services/DayPeriodService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const DayPeriodService_o = (s, t) => {
  const n = (0,clone_date/* cloneDate */.a)(s);
  return n.setHours(t), n;
}, DayPeriodService_m = (s) => s !== null && s < 12, DayPeriodService_l = (s) => s !== null && (!s || s > 11), DayPeriodService_g = (s, t, n) => !t && !n || s >= t && s <= n, DayPeriodService_d = (s, t, n) => !t && !n || s >= t || s <= n;
class DayPeriodService_H {
  constructor(t) {
    this.intl = t, this.min = null, this.max = null, this.part = null;
  }
  /**
   * @hidden
   */
  apply(t, n) {
    const i = t.getHours(), e = DayPeriodService_m(i), r = DayPeriodService_m(n.getHours());
    if (e && r || !e && !r)
      return t;
    const [a, h = 24] = this.normalizedRange(), u = i + (r ? -12 : 12);
    return DayPeriodService_o(t, Math.min(Math.max(a, u), h || 24));
  }
  /**
   * @hidden
   */
  configure(t) {
    const { min: n = this.min, max: i = this.max, part: e = this.part } = t;
    this.min = n, this.max = i, this.part = e;
  }
  /**
   * @hidden
   */
  data(t) {
    const n = this.part && this.part.names;
    if (!n || !this.min)
      return [];
    const i = [], [e, r] = this.normalizedRange(), a = this.intl.dateFormatNames(n);
    return DayPeriodService_m(e) && i.push({ text: a.am, value: DayPeriodService_o(this.min, e) }), DayPeriodService_l(r) && i.push({ text: a.pm, value: DayPeriodService_o(this.min, Math.max(12, r)) }), this.min.getHours() !== e ? i.reverse() : i;
  }
  /**
   * @hidden
   */
  isRangeChanged(t, n) {
    return !1;
  }
  /**
   * @hidden
   */
  limitRange(t, n, i) {
    return [t, n];
  }
  /**
   * @hidden
   */
  total() {
    const [t, n] = this.normalizedRange();
    return !t && !n ? 2 : t > 11 || n < 12 ? 1 : 2;
  }
  /**
   * @hidden
   */
  selectedIndex(t) {
    if (!this.valueInList(t) || !this.min)
      return -1;
    const n = Math.floor(t.getHours() / 12);
    return this.min.getHours() === this.normalizedRange()[0] ? n : n === 0 ? 1 : 0;
  }
  /**
   * @hidden
   */
  valueInList(t) {
    return !this.min || !this.max ? !1 : (this.min.getHours() !== this.normalizedRange()[0] ? DayPeriodService_d : DayPeriodService_g)(t.getHours(), this.min.getHours(), this.max.getHours());
  }
  normalizedRange() {
    const t = this.min.getHours(), n = this.max.getHours();
    return [
      Math.min(t, n),
      Math.max(t, n)
    ];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/services/DOMService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


class DOMService_H {
  constructor() {
    this.itemHeight = 0, this.timeListHeight = 0, this.didCalculate = !1;
  }
  ensureHeights() {
    this.timeListHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(s) {
    if (!index_mjs_.canUseDOM)
      return;
    const e = Q("div"), r = Q("span"), l = Q("ul"), n = Q("li"), c = () => n("<span>02</span>", "k-item"), a = () => l([c()], "k-reset"), m = () => e([a()], "k-content k-scrollable k-time-container"), h = e(
      [
        r("minute", "k-title"),
        e([m()], "k-time-list")
      ],
      "k-time-list-wrapper",
      { left: "-10000px", position: "absolute" }
    ), o = s && s.querySelector(".k-time-container") || document.body, i = o.appendChild(h);
    this.timeListHeight = i.querySelector(".k-scrollable").offsetHeight, this.itemHeight = i.querySelector("li").offsetHeight, o.removeChild(i), this.didCalculate = !0;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/services/HoursService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const HoursService_a = 24, HoursService_f = (n) => (t) => t % n, HoursService_g = HoursService_f(HoursService_a), HoursService_H = (n, t) => (i) => HoursService_g(n + i * t), HoursService_c = (n, t) => HoursService_g(HoursService_a + n - t), HoursService_p = (n) => (t, i) => !i || (0,get_date/* getDate */.p)(t).getTime() === (0,get_date/* getDate */.p)(i).getTime() ? t : utils_G(t, n), HoursService_L = HoursService_p(0), HoursService_R = HoursService_p(HoursService_a - 1);
class HoursService_B {
  constructor(t) {
    this.intl = t, this.boundRange = !1, this.insertUndividedMax = !1, this.min = null, this.max = null, this.step = 0, this.toListItem = null;
  }
  apply(t, i) {
    return utils_G(t, i.getHours());
  }
  configure(t) {
    const {
      boundRange: i = this.boundRange,
      insertUndividedMax: s = this.insertUndividedMax,
      min: o = this.min,
      max: e = this.max,
      part: h,
      step: M = this.step
    } = t;
    this.boundRange = i, this.insertUndividedMax = s, this.toListItem = (x) => {
      const m = utils_G(k, x);
      return {
        text: this.intl.formatDate(m, h.pattern),
        value: m
      };
    }, this.min = o, this.max = e, this.step = M;
  }
  data(t) {
    const [i] = this.range(t), s = HoursService_H(i, this.step), o = (h) => this.toListItem && this.toListItem(s(h)), e = E(0, this.countFromMin(t)).map(o);
    return this.addLast(e), t && this.addMissing(e, t), e;
  }
  isRangeChanged(t, i) {
    return !this.min || !this.max ? !1 : !(0,is_equal/* isEqual */.n)(this.min, t) || !(0,is_equal/* isEqual */.n)(this.max, i);
  }
  limitRange(t, i, s) {
    return this.boundRange ? [HoursService_L(t, s), HoursService_R(i, s)] : [t, i];
  }
  total(t) {
    const i = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, s = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + s + i;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastHour(t) === t.getHours() || !this.isMissing(t) : !0;
  }
  addLast(t, i) {
    return this.insertUndividedMax && this.isLastMissing(i) && this.toListItem && t.push(this.toListItem(this.lastHour(i))), t;
  }
  addMissing(t, i) {
    if (this.valueInList(i))
      return t;
    if (this.toListItem) {
      const s = this.toListItem(i.getHours());
      t.splice(this.selectedIndex(i), 0, s);
    }
    return t;
  }
  countFromMin(t) {
    const [i, s] = this.range(t);
    return Math.floor(HoursService_c(s, i) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(utils_G(this.max, this.lastHour(t)));
  }
  divideByStep(t) {
    return HoursService_c(t.getHours(), this.min.getHours()) / this.step;
  }
  lastHour(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [i, s] = this.limitRange(this.min, this.max, t);
    return [i.getHours(), s.getHours()];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/services/MinutesService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const MinutesService_m = 60, MinutesService_l = (n) => (t) => t % n, MinutesService_M = MinutesService_l(MinutesService_m), MinutesService_I = (n, t) => (i) => MinutesService_M(n + i * t), MinutesService_d = (n, t) => MinutesService_M(MinutesService_m + n - t), MinutesService_c = (n) => (t, i) => !i || t.getHours() === i.getHours() ? t : timepicker_utils_w(t, n), MinutesService_L = MinutesService_c(0), MinutesService_f = MinutesService_c(MinutesService_m - 1);
class MinutesService_S {
  constructor(t) {
    this.intl = t, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(t, i) {
    return timepicker_utils_w(t, i.getMinutes());
  }
  configure(t) {
    const {
      insertUndividedMax: i = this.insertUndividedMax,
      min: s = this.min,
      max: h = this.max,
      part: e,
      step: o = this.step
    } = t;
    this.insertUndividedMax = i, this.toListItem = (g) => {
      const a = timepicker_utils_w(k, g);
      return {
        text: this.intl.formatDate(a, e.pattern),
        value: a
      };
    }, this.min = s, this.max = h, this.step = o;
  }
  data(t) {
    const [i] = this.range(t), s = MinutesService_I(i, this.step), h = (o) => this.toListItem && this.toListItem(s(o)), e = E(0, this.countFromMin(t)).map(h);
    return this.addLast(e), t && this.addMissing(e, t), e;
  }
  isRangeChanged(t, i) {
    return this.min !== null && this.max !== null && (!(0,is_equal/* isEqual */.n)(this.min, t) || !(0,is_equal/* isEqual */.n)(this.max, i));
  }
  limitRange(t, i, s) {
    return [MinutesService_L(t, s), MinutesService_f(i, s)];
  }
  total(t) {
    const i = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, s = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + s + i;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastMinute(t) === t.getMinutes() || !this.isMissing(t) : !0;
  }
  addLast(t, i) {
    return this.insertUndividedMax && this.isLastMissing(i) && this.toListItem && t.push(this.toListItem(this.lastMinute(i))), t;
  }
  addMissing(t, i) {
    if (this.valueInList(i))
      return t;
    if (this.toListItem) {
      const s = this.toListItem(i.getMinutes());
      t.splice(this.selectedIndex(i), 0, s);
    }
    return t;
  }
  countFromMin(t) {
    const [i, s] = this.range(t);
    return Math.floor(MinutesService_d(s, i) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(timepicker_utils_w(this.max, this.lastMinute(t)));
  }
  divideByStep(t) {
    return MinutesService_d(t.getMinutes(), this.min.getMinutes()) / this.step;
  }
  lastMinute(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [i, s] = this.limitRange(this.min, this.max, t);
    return [i.getMinutes(), s.getMinutes()];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/services/SecondsService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const SecondsService_m = 60, SecondsService_l = (n) => (t) => t % n, SecondsService_g = SecondsService_l(SecondsService_m), SecondsService_S = (n, t) => (s) => SecondsService_g(n + s * t), SecondsService_a = (n, t) => SecondsService_g(SecondsService_m + n - t), SecondsService_u = (n) => (t, s) => !s || t.getMinutes() === s.getMinutes() && t.getHours() === s.getHours() ? t : utils_A(t, n), SecondsService_I = SecondsService_u(0), SecondsService_L = SecondsService_u(SecondsService_m - 1);
class D {
  constructor(t) {
    this.intl = t, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(t, s) {
    return utils_A(t, s.getSeconds());
  }
  configure(t) {
    const {
      insertUndividedMax: s = this.insertUndividedMax,
      min: i = this.min,
      max: o = this.max,
      part: e,
      step: h = this.step
    } = t;
    this.insertUndividedMax = s, this.toListItem = (M) => {
      const d = utils_A(k, M);
      return {
        text: this.intl.formatDate(d, e.pattern),
        value: d
      };
    }, this.min = i, this.max = o, this.step = h;
  }
  data(t) {
    const [s] = this.range(t), i = SecondsService_S(s, this.step), o = (h) => this.toListItem && this.toListItem(i(h)), e = E(0, this.countFromMin(t)).map(o);
    return this.addLast(e), t && this.addMissing(e, t), e;
  }
  isRangeChanged(t, s) {
    return this.min !== null && this.max !== null && (!(0,is_equal/* isEqual */.n)(this.min, t) || !(0,is_equal/* isEqual */.n)(this.max, s));
  }
  limitRange(t, s, i) {
    return [SecondsService_I(t, i), SecondsService_L(s, i)];
  }
  total(t) {
    const s = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, i = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + i + s;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastSecond(t) === t.getSeconds() || !this.isMissing(t) : !0;
  }
  divideByStep(t) {
    return SecondsService_a(t.getSeconds(), this.min.getSeconds()) / this.step;
  }
  addLast(t, s) {
    return this.insertUndividedMax && this.isLastMissing(s) && this.toListItem && t.push(this.toListItem(this.lastSecond(s))), t;
  }
  addMissing(t, s) {
    if (this.valueInList(s))
      return t;
    if (this.toListItem) {
      const i = this.toListItem(s.getSeconds());
      t.splice(this.selectedIndex(s), 0, i);
    }
    return t;
  }
  countFromMin(t) {
    const [s, i] = this.range(t);
    return Math.floor(SecondsService_a(i, s) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(utils_A(this.max, this.lastSecond(t)));
  }
  lastSecond(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [s, i] = this.limitRange(this.min, this.max, t);
    return [s.getSeconds(), i.getSeconds()];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/TimeList.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";













const TimeList_C = 2, TimeList_v = 0.05, TimeList_P = 100, TimeList_k = 0, TimeList_g = 9, TimeList_z = {
  [index_mjs_.Keys.end]: (r, o) => r[r.length - 1],
  [index_mjs_.Keys.home]: (r, o) => r[0],
  [index_mjs_.Keys.up]: (r, o) => r[o - 1],
  [index_mjs_.Keys.down]: (r, o) => r[o + 1]
}, TimeList_m = {
  [TimePart_e.dayperiod]: DayPeriodService_H,
  [TimePart_e.hour]: HoursService_B,
  [TimePart_e.minute]: MinutesService_S,
  [TimePart_e.second]: D
}, TimeList_n = class n extends index_js_.Component {
  constructor(o) {
    super(o), this.intl = null, this._element = null, this.service = null, this.virtualization = null, this.topOffset = 0, this.bottomOffset = 0, this.itemHeight = 0, this.listHeight = 0, this.topThreshold = 0, this.bottomThreshold = 0, this.animateToIndex = !1, this.focus = (t) => {
      Promise.resolve().then(() => {
        this.element && this.element.focus(t);
      });
    }, this.itemOffset = (t) => {
      if (!this.virtualization || !this.service)
        return -1;
      const e = this.service.selectedIndex(this.props.value), i = this.virtualization.activeIndex(), s = this.virtualization.itemOffset(i), a = Math.abs(Math.ceil(t) - s);
      if (e === i && a < TimeList_C)
        return s;
      const u = e > i;
      return u && a >= this.bottomThreshold || !u && a > this.topThreshold ? this.virtualization.itemOffset(i + 1) : s;
    }, this.calculateHeights = () => {
      this.dom.didCalculate && (this.itemHeight = this.dom.itemHeight, this.listHeight = this.dom.timeListHeight, this.topOffset = (this.listHeight - this.itemHeight) / 2, this.bottomOffset = this.listHeight - this.itemHeight, this.props.mobileMode && (this.topOffset += TimeList_g, this.bottomOffset += TimeList_g * 2), this.topThreshold = this.itemHeight * TimeList_v, this.bottomThreshold = this.itemHeight * (1 - TimeList_v));
    }, this.configureServices = ({ min: t, max: e, value: i } = this.props) => {
      if (this.service) {
        const [s, a] = this.service.limitRange(t || this.min, e || this.max, i || this.props.value);
        this.service.configure(this.serviceSettings({ min: s, max: a }));
      }
    }, this.serviceSettings = (t) => {
      const e = {
        boundRange: this.props.boundRange || n.defaultProps.boundRange,
        insertUndividedMax: !1,
        min: (0,clone_date/* cloneDate */.a)(this.min),
        max: (0,clone_date/* cloneDate */.a)(this.max),
        part: this.props.part,
        step: this.step
      }, i = Object.assign({}, e, t);
      return i.boundRange = i.part.type !== "hour" || this.props.boundRange || n.defaultProps.boundRange, i;
    }, this.handleScrollAction = ({ target: t, animationInProgress: e }) => {
      if (!(!this.virtualization || !this.service) && t && !e) {
        this.animateToIndex = !1;
        const i = this.virtualization.itemIndex(this.itemOffset(t.scrollTop)), s = this.service.data(this.props.value)[i];
        this.handleChange(s);
      }
    }, this.handleFocus = (t) => {
      const { onFocus: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleBlur = (t) => {
      const { onBlur: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleMouseOver = () => {
      if (!this._element)
        return;
      const t = (0,index_mjs_.getActiveElement)(document);
      document && t !== this._element && this.props.show && this._element.focus({ preventScroll: !0 });
    }, this.handleKeyDown = (t) => {
      if (!this.service)
        return;
      const { keyCode: e } = t;
      (e === index_mjs_.Keys.down || e === index_mjs_.Keys.up || e === index_mjs_.Keys.end || e === index_mjs_.Keys.home) && t.preventDefault();
      const s = (TimeList_z[t.keyCode] || index_mjs_.noop)(
        this.service.data(this.props.value),
        this.service.selectedIndex(this.props.value)
      );
      s && this.handleChange(s);
    }, this.handleChange = U((t) => {
      if (!this.service)
        return;
      const e = this.service.apply(this.props.value, t.value);
      if (this.props.value.getTime() === e.getTime())
        return;
      const { onChange: i } = this.props;
      i && i.call(void 0, e);
    }, TimeList_P), this.dom = new DOMService_H();
  }
  get element() {
    return this._element;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get min() {
    return this.props.min || n.defaultProps.min;
  }
  get max() {
    return this.props.max || n.defaultProps.max;
  }
  get step() {
    return this.props.step !== void 0 && this.props.step !== 0 ? Math.floor(this.props.step) : n.defaultProps.step;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      this._element && (this.dom.calculateHeights(this._element), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    if (!this.virtualization || !this.service)
      return;
    const o = this.service.selectedIndex(this.props.value);
    this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](o), this.animateToIndex = !0;
  }
  /**
   * @hidden
   */
  render() {
    if (!this.props.part.type || !TimeList_m[this.props.part.type])
      return;
    this.calculateHeights(), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.service = new TimeList_m[this.props.part.type](this.intl), this.configureServices();
    const o = this.service.data(this.props.value), t = "translateY(" + this.topOffset + "px)", e = this.service.total(this.props.value), i = /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        style: { transform: t, msTransform: t },
        className: "k-reset"
      },
      o.map((s, a) => /* @__PURE__ */ index_js_.createElement(
        "li",
        {
          key: a,
          className: "k-item",
          onClick: () => {
            this.handleChange(s);
          }
        },
        /* @__PURE__ */ index_js_.createElement("span", null, s.text)
      ))
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-time-list",
        id: String(this.props.id || ""),
        tabIndex: this.props.disabled ? -1 : 0,
        ref: (s) => {
          this._element = s;
        },
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseOver: this.handleMouseOver
      },
      this.dom.didCalculate ? /* @__PURE__ */ index_js_.createElement(
        Virtualization_g,
        {
          bottomOffset: this.bottomOffset,
          children: i,
          className: "k-time-container",
          itemHeight: this.itemHeight,
          maxScrollDifference: this.listHeight,
          onScrollAction: this.handleScrollAction,
          ref: (s) => {
            this.virtualization = s;
          },
          role: "presentation",
          skip: TimeList_k,
          tabIndex: -1,
          take: e,
          topOffset: this.topOffset,
          total: e
        }
      ) : /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-container" }, i)
    );
  }
};
TimeList_n.propTypes = {
  id: prop_types_index_js_.number,
  max: prop_types_index_js_.instanceOf(Date),
  min: prop_types_index_js_.instanceOf(Date),
  part: function(o, t, e) {
    const i = o[t];
    if (!i || !TimeList_m[i.type])
      throw new Error(`
                    Invalid prop '${t}' supplied to ${e}.
                    Supported part types are hour|minute|second|dayperiod.
                `);
    return null;
  },
  step: function(o, t, e) {
    const i = o[t];
    if (i !== void 0 && i <= 0)
      throw new Error(`
                    Invalid prop '${t}' supplied to ${e}.
                    ${t} cannot be less than 1.
                `);
    return null;
  },
  value: prop_types_index_js_.instanceOf(Date),
  smoothScroll: prop_types_index_js_.bool,
  show: prop_types_index_js_.bool
}, TimeList_n.defaultProps = {
  boundRange: !1,
  max: G,
  min: k,
  step: 1,
  smoothScroll: !0
};
let TimeList_d = TimeList_n;
(0,kendo_react_intl_index_mjs_.registerForIntl)(TimeList_d);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/TimePart.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";











const TimePart_p = new RegExp(`${TimePart_e.hour}|${TimePart_e.minute}|${TimePart_e.second}|${TimePart_e.dayperiod}|literal`), TimePart_a = class a extends index_js_.Component {
  constructor(i) {
    super(i), this._element = null, this._nowButton = null, this.dateFormatParts = [], this.timeLists = [], this.focus = (s, e) => {
      Promise.resolve().then(() => {
        e && this._nowButton && this._nowButton.element && this._nowButton.element.focus();
        const o = this.timeLists[0];
        !e && this.state.activeListIndex === -1 && !this.hasActiveButton() && o && o.element && o.focus(s);
      });
    }, this.timeFormatReducer = (s, e) => s + e.pattern, this.timeFormatFilter = (s, e, o) => {
      const r = e >= 1 && o[e - 1];
      return r && r && s.type === "literal" ? TimePart_p.test(r.type || "") : TimePart_p.test(s.type || "");
    }, this.focusList = (s) => {
      this.timeLists.length && this.timeLists.reduce(this.listReducer, []).map((e) => s === 1 ? e.next : e.prev).map((e) => e && e.element && e.element.focus({ preventScroll: !0 }));
    }, this.listReducer = (s, e, o, r) => s.length || e.props.id !== this.state.activeListIndex ? s : [{
      next: r[o + 1] || e,
      prev: r[o - 1] || e
    }], this.showNowButton = () => !this.hasSteps() && this.props.nowButton && utils_N(utils_B(), this.min, this.max), this.handleKeyDown = (s) => {
      const { keyCode: e } = s;
      switch (e) {
        case index_mjs_.Keys.left:
          s.preventDefault(), this.focusList(
            0
            /* Left */
          );
          return;
        case index_mjs_.Keys.right:
          s.preventDefault(), this.focusList(
            1
            /* Right */
          );
          return;
        default:
          return;
      }
    }, this.handleListBlur = () => {
      this.nextTick(() => {
        this.setState({ activeListIndex: -1 });
      });
    }, this.handleListFocus = (s) => {
      clearTimeout(this.nextTickId), this.setState({
        activeListIndex: s
      });
    }, this.handleChange = (s) => {
      const { onChange: e } = this.props;
      e && e.call(void 0, s);
    }, this.snapTime = utils_x(
      R(this.props.steps, this.props.min || a.defaultProps.min)
    ), this.state = {
      activeListIndex: -1
    }, this.hasActiveButton = this.hasActiveButton.bind(this);
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    return F(
      this.snapTime((0,clone_date/* cloneDate */.a)(this.props.value || k)),
      this.min,
      this.max
    );
  }
  get intl() {
    return (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
  }
  get min() {
    return this.snapTime(this.props.min || a.defaultProps.min);
  }
  get max() {
    return this.snapTime(this.props.max || a.defaultProps.max);
  }
  get steps() {
    return this.props.steps || a.defaultProps.steps;
  }
  get boundRange() {
    return this.props.boundRange !== void 0 ? this.props.boundRange : a.defaultProps.boundRange;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  componentDidMount() {
    const { onMount: i } = this.props;
    i && i.call(void 0, this.value);
  }
  /**
   * @hidden
   */
  render() {
    const {
      format: i,
      smoothScroll: s,
      onNowClick: e,
      className: o,
      disabled: r,
      mobileMode: d,
      show: I,
      onNowKeyDown: T
    } = this.props;
    this.snapTime = utils_x(R(this.steps, this.min)), this.dateFormatParts = this.intl.splitDateFormat(i || a.defaultProps.format).filter(this.timeFormatFilter);
    const N = (0,index_mjs_.classNames)(
      {
        "k-disabled": r,
        "k-time-part": d
      },
      o
    );
    this.timeLists = [];
    const f = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), g = f.toLanguageString(messages_m, messages_V[messages_m]);
    return /* @__PURE__ */ index_js_.createElement("div", { className: N }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-header" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-title" }, this.intl.formatDate(this.value, this.dateFormatParts.reduce(this.timeFormatReducer, ""))), this.showNowButton() && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        ref: (m) => {
          this._nowButton = m;
        },
        className: "k-time-now",
        fillMode: "flat",
        themeColor: "primary",
        title: g,
        onKeyDown: T,
        "aria-label": g,
        onClick: e,
        tabIndex: r ? -1 : 0
      },
      f.toLanguageString(messages_g, messages_V[messages_g])
    )), /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-time-list-container",
        onKeyDown: this.handleKeyDown
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-time-highlight" }),
      this.dateFormatParts.map((m, l) => m.type !== "literal" ? /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          key: l,
          className: (0,index_mjs_.classNames)("k-time-list-wrapper", {
            "k-focus": l === this.state.activeListIndex
          }),
          role: "presentation",
          tabIndex: -1
        },
        /* @__PURE__ */ index_js_.createElement("span", { className: "k-title", onMouseDown: (h) => {
          h.preventDefault();
        } }, this.intl.dateFieldName(m)),
        /* @__PURE__ */ index_js_.createElement(
          TimeList_d,
          {
            min: this.min,
            max: this.max,
            boundRange: this.boundRange,
            part: m,
            step: m.type ? this.steps[m.type] : 1,
            smoothScroll: s,
            ref: (h) => {
              h && this.timeLists.push(h);
            },
            id: l,
            onFocus: () => {
              this.handleListFocus(l);
            },
            onBlur: this.handleListBlur,
            onChange: this.handleChange,
            value: this.value,
            disabled: r,
            show: I,
            mobileMode: d
          }
        )
      ) : /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          key: l,
          className: "k-time-separator"
        },
        m.pattern
      ))
    ));
  }
  nextTick(i) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i());
  }
  hasActiveButton() {
    const i = (0,index_mjs_.getActiveElement)(document);
    return this._nowButton && i === this._nowButton.element;
  }
  hasSteps() {
    const i = Object.keys(this.steps);
    return i.length !== i.reduce((s, e) => s + this.steps[e], 0);
  }
};
TimePart_a.propTypes = {
  cancelButton: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  format: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.shape({
      skeleton: prop_types_index_js_.string,
      pattern: prop_types_index_js_.string,
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
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
}, TimePart_a.defaultProps = {
  value: null,
  disabled: !1,
  nowButton: !0,
  cancelButton: !0,
  format: "hh:mm a",
  min: q,
  max: G,
  steps: {},
  boundRange: !1
};
let TimePart_c = TimePart_a;
(0,kendo_react_intl_index_mjs_.registerForIntl)(TimePart_c);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(TimePart_c);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/TimeSelector.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";










const TimeSelector_r = class r extends index_js_.Component {
  constructor(i) {
    super(i), this._element = null, this._cancelButton = null, this._acceptButton = null, this.timePart = null, this.focusActiveList = () => {
      this.timePart && this.timePart.focus({ preventScroll: !0 });
    }, this.handleKeyDown = (e) => {
      const { keyCode: n } = e;
      switch (n) {
        case index_mjs_.Keys.enter:
          this.hasActiveButton() || this.handleAccept(e);
          return;
        default:
          return;
      }
    }, this.revertToNowButton = (e) => {
      const { keyCode: n, shiftKey: o } = e;
      !o && n === index_mjs_.Keys.tab && (e.preventDefault(), this.props.nowButton !== !1 ? this.timePart && this.timePart.focus({ preventScroll: !0 }, !0) : this.timePart && this.timePart.focus({ preventScroll: !0 }));
    }, this.handleNowKeyDown = (e) => {
      var l;
      const { keyCode: n, shiftKey: o } = e;
      o && n === index_mjs_.Keys.tab ? (e.preventDefault(), this._acceptButton && ((l = this._acceptButton.element) == null || l.focus({ preventScroll: !0 }))) : n === index_mjs_.Keys.enter && (e.stopPropagation(), this.handleNowClick(e));
    }, this.handleAccept = (e) => {
      const n = this.mergeValue(
        (0,clone_date/* cloneDate */.a)(this.value || utils_B()),
        this.timePart ? this.timePart.value : this.current
      );
      this.setState({ value: n }), this.valueDuringOnChange = n;
      const { onChange: o } = this.props;
      o && o.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleReject = (e) => {
      this.setState({ current: this.value });
      const { onReject: n } = this.props;
      n && n.call(void 0, e);
    }, this.handleNowClick = (e) => {
      const n = this.mergeValue(
        (0,clone_date/* cloneDate */.a)(this.value || utils_B()),
        utils_B()
      );
      this.setState({
        current: n,
        value: n
      }), this.valueDuringOnChange = n;
      const { onChange: o } = this.props;
      o && o.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleChange = (e) => {
      this.setState({ current: e });
      const { handleTimeChange: n } = this.props;
      n && n.call(void 0, {
        time: e
      });
    }, this.dateFormatParts = this.intl.splitDateFormat(this.props.format || r.defaultProps.format), this.mergeValue = timepicker_utils_(utils_S(this.dateFormatParts)), this.hasActiveButton = this.hasActiveButton.bind(this), this.state = {
      current: this.props.value || k,
      value: this.props.value || r.defaultProps.value
    };
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    const i = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i !== null ? (0,clone_date/* cloneDate */.a)(i) : null;
  }
  get intl() {
    return (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
  }
  get current() {
    return this.state.current !== null ? (0,clone_date/* cloneDate */.a)(this.state.current) : null;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  /**
   * @hidden
   */
  render() {
    const {
      format: i,
      cancelButton: e,
      disabled: n,
      tabIndex: o,
      className: l,
      smoothScroll: B,
      min: k,
      max: y,
      boundRange: C,
      nowButton: D,
      steps: O,
      show: N,
      mobileMode: P
    } = this.props, f = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), m = f.toLanguageString(messages_p, messages_V[messages_p]), p = f.toLanguageString(messages_k, messages_V[messages_k]);
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (s) => {
          this._element = s;
        },
        tabIndex: n ? void 0 : o || 0,
        className: (0,index_mjs_.classNames)("k-timeselector", l, {
          "k-disabled": n
        }),
        onKeyDown: this.handleKeyDown
      },
      /* @__PURE__ */ index_js_.createElement(
        TimePart_c,
        {
          ref: (s) => {
            this.timePart = s;
          },
          value: this.current,
          onChange: this.handleChange,
          onNowClick: this.handleNowClick,
          format: i,
          smoothScroll: B,
          min: k,
          max: y,
          boundRange: C,
          disabled: n,
          nowButton: D,
          steps: O,
          show: N,
          mobileMode: P,
          onNowKeyDown: this.handleNowKeyDown
        }
      ),
      this.props.footer && /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-footer k-actions k-actions-stretched" }, e && /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (s) => {
            this._cancelButton = s;
          },
          className: "k-time-cancel",
          onClick: this.handleReject,
          title: m,
          "aria-label": m
        },
        m
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (s) => {
            this._acceptButton = s;
          },
          className: "k-time-accept",
          themeColor: "primary",
          onClick: this.handleAccept,
          onKeyDown: this.revertToNowButton,
          title: p,
          "aria-label": p
        },
        p
      ))
    );
  }
  nextTick(i) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => i());
  }
  hasActiveButton() {
    if (!this._acceptButton || !this._acceptButton.element)
      return !1;
    const i = (0,index_mjs_.getActiveElement)(document);
    return this._acceptButton && i === this._acceptButton.element || this._cancelButton && i === this._cancelButton.element;
  }
};
TimeSelector_r.propTypes = {
  cancelButton: prop_types_index_js_.bool,
  className: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  format: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.shape({
      skeleton: prop_types_index_js_.string,
      pattern: prop_types_index_js_.string,
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
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
}, TimeSelector_r.defaultProps = {
  value: null,
  disabled: !1,
  cancelButton: !0,
  format: "t",
  min: q,
  max: G,
  boundRange: !1,
  footer: !0
};
let TimeSelector_u = TimeSelector_r;
(0,kendo_react_intl_index_mjs_.registerForIntl)(TimeSelector_u);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(TimeSelector_u);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/timepicker/TimePicker.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


















const TimePicker_n = class n extends index_js_.Component {
  constructor(i) {
    super(i), this._element = null, this._dateInput = index_js_.createRef(), this._timeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.renderTimeSelector = () => {
      const { smoothScroll: t, cancelButton: s, nowButton: o, disabled: r, format: h, steps: l } = this.props;
      return /* @__PURE__ */ index_js_.createElement(
        TimeSelector_u,
        {
          ref: this.setTimeSelectorRef,
          className: this.mobileMode ? "k-reset k-timeselector-lg" : "",
          mobileMode: this.mobileMode,
          show: this.show,
          cancelButton: s,
          disabled: r,
          nowButton: o,
          format: h,
          min: this.min,
          max: this.max,
          steps: l,
          smoothScroll: t,
          value: this.value,
          footer: !this.mobileMode,
          handleTimeChange: this.mobileMode && this.handleTimeChange,
          onChange: this.handleValueChange,
          onReject: this.handleValueReject
        }
      );
    }, this.renderPopup = () => {
      const { popupClass: t, ...s } = this.popupSettings, o = (0,index_mjs_.classNames)(
        "k-group k-reset",
        t
      ), r = {
        popupClass: "k-timepicker-popup",
        show: this.show,
        animate: this.element !== null,
        anchor: this.element,
        className: o,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...s
      };
      return this.props.popup ? /* @__PURE__ */ index_js_.createElement(this.props.popup, { ...r }, this.renderTimeSelector()) : /* @__PURE__ */ index_js_.createElement(kendo_react_popup_index_mjs_.Popup, { ...r }, this.renderTimeSelector());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, s = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t,
        footer: {
          cancelText: this.localizationService.toLanguageString(S, messages_V[messages_p]),
          onCancel: this.handleValueReject,
          applyText: this.localizationService.toLanguageString(messages_k, messages_V[messages_k]),
          onApply: (o) => this.handleValueChange(o)
        }
      };
      return /* @__PURE__ */ index_js_.createElement(AdaptiveMode_y, { ...s }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderTimeSelector()));
    }, this.setTimeSelectorRef = (t) => {
      this._timeSelector = t;
    }, this.nextValue = (t, s) => t.value !== void 0 ? t.value : s.value, this.nextShow = (t, s) => t.show !== void 0 ? t.show : s.show, this.handleInputValueChange = (t) => {
      const s = this.mergeTime(t.value);
      this.handleValueChange({ ...t, value: s });
    }, this.handleTimeChange = (t) => {
      this.setState({ candidate: t.time });
    }, this.handleValueChange = (t) => {
      this.setState({
        value: (0,clone_date/* cloneDate */.a)(t.value || this.state.candidate)
      }), this.valueDuringOnChange = t.value, this.showDuringOnChange = !1, this.shouldFocusDateInput = !0;
      const { onChange: s } = this.props, o = this.value || this.state.candidate;
      s && s.call(void 0, {
        syntheticEvent: t.syntheticEvent,
        nativeEvent: t.nativeEvent,
        value: o,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleValueReject = (t) => {
      this.setShow(!1);
    }, this.handleIconClick = (t) => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (t) => {
      t.preventDefault();
    }, this.handleKeyDown = (t) => {
      const { altKey: s, keyCode: o } = t;
      if (o === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      s && (o === index_mjs_.Keys.up || o === index_mjs_.Keys.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = o === index_mjs_.Keys.up, this.setShow(o === index_mjs_.Keys.down));
    }, (0,index_mjs_.validatePackage)(e), this.state = {
      value: this.props.defaultValue || n.defaultProps.defaultValue,
      show: this.props.defaultShow || n.defaultProps.defaultShow,
      focused: !1,
      candidate: null
    }, this.normalizeTime = this.normalizeTime.bind(this), this.setShow = this.setShow.bind(this), this.mergeTime = this.mergeTime.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (index_mjs_.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the TimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the TimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the TimeSelector component inside the TimePicker component.
   */
  get timeSelector() {
    return this._timeSelector;
  }
  /**
   * Gets the value of the TimePicker.
   */
  get value() {
    const i = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return i !== null ? (0,clone_date/* cloneDate */.a)(i) : null;
  }
  /**
   * Gets the popup state of the TimeSelector.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the TimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the TimePicker is set.
   */
  get validity() {
    const i = this.value && this.normalizeTime(this.value), t = this.normalizeTime(this.min), s = this.normalizeTime(this.max), o = timepicker_utils_P(i, t, s), r = this.props.validationMessage !== void 0, h = (!this.required || this.value !== null) && o, l = this.props.valid !== void 0 ? this.props.valid : h;
    return {
      customError: r,
      rangeOverflow: utils_O(i, s),
      rangeUnderflow: utils_v(i, t),
      valid: l,
      valueMissing: this.value === null
    };
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= constants_E && this.props.adaptive);
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : n.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : n.defaultProps.required;
  }
  get popupSettings() {
    return this.props.popupSettings || n.defaultProps.popupSettings;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : n.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : n.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || n.defaultProps.dateInput;
  }
  get localizationService() {
    return (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var i;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (i = this.document) != null && i.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this._timeSelector && this.show && !this.prevShow ? this._timeSelector.focusActiveList() : this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput && this.dateInput.element.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var i;
    (i = this.document) != null && i.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: i = n.defaultProps.size,
      rounded: t = n.defaultProps.rounded,
      fillMode: s = n.defaultProps.fillMode,
      disabled: o,
      tabIndex: r,
      title: h,
      id: l,
      className: M,
      format: T,
      formatPlaceholder: C,
      width: D,
      name: O,
      steps: k,
      validationMessage: P,
      required: z,
      validityStyles: x,
      ariaLabelledBy: E,
      ariaDescribedBy: R
    } = this.props, c = !this.validityStyles || this.validity.valid, B = {
      disabled: o,
      format: T,
      formatPlaceholder: C,
      id: l,
      ariaLabelledBy: E,
      ariaDescribedBy: R,
      max: this.normalizeTime(this.max),
      min: this.normalizeTime(this.min),
      name: O,
      onChange: this.handleInputValueChange,
      required: z,
      steps: k,
      tabIndex: this.show ? -1 : r,
      title: h,
      valid: this.validity.valid,
      validationMessage: P,
      validityStyles: x,
      value: this.value && this.normalizeTime(this.value),
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaHasPopup: "dialog",
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      readonly: this.mobileMode
    }, V = this.localizationService.toLanguageString(S, messages_V[S]), F = this.localizationService.toLanguageString(messages_w, messages_V[messages_w]), g = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: N, onBlur: A }) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          id: this.props.id,
          ref: (L) => {
            this._element = L;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-timepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[i] || i}`]: i,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[t] || t}`]: t,
              [`k-input-${s}`]: s,
              "k-invalid": !c,
              "k-required": this.required,
              "k-disabled": this.props.disabled
            },
            M
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: D },
          onFocus: N,
          onBlur: A,
          onClick: this.mobileMode ? this.handleIconClick : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ...B
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          kendo_react_buttons_index_mjs_.Button,
          {
            tabIndex: -1,
            type: "button",
            icon: "clock",
            svgIcon: index_es_js_.clockIcon,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleIconClick,
            title: F,
            className: "k-input-button",
            rounded: null,
            "aria-label": V
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ index_js_.createElement(
      usePickerFloatingLabel_l,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: l,
        editorValid: c,
        editorDisabled: this.props.disabled,
        children: g,
        style: { width: this.props.width }
      }
    ) : g;
  }
  normalizeTime(i) {
    return O(k, i);
  }
  setShow(i) {
    const { onOpen: t, onClose: s } = this.props;
    this.show !== i && (this.setState({ show: i }), i && t && t.call(void 0, {
      target: this
    }), !i && s && s.call(void 0, {
      target: this
    }));
  }
  mergeTime(i) {
    return this.value && i ? O(this.value, i) : i;
  }
  calculateMedia(i) {
    for (let t of i)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
TimePicker_n.displayName = "TimePicker", TimePicker_n.propTypes = {
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
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: prop_types_index_js_.oneOfType([
    prop_types_index_js_.oneOf(["wide", "narrow", "short", "formatPattern"]),
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
}, TimePicker_n.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "t",
  max: G,
  min: q,
  popupSettings: {},
  tabIndex: 0,
  steps: {},
  required: !1,
  validityStyles: !0,
  dateInput: DateInput_F,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
let TimePicker_p = TimePicker_n;
const de = (0,index_mjs_.createPropsContext)(), TimePicker_ue = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(de, TimePicker_p));
TimePicker_ue.displayName = "KendoReactTimePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(TimePicker_p);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/HorizontalViewList.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const HorizontalViewList_n = 2, HorizontalViewList_i = class i extends index_js_.Component {
  constructor(a) {
    super(a), this._element = null, this.isActive = !1, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const e = this._element.querySelector("td.k-focus"), t = this._element.querySelector(".k-state-pending-focus");
      e && e[0] && e[0].classList.remove("k-focus"), t && t.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const e = this._element.querySelector("td.k-focus");
      e && e.classList.remove("k-focus"), this.isActive = !1;
    }, this.rotateSelectionRange = (e) => {
      if (e.start === null || e.end === null)
        return e;
      const t = e.end < e.start;
      return {
        start: t ? e.end : e.start,
        end: t ? e.start : e.end
      };
    }, this.handleDateChange = (e, t = !1) => {
      const { onChange: o } = this.props;
      if (o) {
        const c = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: (0,clone_date/* cloneDate */.a)(e.value),
          target: this,
          isTodayClick: t
        };
        o.call(void 0, c);
      }
    };
  }
  get element() {
    return this._element;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum_c.month);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : i.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : i.defaultProps.max;
  }
  componentDidUpdate() {
    this.isActive && this.focusActiveDate();
  }
  render() {
    const a = this.props.allowReverse ? this.rotateSelectionRange(this.props.selectionRange) : this.props.selectionRange, e = (0,index_mjs_.classNames)(
      "k-calendar-view k-align-items-start k-justify-content-center",
      {
        "k-vstack": this.props.verticalView,
        "k-hstack": !this.props.verticalView,
        "k-calendar-monthview": this.props.activeView === CalendarViewEnum_c.month,
        "k-calendar-yearview": this.props.activeView === CalendarViewEnum_c.year,
        "k-calendar-decadeview": this.props.activeView === CalendarViewEnum_c.decade,
        "k-calendar-centuryview": this.props.activeView === CalendarViewEnum_c.century
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (t) => {
          this._element = t;
        },
        className: e
      },
      this.props.dates.map((t) => /* @__PURE__ */ index_js_.createElement("table", { className: "k-calendar-table k-content", key: t.getTime(), role: "grid" }, /* @__PURE__ */ index_js_.createElement(
        m,
        {
          bus: this.props.bus,
          service: this.props.service,
          key: t.getTime(),
          direction: "horizontal",
          activeView: this.props.activeView,
          cellUID: this.props.cellUID,
          viewDate: t,
          min: this.min,
          max: this.max,
          focusedDate: this.props.focusedDate,
          selectionRange: a,
          selectedDate: this.props.value,
          showWeekNumbers: this.weekNumber,
          onChange: this.handleDateChange,
          onCellEnter: this.props.onCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell
        }
      )))
    );
  }
};
HorizontalViewList_i.defaultProps = {
  showWeekNumbers: !1,
  views: HorizontalViewList_n,
  take: HorizontalViewList_n,
  allowReverse: !0,
  min: utils_H,
  max: L
};
let HorizontalViewList_l = HorizontalViewList_i;


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/calendar/components/MultiViewCalendar.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

















const MultiViewCalendar_k = (o = MultiViewCalendar_p.defaultProps.min, i = MultiViewCalendar_p.defaultProps.max, a) => a instanceof Date && !Array.isArray(a) && j((0,get_date/* getDate */.p)(a), o, i) ? (0,get_date/* getDate */.p)(a) : null, MultiViewCalendar_ = (o = MultiViewCalendar_p.defaultProps.min, i = MultiViewCalendar_p.defaultProps.max, a) => Array.isArray(a) ? a.filter((h) => j(h, o, i)).map((h) => (0,get_date/* getDate */.p)(h)) : null, MultiViewCalendar_K = (o) => typeof o == "object" && !(o instanceof Date) && o !== null && !Array.isArray(o) ? o : SelectionRange_l, MultiViewCalendar_z = (o, i, a) => o || i && i[0] || a && a.start, MultiViewCalendar_re = (o, i) => o.start === null && i === null ? "start" : o.end === null ? "end" : "start", MultiViewCalendar_c = class c extends index_js_.Component {
  constructor(i) {
    super(i), this.dates = [], this.selectedDate = null, this.selectedMultiple = null, this.selectedRange = SelectionRange_l, this._focusedDate = /* @__PURE__ */ new Date(), this.cellUID = this.props.id + "-cell-uid", this.activeRangeEnd = "start", this._element = null, this.intl = null, this.localization = null, this.service = null, this.calendarViewList = null, this.isActive = !1, this.calculateFocusFromValue = !0, this.focus = () => {
      this._element && this._element.focus();
    }, this.clampRange = (e) => ({ start: e, end: null }), this.rangeWithFocused = (e, t) => ({
      start: e.start,
      end: e.end === null && e.start !== null && this.isActive ? t : e.end
    }), this.generateRange = (e, t) => {
      const { end: r, start: l } = t, m = t.start !== null && e.getTime() <= t.start.getTime();
      return !this.props.allowReverse && m ? { start: e, end: this.selectedRange.start } : this.activeRange !== "end" ? { start: e, end: r } : { start: l || this.selectedDate, end: e };
    }, this.canNavigate = (e) => {
      if (!this.service)
        return !1;
      const t = this.service.move(this.focusedDate, e);
      return this.min <= t && t <= this.max || this.service.isInSameView(t, this.min) || this.service.isInSameView(t, this.max);
    }, this.navigate = (e, t) => {
      this.calculateFocusFromValue = !1;
      const r = this.move(e, t);
      this.setState({ navigateDate: r, focusedDate: r });
    }, this.move = (e, t) => this.clampDate(this.service.move(t, e)), this.clampDate = (e) => K(e, this.min, this.max), this.shouldAutoCorrect = (e, t) => {
      const { end: r, start: l } = t;
      return this.activeRange !== "end" ? r !== null && e > r : l !== null && e < l;
    }, this.handleCellEnter = (e) => {
      this.props.mode === "range" && (this.calculateFocusFromValue = !1, this.setState({
        focusedDate: e
      }));
    }, this.handleMouseDown = (e) => {
      e.preventDefault();
    }, this.handleClick = (e) => {
      this._element && this._element.focus({ preventScroll: !0 });
    }, this.handleFocus = (e) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: t } = this.props;
      t && t.call(void 0, e);
    }, this.handleBlur = (e) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: t } = this.props;
      t && t.call(void 0, e);
    }, this.handleTodayClick = (e) => {
      this.todayIsInRange && this.handleDateChange(e);
    }, this.handlePrevButtonClick = () => {
      const e = NavigationAction_w.PrevView;
      if (this.state.activeView > 0 && this.focusedDate.getFullYear() > this.dates[0].getFullYear())
        this.navigate(e, this.move(e, this.focusedDate));
      else {
        const t = this.isInMonth(this.focusedDate, this.dates[1]) ? this.move(e, this.focusedDate) : this.focusedDate;
        this.navigate(e, t);
      }
    }, this.handleNextButtonClick = () => {
      this.navigate(NavigationAction_w.NextView, this.focusedDate);
    }, this.handleKeyDown = (e) => {
      const { keyCode: r, ctrlKey: l, metaKey: m } = e;
      if (r === 84) {
        const n = X();
        this.calculateFocusFromValue = !1, this.setState({ focusedDate: n, navigateDate: n });
      }
      if ((l || m) && (r === index_mjs_.Keys.left && this.handlePrevButtonClick(), r === index_mjs_.Keys.right && this.handleNextButtonClick()), r === index_mjs_.Keys.enter) {
        const n = {
          syntheticEvent: e,
          nativeEvent: e.nativeEvent,
          value: this.focusedDate,
          target: this
        };
        this.handleDateChange(n);
      } else {
        const n = K(
          this.navigation.move(
            this.focusedDate,
            this.navigation.action(e),
            this.state.activeView,
            this.service,
            e
          ),
          this.min,
          this.max
        );
        if ((0,is_equal_date/* isEqualDate */.$)(this.focusedDate, n))
          return;
        this.dates && this.service && !this.service.isInArray(n, this.dates) && this.setState({ navigateDate: n }), this.calculateFocusFromValue = !1, this.setState({ focusedDate: n });
      }
      e.preventDefault();
    }, this.handleViewChange = ({ view: e }) => {
      this.calculateFocusFromValue = !1, this.setState((t) => ({ activeView: e, navigateDate: t.focusedDate }));
    }, this.handleDateChange = (e) => {
      const t = (0,clone_date/* cloneDate */.a)(e.value), r = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (r)
        if (e.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, e.syntheticEvent), this.setState({ focusedDate: t, navigateDate: t });
          return;
        }
      this.calculateFocusFromValue = !0;
      let l;
      switch (this.props.mode) {
        case "single":
          l = (0,clone_date/* cloneDate */.a)(e.value);
          break;
        case "multiple":
          if (Array.isArray(this.selectedMultiple)) {
            const n = this.selectedMultiple.slice();
            let v = -1;
            n.forEach((U, $) => {
              (0,is_equal_date/* isEqualDate */.$)(U, e.value) && (v = $);
            }), v !== -1 ? n.splice(v, 1) : n.push((0,clone_date/* cloneDate */.a)(e.value)), l = n.slice();
          } else
            this.selectedDate ? l = [(0,clone_date/* cloneDate */.a)(this.selectedDate), (0,clone_date/* cloneDate */.a)(e.value)] : l = [(0,clone_date/* cloneDate */.a)(e.value)];
          break;
        case "range": {
          l = this.selectedRange.start !== null && this.selectedRange.end !== null && this.activeRange === "start" ? this.clampRange(e.value) : this.generateRange(e.value, this.selectedRange), this.activeRangeEnd = this.activeRange !== "end" ? "end" : "start";
          break;
        }
        default:
          l = (0,clone_date/* cloneDate */.a)(e.value);
          break;
      }
      this.valueDuringOnChange = l, e.isTodayClick && this.setState({ navigateDate: t }), this.setState({ value: l, focusedDate: t }), this.valueDuringOnChange = l;
      const { onChange: m } = this.props;
      if (m) {
        const n = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: l,
          target: this
        };
        m.call(void 0, n);
      }
      this.valueDuringOnChange = void 0;
    };
    const a = i.value !== void 0 ? i.value : i.defaultValue || c.defaultProps.defaultValue, h = MultiViewCalendar_k(this.min, this.max, a), g = MultiViewCalendar_(this.min, this.max, a), b = MultiViewCalendar_K(a), F = MultiViewCalendar_z(h, g, b), w = utils_d(
      CalendarViewEnum_c[i.defaultActiveView],
      this.bottomView,
      this.topView
    ), V = K(
      i.focusedDate || F || X(),
      this.min,
      this.max
    );
    this.state = {
      value: a,
      activeView: w,
      focusedDate: V,
      navigateDate: V
    }, this.activeRangeEnd = MultiViewCalendar_re(b, h), this.bus = new BusViewService_V(this.handleViewChange), this.navigation = new NavigationService_p(this.bus), this.calculateFocusFromValue = !1, this.lastView = w, this.lastViewsCount = this.props.views || HorizontalViewList_l.defaultProps.views;
  }
  get wrapperID() {
    return this.props.id + "-wrapper-id";
  }
  get isRtl() {
    return this.props.dir === "rtl";
  }
  /**
   * Gets the wrapping element of the MultiViewCalendar component.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the value of the MultiViewCalendar.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  /**
   * Gets the current focused date of the MultiViewCalendar.
   */
  get focusedDate() {
    return (0,clone_date/* cloneDate */.a)(this._focusedDate);
  }
  get min() {
    return (0,get_date/* getDate */.p)(this.props.min !== void 0 ? this.props.min : c.defaultProps.min);
  }
  get max() {
    return (0,get_date/* getDate */.p)(this.props.max !== void 0 ? this.props.max : c.defaultProps.max);
  }
  get bottomView() {
    return CalendarViewEnum_c[this.props.bottomView !== void 0 ? this.props.bottomView : c.defaultProps.bottomView];
  }
  get topView() {
    return CalendarViewEnum_c[this.props.topView !== void 0 ? this.props.topView : c.defaultProps.topView];
  }
  get activeRange() {
    return this.props.activeRangeEnd !== void 0 ? this.props.activeRangeEnd : this.activeRangeEnd;
  }
  get todayIsInRange() {
    return j(X(), (0,get_date/* getDate */.p)(this.min), (0,get_date/* getDate */.p)(this.max));
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.calculateFocusFromValue = !0;
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
    const i = MultiViewCalendar_k(this.min, this.max, this.value);
    this.calculateFocusFromValue = !!(this.selectedDate && i && this.selectedDate.getTime() && i.getTime()), this.lastView = this.state.activeView, this.lastViewsCount = this.props.views || HorizontalViewList_l.defaultProps.views;
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.localization = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), this.bus.configure(this.bottomView, this.topView);
    const i = utils_d(this.state.activeView, this.bottomView, this.topView);
    this.service = this.bus.service(i, this.intl), this.selectedDate = MultiViewCalendar_k(this.min, this.max, this.value), this.selectedMultiple = MultiViewCalendar_(this.min, this.max, this.value), this.selectedRange = MultiViewCalendar_K(this.value);
    const a = MultiViewCalendar_z(this.selectedDate, this.selectedMultiple, this.selectedRange);
    this._focusedDate = K(
      this.calculateFocusFromValue && a !== null ? a : this.state.focusedDate,
      this.min,
      this.max
    );
    const h = (0,index_mjs_.classNames)(
      "k-widget k-calendar k-calendar-range",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), g = this.rangeWithFocused(this.selectedRange, this.focusedDate), b = this.localization.toLanguageString(messages_e, messages_V[messages_e]), F = this.localization.toLanguageString(messages_t, messages_V[messages_t]), w = !this.canNavigate(NavigationAction_w.PrevView), V = !this.canNavigate(NavigationAction_w.NextView), e = { "aria-disabled": w }, t = { "aria-disabled": V }, r = this.lastView !== i, l = this.dates && this.isInMonth(this.state.navigateDate, this.dates[0]), m = this.lastViewsCount !== this.props.views;
    (!l || r || m) && (this.dates = this.service.datesList(
      this.state.navigateDate,
      this.props.views || HorizontalViewList_l.defaultProps.views
    ));
    const n = (0,clone_date/* cloneDate */.a)(this.dates && this.dates[0] ? this.dates[0] : X());
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (v) => {
          this._element = v;
        },
        className: h,
        id: this.props.id || this.wrapperID,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.disabled ? void 0 : this.props.tabIndex,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseDown: this.handleMouseDown,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        "aria-disabled": this.props.disabled,
        dir: this.props.dir
      },
      /* @__PURE__ */ index_js_.createElement(
        Header_n,
        {
          key: `.kendo.calendar.header.${n.getTime()}`,
          activeView: i,
          currentDate: n,
          min: this.min,
          max: this.max,
          rangeLength: this.props.views,
          bus: this.bus,
          service: this.service,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode,
          commands: /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
            kendo_react_buttons_index_mjs_.Button,
            {
              type: "button",
              className: "k-calendar-nav-prev",
              icon: this.isRtl ? "chevron-right" : "chevron-left",
              svgIcon: this.isRtl ? index_es_js_.chevronRightIcon : index_es_js_.chevronLeftIcon,
              fillMode: "flat",
              title: b,
              disabled: w,
              onClick: this.handlePrevButtonClick,
              ...e
            }
          ), /* @__PURE__ */ index_js_.createElement(
            TodayCommand_a,
            {
              min: this.min,
              max: this.max,
              onClick: this.handleTodayClick,
              disabled: !this.todayIsInRange
            }
          ), /* @__PURE__ */ index_js_.createElement(
            kendo_react_buttons_index_mjs_.Button,
            {
              type: "button",
              className: "k-calendar-nav-next",
              icon: this.isRtl ? "chevron-left" : "chevron-right",
              svgIcon: this.isRtl ? index_es_js_.chevronLeftIcon : index_es_js_.chevronRightIcon,
              fillMode: "flat",
              title: F,
              disabled: V,
              onClick: this.handleNextButtonClick,
              ...t
            }
          ))
        }
      ),
      /* @__PURE__ */ index_js_.createElement(
        HorizontalViewList_l,
        {
          ref: (v) => {
            this.calendarViewList = v;
          },
          dates: this.dates,
          activeView: i,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          bus: this.bus,
          service: this.service,
          selectionRange: g,
          value: this.selectedMultiple || this.selectedDate,
          cellUID: this.cellUID,
          views: this.props.views,
          onChange: this.handleDateChange,
          showWeekNumbers: this.props.weekNumber,
          onCellEnter: this.handleCellEnter,
          cell: this.props.cell,
          weekCell: this.props.weekCell,
          headerTitle: this.props.headerTitle,
          verticalView: this.props.mobileMode
        }
      )
    );
  }
  // protected isListInRange = (list: Date[]): boolean => {
  //     return this.min < list[0]
  //         && this.max > list[Math.max(0, (this.props.views || MultiViewCalendarWithoutContext.defaultProps.views) - 1)];
  // };
  isInMonth(i, a) {
    return !!a && (0,first_day_of_month/* firstDayOfMonth */.G)(a) <= i && i <= (0,last_day_of_month/* lastDayOfMonth */.W)(a);
  }
};
MultiViewCalendar_c.displayName = "MultiViewCalendar", MultiViewCalendar_c.propTypes = {
  activeRangeEnd: prop_types_index_js_.oneOf(["start", "end"]),
  allowReverse: prop_types_index_js_.bool,
  bottomView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
  className: prop_types_index_js_.string,
  defaultActiveView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
  defaultValue: prop_types_index_js_.oneOfType([
    W(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.shape({
      start: W(prop_types_index_js_.instanceOf(Date)),
      end: W(prop_types_index_js_.instanceOf(Date))
    })
  ]),
  disabled: prop_types_index_js_.bool,
  focusedDate: prop_types_index_js_.instanceOf(Date),
  id: prop_types_index_js_.string,
  ariaLabelledBy: prop_types_index_js_.string,
  ariaDescribedBy: prop_types_index_js_.string,
  max: prop_types_index_js_.instanceOf(Date),
  min: prop_types_index_js_.instanceOf(Date),
  mode: prop_types_index_js_.oneOf(["single", "multiple", "range"]),
  onBlur: prop_types_index_js_.func,
  onChange: prop_types_index_js_.func,
  onFocus: prop_types_index_js_.func,
  tabIndex: prop_types_index_js_.number,
  topView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
  value: prop_types_index_js_.oneOfType([
    W(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.shape({
      start: W(prop_types_index_js_.instanceOf(Date).isRequired),
      end: W(prop_types_index_js_.instanceOf(Date).isRequired)
    })
  ]),
  views: (i, a, h) => {
    const g = i[a];
    return g !== void 0 && g < 1 ? new Error(
      `Invalid prop '${a}' supplied to'${h}'. The '${a}' property cannot be less than 1'`
    ) : null;
  },
  weekNumber: prop_types_index_js_.bool,
  dir: prop_types_index_js_.string
}, MultiViewCalendar_c.defaultProps = {
  disabled: !1,
  min: utils_H,
  max: L,
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  tabIndex: 0,
  bottomView: "month",
  views: 2,
  allowReverse: !1
};
let MultiViewCalendar_p = MultiViewCalendar_c;
const oe = (0,index_mjs_.createPropsContext)(), MultiViewCalendar_he = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(oe, MultiViewCalendar_p));
MultiViewCalendar_he.displayName = "KendoReactMultiViewCalendar";
(0,kendo_react_intl_index_mjs_.registerForIntl)(MultiViewCalendar_p);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(MultiViewCalendar_p);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/daterangepicker/DateRangePicker.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

















const DateRangePicker_o = class o extends index_js_.Component {
  constructor(a) {
    super(a), this._element = null, this._calendar = null, this._startDateInput = index_js_.createRef(), this._endDateInput = index_js_.createRef(), this.shouldFocusDateInput = !1, this.shouldFocusCalendar = !1, this.focus = () => {
      this.startDateInput && this.startDateInput.focus();
    }, this.setCalendarRef = (t) => {
      this._calendar = t;
    }, this.focusCalendarElement = () => {
      this._calendar && this._calendar.element && this._calendar.element.focus({ preventScroll: !0 });
    }, this.calculateValue = (t, s) => (t.value !== void 0 ? t.value : s.value) || SelectionRange_l, this.calculateShow = (t, s) => t.show !== void 0 ? t.show : s.show, this.renderCalendar = () => {
      const t = this.value || SelectionRange_l, s = {
        min: this.min,
        max: this.max,
        allowReverse: this.props.allowReverse,
        mode: "range",
        focusedDate: this.props.focusedDate,
        disabled: this.props.disabled,
        className: this.mobileMode ? "k-calendar-lg" : "",
        mobileMode: this.mobileMode,
        ...this.props.calendarSettings,
        value: t,
        dir: this.props.dir,
        onChange: this.handleCalendarChange
      };
      return this.props.calendar ? /* @__PURE__ */ index_js_.createElement(this.props.calendar, { ...s }) : /* @__PURE__ */ index_js_.createElement(MultiViewCalendar_he, { ...s, ref: this.setCalendarRef });
    }, this.renderPopup = () => {
      const t = {
        popupClass: "k-daterangepicker-popup",
        animate: this._element !== null,
        anchor: this._element,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...this.props.popupSettings,
        show: this.show
      };
      return this.props.popup ? /* @__PURE__ */ index_js_.createElement(this.props.popup, { ...t }, this.renderCalendar()) : /* @__PURE__ */ index_js_.createElement(kendo_react_popup_index_mjs_.Popup, { ...t }, this.renderCalendar());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, s = {
        expand: this.show,
        onClose: (n) => this.handleCancel(n),
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t,
        footer: {
          cancelText: this.localizationService.toLanguageString(N, messages_V[N]),
          onCancel: this.handleCancel,
          applyText: this.localizationService.toLanguageString(messages_P, messages_V[messages_P]),
          onApply: this.handleBlur
        }
      };
      return /* @__PURE__ */ index_js_.createElement(AdaptiveMode_y, { ...s }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-scrollable-wrap" }, this.renderCalendar())));
    }, this.handleReverseClick = (t) => {
      const s = {
        start: this.value.end,
        end: this.value.start
      }, n = {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent
      };
      this.handleChange(s, n);
    }, this.handleReverseMouseDown = (t) => {
      t.preventDefault();
    }, this.handleFocus = (t) => {
      clearTimeout(this.nextTickId), this.shouldFocusDateInput || this.mobileMode && this.setState({ currentValue: this.value });
      const { onFocus: s } = this.props;
      s && s.call(void 0, t);
    }, this.handleClick = () => {
      this.shouldFocusDateInput || this.setShow(!0);
    }, this.handleBlur = (t) => {
      this.nextTick(() => {
        this.setShow(!1);
      });
      const { onBlur: s } = this.props;
      s && s.call(void 0, t);
    }, this.handleCancel = (t) => {
      this.nextTick(() => {
        this.setShow(!1), this.setState({ currentValue: SelectionRange_l });
      });
      const { onCancel: s } = this.props;
      s && s.call(void 0, t);
    }, this.handleEndChange = (t) => {
      const s = {
        start: this.value.start,
        end: (0,clone_date/* cloneDate */.a)(t.value || void 0)
      };
      this.handleChange(s, t);
    }, this.handleStartChange = (t) => {
      const s = {
        start: (0,clone_date/* cloneDate */.a)(t.value || void 0),
        end: this.value.end
      };
      this.handleChange(s, t);
    }, this.extractRangeFromValue = (t) => {
      if (!Array.isArray(t.value) && !(t.value instanceof Date))
        return t.value || SelectionRange_l;
      const s = Array.isArray(t.value) ? t.value[0] : t.value;
      return {
        start: this.value.end !== null ? s : this.value.start,
        end: this.value.start !== null ? s : this.value.end
      };
    }, this.handleCalendarChange = (t) => {
      const s = this.extractRangeFromValue(t);
      this.handleChange(s, t);
    }, this.handleKeyDown = (t) => {
      const { keyCode: s, altKey: n } = t;
      s === index_mjs_.Keys.esc ? (t.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1)) : n && s === index_mjs_.Keys.down ? (t.preventDefault(), this.shouldFocusCalendar = !0, this.setShow(!0), this.focusCalendarElement()) : n && s === index_mjs_.Keys.up && (t.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1));
    }, this.handleChange = (t, s) => {
      this.setState({ value: t }), this.valueDuringOnChange = t;
      const { onChange: n } = this.props;
      if (n) {
        const u = {
          syntheticEvent: s.syntheticEvent,
          nativeEvent: s.nativeEvent,
          value: this.value,
          show: this.show,
          target: this
        };
        n.call(void 0, u);
      }
      this.valueDuringOnChange = void 0;
    }, (0,index_mjs_.validatePackage)(e), this.state = {
      show: this.props.show || this.props.defaultShow || o.defaultProps.defaultShow,
      value: this.props.value || this.props.defaultValue || o.defaultProps.defaultValue,
      currentValue: SelectionRange_l
    }, this.nextTick = this.nextTick.bind(this), this.setShow = this.setShow.bind(this), this.focusCalendarElement = this.focusCalendarElement.bind(this), this.focusDateInputElement = this.focusDateInputElement.bind(this);
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get _startInputId() {
    return this.props.id + "-start-input-id";
  }
  get _endInputId() {
    return this.props.id + "-end-input-id";
  }
  /**
   * Gets the wrapping element of the DateRangePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the start DateInput component inside the DatePicker component.
   */
  get startDateInput() {
    return this._startDateInput.current;
  }
  /**
   * Gets the end DateInput component inside the DatePicker component.
   */
  get endDateInput() {
    return this._endDateInput.current;
  }
  /**
   * Gets the MultiVieCalendar inside the DateRangePicker.
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Gets the value of the DateRangePicker.
   */
  get value() {
    return (this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value) || SelectionRange_l;
  }
  /**
   * Gets the popup state of the DateRangePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o.defaultProps.max;
  }
  get document() {
    if (index_mjs_.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  get localizationService() {
    return (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
  }
  /**
   * The mobile mode of the DateRangePicker.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= constants_E && this.props.adaptive);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var a;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (a = this.document) != null && a.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.shouldFocusCalendar && this.focusCalendarElement(), this.shouldFocusDateInput && this.focusDateInputElement(), this.shouldFocusCalendar = !1, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var a;
    clearTimeout(this.nextTickId), (a = this.document) != null && a.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const a = this.value || SelectionRange_l, t = this.mobileMode && this.show ? this.state.currentValue : a, s = (this.props.startDateInputSettings || {}).id || this._startInputId, n = (this.props.endDateInputSettings || {}).id || this._endInputId, u = (0,index_mjs_.classNames)(
      "k-daterangepicker",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), y = this.localizationService.toLanguageString(messages_o, messages_V[messages_o]), x = this.localizationService.toLanguageString(l, messages_V[l]), R = this.localizationService.toLanguageString(messages_s, messages_V[messages_s]), f = {
      disableSelection: this.mobileMode && !0,
      label: y,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._startInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      ...this.props.startDateInputSettings,
      value: t.start,
      onChange: this.handleStartChange
    }, g = {
      disableSelection: this.mobileMode && !0,
      label: x,
      format: this.props.format,
      min: this.min,
      max: this.max,
      id: this._endInputId,
      disabled: this.props.disabled,
      valid: this.props.valid,
      tabIndex: this.props.tabIndex,
      ariaExpanded: this.show,
      ...this.props.endDateInputSettings,
      value: t.end,
      onChange: this.handleEndChange
    }, M = /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        className: "k-select",
        fillMode: "flat",
        title: (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_r, messages_V[messages_r]),
        onMouseDown: this.handleReverseMouseDown,
        onClick: this.handleReverseClick,
        "aria-controls": s + " " + n,
        "aria-label": (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_r, messages_V[messages_r])
      },
      /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { style: { transform: "rotate(90deg)" }, name: "arrows-swap", icon: index_es_js_.arrowsSwapIcon })
    );
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        ref: (O) => {
          this._element = O;
        },
        className: u,
        style: this.props.style,
        id: this.props.id,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: this.props.tabIndex,
        onFocus: this.handleFocus,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        dir: this.props.dir
      },
      this.props.startDateInput ? /* @__PURE__ */ index_js_.createElement(this.props.startDateInput, { ...f }) : /* @__PURE__ */ index_js_.createElement(
        DateInput_F,
        {
          ...f,
          ref: this._startDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId,
          readonly: this.mobileMode
        }
      ),
      (this.props.allowReverse || this.props.calendarSettings && this.props.calendarSettings.allowReverse) && this.props.swapButton ? M : R,
      this.props.endDateInput ? /* @__PURE__ */ index_js_.createElement(this.props.endDateInput, { ...g }) : /* @__PURE__ */ index_js_.createElement(
        DateInput_F,
        {
          ...g,
          ref: this._endDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId,
          readonly: this.mobileMode
        }
      ),
      !this.mobileMode && this.renderPopup()
    ), this.mobileMode && this.renderAdaptivePopup());
  }
  focusDateInputElement() {
    if (!document || !this.startDateInput || !this.startDateInput.element || !this.endDateInput || !this.endDateInput.element)
      return;
    const a = (0,index_mjs_.getActiveElement)(document);
    (this.value.start === null || this.value.end !== null) && a !== this.endDateInput.element ? this.startDateInput.element.focus({ preventScroll: !0 }) : a !== this.startDateInput.element && this.endDateInput.element.focus({ preventScroll: !0 });
  }
  nextTick(a) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => a());
  }
  setShow(a) {
    const { onOpen: t, onClose: s } = this.props;
    this.show !== a && (this.setState({ show: a }), a && t && t.call(void 0, {
      target: this
    }), !a && s && s.call(void 0, {
      target: this
    }));
  }
  calculateMedia(a) {
    for (let t of a)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
DateRangePicker_o.displayName = "DateRangePicker", DateRangePicker_o.propTypes = {
  allowReverse: prop_types_index_js_.bool,
  calendarSettings: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  defaultShow: prop_types_index_js_.bool,
  defaultValue: prop_types_index_js_.shape({
    start: W(prop_types_index_js_.instanceOf(Date).isRequired),
    end: W(prop_types_index_js_.instanceOf(Date).isRequired)
  }),
  disabled: prop_types_index_js_.bool,
  endDateInputSettings: prop_types_index_js_.shape(DateInput_u.propTypes),
  focusedDate: prop_types_index_js_.instanceOf(Date),
  format: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.shape({
      skeleton: prop_types_index_js_.string,
      pattern: prop_types_index_js_.string,
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
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
    start: W(prop_types_index_js_.instanceOf(Date).isRequired),
    end: W(prop_types_index_js_.instanceOf(Date).isRequired)
  })
}, DateRangePicker_o.defaultProps = {
  allowReverse: !1,
  defaultShow: !1,
  defaultValue: SelectionRange_l,
  disabled: !1,
  format: "d",
  max: L,
  min: utils_H,
  swapButton: !1
};
let DateRangePicker_p = DateRangePicker_o;
const Z = (0,index_mjs_.createPropsContext)(), DateRangePicker_j = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(Z, DateRangePicker_p));
DateRangePicker_j.displayName = "KendoReactDateRangePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(DateRangePicker_p);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/datetimepicker/DateTimeSelector.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";










const DateTimeSelector_f = class f extends index_js_.Component {
  constructor(a) {
    super(a), this._calendar = null, this._timePart = null, this._cancelButton = null, this._acceptButton = null, this._dateButtonRef = null, this._calendarWrap = null, this.shouldFocusPart = !1, this.focus = (t) => {
      Promise.resolve().then(() => {
        this.state.tab === "time" && this._timePart && this._timePart.focus(t);
        const e = this.calendarElement();
        this.state.tab === "date" && e && e.focus(t);
      });
    }, this.calendarElement = () => this._calendar && this._calendar.element || this._calendarWrap && this._calendarWrap.querySelector(".k-widget.k-calendar"), this.move = (t) => {
      if (t === "right" && this.state.tab === "time" || t === "left" && this.state.tab === "date")
        return;
      const e = t === "left" ? "date" : "time";
      this.shouldFocusPart = !0, this.setState({ tab: e });
    }, this.dateTimeFooter = () => {
      const { cancelButton: t } = this.props, e = this.localizationService.toLanguageString(u, messages_V[u]), s = this.localizationService.toLanguageString(messages_C, messages_V[messages_C]);
      return /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-footer k-actions k-actions-stretched" }, t && /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (n) => {
            this._cancelButton = n;
          },
          className: "k-time-cancel",
          onClick: this.handleReject,
          onKeyDown: this.handleCancelKeyDown,
          title: e,
          "aria-label": e
        },
        e
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          themeColor: "primary",
          ref: (n) => {
            this._acceptButton = n;
          },
          className: "k-time-accept",
          disabled: !this.hasDateValue,
          onClick: this.handleAccept,
          onKeyDown: this.handleSetKeyDown,
          title: s,
          "aria-label": s
        },
        s
      ));
    }, this.handleReject = (t) => {
      this.setState({ dateValue: this.props.value, timeValue: this.props.value || k });
      const e = this.mergeDate(this.props.value, this.props.value || k);
      if (this.props.onReject) {
        const s = {
          nativeEvent: t.nativeEvent,
          syntheticEvent: t,
          target: this,
          value: e
        };
        this.props.onReject.call(void 0, s);
      }
    }, this.handleAccept = (t, e) => {
      if (!this.state.dateValue || !this.state.timeValue || !this.hasDateValue)
        return;
      const s = this.mergeDate(this.state.dateValue, e || this.state.timeValue);
      this.props.onChange.call(void 0, {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent,
        value: s,
        target: this
      });
    }, this.handleNowClick = (t) => {
      this.setState({ timeValue: utils_B() }), this.handleAccept(t, utils_B());
    }, this.handleCalendarValueChange = (t) => {
      t.syntheticEvent.stopPropagation(), this.setState({ dateValue: t.value, tab: "time" }), this.shouldFocusPart = !0;
    }, this.handleTimeListContainerChange = (t) => {
      this.setState({ timeValue: t });
    }, this.handleDateClick = (t) => {
      t.stopPropagation(), this.move("left");
    }, this.handleTimeClick = (t) => {
      t.stopPropagation(), this.move("right");
    }, this.handleKeyDown = (t) => {
      const { keyCode: e, altKey: s } = t;
      if (!this.props.disabled)
        switch (e) {
          case index_mjs_.Keys.enter:
            !this.hasActiveButton() && this.hasDateValue && this.handleAccept(t);
            return;
          case index_mjs_.Keys.left:
            if (!s)
              return;
            this.move("left");
            return;
          case index_mjs_.Keys.right:
            if (!s)
              return;
            this.move("right");
            return;
          default:
            return;
        }
    }, this.handleCancelKeyDown = (t) => {
      const { keyCode: e } = t;
      e === index_mjs_.Keys.tab && this._dateButtonRef && this._dateButtonRef.element && !this.hasDateValue && (t.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleSetKeyDown = (t) => {
      const { keyCode: e } = t;
      e === index_mjs_.Keys.tab && this._dateButtonRef && this._dateButtonRef.element && (t.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleDateKeyDown = (t) => {
      var n, h, r, c;
      const { keyCode: e, shiftKey: s } = t;
      s && e === index_mjs_.Keys.tab && (t.stopPropagation(), this.hasDateValue ? (c = (r = this._acceptButton) == null ? void 0 : r.element) == null || c.focus() : (h = (n = this._cancelButton) == null ? void 0 : n.element) == null || h.focus()), e === index_mjs_.Keys.enter && (t.stopPropagation(), this.move("left"));
    }, this.handleTimeKeyDown = (t) => {
      const { keyCode: e } = t;
      e === index_mjs_.Keys.enter && (t.stopPropagation(), this.move("right"));
    }, this.handleTimePartMount = (t) => {
      this.setState({ timeValue: t });
    }, this.state = {
      tab: "date",
      dateValue: this.props.value,
      timeValue: this.props.value || k
    };
  }
  get calendar() {
    return this._calendar;
  }
  get timePart() {
    return this._timePart;
  }
  get hasDateValue() {
    return this.state.dateValue !== null;
  }
  get localizationService() {
    return (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
  }
  componentDidUpdate(a, t) {
    var e, s;
    this.shouldFocusPart && this.focus({ preventScroll: !0 }), (((e = a.value) == null ? void 0 : e.getTime()) !== ((s = this.props.value) == null ? void 0 : s.getTime()) || this.state.tab !== t.tab && this.props.value) && this.setState({
      dateValue: a.value && this.props.value && (0,is_equal_date/* isEqualDate */.$)(a.value, this.props.value) ? this.state.dateValue : this.props.value,
      timeValue: this.props.value || k
    }), this.shouldFocusPart = !1;
  }
  render() {
    const {
      disabled: a,
      min: t,
      max: e,
      weekNumber: s,
      focusedDate: n,
      format: h,
      mobileMode: r,
      footerActions: c
    } = this.props, T = (0,index_mjs_.classNames)(
      {
        "k-date-tab": this.state.tab === "date",
        "k-time-tab": this.state.tab === "time",
        "k-disabled": a
      },
      "k-datetime-wrap"
    ), V = this.localizationService.toLanguageString(messages_T, messages_V[messages_T]), w = this.localizationService.toLanguageString(v, messages_V[v]), g = {
      min: t,
      max: e,
      weekNumber: s,
      focusedDate: n,
      disabled: a || this.state.tab !== "date",
      value: this.state.dateValue,
      onChange: this.handleCalendarValueChange,
      navigation: !1,
      tabIndex: a || this.state.tab !== "date" ? -1 : void 0,
      mobileMode: r
    };
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        onKeyDown: this.handleKeyDown,
        className: T,
        tabIndex: -1
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-buttongroup" }, /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.ButtonGroup, { width: "100%" }, /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          ref: (l) => this._dateButtonRef = l,
          type: "button",
          selected: this.state.tab === "date",
          togglable: !0,
          onClick: this.handleDateClick,
          onKeyDown: this.handleDateKeyDown
        },
        V
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          selected: this.state.tab === "time",
          togglable: !0,
          onClick: this.handleTimeClick,
          onKeyDown: this.handleTimeKeyDown
        },
        w
      ))),
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-selector" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-calendar-wrap", ref: (l) => this._calendarWrap = l }, this.props.calendar ? /* @__PURE__ */ index_js_.createElement(this.props.calendar, { key: this.state.tab, ...g }) : /* @__PURE__ */ index_js_.createElement(
        Calendar_z,
        {
          key: this.state.tab,
          ref: (l) => {
            this._calendar = l;
          },
          ...g
        }
      )), /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-time-wrap" }, /* @__PURE__ */ index_js_.createElement("div", { className: r ? "k-reset k-timeselector-lg k-timeselector" : "" }, /* @__PURE__ */ index_js_.createElement(
        TimePart_c,
        {
          key: 1,
          onNowClick: this.handleNowClick,
          disabled: a || this.state.tab !== "time",
          ref: (l) => {
            this._timePart = l;
          },
          min: this.minTime || q,
          max: this.maxTime || G,
          steps: this.props.steps,
          value: this.state.timeValue,
          format: h,
          onChange: this.handleTimeListContainerChange,
          onMount: this.handleTimePartMount,
          mobileMode: r
        }
      )))),
      c && this.dateTimeFooter()
    );
  }
  get minTime() {
    return this.props.minTime !== void 0 ? this.props.minTime : this.normalizeRange(this.props.min, this.state.dateValue);
  }
  get maxTime() {
    return this.props.maxTime !== void 0 ? this.props.maxTime : this.normalizeRange(this.props.max, this.state.dateValue);
  }
  normalizeRange(a, t) {
    return (0,is_equal_date/* isEqualDate */.$)(a, t || X()) ? a : null;
  }
  hasActiveButton() {
    if (!this._acceptButton)
      return !1;
    const a = (0,index_mjs_.getActiveElement)(document);
    return this._acceptButton && a === this._acceptButton.element || this._cancelButton && a === this._cancelButton.element;
  }
  mergeTime(a, t) {
    return a && t ? O(t, a) : t;
  }
  mergeDate(a, t) {
    return a ? O(a || X(), t) : t;
  }
};
DateTimeSelector_f.defaultProps = {
  footerActions: !0
};
let DateTimeSelector_p = DateTimeSelector_f;
(0,kendo_react_intl_index_mjs_.registerForLocalization)(DateTimeSelector_p);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/datetimepicker/DateTimePicker.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


















const DateTimePicker_o = class o extends index_js_.Component {
  constructor(t) {
    super(t), this._element = null, this._dateInput = index_js_.createRef(), this._dateTimeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      const i = this.dateInputElement();
      i && i.focus();
    }, this.renderPicker = () => {
      const {
        disabled: i,
        minTime: s,
        maxTime: n,
        format: d,
        calendar: l,
        cancelButton: r,
        weekNumber: f,
        focusedDate: g
      } = this.props;
      return /* @__PURE__ */ index_js_.createElement(
        DateTimeSelector_p,
        {
          ref: (v) => {
            this._dateTimeSelector = v;
          },
          cancelButton: r,
          steps: this.props.steps,
          value: this.value,
          onChange: this.handleValueChange,
          onReject: this.handleReject,
          disabled: i,
          weekNumber: f,
          min: this.min,
          max: this.max,
          minTime: s,
          maxTime: n,
          focusedDate: g,
          format: d,
          calendar: l,
          mobileMode: this.mobileMode,
          footerActions: !this.mobileMode
        }
      );
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: i = 0 } = this.state, s = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(u, messages_V[u]), n = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_C, messages_V[messages_C]), d = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: i,
        footer: {
          cancelText: s,
          onCancel: (l) => {
            var r;
            return (r = this._dateTimeSelector) == null ? void 0 : r.handleReject(l);
          },
          applyText: n,
          onApply: (l) => {
            var r;
            return (r = this._dateTimeSelector) == null ? void 0 : r.handleAccept(l);
          }
        }
      };
      return /* @__PURE__ */ index_js_.createElement(AdaptiveMode_y, { ...d }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderPicker()));
    }, this.handleReject = () => {
      this.shouldFocusDateInput = !0, this.setShow(!1);
    }, this.handleValueChange = (i) => {
      this.setState({
        value: (0,clone_date/* cloneDate */.a)(i.value || void 0)
      }), this.valueDuringOnChange = i.value, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: s } = this.props;
      s && s.call(void 0, {
        syntheticEvent: i.syntheticEvent,
        nativeEvent: i.nativeEvent,
        value: this.value,
        show: this.show,
        target: this
      }), this.valueDuringOnChange = void 0, this.showDuringOnChange = void 0, this.setShow(!1);
    }, this.handleFocus = () => {
      this.setState({ focused: !0 });
    }, this.handleBlur = () => {
      this.setState({ focused: !1 }), this.setShow(!1);
    }, this.handleDateIconClick = () => {
      this.props.disabled || (this.shouldFocusDateInput = !0, this.setShow(!this.show));
    }, this.handleIconMouseDown = (i) => {
      i.preventDefault();
    }, this.handleKeyDown = (i) => {
      const { altKey: s, keyCode: n } = i;
      if (n === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      s && (n === index_mjs_.Keys.up || n === index_mjs_.Keys.down) && (i.preventDefault(), i.stopPropagation(), this.shouldFocusDateInput = n === index_mjs_.Keys.up, this.setShow(n === index_mjs_.Keys.down));
    }, this.dateInputElement = () => this.dateInput && this.dateInput.element || this.element && this.element.querySelector(".k-dateinput > input.k-input-inner"), (0,index_mjs_.validatePackage)(e), this.state = {
      value: this.props.defaultValue || o.defaultProps.defaultValue,
      show: this.props.defaultShow || o.defaultProps.defaultShow,
      focused: !1
    };
  }
  get _popupId() {
    return this.props.id + "-popup-id";
  }
  get document() {
    if (index_mjs_.canUseDOM)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * Gets the wrapping element of the DateTimePicker.
   */
  get element() {
    return this._element;
  }
  /**
   * Gets the DateInput component inside the DateTimePicker component.
   */
  get dateInput() {
    return this._dateInput.current;
  }
  /**
   * Gets the value of the DateTimePicker.
   */
  get value() {
    const t = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return t !== null ? (0,clone_date/* cloneDate */.a)(t) : null;
  }
  /**
   * Gets the popup state of the DateTimePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  /**
   * Gets the `name` property of the DateTimePicker.
   */
  get name() {
    return this.props.name;
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= constants_E && this.props.adaptive);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : o.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : o.defaultProps.max;
  }
  /**
   * Represents the validity state into which the DateTimePicker is set.
   */
  get validity() {
    const t = utils_P(this.value, this.min, this.max) && utils_N(this.value, this.props.minTime || q, this.props.maxTime || G), i = this.props.validationMessage !== void 0, s = (!this.required || this.value !== null) && t, n = this.props.valid !== void 0 ? this.props.valid : s;
    return {
      customError: i,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: n,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : o.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : o.defaultProps.required;
  }
  /**
   * @hidden
   */
  get dateInputComp() {
    return this.props.dateInput || o.defaultProps.dateInput;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var t;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (t = this.document) != null && t.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const t = this.dateInputElement();
    this._dateTimeSelector && this.show && !this.prevShow && this._dateTimeSelector.focus({ preventScroll: !0 }), t && !this.show && this.shouldFocusDateInput && t.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var t;
    clearTimeout(this.nextTickId), (t = this.document) != null && t.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: t = o.defaultProps.size,
      rounded: i = o.defaultProps.rounded,
      fillMode: s = o.defaultProps.fillMode,
      disabled: n,
      tabIndex: d,
      title: l,
      id: r,
      format: f,
      formatPlaceholder: g,
      min: v,
      max: M,
      className: k,
      width: O,
      name: P,
      validationMessage: C,
      required: x,
      validityStyles: E,
      minTime: F,
      maxTime: R,
      ariaLabelledBy: z,
      ariaDescribedBy: A,
      popup: B = kendo_react_popup_index_mjs_.Popup
    } = this.props, w = !this.validityStyles || this.validity.valid, N = {
      id: r,
      ariaLabelledBy: z,
      ariaDescribedBy: A,
      format: f,
      formatPlaceholder: g,
      disabled: n,
      title: l,
      validityStyles: E,
      validationMessage: C,
      required: x,
      min: v,
      max: M,
      minTime: F,
      maxTime: R,
      name: P,
      tabIndex: this.show ? -1 : d,
      valid: this.validity.valid,
      value: this.value,
      onChange: this.handleValueChange,
      steps: this.props.steps,
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null
    }, b = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onSyncFocus: this.props.onFocus,
        onSyncBlur: this.props.onBlur
      },
      ({ onFocus: q, onBlur: V }) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          ref: (L) => {
            this._element = L;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-datetimepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[t] || t}`]: t,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[i] || i}`]: i,
              [`k-input-${s}`]: s,
              "k-invalid": !w,
              "k-required": this.required,
              "k-disabled": this.props.disabled
            },
            k
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: O },
          onFocus: this.mobileMode ? void 0 : q,
          onBlur: V,
          onClick: this.mobileMode ? this.handleDateIconClick : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            readonly: this.mobileMode,
            ...N
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          kendo_react_buttons_index_mjs_.Button,
          {
            tabIndex: -1,
            type: "button",
            icon: "calendar",
            svgIcon: index_es_js_.calendarIcon,
            onMouseDown: this.handleIconMouseDown,
            onClick: this.mobileMode ? void 0 : this.handleDateIconClick,
            title: (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_d, messages_V[messages_d]),
            className: "k-input-button",
            rounded: null,
            "aria-label": (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(messages_d, messages_V[messages_d])
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          B,
          {
            show: this.show,
            animate: this.element !== null,
            anchor: this.element,
            popupClass: "k-datetime-container k-reset",
            id: this._popupId,
            anchorAlign: {
              horizontal: "left",
              vertical: "bottom"
            },
            popupAlign: {
              horizontal: "left",
              vertical: "top"
            }
          },
          !this.mobileMode && this.renderPicker()
        )
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ index_js_.createElement(
      usePickerFloatingLabel_l,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: r,
        editorValid: w,
        editorDisabled: this.props.disabled,
        children: b,
        style: { width: this.props.width }
      }
    ) : b;
  }
  setShow(t) {
    const { onOpen: i, onClose: s } = this.props;
    this.show !== t && (this.setState({ show: t }), t && i && i.call(void 0, {
      target: this
    }), !t && s && s.call(void 0, {
      target: this
    }));
  }
  nextTick(t) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => t());
  }
  calculateMedia(t) {
    for (const i of t)
      this.setState({ windowWidth: i.target.clientWidth });
  }
};
DateTimePicker_o.displayName = "DateTimePicker", DateTimePicker_o.propTypes = {
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
      date: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      time: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      datetime: prop_types_index_js_.oneOf(["short", "medium", "long", "full"]),
      era: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      year: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      month: prop_types_index_js_.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
      day: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      weekday: prop_types_index_js_.oneOf(["narrow", "short", "long"]),
      hour: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      hour12: prop_types_index_js_.bool,
      minute: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      second: prop_types_index_js_.oneOf(["numeric", "2-digit"]),
      timeZoneName: prop_types_index_js_.oneOf(["short", "long"])
    })
  ]),
  formatPlaceholder: prop_types_index_js_.oneOfType([
    prop_types_index_js_.oneOf(["wide", "narrow", "short", "formatPattern"]),
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
}, DateTimePicker_o.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "g",
  // general date and time pattern (short time): "M/d/y h:mm a" for en.
  max: L,
  min: utils_H,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  required: !1,
  validityStyles: !0,
  cancelButton: !0,
  dateInput: DateInput_F,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
let DateTimePicker_c = DateTimePicker_o;
const DateTimePicker_he = (0,index_mjs_.createPropsContext)(), DateTimePicker_ue = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(DateTimePicker_he, DateTimePicker_c));
DateTimePicker_ue.displayName = "KendoReactDateTimePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(DateTimePicker_c);


;// ../node_modules/.pnpm/@progress+kendo-react-dateinputs@7.4.0_5a7557c5043fa3eb676a11eb0aaa921a/node_modules/@progress/kendo-react-dateinputs/index.mjs
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