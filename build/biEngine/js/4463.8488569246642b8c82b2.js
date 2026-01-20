"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[4463],{

/***/ 44463
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Checkbox: () => (/* reexport */ Checkbox),
  CheckboxPropsContext: () => (/* reexport */ CheckboxPropsContext),
  ColorGradient: () => (/* reexport */ ColorGradient),
  ColorGradientPropsContext: () => (/* reexport */ ColorGradientPropsContext),
  ColorGradientWithoutContext: () => (/* reexport */ ColorGradientWithoutContext),
  ColorInput: () => (/* reexport */ colors_ColorInput),
  ColorPalette: () => (/* reexport */ ColorPalette),
  ColorPalettePropsContext: () => (/* reexport */ ColorPalettePropsContext),
  ColorPaletteWithoutContext: () => (/* reexport */ ColorPaletteWithoutContext),
  ColorPicker: () => (/* reexport */ ColorPicker),
  ColorPickerPropsContext: () => (/* reexport */ ColorPickerPropsContext),
  FlatColorPicker: () => (/* reexport */ FlatColorPicker),
  Input: () => (/* reexport */ Input),
  InputClearValue: () => (/* reexport */ InputClearValue),
  InputPrefix: () => (/* reexport */ InputPrefix),
  InputPropsContext: () => (/* reexport */ InputPropsContext),
  InputSeparator: () => (/* reexport */ InputSeparator),
  InputSuffix: () => (/* reexport */ InputSuffix),
  InputValidationIcon: () => (/* reexport */ InputValidationIcon),
  InputWithoutContext: () => (/* reexport */ InputWithoutContext),
  MaskedTextBox: () => (/* reexport */ MaskedTextBox),
  MaskedTextBoxPropsContext: () => (/* reexport */ MaskedTextBoxPropsContext),
  MaskedTextBoxWithoutContext: () => (/* reexport */ MaskedTextBoxWithoutContext),
  NumericTextBox: () => (/* reexport */ NumericTextBox),
  NumericTextBoxPropsContext: () => (/* reexport */ NumericTextBoxPropsContext),
  PALETTEPRESETS: () => (/* reexport */ PALETTEPRESETS),
  RANGE_ACTION: () => (/* reexport */ RANGE_ACTION),
  RATING_ACTION: () => (/* reexport */ RATING_ACTION),
  RadioButton: () => (/* reexport */ RadioButton),
  RadioButtonPropsContext: () => (/* reexport */ RadioButtonPropsContext),
  RadioGroup: () => (/* reexport */ RadioGroup),
  RadioGroupPropsContext: () => (/* reexport */ RadioGroupPropsContext),
  RangeSlider: () => (/* reexport */ RangeSlider),
  RangeSliderPropsContext: () => (/* reexport */ RangeSliderPropsContext),
  Rating: () => (/* reexport */ Rating),
  RatingItem: () => (/* reexport */ RatingItem),
  RatingPropsContext: () => (/* reexport */ RatingPropsContext),
  SLIDER_LABEL_ATTRIBUTE: () => (/* reexport */ SLIDER_LABEL_ATTRIBUTE),
  Signature: () => (/* reexport */ Signature),
  SignaturePropsContext: () => (/* reexport */ SignaturePropsContext),
  Slider: () => (/* reexport */ Slider),
  SliderLabel: () => (/* reexport */ SliderLabel),
  SliderPropsContext: () => (/* reexport */ SliderPropsContext),
  SliderWithoutContext: () => (/* reexport */ SliderWithoutContext),
  Switch: () => (/* reexport */ Switch),
  SwitchPropsContext: () => (/* reexport */ SwitchPropsContext),
  SwitchWithoutContext: () => (/* reexport */ SwitchWithoutContext),
  TextArea: () => (/* reexport */ TextArea),
  TextAreaPropsContext: () => (/* reexport */ TextAreaPropsContext),
  TextBox: () => (/* reexport */ TextBox),
  inputsMessages: () => (/* reexport */ messages),
  isCorrectValue: () => (/* reexport */ isCorrectValue),
  isHalf: () => (/* reexport */ isHalf),
  isSelected: () => (/* reexport */ isSelected),
  maskingChanged: () => (/* reexport */ maskingChanged),
  numericDecreaseValue: () => (/* reexport */ numericDecreaseValue),
  numericIncreaseValue: () => (/* reexport */ numericIncreaseValue),
  rangeReducer: () => (/* reexport */ rangeReducer),
  ratingReducer: () => (/* reexport */ ratingReducer),
  sanitizeNumber: () => (/* reexport */ sanitizeNumber),
  toRound: () => (/* reexport */ toRound)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.2.1_@progress+kendo-licensing@1_f4601061072e7c3278720aa16dc3d5d5/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(31650);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(76034);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-labels@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_29e0a2e66eeb7d5f816044963a1e5624/node_modules/@progress/kendo-react-labels/dist/es/main.js)
var es_main_js_ = __webpack_require__(45151);
;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-inputs',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695801559,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/messages/index.js
var _a;
/**
 * @hidden
 */
var numericIncreaseValue = 'numerictextbox.increment';
/**
 * @hidden
 */
var numericDecreaseValue = 'numerictextbox.decrement';
/**
 * @hidden
 */
var sliderIncreaseValue = 'slider.increment';
/**
 * @hidden
 */
var sliderDecreaseValue = 'slider.decrement';
/**
 * @hidden
 */
var sliderDragTitle = 'slider.dragTitle';
/**
 * @hidden
 */
var colorGradientR = 'colorGradient.r';
/**
 * @hidden
 */
var colorGradientG = 'colorGradient.g';
/**
 * @hidden
 */
var colorGradientB = 'colorGradient.b';
/**
 * @hidden
 */
var colorGradientA = 'colorGradient.a';
/**
 * @hidden
 */
var colorGradientHex = 'colorGradient.hex';
/**
 * @hidden
 */
var colorGradientContrastRatio = 'colorGradient.contrastRatio';
/**
 * @hidden
 */
var colorGradientAALevel = 'colorGradient.colorGradientAALevel';
/**
 * @hidden
 */
var colorGradientAAALevel = 'colorGradient.colorGradientAAALevel';
/**
 * @hidden
 */
var colorGradientPass = 'colorGradient.colorGradientPass';
/**
 * @hidden
 */
var colorGradientFail = 'colorGradient.colorGradientFail';
/**
 * @hidden
 */
var colorGradientHueSliderLabel = 'colorGradient.hueSliderLabel';
/**
 * @hidden
 */
var colorGradientAlphaSliderLabel = 'colorGradient.alphaSliderLabel';
/**
 * @hidden
 */
var colorGradientToggleInputsButton = 'colorGradient.toggleInputsButton';
/**
 * @hidden
 */
var flatColorPickerCancelBtn = 'flatColorPicker.cancelBtn';
/**
 * @hidden
 */
var flatColorPickerApplyBtn = 'flatColorPicker.applyBtn';
/**
 * @hidden
 */
var flatColorPickerColorGradientBtn = 'flatColorPicker.colorGradientBtn';
/**
 * @hidden
 */
var flatColorPickerColorPaletteBtn = 'flatColorPicker.colorPaletteBtn';
/**
 * @hidden
 */
var flatColorPickerClearBtn = 'flatColorPicker.clearBtn';
/**
 * @hidden
 */
var checkboxValidation = 'checkbox.validation';
/**
 * @hidden
 */
var checkboxOptionalText = 'checkbox.optionalText';
/**
 * @hidden
 */
var radioButtonValidation = 'radioButton.validation';
/**
 * @hidden
 */
var switchValidation = 'switch.validation';
/**
 * @hidden
 */
var colorPickerDropdownButtonAriaLabel = 'colorPicker.dropdownButtonAriaLabel';
/**
 * @hidden
 */
var ratingAriaLabel = 'rating.ariaLabel';
/**
 * @hidden
 */
var signatureClear = 'signature.clear';
/**
 * @hidden
 */
var signatureMaximize = 'signature.maximize';
/**
 * @hidden
 */
var signatureMinimize = 'signature.minimize';
/**
 * @hidden
 */
var messages = (_a = {},
    _a[numericIncreaseValue] = 'Increase value',
    _a[numericDecreaseValue] = 'Decrease value',
    _a[sliderIncreaseValue] = 'Increase',
    _a[sliderDecreaseValue] = 'Decrease',
    _a[sliderDragTitle] = 'Drag',
    _a[colorGradientR] = 'r',
    _a[colorGradientG] = 'g',
    _a[colorGradientB] = 'b',
    _a[colorGradientA] = 'a',
    _a[colorGradientHex] = 'hex',
    _a[colorGradientContrastRatio] = 'Contrast ratio',
    _a[colorGradientAALevel] = 'AA',
    _a[colorGradientAAALevel] = 'AAA',
    _a[colorGradientPass] = 'Pass',
    _a[colorGradientFail] = 'Fail',
    _a[colorGradientHueSliderLabel] = 'Hue slider',
    _a[colorGradientAlphaSliderLabel] = 'Alpha slider',
    _a[colorGradientToggleInputsButton] = 'Toggle colorgradient inputs',
    _a[flatColorPickerCancelBtn] = 'Cancel',
    _a[flatColorPickerApplyBtn] = 'Apply',
    _a[flatColorPickerColorGradientBtn] = 'Color Gradient view',
    _a[flatColorPickerColorPaletteBtn] = 'Color Palette view',
    _a[flatColorPickerClearBtn] = 'Clear color value',
    _a[checkboxValidation] = 'Please check this box if you want to proceed!',
    _a[checkboxOptionalText] = '(Optional)',
    _a[radioButtonValidation] = 'Please select option if you want to proceed!',
    _a[switchValidation] = 'Please turn on if you want to proceed!',
    _a[colorPickerDropdownButtonAriaLabel] = 'Select',
    _a[ratingAriaLabel] = 'Rating',
    _a[signatureClear] = 'Clear',
    _a[signatureMaximize] = 'Maximize',
    _a[signatureMinimize] = 'Minimize',
    _a);

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/utils/index.js
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
var DEFAULT_NUMBER = 1111111.1111111;
var MAX_DECIMAL = 0.31111111111111117;
var MIN_DECIMAL = 1;
var ONE_NUMBER = 1;
var ZERO_NUMBER = 0;
var DIGITS_REGEX = /\d/;
var MAX_PRECISION = 15;
/**
 * @hidden
 */
var getInitialState = function () { return ({
    eventValue: null,
    prevLooseValue: '',
    currentLooseValue: '',
    focused: false,
    selectionStart: undefined,
    selectionEnd: undefined,
    decimalSelect: false,
    valueIsCorrected: false,
    valueIsOutOfRange: false
}); };
/**
 * @hidden
 */
var getStateOrPropsValue = function (value, stateValue) {
    return value !== undefined ? value : stateValue;
};
/**
 * @hidden
 */
var formatValue = function (value, format, intlService) {
    if (value === null && value === undefined) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    return intlService.formatNumber(value, format);
};
/**
 * @hidden
 */
var fractionLength = function (value) {
    return (String(value).split('.')[1] || '').length;
};
/**
 * @hidden
 */
var maxFractionLength = function (value1, value2) {
    return Math.max(fractionLength(value1), fractionLength(value2));
};
/**
 * @hidden
 */
var limitPrecision = function (precision) { return Math.min(precision, MAX_PRECISION); };
/**
 * @hidden
 */
var toFixedPrecision = function (value, precision) {
    var maxPrecision = limitPrecision(precision);
    return parseFloat(value.toFixed(maxPrecision));
};
/**
 * @hidden
 */
var increaseValue = function (value, newState, step, min, max, format, intlService) {
    var maxPrecision = maxFractionLength(value || 0, step || 0);
    var increasedValue = rangeValue(toFixedPrecision((value || 0) + (step || 0), maxPrecision), min, max);
    newState.eventValue = increasedValue;
    newState.currentLooseValue = formatValue(increasedValue, format, intlService);
    newState.selectionStart = newState.selectionEnd = getLastNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
};
/**
 * @hidden
 */
var decreaseValue = function (value, newState, step, min, max, format, intlService) {
    var maxPrecision = maxFractionLength(value || 0, step || 0);
    var decreasedValue = rangeValue(toFixedPrecision((value || 0) - (step || 0), maxPrecision), min, max);
    newState.eventValue = decreasedValue;
    newState.currentLooseValue = formatValue(decreasedValue, format, intlService);
    newState.selectionStart = newState.selectionEnd = getLastNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
};
/**
 * @hidden
 */
var rangeValue = function (value, min, max) {
    if (value == null) {
        return value;
    }
    if (!(value > 1 || value < 1 || value === 1)) {
        // null, undefined or NaN
        return null;
    }
    if (max !== undefined && min !== undefined && max < min) {
        return null;
    }
    if (max !== undefined && value > max) {
        value = max;
    }
    if (min !== undefined && value < min) {
        value = min;
    }
    return value;
};
/**
 * @hidden
 */
var getMaxCursorPosition = function (nextValue, formatInfo) {
    var formatSuffixIndex = formatInfo.findIndex(function (_a) {
        var _ = _a[0], currSuffix = _a[1];
        return Boolean(currSuffix) && nextValue.indexOf(currSuffix) === nextValue.length - currSuffix.length;
    });
    if (formatSuffixIndex === -1) {
        return -1;
    }
    var suffix = formatInfo[formatSuffixIndex][1];
    return nextValue.length - suffix.length;
};
/**
 * @hidden
 */
var getMinCursorPosition = function (nextValue, formatInfo) {
    var formatPrefixIndex = formatInfo.findIndex(function (_a) {
        var currPrefix = _a[0], _ = _a[1];
        return Boolean(currPrefix) && nextValue.indexOf(currPrefix) === 0;
    });
    if (formatPrefixIndex === -1) {
        return -1;
    }
    var prefix = formatInfo[formatPrefixIndex][0];
    return prefix.length;
};
/**
 * @hidden
 */
var rangeSelection = function (nextLooseValue, formatInfo, newState) {
    var maxPosition = getMaxCursorPosition(nextLooseValue, formatInfo);
    if (maxPosition !== -1 && newState.selectionStart > maxPosition) {
        newState.selectionStart = newState.selectionEnd = maxPosition;
        return;
    }
    if (newState.selectionStart > nextLooseValue.length) {
        newState.selectionStart = newState.selectionEnd = nextLooseValue.length;
    }
    var minPosition = getMinCursorPosition(nextLooseValue, formatInfo);
    if (minPosition !== -1 && newState.selectionStart < minPosition) {
        newState.selectionStart = newState.selectionEnd = minPosition;
    }
    if (newState.selectionStart === -1) {
        newState.selectionStart = newState.selectionEnd = 0;
    }
};
/**
 * @hidden
 */
var setSelection = function (newState, newIndex, nextLooseValue, formatInfo) {
    newState.selectionStart = newState.selectionEnd = newIndex;
    rangeSelection(nextLooseValue, formatInfo, newState);
};
/**
 * @hidden
 */
var setInvalid = function (newState, format, formatInfo, intlService) {
    newState.eventValue = intlService.parseNumber(newState.prevLooseValue, format);
    newState.currentLooseValue = newState.prevLooseValue;
    newState.valueIsCorrected = true;
    setSelection(newState, newState.selectionStart, newState.currentLooseValue, formatInfo);
};
/**
 * @hidden
 */
var isMinusSymbolAdded = function (newState, symbols) {
    var newText = String(newState.currentLooseValue);
    var oldText = String(newState.prevLooseValue);
    return (newText.split(symbols.minusSign).length !== oldText.split(symbols.minusSign).length &&
        newText.length === oldText.length + symbols.minusSign.length);
};
/**
 * @hidden
 */
var isMinusSymbolRemoved = function (newState, symbols) {
    var newText = String(newState.currentLooseValue);
    var oldText = String(newState.prevLooseValue);
    return (newText.indexOf(symbols.minusSign) === -1 && oldText.indexOf(symbols.minusSign) !== -1);
};
/**
 * @hidden
 */
var isDecimalDuplicated = function (newState, symbols) {
    var newText = String(newState.currentLooseValue);
    return newText.split(symbols.decimal).length > 2;
};
/**
 * @hidden
 */
var getFormatPrefixSufix = function (format, intlService) {
    var positiveResult = intlService.formatNumber(DEFAULT_NUMBER, format);
    var negativeResult = intlService.formatNumber(-DEFAULT_NUMBER, format);
    var zeroResult = intlService.formatNumber(ZERO_NUMBER, format);
    var oneResult = intlService.formatNumber(ONE_NUMBER, format);
    var positivePrefix = getPrefix(positiveResult);
    var negativePrefix = getPrefix(negativeResult);
    var zeroPrefix = getPrefix(zeroResult);
    var onePrefix = getPrefix(oneResult);
    var positiveSuffix = getSuffix(positiveResult);
    var negativeSuffix = getSuffix(negativeResult);
    var zeroSuffix = getSuffix(zeroResult);
    var oneSuffix = getSuffix(oneResult);
    return {
        positiveInfo: [positivePrefix, positiveSuffix],
        negativeInfo: [negativePrefix, negativeSuffix],
        zeroInfo: [zeroPrefix, zeroSuffix],
        oneInfo: [onePrefix, oneSuffix]
    };
};
/**
 * @hidden
 */
var getFormatSymbols = function (format, intlService) {
    var positiveResult = intlService.formatNumber(DEFAULT_NUMBER, format);
    var negativeResult = intlService.formatNumber(-DEFAULT_NUMBER, format);
    var zeroResult = intlService.formatNumber(ZERO_NUMBER, format);
    var oneResult = intlService.formatNumber(ONE_NUMBER, format);
    var symbols = intlService.numberSymbols();
    var sanitizeRegex = new RegExp("[\\d\\".concat(symbols.decimal).concat(symbols.group, "]"), 'g');
    var resultWithDuplicates = [positiveResult, negativeResult, zeroResult, oneResult]
        .map(function (result) { return result.replace(sanitizeRegex, ''); })
        .join('');
    return resultWithDuplicates
        .split('')
        .filter(function (x, n, s) { return s.indexOf(x) === n; })
        .join('');
};
/**
 * @hidden
 */
var getInitialPosition = function (nextLooseValue, symbols) {
    var decimalIdex = nextLooseValue.indexOf(symbols.decimal);
    if (decimalIdex > -1) {
        return decimalIdex;
    }
    return getLastNumberIndex(nextLooseValue, DIGITS_REGEX);
};
/**
 * @hidden
 */
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
/**
 * @hidden
 */
var getLastNumberIndex = function (currentLooseValue, inputRegex) {
    return currentLooseValue.length - reverseString(currentLooseValue).search(inputRegex);
};
/**
 * @hidden
 */
var getPrefix = function (str) {
    return str.split(str[str.search(DIGITS_REGEX)])[0];
};
/**
 * @hidden
 */
var getSuffix = function (str) {
    var reversedString = reverseString(str);
    return reverseString(reversedString.split(reversedString[reversedString.search(DIGITS_REGEX)])[0]);
};
/**
 * @hidden
 */
var getFirstNumberIndex = function (prevLooseValue, inputRegex) {
    return prevLooseValue.search(inputRegex);
};
/**
 * @hidden
 */
var getDecimalCount = function (value, decimal) {
    var currentDecimalPlace = value.indexOf(decimal);
    return currentDecimalPlace > -1 ? value.length - currentDecimalPlace - 1 : 0;
};
/**
 * @hidden
 */
var changeBasedSelection = function (currentValue, nextValue, selectionPosition, isDelete, sanitizeRegex) {
    var isCurrentLeadingZero = currentValue.replace(sanitizeRegex, '')[0] === '0';
    var isNextLeadingZero = nextValue.replace(sanitizeRegex, '')[0] === '0';
    if (isCurrentLeadingZero && !isNextLeadingZero) {
        return selectionPosition - 1;
    }
    if (isNextLeadingZero && isDelete) {
        return selectionPosition + 1;
    }
    var numberCounter = 0;
    for (var idx = 0; idx < selectionPosition; idx++) {
        if (DIGITS_REGEX.test(currentValue.charAt(idx))) {
            numberCounter++;
        }
    }
    var newSelection = 0;
    while (numberCounter > 0 && nextValue.length > newSelection) {
        if (DIGITS_REGEX.test(nextValue.charAt(newSelection))) {
            numberCounter--;
        }
        newSelection++;
    }
    return newSelection;
};
/**
 * @hidden
 */
var sanitizeNumber = function (state, format, intlService) {
    var newState = __assign({}, state);
    var prevLooseValue = newState.prevLooseValue;
    var symbols = intlService.numberSymbols();
    var restrictedSymbols = getFormatSymbols(format, intlService);
    var currentLooseValueAsString = String(newState.currentLooseValue);
    var prevLooseValueAsString = String(prevLooseValue);
    var sanitizeRegex = new RegExp("[^\\d\\".concat(symbols.decimal, "]"), 'g');
    var sanitizeGroupRegex = new RegExp("[^\\d\\".concat(symbols.decimal, "\\").concat(symbols.group, "]"), 'g');
    var allSymbolsRegex = new RegExp("[\\d\\".concat(symbols.decimal, "\\").concat(symbols.group, "]"));
    var sanitizedString = currentLooseValueAsString.replace(sanitizeRegex, '');
    var numberStart = getFirstNumberIndex(currentLooseValueAsString, DIGITS_REGEX);
    var numberEnd = numberStart === -1 ? -1 : getLastNumberIndex(currentLooseValueAsString, DIGITS_REGEX);
    var decimalIndex = currentLooseValueAsString.indexOf(symbols.decimal);
    var sanitizedFormattedString = (currentLooseValueAsString.substring(0, numberStart) +
        currentLooseValueAsString.substring(numberStart, numberEnd).replace(sanitizeGroupRegex, '') +
        currentLooseValueAsString.substring(numberEnd, currentLooseValueAsString.length))
        .split('')
        .filter(function (s) { return restrictedSymbols.indexOf(s) !== -1 || s.search(allSymbolsRegex) !== -1; })
        .join('');
    var formattedMax = intlService.formatNumber(MAX_DECIMAL, format).replace(sanitizeRegex, '');
    var maxDecimalIndex = formattedMax.indexOf(symbols.decimal);
    var maxDecimalCount = maxDecimalIndex > -1 ? formattedMax.length - maxDecimalIndex - 1 : 0;
    var formattedMin = intlService.formatNumber(MIN_DECIMAL, format).replace(sanitizeRegex, '');
    var minDecimalIndex = formattedMin.indexOf(symbols.decimal);
    var minDecimalCount = minDecimalIndex > -1 ? formattedMin.length - minDecimalIndex - 1 : 0;
    var _a = getFormatPrefixSufix(format, intlService), positiveInfo = _a.positiveInfo, negativeInfo = _a.negativeInfo, zeroInfo = _a.zeroInfo, oneInfo = _a.oneInfo;
    var formatInfo = [positiveInfo, negativeInfo, zeroInfo, oneInfo];
    var isFormatContainPrefixSuffix = formatInfo.findIndex(function (info) { return info.findIndex(function (nestedInfo) { return Boolean(nestedInfo); }) !== -1; }) !== 1;
    var isDelete = currentLooseValueAsString.length > 0 && currentLooseValueAsString.length < prevLooseValueAsString.length;
    var isPercentFormat = typeof format === 'string' &&
        format[0] === 'p' &&
        currentLooseValueAsString &&
        currentLooseValueAsString.indexOf(symbols.percentSign) === -1;
    if (!newState.isPaste) {
        // 1. Empty input
        if (currentLooseValueAsString === '') {
            newState.eventValue = null;
            newState.currentLooseValue = '';
            return newState;
        }
        // 2. Check is minus sign
        if (newState.currentLooseValue === symbols.minusSign && intlService.formatNumber(-0, format) !== prevLooseValueAsString) {
            newState.eventValue = -0;
            newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
            setSelection(newState, getInitialPosition(newState.currentLooseValue, symbols), newState.currentLooseValue, formatInfo);
            return newState;
        }
        // 3. Check is decimal symbol
        if (newState.currentLooseValue === symbols.decimal) {
            newState.eventValue = 0;
            var valueCandidate = formatValue(newState.eventValue, format, intlService);
            if (minDecimalCount === 0 && maxDecimalCount > 0) {
                var currentLastNumberIndex = getLastNumberIndex(valueCandidate, DIGITS_REGEX);
                newState.currentLooseValue = valueCandidate.substring(0, currentLastNumberIndex) +
                    symbols.decimal +
                    valueCandidate.substring(currentLastNumberIndex);
            }
            else {
                newState.currentLooseValue = valueCandidate;
            }
            setSelection(newState, getInitialPosition(newState.currentLooseValue, symbols) + 1, newState.currentLooseValue, formatInfo);
            return newState;
        }
        // 4. Minus sign toggle
        if (isMinusSymbolAdded(newState, symbols)) {
            var nextValue = intlService.parseNumber(prevLooseValue, format);
            newState.eventValue = -(nextValue !== null ? nextValue : 0);
            newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
            var currentNumberStart = getFirstNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
            var oldNumberStart = getFirstNumberIndex(prevLooseValueAsString, DIGITS_REGEX);
            setSelection(newState, newState.selectionEnd - 1 + (currentNumberStart - oldNumberStart), newState.currentLooseValue, formatInfo);
            return newState;
        }
        if (isMinusSymbolRemoved(newState, symbols)) {
            newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
            setSelection(newState, newState.selectionStart, newState.currentLooseValue, formatInfo);
            return newState;
        }
        // 5. Duplicate decimal - it's possible only as trailing
        if (isDecimalDuplicated(newState, symbols)) {
            setInvalid(newState, format, formatInfo, intlService);
            return newState;
        }
        // 6. Percent format
        if (isPercentFormat) {
            newState.eventValue = intlService.parseNumber(currentLooseValueAsString, format) / 100;
            newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
            return newState;
        }
        // 7. More than 15 numeric symbols
        var numericSymbols = String(newState.currentLooseValue).replace(/[^\d]/g, '');
        if (numericSymbols.length > MAX_PRECISION) {
            setInvalid(newState, format, formatInfo, intlService);
            return newState;
        }
        // 8. Check prefix / suffix for modifications
        if (sanitizedString !== currentLooseValueAsString &&
            currentLooseValueAsString &&
            isFormatContainPrefixSuffix) {
            var formatInfoIndex = formatInfo.findIndex(function (_a) {
                var prefix = _a[0], suffix = _a[1];
                var prefixIndex = currentLooseValueAsString.indexOf(prefix);
                var suffixIndex = currentLooseValueAsString.indexOf(suffix);
                var prefixFound = prefixIndex === 0;
                var suffixFound = suffixIndex === currentLooseValueAsString.length - suffix.length;
                var prefixGap = prefixIndex + prefix.length !== numberStart &&
                    numberStart !== -1 &&
                    currentLooseValueAsString[prefixIndex + prefix.length] !== symbols.decimal;
                var suffixGap = suffixIndex !== numberEnd &&
                    numberEnd !== -1 &&
                    currentLooseValueAsString[suffixIndex - 1] !== symbols.decimal;
                if (prefix && suffix) {
                    if (prefixGap || suffixGap) {
                        return false;
                    }
                    return prefixFound && suffixFound;
                }
                if (prefix) {
                    if (prefixGap) {
                        return false;
                    }
                    return prefixFound;
                }
                if (suffix) {
                    if (suffixGap) {
                        return false;
                    }
                    return suffixFound;
                }
                return false;
            });
            if (formatInfoIndex === -1) {
                setInvalid(newState, format, formatInfo, intlService);
                return newState;
            }
        }
        // 9. Value ending on decimal separator (here as decimal might be typed inside format)
        if (sanitizedString[sanitizedString.length - 1] === symbols.decimal && maxDecimalCount > 0) {
            newState.eventValue = intlService.parseNumber(currentLooseValueAsString, format);
            newState.currentLooseValue = sanitizedFormattedString;
            return newState;
        }
        // 10. prevent deleting decimal and group symbols
        if (newState.currentLooseValue && prevLooseValue) {
            var isSpecialSymbolDeleted = (restrictedSymbols + symbols.decimal + symbols.group)
                .split('')
                .findIndex(function (s) {
                if (currentLooseValueAsString.split('').filter(function (x) { return x === s; }).length <
                    prevLooseValueAsString.split('').filter(function (x) { return x === s; }).length &&
                    currentLooseValueAsString.length + 1 === prevLooseValueAsString.length) {
                    if (s === symbols.decimal &&
                        getDecimalCount(prevLooseValueAsString.replace(sanitizeRegex, ''), symbols.decimal) === 0) {
                        return false;
                    }
                    return true;
                }
                return false;
            }) > -1;
            if (isSpecialSymbolDeleted) {
                newState.eventValue = intlService.parseNumber(state.prevLooseValue, format);
                newState.currentLooseValue = state.prevLooseValue;
                return newState;
            }
        }
        var currentDecimalCount = getDecimalCount(sanitizedString, symbols.decimal);
        var endsOnDecimal = sanitizedString[sanitizedString.length - 1] === '0';
        // 11. Deleting more decimals than allowed
        if (isDelete && endsOnDecimal && currentDecimalCount < minDecimalCount) {
            newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
            newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
            return newState;
        }
        // 12. Ending on zero OR more decimals than allowed
        if (currentDecimalCount > 0) {
            var valueUntillDecimal = currentLooseValueAsString.substring(0, decimalIndex);
            if (endsOnDecimal && (!valueUntillDecimal || prevLooseValueAsString.indexOf(valueUntillDecimal) !== 0)) {
                // ending on zero but typing before decimal separator
                newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
                var nextLooseValue = formatValue(newState.eventValue, format, intlService);
                setSelection(newState, changeBasedSelection(currentLooseValueAsString, nextLooseValue, newState.selectionEnd, isDelete, sanitizeRegex), nextLooseValue, formatInfo);
                newState.currentLooseValue = nextLooseValue;
                return newState;
            }
            if (currentDecimalCount > maxDecimalCount) {
                // typing more symbols than format allows
                var looseDecimalPlace = currentLooseValueAsString.indexOf(symbols.decimal);
                var result = currentLooseValueAsString.substring(0, looseDecimalPlace) +
                    currentLooseValueAsString.substring(looseDecimalPlace, looseDecimalPlace + 1 + maxDecimalCount) +
                    currentLooseValueAsString.substring(numberEnd, String(newState.currentLooseValue).length);
                newState.eventValue = intlService.parseNumber(result, format);
                newState.currentLooseValue = result;
                setSelection(newState, newState.selectionStart, result, formatInfo);
                return newState;
            }
            if (minDecimalCount !== maxDecimalCount && currentDecimalCount <= maxDecimalCount && endsOnDecimal) {
                // adding trailing zeroes
                newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
                newState.currentLooseValue = sanitizedFormattedString;
                return newState;
            }
            if (currentDecimalCount < minDecimalCount) {
                // deleting more decimals than allowed
                newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
                newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
                return newState;
            }
        }
    }
    // X. All other values should be parsed
    newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
    if (isPercentFormat) {
        newState.eventValue = newState.eventValue / 100;
    }
    if (typeof newState.eventValue === 'number') {
        var nextLooseValue = formatValue(newState.eventValue, format, intlService);
        // First digit add
        if (currentLooseValueAsString.length === 1) {
            setSelection(newState, getInitialPosition(nextLooseValue, symbols), nextLooseValue, formatInfo);
        }
        else {
            setSelection(newState, changeBasedSelection(currentLooseValueAsString, nextLooseValue, newState.selectionEnd, isDelete, sanitizeRegex), nextLooseValue, formatInfo);
        }
        newState.currentLooseValue = nextLooseValue;
    }
    else {
        // Case when deleting last number
        newState.currentLooseValue = formatValue(intlService.parseNumber(sanitizedString), format, intlService);
    }
    return newState;
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var dist_es_main_js_ = __webpack_require__(85601);
;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/NumericTextBox.js
var NumericTextBox_assign = (undefined && undefined.__assign) || function () {
    NumericTextBox_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return NumericTextBox_assign.apply(this, arguments);
};











var VALIDATION_MESSAGE = 'Please enter a valid value!';
/**
 * Represents the PropsContext of the `NumericTextBox` component.
 * Used for global configuration of all `NumericTextBox` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var NumericTextBoxPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact NumericTextBox component]({% slug overview_numerictextbox %}).
 */
var NumericTextBox = index_js_.forwardRef(function (directProps, target) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(NumericTextBoxPropsContext, directProps);
    var calculatedId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var inputId = props.id || calculatedId;
    var intlService = (0,index_mjs_.useInternationalization)();
    var localizationService = (0,index_mjs_.useLocalization)();
    var elementRef = index_js_.useRef(null);
    var valueDuringChangeRef = index_js_.useRef();
    var _b = index_js_.useState(false), forceUpdate = _b[0], setForceUpdate = _b[1];
    var stateRef = index_js_.useRef(getInitialState());
    var isPasteRef = index_js_.useRef(false);
    var prevLooseValueRef = index_js_.useRef();
    var stateValueRef = index_js_.useRef(props.defaultValue);
    var looseValue = formatValue(stateRef.current.focused && !props.disabled ?
        stateRef.current.currentLooseValue :
        getStateOrPropsValue(props.value, stateValueRef.current), props.format, intlService);
    prevLooseValueRef.current = looseValue;
    var Prefix = (0,main_js_.useCustomComponent)(props.prefix)[0];
    var Suffix = (0,main_js_.useCustomComponent)(props.suffix)[0];
    index_js_.useEffect(function () {
        if (elementRef.current && elementRef.current.setCustomValidity) {
            elementRef.current.setCustomValidity(validityGetter().valid
                ? ''
                : props.validationMessage || VALIDATION_MESSAGE);
        }
    });
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var valueGetter = index_js_.useCallback(function () {
        if (valueDuringChangeRef.current !== undefined) {
            return valueDuringChangeRef.current;
        }
        else {
            return getStateOrPropsValue(props.value, stateValueRef.current);
        }
    }, [props.value]);
    var nameGetter = index_js_.useCallback(function () {
        return props.name;
    }, [props.name]);
    var requiredGetter = index_js_.useCallback(function () {
        return props.required;
    }, [props.required]);
    var validityGetter = index_js_.useCallback(function () {
        var customError = props.validationMessage !== undefined;
        var currentValue = valueGetter();
        var valid = props.valid !== undefined ?
            props.valid :
            !stateRef.current.valueIsOutOfRange &&
                (!requiredGetter() || (currentValue !== null && currentValue !== undefined));
        return {
            customError: customError,
            valid: valid,
            valueMissing: currentValue === null || currentValue === undefined
        };
    }, [props.validationMessage, props.valid, valueGetter, requiredGetter]);
    var validityStylesGetter = index_js_.useCallback(function () {
        return props.validityStyles;
    }, [props.validityStyles]);
    var propsGetter = index_js_.useCallback(function () {
        return props;
    }, [props]);
    var getImperativeHandle = index_js_.useCallback(function () {
        var options = {
            element: elementRef.current,
            focus: focusElement
        };
        Object.defineProperty(options, 'name', { get: nameGetter });
        Object.defineProperty(options, 'value', { get: valueGetter });
        Object.defineProperty(options, 'validity', { get: validityGetter });
        Object.defineProperty(options, 'validityStyles', { get: validityStylesGetter });
        Object.defineProperty(options, 'required', { get: requiredGetter });
        Object.defineProperty(options, 'props', { get: propsGetter });
        return options;
    }, [nameGetter, valueGetter, validityGetter, validityStylesGetter, requiredGetter, focusElement, propsGetter]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var getCurrentState = index_js_.useCallback(function () {
        return {
            eventValue: getStateOrPropsValue(props.value, stateValueRef.current),
            prevLooseValue: prevLooseValueRef.current,
            currentLooseValue: elementRef.current.value,
            selectionStart: elementRef.current.selectionStart,
            selectionEnd: elementRef.current.selectionEnd,
            decimalSelect: false,
            valueIsCorrected: false,
            valueIsOutOfRange: false,
            isPaste: isPasteRef.current,
            focused: stateRef.current.focused
        };
    }, [props.value]);
    var triggerChange = index_js_.useCallback(function (event, newState) {
        if (props.disabled) {
            return;
        }
        valueDuringChangeRef.current = newState.eventValue;
        stateValueRef.current = newState.eventValue;
        var formattedValue = formatValue(rangeValue(newState.eventValue, props.min, props.max), props.format, intlService);
        var rangedValue = rangeValue(intlService.parseNumber(formattedValue, props.format), props.min, props.max);
        if (rangedValue !== newState.eventValue) {
            newState.valueIsOutOfRange = true;
            newState.eventValue = rangedValue;
            stateValueRef.current = rangedValue;
        }
        var shouldFireEvent = props.value !== newState.eventValue;
        if (shouldFireEvent) {
            (0,main_js_.dispatchEvent)(props.onChange, event, getImperativeHandle(), { value: newState.eventValue });
        }
        valueDuringChangeRef.current = undefined;
        stateRef.current = newState;
        setForceUpdate(function (_x) { return !_x; });
    }, [props.value, props.onChange, props.disabled, setForceUpdate, getImperativeHandle]);
    var onChangeHandler = index_js_.useCallback(function (event) {
        var stateCandidate = getCurrentState();
        isPasteRef.current = false;
        triggerChange(event, sanitizeNumber(stateCandidate, props.format, intlService));
    }, [props.format, props.onChange, intlService, triggerChange, getCurrentState]);
    var onKeyDown = index_js_.useCallback(function (event) {
        var newState = getCurrentState();
        var currentValue = intlService.parseNumber(String(newState.currentLooseValue), props.format);
        // Select All
        if (newState.selectionEnd > newState.selectionStart &&
            newState.selectionEnd - newState.selectionStart === String(newState.currentLooseValue).length) {
            var numericSymbols = intlService.numberSymbols();
            var isMinus = numericSymbols && event.key === numericSymbols.minusSign;
            var isDecimal = numericSymbols && event.key === numericSymbols.decimal;
            isPasteRef.current = !isMinus && !isDecimal;
            return;
        }
        switch (event.keyCode) {
            case 38:
                // Arrow up
                increaseValue(currentValue, newState, props.step, props.min, props.max, props.format, intlService);
                break;
            case 40:
                // Arrow down
                decreaseValue(currentValue, newState, props.step, props.min, props.max, props.format, intlService);
                break;
            case 13:
                // Enter - range values
                if (props.rangeOnEnter === false) {
                    return;
                }
                var formattedValue = formatValue(rangeValue(currentValue, props.min, props.max), props.format, intlService);
                var rangedValue = rangeValue(intlService.parseNumber(formattedValue, props.format), props.min, props.max);
                newState.eventValue = rangedValue;
                newState.currentLooseValue = formatValue(rangedValue, props.format, intlService);
                newState.selectionStart = newState.selectionEnd = newState.currentLooseValue.length;
                break;
            case 110:
                // Numpad decimal key
                var element = elementRef.current;
                var symbols = intlService.numberSymbols();
                if (element) {
                    newState.currentLooseValue = newState.currentLooseValue.slice(0, newState.selectionStart) +
                        symbols.decimal +
                        newState.currentLooseValue.slice(newState.selectionEnd);
                    newState.selectionStart = newState.selectionEnd = newState.selectionStart + 1;
                    newState = sanitizeNumber(newState, props.format, intlService);
                }
                break;
            default:
                return;
        }
        event.preventDefault();
        triggerChange(event, newState);
    }, [props.format, props.min, props.max, props.step, props.onChange, props.rangeOnEnter, triggerChange, getCurrentState]);
    var onPasteHandler = index_js_.useCallback(function () {
        isPasteRef.current = true;
    }, []);
    var onIncrease = index_js_.useCallback(function (event) {
        if (props.readOnly ||
            props.disabled) {
            return;
        }
        var newState = getCurrentState();
        increaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
        triggerChange(event, newState);
    }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
    var onDecrease = index_js_.useCallback(function (event) {
        if (props.readOnly ||
            props.disabled) {
            return;
        }
        var newState = getCurrentState();
        decreaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
        triggerChange(event, newState);
    }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
    var onWheelHandler = index_js_.useCallback(function (event) {
        var activeElement = (0,main_js_.getActiveElement)(document);
        if (!document ||
            activeElement !== elementRef.current ||
            !elementRef.current ||
            props.readOnly ||
            props.disabled) {
            return;
        }
        if (event.nativeEvent.deltaY < 0) {
            onIncrease(event);
        }
        if (event.nativeEvent.deltaY > 0) {
            onDecrease(event);
        }
    }, [onIncrease, onDecrease, props.disabled, props.readOnly]);
    var onFocus = index_js_.useCallback(function (event) {
        stateRef.current.currentLooseValue = prevLooseValueRef.current;
        stateRef.current.focused = true;
        (0,main_js_.dispatchEvent)(props.onFocus, event, getImperativeHandle(), {});
        setForceUpdate(function (x) { return !x; });
    }, [props.onFocus, setForceUpdate, getImperativeHandle]);
    var onBlur = index_js_.useCallback(function (event) {
        stateRef.current = getInitialState();
        (0,main_js_.dispatchEvent)(props.onBlur, event, getImperativeHandle(), {});
        setForceUpdate(function (x) { return !x; });
    }, [props.onBlur, setForceUpdate, getImperativeHandle]);
    var onMouseDown = index_js_.useCallback(function (e) {
        if (document && elementRef.current) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            e.preventDefault();
            if (activeElement !== elementRef.current) {
                elementRef.current.focus();
            }
        }
    }, []);
    index_js_.useLayoutEffect(function () {
        // The input element's type ('number') does not support selection.
        if (elementRef.current && elementRef.current.type !== 'number' &&
            stateRef.current.selectionStart !== undefined && stateRef.current.selectionEnd !== undefined) {
            elementRef.current.selectionStart = stateRef.current.selectionStart;
            elementRef.current.selectionEnd = stateRef.current.selectionEnd;
            stateRef.current.selectionStart = undefined;
            stateRef.current.selectionEnd = undefined;
        }
    }, [forceUpdate]);
    var isValid = !validityStylesGetter() || validityGetter().valid;
    var numerictextbox = (index_js_.createElement("span", { dir: props.dir, style: !props.label
            ? NumericTextBox_assign({ width: props.width }, props.style) : props.style, className: (0,main_js_.classNames)('k-input', 'k-numerictextbox', (_a = {},
            _a["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[props.size] || props.size)] = props.size,
            _a["k-input-".concat(props.fillMode)] = props.fillMode,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[props.rounded] || props.rounded)] = props.rounded,
            _a['k-invalid'] = !isValid,
            _a['k-required'] = props.required,
            _a['k-disabled'] = props.disabled,
            _a), props.className), "aria-disabled": props.disabled ? 'true' : undefined },
        index_js_.createElement(Prefix, null),
        index_js_.createElement("input", { role: 'spinbutton', value: looseValue === null ? '' : looseValue, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), accessKey: props.accessKey, disabled: props.disabled, title: props.title, "aria-disabled": props.disabled ? 'true' : undefined, "aria-valuemin": props.min, "aria-valuemax": props.max, "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy, placeholder: props.placeholder, spellCheck: false, autoComplete: 'off', autoCorrect: 'off', type: props.inputType || 'tel', className: 'k-input-inner', id: inputId, name: props.name, readOnly: props.readOnly, style: props.inputStyle, onChange: onChangeHandler, onFocus: onFocus, onBlur: onBlur, onKeyDown: onKeyDown, onPaste: onPasteHandler, onWheel: onWheelHandler, ref: elementRef }),
        index_js_.createElement(Suffix, null),
        props.children,
        props.spinners &&
            (index_js_.createElement("span", { className: "k-input-spinner k-spin-button", onMouseDown: onMouseDown },
                index_js_.createElement(dist_es_main_js_.Button, { tabIndex: -1, type: "button", icon: 'caret-alt-up', svgIcon: index_es_js_.caretAltUpIcon, rounded: null, className: "k-spinner-increase", "aria-label": localizationService.toLanguageString(numericIncreaseValue, messages[numericIncreaseValue]), title: localizationService.toLanguageString(numericIncreaseValue, messages[numericIncreaseValue]), onClick: onIncrease }),
                index_js_.createElement(dist_es_main_js_.Button, { tabIndex: -1, type: "button", icon: 'caret-alt-down', svgIcon: index_es_js_.caretAltDownIcon, rounded: null, className: "k-spinner-decrease", "aria-label": localizationService.toLanguageString(numericDecreaseValue, messages[numericDecreaseValue]), title: localizationService.toLanguageString(numericDecreaseValue, messages[numericDecreaseValue]), onClick: onDecrease })))));
    return props.label
        ? (index_js_.createElement(es_main_js_.FloatingLabel, { label: props.label, editorId: inputId, editorValue: looseValue === null ? '' : looseValue, editorValid: isValid, editorDisabled: props.disabled, editorPlaceholder: props.placeholder, children: numerictextbox, style: { width: props.width }, dir: props.dir }))
        : numerictextbox;
});
NumericTextBox.propTypes = {
    value: prop_types_index_js_.number,
    defaultValue: prop_types_index_js_.number,
    step: prop_types_index_js_.number,
    format: prop_types_index_js_.oneOfType([
        prop_types_index_js_.string,
        prop_types_index_js_.shape({
            style: prop_types_index_js_.oneOf(['decimal', 'currency', 'percent', 'scientific', 'accounting']),
            currency: prop_types_index_js_.string,
            currencyDisplay: prop_types_index_js_.oneOf(['symbol', 'code', 'name']),
            useGrouping: prop_types_index_js_.bool,
            minimumIntegerDigits: prop_types_index_js_.number,
            minimumFractionDigits: prop_types_index_js_.number,
            maximumFractionDigits: prop_types_index_js_.number
        })
    ]),
    width: prop_types_index_js_.oneOfType([
        prop_types_index_js_.string,
        prop_types_index_js_.number
    ]),
    tabIndex: prop_types_index_js_.number,
    accessKey: prop_types_index_js_.string,
    title: prop_types_index_js_.string,
    placeholder: prop_types_index_js_.string,
    min: prop_types_index_js_.number,
    max: prop_types_index_js_.number,
    spinners: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    readOnly: prop_types_index_js_.bool,
    dir: prop_types_index_js_.string,
    name: prop_types_index_js_.string,
    label: prop_types_index_js_.string,
    validationMessage: prop_types_index_js_.string,
    required: prop_types_index_js_.bool,
    id: prop_types_index_js_.string,
    rangeOnEnter: prop_types_index_js_.bool,
    ariaLabelledBy: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    ariaLabel: prop_types_index_js_.string,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func,
    onBlur: prop_types_index_js_.func,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
};
NumericTextBox.displayName = 'KendoNumericTextBox';
NumericTextBox.defaultProps = {
    prefix: function (_) { return null; },
    suffix: function (_) { return null; },
    step: 1,
    spinners: true,
    disabled: false,
    required: false,
    validityStyles: true,
    rangeOnEnter: true,
    onChange: function (_) { return; },
    onFocus: function (_) { return; },
    onBlur: function (_) { return; },
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
};

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/color/parse-color.js
var parse_color = __webpack_require__(23368);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/color/color.js
var color = __webpack_require__(38578);
;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/utils/misc.js
/**
 * @hidden
 */
var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * @hidden
 *
 * Fits the contender number into the specified bounds.
 * If the number is NaN or null, the minimum is returned.
 *
 * @param contender Represents the number you want to fit into the specified bounds.
 * @param min The inclusive lower bound number.
 * @param max The inclusive upper bound number.
 */
var fitIntoBounds = function (contender, min, max) {
    if (!isPresent(contender) || isNaN(contender)) {
        return min;
    }
    return contender <= min ? min : contender >= max ? max : contender;
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/utils/color-parser.js


/**
 * @hidden
 *
 * Returns the hex or RGBA string representation of the color.
 */
var parseColor = function (value, format, safe) {
    if (safe === void 0) { safe = true; }
    var allowedFormats = ['hex', 'rgba']; // TODO: constant?
    // Angular supports third type: name : const allowedFormats: Array<string> = ['hex', 'rgba', 'name'];
    if (allowedFormats.indexOf(format) === -1) {
        throw new Error("Unsupported color output format '".concat(format, "'. The available options are 'hex' or 'rgba'."));
    }
    if (!isPresent(value)) {
        return;
    }
    var parsedColor = (0,parse_color/* default */.Ay)(value.trim(), safe);
    if (!isPresent(parsedColor)) {
        return;
    }
    return format === 'hex' ? parsedColor.toCss() : parsedColor.toCssRgba();
};
/**
 * @hidden
 *
 * Returns an HSV object representation of the color string.
 */
var getHSV = function (value, safe) {
    if (safe === void 0) { safe = true; }
    var parsed = (0,parse_color/* default */.Ay)(value, safe);
    if (!isPresent(parsed)) {
        return {};
    }
    return parsed.toHSV();
};
/**
 * @hidden
 *
 * Returns an RGBA object representation of the color string.
 */
var getRGBA = function (value, safe) {
    if (safe === void 0) { safe = true; }
    var parsed = (0,parse_color/* default */.Ay)(value, safe);
    if (!isPresent(parsed)) {
        return {};
    }
    return parsed.toBytes();
};
/**
 * @hidden
 *
 * Returns the RGBA string representation of the color.
 */
var getColorFromHSV = function (hsva) {
    var hue = fitIntoBounds(hsva.h, 0, 359.9);
    var saturation = fitIntoBounds(hsva.s, 0, 1);
    var value = fitIntoBounds(hsva.v, 0, 1);
    var alpha = fitIntoBounds(hsva.a, 0, 1);
    return color/* default */.A.fromHSV(hue, saturation, value, alpha).toCssRgba();
};
/**
 * @hidden
 *
 * Returns the RGBA string representation of the color based on the `hue` and
 * assuming the `value`, `saturation`, and `alpha` have a value of `1`.
 */
var getColorFromHue = function (hue) {
    return getColorFromHSV({ h: hue, s: 1, v: 1, a: 1 });
};
/**
 * @hidden
 *
 * Returns the RGBA string representation of the color.
 */
var getColorFromRGBA = function (rgba) {
    var red = fitIntoBounds(rgba.r, 0, 255);
    var green = fitIntoBounds(rgba.g, 0, 255);
    var blue = fitIntoBounds(rgba.b, 0, 255);
    var alpha = fitIntoBounds(rgba.a, 0, 1);
    return color/* default */.A.fromBytes(red, green, blue, alpha).toCssRgba();
};
/**
 * @hidden
 *
 * Returns the RGB object representation of the color based on the background color.
 */
var getRGBFromRGBA = function (foregroundColor, backgroundColor) {
    var r1 = fitIntoBounds(foregroundColor.r, 0, 255);
    var g1 = fitIntoBounds(foregroundColor.g, 0, 255);
    var b1 = fitIntoBounds(foregroundColor.b, 0, 255);
    var a1 = fitIntoBounds(foregroundColor.a, 0, 1);
    var r2 = fitIntoBounds(backgroundColor.r, 0, 255);
    var g2 = fitIntoBounds(backgroundColor.g, 0, 255);
    var b2 = fitIntoBounds(backgroundColor.b, 0, 255);
    return {
        r: Math.round(((1 - a1) * r2) + (a1 * r1)),
        g: Math.round(((1 - a1) * g2) + (a1 * g1)),
        b: Math.round(((1 - a1) * b2) + (a1 * b1))
    };
};
/**
 * @hidden
 *
 * Returns the relative luminance.
 */
var getLuminance = function (rgb) {
    var a = [rgb.r || 0, rgb.g || 0, rgb.b || 0].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
/**
 * @hidden
 *
 * Returns the color contrast.
 */
var getContrast = function (luminance1, luminance2) {
    var brightest = Math.max(luminance1, luminance2);
    var darkest = Math.min(luminance1, luminance2);
    return (brightest + 0.05)
        / (darkest + 0.05);
};
/**
 * @hidden
 *
 * Returns the color contrast from two RGBA colors.
 */
var getContrastFromTwoRGBAs = function (a, b) {
    return getContrast(getLuminance(getRGBFromRGBA(a, b)), getLuminance(getRGBFromRGBA(b, { r: 0, g: 0, b: 0, a: 1 })));
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/Input.js
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
var Input_assign = (undefined && undefined.__assign) || function () {
    Input_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Input_assign.apply(this, arguments);
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






/** @hidden */
var InputWithoutContext = /** @class */ (function (_super) {
    __extends(InputWithoutContext, _super);
    function InputWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        _this._input = null;
        _this._inputId = (0,main_js_.guid)();
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._input) {
                _this._input.focus();
            }
        };
        _this.isInvalid = function (state) {
            var result = false;
            for (var prop in state) {
                if (state.hasOwnProperty(prop)) {
                    result = result || Boolean(state[prop]);
                }
            }
            return result;
        };
        /**
         * @hidden
         */
        _this.setValidity = function () {
            if (_this._input && _this._input.setCustomValidity) {
                _this.validity.valid || !_this.validityStyles
                    ? _this._input.classList.remove('k-invalid')
                    : _this._input.classList.add('k-invalid');
                _this._input.setCustomValidity(_this.validity.valid
                    ? ''
                    : _this.props.validationMessage || '');
            }
        };
        _this.handleChange = function (event) {
            _this.setState({
                value: event.target.value
            });
            _this.valueDuringOnChange = event.target.value;
            if (_this.props.onChange) {
                _this.props.onChange.call(undefined, {
                    syntheticEvent: event,
                    nativeEvent: event.nativeEvent,
                    value: event.target.value,
                    target: _this
                });
            }
            _this.valueDuringOnChange = undefined;
        };
        /**
         * @hidden
         */
        _this.handleAutoFill = function (e) {
            if (e.animationName === 'autoFillStart') {
                var parent_1 = e.target.parentNode;
                if (parent_1 && parent_1.classList.contains('k-empty')) {
                    parent_1.classList.remove('k-empty');
                }
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            value: _this.props.defaultValue || InputWithoutContext.defaultProps.defaultValue
        };
        return _this;
    }
    Object.defineProperty(InputWithoutContext.prototype, "element", {
        /**
         * Gets the native input element of the Input component.
         */
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputWithoutContext.prototype, "value", {
        /**
         * Gets the value of the Input.
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
    Object.defineProperty(InputWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the Input.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the Input is set.
         */
        get: function () {
            var result = {
                badInput: this._input ? this._input.validity.badInput : false,
                patternMismatch: this._input
                    ? this._input.validity.patternMismatch
                    : false,
                rangeOverflow: this._input ? this._input.validity.rangeOverflow : false,
                rangeUnderflow: this._input ? this._input.validity.rangeUnderflow : false,
                stepMismatch: this._input ? this._input.validity.stepMismatch : false,
                tooLong: this._input ? this._input.validity.tooLong : false,
                typeMismatch: this._input ? this._input.validity.typeMismatch : false,
                valueMissing: this._input ? this._input.validity.valueMissing : false
            };
            return Input_assign(Input_assign({}, result), { customError: this.props.validationMessage !== undefined, valid: this.props.valid !== undefined
                    ? this.props.valid
                    : this._input
                        ? !this.isInvalid(result)
                        : true });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : InputWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    InputWithoutContext.prototype.componentDidMount = function () {
        this.forceUpdate();
    };
    /**
     * @hidden
     */
    InputWithoutContext.prototype.componentDidUpdate = function () {
        this.setValidity();
    };
    /**
     * @hidden
     */
    InputWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, label = _a.label, labelClassName = _a.labelClassName, id = _a.id, validationMessage = _a.validationMessage, defaultValue = _a.defaultValue, valid = _a.valid, 
        // Removed to support direct use in Form Field component
        visited = _a.visited, touched = _a.touched, modified = _a.modified, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, validityStyles = _a.validityStyles, style = _a.style, ariaLabel = _a.ariaLabel, props = __rest(_a, ["className", "label", "labelClassName", "id", "validationMessage", "defaultValue", "valid", "visited", "touched", "modified", "ariaLabelledBy", "ariaDescribedBy", "validityStyles", "style", "ariaLabel"]);
        var inputId = id || this._inputId;
        var isValid = !this.validityStyles || this.validity.valid;
        var inputClassName = (0,main_js_.classNames)(className, 'k-input k-input-md k-rounded-md k-input-solid');
        var textbox = (index_js_.createElement("input", Input_assign({ "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-disabled": this.props.disabled || undefined, "aria-invalid": !isValid || undefined, "aria-label": ariaLabel || undefined }, props, { style: !label
                ? style
                : undefined, value: this.value, id: inputId, className: inputClassName, onChange: this.handleChange, onAnimationStart: this.handleAutoFill, ref: function (el) {
                _this._input = el;
            } })));
        return label ?
            (index_js_.createElement(es_main_js_.FloatingLabel, { label: label, labelClassName: labelClassName, editorId: inputId, editorValue: String(this.value), editorValid: isValid, editorDisabled: props.disabled, editorPlaceholder: props.placeholder, children: textbox, style: style, dir: props.dir }))
            : textbox;
    };
    InputWithoutContext.displayName = 'Input';
    /**
     * @hidden
     */
    InputWithoutContext.propTypes = {
        label: prop_types_index_js_.string,
        labelClassName: prop_types_index_js_.string,
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    InputWithoutContext.defaultProps = {
        defaultValue: '',
        required: false,
        validityStyles: true
    };
    return InputWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `Input` component.
 * Used for global configuration of all `Input` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var InputPropsContext = (0,main_js_.createPropsContext)();
;
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact Input component]({% slug overview_textbox %}).
 *
 * Accepts properties of type [InputProps]({% slug api_inputs_inputprops %}).
 * Obtaining the `ref` returns an object of type [InputHandle]({% slug api_inputs_inputhandle %}).
 */
var Input = (0,main_js_.withPropsContext)(InputPropsContext, InputWithoutContext);
Input.displayName = 'KendoReactInput';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/HexInput.js
var HexInput_extends = (undefined && undefined.__extends) || (function () {
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
var HexInput = /** @class */ (function (_super) {
    HexInput_extends(HexInput, _super);
    function HexInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (event) {
            var hex = event.target.value;
            var value = parseColor(hex, 'rgba');
            _this.setState({ hex: hex });
            if (isPresent(value)) {
                _this.props.onHexChange(hex, value, event);
            }
        };
        _this.onBlur = function () {
            if (!isPresent(parseColor(_this.state.hex, 'rgba'))) {
                _this.setState({ hex: _this.state.originalHex });
            }
        };
        _this.state = { hex: _this.props.hex, originalHex: _this.props.hex };
        return _this;
    }
    HexInput.prototype.render = function () {
        return (index_js_.createElement(Input, { value: this.state.hex, onChange: this.onChange, onBlur: this.onBlur, disabled: this.props.disabled }));
    };
    HexInput.getDerivedStateFromProps = function (props, state) {
        if (props.hex !== state.originalHex) {
            return { hex: props.hex, originalHex: props.hex };
        }
        return null;
    };
    return HexInput;
}(index_js_.Component));
/* harmony default export */ const colors_HexInput = (HexInput);

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorInput.js
var ColorInput_extends = (undefined && undefined.__extends) || (function () {
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
var ColorInput_assign = (undefined && undefined.__assign) || function () {
    ColorInput_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ColorInput_assign.apply(this, arguments);
};








/**
 * @hidden
 */
var modes = ['rgba', 'rgb', 'hex'];
/**
 * @hidden
 */
var ColorInput = /** @class */ (function (_super) {
    ColorInput_extends(ColorInput, _super);
    function ColorInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onRgbaRChange = function (event) {
            _this.dispatchRgbaChange({ r: event.value }, event);
        };
        _this.onRgbaGChange = function (event) {
            _this.dispatchRgbaChange({ g: event.value }, event);
        };
        _this.onRgbaBChange = function (event) {
            _this.dispatchRgbaChange({ b: event.value }, event);
        };
        _this.onRgbaAChange = function (event) {
            _this.dispatchRgbaChange({ a: event.value }, event);
        };
        _this.state = { inputMode: props.defaultInputMode || modes[1] };
        return _this;
    }
    ColorInput.prototype.render = function () {
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var hexMessage = localizationService.toLanguageString(colorGradientR, messages[colorGradientHex]);
        var rMessage = localizationService.toLanguageString(colorGradientR, messages[colorGradientR]);
        var gMessage = localizationService.toLanguageString(colorGradientR, messages[colorGradientG]);
        var bMessage = localizationService.toLanguageString(colorGradientR, messages[colorGradientB]);
        var aMessage = localizationService.toLanguageString(colorGradientR, messages[colorGradientA]);
        var toggleButtonMessage = localizationService.toLanguageString(colorGradientToggleInputsButton, messages[colorGradientToggleInputsButton]);
        return (index_js_.createElement("div", { className: "k-colorgradient-inputs k-hstack" },
            index_js_.createElement("div", { className: "k-vstack" },
                index_js_.createElement(dist_es_main_js_.Button, { "aria-label": toggleButtonMessage, fillMode: 'flat', icon: 'caret-alt-expand', svgIcon: index_es_js_.caretAltExpandIcon, className: "k-colorgradient-toggle-mode k-icon-button", onClick: this.onToggleModeChange.bind(this) })),
            this.state.inputMode === 'hex' &&
                index_js_.createElement("div", { className: "k-vstack k-flex-1" },
                    index_js_.createElement("span", { className: "k-hex-value k-textbox k-input" },
                        index_js_.createElement(colors_HexInput, { hex: this.props.hex, onHexChange: this.props.onHexChange, disabled: this.props.disabled })),
                    index_js_.createElement(es_main_js_.Label, { className: "k-colorgradient-input-label" }, hexMessage)),
            (this.state.inputMode === 'rgb' || this.state.inputMode === 'rgba') &&
                index_js_.createElement(index_js_.Fragment, null,
                    index_js_.createElement("div", { className: "k-vstack" },
                        index_js_.createElement(NumericTextBox, { inputType: 'number', value: this.props.rgba.r, ariaLabel: String(this.props.rgba.r), min: 0, max: 255, spinners: false, format: "n", onChange: this.onRgbaRChange, disabled: this.props.disabled }),
                        index_js_.createElement(es_main_js_.Label, { className: "k-colorgradient-input-label" }, rMessage)),
                    index_js_.createElement("div", { className: "k-vstack" },
                        index_js_.createElement(NumericTextBox, { inputType: 'number', value: this.props.rgba.g, ariaLabel: String(this.props.rgba.g), min: 0, max: 255, spinners: false, format: "n", onChange: this.onRgbaGChange, disabled: this.props.disabled }),
                        index_js_.createElement(es_main_js_.Label, { className: "k-colorgradient-input-label" }, gMessage)),
                    index_js_.createElement("div", { className: "k-vstack" },
                        index_js_.createElement(NumericTextBox, { inputType: 'number', value: this.props.rgba.b, ariaLabel: String(this.props.rgba.b), min: 0, max: 255, spinners: false, format: "n", onChange: this.onRgbaBChange, disabled: this.props.disabled }),
                        index_js_.createElement(es_main_js_.Label, { className: "k-colorgradient-input-label" }, bMessage))),
            this.state.inputMode === 'rgba' &&
                index_js_.createElement("div", { className: "k-vstack" },
                    this.props.opacity &&
                        index_js_.createElement(NumericTextBox, { inputType: 'number', value: this.props.rgba.a, ariaLabel: String(this.props.rgba.a), min: 0, max: 1, step: 0.01, spinners: false, format: "n2", onChange: this.onRgbaAChange, disabled: this.props.disabled }),
                    this.props.opacity && (index_js_.createElement(es_main_js_.Label, { className: "k-colorgradient-input-label" }, aMessage)))));
    };
    ColorInput.prototype.dispatchRgbaChange = function (newValue, event) {
        var rgba = ColorInput_assign({}, this.props.rgba);
        if (newValue.r !== undefined) {
            rgba.r = newValue.r;
        }
        if (newValue.g !== undefined) {
            rgba.g = newValue.g;
        }
        if (newValue.b !== undefined) {
            rgba.b = newValue.b;
        }
        if (newValue.a !== undefined) {
            rgba.a = newValue.a;
        }
        this.props.onRgbaChange(rgba, event);
    };
    ;
    ColorInput.prototype.onToggleModeChange = function () {
        var index = modes.length - 1 === modes.indexOf(this.state.inputMode) ? 0 : modes.indexOf(this.state.inputMode) + 1;
        if (!this.props.opacity) {
            var nextIndex = modes[index] === 'rgba' ? index + 1 : index;
            this.setState({ inputMode: modes[nextIndex] });
        }
        else {
            this.setState({ inputMode: modes[index] });
        }
    };
    return ColorInput;
}(index_js_.Component));
/* harmony default export */ const colors_ColorInput = (ColorInput);
(0,index_mjs_.registerForIntl)(ColorInput);
(0,index_mjs_.registerForLocalization)(ColorInput);

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/slider/SliderLabel.js
var SliderLabel_assign = (undefined && undefined.__assign) || function () {
    SliderLabel_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SliderLabel_assign.apply(this, arguments);
};


/**
 * @hidden
 */
var SLIDER_LABEL_ATTRIBUTE = 'data-slider-label';
/**
 * Represents the KendoReact SliderLabel component.
 */
var SliderLabel = function (props) {
    var _a, _b;
    var sliderLabelRef = index_js_.useRef(null);
    var dir = (0,main_js_.useDir)(sliderLabelRef);
    var style = props.vertical
        ? { bottom: "".concat(props.position, "%") }
        : (_a = {}, _a[dir === 'rtl' ? 'right' : 'left'] = "".concat(props.position, "%"), _a);
    var tickStyle = props.vertical ? 'k-tick-vertical' : 'k-tick-horizontal';
    return (index_js_.createElement("li", { ref: sliderLabelRef, className: "k-tick k-tick-large ".concat(tickStyle), title: props.title, style: SliderLabel_assign({ zIndex: 1, position: 'absolute' }, style) }, props.children && index_js_.createElement("span", SliderLabel_assign({}, (_b = {}, _b[SLIDER_LABEL_ATTRIBUTE] = true, _b), { className: "k-label", onClick: props.onClick }), props.children)));
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/slider/Slider.js
var Slider_extends = (undefined && undefined.__extends) || (function () {
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
var Slider_assign = (undefined && undefined.__assign) || function () {
    Slider_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Slider_assign.apply(this, arguments);
};










/** @hidden */
var SliderWithoutContext = /** @class */ (function (_super) {
    Slider_extends(SliderWithoutContext, _super);
    function SliderWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.state = {
            value: _this.props.defaultValue === undefined ? _this.props.min : _this.props.defaultValue,
            focused: false,
            dir: _this.props.dir
        };
        _this._sliderTrack = null;
        _this._element = null;
        /**
         * @hidden
         */
        _this.buttons = function (props) {
            if (!props.enabled) {
                return props.children;
            }
            var increaseSvgArrow = _this.state.dir === 'rtl' ? (_this.props.vertical ? index_es_js_.caretAltUpIcon : index_es_js_.caretAltLeftIcon) : (_this.props.vertical ? index_es_js_.caretAltUpIcon : index_es_js_.caretAltRightIcon);
            var decreaseSvgArrow = _this.state.dir === 'rtl' ? (_this.props.vertical ? index_es_js_.caretAltDownIcon : index_es_js_.caretAltRightIcon) : (_this.props.vertical ? index_es_js_.caretAltDownIcon : index_es_js_.caretAltLeftIcon);
            var increaseFontArrow = _this.state.dir === 'rtl' ? (_this.props.vertical ? 'caret-alt-up' : 'caret-alt-left') : (_this.props.vertical ? 'caret-alt-up' : 'caret-alt-right');
            var decreaseFontArrow = _this.state.dir === 'rtl' ? (_this.props.vertical ? 'caret-alt-down' : 'caret-alt-right') : (_this.props.vertical ? 'caret-alt-down' : 'caret-alt-left');
            return (index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement(dist_es_main_js_.Button, { className: "k-button-decrease", rounded: 'full', icon: decreaseFontArrow, svgIcon: decreaseSvgArrow, title: props.decrementTitle, onClick: props.decrement }),
                props.children,
                index_js_.createElement(dist_es_main_js_.Button, { className: "k-button-increase", rounded: 'full', icon: increaseFontArrow, svgIcon: increaseSvgArrow, title: props.incrementTitle, onClick: props.increment })));
        };
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._element) {
                _this._element.focus();
            }
        };
        _this.isLabel = function (target) {
            var currentTarget = target;
            while (currentTarget) {
                if (Boolean(currentTarget.getAttribute(SLIDER_LABEL_ATTRIBUTE))) {
                    return true;
                }
                currentTarget = currentTarget.parentElement;
            }
            return false;
        };
        _this.onFocus = function () {
            _this.setState({ focused: true });
        };
        _this.onBlur = function () {
            _this.setState({ focused: false });
        };
        _this.onKeyDown = function (e) {
            var newValue = undefined;
            if (e.keyCode === main_js_.Keys.left || e.keyCode === main_js_.Keys.down) {
                newValue = _this.state.value - (_this.props.step || 0);
            }
            else if (e.keyCode === main_js_.Keys.right || e.keyCode === main_js_.Keys.up) {
                newValue = _this.state.value + (_this.props.step || 0);
            }
            else if (e.keyCode === main_js_.Keys.home) {
                newValue = _this.props.min;
            }
            else if (e.keyCode === main_js_.Keys.end) {
                newValue = _this.props.max;
            }
            if (newValue !== undefined) {
                e.preventDefault();
                _this.change(e, newValue);
            }
        };
        _this.decrement = function (e) {
            e.preventDefault();
            _this.change(e, _this.state.value - (_this.props.step || 0));
        };
        _this.increment = function (e) {
            e.preventDefault();
            _this.change(e, _this.state.value + (_this.props.step || 0));
        };
        _this.dragStart = function (e) {
            if (!_this.isLabel(e.event.originalEvent.target)) {
                if (e.event.isTouch) {
                    e.event.originalEvent.preventDefault();
                }
                _this.drag(e);
            }
        };
        _this.dragOver = function (e) {
            e.event.originalEvent.preventDefault();
            _this.drag(e);
        };
        _this.drag = function (e) {
            var computed = e.element.getBoundingClientRect();
            var distance = _this.props.vertical
                ? (computed.bottom - e.event.clientY)
                : (_this.state.dir === 'rtl'
                    ? computed.right - e.event.clientX
                    : e.event.clientX - computed.left);
            var size = _this.props.vertical ? computed.height : computed.width;
            var percentage = (distance / size);
            _this.change(e, _this.props.min + percentage * (_this.props.max - _this.props.min));
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    /**
     * @hidden
     */
    SliderWithoutContext.getDerivedStateFromProps = function (props, state) {
        var value = props.value !== undefined ? props.value : state.value;
        var min = props.min, max = props.max;
        return value === undefined ? null :
            { value: Math.min(Math.max(value, min), max) };
    };
    /**
     * @hidden
     */
    SliderWithoutContext.prototype.componentDidMount = function () {
        if (!this.state.dir && window && this._element) {
            // Note: getComputedStyle forces reflow
            var direction = window.getComputedStyle(this._element).direction;
            if (direction) {
                this.setState({ dir: direction });
            }
        }
    };
    /**
     * @hidden
     */
    SliderWithoutContext.prototype.render = function () {
        var _a;
        var _this = this;
        var lS = (0,index_mjs_.provideLocalizationService)(this);
        var percentValue = ((this.state.value - this.props.min) / (this.props.max - this.props.min)) * 100;
        var trackStyles = this.props.vertical
            ? { marginTop: '0.5rem', marginBottom: '0.5rem' }
            : { marginLeft: '0.5rem', marginRight: '0.5rem' };
        var sliderItemsStyle = this.props.vertical
            ? { paddingTop: 0, height: '100%' }
            : {};
        return (index_js_.createElement("div", { ref: function (el) { return _this._element = el; }, dir: this.state.dir, id: this.props.id, style: Slider_assign({ gap: 0 }, this.props.style), onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, className: (0,main_js_.classNames)('k-slider', {
                'k-focus': this.state.focused,
                'k-disabled': this.props.disabled,
                'k-slider-horizontal': !this.props.vertical,
                'k-slider-vertical': this.props.vertical
            }, this.props.className) },
            index_js_.createElement(this.buttons, { enabled: this.props.buttons, decrement: this.decrement, increment: this.increment, incrementTitle: lS.toLanguageString(sliderIncreaseValue, messages[sliderIncreaseValue]), decrementTitle: lS.toLanguageString(sliderDecreaseValue, messages[sliderDecreaseValue]) },
                index_js_.createElement(main_js_.Draggable, { onDrag: this.dragOver, onPress: this.dragStart },
                    index_js_.createElement("div", { className: "k-slider-track-wrap", style: Slider_assign({ flexGrow: 1, position: 'relative', touchAction: 'none' }, trackStyles) },
                        this.props.children && (index_js_.createElement("ul", { className: "k-reset k-slider-items", style: Slider_assign({ margin: 0 }, sliderItemsStyle) }, index_js_.Children.map(this.props.children, function (child) {
                            return child && index_js_.cloneElement(child, {
                                position: 100 * (child.props.position - _this.props.min) /
                                    (_this.props.max - _this.props.min),
                                vertical: _this.props.vertical
                            }, child.props.children);
                        }))),
                        index_js_.createElement("div", { className: "k-slider-track", style: this.props.vertical
                                ? { bottom: 0, height: '100%' }
                                : (_a = {}, _a[this.state.dir === 'rtl' ? 'right' : 'left'] = 0, _a.width = '100%', _a), ref: function (el) { return _this._sliderTrack = el; } },
                            index_js_.createElement("div", { className: "k-slider-selection", style: this.props.vertical
                                    ? { height: percentValue + '%' }
                                    : { width: percentValue + '%' } }),
                            index_js_.createElement("span", { role: "slider", "aria-valuemin": this.props.min, "aria-valuemax": this.props.max, "aria-valuenow": this.state.value, "aria-valuetext": String(this.state.value), "aria-orientation": this.props.vertical ? 'vertical' : undefined, "aria-disabled": this.props.disabled ? 'true' : undefined, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, "aria-label": this.props.ariaLabel, tabIndex: (0,main_js_.getTabIndex)(this.props.tabIndex, this.props.disabled, undefined), className: "k-draghandle", title: lS.toLanguageString(sliderDragTitle, messages[sliderDragTitle]), style: this.props.vertical
                                    ? { bottom: 'calc(' + percentValue + '%)', zIndex: 1 }
                                    : this.state.dir === 'rtl' ? { right: 'calc(' + percentValue + '% - 13px)', zIndex: 1 }
                                        : { left: 'calc(' + percentValue + '%)', zIndex: 1 } })))))));
    };
    Object.defineProperty(SliderWithoutContext.prototype, "sliderTrack", {
        /**
         * @hidden
         */
        get: function () {
            return this._sliderTrack;
        },
        enumerable: false,
        configurable: true
    });
    SliderWithoutContext.prototype.change = function (e, value) {
        value = Math.min(Math.max(value, this.props.min), this.props.max);
        this.setState({ value: value });
        (0,main_js_.dispatchEvent)(this.props.onChange, e, this, { value: value });
    };
    SliderWithoutContext.displayName = 'Slider';
    /**
     * @hidden
     */
    SliderWithoutContext.propTypes = {
        min: prop_types_index_js_.number.isRequired,
        max: prop_types_index_js_.number.isRequired,
        value: prop_types_index_js_.number,
        vertical: prop_types_index_js_.bool,
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string
        // TODO: validation when buttons is set to true, but no step is provided
    };
    return SliderWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `Slider` component.
 * Used for global configuration of all `Slider` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var SliderPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact Slider component]({% slug overview_slider %}).
 *
 * Accepts properties of type [SliderProps]({% slug api_inputs_sliderprops %}).
 * Obtaining the `ref` returns an object of type [SliderHandle]({% slug api_inputs_sliderhandle %}).
 */
var Slider = (0,main_js_.withPropsContext)(SliderPropsContext, SliderWithoutContext);
Slider.displayName = 'KendoReactSlider';
(0,index_mjs_.registerForLocalization)(SliderWithoutContext);

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/utils/color-cache.js
var cache = {};
/**
 * @hidden
 */
function cacheHsva(componentGuid, value, hsva) {
    cache[componentGuid] = { value: value, hsva: hsva };
}
/**
 * @hidden
 */
function cacheRgba(componentGuid, value, rgba) {
    cache[componentGuid] = { value: value, rgba: rgba };
}
/**
 * @hidden
 */
function cacheHex(componentGuid, value, hex) {
    cache[componentGuid] = { value: value, hex: hex };
}
/**
 * @hidden
 */
function removeCachedColor(componentGuid) {
    delete cache[componentGuid];
}
/**
 * @hidden
 */
function getCachedHex(componentGuid, value) {
    if (componentGuid) {
        var cachedColor = cache[componentGuid];
        return cachedColor && cachedColor.value === value ? cachedColor.hex : undefined;
    }
    else {
        return undefined;
    }
}
/**
 * @hidden
 */
function getCachedHsva(componentGuid, value) {
    if (componentGuid) {
        var cachedColor = cache[componentGuid];
        return cachedColor && cachedColor.value === value ? cachedColor.hsva : undefined;
    }
    else {
        return undefined;
    }
}
/**
 * @hidden
 */
function getCachedRgba(componentGuid, value) {
    if (componentGuid) {
        var cachedColor = cache[componentGuid];
        return cachedColor && cachedColor.value === value ? cachedColor.rgba : undefined;
    }
    else {
        return undefined;
    }
}

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorContrastLabels.js
var ColorContrastLabels_extends = (undefined && undefined.__extends) || (function () {
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
var ColorContrastLabels = /** @class */ (function (_super) {
    ColorContrastLabels_extends(ColorContrastLabels, _super);
    function ColorContrastLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorContrastLabels.prototype.render = function () {
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var contrastRatioMessage = localizationService.toLanguageString(colorGradientContrastRatio, messages[colorGradientContrastRatio]);
        var AALevelMessage = localizationService.toLanguageString(colorGradientAALevel, messages[colorGradientAALevel]);
        var AAALevelMessage = localizationService.toLanguageString(colorGradientAAALevel, messages[colorGradientAAALevel]);
        var passMessage = localizationService.toLanguageString(colorGradientPass, messages[colorGradientPass]);
        var failMessage = localizationService.toLanguageString(colorGradientFail, messages[colorGradientFail]);
        var contrast = getContrastFromTwoRGBAs(this.props.rgba, this.props.bgColor);
        var requiredAAContrast = (4.5).toFixed(1);
        var requiredAAAContrast = (7.0).toFixed(1);
        var contrastText = "".concat(contrastRatioMessage, ": ").concat(contrast.toFixed(2));
        var aaText = "".concat(AALevelMessage, ": ").concat(requiredAAContrast);
        var aaaText = "".concat(AAALevelMessage, ": ").concat(requiredAAAContrast);
        var success = (index_js_.createElement("span", { className: "k-contrast-validation k-text-success" },
            passMessage,
            " ",
            index_js_.createElement(main_js_.IconWrap, { name: "check", icon: index_es_js_.checkIcon })));
        var error = (index_js_.createElement("span", { className: "k-contrast-validation k-text-error" },
            failMessage,
            " ",
            index_js_.createElement(main_js_.IconWrap, { name: "x", icon: index_es_js_.xIcon })));
        return (index_js_.createElement("div", { className: "k-vbox k-colorgradient-color-contrast" },
            index_js_.createElement("div", { className: "k-contrast-ratio" },
                index_js_.createElement("span", { className: "k-contrast-ratio-text" }, contrastText),
                contrast >= 4.5 ? (index_js_.createElement("span", { className: "k-contrast-validation k-text-success" },
                    index_js_.createElement(main_js_.IconWrap, { name: "check", icon: index_es_js_.checkIcon }),
                    contrast >= 7 && index_js_.createElement(main_js_.IconWrap, { name: "check", icon: index_es_js_.checkIcon }))) : (index_js_.createElement("span", { className: "k-contrast-validation k-text-error" },
                    index_js_.createElement(main_js_.IconWrap, { name: "x", icon: index_es_js_.xIcon })))),
            index_js_.createElement("div", null,
                index_js_.createElement("span", null, aaText),
                contrast >= 4.5 ? success : error),
            index_js_.createElement("div", null,
                index_js_.createElement("span", null, aaaText),
                contrast >= 7 ? success : error)));
    };
    return ColorContrastLabels;
}(index_js_.Component));

(0,index_mjs_.registerForLocalization)(ColorContrastLabels);

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/utils/svg-calc.js
/**
 * @hidden
 *
 * Render the svg <path> element.
 *
 * @param points (array) Represents the points coordinates as an array of tuples.
 * @param command (function) The command that is used (bezierCommand, lineCommand).
 *      @param point (array) [x,y] Represents the current point coordinates.
 *      @param i (integer) Represents the index of 'point' in the array 'a'.
 *      @param a (array) Represents the complete array of points coordinates.
 *      @output (string) a svg path command.
 * @output (string) a Svg <path> element
 */
var svgPath = function (points, command) {
    if (points.length === 0) {
        return '';
    }
    // build the d attributes by looping over the points
    var d = points.reduce(function (acc, point, i, a) {
        return i === 0 ?
            // if first point
            "M ".concat(point[0], ",").concat(point[1]) :
            // else
            "".concat(acc, " ").concat(command(point, i, a));
    }, '');
    return "<path d=\"".concat(d, "\" fill=\"none\" stroke=\"white\" stroke-width=\"1\"/>");
};
/**
 * @hidden
 *
 * Returns the properties of a line.
 *
 * @param pointA (array) [x,y] Represents the start point coordinates.
 * @param pointB (array) [x,y] Represents the end point coordinates.
 * @output (object) { length: (integer), angle: (integer) }
 */
var line = function (pointA, pointB) {
    var lengthX = pointB[0] - pointA[0];
    var lengthY = pointB[1] - pointA[1];
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
    };
};
/**
 * @hidden
 *
 * Create a function to calculate the position of the control point.
 *
 * @param lineCalc (function) Represents the line function.
 *      @param pointA (array) [x,y] Represents the start point coordinates.
 *      @param pointB (array) [x,y] Represents the end point coordinates.
 *      @output (object) { length: (integer), angle: (integer) }
 * @output (function) closure.
 *      @param current (array) [x, y] Represents the current point coordinates.
 *      @param previous (array) [x, y] Represents the previous point coordinates.
 *      @param next (array) [x, y] ]Represents the next point coordinates.
 *      @param reverse (boolean, optional) Sets the direction.
 *      @output (array) [x, y] coordinates of a control point.
 */
var controlPoint = function (lineCalc) {
    return function (current, previous, next, reverse) {
        // when 'current' is the first or last point of the array
        // 'previous' and 'next' are undefined 
        // replace with 'current'
        var p = previous || current;
        var n = next || current;
        var smooth = 0.1;
        // properties of the line between previous and next 
        var l = lineCalc(p, n);
        // If is end-control-point, add PI to the angle to go backward
        var angle = l.angle + (reverse ? Math.PI : 0);
        var length = l.length * smooth;
        // The control point position is relative to the current point
        var x = current[0] + Math.cos(angle) * length;
        var y = current[1] + Math.sin(angle) * length;
        return [x, y];
    };
};
/**
 * @hidden
 *
 * Create a function to calculate a bezier curve command.
 *
 * @param controlPointCalc (function) Represents the controlPoint function.
 *      @param current (array) [x, y] Represents the current point coordinates.
 *      @param previous (array) [x, y] Represents the previous point coordinates.
 *      @param next (array) [x, y] ]Represents the next point coordinates.
 *      @param reverse (boolean, optional) Sets the direction.
 *      @output (array) [x, y] coordinates of a control point.
 * @output (function) closure.
 *      @param point (array) [x,y] Represents the current point coordinates.
 *      @param i (integer) Represents the index of 'point' in the array 'a'.
 *      @param a (array) Represents the complete array of points coordinates.
 *      @output (string) 'C x2,y2 x1,y1 x,y' Cubic bezier command.
 */
var bezierCommand = function (controlPointCalc) { return function (point, i, a) {
    // start control point
    var _a = controlPointCalc(a[i - 1], a[i - 2], point), cpsX = _a[0], cpsY = _a[1];
    // end control point
    var _b = controlPointCalc(point, a[i - 1], a[i + 1], true), cpeX = _b[0], cpeY = _b[1];
    return "C ".concat(cpsX, ",").concat(cpsY, " ").concat(cpeX, ",").concat(cpeY, " ").concat(point[0], ",").concat(point[1]);
}; };

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorContrastSvg.js
var ColorContrastSvg_extends = (undefined && undefined.__extends) || (function () {
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



var AA_CONTRAST = 4.5;
var AAA_CONTRAST = 7;
var STEP_COUNT = 16;
;
/**
 * @hidden
 */
var ColorContrastSvg = /** @class */ (function (_super) {
    ColorContrastSvg_extends(ColorContrastSvg, _super);
    function ColorContrastSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorContrastSvg.prototype.renderSvgCurveLine = function () {
        var _this = this;
        var gradientRectMetrics = this.props.metrics;
        var findValue = function (contrast, saturation, low, high, comparer) {
            var mid = (low + high) / 2;
            var hsva = Object.assign({}, _this.props.hsva, { s: saturation / gradientRectMetrics.width, v: 1 - mid / gradientRectMetrics.height });
            var currentContrast = getContrastFromTwoRGBAs(getRGBA(getColorFromHSV(hsva)), getRGBA(_this.props.backgroundColor || ''));
            if (low + 0.5 > high) {
                if (currentContrast < contrast + 1 && currentContrast > contrast - 1) {
                    return mid;
                }
                else {
                    return null;
                }
            }
            if (comparer(currentContrast, contrast)) {
                return findValue(contrast, saturation, low, high - (high - low) / 2, comparer);
            }
            return findValue(contrast, saturation, low + (high - low) / 2, high, comparer);
        };
        var getPaths = function (contrast, stepCount, reversed) {
            if (reversed === void 0) { reversed = false; }
            var points = [];
            for (var i = 0; i <= gradientRectMetrics.width; i += gradientRectMetrics.width / stepCount) {
                var value = findValue(contrast, i, 0, gradientRectMetrics.height, reversed ? (function (a, b) { return a < b; }) : (function (a, b) { return a > b; }));
                if (value !== null) {
                    points.push([i, value]);
                }
            }
            return points;
        };
        var bezierCommandCalc = bezierCommand(controlPoint(line));
        return svgPath(getPaths(AA_CONTRAST, STEP_COUNT), bezierCommandCalc) +
            svgPath(getPaths(AA_CONTRAST, STEP_COUNT, true), bezierCommandCalc) +
            svgPath(getPaths(AAA_CONTRAST, STEP_COUNT), bezierCommandCalc) +
            svgPath(getPaths(AAA_CONTRAST, STEP_COUNT, true), bezierCommandCalc);
    };
    ColorContrastSvg.prototype.shouldComponentUpdate = function (nextProps) {
        if (nextProps.hsva.h === this.props.hsva.h &&
            nextProps.hsva.a === this.props.hsva.a &&
            this.props.backgroundColor === nextProps.backgroundColor) {
            return false;
        }
        return true;
    };
    ColorContrastSvg.prototype.render = function () {
        return (index_js_.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: 'k-color-contrast-svg', dangerouslySetInnerHTML: { __html: this.renderSvgCurveLine() }, style: {
                position: 'absolute',
                overflow: 'visible',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                zIndex: 3
            } }));
    };
    return ColorContrastSvg;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorGradient.js
var ColorGradient_extends = (undefined && undefined.__extends) || (function () {
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














var FORMAT = 'rgba';
var DEFAULT_SELECTED_COLOR = 'rgba(255, 255, 255, 1)';
/** @hidden */
var ColorGradientWithoutContext = /** @class */ (function (_super) {
    ColorGradient_extends(ColorGradientWithoutContext, _super);
    function ColorGradientWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.wrapper = null;
        /**
         * @hidden
         */
        _this.onHexChange = function (hex, value, event) {
            if (_this.isUncontrolled) {
                var hsva = getHSV(value);
                _this.setState({ hsva: hsva, backgroundColor: getColorFromHue(hsva.h), rgba: getRGBA(value), hex: hex });
            }
            else {
                cacheHex(_this.state.guid, value, hex);
            }
            _this.dispatchChangeEvent(value, event, event.nativeEvent);
        };
        /**
         * @hidden
         */
        _this.onRgbaChange = function (rgba, event) {
            var value = getColorFromRGBA(rgba);
            if (_this.isUncontrolled) {
                var hsva = getHSV(value);
                var hex = parseColor(value, 'hex');
                _this.setState({ hsva: hsva, backgroundColor: getColorFromHue(hsva.h), rgba: rgba, hex: hex });
            }
            else {
                cacheRgba(_this.state.guid, value, rgba);
            }
            _this.dispatchChangeEvent(value, event.syntheticEvent, event.nativeEvent);
        };
        /**
         * @hidden
         */
        _this.onAlphaSliderChange = function (event) {
            _this.handleHsvaChange(Object.assign({}, _this.state.hsva, { a: event.value / 100 }), event.syntheticEvent, event.nativeEvent);
        };
        /**
         * @hidden
         */
        _this.onHueSliderChange = function (event) {
            _this.handleHsvaChange(Object.assign({}, _this.state.hsva, { h: event.value }), event.syntheticEvent, event.nativeEvent);
        };
        /**
         * @hidden
         */
        _this.onDrag = function (e) {
            _this.gradientWrapper.classList.add('k-dragging');
            _this.changePosition(e.event);
        };
        /**
         * @hidden
         */
        _this.onRelease = function () {
            _this.gradientWrapper.classList.remove('k-dragging');
        };
        /**
         * @hidden
         */
        _this.onGradientWrapperClick = function (event) {
            _this.changePosition(event);
        };
        /**
         * @hidden
         */
        _this.changePosition = function (event) {
            var gradientRectMetrics = _this.getGradientRectMetrics();
            var deltaX = event.clientX - gradientRectMetrics.left;
            var deltaY = event.clientY - gradientRectMetrics.top;
            var left = fitIntoBounds(deltaX, 0, gradientRectMetrics.width);
            var top = fitIntoBounds(deltaY, 0, gradientRectMetrics.height);
            var hsva = Object.assign({}, _this.state.hsva, { s: left / gradientRectMetrics.width, v: 1 - top / gradientRectMetrics.height });
            _this.handleHsvaChange(hsva, event, event.nativeEvent);
        };
        /**
         * @hidden
         */
        _this.onFocus = function (nativeEvent) {
            if (_this.props.onFocus) {
                _this.props.onFocus.call(undefined, { nativeEvent: nativeEvent, target: _this });
            }
        };
        /**
         * @hidden
         */
        _this.focus = function () {
            (0,main_js_.focusFirstFocusableChild)(_this.wrapper);
        };
        (0,main_js_.validatePackage)(packageMetadata);
        var value = props.value || props.defaultValue || parseColor(DEFAULT_SELECTED_COLOR, FORMAT);
        _this.state = Object.assign({}, ColorGradientWithoutContext.getStateFromValue(value), { isFirstRender: true, guid: (0,main_js_.guid)() });
        return _this;
    }
    /**
     * @hidden
     */
    ColorGradientWithoutContext.getDerivedStateFromProps = function (props, state) {
        if (props.value && !state.isFirstRender) {
            // The component is in controlled mode.
            return ColorGradientWithoutContext.getStateFromValue(props.value, state.guid);
        }
        return null;
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.componentDidMount = function () {
        this.setAlphaSliderBackground(this.state.backgroundColor);
        if (this.state.isFirstRender) {
            this.setState({ isFirstRender: false });
        }
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.componentWillUnmount = function () {
        removeCachedColor(this.state.guid);
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.componentDidUpdate = function (_, prevState) {
        if (prevState.backgroundColor !== this.state.backgroundColor) {
            this.setAlphaSliderBackground(this.state.backgroundColor);
        }
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.renderRectangleDragHandle = function () {
        var style = {};
        if (!this.state.isFirstRender) {
            var gradientRectMetrics = this.getGradientRectMetrics();
            var top_1 = (1 - this.state.hsva.v) * gradientRectMetrics.height;
            var left = this.state.hsva.s * gradientRectMetrics.width;
            style.top = "".concat(top_1, "px");
            style.left = "".concat(left, "px");
        }
        return (index_js_.createElement("div", { role: 'slider', tabIndex: (0,main_js_.getTabIndex)(this.props.tabIndex, this.props.disabled), "aria-valuetext": this.props.ariaValueText, "aria-valuenow": parseInt(this.state.hex.substring(1), 16), "aria-label": this.props.ariaLabelHSV, "aria-orientation": undefined, "aria-disabled": this.props.disabled ? 'true' : undefined, className: "k-hsv-draghandle k-draghandle", style: style }));
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.handleHsvaChange = function (hsva, syntheticEvent, nativeEvent) {
        var value = getColorFromHSV(hsva);
        if (this.isUncontrolled) {
            var hex = parseColor(value, 'hex');
            this.setState({ hsva: hsva, backgroundColor: getColorFromHue(hsva.h), rgba: getRGBA(value), hex: hex });
        }
        else {
            cacheHsva(this.state.guid, value, hsva);
        }
        this.dispatchChangeEvent(value, syntheticEvent, nativeEvent);
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.dispatchChangeEvent = function (value, syntheticEvent, nativeEvent) {
        if (this.props.onChange) {
            this.props.onChange.call(undefined, { syntheticEvent: syntheticEvent, nativeEvent: nativeEvent, target: this, value: value });
        }
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.getStateFromValue = function (value, componentGuid) {
        if (!isPresent(parseColor(value, 'hex'))) {
            // Validate/sanitize the input.
            value = DEFAULT_SELECTED_COLOR;
        }
        var hsva = getCachedHsva(componentGuid, value) || getHSV(value);
        var rgba = getCachedRgba(componentGuid, value) || getRGBA(value);
        var hex = getCachedHex(componentGuid, value) || parseColor(value, 'hex');
        var backgroundColor = getColorFromHue(hsva.h);
        return { hsva: hsva, backgroundColor: backgroundColor, rgba: rgba, hex: hex };
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.setAlphaSliderBackground = function (backgroundColor) {
        if (this.props.opacity && this.alphaSlider && this.alphaSlider.sliderTrack) {
            this.alphaSlider.sliderTrack.style.background = "linear-gradient(to top, transparent, ".concat(backgroundColor, ")");
        }
    };
    Object.defineProperty(ColorGradientWithoutContext.prototype, "isUncontrolled", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.value === undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.getGradientRectMetrics = function () {
        return this.gradientWrapper.getBoundingClientRect();
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.prototype.render = function () {
        var _this = this;
        var lS = (0,index_mjs_.provideLocalizationService)(this);
        var className = (0,main_js_.classNames)('k-colorgradient', { 'k-disabled': this.props.disabled }, this.props.className);
        return (index_js_.createElement("div", { id: this.props.id, role: this.props.role, className: className, "aria-disabled": this.props.disabled ? 'true' : undefined, style: this.props.style, ref: function (el) { return _this.wrapper = el; }, tabIndex: (0,main_js_.getTabIndex)(this.props.tabIndex, this.props.disabled), "aria-label": this.props.ariaLabel, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, onFocus: this.onFocus },
            index_js_.createElement("div", { className: "k-colorgradient-canvas k-hstack" },
                index_js_.createElement("div", { className: "k-hsv-rectangle", style: { background: this.state.backgroundColor } },
                    index_js_.createElement(main_js_.Draggable, { onDrag: this.onDrag, onRelease: this.onRelease, ref: function (el) { return _this.gradientWrapper = el ? el.element : undefined; } },
                        index_js_.createElement("div", { className: "k-hsv-gradient", style: { touchAction: 'none' }, onClick: this.onGradientWrapperClick }, this.renderRectangleDragHandle())),
                    this.props.backgroundColor && !this.state.isFirstRender &&
                        index_js_.createElement(ColorContrastSvg, { metrics: this.gradientWrapper ? this.getGradientRectMetrics() : undefined, hsva: this.state.hsva, backgroundColor: this.props.backgroundColor })),
                index_js_.createElement("div", { className: "k-hsv-controls k-hstack" },
                    index_js_.createElement(Slider, { value: this.state.hsva.h, buttons: false, vertical: true, min: 0, max: 360, step: 5, onChange: this.onHueSliderChange, className: "k-hue-slider k-colorgradient-slider", disabled: this.props.disabled, ariaLabel: lS.toLanguageString(colorGradientHueSliderLabel, messages[colorGradientHueSliderLabel]) }),
                    this.props.opacity &&
                        index_js_.createElement(Slider, { value: isPresent(this.state.hsva.a) ? this.state.hsva.a * 100 : 100, buttons: false, vertical: true, min: 0, max: 100, step: 1, ariaLabel: lS.toLanguageString(colorGradientAlphaSliderLabel, messages[colorGradientAlphaSliderLabel]), onChange: this.onAlphaSliderChange, className: "k-alpha-slider k-colorgradient-slider", disabled: this.props.disabled, ref: function (el) { return _this.alphaSlider = el; } }))),
            index_js_.createElement(colors_ColorInput, { rgba: this.state.rgba, onRgbaChange: this.onRgbaChange, hex: this.state.hex, onHexChange: this.onHexChange, opacity: this.props.opacity, disabled: this.props.disabled, defaultInputMode: this.props.format }),
            this.props.backgroundColor && (index_js_.createElement(ColorContrastLabels, { bgColor: getRGBA(this.props.backgroundColor), rgba: this.state.rgba }))));
    };
    ColorGradientWithoutContext.displayName = 'ColorGradient';
    /**
     * @hidden
     */
    ColorGradientWithoutContext.propTypes = {
        defaultValue: prop_types_index_js_.string,
        value: prop_types_index_js_.string,
        onChange: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        opacity: prop_types_index_js_.bool,
        backgroundColor: prop_types_index_js_.string,
        format: prop_types_index_js_.any,
        disabled: prop_types_index_js_.bool,
        style: prop_types_index_js_.any,
        id: prop_types_index_js_.string,
        role: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        className: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    ColorGradientWithoutContext.defaultProps = {
        opacity: true,
        role: 'textbox',
        format: 'rgb'
    };
    return ColorGradientWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `ColorGradient` component.
 * Used for global configuration of all `ColorGradient` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var ColorGradientPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact ColorGradient component]({% slug overview_colorgradient %}).
 *
 * Accepts properties of type [ColorGradientProps]({% slug api_inputs_colorgradientprops %}).
 * Obtaining the `ref` returns an object of type [ColorGradientHandle]({% slug api_inputs_colorgradienthandle %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <ColorGradient />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var ColorGradient = (0,main_js_.withPropsContext)(ColorGradientPropsContext, ColorGradientWithoutContext);
ColorGradient.displayName = 'KendoReactColorGradient';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/utils/color-palette.service.js


/**
 * @hidden
 */
var ColorPaletteService = /** @class */ (function () {
    function ColorPaletteService() {
        this.colorRows = [];
    }
    ColorPaletteService.prototype.setColorMatrix = function (palette, columns) {
        this.colorRows = [];
        if (!(isPresent(palette) && palette.length)) {
            return;
        }
        columns = columns || palette.length;
        for (var start = 0; start < palette.length; start += columns) {
            var row = palette.slice(start, columns + start);
            this.colorRows.push(row);
        }
    };
    ColorPaletteService.prototype.getCellCoordsFor = function (color) {
        var _this = this;
        if (!isPresent(color)) {
            return;
        }
        var parsedColor = color ? (0,parse_color/* default */.Ay)(color, true) : color;
        var colors = [color];
        if (isPresent(parsedColor)) {
            colors.push(parsedColor.toCss(), parsedColor.toCssRgba());
        }
        var _loop_1 = function (row) {
            var _loop_2 = function (col) {
                if (colors.some(function (c) { return c === _this.colorRows[row][col]; })) {
                    return { value: { row: row, col: col } };
                }
            };
            for (var col = 0; col < this_1.colorRows[row].length; col++) {
                var state_2 = _loop_2(col);
                if (typeof state_2 === "object")
                    return state_2;
            }
        };
        var this_1 = this;
        for (var row = 0; row < this.colorRows.length; row++) {
            var state_1 = _loop_1(row);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    ColorPaletteService.prototype.getColorAt = function (cellCoords) {
        if (!(isPresent(cellCoords) && isPresent(this.colorRows[cellCoords.row]))) {
            return;
        }
        return this.colorRows[cellCoords.row][cellCoords.col];
    };
    ColorPaletteService.prototype.getNextCell = function (current, horizontalStep, verticalStep) {
        if (!(isPresent(current) && isPresent(current.row) && isPresent(current.col))) {
            return { row: 0, col: 0 };
        }
        var row = this.clampIndex(current.row + verticalStep, this.colorRows.length - 1);
        var col = this.clampIndex(current.col + horizontalStep, this.colorRows[row].length - 1);
        return { row: row, col: col };
    };
    ColorPaletteService.prototype.clampIndex = function (index, max) {
        var minArrayIndex = 0;
        if (index < minArrayIndex) {
            return minArrayIndex;
        }
        if (index > max) {
            return max;
        }
        return index;
    };
    return ColorPaletteService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/models/palette-presets.js
/* eslint-disable max-len */
/**
 * @hidden
 */
var PALETTEPRESETS = {
    basic: {
        colors: ['#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4', ' ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7'],
        columns: 10
    },
    office: {
        colors: ['#ffffff', '#000000', '#e6e6e6', '#435569', '#4371c4', '#ed7e32', '#a5a4a5', '#febf04', '#5a9bd5', '#71ae48', '#f2f2f3', '#7f7f7f', '#d1cece', '#d5dde3', '#dae1f4', '#fce5d4', '#deeded', '#fff2cc', '#deeaf6', '#e1efd9', '#d7d8d8', '#585959', '#aeabab', '#adbaca', '#b4c5e7', '#f6caac', '#dbdbdb', '#ffe498', '#bcd6ee', '#c5e0b2', '#bfbfc0', '#3f3f3f', '#767070', '#8595b1', '#8fabdb', '#f5b183', '#c9c8c9', '#fed965', '#9bc4e5', '#a8d08d', '#a5a5a6', '#262625', '#393939', '#334050', '#2e5496', '#c45a11', '#7b7b7a', '#bf9000', '#2f75b5', '#548235', '#7f7f7f', '#0b0c0c', '#161616', '#222a34', '#203764', '#843d0b', '#525252', '#7f6000', '#1d4d79', '#375623'],
        columns: 10
    },
    apex: {
        colors: ['#ffffff', '#000000', '#c9c2d1', '#69676d', '#ceb966', '#9cb084', '#6bb1c9', '#6585cf', '#7e6bc9', '#a379bb', '#f2f2f2', '#7f7f7f', '#f4f2f5', '#e0e0e2', '#f5f1e0', '#ebefe6', '#e1eff4', '#e0e6f5', '#e5e1f4', '#ece4f1', '#d8d8d8', '#595959', '#e9e6ec', '#c2c1c5', '#ebe3c1', '#d7dfcd', '#c3dfe9', '#c1ceeb', '#cbc3e9', '#dac9e3', '#bfbfbf', '#3f3f3f', '#dedae3', '#a4a3a8', '#e1d5a3', '#c3cfb5', '#a6d0de', '#a2b5e2', '#b1a6de', '#c7aed6', '#a5a5a5', '#262626', '#9688a5', '#4e4d51', '#ae9638', '#758c5a', '#3d8da9', '#365bb0', '#533da9', '#7d4d99', '#7f7f7f', '#0c0c0c', '#635672', '#343336', '#746425', '#4e5d3c', '#295e70', '#243c75', '#372970', '#533366'],
        columns: 10
    },
    austin: {
        colors: ['#ffffff', '#000000', '#caf278', '#3e3d2d', '#94c600', '#71685a', '#ff6700', '#909465', '#956b43', '#fea022', '#f2f2f2', '#7f7f7f', '#f4fce4', '#dddcd0', '#efffc0', '#e3e1dc', '#ffe0cb', '#e8e9df', '#ece1d6', '#feecd2', '#d8d8d8', '#595959', '#e9f9c9', '#bbb9a1', '#dfff82', '#c8c3ba', '#ffc299', '#d2d4c0', '#dac3ad', '#fed9a6', '#bfbfbf', '#3f3f3f', '#dff7ae', '#ada598', '#cfff43', '#ada598', '#ffa365', '#bcbfa1', '#c8a585', '#fec67a', '#a5a5a5', '#262626', '#a9ea25', '#2e2d21', '#6f9400', '#544e43', '#bf4d00', '#6c6f4b', '#6f5032', '#d77b00', '#7f7f7f', '#0c0c0c', '#74a50f', '#1f1e16', '#4a6300', '#38342d', '#7f3300', '#484a32', '#4a3521', '#8f5200'],
        columns: 10
    },
    clarity: {
        colors: ['#ffffff', '#292934', '#f3f2dc', '#d2533c', '#93a299', '#ad8f67', '#726056', '#4c5a6a', '#808da0', '#79463d', '#f2f2f2', '#e7e7ec', '#e7e5b9', '#f6dcd8', '#e9ecea', '#eee8e0', '#e4dedb', '#d8dde3', '#e5e8ec', '#e9d6d3', '#d8d8d8', '#c4c4d1', '#d5d185', '#edbab1', '#d3d9d6', '#ded2c2', '#c9beb8', '#b2bcc8', '#ccd1d9', '#d3aea7', '#bfbfbf', '#8a8aa3', '#aca73b', '#e4978a', '#bec7c1', '#cdbba3', '#af9e94', '#8c9bac', '#b2bac6', '#bd857c', '#a5a5a5', '#56566e', '#56531d', '#a43925', '#6b7c72', '#866b48', '#554840', '#39434f', '#5c697b', '#5a342d', '#7f7f7f', '#3b3b4b', '#22210b', '#6d2619', '#47534c', '#594730', '#39302b', '#262d35', '#3d4652', '#3c231e'],
        columns: 10
    },
    slipstream: {
        colors: ['#ffffff', '#000000', '#b4dcfa', '#212745', '#4e67c8', '#5eccf3', '#a7ea52', '#5dceaf', '#ff8021', '#f14124', '#f2f2f2', '#7f7f7f', '#8bc9f7', '#c7cce4', '#dbe0f4', '#def4fc', '#edfadc', '#def5ef', '#ffe5d2', '#fcd9d3', '#d8d8d8', '#595959', '#4facf3', '#909aca', '#b8c2e9', '#beeafa', '#dbf6b9', '#beebdf', '#ffcca6', '#f9b3a7', '#bfbfbf', '#3f3f3f', '#0d78c9', '#5967af', '#94a3de', '#9ee0f7', '#caf297', '#9de1cf', '#ffb279', '#f68d7b', '#a5a5a5', '#262626', '#063c64', '#181d33', '#31479f', '#11b2eb', '#81d319', '#34ac8b', '#d85c00', '#c3260c', '#7f7f7f', '#0c0c0c', '#021828', '#101322', '#202f6a', '#0b769c', '#568c11', '#22725c', '#903d00', '#821908'],
        columns: 10
    },
    metro: {
        colors: ['#ffffff', '#000000', '#d6ecff', '#4e5b6f', '#7fd13b', '#ea157a', '#feb80a', '#00addc', '#738ac8', '#1ab39f', '#f2f2f2', '#7f7f7f', '#a7d6ff', '#d9dde4', '#e5f5d7', '#fad0e4', '#fef0cd', '#c5f2ff', '#e2e7f4', '#c9f7f1', '#d8d8d8', '#595959', '#60b5ff', '#b3bcca', '#cbecb0', '#f6a1c9', '#fee29c', '#8be6ff', '#c7d0e9', '#94efe3', '#bfbfbf', '#3f3f3f', '#007dea', '#8d9baf', '#b2e389', '#f272af', '#fed46b', '#51d9ff', '#aab8de', '#5fe7d5', '#a5a5a5', '#262626', '#003e75', '#3a4453', '#5ea226', '#af0f5b', '#c58c00', '#0081a5', '#425ea9', '#138677', '#7f7f7f', '#0c0c0c', '#00192e', '#272d37', '#3f6c19', '#750a3d', '#835d00', '#00566e', '#2c3f71', '#0c594f'],
        columns: 10
    },
    flow: {
        colors: ['#ffffff', '#000000', '#dbf5f9', '#04617b', '#0f6fc6', '#009dd9', '#0bd0d9', '#10cf9b', '#7cca62', '#a5c249', '#f2f2f2', '#7f7f7f', '#b2e9f2', '#b4ecfc', '#c7e2fa', '#c4eeff', '#c9fafc', '#c9faed', '#e4f4df', '#edf2da', '#d8d8d8', '#595959', '#76d9e8', '#6adafa', '#90c6f6', '#89deff', '#93f5f9', '#94f6db', '#cae9c0', '#dbe6b6', '#bfbfbf', '#3f3f3f', '#21b2c8', '#20c8f7', '#59a9f2', '#4fceff', '#5df0f6', '#5ff2ca', '#b0dfa0', '#c9da91', '#a5a5a5', '#262626', '#105964', '#02485c', '#0b5394', '#0075a2', '#089ca2', '#0b9b74', '#54a838', '#7e9532', '#7f7f7f', '#0c0c0c', '#062328', '#01303d', '#073763', '#004e6c', '#05686c', '#07674d', '#387025', '#546321'],
        columns: 10
    },
    hardcover: {
        colors: ['#ffffff', '#000000', '#ece9c6', '#895d1d', '#873624', '#d6862d', '#d0be40', '#877f6c', '#972109', '#aeb795', '#f2f2f2', '#7f7f7f', '#e1dca5', '#f2e0c6', '#f0d0c9', '#f6e6d5', '#f5f2d8', '#e7e5e1', '#fbc7bc', '#eef0e9', '#d8d8d8', '#595959', '#d0c974', '#e6c28d', '#e2a293', '#eeceaa', '#ece5b2', '#cfccc3', '#f78f7a', '#dee2d4', '#bfbfbf', '#3f3f3f', '#a29a36', '#daa454', '#d4735e', '#e6b681', '#e2d88c', '#b7b2a5', '#f35838', '#ced3bf', '#a5a5a5', '#262626', '#514d1b', '#664515', '#65281a', '#a2641f', '#a39428', '#655f50', '#711806', '#879464', '#7f7f7f', '#0c0c0c', '#201e0a', '#442e0e', '#431b11', '#6c4315', '#6d621a', '#433f35', '#4b1004', '#5a6243'],
        columns: 10
    },
    trek: {
        colors: ['#ffffff', '#000000', '#fbeec9', '#4e3b30', '#f0a22e', '#a5644e', '#b58b80', '#c3986d', '#a19574', '#c17529', '#f2f2f2', '#7f7f7f', '#f7e09e', '#e1d6cf', '#fcecd5', '#eddfda', '#f0e7e5', '#f3eae1', '#ece9e3', '#f5e3d1', '#d8d8d8', '#595959', '#f3cc5f', '#c4ad9f', '#f9d9ab', '#dcc0b6', '#e1d0cc', '#e7d5c4', '#d9d4c7', '#ebc7a3', '#bfbfbf', '#3f3f3f', '#d29f0f', '#a78470', '#f6c781', '#cba092', '#d2b9b2', '#dbc1a7', '#c6bfab', '#e1ac76', '#a5a5a5', '#262626', '#694f07', '#3a2c24', '#c87d0e', '#7b4b3a', '#926255', '#a17242', '#7b7153', '#90571e', '#7f7f7f', '#0c0c0c', '#2a1f03', '#271d18', '#855309', '#523226', '#614138', '#6b4c2c', '#524b37', '#603a14'],
        columns: 10
    },
    verve: {
        colors: ['#ffffff', '#000000', '#d2d2d2', '#666666', '#ff388c', '#e40059', '#9c007f', '#68007f', '#005bd3', '#00349e', '#f2f2f2', '#7f7f7f', '#bdbdbd', '#e0e0e0', '#ffd7e8', '#ffc6dc', '#ffb8f1', '#f1b2ff', '#c3dcff', '#b8cfff', '#d8d8d8', '#595959', '#9d9d9d', '#c1c1c1', '#ffafd1', '#ff8eba', '#ff71e4', '#e365ff', '#87baff', '#72a0ff', '#bfbfbf', '#3f3f3f', '#696969', '#a3a3a3', '#ff87ba', '#ff5597', '#ff2ad7', '#d519ff', '#4b98ff', '#2b71ff', '#a5a5a5', '#262626', '#343434', '#4c4c4c', '#e90062', '#ab0042', '#75005f', '#4e005f', '#00449e', '#002676', '#7f7f7f', '#0c0c0c', '#151515', '#333333', '#9b0041', '#72002c', '#4e003f', '#34003f', '#002d69', '#00194f'],
        columns: 10
    },
    monochrome: {
        colors: ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#ffffff'],
        columns: 12
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorPalette.js
var ColorPalette_extends = (undefined && undefined.__extends) || (function () {
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
var DEFAULT_TILE_SIZE = 24;
/**
 * @hidden
 */
var DEFAULT_COLUMNS_COUNT = 10;
/**
 * @hidden
 */
var DEFAULT_PRESET = 'office';
/** @hidden */
var ColorPaletteWithoutContext = /** @class */ (function (_super) {
    ColorPalette_extends(ColorPaletteWithoutContext, _super);
    function ColorPaletteWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.wrapper = null;
        _this.paletteService = null;
        _this.guid = (0,main_js_.guid)();
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this.wrapper) {
                _this.wrapper.focus();
            }
        };
        _this.onKeyDown = function (event) {
            switch (event.keyCode) {
                case main_js_.Keys.down:
                    _this.handleCellNavigation(0, 1);
                    break;
                case main_js_.Keys.up:
                    _this.handleCellNavigation(0, -1);
                    break;
                case main_js_.Keys.right:
                    _this.handleCellNavigation(1, 0);
                    break;
                case main_js_.Keys.left:
                    _this.handleCellNavigation(-1, 0);
                    break;
                case main_js_.Keys.enter:
                    _this.handleEnter(event);
                    break;
                default: return;
            }
            event.preventDefault();
        };
        _this.onColorClick = function (color, event) {
            if (_this.isUncontrolled) {
                _this.setState({ selectedColor: color, focusedColor: color });
            }
            else {
                _this.setState({ focusedColor: color });
            }
            _this.dispatchChangeEvent(color, event);
        };
        _this.onFocus = function (nativeEvent) {
            if (!_this.paletteService) {
                return;
            }
            _this.setState({ focusedColor: _this.state.selectedColor || _this.paletteService.colorRows[0][0] });
            if (_this.props.onFocus) {
                _this.props.onFocus.call(undefined, nativeEvent);
            }
        };
        _this.onBlur = function () {
            _this.setState({ focusedColor: undefined });
        };
        (0,main_js_.validatePackage)(packageMetadata);
        // The empty string for the `value` prop means no selection but controlled mode.
        _this.state = {
            selectedColor: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue,
            isFirstRender: true
        };
        return _this;
    }
    /**
     * @hidden
     */
    ColorPaletteWithoutContext.prototype.render = function () {
        var _this = this;
        var paletteInfo = this.getPaletteInfo();
        var svc = this.paletteService = new ColorPaletteService();
        svc.setColorMatrix(paletteInfo.colors, paletteInfo.columns);
        var selectedCellCoords = svc.getCellCoordsFor(this.state.selectedColor);
        var focusedCellCoords = svc.getCellCoordsFor(this.state.focusedColor);
        var className = (0,main_js_.classNames)('k-colorpalette', { 'k-disabled': this.props.disabled }, this.props.className);
        if (paletteInfo.colors.length) {
            return (index_js_.createElement("div", { id: this.props.id, role: "grid", className: className, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, "aria-disabled": this.props.ariaDisabled || (this.props.disabled ? 'true' : undefined), "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, tabIndex: (0,main_js_.getTabIndex)(this.props.tabIndex, this.props.disabled), ref: function (el) { return _this.wrapper = el; } },
                index_js_.createElement("table", { className: "k-colorpalette-table", role: "presentation" },
                    index_js_.createElement("tbody", { role: "rowgroup" }, this.renderRows(svc.colorRows, selectedCellCoords, focusedCellCoords)))));
        }
        else {
            // In this way, the code prevents an eventual focus of the component when no cells are available.
            // This is needed because upon focus the first cell gets focused.
            return '';
        }
    };
    /**
     * @hidden
     */
    ColorPaletteWithoutContext.getDerivedStateFromProps = function (props, state) {
        if (!state.isFirstRender && props.value !== undefined) {
            // The component is in controlled mode.
            if (props.value === '' && state.selectedColor !== undefined) {
                // The selection has to be removed.
                return { selectedColor: undefined };
            }
            else if (props.value !== '' && props.value !== state.selectedColor) {
                return { selectedColor: props.value };
            }
        }
        else if (state.isFirstRender) {
            return { isFirstRender: false };
        }
        return null;
    };
    ColorPaletteWithoutContext.prototype.handleCellNavigation = function (horizontalStep, verticalStep) {
        if (!this.paletteService) {
            return;
        }
        if (this.focusedColorCooridanates) {
            var newCoords = this.paletteService.getNextCell(this.focusedColorCooridanates, horizontalStep, verticalStep);
            this.setState({ focusedColor: this.paletteService.getColorAt(newCoords) });
        }
        else {
            this.setState({ focusedColor: this.paletteService.colorRows[0][0] });
        }
    };
    ColorPaletteWithoutContext.prototype.handleEnter = function (event) {
        if (this.isUncontrolled) {
            this.setState({ selectedColor: this.state.focusedColor });
        }
        this.dispatchChangeEvent(this.state.focusedColor, event);
    };
    ColorPaletteWithoutContext.prototype.dispatchChangeEvent = function (value, event) {
        (0,main_js_.dispatchEvent)(this.props.onChange, event, this, { value: value, rgbaValue: parseColor(value, 'rgba') });
    };
    Object.defineProperty(ColorPaletteWithoutContext.prototype, "focusedColorCooridanates", {
        get: function () {
            return this.state.focusedColor && this.paletteService ? this.paletteService.getCellCoordsFor(this.state.focusedColor) : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorPaletteWithoutContext.prototype, "isUncontrolled", {
        get: function () {
            return this.props.value === undefined;
        },
        enumerable: false,
        configurable: true
    });
    ColorPaletteWithoutContext.prototype.getPaletteInfo = function () {
        if (typeof this.props.palette === 'string') {
            var preset = PALETTEPRESETS[this.props.palette];
            if (isPresent(preset)) {
                return {
                    colors: preset.colors,
                    columns: this.props.columns || preset.columns || DEFAULT_COLUMNS_COUNT
                };
            }
            else {
                return { colors: [], columns: 0 };
            }
        }
        else {
            return { colors: this.props.palette || [], columns: this.props.columns || DEFAULT_COLUMNS_COUNT };
        }
    };
    ColorPaletteWithoutContext.prototype.renderRows = function (rows, selectedCellCoords, focusedCellCoords) {
        var _this = this;
        return rows.map(function (row, i) {
            return index_js_.createElement("tr", { role: "row", key: i }, _this.renderColumns(row, i, selectedCellCoords, focusedCellCoords));
        });
    };
    ColorPaletteWithoutContext.prototype.renderColumns = function (columns, rowIndex, selectedCellCoords, focusedCellCoords) {
        var _this = this;
        var rowIsSelected = selectedCellCoords !== undefined && selectedCellCoords.row === rowIndex;
        var selectedColumn = selectedCellCoords && selectedCellCoords.col;
        var rowIsFocused = focusedCellCoords !== undefined && focusedCellCoords.row === rowIndex;
        var focusedColumn = focusedCellCoords && focusedCellCoords.col;
        var tileSize = typeof this.props.tileSize !== 'number' ?
            this.props.tileSize : { width: this.props.tileSize, height: this.props.tileSize };
        var width = tileSize.width + 'px';
        var height = tileSize.height + 'px';
        return columns.map(function (color, i) {
            var isSelected = rowIsSelected && selectedColumn === i;
            var className = (0,main_js_.classNames)('k-colorpalette-tile', {
                'k-selected': isSelected,
                'k-focus': rowIsFocused && focusedColumn === i
            });
            return (index_js_.createElement("td", { role: "gridcell", className: className, "aria-label": color, "aria-selected": isSelected ? true : _this.props.disabled ? undefined : false, style: { backgroundColor: color, width: width, height: height, minWidth: width }, onClick: function (event) { return _this.onColorClick(color, event); }, id: _this.createCellId({ row: rowIndex, col: i }), key: i }));
        });
    };
    ColorPaletteWithoutContext.prototype.createCellId = function (cellCoords) {
        return "".concat(this.guid, "_").concat(cellCoords.row, "_").concat(cellCoords.col);
    };
    ColorPaletteWithoutContext.displayName = 'ColorPalette';
    /**
     * @hidden
     */
    ColorPaletteWithoutContext.propTypes = {
        palette: prop_types_index_js_.oneOfType([prop_types_index_js_.arrayOf(prop_types_index_js_.string.isRequired), prop_types_index_js_.string]),
        columns: prop_types_index_js_.number,
        tileSize: prop_types_index_js_.any,
        defaultValue: prop_types_index_js_.string,
        value: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        onChange: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        className: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    ColorPaletteWithoutContext.defaultProps = {
        palette: DEFAULT_PRESET,
        tileSize: DEFAULT_TILE_SIZE
    };
    return ColorPaletteWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `ColorPalette` component.
 * Used for global configuration of all `ColorPalette` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var ColorPalettePropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact ColorPalette component]({% slug overview_colorpalette %}).
 *
 * Accepts properties of type [ColorPaletteProps]({% slug api_inputs_colorpaletteprops %}).
 * Obtaining the `ref` returns an object of type [ColorPaletteHandle]({% slug api_inputs_colorpalettehandle %}).
 *
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <ColorPalette palette='basic' />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var ColorPalette = (0,main_js_.withPropsContext)(ColorPalettePropsContext, ColorPaletteWithoutContext);
ColorPalette.displayName = 'KendoReactColorPalette';

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var kendo_react_popup_dist_es_main_js_ = __webpack_require__(989);
;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/Picker.js
var Picker_assign = (undefined && undefined.__assign) || function () {
    Picker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Picker_assign.apply(this, arguments);
};



/**
 * @hidden
 */
var ANCHOR_VERTICAL_ALIGN = 'bottom';
/**
 * @hidden
 */
var POPUP_VERTICAL_ALIGN = 'top';
/**
 * @hidden
 */
var Picker = function (props) {
    var popupSettings = props.popupSettings || {};
    var horizontalAlign = props.dir === 'rtl' ? 'right' : 'left';
    var anchorAlign = index_js_.useMemo(function () { return ({ horizontal: horizontalAlign, vertical: ANCHOR_VERTICAL_ALIGN }); }, [horizontalAlign]);
    var popupAlign = index_js_.useMemo(function () { return ({ horizontal: horizontalAlign, vertical: POPUP_VERTICAL_ALIGN }); }, [horizontalAlign]);
    return (index_js_.createElement(index_js_.Fragment, null,
        props.input,
        props.button,
        index_js_.createElement(kendo_react_popup_dist_es_main_js_.Popup, Picker_assign({ style: Picker_assign(Picker_assign({}, (popupSettings || {}).style), { direction: props.dir }) }, popupSettings, { anchor: props.popupAnchor, anchorAlign: anchorAlign, popupAlign: popupAlign, show: props.open, onOpen: props.onOpen, onClose: props.onClose, className: (0,main_js_.classNames)('k-reset', popupSettings.className) }), props.content)));
};
Picker.displayName = 'KendoPickerComponent';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/ColorPicker.js
var ColorPicker_assign = (undefined && undefined.__assign) || function () {
    ColorPicker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ColorPicker_assign.apply(this, arguments);
};












/**
 * @hidden
 */
var DEFAULT_GRADIENT_SETTINGS = {
    opacity: true
};
/**
 * @hidden
 */
var DEFAULT_PALETTE_SETTINGS = {
    palette: DEFAULT_PRESET,
    tileSize: DEFAULT_TILE_SIZE
};
/**
 * @hidden
 */
var isControlled = function (prop) {
    return prop !== undefined;
};
/**
 * Represents the PropsContext of the `ColorPicker` component.
 * Used for global configuration of all `ColorPicker` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var ColorPickerPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact ColorPicker component]({% slug overview_colorpicker %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <ColorPicker />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var ColorPicker = index_js_.forwardRef(function (directProps, target) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(ColorPickerPropsContext, directProps);
    var localization = (0,index_mjs_.useLocalization)();
    var _b = props.size, size = _b === void 0 ? defaultProps.size : _b, _c = props.rounded, rounded = _c === void 0 ? defaultProps.rounded : _c, _d = props.fillMode, fillMode = _d === void 0 ? defaultProps.fillMode : _d, popupSettings = props.popupSettings, gradientSettings = props.gradientSettings, paletteSettings = props.paletteSettings, valid = props.valid, disabled = props.disabled, tabIndex = props.tabIndex, view = props.view, icon = props.icon, svgIcon = props.svgIcon, iconClassName = props.iconClassName, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onActiveColorClick = props.onActiveColorClick, className = props.className;
    var focusableElementRef = index_js_.useRef(null);
    var gradientRef = index_js_.useRef(null);
    var paletteRef = index_js_.useRef(null);
    var blurTimeoutRef = index_js_.useRef();
    var buttonRef = index_js_.useRef(null);
    var _e = index_js_.useState(false), focused = _e[0], setFocused = _e[1];
    var _f = index_js_.useState(props.defaultValue), stateValue = _f[0], setStateValue = _f[1];
    var _g = index_js_.useState(false), stateOpen = _g[0], setStateOpen = _g[1];
    var isValueControlled = isControlled(props.value);
    var isOpenControlled = isControlled(props.open);
    var value = isValueControlled ? props.value : stateValue;
    var open = isOpenControlled ? props.open : stateOpen;
    var focusElement = index_js_.useCallback(function () {
        if (focusableElementRef.current) {
            focusableElementRef.current.focus();
        }
    }, []);
    index_js_.useImperativeHandle(target, function () { return ({
        // we agreed that each element will have focus method exposed
        element: focusableElementRef.current,
        actionElement: buttonRef.current,
        value: value,
        focus: focusElement
    }); }, [value, focusElement]);
    var setOpen = index_js_.useCallback(function (nextOpen, isBlur) {
        if (!isOpenControlled) {
            if (!nextOpen && !isBlur && focusableElementRef && focusableElementRef.current) {
                focusableElementRef.current.focus();
            }
            setStateOpen(nextOpen);
        }
    }, [isOpenControlled]);
    var onKeyDownHandler = index_js_.useCallback(function (event) {
        var altKey = event.altKey, keyCode = event.keyCode;
        if (keyCode === main_js_.Keys.esc) {
            setOpen(false);
            return;
        }
        if (keyCode === main_js_.Keys.enter && !isOpenControlled) {
            event.preventDefault();
            event.stopPropagation();
            setOpen(!open);
            return;
        }
        if (altKey && (keyCode === main_js_.Keys.up || keyCode === main_js_.Keys.down)) {
            event.preventDefault();
            event.stopPropagation();
            if (keyCode === main_js_.Keys.up && focusableElementRef && focusableElementRef.current) {
                focusableElementRef.current.focus();
                setOpen(false);
            }
            if (keyCode === main_js_.Keys.down) {
                setOpen(true);
            }
        }
    }, [open, isOpenControlled]);
    var onOpenHandler = index_js_.useCallback(function () {
        // Skip content autofocus when in controlled mode
        if (!isOpenControlled) {
            if (gradientRef.current) {
                gradientRef.current.focus();
            }
            else if (paletteRef.current) {
                paletteRef.current.focus();
            }
        }
    }, [isOpenControlled]);
    var onClickHandler = index_js_.useCallback(function () {
        setOpen(!open, true);
    }, [open]);
    var onActiveColorClickHandler = index_js_.useCallback(function (event) {
        if (onActiveColorClick) {
            onActiveColorClick.call(undefined, {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                value: value
            });
        }
    }, [onActiveColorClick, value]);
    var onFocusHandler = index_js_.useCallback(function (event) {
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
            blurTimeoutRef.current = undefined;
            // case where moving back to input from popup
            // if (event.target === focusableElementRef.current) {
            // setOpen(false); // in this case we should focus input on keydown
            // }
        }
        else {
            setFocused(true);
        }
        if (onFocus) {
            onFocus.call(undefined, {
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            });
        }
    }, [onFocus]);
    var onBlurTimeout = index_js_.useCallback(function () {
        setOpen(false, true);
        setFocused(false);
        blurTimeoutRef.current = undefined;
    }, []);
    var onBlurHandler = index_js_.useCallback(function (event) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = window.setTimeout(onBlurTimeout);
        if (onBlur) {
            onBlur.call(undefined, {
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            });
        }
    }, [onBlur]);
    var onChangeHandler = index_js_.useCallback(function (event, isPalette) {
        var currentValue = isPalette ? event.rgbaValue : event.value;
        if (!isValueControlled) {
            setStateValue(currentValue);
        }
        if (isPalette) {
            setOpen(false);
        }
        if (onChange) {
            onChange.call(undefined, {
                value: currentValue,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event.syntheticEvent
            });
        }
    }, [isValueControlled, onChange]);
    var onPaletteChangeHandler = index_js_.useCallback(function (event) { return onChangeHandler(event, true); }, [isControlled, onChangeHandler]);
    var dir = (0,main_js_.useDir)(focusableElementRef, props.dir);
    var isValid = valid !== false;
    return (index_js_.createElement("span", { id: props.id, role: 'combobox', "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy, "aria-haspopup": 'dialog', "aria-expanded": open, "aria-disabled": disabled ? 'true' : undefined, className: (0,main_js_.classNames)('k-colorpicker', 'k-picker', 'k-icon-picker', (_a = {},
            _a["k-picker-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a["k-picker-".concat(fillMode)] = fillMode,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
            _a['k-invalid'] = !isValid,
            _a['k-disabled'] = disabled,
            _a['k-focus'] = focused,
            _a)), ref: focusableElementRef, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), title: props.title, onKeyDown: onKeyDownHandler, onFocus: onFocusHandler, onBlur: onBlurHandler, dir: dir },
        index_js_.createElement(Picker, { dir: dir, open: open, onOpen: onOpenHandler, popupAnchor: focusableElementRef.current || undefined, popupSettings: ColorPicker_assign({}, popupSettings), input: (index_js_.createElement("span", { onClick: onActiveColorClickHandler, className: 'k-input-inner' },
                index_js_.createElement("span", { className: (0,main_js_.classNames)('k-value-icon', 'k-color-preview', {
                        'k-no-color': !value,
                        'k-icon-color-preview': (icon || svgIcon || iconClassName)
                    }, className) },
                    iconClassName && index_js_.createElement("span", { className: (0,main_js_.classNames)('k-color-preview-icon', iconClassName) }),
                    !iconClassName && (icon || svgIcon) && index_js_.createElement(main_js_.IconWrap, { name: icon, icon: svgIcon }),
                    index_js_.createElement("span", { className: "k-color-preview-mask", style: { backgroundColor: value } })))), button: (index_js_.createElement(dist_es_main_js_.Button, { tabIndex: -1, type: "button", onClick: onClickHandler, className: "k-input-button", rounded: null, icon: 'caret-alt-down', svgIcon: index_es_js_.caretAltDownIcon, "aria-label": localization.toLanguageString(colorPickerDropdownButtonAriaLabel, messages[colorPickerDropdownButtonAriaLabel]) })), content: (index_js_.createElement(index_js_.Fragment, null,
                (view === 'combo' || view === 'gradient') && (index_js_.createElement(ColorGradient, ColorPicker_assign({}, gradientSettings, { tabIndex: 0, ref: gradientRef, value: value, onChange: onChangeHandler }))),
                (view === 'combo' || view === 'palette') && (index_js_.createElement(ColorPalette, ColorPicker_assign({}, paletteSettings, { ref: paletteRef, value: value, onChange: onPaletteChangeHandler }))))) })));
});
ColorPicker.propTypes = {
    value: prop_types_index_js_.string,
    defaultValue: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    view: prop_types_index_js_.oneOf(['gradient', 'palette', 'combo']),
    dir: prop_types_index_js_.string,
    id: prop_types_index_js_.string,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    ariaLabelledBy: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline']),
    className: prop_types_index_js_.string
};
var defaultProps = {
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid',
    view: 'palette',
    gradientSettings: DEFAULT_GRADIENT_SETTINGS,
    paletteSettings: DEFAULT_PALETTE_SETTINGS
};
ColorPicker.defaultProps = defaultProps;
ColorPicker.displayName = 'KendoColorPicker';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/colors/FlatColorPicker.js
/* eslint-disable max-len */









var defaultColor = 'rgba(255, 255, 255, 1)';
;
;
/**
 * Represents the [KendoReact FlatColorPicker component]({% slug overview_flatcolorpicker %}).
 * Accepts properties of type [FlatColorPickerProps]({% slug api_inputs_flatcolorpickerprops %}). Obtaining the [FlatColorPickerHandle]({% slug api_inputs_flatcolorpickerhandle %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <FlatColorPicker />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var FlatColorPicker = index_js_.forwardRef(function (props, ref) {
    (0,main_js_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var flatColorPickerRef = index_js_.useRef(null);
    var colorGradientRef = index_js_.useRef(null);
    var _a = props.defaultValue, defaultValue = _a === void 0 ? defaultColor : _a, _b = props.showButtons, showButtons = _b === void 0 ? true : _b, _c = props.showPreview, showPreview = _c === void 0 ? true : _c, _d = props.showClearButton, showClearButton = _d === void 0 ? true : _d;
    var _e = index_js_.useState((props.view || 'ColorGradient') === 'ColorGradient'), colorGradientView = _e[0], setColorGradientView = _e[1];
    var _f = index_js_.useState(props.value || defaultValue), colorValue = _f[0], setColorValue = _f[1];
    var _g = index_js_.useState(props.value || defaultValue), prevColor = _g[0], setPrevColor = _g[1];
    var value = props.value !== undefined ? props.value : prevColor;
    index_js_.useEffect(function () {
        setColorValue(props.value || defaultValue);
    }, [props.value, defaultValue]);
    var localizationService = (0,index_mjs_.useLocalization)();
    var focus = index_js_.useCallback(function () {
        if (target.current) {
            target.current.focus();
        }
    }, [target]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: flatColorPickerRef.current,
        focus: focus,
        props: props,
        value: value
    }); }, [value, focus, props]);
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var handleViewChange = index_js_.useCallback(function (viewType) {
        if ((viewType === 'ColorGradient' && !colorGradientView) || (viewType === 'ColorPalette' && colorGradientView)) {
            setColorGradientView(!colorGradientView);
        }
    }, [colorGradientView]);
    var handleResetColor = index_js_.useCallback(function (event) {
        setColorValue(defaultValue);
        if (props.onPreviewChange) {
            var ev = {
                value: defaultValue,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            };
            props.onPreviewChange.call(undefined, ev);
        }
    }, [defaultValue, props.onPreviewChange]);
    var handleColorChange = index_js_.useCallback(function (event) {
        setColorValue(event.value);
        if (props.onPreviewChange) {
            var ev = {
                value: event.value,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event.syntheticEvent
            };
            props.onPreviewChange.call(undefined, ev);
        }
    }, [props.onPreviewChange]);
    var handleApplyBtnClick = index_js_.useCallback(function (event) {
        setPrevColor(colorValue);
        if (props.onChange) {
            var ev = {
                value: colorValue,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            };
            props.onChange.call(undefined, ev);
        }
    }, [colorValue, props.onChange]);
    var handleCancelBtnClick = index_js_.useCallback(function () {
        setPrevColor(defaultColor);
    }, []);
    var handlePrevColorClick = index_js_.useCallback(function (event) {
        setColorValue(prevColor);
        if (props.onPreviewChange) {
            var ev = {
                value: prevColor,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            };
            props.onPreviewChange.call(undefined, ev);
        }
    }, [prevColor, props.onPreviewChange]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (flatColorPickerRef.current && event.nativeEvent.target instanceof HTMLInputElement === false) {
            flatColorPickerRef.current.focus();
        }
    }, [flatColorPickerRef]);
    var handleFlatColorPickerBlur = index_js_.useCallback(function (event) {
        var _a;
        var blurred = (!event.relatedTarget || !((_a = flatColorPickerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget)));
        if (!blurred) {
            return;
        }
        if (!showButtons) {
            setPrevColor(colorValue);
        }
        if (!showButtons && props.onChange) {
            var ev = {
                value: colorValue,
                nativeEvent: event.nativeEvent,
                syntheticEvent: event
            };
            props.onChange.call(undefined, ev);
        }
    }, [colorValue, showButtons, props.onChange]);
    return (index_js_.createElement("div", { id: props.id, role: 'textbox', "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-disabled": props.disabled ? 'true' : undefined, style: props.style, ref: flatColorPickerRef, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), className: (0,main_js_.classNames)('k-flatcolorpicker k-coloreditor', {
            'k-disabled': props.disabled
        }, props.className), onBlur: handleFlatColorPickerBlur },
        index_js_.createElement(index_js_.Fragment, null,
            props.header ||
                index_js_.createElement("div", { className: "k-coloreditor-header k-hstack" },
                    index_js_.createElement("div", { className: "k-coloreditor-header-actions k-hstack" },
                        index_js_.createElement(dist_es_main_js_.ButtonGroup, { className: "k-button-group-flat" },
                            index_js_.createElement(dist_es_main_js_.Button, { type: "button", "aria-label": localizationService.toLanguageString(flatColorPickerColorGradientBtn, messages[flatColorPickerColorGradientBtn]), togglable: true, fillMode: 'flat', selected: colorGradientView, onClick: function () { return handleViewChange('ColorGradient'); }, icon: "droplet-slider", svgIcon: index_es_js_.dropletSliderIcon }),
                            index_js_.createElement(dist_es_main_js_.Button, { type: "button", "aria-label": localizationService.toLanguageString(flatColorPickerColorPaletteBtn, messages[flatColorPickerColorPaletteBtn]), togglable: true, fillMode: 'flat', selected: !colorGradientView, onClick: function () { return handleViewChange('ColorPalette'); }, icon: "palette", svgIcon: index_es_js_.paletteIcon }))),
                    index_js_.createElement("div", { className: "k-spacer" }),
                    index_js_.createElement("div", { className: "k-coloreditor-header-actions k-hstack" },
                        showClearButton &&
                            index_js_.createElement(dist_es_main_js_.Button, { type: "button", fillMode: 'flat', onClick: handleResetColor, "aria-label": localizationService.toLanguageString(flatColorPickerClearBtn, messages[flatColorPickerClearBtn]), icon: "droplet-slash", svgIcon: index_es_js_.dropletSlashIcon }),
                        showPreview &&
                            index_js_.createElement("div", { className: "k-coloreditor-preview k-vstack" },
                                index_js_.createElement("span", { className: "k-coloreditor-preview-color k-color-preview", style: { background: colorValue } }),
                                index_js_.createElement("span", { className: "k-coloreditor-current-color k-color-preview", style: { background: prevColor }, onClick: handlePrevColorClick })))),
            index_js_.createElement("div", { className: "k-coloreditor-views k-vstack" }, colorGradientView
                ? index_js_.createElement(ColorGradient, { ref: colorGradientRef, role: "none", tabIndex: -1, ariaLabel: undefined, value: colorValue, onChange: handleColorChange, onFocus: handleFocus, opacity: props.opacity, format: props.format })
                : index_js_.createElement(ColorPalette, { ariaDisabled: true, ariaLabelledBy: 'required_label', value: colorValue, onChange: handleColorChange, onFocus: handleFocus })),
            showButtons &&
                index_js_.createElement("div", { className: "k-coloreditor-footer k-actions k-actions-end" },
                    index_js_.createElement(dist_es_main_js_.Button, { type: "button", className: "k-coloreditor-cancel", onClick: handleCancelBtnClick }, messages[flatColorPickerCancelBtn]),
                    index_js_.createElement(dist_es_main_js_.Button, { type: "button", className: "k-coloreditor-apply k-primary", onClick: handleApplyBtnClick }, messages[flatColorPickerApplyBtn])))));
});
var propTypes = {
    id: prop_types_index_js_.string,
    style: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    value: prop_types_index_js_.string,
    defaultValue: prop_types_index_js_.string,
    onPreviewChange: prop_types_index_js_.func,
    onChange: prop_types_index_js_.func,
    opacity: prop_types_index_js_.bool,
    format: prop_types_index_js_.any,
    tabIndex: prop_types_index_js_.number,
    ariaLabel: prop_types_index_js_.string,
    ariaLabelledBy: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    view: prop_types_index_js_.any,
    header: prop_types_index_js_.any,
    showClearButton: prop_types_index_js_.bool,
    showPreview: prop_types_index_js_.bool,
    showButtons: prop_types_index_js_.bool
};
FlatColorPicker.displayName = 'KendoFlatColorPicker';
FlatColorPicker.propTypes = propTypes;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/parsing/result.js
/**
 * @hidden
 */
var ResultType;
(function (ResultType) {
    ResultType[ResultType["Literal"] = 0] = "Literal";
    ResultType[ResultType["Mask"] = 1] = "Mask";
    ResultType[ResultType["Undefined"] = 2] = "Undefined";
})(ResultType || (ResultType = {}));
/**
 * @hidden
 */
var Result = /** @class */ (function () {
    function Result(value, rest, type) {
        if (type === void 0) { type = ResultType.Undefined; }
        this.value = value;
        this.rest = rest;
        this.type = type;
    }
    // map :: Functor f => f a ~> (a -> b) -> f b
    Result.prototype.map = function (fn) {
        return new Result(fn(this.value), this.rest);
    };
    // chain :: Chain m => m a ~> (a -> m b) -> m b
    Result.prototype.chain = function (fn) {
        return fn(this.value, this.rest);
    };
    Result.prototype.fold = function (s, _ /* we don't need it*/) {
        return s(this.value, this.rest);
    };
    Result.prototype.concat = function (r) {
        return this.map(function (vs, _) { return r.chain(function (v, __) { return vs.concat([v]); }); });
    };
    Result.prototype.toString = function () {
        return "Result({ value: '".concat(this.value, "', rest: ").concat(this.rest, " })");
    };
    return Result;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/parsing/stream.js
/**
 * @hidden
 */
var Stream = /** @class */ (function () {
    function Stream(input, control) {
        if (input === void 0) { input = []; }
        if (control === void 0) { control = []; }
        this.input = input;
        this.control = control;
        this.inputCursor = 0;
        this.controlCursor = 0;
    }
    Stream.prototype.eof = function () {
        return this.inputCursor >= this.input.length;
    };
    // Get the first value from the input.
    Stream.prototype.next = function () {
        return {
            char: this.input[this.inputCursor++],
            control: this.control[this.controlCursor++]
        };
    };
    Stream.prototype.peek = function () {
        return {
            char: this.input[this.inputCursor],
            control: this.control[this.controlCursor]
        };
    };
    Stream.prototype.eat_input = function () {
        this.inputCursor++;
    };
    Stream.prototype.eat_control = function () {
        this.controlCursor++;
    };
    Stream.prototype.eat = function () {
        this.inputCursor++;
        this.controlCursor++;
    };
    return Stream;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/parsing/parsers.js


var toArray = function (value) { return (value || '').split(''); };
var ESCAPE_CHARACTER = '\\';
/**
 * @hidden
 */
var Parser = /** @class */ (function () {
    function Parser(parse) {
        this.parse = parse;
    }
    Parser.prototype.run = function (input, control) {
        if (control === void 0) { control = ''; }
        if (input instanceof Stream) {
            return this.parse(input);
        }
        else {
            return this.parse(new Stream(toArray(input), toArray(control)));
        }
    };
    // map :: Functor f => f a ~> (a -> b) -> f b
    Parser.prototype.map = function (f) {
        var _this = this;
        return new Parser(function (stream) { return _this.parse(stream).map(f); });
    };
    // chain :: Chain m => m a ~> (a -> m b) -> m b
    Parser.prototype.chain = function (f) {
        var _this = this;
        return new Parser(function (stream) { return _this.parse(stream).chain(function (v, s) { return f(v).run(s); }); });
    };
    Parser.prototype.isLiteral = function (c) {
        return this.run(c).type === ResultType.Literal;
    };
    return Parser;
}());

/**
 * @hidden
 */
var mask = function (args) { return function (rule) { return new Parser(function (stream) {
    var prompt = args.prompt, promptPlaceholder = args.promptPlaceholder;
    while (!stream.eof()) {
        var _a = stream.peek(), char = _a.char, control = _a.control;
        if (char === control && control === prompt) {
            stream.eat();
            return new Result(prompt, stream, ResultType.Mask);
        }
        if (rule.test(char)) {
            stream.eat();
            return new Result(char, stream, ResultType.Mask);
        }
        if (char === promptPlaceholder) {
            stream.eat();
            return new Result(prompt, stream, ResultType.Mask);
        }
        stream.eat_input();
    }
    stream.eat();
    return new Result(prompt, stream, ResultType.Mask);
}); }; };
/**
 * @hidden
 */
var literal = function (_token) { return new Parser(function (stream) {
    //    let {char, control} = stream.peek();
    var char = stream.peek().char;
    if (char === _token) {
        stream.eat();
        return new Result(_token, stream, ResultType.Literal);
    }
    //    if (control === _token) {
    //        while (!stream.eof() && char !== _token) {
    //            stream.eat_input();
    //            char = stream.peek().char;
    //        }
    //    }
    //
    //    if (control !== undefined) {
    //        stream.eat();
    //    }
    return new Result(_token, stream, ResultType.Literal);
}); };
/**
 * @hidden
 */
var unmask = function (prompt) { return function (rule) { return new Parser(function (stream) {
    while (!stream.eof()) {
        var _a = stream.peek(), char = _a.char, control = _a.control;
        if (char === prompt && control === prompt) {
            stream.eat();
            return new Result(char, stream);
        }
        if (rule.test(char)) {
            stream.eat();
            return new Result(char, stream);
        }
        stream.eat_input();
    }
    stream.eat();
    return new Result('', stream);
}); }; };
/**
 * @hidden
 */
var unliteral = function (_token) { return new Parser(function (stream) {
    if (stream.eof()) {
        return new Result('', stream);
    }
    var char = stream.peek().char;
    if (char === _token) {
        stream.eat();
    }
    return new Result(_token, stream);
}); };
/**
 * @hidden
 */
var token = function (rules, creator) { return new Parser(function (stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
        char = stream.next().char;
        return new Result(creator.literal(char), stream);
    }
    if (!rule) {
        return new Result(creator.literal(char), stream);
    }
    return new Result(creator.mask(rule), stream);
}); };
/**
 * @hidden
 */
var rawMask = function (args) { return new Parser(function (stream) {
    var prompt = args.prompt, promptPlaceholder = args.promptPlaceholder;
    var char = stream.next().char;
    if (char === prompt) {
        return new Result(promptPlaceholder, stream);
    }
    return new Result(char, stream);
}); };
/**
 * @hidden
 */
var rawLiteral = function (includeLiterals) { return new Parser(function (stream) {
    var char = stream.next().char;
    if (includeLiterals) {
        return new Result(char, stream);
    }
    return new Result('', stream);
}); };

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/parsing/combinators.js


/**
 * @hidden
 */
var always = function (value) { return new Parser(function (stream) { return new Result(value, stream); }); };
/**
 * @hidden
 */
var append = function (p1, p2) { return p1.chain(function (vs) { return p2.map(function (v) { return vs.concat([v]); }); }); };
/**
 * @hidden
 */
var sequence = function (list) { return list.reduce(function (acc, parser) { return append(acc, parser); }, always([])); };
/**
 * @hidden
 */
var greedy = function (parser) { return new Parser(function (stream) {
    var result = new Result([], stream);
    while (!stream.eof()) {
        result = result.concat(parser.run(stream));
    }
    return result;
}); };

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/masking.service.js


/**
 * @hidden
 */
var MaskingService = /** @class */ (function () {
    function MaskingService() {
        this.rules = {};
        this.prompt = '_';
        this.mask = '';
        this.promptPlaceholder = ' ';
        this.includeLiterals = false;
        this.maskTokens = [];
        this.unmaskTokens = [];
        this.rawTokens = [];
        this.validationTokens = [];
    }
    MaskingService.prototype.update = function (_a) {
        var _b = _a.mask, mask = _b === void 0 ? '' : _b, _c = _a.prompt, prompt = _c === void 0 ? '' : _c, _d = _a.promptPlaceholder, promptPlaceholder = _d === void 0 ? ' ' : _d, _e = _a.rules, rules = _e === void 0 ? {} : _e, _f = _a.includeLiterals, includeLiterals = _f === void 0 ? false : _f;
        this.mask = mask;
        this.prompt = prompt;
        this.promptPlaceholder = promptPlaceholder;
        this.rules = rules;
        this.includeLiterals = includeLiterals;
        this.tokenize();
    };
    MaskingService.prototype.validationValue = function (maskedValue) {
        if (maskedValue === void 0) { maskedValue = ''; }
        var value = maskedValue;
        sequence(this.validationTokens)
            .run(maskedValue)
            .fold(function (unmasked) {
            value = unmasked.join('');
        });
        return value;
    };
    MaskingService.prototype.rawValue = function (maskedValue) {
        if (maskedValue === void 0) { maskedValue = ''; }
        var value = maskedValue;
        if (!this.rawTokens.length) {
            return value;
        }
        sequence(this.rawTokens)
            .run(maskedValue)
            .fold(function (unmasked) {
            value = unmasked.join('');
        });
        return value;
    };
    /**
     * @hidden
     */
    MaskingService.prototype.maskRaw = function (rawValue) {
        if (rawValue === void 0) { rawValue = ''; }
        var value = rawValue;
        if (!this.maskTokens.length) {
            return value;
        }
        sequence(this.maskTokens)
            .run(rawValue)
            .fold(function (masked) {
            value = masked.join('');
        });
        return value;
    };
    MaskingService.prototype.maskInput = function (input, control, splitPoint) {
        if (input.length < control.length) {
            return this.maskRemoved(input, control, splitPoint);
        }
        return this.maskInserted(input, control, splitPoint);
    };
    MaskingService.prototype.maskInRange = function (pasted, oldValue, start, end) {
        var value = '';
        var selection = end;
        var beforeChange = oldValue.split('').slice(0, start);
        var afterChange = oldValue.split('').slice(end);
        sequence(this.maskTokens.slice(start, end))
            .run(pasted)
            .fold(function (masked) {
            value = beforeChange
                .concat(masked)
                .concat(afterChange)
                .join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    MaskingService.prototype.maskRemoved = function (input, control, splitPoint) {
        var _this = this;
        var value = '';
        var selection = splitPoint;
        var unchanged = input.split('').slice(splitPoint);
        var changed = input.split('').slice(0, splitPoint).join('');
        var take = this.maskTokens.length - (input.length - splitPoint);
        sequence(this.maskTokens.slice(0, take))
            .run(changed, control)
            .fold(function (masked) {
            selection = _this.adjustPosition(masked, selection);
            value = masked.concat(unchanged).join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    MaskingService.prototype.adjustPosition = function (input, selection) {
        var caretChar = input[selection];
        var isLiteral = this.maskTokens[selection].isLiteral(caretChar);
        if (!isLiteral && caretChar !== this.prompt) {
            return selection + 1;
        }
        return selection;
    };
    MaskingService.prototype.maskInserted = function (input, control, splitPoint) {
        var _this = this;
        var value = '';
        var selection = splitPoint;
        var changed = input.slice(0, splitPoint);
        sequence(this.unmaskTokens)
            .run(changed, control)
            .chain(function (unmasked) {
            selection = unmasked.join('').length;
            var unchanged = control.slice(selection);
            return sequence(_this.maskTokens)
                .run(unmasked.join('') + unchanged, control);
        })
            .fold(function (masked) {
            value = masked.join('');
        });
        return {
            selection: selection,
            value: value
        };
    };
    Object.defineProperty(MaskingService.prototype, "maskTokenCreator", {
        get: function () {
            var _a = this, prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder;
            return {
                literal: function (rule) { return literal(rule); },
                mask: function (rule) { return mask({ prompt: prompt, promptPlaceholder: promptPlaceholder })(rule); }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "unmaskTokenCreator", {
        get: function () {
            var _this = this;
            return {
                literal: function (rule) { return unliteral(rule); },
                mask: function (rule) { return unmask(_this.prompt)(rule); }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "rawTokenCreator", {
        get: function () {
            var _a = this, prompt = _a.prompt, promptPlaceholder = _a.promptPlaceholder, includeLiterals = _a.includeLiterals;
            return {
                literal: function (_) { return rawLiteral(includeLiterals); },
                mask: function (_) { return rawMask({ prompt: prompt, promptPlaceholder: promptPlaceholder }); }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskingService.prototype, "validationTokenCreator", {
        get: function () {
            var prompt = this.prompt;
            return {
                literal: function (_) { return rawLiteral(false); },
                mask: function (_) { return rawMask({ prompt: prompt, promptPlaceholder: '' }); }
            };
        },
        enumerable: false,
        configurable: true
    });
    MaskingService.prototype.tokenize = function () {
        var _this = this;
        greedy(token(this.rules, this.maskTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.maskTokens = tokens;
        });
        greedy(token(this.rules, this.unmaskTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.unmaskTokens = tokens;
        });
        greedy(token(this.rules, this.rawTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.rawTokens = tokens;
        });
        greedy(token(this.rules, this.validationTokenCreator))
            .run(this.mask)
            .fold(function (tokens, _) {
            _this.validationTokens = tokens;
        });
    };
    return MaskingService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/utils.js
/**
 * @hidden
 */
var defaultRules = {
    '#': /[\d\s\+\-]/,
    '&': /[\S]/,
    '0': /[\d]/,
    '9': /[\d\s]/,
    '?': /[a-zA-Z\s]/,
    'A': /[a-zA-Z0-9]/,
    'C': /./,
    'L': /[a-zA-Z]/,
    'a': /[a-zA-Z0-9\s]/
};
/**
 * @hidden
 */
var returnFalse = function () { return false; };
/**
 * @hidden
 */
var maskingChanged = function (prev, next) {
    return prev.includeLiterals !== next.includeLiterals ||
        prev.mask !== next.mask ||
        prev.prompt !== next.prompt ||
        prev.promptPlaceholder !== next.promptPlaceholder ||
        !sameRules(prev.rules, next.rules);
};
/**
 * @hidden
 */
var sameRules = function (rules1, rules2) {
    if (!!rules1 !== !!rules2) {
        return false;
    }
    if (rules1 === rules2 || (!rules1 || !rules2)) {
        return true;
    }
    var same = true;
    for (var key in rules1) {
        if (rules1[key] !== rules2[key]) {
            same = false;
            break;
        }
    }
    if (same) {
        for (var key in rules2) {
            if (!rules1.hasOwnProperty(key)) {
                same = false;
                break;
            }
        }
    }
    return same;
};


;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/maskedtextbox/MaskedTextBox.js
var MaskedTextBox_extends = (undefined && undefined.__extends) || (function () {
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
var MaskedTextBox_assign = (undefined && undefined.__assign) || function () {
    MaskedTextBox_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MaskedTextBox_assign.apply(this, arguments);
};








/** @hidden */
var MaskedTextBoxWithoutContext = /** @class */ (function (_super) {
    MaskedTextBox_extends(MaskedTextBoxWithoutContext, _super);
    function MaskedTextBoxWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.state = {};
        _this._inputId = "k-".concat((0,main_js_.guid)());
        _this._service = new MaskingService();
        _this._isPasted = false;
        _this._selection = [null, null];
        _this._input = null;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._input) {
                _this._input.focus();
            }
        };
        _this.pasteHandler = function (event) {
            var _a = event.target, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
            if (selectionEnd === selectionStart) {
                return;
            }
            _this._isPasted = true;
            _this._selection = [selectionStart || 0, selectionEnd || 0];
        };
        _this.onChangeHandler = function (event) {
            var input = event.currentTarget;
            var value = input.value;
            var start = _this._selection[0] || 0;
            var end = _this._selection[1] || 0;
            if (!_this.props.mask) {
                _this._isPasted = false;
                _this._selection = [null, null];
                _this.triggerOnChange(value, event);
                return;
            }
            var maskedValue = _this.value;
            var result;
            if (_this._isPasted) {
                _this._isPasted = false;
                var rightPart = maskedValue.length - end;
                var to = value.length - rightPart;
                result = _this._service.maskInRange(value.slice(start, to), maskedValue, start, end);
            }
            else {
                result = _this._service.maskInput(value, maskedValue, input.selectionStart || 0);
            }
            _this._selection = [result.selection, result.selection];
            _this.triggerOnChange(result.value, event);
        };
        _this.focusHandler = function (event) {
            if (!_this.state.focused) {
                _this.setState({ focused: true });
                if (_this.props.onFocus) {
                    _this.props.onFocus.call(undefined, {
                        target: _this,
                        syntheticEvent: event,
                        nativeEvent: event.nativeEvent
                    });
                }
            }
        };
        _this.blurHandler = function (event) {
            if (_this.state.focused) {
                _this.setState({ focused: false });
                if (_this.props.onBlur) {
                    _this.props.onBlur.call(undefined, {
                        target: _this,
                        syntheticEvent: event,
                        nativeEvent: event.nativeEvent
                    });
                }
            }
        };
        _this.setValidity = function () {
            if (_this.element) {
                _this.element.setCustomValidity(_this.validity.valid
                    ? ''
                    : _this.props.validationMessage || '');
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "element", {
        /**
         * Gets the element of the MaskedTextBox.
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
         *                 <MaskedTextBox
         *                     ref={(component) =>
         *                         this.element = component ? component.element : null}
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
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "value", {
        /**
         * Gets the value with the mask of the MaskedTextBox.
         */
        get: function () {
            if (this._valueDuringOnChange !== undefined) {
                return this._valueDuringOnChange;
            }
            else if (this.props.value !== undefined) {
                return this.props.value;
            }
            else if (this.state.value !== undefined) {
                return this.state.value;
            }
            else if (this.props.defaultValue !== undefined) {
                return this.props.defaultValue;
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "rawValue", {
        /**
         * Gets the raw value without the mask of the MaskedTextBox.
         */
        get: function () {
            return this._service.rawValue(this.value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the MaskedTextBox is set.
         */
        get: function () {
            var maskedValue = this.value;
            var value = this._service.validationValue(maskedValue);
            var customError = this.props.validationMessage !== undefined;
            var valid = (this.props.valid !== undefined ?
                this.props.valid : ((!this.required || !!value)) &&
                (!this.props.maskValidation || !this.props.prompt || maskedValue.indexOf(this.props.prompt) === -1));
            return {
                customError: customError,
                valid: valid,
                valueMissing: !value
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : MaskedTextBoxWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : MaskedTextBoxWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the MaskedTextBox.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    MaskedTextBoxWithoutContext.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.element && this.state.focused && prevState.focused) {
            var _a = this._selection, start = _a[0], end = _a[1];
            var prevSelection = prevProps.selection;
            var nextSelection = this.props.selection;
            if ((!prevSelection && nextSelection) ||
                (prevSelection && nextSelection &&
                    (prevSelection.start !== nextSelection.start || prevSelection.end !== nextSelection.end))) {
                start = nextSelection.start;
                end = nextSelection.end;
            }
            if (start !== null && end !== null) {
                this.element.setSelectionRange(start, end);
            }
        }
        if (maskingChanged(prevProps, this.props)) {
            this.updateService();
        }
        this.setValidity();
    };
    /**
     * @hidden
     */
    MaskedTextBoxWithoutContext.prototype.componentDidMount = function () {
        this.updateService();
        this.setValidity();
    };
    /**
     * @hidden
     */
    MaskedTextBoxWithoutContext.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? MaskedTextBoxWithoutContext.defaultProps.size : _c, _d = _b.fillMode, fillMode = _d === void 0 ? MaskedTextBoxWithoutContext.defaultProps.fillMode : _d, _e = _b.rounded, rounded = _e === void 0 ? MaskedTextBoxWithoutContext.defaultProps.rounded : _e;
        var inputId = this.props.id || this._inputId;
        var isValid = !this.validityStyles || this.validity.valid;
        var style = this.props.style || {};
        var _f = this.props, _g = _f.prefix, prefix = _g === void 0 ? MaskedTextBoxWithoutContext.defaultProps.prefix : _g, _h = _f.suffix, suffix = _h === void 0 ? MaskedTextBoxWithoutContext.defaultProps.suffix : _h;
        var Prefix = (0,main_js_.useCustomComponent)(prefix)[0];
        var Suffix = (0,main_js_.useCustomComponent)(suffix)[0];
        var component = (index_js_.createElement("span", { dir: this.props.dir, className: (0,main_js_.classNames)('k-maskedtextbox k-input', (_a = {},
                _a["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                _a["k-input-".concat(fillMode)] = fillMode,
                _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                _a['k-invalid'] = !isValid,
                _a['k-required'] = this.required,
                _a['k-disabled'] = this.props.disabled,
                _a), this.props.className), style: !this.props.label
                ? MaskedTextBox_assign({ width: this.props.width }, style) : style },
            index_js_.createElement(Prefix, null),
            index_js_.createElement("input", { type: "text", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false, className: "k-input-inner", value: this.value, id: inputId, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, "aria-placeholder": this.props.mask, name: this.props.name, tabIndex: (0,main_js_.getTabIndex)(this.props.tabIndex, this.props.disabled, true), accessKey: this.props.accessKey, title: this.props.title, disabled: this.props.disabled || undefined, readOnly: this.props.readonly || undefined, placeholder: this.props.placeholder, ref: function (input) { return _this._input = input; }, onChange: this.onChangeHandler, onPaste: this.pasteHandler, onFocus: this.focusHandler, onBlur: this.blurHandler, onDragStart: returnFalse, onDrop: returnFalse }),
            index_js_.createElement(Suffix, null)));
        return this.props.label
            ? (index_js_.createElement(es_main_js_.FloatingLabel, { label: this.props.label, editorId: inputId, editorValue: this.value, editorValid: isValid, editorDisabled: this.props.disabled, editorPlaceholder: this.props.placeholder, children: component, style: { width: this.props.width }, dir: this.props.dir }))
            : component;
    };
    MaskedTextBoxWithoutContext.prototype.triggerOnChange = function (maskedValue, event) {
        this.setState({
            value: maskedValue
        });
        if (this.props.onChange) {
            this._valueDuringOnChange = maskedValue;
            var ev = {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                selectionStart: this._selection[0],
                selectionEnd: this._selection[1],
                target: this,
                value: this.value
            };
            this.props.onChange.call(undefined, ev);
            this._valueDuringOnChange = undefined;
        }
    };
    MaskedTextBoxWithoutContext.prototype.updateService = function (extra) {
        var config = Object.assign({
            includeLiterals: this.props.includeLiterals,
            mask: this.props.mask,
            prompt: this.props.prompt,
            promptPlaceholder: this.props.promptPlaceholder,
            rules: this.rules
        }, extra); // tslint:disable-line:align
        this._service.update(config);
    };
    Object.defineProperty(MaskedTextBoxWithoutContext.prototype, "rules", {
        get: function () {
            return Object.assign({}, defaultRules, this.props.rules);
        },
        enumerable: false,
        configurable: true
    });
    MaskedTextBoxWithoutContext.displayName = 'MaskedTextBox';
    /**
     * @hidden
     */
    MaskedTextBoxWithoutContext.propTypes = {
        value: prop_types_index_js_.string,
        defaultValue: prop_types_index_js_.string,
        placeholder: prop_types_index_js_.string,
        title: prop_types_index_js_.string,
        dir: prop_types_index_js_.string,
        id: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        prefix: prop_types_index_js_.any,
        suffix: prop_types_index_js_.any,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        width: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.number
        ]),
        tabIndex: prop_types_index_js_.number,
        accessKey: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        readonly: prop_types_index_js_.bool,
        prompt: prop_types_index_js_.string,
        promptPlaceholder: prop_types_index_js_.string,
        includeLiterals: prop_types_index_js_.bool,
        maskValidation: prop_types_index_js_.bool,
        mask: prop_types_index_js_.string,
        rules: function (props, propName, componentName) {
            var rules = props.rules;
            if (rules !== undefined) {
                var valid = Object.entries(rules)
                    .some(function (e) { return typeof e !== 'string' || !(rules[e] instanceof RegExp); });
                if (!valid) {
                    return new Error('Invalid prop `' + propName + '` supplied to' +
                        ' `' + componentName + '`. Validation failed.');
                }
            }
            return null;
        },
        selection: prop_types_index_js_.shape({
            start: prop_types_index_js_.number.isRequired,
            end: prop_types_index_js_.number.isRequired
        }),
        name: prop_types_index_js_.string,
        label: prop_types_index_js_.string,
        validationMessage: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        valid: prop_types_index_js_.bool,
        validityStyles: prop_types_index_js_.bool,
        onChange: prop_types_index_js_.func,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
    };
    /**
     * @hidden
     */
    MaskedTextBoxWithoutContext.defaultProps = {
        prompt: '_',
        promptPlaceholder: ' ',
        includeLiterals: false,
        maskValidation: true,
        rules: defaultRules,
        required: false,
        validityStyles: true,
        prefix: function (_) { return null; },
        suffix: function (_) { return null; },
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid'
    };
    return MaskedTextBoxWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `MaskedTextBox` component.
 * Used for global configuration of all `MaskedTextBox` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var MaskedTextBoxPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the props of the [KendoReact MaskedTextBox component]({% slug overview_maskedtextbox %}).
 *
 * Accepts properties of type [MaskedTextBoxProps]({% slug api_inputs_maskedtextboxprops %}).
 * Obtaining the `ref` returns an object of type [MaskedTextBoxHandle]({% slug api_inputs_maskedtextboxhandle %}).
 */
var MaskedTextBox = (0,main_js_.withPropsContext)(MaskedTextBoxPropsContext, MaskedTextBoxWithoutContext);
MaskedTextBox.displayName = 'KendoReactMaskedTextBox';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/range-slider/range-raducer.js
var range_raducer_assign = (undefined && undefined.__assign) || function () {
    range_raducer_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return range_raducer_assign.apply(this, arguments);
};
/**
 * @hidden
 */
var RANGE_ACTION;
(function (RANGE_ACTION) {
    RANGE_ACTION["start"] = "start";
    RANGE_ACTION["end"] = "end";
    RANGE_ACTION["min"] = "min";
    RANGE_ACTION["max"] = "max";
    RANGE_ACTION["increase"] = "increase";
    RANGE_ACTION["decrease"] = "decrease";
})(RANGE_ACTION || (RANGE_ACTION = {}));
/**
 * @hidden
 */
var rangeReducer = function (state, action) {
    var newState;
    var newValue;
    switch (action.type) {
        case RANGE_ACTION.start:
            if (action.payload === undefined) {
                return state;
            }
            newState = {
                start: action.payload > state.end ? state.end : Math.max(action.payload, action.min),
                end: state.end
            };
            break;
        case RANGE_ACTION.end:
            if (action.payload === undefined) {
                return state;
            }
            newState = {
                start: state.start,
                end: action.payload < state.start ? state.start : Math.min(action.payload, action.max)
            };
            break;
        case RANGE_ACTION.min:
            if (action.key === 'start') {
                newState = range_raducer_assign(range_raducer_assign({}, state), { start: action.min });
            }
            else {
                newState = range_raducer_assign(range_raducer_assign({}, state), { end: Math.max(action.min, state.start) });
            }
            break;
        case RANGE_ACTION.max:
            if (action.key === 'start') {
                newState = range_raducer_assign(range_raducer_assign({}, state), { start: Math.min(action.max, state.end) });
            }
            else {
                newState = range_raducer_assign(range_raducer_assign({}, state), { end: action.max });
            }
            break;
        case RANGE_ACTION.increase:
            if (action.step === undefined || action.key === undefined) {
                return state;
            }
            newValue = state[action.key] + action.step;
            if (action.key === 'start') {
                if (newValue < action.min) {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { start: action.min });
                }
                else {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { start: Math.min(newValue, state.end) });
                }
            }
            else {
                if (newValue > action.max) {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { end: action.max });
                }
                else {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { end: Math.max(newValue, state.start) });
                }
            }
            break;
        case RANGE_ACTION.decrease:
            if (action.step === undefined || action.key === undefined) {
                return state;
            }
            newValue = state[action.key] - action.step;
            if (action.key === 'start') {
                if (newValue < action.min) {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { start: action.min });
                }
                else {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { start: Math.min(newValue, state.end) });
                }
            }
            else {
                if (newValue > action.max) {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { end: action.max });
                }
                else {
                    newState = range_raducer_assign(range_raducer_assign({}, state), { end: Math.max(newValue, state.start) });
                }
            }
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/range-slider/RangeSlider.js
var RangeSlider_assign = (undefined && undefined.__assign) || function () {
    RangeSlider_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RangeSlider_assign.apply(this, arguments);
};








/**
 * @hidden
 */
var useRange = function (defaultValue, args, callback) {
    var _a = index_js_.useState(defaultValue), state = _a[0], setState = _a[1];
    var handleDispatchAction = index_js_.useCallback(function (action) {
        var newState = rangeReducer(args.state || state, RangeSlider_assign(RangeSlider_assign({}, action), args));
        if (callback) {
            callback(newState, action.event);
        }
        setState(newState);
    }, [args, callback]);
    return [state, handleDispatchAction];
};
/**
 * Represents the PropsContext of the `RangeSlider` component.
 * Used for global configuration of all `RangeSlider` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var RangeSliderPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact RangeSlider component]({% slug overview_rangeslider %}).
 *
 * Accepts properties of type [RangeSliderProps]({% slug api_inputs_rangesliderprops %}).
 * Obtaining the `ref` returns an object of type [RangeSliderHandle]({% slug api_inputs_rangesliderhandle %}).
 */
var RangeSlider = index_js_.forwardRef(function (directProps, ref) {
    var _a, _b;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(RangeSliderPropsContext, directProps);
    var target = index_js_.useRef(null);
    var sliderRef = index_js_.useRef(null);
    var sliderSelectionRef = index_js_.useRef(null);
    var startHandle = index_js_.useRef(null);
    var endHandle = index_js_.useRef(null);
    var focus = index_js_.useCallback(function () {
        if (startHandle.current) {
            startHandle.current.focus();
        }
    }, [startHandle]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: sliderRef.current,
        focus: focus,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var min = index_js_.useMemo(function () { return props.min; }, [props.min]);
    var max = index_js_.useMemo(function () { return props.max; }, [props.max]);
    var step = index_js_.useMemo(function () { return props.step !== undefined ? props.step : RangeSlider_defaultProps.step; }, [props.step, RangeSlider_defaultProps.step]);
    var dir = (0,main_js_.useDir)(sliderRef, props.dir);
    var handleChange = function (newValue, event) {
        if (props.onChange && target.current) {
            props.onChange.call(undefined, {
                value: newValue,
                target: target.current,
                syntheticEvent: event
            });
        }
    };
    var _c = index_js_.useState(''), currentDrag = _c[0], setCurrentDrag = _c[1];
    var _d = useRange(props.defaultValue || RangeSlider_defaultProps.defaultValue, {
        min: min,
        max: max,
        step: step,
        state: props.value
    }, handleChange), stateValue = _d[0], dispatchStateValue = _d[1];
    var value = index_js_.useMemo(function () { return props.value || stateValue; }, [props.value, stateValue]);
    var sliderTrackRef = index_js_.useRef(null);
    var sliderTrackWrapRef = index_js_.useRef(null);
    var percentStart = index_js_.useMemo(function () { return ((value.start - min) / (max - min)) * 100; }, [value.start, min, max]);
    var percentEnd = index_js_.useMemo(function () { return ((value.end - min) / (max - min)) * 100; }, [value.end, min, max]);
    var sliderItemsStyle = index_js_.useMemo(function () { return props.vertical ? { paddingTop: 0, height: '100%' } : {}; }, [props.vertical]);
    var trackStyles = index_js_.useMemo(function () { return props.vertical
        ? { marginTop: '0.5rem', marginBottom: '0.5rem' }
        : { marginLeft: '0.5rem', marginRight: '0.5rem' }; }, [props.vertical]);
    var localization = (0,index_mjs_.useLocalization)();
    var calcNewDistance = index_js_.useCallback(function (event) {
        if (!sliderTrackWrapRef.current) {
            return;
        }
        var computed = sliderTrackWrapRef.current.getBoundingClientRect();
        var distance = props.vertical
            ? (computed.bottom - event.clientY)
            : dir === 'rtl'
                ? (computed.right - event.clientX)
                : (event.clientX - computed.left);
        var size = props.vertical ? computed.height : computed.width;
        var percentage = (distance / size);
        var payload = (min + percentage * (max - min));
        return payload;
    }, [
        sliderTrackWrapRef,
        props.vertical,
        dir,
        min,
        max,
        stateValue.start,
        stateValue.end,
        props.value && props.value.start,
        props.value && props.value.end
    ]);
    var calcKey = index_js_.useCallback(function (payload) {
        if (payload <= value.start) {
            return 'start';
        }
        if (payload >= value.end) {
            return 'end';
        }
        return (2 * payload < value.end + value.start) ? 'start' : 'end';
    }, [
        stateValue.start, stateValue.end,
        props.value && props.value.start,
        props.value && props.value.end
    ]);
    var handleStartKeyDown = index_js_.useCallback(function (event) {
        switch (event.keyCode) {
            case main_js_.Keys.right:
                event.preventDefault();
                dispatchStateValue({ type: dir === 'rtl' ? RANGE_ACTION.decrease : RANGE_ACTION.increase, key: 'start', event: event });
                break;
            case main_js_.Keys.up:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.increase, key: 'start', event: event });
                break;
            case main_js_.Keys.left:
                event.preventDefault();
                dispatchStateValue({ type: dir === 'rtl' ? RANGE_ACTION.increase : RANGE_ACTION.decrease, key: 'start', event: event });
                break;
            case main_js_.Keys.down:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.decrease, key: 'start', event: event });
                break;
            case main_js_.Keys.home:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.min, key: 'start', event: event });
                break;
            case main_js_.Keys.end:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.max, key: 'start', event: event });
                break;
            default:
                break;
        }
    }, [dispatchStateValue]);
    var handleEndKeyDown = index_js_.useCallback(function (event) {
        switch (event.keyCode) {
            case main_js_.Keys.right:
                event.preventDefault();
                dispatchStateValue({ type: dir === 'rtl' ? RANGE_ACTION.decrease : RANGE_ACTION.increase, key: 'end', event: event });
                break;
            case main_js_.Keys.up:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.increase, key: 'end', event: event });
                break;
            case main_js_.Keys.left:
                event.preventDefault();
                dispatchStateValue({ type: dir === 'rtl' ? RANGE_ACTION.increase : RANGE_ACTION.decrease, key: 'end', event: event });
                break;
            case main_js_.Keys.down:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.decrease, key: 'end', event: event });
                break;
            case main_js_.Keys.home:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.min, key: 'end', event: event });
                break;
            case main_js_.Keys.end:
                event.preventDefault();
                dispatchStateValue({ type: RANGE_ACTION.max, key: 'end', event: event });
                break;
            default:
                break;
        }
    }, [dispatchStateValue, dir]);
    var handleTrackPress = index_js_.useCallback(function (event) {
        var payload = calcNewDistance(event);
        var key = calcKey(payload);
        setCurrentDrag(key);
        key === 'end' ? endHandle.current.focus() : startHandle.current.focus();
        var action = (key === 'end' ? RANGE_ACTION.end : RANGE_ACTION.start);
        dispatchStateValue({ type: action, payload: payload, event: event });
    }, [props.vertical, min, max, dispatchStateValue]);
    var handleTrackDrag = function (event) {
        var payload = calcNewDistance(event);
        var action = currentDrag === 'end' ? RANGE_ACTION.end : RANGE_ACTION.start;
        dispatchStateValue({ type: action, payload: payload, event: event });
    };
    var handleTrackRelease = function (event) {
        var payload = calcNewDistance(event);
        var action = currentDrag === 'end' ? RANGE_ACTION.end : RANGE_ACTION.start;
        dispatchStateValue({ type: action, payload: payload, event: event });
        setCurrentDrag('');
    };
    (0,main_js_.useDraggable)(sliderTrackWrapRef, { onPress: handleTrackPress, onDrag: handleTrackDrag, onRelease: handleTrackRelease });
    return (index_js_.createElement("div", { id: props.id, style: props.style, ref: sliderRef, dir: dir, className: (0,main_js_.classNames)('k-slider', {
            'k-rtl': dir === 'rtl',
            'k-disabled': props.disabled,
            'k-slider-vertical': props.vertical,
            'k-slider-horizontal': !props.vertical
        }, props.className) },
        index_js_.createElement("div", { ref: sliderTrackWrapRef, className: "k-slider-track-wrap", style: RangeSlider_assign({ flexGrow: 1, position: 'relative', touchAction: 'none' }, trackStyles) },
            props.children && (index_js_.createElement("ul", { className: "k-reset k-slider-items", style: RangeSlider_assign({}, sliderItemsStyle) }, index_js_.Children.map(props.children, function (child) {
                return child && index_js_.cloneElement(child, {
                    position: 100 * (child.props.position - props.min) /
                        (props.max - props.min),
                    vertical: props.vertical
                }, child.props.children);
            }))),
            index_js_.createElement("div", { ref: sliderTrackRef, className: "k-slider-track", style: props.vertical
                    ? { bottom: 0, height: '100%' }
                    : (_a = {}, _a[dir === 'rtl' ? 'right' : 'left'] = 0, _a.width = '100%', _a) },
                (percentStart !== null && percentEnd !== null) && index_js_.createElement("div", { "data-selection": true, ref: sliderSelectionRef, title: "".concat(value.start, " - ").concat(value.end), className: "k-slider-selection", style: props.vertical
                        ? { height: (percentEnd - percentStart) + '%', bottom: percentStart + '%' }
                        : (_b = {},
                            _b[dir === 'rtl' ? 'right' : 'left'] = percentStart + '%',
                            _b.width = (percentEnd - percentStart) + '%',
                            _b) }),
                index_js_.createElement("span", { ref: startHandle, role: "slider", tabIndex: (0,main_js_.getTabIndex)(props.startTabIndex, props.disabled, undefined), "aria-valuemin": min, "aria-valuemax": Math.max(max, value.end), "aria-valuenow": value.start, "aria-disabled": props.disabled ? 'true' : undefined, "aria-valuetext": "".concat(value.start, " - ").concat(value.end), className: "k-draghandle", title: localization.toLanguageString(sliderDragTitle, messages[sliderDragTitle]), style: props.vertical
                        ? { bottom: 'calc(' + percentStart + '%)', zIndex: 1 }
                        : dir === 'rtl' ? { right: 'calc(' + percentStart + '% - 13px)', zIndex: 1 }
                            : { left: 'calc(' + percentStart + '%)', zIndex: 1 }, onKeyDown: handleStartKeyDown }),
                index_js_.createElement("span", { ref: endHandle, role: "slider", tabIndex: (0,main_js_.getTabIndex)(props.endTabIndex, props.disabled, undefined), "aria-valuemin": Math.min(min, value.start), "aria-valuemax": max, "aria-valuenow": value.end, "aria-disabled": props.disabled ? 'true' : undefined, "aria-valuetext": "".concat(value.start, " - ").concat(value.end), className: "k-draghandle", title: localization.toLanguageString(sliderDragTitle, messages[sliderDragTitle]), style: props.vertical
                        ? { bottom: 'calc(' + percentEnd + '%)', zIndex: 1 }
                        : dir === 'rtl' ? { right: 'calc(' + percentEnd + '% - 13px)', zIndex: 1 }
                            : { left: 'calc(' + percentEnd + '%)', zIndex: 1 }, onKeyDown: handleEndKeyDown })))));
});
var RangeSlider_propTypes = {
    value: function (props, propName, componentName) {
        if (props.value) {
            var start = props.value.start;
            var end = props.value.end;
            var min = props.min;
            var max = props.max;
            if (start > end || start > max || start < min || end > max || end < min || end < start) {
                return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                    The { start, end } value must be between the min & max value and { start, end } must be start < end.\n                    "));
            }
        }
        return null;
    },
    defaultValue: function (props, propName, componentName) {
        if (props.defaultValue) {
            var start = props.defaultValue.start;
            var end = props.defaultValue.end;
            var min = props.min;
            var max = props.max;
            if (start > end || start > max || start < min || end > max || end < min || end < start) {
                return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                    The { start, end } value must be between the min & max value and { start, end } must be start < end.\n                    "));
            }
        }
        return null;
    },
    onChange: prop_types_index_js_.func,
    step: prop_types_index_js_.number,
    min: function (props, propName, componentName) {
        var prop = props[propName];
        var min = props.min;
        var max = props.max;
        if (min === undefined) {
            return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                ").concat(propName, " value can not be undefined.\n                "));
        }
        if (prop && min >= max) {
            return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                ").concat(propName, " value can not be equal to or bigger than the max value.\n                "));
        }
        return null;
    },
    max: function (props, propName, componentName) {
        var prop = props[propName];
        var min = props.min;
        var max = props.max;
        if (max === undefined) {
            return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                ").concat(propName, " value can not be undefined.\n                "));
        }
        if (prop && max <= min) {
            return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                ").concat(propName, " value can not be equal to or smaller than the min value.\n                "));
        }
        return null;
    },
    vertical: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl'])
};
var RangeSlider_defaultProps = {
    step: 1,
    defaultValue: {
        start: 0,
        end: 0
    },
    vertical: false,
    disabled: false
};
RangeSlider.displayName = 'KendoReactRangeSlider';
// TODO: delete casting when @types/react is updated!
RangeSlider.propTypes = RangeSlider_propTypes;
RangeSlider.defaultProps = RangeSlider_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/switch/Switch.js
var Switch_extends = (undefined && undefined.__extends) || (function () {
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
var Switch_assign = (undefined && undefined.__assign) || function () {
    Switch_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Switch_assign.apply(this, arguments);
};







/** @hidden */
var SwitchWithoutContext = /** @class */ (function (_super) {
    Switch_extends(SwitchWithoutContext, _super);
    /**
     * @hidden
     */
    function SwitchWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.setValidity = function () {
            if (_this._input && _this._input.setCustomValidity) {
                _this._input.setCustomValidity(_this.validity.valid
                    ? ''
                    : _this.props.validationMessage ||
                        _this.defaultValidationMessage.toLanguageString(switchValidation, messages[switchValidation]));
            }
        };
        _this.limit = function (offset, drag, wrapper) {
            var wrapperWidth = wrapper.offsetWidth;
            var margin = drag.offsetWidth;
            if (offset < 0) {
                return 0;
            }
            else if (offset > wrapperWidth - margin) {
                return wrapperWidth - margin;
            }
            return offset;
        };
        _this.toggle = function (value, event) {
            _this.setState({ checked: value });
            _this.valueDuringOnChange = value;
            (0,main_js_.dispatchEvent)(_this.props.onChange, event, _this, { value: value });
            _this.valueDuringOnChange = undefined;
        };
        _this._element = null;
        _this._wrapper = null;
        _this._input = null;
        _this._id = (0,main_js_.guid)();
        _this.defaultValidationMessage = (0,index_mjs_.provideLocalizationService)(_this);
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this._element) {
                _this._element.focus();
            }
        };
        _this.dummyInput = function (value) {
            /* Dummy component to support forms */
            return (index_js_.createElement("input", { type: "checkbox", checked: _this.props.checked, ref: function (el) {
                    _this._input = el;
                }, tabIndex: -1, "aria-hidden": true, value: value, style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: 'absolute', left: '50%' }, onChange: main_js_.noop }));
        };
        _this.handleClick = function (event) {
            if (_this.eventTimeStamp === event.timeStamp) {
                // This is guard against the case when wrapped in label, click event is emmited twice
                return;
            }
            _this.eventTimeStamp = event.timeStamp;
            _this.toggle(!_this.value, event);
        };
        _this.handleKeyDown = function (event) {
            if (_this.props.disabled) {
                return;
            }
            var keyCode = event.keyCode;
            if (keyCode === main_js_.Keys.space || keyCode === main_js_.Keys.enter) {
                _this.toggle(!_this.value, event);
                event.preventDefault();
            }
        };
        _this.handleWrapperFocus = function (event) {
            if (_this.props.disabled) {
                return;
            }
            _this.setState({ focused: true });
            var onFocus = _this.props.onFocus;
            if (onFocus) {
                onFocus.call(undefined, event);
            }
        };
        _this.handleWrapperBlur = function (event) {
            if (_this.props.disabled) {
                return;
            }
            _this.setState({ focused: false });
            var onBlur = _this.props.onBlur;
            if (onBlur) {
                onBlur.call(undefined, event);
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            checked: props.defaultChecked || SwitchWithoutContext.defaultProps.defaultChecked,
            focused: false
        };
        return _this;
    }
    Object.defineProperty(SwitchWithoutContext.prototype, "value", {
        /**
         * Gets the value of the Switch.
         */
        get: function () {
            return this.valueDuringOnChange !== undefined
                ? this.valueDuringOnChange
                : this.props.checked !== undefined
                    ? this.props.checked
                    : this.state.checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "actionElement", {
        /**
         * @hidden
         */
        get: function () {
            return this._wrapper;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "name", {
        /**
         * Gets the `name` property of the Switch.
         */
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "validity", {
        /**
         * Represents the validity state into which the Switch is set.
         */
        get: function () {
            var customError = this.props.validationMessage !== undefined;
            var isValid = this.props.valid !== undefined ?
                this.props.valid :
                !this.props.required ?
                    true :
                    this.value ? true : false;
            var valid = this.props.valid !== undefined ? this.props.valid : isValid;
            return {
                customError: customError,
                valid: valid,
                valueMissing: this.value === null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "validityStyles", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.validityStyles !== undefined
                ? this.props.validityStyles
                : SwitchWithoutContext.defaultProps.validityStyles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchWithoutContext.prototype, "required", {
        /**
         * @hidden
         */
        get: function () {
            return this.props.required !== undefined
                ? this.props.required
                : SwitchWithoutContext.defaultProps.required;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    SwitchWithoutContext.prototype.componentDidMount = function () {
        this.setValidity();
        // Due to dynamic dir calculation
        this.forceUpdate();
    };
    /**
     * @hidden
     */
    SwitchWithoutContext.prototype.componentDidUpdate = function () {
        this.setValidity();
    };
    /**
     * @hidden
     */
    SwitchWithoutContext.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var focused = this.state.focused;
        var _d = this.props, dir = _d.dir, disabled = _d.disabled, trackRounded = _d.trackRounded, thumbRounded = _d.thumbRounded, size = _d.size, id = _d.id, offLabel = _d.offLabel, onLabel = _d.onLabel, tabIndex = _d.tabIndex;
        this.dir = dir || (this._wrapper && getComputedStyle(this._wrapper).direction) || undefined;
        var isValid = !this.validityStyles || this.validity.valid;
        var switchClassName = (0,main_js_.classNames)('k-switch', (_a = {},
            _a["k-switch-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[trackRounded] || trackRounded)] = trackRounded,
            _a['k-switch-on'] = this.value,
            _a['k-switch-off'] = !this.value,
            _a['k-focus'] = focused,
            _a['k-disabled'] = disabled,
            _a['k-invalid'] = !isValid,
            _a), this.props.className);
        var ariaAttributes = {
            'aria-checked': this.value,
            'aria-disabled': disabled || undefined,
            'aria-labelledby': this.props.ariaLabelledBy,
            'aria-describedby': this.props.ariaDescribedBy
        };
        return (index_js_.createElement("span", Switch_assign({ ref: function (span) {
                _this._wrapper = span;
            }, role: 'switch' }, ariaAttributes, { className: switchClassName, dir: this.dir, onKeyDown: this.handleKeyDown, onClick: this.handleClick, onBlur: this.handleWrapperBlur, onFocus: this.handleWrapperFocus }),
            index_js_.createElement("span", { className: (0,main_js_.classNames)('k-switch-track', (_b = {},
                    _b["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[trackRounded] || trackRounded)] = trackRounded,
                    _b)), id: id || this._id, ref: function (span) {
                    _this._element = span;
                }, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled, undefined), accessKey: this.props.accessKey },
                this.dummyInput(this.value),
                index_js_.createElement("span", { className: 'k-switch-label-on' }, onLabel),
                index_js_.createElement("span", { className: 'k-switch-label-off' }, offLabel)),
            index_js_.createElement("span", { className: 'k-switch-thumb-wrap' },
                index_js_.createElement("span", { className: (0,main_js_.classNames)('k-switch-thumb', (_c = {},
                        _c["k-rounded-".concat(thumbRounded)] = thumbRounded,
                        _c)) }))));
    };
    SwitchWithoutContext.displayName = 'Switch';
    /**
     * @hidden
     */
    SwitchWithoutContext.propTypes = {
        accessKey: prop_types_index_js_.string,
        checked: prop_types_index_js_.bool,
        className: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        defaultChecked: prop_types_index_js_.bool,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        trackRounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        thumbRounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        dir: prop_types_index_js_.string,
        id: prop_types_index_js_.string,
        ariaLabelledBy: prop_types_index_js_.string,
        ariaDescribedBy: prop_types_index_js_.string,
        offLabel: prop_types_index_js_.string,
        required: prop_types_index_js_.bool,
        tabIndex: prop_types_index_js_.number,
        valid: prop_types_index_js_.bool,
        validate: prop_types_index_js_.bool,
        validationMessage: prop_types_index_js_.string,
        onBlur: prop_types_index_js_.any,
        onChange: prop_types_index_js_.any,
        onFocus: prop_types_index_js_.any,
        onLabel: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    SwitchWithoutContext.defaultProps = {
        disabled: false,
        defaultChecked: false,
        size: 'medium',
        trackRounded: 'full',
        thumbRounded: 'full',
        offLabel: 'OFF',
        onBlur: main_js_.noop,
        onFocus: main_js_.noop,
        onLabel: 'ON',
        required: false,
        validityStyles: true
    };
    return SwitchWithoutContext;
}(index_js_.Component));

/**
 * Represents the PropsContext of the `Switch` component.
 * Used for global configuration of all `Switch` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var SwitchPropsContext = (0,main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact Switch component]({% slug overview_switch %}).
 *
 * Accepts properties of type [SwitchProps]({% slug api_inputs_switchprops %}).
 * Obtaining the `ref` returns an object of type [SwitchHandle]({% slug api_inputs_switchhandle %}).
 */
var Switch = (0,main_js_.withPropsContext)(SwitchPropsContext, SwitchWithoutContext);
Switch.displayName = 'KendoReactSwitch';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/checkbox/Checkbox.js
var Checkbox_assign = (undefined && undefined.__assign) || function () {
    Checkbox_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Checkbox_assign.apply(this, arguments);
};
var Checkbox_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the PropsContext of the `Checkbox` component.
 * Used for global configuration of all `Checkbox` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var CheckboxPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact Checkbox component]({% slug overview_checkbox %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <Checkbox />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Checkbox = index_js_.forwardRef(function (directProps, target) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(CheckboxPropsContext, directProps);
    var _b = props, ariaDescribedBy = _b.ariaDescribedBy, ariaLabelledBy = _b.ariaLabelledBy, checked = _b.checked, className = _b.className, labelClassName = _b.labelClassName, children = _b.children, defaultChecked = _b.defaultChecked, disabled = _b.disabled, defaultValue = _b.defaultValue, id = _b.id, size = _b.size, rounded = _b.rounded, label = _b.label, labelPlacement = _b.labelPlacement, name = _b.name, labelOptional = _b.labelOptional, onChange = _b.onChange, onFocus = _b.onFocus, onBlur = _b.onBlur, tabIndex = _b.tabIndex, value = _b.value, required = _b.required, valid = _b.valid, validationMessage = _b.validationMessage, validityStyles = _b.validityStyles, 
    // Removed to support direct use in Form Field component
    visited = _b.visited, touched = _b.touched, modified = _b.modified, others = Checkbox_rest(_b, ["ariaDescribedBy", "ariaLabelledBy", "checked", "className", "labelClassName", "children", "defaultChecked", "disabled", "defaultValue", "id", "size", "rounded", "label", "labelPlacement", "name", "labelOptional", "onChange", "onFocus", "onBlur", "tabIndex", "value", "required", "valid", "validationMessage", "validityStyles", "visited", "touched", "modified"]);
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current,
        focus: focusElement,
        get name() { return elementRef.current && elementRef.current.name; }
    }); }, [focusElement]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var _c = index_js_.useState(defaultChecked), stateChecked = _c[0], setStateChecked = _c[1];
    var _d = index_js_.useState(defaultValue), stateValue = _d[0], setStateValue = _d[1];
    var valueIsBoolean = (typeof value === 'boolean' || value === null);
    var isCheckedControlled = checked !== undefined;
    var isValueControlled = valueIsBoolean;
    var currentValue = isValueControlled ? value : stateValue;
    var currentChecked = isCheckedControlled ? checked : isValueControlled ? undefined : stateChecked;
    var useValueAsChecked = currentChecked === undefined && currentValue;
    var checkedProp = useValueAsChecked ? currentValue : currentChecked;
    var valueProp = (useValueAsChecked || isValueControlled) ? (value === null ? value : undefined) : value || currentValue;
    var indeterminateProp = checkedProp === null || valueProp === null;
    var calculatedId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var localizationService = (0,index_mjs_.useLocalization)();
    var localizeMessage = function (message) {
        return localizationService.toLanguageString(message, messages[message]);
    };
    var defaultValidationMessage = localizeMessage(checkboxValidation);
    var optionalMessage = localizeMessage(checkboxOptionalText);
    var isValid = valid !== undefined ?
        valid :
        !required ?
            true :
            currentChecked ? true : false;
    index_js_.useEffect(function () {
        if (elementRef.current && elementRef.current.setCustomValidity) {
            elementRef.current.setCustomValidity(isValid
                ? ''
                : (validationMessage || defaultValidationMessage));
        }
    }, [isValid, validationMessage, defaultValidationMessage]);
    var setValue = index_js_.useCallback(function (e, val) {
        if (!isValueControlled && !disabled) {
            setStateValue(val);
            if (!isCheckedControlled && !disabled) {
                setStateChecked(val);
            }
        }
        if (onChange && !disabled) {
            (0,main_js_.dispatchEvent)(onChange, e, Checkbox_assign(Checkbox_assign({}, getImperativeHandle()), { value: val }), { value: val });
        }
    }, [isCheckedControlled, disabled, onChange, isValueControlled, getImperativeHandle]);
    var handleChange = index_js_.useCallback(function (e) {
        var newValue = e.target.checked;
        setValue(e, newValue);
    }, [setValue, value]);
    var handleKeyDown = index_js_.useCallback(function (e) {
        if (disabled) {
            return;
        }
        var keyCode = e.keyCode;
        var currentVal = e.currentTarget.checked;
        if (keyCode === main_js_.Keys.space) {
            e.preventDefault();
            e.stopPropagation();
            setValue(e, !currentVal);
        }
    }, [disabled, setValue]);
    var handleKeyUp = index_js_.useCallback(function (e) {
        if (disabled) {
            return;
        }
        var keyCode = e.keyCode;
        if (keyCode === main_js_.Keys.space) {
            e.preventDefault();
        }
    }, [disabled]);
    var handleFocus = index_js_.useCallback(function (e) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, e, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled, getImperativeHandle]);
    var handleBlur = index_js_.useCallback(function (e) {
        if (onBlur && !disabled) {
            (0,main_js_.dispatchEvent)(onBlur, e, getImperativeHandle(), undefined);
        }
    }, [onBlur, disabled, getImperativeHandle]);
    var dir = (0,main_js_.useDir)(elementRef, props.dir);
    var checkboxClasses = (0,main_js_.classNames)('k-checkbox-wrap', className);
    var inputProps = Checkbox_assign(Checkbox_assign({ type: 'checkbox', className: (0,main_js_.classNames)('k-checkbox', (_a = {},
            _a["k-checkbox-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
            _a['k-indeterminate'] = indeterminateProp,
            _a['k-disabled'] = disabled,
            _a['k-invalid k-invalid'] = !(isValid || validityStyles !== undefined || validityStyles === true),
            _a)), ref: elementRef, name: name, id: id || calculatedId, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, checked: Boolean(checkedProp), disabled: disabled, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), role: 'checkbox', required: required !== undefined ? required : false, 'aria-checked': currentChecked || checkedProp ?
            true :
            indeterminateProp ?
                'mixed' :
                false, 'aria-disabled': disabled || undefined }, others), { onChange: handleChange, onKeyDown: handleKeyDown, onKeyUp: handleKeyUp, onFocus: handleFocus, onBlur: handleBlur });
    var checkboxInput = (index_js_.createElement(index_js_.Fragment, null, 
    // removing value prop is required due to bug in react where
    // value set to undefined override default submit value
    valueProp === undefined ? (index_js_.createElement("input", Checkbox_assign({}, inputProps))) : (index_js_.createElement("input", Checkbox_assign({}, inputProps, { value: valueIsBoolean ? undefined : valueProp === null ? '' : valueProp })))));
    var checkboxLabel = (index_js_.createElement(index_js_.Fragment, null, label !== undefined ? (index_js_.createElement("label", { className: (0,main_js_.classNames)('k-checkbox-label', labelClassName), htmlFor: id || calculatedId, style: { userSelect: 'none' } },
        label,
        labelOptional && index_js_.createElement("span", { className: "k-label-optional" }, optionalMessage))) : null));
    return (index_js_.createElement(index_js_.Fragment, null, (labelPlacement === 'before') ? (index_js_.createElement("span", { className: checkboxClasses, dir: 'rtl' },
        checkboxInput,
        checkboxLabel,
        children)) : (index_js_.createElement("span", { className: checkboxClasses, dir: dir },
        checkboxInput,
        checkboxLabel,
        children))));
});
Checkbox.propTypes = {
    checked: prop_types_index_js_.bool,
    className: prop_types_index_js_.string,
    defaultChecked: prop_types_index_js_.bool,
    defaultValue: prop_types_index_js_.any,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    id: prop_types_index_js_.string,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    ariaLabelledBy: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    label: prop_types_index_js_.any,
    labelPlacement: prop_types_index_js_.string,
    labelOptional: prop_types_index_js_.bool,
    name: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    value: prop_types_index_js_.any,
    validationMessage: prop_types_index_js_.string,
    required: prop_types_index_js_.bool,
    validate: prop_types_index_js_.bool,
    valid: prop_types_index_js_.bool,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func,
    onBlur: prop_types_index_js_.func
};
var Checkbox_defaultProps = {
    size: 'medium',
    rounded: 'medium'
};
Checkbox.defaultProps = Checkbox_defaultProps;
Checkbox.displayName = 'KendoCheckbox';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/radiobutton/RadioButton.js
var RadioButton_assign = (undefined && undefined.__assign) || function () {
    RadioButton_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RadioButton_assign.apply(this, arguments);
};
var RadioButton_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the PropsContext of the `RadioButton` component.
 * Used for global configuration of all `RadioButton` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var RadioButtonPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact RadioButton component]({% slug overview_radiobutton %}).
 *
 * Accepts properties of type [RadioButtonProps]({% slug api_inputs_radiobuttonprops %}).
 * Obtaining the `ref` returns an object of type [RadioButtonHandle]({% slug api_inputs_radiobuttonhandle %}).
 */
var RadioButton = index_js_.forwardRef(function (directProps, target) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(RadioButtonPropsContext, directProps);
    var ariaDescribedBy = props.ariaDescribedBy, checked = props.checked, children = props.children, className = props.className, disabled = props.disabled, id = props.id, size = props.size, label = props.label, labelPlacement = props.labelPlacement, name = props.name, style = props.style, tabIndex = props.tabIndex, value = props.value, valid = props.valid, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, others = RadioButton_rest(props, ["ariaDescribedBy", "checked", "children", "className", "disabled", "id", "size", "label", "labelPlacement", "name", "style", "tabIndex", "value", "valid", "onChange", "onFocus", "onBlur"]);
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); }, [focusElement]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var calculatedId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var handleChange = index_js_.useCallback(function (event) {
        (0,main_js_.dispatchEvent)(onChange, event, getImperativeHandle(), { value: value });
    }, [onChange, value, disabled]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, event, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled]);
    var handleBlur = index_js_.useCallback(function (event) {
        if (onBlur && !disabled) {
            (0,main_js_.dispatchEvent)(onBlur, event, getImperativeHandle(), undefined);
        }
    }, [onBlur, disabled]);
    var inputProps = RadioButton_assign({ type: 'radio', id: id || calculatedId, name: name, className: (0,main_js_.classNames)('k-radio', (_a = {},
            _a["k-radio-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a['k-invalid'] = valid === false,
            _a), className), ref: elementRef, disabled: disabled, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), checked: checked, style: style, 'aria-describedby': ariaDescribedBy, value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur }, others);
    var radioButtonLabel = (index_js_.createElement(index_js_.Fragment, null, label !== undefined ? (index_js_.createElement("label", { className: 'k-radio-label', htmlFor: id || calculatedId, style: { userSelect: 'none' }, "aria-label": label }, label)) : null));
    var radio = index_js_.createElement("input", RadioButton_assign({}, inputProps));
    return (labelPlacement === 'before'
        ? (index_js_.createElement(index_js_.Fragment, null,
            radioButtonLabel,
            radio,
            children)) : (index_js_.createElement(index_js_.Fragment, null,
        radio,
        radioButtonLabel,
        children)));
});
RadioButton.propTypes = {
    ariaDescribedBy: prop_types_index_js_.string,
    checked: prop_types_index_js_.bool,
    className: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    id: prop_types_index_js_.string,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    label: prop_types_index_js_.string,
    labelPlacement: prop_types_index_js_.string,
    name: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    tabIndex: prop_types_index_js_.number,
    value: prop_types_index_js_.any,
    valid: prop_types_index_js_.bool,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func,
    onBlur: prop_types_index_js_.func
};
var RadioButton_defaultProps = {
    size: 'medium'
};
RadioButton.displayName = 'KendoRadioButton';
RadioButton.defaultProps = RadioButton_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/radiobutton/RadioGroup.js
var RadioGroup_assign = (undefined && undefined.__assign) || function () {
    RadioGroup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RadioGroup_assign.apply(this, arguments);
};






/**
 * Represents the PropsContext of the `RadioGroup` component.
 * Used for global configuration of all `RadioGroup` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var RadioGroupPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact RadioGroup component]({% slug overview_radiogroup %}).
 *
 * Accepts properties of type [RadioGroupProps]({% slug api_inputs_radiogroupprops %}).
 * Obtaining the `ref` returns an object of type [RadioGroupHandle]({% slug api_inputs_radiogrouphandle %}).
 */
var RadioGroup = index_js_.forwardRef(function (directProps, target) {
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(RadioGroupPropsContext, directProps);
    var ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, className = props.className, data = props.data, defaultValue = props.defaultValue, disabled = props.disabled, name = props.name, labelPlacement = props.labelPlacement, layout = props.layout, style = props.style, value = props.value, valid = props.valid, _a = props.item, Item = _a === void 0 ? RadioGroup_defaultProps.item : _a, onChange = props.onChange, onFocus = props.onFocus;
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            (0,main_js_.focusFirstFocusableChild)(elementRef.current);
        }
    }, []);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); }, [focusElement]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var _b = index_js_.useState(defaultValue), stateChecked = _b[0], setStateChecked = _b[1];
    var isControlled = value !== undefined;
    var checkedRadioValue = isControlled ? value : stateChecked;
    var handleChange = index_js_.useCallback(function (event) {
        var currentValue = event.value;
        if (!isControlled && !disabled) {
            setStateChecked(currentValue);
        }
        if (onChange && !disabled) {
            (0,main_js_.dispatchEvent)(onChange, event.syntheticEvent, getImperativeHandle(), { value: currentValue });
        }
    }, [setStateChecked, onChange, disabled]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, event.syntheticEvent, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled]);
    var radioGroupName = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var radioGroupClasses = (0,main_js_.classNames)('k-radio-list', {
        'k-list-horizontal': layout === 'horizontal',
        'k-list-vertical': layout === 'vertical' || layout === undefined
    }, className);
    var dir = (0,main_js_.useRtl)(elementRef, props.dir);
    var radioOptions = (data && data.map(function (option, index) {
        var isCurrentlyChecked = checkedRadioValue === option.value;
        var noOptionChecked = checkedRadioValue === null || checkedRadioValue === undefined;
        var radioButtonProps = RadioGroup_assign(RadioGroup_assign({}, option), { valid: valid, checked: isCurrentlyChecked, disabled: (option.disabled || disabled) ? true : false, labelPlacement: option.labelPlacement ? option.labelPlacement : labelPlacement, tabIndex: option.tabIndex
                ? option.tabIndex
                : (noOptionChecked && index === 0) || isCurrentlyChecked
                    ? 0
                    : -1, index: index, name: name || radioGroupName, onChange: handleChange, onFocus: handleFocus });
        return (index_js_.createElement(Item, { className: (0,main_js_.classNames)('k-radio-item', { 'k-disabled': radioButtonProps.disabled || disabled }), key: index, role: 'none' },
            index_js_.createElement(RadioButton, RadioGroup_assign({}, radioButtonProps))));
    }));
    return (index_js_.createElement("ul", { role: "radiogroup", className: radioGroupClasses, ref: elementRef, dir: dir, style: style, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }, radioOptions));
});
var RadioGroup_defaultProps = {
    item: function (props) { return index_js_.createElement("li", RadioGroup_assign({}, props)); }
};
RadioGroup.propTypes = {
    ariaLabelledBy: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    data: prop_types_index_js_.arrayOf(prop_types_index_js_.object),
    defaultValue: prop_types_index_js_.any,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    labelPlacement: prop_types_index_js_.string,
    layout: prop_types_index_js_.string,
    name: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    value: prop_types_index_js_.any,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func
};
RadioGroup.defaultProps = RadioGroup_defaultProps;
RadioGroup.displayName = 'KendoRadioGroup';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/textarea/TextArea.js
var TextArea_assign = (undefined && undefined.__assign) || function () {
    TextArea_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TextArea_assign.apply(this, arguments);
};
var TextArea_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the PropsContext of the `TextArea` component.
 * Used for global configuration of all `TextArea` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var TextAreaPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact TextArea component]({% slug overview_textarea %}).
 *
 *
 * Accepts properties of type [TextAreaProps]({% slug api_inputs_textareaprops %}).
 * Obtaining the `ref` returns an object of type [TextAreaHandle]({% slug api_inputs_textareahandle %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *     render() {
 *         return <TextArea />;
 *     }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var TextArea = index_js_.forwardRef(function (directProps, target) {
    var _a;
    var props = (0,main_js_.usePropsContext)(TextAreaPropsContext, directProps);
    var _b = props, size = _b.size, rounded = _b.rounded, fillMode = _b.fillMode, ariaDescribedBy = _b.ariaDescribedBy, ariaLabelledBy = _b.ariaLabelledBy, autoSize = _b.autoSize, className = _b.className, defaultValue = _b.defaultValue, disabled = _b.disabled, readOnly = _b.readOnly, required = _b.required, rows = _b.rows, id = _b.id, name = _b.name, placeholder = _b.placeholder, style = _b.style, tabIndex = _b.tabIndex, value = _b.value, valid = _b.valid, validationMessage = _b.validationMessage, validityStyles = _b.validityStyles, onChange = _b.onChange, onFocus = _b.onFocus, onBlur = _b.onBlur, 
    // Removed to support direct use in Form Field component
    visited = _b.visited, touched = _b.touched, modified = _b.modified, others = TextArea_rest(_b, ["size", "rounded", "fillMode", "ariaDescribedBy", "ariaLabelledBy", "autoSize", "className", "defaultValue", "disabled", "readOnly", "required", "rows", "id", "name", "placeholder", "style", "tabIndex", "value", "valid", "validationMessage", "validityStyles", "onChange", "onFocus", "onBlur", "visited", "touched", "modified"]);
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var _c = index_js_.useState(defaultValue), stateValue = _c[0], setStateValue = _c[1];
    var isControlled = value !== undefined;
    var currentValue = isControlled ? value : stateValue;
    var getImperativeHandle = index_js_.useCallback(function () {
        return ({
            element: elementRef,
            focus: focusElement,
            get value() { return currentValue; },
            get name() { return elementRef.current && elementRef.current.name; }
        });
    }, [focusElement, currentValue]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var _d = index_js_.useState('auto'), textAreaHeight = _d[0], setTextAreaHeight = _d[1];
    var calculatedId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var dir = (0,main_js_.useDir)(elementRef, props.dir);
    var isValid = valid !== undefined ?
        valid :
        !required ?
            true :
            currentValue ? true : false;
    index_js_.useEffect(function () {
        if (elementRef.current && elementRef.current.setCustomValidity) {
            elementRef.current.setCustomValidity(isValid
                ? ''
                : (validationMessage || ''));
        }
    }, [isValid, validationMessage]);
    index_js_.useLayoutEffect(function () {
        if (elementRef.current) {
            setTextAreaHeight("".concat(elementRef.current.scrollHeight, "px"));
        }
    }, [currentValue]);
    var handleChange = index_js_.useCallback(function (event) {
        var newValue = event.target.value;
        setTextAreaHeight('auto');
        if (!isControlled && !disabled) {
            setStateValue(newValue);
        }
        if (onChange && !disabled) {
            (0,main_js_.dispatchEvent)(onChange, event, TextArea_assign(TextArea_assign({}, getImperativeHandle()), { value: newValue }), { value: newValue });
        }
    }, [setStateValue, onChange, disabled, isControlled]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, event, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled]);
    var handleBlur = index_js_.useCallback(function (event) {
        if (onBlur && !disabled) {
            (0,main_js_.dispatchEvent)(onBlur, event, getImperativeHandle(), undefined);
        }
    }, [onBlur, disabled]);
    var textAreaProps = TextArea_assign(TextArea_assign({ id: id || calculatedId, role: 'textbox', name: name, className: 'k-input-inner !k-overflow-auto', ref: elementRef, disabled: disabled, rows: rows, placeholder: placeholder, readOnly: readOnly, required: required, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), style: autoSize ? { resize: 'none', overflow: 'hidden', height: textAreaHeight } : {}, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, 'aria-multiline': true, 'aria-disabled': disabled || undefined, value: isControlled ? value : stateValue }, others), { onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur });
    return (index_js_.createElement("span", { className: (0,main_js_.classNames)('k-input', 'k-textarea', (_a = {},
            _a["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a["k-input-".concat(fillMode)] = fillMode,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
            _a['k-invalid'] = !(isValid || validityStyles !== undefined || validityStyles === true),
            _a['k-required'] = required,
            _a['k-disabled'] = disabled,
            _a), className), style: style, dir: dir },
        index_js_.createElement("textarea", TextArea_assign({}, textAreaProps))));
});
TextArea.propTypes = {
    ariaDescribedBy: prop_types_index_js_.string,
    ariaLabelledBy: prop_types_index_js_.string,
    autoSize: prop_types_index_js_.bool,
    className: prop_types_index_js_.string,
    defaultValue: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    readOnly: prop_types_index_js_.bool,
    rows: prop_types_index_js_.number,
    id: prop_types_index_js_.string,
    name: prop_types_index_js_.string,
    placeholder: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    tabIndex: prop_types_index_js_.number,
    value: prop_types_index_js_.oneOfType([
        prop_types_index_js_.string,
        prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        prop_types_index_js_.number
    ]),
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func,
    onBlur: prop_types_index_js_.func,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
};
var TextArea_defaultProps = {
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
};
TextArea.displayName = 'KendoTextArea';
TextArea.defaultProps = TextArea_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/rating/RatingItem.js



/**
 * Represents the RatingItem component.
 */
var RatingItem = index_js_.forwardRef(function (props, ref) {
    var target = index_js_.useRef(null);
    var element = index_js_.useRef(null);
    var dir = (0,main_js_.useDir)(element, props.dir);
    index_js_.useImperativeHandle(target, function () { return ({
        element: element.current,
        props: props,
        value: props.value
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var handleClick = index_js_.useCallback(function (event) {
        if (props.onClick) {
            props.onClick.call(undefined, {
                value: props.value,
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onClick, props.value]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        if (props.onKeyDown) {
            props.onKeyDown.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onKeyDown]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (props.onFocus) {
            props.onFocus.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onFocus]);
    var handleBlur = index_js_.useCallback(function (event) {
        if (props.onBlur) {
            props.onBlur.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onBlur]);
    var handleMouseMove = index_js_.useCallback(function (event) {
        if (props.onMouseMove) {
            props.onMouseMove.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onMouseMove]);
    var handleMouseEnter = index_js_.useCallback(function (event) {
        if (props.onMouseEnter) {
            props.onMouseEnter.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onMouseEnter]);
    var handleMouseLeave = index_js_.useCallback(function (event) {
        if (props.onMouseLeave) {
            props.onMouseLeave.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onMouseLeave]);
    return (index_js_.createElement("span", { id: props.id, ref: element, dir: dir, "data-half": props.half, tabIndex: props.tabIndex, title: props.title, style: props.style, className: (0,main_js_.classNames)('k-rating-item', {
            'k-rtl': dir === 'rtl',
            'k-selected': props.selected,
            'k-hover': props.hovered
        }, props.className), onClick: handleClick, onKeyDown: handleKeyDown, onFocus: handleFocus, onBlur: handleBlur, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onMouseMove: handleMouseMove }, props.children));
});
var RatingItem_propTypes = {
    id: prop_types_index_js_.string,
    icon: prop_types_index_js_.any,
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl']),
    title: prop_types_index_js_.string,
    value: prop_types_index_js_.number,
    half: prop_types_index_js_.bool,
    selected: prop_types_index_js_.bool,
    hovered: prop_types_index_js_.bool
};
var RatingItem_defaultProps = {
    dir: 'ltr'
};
RatingItem.displayName = 'KendoReactRatingItem';
// TODO: delete casting when @types/react is updated!
RatingItem.propTypes = RatingItem_propTypes;
RatingItem.defaultProps = RatingItem_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/rating/utils/index.js
/**
 * @hidden
 */
var toRound = function (num, base) {
    if (num % 1) {
        var percent = Math.pow(10, (base.toString().split('.')[1] || base.toString().split('.')[0]).length);
        return Math.round(num * percent) / percent;
    }
    return num;
};
// Opting out of JS `modulo` calculation due to floating-point problems in JS
// We're looking for the reminder - R.
// x / y = a + R
// R = (x / y) - a | *y
// R = x - (y * a)
// : a = Math.floor(x /y );
/**
 * @hidden
 */
var getRemainder = function (x, y) { return x - (y * Math.floor(x / y)); };
/**
 * @hidden
 */
var isHalf = function (index, value, step) {
    return (toRound(index - step, step) < value) && (value < index);
};
/**
 * @hidden
 */
var isSelected = function (index, value, step, selection) {
    if (value === null) {
        return false;
    }
    if (selection === 'continues') {
        return isHalf(index, value, step)
            ? toRound(index - step / 2, step / 2) <= value
            : index <= value;
    }
    if (selection === 'single') {
        return isHalf(index, value, step)
            ? toRound(index - step / 2, step / 2) === value
            : index === value;
    }
    return false;
};
/**
 * @hidden
 */
var calcIsFirstHalf = function (dir, rect, clientX) {
    return dir === 'ltr'
        ? clientX < (rect.x + (rect.width / 2))
        : clientX > (rect.x + (rect.width / 2));
};
/**
 * @hidden
 */
var isCorrectValue = function (min, max, step, value) {
    for (var i = min; i <= max; i += step) {
        if (value === i) {
            return true;
        }
    }
    return false;
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/rating/rating-reducer.js

/**
 * @hidden
 */
var RATING_ACTION;
(function (RATING_ACTION) {
    RATING_ACTION["select"] = "select";
    RATING_ACTION["deselect"] = "deselect";
    RATING_ACTION["increase"] = "increase";
    RATING_ACTION["decrease"] = "decrease";
    RATING_ACTION["min"] = "min";
    RATING_ACTION["max"] = "max";
    RATING_ACTION["reset"] = "reset";
})(RATING_ACTION || (RATING_ACTION = {}));
/**
 * @hidden
 */
var ratingReducer = function (state, action) {
    switch (action.type) {
        case RATING_ACTION.select:
            if (action.payload === undefined || action.step === undefined) {
                return state;
            }
            if (action.payload === state) {
                return null;
            }
            return action.payload >= action.min
                ? action.payload < action.max
                    ? toRound(action.payload, action.step)
                    : action.max
                : action.min;
        case RATING_ACTION.deselect:
            return null;
        case RATING_ACTION.increase:
            if (action.step === undefined) {
                return state;
            }
            if (state < action.min) {
                return action.min;
            }
            return state + action.step < action.max
                ? toRound(state + action.step, action.step)
                : action.max;
        case RATING_ACTION.decrease:
            if (action.step === undefined) {
                return state;
            }
            return toRound(state - action.step, action.step) >= action.min
                ? toRound(state - action.step, action.step)
                : action.min;
        case RATING_ACTION.min:
            if (action.step === undefined) {
                return state;
            }
            return action.min;
        case RATING_ACTION.max:
            return action.max;
        case RATING_ACTION.reset:
            return null;
        default:
            return state;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/rating/Rating.js
var Rating_assign = (undefined && undefined.__assign) || function () {
    Rating_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Rating_assign.apply(this, arguments);
};









/**
 * @hidden
 */
var useRating = function (defaultValue, args, callback) {
    var _a = index_js_.useState(defaultValue), state = _a[0], setState = _a[1];
    var handleDispatchAction = function (action) {
        var newState = ratingReducer(args.state || state, Rating_assign(Rating_assign({}, action), args));
        if (callback) {
            callback(newState, action.event);
        }
        setState(newState);
    };
    return [state, handleDispatchAction];
};
/**
 * Represents the PropsContext of the `Rating` component.
 * Used for global configuration of all `Rating` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var RatingPropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact Rating component]({% slug overview_rating %}).
 *
 * Accepts properties of type [RatingProps]({% slug api_inputs_ratingprops %}).
 * Obtaining the `ref` returns an object of type [RatingHandle]({% slug api_inputs_ratinghandle %}).
 */
var Rating = index_js_.forwardRef(function (directProps, ref) {
    var props = (0,main_js_.usePropsContext)(RatingPropsContext, directProps);
    var localization = (0,index_mjs_.useLocalization)();
    var target = index_js_.useRef(null);
    var ratingRef = index_js_.useRef(null);
    var dir = (0,main_js_.useDir)(ratingRef, props.dir);
    index_js_.useImperativeHandle(target, function () { return ({
        element: ratingRef.current,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var handleChange = index_js_.useCallback(function (newValue, event) {
        if (props.onChange && target.current) {
            props.onChange.call(undefined, {
                value: newValue,
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onChange]);
    var min = index_js_.useMemo(function () { return props.min !== undefined ? props.min : Rating_defaultProps.min; }, [props.min]);
    var max = index_js_.useMemo(function () { return props.max !== undefined ? props.max : Rating_defaultProps.max; }, [props.max]);
    var precision = index_js_.useMemo(function () { return props.precision || Rating_defaultProps.precision; }, [props.precision]);
    var step = index_js_.useMemo(function () { return props.step !== undefined ? props.step : Rating_defaultProps.step; }, [props.step]);
    var readonly = index_js_.useMemo(function () { return props.readonly || Rating_defaultProps.readonly; }, [props.readonly]);
    var disabled = index_js_.useMemo(function () { return props.disabled || Rating_defaultProps.disabled; }, [props.disabled]);
    var Item = index_js_.useMemo(function () { return props.item || Rating_defaultProps.item; }, [props.item]);
    var _a = useRating(props.defaultValue !== undefined ? props.defaultValue : Rating_defaultProps.defaultValue, {
        state: props.value,
        min: min,
        max: max,
        step: precision === 'half' ? step / 2 : step
    }, handleChange), stateValue = _a[0], dispatchStateValue = _a[1];
    var _b = useRating(null, {
        state: props.value,
        min: min,
        max: max,
        step: precision === 'half' ? step / 2 : step,
        precision: precision
    }), stateHover = _b[0], dispatchStateHover = _b[1];
    var value = index_js_.useMemo(function () { return props.value !== undefined ? props.value : stateValue; }, [props.value, stateValue]);
    var hoveredValue = index_js_.useMemo(function () { return stateHover; }, [stateHover]);
    var selection = index_js_.useMemo(function () { return props.selection || Rating_defaultProps.selection; }, [props.selection]);
    var base = index_js_.useMemo(function () { return step / (precision === 'half' ? 2 : 1); }, [step, precision]);
    var handleItemClick = index_js_.useCallback(function (event) {
        if (!event.target || !event.target.element || readonly || disabled) {
            return;
        }
        if (precision === 'half') {
            var rect = event.target.element.getBoundingClientRect();
            var isFirstHalf = calcIsFirstHalf(dir ? dir : 'ltr', rect, event.syntheticEvent.clientX);
            var payload = isFirstHalf ? toRound(event.target.value - (step / 2), base) : event.target.value;
            dispatchStateValue({ type: RATING_ACTION.select, payload: payload, event: event.syntheticEvent });
        }
        else {
            dispatchStateValue({ type: RATING_ACTION.select, payload: event.target.value, event: event.syntheticEvent });
        }
        if (props.onClick) {
            var ev = {
                value: value,
                target: target.current,
                syntheticEvent: event.syntheticEvent
            };
            props.onClick.call(undefined, ev);
        }
    }, [props.onClick, dispatchStateValue, value]);
    var handleKeyDown = index_js_.useCallback(function (syntheticEvent) {
        if (readonly || disabled) {
            return;
        }
        switch (syntheticEvent.keyCode) {
            case main_js_.Keys.right:
                syntheticEvent.preventDefault();
                dispatchStateValue({
                    type: dir === 'rtl' ? RATING_ACTION.decrease : RATING_ACTION.increase, event: syntheticEvent
                });
                break;
            case main_js_.Keys.left:
                syntheticEvent.preventDefault();
                dispatchStateValue({
                    type: dir === 'rtl' ? RATING_ACTION.increase : RATING_ACTION.decrease, event: syntheticEvent
                });
                break;
            case main_js_.Keys.home:
                syntheticEvent.preventDefault();
                dispatchStateValue({
                    type: dir === 'rtl' ? RATING_ACTION.min : RATING_ACTION.max, event: syntheticEvent
                });
                break;
            case main_js_.Keys.end:
                syntheticEvent.preventDefault();
                dispatchStateValue({
                    type: dir === 'rtl' ? RATING_ACTION.max : RATING_ACTION.min, event: syntheticEvent
                });
                break;
            case main_js_.Keys.esc:
                syntheticEvent.preventDefault();
                dispatchStateValue({
                    type: RATING_ACTION.deselect, event: syntheticEvent
                });
                break;
            default:
                break;
        }
        if (props.onKeyDown) {
            props.onKeyDown.call(undefined, {
                value: value,
                target: target.current,
                syntheticEvent: syntheticEvent
            });
        }
    }, [props.onKeyDown, dispatchStateValue, value]);
    var handleFocus = index_js_.useCallback(function (syntheticEvent) {
        if (props.onFocus) {
            var ev = {
                target: target.current,
                syntheticEvent: syntheticEvent
            };
            props.onFocus.call(undefined, ev);
        }
    }, [props.onFocus]);
    var handleBlur = index_js_.useCallback(function (syntheticEvent) {
        if (props.onBlur) {
            var ev = {
                target: target.current,
                syntheticEvent: syntheticEvent
            };
            props.onBlur.call(undefined, ev);
        }
    }, [props.onBlur]);
    var handleItemMouseMove = index_js_.useCallback(function (event) {
        if (!event.target || !event.target.element) {
            return;
        }
        if (precision === 'half') {
            var rect = event.target.element.getBoundingClientRect();
            var isFirstHalf = calcIsFirstHalf(dir ? dir : 'ltr', rect, event.syntheticEvent.clientX);
            var payload = isFirstHalf ? event.target.value - (step / 2) : event.target.value;
            dispatchStateHover({ type: RATING_ACTION.select, payload: payload, event: event.syntheticEvent });
        }
        else {
            dispatchStateHover({ type: RATING_ACTION.select, payload: event.target.value, event: event.syntheticEvent });
        }
    }, [precision, step, dir]);
    var handleMouseLeave = index_js_.useCallback(function (event) {
        dispatchStateHover({ type: RATING_ACTION.reset, event: event.syntheticEvent });
    }, []);
    var items = [];
    var remainder = getRemainder(toRound(max - min, base), step);
    for (var i = min; i <= max; i = toRound(i + step, base)) {
        var itemValue = toRound(i + remainder, base);
        var half = precision === 'half'
            ? isHalf(itemValue, hoveredValue !== null ? hoveredValue : (value !== null ? value : 0), step)
            : false;
        var selectedValue = isSelected(itemValue, value, step, selection);
        var selected = isSelected(itemValue, hoveredValue !== null ? hoveredValue : value, step, selection);
        var hovered = isSelected(itemValue, hoveredValue, step, selection);
        items.push(index_js_.createElement(Item, { key: itemValue, value: itemValue, dir: dir, title: String(half ? toRound(itemValue - (step / 2), base) : itemValue), icon: props.icon, svgIcon: props.svgIcon, half: half, selected: selectedValue || selected, hovered: hovered, onClick: handleItemClick, onMouseMove: handleItemMouseMove, onMouseLeave: handleMouseLeave },
            half && (index_js_.createElement("span", { className: 'k-rating-precision-complement' },
                !(props.icon || props.svgIconOutline) &&
                    index_js_.createElement(main_js_.IconWrap, { name: 'star-outline', icon: index_es_js_.starOutlineIcon, style: { clipPath: "".concat(dir === 'rtl' ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)') }, size: 'xlarge' }),
                (props.icon || props.svgIconOutline) &&
                    index_js_.createElement(main_js_.IconWrap, { name: (0,main_js_.toIconName)("".concat(props.icon, "-outline")), icon: props.svgIconOutline, size: 'xlarge' }))),
            half && (index_js_.createElement("span", { className: 'k-rating-precision-part' },
                !(props.icon || props.svgIcon) &&
                    index_js_.createElement(main_js_.IconWrap, { name: 'star', icon: index_es_js_.starIcon, style: { clipPath: "".concat(dir === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)') }, size: 'xlarge' }),
                (props.icon || props.svgIcon) &&
                    index_js_.createElement(main_js_.IconWrap, { name: props.icon ? (0,main_js_.toIconName)(props.icon) : undefined, icon: props.svgIcon, size: 'xlarge' }))),
            half && (index_js_.createElement("span", { style: { width: '24px', height: '24px', display: 'block' } })),
            !half &&
                (!(props.icon || props.svgIcon) && (hovered || (selected && !hovered)) && index_js_.createElement(main_js_.IconWrap, { name: 'star', icon: index_es_js_.starIcon, size: 'xlarge' })) ||
                (!(props.icon || props.svgIcon) && !hovered && !selected && index_js_.createElement(main_js_.IconWrap, { name: 'star-outline', icon: index_es_js_.starOutlineIcon, size: 'xlarge' })) ||
                ((props.icon || props.svgIcon) && (hovered || (selected && !hovered)) && index_js_.createElement(main_js_.IconWrap, { name: props.icon, icon: props.svgIcon, size: 'xlarge' })) ||
                ((props.icon || props.svgIcon) && !hovered && index_js_.createElement(main_js_.IconWrap, { name: (0,main_js_.toIconName)("".concat(props.icon, "-outline")), icon: props.svgIconOutline, size: 'xlarge' }))));
    }
    return (index_js_.createElement("span", { id: props.id, style: props.style, ref: ratingRef, role: "slider", dir: dir, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled, undefined), className: (0,main_js_.classNames)('k-rating', {
            'k-rtl': dir === 'rtl',
            'k-readonly': readonly,
            'k-disabled': disabled
        }, props.className), onKeyDown: handleKeyDown, onFocus: handleFocus, onBlur: handleBlur, "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value !== null ? value : undefined, "aria-disabled": disabled ? 'true' : undefined, "aria-label": localization.toLanguageString(ratingAriaLabel, messages[ratingAriaLabel]), "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy },
        index_js_.createElement("input", { id: 'rating', className: 'k-hidden', readOnly: readonly, disabled: disabled }),
        index_js_.createElement("span", { className: 'k-rating-container' }, items),
        props.label &&
            index_js_.createElement("span", { className: 'k-rating-label' }, props.label)));
});
var Rating_propTypes = {
    id: prop_types_index_js_.string,
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl']),
    selection: prop_types_index_js_.oneOf(['continues', 'single']),
    precision: prop_types_index_js_.oneOf(['item', 'half']),
    value: function (props, propName, componentName) {
        if (props.value && props.min && props.max && props.step) {
            var correctValue = props.precision === 'half'
                ? isCorrectValue(props.min, props.max, props.step / 2, props.value)
                : isCorrectValue(props.min, props.max, props.step, props.value);
            if (!correctValue && props.precision === 'half') {
                return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                    The value of the { value } property is not correct, please check your values.\n                    "));
            }
        }
        return null;
    },
    defaultValue: prop_types_index_js_.number,
    min: prop_types_index_js_.number,
    max: prop_types_index_js_.number,
    step: function (props, propName, componentName) {
        if (props.step !== undefined && props.step <= 0) {
            return new Error("Invalid prop + ".concat(propName, " supplied to ").concat(componentName, ".\n                The value of the { step } property is cannot be equal or less than \"0\", please check your values.\n                "));
        }
        return null;
    },
    hovered: prop_types_index_js_.number,
    label: prop_types_index_js_.string,
    readonly: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    half: prop_types_index_js_.bool,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    svgIconOutline: main_js_.svgIconPropType,
    ariaDescribedBy: prop_types_index_js_.string
};
var Rating_defaultProps = {
    dir: 'ltr',
    min: 1,
    max: 5,
    step: 1,
    item: RatingItem,
    defaultValue: null,
    readonly: false,
    disabled: false,
    selection: 'continues',
    precision: 'item'
};
Rating.displayName = 'KendoReactRating';
// TODO: delete casting when @types/react is updated!
Rating.propTypes = Rating_propTypes;
Rating.defaultProps = Rating_defaultProps;

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var point = __webpack_require__(76786);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var rect = __webpack_require__(85932);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js + 1 modules
var transform = __webpack_require__(95739);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/path.js + 4 modules
var path = __webpack_require__(48506);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/image.js
var shapes_image = __webpack_require__(77051);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/group.js
var group = __webpack_require__(29121);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/export-image.js
var export_image = __webpack_require__(38296);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/surface.js + 26 modules
var surface = __webpack_require__(85443);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util.js + 1 modules
var util = __webpack_require__(29938);
;// ../node_modules/.pnpm/@progress+kendo-inputs-common@3.1.2_@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-inputs-common/dist/es/common/drawing-utils.js

var drawing_utils_a = util, elementOffset = drawing_utils_a.elementOffset, limitValue = drawing_utils_a.limitValue;


;// ../node_modules/.pnpm/@progress+kendo-inputs-common@3.1.2_@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-inputs-common/dist/es/signature/signature-pad.js


var Point = point/* default */.A, Rect = rect/* default */.A, signature_pad_transform = transform/* default */.A;
var noop = function () { };
var DECIMAL_DIGITS = 3;
var DEFAULT_COLOR = '#000';
var DEFAULT_BACKGROUND_COLOR = '#fff';
var DEFAULT_PRECISION = 1;
var DEFAULT_SAMPLING_RATE = 200; // Updates per second
var DEFAULT_STROKE_WIDTH = 1;
var DEFAULT_WIDTH = 750;
var DEFAULT_HEIGHT = 250;
var DEFAULT_SCALE = 1;
// Export images at maximized scale (3x) and 2x pixel density to cover HiDPI screens.
var DEFAULT_EXPORT_SCALE = 6;
var SignaturePad = /** @class */ (function () {
    function SignaturePad(element, options) {
        if (options === void 0) { options = {}; }
        this.element = element;
        this.lastMoveTime = 0;
        this.resolveColors(options);
        this.options = Object.assign({
            scale: DEFAULT_SCALE,
            precision: DEFAULT_PRECISION,
            samplingRate: DEFAULT_SAMPLING_RATE,
            smooth: options.smooth !== false,
            color: DEFAULT_COLOR,
            backgroundColor: DEFAULT_BACKGROUND_COLOR,
            strokeWidth: DEFAULT_STROKE_WIDTH,
            onChange: noop,
            onDraw: noop,
            onDrawEnd: noop
        }, options, {
            color: this.color,
            backgroundColor: this.backgroundColor
        });
        this.pathOptions = {
            stroke: {
                color: this.options.color,
                width: this.options.strokeWidth,
                lineCap: 'round',
                lineJoin: 'round'
            }
        };
        this.initSurface();
        this.attachEvents();
    }
    SignaturePad.prototype.destroy = function () {
        this.detachEvents();
    };
    SignaturePad.prototype.clear = function () {
        this.rootGroup.clear();
        this.path = null;
    };
    SignaturePad.prototype.readThemeColors = function () {
        var themeColor;
        var themeBackgroundColor;
        if (typeof document !== 'undefined') {
            var themeElement = this.element.closest(".k-signature") || this.element;
            var computedStyle = themeElement.ownerDocument.defaultView.getComputedStyle(themeElement);
            themeColor = computedStyle.color;
            themeBackgroundColor = computedStyle.backgroundColor;
        }
        this.themeColor = themeColor || this.themeColor || DEFAULT_COLOR;
        this.themeBackgroundColor = themeBackgroundColor || this.themeBackgroundColor || DEFAULT_BACKGROUND_COLOR;
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    SignaturePad.prototype.resolveColors = function (options) {
        if (options === void 0) { options = {}; }
        this.readThemeColors();
        this.color = options.color || (this.options || {}).color || this.themeColor;
        this.backgroundColor = options.backgroundColor || (this.options || {}).backgroundColor || this.themeBackgroundColor;
    };
    Object.defineProperty(SignaturePad.prototype, "isDrawing", {
        /* eslint-enable @typescript-eslint/no-explicit-any */
        get: function () {
            return Boolean(this.points);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignaturePad.prototype, "pathData", {
        get: function () {
            var _a;
            return (_a = this.path) === null || _a === void 0 ? void 0 : _a.toString(DECIMAL_DIGITS);
        },
        set: function (value) {
            this.clear();
            this.path = path/* MultiPath */.P.parse(value, this.pathOptions);
            this.rootGroup.append(this.path);
        },
        enumerable: false,
        configurable: true
    });
    SignaturePad.prototype.loadImage = function (data, size) {
        if (size === void 0) { size = []; }
        if (!data) {
            this.clear();
            return;
        }
        var _a = this.size, width = _a[0], height = _a[1];
        var contentWidth = width / this.options.scale;
        var contentHeight = height / this.options.scale;
        var importWidth = size[0] || contentWidth * DEFAULT_EXPORT_SCALE;
        var importHeight = size[1] || contentHeight * DEFAULT_EXPORT_SCALE;
        var scaleX = contentWidth / importWidth;
        var scaleY = contentHeight / importHeight;
        var scale = Math.min(scaleX, scaleY);
        var img = new shapes_image/* default */.A(data, new rect/* default */.A([0, 0], [importWidth, importHeight]));
        img.transform(signature_pad_transform().scale(scale, scale));
        this.clear();
        this.rootGroup.append(img);
    };
    SignaturePad.prototype.exportImage = function (options) {
        var _a;
        var _b = this.size, width = _b[0], height = _b[1];
        var contentWidth = width / this.options.scale;
        var contentHeight = height / this.options.scale;
        var exportWidth = (options === null || options === void 0 ? void 0 : options.width) || contentWidth * DEFAULT_EXPORT_SCALE;
        var exportHeight = (options === null || options === void 0 ? void 0 : options.height) || contentHeight * DEFAULT_EXPORT_SCALE;
        var scaleX = exportWidth / contentWidth;
        var scaleY = exportHeight / contentHeight;
        var scale = Math.min(scaleX, scaleY);
        var exportRect = new Rect([0, 0], [exportWidth, exportHeight]);
        var exportGroup = new group/* default */.A({
            clip: path/* Path */.w.fromRect(exportRect)
        });
        var contentGroup = new group/* default */.A({
            transform: signature_pad_transform().scale(scale, scale)
        });
        var frame = path/* Path */.w.fromRect(exportRect, {
            fill: {
                color: this.options.backgroundColor
            }
        });
        exportGroup.append(frame);
        exportGroup.append(contentGroup);
        (_a = contentGroup.children).push.apply(_a, this.rootGroup.children);
        return (0,export_image/* default */.A)(exportGroup, Object.assign({
            width: exportWidth,
            height: exportHeight
        }, options));
    };
    SignaturePad.prototype.resize = function () {
        this.surface.resize(true);
    };
    SignaturePad.prototype.setOptions = function (options) {
        this.resolveColors(options);
        Object.assign(this.options, options, {
            color: this.color,
            backgroundColor: this.backgroundColor
        });
        this.pathOptions.stroke.color = this.options.color;
        this.pathOptions.stroke.width = this.options.strokeWidth;
        if (this.path) {
            this.path.options.set('stroke.color', this.options.color);
            this.path.options.set('stroke.width', this.options.strokeWidth);
        }
        this.background.options.set('fill.color', this.options.backgroundColor);
    };
    SignaturePad.prototype.initSurface = function () {
        this.surface = surface/* default */.A.create(this.element, { type: 'canvas' });
        this.element.style.touchAction = 'none';
        var scale = this.options.scale;
        this.rootGroup = new group/* default */.A({
            transform: signature_pad_transform().scale(scale, scale)
        });
        // The signature is not resizable, store initial dimensions.
        var width = this.element.offsetWidth || DEFAULT_WIDTH;
        var height = this.element.offsetHeight || DEFAULT_HEIGHT;
        this.size = [width, height];
        this.background = path/* Path */.w.fromRect(new Rect([0, 0], this.size), {
            fill: {
                color: this.options.backgroundColor
            }
        });
        this.surface.draw(this.background);
        this.surface.draw(this.rootGroup);
    };
    SignaturePad.prototype.attachEvents = function () {
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.element.addEventListener('pointerdown', this.onPointerDown);
        this.element.addEventListener('pointerup', this.onPointerUp);
        this.element.addEventListener('dragstart', this.onDragStart);
    };
    SignaturePad.prototype.detachEvents = function () {
        this.element.removeEventListener('pointerdown', this.onPointerDown);
        this.detachPointerMove();
        this.element.removeEventListener('pointerup', this.onPointerUp);
        this.element.removeEventListener('dragstart', this.onDragStart);
    };
    SignaturePad.prototype.attachPointerMove = function () {
        this.element.addEventListener('pointermove', this.onPointerMove);
    };
    SignaturePad.prototype.detachPointerMove = function () {
        this.element.removeEventListener('pointermove', this.onPointerMove);
    };
    SignaturePad.prototype.touchPoint = function (e) {
        var offset = elementOffset(this.element);
        var pageX = e.pageX;
        var pageY = e.pageY;
        var scale = 1 / this.options.scale;
        return new Point(pageX - offset.left, pageY - offset.top).scale(scale, scale);
    };
    SignaturePad.prototype.onDragStart = function (e) {
        // fixes a problem that is currently reproducible in Chrome on Windows only
        // 1. Start selecting a text on the page and while holding, move inside the signature
        // 2. Release.
        // 3. Start drawing without releasing the mouse - the action is blocked (browser assumes dragstart event).
        // 4. If you release, then you can continue drawing although you haven't pressed on the drawing surface.
        e.preventDefault();
    };
    SignaturePad.prototype.onPointerDown = function (e) {
        if (this.options.readonly || !e.isPrimary || !isMainButton(e)) {
            return;
        }
        this.detachPointerMove();
        this.attachPointerMove();
        if (!this.path) {
            this.path = new path/* MultiPath */.P(this.pathOptions);
            this.rootGroup.append(this.path);
        }
        this.options.onDraw();
        this.element.setPointerCapture(e.pointerId);
        var point = this.touchPoint(e);
        this.points = [point];
        this.path.moveTo(point);
    };
    SignaturePad.prototype.onPointerMove = function (e) {
        if (!this.points || !this.path || !e.isPrimary) {
            return;
        }
        var now = (new Date()).getTime();
        var elapsed = now - this.lastMoveTime;
        var minTimeDelta = 1000 / limitValue(this.options.samplingRate, 1, 10000);
        if (elapsed < minTimeDelta) {
            return;
        }
        else {
            this.lastMoveTime = now;
        }
        var point = this.touchPoint(e);
        var lastPoint = this.points[this.points.length - 1];
        var minDelta = 1 / limitValue(this.options.precision, 0.01, 100);
        if (point.distanceTo(lastPoint) < minDelta) {
            return;
        }
        this.points.push(point);
        this.path.lineTo(point);
    };
    SignaturePad.prototype.onPointerUp = function (e) {
        if (!e.isPrimary || !this.path || !this.points || this.options.readonly) {
            return;
        }
        this.detachPointerMove();
        if (this.options.smooth) {
            var segments = path/* Path */.w.curveFromPoints(this.points);
            this.path.paths.splice(this.path.paths.length - 1, 1, segments);
        }
        this.points = null;
        this.options.onDrawEnd();
        this.options.onChange(this.pathData);
    };
    return SignaturePad;
}());

function isMainButton(e) {
    return typeof (e.button) !== 'number' || e.button === 0;
}

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-dialogs@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/main.js)
var kendo_react_dialogs_dist_es_main_js_ = __webpack_require__(71704);
;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/signature/utils/index.js
/**
 * @hidden
 */
function hasParent(element, parent) {
    var current = element;
    while (current && current !== parent) {
        current = current.parentNode;
    }
    return current ? true : false;
}

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/signature/Signature.js
var Signature_assign = (undefined && undefined.__assign) || function () {
    Signature_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Signature_assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};












var Signature_DEFAULT_WIDTH = 250;
var Signature_DEFAULT_HEIGHT = 84;
var DEFAULT_POPUP_SCALE = 3;
var Signature_DEFAULT_EXPORT_SCALE = 2;
var Signature_DEFAULT_COLOR = '#000000';
var Signature_DEFAULT_BACKGROUND_COLOR = '#ffffff';
/**
 * @hidden
 */
var Signature_isControlled = function (prop) {
    return prop !== undefined;
};
/**
 * Represents the PropsContext of the `Signature` component.
 * Used for global configuration of all `Signature` instances.
 *
 * For more information, refer to the [Inputs Props Context]({% slug props-context_inputs %}) article.
 */
var SignaturePropsContext = (0,main_js_.createPropsContext)();
/**
 * Represents the [KendoReact Signature component]({% slug overview_signature %}).
 */
var Signature = index_js_.forwardRef(function (directProps, target) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var props = (0,main_js_.usePropsContext)(SignaturePropsContext, directProps);
    var localizationService = (0,index_mjs_.useLocalization)();
    var elementRef = index_js_.useRef(null);
    var canvasRef = index_js_.useRef(null);
    var dialogRef = index_js_.useRef(null);
    var minimizeButtonRef = index_js_.useRef(null);
    var maximizeButtonRef = index_js_.useRef(null);
    var _b = index_js_.useState(), instance = _b[0], setInstance = _b[1];
    var _c = index_js_.useState(false), focused = _c[0], setFocused = _c[1];
    var _d = index_js_.useState(false), isDrawing = _d[0], setIsDrawing = _d[1];
    var _e = index_js_.useState(), stateValue = _e[0], setStateValue = _e[1];
    var _f = index_js_.useState(), popupValue = _f[0], setPopupValue = _f[1];
    var isValueControlled = Signature_isControlled(props.value);
    var value = isValueControlled ? props.value : stateValue;
    var _g = index_js_.useState(false), stateOpen = _g[0], setStateOpen = _g[1];
    var isOpenControlled = Signature_isControlled(props.open);
    var open = isOpenControlled ? props.open : stateOpen;
    var showMaximize = !(props.maximized || isDrawing || !props.maximizable || props.disabled);
    var showMinimize = props.maximized && !isDrawing;
    var isEmpty = !(props.value || stateValue);
    var showClear = !(isEmpty || isDrawing || props.readOnly || props.disabled);
    var maximizeTitle = localizationService.toLanguageString(signatureMaximize, messages[signatureMaximize]);
    var minimizeTitle = localizationService.toLanguageString(signatureMinimize, messages[signatureMinimize]);
    var clearTitle = localizationService.toLanguageString(signatureClear, messages[signatureClear]);
    var popupScale = props.popupScale || DEFAULT_POPUP_SCALE;
    var exportScale = props.exportScale || Signature_DEFAULT_EXPORT_SCALE;
    var onValueChange = function (nextValue) {
        setStateValue(nextValue);
        if (props.onChange) {
            props.onChange({ value: nextValue });
        }
    };
    var onDialogChange = function (e) {
        instance === null || instance === void 0 ? void 0 : instance.loadImage(e.value);
        onValueChange(e.value);
    };
    index_js_.useEffect(function () {
        if (props.value !== stateValue) {
            setStateValue(props.value);
            instance === null || instance === void 0 ? void 0 : instance.loadImage(props.value);
        }
    }, [props.value]);
    var reset = function () {
        instance === null || instance === void 0 ? void 0 : instance.clear();
        onValueChange();
    };
    var setOpen = index_js_.useCallback(function (nextOpen) {
        if (!isOpenControlled) {
            setStateOpen(nextOpen);
        }
    }, [isOpenControlled]);
    var onDialogClose = function (event) {
        var _a, _b;
        onMinimizeClick(event);
        (_b = (((_a = maximizeButtonRef.current) === null || _a === void 0 ? void 0 : _a.element) || canvasRef.current)) === null || _b === void 0 ? void 0 : _b.focus();
    };
    var colorGetter = index_js_.useCallback(function () {
        var defaultColor = Signature_DEFAULT_COLOR;
        if (!props.color && typeof document !== 'undefined' && elementRef.current) {
            defaultColor = getComputedStyle(elementRef.current).color;
        }
        return props.color || defaultColor;
    }, [props.color]);
    var backgroundColorGetter = index_js_.useCallback(function () {
        var defaultBackgroundColor = Signature_DEFAULT_BACKGROUND_COLOR;
        if (!props.backgroundColor && typeof document !== 'undefined' && elementRef.current) {
            defaultBackgroundColor = getComputedStyle(elementRef.current).backgroundColor;
        }
        return props.backgroundColor || defaultBackgroundColor;
    }, [props.backgroundColor]);
    var getOptions = function () {
        return {
            scale: props.maximized ? props.popupScale : 1,
            color: colorGetter(),
            backgroundColor: backgroundColorGetter(),
            strokeWidth: props.strokeWidth,
            smooth: props.smooth,
            readonly: props.readOnly
        };
    };
    var exportImage = function (exportSize) { return __awaiter(void 0, void 0, void 0, function () {
        var width, height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = exportSize.width, height = exportSize.height;
                    return [4 /*yield*/, (instance === null || instance === void 0 ? void 0 : instance.exportImage({
                            width: width * exportScale,
                            height: height * exportScale
                        }))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    index_js_.useEffect(function () {
        var canvas = canvasRef.current;
        var pad = new SignaturePad(canvas, getOptions());
        if (value) {
            pad.loadImage(value);
        }
        setInstance(pad);
        return function () { return pad.destroy(); };
    }, []);
    index_js_.useEffect(function () {
        instance === null || instance === void 0 ? void 0 : instance.setOptions({
            onChange: function () { return __awaiter(void 0, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = onValueChange;
                        return [4 /*yield*/, exportImage(elementSize())];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            }); }); },
            onDraw: function () { return setIsDrawing(true); },
            onDrawEnd: function () { return setIsDrawing(false); }
        });
    }, [instance]);
    index_js_.useLayoutEffect(function () { return instance === null || instance === void 0 ? void 0 : instance.setOptions(getOptions()); }, [props.readOnly, props.color, props.backgroundColor, props.strokeWidth, props.smooth]);
    index_js_.useEffect(function () {
        var _a, _b;
        var overlay = (_b = (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.querySelector('.k-overlay');
        if (!overlay) {
            return;
        }
        var onOverlayClick = function () { return setOpen(false); };
        overlay.addEventListener('click', onOverlayClick);
        return function () { return overlay.removeEventListener('click', onOverlayClick); };
    }, [open]);
    index_js_.useEffect(function () {
        if (!open || typeof document === 'undefined') {
            return;
        }
        var onDocumentKeydown = function (e) {
            if (e.keyCode === main_js_.Keys.esc) {
                setOpen(false);
            }
        };
        document.addEventListener('keydown', onDocumentKeydown);
        return function () { return document.removeEventListener('keydown', onDocumentKeydown); };
    }, [open]);
    index_js_.useEffect(function () {
        var _a, _b;
        if (!props.maximized) {
            return;
        }
        (_b = (_a = minimizeButtonRef.current) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.focus();
    }, []);
    var focusElement = index_js_.useCallback(function () { var _a; return (_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, []);
    var valueGetter = index_js_.useCallback(function () { return props.value; }, [props.value]);
    var nameGetter = index_js_.useCallback(function () { return props.name; }, [props.name]);
    var requiredGetter = index_js_.useCallback(function () { return props.required; }, [props.required]);
    var validityGetter = index_js_.useCallback(function () {
        var customError = props.validationMessage !== undefined;
        var currentValue = valueGetter();
        var valueMissing = !currentValue;
        var valid = props.valid !== undefined ?
            props.valid :
            (!requiredGetter() || !valueMissing);
        return {
            customError: customError,
            valid: valid,
            valueMissing: valueMissing
        };
    }, [props.validationMessage, props.valid, valueGetter, requiredGetter]);
    var validityStylesGetter = index_js_.useCallback(function () {
        return props.validityStyles;
    }, [props.validityStyles]);
    var propsGetter = index_js_.useCallback(function () {
        return props;
    }, [props]);
    var getImperativeHandle = index_js_.useCallback(function () {
        var options = {
            element: elementRef.current,
            focus: focusElement
        };
        Object.defineProperty(options, 'name', { get: nameGetter });
        Object.defineProperty(options, 'value', { get: valueGetter });
        Object.defineProperty(options, 'validity', { get: validityGetter });
        Object.defineProperty(options, 'validityStyles', { get: validityStylesGetter });
        Object.defineProperty(options, 'required', { get: requiredGetter });
        Object.defineProperty(options, 'props', { get: propsGetter });
        Object.defineProperty(options, 'color', { get: colorGetter });
        Object.defineProperty(options, 'backgroundColor', { get: backgroundColorGetter });
        return options;
    }, [nameGetter, valueGetter, validityGetter, validityStylesGetter, requiredGetter, focusElement, propsGetter, colorGetter, backgroundColorGetter]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var onFocus = index_js_.useCallback(function (event) {
        if (focused || props.maximized) {
            return;
        }
        setFocused(true);
        (0,main_js_.dispatchEvent)(props.onFocus, event, getImperativeHandle(), {});
    }, [focused, props.onFocus, getImperativeHandle]);
    var onBlur = index_js_.useCallback(function (event) {
        var insideWrapper = hasParent(event.relatedTarget, elementRef.current);
        if (insideWrapper) {
            return;
        }
        setFocused(false);
        (0,main_js_.dispatchEvent)(props.onBlur, event, getImperativeHandle(), {});
    }, [focused, props.onBlur, getImperativeHandle]);
    var onMaximizeClick = index_js_.useCallback(function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = setPopupValue;
                    return [4 /*yield*/, exportImage(popupSize())];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    setOpen(true);
                    (0,main_js_.dispatchEvent)(props.onOpen, event, getImperativeHandle(), {});
                    return [2 /*return*/];
            }
        });
    }); }, [open, isOpenControlled, props.onOpen, props.value, stateValue, getImperativeHandle]);
    var onMinimizeClick = index_js_.useCallback(function (event) {
        setOpen(false);
        (0,main_js_.dispatchEvent)(props.onClose, event, getImperativeHandle(), {});
    }, [open, isOpenControlled, props.onClose, getImperativeHandle]);
    var onClear = function () {
        reset();
        focusElement();
    };
    var elementSize = function () {
        var _a, _b;
        var width = props.width || ((_a = elementRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || Signature_DEFAULT_WIDTH;
        var height = props.height || ((_b = elementRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || Signature_DEFAULT_HEIGHT;
        return {
            width: width,
            height: height
        };
    };
    var popupSize = function () {
        var _a = elementSize(), width = _a.width, height = _a.height;
        return {
            width: width * popupScale,
            height: height * popupScale
        };
    };
    var isValid = !validityStylesGetter() || validityGetter().valid;
    return (index_js_.createElement("div", { ref: elementRef, dir: props.dir, style: Signature_assign({ width: props.width, height: props.height }, props.style), className: (0,main_js_.classNames)('k-input', 'k-signature', (_a = {
                'k-signature-maximized': props.maximized
            },
            _a["k-signature-".concat(main_js_.kendoThemeMaps.sizeMap[props.size] || props.size)] = props.size,
            _a["k-input-".concat(props.fillMode)] = props.fillMode,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[props.rounded] || props.rounded)] = props.rounded,
            _a['k-invalid'] = !isValid,
            _a['k-required'] = props.required,
            _a['k-disabled'] = props.disabled,
            _a['k-focus'] = focused,
            _a), props.className), onFocus: onFocus, onBlur: onBlur },
        index_js_.createElement("div", { className: 'k-signature-canvas', ref: canvasRef, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), role: "img", id: props.id, "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy, "aria-disabled": props.disabled ? 'true' : undefined }),
        index_js_.createElement("div", { className: 'k-signature-actions k-signature-actions-top' },
            showMaximize && (index_js_.createElement(dist_es_main_js_.Button, { className: 'k-signature-action k-signature-maximize', ref: maximizeButtonRef, icon: 'hyperlink-open', svgIcon: index_es_js_.hyperlinkOpenIcon, fillMode: 'flat', size: props.size, onClick: onMaximizeClick, "aria-label": maximizeTitle, title: maximizeTitle })),
            showMinimize && (index_js_.createElement(dist_es_main_js_.Button, { className: 'k-signature-action k-signature-minimize k-rotate-180', ref: minimizeButtonRef, icon: 'hyperlink-open', svgIcon: index_es_js_.hyperlinkOpenIcon, fillMode: 'flat', size: props.size, onClick: onMinimizeClick, "aria-label": minimizeTitle, title: minimizeTitle }))),
        !props.hideLine && (index_js_.createElement("div", { className: 'k-signature-line', style: { zIndex: 2, pointerEvents: 'none' } })),
        index_js_.createElement("div", { className: 'k-signature-actions k-signature-actions-bottom' }, showClear && (index_js_.createElement(dist_es_main_js_.Button, { className: 'k-signature-action k-signature-clear', icon: 'x', svgIcon: index_es_js_.xIcon, fillMode: 'flat', size: props.size, onClick: onClear, "aria-label": clearTitle, title: clearTitle }))),
        open && (index_js_.createElement(kendo_react_dialogs_dist_es_main_js_.Dialog, { ref: dialogRef },
            index_js_.createElement(Signature, Signature_assign({}, props, popupSize(), { value: popupValue, maximized: true, exportScale: (1 / popupScale) * exportScale, open: false, onChange: onDialogChange, onClose: onDialogClose }))))));
});
Signature.propTypes = {
    value: prop_types_index_js_.string,
    width: prop_types_index_js_.number,
    height: prop_types_index_js_.number,
    tabIndex: prop_types_index_js_.number,
    dir: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    ariaLabelledBy: prop_types_index_js_.string,
    ariaLabel: prop_types_index_js_.string,
    readOnly: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    validationMessage: prop_types_index_js_.string,
    required: prop_types_index_js_.bool,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func,
    onBlur: prop_types_index_js_.func,
    onOpen: prop_types_index_js_.func,
    onClose: prop_types_index_js_.func,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
};
Signature.displayName = 'KendoSignature';
Signature.defaultProps = {
    strokeWidth: 1,
    smooth: false,
    popupScale: DEFAULT_POPUP_SCALE,
    exportScale: Signature_DEFAULT_EXPORT_SCALE,
    maximizable: true,
    disabled: false,
    required: false,
    validityStyles: true,
    onChange: function (_) { return main_js_.noop; },
    onFocus: function (_) { return main_js_.noop; },
    onBlur: function (_) { return main_js_.noop; },
    onOpen: function (_) { return main_js_.noop; },
    onClose: function (_) { return main_js_.noop; },
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
};

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/textbox/Textbox.js
var Textbox_assign = (undefined && undefined.__assign) || function () {
    Textbox_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Textbox_assign.apply(this, arguments);
};
var Textbox_rest = (undefined && undefined.__rest) || function (s, e) {
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




;
/**
 * Represents the [KendoReact TextBox component]({% slug overview_textbox %}).
 */
var TextBox = index_js_.forwardRef(function (props, ref) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var element = index_js_.useRef(null);
    var target = index_js_.useRef(null);
    var valueDuringChangeRef = index_js_.useRef();
    var valueGetter = index_js_.useCallback(function () {
        var _a;
        if (valueDuringChangeRef.current !== undefined) {
            return valueDuringChangeRef.current;
        }
        else {
            return (_a = element.current) === null || _a === void 0 ? void 0 : _a.value;
        }
    }, []);
    index_js_.useImperativeHandle(target, function () {
        var result = {
            element: element.current
        };
        Object.defineProperty(result, 'value', { get: valueGetter });
        return result;
    });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var _b = props, size = _b.size, fillMode = _b.fillMode, rounded = _b.rounded, className = _b.className, dir = _b.dir, style = _b.style, _c = _b.prefix, prefix = _c === void 0 ? Textbox_defaultProps.prefix : _c, _d = _b.suffix, suffix = _d === void 0 ? Textbox_defaultProps.suffix : _d, valid = _b.valid, 
    // Destruct to avoid warning when used inside a form field
    _modified = _b.modified, _touched = _b.touched, _visited = _b.visited, other = Textbox_rest(_b, ["size", "fillMode", "rounded", "className", "dir", "style", "prefix", "suffix", "valid", "modified", "touched", "visited"]);
    var Prefix = (0,main_js_.useCustomComponent)(prefix)[0];
    var Suffix = (0,main_js_.useCustomComponent)(suffix)[0];
    var _e = index_js_.useState(false), focused = _e[0], setFocused = _e[1];
    var handleFocus = function (_) {
        setFocused(true);
    };
    var handleBlur = function (_) {
        setFocused(false);
    };
    var handleChange = index_js_.useCallback(function (event) {
        valueDuringChangeRef.current = event.target.value;
        if (props.onChange) {
            props.onChange.call(undefined, {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                value: event.target.value,
                target: target.current
            });
        }
        valueDuringChangeRef.current = undefined;
    }, [props.onChange]);
    var _f = (0,main_js_.useAsyncFocusBlur)({
        onFocus: handleFocus,
        onBlur: handleBlur,
        onSyncFocus: props.onFocus,
        onSyncBlur: props.onBlur
    }), onFocus = _f.onFocus, onBlur = _f.onBlur;
    return (index_js_.createElement("span", { style: style, dir: dir, className: (0,main_js_.classNames)('k-textbox k-input', (_a = {},
            _a["k-input-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a["k-input-".concat(fillMode)] = fillMode,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
            _a), {
            'k-focus': focused,
            'k-required': props.required,
            'k-disabled': props.disabled,
            'k-invalid': props.valid === false
        }, className), onFocus: onFocus, onBlur: onBlur },
        index_js_.createElement(Prefix, null),
        index_js_.createElement("input", Textbox_assign({ ref: element, className: "k-input-inner" }, other, { onChange: handleChange })),
        index_js_.createElement(Suffix, null)));
});
var Textbox_defaultProps = {
    prefix: function (_) { return null; },
    suffix: function (_) { return null; },
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid'
};
TextBox.propTypes = {
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'flat', 'outline'])
};
TextBox.displayName = 'KendoReactTextBoxComponent';
TextBox.defaultProps = Textbox_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/InputClearValue.js
var InputClearValue_assign = (undefined && undefined.__assign) || function () {
    InputClearValue_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InputClearValue_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact InputClearValue component.
 */
var InputClearValue = index_js_.forwardRef(function (props, ref) {
    var target = index_js_.useRef(null);
    var element = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({ element: element.current }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("span", InputClearValue_assign({}, props, { className: (0,main_js_.classNames)('k-clear-value', props.className) })));
});
InputClearValue.displayName = 'KendoReactInputClearValue';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/InputPrefix.js
var InputPrefix_assign = (undefined && undefined.__assign) || function () {
    InputPrefix_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InputPrefix_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact InputPrefix component.
 */
var InputPrefix = index_js_.forwardRef(function (props, ref) {
    var target = index_js_.useRef(null);
    var element = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({ element: element.current }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("span", InputPrefix_assign({}, props, { className: (0,main_js_.classNames)('k-input-prefix', props.className) })));
});
InputPrefix.displayName = 'KendoReactInputPrefix';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/InputSeparator.js
var InputSeparator_assign = (undefined && undefined.__assign) || function () {
    InputSeparator_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InputSeparator_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact InputSeparator component.
 */
var InputSeparator = index_js_.forwardRef(function (props, ref) {
    var target = index_js_.useRef(null);
    var element = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({ element: element.current }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("span", InputSeparator_assign({}, props, { className: (0,main_js_.classNames)('k-input-separator', props.className) })));
});
InputSeparator.displayName = 'KendoReactInputSeparator';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/InputSuffix.js
var InputSuffix_assign = (undefined && undefined.__assign) || function () {
    InputSuffix_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InputSuffix_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact InputSuffix component.
 */
var InputSuffix = index_js_.forwardRef(function (props, ref) {
    var target = index_js_.useRef(null);
    var element = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({ element: element.current }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("span", InputSuffix_assign({}, props, { className: (0,main_js_.classNames)('k-input-suffix', props.className) })));
});
InputSuffix.displayName = 'KendoReactInputSuffix';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/input/InputValidationIcon.js
var InputValidationIcon_assign = (undefined && undefined.__assign) || function () {
    InputValidationIcon_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InputValidationIcon_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact InputValidationIcon component.
 */
var InputValidationIcon = index_js_.forwardRef(function (props, ref) {
    return index_js_.createElement(main_js_.IconWrap, InputValidationIcon_assign({ ref: ref }, props, { className: (0,main_js_.classNames)('k-input-validation-icon', props.className) }));
});
InputValidationIcon.displayName = 'KendoReactInputValidationIcon';

;// ../node_modules/.pnpm/@progress+kendo-react-inputs@5.19.0_@progress+kendo-drawing@1.21.2_@progress+kendo-lice_b7a1a99b6b28c6b781745dc148f34547/node_modules/@progress/kendo-react-inputs/dist/es/main.js



































































/***/ }

}]);