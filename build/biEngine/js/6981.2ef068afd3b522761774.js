"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[6981],{

/***/ 26981
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Popup: () => (/* binding */ W),
  PopupPropsContext: () => (/* binding */ Z),
  PopupWithoutContext: () => (/* binding */ P)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var index_js_ = __webpack_require__(51347);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(14129);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-commo_42e293437ee7197a19d3bc5d61ca2277/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(15748);
;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var AlignPoint;
(function (AlignPoint) {
    AlignPoint["bottom"] = "bottom";
    AlignPoint["center"] = "center";
    AlignPoint["middle"] = "middle";
    AlignPoint["left"] = "left";
    AlignPoint["right"] = "right";
    AlignPoint["top"] = "top";
})(AlignPoint || (AlignPoint = {}));

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/align.js

var align = function (options) {
    var anchorRect = options.anchorRect, anchorAlign = options.anchorAlign, elementRect = options.elementRect, elementAlign = options.elementAlign, _a = options.margin, margin = _a === void 0 ? {} : _a;
    var anchorHorizontal = anchorAlign.horizontal;
    var anchorVertical = anchorAlign.vertical;
    var elementHorizontal = elementAlign.horizontal;
    var elementVertical = elementAlign.vertical;
    var horizontalMargin = margin.horizontal || 0;
    var verticalMargin = margin.vertical || 0;
    var top = anchorRect.top;
    var left = anchorRect.left;
    if (anchorVertical === AlignPoint.bottom) {
        top += anchorRect.height;
    }
    if (anchorVertical === AlignPoint.center || anchorVertical === AlignPoint.middle) {
        top += Math.round(anchorRect.height / 2);
    }
    if (elementVertical === AlignPoint.bottom) {
        top -= elementRect.height;
        verticalMargin *= -1;
    }
    if (elementVertical === AlignPoint.center || elementVertical === AlignPoint.middle) {
        top -= Math.round(elementRect.height / 2);
        verticalMargin *= -1;
    }
    if (anchorHorizontal === AlignPoint.right) {
        left += anchorRect.width;
    }
    if (anchorHorizontal === AlignPoint.center || anchorHorizontal === AlignPoint.middle) {
        left += Math.round(anchorRect.width / 2);
    }
    if (elementHorizontal === AlignPoint.right) {
        left -= elementRect.width;
        horizontalMargin *= -1;
    }
    if (elementHorizontal === AlignPoint.center || elementHorizontal === AlignPoint.middle) {
        left -= Math.round(elementRect.width / 2);
        horizontalMargin *= -1;
    }
    return {
        top: top + verticalMargin,
        left: left + horizontalMargin
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/collision.js
var Collision;
(function (Collision) {
    Collision["fit"] = "fit";
    Collision["flip"] = "flip";
    Collision["none"] = "none";
})(Collision || (Collision = {}));

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js


var fit = function (position, size, viewPortSize) {
    var output = 0;
    if (position + size > viewPortSize) {
        output = viewPortSize - (position + size);
    }
    if (position < 0) {
        output = -position;
    }
    return output;
};
var flip = function (_a) {
    var offset = _a.offset, size = _a.size, anchorSize = _a.anchorSize, viewPortSize = _a.viewPortSize, anchorAlignPoint = _a.anchorAlignPoint, elementAlignPoint = _a.elementAlignPoint, margin = _a.margin;
    var output = 0;
    var isPositionCentered = elementAlignPoint === AlignPoint.center || elementAlignPoint === AlignPoint.middle;
    var isOriginCentered = anchorAlignPoint === AlignPoint.center || anchorAlignPoint === AlignPoint.middle;
    var marginToAdd = 2 * margin; // 2x to keep margin after flip
    if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
        var isBeforeAnchor = anchorAlignPoint === AlignPoint.top || anchorAlignPoint === AlignPoint.left;
        if (offset < 0 && isBeforeAnchor) {
            output = size + anchorSize + marginToAdd;
            if (offset + output + size > viewPortSize) {
                output = 0; // skip flip
            }
        }
        else if (offset >= 0 && !isBeforeAnchor) {
            if (offset + size > viewPortSize) {
                output += -(anchorSize + size + marginToAdd);
            }
            if (offset + output < 0) {
                output = 0; // skip flip
            }
        }
    }
    return output;
};
var restrictToView = function (_a) {
    var anchorRect = _a.anchorRect, anchorAlign = _a.anchorAlign, elementRect = _a.elementRect, elementAlign = _a.elementAlign, collisions = _a.collisions, viewPort = _a.viewPort, _b = _a.margin, margin = _b === void 0 ? {} : _b;
    var elementTop = elementRect.top, elementLeft = elementRect.left, elementHeight = elementRect.height, elementWidth = elementRect.width;
    var viewPortHeight = viewPort.height, viewPortWidth = viewPort.width;
    var horizontalMargin = margin.horizontal || 0;
    var verticalMargin = margin.vertical || 0;
    var left = 0;
    var top = 0;
    var isVerticalFit = collisions.vertical === Collision.fit;
    var isHorizontalFit = collisions.horizontal === Collision.fit;
    var isVerticalFlip = collisions.vertical === Collision.flip;
    var isHorizontalFlip = collisions.horizontal === Collision.flip;
    if (isVerticalFit) {
        top += fit(elementTop, elementHeight, viewPortHeight);
    }
    if (isHorizontalFit) {
        left += fit(elementLeft, elementWidth, viewPortWidth);
    }
    if (isVerticalFlip) {
        top += flip({
            margin: verticalMargin,
            offset: elementTop,
            size: elementHeight,
            anchorSize: anchorRect.height,
            viewPortSize: viewPortHeight,
            anchorAlignPoint: anchorAlign.vertical,
            elementAlignPoint: elementAlign.vertical
        });
    }
    if (isHorizontalFlip) {
        left += flip({
            margin: horizontalMargin,
            offset: elementLeft,
            size: elementWidth,
            anchorSize: anchorRect.width,
            viewPortSize: viewPortWidth,
            anchorAlignPoint: anchorAlign.horizontal,
            elementAlignPoint: elementAlign.horizontal
        });
    }
    var flippedVertical = isVerticalFlip && top !== 0;
    var flippedHorizontal = isHorizontalFlip && left !== 0;
    var fittedVertical = isVerticalFit && top !== 0;
    var fittedHorizontal = isHorizontalFit && left !== 0;
    return {
        flipped: flippedHorizontal || flippedVertical,
        fitted: fittedVertical || fittedHorizontal,
        flip: {
            horizontal: flippedHorizontal,
            vertical: flippedVertical,
        },
        fit: {
            horizontal: fittedHorizontal,
            vertical: fittedVertical,
        },
        offset: {
            left: left,
            top: top,
        },
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/utils.js
var eitherRect = function (rect, offset) {
    if (!rect) {
        return { height: 0, left: offset.left, top: offset.top, width: 0 };
    }
    return rect;
};
var scaleRect = function (rect, scale) {
    if (!rect || scale === 1) {
        return rect;
    }
    return {
        height: rect.height / scale,
        left: rect.left / scale,
        top: rect.top / scale,
        width: rect.width / scale
    };
};
var removeStackingOffset = function (rect, stackingOffset) {
    if (!stackingOffset) {
        return rect;
    }
    return {
        height: rect.height,
        left: rect.left - stackingOffset.left,
        top: rect.top - stackingOffset.top,
        width: rect.width
    };
};
function memoize(fun) {
    var _this = this;
    var result;
    var called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (called) {
            return result;
        }
        result = fun.apply(_this, args);
        called = true;
        return result;
    };
}
var hasRelativeStackingContext = memoize(function (elementSource) {
    if (!canUseDOM()) {
        return false;
    }
    var currentDocument = elementSource ? elementSource.ownerDocument : document;
    if (!currentDocument || !currentDocument.body) {
        return false;
    }
    var top = 10;
    var parent = currentDocument.createElement("div");
    parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
    parent.innerHTML = "<div style=\"position: fixed; top: ".concat(top, "px;\">child</div>");
    currentDocument.body.appendChild(parent);
    var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
    currentDocument.body.removeChild(parent);
    return isDifferent;
});
var canUseDOM = function () { return Boolean(typeof window !== 'undefined' &&
    window.document &&
    // eslint-disable-next-line
    window.document.createElement); };
var utils = {
    eitherRect: eitherRect,
    scaleRect: scaleRect,
    removeStackingOffset: removeStackingOffset,
    hasRelativeStackingContext: hasRelativeStackingContext,
    canUseDOM: canUseDOM
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function (element) {
    var _a = element.style, display = _a.display, left = _a.left, position = _a.position;
    element.style.display = '';
    element.style.left = '-10000px';
    element.style.position = 'absolute';
    var rect = element.getBoundingClientRect();
    element.style.display = display;
    element.style.left = left;
    element.style.position = position;
    return {
        top: rect.top,
        left: rect.left,
        height: rect.height,
        width: rect.width
    };
};
var offset_offset = function (element) {
    var rect = element.getBoundingClientRect();
    var left = rect.left, top = rect.top;
    if (!rect.height && !rect.width) {
        rect = rectOfHiddenElement(element);
    }
    return {
        top: top,
        left: left,
        height: rect.height,
        width: rect.width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
var addScroll = function (rect, scroll) {
    return {
        top: rect.top + scroll.y,
        left: rect.left + scroll.x,
        height: rect.height,
        width: rect.width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
/* harmony default export */ const owner_document = (function (element) {
    return (element && element.ownerDocument) || document;
});

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/document.js

var getDocumentElement = function (element) { return owner_document(element).documentElement; };

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
var scrollbarWidth = function () {
    if (!cachedWidth && typeof document !== 'undefined') {
        var div = document.createElement("div");
        div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
        div.innerHTML = "&nbsp;";
        document.body.appendChild(div);
        cachedWidth = div.offsetWidth - div.scrollWidth;
        document.body.removeChild(div);
    }
    return cachedWidth;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/window.js

var getWindow = function (element) { return owner_document(element).defaultView; };

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js



var windowViewport = function (element) {
    var win = getWindow(element);
    var documentElement = getDocumentElement(element);
    var result = {
        height: win.innerHeight,
        width: win.innerWidth
    };
    if (documentElement.scrollHeight - documentElement.clientHeight > 0) {
        result.width -= scrollbarWidth();
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js

var boundingOffset = function (element) {
    if (!element.getBoundingClientRect) {
        var viewport = windowViewport(element);
        return {
            bottom: viewport.height,
            left: 0,
            right: viewport.width,
            top: 0
        };
    }
    var _a = element.getBoundingClientRect(), bottom = _a.bottom, left = _a.left, right = _a.right, top = _a.top;
    return {
        bottom: bottom,
        left: left,
        right: right,
        top: top
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js


var scrollPosition = function (element) {
    var documentElement = getDocumentElement(element);
    var win = getWindow(element);
    return {
        x: win.pageXOffset || documentElement.scrollLeft || 0,
        y: win.pageYOffset || documentElement.scrollTop || 0
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
var removeScroll = function (rect, scroll) {
    return {
        top: rect.top - scroll.y,
        left: rect.left - scroll.x,
        height: rect.height,
        width: rect.width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/parents.js
var parents = function (element, until) {
    var result = [];
    var next = element.parentNode;
    while (next) {
        result.push(next);
        if (next === until) {
            break;
        }
        next = next.parentNode;
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/siblings.js
var siblings = function (element) {
    var _a;
    var result = [];
    var sibling = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.firstElementChild;
    while (sibling) {
        if (sibling !== element) {
            result.push(sibling);
        }
        sibling = sibling.nextElementSibling;
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js


var siblingContainer = function (anchor, container) {
    var parentElements = parents(anchor);
    var containerElement = container;
    var siblingElements;
    var result;
    while (containerElement) {
        siblingElements = siblings(containerElement);
        result = parentElements.reduce(function (list, p) { return list.concat(siblingElements.filter(function (s) { return s === p; })); }, [])[0];
        if (result) {
            break;
        }
        containerElement = containerElement.parentElement;
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function (element) {
    var offsetParent = element.offsetParent;
    while (offsetParent && offsetParent.style.position === 'static') {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || element.ownerDocument.documentElement;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js

var elementScrollPosition = function (element) {
    if (element === (element.ownerDocument || {}).body) {
        return scrollPosition(element);
    }
    return {
        x: element.scrollLeft,
        y: element.scrollTop
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js


var parentScrollPosition = function (element) {
    var parent = offsetParent(element);
    return parent ? elementScrollPosition(parent) : { x: 0, y: 0 };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js


var offsetParentScrollPosition = function (offsetParentElement, element) { return (offsetParentElement ? elementScrollPosition(offsetParentElement) : parentScrollPosition(element)); };

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/position.js



var position = function (element, parent) {
    var win = getWindow(element);
    var elementStyles = win.getComputedStyle(element);
    var offset = offset_offset(element);
    var parentElement = parent || offsetParent(element);
    var ownerDocument = element.ownerDocument;
    var useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;
    var parentOffset = { top: 0, left: 0, height: 0, width: 0 };
    if (elementStyles.position !== "fixed" && useRelative) {
        var parentStyles = win.getComputedStyle(parentElement);
        parentOffset = offset_offset(parentElement);
        parentOffset.top += parseFloat(parentStyles.borderTopWidth);
        parentOffset.left += parseFloat(parentStyles.borderLeftWidth);
    }
    return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left,
        height: offset.height,
        width: offset.width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js



var positionWithScroll = function (element, parent, scale) {
    if (scale === void 0) { scale = 1; }
    var offsetParentElement = parent ? offsetParent(parent) : null;
    var _a = position(element, offsetParentElement), top = _a.top, left = _a.left, height = _a.height, width = _a.width;
    var _b = offsetParentScrollPosition(offsetParentElement, element), x = _b.x, y = _b.y;
    var ownerDocument = element.ownerDocument;
    var positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;
    return {
        top: top + y * positionScale,
        left: left + x * positionScale,
        height: height,
        width: width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/dom-utils.js












var STYLES = [
    'font-size',
    'font-family',
    'font-stretch',
    'font-style',
    'font-weight',
    'line-height'
];
var addOffset = function (current, addition) {
    return {
        left: current.left + addition.left,
        top: current.top + addition.top
    };
};
var dom_utils_getWindow = function () {
    return utils.canUseDOM() ? window : null;
};
var getFontStyles = function (el) {
    var window = dom_utils_getWindow();
    if (!window || !el) {
        return [];
    }
    var computedStyles = window.getComputedStyle(el);
    return STYLES.map(function (font) { return ({ key: font, value: computedStyles[font] }); });
};
var hasOffsetParent = function (el) {
    if (!el) {
        return false;
    }
    return Boolean(el.offsetParent);
};
var offset = function (el) {
    if (!el) {
        return null;
    }
    return offset_offset(el);
};
var offsetAtPoint = function (element, currentLocation) {
    if (!element) {
        return null;
    }
    var _a = element.style, left = _a.left, top = _a.top, transition = _a.transition;
    element.style.transition = 'none';
    element.style.left = "".concat(currentLocation.left, "px");
    element.style.top = "".concat(currentLocation.top, "px");
    var currentOffset = offset_offset(element);
    element.style.left = left;
    element.style.top = top;
    // prevents elements with transition to be animated because of the change
    // eslint-disable-next-line
    element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
};
var dom_utils_position = function (element, popupElement, scale) {
    if (!element || !popupElement) {
        return null;
    }
    var currentScale = scale || 1;
    return positionWithScroll(element, popupElement, currentScale);
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = function (element) {
    return "".concat(window.getComputedStyle(element).overflow);
};
var overflowComputedStyle = function (element) {
    var styles = window.getComputedStyle(element);
    return "".concat(styles.overflow).concat(styles.overflowX).concat(styles.overflowY);
};
var overflowStyle = function (element) {
    return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = function (element) {
    var parentElements = [];
    if (!utils.canUseDOM()) {
        return parentElements;
    }
    var parent = element.parentElement;
    while (parent) {
        if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute('data-scrollable')) {
            parentElements.push(parent);
        }
        parent = parent.parentElement;
    }
    parentElements.push(window);
    return parentElements;
};
var getRelativeContextElement = function (el) {
    if (!el || !utils.hasRelativeStackingContext()) {
        return null;
    }
    var parent = el.parentElement;
    while (parent) {
        if (window.getComputedStyle(parent).transform !== 'none') {
            return parent;
        }
        parent = parent.parentElement;
    }
    return null;
};
var stackingElementOffset = function (el) {
    var relativeContextElement = getRelativeContextElement(el);
    if (!relativeContextElement) {
        return null;
    }
    return offset_offset(relativeContextElement);
};
var stackingElementScroll = function (el) {
    var relativeContextElement = getRelativeContextElement(el);
    if (!relativeContextElement) {
        return { x: 0, y: 0 };
    }
    return {
        x: relativeContextElement.scrollLeft,
        y: relativeContextElement.scrollTop
    };
};
var stackingElementViewPort = function (el) {
    var relativeContextElement = getRelativeContextElement(el);
    if (!relativeContextElement) {
        return null;
    }
    return {
        height: relativeContextElement.scrollHeight,
        width: relativeContextElement.scrollWidth
    };
};
var useRelativePosition = function (el) {
    return Boolean(getRelativeContextElement(el));
};
var zoomLevel = function () {
    if (!utils.canUseDOM()) {
        return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
};
var isZoomed = function () {
    return zoomLevel() > 1;
};
var zIndex = function (anchor, container) {
    if (!anchor || !utils.canUseDOM()) {
        return null;
    }
    var sibling = siblingContainer(anchor, container);
    if (!sibling) {
        return null;
    }
    var result = [anchor].concat(parents(anchor, sibling)).reduce(function (index, p) {
        var zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
        var current = parseInt(zIndexStyle, 10);
        return current > index ? current : index;
    }, 0);
    return result ? result + 1 : null;
};
var domUtils = {
    addOffset: addOffset,
    addScroll: addScroll,
    align: align,
    boundingOffset: boundingOffset,
    getFontStyles: getFontStyles,
    getWindow: dom_utils_getWindow,
    hasOffsetParent: hasOffsetParent,
    offset: offset,
    offsetAtPoint: offsetAtPoint,
    position: dom_utils_position,
    removeScroll: removeScroll,
    restrictToView: restrictToView,
    scrollPosition: scrollPosition,
    scrollableParents: scrollableParents,
    getRelativeContextElement: getRelativeContextElement,
    stackingElementOffset: stackingElementOffset,
    stackingElementScroll: stackingElementScroll,
    stackingElementViewPort: stackingElementViewPort,
    useRelativePosition: useRelativePosition,
    windowViewport: windowViewport,
    zoomLevel: zoomLevel,
    isZoomed: isZoomed,
    zIndex: zIndex
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/align-element.js


var absoluteRect = function (anchor, element, offset, scale) {
    var scrollPos = align_element_elementScrollPosition(anchor, element);
    var rect = utils.eitherRect(domUtils.offset(anchor), offset);
    var stackScale = 2 * scale;
    var stackScroll = domUtils.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
        stackScroll.x /= stackScale;
        stackScroll.y /= stackScale;
    }
    var stackOffset = domUtils.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
        stackOffset.left /= stackScale;
        stackOffset.top /= stackScale;
    }
    return domUtils.removeScroll(domUtils.addScroll(utils.removeStackingOffset(utils.scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
};
var relativeRect = function (anchor, element, offset, scale) {
    var rect = utils.eitherRect(domUtils.position(anchor, element, scale), offset);
    return utils.scaleRect(rect, scale);
};
var align_element_elementScrollPosition = function (anchor, element) {
    return anchor ? { x: 0, y: 0 } : domUtils.scrollPosition(element);
};
var alignElement = function (settings) {
    var anchor = settings.anchor, element = settings.element, anchorAlign = settings.anchorAlign, elementAlign = settings.elementAlign, margin = settings.margin, offset = settings.offset, positionMode = settings.positionMode, scale = settings.scale;
    var currentScale = scale || 1;
    var fixedMode = positionMode === 'fixed' || !domUtils.hasOffsetParent(element);
    var anchorRect = fixedMode ? absoluteRect(anchor, element, offset, currentScale) : relativeRect(anchor, element, offset, currentScale);
    var elementRect = utils.scaleRect(domUtils.offset(element), currentScale);
    var result = domUtils.align({
        anchorAlign: anchorAlign,
        anchorRect: anchorRect,
        elementAlign: elementAlign,
        elementRect: elementRect,
        margin: margin
    });
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/position-element.js


var positionElement = function (settings) {
    var anchor = settings.anchor, currentLocation = settings.currentLocation, element = settings.element, anchorAlign = settings.anchorAlign, elementAlign = settings.elementAlign, collisions = settings.collisions, margin = settings.margin, scale = settings.scale;
    var currentScale = scale || 1;
    var elementOffset = domUtils.offsetAtPoint(element, currentLocation);
    var elementRect = utils.scaleRect(elementOffset, currentScale);
    var anchorOffset = utils.scaleRect(domUtils.offset(anchor), currentScale);
    var anchorRect = utils.eitherRect(anchorOffset, currentLocation);
    var viewPort = settings.viewPort || domUtils.windowViewport(element);
    viewPort.width = viewPort.width / currentScale;
    viewPort.height = viewPort.height / currentScale;
    var result = domUtils.restrictToView({
        anchorAlign: anchorAlign,
        anchorRect: anchorRect,
        collisions: collisions,
        elementAlign: elementAlign,
        elementRect: elementRect,
        margin: margin,
        viewPort: viewPort
    });
    var offset = domUtils.addOffset(currentLocation, result.offset);
    return {
        flip: result.flip,
        flipped: result.flipped,
        fit: result.fit,
        fitted: result.fitted,
        offset: offset
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.5/node_modules/@progress/kendo-popup-common/dist/es/main.js



























;// ../node_modules/.pnpm/@progress+kendo-react-popup_c4e49f01b86dffa09aaa3a18f34846d4/node_modules/@progress/kendo-react-popup/index.mjs
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";





const T = (i) => {
  i.style.transitionDuration = "", Array.from(i.classList).forEach((o) => {
    o.startsWith("k-slide-") && i.classList.remove(o);
  });
}, R = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent), L = (i, o, t, n, r) => {
  if (t === 0)
    return r();
  const s = "k-slide-" + o + "-" + n, a = s + "-active", p = (d) => {
    d.target === i && (i.removeEventListener("transitionend", p), T(i), n === "exit" ? i.style.display = "none" : i.style.display = "", r());
  };
  i.addEventListener("transitionend", p);
  const u = i.ownerDocument;
  if (!u)
    return;
  const f = u.defaultView;
  if (!f)
    return;
  const h = () => {
    T(i), i.classList.add(s), f.requestAnimationFrame(() => {
      i.style.transitionDuration = t + "ms", i.classList.add(a);
    });
  };
  R ? f.requestAnimationFrame(h) : h();
}, M = 1e3 / 60, U = function(i, o, t = {}) {
  let n, r, s, a, p = 0;
  t = t || {};
  const u = function() {
    p = t.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), n = void 0, a = i.apply(r, s), n || (r = s = null);
  };
  return function() {
    const h = (/* @__PURE__ */ new Date()).getTime();
    !p && t.leading === !1 && (p = h);
    const d = o - (h - p);
    return r = void 0, s = arguments, d <= 0 || d > o ? (n && (clearTimeout(n), n = void 0), p = h, a = i.apply(r, s), n || (r = s = null)) : !n && t.trailing !== !1 && (n = window.setTimeout(u, d)), a;
  };
}, k = {
  name: "@progress/kendo-react-popup",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613285,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, z = 100, S = 1;
function w(i, o) {
  if (i === o)
    return !0;
  if (!!i != !!o)
    return !1;
  const t = Object.getOwnPropertyNames(i), n = Object.getOwnPropertyNames(o);
  if (t.length !== n.length)
    return !1;
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    if (i[s] !== o[s])
      return !1;
  }
  return !0;
}
const F = {
  left: -1e3,
  top: 0
}, H = "k-animation-container", _ = "k-animation-container-shown", K = "k-child-animation-container", j = "k-popup";
class P extends index_js_.Component {
  constructor(o) {
    super(o), this.context = 0, this.state = { current: "hidden", previous: "hidden", props: {} }, this._popup = null, this.show = (t) => {
      this.setPosition(t), this.animate(t.firstChild, "enter", this.onOpened), this.setState({ current: "shown", previous: this.state.current });
    }, this.setPosition = (t) => {
      let { anchorAlign: n, popupAlign: r, collision: s, offset: a, anchor: p, margin: u, scale: f, positionMode: h } = this.props;
      const { width: d, height: v } = t.style;
      t.style.width = t.offsetWidth + "px", t.style.height = t.offsetHeight + "px";
      const y = alignElement({
        anchor: p,
        anchorAlign: n,
        element: t,
        elementAlign: r,
        offset: a,
        margin: u,
        positionMode: h,
        scale: f
      }), c = positionElement({
        anchor: p,
        anchorAlign: n,
        element: t,
        elementAlign: r,
        collisions: s,
        currentLocation: y,
        margin: this.props.margin
      });
      if (t.style.top = c.offset.top + "px", t.style.left = c.offset.left + "px", t.style.width = d, t.style.height = v, this._collisions = {
        fit: c.fit,
        fitted: c.fitted,
        flip: c.flip,
        flipped: c.flipped
      }, this.props.onPosition) {
        const C = {
          target: this,
          flipped: c.flipped,
          fitted: c.fitted
        };
        this.props.onPosition.call(void 0, C);
      }
    }, this.onOpened = () => {
      const t = this._popup;
      t && (this.props.show && t.classList.add(_), this.attachRepositionHandlers(t), this.props.onOpen && this.props.onOpen.call(void 0, { target: this }));
    }, this.animate = (t, n, r) => {
      if (!this.props.popupAlign)
        return;
      let s;
      const { horizontal: a, vertical: p } = this.props.popupAlign;
      a === "left" && p === "center" ? s = "right" : a === "right" && p === "center" ? s = "left" : p === "top" ? s = "down" : s = "up";
      const u = {
        down: "up",
        up: "down",
        left: "right",
        right: "left"
      };
      this._collisions && this._collisions.flipped && (s = u[s]), L(
        t,
        s,
        this.animationDuration[n],
        n,
        r
      );
    }, this.onClosing = (t) => {
      this.props.show || t.classList.remove(_), this.detachRepositionHandlers();
    }, this.onClosed = () => {
      this.state.current === "hiding" && this.state.previous === "shown" && this.setState({ current: "hidden", previous: this.state.current }), this.props.onClose && this.props.onClose.call(void 0, { target: this });
    }, this.getCurrentZIndex = () => this.context ? this.context + S : z, (0,index_mjs_.validatePackage)(k), this.reposition = U(this.reposition.bind(this), M);
  }
  /**
   * Represents the Popup DOM element.
   */
  get element() {
    return this._popup;
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(o, t) {
    const { show: n, anchor: r, anchorAlign: s, appendTo: a, collision: p, popupAlign: u, className: f, popupClass: h, style: d, offset: v, contentKey: y } = o, c = {
      ...t,
      props: {
        show: n,
        anchor: r,
        anchorAlign: s,
        appendTo: a,
        collision: p,
        popupAlign: u,
        className: f,
        popupClass: h,
        style: d,
        offset: v,
        contentKey: y
      }
    };
    return o.show ? t.current === "hidden" || t.current === "hiding" ? { ...c, current: "showing", previous: t.current } : t.current === "showing" ? { ...c, current: "shown", previous: t.current } : t.current === "shown" && (!w(v, t.props.offset) || !w(s, t.props.anchorAlign) || !w(a, t.props.appendTo) || !w(p, t.props.collision) || !w(u, t.props.popupAlign) || !w(d, t.props.style) || r !== t.props.anchor || h !== t.props.popupClass || f !== t.props.className) ? { ...c, current: "reposition", previous: t.current } : c : t.current === "hiding" || t.current === "hidden" ? { ...c, current: "hidden", previous: t.current } : { ...c, current: "hiding", previous: t.current };
  }
  /**
   *
   * @hidden
   */
  componentDidUpdate(o) {
    this.state.current === "showing" && this._popup ? this.show(this._popup) : this.state.current === "hiding" && this._popup ? (this.onClosing(this._popup), this.animate(this._popup.firstChild, "exit", this.onClosed)) : this.state.current === "reposition" && this.state.previous === "shown" ? setTimeout(() => {
      this.setState({ current: "shown", previous: this.state.current });
    }, 0) : this.state.current === "shown" && o.contentKey !== this.props.contentKey && this._popup && this.setPosition(this._popup);
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.state.current === "showing" && this._popup && this.show(this._popup);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.detachRepositionHandlers();
  }
  /**
   * @hidden
   */
  render() {
    const {
      children: o,
      className: t,
      popupClass: n,
      show: r,
      id: s,
      positionMode: a
    } = this.props, p = this.props.appendTo ? this.props.appendTo : index_mjs_.canUseDOM ? this.props.anchor && this.props.anchor.ownerDocument ? this.props.anchor.ownerDocument.body : document.body : void 0;
    this.state.current === "reposition" && this.state.previous === "shown" && this._popup && this.setPosition(this._popup);
    const u = Object.assign(
      {},
      { position: a, top: 0, left: -1e4 },
      this.props.style || {}
    ), f = this.state.current === "hiding";
    if ((r || f) && p) {
      const h = this.getCurrentZIndex(), d = /* @__PURE__ */ index_js_.createElement(index_mjs_.ZIndexContext.Provider, { value: h }, /* @__PURE__ */ index_js_.createElement(
        "div",
        {
          className: (0,index_mjs_.classNames)(H, t),
          id: s,
          ref: (v) => this._popup = v,
          style: {
            zIndex: h,
            ...u
          }
        },
        /* @__PURE__ */ index_js_.createElement("div", { className: (0,index_mjs_.classNames)(K), style: { transitionDelay: "0ms" } }, /* @__PURE__ */ index_js_.createElement(
          "div",
          {
            role: this.props.role,
            className: (0,index_mjs_.classNames)(j, n)
          },
          o
        ))
      ));
      return this.props.appendTo !== null ? react_dom_index_js_.createPortal(d, p) : d;
    }
    return null;
  }
  get animationDuration() {
    const o = this.props.animate;
    let t = 0, n = 0;
    return o && (o === !0 ? t = n = 300 : (t = o.openDuration || 0, n = o.closeDuration || 0)), { enter: t, exit: n };
  }
  attachRepositionHandlers(o) {
    this.detachRepositionHandlers(), this._scrollableParents = domUtils.scrollableParents(this.props.anchor || o), this._scrollableParents && this._scrollableParents.map((t) => t.addEventListener("scroll", this.reposition)), window.addEventListener("resize", this.reposition);
  }
  detachRepositionHandlers() {
    this._scrollableParents && (this._scrollableParents.map((o) => o.removeEventListener("scroll", this.reposition)), this._scrollableParents = void 0), window.removeEventListener("resize", this.reposition);
  }
  reposition() {
    this.setState({ current: "reposition", previous: this.state.current });
  }
}
P.propTypes = {
  anchor: function(i) {
    const o = i.anchor;
    return o && typeof o.nodeType != "number" ? new Error(
      "Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed."
    ) : null;
  },
  appendTo: function(i) {
    const o = i.appendTo;
    return o && typeof o.nodeType != "number" ? new Error(
      "Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed."
    ) : null;
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
      Collision.fit,
      Collision.flip,
      Collision.none
    ]),
    vertical: prop_types_index_js_.oneOf([
      Collision.fit,
      Collision.flip,
      Collision.none
    ])
  }),
  anchorAlign: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.oneOf([
      AlignPoint.left,
      AlignPoint.center,
      AlignPoint.right
    ]),
    vertical: prop_types_index_js_.oneOf([
      AlignPoint.top,
      AlignPoint.center,
      AlignPoint.bottom
    ])
  }),
  popupAlign: prop_types_index_js_.shape({
    horizontal: prop_types_index_js_.oneOf([
      AlignPoint.left,
      AlignPoint.center,
      AlignPoint.right
    ]),
    vertical: prop_types_index_js_.oneOf([
      AlignPoint.top,
      AlignPoint.center,
      AlignPoint.bottom
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
    "fixed",
    "absolute"
  ]),
  scale: prop_types_index_js_.number,
  style: prop_types_index_js_.object,
  onClose: prop_types_index_js_.func,
  onPosition: prop_types_index_js_.func,
  onOpen: prop_types_index_js_.func
};
P.defaultProps = {
  collision: {
    horizontal: Collision.fit,
    vertical: Collision.flip
  },
  anchorAlign: {
    horizontal: AlignPoint.left,
    vertical: AlignPoint.bottom
  },
  popupAlign: {
    horizontal: AlignPoint.left,
    vertical: AlignPoint.top
  },
  offset: F,
  animate: !0,
  show: !1,
  margin: {
    horizontal: 0,
    vertical: 0
  },
  positionMode: "absolute"
};
P.contextType = index_mjs_.ZIndexContext;
P.displayName = "PopupComponent";
const Z = index_js_.createContext((i) => i), W = index_js_.forwardRef((i, o) => {
  const n = index_js_.useContext(Z).call(void 0, i);
  return /* @__PURE__ */ index_js_.createElement(
    P,
    {
      ref: o,
      ...n
    }
  );
});
W.displayName = "Popup";



/***/ }

}]);