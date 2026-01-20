"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3055],{

/***/ 4772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _add_days__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53402);

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
    return (0,_add_days__WEBPACK_IMPORTED_MODULE_0__/* .addDays */ .f)(date, offset * 7);
};


/***/ },

/***/ 5995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ cloneDate)
/* harmony export */ });
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


/***/ },

/***/ 9106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ firstMonthOfYear)
/* harmony export */ });
/* harmony import */ var _set_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72056);

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
var firstMonthOfYear = function (value) { return (0,_set_month__WEBPACK_IMPORTED_MODULE_0__/* .setMonth */ .Z)(value, 0); };


/***/ },

/***/ 10716
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _create_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78524);

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
    return (0,_create_date__WEBPACK_IMPORTED_MODULE_0__/* .createDate */ .J)(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};


/***/ },

/***/ 25843
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ lastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _add_days__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53402);
/* harmony import */ var _create_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78524);


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
    var newDate = (0,_create_date__WEBPACK_IMPORTED_MODULE_1__/* .createDate */ .J)(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return (0,_add_days__WEBPACK_IMPORTED_MODULE_0__/* .addDays */ .f)(newDate, -1);
};


/***/ },

/***/ 30701
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ addCenturies)
/* harmony export */ });
/* harmony import */ var _add_years__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51899);

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
    return (0,_add_years__WEBPACK_IMPORTED_MODULE_0__/* .addYears */ .e)(value, 100 * offset);
};


/***/ },

/***/ 37290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ durationInCenturies)
/* harmony export */ });
/* harmony import */ var _first_decade_of_century__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39027);

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
var durationInCenturies = function (start, end) { return (((0,_first_decade_of_century__WEBPACK_IMPORTED_MODULE_0__/* .firstDecadeOfCentury */ .K)(end).getFullYear() - (0,_first_decade_of_century__WEBPACK_IMPORTED_MODULE_0__/* .firstDecadeOfCentury */ .K)(start).getFullYear()) / 100); };


/***/ },

/***/ 37699
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ durationInMonths)
/* harmony export */ });
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


/***/ },

/***/ 38948
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ normalizeYear)
/* harmony export */ });
/* harmony import */ var _set_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79909);

/**
 * @hidden
 */
// eslint-disable-next-line
var normalizeYear = function (value, year) { return ((0,_set_year__WEBPACK_IMPORTED_MODULE_0__/* .setYear */ .i)(value, year(value.getFullYear()))); };


/***/ },

/***/ 38999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ Direction)
/* harmony export */ });
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


/***/ },

/***/ 39027
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ firstDecadeOfCentury)
/* harmony export */ });
/* harmony import */ var _normalize_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38948);

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
var firstDecadeOfCentury = function (value) { return ((0,_normalize_year__WEBPACK_IMPORTED_MODULE_0__/* .normalizeYear */ .n)(value, function (y) { return y - (y % 100); })); };


/***/ },

/***/ 39047
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ durationInDecades)
/* harmony export */ });
/* harmony import */ var _first_year_of_decade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92922);

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
var durationInDecades = function (start, end) { return (((0,_first_year_of_decade__WEBPACK_IMPORTED_MODULE_0__/* .firstYearOfDecade */ .p)(end).getFullYear() - (0,_first_year_of_decade__WEBPACK_IMPORTED_MODULE_0__/* .firstYearOfDecade */ .p)(start).getFullYear()) / 10); };


/***/ },

/***/ 43462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ isEqual)
/* harmony export */ });
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


/***/ },

/***/ 45602
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ weekInYear)
});

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

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/add-days.js
var add_days = __webpack_require__(53402);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/create-date.js
var create_date = __webpack_require__(78524);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/direction.enum.js
var direction_enum = __webpack_require__(38999);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/day-of-week.js
var day_of_week = __webpack_require__(50876);
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
    return (0,day_of_week/* dayOfWeek */.m)(date, weekDay, direction_enum/* Direction */.O.Backward);
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

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/get-date.js
var get_date = __webpack_require__(10716);
;// ../node_modules/.pnpm/@progress+kendo-date-math@1.5.15/node_modules/@progress/kendo-date-math/dist/es/week-in-year.js






var moveDateToWeekStart = function (date, weekStartDay) {
    if (weekStartDay !== Day.Monday) {
        return (0,add_days/* addDays */.f)(prevDayOfWeek(date, weekStartDay), 4);
    }
    return (0,add_days/* addDays */.f)(date, (4 - (date.getDay() || 7)));
};
var calcWeekInYear = function (date, weekStartDay) {
    var firstWeekInYear = (0,create_date/* createDate */.J)(date.getFullYear(), 0, 1, -6);
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
    date = (0,get_date/* getDate */.p)(date);
    var prevWeekDate = (0,add_days/* addDays */.f)(date, -7);
    var nextWeekDate = (0,add_days/* addDays */.f)(date, 7);
    var weekNumber = calcWeekInYear(date, weekStartDay);
    if (weekNumber === 0) {
        return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
    }
    if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
        return 1;
    }
    return weekNumber;
};


/***/ },

/***/ 49526
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _adjust_dst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61322);
/* harmony import */ var _clone_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5995);
/* harmony import */ var _last_day_of_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25843);



var MONTHS_LENGTH = 12;
var normalize = function (date, expectedMonth) { return (date.getMonth() !== expectedMonth ? (0,_last_day_of_month__WEBPACK_IMPORTED_MODULE_2__/* .lastDayOfMonth */ .W)(addMonths(date, -1)) : date //tslint:disable-line:no-use-before-declare
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
    var newDate = (0,_clone_date__WEBPACK_IMPORTED_MODULE_1__/* .cloneDate */ .a)(date);
    var diff = (newDate.getMonth() + offset) % MONTHS_LENGTH;
    var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
    newDate.setMonth(newDate.getMonth() + offset);
    return normalize((0,_adjust_dst__WEBPACK_IMPORTED_MODULE_0__/* .adjustDST */ .t)(newDate, date.getHours()), expectedMonth);
};


/***/ },

/***/ 50876
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ dayOfWeek)
/* harmony export */ });
/* harmony import */ var _direction_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38999);
/* harmony import */ var _adjust_dst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61322);
/* harmony import */ var _clone_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5995);



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
    if (direction === void 0) { direction = _direction_enum__WEBPACK_IMPORTED_MODULE_0__/* .Direction */ .O.Forward; }
    var newDate = (0,_clone_date__WEBPACK_IMPORTED_MODULE_2__/* .cloneDate */ .a)(date);
    var newDay = ((weekDay - newDate.getDay()) + (7 * direction)) % 7;
    newDate.setDate(newDate.getDate() + newDay);
    return (0,_adjust_dst__WEBPACK_IMPORTED_MODULE_1__/* .adjustDST */ .t)(newDate, date.getHours());
};


/***/ },

/***/ 51899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ addYears)
/* harmony export */ });
/* harmony import */ var _adjust_dst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61322);
/* harmony import */ var _set_year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79909);


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
    return (0,_adjust_dst__WEBPACK_IMPORTED_MODULE_0__/* .adjustDST */ .t)((0,_set_year__WEBPACK_IMPORTED_MODULE_1__/* .setYear */ .i)(value, value.getFullYear() + offset), value.getHours());
};


/***/ },

/***/ 53402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _adjust_dst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61322);
/* harmony import */ var _clone_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5995);


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
    var newDate = (0,_clone_date__WEBPACK_IMPORTED_MODULE_1__/* .cloneDate */ .a)(date);
    newDate.setDate(newDate.getDate() + offset);
    return (0,_adjust_dst__WEBPACK_IMPORTED_MODULE_0__/* .adjustDST */ .t)(newDate, date.getHours());
};


/***/ },

/***/ 57452
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ lastMonthOfYear)
/* harmony export */ });
/* harmony import */ var _set_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72056);

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
var lastMonthOfYear = function (value) { return (0,_set_month__WEBPACK_IMPORTED_MODULE_0__/* .setMonth */ .Z)(value, 11); };


/***/ },

/***/ 60857
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ lastDecadeOfCentury)
/* harmony export */ });
/* harmony import */ var _normalize_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38948);

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
var lastDecadeOfCentury = function (value) { return ((0,_normalize_year__WEBPACK_IMPORTED_MODULE_0__/* .normalizeYear */ .n)(value, function (y) { return y - (y % 100) + 90; })); };


/***/ },

/***/ 61322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ adjustDST)
/* harmony export */ });
/* harmony import */ var _clone_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5995);

/**
 * @hidden
 */
var adjustDST = function (date, hour) {
    var newDate = (0,_clone_date__WEBPACK_IMPORTED_MODULE_0__/* .cloneDate */ .a)(date);
    if (hour === 0 && newDate.getHours() === 23) {
        newDate.setHours(newDate.getHours() + 2);
    }
    return newDate;
};


/***/ },

/***/ 72056
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ setMonth)
/* harmony export */ });
/* harmony import */ var _add_months__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49526);
/* harmony import */ var _create_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78524);
/* harmony import */ var _last_day_of_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25843);



/**
 * @hidden
 */
var setMonth = function (value, month) {
    var day = value.getDate();
    var candidate = (0,_create_date__WEBPACK_IMPORTED_MODULE_1__/* .createDate */ .J)(value.getFullYear(), month, day, value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getDate() === day ? candidate : (0,_last_day_of_month__WEBPACK_IMPORTED_MODULE_2__/* .lastDayOfMonth */ .W)((0,_add_months__WEBPACK_IMPORTED_MODULE_0__/* .addMonths */ .P)(candidate, -1));
};


/***/ },

/***/ 72604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ lastYearOfDecade)
/* harmony export */ });
/* harmony import */ var _normalize_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38948);

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
var lastYearOfDecade = function (value) { return ((0,_normalize_year__WEBPACK_IMPORTED_MODULE_0__/* .normalizeYear */ .n)(value, function (y) { return y - (y % 10) + 9; })); };


/***/ },

/***/ 78524
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ createDate)
/* harmony export */ });
/* harmony import */ var _adjust_dst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61322);

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
    return (0,_adjust_dst__WEBPACK_IMPORTED_MODULE_0__/* .adjustDST */ .t)(date, hours);
};


/***/ },

/***/ 79291
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ isEqualDate)
/* harmony export */ });
/* harmony import */ var _get_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10716);
/* harmony import */ var _is_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43462);


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
    return candidate && expected && (0,_is_equal__WEBPACK_IMPORTED_MODULE_1__/* .isEqual */ .n)((0,_get_date__WEBPACK_IMPORTED_MODULE_0__/* .getDate */ .p)(candidate), (0,_get_date__WEBPACK_IMPORTED_MODULE_0__/* .getDate */ .p)(expected));
};


/***/ },

/***/ 79909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ setYear)
/* harmony export */ });
/* harmony import */ var _add_months__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49526);
/* harmony import */ var _create_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78524);
/* harmony import */ var _last_day_of_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25843);



/**
 * @hidden
 */
var setYear = function (value, year) {
    var month = value.getMonth();
    var candidate = (0,_create_date__WEBPACK_IMPORTED_MODULE_1__/* .createDate */ .J)(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
    return candidate.getMonth() === month ? candidate : (0,_last_day_of_month__WEBPACK_IMPORTED_MODULE_2__/* .lastDayOfMonth */ .W)((0,_add_months__WEBPACK_IMPORTED_MODULE_0__/* .addMonths */ .P)(candidate, -1));
};


/***/ },

/***/ 89236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ addDecades)
/* harmony export */ });
/* harmony import */ var _add_years__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51899);

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
    return (0,_add_years__WEBPACK_IMPORTED_MODULE_0__/* .addYears */ .e)(value, 10 * offset);
};


/***/ },

/***/ 90268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ durationInYears)
/* harmony export */ });
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


/***/ },

/***/ 90401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ firstDayOfMonth)
/* harmony export */ });
/* harmony import */ var _create_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78524);

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
    return (0,_create_date__WEBPACK_IMPORTED_MODULE_0__/* .createDate */ .J)(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};


/***/ },

/***/ 92922
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ firstYearOfDecade)
/* harmony export */ });
/* harmony import */ var _normalize_year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38948);

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
var firstYearOfDecade = function (value) { return ((0,_normalize_year__WEBPACK_IMPORTED_MODULE_0__/* .normalizeYear */ .n)(value, function (y) { return y - (y % 10); })); };


/***/ }

}]);