"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[898],{

/***/ 90898
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IntlError: () => (/* reexport */ IntlError),
  cldr: () => (/* reexport */ cldr),
  currencyDisplay: () => (/* reexport */ currencyDisplay),
  currencyDisplays: () => (/* reexport */ currencyDisplays),
  currencyFractionOptions: () => (/* reexport */ currencyFractionOptions),
  dateFieldName: () => (/* reexport */ dateFieldName),
  dateFormatNames: () => (/* reexport */ dateFormatNames),
  errors: () => (/* reexport */ errors),
  firstDay: () => (/* reexport */ firstDay),
  format: () => (/* reexport */ format),
  formatDate: () => (/* reexport */ formatDate),
  formatNumber: () => (/* reexport */ formatNumber),
  load: () => (/* reexport */ load),
  localeCurrency: () => (/* reexport */ localeCurrency),
  localeInfo: () => (/* reexport */ localeInfo),
  numberSymbols: () => (/* reexport */ numberSymbols),
  parseDate: () => (/* reexport */ parseDate),
  parseNumber: () => (/* reexport */ parseNumber),
  setData: () => (/* reexport */ setData),
  splitDateFormat: () => (/* reexport */ splitDateFormat),
  territoryCurrencyCode: () => (/* reexport */ territoryCurrencyCode),
  toIntlErrors: () => (/* reexport */ toIntlErrors),
  toString: () => (/* reexport */ format_toString),
  weekendRange: () => (/* reexport */ weekendRange)
});

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/default-data.js
const defaultData = {
    en: {
        name: "en",
        identity: {
            version: {
                _unicodeVersion: "14.0.0",
                _cldrVersion: "41"
            },
            language: "en"
        },
        territory: "US",
        numbers: {
            symbols: {
                decimal: ".",
                group: ",",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "NaN",
                timeSeparator: ":",
                approximatelySign: "~"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: [
                    3
                ]
            },
            scientific: {
                patterns: [
                    "nEn"
                ],
                groupSize: []
            },
            percent: {
                patterns: [
                    "n%"
                ],
                groupSize: [
                    3
                ]
            },
            currency: {
                patterns: [
                    "$n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            },
            currencies: {
                BGN: {
                    displayName: "Bulgarian Lev",
                    "displayName-count-one": "Bulgarian lev",
                    "displayName-count-other": "Bulgarian leva",
                    symbol: "BGN"
                },
                EUR: {
                    displayName: "Euro",
                    "displayName-count-one": "euro",
                    "displayName-count-other": "euros",
                    symbol: "€",
                    "symbol-alt-narrow": "€"
                },
                USD: {
                    displayName: "US Dollar",
                    "displayName-count-one": "US dollar",
                    "displayName-count-other": "US dollars",
                    symbol: "$",
                    "symbol-alt-narrow": "$"
                }
            },
            localeCurrency: "USD",
            accounting: {
                patterns: [
                    "$n",
                    "($n)"
                ],
                groupSize: [
                    3
                ]
            }
        },
        calendar: {
            gmtFormat: "GMT{0}",
            gmtZeroFormat: "GMT",
            patterns: {
                d: "M/d/y",
                D: "EEEE, MMMM d, y",
                m: "MMM d",
                M: "MMMM d",
                y: "MMM y",
                Y: "MMMM y",
                F: "EEEE, MMMM d, y h:mm:ss a",
                g: "M/d/y h:mm a",
                G: "M/d/y h:mm:ss a",
                t: "h:mm a",
                T: "h:mm:ss a",
                s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            dateTimeFormats: {
                full: "{1}, {0}",
                long: "{1}, {0}",
                medium: "{1}, {0}",
                short: "{1}, {0}",
                availableFormats: {
                    Bh: "h B",
                    Bhm: "h:mm B",
                    Bhms: "h:mm:ss B",
                    d: "d",
                    E: "ccc",
                    EBh: "E h B",
                    EBhm: "E h:mm B",
                    EBhms: "E h:mm:ss B",
                    Ed: "d E",
                    Eh: "E h a",
                    Ehm: "E h:mm a",
                    EHm: "E HH:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E HH:mm:ss",
                    Gy: "y G",
                    GyM: "M/y G",
                    GyMd: "M/d/y G",
                    GyMEd: "E, M/d/y G",
                    GyMMM: "MMM y G",
                    GyMMMd: "MMM d, y G",
                    GyMMMEd: "E, MMM d, y G",
                    h: "h a",
                    H: "HH",
                    hm: "h:mm a",
                    Hm: "HH:mm",
                    hms: "h:mm:ss a",
                    Hms: "HH:mm:ss",
                    hmsv: "h:mm:ss a v",
                    Hmsv: "HH:mm:ss v",
                    hmv: "h:mm a v",
                    Hmv: "HH:mm v",
                    hv: "h a v",
                    Hv: "HH'h' v",
                    M: "L",
                    Md: "M/d",
                    MEd: "E, M/d",
                    MMM: "LLL",
                    MMMd: "MMM d",
                    MMMEd: "E, MMM d",
                    MMMMd: "MMMM d",
                    "MMMMW-count-one": "'week' W 'of' MMMM",
                    "MMMMW-count-other": "'week' W 'of' MMMM",
                    ms: "mm:ss",
                    y: "y",
                    yM: "M/y",
                    yMd: "M/d/y",
                    yMEd: "E, M/d/y",
                    yMMM: "MMM y",
                    yMMMd: "MMM d, y",
                    yMMMEd: "E, MMM d, y",
                    yMMMM: "MMMM y",
                    yQQQ: "QQQ y",
                    yQQQQ: "QQQQ y",
                    "yw-count-one": "'week' w 'of' Y",
                    "yw-count-other": "'week' w 'of' Y"
                }
            },
            timeFormats: {
                full: "h:mm:ss a zzzz",
                long: "h:mm:ss a z",
                medium: "h:mm:ss a",
                short: "h:mm a"
            },
            dateFormats: {
                full: "EEEE, MMMM d, y",
                long: "MMMM d, y",
                medium: "MMM d, y",
                short: "M/d/yy"
            },
            days: {
                format: {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    narrow: [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    short: [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    wide: [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    narrow: [
                        "J",
                        "F",
                        "M",
                        "A",
                        "M",
                        "J",
                        "J",
                        "A",
                        "S",
                        "O",
                        "N",
                        "D"
                    ],
                    wide: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            },
            quarters: {
                format: {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    narrow: {
                        midnight: "mi",
                        am: "a",
                        "am-alt-variant": "am",
                        noon: "n",
                        pm: "p",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "in the morning",
                        afternoon1: "in the afternoon",
                        evening1: "in the evening",
                        night1: "at night"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    narrow: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    },
                    wide: {
                        midnight: "midnight",
                        am: "AM",
                        "am-alt-variant": "am",
                        noon: "noon",
                        pm: "PM",
                        "pm-alt-variant": "pm",
                        morning1: "morning",
                        afternoon1: "afternoon",
                        evening1: "evening",
                        night1: "night"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        "0": "Before Christ",
                        "1": "Anno Domini",
                        "0-alt-variant": "Before Common Era",
                        "1-alt-variant": "Common Era"
                    },
                    abbreviated: {
                        "0": "BC",
                        "1": "AD",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    narrow: {
                        "0": "B",
                        "1": "A",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            },
            dateFields: {
                era: {
                    wide: "era",
                    short: "era",
                    narrow: "era"
                },
                year: {
                    wide: "year",
                    short: "yr.",
                    narrow: "yr."
                },
                quarter: {
                    wide: "quarter",
                    short: "qtr.",
                    narrow: "qtr."
                },
                month: {
                    wide: "month",
                    short: "mo.",
                    narrow: "mo."
                },
                week: {
                    wide: "week",
                    short: "wk.",
                    narrow: "wk."
                },
                weekOfMonth: {
                    wide: "week of month",
                    short: "wk. of mo.",
                    narrow: "wk. of mo."
                },
                day: {
                    wide: "day",
                    short: "day",
                    narrow: "day"
                },
                dayOfYear: {
                    wide: "day of year",
                    short: "day of yr.",
                    narrow: "day of yr."
                },
                weekday: {
                    wide: "day of the week",
                    short: "day of wk.",
                    narrow: "day of wk."
                },
                weekdayOfMonth: {
                    wide: "weekday of the month",
                    short: "wkday. of mo.",
                    narrow: "wkday. of mo."
                },
                dayperiod: {
                    short: "AM/PM",
                    wide: "AM/PM",
                    narrow: "AM/PM"
                },
                hour: {
                    wide: "hour",
                    short: "hr.",
                    narrow: "hr."
                },
                minute: {
                    wide: "minute",
                    short: "min.",
                    narrow: "min."
                },
                second: {
                    wide: "second",
                    short: "sec.",
                    narrow: "sec."
                },
                zone: {
                    wide: "time zone",
                    short: "zone",
                    narrow: "zone"
                },
                millisecond: {
                    narrow: "ms",
                    short: "ms",
                    wide: "millisecond"
                }
            }
        }
    },
    supplemental: {
        likelySubtags: {
            en: "en-Latn-US"
        },
        currencyData: {
            region: {
                US: [
                    {
                        USD: {
                            _from: "1792-01-01"
                        }
                    }
                ]
            }
        },
        weekData: {
            firstDay: {
                US: "sun"
            },
            weekendStart: {
                "001": "sat"
            },
            weekendEnd: {
                "001": "sun"
            }
        }
    }
};
/* harmony default export */ const default_data = (defaultData);
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/is-string.js
function isString(value) {
    return typeof value === "string";
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/error-details.js
//The error is represented by unique name and corresponding message
//The message can contain placeholders with index, e.g. {0}, {1}

/* harmony default export */ const error_details = ({
    "NoLocale": "Missing locale info for '{0}'",
    "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
    "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
    "NoCurrencyRegion": "No currency data for region '{0}'",
    "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
    "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
    "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
    "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
    "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
    "NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
});

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/errors.js


const formatRegExp = /\{(\d+)}?\}/g;

class IntlError {
    constructor({ name, message }) {
        if (!name || !message) {
            throw new Error("{ name: string, message: string } object is required!");
        }

        this.name = name;
        this.message = message;
    }

    formatMessage(...values) {
        const flattenValues = flatten(values);

        const formattedMessage = this.message.replace(formatRegExp, function(match, index) {
            return flattenValues[parseInt(index, 10)];
        });

        return `${this.name}: ${formattedMessage}`;
    }

    error(...values) {
        return new Error(this.formatMessage(values));
    }
}

const flatten = function(arr) {
    return arr.reduce((a, b) => a.concat(b), []);
};

const toIntlErrors = function(errors) {
    const predicate = function(prev, name) {
        prev[name] = new IntlError({ name, message: errors[name] });
        return prev;
    };

    return Object.keys(errors).reduce(predicate, {});
};

const errors = toIntlErrors(error_details);



;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/info.js




function availableLocaleInfo(fullName, suffixes) {
    const parts = fullName.split("-");
    const language = parts[0];
    const script = parts[1];
    const territory = parts[2];

    return cldr[fullName] || (suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory]) || (suffixes.indexOf(script) !== -1 && cldr[language + "-" + script]) || cldr[language];
}

function localeFullName(language, suffixes) {
    const likelySubtags = cldr.supplemental.likelySubtags;

    for (let idx = 0; idx < suffixes.length; idx++) {
        let name = likelySubtags[language + "-" + suffixes[idx ]];
        if (name) {
            return name;
        }
    }

    if (likelySubtags[language]) {
        return likelySubtags[language];
    }
}

const cldr = default_data;

function getLocaleInfo(locale) {
    let info;
    if (isString(locale)) {
        info = localeInfo(locale);
    } else {
        info = locale;
    }
    return info;
}

function localeInfo(locale) {
    if (cldr[locale]) {
        return cldr[locale];
    }

    const likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        const parts = locale.split("-");
        const language = parts[0];
        const suffixes = parts.slice(1);
        const fullName = localeFullName(language, suffixes);
        const info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
        if (info) {
            return info;
        }
    }

    throw errors.NoLocale.error(locale);
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/constants.js
const DECIMAL = "decimal";
const CURRENCY = "currency";
const ACCOUNTING = "accounting";
const PERCENT = "percent";
const SCIENTIFIC = "scientific";

const CURRENCY_PLACEHOLDER = "$";
const PERCENT_PLACEHOLDER = "%";
const NUMBER_PLACEHOLDER = "n";

const LIST_SEPARATOR = ";";
const GROUP_SEPARATOR = ",";

const POINT = ".";
const EMPTY = "";

const DEFAULT_LOCALE = "en";


;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/load-numbers.js



const LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
const LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";

const patternRegExp = /([#,0.]+)/g;
const cldrCurrencyRegExp = /¤/g;

function getPatterns(pattern) {
    patternRegExp.lastIndex = 0;

    return pattern.replace(cldrCurrencyRegExp, CURRENCY_PLACEHOLDER).replace(patternRegExp, NUMBER_PLACEHOLDER).split(LIST_SEPARATOR);
}

function getGroupSize(pattern) {
    patternRegExp.lastIndex = 0;

    const numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(POINT);
    const integer = numberPatterns[0];

    const groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return groupSize;
}

function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
    for (let field in currencyFormats) {
        if (field.startsWith("unitPattern")) {
            currencyInfo[field] = currencyFormats[field].replace("{0}", NUMBER_PLACEHOLDER).replace("{1}", CURRENCY_PLACEHOLDER);
        }
    }
}

function loadNumbersInfo(locale, info) {
    const localeInfo = cldr[locale];
    const numbers = localeInfo.numbers = localeInfo.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (let field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[field]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            const style = field.substring(0, field.indexOf(LATIN_NUMBER_FORMATS));
            const pattern = info[field].standard;
            if (pattern) {
                numbers[style] = {
                    patterns: getPatterns(pattern)
                };
            }

            if (style === CURRENCY) {
                numbers[style] = numbers[style] || {};
                numbers[style].groupSize = getGroupSize((info[DECIMAL + LATIN_NUMBER_FORMATS] || info[field]).standard);
                loadCurrencyUnitPatterns(numbers[style], info[field]);
                numbers[ACCOUNTING] = {
                    patterns: getPatterns(info[field][ACCOUNTING]),
                    groupSize: numbers[style].groupSize
                };
            } else if (pattern) {
                numbers[style].groupSize = getGroupSize(pattern);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
        }
    }
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/load-dates.js


const predefinedDatePatterns = {
    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};

const YEAR_REGEX = /y+/g;
const SHORT_DATE = [ [ "dateFormats", "short" ] ];
const ALT_ASCII_REGEX = /-alt-ascii$/;

const datePatterns = {
    D: [ [ "dateFormats", "full" ] ],
    m: [ [ "dateTimeFormats", "availableFormats", "MMMd" ] ],
    M: [ [ "dateTimeFormats", "availableFormats", "MMMMd" ] ],
    y: [ [ "dateTimeFormats", "availableFormats", "yMMM" ] ],
    Y: [ [ "dateTimeFormats", "availableFormats", "yMMMM" ] ],
    F: [ [ "dateFormats", "full" ], [ "timeFormats", "medium" ] ],
    g: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "short" ] ],
    G: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "medium" ] ],
    t: [ [ "timeFormats", "short" ] ],
    T: [ [ "timeFormats", "medium" ] ]
};

function toArray(obj) {
    let result = [];
    let names = Object.getOwnPropertyNames(obj);
    for (let idx = 0; idx < names.length; idx++) {
        let value = obj[names[idx]];
        result.push(value);
    }
    return result;
}

function getCalendarNames(info, isObj) {
    const result = {};
    for (let formatType in info) {
        let names = result[formatType] = {};
        for (let format in info[formatType]) {
            let formats = info[formatType][format];
            names[format] = isObj ? formats : toArray(formats);
        }
    }
    return result;
}

function getEraNames(eras) {
    const result = {};
    const format = result.format = {};
    const eraNameMap = {
        eraAbbr: "abbreviated",
        eraNames: "wide",
        eraNarrow: "narrow"
    };

    for (let eraFormatName in eras) {
        let formatName = eraNameMap[eraFormatName];
        format[formatName] = eras[eraFormatName];
    }

    return result;
}

function loadCalendarNames(locale, calendar) {
    const localeCalendar = cldr[locale].calendar;
    localeCalendar.days = getCalendarNames(calendar.days);
    localeCalendar.months = getCalendarNames(calendar.months);
    localeCalendar.quarters = getCalendarNames(calendar.quarters);
    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

    localeCalendar.eras = getEraNames(calendar.eras);
}

function loadCalendarDateFields(locale, fields) {
    const localeCalendar = cldr[locale].calendar;
    const dateFields = {};

    for (let field in fields) {
        const [ fieldName, formatType = 'wide' ] = field.split('-');
        const fieldInfo = dateFields[fieldName] || {};
        const displayName = fields[field].displayName;

        if (!displayName) { continue; }

        fieldInfo[formatType] = displayName;
        dateFields[fieldName] = fieldInfo;
    }

    localeCalendar.dateFields = dateFields;
}

function getPredefinedFormat(paths, calendar) {
    const result = [];

    for (let pathIdx = 0; pathIdx < paths.length; pathIdx++) {
        let fields = paths[ pathIdx ];
        let pattern = calendar;
        for (let idx = 0; idx < fields.length; idx++) {
            pattern = pattern[fields[idx]];
        }
        result.push(pattern);
    }

    return result.join(" ");
}

function filterFormats(formats) {
    const result = {};
    for (let format in formats) {
        // Removes -alt-ascii formats in favor of the regular, Unicode formats
        if (!ALT_ASCII_REGEX.test(format)) {
            result[format] = formats[format];
        }
    }

    return result;
}


function loadCalendarPatterns(locale, calendar) {
    const cldrCalendar = cldr[locale].calendar;
    const patterns = cldrCalendar.patterns = {};

    patterns.d = getPredefinedFormat(SHORT_DATE, calendar).replace(YEAR_REGEX, 'y');

    for (let pattern in datePatterns) {
        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
    }

    for (let pattern in predefinedDatePatterns) {
        patterns[pattern] = predefinedDatePatterns[pattern];
    }

    const dateTimeFormats = calendar.dateTimeFormats;
    cldrCalendar.dateTimeFormats = {
        full: dateTimeFormats.full,
        long: dateTimeFormats.long,
        medium: dateTimeFormats.medium,
        short: dateTimeFormats.short,
        availableFormats: filterFormats(dateTimeFormats.availableFormats)
    };
    cldrCalendar.timeFormats = filterFormats(calendar.timeFormats);
    cldrCalendar.dateFormats = filterFormats(calendar.dateFormats);
}


function loadCalendarInfo(locale, info) {
    const calendar = cldr[locale].calendar = cldr[locale].calendar || {};
    for (let field in info) {
        if (field === "timeZoneNames") {
            calendar.gmtFormat = info[field].gmtFormat;
            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
        } else if (field === "calendars" && info[field].gregorian) {
            loadCalendarPatterns(locale, info[field].gregorian);
            loadCalendarNames(locale, info[field].gregorian);
        } else if (field === "fields") {
            loadCalendarDateFields(locale, info.fields);
        }
    }
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/territory.js


function territoryFromName(name, identity) {
    const likelySubtags = cldr.supplemental.likelySubtags;
    let parts = name.split("-");
    if (likelySubtags) {
        const likelyName = likelySubtags[name] || likelySubtags[parts[0]];
        if (likelyName) {
            parts = likelyName.split("-");
        }
    }

    if (identity) {
        for (let idx = parts.length - 1; idx >= 1; idx--) {
            const part = parts[idx];
            if (part === identity.variant || part === identity.script) {
                parts.splice(idx, 1);
            }
        }
    }

    const length = parts.length;

    if (length > 1) {
        const territory = parts[length - 1];
        return territory.toUpperCase();
    }
}

function localeTerritory(info) {
    if (info.territory) {
        return info.territory;
    }

    const name = info.name;
    const identity = info.identity;
    let territory;

    if (identity && identity.territory) {
        territory = identity.territory;
    } else {
        territory = territoryFromName(name, identity);
    }

    info.territory = territory;

    return territory;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/load-units.js
const MILLISECOND = 'duration-millisecond';
const UNIT_PATTERN_ONE = 'unitPattern-count-one';
const UNIT_PATTERN_OTHER = 'unitPattern-count-other';
const placeholderPattern = /\{0\}\s?/;

function extractUnit(unit) {
    const value = unit[UNIT_PATTERN_ONE] || unit[UNIT_PATTERN_OTHER];
    return value.replace(placeholderPattern, '');
}

function loadUnits(localeInfo, units) {
    localeInfo.calendar.dateFields.millisecond = {
        narrow: extractUnit(units.narrow[MILLISECOND]),
        short: extractUnit(units.short[MILLISECOND]),
        wide: extractUnit(units.long[MILLISECOND])
    };
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/load.js






function loadLocale(locale, info) {
    for (let field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

function load() {
    const length = arguments.length;
    for (let idx = 0; idx < length; idx++) {
        let entry = arguments[idx];
        if (entry.main) {
            let locale = Object.keys(entry.main)[0];
            let info = entry.main[locale];
            let localeInfo = cldr[locale] = cldr[locale] || {};

            if (info.units) {
                loadUnits(localeInfo, info.units);
            } else {
                localeInfo.name = localeInfo.name || locale;
                localeInfo.identity = localeInfo.identity || info.identity;

                localeTerritory(localeInfo);
                loadLocale(locale, info);
            }
        } else if (entry.supplemental) {
            if (entry.supplemental.weekData) {
                cldr.supplemental.weekData = {
                    firstDay: entry.supplemental.weekData.firstDay,
                    weekendStart: entry.supplemental.weekData.weekendStart,
                    weekendEnd: entry.supplemental.weekData.weekendEnd
                };
            } else if (entry.supplemental.likelySubtags) {
                cldr.supplemental.likelySubtags = Object.assign(cldr.supplemental.likelySubtags, entry.supplemental.likelySubtags);
            } else if (entry.supplemental.currencyData) {
                const currencyData = cldr.supplemental.currencyData;
                currencyData.region = Object.assign(currencyData.region || {}, entry.supplemental.currencyData.region);
                currencyData.fractions = Object.assign(currencyData.fractions || {}, entry.supplemental.currencyData.fractions);
            }
        }
    }
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/set-data.js


function setData(data) {
    const locale = data.name;
    const info = cldr[locale] = cldr[locale] || {};
    const supplemental = cldr.supplemental = cldr.supplemental || {};

    if (data.likelySubtags) {
        supplemental.likelySubtags = Object.assign(supplemental.likelySubtags || {}, data.likelySubtags);
    }

    if (data.currencyData) {
        supplemental.currencyData = supplemental.currencyData || {};
        supplemental.currencyData.fractions = Object.assign(supplemental.currencyData.fractions || {}, data.currencyData);
    }

    const numbers = info.numbers;

    Object.assign(info, data);

    if (numbers && data.numbers) {
        info.numbers = Object.assign({}, numbers, data.numbers);
    }
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/date-field-name.js




function dateFieldName(options, locale = DEFAULT_LOCALE) {
    const info = localeInfo(locale);
    const dateFields = info.calendar.dateFields;
    if (!dateFields) {
        throw errors.NoDateFieldNames.error();
    }

    const fieldNameInfo = dateFields[options.type] || {};

    return fieldNameInfo[options.nameType] || fieldNameInfo['wide'];
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/date-format-names.js



function lowerArray(arr) {
    const result = [];
    for (let idx = 0; idx < arr.length; idx++) {
        result.push(arr[idx].toLowerCase());
    }
    return result;
}

function lowerObject(obj) {
    const result = {};
    for (let field in obj) {
        result[field] = obj[field].toLowerCase();
    }
    return result;
}

function cloneLower(obj) {
    let result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
    return result;
}

function dateFormatNames(locale, options) {
    const { type, nameType, standAlone, lower } = options;
    const info = getLocaleInfo(locale);
    const formatType = standAlone ? "stand-alone" : "format";
    const lowerNameType = (lower ? "lower-" : EMPTY) + nameType;
    const formatNames = info.calendar[type][formatType];
    let result = formatNames[lowerNameType];
    if (!result && lower) {
        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
    }
    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/parse-range-date.js
function parseRangeDate(value) {
    const parts = value.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    return new Date(year, month, day);
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/currency.js





 

const {
    NoCurrency,
    NoCurrencyDisplay,
    NoSupplementalCurrency,
    NoCurrencyRegion,
    NoValidCurrency
} = errors;

const DEFAULT_CURRENCY_FRACTIONS = 2;
const SYMBOL = "symbol";
const INVALID_CURRENCY_CODE = 'XXX';

const GLOBAL_CURRENCIES = {
    '001': 'USD', // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
    '150': 'EUR' // 150 territory for Europe

};

function getCurrencyInfo(locale, currency, throwIfNoValid) {
    const info = getLocaleInfo(locale);
    const currencies = info.numbers.currencies;
    if (!currencies) {
        if (throwIfNoValid) {
            throw NoCurrency.error();
        }

        return;
    }

    const currencyDisplayInfo = currencies[currency];

    if (!currencyDisplayInfo) {
        if (throwIfNoValid) {
            throw NoCurrencyDisplay.error();
        }

        return;
    }

    return currencyDisplayInfo;
}

function lengthComparer(a, b) {
    return b.length - a.length;
}

function regionCurrency(regionCurrencies) {
    let latestValidUntil, latestValidUntilRange;
    let latestStillValid, latestStillValidDate;

    for (let idx = 0; idx < regionCurrencies.length; idx++) {
        const currency = regionCurrencies[idx];
        const code = Object.keys(currency)[0];
        const info = currency[code];
        if (code !== INVALID_CURRENCY_CODE && info._tender !== 'false' && info._from) {
            if (!info._to) {
                const stillValidDate = parseRangeDate(info._from);
                if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
                    latestStillValid = code;
                    latestStillValidDate = stillValidDate;
                }
            } else if (!latestStillValid) {
                const validFrom = parseRangeDate(info._from);
                const validTo = parseRangeDate(info._to);
                if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
                    latestValidUntil = code;
                    latestValidUntilRange = {
                        from: validFrom,
                        to: validTo
                    };
                }
            }
        }
    }

    return latestStillValid || latestValidUntil;
}

function currencyDisplays(locale, currency, throwIfNoValid = true) {
    const currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
    if (!currencyInfo) {
        return;
    }

    if (!currencyInfo.displays) {
        const displays = [ currency ];
        for (let field in currencyInfo) {
            displays.push(currencyInfo[field]);
        }
        displays.sort(lengthComparer);
        currencyInfo.displays = displays;
    }

    return currencyInfo.displays;
}

function currencyDisplay(locale, options) {
    const { value, currency, currencyDisplay = SYMBOL } = options;

    if (currencyDisplay === "code") {
        return currency;
    }

    const currencyInfo = getCurrencyInfo(locale, currency, true);
    let result;

    if (currencyDisplay === SYMBOL) {
        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL] || currency;
    } else {
        if (typeof value === "undefined" || value !== 1) {
            result = currencyInfo["displayName-count-other"];
        } else {
            result = currencyInfo["displayName-count-one"];
        }
    }

    return result;
}

function currencyFractionOptions(code) {
    let minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    let maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    const fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function territoryCurrencyCode(territory, throwIfNoValid = true) {
    if (GLOBAL_CURRENCIES[territory]) {
        return GLOBAL_CURRENCIES[territory];
    }

    const currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        if (throwIfNoValid) {
            throw NoSupplementalCurrency.error();
        }

        return;
    }

    const regionCurrencies = currencyData.region[territory];

    if (!regionCurrencies) {
        if (throwIfNoValid) {
            throw NoCurrencyRegion.error(territory);
        }

        return;
    }

    const currencyCode = regionCurrency(regionCurrencies);

    return currencyCode;
}

function localeCurrency(locale, throwIfNoValid) {
    const info = getLocaleInfo(locale);
    const numbers = info.numbers;

    if (!numbers.localeCurrency) {
        const currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);

        if (!currency && throwIfNoValid) {
            throw NoValidCurrency.error(info.name);
        }

        numbers.localeCurrency = currency;
    }

    return numbers.localeCurrency;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/constants.js

const DAYS_OF_WEEK = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

const DEFAULT_TERRITORY = '001';

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/first-day.js






const { NoWeekData, NoFirstDay } = errors;

function firstDay(locale) {
    const info = getLocaleInfo(locale);

    if (!isNaN(info.firstDay)) {
        return info.firstDay;
    }

    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    const firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT_TERRITORY];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    info.firstDay = DAYS_OF_WEEK.indexOf(firstDay);

    return info.firstDay;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/weekend-range.js






const { NoWeekData: weekend_range_NoWeekData } = errors;

function weekendRange(locale) {
    const info = getLocaleInfo(locale);

    if (info.weekendRange) {
        return info.weekendRange;
    }

    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw weekend_range_NoWeekData.error();
    }

    const territory = localeTerritory(info);
    const start = weekData.weekendStart[territory] || weekData.weekendStart[DEFAULT_TERRITORY];
    const end = weekData.weekendEnd[territory] || weekData.weekendEnd[DEFAULT_TERRITORY];

    info.weekendRange = {
        start: DAYS_OF_WEEK.indexOf(start),
        end: DAYS_OF_WEEK.indexOf(end)
    };

    return info.weekendRange;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr/number-symbols.js


function numberSymbols(locale) {
    const info = getLocaleInfo(locale);

    return info.numbers.symbols;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/cldr.js











;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/is-negative-zero.js
function isNegativeZero(value) {
    return (1 / value === -Infinity);
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/format-currency-symbol.js


function formatCurrencySymbol(info, options = {}) {
    if (!options.currency) {
        options.currency = localeCurrency(info, true);
    }

    const display = currencyDisplay(info, options);

    return display;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/group-integer.js
function groupInteger(number, start, end, options, info) {
    const symbols = info.numbers.symbols;
    const decimalIndex = number.indexOf(symbols.decimal);
    const groupSizes = options.groupSize.slice();
    let groupSize = groupSizes.shift();

    let integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

    let integer = number.substring(start, integerEnd);
    let result = number;
    const integerLength = integer.length;

    if (integerLength >= groupSize) {
        let idx = integerLength;
        let parts = [];

        while (idx > -1) {
            let value = integer.substring(idx - groupSize, idx);
            if (value) {
                parts.push(value);
            }
            idx -= groupSize;
            let newGroupSize = groupSizes.shift();
            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

            if (groupSize === 0) {
                value = integer.substring(0, idx);
                if (value) {
                    parts.push(value);
                }
                break;
            }
        }

        integer = parts.reverse().join(symbols.group);
        result = number.substring(0, start) + integer + number.substring(integerEnd);
    }

    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/is-currency-style.js


function isCurrencyStyle(style) {
    return style === CURRENCY || style === ACCOUNTING;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/pad.js
function pad(number, digits = 2, right = false) {
    const count = digits - String(number).length;
    let result = number;

    if (count > 0) {
        const padString = new Array(count + 1).join("0");
        result = right ? number + padString : padString + number;
    }

    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/round.js
const MAX_PRECISION = 20;

function round(value, precision) {
    let result = value;
    let decimals = precision || 0;

    result = result.toString().split('e');
    result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));

    result = result.toString().split('e');
    result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));

    return result.toFixed(Math.min(decimals, MAX_PRECISION));
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/standard-number-format.js









const DEFAULT_DECIMAL_ROUNDING = 3;
const DEFAULT_PERCENT_ROUNDING = 0;

const trailingZeroRegex = /0+$/;

function fractionOptions(options) {
    let { minimumFractionDigits, maximumFractionDigits, style } = options;
    const isCurrency = isCurrencyStyle(style);
    let currencyFractions;
    if (isCurrency) {
        currencyFractions = currencyFractionOptions(options.currency);
    }

    if (minimumFractionDigits === undefined) {
        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
    }

    if (maximumFractionDigits === undefined) {
        if (style === PERCENT) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function applyPattern(value, pattern, symbol) {
    let result = EMPTY;
    for (let idx = 0, length = pattern.length; idx < length; idx++) {
        let ch = pattern.charAt(idx);

        if (ch === NUMBER_PLACEHOLDER) {
            result += value;
        } else if (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) {
            result += symbol;
        } else {
            result += ch;
        }
    }
    return result;
}

function currencyUnitPattern(info, value) {
    const currencyInfo = info.numbers.currency;
    let pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
    if (value < 0) {
        pattern = pattern.replace(NUMBER_PLACEHOLDER, `-${ NUMBER_PLACEHOLDER }`);
    }

    return pattern;
}


function standardNumberFormat(number, options, info) {
    const symbols = info.numbers.symbols;
    const { style } = options;
    const isCurrency = isCurrencyStyle(style);

    //return number in exponential format
    if (style === SCIENTIFIC) {
        let exponential = options.minimumFractionDigits !== undefined ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
        return exponential.replace(POINT, symbols.decimal);
    }

    let value = number;
    let symbol;

    if (isCurrency) {
        options.value = value;
        symbol = formatCurrencySymbol(info, options);
    }

    if (style === PERCENT) {
        value *= 100;
        symbol = symbols.percentSign;
    }

    const { minimumFractionDigits, maximumFractionDigits } = fractionOptions(options);

    value = round(value, maximumFractionDigits);

    const negative = value < 0;
    const negativeZero = isNegativeZero(number);

    const parts = value.split(POINT);

    let integer = parts[0];
    let fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

    //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    let formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;

    if (fraction) {
        formattedValue += symbols.decimal + fraction;
    }

    let pattern;

    if (isCurrency && options.currencyDisplay === "name") {
        pattern = currencyUnitPattern(info, number);
    } else {
        const patterns = options.patterns;
        pattern = (negative || negativeZero) ? patterns[1] || ("-" + patterns[0]) : patterns[0];
    }

    if (pattern === NUMBER_PLACEHOLDER && !negative) {
        return formattedValue;
    }

    const result = applyPattern(formattedValue, pattern, symbol);

    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/utils.js



const literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
const PLACEHOLDER = "__??__";

function setStyleOptions(formatOptions, info) {
    const format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_PLACEHOLDER) !== -1) {
        formatOptions.style = PERCENT;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
        formatOptions.style = CURRENCY;
        formatOptions.symbol = formatCurrencySymbol(info);
    }
}

function setFormatLiterals(formatOptions) {
    let format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        const literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            const quoteChar = match.charAt(0).replace("\\", EMPTY);
            const literal = match.slice(1).replace(quoteChar, EMPTY);

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function replaceLiterals(number, literals) {
    let result = number;
    if (literals) {
        const length = literals.length;
        for (let idx = 0; idx < length; idx++) {
            result = result.replace(PLACEHOLDER, literals[idx]);
        }
    }
    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/custom-number-format.js






const SHARP = "#";
const ZERO = "0";

const trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
const trailingPointRegExp = /\.$/;
const commaRegExp = /,/g;

function trimTrailingZeros(value, lastZero) {
    let trimRegex;

    if (lastZero === 0) {
        trimRegex = trailingZerosRegExp;
    } else {
        trimRegex = new RegExp(`(\\.[0-9]{${ lastZero }}[1-9]*)0+$`, 'g');
    }

    return value.replace(trimRegex, '$1').replace(trailingPointRegExp, EMPTY);
}

function roundNumber(formatOptions) {
    let { number, format } = formatOptions;
    let decimalIndex = format.indexOf(POINT);

    if (decimalIndex !== -1) {
        const zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        const sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        const hasZero = zeroIndex > -1;
        const hasSharp = sharpIndex > -1;
        let fraction = number.toString().split("e");

        if (fraction[1]) {
            fraction = round(number, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY;

        let precision = fraction.length;
        let trailingZeros = -1;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            precision = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            precision = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && precision > sharpIndex) {
                precision = sharpIndex;
            } else if (hasZero && precision < zeroIndex) {
                precision = zeroIndex;
            }

            trailingZeros = hasZero ? zeroIndex : 0;
        }

        if (precision > -1) {
            number = round(number, precision);
            if (trailingZeros > -1) {
                number = trimTrailingZeros(number, trailingZeros);
            }
        }
    } else {
        number = round(number);
    }

    if (formatOptions.negative && (number * -1) >= 0 && !formatOptions.negativeZero) {
        formatOptions.negative = false;
    }

    formatOptions.number = number;
    formatOptions.decimalIndex = decimalIndex;
}

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function setValueSpecificFormat(formatOptions) {
    let { number, format } = formatOptions;
    format = format.split(LIST_SEPARATOR);
    if ((formatOptions.negative || formatOptions.negativeZero) && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        const zeroFormat = format[2];
        format = zeroFormat || format[0];
        if (zeroFormat && isConstantFormat(zeroFormat)) {
            formatOptions.constant = zeroFormat;
        }
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(GROUP_SEPARATOR) > -1;
    if (formatOptions.hasGroup) {
        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY);
    }
}

function placeholderIndex(index1, index2, start) {
    let index;
    if (index1 === -1 && index2 !== -1) {
        index = index2;
    } else if (index1 !== -1 && index2 === -1) {
        index = index1;
    } else {
        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
    }
    return index;
}

function setPlaceholderIndices(formatOptions) {
    const format = formatOptions.format;
    let sharpIndex = format.indexOf(SHARP);
    let zeroIndex = format.indexOf(ZERO);

    let start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    let end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === format.length) {
        end = start;
    }

    formatOptions.start = start;
    formatOptions.end = end;
    formatOptions.lastZeroIndex = zeroIndex;
}

function replaceStyleSymbols(number, style, symbol) {
    let result = number;
    if (style === CURRENCY || style === PERCENT) {
        result = EMPTY;
        for (let idx = 0, length = number.length; idx < length; idx++) {
            let ch = number.charAt(idx);
            result += (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) ? symbol : ch;
        }
    }
    return result;
}

function replacePlaceHolders(formatOptions, info) {
    const { start, end, negative, negativeZero, format, decimalIndex, lastZeroIndex, hasNegativeFormat, hasGroup } = formatOptions;
    let number = formatOptions.number;
    const value = number.toString().split(POINT);
    const length = format.length;
    const integer = value[0];
    const fraction = value[1] || EMPTY;
    const integerLength = integer.length;
    let replacement = EMPTY;

    number = format.substring(0, start);

    if ((negative || negativeZero) && !hasNegativeFormat) {
        number += "-";
    }

    for (let idx = start; idx < length; idx++) {
        let ch = format.charAt(idx);

        if (decimalIndex === -1) {
            if (end - idx < integerLength) {

                number += integer;
                break;
            }
        } else {
            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
                replacement = EMPTY;
            }

            if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                number += integer;
                idx = decimalIndex;
            }

            if (decimalIndex === idx) {
                number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
                idx += end - decimalIndex + 1;
                continue;
            }
        }

        if (ch === ZERO) {
            number += ch;
            replacement = ch;
        } else if (ch === SHARP) {
            number += replacement;
        }
    }

    if (hasGroup) {
        number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
    }

    if (end >= start) {
        number += format.substring(end + 1);
    }

    return number;
}

function applyCustomFormat(formatOptions, info) {
    let number = formatOptions.number;
    if (formatOptions.start !== -1) {
        number = replacePlaceHolders(formatOptions, info);
        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
        number = replaceLiterals(number, formatOptions.literals);
    }

    return number;
}

function customNumberFormat(number, format, info) {
    const formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        negativeZero: isNegativeZero(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (formatOptions.constant) {
        return formatOptions.constant;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/format-options.js



const standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;

function standardFormatOptions(format) {
    const formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        const options = {
            style: DECIMAL
        };

        let style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = CURRENCY;
        } else if (style === "a") {
            options.style = ACCOUNTING;
        } else if (style === "p") {
            options.style = PERCENT;
        } else if (style === "e") {
            options.style = SCIENTIFIC;
        }

        if (formatAndPrecision[2]) {
            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
        }

        return options;
    }
}

function formatOptions(format) {
    let options;
    if (isString(format)) {
        options = standardFormatOptions(format);
    } else {
        options = format;
    }

    return options;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/format-number.js






function formatNumber(number, format = NUMBER_PLACEHOLDER, locale = DEFAULT_LOCALE) {
    if (number === undefined || number === null) {
        return EMPTY;
    }

    if (!isFinite(number)) {
        return String(number);
    }

    const info = localeInfo(locale);
    const options = formatOptions(format);

    let result;
    if (options) {
        const style = options.style || DECIMAL;
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], options), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/is-number.js
function isNumber(value) {
    return typeof value === "number";
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers/parse-number.js








const exponentRegExp = /[eE][-+]?[0-9]+/;
const nonBreakingSpaceRegExp = /\u00A0/g;

function cleanNegativePattern(number, patterns) {
    if (patterns.length > 1) {
        const parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
        if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
            return number.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
        }
    }
}

function cleanCurrencyNumber(value, info, format) {
    const options = formatOptions(format) || {};
    let isCurrency = isCurrencyStyle(options.style);
    let number = value;
    let negative;

    const currency = options.currency || localeCurrency(info, isCurrency);

    if (currency) {
        const displays = currencyDisplays(info, currency, isCurrency);
        if (displays) {
            for (let idx = 0; idx < displays.length; idx++) {
                let display = displays[idx];
                if (number.includes(display)) {
                    number = number.replace(display, EMPTY);
                    isCurrency = true;
                    break;
                }
            }
        }

        if (isCurrency) {
            const cleanNumber = cleanNegativePattern(number, info.numbers.currency.patterns) ||
                cleanNegativePattern(number, info.numbers.accounting.patterns);

            if (cleanNumber) {
                negative = true;
                number = cleanNumber;
            }

        }
    }

    return {
        number: number,
        negative: negative
    };
}

function cleanLiterals(number, formatOptions) {
    const literals = formatOptions.literals;
    let result = number;

    if (literals) {
        for (let idx = 0; idx < literals.length; idx++) {
            result = result.replace(literals[idx], EMPTY);
        }
    }

    return result;
}

function divideBy100(number) {
    const strNumber = String(number);
    const pointIndex = strNumber.indexOf(POINT);
    const zeroesCount = 2;
    let result = number / Math.pow(10, zeroesCount);

    if (pointIndex === -1 || String(result).length <= strNumber.length + zeroesCount) {
        return result;
    }

    const fractionDigits = strNumber.length - pointIndex + 1 + zeroesCount;
    return parseFloat(result.toFixed(fractionDigits));
}

function parseNumber(value, locale = DEFAULT_LOCALE, format = {}) {
    if (!value && value !== 0) {
        return null;
    }

    if (isNumber(value)) {
        return value;
    }

    const info = localeInfo(locale);
    const symbols = info.numbers.symbols;

    let number = value.toString();
    let formatOptions = format || {};
    let isPercent;

    if (isString(format)) {
        formatOptions = { format: format };
        setFormatLiterals(formatOptions);
        number = cleanLiterals(number, formatOptions);

        setStyleOptions(formatOptions, info);
    }

    if (formatOptions.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, EMPTY);
        isPercent = true;
    }

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, POINT));
        return isNaN(number) ? null : number;
    }

    const { negative: negativeCurrency, number: currencyNumber } = cleanCurrencyNumber(number, info, formatOptions);
    number = String(currencyNumber).trim();

    const negativeSignIndex = number.indexOf("-");
    if (negativeSignIndex > 0) {
        return null;
    }

    let isNegative = negativeSignIndex > -1;

    isNegative = negativeCurrency !== undefined ? negativeCurrency : isNegative;

    number = number.replace("-", EMPTY)
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY)
          .replace(symbols.decimal, POINT);

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (isNegative) {
        number *= -1;
    }

    if (number && isPercent) {
        number = divideBy100(number);
    }

    return number;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/numbers.js


;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/format-string.js
const format_string_formatRegExp = /\{(\d+)}/g;

function formatString(format) {
    const values = arguments;

    return format.replace(format_string_formatRegExp, (match, index) => {
        const value = values[parseInt(index, 10) + 1];

        return value;
    });
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/date-pattern.js




const REMOVAL_PENALTY = 120;
const ADDITION_PENALTY = 20;
const LENGHT_DELTA = [ 2, 1, 5, 3, 4 ];
const LONG_LESS_PENALTY_DELTA = -2;
const SHORT_LESS_PENALTY_DELTA = -1;
const SHORT_MORE_PENALTY_DELTA = 1;
const LONG_MORE_PENALTY_DELTA = 2;

const PENALTIES = {
    [LONG_LESS_PENALTY_DELTA.toString()]: 8,
    [SHORT_LESS_PENALTY_DELTA.toString()]: 6,
    [LONG_MORE_PENALTY_DELTA.toString()]: 6,
    [SHORT_MORE_PENALTY_DELTA.toString()]: 3
};

const VALUE_FORMAT_LENGTH = {
    numeric: 1,
    "2-digit": 2,
    short: 3,
    long: 4,
    narrow: 5
};

const TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;

function getHourSpecifier(options) {
    return options.hour12 ? "h" : "H";
}

const DATE_OPTIONS_MAP = [ {
    key: "era",
    specifier: "G"
}, {
    key: "year",
    specifier: "y"
}, {
    key: "month",
    specifier: "M"
}, {
    key: "day",
    specifier: "d"
}, {
    key: "weekday",
    specifier: "E"
}, {
    key: "hour",
    getSpecifier: getHourSpecifier
}, {
    key: "minute",
    specifier: "m"
}, {
    key: "second",
    specifier: "s"
}, {
    key: "timeZoneName",
    specifier: "z"
} ];

const STAND_ALONE_SPECIFIERS = {
    e: 'c',
    E: 'c',
    M: 'L',
    Q: 'q'
};

const specifiersRegex = {};
const resolvedFormats = {};

function getSpecifierRegex(specifier) {
    if (!specifiersRegex[specifier]) {
        specifiersRegex[specifier] = new RegExp(specifier + "+");
    }
    return specifiersRegex[specifier];
}

function skeletonSpecifiers(skeleton) {
    const result = [];
    let current = skeleton.charAt(0);
    let specifier = current;
    for (let idx = 1; idx < skeleton.length; idx++) {
        let character = skeleton.charAt(idx);
        if (character === specifier) {
            current += character;
        } else {
            result.push(current);
            current = specifier = character;
        }
    }

    result.push(current);

    return result;
}

function findBestMatch(specifiers, availableFormats) {
    const specifiersLength = specifiers.length;
    let maxScore = -Number.MAX_VALUE;
    let bestMatches, result;
    for (let format in availableFormats) {
        const matches = [];
        let currentFormat = format.replace("v", "z");
        let score = 0;
        for (let idx = 0; idx < specifiersLength; idx++) {
            const specifier = specifiers[idx];
            let specifierRegex = getSpecifierRegex(specifier[0]);
            let match = (specifierRegex.exec(currentFormat) || [])[0];

            if (!match) {
                score -= REMOVAL_PENALTY;
            } else {
                currentFormat = currentFormat.replace(match, EMPTY);
                if (match.length !== specifier.length) {
                    let delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
                    score -= PENALTIES[delta];
                }
            }

            matches.push(match);

            if (score < maxScore) {
                break;
            }
        }

        if (currentFormat.length) {
            score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
        }

        if (score > maxScore) {
            maxScore = score;
            bestMatches = matches;
            result = availableFormats[format];
        }
    }

    result = result.replace("v", "z");

    for (let idx = 0; idx < specifiersLength; idx++) {
        const bestMatch = bestMatches[idx];
        if (bestMatch && bestMatch !== specifiers[idx]) {
            const matchSpecifier = bestMatches[idx][0];
            result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx]);
            if (STAND_ALONE_SPECIFIERS[matchSpecifier]) {
                result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx]);
            }
        }
    }

    return result;
}

function cacheFormat(skeleton, format, locale) {
    if (!resolvedFormats[locale]) {
        resolvedFormats[locale] = {};
    }
    resolvedFormats[locale][skeleton] = format;
}


function skeletonFormat(skeleton, info) {
    const availableFormats = info.calendar.dateTimeFormats.availableFormats;
    if (availableFormats[skeleton]) {
        return availableFormats[skeleton];
    }
    if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
        return resolvedFormats[info.name][skeleton];
    }
    const timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
    let result;
    if (timeStartIndex > 0) {
        const dateSkeleton = skeleton.substr(0, timeStartIndex);
        const timeSkeleton = skeleton.substr(timeStartIndex);

        result = formatString(info.calendar.dateTimeFormats.short, //should be deterimed based on specifiers
            availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
            availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
    } else {
        result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
    }

    cacheFormat(skeleton, result, info.name);
    return result;
}

function skeletonFromOptions(options) {
    let result = [];
    for (let idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
        let option = DATE_OPTIONS_MAP[idx];
        let field = option.key;
        let value = options[field];
        if (value) {
            let spcifier = option.specifier || option.getSpecifier(options);
            result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
        }
    }

    return result.join(EMPTY);
}

function datePattern(format, info) {
    const calendar = info.calendar;
    let result;
    if (isString(format)) {
        if (calendar.patterns[format]) {
            result = calendar.patterns[format];
        } else {
            result = format;
        }
    } else if (format) {
        if (format.pattern) {
            return format.pattern;
        }

        let skeleton = format.skeleton;
        if (!skeleton) {
            if (format.datetime) {
                result = formatString(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
            } else if (format.date) {
                result = calendar.dateFormats[format.date];
            } else if (format.time) {
                result = calendar.timeFormats[format.time];
            } else {
                skeleton = skeletonFromOptions(format);
            }
        }

        if (skeleton) {
            result = skeletonFormat(skeleton, info);
        }
    }

    if (!result) {
        result = calendar.patterns.d;
    }

    return result;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/date-name-type.js
function dateNameType(formatLength) {
    let nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/format-names.js



function formatNames(locale, type, formatLength, standAlone, lower) {
    return dateFormatNames(locale, {
        type: type,
        nameType: dateNameType(formatLength),
        standAlone: standAlone,
        lower: lower
    });
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/common/is-date.js
function isFunction(fun) {
    return typeof(fun) === 'function';
}

function isDate(value) {
    return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/constants.js
const MONTH = 'month';
const HOUR = 'hour';
const ZONE = 'zone';
const WEEKDAY = 'weekday';
const QUARTER = 'quarter';

const DATE_FIELD_MAP = {
    'G': 'era',
    'y': 'year',
    'q': QUARTER,
    'Q': QUARTER,
    'M': MONTH,
    'L': MONTH,
    'd': 'day',
    'E': WEEKDAY,
    'c': WEEKDAY,
    'e': WEEKDAY,
    'h': HOUR,
    'H': HOUR,
    'k': HOUR,
    'K': HOUR,
    'm': 'minute',
    's': 'second',
    'S': 'millisecond',
    'a': 'dayperiod',
    'x': ZONE,
    'X': ZONE,
    'z': ZONE,
    'Z': ZONE
};

const dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;


;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/format-date.js









function formatDayOfWeekIndex(day, formatLength, localeInfo) {
    const firstDayIndex = firstDay(localeInfo);
    let dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return dayIndex + 1;
}

function formatMonth(month, formatLength, info, standAlone) {
    if (formatLength <= 2) {
        return pad(month + 1, formatLength);
    }
    return formatNames(info, "months", formatLength, standAlone)[month];
}

function formatQuarter(date, formatLength, info, standAlone) {
    const quarter = Math.floor(date.getMonth() / 3);
    if (formatLength < 3) {
        return quarter + 1;
    }

    return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}


function formatTimeZone(date, info, options) {
    const { shortHours, optionalMinutes, separator, localizedName, zZeroOffset } = options;
    const offset = date.getTimezoneOffset() / 60;
    if (offset === 0 && zZeroOffset) {
        return "Z";
    }
    const sign = offset <= 0 ? "+" : "-";
    const hoursMinutes = Math.abs(offset).toString().split(".");
    const minutes = hoursMinutes[1] || 0;
    let result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !optionalMinutes) {
        result += (separator ? ":" : EMPTY) + pad(minutes, 2);
    }

    if (localizedName) {
        const localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}

function formatDayOfWeek(date, formatLength, info, standAlone) {
    let result;
    if (formatLength < 3) {
        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
    } else {
        result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
    }
    return result;
}

const formatters = {};

formatters.d = function(date, formatLength) {
    return pad(date.getDate(), formatLength);
};

formatters.E = function(date, formatLength, info) {
    return formatNames(info, "days", formatLength)[date.getDay()];
};

formatters.M = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, false);
};

formatters.L = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, true);
};

formatters.y = function(date, formatLength) {
    let year = date.getFullYear();
    if (formatLength === 2) {
        year = year % 100;
    }
    return pad(year, formatLength);
};

formatters.h = function(date, formatLength) {
    const hours = date.getHours() % 12 || 12;
    return pad(hours, formatLength);
};

formatters.H = function(date, formatLength) {
    return pad(date.getHours(), formatLength);
};

formatters.k = function(date, formatLength) {
    return pad(date.getHours() || 24, formatLength);
};

formatters.K = function(date, formatLength) {
    return pad(date.getHours() % 12, formatLength);
};

formatters.m = function(date, formatLength) {
    return pad(date.getMinutes(), formatLength);
};

formatters.s = function(date, formatLength) {
    return pad(date.getSeconds(), formatLength);
};

formatters.S = function(date, formatLength) {
    const milliseconds = date.getMilliseconds();
    let result;
    if (milliseconds !== 0) {
        result = pad(String(milliseconds / 1000).split(".")[1].substr(0, formatLength), formatLength, true);
    } else {
        result = pad(EMPTY, formatLength);
    }
    return result;
};

formatters.a = function(date, formatLength, info) {
    return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};

formatters.z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        shortHours: formatLength < 4,
        optionalMinutes: formatLength < 4,
        separator: true,
        localizedName: true
    });
};

formatters.Z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        separator: formatLength > 3,
        localizedName: formatLength === 4,
        zZeroOffset: formatLength === 5
    });
};

formatters.x = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5
    });
};

formatters.X = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5,
        zZeroOffset: true
    });
};

formatters.G = function(date, formatLength, info) {
    let era = date.getFullYear() >= 0 ? 1 : 0;
    return formatNames(info, "eras", formatLength)[era];
};

formatters.e = formatDayOfWeek;

formatters.c = function(date, formatLength, info) {
    return formatDayOfWeek(date, formatLength, info, true);
};

formatters.q = function(date, formatLength, info) {
    return formatQuarter(date, formatLength, info, true);
};

formatters.Q = formatQuarter;

function formatDate(date, format, locale = DEFAULT_LOCALE) {
    if (!isDate(date)) {
        if (date === undefined || date === null) {
            return EMPTY;
        }
        return date;
    }

    const info = localeInfo(locale);
    const pattern = datePattern(format, info);

    return pattern.replace(dateFormatRegExp, function(match) {
        let formatLength = match.length;
        let result;

        if (match.includes("'") || match.includes("\"")) {
            result = match.slice(1, formatLength - 1);
        } else {
            result = formatters[match[0]](date, formatLength, info);
        }

        return result;
    });
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/time-utils.js
function convertTimeZone(date, fromOffset, toOffset) {
    const fromLocalOffset = date.getTimezoneOffset();

    const offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

    const toLocalOffset = offsetDate.getTimezoneOffset();

    return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
}

function adjustDST(date, hours) {
    if (!hours && date.getHours() === 23) {
        date.setHours(date.getHours() + 2);
    }
}
;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/parse-date.js









const timeZoneOffsetRegExp = /([+|-]\d{1,2})(:?)(\d{2})?/;
const dateRegExp = /^\/Date\((.*?)\)\/$/;
const offsetRegExp = /[+-]\d*/;
const numberRegExp = {
    2: /^\d{1,2}/,
    3: /^\d{1,3}/,
    4: /^\d{4}/
};
const numberRegex = /\d+/;
const parse_date_PLACEHOLDER = "{0}";

const leadingSpacesRegex = /^ */;
const trailingSpacesRegex = / *$/;

const standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "E MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSXXX",
    "yyyy-MM-ddTHH:mm:ss.SSXXX",
    "yyyy-MM-ddTHH:mm:ssXXX",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
    "yyyy-MM-ddTHH:mm:ss.SSS",
    "yyyy-MM-ddTHH:mmXXX",
    "yyyy-MM-ddTHH:mmX",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];
const FORMATS_SEQUENCE = [ "G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t" ];
const TWO_DIGIT_YEAR_MAX = 2029;

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function lookAhead(match, state) {
    let { format, idx } = state;
    let i = 0;
    while (format[idx] === match) {
        i++;
        idx++;
    }
    if (i > 0) {
        idx -= 1;
    }
    state.idx = idx;
    return i;
}

function getNumber(size, state) {
    let regex = size ? (numberRegExp[size] || new RegExp('^\\d{1,' + size + '}')) : numberRegex,
        match = state.value.substr(state.valueIdx, size).match(regex);

    if (match) {
        match = match[0];
        state.valueIdx += match.length;
        return parseInt(match, 10);
    }
    return null;
}

function getIndexByName(names, state, lower) {
    let i = 0,
        length = names.length,
        name, nameLength,
        matchLength = 0,
        matchIdx = 0,
        subValue;

    for (; i < length; i++) {
        name = names[i];
        nameLength = name.length;
        subValue = state.value.substr(state.valueIdx, nameLength);

        if (lower) {
            subValue = subValue.toLowerCase();
        }

        if (subValue === name && nameLength > matchLength) {
            matchLength = nameLength;
            matchIdx = i;
        }
    }

    if (matchLength) {
        state.valueIdx += matchLength;
        return matchIdx + 1;
    }

    return null;
}

function checkLiteral(state) {
    let result = false;
    const valueChar = state.value.charAt(state.valueIdx);
    const formatChar = state.format[state.idx];
    const exactMatch = valueChar === formatChar;
    const whitespaceMatch = /\s/.test(formatChar) && /\s/.test(valueChar);
    if (exactMatch || whitespaceMatch) {
        state.valueIdx++;
        result = true;
    }
    return result;
}

function calendarGmtFormats(calendar) {
    const { gmtFormat, gmtZeroFormat } = calendar;
    if (!gmtFormat) {
        throw errors.NoGMTInfo.error();
    }

    return [ gmtFormat.replace(parse_date_PLACEHOLDER, EMPTY).toLowerCase(), gmtZeroFormat.replace(parse_date_PLACEHOLDER, EMPTY).toLowerCase() ];
}

function parseTimeZoneOffset(state, info, options) {
    const { shortHours, noSeparator, optionalMinutes, localizedName, zLiteral } = options;
    state.UTC = true;

    if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
        state.valueIdx++;
        return false;
    }

    if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
        return true;
    }

    const matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
    if (!matches) {
        return !localizedName;
    }

    const hoursMatch = matches[1];
    const minutesMatch = matches[3];
    const hoursOffset = parseInt(hoursMatch, 10);
    const separator = matches[2];
    let minutesOffset = parseInt(minutesMatch, 10);

    if (isNaN(hoursOffset) || (!shortHours && hoursMatch.length !== 3) || (!optionalMinutes && isNaN(minutesOffset)) || (noSeparator && separator)) {
        return true;
    }

    if (isNaN(minutesOffset)) {
        minutesOffset = null;
    }

    if (outOfRange(hoursOffset, -12, 13) || (minutesOffset && outOfRange(minutesOffset, 0, 59))) {
        return true;
    }

    state.valueIdx += matches[0].length;
    state.hoursOffset = hoursOffset;
    state.minutesOffset = minutesOffset;
}

function parseMonth(ch, state, info) {
    const count = lookAhead(ch, state);
    const names = formatNames(info, "months", count, ch === "L", true);

    const month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);

    if (month === null || outOfRange(month, 1, 12)) {
        return true;
    }
    state.month = month - 1;
}

function parseDayOfWeek(ch, state, info) {
    const count = lookAhead(ch, state);
    const names = formatNames(info, "days", count, ch === "c", true);
    let dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
    if ((!dayOfWeek && dayOfWeek !== 0) || outOfRange(dayOfWeek, 1, 7)) {
        return true;
    }
}

const parsers = {};

parsers.d = function(state) {
    lookAhead("d", state);
    const day = getNumber(2, state);

    if (day === null || outOfRange(day, 1, 31)) {
        return true;
    }

    if (state.day === null) {
        state.day = day;
    }
};

parsers.E = function(state, info) {
    const count = lookAhead("E", state);
    //validate if it matches the day?
    let dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
    if (dayOfWeek === null) {
        return true;
    }
};

parsers.M = function(state, info) {
    return parseMonth("M", state, info);
};

parsers.L = function(state, info) {
    return parseMonth("L", state, info);
};

parsers.y = function(state) {
    const count = lookAhead("y", state);
    let year = getNumber(count === 1 ? undefined : count, state);

    if (year === null) {
        return true;
    }

    if (count === 2) {
        const currentYear = new Date().getFullYear();
        year = (currentYear - currentYear % 100) + year;
        if (year > TWO_DIGIT_YEAR_MAX) {
            year -= 100;
        }
    }

    state.year = year;
};

parsers.h = function(state) {
    lookAhead("h", state);

    let hours = getNumber(2, state);
    if (hours === 12) {
        hours = 0;
    }

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.K = function(state) {
    lookAhead("K", state);

    let hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.a = function(state, info) {
    const count = lookAhead("a", state);
    let periodFormats = formatNames(info, "dayPeriods", count, false, true);

    const pmHour = getIndexByName([ periodFormats.pm ], state, true);
    if (!pmHour && !getIndexByName([ periodFormats.am ], state, true)) {
        return true;
    }

    state.pmHour = pmHour;
};

parsers.H = function(state) {
    lookAhead("H", state);
    const hours = getNumber(2, state);
    if (hours === null || outOfRange(hours, 0, 23)) {
        return true;
    }
    state.hours = hours;
};

parsers.k = function(state) {
    lookAhead("k", state);

    let hours = getNumber(2, state);

    if (hours === null || outOfRange(hours, 1, 24)) {
        return true;
    }

    state.hours = hours === 24 ? 0 : hours;
};

parsers.m = function(state) {
    lookAhead("m", state);
    const minutes = getNumber(2, state);

    if (minutes === null || outOfRange(minutes, 0, 59)) {
        return true;
    }

    state.minutes = minutes;
};

parsers.s = function(state) {
    lookAhead("s", state);
    const seconds = getNumber(2, state);
    if (seconds === null || outOfRange(seconds, 0, 59)) {
        return true;
    }
    state.seconds = seconds;
};

parsers.S = function(state) {
    const count = lookAhead("S", state);
    const match = state.value.substr(state.valueIdx, count);
    let milliseconds = null;

    if (!isNaN(parseInt(match, 10))) {
        milliseconds = parseFloat("0." + match, 10);
        milliseconds = round(milliseconds, 3);
        milliseconds *= 1000;
        state.valueIdx += count;
    }

    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
        return true;
    }

    state.milliseconds = milliseconds;
};

parsers.z = function(state, info) {
    const count = lookAhead("z", state);

    const shortFormat = count < 4;

    const invalid = parseTimeZoneOffset(state, info, {
        shortHours: shortFormat,
        optionalMinutes: shortFormat,
        localizedName: true
    });

    if (invalid) {
        return invalid;
    }
};

parsers.Z = function(state, info) {
    const count = lookAhead("Z", state);

    const invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count < 4,
        zLiteral: count === 5,
        localizedName: count === 4
    });

    if (invalid) {
        return invalid;
    }
};

parsers.x = function(state, info) {
    const count = lookAhead("x", state);

    const invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1
    });
    if (invalid) {
        return invalid;
    }
};

parsers.X = function(state, info) {
    const count = lookAhead("X", state);

    const invalid = parseTimeZoneOffset(state, info, {
        noSeparator: count !== 3 && count !== 5,
        optionalMinutes: count === 1,
        zLiteral: true
    });
    if (invalid) {
        return invalid;
    }
};

parsers.G = function(state, info) {
    const count = lookAhead("G", state);
    const eras = formatNames(info, "eras", count, false, true);
    const era = getIndexByName([ eras[0], eras[1] ], state, true);

    if (era === null) {
        return true;
    }
};

parsers.e = function(state, info) {
    return parseDayOfWeek("e", state, info);
};

parsers.c = function(state, info) {
    return parseDayOfWeek("c", state, info);
};

function createDate(state) {
    let { year, month, day, hours, minutes, seconds, milliseconds, pmHour, UTC, hoursOffset, minutesOffset } = state;
    const hasTime = hours !== null || minutes !== null || seconds || null;
    const date = new Date();
    let result;

    if (year === null && month === null && day === null && hasTime) {
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = date.getFullYear();
        }

        if (day === null) {
            day = 1;
        }
    }

    if (pmHour && hours < 12) {
        hours += 12;
    }

    if (UTC) {
        if (hoursOffset) {
            hours += -hoursOffset;
        }

        if (minutesOffset) {
            minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
        }

        result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
    } else {
        result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        adjustDST(result, hours);
    }

    if (year < 100) {
        result.setFullYear(year);
    }

    if (result.getDate() !== day && UTC === undefined) {
        return null;
    }

    return result;
}

function addFormatSpaces(value, format) {
    const leadingSpaces = leadingSpacesRegex.exec(format)[0];
    const trailingSpaces = trailingSpacesRegex.exec(format)[0];

    return `${ leadingSpaces }${ value }${ trailingSpaces }`;
}

function parseExact(value, format, info) {
    const pattern = datePattern(format, info).split(EMPTY);

    const state = {
        format: pattern,
        idx: 0,
        value: addFormatSpaces(value, format),
        valueIdx: 0,
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
        milliseconds: null
    };

    const length = pattern.length;
    let literal = false;

    for (; state.idx < length; state.idx++) {
        let ch = pattern[state.idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            }

            checkLiteral(state);
        } else {
            if (parsers[ch]) {
                let invalid = parsers[ch](state, info);
                if (invalid) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral(state);
            } else if (!checkLiteral(state)) {
                return null;
            }
        }
    }

    if (state.valueIdx < value.length) {
        return null;
    }

    return createDate(state) || null;
}

function parseMicrosoftDateOffset(offset) {
    const sign = offset.substr(0, 1) === "-" ? -1 : 1;

    let result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

function parseMicrosoftDateFormat(value) {
    if (value && value.indexOf("/D") === 0) {
        let date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            let tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }
}

function defaultFormats(calendar) {
    const formats = [];
    const patterns = calendar.patterns;
    const length = FORMATS_SEQUENCE.length;

    for (let idx = 0; idx < length; idx++) {
        formats.push(patterns[FORMATS_SEQUENCE[idx]]);
    }

    return formats.concat(standardDateFormats);
}

function parseDate(value, formats, locale = DEFAULT_LOCALE) {
    if (!value) {
        return null;
    }

    if (isDate(value)) {
        return value;
    }

    let parseValue = String(value).trim();
    let date = parseMicrosoftDateFormat(parseValue);
    if (date) {
        return date;
    }

    const info = localeInfo(locale);
    let parseFormats = formats || defaultFormats(info.calendar);
    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];

    const length = parseFormats.length;

    for (let idx = 0; idx < length; idx++) {
        date = parseExact(parseValue, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates/split-date-format.js







const NAME_TYPES = {
    month: {
        type: 'months',
        minLength: 3,
        standAlone: 'L'
    },

    quarter: {
        type: 'quarters',
        minLength: 3,
        standAlone: 'q'
    },

    weekday: {
        type: 'days',
        minLength: {
            E: 0,
            c: 3,
            e: 3
        },
        standAlone: 'c'
    },

    dayperiod: {
        type: 'dayPeriods',
        minLength: 0
    },

    era: {
        type: 'eras',
        minLength: 0
    }
};

const LITERAL = 'literal';

function addLiteral(parts, value) {
    const lastPart = parts[parts.length - 1];
    if (lastPart && lastPart.type === LITERAL) {
        lastPart.pattern += value;
    } else {
        parts.push({
            type: LITERAL,
            pattern: value
        });
    }
}

function isHour12(pattern) {
    return pattern === 'h' || pattern === 'K';
}

function splitDateFormat(format, locale = DEFAULT_LOCALE) {
    const info = localeInfo(locale);
    const pattern = datePattern(format, info);
    const parts = [];
    let lastIndex = dateFormatRegExp.lastIndex = 0;
    let match = dateFormatRegExp.exec(pattern);

    while (match) {
        let value = match[0];

        if (lastIndex < match.index) {
            addLiteral(parts, pattern.substring(lastIndex, match.index));
        }

        if (value.startsWith('"') || value.startsWith("'")) {
            addLiteral(parts, value);
        } else {
            const specifier = value[0];
            const type = DATE_FIELD_MAP[specifier];
            const part = {
                type: type,
                pattern: value
            };

            if (type === 'hour') {
                part.hour12 = isHour12(value);
            }

            const names = NAME_TYPES[type];

            if (names) {
                const minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
                const patternLength = value.length;

                if (patternLength >= minLength) {
                    part.names = {
                        type: names.type,
                        nameType: dateNameType(patternLength),
                        standAlone: names.standAlone === specifier
                    };
                }
            }

            parts.push(part);
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    if (lastIndex < pattern.length) {
        addLiteral(parts, pattern.substring(lastIndex));
    }

    return parts;
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/dates.js




;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/format.js






const format_formatRegExp = /\{(\d+)(:[^}]+)?\}/g;

function format_toString(value, format, locale) {
    if (format) {
        if (isDate(value)) {
            return formatDate(value, format, locale);
        } else if (isNumber(value)) {
            return formatNumber(value, format, locale);
        }
    }

    return value !== undefined && value !== null ? value : EMPTY;
}

function format(format, values, locale) {
    return format.replace(format_formatRegExp, function(match, index, placeholderFormat) {
        let value = values[parseInt(index, 10)];

        return format_toString(value, placeholderFormat ? placeholderFormat.substring(1) : EMPTY, locale);
    });
}

;// ../node_modules/.pnpm/@progress+kendo-intl@3.2.1/node_modules/@progress/kendo-intl/dist/es/main.js







/***/ }

}]);