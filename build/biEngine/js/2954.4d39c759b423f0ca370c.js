"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[2954],{

/***/ 12954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aW: () => (/* reexport */ align_point),
  F1: () => (/* reexport */ collision),
  Op: () => (/* reexport */ align_element),
  Si: () => (/* reexport */ dom_utils),
  m$: () => (/* reexport */ position_element)
});

// UNUSED EXPORTS: addScroll, align, applyLocationOffset, boundingOffset, getDocumentElement, getWindow, getWindowViewPort, isBodyOffset, offset, offsetParent, parentScrollPosition, parents, position, positionWithScroll, removeScroll, restrictToView, scrollPosition, siblingContainer, siblings, utils, zIndex

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/align-point.js
/* harmony default export */ const align_point = ({
    "bottom": "bottom",
    "center": "center",
    "middle": "middle",
    "left": "left",
    "right": "right",
    "top": "top"
});

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/align.js


var align = function (options) {
    var anchorRect = options.anchorRect;
    var anchorAlign = options.anchorAlign;
    var elementRect = options.elementRect;
    var elementAlign = options.elementAlign;
    var margin = options.margin; if ( margin === void 0 ) margin = {};
    var anchorHorizontal = anchorAlign.horizontal;
    var anchorVertical = anchorAlign.vertical;
    var elementHorizontal = elementAlign.horizontal;
    var elementVertical = elementAlign.vertical;

    var horizontalMargin = margin.horizontal || 0;
    var verticalMargin = margin.vertical || 0;

    var top = anchorRect.top;
    var left = anchorRect.left;

    if (anchorVertical === align_point.bottom) {
        top += anchorRect.height;
    }

    if (anchorVertical === align_point.center || anchorVertical === align_point.middle) {
        top += Math.round(anchorRect.height / 2);
    }

    if (elementVertical === align_point.bottom) {
        top -= elementRect.height;
        verticalMargin *= -1;
    }

    if (elementVertical === align_point.center || elementVertical === align_point.middle) {
        top -= Math.round(elementRect.height / 2);
        verticalMargin *= -1;
    }

    if (anchorHorizontal === align_point.right) {
        left += anchorRect.width;
    }

    if (anchorHorizontal === align_point.center || anchorHorizontal === align_point.middle) {
        left += Math.round(anchorRect.width / 2);
    }

    if (elementHorizontal === align_point.right) {
        left -= elementRect.width;
        horizontalMargin *= -1;
    }

    if (elementHorizontal === align_point.center || elementHorizontal === align_point.middle) {
        left -= Math.round(elementRect.width / 2);
        horizontalMargin *= -1;
    }

    return {
        top: top + verticalMargin,
        left: left + horizontalMargin
    };
};

/* harmony default export */ const es_align = (align);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/collision.js
/* harmony default export */ const collision = ({
    "fit": "fit",
    "flip": "flip",
    "none": "none"
});

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js



var fit = function(position, size, viewPortSize) {
    var output = 0;

    if (position + size > viewPortSize) {
        output = viewPortSize - (position + size);
    }

    if (position < 0) {
        output = -position;
    }

    return output;
};

var flip = function(ref) {
    var offset = ref.offset;
    var size = ref.size;
    var anchorSize = ref.anchorSize;
    var viewPortSize = ref.viewPortSize;
    var anchorAlignPoint = ref.anchorAlignPoint;
    var elementAlignPoint = ref.elementAlignPoint;
    var margin = ref.margin;

    var output = 0;

    var isPositionCentered = elementAlignPoint === align_point.center || elementAlignPoint === align_point.middle;
    var isOriginCentered = anchorAlignPoint === align_point.center || anchorAlignPoint === align_point.middle;
    var marginToAdd = 2 * margin; //2x to keep margin after flip

    if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
        var isBeforeAnchor = anchorAlignPoint === align_point.top || anchorAlignPoint === align_point.left;
        if (offset < 0 && isBeforeAnchor) {
            output = size + anchorSize + marginToAdd;
            if (offset + output + size > viewPortSize) {
                output = 0; //skip flip
            }
        } else if (offset >= 0 && !isBeforeAnchor) {
            if (offset + size > viewPortSize) {
                output += -(anchorSize + size + marginToAdd);
            }

            if (offset + output < 0) {
                output = 0; //skip flip
            }
        }
    }

    return output;
};

var restrictToView = function (options) {
    var anchorRect = options.anchorRect;
    var anchorAlign = options.anchorAlign;
    var elementRect = options.elementRect;
    var elementAlign = options.elementAlign;
    var collisions = options.collisions;
    var viewPort = options.viewPort;
    var margin = options.margin; if ( margin === void 0 ) margin = {};
    var elementTop = elementRect.top;
    var elementLeft = elementRect.left;
    var elementHeight = elementRect.height;
    var elementWidth = elementRect.width;
    var viewPortHeight = viewPort.height;
    var viewPortWidth = viewPort.width;
    var horizontalMargin = margin.horizontal || 0;
    var verticalMargin = margin.vertical || 0;

    var left = 0;
    var top = 0;

    var isVerticalFit = collisions.vertical === collision.fit;
    var isHorizontalFit = collisions.horizontal === collision.fit;
    var isVerticalFlip = collisions.vertical === collision.flip;
    var isHorizontalFlip = collisions.horizontal === collision.flip;

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
            vertical: flippedVertical
        },
        fit: {
            horizontal: fittedHorizontal,
            vertical: fittedVertical
        },
        offset: {
            left: left,
            top: top
        }
    };
};

/* harmony default export */ const restrict_to_view = (restrictToView);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/utils.js

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
    if (!stackingOffset) { return rect; }

    var result = {
        height: rect.height,
        left: rect.left - stackingOffset.left,
        top: rect.top - stackingOffset.top,
        width: rect.width
    };

    return result;
};

function memoize(fun) {
    var result;
    var called = false;

    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (called) {
            return result;
        }

        result = fun.apply(void 0, args);
        called = true;
        return result;
    };
}

var hasRelativeStackingContext = memoize(function (elementSource) {
    if (!canUseDOM()) { return false; }

    // Component need to pass element to make sure document owner is correct.
    // This however might be performance hit if checked for example on each drag event.
    var currentDocument = elementSource ? elementSource.ownerDocument : document;

    if (!currentDocument || !currentDocument.body) { return false; }

    var top = 10;
    var parent = currentDocument.createElement("div");
    parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
    parent.innerHTML = "<div style=\"position: fixed; top: " + top + "px;\">child</div>";

    currentDocument.body.appendChild(parent);

    var isDifferent = parent.children[0].getBoundingClientRect().top !== top;

    currentDocument.body.removeChild(parent);

    return isDifferent;
});

var canUseDOM = function () { return Boolean(
    // from fbjs
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
); };

var utils = {
    eitherRect: eitherRect,
    scaleRect: scaleRect,
    removeStackingOffset: removeStackingOffset,
    hasRelativeStackingContext: hasRelativeStackingContext,
    canUseDOM: canUseDOM
};

/* harmony default export */ const es_utils = (utils);
;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
    return {
        top: rect.top + scroll.y,
        left: rect.left + scroll.x,
        height: rect.height,
        width: rect.width
    };
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
    return element.ownerDocument || element.document || element;
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/window.js


var getWindow = function (element) { return ownerDocument(element).defaultView; };

/* harmony default export */ const es_window = (getWindow);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/document.js


var getDocument = function (element) { return ownerDocument(element).documentElement; };

/* harmony default export */ const es_document = (getDocument);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;

function scrollbarWidth() {
    if (!cachedWidth && typeof document !== 'undefined') {
        var div = document.createElement("div");

        div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
        div.innerHTML = "&nbsp;";
        document.body.appendChild(div);

        cachedWidth = div.offsetWidth - div.scrollWidth;

        document.body.removeChild(div);
    }

    return cachedWidth;
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js




function windowViewport(element) {
    var win = es_window(element);
    var document = es_document(element);
    var result = {
        height: win.innerHeight,
        width: win.innerWidth
    };

    if (document.scrollHeight - document.clientHeight > 0) {
        result.width -= scrollbarWidth();
    }

    return result;
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js


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

    var ref = element.getBoundingClientRect();
    var bottom = ref.bottom;
    var left = ref.left;
    var right = ref.right;
    var top = ref.top;

    return {
        bottom: bottom,
        left: left,
        right: right,
        top: top
    };
};

/* harmony default export */ const bounding_offset = (boundingOffset);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
    return {
        top: rect.top - scroll.y,
        left: rect.left - scroll.x,
        height: rect.height,
        width: rect.width
    };
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js



function scrollPosition(element) {
    var documentElement = es_document(element);
    var win = es_window(element);

    return {
        x: win.pageXOffset || documentElement.scrollLeft || 0,
        y: win.pageYOffset || documentElement.scrollTop || 0
    };
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function (element) {
    var ref = element.style;
    var display = ref.display;
    var left = ref.left;
    var position = ref.position;

    element.style.display = '';
    element.style.left = '-10000px';
    element.style.position = 'absolute';

    var rect = element.getBoundingClientRect();

    element.style.display = display;
    element.style.left = left;
    element.style.position = position;

    return rect;
};

var offset = function (element) {
    var rect = element.getBoundingClientRect();
    var left = rect.left;
    var top = rect.top;

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

/* harmony default export */ const es_offset = (offset);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js


/* harmony default export */ function element_scroll_position(element) {
    if (element === (element.ownerDocument || {}).body) {
        return scrollPosition(element);
    }

    return {
        x: element.scrollLeft,
        y: element.scrollTop
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js


var offsetParent = function (element) {
    var offsetParent = element.offsetParent;

    while (offsetParent && offsetParent.style.position === "static") {
        offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || es_document(element);
};

/* harmony default export */ const offset_parent = (offsetParent);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js



function parentScrollPosition(element) {
    var parent = offset_parent(element);

    return parent ? element_scroll_position(parent) : { x: 0, y: 0 };
}

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js



/* harmony default export */ function offset_parent_scroll_position(offsetParentElement, element) { return ( // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position(offsetParentElement) : parentScrollPosition(element)
); };

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/position.js




var position = function (element, parent) {
    var win = es_window(element);
    var elementStyles = win.getComputedStyle(element);
    var offset = es_offset(element);
    var parentElement = parent || offset_parent(element);

    var ownerDocument = element.ownerDocument;
    var useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;

    var parentOffset = { top: 0, left: 0 };

    if (elementStyles.position !== "fixed" && useRelative) {
        var parentStyles = win.getComputedStyle(parentElement);

        parentOffset = es_offset(parentElement);
        parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
        parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
    }

    return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left,
        height: offset.height,
        width: offset.width
    };
};

/* harmony default export */ const es_position = (position);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js




/* harmony default export */ function position_with_scroll(element, parent, scale) {
    if ( scale === void 0 ) scale = 1;

    var offsetParentElement = parent ? offset_parent(parent) : null;
    var ref = es_position(element, offsetParentElement);
    var top = ref.top;
    var left = ref.left;
    var height = ref.height;
    var width = ref.width;
    var ref$1 = offset_parent_scroll_position(offsetParentElement, element);
    var x = ref$1.x;
    var y = ref$1.y;
    var ownerDocument = element.ownerDocument;
    var positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;

    return {
        top: top + y * positionScale,
        left: left + x * positionScale,
        height: height,
        width: width
    };
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/parents.js
/* harmony default export */ function parents(element, until) {
    var result = [];
    var next = element.parentNode;

    while (next) {
        result.push(next);

        if (next === until) { break; }

        next = next.parentNode;
    }

    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/siblings.js
/* harmony default export */ function siblings(element) {
    var result = [];

    var sibling = element.parentNode.firstElementChild;

    while (sibling) {
        if (sibling !== element) {
            result.push(sibling);
        }

        sibling = sibling.nextElementSibling;
    }
    return result;
};

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
/* eslint-disable no-loop-func */




/* harmony default export */ function sibling_container(anchor, container) {
    var parentElements = parents(anchor);
    var containerElement = container;
    var siblingElements;
    var result;

    while (containerElement) {
        siblingElements = siblings(containerElement);

        result = parentElements.reduce(
            function (list, p) { return list.concat(siblingElements.filter(function (s) { return s === p; })); },
            []
        )[0];

        if (result) { break; }

        containerElement = containerElement.parentElement;
    }

    return result;
};


;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/dom-utils.js
/* eslint-disable arrow-body-style */













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
    return es_utils.canUseDOM() ? window : null;
};

var getFontStyles = function (el) {
    var window = dom_utils_getWindow();

    if (!window || !el) { return []; }

    var computedStyles = window.getComputedStyle(el);

    return STYLES.map(function (font) { return ({ key: font, value: computedStyles[font] }); });
};

var hasOffsetParent = function (el) {
    if (!el) { return false; }

    return Boolean(el.offsetParent);
};

var dom_utils_offset = function (el) {
    if (!el) { return null; }

    return es_offset(el);
};

var offsetAtPoint = function (element, currentLocation) {
    if (!element) { return null; }

    var ref = element.style;
    var left = ref.left;
    var top = ref.top;
    var transition = ref.transition;

    element.style.transition = 'none';
    element.style.left = (currentLocation.left) + "px";
    element.style.top = (currentLocation.top) + "px";

    var currentOffset = es_offset(element);

    element.style.left = left;
    element.style.top = top;

    // prevents elements with transition to be animated because of the change
    // tslint:disable-next-line:no-unused-expression
    element.offsetHeight;

    element.style.transition = transition;

    return currentOffset;
};

var dom_utils_position = function (element, popupElement, scale) {
    if (!element || !popupElement) { return null; }

    var currentScale = scale || 1;

    return position_with_scroll(element, popupElement, currentScale);
};

var OVERFLOW_REGEXP = /auto|scroll/;

var overflowElementStyle = function (element) {
    return ("" + (element.style.overflow) + (element.style.overflowX) + (element.style.overflowY));
};

var overflowComputedStyle = function (element) {
    var styles = window.getComputedStyle(element);
    return ("" + (styles.overflow) + (styles.overflowX) + (styles.overflowY));
};

var overflowStyle = function (element) {
    return overflowElementStyle(element) || overflowComputedStyle(element);
};

var scrollableParents = function (element) {
    var parentElements = [];

    if (!es_utils.canUseDOM()) { return parentElements; }

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
    if (!el || !es_utils.hasRelativeStackingContext()) { return null; }

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

    if (!relativeContextElement) { return null; }

    return es_offset(relativeContextElement);
};

var stackingElementScroll = function (el) {
    var relativeContextElement = getRelativeContextElement(el);

    if (!relativeContextElement) { return { x: 0, y: 0 }; }

    return {
        x: relativeContextElement.scrollLeft,
        y: relativeContextElement.scrollTop
    };
};

var stackingElementViewPort = function (el) {
    var relativeContextElement = getRelativeContextElement(el);

    if (!relativeContextElement) { return null; }

    return {
        height: relativeContextElement.scrollHeight,
        width: relativeContextElement.scrollWidth
    };
};

var useRelativePosition = function (el) {
    return Boolean(getRelativeContextElement(el));
};

var zoomLevel = function () {
    if (!es_utils.canUseDOM()) { return 1; }

    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
};

var isZoomed = function () {
    return zoomLevel() > 1;
};

var zIndex = function (anchor, container) {
    if (!anchor || !es_utils.canUseDOM()) { return null; }

    var sibling = sibling_container(anchor, container);

    if (!sibling) { return null; }

    var result = [ anchor ].concat(parents(anchor, sibling)).reduce(
        function (index, p) {
            var zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
            var current = parseInt(zIndexStyle, 10);
            return current > index ? current : index;
        },
        0
    );

    return result ? (result + 1) : null;
};

var domUtils = {
    addOffset: addOffset,
    addScroll: addScroll,
    align: es_align,
    boundingOffset: bounding_offset,
    getFontStyles: getFontStyles,
    getWindow: dom_utils_getWindow,
    hasOffsetParent: hasOffsetParent,
    offset: dom_utils_offset,
    offsetAtPoint: offsetAtPoint,
    position: dom_utils_position,
    removeScroll: removeScroll,
    restrictToView: restrict_to_view,
    scrollPosition: scrollPosition,
    scrollableParents: scrollableParents,
    getRelativeContextElement: getRelativeContextElement,
    stackingElementOffset: stackingElementOffset,
    stackingElementScroll: stackingElementScroll,
    stackingElementViewPort: stackingElementViewPort,
    useRelativePosition: useRelativePosition,
    windowViewPort: windowViewport,
    zoomLevel: zoomLevel,
    isZoomed: isZoomed,
    zIndex: zIndex
};

/* harmony default export */ const dom_utils = (domUtils);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/align-element.js
/* eslint-disable arrow-body-style */




var absoluteRect = function (anchor, element, offset, scale) {
    var scrollPos = elementScrollPosition(anchor, element);
    var rect = es_utils.eitherRect(dom_utils.offset(anchor), offset);
    var stackScale = 2 * scale;

    var stackScroll = dom_utils.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
        stackScroll.x /= stackScale;
        stackScroll.y /= stackScale;
    }

    var stackOffset = dom_utils.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
        stackOffset.left /= stackScale;
        stackOffset.top /= stackScale;
    }

    return dom_utils.removeScroll(
        dom_utils.addScroll(
            es_utils.removeStackingOffset(
                es_utils.scaleRect(rect, scale),
                stackOffset
            ),
            stackScroll
        ),
        scrollPos
    );
};

var relativeRect = function (anchor, element, offset, scale) {
    var rect = es_utils.eitherRect(dom_utils.position(anchor, element, scale), offset);
    return es_utils.scaleRect(rect, scale);
};

var elementScrollPosition = function (anchor, element) {
    return anchor ? { x: 0, y: 0 } : dom_utils.scrollPosition(element);
};

var alignElement = function (settings) {
    var anchor = settings.anchor;
    var element = settings.element;
    var anchorAlign = settings.anchorAlign;
    var elementAlign = settings.elementAlign;
    var margin = settings.margin;
    var offset = settings.offset;
    var positionMode = settings.positionMode;
    var scale = settings.scale;

    var currentScale = scale || 1;
    var fixedMode = positionMode === 'fixed' || !dom_utils.hasOffsetParent(element);
    var anchorRect = fixedMode ? absoluteRect(anchor, element, offset, currentScale) : relativeRect(anchor, element, offset, currentScale);
    var elementRect = es_utils.scaleRect(dom_utils.offset(element), currentScale);

    var result = dom_utils.align({
        anchorAlign: anchorAlign,
        anchorRect: anchorRect,
        elementAlign: elementAlign,
        elementRect: elementRect,
        margin: margin
    });

    return result;
};

/* harmony default export */ const align_element = (alignElement);

;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/position-element.js



var positionElement = function (settings) {
    var anchor = settings.anchor;
    var currentLocation = settings.currentLocation;
    var element = settings.element;
    var anchorAlign = settings.anchorAlign;
    var elementAlign = settings.elementAlign;
    var collisions = settings.collisions;
    var margin = settings.margin;
    var scale = settings.scale;

    var currentScale = scale || 1;
    var elementOffset = dom_utils.offsetAtPoint(element, currentLocation);
    var elementRect = es_utils.scaleRect(elementOffset, currentScale);
    var anchorOffset = es_utils.scaleRect(dom_utils.offset(anchor), currentScale);
    var anchorRect = es_utils.eitherRect(anchorOffset, currentLocation);

    var viewPort = settings.viewPort || dom_utils.windowViewPort(element);
    viewPort.width = viewPort.width / currentScale;
    viewPort.height = viewPort.height / currentScale;

    var result = dom_utils.restrictToView({
        anchorAlign: anchorAlign,
        anchorRect: anchorRect,
        collisions: collisions,
        elementAlign: elementAlign,
        elementRect: elementRect,
        margin: margin,
        viewPort: viewPort
    });

    var offset = dom_utils.addOffset(currentLocation, result.offset);

    return {
        flip: result.flip,
        flipped: result.flipped,
        fit: result.fit,
        fitted: result.fitted,
        offset: offset
    };
};

/* harmony default export */ const position_element = (positionElement);
;// ../node_modules/.pnpm/@progress+kendo-popup-common@1.9.2/node_modules/@progress/kendo-popup-common/dist/es/main.js































/***/ })

}]);