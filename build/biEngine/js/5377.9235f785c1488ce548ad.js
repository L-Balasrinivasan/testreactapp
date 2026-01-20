"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5377],{

/***/ 26955
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jY: () => (/* reexport */ autoScroll),
  r2: () => (/* reexport */ dispatchDragAndDrop),
  Ue: () => (/* reexport */ getScrollableParent)
});

// UNUSED EXPORTS: scrollableRoot

;// ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/algorithms/intersect.js
var getRatio = function (element, target) {
    var elementRect = element.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var top = Math.max(targetRect.top, elementRect.top);
    var left = Math.max(targetRect.left, elementRect.left);
    var right = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
    var bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
    var width = right - left;
    var height = bottom - top;
    if (left < right && top < bottom) {
        var targetArea = targetRect.width * targetRect.height;
        var entryArea = elementRect.width * elementRect.height;
        var intersectionArea = width * height;
        var intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
        return Number(intersectionRatio.toFixed(4));
    }
    return 0;
};
/** @hidden */
var intersect = function (element, candidates) {
    var max = 0;
    var result = null;
    candidates.forEach(function (candidate) {
        if (candidate && element) {
            var ration = getRatio(element, candidate);
            if (ration > max) {
                max = ration;
                result = candidate;
            }
        }
    });
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/utils/index.js
var detectBrowser = function () {
    var ua = window && window.navigator.userAgent;
    if (!ua) {
        return false;
    }
    var browser = false;
    var match = [];
    var browserRxs = {
        edge: /(edge)[ \/]([\w.]+)/i,
        webkit: /(chrome|crios)[ \/]([\w.]+)/i,
        safari: /(webkit)[ \/]([\w.]+)/i,
        opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
        msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
        mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
    };
    for (var agent in browserRxs) {
        if (browserRxs.hasOwnProperty(agent)) {
            match = ua.match(browserRxs[agent]);
            if (match) {
                browser = {};
                browser[agent] = true;
                browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
                browser.version = parseInt(document.DOCUMENT_NODE || match[2], 10);
                break;
            }
        }
    }
    return browser;
};
/** @hidden */
var getDocument = function (element) {
    return element ? element.ownerDocument || window.document : window.document;
};
/** @hidden */
var getWindow = function (element) {
    var document = getDocument(element);
    return document
        ? document.defaultView || window
        : window;
};
/** @hidden */
var scrollableRoot = function (element) {
    var support = { browser: detectBrowser() };
    var document = getDocument(element);
    return (support.browser.edge || support.browser.safari) ? document.body : document.documentElement;
};
/** @hidden */
var isScrollable = function (el) {
    if (el && el.className && typeof (el.className) === 'string' && el.className.indexOf('k-auto-scrollable') > -1) {
        return true;
    }
    var overflow = window.getComputedStyle(el, 'overflow').overflow;
    return overflow.indexOf('auto') > -1 || overflow.indexOf('scroll') > -1;
};
/** @hidden */
var getScrollableParent = function (el) {
    var root = scrollableRoot(el);
    if (!el || el === document.body || el === document.documentElement) {
        return root;
    }
    var parent = el;
    while (parent
        && parent !== document.body
        && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        && parent.nodeType !== Node.DOCUMENT_NODE
        && !isScrollable(parent)) {
        parent = parent.parentNode;
    }
    if (parent && (parent === document.body || parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
        return root;
    }
    return parent;
};
/** @hidden */
var autoScrollVelocity = function (mouseX, mouseY, rect) {
    var velocity = { x: 0, y: 0 };
    var AUTO_SCROLL_AREA = 50;
    if (mouseX - rect.left < AUTO_SCROLL_AREA) {
        velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
    }
    else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
        velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
    }
    if (mouseY - rect.top < AUTO_SCROLL_AREA) {
        velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
    }
    else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
        velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
    }
    return velocity;
};
/** @hidden */
var scrollableViewPort = function (el, window) {
    var root = scrollableRoot(el);
    if (el === root) {
        return {
            top: root.scrollTop,
            left: root.scrollLeft,
            bottom: root.scrollTop + window.innerHeight,
            right: root.scrollLeft + window.innerWidth
        };
    }
    else {
        var rect = el.getBoundingClientRect();
        return {
            bottom: rect.top + rect.height,
            right: rect.left + rect.width,
            left: rect.left,
            top: rect.top
        };
    }
};
/** @hidden */
var isPointerInsideContainer = function (x, y, container) {
    var rect = container.getBoundingClientRect();
    return (rect.top <= y &&
        rect.left <= x &&
        y <= rect.bottom &&
        x <= rect.right);
};

;// ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/drag-n-drop.js


/** @hidden */
var DRAG_AND_DROP_DISPATCH_ACTION;
(function (DRAG_AND_DROP_DISPATCH_ACTION) {
    DRAG_AND_DROP_DISPATCH_ACTION["POINTER_DOWN"] = "pointerdown";
    DRAG_AND_DROP_DISPATCH_ACTION["POINTER_MOVE"] = "pointermove";
    DRAG_AND_DROP_DISPATCH_ACTION["POINTER_UP"] = "pointerup";
    DRAG_AND_DROP_DISPATCH_ACTION["POINTER_CANCEL"] = "pointercancel";
    DRAG_AND_DROP_DISPATCH_ACTION["MOUSE_DOWN"] = "mousedown";
    DRAG_AND_DROP_DISPATCH_ACTION["MOUSE_MOVE"] = "mousemove";
    DRAG_AND_DROP_DISPATCH_ACTION["MOUSE_UP"] = "mouseup";
    DRAG_AND_DROP_DISPATCH_ACTION["CONTEXT_MENU"] = "contextmenu";
    DRAG_AND_DROP_DISPATCH_ACTION["TOUCH_START"] = "touchstart";
    DRAG_AND_DROP_DISPATCH_ACTION["TOUCH_MOVE"] = "touchmove";
    DRAG_AND_DROP_DISPATCH_ACTION["TOUCH_END"] = "touchend";
    DRAG_AND_DROP_DISPATCH_ACTION["TOUCH_CANCEL"] = "touchcancel";
    DRAG_AND_DROP_DISPATCH_ACTION["SCROLL"] = "scroll";
    DRAG_AND_DROP_DISPATCH_ACTION["START"] = "KENDO_DRAG_AND_DROP_START";
    DRAG_AND_DROP_DISPATCH_ACTION["MOVE"] = "KENDO_DRAG_AND_DROP_MOVE";
    DRAG_AND_DROP_DISPATCH_ACTION["END"] = "KENDO_DRAG_AND_DROP_END";
    DRAG_AND_DROP_DISPATCH_ACTION["CANCEL"] = "KENDO_DRAG_AND_DROP_CANCEL";
})(DRAG_AND_DROP_DISPATCH_ACTION || (DRAG_AND_DROP_DISPATCH_ACTION = {}));
var isTouchEvent = function (event) { return /^touch/.test(event.type); };
var isScrollEvent = function (event) { return /^(scroll)/.test(event.type); };
/** @hidden */
var normalizeEvent = function (event, state) { return (isTouchEvent(event)
    ? ({
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.changedTouches[0].clientX,
        clientY: event.changedTouches[0].clientY,
        scrollX: state.scrollOffset.x,
        scrollY: state.scrollOffset.y,
        offsetX: state.offset.x,
        offsetY: state.offset.y,
        type: event.type,
        originalEvent: event,
        isTouch: true,
        altKey: false,
        ctrlKey: false,
        shiftKey: false,
        metaKey: false
    })
    : isScrollEvent(event)
        ? ({
            pageX: state.pageOffset.x,
            pageY: state.pageOffset.y,
            clientX: state.clientOffset.x,
            clientY: state.clientOffset.y,
            scrollX: state.scrollOffset.x,
            scrollY: state.scrollOffset.y,
            offsetX: state.offset.x,
            offsetY: state.offset.y,
            type: event.type,
            originalEvent: event,
            altKey: false,
            ctrlKey: false,
            shiftKey: false,
            metaKey: false
        })
        : ({
            pageX: event.pageX,
            pageY: event.pageY,
            clientX: event.clientX,
            clientY: event.clientY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            scrollX: state.scrollOffset.x,
            scrollY: state.scrollOffset.y,
            type: event.type,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
            originalEvent: event
        })); };
var noop = function () { };
/** @hidden */
var dispatchDragAndDrop = function (state, action, callbacks) {
    if (callbacks === void 0) { callbacks = {}; }
    var _a = callbacks.onIsPressedChange, onIsPressedChange = _a === void 0 ? noop : _a, _b = callbacks.onIsScrollingChange, onIsScrollingChange = _b === void 0 ? noop : _b, _c = callbacks.onVelocityChange, onVelocityChange = _c === void 0 ? noop : _c, _d = callbacks.onOffsetChange, onOffsetChange = _d === void 0 ? noop : _d, _e = callbacks.onPageOffsetChange, onPageOffsetChange = _e === void 0 ? noop : _e, _f = callbacks.onClientOffsetChange, onClientOffsetChange = _f === void 0 ? noop : _f, _g = callbacks.onScrollOffsetChange, onScrollOffsetChange = _g === void 0 ? noop : _g, _h = callbacks.onInitialScrollOffsetChange, onInitialScrollOffsetChange = _h === void 0 ? noop : _h;
    var drag = action.payload;
    var element = drag.element;
    var hint = drag.hint;
    var autoScrollDirection = state.autoScrollDirection;
    var overrideScrollableParent = state.scrollableParent;
    var event = normalizeEvent(action.event, state);
    switch (event.type) {
        case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN
                && (!event.originalEvent.isPrimary
                    || event.originalEvent.button !== 0)) {
                break;
            }
        // In rare cases where the `which` attribute is available in the mouse event
        // we check if the `left button` is explicitly clicked:
        // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/which#return_value
        case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN
                && (event.originalEvent.which
                    && event.originalEvent.which > 1)
                || state.ignoreMouse) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START
                && event.originalEvent.touches.length !== 1) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.START: {
            var scrollableParent_1 = overrideScrollableParent || getScrollableParent(action.payload.element);
            onInitialScrollOffsetChange(scrollableParent_1 instanceof Window
                ? { x: scrollableParent_1.scrollX, y: scrollableParent_1.scrollY }
                : { x: scrollableParent_1.scrollLeft, y: scrollableParent_1.scrollTop });
            onClientOffsetChange({
                x: event.clientX,
                y: event.clientY
            });
            onPageOffsetChange({
                x: event.pageX,
                y: event.pageY
            });
            onOffsetChange({
                x: event.offsetX,
                y: event.offsetY
            });
            onIsPressedChange(true);
            if (drag.onPress) {
                drag.onPress(event);
            }
            break;
        }
        case DRAG_AND_DROP_DISPATCH_ACTION.SCROLL:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.SCROLL && !state.pressed) {
                break;
            }
            var scrollableParent = overrideScrollableParent || getScrollableParent(element);
            var scrollOffset = scrollableParent instanceof Window
                ? { x: scrollableParent.scrollX, y: scrollableParent.scrollY }
                : { x: scrollableParent.scrollLeft, y: scrollableParent.scrollTop };
            event.scrollX = scrollOffset.x - state.initialScrollOffset.x;
            event.scrollY = scrollOffset.y - state.initialScrollOffset.y;
            onScrollOffsetChange({
                x: event.scrollX,
                y: event.scrollY
            });
        case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE && !event.originalEvent.isPrimary) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_MOVE:
        case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE && event.originalEvent.touches.length !== 1) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.MOVE: {
            if (state.pressed) {
                if (state.autoScroll && event.originalEvent.type !== 'scroll') {
                    if (element) {
                        var document_1 = getDocument(element);
                        var scrollableParent_2 = overrideScrollableParent || getScrollableParent(document_1.elementFromPoint(event.clientX, event.clientY));
                        var newVelocity = autoScrollVelocity(event.clientX, event.clientY, scrollableViewPort(scrollableParent_2, getWindow(element)));
                        onVelocityChange({
                            x: (autoScrollDirection && autoScrollDirection.horizontal === false) ? 0 : newVelocity.x,
                            y: (autoScrollDirection && autoScrollDirection.vertical === false) ? 0 : newVelocity.y
                        });
                        onIsScrollingChange(newVelocity.y !== 0 || newVelocity.x !== 0);
                    }
                }
                if (!state.drag && drag.onDragStart) {
                    drag.onDragStart(event);
                }
                if (drag.onDrag) {
                    drag.onDrag(event);
                }
                var dropElement_1 = intersect(hint || element, state.drops.map(function (drop) { return drop && drop.element; }).filter(function (d) { return d !== (hint || element); }));
                var drop = state.drops.find(function (drop) { return drop.element === dropElement_1; });
                if (drop
                    && dropElement_1
                    && isPointerInsideContainer(event.clientX, event.clientY, overrideScrollableParent || getScrollableParent(dropElement_1))
                    && dropElement_1 !== element) {
                    if ((state.drop && state.drop.element) !== dropElement_1) {
                        if (state.drop && state.drop.onDragLeave) {
                            state.drop.onDragLeave(event);
                        }
                        if (drop.onDragEnter) {
                            drop.onDragEnter(event);
                        }
                    }
                    else {
                        if (drop.onDragOver) {
                            drop.onDragOver(event);
                        }
                    }
                }
                else if (state.drop && state.drop.onDragLeave) {
                    state.drop.onDragLeave(event);
                }
            }
            onClientOffsetChange({
                x: event.clientX,
                y: event.clientY
            });
            onPageOffsetChange({
                x: event.pageX,
                y: event.pageY
            });
            break;
        }
        case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP && !event.originalEvent.isPrimary) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_UP:
        // the last finger has been lifted, and the user is not doing gesture.
        // there might be a better way to handle this.
        case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END:
            if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END && event.originalEvent.touches.length !== 1) {
                break;
            }
        case DRAG_AND_DROP_DISPATCH_ACTION.END: {
            onIsPressedChange(false);
            onIsScrollingChange(false);
            onScrollOffsetChange({ x: 0, y: 0 });
            if (drag.onRelease) {
                drag.onRelease(event);
            }
            if (state.drop && state.drop.onDrop) {
                state.drop.onDrop(event);
            }
            if (state.drag && drag.onDragEnd) {
                drag.onDragEnd(event);
            }
            break;
        }
        case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_CANCEL:
        case DRAG_AND_DROP_DISPATCH_ACTION.CONTEXT_MENU:
        case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_CANCEL:
        case DRAG_AND_DROP_DISPATCH_ACTION.CANCEL: {
            onIsPressedChange(false);
            onIsScrollingChange(false);
            onScrollOffsetChange({ x: 0, y: 0 });
            if (drag.onDragEnd) {
                drag.onDragEnd(event);
            }
            if (state.drop && state.drop.onDragLeave) {
                state.drop.onDragLeave(event);
            }
            break;
        }
        default:
            break;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/auto-scroll.js

/** @hidden */
var autoScroll = function (scrollableParent, vel) {
    if (!scrollableParent) {
        return;
    }
    var yIsScrollable;
    var xIsScrollable;
    var isRootNode = scrollableParent === scrollableRoot(scrollableParent);
    if (isRootNode) {
        yIsScrollable = document.body.scrollHeight > window.innerHeight;
        xIsScrollable = document.body.scrollWidth > window.innerWidth;
    }
    else {
        yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
        xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
    }
    var yDelta = scrollableParent.scrollTop + vel.y;
    var yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
    var xDelta = scrollableParent.scrollLeft + vel.x;
    var xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
    if (yInBounds) {
        scrollableParent.scrollTop += vel.y;
    }
    else if (yIsScrollable && yDelta < 0) {
        scrollableParent.scrollTop = 0;
    }
    if (xInBounds) {
        scrollableParent.scrollLeft += vel.x;
    }
    else if (xIsScrollable && xDelta < 0) {
        scrollableParent.scrollLeft = 0;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/main.js





/***/ },

/***/ 45377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AsyncFocusBlur: () => (/* reexport */ AsyncFocusBlur),
  BrowserSupportService: () => (/* reexport */ BrowserSupportService),
  COLLECTION_ACTION: () => (/* reexport */ COLLECTION_ACTION),
  DragAndDrop: () => (/* reexport */ DragAndDrop),
  Draggable: () => (/* reexport */ Draggable),
  Droppable: () => (/* reexport */ Droppable),
  FOCUSABLE_ELEMENTS: () => (/* reexport */ FOCUSABLE_ELEMENTS),
  FormComponent: () => (/* reexport */ FormComponent),
  Icon: () => (/* reexport */ Icon),
  IconWrap: () => (/* reexport */ IconWrap),
  IconsContext: () => (/* reexport */ IconsContext),
  Keys: () => (/* reexport */ Keys),
  Navigation: () => (/* reexport */ Navigation),
  SvgIcon: () => (/* reexport */ SvgIcon),
  Typography: () => (/* reexport */ Typography),
  WatermarkOverlay: () => (/* reexport */ WatermarkOverlay),
  ZIndexContext: () => (/* reexport */ ZIndexContext),
  canUseDOM: () => (/* reexport */ canUseDOM),
  canUseRef: () => (/* reexport */ canUseRef),
  classNames: () => (/* reexport */ classNames),
  clone: () => (/* reexport */ clone),
  cloneArray: () => (/* reexport */ cloneArray),
  cloneDate: () => (/* reexport */ cloneDate),
  cloneObject: () => (/* reexport */ cloneObject),
  cloneValue: () => (/* reexport */ cloneValue),
  createPropsContext: () => (/* reexport */ createPropsContext),
  dispatchEvent: () => (/* reexport */ dispatchEvent),
  extendDataItem: () => (/* reexport */ extendDataItem),
  focusFirstFocusableChild: () => (/* reexport */ focusFirstFocusableChild),
  getActiveElement: () => (/* reexport */ getActiveElement),
  getInnerActiveElement: () => (/* reexport */ getInnerActiveElement),
  getItemPath: () => (/* reexport */ getItemPath),
  getScrollbarWidth: () => (/* reexport */ getScrollbarWidth),
  getTabIndex: () => (/* reexport */ getTabIndex),
  getter: () => (/* reexport */ getter),
  guid: () => (/* reexport */ guid),
  hasRelativeStackingContext: () => (/* reexport */ hasRelativeStackingContext),
  kendoThemeMaps: () => (/* reexport */ kendoThemeMaps),
  mapTree: () => (/* reexport */ mapTree),
  mapTreeItem: () => (/* reexport */ mapTreeItem),
  memoizeOne: () => (/* reexport */ memoizeOne),
  noop: () => (/* reexport */ noop),
  setScrollbarWidth: () => (/* reexport */ setScrollbarWidth),
  setter: () => (/* reexport */ setter),
  shouldShowValidationUI: () => (/* reexport */ shouldShowValidationUI),
  svgIconPropType: () => (/* reexport */ svgIconPropType),
  toIconClass: () => (/* reexport */ toIconClass),
  toIconName: () => (/* reexport */ toIconName),
  useAsyncFocusBlur: () => (/* reexport */ useAsyncFocusBlur),
  useCollection: () => (/* reexport */ useCollection),
  useCustomComponent: () => (/* reexport */ useCustomComponent),
  useDir: () => (/* reexport */ useDir),
  useDocument: () => (/* reexport */ useDocument),
  useDraggable: () => (/* reexport */ useDraggable),
  useDroppable: () => (/* reexport */ useDroppable),
  useMouse: () => (/* reexport */ useMouse),
  usePropsContext: () => (/* reexport */ usePropsContext),
  useRtl: () => (/* reexport */ useRtl),
  useWindow: () => (/* reexport */ useWindow),
  useZIndexContext: () => (/* reexport */ useZIndexContext),
  validatePackage: () => (/* reexport */ validatePackage),
  withPropsContext: () => (/* reexport */ withPropsContext)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/contexts/ZIndexContext.js

/** @hidden */
var ZIndexContext = index_js_.createContext(0);
/** @hidden */
var useZIndexContext = function () { return index_js_.useContext(ZIndexContext); };
ZIndexContext.displayName = 'KendoReactZIndexContext';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/browser-support.service.js
/**
 * @hidden
 */
var getDocument = function () { return typeof document !== 'undefined' ? document : {}; };
/**
 * @hidden
 */
var BrowserSupportService = /** @class */ (function () {
    function BrowserSupportService() {
        this.scrollbar = 0;
    }
    Object.defineProperty(BrowserSupportService.prototype, "scrollbarWidth", {
        get: function () {
            var document = getDocument();
            if (!this.scrollbar && document && document.createElement) {
                var div = document.createElement('div');
                div.style.cssText = 'overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block';
                div.innerHTML = '&nbsp;';
                document.body.appendChild(div);
                this.scrollbar = div.offsetWidth - div.scrollWidth;
                document.body.removeChild(div);
            }
            return this.scrollbar;
        },
        enumerable: false,
        configurable: true
    });
    return BrowserSupportService;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/canUseDOM.js
/**
 * @hidden
 */
var canUseDOM = Boolean(
// from fbjs
typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/canUseRef.js
/**
 * @hidden
 */
var isClassComponent = function (Component) { return Boolean(typeof Component === 'function' && !!Component.prototype.isReactComponent); };
/**
 * @hidden
 */
var isForwardRef = function (Component) { return Boolean(Component.$$typeof && typeof Component.render === 'function'); };
/**
 * @hidden
 */
var canUseRef = function (Component) { return typeof Comment !== 'string' && (isClassComponent(Component) || isForwardRef(Component)); };

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/classNames.js
/**
 * @hidden
 */
var classNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = {};
    var addLeafKeys = function (arg) { return typeof arg === 'object' ? Object
        .keys(arg)
        .forEach(function (key) {
        result[key] = arg[key];
    }) : result[arg] = true; };
    ;
    var addKeys = function (list) { return list
        .filter(function (arg) { return arg !== true && !!arg; })
        .map(function (arg) {
        return Array.isArray(arg) ?
            addKeys(arg) :
            addLeafKeys(arg);
    }); };
    ;
    addKeys(args);
    return Object
        .keys(result)
        .map(function (key) { return (result[key] && key) || null; })
        .filter(function (el) { return el !== null; })
        .join(' ');
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/clone.js

/**
 * @hidden
 */
var cloneDate = function (date) { return date ? new Date(date.getTime()) : null; };
/**
 * @hidden
 */
function clone(obj) {
    var result = {};
    cloneObject(obj, result);
    return result;
}
/**
 * @hidden
 */
function cloneObject(obj, result) {
    for (var field in obj) {
        if (obj.hasOwnProperty(field)) {
            var value = obj[field];
            result[field] = cloneValue(value, result[field]);
        }
    }
}
/**
 * @hidden
 */
function cloneValue(value, nextValue) {
    if (Array.isArray(value)) {
        return cloneArray(value);
    }
    else if (value instanceof Date) {
        return cloneDate(value);
    }
    else if (index_js_.isValidElement(value)) {
        return index_js_.cloneElement(value, value.props);
    }
    else if (value && typeof value === 'object') {
        var newNextValue = nextValue || {};
        cloneObject(value, newNextValue);
        return newNextValue;
    }
    else {
        return value;
    }
}
/**
 * @hidden
 */
function cloneArray(array) {
    return array.map(function (value) { return cloneValue(value, undefined); });
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/focus.js
/**
 * @hidden
 */
var focusFirstFocusableChild = function (target) {
    if (target) {
        if ((target instanceof HTMLInputElement || target.tabIndex !== -1) && target.focus) {
            target.focus();
            return;
        }
        var element = target.querySelector('input, [tabindex]:not([tabindex="-1"])');
        if (element && element.focus) {
            element.focus();
        }
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/FormComponent.js
/**
 * @hidden
 */
var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    return FormComponent;
}());


;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/getTabIndex.js
/* eslint-disable radix */
/**
 * @hidden
 */
var DISABLED_TABINDEX = -1;
/**
 * @hidden
 */
var DEFAULT_TABINDEX = 0;
/**
 * @hidden
 */
var getTabIndex = function (tabIndex, disabled, useDefaultTabIndexWhenDisabled) {
    var parsedTabIndex = typeof tabIndex === 'string' ? parseInt(tabIndex, undefined) : tabIndex;
    if (parsedTabIndex === NaN) {
        return undefined;
    }
    return parsedTabIndex !== undefined
        ? parsedTabIndex
        : disabled ?
            (useDefaultTabIndexWhenDisabled ? undefined : DISABLED_TABINDEX)
            : DEFAULT_TABINDEX;
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/constants/index.js
/**
 * @hidden
 */
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/fieldList.js

/**
 * @hidden
 */
function fieldList(field) {
    var fields = [];
    field.replace(FIELD_REGEX, function (_match, index, indexAccessor, fieldName) {
        fields.push(index !== undefined ? index : (indexAccessor || fieldName));
    });
    return fields;
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/getter.js

var getterCache = {};
getterCache.undefined = function () { return undefined; };
/**
 * Can be used for getting value from object using field path. For example `users[index].name`.
 *
 * @example
 * ```jsx-no-run
 * const values = {users:[{lastName: 'Doe'}]};
 * const firstUserLastName = getter('user[0].lastName');
 *
 * console.log(firstUserLastName(values))
 *
 * // result: 'Doe'
 * ```
 */
function getter(field) {
    if (getterCache[field]) {
        return getterCache[field];
    }
    var fields = fieldList(field);
    getterCache[field] = function (obj) {
        var result = obj;
        for (var idx = 0; idx < fields.length && result; idx++) {
            result = result[fields[idx]];
        }
        return result;
    };
    return getterCache[field];
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/guid.js
/* eslint-disable no-bitwise */
/**
 * @hidden
 */
var guid = function () {
    var id = '';
    var i;
    var random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += '-';
        }
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/keys.js
/**
 * @hidden
 */
var Keys = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    esc: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/noop.js
/**
 * @hidden
 */
var noop = function () { };

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/scrollbarWidth.js


/**
 * @hidden
 */
var getScrollbarWidth = function () {
    if (!canUseDOM || !document.body) {
        return false;
    }
    var scrollbarWidth = new BrowserSupportService().scrollbarWidth;
    return scrollbarWidth;
};
/**
 * @hidden
 */
var setScrollbarWidth = function () {
    if (!canUseDOM || !document.body) {
        return false;
    }
    var scrollbarWidth = new BrowserSupportService().scrollbarWidth;
    document.body.style.setProperty('--kendo-scrollbar-width', "".concat(scrollbarWidth, "px"));
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/setter.js

var setterCache = {};
setterCache.undefined = function (obj) { return obj; };
var defaultValue = function (nextField, options) {
    return options && options.arrays && !isNaN(Number(nextField)) ? [] : {};
};
/**
 * Can be used for setting value to object using field path. For example `users[index].name`.
 *
 * @example
 * ```jsx-no-run
 * const values = {users:[{lastName: 'Doe'}]};
 * const firstUserFirstName = setter('user[0].firstName');
 *
 * firstUserFirstName(values, 'John');
 *
 * console.log(values)
 *
 * // result: {users:[{firstName: 'John', lastName: 'Doe'}]}
 * ```
 */
function setter(field) {
    if (setterCache[field]) {
        return setterCache[field];
    }
    var fields = fieldList(field);
    setterCache[field] = function (obj, value, options) {
        var root = obj;
        var depth = fields.length - 1;
        for (var idx = 0; idx < depth && root; idx++) {
            root = root[fields[idx]] = root[fields[idx]] || defaultValue(fields[idx + 1], options);
        }
        root[fields[depth]] = value;
    };
    return setterCache[field];
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/treeDataOperations.js
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Gets and sets the children. Returns the children or the re-created item with the new children.
function children(item, subItemsField, subItems) {
    var _a;
    if (subItems) {
        return __assign(__assign({}, item), (_a = {}, _a[subItemsField] = subItems.length ? __spreadArray([], subItems, true) : undefined, _a));
    }
    else {
        return item && item[subItemsField] ? __spreadArray([], item[subItemsField], true) : [];
    }
}
function mapItem(dataItem, subItemsField, callbackfn) {
    if (dataItem[subItemsField]) {
        var subItems = children(dataItem, subItemsField).map(function (child) { return mapItem(child, subItemsField, callbackfn); });
        return callbackfn(children(dataItem, subItemsField, subItems));
    }
    return callbackfn(dataItem);
}
/**
 * Creates a new array with the results of calling the provided callback function
 * on every element in the provided data tree.
 *
 * @param {any[]} tree - The data tree.
 * @param {string} subItemsField - The field which points to the subitems collection of each data item.
 * @param {(value: any) => any} callback - The callback function.
 * @returns {any[]} - The new data tree.
 */
var mapTree = function (tree, subItemsField, callback) {
    return __spreadArray([], tree.map(function (item) { return mapItem(item, subItemsField, callback); }), true);
};
/**
 * Creates a new array with the results of calling the provided callback function
 * on the element which match the `level` in the provided data tree.
 *
 * @param {any[]} tree - The data tree.
 * @param {number[]} level - An array of indexes of each parent and current item in the data tree.
 * @param {string} subItemsField - The field which points to the subitems collection of each data item.
 * @param {(value: any) => any} callback - The callback function.
 * @returns {any[]} - The new data tree.
 */
var mapTreeItem = function (tree, level, subItemsField, callback) {
    var curData = tree;
    var parentNodes = [];
    for (var i = 0; i < level.length; i++) {
        curData = curData[level[i]];
        curData = Array.isArray(curData) ? curData : curData[subItemsField];
        parentNodes.push(curData);
    }
    var parent = parentNodes.length > 1 ? parentNodes[parentNodes.length - 2] : tree;
    var newItemIndex = level[level.length - 1];
    var newItem = callback(parent[newItemIndex]);
    parent.splice(newItemIndex, 1, newItem);
};
/**
 * Similar to the `Object.assign` function. Additionally, creates a new array for the subitems.
 *
 * @param {object} item - The source data item.
 * @param {string} subItemsField - The field which points to the subitems collection of each data item.
 * @param {object} propsToExtend - The props with which the source data item will be extended.
 * @returns {object} - The target data item.
 */
var extendDataItem = function (item, subItemsField, propsToExtend) {
    var _a;
    return Object.assign({}, item, item[subItemsField] ? (_a = {}, _a[subItemsField] = item[subItemsField].slice(), _a) : {}, propsToExtend || {});
};
/**
 * Returns the data item path in the tree based on the level parameter.
 *
 * @param {any[]} tree - The data tree.
 * @param {number[]} level - The level of the target tree item.
 * @param {string} subItemsField - The field which points to the subitems collection of each data item.
 * @returns {any[]} - The path of the data item.
 */
var getItemPath = function (tree, level, subItemsField) {
    var nodes = [];
    var itemLevel = __spreadArray([], level, true);
    if (itemLevel.length) {
        var element = tree[itemLevel.shift() || 0];
        nodes.push(element);
        while (itemLevel.length && subItemsField) {
            element = element[subItemsField][itemLevel.shift() || 0];
            nodes.push(element);
        }
    }
    return nodes;
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-licensing@^1.3.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-licensing@1.6.0/node_modules/@progress/kendo-licensing/dist/index.mjs)
var index_mjs_ = __webpack_require__(74750);
;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/validate-package.js

var allowed = ['telerik.com', 'progress.com', 'stackblitz.io', 'csb.app'];
/**
 * @hidden
 */
function validatePackage(packageMetadata) {
    if (typeof index_mjs_ !== 'undefined') {
        index_mjs_.validatePackage(packageMetadata);
    }
    else {
        var message = "License activation failed for ".concat(packageMetadata.name, "\n");
        message += 'The @progress/kendo-licensing script is not loaded.\n';
        message += "See ".concat(packageMetadata.licensingDocsUrl, " for more information.\n");
        console.warn(message);
    }
}
/**
 * @hidden
 */
function shouldShowValidationUI(packageMetadata) {
    var skip = allowed.some(function (hostname) { var _a; return (_a = globalThis.document) === null || _a === void 0 ? void 0 : _a.location.hostname.endsWith(hostname); });
    return !skip && !(index_mjs_ === null || index_mjs_ === void 0 ? void 0 : index_mjs_.validatePackage(packageMetadata));
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hasRelativeStackingContext.js

/** @hidden */
var hasRelativeStackingContext = function (elementSource) {
    if (!canUseDOM) {
        return false;
    }
    // Component need to pass element to make sure document owner is correct.
    // This however might be performance hit if checked for example on each drag event.
    var currentDocument = elementSource ? elementSource.ownerDocument : document;
    if (!currentDocument || !currentDocument.body) {
        return false;
    }
    var top = 10;
    var parent = currentDocument.createElement('div');
    parent.style.transform = 'matrix(10, 0, 0, 10, 0, 0)';
    var child = currentDocument.createElement('div');
    child.appendChild(currentDocument.createTextNode('child'));
    child.style.position = 'fixed';
    child.style.top = top + 'px';
    parent.appendChild(child);
    currentDocument.body.appendChild(parent);
    var isDifferent = child.getBoundingClientRect().top !== top;
    currentDocument.body.removeChild(parent);
    return isDifferent;
};

// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/watermark/WatermarkOverlay.js
/* eslint-disable max-len */


var licenseKeyUrl = 'https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-banner';
var didRender = false;
/**
 *
 * @hidden
 */
var WatermarkOverlay = function () {
    var _a = index_js_.useState(true), isOpen = _a[0], setIsOpen = _a[1];
    var _b = index_js_.useState(false), bannerMounted = _b[0], setBannerMounted = _b[1];
    index_js_.useEffect(function () {
        if (!didRender) {
            setBannerMounted(true);
            didRender = true;
        }
    }, []);
    var onCloseBannerClick = function () {
        setIsOpen(false);
    };
    var bannerElement = (index_js_.createElement(index_js_.Fragment, null, isOpen && (index_js_.createElement("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '16px',
            right: '16px',
            padding: '12px',
            borderRadius: '4px',
            boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            backgroundColor: '#FFC000',
            color: '#1E1E1E',
            zIndex: 999
        } },
        index_js_.createElement("span", { style: { display: 'flex', alignSelf: 'center', marginRight: '8px' } },
            index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
                index_js_.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z", fill: "#1E1E1E" }))),
        index_js_.createElement("span", null, "No valid license found for KendoReact. Learn how to activate your license."),
        index_js_.createElement("div", { style: { display: 'flex', alignItems: 'center', marginLeft: '24px' } },
            index_js_.createElement("a", { href: licenseKeyUrl, style: { marginRight: '8px', display: 'flex' } },
                index_js_.createElement("button", { title: 'Learn More', style: {
                        display: 'inline-flex',
                        position: 'relative',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px',
                        backgroundColor: 'transparent',
                        transition: 'color 0.2s ease-in-out',
                        outline: 'none',
                        cursor: 'pointer'
                    } },
                    index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
                        index_js_.createElement("path", { d: "M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z", fill: "#1E1E1E" })))),
            index_js_.createElement("button", { title: 'Close', style: {
                    display: 'inline-flex',
                    position: 'relative',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px',
                    backgroundColor: 'transparent',
                    transition: 'color 0.2s ease-in-out',
                    outline: 'none',
                    cursor: 'pointer'
                }, onClick: onCloseBannerClick },
                index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
                    index_js_.createElement("path", { d: "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z", fill: "#1E1E1E" }))))))));
    return (index_js_.createElement(index_js_.Fragment, null,
        index_js_.createElement("div", { style: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.2,
                zIndex: 101,
                pointerEvents: 'none',
                backgroundImage: 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==\')'
            } }),
        bannerMounted && react_dom_index_js_.createPortal(bannerElement, document.body)));
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/events/dispatchEvent.js
/**
 * @hidden
 * Dispatches a new event based on an event that was already internally dispatched to KendoReact users.
 *
 * @param eventHandler - The public event handler that is assigned by the user.
 * When undefined, the method is not an option.
 * @param dispatchedEvent - The event that was already dispatched internally.
 * @param target - The target component of the new event.
 * @param eventData - The additional data that will be passed through the new event.
 * When the new event has no additional data
 *  other than the `BaseEvent` arguments, pass `undefined`.
 */
function dispatchEvent(eventHandler, dispatchedEvent, target, eventData) {
    if (eventHandler) {
        var eventBaseData = {
            syntheticEvent: dispatchedEvent,
            nativeEvent: dispatchedEvent.nativeEvent,
            target: target
        };
        eventHandler.call(undefined, Object.assign(eventBaseData, eventData));
    }
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useAsyncFocusBlur.js
var useAsyncFocusBlur_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

/**
 * An utility function for asynchronous focus/blur handling.
 *
 * By default, the `onFocus` and `onBlur` callbacks are called every time a child components receives/loses focus.
 * Use this utility hook for scenarios where you need to know if the parent has received focus for the first time, or completely lost focus.
 *
 * @returns
 */
function useAsyncFocusBlur(_a) {
    var onFocus = _a.onFocus, onBlur = _a.onBlur, onSyncFocus = _a.onSyncFocus, onSyncBlur = _a.onSyncBlur;
    var focused = index_js_.useRef(false);
    var tick = index_js_.useRef(0);
    var nextTick = index_js_.useCallback(function (f) {
        clearTimeout(tick.current);
        tick.current = window.setTimeout(function () { return f(); });
    }, [tick]);
    var handleFocus = index_js_.useCallback(function () {
        var event = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            event[_i] = arguments[_i];
        }
        clearTimeout(tick.current);
        if (onSyncFocus) {
            onSyncFocus.call(undefined, event[0]);
        }
        if (focused.current) {
            return;
        }
        ;
        focused.current = true;
        if (onFocus) {
            onFocus.call.apply(onFocus, useAsyncFocusBlur_spreadArray([undefined], event, false));
        }
    }, [focused, onFocus, onSyncFocus]);
    var handleBlur = index_js_.useCallback(function () {
        var event = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            event[_i] = arguments[_i];
        }
        if (onSyncBlur) {
            onSyncBlur.call(undefined, event[0]);
        }
        nextTick(function () {
            if (!focused.current) {
                return;
            }
            if (onBlur) {
                focused.current = false;
                onBlur.call.apply(onBlur, useAsyncFocusBlur_spreadArray([undefined], event, false));
            }
        });
    }, [focused, nextTick, onBlur, onSyncBlur]);
    index_js_.useEffect(function () {
        return function () {
            clearTimeout(tick.current);
        };
    }, []);
    return {
        onFocus: handleFocus,
        onBlur: handleBlur
    };
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hocs/AsyncFocusBlur.js
var AsyncFocusBlur_assign = (undefined && undefined.__assign) || function () {
    AsyncFocusBlur_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return AsyncFocusBlur_assign.apply(this, arguments);
};


/**
 * An utility High-order Component for asynchronous focus/blur handling.
 *
 * By default, the `onFocus` and `onBlur` callbacks are called every time a child components receives/loses focus.
 * Use this utility HOC for scenarios where you need to know if the parent has received focus for the first time, or completely lost focus.
 *
 * @returns
 */
var AsyncFocusBlur = function (_a) {
    var children = _a.children, onFocus = _a.onFocus, onBlur = _a.onBlur, onSyncFocus = _a.onSyncFocus, onSyncBlur = _a.onSyncBlur;
    var args = useAsyncFocusBlur({ onFocus: onFocus, onBlur: onBlur, onSyncFocus: onSyncFocus, onSyncBlur: onSyncBlur });
    return index_js_.createElement(index_js_.Fragment, null, children.call(undefined, AsyncFocusBlur_assign({}, args)));
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/usePropsContext.js

/** @hidden */
var usePropsContext = function (context, props) {
    var contextPropsCallback = index_js_.useContext(context);
    var contextProps = contextPropsCallback(props);
    return contextProps;
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hocs/withPropsContext.js
var withPropsContext_assign = (undefined && undefined.__assign) || function () {
    withPropsContext_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withPropsContext_assign.apply(this, arguments);
};


/** @hidden */
var createPropsContext = function () { return index_js_.createContext(function (props) { return props; }); };
/** @hidden */
var withPropsContext = function (context, Component
// eslint-disable-next-line react/display-name
) { return index_js_.forwardRef(function (props, ref) {
    var contextProps = usePropsContext(context, props);
    return (index_js_.createElement(Component, withPropsContext_assign({}, contextProps, { ref: ref })));
}); };

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useDir.js

/**
 * @hidden
 */
function useDir(elementRef, initialDir, args) {
    // Dir prop is read only on initial rendering due to specifics of getComputedStyles - see below
    var _a = index_js_.useState(initialDir), dir = _a[0], setDir = _a[1];
    index_js_.useEffect(function () {
        if (!dir && window && elementRef.current) {
            // Note: getComputedStyle forces reflow
            var rtlCandidate = window.getComputedStyle(elementRef.current).direction;
            if (rtlCandidate) {
                // rerender is needed as DOM is read after first render
                setDir(rtlCandidate);
            }
        }
    }, args);
    return dir;
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useRtl.js

// Same as 'useDir'. Export to avoid breaking change.
// 'useRtl' is incorrect naming, since applies that the returned value is `true` or `false`.
// but instead, it is returning `ltr` or `rtl`.
/**
 * @hidden
 */
function useRtl(elementRef, initialDir, args) {
    // Dir prop is read only on initial rendering due to specifics of getComputedStyles - see below
    var _a = index_js_.useState(initialDir), dir = _a[0], setDir = _a[1];
    index_js_.useEffect(function () {
        if (!dir && window && elementRef.current) {
            // Note: getComputedStyle forces reflow
            var rtlCandidate = window.getComputedStyle(elementRef.current).direction;
            if (rtlCandidate) {
                // rerender is needed as DOM is read after first render
                setDir(rtlCandidate);
            }
        }
    }, args);
    return dir;
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useMouse.js

/**
 * @hidden
 */
var useMouse = function (props, target, extend) {
    if (extend === void 0) { extend = {}; }
    var handleMouseDown = index_js_.useCallback(function (event) {
        if (extend.onMouseDown) {
            extend.onMouseDown.call(undefined, event);
        }
        if (props.onMouseDown) {
            props.onMouseDown.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseDown, props.onMouseDown, target]);
    var handleMouseUp = index_js_.useCallback(function (event) {
        if (extend.onMouseUp) {
            extend.onMouseUp.call(undefined, event);
        }
        if (props.onMouseUp) {
            props.onMouseUp.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseUp, props.onMouseUp, target]);
    var handleClick = index_js_.useCallback(function (event) {
        if (extend.onClick) {
            extend.onClick.call(undefined, event);
        }
        if (props.onClick) {
            props.onClick.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onClick, props.onClick, target]);
    var handleDoubleClick = index_js_.useCallback(function (event) {
        if (extend.onDoubleClick) {
            extend.onDoubleClick.call(undefined, event);
        }
        if (props.onDoubleClick) {
            props.onDoubleClick.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onDoubleClick, props.onDoubleClick, target]);
    var handleMouseEnter = index_js_.useCallback(function (event) {
        if (extend.onMouseEnter) {
            extend.onMouseEnter.call(undefined, event);
        }
        if (props.onMouseEnter) {
            props.onMouseEnter.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseEnter, props.onMouseEnter, target]);
    var handleMouseLeave = index_js_.useCallback(function (event) {
        if (extend.onMouseLeave) {
            extend.onMouseLeave.call(undefined, event);
        }
        if (props.onMouseLeave) {
            props.onMouseLeave.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseLeave, props.onMouseLeave, target]);
    var handelMouseMove = index_js_.useCallback(function (event) {
        if (extend.onMouseMove) {
            extend.onMouseMove.call(undefined, event);
        }
        if (props.onMouseMove) {
            props.onMouseMove.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseMove, props.onMouseMove, target]);
    var handleMouseOut = index_js_.useCallback(function (event) {
        if (extend.onMouseOut) {
            extend.onMouseOut.call(undefined, event);
        }
        if (props.onMouseOut) {
            props.onMouseOut.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseOut, props.onMouseOut, target]);
    var handleMouseOver = index_js_.useCallback(function (event) {
        if (extend.onMouseOver) {
            extend.onMouseOver.call(undefined, event);
        }
        if (props.onMouseOver) {
            props.onMouseOver.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [extend.onMouseOver, props.onMouseOver, target]);
    return {
        onClick: handleClick,
        onMouseUp: handleMouseUp,
        onMouseDown: handleMouseDown,
        onDoubleClick: handleDoubleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseMove: handelMouseMove,
        onMouseOut: handleMouseOut,
        onMouseOver: handleMouseOver
    };
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useCustomComponent.js
/**
 * @hidden
 */
var useCustomComponent = function (comp) {
    /* if(React.isValidElement<P>(comp)) {
        return [comp.type, comp.props];
    } */
    return [comp, {}];
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useCollection.js

/** @hidden */
var COLLECTION_ACTION;
(function (COLLECTION_ACTION) {
    COLLECTION_ACTION[COLLECTION_ACTION["add"] = 0] = "add";
    COLLECTION_ACTION[COLLECTION_ACTION["remove"] = 1] = "remove";
})(COLLECTION_ACTION || (COLLECTION_ACTION = {}));
/** @hidden */
var useCollection = function (initial) {
    if (initial === void 0) { initial = []; }
    var collection = index_js_.useRef(initial);
    var handleCollectionAction = index_js_.useCallback(function (action) {
        switch (action.type) {
            case COLLECTION_ACTION.add:
                collection.current.push(action.item);
                break;
            case COLLECTION_ACTION.remove:
                var index = collection.current.indexOf(action.item);
                collection.current.splice(index, 1);
                break;
            default:
                break;
        }
    }, []);
    return [collection.current, handleCollectionAction];
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useDocument.js

/**
 * Returns a function, which gets the `ownerDocument` of the element.
 */
var useDocument = function (ref) {
    var getElement = index_js_.useCallback(function () { return ref.current && ref.current.element
        ? ref.current.element
        : ref.current; }, [ref]);
    var getDocument = index_js_.useCallback(function () {
        var element = getElement();
        return element ? element.ownerDocument || document : document;
    }, [getElement]);
    return getDocument;
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useWindow.js


/**
 * Returns a function, which gets the `defaultView` based on the `ownerDocument` of the element.
 */
var useWindow = function (ref) {
    var getDocument = useDocument(ref);
    var getWindow = index_js_.useCallback(function () {
        var document = getDocument();
        return document
            ? document.defaultView || window
            : window;
    }, [getDocument]);
    return getWindow;
};

// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/constants.js
/**
 * @hidden
 */
var SIZE_CLASSES = {
    'default': '',
    'xsmall': 'k-icon-xs',
    'small': 'k-icon-sm',
    'medium': 'k-icon-md',
    'large': 'k-icon-lg',
    'xlarge': 'k-icon-xl',
    'xxlarge': 'k-icon-xxl',
    'xxxlarge': 'k-icon-xxxl'
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/utils.js

/**
 * @hidden
 */
var toIconName = function (iconClass) { return iconClass.replace(/^k-i-/, ''); };
/**
 * @hidden
 */
var toIconClass = function (name) { return 'k-i-' + name; };
/**
 * @hidden
 */
var svgIconPropType = prop_types_index_js_.shape({
    name: prop_types_index_js_.string.isRequired,
    content: prop_types_index_js_.string.isRequired,
    viewBox: prop_types_index_js_.string.isRequired
});

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/Icon.js
var Icon_assign = (undefined && undefined.__assign) || function () {
    Icon_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Icon_assign.apply(this, arguments);
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
 * Represents the [KendoReact Icon component]({% slug overview_icon %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Icon name="home"/>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Icon = index_js_.forwardRef(function (props, ref) {
    var className = props.className, name = props.name, themeColor = props.themeColor, size = props.size, flip = props.flip, style = props.style, id = props.id, tabIndex = props.tabIndex, others = __rest(props, ["className", "name", "themeColor", "size", "flip", "style", "id", "tabIndex"]);
    var target = index_js_.useRef(null);
    var elementRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: elementRef.current
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var sizeProp = index_js_.useMemo(function () { return size || defaultProps.size; }, [size]);
    var flipProp = index_js_.useMemo(function () { return flip || defaultProps.flip; }, [flip]);
    var fontClassNames = index_js_.useMemo(function () {
        var _a;
        return classNames('k-icon', 'k-font-icon', name && toIconClass(name), (_a = {},
            _a["k-color-".concat(themeColor)] = themeColor,
            _a['k-flip-h'] = flipProp === 'horizontal' || flipProp === 'both',
            _a['k-flip-v'] = flipProp === 'vertical' || flipProp === 'both',
            _a), SIZE_CLASSES[sizeProp], className);
    }, [name, themeColor, sizeProp, flipProp, className]);
    var mouseProps = useMouse(props, target);
    return (index_js_.createElement("span", Icon_assign({ ref: elementRef }, others, mouseProps, { className: fontClassNames, id: id, tabIndex: tabIndex, style: style, role: "presentation" })));
});
Icon.propTypes = {
    style: prop_types_index_js_.object,
    classNames: prop_types_index_js_.string,
    name: prop_types_index_js_.string,
    themeColor: prop_types_index_js_.oneOf([
        'inherit', 'primary', 'secondary', 'tertiary',
        'info', 'success', 'error', 'warning',
        'dark', 'light', 'inverse'
    ]),
    size: prop_types_index_js_.oneOf(['default', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
    flip: prop_types_index_js_.oneOf(['default', 'horizontal', 'vertical', 'both'])
};
var defaultProps = {
    size: 'default',
    flip: 'default'
};
Icon.displayName = 'KendoIcon';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/SvgIcon.js
var SvgIcon_assign = (undefined && undefined.__assign) || function () {
    SvgIcon_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SvgIcon_assign.apply(this, arguments);
};
var SvgIcon_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the [KendoReact SvgIcon component]({% slug overview_svgicon %}).
 *
 * @example
 * ```jsx
 * import { accessibility } from '@progress/kendo-svg-icons';
 *
 * const App = () => {
 *   return (
 *       <SvgIcon icon={accessibility} />
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var SvgIcon = index_js_.forwardRef(function (props, ref) {
    var children = props.children, className = props.className, svgClassName = props.svgClassName, icon = props.icon, flip = props.flip, id = props.id, tabIndex = props.tabIndex, size = props.size, style = props.style, svgStyle = props.svgStyle, themeColor = props.themeColor, viewBox = props.viewBox, name = props.name, onClick = props.onClick, others = SvgIcon_rest(props, ["children", "className", "svgClassName", "icon", "flip", "id", "tabIndex", "size", "style", "svgStyle", "themeColor", "viewBox", "name", "onClick"]);
    var elementRef = index_js_.useRef(null);
    index_js_.useImperativeHandle(ref, function () { return ({
        element: elementRef.current
    }); });
    var iconNameProp = index_js_.useMemo(function () { return icon ? icon.name : SvgIcon_defaultProps.icon; }, [icon]);
    var sizeProp = index_js_.useMemo(function () { return size || SvgIcon_defaultProps.size; }, [size]);
    var flipProp = index_js_.useMemo(function () { return flip || SvgIcon_defaultProps.flip; }, [flip]);
    var viewBoxProp = index_js_.useMemo(function () { return viewBox || SvgIcon_defaultProps.viewBox; }, [viewBox]);
    var elementClassNames = index_js_.useMemo(function () {
        var _a;
        return classNames('k-icon', 'k-svg-icon', 'k-svg-i-' + iconNameProp, (_a = {},
            _a["k-color-".concat(themeColor)] = themeColor,
            _a['k-flip-h'] = flipProp === 'horizontal' || flipProp === 'both',
            _a['k-flip-v'] = flipProp === 'vertical' || flipProp === 'both',
            _a), SIZE_CLASSES[sizeProp], className);
    }, [iconNameProp, themeColor, sizeProp, flipProp, className]);
    var elementStyle = index_js_.useMemo(function () {
        if (props.width && props.height) {
            return SvgIcon_assign({ width: props.width, height: props.height }, style);
        }
        else if (props.width) {
            return SvgIcon_assign({ width: props.width, height: props.width }, style);
        }
        else if (props.height) {
            return SvgIcon_assign({ width: props.height, height: props.height }, style);
        }
        else {
            return SvgIcon_assign({}, style);
        }
    }, [props.width, props.height, style]);
    return (index_js_.createElement("span", { className: elementClassNames, style: elementStyle, ref: elementRef, onClick: onClick },
        index_js_.createElement("svg", SvgIcon_assign({ id: id, className: svgClassName, style: svgStyle, "aria-hidden": true, tabIndex: tabIndex, focusable: false, xmlns: "http://www.w3.org/2000/svg", viewBox: icon ? icon.viewBox : viewBoxProp, dangerouslySetInnerHTML: icon ? { __html: icon.content } : undefined }, others), icon ? undefined : children)));
});
SvgIcon.propTypes = {
    style: prop_types_index_js_.object,
    classNames: prop_types_index_js_.string,
    children: prop_types_index_js_.any,
    icon: prop_types_index_js_.object,
    themeColor: prop_types_index_js_.oneOf([
        'inherit', 'primary', 'secondary', 'tertiary',
        'info', 'success', 'error', 'warning',
        'dark', 'light', 'inverse'
    ]),
    size: prop_types_index_js_.oneOf(['default', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
    flip: prop_types_index_js_.oneOf(['default', 'horizontal', 'vertical', 'both'])
};
var SvgIcon_defaultProps = {
    size: 'default',
    flip: 'default',
    icon: '',
    viewBox: '0 0 24 24'
};
SvgIcon.displayName = 'KendoSvgIcon';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/IconsContext.js

;
/**
 * Represents a React Context which provides you with the option to configure the KendoReact components icons.
 */
var IconsContext = index_js_.createContext({ type: 'svg' });
IconsContext.displayName = 'KendoReactIconsContext';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/icons/IconWrap.js
var IconWrap_assign = (undefined && undefined.__assign) || function () {
    IconWrap_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return IconWrap_assign.apply(this, arguments);
};
var IconWrap_rest = (undefined && undefined.__rest) || function (s, e) {
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
var IconWrap = index_js_.forwardRef(function (props, ref) {
    var _a, _b;
    var _c = index_js_.useContext(IconsContext), type = _c.type, icons = _c.icons;
    var icon = props.icon, fontIconProps = IconWrap_rest(props, ["icon"]);
    var name = type === 'svg' ? (((_a = props.icon) === null || _a === void 0 ? void 0 : _a.name) || props.name) : (props.name || ((_b = props.icon) === null || _b === void 0 ? void 0 : _b.name));
    name = (name && icons && icons[name] && typeof icons[name] === 'string') ? icons[name] : name;
    var svg = (name && icons && icons[name] && typeof icons[name] !== 'string') ? icons[name] : icon;
    return (type === 'svg' && svg) ?
        index_js_.createElement(SvgIcon, IconWrap_assign({}, props, { icon: svg, ref: ref })) :
        index_js_.createElement(Icon, IconWrap_assign({}, fontIconProps, { name: name, ref: ref }));
});
IconWrap.displayName = 'KendoIconWrap';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/typography/constants.js
/**
 * @hidden
 */
var FONT_SIZE_CLASSES = {
    'xsmall': 'k-fs-xs',
    'small': 'k-fs-sm',
    'medium': 'k-fs-md',
    'large': 'k-fs-lg',
    'xlarge': 'k-fs-xl'
};
/**
 * @hidden
 */
var FONT_WEIGHT_CLASSES = {
    'light': 'k-font-weight-light',
    'normal': 'k-font-weight-normal',
    'bold': 'k-font-weight-bold'
};
/**
 * @hidden
 */
var MARGIN_ENUM_CLASSES = {
    'xsmall': 'k-m-xs',
    'small': 'k-m-sm',
    'medium': 'k-m-md',
    'large': 'k-m-lg',
    'xlarge': 'k-m-xl',
    'thin': 'k-m-thin',
    'hair': 'k-m-hair'
};
/**
 * @hidden
 */
var MARGIN_ENUM_VALUES = {
    'xsmall': 'xs',
    'small': 'sm',
    'medium': 'md',
    'large': 'lg',
    'xlarge': 'xl',
    'thin': 'thin',
    'hair': 'hair'
};
/**
 * @hidden
 */
var MARGIN_SIDES_CLASSES = {
    'top': 'k-mt-',
    'right': 'k-mr-',
    'bottom': 'k-mb-',
    'left': 'k-ml-'
};
/**
 * @hidden
 */
var TEXT_ALIGN_CLASSES = {
    'left': 'k-text-left',
    'right': 'k-text-right',
    'center': 'k-text-center',
    'justify': 'k-text-justify'
};
/**
 * @hidden
 */
var TEXT_TRANSFORM_CLASSES = {
    'lowercase': 'k-text-lowercase',
    'uppercase': 'k-text-uppercase',
    'capitalize': 'k-text-capitalize'
};
/**
 * @hidden
 */
var THEME_COLOR_CLASSES = {
    'inherit': 'k-color-inherit',
    'primary': 'k-color-primary',
    'secondary': 'k-color-secondary',
    'tertiary': 'k-color-tertiary',
    'info': 'k-color-info',
    'success': 'k-color-success',
    'warning': 'k-color-warning',
    'error': 'k-color-error',
    'dark': 'k-color-dark',
    'light': 'k-color-light',
    'inverse': 'k-color-inverse'
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/typography/Typography.js
var Typography_assign = (undefined && undefined.__assign) || function () {
    Typography_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Typography_assign.apply(this, arguments);
};
var Typography_rest = (undefined && undefined.__rest) || function (s, e) {
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
var generateTypography = function (element) {
    var component = index_js_.forwardRef(function (props, ref) {
        var id = props.id, style = props.style, className = props.className, fontSize = props.fontSize, fontWeight = props.fontWeight, textAlign = props.textAlign, textTransform = props.textTransform, themeColor = props.themeColor, margin = props.margin, others = Typography_rest(props, ["id", "style", "className", "fontSize", "fontWeight", "textAlign", "textTransform", "themeColor", "margin"]);
        var target = index_js_.useRef(null);
        var elementRef = index_js_.useRef(null);
        index_js_.useImperativeHandle(target, function () { return ({
            element: elementRef.current,
            props: props
        }); });
        index_js_.useImperativeHandle(ref, function () { return target.current; });
        var defaultClass = function () {
            var classMap = element === 'p' ? 'paragraph' : element;
            return "k-".concat(classMap);
        };
        var Component = element;
        var setMarginClassPerSide = function (marginSide, value) {
            var val = typeof value === 'string' ? MARGIN_ENUM_VALUES[value] : value;
            return "".concat(MARGIN_SIDES_CLASSES[marginSide]).concat(val);
        };
        var setMarginClasses = function () {
            if (margin === undefined) {
                return;
            }
            if (typeof margin === 'string') {
                return [MARGIN_ENUM_CLASSES[margin]];
            }
            // The the predefined Kendo classes are starting from 0 to 24.
            if (typeof margin === 'number' && margin >= 0 && margin <= 24) {
                return ["k-m-".concat(margin)];
            }
            if (typeof margin === 'object') {
                var marginClassesList_1 = [];
                Object.keys(margin).forEach(function (key) {
                    if (margin[key] !== null && margin[key] !== undefined) {
                        marginClassesList_1.push(setMarginClassPerSide(key, margin[key]));
                    }
                });
                var classes = marginClassesList_1.join(' ');
                return classes;
            }
        };
        var setTypographyClasses = function () {
            var typographyArray = [
                defaultClass(),
                FONT_SIZE_CLASSES[fontSize],
                FONT_WEIGHT_CLASSES[fontWeight],
                TEXT_ALIGN_CLASSES[textAlign],
                TEXT_TRANSFORM_CLASSES[textTransform],
                THEME_COLOR_CLASSES[themeColor],
                setMarginClasses(),
                className
            ];
            var typographyClasses = typographyArray.filter(function (n) { return n !== undefined; }).join(' ');
            return typographyClasses;
        };
        return (index_js_.createElement(Component, Typography_assign({ id: id, ref: elementRef, className: setTypographyClasses(), style: style }, others), props.children));
    });
    component.propTypes = {
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        fontSize: prop_types_index_js_.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
        fontWeight: prop_types_index_js_.oneOf(['light', 'normal', 'bold']),
        margin: prop_types_index_js_.oneOfType([
            prop_types_index_js_.number,
            prop_types_index_js_.object,
            prop_types_index_js_.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'thin', 'hair'])
        ]),
        textAlign: prop_types_index_js_.oneOf(['left', 'right', 'center', 'justify']),
        textTransform: prop_types_index_js_.oneOf(['lowercase', 'uppercase', 'capitalize']),
        themeColor: prop_types_index_js_.oneOf([
            'inherit', 'primary', 'secondary', 'tertiary',
            'info', 'success', 'error', 'warning',
            'dark', 'light', 'inverse'
        ])
    };
    component.displayName = "KendoReactTypography".concat(element.toUpperCase());
    return component;
};
/**
 * Represents [KendoReact Typography Heading1 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h1>Heading 1</Typography.h1>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h1 = generateTypography('h1');
/**
 * Represents [KendoReact Typography Heading2 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h2>Heading 2</Typography.h2>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h2 = generateTypography('h2');
/**
 * Represents [KendoReact Typography Heading3 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h3>Heading 3</Typography.h3>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h3 = generateTypography('h3');
/**
 * Represents [KendoReact Typography Heading4 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h4>Heading 4</Typography.h4>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h4 = generateTypography('h4');
/**
 * Represents [KendoReact Typography Heading5 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h5>Heading 5</Typography.h5>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h5 = generateTypography('h5');
/**
 * Represents [KendoReact Typography Heading6 component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h6>Heading 6</Typography.h6>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var h6 = generateTypography('h6');
/**
 * Represents [KendoReact Typography Paragraph component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.p>I'm a paragraph text.</Typography.p>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var p = generateTypography('p');
/**
 * Represents [KendoReact Typography Code component]({% slug overview_typography %}).
 * Use to create a single-line code snippet.
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.code>code</Typography.code>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var code = generateTypography('code');
/**
 * Represents [KendoReact Typography Pre component]({% slug overview_typography %}).
 * Used along with [KendoReact Typography Code component]({% slug overview_typography %}) to create multi-line code snippet.
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *     <Typography.pre>
 *       <Typography.code dangerouslySetInnerHTML={{__html: `
 *         const handleChange = ({ target }) => {
 *           const { name, value } = target;
 *           const newData = Object.assign({}, data, { [name]: value });
 *           setData(newData);
 *         }
 *       `}} />
 *     </Typography.pre>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var pre = generateTypography('pre');
/**
 * Represents the [KendoReact Typography component]({% slug overview_typography %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *       <Typography.h2>Heading 2</Typography.h2>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Typography = {
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    p: p,
    code: code,
    pre: pre
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useControlledState.js
var useControlledState_assign = (undefined && undefined.__assign) || function () {
    useControlledState_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return useControlledState_assign.apply(this, arguments);
};

/** @hidden */
var useControlledState = function (defaultProp, prop, callback) {
    var _a = index_js_.useState(prop || defaultProp), state = _a[0], setState = _a[1];
    var handleSetEdit = index_js_.useCallback(function (value, args) {
        setState(value);
        if (callback) {
            callback.call(undefined, useControlledState_assign(useControlledState_assign({}, args), { value: value }));
        }
    }, [callback, setState]);
    return [prop !== undefined ? prop : state, handleSetEdit];
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/drag-n-drop/context/index.js


/**
 * @hidden
 */
var DragContext = index_js_.createContext([
    undefined,
    noop
]);
/**
 * @hidden
 */
var DropContext = index_js_.createContext([
    undefined,
    noop
]);
/**
 * @hidden
 */
var DragsContext = index_js_.createContext([[], noop, noop]);
/**
 * @hidden
 */
var DropsContext = index_js_.createContext([[], noop, noop]);

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/drag-n-drop/index.js



/**
 * The `DragAndDrop` component is required for the `droppable` functionality to work properly.
 *
 * It is used internally to synchronize the `drag` and `drop` functionalities.
 * Accepts properties of type [DragAndDropProps]({% slug api_common_draganddropprops %}).
 */
var DragAndDrop = function (props) {
    var _a = useControlledState(null, undefined), drag = _a[0], setDrag = _a[1];
    var _b = useControlledState(null, undefined), drop = _b[0], setDrop = _b[1];
    var _c = useCollection([]), drags = _c[0], dispatchDrags = _c[1];
    var _d = useCollection([]), drops = _d[0], dispatchDrops = _d[1];
    var registerDrag = function (item) {
        dispatchDrags({
            type: COLLECTION_ACTION.add,
            item: item
        });
    };
    var deregisterDrag = function (item) {
        dispatchDrags({
            type: COLLECTION_ACTION.remove,
            item: item
        });
    };
    var registerDrop = function (item) {
        dispatchDrops({
            type: COLLECTION_ACTION.add,
            item: item
        });
    };
    var deregisterDrop = function (item) {
        dispatchDrops({
            type: COLLECTION_ACTION.remove,
            item: item
        });
    };
    return (index_js_.createElement(DragContext.Provider, { value: [drag, setDrag] },
        index_js_.createElement(DropContext.Provider, { value: [drop, setDrop] },
            index_js_.createElement(DragsContext.Provider, { value: [drags, registerDrag, deregisterDrag] },
                index_js_.createElement(DropsContext.Provider, { value: [drops, registerDrop, deregisterDrop] }, props.children)))));
};
DragAndDrop.displayName = 'KendoReactDragAndDrop';

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/main.js + 4 modules
var main = __webpack_require__(26955);
;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useInheritedState.js

/**
 * @hidden
 */
var useInheritedState = function (context, defaultValue) {
    var _a = index_js_.useContext(context), contextValue = _a[0], contextSetter = _a[1];
    var _b = index_js_.useState(defaultValue), localValue = _b[0], localSetter = _b[1];
    var value = contextValue !== undefined ? contextValue : localValue;
    var handleValueChange = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        contextValue !== undefined
            ? contextSetter.apply(void 0, args) : localSetter(args[0]);
    };
    return [
        value,
        handleValueChange
    ];
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useDraggable.js





var IGNORE_MOUSE_TIMEOUT = 2000;
/**
 * Represents the KendoReact `useDraggable` hook.
 * Use it to attach `drag` events to a native HTML DOM elements, or custom React Components.
 *
 * For more information, refer to the [KendoReact Draggable]({% slug draggable_drag-and-drop %}) article.
 *
 * @param ref - The `ref` of the HTML Element or React Component which will enable the `draggable` functionality.
 * @param callbacks - A collection of callbacks, called by the `useDraggable` hook when a specific action occurs.
 * @param options - Additional configuration of the `useDraggable` hook.
 */
function useDraggable(ref, callbacks, options) {
    if (options === void 0) { options = {}; }
    var _a = callbacks.onPress, onPress = _a === void 0 ? noop : _a, _b = callbacks.onRelease, onRelease = _b === void 0 ? noop : _b, _c = callbacks.onDragStart, onDragStart = _c === void 0 ? noop : _c, _d = callbacks.onDrag, onDrag = _d === void 0 ? noop : _d, _e = callbacks.onDragEnd, onDragEnd = _e === void 0 ? noop : _e;
    var _f = options.hint, hint = _f === void 0 ? null : _f, _g = options.mouseOnly, mouseOnly = _g === void 0 ? false : _g, _h = options.autoScroll, autoScroll = _h === void 0 ? true : _h, _j = options.scrollContainer, scrollContainer = _j === void 0 ? null : _j;
    var _k = index_js_.useState(false), pressed = _k[0], setPressed = _k[1];
    var _l = index_js_.useState(false), scrolling = _l[0], setScrolling = _l[1];
    var drop = useInheritedState(DropContext)[0];
    var _m = useInheritedState(DragContext), drag = _m[0], setDrag = _m[1];
    var drops = index_js_.useContext(DropsContext)[0];
    var _o = index_js_.useContext(DragsContext), drags = _o[0], registerDrag = _o[1], deregisterDrag = _o[2];
    var velocity = index_js_.useRef({ x: 0, y: 0 });
    var scrollInterval = index_js_.useRef();
    var ignoreMouse = index_js_.useRef(false);
    var restoreMouseTimeout = index_js_.useRef();
    var scrollable = index_js_.useRef(null);
    var unmount = index_js_.useRef(false);
    var offset = index_js_.useRef({ x: 0, y: 0 });
    var pageOffset = index_js_.useRef({ x: 0, y: 0 });
    var clientOffset = index_js_.useRef({ x: 0, y: 0 });
    var initialClientOffset = index_js_.useRef({ x: 0, y: 0 });
    var scrollOffset = index_js_.useRef({ x: 0, y: 0 });
    var initialScrollOffset = index_js_.useRef({ x: 0, y: 0 });
    var supportPointerEvent = Boolean((typeof window !== 'undefined') && window.PointerEvent);
    var pointers = !mouseOnly && supportPointerEvent;
    var getElement = index_js_.useCallback(function () { return ref.current && ref.current.element
        ? ref.current.element
        : ref.current; }, [ref]);
    var getHintElement = index_js_.useCallback(function () { return hint && hint.current && hint.current.element
        ? hint.current.element
        : hint
            ? hint.current
            : null; }, [hint]);
    var getScrollContainer = index_js_.useCallback(function () { return scrollContainer && scrollContainer.current && scrollContainer.current.element
        ? scrollContainer.current.element
        : scrollContainer
            ? scrollContainer.current
            : null; }, [scrollContainer]);
    var getAutoScrollContainer = index_js_.useCallback(function () { return typeof autoScroll === 'object' && autoScroll.boundaryElementRef
        && autoScroll.boundaryElementRef.current && autoScroll.boundaryElementRef.current.element
        ? autoScroll.boundaryElementRef.current.element
        : typeof autoScroll === 'object' && autoScroll.boundaryElementRef && autoScroll.boundaryElementRef.current
            ? autoScroll.boundaryElementRef.current
            : null; }, [autoScroll]);
    var target = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: getElement(),
        hint: getHintElement(),
        onPress: handlePress,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd,
        onRelease: handleRelease,
        data: ref.current
    }); });
    var getDocument = index_js_.useCallback(function () {
        var element = getElement();
        return element ? element.ownerDocument || document : document;
    }, [getElement]);
    var getWindow = index_js_.useCallback(function () {
        var document = getDocument();
        return document
            ? document.defaultView || window
            : window;
    }, [getDocument]);
    var getState = index_js_.useCallback(function () { return ({
        drag: drag ? drag.current : null,
        drop: drop ? drop.current : null,
        drags: drags.map(function (d) { return d.current; }),
        drops: drops.map(function (d) { return d.current; }),
        pressed: pressed,
        ignoreMouse: ignoreMouse.current,
        scrollOffset: scrollOffset.current,
        offset: offset.current,
        pageOffset: pageOffset.current,
        initialScrollOffset: initialScrollOffset.current,
        clientOffset: clientOffset.current,
        initialClientOffset: initialClientOffset.current,
        velocity: velocity.current,
        autoScroll: Boolean(typeof autoScroll === 'object' ? autoScroll.enabled !== false : autoScroll),
        scrollableParent: getAutoScrollContainer(),
        autoScrollDirection: typeof autoScroll === 'object' ? autoScroll.direction : { horizontal: true, vertical: true },
        isScrolling: scrolling
    }); }, [drag, drop, drags, drops, pressed, autoScroll, getAutoScrollContainer, scrolling]);
    var handlePressedChange = index_js_.useCallback(function (value) {
        setPressed(value);
    }, []);
    var handleScrollingChange = index_js_.useCallback(function (value) {
        setScrolling(value);
    }, []);
    var handleVelocityChange = index_js_.useCallback(function (value) {
        velocity.current = value;
    }, []);
    var handleOffsetChange = index_js_.useCallback(function (value) {
        offset.current = value;
    }, []);
    var handleClientOffsetChange = index_js_.useCallback(function (value) {
        clientOffset.current = value;
    }, []);
    var handlePageOffsetChange = index_js_.useCallback(function (value) {
        pageOffset.current = value;
    }, []);
    var handleInitialClientOffsetChange = index_js_.useCallback(function (value) {
        initialClientOffset.current = value;
    }, []);
    var handleScrollOffsetChange = index_js_.useCallback(function (value) {
        scrollOffset.current = value;
    }, []);
    var handleInitialScrollOffsetChange = index_js_.useCallback(function (value) {
        initialScrollOffset.current = value;
    }, []);
    // Drag Events
    var handlePress = index_js_.useCallback(function (event) {
        onPress(event);
    }, [onPress]);
    var handleRelease = index_js_.useCallback(function (event) {
        onRelease(event);
    }, [onRelease]);
    var handleDragStart = index_js_.useCallback(function (event) {
        setDrag(target, { target: ref.current, event: event });
        onDragStart(event);
    }, [setDrag, ref, onDragStart]);
    var handleDrag = index_js_.useCallback(function (event) {
        onDrag(event);
    }, [onDrag]);
    var handleDragEnd = index_js_.useCallback(function (event) {
        if (unmount.current) {
            return;
        }
        setDrag(null, { target: ref.current, event: event });
        onDragEnd(event);
    }, [onDragEnd, setDrag, ref]);
    var dispatchDragEvent = index_js_.useCallback(function (event) {
        (0,main/* dispatchDragAndDrop */.r2)(getState(), { event: event, payload: target.current }, {
            onVelocityChange: handleVelocityChange,
            onOffsetChange: handleOffsetChange,
            onClientOffsetChange: handleClientOffsetChange,
            onPageOffsetChange: handlePageOffsetChange,
            onInitialClientOffsetChange: handleInitialClientOffsetChange,
            onScrollOffsetChange: handleScrollOffsetChange,
            onInitialScrollOffsetChange: handleInitialScrollOffsetChange,
            onIsPressedChange: handlePressedChange,
            onIsScrollingChange: handleScrollingChange
        });
    }, [
        getState,
        handleVelocityChange,
        handleOffsetChange,
        handlePageOffsetChange,
        handleClientOffsetChange,
        handleInitialClientOffsetChange,
        handleInitialScrollOffsetChange,
        handlePressedChange,
        handleScrollOffsetChange,
        handleScrollingChange
    ]);
    // Pointer Events
    var handlePointerDown = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handlePointerMove = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handlePointerCancel = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handlePointerUp = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    // Mouse Events
    var handleMouseDown = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handleMouseMove = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handleMouseUp = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handleContextMenu = index_js_.useCallback(function (event) {
        event.preventDefault();
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    // Touch Events
    var handleTouchStart = index_js_.useCallback(function (event) {
        event.preventDefault();
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handleTouchMove = index_js_.useCallback(function (event) {
        event.preventDefault();
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    var handleTouchEnd = index_js_.useCallback(function (event) {
        if (event.touches.length === 0 && event.changedTouches.length === 1) {
            var currentWindow = getWindow();
            ignoreMouse.current = true;
            restoreMouseTimeout.current = currentWindow.setTimeout(function () { ignoreMouse.current = false; }, IGNORE_MOUSE_TIMEOUT);
        }
        dispatchDragEvent(event);
    }, [dispatchDragEvent, getWindow]);
    var handleScroll = index_js_.useCallback(function (event) {
        dispatchDragEvent(event);
    }, [dispatchDragEvent]);
    // Misc
    var prerequisites = index_js_.useCallback(function () {
        var element = getElement();
        if (element) {
            var initialTouchAction_1 = element.style.touchAction;
            element.style.touchAction = 'none';
            return function () {
                element.style.touchAction = initialTouchAction_1;
            };
        }
    }, [getElement]);
    var register = index_js_.useCallback(function () {
        registerDrag(target);
        return function () {
            deregisterDrag(target);
        };
    }, [deregisterDrag, registerDrag]);
    var init = function () {
        var window = getWindow();
        var element = getElement();
        var document = getDocument();
        if (pointers) {
            if (element) {
                scrollable.current = (0,main/* getScrollableParent */.Ue)(element);
                if (scrollable.current) {
                    scrollable.current.addEventListener('scroll', handleScroll, { passive: true });
                }
                element.addEventListener('pointerdown', handlePointerDown, { passive: true });
            }
            if (pressed) {
                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp, true);
                document.addEventListener('contextmenu', handleContextMenu);
                document.addEventListener('pointercancel', handlePointerCancel, { passive: true });
            }
        }
        else {
            // Hacky-hacky iOS Safari
            window.addEventListener('touchmove', noop, { capture: false, passive: false });
            if (element) {
                element.addEventListener('mousedown', handleMouseDown, { passive: true });
                if (!mouseOnly) {
                    element.addEventListener('touchstart', handleTouchStart, { passive: true });
                    if (pressed) {
                        element.addEventListener('touchmove', handleTouchMove, { passive: true });
                        element.addEventListener('touchend', handleTouchEnd, { passive: true });
                    }
                }
            }
            if (pressed) {
                document.addEventListener('mousemove', handleMouseMove, { passive: true });
                document.addEventListener('mouseup', handleMouseUp, { passive: true });
            }
        }
        return function () {
            if (scrollable.current) {
                scrollable.current.removeEventListener('scroll', handleScroll);
            }
            if (element) {
                element.removeEventListener('pointerdown', handlePointerDown);
                element.removeEventListener('mousedown', handleMouseDown);
                element.removeEventListener('touchstart', handleTouchStart);
                element.removeEventListener('touchmove', handleTouchMove);
                element.removeEventListener('touchend', handleTouchEnd);
            }
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp, true);
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('pointercancel', handlePointerCancel);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', noop);
            window.clearTimeout(restoreMouseTimeout.current);
        };
    };
    index_js_.useEffect(function () {
        var window = getWindow();
        if (scrolling) {
            var scrollableParent_1 = getScrollContainer()
                || (0,main/* getScrollableParent */.Ue)(document.elementFromPoint(clientOffset.current.x, clientOffset.current.y));
            window.clearInterval(scrollInterval.current);
            scrollInterval.current = window.setInterval(function () {
                (0,main/* autoScroll */.jY)(scrollableParent_1, { x: velocity.current.x, y: velocity.current.y });
            }, 50);
        }
        return function () {
            window.clearInterval(scrollInterval.current);
        };
    }, [getElement, getScrollContainer, getWindow, scrolling]);
    index_js_.useEffect(prerequisites, [prerequisites]);
    index_js_.useEffect(init, [
        pressed,
        getWindow,
        getElement,
        getDocument,
        mouseOnly,
        pointers,
        handleContextMenu,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handlePointerCancel,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart,
        handleScroll
    ]);
    index_js_.useEffect(function () {
        unmount.current = false;
        return function () {
            unmount.current = true;
        };
    }, []);
    index_js_.useLayoutEffect(register, [register]);
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/Draggable.js


/**
 * Represents the KendoReact Draggable component.
 *
 * Accepts properties of type [DraggableProps]({% slug api_common_draggableprops %}),
 * and returns an object of type [DraggableHandle]({% slug api_common_draggablehandle %}) when the `ref` is obtained.
 */
var Draggable = index_js_.forwardRef(function (props, ref) {
    var childRef = index_js_.useRef(null);
    var target = index_js_.useRef(null);
    var getElement = index_js_.useCallback(function () { return childRef.current && childRef.current.element
        ? childRef.current.element
        : childRef.current; }, [childRef]);
    index_js_.useImperativeHandle(target, function () { return ({ element: getElement() || null }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    index_js_.useImperativeHandle(props.childRef, function () { return childRef.current; });
    var handlePress = index_js_.useCallback(function (event) {
        if (!props.onPress) {
            return;
        }
        props.onPress({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [getElement, props.onPress]);
    var handleRelease = index_js_.useCallback(function (event) {
        if (!props.onRelease) {
            return;
        }
        props.onRelease({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [getElement, props.onRelease]);
    var handleDragStart = index_js_.useCallback(function (event) {
        if (!props.onDragStart) {
            return;
        }
        props.onDragStart({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [props, getElement]);
    var handleDrag = index_js_.useCallback(function (event) {
        if (!props.onDrag) {
            return;
        }
        props.onDrag({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [getElement, props.onDrag]);
    var handleDragEnd = index_js_.useCallback(function (event) {
        if (!props.onDragEnd) {
            return;
        }
        props.onDragEnd({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [getElement, props.onDragEnd]);
    useDraggable(childRef, {
        onPress: handlePress,
        onRelease: handleRelease,
        onDragStart: handleDragStart,
        onDrag: handleDrag,
        onDragEnd: handleDragEnd
    }, {
        mouseOnly: props.mouseOnly,
        autoScroll: props.autoScroll,
        hint: props.hint,
        scrollContainer: props.scrollContainer
    });
    return props.children
        ? (index_js_.cloneElement(index_js_.Children.only(props.children), { ref: childRef }))
        : null;
});
Draggable.displayName = 'KendoReactDraggable';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/hooks/useDroppable.js




/**
 * Represents the KendoReact `useDroppable` hook.
 * Use it to attach `drop` events to a native HTML DOM elements, or custom React Components.
 *
 * For more information, refer to the [KendoReact Droppable]({% slug droppable_drag-and-drop %}) article.
 *
 * @param ref - The `ref` of the HTML Element or React Component which will enable the `droppable` functionality.
 * @param callbacks - A collection of callbacks, called by the `useDroppable` hook when a specific action occurs.
 */
function useDroppable(ref, callbacks) {
    if (callbacks === void 0) { callbacks = {
        onDragEnter: noop,
        onDragOver: noop,
        onDragLeave: noop,
        onDrop: noop
    }; }
    var _a = callbacks.onDragEnter, onDragEnter = _a === void 0 ? noop : _a, _b = callbacks.onDragOver, onDragOver = _b === void 0 ? noop : _b, _c = callbacks.onDragLeave, onDragLeave = _c === void 0 ? noop : _c, _d = callbacks.onDrop, onDrop = _d === void 0 ? noop : _d;
    var _e = useInheritedState(DropContext), setDrop = _e[1];
    var _f = index_js_.useContext(DropsContext), registerDrop = _f[1], deregisterDrop = _f[2];
    var getElement = index_js_.useCallback(function () { return ref.current && ref.current.element
        ? ref.current.element
        : ref.current; }, [ref]);
    var target = index_js_.useRef(null);
    index_js_.useImperativeHandle(target, function () { return ({
        element: getElement(),
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        data: ref.current
    }); });
    var handleDragEnter = index_js_.useCallback(function (event) {
        setDrop(target, { target: ref.current, event: event });
        onDragEnter(event);
    }, [setDrop, ref, onDragEnter]);
    var handleDragOver = index_js_.useCallback(function (event) {
        onDragOver(event);
    }, [onDragOver]);
    var handleDragLeave = index_js_.useCallback(function (event) {
        setDrop(null, { target: ref.current, event: event });
        onDragLeave(event);
    }, [setDrop, ref, onDragLeave]);
    var handleDrop = index_js_.useCallback(function (event) {
        setDrop(null, { target: ref.current, event: event });
        onDrop(event);
    }, [setDrop, ref, onDrop]);
    var register = index_js_.useCallback(function () {
        registerDrop(target);
        return function () {
            deregisterDrop(target);
        };
    }, [deregisterDrop, registerDrop]);
    index_js_.useLayoutEffect(register, [register]);
}
;

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/Droppable.js


/**
 * Represents the KendoReact Droppable component.
 *
 * Accepts properties of type [DroppableProps]({% slug api_common_droppableprops %}),
 * and returns an object of type [DroppableHandle]({% slug api_common_droppablehandle %}) when the `ref` is obtained.
 */
var Droppable = index_js_.forwardRef(function (props, ref) {
    var childRef = index_js_.useRef(null);
    var target = index_js_.useRef(null);
    var getElement = index_js_.useCallback(function () { return childRef.current && childRef.current.element
        ? childRef.current.element
        : childRef.current; }, [childRef]);
    index_js_.useImperativeHandle(target, function () { return ({ element: getElement() || undefined }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    index_js_.useImperativeHandle(props.childRef, function () { return childRef.current; });
    var handleDragEnter = index_js_.useCallback(function (event) {
        if (!props.onDragEnter) {
            return;
        }
        props.onDragEnter({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [props.onDragEnter, getElement]);
    var handleDragOver = index_js_.useCallback(function (event) {
        if (!props.onDragOver) {
            return;
        }
        props.onDragOver({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [getElement, props.onDragOver]);
    var handleDragLeave = index_js_.useCallback(function (event) {
        if (!props.onDragLeave) {
            return;
        }
        props.onDragLeave({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [props.onDragLeave, getElement]);
    var handleDrop = index_js_.useCallback(function (event) {
        if (!props.onDrop) {
            return;
        }
        props.onDrop({
            element: getElement(),
            target: target.current,
            event: event
        });
    }, [props.onDrop, getElement]);
    useDroppable(childRef, {
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    });
    return props.children
        ? (index_js_.cloneElement(index_js_.Children.only(props.children), { ref: childRef }))
        : null;
});
Droppable.displayName = 'KendoReactDroppable';

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/theme.js
/** @hidden */
var kendoThemeMaps = {
    sizeMap: {
        small: 'sm',
        medium: 'md',
        large: 'lg'
    },
    roundedMap: {
        small: 'sm',
        medium: 'md',
        large: 'lg'
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/memoize.js
function isEqual(first, second) {
    return (first === second) || (Number.isNaN(first) && Number.isNaN(second));
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
/**
 * @hidden
 */
function memoizeOne(resultFn, isEqualFn) {
    if (isEqualFn === void 0) { isEqualFn = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqualFn(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/navigation.js
/**
 * @hidden
 */
var FOCUSABLE_ELEMENTS = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]'
];
/**
 * Represents the [KendoReact Navigation functionality]({% slug overview_navigation %}).
 * It handles the navigation through a collection of DOM elements.
 */
var Navigation = /** @class */ (function () {
    function Navigation(options) {
        var _this = this;
        /**
         * @hidden
         */
        this.rovingTabIndex = true;
        /**
         * @hidden
         */
        this.update = function () { };
        this.focusNextIndex = function (target, indexDiff) {
            var all = _this.elements;
            var index = all.indexOf(target) + indexDiff;
            index = index < 0 ? all.length - 1 : index;
            var next = all[index % all.length];
            _this.focusElement(next, target);
            return next;
        };
        this.tabIndex = options.tabIndex || 0;
        this.root = options.root;
        this.selectors = options.selectors;
        this.rovingTabIndex = options.rovingTabIndex !== undefined ? options.rovingTabIndex : true;
        this.mouseEvents = options.mouseEvents || {};
        this.keyboardEvents = options.keyboardEvents || {};
    }
    Object.defineProperty(Navigation.prototype, "elements", {
        /**
         * Returns the collection of DOM elements which the module will navigate in.
         */
        get: function () {
            return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(','))) : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "first", {
        /**
         * Returns the first navigation DOM element.
         */
        get: function () {
            return (this.root.current && this.root.current.querySelector(this.selectors.join(','))) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "last", {
        /**
         * Returns the last navigation DOM element.
         */
        get: function () {
            var all = this.elements;
            return all[all.length - 1] || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "current", {
        /**
         * Returns the focused DOM element from the navigation collection of DOM elements.
         */
        get: function () {
            return this.elements.find(function (el) { return el.matches(':focus'); }) || null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Focuses the next element from the navigation collection of DOM elements.
     */
    Navigation.prototype.focusNext = function (target) {
        return this.focusNextIndex(target, 1);
    };
    /**
     * Focuses the previous element from the navigation collection of DOM elements.
     */
    Navigation.prototype.focusPrevious = function (target) {
        return this.focusNextIndex(target, -1);
    };
    /**
     * The keyboard events handler.
     */
    Navigation.prototype.triggerKeyboardEvent = function (ev) {
        var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(','));
        var key = ev.key === ' ' ? 'Space' : ev.key;
        var eventType = ev.nativeEvent.type;
        if (target && this.keyboardEvents[eventType][key]) {
            this.keyboardEvents[eventType][key].call(undefined, target, this, ev);
        }
    };
    /**
     * The mouse events handler.
     */
    Navigation.prototype.triggerMouseEvent = function (ev) {
        var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(','));
        var eventType = ev.nativeEvent.type;
        if (target) {
            this.mouseEvents[eventType].call(undefined, target, this, ev);
        }
    };
    /**
     * Focuses the passed element from the navigation collection of DOM elements.
     */
    Navigation.prototype.focusElement = function (element, previous) {
        if (element) {
            if (previous) {
                if (this.rovingTabIndex) {
                    previous.removeAttribute('tabindex');
                }
                previous.classList.remove('k-focus');
            }
            if (this.rovingTabIndex) {
                element.setAttribute('tabindex', String(this.tabIndex));
            }
            element.focus({ preventScroll: true });
        }
    };
    return Navigation;
}());

;

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/getActiveElement.js
/**
 * @hidden
 */
var getInnerActiveElement = function (element) {
    var shadowRoot = element.shadowRoot;
    var contentDocument = element.contentDocument;
    if (shadowRoot && shadowRoot.activeElement) {
        return getInnerActiveElement(shadowRoot.activeElement);
    }
    if (contentDocument && contentDocument.activeElement) {
        return getInnerActiveElement(contentDocument.activeElement);
    }
    return element;
};
/**
 * @hidden
 */
var getActiveElement = function (document) {
    if (!document || !document.activeElement) {
        return undefined;
    }
    return getInnerActiveElement(document.activeElement);
};

;// ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js























































/***/ }

}]);