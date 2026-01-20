"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3961,6342],{

/***/ 16342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ ProgressBar)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-animation@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kendo-s_bfdbf2fb0f4ae089ac0cb07b6b69ec9f/node_modules/@progress/kendo-react-animation/dist/es/hooks/useAnimation.js

/** @hidden */
var useAnimation = function (config, deps) {
    var offset = index_js_.useRef(0);
    var mount = index_js_.useRef(false);
    var animationFrame = index_js_.useRef();
    var animate = function (transition) {
        var duration = transition.duration;
        var start;
        var progress;
        var skip = offset.current && 1 - offset.current;
        if (transition.onStart) {
            transition.onStart();
        }
        var frame = function (timestamp) {
            if (!start) {
                start = timestamp;
            }
            progress = timestamp - start + 1;
            var rate = progress / duration + skip;
            if (rate <= 1) {
                if (transition.onUpdate) {
                    transition.onUpdate(rate);
                }
                animationFrame.current = window.requestAnimationFrame(frame);
                offset.current = rate;
            }
            else {
                if (transition.onEnd) {
                    transition.onEnd(1);
                }
                offset.current = 0;
            }
        };
        animationFrame.current = window.requestAnimationFrame(frame);
    };
    index_js_.useEffect(function () {
        animate(config);
        return function () {
            if (animationFrame.current) {
                window.cancelAnimationFrame(animationFrame.current);
            }
        };
    }, deps);
    index_js_.useEffect(function () {
        mount.current = true;
    }, []);
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_d88e16230e1f90237543f8b39b6abcad/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(41856);
;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/common/constants.js
/**
 * @hidden
 */
var constants_MIN_RATIO = 0.00001;
/**
 * @hidden
 */
var LABEL_DECIMALS = 3;
/**
 * @hidden
 */
var DEFAULT_ANIMATION_DURATION = 400;
/**
 * @hidden
 */
var NO_ANIMATION = 0;

;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/common/utils.js

/**
 * @hidden
 */
var truncateNumber = function (value) {
    var numberParts = value.toString().split('.');
    return numberParts.length === 1 ? "".concat(numberParts[0]) : "".concat(numberParts[0], ".").concat(numberParts[1].substr(0, LABEL_DECIMALS));
};
/**
 * @hidden
 */
var calculatePercentage = function (min, max, value) {
    var onePercent = Math.abs((max - min) / 100);
    return Math.abs((value - min) / onePercent);
};
/**
 * @hidden
 */
var updateProgress = function (progressRef, progressWrapRef, percentage, isVertical) {
    var progressPercentage = Math.max(percentage, 0.01);
    var progressWrapPercentage = (100 / progressPercentage) * 100;
    if (progressRef.current && progressWrapRef.current) {
        progressRef.current.style.width = !isVertical ? "".concat(progressPercentage, "%") : '100%';
        progressWrapRef.current.style.width = !isVertical ? "".concat(progressWrapPercentage, "%") : '100%';
        progressRef.current.style.height = isVertical ? "".concat(progressPercentage, "%") : '100%';
        progressWrapRef.current.style.height = isVertical ? "".concat(progressWrapPercentage, "%") : '100%';
    }
};
/**
 * @hidden
 */
var calculateRatio = function (min, max, value) {
    return Math.max((value - min) / (max - min), MIN_RATIO);
};

;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/hooks/usePrevious.js

/** @hidden */
var usePrevious = function (value) {
    var ref = index_js_.useRef();
    index_js_.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};

;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-progressbars',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1700063549,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js
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









/**
 * Represents the [KendoReact ProgressBar component]({% slug overview_progressbar %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <ProgressBar value={75}/>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var ProgressBar = index_js_.forwardRef(function (props, target) {
    (0,main_js_.validatePackage)(packageMetadata);
    var animation = props.animation, disabled = props.disabled, _a = props.reverse, reverse = _a === void 0 ? defaultProps.reverse : _a, orientation = props.orientation, labelVisible = props.labelVisible, labelPlacement = props.labelPlacement, _b = props.max, max = _b === void 0 ? defaultProps.max : _b, _c = props.min, min = _c === void 0 ? defaultProps.min : _c, tabIndex = props.tabIndex, className = props.className, style = props.style, emptyStyle = props.emptyStyle, emptyClassName = props.emptyClassName, progressStyle = props.progressStyle, progressClassName = props.progressClassName;
    var elementRef = index_js_.useRef(null);
    var progressStatusRef = index_js_.useRef(null);
    var progressStatusWrapRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current,
        progressStatusElement: progressStatusRef.current,
        progressStatusWrapElement: progressStatusWrapRef.current,
        focus: focusElement
    }); });
    var value = (props.value || defaultProps.value);
    var prevValue = usePrevious(value);
    var indeterminateProp = props.value === null;
    var dir = (0,main_js_.useRtl)(elementRef, props.dir);
    var isVertical = orientation === 'vertical';
    var formattedLabel = truncateNumber(value);
    var labelProps = {
        value: value
    };
    var renderLabel = (labelVisible
        ? props.label
            ? index_js_.createElement("span", { className: 'k-progress-status' },
                index_js_.createElement(props.label, __assign({}, labelProps)))
            : index_js_.createElement("span", { className: 'k-progress-status' }, formattedLabel)
        : undefined);
    var wrapperProps = {
        className: (0,main_js_.classNames)('k-progressbar', {
            'k-progressbar-horizontal': !isVertical,
            'k-progressbar-vertical': isVertical,
            'k-progressbar-reverse': reverse,
            'k-progressbar-indeterminate': indeterminateProp,
            'k-disabled': disabled
        }, className),
        ref: elementRef,
        dir: dir,
        tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled),
        role: 'progressbar',
        'aria-label': props.ariaLabel,
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': indeterminateProp ? undefined : value,
        'aria-disabled': disabled,
        style: style
    };
    var positionClasses = (0,main_js_.classNames)('k-progress-status-wrap', {
        'k-progress-start': labelPlacement === 'start',
        'k-progress-center': labelPlacement === 'center',
        'k-progress-end': labelPlacement === 'end' || labelPlacement === undefined
    });
    var animationDuration = typeof animation !== 'boolean' && animation !== undefined
        ? animation.duration
        : animation
            ? DEFAULT_ANIMATION_DURATION
            : NO_ANIMATION;
    var handleStart = index_js_.useCallback(function () {
        var percentage = calculatePercentage(min, max, prevValue);
        updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
    }, [isVertical, max, min, prevValue]);
    var handleUpdate = index_js_.useCallback(function (progress) {
        var percentage = calculatePercentage(min, max, prevValue + (value - prevValue) * progress);
        updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
    }, [min, max, prevValue, value, isVertical]);
    var handleEnd = index_js_.useCallback(function () {
        var percentage = calculatePercentage(min, max, value);
        updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
    }, [isVertical, max, min, value]);
    useAnimation({
        duration: animationDuration,
        onStart: handleStart,
        onUpdate: handleUpdate,
        onEnd: handleEnd
    }, [value, animationDuration]);
    return (index_js_.createElement("div", __assign({}, wrapperProps),
        index_js_.createElement("span", { className: positionClasses + (emptyClassName ? ' ' + emptyClassName : ''), style: emptyStyle }, renderLabel),
        index_js_.createElement("div", { className: 'k-progressbar-value k-selected', style: progressStyle, ref: progressStatusRef },
            index_js_.createElement("span", { className: positionClasses + (progressClassName ? ' ' + progressClassName : ''), ref: progressStatusWrapRef }, renderLabel))));
});
ProgressBar.propTypes = {
    animation: prop_types_index_js_.any,
    ariaLabel: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    reverse: prop_types_index_js_.bool,
    label: prop_types_index_js_.any,
    labelVisible: prop_types_index_js_.bool,
    labelPlacement: prop_types_index_js_.oneOf(['start', 'center', 'end']),
    max: prop_types_index_js_.number,
    min: prop_types_index_js_.number,
    value: prop_types_index_js_.number,
    tabIndex: prop_types_index_js_.number,
    emptyStyle: prop_types_index_js_.object,
    emptyClassName: prop_types_index_js_.string,
    progressStyle: prop_types_index_js_.object,
    progressClassName: prop_types_index_js_.string
};
var defaultProps = {
    animation: false,
    min: 0,
    max: 100,
    value: 0,
    disabled: false,
    reverse: false,
    labelVisible: true
};
ProgressBar.defaultProps = defaultProps;
ProgressBar.displayName = 'KendoProgressBar';


/***/ }

}]);