"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[486],{

/***/ 80486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Popover: () => (/* reexport */ Popover),
  PopoverActionsBar: () => (/* reexport */ PopoverActionsBar),
  Tooltip: () => (/* reexport */ Tooltip)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_d88e16230e1f90237543f8b39b6abcad/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(41856);
;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/tooltip/utils.js
var arrowWidth = 10;
var arrowHeight = 10;
/**
 * @hidden
 */
var getLeftPosition = function (left, elementWidth, targetElement, anchorElement, position) {
    switch (position) {
        case 'bottom':
            return anchorElement === 'pointer'
                ? left - (elementWidth / 2)
                : targetElement.left - (elementWidth / 2) + targetElement.width / 2;
        case 'left':
            return anchorElement === 'pointer'
                ? left - elementWidth - arrowWidth
                : targetElement.left - elementWidth - arrowWidth;
        case 'right':
            return anchorElement === 'pointer'
                ? left + arrowWidth
                : targetElement.right + arrowWidth;
        case 'top':
            return anchorElement === 'pointer'
                ? left - (elementWidth / 2)
                : targetElement.left - (elementWidth / 2) + targetElement.width / 2;
        default:
            if (anchorElement === 'pointer') {
                return left < (window.screen.availWidth / 2)
                    ? left - arrowWidth
                    : left - elementWidth + arrowWidth;
            }
            else {
                return left < (window.screen.availWidth / 2)
                    ? targetElement.left
                    : targetElement.right - elementWidth;
            }
    }
};
/**
 * @hidden
 */
var getTopPosition = function (top, targetElement, elementHeight, anchorElement, position) {
    switch (position) {
        case 'bottom':
            return anchorElement === 'pointer'
                ? top + arrowHeight
                : targetElement.bottom + arrowHeight;
        case 'left':
            return anchorElement === 'pointer'
                ? top - (elementHeight / 2)
                : targetElement.top - (elementHeight / 2) + (targetElement.height / 2);
        case 'right':
            return anchorElement === 'pointer'
                ? top - (elementHeight / 2)
                : targetElement.top - (elementHeight / 2) + (targetElement.height / 2);
        case 'top':
            return anchorElement === 'pointer'
                ? top - elementHeight - arrowHeight
                : targetElement.top - elementHeight - arrowHeight;
        default:
            if (anchorElement === 'pointer') {
                return top < (window.innerHeight / 2)
                    ? top + arrowWidth
                    : top - elementHeight - arrowWidth;
            }
            else {
                return top < (window.innerHeight / 2)
                    ? targetElement.bottom + arrowHeight
                    : targetElement.top - elementHeight - arrowHeight;
            }
    }
};
/**
 * @hidden
 */
var getDomRect = function (currentTarget) {
    if (currentTarget !== null) {
        return currentTarget.getBoundingClientRect();
    }
    return document.body.getBoundingClientRect();
};
/**
 * @hidden
 */
var toolTipSelectors = [
    'k-tooltip-content',
    'k-animation-container',
    'k-tooltip',
    'k-tooltip-title',
    'k-tooltip k-tooltip-closable',
    'k-icon k-i-close'
];
/**
 * @hidden
 */
var isTooltipElement = function (element) {
    if (element === null) {
        return false;
    }
    var node = element;
    while (node) {
        if (node !== null && node.classList && node.classList.contains('k-tooltip')) {
            return true;
        }
        node.parentNode !== null ? node = node.parentNode : node = false;
    }
    return toolTipSelectors.filter(function (t) { return t === element.className; }).length > 0;
};

;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-tooltip',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1700065296,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/tooltip/Tooltip.js
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







var DEFAULT_TOOLTIP_ZINDEX = 100;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.context = 0;
        /**
         * @hidden
         */
        _this.state = {
            targetElement: null,
            open: false,
            title: ''
        };
        _this.top = 0;
        _this.left = 0;
        _this.willOpen = false;
        /**
         * The method is used on the MouseOut event to hide the Tooltip.
         */
        _this.handleMouseOut = function (event) {
            var targetElement = _this.state.targetElement;
            var currentDocument = targetElement ? targetElement.ownerDocument : document;
            var element = currentDocument && currentDocument.elementFromPoint(event.clientX, event.clientY);
            if (isTooltipElement(element)) {
                return;
            }
            if (_this.props.open) {
                return;
            }
            clearInterval(_this.updateIntervalId);
            _this.willOpen = false;
            _this.onClose(event);
        };
        /**
         * Used on the `MouseOver` event to show the Tooltip.
         */
        _this.handleMouseOver = function (event) {
            var target = event.target;
            if (!_this.isVisible(target) || isTooltipElement(target) || target === _this.state.targetElement) {
                return;
            }
            _this.showToolTip(event);
        };
        _this.handleBodyMousemove = function (event) {
            _this.top = event.clientY;
            _this.left = event.clientX;
        };
        _this.onClose = function (event) {
            (0,main_js_.dispatchEvent)(_this.props.onClose, event, _this, undefined);
            _this.setState({ targetElement: null, open: false, title: '' });
        };
        _this.setUpdateInterval = function () {
            if (_this.props.updateInterval) {
                _this.updateIntervalId = setInterval(_this.onIntervalUpdate, _this.props.updateInterval);
            }
        };
        _this.onIntervalUpdate = function () {
            var target = _this.state.targetElement;
            if (!target) {
                return;
            }
            if (target.parentElement === null) {
                // Getting element from previous target coordinates will cause reflow which is performance hit.
                // Also remount case can be avoided easily
                _this.onClose({ target: target });
            }
            else {
                _this.showToolTip({ target: target });
            }
        };
        _this.position = function (element) {
            var domRect = getDomRect(_this.state.targetElement);
            var left = getLeftPosition(_this.left, element.offsetWidth, domRect, _this.props.anchorElement, _this.props.position);
            var top = getTopPosition(_this.top, domRect, element.offsetHeight, _this.props.anchorElement, _this.props.position);
            return { left: left, top: top };
        };
        _this.getTitle = function (element) {
            while (element) {
                if (element.getAttribute('title') !== null || element.titleExpando) {
                    var title = element.getAttribute('title') || element.titleExpando;
                    return { title: title, element: element };
                }
                element = _this.props.parentTitle && element.parentElement || null;
            }
            return { title: '', element: element };
        };
        _this.calloutClassName = function () {
            switch (_this.props.position) {
                case 'bottom':
                    return 'k-callout k-callout-n';
                case 'left':
                    return 'k-callout k-callout-e';
                case 'right':
                    return 'k-callout k-callout-w';
                case 'top':
                    return 'k-callout k-callout-s';
                default:
                    return _this.top < (window.innerHeight / 2) ? 'k-callout k-callout-n' : 'k-callout k-callout-s';
            }
        };
        _this.getCurrentZIndex = function () {
            return _this.context ? _this.context : DEFAULT_TOOLTIP_ZINDEX;
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    /**
     * @hidden
     */
    Tooltip.prototype.componentDidMount = function () {
        if (document) {
            document.body.addEventListener('mousemove', this.handleBodyMousemove);
        }
    };
    /**
     * @hidden
     */
    Tooltip.prototype.componentWillUnmount = function () {
        clearTimeout(this.openTimeoutId);
        clearInterval(this.updateIntervalId);
        if (document) {
            document.body.removeEventListener('mousemove', this.handleBodyMousemove);
        }
    };
    /**
     * @hidden
     */
    Tooltip.prototype.componentDidUpdate = function () {
        if (this.props.open && this.props.targetElement) {
            this.showToolTip({ target: this.props.targetElement });
        }
    };
    /**
     * @hidden
     */
    Tooltip.prototype.render = function () {
        var _this = this;
        if (this.props.children) {
            var _a = this.props, children = _a.children, options = __rest(_a, ["children"]);
            var tooltip_1 = null;
            return (index_js_.createElement("div", { onMouseOver: function (event) { if (tooltip_1) {
                    tooltip_1.handleMouseOver(event);
                } }, onMouseOut: function (event) { if (tooltip_1) {
                    tooltip_1.handleMouseOut(event);
                } } },
                index_js_.createElement(Tooltip, __assign({ ref: function (el) { return tooltip_1 = el; } }, options)),
                children));
        }
        if (this.props.open === false) {
            return null;
        }
        var targetElement = this.state.targetElement;
        var currentZIndex = this.getCurrentZIndex();
        return targetElement &&
            this.state.title &&
            targetElement.ownerDocument &&
            react_dom_index_js_.createPortal((index_js_.createElement("div", { ref: function (el) {
                    if (!el) {
                        return;
                    }
                    var position;
                    if (_this.props.onPosition) {
                        var ev = {
                            element: el,
                            targetElement: _this.state.targetElement,
                            mouseTop: _this.top,
                            mouseLeft: _this.left,
                            anchorElement: _this.props.anchorElement,
                            position: _this.props.position,
                            target: _this,
                            syntheticEvent: null,
                            nativeEvent: null
                        };
                        position = _this.props.onPosition.call(undefined, ev);
                    }
                    else {
                        position = _this.position(el);
                    }
                    el.style.left = position.left + 'px';
                    el.style.top = position.top + 'px';
                }, className: (0,main_js_.classNames)('k-animation-container', 'k-animation-container-fixed', 'k-animation-container-shown', this.props.className), style: __assign({ zIndex: currentZIndex }, this.props.style), tabIndex: 0 },
                index_js_.createElement("div", { className: 'k-child-animation-container' },
                    index_js_.createElement("div", { id: this.props.id, role: 'tooltip', className: (0,main_js_.classNames)('k-tooltip', this.props.tooltipClassName), style: __assign({ position: 'relative' }, this.props.tooltipStyle) },
                        index_js_.createElement("div", { className: "k-tooltip-content" }, this.props.content &&
                            index_js_.createElement(this.props.content, { title: this.state.title, target: this.state.targetElement })
                            || this.state.title),
                        this.props.showCallout && index_js_.createElement("div", { ref: function (el) {
                                if (!el) {
                                    return;
                                }
                                el.className = _this.calloutClassName();
                                if (_this.props.position === 'auto') {
                                    _this.left < (window.screen.availWidth / 2)
                                        ? el.style.left = _this.props.setCalloutOnPositionAuto || '25%'
                                        : el.style.left = _this.props.setCalloutOnPositionAuto || '75%';
                                }
                            } }))))), this.props.appendTo ? this.props.appendTo : targetElement.ownerDocument.body);
    };
    Tooltip.prototype.showToolTip = function (event) {
        var _this = this;
        clearTimeout(this.openTimeoutId);
        clearInterval(this.updateIntervalId);
        if (event.target.hasChildNodes()) {
            event.target.childNodes.forEach(function (childElement) {
                if (childElement.nodeName === 'title') {
                    event.target.titleExpando = childElement.innerHTML;
                    childElement.remove();
                }
            });
        }
        var target = this.props.targetElement || event.target;
        var titleResult = this.getTitle(target);
        if (!titleResult.title) {
            if (this.state.open) {
                this.onClose(event);
            }
            return;
        }
        if (titleResult.element) {
            titleResult.element.titleExpando = titleResult.title;
            titleResult.element.title = '';
        }
        this.willOpen = true;
        if (!this.props.openDelay) {
            this.setState({ targetElement: target, open: true, title: titleResult.title }, this.setUpdateInterval);
        }
        else {
            this.openTimeoutId = window.setTimeout(function () {
                if (_this.willOpen) {
                    _this.setState({ targetElement: target, open: true, title: titleResult.title }, _this.setUpdateInterval);
                }
            }, this.props.openDelay);
        }
        if (this.state.title !== titleResult.title) {
            (0,main_js_.dispatchEvent)(this.props.onOpen, event, this, undefined);
        }
    };
    Tooltip.prototype.isVisible = function (element) {
        return !this.props.filter || this.props.filter(element);
    };
    /**
     * @hidden
     */
    Tooltip.propTypes = {
        anchorElement: prop_types_index_js_.oneOf(['pointer', 'target']),
        content: prop_types_index_js_.func,
        filter: prop_types_index_js_.func,
        openDelay: prop_types_index_js_.number,
        position: prop_types_index_js_.oneOf(['right', 'left', 'top', 'bottom', 'auto']),
        updateInterval: prop_types_index_js_.number
    };
    Tooltip.defaultProps = {
        anchorElement: 'pointer',
        openDelay: 400,
        position: 'auto',
        showCallout: true,
        parentTitle: false
    };
    /**
     * @hidden
     */
    Tooltip.contextType = main_js_.ZIndexContext;
    return Tooltip;
}(index_js_.PureComponent));


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=6.1.1 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-i_8c9e28bc2eed5a1299193a533ee31e7c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var es_main_js_ = __webpack_require__(60446);
;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/popover/PopoverActionsBar.js



/**
 * Represents the PopoverActionsBar component.
 */
var PopoverActionsBar = index_js_.forwardRef(function (props, ref) {
    var _a;
    var elementRef = index_js_.useRef(null);
    var popoverRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(popoverRef, function () {
        return { props: props, element: elementRef.current };
    });
    index_js_.useImperativeHandle(ref, function () { return popoverRef.current; });
    return (index_js_.createElement("div", { ref: elementRef, className: (0,main_js_.classNames)('k-popover-actions', 'k-actions', (_a = {},
            _a["k-actions-".concat(props.alignment)] = props.alignment,
            _a["k-actions-".concat(props.orientation)] = props.orientation,
            _a)) }, props.children));
});
var defaultProps = {
    alignment: 'stretched',
    orientation: 'horizontal'
};
PopoverActionsBar.propTypes = {
    alignment: prop_types_index_js_.oneOf(['start', 'center', 'end', 'stretched']),
    orientation: prop_types_index_js_.oneOf(['horizontal', 'vertical']),
    children: prop_types_index_js_.oneOfType([
        prop_types_index_js_.element,
        prop_types_index_js_.node
    ])
};
PopoverActionsBar.defaultProps = defaultProps;
PopoverActionsBar.displayName = 'KendoReactPopoverActionsBar';

;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/popover/Popover.js







var DEFAULT_POPOVER_ZINDEX = 12000;
var ZINDEX_POPOVER_STEP = 2000;
var CALLOUT_SIZE = 15;
var calloutPositions = {
    top: 'k-callout-s',
    left: 'k-callout-e',
    bottom: 'k-callout-n',
    right: 'k-callout-w'
};
var calloutFlippedPositions = {
    top: 'k-callout-n',
    left: 'k-callout-w',
    bottom: 'k-callout-s',
    right: 'k-callout-e'
};
var popupAlignByPosition = {
    top: { vertical: 'bottom', horizontal: 'center' },
    left: { vertical: 'center', horizontal: 'right' },
    bottom: { vertical: 'top', horizontal: 'center' },
    right: { vertical: 'center', horizontal: 'left' }
};
var anchorAlignByPosition = {
    top: { vertical: 'top', horizontal: 'center' },
    left: { vertical: 'center', horizontal: 'left' },
    bottom: { vertical: 'bottom', horizontal: 'center' },
    right: { vertical: 'center', horizontal: 'right' }
};
var getActionBar = function (children) {
    return index_js_.Children.toArray(children).filter(function (child) { return child && child.type === PopoverActionsBar; });
};
var getContent = function (children) {
    return index_js_.Children.toArray(children).filter(function (child) {
        return child && child.type !== PopoverActionsBar;
    });
};
/**
 * Represents the Popover component.
 */
var Popover = index_js_.forwardRef(function (props, ref) {
    (0,main_js_.validatePackage)(packageMetadata);
    var callout = props.callout, position = props.position, title = props.title, children = props.children, show = props.show, anchor = props.anchor, appendTo = props.appendTo, offset = props.offset, animate = props.animate, positionMode = props.positionMode, scale = props.scale, popoverClass = props.popoverClass, className = props.className, id = props.id, style = props.style, collision = props.collision, contentStyle = props.contentStyle, onPosition = props.onPosition, onClose = props.onClose, onOpen = props.onOpen;
    var _a = index_js_.useState(false), flipped = _a[0], setFlipped = _a[1];
    var isVertical = position === 'top' || position === 'bottom';
    var margin = props.margin || {
        vertical: callout && isVertical ? CALLOUT_SIZE : 0,
        horizontal: callout && !isVertical ? CALLOUT_SIZE : 0
    };
    var popupAlign = popupAlignByPosition[position];
    var anchorAlign = anchorAlignByPosition[position];
    var zindexContext = index_js_.useContext(main_js_.ZIndexContext);
    var currentZindex = zindexContext ? zindexContext + ZINDEX_POPOVER_STEP : DEFAULT_POPOVER_ZINDEX;
    var popoverRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(popoverRef, function () {
        return { props: props };
    });
    index_js_.useImperativeHandle(ref, function () { return popoverRef.current; });
    var handlePosition = index_js_.useCallback(function (e) {
        setTimeout(function () { return setFlipped(e.flipped); });
        if (onPosition) {
            var event_1 = { target: popoverRef.current, flipped: e.flipped, fitted: e.fitted };
            onPosition.call(undefined, event_1);
        }
    }, [onPosition, setFlipped]);
    var handleOpen = index_js_.useCallback(function () {
        if (onOpen) {
            var event_2 = { target: popoverRef.current };
            onOpen.call(undefined, event_2);
        }
    }, [onOpen]);
    var handleClose = index_js_.useCallback(function () {
        if (onClose) {
            var event_3 = { target: popoverRef.current };
            onClose.call(undefined, event_3);
        }
    }, [onClose]);
    var basePopupClass = { 'k-popover': true };
    if (Array.isArray(popoverClass)) {
        popoverClass.forEach(function (currentClass) { return basePopupClass[currentClass] = true; });
    }
    else if (typeof popoverClass === 'object') {
        Object.keys(popoverClass)
            .forEach(function (key) {
            basePopupClass[key] = popoverClass[key];
        });
    }
    else if (popoverClass) {
        basePopupClass[popoverClass] = true;
    }
    var calloutClass = flipped ? calloutFlippedPositions[position] : calloutPositions[position];
    var popoverContent = index_js_.useMemo(function () {
        return (index_js_.createElement(index_js_.Fragment, null,
            title && (index_js_.createElement("div", { className: 'k-popover-header' }, title)),
            index_js_.createElement("div", { className: "k-popover-body", style: contentStyle }, getContent(children)),
            getActionBar(children)));
    }, [children, contentStyle, title]);
    return (index_js_.createElement(main_js_.ZIndexContext.Provider, { value: currentZindex },
        index_js_.createElement(es_main_js_.Popup, { id: id, role: 'tooltip', animate: animate, collision: collision, anchor: anchor, offset: offset, margin: margin, popupAlign: popupAlign, anchorAlign: anchorAlign, appendTo: appendTo, show: show, scale: scale, positionMode: positionMode, style: style, className: className, popupClass: basePopupClass, onOpen: handleOpen, onClose: handleClose, onPosition: handlePosition }, callout && position
            ? index_js_.createElement(index_js_.Fragment, null,
                index_js_.createElement("div", { className: (0,main_js_.classNames)('k-popover-callout', calloutClass) }),
                index_js_.createElement("div", { className: 'k-popover-inner' }, popoverContent))
            : popoverContent)));
});
var Popover_defaultProps = {
    callout: true,
    position: 'top',
    collision: {
        horizontal: 'none',
        vertical: 'none'
    }
};
Popover.propTypes = {
    callout: prop_types_index_js_.bool,
    title: prop_types_index_js_.node,
    position: prop_types_index_js_.oneOf(['top', 'left', 'bottom', 'right']),
    show: prop_types_index_js_.bool,
    animate: prop_types_index_js_.oneOfType([
        prop_types_index_js_.bool,
        prop_types_index_js_.shape({
            openDuration: prop_types_index_js_.number,
            closeDuration: prop_types_index_js_.number
        })
    ]),
    anchor: function (props) {
        var anchor = props.anchor;
        if (anchor && typeof anchor.nodeType !== 'number') {
            return new Error('Invalid prop `anchor` supplied to `Kendo React Popover`. Validation failed.');
        }
        return null;
    },
    appendTo: function (props) {
        var element = props.appendTo;
        if (element && typeof element.nodeType !== 'number') {
            return new Error('Invalid prop `appendTo` supplied to `Kendo React Popover`. Validation failed.');
        }
        return null;
    },
    positionMode: prop_types_index_js_.oneOf([
        'fixed',
        'absolute'
    ]),
    scale: prop_types_index_js_.number,
    offset: prop_types_index_js_.shape({
        left: prop_types_index_js_.number,
        top: prop_types_index_js_.number
    }),
    children: prop_types_index_js_.oneOfType([
        prop_types_index_js_.element,
        prop_types_index_js_.node
    ]),
    className: prop_types_index_js_.oneOfType([
        prop_types_index_js_.string,
        prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        prop_types_index_js_.object
    ]),
    id: prop_types_index_js_.string,
    popoverClass: prop_types_index_js_.oneOfType([
        prop_types_index_js_.string,
        prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        prop_types_index_js_.object
    ]),
    style: prop_types_index_js_.object,
    onClose: prop_types_index_js_.func,
    onPosition: prop_types_index_js_.func,
    onOpen: prop_types_index_js_.func
};
Popover.defaultProps = Popover_defaultProps;
Popover.displayName = 'KendoReactPopover';

;// ../node_modules/.pnpm/@progress+kendo-react-tooltip@6.1.1_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_093e882d21d06b14727e55155eb6dd59/node_modules/@progress/kendo-react-tooltip/dist/es/main.js






/***/ })

}]);