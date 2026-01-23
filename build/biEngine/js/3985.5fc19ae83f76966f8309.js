"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3985],{

/***/ 83985
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Checkbox: () => (/* binding */ Ca),
  CheckboxPropsContext: () => (/* binding */ Ys),
  ColorGradient: () => (/* binding */ ba),
  ColorGradientPropsContext: () => (/* binding */ xs),
  ColorGradientWithoutContext: () => (/* binding */ vt),
  ColorInput: () => (/* binding */ ga),
  ColorPalette: () => (/* binding */ va),
  ColorPalettePropsContext: () => (/* binding */ ws),
  ColorPaletteWithoutContext: () => (/* binding */ kt),
  ColorPicker: () => (/* binding */ ka),
  ColorPickerPropsContext: () => (/* binding */ Ms),
  FlatColorPicker: () => (/* binding */ wn),
  Input: () => (/* binding */ kn),
  InputClearValue: () => (/* binding */ mr),
  InputPrefix: () => (/* binding */ gr),
  InputPropsContext: () => (/* binding */ ls),
  InputSeparator: () => (/* binding */ br),
  InputSuffix: () => (/* binding */ vr),
  InputValidationIcon: () => (/* binding */ kr),
  InputWithoutContext: () => (/* binding */ gt),
  MaskedTextBox: () => (/* binding */ Gs),
  MaskedTextBoxWithoutContext: () => (/* binding */ yt),
  NumericTextBox: () => (/* binding */ $e),
  NumericTextBoxPropsContext: () => (/* binding */ ss),
  PALETTEPRESETS: () => (/* binding */ Ss),
  RANGE_ACTION: () => (/* binding */ X),
  RATING_ACTION: () => (/* binding */ de),
  RadioButton: () => (/* binding */ xt),
  RadioButtonPropsContext: () => (/* binding */ Js),
  RadioGroup: () => (/* binding */ xa),
  RadioGroupPropsContext: () => (/* binding */ er),
  RangeSlider: () => (/* binding */ ya),
  RangeSliderPropsContext: () => (/* binding */ Us),
  Rating: () => (/* binding */ Sa),
  RatingItem: () => (/* binding */ Et),
  RatingPropsContext: () => (/* binding */ lr),
  SLIDER_LABEL_ATTRIBUTE: () => (/* binding */ yn),
  Signature: () => (/* binding */ St),
  SignaturePropsContext: () => (/* binding */ pr),
  Slider: () => (/* binding */ oa),
  SliderLabel: () => (/* binding */ Mr),
  SliderWithoutContext: () => (/* binding */ bt),
  Switch: () => (/* binding */ Xs),
  SwitchWithoutContext: () => (/* binding */ Ct),
  TextArea: () => (/* binding */ Ea),
  TextAreaPropsContext: () => (/* binding */ tr),
  TextBox: () => (/* binding */ wa),
  inputsMessages: () => (/* binding */ H),
  isCorrectValue: () => (/* binding */ Ja),
  isHalf: () => (/* binding */ da),
  isSelected: () => (/* binding */ Tt),
  maskingChanged: () => (/* binding */ As),
  numericDecreaseValue: () => (/* binding */ Ye),
  numericIncreaseValue: () => (/* binding */ Xe),
  rangeReducer: () => (/* binding */ Ks),
  ratingReducer: () => (/* binding */ ir),
  sanitizeNumber: () => (/* binding */ za),
  toRound: () => (/* binding */ Ce)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var index_js_ = __webpack_require__(51347);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@_b19b9fd6fa997ae023ac46d7de7a9e03/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(52132);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-commo_42e293437ee7197a19d3bc5d61ca2277/node_modules/@progress/kendo-react-common/index.mjs)
var kendo_react_common_index_mjs_ = __webpack_require__(15748);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.1.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.1.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(13209);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-labels@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-label_094d9ce63a125f900bae205ecd5918c8/node_modules/@progress/kendo-react-labels/index.mjs)
var kendo_react_labels_index_mjs_ = __webpack_require__(38635);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-butto_007ff6eb7fcf05ff72c6e705483d391d/node_modules/@progress/kendo-react-buttons/index.mjs)
var kendo_react_buttons_index_mjs_ = __webpack_require__(14800);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/color/parse-color.js
var parse_color = __webpack_require__(23368);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/color/color.js
var color = __webpack_require__(38578);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup_c4e49f01b86dffa09aaa3a18f34846d4/node_modules/@progress/kendo-react-popup/index.mjs)
var kendo_react_popup_index_mjs_ = __webpack_require__(31212);
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
;// ../node_modules/.pnpm/@progress+kendo-inputs-comm_1d69b361ea47067cd904a4d29c965e31/node_modules/@progress/kendo-inputs-common/dist/es/common/drawing-utils.js

var _a = util, elementOffset = _a.elementOffset, limitValue = _a.limitValue;


;// ../node_modules/.pnpm/@progress+kendo-inputs-comm_1d69b361ea47067cd904a4d29c965e31/node_modules/@progress/kendo-inputs-common/dist/es/signature/signature-pad.js


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

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-dialogs@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-dialo_242d6de092268f8a8886d8ca118d31d9/node_modules/@progress/kendo-react-dialogs/index.mjs)
var kendo_react_dialogs_index_mjs_ = __webpack_require__(46824);
;// ../node_modules/.pnpm/@progress+kendo-react-input_62d922e6878b3cd3f14137906e429f48/node_modules/@progress/kendo-react-inputs/index.mjs
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";











const me = {
  name: "@progress/kendo-react-inputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613398,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, Xe = "numerictextbox.increment", Ye = "numerictextbox.decrement", $t = "slider.increment", Ht = "slider.decrement", Ae = "slider.dragTitle", _e = "colorGradient.r", sn = "colorGradient.g", rn = "colorGradient.b", ln = "colorGradient.a", on = "colorGradient.hex", Gt = "colorGradient.contrastRatio", Kt = "colorGradient.colorGradientAALevel", qt = "colorGradient.colorGradientAAALevel", Ut = "colorGradient.colorGradientPass", jt = "colorGradient.colorGradientFail", Wt = "colorGradient.hueSliderLabel", Xt = "colorGradient.alphaSliderLabel", Yt = "colorGradient.toggleInputsButton", cn = "flatColorPicker.cancelBtn", dn = "flatColorPicker.applyBtn", Zt = "flatColorPicker.colorGradientBtn", Jt = "flatColorPicker.colorPaletteBtn", Qt = "flatColorPicker.clearBtn", un = "checkbox.validation", fn = "checkbox.optionalText", qn = "radioButton.validation", ea = "switch.validation", ta = "colorPicker.dropdownButtonAriaLabel", aa = "rating.ariaLabel", na = "signature.clear", sa = "signature.maximize", ra = "signature.minimize", H = {
  [Xe]: "Increase value",
  [Ye]: "Decrease value",
  [$t]: "Increase",
  [Ht]: "Decrease",
  [Ae]: "Drag",
  [_e]: "r",
  [sn]: "g",
  [rn]: "b",
  [ln]: "a",
  [on]: "hex",
  [Gt]: "Contrast ratio",
  [Kt]: "AA",
  [qt]: "AAA",
  [Ut]: "Pass",
  [jt]: "Fail",
  [Wt]: "Hue slider",
  [Xt]: "Alpha slider",
  [Yt]: "Toggle colorgradient inputs",
  [cn]: "Cancel",
  [dn]: "Apply",
  [Zt]: "Color Gradient view",
  [Jt]: "Color Palette view",
  [Qt]: "Clear color value",
  [un]: "Please check this box if you want to proceed!",
  [fn]: "(Optional)",
  [qn]: "Please select option if you want to proceed!",
  [ea]: "Please turn on if you want to proceed!",
  [ta]: "Select",
  [aa]: "Rating",
  [na]: "Clear",
  [sa]: "Maximize",
  [ra]: "Minimize"
}, pt = 11111111111111e-7, Un = 0.31111111111111117, jn = 1, hn = 1, pn = 0, ye = /\d/, mn = 15, Pa = () => ({
  eventValue: null,
  prevLooseValue: "",
  currentLooseValue: "",
  focused: !1,
  selectionStart: void 0,
  selectionEnd: void 0,
  decimalSelect: !1,
  valueIsCorrected: !1,
  valueIsOutOfRange: !1
}), Nt = (a, t) => a !== void 0 ? a : t, ue = (a, t, e) => a === null && a === void 0 ? "" : typeof a == "string" ? a : e.formatNumber(a, t), Da = (a) => (String(a).split(".")[1] || "").length, gn = (a, t) => Math.max(Da(a), Da(t)), Wn = (a) => Math.min(a, mn), bn = (a, t) => {
  const e = Wn(t);
  return parseFloat(a.toFixed(e));
}, Ba = (a, t, e, s, i, l, c) => {
  const o = gn(a || 0, e || 0), h = qe(bn((a || 0) + (e || 0), o), s, i);
  t.eventValue = h, t.currentLooseValue = ue(h, l, c), t.selectionStart = t.selectionEnd = Ze(t.currentLooseValue, ye);
}, Oa = (a, t, e, s, i, l, c) => {
  const o = gn(a || 0, e || 0), h = qe(bn((a || 0) - (e || 0), o), s, i);
  t.eventValue = h, t.currentLooseValue = ue(h, l, c), t.selectionStart = t.selectionEnd = Ze(t.currentLooseValue, ye);
}, qe = (a, t, e) => a == null ? a : !(a > 1 || a < 1 || a === 1) || e !== void 0 && t !== void 0 && e < t ? null : (e !== void 0 && a > e && (a = e), t !== void 0 && a < t && (a = t), a), Xn = (a, t) => {
  const e = t.findIndex(([i, l]) => !!l && a.indexOf(l) === a.length - l.length);
  if (e === -1)
    return -1;
  const s = t[e][1];
  return a.length - s.length;
}, Yn = (a, t) => {
  const e = t.findIndex(([i, l]) => !!i && a.indexOf(i) === 0);
  return e === -1 ? -1 : t[e][0].length;
}, Zn = (a, t, e) => {
  const s = Xn(a, t);
  if (s !== -1 && e.selectionStart > s) {
    e.selectionStart = e.selectionEnd = s;
    return;
  }
  e.selectionStart > a.length && (e.selectionStart = e.selectionEnd = a.length);
  const i = Yn(a, t);
  i !== -1 && e.selectionStart < i && (e.selectionStart = e.selectionEnd = i), e.selectionStart === -1 && (e.selectionStart = e.selectionEnd = 0);
}, Ve = (a, t, e, s) => {
  a.selectionStart = a.selectionEnd = t, Zn(e, s, a);
}, Pt = (a, t, e, s) => {
  a.eventValue = s.parseNumber(a.prevLooseValue, t), a.currentLooseValue = a.prevLooseValue, a.valueIsCorrected = !0, Ve(a, a.selectionStart, a.currentLooseValue, e);
}, Jn = (a, t) => {
  const e = String(a.currentLooseValue), s = String(a.prevLooseValue);
  return e.split(t.minusSign).length !== s.split(t.minusSign).length && e.length === s.length + t.minusSign.length;
}, Qn = (a, t) => {
  const e = String(a.currentLooseValue), s = String(a.prevLooseValue);
  return e.indexOf(t.minusSign) === -1 && s.indexOf(t.minusSign) !== -1;
}, es = (a, t) => String(a.currentLooseValue).split(t.decimal).length > 2, ts = (a, t) => {
  const e = t.formatNumber(pt, a), s = t.formatNumber(-pt, a), i = t.formatNumber(pn, a), l = t.formatNumber(hn, a), c = nt(e), o = nt(s), h = nt(i), d = nt(l), p = st(e), m = st(s), f = st(i), v = st(l);
  return {
    positiveInfo: [c, p],
    negativeInfo: [o, m],
    zeroInfo: [h, f],
    oneInfo: [d, v]
  };
}, as = (a, t) => {
  const e = t.formatNumber(pt, a), s = t.formatNumber(-pt, a), i = t.formatNumber(pn, a), l = t.formatNumber(hn, a), c = t.numberSymbols(), o = new RegExp(`[\\d\\${c.decimal}${c.group}]`, "g");
  return [e, s, i, l].map((d) => d.replace(o, "")).join("").split("").filter((d, p, m) => m.indexOf(d) === p).join("");
}, Dt = (a, t) => {
  const e = a.indexOf(t.decimal);
  return e > -1 ? e : Ze(a, ye);
}, ia = (a) => a.split("").reverse().join(""), Ze = (a, t) => a.length - ia(a).search(t), nt = (a) => a.split(a[a.search(ye)])[0], st = (a) => {
  const t = ia(a);
  return ia(t.split(t[t.search(ye)])[0]);
}, Bt = (a, t) => a.search(t), Fa = (a, t) => {
  const e = a.indexOf(t);
  return e > -1 ? a.length - e - 1 : 0;
}, Ta = (a, t, e, s, i) => {
  const l = a.replace(i, "")[0] === "0", c = t.replace(i, "")[0] === "0";
  if (l && !c)
    return e - 1;
  if (c && s)
    return e + 1;
  let o = 0;
  for (let d = 0; d < e; d++)
    ye.test(a.charAt(d)) && o++;
  let h = 0;
  for (; o > 0 && t.length > h; )
    ye.test(t.charAt(h)) && o--, h++;
  return h;
}, za = (a, t, e) => {
  const s = { ...a }, { prevLooseValue: i } = s, l = e.numberSymbols(), c = as(t, e), o = String(s.currentLooseValue), h = String(i), d = new RegExp(`[^\\d\\${l.decimal}]`, "g"), p = new RegExp(`[^\\d\\${l.decimal}\\${l.group}]`, "g"), m = new RegExp(`[\\d\\${l.decimal}\\${l.group}]`), f = o.replace(d, ""), v = Bt(o, ye), N = v === -1 ? -1 : Ze(o, ye), P = o.indexOf(l.decimal), V = (o.substring(0, v) + o.substring(v, N).replace(p, "") + o.substring(N, o.length)).split("").filter((g) => c.indexOf(g) !== -1 || g.search(m) !== -1).join(""), R = e.formatNumber(Un, t).replace(d, ""), S = R.indexOf(l.decimal), I = S > -1 ? R.length - S - 1 : 0, O = e.formatNumber(jn, t).replace(d, ""), B = O.indexOf(l.decimal), w = B > -1 ? O.length - B - 1 : 0, {
    positiveInfo: F,
    negativeInfo: A,
    zeroInfo: T,
    oneInfo: x
  } = ts(t, e), L = [F, A, T, x], $ = L.findIndex((g) => g.findIndex((k) => !!k) !== -1) !== 1, U = o.length > 0 && o.length < h.length, Q = typeof t == "string" && t[0] === "p" && o && o.indexOf(l.percentSign) === -1;
  if (!s.isPaste) {
    if (o === "")
      return s.eventValue = null, s.currentLooseValue = "", s;
    if (s.currentLooseValue === l.minusSign && e.formatNumber(-0, t) !== h)
      return s.eventValue = -0, s.currentLooseValue = ue(s.eventValue, t, e), Ve(
        s,
        Dt(s.currentLooseValue, l),
        s.currentLooseValue,
        L
      ), s;
    if (s.currentLooseValue === l.decimal) {
      s.eventValue = 0;
      const y = ue(s.eventValue, t, e);
      if (w === 0 && I > 0) {
        const E = Ze(y, ye);
        s.currentLooseValue = y.substring(0, E) + l.decimal + y.substring(E);
      } else
        s.currentLooseValue = y;
      return Ve(
        s,
        Dt(s.currentLooseValue, l) + 1,
        s.currentLooseValue,
        L
      ), s;
    }
    if (Jn(s, l)) {
      const y = e.parseNumber(i, t);
      s.eventValue = -(y !== null ? y : 0), s.currentLooseValue = ue(s.eventValue, t, e);
      const E = Bt(s.currentLooseValue, ye), D = Bt(h, ye);
      return Ve(
        s,
        s.selectionEnd - 1 + (E - D),
        s.currentLooseValue,
        L
      ), s;
    }
    if (Qn(s, l))
      return s.eventValue = e.parseNumber(s.currentLooseValue, t), Ve(
        s,
        s.selectionStart,
        s.currentLooseValue,
        L
      ), s;
    if (es(s, l))
      return Pt(s, t, L, e), s;
    if (Q)
      return s.eventValue = e.parseNumber(o, t) / 100, s.currentLooseValue = ue(s.eventValue, t, e), s;
    if (String(s.currentLooseValue).replace(/[^\d]/g, "").length > mn || f !== o && o && $ && L.findIndex(([E, D]) => {
      const ee = o.indexOf(E), Z = o.indexOf(D), M = ee === 0, b = Z === o.length - D.length, q = ee + E.length !== v && v !== -1 && o[ee + E.length] !== l.decimal, K = Z !== N && N !== -1 && o[Z - 1] !== l.decimal;
      return E && D ? q || K ? !1 : M && b : E ? q ? !1 : M : D ? K ? !1 : b : !1;
    }) === -1)
      return Pt(s, t, L, e), s;
    if (f[f.length - 1] === l.decimal && I > 0)
      return s.eventValue = e.parseNumber(o, t), s.currentLooseValue = V, s;
    if (s.currentLooseValue && i && (c + l.decimal + l.group).split("").findIndex((E) => o.split("").filter((D) => D === E).length < h.split("").filter((D) => D === E).length && o.length + 1 === h.length ? !(E === l.decimal && Fa(h.replace(d, ""), l.decimal) === 0) : !1) > -1)
      return s.eventValue = e.parseNumber(a.prevLooseValue, t), s.currentLooseValue = a.prevLooseValue, s;
    const k = Fa(f, l.decimal), u = f[f.length - 1] === "0";
    if (U && u && k < w)
      return s.eventValue = e.parseNumber(s.currentLooseValue, t), s.currentLooseValue = ue(s.eventValue, t, e), s;
    if (k > 0) {
      const y = o.substring(0, P);
      if (u && (!y || h.indexOf(y) !== 0)) {
        s.eventValue = e.parseNumber(s.currentLooseValue, t);
        const E = ue(s.eventValue, t, e);
        return Ve(
          s,
          Ta(o, E, s.selectionEnd, U, d),
          E,
          L
        ), s.currentLooseValue = E, s;
      }
      if (k > I) {
        const E = o.indexOf(l.decimal), D = o.substring(0, E) + o.substring(E, E + 1 + I) + o.substring(N, String(s.currentLooseValue).length);
        return s.eventValue = e.parseNumber(D, t), s.currentLooseValue = D, Ve(s, s.selectionStart, D, L), s;
      }
      if (w !== I && k <= I && u)
        return s.eventValue = e.parseNumber(s.currentLooseValue, t), s.currentLooseValue = V, s;
      if (k < w)
        return s.eventValue = e.parseNumber(s.currentLooseValue, t), s.currentLooseValue = ue(s.eventValue, t, e), s;
    }
  }
  if (s.eventValue = e.parseNumber(s.currentLooseValue, t), Q && (s.eventValue = s.eventValue / 100), typeof s.eventValue == "number") {
    const g = ue(s.eventValue, t, e);
    o.length === 1 ? Ve(s, Dt(g, l), g, L) : Ve(
      s,
      Ta(o, g, s.selectionEnd, U, d),
      g,
      L
    ), s.currentLooseValue = g;
  } else
    s.currentLooseValue = ue(e.parseNumber(f), t, e);
  return s;
}, ns = "Please enter a valid value!", ss = (0,kendo_react_common_index_mjs_.createPropsContext)(), $e = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(ss, a), s = (0,kendo_react_common_index_mjs_.useId)(), i = e.id || s, l = (0,index_mjs_.useInternationalization)(), c = (0,index_mjs_.useLocalization)(), o = index_js_.useRef(null), h = index_js_.useRef(), [d, p] = index_js_.useState(!1), m = index_js_.useRef(Pa()), f = index_js_.useRef(!1), v = index_js_.useRef(), N = index_js_.useRef(e.defaultValue), P = ue(
    m.current.focused && !e.disabled ? m.current.currentLooseValue : Nt(e.value, N.current),
    e.format,
    l
  );
  v.current = P;
  const [V] = (0,kendo_react_common_index_mjs_.useCustomComponent)(e.prefix), [R] = (0,kendo_react_common_index_mjs_.useCustomComponent)(e.suffix);
  index_js_.useEffect(
    () => {
      o.current && o.current.setCustomValidity && o.current.setCustomValidity(
        w().valid ? "" : e.validationMessage || ns
      );
    }
  );
  const S = index_js_.useCallback(
    () => {
      o.current && o.current.focus();
    },
    []
  ), I = index_js_.useCallback(
    () => h.current !== void 0 ? h.current : Nt(e.value, N.current),
    [e.value]
  ), O = index_js_.useCallback(
    () => e.name,
    [e.name]
  ), B = index_js_.useCallback(
    () => e.required,
    [e.required]
  ), w = index_js_.useCallback(
    () => {
      const M = e.validationMessage !== void 0, b = I(), q = e.valid !== void 0 ? e.valid : !m.current.valueIsOutOfRange && (!B() || b != null);
      return {
        customError: M,
        valid: q,
        valueMissing: b == null
      };
    },
    [e.validationMessage, e.valid, I, B]
  ), F = index_js_.useCallback(
    () => e.validityStyles,
    [e.validityStyles]
  ), A = index_js_.useCallback(
    () => e,
    [e]
  ), T = index_js_.useCallback(
    () => {
      const M = {
        element: o.current,
        focus: S
      };
      return Object.defineProperty(M, "name", { get: O }), Object.defineProperty(M, "value", { get: I }), Object.defineProperty(M, "validity", { get: w }), Object.defineProperty(M, "validityStyles", { get: F }), Object.defineProperty(M, "required", { get: B }), Object.defineProperty(M, "props", { get: A }), M;
    },
    [O, I, w, F, B, S, A]
  );
  index_js_.useImperativeHandle(t, T);
  const x = index_js_.useCallback(
    () => ({
      eventValue: Nt(e.value, N.current),
      prevLooseValue: v.current,
      currentLooseValue: o.current.value,
      selectionStart: o.current.selectionStart,
      selectionEnd: o.current.selectionEnd,
      decimalSelect: !1,
      valueIsCorrected: !1,
      valueIsOutOfRange: !1,
      isPaste: f.current,
      focused: m.current.focused
    }),
    [e.value]
  ), L = index_js_.useCallback(
    (M, b) => {
      if (e.disabled)
        return;
      h.current = b.eventValue, N.current = b.eventValue;
      const q = ue(qe(b.eventValue, e.min, e.max), e.format, l), K = qe(l.parseNumber(q, e.format), e.min, e.max);
      K !== b.eventValue && (b.valueIsOutOfRange = !0, b.eventValue = K, N.current = K), e.value !== b.eventValue && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onChange,
        M,
        T(),
        { value: b.eventValue }
      ), h.current = void 0, m.current = b, p((ie) => !ie);
    },
    [e.value, e.onChange, e.disabled, p, T]
  ), $ = index_js_.useCallback(
    (M) => {
      const b = x();
      f.current = !1, L(M, za(b, e.format, l));
    },
    [e.format, e.onChange, l, L, x]
  ), U = index_js_.useCallback(
    (M) => {
      let b = x();
      const q = l.parseNumber(String(b.currentLooseValue), e.format);
      if (b.selectionEnd > b.selectionStart && b.selectionEnd - b.selectionStart === String(b.currentLooseValue).length) {
        const K = l.numberSymbols(), W = K && M.key === K.minusSign, ie = K && M.key === K.decimal;
        f.current = !W && !ie;
        return;
      }
      switch (M.keyCode) {
        case 38:
          Ba(
            q,
            b,
            e.step,
            e.min,
            e.max,
            e.format,
            l
          );
          break;
        case 40:
          Oa(
            q,
            b,
            e.step,
            e.min,
            e.max,
            e.format,
            l
          );
          break;
        case 13: {
          if (e.rangeOnEnter === !1)
            return;
          const K = ue(qe(q, e.min, e.max), e.format, l), W = qe(l.parseNumber(K, e.format), e.min, e.max);
          b.eventValue = W, b.currentLooseValue = ue(W, e.format, l), b.selectionStart = b.selectionEnd = b.currentLooseValue.length;
          break;
        }
        case 110: {
          const K = o.current, W = l.numberSymbols();
          K && (b.currentLooseValue = b.currentLooseValue.slice(0, b.selectionStart) + W.decimal + b.currentLooseValue.slice(b.selectionEnd), b.selectionStart = b.selectionEnd = b.selectionStart + 1, b = za(b, e.format, l));
          break;
        }
        default:
          return;
      }
      M.preventDefault(), L(M, b);
    },
    [e.format, e.min, e.max, e.step, e.onChange, e.rangeOnEnter, L, x]
  ), Q = index_js_.useCallback(
    () => {
      f.current = !0;
    },
    []
  ), g = index_js_.useCallback(
    (M) => {
      if (e.readOnly || e.disabled)
        return;
      const b = x();
      Ba(
        l.parseNumber(String(b.currentLooseValue), e.format),
        b,
        e.step,
        e.min,
        e.max,
        e.format,
        l
      ), L(M, b);
    },
    [e.format, e.min, e.max, e.step, e.onChange, e.readOnly, e.disabled, L, x]
  ), k = index_js_.useCallback(
    (M) => {
      if (e.readOnly || e.disabled)
        return;
      const b = x();
      Oa(
        l.parseNumber(String(b.currentLooseValue), e.format),
        b,
        e.step,
        e.min,
        e.max,
        e.format,
        l
      ), L(M, b);
    },
    [e.format, e.min, e.max, e.step, e.onChange, e.readOnly, e.disabled, L, x]
  ), u = index_js_.useCallback(
    (M) => {
      const b = (0,kendo_react_common_index_mjs_.getActiveElement)(document);
      !document || b !== o.current || !o.current || e.readOnly || e.disabled || (M.nativeEvent.deltaY < 0 && g(M), M.nativeEvent.deltaY > 0 && k(M));
    },
    [g, k, e.disabled, e.readOnly]
  ), y = index_js_.useCallback(
    (M) => {
      m.current.currentLooseValue = v.current, m.current.focused = !0, (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onFocus,
        M,
        T(),
        {}
      ), p((b) => !b);
    },
    [e.onFocus, p, T]
  ), E = index_js_.useCallback(
    (M) => {
      m.current = Pa(), (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onBlur,
        M,
        T(),
        {}
      ), p((b) => !b);
    },
    [e.onBlur, p, T]
  ), D = index_js_.useCallback(
    (M) => {
      if (document && o.current) {
        const b = (0,kendo_react_common_index_mjs_.getActiveElement)(document);
        M.preventDefault(), b !== o.current && o.current.focus();
      }
    },
    []
  );
  (0,kendo_react_common_index_mjs_.useIsomorphicLayoutEffect)(
    () => {
      o.current && o.current.type !== "number" && m.current.selectionStart !== void 0 && m.current.selectionEnd !== void 0 && (o.current.selectionStart = m.current.selectionStart, o.current.selectionEnd = m.current.selectionEnd, m.current.selectionStart = void 0, m.current.selectionEnd = void 0);
    },
    [d]
  );
  const ee = !F() || w().valid, Z = /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      dir: e.dir,
      style: e.label ? e.style : { width: e.width, ...e.style },
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-input",
        "k-numerictextbox",
        {
          [`k-input-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[e.size] || e.size}`]: e.size,
          [`k-input-${e.fillMode}`]: e.fillMode,
          [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[e.rounded] || e.rounded}`]: e.rounded,
          "k-invalid": !ee,
          "k-required": e.required,
          "k-disabled": e.disabled
        },
        e.className
      ),
      "aria-disabled": e.disabled ? "true" : void 0
    },
    /* @__PURE__ */ index_js_.createElement(V, null),
    /* @__PURE__ */ index_js_.createElement(
      "input",
      {
        role: "spinbutton",
        value: P === null ? "" : P,
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(e.tabIndex, e.disabled),
        accessKey: e.accessKey,
        disabled: e.disabled,
        title: e.title,
        "aria-disabled": e.disabled ? "true" : void 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        "aria-describedby": e.ariaDescribedBy,
        placeholder: e.placeholder,
        spellCheck: !1,
        autoComplete: "off",
        autoCorrect: "off",
        type: e.inputType || "tel",
        className: "k-input-inner",
        id: i,
        name: e.name,
        readOnly: e.readOnly,
        style: e.inputStyle,
        onChange: $,
        onFocus: y,
        onBlur: E,
        onKeyDown: U,
        onPaste: Q,
        onWheel: u,
        ref: o
      }
    ),
    /* @__PURE__ */ index_js_.createElement(R, null),
    e.children,
    e.spinners && /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        className: "k-input-spinner k-spin-button",
        onMouseDown: D
      },
      /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          tabIndex: -1,
          type: "button",
          icon: "caret-alt-up",
          svgIcon: index_es_js_.caretAltUpIcon,
          rounded: null,
          className: "k-spinner-increase",
          "aria-label": c.toLanguageString(Xe, H[Xe]),
          title: c.toLanguageString(Xe, H[Xe]),
          onClick: g
        }
      ),
      /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          tabIndex: -1,
          type: "button",
          icon: "caret-alt-down",
          svgIcon: index_es_js_.caretAltDownIcon,
          rounded: null,
          className: "k-spinner-decrease",
          "aria-label": c.toLanguageString(Ye, H[Ye]),
          title: c.toLanguageString(Ye, H[Ye]),
          onClick: k
        }
      )
    )
  );
  return e.label ? /* @__PURE__ */ index_js_.createElement(
    kendo_react_labels_index_mjs_.FloatingLabel,
    {
      label: e.label,
      editorId: i,
      editorValue: P === null ? "" : P,
      editorValid: ee,
      editorDisabled: e.disabled,
      editorPlaceholder: e.placeholder,
      children: Z,
      style: { width: e.width },
      dir: e.dir
    }
  ) : Z;
});
$e.propTypes = {
  value: prop_types_index_js_.number,
  defaultValue: prop_types_index_js_.number,
  step: prop_types_index_js_.number,
  format: prop_types_index_js_.oneOfType([
    prop_types_index_js_.string,
    prop_types_index_js_.shape({
      style: prop_types_index_js_.oneOf(["decimal", "currency", "percent", "scientific", "accounting"]),
      currency: prop_types_index_js_.string,
      currencyDisplay: prop_types_index_js_.oneOf(["symbol", "code", "name"]),
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
};
$e.displayName = "KendoNumericTextBox";
$e.defaultProps = {
  prefix: (a) => null,
  suffix: (a) => null,
  step: 1,
  spinners: !0,
  disabled: !1,
  required: !1,
  validityStyles: !0,
  rangeOnEnter: !0,
  onChange: (a) => {
  },
  onFocus: (a) => {
  },
  onBlur: (a) => {
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const ae = (a) => a != null, se = (a, t, e) => !ae(a) || isNaN(a) || a <= t ? t : a >= e ? e : a, Be = (a, t, e = !0) => {
  if (["hex", "rgba"].indexOf(t) === -1)
    throw new Error(`Unsupported color output format '${t}'. The available options are 'hex' or 'rgba'.`);
  if (!ae(a))
    return;
  const i = (0,parse_color/* default */.Ay)(a.trim(), e);
  if (ae(i))
    return t === "hex" ? i.toCss() : i.toCssRgba();
}, Ot = (a, t = !0) => {
  const e = (0,parse_color/* default */.Ay)(a, t);
  return ae(e) ? e.toHSV() : {};
}, Ue = (a, t = !0) => {
  const e = (0,parse_color/* default */.Ay)(a, t);
  return ae(e) ? e.toBytes() : {};
}, ma = (a) => {
  const t = se(a.h, 0, 359.9), e = se(a.s, 0, 1), s = se(a.v, 0, 1), i = se(a.a, 0, 1);
  return color/* default */.A.fromHSV(t, e, s, i).toCssRgba();
}, rt = (a) => ma({ h: a, s: 1, v: 1, a: 1 }), rs = (a) => {
  const t = se(a.r, 0, 255), e = se(a.g, 0, 255), s = se(a.b, 0, 255), i = se(a.a, 0, 1);
  return color/* default */.A.fromBytes(t, e, s, i).toCssRgba();
}, kendo_react_inputs_a = (a, t) => {
  const e = se(a.r, 0, 255), s = se(a.g, 0, 255), i = se(a.b, 0, 255), l = se(a.a, 0, 1), c = se(t.r, 0, 255), o = se(t.g, 0, 255), h = se(t.b, 0, 255);
  return {
    r: Math.round((1 - l) * c + l * e),
    g: Math.round((1 - l) * o + l * s),
    b: Math.round((1 - l) * h + l * i)
  };
}, Aa = (a) => {
  let t = [a.r || 0, a.g || 0, a.b || 0].map(function(e) {
    return e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
  });
  return t[0] * 0.2126 + t[1] * 0.7152 + t[2] * 0.0722;
}, is = (a, t) => {
  const e = Math.max(a, t), s = Math.min(a, t);
  return (e + 0.05) / (s + 0.05);
}, vn = (a, t) => is(
  Aa(kendo_react_inputs_a(a, t)),
  Aa(kendo_react_inputs_a(t, { r: 0, g: 0, b: 0, a: 1 }))
), la = class extends index_js_.Component {
  constructor(a) {
    super(a), this._input = null, this.focus = () => {
      this._input && this._input.focus();
    }, this.isInvalid = (t) => {
      let e = !1;
      for (let s in t)
        t.hasOwnProperty(s) && (e = e || !!t[s]);
      return e;
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && (this.validity.valid || !this.validityStyles ? this._input.classList.remove("k-invalid") : this._input.classList.add("k-invalid"), this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || ""
      ));
    }, this.handleChange = (t) => {
      this.setState({
        value: t.target.value
      }), this.valueDuringOnChange = t.target.value, this.props.onChange && this.props.onChange.call(void 0, {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent,
        value: t.target.value,
        target: this
      }), this.valueDuringOnChange = void 0;
    }, this.handleAutoFill = (t) => {
      if (t.animationName === "autoFillStart") {
        let e = t.target.parentNode;
        e && e.classList.contains("k-empty") && e.classList.remove("k-empty");
      }
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me), this.state = {
      value: this.props.defaultValue || la.defaultProps.defaultValue
    };
  }
  get _inputId() {
    return this.props.id;
  }
  /**
   * Gets the native input element of the Input component.
   */
  get element() {
    return this._input;
  }
  /**
   * Gets the value of the Input.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
  }
  /**
   * Gets the `name` property of the Input.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the Input is set.
   */
  get validity() {
    const a = {
      badInput: this._input ? this._input.validity.badInput : !1,
      patternMismatch: this._input ? this._input.validity.patternMismatch : !1,
      rangeOverflow: this._input ? this._input.validity.rangeOverflow : !1,
      rangeUnderflow: this._input ? this._input.validity.rangeUnderflow : !1,
      stepMismatch: this._input ? this._input.validity.stepMismatch : !1,
      tooLong: this._input ? this._input.validity.tooLong : !1,
      typeMismatch: this._input ? this._input.validity.typeMismatch : !1,
      valueMissing: this._input ? this._input.validity.valueMissing : !1
    };
    return {
      ...a,
      customError: this.props.validationMessage !== void 0,
      valid: this.props.valid !== void 0 ? this.props.valid : this._input ? !this.isInvalid(a) : !0
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : la.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.forceUpdate();
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const {
      className: a,
      label: t,
      labelClassName: e,
      id: s,
      validationMessage: i,
      defaultValue: l,
      valid: c,
      // Removed to support direct use in Form Field component
      visited: o,
      touched: h,
      modified: d,
      ariaLabelledBy: p,
      ariaDescribedBy: m,
      validityStyles: f,
      style: v,
      ariaLabel: N,
      ...P
    } = this.props, V = s || this._inputId, R = !this.validityStyles || this.validity.valid, S = (0,kendo_react_common_index_mjs_.classNames)(a, "k-input k-input-md k-rounded-md k-input-solid"), I = /* @__PURE__ */ index_js_.createElement(
      "input",
      {
        "aria-labelledby": p,
        "aria-describedby": m,
        "aria-disabled": this.props.disabled || void 0,
        "aria-invalid": !R || void 0,
        "aria-label": N || void 0,
        ...P,
        style: t ? void 0 : v,
        value: this.value,
        id: V,
        className: S,
        onChange: this.handleChange,
        onAnimationStart: this.handleAutoFill,
        ref: (O) => {
          this._input = O;
        }
      }
    );
    return t ? /* @__PURE__ */ index_js_.createElement(
      kendo_react_labels_index_mjs_.FloatingLabel,
      {
        label: t,
        labelClassName: e,
        editorId: V,
        editorValue: String(this.value),
        editorValid: R,
        editorDisabled: P.disabled,
        editorPlaceholder: P.placeholder,
        children: I,
        style: v,
        dir: P.dir
      }
    ) : I;
  }
};
let gt = la;
gt.displayName = "Input";
gt.propTypes = {
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
gt.defaultProps = {
  defaultValue: "",
  required: !1,
  validityStyles: !0
};
const ls = (0,kendo_react_common_index_mjs_.createPropsContext)(), kn = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(ls, gt));
kn.displayName = "KendoReactInput";
class os extends index_js_.Component {
  constructor(t) {
    super(t), this.onChange = (e) => {
      const s = e.target.value, i = Be(s, "rgba");
      this.setState({ hex: s }), ae(i) && this.props.onHexChange(s, i, e);
    }, this.onBlur = () => {
      ae(Be(this.state.hex, "rgba")) || this.setState({ hex: this.state.originalHex });
    }, this.state = { hex: this.props.hex, originalHex: this.props.hex };
  }
  render() {
    return /* @__PURE__ */ index_js_.createElement(
      kn,
      {
        value: this.state.hex,
        onChange: this.onChange,
        onBlur: this.onBlur,
        disabled: this.props.disabled
      }
    );
  }
  static getDerivedStateFromProps(t, e) {
    return t.hex !== e.originalHex ? { hex: t.hex, originalHex: t.hex } : null;
  }
}
const Te = ["rgba", "rgb", "hex"];
class ga extends index_js_.Component {
  constructor(t) {
    super(t), this.onRgbaRChange = (e) => {
      this.dispatchRgbaChange({ r: e.value }, e);
    }, this.onRgbaGChange = (e) => {
      this.dispatchRgbaChange({ g: e.value }, e);
    }, this.onRgbaBChange = (e) => {
      this.dispatchRgbaChange({ b: e.value }, e);
    }, this.onRgbaAChange = (e) => {
      this.dispatchRgbaChange({ a: e.value }, e);
    }, this.state = { inputMode: t.defaultInputMode || Te[1] };
  }
  render() {
    const t = (0,index_mjs_.provideLocalizationService)(this), e = t.toLanguageString(_e, H[on]), s = t.toLanguageString(_e, H[_e]), i = t.toLanguageString(_e, H[sn]), l = t.toLanguageString(_e, H[rn]), c = t.toLanguageString(_e, H[ln]), o = t.toLanguageString(Yt, H[Yt]);
    return /* @__PURE__ */ index_js_.createElement("div", { className: "k-colorgradient-inputs k-hstack" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack" }, /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        "aria-label": o,
        fillMode: "flat",
        icon: "caret-alt-expand",
        svgIcon: index_es_js_.caretAltExpandIcon,
        className: "k-colorgradient-toggle-mode k-icon-button",
        onClick: this.onToggleModeChange.bind(this)
      }
    )), this.state.inputMode === "hex" && /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack k-flex-1" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-hex-value k-textbox k-input" }, /* @__PURE__ */ index_js_.createElement(
      os,
      {
        hex: this.props.hex,
        onHexChange: this.props.onHexChange,
        disabled: this.props.disabled
      }
    )), /* @__PURE__ */ index_js_.createElement(kendo_react_labels_index_mjs_.Label, { className: "k-colorgradient-input-label" }, e)), (this.state.inputMode === "rgb" || this.state.inputMode === "rgba") && /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack" }, /* @__PURE__ */ index_js_.createElement(
      $e,
      {
        inputType: "number",
        value: this.props.rgba.r,
        ariaLabel: String(this.props.rgba.r),
        min: 0,
        max: 255,
        spinners: !1,
        format: "n",
        onChange: this.onRgbaRChange,
        disabled: this.props.disabled
      }
    ), /* @__PURE__ */ index_js_.createElement(kendo_react_labels_index_mjs_.Label, { className: "k-colorgradient-input-label" }, s)), /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack" }, /* @__PURE__ */ index_js_.createElement(
      $e,
      {
        inputType: "number",
        value: this.props.rgba.g,
        ariaLabel: String(this.props.rgba.g),
        min: 0,
        max: 255,
        spinners: !1,
        format: "n",
        onChange: this.onRgbaGChange,
        disabled: this.props.disabled
      }
    ), /* @__PURE__ */ index_js_.createElement(kendo_react_labels_index_mjs_.Label, { className: "k-colorgradient-input-label" }, i)), /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack" }, /* @__PURE__ */ index_js_.createElement(
      $e,
      {
        inputType: "number",
        value: this.props.rgba.b,
        ariaLabel: String(this.props.rgba.b),
        min: 0,
        max: 255,
        spinners: !1,
        format: "n",
        onChange: this.onRgbaBChange,
        disabled: this.props.disabled
      }
    ), /* @__PURE__ */ index_js_.createElement(kendo_react_labels_index_mjs_.Label, { className: "k-colorgradient-input-label" }, l))), this.state.inputMode === "rgba" && /* @__PURE__ */ index_js_.createElement("div", { className: "k-vstack" }, this.props.opacity && /* @__PURE__ */ index_js_.createElement(
      $e,
      {
        inputType: "number",
        value: this.props.rgba.a,
        ariaLabel: String(this.props.rgba.a),
        min: 0,
        max: 1,
        step: 0.01,
        spinners: !1,
        format: "n2",
        onChange: this.onRgbaAChange,
        disabled: this.props.disabled
      }
    ), this.props.opacity && /* @__PURE__ */ index_js_.createElement(kendo_react_labels_index_mjs_.Label, { className: "k-colorgradient-input-label" }, c)));
  }
  dispatchRgbaChange(t, e) {
    let s = { ...this.props.rgba };
    t.r !== void 0 && (s.r = t.r), t.g !== void 0 && (s.g = t.g), t.b !== void 0 && (s.b = t.b), t.a !== void 0 && (s.a = t.a), this.props.onRgbaChange(s, e);
  }
  onToggleModeChange() {
    const t = Te.length - 1 === Te.indexOf(this.state.inputMode) ? 0 : Te.indexOf(this.state.inputMode) + 1;
    if (this.props.opacity)
      this.setState({ inputMode: Te[t] });
    else {
      const e = Te[t] === "rgba" ? t + 1 : t;
      this.setState({ inputMode: Te[e] });
    }
  }
}
(0,index_mjs_.registerForIntl)(ga);
(0,index_mjs_.registerForLocalization)(ga);
const yn = "data-slider-label", Mr = (a) => {
  const t = index_js_.useRef(null), e = (0,kendo_react_common_index_mjs_.useDir)(t), s = a.vertical ? { bottom: `${a.position}%` } : { [e === "rtl" ? "right" : "left"]: `${a.position}%` }, i = a.vertical ? "k-tick-vertical" : "k-tick-horizontal";
  return /* @__PURE__ */ index_js_.createElement(
    "li",
    {
      ref: t,
      className: `k-tick k-tick-large ${i}`,
      title: a.title,
      style: {
        zIndex: 1,
        position: "absolute",
        ...s
      }
    },
    a.children && /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        [yn]: !0,
        className: "k-label",
        onClick: a.onClick
      },
      a.children
    )
  );
};
class bt extends index_js_.Component {
  constructor(t) {
    super(t), this.state = {
      value: this.props.defaultValue === void 0 ? this.props.min : this.props.defaultValue,
      focused: !1,
      dir: this.props.dir
    }, this._sliderTrack = null, this._element = null, this.buttons = (e) => {
      if (!e.enabled)
        return e.children;
      const s = this.state.dir === "rtl" ? this.props.vertical ? index_es_js_.caretAltUpIcon : index_es_js_.caretAltLeftIcon : this.props.vertical ? index_es_js_.caretAltUpIcon : index_es_js_.caretAltRightIcon, i = this.state.dir === "rtl" ? this.props.vertical ? index_es_js_.caretAltDownIcon : index_es_js_.caretAltRightIcon : this.props.vertical ? index_es_js_.caretAltDownIcon : index_es_js_.caretAltLeftIcon, l = this.state.dir === "rtl" ? this.props.vertical ? "caret-alt-up" : "caret-alt-left" : this.props.vertical ? "caret-alt-up" : "caret-alt-right", c = this.state.dir === "rtl" ? this.props.vertical ? "caret-alt-down" : "caret-alt-right" : this.props.vertical ? "caret-alt-down" : "caret-alt-left";
      return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          className: "k-button-decrease",
          rounded: "full",
          icon: c,
          svgIcon: i,
          title: e.decrementTitle,
          onClick: e.decrement
        }
      ), e.children, /* @__PURE__ */ index_js_.createElement(
        kendo_react_buttons_index_mjs_.Button,
        {
          className: "k-button-increase",
          rounded: "full",
          icon: l,
          svgIcon: s,
          title: e.incrementTitle,
          onClick: e.increment
        }
      ));
    }, this.focus = () => {
      this._element && this._element.focus();
    }, this.isLabel = (e) => {
      let s = e;
      for (; s; ) {
        if (s.getAttribute(yn))
          return !0;
        s = s.parentElement;
      }
      return !1;
    }, this.onFocus = () => {
      this.setState({ focused: !0 });
    }, this.onBlur = () => {
      this.setState({ focused: !1 });
    }, this.onKeyDown = (e) => {
      let s;
      e.keyCode === kendo_react_common_index_mjs_.Keys.left || e.keyCode === kendo_react_common_index_mjs_.Keys.down ? s = this.state.value - (this.props.step || 0) : e.keyCode === kendo_react_common_index_mjs_.Keys.right || e.keyCode === kendo_react_common_index_mjs_.Keys.up ? s = this.state.value + (this.props.step || 0) : e.keyCode === kendo_react_common_index_mjs_.Keys.home ? s = this.props.min : e.keyCode === kendo_react_common_index_mjs_.Keys.end && (s = this.props.max), s !== void 0 && (e.preventDefault(), this.change(e, s));
    }, this.decrement = (e) => {
      e.preventDefault(), this.change(e, this.state.value - (this.props.step || 0));
    }, this.increment = (e) => {
      e.preventDefault(), this.change(e, this.state.value + (this.props.step || 0));
    }, this.dragStart = (e) => {
      this.isLabel(e.event.originalEvent.target) || (e.event.isTouch && e.event.originalEvent.preventDefault(), this.drag(e));
    }, this.dragOver = (e) => {
      e.event.originalEvent.preventDefault(), this.drag(e);
    }, this.drag = (e) => {
      const s = e.element.getBoundingClientRect(), i = this.props.vertical ? s.bottom - e.event.clientY : this.state.dir === "rtl" ? s.right - e.event.clientX : e.event.clientX - s.left, l = this.props.vertical ? s.height : s.width, c = i / l;
      this.change(e, this.props.min + c * (this.props.max - this.props.min));
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me);
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(t, e) {
    const s = t.value !== void 0 ? t.value : e.value, { min: i, max: l } = t;
    return s === void 0 ? null : { value: Math.min(Math.max(s, i), l) };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    if (!this.state.dir && window && this._element) {
      const t = window.getComputedStyle(this._element).direction;
      t && this.setState({ dir: t });
    }
  }
  /**
   * @hidden
   */
  render() {
    const t = (0,index_mjs_.provideLocalizationService)(this), e = (this.state.value - this.props.min) / (this.props.max - this.props.min) * 100, s = this.props.vertical ? { marginTop: "0.5rem", marginBottom: "0.5rem" } : { marginLeft: "0.5rem", marginRight: "0.5rem" }, i = this.props.vertical ? { paddingTop: 0, height: "100%" } : {};
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: (l) => this._element = l,
        dir: this.state.dir,
        id: this.props.id,
        style: { gap: 0, ...this.props.style },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        className: (0,kendo_react_common_index_mjs_.classNames)(
          "k-slider",
          {
            "k-focus": this.state.focused,
            "k-disabled": this.props.disabled,
            "k-slider-horizontal": !this.props.vertical,
            "k-slider-vertical": this.props.vertical
          },
          this.props.className
        )
      },
      /* @__PURE__ */ index_js_.createElement(
        this.buttons,
        {
          enabled: this.props.buttons,
          decrement: this.decrement,
          increment: this.increment,
          incrementTitle: t.toLanguageString($t, H[$t]),
          decrementTitle: t.toLanguageString(Ht, H[Ht])
        },
        /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.Draggable, { onDrag: this.dragOver, onPress: this.dragStart }, /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            className: "k-slider-track-wrap",
            style: {
              flexGrow: 1,
              position: "relative",
              touchAction: "none",
              ...s
            }
          },
          this.props.children && /* @__PURE__ */ index_js_.createElement(
            "ul",
            {
              className: "k-reset k-slider-items",
              style: { margin: 0, ...i }
            },
            index_js_.Children.map(this.props.children, (l) => l && index_js_.cloneElement(
              l,
              {
                position: 100 * (l.props.position - this.props.min) / (this.props.max - this.props.min),
                vertical: this.props.vertical
              },
              l.props.children
            ))
          ),
          /* @__PURE__ */ index_js_.createElement(
            "div",
            {
              className: "k-slider-track",
              style: this.props.vertical ? { bottom: 0, height: "100%" } : { [this.state.dir === "rtl" ? "right" : "left"]: 0, width: "100%" },
              ref: (l) => this._sliderTrack = l
            },
            /* @__PURE__ */ index_js_.createElement(
              "div",
              {
                className: "k-slider-selection",
                style: this.props.vertical ? { height: e + "%" } : { width: e + "%" }
              }
            ),
            /* @__PURE__ */ index_js_.createElement(
              "span",
              {
                role: "slider",
                "aria-valuemin": this.props.min,
                "aria-valuemax": this.props.max,
                "aria-valuenow": this.state.value,
                "aria-valuetext": String(this.state.value),
                "aria-orientation": this.props.vertical ? "vertical" : void 0,
                "aria-disabled": this.props.disabled ? "true" : void 0,
                "aria-labelledby": this.props.ariaLabelledBy,
                "aria-describedby": this.props.ariaDescribedBy,
                "aria-label": this.props.ariaLabel,
                tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(this.props.tabIndex, this.props.disabled, void 0),
                className: "k-draghandle",
                title: t.toLanguageString(Ae, H[Ae]),
                style: this.props.vertical ? { bottom: "calc(" + e + "%)", zIndex: 1 } : this.state.dir === "rtl" ? { right: "calc(" + e + "% - 13px)", zIndex: 1 } : { left: "calc(" + e + "%)", zIndex: 1 }
              }
            )
          )
        ))
      )
    );
  }
  /**
   * @hidden
   */
  get sliderTrack() {
    return this._sliderTrack;
  }
  change(t, e) {
    e = Math.min(Math.max(e, this.props.min), this.props.max), this.setState({ value: e }), (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onChange, t, this, { value: e });
  }
}
bt.displayName = "Slider";
bt.propTypes = {
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
const cs = (0,kendo_react_common_index_mjs_.createPropsContext)(), oa = (0,kendo_react_common_index_mjs_.withPropsContext)(cs, bt);
oa.displayName = "KendoReactSlider";
(0,index_mjs_.registerForLocalization)(bt);
const Ke = {};
function ds(a, t, e) {
  Ke[a] = { value: t, hsva: e };
}
function us(a, t, e) {
  Ke[a] = { value: t, rgba: e };
}
function fs(a, t, e) {
  Ke[a] = { value: t, hex: e };
}
function hs(a) {
  delete Ke[a];
}
function ps(a, t) {
  if (a) {
    const e = Ke[a];
    return e && e.value === t ? e.hex : void 0;
  } else
    return;
}
function ms(a, t) {
  if (a) {
    const e = Ke[a];
    return e && e.value === t ? e.hsva : void 0;
  } else
    return;
}
function gs(a, t) {
  if (a) {
    const e = Ke[a];
    return e && e.value === t ? e.rgba : void 0;
  } else
    return;
}
class Cn extends index_js_.Component {
  render() {
    const t = (0,index_mjs_.provideLocalizationService)(this), e = t.toLanguageString(Gt, H[Gt]), s = t.toLanguageString(Kt, H[Kt]), i = t.toLanguageString(qt, H[qt]), l = t.toLanguageString(Ut, H[Ut]), c = t.toLanguageString(jt, H[jt]), o = vn(this.props.rgba, this.props.bgColor), h = 4.5.toFixed(1), d = 7 .toFixed(1), p = `${e}: ${o.toFixed(2)}`, m = `${s}: ${h}`, f = `${i}: ${d}`, v = /* @__PURE__ */ index_js_.createElement("span", { className: "k-contrast-validation k-text-success" }, l, " ", /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "check", icon: index_es_js_.checkIcon })), N = /* @__PURE__ */ index_js_.createElement("span", { className: "k-contrast-validation k-text-error" }, c, " ", /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "x", icon: index_es_js_.xIcon }));
    return /* @__PURE__ */ index_js_.createElement("div", { className: "k-vbox k-colorgradient-color-contrast" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-contrast-ratio" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-contrast-ratio-text" }, p), o >= 4.5 ? /* @__PURE__ */ index_js_.createElement("span", { className: "k-contrast-validation k-text-success" }, /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "check", icon: index_es_js_.checkIcon }), o >= 7 && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "check", icon: index_es_js_.checkIcon })) : /* @__PURE__ */ index_js_.createElement("span", { className: "k-contrast-validation k-text-error" }, /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "x", icon: index_es_js_.xIcon }))), /* @__PURE__ */ index_js_.createElement("div", null, /* @__PURE__ */ index_js_.createElement("span", null, m), o >= 4.5 ? v : N), /* @__PURE__ */ index_js_.createElement("div", null, /* @__PURE__ */ index_js_.createElement("span", null, f), o >= 7 ? v : N));
  }
}
(0,index_mjs_.registerForLocalization)(Cn);
const it = (a, t) => a.length === 0 ? "" : `<path d="${a.reduce(
  (s, i, l, c) => l === 0 ? (
    // if first point
    `M ${i[0]},${i[1]}`
  ) : (
    // else
    `${s} ${t(i, l, c)}`
  ),
  ""
)}" fill="none" stroke="white" stroke-width="1"/>`, bs = (a, t) => {
  const e = t[0] - a[0], s = t[1] - a[1];
  return {
    length: Math.sqrt(Math.pow(e, 2) + Math.pow(s, 2)),
    angle: Math.atan2(s, e)
  };
}, vs = (a) => (t, e, s, i) => {
  const l = e || t, c = s || t, o = 0.1, h = a(l, c), d = h.angle + (i ? Math.PI : 0), p = h.length * o, m = t[0] + Math.cos(d) * p, f = t[1] + Math.sin(d) * p;
  return [m, f];
}, ks = (a) => (t, e, s) => {
  const [i, l] = a(s[e - 1], s[e - 2], t), [c, o] = a(t, s[e - 1], s[e + 1], !0);
  return `C ${i},${l} ${c},${o} ${t[0]},${t[1]}`;
}, $a = 4.5, Ha = 7, lt = 16;
class ys extends index_js_.Component {
  renderSvgCurveLine() {
    const t = this.props.metrics, e = (l, c, o, h, d) => {
      const p = (o + h) / 2, m = Object.assign({}, this.props.hsva, { s: c / t.width, v: 1 - p / t.height }), f = vn(Ue(ma(m)), Ue(this.props.backgroundColor || ""));
      return o + 0.5 > h ? f < l + 1 && f > l - 1 ? p : null : d(f, l) ? e(l, c, o, h - (h - o) / 2, d) : e(l, c, o + (h - o) / 2, h, d);
    }, s = (l, c, o = !1) => {
      const h = [];
      for (let d = 0; d <= t.width; d += t.width / c) {
        const p = e(l, d, 0, t.height, o ? (m, f) => m < f : (m, f) => m > f);
        p !== null && h.push([d, p]);
      }
      return h;
    }, i = ks(vs(bs));
    return it(s($a, lt), i) + it(s($a, lt, !0), i) + it(s(Ha, lt), i) + it(s(Ha, lt, !0), i);
  }
  shouldComponentUpdate(t) {
    return !(t.hsva.h === this.props.hsva.h && t.hsva.a === this.props.hsva.a && this.props.backgroundColor === t.backgroundColor);
  }
  render() {
    return /* @__PURE__ */ index_js_.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "k-color-contrast-svg",
        dangerouslySetInnerHTML: { __html: this.renderSvgCurveLine() },
        style: {
          position: "absolute",
          overflow: "visible",
          pointerEvents: "none",
          left: 0,
          top: 0,
          zIndex: 3
        }
      }
    );
  }
}
const Cs = "rgba", Ga = "rgba(255, 255, 255, 1)", ca = class extends index_js_.Component {
  constructor(a) {
    super(a), this.wrapper = null, this.onHexChange = (e, s, i) => {
      if (this.isUncontrolled) {
        const l = Ot(s);
        this.setState({ hsva: l, backgroundColor: rt(l.h), rgba: Ue(s), hex: e });
      } else
        fs(this.state.guid, s, e);
      this.dispatchChangeEvent(s, i, i.nativeEvent);
    }, this.onRgbaChange = (e, s) => {
      const i = rs(e);
      if (this.isUncontrolled) {
        const l = Ot(i), c = Be(i, "hex");
        this.setState({ hsva: l, backgroundColor: rt(l.h), rgba: e, hex: c });
      } else
        us(this.state.guid, i, e);
      this.dispatchChangeEvent(i, s.syntheticEvent, s.nativeEvent);
    }, this.onAlphaSliderChange = (e) => {
      this.handleHsvaChange(
        Object.assign({}, this.state.hsva, { a: e.value / 100 }),
        e.syntheticEvent,
        e.nativeEvent
      );
    }, this.onHueSliderChange = (e) => {
      this.handleHsvaChange(
        Object.assign({}, this.state.hsva, { h: e.value }),
        e.syntheticEvent,
        e.nativeEvent
      );
    }, this.onDrag = (e) => {
      this.gradientWrapper.classList.add("k-dragging"), this.changePosition(e.event);
    }, this.onRelease = () => {
      this.gradientWrapper.classList.remove("k-dragging");
    }, this.onGradientWrapperClick = (e) => {
      this.changePosition(e);
    }, this.changePosition = (e) => {
      const s = this.getGradientRectMetrics(), i = e.clientX - s.left, l = e.clientY - s.top, c = se(i, 0, s.width), o = se(l, 0, s.height), h = Object.assign(
        {},
        this.state.hsva,
        { s: c / s.width, v: 1 - o / s.height }
      );
      this.handleHsvaChange(h, e, e.nativeEvent);
    }, this.onFocus = (e) => {
      this.props.onFocus && this.props.onFocus.call(
        void 0,
        { nativeEvent: e, target: this }
      );
    }, this.focus = () => {
      (0,kendo_react_common_index_mjs_.focusFirstFocusableChild)(this.wrapper);
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me);
    const t = a.value || a.defaultValue || Be(Ga, Cs);
    this.state = Object.assign({}, ca.getStateFromValue(t), { isFirstRender: !0, guid: this.props.id });
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(a, t) {
    return a.value && !t.isFirstRender ? ca.getStateFromValue(a.value, t.guid) : null;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setAlphaSliderBackground(this.state.backgroundColor), this.state.isFirstRender && this.setState({ isFirstRender: !1 });
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    hs(this.state.guid);
  }
  /**
   * @hidden
   */
  componentDidUpdate(a, t) {
    t.backgroundColor !== this.state.backgroundColor && this.setAlphaSliderBackground(this.state.backgroundColor);
  }
  /**
   * @hidden
   */
  renderRectangleDragHandle() {
    let a = {};
    if (!this.state.isFirstRender) {
      const t = this.getGradientRectMetrics(), e = (1 - this.state.hsva.v) * t.height, s = this.state.hsva.s * t.width;
      a.top = `${e}px`, a.left = `${s}px`;
    }
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        role: "slider",
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(this.props.tabIndex, this.props.disabled),
        "aria-valuetext": this.props.ariaValueText,
        "aria-valuenow": parseInt(this.state.hex.substring(1), 16),
        "aria-label": this.props.ariaLabelHSV,
        "aria-orientation": void 0,
        "aria-disabled": this.props.disabled ? "true" : void 0,
        className: "k-hsv-draghandle k-draghandle",
        style: a
      }
    );
  }
  /**
   * @hidden
   */
  handleHsvaChange(a, t, e) {
    const s = ma(a);
    if (this.isUncontrolled) {
      const i = Be(s, "hex");
      this.setState({ hsva: a, backgroundColor: rt(a.h), rgba: Ue(s), hex: i });
    } else
      ds(this.state.guid, s, a);
    this.dispatchChangeEvent(s, t, e);
  }
  /**
   * @hidden
   */
  dispatchChangeEvent(a, t, e) {
    this.props.onChange && this.props.onChange.call(
      void 0,
      { syntheticEvent: t, nativeEvent: e, target: this, value: a }
    );
  }
  /**
   * @hidden
   */
  static getStateFromValue(a, t) {
    ae(Be(a, "hex")) || (a = Ga);
    const e = ms(t, a) || Ot(a), s = gs(t, a) || Ue(a), i = ps(t, a) || Be(a, "hex"), l = rt(e.h);
    return { hsva: e, backgroundColor: l, rgba: s, hex: i };
  }
  /**
   * @hidden
   */
  setAlphaSliderBackground(a) {
    this.props.opacity && this.alphaSlider && this.alphaSlider.sliderTrack && (this.alphaSlider.sliderTrack.style.background = `linear-gradient(to top, transparent, ${a})`);
  }
  /**
   * @hidden
   */
  get isUncontrolled() {
    return this.props.value === void 0;
  }
  /**
   * @hidden
   */
  getGradientRectMetrics() {
    return this.gradientWrapper.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  render() {
    const a = (0,index_mjs_.provideLocalizationService)(this), t = (0,kendo_react_common_index_mjs_.classNames)("k-colorgradient", { "k-disabled": this.props.disabled }, this.props.className);
    return /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        role: this.props.role,
        className: t,
        "aria-disabled": this.props.disabled ? "true" : void 0,
        style: this.props.style,
        ref: (e) => this.wrapper = e,
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(this.props.tabIndex, this.props.disabled),
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        onFocus: this.onFocus
      },
      /* @__PURE__ */ index_js_.createElement("div", { className: "k-colorgradient-canvas k-hstack" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-hsv-rectangle", style: { background: this.state.backgroundColor } }, /* @__PURE__ */ index_js_.createElement(
        kendo_react_common_index_mjs_.Draggable,
        {
          onDrag: this.onDrag,
          onRelease: this.onRelease,
          ref: (e) => this.gradientWrapper = e ? e.element : void 0
        },
        /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            className: "k-hsv-gradient",
            style: { touchAction: "none" },
            onClick: this.onGradientWrapperClick
          },
          this.renderRectangleDragHandle()
        )
      ), this.props.backgroundColor && !this.state.isFirstRender && /* @__PURE__ */ index_js_.createElement(
        ys,
        {
          metrics: this.gradientWrapper ? this.getGradientRectMetrics() : void 0,
          hsva: this.state.hsva,
          backgroundColor: this.props.backgroundColor
        }
      )), /* @__PURE__ */ index_js_.createElement("div", { className: "k-hsv-controls k-hstack" }, /* @__PURE__ */ index_js_.createElement(
        oa,
        {
          value: this.state.hsva.h,
          buttons: !1,
          vertical: !0,
          min: 0,
          max: 360,
          step: 5,
          onChange: this.onHueSliderChange,
          className: "k-hue-slider k-colorgradient-slider",
          disabled: this.props.disabled,
          ariaLabel: a.toLanguageString(Wt, H[Wt])
        }
      ), this.props.opacity && /* @__PURE__ */ index_js_.createElement(
        oa,
        {
          value: ae(this.state.hsva.a) ? this.state.hsva.a * 100 : 100,
          buttons: !1,
          vertical: !0,
          min: 0,
          max: 100,
          step: 1,
          ariaLabel: a.toLanguageString(Xt, H[Xt]),
          onChange: this.onAlphaSliderChange,
          className: "k-alpha-slider k-colorgradient-slider",
          disabled: this.props.disabled,
          ref: (e) => this.alphaSlider = e
        }
      ))),
      /* @__PURE__ */ index_js_.createElement(
        ga,
        {
          rgba: this.state.rgba,
          onRgbaChange: this.onRgbaChange,
          hex: this.state.hex,
          onHexChange: this.onHexChange,
          opacity: this.props.opacity,
          disabled: this.props.disabled,
          defaultInputMode: this.props.format
        }
      ),
      this.props.backgroundColor && /* @__PURE__ */ index_js_.createElement(
        Cn,
        {
          bgColor: Ue(this.props.backgroundColor),
          rgba: this.state.rgba
        }
      )
    );
  }
};
let vt = ca;
vt.displayName = "ColorGradient";
vt.propTypes = {
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
vt.defaultProps = {
  opacity: !0,
  role: "textbox",
  format: "rgb"
};
const xs = (0,kendo_react_common_index_mjs_.createPropsContext)(), ba = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(xs, vt));
ba.displayName = "KendoReactColorGradient";
class Es {
  constructor() {
    this.colorRows = [];
  }
  setColorMatrix(t, e) {
    if (this.colorRows = [], !!(ae(t) && t.length)) {
      e = e || t.length;
      for (let s = 0; s < t.length; s += e) {
        const i = t.slice(s, e + s);
        this.colorRows.push(i);
      }
    }
  }
  getCellCoordsFor(t) {
    if (!ae(t))
      return;
    const e = t && (0,parse_color/* default */.Ay)(t, !0), s = [t];
    ae(e) && s.push(e.toCss(), e.toCssRgba());
    for (let i = 0; i < this.colorRows.length; i++)
      for (let l = 0; l < this.colorRows[i].length; l++)
        if (s.some((c) => c === this.colorRows[i][l]))
          return { row: i, col: l };
  }
  getColorAt(t) {
    if (ae(t) && ae(this.colorRows[t.row]))
      return this.colorRows[t.row][t.col];
  }
  getNextCell(t, e, s) {
    if (!(ae(t) && ae(t.row) && ae(t.col)))
      return { row: 0, col: 0 };
    const i = this.clampIndex(t.row + s, this.colorRows.length - 1), l = this.clampIndex(t.col + e, this.colorRows[i].length - 1);
    return { row: i, col: l };
  }
  clampIndex(t, e) {
    return t < 0 ? 0 : t > e ? e : t;
  }
}
const Ss = {
  basic: {
    colors: ["#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", " ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7"],
    columns: 10
  },
  office: {
    colors: ["#ffffff", "#000000", "#e6e6e6", "#435569", "#4371c4", "#ed7e32", "#a5a4a5", "#febf04", "#5a9bd5", "#71ae48", "#f2f2f3", "#7f7f7f", "#d1cece", "#d5dde3", "#dae1f4", "#fce5d4", "#deeded", "#fff2cc", "#deeaf6", "#e1efd9", "#d7d8d8", "#585959", "#aeabab", "#adbaca", "#b4c5e7", "#f6caac", "#dbdbdb", "#ffe498", "#bcd6ee", "#c5e0b2", "#bfbfc0", "#3f3f3f", "#767070", "#8595b1", "#8fabdb", "#f5b183", "#c9c8c9", "#fed965", "#9bc4e5", "#a8d08d", "#a5a5a6", "#262625", "#393939", "#334050", "#2e5496", "#c45a11", "#7b7b7a", "#bf9000", "#2f75b5", "#548235", "#7f7f7f", "#0b0c0c", "#161616", "#222a34", "#203764", "#843d0b", "#525252", "#7f6000", "#1d4d79", "#375623"],
    columns: 10
  },
  apex: {
    colors: ["#ffffff", "#000000", "#c9c2d1", "#69676d", "#ceb966", "#9cb084", "#6bb1c9", "#6585cf", "#7e6bc9", "#a379bb", "#f2f2f2", "#7f7f7f", "#f4f2f5", "#e0e0e2", "#f5f1e0", "#ebefe6", "#e1eff4", "#e0e6f5", "#e5e1f4", "#ece4f1", "#d8d8d8", "#595959", "#e9e6ec", "#c2c1c5", "#ebe3c1", "#d7dfcd", "#c3dfe9", "#c1ceeb", "#cbc3e9", "#dac9e3", "#bfbfbf", "#3f3f3f", "#dedae3", "#a4a3a8", "#e1d5a3", "#c3cfb5", "#a6d0de", "#a2b5e2", "#b1a6de", "#c7aed6", "#a5a5a5", "#262626", "#9688a5", "#4e4d51", "#ae9638", "#758c5a", "#3d8da9", "#365bb0", "#533da9", "#7d4d99", "#7f7f7f", "#0c0c0c", "#635672", "#343336", "#746425", "#4e5d3c", "#295e70", "#243c75", "#372970", "#533366"],
    columns: 10
  },
  austin: {
    colors: ["#ffffff", "#000000", "#caf278", "#3e3d2d", "#94c600", "#71685a", "#ff6700", "#909465", "#956b43", "#fea022", "#f2f2f2", "#7f7f7f", "#f4fce4", "#dddcd0", "#efffc0", "#e3e1dc", "#ffe0cb", "#e8e9df", "#ece1d6", "#feecd2", "#d8d8d8", "#595959", "#e9f9c9", "#bbb9a1", "#dfff82", "#c8c3ba", "#ffc299", "#d2d4c0", "#dac3ad", "#fed9a6", "#bfbfbf", "#3f3f3f", "#dff7ae", "#ada598", "#cfff43", "#ada598", "#ffa365", "#bcbfa1", "#c8a585", "#fec67a", "#a5a5a5", "#262626", "#a9ea25", "#2e2d21", "#6f9400", "#544e43", "#bf4d00", "#6c6f4b", "#6f5032", "#d77b00", "#7f7f7f", "#0c0c0c", "#74a50f", "#1f1e16", "#4a6300", "#38342d", "#7f3300", "#484a32", "#4a3521", "#8f5200"],
    columns: 10
  },
  clarity: {
    colors: ["#ffffff", "#292934", "#f3f2dc", "#d2533c", "#93a299", "#ad8f67", "#726056", "#4c5a6a", "#808da0", "#79463d", "#f2f2f2", "#e7e7ec", "#e7e5b9", "#f6dcd8", "#e9ecea", "#eee8e0", "#e4dedb", "#d8dde3", "#e5e8ec", "#e9d6d3", "#d8d8d8", "#c4c4d1", "#d5d185", "#edbab1", "#d3d9d6", "#ded2c2", "#c9beb8", "#b2bcc8", "#ccd1d9", "#d3aea7", "#bfbfbf", "#8a8aa3", "#aca73b", "#e4978a", "#bec7c1", "#cdbba3", "#af9e94", "#8c9bac", "#b2bac6", "#bd857c", "#a5a5a5", "#56566e", "#56531d", "#a43925", "#6b7c72", "#866b48", "#554840", "#39434f", "#5c697b", "#5a342d", "#7f7f7f", "#3b3b4b", "#22210b", "#6d2619", "#47534c", "#594730", "#39302b", "#262d35", "#3d4652", "#3c231e"],
    columns: 10
  },
  slipstream: {
    colors: ["#ffffff", "#000000", "#b4dcfa", "#212745", "#4e67c8", "#5eccf3", "#a7ea52", "#5dceaf", "#ff8021", "#f14124", "#f2f2f2", "#7f7f7f", "#8bc9f7", "#c7cce4", "#dbe0f4", "#def4fc", "#edfadc", "#def5ef", "#ffe5d2", "#fcd9d3", "#d8d8d8", "#595959", "#4facf3", "#909aca", "#b8c2e9", "#beeafa", "#dbf6b9", "#beebdf", "#ffcca6", "#f9b3a7", "#bfbfbf", "#3f3f3f", "#0d78c9", "#5967af", "#94a3de", "#9ee0f7", "#caf297", "#9de1cf", "#ffb279", "#f68d7b", "#a5a5a5", "#262626", "#063c64", "#181d33", "#31479f", "#11b2eb", "#81d319", "#34ac8b", "#d85c00", "#c3260c", "#7f7f7f", "#0c0c0c", "#021828", "#101322", "#202f6a", "#0b769c", "#568c11", "#22725c", "#903d00", "#821908"],
    columns: 10
  },
  metro: {
    colors: ["#ffffff", "#000000", "#d6ecff", "#4e5b6f", "#7fd13b", "#ea157a", "#feb80a", "#00addc", "#738ac8", "#1ab39f", "#f2f2f2", "#7f7f7f", "#a7d6ff", "#d9dde4", "#e5f5d7", "#fad0e4", "#fef0cd", "#c5f2ff", "#e2e7f4", "#c9f7f1", "#d8d8d8", "#595959", "#60b5ff", "#b3bcca", "#cbecb0", "#f6a1c9", "#fee29c", "#8be6ff", "#c7d0e9", "#94efe3", "#bfbfbf", "#3f3f3f", "#007dea", "#8d9baf", "#b2e389", "#f272af", "#fed46b", "#51d9ff", "#aab8de", "#5fe7d5", "#a5a5a5", "#262626", "#003e75", "#3a4453", "#5ea226", "#af0f5b", "#c58c00", "#0081a5", "#425ea9", "#138677", "#7f7f7f", "#0c0c0c", "#00192e", "#272d37", "#3f6c19", "#750a3d", "#835d00", "#00566e", "#2c3f71", "#0c594f"],
    columns: 10
  },
  flow: {
    colors: ["#ffffff", "#000000", "#dbf5f9", "#04617b", "#0f6fc6", "#009dd9", "#0bd0d9", "#10cf9b", "#7cca62", "#a5c249", "#f2f2f2", "#7f7f7f", "#b2e9f2", "#b4ecfc", "#c7e2fa", "#c4eeff", "#c9fafc", "#c9faed", "#e4f4df", "#edf2da", "#d8d8d8", "#595959", "#76d9e8", "#6adafa", "#90c6f6", "#89deff", "#93f5f9", "#94f6db", "#cae9c0", "#dbe6b6", "#bfbfbf", "#3f3f3f", "#21b2c8", "#20c8f7", "#59a9f2", "#4fceff", "#5df0f6", "#5ff2ca", "#b0dfa0", "#c9da91", "#a5a5a5", "#262626", "#105964", "#02485c", "#0b5394", "#0075a2", "#089ca2", "#0b9b74", "#54a838", "#7e9532", "#7f7f7f", "#0c0c0c", "#062328", "#01303d", "#073763", "#004e6c", "#05686c", "#07674d", "#387025", "#546321"],
    columns: 10
  },
  hardcover: {
    colors: ["#ffffff", "#000000", "#ece9c6", "#895d1d", "#873624", "#d6862d", "#d0be40", "#877f6c", "#972109", "#aeb795", "#f2f2f2", "#7f7f7f", "#e1dca5", "#f2e0c6", "#f0d0c9", "#f6e6d5", "#f5f2d8", "#e7e5e1", "#fbc7bc", "#eef0e9", "#d8d8d8", "#595959", "#d0c974", "#e6c28d", "#e2a293", "#eeceaa", "#ece5b2", "#cfccc3", "#f78f7a", "#dee2d4", "#bfbfbf", "#3f3f3f", "#a29a36", "#daa454", "#d4735e", "#e6b681", "#e2d88c", "#b7b2a5", "#f35838", "#ced3bf", "#a5a5a5", "#262626", "#514d1b", "#664515", "#65281a", "#a2641f", "#a39428", "#655f50", "#711806", "#879464", "#7f7f7f", "#0c0c0c", "#201e0a", "#442e0e", "#431b11", "#6c4315", "#6d621a", "#433f35", "#4b1004", "#5a6243"],
    columns: 10
  },
  trek: {
    colors: ["#ffffff", "#000000", "#fbeec9", "#4e3b30", "#f0a22e", "#a5644e", "#b58b80", "#c3986d", "#a19574", "#c17529", "#f2f2f2", "#7f7f7f", "#f7e09e", "#e1d6cf", "#fcecd5", "#eddfda", "#f0e7e5", "#f3eae1", "#ece9e3", "#f5e3d1", "#d8d8d8", "#595959", "#f3cc5f", "#c4ad9f", "#f9d9ab", "#dcc0b6", "#e1d0cc", "#e7d5c4", "#d9d4c7", "#ebc7a3", "#bfbfbf", "#3f3f3f", "#d29f0f", "#a78470", "#f6c781", "#cba092", "#d2b9b2", "#dbc1a7", "#c6bfab", "#e1ac76", "#a5a5a5", "#262626", "#694f07", "#3a2c24", "#c87d0e", "#7b4b3a", "#926255", "#a17242", "#7b7153", "#90571e", "#7f7f7f", "#0c0c0c", "#2a1f03", "#271d18", "#855309", "#523226", "#614138", "#6b4c2c", "#524b37", "#603a14"],
    columns: 10
  },
  verve: {
    colors: ["#ffffff", "#000000", "#d2d2d2", "#666666", "#ff388c", "#e40059", "#9c007f", "#68007f", "#005bd3", "#00349e", "#f2f2f2", "#7f7f7f", "#bdbdbd", "#e0e0e0", "#ffd7e8", "#ffc6dc", "#ffb8f1", "#f1b2ff", "#c3dcff", "#b8cfff", "#d8d8d8", "#595959", "#9d9d9d", "#c1c1c1", "#ffafd1", "#ff8eba", "#ff71e4", "#e365ff", "#87baff", "#72a0ff", "#bfbfbf", "#3f3f3f", "#696969", "#a3a3a3", "#ff87ba", "#ff5597", "#ff2ad7", "#d519ff", "#4b98ff", "#2b71ff", "#a5a5a5", "#262626", "#343434", "#4c4c4c", "#e90062", "#ab0042", "#75005f", "#4e005f", "#00449e", "#002676", "#7f7f7f", "#0c0c0c", "#151515", "#333333", "#9b0041", "#72002c", "#4e003f", "#34003f", "#002d69", "#00194f"],
    columns: 10
  },
  monochrome: {
    colors: ["#000000", "#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080", "#999999", "#b3b3b3", "#cccccc", "#e6e6e6", "#f2f2f2", "#ffffff"],
    columns: 12
  }
}, xn = 24, Ka = 10, En = "office";
class kt extends index_js_.Component {
  constructor(t) {
    super(t), this.wrapper = null, this.paletteService = null, this.focus = () => {
      this.wrapper && this.wrapper.focus();
    }, this.onKeyDown = (e) => {
      switch (e.keyCode) {
        case kendo_react_common_index_mjs_.Keys.down:
          this.handleCellNavigation(0, 1);
          break;
        case kendo_react_common_index_mjs_.Keys.up:
          this.handleCellNavigation(0, -1);
          break;
        case kendo_react_common_index_mjs_.Keys.right:
          this.handleCellNavigation(1, 0);
          break;
        case kendo_react_common_index_mjs_.Keys.left:
          this.handleCellNavigation(-1, 0);
          break;
        case kendo_react_common_index_mjs_.Keys.enter:
          this.handleEnter(e);
          break;
        default:
          return;
      }
      e.preventDefault();
    }, this.onColorClick = (e, s) => {
      this.isUncontrolled ? this.setState({ selectedColor: e, focusedColor: e }) : this.setState({ focusedColor: e }), this.dispatchChangeEvent(e, s);
    }, this.onFocus = (e) => {
      this.paletteService && (this.setState({ focusedColor: this.state.selectedColor || this.paletteService.colorRows[0][0] }), this.props.onFocus && this.props.onFocus.call(
        void 0,
        e
      ));
    }, this.onBlur = () => {
      this.setState({ focusedColor: void 0 });
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me), this.state = {
      selectedColor: this.props.value !== void 0 ? this.props.value : this.props.defaultValue,
      isFirstRender: !0
    };
  }
  get guid() {
    return this.props.id;
  }
  /**
   * @hidden
   */
  render() {
    const t = this.getPaletteInfo(), e = this.paletteService = new Es();
    e.setColorMatrix(t.colors, t.columns);
    const s = e.getCellCoordsFor(this.state.selectedColor), i = e.getCellCoordsFor(this.state.focusedColor), l = (0,kendo_react_common_index_mjs_.classNames)("k-colorpalette", { "k-disabled": this.props.disabled }, this.props.className);
    return t.colors.length ? /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        id: this.props.id,
        role: "grid",
        className: l,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        "aria-disabled": this.props.ariaDisabled || (this.props.disabled ? "true" : void 0),
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(this.props.tabIndex, this.props.disabled),
        ref: (c) => this.wrapper = c
      },
      /* @__PURE__ */ index_js_.createElement("table", { className: "k-colorpalette-table", role: "presentation" }, /* @__PURE__ */ index_js_.createElement("tbody", { role: "rowgroup" }, this.renderRows(e.colorRows, s, i)))
    ) : "";
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(t, e) {
    if (!e.isFirstRender && t.value !== void 0) {
      if (t.value === "" && e.selectedColor !== void 0)
        return { selectedColor: void 0 };
      if (t.value !== "" && t.value !== e.selectedColor)
        return { selectedColor: t.value };
    } else if (e.isFirstRender)
      return { isFirstRender: !1 };
    return null;
  }
  handleCellNavigation(t, e) {
    if (this.paletteService)
      if (this.focusedColorCooridanates) {
        const s = this.paletteService.getNextCell(
          this.focusedColorCooridanates,
          t,
          e
        );
        this.setState({ focusedColor: this.paletteService.getColorAt(s) });
      } else
        this.setState({ focusedColor: this.paletteService.colorRows[0][0] });
  }
  handleEnter(t) {
    this.isUncontrolled && this.setState({ selectedColor: this.state.focusedColor }), this.dispatchChangeEvent(this.state.focusedColor, t);
  }
  dispatchChangeEvent(t, e) {
    (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onChange, e, this, { value: t, rgbaValue: Be(t, "rgba") });
  }
  get focusedColorCooridanates() {
    return this.state.focusedColor && this.paletteService ? this.paletteService.getCellCoordsFor(this.state.focusedColor) : void 0;
  }
  get isUncontrolled() {
    return this.props.value === void 0;
  }
  getPaletteInfo() {
    if (typeof this.props.palette == "string") {
      const t = Ss[this.props.palette];
      return ae(t) ? {
        colors: t.colors,
        columns: this.props.columns || t.columns || Ka
      } : { colors: [], columns: 0 };
    } else
      return { colors: this.props.palette || [], columns: this.props.columns || Ka };
  }
  renderRows(t, e, s) {
    return t.map((i, l) => /* @__PURE__ */ index_js_.createElement("tr", { role: "row", key: l }, this.renderColumns(i, l, e, s)));
  }
  renderColumns(t, e, s, i) {
    const l = s !== void 0 && s.row === e, c = s && s.col, o = i !== void 0 && i.row === e, h = i && i.col, d = typeof this.props.tileSize != "number" ? this.props.tileSize : { width: this.props.tileSize, height: this.props.tileSize }, p = d.width + "px", m = d.height + "px";
    return t.map((f, v) => {
      const N = l && c === v, P = (0,kendo_react_common_index_mjs_.classNames)(
        "k-colorpalette-tile",
        {
          "k-selected": N,
          "k-focus": o && h === v
        }
      );
      return /* @__PURE__ */ index_js_.createElement(
        "td",
        {
          role: "gridcell",
          className: P,
          "aria-label": f,
          "aria-selected": N ? !0 : this.props.disabled ? void 0 : !1,
          style: { backgroundColor: f, width: p, height: m, minWidth: p },
          onClick: (V) => this.onColorClick(f, V),
          id: this.createCellId({ row: e, col: v }),
          key: v
        }
      );
    });
  }
  createCellId(t) {
    return `${this.guid}_${t.row}_${t.col}`;
  }
}
kt.displayName = "ColorPalette";
kt.propTypes = {
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
kt.defaultProps = {
  palette: En,
  tileSize: xn
};
const ws = (0,kendo_react_common_index_mjs_.createPropsContext)(), va = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(ws, kt));
va.displayName = "KendoReactColorPalette";
const Is = "bottom", Ls = "top", Sn = (a) => {
  const t = a.popupSettings || {}, e = a.dir === "rtl" ? "right" : "left", s = index_js_.useMemo(
    () => ({ horizontal: e, vertical: Is }),
    [e]
  ), i = index_js_.useMemo(
    () => ({ horizontal: e, vertical: Ls }),
    [e]
  );
  return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, a.input, a.button, /* @__PURE__ */ index_js_.createElement(
    kendo_react_popup_index_mjs_.Popup,
    {
      style: {
        ...(t || {}).style,
        direction: a.dir
      },
      ...t,
      anchor: a.popupAnchor,
      anchorAlign: s,
      popupAlign: i,
      show: a.open,
      onOpen: a.onOpen,
      onClose: a.onClose,
      className: (0,kendo_react_common_index_mjs_.classNames)("k-reset", t.className)
    },
    a.content
  ));
};
Sn.displayName = "KendoPickerComponent";
const Rs = {
  opacity: !0
}, Vs = {
  palette: En,
  tileSize: xn
}, Ft = (a) => a !== void 0, Ms = (0,kendo_react_common_index_mjs_.createPropsContext)(), ka = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(Ms, a), s = (0,index_mjs_.useLocalization)(), {
    size: i = dt.size,
    rounded: l = dt.rounded,
    fillMode: c = dt.fillMode,
    popupSettings: o,
    gradientSettings: h,
    paletteSettings: d,
    valid: p,
    disabled: m,
    tabIndex: f,
    view: v,
    icon: N,
    svgIcon: P,
    iconClassName: V,
    onChange: R,
    onFocus: S,
    onBlur: I,
    onActiveColorClick: O,
    className: B
  } = e, w = index_js_.useRef(null), F = index_js_.useRef(null), A = index_js_.useRef(null), T = index_js_.useRef(), x = index_js_.useRef(null), [L, $] = index_js_.useState(!1), [U, Q] = index_js_.useState(e.defaultValue), [g, k] = index_js_.useState(!1), u = Ft(e.value), y = Ft(e.open), E = u ? e.value : U, D = y ? e.open : g, ee = index_js_.useCallback(
    () => {
      w.current && w.current.focus();
    },
    []
  );
  index_js_.useImperativeHandle(t, () => ({
    // we agreed that each element will have focus method exposed
    element: w.current,
    actionElement: x.current,
    value: E,
    focus: ee
  }), [E, ee]);
  const Z = index_js_.useCallback(
    (z, ve) => {
      y || (!z && !ve && w && w.current && w.current.focus(), k(z));
    },
    [y]
  ), M = index_js_.useCallback(
    (z) => {
      const { altKey: ve, keyCode: oe } = z;
      if (oe === kendo_react_common_index_mjs_.Keys.esc) {
        Z(!1);
        return;
      }
      if (oe === kendo_react_common_index_mjs_.Keys.enter && !y) {
        z.preventDefault(), z.stopPropagation(), Z(!D);
        return;
      }
      ve && (oe === kendo_react_common_index_mjs_.Keys.up || oe === kendo_react_common_index_mjs_.Keys.down) && (z.preventDefault(), z.stopPropagation(), oe === kendo_react_common_index_mjs_.Keys.up && w && w.current && (w.current.focus(), Z(!1)), oe === kendo_react_common_index_mjs_.Keys.down && Z(!0));
    },
    [D, y]
  ), b = index_js_.useCallback(
    () => {
      y || (F.current ? F.current.focus() : A.current && A.current.focus());
    },
    [y]
  ), q = index_js_.useCallback(
    () => {
      Z(!D, !0);
    },
    [D]
  ), K = index_js_.useCallback(
    (z) => {
      O && O.call(void 0, {
        syntheticEvent: z,
        nativeEvent: z.nativeEvent,
        value: E
      });
    },
    [O, E]
  ), W = index_js_.useCallback(
    (z) => {
      T.current ? (clearTimeout(T.current), T.current = void 0) : $(!0), S && S.call(void 0, {
        nativeEvent: z.nativeEvent,
        syntheticEvent: z
      });
    },
    [S]
  ), ie = index_js_.useCallback(
    () => {
      Z(!1, !0), $(!1), T.current = void 0;
    },
    []
  ), Ee = index_js_.useCallback(
    (z) => {
      clearTimeout(T.current), T.current = window.setTimeout(ie), I && I.call(void 0, {
        nativeEvent: z.nativeEvent,
        syntheticEvent: z
      });
    },
    [I]
  ), le = index_js_.useCallback(
    (z, ve) => {
      const oe = ve ? z.rgbaValue : z.value;
      u || Q(oe), ve && Z(!1), R && R.call(void 0, {
        value: oe,
        nativeEvent: z.nativeEvent,
        syntheticEvent: z.syntheticEvent
      });
    },
    [u, R]
  ), we = index_js_.useCallback(
    (z) => le(z, !0),
    [Ft, le]
  ), be = (0,kendo_react_common_index_mjs_.useDir)(w, e.dir), Ne = p !== !1;
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      id: e.id,
      role: "combobox",
      "aria-label": e.ariaLabel,
      "aria-labelledby": e.ariaLabelledBy,
      "aria-describedby": e.ariaDescribedBy,
      "aria-haspopup": "dialog",
      "aria-expanded": D,
      "aria-disabled": m ? "true" : void 0,
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-colorpicker",
        "k-picker",
        "k-icon-picker",
        {
          [`k-picker-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[i] || i}`]: i,
          [`k-picker-${c}`]: c,
          [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[l] || l}`]: l,
          "k-invalid": !Ne,
          "k-disabled": m,
          "k-focus": L,
          className: B
        }
      ),
      ref: w,
      tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(f, m),
      title: e.title,
      onKeyDown: M,
      onFocus: W,
      onBlur: Ee,
      dir: be
    },
    /* @__PURE__ */ index_js_.createElement(
      Sn,
      {
        dir: be,
        open: D,
        onOpen: b,
        popupAnchor: w.current || void 0,
        popupSettings: { ...o },
        input: /* @__PURE__ */ index_js_.createElement("span", { onClick: K, className: "k-input-inner" }, /* @__PURE__ */ index_js_.createElement(
          "span",
          {
            className: (0,kendo_react_common_index_mjs_.classNames)(
              "k-value-icon",
              "k-color-preview",
              {
                "k-no-color": !E,
                "k-icon-color-preview": N || P || V
              }
            )
          },
          V && /* @__PURE__ */ index_js_.createElement("span", { className: (0,kendo_react_common_index_mjs_.classNames)("k-color-preview-icon", V) }),
          !V && (N || P) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: N, icon: P }),
          /* @__PURE__ */ index_js_.createElement("span", { className: "k-color-preview-mask", style: { backgroundColor: E } })
        )),
        button: /* @__PURE__ */ index_js_.createElement(
          kendo_react_buttons_index_mjs_.Button,
          {
            tabIndex: -1,
            type: "button",
            onClick: q,
            className: "k-input-button",
            rounded: null,
            icon: "caret-alt-down",
            svgIcon: index_es_js_.caretAltDownIcon,
            "aria-label": s.toLanguageString(ta, H[ta])
          }
        ),
        content: /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, (v === "combo" || v === "gradient") && /* @__PURE__ */ index_js_.createElement(
          ba,
          {
            ...h,
            tabIndex: 0,
            ref: F,
            value: E,
            onChange: le
          }
        ), (v === "combo" || v === "palette") && /* @__PURE__ */ index_js_.createElement(
          va,
          {
            ...d,
            ref: A,
            value: E,
            onChange: we
          }
        ))
      }
    )
  );
});
ka.propTypes = {
  value: prop_types_index_js_.string,
  defaultValue: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  view: prop_types_index_js_.oneOf(["gradient", "palette", "combo"]),
  dir: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  icon: prop_types_index_js_.string,
  svgIcon: kendo_react_common_index_mjs_.svgIconPropType,
  ariaLabelledBy: prop_types_index_js_.string,
  ariaDescribedBy: prop_types_index_js_.string,
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"]),
  className: prop_types_index_js_.string
};
const dt = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  view: "palette",
  gradientSettings: Rs,
  paletteSettings: Vs
};
ka.defaultProps = dt;
ka.displayName = "KendoColorPicker";
const qa = "rgba(255, 255, 255, 1)", wn = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = index_js_.useRef(null), s = index_js_.useRef(null), i = index_js_.useRef(null), { defaultValue: l = qa, showButtons: c = !0, showPreview: o = !0, showClearButton: h = !0 } = a, [d, p] = index_js_.useState((a.view || "ColorGradient") === "ColorGradient"), [m, f] = index_js_.useState(a.value || l), [v, N] = index_js_.useState(a.value || l), P = a.value !== void 0 ? a.value : v;
  index_js_.useEffect(() => {
    f(a.value || l);
  }, [a.value, l]);
  const V = (0,index_mjs_.useLocalization)(), R = index_js_.useCallback(
    () => {
      e.current && e.current.focus();
    },
    [e]
  );
  index_js_.useImperativeHandle(e, () => ({
    element: s.current,
    focus: R,
    props: a,
    value: P
  }), [P, R, a]), index_js_.useImperativeHandle(t, () => e.current);
  const S = index_js_.useCallback(
    (x) => {
      (x === "ColorGradient" && !d || x === "ColorPalette" && d) && p(!d);
    },
    [d]
  ), I = index_js_.useCallback(
    (x) => {
      if (f(l), a.onPreviewChange) {
        const L = {
          value: l,
          nativeEvent: x.nativeEvent,
          syntheticEvent: x
        };
        a.onPreviewChange.call(void 0, L);
      }
    },
    [l, a.onPreviewChange]
  ), O = index_js_.useCallback(
    (x) => {
      if (f(x.value), a.onPreviewChange) {
        const L = {
          value: x.value,
          nativeEvent: x.nativeEvent,
          syntheticEvent: x.syntheticEvent
        };
        a.onPreviewChange.call(void 0, L);
      }
    },
    [a.onPreviewChange]
  ), B = index_js_.useCallback(
    (x) => {
      if (N(m), a.onChange) {
        const L = {
          value: m,
          nativeEvent: x.nativeEvent,
          syntheticEvent: x
        };
        a.onChange.call(void 0, L);
      }
    },
    [m, a.onChange]
  ), w = index_js_.useCallback(
    () => {
      N(qa);
    },
    []
  ), F = index_js_.useCallback(
    (x) => {
      if (f(v), a.onPreviewChange) {
        const L = {
          value: v,
          nativeEvent: x.nativeEvent,
          syntheticEvent: x
        };
        a.onPreviewChange.call(void 0, L);
      }
    },
    [v, a.onPreviewChange]
  ), A = index_js_.useCallback(
    (x) => {
      s.current && !(x.nativeEvent.target instanceof HTMLInputElement) && s.current.focus();
    },
    [s]
  ), T = index_js_.useCallback(
    (x) => {
      var $;
      if ((!x.relatedTarget || !(($ = s.current) != null && $.contains(x.relatedTarget))) && (c || N(m), !c && a.onChange)) {
        const U = {
          value: m,
          nativeEvent: x.nativeEvent,
          syntheticEvent: x
        };
        a.onChange.call(void 0, U);
      }
    },
    [m, c, a.onChange]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      id: a.id,
      role: "textbox",
      "aria-label": a.ariaLabel,
      "aria-labelledby": a.ariaLabelledBy,
      "aria-disabled": a.disabled ? "true" : void 0,
      style: a.style,
      ref: s,
      tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(a.tabIndex, a.disabled),
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-flatcolorpicker k-coloreditor",
        {
          "k-disabled": a.disabled
        },
        a.className
      ),
      onBlur: T
    },
    /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, a.header || /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-header k-hstack" }, /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-header-actions k-hstack" }, /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.ButtonGroup, { className: "k-button-group-flat" }, /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        "aria-label": V.toLanguageString(
          Zt,
          H[Zt]
        ),
        togglable: !0,
        fillMode: "flat",
        selected: d,
        onClick: () => S("ColorGradient"),
        icon: "droplet-slider",
        svgIcon: index_es_js_.dropletSliderIcon
      }
    ), /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        "aria-label": V.toLanguageString(
          Jt,
          H[Jt]
        ),
        togglable: !0,
        fillMode: "flat",
        selected: !d,
        onClick: () => S("ColorPalette"),
        icon: "palette",
        svgIcon: index_es_js_.paletteIcon
      }
    ))), /* @__PURE__ */ index_js_.createElement("div", { className: "k-spacer" }), /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-header-actions k-hstack" }, h && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        fillMode: "flat",
        onClick: I,
        "aria-label": V.toLanguageString(
          Qt,
          H[Qt]
        ),
        icon: "droplet-slash",
        svgIcon: index_es_js_.dropletSlashIcon
      }
    ), o && /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-preview k-vstack" }, /* @__PURE__ */ index_js_.createElement("span", { className: "k-coloreditor-preview-color k-color-preview", style: { background: m } }), /* @__PURE__ */ index_js_.createElement("span", { className: "k-coloreditor-current-color k-color-preview", style: { background: v }, onClick: F })))), /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-views k-vstack" }, d ? /* @__PURE__ */ index_js_.createElement(
      ba,
      {
        ref: i,
        role: "none",
        tabIndex: -1,
        ariaLabel: void 0,
        value: m,
        onChange: O,
        onFocus: A,
        opacity: a.opacity,
        format: a.format
      }
    ) : /* @__PURE__ */ index_js_.createElement(va, { ariaDisabled: !0, ariaLabelledBy: "required_label", value: m, onChange: O, onFocus: A })), c && /* @__PURE__ */ index_js_.createElement("div", { className: "k-coloreditor-footer k-actions k-actions-end" }, /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.Button, { type: "button", className: "k-coloreditor-cancel", onClick: w }, H[cn]), /* @__PURE__ */ index_js_.createElement(kendo_react_buttons_index_mjs_.Button, { type: "button", className: "k-coloreditor-apply k-primary", onClick: B }, H[dn])))
  );
}), Ns = {
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
wn.displayName = "KendoFlatColorPicker";
wn.propTypes = Ns;
var Oe = /* @__PURE__ */ ((a) => (a[a.Literal = 0] = "Literal", a[a.Mask = 1] = "Mask", a[a.Undefined = 2] = "Undefined", a))(Oe || {});
class Y {
  constructor(t, e, s = 2) {
    this.value = t, this.rest = e, this.type = s;
  }
  // map :: Functor f => f a ~> (a -> b) -> f b
  map(t) {
    return new Y(t(this.value), this.rest);
  }
  // chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(t) {
    return t(this.value, this.rest);
  }
  fold(t, e) {
    return t(this.value, this.rest);
  }
  concat(t) {
    return this.map((e, s) => t.chain((i, l) => e.concat([i])));
  }
  toString() {
    return `Result({ value: '${this.value}', rest: ${this.rest} })`;
  }
}
class Ua {
  constructor(t = [], e = []) {
    this.input = t, this.control = e, this.inputCursor = 0, this.controlCursor = 0;
  }
  eof() {
    return this.inputCursor >= this.input.length;
  }
  // Get the first value from the input.
  next() {
    return {
      char: this.input[this.inputCursor++],
      control: this.control[this.controlCursor++]
    };
  }
  peek() {
    return {
      char: this.input[this.inputCursor],
      control: this.control[this.controlCursor]
    };
  }
  eat_input() {
    this.inputCursor++;
  }
  eat_control() {
    this.controlCursor++;
  }
  eat() {
    this.inputCursor++, this.controlCursor++;
  }
}
const ja = (a) => (a || "").split(""), Ps = "\\";
class xe {
  constructor(t) {
    this.parse = t;
  }
  run(t, e = "") {
    return t instanceof Ua ? this.parse(t) : this.parse(new Ua(ja(t), ja(e)));
  }
  // map :: Functor f => f a ~> (a -> b) -> f b
  map(t) {
    return new xe((e) => this.parse(e).map(t));
  }
  // chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(t) {
    return new xe((e) => this.parse(e).chain((s, i) => t(s).run(i)));
  }
  isLiteral(t) {
    return this.run(t).type === Oe.Literal;
  }
}
const Ds = (a) => (t) => new xe((e) => {
  const { prompt: s, promptPlaceholder: i } = a;
  for (; !e.eof(); ) {
    const { char: l, control: c } = e.peek();
    if (l === c && c === s)
      return e.eat(), new Y(s, e, Oe.Mask);
    if (t.test(l))
      return e.eat(), new Y(l, e, Oe.Mask);
    if (l === i)
      return e.eat(), new Y(s, e, Oe.Mask);
    e.eat_input();
  }
  return e.eat(), new Y(s, e, Oe.Mask);
}), Bs = (a) => new xe((t) => t.peek().char === a ? (t.eat(), new Y(a, t, Oe.Literal)) : new Y(a, t, Oe.Literal)), Os = (a) => (t) => new xe((e) => {
  for (; !e.eof(); ) {
    const { char: s, control: i } = e.peek();
    if (s === a && i === a)
      return e.eat(), new Y(s, e);
    if (t.test(s))
      return e.eat(), new Y(s, e);
    e.eat_input();
  }
  return e.eat(), new Y("", e);
}), Fs = (a) => new xe((t) => {
  if (t.eof())
    return new Y("", t);
  const { char: e } = t.peek();
  return e === a && t.eat(), new Y(a, t);
}), ot = (a, t) => new xe((e) => {
  let { char: s } = e.next();
  const i = a[s];
  return s === Ps ? (s = e.next().char, new Y(t.literal(s), e)) : i ? new Y(t.mask(i), e) : new Y(t.literal(s), e);
}), Wa = (a) => new xe((t) => {
  const { prompt: e, promptPlaceholder: s } = a;
  let { char: i } = t.next();
  return i === e ? new Y(s, t) : new Y(i, t);
}), Xa = (a) => new xe((t) => {
  let { char: e } = t.next();
  return a ? new Y(e, t) : new Y("", t);
}), Ts = (a) => new xe((t) => new Y(a, t)), zs = (a, t) => a.chain((e) => t.map((s) => e.concat([s]))), ze = (a) => a.reduce((t, e) => zs(t, e), Ts([])), ct = (a) => new xe((t) => {
  let e = new Y([], t);
  for (; !t.eof(); )
    e = e.concat(a.run(t));
  return e;
});
class _s {
  constructor() {
    this.rules = {}, this.prompt = "_", this.mask = "", this.promptPlaceholder = " ", this.includeLiterals = !1, this.maskTokens = [], this.unmaskTokens = [], this.rawTokens = [], this.validationTokens = [];
  }
  update({ mask: t = "", prompt: e = "", promptPlaceholder: s = " ", rules: i = {}, includeLiterals: l = !1 }) {
    this.mask = t, this.prompt = e, this.promptPlaceholder = s, this.rules = i, this.includeLiterals = l, this.tokenize();
  }
  validationValue(t = "") {
    let e = t;
    return ze(this.validationTokens).run(t).fold((s) => {
      e = s.join("");
    }), e;
  }
  rawValue(t = "") {
    let e = t;
    return this.rawTokens.length && ze(this.rawTokens).run(t).fold((s) => {
      e = s.join("");
    }), e;
  }
  /**
   * @hidden
   */
  maskRaw(t = "") {
    let e = t;
    return this.maskTokens.length && ze(this.maskTokens).run(t).fold((s) => {
      e = s.join("");
    }), e;
  }
  maskInput(t, e, s) {
    return t.length < e.length ? this.maskRemoved(t, e, s) : this.maskInserted(t, e, s);
  }
  maskInRange(t, e, s, i) {
    let l = "", c = i;
    const o = e.split("").slice(0, s), h = e.split("").slice(i);
    return ze(this.maskTokens.slice(s, i)).run(t).fold((d) => {
      l = o.concat(d).concat(h).join("");
    }), {
      selection: c,
      value: l
    };
  }
  maskRemoved(t, e, s) {
    let i = "", l = s;
    const c = t.split("").slice(s), o = t.split("").slice(0, s).join(""), h = this.maskTokens.length - (t.length - s);
    return ze(this.maskTokens.slice(0, h)).run(o, e).fold((d) => {
      l = this.adjustPosition(d, l), i = d.concat(c).join("");
    }), {
      selection: l,
      value: i
    };
  }
  adjustPosition(t, e) {
    const s = t[e];
    return !this.maskTokens[e].isLiteral(s) && s !== this.prompt ? e + 1 : e;
  }
  maskInserted(t, e, s) {
    let i = "", l = s;
    const c = t.slice(0, s);
    return ze(this.unmaskTokens).run(c, e).chain((o) => {
      l = o.join("").length;
      const h = e.slice(l);
      return ze(this.maskTokens).run(o.join("") + h, e);
    }).fold((o) => {
      i = o.join("");
    }), {
      selection: l,
      value: i
    };
  }
  get maskTokenCreator() {
    const { prompt: t, promptPlaceholder: e } = this;
    return {
      literal: (s) => Bs(s),
      mask: (s) => Ds({ prompt: t, promptPlaceholder: e })(s)
    };
  }
  get unmaskTokenCreator() {
    return {
      literal: (t) => Fs(t),
      mask: (t) => Os(this.prompt)(t)
    };
  }
  get rawTokenCreator() {
    const { prompt: t, promptPlaceholder: e, includeLiterals: s } = this;
    return {
      literal: (i) => Xa(s),
      mask: (i) => Wa({ prompt: t, promptPlaceholder: e })
    };
  }
  get validationTokenCreator() {
    const { prompt: t } = this;
    return {
      literal: (e) => Xa(!1),
      mask: (e) => Wa({ prompt: t, promptPlaceholder: "" })
    };
  }
  tokenize() {
    ct(ot(this.rules, this.maskTokenCreator)).run(this.mask).fold((t, e) => {
      this.maskTokens = t;
    }), ct(ot(this.rules, this.unmaskTokenCreator)).run(this.mask).fold((t, e) => {
      this.unmaskTokens = t;
    }), ct(ot(this.rules, this.rawTokenCreator)).run(this.mask).fold((t, e) => {
      this.rawTokens = t;
    }), ct(ot(this.rules, this.validationTokenCreator)).run(this.mask).fold((t, e) => {
      this.validationTokens = t;
    });
  }
}
const In = {
  "#": /[\d\s\+\-]/,
  "&": /[\S]/,
  0: /[\d]/,
  9: /[\d\s]/,
  "?": /[a-zA-Z\s]/,
  A: /[a-zA-Z0-9]/,
  C: /./,
  L: /[a-zA-Z]/,
  a: /[a-zA-Z0-9\s]/
}, Ya = () => !1, As = (a, t) => a.includeLiterals !== t.includeLiterals || a.mask !== t.mask || a.prompt !== t.prompt || a.promptPlaceholder !== t.promptPlaceholder || !$s(a.rules, t.rules), $s = (a, t) => {
  if (!!a != !!t)
    return !1;
  if (a === t || !a || !t)
    return !0;
  let e = !0;
  for (const s in a)
    if (a[s] !== t[s]) {
      e = !1;
      break;
    }
  if (e) {
    for (const s in t)
      if (!a.hasOwnProperty(s)) {
        e = !1;
        break;
      }
  }
  return e;
}, Pe = class extends index_js_.Component {
  constructor(a) {
    super(a), this.state = {}, this._inputId = `k-${this.props.id}`, this._service = new _s(), this._isPasted = !1, this._selection = [null, null], this._input = null, this.focus = () => {
      this._input && this._input.focus();
    }, this.pasteHandler = (t) => {
      const { selectionStart: e, selectionEnd: s } = t.target;
      s !== e && (this._isPasted = !0, this._selection = [e || 0, s || 0]);
    }, this.onChangeHandler = (t) => {
      const e = t.currentTarget, s = e.value, i = this._selection[0] || 0, l = this._selection[1] || 0;
      if (!this.props.mask) {
        this._isPasted = !1, this._selection = [null, null], this.triggerOnChange(s, t);
        return;
      }
      const c = this.value;
      let o;
      if (this._isPasted) {
        this._isPasted = !1;
        const h = c.length - l, d = s.length - h;
        o = this._service.maskInRange(s.slice(i, d), c, i, l);
      } else
        o = this._service.maskInput(s, c, e.selectionStart || 0);
      this._selection = [o.selection, o.selection], this.triggerOnChange(o.value, t);
    }, this.focusHandler = (t) => {
      this.state.focused || (this.setState({ focused: !0 }), this.props.onFocus && this.props.onFocus.call(void 0, {
        target: this,
        syntheticEvent: t,
        nativeEvent: t.nativeEvent
      }));
    }, this.blurHandler = (t) => {
      this.state.focused && (this.setState({ focused: !1 }), this.props.onBlur && this.props.onBlur.call(void 0, {
        target: this,
        syntheticEvent: t,
        nativeEvent: t.nativeEvent
      }));
    }, this.setValidity = () => {
      this.element && this.element.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || ""
      );
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me);
  }
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
  get element() {
    return this._input;
  }
  /**
   * Gets the value with the mask of the MaskedTextBox.
   */
  get value() {
    return this._valueDuringOnChange !== void 0 ? this._valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value !== void 0 ? this.state.value : this.props.defaultValue !== void 0 ? this.props.defaultValue : "";
  }
  /**
   * Gets the raw value without the mask of the MaskedTextBox.
   */
  get rawValue() {
    return this._service.rawValue(this.value);
  }
  /**
   * Represents the validity state into which the MaskedTextBox is set.
   */
  get validity() {
    const a = this.value, t = this._service.validationValue(a), e = this.props.validationMessage !== void 0, s = this.props.valid !== void 0 ? this.props.valid : (!this.required || !!t) && (!this.props.maskValidation || !this.props.prompt || a.indexOf(this.props.prompt) === -1);
    return {
      customError: e,
      valid: s,
      valueMissing: !t
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : Pe.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : Pe.defaultProps.required;
  }
  /**
   * Gets the `name` property of the MaskedTextBox.
   */
  get name() {
    return this.props.name;
  }
  /**
   * @hidden
   */
  componentDidUpdate(a, t) {
    if (this.element && this.state.focused && t.focused) {
      let [e, s] = this._selection;
      const i = a.selection, l = this.props.selection;
      (!i && l || i && l && (i.start !== l.start || i.end !== l.end)) && (e = l.start, s = l.end), e !== null && s !== null && this.element.setSelectionRange(e, s);
    }
    As(a, this.props) && this.updateService(), this.setValidity();
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.updateService(), this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: a = Pe.defaultProps.size,
      fillMode: t = Pe.defaultProps.fillMode,
      rounded: e = Pe.defaultProps.rounded
    } = this.props, s = this.props.id || this._inputId, i = !this.validityStyles || this.validity.valid, l = this.props.style || {}, {
      prefix: c = Pe.defaultProps.prefix,
      suffix: o = Pe.defaultProps.suffix
    } = this.props, [h] = (0,kendo_react_common_index_mjs_.useCustomComponent)(c), [d] = (0,kendo_react_common_index_mjs_.useCustomComponent)(o), p = /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        dir: this.props.dir,
        className: (0,kendo_react_common_index_mjs_.classNames)(
          "k-maskedtextbox k-input",
          {
            [`k-input-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[a] || a}`]: a,
            [`k-input-${t}`]: t,
            [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[e] || e}`]: e,
            "k-invalid": !i,
            "k-required": this.required,
            "k-disabled": this.props.disabled
          },
          this.props.className
        ),
        style: this.props.label ? l : { width: this.props.width, ...l }
      },
      /* @__PURE__ */ index_js_.createElement(h, null),
      /* @__PURE__ */ index_js_.createElement(
        "input",
        {
          type: "text",
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          spellCheck: !1,
          className: "k-input-inner",
          value: this.value,
          id: s,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-describedby": this.props.ariaDescribedBy,
          "aria-placeholder": this.props.mask,
          name: this.props.name,
          tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(this.props.tabIndex, this.props.disabled, !0),
          accessKey: this.props.accessKey,
          title: this.props.title,
          disabled: this.props.disabled || void 0,
          readOnly: this.props.readonly || void 0,
          placeholder: this.props.placeholder,
          ref: (m) => this._input = m,
          onChange: this.onChangeHandler,
          onPaste: this.pasteHandler,
          onFocus: this.focusHandler,
          onBlur: this.blurHandler,
          onDragStart: Ya,
          onDrop: Ya
        }
      ),
      /* @__PURE__ */ index_js_.createElement(d, null)
    );
    return this.props.label ? /* @__PURE__ */ index_js_.createElement(
      kendo_react_labels_index_mjs_.FloatingLabel,
      {
        label: this.props.label,
        editorId: s,
        editorValue: this.value,
        editorValid: i,
        editorDisabled: this.props.disabled,
        editorPlaceholder: this.props.placeholder,
        children: p,
        style: { width: this.props.width },
        dir: this.props.dir
      }
    ) : p;
  }
  triggerOnChange(a, t) {
    if (this.setState({
      value: a
    }), this.props.onChange) {
      this._valueDuringOnChange = a;
      const e = {
        syntheticEvent: t,
        nativeEvent: t.nativeEvent,
        selectionStart: this._selection[0],
        selectionEnd: this._selection[1],
        target: this,
        value: this.value
      };
      this.props.onChange.call(void 0, e), this._valueDuringOnChange = void 0;
    }
  }
  updateService(a) {
    const t = Object.assign({
      includeLiterals: this.props.includeLiterals,
      mask: this.props.mask,
      prompt: this.props.prompt,
      promptPlaceholder: this.props.promptPlaceholder,
      rules: this.rules
    }, a);
    this._service.update(t);
  }
  get rules() {
    return Object.assign({}, In, this.props.rules);
  }
};
let yt = Pe;
yt.displayName = "MaskedTextBox";
yt.propTypes = {
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
  rules: function(a, t, e) {
    const s = a.rules;
    return s !== void 0 && !Object.entries(s).some((l) => typeof l != "string" || !(s[l] instanceof RegExp)) ? new Error(
      "Invalid prop `" + t + "` supplied to `" + e + "`. Validation failed."
    ) : null;
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
};
yt.defaultProps = {
  prompt: "_",
  promptPlaceholder: " ",
  includeLiterals: !1,
  maskValidation: !0,
  rules: In,
  required: !1,
  validityStyles: !0,
  prefix: (a) => null,
  suffix: (a) => null,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const Hs = (0,kendo_react_common_index_mjs_.createPropsContext)(), Gs = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(Hs, yt));
Gs.displayName = "KendoReactMaskedTextBox";
var X = /* @__PURE__ */ ((a) => (a.start = "start", a.end = "end", a.min = "min", a.max = "max", a.increase = "increase", a.decrease = "decrease", a))(X || {});
const Ks = (a, t) => {
  let e, s;
  switch (t.type) {
    case "start":
      if (t.payload === void 0)
        return a;
      e = {
        start: t.payload > a.end ? a.end : Math.max(t.payload, t.min),
        end: a.end
      };
      break;
    case "end":
      if (t.payload === void 0)
        return a;
      e = {
        start: a.start,
        end: t.payload < a.start ? a.start : Math.min(t.payload, t.max)
      };
      break;
    case "min":
      t.key === "start" ? e = {
        ...a,
        start: t.min
      } : e = {
        ...a,
        end: Math.max(t.min, a.start)
      };
      break;
    case "max":
      t.key === "start" ? e = {
        ...a,
        start: Math.min(t.max, a.end)
      } : e = {
        ...a,
        end: t.max
      };
      break;
    case "increase":
      if (t.step === void 0 || t.key === void 0)
        return a;
      s = a[t.key] + t.step, t.key === "start" ? s < t.min ? e = {
        ...a,
        start: t.min
      } : e = {
        ...a,
        start: Math.min(s, a.end)
      } : s > t.max ? e = {
        ...a,
        end: t.max
      } : e = {
        ...a,
        end: Math.max(s, a.start)
      };
      break;
    case "decrease":
      if (t.step === void 0 || t.key === void 0)
        return a;
      s = a[t.key] - t.step, t.key === "start" ? s < t.min ? e = {
        ...a,
        start: t.min
      } : e = {
        ...a,
        start: Math.min(s, a.end)
      } : s > t.max ? e = {
        ...a,
        end: t.max
      } : e = {
        ...a,
        end: Math.max(s, a.start)
      };
      break;
    default:
      e = a;
      break;
  }
  return e;
}, qs = (a, t, e) => {
  const [s, i] = index_js_.useState(a), l = index_js_.useCallback(
    (c) => {
      const o = Ks(t.state || s, { ...c, ...t });
      e && e(o, c.event), i(o);
    },
    [t, e]
  );
  return [s, l];
}, Us = (0,kendo_react_common_index_mjs_.createPropsContext)(), ya = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(Us, a), s = index_js_.useRef(null), i = index_js_.useRef(null), l = index_js_.useRef(null), c = index_js_.useRef(null), o = index_js_.useRef(null), h = index_js_.useCallback(
    () => {
      c.current && c.current.focus();
    },
    [c]
  );
  index_js_.useImperativeHandle(s, () => ({
    element: i.current,
    focus: h,
    props: e
  })), index_js_.useImperativeHandle(t, () => s.current);
  const d = index_js_.useMemo(
    () => e.min,
    [e.min]
  ), p = index_js_.useMemo(
    () => e.max,
    [e.max]
  ), m = index_js_.useMemo(
    () => e.step !== void 0 ? e.step : ut.step,
    [e.step, ut.step]
  ), f = (0,kendo_react_common_index_mjs_.useDir)(i, e.dir), v = (u, y) => {
    e.onChange && s.current && e.onChange.call(void 0, {
      value: u,
      target: s.current,
      syntheticEvent: y
    });
  }, [N, P] = index_js_.useState(""), [V, R] = qs(
    e.defaultValue || ut.defaultValue,
    {
      min: d,
      max: p,
      step: m,
      state: e.value
    },
    v
  ), S = index_js_.useMemo(
    () => e.value || V,
    [e.value, V]
  ), I = index_js_.useRef(null), O = index_js_.useRef(null), B = index_js_.useMemo(
    () => (S.start - d) / (p - d) * 100,
    [S.start, d, p]
  ), w = index_js_.useMemo(
    () => (S.end - d) / (p - d) * 100,
    [S.end, d, p]
  ), F = index_js_.useMemo(
    () => e.vertical ? { paddingTop: 0, height: "100%" } : {},
    [e.vertical]
  ), A = index_js_.useMemo(
    () => e.vertical ? { marginTop: "0.5rem", marginBottom: "0.5rem" } : { marginLeft: "0.5rem", marginRight: "0.5rem" },
    [e.vertical]
  ), T = (0,index_mjs_.useLocalization)(), x = index_js_.useCallback(
    (u) => {
      if (!O.current)
        return;
      const y = O.current.getBoundingClientRect(), E = e.vertical ? y.bottom - u.clientY : f === "rtl" ? y.right - u.clientX : u.clientX - y.left, D = e.vertical ? y.height : y.width, ee = E / D;
      return d + ee * (p - d);
    },
    [
      O,
      e.vertical,
      f,
      d,
      p,
      V.start,
      V.end,
      e.value && e.value.start,
      e.value && e.value.end
    ]
  ), L = index_js_.useCallback(
    (u) => u <= S.start ? "start" : u >= S.end ? "end" : 2 * u < S.end + S.start ? "start" : "end",
    [
      V.start,
      V.end,
      e.value && e.value.start,
      e.value && e.value.end
    ]
  ), $ = index_js_.useCallback(
    (u) => {
      switch (u.keyCode) {
        case kendo_react_common_index_mjs_.Keys.right:
          u.preventDefault(), R({ type: f === "rtl" ? X.decrease : X.increase, key: "start", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.up:
          u.preventDefault(), R({ type: X.increase, key: "start", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.left:
          u.preventDefault(), R({ type: f === "rtl" ? X.increase : X.decrease, key: "start", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.down:
          u.preventDefault(), R({ type: X.decrease, key: "start", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.home:
          u.preventDefault(), R({ type: X.min, key: "start", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.end:
          u.preventDefault(), R({ type: X.max, key: "start", event: u });
          break;
      }
    },
    [R]
  ), U = index_js_.useCallback(
    (u) => {
      switch (u.keyCode) {
        case kendo_react_common_index_mjs_.Keys.right:
          u.preventDefault(), R({ type: f === "rtl" ? X.decrease : X.increase, key: "end", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.up:
          u.preventDefault(), R({ type: X.increase, key: "end", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.left:
          u.preventDefault(), R({ type: f === "rtl" ? X.increase : X.decrease, key: "end", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.down:
          u.preventDefault(), R({ type: X.decrease, key: "end", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.home:
          u.preventDefault(), R({ type: X.min, key: "end", event: u });
          break;
        case kendo_react_common_index_mjs_.Keys.end:
          u.preventDefault(), R({ type: X.max, key: "end", event: u });
          break;
      }
    },
    [R, f]
  ), Q = index_js_.useCallback(
    (u) => {
      const y = x(u), E = L(y);
      P(E), E === "end" ? o.current.focus() : c.current.focus();
      const D = E === "end" ? X.end : X.start;
      R({ type: D, payload: y, event: u });
    },
    [e.vertical, d, p, R]
  );
  return (0,kendo_react_common_index_mjs_.useDraggable)(O, { onPress: Q, onDrag: (u) => {
    const y = x(u), E = N === "end" ? X.end : X.start;
    R({ type: E, payload: y, event: u });
  }, onRelease: (u) => {
    const y = x(u), E = N === "end" ? X.end : X.start;
    R({ type: E, payload: y, event: u }), P("");
  } }), /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      id: e.id,
      style: e.style,
      ref: i,
      dir: f,
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-slider",
        {
          "k-rtl": f === "rtl",
          "k-disabled": e.disabled,
          "k-slider-vertical": e.vertical,
          "k-slider-horizontal": !e.vertical
        },
        e.className
      )
    },
    /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        ref: O,
        className: "k-slider-track-wrap",
        style: {
          flexGrow: 1,
          position: "relative",
          touchAction: "none",
          ...A
        }
      },
      e.children && /* @__PURE__ */ index_js_.createElement(
        "ul",
        {
          className: "k-reset k-slider-items",
          style: { ...F }
        },
        index_js_.Children.map(e.children, (u) => u && index_js_.cloneElement(
          u,
          {
            position: 100 * (u.props.position - e.min) / (e.max - e.min),
            vertical: e.vertical
          },
          u.props.children
        ))
      ),
      /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          ref: I,
          className: "k-slider-track",
          style: e.vertical ? { bottom: 0, height: "100%" } : { [f === "rtl" ? "right" : "left"]: 0, width: "100%" }
        },
        B !== null && w !== null && /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            "data-selection": !0,
            ref: l,
            title: `${S.start} - ${S.end}`,
            className: "k-slider-selection",
            style: e.vertical ? { height: w - B + "%", bottom: B + "%" } : {
              [f === "rtl" ? "right" : "left"]: B + "%",
              width: w - B + "%"
            }
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          "span",
          {
            ref: c,
            role: "slider",
            tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(e.startTabIndex, e.disabled, void 0),
            "aria-valuemin": d,
            "aria-valuemax": Math.max(p, S.end),
            "aria-valuenow": S.start,
            "aria-disabled": e.disabled ? "true" : void 0,
            "aria-valuetext": `${S.start} - ${S.end}`,
            className: "k-draghandle",
            title: T.toLanguageString(Ae, H[Ae]),
            style: e.vertical ? { bottom: "calc(" + B + "%)", zIndex: 1 } : f === "rtl" ? { right: "calc(" + B + "% - 13px)", zIndex: 1 } : { left: "calc(" + B + "%)", zIndex: 1 },
            onKeyDown: $
          }
        ),
        /* @__PURE__ */ index_js_.createElement(
          "span",
          {
            ref: o,
            role: "slider",
            tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(e.endTabIndex, e.disabled, void 0),
            "aria-valuemin": Math.min(d, S.start),
            "aria-valuemax": p,
            "aria-valuenow": S.end,
            "aria-disabled": e.disabled ? "true" : void 0,
            "aria-valuetext": `${S.start} - ${S.end}`,
            className: "k-draghandle",
            title: T.toLanguageString(Ae, H[Ae]),
            style: e.vertical ? { bottom: "calc(" + w + "%)", zIndex: 1 } : f === "rtl" ? { right: "calc(" + w + "% - 13px)", zIndex: 1 } : { left: "calc(" + w + "%)", zIndex: 1 },
            onKeyDown: U
          }
        )
      )
    )
  );
}), js = {
  value: (a, t, e) => {
    if (a.value) {
      const s = a.value.start, i = a.value.end, l = a.min, c = a.max;
      if (s > i || s > c || s < l || i > c || i < l || i < s)
        return new Error(
          `Invalid prop + ${t} supplied to ${e}.
                    The { start, end } value must be between the min & max value and { start, end } must be start < end.
                    `
        );
    }
    return null;
  },
  defaultValue: (a, t, e) => {
    if (a.defaultValue) {
      const s = a.defaultValue.start, i = a.defaultValue.end, l = a.min, c = a.max;
      if (s > i || s > c || s < l || i > c || i < l || i < s)
        return new Error(
          `Invalid prop + ${t} supplied to ${e}.
                    The { start, end } value must be between the min & max value and { start, end } must be start < end.
                    `
        );
    }
    return null;
  },
  onChange: prop_types_index_js_.func,
  step: prop_types_index_js_.number,
  min: (a, t, e) => {
    const s = a[t], i = a.min, l = a.max;
    return i === void 0 ? new Error(
      `Invalid prop + ${t} supplied to ${e}.
                ${t} value can not be undefined.
                `
    ) : s && i >= l ? new Error(
      `Invalid prop + ${t} supplied to ${e}.
                ${t} value can not be equal to or bigger than the max value.
                `
    ) : null;
  },
  max: (a, t, e) => {
    const s = a[t], i = a.min, l = a.max;
    return l === void 0 ? new Error(
      `Invalid prop + ${t} supplied to ${e}.
                ${t} value can not be undefined.
                `
    ) : s && l <= i ? new Error(
      `Invalid prop + ${t} supplied to ${e}.
                ${t} value can not be equal to or smaller than the min value.
                `
    ) : null;
  },
  vertical: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  dir: prop_types_index_js_.oneOf(["ltr", "rtl"])
}, ut = {
  step: 1,
  defaultValue: {
    start: 0,
    end: 0
  },
  vertical: !1,
  disabled: !1
};
ya.displayName = "KendoReactRangeSlider";
ya.propTypes = js;
ya.defaultProps = ut;
const ft = class extends index_js_.Component {
  /**
   * @hidden
   */
  constructor(a) {
    super(a), this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || this.defaultValidationMessage.toLanguageString(ea, H[ea])
      );
    }, this.limit = (t, e, s) => {
      const i = s.offsetWidth, l = e.offsetWidth;
      return t < 0 ? 0 : t > i - l ? i - l : t;
    }, this.toggle = (t, e) => {
      this.setState({ checked: t }), this.valueDuringOnChange = t, (0,kendo_react_common_index_mjs_.dispatchEvent)(this.props.onChange, e, this, { value: t }), this.valueDuringOnChange = void 0;
    }, this._element = null, this._wrapper = null, this._input = null, this._id = this.props.id, this.defaultValidationMessage = (0,index_mjs_.provideLocalizationService)(this), this.focus = () => {
      this.actionElement && this.actionElement.focus();
    }, this.dummyInput = (t) => /* @__PURE__ */ index_js_.createElement(
      "input",
      {
        type: "checkbox",
        checked: this.props.checked,
        ref: (e) => {
          this._input = e;
        },
        tabIndex: -1,
        "aria-hidden": !0,
        value: t,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" },
        onChange: kendo_react_common_index_mjs_.noop,
        name: this.name || void 0
      }
    ), this.handleClick = (t) => {
      this.eventTimeStamp !== t.timeStamp && (this.eventTimeStamp = t.timeStamp, this.toggle(!this.value, t));
    }, this.handleKeyDown = (t) => {
      if (this.props.disabled)
        return;
      const { keyCode: e } = t;
      (e === kendo_react_common_index_mjs_.Keys.space || e === kendo_react_common_index_mjs_.Keys.enter) && (this.toggle(!this.value, t), t.preventDefault());
    }, this.handleWrapperFocus = (t) => {
      if (this.props.disabled)
        return;
      this.setState({ focused: !0 });
      const { onFocus: e } = this.props;
      e && e.call(void 0, t);
    }, this.handleWrapperBlur = (t) => {
      if (this.props.disabled)
        return;
      this.setState({ focused: !1 });
      const { onBlur: e } = this.props;
      e && e.call(void 0, t);
    }, (0,kendo_react_common_index_mjs_.validatePackage)(me), this.state = {
      checked: a.defaultChecked || ft.defaultProps.defaultChecked,
      focused: !1
    };
  }
  /**
   * Gets the value of the Switch.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.checked !== void 0 ? this.props.checked : this.state.checked;
  }
  get element() {
    return this._element;
  }
  get actionElement() {
    return this._wrapper;
  }
  /**
   * Gets the `name` property of the Switch.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the Switch is set.
   */
  get validity() {
    const a = this.props.validationMessage !== void 0, t = this.props.valid !== void 0 ? this.props.valid : this.props.required ? !!this.value : !0, e = this.props.valid !== void 0 ? this.props.valid : t;
    return {
      customError: a,
      valid: e,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : ft.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : ft.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setValidity(), this.forceUpdate();
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const { focused: a } = this.state, { dir: t, disabled: e, trackRounded: s, thumbRounded: i, size: l, offLabel: c, onLabel: o, tabIndex: h } = this.props;
    this.dir = t || this.element && getComputedStyle(this.element).direction || void 0;
    const d = !this.validityStyles || this.validity.valid, p = (0,kendo_react_common_index_mjs_.classNames)(
      "k-switch",
      {
        [`k-switch-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[l] || l}`]: l,
        [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[s] || s}`]: s,
        "k-switch-on": this.value,
        "k-switch-off": !this.value,
        "k-focus": a,
        "k-disabled": e,
        "k-invalid": !d
      },
      this.props.className
    ), m = {
      "aria-checked": this.value,
      "aria-disabled": e || void 0,
      "aria-labelledby": this.props.ariaLabelledBy,
      "aria-describedby": this.props.ariaDescribedBy,
      "aria-label": this.props.ariaLabel
    };
    return /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        ref: (f) => {
          this._wrapper = f;
        },
        role: "switch",
        ...m,
        className: p,
        dir: this.dir,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onBlur: this.handleWrapperBlur,
        onFocus: this.handleWrapperFocus,
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(h, e, void 0),
        accessKey: this.props.accessKey,
        id: this.props.id || this._id
      },
      /* @__PURE__ */ index_js_.createElement(
        "span",
        {
          className: (0,kendo_react_common_index_mjs_.classNames)(
            "k-switch-track",
            { [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[s] || s}`]: s }
          ),
          ref: (f) => {
            this._element = f;
          }
        },
        this.dummyInput(this.value),
        /* @__PURE__ */ index_js_.createElement("span", { className: "k-switch-label-on" }, o),
        /* @__PURE__ */ index_js_.createElement("span", { className: "k-switch-label-off" }, c)
      ),
      /* @__PURE__ */ index_js_.createElement("span", { className: "k-switch-thumb-wrap" }, /* @__PURE__ */ index_js_.createElement("span", { className: (0,kendo_react_common_index_mjs_.classNames)("k-switch-thumb", { [`k-rounded-${i}`]: i }) }))
    );
  }
};
let Ct = ft;
Ct.displayName = "Switch";
Ct.propTypes = {
  accessKey: prop_types_index_js_.string,
  checked: prop_types_index_js_.bool,
  className: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  defaultChecked: prop_types_index_js_.bool,
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  trackRounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  thumbRounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
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
Ct.defaultProps = {
  disabled: !1,
  defaultChecked: !1,
  size: "medium",
  trackRounded: "full",
  thumbRounded: "full",
  offLabel: "OFF",
  onBlur: kendo_react_common_index_mjs_.noop,
  onFocus: kendo_react_common_index_mjs_.noop,
  onLabel: "ON",
  required: !1,
  validityStyles: !0
};
const Ws = (0,kendo_react_common_index_mjs_.createPropsContext)(), Xs = (0,kendo_react_common_index_mjs_.withIdHOC)((0,kendo_react_common_index_mjs_.withPropsContext)(Ws, Ct));
Xs.displayName = "KendoReactSwitch";
const Ys = (0,kendo_react_common_index_mjs_.createPropsContext)(), Ca = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(Ys, a), {
    ariaDescribedBy: s,
    ariaLabelledBy: i,
    checked: l,
    className: c,
    labelClassName: o,
    children: h,
    defaultChecked: d,
    disabled: p,
    defaultValue: m,
    id: f,
    size: v,
    rounded: N,
    label: P,
    labelPlacement: V,
    name: R,
    labelOptional: S,
    onChange: I,
    onFocus: O,
    onBlur: B,
    tabIndex: w,
    value: F,
    required: A,
    valid: T,
    validationMessage: x,
    validityStyles: L,
    // Removed to support direct use in Form Field component
    visited: $,
    touched: U,
    modified: Q,
    ...g
  } = e, k = index_js_.useRef(null), u = index_js_.useCallback(
    () => {
      k.current && k.current.focus();
    },
    []
  ), y = index_js_.useCallback(
    () => ({
      element: k.current,
      focus: u,
      get name() {
        return k.current && k.current.name;
      }
    }),
    [u]
  );
  index_js_.useImperativeHandle(t, y);
  const [E, D] = index_js_.useState(d), [ee, Z] = index_js_.useState(m), M = typeof F == "boolean" || F === null, b = l !== void 0, q = M, K = q ? F : ee, W = b ? l : q ? void 0 : E, ie = W === void 0 && K, Ee = ie ? K : W, le = ie || q ? F === null ? F : void 0 : F || K, we = Ee === null || le === null, be = (0,kendo_react_common_index_mjs_.useId)(), Ne = (0,index_mjs_.useLocalization)(), z = (te) => Ne.toLanguageString(te, H[te]), ve = z(un), oe = z(fn), ke = T !== void 0 ? T : A ? !!W : !0;
  index_js_.useEffect(
    () => {
      k.current && k.current.setCustomValidity && k.current.setCustomValidity(
        ke ? "" : x || ve
      );
    },
    [ke, x, ve]
  );
  const Se = index_js_.useCallback(
    (te, Le) => {
      !q && !p && (Z(Le), !b && !p && D(Le)), I && !p && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        I,
        te,
        {
          ...y(),
          value: Le
        },
        { value: Le }
      );
    },
    [b, p, I, q, y]
  ), wt = index_js_.useCallback(
    (te) => {
      const Le = te.target.checked;
      Se(te, Le);
    },
    [Se, F]
  ), tt = index_js_.useCallback(
    (te) => {
      if (p)
        return;
      const { keyCode: Le } = te, Nn = te.currentTarget.checked;
      Le === kendo_react_common_index_mjs_.Keys.space && (te.preventDefault(), te.stopPropagation(), Se(te, !Nn));
    },
    [p, Se]
  ), at = index_js_.useCallback(
    (te) => {
      if (p)
        return;
      const { keyCode: Le } = te;
      Le === kendo_react_common_index_mjs_.Keys.space && te.preventDefault();
    },
    [p]
  ), It = index_js_.useCallback(
    (te) => {
      O && !p && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        O,
        te,
        y(),
        void 0
      );
    },
    [O, p, y]
  ), C = index_js_.useCallback(
    (te) => {
      B && !p && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        B,
        te,
        y(),
        void 0
      );
    },
    [B, p, y]
  ), j = (0,kendo_react_common_index_mjs_.useDir)(k, e.dir), ce = (0,kendo_react_common_index_mjs_.classNames)(
    "k-checkbox-wrap",
    c
  ), Ie = {
    type: "checkbox",
    className: (0,kendo_react_common_index_mjs_.classNames)(
      "k-checkbox",
      {
        [`k-checkbox-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[v] || v}`]: v,
        [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[N] || N}`]: N,
        "k-indeterminate": we,
        "k-disabled": p,
        "k-invalid k-invalid": !(ke || L !== void 0 || L === !0)
      }
    ),
    ref: k,
    name: R,
    id: f || be,
    "aria-labelledby": i,
    "aria-describedby": s,
    checked: !!Ee,
    disabled: p,
    tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(w, p),
    role: "checkbox",
    required: A !== void 0 ? A : !1,
    "aria-checked": W || Ee ? !0 : we ? "mixed" : !1,
    "aria-disabled": p || void 0,
    ...g,
    onChange: wt,
    onKeyDown: tt,
    onKeyUp: at,
    onFocus: It,
    onBlur: C
  }, Mn = /* @__PURE__ */ index_js_.createElement(
    index_js_.Fragment,
    null,
    // removing value prop is required due to bug in react where
    // value set to undefined override default submit value
    le === void 0 ? /* @__PURE__ */ index_js_.createElement("input", { ...Ie }) : /* @__PURE__ */ index_js_.createElement("input", { ...Ie, value: M ? void 0 : le === null ? "" : le })
  ), Lt = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, P !== void 0 ? /* @__PURE__ */ index_js_.createElement(
    "label",
    {
      className: (0,kendo_react_common_index_mjs_.classNames)("k-checkbox-label", o),
      htmlFor: f || be,
      style: { userSelect: "none" }
    },
    P,
    S && /* @__PURE__ */ index_js_.createElement("span", { className: "k-label-optional" }, oe)
  ) : null), Rt = /* @__PURE__ */ index_js_.createElement("span", { className: ce }, Mn, h);
  return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, V === "before" ? /* @__PURE__ */ index_js_.createElement("div", { dir: "rtl" }, Rt, Lt) : V === "after" ? /* @__PURE__ */ index_js_.createElement("div", { dir: "ltr" }, Rt, Lt) : /* @__PURE__ */ index_js_.createElement("div", { dir: j }, Rt, Lt));
});
Ca.propTypes = {
  checked: prop_types_index_js_.bool,
  className: prop_types_index_js_.string,
  defaultChecked: prop_types_index_js_.bool,
  defaultValue: prop_types_index_js_.any,
  dir: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  id: prop_types_index_js_.string,
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
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
const Zs = {
  size: "medium",
  rounded: "medium"
};
Ca.defaultProps = Zs;
Ca.displayName = "KendoCheckbox";
const Js = (0,kendo_react_common_index_mjs_.createPropsContext)(), xt = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(Js, a), {
    ariaDescribedBy: s,
    checked: i,
    children: l,
    className: c,
    disabled: o,
    id: h,
    size: d,
    label: p,
    labelPlacement: m,
    name: f,
    style: v,
    tabIndex: N,
    value: P,
    valid: V,
    onChange: R,
    onFocus: S,
    onBlur: I,
    ...O
  } = e, B = index_js_.useRef(null), w = index_js_.useCallback(
    () => {
      B.current && B.current.focus();
    },
    []
  ), F = index_js_.useCallback(
    () => ({
      element: B.current,
      focus: w
    }),
    [w]
  );
  index_js_.useImperativeHandle(t, F);
  const A = (0,kendo_react_common_index_mjs_.useId)(), T = index_js_.useCallback(
    (g) => {
      (0,kendo_react_common_index_mjs_.dispatchEvent)(
        R,
        g,
        F(),
        { value: P }
      );
    },
    [R, P, o]
  ), x = index_js_.useCallback(
    (g) => {
      S && !o && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        S,
        g,
        F(),
        void 0
      );
    },
    [S, o]
  ), L = index_js_.useCallback(
    (g) => {
      I && !o && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        I,
        g,
        F(),
        void 0
      );
    },
    [I, o]
  ), $ = {
    type: "radio",
    id: h || A,
    name: f,
    className: (0,kendo_react_common_index_mjs_.classNames)(
      "k-radio",
      {
        [`k-radio-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[d] || d}`]: d,
        "k-invalid": V === !1
      },
      c
    ),
    ref: B,
    disabled: o,
    tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(N, o),
    checked: i,
    style: v,
    "aria-describedby": s,
    value: P,
    onChange: T,
    onFocus: x,
    onBlur: L,
    ...O
  }, U = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, p !== void 0 ? /* @__PURE__ */ index_js_.createElement(
    "label",
    {
      className: "k-radio-label",
      htmlFor: h || A,
      style: { userSelect: "none" },
      "aria-label": p
    },
    p
  ) : null), Q = /* @__PURE__ */ index_js_.createElement("input", { ...$ });
  return m === "before" ? /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, U, Q, l) : /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, Q, U, l);
});
xt.propTypes = {
  ariaDescribedBy: prop_types_index_js_.string,
  checked: prop_types_index_js_.bool,
  className: prop_types_index_js_.string,
  disabled: prop_types_index_js_.bool,
  id: prop_types_index_js_.string,
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
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
const Qs = {
  size: "medium"
};
xt.displayName = "KendoRadioButton";
xt.defaultProps = Qs;
const er = (0,kendo_react_common_index_mjs_.createPropsContext)(), xa = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(er, a), {
    id: s,
    ariaLabelledBy: i,
    ariaDescribedBy: l,
    className: c,
    data: o,
    defaultValue: h,
    disabled: d,
    name: p,
    labelPlacement: m,
    layout: f,
    style: v,
    value: N,
    valid: P,
    item: V = Ln.item,
    onChange: R,
    onFocus: S
  } = e, I = index_js_.useRef(null), O = index_js_.useCallback(
    () => {
      I.current && (0,kendo_react_common_index_mjs_.focusFirstFocusableChild)(I.current);
    },
    []
  ), B = index_js_.useCallback(
    () => ({
      element: I.current,
      focus: O
    }),
    [O]
  );
  index_js_.useImperativeHandle(t, B);
  const [w, F] = index_js_.useState(h), A = N !== void 0, T = A ? N : w, x = index_js_.useCallback(
    (k) => {
      let u = k.value;
      !A && !d && F(u), R && !d && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        R,
        k.syntheticEvent,
        B(),
        { value: u }
      );
    },
    [F, R, d]
  ), L = index_js_.useCallback(
    (k) => {
      S && !d && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        S,
        k.syntheticEvent,
        B(),
        void 0
      );
    },
    [S, d]
  ), $ = (0,kendo_react_common_index_mjs_.useId)(), U = (0,kendo_react_common_index_mjs_.classNames)(
    "k-radio-list",
    {
      "k-list-horizontal": f === "horizontal",
      "k-list-vertical": f === "vertical" || f === void 0
    },
    c
  ), Q = (0,kendo_react_common_index_mjs_.useRtl)(I, e.dir), g = o && o.map((k, u) => {
    const y = T === k.value, E = T == null, D = {
      ...k,
      valid: P,
      checked: y,
      disabled: !!(k.disabled || d),
      labelPlacement: k.labelPlacement ? k.labelPlacement : m,
      tabIndex: k.tabIndex ? k.tabIndex : E && u === 0 || y ? 0 : -1,
      index: u,
      name: p || $,
      onChange: x,
      onFocus: L
    };
    return /* @__PURE__ */ index_js_.createElement(
      V,
      {
        className: (0,kendo_react_common_index_mjs_.classNames)("k-radio-item", { "k-disabled": D.disabled || d }),
        key: u,
        role: "none"
      },
      /* @__PURE__ */ index_js_.createElement(xt, { ...D })
    );
  });
  return /* @__PURE__ */ index_js_.createElement(
    "ul",
    {
      id: s,
      role: "radiogroup",
      className: U,
      ref: I,
      dir: Q,
      style: v,
      "aria-labelledby": i,
      "aria-describedby": l
    },
    g
  );
}), Ln = {
  item: (a) => /* @__PURE__ */ index_js_.createElement("li", { ...a })
};
xa.propTypes = {
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
xa.defaultProps = Ln;
xa.displayName = "KendoRadioGroup";
const tr = (0,kendo_react_common_index_mjs_.createPropsContext)(), Ea = index_js_.forwardRef((a, t) => {
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(tr, a), {
    size: s,
    rounded: i,
    fillMode: l,
    prefix: c = void 0,
    suffix: o = void 0,
    ariaDescribedBy: h,
    ariaLabelledBy: d,
    autoSize: p,
    className: m,
    defaultValue: f,
    disabled: v,
    readOnly: N,
    required: P,
    rows: V,
    id: R,
    name: S,
    placeholder: I,
    style: O,
    tabIndex: B,
    value: w,
    valid: F,
    validationMessage: A,
    validityStyles: T,
    onChange: x,
    onFocus: L,
    onBlur: $,
    // Removed to support direct use in Form Field component
    visited: U,
    touched: Q,
    modified: g,
    ...k
  } = e, u = index_js_.useRef(null), y = index_js_.useCallback(
    () => {
      u.current && u.current.focus();
    },
    []
  ), [E, D] = index_js_.useState(f), [ee, Z] = (0,kendo_react_common_index_mjs_.useCustomComponent)(c), [M, b] = (0,kendo_react_common_index_mjs_.useCustomComponent)(o), q = w !== void 0, K = q ? w : E, W = index_js_.useCallback(
    () => ({
      element: u,
      focus: y,
      get value() {
        return K;
      },
      get name() {
        return u.current && u.current.name;
      }
    }),
    [y, K]
  );
  index_js_.useImperativeHandle(t, W);
  const [ie, Ee] = index_js_.useState("auto"), le = (0,kendo_react_common_index_mjs_.useId)(), we = (0,kendo_react_common_index_mjs_.useDir)(u, e.dir), be = F !== void 0 ? F : P ? !!K : !0;
  index_js_.useEffect(
    () => {
      u.current && u.current.setCustomValidity && u.current.setCustomValidity(
        be ? "" : A || ""
      );
    },
    [be, A]
  ), (0,kendo_react_common_index_mjs_.useIsomorphicLayoutEffect)(
    () => {
      u.current && Ee(`${u.current.scrollHeight}px`);
    },
    [K]
  );
  const Ne = index_js_.useCallback(
    (ke) => {
      const Se = ke.target.value;
      Ee("auto"), !q && !v && D(Se), x && !v && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        x,
        ke,
        {
          ...W(),
          value: Se
        },
        { value: Se }
      );
    },
    [D, x, v, q]
  ), z = index_js_.useCallback(
    (ke) => {
      L && !v && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        L,
        ke,
        W(),
        void 0
      );
    },
    [L, v]
  ), ve = index_js_.useCallback(
    (ke) => {
      $ && !v && (0,kendo_react_common_index_mjs_.dispatchEvent)(
        $,
        ke,
        W(),
        void 0
      );
    },
    [$, v]
  ), oe = {
    id: R || le,
    role: "textbox",
    name: S,
    className: "k-input-inner !k-overflow-auto",
    ref: u,
    disabled: v,
    rows: V,
    placeholder: I,
    readOnly: N,
    required: P,
    tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(B, v),
    style: p ? { resize: "none", overflow: "hidden", height: ie } : {},
    "aria-labelledby": d,
    "aria-describedby": h,
    "aria-multiline": !0,
    "aria-disabled": v || void 0,
    value: q ? w : E,
    ...k,
    onChange: Ne,
    onFocus: z,
    onBlur: ve
  };
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-input",
        "k-textarea",
        {
          [`k-input-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[s] || s}`]: s,
          [`k-input-${l}`]: l,
          [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[i] || i}`]: i,
          "k-invalid": !(be || T !== void 0 || T === !0),
          "k-required": P,
          "k-disabled": v
        },
        m
      ),
      style: O,
      dir: we
    },
    e.prefix && /* @__PURE__ */ index_js_.createElement(ee, { ...Z }),
    /* @__PURE__ */ index_js_.createElement("textarea", { ...oe }),
    e.suffix && /* @__PURE__ */ index_js_.createElement(M, { ...b })
  );
});
Ea.propTypes = {
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
};
const ar = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
Ea.displayName = "KendoTextArea";
Ea.defaultProps = ar;
const Et = index_js_.forwardRef((a, t) => {
  const e = index_js_.useRef(null), s = index_js_.useRef(null), i = (0,kendo_react_common_index_mjs_.useDir)(s, a.dir);
  index_js_.useImperativeHandle(e, () => ({
    element: s.current,
    props: a,
    value: a.value
  })), index_js_.useImperativeHandle(t, () => e.current);
  const l = index_js_.useCallback(
    (f) => {
      a.onClick && a.onClick.call(
        void 0,
        {
          value: a.value,
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onClick, a.value]
  ), c = index_js_.useCallback(
    (f) => {
      a.onKeyDown && a.onKeyDown.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onKeyDown]
  ), o = index_js_.useCallback(
    (f) => {
      a.onFocus && a.onFocus.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onFocus]
  ), h = index_js_.useCallback(
    (f) => {
      a.onBlur && a.onBlur.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onBlur]
  ), d = index_js_.useCallback(
    (f) => {
      a.onMouseMove && a.onMouseMove.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onMouseMove]
  ), p = index_js_.useCallback(
    (f) => {
      a.onMouseEnter && a.onMouseEnter.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onMouseEnter]
  ), m = index_js_.useCallback(
    (f) => {
      a.onMouseLeave && a.onMouseLeave.call(
        void 0,
        {
          target: e.current,
          syntheticEvent: f
        }
      );
    },
    [a.onMouseLeave]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      id: a.id,
      ref: s,
      dir: i,
      "data-half": a.half,
      tabIndex: a.tabIndex,
      title: a.title,
      style: a.style,
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-rating-item",
        {
          "k-rtl": i === "rtl",
          "k-selected": a.selected,
          "k-hover": a.hovered
        },
        a.className
      ),
      onClick: l,
      onKeyDown: c,
      onFocus: o,
      onBlur: h,
      onMouseEnter: p,
      onMouseLeave: m,
      onMouseMove: d
    },
    a.children
  );
}), nr = {
  id: prop_types_index_js_.string,
  icon: prop_types_index_js_.any,
  dir: prop_types_index_js_.oneOf(["ltr", "rtl"]),
  title: prop_types_index_js_.string,
  value: prop_types_index_js_.number,
  half: prop_types_index_js_.bool,
  selected: prop_types_index_js_.bool,
  hovered: prop_types_index_js_.bool
}, sr = {
  dir: "ltr"
};
Et.displayName = "KendoReactRatingItem";
Et.propTypes = nr;
Et.defaultProps = sr;
const Ce = (a, t) => {
  if (a % 1) {
    const e = Math.pow(10, (t.toString().split(".")[1] || t.toString().split(".")[0]).length);
    return Math.round(a * e) / e;
  }
  return a;
}, rr = (a, t) => a - t * Math.floor(a / t), da = (a, t, e) => Ce(a - e, e) < t && t < a, Tt = (a, t, e, s) => t === null ? !1 : s === "continues" ? da(a, t, e) ? Ce(a - e / 2, e / 2) <= t : a <= t : s === "single" ? da(a, t, e) ? Ce(a - e / 2, e / 2) === t : a === t : !1, Za = (a, t, e) => a === "ltr" ? e < t.x + t.width / 2 : e > t.x + t.width / 2, Ja = (a, t, e, s) => {
  for (let i = a; i <= t; i += e)
    if (s === i)
      return !0;
  return !1;
};
var de = /* @__PURE__ */ ((a) => (a.select = "select", a.deselect = "deselect", a.increase = "increase", a.decrease = "decrease", a.min = "min", a.max = "max", a.reset = "reset", a))(de || {});
const ir = (a, t) => {
  switch (t.type) {
    case "select":
      return t.payload === void 0 || t.step === void 0 ? a : t.payload === a ? null : t.payload >= t.min ? t.payload < t.max ? Ce(t.payload, t.step) : t.max : t.min;
    case "deselect":
      return null;
    case "increase":
      return t.step === void 0 ? a : a < t.min ? t.min : a + t.step < t.max ? Ce(a + t.step, t.step) : t.max;
    case "decrease":
      return t.step === void 0 ? a : Ce(a - t.step, t.step) >= t.min ? Ce(a - t.step, t.step) : t.min;
    case "min":
      return t.step === void 0 ? a : t.min;
    case "max":
      return t.max;
    case "reset":
      return null;
    default:
      return a;
  }
}, Qa = (a, t, e) => {
  const [s, i] = index_js_.useState(a);
  return [s, (c) => {
    const o = ir(t.state || s, { ...c, ...t });
    e && e(o, c.event), i(o);
  }];
}, lr = (0,kendo_react_common_index_mjs_.createPropsContext)(), Sa = index_js_.forwardRef((a, t) => {
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(lr, a), s = (0,index_mjs_.useLocalization)(), i = index_js_.useRef(null), l = index_js_.useRef(null), c = (0,kendo_react_common_index_mjs_.useDir)(l, e.dir);
  index_js_.useImperativeHandle(i, () => ({
    element: l.current,
    props: e
  })), index_js_.useImperativeHandle(t, () => i.current);
  const o = index_js_.useCallback(
    (g, k) => {
      e.onChange && i.current && e.onChange.call(void 0, {
        value: g,
        target: i.current,
        syntheticEvent: k
      });
    },
    [e.onChange]
  ), h = index_js_.useMemo(
    () => e.min !== void 0 ? e.min : Re.min,
    [e.min]
  ), d = index_js_.useMemo(
    () => e.max !== void 0 ? e.max : Re.max,
    [e.max]
  ), p = index_js_.useMemo(
    () => e.precision || Re.precision,
    [e.precision]
  ), m = index_js_.useMemo(
    () => e.step !== void 0 ? e.step : Re.step,
    [e.step]
  ), f = index_js_.useMemo(
    () => e.readonly || Re.readonly,
    [e.readonly]
  ), v = index_js_.useMemo(
    () => e.disabled || Re.disabled,
    [e.disabled]
  ), N = index_js_.useMemo(
    () => e.item || Re.item,
    [e.item]
  ), [P, V] = Qa(
    e.defaultValue !== void 0 ? e.defaultValue : Re.defaultValue,
    {
      state: e.value,
      min: h,
      max: d,
      step: p === "half" ? m / 2 : m
    },
    o
  ), [R, S] = Qa(
    null,
    {
      state: e.value,
      min: h,
      max: d,
      step: p === "half" ? m / 2 : m,
      precision: p
    }
  ), I = index_js_.useMemo(
    () => e.value !== void 0 ? e.value : P,
    [e.value, P]
  ), O = index_js_.useMemo(
    () => R,
    [R]
  ), B = index_js_.useMemo(
    () => e.selection || Re.selection,
    [e.selection]
  ), w = index_js_.useMemo(
    () => m / (p === "half" ? 2 : 1),
    [m, p]
  ), F = index_js_.useCallback(
    (g) => {
      if (!(!g.target || !g.target.element || f || v)) {
        if (p === "half") {
          const k = g.target.element.getBoundingClientRect(), y = Za(c || "ltr", k, g.syntheticEvent.clientX) ? Ce(g.target.value - m / 2, w) : g.target.value;
          V({ type: de.select, payload: y, event: g.syntheticEvent });
        } else
          V({ type: de.select, payload: g.target.value, event: g.syntheticEvent });
        if (e.onClick) {
          const k = {
            value: I,
            target: i.current,
            syntheticEvent: g.syntheticEvent
          };
          e.onClick.call(void 0, k);
        }
      }
    },
    [e.onClick, V, I]
  ), A = index_js_.useCallback(
    (g) => {
      if (!(f || v)) {
        switch (g.keyCode) {
          case kendo_react_common_index_mjs_.Keys.right:
            g.preventDefault(), V({
              type: c === "rtl" ? de.decrease : de.increase,
              event: g
            });
            break;
          case kendo_react_common_index_mjs_.Keys.left:
            g.preventDefault(), V({
              type: c === "rtl" ? de.increase : de.decrease,
              event: g
            });
            break;
          case kendo_react_common_index_mjs_.Keys.home:
            g.preventDefault(), V({
              type: c === "rtl" ? de.min : de.max,
              event: g
            });
            break;
          case kendo_react_common_index_mjs_.Keys.end:
            g.preventDefault(), V({
              type: c === "rtl" ? de.max : de.min,
              event: g
            });
            break;
          case kendo_react_common_index_mjs_.Keys.esc:
            g.preventDefault(), V({
              type: de.deselect,
              event: g
            });
            break;
        }
        e.onKeyDown && e.onKeyDown.call(
          void 0,
          {
            value: I,
            target: i.current,
            syntheticEvent: g
          }
        );
      }
    },
    [e.onKeyDown, V, I]
  ), T = index_js_.useCallback(
    (g) => {
      if (e.onFocus) {
        const k = {
          target: i.current,
          syntheticEvent: g
        };
        e.onFocus.call(
          void 0,
          k
        );
      }
    },
    [e.onFocus]
  ), x = index_js_.useCallback(
    (g) => {
      if (e.onBlur) {
        const k = {
          target: i.current,
          syntheticEvent: g
        };
        e.onBlur.call(
          void 0,
          k
        );
      }
    },
    [e.onBlur]
  ), L = index_js_.useCallback(
    (g) => {
      if (!(!g.target || !g.target.element))
        if (p === "half") {
          const k = g.target.element.getBoundingClientRect(), y = Za(c || "ltr", k, g.syntheticEvent.clientX) ? g.target.value - m / 2 : g.target.value;
          S({ type: de.select, payload: y, event: g.syntheticEvent });
        } else
          S({ type: de.select, payload: g.target.value, event: g.syntheticEvent });
    },
    [p, m, c]
  ), $ = index_js_.useCallback(
    (g) => {
      S({ type: de.reset, event: g.syntheticEvent });
    },
    []
  ), U = [], Q = rr(Ce(d - h, w), m);
  for (let g = h; g <= d; g = Ce(g + m, w)) {
    const k = Ce(g + Q, w), u = p === "half" ? da(k, O !== null ? O : I !== null ? I : 0, m) : !1, y = Tt(k, I, m, B), E = Tt(k, O !== null ? O : I, m, B), D = Tt(k, O, m, B);
    U.push(
      /* @__PURE__ */ index_js_.createElement(
        N,
        {
          key: k,
          value: k,
          dir: c,
          title: String(u ? Ce(k - m / 2, w) : k),
          icon: e.icon,
          svgIcon: e.svgIcon,
          half: u,
          selected: y || E,
          hovered: D,
          onClick: F,
          onMouseMove: L,
          onMouseLeave: $
        },
        u && /* @__PURE__ */ index_js_.createElement("span", { className: "k-rating-precision-complement" }, !(e.icon || e.svgIconOutline) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "star-outline", icon: index_es_js_.starOutlineIcon, style: { clipPath: `${c === "rtl" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)"}` }, size: "xlarge" }), (e.icon || e.svgIconOutline) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: (0,kendo_react_common_index_mjs_.toIconName)(`${e.icon}-outline`), icon: e.svgIconOutline, size: "xlarge" })),
        u && /* @__PURE__ */ index_js_.createElement("span", { className: "k-rating-precision-part" }, !(e.icon || e.svgIcon) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "star", icon: index_es_js_.starIcon, style: { clipPath: `${c === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"}` }, size: "xlarge" }), (e.icon || e.svgIcon) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: e.icon ? (0,kendo_react_common_index_mjs_.toIconName)(e.icon) : void 0, icon: e.svgIcon, size: "xlarge" })),
        u && /* @__PURE__ */ index_js_.createElement("span", { style: { width: "24px", height: "24px", display: "block" } }),
        !u && !(e.icon || e.svgIcon) && (D || E && !D) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "star", icon: index_es_js_.starIcon, size: "xlarge" }) || !(e.icon || e.svgIcon) && !D && !E && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: "star-outline", icon: index_es_js_.starOutlineIcon, size: "xlarge" }) || (e.icon || e.svgIcon) && (D || E && !D) && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: e.icon, icon: e.svgIcon, size: "xlarge" }) || (e.icon || e.svgIcon) && !D && /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { name: (0,kendo_react_common_index_mjs_.toIconName)(`${e.icon}-outline`), icon: e.svgIconOutline, size: "xlarge" })
      )
    );
  }
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      id: e.id,
      style: e.style,
      ref: l,
      role: "slider",
      dir: c,
      tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(e.tabIndex, e.disabled, void 0),
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-rating",
        {
          "k-rtl": c === "rtl",
          "k-readonly": f,
          "k-disabled": v
        },
        e.className
      ),
      onKeyDown: A,
      onFocus: T,
      onBlur: x,
      "aria-valuemin": h,
      "aria-valuemax": d,
      "aria-valuenow": I !== null ? I : void 0,
      "aria-disabled": v ? "true" : void 0,
      "aria-label": s.toLanguageString(aa, H[aa]),
      "aria-labelledby": e.ariaLabelledBy,
      "aria-describedby": e.ariaDescribedBy
    },
    /* @__PURE__ */ index_js_.createElement(
      "input",
      {
        id: "rating",
        className: "k-hidden",
        readOnly: f,
        disabled: v
      }
    ),
    /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        className: "k-rating-container"
      },
      U
    ),
    e.label && /* @__PURE__ */ index_js_.createElement(
      "span",
      {
        className: "k-rating-label"
      },
      e.label
    )
  );
}), or = {
  id: prop_types_index_js_.string,
  dir: prop_types_index_js_.oneOf(["ltr", "rtl"]),
  selection: prop_types_index_js_.oneOf(["continues", "single"]),
  precision: prop_types_index_js_.oneOf(["item", "half"]),
  value: (a, t, e) => a.value && a.min && a.max && a.step && !(a.precision === "half" ? Ja(a.min, a.max, a.step / 2, a.value) : Ja(a.min, a.max, a.step, a.value)) && a.precision === "half" ? new Error(
    `Invalid prop + ${t} supplied to ${e}.
                    The value of the { value } property is not correct, please check your values.
                    `
  ) : null,
  defaultValue: prop_types_index_js_.number,
  min: prop_types_index_js_.number,
  max: prop_types_index_js_.number,
  step: (a, t, e) => a.step !== void 0 && a.step <= 0 ? new Error(
    `Invalid prop + ${t} supplied to ${e}.
                The value of the { step } property is cannot be equal or less than "0", please check your values.
                `
  ) : null,
  hovered: prop_types_index_js_.number,
  label: prop_types_index_js_.string,
  readonly: prop_types_index_js_.bool,
  disabled: prop_types_index_js_.bool,
  half: prop_types_index_js_.bool,
  icon: prop_types_index_js_.string,
  svgIcon: kendo_react_common_index_mjs_.svgIconPropType,
  svgIconOutline: kendo_react_common_index_mjs_.svgIconPropType,
  ariaDescribedBy: prop_types_index_js_.string
}, Re = {
  dir: "ltr",
  min: 1,
  max: 5,
  step: 1,
  item: Et,
  defaultValue: null,
  readonly: !1,
  disabled: !1,
  selection: "continues",
  precision: "item"
};
Sa.displayName = "KendoReactRating";
Sa.propTypes = or;
Sa.defaultProps = Re;
function cr(a, t) {
  let e = a;
  for (; e && e !== t; )
    e = e.parentNode;
  return !!e;
}
const dr = 250, ur = 84, Rn = 3, Vn = 2, fr = "#000000", hr = "#ffffff", en = (a) => a !== void 0, pr = (0,kendo_react_common_index_mjs_.createPropsContext)(), St = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = (0,kendo_react_common_index_mjs_.usePropsContext)(pr, a), s = (0,index_mjs_.useLocalization)(), i = index_js_.useRef(null), l = index_js_.useRef(null), c = index_js_.useRef(null), o = index_js_.useRef(null), h = index_js_.useRef(null), [d, p] = index_js_.useState(), [m, f] = index_js_.useState(!1), [v, N] = index_js_.useState(!1), [P, V] = index_js_.useState(), [R, S] = index_js_.useState(), O = en(e.value) ? e.value : P, [B, w] = index_js_.useState(!1), F = en(e.open), A = F ? e.open : B, T = !(e.maximized || v || !e.maximizable || e.disabled), x = e.maximized && !v, $ = !(!(e.value || P) || v || e.readOnly || e.disabled), U = s.toLanguageString(sa, H[sa]), Q = s.toLanguageString(ra, H[ra]), g = s.toLanguageString(na, H[na]), k = e.popupScale || Rn, u = e.exportScale || Vn, y = (C) => {
    V(C), e.onChange && e.onChange({ value: C });
  }, E = (C) => {
    d == null || d.loadImage(C.value), y(C.value);
  };
  index_js_.useEffect(() => {
    e.value !== P && (V(e.value), d == null || d.loadImage(e.value));
  }, [e.value]);
  const D = () => {
    d == null || d.clear(), y();
  }, ee = index_js_.useCallback(
    (C) => {
      F || w(C);
    },
    [F]
  ), Z = (C) => {
    var j, ce;
    Se(C), (ce = ((j = h.current) == null ? void 0 : j.element) || l.current) == null || ce.focus();
  }, M = index_js_.useCallback(() => {
    let C = fr;
    return !e.color && typeof document != "undefined" && i.current && (C = getComputedStyle(i.current).color), e.color || C;
  }, [e.color]), b = index_js_.useCallback(() => {
    let C = hr;
    return !e.backgroundColor && typeof document != "undefined" && i.current && (C = getComputedStyle(i.current).backgroundColor), e.backgroundColor || C;
  }, [e.backgroundColor]), q = () => ({
    scale: e.maximized ? e.popupScale : 1,
    color: M(),
    backgroundColor: b(),
    strokeWidth: e.strokeWidth,
    smooth: e.smooth,
    readonly: e.readOnly
  }), K = async (C) => {
    const { width: j, height: ce } = C;
    return await (d == null ? void 0 : d.exportImage({
      width: j * u,
      height: ce * u
    }));
  };
  index_js_.useEffect(() => {
    const C = l.current, j = new SignaturePad(C, q());
    return O && j.loadImage(O), p(j), () => j.destroy();
  }, []), index_js_.useEffect(() => {
    d == null || d.setOptions({
      onChange: async () => y(await K(tt())),
      onDraw: () => N(!0),
      onDrawEnd: () => N(!1)
    });
  }, [d]), (0,kendo_react_common_index_mjs_.useIsomorphicLayoutEffect)(
    () => d == null ? void 0 : d.setOptions(q()),
    [e.readOnly, e.color, e.backgroundColor, e.strokeWidth, e.smooth]
  ), index_js_.useEffect(() => {
    var ce, Ie;
    const C = (Ie = (ce = c.current) == null ? void 0 : ce.element) == null ? void 0 : Ie.querySelector(".k-overlay");
    if (!C)
      return;
    const j = () => ee(!1);
    return C.addEventListener("click", j), () => C.removeEventListener("click", j);
  }, [A]), index_js_.useEffect(() => {
    if (!A || typeof document == "undefined")
      return;
    const C = (j) => {
      j.keyCode === kendo_react_common_index_mjs_.Keys.esc && ee(!1);
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [A]), index_js_.useEffect(() => {
    var C, j;
    e.maximized && ((j = (C = o.current) == null ? void 0 : C.element) == null || j.focus());
  }, []);
  const W = index_js_.useCallback(
    () => {
      var C;
      return (C = l.current) == null ? void 0 : C.focus();
    },
    []
  ), ie = index_js_.useCallback(
    () => e.value,
    [e.value]
  ), Ee = index_js_.useCallback(
    () => e.name,
    [e.name]
  ), le = index_js_.useCallback(
    () => e.required,
    [e.required]
  ), we = index_js_.useCallback(
    () => {
      const C = e.validationMessage !== void 0, ce = !ie(), Ie = e.valid !== void 0 ? e.valid : !le() || !ce;
      return {
        customError: C,
        valid: Ie,
        valueMissing: ce
      };
    },
    [e.validationMessage, e.valid, ie, le]
  ), be = index_js_.useCallback(
    () => e.validityStyles,
    [e.validityStyles]
  ), Ne = index_js_.useCallback(
    () => e,
    [e]
  ), z = index_js_.useCallback(
    () => {
      const C = {
        element: i.current,
        focus: W
      };
      return Object.defineProperty(C, "name", { get: Ee }), Object.defineProperty(C, "value", { get: ie }), Object.defineProperty(C, "validity", { get: we }), Object.defineProperty(C, "validityStyles", { get: be }), Object.defineProperty(C, "required", { get: le }), Object.defineProperty(C, "props", { get: Ne }), Object.defineProperty(C, "color", { get: M }), Object.defineProperty(C, "backgroundColor", { get: b }), C;
    },
    [Ee, ie, we, be, le, W, Ne, M, b]
  );
  index_js_.useImperativeHandle(t, z);
  const ve = index_js_.useCallback(
    (C) => {
      m || e.maximized || (f(!0), (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onFocus,
        C,
        z(),
        {}
      ));
    },
    [m, e.onFocus, z]
  ), oe = index_js_.useCallback(
    (C) => {
      cr(C.relatedTarget, i.current) || (f(!1), (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onBlur,
        C,
        z(),
        {}
      ));
    },
    [m, e.onBlur, z]
  ), ke = index_js_.useCallback(
    async (C) => {
      S(await K(at())), ee(!0), (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onOpen,
        C,
        z(),
        {}
      );
    },
    [A, F, e.onOpen, e.value, P, z]
  ), Se = index_js_.useCallback(
    (C) => {
      ee(!1), (0,kendo_react_common_index_mjs_.dispatchEvent)(
        e.onClose,
        C,
        z(),
        {}
      );
    },
    [A, F, e.onClose, z]
  ), wt = () => {
    D(), W();
  }, tt = () => {
    var ce, Ie;
    const C = e.width || ((ce = i.current) == null ? void 0 : ce.offsetWidth) || dr, j = e.height || ((Ie = i.current) == null ? void 0 : Ie.offsetHeight) || ur;
    return {
      width: C,
      height: j
    };
  }, at = () => {
    const { width: C, height: j } = tt();
    return {
      width: C * k,
      height: j * k
    };
  }, It = !be() || we().valid;
  return /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      ref: i,
      dir: e.dir,
      style: { width: e.width, height: e.height, ...e.style },
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-input",
        "k-signature",
        {
          "k-signature-maximized": e.maximized,
          [`k-signature-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[e.size] || e.size}`]: e.size,
          [`k-input-${e.fillMode}`]: e.fillMode,
          [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[e.rounded] || e.rounded}`]: e.rounded,
          "k-invalid": !It,
          "k-required": e.required,
          "k-disabled": e.disabled,
          "k-focus": m
        },
        e.className
      ),
      onFocus: ve,
      onBlur: oe
    },
    /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-signature-canvas",
        ref: l,
        tabIndex: (0,kendo_react_common_index_mjs_.getTabIndex)(e.tabIndex, e.disabled),
        role: "img",
        id: e.id,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        "aria-describedby": e.ariaDescribedBy,
        "aria-disabled": e.disabled ? "true" : void 0
      }
    ),
    /* @__PURE__ */ index_js_.createElement("div", { className: "k-signature-actions k-signature-actions-top" }, T && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        className: "k-signature-action k-signature-maximize",
        ref: h,
        icon: "hyperlink-open",
        svgIcon: index_es_js_.hyperlinkOpenIcon,
        fillMode: "flat",
        size: e.size,
        onClick: ke,
        "aria-label": U,
        title: U
      }
    ), x && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        className: "k-signature-action k-signature-minimize k-rotate-180",
        ref: o,
        icon: "hyperlink-open",
        svgIcon: index_es_js_.hyperlinkOpenIcon,
        fillMode: "flat",
        size: e.size,
        onClick: Se,
        "aria-label": Q,
        title: Q
      }
    )),
    !e.hideLine && /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        className: "k-signature-line",
        style: { zIndex: 2, pointerEvents: "none" }
      }
    ),
    /* @__PURE__ */ index_js_.createElement("div", { className: "k-signature-actions k-signature-actions-bottom" }, $ && /* @__PURE__ */ index_js_.createElement(
      kendo_react_buttons_index_mjs_.Button,
      {
        type: "button",
        className: "k-signature-action k-signature-clear",
        icon: "x",
        svgIcon: index_es_js_.xIcon,
        fillMode: "flat",
        size: e.size,
        onClick: wt,
        "aria-label": g,
        title: g
      }
    )),
    A && /* @__PURE__ */ index_js_.createElement(kendo_react_dialogs_index_mjs_.Dialog, { ref: c }, /* @__PURE__ */ index_js_.createElement(
      St,
      {
        ...e,
        ...at(),
        value: R,
        maximized: !0,
        exportScale: 1 / k * u,
        open: !1,
        onChange: E,
        onClose: Z
      }
    ))
  );
});
St.propTypes = {
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
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
};
St.displayName = "KendoSignature";
St.defaultProps = {
  strokeWidth: 1,
  smooth: !1,
  popupScale: Rn,
  exportScale: Vn,
  maximizable: !0,
  disabled: !1,
  required: !1,
  validityStyles: !0,
  onChange: (a) => kendo_react_common_index_mjs_.noop,
  onFocus: (a) => kendo_react_common_index_mjs_.noop,
  onBlur: (a) => kendo_react_common_index_mjs_.noop,
  onOpen: (a) => kendo_react_common_index_mjs_.noop,
  onClose: (a) => kendo_react_common_index_mjs_.noop,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
const wa = index_js_.forwardRef((a, t) => {
  (0,kendo_react_common_index_mjs_.validatePackage)(me);
  const e = index_js_.useRef(null), s = index_js_.useRef(null), i = index_js_.useRef(), l = index_js_.useCallback(
    () => {
      var $;
      return i.current !== void 0 ? i.current : ($ = e.current) == null ? void 0 : $.value;
    },
    []
  );
  index_js_.useImperativeHandle(
    s,
    () => ({
      get element() {
        return e.current;
      },
      get name() {
        return e.current && e.current.name;
      },
      get value() {
        return l();
      }
    })
  ), index_js_.useImperativeHandle(
    t,
    () => s.current
  );
  const {
    size: c,
    fillMode: o,
    rounded: h,
    className: d,
    dir: p,
    style: m,
    prefix: f = ua.prefix,
    suffix: v = ua.suffix,
    valid: N,
    // Destruct to avoid warning when used inside a form field
    modified: P,
    touched: V,
    visited: R,
    ...S
  } = a, [I] = (0,kendo_react_common_index_mjs_.useCustomComponent)(f), [O] = (0,kendo_react_common_index_mjs_.useCustomComponent)(v), [B, w] = index_js_.useState(!1), F = ($) => {
    w(!0);
  }, A = ($) => {
    w(!1);
  }, T = index_js_.useCallback(
    ($) => {
      i.current = $.target.value, a.onChange && a.onChange.call(void 0, {
        syntheticEvent: $,
        nativeEvent: $.nativeEvent,
        value: $.target.value,
        target: s.current
      }), i.current = void 0;
    },
    [a.onChange]
  ), { onFocus: x, onBlur: L } = (0,kendo_react_common_index_mjs_.useAsyncFocusBlur)({
    onFocus: F,
    onBlur: A,
    onSyncFocus: a.onFocus,
    onSyncBlur: a.onBlur
  });
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      style: m,
      dir: p,
      className: (0,kendo_react_common_index_mjs_.classNames)(
        "k-textbox k-input",
        {
          [`k-input-${kendo_react_common_index_mjs_.kendoThemeMaps.sizeMap[c] || c}`]: c,
          [`k-input-${o}`]: o,
          [`k-rounded-${kendo_react_common_index_mjs_.kendoThemeMaps.roundedMap[h] || h}`]: h
        },
        {
          "k-focus": B,
          "k-required": a.required,
          "k-disabled": a.disabled,
          "k-invalid": a.valid === !1
        },
        d
      ),
      onFocus: x,
      onBlur: L
    },
    /* @__PURE__ */ index_js_.createElement(I, null),
    /* @__PURE__ */ index_js_.createElement(
      "input",
      {
        ref: e,
        className: "k-input-inner",
        ...S,
        onChange: T
      }
    ),
    /* @__PURE__ */ index_js_.createElement(O, null)
  );
}), ua = {
  prefix: (a) => null,
  suffix: (a) => null,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
wa.propTypes = {
  size: prop_types_index_js_.oneOf([null, "small", "medium", "large"]),
  rounded: prop_types_index_js_.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: prop_types_index_js_.oneOf([null, "solid", "flat", "outline"])
};
wa.displayName = "KendoReactTextBoxComponent";
wa.defaultProps = ua;
const mr = index_js_.forwardRef((a, t) => {
  const e = index_js_.useRef(null), s = index_js_.useRef(null);
  return index_js_.useImperativeHandle(
    e,
    () => ({ element: s.current })
  ), index_js_.useImperativeHandle(
    t,
    () => e.current
  ), /* @__PURE__ */ index_js_.createElement("span", { ...a, className: (0,kendo_react_common_index_mjs_.classNames)("k-clear-value", a.className) });
});
mr.displayName = "KendoReactInputClearValue";
const gr = index_js_.forwardRef(({ orientation: a = "horizontal", ...t }, e) => {
  const s = index_js_.useRef(null), i = index_js_.useRef(null);
  return index_js_.useImperativeHandle(
    s,
    () => ({ element: i.current })
  ), index_js_.useImperativeHandle(
    e,
    () => s.current
  ), /* @__PURE__ */ index_js_.createElement("span", { ...t, className: (0,kendo_react_common_index_mjs_.classNames)("k-input-prefix", t.className, `k-input-prefix-${a}`) });
});
gr.displayName = "KendoReactInputPrefix";
const br = index_js_.forwardRef(({ orientation: a = "vertical", ...t }, e) => {
  const s = index_js_.useRef(null), i = index_js_.useRef(null);
  return index_js_.useImperativeHandle(
    s,
    () => ({ element: i.current })
  ), index_js_.useImperativeHandle(
    e,
    () => s.current
  ), /* @__PURE__ */ index_js_.createElement("span", { ...t, className: (0,kendo_react_common_index_mjs_.classNames)("k-input-separator", t.className, `k-input-separator-${a}`) });
});
br.displayName = "KendoReactInputSeparator";
const vr = index_js_.forwardRef(({ orientation: a = "horizontal", ...t }, e) => {
  const s = index_js_.useRef(null), i = index_js_.useRef(null);
  return index_js_.useImperativeHandle(
    s,
    () => ({ element: i.current })
  ), index_js_.useImperativeHandle(
    e,
    () => s.current
  ), /* @__PURE__ */ index_js_.createElement("span", { ...t, className: (0,kendo_react_common_index_mjs_.classNames)("k-input-suffix", t.className, `k-input-suffix-${a}`) });
});
vr.displayName = "KendoReactInputSuffix";
const kr = index_js_.forwardRef((a, t) => /* @__PURE__ */ index_js_.createElement(kendo_react_common_index_mjs_.IconWrap, { ref: t, ...a, className: (0,kendo_react_common_index_mjs_.classNames)("k-input-validation-icon", a.className) }));
kr.displayName = "KendoReactInputValidationIcon";



/***/ }

}]);