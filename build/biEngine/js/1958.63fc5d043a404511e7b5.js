"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[1958],{

/***/ 81958
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Popup: () => (/* reexport */ Popup),
  PopupPropsContext: () => (/* reexport */ PopupPropsContext),
  PopupWithoutContext: () => (/* reexport */ PopupWithoutContext)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/animation.js
var clearSlide = function (element) {
    element.style.transitionDuration = '';
    Array.from(element.classList).forEach(function (c) {
        if (c.startsWith('k-slide-')) {
            element.classList.remove(c);
        }
    });
};
var firefox = typeof window !== 'undefined' &&
    /Firefox/.test(window.navigator.userAgent);
/**
 * @hidden
 */
var slide = function (element, direction, duration, type, callback) {
    if (duration === 0) {
        return callback();
    }
    var slideClass = 'k-slide-' + direction + '-' + type;
    var slideActiveClass = slideClass + '-active';
    var transitionend = function (e) {
        // if event is attached using react,
        // the animation does not work well in firefox,
        // when the show/hide button is toggled quickly.
        if (e.target === element) {
            element.removeEventListener('transitionend', transitionend);
            clearSlide(element);
            if (type === 'exit') {
                element.style.display = 'none';
            }
            else {
                element.style.display = '';
            }
            callback();
        }
    };
    element.addEventListener('transitionend', transitionend);
    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return;
    }
    var defaultView = ownerDocument.defaultView;
    if (!defaultView) {
        return;
    }
    var animate = function () {
        clearSlide(element);
        element.classList.add(slideClass);
        defaultView.requestAnimationFrame(function () {
            element.style.transitionDuration = duration + 'ms';
            element.classList.add(slideActiveClass);
        });
    };
    if (firefox) {
        defaultView.requestAnimationFrame(animate);
    }
    else {
        animate();
    }
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(76034);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/main.js + 27 modules
var main = __webpack_require__(12954);
;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/util.js
/**
 * @hidden
 */
var isDifferentOffset = function (oldOffset, newOffset) {
    var oldLeft = oldOffset.left, oldTop = oldOffset.top;
    var newLeft = newOffset.left, newTop = newOffset.top;
    return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
/**
 * @hidden
 */
var hasBoundingRect = function (elem) { return !!elem.getBoundingClientRect; };
/**
 * @hidden
 */
var FRAME_DURATION = 1000 / 60; // 1000ms divided by 60fps
/**
 * @hidden
 */
var throttle = function (func, wait, options) {
    if (options === void 0) { options = {}; }
    var timeout, context, args, result;
    var previous = 0;
    options = options || {};
    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = undefined;
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };
    var throttled = function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        context = undefined; // this
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        }
        else if (!timeout && options.trailing !== false) {
            timeout = window.setTimeout(later, remaining);
        }
        return result;
    };
    return throttled;
};

;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-popup',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695800988,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/PopupWithoutContext.js
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








var DEFAULT_POPUP_ZINDEX = 100;
var ZINDEX_POPUP_STEP = 1;
function isEquivalent(a, b) {
    if (a === b) {
        return true;
    }
    if (!!a !== !!b) {
        return false;
    }
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
var DEFAULT_OFFSET = {
    left: -1000,
    top: 0
};
var Status;
(function (Status) {
    Status["hiding"] = "hiding";
    Status["hidden"] = "hidden";
    Status["showing"] = "showing";
    Status["shown"] = "shown";
    Status["reposition"] = "reposition";
})(Status || (Status = {}));
var ANIMATION_CONTAINER = 'k-animation-container';
var ANIMATION_CONTAINER_SHOWN = 'k-animation-container-shown';
var ANIMATION_CONTAINER_CHILD = 'k-child-animation-container';
var K_POPUP = 'k-popup';
/**
 * @hidden
 */
var PopupWithoutContext = /** @class */ (function (_super) {
    __extends(PopupWithoutContext, _super);
    function PopupWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.context = 0;
        /**
         * @hidden
         */
        _this.state = { current: Status.hidden, previous: Status.hidden, props: {} };
        _this._popup = null;
        _this.show = function (popup) {
            _this.setPosition(popup);
            _this.animate(popup.firstChild, 'enter', _this.onOpened);
            _this.setState({ current: Status.shown, previous: _this.state.current });
        };
        _this.setPosition = function (popup) {
            var _a = _this.props, anchorAlign = _a.anchorAlign, popupAlign = _a.popupAlign, collision = _a.collision, offset = _a.offset, anchor = _a.anchor, margin = _a.margin, scale = _a.scale, positionMode = _a.positionMode;
            var _b = popup.style, width = _b.width, height = _b.height;
            // Calculations are wrong if popup does not have set size
            popup.style.width = popup.offsetWidth + 'px';
            popup.style.height = popup.offsetHeight + 'px';
            var alignedOffset = (0,main/* alignElement */.Op)({
                anchor: anchor,
                anchorAlign: anchorAlign,
                element: popup,
                elementAlign: popupAlign,
                offset: offset,
                margin: margin,
                positionMode: positionMode,
                scale: scale
            });
            var position = (0,main/* positionElement */.m$)({
                anchor: anchor,
                anchorAlign: anchorAlign,
                element: popup,
                elementAlign: popupAlign,
                collisions: collision,
                currentLocation: alignedOffset,
                margin: _this.props.margin
            });
            popup.style.top = position.offset.top + 'px';
            popup.style.left = position.offset.left + 'px';
            popup.style.width = width;
            popup.style.height = height;
            _this._collisions = {
                fit: position.fit,
                fitted: position.fitted,
                flip: position.flip,
                flipped: position.flipped
            };
            if (_this.props.onPosition) {
                var event_1 = {
                    target: _this,
                    flipped: position.flipped,
                    fitted: position.fitted
                };
                _this.props.onPosition.call(undefined, event_1);
            }
        };
        _this.onOpened = function () {
            var element = _this._popup;
            if (!element) {
                return;
            }
            if (_this.props.show) {
                element.classList.add(ANIMATION_CONTAINER_SHOWN);
            }
            _this.attachRepositionHandlers(element);
            if (_this.props.onOpen) {
                _this.props.onOpen.call(undefined, { target: _this });
            }
        };
        _this.animate = function (element, type, callback) {
            if (!_this.props.popupAlign) {
                return;
            }
            var animationDirection;
            var _a = _this.props.popupAlign, horizontal = _a.horizontal, vertical = _a.vertical;
            if (horizontal === 'left' && vertical === 'center') {
                animationDirection = 'right';
            }
            else if (horizontal === 'right' && vertical === 'center') {
                animationDirection = 'left';
            }
            else if (vertical === 'top') {
                animationDirection = 'down';
            }
            else {
                animationDirection = 'up';
            }
            var flipPositions = {
                down: 'up',
                up: 'down',
                left: 'right',
                right: 'left'
            };
            if (_this._collisions && _this._collisions.flipped) {
                animationDirection = flipPositions[animationDirection];
            }
            slide(element, animationDirection, _this.animationDuration[type], type, callback);
        };
        _this.onClosing = function (popup) {
            if (!_this.props.show) {
                popup.classList.remove(ANIMATION_CONTAINER_SHOWN);
            }
            _this.detachRepositionHandlers();
        };
        _this.onClosed = function () {
            if (_this.state.current === Status.hiding && _this.state.previous === Status.shown) {
                _this.setState({ current: Status.hidden, previous: _this.state.current });
            }
            if (_this.props.onClose) {
                _this.props.onClose.call(undefined, { target: _this });
            }
        };
        _this.getCurrentZIndex = function () {
            return _this.context ? _this.context + ZINDEX_POPUP_STEP : DEFAULT_POPUP_ZINDEX;
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.reposition = throttle(_this.reposition.bind(_this), FRAME_DURATION);
        return _this;
    }
    Object.defineProperty(PopupWithoutContext.prototype, "element", {
        /**
         * Represents the Popup DOM element.
         */
        get: function () {
            return this._popup;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    PopupWithoutContext.getDerivedStateFromProps = function (props, state) {
        var show = props.show, anchor = props.anchor, anchorAlign = props.anchorAlign, appendTo = props.appendTo, collision = props.collision, popupAlign = props.popupAlign, className = props.className, popupClass = props.popupClass, style = props.style, offset = props.offset, contentKey = props.contentKey;
        var nextState = __assign(__assign({}, state), { props: {
                show: show,
                anchor: anchor,
                anchorAlign: anchorAlign,
                appendTo: appendTo,
                collision: collision,
                popupAlign: popupAlign,
                className: className,
                popupClass: popupClass,
                style: style,
                offset: offset,
                contentKey: contentKey
            } });
        if (props.show) {
            if (state.current === Status.hidden || state.current === Status.hiding) {
                return __assign(__assign({}, nextState), { current: Status.showing, previous: state.current });
            }
            if (state.current === Status.showing) {
                return __assign(__assign({}, nextState), { current: Status.shown, previous: state.current });
            }
            if (state.current === Status.shown &&
                (!isEquivalent(offset, state.props.offset) ||
                    !isEquivalent(anchorAlign, state.props.anchorAlign) ||
                    !isEquivalent(appendTo, state.props.appendTo) ||
                    !isEquivalent(collision, state.props.collision) ||
                    !isEquivalent(popupAlign, state.props.popupAlign) ||
                    !isEquivalent(style, state.props.style) ||
                    anchor !== state.props.anchor ||
                    popupClass !== state.props.popupClass ||
                    className !== state.props.className)) {
                return __assign(__assign({}, nextState), { current: Status.reposition, previous: state.current });
            }
            return nextState;
        }
        if (state.current === Status.hiding || state.current === Status.hidden) {
            return __assign(__assign({}, nextState), { current: Status.hidden, previous: state.current });
        }
        return __assign(__assign({}, nextState), { current: Status.hiding, previous: state.current });
    };
    /**
     * @hidden
     */
    PopupWithoutContext.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.current === Status.showing && this._popup) {
            this.show(this._popup);
        }
        else if (this.state.current === Status.hiding && this._popup) {
            this.onClosing(this._popup);
            this.animate(this._popup.firstChild, 'exit', this.onClosed);
        }
        else if (this.state.current === Status.reposition && this.state.previous === Status.shown) {
            this.setState({ current: Status.shown, previous: this.state.current });
        }
        else if (this.state.current === Status.shown &&
            prevProps.contentKey !== this.props.contentKey && this._popup) {
            this.setPosition(this._popup);
        }
    };
    /**
     * @hidden
     */
    PopupWithoutContext.prototype.componentDidMount = function () {
        if (this.state.current === Status.showing && this._popup) {
            this.show(this._popup);
        }
    };
    /**
     * @hidden
     */
    PopupWithoutContext.prototype.componentWillUnmount = function () {
        this.detachRepositionHandlers();
    };
    /**
     * @hidden
     */
    PopupWithoutContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, popupClass = _a.popupClass, show = _a.show, id = _a.id, positionMode = _a.positionMode;
        var calculatedAppendTo = this.props.appendTo ?
            this.props.appendTo :
            main_js_.canUseDOM ?
                (this.props.anchor && this.props.anchor.ownerDocument ? this.props.anchor.ownerDocument.body : document.body)
                : undefined;
        if (this.state.current === Status.reposition && this.state.previous === Status.shown && this._popup) {
            this.setPosition(this._popup);
        }
        var style = Object.assign({}, { position: positionMode, top: 0, left: -10000 }, this.props.style || {});
        var closing = this.state.current === Status.hiding;
        if ((show || closing) && calculatedAppendTo) {
            var currentZIndex = this.getCurrentZIndex();
            var popupElement = (index_js_.createElement(main_js_.ZIndexContext.Provider, { value: currentZIndex },
                index_js_.createElement("div", { className: (0,main_js_.classNames)(ANIMATION_CONTAINER, className), id: id, ref: function (e) { return _this._popup = e; }, style: __assign({ zIndex: currentZIndex }, style) },
                    index_js_.createElement("div", { className: (0,main_js_.classNames)(ANIMATION_CONTAINER_CHILD), style: { transitionDelay: '0ms' } },
                        index_js_.createElement("div", { role: this.props.role, className: (0,main_js_.classNames)(K_POPUP, popupClass) }, children)))));
            return this.props.appendTo !== null ?
                react_dom_index_js_.createPortal(popupElement, calculatedAppendTo) :
                popupElement;
        }
        return null;
    };
    Object.defineProperty(PopupWithoutContext.prototype, "animationDuration", {
        get: function () {
            var animate = this.props.animate;
            var enter = 0;
            var exit = 0;
            if (animate) {
                if (animate === true) {
                    enter = exit = 300;
                }
                else {
                    enter = animate.openDuration || 0;
                    exit = animate.closeDuration || 0;
                }
            }
            return { enter: enter, exit: exit };
        },
        enumerable: false,
        configurable: true
    });
    PopupWithoutContext.prototype.attachRepositionHandlers = function (element) {
        var _this = this;
        this.detachRepositionHandlers();
        this._scrollableParents = main/* domUtils */.Si.scrollableParents(this.props.anchor || element);
        if (this._scrollableParents) {
            this._scrollableParents.map(function (p) { return p.addEventListener('scroll', _this.reposition); });
        }
        window.addEventListener('resize', this.reposition);
    };
    PopupWithoutContext.prototype.detachRepositionHandlers = function () {
        var _this = this;
        if (this._scrollableParents) {
            this._scrollableParents.map(function (p) { return p.removeEventListener('scroll', _this.reposition); });
            this._scrollableParents = undefined;
        }
        window.removeEventListener('resize', this.reposition);
    };
    PopupWithoutContext.prototype.reposition = function () {
        this.setState({ current: Status.reposition, previous: this.state.current });
    };
    /**
     * @hidden
     */
    PopupWithoutContext.propTypes = {
        anchor: function (props) {
            var anchor = props.anchor;
            if (anchor && typeof anchor.nodeType !== 'number') {
                return new Error('Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.');
            }
            return null;
        },
        appendTo: function (props) {
            var element = props.appendTo;
            if (element && typeof element.nodeType !== 'number') {
                return new Error('Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed.');
            }
            return null;
        },
        className: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.arrayOf(prop_types_index_js_.string),
            prop_types_index_js_.object
        ]),
        id: prop_types_index_js_.string,
        popupClass: prop_types_index_js_.oneOfType([
            prop_types_index_js_.string,
            prop_types_index_js_.arrayOf(prop_types_index_js_.string),
            prop_types_index_js_.object
        ]),
        collision: prop_types_index_js_.shape({
            horizontal: prop_types_index_js_.oneOf([
                main/* Collision */.F1.fit,
                main/* Collision */.F1.flip,
                main/* Collision */.F1.none
            ]),
            vertical: prop_types_index_js_.oneOf([
                main/* Collision */.F1.fit,
                main/* Collision */.F1.flip,
                main/* Collision */.F1.none
            ])
        }),
        anchorAlign: prop_types_index_js_.shape({
            horizontal: prop_types_index_js_.oneOf([
                main/* AlignPoint */.aW.left,
                main/* AlignPoint */.aW.center,
                main/* AlignPoint */.aW.right
            ]),
            vertical: prop_types_index_js_.oneOf([
                main/* AlignPoint */.aW.top,
                main/* AlignPoint */.aW.center,
                main/* AlignPoint */.aW.bottom
            ])
        }),
        popupAlign: prop_types_index_js_.shape({
            horizontal: prop_types_index_js_.oneOf([
                main/* AlignPoint */.aW.left,
                main/* AlignPoint */.aW.center,
                main/* AlignPoint */.aW.right
            ]),
            vertical: prop_types_index_js_.oneOf([
                main/* AlignPoint */.aW.top,
                main/* AlignPoint */.aW.center,
                main/* AlignPoint */.aW.bottom
            ])
        }),
        offset: prop_types_index_js_.shape({
            left: prop_types_index_js_.number,
            top: prop_types_index_js_.number
        }),
        children: prop_types_index_js_.oneOfType([
            prop_types_index_js_.element,
            prop_types_index_js_.node
        ]),
        show: prop_types_index_js_.bool,
        animate: prop_types_index_js_.oneOfType([
            prop_types_index_js_.bool,
            prop_types_index_js_.shape({
                openDuration: prop_types_index_js_.number,
                closeDuration: prop_types_index_js_.number
            })
        ]),
        margin: prop_types_index_js_.shape({
            horizontal: prop_types_index_js_.number,
            vertical: prop_types_index_js_.number
        }),
        positionMode: prop_types_index_js_.oneOf([
            'fixed',
            'absolute'
        ]),
        scale: prop_types_index_js_.number,
        style: prop_types_index_js_.object,
        onClose: prop_types_index_js_.func,
        onPosition: prop_types_index_js_.func,
        onOpen: prop_types_index_js_.func
    };
    /**
     * @hidden
     */
    PopupWithoutContext.defaultProps = {
        collision: {
            horizontal: main/* Collision */.F1.fit,
            vertical: main/* Collision */.F1.flip
        },
        anchorAlign: {
            horizontal: main/* AlignPoint */.aW.left,
            vertical: main/* AlignPoint */.aW.bottom
        },
        popupAlign: {
            horizontal: main/* AlignPoint */.aW.left,
            vertical: main/* AlignPoint */.aW.top
        },
        offset: DEFAULT_OFFSET,
        animate: true,
        show: false,
        margin: {
            horizontal: 0,
            vertical: 0
        },
        positionMode: 'absolute'
    };
    /**
     * @hidden
     */
    PopupWithoutContext.contextType = main_js_.ZIndexContext;
    /**
     * @hidden
     */
    PopupWithoutContext.displayName = 'PopupComponent';
    return PopupWithoutContext;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/Popup.js
var Popup_assign = (undefined && undefined.__assign) || function () {
    Popup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Popup_assign.apply(this, arguments);
};


/**
 * The PopupPropsContext. It allows to configure the Popup props from a wrapper component.
 *
 * @example
 * ```jsx-no-run
 *  <PopupPropsContext.Provider value={props => ({ ...props, appendTo: document.querySelector('myPopupsContainer') })}>
 *      <DropDownList />
 *      <Editor />
 *  </PopupPropsContext.Provider>
 * ```
 */
var PopupPropsContext = index_js_.createContext(function (props) { return props; });
/**
 * The KendoReact Popup component.
 */
var Popup = index_js_.forwardRef(function (props, ref) {
    var contextPropsCallback = index_js_.useContext(PopupPropsContext);
    var popupProps = contextPropsCallback.call(undefined, props);
    return (index_js_.createElement(PopupWithoutContext, Popup_assign({ ref: ref }, popupProps)));
});
Popup.displayName = 'Popup';

;// ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/main.js





/***/ }

}]);