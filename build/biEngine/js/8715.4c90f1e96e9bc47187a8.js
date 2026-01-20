"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3961,6342,8715],{

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


/***/ },

/***/ 78715
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionSheet: () => (/* reexport */ ActionSheet),
  ActionSheetContent: () => (/* reexport */ ActionSheetContent),
  ActionSheetFooter: () => (/* reexport */ ActionSheetFooter),
  ActionSheetHeader: () => (/* reexport */ ActionSheetHeader),
  ActionSheetItem: () => (/* reexport */ ActionSheetItem),
  AppBar: () => (/* reexport */ AppBar),
  AppBarSection: () => (/* reexport */ AppBarSection),
  AppBarSpacer: () => (/* reexport */ AppBarSpacer),
  Avatar: () => (/* reexport */ Avatar),
  BottomNavigation: () => (/* reexport */ BottomNavigation),
  BottomNavigationItem: () => (/* reexport */ BottomNavigationItem),
  Breadcrumb: () => (/* reexport */ Breadcrumb),
  BreadcrumbDelimiter: () => (/* reexport */ BreadcrumbDelimiter),
  BreadcrumbLink: () => (/* reexport */ BreadcrumbLink),
  BreadcrumbListItem: () => (/* reexport */ BreadcrumbListItem),
  BreadcrumbOrderedList: () => (/* reexport */ BreadcrumbOrderedList),
  Card: () => (/* reexport */ Card),
  CardActions: () => (/* reexport */ CardActions),
  CardBody: () => (/* reexport */ CardBody),
  CardFooter: () => (/* reexport */ CardFooter),
  CardHeader: () => (/* reexport */ CardHeader),
  CardImage: () => (/* reexport */ CardImage),
  CardSubtitle: () => (/* reexport */ CardSubtitle),
  CardTitle: () => (/* reexport */ CardTitle),
  ContextMenu: () => (/* reexport */ ContextMenu),
  Drawer: () => (/* reexport */ Drawer),
  DrawerContent: () => (/* reexport */ DrawerContent),
  DrawerItem: () => (/* reexport */ DrawerItem),
  DrawerNavigation: () => (/* reexport */ DrawerNavigation),
  ExpansionPanel: () => (/* reexport */ ExpansionPanel),
  ExpansionPanelContent: () => (/* reexport */ ExpansionPanelContent),
  GridLayout: () => (/* reexport */ GridLayout),
  GridLayoutItem: () => (/* reexport */ GridLayoutItem),
  Menu: () => (/* reexport */ Menu),
  MenuItem: () => (/* reexport */ MenuItem),
  MenuItemArrow: () => (/* reexport */ MenuItemArrow),
  MenuItemInternalsList: () => (/* reexport */ MenuItemInternalsList),
  MenuItemLink: () => (/* reexport */ MenuItemLink),
  PanelBar: () => (/* reexport */ PanelBar),
  PanelBarItem: () => (/* reexport */ PanelBarItem),
  PanelBarUtils: () => (/* reexport */ PanelBarUtils),
  Splitter: () => (/* reexport */ Splitter),
  SplitterBar: () => (/* reexport */ SplitterBar),
  SplitterPane: () => (/* reexport */ SplitterPane),
  StackLayout: () => (/* reexport */ StackLayout),
  Step: () => (/* reexport */ Step),
  Stepper: () => (/* reexport */ Stepper),
  TabStrip: () => (/* reexport */ TabStrip),
  TabStripContent: () => (/* reexport */ TabStripContent),
  TabStripNavigation: () => (/* reexport */ TabStripNavigation),
  TabStripNavigationItem: () => (/* reexport */ TabStripNavigationItem),
  TabStripTab: () => (/* reexport */ TabStripTab),
  TileLayout: () => (/* reexport */ TileLayout),
  Timeline: () => (/* reexport */ Timeline),
  addYearsFlags: () => (/* reexport */ addYearsFlags),
  contentDisplayName: () => (/* reexport */ contentDisplayName),
  downArrowName: () => (/* reexport */ downArrowName),
  flatChildren: () => (/* reexport */ flatChildren),
  flatVisibleChildren: () => (/* reexport */ flatVisibleChildren),
  flatVisibleItems: () => (/* reexport */ flatVisibleItems),
  footerDisplayName: () => (/* reexport */ footerDisplayName),
  getFirstId: () => (/* reexport */ getFirstId),
  getInitialState: () => (/* reexport */ getInitialState),
  headerDisplayName: () => (/* reexport */ headerDisplayName),
  isArrayEqual: () => (/* reexport */ isArrayEqual),
  isPresent: () => (/* reexport */ isPresent),
  leftArrowName: () => (/* reexport */ leftArrowName),
  renderChildren: () => (/* reexport */ renderChildren),
  rightArrowName: () => (/* reexport */ rightArrowName),
  sortEventList: () => (/* reexport */ sortEventList)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_d88e16230e1f90237543f8b39b6abcad/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(41856);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-i_8c9e28bc2eed5a1299193a533ee31e7c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var es_main_js_ = __webpack_require__(60446);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/itemsIdsUtils.js
/**
 * @hidden
 */
var EMPTY_ID = '';
/**
 * @hidden
 */
var ZERO_LEVEL_ZERO_ITEM_ID = '0';
/**
 * @hidden
 */
var SEPARATOR = '_';
/**
 * @hidden
 */
function itemsIdsUtils_getItemById(itemId, items) {
    if (isIdZeroLevel(itemId)) {
        return items[Number(itemId)];
    }
    else {
        var rootParentItem = items[Number(getRootParentId(itemId))];
        return rootParentItem.items ?
            itemsIdsUtils_getItemById(getIdWithoutRootParentId(itemId), rootParentItem.items) : undefined;
    }
}
/**
 * @hidden
 */
function getRootParentId(itemId) {
    return isIdEmptyOrZeroLevel(itemId) ? itemId : itemId.split(SEPARATOR)[0];
}
/**
 * @hidden
 */
function getIdWithoutRootParentId(itemId) {
    if (isIdEmptyOrZeroLevel(itemId)) {
        return itemId;
    }
    else {
        var firstSeparatorIndex = itemId.indexOf(SEPARATOR);
        return itemId.substring(firstSeparatorIndex + 1);
    }
}
/**
 * @hidden
 */
function getFirstChildId(itemId) {
    return createId('0', itemId);
}
/**
 * @hidden
 */
function shouldOpenItem(itemId, lastItemIdToBeOpened) {
    if (lastItemIdToBeOpened.indexOf(itemId) === 0) {
        return lastItemIdToBeOpened.length === itemId.length ||
            lastItemIdToBeOpened.charAt(itemId.length) === SEPARATOR;
    }
    else {
        return false;
    }
}
/**
 * @hidden
 */
function createId(childId, parentId) {
    return parentId ? parentId + SEPARATOR + childId : childId;
}
/**
 * @hidden
 */
function getDirectParentId(itemId) {
    var lastSeparatorIndex = itemId.lastIndexOf(SEPARATOR);
    return lastSeparatorIndex < 0 ? EMPTY_ID : itemId.substring(0, lastSeparatorIndex);
}
/**
 * @hidden
 */
function isIdEmptyOrZeroLevel(itemId) {
    return itemId === EMPTY_ID || itemId.indexOf(SEPARATOR) < 0;
}
/**
 * @hidden
 */
function isIdZeroLevel(itemId) {
    return itemId !== EMPTY_ID && itemId.indexOf(SEPARATOR) < 0;
}
/**
 * @hidden
 */
function isIdFirstLevel(itemId) {
    return getSeparatorOccurances(itemId) === 1;
}
/**
 * @hidden
 */
function isFirstItemFromSiblings(itemId) {
    return getShortId(itemId) === ZERO_LEVEL_ZERO_ITEM_ID;
}
/**
 * @hidden
 */
function getShortId(itemId) {
    var lastSeparatorIndex = itemId.lastIndexOf(SEPARATOR);
    return lastSeparatorIndex < 0 ? itemId : itemId.substring(lastSeparatorIndex + 1);
}
/**
 * @hidden
 */
function getDirectSiblingIdForLevelZero(next, shortItemId, siblingsCount) {
    if (!isIdZeroLevel(shortItemId)) {
        return shortItemId;
    }
    return next ?
        Number(shortItemId) < siblingsCount - 1 ? (Number(shortItemId) + 1).toString() : '0' :
        Number(shortItemId) > 0 ? (Number(shortItemId) - 1).toString() : (siblingsCount - 1).toString();
}
function getSeparatorOccurances(itemId) {
    return itemId.split(SEPARATOR).length - 1;
}

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/consts.js
/**
 * @hidden
 */
var POPUP_ALIGN = {
    vertical: 'top',
    horizontal: 'left'
};
/**
 * @hidden
 */
var POPUP_ALIGN_RTL = {
    vertical: 'top',
    horizontal: 'right'
};
/**
 * @hidden
 */
var VERTICAL_COLLISION = {
    vertical: 'flip',
    horizontal: 'fit'
};
/**
 * @hidden
 */
var HORIZONTAL_COLLISION = {
    vertical: 'fit',
    horizontal: 'flip'
};
/**
 * @hidden
 */
var POPUP_SETTINGS_RTL = {
    downward: {
        anchorAlign: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        popupAlign: POPUP_ALIGN_RTL,
        collision: VERTICAL_COLLISION
    },
    leftward: {
        anchorAlign: {
            vertical: 'top',
            horizontal: 'left'
        },
        popupAlign: POPUP_ALIGN_RTL,
        collision: HORIZONTAL_COLLISION
    }
};
/**
 * @hidden
 */
var POPUP_SETTINGS = {
    downward: {
        anchorAlign: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        popupAlign: POPUP_ALIGN,
        collision: VERTICAL_COLLISION
    },
    rightward: {
        anchorAlign: {
            vertical: 'top',
            horizontal: 'right'
        },
        popupAlign: POPUP_ALIGN,
        collision: HORIZONTAL_COLLISION
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/misc.js


/**
 * @hidden
 */
function getPopupSettings(itemId, isMenuVertical, isDirectionRightToLeft) {
    var childrenPosition = getChildrenPosition(itemId, isMenuVertical, isDirectionRightToLeft);
    if (isDirectionRightToLeft) {
        return childrenPosition === 'downward' ? POPUP_SETTINGS_RTL.downward : POPUP_SETTINGS_RTL.leftward;
    }
    else {
        return childrenPosition === 'downward' ? POPUP_SETTINGS.downward : POPUP_SETTINGS.rightward;
    }
}
/**
 * @hidden
 */
function getChildrenPosition(itemId, isMenuVertical, isDirectionRightToLeft) {
    if (isIdZeroLevel(itemId)) {
        if (isMenuVertical) {
            return isDirectionRightToLeft ? 'leftward' : 'rightward';
        }
        else {
            return 'downward';
        }
    }
    else {
        return isDirectionRightToLeft ? 'leftward' : 'rightward';
    }
}
/**
 * @hidden
 */
function convertBoolDirectionToString(isDirectionRightToLeft) {
    return isDirectionRightToLeft ? 'rtl' : 'ltr';
}
/**
 * @hidden
 */
function getDOMElementId(menuGuid, itemId) {
    return "".concat(menuGuid, "_").concat(itemId);
}

// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/MenuItemLink.js
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



var MenuItemLink = /** @class */ (function (_super) {
    __extends(MenuItemLink, _super);
    function MenuItemLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    MenuItemLink.prototype.render = function () {
        if (this.props.url) {
            return (index_js_.createElement("a", { className: this.getMenuItemClassName(), role: "presentation", href: this.props.url, tabIndex: -1 }, this.props.children));
        }
        else {
            return (index_js_.createElement("span", { id: this.props.id, className: (0,main_js_.classNames)(this.getMenuItemClassName(), this.props.className), style: this.props.style, role: "presentation" }, this.props.children));
        }
    };
    MenuItemLink.prototype.getMenuItemClassName = function () {
        return (0,main_js_.classNames)('k-link', 'k-menu-link', {
            'k-active': this.props.opened
        });
    };
    /**
     * @hidden
     */
    MenuItemLink.propTypes = {
        opened: prop_types_index_js_.bool,
        url: prop_types_index_js_.string
    };
    return MenuItemLink;
}(index_js_.Component));


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/MenuItemArrow.js
var MenuItemArrow_extends = (undefined && undefined.__extends) || (function () {
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





/**
 * @hidden
 */
var downArrowName = 'caret-alt-down';
/**
 * @hidden
 */
var rightArrowName = 'caret-alt-right';
/**
 * @hidden
 */
var leftArrowName = 'caret-alt-left';
var MenuItemArrow = /** @class */ (function (_super) {
    MenuItemArrow_extends(MenuItemArrow, _super);
    function MenuItemArrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    MenuItemArrow.prototype.render = function () {
        return index_js_.createElement(main_js_.IconWrap, __assign({ "aria-hidden": true }, this.getIcon()));
    };
    MenuItemArrow.prototype.getIcon = function () {
        var childrenPosition = getChildrenPosition(this.props.itemId, this.props.verticalMenu === true, this.props.dir === 'rtl');
        switch (childrenPosition) {
            case 'downward':
                return { name: downArrowName, icon: index_es_js_.caretAltDownIcon };
            case 'rightward':
                return { name: rightArrowName, icon: index_es_js_.caretAltRightIcon };
            case 'leftward':
                return { name: leftArrowName, icon: index_es_js_.caretAltLeftIcon };
            default:
                return {};
        }
    };
    /**
     * @hidden
     */
    MenuItemArrow.propTypes = {
        itemId: prop_types_index_js_.string,
        dir: prop_types_index_js_.string,
        verticalMenu: prop_types_index_js_.bool
    };
    return MenuItemArrow;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/MenuItemInternal.js
var MenuItemInternal_extends = (undefined && undefined.__extends) || (function () {
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
var MenuItemInternal = /** @class */ (function (_super) {
    MenuItemInternal_extends(MenuItemInternal, _super);
    function MenuItemInternal(props) {
        var _this = _super.call(this, props) || this;
        _this.isFirstRender = true;
        _this.onMouseOver = function (event) {
            _this.props.onMouseOver(_this.props.item.id);
            event.stopPropagation();
        };
        _this.onMouseLeave = function (event) {
            _this.props.onMouseLeave(_this.props.item.id);
            event.stopPropagation();
        };
        _this.state = { opened: false };
        return _this;
    }
    MenuItemInternal.prototype.componentDidMount = function () {
        var focusedItemId = this.props.focusedItemId;
        var currentItemId = this.props.item.id;
        // If the menu item component has been just mounted due to
        // keyboard navigation and it is the selected one.
        if (focusedItemId && focusedItemId === currentItemId) {
            this.itemElement.focus();
        }
        this.isFirstRender = false;
    };
    MenuItemInternal.prototype.componentDidUpdate = function (prevProps) {
        var focusedItemId = this.props.focusedItemId;
        var currentItemId = this.props.item.id;
        if (focusedItemId) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            // If the item has been navigated to via the keyboard navigation
            // (Clicking and focusing an item also come here).
            if (prevProps.focusedItemId !== focusedItemId
                && focusedItemId === currentItemId
                // https://github.com/telerik/kendo-react/issues/216 :
                // No need to focus the wrapping menu item DOM element
                // when a child DOM element was clicked.
                && !this.itemElement.contains(activeElement)) {
                this.itemElement.focus();
            }
        }
    };
    MenuItemInternal.prototype.render = function () {
        var _this = this;
        var item = this.props.item;
        var itemId = item.id;
        var menuItemId = getDOMElementId(this.props.menuGuid, itemId);
        return (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement("li", { id: getDOMElementId(this.props.menuGuid, itemId), className: this.getMenuItemClassName(item), style: item.cssStyle, tabIndex: itemId === this.props.tabbableItemId ? 0 : -1, onMouseOver: this.onMouseOver, onMouseLeave: this.onMouseLeave, onMouseDown: function (event) { return _this.props.onMouseDown(event); }, onBlur: function (e) { return _this.props.onBlur(itemId, e); }, onFocus: function () { return _this.props.onFocus(itemId); }, onClick: function (event) { return _this.props.onClick(event, itemId); }, role: "menuitem", "aria-disabled": item.disabled ? true : undefined, "aria-haspopup": item.items.length > 0 ? true : undefined, "aria-expanded": item.items.length > 0 ? this.Opened : undefined, "aria-label": item.text, "aria-owns": this.Opened ? menuItemId : undefined, ref: function (el) { return _this.itemElement = el; }, key: "0" }, this.contentRender ? this.renderContent() : this.renderMenuItemLink()),
            this.renderPopupIfOpened()));
    };
    MenuItemInternal.prototype.renderContent = function () {
        var itemId = this.props.item.contentParentItemId;
        return (index_js_.createElement("div", { className: "k-content", role: "presentation" },
            index_js_.createElement(this.contentRender, { item: this.props.onOriginalItemNeeded(itemId), itemId: itemId })));
    };
    MenuItemInternal.prototype.renderMenuItemLink = function () {
        var item = this.props.item;
        if (this.linkRender) {
            return (index_js_.createElement(this.linkRender, { item: this.props.onOriginalItemNeeded(item.id), itemId: item.id, opened: this.Opened, dir: convertBoolDirectionToString(this.props.isDirectionRightToLeft) }));
        }
        else {
            var textOrItemRender = this.itemRender ?
                index_js_.createElement(this.itemRender, { item: this.props.onOriginalItemNeeded(item.id), itemId: item.id, key: "1" }) :
                index_js_.createElement("span", { className: "k-menu-link-text" }, item.text);
            return (index_js_.createElement(MenuItemLink, { url: item.url, opened: this.Opened },
                this.renderMenuIconIfApplicable(),
                textOrItemRender,
                this.renderArrowIfApplicable()));
        }
    };
    MenuItemInternal.prototype.renderPopupIfOpened = function () {
        if (this.Opened) {
            var itemId = this.props.item.id;
            var _a = getPopupSettings(itemId, this.props.isMenuVertical, this.props.isDirectionRightToLeft), anchorAlign = _a.anchorAlign, popupAlign = _a.popupAlign, collision = _a.collision;
            return (index_js_.createElement(es_main_js_.Popup, { anchor: this.itemElement, show: true, popupClass: this.getPopupClassName(), anchorAlign: anchorAlign, popupAlign: popupAlign, collision: collision, animate: false, key: "1" },
                index_js_.createElement(MenuItemInternalsList, { parentItemId: itemId, items: this.props.item.items, menuGuid: this.props.menuGuid, focusedItemId: this.props.focusedItemId, lastItemIdToBeOpened: this.props.lastItemIdToBeOpened, tabbableItemId: this.props.tabbableItemId, itemRender: this.props.itemRender, linkRender: this.props.linkRender, isMenuVertical: this.props.isMenuVertical, isDirectionRightToLeft: this.props.isDirectionRightToLeft, className: "k-group k-menu-group k-reset k-menu-group-md", onMouseOver: this.props.onMouseOver, onMouseLeave: this.props.onMouseLeave, onMouseDown: this.props.onMouseDown, onBlur: this.props.onBlur, onFocus: this.props.onFocus, onClick: this.props.onClick, onOriginalItemNeeded: this.props.onOriginalItemNeeded })));
        }
        else {
            return null;
        }
    };
    MenuItemInternal.prototype.renderMenuIconIfApplicable = function () {
        var _a = this.props.item, icon = _a.icon, svgIcon = _a.svgIcon;
        return icon || svgIcon ?
            index_js_.createElement(main_js_.IconWrap, { name: icon, icon: svgIcon, key: "0" }) : null;
    };
    MenuItemInternal.prototype.renderArrowIfApplicable = function () {
        return this.props.item.items.length > 0 ?
            (index_js_.createElement("span", { className: "k-menu-expand-arrow", "aria-hidden": true },
                index_js_.createElement(MenuItemArrow, { itemId: this.props.item.id, verticalMenu: this.props.isMenuVertical, dir: convertBoolDirectionToString(this.props.isDirectionRightToLeft), key: "2" }))) : null;
    };
    Object.defineProperty(MenuItemInternal.prototype, "itemRender", {
        get: function () {
            return this.props.item.render || this.props.itemRender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuItemInternal.prototype, "linkRender", {
        get: function () {
            return this.props.item.linkRender || this.props.linkRender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuItemInternal.prototype, "contentRender", {
        get: function () {
            return this.props.item.contentParentItemId ? this.props.item.contentRender : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuItemInternal.prototype, "Opened", {
        get: function () {
            var props = this.props;
            return props.item.items.length > 0 &&
                shouldOpenItem(props.item.id, props.lastItemIdToBeOpened) &&
                // HACK: Wait for the second render because otherwise the scenario of
                // popup inside popup throws an error (for example, hover of item with id '0_0').
                !this.isFirstRender;
        },
        enumerable: false,
        configurable: true
    });
    MenuItemInternal.prototype.getPopupClassName = function () {
        return (0,main_js_.classNames)('k-menu-popup', { 'k-rtl': this.props.isDirectionRightToLeft });
    };
    MenuItemInternal.prototype.getMenuItemClassName = function (item) {
        return (0,main_js_.classNames)('k-item', 'k-menu-item', {
            'k-first': isFirstItemFromSiblings(item.id),
            'k-last': item.isLastFromSiblings,
            'k-disabled': item.disabled
        }, item.cssClass);
    };
    return MenuItemInternal;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/MenuItemInternalsList.js
var MenuItemInternalsList_extends = (undefined && undefined.__extends) || (function () {
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
var MenuItemInternalsList = /** @class */ (function (_super) {
    MenuItemInternalsList_extends(MenuItemInternalsList, _super);
    function MenuItemInternalsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseOver = function (event) {
            _this.props.onMouseOver(_this.props.parentItemId);
            event.stopPropagation();
        };
        _this.onMouseLeave = function (event) {
            _this.props.onMouseLeave(_this.props.parentItemId);
            event.stopPropagation();
        };
        return _this;
    }
    MenuItemInternalsList.prototype.render = function () {
        var parentItemId = this.props.parentItemId;
        return (index_js_.createElement("ul", { className: this.props.className, role: this.props.role ? this.props.role : (parentItemId !== undefined ? 'menu' : 'menubar'), id: parentItemId !== undefined ? getDOMElementId(this.props.menuGuid, parentItemId) : undefined, onMouseOver: parentItemId !== undefined ? this.onMouseOver : undefined, onMouseLeave: parentItemId !== undefined ? this.onMouseLeave : undefined, "aria-orientation": this.props['aria-orientation'] }, this.renderChildItems()));
    };
    MenuItemInternalsList.prototype.renderChildItems = function () {
        var _this = this;
        return this.props.items.length > 0 ? (this.props.items.map(function (item, index) {
            return (index_js_.createElement(MenuItemInternal, { item: item, isMenuVertical: _this.props.isMenuVertical, isDirectionRightToLeft: _this.props.isDirectionRightToLeft, focusedItemId: _this.props.focusedItemId, lastItemIdToBeOpened: _this.props.lastItemIdToBeOpened, tabbableItemId: _this.props.tabbableItemId, itemRender: _this.props.itemRender, linkRender: _this.props.linkRender, menuGuid: _this.props.menuGuid, onMouseOver: _this.props.onMouseOver, onMouseLeave: _this.props.onMouseLeave, onMouseDown: _this.props.onMouseDown, onBlur: _this.props.onBlur, onFocus: _this.props.onFocus, onClick: _this.props.onClick, onOriginalItemNeeded: _this.props.onOriginalItemNeeded, key: index }));
        })) : null;
    };
    return MenuItemInternalsList;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/splitter/SplitterBar.js
var SplitterBar_extends = (undefined && undefined.__extends) || (function () {
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
var SplitterBar = /** @class */ (function (_super) {
    SplitterBar_extends(SplitterBar, _super);
    function SplitterBar(props) {
        var _this = _super.call(this, props) || this;
        _this.draggable = null;
        _this.onDrag = function (data, isFirst, isLast) {
            var event = data.event;
            var _a = _this.props, onDrag = _a.onDrag, index = _a.index;
            var element = _this.draggable && _this.draggable.element;
            if (element && !_this.isStatic && _this.isDraggable) {
                onDrag(event, element, index, isFirst, isLast);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focused: true
            });
        };
        _this.onBlur = function () {
            _this.setState({
                focused: false
            });
        };
        _this.onToggle = function (event) {
            var _a = _this.props, onToggle = _a.onToggle, index = _a.index, prev = _a.prev, next = _a.next;
            if (prev.collapsible || next.collapsible) {
                onToggle(prev.collapsible ? index : index + 1, event);
            }
        };
        _this.onPrevToggle = function (event) {
            var _a = _this.props, onToggle = _a.onToggle, index = _a.index, prev = _a.prev;
            if (prev.collapsible) {
                onToggle(index, event);
            }
        };
        _this.onNextToggle = function (event) {
            var _a = _this.props, onToggle = _a.onToggle, index = _a.index, next = _a.next;
            if (next.collapsible) {
                onToggle(index + 1, event);
            }
        };
        _this.onKeyDown = function (event) {
            var keyCode = event && event.keyCode;
            var isHorizontal = _this.isHorizontal;
            var index = _this.props.index;
            var element = _this.draggable && _this.draggable.element;
            var onKeyboardResize = function (el, idx, offset) {
                event.preventDefault();
                _this.props.onKeyboardResize(el, idx, offset, event);
            };
            if (!element) {
                return;
            }
            if (keyCode === main_js_.Keys.enter) {
                event.preventDefault();
                _this.onToggle(event);
            }
            else if (_this.isDraggable) {
                if (isHorizontal && keyCode === main_js_.Keys.left) {
                    onKeyboardResize(element, index, -10);
                }
                else if (isHorizontal && keyCode === main_js_.Keys.right) {
                    onKeyboardResize(element, index, 10);
                }
                else if (!isHorizontal && keyCode === main_js_.Keys.up) {
                    onKeyboardResize(element, index, -10);
                }
                else if (!isHorizontal && keyCode === main_js_.Keys.down) {
                    onKeyboardResize(element, index, 10);
                }
            }
        };
        _this.state = {
            focused: false
        };
        return _this;
    }
    Object.defineProperty(SplitterBar.prototype, "isStatic", {
        get: function () {
            var _a = this.props, prev = _a.prev, next = _a.next;
            var betweenResizablePanes = prev.resizable && next.resizable;
            var nearCollapsiblePane = prev.collapsible || next.collapsible;
            return !betweenResizablePanes && !nearCollapsiblePane;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SplitterBar.prototype, "isDraggable", {
        get: function () {
            var _a = this.props, prev = _a.prev, next = _a.next;
            var betweenResizablePanes = prev.resizable && next.resizable;
            var nearCollapsedPane = prev.collapsed || next.collapsed;
            return !!betweenResizablePanes && !nearCollapsedPane;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SplitterBar.prototype, "isHorizontal", {
        get: function () {
            return this.props.orientation === 'horizontal';
        },
        enumerable: false,
        configurable: true
    });
    SplitterBar.prototype.render = function () {
        var _a;
        var _this = this;
        var isDraggable = this.isDraggable;
        var isStatic = this.isStatic;
        var isHorizontal = this.isHorizontal;
        var barClasses = (0,main_js_.classNames)('k-splitbar', (_a = {},
            _a['k-focus'] = this.state.focused,
            _a['k-splitbar-horizontal'] = isHorizontal,
            _a['k-splitbar-vertical'] = !isHorizontal,
            _a['k-splitbar-draggable-horizontal'] = isHorizontal && isDraggable,
            _a['k-splitbar-draggable-vertical'] = !isHorizontal && isDraggable,
            _a['k-splitbar-static-horizontal'] = isHorizontal && isStatic,
            _a['k-splitbar-static-vertical'] = !isHorizontal && isStatic,
            _a));
        return (index_js_.createElement(main_js_.Draggable, { onPress: function (event) { return _this.onDrag(event, true, false); }, onDrag: function (event) { return _this.onDrag(event, false, false); }, onRelease: function (event) { return _this.onDrag(event, false, true); }, ref: function (component) { _this.draggable = component; } },
            index_js_.createElement("div", { tabIndex: isStatic ? -1 : 0, role: 'separator', "aria-valuenow": 0, "aria-label": this.props.ariaLabel, "aria-orientation": isHorizontal ? 'vertical' : undefined, className: barClasses, style: { touchAction: 'none' }, onFocus: this.onFocus, onBlur: this.onBlur, onDoubleClick: this.onToggle, onKeyDown: this.onKeyDown },
                this.props.prev.collapsible && index_js_.createElement("div", { className: 'k-collapse-prev', onClick: this.onPrevToggle },
                    index_js_.createElement(main_js_.IconWrap, { name: this.props.prev.collapsible
                            ? isHorizontal
                                ? this.props.prev.collapsed
                                    ? (this.props.isRtl ? 'caret-alt-left' : 'caret-alt-right')
                                    : (this.props.isRtl ? 'caret-alt-right' : 'caret-alt-left')
                                : this.props.prev.collapsed
                                    ? 'caret-alt-down'
                                    : 'caret-alt-up'
                            : undefined, icon: this.props.prev.collapsible
                            ? isHorizontal
                                ? this.props.prev.collapsed
                                    ? (this.props.isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon)
                                    : (this.props.isRtl ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon)
                                : this.props.prev.collapsed
                                    ? index_es_js_.caretAltDownIcon
                                    : index_es_js_.caretAltUpIcon
                            : undefined, size: 'xsmall' })),
                index_js_.createElement("div", { className: 'k-resize-handle' }),
                this.props.next.collapsible && index_js_.createElement("div", { className: 'k-collapse-next', onClick: this.onNextToggle },
                    index_js_.createElement(main_js_.IconWrap, { name: this.props.next.collapsible
                            ? isHorizontal
                                ? this.props.next.collapsed
                                    ? (this.props.isRtl ? 'caret-alt-right' : 'caret-alt-left')
                                    : (this.props.isRtl ? 'caret-alt-left' : 'caret-alt-right')
                                : this.props.next.collapsed
                                    ? 'caret-alt-up'
                                    : 'caret-alt-down'
                            : undefined, icon: this.props.next.collapsible
                            ? isHorizontal
                                ? this.props.next.collapsed
                                    ? (this.props.isRtl ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon)
                                    : (this.props.isRtl ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon)
                                : this.props.next.collapsed
                                    ? index_es_js_.caretAltUpIcon
                                    : index_es_js_.caretAltDownIcon
                            : undefined, size: 'xsmall' })))));
    };
    return SplitterBar;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStripNavigationItem.js
var TabStripNavigationItem_extends = (undefined && undefined.__extends) || (function () {
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
var TabStripNavigationItem_assign = (undefined && undefined.__assign) || function () {
    TabStripNavigationItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TabStripNavigationItem_assign.apply(this, arguments);
};



var TabStripNavigationItem = /** @class */ (function (_super) {
    TabStripNavigationItem_extends(TabStripNavigationItem, _super);
    function TabStripNavigationItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.itemRef = null;
        /**
         * @hidden
         */
        _this.focus = function () {
            if (_this.itemRef) {
                _this.itemRef.tabIndex = 0;
                _this.itemRef.focus();
            }
        };
        _this.blur = function () {
            if (_this.itemRef) {
                _this.itemRef.tabIndex = -1;
                _this.itemRef.blur();
            }
        };
        _this.onClick = function () {
            if (_this.props.onSelect) {
                _this.props.onSelect(_this.props.index);
            }
            if (_this.itemRef) {
                _this.itemRef.tabIndex = 0;
                _this.itemRef.focus();
            }
        };
        return _this;
    }
    /**
     * @hidden
     */
    TabStripNavigationItem.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, id = _b.id, active = _b.active, disabled = _b.disabled, _c = _b.title, title = _c === void 0 ? 'Untitled' : _c, first = _b.first, last = _b.last;
        var props = {
            'id': id,
            'aria-selected': active,
            'aria-controls': id,
            'aria-disabled': disabled,
            'aria-hidden': disabled,
            'role': 'tab',
            onClick: !disabled ? this.onClick : undefined
        };
        var itemClasses = (0,main_js_.classNames)('k-item', (_a = {},
            _a['k-first'] = first,
            _a['k-last'] = last,
            _a['k-disabled'] = disabled,
            _a['k-active'] = active,
            _a));
        return (index_js_.createElement("li", TabStripNavigationItem_assign({}, props, { className: itemClasses, ref: function (el) { return _this.itemRef = el; }, onBlur: this.blur }),
            index_js_.createElement("span", { className: "k-link" }, title)));
    };
    /**
     * @hidden
     */
    TabStripNavigationItem.propTypes = {
        active: prop_types_index_js_.bool,
        disabled: prop_types_index_js_.bool,
        index: prop_types_index_js_.number,
        onSelect: prop_types_index_js_.func,
        title: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.element
        ]),
        first: prop_types_index_js_.bool,
        last: prop_types_index_js_.bool
    };
    return TabStripNavigationItem;
}(index_js_.Component));


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var dist_es_main_js_ = __webpack_require__(85601);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStripNavigation.js
var TabStripNavigation_extends = (undefined && undefined.__extends) || (function () {
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
var TabStripNavigation_assign = (undefined && undefined.__assign) || function () {
    TabStripNavigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TabStripNavigation_assign.apply(this, arguments);
};






/**
 * @hidden
 */
var times = function (count) { return Array.apply(null, Array(count)); };
var preventDefault = function (e) { return e.preventDefault(); };
var DEFAULT_SCROLL_BEHAVIOR = 'smooth';
var PREV = 'prev';
var NEXT = 'next';
var TabStripNavigation = /** @class */ (function (_super) {
    TabStripNavigation_extends(TabStripNavigation, _super);
    function TabStripNavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.itemsNavRef = index_js_.createRef();
        _this.isRtl = function () { return _this.props.dir === 'rtl'; };
        _this.onWheel = function (e) {
            e.stopPropagation();
            var direction = e.deltaY < 0 ? PREV : NEXT;
            _this.setNewScrollPosition(direction, e);
        };
        _this.arrowClickPrev = function (e) {
            _this.handleArrowClick(PREV, e);
        };
        _this.arrowClickNext = function (e) {
            _this.handleArrowClick(NEXT, e);
        };
        _this.handleArrowClick = function (direction, e) {
            _this.setNewScrollPosition(direction, e);
        };
        _this.setNewScrollPosition = function (direction, e) {
            var list = _this.itemsNavRef.current;
            if (!list) {
                return;
            }
            var horizontal = _this.horizontalScroll();
            var scrollEnd = horizontal ? list.scrollWidth - list.offsetWidth : list.scrollHeight - list.offsetHeight;
            var increment = (e.type === 'click' ? _this.props.buttonScrollSpeed : _this.props.mouseScrollSpeed) || 0;
            var scrollPosition = horizontal ? list.scrollLeft : list.scrollTop;
            var nextScrollPosition = horizontal ? list.scrollWidth - list.scrollLeft : list.scrollHeight - list.scrollTop;
            var nextScrollPositionRtl = list.scrollWidth - (list.scrollLeft * -1);
            if (_this.isRtl() && _this.horizontalScroll()) {
                if (direction === PREV && scrollPosition < 0) {
                    scrollPosition += increment;
                    nextScrollPositionRtl += increment;
                }
                if (direction === NEXT && scrollPosition < scrollEnd) {
                    scrollPosition -= increment;
                    nextScrollPositionRtl -= increment;
                }
                scrollPosition = Math.min(0, Math.min(scrollEnd, scrollPosition));
            }
            else {
                if (direction === PREV && scrollPosition > 0) {
                    scrollPosition -= increment;
                    nextScrollPosition += increment;
                }
                if (direction === NEXT && scrollPosition < scrollEnd) {
                    scrollPosition += increment;
                    nextScrollPosition -= increment;
                }
                scrollPosition = Math.max(0, Math.min(scrollEnd, scrollPosition));
            }
            var calculatePrev = scrollPosition === 0;
            var scrollBehavior = e.type === 'click' ? DEFAULT_SCROLL_BEHAVIOR : undefined;
            if (horizontal) {
                var calculateNext = _this.isRtl()
                    ? Math.round(nextScrollPositionRtl) <= list.clientWidth
                        || Math.floor(nextScrollPositionRtl) <= list.clientWidth
                    : Math.round(nextScrollPosition) <= list.clientWidth
                        || Math.floor(nextScrollPosition) <= list.clientWidth;
                _this.setState({
                    disabledPrev: calculatePrev,
                    disabledNext: calculateNext
                });
                list.scrollTo({ left: scrollPosition, behavior: scrollBehavior });
            }
            else {
                _this.setState({
                    disabledPrev: calculatePrev,
                    disabledNext: Math.round(nextScrollPosition) <= list.clientHeight
                        || Math.floor(nextScrollPosition) <= list.clientHeight
                });
                list.scrollTo({ top: scrollPosition, behavior: scrollBehavior });
            }
        };
        _this.renderArrow = function (type, disabled) {
            var horizontal = _this.horizontalScroll();
            var directions = {
                prev: {
                    arrowTab: 'k-tabstrip-prev',
                    fontIcon: horizontal ?
                        _this.isRtl() ? 'caret-alt-right' : 'caret-alt-left'
                        : 'caret-alt-up',
                    svgIcon: horizontal ?
                        _this.isRtl() ? index_es_js_.caretAltRightIcon : index_es_js_.caretAltLeftIcon
                        : index_es_js_.caretAltUpIcon
                },
                next: {
                    arrowTab: 'k-tabstrip-next',
                    fontIcon: horizontal ?
                        _this.isRtl() ? 'caret-alt-left' : 'caret-alt-right'
                        : 'caret-alt-down',
                    svgIcon: horizontal ?
                        _this.isRtl() ? index_es_js_.caretAltLeftIcon : index_es_js_.caretAltRightIcon
                        : index_es_js_.caretAltDownIcon
                }
            };
            var ButtonComponent = (type === PREV ? _this.props.prevButton : _this.props.nextButton) || dist_es_main_js_.Button;
            var onClick = (type === PREV ? _this.arrowClickPrev : _this.arrowClickNext);
            return (index_js_.createElement(ButtonComponent, { disabled: disabled, className: "".concat(directions[type].arrowTab), onClick: onClick, icon: directions[type].fontIcon, svgIcon: directions[type].svgIcon, onMouseDown: preventDefault, tabIndex: -1, fillMode: "flat" }));
        };
        _this.state = {
            disabledPrev: _this.props.selected === 0,
            disabledNext: _this.props.selected === index_js_.Children.count(_this.props.children) - 1
        };
        return _this;
    }
    /**
     * @hidden
     */
    TabStripNavigation.prototype.componentDidMount = function () {
        if (this.props.scrollable) {
            this.scrollToSelected();
        }
    };
    /**
     * @hidden
     */
    TabStripNavigation.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, scrollable = _a.scrollable, selected = _a.selected;
        if (scrollable && prevProps.selected !== selected) {
            this.scrollToSelected();
            this.setState({
                disabledPrev: selected === 0,
                disabledNext: selected === index_js_.Children.count(this.props.children) - 1
            });
        }
    };
    /**
     * @hidden
     */
    TabStripNavigation.prototype.render = function () {
        var _a = this.props, selected = _a.selected, tabPosition = _a.tabPosition, children = _a.children, onSelect = _a.onSelect, onKeyDown = _a.onKeyDown;
        var tabsCount = index_js_.Children.count(children);
        var childElements = index_js_.Children.toArray(children);
        var tabs;
        if (children) {
            tabs = times(tabsCount).map(function (_, index, array) {
                var tabProps = {
                    active: selected === index,
                    disabled: childElements[index].props.disabled,
                    index: index,
                    title: childElements[index].props.title,
                    first: index === 0,
                    last: index === array.length - 1,
                    onSelect: onSelect
                };
                return index_js_.createElement(TabStripNavigationItem, TabStripNavigation_assign({ key: index }, tabProps));
            });
        }
        var wrapperClasses = (0,main_js_.classNames)('k-tabstrip-items-wrapper', {
            'k-hstack': tabPosition === 'top' || tabPosition === 'bottom',
            'k-vstack': tabPosition === 'left' || tabPosition === 'right'
        });
        var navClasses = (0,main_js_.classNames)('k-tabstrip-items', 'k-reset');
        return (index_js_.createElement("div", { className: wrapperClasses }, this.props.scrollable ? (index_js_.createElement(index_js_.Fragment, null,
            this.renderArrow(PREV, this.state.disabledPrev),
            index_js_.createElement("ul", { ref: this.itemsNavRef, className: navClasses, role: 'tablist', tabIndex: this.props.tabIndex, onKeyDown: onKeyDown, onWheel: this.onWheel }, tabs),
            this.renderArrow(NEXT, this.state.disabledNext))) : (index_js_.createElement("ul", { className: navClasses, role: 'tablist', tabIndex: this.props.tabIndex, onKeyDown: onKeyDown }, tabs))));
    };
    TabStripNavigation.prototype.scrollToSelected = function () {
        var _a, _b, _c, _d;
        var list = this.itemsNavRef.current;
        var tab = list && list.children[this.props.selected || 0];
        if (tab instanceof HTMLElement && list instanceof HTMLElement) {
            var horizontal = this.horizontalScroll();
            var listSize = horizontal ? list.offsetWidth : list.offsetHeight;
            var tabSize = horizontal ? tab.offsetWidth : tab.offsetHeight;
            var scrollDir = horizontal ? 'left' : 'top';
            var currentScrollOffset = horizontal ? list.scrollLeft : list.scrollTop;
            var scrollPosition = 0;
            if (this.isRtl()) {
                var tabOffset = tab.offsetLeft;
                currentScrollOffset = currentScrollOffset * -1;
                if (tabOffset < 0) {
                    scrollPosition = tabOffset - tabSize + list.offsetLeft;
                    list.scrollTo((_a = {}, _a[scrollDir] = scrollPosition, _a.behavior = DEFAULT_SCROLL_BEHAVIOR, _a));
                }
                else if (tabOffset + tabSize > listSize - currentScrollOffset) {
                    scrollPosition = currentScrollOffset + tabOffset - tabSize;
                    list.scrollTo((_b = {}, _b[scrollDir] = scrollPosition, _b.behavior = DEFAULT_SCROLL_BEHAVIOR, _b));
                }
            }
            else {
                var tabOffset = horizontal ? tab.offsetLeft - list.offsetLeft : tab.offsetTop - list.offsetTop;
                if (currentScrollOffset + listSize < tabOffset + tabSize) {
                    scrollPosition = tabOffset + tabSize - listSize;
                    list.scrollTo((_c = {}, _c[scrollDir] = scrollPosition, _c.behavior = DEFAULT_SCROLL_BEHAVIOR, _c));
                }
                else if (currentScrollOffset > tabOffset) {
                    scrollPosition = tabOffset;
                    list.scrollTo((_d = {}, _d[scrollDir] = scrollPosition, _d.behavior = DEFAULT_SCROLL_BEHAVIOR, _d));
                }
            }
        }
    };
    TabStripNavigation.prototype.horizontalScroll = function () {
        return /top|bottom/.test(this.props.tabPosition || 'top');
    };
    ;
    /**
     * @hidden
     */
    TabStripNavigation.propTypes = {
        children: prop_types_index_js_.oneOfType([
            prop_types_index_js_.element,
            prop_types_index_js_.arrayOf(prop_types_index_js_.element)
        ]),
        onSelect: prop_types_index_js_.func,
        onKeyDown: prop_types_index_js_.func,
        selected: prop_types_index_js_.number,
        tabIndex: prop_types_index_js_.number
    };
    return TabStripNavigation;
}(index_js_.Component));


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Fade.js
var Fade = __webpack_require__(84602);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStripContent.js
var TabStripContent_extends = (undefined && undefined.__extends) || (function () {
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
var TabStripContent_assign = (undefined && undefined.__assign) || function () {
    TabStripContent_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TabStripContent_assign.apply(this, arguments);
};




var TabStripContent = /** @class */ (function (_super) {
    TabStripContent_extends(TabStripContent, _super);
    function TabStripContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentId = (0,main_js_.guid)();
        _this.childFactory = function (child) {
            return index_js_.cloneElement(child, TabStripContent_assign(TabStripContent_assign({}, child.props), { in: child.props.children.props.id === String(_this.contentId + _this.props.selected) }));
        };
        return _this;
    }
    /**
     * @hidden
     */
    TabStripContent.prototype.render = function () {
        var _a = this.props, children = _a.children, selected = _a.selected;
        var selectedTab = children && typeof selected === 'number' &&
            index_js_.Children.toArray(children)[selected];
        var contentClasses = (0,main_js_.classNames)('k-tabstrip-content', 'k-active', selectedTab && selectedTab.props.contentClassName);
        return (index_js_.createElement("div", { className: contentClasses, style: this.props.style }, this.renderContent(children)));
    };
    TabStripContent.prototype.renderContent = function (children) {
        var _this = this;
        return !this.props.keepTabsMounted
            ? this.renderChild(index_js_.Children.toArray(children)[this.props.selected], this.props.selected)
            : index_js_.Children.map(this.props.children, function (tab, idx) {
                return _this.renderChild(tab, idx);
            });
    };
    TabStripContent.prototype.renderChild = function (tab, idx) {
        var visible = idx === this.props.selected;
        var contentProps = {
            'role': 'tabpanel',
            'aria-expanded': true,
            'aria-labelledby': idx.toString(),
            'style': {
                'display': visible ? undefined : 'none'
            }
        };
        var animationStyle = {
            position: 'initial',
            display: visible ? undefined : 'none'
        };
        if (tab.props.disabled) {
            return null;
        }
        return this.props.animation
            ? (index_js_.createElement(Fade/* Fade */.z, { appear: true, exit: this.props.keepTabsMounted, style: animationStyle, childFactory: this.props.keepTabsMounted ? this.childFactory : undefined },
                index_js_.createElement("div", TabStripContent_assign({}, contentProps, { id: String(this.contentId + idx), key: idx }), tab.props.children)))
            : (index_js_.createElement("div", TabStripContent_assign({}, contentProps, { key: idx }), tab.props.children));
    };
    /**
     * @hidden
     */
    TabStripContent.propTypes = {
        animation: prop_types_index_js_.bool,
        children: prop_types_index_js_.oneOfType([
            prop_types_index_js_.element,
            prop_types_index_js_.arrayOf(prop_types_index_js_.element)
        ]),
        selected: prop_types_index_js_.number,
        style: prop_types_index_js_.object
    };
    return TabStripContent;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-layout',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1700063587,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStrip.js
var TabStrip_extends = (undefined && undefined.__extends) || (function () {
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
var TabStrip_assign = (undefined && undefined.__assign) || function () {
    TabStrip_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TabStrip_assign.apply(this, arguments);
};






var TabStrip = /** @class */ (function (_super) {
    TabStrip_extends(TabStrip, _super);
    function TabStrip(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this.showLicenseWatermark = false;
        _this.keyBinding = (_a = {},
            _a[main_js_.Keys.left] = function () { return _this.prevNavigatableTab(); },
            _a[main_js_.Keys.right] = function () { return _this.nextNavigatableTab(); },
            _a[main_js_.Keys.down] = function () { return _this.nextNavigatableTab(); },
            _a[main_js_.Keys.up] = function () { return _this.prevNavigatableTab(); },
            _a[main_js_.Keys.home] = function () { return 0; },
            _a[main_js_.Keys.end] = function () { return (index_js_.Children.count(_this.props.children) - 1); },
            _a);
        /**
         * @hidden
         */
        _this.onSelect = function (index) {
            if (_this.props.selected !== index) {
                if (_this.props.onSelect) {
                    _this.props.onSelect({
                        selected: index
                    });
                }
            }
        };
        /**
         * @hidden
         */
        _this.onKeyDown = function (event) {
            var handler;
            switch (event.keyCode) {
                case main_js_.Keys.left:
                    handler = _this.keyBinding[_this.invertKeys(main_js_.Keys.left, main_js_.Keys.right)];
                    break;
                case main_js_.Keys.right:
                    handler = _this.keyBinding[_this.invertKeys(main_js_.Keys.right, main_js_.Keys.left)];
                    break;
                case main_js_.Keys.up:
                    handler = _this.keyBinding[main_js_.Keys.up];
                    break;
                case main_js_.Keys.down:
                    handler = _this.keyBinding[main_js_.Keys.down];
                    break;
                case main_js_.Keys.home:
                    handler = _this.keyBinding[main_js_.Keys.home];
                    break;
                case main_js_.Keys.end:
                    handler = _this.keyBinding[main_js_.Keys.end];
                    break;
                default:
                    break;
            }
            if (handler) {
                event.preventDefault();
                _this.onSelect(handler());
            }
        };
        _this.renderContent = function (tabProps) {
            var selected = tabProps.selected, children = tabProps.children, tabContentStyle = tabProps.tabContentStyle;
            var childrenCount = index_js_.Children.count(children);
            if (selected < childrenCount && selected > -1) {
                return (index_js_.createElement(TabStripContent, TabStrip_assign({ index: selected }, tabProps, { style: tabContentStyle })));
            }
            return null;
        };
        _this.firstNavigatableTab = function () {
            var children = _this.children();
            var length = index_js_.Children.count(children);
            if (children) {
                for (var i = 0; i < length; i++) {
                    if (!children[i].props.disabled) {
                        return i;
                    }
                }
            }
        };
        _this.lastNavigatableTab = function () {
            var children = _this.children();
            var length = index_js_.Children.count(children);
            if (children) {
                for (var i = length - 1; i > 0; i--) {
                    if (!children[i].props.disabled) {
                        return i;
                    }
                }
            }
        };
        _this.prevNavigatableTab = function () {
            var children = _this.children();
            var selected = _this.props.selected;
            var index = selected ? selected - 1 : -1;
            if (index < 0) {
                return _this.lastNavigatableTab();
            }
            if (children) {
                for (var i = index; i > -1; i--) {
                    if (!children[i].props.disabled) {
                        return i;
                    }
                    if (i === 0) {
                        return _this.lastNavigatableTab();
                    }
                }
            }
        };
        _this.nextNavigatableTab = function () {
            var children = _this.children();
            var selected = _this.props.selected;
            var index = selected ? selected + 1 : 1;
            var childrenCount = index_js_.Children.count(children);
            if (index >= childrenCount) {
                return _this.firstNavigatableTab();
            }
            if (children) {
                for (var i = index; i < childrenCount; i++) {
                    if (!children[i].props.disabled) {
                        return i;
                    }
                    if (i + 1 === childrenCount) {
                        return _this.firstNavigatableTab();
                    }
                }
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,main_js_.shouldShowValidationUI)(packageMetadata);
        return _this;
    }
    /**
     * @hidden
     */
    TabStrip.prototype.render = function () {
        var _this = this;
        var tabProps = TabStrip_assign(TabStrip_assign({}, this.props), { children: this.children(), onKeyDown: this.onKeyDown, onSelect: this.onSelect });
        var tabPosition = tabProps.tabPosition, _a = tabProps.tabIndex, tabIndex = _a === void 0 ? 0 : _a;
        var bottom = tabPosition === 'bottom';
        var componentClasses = (0,main_js_.classNames)('k-tabstrip k-pos-relative', {
            'k-tabstrip-left': tabPosition === 'left',
            'k-tabstrip-right': tabPosition === 'right',
            'k-tabstrip-bottom': tabPosition === 'bottom',
            'k-tabstrip-top': tabPosition === 'top',
            'k-tabstrip-scrollable': this.props.scrollable
        }, this.props.className);
        return (index_js_.createElement("div", { id: this.props.id, ref: function (div) { return _this._element = div; }, dir: this.props.dir, className: componentClasses, style: this.props.style },
            !bottom && index_js_.createElement(TabStripNavigation, TabStrip_assign({}, tabProps, { tabIndex: tabIndex })),
            this.renderContent(tabProps),
            bottom && index_js_.createElement(TabStripNavigation, TabStrip_assign({}, tabProps, { tabIndex: tabIndex })),
            this.showLicenseWatermark && index_js_.createElement(main_js_.WatermarkOverlay, null)));
    };
    TabStrip.prototype.invertKeys = function (original, inverted) {
        var rtl = this._element && (getComputedStyle(this._element).direction === 'rtl') || false;
        return rtl ? inverted : original;
    };
    TabStrip.prototype.children = function () {
        return index_js_.Children.toArray(this.props.children).filter(function (c) { return c; });
    };
    /**
     * @hidden
     */
    TabStrip.propTypes = {
        animation: prop_types_index_js_.bool,
        children: prop_types_index_js_.node,
        onSelect: prop_types_index_js_.func,
        selected: prop_types_index_js_.number,
        style: prop_types_index_js_.object,
        tabContentStyle: prop_types_index_js_.object,
        tabPosition: prop_types_index_js_.string,
        tabIndex: prop_types_index_js_.number,
        className: prop_types_index_js_.string,
        dir: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    TabStrip.defaultProps = {
        animation: true,
        tabPosition: 'top',
        keepTabsMounted: false,
        buttonScrollSpeed: 100,
        mouseScrollSpeed: 10
    };
    return TabStrip;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStripTab.js
var TabStripTab_extends = (undefined && undefined.__extends) || (function () {
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


var TabStripTab = /** @class */ (function (_super) {
    TabStripTab_extends(TabStripTab, _super);
    function TabStripTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    TabStripTab.prototype.render = function () {
        return null;
    };
    /**
     * @hidden
     */
    TabStripTab.propTypes = {
        disabled: prop_types_index_js_.bool,
        contentClassName: prop_types_index_js_.string,
        children: prop_types_index_js_.oneOfType([
            prop_types_index_js_.element,
            prop_types_index_js_.node
        ]),
        title: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.element,
            prop_types_index_js_.node
        ])
    };
    return TabStripTab;
}(index_js_.Component));


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Reveal.js
var Reveal = __webpack_require__(22893);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/panelbar/PanelBarItem.js
var PanelBarItem_extends = (undefined && undefined.__extends) || (function () {
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
var PanelBarItem_assign = (undefined && undefined.__assign) || function () {
    PanelBarItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return PanelBarItem_assign.apply(this, arguments);
};





/**
 * @hidden
 */
function iconElement(_a) {
    var imageUrl = _a.imageUrl, icon = _a.icon, svgIcon = _a.svgIcon, iconClass = _a.iconClass;
    if (imageUrl) {
        return (index_js_.createElement("img", { role: "presentation", className: 'k-panelbar-item-icon k-image', src: imageUrl }));
    }
    else if (icon || svgIcon) {
        return (index_js_.createElement(main_js_.IconWrap, { className: 'k-panelbar-item-icon', name: icon, icon: svgIcon }));
    }
    else if (iconClass) {
        return (index_js_.createElement("span", { role: "presentation", className: 'k-panelbar-item-icon ' + iconClass }));
    }
    return null;
}
var PanelBarItem = /** @class */ (function (_super) {
    PanelBarItem_extends(PanelBarItem, _super);
    function PanelBarItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemClick = function () {
            var _a = _this.props, onSelect = _a.onSelect, disabled = _a.disabled, id = _a.id;
            if (onSelect && !disabled) {
                onSelect.call(undefined, {
                    uniquePrivateKey: _this.props.uniquePrivateKey,
                    id: id,
                    target: _this
                });
            }
        };
        _this.childFactory = function (child) {
            if (_this.props.keepItemsMounted) {
                return index_js_.cloneElement(child, PanelBarItem_assign(PanelBarItem_assign({}, child.props), { in: _this.props.expanded }));
            }
            return child;
        };
        _this.state = {
            show: props.expanded || false
        };
        return _this;
    }
    /**
     * @hidden
     */
    PanelBarItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, children = _a.children, title = _a.title, uniquePrivateKey = _a.uniquePrivateKey, disabled = _a.disabled, selected = _a.selected, focused = _a.focused, expanded = _a.expanded, className = _a.className, level = _a.level, headerClassName = _a.headerClassName, animation = _a.animation, keepItemsMounted = _a.keepItemsMounted;
        var panelBarItemAriaAttributes = {
            'role': 'treeitem',
            'aria-disabled': disabled,
            'aria-hidden': !disabled && !expanded,
            'aria-selected': !disabled && selected,
            'aria-expanded': !disabled && expanded && !!children
        };
        var panelBarItemClassName = (0,main_js_.classNames)('k-panelbar-item', {
            'k-panelbar-header': level === 0,
            'k-expanded': expanded && !!children,
            'k-disabled': disabled
        }, "k-level-".concat(level), className);
        var panelBarLinkClassName = (0,main_js_.classNames)('k-link', {
            'k-selected': !disabled && selected,
            'k-focus': !disabled && focused
        }, headerClassName);
        var animationStyle = { display: 'block' };
        var icon = iconElement(this.props);
        var arrow = (!disabled && children)
            ? (index_js_.createElement(main_js_.IconWrap, { name: expanded ? 'chevron-up' : 'chevron-down', icon: expanded ? index_es_js_.chevronUpIcon : index_es_js_.chevronDownIcon, className: (0,main_js_.classNames)('k-panelbar-toggle', expanded
                    ? 'k-panelbar-collapse'
                    : 'k-panelbar-expand') }))
            : null;
        var opened = (!disabled && expanded);
        var content = opened || keepItemsMounted
            ? (index_js_.createElement("ul", { role: "group", "aria-expanded": expanded, "aria-hidden": !expanded, className: "k-panelbar-group k-panel k-group", style: { display: keepItemsMounted
                        ? (this.state.show ? 'block' : 'none')
                        : 'block' } }, children))
            : null;
        var child = ((animation !== undefined ? animation : true) && !disabled && children)
            ? (index_js_.createElement(Reveal/* Reveal */.g, { transitionEnterDuration: 200, transitionExitDuration: 200, key: uniquePrivateKey + '_animation', style: animationStyle, children: content, childFactory: keepItemsMounted && this.childFactory, unmountOnExit: !keepItemsMounted, onBeforeEnter: function () { return keepItemsMounted && _this.setState({ show: true }); }, onAfterExited: function () { return keepItemsMounted && _this.setState({ show: false }); } }))
            : content;
        return (index_js_.createElement("li", PanelBarItem_assign({ id: id, className: panelBarItemClassName }, panelBarItemAriaAttributes),
            index_js_.createElement("span", { className: panelBarLinkClassName, onClick: this.handleItemClick },
                icon,
                index_js_.createElement("span", { className: 'k-panelbar-item-text' }, title),
                arrow),
            child));
    };
    /**
     * @hidden
     */
    PanelBarItem.propTypes = {
        animation: prop_types_index_js_.bool,
        children: prop_types_index_js_.any,
        className: prop_types_index_js_.string,
        icon: prop_types_index_js_.string,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        svgIcon: main_js_.svgIconPropType,
        expanded: prop_types_index_js_.bool,
        disabled: prop_types_index_js_.bool,
        onSelect: prop_types_index_js_.func,
        selected: prop_types_index_js_.bool,
        level: prop_types_index_js_.number,
        title: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.element
        ]),
        id: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.number
        ]),
        focused: prop_types_index_js_.bool,
        keepItemsMounted: prop_types_index_js_.bool
    };
    /**
     * @hidden
     */
    PanelBarItem.defaultProps = {
        title: 'Untitled'
    };
    return PanelBarItem;
}(index_js_.PureComponent));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/panelbar/util.js
var util_assign = (undefined && undefined.__assign) || function () {
    util_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return util_assign.apply(this, arguments);
};
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
var renderChildren = function (_a) {
    var _b = _a.animation, animation = _b === void 0 ? true : _b, _c = _a.keepItemsMounted, keepItemsMounted = _c === void 0 ? false : _c, state = _a.state, expanded = _a.expanded, handleSelect = _a.handleSelect, children = _a.children, _d = _a.parentExpanded, parentExpanded = _d === void 0 ? true : _d, _e = _a.level, level = _e === void 0 ? 0 : _e, _f = _a.parentPrivateKey, parentPrivateKey = _f === void 0 ? [] : _f;
    return index_js_.Children.map(children, function (child, idx) {
        if (child && child.type === PanelBarItem) {
            var nestedChildren = void 0;
            var privateKey = getId(child, parentPrivateKey, idx);
            if (child.props.children) {
                var renderState = {
                    animation: animation,
                    keepItemsMounted: keepItemsMounted,
                    state: state,
                    expanded: expanded,
                    handleSelect: handleSelect,
                    children: child.props.children,
                    parentExpanded: (expanded || []).indexOf(privateKey) > -1,
                    level: level + 1,
                    parentPrivateKey: __spreadArray(__spreadArray([], parentPrivateKey, true), [privateKey], false)
                };
                nestedChildren = renderChildren(renderState);
            }
            return index_js_.cloneElement(child, util_assign(util_assign({}, child.props), { animation: child.props.animation !== undefined ? child.props.animation : animation, keepItemsMounted: keepItemsMounted, id: child.props.id || "k-panelbar-item-default-".concat(privateKey), uniquePrivateKey: privateKey, parentUniquePrivateKey: parentPrivateKey, parentExpanded: parentExpanded, level: level, expanded: (expanded || []).indexOf(privateKey) > -1, focused: state.focused === privateKey && state.wrapperFocused, selected: state.selected === privateKey, children: nestedChildren, onSelect: handleSelect }));
        }
        else {
            return index_js_.createElement("div", { className: "k-panelbar-content k-content" }, child);
        }
    });
};
/**
 * @hidden
 */
var getFirstId = function (props) {
    var firstItem = index_js_.Children.toArray(props.children)[0];
    if (firstItem) {
        return getId(firstItem, [], 0);
    }
    return '';
};
/**
 * @hidden
 */
var getInitialState = function (props, expandMode, result, parentExpanded, parentPrivateKey) {
    if (result === void 0) { result = {
        expanded: props.expanded || [],
        selected: props.selected || '',
        focused: props.focused || '',
        wrapperFocused: false
    }; }
    if (parentExpanded === void 0) { parentExpanded = true; }
    if (parentPrivateKey === void 0) { parentPrivateKey = []; }
    index_js_.Children.map(props.children, function (child, idx) {
        if (child && child.type === PanelBarItem) {
            var privateKey = getId(child, parentPrivateKey, idx);
            if (!child.props.disabled && parentExpanded) {
                if (child.props.selected) {
                    result.selected = privateKey;
                }
                if (child.props.focused) {
                    result.focused = privateKey;
                }
                if (child.props.expanded) {
                    if (expandMode === 'multiple') {
                        result.expanded.push(privateKey);
                    }
                    else if (expandMode === 'single') {
                        result.expanded = [privateKey];
                    }
                }
                if (child.props.children) {
                    result = getInitialState(child.props, expandMode, result, !!child.props.expanded, __spreadArray(__spreadArray([], parentPrivateKey, true), [privateKey], false));
                }
            }
        }
    });
    return result;
};
/**
 * @hidden
 */
var getId = function (child, parentPrivateKey, idx) {
    return child && child.props && child.props.id
        ? child.props.id
        : parentPrivateKey.length
            ? parentPrivateKey[parentPrivateKey.length - 1] + ".".concat(idx)
            : ".".concat(idx);
};
/**
 * @hidden
 */
function flatVisibleItems(data, flattedItems) {
    if (flattedItems === void 0) { flattedItems = []; }
    (data || []).forEach(function (item) {
        if (!item.disabled) {
            flattedItems.push(item);
            if (item.expanded && item.children) {
                flatVisibleItems(item.children, flattedItems);
            }
        }
    });
    return flattedItems;
}
/**
 * @hidden
 */
function flatChildren(children, flattenChildren) {
    if (flattenChildren === void 0) { flattenChildren = []; }
    index_js_.Children.forEach(children, function (child) {
        if (child && child.props && !child.props.disabled) {
            flattenChildren.push(child);
            if (child.props.children) {
                flatChildren(child.props.children, flattenChildren);
            }
        }
    });
    return flattenChildren;
}
;
/**
 * @hidden
 */
function flatVisibleChildren(children, flattenVisibleChildren) {
    if (flattenVisibleChildren === void 0) { flattenVisibleChildren = []; }
    index_js_.Children.forEach(children, function (child) {
        if (child && child.props && !child.props.disabled && (child.props.expanded || child.props.parentExpanded)) {
            flattenVisibleChildren.push(child);
            if (child.props.children) {
                flatVisibleChildren(child.props.children, flattenVisibleChildren);
            }
        }
    });
    return flattenVisibleChildren;
}
;
/**
 * @hidden
 */
var isPresent = function (value) { return value !== null && value !== undefined; };
/**
 * Represents the PanelBarUtils functions.
 */
var PanelBarUtils;
(function (PanelBarUtils) {
    /**
     * Maps a collection of PanelBarItemProps to PanelBarItem components
     * ([see example]({% slug customization_panelbar %})).
     * Contained in the `PanelBarUtils` object.
     *
     * @param items - A collection of PanelBarItemProps.
     * @return {PanelBarItem[]} Returns an array of PanelBarItem components.
     */
    function mapItemsToComponents(items) {
        return items.map(function (item, idx) {
            var children;
            if (item.content) {
                children = item.content;
            }
            if (item.children) {
                children = (mapItemsToComponents(item.children));
            }
            return (index_js_.createElement(PanelBarItem, util_assign({}, item, { children: children, key: item.id || idx })));
        });
    }
    PanelBarUtils.mapItemsToComponents = mapItemsToComponents;
})(PanelBarUtils || (PanelBarUtils = {}));
/**
 * @hidden
 */
var isArrayEqual = function (firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    return firstArray.every(function (ex, i) { return ex === secondArray[i]; });
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/panelbar/interfaces/NavigationAction.js
/**
 * @hidden
 */
var NavigationAction;
(function (NavigationAction) {
    NavigationAction[NavigationAction["Toggle"] = 0] = "Toggle";
    NavigationAction[NavigationAction["Next"] = 1] = "Next";
    NavigationAction[NavigationAction["Previous"] = 2] = "Previous";
})(NavigationAction || (NavigationAction = {}));

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/panelbar/PanelBar.js
var PanelBar_extends = (undefined && undefined.__extends) || (function () {
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
var PanelBar_assign = (undefined && undefined.__assign) || function () {
    PanelBar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return PanelBar_assign.apply(this, arguments);
};
var PanelBar_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







var PanelBar = /** @class */ (function (_super) {
    PanelBar_extends(PanelBar, _super);
    function PanelBar(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this.showLicenseWatermark = false;
        /**
         * @hidden
         */
        _this.handleSelect = function (event) {
            _this.onSelect(event);
            _this.onFocus(event);
        };
        /**
         * @hidden
         */
        _this.onSelect = function (event) {
            var flattenChildren = flatChildren(index_js_.Children.toArray(_this.children));
            var selectedChild;
            var newExpanded;
            flattenChildren.forEach(function (child) {
                if (child.props.uniquePrivateKey === (event.uniquePrivateKey || _this.state.focused)) {
                    selectedChild = child;
                }
            });
            switch (_this.expandMode) {
                case 'single':
                    newExpanded = PanelBar_spreadArray(PanelBar_spreadArray([], selectedChild.props.parentUniquePrivateKey, true), [selectedChild.props.uniquePrivateKey], false);
                    if (isArrayEqual(_this.expandedItems, newExpanded)) {
                        if (selectedChild.props.parentUniquePrivateKey) {
                            newExpanded = PanelBar_spreadArray([], selectedChild.props.parentUniquePrivateKey, true);
                        }
                        else {
                            newExpanded = [];
                        }
                    }
                    break;
                case 'multiple':
                    newExpanded = _this.expandedItems.slice();
                    var index = newExpanded.indexOf(selectedChild.props.uniquePrivateKey);
                    index === -1 ? newExpanded.push(selectedChild.props.uniquePrivateKey) : newExpanded.splice(index, 1);
                    break;
                default:
                    newExpanded = _this.expandedItems.slice();
                    break;
            }
            _this.setState({ selected: selectedChild.props.uniquePrivateKey, expanded: newExpanded });
            if (_this.props.onSelect) {
                _this.props.onSelect.call(undefined, {
                    target: selectedChild,
                    expandedItems: newExpanded
                });
            }
        };
        /**
         * @hidden
         */
        _this.onFocus = function (event, step) {
            if (step === void 0) { step = 0; }
            var flattenChildren = flatVisibleChildren(index_js_.Children.toArray(_this.children));
            var focusedChild;
            flattenChildren.forEach(function (child, ixd) {
                if (child.props.uniquePrivateKey === (event.uniquePrivateKey || _this.state.focused)) {
                    var index = ixd + step < 0
                        ? 0
                        : ixd + step > flattenChildren.length
                            ? flattenChildren.length - 1
                            : ixd + step;
                    focusedChild = flattenChildren[index];
                }
            });
            if (focusedChild) {
                _this.activeDescendant = focusedChild.props.id;
                _this.setState({ focused: focusedChild.props.uniquePrivateKey });
            }
        };
        /**
         * @hidden
         */
        _this.onNavigate = function (event, action) {
            var step;
            switch (action) {
                case NavigationAction.Previous:
                    step = -1;
                    _this.onFocus(event, step);
                    break;
                case NavigationAction.Next:
                    step = 1;
                    _this.onFocus(event, step);
                    break;
                case NavigationAction.Toggle:
                    _this.onSelect(event);
                    break;
                default:
            }
        };
        _this.handleWrapperFocus = function () {
            clearTimeout(_this.nextTickId);
            if (!_this.state.wrapperFocused) {
                _this.setState({ wrapperFocused: true });
            }
        };
        _this.handleWrapperBlur = function () {
            _this.nextTick(function () {
                _this.setState({ wrapperFocused: false });
            });
        };
        _this.handleKeyDown = function (event) {
            var rtl = _this._element && (getComputedStyle(_this._element).direction === 'rtl') || false;
            if (event.target === event.currentTarget) {
                var keyCode = event.keyCode;
                var action = void 0;
                switch (keyCode) {
                    case main_js_.Keys.left:
                        action = !rtl ? NavigationAction.Previous : NavigationAction.Next;
                        break;
                    case main_js_.Keys.up:
                        action = NavigationAction.Previous;
                        break;
                    case main_js_.Keys.right:
                        action = !rtl ? NavigationAction.Next : NavigationAction.Previous;
                        break;
                    case main_js_.Keys.down:
                        action = NavigationAction.Next;
                        break;
                    case main_js_.Keys.space:
                    case main_js_.Keys.enter:
                        action = NavigationAction.Toggle;
                        break;
                    default:
                        action = null;
                        break;
                }
                if (action !== null) {
                    event.preventDefault();
                    _this.onNavigate(event, action);
                }
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,main_js_.shouldShowValidationUI)(packageMetadata);
        var initialState = getInitialState(props, _this.expandMode);
        if (!initialState.focused) {
            initialState.focused = getFirstId(props);
        }
        _this.state = initialState;
        return _this;
    }
    Object.defineProperty(PanelBar.prototype, "expandMode", {
        get: function () {
            return this.props.expandMode || 'multiple';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PanelBar.prototype, "selectedItem", {
        get: function () {
            var _a = this.props.selected, selected = _a === void 0 ? this.state.selected : _a;
            return selected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PanelBar.prototype, "expandedItems", {
        get: function () {
            var expanded = this.props.isControlled ? this.props.expanded || [] : this.state.expanded;
            return expanded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PanelBar.prototype, "children", {
        get: function () {
            var state = PanelBar_assign(PanelBar_assign({}, this.state), { selected: this.selectedItem });
            var renderState = {
                animation: this.props.animation,
                keepItemsMounted: this.props.keepItemsMounted,
                state: state,
                expanded: this.expandedItems,
                handleSelect: this.handleSelect,
                children: this.props.children
            };
            return renderChildren(renderState);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    PanelBar.prototype.render = function () {
        var _this = this;
        var ariaProps = {
            'aria-activedescendant': this.activeDescendant
        };
        var className = (0,main_js_.classNames)('k-panelbar', 'k-pos-relative', this.props.className);
        return (index_js_.createElement("ul", PanelBar_assign({ ref: function (div) { _this._element = div; }, dir: this.props.dir, role: 'tree', tabIndex: 0, onKeyDown: this.handleKeyDown, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, className: className, style: this.props.style }, ariaProps),
            this.children,
            this.showLicenseWatermark && index_js_.createElement(main_js_.WatermarkOverlay, null)));
    };
    PanelBar.prototype.nextTick = function (f) {
        this.nextTickId = window.setTimeout(function () { return f(); });
    };
    /**
     * @hidden
     */
    PanelBar.propTypes = {
        animation: prop_types_index_js_.bool,
        children: function (props, propName) {
            var prop = props[propName];
            if (prop) {
                if (Array.isArray(prop)) {
                    for (var _i = 0, prop_1 = prop; _i < prop_1.length; _i++) {
                        var value = prop_1[_i];
                        if (!value.type || value.type !== PanelBarItem) {
                            return new Error('PanelBar children should be either PanelBarItem or Array of PanelBarItem.');
                        }
                    }
                }
                else {
                    if (prop.type !== PanelBarItem) {
                        return new Error('PanelBar child should be either PanelBarItem or Array of PanelBarItem.');
                    }
                }
                return null;
            }
            return null;
        },
        dir: prop_types_index_js_.string,
        selected: prop_types_index_js_.string,
        expanded: prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        focused: prop_types_index_js_.string,
        expandMode: prop_types_index_js_.oneOf(['single', 'multiple']),
        className: prop_types_index_js_.string,
        keepItemsMounted: prop_types_index_js_.bool,
        onSelect: prop_types_index_js_.func,
        style: prop_types_index_js_.object
    };
    /**
     * @hidden
     */
    PanelBar.defaultProps = {
        expandMode: 'multiple',
        animation: true,
        keepItemsMounted: false
    };
    return PanelBar;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/MenuItem.js
var MenuItem_extends = (undefined && undefined.__extends) || (function () {
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


var MenuItem = /** @class */ (function (_super) {
    MenuItem_extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    MenuItem.prototype.render = function () {
        return null;
    };
    /**
     * @hidden
     */
    MenuItem.propTypes = {
        text: prop_types_index_js_.string,
        url: prop_types_index_js_.string,
        icon: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        cssClass: prop_types_index_js_.string,
        cssStyle: prop_types_index_js_.object,
        render: prop_types_index_js_.any,
        linkRender: prop_types_index_js_.any,
        contentRender: prop_types_index_js_.any,
        data: prop_types_index_js_.any
    };
    return MenuItem;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/prepareInputItemsForInternalWork.js



/**
 * @hidden
 */
function prepareInputItemsForInternalWork(models, menuChildren) {
    if (models && models.length > 0) {
        return {
            items: convertInputModelsToInternalOnesHelper(models),
            inputItems: models
        };
    }
    else if (getMenuItemChildComponents(menuChildren).length > 0) {
        var inputModels = convertInputComponentsToInputModelsHelper(getMenuItemChildComponents(menuChildren));
        return { items: convertInputModelsToInternalOnesHelper(inputModels), inputItems: inputModels };
    }
    else {
        return { items: [], inputItems: [] };
    }
}
function copyInputItemWithoutChildren(inputModel, inputComponent) {
    var result = {};
    var _a = inputModel ? inputModel : inputComponent.props, text = _a.text, url = _a.url, icon = _a.icon, svgIcon = _a.svgIcon, disabled = _a.disabled, cssClass = _a.cssClass, cssStyle = _a.cssStyle, render = _a.render, linkRender = _a.linkRender, contentRender = _a.contentRender, data = _a.data;
    if (text !== undefined) {
        result.text = text;
    }
    if (url !== undefined) {
        result.url = url;
    }
    if (icon !== undefined) {
        result.icon = icon;
    }
    if (svgIcon !== undefined) {
        result.svgIcon = svgIcon;
    }
    if (disabled !== undefined) {
        result.disabled = disabled;
    }
    if (cssClass !== undefined) {
        result.cssClass = cssClass;
    }
    if (cssStyle !== undefined) {
        result.cssStyle = cssStyle;
    }
    if (render !== undefined) {
        result.render = render;
    }
    if (linkRender !== undefined) {
        result.linkRender = linkRender;
    }
    if (contentRender !== undefined) {
        result.contentRender = contentRender;
    }
    if (data !== undefined) {
        result.data = data;
    }
    return result;
}
function getMenuItemChildComponents(menuChildren) {
    return index_js_.Children.toArray(menuChildren)
        .filter(function (child) { return child && child.type === MenuItem; });
}
function convertInputComponentsToInputModelsHelper(components) {
    var result = [];
    for (var index = 0; index < components.length; index++) {
        var comp = components[index];
        var model = copyInputItemWithoutChildren(undefined, comp);
        var items = convertInputComponentsToInputModelsHelper(getMenuItemChildComponents(comp.props.children));
        if (items.length > 0) {
            model.items = items;
        }
        result.push(model);
    }
    return result;
}
function convertInputModelsToInternalOnesHelper(inputModels, parentId) {
    var result = [];
    for (var index = 0; index < inputModels.length; index++) {
        var inputModel = inputModels[index];
        var internalModel = copyInputItemWithoutChildren(inputModel);
        internalModel.id = createId(index.toString(), parentId);
        internalModel.isLastFromSiblings = index === inputModels.length - 1;
        internalModel.items = copyOrCreateModelChildren(inputModel, internalModel);
        result.push(internalModel);
    }
    return result;
}
function copyOrCreateModelChildren(inputModel, internalModel) {
    if (inputModel.contentRender) {
        return [{
                contentParentItemId: internalModel.id,
                id: createId(ZERO_LEVEL_ZERO_ITEM_ID, internalModel.id),
                isLastFromSiblings: true,
                contentRender: inputModel.contentRender,
                items: []
            }];
    }
    else if (inputModel.items) {
        return convertInputModelsToInternalOnesHelper(inputModel.items, internalModel.id);
    }
    else {
        return [];
    }
}

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/getNewItemIdUponKeyboardNavigation.js


var NO_WHITESPACE_REGEX = /\S/;
/**
 * @hidden
 * Returns the `itemId` (string) for applicable key codes even when the id has not changed.
 * For key codes that are not applicable, returns `undefined`.
 */
function getNewItemIdUponKeyboardNavigation(sourceItems, sourceItemId, keyCode, key, isMenuVertical, isDirectionRightToLeft) {
    var sourceItem = getItemById();
    switch (keyCode) {
        case main_js_.Keys.left:
            return getIdUponLeftKey();
        case main_js_.Keys.right:
            return getIdUponRightKey();
        case main_js_.Keys.up:
            return getIdUponUpKey();
        case main_js_.Keys.down:
            return getIdUponDownKey();
        case main_js_.Keys.enter:
        case main_js_.Keys.space:
            return getIdUponEnterAndSpaceKeys();
        case main_js_.Keys.home:
            return getIdUponHomeKey();
        case main_js_.Keys.end:
            return getIdUponEndKey();
        case main_js_.Keys.esc:
            return getIdUponEscKey();
        default:
            return isSearchableKey() ? getIdUponSearchByChar() : sourceItemId;
    }
    function getIdUponLeftKey() {
        if (isMenuVertical) {
            return isDirectionRightToLeft ? getIdUponRightKeyForVerticalMenu() : getIdUponLeftKeyForVerticalMenu();
        }
        else {
            return isDirectionRightToLeft ?
                getIdUponRightKeyForHorizontalMenu() : getIdUponLeftKeyForHorizontalMenu();
        }
    }
    function getIdUponRightKey() {
        if (isMenuVertical) {
            return isDirectionRightToLeft ? getIdUponLeftKeyForVerticalMenu() : getIdUponRightKeyForVerticalMenu();
        }
        else {
            return isDirectionRightToLeft ?
                getIdUponLeftKeyForHorizontalMenu() : getIdUponRightKeyForHorizontalMenu();
        }
    }
    function getIdUponDownKey() {
        if (isMenuVertical) {
            return getNextSiblingId();
        }
        else {
            if (isIdZeroLevel(sourceItemId)) {
                return getFirstChildIdForEnabledItemOrGetSameId();
            }
            else {
                return getNextSiblingId();
            }
        }
    }
    function getIdUponUpKey() {
        if (isMenuVertical) {
            return getPrevSiblingId();
        }
        else {
            if (isIdZeroLevel(sourceItemId)) {
                return getLastChildIdForEnabledItemOrGetSameId();
            }
            else {
                return getPrevSiblingId();
            }
        }
    }
    function getIdUponEnterAndSpaceKeys() {
        if (sourceItem.disabled) {
            return sourceItemId;
        }
        else {
            return hasChildren() ? getFirstChildId(sourceItemId) : getRootParentId(sourceItemId);
        }
    }
    function getIdUponHomeKey() {
        return getSiblings()[0].id;
    }
    function getIdUponEndKey() {
        var siblings = getSiblings();
        return siblings[siblings.length - 1].id;
    }
    function getIdUponEscKey() {
        return isIdZeroLevel(sourceItemId) ? sourceItemId : getDirectParentId(sourceItemId);
    }
    function getIdUponSearchByChar() {
        var searchChar = key.toLowerCase();
        var siblings = getSiblings();
        var currentItemIndex = Number(getShortId(sourceItemId));
        var itemsToSearch = siblings.slice(currentItemIndex + 1).concat(siblings.slice(0, currentItemIndex + 1));
        var matchedSibling = itemsToSearch.find(function (item) {
            return (item.text || '').toLowerCase().startsWith(searchChar);
        });
        return matchedSibling ? matchedSibling.id : sourceItemId;
    }
    // #region Left Key Internals
    function getIdUponLeftKeyForHorizontalMenu() {
        if (isIdZeroLevel(sourceItemId)) {
            return getPrevSiblingId();
        }
        else if (isIdFirstLevel(sourceItemId)) {
            return getFirstChildIdForEnabledItemOrGetSameId(getPrevSiblingId(getRootParentId(sourceItemId)));
        }
        else {
            return getDirectParentId(sourceItemId);
        }
    }
    function getIdUponLeftKeyForVerticalMenu() {
        if (isIdZeroLevel(sourceItemId)) {
            return getLastChildIdForEnabledItemOrGetSameId();
        }
        else {
            return getDirectParentId(sourceItemId);
        }
    }
    // #endregion
    // #region Right Key Internals
    function getIdUponRightKeyForHorizontalMenu() {
        if (isIdZeroLevel(sourceItemId)) {
            return getNextSiblingId();
        }
        else {
            return getFirstChildIdForEnabledItemOrGetSameId(hasChildren() ? sourceItemId : getNextSiblingId(getRootParentId(sourceItemId)));
        }
    }
    function getIdUponRightKeyForVerticalMenu() {
        return getFirstChildIdForEnabledItemOrGetSameId(isIdZeroLevel(sourceItemId) || hasChildren() ?
            sourceItemId : getNextSiblingId(getRootParentId(sourceItemId)));
    }
    // #endregion
    // #region Utils
    function getFirstChildIdForEnabledItemOrGetSameId(itemId) {
        return getFirstOrLastChildIdForEnabledItemOrGetSameId(true, itemId);
    }
    function getLastChildIdForEnabledItemOrGetSameId(itemId) {
        return getFirstOrLastChildIdForEnabledItemOrGetSameId(false, itemId);
    }
    function isSearchableKey() {
        return key.length === 1 && NO_WHITESPACE_REGEX.test(key);
    }
    function getItemById(itemId, items) {
        if (itemId === undefined) {
            itemId = sourceItemId;
        }
        if (items === undefined) {
            items = sourceItems;
        }
        return itemsIdsUtils_getItemById(itemId, items);
    }
    function hasChildren(itemId) {
        return getItemById(itemId).items.length > 0;
    }
    function getPrevSiblingId(itemId) {
        return getSiblingId(false, itemId);
    }
    function getNextSiblingId(itemId) {
        return getSiblingId(true, itemId);
    }
    function getLastChildId(itemId) {
        var itemChildren = getItemById(itemId).items;
        return itemChildren[itemChildren.length - 1].id;
    }
    function getSiblings() {
        return isIdZeroLevel(sourceItemId) ?
            sourceItems : getItemById(getDirectParentId(sourceItemId), sourceItems).items;
    }
    function getFirstOrLastChildIdForEnabledItemOrGetSameId(getFirstChild, itemId) {
        if (itemId === undefined) {
            itemId = sourceItemId;
        }
        var item = getItemById(itemId);
        if (hasChildren(itemId) && !item.disabled) {
            return getFirstChild ? getFirstChildId(itemId) : getLastChildId(itemId);
        }
        else {
            return itemId;
        }
    }
    function getSiblingId(next, itemId) {
        if (itemId === undefined) {
            itemId = sourceItemId;
        }
        if (isIdZeroLevel(itemId)) {
            return getDirectSiblingIdForLevelZero(next, itemId, sourceItems.length);
        }
        else {
            var directParentId = getDirectParentId(itemId);
            var shortId = getShortId(itemId);
            var siblingsCount = getItemById(directParentId).items.length;
            return createId(getDirectSiblingIdForLevelZero(next, shortId, siblingsCount), directParentId);
        }
    }
    // #endregion
}

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/hoverDelay.js
/**
 * @hidden
 */
function getHoverOpenDelay(props) {
    if (props.hoverOpenDelay !== undefined) {
        return props.hoverOpenDelay;
    }
    else {
        return props.openOnClick ? 0 : 100;
    }
}
/**
 * @hidden
 */
function getHoverCloseDelay(props) {
    return props.hoverCloseDelay !== undefined ? props.hoverCloseDelay : 100;
}

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/DirectionHolder.js
/**
 * @hidden
 */
var DirectionHolder = /** @class */ (function () {
    function DirectionHolder() {
        // The phase changes in the following sequence:
        // NotInitialized -> Initialized -> NewValueReceived.
        this.phase = 'Initialized';
    }
    DirectionHolder.prototype.getIsDirectionRightToLeft = function () {
        return this.isDirectionRightToLeft;
    };
    DirectionHolder.prototype.setIsDirectionRightToLeft = function (value) {
        this.phase = this.phase === 'NotInitialized' ? 'Initialized' : 'NewValueReceived';
        this.previousIsDirectionRightToLeft = this.isDirectionRightToLeft;
        this.isDirectionRightToLeft = value;
    };
    DirectionHolder.prototype.hasDirectionChanged = function () {
        return this.phase === 'NewValueReceived' ?
            this.previousIsDirectionRightToLeft !== this.isDirectionRightToLeft : false;
    };
    return DirectionHolder;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/utils/MouseOverHandler.js
/**
 * @hidden
 */
var MouseOverHandler = /** @class */ (function () {
    function MouseOverHandler(openOnClick, resetMenu, openItem) {
        this.openOnClick = openOnClick;
        this.resetMenu = resetMenu;
        this.openItem = openItem;
        this.mouseDown = false;
        this.openOnClick = openOnClick;
        this.isMouseOverEnabled = openOnClick ? false : true;
    }
    Object.defineProperty(MouseOverHandler.prototype, "OpenOnClick", {
        set: function (value) {
            if (Boolean(value) !== Boolean(this.openOnClick)) {
                this.mouseDown = false;
                this.isMouseOverEnabled = value ? false : true;
            }
            this.openOnClick = value;
        },
        enumerable: false,
        configurable: true
    });
    MouseOverHandler.prototype.handleItemSelectedViaKeyboard = function () {
        if (this.openOnClick) {
            this.isMouseOverEnabled = false;
            this.resetMenu();
        }
    };
    Object.defineProperty(MouseOverHandler.prototype, "IsMouseOverEnabled", {
        get: function () {
            return this.isMouseOverEnabled;
        },
        enumerable: false,
        configurable: true
    });
    MouseOverHandler.prototype.handleItemMouseDown = function () {
        this.mouseDown = true;
    };
    MouseOverHandler.prototype.handleItemFocus = function () {
        // Keep opening on mouse over upon tabbing
        // and keyboard navigation. However, discard the event
        // upon click because a cycle occurs and the item does not open.
        if (this.openOnClick && !this.mouseDown) {
            this.isMouseOverEnabled = true;
        }
        this.mouseDown = false;
    };
    MouseOverHandler.prototype.handleItemClick = function (itemId, clickedItemIsWithDefaultClose) {
        if (this.openOnClick) {
            if (this.isMouseOverEnabled) {
                if (clickedItemIsWithDefaultClose) {
                    this.isMouseOverEnabled = false;
                    this.resetMenu();
                }
            }
            else {
                this.isMouseOverEnabled = true;
                this.openItem(itemId);
            }
        }
    };
    return MouseOverHandler;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/menu/components/Menu.js
var Menu_extends = (undefined && undefined.__extends) || (function () {
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












var initialItemsIds = {
    focusedItemId: EMPTY_ID,
    hoveredItemId: EMPTY_ID,
    tabbableItemId: ZERO_LEVEL_ZERO_ITEM_ID
};
/**
 * Represents the [KendoReact Menu component]({% slug overview_menu %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    render() {
 *        return (
 *            <Menu>
 *                <MenuItem text="Item1" />
 *                <MenuItem text="Item2">
 *                    <MenuItem text="Item2.1" />
 *                    <MenuItem text="Item2.2" />
 *                </MenuItem>
 *                <MenuItem text="Item3" />
 *            </Menu>
 *        );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Menu = /** @class */ (function (_super) {
    Menu_extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.menuWrapperEl = null;
        _this.guid = (0,main_js_.guid)();
        _this.directionHolder = new DirectionHolder();
        _this.inputItems = [];
        _this.items = [];
        /**
         * Resets the selection and opening of Menu items.
         */
        _this.reset = function () {
            _this.clearItemHoverAndLeaveRequestsIfApplicable();
            _this.setState(initialItemsIds);
        };
        _this.onKeyDown = function (event) {
            // The focusedItemId may be empty when contentRender is used.
            // For example, content with input.
            if (_this.state.focusedItemId !== EMPTY_ID) {
                var currentItem = itemsIdsUtils_getItemById(_this.state.focusedItemId, _this.items);
                var newItemId = getNewItemIdUponKeyboardNavigation(_this.items, currentItem.id, event.keyCode, event.key, _this.props.vertical, _this.directionHolder.getIsDirectionRightToLeft());
                if (currentItem.id !== newItemId) {
                    event.preventDefault();
                    _this.setFocusedItemId(newItemId);
                }
                if ((event.keyCode === main_js_.Keys.enter || event.keyCode === main_js_.Keys.space) && !currentItem.disabled) {
                    _this.mouseOverHandler.handleItemSelectedViaKeyboard();
                    _this.dispatchSelectEventIfWired(event, currentItem.id);
                    if (!event.isDefaultPrevented() && currentItem.items.length === 0 && currentItem.url) {
                        window.location.assign(currentItem.url);
                    }
                }
            }
            if (event.keyCode === main_js_.Keys.esc && _this.props.onClose) {
                _this.props.onClose.call(undefined, event);
            }
        };
        _this.onItemMouseOver = function (itemId) {
            if (_this.mouseOverHandler.IsMouseOverEnabled) {
                // The `over` event can get fired even without actually leaving the item.
                // For example, move the mouse little by little over the item content.
                _this.clearItemHoverAndLeaveRequestsIfApplicable();
                _this.itemHoverRequest = window.setTimeout(function () {
                    _this.setHoveredItemId(itemId);
                    _this.itemHoverRequest = null;
                }, getHoverOpenDelay(_this.props));
            }
        };
        _this.onItemMouseLeave = function (itemId) {
            if (_this.mouseOverHandler.IsMouseOverEnabled && _this.isItemWithDefaultClose(itemId)) {
                // Both the `leave` and `hover` requests are cleared
                // to be defensive and consistent with the `over` handler.
                _this.clearItemHoverAndLeaveRequestsIfApplicable();
                _this.itemLeaveRequest = window.setTimeout(function () {
                    _this.setHoveredItemId(EMPTY_ID);
                    _this.itemLeaveRequest = null;
                }, getHoverCloseDelay(_this.props));
            }
        };
        _this.onItemMouseDown = function () {
            _this.mouseOverHandler.handleItemMouseDown();
        };
        _this.onItemFocus = function (itemId) {
            _this.setFocusedItemId(itemId);
            _this.mouseOverHandler.handleItemFocus();
        };
        _this.onItemClick = function (event, itemId) {
            var item = itemsIdsUtils_getItemById(itemId, _this.items);
            if (!item.disabled) {
                _this.setFocusedItemId(itemId);
                _this.mouseOverHandler.handleItemClick(itemId, _this.isItemWithDefaultClose(itemId));
                _this.dispatchSelectEventIfWired(event, itemId);
                if (!event.isDefaultPrevented() && item.url) {
                    window.location.assign(item.url);
                }
            }
        };
        _this.onItemBlur = function (itemId, event) {
            if (_this.isItemWithDefaultClose(itemId)) {
                _this.setFocusedItemId(EMPTY_ID);
            }
            if (event.relatedTarget && event.relatedTarget.nodeName === 'LI') {
                var activeElementId = event.relatedTarget.getAttribute('id');
                if (activeElementId && activeElementId.includes(_this.guid)) {
                    return;
                }
            }
            if (_this.props.onClose) {
                _this.props.onClose.call(undefined, event);
            }
        };
        _this.getInputItem = function (itemId) {
            return itemsIdsUtils_getItemById(itemId, _this.inputItems);
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.mouseOverHandler = new MouseOverHandler(_this.props.openOnClick, _this.reset, _this.onItemMouseOver);
        _this.state = Object.assign({}, initialItemsIds, { isFirstRender: true });
        return _this;
    }
    Object.defineProperty(Menu.prototype, "element", {
        get: function () {
            return this.menuWrapperEl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    Menu.prototype.render = function () {
        var _this = this;
        this.prepareItems();
        if (!this.state.isFirstRender) {
            this.directionHolder.setIsDirectionRightToLeft(this.checkIsDirectionRightToLeft());
        }
        var lastItemIdToBeOpened = this.state.hoveredItemId ?
            this.state.hoveredItemId :
            this.state.focusedItemId ? getDirectParentId(this.state.focusedItemId) : EMPTY_ID;
        return (index_js_.createElement("div", { onKeyDown: this.onKeyDown, style: this.props.style, className: this.directionHolder.getIsDirectionRightToLeft() ? 'k-rtl' : undefined, ref: function (el) { return _this.menuWrapperEl = el; } },
            index_js_.createElement(MenuItemInternalsList, { className: this.getMenuClassName(), "aria-orientation": this.props.vertical ? 'vertical' : undefined, items: this.items, isMenuVertical: this.props.vertical, isDirectionRightToLeft: this.directionHolder.getIsDirectionRightToLeft(), focusedItemId: this.state.focusedItemId, lastItemIdToBeOpened: lastItemIdToBeOpened, tabbableItemId: this.state.tabbableItemId, itemRender: this.props.itemRender, linkRender: this.props.linkRender, menuGuid: this.guid, onMouseLeave: this.onItemMouseLeave, onMouseOver: this.onItemMouseOver, onMouseDown: this.onItemMouseDown, onFocus: this.onItemFocus, onClick: this.onItemClick, onBlur: this.onItemBlur, onOriginalItemNeeded: this.getInputItem, role: this.props.role })));
    };
    /**
     * @hidden
     */
    Menu.prototype.componentDidMount = function () {
        this.setState({ isFirstRender: false });
    };
    /**
     * @hidden
     */
    Menu.prototype.componentDidUpdate = function (prevProps) {
        // Reset the Menu upon big UI changes
        // to avoid misleading the user and to
        // keep the component consistent.
        if (Boolean(prevProps.vertical) !== Boolean(this.props.vertical) ||
            this.directionHolder.hasDirectionChanged()) {
            this.reset();
        }
        this.mouseOverHandler.OpenOnClick = this.props.openOnClick;
    };
    /**
     * @hidden
     */
    Menu.prototype.componentWillUnmount = function () {
        this.clearItemHoverAndLeaveRequestsIfApplicable();
    };
    Menu.prototype.setFocusedItemId = function (focusedItemId) {
        this.setState(function (prevState) {
            var tabbableItemId = focusedItemId === EMPTY_ID ?
                prevState.tabbableItemId : getRootParentId(focusedItemId);
            var hoveredItemId = focusedItemId === EMPTY_ID ||
                (isIdEmptyOrZeroLevel(prevState.hoveredItemId) && isIdEmptyOrZeroLevel(focusedItemId)) ?
                prevState.hoveredItemId : EMPTY_ID;
            return { hoveredItemId: hoveredItemId, focusedItemId: focusedItemId, tabbableItemId: tabbableItemId };
        });
    };
    Menu.prototype.setHoveredItemId = function (hoveredItemId) {
        this.setState(function (prevState) {
            if (isIdEmptyOrZeroLevel(hoveredItemId) && isIdEmptyOrZeroLevel(prevState.focusedItemId)) {
                return {
                    hoveredItemId: hoveredItemId,
                    focusedItemId: prevState.focusedItemId,
                    tabbableItemId: prevState.tabbableItemId
                };
            }
            else {
                return { hoveredItemId: hoveredItemId, focusedItemId: EMPTY_ID, tabbableItemId: ZERO_LEVEL_ZERO_ITEM_ID };
            }
        });
    };
    Menu.prototype.getMenuClassName = function () {
        return (0,main_js_.classNames)('k-reset', 'k-header', 'k-menu', { 'k-menu-horizontal': !this.props.vertical }, { 'k-menu-vertical': this.props.vertical }, this.props.className);
    };
    Menu.prototype.clearItemHoverAndLeaveRequestsIfApplicable = function () {
        if (this.itemHoverRequest) {
            clearTimeout(this.itemHoverRequest);
            this.itemHoverRequest = null;
        }
        if (this.itemLeaveRequest) {
            clearTimeout(this.itemLeaveRequest);
            this.itemLeaveRequest = null;
        }
    };
    Menu.prototype.isItemWithDefaultClose = function (itemId) {
        return !this.props.customCloseItemIds || this.props.customCloseItemIds.indexOf(itemId) === -1;
    };
    Menu.prototype.checkIsDirectionRightToLeft = function () {
        return Boolean(this.props.dir !== undefined ? this.props.dir === 'rtl' :
            this.menuWrapperEl && getComputedStyle(this.menuWrapperEl).direction === 'rtl');
    };
    Menu.prototype.prepareItems = function () {
        var _a = prepareInputItemsForInternalWork(this.props.items, this.props.children), items = _a.items, inputItems = _a.inputItems;
        this.items = items;
        this.inputItems = inputItems;
    };
    Menu.prototype.dispatchSelectEventIfWired = function (event, itemId) {
        (0,main_js_.dispatchEvent)(this.props.onSelect, event, this, { item: this.getInputItem(itemId), itemId: itemId });
    };
    /**
     * @hidden
     */
    Menu.propTypes = {
        vertical: prop_types_index_js_.bool,
        items: prop_types_index_js_.arrayOf(prop_types_index_js_.object),
        style: prop_types_index_js_.object,
        dir: prop_types_index_js_.string,
        hoverOpenDelay: prop_types_index_js_.number,
        hoverCloseDelay: prop_types_index_js_.number,
        openOnClick: prop_types_index_js_.bool,
        itemRender: prop_types_index_js_.any,
        linkRender: prop_types_index_js_.any,
        customCloseItemIds: prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        onSelect: prop_types_index_js_.func,
        role: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    Menu.defaultProps = { vertical: false };
    return Menu;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/splitter/SplitterPane.js
var SplitterPane_extends = (undefined && undefined.__extends) || (function () {
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
var SplitterPane = /** @class */ (function (_super) {
    SplitterPane_extends(SplitterPane, _super);
    function SplitterPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplitterPane.prototype.render = function () {
        var _a;
        var _b = this.props, id = _b.id, size = _b.size, collapsed = _b.collapsed, overlay = _b.overlay, containsSplitter = _b.containsSplitter, collapsible = _b.collapsible, resizable = _b.resizable, scrollable = _b.scrollable, keepMounted = _b.keepMounted;
        var fixedSize = size && size.length > 0;
        var style = {
            flexBasis: size
        };
        var paneClasses = (0,main_js_.classNames)('k-pane', (_a = {},
            _a['k-hidden'] = collapsed,
            _a['hidden'] = collapsed,
            _a['k-pane-flex'] = containsSplitter,
            _a['k-pane-static'] = !resizable && !collapsible || fixedSize,
            _a['k-scrollable'] = scrollable,
            _a));
        return (index_js_.createElement("div", { id: id, role: 'group', style: style, className: paneClasses },
            !collapsed || keepMounted ? this.props.children : undefined,
            overlay ? index_js_.createElement("div", { className: 'k-splitter-overlay k-overlay' }) : undefined));
    };
    return SplitterPane;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/splitter/messages/index.js
var _a;
/**
 * @hidden
 */
var splitBarLabel = 'splitBarLabel';
/**
 * @hidden
 */
var messages = (_a = {},
    _a[splitBarLabel] = 'split bar',
    _a);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.2.1_@progress+kendo-licensing@1_f4601061072e7c3278720aa16dc3d5d5/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(31650);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/splitter/Splitter.js
var Splitter_extends = (undefined && undefined.__extends) || (function () {
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
var Splitter_assign = (undefined && undefined.__assign) || function () {
    Splitter_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Splitter_assign.apply(this, arguments);
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
var PANE_DEFAULTS = {
    collapsible: false,
    collapsed: false,
    resizable: true,
    scrollable: true
};
/**
 * @hidden
 */
var DOUBLE_CLICK_WAIT_TIME = 150;
/**
 * Represents the [KendoReact Splitter component]({% slug overview_splitter %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    render() {
 *        return (
 *            <div>
 *                <Splitter
 *                    style={{height: 400}}
 *                    orientation={'vertical'}
 *                >
 *                    <div>Pane 1</div>
 *                    <div>Pane 2</div>
 *                    <div>Pane 3</div>
 *                </Splitter>
 *            </div>
 *        );
 *    }
 * }
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Splitter = /** @class */ (function (_super) {
    Splitter_extends(Splitter, _super);
    /**
     * @hidden
     */
    function Splitter(props) {
        var _this = _super.call(this, props) || this;
        _this._container = null;
        _this.validatePanes = function (panesOptions) {
            var withoutSize = panesOptions.filter(function (pane) { return pane.size === undefined; });
            if (!withoutSize.length) {
                throw new Error('The Splitter should have at least one pane without a set size.');
            }
        };
        _this.mapPaneOptions = function (panes, panesContent) {
            var orientation = _this.orientation;
            var _a = _this.state, dragIndex = _a.dragIndex, isDragging = _a.isDragging;
            var paneOptions = [];
            for (var index = 0; index < panesContent.length; index++) {
                var containsSplitter = false;
                var paneContent = panesContent[index];
                if (index_js_.isValidElement(paneContent)) {
                    containsSplitter = paneContent.type.displayName === 'Splitter';
                }
                var overlay = false;
                if (isDragging && dragIndex !== undefined) {
                    overlay = dragIndex === index || dragIndex + 1 === index;
                }
                paneOptions.push(Splitter_assign(Splitter_assign(Splitter_assign({}, PANE_DEFAULTS), { orientation: orientation, containsSplitter: containsSplitter, overlay: overlay }), (panes || [])[index]));
            }
            return paneOptions;
        };
        _this.mapSplitterPanes = function (panes, panesContent) {
            var ariaLabel = (0,index_mjs_.provideLocalizationService)(_this).toLanguageString(splitBarLabel, messages[splitBarLabel]);
            return panes.map(function (pane, index) {
                var splitterBar;
                var paneKey = index * 2;
                var barKey = paneKey + 1;
                if (index + 1 < panes.length) {
                    var next = panes[index + 1];
                    splitterBar = (index_js_.createElement(SplitterBar, { key: barKey, index: index, orientation: pane.orientation, prev: pane, next: next, ariaLabel: ariaLabel, onDrag: _this.onBarDragResize, onToggle: _this.onBarToggle, onKeyboardResize: _this.onBarKeyboardResize, isRtl: _this.isRtl }));
                }
                var splitterPane = (index_js_.createElement(SplitterPane, Splitter_assign({ key: paneKey }, pane), panesContent[index]));
                return [splitterPane, splitterBar];
            });
        };
        _this.onBarToggle = function (index, event) {
            var panesOptions = _this.panesOptions(_this.panesContent);
            var updatedState = panesOptions.map(function (pane, idx) {
                var paneProps = _this.getPaneProps(pane);
                if (idx === index) {
                    return Splitter_assign(Splitter_assign({}, paneProps), { collapsed: !pane.collapsed });
                }
                else {
                    return Splitter_assign({}, paneProps);
                }
            });
            if (_this.props.onChange) {
                _this.props.onChange({
                    newState: updatedState,
                    isLast: true,
                    nativeEvent: event
                });
            }
        };
        _this.onBarDragResize = function (event, barElement, index, isFirst, isLast) {
            var time = new Date().getTime();
            var pageX = event.pageX, pageY = event.pageY;
            var _a = _this.surroudingPanes(barElement), prevElement = _a.prevElement, nextElement = _a.nextElement;
            if (!prevElement || !nextElement) {
                return;
            }
            if (isFirst) {
                _this.setState({
                    isDragging: true,
                    dragIndex: index,
                    startTime: time,
                    originalX: pageX,
                    originalY: pageY,
                    originalPrevSize: _this.elementSize(prevElement),
                    originalNextSize: _this.elementSize(nextElement)
                });
                return;
            }
            var _b = _this.state, originalPrevSize = _b.originalPrevSize, originalNextSize = _b.originalNextSize, startTime = _b.startTime, originalX = _b.originalX, originalY = _b.originalY;
            if (!isFirst && time - startTime < DOUBLE_CLICK_WAIT_TIME) {
                if (isLast) {
                    _this.resetDragState();
                }
                return;
            }
            var delta;
            if (_this.orientation === 'vertical') {
                delta = pageY - originalY;
            }
            else if (_this.isRtl) {
                delta = originalX - pageX;
            }
            else {
                delta = pageX - originalX;
            }
            _this.resize(index, index + 1, originalPrevSize, originalNextSize, delta, isLast, event);
            if (isLast) {
                _this.resetDragState();
            }
        };
        _this.onBarKeyboardResize = function (barElement, index, delta, event) {
            var _a = _this.surroudingPanes(barElement), prevElement = _a.prevElement, nextElement = _a.nextElement;
            var originalPrevSize = _this.elementSize(prevElement);
            var originalNextSize = _this.elementSize(nextElement);
            _this.resize(index, index + 1, originalPrevSize, originalNextSize, delta, true, event);
        };
        _this.containerSize = function () {
            if (!_this._container) {
                return 0;
            }
            return _this.elementSize(_this._container, true);
        };
        _this.panesOptions = function (panesContent) {
            return _this.mapPaneOptions(_this.panes, panesContent);
        };
        _this.elementSize = function (el, isContainer) {
            var sizeType = isContainer ? 'client' : 'offset';
            if (_this.orientation === 'vertical') {
                return el["".concat(sizeType, "Height")];
            }
            else {
                return el["".concat(sizeType, "Width")];
            }
        };
        _this.clamp = function (min, max, v) { return Math.min(max, Math.max(min, v)); };
        _this.fixedSize = function (size) { return size && size.length > 0; };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = {
            isDragging: false,
            dragIndex: undefined,
            startTime: 0,
            originalX: 0,
            originalY: 0,
            originalPrevSize: 0,
            originalNextSize: 0,
            panes: props.defaultPanes || []
        };
        return _this;
    }
    Object.defineProperty(Splitter.prototype, "isControlledState", {
        get: function () {
            return this.props.panes !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Splitter.prototype, "panes", {
        get: function () {
            return this.panesDuringOnChange !== undefined ?
                this.panesDuringOnChange :
                (this.isControlledState ? this.props.panes : this.state.panes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Splitter.prototype, "orientation", {
        get: function () {
            return this.props.orientation || 'horizontal';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Splitter.prototype, "isRtl", {
        get: function () {
            return this._container && (getComputedStyle(this._container).direction === 'rtl') || false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Splitter.prototype, "panesContent", {
        get: function () {
            return index_js_.Children.toArray(this.props.children).filter(function (c) { return c; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    Splitter.prototype.render = function () {
        var _this = this;
        var panesContent = this.panesContent;
        var panesOptions = this.panesOptions(panesContent);
        var className = (0,main_js_.classNames)('k-widget', 'k-splitter', 'k-splitter-flex', "k-splitter-".concat(this.orientation), this.props.className);
        this.validatePanes(panesOptions);
        return (index_js_.createElement("div", { style: this.props.style, ref: function (ref) { return _this._container = ref; }, className: className }, this.mapSplitterPanes(panesOptions, panesContent)));
    };
    Splitter.prototype.surroudingPanes = function (barElement) {
        return {
            prevElement: barElement.previousElementSibling,
            nextElement: barElement.nextElementSibling
        };
    };
    Splitter.prototype.isPercent = function (size) {
        return /%$/.test(size);
    };
    Splitter.prototype.toPixels = function (size, splitterSize) {
        var result = parseInt(size, 10);
        if (this.isPercent(size)) {
            result = (splitterSize * result / 100);
        }
        return result;
    };
    Splitter.prototype.resetDragState = function () {
        this.setState({
            isDragging: false,
            dragIndex: undefined,
            startTime: 0,
            originalX: 0,
            originalY: 0,
            originalPrevSize: 0,
            originalNextSize: 0
        });
    };
    Splitter.prototype.resize = function (prevIndex, nextIndex, originalPrevSize, originalNextSize, delta, isLast, event) {
        var _this = this;
        var panesOptions = this.panesOptions(this.panesContent);
        var prevOptions = panesOptions[prevIndex];
        var nextOptions = panesOptions[nextIndex];
        var total = originalPrevSize + originalNextSize;
        var splitterSize = this.containerSize();
        var px = function (s) { return _this.toPixels(s, splitterSize); };
        var prevDragState = {
            index: prevIndex,
            initialSize: originalPrevSize,
            min: px(prevOptions.min) || total - px(nextOptions.max) || 0,
            max: px(prevOptions.max) || total - px(nextOptions.min) || total
        };
        var nextDragState = {
            index: nextIndex,
            initialSize: originalNextSize,
            min: px(nextOptions.min) || total - px(prevOptions.max) || 0,
            max: px(nextOptions.max) || total - px(prevOptions.min) || total
        };
        var resize = function (paneState, change) {
            var pane = panesOptions[paneState.index];
            var newSize = _this.clamp(paneState.min, paneState.max, paneState.initialSize + change);
            if (_this.isPercent(pane.size || '')) {
                return 100 * newSize / splitterSize + '%';
            }
            else {
                return newSize + 'px';
            }
        };
        var prevSize;
        var nextSize;
        if (this.fixedSize(prevOptions.size) && this.fixedSize(nextOptions.size)) {
            prevSize = resize(prevDragState, delta);
            nextSize = resize(nextDragState, -delta);
        }
        else if (nextOptions.collapsible || this.fixedSize(nextOptions.size)) {
            nextSize = resize(nextDragState, -delta);
        }
        else {
            prevSize = resize(prevDragState, delta);
        }
        var updatedState = panesOptions.map(function (pane, idx) {
            var paneProps = _this.getPaneProps(pane);
            if (idx === prevIndex) {
                return Splitter_assign(Splitter_assign({}, paneProps), { size: prevSize });
            }
            else if (idx === nextIndex) {
                return Splitter_assign(Splitter_assign({}, paneProps), { size: nextSize });
            }
            else {
                return Splitter_assign({}, paneProps);
            }
        });
        this.panesDuringOnChange = updatedState;
        if (!this.isControlledState) {
            this.setState({
                panes: updatedState
            });
        }
        if (this.props.onChange) {
            this.props.onChange({
                newState: updatedState,
                isLast: isLast,
                nativeEvent: event
            });
        }
        this.panesDuringOnChange = undefined;
    };
    Splitter.prototype.getPaneProps = function (pane) {
        var orientation = pane.orientation, overlay = pane.overlay, containsSplitter = pane.containsSplitter, others = __rest(pane, ["orientation", "overlay", "containsSplitter"]);
        return others;
    };
    /**
     * @hidden
     */
    Splitter.displayName = 'Splitter';
    return Splitter;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/interfaces/Enums.js
var avatarType;
(function (avatarType) {
    avatarType["TEXT"] = "text";
    avatarType["IMAGE"] = "image";
    avatarType["ICON"] = "icon";
})(avatarType || (avatarType = {}));
var cardOrientation;
(function (cardOrientation) {
    cardOrientation["HORIZONTAL"] = "horizontal";
    cardOrientation["VERTICAL"] = "vertical";
})(cardOrientation || (cardOrientation = {}));
var cardType;
(function (cardType) {
    cardType["DEFAULT"] = "default";
    cardType["primary"] = "primary";
    cardType["INFO"] = "info";
    cardType["SUCCESS"] = "success";
    cardType["WARNING"] = "warning";
    cardType["ERROR"] = "error";
})(cardType || (cardType = {}));
var cardActionsLayout;
(function (cardActionsLayout) {
    cardActionsLayout["START"] = "start";
    cardActionsLayout["CENTER"] = "center";
    cardActionsLayout["END"] = "end";
    cardActionsLayout["STRETCHED"] = "stretched";
})(cardActionsLayout || (cardActionsLayout = {}));

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/Card.js
var Card_assign = (undefined && undefined.__assign) || function () {
    Card_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Card_assign.apply(this, arguments);
};
var Card_rest = (undefined && undefined.__rest) || function (s, e) {
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







var Card = index_js_.forwardRef(function (props, ref) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var children = props.children, dir = props.dir, style = props.style, className = props.className, type = props.type, orientation = props.orientation, customProps = Card_rest(props, ["children", "dir", "style", "className", "type", "orientation"]);
    var target = index_js_.useRef(null);
    var chipRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: chipRef.current,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("div", Card_assign({ dir: dir, style: style, ref: chipRef, className: (0,main_js_.classNames)('k-card', className, (_a = {}, _a["k-card-".concat(type)] = type !== cardType.DEFAULT, _a), orientation !== cardOrientation.HORIZONTAL ? 'k-card-vertical' : 'k-card-horizontal') }, customProps), children));
});
Card.displayName = 'KendoReactCard';
Card.propTypes = {
    children: prop_types_index_js_.node,
    className: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    orientation: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
    style: prop_types_index_js_.object,
    type: prop_types_index_js_.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error'])
};
Card.defaultProps = {
    type: cardType.DEFAULT,
    orientation: cardOrientation.VERTICAL
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardHeader.js



var CardHeader = function (props) {
    return (index_js_.createElement("div", { style: props.style, className: (0,main_js_.classNames)('k-card-header', props.className) }, props.children));
};
CardHeader.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardTitle.js



var CardTitle = function (props) {
    return (index_js_.createElement("div", { style: props.style, className: (0,main_js_.classNames)('k-card-title', props.className) }, props.children));
};
CardTitle.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardBody.js



var CardBody = function (props) {
    return (index_js_.createElement("div", { style: props.style, className: (0,main_js_.classNames)('k-card-body', props.className) }, props.children));
};
CardBody.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardActions.js
var CardActions_assign = (undefined && undefined.__assign) || function () {
    CardActions_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CardActions_assign.apply(this, arguments);
};




var CardActions = function (props) {
    var combinedProps = CardActions_assign({ layout: cardActionsLayout.START, orientation: cardOrientation.HORIZONTAL }, props);
    return (index_js_.createElement("div", { style: combinedProps.style, className: (0,main_js_.classNames)('k-card-actions', combinedProps.className, "k-card-actions-".concat(combinedProps.layout), combinedProps.orientation !== cardOrientation.VERTICAL ? 'k-card-actions-horizontal' : 'k-card-actions-vertical') }, combinedProps.children));
};
CardActions.propTypes = {
    layout: prop_types_index_js_.oneOf(['stretched', 'start', 'center', 'end']),
    orientation: prop_types_index_js_.oneOf(['horizontal', 'vertical'])
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardImage.js
var CardImage_assign = (undefined && undefined.__assign) || function () {
    CardImage_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CardImage_assign.apply(this, arguments);
};



var CardImage = function (props) {
    var combinedProps = CardImage_assign({ src: '' }, props);
    return (index_js_.createElement("img", { style: combinedProps.style, className: (0,main_js_.classNames)('k-card-image', combinedProps.className), src: combinedProps.src, alt: combinedProps.alt }));
};
CardImage.propTypes = {
    className: prop_types_index_js_.string,
    src: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardSubtitle.js



var CardSubtitle = function (props) {
    return (index_js_.createElement("div", { style: props.style, className: (0,main_js_.classNames)('k-card-subtitle', props.className) }, props.children));
};
CardSubtitle.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/CardFooter.js



var CardFooter = function (props) {
    return (index_js_.createElement("div", { style: props.style, className: (0,main_js_.classNames)('k-card-footer', props.className) }, props.children));
};
CardFooter.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/card/Avatar.js
var Avatar_assign = (undefined && undefined.__assign) || function () {
    Avatar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Avatar_assign.apply(this, arguments);
};






var Avatar = function (props) {
    var _a;
    var combinedProps = Avatar_assign({ type: avatarType.TEXT, size: 'medium', rounded: 'full', fillMode: 'solid', themeColor: 'primary' }, props);
    (0,main_js_.validatePackage)(packageMetadata);
    return (index_js_.createElement("div", { style: combinedProps.style, className: (0,main_js_.classNames)('k-avatar', (_a = {},
            _a['k-avatar-bordered'] = combinedProps.border,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[combinedProps.rounded] || combinedProps.rounded)] = combinedProps.rounded,
            _a["k-avatar-".concat(main_js_.kendoThemeMaps.sizeMap[combinedProps.size] || combinedProps.size)] = combinedProps.size,
            _a["k-avatar-".concat(combinedProps.fillMode)] = combinedProps.fillMode,
            _a["k-avatar-".concat(combinedProps.fillMode, "-").concat(combinedProps.themeColor)] = Boolean(combinedProps.fillMode && combinedProps.themeColor),
            _a), combinedProps.className) },
        index_js_.createElement("span", { className: "k-avatar-".concat(combinedProps.type) }, combinedProps.children)));
};
Avatar.propTypes = {
    className: prop_types_index_js_.string,
    type: prop_types_index_js_.oneOf(['text', 'image', 'icon']),
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'solid', 'outline']),
    /* eslint-disable max-len */
    themeColor: prop_types_index_js_.oneOf([null, 'base', 'dark', 'error', 'info', 'inverse', 'inverse', 'light', 'primary', 'secondary', 'success', 'tertiary', 'warning'])
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/drawer/context/DrawerContext.js

/**
 * @hidden
 */
var defaultContext = {
    animation: true,
    expanded: false,
    mode: 'overlay',
    position: 'start',
    mini: false,
    dir: 'ltr',
    width: 240,
    miniWidth: 50
};
/** @hidden */
var DrawerContext = index_js_.createContext(defaultContext);

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/drawer/DrawerItem.js
var DrawerItem_assign = (undefined && undefined.__assign) || function () {
    DrawerItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DrawerItem_assign.apply(this, arguments);
};
var DrawerItem_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the [KendoReact Drawer component]({% slug overview_drawer %}).
 *
 * @example
 * ```jsx
 *    const App = () => {
 *      const [stateVisible, setStateVisible] = React.useState(true);
 *      const handleClick = () => { setStateVisible(prevState => !prevState); };
 *
 *      return (
 *        <Drawer expanded={stateVisible} mode={'push'}>
 *            <DrawerNavigation>
 *                <DrawerItem text="Inbox" icon="k-i-inbox" />
 *                <DrawerItem separator={true} />
 *                <DrawerItem text="Notifications" icon="k-i-bell" disabled={true}/>
 *                <DrawerItem text="Calendar" icon="k-i-calendar"/>
 *                <DrawerItem separator={true} />
 *                <DrawerItem text="Attachments" icon="k-i-hyperlink-email" selected={true}/>
 *                <DrawerItem text="Favourites" icon="k-i-star-outline"/>
 *            </DrawerNavigation>
 *            <DrawerContent><button className="k-button" onClick={handleClick}>Toggle the drawer state</button></DrawerContent>
 *        </Drawer>
 *      );
 *    };
 *
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var DrawerItem = index_js_.forwardRef(function (props, target) {
    var className = props.className, style = props.style, text = props.text, icon = props.icon, svgIcon = props.svgIcon, separator = props.separator, disabled = props.disabled, selected = props.selected, onSelect = props.onSelect, index = props.index, tabIndex = props.tabIndex, children = props.children, others = DrawerItem_rest(props, ["className", "style", "text", "icon", "svgIcon", "separator", "disabled", "selected", "onSelect", "index", "tabIndex", "children"]);
    var _a = index_js_.useContext(DrawerContext), expanded = _a.expanded, mini = _a.mini, item = _a.item;
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current,
        focus: focusElement,
        props: props
    }); });
    var itemClassNames = (0,main_js_.classNames)('k-drawer-item', {
        'k-selected': selected,
        'k-disabled': disabled
    }, className);
    var handleClick = index_js_.useCallback(function (event) {
        if (onSelect && !disabled) {
            var handle = {
                element: elementRef.current,
                focus: focusElement,
                props: props
            };
            onSelect(handle, index, event);
        }
    }, [onSelect, index, disabled]);
    var drawerItemContent = (index_js_.createElement(index_js_.Fragment, null,
        (icon || svgIcon) && index_js_.createElement(main_js_.IconWrap, { name: icon ? (0,main_js_.toIconName)(icon) : icon, icon: svgIcon }),
        !expanded && mini ? null : index_js_.createElement("span", { className: 'k-item-text' }, text)));
    return (separator
        ? index_js_.createElement("li", { className: 'k-drawer-item k-drawer-separator', role: "separator" })
        : (index_js_.createElement("li", DrawerItem_assign({ ref: elementRef, className: itemClassNames, style: style, role: "menuitem", "aria-label": text, "aria-disabled": disabled, onClick: handleClick, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled) }, others), !item ? drawerItemContent : children)));
});
DrawerItem.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    text: prop_types_index_js_.string,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    separator: prop_types_index_js_.bool,
    selected: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    targetItem: prop_types_index_js_.any
};
DrawerItem.displayName = 'KendoDrawerItem';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/drawer/DrawerNavigation.js
var DrawerNavigation_assign = (undefined && undefined.__assign) || function () {
    DrawerNavigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DrawerNavigation_assign.apply(this, arguments);
};







/**
 * @hidden
 */
var DEFAULT_EXPANDED_WIDTH = 240;
/**
 * @hidden
 */
var DEFAULT_MINI_WIDTH = 50;
/**
 * @hidden
 */
var DEFAULT_ANIMATION = { type: 'slide', duration: 200 };
/**
 * @hidden
 */
var NO_ANIMATION = { type: 'slide', duration: 0 };
/**
 * Represents the [KendoReact Drawer component]({% slug overview_drawer %}).
 *
 * @example
 * ```jsx
 *   const App = () => {
 *       const [expanded, setExpanded] = React.useState(true);
 *       const handleClick = () => setExpanded(prevState => !prevState);
 *
 *       return (
 *           <Drawer expanded={expanded} position='start' mode='push'>
 *               <DrawerNavigation>
 *                   <ul className="k-drawer-items">
 *                       <li className="k-drawer-item k-selected">
 *                           <span className="k-item-text">Home</span>
 *                       </li>
 *                       <li className="k-drawer-item">
 *                           <span className="k-item-text">Products</span>
 *                       </li>
 *                       <li className="k-drawer-item">
 *                           <span className="k-item-text">About</span>
 *                       </li>
 *                   </ul>
 *               </DrawerNavigation>
 *               <DrawerContent>
 *                   <button className="k-button" onClick={handleClick}>Toggle the drawer state</button>
 *               </DrawerContent>
 *           </Drawer>
 *       );
 *   };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var DrawerNavigation = index_js_.forwardRef(function (props, target) {
    var children = props.children, className = props.className, style = props.style;
    (0,main_js_.validatePackage)(packageMetadata);
    var showLicenseWatermark = (0,main_js_.shouldShowValidationUI)(packageMetadata);
    var _a = index_js_.useContext(DrawerContext), animation = _a.animation, expanded = _a.expanded, mode = _a.mode, position = _a.position, onOverlayClick = _a.onOverlayClick, mini = _a.mini, dir = _a.dir, width = _a.width, miniWidth = _a.miniWidth, items = _a.items, item = _a.item, onSelect = _a.onSelect;
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var customSettings = typeof animation !== 'boolean' ? animation : animation === false ? NO_ANIMATION : DEFAULT_ANIMATION;
    var navWidth = width ? width : DEFAULT_EXPANDED_WIDTH;
    var navMiniWidth = miniWidth ? miniWidth : DEFAULT_MINI_WIDTH;
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); });
    var navigationClassNames = index_js_.useMemo(function () { return 'k-widget k-drawer ' + (0,main_js_.classNames)({
        'k-drawer-start': position === 'start',
        'k-drawer-end': position === 'end'
    }, className); }, [position]);
    var expandPush = {
        opacity: 1,
        flexBasis: navWidth,
        WebkitTransition: 'all ' + (customSettings && customSettings.duration) + 'ms',
        transition: 'all ' + (customSettings && customSettings.duration) + 'ms'
    };
    var expandOverlay = {
        opacity: 1,
        transform: 'translateX(0px)',
        WebkitTransition: 'all ' + (customSettings && customSettings.duration) + 'ms',
        transition: 'all ' + (customSettings && customSettings.duration) + 'ms'
    };
    var collapsePush = {
        opacity: !mini ? 0 : 1,
        flexBasis: !mini ? 0 : navMiniWidth,
        WebkitTransition: 'all ' + (customSettings && customSettings.duration) + 'ms',
        transition: 'all ' + (customSettings && customSettings.duration) + 'ms'
    };
    var collapseOverlay = {
        opacity: 0,
        transform: 'translateX(-100%)',
        WebkitTransition: 'all ' + (customSettings && customSettings.duration) + 'ms',
        transition: 'all ' + (customSettings && customSettings.duration) + 'ms'
    };
    var collapseOverlayRtl = {
        opacity: 0,
        transform: 'translateX(100%)',
        WebkitTransition: 'all ' + (customSettings && customSettings.duration) + 'ms',
        transition: 'all ' + (customSettings && customSettings.duration) + 'ms'
    };
    var collapseOverlayMini = {
        transform: 'translateX(0%)',
        WebkitTransitionDuration: (customSettings && customSettings.duration) + 'ms',
        transitionDuration: (customSettings && customSettings.duration) + 'ms'
    };
    var drawerAnimation = expanded ?
        mode === 'push' ? expandPush : expandOverlay :
        mode === 'push' ? collapsePush :
            (dir === 'ltr' && position === 'start') || (dir === 'rtl' && position === 'end') ?
                mini ? collapseOverlayMini : collapseOverlay :
                mini ? collapseOverlayMini : collapseOverlayRtl;
    var drawerItems = (items && (index_js_.createElement("ul", { className: 'k-drawer-items', role: "menubar", "aria-label": "drawer-list", "aria-expanded": expanded }, items
        .map(function (element, index) {
        var drawerItemProps = DrawerNavigation_assign(DrawerNavigation_assign({ index: index }, element), { onSelect: onSelect });
        var ItemComp = item || DrawerItem;
        return (index_js_.createElement(ItemComp, DrawerNavigation_assign({ key: index }, drawerItemProps)));
    }))));
    var drawerNavigation = (index_js_.createElement("div", { style: customSettings ? DrawerNavigation_assign(DrawerNavigation_assign({}, drawerAnimation), style) : style, className: navigationClassNames, ref: elementRef },
        index_js_.createElement("div", { className: 'k-drawer-wrapper', style: !expanded && mini && mode === 'overlay' ? { width: navMiniWidth } : { width: navWidth } }, drawerItems || children),
        showLicenseWatermark && index_js_.createElement(main_js_.WatermarkOverlay, null)));
    return (mode === 'overlay' ?
        (index_js_.createElement(index_js_.Fragment, null,
            expanded && index_js_.createElement("div", { className: "k-overlay", onClick: onOverlayClick }),
            drawerNavigation))
        : drawerNavigation);
});
DrawerNavigation.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    item: prop_types_index_js_.any,
    tabIndex: prop_types_index_js_.number
};
DrawerNavigation.displayName = 'KendoDrawerNavigation';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/drawer/Drawer.js
var _this = undefined;







/**
 * Represents the [KendoReact Drawer component]({% slug overview_drawer %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   const items = [
 *       { text: 'Inbox', icon: 'k-i-inbox', selected: true },
 *       { separator: true },
 *       { text: 'Notifications', icon: 'k-i-bell', disabled: true },
 *       { text: 'Calendar', icon: 'k-i-calendar' },
 *       { separator: true },
 *       { text: 'Attachments', icon: 'k-i-hyperlink-email' },
 *       { text: 'Favourites', icon: 'k-i-star-outline' }
 *   ];
 *
 *   const [expanded, setExpanded] = React.useState(true);
 *   const handleClick = () => setExpanded(prevState => !prevState);
 *
 *   return (
 *       <Drawer expanded={expanded} position='start' mode='push' items={items}>
 *           <DrawerContent>
 *               <button className="k-button" onClick={handleClick}>Toggle the drawer state</button>
 *           </DrawerContent>
 *       </Drawer>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Drawer = index_js_.forwardRef(function (props, target) {
    (0,main_js_.validatePackage)(packageMetadata);
    var expanded = props.expanded, mode = props.mode, position = props.position, className = props.className, children = props.children, style = props.style, animation = props.animation, mini = props.mini, width = props.width, miniWidth = props.miniWidth, items = props.items, item = props.item, tabIndex = props.tabIndex, onOverlayClick = props.onOverlayClick, onSelect = props.onSelect;
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); });
    var handleSelect = index_js_.useCallback(function (itemTarget, itemIndex, event) {
        if (items && onSelect) {
            var ev = {
                itemTarget: itemTarget,
                itemIndex: itemIndex,
                syntheticEvent: event,
                nativeEvent: event && event.nativeEvent,
                target: _this
            };
            onSelect.call(undefined, ev);
        }
    }, [items, onSelect]);
    var dir = (0,main_js_.useDir)(elementRef, props.dir);
    var drawerClassNames = (0,main_js_.classNames)({
        'k-drawer-container': true,
        'k-drawer-expanded': expanded,
        'k-drawer-overlay': mode === 'overlay',
        'k-drawer-push': mode === 'push',
        'k-drawer-mini': mini
    }, className);
    return (index_js_.createElement(DrawerContext.Provider, { value: {
            animation: animation,
            expanded: expanded,
            mode: mode,
            position: position,
            mini: mini,
            dir: dir,
            items: items,
            item: item,
            width: width,
            miniWidth: miniWidth,
            onOverlayClick: onOverlayClick,
            onSelect: handleSelect
        } },
        index_js_.createElement("div", { className: drawerClassNames, ref: elementRef, dir: dir, style: style, tabIndex: tabIndex },
            items && index_js_.createElement(DrawerNavigation, null),
            children)));
});
Drawer.propTypes = {
    animation: prop_types_index_js_.any,
    expanded: prop_types_index_js_.bool,
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    mode: prop_types_index_js_.string,
    position: prop_types_index_js_.string,
    mini: prop_types_index_js_.bool,
    style: prop_types_index_js_.object,
    tabIndex: prop_types_index_js_.number,
    width: prop_types_index_js_.number,
    miniWidth: prop_types_index_js_.number,
    selected: prop_types_index_js_.number,
    onSelect: prop_types_index_js_.func,
    onOverlayClick: prop_types_index_js_.func
};
var defaultProps = {
    animation: true,
    expanded: false,
    mode: 'overlay',
    position: 'start',
    mini: false,
    dir: 'ltr',
    width: 240,
    miniWidth: 50
};
Drawer.defaultProps = defaultProps;
Drawer.displayName = 'KendoDrawer';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/drawer/DrawerContent.js



/**
 * Represents the [KendoReact Drawer component]({% slug overview_drawer %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   const items = [
 *       { text: 'Inbox', icon: 'k-i-inbox', selected: true },
 *       { separator: true },
 *       { text: 'Notifications', icon: 'k-i-bell', disabled: true },
 *       { text: 'Calendar', icon: 'k-i-calendar' },
 *       { separator: true },
 *       { text: 'Attachments', icon: 'k-i-hyperlink-email' },
 *       { text: 'Favourites', icon: 'k-i-star-outline' }
 *   ];
 *
 *   const [expanded, setExpanded] = React.useState(true);
 *   const handleClick = () => setExpanded(prevState => !prevState);
 *
 *   return (
 *       <Drawer expanded={expanded} position='start' mode='push' items={items}>
 *           <DrawerContent>
 *               <button className="k-button" onClick={handleClick}>Toggle the drawer state</button>
 *           </DrawerContent>
 *       </Drawer>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var DrawerContent = index_js_.forwardRef(function (props, target) {
    var children = props.children, className = props.className, style = props.style;
    var elementRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current
    }); });
    var contentClassNames = (0,main_js_.classNames)({
        'k-drawer-content': true
    }, className);
    return (index_js_.createElement("div", { className: contentClassNames, style: style, ref: elementRef }, children));
});
DrawerContent.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object
};
DrawerContent.displayName = 'KendoDrawerContent';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stepper/context/StepperContext.js

/**
 * @hidden
 */
var StepperContext_defaultContext = {
    linear: false,
    mode: 'steps',
    value: 0
};
/** @hidden */
var StepperContext = index_js_.createContext(StepperContext_defaultContext);

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stepper/contants.js
/**
 * @hidden
 */
var DEFAULT_ANIMATION_DURATION = 400;
/**
 * @hidden
 */
var contants_NO_ANIMATION = 0;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stepper/messages/index.js
var messages_a;
/**
 * @hidden
 */
var optionalText = 'stepper.optionalText';
/**
 * @hidden
 */
var progBarAriaLabel = 'stepper.progBarAriaLabel';
/**
 * @hidden
 */
var messages_messages = (messages_a = {},
    messages_a[optionalText] = '(Optional)',
    messages_a[progBarAriaLabel] = 'progressbar',
    messages_a);

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stepper/Step.js
var Step_assign = (undefined && undefined.__assign) || function () {
    Step_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Step_assign.apply(this, arguments);
};
var Step_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the [KendoReact Step component]({% slug overview_stepper %}).
 *
 * @example
 * ```jsx
 * const steps = [
 *    { label: 'Step 1' },
 *    { label: 'Step 2' },
 *    { label: 'Step 3', optional: true }
 * ];
 *
 * const App = () => {
 *   return (
 *       <Stepper items={steps} value={1}/>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Step = index_js_.forwardRef(function (props, target) {
    var 
    // content
    children = props.children, className = props.className, current = props.current, disabled = props.disabled, focused = props.focused, icon = props.icon, svgIcon = props.svgIcon, index = props.index, isValid = props.isValid, label = props.label, optional = props.optional, style = props.style, tabIndex = props.tabIndex, text = props.text, others = Step_rest(props, ["children", "className", "current", "disabled", "focused", "icon", "svgIcon", "index", "isValid", "label", "optional", "style", "tabIndex", "text"]);
    var _a = index_js_.useContext(StepperContext), animationDuration = _a.animationDuration, isVertical = _a.isVertical, item = _a.item, linear = _a.linear, mode = _a.mode, numOfSteps = _a.numOfSteps, value = _a.value, onChange = _a.onChange, onFocus = _a.onFocus, successIcon = _a.successIcon, errorIcon = _a.errorIcon, successSVGIcon = _a.successSVGIcon, errorSVGIcon = _a.errorSVGIcon;
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
    var allowClick = !linear || (index === value - 1 || index === value || index === value + 1);
    var isInLabel = mode === 'labels' || (Boolean(icon) && Boolean(label));
    var localizationService = (0,index_mjs_.useLocalization)();
    var localizeMessage = function (message) {
        return localizationService.toLanguageString(message, messages_messages[message]);
    };
    var optionalMessage = localizeMessage(optionalText);
    var progressAnimation = typeof animationDuration === 'number'
        ? animationDuration
        : animationDuration !== false
            ? DEFAULT_ANIMATION_DURATION
            : contants_NO_ANIMATION;
    var handleClick = index_js_.useCallback(function (event) {
        if (onChange && !disabled) {
            (0,main_js_.dispatchEvent)(onChange, event, getImperativeHandle(), { value: index });
        }
    }, [onChange, value, disabled]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, event, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled]);
    var itemClassNames = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-step', {
        'k-step-first': index === 0,
        'k-step-last': numOfSteps && index === numOfSteps - 1,
        'k-step-done': index < value,
        'k-step-current': current,
        'k-step-optional': optional,
        'k-step-error': isValid !== undefined && !isValid,
        'k-step-success': isValid
    }, {
        'k-disabled': disabled,
        'k-focus': focused
    }, className); }, [index, numOfSteps, value, current, optional, disabled, focused, isValid, className]);
    var itemStyles = index_js_.useMemo(function () { return (Step_assign({ maxWidth: !isVertical ? "calc(100% / ".concat(numOfSteps, ")") : undefined, maxHeight: isVertical ? "calc(100% / ".concat(numOfSteps, ")") : undefined, pointerEvents: !allowClick ? 'none' : undefined }, style)); }, [isVertical, numOfSteps, style, allowClick]);
    var validationIconCustom = isValid ? successIcon : errorIcon;
    var validationIcons = validationIconCustom ? (index_js_.createElement("span", { className: 'k-step-indicator-icon ' + validationIconCustom, "aria-hidden": "true" })) : (index_js_.createElement(main_js_.IconWrap, { className: 'k-step-indicator-icon', name: isValid ? 'check-circle' : 'exclamation-circle', icon: isValid ? (successSVGIcon || index_es_js_.checkOutlineIcon) : (errorSVGIcon || index_es_js_.exclamationCircleIcon) }));
    var stepIndicator = (index_js_.createElement(index_js_.Fragment, null, mode !== 'labels' ?
        index_js_.createElement("span", { className: "k-step-indicator", "aria-hidden": true, style: { transitionDuration: progressAnimation + 'ms' } }, (icon || svgIcon)
            ? !isInLabel && isValid !== undefined
                ? validationIcons
                : index_js_.createElement(main_js_.IconWrap, { className: 'k-step-indicator-icon', name: icon ? (0,main_js_.toIconName)(icon) : icon, icon: svgIcon })
            : isValid !== undefined
                ? validationIcons
                : index_js_.createElement("span", { className: "k-step-indicator-text" }, text ? text : index + 1)) :
        null));
    var stepLabel = (index_js_.createElement("span", { className: "k-step-label" },
        label && index_js_.createElement("span", { className: "k-step-text" }, label),
        isInLabel && isValid !== undefined && validationIcons,
        optional && index_js_.createElement("span", { className: "k-step-label-optional" }, optionalMessage)));
    var stepLink = (index_js_.createElement(index_js_.Fragment, null,
        stepIndicator,
        stepLabel));
    return (index_js_.createElement("li", Step_assign({ ref: elementRef, className: itemClassNames, style: itemStyles }, others),
        index_js_.createElement("a", { className: "k-step-link", title: label ? label : undefined, onClick: handleClick, onFocus: handleFocus, tabIndex: tabIndex ? tabIndex : focused ? 0 : -1, "aria-current": current, "aria-disabled": disabled || !allowClick || undefined, "aria-invalid": isValid !== undefined && !isValid || undefined }, !item ? stepLink : children)));
});
Step.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    // content: PropTypes.any,
    current: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    icon: prop_types_index_js_.string,
    index: prop_types_index_js_.number,
    isValid: prop_types_index_js_.bool,
    label: prop_types_index_js_.string,
    optional: prop_types_index_js_.bool,
    style: prop_types_index_js_.object,
    tabIndex: prop_types_index_js_.number,
    text: prop_types_index_js_.string
};
var Step_defaultProps = {
    tabIndex: 0
};
Step.defaultProps = Step_defaultProps;
Step.displayName = 'KendoStep';

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-progressbars@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kend_99c3142600a6e0fa345fe3fd7c2e03ed/node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js + 5 modules
var ProgressBar = __webpack_require__(16342);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stepper/Stepper.js
var Stepper_assign = (undefined && undefined.__assign) || function () {
    Stepper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Stepper_assign.apply(this, arguments);
};











/**
 * Represents the [KendoReact Stepper component]({% slug overview_stepper %}).
 *
 * @example
 * ```jsx
 * const steps = [
 *    { label: 'Step 1' },
 *    { label: 'Step 2' },
 *    { label: 'Step 3', optional: true }
 * ];
 *
 * const App = () => {
 *   return (
 *       <Stepper items={steps} value={1} />
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Stepper = index_js_.forwardRef(function (props, target) {
    (0,main_js_.validatePackage)(packageMetadata);
    var animationDuration = props.animationDuration, children = props.children, className = props.className, disabled = props.disabled, errorIcon = props.errorIcon, errorSVGIcon = props.errorSVGIcon, item = props.item, items = props.items, linear = props.linear, mode = props.mode, orientation = props.orientation, style = props.style, successIcon = props.successIcon, successSVGIcon = props.successSVGIcon, onChange = props.onChange, onFocus = props.onFocus;
    var localizationService = (0,index_mjs_.useLocalization)();
    var pbAriaLabel = localizationService.toLanguageString(progBarAriaLabel, messages_messages[progBarAriaLabel]);
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
    var value = props.value || Stepper_defaultProps.value;
    var _a = index_js_.useState(value), focusedIdx = _a[0], setFocusedIdx = _a[1];
    var numOfSteps = items ? items.length : 0;
    var isVertical = orientation === 'vertical';
    var dir = (0,main_js_.useRtl)(elementRef, props.dir);
    var animation = typeof animationDuration === 'number'
        ? animationDuration
        : animationDuration !== false
            ? DEFAULT_ANIMATION_DURATION
            : contants_NO_ANIMATION;
    index_js_.useEffect(function () {
        setFocusedIdx(value);
    }, [value]);
    var dispatchChangeEvent = index_js_.useCallback(function (event, val) {
        var prevIdx = val === value - 1;
        var currIdx = val === value;
        var nextIdx = val === value + 1;
        var allowClick = !linear || (prevIdx || currIdx || nextIdx);
        if (value !== val && onChange && !disabled && allowClick) {
            (0,main_js_.dispatchEvent)(onChange, event, getImperativeHandle(), { value: val });
            setFocusedIdx(val);
        }
    }, [value, linear, onChange, disabled, setFocusedIdx]);
    var handleChange = index_js_.useCallback(function (event) {
        var currentValue = event.value;
        var syntethicEvent = event.syntheticEvent;
        dispatchChangeEvent(syntethicEvent, currentValue);
    }, [dispatchChangeEvent]);
    var handleFocus = index_js_.useCallback(function (event) {
        if (onFocus && !disabled) {
            (0,main_js_.dispatchEvent)(onFocus, event.syntheticEvent, getImperativeHandle(), undefined);
        }
    }, [onFocus, disabled]);
    var handleEnter = index_js_.useCallback(function (event) {
        dispatchChangeEvent(event, focusedIdx);
    }, [dispatchChangeEvent, focusedIdx]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        var isRtl = dir === 'rtl';
        var currIndex = focusedIdx;
        var maxNavIndex = items.length - 1;
        switch (event.keyCode) {
            case main_js_.Keys.left:
                event.preventDefault();
                if (!isRtl && currIndex > 0) {
                    setFocusedIdx(currIndex - 1);
                }
                if (isRtl && currIndex < maxNavIndex) {
                    setFocusedIdx(currIndex + 1);
                }
                break;
            case main_js_.Keys.right:
                event.preventDefault();
                if (!isRtl && currIndex < maxNavIndex) {
                    setFocusedIdx(currIndex + 1);
                }
                if (isRtl && currIndex > 0) {
                    setFocusedIdx(currIndex - 1);
                }
                break;
            case main_js_.Keys.up:
                event.preventDefault();
                if (!isRtl && currIndex > 0) {
                    setFocusedIdx(currIndex - 1);
                }
                if (isRtl && currIndex > 0) {
                    setFocusedIdx(currIndex - 1);
                }
                break;
            case main_js_.Keys.down:
                event.preventDefault();
                if (!isRtl && currIndex < maxNavIndex) {
                    setFocusedIdx(currIndex + 1);
                }
                if (isRtl && currIndex < maxNavIndex) {
                    setFocusedIdx(currIndex + 1);
                }
                break;
            case main_js_.Keys.home:
                event.preventDefault();
                setFocusedIdx(0);
                break;
            case main_js_.Keys.end:
                event.preventDefault();
                setFocusedIdx(maxNavIndex);
                break;
            case main_js_.Keys.space:
                event.preventDefault();
                break;
            case main_js_.Keys.enter:
                event.preventDefault();
                if (!items[currIndex].disabled) {
                    handleEnter(event);
                }
                break;
            default:
        }
    }, [items, setFocusedIdx, focusedIdx, dir, handleEnter]);
    var stepperClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-stepper', {
        'k-stepper-linear': linear
    }, className); }, [linear, className]);
    var stepperStyles = index_js_.useMemo(function () { return (Stepper_assign({ display: 'grid', gridTemplateColumns: !isVertical ? 'repeat(' + numOfSteps * 2 + ', 1fr)' : undefined, gridTemplateRows: isVertical ? 'repeat(' + numOfSteps + ', 1fr)' : undefined }, style)); }, [isVertical, numOfSteps, style]);
    var listClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-step-list', {
        'k-step-list-horizontal': !isVertical,
        'k-step-list-vertical': isVertical
    }); }, [isVertical]);
    var listStyles = index_js_.useMemo(function () { return ({
        gridColumnStart: !isVertical ? 1 : undefined,
        gridColumnEnd: !isVertical ? -1 : undefined,
        gridRowStart: isVertical ? 1 : undefined,
        gridRowEnd: isVertical ? -1 : undefined
    }); }, [isVertical]);
    var progressbarStyles = index_js_.useMemo(function () { return ({
        gridColumnStart: !isVertical ? 2 : undefined,
        gridColumnEnd: !isVertical ? numOfSteps * 2 : undefined,
        gridRowStart: isVertical ? 1 : undefined,
        gridRowEnd: isVertical ? numOfSteps : undefined,
        top: isVertical ? 17 : undefined
    }); }, [isVertical, numOfSteps]);
    var steps = (items && (items.map(function (element, index) {
        var stepProps = Stepper_assign({ index: index, disabled: disabled || element.disabled, focused: index === focusedIdx, current: index === value }, element);
        var ItemComp = item || Step;
        return (index_js_.createElement(ItemComp, Stepper_assign({ key: index }, stepProps)));
    })));
    return (index_js_.createElement(StepperContext.Provider, { value: {
            animationDuration: animationDuration,
            isVertical: isVertical,
            item: item,
            linear: linear,
            mode: mode,
            numOfSteps: numOfSteps,
            value: value,
            successIcon: successIcon,
            successSVGIcon: successSVGIcon,
            errorIcon: errorIcon,
            errorSVGIcon: errorSVGIcon,
            onChange: handleChange,
            onFocus: handleFocus
        } },
        index_js_.createElement("nav", { className: stepperClasses, style: stepperStyles, dir: dir, onKeyDown: handleKeyDown },
            index_js_.createElement("ol", { className: listClasses, style: listStyles }, steps ? steps : children),
            index_js_.createElement(ProgressBar/* ProgressBar */.z, { style: progressbarStyles, animation: { duration: animation }, ariaLabel: pbAriaLabel, "aria-hidden": true, max: numOfSteps - 1, labelVisible: false, orientation: orientation, reverse: orientation === 'vertical', value: value, disabled: disabled, tabIndex: -1 }))));
});
Stepper.propTypes = {
    animationDuration: prop_types_index_js_.oneOfType([prop_types_index_js_.bool, prop_types_index_js_.number]),
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    errorIcon: prop_types_index_js_.string,
    errorSVGIcon: main_js_.svgIconPropType,
    item: prop_types_index_js_.any,
    items: prop_types_index_js_.any,
    linear: prop_types_index_js_.bool,
    mode: prop_types_index_js_.oneOf(['steps', 'labels']),
    orientation: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
    style: prop_types_index_js_.object,
    successIcon: prop_types_index_js_.string,
    successSVGIcon: main_js_.svgIconPropType,
    value: prop_types_index_js_.number.isRequired,
    onChange: prop_types_index_js_.func,
    onFocus: prop_types_index_js_.func
};
var Stepper_defaultProps = {
    value: 0
};
Stepper.defaultProps = Stepper_defaultProps;
Stepper.displayName = 'KendoStepper';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/appbar/AppBar.js





/**
 * Represents the [KendoReact AppBar component]({% slug overview_appbar %}).
 * Used to display information, actions, branding titles and additional navigation on the current screen.
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *       <AppBar>
 *           <AppBarSection>
 *               <span className="k-icon k-i-menu" />
 *           </AppBarSection>
 *
 *           <AppBarSpacer style={{ width: 8 }} />
 *
 *           <AppBarSection>
 *               <h1 className="title">{tc.text} AppBar</h1>
 *           </AppBarSection>
 *
 *           <AppBarSpacer />
 *
 *           <AppBarSection>
 *               <BadgeContainer>
 *                   <span className="k-icon k-i-bell" />
 *                   <Badge themeColor="info" shape="dot" />
 *               </BadgeContainer>
 *           </AppBarSection>
 *      </AppBar>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var AppBar = index_js_.forwardRef(function (props, target) {
    (0,main_js_.validatePackage)(packageMetadata);
    var children = props.children, className = props.className, style = props.style, id = props.id;
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
    var calculatedId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var themeColor = index_js_.useMemo(function () { return props.themeColor || AppBar_defaultProps.themeColor; }, [props.themeColor]);
    var position = index_js_.useMemo(function () { return props.position || AppBar_defaultProps.position; }, [props.position]);
    var positionMode = index_js_.useMemo(function () { return props.positionMode || AppBar_defaultProps.positionMode; }, [props.positionMode]);
    var appbarClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-appbar', {
        'k-appbar-top': position === 'top',
        'k-appbar-bottom': position === 'bottom',
        'k-appbar-static': positionMode === 'static',
        'k-appbar-sticky': positionMode === 'sticky',
        'k-appbar-fixed': positionMode === 'fixed',
        'k-appbar-light': themeColor === 'light',
        'k-appbar-dark': themeColor === 'dark',
        'k-appbar-inherit': themeColor === 'inherit'
    }, className); }, [position, positionMode, themeColor, className]);
    return (index_js_.createElement("div", { className: appbarClasses, style: style, id: id || calculatedId }, children));
});
AppBar.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    id: prop_types_index_js_.string,
    themeColor: prop_types_index_js_.string,
    position: prop_types_index_js_.oneOf(['top', 'bottom']),
    positionMode: prop_types_index_js_.oneOf(['static', 'sticky', 'fixed'])
};
var AppBar_defaultProps = {
    themeColor: 'light',
    position: 'top',
    positionMode: 'static'
};
AppBar.displayName = 'KendoAppBar';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/appbar/AppBarSection.js



/**
 * Represents the [KendoReact AppBarSection component]({% slug contentarrangement_appbar %}#toc-defining-sections).
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *       <AppBar>
 *           <AppBarSection>
 *               <span className="k-icon k-i-menu" />
 *           </AppBarSection>
 *
 *           <AppBarSpacer style={{ width: 8 }} />
 *
 *           <AppBarSection>
 *               <h1 className="title">{tc.text} AppBar</h1>
 *           </AppBarSection>
 *
 *           <AppBarSpacer />
 *
 *           <AppBarSection>
 *               <BadgeContainer>
 *                   <span className="k-icon k-i-bell" />
 *                   <Badge themeColor="info" shape="dot" />
 *               </BadgeContainer>
 *           </AppBarSection>
 *      </AppBar>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var AppBarSection = index_js_.forwardRef(function (props, target) {
    var children = props.children, className = props.className, style = props.style;
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
    var sectionClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-appbar-section', className); }, [className]);
    return (index_js_.createElement("div", { className: sectionClasses, style: style }, children));
});
AppBarSection.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object
};
AppBarSection.displayName = 'KendoAppBarSection';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/appbar/AppBarSpacer.js



/**
 * Represents the [KendoReact AppBarSpacer component]({% slug contentarrangement_appbar %}#toc-defining-spacings).
 * Used to give additional white space between the AppBar sections and provides a way for customizing its width.
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *       <AppBar>
 *           <AppBarSection>
 *               <span className="k-icon k-i-menu" />
 *           </AppBarSection>
 *
 *           <AppBarSpacer style={{ width: 8 }} />
 *
 *           <AppBarSection>
 *               <h1 className="title">{tc.text} AppBar</h1>
 *           </AppBarSection>
 *
 *           <AppBarSpacer />
 *
 *           <AppBarSection>
 *               <BadgeContainer>
 *                   <span className="k-icon k-i-bell" />
 *                   <Badge themeColor="info" shape="dot" />
 *               </BadgeContainer>
 *           </AppBarSection>
 *      </AppBar>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var AppBarSpacer = index_js_.forwardRef(function (props, target) {
    var children = props.children, className = props.className, style = props.style;
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
    var spacerClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-appbar-spacer', {
        'k-appbar-spacer-sized': style && style.width && style.width !== null
    }, className); }, [className, style]);
    var spacerStyles = index_js_.useMemo(function () {
        return {
            flexBasis: style && style.width ? style.width : undefined
        };
    }, [style]);
    return (index_js_.createElement("span", { className: spacerClasses, style: spacerStyles }, children));
});
AppBarSpacer.propTypes = {
    children: prop_types_index_js_.any,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object
};
AppBarSpacer.displayName = 'KendoAppBarSpacer';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tilelayout/ResizeHandlers.js
var ResizeHandlers_extends = (undefined && undefined.__extends) || (function () {
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
var ResizeHandlers_assign = (undefined && undefined.__assign) || function () {
    ResizeHandlers_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ResizeHandlers_assign.apply(this, arguments);
};


/**
 * @hidden
 */
var Handle = function (props) { return (index_js_.createElement(main_js_.Draggable, { onPress: props.onPress, onDrag: function (data) { props.onResize(data.event, false, props.d); }, onRelease: function (data) { props.onResize(data.event, true, props.d); } },
    index_js_.createElement("div", { className: 'k-resize-handle k-cursor-' + props.d + '-resize', style: ResizeHandlers_assign({ bottom: 0, right: 0 }, props.style) }))); };
/**
 * @hidden
 */
var ResizeHandlers = /** @class */ (function (_super) {
    ResizeHandlers_extends(ResizeHandlers, _super);
    function ResizeHandlers() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleResize = function (event, isEnd, direction) {
            event.originalEvent.preventDefault();
            _this.props.onResize(event, { end: isEnd, direction: direction });
        };
        return _this;
    }
    ResizeHandlers.prototype.render = function () {
        var _a = this.props, resizable = _a.resizable, onPress = _a.onPress, rtl = _a.rtl;
        if (!resizable) {
            return null;
        }
        return (index_js_.createElement(index_js_.Fragment, null,
            resizable !== 'vertical' && (index_js_.createElement(Handle, { onPress: onPress, onResize: this.handleResize, d: "ew", style: rtl ? { top: 0, width: 9, left: 0, right: '' } : { top: 0, width: 9, right: 0, left: '' } })),
            resizable !== 'horizontal' && (index_js_.createElement(Handle, { onPress: onPress, onResize: this.handleResize, d: "ns", style: { left: 0, height: 9 } })),
            (resizable === true) && (index_js_.createElement(Handle, { onPress: onPress, onResize: this.handleResize, d: rtl ? 'nesw' : 'nwse', style: rtl ? { width: 9, height: 9, right: '', left: 0 } : { width: 9, height: 9, right: 0, left: '' } }))));
    };
    return ResizeHandlers;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tilelayout/InternalTile.js
var InternalTile_extends = (undefined && undefined.__extends) || (function () {
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
var InternalTile_assign = (undefined && undefined.__assign) || function () {
    InternalTile_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return InternalTile_assign.apply(this, arguments);
};




/**
 * @hidden
 */
var ANIMATION_DURATION = 200;
/**
 * @hidden
 */
var InternalTile = /** @class */ (function (_super) {
    InternalTile_extends(InternalTile, _super);
    function InternalTile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            rtl: false
        };
        _this.oldSize = {};
        _this.draggable = null;
        _this.dragging = false;
        _this.resizing = false;
        _this.element = null;
        _this.hintElement = null;
        _this.ignoreDrag = false;
        _this.pressOffset = { x: 0, y: 0 };
        _this.pressXY = { x: 0, y: 0 };
        _this.currentTranslate = { x: 0, y: 0 };
        _this.preventDataOps = undefined;
        _this.handleResize = function (e, q) {
            if (q.end) {
                _this.handleRelease();
                return;
            }
            if (!_this.element || !_this.hintElement) {
                return;
            }
            var x = e.clientX;
            var y = e.clientY;
            _this.resizing = true;
            var dX = (q.direction !== 'ns' ? x - _this.pressXY.x : 0) * (_this.state.rtl ? -1 : 1);
            var dY = q.direction !== 'ew' ? y - _this.pressXY.y : 0;
            if (_this.dragElement) {
                if (_this.state.rtl) {
                    _this.dragElement.style.marginLeft = -dX + 'px';
                }
                else {
                    _this.dragElement.style.marginRight = -dX + 'px';
                }
                _this.dragElement.style.height = "calc(100% + ".concat(dY, "px)");
            }
            _this.hintElement.classList.add('k-layout-item-hint-resize');
            if (_this.preventDataOps) {
                return;
            }
            var col = 0;
            var row = 0;
            var wrapBox = _this.element.getBoundingClientRect();
            if (dX > wrapBox.width / _this.props.defaultPosition.colSpan / 3) {
                col = 1;
            }
            if (dX < -wrapBox.width / _this.props.defaultPosition.colSpan / 1.25) {
                col = -1;
            }
            // vertical
            if (dY > wrapBox.height / _this.props.defaultPosition.rowSpan / 3) {
                row = 1;
            }
            if (dY < -wrapBox.height / _this.props.defaultPosition.rowSpan / 1.25) {
                row = -1;
            }
            if (col !== 0 || row !== 0) {
                _this.props.update(_this.props.index, 0, 0, row, col);
            }
        };
        _this.handlePress = function (e) {
            if (!_this.dragElement) {
                return;
            }
            _this.pressXY = {
                x: e.event.clientX,
                y: e.event.clientY
            };
            _this.ignoreDrag = false;
            if (_this.props.ignoreDrag && _this.props.ignoreDrag(e.event.originalEvent)) {
                _this.ignoreDrag = true;
                return;
            }
            if (_this.element && _this.hintElement) {
                _this.element.style.zIndex = '10';
                _this.hintElement.style.display = 'block';
            }
            _this.dragElement.classList.remove('k-cursor-grab');
            _this.dragElement.classList.add('k-cursor-grabbing');
            var rec = _this.dragElement.getBoundingClientRect();
            _this.pressOffset = {
                x: e.event.clientX - rec.x,
                y: e.event.clientY - rec.y
            };
        };
        _this.handleDrag = function (e) {
            if (_this.ignoreDrag) {
                return;
            }
            var dragElement = _this.dragElement;
            if (e.event.originalEvent.defaultPrevented || !dragElement) {
                return;
            }
            _this.dragging = true;
            e.event.originalEvent.preventDefault();
            var rec = dragElement.getBoundingClientRect();
            _this.currentTranslate = {
                x: e.event.clientX - rec.x - _this.pressOffset.x + _this.currentTranslate.x,
                y: e.event.clientY - rec.y - _this.pressOffset.y + _this.currentTranslate.y
            };
            dragElement.style.transform = "translate(".concat(_this.currentTranslate.x, "px, ").concat(_this.currentTranslate.y, "px)");
            dragElement.style.transition = 'transform 0s';
            if (_this.preventDataOps) {
                return;
            }
            var col = 0;
            var row = 0;
            if (_this.currentTranslate.y > 0.7 * rec.height / _this.props.defaultPosition.rowSpan) {
                row = 1;
            }
            if (_this.currentTranslate.y < 0.7 * -rec.height / _this.props.defaultPosition.rowSpan) {
                row = -1;
            }
            if (_this.currentTranslate.x > 0.7 * rec.width / _this.props.defaultPosition.colSpan) {
                col = 1;
            }
            if (_this.currentTranslate.x < 0.7 * -rec.width / _this.props.defaultPosition.colSpan) {
                col = -1;
            }
            _this.props.update(_this.props.index, row, _this.state.rtl ? -col : col, 0, 0);
        };
        _this.handleRelease = function () {
            _this.dragging = _this.resizing = false;
            _this.currentTranslate = { x: 0, y: 0 };
            if (_this.element && _this.hintElement) {
                _this.element.style.zIndex = '1';
                _this.hintElement.classList.remove('k-layout-item-hint-resize');
                _this.hintElement.style.display = 'none';
            }
            var dragElement = _this.dragElement;
            if (dragElement) {
                dragElement.style.transform = 'translate(0px, 0px)';
                dragElement.style.transition = "transform ".concat(ANIMATION_DURATION, "ms cubic-bezier(0.2, 0, 0, 1) 0s");
                dragElement.style.marginRight = '0px';
                dragElement.style.marginLeft = '0px';
                dragElement.style.height = '100%';
                dragElement.classList.remove('k-cursor-grabbing');
                dragElement.classList.add('k-cursor-grab');
            }
        };
        return _this;
    }
    Object.defineProperty(InternalTile.prototype, "reorderable", {
        get: function () {
            return this.props.reorderable !== undefined ? this.props.reorderable : InternalTile.defaultProps.reorderable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InternalTile.prototype, "dragElement", {
        get: function () {
            return this.draggable ? this.draggable.element : undefined;
        },
        enumerable: false,
        configurable: true
    });
    InternalTile.prototype.componentDidMount = function () {
        if (!this.element) {
            return;
        }
        if (getComputedStyle(this.element).direction === 'rtl') {
            this.setState({
                rtl: true
            });
        }
        if (this.hintElement) {
            this.hintElement.style.height = this.element.offsetHeight + 'px';
            this.hintElement.style.width = this.element.offsetWidth + 'px';
        }
    };
    InternalTile.prototype.render = function () {
        var _this = this;
        if (clearTimeout && typeof (clearTimeout) === 'function') {
            clearTimeout(this.preventDataOps);
            this.preventDataOps = window.setTimeout(function () { _this.preventDataOps = undefined; }, 200);
        }
        var position = this.props.defaultPosition;
        var resizable = this.props.resizable !== undefined ? this.props.resizable : InternalTile.defaultProps.resizable;
        var hintItemStyles = InternalTile_assign({ gridColumnStart: position.col, gridColumnEnd: "span ".concat(position.colSpan), gridRowStart: position.row, gridRowEnd: "span ".concat(position.rowSpan), outline: 'none', order: position.order, display: 'none' }, this.props.hintStyle);
        var itemStyles = {
            gridColumnStart: position.col,
            gridColumnEnd: "span ".concat(position.colSpan),
            gridRowStart: position.row,
            gridRowEnd: "span ".concat(position.rowSpan),
            order: position.order
        };
        var card = (index_js_.createElement("div", { ref: function (e) { _this.draggable = e ? ({ element: e }) : null; }, className: (0,main_js_.classNames)('k-tilelayout-item k-card', { 'k-cursor-grab': this.reorderable }, this.props.className), style: InternalTile_assign(InternalTile_assign({ height: '100%' }, itemStyles), this.props.style) },
            this.props.children,
            index_js_.createElement(ResizeHandlers, { onPress: this.handlePress, onResize: this.handleResize, resizable: resizable, rtl: this.state.rtl })));
        return (index_js_.createElement("div", { ref: function (e) { _this.element = e; }, style: itemStyles },
            index_js_.createElement("div", { ref: function (e) { _this.hintElement = e; }, style: InternalTile_assign({ position: 'absolute' }, hintItemStyles), className: (0,main_js_.classNames)('k-layout-item-hint', this.props.hintClassName) }),
            index_js_.createElement(main_js_.Draggable, { ref: function (e) { _this.draggable = e; }, onDrag: this.props.reorderable ? this.handleDrag : undefined, onRelease: this.props.reorderable ? this.handleRelease : undefined, onPress: this.props.reorderable ? this.handlePress : undefined }, card)));
    };
    /**
     * @hidden
     */
    InternalTile.prototype.getSnapshotBeforeUpdate = function (_) {
        this.oldSize = {};
        if (this.dragElement) {
            this.oldSize = this.dragElement.getBoundingClientRect();
        }
        return null;
    };
    /**
     * @hidden
     */
    InternalTile.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        var dragElement = this.dragElement;
        if (!dragElement) {
            return;
        }
        var newBox = dragElement.getBoundingClientRect();
        var oldBox = this.oldSize;
        if (this.resizing) {
            var diffCol = newBox.width - oldBox.width;
            if (this.state.rtl) {
                var currentM = parseFloat(dragElement.style.marginLeft || '0');
                dragElement.style.marginLeft = (currentM - diffCol) + 'px';
            }
            else {
                var currentM = parseFloat(dragElement.style.marginRight || '0');
                dragElement.style.marginRight = (currentM + diffCol) + 'px';
            }
            this.pressXY.x += this.state.rtl ? -diffCol : diffCol;
            var diffRow = newBox.height - oldBox.height;
            var currentBot = parseFloat(dragElement.style.height.substring(12));
            dragElement.style.height = "calc(100% + ".concat((currentBot + diffRow), "px)");
            this.pressXY.y += diffRow;
        }
        var deltaX = oldBox.left - newBox.left;
        var deltaY = oldBox.top - newBox.top;
        if (deltaX === 0 && deltaY === 0) {
            return;
        }
        if (this.dragging) {
            if ((prevProps.defaultPosition.order !== this.props.defaultPosition.order ||
                prevProps.defaultPosition.col !== this.props.defaultPosition.col)) {
                this.currentTranslate.x = 0;
                this.currentTranslate.y = 0;
                dragElement.style.transform = '';
            }
            return;
        }
        if (Math.abs(deltaY) < 15 && Math.abs(deltaX) < 15) {
            // improves performance and removes random flickering
            return;
        }
        requestAnimationFrame(function () {
            var domNode = _this.element;
            if (!domNode) {
                return;
            }
            domNode.style.transform = "translate(".concat(deltaX, "px, ").concat(deltaY, "px)");
            domNode.style.transition = 'transform 0s';
            requestAnimationFrame(function () {
                domNode.style.transform = '';
                domNode.style.transition = "transform ".concat(ANIMATION_DURATION, "ms cubic-bezier(0.2, 0, 0, 1) 0s");
            });
        });
    };
    /**
     * @hidden
     */
    InternalTile.propTypes = {
        defaultPosition: prop_types_index_js_.object.isRequired,
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        hintStyle: prop_types_index_js_.object,
        hintClassName: prop_types_index_js_.string,
        header: prop_types_index_js_.any,
        body: prop_types_index_js_.any,
        item: prop_types_index_js_.any,
        resizable: prop_types_index_js_.oneOf(['horizontal', 'vertical', true, false]),
        reorderable: prop_types_index_js_.bool
    };
    /**
     * @hidden
     */
    InternalTile.displayName = 'KendoTileLayoutItem';
    /**
     * @hidden
     */
    InternalTile.defaultProps = {
        resizable: true,
        reorderable: true
    };
    return InternalTile;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/tilelayout/TileLayout.js
var TileLayout_extends = (undefined && undefined.__extends) || (function () {
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
var TileLayout_assign = (undefined && undefined.__assign) || function () {
    TileLayout_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TileLayout_assign.apply(this, arguments);
};





/**
 * @hidden
 */
var AUTO_FLOW_CLASSES = {
    'column': 'k-grid-flow-col',
    'row': 'k-grid-flow-row',
    'column dense': 'k-grid-flow-col-dense',
    'row dense': 'k-grid-flow-row-dense',
    'unset': 'k-grid-flow-unset'
};
/**
 * Represents the [KendoReact TileLayout component]({% slug overview_tilelayout %}).
 */
var TileLayout = /** @class */ (function (_super) {
    TileLayout_extends(TileLayout, _super);
    function TileLayout(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this._element = null;
        /**
         * @hidden
         */
        _this.state = { positions: (_this.props.items || []).map(function (p, i) { return (Object.assign({ order: i, rowSpan: 1, colSpan: 1 }, p.defaultPosition)); }) };
        _this.showLicenseWatermark = false;
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
        _this.update = function (index, dOrder, dCol, dRowSpan, dColSpan) {
            if (dRowSpan === void 0) { dRowSpan = 0; }
            if (dColSpan === void 0) { dColSpan = 0; }
            if (dOrder === 0 && dCol === 0 && !dColSpan && !dRowSpan) {
                return;
            }
            var shouldUpdate = false;
            var positions = _this.state.positions.map(function (p) { return Object.assign({}, p); });
            // reordering:
            var current = positions[index];
            var other = positions.find(function (item) { return (item.order === current.order + dOrder); });
            if (other && other !== current) {
                current.order += dOrder;
                other.order += -dOrder;
                shouldUpdate = true;
            }
            var proposedCol = current.col + dCol;
            if (dCol !== 0 && proposedCol >= 1 && proposedCol + current.colSpan <= (_this.props.columns || 3) + 1) {
                current.col = proposedCol;
                shouldUpdate = true;
            }
            // resizing:
            var proposedColSpan = current.colSpan + dColSpan;
            if (dColSpan && proposedColSpan >= 1 && proposedColSpan + current.col <= (_this.props.columns || 3) + 1) {
                current.colSpan = proposedColSpan;
                shouldUpdate = true;
            }
            var proposedRowSpan = current.rowSpan + dRowSpan;
            if (dRowSpan && proposedRowSpan >= 1) {
                current.rowSpan = proposedRowSpan;
                shouldUpdate = true;
            }
            if (shouldUpdate) {
                _this.setState({ positions: positions });
                (0,main_js_.dispatchEvent)(_this.props.onReposition, {}, _this, { value: positions });
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,main_js_.shouldShowValidationUI)(packageMetadata);
        return _this;
    }
    Object.defineProperty(TileLayout.prototype, "element", {
        /**
         * Gets the HTML element of the TileLayout component.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    TileLayout.getDerivedStateFromProps = function (props, state) {
        if (props.positions) {
            // The component is in controlled mode.
            return {
                positions: props.positions.map(function (p, i) { return (Object.assign({ order: i, rowSpan: 1, colSpan: 1 }, p)); })
            };
        }
        if (props.items && (!state.positions || (props.items.length !== state.positions.length))) {
            // The component is in uncontrolled mode.
            return {
                positions: props.items.map(function (p, i) { return (Object.assign({ order: i, rowSpan: 1, colSpan: 1 }, p.defaultPosition)); })
            };
        }
        return null;
    };
    TileLayout.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, _b = _a.columns, columns = _b === void 0 ? 3 : _b, _c = _a.columnWidth, columnWidth = _c === void 0 ? '1fr' : _c, gap = _a.gap, _d = _a.rowHeight, rowHeight = _d === void 0 ? '1fr' : _d, style = _a.style, _e = _a.autoFlow, autoFlow = _e === void 0 ? 'column' : _e, _f = _a.items, items = _f === void 0 ? [] : _f;
        var gapValue = gap
            ? "".concat(typeof gap.rows === 'number' ? gap.rows + 'px' : gap.rows) + ' ' + "".concat(typeof gap.columns === 'number' ? gap.columns + 'px' : gap.columns)
            : 16;
        var tileLayoutStyles = TileLayout_assign({ gridTemplateColumns: "repeat(".concat(columns, ", minmax(0px, ").concat(typeof columnWidth === 'number' ? columnWidth + 'px' : columnWidth, "))"), gridAutoRows: "minmax(0px, ".concat(typeof rowHeight === 'number' ? rowHeight + 'px' : rowHeight, ")"), gap: gapValue, padding: gapValue }, style);
        return (index_js_.createElement("div", { ref: function (el) { _this._element = el; }, dir: this.props.dir, className: (0,main_js_.classNames)('k-tilelayout k-pos-relative', AUTO_FLOW_CLASSES[autoFlow], className), style: tileLayoutStyles, id: this.props.id, children: items.map(function (tile, index) {
                return (index_js_.createElement(index_js_.Fragment, { key: _this.props.dataItemKey ? (0,main_js_.getter)(_this.props.dataItemKey)(tile) : index },
                    index_js_.createElement(InternalTile, { update: _this.update, defaultPosition: _this.state.positions[index], index: index, resizable: tile.resizable, reorderable: tile.reorderable, style: tile.style, className: tile.className, hintClassName: tile.hintClassName, hintStyle: tile.hintStyle, ignoreDrag: _this.props.ignoreDrag }, tile.item ? tile.item : (index_js_.createElement(index_js_.Fragment, null,
                        index_js_.createElement("div", { className: "k-tilelayout-item-header k-card-header" }, index_js_.isValidElement(tile.header) ? tile.header : index_js_.createElement("h5", { className: 'k-card-title' }, tile.header)),
                        index_js_.createElement("div", { className: 'k-tilelayout-item-body k-card-body' }, tile.body)))),
                    _this.showLicenseWatermark && index_js_.createElement(main_js_.WatermarkOverlay, null)));
            }) }));
    };
    /**
     * @hidden
     */
    TileLayout.propTypes = {
        id: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        dir: prop_types_index_js_.string,
        gap: prop_types_index_js_.object,
        columns: prop_types_index_js_.number,
        columnWidth: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        rowHeight: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        dataItemKey: prop_types_index_js_.string,
        items: prop_types_index_js_.array,
        positions: prop_types_index_js_.array,
        autoFlow: prop_types_index_js_.oneOf(['column', 'row', 'column dense', 'row dense', 'unset']),
        onReposition: prop_types_index_js_.func,
        ignoreDrag: prop_types_index_js_.func
    };
    /**
     * @hidden
     */
    TileLayout.displayName = 'KendoTileLayout';
    return TileLayout;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/bottomnavigation/models/utils.js
/**
 * @hidden
 */
var THEME_COLOR_CLASSES = {
    'primary': 'k-bottom-nav-primary',
    'secondary': 'k-bottom-nav-secondary',
    'tertiary': 'k-bottom-nav-tertiary',
    'info': 'k-bottom-nav-info',
    'success': 'k-bottom-nav-success',
    'warning': 'k-bottom-nav-warning',
    'error': 'k-bottom-nav-error',
    'dark': 'k-bottom-nav-dark',
    'light': 'k-bottom-nav-light',
    'inverse': 'k-bottom-nav-inverse'
};
/**
 * @hidden
 */
var FILL_CLASSES = {
    'flat': 'k-bottom-nav-flat',
    'solid': 'k-bottom-nav-solid'
};
/**
 * @hidden
 */
var ITEM_FLOW_CLASSES = {
    'vertical': 'k-bottom-nav-item-flow-vertical',
    'horizontal': 'k-bottom-nav-item-flow-horizontal'
};
/**
 * @hidden
 */
var POSITION_MODE_CLASSES = {
    'fixed': 'k-pos-fixed',
    'sticky': 'k-pos-sticky'
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/bottomnavigation/BottomNavigationItem.js





/**
 * Represents the [KendoReact BottomNavigationItem component]({% slug overview_bottomnavigation %}).
 */
var BottomNavigationItem = index_js_.forwardRef(function (props, ref) {
    (0,main_js_.validatePackage)(packageMetadata);
    var elementRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(ref, function () { return ({
        element: elementRef.current
    }); });
    var className = props.className, style = props.style, selected = props.selected, disabled = props.disabled, item = props.item, render = props.render, dataItem = props.dataItem, icon = props.icon, svgIcon = props.svgIcon, text = props.text, id = props.id, onSelect = props.onSelect, onKeyDown = props.onKeyDown, index = props.index, tabIndex = props.tabIndex;
    var itemClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-bottom-nav-item', {
        'k-selected': selected,
        'k-disabled': disabled
    }, className); }, [selected, disabled, className]);
    var handleClick = index_js_.useCallback(function (event) {
        if (onSelect && index !== undefined && !disabled) {
            onSelect(event, index);
        }
    }, [onSelect, index, disabled]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        if (onKeyDown && index !== undefined && !disabled) {
            onKeyDown(event, index);
        }
    }, [onKeyDown, index, disabled]);
    var renderer = render;
    var ItemComp = item;
    var bottomNavItem = (index_js_.createElement("span", { ref: elementRef, className: itemClasses, style: style, role: 'link', id: id, tabIndex: tabIndex, onClick: handleClick, onKeyDown: handleKeyDown, "aria-current": selected, "aria-disabled": disabled }, ItemComp ? index_js_.createElement(ItemComp, { itemIndex: index, item: dataItem }) :
        (index_js_.createElement(index_js_.Fragment, null,
            (icon || svgIcon) && index_js_.createElement(main_js_.IconWrap, { className: 'k-bottom-nav-item-icon', name: icon, icon: svgIcon, size: 'xlarge' }),
            text && index_js_.createElement("span", { className: 'k-bottom-nav-item-text', style: { userSelect: 'none' } }, text)))));
    return renderer !== undefined ? renderer.call(undefined, bottomNavItem, props) : bottomNavItem;
});
var BottomNavigationItem_defaultProps = {
    tabIndex: 0
};
BottomNavigationItem.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    id: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    selected: prop_types_index_js_.bool,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    text: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number
};
BottomNavigationItem.defaultProps = BottomNavigationItem_defaultProps;
BottomNavigationItem.displayName = 'KendoReactBottomNavigationItem';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/bottomnavigation/BottomNavigation.js
var BottomNavigation_assign = (undefined && undefined.__assign) || function () {
    BottomNavigation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return BottomNavigation_assign.apply(this, arguments);
};







/**
 * Represents the [KendoReact BottomNavigation component]({% slug overview_bottomnavigation %}).
 * Used to switch between primary destinations in an application.
 *
 * @example
 * ```jsx
 * const items = [
 *    { text: 'Photos', icon: 'photo', selected: true },
 *    { text: 'Albums', icon: 'folder' },
 *    { text: 'Search', icon: 'search' },
 *    { text: 'More', icon: 'more-horizontal' },
 * ];
 *
 * const App = () => {
 *   return (
 *       <BottomNavigation items={items} />
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var BottomNavigation = index_js_.forwardRef(function (props, ref) {
    (0,main_js_.validatePackage)(packageMetadata);
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
    index_js_.useImperativeHandle(ref, getImperativeHandle);
    var _a = props.positionMode, positionMode = _a === void 0 ? BottomNavigation_defaultProps.positionMode : _a, _b = props.itemFlow, itemFlow = _b === void 0 ? BottomNavigation_defaultProps.itemFlow : _b, _c = props.border, border = _c === void 0 ? BottomNavigation_defaultProps.border : _c, className = props.className, items = props.items, item = props.item, itemRender = props.itemRender, disabled = props.disabled, style = props.style, id = props.id, onSelect = props.onSelect, onKeyDown = props.onKeyDown;
    var navId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var dir = (0,main_js_.useDir)(elementRef, props.dir);
    var fillMode = index_js_.useMemo(function () {
        if (props.fillMode === null) {
            return null;
        }
        else if (props.fill === null) {
            return null;
        }
        else {
            return props.fill || props.fillMode || BottomNavigation_defaultProps.fillMode;
        }
    }, [props.fillMode, props.fill]);
    var themeColor = index_js_.useMemo(function () { return props.themeColor || BottomNavigation_defaultProps.themeColor; }, [props.themeColor]);
    var navClasses = index_js_.useMemo(function () {
        var _a;
        return (0,main_js_.classNames)('k-bottom-nav', POSITION_MODE_CLASSES[positionMode], ITEM_FLOW_CLASSES[itemFlow], (_a = {},
            _a["k-bottom-nav-".concat(fillMode)] = fillMode,
            _a["k-bottom-nav-".concat(fillMode, "-").concat(themeColor)] = Boolean(fillMode && themeColor),
            _a['k-bottom-nav-border'] = border,
            _a['k-disabled'] = disabled,
            _a), className);
    }, [positionMode, themeColor, fillMode, itemFlow, border, disabled, className]);
    var dispatchSelectEvent = index_js_.useCallback(function (dispatchedEvent, index) {
        if (!items) {
            return;
        }
        if (!items[index].disabled && onSelect) {
            (0,main_js_.dispatchEvent)(onSelect, dispatchedEvent, getImperativeHandle(), {
                itemTarget: items[index],
                itemIndex: index
            });
        }
    }, [items, onSelect]);
    var handleSelect = index_js_.useCallback(function (event, clickedItemIndex) {
        dispatchSelectEvent(event, clickedItemIndex);
    }, [dispatchSelectEvent]);
    var handleKeyDown = index_js_.useCallback(function (event, clickedItemIndex) {
        switch (event.keyCode) {
            case main_js_.Keys.enter:
            case main_js_.Keys.space:
                dispatchSelectEvent(event, clickedItemIndex);
                event.preventDefault();
                break;
            default:
                break;
        }
        (0,main_js_.dispatchEvent)(onKeyDown, event, getImperativeHandle(), undefined);
    }, [dispatchSelectEvent, onKeyDown]);
    return (index_js_.createElement("nav", { ref: elementRef, className: navClasses, style: style, id: id || navId, dir: dir }, items && (items.map(function (element, index) {
        return (index_js_.createElement(BottomNavigationItem, BottomNavigation_assign({}, element, { key: index, index: index, id: "".concat(id || navId, "-").concat(index), disabled: disabled || element.disabled, selected: element.selected, dataItem: element, item: item, render: itemRender, onSelect: handleSelect, onKeyDown: handleKeyDown })));
    }))));
});
var BottomNavigation_defaultProps = {
    themeColor: 'primary',
    fillMode: 'flat',
    itemFlow: 'vertical',
    positionMode: 'fixed',
    border: true
};
BottomNavigation.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    id: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    themeColor: prop_types_index_js_.oneOf([
        'primary', 'secondary', 'tertiary',
        'info', 'success', 'warning',
        'error', 'dark', 'light', 'inverse'
    ]),
    fill: prop_types_index_js_.oneOf(['solid', 'flat']),
    fillMode: prop_types_index_js_.oneOf(['solid', 'flat']),
    itemFlow: prop_types_index_js_.oneOf(['vertical', 'horizontal']),
    border: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    selected: prop_types_index_js_.number,
    onSelect: prop_types_index_js_.func
};
BottomNavigation.defaultProps = BottomNavigation_defaultProps;
BottomNavigation.displayName = 'KendoReactBottomNavigation';

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-licensing@^1.3.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-licensing@1.6.0/node_modules/@progress/kendo-licensing/dist/index.mjs)
var dist_index_mjs_ = __webpack_require__(74750);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/stacklayout/StackLayout.js
var StackLayout_assign = (undefined && undefined.__assign) || function () {
    StackLayout_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return StackLayout_assign.apply(this, arguments);
};





/**
 * Represents the [KendoReact StackLayout component]({% slug overview_stacklayout %}).
 * Arranges its inner elements horizontally, or vertically in a stack. Nesting stack layouts is supported to build more complex layouts.
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *     <StackLayout
 *       orientation="vertical"
 *       align={{horizontal: 'stretch', vertical: 'stretch'}}
 *       gap={10}
 *     >
 *       <div>Box</div>
 *       <div>Box</div>
 *       <div>Box</div>
 *       <div>Box</div>
 *     </StackLayout>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var StackLayout = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var elementRef = index_js_.useRef(null);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current
    }); }, []);
    index_js_.useImperativeHandle(ref, getImperativeHandle);
    var className = props.className, style = props.style, id = props.id, children = props.children;
    var layoutId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var orientation = index_js_.useMemo(function () { return props.orientation || StackLayout_defaultProps.orientation; }, [props.orientation]);
    var isHorizontal = orientation === 'horizontal';
    var hAlign = index_js_.useMemo(function () { return props.align && props.align.horizontal ? props.align.horizontal : StackLayout_defaultProps.hAlign; }, [props.align]);
    var vAlign = index_js_.useMemo(function () { return props.align && props.align.vertical ? props.align.vertical : StackLayout_defaultProps.vAlign; }, [props.align]);
    var stackLayoutClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-stack-layout', {
        'k-hstack': orientation === 'horizontal',
        'k-vstack': orientation === 'vertical',
        'k-justify-content-start': isHorizontal && hAlign === 'start' || !isHorizontal && vAlign === 'top',
        'k-justify-content-center': isHorizontal && hAlign === 'center' || !isHorizontal && vAlign === 'middle',
        'k-justify-content-end': isHorizontal && hAlign === 'end' || !isHorizontal && vAlign === 'bottom',
        'k-justify-content-stretch': isHorizontal && hAlign === 'stretch' || !isHorizontal && vAlign === 'stretch',
        'k-align-items-start': !isHorizontal && hAlign === 'start' || isHorizontal && vAlign === 'top',
        'k-align-items-center': !isHorizontal && hAlign === 'center' || isHorizontal && vAlign === 'middle',
        'k-align-items-end': !isHorizontal && hAlign === 'end' || isHorizontal && vAlign === 'bottom',
        'k-align-items-stretch': !isHorizontal && hAlign === 'stretch' || isHorizontal && vAlign === 'stretch'
    }, className); }, [orientation, isHorizontal, hAlign, vAlign, className]);
    var stackLayoutStyles = StackLayout_assign({ gap: "".concat(typeof props.gap === 'number' ? props.gap + 'px' : props.gap) }, style);
    return (index_js_.createElement("div", { ref: elementRef, className: stackLayoutClasses, style: stackLayoutStyles, id: id || layoutId }, children));
});
var StackLayout_defaultProps = {
    orientation: 'horizontal',
    hAlign: 'stretch',
    vAlign: 'stretch'
};
StackLayout.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    children: prop_types_index_js_.any,
    id: prop_types_index_js_.string,
    orientation: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
    gap: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number]),
    align: prop_types_index_js_.shape({
        vertical: prop_types_index_js_.oneOf(['top', 'middle', 'bottom', 'stretch']),
        horizontal: prop_types_index_js_.oneOf(['start', 'center', 'end', 'stretch'])
    })
};
StackLayout.defaultProps = StackLayout_defaultProps;
StackLayout.displayName = 'KendoReactStackLayout';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/gridlayout/GridLayout.js
var GridLayout_assign = (undefined && undefined.__assign) || function () {
    GridLayout_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridLayout_assign.apply(this, arguments);
};





/**
 * Represents the [KendoReact GridLayout component]({% slug overview_gridlayout %}).
 * Arranges the contents of the component in rows and columns in a grid structure.
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *     <GridLayout
 *       rows={[{height: 50}, {height: 50}, {height: 50}]}
 *       cols={[{width: 50}, {width: 50}, {width: 50}]}
 *       gap={{rows: 5, cols: 5}}
 *       align={{horizontal: 'stretch', vertical: 'stretch'}}
 *     >
 *       <GridLayoutItem row={1} col={1}>Box</GridLayoutItem>
 *       <GridLayoutItem row={1} col={2} colSpan={2}>Box</GridLayoutItem>
 *       <GridLayoutItem row={2} col={1} colSpan={2} rowSpan={2}>Box</GridLayoutItem>
 *       <GridLayoutItem row={2} col={3}>Box</GridLayoutItem>
 *       <GridLayoutItem row={3} col={3}>Box</GridLayoutItem>
 *     </GridLayout>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridLayout = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var elementRef = index_js_.useRef(null);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current
    }); }, []);
    index_js_.useImperativeHandle(ref, getImperativeHandle);
    var className = props.className, style = props.style, id = props.id, children = props.children, gap = props.gap;
    var layoutId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var hAlign = index_js_.useMemo(function () { return props.align && props.align.horizontal ? props.align.horizontal : GridLayout_defaultProps.hAlign; }, [props.align]);
    var vAlign = index_js_.useMemo(function () { return props.align && props.align.vertical ? props.align.vertical : GridLayout_defaultProps.vAlign; }, [props.align]);
    var gridLayoutClasses = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-grid-layout', {
        'k-justify-items-start': hAlign === 'start',
        'k-justify-items-center': hAlign === 'center',
        'k-justify-items-end': hAlign === 'end',
        'k-justify-items-stretch': hAlign === 'stretch',
        'k-align-items-start': vAlign === 'top',
        'k-align-items-center': vAlign === 'middle',
        'k-align-items-end': vAlign === 'bottom',
        'k-align-items-stretch': vAlign === 'stretch'
    }, className); }, [hAlign, vAlign, className]);
    var gapStyle = gap
        ? "".concat(typeof gap.rows === 'number' ? gap.rows + 'px' : gap.rows) + ' ' + "".concat(typeof gap.cols === 'number' ? gap.cols + 'px' : gap.cols)
        : undefined;
    var gridTemplateRowsStyle = props.rows && props.rows.map(function (row) { return "".concat(typeof row.height === 'number' ? row.height + 'px' : row.height); }).join(' ');
    var gridTemplateColumnsStyle = props.cols && props.cols.map(function (col) { return "".concat(typeof col.width === 'number' ? col.width + 'px' : col.width); }).join(' ');
    var gridLayoutStyles = GridLayout_assign({ gap: gapStyle, gridTemplateColumns: gridTemplateColumnsStyle, gridTemplateRows: gridTemplateRowsStyle }, style);
    return (index_js_.createElement("div", { ref: elementRef, className: gridLayoutClasses, style: gridLayoutStyles, id: id || layoutId }, children));
});
var GridLayout_defaultProps = {
    hAlign: 'stretch',
    vAlign: 'stretch',
    gap: undefined
};
GridLayout.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    children: prop_types_index_js_.any,
    id: prop_types_index_js_.string,
    gap: prop_types_index_js_.shape({
        rows: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number]),
        columns: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.number])
    }),
    align: prop_types_index_js_.shape({
        vertical: prop_types_index_js_.oneOf(['top', 'middle', 'bottom', 'stretch']),
        horizontal: prop_types_index_js_.oneOf(['start', 'center', 'end', 'stretch'])
    })
};
GridLayout.defaultProps = GridLayout_defaultProps;
GridLayout.displayName = 'KendoReactGridLayout';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/gridlayout/GridLayoutItem.js
var GridLayoutItem_assign = (undefined && undefined.__assign) || function () {
    GridLayoutItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return GridLayoutItem_assign.apply(this, arguments);
};





/**
 * Represents the [KendoReact GridLayoutItem component]({% slug overview_gridlayout %}).
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *     <GridLayout
 *       rows={[{height: 50}, {height: 50}, {height: 50}]}
 *       cols={[{width: 50}, {width: 50}, {width: 50}]}
 *       gap={{rows: 5, cols: 5}}
 *       align={{horizontal: 'stretch', vertical: 'stretch'}}
 *     >
 *       <GridLayoutItem row={1} col={1}>Box</GridLayoutItem>
 *       <GridLayoutItem row={1} col={2} colSpan={2}>Box</GridLayoutItem>
 *       <GridLayoutItem row={2} col={1} colSpan={2} rowSpan={2}>Box</GridLayoutItem>
 *       <GridLayoutItem row={2} col={3}>Box</GridLayoutItem>
 *       <GridLayoutItem row={3} col={3}>Box</GridLayoutItem>
 *     </GridLayout>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var GridLayoutItem = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var elementRef = index_js_.useRef(null);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current
    }); }, []);
    index_js_.useImperativeHandle(ref, getImperativeHandle);
    var className = props.className, style = props.style, id = props.id, children = props.children, row = props.row, col = props.col, rowSpan = props.rowSpan, colSpan = props.colSpan;
    var itemId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var gridLayoutItemStyles = GridLayoutItem_assign({ gridArea: "".concat(row || 'auto', " / ").concat(col || 'auto', " / ").concat(rowSpan ? 'span ' + rowSpan : 'auto', " / ").concat(colSpan ? 'span ' + colSpan : 'auto') }, style);
    return (index_js_.createElement("div", { ref: elementRef, className: className, style: gridLayoutItemStyles, id: id || itemId }, children));
});
GridLayoutItem.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    children: prop_types_index_js_.any,
    id: prop_types_index_js_.string
};
GridLayoutItem.displayName = 'KendoReactGridLayoutItem';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/breadcrumb/BreadcrumbListItem.js





/**
 * Represents the BreadcrumbListItem component.
 */
var BreadcrumbListItem = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var breadcrumbLIRef = index_js_.useRef(null);
    var focus = index_js_.useCallback(function () {
        if (breadcrumbLIRef.current) {
            breadcrumbLIRef.current.focus();
        }
    }, [breadcrumbLIRef]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: breadcrumbLIRef.current,
        focus: focus,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement("li", { ref: breadcrumbLIRef, id: props.id, style: props.style, className: (0,main_js_.classNames)('k-breadcrumb-item', {
            'k-breadcrumb-root-item': props.isFirstItem,
            'k-breadcrumb-last-item': props.isLastItem
        }, props.className) }, props.children));
});
var propTypes = {
    id: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    children: prop_types_index_js_.any,
    style: prop_types_index_js_.object
};
BreadcrumbListItem.displayName = 'KendoReactBreadcrumbListItem';
BreadcrumbListItem.propTypes = propTypes;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/breadcrumb/BreadcrumbDelimiter.js






/**
 * Represents the BreadcrumbDelimiter component.
 */
var BreadcrumbDelimiter = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var breadcrumbDelimiterRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () {
        var _a;
        return ({
            element: ((_a = breadcrumbDelimiterRef.current) === null || _a === void 0 ? void 0 : _a.element) || null,
            props: props
        });
    });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement(main_js_.IconWrap, { ref: breadcrumbDelimiterRef, id: props.id, "aria-hidden": true, tabIndex: props.tabIndex, style: props.style, name: props.dir === 'rtl' ? 'chevron-left' : 'chevron-right', icon: props.dir === 'rtl' ? index_es_js_.chevronLeftIcon : index_es_js_.chevronRightIcon, className: "k-breadcrumb-delimiter-icon", size: 'xsmall' }));
});
var BreadcrumbDelimiter_propTypes = {
    id: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    tabIndex: prop_types_index_js_.number,
    dir: prop_types_index_js_.string
};
BreadcrumbDelimiter.displayName = 'KendoReactBreadcrumbDelimiter';
BreadcrumbDelimiter.propTypes = BreadcrumbDelimiter_propTypes;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/breadcrumb/BreadcrumbLink.js





/**
 * Represents the [BreadcrumbLink](% slug api_layout_breadcrumblink %) component.
 *
 * @example
 * ```jsx
 * import { Breadcrumb, BreadcrumbLink } from '@progress/kendo-react-layout';
 * const items = [
 *   {
 *     id: 'home',
 *     text: 'Home',
 *     iconClass: 'k-i-home',
 *   },
 *   {
 *     id: 'products',
 *     text: 'Products',
 *   },
 *   {
 *     id: 'computer',
 *     text: 'Computer',
 *   }
 * ];
 *
 * const App = () => {
 * const [data,setData] = React.useState(items);
 * const handleItemSelect = (event, id) => {
 *   const itemIndex = data.findIndex((curValue) => curValue.id === id);
 *   const newData = data.slice(0, itemIndex + 1);
 *   setData(newData);
 * };
 *
 * const CustomLink = (data) => {
 *  return (
 *     <BreadcrumbLink
 *       id={data.id}
 *       text={data.text}
 *       onItemSelect={(event) => handleItemSelect(event, data.id)}
 *     />
 *   );
 * };
 *
 * return (
 *   <Breadcrumb
 *     data={data}
 *     breadcrumbLink={(items) => CustomLink(items)}
 *   />
 * )}
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var BreadcrumbLink = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var linkRef = index_js_.useRef(null);
    var focus = index_js_.useCallback(function () {
        if (linkRef.current) {
            linkRef.current.focus();
        }
    }, [linkRef]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: linkRef.current,
        focus: focus,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var handleItemSelect = index_js_.useCallback(function (event) {
        if (props.id) {
            (0,main_js_.dispatchEvent)(props.onItemSelect, event, event.target, { id: props.id });
        }
    }, [props.onItemSelect]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        if (props.id) {
            (0,main_js_.dispatchEvent)(props.onKeyDown, event, event.target, { id: props.id });
        }
    }, [props.onKeyDown]);
    return (index_js_.createElement("span", { "aria-current": props.ariaCurrent ? props.ariaCurrent : props.isLast, role: 'link', id: props.id, ref: linkRef, style: props.style, dir: (0,main_js_.useDir)(linkRef, props.dir), tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), className: (0,main_js_.classNames)({
            'k-breadcrumb-root-link': props.isFirst,
            'k-breadcrumb-link': !props.isFirst,
            'k-breadcrumb-icontext-link': props.iconClass !== undefined && props.text,
            'k-breadcrumb-icon-link': props.iconClass !== undefined && !props.text,
            'k-disabled': props.disabled
        }), onClick: handleItemSelect, onKeyDown: handleKeyDown },
        props.iconClass
            ?
                index_js_.createElement("span", { className: (0,main_js_.classNames)('k-icon', props.iconClass) })
            : props.icon ? props.icon : '',
        props.text &&
            index_js_.createElement("span", { className: "k-breadcrumb-item-text" }, props.text)));
});
var BreadcrumbLink_propTypes = {
    id: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    style: prop_types_index_js_.object,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    text: prop_types_index_js_.string,
    icon: prop_types_index_js_.node,
    iconClass: prop_types_index_js_.string,
    onClick: prop_types_index_js_.func,
    ariaCurrent: prop_types_index_js_.bool
};
BreadcrumbLink.displayName = 'KendoReactBreadcrumbLink';
// TODO: delete casting when @types/react is updated!
BreadcrumbLink.propTypes = BreadcrumbLink_propTypes;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/breadcrumb/BreadcrumbOrderedList.js





/**
 * Represents the BreadcrumbOrderedList component.
 */
var BreadcrumbOrderedList = index_js_.forwardRef(function (props, ref) {
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var orderedListRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: orderedListRef.current,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    return (index_js_.createElement(index_js_.Fragment, null, props.rootItem ? (index_js_.createElement("ol", { id: props.id, ref: orderedListRef, style: props.style, dir: (0,main_js_.useDir)(orderedListRef, props.dir), tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), className: (0,main_js_.classNames)('k-breadcrumb-root-item-container', {
            'k-disabled': props.disabled
        }, props.className) }, props.children))
        :
            (index_js_.createElement("ol", { id: props.id, ref: orderedListRef, style: props.style, dir: (0,main_js_.useDir)(orderedListRef, props.dir), tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled), className: (0,main_js_.classNames)('k-breadcrumb-container !k-flex-wrap', {
                    'k-disabled': props.disabled
                }, props.className) }, props.children))));
});
var BreadcrumbOrderedList_propTypes = {
    id: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    children: prop_types_index_js_.element,
    tabIndex: prop_types_index_js_.number,
    style: prop_types_index_js_.object,
    dir: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool
};
BreadcrumbOrderedList.displayName = 'KendoReactBreadcrumbOrderedList';
BreadcrumbOrderedList.propTypes = BreadcrumbOrderedList_propTypes;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/breadcrumb/Breadcrumb.js
var Breadcrumb_assign = (undefined && undefined.__assign) || function () {
    Breadcrumb_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Breadcrumb_assign.apply(this, arguments);
};









/**
 * Represents the Breadcrumb component.
 */
var Breadcrumb = index_js_.forwardRef(function (props, ref) {
    var _a;
    (0,dist_index_mjs_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var breadcrumbRef = index_js_.useRef(null);
    var OrderedListComponent = index_js_.useMemo(function () { return props.breadcrumbOrderedList || BreadcrumbOrderedList; }, [props.breadcrumbOrderedList]);
    var ListItemComponent = index_js_.useMemo(function () { return props.breadcrumbListItem || BreadcrumbListItem; }, [props.breadcrumbListItem]);
    var DelimiterComponent = index_js_.useMemo(function () { return props.breadcrumbDelimiter || BreadcrumbDelimiter; }, [props.breadcrumbDelimiter]);
    var LinkComponent = index_js_.useMemo(function () { return props.breadcrumbLink || BreadcrumbLink; }, [props.breadcrumbLink]);
    var focus = index_js_.useCallback(function () {
        if (breadcrumbRef.current) {
            breadcrumbRef.current.focus();
        }
    }, [breadcrumbRef]);
    var disabled = index_js_.useMemo(function () { return props.disabled || false; }, [props.disabled]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: breadcrumbRef.current,
        focus: focus,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var dir = (0,main_js_.useDir)(breadcrumbRef, props.dir);
    var handleItemSelect = function (event) {
        if (target.current) {
            (0,main_js_.dispatchEvent)(props.onItemSelect, event, event.target, { id: event.target.id });
        }
    };
    var handleKeyDown = function (event) {
        if (target.current) {
            (0,main_js_.dispatchEvent)(props.onKeyDown, event, event.target, { id: event.target.id });
        }
    };
    var valueField = (props.valueField || Breadcrumb_defaultProps.valueField);
    var iconField = (props.iconField || Breadcrumb_defaultProps.iconField);
    var iconClassField = (props.iconClassField || Breadcrumb_defaultProps.iconClassField);
    var textField = (props.textField || Breadcrumb_defaultProps.textField);
    var size = props.size || 'medium';
    return (index_js_.createElement("nav", { "aria-label": props.ariaLabel, id: props.id, style: props.style, ref: breadcrumbRef, dir: dir, className: (0,main_js_.classNames)('k-breadcrumb k-breadcrumb-wrap', (_a = {
                'k-rtl': dir === 'rtl',
                'k-disabled': disabled,
                'k-breadcrumb-md': !props.size
            },
            _a["k-breadcrumb-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
            _a), props.className) },
        index_js_.createElement(OrderedListComponent, { rootItem: true },
            index_js_.createElement(index_js_.Fragment, null, props.data.map(function (item, index, data) {
                var key = item[valueField];
                if (index === 0) {
                    return (index_js_.createElement(ListItemComponent, { key: key, isFirstItem: true, isLastItem: data.length - 1 === index },
                        index_js_.createElement(LinkComponent, Breadcrumb_assign({ isLast: data.length - 1 === index, isFirst: true, id: String(key), icon: item[iconField] || undefined, iconClass: item[iconClassField] ? String(item[iconClassField]) : undefined, text: item[textField] ? String(item[textField]) : undefined, disabled: item.disabled || false, onItemSelect: handleItemSelect, onKeyDown: handleKeyDown }, props))));
                }
            }))),
        index_js_.createElement(OrderedListComponent, { rootItem: false },
            index_js_.createElement(index_js_.Fragment, null, props.data.map(function (item, index, data) {
                var key = item[valueField];
                if (index !== 0) {
                    return (index_js_.createElement(ListItemComponent, { key: key, isFirstItem: false, isLastItem: data.length - 1 === index },
                        index_js_.createElement(DelimiterComponent, { dir: dir }),
                        index_js_.createElement(LinkComponent, Breadcrumb_assign({ isLast: data.length - 1 === index, isFirst: false, id: String(key), icon: item[iconField] || undefined, iconClass: item[iconClassField] ? String(item[iconClassField]) : undefined, text: item[textField] ? String(item[textField]) : undefined, disabled: item.disabled || false, onItemSelect: handleItemSelect, onKeyDown: handleKeyDown }, props))));
                }
            })))));
});
var Breadcrumb_propTypes = {
    id: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    className: prop_types_index_js_.string,
    breadcrumbOrderedList: prop_types_index_js_.elementType,
    breadcrumbListItem: prop_types_index_js_.elementType,
    breadcrumbDelimiter: prop_types_index_js_.elementType,
    breadcrumbLink: prop_types_index_js_.elementType,
    data: prop_types_index_js_.arrayOf(prop_types_index_js_.shape({
        id: prop_types_index_js_.string,
        text: prop_types_index_js_.string,
        icon: prop_types_index_js_.any,
        iconClass: prop_types_index_js_.string
    })),
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl']),
    disabled: prop_types_index_js_.bool,
    valueField: prop_types_index_js_.string,
    textField: prop_types_index_js_.string,
    iconField: prop_types_index_js_.string,
    iconClassField: prop_types_index_js_.string,
    onItemSelect: prop_types_index_js_.func,
    ariaLabel: prop_types_index_js_.string
};
var Breadcrumb_defaultProps = {
    valueField: 'id',
    textField: 'text',
    iconField: 'icon',
    iconClassField: 'iconClass'
};
Breadcrumb.displayName = 'KendoReactBreadcrumb';
// TODO: delete casting when @types/react is updated!
Breadcrumb.propTypes = Breadcrumb_propTypes;
Breadcrumb.defaultProps = Breadcrumb_defaultProps;

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-react-animation@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-s_b508ebb26158291168a699344d34434c/node_modules/@progress/kendo-react-animation/dist/es/Animation.js + 2 modules
var Animation = __webpack_require__(41100);
;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetItem.js



/**
 * The KendoReact ActionSheetItem component.
 */
var ActionSheetItem = function (props) {
    var itemRef = index_js_.useRef(null);
    var onClick = index_js_.useCallback(function (event) {
        if (props.onClick) {
            props.onClick.call(undefined, {
                syntheticEvent: event,
                item: props.item,
                title: props.title
            });
        }
    }, [props.item, props.title, props.onClick]);
    index_js_.useEffect(function () {
        if (itemRef.current && props.focused) {
            itemRef.current.focus();
        }
    }, [props.focused]);
    return (index_js_.createElement("span", { style: props.style, tabIndex: props.tabIndex, className: (0,main_js_.classNames)('k-actionsheet-item', 'k-cursor-pointer', props.disabled && 'k-disabled', props.className), ref: itemRef, role: "button", "aria-disabled": props.disabled, onClick: onClick },
        index_js_.createElement("span", { className: "k-actionsheet-action" },
            props.icon && index_js_.createElement("span", { className: "k-icon-wrap" }, props.icon),
            (props.title || props.description) && (index_js_.createElement("span", { className: "k-actionsheet-item-text" },
                props.title && index_js_.createElement("span", { className: "k-actionsheet-item-title" }, props.title),
                props.description && index_js_.createElement("span", { className: "k-actionsheet-item-description" }, props.description))))));
};
ActionSheetItem.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    description: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    group: prop_types_index_js_.oneOf(['top', 'bottom']),
    icon: prop_types_index_js_.element,
    title: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetHeader.js



/**
 * @hidden
 */
var headerDisplayName = 'ActionSheetHeader';
/**
 * The KendoReact ActionSheetHeader component.
 */
var ActionSheetHeader = function (props) {
    return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-actionsheet-titlebar', props.className) }, props.children));
};
ActionSheetHeader.propTypes = {
    className: prop_types_index_js_.string
};
/**
 * @hidden
 */
ActionSheetHeader.displayName = headerDisplayName;
/**
 * @hidden
 */
ActionSheetHeader.propTypes = {
    children: prop_types_index_js_.any
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetFooter.js



/**
 * @hidden
 */
var footerDisplayName = 'ActionSheetFooter';
/**
 * The KendoReact ActionSheetFooter component.
 */
var ActionSheetFooter = function (props) {
    return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-actionsheet-footer', props.className) }, props.children));
};
ActionSheetFooter.propTypes = {
    className: prop_types_index_js_.string
};
/**
 * @hidden
 */
ActionSheetFooter.displayName = footerDisplayName;
/**
 * @hidden
 */
ActionSheetFooter.propTypes = {
    children: prop_types_index_js_.any
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetContent.js



/**
 * @hidden
 */
var contentDisplayName = 'ActionSheetContent';
/**
 * The KendoReact ActionSheetContent component.
 */
var ActionSheetContent = function (props) {
    return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-actionsheet-content', props.className) }, props.children));
};
ActionSheetContent.propTypes = {
    className: prop_types_index_js_.string
};
/**
 * @hidden
 */
ActionSheetContent.displayName = contentDisplayName;
/**
 * @hidden
 */
ActionSheetContent.propTypes = {
    children: prop_types_index_js_.any
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheet.js
var ActionSheet_extends = (undefined && undefined.__extends) || (function () {
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
var ActionSheet_assign = (undefined && undefined.__assign) || function () {
    ActionSheet_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ActionSheet_assign.apply(this, arguments);
};
var ActionSheet_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};









/**
 * Represents the [KendoReact ActionSheet]({% slug overview_actionsheet %}) component.
 */
var ActionSheet = /** @class */ (function (_super) {
    ActionSheet_extends(ActionSheet, _super);
    /** @hidden */
    function ActionSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.actionSheetRef = index_js_.createRef();
        _this.actionSheetTitleClass = 'k-actionsheet-title';
        _this.ariaLabeledBy = _this.actionSheetTitleClass + 1;
        _this.animationDuration = 300;
        _this.bottomPosition = { bottom: '0', width: '100%' };
        _this.handleKeyDown = function (e) {
            if (_this.props.navigatable) {
                _this.navigation.triggerKeyboardEvent(e);
            }
        };
        _this.onTab = function (target, nav, ev) {
            ev.preventDefault();
            if (ev.shiftKey) {
                nav.focusPrevious(target);
            }
            else {
                nav.focusNext(target);
            }
        };
        _this.handleOverlayClick = function (ev) {
            /** Deprecated */
            if (_this.props.onOverlayClick) {
                _this.props.onOverlayClick.call(undefined, ev);
            }
            if (_this.props.onClose) {
                _this.props.onClose.call(undefined, ev);
            }
            if (!_this.props.animation) {
                _this.hideActionSheet();
            }
        };
        _this.handleItemClick = function (ev) {
            /** Deprecated */
            if (_this.props.onItemClick) {
                _this.props.onItemClick.call(undefined, ev);
            }
            if (_this.props.onItemSelect) {
                _this.props.onItemSelect.call(undefined, ev);
            }
            if (!_this.props.animation) {
                _this.hideActionSheet();
            }
        };
        _this.onEnter = function (target, nav, ev) {
            if (target.ariaDisabled) {
                return;
            }
            var isItem = target.className && target.className.indexOf
                ? target.className.indexOf('k-actionsheet-item') !== -1
                : false;
            var allItems = nav.elements.filter(function (e) { return e.className.indexOf('k-actionsheet-item') !== -1; });
            /** Deprecated */
            if (isItem && _this.props.onItemClick) {
                ev.preventDefault();
                var item = _this.props.items[allItems.indexOf(target)];
                _this.props.onItemClick.call(undefined, {
                    syntheticEvent: ev,
                    item: item,
                    title: item && item.title
                });
            }
            if (isItem && _this.props.onItemSelect) {
                ev.preventDefault();
                var item = _this.props.items[allItems.indexOf(target)];
                _this.props.onItemSelect.call(undefined, {
                    syntheticEvent: ev,
                    item: item,
                    title: item && item.title
                });
            }
            if (!_this.props.animation) {
                _this.hideActionSheet();
            }
        };
        _this.onEscape = function (_target, _nav, ev) {
            /** Deprecated */
            if (_this.props.onOverlayClick) {
                ev.preventDefault();
                _this.props.onOverlayClick.call(undefined, ev);
            }
            if (_this.props.onClose) {
                ev.preventDefault();
                _this.props.onClose.call(undefined, ev);
            }
            if (!_this.props.animation) {
                _this.hideActionSheet();
            }
        };
        _this.hideActionSheet = function () {
            _this.setState({ show: false });
        };
        _this.children = function (children) {
            var components = {};
            index_js_.Children.forEach(children, function (child) {
                if (child) {
                    components[child.type.displayName] = child;
                }
                ;
            });
            return components;
        };
        _this.state = {
            show: false,
            slide: false
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    /** @hidden */
    ActionSheet.prototype.componentDidMount = function () {
        if (this.props.expand && !this.state.show) {
            this.setState({ show: true });
        }
    };
    /** @hidden */
    ActionSheet.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var _this = this;
        var currentRef = this.actionSheetRef.current;
        if (this.props.expand && !this.state.show) {
            this.setState({ show: true });
        }
        if (this.props.expand && this.state.show && !this.state.slide) {
            this.setState({ slide: true });
        }
        if (!this.props.expand && this.state.show && this.state.slide) {
            this.setState({ slide: false });
        }
        if (prevState !== this.state && this.state.slide && currentRef && !this.props.className) {
            currentRef.style.setProperty('--kendo-actionsheet-height', 'auto');
            currentRef.style.setProperty('--kendo-actionsheet-max-height', 'none');
        }
        if (currentRef) {
            if (this.props.navigatable) {
                var innerElements = [
                    '.k-actionsheet-footer',
                    '.k-actionsheet-content',
                    '.k-actionsheet-titlebar'
                ].map(function (selector) {
                    return main_js_.FOCUSABLE_ELEMENTS.concat(_this.props.navigatableElements).map(function (focusableSelector) { return "".concat(selector, " ").concat(focusableSelector); });
                });
                var selectors = ActionSheet_spreadArray([
                    '.k-actionsheet-item'
                ], innerElements.flat(), true);
                this.navigation = new main_js_.Navigation({
                    tabIndex: this.props.tabIndex || 0,
                    root: this.actionSheetRef,
                    rovingTabIndex: false,
                    selectors: selectors,
                    keyboardEvents: {
                        keydown: {
                            'Tab': this.onTab,
                            'Enter': this.onEnter,
                            'Escape': this.onEscape
                        }
                    }
                });
                this.navigation.focusElement(this.navigation.first, null);
            }
        }
    };
    ;
    /** @hidden */
    ActionSheet.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, animationStyles = _a.animationStyles, animation = _a.animation, expand = _a.expand, tabIndex = _a.tabIndex, items = _a.items;
        var topGroupItems = items === null || items === void 0 ? void 0 : items.filter(function (item) { return !item.group || item.group === 'top'; });
        var bottomGroupItems = items === null || items === void 0 ? void 0 : items.filter(function (item) { return item.group === 'bottom'; });
        var shouldRenderSeparator = (topGroupItems && topGroupItems.length > 0) && (bottomGroupItems && bottomGroupItems.length > 0);
        var children = this.children(this.props.children);
        var animationDuration = this.props.animationDuration || this.animationDuration;
        var actionSheetPanel = this.state.slide && index_js_.createElement("div", { className: (0,main_js_.classNames)('k-actionsheet', this.props.className, {
                'k-actionsheet-bottom': !this.props.className
            }), role: "dialog", "aria-modal": "true", "aria-hidden": false, "aria-labelledby": this.ariaLabeledBy, ref: this.actionSheetRef, onKeyDown: this.handleKeyDown },
            (children[headerDisplayName] && !title && !subTitle) && children[headerDisplayName],
            (title || subTitle) && (index_js_.createElement("div", { className: "k-actionsheet-titlebar k-text-center" },
                index_js_.createElement("div", { className: "k-actionsheet-titlebar-group k-hbox" },
                    index_js_.createElement("div", { className: this.actionSheetTitleClass, id: this.ariaLabeledBy },
                        title && index_js_.createElement("div", null, title),
                        subTitle && index_js_.createElement("div", { className: "k-actionsheet-subtitle" }, subTitle))))),
            children[contentDisplayName] || index_js_.createElement("div", { className: "k-actionsheet-content" },
                index_js_.createElement("div", { className: "k-list-ul", role: "group" }, topGroupItems && topGroupItems.map(function (item, idx) {
                    return (index_js_.createElement(ActionSheetItem, ActionSheet_assign({}, item, { id: idx, key: idx, item: item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick })));
                })),
                shouldRenderSeparator && index_js_.createElement("hr", { className: "k-hr" }),
                index_js_.createElement("div", { className: "k-list-ul", role: "group" }, bottomGroupItems && bottomGroupItems.map(function (item, idx) {
                    return (index_js_.createElement(ActionSheetItem, ActionSheet_assign({}, item, { id: idx + ((topGroupItems === null || topGroupItems === void 0 ? void 0 : topGroupItems.length) || 0), key: idx, item: item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick })));
                }))),
            children[footerDisplayName]);
        return (index_js_.createElement(index_js_.Fragment, null, expand || this.state.show ? (index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement("div", { className: "k-actionsheet-container" },
                index_js_.createElement("div", { className: "k-overlay", onClick: this.handleOverlayClick }),
                animation ? index_js_.createElement(Animation/* Animation */.X, { transitionName: this.state.slide ? 'slide-up' : 'slide-down', onExited: this.hideActionSheet, transitionEnterDuration: animationDuration, transitionExitDuration: animationDuration, animationEnteringStyle: animationStyles || this.bottomPosition, animationEnteredStyle: animationStyles || this.bottomPosition, animationExitingStyle: animationStyles || this.bottomPosition, exit: true, enter: true, appear: false }, actionSheetPanel)
                    : actionSheetPanel)))
            : null));
    };
    ;
    /** @hidden */
    ActionSheet.displayName = 'KendoReactActionSheet';
    /** @hidden */
    ActionSheet.propTypes = {
        items: prop_types_index_js_.array,
        subTitle: prop_types_index_js_.string,
        title: prop_types_index_js_.string,
        navigatable: prop_types_index_js_.bool,
        navigatableElements: prop_types_index_js_.array
    };
    /** @hidden */
    ActionSheet.defaultProps = {
        navigatable: true,
        navigatableElements: []
    };
    return ActionSheet;
}(index_js_.Component));

;

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/timeline/TimelineCard.js












var TimelineCard = function (props) {
    var ANIMATION_DURATION = 400;
    var _a = props.eventData, title = _a.title, subtitle = _a.subtitle, actions = _a.actions, images = _a.images, description = _a.description;
    var _b = index_js_.useState(props.eventData.opened || false), open = _b[0], setOpen = _b[1];
    var _c = index_js_.useState(props.eventData.opened || !!props.collapsible), opened = _c[0], setOpened = _c[1];
    var toggleCard = function (event) {
        setOpen(!open);
        if (props.onChange) {
            var toggleEvent = {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                eventData: props.eventData
            };
            props.onChange.call(undefined, toggleEvent);
        }
    };
    var actionClick = function (event) {
        if (props.onActionClick) {
            var actionClickEvent = {
                syntheticEvent: event,
                nativeEvent: event.nativeEvent,
                eventData: props.eventData
            };
            props.onActionClick.call(undefined, actionClickEvent);
        }
    };
    var cardBody = function () { return (index_js_.createElement(index_js_.Fragment, null,
        index_js_.createElement(CardBody, null,
            index_js_.createElement("div", { className: "k-card-description" },
                index_js_.createElement("p", null, description),
                images && images.map(function (image, index) { return (index_js_.createElement(CardImage, { key: index, src: image.src })); }))),
        index_js_.createElement(CardActions, null, actions && actions.map(function (action, index) { return (index_js_.createElement("a", { key: index, href: action.url, className: "k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary", onClick: actionClick }, action.text)); })))); };
    return (index_js_.createElement("div", { "data-testid": "k-timeline-card", className: (0,main_js_.classNames)('k-timeline-card', { 'k-collapsed': props.collapsible && opened }) },
        index_js_.createElement(Card, { "aria-live": "polite", "aria-describedby": props.id, "aria-atomic": "true", tabIndex: props.tabindex, role: props.horizontal ? 'tabpanel' : 'button', "aria-expanded": props.collapsible && opened },
            index_js_.createElement("span", { style: props.calloutStyle, className: (0,main_js_.classNames)('k-timeline-card-callout', 'k-card-callout', { 'k-callout-n': props.horizontal }, { 'k-callout-e': props.alternated && !props.horizontal }, { 'k-callout-w': !props.alternated && !props.horizontal }) }),
            index_js_.createElement("div", { className: 'k-card-inner' },
                index_js_.createElement(CardHeader, null,
                    index_js_.createElement(CardTitle, null,
                        index_js_.createElement("span", { className: "k-event-title" }, title),
                        props.collapsible && index_js_.createElement("span", { onClick: function (event) { return toggleCard(event); }, className: "k-event-collapse k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button" },
                            index_js_.createElement(main_js_.SvgIcon, { icon: index_es_js_.chevronRightIcon }))),
                    subtitle && index_js_.createElement(CardSubtitle, null, subtitle)),
                props.collapsible
                    ? index_js_.createElement(Reveal/* Reveal */.g, { transitionEnterDuration: props.transitionDuration || ANIMATION_DURATION, transitionExitDuration: props.transitionDuration || ANIMATION_DURATION, onBeforeEnter: function () { return setOpened(false); }, onAfterExited: function () { return setOpened(true); } }, open ? cardBody() : null)
                    : cardBody()))));
};
TimelineCard.propTypes = {
    onChange: prop_types_index_js_.func,
    onActionClick: prop_types_index_js_.func
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/timeline/utils.js
/**
 * Sort the events list based on event date.
 */
var sortEventList = function (eventList) {
    var sortedEvents = eventList.sort(function (a, b) {
        return a.date.getTime() - b.date.getTime();
    });
    return sortedEvents;
};
/**
 * @hidden
 */
var addYearsFlags = function (eventsData) {
    var yearFlag;
    var trackData = eventsData.reduce(function (arr, eventData) {
        if (yearFlag !== eventData.date.getFullYear()) {
            yearFlag = eventData.date.getFullYear();
            arr.push({ yearFlag: yearFlag }, eventData);
        }
        else {
            arr.push(eventData);
        }
        return arr;
    }, []);
    return trackData;
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/timeline/TimelineHorizontal.js
var TimelineHorizontal_assign = (undefined && undefined.__assign) || function () {
    TimelineHorizontal_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TimelineHorizontal_assign.apply(this, arguments);
};







var TimelineHorizontal = function (props) {
    var DEFAULT_EVENT_POINT_WITH = 150;
    var EVENT_CARD_TRANSITION_DURATION = 300;
    var intl = (0,index_mjs_.useInternationalization)();
    var _a = index_js_.useState(false), arrowLeft = _a[0], setArrowLeft = _a[1];
    var _b = index_js_.useState(true), arrowRight = _b[0], setArrowRight = _b[1];
    var _c = index_js_.useState(), calloutOffset = _c[0], setCalloutOffset = _c[1];
    var _d = index_js_.useState(0), translate = _d[0], setTranslate = _d[1];
    var _e = index_js_.useState(), tabFlexWith = _e[0], setTabFlexWith = _e[1];
    var _f = index_js_.useState(0), visibleTabs = _f[0], setVisibleTabs = _f[1];
    var _g = index_js_.useState(0), firstIndexInView = _g[0], setFirstIndexInView = _g[1];
    var _h = index_js_.useState(1), currentEvent = _h[0], setCurrentEvent = _h[1];
    var _j = index_js_.useState(), eventsToShow = _j[0], setEventsToShow = _j[1];
    var _k = index_js_.useState(), eventsOnTrack = _k[0], setEventsOnTrack = _k[1];
    var _l = index_js_.useState([0, 0, 0]), eventsPositions = _l[0], setEventsPositions = _l[1];
    var _m = index_js_.useState(0), eventsTranslate = _m[0], setEventsTranslate = _m[1];
    var _o = index_js_.useState(1), pivotEvent = _o[0], setPivotEvent = _o[1];
    var trackWrapRef = index_js_.useRef(null);
    var trackRef = index_js_.useRef(null);
    var arrowLeftRef = index_js_.useRef(null);
    var eventsData = props.eventsData, dateFormat = props.dateFormat, navigatable = props.navigatable, onActionClick = props.onActionClick;
    var tabWith = tabFlexWith ? "".concat(tabFlexWith, "%") : "".concat(DEFAULT_EVENT_POINT_WITH, "px");
    var navigation = index_js_.useRef(new main_js_.Navigation({
        tabIndex: 0,
        root: trackWrapRef,
        selectors: ['.k-timeline-scrollable-wrap']
    }));
    index_js_.useEffect(function () {
        if (trackWrapRef.current) {
            if (props.navigatable) {
                setTimeout(function () {
                    var firstCell = navigation.current.first;
                    if (firstCell) {
                        firstCell.setAttribute('tabindex', String(0));
                    }
                }, 0);
                navigation.current.keyboardEvents = {
                    keydown: {
                        'ArrowRight': onRight,
                        'ArrowLeft': onLeft,
                        'End': onEnd,
                        'Home': onHome
                    }
                };
            }
        }
    }, [props.navigatable, currentEvent, visibleTabs]);
    index_js_.useEffect(function () {
        navigation.current.update();
    });
    var handleKeyDown = function (e) {
        if (navigatable && navigation.current) {
            navigation.current.triggerKeyboardEvent(e);
        }
    };
    index_js_.useEffect(function () {
        var _a;
        var observerResize = main_js_.canUseDOM && window.ResizeObserver && new window.ResizeObserver(repositionEvents);
        var trackList = trackRef.current;
        var cardWith = ((_a = trackWrapRef === null || trackWrapRef === void 0 ? void 0 : trackWrapRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
        if (observerResize && trackList) {
            observerResize.observe(trackList);
        }
        setYearsFlags();
        repositionEvents();
        setEventsPositions([cardWith, 0, -cardWith]);
        return function () {
            observerResize && observerResize.disconnect();
        };
    }, []);
    index_js_.useEffect(function () {
        var trackList = trackRef.current;
        var currentTab = trackList && trackList.children[currentEvent];
        if (currentTab) {
            var tabWidth = currentTab.offsetWidth;
            var leftArrow = !(translate >= 0);
            setArrowLeft(leftArrow);
            if (eventsOnTrack) {
                var rightArrow = eventsOnTrack.length * tabWidth > (visibleTabs * tabWidth) * (((translate * -1) + 100) / 100);
                setArrowRight(rightArrow);
            }
            if (((trackList === null || trackList === void 0 ? void 0 : trackList.offsetWidth) * -translate) / 100 >= trackList.children.length * tabWidth) {
                // TODO: on resize window reposition
                setYearsFlags();
                repositionEvents();
                setTranslate((((currentTab.offsetLeft - currentTab.offsetWidth) / (visibleTabs * currentTab.offsetWidth)) * 100) * -1);
            }
            positionCallout(currentTab);
        }
    }, [visibleTabs, tabFlexWith, currentEvent]);
    var onRight = function (_target, _nav, ev) {
        if (trackRef.current) {
            var nextChildren = trackRef.current.children[currentEvent + 1];
            var nextPoint = nextChildren && nextChildren.classList.contains('k-timeline-flag-wrap')
                ? currentEvent + 2
                : currentEvent + 1;
            if (eventsOnTrack && eventsOnTrack.length <= nextPoint) {
                return;
            }
            if ((visibleTabs + firstIndexInView) <= nextPoint) {
                handleNextClick();
            }
            onPointClick(nextPoint, ev);
        }
    };
    var onLeft = function (_target, _nav, ev) {
        if (trackRef.current) {
            var prevChildren = trackRef.current && trackRef.current.children[currentEvent - 1];
            var prevPoint = prevChildren && prevChildren.classList.contains('k-timeline-flag-wrap')
                ? currentEvent - 2
                : currentEvent - 1;
            if (prevPoint <= 0) {
                return;
            }
            if (prevPoint < firstIndexInView) {
                handlePrevClick();
            }
            onPointClick(prevPoint, ev);
        }
    };
    var onHome = function (_target, _nav, ev) {
        if (trackRef.current) {
            if (currentEvent <= 1) {
                return;
            }
            var firstChild = 1;
            var translateUpdate = 0;
            moveView(true, firstChild, 0, translateUpdate);
            onPointClick(firstChild, ev);
        }
    };
    var onEnd = function (_target, _nav, ev) {
        if (trackRef.current) {
            var lastChild = trackRef.current && trackRef.current.children.length - 1;
            if (lastChild <= currentEvent) {
                return;
            }
            var scrollViewsCount = Math.floor(lastChild / visibleTabs);
            var translateUpdate = (scrollViewsCount) * -100;
            var firstTabToUpdate = scrollViewsCount * visibleTabs;
            moveView(true, lastChild, firstTabToUpdate, translateUpdate);
            onPointClick(lastChild, ev);
        }
    };
    var setYearsFlags = function () {
        var trackData = addYearsFlags(eventsData);
        setEventsOnTrack(trackData);
        setEventsToShow([trackData[currentEvent - 1], trackData[currentEvent], trackData[currentEvent + 1]]);
    };
    var handlePrevClick = function () {
        var _a;
        var trackList = trackRef.current;
        if (trackList && eventsOnTrack) {
            var firstTabToUpdate = firstIndexInView - visibleTabs;
            var lastIndexInView = firstIndexInView - 1;
            var currentEventToUpdate = eventsOnTrack[lastIndexInView] && ((_a = eventsOnTrack[lastIndexInView]) === null || _a === void 0 ? void 0 : _a.yearFlag)
                ? lastIndexInView - 1
                : lastIndexInView;
            var translateUpdate = translate + 100 > 0 ? 0 : translate + 100;
            moveView(false, currentEventToUpdate, firstTabToUpdate, translateUpdate);
        }
    };
    var handleNextClick = function () {
        var trackList = trackRef.current;
        if (trackList && eventsOnTrack) {
            var firstTabToUpdate = firstIndexInView + visibleTabs;
            var currentEventToUpdate = eventsOnTrack[firstTabToUpdate] && eventsOnTrack[firstTabToUpdate].yearFlag
                ? firstTabToUpdate + 1
                : firstTabToUpdate;
            var translateUpdate = translate - 100;
            moveView(true, currentEventToUpdate, firstTabToUpdate, translateUpdate);
        }
    };
    var moveView = function (direction, eventToUpdate, firstTab, translateToUpdate) {
        updatePage(direction, eventToUpdate);
        repositionEvents();
        setFirstIndexInView(firstTab);
        setTranslate(translateToUpdate);
        setCurrentEvent(eventToUpdate);
    };
    var updatePage = function (forward, current) {
        var _a;
        if (eventsToShow && eventsOnTrack) {
            var pageToUpdateIndex_1 = getPivotIndex(forward, pivotEvent);
            var eventCardsArray_1 = Object.assign([], eventsToShow, (_a = {}, _a[pageToUpdateIndex_1] = eventsOnTrack[current], _a));
            setEventsToShow(eventCardsArray_1);
            setPivotEvent(pageToUpdateIndex_1);
            setEventsTranslate(forward ? -100 : 100);
            setTimeout(function () {
                var _a, _b;
                var _c;
                var cardWith = (_c = trackWrapRef.current) === null || _c === void 0 ? void 0 : _c.offsetWidth;
                var repositionArray = Object.assign([], eventsPositions, (_a = {},
                    _a[pageToUpdateIndex_1] = 0,
                    _a[getPivotIndex(true, pageToUpdateIndex_1)] = cardWith,
                    _a[getPivotIndex(false, pageToUpdateIndex_1)] = cardWith && -cardWith,
                    _a));
                var clearEventsArray = Object.assign([], eventCardsArray_1, (_b = {},
                    _b[getPivotIndex(true, pageToUpdateIndex_1)] = {},
                    _b[getPivotIndex(false, pageToUpdateIndex_1)] = {},
                    _b));
                setEventsToShow(clearEventsArray);
                setEventsPositions(repositionArray);
                setEventsTranslate(0);
            }, props.transitionDuration || EVENT_CARD_TRANSITION_DURATION);
        }
    };
    var getPivotIndex = function (forward, index) {
        var pageIndex = forward ? index + 1 : index - 1;
        if (eventsToShow) {
            var validIndex = pageIndex < 0
                ? eventsToShow.length - 1
                : pageIndex % eventsToShow.length;
            return validIndex;
        }
        return 0;
    };
    var positionCallout = function (element) {
        var _a;
        var offsetToSet = ((currentEvent - firstIndexInView) * element.offsetWidth) +
            (element.offsetWidth / 2) +
            (((_a = arrowLeftRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0);
        setCalloutOffset(offsetToSet);
    };
    var onPointClick = function (index, event) {
        event.preventDefault();
        if (index > currentEvent) {
            updatePage(true, index);
        }
        else if (index < currentEvent) {
            updatePage(false, index);
        }
        setCurrentEvent(index);
    };
    var repositionEvents = index_js_.useCallback(function () {
        var trackList = trackRef.current;
        var currentTab = trackList && trackList.children[currentEvent];
        if (trackList instanceof HTMLElement && currentTab) {
            var visibleTabsCount = Math.round(trackList.offsetWidth / DEFAULT_EVENT_POINT_WITH);
            positionCallout(currentTab);
            setTabFlexWith(100 / visibleTabsCount);
            setVisibleTabs(visibleTabsCount);
        }
    }, []);
    var eventCardAnimationStyle = function () { return ({
        transitionDuration: "".concat(EVENT_CARD_TRANSITION_DURATION, "ms")
    }); };
    var eventCardReorderStyle = function (translation) { return ({
        transform: "translateX(".concat(translation, "%)"), transformOrigin: 'left top'
    }); };
    return (index_js_.createElement(index_js_.Fragment, null,
        index_js_.createElement("div", { className: "k-timeline-track-wrap", ref: trackWrapRef, onKeyDown: handleKeyDown },
            index_js_.createElement("a", { ref: arrowLeftRef, "aria-hidden": "true", onClick: function () { return arrowLeft && handlePrevClick(); }, className: (0,main_js_.classNames)('k-timeline-arrow', 'k-timeline-arrow-left', 'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button', { 'k-disabled': !arrowLeft }) },
                index_js_.createElement(main_js_.SvgIcon, { icon: index_es_js_.caretAltLeftIcon })),
            index_js_.createElement("a", { "aria-hidden": "true", onClick: function () { return arrowRight && handleNextClick(); }, className: (0,main_js_.classNames)('k-timeline-arrow', 'k-timeline-arrow-right', 'k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button', { 'k-disabled': !arrowRight }) },
                index_js_.createElement(main_js_.SvgIcon, { icon: index_es_js_.caretAltRightIcon })),
            index_js_.createElement("div", { className: "k-timeline-track" },
                index_js_.createElement("ul", { ref: trackRef, className: "k-timeline-scrollable-wrap", role: "tablist", tabIndex: 0, style: { transform: "translateX(".concat(translate, "%)") } }, eventsOnTrack && eventsOnTrack.map(function (event, index) { return (event.yearFlag
                    ? (index_js_.createElement("li", { role: "none", className: "k-timeline-track-item k-timeline-flag-wrap", style: { flex: "1 0 ".concat(tabWith) }, key: index },
                        index_js_.createElement("span", { className: "k-timeline-flag" }, event.yearFlag)))
                    : (index_js_.createElement("li", { role: "tab", className: (0,main_js_.classNames)('k-timeline-track-item', { 'k-focus': index === currentEvent }), "aria-selected": index === currentEvent, style: { flex: "1 0 ".concat(tabWith) }, key: index },
                        index_js_.createElement("div", { className: "k-timeline-date-wrap" },
                            index_js_.createElement("span", { className: "k-timeline-date" }, intl.formatDate(event.date, dateFormat))),
                        index_js_.createElement("span", { onClick: function (e) { return onPointClick(index, e); }, className: "k-timeline-circle" })))); })))),
        index_js_.createElement("div", { className: "k-timeline-events-list" },
            index_js_.createElement("ul", { className: "k-timeline-scrollable-wrap", style: eventsTranslate === 0
                    ? TimelineHorizontal_assign({}, eventCardReorderStyle(eventsTranslate)) : TimelineHorizontal_assign(TimelineHorizontal_assign({}, eventCardReorderStyle(eventsTranslate)), eventCardAnimationStyle()) }, eventsToShow && eventsToShow.map(function (eventData, index) {
                return (index_js_.createElement("li", { key: index, className: "k-timeline-event", style: { transform: "translate3d(".concat(eventsPositions[index], "px, 0px, 0px)") } }, eventData && index_js_.createElement(TimelineCard, { tabindex: eventsPositions[index] === 0 ? 0 : -1, eventData: eventData, onActionClick: onActionClick, horizontal: true, collapsible: false, calloutStyle: { left: "".concat(calloutOffset, "px") } })));
            })))));
};
TimelineHorizontal.propTypes = {
    onActionClick: prop_types_index_js_.func
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/timeline/TimelineVertical.js






var TimelineVertical = function (props) {
    var intl = (0,index_mjs_.useInternationalization)();
    var _a = index_js_.useState(), eventsList = _a[0], setEventsList = _a[1];
    var collapsibleEvents = props.collapsibleEvents, transitionDuration = props.transitionDuration, eventsData = props.eventsData, dateFormat = props.dateFormat, alterMode = props.alterMode, navigatable = props.navigatable, onChange = props.onChange, onActionClick = props.onActionClick;
    var eventAxisRef = index_js_.useRef(null);
    var navigation = index_js_.useRef(new main_js_.Navigation({
        tabIndex: 0,
        root: eventAxisRef,
        selectors: ['.k-card-vertical']
    }));
    index_js_.useEffect(function () {
        if (eventAxisRef.current) {
            if (props.navigatable) {
                setTimeout(function () {
                    var firstCell = navigation.current.first;
                    if (firstCell) {
                        firstCell.setAttribute('tabindex', String(0));
                    }
                }, 0);
                navigation.current.keyboardEvents = {
                    keydown: {
                        'Space': onEnter,
                        'Enter': onEnter
                    }
                };
            }
        }
    }, [props.navigatable]);
    index_js_.useEffect(function () {
        setEventsList(addYearsFlags(eventsData));
    }, []);
    index_js_.useEffect(function () {
        navigation.current.update();
    });
    var handleKeyDown = function (e) {
        if (navigatable && navigation.current) {
            navigation.current.triggerKeyboardEvent(e);
        }
    };
    var onEnter = function (target, _nav, ev) {
        ev.preventDefault();
        var element = target.querySelector('.k-card-title .k-event-collapse');
        if (element) {
            element.click();
        }
    };
    var _alterIncreaser = 0;
    return (index_js_.createElement("ul", { ref: eventAxisRef, onKeyDown: handleKeyDown }, eventsList && eventsList.map(function (event, index) {
        var cardId = (0,main_js_.guid)();
        var oddIndex = (index + _alterIncreaser) % 2 === 0;
        if (event.yearFlag) {
            _alterIncreaser += 1;
        }
        return (index_js_.createElement(index_js_.Fragment, { key: index }, event.yearFlag
            ? (index_js_.createElement("li", { className: "k-timeline-flag-wrap" },
                index_js_.createElement("span", { className: "k-timeline-flag" }, event.yearFlag)))
            : (index_js_.createElement("li", { className: (0,main_js_.classNames)('k-timeline-event', { 'k-reverse': oddIndex }) },
                index_js_.createElement("div", { className: "k-timeline-date-wrap" },
                    index_js_.createElement("span", { className: "k-timeline-date", id: cardId }, intl.formatDate(event.date, dateFormat))),
                index_js_.createElement("a", { className: "k-timeline-circle" }),
                index_js_.createElement(TimelineCard, { id: cardId, tabindex: navigatable ? 0 : -1, eventData: event, alternated: alterMode && oddIndex, collapsible: collapsibleEvents, transitionDuration: transitionDuration, onChange: onChange, onActionClick: onActionClick })))));
    })));
};
TimelineVertical.propTypes = {
    onActionClick: prop_types_index_js_.func
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/timeline/Timeline.js
var Timeline_assign = (undefined && undefined.__assign) || function () {
    Timeline_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Timeline_assign.apply(this, arguments);
};





var Timeline = function (props) {
    var combinedProps = Timeline_assign({ alterMode: false, collapsibleEvents: true, dateFormat: 'MMM dd, yyyy' }, props);
    var collapsibleEvents = combinedProps.collapsibleEvents, transitionDuration = combinedProps.transitionDuration, className = combinedProps.className, alterMode = combinedProps.alterMode, navigatable = combinedProps.navigatable, horizontal = combinedProps.horizontal, events = combinedProps.events, dateFormat = combinedProps.dateFormat, onChange = combinedProps.onChange, onActionClick = combinedProps.onActionClick;
    var _a = index_js_.useState(), trackAxisWidth = _a[0], setTrackAxisWidth = _a[1];
    var trackWrapRef = index_js_.useRef(null);
    index_js_.useEffect(function () {
        if (trackWrapRef.current) {
            setTrackAxisWidth(trackWrapRef.current.offsetWidth);
        }
    }, []);
    return (index_js_.createElement("div", { ref: trackWrapRef, className: (0,main_js_.classNames)('k-timeline', {
            'k-timeline-collapsible': collapsibleEvents,
            'k-timeline-vertical': !horizontal,
            'k-timeline-alternating': alterMode,
            'k-timeline-horizontal': horizontal
        }, className), style: { width: "".concat(trackAxisWidth, "px") } }, horizontal ? index_js_.createElement(TimelineHorizontal, { navigatable: navigatable, eventsData: events, dateFormat: dateFormat, transitionDuration: transitionDuration, onActionClick: onActionClick })
        : index_js_.createElement(TimelineVertical, { navigatable: navigatable, eventsData: events, dateFormat: dateFormat, alterMode: alterMode, collapsibleEvents: collapsibleEvents, transitionDuration: transitionDuration, onChange: onChange, onActionClick: onActionClick })));
};
Timeline.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/contextmenu/ContextMenu.js
var ContextMenu_assign = (undefined && undefined.__assign) || function () {
    ContextMenu_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ContextMenu_assign.apply(this, arguments);
};




/**
 * Represents the [KendoReact ContextMenu component]({% slug overview_contextmenu %}).
 */
var ContextMenu = function (props) {
    var menuRef = index_js_.useRef(null);
    index_js_.useEffect(function () {
        if (props.show) {
            setTimeout(function () {
                var element = menuRef.current && menuRef.current.element;
                var menuItem = element && element.querySelector('.k-menu-item');
                var activeElement = (0,main_js_.getActiveElement)(menuItem && menuItem.ownerDocument);
                if (menuItem && menuItem !== activeElement) {
                    menuItem.focus();
                }
            });
        }
    }, [props.show]);
    return (index_js_.createElement(es_main_js_.Popup, { show: props.show, offset: props.offset, popupClass: 'k-menu-popup', animate: false },
        index_js_.createElement(Menu, ContextMenu_assign({ vertical: true }, props, { ref: menuRef, className: (0,main_js_.classNames)('k-context-menu', props.className), onClose: props.onClose, role: 'menu' }), props.children)));
};
ContextMenu.displayName = 'KendoReactContextMenu';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/expansionpanel/ExpansionPanel.js





/**
 * Represents the [KendoReact ExpansionPanel component]({% slug overview_expansionpanel %}).
 */
var ExpansionPanel = index_js_.forwardRef(function (props, target) {
    var _a, _b;
    (0,main_js_.validatePackage)(packageMetadata);
    var elementRef = index_js_.useRef(null);
    var _c = index_js_.useState(false), focused = _c[0], setFocused = _c[1];
    var getImperativeHandle = index_js_.useCallback(function () { return ({ element: elementRef.current }); }, []);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    var _d = props.expanded, expanded = _d === void 0 ? false : _d, disabled = props.disabled, title = props.title, subtitle = props.subtitle, onAction = props.onAction, expandIcon = props.expandIcon, collapseIcon = props.collapseIcon, expandSVGIcon = props.expandSVGIcon, collapseSVGIcon = props.collapseSVGIcon;
    var onClick = index_js_.useCallback(function (event) {
        (0,main_js_.dispatchEvent)(onAction, event, getImperativeHandle(), { expanded: expanded });
    }, [onAction, expanded]);
    var onKeyDown = index_js_.useCallback(function (event) {
        if (event.keyCode === main_js_.Keys.enter || event.keyCode === main_js_.Keys.space) {
            event.preventDefault();
            (0,main_js_.dispatchEvent)(onAction, event, getImperativeHandle(), { expanded: expanded });
        }
    }, [onAction, expanded]);
    var handleFocus = index_js_.useCallback(function () {
        if (props.disabled) {
            return;
        }
        setFocused(true);
    }, [props.disabled]);
    var handleBlur = index_js_.useCallback(function () {
        if (props.disabled) {
            return;
        }
        setFocused(false);
    }, [props.disabled]);
    var _e = (0,main_js_.useAsyncFocusBlur)({ onFocus: handleFocus, onBlur: handleBlur }), onFocus = _e.onFocus, onBlur = _e.onBlur;
    return (index_js_.createElement("div", { ref: elementRef, className: (0,main_js_.classNames)('k-expander', props.className, {
            'k-expanded': expanded,
            'k-focus': focused && !disabled,
            'k-disabled': disabled
        }), onFocus: onFocus, onBlur: onBlur, style: props.style, id: props.id, dir: (0,main_js_.useRtl)(elementRef, props.dir), onKeyDown: disabled ? undefined : onKeyDown },
        index_js_.createElement("div", { role: 'button', "aria-controls": props.ariaControls, "aria-expanded": expanded, "aria-disabled": disabled, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, disabled), className: "k-expander-header", onClick: disabled ? undefined : onClick },
            title !== undefined ? index_js_.createElement("div", { className: "k-expander-title" }, title) : undefined,
            index_js_.createElement("span", { className: "k-spacer" }),
            subtitle !== undefined ? index_js_.createElement("div", { className: "k-expander-sub-title" }, subtitle) : undefined,
            index_js_.createElement("span", { className: "k-expander-indicator" },
                index_js_.createElement(main_js_.IconWrap, { name: !expanded
                        ? !expandIcon ? 'chevron-down' : undefined
                        : !collapseIcon ? 'chevron-up' : undefined, icon: !expanded
                        ? (!expandSVGIcon && !expandIcon) ? index_es_js_.chevronDownIcon : expandSVGIcon
                        : (!collapseSVGIcon && !collapseIcon) ? index_es_js_.chevronUpIcon : collapseSVGIcon, className: (0,main_js_.classNames)(expanded
                        ? (_a = {},
                            _a[String(collapseIcon)] = Boolean(collapseIcon),
                            _a) : (_b = {},
                        _b[String(expandIcon)] = Boolean(expandIcon),
                        _b)) }))),
        props.children));
});
ExpansionPanel.propTypes = {
    children: prop_types_index_js_.node,
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    dir: prop_types_index_js_.string,
    id: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    title: prop_types_index_js_.node,
    subtitle: prop_types_index_js_.node,
    expandIcon: prop_types_index_js_.string,
    collapseIcon: prop_types_index_js_.string,
    expanded: prop_types_index_js_.bool,
    disabled: prop_types_index_js_.bool,
    onAction: prop_types_index_js_.func
};
ExpansionPanel.displayName = 'KendoReactExpansionPanel';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/expansionpanel/ExpansionPanelContent.js
var ExpansionPanelContent_assign = (undefined && undefined.__assign) || function () {
    ExpansionPanelContent_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ExpansionPanelContent_assign.apply(this, arguments);
};


/**
 * Represents the KendoReact ExpansionPanelContent component.
 */
var ExpansionPanelContent = index_js_.forwardRef(function (props, ref) {
    return (index_js_.createElement("div", ExpansionPanelContent_assign({ ref: ref }, props, { className: (0,main_js_.classNames)('k-expander-content-wrapper', props.className) }),
        index_js_.createElement("div", { className: 'k-expander-content' }, props.children)));
});
ExpansionPanelContent.displayName = 'KendoReactExpansionPanelContent';

;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/expansionpanel/index.js




;// ../node_modules/.pnpm/@progress+kendo-react-layout@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-reac_c1324a2acd39106b369628455bc7ff11/node_modules/@progress/kendo-react-layout/dist/es/main.js
































































































/***/ }

}]);