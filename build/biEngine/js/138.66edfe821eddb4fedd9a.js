"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[138],{

/***/ 30138
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Action: () => (/* binding */ b),
  BusViewService: () => (/* binding */ zs),
  Calendar: () => (/* binding */ as),
  CalendarCell: () => (/* binding */ Si),
  CalendarHeaderTitle: () => (/* binding */ tn),
  CalendarNavigationItem: () => (/* binding */ sn),
  CalendarPropsContext: () => (/* binding */ an),
  CalendarViewEnum: () => (/* binding */ y),
  CalendarWeekCell: () => (/* binding */ xi),
  CalendarWithoutContext: () => (/* binding */ bt),
  CenturyViewService: () => (/* binding */ Ei),
  DOMService: () => (/* binding */ ji),
  DateInput: () => (/* binding */ Dt),
  DateInputPropsContext: () => (/* binding */ Tn),
  DateInputWithoutContext: () => (/* binding */ Ct),
  DatePicker: () => (/* binding */ Rn),
  DatePickerPropsContext: () => (/* binding */ Pn),
  DatePickerWithoutContext: () => (/* binding */ Xt),
  DateRangePicker: () => (/* binding */ ha),
  DateRangePickerPropsContext: () => (/* binding */ la),
  DateRangePickerWithoutContext: () => (/* binding */ te),
  DateTimePicker: () => (/* binding */ ua),
  DateTimePickerPropsContext: () => (/* binding */ ca),
  DateTimePickerWithoutContext: () => (/* binding */ ee),
  DayPeriodService: () => (/* binding */ Ln),
  DecadeViewService: () => (/* binding */ Ri),
  EMPTY_SELECTIONRANGE: () => (/* binding */ q),
  Header: () => (/* binding */ Zt),
  HorizontalViewList: () => (/* binding */ At),
  HoursService: () => (/* binding */ Wn),
  MAX_DATE: () => (/* binding */ dt),
  MAX_TIME: () => (/* binding */ xt),
  MIN_DATE: () => (/* binding */ ut),
  MIN_TIME: () => (/* binding */ Nt),
  MinutesService: () => (/* binding */ jn),
  MonthViewService: () => (/* binding */ Bi),
  MultiViewCalendar: () => (/* binding */ Qs),
  MultiViewCalendarPropsContext: () => (/* binding */ ra),
  MultiViewCalendarWithoutContext: () => (/* binding */ rt),
  NavigationService: () => (/* binding */ qs),
  PickerWrap: () => (/* binding */ Vn),
  ScrollSyncService: () => (/* binding */ Ji),
  SecondsService: () => (/* binding */ Qn),
  TimeList: () => (/* binding */ Ce),
  TimePart: () => (/* binding */ _t),
  TimePicker: () => (/* binding */ aa),
  TimePickerPropsContext: () => (/* binding */ na),
  TimePickerWithoutContext: () => (/* binding */ Qt),
  TimeSelector: () => (/* binding */ Jt),
  TodayCommand: () => (/* binding */ Gt),
  ToggleButton: () => (/* binding */ En),
  ViewList: () => (/* binding */ ye),
  Virtualization: () => (/* binding */ Kt),
  WeekNamesService: () => (/* binding */ Qi),
  YearViewService: () => (/* binding */ $i),
  dateInputsMessages: () => (/* binding */ T),
  decreaseValue: () => (/* binding */ Lt),
  end: () => (/* binding */ $e),
  getNow: () => (/* binding */ Vt),
  getToday: () => (/* binding */ H),
  increaseValue: () => (/* binding */ Ft),
  separator: () => (/* binding */ Ye),
  start: () => (/* binding */ Ue),
  swapStartEnd: () => (/* binding */ Ht),
  today: () => (/* binding */ qe),
  toggleCalendar: () => (/* binding */ We),
  toggleDateTimeSelector: () => (/* binding */ Bt)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var index_js_ = __webpack_require__(51347);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-commo_42e293437ee7197a19d3bc5d61ca2277/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(15748);
;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/clone-date.js
/**
 * A function that clones the passed date. The parameter could be `null`.
 *
 * @param date - The initial date value.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * cloneDate(new Date(2016, 0, 1)); // returns new Date(2016, 0, 1);
 * cloneDate(null); // returns null
 * ```
 */
var cloneDate = function (date) { return date ? new Date(date.getTime()) : null; };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/adjust-dst.js

/**
 * @hidden
 */
var adjustDST = function (date, hour) {
    var newDate = cloneDate(date);
    if (hour === 0 && newDate.getHours() === 23) {
        newDate.setHours(newDate.getHours() + 2);
    }
    return newDate;
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/create-date.js

/**
 * A function which returns a new `Date` instance.
 *
 * @param year - The year value.
 * @param month - The month value.
 * @param day - The day value.
 * @param hours - The hours value.
 * @param minutes - The minutes value.
 * @param seconds - The seconds value.
 * @param milliseconds - milliseconds value.
 * @returns The date instance.
 *
 * @example
 * ```ts-no-run
 * createDate(2016, 0, 15); // 2016-01-15 00:00:00
 * createDate(2016, 0, 15, 22, 22, 20); // 2016-01-15 22:22:20
 * ```
 */
var createDate = function (year, month, day, hours, minutes, seconds, milliseconds) {
    if (hours === void 0) { hours = 0; }
    if (minutes === void 0) { minutes = 0; }
    if (seconds === void 0) { seconds = 0; }
    if (milliseconds === void 0) { milliseconds = 0; }
    var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    if (year > -1 && year < 100) {
        date.setFullYear(date.getFullYear() - 1900);
    }
    return adjustDST(date, hours);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/get-date.js

/**
 * A function which returns the passed date with a midnight time portion.
 *
 * @param date - The initial date.
 * @returns - The date with a midnight time portion.
 *
 * @example
 * ```ts-no-run
 * getDate(new Date(2016, 0, 15, 14, 30, 30)); // 2016-01-15 00:00:00
 * ```
 */
var getDate = function (date) {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-days.js


/**
 * A function that adds and subtracts days from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of days to add and subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addDays(new Date(2016, 0, 1), 5); // 2016-1-6
 * addDays(new Date(2016, 0, 1), -5); // 2015-12-26
 * ```
 */
var addDays = function (date, offset) {
    var newDate = cloneDate(date);
    newDate.setDate(newDate.getDate() + offset);
    return adjustDST(newDate, date.getHours());
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-day-of-month.js


/**
 * A function which returns the last date of the month.
 *
 * @param date - The initial date.
 * @returns - The last date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * lastDayOfMonth(new Date(2016, 0, 15)); // 2016-01-31
 * ```
 */
var lastDayOfMonth = function (date) {
    var newDate = createDate(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return addDays(newDate, -1);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-months.js



var MONTHS_LENGTH = 12;
var normalize = function (date, expectedMonth) { return (date.getMonth() !== expectedMonth ? lastDayOfMonth(addMonths(date, -1)) : date //tslint:disable-line:no-use-before-declare
); };
/**
 * A function that adds and subtracts months from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of months to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addMonths(new Date(2016, 5, 1), 5); // 2016-11-1
 * addMonths(new Date(2016, 5, 1), -5); // 2015-1-1
 * ```
 */
var addMonths = function (date, offset) {
    var newDate = cloneDate(date);
    var diff = (newDate.getMonth() + offset) % MONTHS_LENGTH;
    var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
    newDate.setMonth(newDate.getMonth() + offset);
    return normalize(adjustDST(newDate, date.getHours()), expectedMonth);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/set-year.js



/**
 * @hidden
 */
var setYear = function (value, year) {
    var month = value.getMonth();
    var candidate = createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getMonth() === month ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-years.js


/**
 * A function that adds and subtracts years from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of years to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addYears(new Date(2016, 5, 1), 5); // 2011-6-1
 * addYears(new Date(2016, 5, 1), -5); // 2021-6-1
 * ```
 */
var addYears = function (value, offset) {
    return adjustDST(setYear(value, value.getFullYear() + offset), value.getHours());
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-decades.js

/**
 * A function that adds and subtracts decades from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of decades to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addDecades(new Date(2016, 5, 1), 5); // 2066-6-1
 * addDecades(new Date(2016, 5, 1), -5); // 1966-6-1
 * ```
 */
var addDecades = function (value, offset) {
    return addYears(value, 10 * offset);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-centuries.js

/**
 * A function that adds and subtracts centuries from a `Date` object.
 *
 * @param date - The initial date value.
 * @param offset - The number of centuries to add or subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addCenturies(new Date(2016, 5, 1), 5); // 2516-6-1
 * addCenturies(new Date(2016, 5, 1), -5); // 1516-6-1
 * ```
 */
var addCenturies = function (value, offset) {
    return addYears(value, 100 * offset);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/normalize-year.js

/**
 * @hidden
 */
// eslint-disable-next-line
var normalizeYear = function (value, year) { return (setYear(value, year(value.getFullYear()))); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-decade-of-century.js

/**
 * A function that returns a `Date` object of the first decade in a century.
 *
 * @param date - The start date value.
 * @returns - The first year in a century.
 *
 * @example
 * ```ts-no-run
 * firstDecadeOfCentury(new Date(2017, 0, 1)); // 2000-1-1
 * firstDecadeOfCentury(new Date(2007, 10, 22)); // 2000-11-22
 * firstDecadeOfCentury(new Date(2126, 0, 1)); // 2100-1-1
 * ```
 */
var firstDecadeOfCentury = function (value) { return (normalizeYear(value, function (y) { return y - (y % 100); })); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-decade-of-century.js

/**
 * A function that returns a `Date` object of the last decade in a century.
 *
 * @param date - The start date value.
 * @returns - The last year in a decade.
 *
 * @example
 * ```ts-no-run
 * lastDecadeOfCentury(new Date(2017, 0, 1)); // 2090-1-1
 * lastDecadeOfCentury(new Date(2007, 10, 22)); // 2090-11-22
 * lastDecadeOfCentury(new Date(2126, 0, 1)); // 2190-1-1
 * ```
 */
var lastDecadeOfCentury = function (value) { return (normalizeYear(value, function (y) { return y - (y % 100) + 90; })); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-year-of-decade.js

/**
 * A function that returns a `Date` object of the first year in a decade.
 *
 * @param date - The start date value.
 * @returns - The first year in a decade.
 *
 * @example
 * ```ts-no-run
 * firstYearOfDecade(new Date(2017, 0, 1)); // 2010-1-1
 * firstYearOfDecade(new Date(2007, 10, 22)); // 2000-11-22
 * firstYearOfDecade(new Date(2026, 0, 1)); // 2020-1-1
 * ```
 */
var firstYearOfDecade = function (value) { return (normalizeYear(value, function (y) { return y - (y % 10); })); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-centuries.js

/**
 * A function that calculates duration in centuries between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInCenturies(new Date(2016, 0, 1), new Date(3216, 0, 1)); // 12
 * durationInCenturies(new Date(2016, 6, 1), new Date(2617, 0, 1)); // 6
 * durationInCenturies(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
var durationInCenturies = function (start, end) { return ((firstDecadeOfCentury(end).getFullYear() - firstDecadeOfCentury(start).getFullYear()) / 100); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js

/**
 * A function that returns a `Date` object of the last year in a decade.
 *
 * @param date - The start date value.
 * @returns - The last year in a decade.
 *
 * @example
 * ```ts-no-run
 * lastYearOfDecade(new Date(2017, 0, 1)); // 2019-1-1
 * lastYearOfDecade(new Date(2007, 10, 22)); // 2009-11-22
 * lastYearOfDecade(new Date(2026, 0, 1)); // 2029-1-1
 * ```
 */
var lastYearOfDecade = function (value) { return (normalizeYear(value, function (y) { return y - (y % 10) + 9; })); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js

/**
 * A function that calculates duration in decades between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInDecades(new Date(2016, 0, 1), new Date(2136, 0, 1)); // 12
 * durationInDecades(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
var durationInDecades = function (start, end) { return ((firstYearOfDecade(end).getFullYear() - firstYearOfDecade(start).getFullYear()) / 10); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-weeks.js

/**
 * A function that adds and subtracts weeks from a Date object.
 *
 * @param date - The initial date value.
 * @param offset - The number of weeks to add/subtract from the date.
 * @returns - A new `Date` instance.
 *
 * @example
 * ```ts-no-run
 * addWeeks(new Date(2016, 5, 1), 3); // 2016-6-22
 * addWeeks(new Date(2016, 5, 1), -3); // 2015-5-11
 * ```
 */
var addWeeks = function (date, offset) {
    return addDays(date, offset * 7);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-day-of-month.js

/**
 * A function which returns the first date of the month.
 *
 * @param date - The initial date.
 * @returns - The first date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * firstDayOfMonth(new Date(2016, 0, 15)); // 2016-01-01
 * ```
 */
var firstDayOfMonth = function (date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/direction.enum.js
// tslint:disable:max-line-length
/**
 * An enumeration which represents the horizontal direction. The `Forward` option moves forward. The `Backward` option moves backward.
 */
var Direction;
(function (Direction) {
    /**
     * The `Forward` value with an underlying `1` number value.
     */
    Direction[Direction["Forward"] = 1] = "Forward";
    /**
     * The `Backward` value with an underlying `-1` (minus one) number value.
     */
    Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
// tslint:enable:max-line-length

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/day-of-week.js



/**
 * @hidden
 *
 * A function which returns the next or previous date for a specific week day. For example, `Day.Monday`.
 *
 * @param date - The date to calculate from.
 * @param weekDay - The `Day` enum specifying the desired week day.
 * @param direction - The `Direction` enum specifying the calculation direction.
 * @returns - A `Date` instance.
 *
 * @example
 * ```ts-no-run
 * dayOfWeek(new Date(2016, 0, 1), Day.Wednesday, Direction.Forward); // 2016-01-06, Wednesday
 * dayOfWeek(new Date(2016, 0, 1), Day.Wednesday, Direction.Backward); // 2015-12-30, Wednesday
 * ```
 */
var dayOfWeek = function (date, weekDay, direction) {
    if (direction === void 0) { direction = Direction.Forward; }
    var newDate = cloneDate(date);
    var newDay = ((weekDay - newDate.getDay()) + (7 * direction)) % 7;
    newDate.setDate(newDate.getDate() + newDay);
    return adjustDST(newDate, date.getHours());
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-months.js
/**
 * A function that calculates duration in months between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in months.
 *
 * @example
 * ```ts-no-run
 * durationInMonths(new Date(2016, 0, 1), new Date(2017, 0, 1)); // 12
 * durationInMonths(new Date(2016, 6, 1), new Date(2017, 0, 1)); // 6
 * durationInMonths(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
var durationInMonths = function (start, end) { return (((end.getFullYear() - start.getFullYear())) * 12 + (end.getMonth() - start.getMonth())); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/set-month.js



/**
 * @hidden
 */
var setMonth = function (value, month) {
    var day = value.getDate();
    var candidate = createDate(value.getFullYear(), month, day, value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getDate() === day ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js

/**
 * A function that returns a `Date` object of the first month in a year.
 *
 * @param date - The start date value.
 * @returns - The first month in a year.
 *
 * @example
 * ```ts-no-run
 * firstMonthOfYear(new Date(2017, 11, 1)); // 2017-1-1
 * firstMonthOfYear(new Date(2017, 0, 1)); // 2017-1-1
 * ```
 */
var firstMonthOfYear = function (value) { return setMonth(value, 0); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js

/**
 * A function that returns a `Date` object of the last month in a year.
 *
 * @param date - The start date value.
 * @returns - The last month in a year.
 *
 * @example
 * ```ts-no-run
 * lastMonthOfYear(new Date(2017, 5, 3)); // 2017-12-3
 * lastMonthOfYear(new Date(2017, 11, 3)); // 2017-12-3
 * ```
 */
var lastMonthOfYear = function (value) { return setMonth(value, 11); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
/**
 * A function that calculates duration in years between two `Date` objects.
 *
 * @param start - The start date value.
 * @param end - The end date value.
 * @returns - The duration in years.
 *
 * @example
 * ```ts-no-run
 * durationInYears(new Date(2016, 0, 1), new Date(2028, 0, 1)); // 12
 * durationInYears(new Date(2016, 0, 1), new Date(2022, 0, 1)); // 6
 * durationInYears(new Date(2016, 0, 1), new Date(2016, 0, 1)); // 0
 * ```
 */
var durationInYears = function (start, end) { return (end.getFullYear() - start.getFullYear()); };

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/day.enum.js
/**
 * Enumeration which represents the week days.
 */
var Day;
(function (Day) {
    /**
     * The Sunday value with an underlying `0` number value.
     */
    Day[Day["Sunday"] = 0] = "Sunday";
    /**
     * The Monday value with an underlying `1` number value.
     */
    Day[Day["Monday"] = 1] = "Monday";
    /**
     * The Tuesday value with an underlying `2` number value.
     */
    Day[Day["Tuesday"] = 2] = "Tuesday";
    /**
     * The Wednesday value with an underlying `3` number value.
     */
    Day[Day["Wednesday"] = 3] = "Wednesday";
    /**
     * The Thursday value with an underlying `4` number value.
     */
    Day[Day["Thursday"] = 4] = "Thursday";
    /**
     * The Friday value with an underlying `5` number value.
     */
    Day[Day["Friday"] = 5] = "Friday";
    /**
     * The Saturday value with an underlying `6` number value.
     */
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/prev-day-of-week.js


/**
 * A function which returns a date by a specific week name. For example, `Day.Monday`.
 *
 * @param date - The date to calculate from.
 * @param weekDay - The `Day` enum specifying the desired week day.
 * @returns - A `Date` instance.
 *
 * @example
 * ```ts-no-run
 * prevDayOfWeek(new Date(2016, 0, 1), Day.Wednesday); // 2015-12-30, Wednesday
 * ```
 */
var prevDayOfWeek = function (date, weekDay) {
    return dayOfWeek(date, weekDay, Direction.Backward);
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/constants.js
/**
 * The number of milliseconds in one minute.
 */
var MS_PER_MINUTE = 60000;
/**
 * The number of milliseconds in one hour.
 */
var MS_PER_HOUR = 3600000;
/**
 * The number of milliseconds in one standard day.
 */
var MS_PER_DAY = 86400000;

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/week-in-year.js






var moveDateToWeekStart = function (date, weekStartDay) {
    if (weekStartDay !== Day.Monday) {
        return addDays(prevDayOfWeek(date, weekStartDay), 4);
    }
    return addDays(date, (4 - (date.getDay() || 7)));
};
var calcWeekInYear = function (date, weekStartDay) {
    var firstWeekInYear = createDate(date.getFullYear(), 0, 1, -6);
    var newDate = moveDateToWeekStart(date, weekStartDay);
    var diffInMS = newDate.getTime() - firstWeekInYear.getTime();
    var days = Math.floor(diffInMS / MS_PER_DAY);
    return 1 + Math.floor(days / 7);
};
/**
 * A function that returns the number of the week within a year, which is calculated in relation to the date.
 *
 * For more information, refer to the [**ISO week date**](https://en.wikipedia.org/wiki/ISO_week_date) article.
 *
 * @param date - The date used for the week number calculation.
 * @param weekStartDay - The first day of the week. By default, the first week day is Monday.
 * @returns - The number of the week within the year.
 *
 * @example
 * ```ts-no-run
 * weekInYear(new Date(2016, 0, 1)); // Week 53, 2015
 * weekInYear(new Date(2016, 0, 5)); // Week 1, 2016
 * weekInYear(new Date(2017, 0, 1)); // Week 52, 2016
 * weekInYear(new Date(2017, 0, 2)); // Week 1, 2017
 * ```
 */
var weekInYear = function (date, weekStartDay) {
    if (weekStartDay === void 0) { weekStartDay = Day.Monday; }
    date = getDate(date);
    var prevWeekDate = addDays(date, -7);
    var nextWeekDate = addDays(date, 7);
    var weekNumber = calcWeekInYear(date, weekStartDay);
    if (weekNumber === 0) {
        return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
    }
    if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
        return 1;
    }
    return weekNumber;
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal.js
/**
 * A function that compares two dates. The comparison also includes the time portion.
 *
 * @param candidate - The candidate date.
 * @param expected - The expected date.
 * @returns - A Boolean value indicating whether the values are equal.
 *
 * @example
 * ```ts-no-run
 * isEqual(new Date(2016, 0, 1), new Date(2016, 0, 1)); // true
 * isEqual(new Date(2016, 0, 1), new Date(2016, 0, 2)); // false
 * isEqual(new Date(2016, 0, 1, 10), new Date(2016, 0, 1, 20)); // false
 * ```
 */
var isEqual = function (candidate, expected) {
    if (!candidate && !expected) {
        return true;
    }
    return candidate && expected && candidate.getTime() === expected.getTime();
};

;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js


/**
 * A function that compares the date portions of 2 dates.
 *
 * @param candidate - The candidate date.
 * @param expected - The expected date.
 * @returns - A Boolean value whether the values are equal.
 *
 * @example
 * ```ts-no-run
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 1, 20)); // true
 * isEqualDate(new Date(2016, 0, 1, 10), new Date(2016, 0, 2, 10)); // false
 * ```
 */
var isEqualDate = function (candidate, expected) {
    if (!candidate && !expected) {
        return true;
    }
    return candidate && expected && isEqual(getDate(candidate), getDate(expected));
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@_b19b9fd6fa997ae023ac46d7de7a9e03/node_modules/@progress/kendo-react-intl/index.mjs)
var kendo_react_intl_index_mjs_ = __webpack_require__(52132);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-butto_007ff6eb7fcf05ff72c6e705483d391d/node_modules/@progress/kendo-react-buttons/index.mjs)
var kendo_react_buttons_index_mjs_ = __webpack_require__(14800);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.1.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(13209);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-labels@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-label_094d9ce63a125f900bae205ecd5918c8/node_modules/@progress/kendo-react-labels/index.mjs)
var kendo_react_labels_index_mjs_ = __webpack_require__(38635);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup_c4e49f01b86dffa09aaa3a18f34846d4/node_modules/@progress/kendo-react-popup/index.mjs)
var kendo_react_popup_index_mjs_ = __webpack_require__(31212);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-layout@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-layou_0579e25e503fff9f40a3866676a1d559/node_modules/@progress/kendo-react-layout/index.mjs)
var kendo_react_layout_index_mjs_ = __webpack_require__(46540);
;// ../node_modules/.pnpm/@progress+kendo-react-datei_8e3af2400b8b9c1c4a6b4dfe62a1e49b/node_modules/@progress/kendo-react-dateinputs/index.mjs
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";










const Rt = {
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613447,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
}, pi = (s, t, e) => [
  ...s.slice(0, t + 1),
  ...s.slice(t + 1).map((i) => i + e)
];
class mi {
  constructor(t = 0, e, i) {
    this.total = t, this.rowHeight = e, this.detailRowHeight = i, this.offsets = [], this.heights = [];
    let a = 0;
    for (let o = 0; o < t; o++)
      this.offsets.push(a), a += e, this.heights.push(e);
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
    for (let e = 0; e < this.offsets.length; e++) {
      if (t === this.offsets[e])
        return e;
      if (t < this.offsets[e])
        return e - 1;
    }
    return this.total - 1;
  }
  offset(t) {
    return this.offsets[t];
  }
  totalHeight() {
    return this.heights.reduce((t, e) => t + e, 0);
  }
  updateRowHeight(t, e) {
    this.heights[t] += e, this.offsets = pi(this.offsets, t, e);
  }
}
const oe = (s) => Math.max(s, 0);
class Me {
  constructor(t) {
    this.offset = t;
  }
}
class Te {
  constructor(t) {
    this.skip = t;
  }
}
class fi {
  constructor(t, e) {
    this.onScrollAction = t, this.onPageAction = e, this.direction = "vertical", this.firstLoaded = 0, this.lastLoaded = 0, this.lastScrollTop = 0, this.take = 0, this.total = 0, this.rowHeightService = null, this.bottomOffset = 0, this.topOffset = 0;
  }
  create(t, e, i, a, o = 0, l = 0, c = "vertical") {
    this.rowHeightService = t, this.firstLoaded = e, this.lastLoaded = e + i, this.take = i, this.total = a, this.lastScrollTop = 0, this.topOffset = o, this.bottomOffset = l, this.direction = c;
    const h = this.rowsForHeight(o), u = oe(e - h);
    this.onScrollAction(new Me(this.rowOffset(u))), this.onPageAction(new Te(u));
  }
  onScroll({ scrollLeft: t, scrollTop: e, offsetHeight: i, offsetWidth: a }) {
    const o = this.direction === "vertical" ? e : t, l = this.direction === "vertical" ? i : a;
    if (this.lastScrollTop === o || !this.rowHeightService)
      return;
    const c = this.lastScrollTop >= o;
    this.lastScrollTop = o;
    const h = this.rowHeightService.index(oe(o - this.topOffset)), u = this.rowHeightService.index(oe(o + l - this.bottomOffset));
    if (!c && u >= this.lastLoaded && this.lastLoaded < this.total && (this.firstLoaded = h, this.onScrollAction(new Me(this.rowOffset(h))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new Te(this.firstLoaded))), c && h <= this.firstLoaded) {
      const d = Math.floor(this.take * 0.3);
      this.firstLoaded = oe(h - d), this.onScrollAction(new Me(this.rowOffset(this.firstLoaded))), this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total), this.onPageAction(new Te(this.firstLoaded));
    }
  }
  rowOffset(t) {
    return this.rowHeightService ? this.rowHeightService.offset(t) + this.topOffset : 0;
  }
  rowsForHeight(t) {
    return this.rowHeightService ? Math.ceil(t / this.rowHeightService.height(0)) : 0;
  }
}
const gi = (s, t, e) => Math.min(Math.abs(t - s), e), vi = 17, wi = 10, bi = {
  [
    1
    /* Forward */
  ]: (s) => (t) => t + s,
  [
    0
    /* Backward */
  ]: (s) => (t) => t - s
}, Di = {
  [
    1
    /* Forward */
  ]: (s) => (t) => Math.min(t, s),
  [
    0
    /* Backward */
  ]: (s) => (t) => Math.max(t, s)
}, ki = {
  [
    1
    /* Forward */
  ]: (s) => (t) => t < s,
  [
    0
    /* Backward */
  ]: (s) => (t) => t > s
}, he = class extends index_js_.Component {
  constructor(s) {
    super(s), this.rowHeightService = null, this.scrollContainer = null, this.lastDirection = null, this.lastTotal = 0, this.lastTake = 0, this.animationInProgress = !1, this.restrictScroll = !1, this.scrollTo = (t) => {
      const e = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
      if (!this.scrollContainer)
        return;
      const i = this.scrollContainer[e];
      this.restrictScroll && e === "scrollTop" && (!Number.isInteger(i) || !Number.isInteger(t)) && Math.abs(i - t) < wi || (this.scrollContainer[e] = t);
    }, this.scrollToIndex = (t) => {
      this.animationInProgress = !1, this.rowHeightService && this.scrollTo(this.rowHeightService.offset(t));
    }, this.animateToIndex = (t) => {
      if (!this.rowHeightService || !window)
        return;
      window.cancelAnimationFrame(this.cancelAnimation);
      const e = this.rowHeightService.offset(t), i = this.getContainerScrollDirection(e);
      let { start: a, end: o } = this.scrollRange(e, i);
      if (a === o)
        return;
      const l = this.scrollStep(a, o), c = bi[i](l), h = Di[i](o), u = ki[i](c(o)), d = (p) => {
        this.animationInProgress = !0;
        const f = c(p);
        this.scrollTo(h(f)), u(f) ? this.cancelAnimation = window.requestAnimationFrame(() => {
          d(f);
        }) : this.animationInProgress = !1;
      };
      this.cancelAnimation = window.requestAnimationFrame(() => {
        d(a);
      });
    }, this.scrollToBottom = () => {
      this.rowHeightService && this.scrollTo(this.rowHeightService.totalHeight() + this.props.bottomOffset);
    }, this.scrollStep = (t, e) => {
      const i = this.props.scrollDuration || he.defaultProps.scrollDuration;
      return Math.abs(e - t) / (i / vi);
    }, this.scrollRange = (t, e) => {
      const i = this.containerScrollPosition;
      if (parseInt(`${t}`, 10) === parseInt(`${i}`, 10))
        return { start: t, end: t };
      const a = this.containerMaxScroll(), o = e === 0 ? 1 : -1, l = gi(i, t, this.props.maxScrollDifference || 0), c = Math.min(t, a);
      return { start: Math.min(Math.max(c + o * l, 0), a), end: c };
    }, this.containerMaxScroll = () => this.containerScrollSize - this.containerOffsetSize, this.getContainerScrollDirection = (t) => t < this.containerScrollPosition ? 0 : 1, this.initServices = (t = this.props) => {
      const e = this.direction === "vertical" ? t.itemHeight : t.itemWidth;
      e !== void 0 && (this.rowHeightService = new mi(t.total, e, 0), this.scrollerService.create(
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
      const i = this.rowHeightService.index(this.containerScrollPosition - this.props.topOffset), { onScrollAction: a } = this.props, o = {
        index: i,
        target: e,
        scrollAction: this.scrollAction,
        pageAction: this.pageAction,
        animationInProgress: this.animationInProgress
      };
      this.props.onScroll && this.props.onScroll.call(void 0, t), a && a.call(void 0, o), this.scrollAction = void 0, this.pageAction = void 0;
    }, this.handleScrollAction = (t) => {
      this.scrollAction = t;
    }, this.handlePageAction = (t) => {
      this.pageAction = t;
    }, this.scrollerService = new fi(
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
    return this.props.direction !== void 0 ? this.props.direction : he.defaultProps.direction;
  }
  get scrollOffsetSize() {
    return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : he.defaultProps.scrollOffsetSize;
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(s) {
    return this.rowHeightService ? this.rowHeightService.index(s) : 0;
  }
  itemOffset(s) {
    return this.rowHeightService ? this.rowHeightService.offset(s) : 0;
  }
  isIndexVisible(s) {
    if (!this.rowHeightService)
      return !1;
    const t = this.containerScrollPosition, e = t + this.containerOffsetSize, i = this.rowHeightService.offset(s), a = i + this.rowHeightService.height(s);
    return i >= t && a <= e;
  }
  isListScrolled(s) {
    return this.rowHeightService ? this.containerScrollPosition !== this.rowHeightService.offset(s) : !1;
  }
  componentDidMount() {
    const { onMount: s } = this.props;
    s && s.call(void 0, this);
  }
  render() {
    (this.lastTotal !== this.props.total || this.lastDirection !== this.direction || this.lastTake !== this.props.take) && (this.initServices(), this.lastTotal = this.props.total, this.lastDirection = this.direction, this.lastTake = this.props.take);
    const s = `${(this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + this.props.bottomOffset}`, t = this.direction === "vertical" ? { height: `${s}px` } : { width: `${s}px` }, e = (0,index_mjs_.classNames)(
      "k-content k-scrollable",
      {
        "k-scrollable-horizontal": this.direction === "horizontal"
      },
      this.props.className
    ), i = (0,index_mjs_.classNames)(
      "k-scrollable-placeholder",
      {
        "k-scrollable-horizontal-placeholder": this.direction === "horizontal"
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (a) => {
          this.scrollContainer = a;
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
          className: i
        }
      )
    );
  }
};
let Kt = he;
Kt.propTypes = {
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
};
Kt.defaultProps = {
  direction: "vertical",
  forceScroll: !1,
  scrollOffsetSize: 0,
  maxScrollDifference: 100,
  scrollDuration: 100
};
const yi = (s, t) => {
  const e = Object.getOwnPropertyNames(s), i = Object.getOwnPropertyNames(t);
  if (e.length !== i.length)
    return !1;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    if (s[o] !== t[o])
      return !1;
  }
  return !0;
};
class Si extends index_js_.Component {
  constructor() {
    super(...arguments), this.handleClick = (t) => {
      const { onClick: e, value: i } = this.props;
      e && e.call(void 0, i, t);
    }, this.handleMouseEnter = () => {
      const { onMouseEnter: t, value: e } = this.props;
      t && t.call(void 0, e);
    }, this.handleMouseLeave = () => {
      const { onMouseLeave: t, value: e } = this.props;
      t && t.call(void 0, e);
    };
  }
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the React.PureComponent.
  /**
   * @hidden
   */
  shouldComponentUpdate(t) {
    const { value: e, ...i } = this.props, { value: a, ...o } = t;
    return !((!(e && a) || e.getTime() === a.getTime()) && yi(i, o));
  }
  /* eslint-disable max-len */
  /**
   * @return
   * Returns a `<td />` element with a `<span className="k-link" />` inside to apply the styles. The text inside is the [`formattedValue`]({% slug api_dateinputs_calendarcellprops %}#toc-formattedvalue) of the `cell`.
   */
  render() {
    const {
      className: t,
      formattedValue: e,
      isWeekend: i,
      isFocused: a,
      isInRange: o,
      isSelected: l,
      isRangeStart: c,
      isRangeMid: h,
      isRangeEnd: u,
      isRangeSplitStart: d,
      isRangeSplitEnd: p,
      isToday: f,
      isDisabled: m,
      view: S,
      value: I,
      ...M
    } = this.props, w = this.props.activeRangeEnd === "end" && u, E = this.props.activeRangeEnd === "start" && c, g = (0,index_mjs_.classNames)(
      "k-calendar-td",
      {
        "k-range-end": u,
        "k-range-mid": h,
        "k-range-split-end": p,
        "k-range-split-start": d,
        "k-range-start": c,
        "k-active": E || w,
        "k-state-pending-focus": a,
        "k-selected": l || c || u,
        "k-today": f,
        "k-weekend": i,
        "k-disabled": m
      },
      t
    );
    return /* @__PURE__ */ index_js_.createElement(
      "td",
      {
        ...M,
        className: g,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-link" }, this.props.children)
    );
  }
}
class xi extends index_js_.Component {
  /**
   * @return
   * Returns a `<td />` element with the [`value`]({% slug api_dateinputs_calendarweekcellprops %}#toc-value) as a child.
   */
  render() {
    const { className: t, firstDate: e, ...i } = this.props;
    return /* @__PURE__ */ index_js_.createElement("td", { className: (0,index_mjs_.classNames)("k-calendar-td", t), ...i }, this.props.children);
  }
}
var b = /* @__PURE__ */ ((s) => (s[s.Left = 0] = "Left", s[s.Right = 1] = "Right", s[s.Up = 2] = "Up", s[s.Down = 3] = "Down", s[s.PrevView = 4] = "PrevView", s[s.NextView = 5] = "NextView", s[s.FirstInView = 6] = "FirstInView", s[s.LastInView = 7] = "LastInView", s[s.LowerView = 8] = "LowerView", s[s.UpperView = 9] = "UpperView", s))(b || {}), y = /* @__PURE__ */ ((s) => (s[s.month = 0] = "month", s[s.year = 1] = "year", s[s.decade = 2] = "decade", s[s.century = 3] = "century", s))(y || {});
const q = { start: null, end: null };
function ot(s) {
  const t = (i, a, o, ...l) => a[o] === null ? null : (i ? s.isRequired : s)(a, o, ...l), e = t.bind(null, !1);
  return e.isRequired = t.bind(null, !0), e;
}
const ge = (s, t, e) => t === void 0 || e === void 0 || t <= s && s <= e ? s : s < t ? t : e, L = new Date(1980, 0, 1), ut = new Date(1900, 0, 1), dt = new Date(2099, 11, 31), Nt = new Date(1980, 0, 1), xt = new Date(1980, 0, 1, 23, 59, 59), U = (s, t) => {
  const e = cloneDate(s);
  return e.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), e;
}, H = () => getDate(/* @__PURE__ */ new Date()), F = (s, t, e) => !s || !(t && t > s || e && e < s), Hs = (s, t, e) => s === null || !(t && getDate(t) > getDate(s) || e && getDate(e) < getDate(s)), ke = (s, t) => {
  const { start: e, end: i } = t || q;
  return !e || !i ? !1 : e < s && s < i;
}, Q = (s, t, e = 1) => {
  const i = [];
  for (let a = s; a < t; a = a + e)
    i.push(a);
  return i;
}, Bs = (s, t, e) => t.getTime() <= s.getTime() && s.getTime() <= e.getTime(), As = (s, t) => s.slice(t).concat(s.slice(0, t)), K = (s, t, e) => s && (t && s < t ? cloneDate(t) : e && s > e ? cloneDate(e) : s), Y = (s) => (t, e = "", i = {}) => {
  const a = document.createElement(s);
  return a.className = e, Object.keys(i).map((o) => a.style[o] = i[o]), typeof t == "string" ? a.innerHTML = t || "" : (t || []).forEach((o) => o && a.appendChild(o)), a;
};
function Ci(s, t, e = {}) {
  let i, a;
  e.maxWait;
  let o, l, c;
  const h = window;
  let u = !1, d = !1;
  const p = !t && t !== 0 && typeof h.requestAnimationFrame == "function";
  if (typeof s != "function")
    throw new TypeError("Expected a function");
  t = +t || 0;
  function f(x) {
    const O = i, tt = a;
    return i = a = void 0, o = s.apply(tt, O), o;
  }
  function m(x, O) {
    return p ? (h.cancelAnimationFrame(l), h.requestAnimationFrame(x)) : setTimeout(x, O);
  }
  function S(x) {
    if (p)
      return h.cancelAnimationFrame(x);
    clearTimeout(x);
  }
  function I(x) {
    return l = m(E, t), u ? f() : o;
  }
  function M(x) {
    const O = x - c;
    return t - O;
  }
  function w(x) {
    const O = x - c;
    return c === void 0 || O >= t || O < 0 || d;
  }
  function E() {
    const x = Date.now();
    if (w(x))
      return g();
    l = m(E, M(x));
  }
  function g(x) {
    return l = void 0, i ? f() : (i = a = void 0, o);
  }
  function B() {
    l !== void 0 && S(l), i = c = a = l = void 0;
  }
  function V() {
    return l === void 0 ? o : g();
  }
  function R() {
    return l !== void 0;
  }
  function A(...x) {
    const O = Date.now(), tt = w(O);
    return i = x, a = this, c = O, tt && l === void 0 ? I() : (l === void 0 && (l = m(E, t)), o);
  }
  return A.cancel = B, A.flush = V, A.pending = R, A;
}
const Ii = [[]], Ee = 4, Mi = 3, Ti = {
  [b.Left]: (s) => addDecades(s, -1),
  [b.Up]: (s) => addDecades(s, -5),
  [b.Right]: (s) => addDecades(s, 1),
  [b.Down]: (s) => addDecades(s, 5),
  [b.PrevView]: (s) => addCenturies(s, -1),
  [b.NextView]: (s) => addCenturies(s, 1),
  [b.FirstInView]: (s) => firstDecadeOfCentury(s),
  [b.LastInView]: (s) => lastDecadeOfCentury(s)
};
class Ei {
  addToDate(t, e) {
    return addCenturies(t, e);
  }
  datesList(t, e) {
    return Q(0, e).map((i) => addCenturies(t, i));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: i,
      isActiveView: a,
      max: o,
      min: l,
      selectedDate: c,
      selectionRange: h = q,
      viewDate: u
    } = t;
    if (!u)
      return Ii;
    const d = Q(0, Ee), p = firstDecadeOfCentury(u), f = lastDecadeOfCentury(u), m = H();
    return Q(0, Mi).map((S) => {
      const I = addDecades(p, S * Ee);
      return d.map((M) => {
        const w = this.normalize(addDecades(I, M), l, o), E = this.isEqual(w, h.start), g = this.isEqual(w, h.end), V = !E && !g && ke(w, h), R = a && (Array.isArray(c) ? this.isSelectedFromArray(w, c, l, o) : F(c, l, o) && this.isEqual(w, c));
        return Bs(w, p, f) ? {
          formattedValue: this.value(w),
          id: `${e}${w.getTime()}`,
          isFocused: this.isEqual(w, i),
          isSelected: R,
          isWeekend: !1,
          isInRange: F(w, l, o),
          isRangeStart: E,
          isRangeMid: V,
          isRangeEnd: g,
          isRangeSplitEnd: V && this.isEqual(w, f),
          isRangeSplitStart: V && this.isEqual(w, p),
          isToday: this.isEqual(w, m),
          title: this.cellTitle(w),
          value: w
        } : null;
      });
    });
  }
  isSelectedFromArray(t, e, i, a) {
    let o = !1;
    return e.forEach((l) => {
      F(t, i, a) && this.isEqual(t, l) && (o = !0);
    }), o;
  }
  isEqual(t, e) {
    return !t || !e ? !1 : firstYearOfDecade(t).getFullYear() === firstYearOfDecade(e).getFullYear();
  }
  isInArray(t, e) {
    if (!e.length)
      return !1;
    const i = t.getFullYear();
    return e[0].getFullYear() <= i && i <= e[e.length - 1].getFullYear() + 99;
  }
  isInRange(t, e, i) {
    const a = firstYearOfDecade(t).getFullYear(), o = !e || firstYearOfDecade(e).getFullYear() <= a, l = !i || a <= firstYearOfDecade(i).getFullYear();
    return o && l;
  }
  isInSameView(t, e) {
    return durationInCenturies(t, e) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 1e3 === 0;
  }
  move(t, e) {
    const i = Ti[e];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return firstYearOfDecade(t).getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? firstDecadeOfCentury(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${firstDecadeOfCentury(t).getFullYear()} - ${lastDecadeOfCentury(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Ee;
  }
  skip(t, e) {
    return durationInCenturies(e, t);
  }
  total(t, e) {
    return durationInCenturies(t, e) + 1;
  }
  value(t) {
    return t ? firstYearOfDecade(t).getFullYear().toString() : "";
  }
  viewDate(t, e, i = 1) {
    return durationInCenturies(t, e) < i ? addCenturies(t, -1) : t;
  }
  normalize(t, e, i) {
    return t < e && this.isEqual(t, e) ? cloneDate(e) : t > i && this.isEqual(t, i) ? cloneDate(i) : t;
  }
}
const Vi = [[]], Ve = 4, Oi = 3, Pi = {
  [b.Left]: (s) => addYears(s, -1),
  [b.Up]: (s) => addYears(s, -5),
  [b.Right]: (s) => addYears(s, 1),
  [b.Down]: (s) => addYears(s, 5),
  [b.PrevView]: (s) => addDecades(s, -1),
  [b.NextView]: (s) => addDecades(s, 1),
  [b.FirstInView]: (s) => firstYearOfDecade(s),
  [b.LastInView]: (s) => lastYearOfDecade(s)
};
class Ri {
  addToDate(t, e) {
    return addDecades(t, e);
  }
  datesList(t, e) {
    return Q(0, e).map((i) => addDecades(t, i));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: i,
      isActiveView: a,
      max: o,
      min: l,
      selectedDate: c,
      selectionRange: h = q,
      viewDate: u
    } = t;
    if (!u)
      return Vi;
    const d = Q(0, Ve), p = firstYearOfDecade(u), f = lastYearOfDecade(u), m = H();
    return Q(0, Oi).map((S) => {
      const I = addYears(p, S * Ve);
      return d.map((M) => {
        const w = this.normalize(addYears(I, M), l, o), E = this.isEqual(w, h.start), g = this.isEqual(w, h.end), V = !E && !g && ke(w, h), R = a && (Array.isArray(c) ? this.isSelectedFromArray(w, c, l, o) : F(c, l, o) && this.isEqual(w, c));
        return Bs(w, p, f) ? {
          formattedValue: this.value(w),
          id: `${e}${w.getTime()}`,
          isFocused: this.isEqual(w, i),
          isSelected: R,
          isWeekend: !1,
          isInRange: F(w, l, o),
          isRangeStart: E,
          isRangeMid: V,
          isRangeEnd: g,
          isRangeSplitEnd: V && this.isEqual(w, f),
          isRangeSplitStart: V && this.isEqual(w, p),
          isToday: this.isEqual(w, m),
          title: this.cellTitle(w),
          value: w
        } : null;
      });
    });
  }
  isSelectedFromArray(t, e, i, a) {
    let o = !1;
    return e.forEach((l) => {
      F(t, i, a) && this.isEqual(t, l) && (o = !0);
    }), o;
  }
  isEqual(t, e) {
    return !t || !e ? !1 : t.getFullYear() === e.getFullYear();
  }
  isInArray(t, e) {
    if (!e.length)
      return !1;
    const i = t.getFullYear();
    return e[0].getFullYear() <= i && i <= e[e.length - 1].getFullYear() + 9;
  }
  isInRange(t, e, i) {
    const a = t.getFullYear(), o = !e || e.getFullYear() <= a, l = !i || a <= i.getFullYear();
    return o && l;
  }
  isRangeStart(t) {
    return t.getFullYear() % 100 === 0;
  }
  isInSameView(t, e) {
    return durationInDecades(t, e) === 0;
  }
  move(t, e) {
    const i = Pi[e];
    return i ? i(t) : t;
  }
  cellTitle(t) {
    return t.getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? firstYearOfDecade(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${firstYearOfDecade(t).getFullYear()} - ${lastYearOfDecade(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Ve;
  }
  skip(t, e) {
    return durationInDecades(e, t);
  }
  total(t, e) {
    return durationInDecades(t, e) + 1;
  }
  value(t) {
    return t ? t.getFullYear().toString() : "";
  }
  viewDate(t, e, i = 1) {
    return durationInDecades(t, e) < i ? addDecades(t, -1) : t;
  }
  normalize(t, e, i) {
    return t < e && this.isEqual(t, e) ? cloneDate(e) : t > i && this.isEqual(t, i) ? cloneDate(i) : t;
  }
}
const Ni = [[]], Oe = 7, _i = 6, Fi = 6, Li = 0, Hi = {
  [b.Left]: (s) => addDays(s, -1),
  [b.Up]: (s) => addWeeks(s, -1),
  [b.Right]: (s) => addDays(s, 1),
  [b.Down]: (s) => addWeeks(s, 1),
  [b.PrevView]: (s) => addMonths(s, -1),
  [b.NextView]: (s) => addMonths(s, 1),
  [b.FirstInView]: (s) => firstDayOfMonth(s),
  [b.LastInView]: (s) => lastDayOfMonth(s)
};
class Bi {
  constructor(t) {
    this.intl = t;
  }
  addToDate(t, e) {
    return addMonths(t, e);
  }
  datesList(t, e) {
    return Q(0, e).map((i) => addMonths(t, i));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: i,
      isActiveView: a,
      max: o,
      min: l,
      selectedDate: c,
      selectionRange: h = q,
      viewDate: u
    } = t;
    if (!u)
      return Ni;
    const d = firstDayOfMonth(u), p = lastDayOfMonth(u), f = -1, m = dayOfWeek(d, this.intl.firstDay(), f), S = Q(0, Oe), I = H();
    return Q(0, _i).map((M) => {
      const w = addDays(m, M * Oe);
      return S.map((E) => {
        const g = this.normalize(addDays(w, E), l, o);
        if (g < d || g > p)
          return null;
        const V = this.isEqual(g, h.start), R = this.isEqual(g, h.end), x = !V && !R && ke(g, h), O = a && (Array.isArray(c) ? this.isSelectedFromArray(g, c, l, o) : F(c, l, o) && this.isEqual(g, c));
        return {
          formattedValue: this.value(g),
          id: `${e}${g.getTime()}`,
          isFocused: this.isEqual(g, i),
          isSelected: O,
          isInRange: F(g, l, o),
          isWeekend: this.isWeekend(g),
          isRangeStart: V,
          isRangeMid: x,
          isRangeEnd: R,
          isRangeSplitStart: x && this.isEqual(g, d),
          isRangeSplitEnd: x && this.isEqual(g, p),
          isToday: this.isEqual(g, I),
          title: this.cellTitle(g),
          value: g
        };
      });
    });
  }
  isEqual(t, e) {
    return !t || !e ? !1 : getDate(t).getTime() === getDate(e).getTime();
  }
  isSelectedFromArray(t, e, i, a) {
    let o = !1;
    return e.forEach((l) => {
      F(t, i, a) && this.isEqual(t, l) && (o = !0);
    }), o;
  }
  isInArray(t, e) {
    return !!e.length && firstDayOfMonth(e[0]) <= t && t <= lastDayOfMonth(e[e.length - 1]);
  }
  isInRange(t, e, i) {
    const a = getDate(t), o = !e || getDate(e) <= a, l = !i || a <= getDate(i);
    return o && l;
  }
  isInSameView(t, e) {
    return durationInMonths(t, e) === 0;
  }
  isRangeStart(t) {
    return !t.getMonth();
  }
  move(t, e) {
    const i = Hi[e];
    return i ? i(t) : t;
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
    return Oe + (t ? 1 : 0);
  }
  skip(t, e) {
    return durationInMonths(e, t);
  }
  total(t, e) {
    return durationInMonths(t, e) + 1;
  }
  value(t) {
    return t ? t.getDate().toString() : "";
  }
  viewDate(t, e, i = 1) {
    return durationInMonths(t, e) < i ? addMonths(t, -1) : t;
  }
  isWeekend(t) {
    const e = t.getDay();
    return e === Fi || e === Li;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, e, i) {
    return t < e && this.isEqual(t, e) ? getDate(e) : t > i && this.isEqual(t, i) ? getDate(i) : t;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: !0 });
  }
}
const Ai = [[]], Pe = 4, zi = 3, qi = (s) => s > 4 ? -5 : s < 2 ? -2 : -7, Wi = (s) => s < 7 ? 5 : s < 10 ? 7 : 2, Ui = {
  [b.Left]: (s) => addMonths(s, -1),
  [b.Up]: (s) => addMonths(s, qi(s.getMonth())),
  [b.Right]: (s) => addMonths(s, 1),
  [b.Down]: (s) => addMonths(s, Wi(s.getMonth())),
  [b.PrevView]: (s) => addYears(s, -1),
  [b.NextView]: (s) => addYears(s, 1),
  [b.FirstInView]: (s) => firstMonthOfYear(s),
  [b.LastInView]: (s) => lastMonthOfYear(s)
};
class $i {
  constructor(t) {
    this._intl = t;
  }
  addToDate(t, e) {
    return addYears(t, e);
  }
  datesList(t, e) {
    return Q(0, e).map((i) => addYears(t, i));
  }
  data(t) {
    const {
      cellUID: e,
      focusedDate: i,
      isActiveView: a,
      max: o,
      min: l,
      selectedDate: c,
      selectionRange: h = q,
      viewDate: u
    } = t;
    if (!u)
      return Ai;
    const d = this.abbrMonthNames(), p = firstMonthOfYear(u), f = lastMonthOfYear(u), m = p.getFullYear(), S = Q(0, Pe), I = H();
    return Q(0, zi).map((M) => {
      const w = addMonths(p, M * Pe);
      return S.map((E) => {
        const g = this.normalize(addMonths(w, E), l, o);
        if (m < g.getFullYear())
          return null;
        const V = this.isEqual(g, h.start), R = this.isEqual(g, h.end), x = !V && !R && ke(g, h), O = a && (Array.isArray(c) ? this.isSelectedFromArray(g, c, l, o) : F(c, l, o) && this.isEqual(g, c));
        return {
          formattedValue: d[g.getMonth()],
          id: `${e}${g.getTime()}`,
          isFocused: this.isEqual(g, i),
          isSelected: O,
          isInRange: F(g, l, o),
          isWeekend: !1,
          isRangeStart: V,
          isRangeMid: x,
          isRangeEnd: R,
          isRangeSplitEnd: x && this.isEqual(g, f),
          isRangeSplitStart: x && this.isEqual(g, p),
          isToday: this.isEqual(g, I),
          title: this.cellTitle(g),
          value: g
        };
      });
    });
  }
  isSelectedFromArray(t, e, i, a) {
    let o = !1;
    return e.forEach((l) => {
      F(t, i, a) && this.isEqual(t, l) && (o = !0);
    }), o;
  }
  isEqual(t, e) {
    return !t || !e ? !1 : t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
  }
  isInArray(t, e) {
    if (!e.length)
      return !1;
    const i = t.getFullYear();
    return e[0].getFullYear() <= i && i <= e[e.length - 1].getFullYear();
  }
  isInRange(t, e, i) {
    const a = createDate(t.getFullYear(), t.getMonth(), 1), o = !e || createDate(e.getFullYear(), e.getMonth(), 1) <= a, l = !i || a <= createDate(i.getFullYear(), i.getMonth(), 1);
    return o && l;
  }
  isInSameView(t, e) {
    return durationInYears(t, e) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 10 === 0;
  }
  move(t, e) {
    const i = Ui[e];
    return i ? i(t) : t;
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
    return Pe;
  }
  skip(t, e) {
    return durationInYears(e, t);
  }
  total(t, e) {
    return durationInYears(t, e) + 1;
  }
  value(t) {
    return t ? this.abbrMonthNames()[t.getMonth()] : "";
  }
  viewDate(t, e, i = 1) {
    return durationInYears(t, e) < i ? addYears(t, -1) : t;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, e, i) {
    return t < e && this.isEqual(t, e) ? cloneDate(e) : t > i && this.isEqual(t, i) ? cloneDate(i) : t;
  }
}
const Yi = {
  [y.month]: Bi,
  [y.year]: $i,
  [y.decade]: Ri,
  [y.century]: Ei
}, Ki = (s, t) => {
  const e = y[y[s + t]];
  return e !== void 0 ? e : s;
};
class zs {
  constructor(t) {
    this.bottom = y.month, this.top = y.century, this.onViewChanged = t;
  }
  configure(t, e) {
    this.bottom = t, this.top = e;
  }
  service(t, e) {
    return new Yi[`${t}`](e);
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
  move(t, e, i) {
    const a = this.clamp(Ki(t, e));
    a !== t && this.onViewChanged({ view: a }, i);
  }
}
let ji = class {
  constructor() {
    this.calendarHeight = 0, this.headerHeight = 0, this.monthViewHeight = 0, this.yearViewHeight = 0, this.decadeViewHeight = 0, this.centuryViewHeight = 0, this.navigationItemHeight = 0, this.scrollableContentHeight = 0, this.scrollableYearContentHeight = 0, this.calendarWidth = 0, this.monthViewWidth = 0, this.yearViewWidth = 0, this.decadeViewWidth = 0, this.centuryViewWidth = 0, this.scrollableContentWidth = 0, this.didCalculate = !1, this.hostContainer = null;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(t) {
    if (!index_mjs_.canUseDOM)
      return;
    const e = Y("div"), i = Y("ul"), a = Y("li"), o = Y("td"), l = Y("th"), c = Y("tr"), h = Y("tbody"), u = Y("thead"), d = Y("table"), p = () => e(
      `
            <span class="k-button k-button-md k-button-rectangle k-button-solid k-button-solid-base k-button-flat k-calendar-title">
                <span className="k-button-text">March 2017</span>
            </span>
            <span class="k-spacer"></span>
            <span class="k-calendar-nav k-hstack"><button class="k-calendar-nav-today">TODAY</button></span>
        `,
      "k-calendar-header k-hstack"
    ), f = () => d(
      [
        u([
          c([l("MO", "k-calendar-th")], "k-calendar-tr")
        ], "k-calendar-thead")
      ],
      "k-calendar-table k-calendar-weekdays"
    ), m = (D, _) => new Array(D).fill("1").map(_), S = (D, _ = 1) => d([
      h(
        [c(
          [o("1", "k-calendar-td k-alt")]
        )].concat(
          m(
            D,
            () => c(m(_, (Mt) => o(`<span class="k-link">${Mt}</span>`, "k-calendar-td")), "k-calendar-tr")
          )
        ),
        "k-calendar-tbody"
      )
    ], "k-calendar-table"), I = (D) => e(D, "k-content k-scrollable"), M = (D, _, Mt) => e(
      Mt ? [
        p(),
        f(),
        I([D, D])
      ] : [
        p(),
        I([D, D])
      ],
      _,
      { left: "-10000px", position: "absolute" }
    ), w = (() => {
      let D;
      return () => index_mjs_.canUseDOM ? (D || (D = e(
        [I([i([a("<span>FEB</span>")])])],
        "k-calendar-navigation",
        { left: "0px", position: "absolute" }
      )), D) : null;
    })(), E = ({ cells: D, rows: _ }, Mt, ti) => {
      let Ie;
      return () => index_mjs_.canUseDOM ? (Ie || (Ie = M(S(_, D), Mt, ti)), Ie) : null;
    }, g = (D) => D.querySelector(".k-scrollable"), B = (D) => {
      const _ = g(D);
      return _.className = `${_.className} k-scrollable-horizontal`, D;
    }, V = E({ cells: 7, rows: 6 }, "k-calendar-view k-calendar-monthview k-vstack", !0), R = E({ cells: 5, rows: 3 }, "k-calendar-view k-calendar-yearview", !1), A = E({ cells: 5, rows: 2 }, "k-calendar-view k-calendar-decadeview", !1), x = () => B(V()), O = () => B(R()), tt = () => B(A()), j = (D) => parseFloat(window.getComputedStyle(D).height) || D.offsetHeight, vt = (D) => {
      const _ = window.getComputedStyle(D);
      return parseFloat(_.width) + parseFloat(_.paddingLeft) + parseFloat(_.paddingRight) || D.offsetWidth;
    }, It = (D) => D.querySelector("tbody");
    this.didCalculate = !0, t && (this.hostContainer = t), this.batch(V(), (D) => {
      const _ = It(D);
      this.calendarHeight = j(D), this.monthViewHeight = j(_), this.headerHeight = j(_.children[0]), this.scrollableContentHeight = j(g(D));
    }), this.batch(x(), (D) => {
      const _ = It(D);
      this.calendarWidth = vt(D), this.monthViewWidth = vt(_), this.scrollableContentWidth = vt(g(D));
    }), this.batch(R(), (D) => {
      this.yearViewHeight = j(It(D)), this.scrollableYearContentHeight = j(g(D));
    }), this.batch(O(), (D) => {
      this.yearViewWidth = vt(It(D));
    }), this.batch(A(), (D) => {
      this.decadeViewHeight = j(It(D)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(tt(), (D) => {
      this.decadeViewWidth = vt(It(D)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch(w(), (D) => {
      this.navigationItemHeight = j(D.querySelector("li"));
    });
  }
  viewHeight(t) {
    return this.viewDimension(t, "height");
  }
  viewWidth(t) {
    return this.viewDimension(t, "width");
  }
  viewDimension(t, e) {
    const i = e === "height" ? "ViewHeight" : "ViewWidth";
    switch (t) {
      case y.month:
        return this[`month${i}`];
      case y.year:
        return this[`year${i}`];
      case y.decade:
        return this[`decade${i}`];
      case y.century:
        return this[`century${i}`];
      default:
        return 1;
    }
  }
  batch(t, e) {
    const i = this.hostContainer || document.body, a = i.appendChild(t);
    e(a), i.removeChild(a);
  }
};
const Zi = {
  33: b.PrevView,
  34: b.NextView,
  35: b.LastInView,
  36: b.FirstInView,
  37: b.Left,
  38: b.Up,
  39: b.Right,
  40: b.Down,
  "meta+38": b.UpperView,
  "meta+40": b.LowerView
};
class qs {
  constructor(t) {
    this.bus = t;
  }
  action(t) {
    const e = `${t.ctrlKey || t.metaKey ? "meta+" : ""}${t.keyCode}`;
    return Zi[e];
  }
  move(t, e, i, a, o) {
    return a ? e === b.UpperView && this.bus.canMoveUp(i) ? (this.bus.moveUp(i, o), t) : e === b.LowerView && this.bus.canMoveDown(i) ? (this.bus.moveDown(i, o), t) : a.move(t, e) : t;
  }
}
const Gi = (s) => (t) => Math.floor(t / s), Xi = (s) => (t) => t * s;
class Ji {
  constructor(t) {
    this.dom = t, this.divideByMagnitude = null, this.powerByMagnitude = null, this.navigator = null, this.view = null, this.monthScrolled = !1, this.navScrolled = !1;
  }
  configure(t) {
    const e = Math.max(this.dom.viewHeight(t) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = Gi(e), this.powerByMagnitude = Xi(e);
  }
  sync(t, e, i) {
    if (!(!t || !e)) {
      if (this.navigator = t, this.view = e, i.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = !1;
          return;
        }
        this.navScrolled = !0, this.scrollSiblingOf(this.navigator.element);
      }
      if (i.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = !1;
          return;
        }
        this.monthScrolled = !0, this.scrollSiblingOf(this.view.element);
      }
    }
  }
  scrollSiblingOf(t) {
    const e = this.siblingComponent(t), i = this.calculateScroll(e, t.scrollTop);
    e.scrollTo(i);
  }
  siblingComponent(t) {
    return this.navigator.element === t ? this.view : this.navigator;
  }
  calculateScroll(t, e) {
    const i = t === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return i ? i(e) : 0;
  }
}
class Qi {
  constructor(t) {
    this.intl = t;
  }
  getWeekNames(t = !1) {
    const e = As(
      this.intl.dateFormatNames({ nameType: "short", type: "days" }),
      this.intl.firstDay()
    );
    return t ? [""].concat(e) : e;
  }
}
const bs = (s) => /* @__PURE__ */ index_js_.createElement("td", { key: s, className: "k-calendar-td" }, " "), Ws = class extends index_js_.Component {
  constructor() {
    super(...arguments), this.intl = null, this.weekService = null, this.buildWeekNumber = (s, t) => {
      if (!this.firstDate(s))
        return bs(`week-cell-${t}`);
      const i = this.firstDate(s), a = this.getWeekNumber(i), o = `kendo-react-calendar-week-cell-${a}`, l = {
        className: "k-alt",
        value: a,
        firstDate: i
      };
      return this.props.weekCell ? /* @__PURE__ */ index_js_.createElement(this.props.weekCell, { ...l, key: o }, a) : /* @__PURE__ */ index_js_.createElement(xi, { ...l, key: o }, a);
    }, this.buildRow = (s) => s.map((t, e) => {
      if (!t)
        return bs(e);
      const i = { "aria-selected": t.isSelected }, a = `kendo-react-calendar-cell-${t.value.getTime()}`, o = {
        ...i,
        ...t,
        isDisabled: !t.isInRange,
        view: this.props.activeView,
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      };
      return this.props.cell ? /* @__PURE__ */ index_js_.createElement(this.props.cell, { ...o, key: a }, t.formattedValue) : /* @__PURE__ */ index_js_.createElement(Si, { ...o, key: a }, t.formattedValue);
    }), this.firstDate = (s) => {
      const t = this.firstWeekDateContext(s);
      return t ? t.value : null;
    }, this.firstWeekDateContext = (s) => {
      if (!this.weekNumber)
        return null;
      let t = 0, e = s[t];
      for (; !e && t < s.length; )
        e = s[++t];
      return e;
    }, this.handleClick = (s, t) => {
      const { onChange: e } = this.props;
      if (e && t) {
        const i = {
          value: cloneDate(s),
          target: this,
          nativeEvent: t && t.nativeEvent,
          syntheticEvent: t
        };
        e.call(void 0, i);
      }
    }, this.handleMouseEnter = (s) => {
      const { onCellEnter: t } = this.props;
      t && t.call(void 0, cloneDate(s));
    }, this.handleMouseLeave = (s) => {
      const { onCellLeave: t } = this.props;
      t && t.call(void 0, cloneDate(s));
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
    return this.props.activeView === y.month;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === y.month);
  }
  get selectedDate() {
    return this.props.selectedDate !== void 0 ? this.props.selectedDate : Ws.defaultProps.selectedDate;
  }
  render() {
    this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.weekService = new Qi(this.intl);
    const s = this.weekService.getWeekNames(this.weekNumber), t = this.props.service.rowLength(this.weekNumber), e = this.props.service.title(this.props.viewDate), i = H(), a = U(this.props.viewDate, i), o = this.props.service.data({
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
      /* @__PURE__ */ index_js_.createElement("tr", { role: "row", className: "k-calendar-tr" }, s.map((l, c) => /* @__PURE__ */ index_js_.createElement("th", { key: c, className: "k-calendar-th" }, l)))
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
          colSpan: t,
          className: "k-calendar-caption"
        },
        e
      )),
      o.map((l, c) => /* @__PURE__ */ index_js_.createElement("tr", { role: "row", className: "k-calendar-tr", key: c }, this.weekNumber && this.buildWeekNumber(l, c), this.buildRow(l)))
    ));
  }
  getWeekNumber(s) {
    return !this.weekNumber || !this.intl ? null : weekInYear(s, this.intl.firstDay());
  }
};
let jt = Ws;
jt.propTypes = {
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
};
jt.defaultProps = {
  direction: "vertical",
  selectedDate: H(),
  showWeekNumbers: !1
};
(0,kendo_react_intl_index_mjs_.registerForIntl)(jt);
class tn extends index_js_.PureComponent {
  /**
   * @return
   * Returns a `<span />` element with the [`value`]({% slug api_dateinputs_calendarheadertitleprops %}#toc-value) of the title as a child.
   */
  render() {
    const { view: t, ...e } = this.props;
    return /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.Button, { type: "button", fillMode: "flat", ...e }, this.props.children);
  }
}
const ce = class extends index_js_.Component {
  constructor() {
    super(...arguments), this.getTitle = () => {
      if (!this.props.currentDate)
        return "";
      const s = this.rangeLength - 1, t = this.props.service.title(this.props.currentDate), e = this.props.service.addToDate(this.props.currentDate, s);
      return s < 1 || !this.props.service.isInRange(e, this.min, this.max) ? t : `${t} - ${this.props.service.title(e)}`;
    }, this.handleTitleClick = (s) => {
      this.canMoveUp && this.props.bus.moveUp(this.props.activeView, s);
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : ce.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : ce.defaultProps.max;
  }
  get rangeLength() {
    return this.props.rangeLength !== void 0 ? this.props.rangeLength : ce.defaultProps.rangeLength;
  }
  get canMoveUp() {
    return this.props.bus.canMoveUp(this.props.activeView);
  }
  render() {
    const s = this.getTitle(), t = (0,index_mjs_.classNames)(
      "k-calendar-title"
    ), e = {
      children: s,
      value: s,
      view: this.props.activeView,
      className: t,
      onClick: this.handleTitleClick,
      disabled: !this.canMoveUp
    }, i = this.props.headerTitle ? /* @__PURE__ */ index_js_.createElement(this.props.headerTitle, { ...e }, s) : /* @__PURE__ */ index_js_.createElement(tn, { ...e }, s);
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: (0,index_mjs_.classNames)("k-calendar-header", {
          "k-vstack": this.props.verticalView,
          "k-hstack": !this.props.verticalView
        })
      },
      i,
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-spacer" }),
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-calendar-nav k-hstack" }, this.props.commands)
    );
  }
};
let Zt = ce;
Zt.propTypes = {
  activeView: prop_types_index_js_.number.isRequired,
  currentDate: prop_types_index_js_.instanceOf(Date).isRequired,
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  rangeLength: prop_types_index_js_.number
};
Zt.defaultProps = {
  rangeLength: 1,
  min: ut,
  max: dt
};
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Zt);
const Ae = "multiviewcalendar.prevView", ze = "multiviewcalendar.nextView", Ft = "dateinput.increment", Lt = "dateinput.decrement", qe = "calendar.today", We = "datepicker.toggleCalendar", Ht = "daterangepicker.swapStartEnd", Ue = "daterangepicker.start", $e = "daterangepicker.end", Ye = "daterangepicker.separator", Bt = "datetimepicker.toggleDateTimeSelector", Ke = "timepicker.now", je = "timepicker.selectNow", ve = "timepicker.cancel", Ut = "timepicker.set", Ze = "timepicker.toggleTimeSelector", ue = "timepicker.toggleClock", Ge = "datetimepicker.date", Xe = "datetimepicker.time", $t = "datetimepicker.cancel", Yt = "datetimepicker.set", Je = "daterangepicker.cancel", Qe = "daterangepicker.set", T = {
  [qe]: "TODAY",
  [Ke]: "NOW",
  [Ut]: "Set",
  [ve]: "Cancel",
  [Ge]: "Date",
  [Xe]: "Time",
  [$t]: "Cancel",
  [Yt]: "Set",
  [Je]: "Cancel",
  [Qe]: "Set",
  [Ue]: "Start",
  [$e]: "End",
  [Ye]: " ",
  [je]: "Select Now",
  [Ze]: "Toggle TimeSelector",
  [ue]: "Toggle Clock",
  [Ft]: "Increase value",
  [Lt]: "Decrease value",
  [We]: "Toggle calendar",
  [Ae]: "Navigate to previous view",
  [ze]: "Navigate to next view",
  [Ht]: "Swap start and end values",
  [Bt]: "Toggle date-time selector"
}, ts = class extends index_js_.Component {
  constructor() {
    super(...arguments), this.localization = null, this.handleClick = (s) => {
      if (this.todayIsInRange && this.props.onClick) {
        const t = {
          syntheticEvent: s,
          nativeEvent: s.nativeEvent,
          value: K(H(), this.min, this.max),
          target: this,
          isTodayClick: !0
        };
        this.props.onClick.call(void 0, t);
      }
    };
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : ts.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : ts.defaultProps.max;
  }
  get todayIsInRange() {
    return F(H(), getDate(this.min), getDate(this.max));
  }
  render() {
    this.localization = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
    const s = this.localization.toLanguageString(qe, T[qe]), t = (0,index_mjs_.classNames)(
      "k-calendar-nav-today",
      {
        "k-disabled": this.props.disabled
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        className: t,
        onClick: this.handleClick,
        tabIndex: this.props.tabIndex,
        fillMode: "flat"
      },
      s
    );
  }
};
let Gt = ts;
Gt.propTypes = {
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  onClick: prop_types_index_js_.func,
  disabled: prop_types_index_js_.bool
};
Gt.defaultProps = {
  min: ut,
  max: dt
};
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Gt);
const en = 5, Us = class extends index_js_.Component {
  constructor(s) {
    super(s), this.virtualization = null, this.calendarView = null, this.table = null, this.intl = null, this.bottomOffset = 0, this.viewOffset = 0, this.viewHeight = 0, this._element = null, this.isActive = !1, this.animateToIndex = !0, this.shouldScroll = !1, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const t = this._element.querySelector("td.k-focus"), e = this._element.querySelector(".k-state-pending-focus");
      t && t[0] && t[0].classList.remove("k-focus"), e && e.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const t = this._element.querySelector("td.k-focus");
      t && t.classList.remove("k-focus"), this.isActive = !1;
    }, this.handleVirtualizationMount = (t) => {
      if (this.virtualization = t, this.virtualization && this.table) {
        this.table.style.transform = `translateY(${this.viewOffset}px)`;
        const e = K(this.props.focusedDate, this.props.min, this.props.max), i = this.props.service.skip(e, this.props.min);
        this.virtualization.scrollToIndex(i);
      }
    }, this.buildMonthView = (t, e) => /* @__PURE__ */ index_js_.createElement(
      "table",
      {
        key: "calendar-view-list-weekdays",
        className: "k-calendar-table k-calendar-weekdays",
        role: "grid",
        tabIndex: this.props.tabIndex
      },
      /* @__PURE__ */ index_js_.createElement("colgroup", null, t.map((i, a) => /* @__PURE__ */ index_js_.createElement("col", { key: a }))),
      /* @__PURE__ */ index_js_.createElement("thead", { className: "k-calendar-thead" }, /* @__PURE__ */ index_js_.createElement("tr", { className: "k-calendar-tr" }, e.map((i, a) => /* @__PURE__ */ index_js_.createElement("th", { key: a, className: "k-calendar-th" }, i))))
    ), this.buildDates = (t, e) => {
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
        /* @__PURE__ */ index_js_.createElement("colgroup", null, t.map((a, o) => /* @__PURE__ */ index_js_.createElement("col", { key: o }))),
        e.map((a) => /* @__PURE__ */ index_js_.createElement(
          jt,
          {
            ref: (o) => {
              this.calendarView || (this.calendarView = o);
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
      const t = this.props.activeView === y.month ? this.props.dom.scrollableContentHeight : this.props.dom.scrollableYearContentHeight;
      this.bottomOffset = t - this.props.dom.viewHeight(this.props.activeView), this.viewOffset = -1 * this.props.dom.headerHeight, this.viewHeight = this.props.dom.viewHeight(this.props.activeView) || 1;
    }, this.getTake = (t, e) => Math.min(e - t, this.take), this.handleScrollAction = ({ index: t, scrollAction: e, pageAction: i }) => {
      const a = i ? i.skip : this.state.skip;
      if ((this.state.index !== t || this.state.skip !== a) && this.setState({ index: t, skip: a }), this.table && e) {
        const o = `translateY(${e.offset}px)`;
        this.table.style.transform = o;
      }
    }, this.handleTodayClick = (t) => {
      this.shouldScroll = !0, this.handleDateChange.call(void 0, t, !0);
    }, this.handleDateChange = (t, e = !1) => {
      const { onChange: i } = this.props;
      if (i) {
        const a = {
          syntheticEvent: t.syntheticEvent,
          nativeEvent: t.nativeEvent,
          value: cloneDate(t.value),
          target: this,
          isTodayClick: e
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
    const s = As(
      this.intl.dateFormatNames({ nameType: "short", type: "days" }),
      this.intl.firstDay()
    );
    return this.weekNumber ? [""].concat(s) : s;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === y.month);
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : Us.defaultProps.take;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get todayIsInRange() {
    return F(H(), getDate(this.props.min), getDate(this.props.max));
  }
  componentDidUpdate(s, t) {
    this.shouldScroll = !1, this.indexToScroll !== void 0 && this.virtualization && this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll), this.isActive && this.focusActiveDate(), this.lastView = this.props.activeView, this.indexToScroll = void 0;
  }
  render() {
    this.calculateHeights();
    const s = this.lastView !== this.props.activeView, t = K(this.props.focusedDate, this.props.min, this.props.max), e = s ? this.props.service.skip(t, this.props.min) : this.state.skip, i = this.props.service.total(this.props.min, this.props.max), a = this.getTake(e, i), o = this.props.service.addToDate(this.props.min, e), l = this.props.service.addToDate(this.props.min, this.state.index), c = new Array(this.props.service.rowLength(this.weekNumber)).fill(""), h = this.props.activeView !== this.lastView;
    this.animateToIndex = !h, (h || !isEqualDate(this.lastFocus, t) || this.shouldScroll || !this.props.shouldScroll || this.props.shouldScroll()) && (this.indexToScroll = this.props.service.skip(t, this.props.min)), this.lastFocus = t;
    const u = (0,index_mjs_.classNames)(
      "k-calendar-view k-vstack",
      {
        "k-calendar-monthview": this.props.activeView === y.month,
        "k-calendar-yearview": this.props.activeView === y.year,
        "k-calendar-decadeview": this.props.activeView === y.decade,
        "k-calendar-centuryview": this.props.activeView === y.century
      }
    ), d = this.buildDates(c, this.props.service.datesList(o, a)), p = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
      Zt,
      {
        key: "calendar-view-list-header",
        currentDate: l,
        min: this.props.min,
        max: this.props.max,
        activeView: this.props.activeView,
        bus: this.props.bus,
        service: this.props.service,
        headerTitle: this.props.headerTitle,
        commands: /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
          Gt,
          {
            min: this.props.min,
            max: this.props.max,
            onClick: this.handleTodayClick,
            disabled: !this.todayIsInRange,
            tabIndex: this.props.tabIndex
          }
        ))
      }
    ), this.props.activeView === y.month && this.buildMonthView(c, this.weekNames), /* @__PURE__ */ index_js_.createElement(
      Kt,
      {
        key: "calendar-view-list-content",
        skip: e,
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
        children: d,
        tabIndex: this.props.tabIndex
      }
    ));
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (f) => {
          this._element = f;
        },
        className: u
      },
      this.props.dom.didCalculate ? p : null
    );
  }
};
let ye = Us;
ye.propTypes = {
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
ye.defaultProps = {
  take: en,
  showWeekNumbers: !1,
  smoothScroll: !0
};
(0,kendo_react_intl_index_mjs_.registerForIntl)(ye);
class sn extends index_js_.Component {
  constructor() {
    super(...arguments), this.handleClick = (t) => {
      const { onClick: e, value: i } = this.props;
      e && e.call(void 0, i, t);
    };
  }
  /**
   * @return
   * Returns a `<li />` element with a `<span />` inside. The text inside represents the [`value`]({% slug api_dateinputs_calendarnavigationitemprops %}#toc-value) of the `navigationItem`.
   */
  render() {
    const { isRangeStart: t, value: e, text: i, ...a } = this.props;
    return /* @__PURE__ */ index_js_.createElement("li", { ...a, onClick: this.handleClick }, /* @__PURE__ */ index_js_.createElement("span", { className: (0,index_mjs_.classNames)({ "k-calendar-navigation-marker": t }) }, this.props.children));
  }
}
const nn = 30, $s = class extends index_js_.Component {
  constructor(s) {
    super(s), this.virtualization = null, this.list = null, this.itemHeight = 0, this.topOffset = 0, this.maxViewHeight = 0, this.bottomOffset = 0, this.handleVirtualizationMount = (i) => {
      if (this.virtualization = i, this.virtualization && this.list) {
        this.list.style.transform = `translateY(${this.topOffset}px)`;
        const a = K(this.props.focusedDate, this.props.min, this.props.max), o = this.props.service.skip(a, this.props.min);
        this.virtualization.scrollToIndex(o);
      }
    }, this.buildNavigationItem = (i) => {
      const a = this.props.service.navigationTitle(i), o = this.props.service.isRangeStart(i), l = `kendo-react-calendar-nav-item-${i.getTime()}`, c = {
        text: a,
        value: i,
        isRangeStart: o,
        view: this.props.activeView,
        onClick: this.handleDateChange
      };
      return this.props.navigationItem ? /* @__PURE__ */ index_js_.createElement(this.props.navigationItem, { ...c, key: l }, a) : /* @__PURE__ */ index_js_.createElement(sn, { ...c, key: l }, a);
    }, this.calculateHeights = () => {
      const i = this.props.dom.calendarHeight;
      this.itemHeight = this.props.dom.navigationItemHeight || 1, this.maxViewHeight = this.props.dom.monthViewHeight, this.topOffset = (i - this.itemHeight) / 2, this.bottomOffset = i - this.itemHeight;
    }, this.handleDateChange = (i, a) => {
      const { onChange: o } = this.props;
      if (o && a) {
        const l = {
          value: cloneDate(i),
          target: this,
          nativeEvent: a && a.nativeEvent,
          syntheticEvent: a
        };
        o.call(void 0, l);
      }
    }, this.handleScrollAction = ({ scrollAction: i, pageAction: a }) => {
      const o = a ? a.skip : this.state.skip;
      if (this.state.skip !== o && this.setState({ skip: o }), this.list && i) {
        const l = `translateY(${i.offset}px)`;
        this.list.style.transform = l;
      }
    }, this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate;
    const t = this.props.service.skip(this.props.focusedDate, this.props.min), e = this.props.service.total(this.props.min, this.props.max);
    this.state = {
      skip: t - this.getTake(t, e) > 0 ? t : 0
    };
  }
  get take() {
    return this.props.take !== void 0 ? this.props.take : $s.defaultProps.take;
  }
  /**
   * @hidden
   */
  componentDidUpdate(s, t) {
    this.indexToScroll !== void 0 && this.virtualization && this.virtualization.scrollToIndex(this.indexToScroll), this.lastView = this.props.activeView, this.lastFocus = this.props.focusedDate, this.indexToScroll = void 0;
  }
  render() {
    this.calculateHeights();
    const s = this.lastView !== this.props.activeView, t = K(this.props.focusedDate, this.props.min, this.props.max), e = s ? this.props.service.skip(t, this.props.min) : this.state.skip, i = this.props.service.total(this.props.min, this.props.max), a = this.getTake(e, i), o = this.props.service.addToDate(this.props.min, e), l = this.props.service.datesList(o, a);
    (this.props.activeView !== this.lastView || !isEqual(t, this.lastFocus)) && (this.indexToScroll = this.props.service.skip(t, this.props.min));
    const c = /* @__PURE__ */ index_js_.createElement(
      Kt,
      {
        skip: e,
        take: this.take,
        total: i,
        itemHeight: this.itemHeight,
        topOffset: this.topOffset,
        bottomOffset: this.bottomOffset,
        onScroll: this.props.onScroll,
        maxScrollDifference: this.maxViewHeight,
        onScrollAction: this.handleScrollAction,
        onMount: this.handleVirtualizationMount,
        tabIndex: this.props.tabIndex
      },
      /* @__PURE__ */ index_js_.createElement("ul", { ref: (h) => {
        this.list = h;
      }, className: "k-reset" }, l.map((h) => this.buildNavigationItem(h)))
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-calendar-navigation"
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-calendar-navigation-highlight" }),
      this.props.dom.didCalculate ? c : null
    );
  }
  getTake(s, t) {
    return Math.min(t - s, this.take);
  }
};
let ns = $s;
ns.propTypes = {
  activeView: prop_types_index_js_.number.isRequired,
  focusedDate: prop_types_index_js_.instanceOf(Date).isRequired,
  max: prop_types_index_js_.instanceOf(Date).isRequired,
  min: prop_types_index_js_.instanceOf(Date).isRequired,
  onChange: prop_types_index_js_.func,
  take: prop_types_index_js_.number,
  tabIndex: prop_types_index_js_.number
};
ns.defaultProps = {
  take: nn
};
const Re = (s) => s ? s.virtualization : null, Ds = (s = bt.defaultProps.min, t = bt.defaultProps.max, e, i) => i !== void 0 ? i !== null && F(getDate(i), s, t) ? i : null : e !== null && F(getDate(e), s, t) ? e : null, pt = class extends index_js_.Component {
  constructor(s) {
    super(s), this.scrollSyncService = null, this.focusedDate = null, this.Navigation = null, this.calendarViewList = null, this._element = null, this.intl = null, this.service = null, this.isActive = !1, this.didNavigationChange = !1, this.focus = () => {
      this._element && this._element.focus();
    }, this.shouldScroll = () => this.didNavigationChange, this.handleScroll = (e) => {
      this.scrollSyncService && this.scrollSyncService.sync(
        Re(this.Navigation),
        Re(this.calendarViewList),
        e
      );
    }, this.handleNavigationChange = (e) => {
      if (this.props.disabled)
        return;
      this.didNavigationChange = !0;
      const i = cloneDate(e.value);
      this.setState({ focusedDate: i });
    }, this.handleViewChange = ({ view: e }) => {
      this.scrollSyncService && this.scrollSyncService.configure(e), this.setState({ activeView: e });
    }, this.handleDateChange = (e) => {
      const i = cloneDate(e.value), a = cloneDate(e.value), o = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (o)
        if (e.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, e.syntheticEvent), this.setState({ focusedDate: a });
          return;
        }
      this.setState({ value: i, focusedDate: a }), this.valueDuringOnChange = i;
      const { onChange: l } = this.props;
      if (l) {
        const c = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: i,
          target: this
        };
        l.call(void 0, c);
      }
      this.valueDuringOnChange = void 0;
    }, this.handleFocus = (e) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: i } = this.props;
      i && i.call(void 0, e);
    }, this.handleBlur = (e) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: i } = this.props;
      i && i.call(void 0, e);
    }, this.handleKeyDown = (e) => {
      const { keyCode: a, ctrlKey: o, metaKey: l } = e;
      if (!(!this.focusedDate || !this.service)) {
        if (a === 84 && this.setState({ focusedDate: H() }), (o || l) && (a === index_mjs_.Keys.left || a === index_mjs_.Keys.right)) {
          if (this.props.disabled)
            return;
          this.didNavigationChange = !0, this.focusedDate.getDate() === 31 && this.focusedDate.setDate(30);
          const c = a === index_mjs_.Keys.left ? this.focusedDate.getMonth() - 1 : this.focusedDate.getMonth() + 1, h = new Date(this.focusedDate.setMonth(c)), u = cloneDate(h);
          this.setState({ focusedDate: u });
        }
        if (a === index_mjs_.Keys.enter) {
          if (this.value !== null && isEqualDate(this.focusedDate, this.value)) {
            const h = K(this.focusedDate, this.min, this.max);
            Re(this.calendarViewList).scrollToIndex(this.service.skip(h, this.min));
          }
          const c = {
            syntheticEvent: e,
            nativeEvent: e.nativeEvent,
            value: this.focusedDate,
            target: this
          };
          this.handleDateChange(c);
        } else {
          const c = K(
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
          if (isEqualDate(this.focusedDate, c))
            return;
          this.setState({ focusedDate: c });
        }
        e.preventDefault();
      }
    }, this.handleMouseDown = (e) => {
      e.preventDefault();
    }, this.handleClick = (e) => {
      this._element && this._element.focus({ preventScroll: !0 });
    }, (0,index_mjs_.validatePackage)(Rt);
    const t = Ds(
      this.min,
      this.max,
      this.props.defaultValue || pt.defaultProps.defaultValue,
      this.props.value
    );
    this.state = {
      value: t,
      activeView: ge(
        y[s.defaultActiveView],
        this.bottomView,
        this.topView
      ),
      focusedDate: K(
        s.focusedDate || t || H(),
        this.min,
        this.max
      )
    }, this.dom = new ji(), this.bus = new zs(this.handleViewChange), this.navigation = new qs(this.bus), this.oldValue = t;
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
    return getDate(this.props.min !== void 0 ? this.props.min : pt.defaultProps.min);
  }
  get max() {
    return getDate(this.props.max !== void 0 ? this.props.max : pt.defaultProps.max);
  }
  get bottomView() {
    return y[this.props.bottomView !== void 0 ? this.props.bottomView : pt.defaultProps.bottomView];
  }
  get topView() {
    return y[this.props.topView !== void 0 ? this.props.topView : pt.defaultProps.topView];
  }
  /**
   * @hidden
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      (0,index_mjs_.setScrollbarWidth)(), this._element && (this.dom.calculateHeights(this._element), this.scrollSyncService = new Ji(this.dom), this.scrollSyncService.configure(this.state.activeView), this.forceUpdate());
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(s, t) {
    (0,index_mjs_.setScrollbarWidth)(), t.activeView !== this.state.activeView && this.scrollSyncService && this.scrollSyncService.configure(this.state.activeView), this.calendarViewList && (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)(), this.didNavigationChange = !1, this.isActive && (this.oldValue = this.value);
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this);
    const s = this.value !== null && this.oldValue !== null ? !isEqualDate(this.value, this.oldValue) : this.value !== this.oldValue, t = ge(
      this.state.activeView,
      y[this.props.bottomView !== void 0 ? this.props.bottomView : pt.defaultProps.bottomView],
      y[this.props.topView !== void 0 ? this.props.topView : pt.defaultProps.topView]
    ), e = Ds(this.min, this.max, this.value, this.value), i = e ? getDate(e) : null;
    this.focusedDate = getDate(K(
      s && e !== null ? e : this.state.focusedDate,
      this.min,
      this.max
    )), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.bus.configure(this.bottomView, this.topView), this.service = this.bus.service(t, this.intl);
    const { smoothScroll: a = Number.parseFloat(index_js_.version) < 18 } = this.props, o = (0,index_mjs_.classNames)(
      "k-widget k-calendar k-calendar-infinite",
      {
        "k-disabled": this.props.disabled,
        "k-week-number": this.props.weekNumber,
        "k-calendar-lg": this.props.mobileMode
      },
      this.props.className
    ), l = [this.props.navigation && /* @__PURE__ */ index_js_.createElement(
      ns,
      {
        key: 0,
        ref: (c) => {
          this.Navigation = c;
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
      ye,
      {
        key: 1,
        ref: (c) => {
          this.calendarViewList = c;
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
        value: i,
        cellUID: this.cellUID,
        headerTitle: this.props.headerTitle,
        tabIndex: this.props.tabIndex
      }
    )];
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (c) => {
          this._element = c;
        },
        className: o,
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
      l
    );
  }
};
let bt = pt;
bt.displayName = "Calendar";
bt.propTypes = {
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
  topView: (s, t, e) => {
    const i = s[t], a = s.bottomView;
    return i && a && y[i] < y[a] ? new Error(
      `Invalid prop + ${t} suplied to ${e}.
                    ${t} can not be smaller than bottomView.
                    `
    ) : null;
  },
  bottomView: (s, t, e) => {
    const i = s[t], a = s.topView;
    return i && a && y[i] > y[a] ? new Error(
      `Invalid prop + ${t} suplied to ${e}.
                    ${t} can not be bigger than topView.
                    `
    ) : null;
  }
};
bt.defaultProps = {
  disabled: !1,
  min: ut,
  max: dt,
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  bottomView: "month"
};
const an = (0,index_mjs_.createPropsContext)(), as = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(an, bt));
as.displayName = "KendoReactCalendar";
(0,kendo_react_intl_index_mjs_.registerForIntl)(bt);
class on {
  constructor() {
    this.symbols = "", this.partMap = [];
  }
}
const rn = "d", ln = "wide", hn = (s, t, e, i) => {
  const a = s[i + s.length - e.length], o = s.substring(0, i + s.length - e.length), l = e.substring(0, i), c = [];
  if (o === l && i > 0)
    return c.push([t[i - 1], l[i - 1]]), c;
  if (o.indexOf(l) === 0 && (l.length === 0 || t[l.length - 1] !== t[l.length])) {
    let h = "";
    l.length === 1 && c.push([t[0], l[0]]);
    for (let u = l.length; u < o.length; u++)
      t[u] !== h && t[u] !== "_" && (h = t[u], c.push([h, ""]));
    return c;
  }
  if (l.indexOf(o) === 0 || t[i - 1] === "_") {
    let h = t[0];
    for (let u = Math.max(0, o.length - 1); u < t.length; u++)
      if (t[u] !== "_") {
        h = t[u];
        break;
      }
    return [[h, l[i - 1]]];
  }
  return l[l.length - 1] === " " || l[l.length - 1] === a ? [[t[i - 1], "_"]] : [[t[i - 1], l[i - 1]]];
}, cn = (s, t) => (s[t.pattern[0]] = t.type, s), un = (s, t, e) => s === null || !(t && t > s || e && e < s), dn = ["k-widget", "k-dateinput"];
class pn {
  constructor(t, e, i) {
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
    }, this._value = getDate(/* @__PURE__ */ new Date()), this.intlProvider = t, this.formatPlaceholder = e, this.format = i, this.monthNames = this.allFormatedMonths();
  }
  get intl() {
    return this.intlProvider();
  }
  get value() {
    return this._value;
  }
  setValue(t) {
    t ? isEqual(t, this._value) || (this._value = cloneDate(t), this.modifyExisting(!0)) : (this._value = getDate(/* @__PURE__ */ new Date()), this.modifyExisting(!1));
  }
  hasValue() {
    const t = (e, i) => e || i.type !== "literal" && i.type !== "dayperiod" && this.getExisting(i.pattern[0]);
    return this.intl.splitDateFormat(this.format).reduce(t, !1);
  }
  getDateObject() {
    for (let t = 0; t < this.knownParts.length; t++)
      if (!this.getExisting(this.knownParts[t]))
        return null;
    return cloneDate(this.value);
  }
  getTextAndFormat() {
    return this.merge(
      this.intl.formatDate(this.value, this.format),
      this.dateFormatString(this.value, this.format)
    );
  }
  modifyExisting(t) {
    const e = this.dateFormatString(this.value, this.format).symbols;
    for (let i = 0; i < e.length; i++)
      this.setExisting(e[i], t);
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
    let i = cloneDate(this.value);
    switch (t) {
      case "y":
        i.setFullYear(i.getFullYear() + e);
        break;
      case "M":
        i = addMonths(this.value, e);
        break;
      case "d":
      case "E":
        i.setDate(i.getDate() + e);
        break;
      case "h":
      case "H":
        i.setHours(i.getHours() + e);
        break;
      case "m":
        i.setMinutes(i.getMinutes() + e);
        break;
      case "s":
        i.setSeconds(i.getSeconds() + e);
        break;
      case "a":
        i.setHours(i.getHours() + 12 * e);
        break;
    }
    this.setExisting(t, !0), this._value = i;
  }
  parsePart(t, e) {
    if (this.resetLeadingZero(), !e)
      return this.setExisting(t, !1), { value: null };
    const i = this.intl.formatDate(this.value, this.format), a = this.dateFormatString(this.value, this.format), o = a.symbols;
    let l = !1, c = "", h = "", u = "";
    for (let f = 0; f < i.length; f++)
      o[f] === t ? (h += this.getExisting(t) ? i[f] : "0", l = !0) : l ? u += i[f] : c += i[f];
    let d = null;
    const p = this.matchMonth(e);
    for (; h.length > 0 && h.charAt(0) === "0"; )
      h = h.slice(1);
    h.length >= 4 && (h = "");
    for (let f = 0; f < 2; f++) {
      let m = h + e, S = parseInt(m, 10);
      if (d = this.intl.parseDate(c + m + u, this.format), !d && !isNaN(S) && !isNaN(parseInt(e, 10))) {
        if (t === "M" && !p) {
          const I = S - 1;
          I > -1 && I < 12 && (d = cloneDate(this.value), d.setMonth(I), d.getMonth() !== I && (d = lastDayOfMonth(addMonths(d, -1))));
        }
        t === "y" && (d = createDate(
          parseInt(m, 10),
          this.month ? this.value.getMonth() : 0,
          this.date ? this.value.getDate() : 1,
          this.hours ? this.value.getHours() : 0,
          this.minutes ? this.value.getMinutes() : 0,
          this.seconds ? this.value.getSeconds() : 0,
          this.milliseconds ? this.value.getMilliseconds() : 0
        ), this.date && d.getDate() !== this.value.getDate() && (d = lastDayOfMonth(addMonths(d, -1))));
      }
      if (d)
        return this._value = d, this.setExisting(t, !0), { value: this.value };
      h = "";
    }
    return p && (d = this.intl.parseDate(c + p + u, this.format), d) ? (this._value = d, this.setExisting(t, !0), { value: this.value }) : (e === "0" && (this.leadingZero = this.isAbbrMonth(a.partMap, t) ? null : { [t]: !0 }, this.setExisting(t, !1)), { value: null });
  }
  symbolMap(t) {
    return this.intl.splitDateFormat(this.format).reduce(cn, {})[t];
  }
  resetLeadingZero() {
    const t = this.leadingZero !== null;
    return this.leadingZero = null, t;
  }
  isAbbrMonth(t, e) {
    const i = this.partPattern(t, e);
    return i.type === "month" && i.names;
  }
  partPattern(t, e) {
    return t.filter((i) => i.pattern.indexOf(e) !== -1)[0];
  }
  matchMonth(t) {
    if (this.typedMonthPart += t.toLowerCase(), this.monthNames.length === 0)
      return "";
    for (; this.typedMonthPart.length > 0; ) {
      for (let i = 0; i < this.monthNames.length; i++)
        if (this.monthNames[i].toLowerCase().indexOf(this.typedMonthPart) === 0)
          return this.monthNames[i];
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
    const i = this.intl.splitDateFormat(e), a = [], o = [];
    for (let c = 0; c < i.length; c++) {
      let h = this.intl.formatDate(t, { pattern: i[c].pattern }).length;
      for (; h > 0; )
        a.push(this.symbols[i[c].pattern[0]] || "_"), o.push(i[c]), h--;
    }
    const l = new on();
    return l.symbols = a.join(""), l.partMap = o, l;
  }
  merge(t, e) {
    let i = "", a = "", o = e.symbols;
    for (let l = o.length - 1; l >= 0; l--)
      if (this.knownParts.indexOf(o[l]) === -1 || this.getExisting(o[l]))
        i = t[l] + i, a = o[l] + a;
      else {
        const c = o[l];
        for (; l >= 0 && c === o[l]; )
          l--;
        for (l++, this.leadingZero && this.leadingZero[c] ? i = "0" + i : i = this.dateFieldName(e.partMap[l]) + i; a.length < i.length; )
          a = o[l] + a;
      }
    return { text: i, format: a };
  }
  dateFieldName(t) {
    const e = this.formatPlaceholder || "wide";
    return e[t.type] ? e[t.type] : e === "formatPattern" ? t.pattern : this.intl.dateFieldName(Object.assign(t, { nameType: e }));
  }
}
const X = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
}, os = (s) => (t, e) => {
  const i = cloneDate(t);
  return i[s](e), i;
}, Ys = [
  { type: X.hour, getter: (s) => s.getHours() },
  { type: X.minute, getter: (s) => s.getMinutes() },
  { type: X.second, getter: (s) => s.getSeconds() },
  { type: X.millisecond, getter: (s) => s.getMilliseconds() }
], mn = (s) => (t, e) => s(t), fn = (s) => (t, e) => s(e), gn = (s) => s.reduce((t, e) => (t[e.type] = e.type, t), {}), vn = (s) => (t) => s[t.type] ? fn(t.getter) : mn(t.getter), wn = (s) => (t) => s.map(vn(gn(t))), bn = (s, t, e, i) => (a) => {
  const o = s(a), l = s(e);
  return i === "hour" ? o - (o - l) % t : a.getTime() <= e.getTime() && o !== 0 && o <= l ? Math.ceil(o / t) * t : o - o % t;
}, Dn = (s) => (t, e) => s.map((i) => {
  const a = Math.floor(t[i.type]);
  return a ? bn(i.getter, a, e, i.type) : i.getter;
}), kn = wn(Ys), ks = Dn(Ys), yn = (s) => (t, e) => (t.setHours(...s.map((i) => i(t, e))), t), ys = (s) => (t) => {
  const e = cloneDate(t);
  return e.setHours(...s.map((i) => i(e))), e;
}, de = os("setHours"), pe = os("setMinutes"), me = os("setSeconds"), Vt = () => /* @__PURE__ */ new Date(), rs = (s, t, e = 1) => {
  const i = [];
  for (let a = s; a < t; a = a + e)
    i.push(a);
  return i;
}, ls = (s, t, e) => ({
  candidateValue: U(L, s),
  maxValue: addDays(U(L, e), t.getHours() < e.getHours() ? 0 : 1),
  minValue: U(L, t)
}), Sn = (s, t, e) => {
  if (!s || !t || !e)
    return s;
  const {
    candidateValue: i,
    minValue: a,
    maxValue: o
  } = ls(s, t, e);
  return i < a ? U(s, t) : i > o ? U(s, e) : s;
}, hs = (s, t, e) => {
  if (!s || !t || !e)
    return !0;
  const {
    candidateValue: i,
    minValue: a,
    maxValue: o
  } = ls(s, t, e);
  return a <= i && i <= o;
}, xn = (s, t, e) => {
  if (s === null)
    return !0;
  const {
    candidateValue: i,
    minValue: a,
    maxValue: o
  } = ls(s, t, e);
  return a <= i && i <= o;
}, Cn = (s, t) => {
  if (s === null || t === null)
    return !1;
  const e = U(L, s), i = U(L, t);
  return e.getTime() < i.getHours();
}, In = (s, t) => {
  if (s === null || t === null)
    return !1;
  const e = U(L, s);
  return U(L, t).getTime() < e.getHours();
}, Mn = "Please enter a valid value!", Z = class extends index_js_.Component {
  constructor(s) {
    super(s), this.kendoDate = null, this.currentFormat = "", this.paste = !1, this._element = null, this._wrapper = null, this._lastSelectedSymbol = "", this.focus = () => {
      this._element && this._element.focus();
    }, this.setValidity = () => {
      this.element && this.element.setCustomValidity && this.element.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || Z.defaultProps.validationMessage
      );
    }, this.updateOnPaste = (t) => {
      if (!this.element || !this.kendoDate)
        return;
      const e = (0,kendo_react_intl_index_mjs_.provideIntlService)(this).parseDate(this.element.value, this.props.format) || this.value, i = this.value;
      this.kendoDate.setValue(e), this.triggerChange(t, i);
    }, this.spinnersMouseDown = (t) => {
      t.preventDefault();
      const e = (0,index_mjs_.getActiveElement)(document);
      this.element && e !== this.element && this.element.focus({ preventScroll: !0 });
    }, this.handlePaste = () => {
      this.paste = !0;
    }, this.elementChange = (t) => {
      if (!this.element || !this.kendoDate)
        return;
      if (this.paste) {
        this.updateOnPaste(t), this.paste = !1;
        return;
      }
      const { text: e, format: i } = this.kendoDate.getTextAndFormat();
      this.currentFormat = i;
      const a = this.value, o = hn(
        e,
        this.currentFormat,
        this.element.value,
        this.selection.start
      ), l = o.length === 1 && o[0][1] === "_";
      if (!l)
        for (let c = 0; c < o.length; c++)
          this.kendoDate.parsePart(o[c][0], o[c][1]);
      o.length && o[0][0] !== "_" && this.setSelection(this.selectionBySymbol(o[0][0])), l && this.switchDateSegment(1), this.triggerChange(t, a);
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
    }, (0,index_mjs_.validatePackage)(Rt), this.state = {
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
  componentDidUpdate(s, t) {
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
      size: s = Z.defaultProps.size,
      fillMode: t = Z.defaultProps.fillMode,
      rounded: e = Z.defaultProps.rounded
    } = this.props;
    this.props._ref && (this.props._ref.current = this);
    const i = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), a = { ...Z.defaultProps, ...this.props }, { name: o, label: l, id: c } = a, h = this.text, u = h === this.props.placeholder ? "" : h, d = h === this.props.placeholder ? h : void 0, p = c || this._inputId, f = !this.validityStyles || this.validity.valid;
    let m = [...dn];
    this.props.className && m.push(this.props.className);
    const S = /* @__PURE__ */ index_js_.createElement(index_mjs_.AsyncFocusBlur, { onFocus: this.elementOnFocus, onBlur: this.elementOnBlur }, ({ onFocus: I, onBlur: M }) => /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        ref: (w) => {
          this._wrapper = w;
        },
        style: l ? void 0 : { width: this.props.width },
        dir: this.props.dir,
        className: (0,index_mjs_.classNames)(
          "k-dateinput",
          "k-input",
          {
            [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[s] || s}`]: s,
            [`k-input-${t}`]: t,
            [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[e] || e}`]: e,
            "k-invalid": !f,
            "k-required": this.required,
            "k-disabled": this.props.disabled
          },
          this.props.className
        ),
        onFocus: I,
        onBlur: M
      },
      /* @__PURE__ */ index_js_.createElement(
        "input",
        {
          role: this.props.ariaRole || "textbox",
          readOnly: this.props.readonly,
          tabIndex: this.props.tabIndex,
          disabled: this.props.disabled,
          title: this.props.title !== void 0 ? this.props.title : h,
          type: "text",
          spellCheck: !1,
          autoComplete: "off",
          autoCorrect: "off",
          className: "k-input-inner",
          id: p,
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
          value: u,
          placeholder: d,
          name: o,
          ref: (w) => this._element = w
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
          "aria-label": i.toLanguageString(Ft, T[Ft]),
          title: i.toLanguageString(Ft, T[Ft]),
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
          "aria-label": i.toLanguageString(Lt, T[Lt]),
          title: i.toLanguageString(Lt, T[Lt]),
          onClick: this.decreasePart
        }
      ))
    ));
    return l ? /* @__PURE__ */ index_js_.createElement(
      kendo_react_labels_index_mjs_.FloatingLabel,
      {
        label: l,
        editorId: p,
        editorValue: h,
        editorValid: f,
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
    return this.props.min !== void 0 ? this.props.min : Z.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : Z.defaultProps.max;
  }
  /**
   * @hidden
   */
  get text() {
    const s = { ...Dt.defaultProps, ...this.props }, {
      formatPlaceholder: t = Z.defaultProps.formatPlaceholder,
      format: e = Z.defaultProps.format,
      value: i,
      defaultValue: a
    } = s;
    this.kendoDate === null ? (this.kendoDate = new pn(this.intl.bind(this), t, e), this.kendoDate.setValue(i || a || null)) : (this.kendoDate.format = e, this.kendoDate.formatPlaceholder = t), i !== void 0 && this.value !== i && this.kendoDate.setValue(i);
    const { text: o, format: l } = this.kendoDate.getTextAndFormat();
    return this.currentFormat = l, s.placeholder !== null && s.placeholder !== void 0 && !this.state.focused && !this.kendoDate.hasValue() ? s.placeholder : o;
  }
  /**
   * Represents the validity state into which the DateInput is set.
   */
  get validity() {
    const s = un(this.value, this.min, this.max) && hs(this.value, this.props.minTime, this.props.maxTime), t = this.props.validationMessage !== void 0, e = (!this.required || this.value !== null) && s, i = this.props.valid !== void 0 ? this.props.valid : e;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: i,
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
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : Z.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : Z.defaultProps.required;
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
    let s = { start: 0, end: 0 };
    return this.element !== null && this.element.selectionStart !== void 0 && (s = { start: this.element.selectionStart, end: this.element.selectionEnd }), s;
  }
  setSelection(s) {
    this._lastSelectedSymbol = this.currentFormat[s.start], window.requestAnimationFrame(() => {
      const t = (0,index_mjs_.getActiveElement)(document);
      this.element && t === this.element && !this.props.disableSelection && this.element.setSelectionRange(s.start, s.end);
    });
  }
  triggerChange(s, t) {
    this.valueDuringOnChange = this.value, this.forceUpdate(), this.props.onChange && !isEqual(t, this.value) && this.props.onChange.call(void 0, {
      syntheticEvent: s,
      nativeEvent: s.nativeEvent,
      value: this.value,
      target: this
      // inRange: this.props.min && this.props.max ? isInRange(value, this.props.min, this.props.max) : true
    }), this.valueDuringOnChange = void 0;
  }
  selectionBySymbol(s) {
    let t = -1, e = 0;
    for (let i = 0; i < this.currentFormat.length; i++)
      this.currentFormat[i] === s && (e = i + 1, t === -1 && (t = i));
    return t < 0 && (t = 0), { start: t, end: e };
  }
  selectionByIndex(s) {
    let t = { start: s, end: s };
    for (let e = s, i = s - 1; e < this.currentFormat.length || i >= 0; e++, i--) {
      if (e < this.currentFormat.length && this.currentFormat[e] !== "_") {
        t = this.selectionBySymbol(this.currentFormat[e]);
        break;
      }
      if (i >= 0 && this.currentFormat[i] !== "_") {
        t = this.selectionBySymbol(this.currentFormat[i]);
        break;
      }
    }
    return t;
  }
  switchDateSegment(s) {
    const { start: t, end: e } = this.selection;
    if (t < e && this.currentFormat[t] !== this.currentFormat[e - 1]) {
      this.setSelection(this.selectionByIndex(s > 0 ? t : e - 1));
      return;
    }
    const i = this.currentFormat[t];
    let a = t + s;
    for (; a > 0 && a < this.currentFormat.length && !(this.currentFormat[a] !== i && this.currentFormat[a] !== "_"); )
      a += s;
    if (this.currentFormat[a] === "_")
      return;
    let o = a;
    for (; o >= 0 && o < this.currentFormat.length && this.currentFormat[o] === this.currentFormat[a]; )
      o += s;
    a > o && (o + 1 !== t || a + 1 !== e) ? this.setSelection({ start: o + 1, end: a + 1 }) : a < o && (a !== t || o !== e) && this.setSelection({ start: a, end: o });
  }
  modifyDateSegmentValue(s, t) {
    if (!this.kendoDate)
      return;
    const e = this.value, i = this.currentFormat[this.selection.start], a = this.kendoDate.symbolMap(i), o = ((this.props.steps || {})[a] || 1) * s;
    this.kendoDate.modifyPart(i, o), this.triggerChange(t, e);
  }
};
let Ct = Z;
Ct.displayName = "DateInput";
Ct.propTypes = {
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
};
Ct.defaultProps = {
  format: rn,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  formatPlaceholder: ln,
  // defaultValue: null as Date | null,
  spinners: !1,
  disabled: !1,
  max: cloneDate(dt),
  min: cloneDate(ut),
  minTime: cloneDate(Nt),
  maxTime: cloneDate(xt),
  required: !1,
  validityStyles: !0,
  validationMessage: Mn,
  placeholder: null,
  // the rest of the properties are undefined by default
  ariaHasPopup: "grid"
};
const Tn = (0,index_mjs_.createPropsContext)(), Dt = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(Tn, Ct));
Dt.displayName = "KendoReactDateInput";
(0,kendo_react_intl_index_mjs_.registerForIntl)(Ct);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Ct);
const En = kendo_react_buttons_index_mjs_.Button, Vn = index_js_.forwardRef((s, t) => {
  const { _ref: e } = s, i = index_js_.useRef(null);
  index_js_.useImperativeHandle(t, () => i.current), index_js_.useImperativeHandle(e, () => i.current);
  const a = index_js_.useMemo(
    () => (0,index_mjs_.classNames)(s.className, "k-picker-wrap"),
    [s.className]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      ref: i,
      id: s.id,
      style: s.style,
      className: a,
      tabIndex: s.tabIndex
    },
    s.children
  );
}), On = (s) => {
  const [t, e] = index_js_.useState(!1), i = () => {
    s.current && e(!!s.current.text);
  };
  return index_js_.useEffect(i), {
    editorValue: t
  };
}, cs = (s) => {
  const t = On(s.dateInput);
  return /* @__PURE__ */ index_js_.createElement(
    kendo_react_labels_index_mjs_.FloatingLabel,
    {
      ...s,
      ...t
    }
  );
}, Ss = 500, Se = (s) => {
  const {
    footer: t,
    children: e,
    windowWidth: i = 0,
    navigatable: a,
    navigatableElements: o,
    expand: l,
    animation: c,
    onClose: h,
    adaptiveTitle: u,
    mobileFilter: d
  } = s, p = {
    navigatable: a || !1,
    navigatableElements: o || [],
    expand: l,
    animation: c !== !1,
    onClose: h,
    animationStyles: i <= Ss ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: i <= Ss ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
  };
  return /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheet, { ...p }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetHeader, { className: "k-text-center" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-title" }, /* @__PURE__ */ index_js_.createElement("div", null, u)), /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-actions" }, /* @__PURE__ */ index_js_.createElement(
    kendo_react_buttons_index_mjs_.Button,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      icon: "x",
      svgIcon: index_es_js_.xIcon,
      onClick: h
    }
  ))), d && /* @__PURE__ */ index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, d)), e, t && /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetFooter, { className: "k-actions k-actions-stretched" }, /* @__PURE__ */ index_js_.createElement(
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
}, xe = 768, z = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._dateInput = index_js_.createRef(), this._calendar = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.setCalendarRef = (t) => {
      this._calendar = t;
    }, this.nextValue = (t, e) => t.value !== void 0 ? t.value : e.value, this.nextShow = (t, e) => t.show !== void 0 ? t.show : e.show, this.renderPopup = () => {
      const { disabled: t, min: e, max: i, weekNumber: a, focusedDate: o } = this.props, { popupClass: l, ...c } = this.props.popupSettings, h = this.show, u = this.value, d = u && getDate(u), p = (0,index_mjs_.classNames)(
        "k-calendar-container k-group k-reset",
        l
      ), f = {
        popupClass: "k-datepicker-popup",
        show: h,
        anchor: this._element,
        className: p,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...c
      }, m = {
        disabled: t,
        value: d,
        min: e,
        max: i,
        weekNumber: a,
        focusedDate: o,
        className: this.mobileMode ? "k-calendar-lg" : "",
        navigation: !this.mobileMode,
        onChange: this.handleCalendarValueChange
      };
      return this.mobileMode ? /* @__PURE__ */ index_js_.createElement(this.calendarComp, { _ref: this.setCalendarRef, ...m }) : /* @__PURE__ */ index_js_.createElement(this.popupComp, { ...f }, /* @__PURE__ */ index_js_.createElement(this.calendarComp, { _ref: this.setCalendarRef, ...m }));
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, e = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t
      };
      return /* @__PURE__ */ index_js_.createElement(Se, { ...e }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderPopup()));
    }, this.handleInputValueChange = (t) => {
      this.handleValueChange(t.value, t);
    }, this.handleCalendarValueChange = (t) => {
      const e = this.mergeTime(t.value);
      this.handleValueChange(e, t);
    }, this.handleValueChange = (t, e) => {
      this.setState({
        value: cloneDate(t || void 0)
      }), this.valueDuringOnChange = t, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: i } = this.props;
      i && i.call(void 0, {
        syntheticEvent: e.syntheticEvent,
        nativeEvent: e.nativeEvent,
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
      const { altKey: e, keyCode: i } = t;
      if (i === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      e && (i === index_mjs_.Keys.up || i === index_mjs_.Keys.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = i === index_mjs_.Keys.up, this.setShow(i === index_mjs_.Keys.down));
    }, (0,index_mjs_.validatePackage)(Rt), this.state = {
      value: this.props.defaultValue || z.defaultProps.defaultValue,
      show: this.props.defaultShow || z.defaultProps.defaultShow,
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
    return !!(this.state.windowWidth && this.state.windowWidth <= xe && this.props.adaptive);
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
    const s = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return s !== null ? cloneDate(s) : null;
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
    return this.props.min !== void 0 ? this.props.min : z.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : z.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || z.defaultProps.dateInput;
  }
  get toggleButtonComp() {
    return this.props.toggleButton || z.defaultProps.toggleButton;
  }
  get calendarComp() {
    return this.props.calendar || z.defaultProps.calendar;
  }
  get popupComp() {
    return this.props.popup || z.defaultProps.popup;
  }
  get pickerWrapComp() {
    return this.props.pickerWrap || z.defaultProps.pickerWrap;
  }
  /**
   * Represents the validity state into which the DatePicker is set.
   */
  get validity() {
    const s = Hs(this.value, this.min, this.max), t = this.props.validationMessage !== void 0, e = (!this.required || this.value !== null) && s, i = this.props.valid !== void 0 ? this.props.valid : e;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: i,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : z.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : z.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var s;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (s = this.document) != null && s.body && this.observerResize && this.observerResize.observe(this.document.body);
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
    var s;
    clearTimeout(this.nextTickId), (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: s = z.defaultProps.size,
      rounded: t = z.defaultProps.rounded,
      fillMode: e = z.defaultProps.fillMode,
      disabled: i,
      tabIndex: a,
      title: o,
      id: l,
      format: c,
      formatPlaceholder: h,
      min: u,
      max: d,
      className: p,
      width: f,
      name: m,
      validationMessage: S,
      required: I,
      validityStyles: M,
      ariaLabelledBy: w,
      ariaDescribedBy: E,
      ariaLabel: g
    } = this.props, B = this.show, V = this.value, R = !this.validityStyles || this.validity.valid, A = {
      disabled: i,
      format: c,
      formatPlaceholder: h,
      id: l,
      ariaLabelledBy: w,
      ariaDescribedBy: E,
      ariaLabel: g,
      max: d,
      min: u,
      name: m,
      onChange: this.handleInputValueChange,
      required: I,
      tabIndex: B ? -1 : a,
      title: o,
      valid: this.validity.valid,
      validationMessage: S,
      validityStyles: M,
      value: V,
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null
    }, x = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(We, T[We]), O = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: tt, onBlur: j }) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          ref: (vt) => {
            this._element = vt;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-datepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[s] || s}`]: s,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[t] || t}`]: t,
              [`k-input-${e}`]: e,
              ["k-invalid"]: !R,
              ["k-required"]: this.required,
              ["k-disabled"]: this.props.disabled
            },
            p
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: f },
          onFocus: tt,
          onBlur: j,
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
            title: x,
            className: "k-input-button",
            rounded: null,
            onClick: this.mobileMode ? void 0 : this.handleIconClick,
            "aria-label": x,
            onMouseDown: this.handleIconMouseDown
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ index_js_.createElement(
      cs,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: l,
        editorValid: R,
        editorDisabled: this.props.disabled,
        children: O,
        style: { width: this.props.width }
      }
    ) : O;
  }
  setShow(s) {
    const { onOpen: t, onClose: e } = this.props;
    this.show !== s && (this.setState({ show: s }), s && t && t.call(void 0, {
      target: this
    }), !s && e && e.call(void 0, {
      target: this
    }));
  }
  mergeTime(s) {
    return this.value && s ? U(s, this.value) : s;
  }
  nextTick(s) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => s());
  }
  calculateMedia(s) {
    for (let t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
let Xt = z;
Xt.displayName = "DatePicker";
Xt.propTypes = {
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
};
Xt.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  dateInput: Dt,
  calendar: as,
  toggleButton: En,
  popup: kendo_react_popup_index_mjs_.Popup,
  pickerWrap: Vn,
  disabled: !1,
  format: "d",
  max: dt,
  min: ut,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  required: !1,
  validityStyles: !0,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const Pn = (0,index_mjs_.createPropsContext)(), Rn = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(Pn, Xt));
Rn.displayName = "KendoReactDatePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Xt);
const Ne = (s, t) => {
  const e = cloneDate(s);
  return e.setHours(t), e;
}, _e = (s) => s !== null && s < 12, Nn = (s) => s !== null && (!s || s > 11), _n = (s, t, e) => !t && !e || s >= t && s <= e, Fn = (s, t, e) => !t && !e || s >= t || s <= e;
class Ln {
  constructor(t) {
    this.intl = t, this.min = null, this.max = null, this.part = null;
  }
  /**
   * @hidden
   */
  apply(t, e) {
    const i = t.getHours(), a = _e(i), o = _e(e.getHours());
    if (a && o || !a && !o)
      return t;
    const [l, c = 24] = this.normalizedRange(), h = i + (o ? -12 : 12);
    return Ne(t, Math.min(Math.max(l, h), c || 24));
  }
  /**
   * @hidden
   */
  configure(t) {
    const { min: e = this.min, max: i = this.max, part: a = this.part } = t;
    this.min = e, this.max = i, this.part = a;
  }
  /**
   * @hidden
   */
  data(t) {
    const e = this.part && this.part.names;
    if (!e || !this.min)
      return [];
    const i = [], [a, o] = this.normalizedRange(), l = this.intl.dateFormatNames(e);
    return _e(a) && i.push({ text: l.am, value: Ne(this.min, a) }), Nn(o) && i.push({ text: l.pm, value: Ne(this.min, Math.max(12, o)) }), this.min.getHours() !== a ? i.reverse() : i;
  }
  /**
   * @hidden
   */
  isRangeChanged(t, e) {
    return !1;
  }
  /**
   * @hidden
   */
  limitRange(t, e, i) {
    return [t, e];
  }
  /**
   * @hidden
   */
  total() {
    const [t, e] = this.normalizedRange();
    return !t && !e ? 2 : t > 11 || e < 12 ? 1 : 2;
  }
  /**
   * @hidden
   */
  selectedIndex(t) {
    if (!this.valueInList(t) || !this.min)
      return -1;
    const e = Math.floor(t.getHours() / 12);
    return this.min.getHours() === this.normalizedRange()[0] ? e : e === 0 ? 1 : 0;
  }
  /**
   * @hidden
   */
  valueInList(t) {
    return !this.min || !this.max ? !1 : (this.min.getHours() !== this.normalizedRange()[0] ? Fn : _n)(t.getHours(), this.min.getHours(), this.max.getHours());
  }
  normalizedRange() {
    const t = this.min.getHours(), e = this.max.getHours();
    return [
      Math.min(t, e),
      Math.max(t, e)
    ];
  }
}
class Hn {
  constructor() {
    this.itemHeight = 0, this.timeListHeight = 0, this.didCalculate = !1;
  }
  ensureHeights() {
    this.timeListHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(t) {
    if (!index_mjs_.canUseDOM)
      return;
    const e = Y("div"), i = Y("span"), a = Y("ul"), o = Y("li"), l = () => o("<span>02</span>", "k-item"), c = () => a([l()], "k-reset"), h = () => e([c()], "k-content k-scrollable k-time-container"), d = (() => e(
      [
        i("minute", "k-title"),
        e([h()], "k-time-list")
      ],
      "k-time-list-wrapper",
      { left: "-10000px", position: "absolute" }
    ))(), f = t && t.querySelector(".k-time-container") || document.body, m = f.appendChild(d);
    this.timeListHeight = m.querySelector(".k-scrollable").offsetHeight, this.itemHeight = m.querySelector("li").offsetHeight, f.removeChild(m), this.didCalculate = !0;
  }
}
const us = 24, Bn = (s) => (t) => t % s, Ks = Bn(us), An = (s, t) => (e) => Ks(s + e * t), xs = (s, t) => Ks(us + s - t), js = (s) => (t, e) => !e || getDate(t).getTime() === getDate(e).getTime() ? t : de(t, s), zn = js(0), qn = js(us - 1);
class Wn {
  constructor(t) {
    this.intl = t, this.boundRange = !1, this.insertUndividedMax = !1, this.min = null, this.max = null, this.step = 0, this.toListItem = null;
  }
  apply(t, e) {
    return de(t, e.getHours());
  }
  configure(t) {
    const {
      boundRange: e = this.boundRange,
      insertUndividedMax: i = this.insertUndividedMax,
      min: a = this.min,
      max: o = this.max,
      part: l,
      step: c = this.step
    } = t;
    this.boundRange = e, this.insertUndividedMax = i, this.toListItem = (h) => {
      const u = de(L, h);
      return {
        text: this.intl.formatDate(u, l.pattern),
        value: u
      };
    }, this.min = a, this.max = o, this.step = c;
  }
  data(t) {
    const [e] = this.range(t), i = An(e, this.step), a = (l) => this.toListItem && this.toListItem(i(l)), o = rs(0, this.countFromMin(t)).map(a);
    return this.addLast(o), t && this.addMissing(o, t), o;
  }
  isRangeChanged(t, e) {
    return !this.min || !this.max ? !1 : !isEqual(this.min, t) || !isEqual(this.max, e);
  }
  limitRange(t, e, i) {
    return this.boundRange ? [zn(t, i), qn(e, i)] : [t, e];
  }
  total(t) {
    const e = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, i = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + i + e;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastHour(t) === t.getHours() || !this.isMissing(t) : !0;
  }
  addLast(t, e) {
    return this.insertUndividedMax && this.isLastMissing(e) && this.toListItem && t.push(this.toListItem(this.lastHour(e))), t;
  }
  addMissing(t, e) {
    if (this.valueInList(e))
      return t;
    if (this.toListItem) {
      const i = this.toListItem(e.getHours());
      t.splice(this.selectedIndex(e), 0, i);
    }
    return t;
  }
  countFromMin(t) {
    const [e, i] = this.range(t);
    return Math.floor(xs(i, e) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(de(this.max, this.lastHour(t)));
  }
  divideByStep(t) {
    return xs(t.getHours(), this.min.getHours()) / this.step;
  }
  lastHour(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [e, i] = this.limitRange(this.min, this.max, t);
    return [e.getHours(), i.getHours()];
  }
}
const ds = 60, Un = (s) => (t) => t % s, Zs = Un(ds), $n = (s, t) => (e) => Zs(s + e * t), Cs = (s, t) => Zs(ds + s - t), Gs = (s) => (t, e) => !e || t.getHours() === e.getHours() ? t : pe(t, s), Yn = Gs(0), Kn = Gs(ds - 1);
class jn {
  constructor(t) {
    this.intl = t, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(t, e) {
    return pe(t, e.getMinutes());
  }
  configure(t) {
    const {
      insertUndividedMax: e = this.insertUndividedMax,
      min: i = this.min,
      max: a = this.max,
      part: o,
      step: l = this.step
    } = t;
    this.insertUndividedMax = e, this.toListItem = (c) => {
      const h = pe(L, c);
      return {
        text: this.intl.formatDate(h, o.pattern),
        value: h
      };
    }, this.min = i, this.max = a, this.step = l;
  }
  data(t) {
    const [e] = this.range(t), i = $n(e, this.step), a = (l) => this.toListItem && this.toListItem(i(l)), o = rs(0, this.countFromMin(t)).map(a);
    return this.addLast(o), t && this.addMissing(o, t), o;
  }
  isRangeChanged(t, e) {
    return this.min !== null && this.max !== null && (!isEqual(this.min, t) || !isEqual(this.max, e));
  }
  limitRange(t, e, i) {
    return [Yn(t, i), Kn(e, i)];
  }
  total(t) {
    const e = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, i = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + i + e;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastMinute(t) === t.getMinutes() || !this.isMissing(t) : !0;
  }
  addLast(t, e) {
    return this.insertUndividedMax && this.isLastMissing(e) && this.toListItem && t.push(this.toListItem(this.lastMinute(e))), t;
  }
  addMissing(t, e) {
    if (this.valueInList(e))
      return t;
    if (this.toListItem) {
      const i = this.toListItem(e.getMinutes());
      t.splice(this.selectedIndex(e), 0, i);
    }
    return t;
  }
  countFromMin(t) {
    const [e, i] = this.range(t);
    return Math.floor(Cs(i, e) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(pe(this.max, this.lastMinute(t)));
  }
  divideByStep(t) {
    return Cs(t.getMinutes(), this.min.getMinutes()) / this.step;
  }
  lastMinute(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [e, i] = this.limitRange(this.min, this.max, t);
    return [e.getMinutes(), i.getMinutes()];
  }
}
const ps = 60, Zn = (s) => (t) => t % s, Xs = Zn(ps), Gn = (s, t) => (e) => Xs(s + e * t), Is = (s, t) => Xs(ps + s - t), Js = (s) => (t, e) => !e || t.getMinutes() === e.getMinutes() && t.getHours() === e.getHours() ? t : me(t, s), Xn = Js(0), Jn = Js(ps - 1);
class Qn {
  constructor(t) {
    this.intl = t, this.toListItem = null, this.min = null, this.max = null, this.step = 0, this.insertUndividedMax = !1;
  }
  apply(t, e) {
    return me(t, e.getSeconds());
  }
  configure(t) {
    const {
      insertUndividedMax: e = this.insertUndividedMax,
      min: i = this.min,
      max: a = this.max,
      part: o,
      step: l = this.step
    } = t;
    this.insertUndividedMax = e, this.toListItem = (c) => {
      const h = me(L, c);
      return {
        text: this.intl.formatDate(h, o.pattern),
        value: h
      };
    }, this.min = i, this.max = a, this.step = l;
  }
  data(t) {
    const [e] = this.range(t), i = Gn(e, this.step), a = (l) => this.toListItem && this.toListItem(i(l)), o = rs(0, this.countFromMin(t)).map(a);
    return this.addLast(o), t && this.addMissing(o, t), o;
  }
  isRangeChanged(t, e) {
    return this.min !== null && this.max !== null && (!isEqual(this.min, t) || !isEqual(this.max, e));
  }
  limitRange(t, e, i) {
    return [Xn(t, i), Jn(e, i)];
  }
  total(t) {
    const e = this.insertUndividedMax && this.isLastMissing(t) ? 1 : 0, i = this.isMissing(t) ? 1 : 0;
    return this.countFromMin(t) + i + e;
  }
  selectedIndex(t) {
    return Math.ceil(this.divideByStep(t));
  }
  valueInList(t) {
    return t ? this.insertUndividedMax && this.lastSecond(t) === t.getSeconds() || !this.isMissing(t) : !0;
  }
  divideByStep(t) {
    return Is(t.getSeconds(), this.min.getSeconds()) / this.step;
  }
  addLast(t, e) {
    return this.insertUndividedMax && this.isLastMissing(e) && this.toListItem && t.push(this.toListItem(this.lastSecond(e))), t;
  }
  addMissing(t, e) {
    if (this.valueInList(e))
      return t;
    if (this.toListItem) {
      const i = this.toListItem(e.getSeconds());
      t.splice(this.selectedIndex(e), 0, i);
    }
    return t;
  }
  countFromMin(t) {
    const [e, i] = this.range(t);
    return Math.floor(Is(i, e) / this.step) + 1;
  }
  isMissing(t) {
    return t ? this.selectedIndex(t) !== this.divideByStep(t) : !1;
  }
  isLastMissing(t) {
    return this.max !== null && this.isMissing(me(this.max, this.lastSecond(t)));
  }
  lastSecond(t) {
    return this.range(t)[1];
  }
  range(t) {
    const [e, i] = this.limitRange(this.min, this.max, t);
    return [e.getSeconds(), i.getSeconds()];
  }
}
const ta = 2, Ms = 0.05, ea = 100, sa = 0, Ts = 9, ia = {
  [index_mjs_.Keys.end]: (s, t) => s[s.length - 1],
  [index_mjs_.Keys.home]: (s, t) => s[0],
  [index_mjs_.Keys.up]: (s, t) => s[t - 1],
  [index_mjs_.Keys.down]: (s, t) => s[t + 1]
}, es = {
  [X.dayperiod]: Ln,
  [X.hour]: Wn,
  [X.minute]: jn,
  [X.second]: Qn
}, Tt = class extends index_js_.Component {
  constructor(s) {
    super(s), this.intl = null, this._element = null, this.service = null, this.virtualization = null, this.topOffset = 0, this.bottomOffset = 0, this.itemHeight = 0, this.listHeight = 0, this.topThreshold = 0, this.bottomThreshold = 0, this.animateToIndex = !1, this.focus = (t) => {
      Promise.resolve().then(() => {
        this.element && this.element.focus(t);
      });
    }, this.itemOffset = (t) => {
      if (!this.virtualization || !this.service)
        return -1;
      const e = this.service.selectedIndex(this.props.value), i = this.virtualization.activeIndex(), a = this.virtualization.itemOffset(i), o = Math.abs(Math.ceil(t) - a);
      if (e === i && o < ta)
        return a;
      const l = e > i;
      return l && o >= this.bottomThreshold || !l && o > this.topThreshold ? this.virtualization.itemOffset(i + 1) : a;
    }, this.calculateHeights = () => {
      this.dom.didCalculate && (this.itemHeight = this.dom.itemHeight, this.listHeight = this.dom.timeListHeight, this.topOffset = (this.listHeight - this.itemHeight) / 2, this.bottomOffset = this.listHeight - this.itemHeight, this.props.mobileMode && (this.topOffset += Ts, this.bottomOffset += Ts * 2), this.topThreshold = this.itemHeight * Ms, this.bottomThreshold = this.itemHeight * (1 - Ms));
    }, this.configureServices = ({ min: t, max: e, value: i } = this.props) => {
      if (this.service) {
        const [a, o] = this.service.limitRange(t || this.min, e || this.max, i || this.props.value);
        this.service.configure(this.serviceSettings({ min: a, max: o }));
      }
    }, this.serviceSettings = (t) => {
      const e = {
        boundRange: this.props.boundRange || Tt.defaultProps.boundRange,
        insertUndividedMax: !1,
        min: cloneDate(this.min),
        max: cloneDate(this.max),
        part: this.props.part,
        step: this.step
      }, i = Object.assign({}, e, t);
      return i.boundRange = i.part.type !== "hour" || this.props.boundRange || Tt.defaultProps.boundRange, i;
    }, this.handleScrollAction = ({ target: t, animationInProgress: e }) => {
      if (!(!this.virtualization || !this.service) && t && !e) {
        this.animateToIndex = !1;
        const i = this.virtualization.itemIndex(this.itemOffset(t.scrollTop)), a = this.service.data(this.props.value)[i];
        this.handleChange(a);
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
      const a = (ia[t.keyCode] || index_mjs_.noop)(
        this.service.data(this.props.value),
        this.service.selectedIndex(this.props.value)
      );
      a && this.handleChange(a);
    }, this.handleChange = Ci((t) => {
      if (!this.service)
        return;
      const e = this.service.apply(this.props.value, t.value);
      if (this.props.value.getTime() === e.getTime())
        return;
      const { onChange: i } = this.props;
      i && i.call(void 0, e);
    }, ea), this.dom = new Hn();
  }
  get element() {
    return this._element;
  }
  get animate() {
    return !!(this.props.smoothScroll && this.animateToIndex);
  }
  get min() {
    return this.props.min || Tt.defaultProps.min;
  }
  get max() {
    return this.props.max || Tt.defaultProps.max;
  }
  get step() {
    return this.props.step !== void 0 && this.props.step !== 0 ? Math.floor(this.props.step) : Tt.defaultProps.step;
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
    const s = this.service.selectedIndex(this.props.value);
    this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](s), this.animateToIndex = !0;
  }
  /**
   * @hidden
   */
  render() {
    if (!this.props.part.type || !es[this.props.part.type])
      return;
    this.calculateHeights(), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.service = new es[this.props.part.type](this.intl), this.configureServices();
    const s = this.service.data(this.props.value), t = "translateY(" + this.topOffset + "px)", e = this.service.total(this.props.value), i = /* @__PURE__ */ index_js_.createElement(
      "ul",
      {
        style: { transform: t, msTransform: t },
        className: "k-reset"
      },
      s.map((a, o) => /* @__PURE__ */ index_js_.createElement(
        "li",
        {
          key: o,
          className: "k-item",
          onClick: () => {
            this.handleChange(a);
          }
        },
        /* @__PURE__ */ index_js_.createElement("span", null, a.text)
      ))
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-time-list",
        id: String(this.props.id || ""),
        tabIndex: this.props.disabled ? -1 : 0,
        ref: (a) => {
          this._element = a;
        },
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onMouseOver: this.handleMouseOver
      },
      this.dom.didCalculate ? /* @__PURE__ */ index_js_.createElement(
        Kt,
        {
          bottomOffset: this.bottomOffset,
          children: i,
          className: "k-time-container",
          itemHeight: this.itemHeight,
          maxScrollDifference: this.listHeight,
          onScrollAction: this.handleScrollAction,
          ref: (a) => {
            this.virtualization = a;
          },
          role: "presentation",
          skip: sa,
          tabIndex: -1,
          take: e,
          topOffset: this.topOffset,
          total: e
        }
      ) : /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-container" }, i)
    );
  }
};
let Ce = Tt;
Ce.propTypes = {
  id: prop_types_index_js_.number,
  max: prop_types_index_js_.instanceOf(Date),
  min: prop_types_index_js_.instanceOf(Date),
  part: function(s, t, e) {
    const i = s[t];
    if (!i || !es[i.type])
      throw new Error(`
                    Invalid prop '${t}' supplied to ${e}.
                    Supported part types are hour|minute|second|dayperiod.
                `);
    return null;
  },
  step: function(s, t, e) {
    const i = s[t];
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
};
Ce.defaultProps = {
  boundRange: !1,
  max: xt,
  min: L,
  step: 1,
  smoothScroll: !0
};
(0,kendo_react_intl_index_mjs_.registerForIntl)(Ce);
const Fe = new RegExp(`${X.hour}|${X.minute}|${X.second}|${X.dayperiod}|literal`), wt = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._nowButton = null, this.dateFormatParts = [], this.timeLists = [], this.focus = (t, e) => {
      Promise.resolve().then(() => {
        e && this._nowButton && this._nowButton.element && this._nowButton.element.focus();
        const i = this.timeLists[0];
        !e && this.state.activeListIndex === -1 && !this.hasActiveButton() && i && i.element && i.focus(t);
      });
    }, this.timeFormatReducer = (t, e) => t + e.pattern, this.timeFormatFilter = (t, e, i) => {
      const a = e >= 1 && i[e - 1];
      return a && a && t.type === "literal" ? Fe.test(a.type || "") : Fe.test(t.type || "");
    }, this.focusList = (t) => {
      this.timeLists.length && this.timeLists.reduce(this.listReducer, []).map((e) => t === 1 ? e.next : e.prev).map((e) => e && e.element && e.element.focus({ preventScroll: !0 }));
    }, this.listReducer = (t, e, i, a) => t.length || e.props.id !== this.state.activeListIndex ? t : [{
      next: a[i + 1] || e,
      prev: a[i - 1] || e
    }], this.showNowButton = () => !this.hasSteps() && this.props.nowButton && hs(Vt(), this.min, this.max), this.handleKeyDown = (t) => {
      const { keyCode: e } = t;
      switch (e) {
        case index_mjs_.Keys.left:
          t.preventDefault(), this.focusList(
            0
            /* Left */
          );
          return;
        case index_mjs_.Keys.right:
          t.preventDefault(), this.focusList(
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
    }, this.handleListFocus = (t) => {
      clearTimeout(this.nextTickId), this.setState({
        activeListIndex: t
      });
    }, this.handleChange = (t) => {
      const { onChange: e } = this.props;
      e && e.call(void 0, t);
    }, this.snapTime = ys(
      ks(this.props.steps, this.props.min || wt.defaultProps.min)
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
    return Sn(
      this.snapTime(cloneDate(this.props.value || L)),
      this.min,
      this.max
    );
  }
  get intl() {
    return (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
  }
  get min() {
    return this.snapTime(this.props.min || wt.defaultProps.min);
  }
  get max() {
    return this.snapTime(this.props.max || wt.defaultProps.max);
  }
  get steps() {
    return this.props.steps || wt.defaultProps.steps;
  }
  get boundRange() {
    return this.props.boundRange !== void 0 ? this.props.boundRange : wt.defaultProps.boundRange;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    clearTimeout(this.nextTickId);
  }
  componentDidMount() {
    const { onMount: s } = this.props;
    s && s.call(void 0, this.value);
  }
  /**
   * @hidden
   */
  render() {
    const {
      format: s,
      smoothScroll: t,
      onNowClick: e,
      className: i,
      disabled: a,
      mobileMode: o,
      show: l,
      onNowKeyDown: c
    } = this.props;
    this.snapTime = ys(ks(this.steps, this.min)), this.dateFormatParts = this.intl.splitDateFormat(s || wt.defaultProps.format).filter(this.timeFormatFilter);
    const h = (0,index_mjs_.classNames)(
      {
        "k-disabled": a,
        "k-time-part": o
      },
      i
    );
    this.timeLists = [];
    const u = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), d = u.toLanguageString(je, T[je]);
    return /* @__PURE__ */ index_js_.createElement("div", { className: h }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-header" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-title" }, this.intl.formatDate(this.value, this.dateFormatParts.reduce(this.timeFormatReducer, ""))), this.showNowButton() && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        ref: (p) => {
          this._nowButton = p;
        },
        className: "k-time-now",
        fillMode: "flat",
        themeColor: "primary",
        title: d,
        onKeyDown: c,
        "aria-label": d,
        onClick: e,
        tabIndex: a ? -1 : 0
      },
      u.toLanguageString(Ke, T[Ke])
    )), /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-time-list-container",
        onKeyDown: this.handleKeyDown
      },
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-time-highlight" }),
      this.dateFormatParts.map((p, f) => p.type !== "literal" ? /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          key: f,
          className: (0,index_mjs_.classNames)("k-time-list-wrapper", {
            "k-focus": f === this.state.activeListIndex
          }),
          role: "presentation",
          tabIndex: -1
        },
        /* @__PURE__ */ index_js_.createElement("span", { className: "k-title", onMouseDown: (m) => {
          m.preventDefault();
        } }, this.intl.dateFieldName(p)),
        /* @__PURE__ */ index_js_.createElement(
          Ce,
          {
            min: this.min,
            max: this.max,
            boundRange: this.boundRange,
            part: p,
            step: p.type ? this.steps[p.type] : 1,
            smoothScroll: t,
            ref: (m) => {
              m && this.timeLists.push(m);
            },
            id: f,
            onFocus: () => {
              this.handleListFocus(f);
            },
            onBlur: this.handleListBlur,
            onChange: this.handleChange,
            value: this.value,
            disabled: a,
            show: l,
            mobileMode: o
          }
        )
      ) : /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          key: f,
          className: "k-time-separator"
        },
        p.pattern
      ))
    ));
  }
  nextTick(s) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => s());
  }
  hasActiveButton() {
    const s = (0,index_mjs_.getActiveElement)(document);
    return this._nowButton && s === this._nowButton.element;
  }
  hasSteps() {
    const s = Object.keys(this.steps);
    return s.length !== s.reduce((t, e) => t + this.steps[e], 0);
  }
};
let _t = wt;
_t.propTypes = {
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
};
_t.defaultProps = {
  value: null,
  disabled: !1,
  nowButton: !0,
  cancelButton: !0,
  format: "hh:mm a",
  min: Nt,
  max: xt,
  steps: {},
  boundRange: !1
};
(0,kendo_react_intl_index_mjs_.registerForIntl)(_t);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(_t);
const ss = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._cancelButton = null, this._acceptButton = null, this.timePart = null, this.focusActiveList = () => {
      this.timePart && this.timePart.focus({ preventScroll: !0 });
    }, this.handleKeyDown = (t) => {
      const { keyCode: e } = t;
      switch (e) {
        case index_mjs_.Keys.enter:
          this.hasActiveButton() || this.handleAccept(t);
          return;
        default:
          return;
      }
    }, this.revertToNowButton = (t) => {
      const { keyCode: e, shiftKey: i } = t;
      !i && e === index_mjs_.Keys.tab && (t.preventDefault(), this.props.nowButton !== !1 ? this.timePart && this.timePart.focus({ preventScroll: !0 }, !0) : this.timePart && this.timePart.focus({ preventScroll: !0 }));
    }, this.handleNowKeyDown = (t) => {
      var a;
      const { keyCode: e, shiftKey: i } = t;
      i && e === index_mjs_.Keys.tab ? (t.preventDefault(), this._acceptButton && ((a = this._acceptButton.element) == null || a.focus({ preventScroll: !0 }))) : e === index_mjs_.Keys.enter && (t.stopPropagation(), this.handleNowClick(t));
    }, this.handleAccept = (t) => {
      const e = this.mergeValue(
        cloneDate(this.value || Vt()),
        this.timePart ? this.timePart.value : this.current
      );
      this.setState({ value: e }), this.valueDuringOnChange = e;
      const { onChange: i } = this.props;
      i && i.call(void 0, {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleReject = (t) => {
      this.setState({ current: this.value });
      const { onReject: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleNowClick = (t) => {
      const e = this.mergeValue(
        cloneDate(this.value || Vt()),
        Vt()
      );
      this.setState({
        current: e,
        value: e
      }), this.valueDuringOnChange = e;
      const { onChange: i } = this.props;
      i && i.call(void 0, {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent,
        value: this.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleChange = (t) => {
      this.setState({ current: t });
      const { handleTimeChange: e } = this.props;
      e && e.call(void 0, {
        time: t
      });
    }, this.dateFormatParts = this.intl.splitDateFormat(this.props.format || ss.defaultProps.format), this.mergeValue = yn(kn(this.dateFormatParts)), this.hasActiveButton = this.hasActiveButton.bind(this), this.state = {
      current: this.props.value || L,
      value: this.props.value || ss.defaultProps.value
    };
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  get value() {
    const s = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return s !== null ? cloneDate(s) : null;
  }
  get intl() {
    return (0,kendo_react_intl_index_mjs_.provideIntlService)(this);
  }
  get current() {
    return this.state.current !== null ? cloneDate(this.state.current) : null;
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
      format: s,
      cancelButton: t,
      disabled: e,
      tabIndex: i,
      className: a,
      smoothScroll: o,
      min: l,
      max: c,
      boundRange: h,
      nowButton: u,
      steps: d,
      show: p,
      mobileMode: f
    } = this.props, m = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), S = m.toLanguageString(ve, T[ve]), I = m.toLanguageString(Ut, T[Ut]);
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (M) => {
          this._element = M;
        },
        tabIndex: e ? void 0 : i || 0,
        className: (0,index_mjs_.classNames)("k-timeselector", a, {
          "k-disabled": e
        }),
        onKeyDown: this.handleKeyDown
      },
      /* @__PURE__ */ index_js_.createElement(
        _t,
        {
          ref: (M) => {
            this.timePart = M;
          },
          value: this.current,
          onChange: this.handleChange,
          onNowClick: this.handleNowClick,
          format: s,
          smoothScroll: o,
          min: l,
          max: c,
          boundRange: h,
          disabled: e,
          nowButton: u,
          steps: d,
          show: p,
          mobileMode: f,
          onNowKeyDown: this.handleNowKeyDown
        }
      ),
      this.props.footer && /* @__PURE__ */ index_js_.createElement("div", { className: "k-time-footer k-actions k-actions-stretched" }, t && /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (M) => {
            this._cancelButton = M;
          },
          className: "k-time-cancel",
          onClick: this.handleReject,
          title: S,
          "aria-label": S
        },
        S
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (M) => {
            this._acceptButton = M;
          },
          className: "k-time-accept",
          themeColor: "primary",
          onClick: this.handleAccept,
          onKeyDown: this.revertToNowButton,
          title: I,
          "aria-label": I
        },
        I
      ))
    );
  }
  nextTick(s) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => s());
  }
  hasActiveButton() {
    if (!this._acceptButton || !this._acceptButton.element)
      return !1;
    const s = (0,index_mjs_.getActiveElement)(document);
    return this._acceptButton && s === this._acceptButton.element || this._cancelButton && s === this._cancelButton.element;
  }
};
let Jt = ss;
Jt.propTypes = {
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
};
Jt.defaultProps = {
  value: null,
  disabled: !1,
  cancelButton: !0,
  format: "t",
  min: Nt,
  max: xt,
  boundRange: !1,
  footer: !0
};
(0,kendo_react_intl_index_mjs_.registerForIntl)(Jt);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Jt);
const G = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._dateInput = index_js_.createRef(), this._timeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      this.dateInput && this.dateInput.focus();
    }, this.renderTimeSelector = () => {
      const { smoothScroll: t, cancelButton: e, nowButton: i, disabled: a, format: o, steps: l } = this.props;
      return /* @__PURE__ */ index_js_.createElement(
        Jt,
        {
          ref: this.setTimeSelectorRef,
          className: this.mobileMode ? "k-reset k-timeselector-lg" : "",
          mobileMode: this.mobileMode,
          show: this.show,
          cancelButton: e,
          disabled: a,
          nowButton: i,
          format: o,
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
      const { popupClass: t, ...e } = this.popupSettings, i = (0,index_mjs_.classNames)(
        "k-group k-reset",
        t
      ), a = {
        popupClass: "k-timepicker-popup",
        show: this.show,
        animate: this.element !== null,
        anchor: this.element,
        className: i,
        id: this._popupId,
        anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        },
        popupAlign: {
          horizontal: "left",
          vertical: "top"
        },
        ...e
      };
      return this.props.popup ? /* @__PURE__ */ index_js_.createElement(this.props.popup, { ...a }, this.renderTimeSelector()) : /* @__PURE__ */ index_js_.createElement(kendo_react_popup_index_mjs_.Popup, { ...a }, this.renderTimeSelector());
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, e = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t,
        footer: {
          cancelText: this.localizationService.toLanguageString(ue, T[ve]),
          onCancel: this.handleValueReject,
          applyText: this.localizationService.toLanguageString(Ut, T[Ut]),
          onApply: (i) => this.handleValueChange(i)
        }
      };
      return /* @__PURE__ */ index_js_.createElement(Se, { ...e }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderTimeSelector()));
    }, this.setTimeSelectorRef = (t) => {
      this._timeSelector = t;
    }, this.nextValue = (t, e) => t.value !== void 0 ? t.value : e.value, this.nextShow = (t, e) => t.show !== void 0 ? t.show : e.show, this.handleInputValueChange = (t) => {
      const e = this.mergeTime(t.value);
      this.handleValueChange({ ...t, value: e });
    }, this.handleTimeChange = (t) => {
      this.setState({ candidate: t.time });
    }, this.handleValueChange = (t) => {
      this.setState({
        value: cloneDate(t.value || this.state.candidate)
      }), this.valueDuringOnChange = t.value, this.showDuringOnChange = !1, this.shouldFocusDateInput = !0;
      const { onChange: e } = this.props, i = this.value || this.state.candidate;
      e && e.call(void 0, {
        syntheticEvent: t.syntheticEvent,
        nativeEvent: t.nativeEvent,
        value: i,
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
      const { altKey: e, keyCode: i } = t;
      if (i === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      e && (i === index_mjs_.Keys.up || i === index_mjs_.Keys.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = i === index_mjs_.Keys.up, this.setShow(i === index_mjs_.Keys.down));
    }, (0,index_mjs_.validatePackage)(Rt), this.state = {
      value: this.props.defaultValue || G.defaultProps.defaultValue,
      show: this.props.defaultShow || G.defaultProps.defaultShow,
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
    const s = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return s !== null ? cloneDate(s) : null;
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
    const s = this.value && this.normalizeTime(this.value), t = this.normalizeTime(this.min), e = this.normalizeTime(this.max), i = xn(s, t, e), a = this.props.validationMessage !== void 0, o = (!this.required || this.value !== null) && i, l = this.props.valid !== void 0 ? this.props.valid : o;
    return {
      customError: a,
      rangeOverflow: In(s, e),
      rangeUnderflow: Cn(s, t),
      valid: l,
      valueMissing: this.value === null
    };
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    return !!(this.state.windowWidth && this.state.windowWidth <= xe && this.props.adaptive);
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : G.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : G.defaultProps.required;
  }
  get popupSettings() {
    return this.props.popupSettings || G.defaultProps.popupSettings;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : G.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : G.defaultProps.max;
  }
  get dateInputComp() {
    return this.props.dateInput || G.defaultProps.dateInput;
  }
  get localizationService() {
    return (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var s;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (s = this.document) != null && s.body && this.observerResize && this.observerResize.observe(this.document.body);
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
    var s;
    (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: s = G.defaultProps.size,
      rounded: t = G.defaultProps.rounded,
      fillMode: e = G.defaultProps.fillMode,
      disabled: i,
      tabIndex: a,
      title: o,
      id: l,
      className: c,
      format: h,
      formatPlaceholder: u,
      width: d,
      name: p,
      steps: f,
      validationMessage: m,
      required: S,
      validityStyles: I,
      ariaLabelledBy: M,
      ariaDescribedBy: w
    } = this.props, E = !this.validityStyles || this.validity.valid, g = {
      disabled: i,
      format: h,
      formatPlaceholder: u,
      id: l,
      ariaLabelledBy: M,
      ariaDescribedBy: w,
      max: this.normalizeTime(this.max),
      min: this.normalizeTime(this.min),
      name: p,
      onChange: this.handleInputValueChange,
      required: S,
      steps: f,
      tabIndex: this.show ? -1 : a,
      title: o,
      valid: this.validity.valid,
      validationMessage: m,
      validityStyles: I,
      value: this.value && this.normalizeTime(this.value),
      label: void 0,
      placeholder: this.state.focused ? null : this.props.placeholder,
      ariaHasPopup: "dialog",
      ariaExpanded: this.show,
      size: null,
      fillMode: null,
      rounded: null,
      readonly: this.mobileMode
    }, B = this.localizationService.toLanguageString(ue, T[ue]), V = this.localizationService.toLanguageString(Ze, T[Ze]), R = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.mobileMode ? void 0 : this.handleBlur,
        onSyncBlur: this.props.onBlur,
        onSyncFocus: this.props.onFocus
      },
      ({ onFocus: A, onBlur: x }) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          id: this.props.id,
          ref: (O) => {
            this._element = O;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-timepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[s] || s}`]: s,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[t] || t}`]: t,
              [`k-input-${e}`]: e,
              ["k-invalid"]: !E,
              ["k-required"]: this.required,
              ["k-disabled"]: this.props.disabled
            },
            c
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: d },
          onFocus: A,
          onBlur: x,
          onClick: this.mobileMode ? this.handleIconClick : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            ...g
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
            title: V,
            className: "k-input-button",
            rounded: null,
            "aria-label": B
          }
        ),
        !this.mobileMode && this.renderPopup()
      ), this.mobileMode && this.renderAdaptivePopup())
    );
    return this.props.label ? /* @__PURE__ */ index_js_.createElement(
      cs,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: l,
        editorValid: E,
        editorDisabled: this.props.disabled,
        children: R,
        style: { width: this.props.width }
      }
    ) : R;
  }
  normalizeTime(s) {
    return U(L, s);
  }
  setShow(s) {
    const { onOpen: t, onClose: e } = this.props;
    this.show !== s && (this.setState({ show: s }), s && t && t.call(void 0, {
      target: this
    }), !s && e && e.call(void 0, {
      target: this
    }));
  }
  mergeTime(s) {
    return this.value && s ? U(this.value, s) : s;
  }
  calculateMedia(s) {
    for (let t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
let Qt = G;
Qt.displayName = "TimePicker";
Qt.propTypes = {
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
};
Qt.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "t",
  max: xt,
  min: Nt,
  popupSettings: {},
  tabIndex: 0,
  steps: {},
  required: !1,
  validityStyles: !0,
  dateInput: Dt,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const na = (0,index_mjs_.createPropsContext)(), aa = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(na, Qt));
aa.displayName = "KendoReactTimePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(Qt);
const Es = 2, is = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this.isActive = !1, this.focusActiveDate = () => {
      if (!this._element)
        return;
      const t = this._element.querySelector("td.k-focus"), e = this._element.querySelector(".k-state-pending-focus");
      t && t[0] && t[0].classList.remove("k-focus"), e && e.classList.add("k-focus"), this.isActive = !0;
    }, this.blurActiveDate = () => {
      if (!this._element)
        return;
      const t = this._element.querySelector("td.k-focus");
      t && t.classList.remove("k-focus"), this.isActive = !1;
    }, this.rotateSelectionRange = (t) => {
      if (t.start === null || t.end === null)
        return t;
      const e = t.end < t.start;
      return {
        start: e ? t.end : t.start,
        end: e ? t.start : t.end
      };
    }, this.handleDateChange = (t, e = !1) => {
      const { onChange: i } = this.props;
      if (i) {
        const a = {
          syntheticEvent: t.syntheticEvent,
          nativeEvent: t.nativeEvent,
          value: cloneDate(t.value),
          target: this,
          isTodayClick: e
        };
        i.call(void 0, a);
      }
    };
  }
  get element() {
    return this._element;
  }
  get weekNumber() {
    return !!(this.props.showWeekNumbers && this.props.activeView === y.month);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : is.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : is.defaultProps.max;
  }
  componentDidUpdate() {
    this.isActive && this.focusActiveDate();
  }
  render() {
    const s = this.props.allowReverse ? this.rotateSelectionRange(this.props.selectionRange) : this.props.selectionRange, t = (0,index_mjs_.classNames)(
      "k-calendar-view k-align-items-start k-justify-content-center",
      {
        "k-vstack": this.props.verticalView,
        "k-hstack": !this.props.verticalView,
        "k-calendar-monthview": this.props.activeView === y.month,
        "k-calendar-yearview": this.props.activeView === y.year,
        "k-calendar-decadeview": this.props.activeView === y.decade,
        "k-calendar-centuryview": this.props.activeView === y.century
      }
    );
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (e) => {
          this._element = e;
        },
        className: t
      },
      this.props.dates.map((e) => /* @__PURE__ */ index_js_.createElement("table", { className: "k-calendar-table k-content", key: e.getTime(), role: "grid" }, /* @__PURE__ */ index_js_.createElement(
        jt,
        {
          bus: this.props.bus,
          service: this.props.service,
          key: e.getTime(),
          direction: "horizontal",
          activeView: this.props.activeView,
          cellUID: this.props.cellUID,
          viewDate: e,
          min: this.min,
          max: this.max,
          focusedDate: this.props.focusedDate,
          selectionRange: s,
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
let At = is;
At.defaultProps = {
  showWeekNumbers: !1,
  views: Es,
  take: Es,
  allowReverse: !0,
  min: ut,
  max: dt
};
const Le = (s = rt.defaultProps.min, t = rt.defaultProps.max, e) => e instanceof Date && !Array.isArray(e) && F(getDate(e), s, t) ? getDate(e) : null, Vs = (s = rt.defaultProps.min, t = rt.defaultProps.max, e) => Array.isArray(e) ? e.filter((i) => F(i, s, t)).map((i) => getDate(i)) : null, Os = (s) => typeof s == "object" && !(s instanceof Date) && s !== null && !Array.isArray(s) ? s : q, Ps = (s, t, e) => s || t && t[0] || e && e.start, oa = (s, t) => s.start === null && t === null ? "start" : s.end === null ? "end" : "start", Et = class extends index_js_.Component {
  constructor(s) {
    super(s), this.dates = [], this.selectedDate = null, this.selectedMultiple = null, this.selectedRange = q, this._focusedDate = /* @__PURE__ */ new Date(), this.cellUID = this.props.id + "-cell-uid", this.activeRangeEnd = "start", this._element = null, this.intl = null, this.localization = null, this.service = null, this.calendarViewList = null, this.isActive = !1, this.calculateFocusFromValue = !0, this.focus = () => {
      this._element && this._element.focus();
    }, this.clampRange = (h) => ({ start: h, end: null }), this.rangeWithFocused = (h, u) => ({
      start: h.start,
      end: h.end === null && h.start !== null && this.isActive ? u : h.end
    }), this.generateRange = (h, u) => {
      const { end: d, start: p } = u, f = u.start !== null && h.getTime() <= u.start.getTime();
      return !this.props.allowReverse && f ? { start: h, end: this.selectedRange.start } : this.activeRange !== "end" ? { start: h, end: d } : { start: p || this.selectedDate, end: h };
    }, this.canNavigate = (h) => {
      if (!this.service)
        return !1;
      const u = this.service.move(this.focusedDate, h);
      return this.min <= u && u <= this.max || this.service.isInSameView(u, this.min) || this.service.isInSameView(u, this.max);
    }, this.navigate = (h, u) => {
      this.calculateFocusFromValue = !1;
      const d = this.move(h, u);
      this.setState({ navigateDate: d, focusedDate: d });
    }, this.move = (h, u) => this.clampDate(this.service.move(u, h)), this.clampDate = (h) => K(h, this.min, this.max), this.shouldAutoCorrect = (h, u) => {
      const { end: d, start: p } = u;
      return this.activeRange !== "end" ? d !== null && h > d : p !== null && h < p;
    }, this.handleCellEnter = (h) => {
      this.props.mode === "range" && (this.calculateFocusFromValue = !1, this.setState({
        focusedDate: h
      }));
    }, this.handleMouseDown = (h) => {
      h.preventDefault();
    }, this.handleClick = (h) => {
      this._element && this._element.focus({ preventScroll: !0 });
    }, this.handleFocus = (h) => {
      if (this.isActive = !0, !this.calendarViewList)
        return;
      this.calendarViewList.focusActiveDate();
      const { onFocus: u } = this.props;
      u && u.call(void 0, h);
    }, this.handleBlur = (h) => {
      if (this.isActive = !1, !this.calendarViewList)
        return;
      this.calendarViewList.blurActiveDate();
      const { onBlur: u } = this.props;
      u && u.call(void 0, h);
    }, this.handleTodayClick = (h) => {
      this.todayIsInRange && this.handleDateChange(h);
    }, this.handlePrevButtonClick = () => {
      const h = b.PrevView;
      if (this.state.activeView > 0 && this.focusedDate.getFullYear() > this.dates[0].getFullYear())
        this.navigate(h, this.move(h, this.focusedDate));
      else {
        const u = this.isInMonth(this.focusedDate, this.dates[1]) ? this.move(h, this.focusedDate) : this.focusedDate;
        this.navigate(h, u);
      }
    }, this.handleNextButtonClick = () => {
      this.navigate(b.NextView, this.focusedDate);
    }, this.handleKeyDown = (h) => {
      const { keyCode: d, ctrlKey: p, metaKey: f } = h;
      if (d === 84) {
        const m = H();
        this.calculateFocusFromValue = !1, this.setState({ focusedDate: m, navigateDate: m });
      }
      if ((p || f) && (d === index_mjs_.Keys.left && this.handlePrevButtonClick(), d === index_mjs_.Keys.right && this.handleNextButtonClick()), d === index_mjs_.Keys.enter) {
        const m = {
          syntheticEvent: h,
          nativeEvent: h.nativeEvent,
          value: this.focusedDate,
          target: this
        };
        this.handleDateChange(m);
      } else {
        const m = K(
          this.navigation.move(
            this.focusedDate,
            this.navigation.action(h),
            this.state.activeView,
            this.service,
            h
          ),
          this.min,
          this.max
        );
        if (isEqualDate(this.focusedDate, m))
          return;
        this.dates && this.service && !this.service.isInArray(m, this.dates) && this.setState({ navigateDate: m }), this.calculateFocusFromValue = !1, this.setState({ focusedDate: m });
      }
      h.preventDefault();
    }, this.handleViewChange = ({ view: h }) => {
      this.calculateFocusFromValue = !1, this.setState((u) => ({ activeView: h, navigateDate: u.focusedDate }));
    }, this.handleDateChange = (h) => {
      const u = cloneDate(h.value), d = this.bus.canMoveDown(this.state.activeView);
      if (this.props.disabled)
        return;
      if (d)
        if (h.isTodayClick)
          this.bus.moveToBottom(this.state.activeView);
        else {
          this.bus.moveDown(this.state.activeView, h.syntheticEvent), this.setState({ focusedDate: u, navigateDate: u });
          return;
        }
      this.calculateFocusFromValue = !0;
      let p;
      switch (this.props.mode) {
        case "single":
          p = cloneDate(h.value);
          break;
        case "multiple":
          if (Array.isArray(this.selectedMultiple)) {
            const m = this.selectedMultiple.slice();
            let S = -1;
            m.forEach((I, M) => {
              isEqualDate(I, h.value) && (S = M);
            }), S !== -1 ? m.splice(S, 1) : m.push(cloneDate(h.value)), p = m.slice();
          } else
            this.selectedDate ? p = [cloneDate(this.selectedDate), cloneDate(h.value)] : p = [cloneDate(h.value)];
          break;
        case "range": {
          p = this.selectedRange.start !== null && this.selectedRange.end !== null && this.activeRange === "start" ? this.clampRange(h.value) : this.generateRange(h.value, this.selectedRange), this.activeRangeEnd = this.activeRange !== "end" ? "end" : "start";
          break;
        }
        default:
          p = cloneDate(h.value);
          break;
      }
      this.valueDuringOnChange = p, h.isTodayClick && this.setState({ navigateDate: u }), this.setState({ value: p, focusedDate: u }), this.valueDuringOnChange = p;
      const { onChange: f } = this.props;
      if (f) {
        const m = {
          syntheticEvent: h.syntheticEvent,
          nativeEvent: h.nativeEvent,
          value: p,
          target: this
        };
        f.call(void 0, m);
      }
      this.valueDuringOnChange = void 0;
    };
    const t = s.value !== void 0 ? s.value : s.defaultValue || Et.defaultProps.defaultValue, e = Le(this.min, this.max, t), i = Vs(this.min, this.max, t), a = Os(t), o = Ps(e, i, a), l = ge(
      y[s.defaultActiveView],
      this.bottomView,
      this.topView
    ), c = K(
      s.focusedDate || o || H(),
      this.min,
      this.max
    );
    this.state = {
      value: t,
      activeView: l,
      focusedDate: c,
      navigateDate: c
    }, this.activeRangeEnd = oa(a, e), this.bus = new zs(this.handleViewChange), this.navigation = new qs(this.bus), this.calculateFocusFromValue = !1, this.lastView = l, this.lastViewsCount = this.props.views || At.defaultProps.views;
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
    return cloneDate(this._focusedDate);
  }
  get min() {
    return getDate(this.props.min !== void 0 ? this.props.min : Et.defaultProps.min);
  }
  get max() {
    return getDate(this.props.max !== void 0 ? this.props.max : Et.defaultProps.max);
  }
  get bottomView() {
    return y[this.props.bottomView !== void 0 ? this.props.bottomView : Et.defaultProps.bottomView];
  }
  get topView() {
    return y[this.props.topView !== void 0 ? this.props.topView : Et.defaultProps.topView];
  }
  get activeRange() {
    return this.props.activeRangeEnd !== void 0 ? this.props.activeRangeEnd : this.activeRangeEnd;
  }
  get todayIsInRange() {
    return F(H(), getDate(this.min), getDate(this.max));
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
    const s = Le(this.min, this.max, this.value);
    this.calculateFocusFromValue = !!(this.selectedDate && s && this.selectedDate.getTime() && s.getTime()), this.lastView = this.state.activeView, this.lastViewsCount = this.props.views || At.defaultProps.views;
  }
  /**
   * @hidden
   */
  render() {
    this.props._ref && this.props._ref(this), this.intl = (0,kendo_react_intl_index_mjs_.provideIntlService)(this), this.localization = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this), this.bus.configure(this.bottomView, this.topView);
    const s = ge(this.state.activeView, this.bottomView, this.topView);
    this.service = this.bus.service(s, this.intl), this.selectedDate = Le(this.min, this.max, this.value), this.selectedMultiple = Vs(this.min, this.max, this.value), this.selectedRange = Os(this.value);
    const t = Ps(this.selectedDate, this.selectedMultiple, this.selectedRange);
    this._focusedDate = K(
      this.calculateFocusFromValue && t !== null ? t : this.state.focusedDate,
      this.min,
      this.max
    );
    const e = (0,index_mjs_.classNames)(
      "k-widget k-calendar k-calendar-range",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), i = this.rangeWithFocused(this.selectedRange, this.focusedDate), a = this.localization.toLanguageString(Ae, T[Ae]), o = this.localization.toLanguageString(ze, T[ze]), l = !this.canNavigate(b.PrevView), c = !this.canNavigate(b.NextView), h = { "aria-disabled": l }, u = { "aria-disabled": c }, d = this.lastView !== s, p = this.dates && this.isInMonth(this.state.navigateDate, this.dates[0]), f = this.lastViewsCount !== this.props.views;
    (!p || d || f) && (this.dates = this.service.datesList(
      this.state.navigateDate,
      this.props.views || At.defaultProps.views
    ));
    const m = cloneDate(this.dates && this.dates[0] ? this.dates[0] : H());
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (S) => {
          this._element = S;
        },
        className: e,
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
        Zt,
        {
          key: `.kendo.calendar.header.${m.getTime()}`,
          activeView: s,
          currentDate: m,
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
              title: a,
              disabled: l,
              onClick: this.handlePrevButtonClick,
              ...h
            }
          ), /* @__PURE__ */ index_js_.createElement(
            Gt,
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
              title: o,
              disabled: c,
              onClick: this.handleNextButtonClick,
              ...u
            }
          ))
        }
      ),
      /* @__PURE__ */ index_js_.createElement(
        At,
        {
          ref: (S) => {
            this.calendarViewList = S;
          },
          dates: this.dates,
          activeView: s,
          focusedDate: this.focusedDate,
          min: this.min,
          max: this.max,
          bus: this.bus,
          service: this.service,
          selectionRange: i,
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
  isInMonth(s, t) {
    return !!t && firstDayOfMonth(t) <= s && s <= lastDayOfMonth(t);
  }
};
let rt = Et;
rt.displayName = "MultiViewCalendar";
rt.propTypes = {
  activeRangeEnd: prop_types_index_js_.oneOf(["start", "end"]),
  allowReverse: prop_types_index_js_.bool,
  bottomView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
  className: prop_types_index_js_.string,
  defaultActiveView: prop_types_index_js_.oneOf(["month", "year", "decade", "century"]),
  defaultValue: prop_types_index_js_.oneOfType([
    ot(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.shape({
      start: ot(prop_types_index_js_.instanceOf(Date)),
      end: ot(prop_types_index_js_.instanceOf(Date))
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
    ot(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.arrayOf(prop_types_index_js_.instanceOf(Date)),
    prop_types_index_js_.shape({
      start: ot(prop_types_index_js_.instanceOf(Date).isRequired),
      end: ot(prop_types_index_js_.instanceOf(Date).isRequired)
    })
  ]),
  views: (s, t, e) => {
    const i = s[t];
    return i !== void 0 && i < 1 ? new Error(
      `Invalid prop '${t}' supplied to'${e}'. The '${t}' property cannot be less than 1'`
    ) : null;
  },
  weekNumber: prop_types_index_js_.bool,
  dir: prop_types_index_js_.string
};
rt.defaultProps = {
  disabled: !1,
  min: ut,
  max: dt,
  navigation: !0,
  defaultActiveView: "month",
  defaultValue: null,
  topView: "century",
  tabIndex: 0,
  bottomView: "month",
  views: 2,
  allowReverse: !1
};
const ra = (0,index_mjs_.createPropsContext)(), Qs = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(ra, rt));
Qs.displayName = "KendoReactMultiViewCalendar";
(0,kendo_react_intl_index_mjs_.registerForIntl)(rt);
(0,kendo_react_intl_index_mjs_.registerForLocalization)(rt);
const zt = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._calendar = null, this._startDateInput = index_js_.createRef(), this._endDateInput = index_js_.createRef(), this.shouldFocusDateInput = !1, this.shouldFocusCalendar = !1, this.focus = () => {
      this.startDateInput && this.startDateInput.focus();
    }, this.setCalendarRef = (t) => {
      this._calendar = t;
    }, this.focusCalendarElement = () => {
      this._calendar && this._calendar.element && this._calendar.element.focus({ preventScroll: !0 });
    }, this.calculateValue = (t, e) => (t.value !== void 0 ? t.value : e.value) || q, this.calculateShow = (t, e) => t.show !== void 0 ? t.show : e.show, this.renderCalendar = () => {
      const t = this.value || q, e = {
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
      return this.props.calendar ? /* @__PURE__ */ index_js_.createElement(this.props.calendar, { ...e }) : /* @__PURE__ */ index_js_.createElement(Qs, { ...e, ref: this.setCalendarRef });
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
      const { windowWidth: t = 0 } = this.state, e = {
        expand: this.show,
        onClose: (i) => this.handleCancel(i),
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t,
        footer: {
          cancelText: this.localizationService.toLanguageString(Je, T[Je]),
          onCancel: this.handleCancel,
          applyText: this.localizationService.toLanguageString(Qe, T[Qe]),
          onApply: this.handleBlur
        }
      };
      return /* @__PURE__ */ index_js_.createElement(Se, { ...e }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-scrollable-wrap" }, this.renderCalendar())));
    }, this.handleReverseClick = (t) => {
      const e = {
        start: this.value.end,
        end: this.value.start
      }, i = {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent
      };
      this.handleChange(e, i);
    }, this.handleReverseMouseDown = (t) => {
      t.preventDefault();
    }, this.handleFocus = (t) => {
      clearTimeout(this.nextTickId), this.shouldFocusDateInput || this.mobileMode && this.setState({ currentValue: this.value });
      const { onFocus: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleClick = () => {
      this.shouldFocusDateInput || this.setShow(!0);
    }, this.handleBlur = (t) => {
      this.nextTick(() => {
        this.setShow(!1);
      });
      const { onBlur: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleCancel = (t) => {
      this.nextTick(() => {
        this.setShow(!1), this.setState({ currentValue: q });
      });
      const { onCancel: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleEndChange = (t) => {
      const e = {
        start: this.value.start,
        end: cloneDate(t.value || void 0)
      };
      this.handleChange(e, t);
    }, this.handleStartChange = (t) => {
      const e = {
        start: cloneDate(t.value || void 0),
        end: this.value.end
      };
      this.handleChange(e, t);
    }, this.extractRangeFromValue = (t) => {
      if (!Array.isArray(t.value) && !(t.value instanceof Date))
        return t.value || q;
      const e = Array.isArray(t.value) ? t.value[0] : t.value;
      return {
        start: this.value.end !== null ? e : this.value.start,
        end: this.value.start !== null ? e : this.value.end
      };
    }, this.handleCalendarChange = (t) => {
      const e = this.extractRangeFromValue(t);
      this.handleChange(e, t);
    }, this.handleKeyDown = (t) => {
      const { keyCode: e, altKey: i } = t;
      e === index_mjs_.Keys.esc ? (t.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1)) : i && e === index_mjs_.Keys.down ? (t.preventDefault(), this.shouldFocusCalendar = !0, this.setShow(!0), this.focusCalendarElement()) : i && e === index_mjs_.Keys.up && (t.preventDefault(), this.shouldFocusDateInput = !0, this.setShow(!1));
    }, this.handleChange = (t, e) => {
      this.setState({ value: t }), this.valueDuringOnChange = t;
      const { onChange: i } = this.props;
      if (i) {
        const a = {
          syntheticEvent: e.syntheticEvent,
          nativeEvent: e.nativeEvent,
          value: this.value,
          show: this.show,
          target: this
        };
        i.call(void 0, a);
      }
      this.valueDuringOnChange = void 0;
    }, (0,index_mjs_.validatePackage)(Rt), this.state = {
      show: this.props.show || this.props.defaultShow || zt.defaultProps.defaultShow,
      value: this.props.value || this.props.defaultValue || zt.defaultProps.defaultValue,
      currentValue: q
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
    return (this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value) || q;
  }
  /**
   * Gets the popup state of the DateRangePicker.
   */
  get show() {
    return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : zt.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : zt.defaultProps.max;
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
    return !!(this.state.windowWidth && this.state.windowWidth <= xe && this.props.adaptive);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var s;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (s = this.document) != null && s.body && this.observerResize && this.observerResize.observe(this.document.body);
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
    var s;
    clearTimeout(this.nextTickId), (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const s = this.value || q, t = this.mobileMode && this.show ? this.state.currentValue : s, e = (this.props.startDateInputSettings || {}).id || this._startInputId, i = (this.props.endDateInputSettings || {}).id || this._endInputId, a = (0,index_mjs_.classNames)(
      "k-daterangepicker",
      {
        "k-disabled": this.props.disabled
      },
      this.props.className
    ), o = this.localizationService.toLanguageString(Ue, T[Ue]), l = this.localizationService.toLanguageString($e, T[$e]), c = this.localizationService.toLanguageString(Ye, T[Ye]), h = {
      disableSelection: this.mobileMode && !0,
      label: o,
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
    }, u = {
      disableSelection: this.mobileMode && !0,
      label: l,
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
    }, d = /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        className: "k-select",
        fillMode: "flat",
        title: (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(Ht, T[Ht]),
        onMouseDown: this.handleReverseMouseDown,
        onClick: this.handleReverseClick,
        "aria-controls": e + " " + i,
        "aria-label": (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(Ht, T[Ht])
      },
      /* @__PURE__ */ index_js_.createElement(index_mjs_.IconWrap, { style: { transform: "rotate(90deg)" }, name: "arrows-swap", icon: index_es_js_.arrowsSwapIcon })
    );
    return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        ref: (p) => {
          this._element = p;
        },
        className: a,
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
      this.props.startDateInput ? /* @__PURE__ */ index_js_.createElement(this.props.startDateInput, { ...h }) : /* @__PURE__ */ index_js_.createElement(
        Dt,
        {
          ...h,
          ref: this._startDateInput,
          ariaRole: "combobox",
          ariaControls: this._popupId,
          readonly: this.mobileMode
        }
      ),
      (this.props.allowReverse || this.props.calendarSettings && this.props.calendarSettings.allowReverse) && this.props.swapButton ? d : c,
      this.props.endDateInput ? /* @__PURE__ */ index_js_.createElement(this.props.endDateInput, { ...u }) : /* @__PURE__ */ index_js_.createElement(
        Dt,
        {
          ...u,
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
    const s = (0,index_mjs_.getActiveElement)(document);
    (this.value.start === null || this.value.end !== null) && s !== this.endDateInput.element ? this.startDateInput.element.focus({ preventScroll: !0 }) : s !== this.startDateInput.element && this.endDateInput.element.focus({ preventScroll: !0 });
  }
  nextTick(s) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => s());
  }
  setShow(s) {
    const { onOpen: t, onClose: e } = this.props;
    this.show !== s && (this.setState({ show: s }), s && t && t.call(void 0, {
      target: this
    }), !s && e && e.call(void 0, {
      target: this
    }));
  }
  calculateMedia(s) {
    for (let t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
let te = zt;
te.displayName = "DateRangePicker";
te.propTypes = {
  allowReverse: prop_types_index_js_.bool,
  calendarSettings: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  defaultShow: prop_types_index_js_.bool,
  defaultValue: prop_types_index_js_.shape({
    start: ot(prop_types_index_js_.instanceOf(Date).isRequired),
    end: ot(prop_types_index_js_.instanceOf(Date).isRequired)
  }),
  disabled: prop_types_index_js_.bool,
  endDateInputSettings: prop_types_index_js_.shape(Ct.propTypes),
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
    start: ot(prop_types_index_js_.instanceOf(Date).isRequired),
    end: ot(prop_types_index_js_.instanceOf(Date).isRequired)
  })
};
te.defaultProps = {
  allowReverse: !1,
  defaultShow: !1,
  defaultValue: q,
  disabled: !1,
  format: "d",
  max: dt,
  min: ut,
  swapButton: !1
};
const la = (0,index_mjs_.createPropsContext)(), ha = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(la, te));
ha.displayName = "KendoReactDateRangePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(te);
class ms extends index_js_.Component {
  constructor(t) {
    super(t), this._calendar = null, this._timePart = null, this._cancelButton = null, this._acceptButton = null, this._dateButtonRef = null, this._calendarWrap = null, this.shouldFocusPart = !1, this.focus = (e) => {
      Promise.resolve().then(() => {
        this.state.tab === "time" && this._timePart && this._timePart.focus(e);
        const i = this.calendarElement();
        this.state.tab === "date" && i && i.focus(e);
      });
    }, this.calendarElement = () => this._calendar && this._calendar.element || this._calendarWrap && this._calendarWrap.querySelector(".k-widget.k-calendar"), this.move = (e) => {
      if (e === "right" && this.state.tab === "time" || e === "left" && this.state.tab === "date")
        return;
      const i = e === "left" ? "date" : "time";
      this.shouldFocusPart = !0, this.setState({ tab: i });
    }, this.dateTimeFooter = () => {
      const { cancelButton: e } = this.props, i = this.localizationService.toLanguageString($t, T[$t]), a = this.localizationService.toLanguageString(Yt, T[Yt]);
      return /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-footer k-actions k-actions-stretched" }, e && /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          ref: (o) => {
            this._cancelButton = o;
          },
          className: "k-time-cancel",
          onClick: this.handleReject,
          onKeyDown: this.handleCancelKeyDown,
          title: i,
          "aria-label": i
        },
        i
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          themeColor: "primary",
          ref: (o) => {
            this._acceptButton = o;
          },
          className: "k-time-accept",
          disabled: !this.hasDateValue,
          onClick: this.handleAccept,
          onKeyDown: this.handleSetKeyDown,
          title: a,
          "aria-label": a
        },
        a
      ));
    }, this.handleReject = (e) => {
      this.setState({ dateValue: this.props.value, timeValue: this.props.value || L });
      const i = this.mergeDate(this.props.value, this.props.value || L);
      if (this.props.onReject) {
        const a = {
          nativeEvent: e.nativeEvent,
          syntheticEvent: e,
          target: this,
          value: i
        };
        this.props.onReject.call(void 0, a);
      }
    }, this.handleAccept = (e, i) => {
      if (!this.state.dateValue || !this.state.timeValue || !this.hasDateValue)
        return;
      const a = this.mergeDate(this.state.dateValue, i || this.state.timeValue);
      this.props.onChange.call(void 0, {
        syntheticEvent: e,
        nativeEvent: e.nativeEvent,
        value: a,
        target: this
      });
    }, this.handleNowClick = (e) => {
      this.setState({ timeValue: Vt() }), this.handleAccept(e, Vt());
    }, this.handleCalendarValueChange = (e) => {
      e.syntheticEvent.stopPropagation(), this.setState({ dateValue: e.value, tab: "time" }), this.shouldFocusPart = !0;
    }, this.handleTimeListContainerChange = (e) => {
      this.setState({ timeValue: e });
    }, this.handleDateClick = (e) => {
      e.stopPropagation(), this.move("left");
    }, this.handleTimeClick = (e) => {
      e.stopPropagation(), this.move("right");
    }, this.handleKeyDown = (e) => {
      const { keyCode: i, altKey: a } = e;
      if (!this.props.disabled)
        switch (i) {
          case index_mjs_.Keys.enter:
            !this.hasActiveButton() && this.hasDateValue && this.handleAccept(e);
            return;
          case index_mjs_.Keys.left:
            if (!a)
              return;
            this.move("left");
            return;
          case index_mjs_.Keys.right:
            if (!a)
              return;
            this.move("right");
            return;
          default:
            return;
        }
    }, this.handleCancelKeyDown = (e) => {
      const { keyCode: i } = e;
      i === index_mjs_.Keys.tab && this._dateButtonRef && this._dateButtonRef.element && !this.hasDateValue && (e.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleSetKeyDown = (e) => {
      const { keyCode: i } = e;
      i === index_mjs_.Keys.tab && this._dateButtonRef && this._dateButtonRef.element && (e.preventDefault(), this._dateButtonRef.element.focus());
    }, this.handleDateKeyDown = (e) => {
      var o, l, c, h;
      const { keyCode: i, shiftKey: a } = e;
      a && i === index_mjs_.Keys.tab && (e.stopPropagation(), this.hasDateValue ? (h = (c = this._acceptButton) == null ? void 0 : c.element) == null || h.focus() : (l = (o = this._cancelButton) == null ? void 0 : o.element) == null || l.focus()), i === index_mjs_.Keys.enter && (e.stopPropagation(), this.move("left"));
    }, this.handleTimeKeyDown = (e) => {
      const { keyCode: i } = e;
      i === index_mjs_.Keys.enter && (e.stopPropagation(), this.move("right"));
    }, this.handleTimePartMount = (e) => {
      this.setState({ timeValue: e });
    }, this.state = {
      tab: "date",
      dateValue: this.props.value,
      timeValue: this.props.value || L
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
  componentDidUpdate(t, e) {
    var i, a;
    this.shouldFocusPart && this.focus({ preventScroll: !0 }), (((i = t.value) == null ? void 0 : i.getTime()) !== ((a = this.props.value) == null ? void 0 : a.getTime()) || this.state.tab !== e.tab && this.props.value) && this.setState({
      dateValue: t.value && this.props.value && isEqualDate(t.value, this.props.value) ? this.state.dateValue : this.props.value,
      timeValue: this.props.value || L
    }), this.shouldFocusPart = !1;
  }
  render() {
    const {
      disabled: t,
      min: e,
      max: i,
      weekNumber: a,
      focusedDate: o,
      format: l,
      mobileMode: c,
      footerActions: h
    } = this.props, u = (0,index_mjs_.classNames)(
      {
        "k-date-tab": this.state.tab === "date",
        "k-time-tab": this.state.tab === "time",
        "k-disabled": t
      },
      "k-datetime-wrap"
    ), d = this.localizationService.toLanguageString(Ge, T[Ge]), p = this.localizationService.toLanguageString(Xe, T[Xe]), f = {
      min: e,
      max: i,
      weekNumber: a,
      focusedDate: o,
      disabled: t || this.state.tab !== "date",
      value: this.state.dateValue,
      onChange: this.handleCalendarValueChange,
      navigation: !1,
      tabIndex: t || this.state.tab !== "date" ? -1 : void 0,
      mobileMode: c
    };
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        onKeyDown: this.handleKeyDown,
        className: u,
        tabIndex: -1
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-buttongroup" }, /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.ButtonGroup, { width: "100%" }, /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          ref: (m) => this._dateButtonRef = m,
          type: "button",
          selected: this.state.tab === "date",
          togglable: !0,
          onClick: this.handleDateClick,
          onKeyDown: this.handleDateKeyDown
        },
        d
      ), /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          type: "button",
          selected: this.state.tab === "time",
          togglable: !0,
          onClick: this.handleTimeClick,
          onKeyDown: this.handleTimeKeyDown
        },
        p
      ))),
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-selector" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-calendar-wrap", ref: (m) => this._calendarWrap = m }, this.props.calendar ? /* @__PURE__ */ index_js_.createElement(this.props.calendar, { key: this.state.tab, ...f }) : /* @__PURE__ */ index_js_.createElement(
        as,
        {
          key: this.state.tab,
          ref: (m) => {
            this._calendar = m;
          },
          ...f
        }
      )), /* @__PURE__ */ index_js_.createElement("div", { className: "k-datetime-time-wrap" }, /* @__PURE__ */ index_js_.createElement("div", { className: c ? "k-reset k-timeselector-lg k-timeselector" : "" }, /* @__PURE__ */ index_js_.createElement(
        _t,
        {
          key: 1,
          onNowClick: this.handleNowClick,
          disabled: t || this.state.tab !== "time",
          ref: (m) => {
            this._timePart = m;
          },
          min: this.minTime || Nt,
          max: this.maxTime || xt,
          steps: this.props.steps,
          value: this.state.timeValue,
          format: l,
          onChange: this.handleTimeListContainerChange,
          onMount: this.handleTimePartMount,
          mobileMode: c
        }
      )))),
      h && this.dateTimeFooter()
    );
  }
  get minTime() {
    return this.props.minTime !== void 0 ? this.props.minTime : this.normalizeRange(this.props.min, this.state.dateValue);
  }
  get maxTime() {
    return this.props.maxTime !== void 0 ? this.props.maxTime : this.normalizeRange(this.props.max, this.state.dateValue);
  }
  normalizeRange(t, e) {
    return isEqualDate(t, e || H()) ? t : null;
  }
  hasActiveButton() {
    if (!this._acceptButton)
      return !1;
    const t = (0,index_mjs_.getActiveElement)(document);
    return this._acceptButton && t === this._acceptButton.element || this._cancelButton && t === this._cancelButton.element;
  }
  mergeTime(t, e) {
    return t && e ? U(e, t) : e;
  }
  mergeDate(t, e) {
    return t ? U(t || H(), e) : e;
  }
}
ms.defaultProps = {
  footerActions: !0
};
(0,kendo_react_intl_index_mjs_.registerForLocalization)(ms);
const et = class extends index_js_.Component {
  constructor(s) {
    super(s), this._element = null, this._dateInput = index_js_.createRef(), this._dateTimeSelector = null, this.shouldFocusDateInput = !1, this.prevShow = !1, this.focus = () => {
      const t = this.dateInputElement();
      t && t.focus();
    }, this.renderPicker = () => {
      const {
        disabled: t,
        minTime: e,
        maxTime: i,
        format: a,
        calendar: o,
        cancelButton: l,
        weekNumber: c,
        focusedDate: h
      } = this.props;
      return /* @__PURE__ */ index_js_.createElement(
        ms,
        {
          ref: (u) => {
            this._dateTimeSelector = u;
          },
          cancelButton: l,
          steps: this.props.steps,
          value: this.value,
          onChange: this.handleValueChange,
          onReject: this.handleReject,
          disabled: t,
          weekNumber: c,
          min: this.min,
          max: this.max,
          minTime: e,
          maxTime: i,
          focusedDate: h,
          format: a,
          calendar: o,
          mobileMode: this.mobileMode,
          footerActions: !this.mobileMode
        }
      );
    }, this.renderAdaptivePopup = () => {
      const { windowWidth: t = 0 } = this.state, e = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString($t, T[$t]), i = (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(Yt, T[Yt]), a = {
        expand: this.show,
        onClose: this.handleBlur,
        adaptiveTitle: this.props.adaptiveTitle,
        windowWidth: t,
        footer: {
          cancelText: e,
          onCancel: (o) => {
            var l;
            return (l = this._dateTimeSelector) == null ? void 0 : l.handleReject(o);
          },
          applyText: i,
          onApply: (o) => {
            var l;
            return (l = this._dateTimeSelector) == null ? void 0 : l.handleAccept(o);
          }
        }
      };
      return /* @__PURE__ */ index_js_.createElement(Se, { ...a }, /* @__PURE__ */ index_js_.createElement(kendo_react_layout_index_mjs_.ActionSheetContent, { className: "!k-overflow-hidden" }, this.renderPicker()));
    }, this.handleReject = () => {
      this.shouldFocusDateInput = !0, this.setShow(!1);
    }, this.handleValueChange = (t) => {
      this.setState({
        value: cloneDate(t.value || void 0)
      }), this.valueDuringOnChange = t.value, this.showDuringOnChange = !1, this.mobileMode || (this.shouldFocusDateInput = !0);
      const { onChange: e } = this.props;
      e && e.call(void 0, {
        syntheticEvent: t.syntheticEvent,
        nativeEvent: t.nativeEvent,
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
    }, this.handleIconMouseDown = (t) => {
      t.preventDefault();
    }, this.handleKeyDown = (t) => {
      const { altKey: e, keyCode: i } = t;
      if (i === index_mjs_.Keys.esc) {
        this.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      e && (i === index_mjs_.Keys.up || i === index_mjs_.Keys.down) && (t.preventDefault(), t.stopPropagation(), this.shouldFocusDateInput = i === index_mjs_.Keys.up, this.setShow(i === index_mjs_.Keys.down));
    }, this.dateInputElement = () => this.dateInput && this.dateInput.element || this.element && this.element.querySelector(".k-dateinput > input.k-input-inner"), (0,index_mjs_.validatePackage)(Rt), this.state = {
      value: this.props.defaultValue || et.defaultProps.defaultValue,
      show: this.props.defaultShow || et.defaultProps.defaultShow,
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
    const s = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
    return s !== null ? cloneDate(s) : null;
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
    return !!(this.state.windowWidth && this.state.windowWidth <= xe && this.props.adaptive);
  }
  get min() {
    return this.props.min !== void 0 ? this.props.min : et.defaultProps.min;
  }
  get max() {
    return this.props.max !== void 0 ? this.props.max : et.defaultProps.max;
  }
  /**
   * Represents the validity state into which the DateTimePicker is set.
   */
  get validity() {
    const s = Hs(this.value, this.min, this.max) && hs(this.value, this.props.minTime || Nt, this.props.maxTime || xt), t = this.props.validationMessage !== void 0, e = (!this.required || this.value !== null) && s, i = this.props.valid !== void 0 ? this.props.valid : e;
    return {
      customError: t,
      rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || !1,
      rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || !1,
      valid: i,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : et.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : et.defaultProps.required;
  }
  /**
   * @hidden
   */
  get dateInputComp() {
    return this.props.dateInput || et.defaultProps.dateInput;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var s;
    this.observerResize = index_mjs_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.show && this.forceUpdate(), (s = this.document) != null && s.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    const s = this.dateInputElement();
    this._dateTimeSelector && this.show && !this.prevShow && this._dateTimeSelector.focus({ preventScroll: !0 }), s && !this.show && this.shouldFocusDateInput && s.focus({ preventScroll: !0 }), this.prevShow = this.show, this.shouldFocusDateInput = !1;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    var s;
    clearTimeout(this.nextTickId), (s = this.document) != null && s.body && this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: s = et.defaultProps.size,
      rounded: t = et.defaultProps.rounded,
      fillMode: e = et.defaultProps.fillMode,
      disabled: i,
      tabIndex: a,
      title: o,
      id: l,
      format: c,
      formatPlaceholder: h,
      min: u,
      max: d,
      className: p,
      width: f,
      name: m,
      validationMessage: S,
      required: I,
      validityStyles: M,
      minTime: w,
      maxTime: E,
      ariaLabelledBy: g,
      ariaDescribedBy: B,
      popup: V = kendo_react_popup_index_mjs_.Popup
    } = this.props, R = !this.validityStyles || this.validity.valid, A = {
      id: l,
      ariaLabelledBy: g,
      ariaDescribedBy: B,
      format: c,
      formatPlaceholder: h,
      disabled: i,
      title: o,
      validityStyles: M,
      validationMessage: S,
      required: I,
      min: u,
      max: d,
      minTime: w,
      maxTime: E,
      name: m,
      tabIndex: this.show ? -1 : a,
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
    }, x = /* @__PURE__ */ index_js_.createElement(
      index_mjs_.AsyncFocusBlur,
      {
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onSyncFocus: this.props.onFocus,
        onSyncBlur: this.props.onBlur
      },
      ({ onFocus: O, onBlur: tt }) => /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          ref: (j) => {
            this._element = j;
          },
          className: (0,index_mjs_.classNames)(
            "k-input",
            "k-datetimepicker",
            {
              [`k-input-${index_mjs_.kendoThemeMaps.sizeMap[s] || s}`]: s,
              [`k-rounded-${index_mjs_.kendoThemeMaps.roundedMap[t] || t}`]: t,
              [`k-input-${e}`]: e,
              "k-invalid": !R,
              "k-required": this.required,
              "k-disabled": this.props.disabled
            },
            p
          ),
          onKeyDown: this.handleKeyDown,
          style: { width: f },
          onFocus: this.mobileMode ? void 0 : O,
          onBlur: tt,
          onClick: this.mobileMode ? this.handleDateIconClick : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          this.dateInputComp,
          {
            _ref: this._dateInput,
            ariaRole: "combobox",
            ariaControls: this._popupId,
            readonly: this.mobileMode,
            ...A
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
            title: (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(Bt, T[Bt]),
            className: "k-input-button",
            rounded: null,
            "aria-label": (0,kendo_react_intl_index_mjs_.provideLocalizationService)(this).toLanguageString(Bt, T[Bt])
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          V,
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
      cs,
      {
        dateInput: this._dateInput,
        label: this.props.label,
        editorId: l,
        editorValid: R,
        editorDisabled: this.props.disabled,
        children: x,
        style: { width: this.props.width }
      }
    ) : x;
  }
  setShow(s) {
    const { onOpen: t, onClose: e } = this.props;
    this.show !== s && (this.setState({ show: s }), s && t && t.call(void 0, {
      target: this
    }), !s && e && e.call(void 0, {
      target: this
    }));
  }
  nextTick(s) {
    clearTimeout(this.nextTickId), this.nextTickId = window.setTimeout(() => s());
  }
  calculateMedia(s) {
    for (const t of s)
      this.setState({ windowWidth: t.target.clientWidth });
  }
};
let ee = et;
ee.displayName = "DateTimePicker";
ee.propTypes = {
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
};
ee.defaultProps = {
  defaultShow: !1,
  defaultValue: null,
  disabled: !1,
  format: "g",
  // general date and time pattern (short time): "M/d/y h:mm a" for en.
  max: dt,
  min: ut,
  popupSettings: {},
  tabIndex: 0,
  weekNumber: !1,
  required: !1,
  validityStyles: !0,
  cancelButton: !0,
  dateInput: Dt,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const ca = (0,index_mjs_.createPropsContext)(), ua = (0,index_mjs_.withIdHOC)((0,index_mjs_.withPropsContext)(ca, ee));
ua.displayName = "KendoReactDateTimePicker";
(0,kendo_react_intl_index_mjs_.registerForLocalization)(ee);



/***/ }

}]);