"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7059],{

/***/ 26955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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





/***/ }),

/***/ 57059:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AsyncFocusBlur: () => (/* reexport */ AsyncFocusBlur_a),
  BrowserSupportService: () => (/* reexport */ l),
  COLLECTION_ACTION: () => (/* reexport */ useCollection_s),
  DragAndDrop: () => (/* reexport */ drag_n_drop_P),
  Draggable: () => (/* reexport */ Draggable_m),
  Droppable: () => (/* reexport */ Droppable_m),
  FIELD_REGEX: () => (/* reexport */ d),
  FOCUSABLE_ELEMENTS: () => (/* reexport */ main_s),
  FOCUSABLE_ELEMENTS_BASE: () => (/* reexport */ main_n),
  FormComponent: () => (/* reexport */ FormComponent_o),
  Icon: () => (/* reexport */ Icon_u),
  IconWrap: () => (/* reexport */ IconWrap_v),
  IconsContext: () => (/* reexport */ IconsContext_e),
  Keys: () => (/* reexport */ e),
  Navigation: () => (/* reexport */ navigation_o),
  SortedPublicItemIds: () => (/* reexport */ SortedPublicItemIds_r),
  SvgIcon: () => (/* reexport */ SvgIcon_g),
  TABBABLE_ELEMENTS: () => (/* reexport */ main_i),
  TreeFieldsService: () => (/* reexport */ FieldsService_h),
  Typography: () => (/* reexport */ K),
  WatermarkOverlay: () => (/* reexport */ v),
  ZIndexContext: () => (/* reexport */ t),
  addItem: () => (/* reexport */ itemUtils_E),
  applyTrappedFocus: () => (/* reexport */ trappedFocus_d),
  areAllDirectChildrenChecked: () => (/* reexport */ itemUtils_w),
  canUseDOM: () => (/* reexport */ canUseDOM_e),
  canUseRef: () => (/* reexport */ s),
  classNames: () => (/* reexport */ o),
  clone: () => (/* reexport */ clone_l),
  cloneArray: () => (/* reexport */ clone_f),
  cloneDate: () => (/* reexport */ clone_s),
  cloneObject: () => (/* reexport */ clone_o),
  cloneValue: () => (/* reexport */ clone_c),
  createPropsContext: () => (/* reexport */ withPropsContext_a),
  disableNavigatableContainer: () => (/* reexport */ y),
  dispatchEvent: () => (/* reexport */ dispatchEvent_c),
  enableNavigatableContainer: () => (/* reexport */ trappedFocus_g),
  extendDataItem: () => (/* reexport */ w),
  firstFocusableChild: () => (/* reexport */ trappedFocus_l),
  focusFirstFocusableChild: () => (/* reexport */ trappedFocus_e),
  focusLastFocusableChild: () => (/* reexport */ trappedFocus_b),
  focusableChildren: () => (/* reexport */ trappedFocus_c),
  getActiveElement: () => (/* reexport */ getActiveElement_o),
  getAllDirectIndirectChildrenIds: () => (/* reexport */ j),
  getAllParents: () => (/* reexport */ itemUtils_y),
  getInnerActiveElement: () => (/* reexport */ getActiveElement_c),
  getItemPath: () => (/* reexport */ treeDataOperations_x),
  getNestedValue: () => (/* reexport */ misc_o),
  getScrollbarWidth: () => (/* reexport */ scrollbarWidth_c),
  getTabIndex: () => (/* reexport */ getTabIndex_o),
  getter: () => (/* reexport */ getter_s),
  guid: () => (/* reexport */ guid_i),
  hasChildren: () => (/* reexport */ itemUtils_P),
  hasRelativeStackingContext: () => (/* reexport */ hasRelativeStackingContext_s),
  isArray: () => (/* reexport */ misc_a),
  isEnabledAndAllParentsEnabled: () => (/* reexport */ itemUtils_W),
  isItemExpandedAndWithChildren: () => (/* reexport */ itemUtils_O),
  keepFocusInContainer: () => (/* reexport */ trappedFocus_n),
  kendoThemeMaps: () => (/* reexport */ theme_e),
  lastFocusableChild: () => (/* reexport */ trappedFocus_a),
  mapTree: () => (/* reexport */ treeDataOperations_i),
  mapTreeItem: () => (/* reexport */ u),
  memoizeOne: () => (/* reexport */ memoize_s),
  noop: () => (/* reexport */ noop_n),
  removeItem: () => (/* reexport */ itemUtils_v),
  resolveItemId: () => (/* reexport */ R),
  resolveItemsIds: () => (/* reexport */ A),
  setScrollbarWidth: () => (/* reexport */ scrollbarWidth_s),
  setter: () => (/* reexport */ setter_d),
  shouldShowValidationUI: () => (/* reexport */ validate_package_n),
  svgIconPropType: () => (/* reexport */ utils_t),
  toIconClass: () => (/* reexport */ utils_n),
  toIconName: () => (/* reexport */ utils_i),
  treeIdUtils: () => (/* reexport */ itemIdUtils_namespaceObject),
  updateItem: () => (/* reexport */ itemUtils_d),
  useAsyncFocusBlur: () => (/* reexport */ useAsyncFocusBlur_o),
  useCollection: () => (/* reexport */ useCollection_l),
  useCustomComponent: () => (/* reexport */ useCustomComponent_s),
  useDir: () => (/* reexport */ useDir_u),
  useDocument: () => (/* reexport */ useDocument_o),
  useDraggable: () => (/* reexport */ _e),
  useDroppable: () => (/* reexport */ useDroppable_y),
  useId: () => (/* reexport */ I),
  useIsomorphicLayoutEffect: () => (/* reexport */ use_isomorphic_layout_effect_t),
  useMouse: () => (/* reexport */ useMouse_h),
  usePropsContext: () => (/* reexport */ usePropsContext_n),
  useRtl: () => (/* reexport */ useRtl_u),
  useWindow: () => (/* reexport */ useWindow_r),
  useZIndexContext: () => (/* reexport */ n),
  validatePackage: () => (/* reexport */ validate_package_l),
  withIdHOC: () => (/* reexport */ m),
  withPropsContext: () => (/* reexport */ withPropsContext_x)
});

// NAMESPACE OBJECT: ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/itemIdUtils.mjs
var itemIdUtils_namespaceObject = {};
__webpack_require__.r(itemIdUtils_namespaceObject);
__webpack_require__.d(itemIdUtils_namespaceObject, {
  EMPTY_ID: () => (c),
  SEPARATOR: () => (r),
  ZERO_LEVEL_ZERO_NODE_ID: () => (b),
  createId: () => (O),
  getAllShortIds: () => (P),
  getDecrementedItemIdAfterRemoval: () => (N),
  getDirectParentId: () => (h),
  getFirstChildId: () => (E),
  getIdWithoutRootParentId: () => (i),
  getItemById: () => (S),
  getRootParentId: () => (f),
  getShortId: () => (g),
  isIdEmptyOrZeroLevel: () => (a),
  isIdZeroLevel: () => (x),
  isItemFirstFromSiblings: () => (p)
});

;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/itemIdUtils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const c = "", b = "0", r = "_";
function S(t, n, o) {
  if (x(t))
    return n[Number(t)];
  {
    const e = n[Number(f(t))], s = e && e[o] || [];
    return s.length ? S(i(t), s, o) : void 0;
  }
}
function f(t) {
  return a(t) ? t : t.split(r)[0];
}
function i(t) {
  if (a(t))
    return t;
  {
    const n = t.indexOf(r);
    return t.substring(n + 1);
  }
}
function E(t) {
  return O("0", t);
}
function O(t, n) {
  return t = t.toString(), n ? n + r + t : t;
}
function h(t) {
  const n = t.lastIndexOf(r);
  return n < 0 ? c : t.substring(0, n);
}
function a(t) {
  return t === c || t.indexOf(r) < 0;
}
function x(t) {
  return t !== c && t.indexOf(r) < 0;
}
function P(t) {
  return t.split(r);
}
function g(t) {
  const n = t.lastIndexOf(r);
  return n < 0 ? t : t.substring(n + 1);
}
function p(t) {
  return g(t) === b;
}
function N(t, n) {
  const o = n;
  t = "r" + r + t, n = "r" + r + n;
  const e = h(t) + r;
  if (n.startsWith(e)) {
    const s = n.substring(e.length);
    if (s) {
      const u = f(s);
      if (Number(g(t)) < Number(u)) {
        const l = e + (Number(u) - 1).toString() + s.substring(u.length);
        return i(l);
      }
    }
  }
  return o;
}


// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/contexts/ZIndexContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const t = index_js_.createContext(0), n = () => index_js_.useContext(t);
t.displayName = "KendoReactZIndexContext";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/browser-support.service.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const browser_support_service_t = () => typeof document != "undefined" ? document : {};
class l {
  constructor() {
    this.scrollbar = 0;
  }
  get scrollbarWidth() {
    const o = browser_support_service_t();
    if (!this.scrollbar && o && o.createElement) {
      const e = o.createElement("div");
      e.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", e.innerHTML = "&nbsp;", o.body.appendChild(e), this.scrollbar = e.offsetWidth - e.scrollWidth, o.body.removeChild(e);
    }
    return this.scrollbar;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/canUseDOM.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const canUseDOM_e = !!// from fbjs
(typeof window != "undefined" && window.document && window.document.createElement);


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/canUseRef.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const canUseRef_t = (e) => {
  var o;
  return !!(typeof e == "function" && ((o = e.prototype) != null && o.isReactComponent));
}, canUseRef_n = (e) => !!(e.$$typeof && typeof e.render == "function"), s = (e) => typeof Comment != "string" && (canUseRef_t(e) || canUseRef_n(e));


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/classNames.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const o = (...l) => {
  const s = {}, n = (e) => typeof e == "object" ? Object.keys(e).forEach((t) => {
    s[t] = e[t];
  }) : s[e] = !0, c = (e) => e.filter((t) => t !== !0 && !!t).map((t) => Array.isArray(t) ? c(t) : n(t));
  return c(l), Object.keys(s).map((e) => s[e] && e || null).filter((e) => e !== null).join(" ");
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/clone.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const clone_s = (e) => e ? new Date(e.getTime()) : null;
function clone_l(e) {
  const n = {};
  return clone_o(e, n), n;
}
function clone_o(e, n) {
  for (let t in e)
    if (e.hasOwnProperty(t)) {
      const i = e[t];
      n[t] = clone_c(i, n[t]);
    }
}
function clone_c(e, n) {
  if (Array.isArray(e))
    return clone_f(e);
  if (e instanceof Date)
    return clone_s(e);
  if (index_js_.isValidElement(e))
    return index_js_.cloneElement(e, e.props);
  if (e && typeof e == "object") {
    const t = n || {};
    return clone_o(e, t), t;
  } else
    return e;
}
function clone_f(e) {
  return e.map((n) => clone_c(n, void 0));
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/keys.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const e = {
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


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/constants/main.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const d = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g, main_t = ":not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-numerictextbox button):not(.k-split-button .k-split-button-arrow)", main_o = ":not(.k-dropdownlist select)", main_n = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled]):not(.k-dropdownlist select)",
  "textarea:not([disabled])",
  `button:not([disabled])${main_t}`,
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], main_s = [...main_n, `[tabindex]${main_t}${main_o}`], main_i = [...main_n, `[tabindex]${main_t}${main_o}`].map((e) => e + ':not([tabindex="-1"])');


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/trappedFocus.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const trappedFocus_c = (s, f = main_s) => s.querySelectorAll(f.join(",")), trappedFocus_l = (s, f = main_s) => {
  if (s) {
    const t = trappedFocus_c(s, f);
    if (t.length && t[0].focus)
      return t[0];
  }
}, trappedFocus_a = (s, f = main_s) => {
  if (s) {
    const t = trappedFocus_c(s, f);
    if (t.length && t[t.length - 1].focus)
      return t[t.length - 1];
  }
}, trappedFocus_e = (s, f) => {
  if (s) {
    const t = trappedFocus_l(s, f);
    t && t.focus();
  }
}, trappedFocus_b = (s, f) => {
  if (s) {
    const t = trappedFocus_a(s, f);
    t && t.focus();
  }
}, trappedFocus_n = (s, f, t) => {
  if (!(!f || s.keyCode !== e.tab) && f) {
    const o = trappedFocus_l(f, t), i = trappedFocus_a(f, t);
    o && i && !s.shiftKey && s.target === i && (s.preventDefault(), o.focus()), o && i && s.shiftKey && s.target === o && (s.preventDefault(), i.focus()), o || s.preventDefault();
  }
}, trappedFocus_d = (s, f, t, o) => {
  let i = !0;
  if (s.keyCode !== e.enter && s.target === f) {
    t && t(!1);
    return;
  }
  s.keyCode === e.enter && s.target === f ? (i = !0, setTimeout(() => {
    trappedFocus_e(f, o);
  }, 1)) : s.keyCode === e.esc ? (i = !1, f.focus()) : trappedFocus_n(s, f, o), t && t(i);
}, trappedFocus_g = (s, f) => {
  const t = trappedFocus_c(
    s,
    f
  );
  t && t.forEach((o) => {
    o.tabIndex = 0;
  });
}, y = (s, f) => {
  const t = trappedFocus_c(
    s,
    f
  );
  t && t.forEach((o) => {
    o.tabIndex = -1;
  });
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/FormComponent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class FormComponent_o {
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/getTabIndex.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const getTabIndex_o = (e, D, n) => {
  const t = typeof e == "string" ? parseInt(e) : e;
  if (!Number.isNaN(t))
    return t !== void 0 ? t : D ? n ? void 0 : -1 : 0;
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/fieldList.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

function fieldList_s(i) {
  const t = [];
  return i.replace(d, function(r, e, o, c) {
    t.push(e !== void 0 ? e : o || c);
  }), t;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/getter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const getter_e = {};
getter_e.undefined = () => {
};
function getter_s(t) {
  if (getter_e[t])
    return getter_e[t];
  const o = fieldList_s(t);
  return getter_e[t] = function(u) {
    let n = u;
    for (let r = 0; r < o.length && n; r++)
      n = n[o[r]];
    return n;
  }, getter_e[t];
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/guid.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const guid_i = () => {
  let e = "", t, r;
  for (t = 0; t < 32; t++)
    r = Math.random() * 16 | 0, (t === 8 || t === 12 || t === 16 || t === 20) && (e += "-"), e += (t === 12 ? 4 : t === 16 ? r & 3 | 8 : r).toString(16);
  return e;
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/noop.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const noop_n = function() {
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/scrollbarWidth.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const scrollbarWidth_c = () => !canUseDOM_e || !document.body ? !1 : new l().scrollbarWidth, scrollbarWidth_s = () => {
  if (!canUseDOM_e || !document.body)
    return !1;
  let r = new l().scrollbarWidth;
  document.body.style.setProperty("--kendo-scrollbar-width", `${r}px`);
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/setter.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const setter_s = {};
setter_s.undefined = (t) => t;
const setter_f = (t, e) => e && e.arrays && !isNaN(Number(t)) ? [] : {};
function setter_d(t) {
  if (setter_s[t])
    return setter_s[t];
  const e = fieldList_s(t);
  return setter_s[t] = (u, c, a) => {
    let r = u;
    const o = e.length - 1;
    for (let n = 0; n < o && r; n++)
      r = r[e[n]] = r[e[n]] || setter_f(e[n + 1], a);
    r[e[o]] = c;
  }, setter_s[t];
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/treeDataOperations.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
function treeDataOperations_f(t, n, r) {
  return r ? { ...t, [n]: r.length ? [...r] : void 0 } : t && t[n] ? [...t[n]] : [];
}
function treeDataOperations_s(t, n, r) {
  if (t[n]) {
    let o = treeDataOperations_f(t, n).map((e) => treeDataOperations_s(e, n, r));
    return r(treeDataOperations_f(t, n, o));
  }
  return r(t);
}
const treeDataOperations_i = (t, n, r) => [...t.map((o) => treeDataOperations_s(o, n, r))], u = (t, n, r, o) => {
  let e = t;
  const h = [];
  for (let c = 0; c < n.length; c++)
    e = e[n[c]], e = Array.isArray(e) ? e : e[r], h.push(e);
  const p = h.length > 1 ? h[h.length - 2] : t, g = n[n.length - 1], a = o(p[g]);
  p.splice(g, 1, a);
}, w = (t, n, r) => Object.assign(
  {},
  t,
  t[n] ? { [n]: t[n].slice() } : {},
  r || {}
), treeDataOperations_x = (t, n, r) => {
  const o = [], e = [...n];
  if (e.length) {
    let h = t[e.shift() || 0];
    for (o.push(h); e.length && r; )
      h = h[r][e.shift() || 0], o.push(h);
  }
  return o;
};


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-licensing@^1.3.4 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-licensing@1.6.0/node_modules/@progress/kendo-licensing/dist/index.mjs)
var index_mjs_ = __webpack_require__(73082);
;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/validate-package.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const validate_package_i = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"], validate_package_l = index_mjs_.validatePackage;
function validate_package_n(t) {
  return !validate_package_i.some((e) => {
    var a;
    return (a = globalThis.document) == null ? void 0 : a.location.hostname.endsWith(e);
  }) && !(0,index_mjs_.validatePackage)(t);
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hasRelativeStackingContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const hasRelativeStackingContext_s = (o) => {
  if (!canUseDOM_e)
    return !1;
  const e = o ? o.ownerDocument : document;
  if (!e || !e.body)
    return !1;
  const i = 10, n = e.createElement("div");
  n.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const t = e.createElement("div");
  t.appendChild(e.createTextNode("child")), t.style.position = "fixed", t.style.top = i + "px", n.appendChild(t), e.body.appendChild(n);
  const r = t.getBoundingClientRect().top !== i;
  return e.body.removeChild(n), r;
};


// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/watermark/WatermarkOverlay.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const WatermarkOverlay_f = "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-banner";
let WatermarkOverlay_n = !1;
const v = () => {
  const [t, o] = index_js_.useState(!0), [A, r] = index_js_.useState(!1);
  index_js_.useEffect(() => {
    WatermarkOverlay_n || (r(!0), WatermarkOverlay_n = !0);
  }, []);
  const i = () => {
    o(!1);
  }, g = /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, t && /* @__PURE__ */ index_js_.createElement("div", { style: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "16px",
    right: "16px",
    padding: "12px",
    borderRadius: "4px",
    boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    backgroundColor: "#FFC000",
    color: "#1E1E1E",
    zIndex: 999
  } }, /* @__PURE__ */ index_js_.createElement("span", { style: { display: "flex", alignSelf: "center", marginRight: "8px" } }, /* @__PURE__ */ index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ index_js_.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z", fill: "#1E1E1E" }))), /* @__PURE__ */ index_js_.createElement("span", null, "No valid license found for KendoReact. Learn how to activate your license."), /* @__PURE__ */ index_js_.createElement("div", { style: { display: "flex", alignItems: "center", marginLeft: "24px" } }, /* @__PURE__ */ index_js_.createElement("a", { href: WatermarkOverlay_f, style: { marginRight: "8px", display: "flex" } }, /* @__PURE__ */ index_js_.createElement(
    "button",
    {
      title: "Learn More",
      style: {
        display: "inline-flex",
        position: "relative",
        border: "none",
        borderRadius: "4px",
        padding: "5px",
        backgroundColor: "transparent",
        transition: "color 0.2s ease-in-out",
        outline: "none",
        cursor: "pointer"
      }
    },
    /* @__PURE__ */ index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ index_js_.createElement("path", { d: "M15 8C15 11.8656 11.8656 15 8 15C4.13437 15 1 11.8656 1 8C1 4.13437 4.13437 1 8 1C11.8656 1 15 4.13437 15 8ZM14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8ZM11 6C11 7.4125 10.2687 8.05937 9.73125 8.53125C9.25937 8.94688 9 9.17813 9 10H7C7 8.275 7.84688 7.525 8.40938 7.03125C8.84062 6.65312 9 6.50938 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6H5C5 4.34375 6.34375 3 8 3C9.65625 3 11 4.34375 11 6ZM9 13V11H7V13H9Z", fill: "#1E1E1E" }))
  )), /* @__PURE__ */ index_js_.createElement(
    "button",
    {
      title: "Close",
      style: {
        display: "inline-flex",
        position: "relative",
        border: "none",
        borderRadius: "4px",
        padding: "5px",
        backgroundColor: "transparent",
        transition: "color 0.2s ease-in-out",
        outline: "none",
        cursor: "pointer"
      },
      onClick: i
    },
    /* @__PURE__ */ index_js_.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, /* @__PURE__ */ index_js_.createElement("path", { d: "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z", fill: "#1E1E1E" }))
  ))));
  return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, /* @__PURE__ */ index_js_.createElement(
    "div",
    {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.12,
        zIndex: 101,
        pointerEvents: "none",
        backgroundImage: "url('data:image/png;base64,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')"
      }
    }
  ), A && react_dom_index_js_.createPortal(g, document.body));
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/events/dispatchEvent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
function dispatchEvent_c(t, n, e, i) {
  if (t) {
    const a = {
      syntheticEvent: n,
      nativeEvent: n.nativeEvent,
      target: e
    };
    t.call(void 0, Object.assign(a, i));
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useAsyncFocusBlur.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

function useAsyncFocusBlur_o({ onFocus: u, onBlur: l, onSyncFocus: i, onSyncBlur: a }) {
  const r = index_js_.useRef(!1), c = index_js_.useRef(0), s = index_js_.useCallback(
    (e) => {
      clearTimeout(c.current), c.current = window.setTimeout(() => e());
    },
    [c]
  ), f = index_js_.useCallback(
    (...e) => {
      clearTimeout(c.current), i && i.call(void 0, e[0]), !r.current && (r.current = !0, u && u.call(void 0, ...e));
    },
    [r, u, i]
  ), n = index_js_.useCallback(
    (...e) => {
      a && a.call(void 0, e[0]), s(() => {
        r.current && l && (r.current = !1, l.call(void 0, ...e));
      });
    },
    [r, s, l, a]
  );
  return index_js_.useEffect(() => () => {
    clearTimeout(c.current);
  }, []), {
    onFocus: f,
    onBlur: n
  };
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hocs/AsyncFocusBlur.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const AsyncFocusBlur_a = ({
  children: e,
  onFocus: t,
  onBlur: c,
  onSyncFocus: o,
  onSyncBlur: s
}) => {
  const n = useAsyncFocusBlur_o({ onFocus: t, onBlur: c, onSyncFocus: o, onSyncBlur: s });
  return /* @__PURE__ */ index_js_.createElement(index_js_.Fragment, null, e.call(void 0, { ...n }));
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/usePropsContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const usePropsContext_n = (t, o) => index_js_.useContext(t)(o);


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hocs/withPropsContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const withPropsContext_a = () => index_js_.createContext((t) => t), withPropsContext_x = (t, o) => index_js_.forwardRef((r, n) => {
  const s = usePropsContext_n(t, r);
  return /* @__PURE__ */ index_js_.createElement(o, { ...s, ref: n });
});


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/use-isomorphic-layout-effect.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const use_isomorphic_layout_effect_t = typeof window != "undefined" ? index_js_.useLayoutEffect : index_js_.useEffect;


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/use-id.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



function I(t) {
  const [u, n] = index_js_.useState(!1);
  index_js_.useEffect(() => {
    n(!0);
  }, []);
  const [r, c] = index_js_.useState(() => {
    if (t)
      return t;
    if (u)
      return guid_i();
  });
  use_isomorphic_layout_effect_t(() => {
    r === void 0 && c(guid_i());
  }, []);
  const s = index_js_.useId;
  if (s !== void 0) {
    const f = s();
    return t != null ? t : f;
  }
  return r;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hocs/use-id-hoc.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const m = (r) => index_js_.forwardRef((e, o) => {
  const i = I(e.id);
  return /* @__PURE__ */ index_js_.createElement(r, { ...e, id: i, ref: o });
});


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useDir.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

function useDir_u(t, n, o) {
  const [e, c] = index_js_.useState(n);
  return index_js_.useEffect(
    () => {
      if (!e && window && t.current) {
        const r = window.getComputedStyle(t.current).direction;
        r && c(r);
      }
    },
    o
  ), e;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useRtl.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

function useRtl_u(t, n, o) {
  const [e, c] = index_js_.useState(n);
  return index_js_.useEffect(
    () => {
      if (!e && window && t.current) {
        const r = window.getComputedStyle(t.current).direction;
        r && c(r);
      }
    },
    o
  ), e;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useMouse.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const useMouse_h = (o, l, u = {}) => {
  const c = index_js_.useCallback(
    (n) => {
      u.onMouseDown && u.onMouseDown.call(void 0, n), o.onMouseDown && o.onMouseDown.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseDown, o.onMouseDown, l]
  ), M = index_js_.useCallback(
    (n) => {
      u.onMouseUp && u.onMouseUp.call(void 0, n), o.onMouseUp && o.onMouseUp.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseUp, o.onMouseUp, l]
  ), i = index_js_.useCallback(
    (n) => {
      u.onClick && u.onClick.call(void 0, n), o.onClick && o.onClick.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onClick, o.onClick, l]
  ), s = index_js_.useCallback(
    (n) => {
      u.onDoubleClick && u.onDoubleClick.call(void 0, n), o.onDoubleClick && o.onDoubleClick.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onDoubleClick, o.onDoubleClick, l]
  ), a = index_js_.useCallback(
    (n) => {
      u.onMouseEnter && u.onMouseEnter.call(void 0, n), o.onMouseEnter && o.onMouseEnter.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseEnter, o.onMouseEnter, l]
  ), v = index_js_.useCallback(
    (n) => {
      u.onMouseLeave && u.onMouseLeave.call(void 0, n), o.onMouseLeave && o.onMouseLeave.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseLeave, o.onMouseLeave, l]
  ), k = index_js_.useCallback(
    (n) => {
      u.onMouseMove && u.onMouseMove.call(void 0, n), o.onMouseMove && o.onMouseMove.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseMove, o.onMouseMove, l]
  ), C = index_js_.useCallback(
    (n) => {
      u.onMouseOut && u.onMouseOut.call(void 0, n), o.onMouseOut && o.onMouseOut.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseOut, o.onMouseOut, l]
  ), f = index_js_.useCallback(
    (n) => {
      u.onMouseOver && u.onMouseOver.call(void 0, n), o.onMouseOver && o.onMouseOver.call(void 0, {
        target: l.current,
        syntheticEvent: n
      });
    },
    [u.onMouseOver, o.onMouseOver, l]
  );
  return {
    onClick: i,
    onMouseUp: M,
    onMouseDown: c,
    onDoubleClick: s,
    onMouseEnter: a,
    onMouseLeave: v,
    onMouseMove: k,
    onMouseOut: C,
    onMouseOver: f
  };
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useCustomComponent.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const useCustomComponent_n = () => null, useCustomComponent_r = ({ children: e }) => e, useCustomComponent_s = (e) => {
  if (e) {
    if (e === index_js_.Fragment)
      return [useCustomComponent_r, {}];
    if (index_js_.isValidElement(e))
      return [e.type, e.props];
  } else
    return [useCustomComponent_n, {}];
  return [e, {}];
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useCollection.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

var useCollection_s = /* @__PURE__ */ ((e) => (e[e.add = 0] = "add", e[e.remove = 1] = "remove", e))(useCollection_s || {});
const useCollection_l = (e = []) => {
  const r = index_js_.useRef(e), n = index_js_.useCallback(
    (t) => {
      switch (t.type) {
        case 0:
          r.current.push(t.item);
          break;
        case 1: {
          const o = r.current.indexOf(t.item);
          r.current.splice(o, 1);
          break;
        }
      }
    },
    []
  );
  return [r.current, n];
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useDocument.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const useDocument_o = (e) => {
  const t = index_js_.useCallback(
    () => e.current && e.current.element ? e.current.element : e.current,
    [e]
  );
  return index_js_.useCallback(() => {
    const n = t();
    return n && n.ownerDocument || document;
  }, [t]);
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useWindow.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const useWindow_r = (o) => {
  const t = useDocument_o(o);
  return index_js_.useCallback(() => {
    const e = t();
    return e && e.defaultView || window;
  }, [t]);
};


// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/constants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const constants_x = {
  default: "",
  xsmall: "k-icon-xs",
  small: "k-icon-sm",
  medium: "k-icon-md",
  large: "k-icon-lg",
  xlarge: "k-icon-xl",
  xxlarge: "k-icon-xxl",
  xxxlarge: "k-icon-xxxl"
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/utils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const utils_i = (o) => o.replace(/^k-i-/, ""), utils_n = (o) => "k-i-" + o, utils_t = prop_types_index_js_.shape({
  name: prop_types_index_js_.string.isRequired,
  content: prop_types_index_js_.string.isRequired,
  viewBox: prop_types_index_js_.string.isRequired
});


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/Icon.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const Icon_u = index_js_.forwardRef((a, d) => {
  const {
    className: n,
    name: s,
    themeColor: t,
    size: i,
    flip: m,
    style: h,
    id: g,
    tabIndex: x,
    ...y
  } = a, l = index_js_.useRef(null), c = index_js_.useRef(null);
  index_js_.useImperativeHandle(l, () => ({
    element: c.current
  })), index_js_.useImperativeHandle(d, () => l.current);
  const f = index_js_.useMemo(
    () => i || Icon_p.size,
    [i]
  ), r = index_js_.useMemo(
    () => m || Icon_p.flip,
    [m]
  ), z = index_js_.useMemo(
    () => o(
      "k-icon",
      "k-font-icon",
      s && utils_n(s),
      {
        [`k-color-${t}`]: t,
        "k-flip-h": r === "horizontal" || r === "both",
        "k-flip-v": r === "vertical" || r === "both"
      },
      constants_x[f],
      n
    ),
    [s, t, f, r, n]
  ), I = useMouse_h(a, l);
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      ref: c,
      ...y,
      ...I,
      className: z,
      id: g,
      tabIndex: x,
      style: h,
      role: "presentation"
    }
  );
});
Icon_u.propTypes = {
  style: prop_types_index_js_.object,
  classNames: prop_types_index_js_.string,
  name: prop_types_index_js_.string,
  themeColor: prop_types_index_js_.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: prop_types_index_js_.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: prop_types_index_js_.oneOf(["default", "horizontal", "vertical", "both"])
};
const Icon_p = {
  size: "default",
  flip: "default"
};
Icon_u.displayName = "KendoIcon";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/SvgIcon.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const SvgIcon_g = index_js_.forwardRef((e, v) => {
  const {
    children: w,
    className: r,
    svgClassName: x,
    icon: i,
    flip: h,
    id: y,
    tabIndex: N,
    size: c,
    style: l,
    svgStyle: S,
    themeColor: a,
    viewBox: m,
    name: P,
    onClick: k,
    ...b
  } = e, d = index_js_.useRef(null);
  index_js_.useImperativeHandle(
    v,
    () => ({
      element: d.current
    })
  );
  const f = index_js_.useMemo(
    () => i ? i.name : SvgIcon_s.icon,
    [i]
  ), u = index_js_.useMemo(
    () => c || SvgIcon_s.size,
    [c]
  ), n = index_js_.useMemo(
    () => h || SvgIcon_s.flip,
    [h]
  ), z = index_js_.useMemo(
    () => m || SvgIcon_s.viewBox,
    [m]
  ), M = index_js_.useMemo(
    () => o(
      "k-icon",
      "k-svg-icon",
      "k-svg-i-" + f,
      {
        [`k-color-${a}`]: a,
        "k-flip-h": n === "horizontal" || n === "both",
        "k-flip-v": n === "vertical" || n === "both"
      },
      constants_x[u],
      r
    ),
    [f, a, u, n, r]
  ), B = index_js_.useMemo(
    () => e.width && e.height ? { width: e.width, height: e.height, ...l } : e.width ? { width: e.width, height: e.width, ...l } : e.height ? { width: e.height, height: e.height, ...l } : { ...l },
    [e.width, e.height, l]
  );
  return /* @__PURE__ */ index_js_.createElement(
    "span",
    {
      className: M,
      style: B,
      ref: d,
      onClick: k,
      "aria-hidden": !0
    },
    /* @__PURE__ */ index_js_.createElement(
      "svg",
      {
        id: y,
        className: x,
        style: S,
        "aria-hidden": !0,
        tabIndex: N,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: i ? i.viewBox : z,
        dangerouslySetInnerHTML: i ? { __html: i.content } : void 0,
        ...b
      },
      i ? void 0 : w
    )
  );
});
SvgIcon_g.propTypes = {
  style: prop_types_index_js_.object,
  classNames: prop_types_index_js_.string,
  children: prop_types_index_js_.any,
  icon: prop_types_index_js_.object,
  themeColor: prop_types_index_js_.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: prop_types_index_js_.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: prop_types_index_js_.oneOf(["default", "horizontal", "vertical", "both"])
};
const SvgIcon_s = {
  size: "default",
  flip: "default",
  icon: "",
  viewBox: "0 0 24 24"
};
SvgIcon_g.displayName = "KendoSvgIcon";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/IconsContext.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const IconsContext_e = index_js_.createContext({ type: "svg" });
IconsContext_e.displayName = "KendoReactIconsContext";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/icons/IconWrap.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const IconWrap_v = index_js_.forwardRef((o, c) => {
  var r, i;
  const { type: m, icons: e } = index_js_.useContext(IconsContext_e), { icon: s, ...f } = o;
  let n = m === "svg" ? ((r = o.icon) == null ? void 0 : r.name) || o.name : o.name || ((i = o.icon) == null ? void 0 : i.name);
  n = n && e && e[n] && typeof e[n] == "string" ? e[n] : n;
  const a = n && e && e[n] && typeof e[n] != "string" ? e[n] : s;
  return m === "svg" && a ? /* @__PURE__ */ index_js_.createElement(SvgIcon_g, { ...o, icon: a, ref: c }) : /* @__PURE__ */ index_js_.createElement(Icon_u, { ...f, name: n, ref: c });
});
IconWrap_v.displayName = "KendoIconWrap";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/typography/constants.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const constants_t = {
  xsmall: "k-fs-xs",
  small: "k-fs-sm",
  medium: "k-fs-md",
  large: "k-fs-lg",
  xlarge: "k-fs-xl"
}, constants_r = {
  light: "k-font-weight-light",
  normal: "k-font-weight-normal",
  bold: "k-font-weight-bold"
}, constants_e = {
  xsmall: "k-m-xs",
  small: "k-m-sm",
  medium: "k-m-md",
  large: "k-m-lg",
  xlarge: "k-m-xl",
  thin: "k-m-thin",
  hair: "k-m-hair"
}, constants_l = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg",
  xlarge: "xl",
  thin: "thin",
  hair: "hair"
}, constants_o = {
  top: "k-mt-",
  right: "k-mr-",
  bottom: "k-mb-",
  left: "k-ml-"
}, constants_i = {
  left: "k-text-left",
  right: "k-text-right",
  center: "k-text-center",
  justify: "k-text-justify"
}, constants_s = {
  lowercase: "k-text-lowercase",
  uppercase: "k-text-uppercase",
  capitalize: "k-text-capitalize"
}, k = {
  inherit: "k-color-inherit",
  primary: "k-color-primary",
  secondary: "k-color-secondary",
  tertiary: "k-color-tertiary",
  info: "k-color-info",
  success: "k-color-success",
  warning: "k-color-warning",
  error: "k-color-error",
  dark: "k-color-dark",
  light: "k-color-light",
  inverse: "k-color-inverse"
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/typography/Typography.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



const Typography_r = (l) => {
  const i = index_js_.forwardRef((c, h) => {
    const {
      id: m,
      style: g,
      className: y,
      fontSize: S,
      fontWeight: u,
      textAlign: d,
      textTransform: C,
      themeColor: E,
      margin: e,
      ...T
    } = c, p = index_js_.useRef(null), f = index_js_.useRef(null);
    index_js_.useImperativeHandle(
      p,
      () => ({
        element: f.current,
        props: c
      })
    ), index_js_.useImperativeHandle(h, () => p.current);
    const A = () => `k-${l === "p" ? "paragraph" : l}`, _ = l, N = (o, a) => {
      const s = typeof a == "string" ? constants_l[a] : a;
      return `${constants_o[o]}${s}`;
    }, O = () => {
      if (e !== void 0) {
        if (typeof e == "string")
          return [constants_e[e]];
        if (typeof e == "number" && e >= 0 && e <= 24)
          return [`k-m-${e}`];
        if (typeof e == "object") {
          const o = [];
          return Object.keys(e).forEach((s) => {
            e[s] !== null && e[s] !== void 0 && o.push(N(s, e[s]));
          }), o.join(" ");
        }
      }
    }, R = () => [
      A(),
      constants_t[S],
      constants_r[u],
      constants_i[d],
      constants_s[C],
      k[E],
      O(),
      y
    ].filter((s) => s !== void 0).join(" ");
    return /* @__PURE__ */ index_js_.createElement(
      _,
      {
        id: m,
        ref: f,
        className: R(),
        style: g,
        ...T
      },
      c.children
    );
  });
  return i.propTypes = {
    style: prop_types_index_js_.object,
    className: prop_types_index_js_.string,
    fontSize: prop_types_index_js_.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
    fontWeight: prop_types_index_js_.oneOf(["light", "normal", "bold"]),
    margin: prop_types_index_js_.oneOfType([
      prop_types_index_js_.number,
      prop_types_index_js_.object,
      prop_types_index_js_.oneOf(["xsmall", "small", "medium", "large", "xlarge", "thin", "hair"])
    ]),
    textAlign: prop_types_index_js_.oneOf(["left", "right", "center", "justify"]),
    textTransform: prop_types_index_js_.oneOf(["lowercase", "uppercase", "capitalize"]),
    themeColor: prop_types_index_js_.oneOf([
      "inherit",
      "primary",
      "secondary",
      "tertiary",
      "info",
      "success",
      "error",
      "warning",
      "dark",
      "light",
      "inverse"
    ])
  }, i.displayName = `KendoReactTypography${l.toUpperCase()}`, i;
}, $ = Typography_r("h1"), H = Typography_r("h2"), U = Typography_r("h3"), Typography_w = Typography_r("h4"), z = Typography_r("h5"), F = Typography_r("h6"), W = Typography_r("p"), Typography_P = Typography_r("code"), X = Typography_r("pre"), K = {
  h1: $,
  h2: H,
  h3: U,
  h4: Typography_w,
  h5: z,
  h6: F,
  p: W,
  code: Typography_P,
  pre: X
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/drag-n-drop/context/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const context_n = index_js_.createContext([
  void 0,
  noop_n
]), context_r = index_js_.createContext([
  void 0,
  noop_n
]), context_c = index_js_.createContext([[], noop_n, noop_n]), context_x = index_js_.createContext([[], noop_n, noop_n]);


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useControlledState.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const useControlledState_u = (i, t, e) => {
  const [a, s] = index_js_.useState(t || i), d = index_js_.useCallback(
    (o, r) => {
      s(o), e && e.call(void 0, { ...r, value: o });
    },
    [e, s]
  );
  return [t !== void 0 ? t : a, d];
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/drag-n-drop/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";




const drag_n_drop_P = (d) => {
  const [p, c] = useControlledState_u(
    null,
    void 0
  ), [i, l] = useControlledState_u(
    null,
    void 0
  ), [D, o] = useCollection_l([]), [m, a] = useCollection_l([]), g = (e) => {
    o({
      type: useCollection_s.add,
      item: e
    });
  }, v = (e) => {
    o({
      type: useCollection_s.remove,
      item: e
    });
  }, u = (e) => {
    a({
      type: useCollection_s.add,
      item: e
    });
  }, C = (e) => {
    a({
      type: useCollection_s.remove,
      item: e
    });
  };
  return /* @__PURE__ */ index_js_.createElement(context_n.Provider, { value: [p, c] }, /* @__PURE__ */ index_js_.createElement(context_r.Provider, { value: [i, l] }, /* @__PURE__ */ index_js_.createElement(context_c.Provider, { value: [D, g, v] }, /* @__PURE__ */ index_js_.createElement(context_x.Provider, { value: [m, u, C] }, d.children))));
};
drag_n_drop_P.displayName = "KendoReactDragAndDrop";


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-draggable-common@0.2.3/node_modules/@progress/kendo-draggable-common/dist/es/main.js + 4 modules
var main = __webpack_require__(26955);
;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useInheritedState.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

const useInheritedState_d = (n, o) => {
  const [e, l] = index_js_.useContext(n), [c, u] = index_js_.useState(o);
  return [
    e !== void 0 ? e : c,
    (...t) => {
      e !== void 0 ? l(...t) : u(t[0]);
    }
  ];
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useDraggable.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";






const je = 2e3;
function _e(l, ge, ve = {}) {
  const {
    onPress: B = noop_n,
    onRelease: H = noop_n,
    onDragStart: W = noop_n,
    onDrag: _ = noop_n,
    onDragEnd: q = noop_n
  } = ge, {
    hint: a = null,
    mouseOnly: E = !1,
    autoScroll: o = !0,
    scrollContainer: u = null
  } = ve, [f, pe] = index_js_.useState(!1), [C, be] = index_js_.useState(!1), [k] = useInheritedState_d(context_r), [y, g] = useInheritedState_d(context_n), [z] = index_js_.useContext(context_x), [F, G, N] = index_js_.useContext(context_c), v = index_js_.useRef({ x: 0, y: 0 }), D = index_js_.useRef(), S = index_js_.useRef(!1), $ = index_js_.useRef(), m = index_js_.useRef(null), L = index_js_.useRef(!1), J = index_js_.useRef({ x: 0, y: 0 }), K = index_js_.useRef({ x: 0, y: 0 }), p = index_js_.useRef({ x: 0, y: 0 }), Q = index_js_.useRef({ x: 0, y: 0 }), X = index_js_.useRef({ x: 0, y: 0 }), Y = index_js_.useRef({ x: 0, y: 0 }), Ee = !!(typeof window != "undefined" && window.PointerEvent), Z = !E && Ee, c = index_js_.useCallback(
    () => l.current && l.current.element ? l.current.element : l.current,
    [l]
  ), ke = index_js_.useCallback(
    () => a && a.current && a.current.element ? a.current.element : a ? a.current : null,
    [a]
  ), ee = index_js_.useCallback(
    () => u && u.current && u.current.element ? u.current.element : u ? u.current : null,
    [u]
  ), te = index_js_.useCallback(
    () => typeof o == "object" && o.boundaryElementRef && o.boundaryElementRef.current && o.boundaryElementRef.current.element ? o.boundaryElementRef.current.element : typeof o == "object" && o.boundaryElementRef && o.boundaryElementRef.current ? o.boundaryElementRef.current : null,
    [o]
  ), h = index_js_.useRef(null);
  index_js_.useImperativeHandle(h, () => ({
    element: c(),
    hint: ke(),
    onPress: ye,
    onDragStart: Se,
    onDrag: Le,
    onDragEnd: Oe,
    onRelease: De,
    data: l.current
  }));
  const b = index_js_.useCallback(
    () => {
      const e = c();
      return e && e.ownerDocument || document;
    },
    [c]
  ), d = index_js_.useCallback(
    () => {
      const e = b();
      return e && e.defaultView || window;
    },
    [b]
  ), ne = index_js_.useCallback(
    () => ({
      drag: y ? y.current : null,
      drop: k ? k.current : null,
      drags: F.map((e) => e.current),
      drops: z.map((e) => e.current),
      pressed: f,
      ignoreMouse: S.current,
      scrollOffset: X.current,
      offset: J.current,
      pageOffset: K.current,
      initialScrollOffset: Y.current,
      clientOffset: p.current,
      initialClientOffset: Q.current,
      velocity: v.current,
      autoScroll: !!(typeof o == "object" ? o.enabled !== !1 : o),
      scrollableParent: te(),
      autoScrollDirection: typeof o == "object" ? o.direction : { horizontal: !0, vertical: !0 },
      isScrolling: C
    }),
    [y, k, F, z, f, o, te, C]
  ), re = index_js_.useCallback(
    (e) => {
      pe(e);
    },
    []
  ), oe = index_js_.useCallback(
    (e) => {
      be(e);
    },
    []
  ), se = index_js_.useCallback(
    (e) => {
      v.current = e;
    },
    []
  ), le = index_js_.useCallback(
    (e) => {
      J.current = e;
    },
    []
  ), ce = index_js_.useCallback(
    (e) => {
      p.current = e;
    },
    []
  ), ae = index_js_.useCallback(
    (e) => {
      K.current = e;
    },
    []
  ), ue = index_js_.useCallback(
    (e) => {
      Q.current = e;
    },
    []
  ), ie = index_js_.useCallback(
    (e) => {
      X.current = e;
    },
    []
  ), fe = index_js_.useCallback(
    (e) => {
      Y.current = e;
    },
    []
  ), ye = index_js_.useCallback(
    (e) => {
      B(e);
    },
    [B]
  ), De = index_js_.useCallback(
    (e) => {
      H(e);
    },
    [H]
  ), Se = index_js_.useCallback(
    (e) => {
      g(h, { target: l.current, event: e }), W(e);
    },
    [g, l, W]
  ), Le = index_js_.useCallback(
    (e) => {
      _(e);
    },
    [_]
  ), Oe = index_js_.useCallback(
    (e) => {
      L.current || (g(null, { target: l.current, event: e }), q(e));
    },
    [q, g, l]
  ), n = index_js_.useCallback(
    (e) => {
      (0,main/* dispatchDragAndDrop */.r2)(
        ne(),
        { event: e, payload: h.current },
        {
          onVelocityChange: se,
          onOffsetChange: le,
          onClientOffsetChange: ce,
          onPageOffsetChange: ae,
          onInitialClientOffsetChange: ue,
          onScrollOffsetChange: ie,
          onInitialScrollOffsetChange: fe,
          onIsPressedChange: re,
          onIsScrollingChange: oe
        }
      );
    },
    [
      ne,
      se,
      le,
      ae,
      ce,
      ue,
      fe,
      re,
      ie,
      oe
    ]
  ), O = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), R = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), w = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), x = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), P = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), I = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), M = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), T = index_js_.useCallback(
    (e) => {
      e.preventDefault(), n(e);
    },
    [n]
  ), A = index_js_.useCallback(
    (e) => {
      e.preventDefault(), n(e);
    },
    [n]
  ), j = index_js_.useCallback(
    (e) => {
      e.preventDefault(), n(e);
    },
    [n]
  ), U = index_js_.useCallback(
    (e) => {
      if (e.touches.length === 0 && e.changedTouches.length === 1) {
        const r = d();
        S.current = !0, $.current = r.setTimeout(() => {
          S.current = !1;
        }, je);
      }
      n(e);
    },
    [n, d]
  ), V = index_js_.useCallback(
    (e) => {
      n(e);
    },
    [n]
  ), de = index_js_.useCallback(
    () => {
      const e = c();
      if (e) {
        const r = e.style.touchAction;
        return e.style.touchAction = "none", () => {
          e.style.touchAction = r;
        };
      }
    },
    [c]
  ), me = index_js_.useCallback(
    () => (G(h), () => {
      N(h);
    }),
    [N, G]
  ), Re = () => {
    const e = d(), r = c(), s = b();
    return Z ? (r && (m.current = (0,main/* getScrollableParent */.Ue)(r), m.current && m.current.addEventListener("scroll", V, { passive: !0 }), r.addEventListener("pointerdown", O, { passive: !0 })), f && (s.addEventListener("pointermove", R), s.addEventListener("pointerup", x, !0), s.addEventListener("contextmenu", T), s.addEventListener("pointercancel", w, { passive: !0 }))) : (e.addEventListener("touchmove", noop_n, { capture: !1, passive: !1 }), r && (r.addEventListener("mousedown", P, { passive: !0 }), E || (r.addEventListener("touchstart", A, { passive: !0 }), f && (r.addEventListener("touchmove", j, { passive: !0 }), r.addEventListener("touchend", U, { passive: !0 })))), f && (s.addEventListener("mousemove", I, { passive: !0 }), s.addEventListener("mouseup", M, { passive: !0 }))), () => {
      m.current && m.current.removeEventListener("scroll", V), r && (r.removeEventListener("pointerdown", O), r.removeEventListener("mousedown", P), r.removeEventListener("touchstart", A), r.removeEventListener("touchmove", j), r.removeEventListener("touchend", U)), s.removeEventListener("pointermove", R), s.removeEventListener("pointerup", x, !0), s.removeEventListener("contextmenu", T), s.removeEventListener("pointercancel", w), s.removeEventListener("mousemove", I), s.removeEventListener("mouseup", M), e.removeEventListener("touchmove", noop_n), e.clearTimeout($.current);
    };
  };
  index_js_.useEffect(() => {
    const e = d();
    if (C) {
      const r = ee() || (0,main/* getScrollableParent */.Ue)(document.elementFromPoint(p.current.x, p.current.y));
      e.clearInterval(D.current), D.current = e.setInterval(() => {
        (0,main/* autoScroll */.jY)(r, { x: v.current.x, y: v.current.y });
      }, 50);
    }
    return () => {
      e.clearInterval(D.current);
    };
  }, [c, ee, d, C]), index_js_.useEffect(de, [de]), index_js_.useEffect(Re, [
    f,
    d,
    c,
    b,
    E,
    Z,
    T,
    P,
    I,
    M,
    w,
    O,
    R,
    x,
    U,
    j,
    A,
    V
  ]), index_js_.useEffect(() => (L.current = !1, () => {
    L.current = !0;
  }), []), use_isomorphic_layout_effect_t(me, [me]);
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/Draggable.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const Draggable_m = index_js_.forwardRef((e, c) => {
  const l = index_js_.useRef(null), r = index_js_.useRef(null), t = index_js_.useCallback(
    () => l.current && l.current.element ? l.current.element : l.current,
    [l]
  );
  index_js_.useImperativeHandle(r, () => ({ element: t() || null })), index_js_.useImperativeHandle(c, () => r.current), index_js_.useImperativeHandle(e.childRef, () => l.current);
  const u = index_js_.useCallback(
    (a) => {
      e.onPress && e.onPress({
        element: t(),
        target: r.current,
        event: a
      });
    },
    [t, e.onPress]
  ), g = index_js_.useCallback(
    (a) => {
      e.onRelease && e.onRelease({
        element: t(),
        target: r.current,
        event: a
      });
    },
    [t, e.onRelease]
  ), o = index_js_.useCallback(
    (a) => {
      e.onDragStart && e.onDragStart({
        element: t(),
        target: r.current,
        event: a
      });
    },
    [e, t]
  ), s = index_js_.useCallback(
    (a) => {
      e.onDrag && e.onDrag({
        element: t(),
        target: r.current,
        event: a
      });
    },
    [t, e.onDrag]
  ), d = index_js_.useCallback(
    (a) => {
      e.onDragEnd && e.onDragEnd({
        element: t(),
        target: r.current,
        event: a
      });
    },
    [t, e.onDragEnd]
  );
  return _e(l, {
    onPress: u,
    onRelease: g,
    onDragStart: o,
    onDrag: s,
    onDragEnd: d
  }, {
    mouseOnly: e.mouseOnly,
    autoScroll: e.autoScroll,
    hint: e.hint,
    scrollContainer: e.scrollContainer
  }), e.children ? index_js_.cloneElement(index_js_.Children.only(e.children), { ref: l }) : null;
});
Draggable_m.displayName = "KendoReactDraggable";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/hooks/useDroppable.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";





function useDroppable_y(e, m = {
  onDragEnter: noop_n,
  onDragOver: noop_n,
  onDragLeave: noop_n,
  onDrop: noop_n
}) {
  const {
    onDragEnter: s = noop_n,
    onDragOver: c = noop_n,
    onDragLeave: l = noop_n,
    onDrop: u = noop_n
  } = m, [, o] = useInheritedState_d(context_r), [, D, g] = index_js_.useContext(context_x), i = index_js_.useCallback(
    () => e.current && e.current.element ? e.current.element : e.current,
    [e]
  ), a = index_js_.useRef(null);
  index_js_.useImperativeHandle(a, () => ({
    element: i(),
    onDragEnter: C,
    onDragOver: d,
    onDragLeave: b,
    onDrop: h,
    data: e.current
  }));
  const C = index_js_.useCallback(
    (r) => {
      o(a, { target: e.current, event: r }), s(r);
    },
    [o, e, s]
  ), d = index_js_.useCallback(
    (r) => {
      c(r);
    },
    [c]
  ), b = index_js_.useCallback(
    (r) => {
      o(null, { target: e.current, event: r }), l(r);
    },
    [o, e, l]
  ), h = index_js_.useCallback(
    (r) => {
      o(null, { target: e.current, event: r }), u(r);
    },
    [o, e, u]
  ), p = index_js_.useCallback(
    () => (D(a), () => {
      g(a);
    }),
    [g, D]
  );
  use_isomorphic_layout_effect_t(p, [p]);
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/Droppable.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


const Droppable_m = index_js_.forwardRef((e, c) => {
  const t = index_js_.useRef(null), l = index_js_.useRef(null), r = index_js_.useCallback(
    () => t.current && t.current.element ? t.current.element : t.current,
    [t]
  );
  index_js_.useImperativeHandle(l, () => ({ element: r() || void 0 })), index_js_.useImperativeHandle(c, () => l.current), index_js_.useImperativeHandle(e.childRef, () => t.current);
  const u = index_js_.useCallback(
    (a) => {
      e.onDragEnter && e.onDragEnter({
        element: r(),
        target: l.current,
        event: a
      });
    },
    [e.onDragEnter, r]
  ), o = index_js_.useCallback(
    (a) => {
      e.onDragOver && e.onDragOver({
        element: r(),
        target: l.current,
        event: a
      });
    },
    [r, e.onDragOver]
  ), D = index_js_.useCallback(
    (a) => {
      e.onDragLeave && e.onDragLeave({
        element: r(),
        target: l.current,
        event: a
      });
    },
    [e.onDragLeave, r]
  ), g = index_js_.useCallback(
    (a) => {
      e.onDrop && e.onDrop({
        element: r(),
        target: l.current,
        event: a
      });
    },
    [e.onDrop, r]
  );
  return useDroppable_y(t, {
    onDragEnter: u,
    onDragOver: o,
    onDragLeave: D,
    onDrop: g
  }), e.children ? index_js_.cloneElement(index_js_.Children.only(e.children), { ref: t }) : null;
});
Droppable_m.displayName = "KendoReactDroppable";


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/theme.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const theme_e = {
  sizeMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  roundedMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  orientationMap: {
    vertical: "vstack",
    horizontal: "hstack"
  }
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/memoize.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
function memoize_n(e, l) {
  return e === l || Number.isNaN(e) && Number.isNaN(l);
}
function memoize_a(e, l) {
  if (e.length !== l.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (!memoize_n(e[t], l[t]))
      return !1;
  return !0;
}
function memoize_s(e, l = memoize_a) {
  let t = null;
  function u(...r) {
    if (t && t.lastThis === this && l(r, t.lastArgs))
      return t.lastResult;
    const i = e.apply(this, r);
    return t = {
      lastResult: i,
      lastArgs: r,
      lastThis: this
    }, i;
  }
  return u.clear = function() {
    t = null;
  }, u;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/navigation.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class navigation_o {
  constructor(t) {
    this.rovingTabIndex = !0, this.update = () => {
    }, this.focusNextIndex = (e, s, n) => {
      const r = s === 1 ? this.next(e, n) : this.previous(e, n);
      return this.focusElement(r, e), r;
    }, this.tabIndex = t.tabIndex || 0, this.root = t.root, this.selectors = t.selectors, this.focusOptions = t.focusOptions || { preventScroll: !0 }, this.rovingTabIndex = t.rovingTabIndex !== void 0 ? t.rovingTabIndex : !0, this.mouseEvents = t.mouseEvents || {}, this.keyboardEvents = t.keyboardEvents || {};
  }
  /**
   * Returns the collection of DOM elements which the module will navigate in.
   */
  get elements() {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
  }
  /**
   * Returns the first navigation DOM element.
   */
  get first() {
    return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
  }
  /**
   * Returns the last navigation DOM element.
   */
  get last() {
    const t = this.elements;
    return t[t.length - 1] || null;
  }
  /**
   * Returns the focused DOM element from the navigation collection of DOM elements.
   */
  get current() {
    return this.elements.find((t) => t.matches(":focus")) || null;
  }
  /**
   * Returns the next DOM element from the navigation collection of DOM elements.
   */
  next(t, e) {
    const s = e ? this.customElements(e) : this.elements;
    let n = s.indexOf(t) + 1;
    return n = n < 0 ? s.length - 1 : n, s[n % s.length];
  }
  /**
   * Returns the previous DOM element from the navigation collection of DOM elements.
   */
  previous(t, e) {
    const s = e ? this.customElements(e) : this.elements;
    let n = s.indexOf(t) - 1;
    return n = n < 0 ? s.length - 1 : n, s[n % s.length];
  }
  /**
   * Focuses the next element from the navigation collection of DOM elements.
   */
  focusNext(t, e) {
    return this.focusNextIndex(t, 1, e);
  }
  /**
   * Focuses the previous element from the navigation collection of DOM elements.
   */
  focusPrevious(t, e) {
    return this.focusNextIndex(t, -1, e);
  }
  /**
   * The keyboard events handler.
   */
  triggerKeyboardEvent(t, e) {
    const s = t.target instanceof Element && t.target.closest(this.selectors.join(",")), n = t.key === " " ? "Space" : t.key, r = t.nativeEvent.type;
    s && this.keyboardEvents[r][n] && this.keyboardEvents[r][n].call(void 0, s, this, t, e);
  }
  /**
   * The mouse events handler.
   */
  triggerMouseEvent(t) {
    const e = t.target instanceof Element && t.target.closest(this.selectors.join(",")), s = t.nativeEvent.type;
    e && this.mouseEvents[s].call(void 0, e, this, t);
  }
  /**
   * Focuses the passed element from the navigation collection of DOM elements.
   */
  focusElement(t, e) {
    t && (e && (this.rovingTabIndex && e.removeAttribute("tabindex"), e.classList.remove("k-focus")), this.rovingTabIndex && t.setAttribute("tabindex", String(this.tabIndex)), t.focus(this.focusOptions));
  }
  customElements(t) {
    return this.root.current ? Array.from(this.root.current.querySelectorAll(t.join(","))) : [];
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/getActiveElement.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
const getActiveElement_c = (t) => {
  const e = t.shadowRoot, n = t.contentDocument;
  return e && e.activeElement ? getActiveElement_c(e.activeElement) : n && n.activeElement ? getActiveElement_c(n.activeElement) : t;
}, getActiveElement_o = (t) => {
  if (!(!t || !t.activeElement))
    return getActiveElement_c(t.activeElement);
};


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/misc.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
function misc_o(e, n) {
  const r = (e || "").split(".");
  let t = n;
  return r.forEach((i) => {
    t = t ? t[i] : void 0;
  }), t;
}
function misc_a(e) {
  return e.length !== void 0;
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/FieldsService.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";

class FieldsService_h {
  constructor(e) {
    this.expandField = e.expandField, this.selectField = e.selectField, this.hasChildrenField = e.hasChildrenField, this.childrenField = e.childrenField, this.textField = e.textField, this.disableField = e.disableField, this.checkField = e.checkField, this.checkIndeterminateField = e.checkIndeterminateField, this.focusIdField = e.focusIdField;
  }
  expanded(e) {
    return misc_o(this.expandField, e);
  }
  selected(e) {
    return misc_o(this.selectField, e);
  }
  text(e) {
    return misc_o(this.textField, e);
  }
  disabled(e) {
    return misc_o(this.disableField, e);
  }
  hasChildren(e) {
    return misc_o(this.hasChildrenField, e);
  }
  children(e) {
    const d = misc_o(this.childrenField, e);
    return d || [];
  }
  checked(e) {
    return misc_o(this.checkField, e);
  }
  checkIndeterminate(e) {
    return misc_o(this.checkIndeterminateField, e);
  }
  focusId(e) {
    return this.focusIdField && misc_o(this.focusIdField, e);
  }
  getChildrenField() {
    return this.childrenField;
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/SortedPublicItemIds.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";
class SortedPublicItemIds_r {
  constructor() {
    this.objects = [];
  }
  init(e) {
    let t;
    for (let s = 0; s < e.length; s++)
      s % 5e4 === 0 && (t = {}, this.objects.push(t)), t[e[s]] = !0;
  }
  hasId(e) {
    return this.objects.some((t) => t[e]);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/tree-utils/itemUtils.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";



function itemUtils_P(t, s) {
  const e = misc_o(s, t);
  return !!(e && e.length);
}
function itemUtils_O(t, s) {
  return s.expanded(t) && itemUtils_P(t, s.getChildrenField());
}
function R(t, s, e, n) {
  const u = A([t], s, e, n);
  return u.length ? u[0] : void 0;
}
function A(t, s, e, n) {
  const u = [], r = new SortedPublicItemIds_r();
  return r.init(t), itemUtils_N(r, s, e, c, u, n), u;
}
function itemUtils_d(t, s, e, n, u) {
  const r = Number(f(s));
  if (r >= t.length)
    return t;
  let o = t, c = t[r];
  return c[n] || (o = t.slice(), c = o[r] = Object.assign({}, c, { [n]: !0 })), x(s) ? e(c) : c[u] && (c[u] = itemUtils_d(c[u], i(s), e, n, u)), o;
}
function itemUtils_W(t, s, e) {
  const n = P(t);
  let u = s;
  for (let r = 0; r < n.length; r++) {
    const o = u[Number(n[r])];
    if (e.disabled(o))
      return !1;
    u = o[e.getChildrenField()];
  }
  return !0;
}
function j(t, s, e, n) {
  return n ? r(t) : u(t, s);
  function u(o, c) {
    let l = [];
    const f = o[e] || [];
    for (let a = 0; a < f.length; a++) {
      const m = O(a, c);
      l.push(m), l = l.concat(u(f[a], m));
    }
    return l;
  }
  function r(o) {
    let c = [];
    const l = o[e] || [];
    for (let f = 0; f < l.length; f++)
      c.push(misc_o(n, l[f])), c = c.concat(r(l[f]));
    return c;
  }
}
function itemUtils_w(t, s, e, n, u) {
  return (t[n] || []).every((o, c) => u.indexOf(e ? misc_o(e, o) : O(c, s)) > -1);
}
function itemUtils_y(t, s, e) {
  const n = [], u = P(t);
  let r = e;
  for (let o = 0; o < u.length - 1 && r; o++) {
    const c = r[Number(u[o])];
    n.push(c), r = c[s];
  }
  return n;
}
function itemUtils_v(t, s, e) {
  const n = e.slice();
  if (x(t))
    n.splice(Number(t), 1);
  else {
    const u = Number(f(t)), r = n[u] = { ...n[u] };
    r[s] = itemUtils_v(i(t), s, r[s]);
  }
  return n;
}
function itemUtils_E(t, s, e, n, u) {
  const r = u.slice();
  if (x(n))
    if (s === "child") {
      const o = r[Number(n)] = { ...r[Number(n)] };
      o[e] ? (o[e] = o[e].slice(), o[e].push(t)) : o[e] = [t];
    } else
      r.splice(Number(n) + (s === "after" ? 1 : 0), 0, t);
  else {
    const o = Number(f(n)), c = r[o] = { ...r[o] };
    c[e] = itemUtils_E(t, s, e, i(n), c[e]);
  }
  return r;
}
function itemUtils_N(t, s, e, n, u, r) {
  for (let o = 0; o < e.length; o++) {
    const c = e[o], l = O(o, n);
    t.hasId(misc_o(s, c)) && u.push(l), itemUtils_P(c, r) && itemUtils_N(t, s, misc_o(r, c), l, u, r);
  }
}


;// ../node_modules/.pnpm/@progress+kendo-react-common@7.4.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_99e6949b4cec654f37cbbb92cda658c0/node_modules/@progress/kendo-react-common/index.mjs
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
"use client";


























































/***/ })

}]);